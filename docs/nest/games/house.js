// Chacho's House (Chacho's arcade, stage D, ages 2 to 7; specs/nest.md): Chacho lives here. Every room is one of the painted places
// the kid's units have opened (the living room always; the kitchen once food is met, the playroom with toys or colors, the
// farm with animals...), with the things of those units standing in it. Everything answers a tap: it bounces and says its
// name, and Chacho hops over to it. The painting's own things answer too (stage B). The arrows go from room to room; a new
// room opens with each unit. No goal: the close button goes back to the arcade. Loaded on demand by docs/nest/arcade.js.

const NK_HOUSE_SPOTS = [[18, 70, 24], [50, 76, 26], [82, 70, 24], [32, 88, 22], [68, 90, 22]];
NK.house = {
  say: () => ['en-house'], intro: [],
  render(s, opening){
    s.ri = s.ri || 0;
    const tok = NE.tok, later = (f, ms) => setTimeout(() => { if (NE && NE.tok === tok) f(); }, ms);
    const room = () => s.rooms[s.ri];
    const draw = dir => {
      const r = room(), pl = nkPlace(r.place);
      const st = nkFill(`<div class="nk-scene nkho${pl.painted ? ' painted' : ''}${dir ? ' from-' + dir : ''}" style="${pl.style}">${pl.html}
        ${r.things.map((w, i) => `<button class="nk-it nkho-it" data-i="${i}" style="left:${NK_HOUSE_SPOTS[i][0]}%;top:${NK_HOUSE_SPOTS[i][1]}%;width:${NK_HOUSE_SPOTS[i][2]}%;aspect-ratio:1" aria-label="${esc(w.en)}">${nestPic(w)}</button>`).join('')}
        <img class="nkho-coco" id="nkhococo" src="${nkPoseSrc('wave')}" alt="Chacho" draggable="false">
        ${s.rooms.length > 1 ? `<button class="btn btn-glass icon-btn nkho-go l" data-go="-1" aria-label="Back">${icon('caret-left', 'bold')}</button>
          <button class="btn btn-glass icon-btn nkho-go r" data-go="1" aria-label="Next room">${icon('caret-right', 'bold')}</button>` : ''}
        <div class="nkho-dots">${s.rooms.map((x, i) => `<i class="${i === s.ri ? 'on' : ''}"></i>`).join('')}</div></div>`);
      const scene = st.querySelector('.nkho'), coco = document.getElementById('nkhococo');
      // Chacho hops to what was tapped and does something with it.
      const visit = el => {
        const a = scene.getBoundingClientRect(), b = el.getBoundingClientRect();
        coco.style.left = ((b.left + b.width / 2 - a.left) / a.width * 100).toFixed(1) + '%';
        coco.style.top = ((b.top - a.top) / a.height * 100 - 4).toFixed(1) + '%';
        coco.src = nkPoseSrc(nkPick(['point', 'laugh', 'cheer', 'surprised', 'clap', 'dance']));
        nkAgain(coco, 'hop');
      };
      scene.querySelectorAll('.nkho-it').forEach(b => b.onclick = () => {
        const w = r.things[Number(b.dataset.i)];
        nkAgain(b, 'wig'); nkSfx('pop');
        nkScore(w.id, true);
        if (!nestQueue) nestPlay(['w-' + w.id]); else nkSfx('boing');
        visit(b);
      });
      coco.onclick = () => { nkAgain(coco, 'hop'); coco.src = nkPoseSrc(nkPick(['laugh', 'sneeze', 'dance'])); if (!nestQueue) nestPlay([nkPick(['en-tickle', 'en-whee', 'en-achoo'])]); };
      scene.querySelectorAll('[data-go]').forEach(b => b.onclick = () => {
        const d = Number(b.dataset.go);
        s.ri = (s.ri + d + s.rooms.length) % s.rooms.length;
        nkSfx('whoosh'); nestStopAudio();
        draw(d > 0 ? 'r' : 'l');
        if (typeof nkActorOn === 'function') nkActorOn(s);
      });
      if (pl.painted && typeof nkHots === 'function') nkHots(scene, r.place);
      // A painted thing also brings Chacho over.
      scene.querySelectorAll('.nk-hot').forEach(h => h.addEventListener('click', () => visit(h)));
      later(() => { const it = scene.querySelector('.nkho-it'); if (it && nkLive(s)) nkIdle(s, it); }, 200);
    };
    draw();
    nestPlay(nestPrompt(s, opening));
  }
};

(function nkHouseStyle(){
  const st = document.createElement('style');
  st.textContent = `
.nkg-house .nk-coach{visibility:hidden}
.nkho{width:100%;height:100%;max-width:none;aspect-ratio:auto}
.nkho.from-r{animation:nkhor .45s ease-out}
.nkho.from-l{animation:nkhol .45s ease-out}
.nkho-it{z-index:2}
.nkho-coco{position:absolute;left:50%;top:38%;width:24%;z-index:3;transform:translate(-50%,-50%);transition:left .55s cubic-bezier(.4,1.4,.5,1),top .55s cubic-bezier(.4,1.4,.5,1);
  filter:drop-shadow(0 10px 10px rgba(40,30,60,.25));cursor:pointer}
.nkho-coco.hop{animation:nkhohop .55s ease}
.nkho-go{position:absolute;top:50%;z-index:4;width:48px;height:48px;font-size:22px;translate:0 -50%}
.nkho-go.l{left:10px}.nkho-go.r{right:10px}
.nkho-dots{position:absolute;left:50%;bottom:10px;translate:-50% 0;display:flex;gap:6px;z-index:4}
.nkho-dots i{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.6);box-shadow:0 1px 3px rgba(0,0,0,.2)}
.nkho-dots i.on{background:var(--primary);width:20px;border-radius:4px}
@keyframes nkhohop{0%,100%{transform:translate(-50%,-50%)}40%{transform:translate(-50%,-75%) scale(1.06)}}
@keyframes nkhor{from{transform:translateX(30%);opacity:0}to{transform:none;opacity:1}}
@keyframes nkhol{from{transform:translateX(-30%);opacity:0}to{transform:none;opacity:1}}
@media (prefers-reduced-motion: reduce){.nkho.from-r,.nkho.from-l,.nkho-coco.hop{animation:none}}
`;
  document.head.appendChild(st);
})();
