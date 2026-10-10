// Builds test/preview.html: Index.html with google.script.run mocked by simulated data.
// Serve the app folder (not test/) so the page can load ../docs/games.js and the pet art:
//   python -m http.server 8765   ->   http://localhost:8765/test/preview.html
// Aviv has a pet, some games and 30 stations (the gate is open: under 12/15 fails, 12+ passes);
// Ziv has no pet yet (adoption flow) and a few stations; Ron is new (level test first). Aviv may shop at Coco's
// (ShopEarly) with 900 extra coins; the mock grades a request roughly (the real rules: test/dev-server.js).
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
run("apiSetPet('Aviv','2694','turtle','Shelly')");
let x = '2026-10-09';
for (let k = 0; k < 30; k++) {
  ctx.__day = x;
  run("apiSubmit('Aviv','2694','" + x + "'," + [9, 8, 10, 6, 9, 7][k % 6] + ",10,null)");
  if (k === 0) run("apiSubmit('Ziv','4821','" + x + "','','','b1')");
  else if (k < 6 && k !== 2) run("apiSubmit('Ziv','4821','" + x + "',8,10,null)");
  x = run("addDays('" + x + "', 1)");
}
ctx.__day = x;
run("apiGameResult('Aviv','2694','match','a2',4,5,['m:a2:library'],[])");
run("apiGameResult('Aviv','2694','build','a2',5,5,[],[])");
const G = run("apiAdminAddGroup('1234','Cohen family','')");
const gid = G.created.link.split('g=')[1];
run("apiAdminAddKid('1234','Noa','13','" + gid + "','b1')");
const CREATED = run("apiAdminAddKid('1234','Maya','11','" + gid + "','a2')");
run("setSetting('ShopEarly', 'Aviv')");
run("appendRow('Bonus', { Timestamp: new Date(), Girl: 'Aviv', Date: '" + x + "', Kind: 'preview', XP: 900, Ref: 'preview' })");
global.DATA = { shop: run("apiShop('Aviv','2694')"), pub: run('apiPublic()'), dash: run("apiDashboard('Aviv','2694')"), ziv: run("apiDashboard('Ziv','4821')"),
  ron: run("apiDashboard('Ron','7356')"), parent: run("apiParent('1234')"), created: CREATED };
DATA.ronDone = run("apiSubmit('Ron','7356','" + DATA.ron.levelTest.date + "','','','b1')");
DATA.gateFail = run("apiGateResult('Aviv','2694',10,15,['m:b1:anxious','l:b1:0','s:b1:2','b:b1:4','m:b1:cancel'],[])");
ctx.__day = run("addDays('" + x + "', 3)");
DATA.gatePass = run("apiGateResult('Aviv','2694',13,15,['l:b1:3','s:b1:5'],[])");
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
    else if(fn==='apiShop')ok(D.shop);else if(fn==='apiWear'){D.dash.pet.wear=a[2];D.dash.pet.move=a[3];ok({wear:a[2],move:a[3]});}
    else if(fn==='apiShopBuy'){const it=D.shop.items.find(i=>i.id===a[2]);const w=a[4].map(x=>String(x).toLowerCase());const n=(w.includes('please')?1:0)+(/^(can|could|may)$/.test(w[0])&&w.includes('?')?1:0)+(w.includes('could')||w.includes('may')||w.includes("i'd like")?1:0)+(w[w.length-1]==='thank you!'?1:0);
      const pct=[0,5,10,12,15][n],paid=Math.round(it.price*(100-pct)/100);if(paid>D.shop.coins.balance){g({message:'You need '+(paid-D.shop.coins.balance)+' more coins for the '+it.name});return;}
      it.owned=true;D.shop.coins.balance-=paid;D.shop.coins.spent+=paid;if(it.place==='move')D.shop.move=it.id;else if(it.place!=='upgrade')D.shop.wear=D.shop.wear.filter(e=>{const o=D.shop.items.find(i=>i.id===e.split(':')[0]);return !o||o.place!==it.place;}).concat([a[3]&&it.colors&&a[3]!==it.colors[0]?it.id+':'+a[3]:it.id]);
      D.dash.pet.wear=D.shop.wear;D.dash.pet.move=D.shop.move;D.dash.coins=D.shop.coins.balance;ok(Object.assign({},D.shop,{bought:{id:it.id,name:it.name,paid,price:it.price,pct,n,sentence:a[4].join(' ')}}));}
    else if(fn==='apiGateResult'){D.dash=a[2]>=12?D.gatePass:D.gateFail;ok(D.dash);}
    else if(fn==='apiDashboard'&&a[0]==='Ziv')ok(D.ziv);else if(fn==='apiDashboard'&&a[0]==='Ron')ok(D.ron);else ok(D.dash);},350)}})}})};
}})}};</script>`;
fs.writeFileSync('test/preview.html', fs.readFileSync('src/Index.html', 'utf8').replace('<base target="_top">', mock));
console.log('ok');
