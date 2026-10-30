// Chacho's Kitchen (Chacho's arcade, stage D, ages 4 to 7; specs/nest.md): Chacho is the chef in the painted kitchen. Customers
// (the animals and people the kid has met, and once the kid's own pet) come to the counter and order in English ("Two
// bananas, please!", o-<food>-<n>); the kid puts the food on the plate (a tap or a drag) and taps the bell. The right plate:
// the customer eats, says thank you and goes. Something else on it: "Hmm... no, thank you!" and the order again; a tap on a
// food on the plate takes it back. Ages 6 and 7 get two and three of a thing. Five customers. Loaded on demand.

NK.kitchen = {
  say: s => [nkKitOrder(s.orders[s.oi || 0])], intro: ['en-kitchen'], demo: true,
  render(s, opening){
    s.oi = 0;
    const pl = nkPlace('kitchen'), tok = NE.tok;
    nkFill(`<div class="nkk${pl.painted ? ' painted' : ''}" style="${pl.painted ? pl.style : ''}">
      <div class="nkk-guest" id="nkkguest"></div>
      <div class="nkk-bubble" id="nkkbub"></div>
      <div class="nkk-counter"><div class="nkk-plate" id="nkkplate"><img class="nkk-dish" src="${ASSETS}nest/arcade/plate.webp?v=${NEST_V}" alt="" draggable="false"><div class="nkk-on" id="nkkon"></div></div>
        <button class="nkk-bell" id="nkkbell" aria-label="Ready">${icon('bell-simple-ringing', 'duotone')}</button></div>
      <div class="nkk-shelf">${s.foods.map((w, i) => `<button class="nkk-food" data-f="${i}" aria-label="${esc(w.en)}">${nestPic(w)}</button>`).join('')}</div>
    </div>`);
    const guest = document.getElementById('nkkguest'), bub = document.getElementById('nkkbub'), plate = document.getElementById('nkkplate'), on = document.getElementById('nkkon'), bell = document.getElementById('nkkbell');
    const later = (f, ms) => setTimeout(() => { if (NE && NE.tok === tok) f(); }, ms);
    let put = [], tries = 0, open = false;
    const o = () => s.orders[s.oi];
    const drawPlate = () => {
      on.innerHTML = put.map((w, i) => `<button class="nkk-put" data-p="${i}" style="--i:${i};--n:${put.length}" aria-label="${esc(w.en)}">${nestPic(w)}</button>`).join('');
      on.querySelectorAll('[data-p]').forEach(b => b.onclick = () => { if (!open) return; put.splice(Number(b.dataset.p), 1); nkSfx('flip'); drawPlate(); });
      bell.classList.toggle('ready', put.length > 0);
    };
    const add = (w, from) => {
      if (!open || put.length >= 4) return;
      put.push(w); nkSfx('pop');
      if (from) nkAgain(from, 'tap');
      drawPlate();
      nkAgain(on.lastChild, 'in');
    };
    // A customer walks in and orders (the kid's pet is one of them, once).
    const come = () => {
      const c = o();
      put = []; tries = 0; drawPlate();
      guest.innerHTML = c.who ? nestPic(c.who) : petArt(dash.pet, 'happy', 'nk-petsvg');
      guest.className = 'nkk-guest in';
      bub.innerHTML = `${Array.from({ length: c.n }, () => nestPic(c.w)).join('')}`;
      bub.className = 'nkk-bubble n' + c.n;
      nkSfx('whoosh');
      later(() => { bub.classList.add('on'); nestPlay([nkKitOrder(c)], () => {
        if (!nkLive(s)) return;
        open = true;
        if (s.demo && s.oi === 0) {
          NE.locked = true; open = false;
          const b = app.querySelector(`.nkk-food[data-f="${s.foods.findIndex(x => x.id === c.w.id)}"]`);
          let k = 0;
          const one = () => nkHandTap(b, () => { open = true; add(c.w, b); open = false; if (++k < c.n) later(one, 300); else later(() => nkHandTap(bell, () => { open = true; serve(true); }), 300); });
          one();
        } else nkIdle(s, () => put.length ? bell : app.querySelector(`.nkk-food[data-f="${s.foods.findIndex(x => x.id === c.w.id)}"]`));
      }); }, 650);
    };
    const serve = byCoco => {
      if (!nkLive(s) || !open || !put.length || (NE.locked && !byCoco)) return;
      const c = o(), ok = put.length === c.n && put.every(w => w.id === c.w.id);
      nkSfx('flip');
      if (!ok) {
        tries++;
        nkAgain(guest, 'no');
        nkMiss(['en-nothanks', nkKitOrder(c)]);
        return;
      }
      open = false; NE.locked = true;
      if (!byCoco) nkScore(c.w.id, tries === 0);
      bub.classList.remove('on');
      plate.classList.add('yes');
      nkSfx('munch'); nkCheer(s);
      if (c.who) nkAgain(guest, 'eat'); else nkPetMood(guest, 'celebrate');
      later(() => { put = []; drawPlate(); plate.classList.remove('yes'); }, 700);
      const last = s.oi >= s.orders.length - 1;
      if (last) { later(() => nkWin(s, ['en-yummy', nkPraise()]), 600); return; }
      nestPlay(['en-yummy'].concat(byCoco ? ['en-turn'] : []), () => {
        if (!nkLive(s)) return;
        guest.className = 'nkk-guest out';
        later(() => { NE.locked = false; s.oi++; come(); }, 500);
      });
    };
    app.querySelectorAll('.nkk-food').forEach(b => {
      const w = s.foods[Number(b.dataset.f)];
      nkDrag(b, { targets: () => [plate], drop: () => add(w), tap: () => add(w, b) });
    });
    bell.onclick = () => serve();
    nestPlay(nestPrompt(s, opening).slice(0, -1), come);
  }
};
// The order's clip: o-<food>-<n> (a food with only one line is never ordered by number).
const nkKitOrder = c => 'o-' + c.w.id + '-' + c.n;

(function nkKitchenStyle(){
  const st = document.createElement('style');
  st.textContent = `
.nkk{position:relative;width:100%;height:100%;border-radius:28px;overflow:hidden;display:grid;grid-template-rows:1fr auto auto;background:linear-gradient(180deg,#fff7ed,#fde7c7)}
.nkk.painted{box-shadow:0 10px 30px rgba(40,40,90,.16)}
.nkk-guest{position:absolute;left:8%;top:14%;width:38%;aspect-ratio:1;transform:translateX(-140%);transition:transform .6s cubic-bezier(.3,1.3,.5,1)}
.nkk-guest.in{transform:none}
.nkk-guest.out{transform:translateX(-160%);transition-timing-function:ease-in}
.nkk-guest img,.nkk-guest .nk-petsvg,.nkk-guest .nk-dots{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 10px 10px rgba(40,30,60,.25))}
.nkk-guest.no{animation:nkwig2 .5s ease}
.nkk-guest.eat{animation:nkmunch .5s ease 2}
.nkk-bubble{position:absolute;right:6%;top:6%;min-width:30%;max-width:52%;padding:10px 12px;border-radius:26px 26px 26px 8px;display:flex;gap:4px;justify-content:center;
  background:var(--glass);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid var(--stroke);box-shadow:var(--shadow),var(--inner);transform:scale(0);transform-origin:0 100%;transition:transform .35s cubic-bezier(.2,1.5,.4,1)}
.nkk-bubble.on{transform:scale(1)}
.nkk-bubble img,.nkk-bubble .nk-dots{width:min(15cqw,12cqh,70px);aspect-ratio:1;object-fit:contain}
.nkk-counter{position:relative;display:flex;align-items:center;justify-content:center;gap:4%;padding:0 4%;align-self:end}
.nkk-plate{position:relative;width:min(56cqw,30cqh);aspect-ratio:1}
.nkk-dish{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 8px 10px rgba(40,30,60,.22))}
.nkk-plate.yes .nkk-dish{filter:drop-shadow(0 0 14px rgba(34,197,94,.8))}
.nkk-on{position:absolute;inset:18%}
.nkk-put{position:absolute;left:50%;top:50%;width:52%;aspect-ratio:1;border:0;background:none;padding:0;cursor:pointer;
  transform:translate(-50%,-50%) rotate(calc(var(--i) * 90deg)) translateY(calc(var(--n) * -8% + 8%)) rotate(calc(var(--i) * -90deg))}
.nkk-put img,.nkk-put .nk-dots{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 4px 4px rgba(0,0,0,.2))}
.nkk-put.in img{animation:nkback .35s ease}
.nkk-bell{width:min(20cqw,74px);aspect-ratio:1;border-radius:50%;border:0;font-size:min(10cqw,38px);color:#fff;cursor:pointer;opacity:.5;
  background:linear-gradient(145deg,#fcd34d,#f59e0b);box-shadow:0 10px 20px rgba(245,158,11,.35);transition:opacity .2s;display:grid;place-items:center}
.nkk-bell.ready{opacity:1;animation:nkpulse 1.4s ease-in-out infinite}
.nkk-shelf{display:flex;gap:2.5%;justify-content:center;padding:3% 3% 4%}
.nkk-food{width:min(18cqw,12cqh,84px);aspect-ratio:1;border-radius:22px;border:1px solid var(--stroke);background:var(--glass);box-shadow:var(--inner),0 6px 12px rgba(40,30,60,.12);padding:7px;cursor:pointer;touch-action:none}
.nkk-food img,.nkk-food .nk-dots{width:100%;height:100%;object-fit:contain;pointer-events:none}
.nkk-food.tap{animation:nkback .3s ease}
`;
  document.head.appendChild(st);
})();
