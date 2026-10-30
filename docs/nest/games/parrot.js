// Talking Chacho (Chacho's arcade, stage C; specs/nest.md): Chacho big on the stage and the kid's pet next to him. The microphone
// button: Chacho listens and says it back in his parrot voice (docs/nest/echo.js: in memory for the replay only, nothing kept
// or sent; without a microphone he says "Hello!"). A tap on Chacho: he giggles, spins or sneezes feathers. The food the kid has
// met sits on a plate: a tap feeds him ("Banana! Yummy!"). Every third thing he asks for a word ("Say it! Apple!") and the
// picture floats in his bubble. No goal and no end: the close button goes back to the arcade. Loaded on demand.

NK.parrot = {
  say: () => ['en-echo'], intro: ['en-hello'],
  render(s, opening){
    const pl = nkPlace('home');
    nkFill(`<div class="nkt${pl.painted ? ' painted' : ''}" style="${pl.painted ? pl.style : ''}">
      <div class="nkt-bubble" id="nktbub"></div>
      <button class="nkt-coco" id="nktcoco" aria-label="Chacho"><img id="nktimg" src="${nkPoseSrc('happy')}" alt="" draggable="false"></button>
      ${dash.pet ? `<button class="nkt-pet" id="nktpet" aria-label="Your pet">${petArt(dash.pet, 'happy', 'nk-petsvg')}</button>` : ''}
      <div class="nkt-plate">${s.foods.map((w, i) => `<button class="nkt-food" data-f="${i}" aria-label="${esc(w.en)}">${nestPic(w)}</button>`).join('')}</div>
    </div>`);
    const coco = document.getElementById('nktcoco'), img = document.getElementById('nktimg'), bub = document.getElementById('nktbub'), tok = NE.tok;
    const mic = nkBtn('said', 'Talk', () => talk());
    mic.innerHTML = icon('microphone', 'bold');
    mic.classList.add('ready');
    let n = 0, echo = null, want = null;
    NE.off = () => { if (echo) echo.stop(); echo = null; };
    const later = (f, ms) => setTimeout(() => { if (NE && NE.tok === tok) f(); }, ms);
    const pose = (p, ms) => { img.src = nkPoseSrc(p); clearTimeout(coco.poseT); if (ms) coco.poseT = later(() => { img.src = nkPoseSrc('happy'); }, ms); };
    // Every third thing: Chacho asks for a word, its picture in his bubble.
    const next = () => {
      if (++n % 3 || !s.says.length) return;
      want = s.says[(n / 3 - 1) % s.says.length];
      bub.innerHTML = nestPic(want);
      bub.classList.add('on');
      later(() => { if (!echo && !nestQueue) nestPlay(['en-say', 'w-' + want.id]); }, 900);
    };
    const talk = () => {
      if (!nkLive(s) || echo) return;
      nestStopAudio();
      mic.classList.add('on');
      const done = ok => {
        echo = null;
        if (!nkLive(s)) return;
        mic.classList.remove('on'); coco.style.removeProperty('--lv');
        if (!ok) { pose('wave', 1400); nkMove(coco, 'hop'); nestPlay(['en-hello']); }
        else { pose(want ? 'cheer' : 'laugh', 1500); nkMove(coco, 'dance'); if (want) { nkScore(want.id, true); bub.classList.remove('on'); want = null; nkCheer(s); } }
        next();
      };
      try {
        echo = nkEchoStart({
          onState: st => { if (!nkLive(s)) return; if (st === 'listen') pose('listen'); else if (st === 'talk') { pose('shout'); nkMove(coco, 'flap'); } },
          onDone: ok => done(!!ok),
          onLevel: v => coco.style.setProperty('--lv', Math.max(0, Math.min(1, Number(v) || 0)).toFixed(2))
        }) || null;
      } catch(e){ echo = null; done(false); }
    };
    coco.onclick = () => {
      if (echo) return;
      const r = nkPick([['giggle', 'laugh', 'en-tickle'], ['spin', 'celebrate', 'en-whee'], ['sneeze', 'sneeze', 'en-achoo'], ['dance', 'dance', 'en-whee']]);
      nkMove(coco, r[0]); pose(r[1], 1300);
      if (r[0] === 'sneeze') later(() => nkFeathersAt(coco), 500);
      nkSfx('boing');
      if (!nestQueue) nestPlay([r[2]]);
      next();
    };
    const pet = document.getElementById('nktpet');
    if (pet) pet.onclick = () => { nkMove(pet, 'hop'); nkPetMood(pet, 'celebrate'); later(() => nkPetMood(pet, 'happy'), 1200); nkSfx('boing'); };
    app.querySelectorAll('.nkt-food').forEach(b => b.onclick = () => {
      if (echo || b.classList.contains('gone')) return;
      const w = s.foods[Number(b.dataset.f)];
      const a = b.getBoundingClientRect(), c = coco.getBoundingClientRect();
      b.classList.add('gone');
      const fly = b.cloneNode(true);
      fly.className = 'nkt-fly';
      fly.style.cssText = `left:${a.left}px;top:${a.top}px;width:${a.width}px;height:${a.height}px`;
      document.body.appendChild(fly);
      const dx = c.left + c.width * .5 - a.left - a.width / 2, dy = c.top + c.height * .32 - a.top - a.height / 2;
      const end = () => {
        fly.remove();
        if (!nkLive(s)) return;
        pose('eat', 1600); nkSfx('munch'); nkMove(coco, 'giggle');
        nkScore(w.id, true);
        nestPlay(['w-' + w.id, 'en-yummy']);
        later(() => { b.classList.remove('gone'); nkAgain(b, 'back'); }, 2600);
        next();
      };
      try { fly.animate([{ transform: 'none' }, { transform: `translate(${dx / 2}px,${dy - 80}px) scale(1.1)`, offset: .5 }, { transform: `translate(${dx}px,${dy}px) scale(.35)` }], { duration: 650, easing: 'ease-in' }).onfinish = end; }
      catch(e){ end(); }
    });
    nestPlay(nestPrompt(s, opening), () => { if (nkLive(s)) nkIdle(s, mic); });
  }
};
// Feathers out of Chacho on the stage (the dock's nkFeathers puffs from the small Chacho).
function nkFeathersAt(el){
  if (!el || nkCalm()) return;
  const r = el.getBoundingClientRect();
  for (let i = 0; i < 8; i++) {
    const f = document.createElement('i');
    f.className = 'nk-feather';
    f.style.left = (r.left + r.width / 2) + 'px'; f.style.top = (r.top + r.height * .3) + 'px';
    f.style.setProperty('--dx', (Math.random() * 200 - 100) + 'px'); f.style.setProperty('--dy', (-60 - Math.random() * 90) + 'px');
    f.style.setProperty('--r', (Math.random() * 300 - 150) + 'deg');
    f.style.background = NK_FUN[i % NK_FUN.length];
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1300);
  }
}

(function nkParrotStyle(){
  const st = document.createElement('style');
  st.textContent = `
.nkg-parrot .nk-coach{visibility:hidden}
.nkg-parrot #nkdpet{display:none}
.nkt{position:relative;width:100%;height:100%;display:grid;grid-template-rows:1fr auto;justify-items:center;border-radius:28px;overflow:hidden}
.nkt.painted{box-shadow:0 10px 30px rgba(40,40,90,.16)}
.nkt-coco{position:relative;align-self:end;height:min(100%,56cqh);aspect-ratio:1;border:0;background:none;padding:0;cursor:pointer;--lv:0;-webkit-tap-highlight-color:transparent}
.nkt-coco img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 14px 16px rgba(40,30,60,.25));transform:scale(calc(1 + var(--lv) * .08));transition:transform .08s;animation:nkbreathe 3.2s ease-in-out infinite;transform-origin:50% 90%}
.nkt-pet{position:absolute;right:3%;bottom:calc(min(13cqh,19cqw,92px) + 4%);width:30%;aspect-ratio:1;border:0;background:none;padding:0;cursor:pointer}
.nkt-pet .nk-petsvg{width:100%;height:100%}
.nkt-bubble{position:absolute;left:4%;top:4%;width:26%;aspect-ratio:1;border-radius:50%;background:var(--glass);border:1px solid var(--stroke);box-shadow:var(--shadow),var(--inner);
  backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);display:grid;place-items:center;padding:12%;transform:scale(0);transition:transform .35s cubic-bezier(.2,1.5,.4,1);z-index:1}
.nkt-bubble.on{transform:scale(1)}
.nkt-bubble img,.nkt-bubble .nk-dots{width:100%;height:100%;object-fit:contain}
.nkt-plate{display:flex;gap:3%;justify-content:center;width:100%;padding:2% 0 3%}
.nkt-food{height:min(13cqh,19cqw,92px);aspect-ratio:1;border-radius:24px;border:1px solid var(--stroke);background:var(--glass-soft);box-shadow:var(--inner);padding:8px;cursor:pointer;transition:opacity .2s,transform .2s}
.nkt-food img{width:100%;height:100%;object-fit:contain;pointer-events:none}
.nkt-food.gone{opacity:0;transform:scale(.6)}
.nkt-food.back{animation:nkback .4s ease}
.nkt-fly{position:fixed;z-index:60;pointer-events:none;border:0;background:none;padding:0}
.nkt-fly img{width:100%;height:100%;object-fit:contain}
.nk-next.said.on{background:linear-gradient(145deg,#fca5a5,#ef4444);animation:nkpulse 1s ease-in-out infinite}
@media (prefers-reduced-motion: reduce){.nkt-coco img{animation:none}}
`;
  document.head.appendChild(st);
})();
