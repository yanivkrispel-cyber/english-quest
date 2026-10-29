// The cutover night (specs/cloudflare.md, "Cutover night"), step by step, each step checked before the next.
// Needs: Relay.js live on Apps Script, the production server deployed (empty) with its ADMIN_TOKEN, and the admin PIN.
//   node tools/cf-cutover.js freeze          Apps Script refuses every call for a few minutes
//   node tools/cf-cutover.js copy            Apps Script's export -> the new server's import, then counts and a spot check
//   node tools/cf-cutover.js relay           Apps Script passes every call to the new server (its reminders off)
//   node tools/cf-cutover.js back            Apps Script normal again (reminders back): the way back
//   node tools/cf-cutover.js status          both servers' state
// Secrets come from EnglishLessons-work/migration/cutover.json: { "adminPin": "....", "token": "...", "api": "https://coco.coachkrispel.com/api",
// "admin": "https://coco-api.<account>.workers.dev" } (the /admin routes live on the server Worker itself)
// (never in the repo). The export is saved next to it, for the parity test and as the "before" copy.
const fs = require('fs'), path = require('path');
const WORK = path.join(__dirname, '..', '..', 'EnglishLessons-work', 'migration');
const cfg = JSON.parse(fs.readFileSync(path.join(WORK, 'cutover.json'), 'utf8'));
const GAS = 'https://script.google.com/macros/s/AKfycbzN95JPrZcVFtwOc5yYpZLEh5fhySlDWHim1wAF_-3kdQpij1s6g4-ixld8NgK27HNI3w/exec';
const base = cfg.admin;

async function gas(fn, args) {
  const r = await fetch(GAS, { method: 'POST', redirect: 'follow', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ fn, args }) });
  const j = JSON.parse(await r.text());
  if (!j.ok) throw new Error(fn + ': ' + j.error);
  return j.data;
}
async function cf(pathname, opts = {}) {
  const r = await fetch(base + pathname, { ...opts, headers: { 'X-Admin-Token': cfg.token, 'Content-Type': 'application/json', ...(opts.headers || {}) } });
  const j = await r.json();
  if (!j.ok) throw new Error(pathname + ': ' + (j.error || r.status));
  return j;
}
async function api(url, fn, args) {
  const r = await fetch(url, { method: 'POST', redirect: 'follow', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ fn, args, v: '9999' }) });
  return JSON.parse(await r.text());
}

const steps = {
  async freeze() { console.log(await gas('apiCfMode', [cfg.adminPin, 'freeze', '', ''])); },
  async back() { console.log(await gas('apiCfMode', [cfg.adminPin, '', '', ''])); },
  async relay() { console.log(await gas('apiCfMode', [cfg.adminPin, 'relay', cfg.api, cfg.token])); },
  async copy() {
    const t0 = Date.now();
    const data = await gas('apiCfExport', [cfg.adminPin]);
    const file = path.join(WORK, 'export-cutover-' + new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-') + '.json');
    fs.writeFileSync(file, JSON.stringify(data));
    const want = {};
    data.names.forEach(n => { want[n] = data.sheets[n].length; });
    console.log('exported ' + data.names.length + ' tabs in ' + ((Date.now() - t0) / 1000).toFixed(1) + ' s -> ' + path.basename(file));
    const imp = await cf('/admin/import', { method: 'POST', body: JSON.stringify(data) });
    const back = (await cf('/admin/export')).data;
    const bad = data.names.filter(n => (back.sheets[n] || []).length !== want[n] || JSON.stringify(back.sheets[n]) !== JSON.stringify(data.sheets[n]));
    const props = Object.keys(data.props).filter(k => String(back.props[k]) !== String(data.props[k]));
    console.log('imported ' + imp.rows + ' rows; tabs that differ: ' + (bad.join(', ') || 'none') + '; script properties that differ: ' + (props.join(', ') || 'none'));
    if (bad.length || props.length) throw new Error('the copy does not match: stop, run "back"');
    const pub = await api(cfg.api, 'apiPublic', ['']);
    console.log('the new server answers: ' + (pub.ok ? 'yes, ' + pub.data.girls.length + ' kids in the default family' : pub.error));
  },
  async status() {
    const s = await cf('/admin/stats');
    console.log('new server: ' + JSON.stringify(s.use) + ', ' + s.rows.length + ' tabs, ' + Math.round(s.dbBytes / 1024) + ' KB');
    const p = await api(GAS, 'apiPublic', ['']);
    console.log('Apps Script apiPublic: ' + (p.ok ? 'answers' : p.error));
  }
};

const step = process.argv[2];
if (!steps[step]) { console.log('steps: ' + Object.keys(steps).join(', ')); process.exit(2); }
steps[step]().catch(e => { console.error('FAILED: ' + e.message); process.exit(1); });
