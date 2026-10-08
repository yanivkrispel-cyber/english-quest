// Local simulation of Code.js with in-memory Sheets mocks.
const fs = require('fs'), vm = require('vm');
const sheets = {};
function mkSheet(name){ const rows = []; return sheets[name] = {
  name, rows,
  getLastRow: () => rows.length, getLastColumn: () => Math.max(0, ...rows.map(r => r.length)),
  getRange(a, b, nr, nc){ if (typeof a === 'string') return { setNumberFormat(){ return this; } };
    return { setValues(v){ v.forEach((r,i)=>{ rows[a-1+i] = rows[a-1+i]||[]; r.forEach((x,j)=> rows[a-1+i][b-1+j]=x); }); return this; },
      setFontWeight(){ return this; }, setValue(x){ rows[a-1] = rows[a-1] || []; rows[a-1][b-1] = x; return this; },
      getValues(){ const w = Math.max(...rows.map(r=>r.length)); return rows.slice(a-1, a-1+nr).map(r => Array.from({length: nc||w}, (_,j)=> r[b-1+j] ?? '')); } }; },
  getDataRange(){ return this.getRange(1, 1, rows.length, this.getLastColumn()); },
  appendRow(r){ rows.push(r.slice()); }, setFrozenRows(){} }; }
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
  console, Math, JSON, Date, Number, String, Object, Array,
  SpreadsheetApp: { getActive: () => ({ getSheetByName: n => sheets[n] || null, insertSheet: mkSheet, getSheets: () => Object.values(sheets),
    deleteSheet(){}, setSpreadsheetTimeZone(){}, getUrl: () => 'SHEET' }) },
  Utilities: { formatDate: d => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jerusalem' }).format(d) },
  LockService: { getScriptLock: () => ({ waitLock(){}, releaseLock(){} }) },
  PropertiesService: { getScriptProperties: () => ({ p: {}, getProperty(k){ return this.p[k] || null; }, setProperty(k,v){ this.p[k]=v; } }) },
  ScriptApp: { getProjectTriggers: () => [], newTrigger: () => { const t = { timeBased: () => t, everyDays: () => t, atHour: () => t, inTimezone: () => t, onWeekDay: () => t, create: () => t }; return t; },
    WeekDay: {}, getService: () => ({ getUrl: () => 'APPURL' }) },
  CacheService: { getScriptCache: () => cacheMock },
  ContentService: { MimeType: { JSON: 'json' }, createTextOutput: t => ({ setMimeType() { return this; }, getContent: () => t }) },
  MailApp: { sendEmail: m => console.log('MAIL', m.to, m.subject) },
  Session: { getEffectiveUser: () => ({ getEmail: () => 'dad@x' }) },
};
const props = ctx.PropertiesService.getScriptProperties(); ctx.PropertiesService.getScriptProperties = () => props;
vm.createContext(ctx);
for (const f of ['Catalog.js', 'Code.js']) vm.runInContext(fs.readFileSync('src/' + f, 'utf8'), ctx);
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
