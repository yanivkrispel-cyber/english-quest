// Builds test/preview.html: Index.html with google.script.run mocked by simulated data.
// Serve the app folder (not test/) so the page can load ../docs/games.js and the pet art:
//   python -m http.server 8765   ->   http://localhost:8765/test/preview.html
// Aviv has a pet and some games; Ziv has no pet yet (adoption flow); Ron is new (level test first).
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
  if (x === '2026-10-09') run("apiSubmit('Ziv','4821','2026-10-09','','','b1')");
  else if (x !== '2026-10-11') run("apiSubmit('Ziv','4821','" + x + "',8,10,null)"); }
ctx.__day = '2026-10-15';
run("apiSetPet('Aviv','2694','turtle','Shelly')");
run("apiGameResult('Aviv','2694','match','a2',4,5,['m:a2:library'],[])");
run("apiGameResult('Aviv','2694','build','a2',5,5,[],[])");
const G = run("apiAdminAddGroup('1234','Cohen family','')");
const gid = G.created.link.split('g=')[1];
run("apiAdminAddKid('1234','Noa','13','" + gid + "','b1')");
const CREATED = run("apiAdminAddKid('1234','Maya','11','" + gid + "','a2')");
global.DATA = { pub: run('apiPublic()'), dash: run("apiDashboard('Aviv','2694')"), ziv: run("apiDashboard('Ziv','4821')"),
  ron: run("apiDashboard('Ron','7356')"), parent: run("apiParent('1234')"), created: CREATED };
DATA.ronDone = run("apiSubmit('Ron','7356','" + DATA.ron.levelTest.date + "','','','b1')");
`);
const mock = `<script>window.EQ_ASSETS='../docs/';window.google={script:{run:new Proxy({},{get(t,k){
  let ok=()=>{},fail=()=>{};const D=${JSON.stringify(DATA)};
  const grow=(d,xp)=>{d=JSON.parse(JSON.stringify(d));if(d.pet){d.pet.xp+=xp;}d.games.todayXp=Math.min(60,d.games.todayXp+xp);d.games.todayRounds++;d.gameXp=xp;return d;};
  const r={withSuccessHandler(f){ok=f;return r},withFailureHandler(f){fail=f;return r}};
  if(k==='withSuccessHandler')return f=>{ok=f;return new Proxy({},{get(_,kk){if(kk==='withFailureHandler')return g=>new Proxy({},{get(_,fn){return (...a)=>setTimeout(()=>{
    if(fn==='apiPublic')ok(D.pub);else if(fn==='apiParent')ok(D.parent);else if(fn.indexOf('apiParentPush')===0)ok({instant:true,sent:1});
    else if(fn.indexOf('apiAdmin')===0)ok(D.created);else if(fn==='apiSubmit'&&a[0]==='Ron'){D.ron=D.ronDone;ok(D.ronDone);}else if(fn==='apiSubmit')ok(Object.assign({},D.dash,{justEarned:18}));
    else if(fn==='apiSetPet'){const b=a[0]==='Ziv'?D.ziv:D.dash;D[a[0]==='Ziv'?'ziv':'dash']=Object.assign({},b,{pet:{id:a[2],name:a[3],xp:b.pet?b.pet.xp:0,stage:1,from:0,to:150}});ok(D[a[0]==='Ziv'?'ziv':'dash']);}
    else if(fn==='apiGameResult'){const key=a[0]==='Ziv'?'ziv':'dash';D[key]=grow(D[key],a[4]*2+(a[4]===a[5]?5:0));ok(D[key]);}
    else if(fn==='apiDashboard'&&a[0]==='Ziv')ok(D.ziv);else if(fn==='apiDashboard'&&a[0]==='Ron')ok(D.ron);else ok(D.dash);},350)}})}})};
}})}};</script>`;
fs.writeFileSync('test/preview.html', fs.readFileSync('src/Index.html', 'utf8').replace('<base target="_top">', mock));
console.log('ok');
