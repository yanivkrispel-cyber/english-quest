// Sends the pushes the server left in its outbox (platform/overrides.js) after the request was saved. Same requests as
// sendPushes() in src/Push.js (empty body, TTL, VAPID JWT), but the ES256 signature comes from WebCrypto, which costs
// almost no CPU (the BigInt signer in Push.js is far too slow for a Worker's CPU limit). Returns the endpoints that
// are gone (404/410) per sheet, for removeSubscriptions().

const JWT = new Map();   // push service origin -> { jwt, until }
const KEYS = new Map();  // d -> CryptoKey

function b64url(bytes) {
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function fromB64url(s) {
  const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4));
  return Uint8Array.from(bin, c => c.charCodeAt(0));
}
function hexBytes(hex, len) {
  hex = hex.padStart(len * 2, '0');
  const out = new Uint8Array(len);
  for (let i = 0; i < len; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
  return out;
}

async function signingKey(dHex, pub) {
  if (KEYS.has(dHex)) return KEYS.get(dHex);
  const p = fromB64url(pub);   // 0x04 || x || y
  const jwk = { kty: 'EC', crv: 'P-256', d: b64url(hexBytes(dHex, 32)), x: b64url(p.slice(1, 33)), y: b64url(p.slice(33, 65)), ext: true };
  const key = await crypto.subtle.importKey('jwk', jwk, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  KEYS.set(dHex, key);
  return key;
}

export async function vapidJwt(endpoint, dHex, pub, sub) {
  const aud = endpoint.match(/^https:\/\/[^/]+/)[0];
  const hit = JWT.get(aud);
  if (hit && hit.until > Date.now()) return hit.jwt;
  const enc = new TextEncoder();
  const input = b64url(enc.encode(JSON.stringify({ typ: 'JWT', alg: 'ES256' }))) + '.' +
    b64url(enc.encode(JSON.stringify({ aud, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub })));
  const sig = new Uint8Array(await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, await signingKey(dHex, pub), enc.encode(input)));
  const jwt = input + '.' + b64url(sig);
  JWT.set(aud, { jwt, until: Date.now() + 11 * 3600 * 1000 });
  return jwt;
}

export async function sendOutbox(box, { ttl, sub, fetchFn = fetch }) {
  const gone = {};
  const jobs = [];
  for (const m of box) {
    for (const e of m.endpoints) {
      jobs.push((async () => {
        try {
          const jwt = await vapidJwt(e, m.d, m.pub, sub);
          const r = await fetchFn(e, { method: 'POST', body: '', headers: { TTL: String(ttl), Urgency: 'normal', Authorization: 'vapid t=' + jwt + ', k=' + m.pub } });
          if (r.status === 404 || r.status === 410) (gone[m.sheet] = gone[m.sheet] || []).push(e);
          else if (r.status >= 300) console.warn('push ' + r.status + ' to ' + e.slice(0, 40));
        } catch (err) {
          console.warn('push failed to ' + e.slice(0, 40) + ': ' + ((err && err.message) || err));
        }
      })());
    }
  }
  await Promise.all(jobs);
  return gone;
}
