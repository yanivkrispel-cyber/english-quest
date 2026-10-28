// The living home of Coco's Nest (specs/nest-home.md, "The scene"): one full-screen picture that never scrolls. The sky
// follows the clock and the season, Coco lives in his nest on the clay tree, the lesson egg is today's lesson, the garden
// grows a flower a day played, the pet corner, and everything answers a touch. Runs in the app's global scope: every
// top-level name starts with nk (node test/nest-check.js). The CSS is the .nkh-* block in src/Index.html.

// The state of the open home (one at a time). seen: kids greeted since the app opened (the arrival plays once per open).
const NKH = { root: null, d: null, beat: 0, timers: [], seen: {}, echo: null, music: null, busy: false, mood: 'happy', foodT: 0 };
// Scene words with a recorded clip (docs/nest/audio/w-*.mp3).
const NKH_SAID = ['sun', 'moon', 'star', 'cloud', 'tree', 'flower', 'balloon', 'egg', 'duck', 'leaf', 'snow', 'rainbow', 'kite'];
// The six pets a new kid chooses from (the same as renderNest).
const nkhAdoptIds = () => PETS.filter(p => PET_ART[p[0]]).slice(0, 6).map(p => p[0]);
const nkhCalm = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
const nkhPic = name => esc(nestPicSrc(name));
const nkhKid = () => (session && session.name) || (NKH.d && NKH.d.girl && NKH.d.girl.name) || '';

// The clock: day 6 to 17, evening 17 to 19, night after. window.nkClock = { h, m } (test/tablet.html) sets the hour and month.
function nkhClock(){
  const now = new Date(), o = window.nkClock || {};
  const h = o.h != null ? o.h : now.getHours(), m = o.m != null ? o.m : now.getMonth() + 1;
  const phase = h >= 6 && h < 17 ? 'day' : h >= 17 && h < 19 ? 'evening' : 'night';
  const season = m === 12 || m <= 2 ? 'winter' : m <= 5 ? 'spring' : m <= 8 ? 'summer' : 'autumn';
  return { h, phase, season, night: phase === 'night' };
}

// ---------- Sounds: soft Web Audio, no files ----------
function nkhCtx(){
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  } catch(e){ return null; }
}
// A soft rising blip for a touch, pitched per object.
function nkhBlip(hz){
  if (!soundOn()) return;
  const ctx = nkhCtx(); if (!ctx) return;
  try {
    const o = ctx.createOscillator(), g = ctx.createGain(), t = ctx.currentTime + .01;
    o.type = 'sine'; o.frequency.setValueAtTime(hz, t); o.frequency.exponentialRampToValueAtTime(hz * 1.5, t + .12);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.16, t + .02); g.gain.exponentialRampToValueAtTime(.0001, t + .35);
    o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + .4);
  } catch(e){}
}
// The pet's giggle: quick wobbling notes up and down.
function nkhGiggle(sleepy){
  if (!soundOn()) return;
  const ctx = nkhCtx(); if (!ctx) return;
  try {
    const t0 = ctx.currentTime + .02, base = sleepy ? 330 : 820;
    [0, 1, 2, 3, 4, 5].forEach(i => {
      const o = ctx.createOscillator(), g = ctx.createGain(), t = t0 + i * (sleepy ? .16 : .085), f = base * (1 + (i % 2 ? .18 : 0) + (sleepy ? -i * .03 : i * .04));
      o.type = 'sine'; o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * (sleepy ? .9 : 1.25), t + .07);
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(sleepy ? .05 : .09, t + .015); g.gain.exponentialRampToValueAtTime(.0001, t + .11);
      o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + .13);
    });
  } catch(e){}
}
// A bird far away: two or three quick high sweeps.
function nkhBird(out){
  const ctx = nkhCtx(); if (!ctx || !out) return;
  try {
    const t0 = ctx.currentTime + .05, n = 2 + Math.floor(Math.random() * 2), f0 = 2300 + Math.random() * 900;
    for (let i = 0; i < n; i++) {
      const o = ctx.createOscillator(), g = ctx.createGain(), t = t0 + i * .13;
      o.type = 'sine'; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f0 * 1.45, t + .06); o.frequency.exponentialRampToValueAtTime(f0 * 1.1, t + .1);
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.05, t + .015); g.gain.exponentialRampToValueAtTime(.0001, t + .11);
      o.connect(g); g.connect(out); o.start(t); o.stop(t + .12);
    }
  } catch(e){}
}

// ---------- The music: a soft generated tune (C, A minor, F, G), slower and lower at night, and birds by day ----------
const NKH_ROOTS = [130.81, 110, 87.31, 98];
const NKH_PENTA = [261.63, 293.66, 329.63, 392, 440, 523.25, 587.33, 659.25];
const nkhMusicOn = () => store.get('eq_nkh_music') !== 'off';
function nkhMusicStart(){
  if (NKH.music || !NKH.root || !nkhMusicOn() || document.hidden || NKH.echo) return;
  const ctx = nkhCtx();
  if (!ctx || ctx.state !== 'running') return;
  const out = ctx.createGain();
  out.gain.setValueAtTime(.0001, ctx.currentTime);
  out.gain.exponentialRampToValueAtTime(.7, ctx.currentTime + 1.5);
  out.connect(ctx.destination);
  NKH.music = { out, next: ctx.currentTime + .2, step: 0, note: 3, bird: ctx.currentTime + 4 + Math.random() * 6 };
}
function nkhMusicStop(){
  const m = NKH.music; NKH.music = null;
  if (!m) return;
  try { const t = audioCtx.currentTime; m.out.gain.cancelScheduledValues(t); m.out.gain.setValueAtTime(m.out.gain.value, t); m.out.gain.linearRampToValueAtTime(0, t + .25); setTimeout(() => { try { m.out.disconnect(); } catch(e){} }, 400); } catch(e){}
}
// Called by the heartbeat: notes up to 0.6 s ahead.
function nkhMusicTick(){
  const m = NKH.music;
  if (!m || !audioCtx) return;
  const ctx = audioCtx, night = nkhClock().night, beat = night ? .62 : .44;
  const bell = (f, t, len, vol, type) => {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || 'triangle'; o.frequency.value = f;
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .04); g.gain.exponentialRampToValueAtTime(.0001, t + len);
    o.connect(g); g.connect(m.out); o.start(t); o.stop(t + len + .05);
  };
  try {
    while (m.next < ctx.currentTime + .6) {
      const t = m.next, bar = Math.floor(m.step / 8) % 4;
      if (m.step % 8 === 0) bell(NKH_ROOTS[bar] * (night ? .75 : 1), t, beat * 7.5, .045, 'sine');
      if (Math.random() < (night ? .4 : .55)) {
        m.note = Math.max(0, Math.min(NKH_PENTA.length - 1, m.note + [-2, -1, -1, 1, 1, 2][Math.floor(Math.random() * 6)]));
        bell(NKH_PENTA[m.note] * (night ? .5 : 1), t, beat * 2.2, .032);
      }
      m.step++; m.next += beat;
    }
    if (!night && ctx.currentTime > m.bird) { nkhBird(m.out); m.bird = ctx.currentTime + 7 + Math.random() * 9; }
  } catch(e){}
}
function nkhMusicBtn(){
  const b = document.getElementById('nkh-music');
  if (b) b.innerHTML = icon(nkhMusicOn() ? 'music-notes' : 'speaker-simple-slash', 'bold');
}

// ---------- The home ----------
function nkHome(d){
  nkHomeStop();
  const n = d.nest, c = nkhClock(), again = n.done && !n.next, todayId = n.done && n.next ? n.next : n.today, u = nestUnit(todayId);
  NKH.d = d; NKH.busy = false;
  const games = nkPlayGames().length > 0, pet = d.pet && PET_ART[d.pet.id] ? d.pet : null;
  const base = c.night ? 'sleepy' : 'happy';
  NKH.mood = base;
  // Today's visitor: a picture of today's unit (its icon word when it is one of the unit's words).
  const ws = u ? nestWordsOf(u).filter(w => w.pic) : [], sounds = EQ_NEST.sounds || {};
  const vis = ws.find(w => w.pic === u.icon) || ws.find(w => sounds[w.id]) || ws[0];
  const stars = [[12, 34], [30, 12], [52, 22], [60, 16], [84, 26], [42, 40], [8, 50], [92, 40]];
  const fall = c.season === 'autumn' ? 'leaf' : c.season === 'winter' ? 'snow' : '';
  app.innerHTML = `<div class="nkh ${c.phase} ${c.season}" id="nkh" role="application" aria-label="Coco's Nest">
    <div class="nkh-sky"></div>
    ${c.night ? `<div class="nkh-stars">${stars.map(([x, y], i) => `<button class="nkh-hot nkh-star" data-nkhw="star" data-hz="${900 + i * 60}" style="left:${x}%;top:${y}%;animation-delay:${(i * .37).toFixed(2)}s" aria-label="Star"><span class="nkh-in"><img src="${nkhPic('star')}" alt="" draggable="false"></span></button>`).join('')}</div>` : ''}
    <button class="nkh-hot nkh-sun" data-nkhw="${c.night ? 'moon' : 'sun'}" data-hz="${c.night ? 520 : 660}" aria-label="${c.night ? 'Moon' : 'Sun'}"><span class="nkh-in"><img src="${nkhPic(c.night ? 'moon' : 'sun')}" alt="" draggable="false"></span></button>
    ${n.done && !c.night ? `<button class="nkh-hot nkh-rainbow" data-nkhw="rainbow" data-hz="600" aria-label="Rainbow"><span class="nkh-in"><img src="${nkhPic('rainbow')}" alt="" draggable="false"></span></button>` : ''}
    <div class="nkh-lane l1"><button class="nkh-hot nkh-cloud" data-nkhw="cloud" data-hz="440" aria-label="Cloud"><span class="nkh-in"><img src="${nkhPic('cloud')}" alt="" draggable="false"></span></button></div>
    <div class="nkh-lane l2"><button class="nkh-hot nkh-cloud c2" data-nkhw="cloud" data-hz="470" aria-label="Cloud"><span class="nkh-in"><img src="${nkhPic('cloud')}" alt="" draggable="false"></span></button></div>
    ${c.season === 'summer' && !c.night ? `<button class="nkh-hot nkh-kite" data-nkhw="kite" data-hz="700" aria-label="Kite"><span class="nkh-in"><img src="${nkhPic('kite')}" alt="" draggable="false"></span></button>` : ''}
    ${games ? `<button class="nkh-hot nkh-balloon" data-nkh="balloon" aria-label="Play"><span class="nkh-in"><img src="${nkhPic('balloon')}" alt="" draggable="false"></span></button>` : ''}
    <svg class="nkh-hills" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true"><path class="h1" d="M0 70C60 30 150 20 230 52S350 90 400 60V200H0z"/><path class="h2" d="M0 120C80 80 170 96 260 110S360 120 400 98V200H0z"/></svg>
    ${c.season === 'spring' ? [[8, 38], [22, 43], [70, 40], [86, 36], [55, 45]].map(([x, y], i) => `<img class="nkh-hot nkh-wild" data-nkhw="flower" data-hz="${700 + i * 50}" src="${nkhPic('flower')}" style="left:${x}%;bottom:${y}%;--hue:${[0, 20, -25, -45, 10][i]}deg" alt="" draggable="false">`).join('') : ''}
    <div class="nkh-pond"><button class="nkh-hot nkh-duck" data-nkhw="duck" data-hz="600" aria-label="Duck"><span class="nkh-in"><img src="${nkhPic('duck')}" alt="" draggable="false"></span></button></div>
    <div class="nkh-treebox">
      <button class="nkh-hot nkh-tree" data-nkhw="tree" data-hz="330" aria-label="Tree"><span class="nkh-in"><img src="${nkhPic('tree')}" alt="" draggable="false"></span></button>
      ${nkhNestSvg('back')}
      <button class="nkh-hot nkh-coco" data-nkh="coco" aria-label="Coco"><i class="nkh-ring"></i><span class="nkh-in"><img id="nkcoco" src="${cocoSrc(base)}" alt="" draggable="false"></span>
        <span class="nkh-mic">${icon('microphone', 'duotone')}</span></button>
      ${nkhNestSvg('front')}
    </div>
    <div class="nkh-petc">${pet ? `<button class="nkh-hot nkh-pet" data-nkh="pet" aria-label="${esc(pet.name)}"><span class="nkh-in">${petArt(pet, base, 'nkh-petart')}
        ${c.night ? '<svg class="nkh-blanket" viewBox="0 0 100 46" preserveAspectRatio="none" aria-hidden="true"><path d="M4 18C4 8 14 4 50 4s46 4 46 14v14c0 8-8 12-46 12S4 40 4 32z"/><path class="fold" d="M8 14c20 6 64 6 84 0"/><g class="dots"><circle cx="24" cy="28" r="3"/><circle cx="44" cy="34" r="3"/><circle cx="64" cy="26" r="3"/><circle cx="80" cy="34" r="3"/><circle cx="34" cy="20" r="2.4"/><circle cx="72" cy="18" r="2.4"/></g></svg>' : ''}</span></button>`
      : `<button class="nkh-hot nkh-adopt" data-nkh="adopt" aria-label="Choose a pet"><span class="nkh-in">${nkhAdoptIds().slice(0, 3).map((id, i) => `<img class="a${i}" src="${petSrc(id, 1, 'happy')}" alt="" draggable="false">`).join('')}</span></button>`}</div>
    ${u ? `<button class="nkh-hot nkh-egg${again ? ' gold' : ''}" data-nkh="egg" aria-label="${esc(u.title)}"><span class="nkh-in"><i class="nkh-glow"></i><img src="${nkhPic('egg')}" alt="" draggable="false">
        ${again ? `<img class="nkh-eggstar" src="${nkhPic('star')}" alt="" draggable="false">` : ''}
        <svg class="nkh-crack" viewBox="0 0 100 100" aria-hidden="true"><path d="M22 52l12-8 9 10 10-12 10 9 10-8 8 6" pathLength="1"/></svg></span></button>` : ''}
    ${vis ? `<button class="nkh-hot nkh-visitor" data-nkh="visitor" data-id="${esc(vis.id)}" aria-label="${esc(vis.en)}"><span class="nkh-in"><img src="${nkhPic(vis.pic)}" alt="" draggable="false"></span></button>` : ''}
    <div class="nkh-garden" id="nkh-garden"></div>
    ${fall ? [12, 38, 63, 86].map((x, i) => `<div class="nkh-fall" style="left:${x}%;animation-duration:${14 + i * 3}s;animation-delay:-${(i * 4.3).toFixed(1)}s"><button class="nkh-hot nkh-flake" data-nkhw="${fall}" data-hz="${760 + i * 40}" style="animation-delay:-${i}s" aria-label="${fall}"><img src="${nkhPic(fall)}" alt="" draggable="false"></button></div>`).join('') : ''}
    <div class="nkh-top">
      <button class="btn btn-glass icon-btn" id="nkh-music" aria-label="Music"></button>
      ${typeof nkStickers === 'function' ? `<button class="btn btn-glass icon-btn" id="nkh-book" aria-label="Sticker book">${icon('sticker', 'duotone')}</button>` : ''}
      ${nkHasArt() ? `<button class="btn btn-glass icon-btn" id="nkh-art" aria-label="My pictures">${icon('palette', 'duotone')}</button>` : ''}
      <button class="btn btn-glass icon-btn" id="nkh-who" aria-label="Who is playing?">${icon('users-three', 'duotone')}</button>
    </div>
  </div>`;
  window.scrollTo(0, 0);
  const root = NKH.root = document.getElementById('nkh');
  nkhMusicBtn();
  nkhLayout();
  nkhFood();
  // Touch anywhere: the music may start now (browsers only allow sound after a touch).
  root.addEventListener('pointerdown', () => { nkhCtx(); setTimeout(nkhMusicStart, 30); });
  root.addEventListener('click', nkhTap);
  document.getElementById('nkh-music').onclick = e => {
    e.stopPropagation();
    store.set('eq_nkh_music', nkhMusicOn() ? 'off' : 'on');
    if (nkhMusicOn()) nkhMusicStart(); else nkhMusicStop();
    nkhMusicBtn();
  };
  const book = document.getElementById('nkh-book');
  if (book) book.onclick = e => { e.stopPropagation(); nkhPause(); nkStickers(); };
  const art = document.getElementById('nkh-art');
  if (art) art.onclick = e => { e.stopPropagation(); nkAlbum(); };
  document.getElementById('nkh-who').onclick = e => { e.stopPropagation(); nkHomeStop(); nestSwitch(); nestPlay(['en-bye']); };
  window.addEventListener('resize', nkhLayout);
  document.addEventListener('visibilitychange', nkhVisible);
  NKH.beat = setInterval(nkhBeat, 250);
  NKH.idleAt = Date.now() + 9000;
  if (d.push && d.push.key) pushKey = d.push.key;
  checkGrowth();
  nkhMusicStart();
  nkhArrive(c);
}

// The nest, drawn in code: the dark inside behind Coco, the woven bowl in front of his feet.
function nkhNestSvg(part){
  if (part === 'back') return `<svg class="nkh-nest back" viewBox="0 0 200 80" aria-hidden="true"><ellipse cx="100" cy="34" rx="82" ry="22" fill="#5b3418"/><ellipse cx="100" cy="38" rx="70" ry="15" fill="#3f2310"/></svg>`;
  const twigs = [[14, 38, 186, 34, '#a86b3c'], [10, 48, 190, 44, '#8a5530'], [18, 58, 182, 56, '#b97a46'], [30, 66, 170, 66, '#7a4a26'], [20, 44, 120, 30, '#c98b52'], [80, 32, 188, 50, '#c98b52'], [12, 54, 104, 70, '#9a6136'], [96, 70, 186, 52, '#9a6136']];
  return `<svg class="nkh-nest front" viewBox="0 0 200 80" aria-hidden="true"><defs><radialGradient id="nkh-ng" cx="45%" cy="25%" r="80%"><stop offset="0" stop-color="#c98b52"/><stop offset=".55" stop-color="#8a5530"/><stop offset="1" stop-color="#5b3418"/></radialGradient></defs>
    <path d="M8 34C8 66 50 78 100 78S192 66 192 34C170 46 140 50 100 50S30 46 8 34z" fill="url(#nkh-ng)"/>
    ${twigs.map(([x1, y1, x2, y2, col]) => `<path d="M${x1} ${y1}Q100 ${Math.max(y1, y2) + 10} ${x2} ${y2}" stroke="${col}" stroke-width="5" fill="none" stroke-linecap="round"/>`).join('')}
    <path d="M8 34C30 46 70 50 100 50s70-4 92-16" stroke="#d9a066" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M30 40c20 6 50 8 70 8" stroke="#f1c48c" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/></svg>`;
}

// Sizes from the screen: --s is one hundredth of the scene's measure (phones and tablets alike; landscape gets its own
// places through .wide, by the screen's shape, not its width).
function nkhLayout(){
  const root = NKH.root;
  if (!root || !root.isConnected) return;
  const W = root.clientWidth || innerWidth, H = root.clientHeight || innerHeight, wide = W > H * 1.05;
  const s = wide ? Math.min(W * .55, H * .8) / 100 : Math.min(W, H * .6) / 100;
  root.classList.toggle('wide', wide);
  root.style.setProperty('--s', s.toFixed(2) + 'px');
  nkhGarden(W, H);
}

// The garden: a flower for every day played (never wilting), and a friend for every unit played (tap = play it again).
function nkhGarden(W, H, grow){
  const g = document.getElementById('nkh-garden'), d = NKH.d;
  if (!g || !d) return;
  const n = d.nest, days = Math.max(0, Number(n.days) || 0);
  let units = [...new Set((n.played || []).map(id => String(id).split('.')[0]))].map(nestUnit).filter(Boolean);
  const gw = W * .96, gh = H * .15;
  // Friends in front: as big as fits (88 px at most); the oldest go behind the "more" button when there are too many.
  const fmax = Math.min(88, gh * .95), fmin = Math.min(54, fmax), more = n.all || units.length * fmin * .72 > gw;
  const slots = more ? Math.max(1, Math.floor(gw / (fmin * .72)) - 1) : units.length;
  const shown = units.slice(-slots), count = shown.length + (more ? 1 : 0);
  const f = count ? Math.max(fmin, Math.min(fmax, gw / count * 1.1)) : 0, step = count > 1 ? Math.min(f * 1.25, (gw - f) / (count - 1)) : 0, x0 = (gw - ((count - 1) * step + f)) / 2;
  const fl = Math.max(24, Math.min(54, H * .065)), cap = Math.max(1, Math.floor(gw / (fl * .55)));
  let html = '';
  // Flowers behind, up to three rows going up the hill.
  const shownDays = Math.min(days, cap * 3);
  for (let i = 0; i < shownDays; i++) {
    const r = Math.floor(i / cap), k = i % cap, inRow = Math.min(cap, shownDays - r * cap), z = Math.pow(.86, r) * (.9 + ((i * 37) % 20) / 100);
    const x = inRow > 1 ? (k + .5) * gw / inRow : gw * (.12 + ((i * 53) % 70) / 100);
    const y = f * .32 + r * fl * .42 + ((i * 29) % 7);
    html += `<img class="nkh-fl${grow && i === days - 1 ? ' nkh-grow' : ''}" data-nkhw="flower" data-hz="${680 + (i % 8) * 30}" src="${nkhPic('flower')}" alt="" draggable="false"
      style="left:${(x - fl * z / 2).toFixed(1)}px;bottom:${y.toFixed(1)}px;width:${(fl * z).toFixed(1)}px;z-index:${3 - r};--hue:${[0, 22, -26, -48, 12, -12][i % 6]}deg">`;
  }
  // Buds waiting for the next days.
  if (days < 3) [0, 1].forEach(i => { html += `<i class="nkh-bud" style="left:${(gw * (.38 + i * .2)).toFixed(0)}px;bottom:${(f * .3 + 4).toFixed(0)}px"></i>`; });
  shown.forEach((x, i) => {
    html += `<button class="nkh-hot nkh-friend" data-nkh="unit" data-unit="${esc(x.id)}" aria-label="${esc(x.title)}" style="left:${(x0 + i * step).toFixed(1)}px;width:${f.toFixed(1)}px;height:${f.toFixed(1)}px"><span class="nkh-in"><img src="${nkhPic(x.icon)}" alt="" draggable="false"></span></button>`;
  });
  if (more) html += `<button class="btn btn-glass icon-btn nkh-more" data-nkh="more" aria-label="All" style="left:${(x0 + (count - 1) * step + (f - Math.min(f, 64)) / 2).toFixed(1)}px;width:${Math.min(f, 64).toFixed(0)}px;height:${Math.min(f, 64).toFixed(0)}px;bottom:${((f - Math.min(f, 64)) / 2).toFixed(0)}px">${icon('squares-four', 'duotone')}</button>`;
  g.innerHTML = html;
}

// ---------- Touch ----------
function nkhBoing(el){
  const t = el && (el.querySelector('.nkh-in') || el);
  if (!t || nkhCalm()) return;
  t.classList.remove('nkh-boing'); void t.getBoundingClientRect(); t.classList.add('nkh-boing');
  clearTimeout(t.nkhT); t.nkhT = setTimeout(() => t.classList.remove('nkh-boing'), 700);
}
function nkhTap(e){
  const el = e.target.closest('[data-nkh],[data-nkhw]');
  if (!el || !NKH.root || NKH.busy) return;
  NKH.idleAt = Date.now() + 9000;
  // While Coco listens or repeats, the scene stays quiet (a sound would be recorded and played back).
  // The ways out (the egg, the balloon, a friend) still work: they end the echo first.
  if (NKH.echo) { if (!['egg', 'balloon', 'unit', 'more'].includes(el.dataset.nkh)) return; nkhPause(); nkhEchoState('idle'); }
  const w = el.dataset.nkhw;
  if (w) { nkhBoing(el); nkhBlip(Number(el.dataset.hz) || 600); if (NKH_SAID.includes(w)) nestPlay(['w-' + w]); return; }
  const role = el.dataset.nkh, d = NKH.d, n = d.nest;
  if (role === 'coco') return nkhEcho();
  if (role === 'pet') return nkhPetTap(el);
  if (role === 'adopt') { nkhBoing(el); nkhBlip(780); return nkhAdopt(); }
  if (role === 'visitor') {
    const id = el.dataset.id;
    nkhBoing(el); nkhBlip(560);
    return nestPlay([(EQ_NEST.sounds || {})[id] ? 's-' + id : 'w-' + id]);
  }
  if (role === 'egg') {
    // Wobble, crack, then today's lesson (or the next one when the parent allows more; a golden egg plays it again).
    NKH.busy = true;
    nkhBlip(520); nkSfx('pop');
    el.classList.add('open');
    const id = n.done && n.next ? n.next : n.today;
    setTimeout(() => { nkHomeStop(); nestStart(id); }, nkhCalm() ? 150 : 850);
    return;
  }
  if (role === 'balloon') {
    NKH.busy = true;
    nkhBlip(740); nkSfx('whoosh');
    el.classList.add('up');
    setTimeout(() => { nkHomeStop(); nestPlayground(); }, nkhCalm() ? 150 : 700);
    return;
  }
  if (role === 'unit') { nkhBoing(el); nkhBlip(620); return nkhReplay(el.dataset.unit); }
  if (role === 'more') return nkhAllUnits();
}
// A unit played before: one of its days again, as free play (the same as the old home's unit buttons).
function nkhReplay(id){
  const n = NKH.d.nest;
  if (n.all) return nestDays(nestUnit(id));
  nkHomeStop();
  nestStart(nkPick(n.played.filter(x => String(x).split('.')[0] === id).concat([id])));
}
// Every unit (Settings.NestAll) or every unit played, in a sheet: for the try-out kids and the garden's "more".
function nkhAllUnits(){
  const n = NKH.d.nest;
  const list = n.all ? EQ_NEST.units : [...new Set((n.played || []).map(id => String(id).split('.')[0]))].map(nestUnit).filter(Boolean);
  const ov = document.createElement('div');
  ov.className = 'overlay';
  ov.innerHTML = `<div class="sheet glass">
    <div class="row-flex between"><span></span><button class="btn btn-glass icon-btn" id="nkh-x" aria-label="Close">${icon('x')}</button></div>
    <div class="nkh-units mt">${list.map(x => `<button class="nk-unit" data-unit="${esc(x.id)}" aria-label="${esc(x.title)}"><img src="${nkhPic(x.icon)}" alt=""></button>`).join('')}</div></div>`;
  document.body.appendChild(ov);
  const close = () => ov.remove();
  ov.onclick = e => { if (e.target === ov) close(); };
  ov.querySelector('#nkh-x').onclick = close;
  ov.querySelectorAll('[data-unit]').forEach(b => b.onclick = () => { close(); nkhReplay(b.dataset.unit); });
}

// ---------- Coco ----------
function nkhCoco(mood){
  const img = document.getElementById('nkcoco');
  if (img) img.src = cocoSrc(mood || NKH.mood);
}
// Coco repeats you (docs/nest/echo.js): the states drive his look; without a microphone he hops and says hello.
function nkhEchoState(s){
  const b = NKH.root && NKH.root.querySelector('.nkh-coco'), img = document.getElementById('nkcoco');
  if (!b || !img) return;
  b.classList.toggle('listen', s === 'listen');
  img.classList.toggle('talk', s === 'talk' || s === 'ask');
  nkhCoco(s === 'listen' ? 'thinking' : s === 'talk' ? 'celebrate' : s === 'ask' ? 'happy' : NKH.mood);
}
function nkhEcho(){
  if (NKH.echo) return;
  const b = NKH.root.querySelector('.nkh-coco');
  nkhBoing(b); nkhBlip(880);
  nestStopAudio();
  let over = false;
  const done = ok => {
    if (over) return;
    over = true; NKH.echo = null;
    if (!NKH.root || !NKH.root.isConnected) return;
    nkhEchoState('idle');
    nkhMusicStart();
    if (!ok) { nkhHop(); nestPlay(['en-hello']); }
    else { nkhCoco('celebrate'); nkhLater(() => nkhCoco(), 1500); }
  };
  nkhMusicStop();
  NKH.echo = { stop(){} };
  try {
    const h = nkEchoStart({ onState: s => { if (!over) nkhEchoState(s); }, onDone: ok => done(!!ok),
      onLevel: v => { if (!over && b) b.style.setProperty('--lv', Math.max(0, Math.min(1, Number(v) || 0)).toFixed(2)); } });
    if (!over) NKH.echo = h && typeof h.stop === 'function' ? h : (done(false), null);
  } catch(e){ NKH.echo = null; done(false); }
}
function nkhHop(){
  const b = NKH.root && NKH.root.querySelector('.nkh-coco');
  if (!b) return;
  nkhBoing(b);
  if (!nkhClock().night) { nkhCoco('celebrate'); nkhLater(() => { if (!NKH.echo) nkhCoco(); }, 1400); }
}

// ---------- The pet corner ----------
function nkhPetTap(el){
  const svg = el.querySelector('svg.pa'), night = nkhClock().night;
  nkhBoing(el); nkhGiggle(night); buzz(true);
  if (night || !svg) return;
  paMood(svg, 'celebrate');
  nkhLater(() => paMood(svg, NKH.mood), 1500);
}
// One food the kid has met waits by the pet; drag it into the pet: munch, "Yummy! Thank you!". Asleep at night.
function nkhFood(){
  const d = NKH.d, root = NKH.root;
  if (!root || !d.pet || !PET_ART[d.pet.id] || nkhClock().night) return;
  const foods = [].concat(...nkKnownUnits().filter(u => u.theme === 'food').map(u => u.words.filter(w => w.pic)));
  if (!foods.length) return;
  const w = nkPick(foods), b = document.createElement('button');
  b.className = 'nkh-hot nkh-food';
  b.setAttribute('aria-label', w.en);
  b.innerHTML = `<span class="nkh-in"><img src="${nkhPic(w.pic)}" alt="" draggable="false"></span>`;
  root.querySelector('.nkh-petc').after(b);
  let st = null;
  b.addEventListener('pointerdown', e => {
    e.preventDefault(); e.stopPropagation();
    try { b.setPointerCapture(e.pointerId); } catch(x){}
    st = { x: e.clientX, y: e.clientY, moved: false };
    b.classList.add('drag');
  });
  b.addEventListener('pointermove', e => {
    if (!st) return;
    const dx = e.clientX - st.x, dy = e.clientY - st.y;
    if (Math.abs(dx) + Math.abs(dy) > 8) st.moved = true;
    b.style.transform = `translate(${dx}px,${dy}px) scale(1.15)`;
  });
  const end = e => {
    if (!st) return;
    const moved = st.moved; st = null;
    b.classList.remove('drag');
    const pet = root.querySelector('.nkh-pet'), r = pet && pet.getBoundingClientRect();
    const hit = r && e.clientX > r.left - 20 && e.clientX < r.right + 20 && e.clientY > r.top - 20 && e.clientY < r.bottom + 20;
    if (moved && hit && e.type === 'pointerup') return nkhFeed(b, w, pet);
    b.style.transform = '';
    if (!moved && e.type === 'pointerup') { nkhBoing(b); nkhBlip(640); nestPlay(['w-' + w.id]); }
  };
  b.addEventListener('pointerup', end);
  b.addEventListener('pointercancel', end);
  b.addEventListener('click', e => e.stopPropagation());
}
function nkhFeed(b, w, pet){
  b.classList.add('eaten');
  nkSfx('munch'); buzz(true);
  const svg = pet.querySelector('svg.pa'), inn = pet.querySelector('.nkh-in');
  if (svg) paMood(svg, 'celebrate');
  if (inn && !nkhCalm()) { inn.classList.remove('nkh-munch'); void inn.getBoundingClientRect(); inn.classList.add('nkh-munch'); }
  nestPlay(['w-' + w.id, 'en-yummy']);
  nkhLater(() => { b.remove(); if (svg) paMood(svg, NKH.mood); if (inn) inn.classList.remove('nkh-munch'); }, 1600);
  nkhLater(nkhFood, 6000);
}
// No pet yet: the six pets to choose from (as on the old home), in a sheet.
function nkhAdopt(){
  const ov = document.createElement('div');
  ov.className = 'overlay';
  ov.innerHTML = `<div class="sheet glass"><div class="row-flex between"><span></span><button class="btn btn-glass icon-btn" id="nkh-x" aria-label="Close">${icon('x')}</button></div>
    <div class="nk-adopt mt" style="justify-content:center">${nkhAdoptIds().map(id => `<button class="nk-adoptb" data-nkpet="${id}" aria-label="${esc(petName(id))}"><img src="${petSrc(id, 1, 'happy')}" alt=""></button>`).join('')}</div></div>`;
  document.body.appendChild(ov);
  const close = () => ov.remove();
  ov.onclick = e => { if (e.target === ov) close(); };
  ov.querySelector('#nkh-x').onclick = close;
  ov.querySelectorAll('[data-nkpet]').forEach(b => b.onclick = async () => {
    nestPlay(['en-great']);
    b.classList.add('on');
    try {
      setDash(await call('apiSetPet', session.name, session.pin, b.dataset.nkpet, petName(b.dataset.nkpet)));
      store.set('eq_pet_' + session.name, { id: dash.pet.id, stage: shownStage(dash.pet) });
      close(); renderDash(); confetti();
    } catch(e){ b.classList.remove('on'); toast(e.message, true); }
  });
}

// ---------- Arrival, and back from a lesson ----------
function nkhArrive(c){
  const kid = nkhKid(), key = 'eq_nkh_days_' + kid, days = Number(NKH.d.nest.days) || 0, was = store.get(key);
  store.set(key, days);
  const coco = NKH.root.querySelector('.nkh-coco'), pet = NKH.root.querySelector('.nkh-pet');
  if (typeof was === 'number' && days > was) {
    // A new flower grows with a cheer.
    nkhGarden(NKH.root.clientWidth || innerWidth, NKH.root.clientHeight || innerHeight, true);
    NKH.seen[kid] = true;
    nkhLater(() => {
      const fl = NKH.root.querySelector('.nkh-grow');
      if (fl && !nkhCalm()) { const r = fl.getBoundingClientRect(); nkBurst(r.left + r.width / 2, r.top + r.height / 2); }
      nkTune(true); nkhHop();
      if (pet) nkhBoing(pet);
      nestPlay(['en-great']);
    }, 500);
    return;
  }
  if (NKH.seen[kid]) return;
  NKH.seen[kid] = true;
  const line = c.night ? 'en-night' : c.h < 12 ? 'en-morning' : 'en-hello';
  if (nkhCalm()) return nestPlay([line]);
  coco.classList.add('nkh-fly');
  nkhLater(() => coco.classList.remove('nkh-fly'), 1500);
  nkhLater(() => { nestPlay([line]); if (!c.night) { nkhCoco('celebrate'); nkhLater(() => nkhCoco(), 1500); } }, 1200);
  if (pet) nkhLater(() => { const inn = pet.querySelector('.nkh-in'); if (inn) inn.classList.add('nkh-stretch'); nkhLater(() => inn && inn.classList.remove('nkh-stretch'), 1300); }, 1900);
}

// ---------- Timers and leaving ----------
function nkhLater(f, ms){ const t = setTimeout(() => { NKH.timers = NKH.timers.filter(x => x !== t); if (NKH.root && NKH.root.isConnected) f(); }, ms); NKH.timers.push(t); }
// One heartbeat for the whole scene: the music, Coco's little moves, and the check that the home is still on screen.
function nkhBeat(){
  if (!NKH.root || !NKH.root.isConnected) return nkHomeStop();
  if (document.hidden) return;
  nkhMusicTick();
  if (Date.now() > NKH.idleAt && !NKH.echo && !nestQueue && !NKH.busy) {
    NKH.idleAt = Date.now() + 8000 + Math.random() * 6000;
    if (!nkhCalm()) {
      const pick = Math.random();
      if (pick < .45) nkhBoing(NKH.root.querySelector('.nkh-coco'));
      else if (pick < .7 && !nkhClock().night) { nkhCoco('cool'); nkhLater(() => { if (!NKH.echo) nkhCoco(); }, 1800); }
      else nkhBoing(NKH.root.querySelector('.nkh-visitor') || NKH.root.querySelector('.nkh-pet'));
    }
  }
}
function nkhVisible(){
  if (!NKH.root || !NKH.root.isConnected) return nkHomeStop();
  if (document.hidden) { nkhMusicStop(); if (NKH.echo) { const h = NKH.echo; NKH.echo = null; try { h.stop(); } catch(e){} nkhEchoState('idle'); } }
  else nkhMusicStart();
}
// Music and the echo off while a sheet of its own covers the home (the sticker book); a touch on the scene starts it again.
function nkhPause(){
  nkhMusicStop();
  if (NKH.echo) { const h = NKH.echo; NKH.echo = null; try { h.stop(); } catch(e){} nkhEchoState('idle'); }
}
// Leaving the home: music, timers, the echo and every listener stop (also called by nestLeave in src/Index.html).
function nkHomeStop(){
  clearInterval(NKH.beat); NKH.beat = 0;
  NKH.timers.forEach(clearTimeout); NKH.timers = [];
  nkhMusicStop();
  if (NKH.echo) { const h = NKH.echo; NKH.echo = null; try { h.stop(); } catch(e){} }
  window.removeEventListener('resize', nkhLayout);
  document.removeEventListener('visibilitychange', nkhVisible);
  NKH.root = null;
}
