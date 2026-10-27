// The audit trail (tab Audit, specs/audit.md): who came in, wrong PINs and codes, and what parents, the admin, the
// teacher and the owner (by hand in the sheet) changed. Kids' practice already has its own tabs (Log, Games, Chats...);
// apiAudit merges them with this tab into one timeline for the admin's Audit card.
// An open counts once per half hour per person and device, so a refresh or a return to home is not a new visit.

var AUDIT = { openGapSec: 1800, maxDays: 30, max: 600 };
// The phone's coarse label, sent by the app with every call ("iPhone, app"); set by doPost for this request.
var REQ_DEV = '';

function cleanDev(dev) {
  dev = String(dev || '');
  return /^(iPhone|iPad|Android phone|Android tablet|Computer), (app|browser)$/.test(dev) ? dev : '';
}

// Never breaks the call it records.
function audit(role, who, group, action, detail, ok) {
  try {
    appendRow('Audit', { Timestamp: new Date(), Date: today(), Role: role, Who: String(who || ''), Group: String(group || ''), Action: action,
      Detail: String(detail == null ? '' : detail).slice(0, 200), Ok: ok === false ? 'no' : 'yes', Device: REQ_DEV });
  } catch (e) { console.error(e); }
}

function auditOpen(role, who, group) {
  var k = 'AO:' + role + ':' + String(who).toLowerCase() + ':' + REQ_DEV;
  try {
    var c = CacheService.getScriptCache();
    if (c.get(k)) return;
    c.put(k, '1', AUDIT.openGapSec);
  } catch (e) {}
  audit(role, who, group, 'open', '');
}

// A wrong PIN or code (checkPin keys: 'girl:<name>', 'parent', 'teacher').
function auditPin(key, fails) {
  var detail = fails >= 8 ? 'locked for 15 minutes' : 'attempt ' + fails;
  if (key.indexOf('girl:') === 0) {
    var kid = findGirl(key.slice(5));
    return audit('kid', kid ? kid.Name : key.slice(5), kid ? groupOf(kid) : '', kid ? 'wrong PIN' : 'unknown name', detail, false);
  }
  audit(key, '', '', key === 'teacher' ? 'wrong code' : 'wrong PIN', detail, false);
}

// A join screen opened from a closed or wrong invite link (once an hour per code, so a reload adds nothing).
function auditInviteRefused(code) {
  try {
    var c = CacheService.getScriptCache(), k = 'AI:' + String(code || '').slice(0, 24).toLowerCase();
    if (c.get(k)) return;
    c.put(k, '1', 3600);
  } catch (e) {}
  var closed = String(getSetting('InviteOpen') || '').trim().toLowerCase() !== 'yes';
  audit('join', '', '', 'invite refused', closed ? 'the link is closed' : 'wrong code', false);
}

// Called by onEdit: a change the owner made by hand in the sheet.
function auditSheetEdit(e) {
  try {
    var sh = e && e.range && e.range.getSheet();
    if (!sh || sh.getName() === 'Audit') return;
    var detail = sh.getName() + '!' + e.range.getA1Notation();
    if (e.range.getNumRows() === 1 && e.range.getNumColumns() === 1) {
      var head = String(sh.getRange(1, e.range.getColumn()).getValue() || '');
      // PINs and codes are never copied into the trail.
      var secret = /PIN|Code/i.test(head) || /PIN|Code/i.test(String(sh.getRange(e.range.getRow(), 1).getValue() || ''));
      detail += ' (' + head + ')' + (secret || e.value === undefined ? '' : ' = ' + String(e.value).slice(0, 60));
    }
    audit('owner', 'sheet', '', 'sheet edit', detail);
  } catch (err) { console.error(err); }
}

// The admin's Audit card: the last `days` days (1 to 30), newest first, and a summary per family.
function apiAudit(pin, days) {
  ensureSetup();
  if (!parentAccess(pin).isAdmin) throw new Error('Only the admin can see this');
  days = Math.max(1, Math.min(AUDIT.maxDays, Number(days) || 7));
  var t = today(), from = addDays(t, 1 - days);
  var kids = {}, gname = {};
  readTable('Girls').forEach(function (k) { kids[k.Name] = groupOf(k); });
  groups().forEach(function (g) { gname[String(g.Id)] = g.Name; });
  var inRange = function (r) { var d = String(r.Date || '').slice(0, 10); return d >= from && d <= t; };
  var at = function (r, v) {
    var d = v instanceof Date ? v : new Date(v);
    return isNaN(d.getTime()) ? new Date(String(r.Date).slice(0, 10) + 'T12:00:00').getTime() : d.getTime();
  };
  var ev = [];
  var push = function (r, e) { e.at = at(r, r.Timestamp || r.Created); e.date = String(r.DoneOn || r.Date).slice(0, 10); ev.push(e); };
  var kid = function (r, action, detail) {
    push(r, { role: 'kid', who: r.Girl, group: kids[r.Girl] || '', action: action, detail: detail, ok: true, device: '', practice: true });
  };
  var score = function (r) { return r.Total ? r.Correct + '/' + r.Total : ''; };

  readTable('Audit').filter(inRange).forEach(function (r) {
    push(r, { role: r.Role, who: r.Who, group: r.Group, action: r.Action, detail: r.Detail, ok: r.Ok !== 'no', device: r.Device || '' });
  });
  readTable('Log').filter(inRange).forEach(function (r) {
    kid(r, r.Section === 'level' ? 'level (old link)' : r.Mission ? 'mission' : 'task', [r.Mission || r.Title, score(r), r.Points ? r.Points + ' points' : ''].filter(String).join(' · '));
  });
  readTable('Games').filter(inRange).forEach(function (r) { kid(r, 'game', [r.Game, r.Level, score(r)].filter(String).join(' · ')); });
  readTable('Gates').filter(inRange).forEach(function (r) { kid(r, 'gate', r.From + ' to ' + r.To + ' · ' + score(r) + (r.Passed === 'yes' || r.Passed === true ? ' · passed' : '')); });
  readTable('Chats').filter(inRange).forEach(function (r) { kid(r, 'talk with Coco', r.Talk + ' · ' + r.Voice + ' aloud, ' + r.Tiles + ' tapped'); });
  readTable('Shop').filter(inRange).forEach(function (r) { kid(r, 'bought', r.Item + (r.Paid ? ' · ' + r.Paid + ' coins' : '')); });
  readTable('Placements').filter(inRange).forEach(function (r) { kid(r, 'level test', 'form ' + r.Form + ' · ' + r.Level + ' · ' + score(r)); });
  readTable('Flags').filter(inRange).forEach(function (r) {
    if (r.Girl === 'Teacher') push(r, { role: 'teacher', who: 'teacher', group: '', action: 'flag', detail: r.Mission + ' ' + r.Item, ok: true, device: '' });
    else kid(r, 'flag', r.Mission + ' ' + r.Item);
  });
  readTable('Feedback').filter(inRange).forEach(function (r) {
    push(r, { role: r.Who === 'admin' ? 'admin' : 'parent', who: r.Group, group: r.Who === 'admin' ? '' : r.Who, action: 'feedback',
      detail: (r.Score ? r.Score + '/5 · ' : '') + String(r.Text || '').slice(0, 80), ok: true, device: '' });
  });
  readTable('Duels').filter(inRange).forEach(function (r) {
    push(r, { role: 'kid', who: r.Host, group: kids[r.Host] || '', action: r.Mode === 'boss' ? 'boss battle' : r.Mode === 'talk' ? 'talk & tap' : 'duel',
      detail: (r.Guest ? 'with ' + r.Guest + ' · ' : '') + r.State, ok: true, device: '', practice: true });
  });
  ev.sort(function (a, b) { return a.date === b.date ? b.at - a.at : a.date < b.date ? 1 : -1; });

  // Per family: visits (opens) of kids and of the parent, the last time someone came in, and the devices seen.
  var fams = {};
  groups().forEach(function (g) { fams[String(g.Id)] = { id: String(g.Id), name: g.Name, kidOpens: 0, parentOpens: 0, wrong: 0, last: 0, active: {}, devices: {} }; });
  var devices = {};
  ev.forEach(function (e) {
    var f = fams[e.group];
    if (e.device && e.role !== 'join') devices[e.device + '|' + e.role + '|' + e.who] = e.device;
    if (!f) return;
    if (e.action === 'open') { if (e.role === 'kid') f.kidOpens++; else f.parentOpens++; }
    if (!e.ok) f.wrong++;
    if (e.ok && e.role !== 'owner') f.last = Math.max(f.last, e.at);
    if (e.role === 'kid' && e.ok) f.active[e.who + '|' + e.date] = 1;
    if (e.device) f.devices[e.device] = 1;
  });
  var split = {};
  Object.keys(devices).forEach(function (k) { split[devices[k]] = (split[devices[k]] || 0) + 1; });
  return {
    days: days, from: from, today: t,
    events: ev.slice(0, AUDIT.max).map(function (e) { e.family = gname[e.group] || ''; return e; }),
    more: Math.max(0, ev.length - AUDIT.max),
    families: Object.keys(fams).map(function (id) {
      var f = fams[id];
      return { id: id, name: f.name, kidOpens: f.kidOpens, parentOpens: f.parentOpens, wrong: f.wrong, last: f.last || null,
        kidDays: Object.keys(f.active).length, devices: Object.keys(f.devices) };
    }).sort(function (a, b) { return (b.last || 0) - (a.last || 0); }),
    devices: split
  };
}
