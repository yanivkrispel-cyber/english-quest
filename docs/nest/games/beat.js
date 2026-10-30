// Beat Tiles (Chacho's arcade, stage E, ages 4 to 7; specs/nest.md): Chacho's band plays; every two bars Chacho says a word on the
// beat and three pictures fall down three lanes in time with the music. Tap the one he said (anywhere on its way down): it
// bursts with a drum hit. A wrong one wobbles; a missed one just falls away, and the song never stops. Halfway through, Chacho
// plays a drum solo. Eight words. Loaded on demand by docs/nest/arcade.js.

NK.beat = {
  say: () => ['en-beat'], intro: [], demo: true,
  render(s, opening){
    const tok = NE.tok, later = (f, ms) => setTimeout(() => { if (NE && NE.tok === tok) f(); }, ms);
    const pl = nkPlace('playroom');
    nkFill(`<div class="nkb${pl.painted ? ' painted' : ''}" style="${pl.painted ? pl.style : ''}">
      <div class="nkb-lanes">${[0, 1, 2].map(i => `<div class="nkb-lane" data-l="${i}"></div>`).join('')}</div>
      <div class="nkb-line"><i></i><i></i><i></i><i></i></div>
      <img class="nkb-coco" id="nkbcoco" src="${ASSETS}nest/arcade/beat.webp?v=${NEST_V}" alt="" draggable="false"></div>`);
    const lanes = [...app.querySelectorAll('.nkb-lane')], pulse = [...app.querySelectorAll('.nkb-line i')], coco = document.getElementById('nkbcoco');
    const fall = 4;  // beats from the top to the line
    let round = -1, tries = 0, got = false, band = null, done = false, demoDone = !s.demo;
    const solo = Math.floor(s.words.length / 2), words = s.words.slice(0, solo).concat([null], s.words.slice(solo));
    const drop = (k, beatMs) => {
      const w = words[k], others = shuffle(s.pool.filter(x => x.id !== w.id)).slice(0, 2), set = shuffle([w].concat(others));
      tries = 0; got = false;
      set.forEach((x, i) => {
        const t = document.createElement('button');
        t.className = 'nkb-tile';
        t.dataset.w = x.id;
        t.innerHTML = nestPic(x);
        t.style.transitionDuration = (fall * band.beat + .2) + 's';
        lanes[i].appendChild(t);
        requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('go')));
        t.onclick = () => hit(t, false);
        setTimeout(() => t.remove(), (fall * band.beat + 1.4) * 1000);
      });
      if (!demoDone) {
        demoDone = true; NE.locked = true;
        const t = lanes.map(l => l.lastChild).find(x => x && x.dataset.w === w.id);
        later(() => nkHandTap(t, () => { hit(t, true); NE.locked = false; }), beatMs + band.beat * 1500);
      }
    };
    const hit = (t, byCoco) => {
      if (!nkLive(s) || got || t.classList.contains('pop') || (NE.locked && !byCoco)) return;
      const w = words[round];
      if (!w || t.dataset.w !== w.id) { tries++; nkAgain(t, 'no'); nkSfx('boing'); if (typeof nkActorMiss === 'function') nkActorMiss(); return; }
      got = true;
      if (!byCoco) nkScore(w.id, tries === 0);
      const r = t.getBoundingClientRect();
      t.style.top = (r.top - t.parentNode.getBoundingClientRect().top) + 'px';
      t.classList.remove('go'); t.classList.add('pop');
      nkSfx('kick'); nkSfx('pop'); buzz(true);
      if (!nkCalm()) nkBurst(r.left + r.width / 2, r.top + r.height / 2);
      nkAgain(coco, 'hit');
      lanes.forEach(l => [...l.children].forEach(x => { if (x !== t) x.classList.add('fade'); }));
    };
    // Every beat: the line pulses; every eighth beat a new round (and the solo halfway).
    const onBeat = (b, ms) => {
      setTimeout(() => {
        if (!nkLive(s)) return;
        pulse.forEach((x, i) => x.classList.toggle('on', i === b % 4));
        if (b % 8 !== 0 || done) return;
        round++;
        if (round >= words.length) { done = true; band.stop(); return nkWin(s, ['en-great']); }
        if (round === solo) { coco.classList.add('solo'); nkSfx('snare'); later(() => coco.classList.remove('solo'), band.beat * 7000); return; }
                nestPlay(['w-' + words[round].id]);
        drop(round, 0);
      }, ms);
    };
    NE.off = () => { if (band) band.stop(); };
    nestPlay(nestPrompt(s, opening), () => { if (nkLive(s)) band = nkArcBand(NE.u.id, NE.age <= 5 ? 84 : 96, onBeat); });
  }
};

(function nkBeatStyle(){
  const st = document.createElement('style');
  st.textContent = `
.nkb{position:relative;width:100%;height:100%;border-radius:28px;overflow:hidden;background:linear-gradient(180deg,#ede9fe,#fce7f3)}
.nkb.painted{box-shadow:0 10px 30px rgba(40,40,90,.16)}
.nkb-lanes{position:absolute;left:4%;right:4%;top:0;bottom:22%;display:grid;grid-template-columns:repeat(3,1fr);gap:3%}
.nkb-lane{position:relative;border-radius:0 0 24px 24px;background:linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,.35));border:1px solid rgba(255,255,255,.5);border-top:0}
.nkb-tile{position:absolute;left:8%;right:8%;top:-30%;aspect-ratio:1;border-radius:24px;border:1px solid var(--stroke);background:var(--glass);box-shadow:var(--shadow),var(--inner);padding:10%;cursor:pointer;
  backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);transition-property:top;transition-timing-function:linear}
.nkb-tile.go{top:calc(100% - 50%)}
.nkb-tile img,.nkb-tile .nk-dots{width:100%;height:100%;object-fit:contain;pointer-events:none}
.nkb-tile.pop{transition:transform .3s ease,opacity .3s ease;transform:scale(1.4);opacity:0}
.nkb-tile.fade{opacity:.35}
.nkb-tile.no{animation:nkwig2 .45s ease}
.nkb-line{position:absolute;left:4%;right:4%;bottom:22%;height:6px;border-radius:3px;display:grid;grid-template-columns:repeat(4,1fr);gap:4px}
.nkb-line i{border-radius:3px;background:rgba(255,255,255,.7);transition:background .1s,box-shadow .1s}
.nkb-line i.on{background:#fde047;box-shadow:0 0 12px #fde047}
.nkb-coco{position:absolute;left:50%;bottom:0;height:21%;translate:-50% 0;object-fit:contain;filter:drop-shadow(0 8px 10px rgba(40,30,60,.25))}
.nkb-coco.hit{animation:nkback .25s ease}
.nkb-coco.solo{animation:nkbsolo .3s ease-in-out infinite alternate}
@keyframes nkbsolo{from{transform:rotate(-6deg) scale(1.05)}to{transform:rotate(6deg) scale(1.12)}}
.nkg-beat .nk-coach{visibility:hidden}
`;
  document.head.appendChild(st);
})();
