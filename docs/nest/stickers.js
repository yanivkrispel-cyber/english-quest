// The sticker book (for the kid) and the parents' weekly postcard (specs/nest-home.md, "The sticker book and the postcard").
// Runs in the app's global scope after play.js: every top-level name starts with nk / NK (here nks / NKS), and none is
// shared with src/Index.html, play.js, home.js or echo.js (test/nest-check.js checks it).
//
// The book: a page per unit played, every word a clay sticker (the games' pictures, nestPic). A word met (the kid's
// `known` stats from the server) is in full color and pops with a shine the first time the kid sees it; a word not met
// yet is a soft silhouette. No locks, no counters, no luck. A free page: the kid drags stickers onto a place drawn in
// code (nkPlace). On the phone only: the stickers already seen and the free page (local storage, per kid).
//
// The postcard (parents' area, behind the parents' code): a picture drawn in canvas with the kid's name, the words met
// in the last 7 days, a flower for each day played this week and one idea for home; shared from the parents' phone.

const NKS = { tab: null, board: null, parent: null };
const NKS_MAX = 40;                                        // stickers on the free page; a new one past this takes the oldest
const nksSeenKey = () => 'eq_nest_stickers_' + nkKid();     // the met stickers the kid has already seen pop
const nksBoardKey = () => 'eq_nest_board_' + nkKid();       // the free page: { p: place, s: [[word id, x %, y %], ...] }

(function nksStyle(){
  if (document.getElementById('nks-css')) return;
  const st = document.createElement('style');
  st.id = 'nks-css';
  st.textContent = `
.nks{position:fixed;inset:0;z-index:2;display:flex;flex-direction:column;gap:12px;max-width:760px;margin:0 auto;
  padding:calc(14px + env(safe-area-inset-top)) 16px calc(14px + env(safe-area-inset-bottom));overflow:hidden}
.nks-top{display:flex;align-items:center;gap:10px;flex:none}
.nks-top > .icon-btn{flex:none}
.nks-tabs{display:flex;gap:10px;overflow-x:auto;overflow-y:hidden;flex:1;min-width:0;padding:10px;scrollbar-width:none;touch-action:pan-x}
.nks-tabs::-webkit-scrollbar{display:none}
.nks-tab{flex:none;width:88px;height:88px;border-radius:50%;border:1px solid rgba(255,255,255,.95);background:rgba(255,255,255,.62);
  display:grid;place-items:center;cursor:pointer;padding:0;box-shadow:0 10px 22px -14px rgba(38,40,80,.4),var(--inner);transition:transform .15s,box-shadow .15s}
.nks-tab img{width:62px;height:62px;object-fit:contain;pointer-events:none}
.nks-tab .tile{width:62px;height:62px;border-radius:20px;font-size:34px}
.nks-tab.on{box-shadow:0 0 0 4px #fff,0 0 0 8px var(--primary),0 12px 24px -12px rgba(99,102,241,.6);transform:scale(1.04)}
.nks-tab:active{transform:scale(.95)}
.nks-body{flex:1 1 0;min-height:0;display:flex;flex-direction:column}
.nks-page{flex:1 1 0;min-height:0;border-radius:30px;padding:14px;container-type:size;display:grid;place-items:center}
.nks-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:3cqmin;width:min(100cqw,150cqh);justify-items:center}
@container (orientation: portrait){.nks-grid{grid-template-columns:repeat(2,1fr);width:min(100cqw,66cqh)}}
.nks-stk{position:relative;width:100%;max-width:200px;min-width:88px;aspect-ratio:1;border:0;padding:0;cursor:pointer;border-radius:28px;
  background:linear-gradient(160deg,rgba(255,255,255,.5),rgba(255,255,255,.18));box-shadow:inset 0 2px 8px rgba(38,40,80,.08),inset 0 -1px 1px rgba(255,255,255,.8);
  display:grid;place-items:center;overflow:hidden;-webkit-tap-highlight-color:transparent}
.nks-pic{width:76%;height:76%;display:grid;place-items:center;pointer-events:none}
.nks-pic img{width:100%;height:100%;object-fit:contain}
.nks-pic .nk-dots{width:86%}
.nks-stk.met .nks-pic{filter:drop-shadow(2px 0 0 #fff) drop-shadow(-2px 0 0 #fff) drop-shadow(0 2px 0 #fff) drop-shadow(0 -2px 0 #fff) drop-shadow(0 8px 10px rgba(38,40,80,.25))}
.nks-stk.no .nks-pic{filter:grayscale(1) brightness(0);opacity:.13}
.nks-stk.new .nks-pic{animation:nks-pop .7s cubic-bezier(.3,1.6,.5,1) both;animation-delay:var(--d,0s)}
.nks-shine{position:absolute;inset:0;pointer-events:none;background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.95) 48%,rgba(255,255,255,.2) 56%,transparent 70%);
  transform:translateX(-120%);animation:nks-shine 1.1s ease-out forwards;animation-delay:calc(var(--d,0s) + .35s)}
.nks-stk.say .nks-pic{animation:nks-hop .5s ease}
.nks-stk.wig .nks-pic{animation:nkwig .5s ease}
.nks-free{flex:1 1 0;min-height:0;display:flex;flex-direction:column;gap:12px}
.nks-stage{flex:1 1 0;min-height:0;container-type:size;display:grid;place-items:center}
.nks-board.nk-scene{width:min(100cqw,133cqh);max-width:none;aspect-ratio:4/3;touch-action:none}
@container (orientation: portrait){.nks-board.nk-scene{width:min(100cqw,100cqh);max-width:none;aspect-ratio:1}}
.nks-on{position:absolute;inset:0;z-index:2}
.nks-pl{position:absolute;width:24%;aspect-ratio:1;transform:translate(-50%,-50%);border:0;padding:0;background:none;cursor:grab;touch-action:none;-webkit-tap-highlight-color:transparent}
.nks-pl::before{content:'';position:absolute;inset:-10%}
.nks-pl .nks-pic{width:100%;height:100%;filter:drop-shadow(2px 0 0 #fff) drop-shadow(-2px 0 0 #fff) drop-shadow(0 2px 0 #fff) drop-shadow(0 -2px 0 #fff) drop-shadow(0 6px 8px rgba(38,40,80,.28))}
.nks-pl .nk-dots,.nks-ti .nk-dots,.nks-ghost .nk-dots{width:100%}
.nks-pl.in .nks-pic{animation:nks-pop .5s cubic-bezier(.3,1.6,.5,1) both}
.nks-pl.say .nks-pic{animation:nks-hop .5s ease}
.nks-pl.lift{opacity:.25}
.nks-bar{flex:none;display:flex;gap:10px;align-items:center;height:100px}
.nks-placeb{flex:none;width:96px;height:96px;border-radius:26px;padding:6px;cursor:pointer;border:1px solid var(--stroke);display:grid;place-items:center}
.nks-mini.nk-scene{display:block;width:100%;max-width:none;aspect-ratio:1;border-radius:18px;pointer-events:none;box-shadow:none}
.nks-tray{flex:1;min-width:0;height:100px;display:flex;gap:6px;align-items:center;overflow-x:auto;overflow-y:hidden;padding:0 6px;border-radius:26px;scrollbar-width:none;touch-action:pan-x}
.nks-tray::-webkit-scrollbar{display:none}
.nks-ti{flex:none;width:88px;height:88px;border:0;padding:4px;background:none;cursor:grab;display:grid;place-items:center;-webkit-tap-highlight-color:transparent}
.nks-ti .nks-pic{width:100%;height:100%;filter:drop-shadow(2px 0 0 #fff) drop-shadow(-2px 0 0 #fff) drop-shadow(0 2px 0 #fff) drop-shadow(0 -2px 0 #fff) drop-shadow(0 5px 6px rgba(38,40,80,.22))}
.nks-ti.lift{opacity:.3}
.nks-ghost{position:fixed;z-index:60;pointer-events:none;margin:0;transform:none}
.nks-ghost .nks-pic{width:100%;height:100%;filter:drop-shadow(2px 0 0 #fff) drop-shadow(-2px 0 0 #fff) drop-shadow(0 2px 0 #fff) drop-shadow(0 -2px 0 #fff) drop-shadow(0 16px 18px rgba(38,40,80,.35))}
.nks-board.hot{box-shadow:0 0 0 5px rgba(255,255,255,.95),0 0 0 9px rgba(99,102,241,.45),0 10px 30px rgba(40,40,90,.16)}
.nks-places{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.nks-pick{border:0;padding:0;background:none;cursor:pointer;border-radius:20px;min-height:88px}
.nks-pick .nk-scene{display:block;width:100%;max-width:none;aspect-ratio:1;border-radius:20px;pointer-events:none}
.nks-pick.on{box-shadow:0 0 0 4px #fff,0 0 0 8px var(--primary)}
.nks-pcrow{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}
.nks-card{display:grid;gap:12px;max-height:calc(100vh - 24px);overflow-y:auto}
.nks-card img.nks-pc{display:block;width:auto;max-width:100%;max-height:52vh;margin:0 auto;border-radius:18px;box-shadow:0 14px 30px -14px rgba(38,40,80,.4);-webkit-touch-callout:default;user-select:auto}
.nks-card .row-flex{gap:8px;flex-wrap:wrap}
@keyframes nks-pop{0%{transform:scale(.2);opacity:0}60%{transform:scale(1.15);opacity:1}100%{transform:scale(1)}}
@keyframes nks-shine{to{transform:translateX(120%)}}
@keyframes nks-hop{0%,100%{transform:scale(1)}40%{transform:scale(1.14) translateY(-6%)}}
@media (prefers-reduced-motion: reduce){.nks-stk.new .nks-pic,.nks-pl.in .nks-pic,.nks-stk.say .nks-pic,.nks-pl.say .nks-pic{animation:none}.nks-shine{display:none}}
`;
  document.head.appendChild(st);
})();

// ---------- The kid's book ----------
// The units with a page: every unit played (not the reviews, whose words live on their units' pages). A kid who has not
// played yet gets today's unit, all silhouettes, so the book is never empty.
function nksUnits(){
  const n = (dash && dash.nest) || {}, ids = new Set((n.played || []).map(id => String(id).split('.')[0]));
  let list = EQ_NEST.units.filter(u => !u.review && ids.has(u.id));
  if (!list.length) { const u = nestUnit(n.today); if (u && !u.review) list = [u]; else if (EQ_NEST.units[0]) list = [EQ_NEST.units[0]]; }
  return list;
}
const nksKnown = () => ((dash && dash.nest) || {}).known || {};
const nksCore = () => (((dash && dash.nest) || {}).age || 5) <= 3;
// Every word met, in the order of the units: the tray of the free page.
function nksMetWords(){
  const k = nksKnown();
  return [].concat(...nksUnits().map(u => nestWordsOf(u, nksCore()))).filter(w => k[w.id]);
}
const nksPicHtml = w => `<span class="nks-pic">${nestPic(w)}</span>`;

function nkStickers(){
  if (!dash || !dash.nest || !window.EQ_NEST) return renderDash();
  nestStopAudio();
  { const sky = document.getElementById('nksky'); if (sky) sky.remove(); }
  const units = nksUnits();
  if (NKS.tab !== 'free' && !units.some(u => u.id === NKS.tab)) NKS.tab = units[units.length - 1].id;
  window.scrollTo(0, 0);
  app.innerHTML = `<div class="nks" id="nksbook">
    <div class="nks-top">
      <button class="btn btn-glass icon-btn" id="nksback" aria-label="Home">${icon('house')}</button>
      <div class="nks-tabs" id="nkstabs">${units.map(u => `<button class="nks-tab" data-nkstab="${esc(u.id)}" aria-label="${esc(u.title)}"><img src="${esc(nestPicSrc(u.icon))}" alt="" draggable="false"></button>`).join('')}</div>
      <button class="nks-tab" data-nkstab="free" aria-label="My picture"><span class="tile t-chat">${icon('sticker', 'duotone')}</span></button>
    </div>
    <div class="nks-body" id="nksbody"></div>
  </div>`;
  document.getElementById('nksback').onclick = () => { nestStopAudio(); renderDash(); };
  app.querySelectorAll('[data-nkstab]').forEach(b => b.onclick = () => { if (NKS.tab === b.dataset.nkstab) return; NKS.tab = b.dataset.nkstab; nkSfx('flip'); nksShow(); });
  nksShow();
}

function nksShow(){
  const body = document.getElementById('nksbody');
  if (!body) return;
  app.querySelectorAll('[data-nkstab]').forEach(b => {
    const on = b.dataset.nkstab === NKS.tab;
    b.classList.toggle('on', on);
    if (on && b.parentNode.id === 'nkstabs') { const p = b.parentNode, x = b.offsetLeft - p.offsetLeft; if (x < p.scrollLeft || x + b.offsetWidth > p.scrollLeft + p.clientWidth) p.scrollLeft = x - 10; }
  });
  if (NKS.tab === 'free') return nksFree(body);
  const u = nestUnit(NKS.tab);
  if (u) nksPage(body, u);
}

// A unit's page: its words as stickers. A met word not seen in the book before pops in with a shine (once per kid).
function nksPage(body, u){
  const k = nksKnown(), words = nestWordsOf(u, nksCore()), seen = new Set(store.get(nksSeenKey()) || []);
  const fresh = words.filter(w => k[w.id] && !seen.has(w.id)).map(w => w.id);
  body.innerHTML = `<div class="nks-page glass"><div class="nks-grid">${words.map(w => {
    const met = !!k[w.id], nu = fresh.indexOf(w.id);
    return `<button class="nks-stk ${met ? 'met' : 'no'}${nu >= 0 ? ' new' : ''}" data-nksw="${esc(w.id)}" aria-label="${esc(met ? w.en : '')}"${nu >= 0 ? ` style="--d:${(nu * .18).toFixed(2)}s"` : ''}>${nksPicHtml(w)}${nu >= 0 ? '<span class="nks-shine"></span>' : ''}</button>`;
  }).join('')}</div></div>`;
  body.querySelectorAll('[data-nksw]').forEach(b => b.onclick = () => {
    if (b.classList.contains('met')) { b.classList.remove('new'); nkAgain(b, 'say'); nestPlay(['w-' + b.dataset.nksw]); }
    else { nkAgain(b, 'wig'); nkSfx('rustle'); }
  });
  if (fresh.length) {
    store.set(nksSeenKey(), [...seen, ...fresh].slice(-400));
    if (!nkCalm()) fresh.forEach((id, i) => setTimeout(() => { if (NKS.tab === u.id && document.getElementById('nksbody') === body) nkSfx('pop'); }, 120 + i * 180));
    nestPlay(['en-wow']);
  }
}

// ---------- The free page: stickers on a place, kept on this phone ----------
function nksBoard(){
  const b = store.get(nksBoardKey()), ok = b && NK_PLACE[b.p] && Array.isArray(b.s);
  return ok ? { p: b.p, s: b.s.filter(x => Array.isArray(x) && nkWord(x[0])).slice(-NKS_MAX) } : { p: 'park', s: [] };
}
const nksSave = () => store.set(nksBoardKey(), NKS.board);

function nksFree(body){
  NKS.board = nksBoard();
  const met = nksMetWords(), pl = nkPlace(NKS.board.p);
  body.innerHTML = `<div class="nks-free">
    <div class="nks-stage"><div class="nks-board nk-scene" id="nksboard" style="${pl.style}">${pl.html}<div class="nks-on" id="nkson"></div></div></div>
    <div class="nks-bar">
      <button class="nks-placeb soft" id="nksplace" aria-label="Places"><span class="nk-scene nks-mini" style="${pl.style}">${pl.html}</span></button>
      <div class="nks-tray soft" id="nkstray">${met.map(w => `<button class="nks-ti" data-nksw="${esc(w.id)}" aria-label="${esc(w.en)}">${nksPicHtml(w)}</button>`).join('')}</div>
    </div>
  </div>`;
  nksDrawPlaced();
  document.getElementById('nksplace').onclick = nksPlaces;
  body.querySelectorAll('.nks-ti').forEach(el => nksDrag(el, {
    tap: () => { nestPlay(['w-' + el.dataset.nksw]); nksAdd(el.dataset.nksw, 18 + Math.random() * 64, 22 + Math.random() * 56); },
    drop: (x, y) => nksAdd(el.dataset.nksw, x, y)
  }));
}

function nksDrawPlaced(){
  const on = document.getElementById('nkson');
  if (!on) return;
  on.innerHTML = NKS.board.s.map(([id, x, y], i) => `<button class="nks-pl" data-nksi="${i}" style="left:${x}%;top:${y}%" aria-label="${esc((nkWord(id) || {}).en || '')}">${nksPicHtml(nkWord(id))}</button>`).join('');
  on.querySelectorAll('.nks-pl').forEach(el => {
    const i = Number(el.dataset.nksi);
    nksDrag(el, {
      tap: () => { nkAgain(el, 'say'); nestPlay(['w-' + NKS.board.s[i][0]]); },
      drop: (x, y) => { const it = NKS.board.s.splice(i, 1)[0]; NKS.board.s.push([it[0], x, y]); nksSave(); nksDrawPlaced(); nkSfx('pop'); },
      off: () => { NKS.board.s.splice(i, 1); nksSave(); nksDrawPlaced(); nkSfx('whoosh'); }
    });
  });
}

function nksAdd(id, x, y){
  NKS.board.s.push([id, Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
  if (NKS.board.s.length > NKS_MAX) NKS.board.s = NKS.board.s.slice(-NKS_MAX);
  nksSave();
  nksDrawPlaced();
  const on = document.getElementById('nkson'), last = on && on.lastElementChild;
  if (last) last.classList.add('in');
  nkSfx('pop');
  buzz(true);
}

// A finger drag for the book (play.js's nkDrag needs a running session). opts: tap(), drop(x %, y %) on the board, off()
// for a drop outside it (a placed sticker comes off). The tray scrolls sideways: a sideways swipe there is the browser's.
function nksDrag(el, opts){
  el.addEventListener('pointerdown', e => {
    if (e.button > 0) return;
    const r = el.getBoundingClientRect(), x0 = e.clientX, y0 = e.clientY, inTray = el.classList.contains('nks-ti');
    let g = null, moved = false, board = null;
    const where = ev => {
      const q = board.getBoundingClientRect(), m = 12;
      if (ev.clientX < q.left - m || ev.clientX > q.right + m || ev.clientY < q.top - m || ev.clientY > q.bottom + m) return null;
      const cl = v => Math.max(7, Math.min(93, v));
      return [cl((ev.clientX - q.left) / q.width * 100), cl((ev.clientY - q.top) / q.height * 100)];
    };
    const move = ev => {
      if (!moved) {
        const dx = ev.clientX - x0, dy = ev.clientY - y0;
        if (Math.hypot(dx, dy) < 8) return;
        if (inTray && e.pointerType !== 'mouse' && Math.abs(dx) > Math.abs(dy)) return;
        board = document.getElementById('nksboard');
        if (!board) return;
        moved = true;
        const size = board.getBoundingClientRect().width * .24;
        g = document.createElement('div');
        g.className = 'nks-ghost';
        g.innerHTML = el.innerHTML;
        Object.assign(g.style, { width: size + 'px', height: size + 'px' });
        document.body.appendChild(g);
        el.classList.add('lift');
        try { el.setPointerCapture(e.pointerId); } catch(err){}
      }
      ev.preventDefault();
      const s = g.offsetWidth;
      g.style.left = (ev.clientX - s / 2) + 'px';
      g.style.top = (ev.clientY - s / 2) + 'px';
      board.classList.toggle('hot', !!where(ev));
    };
    const up = ev => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      document.removeEventListener('pointercancel', up);
      if (!moved) { if (ev.type === 'pointerup' && opts.tap) opts.tap(); return; }
      board.classList.remove('hot');
      el.classList.remove('lift');
      const at = ev.type === 'pointercancel' ? null : where(ev);
      if (at) { g.remove(); return opts.drop(at[0], at[1]); }
      if (opts.off) { g.animate([{ transform: 'scale(1)', opacity: 1 }, { transform: 'scale(.3)', opacity: 0 }], { duration: 260, easing: 'ease-in' }).onfinish = () => g.remove(); return opts.off(); }
      const gr = g.getBoundingClientRect();
      g.animate([{ transform: 'translate(0,0)' }, { transform: `translate(${r.left + r.width / 2 - gr.left - gr.width / 2}px,${r.top + r.height / 2 - gr.top - gr.height / 2}px) scale(.6)`, opacity: .4 }], { duration: 260, easing: 'ease-out' })
        .onfinish = () => g.remove();
    };
    document.addEventListener('pointermove', move, { passive: false });
    document.addEventListener('pointerup', up);
    document.addEventListener('pointercancel', up);
  });
}

// The places to choose from: each one's picture (no words).
function nksPlaces(){
  const ov = document.createElement('div');
  ov.className = 'overlay';
  ov.innerHTML = `<div class="sheet glass" style="display:grid;gap:12px">
    <div class="row-flex between"><span class="tile t-chat">${icon('image', 'duotone')}</span><button class="btn btn-glass icon-btn" id="nksplx" aria-label="Close">${icon('x')}</button></div>
    <div class="nks-places">${Object.keys(NK_PLACE).map(p => { const pl = nkPlace(p); return `<button class="nks-pick${p === NKS.board.p ? ' on' : ''}" data-nksp="${p}" aria-label="${p}"><span class="nk-scene" style="${pl.style}">${pl.html}</span></button>`; }).join('')}</div>
  </div>`;
  document.body.appendChild(ov);
  const close = () => ov.remove();
  ov.onclick = e => { if (e.target === ov) close(); };
  ov.querySelector('#nksplx').onclick = close;
  ov.querySelectorAll('[data-nksp]').forEach(b => b.onclick = () => {
    close();
    NKS.board.p = b.dataset.nksp; nksSave(); nkSfx('flip');
    const body = document.getElementById('nksbody'); if (body) nksFree(body);
  });
}

// ---------- The parents' weekly postcard ----------
// The parents' data for a kid comes from nestFillParent (the kid's dashboard in apiParent: g.nest.known / played,
// g.week, g.today); without it the postcard falls back to the card's week strip and the current unit.
async function nksKidData(name, g){ return g && g.nest ? g : null; }

function nkPostcard(el, kidName, g){
  if (!el || el.querySelector('.nks-pcrow')) return;
  const row = document.createElement('div');
  row.className = 'nks-pcrow he';
  row.dir = 'rtl'; row.lang = 'he';
  row.innerHTML = `<button class="btn btn-glass btn-sm" type="button">${icon('envelope-simple')} הגלויה של השבוע</button>`;
  el.appendChild(row);
  row.querySelector('button').onclick = () => nksCard(el, kidName || el.dataset.nkkid, g);
}

const nksDay = (d, n) => { const t = new Date(d + 'T12:00:00'); t.setDate(t.getDate() + n); return t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0'); };
const nksDm = d => Number(d.slice(8, 10)) + '.' + Number(d.slice(5, 7));
// What the postcard shows: the words met in the last 7 days (newest first, up to 8), the days played this week (the week
// strip of the parents' view), and one idea for home from the current unit (a different one each week).
function nksWeek(el, name, g){
  const n = (g && g.nest) || {}, known = n.known || {};
  const today = (g && g.today) || nksDay(new Date().toISOString().slice(0, 10), 0), from = nksDay(today, -6);
  let words = Object.keys(known).filter(id => String(known[id][2] || '') >= from).sort((a, b) => String(known[b][2]).localeCompare(String(known[a][2])))
    .map(id => nkWord(id)).filter(Boolean).slice(0, 8);
  const u = nestUnit(n.today || el.dataset.nkfill), met = words.length > 0;
  if (!met && u) words = nestWordsOf(u).slice(0, 8);
  const card = el.closest('.panel');
  const days = g && g.week ? g.week.filter(w => w.done).length : card ? card.querySelectorAll('.strip .cell.done').length : 0;
  const tips = u ? (u.review ? ((EQ_NEST.parent || {}).review || []) : (u.home || [])) : [];
  const tip = tips.length ? tips[Math.floor(Date.parse(today) / 6048e5) % tips.length] : '';
  return { name, words, met, days: Math.min(7, days), tip, from, today };
}

async function nksCard(el, name, g0){
  const ov = document.createElement('div');
  ov.className = 'overlay';
  ov.innerHTML = `<div class="sheet glass nks-card he" dir="rtl" lang="he">
    <div class="row-flex between"><h2>הגלויה של השבוע</h2><button class="btn btn-glass icon-btn" id="nkspcx" aria-label="סגירה">${icon('x')}</button></div>
    <div id="nkspcbox" style="display:grid;place-items:center;min-height:200px"><div class="spinner"></div></div>
  </div>`;
  document.body.appendChild(ov);
  let url = '';
  const close = () => { ov.remove(); if (url) URL.revokeObjectURL(url); };
  ov.onclick = e => { if (e.target === ov) close(); };
  ov.querySelector('#nkspcx').onclick = close;
  const g = await nksKidData(name, g0), m = nksWeek(el, name, g), box = ov.querySelector('#nkspcbox');
  let blob = null;
  try { blob = await nksDraw(m); } catch(e){ blob = null; }
  if (!ov.isConnected) return;
  if (!blob) { box.innerHTML = `<div class="sub">לא הצלחנו לצייר את הגלויה. נסו שוב בעוד רגע.</div>`; return; }
  url = URL.createObjectURL(blob);
  const file = typeof File === 'function' ? new File([blob], 'coco-postcard.png', { type: 'image/png' }) : null;
  const canShare = !!(file && navigator.canShare && navigator.share && (() => { try { return navigator.canShare({ files: [file] }); } catch(e){ return false; } })());
  const text = nksText(m);
  box.style.display = 'grid'; box.style.gap = '12px'; box.style.minHeight = '0';
  box.innerHTML = `<img class="nks-pc" src="${url}" alt="הגלויה של ${esc(name)}">
    <div class="sub" style="margin:0;font-size:13px">${canShare ? 'שולחים לסבא וסבתא, לגננת או לקבוצת המשפחה.' : 'לחיצה ארוכה על התמונה שומרת אותה בטלפון. בוואטסאפ שולחים את הטקסט ומצרפים את התמונה מהגלריה.'}</div>
    <div class="row-flex">
      ${canShare ? `<button class="btn btn-primary btn-sm" id="nksshare">${icon('share-network')} שיתוף</button>` : ''}
      <a class="btn btn-teal btn-sm" href="${esc(waLink(text))}" target="_blank" rel="noopener">${icon('whatsapp-logo')} וואטסאפ</a>
      <a class="btn btn-glass btn-sm" href="${url}" download="coco-postcard.png">${icon('download-simple')} שמירה</a>
    </div>`;
  const sh = box.querySelector('#nksshare');
  if (sh) sh.onclick = async () => { try { await navigator.share({ files: [file], text }); } catch(e){ if (e && e.name !== 'AbortError') toast('השיתוף לא הצליח', true); } };
}

// The WhatsApp text (emoji are fine inside WhatsApp text; never in the UI).
function nksText(m){
  return [`🦜 הגלויה של השבוע מהקן של קוקו`,
    m.words.length ? (m.met ? `המילים של ${m.name} השבוע: ` : `המילים שמחכות ל${m.name}: `) + m.words.map(w => w.en).join(', ') : '',
    m.days ? `🌸 ימי משחק השבוע: ${m.days}` : '',
    m.tip ? `🏠 רעיון לבית: ${m.tip.replace(/[{}]/g, '')}` : '',
    'coco.coachkrispel.com'].filter(Boolean).join('\n');
}

// ---------- Drawing the postcard (canvas, 1080 wide; Hebrew right to left, English runs laid out left to right) ----------
const NKS_HE = '"Segoe UI", "Arial Hebrew", Arial, system-ui, sans-serif', NKS_EN = '"Plus Jakarta Sans", system-ui, sans-serif';
function nksImg(src){
  return new Promise(res => { const im = new Image(); im.decoding = 'async'; im.onload = () => res(im); im.onerror = () => res(null); im.src = src; });
}
// A line of Hebrew with English inside {braces}: tokens with their kind and whether a space comes before them.
function nksTokens(text){
  const out = [];
  String(text).replace(/\{([^}]*)\}|([^{}]+)/g, (all, en, he) => {
    const s = en != null ? en : he;
    // An English phrase stays whole (it moves to the next line together); Hebrew wraps word by word.
    (en != null ? [/^\s/.test(en) ? ' ' : '', en.trim(), /\s$/.test(en) ? ' ' : ''] : s.split(/(\s+)/)).forEach(part => {
      if (!part) return;
      if (/^\s+$/.test(part)) { out.sp = true; return; }
      out.push({ t: part, en: en != null, sp: !!out.sp && out.length > 0 });
      out.sp = false;
    });
  });
  return out;
}
function nksFont(x, en, size, weight){ x.font = `${weight || 700} ${size}px ${en ? NKS_EN : NKS_HE}`; }
// Wraps tokens into lines no wider than maxW; a line is a list of runs (neighbouring tokens of one kind).
function nksWrap(x, toks, size, weight, maxW){
  const wOf = t => { nksFont(x, t.en, size, weight); return x.measureText(t.t).width; };
  nksFont(x, false, size, weight);
  const sp = x.measureText(' ').width, lines = [];
  let line = [], w = 0;
  toks.forEach(t => {
    const tw = wOf(t), add = (line.length && t.sp ? sp : 0) + tw;
    if (line.length && w + add > maxW) { lines.push(line); line = []; w = 0; t = Object.assign({}, t, { sp: false }); }
    line.push(t); w += (line.length > 1 && t.sp ? sp : 0) + tw;
  });
  if (line.length) lines.push(line);
  return lines.map(l => {
    const runs = [];
    l.forEach(t => { const last = runs[runs.length - 1]; if (last && last.en === t.en) last.t += (t.sp ? ' ' : '') + t.t; else runs.push({ t: t.t, en: t.en, sp: t.sp }); });
    return runs;
  });
}
// Draws one line from the right edge: a Hebrew run right to left, an English run as a whole, left to right.
function nksLine(x, runs, right, y, size, weight, color){
  nksFont(x, false, size, weight);
  const sp = x.measureText(' ').width;
  let at = right;
  x.fillStyle = color;
  x.textBaseline = 'alphabetic';
  runs.forEach((r, i) => {
    if (i && r.sp) at -= sp;
    nksFont(x, r.en, size, weight);
    x.direction = r.en ? 'ltr' : 'rtl';
    x.textAlign = 'right';
    x.fillText(r.t, at, y);
    at -= x.measureText(r.t).width;
  });
  x.direction = 'ltr';
  return right - at;
}
function nksRound(x, l, t, w, h, r){
  x.beginPath();
  x.moveTo(l + r, t); x.arcTo(l + w, t, l + w, t + h, r); x.arcTo(l + w, t + h, l, t + h, r); x.arcTo(l, t + h, l, t, r); x.arcTo(l, t, l + w, t, r);
  x.closePath();
}
// A word's picture in a box: the clay picture, a clay blob, or the chicks to count.
function nksPicDraw(x, w, imgs, cx, cy, size){
  const fit = (im, px, py, s) => { if (!im) return; const k = Math.min(s / im.width, s / im.height); x.drawImage(im, px - im.width * k / 2, py - im.height * k / 2, im.width * k, im.height * k); };
  if (w.count) {
    const n = w.count, cols = n <= 1 ? 1 : n <= 4 ? 2 : n <= 6 || n === 9 ? 3 : 4, rows = Math.ceil(n / cols), s = size / Math.max(cols, rows) * .92;
    for (let i = 0; i < n; i++) { const c = i % cols, r = Math.floor(i / cols); fit(imgs.token, cx + (c - (cols - 1) / 2) * s, cy + (r - (rows - 1) / 2) * s, s * .94); }
    return;
  }
  fit(imgs[w.id], cx, cy, size);
}

async function nksDraw(m){
  const W = 1080, PAD = 56, IN = 110, RIGHT = W - IN, LEFT = IN, cv = document.createElement('canvas');
  cv.width = W; cv.height = 10;
  let x = cv.getContext('2d');
  try { if (document.fonts && document.fonts.ready) await document.fonts.ready; } catch(e){}
  const imgs = { coco: await nksImg(cocoSrc('happy')), flower: await nksImg(nestPicSrc('flower')), token: null };
  await Promise.all(m.words.map(async w => {
    if (w.count) { if (!imgs.token) imgs.token = await nksImg(nestPicSrc('count-token')); return; }
    imgs[w.id] = await nksImg(nestPicSrc(w.color ? 'blob-' + w.color.slice(1).toLowerCase() : w.pic));
  }));
  // Layout first (the idea's lines decide the height).
  const tipLines = m.tip ? nksWrap(x, nksTokens(m.tip), 36, 600, RIGHT - LEFT - 60).slice(0, 5) : [];
  const cols = 4, gap = 24, tw = Math.floor((RIGHT - LEFT - gap * (cols - 1)) / cols), th = tw + 44, rows = Math.max(1, Math.ceil(m.words.length / cols));
  const yWords = 420, yGrid = yWords + 34, yDays = yGrid + rows * th + (rows - 1) * gap + 84, yFlowers = yDays + 28, fl = 104;
  const yTip = yFlowers + fl + 50, tipH = tipLines.length ? 96 + tipLines.length * 54 : 0, H = (tipLines.length ? yTip + tipH : yFlowers + fl) + 150;
  cv.height = H;
  x = cv.getContext('2d');
  // The app's background: the warm gradient and the four soft blobs.
  const bg = x.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#f4ede5'); bg.addColorStop(.4, '#e9e3dd'); bg.addColorStop(1, '#b8c2cf');
  x.fillStyle = bg; x.fillRect(0, 0, W, H);
  [[60, 80, 380, '165,168,255'], [W - 40, H * .38, 340, '143,240,226'], [80, H - 120, 320, '255,199,154'], [W - 200, H - 300, 260, '245,184,232']].forEach(([cx, cy, r, c]) => {
    const gr = x.createRadialGradient(cx, cy, 0, cx, cy, r); gr.addColorStop(0, `rgba(${c},.75)`); gr.addColorStop(1, `rgba(${c},0)`);
    x.fillStyle = gr; x.fillRect(cx - r, cy - r, r * 2, r * 2);
  });
  // The card (glass).
  x.save(); x.shadowColor = 'rgba(38,40,80,.22)'; x.shadowBlur = 50; x.shadowOffsetY = 20;
  nksRound(x, PAD, PAD, W - PAD * 2, H - PAD * 2, 56); x.fillStyle = 'rgba(255,255,255,.8)'; x.fill(); x.restore();
  nksRound(x, PAD, PAD, W - PAD * 2, H - PAD * 2, 56); x.lineWidth = 3; x.strokeStyle = 'rgba(255,255,255,.95)'; x.stroke();
  // The stamp with Coco (top left), slightly turned.
  x.save(); x.translate(LEFT + 100, 230); x.rotate(-.06);
  x.shadowColor = 'rgba(38,40,80,.2)'; x.shadowBlur = 18; x.shadowOffsetY = 8;
  nksRound(x, -100, -120, 200, 240, 18); x.fillStyle = '#fff'; x.fill(); x.shadowColor = 'transparent';
  nksRound(x, -86, -106, 172, 212, 12); x.setLineDash([10, 8]); x.lineWidth = 3; x.strokeStyle = '#c7d2fe'; x.stroke(); x.setLineDash([]);
  if (imgs.coco) { const k = Math.min(150 / imgs.coco.width, 170 / imgs.coco.height); x.drawImage(imgs.coco, -imgs.coco.width * k / 2, -imgs.coco.height * k / 2 + 4, imgs.coco.width * k, imgs.coco.height * k); }
  x.restore();
  // The heading, right to left.
  const ink = '#1c1e2b', muted = '#6b7083', violet = '#6366f1';
  nksLine(x, [{ t: 'הגלויה של השבוע', en: false }], RIGHT, 170, 36, 700, violet);
  const nameLines = nksWrap(x, nksTokens('השבוע של {' + m.name + '}'), 66, 800, RIGHT - LEFT - 260);
  nameLines.slice(0, 2).forEach((l, i) => nksLine(x, l, RIGHT, 256 + i * 74, 66, 800, ink));
  const yDates = 256 + Math.min(2, nameLines.length) * 74 - 14;
  nksLine(x, [{ t: 'בקן של קוקו, ' + nksDm(m.from) + ' עד ' + nksDm(m.today), en: false }], RIGHT, yDates, 34, 600, muted);
  // The words: a clay picture and the English word under it, from the right.
  nksLine(x, [{ t: m.met ? 'מילים שפגשנו השבוע' : 'המילים שמחכות לנו', en: false }], RIGHT, yWords, 40, 800, ink);
  m.words.forEach((w, i) => {
    const c = i % cols, r = Math.floor(i / cols), l = RIGHT - (c + 1) * tw - c * gap, t = yGrid + r * (th + gap);
    x.save(); x.shadowColor = 'rgba(38,40,80,.14)'; x.shadowBlur = 20; x.shadowOffsetY = 8;
    nksRound(x, l, t, tw, th, 30); x.fillStyle = 'rgba(255,255,255,.95)'; x.fill(); x.restore();
    nksPicDraw(x, w, imgs, l + tw / 2, t + tw * .48, tw * .7);
    nksFont(x, true, w.en.length > 9 ? 30 : 36, 800); x.direction = 'ltr'; x.textAlign = 'center'; x.fillStyle = ink;
    x.fillText(w.en, l + tw / 2, t + th - 30, tw - 16);
  });
  // The days played this week: a flower each (no empty places, nothing missed).
  nksLine(x, [{ t: m.days ? 'ימי משחק השבוע: ' + m.days : 'השבוע עוד לא שיחקנו. קוקו מחכה בקן', en: false }], RIGHT, yDays, 38, 800, ink);
  for (let i = 0; i < m.days; i++) if (imgs.flower) x.drawImage(imgs.flower, RIGHT - (i + 1) * (fl + 14) + 14, yFlowers, fl, fl);
  // One idea for home.
  if (tipLines.length) {
    nksRound(x, LEFT, yTip, RIGHT - LEFT, tipH, 34); x.fillStyle = 'rgba(99,102,241,.09)'; x.fill();
    nksLine(x, [{ t: 'רעיון לבית', en: false }], RIGHT - 30, yTip + 62, 36, 800, violet);
    tipLines.forEach((l, i) => nksLine(x, l, RIGHT - 30, yTip + 120 + i * 54, 36, 600, ink));
  }
  // The address, left to right.
  nksFont(x, true, 30, 700); x.direction = 'ltr'; x.textAlign = 'center'; x.fillStyle = muted;
  x.fillText('English with Coco  ·  coco.coachkrispel.com', W / 2, H - PAD - 44);
  return new Promise((res, rej) => { try { cv.toBlob(b => b ? res(b) : rej(new Error('no picture')), 'image/png'); } catch(e){ rej(e); } });
}
