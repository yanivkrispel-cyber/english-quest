// Coco's Nest, the arcade plan stage C (specs/nest.md, "Coco's arcade"): the playground gets two shelves, Coco's games and
// the learning games. Coco's games are new games on the words the kid has met; each lives in docs/nest/games/<game>.js and
// loads only when it is played. The parent sets the minutes a day (dash.nest.arcadeMin, 15 by default, 0 = no limit); the
// phone counts them, and when they are used up Coco sleeps on the shelf until tomorrow (a game that is on goes on to its end).
// Loaded after play.js, in the app's global scope: every top-level name starts with nk/NK (test/nest-check.js).

// [game, the youngest age, the icon while the cover is loading]
const NK_ARCADE = [['parrot', 2, 'bird'], ['peep', 2, 'eye'], ['nono', 2, 'hand-palm'], ['slice', 4, 'knife'], ['cards', 4, 'cards'],
  ['house', 2, 'house'], ['where', 3, 'binoculars'], ['kitchen', 4, 'cooking-pot'], ['ladders', 4, 'ladder']];
const NK_ARC_NAME = { parrot: 'Talking Coco', peep: 'Pop-up Pals', nono: 'No, Coco!', slice: 'Coco Slice', cards: 'Color Cards',
  house: "Coco's House", where: "Where's Coco?", kitchen: "Coco's Kitchen", ladders: 'Coco Ladders' };
Object.assign(NK_CUE, { parrot: ['microphone', 'mic'], peep: ['hand-pointing', ''], nono: ['hand-pointing', ''], slice: ['hand-swipe-right', ''], cards: ['cards', ''],
  house: ['hand-pointing', ''], where: ['magnifying-glass', ''], kitchen: ['hand-grabbing', 'drag'], ladders: ['hand-pointing', ''] });
const NKR = { tab: 'coco', tick: 0, loads: {} };
const nkArcOn = () => !!(dash && dash.nest && dash.nest.arcade);
const nkArcKey = () => 'eq_nest_arc_' + nkKid();
// Today on this phone (local time): the minutes start again every morning.
const nkArcDay = () => { const d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); };

// ---------- Minutes a day ----------
function nkArcUsed(){
  const m = store.get(nkArcKey()) || {};
  return m.d === nkArcDay() ? m.s || 0 : 0;
}
function nkArcLeft(){
  const min = dash && dash.nest && dash.nest.arcadeMin != null ? Number(dash.nest.arcadeMin) : 15;
  return min > 0 ? min * 60 - nkArcUsed() : Infinity;
}
// Every 5 s of a Coco game on a visible screen counts; it stops by itself when the game is over.
function nkArcCount(){
  clearInterval(NKR.tick);
  NKR.tick = setInterval(() => {
    if (!NE || !NE.arcade) { clearInterval(NKR.tick); return; }
    if (document.hidden || NE.preview) return;
    store.set(nkArcKey(), { d: nkArcDay(), s: nkArcUsed() + 5 });
  }, 5000);
}

// ---------- Loading a game ----------
function nkArcLoad(g){
  if (NK[g]) return Promise.resolve();
  return NKR.loads[g] = NKR.loads[g] || new Promise((res, rej) => {
    const s = document.createElement('script');
    const t = setTimeout(() => { s.remove(); delete NKR.loads[g]; rej(new Error('Could not load. Check the connection and try again.')); }, 15000);
    s.src = ASSETS + 'nest/games/' + g + '.js?v=' + NEST_V;
    s.onload = () => { clearTimeout(t); NK[g] ? res() : rej(new Error('The game is not ready yet.')); };
    s.onerror = () => { clearTimeout(t); s.remove(); delete NKR.loads[g]; rej(new Error('Could not load. Check the connection and try again.')); };
    document.head.appendChild(s);
  });
}

// ---------- What a game plays on ----------
// The words of every unit met (ages 2 and 3: the core words), with pictures; null when the game has nothing to play on.
function nkArcWords(units, core){
  const seen = new Set(), out = [];
  units.forEach(u => nestWordsOf(u, core).forEach(w => { if (!seen.has(w.id)) { seen.add(w.id); out.push(Object.assign({ unit: u.id, theme: u.theme }, w)); } }));
  return out;
}
const NK_CARD_COLORS = ['red', 'blue', 'yellow', 'green', 'orange', 'purple'];
// The places a kid's units open (Coco's House rooms; Where's Coco? plays in one of them): the living room always.
function nkArcPlaces(words){
  const out = ['home'];
  words.forEach(w => { const p = NK_THEME_PLACE[w.theme]; if (p && !out.includes(p)) out.push(p); });
  return out;
}
function nkArcStep(g, words, age){
  const pics = words.filter(w => w.pic), food = pics.filter(w => NK_FOOD.has(w.id));
  if (g === 'house') {
    const rooms = nkArcPlaces(pics).map(place => {
      const own = pics.filter(w => (NK_THEME_PLACE[w.theme] || 'home') === place && !NK_FOOD.has(w.id) || place === 'kitchen' && NK_FOOD.has(w.id));
      return { place, things: shuffle(own.length >= 2 ? own : pics).slice(0, 5) };
    });
    return pics.length >= 2 ? { rooms } : null;
  }
  if (g === 'where') {
    if (pics.length < 5) return null;
    const items = shuffle(pics).slice(0, age <= 4 ? 7 : 9);
    return { place: nkPick(nkArcPlaces(pics)), items, lost: items.slice(0, age <= 4 ? 2 : 3) };
  }
  if (g === 'kitchen') {
    const O = EQ_NEST.orders || {}, menu = food.filter(w => O[w.id]);
    if (menu.length < 2) return null;
    const who = pics.filter(w => ['animals', 'family', 'people'].includes(w.theme) && w.id !== 'parrot');
    const orders = Array.from({ length: 5 }, (_, i) => {
      const w = nkPick(menu), most = age >= 6 ? Math.min(3, O[w.id].length) : 1;
      return { w, n: 1 + Math.floor(Math.random() * most), who: i === 2 && dash.pet ? null : nkPick(who.length ? who : [nkWord('baby') || menu[0]]) };
    });
    return { foods: shuffle(menu).slice(0, 5), orders: orders.map(o => o) };
  }
  if (g === 'ladders') return pics.length >= 4 ? { squares: nkRounds(pics, 12) } : null;
  if (g === 'parrot') return { says: shuffle(pics).slice(0, 8), foods: shuffle(food).slice(0, 4) };
  if (g === 'peep') return pics.length >= 2 ? { targets: nkRounds(pics, age <= 3 ? 4 : 6), pool: pics } : null;
  if (g === 'nono') return pics.length >= 2 ? { rounds: nkRounds(pics, age <= 3 ? 5 : 6).map((w, i) => ({ w, wrong: i === 0 || Math.random() < .6 ? nkPick(pics.filter(x => x.id !== w.id)) : null })) } : null;
  if (g === 'slice') return food.length >= 2 ? { targets: shuffle(food).slice(0, 3), pool: food } : null;
  if (g === 'cards') {
    const cols = NK_CARD_COLORS.filter(c => words.some(w => w.id === c)), nums = ['one', 'two', 'three', 'four', 'five'].filter(n => words.some(w => w.id === n));
    return cols.length >= 3 ? { colors: cols.slice(0, 4), nums: nums.length >= 3 ? nums.length : 0, hand: age >= 6 ? 5 : 4 } : null;
  }
  return null;
}
// The arcade games this kid can play now (their age, and something to play on).
function nkArcGames(){
  const known = nkKnownUnits(), age = dash.nest.age;
  if (!known.length) return [];
  const words = nkArcWords(known, age <= 3);
  return NK_ARCADE.filter(([g, from]) => age >= from && nkArcStep(g, words, age));
}

// ---------- A game ----------
// A one-step session (then the end screen); nothing is saved, like the playground.
function nkArcSession(g, unitId, preview){
  const n = dash.nest, known = unitId ? [nestUnit(unitId)].filter(Boolean) : nkKnownUnits();
  if (!known.length) return null;
  const last = known[known.length - 1];
  NE = { u: last, dayId: last.id, day: 'r', si: 0, correct: 0, total: 0, res: {}, t0: Date.now(), review: true, tries: 0, heard: false,
    preview: !!preview, play: g, arcade: true, age: n.age, k: n.choices, words: n.words, tok: 0 };
  const x = nkArcStep(g, nkArcWords(known, n.age <= 3), n.age);
  if (!x) { NE = null; return null; }
  NE.steps = [Object.assign({ t: g, first: true }, x), { t: 'done' }];
  if (NK[g] && NK[g].demo && nkShouldDemo(g)) NE.steps[0].demo = true;
  return NE;
}
async function nkArcStart(g, unitId, preview){
  if (!preview && nkArcLeft() <= 0) return nkArcade();
  app.innerHTML = WAIT_HTML;
  waitArm();
  try { await nkArcLoad(g); }
  catch(e){
    app.innerHTML = `<div class="glass panel" style="text-align:center;display:grid;gap:12px">${esc(e.message)}<button class="btn btn-primary btn-block" id="nkagain">${icon('arrows-clockwise')} Try again</button></div>`;
    document.getElementById('nkagain').onclick = () => nkArcStart(g, unitId, preview);
    return;
  }
  if (!nkArcSession(g, unitId, preview)) return nkArcade();
  window.scrollTo(0, 0);
  nkArcCount();
  nestRender(true);
}

// ---------- The arcade screen ----------
// A painted fairground; two shelves (Coco's games, learning games) by two big buttons; every game a clay cover.
function nkArcade(){
  const coco = nkArcGames(), learn = nkPlayGames(), L = Object.fromEntries(NG_GAMES);
  if (!coco.length && !learn.length) return renderDash();
  const tab = coco.length ? (learn.length ? NKR.tab : 'coco') : 'learn', left = nkArcLeft(), asleep = tab === 'coco' && left <= 0;
  const cover = g => `<img class="nka-pic" src="${ASSETS}nest/arcade/${g}.webp?v=${NEST_V}" alt="" draggable="false" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'nka-ic',innerHTML:icon('${(NK_ARCADE.find(x => x[0] === g) || [])[2] || 'star'}','duotone')}))">`;
  const cards = tab === 'coco'
    ? coco.map(([g]) => `<button class="nka-card${asleep ? ' asleep' : ''}" data-nka="${g}" aria-label="${esc(NK_ARC_NAME[g])}">${cover(g)}<span class="nka-name">${esc(NK_ARC_NAME[g])}</span></button>`).join('')
    : learn.map(([g, , ic, t]) => `<button class="nka-card small" data-nkgame="${g}" aria-label="${esc(L[g])}"><span class="tile ${t}">${icon(ic, 'duotone')}</span><span class="nka-name">${esc(L[g])}</span></button>`).join('');
  app.innerHTML = `<div class="nka" id="nka" style="background-image:url('${ASSETS}nest/arcade/room.webp?v=${NEST_V}')">
    <div class="nka-top">
      <button class="btn btn-glass icon-btn" id="nkaback" aria-label="Home">${icon('house', 'duotone')}</button>
      ${coco.length && learn.length ? `<div class="nka-tabs glass">
        <button class="nka-tab${tab === 'coco' ? ' on' : ''}" data-nkatab="coco" aria-label="Coco's games"><img src="${cocoSrc('happy')}" alt="" draggable="false"></button>
        <button class="nka-tab${tab === 'learn' ? ' on' : ''}" data-nkatab="learn" aria-label="Learning games">${icon('puzzle-piece', 'duotone')}</button></div>` : '<span></span>'}
      <img class="nka-coco" id="nkacoco" src="${nkPoseSrc(asleep ? 'sleep' : 'wave')}" alt="Coco" draggable="false">
    </div>
    <div class="nka-shelf ${tab}${asleep ? ' asleep' : ''}">${cards}</div>
  </div>`;
  document.getElementById('nkaback').onclick = () => { nestStopAudio(); renderDash(); };
  app.querySelectorAll('[data-nkatab]').forEach(b => b.onclick = () => { NKR.tab = b.dataset.nkatab; nkSfx('flip'); nkArcade(); });
  app.querySelectorAll('[data-nka]').forEach(b => b.onclick = () => {
    if (asleep) { nkMove(document.getElementById('nkacoco'), 'giggle'); nestPlay(['en-sleepy']); return; }
    nkSfx('pop'); nkArcStart(b.dataset.nka);
  });
  app.querySelectorAll('[data-nkgame]').forEach(b => b.onclick = () => nkPlayStart(b.dataset.nkgame));
  const c = document.getElementById('nkacoco');
  c.onclick = () => { nkMove(c, asleep ? 'giggle' : 'spin'); if (!asleep) nkSfx('boing'); };
  if (!nkCalm()) app.querySelectorAll('.nka-card').forEach((b, i) => b.animate([{ opacity: 0, transform: 'translateY(24px) scale(.9)' }, { opacity: 1, transform: 'none' }], { duration: 420, delay: 60 * i, easing: 'cubic-bezier(.2,1.4,.4,1)', fill: 'backwards' }));
  nestPlay([asleep ? 'en-sleepy' : tab === 'coco' ? 'en-arcade' : 'en-hi']);
}

// ---------- Look (the design tokens of src/Index.html: glass cards, the primary pill, clay art) ----------
(function nkArcStyle(){
  const st = document.createElement('style');
  st.textContent = `
.nka{position:fixed;inset:0;display:grid;grid-template-rows:auto 1fr;gap:10px;padding:calc(env(safe-area-inset-top,0px) + 14px) 16px calc(env(safe-area-inset-bottom,0px) + 18px);
  background:#f3ead9 center / cover no-repeat;overflow:hidden;container-type:size}
.nka-top{display:flex;align-items:center;justify-content:space-between;gap:10px}
.nka-tabs{display:flex;gap:6px;padding:6px;border-radius:999px}
.nka-tab{width:66px;height:54px;border-radius:999px;border:0;background:transparent;display:grid;place-items:center;font-size:30px;color:var(--primary);cursor:pointer;transition:background .2s;-webkit-tap-highlight-color:transparent}
.nka-tab.on{background:linear-gradient(145deg,var(--primary-2),var(--primary));color:#fff;box-shadow:0 8px 18px rgba(99,102,241,.35)}
.nka-tab img{width:46px;height:46px;object-fit:contain}
.nka-coco{width:82px;height:82px;object-fit:contain;filter:drop-shadow(0 8px 10px rgba(40,30,60,.25));cursor:pointer}
.nka-shelf{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-content:center;min-height:0;width:min(100%,56cqh);margin:0 auto}
.nka-shelf.learn{grid-template-columns:repeat(3,1fr);gap:10px;width:min(100%,58cqh)}
.nka-card{position:relative;aspect-ratio:1;border-radius:28px;border:1px solid var(--stroke);background:var(--glass);backdrop-filter:blur(18px) saturate(160%);-webkit-backdrop-filter:blur(18px) saturate(160%);
  box-shadow:var(--shadow),var(--inner);display:grid;grid-template-rows:1fr auto;place-items:center;padding:8px 6px 10px;cursor:pointer;-webkit-tap-highlight-color:transparent;transition:transform .15s}
.nka-card:active{transform:scale(.95)}
.nka-shelf.coco .nka-card:last-child:nth-child(odd){grid-column:1 / -1;width:calc(50% - 7px);justify-self:center}
.nka-pic{width:100%;height:100%;min-height:0;object-fit:contain;filter:drop-shadow(0 6px 8px rgba(40,30,60,.2))}
.nka-ic{font-size:52px;color:var(--primary)}
.nka-card .tile{width:58%;height:auto;aspect-ratio:1;border-radius:22px;font-size:30px}
.nka-name{font-weight:800;font-size:14px;color:var(--ink);line-height:1.1;text-align:center}
.nka-card.small .nka-name{font-size:12px}
.nka-card.asleep{filter:grayscale(.55);opacity:.72}

@media (prefers-reduced-motion: reduce){.nka-card{transition:none}}
`;
  document.head.appendChild(st);
})();
