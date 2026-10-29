// Parity of the Cloudflare server with the Apps Script one, on a copy of the real data (specs/cloudflare.md, tests 4 and 5).
// The baseline is src/*.js on Apps Script-like mocks (the sheet mock of test/sim.js: every read maps the sheet again);
// the other side is the built Worker server (worker/api/server.js) on node:sqlite. Both get the same data, a frozen clock
// and the same random numbers before every call; every answer and, at the end, every sheet must be the same.
//
//   node platform/build.js && node test/cf-parity.js <export.json>
// The export holds real names and PINs: it stays in EnglishLessons-work/migration/. This script prints call names and
// counts only, never values.
const fs = require('fs'), vm = require('vm'), crypto = require('crypto'), path = require('path');
const file = process.argv[2] || process.env.CF_DATA;
if (!file) { console.log('usage: node test/cf-parity.js <export.json>'); process.exit(2); }

const FILES = ['Catalog.js', 'Code.js', 'Push.js', 'Duels.js', 'Duos.js', 'Shop.js', 'MissionIndex.js', 'Missions.js', 'Pilot.js', 'Chat.js', 'Audit.js', 'Nest.js', 'NestIndex.js'];
const NOW = Date.parse(process.env.CF_NOW || '2026-10-29T18:30:00+02:00');
const RealDate = Date;
class FixedDate extends RealDate { constructor(...a) { if (a.length) super(...a); else super(NOW); } static now() { return NOW; } }
// Every Date in this process is a FixedDate, so instanceof Date holds on both sides and in the parsed data.
globalThis.Date = FixedDate;
let seed = 1;
const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
const M = Object.create(Math); M.random = rnd;
let uuid = 0;

(async () => {
  const S = await import(path.join(__dirname, '..', 'worker', 'api', 'server.js').replace(/\\/g, '/').replace(/^([A-Z]):/, 'file:///$1:'));
  const { gasParse, gasJson } = S;
  const data = gasParse(fs.readFileSync(file, 'utf8'));
  const SETUP = (fs.readFileSync('src/Code.js', 'utf8').match(/var SETUP_VERSION = '([^']+)'/) || [])[1];
  const props = Object.assign({ setup: SETUP }, data.props || {});

  // ---- the baseline: Apps Script-like mocks ----
  const sheets = {};
  function mkSheet(name, rows) { rows = rows || []; return sheets[name] = {
    name, rows, getName: () => name,
    getLastRow: () => rows.length, getLastColumn: () => Math.max(0, ...rows.map(r => r.length)),
    getRange(a, b, nr, nc) { if (typeof a === 'string') return { setNumberFormat() { return this; } };
      nr = nr || 1; nc = nc || 1;
      return { setValues(v) { v.forEach((r, i) => { rows[a - 1 + i] = rows[a - 1 + i] || []; r.forEach((x, j) => rows[a - 1 + i][b - 1 + j] = x); }); return this; },
        setFontWeight() { return this; }, setNumberFormat() { return this; }, setValue(x) { rows[a - 1] = rows[a - 1] || []; rows[a - 1][b - 1] = x; return this; },
        getValue() { return (rows[a - 1] || [])[b - 1] ?? ''; },
        getValues() { return rows.slice(a - 1, a - 1 + nr).map(r => Array.from({ length: nc }, (_, j) => r[b - 1 + j] ?? '')); } }; },
    getDataRange() { return this.getRange(1, 1, rows.length, this.getLastColumn()); },
    appendRow(r) { rows.push(r.slice()); }, deleteRow(i) { rows.splice(i - 1, 1); }, setFrozenRows() {} }; }
  data.names.forEach(n => mkSheet(n, gasParse(gasJson(data.sheets[n]))));
  const cache = {};
  const baseProps = Object.assign({}, props);
  const gasU = S.createGas({ store: S.memoryStore(), crypto }).services.Utilities;   // formatDate etc. (checked on their own)
  const pushes = [[], []];
  const ctx = {
    console: { log() {}, warn() {}, error() {}, info() {} }, Math: M, JSON, Date: FixedDate, Number, String, Object, Array, BigInt, parseInt,
    UrlFetchApp: { fetchAll: reqs => reqs.map(o => { pushes[0].push(o.url); return { getResponseCode: () => 201 }; }) },
    SpreadsheetApp: { getActive: () => ({ getSheetByName: n => sheets[n] || null, insertSheet: n => mkSheet(n), getSheets: () => Object.values(sheets),
      deleteSheet() {}, setSpreadsheetTimeZone() {}, getUrl: () => '' }) },
    Utilities: Object.assign({}, gasU, { getUuid: () => 'u-' + (++uuid) }),
    LockService: { getScriptLock: () => ({ waitLock() {}, tryLock() { return true; }, releaseLock() {} }) },
    PropertiesService: { getScriptProperties: () => ({ getProperty: k => baseProps[k] ?? null, setProperty(k, v) { baseProps[k] = String(v); return this; },
      setProperties(o) { Object.keys(o).forEach(k => baseProps[k] = String(o[k])); return this; } }) },
    ScriptApp: { getProjectTriggers: () => [], newTrigger: () => { const t = { timeBased: () => t, everyDays: () => t, everyMinutes: () => t, atHour: () => t, inTimezone: () => t, onWeekDay: () => t, create: () => t }; return t; }, WeekDay: {}, deleteTrigger() {} },
    CacheService: { getScriptCache: () => ({ get: k => (k in cache ? cache[k] : null), getAll: ks => Object.fromEntries(ks.filter(k => k in cache).map(k => [k, cache[k]])),
      putAll: o => { Object.keys(o).forEach(k => cache[k] = String(o[k])); }, put: (k, v) => { cache[k] = String(v); }, remove: k => { delete cache[k]; }, removeAll: ks => ks.forEach(k => delete cache[k]) }) },
    ContentService: { MimeType: { JSON: 'json' }, createTextOutput: t => ({ setMimeType() { return this; }, getContent: () => t }) },
    MailApp: { sendEmail() {} },
    Session: { getEffectiveUser: () => ({ getEmail: () => '' }) },
  };
  vm.createContext(ctx);
  FILES.filter(f => fs.existsSync('src/' + f)).forEach(f => vm.runInContext(fs.readFileSync('src/' + f, 'utf8'), ctx, { filename: f }));

  // ---- the platform: the built server on node:sqlite ----
  const { DatabaseSync } = require('node:sqlite');
  const db = new DatabaseSync(':memory:');
  const sql = (q, ...p) => { const st = db.prepare(q); return /^\s*select/i.test(q) ? st.all(...p) : (st.run(...p), []); };
  const store = S.sqliteStore(sql);
  data.names.forEach((n, i) => { store.addSheet(n, i); data.sheets[n].forEach((r, j) => store.putRow(n, j + 1, r)); });
  Object.keys(props).forEach(k => store.propPut(k, props[k]));
  const G = S.createGas({ store, crypto: Object.assign(Object.create(crypto), { randomUUID: () => 'u-' + (++uuid) }) });
  const P = S.createServer({ services: G.services, freeze: true, asyncPush: false, outbox: G.outbox, allowEval: true });

  // One call on both sides with the same clock and random numbers.
  const callBase = (fn, args) => { seed = 7; uuid = 0; vm.runInContext('TABLES = {}', ctx);
    return ctx.ContentService.createTextOutput && vm.runInContext('doPost', ctx)({ postData: { contents: JSON.stringify({ fn, args }) } }).getContent(); };
  const callPlat = (fn, args) => { seed = 7; uuid = 0; const m = Math.random; Math.random = rnd;
    try { P.startRequest(); const r = P.doPost({ postData: { contents: JSON.stringify({ fn, args }) } }).getContent(); G.flush(); return r; }
    finally { Math.random = m; } };

  const firstDiff = (a, b, p = '') => {
    if (typeof a !== typeof b || Array.isArray(a) !== Array.isArray(b)) return p || '(root)';
    if (a && typeof a === 'object') {
      const keys = new Set([...Object.keys(a), ...Object.keys(b || {})]);
      for (const k of keys) { const d = firstDiff(a[k], (b || {})[k], p + '.' + k); if (d) return d; }
      return null;
    }
    return a === b ? null : (p || '(root)');
  };
  const dig = (o, p) => p.split(".").slice(1).reduce((x, k) => (x == null ? x : x[k]), o);
  let same = 0, diff = 0, errors = 0;
  const both = (label, fn, args) => {
    const a = callBase(fn, args), b = callPlat(fn, args);
    if (JSON.parse(a).ok === false) errors++;
    if (a === b) { same++; return; }
    diff++;
    const A = JSON.parse(a), B = JSON.parse(b); console.log('DIFF ' + label + ' at ' + firstDiff(A, B) + (process.env.CF_DEBUG ? ' | base ' + (A.error || '') + ' | cf ' + (B.error || '') + ' | ' + JSON.stringify(dig(A, firstDiff(A, B))) + ' vs ' + JSON.stringify(dig(B, firstDiff(A, B))) : ''));
  };

  // ---- reads for everyone ----
  const rowsOf = n => { const r = data.sheets[n] || []; const h = r[0] || []; return r.slice(1).map(x => Object.fromEntries(h.map((k, i) => [k, x[i] ?? '']))); };
  const groups = rowsOf('Groups'), kids = rowsOf('Girls').filter(k => k.Name && k.PIN !== '');
  const admin = String((rowsOf('Settings').find(s => s.Key === 'AdminPIN') || {}).Value || '');
  both('apiPublic(default)', 'apiPublic', ['']);
  groups.forEach((g, i) => both('apiPublic(group ' + i + ')', 'apiPublic', [String(g.Id)]));
  kids.forEach((k, i) => {
    const a = [String(k.Name), String(k.PIN)];
    both('apiDashboard(kid ' + i + ')', 'apiDashboard', a);
    both('apiDuelHome(kid ' + i + ')', 'apiDuelHome', a);
    both('apiShop(kid ' + i + ')', 'apiShop', a);
    both('apiDashboard again(kid ' + i + ')', 'apiDashboard', a);
  });
  groups.forEach((g, i) => { if (String(g.ParentPIN)) both('apiParent(group ' + i + ')', 'apiParent', [String(g.ParentPIN)]); });
  if (admin) {
    both('apiParent(admin)', 'apiParent', [admin]);
    both('apiPilotStats(admin)', 'apiPilotStats', [admin]);
    both('apiAudit(admin, 30)', 'apiAudit', [admin, 30]);
  }
  // ---- writes: a game round for every kid that plays games, then the dashboards again ----
  kids.forEach((k, i) => {
    if (String(k.Level) === 'nest') return;
    both('apiGameResult(kid ' + i + ')', 'apiGameResult', [String(k.Name), String(k.PIN), 'match', String(k.Level || 'a2'), 4, 5, [], [], 0]);
    both('apiDashboard after a game(kid ' + i + ')', 'apiDashboard', [String(k.Name), String(k.PIN)]);
  });
  both('a wrong PIN', 'apiDashboard', [String((kids[0] || {}).Name), '0000']);

  // ---- every sheet must be the same ----
  const names = Object.keys(sheets);
  const sheetDiff = names.filter(n => { const p = G.sheet(n); return !p || gasJson(p.rows) !== gasJson(sheets[n].rows); });
  console.log((diff ? 'FAIL: ' : 'ok: ') + 'answers: ' + same + ' the same, ' + diff + ' different (' + errors + ' refused on both sides, as expected for a wrong PIN or a locked feature)');
  console.log((sheetDiff.length ? 'FAIL: ' : 'ok: ') + 'sheets after the calls: ' + (names.length - sheetDiff.length) + '/' + names.length + ' the same' + (sheetDiff.length ? ' | differ: ' + sheetDiff.join(', ') : ''));
  console.log('kids ' + kids.length + ', groups ' + groups.length + ', pushes sent by the baseline ' + pushes[0].length);
  process.exit(diff || sheetDiff.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
