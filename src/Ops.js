// Operations: measuring the pilot and keeping the server healthy (night review 2026-11-01, findings 16 and 20).
// - Feature use (specs/pilot.md, "Measuring the pilot"): the phone counts which parts a kid opened today and sends the
//   counts with her next call; they wait in the cache and auditFlush writes them, one tiny row per kid, day and feature
//   (tab Usage). Our own server only, nothing third party (store rule 1).
// - The pilot's measures for the admin's Pilot card: the north star (practice days a week), D1/D7/D30 retention by
//   sign-up week, feature use and the pilot gate (PILOT_GATE).
// - The phones' error reports (tab Errors, 30 days): a short message, where, the device label and the app version;
//   the kid's name only when the call that carried it was hers. Shown on the admin's Audit card.
// - Health (specs/cloudflare.md, "Backups"): the age of the last nightly backup and of the sheet copy, and today's use of the
//   free plan, from the properties the Worker writes (worker/api/index.js). The admin hears by push when a copy is older
//   than 30 hours; the Audit card shows it all, in orange from 60% of a free limit.
// - sheetSafe: the guard against formulas in text copied into the Google Sheet (cfWriteSheets in Relay.js).

// The parts of the app the phone counts (useNote in Index.html sends these ids).
var USE_FEATURES = { mission: 'Mission', review: 'Mission review', game: 'Games', talk: 'Talk with Chacho', duel: 'Word Duel',
  boss: 'Boss Battle', talktap: 'Talk & Tap', tug: 'Tug of War', shop: 'Shop', studio: 'Studio', words: 'My words',
  journey: 'Journey tab', play: 'Play tab', pet: 'Pet tab', me: 'Me tab', test: 'Level test', gate: 'Gate challenge',
  nest: 'Nest lesson', playground: 'Nest playground' };
// Calls whose first argument is the kid's name and that check her PIN: only these carry her counts.
var USE_CALLS = { apiDashboard: 1, apiGameResult: 1, apiMissionResult: 1, apiChatResult: 1, apiNestResult: 1, apiShop: 1 };
var OPS = { errKeepDays: 30, errPerDay: 300, queueMax: 2000, healthHours: 30, warnShare: 0.6 };
// The pilot's written gate (specs/pilot.md): checked in the window from..to. At least week4Share% of the kids practise on
// week4Days days or more in their fourth week, and the parents' NPS (from the Feedback stars) is at least nps.
var PILOT_GATE = { from: '2026-11-23', to: '2026-11-27', week4Days: 2, week4Share: 60, nps: 30, northStar: 4 };

// Called by doPost after every call: the counts and error reports the phone sent with it.
function opsNote(req, ok) {
  if (!req) return;
  var kid = null;
  try { if (ok && USE_CALLS[req.fn]) kid = findGirl(String((req.args || [])[0] || '')) || null; } catch (e) {}
  if (kid && req.use) useNote(kid, req.use);
  if (req.err) errNote(kid, req.err, req.v);
}

// A small queue in the cache (kept over a restart on Cloudflare: the AQ prefix, platform/gas.js).
function opsQueue(key, change, empty) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(1500)) return;
  try {
    var c = CacheService.getScriptCache(), q;
    try { q = JSON.parse(c.get(key) || 'null') || empty; } catch (e) { q = empty; }
    c.put(key, JSON.stringify(change(q)), 21600);
  } finally { lock.releaseLock(); }
}
function opsTake(key, empty) {
  var lock = LockService.getScriptLock(), q = empty;
  if (!lock.tryLock(5000)) return empty;
  try {
    var c = CacheService.getScriptCache();
    try { q = JSON.parse(c.get(key) || 'null') || empty; } catch (e) { q = empty; }
    c.remove(key);
  } finally { lock.releaseLock(); }
  return q;
}

// use = { 'yyyy-MM-dd': { feature: opens } }, at most the last 3 days.
function useNote(kid, use) {
  try {
    if (!use || typeof use !== 'object') return;
    var t = today(), from = addDays(t, -3), add = {};
    Object.keys(use).slice(0, 5).forEach(function (d) {
      var day = use[d];
      if (!/^\d{4}-\d\d-\d\d$/.test(d) || d < from || d > t || !day || typeof day !== 'object') return;
      Object.keys(day).forEach(function (f) {
        var n = Math.floor(Number(day[f]));
        if (USE_FEATURES.hasOwnProperty(f) && n > 0) add[d + '|' + kid.Name + '|' + f] = Math.min(n, 50);
      });
    });
    var keys = Object.keys(add);
    if (!keys.length) return;
    opsQueue('AQU', function (q) {
      var size = Object.keys(q).length;
      keys.forEach(function (k) { if (q[k] || size < OPS.queueMax) { if (!q[k]) size++; q[k] = (q[k] || 0) + add[k]; } });
      return q;
    }, {});
  } catch (e) { console.error(e); }
}

// No personal data: addresses lose their query and #part (a kid's personal link carries her PIN), emails go.
function errClean(s, max) {
  return String(s == null ? '' : s)
    .replace(/https?:\/\/[^\s)'"]+/g, function (u) { return u.replace(/[?#].*$/, '').replace(/^https?:\/\/[^\/]+/, ''); })
    .replace(/[^\s@]+@[^\s@]+\.[^\s@]+/g, '(email)').replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, max);
}

// errs = [{ msg, where, at }] (the phone sends at most 5 at a time and 10 a day); at most errPerDay rows a day in all.
function errNote(kid, errs, v) {
  try {
    if (!Array.isArray(errs) || !errs.length) return;
    var c = CacheService.getScriptCache(), dk = 'EC:' + today(), n = Number(c.get(dk)) || 0;
    if (n >= OPS.errPerDay) return;
    var rows = errs.slice(0, 5).map(function (e) {
      e = e || {};
      var at = Number(e.at), now = Date.now();
      return { Timestamp: new Date(at > now - 3 * 86400000 && at <= now ? at : now).toISOString(), Date: today(), Girl: kid ? kid.Name : '',
        Where: errClean(e.where, 60), Message: errClean(e.msg, 200), Device: REQ_DEV, App: errClean(v, 12) };
    }).filter(function (r) { return r.Message; });
    if (!rows.length) return;
    c.put(dk, String(n + rows.length), 86400);
    opsQueue('AQE', function (q) { return q.concat(rows).slice(-200); }, []);
  } catch (e) { console.error(e); }
}

// Called by auditFlush: the waiting counts and error reports, one write per tab.
function opsFlush() {
  try {
    var u = opsTake('AQU', {});
    opsAppend('Usage', Object.keys(u).map(function (k) {
      var p = k.split('|');
      return { Date: p[0], Girl: p.slice(1, -1).join('|'), Feature: p[p.length - 1], Opens: u[k] };
    }));
    opsAppend('Errors', opsTake('AQE', []));
  } catch (e) { console.error(e); }
}
function opsAppend(table, rows) {
  if (!rows.length) return;
  var sh = sheet(table);
  if (!sh) return;
  var head = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  sh.getRange(sh.getLastRow() + 1, 1, rows.length, head.length).setValues(rows.map(function (r) {
    return head.map(function (h) { return h === 'Timestamp' ? new Date(r.Timestamp) : r[h] === undefined ? '' : r[h]; });
  }));
  invalidate(table);
}

// Nightly (platformTick): error reports older than 30 days go.
function opsSweep() {
  var limit = addDays(today(), -OPS.errKeepDays), rows = readTable('Errors');
  if (!rows.length || String(rows[0].Date).slice(0, 10) >= limit) return 0;
  return eraseRows('Errors', function (o) { return String(o.Date instanceof Date ? fmt(o.Date) : o.Date).slice(0, 10) < limit; });
}

// The admin's Audit card: the phones' errors of the last `days` days, the same message counted once with how often.
function errSummary(days) {
  var from = addDays(today(), 1 - days), g = {};
  readTable('Errors').forEach(function (r) {
    var d = String(r.Date).slice(0, 10);
    if (d < from) return;
    var k = r.Where + '|' + r.Message, x = g[k] = g[k] || { msg: String(r.Message), where: String(r.Where), n: 0, last: '', app: '', kids: {}, devices: {} };
    x.n++;
    if (d >= x.last) { x.last = d; x.app = String(r.App || ''); }
    if (r.Girl) x.kids[r.Girl] = 1;
    if (r.Device) x.devices[r.Device] = 1;
  });
  var list = Object.keys(g).map(function (k) { var x = g[k]; return { msg: x.msg, where: x.where, n: x.n, last: x.last, app: x.app, kids: Object.keys(x.kids).length, devices: Object.keys(x.devices) }; });
  list.sort(function (a, b) { return b.n - a.n || (a.last < b.last ? 1 : -1); });
  return { total: list.reduce(function (s, x) { return s + x.n; }, 0), list: list.slice(0, 20) };
}

// ---------- Health ----------

function healthInfo() {
  var p = PropertiesService.getScriptProperties(), now = Date.now(), onCf = typeof PLATFORM !== 'undefined';
  var hours = function (ms) { return ms ? Math.round((now - ms) / 360000) / 10 : null; };
  var parse = function (k) { try { return JSON.parse(p.getProperty(k) || 'null'); } catch (e) { return null; } };
  var backup = parse('backup:last');
  var copyAt = Date.parse(p.getProperty(onCf ? 'export:last' : 'CF_MIRROR_AT') || '') || 0;
  var use = onCf ? parse('use:' + new Date(now).toISOString().slice(0, 10)) : null;
  var warn = [];
  if (onCf) {
    if (!backup) warn.push('No nightly backup yet (the first runs after 02:00).');
    else if (hours(backup.at) > OPS.healthHours) warn.push('The last backup is ' + Math.round(hours(backup.at)) + ' hours old.');
    if (!copyAt) warn.push('The sheet copy has not run yet.');
    else if (hours(copyAt) > OPS.healthHours) warn.push('The sheet copy is ' + Math.round(hours(copyAt)) + ' hours old.');
  }
  var out = { server: onCf ? 'cloudflare' : 'apps script', hours: OPS.healthHours, warn: warn,
    backup: backup ? { day: backup.day, at: backup.at, hours: hours(backup.at), bytes: backup.bytes, rows: backup.rows } : null,
    copy: copyAt ? { at: copyAt, hours: hours(copyAt) } : null, use: null };
  if (use) {
    var lim = use.limits || { api: 100000, rows: 100000 };
    out.use = { calls: use.api || 0, rows: use.rows || 0, errors: use.errors || 0, callsPct: Math.round(100 * (use.api || 0) / lim.api),
      rowsPct: Math.round(100 * (use.rows || 0) / lim.rows), limits: lim, at: use.at || null };
    if (out.use.callsPct >= OPS.warnShare * 100) warn.push("Today's server calls are at " + out.use.callsPct + '% of the free plan.');
    if (out.use.rowsPct >= OPS.warnShare * 100) warn.push("Today's rows written are at " + out.use.rowsPct + '% of the free plan.');
  }
  return out;
}

// Once a day (platformTick, 10:00): a push to the admin when the backup or the sheet copy is older than 30 hours.
function healthCheck() {
  var h = healthInfo(), late = h.warn.filter(function (w) { return /backup|copy/.test(w); });
  if (late.length) notifyAdmin({ title: 'Chacho server: a copy is late', body: late.join(' ') });
  return late.length;
}

// The admin's light check when the admin view opens (the Audit card shows the details).
function apiHealth(pin) {
  ensureSetup();
  if (!parentAccess(pin).isAdmin) throw new Error('Only the admin can see this');
  var h = healthInfo();
  h.errors = errSummary(1).total;
  return h;
}

// ---------- The pilot's measures (the admin's Pilot card) ----------

// Days with practice per kid: a task or mission (Log), a game round (Games), a talk with Chacho (Chats).
function practiceDays() {
  var active = {};
  var add = function (name, d) { d = String(d || '').slice(0, 10); if (name && d) (active[name] = active[name] || {})[d] = 1; };
  readTable('Log').forEach(function (l) { add(l.Girl, l.DoneOn || l.Date); });
  readTable('Games').forEach(function (g) { add(g.Girl, g.Date); });
  readTable('Chats').forEach(function (r) { add(r.Girl, r.Date); });
  return active;
}

// A kid's first pilot day: her family's Joined day, or Settings.PilotFrom for a family from before the invite link.
function pilotStarts() {
  var from = String(getSetting('PilotFrom') || today()).slice(0, 10), gs = {};
  groups().forEach(function (g) { gs[String(g.Id)] = String(g.Joined || from).slice(0, 10); });
  return readTable('Girls').map(function (k) { return { name: k.Name, start: gs[groupOf(k)] || from, before: !gs[groupOf(k)] || gs[groupOf(k)] === from, nest: isNest(k) }; });
}

function pilotMeasure() {
  var t = today(), active = practiceDays(), kids = pilotStarts();
  var count = function (k, a, b) { return Object.keys(active[k.name] || {}).filter(function (d) { return d >= a && d <= b; }).length; };
  var any = function (k, a, b) { return count(k, a, b) > 0; };

  // North star: practice days in the last 7 days (kids in the pilot for 7 days or more), and per week (Sunday to Saturday).
  var last7 = kids.filter(function (k) { return k.start <= addDays(t, -6); }).map(function (k) { return count(k, addDays(t, -6), t); });
  var sunday = addDays(t, -parseDate(t).getDay()), weeks = [];
  for (var w = 5; w >= 0; w--) {
    var a = addDays(sunday, -7 * w), b = addDays(a, 6), inw = kids.filter(function (k) { return k.start <= a; });
    if (!inw.length) continue;
    var days = inw.map(function (k) { return count(k, a, b); });
    weeks.push({ from: a, to: b, partial: b > t, kids: inw.length, avg: Math.round(10 * days.reduce(function (s, x) { return s + x; }, 0) / inw.length) / 10,
      atTarget: days.filter(function (x) { return x >= PILOT_GATE.northStar; }).length });
  }

  // Retention by sign-up week: D1 = practised the day after, D7 = on a day 7 to 13, D30 = on a day 30 to 36. A kid
  // counts only once her window is over.
  var cohorts = {};
  kids.forEach(function (k) {
    var wk = addDays(k.start, -parseDate(k.start).getDay());
    var c = cohorts[wk] = cohorts[wk] || { week: wk, kids: 0, d1: [0, 0], d7: [0, 0], d30: [0, 0] };
    c.kids++;
    [['d1', 1, 1], ['d7', 7, 13], ['d30', 30, 36]].forEach(function (x) {
      var a = addDays(k.start, x[1]), b = addDays(k.start, x[2]);
      if (b >= t) return;
      c[x[0]][1]++;
      if (any(k, a, b)) c[x[0]][0]++;
    });
  });

  // Feature use from the Usage tab: kids who opened each part and how often, last 7 and 28 days.
  var use = {};
  Object.keys(USE_FEATURES).forEach(function (f) { use[f] = { id: f, label: USE_FEATURES[f], kids7: {}, opens7: 0, kids28: {}, opens28: 0 }; });
  readTable('Usage').forEach(function (r) {
    var u = use[r.Feature], d = String(r.Date).slice(0, 10), n = Number(r.Opens) || 0;
    if (!u || d > t) return;
    if (d > addDays(t, -28)) { u.kids28[r.Girl] = 1; u.opens28 += n; }
    if (d > addDays(t, -7)) { u.kids7[r.Girl] = 1; u.opens7 += n; }
  });
  var features = Object.keys(use).map(function (f) {
    var u = use[f];
    return { id: f, label: u.label, kids7: Object.keys(u.kids7).length, opens7: u.opens7, kids28: Object.keys(u.kids28).length, opens28: u.opens28 };
  }).sort(function (a, b) { return b.kids28 - a.kids28 || b.opens28 - a.opens28; });

  // The gate: kids with four full weeks, practising week4Days+ days in days 21 to 27; NPS from each family's latest stars.
  var done4 = kids.filter(function (k) { return addDays(k.start, 27) < t; });
  var still = done4.filter(function (k) { return count(k, addDays(k.start, 21), addDays(k.start, 27)) >= PILOT_GATE.week4Days; }).length;
  var latest = {};
  readTable('Feedback').forEach(function (f) { if (f.Who !== 'admin' && Number(f.Score) > 0) latest[f.Who] = Number(f.Score); });
  var scores = Object.keys(latest).map(function (k) { return latest[k]; });
  var nps = scores.length ? Math.round(100 * (scores.filter(function (s) { return s === 5; }).length - scores.filter(function (s) { return s <= 3; }).length) / scores.length) : null;
  var share = done4.length ? Math.round(100 * still / done4.length) : null;
  var pass = share !== null && share >= PILOT_GATE.week4Share && nps !== null && nps >= PILOT_GATE.nps;
  var state = t < PILOT_GATE.from ? 'before' : t <= PILOT_GATE.to ? 'open' : 'after';

  return {
    northStar: { target: PILOT_GATE.northStar, kids: last7.length, avg: last7.length ? Math.round(10 * last7.reduce(function (s, x) { return s + x; }, 0) / last7.length) / 10 : null,
      atTarget: last7.filter(function (x) { return x >= PILOT_GATE.northStar; }).length, weeks: weeks },
    cohorts: Object.keys(cohorts).sort().map(function (k) { return cohorts[k]; }),
    features: features,
    gate: { from: PILOT_GATE.from, to: PILOT_GATE.to, state: state, week4Days: PILOT_GATE.week4Days, target: PILOT_GATE.week4Share, npsTarget: PILOT_GATE.nps,
      kids: done4.length, still: still, share: share, nps: nps, answers: scores.length, pass: pass }
  };
}

// ---------- The sheet ----------

// Text copied into the Google Sheet (the nightly copy, cfWriteSheets in Relay.js) that starts with = + - @ or a tab or
// return would be read as a formula there: a leading ' keeps it text (Sheets hides the ' and getValues() leaves it out).
function sheetSafe(v) {
  return typeof v === 'string' && /^[=+\-@\t\r]/.test(v) ? "'" + v : v;
}
