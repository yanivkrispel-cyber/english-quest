// What both Workers (worker/api/index.js, the server; worker/range.js, the front end) need before the server sees a call
// (night review 2026-11-01, findings 2, 6 and 20): who may read the answers in a browser (CORS), the caller's address for
// the server's per-address limits, and a constant-time compare for the admin token. No Cloudflare imports, so
// test/cf-units.mjs loads it in Node.

// The app's own addresses: the front end, the old GitHub Pages address (it shows the "we moved" screen) and local dev.
// Same-origin calls (the app on coco.coachkrispel.com calling /api) need no CORS at all.
export const ORIGINS = [/^https:\/\/coco\.coachkrispel\.com$/, /^https:\/\/yanivkrispel-cyber\.github\.io$/, /^http:\/\/(localhost|127\.0\.0\.1)(:\d{1,5})?$/];

export function corsHeaders(origin) {
  if (!origin || !ORIGINS.some(r => r.test(origin))) return { Vary: 'Origin' };
  return { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', Vary: 'Origin' };
}

// Same length and same bytes, in a time that does not depend on where they differ.
export function safeEqual(a, b) {
  a = String(a == null ? '' : a); b = String(b == null ? '' : b);
  if (!a || !b) return false;
  const x = new TextEncoder().encode(a), y = new TextEncoder().encode(b), n = Math.max(x.length, y.length);
  let d = x.length ^ y.length;
  for (let i = 0; i < n; i++) d |= (x[i % x.length] ^ y[i % y.length]);
  return d === 0;
}

// The call as the Durable Object gets it: X-Coco-IP is Cloudflare's CF-Connecting-IP (a caller cannot set it: any
// X-Coco-IP the caller sent is replaced or dropped).
export function withClientIp(request) {
  const headers = new Headers(request.headers), ip = request.headers.get('CF-Connecting-IP') || '';
  if (ip) headers.set('X-Coco-IP', ip); else headers.delete('X-Coco-IP');
  return new Request(request, { headers });
}

// The address the server counts wrong PINs against. Calls relayed by Apps Script (old copies of the app) all come from
// Google: with the relay's secret (Script Property CF_RELAY_KEY = the Worker's RELAY_KEY) they share the 'relay' bucket.
export function callerIp(request, env) {
  const relay = request.headers.get('X-Coco-Relay');
  if (relay && env && env.RELAY_KEY && safeEqual(relay, env.RELAY_KEY)) return 'relay';
  return request.headers.get('X-Coco-IP') || '';
}
