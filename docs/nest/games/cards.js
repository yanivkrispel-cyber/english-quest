// Color Cards (Chacho's arcade, stage C, ages 4 to 7; specs/nest.md): a matching card game against Chacho on the colors (and
// numbers) the kid has met. Play a card of the same color or the same number as the one on the pile; every card played is
// said in English ("Blue! Three!"). No card to play: take one from the deck. Chacho plays his own cards (and often has to take
// one), and once a game the "Chacho sneezes!" card blows the color to a new one. Whoever empties the hand first wins; nobody
// keeps score and both endings are happy. Loaded on demand by docs/nest/arcade.js.

NK.cards = {
  say: () => [], intro: ['en-cards'], demo: true,
  render(s, opening){
    const tok = NE.tok, N = s.nums || 3, glow = NE.age <= 5;
    const later = (f, ms) => setTimeout(() => { if (NE && NE.tok === tok) f(); }, ms);
    // The deck: every color with every number, and one sneeze card, shuffled.
    let deck = shuffle([].concat(...s.colors.map(c => Array.from({ length: N }, (_, i) => ({ c, n: i + 1 })))).concat([{ sneeze: true }]));
    const take = () => { if (!deck.length) deck = shuffle([].concat(...s.colors.map(c => Array.from({ length: N }, (_, i) => ({ c, n: i + 1 }))))); return deck.pop(); };
    const mine = [], his = [];
    for (let i = 0; i < s.hand; i++) { mine.push(take()); his.push(take()); }
    let top = take();
    while (top.sneeze) { deck.unshift(top); top = take(); }
    let color = top.c, turn = 'kid', tries = 0, over = false, shown = !s.demo;
    const hex = c => ((nkWord(c) || {}).color) || '#94a3b8';
    const numWord = n => ['one', 'two', 'three', 'four', 'five'][n - 1];
    const face = k => k.sneeze ? `<span class="nkc-face sneeze"><img src="${nkPoseSrc('sneeze')}" alt="" draggable="false"></span>`
      : `<span class="nkc-face" style="--c:${hex(k.c)}">${s.nums ? `<b>${k.n}</b>` : `<i class="nkc-dots n${k.n}">${'<i></i>'.repeat(k.n)}</i>`}</span>`;
    const ok = k => k.sneeze || k.c === color || (s.nums && k.n === top.n);
    const keysOf = k => k.sneeze ? ['en-achoo'] : ['w-' + k.c].concat(s.nums ? ['w-' + numWord(k.n)] : []);
    nkFill(`<div class="nkc">
      <div class="nkc-his" id="nkchis"></div>
      <div class="nkc-mid"><button class="nkc-deck" id="nkcdeck" aria-label="Take a card"><span class="nkc-back"></span><span class="nkc-back"></span><span class="nkc-back"></span></button>
        <div class="nkc-pile" id="nkcpile"></div></div>
      <div class="nkc-mine" id="nkcmine"></div>
    </div>`);
    const hisEl = document.getElementById('nkchis'), mineEl = document.getElementById('nkcmine'), pile = document.getElementById('nkcpile'), deckEl = document.getElementById('nkcdeck');
    const draw = () => {
      hisEl.innerHTML = his.map((_, i) => `<span class="nkc-back" style="--i:${i - (his.length - 1) / 2}"></span>`).join('');
      pile.innerHTML = `<span class="nkc-card on" style="--c:${hex(color)}">${face(top.sneeze ? Object.assign({}, top) : top)}</span>`;
      if (top.sneeze) pile.firstChild.style.setProperty('--ring', hex(color));
      mineEl.style.setProperty('--n', mine.length);
      mineEl.innerHTML = mine.map((k, i) => `<button class="nkc-card${turn === 'kid' && glow && ok(k) ? ' can' : ''}" data-k="${i}" style="--i:${i - (mine.length - 1) / 2};--c:${k.sneeze ? '#a855f7' : hex(k.c)}">${face(k)}</button>`).join('');
      mineEl.querySelectorAll('[data-k]').forEach(b => b.onclick = () => play(Number(b.dataset.k)));
      deckEl.classList.toggle('can', turn === 'kid' && !mine.some(ok));
    };
    // A card flies from where it was to the pile, then the pile shows it.
    const fly = (from, k, then) => {
      const a = from.getBoundingClientRect(), b = pile.getBoundingClientRect();
      const el = document.createElement('span');
      el.className = 'nkc-card nkc-fly';
      el.style.cssText = `left:${a.left}px;top:${a.top}px;width:${b.width}px;height:${b.height}px;--c:${hex(k.c || color)}`;
      el.innerHTML = face(k);
      document.body.appendChild(el);
      nkSfx('flip');
      const end = () => { el.remove(); then(); };
      if (nkCalm()) return end();
      try { el.animate([{ transform: 'rotate(-8deg) scale(.9)' }, { transform: `translate(${b.left - a.left}px,${b.top - a.top}px) rotate(4deg)` }], { duration: 420, easing: 'cubic-bezier(.3,.8,.4,1)' }).onfinish = end; }
      catch(e){ end(); }
    };
    // A card on the pile: the sneeze picks a new color; the hand that is empty wins.
    const land = (k, who, then) => {
      top = k;
      if (k.sneeze) {
        color = nkPick(s.colors.filter(c => c !== color));
        if (typeof nkFeathers === 'function') nkFeathers();
        nkMove(nkCocoEl(), 'sneeze'); if (typeof nkPose === 'function') nkPose('sneeze', 1200);
      } else color = k.c;
      draw();
      nkAgain(pile.firstChild, 'pop');
      const keys = k.sneeze ? ['en-achoo', 'w-' + color] : keysOf(k);
      if (!(who === 'kid' ? mine : his).length) {
        over = true;
        if (who === 'kid') { pile.firstChild.classList.add('yes'); nkWin(s, keys.concat(['en-youwin'])); }
        else { if (typeof nkPose === 'function') nkPose('dance', 2000); nkMove(nkCocoEl(), 'dance'); nkWin(s, keys.concat(['en-iwin'])); }
        return;
      }
      nestPlay(keys, then);
    };
    const kidTurn = () => {
      if (!nkLive(s) || over) return;
      turn = 'kid'; tries = 0; NE.locked = false; draw();
      const can = mine.findIndex(ok);
      if (!shown) {
        shown = true; NE.locked = true;
        const b = can >= 0 ? mineEl.querySelector(`[data-k="${can}"]`) : deckEl;
        later(() => nkHandTap(b, () => { NE.locked = false; if (can >= 0) play(can, true); else pick(true); }), 300);
        return;
      }
      nkIdle(s, () => { const i = mine.findIndex(ok); return i >= 0 ? mineEl.querySelector(`[data-k="${i}"]`) : deckEl; });
    };
    const play = (i, byCoco) => {
      if (!nkLive(s) || over || turn !== 'kid' || (NE.locked && !byCoco)) return;
      const k = mine[i], b = mineEl.querySelector(`[data-k="${i}"]`);
      if (!ok(k)) {
        tries++;
        nkAgain(b, 'no');
        nkMiss(['en-try', 'w-' + color].concat(s.nums ? ['w-' + numWord(top.n)] : []));
        return;
      }
      if (!byCoco && !k.sneeze) nkScore(k.c, tries === 0);
      turn = 'coco'; NE.locked = true;
      mine.splice(i, 1);
      b.style.visibility = 'hidden';
      nkCheer(s);
      fly(b, k, () => land(k, 'kid', () => later(cocoTurn, 300)));
    };
    const pick = byCoco => {
      if (!nkLive(s) || over || turn !== 'kid' || (NE.locked && !byCoco) || mine.some(ok)) return;
      turn = 'coco'; NE.locked = true;
      mine.push(take());
      nkSfx('flip'); draw();
      nkAgain(mineEl.lastChild, 'pop');
      const k = mine[mine.length - 1];
      nestPlay(['en-draw'], () => { if (!nkLive(s)) return; if (ok(k)) { turn = 'kid'; kidTurn(); } else later(cocoTurn, 300); });
    };
    deckEl.onclick = () => pick();
    // Chacho: he plays a card he can (not always: he is a bit silly), or takes one and looks surprised.
    const cocoTurn = () => {
      if (!nkLive(s) || over) return;
      turn = 'coco'; draw();
      nkMove(nkCocoEl(), 'hop'); if (typeof nkPose === 'function') nkPose('thinking', 1200);
      nestPlay(['en-mygo'], () => later(() => {
        if (!nkLive(s) || over) return;
        const i = his.findIndex(ok);
        if (i >= 0 && (Math.random() < .7 || his.length > mine.length + 1)) {
          const k = his.splice(i, 1)[0];
          draw();
          fly(hisEl, k, () => land(k, 'coco', () => later(kidTurn, 200)));
        } else {
          his.push(take());
          if (typeof nkPose === 'function') nkPose('surprised', 1200);
          nkSfx('flip'); draw();
          nestPlay(['en-draw'], () => later(kidTurn, 200));
        }
      }, 600));
    };
    draw();
    NE.locked = true;
    nestPlay(nestPrompt(s, opening).concat(keysOf(top)), kidTurn);
  }
};

(function nkCardsStyle(){
  const st = document.createElement('style');
  st.textContent = `
.nkc{position:relative;width:100%;height:100%;display:grid;grid-template-rows:auto 1fr auto;justify-items:center;align-items:center;--w:min(19cqw,15cqh,96px)}
.nkc-his{position:relative;height:calc(var(--w) * .9);width:100%}
.nkc-his .nkc-back{position:absolute;left:50%;top:0;width:calc(var(--w) * .62);transform:translateX(calc(-50% + var(--i) * var(--w) * .3)) rotate(calc(var(--i) * 6deg));transform-origin:50% 120%}
.nkc-mid{display:flex;gap:min(8cqw,40px);align-items:center}
.nkc-card,.nkc-back{display:block;width:var(--w);aspect-ratio:.7;border-radius:calc(var(--w) * .16);border:3px solid #fff;box-shadow:0 10px 18px rgba(40,30,70,.22)}
.nkc-back{background:repeating-linear-gradient(45deg,#8b8ffb 0 8px,#6366f1 8px 16px)}
.nkc-deck{position:relative;width:var(--w);aspect-ratio:.7;border:0;background:none;padding:0;cursor:pointer}
.nkc-deck .nkc-back{position:absolute;inset:0;width:100%}
.nkc-deck .nkc-back:nth-child(2){transform:translate(3px,-3px)}
.nkc-deck .nkc-back:nth-child(3){transform:translate(6px,-6px)}
.nkc-deck.can{animation:nkpulse 1.4s ease-in-out infinite}
.nkc-pile .nkc-card{width:calc(var(--w) * 1.25)}
.nkc-card{position:relative;overflow:hidden;background:radial-gradient(120% 70% at 30% 0%,rgba(255,255,255,.45),transparent 55%),linear-gradient(150deg,color-mix(in srgb,var(--c) 70%,#fff),var(--c) 60%,color-mix(in srgb,var(--c) 80%,#000));padding:0;cursor:pointer}
.nkc-card.yes{box-shadow:0 0 0 5px #22c55e,0 10px 18px rgba(34,197,94,.35)}
.nkc-face{position:absolute;left:50%;top:50%;width:72%;aspect-ratio:1;translate:-50% -50%;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#f3f4f6);display:grid;place-items:center;box-shadow:0 4px 8px rgba(0,0,0,.18),inset 0 -3px 6px rgba(0,0,0,.08)}
.nkc-face b{font-size:calc(var(--w) * .5);font-weight:800;color:var(--c);line-height:1;-webkit-text-stroke:1px rgba(0,0,0,.08)}
.nkc-pile .nkc-face b{font-size:calc(var(--w) * .62)}
.nkc-face.sneeze{background:conic-gradient(from 0deg,#ef4444,#f59e0b,#22c55e,#3b82f6,#a855f7,#ef4444);width:86%}
.nkc-face.sneeze img{width:84%;height:84%;object-fit:contain}
.nkc-dots{display:flex;flex-wrap:wrap;gap:8%;justify-content:center;align-content:center;width:84%}
.nkc-dots i{width:34%;aspect-ratio:1;border-radius:50%;background:var(--c)}
.nkc-mine{position:relative;height:calc(var(--w) * 1.5);width:100%}
.nkc-mine .nkc-card{position:absolute;left:50%;bottom:4px;transform:translateX(calc(-50% + var(--i) * min(var(--w) * .82, 86cqw / var(--n)))) rotate(calc(var(--i) * 4deg));transform-origin:50% 140%;transition:transform .2s}
.nkc-mine .nkc-card.can{transform:translateX(calc(-50% + var(--i) * min(var(--w) * .82, 86cqw / var(--n)))) translateY(-14%) rotate(calc(var(--i) * 4deg));box-shadow:0 0 0 4px #fde047,0 12px 22px rgba(250,204,21,.45)}
.nkc-mine .nkc-card.no{animation:nkcno .45s ease}
@keyframes nkcno{25%{translate:-8px 0}75%{translate:8px 0}}
.nkc-fly{position:fixed;z-index:60;pointer-events:none;margin:0}
`;
  document.head.appendChild(st);
})();
