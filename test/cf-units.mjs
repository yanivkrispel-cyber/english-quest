// Unit checks of the Cloudflare platform layer (specs/cloudflare.md, test 3): Utilities against Node crypto and known
// Israel clock changes, the sheet facade and its flush, the kept cache keys, and the WebCrypto VAPID JWT of
// worker/api/push.js against a key made by the BigInt code in src/Push.js.  node platform/build.js && node test/cf-units.mjs
import crypto from 'node:crypto';
import { DatabaseSync } from 'node:sqlite';
import * as S from '../worker/api/server.js';
import { vapidJwt, sendOutbox } from '../worker/api/push.js';

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
console.log(bad ? bad + ' FAILED' : 'all ok');
process.exit(bad ? 1 : 0);
