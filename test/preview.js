// Builds test/preview.html: Index.html with google.script.run mocked by simulated data.
const fs = require('fs');
process.argv.push('--quiet');
const src = fs.readFileSync('test/sim.js', 'utf8').split('const pins')[0];
eval(src + `
ctx.__day = '2026-10-08';
run('apiPublic()');
const PINS = { Ziv: '4821', Ron: '7356', Aviv: '2694' };
sheets.Girls.rows.slice(1).forEach(r => { r[2] = PINS[r[0]]; });
sheets.Settings.rows.forEach(r => { if (r[0] === 'AdminPIN') r[1] = '1234'; });
run('clearCache()');
run("apiSubmit('Aviv','2694','2026-10-08','','','a2')");
for (const x of ['2026-10-09','2026-10-10','2026-10-11','2026-10-12','2026-10-14']) { ctx.__day = x;
  run("apiSubmit('Aviv','2694','" + x + "'," + (x.endsWith('2') ? 6 : 9) + ",10,null)");
  if (x !== '2026-10-11') run("apiSubmit('Ziv','4821','" + x + "',8,10,null)"); }
ctx.__day = '2026-10-15';
const G = run("apiAdminAddGroup('1234','Cohen family','')");
const gid = G.created.link.split('g=')[1];
run("apiAdminAddKid('1234','Noa','13','" + gid + "','b1')");
const CREATED = run("apiAdminAddKid('1234','Maya','11','" + gid + "','a2')");
global.DATA = { pub: run('apiPublic()'), dash: run("apiDashboard('Aviv','2694')"), parent: run("apiParent('1234')"), created: CREATED };
`);
const mock = `<script>window.google={script:{run:new Proxy({},{get(t,k){
  let ok=()=>{},fail=()=>{};const D=${JSON.stringify(DATA)};
  const r={withSuccessHandler(f){ok=f;return r},withFailureHandler(f){fail=f;return r}};
  if(k==='withSuccessHandler')return f=>{ok=f;return new Proxy({},{get(_,kk){if(kk==='withFailureHandler')return g=>new Proxy({},{get(_,fn){return (...a)=>setTimeout(()=>{
    if(fn==='apiPublic')ok(D.pub);else if(fn==='apiParent')ok(D.parent);else if(fn.indexOf('apiAdmin')===0)ok(D.created);else if(fn==='apiSubmit')ok(Object.assign({},D.dash,{justEarned:18}));else ok(D.dash);},150)}})}})};
}})}};</script>`;
fs.writeFileSync('test/preview.html', fs.readFileSync('src/Index.html', 'utf8').replace('<base target="_top">', mock));
console.log('ok');
