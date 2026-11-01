// Privacy, consent and kids' safety (specs/store-readiness.md, night review 2026-11-01): the privacy notice a family
// agreed to (its version and time), the parents' switches (the microphone per kid, playing with other families per
// family, a kid's reminders and their hour), blocking and reporting another kid, the limit on invites and nudges, and
// the retention sweep's second half (opens rolled up into daily totals, inactive kids deleted after a notice).
// Only functions and literal constants here: files load in one global scope, so nothing at the top level may use
// another file's names.

// The privacy notice shown at sign-up (renderJoin) and in the re-consent card: its version lives here and in Index.html
// (PRIVACY_V; test/sim.js checks they agree). 1 = the first pilot text (2026-10-26), which said things that were not true.
var NOTICE = { v: 2 };
var SAFETY = {
  contactsPerHour: 8,         // named invites, duo requests and nudges one kid may send in an hour
  reportsPerDay: 5,
  remindHours: [14, 15, 16, 17, 18, 19, 20],   // the hours a parent may pick (daytime only, store rule 8)
  rawOpenDays: 30,            // raw opens in the audit trail, then one total a day
  rollBatchDays: 7,           // roll up once a week's worth is older than rawOpenDays (fewer rewrites on Cloudflare)
  inactiveDays: 365,          // no open and no practice for this long: the kid's account is deleted
  noticeDays: 30              // the admin hears about it this many days before
};
var REPORT_REASONS = { invites: 'Too many invites', unkind: 'Something felt unkind', stranger: 'I do not know this player', other: 'Something else' };

// The parents' calls go through here (the parents' sign-in may change; this is the one place to follow it).
function safetyParent(pin) { ensureSetup(); return parentAccess(pin); }
function safetyKidOf(access, name) {
  var kid = findGirl(name);
  if (!kid || (!access.isAdmin && groupOf(kid) !== String(access.group.Id))) throw new Error('Unknown kid');
  return kid;
}
function safetyBack(access) {
  return parentData(access.isAdmin ? groups() : [access.group], access.isAdmin, access.isAdmin ? 'admin' : String(access.group.Id));
}
function safetyWho(access) { return access.isAdmin ? 'admin' : access.group.Name; }

// ---------- Consent ----------

// What the family agreed to: the version of the notice and when. A family the admin added before the sign-up link
// has none; a family that signed up before 2026-11-01 has a date only (version 1).
function consentInfo(g) {
  var v = Number(g.ConsentV) || (String(g.Consent || '').trim() ? 1 : 0);
  return { v: v, at: String(g.ConsentAt || g.Consent || ''), current: NOTICE.v, due: v < NOTICE.v };
}

function apiParentConsent(pin, v) {
  var access = safetyParent(pin);
  if (access.isAdmin) throw new Error('A family agrees from its own parents\' area');
  if (Number(v) !== NOTICE.v) throw new Error('הנוסח התעדכן. רעננו את הדף וקראו שוב.');
  var at = Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd HH:mm');
  upsertRow('Groups', 'Id', String(access.group.Id), { ConsentV: NOTICE.v, ConsentAt: at, Consent: at.slice(0, 10) });
  audit('parent', access.group.Name, String(access.group.Id), 'consent', 'privacy notice v' + NOTICE.v);
  access.group = findGroup(access.group.Id);
  return safetyBack(access);
}

// ---------- Playing with other families ----------

// Off unless a parent turned it on (Groups.FriendsOn). The admin's Groups.Friends stays an override: 'no' keeps the
// family out whatever the parent chose; 'yes' (set by the admin before 2026-11-01) counts as on until a parent says no.
function friendsState(g) {
  if (!g) return { on: false, admin: '' };
  var admin = String(g.Friends || '').trim().toLowerCase(), parent = String(g.FriendsOn || '').trim().toLowerCase();
  var on = admin !== 'no' && (parent === 'yes' || (parent !== 'no' && admin === 'yes'));
  return { on: on, admin: admin === 'no' || admin === 'yes' ? admin : '', parent: parent };
}

function apiParentFriends(pin, on) {
  var access = safetyParent(pin);
  if (access.isAdmin) throw new Error('A family changes this from its own parents\' area');
  var g = access.group;
  if (friendsState(g).admin === 'no' && on) throw new Error('המשחק עם משפחות אחרות סגור למשפחה הזו. אפשר לבקש לפתוח דרך כפתור המשוב.');
  upsertRow('Groups', 'Id', String(g.Id), { FriendsOn: on ? 'yes' : 'no' });
  audit('parent', g.Name, String(g.Id), 'play with other families', on ? 'on' : 'off');
  access.group = findGroup(g.Id);
  return safetyBack(access);
}

// ---------- The microphone and reminders, per kid ----------

// Talk with Chacho, Ask Chacho and the Studio use the browser's speech recognition, which sends the voice to Google
// (Chrome, Android) or usually Apple (Safari) unless the browser can do it on the phone: off until a parent turns it on.
// The Nest's microphone (loudness, the echo) never leaves the phone and does not depend on this.
function kidMicOn(kid) { return String(kid.Mic || '').trim().toLowerCase() === 'yes'; }

function apiParentMic(pin, name, on) {
  var access = safetyParent(pin), kid = safetyKidOf(access, name);
  setGirlFields(kid.Name, { Mic: on ? 'yes' : '' });
  audit(access.isAdmin ? 'admin' : 'parent', safetyWho(access), groupOf(kid), 'microphone', kid.Name + ': ' + (on ? 'on' : 'off'));
  return safetyBack(access);
}

// The hour of a kid's reminder, or 0 = no reminders. Empty = the app's default hour (Settings.ReminderHour).
function kidRemindHour(kid) {
  var v = String(kid.RemindAt || '').trim().toLowerCase();
  if (v === 'off') return 0;
  var h = Number(v);
  if (v && h >= 0 && h <= 23) return h;
  return Number(getSetting('ReminderHour')) || 17;
}

function apiParentRemind(pin, name, hour) {
  var access = safetyParent(pin), kid = safetyKidOf(access, name);
  var off = hour === 'off' || hour === 0 || hour === '0', h = Number(hour);
  if (!off && SAFETY.remindHours.indexOf(h) < 0) throw new Error('בחרו שעה');
  setGirlFields(kid.Name, { RemindAt: off ? 'off' : String(h) });
  audit(access.isAdmin ? 'admin' : 'parent', safetyWho(access), groupOf(kid), 'reminders', kid.Name + ': ' + (off ? 'off' : h + ':00'));
  return safetyBack(access);
}

// Every hour: the kids whose reminder hour it is and who have not practiced today get one gentle notification.
function kidReminders(h) {
  var t = today(), done = {}, withDevices = {};
  readTable('Log').forEach(function (l) { if (l.Date === t) done[l.Girl] = true; });
  readTable('Push').forEach(function (s) { withDevices[s.Girl] = true; });
  readTable('Girls').forEach(function (k) {
    if (!withDevices[k.Name] || done[k.Name] || kidRemindHour(k) !== h) return;
    try { pushToKid(k.Name, reminderMessage(k)); } catch (e) { console.error(e); }
  });
}

// ---------- Block and report ----------

function blockedPair(a, b) {
  return readTable('Blocks').some(function (r) { return (r.Girl === a && r.Blocked === b) || (r.Girl === b && r.Blocked === a); });
}

// A kid blocks another kid (and may say why, from a preset list): the other kid disappears from her lists, and
// invites, duo requests and nudges stop both ways. With a reason it is also a report: the admin is told, and the
// kid's parents see it in their area.
function apiKidBlock(name, pin, other, reason) {
  var kid = auth(name, pin), them = findGirl(other);
  if (!them || them.Name === kid.Name) throw new Error('Unknown player');
  reason = REPORT_REASONS[reason] ? reason : '';
  var t = today(), reported = false;
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var rows = readTableUncached('Blocks');
    if (!rows.some(function (r) { return r.Girl === kid.Name && r.Blocked === them.Name; })) {
      appendRow('Blocks', { Timestamp: new Date(), Girl: kid.Name, Blocked: them.Name, Date: t });
    }
    if (reason && readTableUncached('Reports').filter(function (r) { return r.Girl === kid.Name && r.Date === t; }).length < SAFETY.reportsPerDay) {
      appendRow('Reports', { Timestamp: new Date(), Girl: kid.Name, About: them.Name, Date: t, Reason: reason, Group: groupOf(kid) });
      reported = true;
    }
    // Invites waiting between the two are closed.
    duelRows().forEach(function (d) {
      var pair = (d.Host === kid.Name && d.Guest === them.Name) || (d.Host === them.Name && d.Guest === kid.Name);
      if (pair && (d.State === 'invited' || d.State === 'challenge' || d.State === 'solo')) { d.State = 'cancelled'; d.Ended = new Date().toISOString(); duelSave(d); }
    });
    duoRows().forEach(function (d) {
      if (duoHas(d, kid.Name) && duoHas(d, them.Name) && d.State === 'invited') { d.State = 'declined'; d.Ended = new Date().toISOString(); duoSave(d); }
    });
  } finally {
    lock.releaseLock();
  }
  audit('kid', kid.Name, groupOf(kid), reported ? 'report' : 'block', reported ? REPORT_REASONS[reason] : '');
  if (reported) {
    try { notifyAdmin({ title: 'A kid reported another kid', body: kid.Name + ' about ' + them.Name + ': ' + REPORT_REASONS[reason] }); } catch (e) { console.error(e); }
  }
  return duelHome(findGirl(kid.Name));
}

// A parent lifts a block their kid made.
function apiParentUnblock(pin, name, other) {
  var access = safetyParent(pin), kid = safetyKidOf(access, name);
  var gone = eraseRows('Blocks', function (o) { return o.Girl === kid.Name && o.Blocked === String(other); });
  if (gone) audit(access.isAdmin ? 'admin' : 'parent', safetyWho(access), groupOf(kid), 'unblock', kid.Name);
  return safetyBack(access);
}

// What a family's parents see: the switch, the notice they agreed to, and their kids' blocks and reports.
function familySafety(g) {
  var names = {};
  kidsIn(String(g.Id)).forEach(function (k) { names[k.Name] = 1; });
  return {
    friends: friendsState(g),
    consent: consentInfo(g),
    blocks: readTable('Blocks').filter(function (r) { return names[r.Girl]; }).map(function (r) { return { kid: r.Girl, other: r.Blocked, date: String(r.Date) }; }),
    reports: readTable('Reports').filter(function (r) { return names[r.Girl]; }).slice(-10).map(function (r) {
      return { kid: r.Girl, other: r.About, date: String(r.Date), reason: String(r.Reason) };
    })
  };
}

// The admin's list (the Pilot card): the latest reports.
function reportsBoard() {
  return readTable('Reports').slice(-20).reverse().map(function (r) {
    var g = findGroup(String(r.Group));
    return { kid: r.Girl, other: r.About, date: String(r.Date), reason: REPORT_REASONS[r.Reason] || String(r.Reason), family: g ? g.Name : '' };
  });
}

// ---------- The limit on invites and nudges ----------

// Counts what a kid sends to another kid (a named invite, a duo request, a nudge) in the cache, per hour.
function contactLimit(kid) {
  var c = CacheService.getScriptCache(), h = Utilities.formatDate(new Date(), TZ, 'yyyyMMddHH');
  var k = 'RL:' + String(kid.Name).toLowerCase() + ':' + h, n = Number(c.get(k)) || 0;
  if (n >= SAFETY.contactsPerHour) throw new Error('That is a lot of invites! Take a break and try again later.');
  c.put(k, String(n + 1), 3700);
}

// ---------- Setup (v24) ----------

// Feedback rows are deleted and exported by the family id in Who. A row whose Who is not a family id (or 'admin') but
// whose Group is a family's name gets that family's id.
function migrateFeedbackWho() {
  var sh = sheet('Feedback');
  if (!sh || sh.getLastRow() < 2) return 0;
  var v = sh.getDataRange().getValues(), h = v[0], wc = h.indexOf('Who'), gc = h.indexOf('Group'), byId = {}, byName = {}, n = 0;
  groups().forEach(function (g) { byId[String(g.Id)] = 1; byName[String(g.Name).trim().toLowerCase()] = String(g.Id); });
  for (var i = 1; i < v.length; i++) {
    var who = String(v[i][wc]).trim(), id = byName[String(v[i][gc]).trim().toLowerCase()];
    if (who === 'admin' || byId[who] || !id) continue;
    sh.getRange(i + 1, wc + 1).setValue(id); n++;
  }
  if (n) invalidate('Feedback');
  return n;
}

// ---------- Retention, second half (Privacy.js retentionSweep calls it) ----------

// Opens older than SAFETY.rawOpenDays become one row a day per person and family ("3 opens"): no time, no device.
function rollUpOpens() {
  var limit = addDays(today(), -SAFETY.rawOpenDays), batch = addDays(today(), -(SAFETY.rawOpenDays + SAFETY.rollBatchDays));
  var d = function (r) { return String(r.Date instanceof Date ? fmt(r.Date) : r.Date).slice(0, 10); };
  var raw = readTable('Audit').filter(function (r) { return r.Action === 'open' && d(r) < limit; });
  if (!raw.length || !raw.some(function (r) { return d(r) < batch; })) return 0;
  var sums = {};
  raw.forEach(function (r) {
    var k = d(r) + '|' + r.Role + '|' + r.Who + '|' + r.Group;
    (sums[k] = sums[k] || { Date: d(r), Role: r.Role, Who: r.Who, Group: r.Group, n: 0 }).n++;
  });
  eraseRows('Audit', function (o) { return o.Action === 'open' && d(o) < limit; });
  Object.keys(sums).forEach(function (k) {
    var s = sums[k];
    appendRow('Audit', { Timestamp: new Date(s.Date + 'T23:59:00'), Date: s.Date, Role: s.Role, Who: s.Who, Group: s.Group, Action: 'opens',
      Detail: s.n + (s.n === 1 ? ' open' : ' opens'), Ok: 'yes', Device: '' });
  });
  return raw.length;
}

// The last day a kid opened the app or practiced. Girls.Seen keeps the last open (copied from the audit trail every
// night, since the trail keeps only 180 days); an empty Seen starts the clock today.
function kidLastActive(kid, seen) {
  var last = String(seen || '');
  ['Log', 'Games', 'Chats', 'Placements', 'Gates', 'Shop'].forEach(function (t) {
    kidRows(t, kid.Name).forEach(function (r) { var x = String(r.DoneOn || r.Date || '').slice(0, 10); if (x > last) last = x; });
  });
  return last;
}

function inactiveSweep() {
  var t = today(), out = { seen: 0, noticed: 0, deleted: 0 }, opened = {};
  readTable('Audit').forEach(function (r) {
    if (r.Role !== 'kid' || (r.Action !== 'open' && r.Action !== 'opens')) return;
    var x = String(r.Date instanceof Date ? fmt(r.Date) : r.Date).slice(0, 10);
    if (!opened[r.Who] || x > opened[r.Who]) opened[r.Who] = x;
  });
  var noticeAt = addDays(t, -(SAFETY.inactiveDays - SAFETY.noticeDays)), deleteAt = addDays(t, -SAFETY.inactiveDays), soon = [];
  readTable('Girls').forEach(function (k) {
    var seen = String(k.Seen || '').slice(0, 10), o = opened[k.Name] || '';
    var fresh = !seen ? t : o > seen ? o : '';
    if (fresh) { setGirlFields(k.Name, { Seen: fresh }); seen = fresh; out.seen++; }
    var last = kidLastActive(k, seen), notice = String(k.Inactive || '').slice(0, 10);
    if (last > noticeAt) { if (notice) setGirlFields(k.Name, { Inactive: '' }); return; }
    if (!notice) { setGirlFields(k.Name, { Inactive: t }); soon.push(k.Name); out.noticed++; return; }
    if (last <= deleteAt && notice <= addDays(t, -SAFETY.noticeDays)) {
      var g = findGroup(groupOf(k));
      if (!g) return;
      var whole = kidsIn(String(g.Id)).length === 1;
      eraseFamily({ group: g, kids: [k.Name], whole: whole });
      audit('owner', 'retention', '', 'delete', (whole ? 'a family' : 'a kid') + ' inactive for 12 months', true);
      out.deleted++;
    }
  });
  if (soon.length) {
    try { notifyAdmin({ title: 'Inactive accounts', body: soon.length + ' kid' + (soon.length === 1 ? '' : 's') + ' will be deleted in ' + SAFETY.noticeDays + ' days: ' + soon.join(', ') }); } catch (e) { console.error(e); }
    audit('owner', 'retention', '', 'inactive notice', soon.length + ' kid' + (soon.length === 1 ? '' : 's') + ', deleted in ' + SAFETY.noticeDays + ' days unless they come back');
  }
  return out;
}
