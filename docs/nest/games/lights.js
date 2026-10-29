// Lights out, Coco! (Coco's arcade, stage E, ages 2 to 7; specs/nest.md): the screen goes dark (a soft night, nothing to
// look at) and Coco leads a game in the house by voice: "Find something red! Show it to Mommy or Daddy!", a move of the
// units met ("Touch your nose!"), and at the end a hug. The grown-up taps the big thumb when it is done, or the small arrow to
// skip; Coco says the next one. Then "Lights on! Great job!". Loaded on demand by docs/nest/arcade.js.

NK.lights = {
  say: s => nkLightKeys(s.tasks[s.ti || 0]), intro: ['en-lightsout'],
  render(s, opening){
    s.ti = 0;
    const tok = NE.tok, later = (f, ms) => setTimeout(() => { if (NE && NE.tok === tok) f(); }, ms);
    nkFill(`<div class="nklo" id="nklo"><div class="nklo-moon"></div>
      <img class="nklo-coco" src="${ASSETS}nest/arcade/sleep.webp?v=${NEST_V}" alt="" draggable="false">
      <div class="nklo-hint" id="nklohint"></div>
      <div class="nklo-row"><button class="nklo-skip" id="nkloskip" aria-label="Skip">${icon('arrow-right', 'bold')}</button>
        <button class="nklo-ok" id="nklook" aria-label="We did it">${icon('thumbs-up', 'bold')}</button></div></div>`);
    // The whole screen goes dark: the play sky behind the session too (back when the lights come on or the kid leaves).
    document.querySelector('.gscreen.nk').classList.add('nklo-dark');
    const sky = document.getElementById('nksky'), light = () => { if (sky) sky.style.visibility = ''; };
    if (sky) sky.style.visibility = 'hidden';
    NE.off = light;
    const ok = document.getElementById('nklook'), skip = document.getElementById('nkloskip'), hint = document.getElementById('nklohint');
    let open = false;
    const ask = () => {
      const t = s.tasks[s.ti];
      hint.innerHTML = t.pic ? nestPic(t.pic) : '';
      hint.className = 'nklo-hint' + (t.pic ? ' on' : '');
      open = false; ok.classList.remove('ready');
      nestPlay(nkLightKeys(t), () => { if (!nkLive(s)) return; open = true; ok.classList.add('ready'); });
    };
    const next = done => {
      if (!nkLive(s) || !open) return;
      open = false;
      if (done) { nkScore(s.tasks[s.ti].w || null, true); nkSfx('pop'); buzz(true); }
      if (s.ti >= s.tasks.length - 1) {
        document.querySelector('.gscreen.nk').classList.remove('nklo-dark');
        light();
        app.querySelector('.nklo').classList.add('on');
        return nkWin(s, ['en-lightson']);
      }
      s.ti++;
      nestPlay(done ? [nkPraise()] : [], () => later(ask, 300));
    };
    ok.onclick = () => next(true);
    skip.onclick = () => next(false);
    nestPlay(nestPrompt(s, opening).slice(0, -nkLightKeys(s.tasks[0]).length), ask);
  }
};
// What Coco says for a task: a "find" line and "Show it!", a move (m-<id>), or the hug at the end.
const nkLightKeys = t => t.find ? ['en-' + t.find, 'en-showme'] : t.move ? ['m-' + t.move] : ['en-hug'];

(function nkLightsStyle(){
  const st = document.createElement('style');
  st.textContent = `
.nklo-dark{background:#0b1026!important}
.nklo-dark .nk-top .btn{opacity:.45}
.nklo-dark .nk-dock{opacity:.35}
.nklo-dark .nk-prog{opacity:.3}
.nklo{position:relative;width:100%;height:100%;border-radius:28px;display:grid;grid-template-rows:1fr auto auto;justify-items:center;align-items:center;
  background:radial-gradient(80% 60% at 50% 30%,#1e2550,#0b1026);transition:background 1s}
.nklo.on{background:radial-gradient(80% 60% at 50% 30%,#fef3c7,#fde68a)}
.nklo-moon{position:absolute;right:12%;top:8%;width:12%;aspect-ratio:1;border-radius:50%;box-shadow:inset -10px 4px 0 0 #fde68a;opacity:.6}
.nklo-coco{width:min(52%,34cqh);opacity:.55;filter:saturate(.7)}
.nklo-hint{width:min(26%,18cqh);aspect-ratio:1;opacity:0;transition:opacity .4s}
.nklo-hint.on{opacity:.55}
.nklo-hint img,.nklo-hint .nk-dots{width:100%;height:100%;object-fit:contain}
.nklo-row{display:flex;align-items:center;gap:28px;padding:4% 0 6%}
.nklo-ok{width:min(26vw,112px);aspect-ratio:1;border-radius:50%;border:0;font-size:min(12vw,50px);color:#0b1026;background:#fde68a;opacity:.35;cursor:pointer;transition:opacity .3s}
.nklo-ok.ready{opacity:.8}
.nklo-skip{width:52px;height:52px;border-radius:50%;border:1px solid rgba(255,255,255,.25);background:transparent;color:rgba(255,255,255,.5);font-size:22px;cursor:pointer}
`;
  document.head.appendChild(st);
})();
