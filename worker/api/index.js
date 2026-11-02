// The Chacho server on Cloudflare (specs/cloudflare.md). The Worker passes POST /api (the same {fn, args} body the app sent to
// Apps Script) to one Durable Object, CocoServer, which runs the generated server (worker/api/server.js: src/*.js on the
// platform layer) over its own SQLite database. One object handles one request at a time, like the old script lock,
// and keeps the sheets in memory between requests.
//
// Routes on the object: POST /api, POST /tick (the cron, every 10 minutes), and for the owner's tools with the
// X-Admin-Token header: GET /admin/export, POST /admin/import, GET /admin/stats, POST /admin/passphrase (the admin's
// passphrase hash, tools/admin-passphrase.js). GET /admin/export also takes EXPORT_TOKEN, the read-only token Apps Script
// keeps for its nightly copy (src/Relay.js cfMirror), so the full ADMIN_TOKEN never has to leave the owner's computer.
// Secrets: ADMIN_TOKEN, EXPORT_TOKEN, RELAY_KEY (the same value as Apps Script's CF_RELAY_KEY).
// The nightly backups (worker/api/backup.js), with X-Admin-Token: GET /admin/backups, GET /admin/backup?day=YYYY-MM-DD (the gzipped export), POST /admin/backup (one now),
// POST /admin/restore?day=YYYY-MM-DD with X-Confirm: RESTORE; Cloudflare's point-in-time recovery (30 days): GET /admin/pitr?at=<ISO>
// (the bookmark of that moment), POST /admin/pitr?at=<ISO> with X-Confirm: RESTORE (the whole database back to it).
import { DurableObject } from 'cloudflare:workers';
import { createGas, sqliteStore, createServer, nodeCrypto } from './server.js';
import { sendOutbox } from './push.js';
import { corsHeaders, safeEqual, withClientIp, callerIp } from './http.js';
import { backupSave, backupList, backupLoad, gzipJson, gunzipJson, exportCounts } from './backup.js';

const json = (body, status = 200, origin = '') => new Response(typeof body === 'string' ? body : JSON.stringify(body),
  { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...corsHeaders(origin) } });

export class CocoServer extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.sql = (q, ...p) => ctx.storage.sql.exec(q, ...p).toArray();
    this.use = { day: '' };
    this.boot();
  }

  props() { return this.G.services.PropertiesService.getScriptProperties(); }

  // Today's use (UTC day, like the free plan's limits): calls, rows written, pushes, failed calls. Kept in the script
  // property use:<day> by guard(), so a restart of the object goes on counting (and does not warn twice).
  today() {
    const day = new Date().toISOString().slice(0, 10);
    if (this.use.day !== day) {
      let u = {};
      try { u = JSON.parse(this.props().getProperty('use:' + day) || '{}'); } catch (e) {}
      this.use = Object.assign({ api: 0, rows: 0, pushes: 0, errors: 0 }, u, { day, ms: 0, slow: [] });
    }
    return this.use;
  }

  boot() {
    this.G = createGas({ store: sqliteStore(this.sql), crypto: nodeCrypto, ownerEmail: this.env.OWNER_EMAIL || '', appUrl: this.env.APP_URL || '', sheetUrl: this.env.SHEET_URL || '' });
    this.S = createServer({ services: this.G.services, freeze: false, asyncPush: true, outbox: this.G.outbox });
  }

  // Runs fn on the server inside one SQLite transaction and saves what it changed. If saving fails, memory and the
  // database could disagree, so the server is rebuilt from the database.
  run(fn) {
    const st = this.G.store.stats, w0 = st.rowsWritten;
    try {
      return this.ctx.storage.transactionSync(() => { this.S.startRequest(); const r = fn(this.S); this.G.flush(); return r; });
    } catch (e) {
      this.today().errors++;
      console.error('request failed, reloading: ' + ((e && e.stack) || e));
      this.boot();
      throw e;
    } finally {
      this.today().rows += Math.max(0, st.rowsWritten - w0);
    }
  }

  count(ms) {
    const u = this.today();
    u.api++; u.ms += ms;
  }

  // Pushes go out after the answer; dead subscriptions are removed in a second step.
  afterRequest() {
    const box = this.G.outbox.splice(0);
    if (!box.length) return;
    const mode = this.env.PUSH_MODE || 'off';
    if (mode === 'off') return;
    this.today().pushes += box.reduce((n, m) => n + m.endpoints.length, 0);
    const p = sendOutbox(box, { ttl: this.S.pushTtl(), sub: this.env.VAPID_SUB || 'https://coco.coachkrispel.com' }).then(gone => {
      Object.keys(gone).forEach(sheet => this.run(S => S.removeSubscriptions(gone[sheet], sheet)));
    }).catch(e => console.error('push: ' + ((e && e.message) || e)));
    if (this.ctx.waitUntil) this.ctx.waitUntil(p);
  }

  // The free plan's daily limit (env.FREE_REQUESTS, 100,000): the admin hears at 70% and again at 90%, and gets a
  // line each evening when the server had errors. Counted here are the server calls only (not pictures and sounds).
  // Rows written (env.FREE_ROWS, 100,000 a day for Durable Objects) the same way: 70% and 90%. The admin's Audit card shows
  // both from 60% (src/Ops.js healthInfo, from the use:<day> property written here).
  guard() {
    const u = this.today(), limit = Number(this.env.FREE_REQUESTS || 100000), rows = Number(this.env.FREE_ROWS || 100000), h = new Date().toLocaleString('en-GB', { timeZone: 'Asia/Jerusalem', hour: 'numeric', hourCycle: 'h23' });
    const say = (key, title, body) => {
      if (u[key]) return;
      u[key] = 1;
      try { this.run(S => S.notifyAdmin({ title, body })); } catch (e) { console.error('notify: ' + ((e && e.message) || e)); }
    };
    if (u.api > limit * 0.9) say('warn90', "Chacho server: 90% of today's free calls", u.api + ' of ' + limit + ' calls today.');
    else if (u.api > limit * 0.7) say('warn70', "Chacho server: 70% of today's free calls", u.api + ' of ' + limit + ' calls today.');
    if (u.rows > rows * 0.9) say('rows90', "Chacho server: 90% of today's free row writes", u.rows + ' of ' + rows + ' rows written today.');
    else if (u.rows > rows * 0.7) say('rows70', "Chacho server: 70% of today's free row writes", u.rows + ' of ' + rows + ' rows written today.');
    if (Number(h) === 21 && u.errors) say('evening', 'Chacho server: ' + u.errors + ' failed calls today', u.api + ' calls today, ' + u.errors + ' failed. Details: /admin/stats');
    try {
      const keep = { api: u.api, rows: u.rows, errors: u.errors, pushes: u.pushes, at: Date.now(), limits: { api: limit, rows } };
      ['warn70', 'warn90', 'rows70', 'rows90', 'evening'].forEach(k => { if (u[k]) keep[k] = 1; });
      const p = this.props();
      p.setProperty('use:' + u.day, JSON.stringify(keep));
      if (p.getProperty('use:' + new Date(Date.now() - 8 * 86400000).toISOString().slice(0, 10)) !== null) p.deleteProperty('use:' + new Date(Date.now() - 8 * 86400000).toISOString().slice(0, 10));
    } catch (e) {}
  }

  // The nightly backup (worker/api/backup.js): the first tick after 02:00 Israel time, once a day (a failed one is tried
  // again on the next tick). Kept 14 days in the object's own storage. force: one now (POST /admin/backup).
  async backup(force) {
    const now = new Date(), p = this.props();
    const day = now.toLocaleDateString('en-CA', { timeZone: 'Asia/Jerusalem' });
    const h = Number(now.toLocaleString('en-GB', { timeZone: 'Asia/Jerusalem', hour: 'numeric', hourCycle: 'h23' }));
    if (!force && (h < 2 || p.getProperty('backup:day') === day)) return null;
    const data = this.exportAll();
    data.at = now.getTime();
    const gz = await gzipJson(data);
    const r = backupSave(this.sql, day, gz, now.getTime());
    const rows = Object.values(exportCounts(data)).reduce((a, b) => a + b, 0);
    p.setProperty('backup:day', day);
    p.setProperty('backup:last', JSON.stringify({ day, at: now.getTime(), bytes: gz.length, rows }));
    this.today().rows += r.parts + 2;
    return { day, bytes: gz.length, rows, dropped: r.dropped };
  }

  admin(request) {
    return safeEqual(request.headers.get('X-Admin-Token'), this.env.ADMIN_TOKEN);
  }
  exporter(request) {
    return this.admin(request) || safeEqual(request.headers.get('X-Admin-Token'), this.env.EXPORT_TOKEN);
  }

  async fetch(request) {
    const url = new URL(request.url), path = url.pathname, origin = request.headers.get('Origin') || '';
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders(origin) });
    if (path === '/api' && request.method === 'POST') {
      const body = await request.text(), t0 = Date.now(), ip = callerIp(request, this.env);
      let out;
      try {
        out = this.run(S => S.doPost({ postData: { contents: body }, parameter: {}, ip }).getContent());
      } catch (e) {
        out = JSON.stringify({ ok: false, error: 'The server is busy, try again' });
      }
      this.count(Date.now() - t0);
      this.afterRequest();
      return json(out, 200, origin);
    }
    if (path === '/tick' && request.method === 'POST') {
      const ran = this.run(S => S.tick());
      this.guard();
      this.afterRequest();
      let backup = null;
      try { backup = await this.backup(false); } catch (e) { this.today().errors++; console.error('backup: ' + ((e && e.stack) || e)); }
      return json({ ok: true, ran, backup });
    }
    // The stores' notices about purchases (Plans, src/Privacy.js entitlement): not turned on before the store launch.
    if (path === '/hooks/apple' || path === '/hooks/google') return json({ ok: false, error: 'Not enabled yet' }, 501);
    if (path === '/admin/export' && request.method === 'GET' && this.exporter(request)) return json({ ok: true, data: this.exportAll() });
    if (path.startsWith('/admin/')) {
      if (!this.admin(request)) return json({ ok: false, error: 'Not allowed' }, 403);
      if (path === '/admin/passphrase' && request.method === 'POST') {
        const body = await request.json().catch(() => ({}));
        try { this.run(S => S.adminPassSet(body.value)); } catch (e) { return json({ ok: false, error: String((e && e.message) || e) }, 400); }
        return json({ ok: true });
      }
      if (path === '/admin/stats') {
        const rows = this.sql('SELECT sheet, COUNT(*) AS n FROM rows GROUP BY sheet');
        return json({ ok: true, use: this.today(), store: this.G.store.stats, rows, dbBytes: this.ctx.storage.sql.databaseSize, backups: backupList(this.sql) });
      }
      // The nightly sheet mirror (src/Relay.js cfMirror) reads this: its time is the age of the copy outside.
      if (path === '/admin/export') {
        const data = this.exportAll();
        try { this.props().setProperty('export:last', new Date().toISOString()); } catch (e) {}
        return json({ ok: true, data });
      }
      if (path === '/admin/backups') return json({ ok: true, backups: backupList(this.sql), last: this.props().getProperty('backup:last') });
      if (path === '/admin/backup' && request.method === 'POST') return json({ ok: true, backup: await this.backup(true) });
      if (path === '/admin/backup') {
        const day = url.searchParams.get('day') || '', gz = backupLoad(this.sql, day);
        if (!gz) return json({ ok: false, error: 'No backup for that day' }, 404);
        return new Response(gz, { headers: { 'Content-Type': 'application/gzip', 'Content-Disposition': 'attachment; filename="chacho-' + day.replace(/[^0-9a-z-]/gi, '') + '.json.gz"', 'Cache-Control': 'no-store' } });
      }
      // Puts a day's backup back (specs/cloudflare.md, "Restore"). What is there now is saved first as <today>-before-restore.
      if (path === '/admin/restore' && request.method === 'POST') {
        if (request.headers.get('X-Confirm') !== 'RESTORE') return json({ ok: false, error: 'Send X-Confirm: RESTORE' }, 400);
        const day = url.searchParams.get('day') || '', gz = backupLoad(this.sql, day);
        if (!gz) return json({ ok: false, error: 'No backup for that day' }, 404);
        const data = await gunzipJson(gz);
        const now = new Date();
        backupSave(this.sql, now.toLocaleDateString('en-CA', { timeZone: 'Asia/Jerusalem' }) + '-before-restore', await gzipJson(this.exportAll()), now.getTime());
        const n = this.importAll(data);
        return json({ ok: true, day, rows: n, counts: exportCounts(data) });
      }
      // Point-in-time recovery of the whole SQLite database (the backups table too). The answer carries the bookmark of
      // the moment before, to undo it the same way; the object restarts on the restored database.
      if (path === '/admin/pitr') {
        const at = Date.parse(url.searchParams.get('at') || '');
        if (!at) return json({ ok: false, error: 'Send at=<ISO time> within the last 30 days' }, 400);
        const bookmark = await this.ctx.storage.getBookmarkForTime(at);
        if (request.method !== 'POST') return json({ ok: true, at: new Date(at).toISOString(), bookmark });
        if (request.headers.get('X-Confirm') !== 'RESTORE') return json({ ok: false, error: 'Send X-Confirm: RESTORE' }, 400);
        const undo = await this.ctx.storage.getCurrentBookmark();
        await this.ctx.storage.onNextSessionRestoreBookmark(bookmark);
        setTimeout(() => this.ctx.abort('point-in-time restore'), 200);
        return json({ ok: true, at: new Date(at).toISOString(), bookmark, undo });
      }
      if (path === '/admin/import' && request.method === 'POST') {
        const data = await request.json();
        const n = this.importAll(data);
        return json({ ok: true, rows: n });
      }
    }
    return json({ ok: false, error: 'Not found' }, 404);
  }

  // Everything the server keeps: sheets (Dates as {"$d": ms}), script properties, the kept cache keys.
  exportAll() {
    const sheets = {};
    const names = this.sql('SELECT name FROM sheets ORDER BY ord').map(r => r.name);
    names.forEach(n => { sheets[n] = this.sql('SELECT v FROM rows WHERE sheet = ? ORDER BY i', n).map(r => JSON.parse(r.v)); });
    const props = {};
    this.sql('SELECT k, v FROM props').forEach(r => { props[r.k] = r.v; });
    return { names, sheets, props };
  }

  // Replaces everything with an export (from Apps Script: tools/cf-export.js, or from exportAll()).
  importAll(data) {
    let n = 0;
    this.ctx.storage.transactionSync(() => {
      this.G.store.reset();
      (data.names || Object.keys(data.sheets)).forEach((name, ord) => {
        this.sql('INSERT INTO sheets (name, ord) VALUES (?, ?)', name, ord);
        (data.sheets[name] || []).forEach((row, i) => { this.sql('INSERT INTO rows (sheet, i, v) VALUES (?, ?, ?)', name, i + 1, JSON.stringify(row)); n++; });
      });
      Object.keys(data.props || {}).forEach(k => this.sql('INSERT INTO props (k, v) VALUES (?, ?)', k, String(data.props[k])));
    });
    this.boot();
    return n;
  }
}

function stub(env) {
  const ns = env.JURISDICTION ? env.COCO.jurisdiction(env.JURISDICTION) : env.COCO;
  return ns.get(ns.idFromName('coco'), env.LOCATION_HINT ? { locationHint: env.LOCATION_HINT } : undefined);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders(request.headers.get('Origin') || '') });
    if (url.pathname === '/api' || url.pathname.startsWith('/admin/')) return stub(env).fetch(withClientIp(request));
    return json({ ok: false, error: 'Not found' }, 404);
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil(stub(env).fetch('https://coco/tick', { method: 'POST' }));
  }
};
