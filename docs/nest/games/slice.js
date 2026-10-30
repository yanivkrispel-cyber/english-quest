// Chacho Slice (Chacho's arcade, stage C, ages 4 to 7; specs/nest.md): fruit the kid has met is thrown up from the bottom in
// soft arcs; Chacho says which one to slice ("Slice it! Banana!"). A swipe (or a tap) through the right fruit cuts it in two
// halves with a splash, and the kid's pet in the dock eats a piece. The wrong fruit bounces off and giggles; a fruit that
// falls is just thrown again: nothing is lost, and after a miss the throws get slower. Three of each fruit, three fruits.
// Once a game a big watermelon needs three cuts. Loaded on demand by docs/nest/arcade.js.

NK.slice = {
  say: s => ['en-slice', 'w-' + s.targets[s.ti || 0].id], intro: [], demo: true,
  render(s, opening){
    s.ti = 0;
    const pl = nkPlace('kitchen');
    nkFill(`<div class="nks${pl.painted ? ' painted' : ''}" id="nks" style="${pl.painted ? pl.style : ''}"><canvas class="nks-trail" id="nkstrail"></canvas></div>`);
    const box = document.getElementById('nks'), cv = document.getElementById('nkstrail'), cx = cv.getContext('2d'), tok = NE.tok;
    const fr = [], trail = [];
    let got = 0, slow = 1, raf = 0, last = 0, spawnAt = 0, big = s.targets.some(w => w.id === 'watermelon') ? 0 : -1, tries = 0, demoDone = !s.demo, paused = true;
    const need = 3;
    const W = () => box.clientWidth, H = () => box.clientHeight;
    const target = () => s.targets[s.ti];
    const later = (f, ms) => setTimeout(() => { if (NE && NE.tok === tok) f(); }, ms);
    const size = () => Math.min(W() * .26, H() * .22, 130);
    // A fruit: an element with its picture, thrown from below the stage in an arc (x, y in px, speeds in px a second).
    const throwOne = (w, opts) => {
      const o = opts || {}, sz = size() * (o.big ? 1.5 : 1), el = document.createElement('button');
      el.className = 'nks-f' + (o.big ? ' big' : '');
      el.innerHTML = nestPic(w);
      el.style.width = el.style.height = sz + 'px';
      box.appendChild(el);
      const x = W() * (.18 + Math.random() * .64), h = H(), g = h * 1.25 * slow * slow;
      const vy = -Math.sqrt(2 * g * h * (.62 + Math.random() * .2)), vx = (W() / 2 - x) * (.25 + Math.random() * .35) * slow;
      const f = { el, w, x, y: h + sz / 2, vx, vy, g, r: 0, vr: (Math.random() - .5) * 120, sz, big: !!o.big, hits: o.big ? 3 : 1, cut: false };
      fr.push(f);
      nkSfx('whoosh');
      return f;
    };
    const pickNext = () => {
      const t = target(), others = s.pool.filter(x => x.id !== t.id), onT = fr.filter(f => !f.cut && f.w.id === t.id).length;
      if (big === 0 && got >= 1) { big = 1; return throwOne(nkWord('watermelon') || t, { big: true }); }
      return throwOne(onT < 1 || !others.length || Math.random() < .55 ? t : nkPick(others));
    };
    const split = f => {
      f.cut = true;
      const r = f.el.getBoundingClientRect(), b = box.getBoundingClientRect();
      ['l', 'r'].forEach(side => {
        const h = f.el.cloneNode(true);
        h.className = 'nks-half ' + side;
        h.style.cssText = `left:${r.left - b.left}px;top:${r.top - b.top}px;width:${r.width}px;height:${r.height}px`;
        box.appendChild(h);
        const dx = side === 'l' ? -60 : 60;
        try { h.animate([{ transform: `rotate(${f.r}deg)`, opacity: 1 }, { transform: `translate(${dx}px,${H() * .5}px) rotate(${f.r + (side === 'l' ? -80 : 80)}deg)`, opacity: 0 }], { duration: 900, easing: 'cubic-bezier(.3,0,.8,.6)' }).onfinish = () => h.remove(); }
        catch(e){ h.remove(); }
      });
      const sp = document.createElement('i');
      sp.className = 'nks-splash';
      sp.style.cssText = `left:${r.left - b.left + r.width / 2}px;top:${r.top - b.top + r.height / 2}px;--c:${nkPick(NK_FUN)}`;
      box.appendChild(sp);
      later(() => sp.remove(), 700);
      f.el.remove();
    };
    // A cut through a fruit (a swipe or a tap). byCoco: the demo's hand.
    const cut = (f, byCoco) => {
      if (!nkLive(s) || f.cut || (paused && !byCoco)) return;
      const t = target();
      if (f.big) {
        if (--f.hits > 0) { nkAgain(f.el, 'hit'); nkSfx('pop'); f.vy = Math.min(f.vy, -f.g * .25); return; }
        split(f); nkSfx('pop'); buzz(true); nkMove(nkCocoEl(), 'dance'); nestPlay(['w-' + f.w.id, 'en-wow']); return;
      }
      if (f.w.id !== t.id) {
        tries++; slow = Math.max(.75, slow - .08);
        f.vx = -f.vx * 1.4; f.vy = Math.min(f.vy, 0) - f.g * .15; f.vr = 600;
        nkAgain(f.el, 'no'); nkMiss(['w-' + f.w.id, 'en-try', 'w-' + t.id]);
        return;
      }
      split(f); nkSfx('pop'); buzz(true);
      if (!byCoco) nkScore(t.id, tries === 0);
      tries = 0; got++;
      const p = nkPetEl();
      if (p) { nkMove(p, 'hop'); nkSfx('munch'); }
      if (got < need) { nkCoco('celebrate'); nestPlay(['w-' + t.id]); later(() => nkCoco('happy'), 700); return; }
      got = 0; paused = true;
      fr.forEach(x => { if (!x.cut) { x.cut = true; x.el.classList.add('fade'); later(() => x.el.remove(), 400); } });
      fr.length = 0;
      if (s.ti >= s.targets.length - 1) { cancelAnimationFrame(raf); box.classList.add('yes'); nkWin(s, [nkPraise()]); return; }
      if (typeof nkActorWin === 'function') nkActorWin(s);
      nkCoco('celebrate');
      nestPlay([nkPraise()], () => { if (!nkLive(s)) return; s.ti++; ask(); });
    };
    // The swipe: every pointer move draws the blade's trail and cuts what it crosses.
    const hitAt = (x, y) => { for (const f of fr) if (!f.cut && Math.hypot(f.x - x, f.y - y) < f.sz * .5) cut(f); };
    let down = false, px = 0, py = 0;
    box.addEventListener('pointerdown', e => { down = true; const b = box.getBoundingClientRect(); px = e.clientX - b.left; py = e.clientY - b.top; trail.push([px, py, performance.now()]); hitAt(px, py); });
    box.addEventListener('pointermove', e => {
      if (!down) return;
      const b = box.getBoundingClientRect(), x = e.clientX - b.left, y = e.clientY - b.top;
      for (let k = 1; k <= 4; k++) hitAt(px + (x - px) * k / 4, py + (y - py) * k / 4);
      px = x; py = y; trail.push([x, y, performance.now()]);
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(t => box.addEventListener(t, () => { down = false; }));
    const frame = now => {
      if (!NE || NE.tok !== tok) return;
      const dt = Math.min(.05, (now - (last || now)) / 1000);
      last = now;
      if (cv.width !== box.clientWidth) { cv.width = box.clientWidth; cv.height = box.clientHeight; }
      if (!paused && now > spawnAt && fr.filter(f => !f.cut).length < (NE.age <= 5 ? 2 : 3)) { pickNext(); spawnAt = now + (1100 + Math.random() * 700) / slow; }
      for (let i = fr.length - 1; i >= 0; i--) {
        const f = fr[i];
        if (f.cut) { fr.splice(i, 1); continue; }
        f.vy += f.g * dt; f.x += f.vx * dt; f.y += f.vy * dt; f.r += f.vr * dt;
        if (f.x < f.sz / 2 || f.x > W() - f.sz / 2) f.vx = -f.vx;
        if (f.y > H() + f.sz && f.vy > 0) { f.el.remove(); fr.splice(i, 1); continue; }
        f.el.style.transform = `translate(${f.x - f.sz / 2}px,${f.y - f.sz / 2}px) rotate(${f.r}deg)`;
        // The demo: Chacho's hand cuts the first right fruit at the top of its arc.
        if (!demoDone && f.w.id === target().id && f.vy > -40 && f.vy < 60 && !f.big) {
          demoDone = true; paused = true; const keep = f;
          nkHandTap(f.el, () => { cut(keep, true); NE.locked = false; nestPlay(['en-turn'], () => { if (nkLive(s)) paused = false; }); });
          f.vy = 0; f.g = 0; f.vx = 0;
        }
      }
      cx.clearRect(0, 0, cv.width, cv.height);
      while (trail.length && now - trail[0][2] > 160) trail.shift();
      if (trail.length > 1) {
        cx.lineCap = 'round'; cx.lineJoin = 'round';
        for (let i = 1; i < trail.length; i++) {
          const a = 1 - (now - trail[i][2]) / 160;
          cx.strokeStyle = `rgba(255,255,255,${(a * .95).toFixed(2)})`; cx.lineWidth = 3 + a * 9;
          cx.beginPath(); cx.moveTo(trail[i - 1][0], trail[i - 1][1]); cx.lineTo(trail[i][0], trail[i][1]); cx.stroke();
        }
      }
      raf = requestAnimationFrame(frame);
    };
    NE.off = () => cancelAnimationFrame(raf);
    const ask = () => nestPlay(['en-slice', 'w-' + target().id], () => { if (nkLive(s)) { paused = false; spawnAt = 0; } });
    raf = requestAnimationFrame(frame);
    nestPlay(nestPrompt(s, opening).slice(0, -2), ask);
  }
};

(function nkSliceStyle(){
  const st = document.createElement('style');
  st.textContent = `
.nks{position:relative;width:100%;height:100%;overflow:hidden;border-radius:28px;touch-action:none;user-select:none;-webkit-user-select:none;
  background:radial-gradient(120% 80% at 50% 0%,rgba(255,255,255,.55),rgba(255,255,255,0) 60%),linear-gradient(180deg,#ffe8d6,#ffd1dc 55%,#e9d5ff);box-shadow:var(--inner)}
.nks.painted{box-shadow:0 10px 30px rgba(40,40,90,.16)}
.nks.painted::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,0) 40%,rgba(255,240,230,.35));pointer-events:none}
.nks.yes{box-shadow:0 0 0 5px #22c55e inset}
.nks-trail{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:3}
.nks-f{position:absolute;left:0;top:0;border:0;background:none;padding:0;pointer-events:none;will-change:transform}
.nks-f img,.nks-half img{width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 8px 8px rgba(60,30,40,.22))}
.nks-f.no img{animation:nkwig2 .5s ease}
.nks-f.hit img{animation:nkback .3s ease}
.nks-f.fade{opacity:0;transition:opacity .35s}
.nks-half{position:absolute;border:0;background:none;padding:0;pointer-events:none}
.nks-half.l{clip-path:polygon(0 0,52% 0,48% 100%,0 100%)}
.nks-half.r{clip-path:polygon(52% 0,100% 0,100% 100%,48% 100%)}
.nks-splash{position:absolute;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;background:var(--c);pointer-events:none;
  box-shadow:-40px -20px 0 -2px var(--c),36px -28px 0 -3px var(--c),-30px 30px 0 -3px var(--c),44px 22px 0 -1px var(--c),0 -46px 0 -4px var(--c),4px 44px 0 -2px var(--c);
  animation:nkssplash .6s ease-out forwards}
@keyframes nkssplash{0%{transform:scale(.3);opacity:1}100%{transform:scale(1.6);opacity:0}}
`;
  document.head.appendChild(st);
})();
