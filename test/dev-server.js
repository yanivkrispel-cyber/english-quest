// Local two-player environment: the real server code (Code.js, Push.js, Duels.js, Duos.js) with the
// mocked Google services from test/sim.js, behind a small HTTP server that also serves the app.
//   node test/dev-server.js        ->  http://localhost:8787/test/dev.html (and on 127.0.0.1)
// Use localhost and 127.0.0.1 for the two players, so each keeps its own sign-in. Kids: Aviv 2694 (A2),
// Ziv 4821 (B2), Ron 7356 (B1); admin 1234. Every API call waits LATENCY ms (default 1200), about
// what the real Apps Script takes. Nothing here touches the real sheet.
// Seeded history (13 days): Aviv and Ziv have a 6-day duo streak (both practicing today makes 7, a
// milestone) and a Hear it team quest (Ziv struggled with it last week); Ron and Aviv a 2-day one, and
// Ron already practiced today.
const fs = require('fs'), path = require('path'), http = require('http');
const PORT = Number(process.env.PORT) || 8787, LATENCY = Number(process.env.LATENCY ?? 1200);
const APP = path.join(__dirname, '..');
process.chdir(APP);
const harness = fs.readFileSync('test/sim.js', 'utf8').split('const pins')[0];
const todayStr = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jerusalem' }).format(new Date());
eval(harness + `
const DAY0 = run("addDays('" + todayStr + "', -13)");
ctx.__day = DAY0;
run('apiPublic()');
const PINS = { Ziv: '4821', Ron: '7356', Aviv: '2694' };
sheets.Girls.rows.slice(1).forEach(r => { r[2] = PINS[r[0]]; });
sheets.Settings.rows.forEach(r => { if (r[0] === 'AdminPIN') r[1] = '1234'; });
run('clearCache()');
const KIDS = [['Aviv', '2694', 'a2', 'monster', 'Fizz'], ['Ziv', '4821', 'b2', 'cat', 'Mochi'], ['Ron', '7356', 'b1', 'lion', 'Leo']];
KIDS.forEach(k => {
  const lt = run("apiDashboard('" + k[0] + "','" + k[1] + "')").levelTest;
  run("apiSubmit('" + k[0] + "','" + k[1] + "','" + lt.date + "','','','" + k[2] + "')");
  run("apiSetPet('" + k[0] + "','" + k[1] + "','" + k[3] + "','" + k[4] + "')");
});
const play = (k, game, correct) => run("apiGameResult('" + k[0] + "','" + k[1] + "','" + game + "','" + k[2] + "'," + correct + ",5,[],[])");
const pair = (a, b) => { run("apiDuoInvite('" + a[0] + "','" + a[1] + "','" + b[0] + "')");
  run("apiDuoAnswer('" + b[0] + "','" + b[1] + "','" + run("apiDuelHome('" + b[0] + "','" + b[1] + "')").duos.incoming[0].id + "',true)"); };
for (let k = 1; k <= 13; k++) {
  ctx.__day = run("addDays('" + DAY0 + "', " + k + ")");
  if (k === 7) pair(KIDS[0], KIDS[1]);
  if (k === 11) pair(KIDS[2], KIDS[0]);
  if (k >= 3 && k <= 12) { play(KIDS[0], 'spot', 4); play(KIDS[1], 'listen', 2); }
  if (k >= 11) play(KIDS[2], 'build', 4);
}
global.devRun = run; global.devCtx = ctx; global.devPushLog = pushLog;
`);

// The app with the API pointed at this server and the art loaded from ../docs/ (rebuilt on every load,
// so edits to src/Index.html show up without restarting and losing the game state).
const devPage = () => fs.readFileSync('src/Index.html', 'utf8')
  .replace('<base target="_top">', '<meta name="viewport" content="width=device-width, initial-scale=1"><script>window.EQ_ASSETS=\'../docs/\';</script>')
  .replace(/const API_URL = .*;/, "const API_URL = '/exec';");
if (!devPage().includes("const API_URL = '/exec';")) throw new Error('API_URL not found in Index.html');
fs.writeFileSync('test/dev.html', devPage());
fs.writeFileSync('test/duo.html', `<!doctype html><meta charset="utf-8"><title>Two phones</title>
<style>body{margin:0;background:#2b2d3a;display:flex;gap:28px;justify-content:center;padding:18px;font:13px system-ui;color:#c7cad6}
figure{margin:0;display:grid;gap:8px;justify-items:center}iframe{border:0;border-radius:28px;background:#fff;width:390px;height:820px}</style>
<figure><iframe src="http://localhost:${PORT}/test/dev.html"></iframe><figcaption>Phone 1 · localhost</figcaption></figure>
<figure><iframe src="http://127.0.0.1:${PORT}/test/dev.html"></iframe><figcaption>Phone 2 · 127.0.0.1</figcaption></figure>`);

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.json': 'application/json',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json' };
http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  if (req.method === 'POST' && url.pathname === '/exec') {
    let body = '';
    req.on('data', c => { body += c; });
    req.on('end', () => {
      let out;
      try {
        global.devCtx.__body = body;
        out = global.devRun('doPost({postData:{contents:__body}}).getContent()');
      } catch (e) { out = JSON.stringify({ ok: false, error: String(e && e.message || e) }); }
      try { const fn = JSON.parse(body).fn; if (fn !== 'apiDuelPoll' && fn !== 'apiDuelHome') console.log(new Date().toISOString().slice(11, 19), fn, out.slice(0, 90)); } catch (e) {}
      setTimeout(() => { res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }); res.end(out); }, LATENCY);
    });
    return;
  }
  if (url.pathname === '/test/dev.html') fs.writeFileSync('test/dev.html', devPage());
  const file = path.join(APP, decodeURIComponent(url.pathname));
  if (!file.startsWith(APP) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); return res.end('not found'); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => console.log('dev server: http://localhost:' + PORT + '/test/duo.html (latency ' + LATENCY + ' ms)'));
