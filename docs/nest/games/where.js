// Where's Chacho? (Chacho's arcade, stage D, ages 3 to 7; specs/nest.md): a painted place full of the things the kid has met.
// Chacho lost some of them ("Where is the ball?"): the kid finds each one, and it flies to him. Then Chacho hides behind one of
// the things, only his head peeking, and asks "Where is Chacho? Find me!". A wrong tap: the thing says its name and wiggles.
// After a quiet while the hand shows the way and the thing shines. Loaded on demand by docs/nest/arcade.js.

const NK_WHERE_SPOTS = [[14, 50], [38, 46], [62, 48], [86, 52], [24, 68], [52, 66], [80, 70], [14, 86], [40, 88], [68, 88], [90, 86]];
NK.where = {
  say: s => s.li < s.lost.length ? ['f-' + s.lost[s.li].id] : ['en-wherecoco'], intro: ['en-lost'], demo: true,
  render(s, opening){
    s.li = 0;
    const pl = nkPlace(s.place), tok = NE.tok, spots = shuffle(NK_WHERE_SPOTS.slice()).slice(0, s.items.length);
    const sz = s.items.length > 8 ? 16 : 19;
    nkFill(`<div class="nk-scene nkw${pl.painted ? ' painted' : ''}" style="${pl.style}">${pl.html}
      <img class="nkw-coco" id="nkwcoco" src="${nkPoseSrc('laugh')}" alt="" draggable="false">
      ${s.items.map((w, i) => `<button class="nk-it nkw-it" data-i="${i}" style="left:${spots[i][0]}%;top:${spots[i][1]}%;width:${sz}%;aspect-ratio:1" aria-label="${esc(w.en)}">${nestPic(w)}</button>`).join('')}</div>`);
    const scene = app.querySelector('.nkw'), coco = document.getElementById('nkwcoco');
    const later = (f, ms) => setTimeout(() => { if (NE && NE.tok === tok) f(); }, ms);
    let tries = 0, hide = -1;
    const btn = i => app.querySelector(`.nkw-it[data-i="${i}"]`);
    const want = () => s.li < s.lost.length ? s.items.findIndex(w => w.id === s.lost[s.li].id) : hide;
    // Chacho hides behind a thing that is still there: his head peeks out above it.
    const hideCoco = () => {
      const left = s.items.map((w, i) => i).filter(i => !btn(i).classList.contains('gone'));
      hide = nkPick(left);
      const b = btn(hide);
      coco.style.cssText = `left:${b.style.left};top:calc(${b.style.top} - ${sz * .42}%);width:${sz * .8}%`;
      coco.classList.add('on');
      scene.classList.add('hiding');
      if (typeof nkActorOff === 'function') { const c = nkCocoEl(); if (c) c.style.visibility = 'hidden'; }
    };
    const ask = () => {
      const k = s.li < s.lost.length ? ['f-' + s.lost[s.li].id] : ['en-wherecoco'];
      nestPlay(k, () => {
        if (!nkLive(s)) return;
        const target = () => s.li < s.lost.length ? btn(want()) : coco;
        if (s.demo && s.li === 0) { NE.locked = true; later(() => nkHandTap(target(), () => pick(want(), true)), 300); }
        else nkIdle(s, () => { const t = target(); if (t) nkAgain(t, 'shine'); return t; });
      });
    };
    const pick = (i, byCoco) => {
      if (!nkLive(s) || (NE.locked && !byCoco)) return;
      const finding = s.li < s.lost.length;
      if (i !== want()) {
        tries++;
        const b = btn(i);
        if (b) nkAgain(b, 'wig');
        nkMiss((b ? ['w-' + s.items[i].id] : []).concat(['en-try']).concat(finding ? ['f-' + s.lost[s.li].id] : ['en-wherecoco']));
        return;
      }
      NE.locked = true;
      if (!finding) {
        if (!byCoco) nkScore(null, tries === 0);
        coco.src = nkPoseSrc('cheer'); coco.classList.add('found');
        const c = nkCocoEl(); if (c) c.style.visibility = '';
        nkSfx('boing');
        return nkWin(s, ['en-foundme', nkPraise()]);
      }
      const w = s.lost[s.li], b = btn(i);
      if (!byCoco) nkScore(w.id, tries === 0);
      tries = 0;
      b.classList.add('yes');
      if (typeof nkActorWin === 'function') nkActorWin(s);
      b.classList.remove('yes');
      later(() => b.classList.add('gone'), 900);
      buzz(true); nkCheer(s);
      nestPlay(['w-' + w.id].concat(byCoco ? ['en-turn'] : [nkPraise()]), () => {
        if (!nkLive(s)) return;
        NE.locked = false; s.li++; tries = 0;
        if (s.li >= s.lost.length) { hideCoco(); nkSfx('whoosh'); later(ask, 700); } else ask();
      });
    };
    app.querySelectorAll('.nkw-it').forEach(b => b.onclick = () => pick(Number(b.dataset.i)));
    coco.onclick = () => pick(hide);
    if (pl.painted && typeof nkHots === 'function') nkHots(scene, s.place);
    nestPlay(nestPrompt(s, opening).slice(0, -1), ask);
  }
};

(function nkWhereStyle(){
  const st = document.createElement('style');
  st.textContent = `
.nkw{width:100%;height:100%;max-width:none;aspect-ratio:auto}
.nkw-it{z-index:2;transition:transform .5s ease,opacity .5s ease}
.nkw-it.gone{opacity:0;transform:translate(-50%,-140%) scale(.4);pointer-events:none}
.nkw-it.shine img{animation:nkwshine 1s ease 2}
.nkw-coco{position:absolute;z-index:1;transform:translate(-50%,-50%) translateY(40%);opacity:0;pointer-events:none;transition:transform .5s cubic-bezier(.2,1.4,.4,1),opacity .3s;cursor:pointer;
  filter:drop-shadow(0 6px 6px rgba(0,0,0,.2))}
.nkw-coco.on{opacity:1;transform:translate(-50%,-50%);pointer-events:auto;animation:nkwpeek 2.4s ease-in-out infinite}
.nkw-coco.found{z-index:3;transform:translate(-50%,-80%) scale(1.5);animation:none}
.nkw-coco.shine{animation:nkwshine 1s ease 2}
@keyframes nkwpeek{0%,100%{rotate:0deg}30%{rotate:-8deg}60%{rotate:6deg}}
@keyframes nkwshine{0%,100%{filter:drop-shadow(0 6px 6px rgba(0,0,0,.18))}50%{filter:drop-shadow(0 0 16px #fde047) brightness(1.15)}}
`;
  document.head.appendChild(st);
})();
