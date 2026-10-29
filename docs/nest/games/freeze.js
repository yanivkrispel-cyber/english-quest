// Dance Freeze (Coco's arcade, stage E, ages 2 to 7; specs/nest.md): the band plays and Coco calls a move ("Jump, jump,
// jump!", "Spin around!") and does it, the kid's pet with him; the kid dances in the room. The music stops: "Freeze!". Coco
// freezes too, wobbles, and every third time he falls over ("Whoa... oops! I fell down!"). Nothing is checked (no camera):
// it is a game for the body. Six rounds. Loaded on demand by docs/nest/arcade.js.

const NK_FREEZE_MOVE = { jump: 'hop', spin: 'spin', clap: 'flap', wiggle: 'giggle', stomp: 'surprise', dance: 'dance' };
NK.freeze = {
  say: () => ['en-dance'], intro: [],
  render(s, opening){
    const tok = NE.tok, later = (f, ms) => setTimeout(() => { if (NE && NE.tok === tok) f(); }, ms);
    const pl = nkPlace('playroom');
    nkFill(`<div class="nkf${pl.painted ? ' painted' : ''}" style="${pl.painted ? pl.style : ''}">
      <button class="nkf-coco" id="nkfcoco" aria-label="Coco"><img id="nkfimg" src="${nkPoseSrc('dance')}" alt="" draggable="false"></button>
      ${dash.pet ? `<div class="nkf-pet" id="nkfpet">${petArt(dash.pet, 'happy', 'nk-petsvg')}</div>` : ''}
      <div class="nkf-word" id="nkfword"></div></div>`);
    const coco = document.getElementById('nkfcoco'), img = document.getElementById('nkfimg'), pet = document.getElementById('nkfpet');
    let band = null, round = 0, moveT = 0;
    const moving = m => {
      clearInterval(moveT);
      const step = () => { nkMove(coco, NK_FREEZE_MOVE[m] || 'dance'); if (pet) nkMove(pet, Math.random() < .5 ? 'hop' : 'dance'); };
      step();
      moveT = setInterval(() => { if (!nkLive(s)) return clearInterval(moveT); step(); }, 1100);
    };
    const go = () => {
      if (!nkLive(s)) return;
      if (round >= s.moves.length) { clearInterval(moveT); if (band) band.stop(); return nkWin(s, ['en-great']); }
      const m = s.moves[round];
      app.querySelector('.nkf').classList.remove('frozen');
      img.src = nkPoseSrc('dance');
      nestPlay(['en-' + m], () => {
        if (!nkLive(s)) return;
        if (band) band.play(); else band = nkArcBand(NE.u.id + round, NE.age <= 3 ? 100 : 112, () => {});
        moving(m);
        later(stop, 4500 + Math.random() * 3500);
      });
    };
    const stop = () => {
      if (!nkLive(s)) return;
      clearInterval(moveT);
      if (band) band.pause();
      round++;
      app.querySelector('.nkf').classList.add('frozen');
      img.src = ASSETS + 'nest/arcade/freeze.webp?v=' + NEST_V;
      if (pet) nkPetMood(pet, 'thinking');
      nestPlay(['en-freeze'], () => {
        if (!nkLive(s)) return;
        coco.classList.add('wobble');
        const fall = round % 3 === 0;
        later(() => {
          coco.classList.remove('wobble');
          if (fall) { coco.classList.add('fall'); img.src = nkPoseSrc('surprised'); nkSfx('boing'); nestPlay(['en-fell'], () => later(() => { coco.classList.remove('fall'); if (pet) nkPetMood(pet, 'happy'); go(); }, 600)); }
          else { if (pet) nkPetMood(pet, 'celebrate'); nkCheer(s); nestPlay([nkPraise()], () => later(() => { if (pet) nkPetMood(pet, 'happy'); go(); }, 400)); }
        }, 2600);
      });
    };
    coco.onclick = () => { nkMove(coco, 'giggle'); nkSfx('boing'); };
    NE.off = () => { clearInterval(moveT); if (band) band.stop(); };
    nestPlay(nestPrompt(s, opening), go);
  }
};

(function nkFreezeStyle(){
  const st = document.createElement('style');
  st.textContent = `
.nkg-freeze .nk-coach{visibility:hidden}
.nkg-freeze #nkdpet{display:none}
.nkf{position:relative;width:100%;height:100%;display:grid;place-items:end center;border-radius:28px;overflow:hidden;background:linear-gradient(180deg,#e0e7ff,#fce7f3)}
.nkf.painted{box-shadow:0 10px 30px rgba(40,40,90,.16)}
.nkf-coco{position:relative;height:min(92%,64cqh);aspect-ratio:1;border:0;background:none;padding:0;margin-bottom:4%;cursor:pointer;-webkit-tap-highlight-color:transparent}
.nkf-coco img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 14px 16px rgba(40,30,60,.25));transform-origin:50% 90%}
.nkf-pet{position:absolute;right:3%;width:30%;aspect-ratio:1}
.nkf-pet .nk-petsvg{width:100%;height:100%}
.nkf .nkf-pet{bottom:6%}
.nkf.frozen{filter:saturate(.75)}
.nkf.frozen::after{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 40%,rgba(186,230,253,0),rgba(186,230,253,.45));pointer-events:none}
.nkf-coco.wobble img{animation:nkfwob .35s ease-in-out infinite alternate}
.nkf-coco.fall img{animation:nkffall .9s cubic-bezier(.5,0,.6,1.4) forwards}
@keyframes nkfwob{from{transform:rotate(-3deg)}to{transform:rotate(3deg)}}
@keyframes nkffall{0%{transform:rotate(0)}60%{transform:rotate(-80deg) translateY(10%)}100%{transform:rotate(-90deg) translate(-10%,22%)}}
`;
  document.head.appendChild(st);
})();
