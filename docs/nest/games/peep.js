// Pop-up Pals (Chacho's arcade, stage C; specs/nest.md): pals peek out of holes in the park; Chacho asks for one ("Find the
// cat!") and the kid taps it when it pops up. A pal tapped by mistake says its name, waves and goes down: nothing is lost.
// No clock: a pal stays up long (longer for the small ones), and the one Chacho wants comes up at least every third time.
// Once a game the kid's own pet pops up instead (a giggle, a celebration). Loaded on demand by docs/nest/arcade.js.

NK.peep = {
  say: s => ['f-' + s.targets[s.ti || 0].id], intro: ['en-who'], demo: true,
  render(s, opening){
    s.ti = 0;
    const small = NE.age <= 3, H = small ? 3 : 6, up = small ? 4200 : 2800;
    const pl = nkPlace('park');
    nkFill(`<div class="nk-scene nkp${pl.painted ? ' painted' : ''}" style="${pl.style}">${pl.html}<div class="nkp-field n${H}">${Array.from({ length: H }, (_, i) =>
      `<div class="nkp-hole" data-h="${i}">${nkPeepRim(i, 'back')}<div class="nkp-win"><button class="nkp-pal" data-h="${i}" aria-label="Pal"></button></div>${nkPeepRim(i, 'front')}</div>`).join('')}</div></div>`);
    const holes = [...app.querySelectorAll('.nkp-hole')], tok = NE.tok;
    let since = 0, tries = 0, petShown = !dash.pet, demoDone = !s.demo, busy = false;
    const target = () => s.targets[s.ti];
    const free = () => holes.filter(h => !h.classList.contains('up'));
    const later = (f, ms) => setTimeout(() => { if (NE && NE.tok === tok) f(); }, ms);
    // One pal comes up in a free hole; it goes down by itself after a while (unless the round is being won).
    const popUp = () => {
      if (!nkLive(s) || busy) return;
      const fr = free();
      if (!fr.length) return;
      const h = nkPick(fr), b = h.querySelector('.nkp-pal');
      const t = target(), on = holes.filter(x => x.classList.contains('up')).map(x => x.dataset.w);
      let w;
      if (!petShown && s.ti >= 1 && Math.random() < .35) { petShown = true; w = null; }
      else if (since >= 2 || (Math.random() < .45 && !on.includes(t.id))) { w = t; since = 0; }
      else { w = nkPick(s.pool.filter(x => x.id !== t.id)) || t; since++; }
      h.dataset.w = w ? w.id : 'pet';
      b.innerHTML = w ? nestPic(w) : petArt(dash.pet, 'happy', 'nk-petsvg');
      b.classList.toggle('pet', !w);
      h.classList.remove('down', 'out', 'wave');
      h.classList.add('up');
      nkSfx('flip');
      clearTimeout(h.downT);
      h.downT = later(() => goDown(h), up + Math.random() * 900);
      if (!demoDone && w && w.id === t.id) {
        demoDone = true; NE.locked = true;
        later(() => nkHandTap(b, () => hit(h, true)), 500);
      }
    };
    const goDown = h => { if (!h.classList.contains('up')) return; h.classList.remove('up', 'wave'); h.classList.add('down'); };
    const hit = (h, byCoco) => {
      if (!nkLive(s) || (NE.locked && !byCoco) || !h.classList.contains('up') || busy) return;
      const id = h.dataset.w, t = target();
      clearTimeout(h.downT);
      if (id === 'pet') {
        nkPetMood(h, 'celebrate'); h.classList.add('wave'); nkSfx('boing'); nkMove(nkCocoEl(), 'giggle');
        if (typeof nkPose === 'function') nkPose('laugh', 1200);
        h.downT = later(() => goDown(h), 1300);
        return;
      }
      if (id !== t.id) {
        tries++;
        h.classList.add('wave');
        h.downT = later(() => goDown(h), 1100);
        nkMiss(['w-' + id, 'en-try', 'f-' + t.id]);
        return;
      }
      if (!byCoco && !s.demoRound) nkScore(t.id, tries === 0);
      tries = 0; busy = true;
      h.classList.add('out');
      nkSfx('pop'); buzz(true);
      holes.forEach(x => { if (x !== h) goDown(x); });
      const last = s.ti >= s.targets.length - 1;
      if (last) { nkWin(s, ['w-' + t.id, nkPraise()]); return; }
      nkCoco('celebrate');
      if (typeof nkActorWin === 'function') { h.classList.add('yes'); nkActorWin(s); h.classList.remove('yes'); }
      NE.locked = true;
      nestPlay(['w-' + t.id].concat(byCoco ? ['en-turn'] : [nkPraise()]), () => {
        if (!nkLive(s)) return;
        NE.locked = false; busy = false; nkCoco('happy'); s.ti++; since = 2;
        holes.forEach(x => x.classList.remove('up', 'out', 'down', 'wave'));
        ask();
      });
    };
    holes.forEach(h => h.querySelector('.nkp-pal').onclick = () => hit(h));
    // Pals keep popping while the round is on: one every 1.4 to 2.2 s (2 to 3 s for the small ones).
    const loop = () => { if (!nkLive(s)) return; popUp(); later(loop, (small ? 2000 : 1400) + Math.random() * 800); };
    const ask = () => nestPlay(['f-' + target().id], () => { if (nkLive(s)) nkIdle(s, () => holes.find(x => x.classList.contains('up') && x.dataset.w === target().id)); });
    nestPlay(nestPrompt(s, opening), () => { if (!nkLive(s)) return; later(loop, 300); });
    if (pl.painted && typeof nkHots === 'function') nkHots(app.querySelector('.nk-scene'), 'park');
  }
};

// A hole in clay dirt: the back (the ring and the dark opening) and the front half of the ring, which the pal hides behind.
function nkPeepRim(i, part){
  const g = `<defs><linearGradient id="nkp-${part}${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d39a64"/><stop offset=".55" stop-color="#a86d3e"/><stop offset="1" stop-color="#7a4a26"/></linearGradient>
    <radialGradient id="nkp-d${i}" cx="50%" cy="30%" r="70%"><stop offset="0" stop-color="#1c1009"/><stop offset="1" stop-color="#4a2c16"/></radialGradient></defs>`;
  if (part === 'back') return `<svg class="nkp-rim back" viewBox="0 0 120 50" aria-hidden="true">${g}<ellipse cx="60" cy="24" rx="58" ry="19" fill="url(#nkp-back${i})"/>
    <ellipse cx="60" cy="24" rx="43" ry="11" fill="url(#nkp-d${i})"/></svg>`;
  return `<svg class="nkp-rim front" viewBox="0 0 120 50" aria-hidden="true">${g}<path d="M2 24A58 19 0 0 0 118 24L103 24A43 11 0 0 1 17 24Z" fill="url(#nkp-front${i})"/>
    <path d="M20 30Q60 44 100 30" stroke="#e8b886" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".7"/></svg>`;
}

(function nkPeepStyle(){
  const st = document.createElement('style');
  st.textContent = `
.nkp{width:100%;height:100%;max-width:none;aspect-ratio:auto}
.nkp-field{position:absolute;left:4%;right:4%;bottom:5%;height:58%;display:grid;grid-template-columns:repeat(3,1fr);align-items:end;gap:2% 4%}
.nkp-field.n6{grid-template-rows:1fr 1fr}
.nkp-field.n3{height:40%}
.nkp-hole{position:relative;width:100%;aspect-ratio:2.4;justify-self:center}
.nkp-rim{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none}
.nkp-field.n6 .nkp-hole:nth-child(-n+3){transform:scale(.86);transform-origin:50% 100%}
.nkp-win{position:absolute;left:12%;right:12%;bottom:50%;height:320%;overflow:hidden;pointer-events:none}
.nkp-pal{position:absolute;left:4%;right:4%;bottom:0;aspect-ratio:1;border:0;background:none;padding:0;cursor:pointer;pointer-events:auto;
  transform:translateY(105%);transition:transform .42s cubic-bezier(.2,1.5,.4,1);-webkit-tap-highlight-color:transparent}
.nkp-pal img,.nkp-pal .nk-petsvg,.nkp-pal .nk-dots{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 6px 6px rgba(0,0,0,.2));pointer-events:none}
.nkp-hole.up .nkp-pal{transform:translateY(8%)}
.nkp-hole.down .nkp-pal{transform:translateY(105%);transition-duration:.3s;transition-timing-function:ease-in}
.nkp-hole.wave .nkp-pal{animation:nkpwave .5s ease-in-out 2}
.nkp-hole.out .nkp-pal{transform:translateY(-30%) scale(1.15);transition:transform .35s cubic-bezier(.2,1.6,.4,1)}
.nkp-hole.out .nkp-win{overflow:visible}
@keyframes nkpwave{0%,100%{transform:translateY(8%) rotate(0)}30%{transform:translateY(8%) rotate(-12deg)}70%{transform:translateY(8%) rotate(12deg)}}
@media (prefers-reduced-motion: reduce){.nkp-pal{transition-duration:.01s}.nkp-hole.wave .nkp-pal{animation:none}}
`;
  document.head.appendChild(st);
})();
