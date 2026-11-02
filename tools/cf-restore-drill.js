// The restore drill (specs/cloudflare.md, "Backups and restore"): proves a nightly backup can be read and put back.
//   ADMIN_TOKEN=... node tools/cf-restore-drill.js <server> [day]
//       downloads the backup of that day (default: the newest) from <server>/admin/backup, checks it opens, and compares
//       its rows per tab with the server's /admin/stats now (a backup is up to a day older, so small differences are fine).
//   ADMIN_TOKEN=... STAGING_TOKEN=... node tools/cf-restore-drill.js <server> [day] --into <staging server>
//       also imports it into staging (/admin/import) and compares staging's rows with the backup: they must be equal.
// <server> is the Worker's base address (https://coco.coachkrispel.com or the staging workers.dev one), without /api.
// The file is kept in EnglishLessons-work/migration/ (it holds every PIN: never commit it). Never import into production.
const fs = require('fs'), path = require('path'), zlib = require('zlib');
const args = process.argv.slice(2), into = args.indexOf('--into') >= 0 ? args.splice(args.indexOf('--into'), 2)[1] : '';
const [base, dayArg] = args;
if (!base || !process.env.ADMIN_TOKEN) { console.log('usage: ADMIN_TOKEN=... node tools/cf-restore-drill.js <server> [day] [--into <staging server>]'); process.exit(1); }
if (into && (/coco\.coachkrispel\.com/.test(into) || !/staging/.test(into))) { console.log('--into must be the staging server'); process.exit(1); }
const get = async (url, token, opt = {}) => {
  const r = await fetch(url, { ...opt, headers: { 'X-Admin-Token': token, ...(opt.headers || {}) } });
  if (!r.ok) throw new Error(url + ': ' + r.status + ' ' + (await r.text()).slice(0, 200));
  return r;
};
const counts = data => Object.fromEntries((data.names || []).map(n => [n, Math.max(0, (data.sheets[n] || []).length - 1)]));
const statCounts = s => Object.fromEntries((s.rows || []).map(r => [r.sheet, Math.max(0, r.n - 1)]));
(async () => {
  const B = base.replace(/\/+$/, ''), T = process.env.ADMIN_TOKEN;
  const list = await (await get(B + '/admin/backups', T)).json();
  console.log('backups kept: ' + list.backups.map(b => b.day + ' (' + Math.round(b.bytes / 1024) + ' KB)').join(', '));
  const day = dayArg || (list.backups[0] || {}).day;
  if (!day) throw new Error('no backup yet');
  const gz = Buffer.from(await (await get(B + '/admin/backup?day=' + day, T)).arrayBuffer());
  const data = JSON.parse(zlib.gunzipSync(gz).toString('utf8'));
  const dir = path.join(__dirname, '..', '..', '..', 'EnglishLessons-work', 'migration');
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(fs.existsSync(dir) ? dir : '.', 'backup-' + day + '.json.gz');
  fs.writeFileSync(file, gz);
  const b = counts(data), now = statCounts(await (await get(B + '/admin/stats', T)).json());
  console.log('backup ' + day + ': ' + Object.keys(b).length + ' tabs, ' + Object.values(b).reduce((x, y) => x + y, 0) + ' rows, taken ' + new Date(data.at).toISOString() + '; saved ' + file);
  Object.keys(b).forEach(n => console.log('  ' + n.padEnd(14) + String(b[n]).padStart(7) + ' rows   now ' + String(now[n] ?? '-').padStart(7)));
  if (!into) return console.log('ok: the backup opens. To finish the drill, import it into staging with --into.');
  const S = into.replace(/\/+$/, ''), ST = process.env.STAGING_TOKEN || T;
  await get(S + '/admin/import', ST, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
  const st = statCounts(await (await get(S + '/admin/stats', ST)).json());
  const bad = Object.keys(b).filter(n => (st[n] || 0) !== b[n]);
  console.log(bad.length ? 'FAIL: staging differs in ' + bad.join(', ') : 'ok: staging holds the backup, tab by tab (' + Object.keys(b).length + ' tabs)');
  process.exit(bad.length ? 1 : 0);
})().catch(e => { console.error(e.message); process.exit(1); });
