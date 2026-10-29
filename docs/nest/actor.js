// Coco's Nest, the arcade plan stage A (specs/nest.md, "A live Coco"): Coco and the kid's pet act in every game, real
// animal and thing sounds, and Coco's band under the chants. Loaded after play.js, in the app's global scope: every
// top-level name starts with nk/NK (test/nest-check.js fails on a name shared with src/Index.html or play.js).
// Only for the try-out kids (nestInfo.arcade: Settings.NestAll and Settings.NestArcade) and the teacher's preview.

const nkAlive = () => !!(NE && (NE.preview || (dash && dash.nest && dash.nest.arcade)));
const NKA = { idle: 0, flying: false };

// ---------- Coco's poses ----------
// docs/coco/<pose>.webp. A pose without its own picture yet borrows the closest one (stage A's art adds them).
const NK_POSES = new Set(['happy', 'celebrate', 'cool', 'oops', 'sleepy', 'thinking', 'point', 'laugh', 'surprised', 'shy', 'dance', 'eat',
  'fly', 'listen', 'whisper', 'shout', 'confused', 'cheer', 'wave', 'sneeze', 'sad', 'sleep', 'clap', 'thumbs']);
const NK_POSE_NEAR = {};
const nkPoseSrc = p => cocoSrc(NK_POSES.has(p) ? p : NK_POSE_NEAR[p] || 'happy');
function nkPose(p, ms){
  const c = document.getElementById('nkcoco');
  if (!c) return;
  c.src = nkPoseSrc(p);
  clearTimeout(NKA.poseT);
  if (ms) NKA.poseT = setTimeout(() => { const x = document.getElementById('nkcoco'); if (x) x.src = cocoSrc('happy'); }, ms);
}

// ---------- Moves: short Web Animations on Coco or the pet (nothing moves with reduced motion) ----------
const NK_MOVES = {
  hop: [[{ transform: 'translateY(0)' }, { transform: 'translateY(-22%) scaleY(1.06)' }, { transform: 'translateY(0) scaleY(.92)' }, { transform: 'none' }], 520],
  giggle: [[{ transform: 'rotate(0)' }, { transform: 'rotate(-9deg)' }, { transform: 'rotate(9deg)' }, { transform: 'rotate(-7deg)' }, { transform: 'rotate(7deg)' }, { transform: 'none' }], 620],
  surprise: [[{ transform: 'none' }, { transform: 'translateY(-26%) scale(1.12)' }, { transform: 'translateY(0) scale(.94)' }, { transform: 'none' }], 560],
  no: [[{ transform: 'none' }, { transform: 'translateX(-8%) rotate(-5deg)' }, { transform: 'translateX(8%) rotate(5deg)' }, { transform: 'translateX(-5%)' }, { transform: 'none' }], 520],
  spin: [[{ transform: 'rotate(0)' }, { transform: 'translateY(-18%) rotate(180deg)' }, { transform: 'rotate(360deg)' }], 700],
  dance: [[{ transform: 'none' }, { transform: 'rotate(-10deg) translateY(-8%)' }, { transform: 'rotate(10deg)' }, { transform: 'rotate(-10deg) translateY(-8%)' }, { transform: 'rotate(10deg)' }, { transform: 'none' }], 1100],
  sneeze: [[{ transform: 'none' }, { transform: 'scale(1.08,.9)', offset: .55 }, { transform: 'translateX(-10%) scale(.94,1.1)', offset: .7 }, { transform: 'none' }], 900],
  look: [[{ transform: 'none' }, { transform: 'scaleX(-1)', offset: .2 }, { transform: 'scaleX(-1)', offset: .8 }, { transform: 'none' }], 1400],
  tilt: [[{ transform: 'none' }, { transform: 'rotate(-12deg)', offset: .3 }, { transform: 'rotate(-12deg)', offset: .7 }, { transform: 'none' }], 1200],
  flap: [[{ transform: 'none' }, { transform: 'scale(1.05,.95) translateY(-6%)' }, { transform: 'none' }, { transform: 'scale(1.05,.95) translateY(-6%)' }, { transform: 'none' }], 640]
};
function nkMove(el, name){
  const m = NK_MOVES[name];
  if (!el || !m || nkCalm() || !el.animate) return;
  try { el.animate(m[0], { duration: m[1], easing: 'ease-out' }); } catch(e){}
}
const nkCocoEl = () => document.getElementById('nkcoco');
const nkPetEl = () => document.getElementById('nkdpet');

// ---------- On every screen of a session ----------
// Called at the end of nestRender: Coco gets bigger and breathes, fidgets now and then, answers a tap; the pet sits on
// the other side of the dock (not in games where the pet is already on the stage).
function nkActorOn(s){
  if (!NKA.pre && nkAlive()) { NKA.pre = 1; ['fly', 'cheer', 'clap', 'thumbs', 'dance', 'confused', 'surprised', 'laugh', 'sneeze', 'wave'].forEach(p => { new Image().src = nkPoseSrc(p); }); }
  clearTimeout(NKA.idle);
  const old = document.getElementById('nkflyer');
  if (old) old.remove();
  NKA.flying = false;
  if (!nkAlive()) return;
  const scr = app.querySelector('.gscreen.nk');
  if (!scr) return;
  scr.classList.add('alive');
  const c = nkCocoEl();
  if (c) c.addEventListener('click', nkCocoTap);
  const dock = app.querySelector('.nk-dock');
  if (dock && dash && dash.pet && !['give', 'dress', 'done'].includes(s.t)) {
    const p = document.createElement('button');
    p.className = 'nk-dpet'; p.id = 'nkdpet'; p.type = 'button'; p.setAttribute('aria-label', 'Your pet');
    p.innerHTML = petArt(dash.pet, 'happy', 'nk-petsvg');
    p.onclick = nkPetTap;
    dock.appendChild(p);
  }
  // A pose that says what the screen is about: listening for a sound, waving at the end.
  if (s.t === 'sound') nkPose('listen', 2600);
  else if (s.t === 'done') nkPose('wave');
  nkFidget();
}
function nkActorOff(){ if (NE && NE.off) { try { NE.off(); } catch(e){} NE.off = null; } clearTimeout(NKA.idle); clearTimeout(NKA.poseT); const f = document.getElementById('nkflyer'); if (f) f.remove(); }

// Every 5 to 9 seconds, when Coco is quiet: he looks around, tilts his head, flaps or hops; the pet bounces sometimes.
function nkFidget(){
  clearTimeout(NKA.idle);
  NKA.idle = setTimeout(() => {
    if (!NE || !nkAlive()) return;
    if (!nestQueue && !NKA.flying) {
      const pick = ['look', 'tilt', 'flap', 'hop'][Math.floor(Math.random() * 4)];
      nkMove(nkCocoEl(), pick);
      if (Math.random() < .4) nkMove(nkPetEl(), 'hop');
    }
    nkFidget();
  }, 5000 + Math.random() * 4000);
}

// A tap on Coco: he giggles, spins or sneezes (with a line, when he is not in the middle of saying something).
function nkCocoTap(){
  if (!NE || NKA.flying) return;
  const r = [['giggle', 'laugh', 'en-tickle'], ['spin', 'celebrate', 'en-whee'], ['sneeze', 'sneeze', 'en-achoo']][Math.floor(Math.random() * 3)];
  nkMove(nkCocoEl(), r[0]);
  nkPose(r[1], 1200);
  if (r[0] === 'sneeze') setTimeout(nkFeathers, 500);
  if (!nestQueue) nestPlay([r[2]]); else nkSfx('boing');
}
function nkPetTap(){
  const p = nkPetEl();
  if (!p) return;
  nkMove(p, Math.random() < .5 ? 'hop' : 'giggle');
  const svg = p.querySelector('svg');
  if (svg) { paMood(svg, 'celebrate'); setTimeout(() => { const x = nkPetEl(); const v = x && x.querySelector('svg'); if (v) paMood(v, 'happy'); }, 1200); }
  nkSfx('boing');
}

// A few feathers puff out of Coco (the sneeze).
function nkFeathers(){
  const c = nkCocoEl();
  if (!c || nkCalm()) return;
  const r = c.getBoundingClientRect();
  for (let i = 0; i < 6; i++) {
    const f = document.createElement('i');
    f.className = 'nk-feather';
    f.style.left = (r.left + r.width / 2) + 'px'; f.style.top = (r.top + r.height * .35) + 'px';
    f.style.setProperty('--dx', (Math.random() * 120 - 60) + 'px'); f.style.setProperty('--dy', (-40 - Math.random() * 60) + 'px');
    f.style.setProperty('--r', (Math.random() * 300 - 150) + 'deg');
    f.style.background = NK_FUN[i % NK_FUN.length];
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1300);
  }
}

// ---------- A right answer: Coco flies to the card, hops on it and flies back; the pet cheers ----------
function nkActorWin(s){
  if (!nkAlive()) return;
  const p = nkPetEl();
  if (p) { nkMove(p, 'hop'); const v = p.querySelector('svg'); if (v) paMood(v, 'celebrate'); }
  const st = nkStage(), card = st && (st.querySelector('.nk-card.yes') || st.querySelector('.yes'));
  const c = nkCocoEl();
  if (!c || !card || nkCalm() || NKA.flying) { nkMove(c, 'dance'); return; }
  const a = c.getBoundingClientRect(), b = card.getBoundingClientRect();
  if (!a.width || !b.width) return;
  const fly = document.createElement('img');
  fly.id = 'nkflyer'; fly.className = 'nk-flyer'; fly.alt = ''; fly.src = nkPoseSrc('fly'); fly.draggable = false;
  const size = Math.min(a.width * 1.15, 120);
  fly.style.cssText = `left:${a.left + a.width / 2 - size / 2}px;top:${a.top + a.height / 2 - size / 2}px;width:${size}px;height:${size}px`;
  document.body.appendChild(fly);
  c.style.visibility = 'hidden';
  NKA.flying = true;
  const dx = b.left + b.width / 2 - (a.left + a.width / 2), dy = b.top - size * .55 - (a.top + a.height / 2) + size / 2;
  const done = () => { NKA.flying = false; fly.remove(); const x = nkCocoEl(); if (x) { x.style.visibility = ''; nkMove(x, 'flap'); } };
  try {
    const an = fly.animate([
      { transform: 'translate(0,0) scale(1)' },
      { transform: `translate(${dx * .5}px,${dy - 60}px) scale(1.05) rotate(-8deg)`, offset: .22 },
      { transform: `translate(${dx}px,${dy}px) scale(1)`, offset: .36 },
      { transform: `translate(${dx}px,${dy - 26}px) scale(1.04,.96)`, offset: .46 },
      { transform: `translate(${dx}px,${dy}px) scale(1)`, offset: .56 },
      { transform: `translate(${dx}px,${dy - 20}px)`, offset: .64 },
      { transform: `translate(${dx}px,${dy}px)`, offset: .7 },
      { transform: `translate(${dx * .5}px,${dy - 70}px) rotate(8deg)`, offset: .86 },
      { transform: 'translate(0,0)' }
    ], { duration: 1500, easing: 'ease-in-out' });
    setTimeout(() => { fly.src = nkPoseSrc(['cheer', 'clap', 'thumbs', 'dance'][Math.floor(Math.random() * 4)]); nkSfx('flip'); }, 560);
    an.onfinish = done; an.oncancel = done;
  } catch(e){ done(); }
  setTimeout(() => { if (NKA.flying) done(); }, 1900);
}
// A wrong tap: Coco shakes his head (or looks surprised), the pet thinks, a soft boing.
function nkActorMiss(){
  if (!nkAlive()) return;
  const surprised = Math.random() < .5;
  nkMove(nkCocoEl(), surprised ? 'surprise' : 'no');
  setTimeout(() => nkPose(surprised ? 'surprised' : 'confused', 1300), 0);
  const p = nkPetEl();
  if (p) { nkMove(p, 'no'); const v = p.querySelector('svg'); if (v) { paMood(v, 'thinking'); setTimeout(() => { const x = nkPetEl(); const w = x && x.querySelector('svg'); if (w) paMood(w, 'happy'); }, 1400); } }
  nkSfx('boing');
}

// ---------- Real sounds (docs/nest/sounds, tools/nest_sounds.py) ----------
// The real sound first, then Coco says it ("Moo!"): the kid hears the cow and the English word for what it says.
const nkSnd = id => nkReal(id).concat(['s-' + id]);

// ---------- Coco's band: soft marimba, bass and bells under a chant (Web Audio, no files) ----------
// One of six tunes and one of four keys by unit, a bar at a time on the drums' clock. Four chords, I V vi IV.
const NK_KEYS = [261.63, 293.66, 349.23, 392.0];
const NK_CHORDS = [[0, 4, 7], [7, 11, 14], [9, 12, 16], [5, 9, 12]];
const NK_TUNES = [[0, 1, 2, 1, 0, 2, 1, 2], [0, 2, 1, 2, 0, 2, 1, 0], [2, 1, 0, 1, 2, 1, 0, 1], [0, 1, 2, 0, 1, 2, 1, 0], [0, 0, 2, 2, 1, 1, 2, 0], [2, 0, 1, 0, 2, 0, 1, 2]];
const nkHash = id => [...String(id || '')].reduce((a, c) => a * 31 + c.charCodeAt(0) >>> 0, 7);
function nkNote(ctx, t, f, len, vol, kind){
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = kind === 'bass' ? 'triangle' : 'sine';
  o.frequency.setValueAtTime(f, t);
  g.gain.setValueAtTime(.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + .01);
  g.gain.exponentialRampToValueAtTime(.0001, t + len);
  o.connect(g); g.connect(ctx.destination);
  o.start(t); o.stop(t + len + .05);
  if (kind === 'marimba') {  // the woody knock: a quiet fourth partial that dies fast
    const o2 = ctx.createOscillator(), g2 = ctx.createGain();
    o2.frequency.value = f * 4; g2.gain.setValueAtTime(vol * .3, t); g2.gain.exponentialRampToValueAtTime(.0001, t + .07);
    o2.connect(g2); g2.connect(ctx.destination); o2.start(t); o2.stop(t + .1);
  }
}
function nkBandBar(ctx, t, beat, bar, unit){
  if (!ctx || !nkAlive()) return;
  if (bar === 0) nkPose('dance');  // Coco dances to his band
  const h = nkHash(unit), root = NK_KEYS[h % 4], tune = NK_TUNES[(h >> 3) % NK_TUNES.length], ch = NK_CHORDS[bar % 4];
  const hz = semi => root * Math.pow(2, semi / 12);
  try {
    nkNote(ctx, t, hz(ch[0] - 24), beat * 1.8, .09, 'bass');
    nkNote(ctx, t + beat * 2, hz(ch[0] - 24 + (bar % 2 ? 7 : 0)), beat * 1.8, .08, 'bass');
    tune.forEach((k, i) => nkNote(ctx, t + i * beat / 2, hz(ch[k] + (i === 7 && bar % 4 === 3 ? 12 : 0)), beat * .9, .045, 'marimba'));
    if (bar % 4 === 0) nkNote(ctx, t, hz(ch[0] + 24), beat * 3, .02, 'bell');
  } catch(e){}
}
const nkReal = id => nkAlive() && (EQ_NEST.real || []).includes(id) ? ['x-' + id] : [];

// ---------- Stage B: things in the painted worlds that answer a tap ----------
// [word, x %, y % of the painting (600x804), radius % of its width]. Only words Coco has a clip for (w-<word>). A tap lifts
// that round piece of the painting out (a copy of the picture behind it, so nothing new is drawn), wobbles it and says it.
const NK_HOTS = {
  home: [['window', 70, 18, 14], ['teddy-bear', 21, 35, 6], ['flower', 66, 29, 5]],
  playroom: [['window', 22, 24, 13], ['star', 55, 33, 5], ['cloud', 71, 32, 6], ['train', 37, 43, 9], ['boat', 57, 55, 5]],
  kitchen: [['window', 80, 26, 15], ['cup', 43, 28, 5]],
  farm: [['house', 27, 36, 13], ['cloud', 70, 13, 10], ['tree', 12, 27, 9]],
  savanna: [['tree', 80, 32, 12], ['cloud', 70, 12, 10], ['tree', 22, 41, 7]],
  park: [['tree', 13, 30, 12], ['tree', 89, 29, 10], ['cloud', 32, 12, 9]],
  town: [['house', 12, 32, 12], ['house', 38, 36, 10], ['cloud', 37, 7, 9], ['tree', 8, 10, 8]],
  beach: [['sea', 35, 47, 14], ['tree', 80, 30, 14], ['cloud', 20, 12, 10], ['rock', 64, 57, 5]],
  sky: [['rainbow', 62, 25, 15], ['cloud', 15, 22, 12], ['cloud', 88, 19, 10]]
};
// Places the hot spots on a painted scene (the painting is drawn with background-size: cover, centered).
function nkHots(scene, place){
  if (!scene || !nkAlive()) return;
  const hots = NK_HOTS[NK_PLACE[place] ? place : 'playroom'] || [];
  const lay = () => {
    const w = scene.clientWidth, h = scene.clientHeight;
    if (!w || !h) return;
    const k = Math.max(w / 600, h / 804), bw = 600 * k, bh = 804 * k, ox = (w - bw) / 2, oy = (h - bh) / 2;
    scene.querySelectorAll('.nk-hot').forEach(b => {
      const [, x, y, r] = hots[Number(b.dataset.hot)], R = r / 100 * bw, cx = ox + x / 100 * bw, cy = oy + y / 100 * bh;
      b.style.cssText = `left:${cx - R}px;top:${cy - R}px;width:${2 * R}px;height:${2 * R}px;background-size:${bw}px ${bh}px;background-position:${ox - cx + R}px ${oy - cy + R}px`;
    });
  };
  scene.insertAdjacentHTML('afterbegin', hots.map(([w], i) => `<button class="nk-hot" data-hot="${i}" aria-label="${esc(w)}"></button>`).join(''));
  const img = (scene.style.backgroundImage || '').trim();
  scene.querySelectorAll('.nk-hot').forEach(b => {
    b.onclick = e => {
      e.stopPropagation();
      b.style.backgroundImage = img;
      nkAgain(b, 'up');
      nkSfx('pop');
      if (!nestQueue) nestPlay(['w-' + hots[Number(b.dataset.hot)][0]]);
    };
  });
  lay();
  requestAnimationFrame(lay);
}
