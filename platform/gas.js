// The Google services the server code uses (SpreadsheetApp, CacheService, LockService, PropertiesService,
// Utilities, UrlFetchApp, MailApp, ScriptApp, Session, ContentService), rebuilt on a SQLite store so the same
// src/*.js runs inside a Cloudflare Durable Object (specs/cloudflare.md). Plain script: platform/build.js inlines it
// into the Worker bundle; Node tests require() it.
//
// Sheets live in memory as arrays of rows (row 1 = headers), the way the sheet mock in test/sim.js keeps them, and every
// change is written to the store by flush() at the end of a request: changed rows only, or the tail of a sheet after a
// deleteRow. Values keep their types (Dates are stored as {"$d": ms}).

var GAS_CACHE_DEFAULT = 600, GAS_CACHE_MAX = 21600;
// Cache keys that must survive a restart of the Durable Object: pending push messages, the audit queue, PIN lockouts,
// VAPID JWTs. Everything else (tables, duel progress, perf notes) is memory only, like a cache should be.
var GAS_CACHE_KEEP = /^(PM:|AQ|F:|J:)/;

function gasJson(v) {
  return JSON.stringify(v, function (k, x) { var o = this[k]; return o instanceof Date ? { $d: o.getTime() } : x; });
}
function gasParse(s) {
  return JSON.parse(s, function (k, x) { return x && typeof x === 'object' && x.$d !== undefined && Object.keys(x).length === 1 ? new Date(x.$d) : x; });
}

// sql(query, ...params) -> array of row objects. Node: node:sqlite; the Durable Object: ctx.storage.sql.exec().toArray().
function sqliteStore(sql) {
  sql('CREATE TABLE IF NOT EXISTS sheets (name TEXT PRIMARY KEY, ord INTEGER)');
  sql('CREATE TABLE IF NOT EXISTS rows (sheet TEXT, i INTEGER, v TEXT, PRIMARY KEY (sheet, i))');
  sql('CREATE TABLE IF NOT EXISTS kv (k TEXT PRIMARY KEY, v TEXT, exp INTEGER)');
  sql('CREATE TABLE IF NOT EXISTS props (k TEXT PRIMARY KEY, v TEXT)');
  var stats = { rowsWritten: 0, rowsRead: 0 };
  return {
    stats: stats,
    sheetNames: function () { return sql('SELECT name FROM sheets ORDER BY ord').map(function (r) { return r.name; }); },
    loadSheet: function (name) {
      var out = sql('SELECT i, v FROM rows WHERE sheet = ? ORDER BY i', name);
      stats.rowsRead += out.length;
      return out.map(function (r) { return gasParse(r.v); });
    },
    addSheet: function (name, ord) { sql('INSERT OR IGNORE INTO sheets (name, ord) VALUES (?, ?)', name, ord); stats.rowsWritten++; },
    putRow: function (name, i, row) { sql('INSERT OR REPLACE INTO rows (sheet, i, v) VALUES (?, ?, ?)', name, i, gasJson(row)); stats.rowsWritten++; },
    cutFrom: function (name, i) { sql('DELETE FROM rows WHERE sheet = ? AND i >= ?', name, i); stats.rowsWritten++; },
    kvGet: function (k) {
      var r = sql('SELECT v, exp FROM kv WHERE k = ?', k)[0];
      if (!r) return null;
      if (r.exp && r.exp < Date.now()) { sql('DELETE FROM kv WHERE k = ?', k); return null; }
      return r;
    },
    kvPut: function (k, v, exp) { sql('INSERT OR REPLACE INTO kv (k, v, exp) VALUES (?, ?, ?)', k, v, exp); stats.rowsWritten++; },
    kvDel: function (k) { sql('DELETE FROM kv WHERE k = ?', k); },
    kvSweep: function () { sql('DELETE FROM kv WHERE exp IS NOT NULL AND exp < ?', Date.now()); },
    kvAll: function () { return sql('SELECT k, v, exp FROM kv WHERE exp IS NULL OR exp >= ?', Date.now()); },
    props: function () { var o = {}; sql('SELECT k, v FROM props').forEach(function (r) { o[r.k] = r.v; }); return o; },
    propPut: function (k, v) { if (v == null) sql('DELETE FROM props WHERE k = ?', k); else sql('INSERT OR REPLACE INTO props (k, v) VALUES (?, ?)', k, String(v)); stats.rowsWritten++; }
  };
}

// A store that keeps nothing (unit tests of the facade alone).
function memoryStore() {
  var kv = {}, props = {}, rows = {}, names = [];
  return {
    stats: { rowsWritten: 0, rowsRead: 0 },
    sheetNames: function () { return names.slice(); },
    loadSheet: function (n) { return (rows[n] || []).map(function (r) { return gasParse(r); }); },
    addSheet: function (n) { if (names.indexOf(n) < 0) names.push(n); },
    putRow: function (n, i, r) { (rows[n] = rows[n] || [])[i - 1] = gasJson(r); },
    cutFrom: function (n, i) { if (rows[n]) rows[n].length = Math.min(rows[n].length, i - 1); },
    kvGet: function (k) { var r = kv[k]; return r && (!r.exp || r.exp >= Date.now()) ? r : null; },
    kvPut: function (k, v, exp) { kv[k] = { v: v, exp: exp }; },
    kvDel: function (k) { delete kv[k]; },
    kvSweep: function () {},
    kvAll: function () { return Object.keys(kv).map(function (k) { return { k: k, v: kv[k].v, exp: kv[k].exp }; }); },
    props: function () { return Object.assign({}, props); },
    propPut: function (k, v) { if (v == null) delete props[k]; else props[k] = String(v); }
  };
}

function createGas(opts) {
  var store = opts.store, tz = opts.tz || 'Asia/Jerusalem', nodeCrypto = opts.crypto;
  var sheets = {}, order = null, touched = {};

  // ---------- Sheets ----------
  function names() { if (!order) order = store.sheetNames(); return order; }

  function makeSheet(name, rows) {
    var sh = {
      name: name, rows: rows,
      ver: 0,            // bumps on any change (the table memo in platform/overrides.js checks it)
      edits: 0,          // bumps on a change to an existing row (not an append)
      dirty: {}, cut: Infinity,
      getName: function () { return name; },
      getLastRow: function () { return rows.length; },
      getLastColumn: function () { var m = 0; for (var i = 0; i < rows.length; i++) if (rows[i].length > m) m = rows[i].length; return m; },
      getMaxRows: function () { return Math.max(1000, rows.length); },
      getMaxColumns: function () { return Math.max(26, sh.getLastColumn()); },
      getRange: function (a, b, nr, nc) {
        if (typeof a === 'string') return stubRange();
        return makeRange(sh, a, b == null ? 1 : b, nr == null ? 1 : nr, nc == null ? 1 : nc);
      },
      getDataRange: function () { return makeRange(sh, 1, 1, rows.length, sh.getLastColumn()); },
      appendRow: function (r) { rows.push(r.slice()); mark(sh, rows.length - 1, true); return sh; },
      deleteRow: function (i) { rows.splice(i - 1, 1); sh.cut = Math.min(sh.cut, i - 1); sh.ver++; sh.edits++; touched[name] = 1; return sh; },
      deleteRows: function (i, n) { rows.splice(i - 1, n); sh.cut = Math.min(sh.cut, i - 1); sh.ver++; sh.edits++; touched[name] = 1; return sh; },
      setFrozenRows: function () { return sh; },
      autoResizeColumns: function () { return sh; },
      setColumnWidth: function () { return sh; },
      hideSheet: function () { return sh; },
      clear: function () { rows.length = 0; sh.cut = 0; sh.ver++; sh.edits++; touched[name] = 1; return sh; }
    };
    return sh;
  }
  function mark(sh, idx, append) {
    sh.dirty[idx] = 1; sh.ver++; if (!append) sh.edits++; touched[sh.name] = 1;
  }
  function stubRange() {
    var r = {};
    ['setNumberFormat', 'setFontWeight', 'setBackground', 'setHorizontalAlignment', 'setWrap'].forEach(function (m) { r[m] = function () { return r; }; });
    return r;
  }
  function makeRange(sh, a, b, nr, nc) {
    var rows = sh.rows, r = stubRange();
    r.getValues = function () {
      var out = [];
      for (var i = 0; i < nr; i++) {
        var src = rows[a - 1 + i] || [], line = [];
        for (var j = 0; j < nc; j++) { var v = src[b - 1 + j]; line.push(v === undefined || v === null ? '' : v); }
        out.push(line);
      }
      return out;
    };
    r.getValue = function () { return r.getValues()[0][0]; };
    r.setValues = function (v) {
      v.forEach(function (line, i) {
        var idx = a - 1 + i;
        while (rows.length <= idx) rows.push([]);
        line.forEach(function (x, j) { rows[idx][b - 1 + j] = x; });
        mark(sh, idx, false);
      });
      return r;
    };
    r.setValue = function (x) { return r.setValues([[x]]); };
    r.clearContent = function () {
      for (var i = 0; i < nr; i++) { var idx = a - 1 + i; if (!rows[idx]) continue; for (var j = 0; j < nc; j++) rows[idx][b - 1 + j] = ''; mark(sh, idx, false); }
      return r;
    };
    return r;
  }
  function getSheet(name) {
    if (sheets[name]) return sheets[name];
    if (names().indexOf(name) < 0) return null;
    return (sheets[name] = makeSheet(name, store.loadSheet(name)));
  }
  var ss = {
    getSheetByName: getSheet,
    insertSheet: function (name) {
      if (getSheet(name)) return sheets[name];
      names().push(name); store.addSheet(name, order.length);
      return (sheets[name] = makeSheet(name, []));
    },
    getSheets: function () { return names().map(getSheet); },
    deleteSheet: function () {},
    setSpreadsheetTimeZone: function () {},
    getSpreadsheetTimeZone: function () { return tz; },
    getUrl: function () { return opts.sheetUrl || ''; },
    getId: function () { return ''; }
  };

  // Writes every change since the last flush. Returns the number of rows written.
  function flush() {
    var n = 0;
    Object.keys(touched).forEach(function (name) {
      var sh = sheets[name];
      if (!sh) return;
      if (sh.cut < Infinity) {
        store.cutFrom(name, sh.cut + 1);
        for (var i = sh.cut; i < sh.rows.length; i++) { store.putRow(name, i + 1, sh.rows[i]); n++; }
      }
      Object.keys(sh.dirty).forEach(function (k) {
        var idx = Number(k);
        if (idx < sh.cut && idx < sh.rows.length) { store.putRow(name, idx + 1, sh.rows[idx]); n++; }
      });
      sh.dirty = {}; sh.cut = Infinity;
    });
    touched = {};
    Object.keys(cacheDirty).forEach(function (k) {
      if (k in cacheVal) store.kvPut(k, cacheVal[k], cacheExp[k] || null); else store.kvDel(k);
      n++;
    });
    cacheDirty = {};
    return n;
  }
  // Tests that edit sheet rows directly (test/sim.js) call this so flush() writes them.
  function markAll() {
    Object.keys(sheets).forEach(function (name) { var sh = sheets[name]; sh.cut = 0; sh.ver++; sh.edits++; touched[name] = 1; });
  }

  // ---------- Cache ----------
  // The kept keys are loaded once when the server starts and written by flush().
  var cacheVal = opts.cacheObject || {}, cacheExp = {}, cacheDirty = {};
  store.kvAll().forEach(function (r) { cacheVal[r.k] = r.v; cacheExp[r.k] = r.exp; });
  function cAlive(k) {
    if (!(k in cacheVal)) return false;
    if (cacheExp[k] && cacheExp[k] < Date.now()) { delete cacheVal[k]; delete cacheExp[k]; return false; }
    return true;
  }
  function cPut(k, v, sec) {
    var exp = Date.now() + 1000 * Math.min(GAS_CACHE_MAX, sec || GAS_CACHE_DEFAULT);
    cacheVal[k] = String(v); cacheExp[k] = exp;
    if (GAS_CACHE_KEEP.test(k)) cacheDirty[k] = 1;
  }
  function cDel(k) { delete cacheVal[k]; delete cacheExp[k]; if (GAS_CACHE_KEEP.test(k)) cacheDirty[k] = 1; }
  var cache = {
    get: function (k) { return cAlive(k) ? cacheVal[k] : null; },
    getAll: function (ks) { var o = {}; ks.forEach(function (k) { if (cAlive(k)) o[k] = cacheVal[k]; }); return o; },
    put: function (k, v, sec) { cPut(k, v, sec); },
    putAll: function (obj, sec) { Object.keys(obj).forEach(function (k) { cPut(k, obj[k], sec); }); },
    remove: function (k) { cDel(k); },
    removeAll: function (ks) { ks.forEach(cDel); }
  };

  // ---------- Properties ----------
  var propVal = null;
  function pv() { if (!propVal) propVal = store.props(); return propVal; }
  var props = {
    getProperty: function (k) { var v = pv()[k]; return v === undefined ? null : v; },
    setProperty: function (k, v) { pv()[k] = String(v); store.propPut(k, v); return props; },
    setProperties: function (o) { Object.keys(o).forEach(function (k) { props.setProperty(k, o[k]); }); return props; },
    getProperties: function () { return Object.assign({}, pv()); },
    deleteProperty: function (k) { delete pv()[k]; store.propPut(k, null); return props; }
  };

  // ---------- Utilities ----------
  var fmtCache = {};
  function parts(d, zone) {
    var f = fmtCache[zone] || (fmtCache[zone] = new Intl.DateTimeFormat('en-GB', { timeZone: zone, hourCycle: 'h23',
      year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', weekday: 'short' }));
    var o = {};
    f.formatToParts(d).forEach(function (p) { o[p.type] = p.value; });
    return o;
  }
  // The patterns the server uses (yyyy MM dd HH H mm ss EEE); anything else in quotes or as is.
  // Intl is slow and the server formats the same minute again and again (today(), fmt()): a memo per minute.
  var fmtMemo = {}, fmtMemoN = 0;
  function formatDate(d, zone, pattern) {
    var t = d.getTime(), key = Math.floor(t / 60000) + (zone || tz) + pattern;
    if (!/s/.test(pattern) && key in fmtMemo) return fmtMemo[key];
    if (++fmtMemoN > 5000) { fmtMemo = {}; fmtMemoN = 0; }
    return (fmtMemo[key] = formatDateNow(d, zone, pattern));
  }
  function formatDateNow(d, zone, pattern) {
    var p = parts(d, zone || tz);
    return String(pattern).replace(/yyyy|MM|dd|HH|H|mm|ss|EEE/g, function (t) {
      return { yyyy: p.year, MM: p.month, dd: p.day, HH: p.hour, H: String(Number(p.hour)), mm: p.minute, ss: p.second, EEE: p.weekday }[t];
    });
  }
  function toSigned(buf) { var out = []; for (var i = 0; i < buf.length; i++) out.push(buf[i] > 127 ? buf[i] - 256 : buf[i]); return out; }
  function bytes(v) { return typeof v === 'string' ? Buffer.from(v, 'utf8') : Buffer.from(v.map(function (b) { return b & 255; })); }
  var Utilities = {
    DigestAlgorithm: { SHA_256: 'sha256' }, Charset: { UTF_8: 'utf8' },
    formatDate: formatDate,
    getUuid: function () { return nodeCrypto.randomUUID(); },
    computeDigest: function (alg, v) { return toSigned(nodeCrypto.createHash('sha256').update(bytes(v)).digest()); },
    computeHmacSha256Signature: function (v, key) { return toSigned(nodeCrypto.createHmac('sha256', bytes(key)).update(bytes(v)).digest()); },
    base64Encode: function (v) { return bytes(v).toString('base64'); },
    base64EncodeWebSafe: function (v) { return bytes(v).toString('base64').replace(/\+/g, '-').replace(/\//g, '_'); },
    base64Decode: function (s) { return toSigned(Buffer.from(String(s), 'base64')); },
    base64DecodeWebSafe: function (s) { return toSigned(Buffer.from(String(s).replace(/-/g, '+').replace(/_/g, '/'), 'base64')); },
    sleep: function () {}
  };

  // ---------- The rest ----------
  var outbox = [];   // pushes waiting to be sent after the request (see platform/overrides.js)
  var lock = { waitLock: function () {}, tryLock: function () { return true; }, releaseLock: function () {}, hasLock: function () { return true; } };
  var trigger = { timeBased: function () { return trigger; }, everyDays: function () { return trigger; }, everyMinutes: function () { return trigger; },
    everyHours: function () { return trigger; }, atHour: function () { return trigger; }, inTimezone: function () { return trigger; },
    onWeekDay: function () { return trigger; }, create: function () { return trigger; } };
  var services = {
    SpreadsheetApp: { getActive: function () { return ss; }, getActiveSpreadsheet: function () { return ss; } },
    CacheService: { getScriptCache: function () { return cache; } },
    LockService: { getScriptLock: function () { return lock; } },
    PropertiesService: { getScriptProperties: function () { return props; } },
    Utilities: Utilities,
    UrlFetchApp: opts.UrlFetchApp || {
      fetchAll: function (reqs) { throw new Error('UrlFetchApp.fetchAll is replaced by the platform outbox'); },
      fetch: function () { throw new Error('UrlFetchApp.fetch is not available'); }
    },
    MailApp: { sendEmail: function (m) { if (opts.onMail) opts.onMail(m); }, getRemainingDailyQuota: function () { return 0; } },
    ScriptApp: { getProjectTriggers: function () { return []; }, deleteTrigger: function () {}, newTrigger: function () { return trigger; },
      WeekDay: { FRIDAY: 'FRIDAY' }, getService: function () { return { getUrl: function () { return opts.appUrl || ''; } }; } },
    Session: { getEffectiveUser: function () { return { getEmail: function () { return opts.ownerEmail || ''; } }; },
      getScriptTimeZone: function () { return tz; } },
    ContentService: { MimeType: { JSON: 'json', TEXT: 'text' }, createTextOutput: function (t) {
      var o = { setMimeType: function () { return o; }, getContent: function () { return t; } }; return o; } },
    HtmlService: { createHtmlOutputFromFile: function () { throw new Error('No HTML here: the app lives at the Coco address'); } }
  };
  return {
    services: services, flush: flush, markAll: markAll, outbox: outbox, sheets: sheets, cache: cacheVal, store: store,
    sheet: getSheet
  };
}

if (typeof module !== 'undefined') module.exports = { createGas: createGas, sqliteStore: sqliteStore, memoryStore: memoryStore, gasJson: gasJson, gasParse: gasParse };
