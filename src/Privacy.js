// Deleting and downloading a family's data (specs/store-readiness.md: deletable data, the stores' account deletion; the
// privacy law's right to see one's data). A parent does it for their own family from the parents' area, the admin for
// any family from the Data card. Nothing is kept about a deleted kid: every row with the kid's name goes, in every tab,
// the audit trail too; the trail only notes that "a kid" or "a family" was deleted.

// Columns that hold a kid's name, and columns that hold a family (group) id.
var KID_COLS = { Girls: ['Name'], Games: ['Girl'], Review: ['Girl'], Gates: ['Girl'], Assignments: ['Girl'], Log: ['Girl'], Push: ['Girl'],
  Bonus: ['Girl'], Shop: ['Girl'], Wardrobe: ['Girl'], Words: ['Girl'], Flags: ['Girl'], Placements: ['Girl'], Chats: ['Girl'],
  Duos: ['A', 'B'], Duels: ['Host', 'Guest'], Audit: ['Who'] };
var GROUP_COLS = { Groups: ['Id'], Rewards: ['Group'], ParentPush: ['Who'], Feedback: ['Group'], Audit: ['Group'], Plans: ['Group'] };

function privacyTarget(access, groupId, kidName) {
  var g = access.isAdmin ? groups().filter(function (x) { return String(x.Id) === String(groupId); })[0] : access.group;
  if (!g) throw new Error('No such family');
  var kids = readTable('Girls').filter(function (k) { return String(k.Group) === String(g.Id); });
  if (kidName) {
    kids = kids.filter(function (k) { return k.Name === String(kidName).trim(); });
    if (!kids.length) throw new Error('No such kid in this family');
  }
  return { group: g, kids: kids.map(function (k) { return k.Name; }), whole: !kidName };
}

// Removes the rows of one tab that match. Apps Script: the kept rows are written back in one go (deleting scattered
// rows one by one is slow there); Cloudflare: deleteRows, so only the rows from the first deleted one are saved again.
function eraseRows(table, match) {
  var sh = sheet(table);
  if (!sh || sh.getLastRow() < 2) return 0;
  var values = sh.getDataRange().getValues(), head = values[0], gone = 0;
  var hit = function (r) {
    if (r.join('') === '') return false;   // a blank row left by an earlier clear
    var o = {}; head.forEach(function (h, i) { o[h] = r[i]; }); return match(o);
  };
  if (typeof PLATFORM !== 'undefined') {
    for (var i = values.length - 1; i >= 1; i--) {
      if (!hit(values[i])) continue;
      var j = i;
      while (j - 1 >= 1 && hit(values[j - 1])) j--;
      sh.deleteRows(j + 1, i - j + 1);
      gone += i - j + 1;
      i = j;
    }
  } else {
    var keep = values.slice(1).filter(function (r) { return !hit(r); });
    gone = values.length - 1 - keep.length;
    if (gone) {
      sh.getRange(2, 1, values.length - 1, head.length).clearContent();
      if (keep.length) sh.getRange(2, 1, keep.length, head.length).setValues(keep);
    }
  }
  if (gone) invalidate(table);
  return gone;
}

function eraseFamily(t) {
  var names = {}, n = 0;
  t.kids.forEach(function (k) { names[k] = 1; });
  var gid = String(t.group.Id);
  Object.keys(KID_COLS).forEach(function (table) {
    n += eraseRows(table, function (o) {
      if (KID_COLS[table].some(function (c) { return names[String(o[c]).trim()]; })) return true;
      return t.whole && GROUP_COLS[table] && GROUP_COLS[table].some(function (c) { return String(o[c]).trim() === gid; });
    });
  });
  if (t.whole) Object.keys(GROUP_COLS).forEach(function (table) {
    if (KID_COLS[table]) return;
    n += eraseRows(table, function (o) { return GROUP_COLS[table].some(function (c) { return String(o[c]).trim() === gid; }); });
  });
  return n;
}

// confirm: the word the parent typed ('DELETE' or 'מחיקה'), so a stray tap never deletes.
function apiDeleteData(pin, groupId, kidName, confirm) {
  ensureSetup();
  if (['DELETE', 'מחיקה'].indexOf(String(confirm || '').trim()) < 0) throw new Error('Type the word to confirm');
  var access = parentAccess(pin);
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  var t, rows;
  try {
    t = privacyTarget(access, groupId, kidName);
    rows = eraseFamily(t);
  } finally {
    lock.releaseLock();
  }
  audit(access.isAdmin ? 'admin' : 'parent', access.isAdmin ? 'admin' : '', '', 'delete',
    (t.whole ? 'a family' : 'a kid') + ' and all their data (' + rows + ' rows)', true);
  return { deleted: t.whole ? 'family' : 'kid', kids: t.kids.length, rows: rows };
}

// Everything kept about the family, as readable rows per tab (the parent's own copy).
function apiExportData(pin, groupId) {
  ensureSetup();
  var access = parentAccess(pin), t = privacyTarget(access, groupId, '');
  var names = {}, gid = String(t.group.Id), out = {};
  t.kids.forEach(function (k) { names[k] = 1; });
  Object.keys(HEADERS).forEach(function (table) {
    var rows = readTable(table).filter(function (o) {
      return (KID_COLS[table] || []).some(function (c) { return names[String(o[c]).trim()]; }) ||
        (GROUP_COLS[table] || []).some(function (c) { return String(o[c]).trim() === gid; });
    });
    if (rows.length) out[table] = rows.map(function (o) {
      var c = {};
      Object.keys(o).forEach(function (k) { c[k] = o[k] instanceof Date ? o[k].toISOString() : o[k]; });
      return c;
    });
  });
  audit(access.isAdmin ? 'admin' : 'parent', access.isAdmin ? 'admin' : '', gid, 'export', 'the family data', true);
  return { app: 'English with Coco', exported: new Date().toISOString(), family: String(t.group.Name), kids: t.kids, tables: out };
}

// Least data (specs/store-readiness.md): the audit trail keeps 180 days, the text of what a kid said to Coco 90 days
// (the counts stay). Runs at night on Cloudflare (platformTick). It removes the old audit rows only when there are a
// month's worth of them, so the table is rewritten about once a month, not every night.
var KEEP = { auditDays: 180, saidDays: 90, batchDays: 30 };
function retentionSweep() {
  var now = Date.now(), day = 86400000, out = { audit: 0, said: 0 };
  var limit = fmt(new Date(now - KEEP.auditDays * day)), batch = fmt(new Date(now - (KEEP.auditDays + KEEP.batchDays) * day));
  var audits = readTable('Audit');
  if (audits.length && String(audits[0].Date) < batch) out.audit = eraseRows('Audit', function (o) { return String(o.Date instanceof Date ? fmt(o.Date) : o.Date) < limit; });
  var sh = sheet('Chats');
  if (sh && sh.getLastRow() > 1) {
    var v = sh.getDataRange().getValues(), h = v[0], said = h.indexOf('Said'), dc = h.indexOf('Date');
    var old = fmt(new Date(now - KEEP.saidDays * day));
    for (var i = 1; i < v.length; i++) {
      var d = v[i][dc] instanceof Date ? fmt(v[i][dc]) : String(v[i][dc]);
      if (d < old && v[i][said] !== '') { sh.getRange(i + 1, said + 1).setValue(''); out.said++; }
    }
    if (out.said) invalidate('Chats');
  }
  return out;
}

// What a family may use. Today everyone is in the pilot with everything open; when the stores sell a plan, the store's
// notice (worker/api: /hooks/apple, /hooks/google, off for now) writes a row in Plans and this reads it.
function entitlement(groupId) {
  var rows = readTable('Plans').filter(function (r) { return String(r.Group) === String(groupId); });
  var now = fmt(new Date()), live = rows.filter(function (r) { return !r.Until || String(r.Until) >= now; }).pop();
  return live ? { plan: String(live.Plan), source: String(live.Source), until: String(live.Until || ''), full: true } : { plan: 'pilot', source: '', until: '', full: true };
}
