// Unit checks of the Cloudflare platform layer (specs/cloudflare.md, test 3): Utilities against Node crypto and known
// Israel clock changes, the sheet facade and its flush, the kept cache keys, and the WebCrypto VAPID JWT of
// worker/api/push.js against a key made by the BigInt code in src/Push.js.  node platform/build.js && node test/cf-units.mjs
import crypto from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import * as S from '../worker/api/server.js';
import { vapidJwt, sendOutbox } from '../worker/api/push.js';
import { corsHeaders, safeEqual, withClientIp, callerIp } from '../worker/api/http.js';
import fs from 'node:fs';

let bad = 0;
const check = (label, ok, extra) => { if (!ok) bad++; console.log((ok ? 'ok: ' : 'FAIL: ') + label + (extra === undefined ? '' : ' | ' + extra)); };
const newDb = () => { const db = new DatabaseSync(':memory:'); return { db, sql: (q, ...p) => { const st = db.prepare(q); return /^\s*select/i.test(q) ? st.all(...p) : (st.run(...p), []); } }; };

// ---- Utilities ----
const U = S.createGas({ store: S.memoryStore(), crypto }).services.Utilities;
const TZ = 'Asia/Jerusalem';
const at = (iso, p) => U.formatDate(new Date(iso), TZ, p);
check('summer hour (IDT, +3)', at('2026-10-24T22:30:00Z', 'H') === '1' && at('2026-10-24T22:30:00Z', 'yyyy-MM-dd') === '2026-10-25');
check('the clock goes back on 25.10.2026: 23:30 UTC is 01:30 again', at('2026-10-24T23:30:00Z', 'H') === '1', at('2026-10-24T23:30:00Z', 'yyyy-MM-dd HH:mm'));
check('winter hour (IST, +2)', at('2026-10-29T15:00:00Z', 'H') === '17' && at('2026-10-29T15:00:00Z', 'HH:mm') === '17:00');
check('the clock goes forward on 27.3.2026: 00:30 UTC is 03:30', at('2026-03-27T00:30:00Z', 'H') === '3', at('2026-03-27T00:30:00Z', 'yyyy-MM-dd HH:mm'));
check('midnight is hour 0, not 24', at('2026-10-29T22:10:00Z', 'H') === '0' && at('2026-10-29T22:10:00Z', 'yyyy-MM-dd') === '2026-10-30');
check('yyyy-MM-dd HH:mm', at('2026-01-05T08:07:00Z', 'yyyy-MM-dd HH:mm') === '2026-01-05 10:07');
const signed = b => Array.from(b).map(x => (x > 127 ? x - 256 : x));
check('SHA-256 as signed bytes, like Apps Script', JSON.stringify(U.computeDigest(U.DigestAlgorithm.SHA_256, 'שלום coco', U.Charset.UTF_8)) === JSON.stringify(signed(crypto.createHash('sha256').update('שלום coco').digest())));
check('HMAC-SHA256 as signed bytes', JSON.stringify(U.computeHmacSha256Signature('aviv|123', 'secret')) === JSON.stringify(signed(crypto.createHmac('sha256', 'secret').update('aviv|123').digest())));
check('base64EncodeWebSafe of a string and of signed bytes', U.base64EncodeWebSafe('hi?>') === Buffer.from('hi?>').toString('base64').replace(/\+/g, '-').replace(/\//g, '_') &&
  U.base64EncodeWebSafe([-1, -2, 3]) === Buffer.from([255, 254, 3]).toString('base64').replace(/\+/g, '-').replace(/\//g, '_'));

// ---- sheets, flush and reload ----
{
  const { sql } = newDb();
  const G = S.createGas({ store: S.sqliteStore(sql), crypto });
  const ss = G.services.SpreadsheetApp.getActive();
  const sh = ss.insertSheet('T');
  sh.getRange(1, 1, 1, 3).setValues([['Timestamp', 'Name', 'N']]);
  sh.appendRow([new Date(Date.UTC(2026, 9, 29, 10)), 'Aviv', 1]);
  sh.appendRow([new Date(Date.UTC(2026, 9, 29, 11)), 'Ziv', 2]);
  sh.appendRow([new Date(Date.UTC(2026, 9, 29, 12)), 'Ron', 3]);
  const n1 = G.flush();
  sh.getRange(3, 3).setValue(20);
  const n2 = G.flush();
  sh.deleteRow(2);
  G.flush();
  const G2 = S.createGas({ store: S.sqliteStore(sql), crypto });
  const rows = G2.services.SpreadsheetApp.getActive().getSheetByName('T').getDataRange().getValues();
  check('flush writes only what changed', n1 === 4 && n2 === 1, n1 + ', ' + n2);
  check('a reload after deleteRow keeps order, values and Dates', rows.length === 3 && rows[1][1] === 'Ziv' && rows[1][2] === 20 && rows[2][1] === 'Ron' && rows[1][0] instanceof Date && rows[1][0].getTime() === Date.UTC(2026, 9, 29, 11));
  const c = G.services.CacheService.getScriptCache();
  c.put('PM:abc', 'hello', 600); c.put('T:Girls', 'big', 600); c.put('F:x', '3', 900);
  G.flush();
  c.remove('F:x'); G.flush();
  const c2 = S.createGas({ store: S.sqliteStore(sql), crypto }).services.CacheService.getScriptCache();
  check('kept cache keys survive a restart, the others do not', c2.get('PM:abc') === 'hello' && c2.get('T:Girls') === null && c2.get('F:x') === null);
  const p = G.services.PropertiesService.getScriptProperties();
  p.setProperty('VAPID_D', 'abc');
  check('script properties are saved at once', S.createGas({ store: S.sqliteStore(sql), crypto }).services.PropertiesService.getScriptProperties().getProperty('VAPID_D') === 'abc');
}

// ---- the VAPID JWT from WebCrypto, with a key from src/Push.js ----
{
  const { sql } = newDb();
  const G = S.createGas({ store: S.sqliteStore(sql), crypto });
  const P = S.createServer({ services: G.services, asyncPush: true, outbox: G.outbox, allowEval: true });
  const k = P.eval('vapidKeys()');
  const d = k.d.toString(16), pub = k.pub;
  const jwt = await vapidJwt('https://fcm.googleapis.com/fcm/send/abc', d, pub, 'https://coco.coachkrispel.com');
  const [h, b, sig] = jwt.split('.');
  const raw = Buffer.from(pub.replace(/-/g, '+').replace(/_/g, '/'), 'base64');
  const key = crypto.createPublicKey({ key: { kty: 'EC', crv: 'P-256', x: raw.subarray(1, 33).toString('base64url'), y: raw.subarray(33, 65).toString('base64url') }, format: 'jwk' });
  const ok = crypto.verify('sha256', Buffer.from(h + '.' + b), { key, dsaEncoding: 'ieee-p1363' }, Buffer.from(sig, 'base64url'));
  const claims = JSON.parse(Buffer.from(b, 'base64url'));
  check('the WebCrypto JWT verifies with the public key the phones subscribed with', ok && claims.aud === 'https://fcm.googleapis.com');
  // deliver() leaves the push in the outbox; sendOutbox posts it and reports a gone subscription
  P.startRequest();
  P.eval("deliver(['https://push.example/a', 'https://push.example/gone'], { title: 't', body: 'b' }, 'Push')");
  G.flush();
  const calls = [];
  const gone = await sendOutbox(G.outbox.splice(0), { ttl: 21600, sub: 'https://coco.coachkrispel.com',
    fetchFn: async (url, o) => { calls.push({ url, o }); return { status: url.endsWith('gone') ? 410 : 201 }; } });
  check('the outbox is sent after the request: two posts, VAPID header, TTL', calls.length === 2 && /^vapid t=.+, k=/.test(calls[0].o.headers.Authorization) && calls[0].o.headers.TTL === '21600');
  check('a gone subscription comes back for removal', JSON.stringify(gone) === JSON.stringify({ Push: ['https://push.example/gone'] }));
  check('the message waits in the cache for the service worker', !!G.services.CacheService.getScriptCache().get(P.eval("endpointKey('https://push.example/a')")));
}
// ---- the Workers' front door (worker/api/http.js, night review 2026-11-01): CORS, the caller's address, the token compare ----
{
  const allow = o => corsHeaders(o)['Access-Control-Allow-Origin'];
  check('CORS answers the app\'s own origins only', allow('https://coco.coachkrispel.com') === 'https://coco.coachkrispel.com' && allow('https://yanivkrispel-cyber.github.io') &&
    allow('http://localhost:8791') && allow('http://127.0.0.1:8787') && !allow('https://evil.example') && !allow('https://coco.coachkrispel.com.evil.example') &&
    !allow('http://localhost.evil.example') && !allow('') && corsHeaders('https://evil.example').Vary === 'Origin');
  const idx = fs.readFileSync(new URL('../worker/api/index.js', import.meta.url), 'utf8'), rng = fs.readFileSync(new URL('../worker/range.js', import.meta.url), 'utf8');
  check('no Worker answers CORS * any more, both pass the caller\'s address', !/Allow-Origin': '\*'/.test(idx) && /withClientIp\(request\)/.test(idx) && /withClientIp\(request\)/.test(rng));
  check('the admin token is compared in constant time', /safeEqual\(request\.headers\.get\('X-Admin-Token'\), this\.env\.ADMIN_TOKEN\)/.test(idx) && !/=== token/.test(idx));
  check('safeEqual', safeEqual('abc', 'abc') && !safeEqual('abc', 'abd') && !safeEqual('abc', 'abcd') && !safeEqual('', '') && !safeEqual(undefined, undefined) && safeEqual('שלום', 'שלום'));
  const fwd = withClientIp(new Request('https://coco.coachkrispel.com/api', { method: 'POST', body: '{"fn":"apiWarm"}', headers: { 'CF-Connecting-IP': '203.0.113.5', 'X-Coco-IP': '1.1.1.1' } }));
  check('the address is Cloudflare\'s, not one the caller sent', fwd.headers.get('X-Coco-IP') === '203.0.113.5' && await fwd.text() === '{"fn":"apiWarm"}');
  const spoof = withClientIp(new Request('https://coco.coachkrispel.com/api', { method: 'POST', body: 'x', headers: { 'X-Coco-IP': '1.1.1.1' } }));
  check('without Cloudflare\'s address a sent one is dropped', spoof.headers.get('X-Coco-IP') === null);
  const relayReq = k => new Request('https://x/api', { method: 'POST', body: 'x', headers: { 'X-Coco-IP': '66.249.1.1', 'X-Coco-Relay': k } });
  check('relayed calls with the relay key share one bucket; a wrong key counts by address', callerIp(relayReq('rk'), { RELAY_KEY: 'rk' }) === 'relay' &&
    callerIp(relayReq('nope'), { RELAY_KEY: 'rk' }) === '66.249.1.1' && callerIp(relayReq('rk'), {}) === '66.249.1.1');
}

// ---- wrong PINs write no rows: made-up names on the platform layer (finding 6) ----
{
  const { sql } = newDb();
  const G = S.createGas({ store: S.sqliteStore(sql), crypto });
  const P = S.createServer({ services: G.services, asyncPush: true, outbox: G.outbox, allowEval: true });
  P.startRequest(); P.ensureSetup(); G.flush();
  const before = G.store.stats.rowsWritten;
  let answers = '';
  for (let i = 0; i < 40; i++) {
    P.startRequest();
    answers += JSON.parse(P.doPost({ postData: { contents: JSON.stringify({ fn: 'apiDashboard', args: ['Nobody' + i, '1234'] }) }, parameter: {}, ip: '203.0.113.7' }).getContent()).error + '|';
    G.flush();
  }
  check('40 made-up names from one address: "Wrong PIN" each time and no row written', G.store.stats.rowsWritten === before && answers.split('|').filter(Boolean).every(a => a === 'Wrong PIN'), G.store.stats.rowsWritten - before);
  for (let i = 0; i < 10; i++) { P.startRequest(); P.doPost({ postData: { contents: JSON.stringify({ fn: 'apiDashboard', args: ['Nobody' + i, '1234'] }) }, parameter: {}, ip: '203.0.113.7' }); }
  P.startRequest();
  const blocked = JSON.parse(P.doPost({ postData: { contents: JSON.stringify({ fn: 'apiDashboard', args: ['Nobody', '1234'] }) }, parameter: {}, ip: '203.0.113.7' }).getContent());
  check('then the address is blocked, still without a row written', /Too many attempts/.test(blocked.error) && (G.flush(), G.store.stats.rowsWritten === before), blocked.error);
}
console.log(bad ? bad + ' FAILED' : 'all ok');
process.exit(bad ? 1 : 0);
