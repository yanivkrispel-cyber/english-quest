// Coco's Nest: the session engine and every activity (specs/nest.md). Loaded next to docs/nest/nest.js by loadNest() in
// src/Index.html, and runs in the app's global scope: it uses the app's helpers (esc, icon, buzz, petArt, nestPlay...)
// and the Nest's state NE. Every top-level name starts with nk / NK (or is one of the nest* entry points the app calls),
// so it never replaces a function of the app (test/nest-check.js checks it).
//
// The kid hears no Hebrew (owner, 2026-10-27): Coco does the first round himself, a hand shows where to tap or drag, the
// instructions are short English lines that come back every day, and a long press on Coco shows a grown-up the Hebrew
// explanation as text. A day is one of five kinds (specs/nest.md, "The week"): a = new words, b = move, c = song and
// story, d = games, and a review unit.

// ---------- Look ----------
(function nkStyle(){
  if (document.getElementById('nkcss')) return;
  const st = document.createElement('style');
  st.id = 'nkcss';
  st.textContent = `
.nk .nk-stage{position:relative}
.nk-fill{flex:1 1 0;min-height:0;width:100%;position:relative;container-type:size;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px}
.nk-coach{position:relative}
.nk-cue{width:58px;height:58px;border-radius:50%;display:grid;place-items:center;font-size:30px;color:#fff;background:linear-gradient(145deg,#a5b4fc,#6366f1);box-shadow:0 6px 16px rgba(99,102,241,.3);flex:none}
.nk-cue.drag{background:linear-gradient(145deg,#fdba74,#f97316)}
.nk-cue.ear{background:linear-gradient(145deg,#67e8f9,#0891b2)}
.nk-cue.body{background:linear-gradient(145deg,#86efac,#16a34a)}
.nk-cue.paint{background:linear-gradient(145deg,#f9a8d4,#db2777)}
.nk-cue.mic{background:linear-gradient(145deg,#fcd34d,#d97706)}
.nk-cue.on{animation:nkpulse 1.2s ease-in-out 2}
.nk-tip{position:absolute;left:0;right:0;bottom:calc(100% + 8px);z-index:30;padding:12px 14px;border-radius:18px;font-size:15px;line-height:1.5;font-weight:600;color:var(--ink);background:rgba(255,255,255,.96);box-shadow:0 10px 30px rgba(40,40,90,.18)}
.nk-hand{position:fixed;left:0;top:0;z-index:60;pointer-events:none;font-size:66px;line-height:1;color:#fff;filter:drop-shadow(0 3px 0 #312e81) drop-shadow(0 8px 14px rgba(30,27,75,.35));opacity:0;transform:translate(-30%,-8%)}
.nk-hand i{display:block}
.nk-ghost{position:fixed;z-index:55;pointer-events:none;margin:0;transform:scale(1.08);box-shadow:0 18px 40px rgba(40,40,90,.28)!important}
.nk-drag{touch-action:none;cursor:grab}
.nk-row{display:flex;gap:14px;justify-content:center;width:100%}
.nk-row .nk-card{max-width:min(30cqw,24cqh,150px);flex:1}
.nk-row.n2 .nk-card{max-width:min(40cqw,28cqh,170px)}
.nk-card.lift{opacity:.25}
.nk-card.back{animation:nkback .45s ease}
.nk-card.wig{animation:nkwig .5s ease}
.nk-card.lit{box-shadow:0 0 0 7px #fbbf24,0 12px 30px rgba(251,191,36,.45);transform:scale(1.06)}
.nk-card.soft{opacity:.55}
.nk-pet{width:min(58cqmin,300px);aspect-ratio:1;display:grid;place-items:center;position:relative;border-radius:50%;transition:transform .2s}
.nk-pet > svg,.nk-pet > img{width:100%;height:100%;object-fit:contain}
.nk-pet.hot{transform:scale(1.07)}
.nk-pet.hot::after{content:'';position:absolute;inset:6%;border-radius:50%;box-shadow:0 0 0 6px rgba(34,197,94,.55)}
.nk-pet.munch{animation:nkmunch .5s ease 2}
.nk-bushes{display:flex;gap:3cqw;justify-content:center;align-items:flex-end;width:100%}
.nk-bush{position:relative;flex:1;max-width:min(31cqw,60cqh,230px);aspect-ratio:3/4;border:0;background:none;padding:0;cursor:pointer;-webkit-tap-highlight-color:transparent}
.nk-bush .bk{position:absolute;left:0;bottom:0;width:100%;height:52%;z-index:2;border-radius:26px;background:linear-gradient(160deg,rgba(255,255,255,.78),rgba(255,255,255,.38));
  backdrop-filter:blur(14px) saturate(170%);-webkit-backdrop-filter:blur(14px) saturate(170%);border:1px solid rgba(255,255,255,.9);
  box-shadow:0 16px 30px -14px rgba(38,40,80,.35),inset 0 1px 0 rgba(255,255,255,.95),inset 0 -10px 22px -12px var(--tint,rgba(99,102,241,.45))}
.nk-bush .bk::after{content:'';position:absolute;left:14%;right:14%;top:12%;height:12%;border-radius:20px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent);opacity:.7}
.nk-bush .pk{position:absolute;left:12%;width:76%;bottom:24%;aspect-ratio:1;z-index:1;transition:transform .45s cubic-bezier(.3,1.6,.5,1);transform:translateY(24%)}
.nk-bush .pk img{width:100%;height:100%;object-fit:contain}
.nk-bush .pk .nk-dots{width:100%}
.nk-bush.wiggle .bk{animation:nkwig 1.1s ease-in-out infinite}
.nk-bush.wiggle .pk{animation:nkpeek 1.1s ease-in-out infinite}
.nk-bush.out .pk{transform:translateY(-40%) scale(1.12);animation:none}
.nk-bush.out .bk{animation:none}
.nk-bush.no{opacity:.4}
.nk-bush.hidden .pk{transform:translateY(80%)}
.nk-bubbles{position:absolute;inset:0;overflow:hidden;border-radius:26px}
.nk-bub{position:absolute;bottom:-34cqmin;width:min(30cqmin,150px);aspect-ratio:1;border-radius:50%;border:0;padding:0;cursor:pointer;display:grid;place-items:center;background:radial-gradient(circle at 32% 28%,rgba(255,255,255,.95),rgba(255,255,255,.35) 26%,rgba(186,230,253,.35) 60%,rgba(125,211,252,.55));box-shadow:inset 0 0 0 3px rgba(255,255,255,.85),inset -8px -10px 22px rgba(56,189,248,.35),0 10px 24px rgba(14,116,144,.18);animation:nkrise linear infinite;-webkit-tap-highlight-color:transparent}
.nk-bub img{width:62%;height:62%;object-fit:contain;pointer-events:none}
.nk-bub .nk-dots{width:62%}
.nk-bub.burst{animation:nkburst .32s ease-out forwards!important}
.nk-bub.miss{filter:grayscale(.6);opacity:.6}
.nk-bubbles.hold .nk-bub{animation-play-state:paused}
.nk-sortitem{display:grid;place-items:center;min-height:0;flex:1 1 0}
.nk-sortitem .nk-card{width:min(36cqw,34cqh,190px)!important}
.nk-boxes{display:flex;gap:6cqw;justify-content:center;align-items:flex-end;width:100%}
.nk-box{flex:none;width:min(40cqw,30cqh,200px);height:min(34cqw,26cqh,170px);border-radius:30px;position:relative;display:grid;place-items:center;
  background:linear-gradient(165deg,rgba(255,255,255,.82),rgba(255,255,255,.4)),radial-gradient(120% 90% at 50% 110%,var(--tint) 0%,transparent 70%);
  backdrop-filter:blur(16px) saturate(170%);-webkit-backdrop-filter:blur(16px) saturate(170%);border:1px solid rgba(255,255,255,.92);
  box-shadow:0 18px 34px -16px rgba(38,40,80,.38),inset 0 1px 0 #fff,inset 0 -14px 26px -14px var(--tint);transition:transform .15s;--tint:rgba(245,158,11,.7)}
.nk-box.nkb2{--tint:rgba(56,189,248,.7)}
.nk-box img{position:absolute;left:16%;top:12%;width:68%;height:76%;object-fit:contain;pointer-events:none;filter:drop-shadow(0 6px 8px rgba(0,0,0,.18))}
.nk-box .nk-dots{position:absolute;left:21%;top:16%;width:58%}
.nk-box.hot{transform:scale(1.08)}
.nk-box.gulp{animation:nkpop .4s ease}
.nk-pairs{display:grid;gap:2.4cqmin;width:100%;max-width:min(100cqw,74cqh);grid-template-columns:repeat(3,1fr);align-content:center}
.nk-pairs.c4{grid-template-columns:repeat(4,1fr);max-width:min(100cqw,110cqh)}
.nk-pc{aspect-ratio:1;border:0;padding:0;background:none;perspective:600px;cursor:pointer;-webkit-tap-highlight-color:transparent}
.nk-pc .in{display:block;position:relative;width:100%;height:100%;transition:transform .35s;transform-style:preserve-3d}
.nk-pc.up .in{transform:rotateY(180deg)}
.nk-pc .fc,.nk-pc .bc{position:absolute;inset:0;border-radius:20px;backface-visibility:hidden;-webkit-backface-visibility:hidden;display:grid;place-items:center;box-shadow:0 6px 16px rgba(60,60,120,.14)}
.nk-pc .bc{background:linear-gradient(150deg,#c7d2fe,#818cf8 70%,#6366f1);box-shadow:0 10px 20px -10px rgba(79,70,229,.55),inset 0 1px 0 rgba(255,255,255,.8),inset 0 -8px 16px -8px rgba(49,46,129,.45)}
.nk-pc .bc img{width:62%;height:62%;object-fit:contain;opacity:.92}
.nk-pc .fc{background:rgba(255,255,255,.95);transform:rotateY(180deg)}
.nk-pc .fc img{width:74%;height:74%;object-fit:contain}
.nk-pc .fc .nk-dots{width:74%}
.nk-pc .fc b{font-size:clamp(16px,7cqmin,30px);color:var(--ink);padding:4px;text-align:center;line-height:1.1;word-break:break-word}
.nk-pc.got .fc{box-shadow:0 0 0 5px #22c55e}
.nk-board{display:grid;gap:3cqmin;width:100%;max-width:min(100cqw,64cqh);grid-template-columns:repeat(2,1fr);position:relative}
.nk-board.n3{grid-template-columns:repeat(3,1fr);max-width:min(100cqw,110cqh)}
.nk-board .nk-card{max-width:none}
.nk-board .nk-card.gone{visibility:hidden}
.nk-curtain{position:absolute;inset:-4%;z-index:5;border-radius:30px;display:grid;place-items:center;background:rgba(255,255,255,.5);backdrop-filter:blur(22px) saturate(170%);-webkit-backdrop-filter:blur(22px) saturate(170%);border:1px solid rgba(255,255,255,.9);opacity:0;transform:scale(.9);transition:opacity .35s,transform .35s;pointer-events:none}
.nk-curtain img{width:38%;max-width:160px}
.nk-curtain.on{opacity:1;transform:scale(1)}
.nk-four{display:grid;grid-template-columns:repeat(2,1fr);gap:3cqmin;width:100%;max-width:min(100cqw,70cqh)}
.nk-four .nk-card{max-width:none}
.nk-chant{display:grid;grid-template-columns:repeat(2,1fr);gap:3cqmin;width:100%;max-width:min(100cqw,74cqh)}
.nk-chant .nk-card{max-width:none;transition:transform .15s,box-shadow .15s}
.nk-beat{display:flex;gap:10px;justify-content:center;height:16px}
.nk-beat i{width:14px;height:14px;border-radius:50%;background:rgba(99,102,241,.18);transition:transform .08s,background .08s}
.nk-beat i.on{background:#6366f1;transform:scale(1.35)}
.nk-scene{position:relative;width:100%;max-width:min(100cqw,128cqh);aspect-ratio:4/3;border-radius:28px;overflow:hidden;box-shadow:0 10px 30px rgba(40,40,90,.16)}
.nk-scene{background:linear-gradient(180deg,var(--sky1),var(--sky2));border:1px solid rgba(255,255,255,.85)}
.nk-scene::before{content:'';position:absolute;left:-10%;right:-10%;bottom:-6%;height:38%;border-radius:50% 50% 0 0/40% 40% 0 0;background:linear-gradient(180deg,var(--ground1),var(--ground2));box-shadow:inset 0 10px 18px -10px rgba(255,255,255,.9)}
.nk-scene::after{content:'';position:absolute;inset:0;border-radius:inherit;box-shadow:inset 0 1px 0 rgba(255,255,255,.9),inset 0 -30px 60px -40px rgba(38,40,80,.35);pointer-events:none}
.nk-prop{position:absolute;transform:translate(-50%,-50%);pointer-events:none;opacity:.5;filter:saturate(.75) blur(.4px)}
.nk-prop img{width:100%;height:100%;object-fit:contain}
.nk-glow{position:absolute;border-radius:50%;filter:blur(30px);opacity:.7;pointer-events:none}
.nk-it{position:absolute;transform:translate(-50%,-50%);border:0;background:none;padding:0;cursor:pointer;display:grid;place-items:center;-webkit-tap-highlight-color:transparent}
.nk-it img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 6px 6px rgba(0,0,0,.18));pointer-events:none}
.nk-it .nk-dots{width:100%}
.nk-it.wig{animation:nkwig2 .5s ease}
.nk-it.yes{animation:nkhop .6s ease}
.nk-it.yes::after{content:'';position:absolute;inset:-8%;border-radius:50%;box-shadow:0 0 0 5px #22c55e}
@container (orientation: portrait){.nk-scene{aspect-ratio:4/5;max-width:min(100cqw,78cqh)}}
.nk-line{font-size:clamp(20px,6cqmin,30px);font-weight:800;text-align:center;color:var(--ink);line-height:1.25;max-width:94%}
.nk-colorbox{position:relative;width:min(100cqw,64cqh);aspect-ratio:1;border-radius:30px;background:linear-gradient(165deg,rgba(255,255,255,.92),rgba(255,255,255,.6));border:1px solid rgba(255,255,255,.95);box-shadow:0 18px 36px -18px rgba(38,40,80,.35),inset 0 1px 0 #fff;padding:4%;box-sizing:border-box}
.nk-colorbox svg{width:100%;height:100%;display:block}
.nk-colorbox [data-r]{cursor:pointer;transition:fill .35s}
.nk-pots{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
.nk-pot{width:min(15cqw,66px);aspect-ratio:1;border-radius:50%;border:0;padding:0;cursor:pointer;background:none;transition:transform .15s}
.nk-pot img{width:100%;height:100%;object-fit:contain;pointer-events:none}
.nk-pot.on{transform:scale(1.18);box-shadow:0 0 0 5px #fff,0 0 0 9px #6366f1;border-radius:50%}
.nk-pot.wig{animation:nkwig .5s ease}
.nk-teddy{position:relative;height:min(78cqh,100cqw);aspect-ratio:1}
.nk-teddy > img{width:100%;height:100%;object-fit:contain;pointer-events:none}
.nk-teddy.hot{filter:drop-shadow(0 0 12px rgba(34,197,94,.8))}
.nk-wear{position:absolute;transform:translate(-50%,-50%);pointer-events:none;animation:nkpop .35s ease}
.nk-wear img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 3px 4px rgba(0,0,0,.2))}
.nk-thumb{width:96px;height:96px;border-radius:50%;border:0;font-size:46px;color:#fff;background:linear-gradient(145deg,#86efac,#16a34a);display:grid;place-items:center;box-shadow:0 10px 24px rgba(22,163,74,.35);cursor:pointer}
.nk-album{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.nk-album .nk-colorbox{width:100%;border-radius:16px}
.nk-artbtn{width:58px;height:58px;border-radius:50%;border:1px solid rgba(255,255,255,.95);background:rgba(255,255,255,.75);display:grid;place-items:center;font-size:28px;color:#db2777;cursor:pointer;flex:none}
@keyframes nkwig{0%,100%{transform:rotate(0)}20%{transform:rotate(-7deg)}40%{transform:rotate(6deg)}60%{transform:rotate(-4deg)}80%{transform:rotate(2deg)}}
@keyframes nkwig2{0%,100%{transform:translate(-50%,-50%) rotate(0)}25%{transform:translate(-50%,-50%) rotate(-9deg)}75%{transform:translate(-50%,-50%) rotate(8deg)}}
@keyframes nkhop{0%,100%{transform:translate(-50%,-50%) scale(1)}40%{transform:translate(-50%,-62%) scale(1.18)}}
@keyframes nkpeek{0%,100%{transform:translateY(24%)}50%{transform:translateY(6%)}}
@keyframes nkback{0%{transform:scale(1.1)}60%{transform:scale(.94)}100%{transform:scale(1)}}
@keyframes nkmunch{0%,100%{transform:scale(1)}30%{transform:scale(1.08,.94)}60%{transform:scale(.96,1.05)}}
@keyframes nkrise{from{transform:translateY(0)}to{transform:translateY(calc(-100cqh - 70cqmin))}}
@keyframes nkburst{0%{transform:var(--at) scale(1);opacity:1}100%{transform:var(--at) scale(1.6);opacity:0}}
@media (prefers-reduced-motion: reduce){.nk-bush.wiggle .bk,.nk-bush.wiggle .pk{animation:none}.nk-bub{animation-duration:30s!important}}
`;
  document.head.appendChild(st);
})();

// ---------- Small helpers ----------
const NK = {};                                   // the activities, by step type
const NK_CUE = { meet: ['ear', 'ear'], phrase: ['ear', 'ear'], story: ['book-open', 'ear'], chant: ['music-notes', 'ear'],
  find: ['hand-pointing', ''], peek: ['hand-pointing', ''], sound: ['ear', 'ear'], pop: ['hand-pointing', ''],
  pairs: ['hand-pointing', ''], missing: ['hand-pointing', ''], odd: ['hand-pointing', ''], scene: ['hand-pointing', ''],
  give: ['hand-grabbing', 'drag'], sort: ['hand-grabbing', 'drag'], dress: ['hand-grabbing', 'drag'],
  color: ['paint-brush', 'paint'], move: ['person-simple-run', 'body'], say: ['microphone', 'mic'], teach: ['microphone', 'mic'],
  done: ['star', 'mic'] };
const NK_FOOD = new Set(['apple', 'banana', 'pear', 'grapes', 'strawberry', 'watermelon', 'bread', 'cheese', 'egg', 'milk', 'juice', 'ice-cream']);
const NK_SKY = new Set(['sun', 'moon', 'star', 'cloud', 'rain', 'snow', 'rainbow', 'plane', 'kite', 'balloon', 'parrot']);
const nkKid = () => (session && session.name) || 'preview';
const nkLive = s => NE && NE.steps[NE.si] === s;
const nkPraise = () => 'en-' + NEST_PRAISE[Math.floor(Math.random() * NEST_PRAISE.length)];
const nkStage = () => document.getElementById('nkst');
const nkSlot = () => document.getElementById('nkslot');
const nkPick = a => a[Math.floor(Math.random() * a.length)];
function nkWord(id){
  if (!window.EQ_NEST) return null;
  if (!NE || !NE.wmap) {
    const m = {};
    EQ_NEST.units.forEach(u => (u.words || []).forEach(w => { m[w.id] = Object.assign({ unit: u.id, theme: u.theme }, w); }));
    if (!NE) return m[id] || null;
    NE.wmap = m;
  }
  return NE.wmap[id] || null;
}
// How many times this kid has played an activity on this phone: Coco shows the first rounds himself while it is new.
function nkSeen(t){ return (store.get('eq_nest_seen_' + nkKid()) || {})[t] || 0; }
function nkSeenAdd(t){ const k = 'eq_nest_seen_' + nkKid(), m = store.get(k) || {}; m[t] = (m[t] || 0) + 1; store.set(k, m); }
const nkShouldDemo = t => NE && (NE.age <= 3 || nkSeen(t) < 3);
function nkPet(mood){
  return dash && dash.pet ? petArt(dash.pet, mood || 'happy', 'nk-petsvg') : `<img src="${cocoSrc(mood === 'celebrate' ? 'celebrate' : 'happy')}" alt="" draggable="false">`;
}
function nkPetMood(el, mood){
  if (!el) return;
  const svg = el.querySelector('svg');
  if (svg) paMood(svg, mood); else { const im = el.querySelector('img'); if (im) im.src = cocoSrc(mood === 'celebrate' ? 'celebrate' : 'happy'); }
}
function nkCoco(mood){ const c = document.getElementById('nkcoco'); if (c) c.src = cocoSrc(mood || 'happy'); }
// A round counts for a word only on the first try; a word missed anywhere in the session counts as missed.
function nkScore(id, ok){
  NE.total++;
  if (ok) NE.correct++;
  if (id) NE.res[id] = (NE.res[id] == null ? true : NE.res[id]) && !!ok;
}

// ---------- Sounds made in code (pops, flips, drums) ----------
function nkCtx(){
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  } catch(e){ return null; }
}
function nkNoise(ctx, t0, len, vol, type, freq){
  const n = Math.floor(ctx.sampleRate * len), buf = ctx.createBuffer(1, n, ctx.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
  const src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
  src.buffer = buf; f.type = type; f.frequency.value = freq; g.gain.value = vol;
  src.connect(f); f.connect(g); g.connect(ctx.destination);
  src.start(t0);
}
function nkTone(ctx, t0, f0, f1, len, vol, type){
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type || 'sine';
  o.frequency.setValueAtTime(f0, t0);
  o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t0 + len);
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(.0005, t0 + len);
  o.connect(g); g.connect(ctx.destination);
  o.start(t0); o.stop(t0 + len + .02);
}
function nkSfx(kind, at){
  if (!soundOn() && kind !== 'kick' && kind !== 'snare' && kind !== 'hat') return;
  const ctx = nkCtx();
  if (!ctx) return;
  const t = at || ctx.currentTime + .01;
  try {
    if (kind === 'pop') { nkTone(ctx, t, 900, 180, .12, .18, 'sine'); nkNoise(ctx, t, .06, .12, 'highpass', 2500); }
    else if (kind === 'flip') nkTone(ctx, t, 520, 880, .09, .08, 'triangle');
    else if (kind === 'munch') { nkNoise(ctx, t, .07, .2, 'lowpass', 900); nkNoise(ctx, t + .14, .07, .2, 'lowpass', 900); }
    else if (kind === 'whoosh') nkNoise(ctx, t, .35, .08, 'bandpass', 1200);
    else if (kind === 'boing') nkTone(ctx, t, 220, 660, .22, .1, 'sine');
    else if (kind === 'rustle') nkNoise(ctx, t, .25, .07, 'highpass', 3000);
    else if (kind === 'kick') nkTone(ctx, t, 140, 45, .22, .32, 'sine');
    else if (kind === 'snare') { nkNoise(ctx, t, .14, .12, 'highpass', 1800); nkTone(ctx, t, 220, 160, .08, .06, 'triangle'); }
    else if (kind === 'hat') nkNoise(ctx, t, .04, .04, 'highpass', 7000);
  } catch(e){}
}

// ---------- The hand that shows what to do ----------
function nkHandEl(){
  let h = document.getElementById('nkhand');
  if (!h) {
    h = document.createElement('div');
    h.id = 'nkhand';
    h.className = 'nk-hand';
    h.innerHTML = icon('hand-pointing', 'duotone');
    document.body.appendChild(h);
  }
  return h;
}
function nkHandStop(){
  const h = document.getElementById('nkhand');
  if (h) { h.getAnimations().forEach(a => a.cancel()); h.style.opacity = 0; }
}
const nkCenter = el => { const r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };
// The hand flies to an element and taps it (twice for a hint); done() after the tap.
function nkHandTap(el, done, taps){
  const h = nkHandEl();
  if (!el || !h.animate) return done && done();
  nkHandStop();
  const [x, y] = nkCenter(el), sx = window.innerWidth * .78, sy = window.innerHeight * .92, n = taps || 1, frames = [
    { opacity: 0, transform: `translate(${sx}px,${sy}px) scale(1)` },
    { opacity: 1, transform: `translate(${x}px,${y}px) scale(1)`, offset: .45 }];
  for (let i = 0; i < n; i++) frames.push({ opacity: 1, transform: `translate(${x}px,${y}px) scale(.82)`, offset: .45 + (i + .5) * .4 / n },
    { opacity: 1, transform: `translate(${x}px,${y}px) scale(1)`, offset: .45 + (i + 1) * .4 / n });
  frames.push({ opacity: 0, transform: `translate(${x + 30}px,${y + 40}px) scale(1)` });
  const a = h.animate(frames, { duration: 1300 + n * 250, easing: 'ease-in-out' });
  if (done) setTimeout(done, (1300 + n * 250) * .66);
  a.onfinish = () => { h.style.opacity = 0; };
}
// The hand drags a copy of one element onto another; done() when it lands.
function nkHandDrag(from, to, done){
  const h = nkHandEl();
  if (!from || !to || !h.animate) return done && done();
  nkHandStop();
  const [x0, y0] = nkCenter(from), [x1, y1] = nkCenter(to), r = from.getBoundingClientRect();
  const g = from.cloneNode(true);
  g.classList.add('nk-ghost');
  Object.assign(g.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px', opacity: 0 });
  document.body.appendChild(g);
  from.classList.add('lift');
  const dur = 1700, path = [
    { opacity: 0, transform: `translate(${x0}px,${y0 + 60}px)` },
    { opacity: 1, transform: `translate(${x0}px,${y0}px)`, offset: .25 },
    { opacity: 1, transform: `translate(${x1}px,${y1}px)`, offset: .85 },
    { opacity: 0, transform: `translate(${x1}px,${y1}px)` }];
  h.animate(path, { duration: dur, easing: 'ease-in-out' }).onfinish = () => { h.style.opacity = 0; };
  g.animate([{ opacity: 0, transform: 'translate(0,0) scale(1)' }, { opacity: 1, transform: 'translate(0,0) scale(1.08)', offset: .25 },
    { opacity: 1, transform: `translate(${x1 - x0}px,${y1 - y0}px) scale(.7)`, offset: .85 }, { opacity: 0, transform: `translate(${x1 - x0}px,${y1 - y0}px) scale(.4)` }],
    { duration: dur, easing: 'ease-in-out' }).onfinish = () => g.remove();
  setTimeout(() => { from.classList.remove('lift'); if (done) done(); }, dur * .86);
}
// A hint when nothing happens for a while: the hand shows the way (a tap, or a drag for drag games). Any touch on the
// stage starts the wait again.
function nkIdle(s, target, to){
  clearTimeout(NE.idleT);
  const st = nkStage();
  if (!st) return;
  if (!st.dataset.idle) { st.dataset.idle = 1; st.addEventListener('pointerdown', () => { clearTimeout(NE && NE.idleT); nkHandStop(); if (NE && NE.idleArm) NE.idleT = setTimeout(NE.idleArm, 9000); }, true); }
  NE.idleArm = () => {
    if (!nkLive(s)) return;
    const a = typeof target === 'function' ? target() : target, b = typeof to === 'function' ? to() : to;
    if (!a || !document.body.contains(a)) return;
    if (b) { const r = a.getBoundingClientRect(), [x1, y1] = nkCenter(b), [x0, y0] = nkCenter(a), h = nkHandEl();
      h.animate([{ opacity: 0, transform: `translate(${x0}px,${y0}px)` }, { opacity: 1, transform: `translate(${x0}px,${y0}px)`, offset: .2 },
        { opacity: 1, transform: `translate(${x1}px,${y1}px)`, offset: .8 }, { opacity: 0, transform: `translate(${x1}px,${y1}px)` }], { duration: 1600, easing: 'ease-in-out' });
      void r;
    } else nkHandTap(a, null, 2);
    NE.idleT = setTimeout(NE.idleArm, 9000);
  };
  NE.idleT = setTimeout(NE.idleArm, 7000);
}

// ---------- Dragging with a finger (phones, tablets, a mouse) ----------
// opts: { targets: () => [elements], drop(el, target), tap(el) }. The copy follows the finger; a drop near a target
// (within its own size, generous for small fingers) calls drop; anywhere else the picture flies back.
function nkDrag(el, opts){
  el.classList.add('nk-drag');
  el.addEventListener('pointerdown', e => {
    if (!NE || el.disabled || NE.locked) return;
    e.preventDefault();
    const r = el.getBoundingClientRect(), dx = e.clientX - r.left, dy = e.clientY - r.top, x0 = e.clientX, y0 = e.clientY;
    let g = null, hot = null, moved = false;
    const near = (x, y) => {
      let best = null, bd = 1e9;
      opts.targets().forEach(t => {
        const q = t.getBoundingClientRect(), cx = q.left + q.width / 2, cy = q.top + q.height / 2, d = Math.hypot(x - cx, y - cy);
        if (d < Math.max(q.width, q.height) * .75 && d < bd) { bd = d; best = t; }
      });
      return best;
    };
    const move = ev => {
      if (!moved && Math.hypot(ev.clientX - x0, ev.clientY - y0) < 8) return;
      if (!moved) {
        moved = true;
        g = el.cloneNode(true);
        g.classList.add('nk-ghost');
        Object.assign(g.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' });
        document.body.appendChild(g);
        el.classList.add('lift');
        nkHandStop();
      }
      g.style.left = (ev.clientX - dx) + 'px';
      g.style.top = (ev.clientY - dy) + 'px';
      const t = near(ev.clientX, ev.clientY);
      if (t !== hot) { if (hot) hot.classList.remove('hot'); hot = t; if (hot) hot.classList.add('hot'); }
    };
    const up = ev => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      document.removeEventListener('pointercancel', up);
      if (hot) hot.classList.remove('hot');
      if (!moved) { if (opts.tap) opts.tap(el); return; }
      const t = ev.type === 'pointercancel' ? null : near(ev.clientX, ev.clientY);
      if (t) { g.remove(); el.classList.remove('lift'); opts.drop(el, t); return; }
      const gr = g.getBoundingClientRect();
      g.animate([{ transform: 'translate(0,0) scale(1.08)' }, { transform: `translate(${r.left - gr.left}px,${r.top - gr.top}px) scale(1)` }], { duration: 260, easing: 'ease-out' })
        .onfinish = () => { g.remove(); el.classList.remove('lift'); el.classList.remove('back'); void el.offsetWidth; el.classList.add('back'); };
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
    document.addEventListener('pointercancel', up);
  });
}
// The picture flies from where it is into a target and shrinks away (a tap instead of a drag, or after a drop).
function nkFly(el, to, done){
  const r = el.getBoundingClientRect(), [x1, y1] = nkCenter(to), g = el.cloneNode(true);
  g.classList.add('nk-ghost');
  Object.assign(g.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' });
  document.body.appendChild(g);
  el.classList.add('lift');
  g.animate([{ transform: 'translate(0,0) scale(1)' }, { transform: `translate(${x1 - r.left - r.width / 2}px,${y1 - r.top - r.height / 2}px) scale(.35)`, opacity: .2 }],
    { duration: 420, easing: 'cubic-bezier(.4,.1,.6,1)' }).onfinish = () => { g.remove(); if (done) done(); };
}

// ---------- Places drawn in code (stories and the big picture) ----------
const NK_PLACE = {
  // sky top, sky bottom, ground top, ground bottom, scenery [pic, x %, y %, size %], two glows
  home: ['#fff1e6', '#fde2cf', '#f5d0b0', '#e9b892', [['window', 80, 24, 22]], ['#fbcfe8', '#c7d2fe']],
  playroom: ['#eef2ff', '#e0e7ff', '#ddd6fe', '#c4b5fd', [['balloon', 14, 20, 14], ['star', 86, 16, 10]], ['#c7d2fe', '#fbcfe8']],
  kitchen: ['#ecfdf5', '#d1fae5', '#fde7c7', '#f3cf9c', [['cup', 86, 22, 12], ['window', 20, 22, 18]], ['#a7f3d0', '#fde68a']],
  farm: ['#e0f2fe', '#cffafe', '#bbf7d0', '#86efac', [['sun', 84, 16, 16], ['cloud', 22, 14, 18], ['house', 86, 52, 18], ['tree', 10, 54, 18]], ['#a5f3fc', '#bbf7d0']],
  savanna: ['#fef3c7', '#fde68a', '#fde68a', '#fbbf24', [['sun', 82, 16, 18], ['tree', 12, 50, 20]], ['#fed7aa', '#fde68a']],
  park: ['#e0f2fe', '#ecfeff', '#d9f99d', '#a3e635', [['cloud', 80, 14, 18], ['tree', 90, 50, 20], ['flower', 8, 66, 10]], ['#bae6fd', '#d9f99d']],
  town: ['#eef2ff', '#e0f2fe', '#e5e7eb', '#cbd5e1', [['house', 12, 48, 20], ['house', 88, 46, 18], ['cloud', 50, 12, 16]], ['#c7d2fe', '#bae6fd']],
  beach: ['#e0f2fe', '#a5f3fc', '#fef3c7', '#fde68a', [['sun', 84, 14, 16], ['sea', 50, 50, 34], ['shell', 12, 82, 9]], ['#a5f3fc', '#fde68a']],
  sky: ['#c7d2fe', '#e0f2fe', '#eef2ff', '#e0e7ff', [['cloud', 18, 20, 20], ['cloud', 80, 60, 22], ['star', 86, 14, 8]], ['#a5b4fc', '#bae6fd']]
};
const NK_THEME_PLACE = { hello: 'home', colors: 'playroom', numbers: 'farm', animals: 'farm', family: 'home', body: 'playroom', food: 'kitchen',
  toys: 'playroom', feelings: 'home', actions: 'park', clothes: 'home', nature: 'park', home: 'home', people: 'town' };
// The place behind a story page or the big picture. skip: word ids in play, never shown as scenery.
function nkPlace(place, skip){
  const P = NK_PLACE[place] || NK_PLACE.playroom, no = new Set(skip || []);
  const props = P[4].filter(x => !no.has(x[0])).map(([pic, x, y, sz]) => `<span class="nk-prop" style="left:${x}%;top:${y}%;width:${sz}%;aspect-ratio:1"><img src="${esc(nestPicSrc(pic))}" alt="" draggable="false"></span>`).join('');
  return { style: `--sky1:${P[0]};--sky2:${P[1]};--ground1:${P[2]};--ground2:${P[3]}`,
    html: `<span class="nk-glow" style="left:-10%;top:-20%;width:60%;height:60%;background:${P[5][0]}"></span><span class="nk-glow" style="right:-12%;top:10%;width:50%;height:50%;background:${P[5][1]}"></span>${props}` };
}
// Where pictures stand in a place: [x %, y %, size %] for one, two or three on a story page, and six spots for the big
// picture (things of the sky go up).
const NK_STORY_SPOTS = [[[50, 58, 46]], [[30, 60, 36], [70, 60, 36]], [[20, 62, 28], [50, 56, 30], [80, 62, 28]]];
const NK_SCENE_GROUND = [[16, 72, 22], [40, 78, 22], [64, 72, 22], [86, 80, 20], [28, 52, 18], [72, 50, 18]];
const NK_SCENE_SKY = [[20, 22, 18], [52, 18, 18], [82, 26, 18]];
function nkItem(w, spot, i){
  return `<button class="nk-it" data-nki="${i}" style="left:${spot[0]}%;top:${spot[1]}%;width:${spot[2]}%;aspect-ratio:1">${w.id === 'parrot' || !w.id ? `<img src="${cocoSrc('happy')}" alt="" draggable="false">` : nestPic(w)}</button>`;
}

// ---------- Coloring pages drawn in code: regions with data-r; "main" is the part Coco names ----------
const NK_INK = '#3b3551';
const NK_PAGES = {
  ball: `<circle data-r="main" cx="100" cy="100" r="78"/><path data-r="b" d="M30 70 Q100 40 170 70 L176 92 Q100 62 24 92 Z"/><path data-r="c" d="M24 112 Q100 140 176 112 L170 132 Q100 160 30 132 Z"/>`,
  car: `<path data-r="main" d="M18 128 Q18 100 44 100 L62 100 L84 66 L138 66 L160 100 L172 100 Q186 100 186 126 L186 146 L18 146 Z"/><path data-r="b" d="M90 74 L132 74 L148 100 L76 100 Z"/><circle data-r="c" cx="58" cy="148" r="20"/><circle data-r="c" cx="148" cy="148" r="20"/>`,
  house: `<path data-r="b" d="M30 98 L100 36 L170 98 Z"/><rect data-r="main" x="44" y="96" width="112" height="84"/><rect data-r="c" x="88" y="128" width="26" height="52"/><rect data-r="d" x="56" y="110" width="22" height="22"/><rect data-r="d" x="124" y="110" width="22" height="22"/>`,
  fish: `<path data-r="b" d="M146 100 L186 66 L186 134 Z"/><ellipse data-r="main" cx="96" cy="100" rx="62" ry="40"/><path data-r="c" d="M84 62 Q100 40 120 64 Z"/><circle cx="66" cy="92" r="7" fill="${NK_INK}"/>`,
  flower: `<path data-r="c" d="M98 120 L98 186 L104 186 L104 120 Z"/><path data-r="d" d="M102 160 Q140 140 150 120 Q120 128 102 150 Z"/>${[0, 72, 144, 216, 288].map(a => { const r = a * Math.PI / 180; return `<circle data-r="main" cx="${(100 + Math.cos(r) * 34).toFixed(1)}" cy="${(80 + Math.sin(r) * 34).toFixed(1)}" r="26"/>`; }).join('')}<circle data-r="b" cx="100" cy="80" r="20"/>`,
  balloon: `<path d="M100 150 Q90 170 104 186" fill="none"/><path data-r="b" d="M92 150 L108 150 L100 140 Z"/><ellipse data-r="main" cx="100" cy="84" rx="54" ry="64"/><path data-r="c" d="M72 54 Q80 40 94 38 Q84 50 80 64 Z"/>`,
  apple: `<path d="M100 54 Q102 36 112 26" fill="none"/><path data-r="b" d="M106 44 Q130 22 150 34 Q128 54 106 44 Z"/><path data-r="main" d="M100 56 Q70 38 46 62 Q24 96 44 140 Q62 176 100 166 Q138 176 156 140 Q176 96 154 62 Q130 38 100 56 Z"/>`,
  kite: `<path d="M100 166 Q80 180 96 192" fill="none"/><path data-r="main" d="M100 20 L156 92 L100 166 L44 92 Z"/><path data-r="b" d="M100 20 L156 92 L100 92 Z"/><path data-r="c" d="M100 92 L44 92 L100 166 Z"/><circle data-r="d" cx="86" cy="182" r="8"/>`,
  boat: `<path d="M100 40 L100 124" fill="none"/><path data-r="b" d="M104 44 L104 118 L156 118 Z"/><path data-r="c" d="M96 60 L96 118 L56 118 Z"/><path data-r="main" d="M30 126 L170 126 L148 160 L52 160 Z"/><path data-r="d" d="M10 172 Q40 160 70 172 T130 172 T190 172 L190 192 L10 192 Z"/>`,
  tree: `<rect data-r="b" x="88" y="118" width="24" height="64" rx="4"/><path data-r="main" d="M100 22 Q138 22 146 56 Q176 66 166 100 Q170 132 134 134 Q118 148 100 140 Q82 148 66 134 Q30 132 34 100 Q24 66 54 56 Q62 22 100 22 Z"/><circle data-r="c" cx="80" cy="70" r="8"/><circle data-r="c" cx="124" cy="90" r="8"/><circle data-r="c" cx="94" cy="108" r="8"/>`,
  star: `<path data-r="main" d="M100 18 L122 74 L182 76 L134 112 L152 172 L100 136 L48 172 L66 112 L18 76 L78 74 Z"/><circle data-r="b" cx="100" cy="98" r="18"/>`,
  sun: `<path data-r="b" d="${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6, b = a + Math.PI / 12, c = a - Math.PI / 12; return `M${(100 + Math.cos(c) * 52).toFixed(1)} ${(100 + Math.sin(c) * 52).toFixed(1)} L${(100 + Math.cos(a) * 88).toFixed(1)} ${(100 + Math.sin(a) * 88).toFixed(1)} L${(100 + Math.cos(b) * 52).toFixed(1)} ${(100 + Math.sin(b) * 52).toFixed(1)} Z`; }).join(' ')}"/><circle data-r="main" cx="100" cy="100" r="50"/><circle cx="84" cy="94" r="5" fill="${NK_INK}"/><circle cx="116" cy="94" r="5" fill="${NK_INK}"/><path d="M82 114 Q100 128 118 114" fill="none"/>`
};
function nkPageSvg(id, fills){
  fills = fills || {};
  let n = 0;
  const body = (NK_PAGES[id] || '').replace(/<(circle|rect|path|ellipse) data-r="([a-z]+)"/g, (m, tag, r) => `<${tag} data-r="${r}" data-ri="${n}" fill="${fills[n++] || '#ffffff'}"`);
  const shade = (NK_PAGES[id] || '').replace(/ data-r="[a-z]+"/g, '').replace(/ fill="(?!none)[^"]*"/g, '');
  return `<svg viewBox="0 0 200 200" stroke="${NK_INK}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"><defs>
    <radialGradient id="nkclay" cx=".34" cy=".28" r=".85"><stop offset="0" stop-color="#fff" stop-opacity=".7"/><stop offset=".42" stop-color="#fff" stop-opacity="0"/>
    <stop offset=".8" stop-color="#1e1b4b" stop-opacity=".06"/><stop offset="1" stop-color="#1e1b4b" stop-opacity=".22"/></radialGradient></defs>
    ${body}<g fill="url(#nkclay)" stroke="none" pointer-events="none">${shade}</g></svg>`;
}
// The color words of the Nest, by name: their hex values and blobs come from docs/nest/nest.js.
function nkColors(){
  const out = {};
  EQ_NEST.units.forEach(u => (u.words || []).forEach(w => { if (w.color) out[w.en] = w; }));
  return out;
}
const nkArtKey = () => 'eq_nest_art_' + nkKid();

// ---------- Making a day ----------
// The day id the server gives: 'n04' (new words), 'n04.b' / '.c' / '.d', or 'r02' (a review).
function nkDay(id){
  const m = /^([nr]\d\d)(?:\.([bcd]))?$/.exec(String(id || ''));
  return m ? { unit: m[1], day: m[1][0] === 'r' ? 'r' : (m[2] || 'a') } : null;
}
// Words to bring back on a review day: missed more than found, or not met for a week (dash.nest.known from the server).
function nkDue(u, core){
  const stats = (dash && dash.nest && dash.nest.known) || {}, idx = EQ_NEST.units.indexOf(u), have = new Set(nestWordsOf(u, core).map(w => w.id));
  const old = [].concat(...EQ_NEST.units.slice(0, Math.max(0, idx)).filter(x => !x.review).map(x => core ? nestCore(x) : x.words));
  const now = Date.now();
  return old.filter(w => !have.has(w.id) && stats[w.id]).map(w => {
    const [ok, miss, last] = stats[w.id], age = (now - new Date(last).getTime()) / 864e5;
    return { w, due: miss > ok ? 100 + miss - ok : age >= 7 ? age : -1 };
  }).filter(x => x.due > 0).sort((a, b) => b.due - a.due).slice(0, 3).map(x => x.w);
}
const nkOpts = (w, pool, k) => shuffle([w].concat(shuffle(pool.filter(x => x.id !== w.id && x.en !== w.en)).slice(0, k - 1)));
function nkRounds(words, n){
  let order = [];
  while (order.length < n && words.length) {
    const more = shuffle(words);
    if (order.length && more[0].id === order[order.length - 1].id) more.push(more.shift());
    order = order.concat(more);
  }
  return order.slice(0, n);
}
// Another unit with a different theme, for the sorting boxes and "which one is different" (earlier units first).
function nkOther(u, need){
  const themes = new Set([].concat(u.review ? u.review.map(id => (nestUnit(id) || {}).theme) : [u.theme]));
  const i = EQ_NEST.units.indexOf(u), ok = x => !x.review && !themes.has(x.theme) && x.theme !== 'hello' && x.words.filter(w => w.pic).length >= need;
  return nkPick(EQ_NEST.units.slice(0, i).filter(ok)) || nkPick(EQ_NEST.units.filter(ok));
}
// Every activity a session can have, in the order of the day (NE.only plays one of them, for the teacher's preview).
function nkCompose(u, day, only){
  const age = NE.age, core = age <= 3, k = NE.k, review = !!u.review;
  const W = nestWordsOf(u, core), pool = review ? W.concat(nkDue(u, core)) : W, steps = [];
  const units = review ? u.review.map(nestUnit).filter(Boolean) : [u];
  const pics = pool.filter(w => w.pic), give = pool.filter(w => (EQ_NEST.give || []).includes(w.id));
  const sounds = (() => { const own = pool.filter(w => (EQ_NEST.sounds || {})[w.id]); if (own.length >= Math.min(k, 3)) return own;
    return Object.keys(EQ_NEST.sounds || {}).map(nkWord).filter(Boolean).filter(w => w.unit <= (u.review ? u.review[u.review.length - 1] : u.id)); })();
  const clothes = pool.filter(w => (EQ_NEST.dress || {})[w.id]);
  const add = (t, list) => list.forEach((x, i) => steps.push(Object.assign({ t, first: i === 0 }, x)));
  const find = (n, from) => add('find', nkRounds(from || pool, n).map(w => ({ w, opts: nkOpts(w, from || pool, k) })));
  const A = {
    meet: () => { add('meet', W.map(w => ({ w }))); if (u.phrase && !core) add('phrase', [{}]); },
    find: n => find(n || 6),
    peek: n => add('peek', nkRounds(pool, n || 3).map(w => ({ w, opts: core ? null : nkOpts(w, pool, k) }))),
    say: n => { const says = shuffle(W).slice(0, n || 3).map(w => ({ w, clip: 'w-' + w.id }));
      if (!core && !review && u.phrase && says.length) says[says.length - 1] = { phrase: true, clip: 'p-' + u.id };
      add('say', says); },
    move: () => { const M = EQ_NEST.moves || {}, mv = review ? shuffle([...new Set([].concat(...units.map(x => x.moves || [])))]) : (u.moves || []);
      add('move', mv.filter(m => M[m]).slice(0, core ? 2 : 3).map(m => ({ id: m, m: M[m] }))); },
    give: n => add('give', nkRounds(give, n || 3).map(w => ({ w, opts: nkOpts(w, give.length >= k ? give : pics, Math.min(k, 3)) }))),
    pop: () => add('pop', [{ targets: nkRounds(pool, core ? 3 : 4), pool }]),
    sound: n => add('sound', nkRounds(sounds, n || 3).map(w => ({ w, opts: nkOpts(w, sounds, k) }))),
    sort: () => { const o = nkOther(u, 3); if (!o) return false; const n = age >= 6 ? 3 : 2, mine = shuffle(pics).slice(0, n), theirs = shuffle(o.words.filter(w => w.pic)).slice(0, n);
      if (mine.length < 2) return false;
      add('sort', [{ boxes: [{ icon: (review ? units[0] : u).icon, ids: mine.map(w => w.id) }, { icon: o.icon, ids: theirs.map(w => w.id) }], items: shuffle(mine.concat(theirs)) }]); },
    pairs: () => add('pairs', [{ words: shuffle(pics.length >= 3 ? pics : pool).slice(0, age >= 6 ? 4 : 3), written: age >= 6 }]),
    missing: n => add('missing', Array.from({ length: n || 2 }, () => { const b = shuffle(pics.length >= 4 ? pics : pool).slice(0, age >= 5 ? 4 : 3); return { board: b, gone: nkPick(b) }; })),
    odd: n => { const o = nkOther(u, 1); if (!o || pics.length < 3) return false;
      add('odd', Array.from({ length: n || 3 }, () => { const three = shuffle(pics).slice(0, 3), x = nkPick(o.words.filter(w => w.pic)); return { cards: shuffle(three.concat([x])), w: x }; })); },
    chant: () => { const c = units.map(x => x.id).filter(id => (EQ_NEST.chants || {})[id]); if (!c.length) return false; add('chant', [{ unit: nkPick(c) }]); },
    story: () => { const id = units.map(x => x.id).find(x => (EQ_NEST.stories || {})[x]); if (!id) return false; const st = EQ_NEST.stories[id];
      add('story', st.pages.map((p, i) => ({ unit: id, place: st.place, i, line: p[0], ws: p[1].map(nkWord).filter(Boolean) })));
      const sw = [...new Set([].concat(...st.pages.map(p => p[1])))].filter(x => x !== 'parrot').map(nkWord).filter(Boolean);
      find(2, sw.length >= 3 ? sw : pool); },
    scene: n => { const place = NK_THEME_PLACE[(review ? units[0] : u).theme] || 'playroom', on = shuffle(pool.filter(w => !w.count)).slice(0, 6);
      if (on.length < 3) return false; let g = 0, s = 0;
      const items = on.map(w => ({ w, spot: NK_SKY.has(w.id) && s < 3 ? NK_SCENE_SKY[s++] : NK_SCENE_GROUND[g++ % 6] }));
      add('scene', nkRounds(on, n || (core ? 3 : 4)).map(w => ({ w, place, items }))); },
    color: () => { const p = (EQ_NEST.color || [])[(EQ_NEST.units.indexOf(u) + (NE.day.charCodeAt(0) || 0)) % (EQ_NEST.color || [1]).length]; if (!p) return false; add('color', [{ page: p }]); },
    dress: n => { const cl = clothes.length >= 3 ? clothes : Object.keys(EQ_NEST.dress || {}).map(nkWord).filter(Boolean);
      add('dress', nkRounds(cl, n || 3).map(w => ({ w, opts: nkOpts(w, cl, Math.min(k, 3)) }))); },
    teach: n => add('teach', shuffle(pool).slice(0, n || 3).map(w => ({ w })))
  };
  if (only) {
    if (only === 'meet') A.meet(); else if (A[only] && A[only]() === false) A.find(4);
  } else if (review) {
    A.find(5);
    if (core) { A.peek(3); A.pop(); } else { A.missing(2); A.pairs(); }
    A.teach(3); A.chant();
  } else if (day === 'a') { A.meet(); A.find(6); A.peek(3); A.say(3); }
  else if (day === 'b') { A.move(); if (give.length >= 2) A.give(3); else A.pop(); A.find(4); A.say(2); }
  else if (day === 'c') { A.chant(); A.story(); A.scene(); }
  else {
    const wear = u.theme === 'clothes';
    if (age <= 3) { A.pop(); if (sounds.length >= 2) A.sound(3); else A.peek(3); if (give.length >= 2) A.give(3); else A.find(3); A.chant(); }
    else if (age <= 5) { if (A.sort() === false) A.find(4); A.pairs(); if (wear) A.dress(3); else A.color(); if (sounds.length >= 3) A.sound(3); else A.pop(); }
    else { A.pairs(); if (A.odd(3) === false) A.find(3); A.missing(2); if (wear) A.dress(3); else A.color(); }
  }
  // Coco shows the first round of a game while it is new for this kid (always for ages 2 and 3).
  const shown = new Set();
  steps.forEach(s => { if (s.first && !shown.has(s.t) && NK[s.t] && NK[s.t].demo && nkShouldDemo(s.t)) { s.demo = true; shown.add(s.t); } });
  steps.push({ t: 'done' });
  return steps;
}

// ---------- A session ----------
// id: a day id (or a unit id: its first day). preview: the teacher's page (nothing is saved). only: one activity.
function nestStart(id, preview, only){
  const d = nkDay(id), u = d && nestUnit(d.unit);
  if (!u) return;
  const n = dash.nest;
  NE = { u, dayId: id, day: d.day, si: 0, correct: 0, total: 0, res: {}, t0: Date.now(), review: !!u.review, tries: 0, heard: false,
    preview: !!preview, age: n.age, k: n.choices, words: n.words, tok: 0 };
  NE.steps = nkCompose(u, d.day, only);
  window.scrollTo(0, 0);
  nestRender(true);
}
// What Coco says when a step opens: hello at the start, an activity's short instruction the first time, then the step.
function nestPrompt(s, opening){
  const hello = opening ? ['en-hi'] : [], first = s.first ? (NK[s.t] && NK[s.t].intro) || [] : [];
  return hello.concat(first, NK[s.t] && NK[s.t].say ? NK[s.t].say(s) : []);
}
function nestRender(opening){
  if (!NE) return;
  const s = NE.steps[NE.si];
  NE.tok++;
  NE.locked = false;
  const mic = document.getElementById('nkmic'); if (mic) mic.remove();
  clearTimeout(NE.idleT); NE.idleArm = null;
  nkHandStop();
  nestMicStop();
  if (NE.chant) { NE.chant.stop(); NE.chant = null; }
  const dots = NE.steps.filter(x => x.t !== 'done').map((x, i) => `<i class="${i < NE.si ? 'ok' : i === NE.si ? 'on' : ''}"></i>`).join('');
  const cue = NK_CUE[s.t] || NK_CUE.find;
  app.innerHTML = `<div class="gscreen gplay nk nkg-${s.t}">
    <div class="row-flex between nk-top">
      <button class="btn btn-glass icon-btn" id="nkx" aria-label="Close">${icon('x')}</button>
      <div class="nk-prog">${dots}</div>
      <button class="btn btn-glass icon-btn" id="nkagain" aria-label="Listen again">${icon('speaker-high')}</button>
    </div>
    <div class="gstage nk-stage" id="nkst"></div>
    <div class="gdock nk-dock">
      <div class="row-flex nk-coach" id="nkcoach"><img class="nk-coco" id="nkcoco" src="${cocoSrc(s.t === 'done' ? 'celebrate' : 'happy')}" alt="Coco" draggable="false">
        <span class="nk-cue ${cue[1]}" id="nkcue">${icon(cue[0], 'duotone')}</span></div>
      <div class="nk-slot" id="nkslot"></div>
    </div>
  </div>`;
  document.getElementById('nkx').onclick = nestExit;
  document.getElementById('nkagain').onclick = () => { const k = s.t === 'done' ? ['en-great'] : NK[s.t].say ? NK[s.t].say(s) : []; nestPlay(k.length ? k : (NK[s.t].intro || ['en-listen'])); };
  nkTipBind(s);
  if (s.first && s.t !== 'done') { nkSeenAdd(s.t); const c = document.getElementById('nkcue'); if (c) c.classList.add('on'); }
  NK[s.t].render(s, opening);
}
// A long press on Coco: a short Hebrew note for the grown-up (text only).
function nkTipBind(s){
  const c = document.getElementById('nkcoach'), hint = ((window.EQ_NEST || {}).hints || {})[s.t];
  if (!c || !hint) return;
  let t = null;
  const show = () => {
    let tip = document.getElementById('nktip');
    if (tip) { tip.remove(); return; }
    tip = document.createElement('div');
    tip.id = 'nktip'; tip.className = 'nk-tip he'; tip.dir = 'rtl'; tip.lang = 'he'; tip.textContent = hint;
    c.appendChild(tip);
    setTimeout(() => tip.remove(), 6000);
  };
  c.addEventListener('pointerdown', () => { t = setTimeout(show, 650); });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach(e => c.addEventListener(e, () => clearTimeout(t)));
  c.addEventListener('contextmenu', e => e.preventDefault());
}
function nestAdvance(){
  if (!NE) return;
  nestStopAudio();
  NE.si = Math.min(NE.si + 1, NE.steps.length - 1);
  nestRender(false);
}
// The end of a round: Coco celebrates, then the next step. A demo round ends with "Your turn!".
function nkWin(s, keys, wait){
  const tok = NE.tok;
  nkCoco('celebrate');
  buzz(true);
  NE.locked = true;
  nestPlay(keys.concat(s.demo ? ['en-turn'] : []), () => setTimeout(() => { if (NE && NE.tok === tok) nestAdvance(); }, wait || 150));
}
function nkMiss(keys){ buzz(false); nkCoco('thinking'); nestPlay(keys); }
// The main button in the dock: next (blue), done (green), home (gold).
function nkBtn(kind, label, on){
  const sl = nkSlot(), cls = kind === 'did' || kind === 'said' ? 'said' : kind === 'home' ? 'home' : '';
  const ic = { next: 'arrow-right', did: 'check', said: 'hand-waving', home: 'house', thumb: 'thumbs-up', check: 'check' }[kind];
  sl.innerHTML = kind === 'thumb' ? `<button class="nk-thumb" id="nkbtn" aria-label="${label}">${icon(ic, 'bold')}</button>`
    : `<button class="nk-next ${cls}" id="nkbtn" aria-label="${label}">${icon(ic, 'bold')}</button>`;
  const b = document.getElementById('nkbtn');
  b.onclick = on;
  return b;
}
const nkFill = html => { const st = nkStage(); st.innerHTML = `<div class="nk-fill">${html}</div>`; return st.firstChild; };

// ---------- The activities ----------
// Each: render(step, opening); say(step) = the step's own clips; intro = the instruction the first time; demo = Coco
// can do the first round himself.

NK.meet = {
  say: s => ['w-' + s.w.id], intro: ['en-meet'],
  render(s, opening){
    nkFill(`<button class="nk-card big" id="nkpic">${nestPic(s.w)}</button>${NE.words ? `<div class="nk-word">${esc(s.w.en)}</div>` : ''}`);
    const pic = document.getElementById('nkpic'), nx = nkBtn('next', 'Next', nestAdvance);
    pic.onclick = () => { pic.classList.remove('pop'); void pic.offsetWidth; pic.classList.add('pop'); nestPlay(['w-' + s.w.id]); };
    nestPlay(nestPrompt(s, opening), () => { nx.classList.add('ready'); if (nkLive(s)) nkIdle(s, nx); });
  }
};
NK.phrase = {
  say: () => ['p-' + NE.u.id],
  render(s){
    nkFill(`<button class="nk-card big" id="nkpic">${nestPhrasePic(NE.u)}</button>${NE.words ? `<div class="nk-word long">${esc(NE.u.phrase.en)}</div>` : ''}`);
    const nx = nkBtn('next', 'Next', nestAdvance), pic = document.getElementById('nkpic');
    pic.onclick = () => { pic.classList.remove('pop'); void pic.offsetWidth; pic.classList.add('pop'); nestPlay(['p-' + NE.u.id]); };
    nestPlay(nestPrompt(s), () => { nx.classList.add('ready'); if (nkLive(s)) nkIdle(s, nx); });
  }
};

// Find it: tap the picture Coco asks for. Shared by the story questions.
NK.find = {
  say: s => ['f-' + s.w.id], intro: ['en-find'], demo: true,
  render(s, opening){ nkChoice(s, opening, ['en-try', 'f-' + s.w.id]); }
};
// Two to four pictures, one is right (Find it, Who says that?). again: what Coco says after a wrong tap.
function nkChoice(s, opening, again){
  nkFill(`<div class="nk-opts n${s.opts.length}">${s.opts.map((o, i) => `<button class="nk-card" data-nkopt="${i}">${nestPic(o)}<span class="nk-cap"></span></button>`).join('')}</div>`);
  NE.tries = 0;
  const right = () => app.querySelector(`[data-nkopt="${s.opts.findIndex(o => o.id === s.w.id)}"]`);
  app.querySelectorAll('[data-nkopt]').forEach(b => b.onclick = () => nkTap(b, s, false, again));
  nestPlay(nestPrompt(s, opening), () => {
    if (!nkLive(s)) return;
    if (s.demo) { NE.locked = true; nkHandTap(right(), () => nkTap(right(), s, true, again)); }
    else nkIdle(s, right);
  });
}
function nkTap(b, s, byCoco, again){
  if (!NE || !b || b.disabled || (NE.locked && !byCoco)) return;
  const o = s.opts[Number(b.dataset.nkopt)], ok = o.id === s.w.id;
  NE.tries++;
  if (NE.words) b.querySelector('.nk-cap').textContent = o.en;
  if (!ok) { b.disabled = true; b.classList.add('no'); nkMiss(again); return; }
  if (!s.demo) nkScore(s.w.id, NE.tries === 1);
  b.classList.add('yes');
  app.querySelectorAll('[data-nkopt]').forEach(x => { if (x !== b) x.classList.add('away'); });
  nkWin(s, ['w-' + s.w.id, nkPraise()]);
}

NK.move = {
  say: s => ['en-move', 'm-' + s.id], intro: ['en-with'],
  render(s){
    nkFill(`<button class="nk-card big" id="nkpic">${nestPic(s.m)}</button>${NE.words ? `<div class="nk-word long">${esc(s.m.en)}</div>` : ''}`);
    NE.heard = false;
    const did = nkBtn('did', 'I did it', () => { if (!nkLive(s) || NE.heard) return; NE.heard = true; nkWin(s, [nkPraise()]); });
    const pic = document.getElementById('nkpic');
    pic.onclick = () => { pic.classList.remove('pop'); void pic.offsetWidth; pic.classList.add('pop'); nestPlay(['m-' + s.id]); };
    nestPlay(nestPrompt(s), () => setTimeout(() => { if (nkLive(s)) { did.classList.add('ready'); nkIdle(s, did); } }, 1500));
  }
};

// Say it: with the microphone on, a voice that is loud enough counts; otherwise (or anytime) the big button.
NK.say = {
  say: s => [s.clip], intro: ['en-say'],
  render(s){
    const pic = s.phrase ? nestPhrasePic(NE.u) : nestPic(s.w), txt = s.phrase ? NE.u.phrase.en : s.w.en;
    nkFill(`<div class="nk-ring" id="nkring"><button class="nk-card big" id="nkpic">${pic}</button></div>${NE.words ? `<div class="nk-word${s.phrase ? ' long' : ''}">${esc(txt)}</div>` : ''}`);
    NE.heard = false;
    nkBtn('said', 'I said it', () => nkHeard(s));
    document.getElementById('nkpic').onclick = () => nestPlay([s.clip]);
    nestPlay(nestPrompt(s), () => nkListen(s));
  }
};
function nkListen(s){
  if (!nkLive(s)) return;
  const pref = store.get('eq_nest_mic'), b = document.getElementById('nkbtn');
  if (pref === 'off' || !(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) { if (b) b.classList.add('ready'); return; }
  if (pref !== 'on') return nkMicAsk(s);
  nestMicStart(() => nkHeard(s)).then(on => { if (!on) { store.set('eq_nest_mic', 'off'); const x = document.getElementById('nkbtn'); if (x) x.classList.add('ready'); } });
}
// The first time: a sentence for the grown-up (Hebrew text) before the phone asks for the microphone.
function nkMicAsk(s){
  const ov = document.createElement('div');
  ov.className = 'overlay';
  ov.id = 'nkmic';
  ov.innerHTML = `<div class="sheet glass he" dir="rtl" lang="he" style="display:grid;gap:12px">
    <h2>קוקו רוצה לשמוע</h2>
    <div class="sub" style="margin:0">כדי שהטלפון ידע שהילד אמר את המילה, צריך לאשר את המיקרופון. הוא רק בודק שיש קול: שום דבר לא מוקלט ולא נשלח.</div>
    <button class="btn btn-primary btn-block" id="nkmicon">${icon('microphone')} לאשר מיקרופון</button>
    <button class="btn btn-glass btn-block" id="nkmicoff">בלי מיקרופון</button></div>`;
  document.body.appendChild(ov);
  ov.querySelector('#nkmicon').onclick = () => { ov.remove(); store.set('eq_nest_mic', 'on'); nkListen(s); };
  ov.querySelector('#nkmicoff').onclick = () => { ov.remove(); store.set('eq_nest_mic', 'off'); nkListen(s); };
}
function nkHeard(s){
  if (!nkLive(s) || NE.heard) return;
  NE.heard = true;
  nestMicStop();
  const ring = document.getElementById('nkring'); if (ring) ring.classList.add('heard');
  nkWin(s, [nkPraise()]);
}

// Give it to me: the kid's pet asks for something; drag it to the pet (or tap it: it flies there).
NK.give = {
  say: s => ['g-' + s.w.id], intro: ['en-give'], demo: true,
  render(s, opening){
    nkFill(`<div class="nk-pet" id="nkpet">${nkPet('happy')}</div>
      <div class="nk-row n${s.opts.length}">${s.opts.map((o, i) => `<button class="nk-card" data-nkopt="${i}">${nestPic(o)}</button>`).join('')}</div>`);
    const pet = document.getElementById('nkpet'), right = () => app.querySelector(`[data-nkopt="${s.opts.findIndex(o => o.id === s.w.id)}"]`);
    NE.tries = 0;
    const take = (b, byCoco) => {
      if (!nkLive(s) || (NE.locked && !byCoco)) return;
      const o = s.opts[Number(b.dataset.nkopt)];
      NE.tries++;
      if (o.id !== s.w.id) { b.classList.remove('wig'); void b.offsetWidth; b.classList.add('wig'); nkPetMood(pet, 'thinking'); nkMiss(['en-try', 'g-' + s.w.id]); return; }
      if (!s.demo) nkScore(s.w.id, NE.tries === 1);
      NE.locked = true;
      nkFly(b, pet, () => {
        const food = NK_FOOD.has(o.id);
        if (food) { nkSfx('munch'); pet.classList.add('munch'); }
        nkPetMood(pet, 'celebrate');
        nkWin(s, ['w-' + o.id, food ? 'en-yummy' : 'en-thanks']);
      });
    };
    app.querySelectorAll('[data-nkopt]').forEach(b => nkDrag(b, { targets: () => [pet], drop: x => take(x), tap: x => take(x) }));
    nestPlay(nestPrompt(s, opening), () => {
      if (!nkLive(s)) return;
      if (s.demo) { NE.locked = true; nkHandDrag(right(), pet, () => take(right(), true)); }
      else nkIdle(s, right, () => pet);
    });
  }
};

// Peekaboo: ages 2 and 3 tap the bush that wiggles and see who hides there; from 4, a friend peeks out of every bush and
// Coco asks where one of them is.
NK.peek = {
  say: s => s.opts ? ['f-' + s.w.id] : ['en-who'], intro: ['en-peek'], demo: true,
  render(s, opening){
    const list = s.opts || shuffle([s.w].concat(Array(nkKidBushes() - 1).fill(null)));
    const TINT = ['rgba(99,102,241,.5)', 'rgba(236,72,153,.45)', 'rgba(20,184,166,.5)'], bush = i => `<span class="bk" style="--tint:${TINT[i % 3]}"></span>`;
    nkFill(`<div class="nk-bushes">${list.map((o, i) => `<button class="nk-bush${o ? '' : ' hidden'}${!s.opts && o ? ' wiggle' : ''}" data-nkb="${i}">
      <span class="pk">${o ? nestPic(o) : ''}</span>${bush(i)}</button>`).join('')}</div>`);
    NE.tries = 0;
    const idx = list.findIndex(o => o && o.id === s.w.id), right = () => app.querySelector(`[data-nkb="${idx}"]`);
    const tap = (b, byCoco) => {
      if (!nkLive(s) || (NE.locked && !byCoco)) return;
      const o = list[Number(b.dataset.nkb)];
      if (!o) { nkSfx('rustle'); b.classList.remove('wig'); return; }
      NE.tries++;
      if (o.id !== s.w.id) { b.classList.add('out'); nkSfx('boing'); nkMiss(['w-' + o.id, 'en-try', 'f-' + s.w.id]); setTimeout(() => b.classList.replace('out', 'no'), 1400); return; }
      if (s.opts && !s.demo) nkScore(s.w.id, NE.tries === 1);
      b.classList.remove('wiggle'); b.classList.add('out');
      nkSfx('boing');
      nkWin(s, ['en-peek', 'w-' + o.id].concat(s.opts ? [nkPraise()] : []), 500);
    };
    app.querySelectorAll('[data-nkb]').forEach(b => b.onclick = () => tap(b));
    nestPlay(nestPrompt(s, opening), () => {
      if (!nkLive(s)) return;
      if (s.demo) { NE.locked = true; nkHandTap(right(), () => tap(right(), true)); }
      else nkIdle(s, right);
    });
  }
};
const nkKidBushes = () => NE.age <= 3 ? 2 : 3;

// Who says that? Coco makes a sound; tap who makes it.
NK.sound = {
  say: s => ['s-' + s.w.id, 'en-whosays'], demo: true,
  render(s, opening){ nkChoice(s, opening, ['en-try', 's-' + s.w.id]); }
};

// Pop it: bubbles float up slowly (no clock); pop the one with the picture Coco asks for. A few targets in a row.
NK.pop = {
  say: s => ['f-' + s.targets[s.ti || 0].id], intro: ['en-popit'], demo: true,
  render(s, opening){
    s.ti = 0;
    const wrap = nkFill(`<div class="nk-bubbles" id="nkbub"></div>`), box = document.getElementById('nkbub');
    // Lanes side by side, two bubbles a lane, half a trip apart, so they never cover each other.
    const L = NE.age <= 3 ? 3 : 4, n = L * 2, lanes = shuffle(Array.from({ length: L }, (_, i) => i));
    let tries = 0, demoDone = !s.demo;
    const target = () => s.targets[s.ti];
    const fillBub = (b, w) => { b.dataset.w = w.id; b.innerHTML = nestPic(w); };
    // Each bubble has a lane and a speed; when it leaves the top it comes back with another picture, and the target is
    // always on the screen at least twice.
    const pickFor = () => { const on = [...box.children].map(x => x.dataset.w), t = target();
      return on.filter(x => x === t.id).length < 2 ? t : nkPick(s.pool.length > 1 ? s.pool.filter(w => w.id !== t.id) : s.pool); };
    for (let i = 0; i < n; i++) {
      const b = document.createElement('button');
      b.className = 'nk-bub';
      const lane = lanes[i % L], dur = 9 + lane * .9;
      b.style.left = `calc((100% - min(30cqmin,150px)) * ${lane / (L - 1)})`;
      b.style.animationDuration = dur + 's';
      b.style.animationDelay = -((i >= L ? .5 : 0) + lane * .17) * dur + 's';
      box.appendChild(b);
      fillBub(b, i < 2 ? target() : pickFor());
      b.addEventListener('animationiteration', () => fillBub(b, pickFor()));
      b.onclick = () => popIt(b);
    }
    const popIt = (b, byCoco) => {
      if (!nkLive(s) || (NE.locked && !byCoco) || b.classList.contains('burst')) return;
      const t = target();
      if (b.dataset.w !== t.id) { tries++; nkSfx('rustle'); b.classList.add('miss'); setTimeout(() => b.classList.remove('miss'), 700); nkMiss(['en-try', 'f-' + t.id]); return; }
      if (demoDone) nkScore(t.id, tries === 0);
      tries = 0;
      const m = getComputedStyle(b).transform;
      b.style.setProperty('--at', m === 'none' ? 'translateY(0)' : m);
      b.classList.add('burst');
      nkSfx('pop'); buzz(true); nkCoco('celebrate');
      setTimeout(() => { b.style.animationDelay = '0s'; b.classList.remove('burst'); fillBub(b, pickFor()); }, 340);
      NE.locked = true;
      const last = s.ti >= s.targets.length - 1, wasDemo = !demoDone;
      demoDone = true;
      box.classList.remove('hold');
      if (last) return nkWin(s, ['w-' + t.id, nkPraise()]);
      nestPlay(['w-' + t.id].concat(wasDemo ? ['en-turn'] : [nkPraise()]), () => { if (!nkLive(s)) return; NE.locked = false; nkCoco('happy'); s.ti++; ask(); });
    };
    const ask = () => nestPlay(['f-' + target().id], () => {
      if (!nkLive(s)) return;
      if (!demoDone) {
        box.classList.add('hold');
        const b = [...box.children].find(x => x.dataset.w === target().id && x.getBoundingClientRect().top > box.getBoundingClientRect().top + 20 && x.getBoundingClientRect().bottom < box.getBoundingClientRect().bottom - 10);
        if (b) { NE.locked = true; nkHandTap(b, () => popIt(b, true)); } else { box.classList.remove('hold'); demoDone = true; }
      }
    });
    nestPlay(nestPrompt(s, opening).slice(0, -1), ask);
    void wrap;
  }
};

// Sort it: one picture at a time; drag it into the box it belongs to (the box shows its unit's picture).
NK.sort = {
  say: () => [], intro: ['en-sort'], demo: true,
  render(s, opening){
    s.ii = s.ii || 0;
    const icons = s.boxes.map(b => `<img src="${esc(nestPicSrc(b.icon))}" alt="" draggable="false">`);
    nkFill(`<div class="nk-sortitem" id="nksi"></div><div class="nk-boxes">${s.boxes.map((b, i) => `<div class="nk-box${i ? ' nkb2' : ''}" data-nkbox="${i}">${icons[i]}</div>`).join('')}</div>`);
    const boxes = () => [...app.querySelectorAll('[data-nkbox]')];
    let tries = 0, demo = !!s.demo;
    const show = () => {
      const w = s.items[s.ii], si = document.getElementById('nksi');
      si.innerHTML = `<button class="nk-card" id="nkitem">${nestPic(w)}</button>`;
      const it = document.getElementById('nkitem');
      const into = i => s.boxes[i].ids.includes(w.id);
      const drop = (el, box, byCoco) => {
        if (!nkLive(s) || (NE.locked && !byCoco)) return;
        const i = Number(box.dataset.nkbox);
        if (!into(i)) { tries++; it.classList.remove('back'); void it.offsetWidth; it.classList.add('back'); nkMiss(['en-try', 'w-' + w.id]); return; }
        if (!demo) nkScore(w.id, tries === 0);
        tries = 0;
        NE.locked = true;
        nkFly(it, box, () => {
          box.classList.add('gulp'); setTimeout(() => box.classList.remove('gulp'), 420);
          buzz(true); nkCoco('celebrate');
          const wasDemo = demo; demo = false;
          if (s.ii >= s.items.length - 1) return nkWin(s, [nkPraise()]);
          nestPlay(wasDemo ? ['en-turn'] : [nkPraise()], () => { if (!nkLive(s)) return; NE.locked = false; nkCoco('happy'); s.ii++; show(); });
        });
      };
      nkDrag(it, { targets: boxes, drop: (el, box) => drop(el, box), tap: () => nestPlay(['w-' + w.id]) });
      nestPlay(['w-' + w.id], () => {
        if (!nkLive(s)) return;
        const goal = boxes()[into(0) ? 0 : 1];
        if (demo) { NE.locked = true; nkHandDrag(it, goal, () => drop(it, goal, true)); }
        else nkIdle(s, () => document.getElementById('nkitem'), () => goal);
      });
    };
    nestPlay(nestPrompt(s, opening), show);
  }
};

// Pairs: turn two cards; the same picture stays up. From age 6 a picture pairs with its written word.
NK.pairs = {
  say: () => [], intro: ['en-pairs'], demo: true,
  render(s, opening){
    const cards = shuffle([].concat(...s.words.map(w => [{ w, txt: false }, { w, txt: s.written }])));
    nkFill(`<div class="nk-pairs${cards.length > 6 ? ' c4' : ''}">${cards.map((c, i) => `<button class="nk-pc" data-nkc="${i}"><span class="in">
      <span class="bc"><img src="${cocoSrc('happy')}" alt="" draggable="false"></span>
      <span class="fc">${c.txt ? `<b>${esc(c.w.en)}</b>` : nestPic(c.w)}</span></span></button>`).join('')}</div>`);
    let open = [], got = 0;
    const flip = (b, byCoco) => {
      if (!nkLive(s) || (NE.locked && !byCoco) || b.classList.contains('up')) return;
      const c = cards[Number(b.dataset.nkc)];
      b.classList.add('up'); nkSfx('flip');
      nestPlay(['w-' + c.w.id]);
      open.push(b);
      if (open.length < 2) return;
      const [x, y] = open.map(e => cards[Number(e.dataset.nkc)]);
      const pair = open; open = [];
      NE.locked = true;
      setTimeout(() => {
        if (!nkLive(s)) return;
        if (x.w.id === y.w.id) {
          pair.forEach(e => e.classList.add('got')); got++; buzz(true); nkCoco('celebrate');
          if (got === s.words.length) return nkWin(s, ['w-' + x.w.id, 'en-great']);
          nestPlay([nkPraise()], () => { NE.locked = false; nkCoco('happy'); });
        } else { pair.forEach(e => e.classList.remove('up')); NE.locked = false; }
      }, 1000);
    };
    app.querySelectorAll('[data-nkc]').forEach(b => b.onclick = () => flip(b));
    nestPlay(nestPrompt(s, opening), () => {
      if (!nkLive(s)) return;
      if (s.demo) {
        const w = cards[0].w, two = [...app.querySelectorAll('[data-nkc]')].filter(b => cards[Number(b.dataset.nkc)].w.id === w.id);
        NE.locked = true;
        nkHandTap(two[0], () => { flip(two[0], true); setTimeout(() => nkHandTap(two[1], () => { flip(two[1], true); setTimeout(() => nestPlay(['en-turn']), 1300); }), 700); });
      } else nkIdle(s, () => app.querySelector('.nk-pc:not(.up)'));
    });
  }
};

// What's missing? Look at the pictures, close your eyes, one is gone: which one?
NK.missing = {
  say: () => ['en-missing'], intro: [], demo: true,
  render(s, opening){
    const opts = shuffle([s.gone].concat(shuffle(s.board.filter(w => w.id !== s.gone.id)).slice(0, 2)));
    nkFill(`<div class="nk-board n${s.board.length === 3 ? 3 : 2}" id="nkboard">${s.board.map((w, i) => `<div class="nk-card" data-nkm="${i}">${nestPic(w)}</div>`).join('')}
      <div class="nk-curtain" id="nkcur"><img src="${cocoSrc('sleepy')}" alt=""></div></div>
      <div class="nk-row n3" id="nkmo" style="visibility:hidden">${opts.map((o, i) => `<button class="nk-card" data-nkopt="${i}">${nestPic(o)}</button>`).join('')}</div>`);
    NE.tries = 0; NE.locked = true;
    const cur = document.getElementById('nkcur'), tok = NE.tok;
    nestPlay((opening ? ['en-hi'] : []).concat(['en-look']), () => setTimeout(() => {
      if (!NE || NE.tok !== tok) return;
      cur.classList.add('on'); nkSfx('whoosh');
      nestPlay(['en-close'], () => setTimeout(() => {
        if (!NE || NE.tok !== tok) return;
        app.querySelector(`[data-nkm="${s.board.indexOf(s.gone)}"]`).classList.add('gone');
        cur.classList.remove('on');
        document.getElementById('nkmo').style.visibility = 'visible';
        NE.locked = false;
        const right = () => app.querySelector(`[data-nkopt="${opts.indexOf(s.gone)}"]`);
        nestPlay(['en-open', 'en-missing'], () => {
          if (!nkLive(s)) return;
          if (s.demo) { NE.locked = true; nkHandTap(right(), () => pick(right(), true)); } else nkIdle(s, right);
        });
      }, 900));
    }, 1600));
    const pick = (b, byCoco) => {
      if (!nkLive(s) || (NE.locked && !byCoco) || b.disabled) return;
      const o = opts[Number(b.dataset.nkopt)];
      NE.tries++;
      if (o.id !== s.gone.id) { b.disabled = true; b.classList.add('no'); nkMiss(['en-try', 'en-missing']); return; }
      if (!s.demo) nkScore(o.id, NE.tries === 1);
      b.classList.add('yes');
      app.querySelector('.gone').classList.remove('gone');
      nkWin(s, ['w-' + o.id, nkPraise()]);
    };
    app.querySelectorAll('[data-nkopt]').forEach(b => b.onclick = () => pick(b));
  }
};

// Which one is different? Three of a kind and one from another unit.
NK.odd = {
  say: () => ['en-odd'], demo: true,
  render(s, opening){
    nkFill(`<div class="nk-four">${s.cards.map((o, i) => `<button class="nk-card" data-nkopt="${i}">${nestPic(o)}</button>`).join('')}</div>`);
    NE.tries = 0;
    const right = () => app.querySelector(`[data-nkopt="${s.cards.indexOf(s.w)}"]`);
    const pick = (b, byCoco) => {
      if (!nkLive(s) || (NE.locked && !byCoco) || b.disabled) return;
      const o = s.cards[Number(b.dataset.nkopt)];
      NE.tries++;
      if (o !== s.w) { b.disabled = true; b.classList.add('no'); nkMiss(['w-' + o.id, 'en-try', 'en-odd']); return; }
      if (!s.demo) nkScore(o.id, NE.tries === 1);
      b.classList.add('yes', 'wig');
      nkWin(s, ['w-' + o.id, nkPraise()]);
    };
    app.querySelectorAll('[data-nkopt]').forEach(b => b.onclick = () => pick(b));
    nestPlay(nestPrompt(s, opening), () => {
      if (!nkLive(s)) return;
      if (s.demo) { NE.locked = true; nkHandTap(right(), () => pick(right(), true)); } else nkIdle(s, right);
    });
  }
};

// The chant: drums made in code, Coco says a line on every second bar, its picture lights up (tap it). Twice: listen,
// then sing along.
NK.chant = {
  say: () => [],
  render(s, opening){
    const lines = EQ_NEST.chants[s.unit], ws = lines.map(l => nkWord(l[1]) || { id: l[1], pic: l[1] });
    nkFill(`<div class="nk-chant">${ws.map((w, i) => `<button class="nk-card" data-nkl="${i}">${nestPic(w)}</button>`).join('')}</div>
      <div class="nk-beat" id="nkbeat"><i></i><i></i><i></i><i></i></div>`);
    app.querySelectorAll('[data-nkl]').forEach(b => b.onclick = () => {
      b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
      if (b.classList.contains('lit')) { nkSfx('pop'); buzz(true); }
    });
    const nx = nkBtn('next', 'Next', () => nkLive(s) && nkWin(s, [nkPraise()]));
    const tok = NE.tok, bpm = 96, beat = 60 / bpm, ctx = nkCtx();
    let t0 = 0, timer = 0, b = 0, stopped = false;
    const dots = [...document.querySelectorAll('#nkbeat i')];
    // The drums: scheduled a little ahead on the audio clock; the dots follow the beat.
    const tick = () => {
      if (stopped || !ctx) return;
      while (t0 + b * beat < ctx.currentTime + .25) {
        const at = t0 + b * beat, q = b % 4;
        nkSfx(q === 0 || q === 2 ? 'kick' : 'snare', at); nkSfx('hat', at + beat / 2);
        const d = dots[q]; setTimeout(() => { dots.forEach(x => x.classList.remove('on')); if (d) d.classList.add('on'); }, Math.max(0, (at - ctx.currentTime) * 1000));
        b++;
      }
      timer = setTimeout(tick, 60);
    };
    NE.chant = { stop(){ stopped = true; clearTimeout(timer); dots.forEach(x => x.classList.remove('on')); } };
    const lit = i => app.querySelectorAll('[data-nkl]').forEach((x, j) => x.classList.toggle('lit', j === i));
    // A line starts on the next bar; the one after it waits for the bar after the line ends.
    const nextBar = () => { if (!ctx) return 0; const bar = beat * 4, now = ctx.currentTime - t0; return Math.max(0, (Math.ceil((now + .05) / bar) * bar - now) * 1000); };
    let pass = 0, li = 0;
    const line = () => {
      if (!NE || NE.tok !== tok) return;
      if (li >= lines.length) {
        lit(-1); pass++; li = 0;
        if (pass >= 2) { NE.chant.stop(); nx.classList.add('ready'); nkIdle(s, nx); return; }
        return nestPlay(['en-sing'], () => setTimeout(line, nextBar()));
      }
      lit(li);
      nestPlay(['c-' + s.unit + '-' + li], () => { li++; setTimeout(line, nextBar()); });
    };
    nestPlay((opening ? ['en-hi'] : []).concat(['en-listen']), () => {
      if (!NE || NE.tok !== tok) return;
      if (ctx) { t0 = ctx.currentTime + .1; tick(); }
      setTimeout(line, ctx ? beat * 4 * 1000 : 0);
    });
  }
};

// The story: a page at a time in a place drawn in code; tap a picture to hear it. Ages 6 and 7 also see the line.
NK.story = {
  say: s => ['t-' + s.unit + '-' + s.i], intro: ['en-story'],
  render(s, opening){
    const spots = NK_STORY_SPOTS[Math.min(s.ws.length, 3) - 1] || NK_STORY_SPOTS[0];
    const pl = nkPlace(s.place, s.ws.map(w => w.pic || w.id));
    nkFill(`<div class="nk-scene" style="${pl.style}">${pl.html}${s.ws.slice(0, 3).map((w, i) => nkItem(w, spots[i], i)).join('')}</div>${NE.words ? `<div class="nk-line">${esc(s.line)}</div>` : ''}`);
    app.querySelectorAll('[data-nki]').forEach(b => b.onclick = () => {
      const w = s.ws[Number(b.dataset.nki)];
      b.classList.remove('wig'); void b.offsetWidth; b.classList.add('wig');
      nestPlay(['w-' + w.id]);
    });
    const last = s.i === EQ_NEST.stories[s.unit].pages.length - 1;
    const nx = nkBtn('next', 'Next', () => { if (!nkLive(s)) return; if (last) nestPlay(['en-theend'], nestAdvance); else nestAdvance(); });
    nestPlay(nestPrompt(s, opening), () => { nx.classList.add('ready'); if (nkLive(s)) nkIdle(s, nx); });
  }
};

// The big picture: the unit's things in one place; tap the one Coco asks for.
NK.scene = {
  say: s => ['f-' + s.w.id], intro: ['en-look'], demo: true,
  render(s, opening){
    const pl = nkPlace(s.place, s.items.map(x => x.w.pic || x.w.id));
    nkFill(`<div class="nk-scene" style="${pl.style}">${pl.html}${s.items.map((x, i) => nkItem(x.w, x.spot, i)).join('')}</div>`);
    NE.tries = 0;
    const right = () => app.querySelector(`[data-nki="${s.items.findIndex(x => x.w.id === s.w.id)}"]`);
    const pick = (b, byCoco) => {
      if (!nkLive(s) || (NE.locked && !byCoco)) return;
      const w = s.items[Number(b.dataset.nki)].w;
      NE.tries++;
      b.classList.remove('wig', 'yes'); void b.offsetWidth;
      if (w.id !== s.w.id) { b.classList.add('wig'); nkMiss(['w-' + w.id, 'en-try', 'f-' + s.w.id]); return; }
      if (!s.demo) nkScore(w.id, NE.tries === 1);
      b.classList.add('yes');
      nkWin(s, ['w-' + w.id, nkPraise()]);
    };
    app.querySelectorAll('[data-nki]').forEach(b => b.onclick = () => pick(b));
    nestPlay(nestPrompt(s, opening), () => {
      if (!nkLive(s)) return;
      if (s.demo) { NE.locked = true; nkHandTap(right(), () => pick(right(), true)); } else nkIdle(s, right);
    });
  }
};

// Color it: pick the color Coco says and color his part; then color the rest freely and keep it (on this phone).
NK.color = {
  say: s => ['k-' + s.page.id], intro: ['en-color'], demo: true,
  render(s, opening){
    const C = nkColors(), target = C[s.page.color], extra = shuffle(Object.keys(C).filter(n => n !== s.page.color && !['black', 'white', 'gray'].includes(n)));
    const pots = shuffle([s.page.color].concat(extra.slice(0, NE.age <= 3 ? 1 : NE.age <= 5 ? 3 : 5)));
    nkFill(`<div class="nk-colorbox" id="nkcb">${nkPageSvg(s.page.id)}</div>
      <div class="nk-pots">${pots.map(n => `<button class="nk-pot" data-nkpot="${n}" aria-label="${n}"><img src="${esc(nestPicSrc('blob-' + C[n].color.slice(1).toLowerCase()))}" alt="" draggable="false"></button>`).join('')}</div>`);
    let brush = null, step = 0, tries = 0;  // step 0: choose Coco's color; 1: color his part; 2: free coloring
    const potOf = n => app.querySelector(`[data-nkpot="${n}"]`), mains = () => [...app.querySelectorAll('#nkcb [data-r="main"]')];
    const choose = (b, byCoco) => {
      if (!nkLive(s) || (NE.locked && !byCoco)) return;
      const n = b.dataset.nkpot;
      if (step === 0 && n !== s.page.color) { tries++; b.classList.remove('wig'); void b.offsetWidth; b.classList.add('wig'); nkMiss(['w-' + C[n].id, 'en-try', 'k-' + s.page.id]); return; }
      app.querySelectorAll('.nk-pot').forEach(x => x.classList.toggle('on', x === b));
      brush = C[n].color; nkSfx('flip');
      nestPlay(['w-' + C[n].id]);
      if (step === 0) { step = 1; if (!s.demo) nkIdle(s, () => mains()[0]); }
    };
    const paint = (r, byCoco) => {
      if (!nkLive(s) || (NE.locked && !byCoco)) return;
      if (!brush) { nkIdle(s, () => potOf(s.page.color)); return nestPlay(['k-' + s.page.id]); }
      const main = r.dataset.r === 'main';
      if (step === 1 && !main) return nestPlay(['k-' + s.page.id]);
      (main ? mains() : [r]).forEach(x => x.setAttribute('fill', brush));
      nkSfx('pop');
      if (step === 1) {
        step = 2;
        if (!s.demo) nkScore(target.id, tries === 0);
        buzz(true); nkCoco('celebrate');
        const done = nkBtn('check', 'Done', () => {
          if (!nkLive(s)) return;
          const fills = [...app.querySelectorAll('#nkcb [data-ri]')].map(x => x.getAttribute('fill'));
          const art = (store.get(nkArtKey()) || []).concat([{ id: s.page.id, fills, at: Date.now() }]).slice(-12);
          if (!NE.preview) store.set(nkArtKey(), art);
          nkWin(s, ['en-great']);
        });
        nestPlay([nkPraise()].concat(s.demo ? ['en-turn'] : ['en-color']), () => { if (nkLive(s)) { done.classList.add('ready'); NE.locked = false; } });
      }
    };
    app.querySelectorAll('.nk-pot').forEach(b => b.onclick = () => choose(b));
    app.querySelectorAll('#nkcb [data-r]').forEach(r => r.addEventListener('click', () => paint(r)));
    nestPlay(nestPrompt(s, opening), () => {
      if (!nkLive(s)) return;
      if (s.demo) { NE.locked = true; nkHandTap(potOf(s.page.color), () => { choose(potOf(s.page.color), true); setTimeout(() => nkHandTap(mains()[0], () => paint(mains()[0], true)), 500); }); }
      else nkIdle(s, () => potOf(s.page.color));
    });
  }
};

// Let's get dressed: drag the thing Coco says onto the teddy; what he wears stays on for the next rounds.
const NK_SLOT = { head: [50, 14, 34], face: [50, 34, 32], neck: [50, 47, 34], body: [50, 60, 40], hands: [50, 62, 50], legs: [50, 77, 34], feet: [50, 90, 38] };
NK.dress = {
  say: s => ['d-' + s.w.id], intro: ['en-dress'], demo: true,
  render(s, opening){
    NE.worn = NE.worn || {};
    const worn = Object.keys(NE.worn).map(slot => `<span class="nk-wear" data-slot="${slot}" style="left:${NK_SLOT[slot][0]}%;top:${NK_SLOT[slot][1]}%;width:${NK_SLOT[slot][2]}%;aspect-ratio:1">${nestPic(NE.worn[slot])}</span>`).join('');
    nkFill(`<div class="nk-teddy" id="nkted"><img src="${esc(nestPicSrc('teddy-bear'))}" alt="" draggable="false">${worn}</div>
      <div class="nk-row n${s.opts.length}">${s.opts.map((o, i) => `<button class="nk-card" data-nkopt="${i}">${nestPic(o)}</button>`).join('')}</div>`);
    const ted = document.getElementById('nkted'), right = () => app.querySelector(`[data-nkopt="${s.opts.findIndex(o => o.id === s.w.id)}"]`);
    NE.tries = 0;
    const put = (b, byCoco) => {
      if (!nkLive(s) || (NE.locked && !byCoco)) return;
      const o = s.opts[Number(b.dataset.nkopt)];
      NE.tries++;
      if (o.id !== s.w.id) { b.classList.remove('wig'); void b.offsetWidth; b.classList.add('wig'); nkMiss(['en-try', 'd-' + s.w.id]); return; }
      if (!s.demo) nkScore(o.id, NE.tries === 1);
      NE.locked = true;
      nkFly(b, ted, () => {
        const slot = EQ_NEST.dress[o.id], p = NK_SLOT[slot];
        NE.worn[slot] = o;
        ted.querySelectorAll('.nk-wear').forEach(x => { if (x.dataset.slot === slot) x.remove(); });
        ted.insertAdjacentHTML('beforeend', `<span class="nk-wear" data-slot="${slot}" style="left:${p[0]}%;top:${p[1]}%;width:${p[2]}%;aspect-ratio:1">${nestPic(o)}</span>`);
        nkWin(s, ['w-' + o.id, nkPraise()], 400);
      });
    };
    app.querySelectorAll('[data-nkopt]').forEach(b => nkDrag(b, { targets: () => [ted], drop: x => put(x), tap: x => put(x) }));
    nestPlay(nestPrompt(s, opening), () => {
      if (!nkLive(s)) return;
      if (s.demo) { NE.locked = true; nkHandDrag(right(), ted, () => put(right(), true)); } else nkIdle(s, right, () => ted);
    });
  }
};

// Teach a grown-up: the kid says the word to Mom or Dad, who taps the thumb.
NK.teach = {
  say: s => ['w-' + s.w.id], intro: ['en-teach'],
  render(s){
    nkFill(`<button class="nk-card big" id="nkpic">${nestPic(s.w)}</button>${NE.words ? `<div class="nk-word">${esc(s.w.en)}</div>` : ''}`);
    document.getElementById('nkpic').onclick = () => nestPlay(['w-' + s.w.id]);
    const th = nkBtn('thumb', 'Got it', () => { if (!nkLive(s)) return; confetti(); nkWin(s, ['en-great']); });
    nestPlay(nestPrompt(s), () => { if (nkLive(s)) nkIdle(s, th); });
  }
};

NK.done = {
  render(){
    const stars = 3;  // three every time: the effort is what counts (the score goes to the parents' view)
    nkFill(`<div class="nk-done">${dash.pet ? petArt(dash.pet, 'celebrate', 'nk-petart') : `<img src="${cocoSrc('celebrate')}" alt="">`}
      <div class="nk-stars big">${[0, 1, 2].map(i => `<span class="${i < stars ? 'on' : ''}">${icon('star', 'duotone')}</span>`).join('')}</div></div>`);
    const h = nkBtn('home', 'Home', nestExit);
    confetti(); buzz(true);
    nestPlay(['en-done', 'en-bye'], () => h.classList.add('ready'));
    nestFinish();
  }
};

// The kid's drawings on this phone (Color it), for the Nest home.
function nkAlbum(){
  const art = (store.get(nkArtKey()) || []).slice().reverse();
  const ov = document.createElement('div');
  ov.className = 'overlay';
  ov.innerHTML = `<div class="sheet glass" style="display:grid;gap:12px">
    <div class="row-flex between"><h2>${icon('palette', 'duotone')}</h2><button class="btn btn-glass icon-btn" id="nkalx" aria-label="Close">${icon('x')}</button></div>
    ${art.length ? `<div class="nk-album">${art.map(a => `<div class="nk-colorbox">${nkPageSvg(a.id, a.fills)}</div>`).join('')}</div>` : `<div class="nk-colorbox" style="width:60%;margin:auto">${nkPageSvg('star')}</div>`}
  </div>`;
  document.body.appendChild(ov);
  ov.querySelector('#nkalx').onclick = () => ov.remove();
  ov.onclick = e => { if (e.target === ov) ov.remove(); };
}
const nkHasArt = () => (store.get(nkArtKey()) || []).length > 0;
