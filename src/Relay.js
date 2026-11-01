// The move to Cloudflare (specs/cloudflare.md), done on 2026-10-30. The Script Property CF_MODE:
//   ''        normal
//   'freeze'  every call is refused for a few minutes (the last copy of the data is being taken)
//   'relay'   every call is passed to CF_URL (the new server) and its answer comes back; nothing is written here.
//             Phones that still run an old copy of the app (pointing at this address) keep working this way.
// Since the night review (2026-11-01, finding 1) none of this is a web call: apiCfMode and apiCfExport were open to anyone
// with the 4-digit admin PIN, and could point the relay (every PIN of an old copy) and the nightly copy (the server's
// admin token) at another address. Run them from the Apps Script editor instead (Run > cfModeRelay, cfModeNormal,
// cfModeFreeze), and the relay, the nightly copy and the mode only ever talk to CF_HOME (or a host in the Script
// Property CF_HOSTS, comma separated).

var CF_HOME = 'coco.coachkrispel.com';

function cfHostOk(url) {
  var m = /^https:\/\/([^\/:?#]+)(\/|$)/.exec(String(url || ''));
  if (!m) return false;
  var host = m[1].toLowerCase(), extra = String(PropertiesService.getScriptProperties().getProperty('CF_HOSTS') || '').toLowerCase();
  return host === CF_HOME || extra.split(',').map(function (s) { return s.trim(); }).filter(String).indexOf(host) >= 0;
}

function cfMode() {
  var c = CacheService.getScriptCache(), hit = c.get('CFMODE');
  if (hit !== null) return JSON.parse(hit);
  var p = PropertiesService.getScriptProperties();
  var m = { mode: p.getProperty('CF_MODE') || '', url: p.getProperty('CF_URL') || '' };
  c.put('CFMODE', JSON.stringify(m), 60);
  return m;
}

// Called by doPost before anything else: an answer when this call is frozen or relayed, null to go on as usual.
// Relayed calls carry X-Coco-Relay (the Script Property CF_RELAY_KEY, the Worker's RELAY_KEY): they all come from Google's
// addresses, so the new server counts wrong PINs from them in one generous bucket instead of per address (Auth.js LOCK).
function cfIntercept(req, body) {
  var m = cfMode();
  if (m.mode === 'freeze') return JSON.stringify({ ok: false, error: 'Chacho is moving to a faster home. Back in a few minutes!' });
  if (m.mode === 'relay' && m.url) {
    if (!cfHostOk(m.url)) return JSON.stringify({ ok: false, error: 'The server is busy, try again' });
    var key = PropertiesService.getScriptProperties().getProperty('CF_RELAY_KEY');
    var r = UrlFetchApp.fetch(m.url, { method: 'post', contentType: 'text/plain;charset=utf-8', payload: body, muteHttpExceptions: true,
      headers: key ? { 'X-Coco-Relay': key } : {} });
    if (r.getResponseCode() === 200) return r.getContentText();
    return JSON.stringify({ ok: false, error: 'The server is busy, try again' });
  }
  return null;
}

// Every sheet (values as getValues() gives them, Dates as {"$d": ms}) and every Script Property, for an import into
// the new server. From the Apps Script editor only (not a web call).
function cfExport() {
  // Only while frozen (a cutover's few minutes): the export holds every PIN and the push signing key.
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

// mode: '', 'freeze' or 'relay' (with the new server's /api address and the token of its export). Relay also stops this
// script's own reminders (the new server sends them) and starts the nightly copy back into this sheet (cfMirror);
// '' puts the reminders back. The token goes whenever the mode or the address changes: a token is only ever kept for the
// address it was given with (set it again with the mode, or in Project Settings > Script Properties as CF_TOKEN).
function cfSetMode(mode, url, token) {
  mode = String(mode || '');
  if (['', 'freeze', 'relay'].indexOf(mode) < 0) throw new Error('Unknown mode');
  if (mode === 'relay' && !/^https:\/\/[^\s]+\/api$/.test(String(url || ''))) throw new Error('The relay needs the /api address');
  if (mode === 'relay' && !cfHostOk(url)) throw new Error('Not the app\'s own server: ' + url);
  var p = PropertiesService.getScriptProperties(), was = cfMode();
  if (mode !== 'relay' || String(url) !== was.url || was.mode !== 'relay') p.deleteProperty('CF_TOKEN');
  p.setProperty('CF_MODE', mode);
  p.setProperty('CF_URL', mode === 'relay' ? String(url) : '');
  if (mode === 'relay' && token) p.setProperty('CF_TOKEN', String(token));
  cfTriggers(mode === 'relay');
  CacheService.getScriptCache().remove('CFMODE');
  audit('owner', 'editor', '', 'cloudflare', mode || 'normal', true);
  return cfMode();
}
// Run from the editor (Run > ...). The relay to the app's own server keeps CF_TOKEN only if it already pointed there;
// otherwise set CF_TOKEN (the Worker's EXPORT_TOKEN) in Project Settings > Script Properties afterwards.
function cfModeRelay() { return cfSetMode('relay', 'https://' + CF_HOME + '/api'); }
function cfModeNormal() { return cfSetMode(''); }
function cfModeFreeze() { return cfSetMode('freeze'); }

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
  if (!cfHostOk(url)) throw new Error('Not the app\'s own server: ' + url);   // the token never leaves for another address
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
      var line = r.map(function (v) { return v && typeof v === 'object' && v.$d !== undefined ? new Date(v.$d) : sheetSafe(v); });
      while (line.length < w) line.push('');
      return line;
    });
    var last = sh.getLastRow(), cols = sh.getLastColumn();
    if (last && cols) sh.getRange(1, 1, last, cols).clearContent();
    if (values.length) sh.getRange(1, 1, values.length, w).setValues(values);
  });
  clearCache();
}
