// Coco Ladders (Coco's arcade, stage D, ages 4 to 7; specs/nest.md): a board of twelve pictures in the painted park, two
// ladders and a rainbow slide. The kid (the pet) and Coco take turns: tap the dice (1 to 3), and Coco counts every hop out
// loud ("One, two, three!"); the picture landed on is said. The foot of a ladder goes up ("Up, up, up the ladder!"), the top
// of the slide goes down laughing ("Wheee!"). No snakes and nothing to lose; the first one home wins, and both endings are
// happy. Loaded on demand by docs/nest/arcade.js.

// Squares 0..11 snake up from the bottom left; [from, to] for the ladders and the slide.
const NK_LAD = { ladders: [[1, 6], [7, 10]], slide: [9, 3] };
const nkLadPos = i => { const r = Math.floor(i / 4), c = r % 2 ? 3 - i % 4 : i % 4; return [12.5 + c * 25, 84 - r * 30]; };
NK.ladders = {
  say: () => ['en-roll'], intro: ['en-count'], demo: true,
  render(s, opening){
    const pl = nkPlace('park'), tok = NE.tok, later = (f, ms) => setTimeout(() => { if (NE && NE.tok === tok) f(); }, ms);
    const num = ['one', 'two', 'three'];
    nkFill(`<div class="nk-scene nkl${pl.painted ? ' painted' : ''}" style="${pl.style}">${pl.html}
      <div class="nkl-board" id="nklb">${s.squares.map((w, i) => { const [x, y] = nkLadPos(i); return `<div class="nkl-sq${i === 11 ? ' home' : ''}" style="left:${x}%;top:${y}%">${i === 11 ? `<img src="${ASSETS}nest/arcade/tent.webp?v=${NEST_V}" alt="" draggable="false">` : nestPic(w)}</div>`; }).join('')}
        <div class="nkl-tok kid" id="nkltk">${dash.pet ? petArt(dash.pet, 'happy', 'nk-petsvg') : `<img src="${petSrc('fawn', 1, 'happy')}" alt="">`}</div>
        <img class="nkl-tok coco" id="nkltc" src="${nkPoseSrc('happy')}" alt="Coco" draggable="false"></div>
      <button class="nkl-dice" id="nkldice" aria-label="Roll"><img src="${ASSETS}nest/arcade/dice.webp?v=${NEST_V}" alt="" draggable="false"><span class="nkl-pips" id="nklpips"></span></button>
    </div>`);
    const board = document.getElementById('nklb'), dice = document.getElementById('nkldice'), pips = document.getElementById('nklpips');
    const tok_ = { kid: document.getElementById('nkltk'), coco: document.getElementById('nkltc') }, at = { kid: 0, coco: 0 };
    // The ladders and the slide, laid between the centers of their squares.
    const lay = () => {
      board.querySelectorAll('.nkl-way').forEach(x => x.remove());
      const bw = board.clientWidth, bh = board.clientHeight;
      const way = ([a, b], img, cls) => {
        const [x0, y0] = nkLadPos(a), [x1, y1] = nkLadPos(b), dx = (x1 - x0) / 100 * bw, dy = (y1 - y0) / 100 * bh, len = Math.hypot(dx, dy);
        const el = document.createElement('img');
        el.className = 'nkl-way ' + cls; el.alt = ''; el.draggable = false;
        el.src = ASSETS + 'nest/arcade/' + img + '.webp?v=' + NEST_V;
        el.style.cssText = `left:${x0}%;top:${y0}%;height:${len}px;transform:translate(-50%,0) rotate(${Math.atan2(-dx, dy) * 180 / Math.PI}deg)`;
        board.insertBefore(el, board.firstChild);
      };
      NK_LAD.ladders.forEach(l => way(l, 'ladder', 'lad'));
      way(NK_LAD.slide, 'slide', 'sl');
      place('kid'); place('coco');
    };
    const place = who => { const [x, y] = nkLadPos(at[who]); tok_[who].style.left = (x + (who === 'kid' ? -6 : 6)) + '%'; tok_[who].style.top = (y - 6) + '%'; };
    let turn = 'kid', busy = true, over = false;
    // Hops one square at a time, counting; then a ladder or the slide; then the picture's word.
    const move = (who, n, then) => {
      let k = 0;
      const hop = () => {
        if (!nkLive(s)) return;
        if (k >= n || at[who] >= 11) return land();
        at[who]++; k++;
        place(who); nkAgain(tok_[who], 'hop'); nkSfx('flip');
        nestPlay(['w-' + num[k - 1]], () => later(hop, 120));
      };
      const land = () => {
        const lad = NK_LAD.ladders.find(l => l[0] === at[who]), sl = NK_LAD.slide[0] === at[who];
        if (lad || sl) {
          at[who] = lad ? lad[1] : NK_LAD.slide[1];
          tok_[who].classList.add(lad ? 'climb' : 'slide');
          place(who);
          if (who === 'coco' && typeof nkPose === 'function') nkPose(lad ? 'cheer' : 'laugh', 1500);
          nkSfx(lad ? 'boing' : 'whoosh');
          return nestPlay([lad ? 'en-ladder' : 'en-slide'], () => { tok_[who].classList.remove('climb', 'slide'); land2(); });
        }
        land2();
      };
      const land2 = () => {
        if (at[who] >= 11) { over = true; return then(true); }
        const w = s.squares[at[who]];
        nkAgain(board.children[NK_LAD.ladders.length + 1 + at[who]] || tok_[who], 'pop');
        if (who === 'kid') nkScore(w.id, true);
        nestPlay(['w-' + w.id], () => then(false));
      };
      hop();
    };
    const roll = (byCoco) => {
      if (!nkLive(s) || over || (busy && !byCoco) || (turn !== 'kid' && !byCoco)) return;
      busy = true;
      const n = 1 + Math.floor(Math.random() * 3);
      dice.classList.add('spin'); nkSfx('rustle');
      pips.className = 'nkl-pips';
      later(() => {
        dice.classList.remove('spin');
        pips.className = 'nkl-pips n' + n; pips.innerHTML = '<i></i>'.repeat(n);
        move(turn, n, home => {
          if (home) {
            if (turn === 'kid') { tok_.kid.classList.add('yes'); nkWin(s, ['en-youwin']); }
            else { if (typeof nkPose === 'function') nkPose('dance', 2000); nkWin(s, ['en-iwin']); }
            return;
          }
          turn = turn === 'kid' ? 'coco' : 'kid';
          dice.classList.toggle('his', turn === 'coco');
          if (turn === 'coco') nestPlay(['en-mygo'], () => later(() => roll(true), 500));
          else nestPlay(['en-turn'], () => { busy = false; nkIdle(s, dice); });
        });
      }, 700);
    };
    dice.onclick = () => roll();
    lay();
    window.addEventListener('resize', lay);
    NE.off = () => window.removeEventListener('resize', lay);
    nestPlay(nestPrompt(s, opening), () => {
      if (!nkLive(s)) return;
      if (s.demo) { busy = true; later(() => nkHandTap(dice, () => roll(true)), 300); }
      else { busy = false; nkIdle(s, dice); }
    });
  }
};

(function nkLaddersStyle(){
  const st = document.createElement('style');
  st.textContent = `
.nkl{width:100%;height:100%;max-width:none;aspect-ratio:auto;display:grid;grid-template-rows:1fr auto}
.nkl-board{position:relative;margin:4% 3% 0}
.nkl-sq{position:absolute;width:19%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:22%;padding:3%;z-index:1;
  background:var(--glass);border:1px solid var(--stroke);box-shadow:var(--inner),0 6px 12px rgba(40,30,60,.14);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
.nkl-sq img,.nkl-sq .nk-dots{width:100%;height:100%;object-fit:contain}
.nkl-sq.home{background:rgba(253,230,138,.55);box-shadow:0 0 0 3px #fde047,0 8px 16px rgba(250,204,21,.35)}
.nkl-sq.pop{animation:nkback .4s ease}
.nkl-way{position:absolute;width:9%;transform-origin:50% 0;z-index:0;object-fit:fill;filter:drop-shadow(0 4px 6px rgba(40,30,60,.25));pointer-events:none}
.nkl-way.sl{width:13%}
.nkl-tok{position:absolute;width:15%;aspect-ratio:1;transform:translate(-50%,-50%);z-index:3;transition:left .3s ease,top .3s ease;pointer-events:none}
.nkl-tok.climb,.nkl-tok.slide{transition-duration:1.1s}
.nkl-tok.hop{animation:nklhop .3s ease}
.nkl-tok .nk-petsvg,.nkl-tok img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 6px 6px rgba(0,0,0,.25))}
.nkl-tok.coco{object-fit:contain}
.nkl-tok.yes{filter:drop-shadow(0 0 12px #22c55e)}
.nkl-dice{position:relative;justify-self:center;width:min(24cqw,16cqh,104px);aspect-ratio:1;border:0;background:none;padding:0;margin:2% 0 4%;cursor:pointer}
.nkl-dice img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 10px 12px rgba(40,30,60,.3))}
.nkl-dice.spin img{animation:nklspin .7s ease}
.nkl-dice.his{opacity:.6}
.nkl-pips{position:absolute;left:24%;top:30%;width:44%;aspect-ratio:1;display:none;flex-wrap:wrap;gap:12%;align-content:center;justify-content:center;
  background:#e98a7a;border-radius:20%}
.nkl-pips.n1,.nkl-pips.n2,.nkl-pips.n3{display:flex}
.nkl-pips i{width:26%;aspect-ratio:1;border-radius:50%;background:#fff}
@keyframes nklhop{50%{transform:translate(-50%,-80%)}}
@keyframes nklspin{0%{transform:rotate(0) scale(1)}50%{transform:rotate(200deg) scale(1.15)}100%{transform:rotate(360deg) scale(1)}}
`;
  document.head.appendChild(st);
})();
