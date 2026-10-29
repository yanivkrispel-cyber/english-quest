// Makes a made-up data set for the load test (specs/cloudflare.md, test 10): N families of 2 kids with D days of history
// (a task a day, 4 game rounds, 2 opens, an assignment), on top of the setup of an export (Settings, Rewards, headers).
// Kids are Kid001, Kid002... with PIN 1000 + n; parent codes 5000 + family; admin 1234. No real person in it.
//   node tools/cf-synth.js <export.json> <out.json> [kids=100] [days=90]
const fs = require('fs');
const [src, out, kidsArg, daysArg] = process.argv.slice(2);
const N = Number(kidsArg || 100), D = Number(daysArg || 90);
const base = JSON.parse(fs.readFileSync(src, 'utf8'));
const head = n => base.sheets[n][0];
const sheets = {};
base.names.forEach(n => { sheets[n] = [head(n)]; });
['Settings', 'Rewards'].forEach(n => { sheets[n] = base.sheets[n].map(r => r.slice()); });
const set = (k, v) => { const r = sheets.Settings.find(x => x[0] === k); if (r) r[1] = v; else sheets.Settings.push([k, v]); };
set('AdminPIN', '1234'); set('InviteOpen', 'no');
const row = (n, o) => sheets[n].push(head(n).map(h => (o[h] === undefined ? '' : o[h])));
const day0 = Date.parse('2026-10-29T12:00:00+02:00');
const fmt = t => new Date(t + 2 * 3600e3).toISOString().slice(0, 10);
const levels = ['a1', 'a2', 'b1', 'a2', 'b1-b2', 'b2'];
const games = ['match', 'hear', 'build', 'spot'];
const fam = Math.ceil(N / 2);
for (let f = 0; f < fam; f++) row('Groups', { Id: 'g' + f, Name: 'Family ' + f, ParentPIN: String(5000 + f), Goal: 1500, Friends: '', Parent: 'Parent ' + f, Joined: '2026-08-01 10:00', Consent: '2026-08-01' });
for (let k = 0; k < N; k++) {
  const name = 'Kid' + String(k + 1).padStart(3, '0'), lv = levels[k % levels.length];
  row('Girls', { Name: name, Age: 8 + (k % 7), PIN: String(1000 + k), Level: lv, Color: '#7b7ff7', Group: 'g' + Math.floor(k / 2), Pet: 'fawn', PetName: 'Pip', PetSince: '2026-08-01', Missions: '' });
  for (let d = D; d >= 1; d--) {
    const t = day0 - d * 86400e3, date = fmt(t);
    if (d % 7 === 3) continue;   // a missed day a week
    row('Assignments', { Girl: name, Date: date, Section: 'grammar', Level: lv, Title: 'Topic ' + d, URL: 'https://test-english.com/grammar-points/' + lv + '/topic-' + d + '/' });
    row('Log', { Timestamp: { $d: t }, Girl: name, Date: date, DoneOn: date, Section: 'grammar', Level: lv, Title: 'Topic ' + d, URL: 'https://test-english.com/grammar-points/' + lv + '/topic-' + d + '/',
      Correct: 8, Total: 10, Percent: 80, Points: 18, Mission: lv + 'g01', Seconds: 420 });
    for (let g = 0; g < 4; g++) row('Games', { Timestamp: { $d: t + g * 60e3 }, Girl: name, Date: date, Game: games[g], Level: lv, Correct: 4, Total: 5, XP: 8, Missed: '' });
    row('Audit', { Timestamp: { $d: t }, Date: date, Role: 'kid', Who: name, Group: 'g' + Math.floor(k / 2), Action: 'open', Detail: 'last open 1.2s saved', Ok: 'yes', Device: 'iPhone, app' });
    row('Audit', { Timestamp: { $d: t + 3600e3 }, Date: date, Role: 'kid', Who: name, Group: 'g' + Math.floor(k / 2), Action: 'open', Detail: '', Ok: 'yes', Device: 'iPhone, app' });
  }
}
fs.writeFileSync(out, JSON.stringify({ names: base.names, sheets, props: { setup: (fs.readFileSync(__dirname + '/../src/Code.js', 'utf8').match(/SETUP_VERSION = '([^']+)'/) || [])[1] } }));
console.log(base.names.map(n => n + ' ' + (sheets[n].length - 1)).filter(s => !/ 0$/.test(s)).join(', '));
