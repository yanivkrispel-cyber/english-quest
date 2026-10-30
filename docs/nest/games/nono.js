// No, Chacho! (Chacho's arcade, stage C; specs/nest.md): Chacho shows a picture and names it, and often he is silly ("Banana!"
// for a cow). The kid taps No (or shouts it, when the microphone is already on: only how loud, nothing is kept) or Yes.
// After a No, Chacho hides in his wings, laughs at himself and says the right word. A wrong judgment: Chacho asks again, and the
// second time he just tells. Loaded on demand by docs/nest/arcade.js.

NK.nono = {
  say: s => { const r = s.rounds[s.ri || 0]; return ['w-' + (r.wrong || r.w).id]; }, intro: ['en-nococo'], demo: true,
  render(s, opening){
    s.ri = 0;
    nkFill(`<div class="nkn">
      <button class="nk-card big nkn-card" id="nkpic"></button>
      <div class="nkn-row"><button class="nkn-b no" id="nknno" aria-label="No">${icon('x', 'bold')}</button><button class="nkn-b yes" id="nknyes" aria-label="Yes">${icon('check', 'bold')}</button></div>
    </div>`);
    const card = document.getElementById('nkpic'), no = document.getElementById('nknno'), yes = document.getElementById('nknyes'), tok = NE.tok;
    let tries = 0, open = false;
    const r = () => s.rounds[s.ri];
    const later = (f, ms) => setTimeout(() => { if (NE && NE.tok === tok) f(); }, ms);
    const show = () => {
      card.innerHTML = nestPic(r().w);
      nkAgain(card, 'pop');
      open = false; tries = 0;
      no.classList.remove('ready', 'pick'); yes.classList.remove('ready', 'pick');
      if (typeof nkPose === 'function') nkPose('point');
      nkMove(nkCocoEl(), 'hop');
      nestPlay(['w-' + (r().wrong || r().w).id], () => {
        if (!nkLive(s)) return;
        open = true;
        no.classList.add('ready'); yes.classList.add('ready');
        if (store.get('eq_nest_mic') === 'on') nestMicStart(() => { if (open && nkLive(s)) answer(false); });
        if (s.demo && s.ri === 0) { NE.locked = true; later(() => nkHandTap(r().wrong ? no : yes, () => answer(!r().wrong, true)), 400); }
        else nkIdle(s, () => r().wrong ? no : yes);
      });
    };
    // ok: the kid says Chacho is right.
    const answer = (ok, byCoco) => {
      if (!nkLive(s) || !open || (NE.locked && !byCoco)) return;
      nestMicStop();
      const right = ok === !r().wrong;
      (ok ? yes : no).classList.add('pick');
      if (!right && tries === 0) {
        tries++; open = false;
        nkMiss(['en-isit', 'w-' + (r().wrong || r().w).id]);
        later(() => { if (!nkLive(s)) return; open = true; (ok ? yes : no).classList.remove('pick'); }, 1200);
        return;
      }
      if (!byCoco && !(s.demo && s.ri === 0)) nkScore(r().w.id, right && tries === 0);
      open = false;
      no.classList.remove('ready'); yes.classList.remove('ready');
      const keys = r().wrong ? ['en-silly', 'w-' + r().w.id] : ['en-yes', 'w-' + r().w.id];
      if (r().wrong) { if (typeof nkPose === 'function') nkPose('shy', 1600); nkMove(nkCocoEl(), 'giggle'); nkSfx('boing'); }
      card.classList.add('yes');
      const last = s.ri >= s.rounds.length - 1;
      if (last) { nkWin(s, keys.concat(right ? [nkPraise()] : [])); return; }
      buzz(true); nkCheer(s);
      if (typeof nkActorWin === 'function' && !r().wrong) nkActorWin(s);
      NE.locked = true;
      nestPlay(keys.concat(byCoco ? ['en-turn'] : right ? [nkPraise()] : []), () => {
        if (!nkLive(s)) return;
        NE.locked = false; card.classList.remove('yes'); s.ri++; show();
      });
    };
    no.onclick = () => answer(false);
    yes.onclick = () => answer(true);
    card.onclick = () => { if (!nestQueue) nestPlay(['w-' + (r().wrong || r().w).id]); };
    nestPlay(nestPrompt(s, opening).slice(0, -1), show);
  }
};

(function nkNonoStyle(){
  const st = document.createElement('style');
  st.textContent = `
.nkn{display:grid;grid-template-rows:1fr auto;justify-items:center;align-items:center;gap:4%;width:100%;height:100%}
.nkn-card{max-height:100%}
.nkn-card.yes{box-shadow:0 0 0 6px #22c55e,0 16px 30px rgba(34,197,94,.3)}
.nkn-row{display:flex;gap:min(10vw,48px);justify-content:center;padding-bottom:4px}
.nkn-b{width:min(24vw,108px);aspect-ratio:1;border-radius:50%;border:0;color:#fff;font-size:min(12vw,52px);display:grid;place-items:center;cursor:pointer;opacity:.45;transition:opacity .2s,transform .15s;-webkit-tap-highlight-color:transparent}
.nkn-b.no{background:linear-gradient(145deg,#fda4af,#e11d48);box-shadow:0 12px 24px rgba(225,29,72,.35)}
.nkn-b.yes{background:linear-gradient(145deg,#86efac,#16a34a);box-shadow:0 12px 24px rgba(22,163,74,.35)}
.nkn-b.ready{opacity:1}
.nkn-b.pick{transform:scale(1.12)}
.nkn-b:active{transform:scale(.92)}
`;
  document.head.appendChild(st);
})();
