// The Wordrobe: Coco's shop (spec: specs/wordrobe.md). Every point and every XP is also a coin; a purchase is
// a request to Coco in English, and nicer English costs less. Coins are computed from what is already recorded
// (Log, Games, Gates, Bonus minus the Shop tab), so no number can drift.
// Only functions and literal constants here: files load in one global scope, so nothing at the top level may
// use another file's names.

var SHOP = {
  opens: '2026-10-24',
  places: ['head', 'face', 'neck', 'back', 'aura', 'buddy'],
  // Discount (%) by the number of manners chips lit: please, a question, a polite word, thank you.
  discount: [0, 5, 10, 12, 15],
  // Seasonal drops (month-day, every year). Owned items stay; the drop comes back next year.
  seasons: { halloween: { name: 'Halloween Drop', from: '10-17', to: '11-07' } }
};

// id: [name, place, rarity, price, colors (the first is the drawn one), season]
var SHOP_ITEMS = {
  'star-beanie': ['Star Beanie', 'head', 'common', 120, ['blue', 'pink', 'purple', 'green']],
  'flower-crown': ['Flower Crown', 'head', 'common', 140],
  'big-bow': ['Big Bow', 'head', 'common', 110, ['pink', 'red', 'blue', 'purple']],
  'beret': ['Beret', 'head', 'common', 130, ['red', 'blue', 'purple']],
  'bunny-ears': ['Bunny Ears', 'head', 'common', 120],
  'party-hat': ['Party Hat', 'head', 'common', 100],
  'chef-hat': ['Chef Hat', 'head', 'common', 120],
  'unicorn-horn': ['Unicorn Horn', 'head', 'rare', 380],
  'wizard-hat': ['Wizard Hat', 'head', 'epic', 950],
  'round-specs': ['Round Specs', 'face', 'common', 90],
  'heart-glasses': ['Heart Glasses', 'face', 'common', 100, ['pink', 'red', 'purple']],
  'star-glasses': ['Star Glasses', 'face', 'common', 110],
  'pilot-goggles': ['Pilot Goggles', 'face', 'rare', 340],
  'masquerade-mask': ['Masquerade Mask', 'face', 'epic', 900],
  'bow-tie': ['Bow Tie', 'neck', 'common', 80, ['red', 'blue', 'pink', 'purple']],
  'heart-locket': ['Heart Locket', 'neck', 'common', 130],
  'pearl-necklace': ['Pearl Necklace', 'neck', 'rare', 320],
  'crystal-pendant': ['Crystal Pendant', 'neck', 'epic', 900],
  'heart-balloon': ['Heart Balloon', 'back', 'common', 100, ['red', 'pink', 'purple']],
  'butterfly-wings': ['Butterfly Wings', 'back', 'common', 150, ['blue', 'pink', 'orange']],
  'fairy-wings': ['Fairy Wings', 'back', 'rare', 420],
  'rainbow-wings': ['Rainbow Wings', 'back', 'rare', 450],
  'angel-wings': ['Angel Wings', 'back', 'epic', 1100],
  'sparkle-aura': ['Sparkle Aura', 'aura', 'common', 100],
  'heart-aura': ['Heart Aura', 'aura', 'common', 120],
  'rainbow-aura': ['Rainbow Aura', 'aura', 'rare', 380],
  'galaxy-aura': ['Galaxy Aura', 'aura', 'epic', 1000],
  'baby-chick': ['Baby Chick', 'buddy', 'common', 110],
  'bluebird': ['Bluebird', 'buddy', 'common', 140],
  'baby-bunny': ['Baby Bunny', 'buddy', 'common', 130],
  'star-sprite': ['Star Sprite', 'buddy', 'rare', 380],
  'baby-dragon': ['Baby Dragon', 'buddy', 'epic', 1200],
  'pumpkin-hat': ['Pumpkin Hat', 'head', 'common', 140, null, 'halloween'],
  'witch-hat': ['Witch Hat', 'head', 'rare', 380, null, 'halloween'],
  'candy-glasses': ['Candy-corn Glasses', 'face', 'common', 120, null, 'halloween'],
  'bat-wings': ['Bat Wings', 'back', 'rare', 420, null, 'halloween'],
  'web-aura': ['Spider-web Aura', 'aura', 'rare', 300, null, 'halloween'],
  'tiny-ghost': ['Tiny Ghost', 'buddy', 'common', 150, null, 'halloween'],
  'spin': ['Spin', 'move', 'common', 80],
  'backflip': ['Backflip', 'move', 'common', 150],
  'moonwalk': ['Moonwalk', 'move', 'rare', 320],
  'rocket-jump': ['Rocket Jump', 'move', 'rare', 450],
  'streak-shield': ['Streak Shield', 'upgrade', 'rare', 400]
};

// ---------- API ----------

function apiShop(name, pin) {
  return shopView(auth(name, pin));
}

// Buy with a request to Coco: words = the tiles in order (or the words heard, matched to the tiles by the app).
// The server grades the request again and decides the price. A bought item is worn at once.
function apiShopBuy(name, pin, itemId, color, words) {
  var kid = auth(name, pin), t = today();
  if (pendingLevelTest(kid)) throw new Error('Take the level test first.');
  if (!shopOpenFor(kid, t)) throw new Error('Coco\'s Wordrobe opens on ' + shopOpens() + '.');
  var it = shopItem(itemId);
  if (!it) throw new Error('Coco does not sell that');
  if (!shopAvailable(it, t)) throw new Error('The ' + it.name + ' is back next season');
  color = it.colors ? String(color || it.colors[0]) : '';
  if (it.colors && it.colors.indexOf(color) < 0) throw new Error('Choose a color');
  var g = cocoGrade(words, it.name, color);
  if (!g.ok) throw new Error(g.hint);
  var paid = Math.round(it.price * (100 - g.pct) / 100), bought;
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var rows = readTableUncached('Shop');
    if (rows.some(function (r) { return r.Girl === kid.Name && r.Item === it.id; })) throw new Error('You already have the ' + it.name);
    var coins = coinsOf(kid, rows);
    if (coins.balance < paid) throw new Error('You need ' + (paid - coins.balance) + ' more coins for the ' + it.name);
    var sentence = shopSentence(words);
    appendRow('Shop', { Timestamp: new Date(), Girl: kid.Name, Date: t, Item: it.id, Color: color, Price: it.price, Paid: paid,
      Manners: g.n, Sentence: sentence });
    // Wear it at once (a move becomes the move).
    if (it.place === 'move' || SHOP.places.indexOf(it.place) >= 0) {
      var w = wardrobeOf(kid.Name, true);
      if (it.place === 'move') w.move = it.id;
      else w.wear = w.wear.filter(function (e) { return shopItem(e.split(':')[0]).place !== it.place; })
        .concat([color && color !== it.colors[0] ? it.id + ':' + color : it.id]);
      saveWardrobe(kid.Name, w.wear, w.move);
    }
    bought = { id: it.id, name: it.name, color: color, price: it.price, paid: paid, pct: g.pct, chips: g.chips, n: g.n, sentence: sentence };
  } finally {
    lock.releaseLock();
  }
  var view = shopView(findGirl(kid.Name));
  view.bought = bought;
  return view;
}

// What the pet wears (item or item:color, one per place) and its victory move. Only owned items.
function apiWear(name, pin, wear, move) {
  var kid = auth(name, pin);
  var owned = ownedItems(kid.Name), places = {}, list = [];
  (Array.isArray(wear) ? wear : []).slice(0, SHOP.places.length).forEach(function (e) {
    var p = String(e).split(':'), it = shopItem(p[0]), color = p[1] || '';
    if (!it || SHOP.places.indexOf(it.place) < 0) throw new Error('Coco does not sell that');
    if (!owned[it.id]) throw new Error('Buy the ' + it.name + ' first');
    if (places[it.place]) throw new Error('One item per place');
    if (color && (!it.colors || it.colors.indexOf(color) < 0)) throw new Error('The ' + it.name + ' does not come in ' + color);
    places[it.place] = true;
    list.push(color && color !== it.colors[0] ? it.id + ':' + color : it.id);
  });
  move = String(move || '');
  if (move && (!shopItem(move) || shopItem(move).place !== 'move' || !owned[move])) throw new Error('Choose one of your moves');
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    saveWardrobe(kid.Name, list, move);
  } finally {
    lock.releaseLock();
  }
  return { wear: list, move: move };
}

// ---------- Coins, the catalog, the wardrobe ----------

// Every point (with the full-week bonus) and every XP is a coin; spent = what the Shop tab says she paid.
function coinsOf(kid, shopRows) {
  var name = kid.Name;
  var logs = readTable('Log').filter(function (l) { return l.Girl === name; });
  var earned = totalPoints(logs, kidStart(kid)), spent = 0;
  ['Games', 'Gates', 'Bonus'].forEach(function (t) {
    readTable(t).forEach(function (r) { if (r.Girl === name) earned += Number(r.XP) || 0; });
  });
  (shopRows || readTable('Shop')).forEach(function (r) { if (r.Girl === name) spent += Number(r.Paid) || 0; });
  return { earned: earned, spent: spent, balance: earned - spent };
}

function shopItem(id) {
  var x = SHOP_ITEMS.hasOwnProperty(id) ? SHOP_ITEMS[id] : null;
  return x ? { id: id, name: x[0], place: x[1], rarity: x[2], price: x[3], colors: x[4] || null, season: x[5] || null } : null;
}

function shopOpens() { return getSetting('ShopOpens') || SHOP.opens; }

// Open from the date on; the names in Settings.ShopEarly may shop before it (a try-out).
function shopOpenFor(kid, t) {
  if ((t || today()) >= shopOpens()) return true;
  var early = String(getSetting('ShopEarly') || '').toLowerCase().split(',').map(function (s) { return s.trim(); });
  return early.indexOf(String(kid.Name).toLowerCase()) >= 0;
}

function shopSeason(t) {
  var md = String(t).slice(5);
  for (var k in SHOP.seasons) {
    if (SHOP.seasons.hasOwnProperty(k) && md >= SHOP.seasons[k].from && md <= SHOP.seasons[k].to) return k;
  }
  return null;
}

function shopAvailable(it, t) { return !it.season || it.season === shopSeason(t); }

function ownedItems(name) {
  var owned = {};
  readTable('Shop').forEach(function (r) { if (r.Girl === name) owned[r.Item] = true; });
  return owned;
}

function hasShield(name) { return !!ownedItems(name)['streak-shield']; }

function wardrobeOf(name, fresh) {
  var row = (fresh ? readTableUncached('Wardrobe') : readTable('Wardrobe')).filter(function (r) { return r.Girl === name; })[0];
  var places = {};
  var wear = String(row ? row.Wear : '').split(' ').filter(function (e) {
    var it = shopItem(e.split(':')[0]);
    if (!it || SHOP.places.indexOf(it.place) < 0 || places[it.place]) return false;
    return (places[it.place] = true);
  });
  var mv = row ? shopItem(String(row.Move)) : null;
  return { wear: wear, move: mv && mv.place === 'move' ? mv.id : '' };
}

function saveWardrobe(name, wear, move) {
  upsertRow('Wardrobe', 'Girl', name, { Wear: wear.join(' '), Move: move || '', Updated: new Date() });
}

function shopView(kid) {
  var t = today(), owned = ownedItems(kid.Name), w = wardrobeOf(kid.Name), season = shopSeason(t);
  var mine = readTable('Shop').filter(function (r) { return r.Girl === kid.Name; });
  return {
    open: shopOpenFor(kid, t), opens: shopOpens(), today: t,
    season: season ? { id: season, name: SHOP.seasons[season].name, to: t.slice(0, 4) + '-' + SHOP.seasons[season].to } : null,
    coins: coinsOf(kid),
    items: Object.keys(SHOP_ITEMS).map(function (id) {
      var it = shopItem(id);
      it.available = shopAvailable(it, t);
      it.owned = !!owned[id];
      return it;
    }),
    discount: SHOP.discount,
    wear: w.wear, move: w.move, shield: !!owned['streak-shield'],
    bought: shopBought(mine, 5)
  };
}

// The last purchases, newest first (the shop's receipt and the parent view).
function shopBought(rows, n) {
  return rows.slice(-n).reverse().map(function (r) {
    var it = shopItem(String(r.Item));
    return { id: String(r.Item), name: it ? it.name : String(r.Item), paid: Number(r.Paid) || 0, price: Number(r.Price) || 0,
      date: r.Date, sentence: String(r.Sentence || ''), manners: Number(r.Manners) || 0 };
  });
}

// The pet as other screens show it: what it looks like, what it wears, its move.
function petBrief(p) {
  return p ? { id: p.id, stage: p.stage, wear: p.wear || [], move: p.move || '' } : null;
}

// The request as a sentence for the receipt: "Could I please have the star beanie? Thank you!"
function shopSentence(words) {
  var w = (Array.isArray(words) ? words : []).slice(0, 30).map(function (x) { return String(x).replace(/\s+/g, ' ').trim(); }).filter(String);
  var out = '';
  w.forEach(function (x, i) {
    var low = x.toLowerCase(), next = w[i + 1] || '';
    if (x === '?' || x === '.') { out += x; return; }
    var word = low === 'i' ? 'I' : low === "i'd like" ? "I'd like" : low.indexOf('thank you') === 0 ? 'Thank you!' : low;
    var start = !out || /[.?!]$/.test(out);
    if (start) word = word.charAt(0).toUpperCase() + word.slice(1);
    // "..., please?" at the end; no comma in "Could I please have".
    var comma = low === 'please' && !start && (next === '?' || next === '.') && !/^(i|can|could|may)$/i.test(w[i - 1] || '');
    out += (out ? (comma ? ', ' : ' ') : '') + word;
  });
  return out.slice(0, 200);
}

// ---------- Ask Coco: grading a request ----------
// The same function is in src/Index.html (the live manners meter); test/sim.js checks they agree.
// words: the tiles in order. Accepted shapes (X = the [color] item):
//   [Please] give me X.  I want X[, please].  I'd like X[, please].  Can/Could/May I [please] have X[, please]?
// each with an optional "Thank you!" at the end and one "please" at most. Chips: please, a question, a polite
// word (could, may, I'd like), thank you. Returns { ok, chips, n, pct, hint }.
function cocoGrade(words, name, color) {
  var MAP = { 'give me': 'giveme', "i'd like": 'idlike', 'thank you!': 'thanks', 'thank you': 'thanks' };
  var DISCOUNT = [0, 5, 10, 12, 15];
  var item = String(name || '').toLowerCase(), col = String(color || '').toLowerCase();
  var toks = (Array.isArray(words) ? words : []).slice(0, 30).map(function (w) {
    w = String(w).toLowerCase().replace(/\s+/g, ' ').trim();
    return w === item ? 'X' : col && w === col ? 'C' : MAP[w] || w;
  }).filter(function (w) { return w !== ''; });
  var thanks = toks[toks.length - 1] === 'thanks';
  var core = thanks ? toks.slice(0, -1) : toks.slice();
  var s = core.join(' ');
  var pleases = core.filter(function (w) { return w === 'please'; }).length;
  var shapes = {
    imp: /^(please )?giveme the (C )?X( please)? \.$/, want: /^i want the (C )?X( please)? \.$/,
    like: /^idlike the (C )?X( please)? \.$/, ask: /^(can|could|may) i( please)? have the (C )?X( please)? \?$/
  };
  var shape = null;
  for (var k in shapes) { if (shapes.hasOwnProperty(k) && shapes[k].test(s)) shape = k; }
  var chips = { please: pleases === 1, question: shape === 'ask', polite: shape === 'like' || (shape === 'ask' && core[0] !== 'can'), thanks: thanks };
  var n = (chips.please ? 1 : 0) + (chips.question ? 1 : 0) + (chips.polite ? 1 : 0) + (chips.thanks ? 1 : 0);
  var ok = !!shape && pleases <= 1 && core.indexOf('thanks') < 0;
  var out = { ok: ok, chips: chips, n: n, pct: DISCOUNT[n], hint: '' };
  if (ok) return out;
  var thing = 'the ' + (col ? col + ' ' : '') + item, first = core[0], end = core[core.length - 1];
  var ask = first === 'can' || first === 'could' || first === 'may';
  var xi = core.indexOf('X');
  if (!toks.length) out.hint = 'Tap the words to ask me for it, darling.';
  else if (core.indexOf('thanks') >= 0) out.hint = 'Say "Thank you!" at the very end.';
  else if (pleases > 1) out.hint = 'One "please" is enough!';
  else if (xi < 0) out.hint = 'What would you like? Say ' + thing + '.';
  else if (core[xi + 1] === 'C') out.hint = 'In English the color comes first: ' + thing + '.';
  else if (core[xi - 1] !== 'the' && !(core[xi - 1] === 'C' && core[xi - 2] === 'the')) out.hint = 'Don\'t forget "the": ' + thing + '.';
  else if (ask && end !== '?') out.hint = 'That\'s a question, so it ends with a question mark (?).';
  else if (!ask && end === '?') out.hint = 'That isn\'t a question. End it with a full stop (.).';
  else if (end !== '.' && end !== '?') out.hint = 'End your request with . or ?';
  else if (ask && core.indexOf('want') >= 0) out.hint = 'With Can, Could or May, say "have": Could I have ' + thing + '?';
  else out.hint = 'Hmm, I didn\'t quite get that. Try: Can I have ' + thing + ', please?';
  return out;
}
