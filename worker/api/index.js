// The Coco server on Cloudflare (specs/cloudflare.md). The Worker passes POST /api (the same {fn, args} body the app sent to
// Apps Script) to one Durable Object, CocoServer, which runs the generated server (worker/api/server.js: src/*.js on the
// platform layer) over its own SQLite database. One object handles one request at a time, like the old script lock,
// and keeps the sheets in memory between requests.
//
// Routes on the object: POST /api, POST /tick (the cron, every 10 minutes), and for the owner's tools with the
// X-Admin-Token header: GET /admin/export, POST /admin/import, GET /admin/stats.
import { DurableObject } from 'cloudflare:workers';
import { createGas, sqliteStore, createServer, nodeCrypto } from './server.js';
import { sendOutbox } from './push.js';

const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };
const json = (body, status = 200) => new Response(typeof body === 'string' ? body : JSON.stringify(body),
  { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...CORS } });

export class CocoServer extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.sql = (q, ...p) => ctx.storage.sql.exec(q, ...p).toArray();
    this.use = { day: '', api: 0, ms: 0, pushes: 0, errors: 0, slow: [] };
    this.boot();
  }

  boot() {
    this.G = createGas({ store: sqliteStore(this.sql), crypto: nodeCrypto, ownerEmail: this.env.OWNER_EMAIL || '', appUrl: this.env.APP_URL || '' });
    this.S = createServer({ services: this.G.services, freeze: false, asyncPush: true, outbox: this.G.outbox });
  }

  // Runs fn on the server inside one SQLite transaction and saves what it changed. If saving fails, memory and the
  // database could disagree, so the server is rebuilt from the database.
  run(fn) {
    try {
      return this.ctx.storage.transactionSync(() => { this.S.startRequest(); const r = fn(this.S); this.G.flush(); return r; });
    } catch (e) {
      this.use.errors++;
      console.error('request failed, reloading: ' + ((e && e.stack) || e));
      this.boot();
      throw e;
    }
  }

  count(ms) {
    const day = new Date().toISOString().slice(0, 10);
    if (this.use.day !== day) this.use = { day, api: 0, ms: 0, pushes: 0, errors: 0, slow: [] };
    this.use.api++; this.use.ms += ms;
  }

  // Pushes go out after the answer; dead subscriptions are removed in a second step.
  afterRequest() {
    const box = this.G.outbox.splice(0);
    if (!box.length) return;
    const mode = this.env.PUSH_MODE || 'off';
    if (mode === 'off') return;
    this.use.pushes += box.reduce((n, m) => n + m.endpoints.length, 0);
    const p = sendOutbox(box, { ttl: this.S.pushTtl(), sub: this.env.VAPID_SUB || 'https://coco.coachkrispel.com' }).then(gone => {
      Object.keys(gone).forEach(sheet => this.run(S => S.removeSubscriptions(gone[sheet], sheet)));
    }).catch(e => console.error('push: ' + ((e && e.message) || e)));
    if (this.ctx.waitUntil) this.ctx.waitUntil(p);
  }

  admin(request) {
    const token = this.env.ADMIN_TOKEN;
    return !!token && request.headers.get('X-Admin-Token') === token;
  }

  async fetch(request) {
    const url = new URL(request.url), path = url.pathname;
    if (path === '/api' && request.method === 'POST') {
      const body = await request.text(), t0 = Date.now();
      let out;
      try {
        out = this.run(S => S.doPost({ postData: { contents: body }, parameter: {} }).getContent());
      } catch (e) {
        out = JSON.stringify({ ok: false, error: 'The server is busy, try again' });
      }
      this.count(Date.now() - t0);
      this.afterRequest();
      return json(out);
    }
    if (path === '/tick' && request.method === 'POST') {
      const ran = this.run(S => S.tick());
      this.afterRequest();
      return json({ ok: true, ran });
    }
    if (path.startsWith('/admin/')) {
      if (!this.admin(request)) return json({ ok: false, error: 'Not allowed' }, 403);
      if (path === '/admin/stats') {
        const rows = this.sql('SELECT sheet, COUNT(*) AS n FROM rows GROUP BY sheet');
        return json({ ok: true, use: this.use, store: this.G.store.stats, rows, dbBytes: this.ctx.storage.sql.databaseSize });
      }
      if (path === '/admin/export') return json({ ok: true, data: this.exportAll() });
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
      ['sheets', 'rows', 'kv', 'props'].forEach(t => this.sql('DELETE FROM ' + t));
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
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
    if (url.pathname === '/api' || url.pathname.startsWith('/admin/')) return stub(env).fetch(request);
    return json({ ok: false, error: 'Not found' }, 404);
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil(stub(env).fetch('https://coco/tick', { method: 'POST' }));
  }
};
