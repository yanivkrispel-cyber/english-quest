// The move to Cloudflare (specs/cloudflare.md). Nothing here does anything until the cutover night: the Script Property
// CF_MODE is empty. The two admin calls work in every mode, so the move can be watched and undone from outside.
//   ''        normal
//   'freeze'  every other call is refused for a few minutes (the last copy of the data is being taken)
//   'relay'   every other call is passed to CF_URL (the new server) and its answer comes back; nothing is written here.
//             Phones that still run an old copy of the app (pointing at this address) keep working this way.

var CF_ADMIN = { apiCfExport: 1, apiCfMode: 1 };

function cfMode() {
  var c = CacheService.getScriptCache(), hit = c.get('CFMODE');
  if (hit !== null) return JSON.parse(hit);
  var p = PropertiesService.getScriptProperties();
  var m = { mode: p.getProperty('CF_MODE') || '', url: p.getProperty('CF_URL') || '' };
  c.put('CFMODE', JSON.stringify(m), 60);
  return m;
}

// Called by doPost before anything else: an answer when this call is frozen or relayed, null to go on as usual.
function cfIntercept(req, body) {
  if (CF_ADMIN[req.fn]) return null;
  var m = cfMode();
  if (m.mode === 'freeze') return JSON.stringify({ ok: false, error: 'Coco is moving to a faster home. Back in a few minutes!' });
  if (m.mode === 'relay' && m.url) {
    var r = UrlFetchApp.fetch(m.url, { method: 'post', contentType: 'text/plain;charset=utf-8', payload: body, muteHttpExceptions: true });
    if (r.getResponseCode() === 200) return r.getContentText();
    return JSON.stringify({ ok: false, error: 'The server is busy, try again' });
  }
  return null;
}

// Every sheet (values as getValues() gives them, Dates as {"$d": ms}) and every Script Property, for the import into
// the new server. The admin's PIN only.
function apiCfExport(pin) {
  if (!parentAccess(pin).isAdmin) throw new Error('Only the admin can do this');
  // Only while frozen (the cutover's few minutes): the export holds every PIN and the push signing key.
  if (cfMode().mode !== 'freeze') throw new Error('Freeze first');
  var ss = SpreadsheetApp.getActive(), names = [], sheets = {};
  ss.getSheets().forEach(function (sh) {
    var n = sh.getName();
    names.push(n);
    var last = sh.getLastRow(), cols = sh.getLastColumn();
    var values = last && cols ? sh.getRange(1, 1, last, cols).getValues() : [];
    sheets[n] = values.map(function (r) {
      var line = r.map(function (v) { return v instanceof Date ? { $d: v.getTime() } : v; });
      while (line.length && line[line.length - 1] === '') line.pop();
      return line;
    });
  });
  return { names: names, sheets: sheets, props: PropertiesService.getScriptProperties().getProperties(), at: Date.now() };
}

// mode: '', 'freeze' or 'relay' (with the new server's /api address and its admin token). Relay also stops this
// script's own reminders (the new server sends them) and starts the nightly copy back into this sheet (cfMirror);
// '' puts the reminders back.
function apiCfMode(pin, mode, url, token) {
  if (!parentAccess(pin).isAdmin) throw new Error('Only the admin can do this');
  if (['', 'freeze', 'relay'].indexOf(mode) < 0) throw new Error('Unknown mode');
  if (mode === 'relay' && !/^https:\/\/[^\s]+\/api$/.test(String(url || ''))) throw new Error('The relay needs the /api address');
  var p = PropertiesService.getScriptProperties();
  p.setProperty('CF_MODE', mode);
  p.setProperty('CF_URL', mode === 'relay' ? String(url) : '');
  if (mode === 'relay' && token) p.setProperty('CF_TOKEN', String(token));
  cfTriggers(mode === 'relay');
  CacheService.getScriptCache().remove('CFMODE');
  audit('admin', 'admin', '', 'cloudflare', mode || 'normal', true);
  return cfMode();
}

var CF_JOBS = ['dailyReminder', 'lastCallReminder', 'parentSummary', 'weeklySummary', 'warmCache', 'cfMirror'];

function cfTriggers(moved) {
  ScriptApp.getProjectTriggers().forEach(function (tr) { if (CF_JOBS.indexOf(tr.getHandlerFunction()) >= 0) ScriptApp.deleteTrigger(tr); });
  if (moved) ScriptApp.newTrigger('cfMirror').timeBased().everyDays(1).atHour(3).inTimezone(TZ).create();
  else installTriggers();
}

// Every night after the move: the new server's data, copied into this sheet (read it here; changes made here are not
// sent back). Also the way back: with CF_MODE '' and this copy, Apps Script can take over again.
function cfMirror() {
  var p = PropertiesService.getScriptProperties(), url = p.getProperty('CF_URL'), token = p.getProperty('CF_TOKEN');
  if (!url || !token) return 'no relay';
  var r = UrlFetchApp.fetch(url.replace(/\/api$/, '/admin/export'), { headers: { 'X-Admin-Token': token }, muteHttpExceptions: true });
  if (r.getResponseCode() !== 200) throw new Error('export ' + r.getResponseCode());
  var data = JSON.parse(r.getContentText()).data;
  cfWriteSheets(data);
  p.setProperty('CF_MIRROR_AT', new Date().toISOString());
  return data.names.length + ' sheets';
}

function cfWriteSheets(data) {
  var ss = SpreadsheetApp.getActive();
  data.names.forEach(function (n) {
    var rows = data.sheets[n] || [], sh = ss.getSheetByName(n) || ss.insertSheet(n);
    var w = rows.reduce(function (m, r) { return Math.max(m, r.length); }, 1);
    var values = rows.map(function (r) {
      var line = r.map(function (v) { return v && typeof v === 'object' && v.$d !== undefined ? new Date(v.$d) : v; });
      while (line.length < w) line.push('');
      return line;
    });
    var last = sh.getLastRow(), cols = sh.getLastColumn();
    if (last && cols) sh.getRange(1, 1, last, cols).clearContent();
    if (values.length) sh.getRange(1, 1, values.length, w).setValues(values);
  });
  clearCache();
}
