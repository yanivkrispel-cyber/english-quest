// Load test of a Coco server (specs/cloudflare.md, test 10), against the staging server with made-up kids (tools/cf-synth.js):
// each virtual kid opens the app, plays three game rounds, opens it again and visits the shop; some parents look too.
//   node tools/cf-load.js <base url> [kids=100] [rounds=1] [think ms=1500]
// Prints the time per call (median, 95th percentile, slowest) and every error. Never point it at the live server.
const [base, kidsArg, roundsArg, thinkArg] = process.argv.slice(2);
if (!base || /coachkrispel\.com|script\.google/.test(base)) { console.log('usage: node tools/cf-load.js <staging url> [kids] [rounds] [think]'); process.exit(2); }
const N = Number(kidsArg || 100), R = Number(roundsArg || 1), THINK = Number(thinkArg || 1500);
const levels = ['a1', 'a2', 'b1', 'a2', 'b1-b2', 'b2'];
const times = {}, errors = {};
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function call(fn, args) {
  const t0 = Date.now();
  let ok = false, err = '';
  try {
    const r = await fetch(base.replace(/\/$/, '') + '/api', { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ fn, args, dev: 'load test' }) });
    const txt = await r.text();
    if (r.status !== 200) err = 'HTTP ' + r.status + ' ' + txt.slice(0, 80);
    else { const j = JSON.parse(txt); ok = j.ok; if (!ok) err = j.error; }
  } catch (e) { err = String(e.message || e); }
  (times[fn] = times[fn] || []).push(Date.now() - t0);
  if (err) errors[fn + ': ' + err] = (errors[fn + ': ' + err] || 0) + 1;
  return ok;
}
async function kid(k) {
  await sleep(Math.random() * THINK * 2);
  const name = 'Kid' + String(k + 1).padStart(3, '0'), pin = String(1000 + k), lv = levels[k % levels.length];
  for (let r = 0; r < R; r++) {
    await call('apiDashboard', [name, pin]);
    for (let g = 0; g < 3; g++) {
      await sleep(THINK * (0.5 + Math.random()));
      await call('apiGameResult', [name, pin, ['match', 'listen', 'spot'][g], lv, 4, 5, [], [], 0]);
    }
    await call('apiDashboard', [name, pin]);
    await call('apiShop', [name, pin]);
    if (k % 5 === 0) await call('apiParent', [String(5000 + Math.floor(k / 2))]);
  }
}
(async () => {
  const t0 = Date.now();
  await Promise.all(Array.from({ length: N }, (_, k) => kid(k)));
  const secs = (Date.now() - t0) / 1000;
  const q = (a, p) => a.slice().sort((x, y) => x - y)[Math.min(a.length - 1, Math.floor(a.length * p))];
  let all = [];
  Object.keys(times).forEach(fn => { all = all.concat(times[fn]); console.log(fn.padEnd(16) + ' n ' + String(times[fn].length).padStart(4) + '  median ' + q(times[fn], 0.5) + ' ms  p95 ' + q(times[fn], 0.95) + ' ms  max ' + Math.max(...times[fn]) + ' ms'); });
  console.log('all calls'.padEnd(16) + ' n ' + String(all.length).padStart(4) + '  median ' + q(all, 0.5) + ' ms  p95 ' + q(all, 0.95) + ' ms  in ' + secs.toFixed(1) + ' s (' + (all.length / secs).toFixed(1) + ' calls/s)');
  const e = Object.keys(errors);
  console.log(e.length ? 'errors:\n  ' + e.map(k => errors[k] + ' x ' + k).join('\n  ') : 'errors: none');
})();
