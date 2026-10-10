// Run right after every deploy: node tools/warm.js
// The first call to a new version is the slow one (setup steps after a SETUP_VERSION bump, empty caches),
// up to 20 s. This makes that call, so no kid gets it. It also installs new triggers (ensureSetup).
const EXEC = 'https://script.google.com/macros/s/AKfycbzN95JPrZcVFtwOc5yYpZLEh5fhySlDWHim1wAF_-3kdQpij1s6g4-ixld8NgK27HNI3w/exec';
(async () => {
  for (const [fn, args] of [['apiWarm', []], ['apiWarm', []], ['apiPublic', ['']]]) {
    const t0 = Date.now();
    try {
      const r = await fetch(EXEC, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify({ fn, args }) });
      const j = await r.json();
      console.log(fn.padEnd(10), String(Date.now() - t0).padStart(6) + ' ms', j.ok ? 'ok' : 'error: ' + j.error);
    } catch (e) { console.log(fn.padEnd(10), 'failed:', e.message); }
  }
})();
