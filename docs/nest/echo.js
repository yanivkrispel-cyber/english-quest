// Chacho repeats you (specs/nest-home.md): the kid speaks, Chacho plays it back higher, like a parrot.
// The voice lives in memory only for the replay: raw samples from the microphone (a ScriptProcessor, which every browser we
// support has, iOS Safari 15+ included, with no codec), one AudioBuffer, played once and dropped. Nothing is saved or sent,
// and there is no speech recognition. The microphone is asked for in context (the same stored choice as Say it,
// eq_nest_mic); without it the caller makes Chacho say "Hello!".
//
//   const h = nkEchoStart({ onState(s){}, onDone(ok){}, onLevel(v){} });   h.stop();
//   onState: 'ask' (the parent's sheet is up), 'listen' (the microphone is live), 'talk' (the parrot replay), 'idle' (over).
//   onDone(false): no microphone (refused, unavailable, or "no" before); called at once when nothing can be asked.
//   onDone(true): over (replayed, or nothing loud within 6 s, or the page was hidden). onLevel(0..1): the voice, while listening.
//   stop(): ends everything at once (tracks, nodes, timers, the sheet), without calling back.

const NK_ECHO = { on: .045, off: .025, start: 3, pre: .35, quiet: .7, max: 4, wait: 6, rate: 1.5, settle: .15 };
let NKECHO = null;

function nkEchoStart(opts){
  const o = opts || {};
  if (NKECHO) nkEchoEnd(NKECHO);
  const E = NKECHO = { o, alive: true, timers: [], nodes: [], stream: null, intro: false, talking: false, said: '' };
  const handle = { stop: () => nkEchoEnd(E) };
  E.state = s => { if (!E.alive || E.said === s) return; E.said = s; try { if (o.onState) o.onState(s); } catch(e){} };
  E.vis = () => { if (document.hidden) nkEchoFinish(E, true); };
  document.addEventListener('visibilitychange', E.vis);
  const pref = store.get('eq_nest_mic');
  if (pref === 'off' || !nkEchoCan()) { nkEchoFinish(E, false); return handle; }
  // Unlocked inside the tap (iPhones play Web Audio only after a touch has resumed the context).
  nkEchoCtx();
  if (pref !== 'on') nkEchoAsk(E); else nkEchoGo(E);
  return handle;
}

const nkEchoCan = () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.isSecureContext !== false
  && (window.AudioContext || window.webkitAudioContext));

function nkEchoCtx(){
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state !== 'running') audioCtx.resume();
    return audioCtx;
  } catch(e){ return null; }
}

// The first time: the sentence for the grown-up, like Say it's (the same sheet and the same stored choice).
function nkEchoAsk(E){
  const ov = document.createElement('div');
  ov.className = 'overlay';
  ov.id = 'nkmic';
  ov.innerHTML = `<div class="sheet glass he" dir="rtl" lang="he" style="display:grid;gap:12px">
    <h2>צ׳אצ׳ו רוצה לשמוע</h2>
    <div class="sub" style="margin:0">צ׳אצ׳ו חוזר על מה שהילד אומר בקול של תוכי, וגם בודק שהילד אמר את המילה במשחקים. לשם כך צריך לאשר את המיקרופון. הקול נשאר בזיכרון של הטלפון רק לכמה שניות, מושמע פעם אחת ונמחק: שום דבר לא נשמר ולא נשלח.</div>
    <button class="btn btn-primary btn-block" id="nkmicon">${icon('microphone')} לאשר מיקרופון</button>
    <button class="btn btn-glass btn-block" id="nkmicoff">בלי מיקרופון</button></div>`;
  document.body.appendChild(ov);
  E.sheet = ov;
  ov.querySelector('#nkmicon').onclick = () => { ov.remove(); E.sheet = null; store.set('eq_nest_mic', 'on'); nkEchoCtx(); nkEchoGo(E); };
  ov.querySelector('#nkmicoff').onclick = () => { ov.remove(); E.sheet = null; store.set('eq_nest_mic', 'off'); nkEchoFinish(E, false); };
  E.state('ask');
}

// Chacho says "Talk to me!", then the microphone listens. Android opens it during the line (echo cancellation keeps Chacho out,
// and nothing is captured before the line ends); iPhones open it after, because a live microphone turns the speaker down.
function nkEchoGo(E){
  if (!E.alive) return;
  let mic = isIos() ? null : nkEchoMic(E), went = false;
  const go = () => {
    if (went || !E.alive) return;
    went = true; E.intro = false;
    (mic || nkEchoMic(E)).then(ok => { if (!E.alive) return; ok ? nkEchoListen(E) : nkEchoFinish(E, false); });
  };
  E.intro = true;
  nestPlay(['en-echo'], go);
  E.timers.push(setTimeout(go, 6000));
}

function nkEchoMic(E){
  return navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } })
    .then(stream => {
      if (!E.alive) { stream.getTracks().forEach(t => t.stop()); return false; }
      E.stream = stream;
      return true;
    })
    .catch(err => {
      if (err && (err.name === 'NotAllowedError' || err.name === 'SecurityError')) store.set('eq_nest_mic', 'off');
      return false;
    });
}

// Listening: raw samples, a short ring before the voice (so the first sound is kept), then the voice until 0.7 s of quiet
// or 4 s. Nothing loud within 6 s: over, quietly.
function nkEchoListen(E){
  const ctx = nkEchoCtx();
  if (!ctx || !E.stream) return nkEchoFinish(E, false);
  let src, proc;
  try {
    src = ctx.createMediaStreamSource(E.stream);
    proc = ctx.createScriptProcessor(2048, 1, 1);
  } catch(e){ return nkEchoFinish(E, false); }
  const sink = ctx.createGain();
  sink.gain.value = 0;
  src.connect(proc); proc.connect(sink); sink.connect(ctx.destination);
  E.nodes.push(src, proc, sink);
  const C = NK_ECHO, block = 2048 / ctx.sampleRate, preN = Math.ceil(C.pre / block);
  let pre = [], rec = null, run = 0, quiet = 0, len = 0, age = 0;
  proc.onaudioprocess = ev => {
    if (!E.alive || E.talking) return;
    const x = new Float32Array(ev.inputBuffer.getChannelData(0));
    let s = 0;
    for (let i = 0; i < x.length; i++) s += x[i] * x[i];
    const rms = Math.sqrt(s / x.length);
    age += block;
    if (E.o.onLevel) { try { E.o.onLevel(Math.min(1, rms * 9)); } catch(e){} }
    if (age < C.settle) return;
    if (!rec) {
      pre.push(x); if (pre.length > preN) pre.shift();
      run = rms > C.on ? run + 1 : 0;
      if (run >= C.start) { rec = pre; pre = null; len = rec.length * block; }
      return;
    }
    rec.push(x); len += block;
    quiet = rms < C.off ? quiet + block : 0;
    if (quiet >= C.quiet || len >= C.max) { const r = rec; rec = null; nkEchoReplay(E, r, Math.max(0, quiet - .15)); }
  };
  E.timers.push(setTimeout(() => { if (!rec && !E.talking) nkEchoFinish(E, true); }, C.wait * 1000));
  E.state('listen');
}

// The microphone goes off before the replay (nothing more is heard, and the iPhone speaker is loud again), then the voice
// plays once, faster and higher with a little wobble, after a squawk made in code. The buffer is dropped when it ends.
function nkEchoReplay(E, parts, tail){
  E.talking = true;
  nkEchoMicOff(E);
  const ctx = nkEchoCtx();
  if (!ctx) return nkEchoFinish(E, true);
  const n = parts.reduce((a, p) => a + p.length, 0), cut = Math.min(n, Math.floor(tail * ctx.sampleRate));
  const buf = ctx.createBuffer(1, Math.max(1, n - cut), ctx.sampleRate), ch = buf.getChannelData(0);
  let at = 0, peak = 0;
  for (const p of parts) { for (let i = 0; i < p.length && at < ch.length; i++, at++) { ch[at] = p[i]; if (Math.abs(p[i]) > peak) peak = Math.abs(p[i]); } }
  parts.length = 0;
  const t0 = ctx.currentTime + .03, C = NK_ECHO;
  nkEchoSquawk(E, ctx, t0);
  const s = ctx.createBufferSource(), hp = ctx.createBiquadFilter(), g = ctx.createGain(), wob = ctx.createOscillator(), wg = ctx.createGain();
  s.buffer = buf;
  s.playbackRate.value = C.rate;
  wob.frequency.value = 7; wg.gain.value = .06;
  wob.connect(wg); wg.connect(s.playbackRate);
  hp.type = 'highpass'; hp.frequency.value = 280;
  const vol = Math.min(5, .85 / Math.max(peak, .01)), at0 = t0 + .2, dur = buf.duration / C.rate;
  g.gain.setValueAtTime(0, at0);
  g.gain.linearRampToValueAtTime(vol, at0 + .02);
  g.gain.setValueAtTime(vol, Math.max(at0 + .03, at0 + dur - .05));
  g.gain.linearRampToValueAtTime(0, at0 + dur);
  s.connect(hp); hp.connect(g); g.connect(ctx.destination);
  E.nodes.push(s, hp, g, wob, wg);
  E.play = s;
  const end = () => { if (E.play !== s) return; nkEchoFinish(E, true); };
  s.onended = end;
  wob.start(at0); s.start(at0); wob.stop(at0 + dur + .05);
  E.timers.push(setTimeout(end, (at0 - ctx.currentTime + dur + 1) * 1000));
  if (typeof nestTalk === 'function') nestTalk(true);
  E.state('talk');
}

// A parrot's squawk: a short sawtooth that jumps up and falls, through a narrow band.
function nkEchoSquawk(E, ctx, t0){
  const o = ctx.createOscillator(), bp = ctx.createBiquadFilter(), g = ctx.createGain();
  o.type = 'sawtooth';
  o.frequency.setValueAtTime(900, t0);
  o.frequency.exponentialRampToValueAtTime(2300, t0 + .05);
  o.frequency.exponentialRampToValueAtTime(1200, t0 + .16);
  bp.type = 'bandpass'; bp.frequency.value = 1900; bp.Q.value = 3;
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(.16, t0 + .02);
  g.gain.exponentialRampToValueAtTime(.001, t0 + .17);
  o.connect(bp); bp.connect(g); g.connect(ctx.destination);
  o.start(t0); o.stop(t0 + .19);
  E.nodes.push(o, bp, g);
}

function nkEchoMicOff(E){
  if (E.stream) { E.stream.getTracks().forEach(t => t.stop()); E.stream = null; }
  E.nodes.forEach(nd => { if (nd.onaudioprocess !== undefined) nd.onaudioprocess = null; });
}

// Over: everything off, then 'idle' and onDone.
function nkEchoFinish(E, ok){
  if (!E.alive) return;
  E.state('idle');
  const o = E.o;
  nkEchoEnd(E);
  try { if (o.onDone) o.onDone(ok); } catch(e){}
}

// Ends everything at once, without calling back: timers, the sheet, Chacho's line, the microphone, every node, the buffer.
function nkEchoEnd(E){
  if (!E.alive) return;
  E.alive = false;
  E.timers.forEach(clearTimeout); E.timers = [];
  document.removeEventListener('visibilitychange', E.vis);
  if (E.sheet) { E.sheet.remove(); E.sheet = null; }
  if (E.intro) { E.intro = false; nestStopAudio(); }
  nkEchoMicOff(E);
  if (E.play) { E.play.onended = null; try { E.play.stop(); } catch(e){} try { E.play.buffer = null; } catch(e){} E.play = null; }
  E.nodes.forEach(nd => { try { if (nd.stop) nd.stop(); } catch(e){} try { nd.disconnect(); } catch(e){} });
  E.nodes = [];
  if (E.talking && typeof nestTalk === 'function') nestTalk(false);
  E.talking = false;
  if (NKECHO === E) NKECHO = null;
}
