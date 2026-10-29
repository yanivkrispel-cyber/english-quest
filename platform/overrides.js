// Platform overrides: run after src/*.js, in the same scope (platform/build.js appends this file inside the server
// closure; test/sim.js loads it after the sources when SIM_PLATFORM=1). PLATFORM is given by the host.
//
// 1. Tables. On Apps Script every sheet read cost 0.3 to 1 s, so readTable() kept JSON copies in CacheService. Here the
//    sheets are already in memory: readTable() and readTableUncached() both return the rows mapped to objects, kept
//    between requests and rebuilt only when the sheet changed (appended rows are mapped alone). readTable()'s objects are
//    shared between requests, so the server must never change them (PLATFORM.freeze makes a test fail if it does);
//    readTableUncached() hands out copies.
// 2. Pushes. UrlFetchApp waits for the push services; here deliver() leaves them in PLATFORM.outbox and the Durable
//    Object sends them after the request has been saved (worker/api/push.js signs the VAPID JWT with WebCrypto).

var TABLE_MEMO = {};

function platformRow(head, r) {
  var o = {};
  for (var i = 0; i < head.length; i++) {
    var h = head[i];
    if (!h) continue;
    var v = r[i];
    if (v === undefined || v === null) v = '';
    o[h] = v instanceof Date && h !== 'Timestamp' ? fmt(v) : v;
  }
  ['Name', 'Group', 'Id'].forEach(function (k) { if (o[k] !== undefined) o[k] = String(o[k]).trim(); });
  if (o.Level !== undefined) o.Level = String(o.Level).trim().toLowerCase().replace('b1+', 'b1-b2');
  return o;
}
function platformBlank(r) {
  for (var i = 0; i < r.length; i++) if (r[i] !== '' && r[i] !== undefined && r[i] !== null) return false;
  return true;
}

function platformTable(name) {
  var sh = sheet(name);
  if (!sh || sh.rows.length < 2) return [];
  var m = TABLE_MEMO[name], rows = sh.rows, out, from;
  if (m && m.sh === sh && m.edits === sh.edits) {
    if (m.len === rows.length) return m.out;
    out = m.out.slice(); from = m.len;
  } else {
    out = []; from = 1;
  }
  var head = rows[0];
  for (var i = from; i < rows.length; i++) {
    if (platformBlank(rows[i])) continue;
    var o = platformRow(head, rows[i]);
    if (PLATFORM.freeze) Object.freeze(o);
    out.push(o);
  }
  if (PLATFORM.freeze) Object.freeze(out);
  TABLE_MEMO[name] = { sh: sh, edits: sh.edits, len: rows.length, out: out };
  return out;
}

// readTable: the shared rows (read only). readTableUncached is what the server uses before it changes a row and saves
// it again (a duel, a duo, a setting), so it gets its own copies, as every read on Apps Script did.
readTable = function (name) { return platformTable(name); };
readTableUncached = function (name) {
  return platformTable(name).map(function (o) { var c = {}; for (var k in o) c[k] = o[k]; return c; });
};

if (PLATFORM.asyncPush) {
  deliver = function (endpoints, message, sheetName) {
    if (!endpoints.length) return { sent: 0, devices: 0 };
    var msgs = {};
    endpoints.forEach(function (e) { msgs[endpointKey(e)] = JSON.stringify(message); });
    CacheService.getScriptCache().putAll(msgs, PUSH_TTL);
    var k = vapidKeys();
    PLATFORM.outbox.push({ endpoints: endpoints.slice(), sheet: sheetName || 'Push', d: k.d.toString(16), pub: k.pub });
    return { sent: endpoints.length, devices: endpoints.length };
  };
}

// 3. Triggers. Apps Script ran a trigger per job at its hour; here a cron calls platformTick() every 10 minutes and the
//    jobs run in the first tick of their hour (Israel time, so a clock change moves nothing), once a day each. The
//    Friday email summary is not sent (no mail on this platform); warmCache() still flushes the audit queue.
function platformTick() {
  var now = new Date(), h = Number(Utilities.formatDate(now, TZ, 'H')), day = fmt(now);
  var props = PropertiesService.getScriptProperties(), ran = [];
  function job(name, hour, fn) {
    if (!hour || h !== hour || props.getProperty('ran:' + name) === day) return;
    props.setProperty('ran:' + name, day);
    try { fn(); ran.push(name); } catch (e) { console.error(name + ': ' + ((e && e.message) || e)); }
  }
  ensureSetup();
  job('dailyReminder', Number(getSetting('ReminderHour')) || 17, dailyReminder);
  job('lastCallReminder', Number(getSetting('LastCallHour')), lastCallReminder);
  job('parentSummary', Number(getSetting('ParentSummaryHour')), parentSummary);
  try { auditFlush(); } catch (e) { console.error('auditFlush: ' + ((e && e.message) || e)); }
  return ran;
}

function platformPushTtl() { return PUSH_TTL; }
