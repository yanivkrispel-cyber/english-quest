// Local simulation of Code.js with in-memory Sheets mocks.
const fs = require('fs'), vm = require('vm'), crypto = require('crypto');
const toSigned = buf => Array.from(buf).map(b => (b > 127 ? b - 256 : b));
const pushLog = [];
// A clock the tests can move forward: Date.now() and new Date() inside the scripts add clockShift ms.
const RealDate = Date;
let clockShift = 0;
class SimDate extends RealDate { constructor(...a) { if (a.length) super(...a); else super(RealDate.now() + clockShift); } static now() { return RealDate.now() + clockShift; } }
let pushStatus = () => 201;
const sheets = {};
function mkSheet(name){ const rows = []; return sheets[name] = {
  name, rows,
  getLastRow: () => rows.length, getLastColumn: () => Math.max(0, ...rows.map(r => r.length)),
  getRange(a, b, nr, nc){ if (typeof a === 'string') return { setNumberFormat(){ return this; } };
    return { setValues(v){ v.forEach((r,i)=>{ rows[a-1+i] = rows[a-1+i]||[]; r.forEach((x,j)=> rows[a-1+i][b-1+j]=x); }); return this; },
      setFontWeight(){ return this; }, setValue(x){ rows[a-1] = rows[a-1] || []; rows[a-1][b-1] = x; return this; },
      getValues(){ const w = Math.max(...rows.map(r=>r.length)); return rows.slice(a-1, a-1+nr).map(r => Array.from({length: nc||w}, (_,j)=> r[b-1+j] ?? '')); } }; },
  getDataRange(){ return this.getRange(1, 1, rows.length, this.getLastColumn()); },
  appendRow(r){ rows.push(r.slice()); }, deleteRow(i){ rows.splice(i - 1, 1); }, setFrozenRows(){} }; }
const cacheStore = {};
const cacheMock = {
  get: k => (k in cacheStore ? cacheStore[k] : null),
  getAll: ks => Object.fromEntries(ks.filter(k => k in cacheStore).map(k => [k, cacheStore[k]])),
  putAll: o => Object.assign(cacheStore, o),
  put: (k, v) => { cacheStore[k] = v; },
  remove: k => { delete cacheStore[k]; },
  removeAll: ks => ks.forEach(k => delete cacheStore[k]),
};
const ctx = {
  console, Math, JSON, Date: SimDate, Number, String, Object, Array, BigInt, parseInt,
  UrlFetchApp: { fetchAll: reqs => reqs.map(o => { pushLog.push({ url: o.url, auth: o.headers.Authorization }); const c = pushStatus(o.url); return { getResponseCode: () => c }; }) },
  SpreadsheetApp: { getActive: () => ({ getSheetByName: n => sheets[n] || null, insertSheet: mkSheet, getSheets: () => Object.values(sheets),
    deleteSheet(){}, setSpreadsheetTimeZone(){}, getUrl: () => 'SHEET' }) },
  Utilities: { formatDate: d => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jerusalem' }).format(d),
    DigestAlgorithm: { SHA_256: 'sha256' }, Charset: { UTF_8: 'utf8' }, getUuid: () => crypto.randomUUID(),
    computeDigest: (alg, str) => toSigned(crypto.createHash('sha256').update(str, 'utf8').digest()),
    base64EncodeWebSafe: v => (typeof v === 'string' ? Buffer.from(v, 'utf8') : Buffer.from(v.map(b => b & 255))).toString('base64').replace(/\+/g, '-').replace(/\//g, '_') },
  LockService: { getScriptLock: () => ({ waitLock(){}, releaseLock(){} }) },
  PropertiesService: { getScriptProperties: () => ({ p: {}, getProperty(k){ return this.p[k] || null; }, setProperty(k,v){ this.p[k]=v; }, setProperties(o){ Object.assign(this.p, o); } }) },
  ScriptApp: { getProjectTriggers: () => [], newTrigger: () => { const t = { timeBased: () => t, everyDays: () => t, atHour: () => t, inTimezone: () => t, onWeekDay: () => t, create: () => t }; return t; },
    WeekDay: {}, getService: () => ({ getUrl: () => 'APPURL' }) },
  CacheService: { getScriptCache: () => cacheMock },
  ContentService: { MimeType: { JSON: 'json' }, createTextOutput: t => ({ setMimeType() { return this; }, getContent: () => t }) },
  MailApp: { sendEmail: m => console.log('MAIL', m.to, m.subject) },
  Session: { getEffectiveUser: () => ({ getEmail: () => 'dad@x' }) },
};
const props = ctx.PropertiesService.getScriptProperties(); ctx.PropertiesService.getScriptProperties = () => props;
vm.createContext(ctx);
for (const f of ['Catalog.js', 'Code.js', 'Push.js', 'Duels.js']) vm.runInContext(fs.readFileSync('src/' + f, 'utf8'), ctx);
// Each call is a fresh request: per-request table memo resets, CacheService persists.
const run = s => { if (typeof ctx.TABLES === 'object') vm.runInContext('TABLES = {}', ctx); return vm.runInContext(s, ctx); };
let day = '2026-10-08';
run('today = function(){ return __day; }'); ctx.__day = day;
const pins = { Ziv: '4821', Ron: '7356', Aviv: '2694' };
console.log(run('JSON.stringify(apiPublic())').slice(0, 200));
// setup generates random PINs; pin them for the test
sheets.Girls.rows.slice(1).forEach(r => { r[2] = pins[r[0]]; });
sheets.Settings.rows.forEach(r => { if (r[0] === 'AdminPIN') r[1] = '1234'; });
run('clearCache()');
let d = run(`apiDashboard('Aviv','2694')`);
console.log('Thu:', d.week.map(w => w.day + ':' + w.section + (w.title ? '[' + w.title.slice(0,20) + ']' : '')).join(' | '));
d = run(`apiSubmit('Aviv','2694','2026-10-08','','','a2')`); console.log('earned', d.justEarned, d.stats);
run(`apiSubmit('Ziv','4821','2026-10-08','','','b2')`);
try { run(`apiSubmit('Aviv','2694','2026-10-08','','','a2')`); } catch(e){ console.log('dup ok:', e.message); }
try { run(`apiDashboard('Aviv','1111')`); } catch(e){ console.log('pin ok:', e.message); }
for (let i = 0; i < 9; i++) { try { run(`apiDashboard('Ron','0000')`); } catch(e){ if (i === 8) console.log('lockout:', e.message); } }
try { run(`apiDashboard('Ron','7356')`); } catch(e){ console.log('locked even with right pin:', e.message); }
Object.keys(cacheStore).filter(k => k.startsWith('F:')).forEach(k => delete cacheStore[k]);
console.log('doPost:', run(`doPost({postData:{contents:JSON.stringify({fn:'apiDashboard',args:['Aviv','2694']})}}).getContent()`).slice(0, 80));
console.log('doPost bad:', run(`doPost({postData:{contents:JSON.stringify({fn:'installTriggers',args:[]})}}).getContent()`));
// simulate days
const days = ['2026-10-09','2026-10-10','2026-10-11','2026-10-12','2026-10-13','2026-10-14','2026-10-15','2026-10-16','2026-10-17','2026-10-18'];
for (const x of days) { ctx.__day = x;
  for (const g of ['Aviv','Ziv']) { if (g === 'Ziv' && x === '2026-10-12') continue;
    run(`apiSubmit('${g}','${pins[g]}','${x}',${Math.floor(Math.random()*4)+7},10,null)`); } }
ctx.__day = '2026-10-18';
d = run(`apiDashboard('Ziv','4821')`);
console.log('Ziv level', d.girl.levelLabel, d.stats, '\n', d.week.map(w => w.day + ':' + w.label + ':' + (w.title||'') + ':' + (w.done?w.percent:'-')).join('\n '));
d = run(`apiDashboard('Aviv','2694')`); console.log('Aviv', d.stats, d.nextReward);
// catch-up of Ziv's missed Monday 12 is last week -> should fail
try { run(`apiSubmit('Ziv','4821','2026-10-12',5,10,null)`); } catch(e){ console.log('old week ok:', e.message); }
const p = run(`apiParent('1234')`); console.log('family', p.groups[0].goal, p.groups[0].girls.map(g => g.girl.name + ' hist ' + JSON.stringify(g.history)).join('\n'));
run('dailyReminder()'); run('weeklySummary()');
console.log('Ron untouched dash:', run(`apiDashboard('Ron','7356')`).week.filter(w=>!w.isFuture).length);
const keys = sheets.Assignments.rows.slice(1).map(r => r[0] + '|' + r[1]);
console.log('assignments', keys.length, 'duplicates', keys.length - new Set(keys).size);

// ---- groups ----
ctx.__day = '2026-10-14';
let P = run(`apiParent('1234')`);
console.log('admin groups:', P.isAdmin, P.groups.map(g => g.name + ':' + g.girls.length + ':' + g.link).join(' '));
P = run(`apiAdminAddGroup('1234', 'Cohen family', 'cohen@x')`);
const gid = P.created.link.split('g=')[1];
console.log('created group:', P.created.name, 'pin', P.created.pin.length, 'link', P.created.link);
try { run(`apiAdminAddGroup('1234', 'cohen FAMILY', '')`); } catch (e) { console.log('dup group ok:', e.message); }
P = run(`apiAdminAddKid('1234', 'Noa', '13', '${gid}', 'b1')`);
console.log('created kid:', P.created.name, 'in', P.created.group, 'pin len', P.created.pin.length);
try { run(`apiAdminAddKid('1234', 'aviv', '9', '${gid}', 'a1')`); } catch (e) { console.log('dup kid ok:', e.message); }
try { run(`apiAdminAddKid('${P.created.pin}', 'X', '9', '${gid}', 'a1')`); } catch (e) { console.log('non-admin add ok:', e.message); }
const noaPin = P.created.pin;
let D = run(`apiDashboard('Noa', '${noaPin}')`);
console.log('Noa week:', D.week.map(w => w.day + (w.beforeStart ? '(pre)' : '') + ':' + w.section).join(' '), '| total', D.stats.weekTotal, '| rewards', D.rewards.length);
ctx.__day = '2026-10-15';
D = run(`apiDashboard('Noa', '${noaPin}')`);
console.log('Noa next day:', D.week.filter(w => !w.beforeStart && !w.isFuture).map(w => w.day + ':' + w.section + ':' + w.level).join(' '));
const gp = run(`apiParent('1234')`).groups.find(g => g.id === gid).parentPin;
P = run(`apiParent('${gp}')`);
console.log('group parent:', P.isAdmin, P.groups.length, P.groups[0].name, P.groups[0].girls.map(k => k.girl.name), 'pins hidden:', P.groups[0].girls.every(k => k.pin === undefined), 'sheet hidden:', P.sheetUrl === null);
console.log('public group:', JSON.stringify(run(`apiPublic('${gid}')`).girls.map(k => k.name)), 'default:', JSON.stringify(run(`apiPublic('')`).girls.map(k => k.name)));
try { run(`apiPublic('nope')`); } catch (e) { console.log('bad link ok:', e.message); }
console.log('admin sees', run(`apiParent('1234')`).groups.map(g => g.name + ':' + g.girls.length).join(' '));
run('weeklySummary()');

// ---- web push ----
ctx.__day = '2026-10-19';
const dz = run("apiDashboard('Ziv','4821')");
console.log('vapid key length:', dz.push.key.length, 'devices:', dz.push.devices);
let r = run("apiPushSubscribe('Ziv','4821','https://fcm.googleapis.com/fcm/send/abc','Android',true)");
console.log('subscribe:', JSON.stringify(r), 'auth header ok:', /^vapid t=[\w-]+\.[\w-]+\.[\w-]{86}, k=[\w-]{87}$/.test(pushLog[0].auth));
console.log('message for endpoint:', JSON.stringify(run("apiPushMessage('https://fcm.googleapis.com/fcm/send/abc')")));
run("apiPushSubscribe('Ziv','4821','https://fcm.googleapis.com/fcm/send/abc','Android',false)");
run("apiPushSubscribe('Ziv','4821','https://web.push.apple.com/xyz','iPhone',false)");
console.log('rows after re-subscribe + 2nd device:', sheets.Push.rows.length - 1);
// verify JWT signature with node crypto
const vk = run('vapidKeys()');
const [h, pl, sg] = pushLog[0].auth.split(' ')[1].slice(2, -1).split('.');
const pub = crypto.createPublicKey({ key: { kty: 'EC', crv: 'P-256', x: Buffer.from(vk.pub, 'base64url').subarray(1, 33).toString('base64url'), y: Buffer.from(vk.pub, 'base64url').subarray(33).toString('base64url') }, format: 'jwk' });
console.log('JWT verifies:', crypto.verify('sha256', Buffer.from(h + '.' + pl), { key: pub, dsaEncoding: 'ieee-p1363' }, Buffer.from(sg, 'base64url')), JSON.parse(Buffer.from(pl, 'base64url')).aud);
// reminders: Ziv has not practiced on 10-15 -> both devices; one is gone (410)
pushLog.length = 0;
pushStatus = url => (url.includes('apple') ? 410 : 201);
run('pushReminders(false)');
console.log('reminder pushes:', pushLog.length, '| rows left:', sheets.Push.rows.length - 1, '| msg:', JSON.stringify(run("apiPushMessage('https://fcm.googleapis.com/fcm/send/abc')")));
run("apiSubmit('Ziv','4821','2026-10-19',9,10,null)");
pushLog.length = 0; run('lastCallReminder()');
console.log('last call after practicing:', pushLog.length, '(expect 0)');
console.log('admin test:', JSON.stringify(run("apiAdminTestPush('1234','Ziv')")));
try { run("apiPushSubscribe('Ziv','0000','https://x.y/z','',false)"); } catch (e) { console.log('bad pin subscribe ok:', e.message); }

// ---- settings ----
let S = run("apiParent('1234')");
console.log('settings:', JSON.stringify(S.settings));
S = run("apiAdminSettings('1234','16','')"); console.log('after save:', JSON.stringify(S.settings));
try { run("apiAdminSettings('1234','18','17')"); } catch (e) { console.log('order check ok:', e.message); }
try { run("apiAdminSettings('" + run("apiParent('1234')").groups[1].parentPin + "','18','')"); } catch (e) { console.log('non-admin ok:', e.message); }
console.log('AppUrl fixed:', run("getSetting('AppUrl')").includes('AKfycbzN95'));

// ---- parent notifications ----
ctx.__day = '2026-10-20';
pushStatus = () => 201;
const gartId = run("apiParent('1234')").groups[1].id, gartPin = run("apiParent('1234')").groups[1].parentPin;
let pp = run("apiParentPushSubscribe('1234','https://fcm.googleapis.com/fcm/send/dad','Android',true)");
console.log('admin subscribe:', JSON.stringify(pp), JSON.stringify(run("apiPushMessage('https://fcm.googleapis.com/fcm/send/dad')")));
run("apiParentPushSubscribe('" + gartPin + "','https://web.push.apple.com/mom','iPhone',false)");
console.log('admin sees own devices only:', JSON.stringify(run("apiParent('1234')").push.devices.map(d => d.e.slice(-3))));
pushLog.length = 0;
run("apiSubmit('Aviv','2694','2026-10-20',9,10,null)");
console.log('instant after Aviv (family):', pushLog.map(x => x.url.slice(-3)), JSON.stringify(run("apiPushMessage('https://fcm.googleapis.com/fcm/send/dad')")));
pushLog.length = 0;
run("apiSubmit('Noa','" + sheets.Girls.rows.find(r => r[0] === 'Noa')[2] + "','2026-10-14','','','b1')"); // new kid: level test first
console.log('instant after Noa (other group):', pushLog.map(x => x.url.slice(-3)));
run("apiParentPushPrefs('1234','https://fcm.googleapis.com/fcm/send/dad',false)");
pushLog.length = 0;
run("apiSubmit('Ron','7356','" + run("apiDashboard('Ron','7356')").levelTest.date + "','','','b1')"); // Ron never logged anything: level test first
console.log('instant with toggle off:', pushLog.length, '(expect 0)');
pushLog.length = 0;
run('parentSummary()');
console.log('summary pushes:', pushLog.map(x => x.url.slice(-3)));
console.log('admin summary:', JSON.stringify(run("apiPushMessage('https://fcm.googleapis.com/fcm/send/dad')")));
console.log('group summary:', JSON.stringify(run("apiPushMessage('https://web.push.apple.com/mom')")));
try { run("apiParentPushTest('" + gartPin + "','https://fcm.googleapis.com/fcm/send/dad')"); } catch (e) { console.log('test on other parent device blocked:', e.message); }
pushStatus = () => 410; run("apiParentPushTest('1234','https://fcm.googleapis.com/fcm/send/dad')");
console.log('gone device removed:', sheets.ParentPush.rows.length - 1, '(expect 1)');

// ---- games & pets ----
ctx.__day = '2026-10-21';
let gd = run("apiDashboard('Aviv','2694')");
console.log('pet before adopting:', gd.pet, '| games:', JSON.stringify(gd.games));
try { run("apiSetPet('Aviv','2694','dragon','X')"); } catch (e) { console.log('bad pet ok:', e.message); }
try { run("apiSetPet('Aviv','2694','turtle','   ')"); } catch (e) { console.log('empty name ok:', e.message); }
gd = run("apiSetPet('Aviv','2694','turtle','Shelly <b>')");
console.log('adopted:', JSON.stringify(gd.pet));
gd = run("apiGameResult('Aviv','2694','match','a2',4,5,['m:a2:library'],['m:a2:pilot','m:a2:lunch','m:a2:nurse','m:a2:bakery'])");
console.log('round 4/5 xp', gd.gameXp, '(expect 8) | pet xp', gd.pet.xp, '| due today', JSON.stringify(gd.games.review));
gd = run("apiGameResult('Aviv','2694','listen','a2',5,5,[],['l:a2:0','l:a2:1'])");
console.log('perfect round xp', gd.gameXp, '(expect 15)');
for (let i = 0; i < 4; i++) gd = run("apiGameResult('Aviv','2694','build','a2',5,5,[],[])");
console.log('daily cap: today xp', gd.games.todayXp, '(expect 60) | last round xp', gd.gameXp, '(expect 0) | rounds', gd.games.todayRounds);
try { run("apiGameResult('Aviv','2694','chess','a2',1,5,[],[])"); } catch (e) { console.log('bad game ok:', e.message); }
try { run("apiGameResult('Aviv','2694','match','a2',6,5,[],[])"); } catch (e) { console.log('bad score ok:', e.message); }
run("apiGameResult('Aviv','2694','spot','zz',2,5,['bad id with spaces','s:a2:3'],[])");
console.log('level fallback + id filter:', sheets.Games.rows.slice(-1)[0].join(' | '));
ctx.__day = '2026-10-22';
gd = run("apiDashboard('Aviv','2694')");
console.log('due next day:', JSON.stringify(gd.games.review), '| today xp reset:', gd.games.todayXp, '| week rounds', gd.games.weekRounds, 'avg', gd.games.weekAvg);
run("apiGameResult('Aviv','2694','match','a2',1,1,[],['m:a2:library'])");
console.log('review row:', sheets.Review.rows.slice(1).map(r => r.join(' ')).join(' / '));
console.log('due on 10-24 (none expected for library):', JSON.stringify((ctx.__day = '2026-10-24', run("apiDashboard('Aviv','2694')")).games.review));
ctx.__day = '2026-10-25';
console.log('due on 10-25:', JSON.stringify(run("apiDashboard('Aviv','2694')").games.review));
run("apiSubmit('Aviv','2694','2026-10-25',9,10,null)");
gd = run("apiDashboard('Aviv','2694')");
console.log('pet after a task:', JSON.stringify(gd.pet), '| recent', JSON.stringify(gd.games.recent));
console.log('public list:', JSON.stringify(run("apiPublic('')").girls.map(g => g.name + ':' + (g.pet ? g.pet.id + '/' + g.pet.stage : '-'))));
const pk = run("apiParent('1234')").groups[0].girls.find(k => k.girl.name === 'Aviv');
console.log('parent sees:', pk.pet.name, 'stage', pk.pet.stage, '| games this week', pk.games.weekRounds, pk.games.weekAvg + '%');
pushStatus = () => 201;
run("apiParentPushSubscribe('1234','https://fcm.googleapis.com/fcm/send/dad2','Android',false)");
run("apiGameResult('Aviv','2694','listen','a2',3,5,[],[])");
run('parentSummary()');
console.log('summary with games:', JSON.stringify(run("apiPushMessage('https://fcm.googleapis.com/fcm/send/dad2')")));
run('weeklySummary()');

// ---- new kids: the level test comes first ----
ctx.__day = '2026-10-26';
const famId = run("apiParent('1234')").groups[0].id;
const talPin = run("apiAdminAddKid('1234','Tal','10','" + famId + "','a2')").created.pin;
let T = run("apiDashboard('Tal','" + talPin + "')");
console.log('new kid:', JSON.stringify(T.levelTest), '| active days', T.week.filter(w => !w.beforeStart).map(w => w.date).join(','), '| aviv gated:', !!run("apiDashboard('Aviv','2694')").levelTest);
try { run("apiGameResult('Tal','" + talPin + "','match','a2',3,5,[],[])"); } catch (e) { console.log('games locked ok:', e.message); }
try { run("apiSubmit('Tal','" + talPin + "','2026-10-26','','',null)"); } catch (e) { console.log('level required ok:', e.message); }
ctx.__day = '2026-10-28';
T = run("apiDashboard('Tal','" + talPin + "')");
console.log('two days later still pending:', T.levelTest.date, '| assignments', sheets.Assignments.rows.filter(r => r[0] === 'Tal').length);
console.log('reminder text:', JSON.stringify(run("reminderMessage(findGirl('Tal'), false)")), '| assignments', sheets.Assignments.rows.filter(r => r[0] === 'Tal').length);
try { run("apiSubmit('Tal','" + talPin + "','2026-10-28',5,10,null)"); } catch (e) { console.log('regular task blocked ok:', e.message); }
T = run("apiSubmit('Tal','" + talPin + "','2026-10-26','','','b1')");
console.log('test logged:', T.justEarned, 'pts | level', T.girl.levelLabel, '| pending', T.levelTest, '| moved to', sheets.Assignments.rows.filter(r => r[0] === 'Tal').map(r => r[1]).join(','),
  '| week', T.week.filter(w => !w.beforeStart).map(w => w.date + (w.done ? ':done' : '')).join(','));
ctx.__day = '2026-10-29';
T = run("apiDashboard('Tal','" + talPin + "')");
const td = T.week.find(w => w.isToday);
console.log('next day task:', td.section, td.level, td.title ? 'ok' : 'none', '| catch-up days', T.week.filter(w => !w.beforeStart && !w.done && !w.isToday && !w.isFuture).length);
console.log('games open:', run("apiGameResult('Tal','" + talPin + "','match','b1',4,5,[],[])").gameXp, 'xp');
// A kid with nothing logged who already got a regular exercise before the level-test rule existed.
ctx.__day = '2026-11-02';
const danaPin = run("apiAdminAddKid('1234','Dana','11','" + famId + "','a2')").created.pin;
run("apiDashboard('Dana','" + danaPin + "')");
sheets.Assignments.rows.push(['Dana', '2026-11-03', 'grammar', 'a2', 'Old exercise', 'https://x/old']);
run('clearCache()');
ctx.__day = '2026-11-03';
T = run("apiDashboard('Dana','" + danaPin + "')");
console.log('dana pending:', T.levelTest.date, '| her rows', sheets.Assignments.rows.filter(r => r[0] === 'Dana').map(r => r[1] + ':' + r[2]).join(','));
T = run("apiSubmit('Dana','" + danaPin + "','2026-11-02','','','a2')");
console.log('dana logged:', T.justEarned, 'pts | rows', sheets.Assignments.rows.filter(r => r[0] === 'Dana').map(r => r[1] + ':' + r[2]).join(','), '| today', T.week.find(w => w.isToday).section, T.week.find(w => w.isToday).done);

// ---- journey: stations, the gate challenge, level up ----
ctx.__day = '2026-11-04';
const jd = (who, pin) => run("apiDashboard('" + (who || 'Aviv') + "','" + (pin || '2694') + "')").journey;
const nextDay = () => { ctx.__day = run("addDays('" + ctx.__day + "', 1)"); };
let J = jd();
console.log('journey:', 'world', J.world, J.name, '| stations', J.stations + '/' + J.goal, '| gate', J.gate.state, 'to', J.gate.nextLabel, J.gate.nextName, '| icons', J.done.length, '| worlds', J.worlds.length);
try { run("apiGateResult('Aviv','2694',15,15,[],[])"); } catch (e) { console.log('closed gate ok:', e.message); }
// A task a day at 70% (too low for the early gate) until the 30th station.
while (J.stations < 30) {
  run("apiSubmit('Aviv','2694','" + ctx.__day + "',7,10,null)");
  J = jd();
  if (J.stations === 29) console.log('station 29:', J.gate.state, '(expect locked)');
  if (J.stations < 30) nextDay();
}
console.log('station 30 on', ctx.__day + ':', J.gate.state, '(expect open) | avg', J.avg, '| icons', J.done.length);
try { run("apiGateResult('Aviv','2694',12,14,[],[])"); } catch (e) { console.log('wrong item count ok:', e.message); }
pushStatus = () => 201;
pushLog.length = 0;
let GR = run("apiGateResult('Aviv','2694',10,15,['m:b1:anxious','l:b1:0','s:b1:2','b:b1:4','m:b1:cancel'],['b:b1:1'])");
console.log('gate missed:', JSON.stringify(GR.gateResult), '| state', GR.journey.gate.state, 'until', GR.journey.gate.until, '| tries', GR.journey.gate.tries, '| level', GR.girl.level);
console.log('missed items in review:', (sheets.Review.rows.find(r => r[0] === 'Aviv') || [])[1].split(' ').filter(x => x.indexOf(':b1:') > 0).length, '(expect 5) | parent push', pushLog.length, JSON.stringify(run("apiPushMessage('https://fcm.googleapis.com/fcm/send/dad2')")));
try { run("apiGateResult('Aviv','2694',15,15,[],[])"); } catch (e) { console.log('wait ok:', e.message); }
const missDay = ctx.__day;
nextDay(); nextDay();
console.log('2 days later:', jd().gate.state, '(expect wait)');
run("apiSubmit('Aviv','2694','" + ctx.__day + "',9,10,null)");
console.log('extra station while waiting:', jd().stations, '(expect 31) | icons', jd().done.length, '(expect 30)');
nextDay();
console.log('3 days after', missDay + ':', jd().gate.state, '(expect open)');
const xpBefore = run("apiDashboard('Aviv','2694')").pet.xp;
pushLog.length = 0;
GR = run("apiGateResult('Aviv','2694',13,15,[],['m:b1:anxious'])");
console.log('gate passed:', JSON.stringify(GR.gateResult), '| level', GR.girl.levelLabel, '| world', GR.journey.world, GR.journey.name,
  GR.journey.stations + '/' + GR.journey.goal, GR.journey.gate.state, '| next', GR.journey.gate.nextLabel, GR.journey.gate.nextName,
  '| pet xp +' + (GR.pet.xp - xpBefore), '| passed', JSON.stringify(GR.journey.passed));
console.log('parent push:', pushLog.length, JSON.stringify(run("apiPushMessage('https://fcm.googleapis.com/fcm/send/dad2')")));
try { run("apiGateResult('Aviv','2694',15,15,[],[])"); } catch (e) { console.log('new world gate closed ok:', e.message); }
run('parentSummary()');
console.log('summary:', JSON.stringify(run("apiPushMessage('https://fcm.googleapis.com/fcm/send/dad2')")));
nextDay();
const tk = run("apiDashboard('Aviv','2694')").week.find(w => w.isToday);
console.log('next day task level:', tk.level, '(expect B1)');
run("apiSubmit('Aviv','2694','" + ctx.__day + "',9,10,null)");
console.log('first station in the new world:', jd().stations, '(expect 1) | parent card', JSON.stringify(run("apiParent('1234')").groups[0].girls.find(k => k.girl.name === 'Aviv').journey.name));
// Early gate: 20 stations with an average of 85%+. A new kid starts at B2; passing leads to the last world.
const liaPin = run("apiAdminAddKid('1234','Lia','15','" + famId + "','b2')").created.pin;
console.log('new kid journey before the level test:', jd('Lia', liaPin), '(expect null)');
run("apiSubmit('Lia','" + liaPin + "','" + ctx.__day + "','','','b2')");
nextDay();
let L2 = jd('Lia', liaPin);
for (let k = 0; k < 20; k++) {
  run("apiSubmit('Lia','" + liaPin + "','" + ctx.__day + "',9,10,null)");
  L2 = jd('Lia', liaPin);
  if (L2.stations === 19) console.log('lia station 19:', L2.gate.state, '(expect locked)');
  if (k < 19) nextDay();
}
console.log('lia station 20:', L2.gate.state, '(expect open, early) | avg', L2.avg, '| world', L2.name);
L2 = run("apiGateResult('Lia','" + liaPin + "',12,15,[],[])").journey;
console.log('lia passed 12/15:', L2.label, L2.name, L2.gate.state, '(expect top) | next', L2.gate.next);
try { run("apiGateResult('Lia','" + liaPin + "',15,15,[],[])"); } catch (e) { console.log('no gate after the last world ok:', e.message); }
console.log('gates rows:', sheets.Gates.rows.slice(1).map(r => r.slice(1).join(' ')).join(' / '));

// ---- play together: Word Duel and Challenge ----
{ // a block, so these names do not clash with the sections above
nextDay();
pushStatus = () => 201;
const dpin = { Aviv: '2694', Ziv: '4821', Ron: '7356', Noa: noaPin };
const duel = (fn, who, ...args) => run(fn + '(' + [who, dpin[who]].concat(args).map(a => JSON.stringify(a)).join(',') + ')');
const fails = (label, f) => { try { f(); console.log('NOT REJECTED:', label); } catch (e) { console.log(label + ' ok:', e.message); } };
const track = (oks, step) => oks.map((o, i) => o + ':' + (i + 1) * step).join(',');
const zivDevice = 'https://fcm.googleapis.com/fcm/send/abc';
const gamesRows = who => sheets.Games.rows.filter(r => r[1] === who && r[3] === 'duel');
let H = duel('apiDuelHome', 'Aviv');
console.log('duel home:', H.friends.map(f => f.name + ':' + f.level + (f.online ? ':online' : '') + (f.ready ? '' : ':new') + (f.pet ? ':' + f.pet.id : '')).join(' '), '| incoming', H.incoming.length, '| helper', H.helper);
console.log('dashboard carries duels:', !!run("apiDashboard('Aviv','2694')").duels, '| parent view does not:', run("apiParent('1234')").groups[0].girls.every(k => k.duels === undefined));
fails('self invite', () => duel('apiDuelInvite', 'Aviv', 'Aviv', 'live'));
fails('unknown player', () => duel('apiDuelInvite', 'Aviv', 'Nobody', 'live'));
const cross = duel('apiDuelInvite', 'Aviv', 'Noa', 'live');
console.log('invite across groups by name:', cross.state, cross.guest.name, '| Noa in the list with her group:', JSON.stringify(H.friends.filter(f => f.name === 'Noa').map(f => f.group)), '| own group has no label:', H.friends.filter(f => f.name === 'Ziv')[0].group === '');
duel('apiDuelCancel', 'Aviv', cross.code);
fails('bad mode', () => duel('apiDuelInvite', 'Aviv', 'Ziv', 'chess'));
const gilPin = run("apiAdminAddKid('1234','Gil','9','" + famId + "','a1')").created.pin;
fails('kid before the level test', () => duel('apiDuelInvite', 'Aviv', 'Gil', 'live'));
fails('level-test kid cannot play', () => run("apiDuelHome('Gil','" + gilPin + "')"));

// 1. A live duel from invite to result.
pushLog.length = 0;
let V = duel('apiDuelInvite', 'Aviv', 'Ziv', 'live');
console.log('invite:', /^[A-HJ-NP-Z]{4}$/.test(V.code), V.state, V.mode, V.role, '| expires in', Math.round((V.expires - V.now) / 60000), 'min | push', pushLog.length, JSON.stringify(run("apiPushMessage('" + zivDevice + "')")));
H = duel('apiDuelHome', 'Ziv');
console.log('Ziv sees:', H.incoming.map(x => x.code === V.code && x.host.name + ' ' + x.host.label).join(), '| Aviv waiting:', duel('apiDuelHome', 'Aviv').waiting.length);
fails('a stranger polls', () => duel('apiDuelPoll', 'Ron', V.code, null));
fails('bad code', () => duel('apiDuelJoin', 'Ziv', 'AB'));
fails('no such duel', () => duel('apiDuelJoin', 'Ziv', 'QQQQ'));
let J = duel('apiDuelJoin', 'Ziv', V.code.toLowerCase());
console.log('joined:', J.state, '| starts in', J.start - J.now, 'ms | guest', J.guest.name, J.guest.label, '| seed', J.seed === V.seed);
let P = duel('apiDuelPoll', 'Aviv', V.code, { n: 3, s: 2, ms: 20000, f: false, r: 1, rt: 111 });
console.log('Aviv polls before Ziv played:', JSON.stringify(P.them), P.themOnline);
P = duel('apiDuelPoll', 'Ziv', V.code, { n: 2, s: 2, ms: 15000, r: 9, rt: 'x' });
console.log('Ziv sees Aviv:', JSON.stringify(P.them), '| Aviv sees Ziv:', JSON.stringify(duel('apiDuelPoll', 'Aviv', V.code, null).them));
console.log('tracks hidden while playing:', P.host.track === undefined && P.guest.track === undefined);
fails('result with 6 answers', () => duel('apiDuelFinish', 'Aviv', V.code, { correct: 5, total: 6, ms: 1, track: track([1, 1, 1, 1, 1, 0], 9) }));
fails('result whose score does not match its track', () => duel('apiDuelFinish', 'Aviv', V.code, { correct: 6, total: 7, ms: 1, track: track([1, 1, 0, 1, 1, 0, 1], 9) }));
let F1 = duel('apiDuelFinish', 'Aviv', V.code, { correct: 5, total: 7, ms: 61000, track: track([1, 1, 0, 1, 1, 0, 1], 8700), missed: ['m:b1:cancel', 's:b1:2'], right: ['l:b1:0'] });
console.log('Aviv finished:', F1.state, '| xp', F1.xp, '(expect 20) | dash pet xp', F1.dash.pet && F1.dash.pet.xp, '| rounds today', F1.dash.games.todayRounds);
fails('finish twice', () => duel('apiDuelFinish', 'Aviv', V.code, { correct: 5, total: 7, ms: 61000, track: track([1, 1, 0, 1, 1, 0, 1], 8700) }));
let F2 = duel('apiDuelFinish', 'Ziv', V.code, { correct: 6, total: 7, ms: 70000, track: track([1, 1, 1, 0, 1, 1, 1], 10000), missed: ['b:b2:3'], right: [] });
console.log('Ziv finished:', F2.state, '| winner', F2.winner, '| xp', F2.xp, '(expect 22) | both tracks', !!F2.host.track, !!F2.guest.track);
console.log('duel rows:', gamesRows('Aviv').map(r => r.slice(4, 9).join(' ')).join(' / '), '||', gamesRows('Ziv').map(r => r.slice(4, 9).join(' ')).join(' / '));
console.log('missed in review:', /m:b1:cancel\|1/.test((sheets.Review.rows.find(r => r[0] === 'Aviv') || [])[1]), /b:b2:3\|1/.test((sheets.Review.rows.find(r => r[0] === 'Ziv') || [])[1]));
console.log('results:', duel('apiDuelHome', 'Aviv').results.map(r => r.code + ' ' + r.host.score + ':' + r.guest.score + ' ' + r.winner).join());
fails('helper star before the end of another duel', () => duel('apiDuelHelped', 'Ziv', 'QQQQ', 'm:b1:cancel'));
let HS = duel('apiDuelHelped', 'Ziv', V.code, 'm:b1:cancel');
HS = duel('apiDuelHelped', 'Ziv', V.code, 'm:b1:cancel');
console.log('helper stars for Ziv:', HS.helper, '(expect 1) | in her home:', duel('apiDuelHome', 'Ziv').helper, '| Aviv:', duel('apiDuelHome', 'Aviv').helper);

// 2. Declined, then sent as a challenge; the guest plays it later against the ghost.
V = duel('apiDuelInvite', 'Ron', 'Aviv', 'live');
let R = duel('apiDuelReply', 'Aviv', V.code, 'wait');
console.log('give me 5 minutes:', R.reply, '| expires in', Math.round((R.expires - R.now) / 60000), 'min (expect 10)');
R = duel('apiDuelReply', 'Aviv', V.code, 'no');
console.log('declined:', R.state, '| host sees', duel('apiDuelPoll', 'Ron', V.code, null).state);
console.log('changed her mind (joins a declined invite):', duel('apiDuelJoin', 'Aviv', duel('apiDuelInvite', 'Ron', 'Aviv', 'live').code).state);
fails('the guest cannot turn it into a challenge', () => duel('apiDuelSolo', 'Aviv', V.code));
let S = duel('apiDuelSolo', 'Ron', V.code);
console.log('host plays first:', S.state, S.mode);
fails('join while the host is still playing', () => duel('apiDuelJoin', 'Aviv', V.code));
pushLog.length = 0;
const avivDevices = sheets.Push.rows.filter(r => r[0] === 'Aviv').length;
let C = duel('apiDuelFinish', 'Ron', V.code, { correct: 6, total: 7, ms: 48000, track: track([1, 1, 1, 1, 0, 1, 1], 6800), missed: ['s:b1:7'], right: [] });
console.log('challenge open:', C.state, '| expires in', Math.round((C.expires - C.now) / 3600000), 'h | pushes', pushLog.length, '(Aviv devices: ' + avivDevices + ')');
H = duel('apiDuelHome', 'Aviv');
const ch = H.challenges.find(x => x.code === V.code);
console.log('Aviv has a challenge:', !!ch, '| ghost track visible:', !!(ch && ch.host.track), '| Ron waiting list:', duel('apiDuelHome', 'Ron').waiting.map(x => x.state).join());
J = duel('apiDuelJoin', 'Aviv', V.code);
console.log('Aviv opens it:', J.state, J.role, J.mode);
pushLog.length = 0;
run("apiPushSubscribe('Ron','7356','https://fcm.googleapis.com/fcm/send/ron','Android',false)");
C = duel('apiDuelFinish', 'Aviv', V.code, { correct: 6, total: 7, ms: 52000, track: track([1, 1, 1, 0, 1, 1, 1], 7400), missed: ['l:b1:4'], right: [] });
console.log('challenge played:', C.state, '| winner', C.winner, '(expect Ron, faster) | push to Ron', JSON.stringify(run("apiPushMessage('https://fcm.googleapis.com/fcm/send/ron')")));

// 3. A code invite: a friend from another group joins; then her group switches it off.
V = duel('apiDuelInvite', 'Ziv', '', 'live');
console.log('code invite:', V.open, V.state, V.guest);
J = duel('apiDuelJoin', 'Noa', V.code);
console.log('Noa (other group) joined:', J.state, J.guest.name, J.guest.label, '| Noa sees host', J.host.name);
fails('a third kid joins a full duel', () => duel('apiDuelJoin', 'Ron', V.code));
const gRow = sheets.Groups.rows.findIndex(r => r[0] === gid), fCol = sheets.Groups.rows[0].indexOf('Friends');
sheets.Groups.rows[gRow][fCol] = 'no'; run('clearCache()');
V = duel('apiDuelInvite', 'Ziv', '', 'live');
fails('Friends switched off', () => duel('apiDuelJoin', 'Noa', V.code));
console.log('switched off: Noa hidden from Aviv:', !duel('apiDuelHome', 'Aviv').friends.some(f => f.name === 'Noa'), '| Noa sees only her group:', duel('apiDuelHome', 'Noa').friends.map(f => f.name).join());
fails('named invite into a switched-off group', () => duel('apiDuelInvite', 'Aviv', 'Noa', 'live'));
sheets.Groups.rows[gRow][fCol] = ''; run('clearCache()');
duel('apiDuelCancel', 'Ziv', V.code);
fails('join a cancelled invite', () => duel('apiDuelJoin', 'Noa', V.code));

// 4. Rematch tapped on both phones: the second invite joins the first.
V = duel('apiDuelInvite', 'Aviv', 'Ziv', 'live');
const W = duel('apiDuelInvite', 'Ziv', 'Aviv', 'live');
console.log('rematch joins the waiting invite:', W.code === V.code, W.state, W.role);

// 5. A partner who leaves: after the time limit the one who finished wins.
V = duel('apiDuelInvite', 'Aviv', 'Ron', 'live');
duel('apiDuelJoin', 'Ron', V.code);
duel('apiDuelFinish', 'Aviv', V.code, { correct: 3, total: 7, ms: 90000, track: track([1, 0, 1, 0, 1, 0, 0], 12000) });
console.log('before the time limit:', duel('apiDuelPoll', 'Aviv', V.code, null).state);
clockShift += 210000;
P = duel('apiDuelPoll', 'Aviv', V.code, null);
console.log('after the time limit:', P.state, '| winner', P.winner, '(expect Aviv) | Ron result', P.guest.score);

// 6. Expiry: an unanswered invite after 5 minutes (then sent as a challenge), a challenge after 24 hours.
V = duel('apiDuelInvite', 'Aviv', 'Ziv', 'live');
clockShift += 6 * 60000;
console.log('unanswered invite:', duel('apiDuelPoll', 'Aviv', V.code, null).state, '| Ziv incoming', duel('apiDuelHome', 'Ziv').incoming.filter(x => x.code === V.code).length);
fails('join an expired invite', () => duel('apiDuelJoin', 'Ziv', V.code));
console.log('sent as a challenge after expiry:', duel('apiDuelSolo', 'Aviv', V.code).state);
V = duel('apiDuelInvite', 'Ron', 'Ziv', 'challenge');
duel('apiDuelFinish', 'Ron', V.code, { correct: 4, total: 7, ms: 80000, track: track([1, 1, 0, 1, 0, 1, 0], 11000) });
clockShift += 25 * 3600000;
nextDay();
fails('play an expired challenge', () => duel('apiDuelJoin', 'Ziv', V.code));
console.log('expired challenge:', duel('apiDuelPoll', 'Ron', V.code, null).state, '| Ron kept his XP row:', gamesRows('Ron').length > 0);

// 7. The daily cap counts duels too.
for (let k = 0; k < 4; k++) {
  V = duel('apiDuelInvite', 'Aviv', 'Ziv', 'live');
  duel('apiDuelJoin', 'Ziv', V.code);
  duel('apiDuelFinish', 'Ziv', V.code, { correct: 1, total: 7, ms: 50000, track: track([1, 0, 0, 0, 0, 0, 0], 7000) });
  F1 = duel('apiDuelFinish', 'Aviv', V.code, { correct: 7, total: 7, ms: 40000, track: track([1, 1, 1, 1, 1, 1, 1], 5700) });
}
console.log('cap: Aviv today', F1.dash.games.todayXp, '(expect 60) | last duel xp', F1.xp, '| rounds today', F1.dash.games.todayRounds, '(expect 4, bonus rows not counted)');
run("apiParentPushSubscribe('1234','https://fcm.googleapis.com/fcm/send/dad3','Android',false)");
run('parentSummary()');
console.log('summary with duels:', JSON.stringify(run("apiPushMessage('https://fcm.googleapis.com/fcm/send/dad3')")));
console.log('duels tab:', sheets.Duels.rows.length - 1, 'rows | states', [...new Set(sheets.Duels.rows.slice(1).map(r => r[4]))].join(','));
}
