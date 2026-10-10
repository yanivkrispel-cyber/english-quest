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
  'streak-shield': ['Streak Shield', 'upgrade', 'rare', 400],
  'second-chance': ['Second Chance', 'upgrade', 'rare', 300],
  'word-saver': ['Word Saver', 'upgrade', 'rare', 250]
};

// Shine = Memory (phase 2): every rare and epic item is made of words. a = for A1-A2, b = for B1 and up.
// Each entry: [word, meaning]. A word is remembered once per kid (Words tab), so items that share a word share it.
var SHOP_RECIPES = {
  'unicorn-horn': {
    a: [['horn', 'A hard pointed thing that grows on the head of some animals.'], ['magic', 'Special powers that make impossible things happen.'],
      ['rainbow', 'An arc of colours in the sky after rain.'], ['dream', 'Pictures and stories in your head while you sleep.']],
    b: [['legend', 'A very old, famous story that may not be true.'], ['mythical', 'Existing only in old stories, not in real life.'],
      ['spiral', 'A shape that turns round and round as it goes up.'], ['enchanted', 'Under a magic spell.']] },
  'pilot-goggles': {
    a: [['pilot', 'A person who flies a plane.'], ['wind', 'Air that moves outside.'],
      ['fly', 'Move through the air.'], ['cloud', 'A white or grey shape in the sky, made of tiny drops of water.']],
    b: [['altitude', 'How high something is above the sea or the ground.'], ['propeller', 'The turning blades that push a plane forward.'],
      ['horizon', 'The line far away where the sky seems to meet the land or the sea.'], ['navigate', 'Find the way to go, with a map or the stars.']] },
  'pearl-necklace': {
    a: [['pearl', 'A small, white, shiny ball that grows inside a shell.'], ['sea', 'The big salty water that covers most of the Earth.'],
      ['shell', 'The hard outside part of a snail or of some sea animals.'], ['shine', 'Give out or reflect bright light.']],
    b: [['oyster', 'A sea animal with a rough shell. Some of them make pearls.'], ['elegant', 'Beautiful in a simple, stylish way.'],
      ['precious', 'Very valuable and important.'], ['gleam', 'Shine softly, like something clean and polished.']] },
  'fairy-wings': {
    a: [['fairy', 'A tiny magic person with wings, in stories.'], ['wing', 'The part of a bird or an insect that it uses to fly.'],
      ['flower', 'The colourful part of a plant.'], ['garden', 'Land next to a house where flowers and plants grow.']],
    b: [['delicate', 'Thin and easy to break, and often beautiful.'], ['flutter', 'Move quickly and lightly up and down, like a butterfly\'s wings.'],
      ['glimmer', 'A weak light that shines for a moment.'], ['whisper', 'Speak very quietly.']] },
  'rainbow-wings': {
    a: [['rainbow', 'An arc of colours in the sky after rain.'], ['feather', 'One of the soft, light things that cover a bird\'s body.'],
      ['sky', 'The space above the Earth where you see the clouds and the sun.'], ['fly', 'Move through the air.']],
    b: [['vivid', 'Very bright and strong in colour.'], ['soar', 'Fly high in the sky.'],
      ['spectrum', 'The band of all the colours, like in a rainbow.'], ['plumage', 'All the feathers of a bird.']] },
  'rainbow-aura': {
    a: [['bright', 'Full of light, or strong in colour.'], ['light', 'What comes from the sun and from lamps, so we can see.'],
      ['rain', 'Water that falls from the clouds.'], ['smile', 'A happy look on your face.']],
    b: [['glow', 'A soft, warm light.'], ['radiant', 'Shining brightly, or looking very happy.'],
      ['prism', 'A glass shape that splits light into colours.'], ['aura', 'A feeling or a light that seems to come from a person or a place.']] },
  'star-sprite': {
    a: [['star', 'A small bright light in the night sky.'], ['night', 'When it is dark and people sleep.'],
      ['wish', 'Hope that something will happen.'], ['friend', 'A person you like and play with.']],
    b: [['twinkle', 'Shine with a light that gets brighter and weaker, again and again.'], ['companion', 'Someone who spends a lot of time with you.'],
      ['loyal', 'Always there for your friends.'], ['constellation', 'A group of stars that makes a shape in the sky.']] },
  'witch-hat': {
    a: [['witch', 'A woman in stories who can do magic.'], ['spell', 'Magic words that make something happen.'],
      ['broom', 'A brush with a long handle. In stories, witches fly on one.'], ['moon', 'The big round light in the night sky.']],
    b: [['cauldron', 'A big round pot for cooking over a fire.'], ['potion', 'A magic drink.'],
      ['brew', 'Make a drink by mixing and heating things.'], ['cackle', 'A loud, high laugh, like a witch\'s.']] },
  'bat-wings': {
    a: [['bat', 'A small animal that flies at night and sleeps upside down.'], ['dark', 'With no light.'],
      ['cave', 'A big hole in the side of a hill or under the ground.'], ['scary', 'Making you feel afraid.']],
    b: [['nocturnal', 'Awake and active at night.'], ['echo', 'A sound that comes back to you after it hits a wall.'],
      ['swoop', 'Fly down suddenly and fast.'], ['eerie', 'Strange and a little frightening.']] },
  'web-aura': {
    a: [['spider', 'A small animal with eight legs that makes webs.'], ['web', 'The net of thin threads that a spider makes.'],
      ['ghost', 'In stories, the spirit of a dead person.'], ['spooky', 'A little scary, in a fun way.']],
    b: [['tangled', 'Twisted together in a messy way.'], ['thread', 'A long, thin piece of cotton or silk, used for sewing.'],
      ['creepy', 'Strange and a bit frightening.'], ['haunted', 'Visited by ghosts, in stories.']] },
  'wizard-hat': {
    a: [['wizard', 'A man in stories who has magic powers.'], ['magic', 'Special powers that make impossible things happen.'],
      ['book', 'Pages with words that you read.'], ['star', 'A small bright light in the night sky.'],
      ['moon', 'The big round light in the night sky.'], ['wise', 'Knowing a lot and making good choices.']],
    b: [['sorcerer', 'A person who uses magic, in stories.'], ['ancient', 'Very, very old.'],
      ['wisdom', 'Knowledge and good sense that come from experience.'], ['mysterious', 'Strange and hard to explain.'],
      ['scroll', 'A long roll of paper with writing on it.'], ['apprentice', 'A young person who learns a skill from an expert.']] },
  'masquerade-mask': {
    a: [['mask', 'Something you wear over your face to hide it.'], ['party', 'A time when people meet to eat, dance and have fun.'],
      ['dance', 'Move your body to music.'], ['secret', 'Something that only a few people know.'],
      ['music', 'Sounds that people make with their voices and instruments.'], ['gold', 'A shiny yellow metal.']],
    b: [['disguise', 'Clothes or things you wear so that people don\'t know who you are.'], ['ballroom', 'A large room for formal dances.'],
      ['glamorous', 'Very attractive and exciting.'], ['mystery', 'Something strange that nobody can explain.'],
      ['graceful', 'Moving in a smooth and beautiful way.'], ['reveal', 'Show something that was hidden.']] },
  'crystal-pendant': {
    a: [['crystal', 'A clear stone that shines like glass.'], ['stone', 'A small hard piece of rock.'],
      ['light', 'What comes from the sun and from lamps, so we can see.'], ['clear', 'Easy to see through, like clean water.'],
      ['gift', 'A present.'], ['heart', 'The part inside your chest that pumps blood. It is also a sign of love.']],
    b: [['sparkle', 'Shine with many small flashes of light.'], ['transparent', 'Clear enough to see through.'],
      ['gem', 'A beautiful stone used in jewellery.'], ['reflect', 'Send back light, like a mirror.'],
      ['facet', 'One of the flat sides of a cut jewel.'], ['treasure', 'Gold, jewels or other valuable things.']] },
  'angel-wings': {
    a: [['angel', 'In stories, a kind and good spirit with wings.'], ['white', 'The colour of snow.'],
      ['kind', 'Nice and helpful to other people.'], ['cloud', 'A white or grey shape in the sky, made of tiny drops of water.'],
      ['fly', 'Move through the air.'], ['peace', 'A time with no fighting. Calm and quiet.']],
    b: [['heavenly', 'Very pleasant or beautiful.'], ['halo', 'A ring of light above someone\'s head, in pictures.'],
      ['gentle', 'Kind and calm, not rough.'], ['serene', 'Calm and peaceful.'],
      ['glide', 'Move smoothly and quietly.'], ['pure', 'Clean, with nothing else mixed in.']] },
  'galaxy-aura': {
    a: [['space', 'Where the planets and stars are, outside the Earth.'], ['planet', 'A big round world, like the Earth, that moves around a star.'],
      ['star', 'A small bright light in the night sky.'], ['moon', 'The big round light in the night sky.'],
      ['rocket', 'A machine that flies into space.'], ['dark', 'With no light.']],
    b: [['galaxy', 'A huge group of millions of stars.'], ['universe', 'Everything that exists, with all of space.'],
      ['orbit', 'The path of a planet or a moon around another thing in space.'], ['comet', 'A ball of ice and dust with a bright tail, flying through space.'],
      ['astronaut', 'A person who travels into space.'], ['infinite', 'Without an end. Going on forever.']] },
  'baby-dragon': {
    a: [['dragon', 'A big animal in stories with wings, that breathes fire.'], ['fire', 'The hot, bright flames when something burns.'],
      ['egg', 'The round thing that a baby bird or a reptile comes out of.'], ['tail', 'The long part at the back of an animal\'s body.'],
      ['brave', 'Not afraid of danger.'], ['castle', 'A big, strong building where kings and queens lived.']],
    b: [['legendary', 'Very famous, or from old stories.'], ['fierce', 'Angry and ready to attack. Very strong.'],
      ['scales', 'The small hard plates that cover the skin of a fish or a reptile.'], ['hatch', 'Come out of an egg.'],
      ['mighty', 'Very big and strong.'], ['blaze', 'A big, strong fire.']] }
};

// The Studio (Say it, Wear it, phase 2): a white base, described in English, becomes her own design.
// id: [name, place, price]. The base pictures are docs/items/base-<id>.webp.
var STUDIO_BASES = { beanie: ['Beanie', 'head', 150], bow: ['Bow', 'head', 120], scarf: ['Scarf', 'neck', 160], cape: ['Cape', 'back', 220] };

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
    // An item made of words needs its words first (Shine = Memory).
    var made = SHOP_RECIPES[it.id] ? recipeOf(it.id, kidBand(kid)).map(function (x) { return x[0]; }) : [];
    if (made.length) {
      var mem = wordsOf(kid.Name, true).memory;
      var missing = made.filter(function (w) { return !mem[w]; });
      if (missing.length) throw new Error('The ' + it.name + ' is made of words. Collect them first: ' + missing.join(', '));
    }
    var coins = coinsOf(kid, rows);
    if (coins.balance < paid) throw new Error('You need ' + (paid - coins.balance) + ' more coins for the ' + it.name);
    var sentence = shopSentence(words);
    appendRow('Shop', { Timestamp: new Date(), Girl: kid.Name, Date: t, Item: it.id, Color: color, Price: it.price, Paid: paid,
      Manners: g.n, Sentence: sentence, Words: made.join(' ') });
    // Wear it at once (a move becomes the move).
    if (it.place === 'move' || SHOP.places.indexOf(it.place) >= 0) {
      var w = wardrobeOf(kid.Name, true);
      if (it.place === 'move') w.move = it.id;
      else w.wear = w.wear.filter(function (e) { return wearPlace(e) !== it.place; })
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

// What the pet wears (item, item:color or one of her designs, one per place) and its victory move. Only owned items.
function apiWear(name, pin, wear, move) {
  var kid = auth(name, pin);
  var owned = ownedItems(kid.Name), places = {}, list = [];
  (Array.isArray(wear) ? wear : []).slice(0, SHOP.places.length).forEach(function (e) {
    e = String(e);
    if (e.charAt(0) === '~') {
      var d = designFromToken(e);
      if (!d || !owned[e]) throw new Error('Make that design in the Studio first');
      if (places[d.place]) throw new Error('One item per place');
      places[d.place] = true;
      list.push(e);
      return;
    }
    var p = e.split(':'), it = shopItem(p[0]), color = p[1] || '';
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

// The place of a worn entry: an item ("star-beanie", "star-beanie:pink") or a design ("~cape...").
function wearPlace(e) {
  e = String(e);
  if (e.charAt(0) === '~') { var d = designFromToken(e); return d ? d.place : ''; }
  var it = shopItem(e.split(':')[0]);
  return it && SHOP.places.indexOf(it.place) >= 0 ? it.place : '';
}

function wardrobeOf(name, fresh) {
  var row = (fresh ? readTableUncached('Wardrobe') : readTable('Wardrobe')).filter(function (r) { return r.Girl === name; })[0];
  var places = {};
  var wear = String(row ? row.Wear : '').split(' ').filter(function (e) {
    var place = wearPlace(e);
    if (!place || places[place]) return false;
    return (places[place] = true);
  });
  var mv = row ? shopItem(String(row.Move)) : null;
  return { wear: wear, move: mv && mv.place === 'move' ? mv.id : '' };
}

function saveWardrobe(name, wear, move) {
  upsertRow('Wardrobe', 'Girl', name, { Wear: wear.join(' '), Move: move || '', Updated: new Date() });
}

function upgradesOf(owned) {
  return { shield: !!owned['streak-shield'], second: !!owned['second-chance'], saver: !!owned['word-saver'] };
}

function shopView(kid) {
  var t = today(), owned = ownedItems(kid.Name), w = wardrobeOf(kid.Name), season = shopSeason(t);
  var mine = readTable('Shop').filter(function (r) { return r.Girl === kid.Name; });
  var words = recipeView(kid, mine, wordsOf(kid.Name).memory, t);
  var designs = mine.filter(function (r) { return String(r.Item).charAt(0) === '~'; }).map(function (r) {
    var d = designFromToken(r.Item);
    return d ? { id: String(r.Item), name: designText(d.spec), base: d.spec.base, place: d.place, rarity: 'design', price: Number(r.Price) || 0,
      design: true, perfect: d.perfect, available: true, owned: true } : null;
  }).filter(Boolean);
  return {
    open: shopOpenFor(kid, t), opens: shopOpens(), today: t,
    season: season ? { id: season, name: SHOP.seasons[season].name, to: t.slice(0, 4) + '-' + SHOP.seasons[season].to } : null,
    coins: coinsOf(kid),
    items: Object.keys(SHOP_ITEMS).map(function (id) {
      var it = shopItem(id);
      it.available = shopAvailable(it, t);
      it.owned = !!owned[id];
      if (SHOP_RECIPES[id]) it.words = true;
      return it;
    }).concat(designs),
    bases: Object.keys(STUDIO_BASES).map(function (id) { return { id: id, name: STUDIO_BASES[id][0], place: STUDIO_BASES[id][1], price: STUDIO_BASES[id][2] }; }),
    words: words,
    polish: polishCount(words),
    discount: SHOP.discount,
    wear: w.wear, move: w.move, shield: !!owned['streak-shield'], upgrades: upgradesOf(owned),
    bought: shopBought(mine, 5)
  };
}

// The last purchases, newest first (the shop's receipt and the parent view).
function shopBought(rows, n) {
  return rows.slice(-n).reverse().map(function (r) {
    var id = String(r.Item), it = shopItem(id), d = id.charAt(0) === '~' ? designFromToken(id) : null;
    return { id: id, name: d ? designText(d.spec) : it ? it.name : id, paid: Number(r.Paid) || 0, price: Number(r.Price) || 0,
      date: r.Date, sentence: String(r.Sentence || ''), manners: Number(r.Manners) || 0, design: !!d, perfect: !!(d && d.perfect) };
  });
}

// The pet as other screens show it: what it looks like, what it wears (and how its word items shine), its move.
function petBrief(p) {
  return p ? { id: p.id, stage: p.stage, wear: p.wear || [], move: p.move || '', shine: p.shine || null } : null;
}

// ---------- Shine = Memory: items made of words ----------
// A rare or epic item is made of words (SHOP_RECIPES). Before buying it she collects them: a quick quiz, and a word
// she misses she learns on the spot. Then the item shines while she remembers them: a word comes back for review
// 3 days after she collects it (1 day after a miss), then 7 and 21 days later (REVIEW_DAYS), and the item fades a
// little for every word that is waiting, never below 40%. A word answered right after its 21 days is hers for good.
var SHINE = { floor: 40, due: 0.5, perDay: 0.05 };

function kidBand(kid) { return kid.Level === 'a1' || kid.Level === 'a2' ? 'a' : 'b'; }

function recipeOf(id, band) { return SHOP_RECIPES.hasOwnProperty(id) ? SHOP_RECIPES[id][band] || [] : []; }

// Every recipe word and its meaning (both bands), for words she keeps after her level changes.
function wordMeaning(word) {
  for (var id in SHOP_RECIPES) {
    if (!SHOP_RECIPES.hasOwnProperty(id)) continue;
    var all = SHOP_RECIPES[id].a.concat(SHOP_RECIPES[id].b);
    for (var i = 0; i < all.length; i++) if (all[i][0] === word) return all[i][1];
  }
  return '';
}

// The words of an item for her: the ones she bought it with (kept in the Shop row), or her band's recipe.
// An item bought before it had a recipe has no words (it always shines).
function itemWordList(kid, id, mine) {
  var row = mine.filter(function (r) { return r.Item === id; })[0];
  if (row) return String(row.Words || '').split(' ').filter(String);
  return recipeOf(id, kidBand(kid)).map(function (x) { return x[0]; });
}

// Words tab, one row per kid: Saved = game items kept by the Word Saver; Memory = "word|box|due ..." for recipe words
// (box 5 = hers for good).
function wordsOf(name, fresh) {
  var row = (fresh ? readTableUncached('Words') : readTable('Words')).filter(function (r) { return r.Girl === name; })[0];
  var memory = {};
  String(row ? row.Memory : '').split(' ').forEach(function (p) {
    var a = p.split('|');
    if (a.length === 3 && a[0]) memory[a[0]] = { box: Number(a[1]) || 1, due: a[2] };
  });
  return { saved: String(row ? row.Saved : '').split(' ').filter(String), memory: memory };
}

function saveWordsRow(name, w) {
  upsertRow('Words', 'Girl', name, { Saved: w.saved.join(' '),
    Memory: Object.keys(w.memory).map(function (k) { return k + '|' + w.memory[k].box + '|' + w.memory[k].due; }).join(' '), Updated: new Date() });
}

function wordState(m, t) { return !m ? 'new' : m.box >= 5 ? 'mastered' : m.due <= t ? 'due' : 'ok'; }

function shineOf(words, memory, t) {
  if (!words.length) return 100;
  var sum = 0;
  words.forEach(function (w) {
    var m = memory[w], s = wordState(m, t);
    if (s === 'mastered' || s === 'ok') sum += 1;
    else if (s === 'due') sum += Math.max(0, SHINE.due - SHINE.perDay * Math.round((parseDate(t) - parseDate(m.due)) / 86400000));
  });
  return Math.round(SHINE.floor + (100 - SHINE.floor) * sum / words.length);
}

// Per item made of words: its words (with the meaning and where she is with each), its shine, owned or not.
function recipeView(kid, mine, memory, t) {
  var out = {};
  Object.keys(SHOP_RECIPES).forEach(function (id) {
    var list = itemWordList(kid, id, mine), owned = mine.some(function (r) { return r.Item === id; });
    out[id] = { owned: owned, shine: owned ? shineOf(list, memory, t) : null,
      words: list.map(function (w) { return [w, wordMeaning(w), wordState(memory[w], t)]; }) };
  });
  return out;
}

// How many different words wait to be polished, in the items she owns.
function polishCount(view) {
  var due = {};
  Object.keys(view).forEach(function (id) {
    if (view[id].owned) view[id].words.forEach(function (w) { if (w[2] === 'due') due[w[0]] = true; });
  });
  return Object.keys(due).length;
}

// The shine of the word items her pet wears (for the pet everywhere it appears).
function wornShine(kid, wear) {
  var ids = (wear || []).map(function (e) { return String(e).split(':')[0]; }).filter(function (id) { return SHOP_RECIPES[id]; });
  if (!ids.length) return null;
  var mine = readTable('Shop').filter(function (r) { return r.Girl === kid.Name; }), memory = wordsOf(kid.Name).memory, t = today(), out = {};
  ids.forEach(function (id) { out[id] = shineOf(itemWordList(kid, id, mine), memory, t); });
  return out;
}

// For home: the words waiting in the items she owns.
function polishInfo(kid) {
  var t = today(), mine = readTable('Shop').filter(function (r) { return r.Girl === kid.Name; });
  if (!mine.some(function (r) { return SHOP_RECIPES[r.Item]; })) return null;
  var view = recipeView(kid, mine, wordsOf(kid.Name).memory, t);
  var dull = Object.keys(view).filter(function (id) { return view[id].owned && view[id].shine < 100; })
    .map(function (id) { return { id: id, name: shopItem(id).name, shine: view[id].shine }; });
  return { n: polishCount(view), items: dull };
}

// Collecting the words of an item (before buying it) or polishing them (after): right / missed = the words.
// itemId '' = every word item she owns (the polish on home). Words answered right that are not due yet stay as
// they are. Returns the shop.
function apiWords(name, pin, itemId, right, missed) {
  var kid = auth(name, pin), t = today();
  if (pendingLevelTest(kid)) throw new Error('Take the level test first.');
  var mine = readTable('Shop').filter(function (r) { return r.Girl === kid.Name; }), allowed = {};
  itemId = String(itemId || '');
  if (itemId && !SHOP_RECIPES[itemId]) throw new Error('That item is not made of words');
  Object.keys(SHOP_RECIPES).forEach(function (id) {
    if (itemId ? id === itemId : mine.some(function (r) { return r.Item === id; })) itemWordList(kid, id, mine).forEach(function (w) { allowed[w] = true; });
  });
  var clean = function (list) {
    return (Array.isArray(list) ? list : []).slice(0, 30).map(function (x) { return String(x).toLowerCase(); }).filter(function (w) { return allowed[w]; });
  };
  right = clean(right); missed = clean(missed);
  if (!right.length && !missed.length) throw new Error('No words to save');
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var w = wordsOf(kid.Name, true);
    missed.forEach(function (word) { w.memory[word] = { box: 1, due: addDays(t, REVIEW_DAYS[0]) }; });
    right.forEach(function (word) {
      if (missed.indexOf(word) >= 0) return;
      var m = w.memory[word];
      if (!m) w.memory[word] = { box: 2, due: addDays(t, REVIEW_DAYS[1]) };
      else if (m.box < 5 && m.due <= t) w.memory[word] = m.box >= REVIEW_DAYS.length ? { box: 5, due: '' } : { box: m.box + 1, due: addDays(t, REVIEW_DAYS[m.box]) };
    });
    saveWordsRow(kid.Name, w);
  } finally {
    lock.releaseLock();
  }
  return shopView(findGirl(kid.Name));
}

// ---------- Word Saver ----------
// Saves a game item (a word, a sentence) to her own deck: it comes back for review tomorrow and can be practiced
// on its own ("My words", a round of game 'mine'). Up to 150.
function apiSaveWord(name, pin, id, on) {
  var kid = auth(name, pin);
  if (!ownedItems(kid.Name)['word-saver']) throw new Error('The Word Saver is in Coco\'s shop');
  id = cleanIds([id])[0];
  if (!id || !/^[mplbs]:/.test(id)) throw new Error('That one cannot be saved');
  var w, lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    w = wordsOf(kid.Name, true);
    var i = w.saved.indexOf(id);
    if (on && i < 0) {
      if (w.saved.length >= 150) throw new Error('Your word box is full (150). Remove a few first.');
      w.saved.push(id);
      reviewAdd(kid.Name, id, today());
    } else if (!on && i >= 0) w.saved.splice(i, 1);
    saveWordsRow(kid.Name, w);
  } finally {
    lock.releaseLock();
  }
  return { saved: w.saved };
}

// ---------- The Studio: Say it, Wear it ----------
// She describes a base in English ("a big sparkly purple velvet cape with tiny gold stars"); good English makes it.
// The design is a token that carries everything needed to draw it, so other kids' phones can show it too:
// "~base.opinion.size.quality.color.material.psize.pquality.pcolor.pattern.fit" (spaces as "-", fit "p" = Perfect Fit:
// right the first time, with 3 or more describing words). The token is the Shop row's Item.
function apiDesign(name, pin, base, text, fresh) {
  var kid = auth(name, pin), t = today();
  if (pendingLevelTest(kid)) throw new Error('Take the level test first.');
  if (!shopOpenFor(kid, t)) throw new Error('Coco\'s Wordrobe opens on ' + shopOpens() + '.');
  var b = STUDIO_BASES.hasOwnProperty(base) ? STUDIO_BASES[base] : null;
  if (!b) throw new Error('Choose a base first');
  var g = studioGrade(text, base);
  if (!g.ok) throw new Error(g.hint);
  var perfect = !!fresh && g.n >= 3, token = designToken(g.spec, perfect), same = token.replace(/\.p?$/, ''), bought;
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var rows = readTableUncached('Shop');
    if (rows.some(function (r) { return r.Girl === kid.Name && String(r.Item).replace(/\.p?$/, '') === same; })) throw new Error('You already have this design, darling!');
    var coins = coinsOf(kid, rows);
    if (coins.balance < b[2]) throw new Error('You need ' + (b[2] - coins.balance) + ' more coins for the ' + b[0].toLowerCase());
    appendRow('Shop', { Timestamp: new Date(), Girl: kid.Name, Date: t, Item: token, Color: g.spec.color, Price: b[2], Paid: b[2],
      Manners: '', Sentence: designText(g.spec, true) });
    var w = wardrobeOf(kid.Name, true);
    w.wear = w.wear.filter(function (e) { return wearPlace(e) !== b[1]; }).concat([token]);
    saveWardrobe(kid.Name, w.wear, w.move);
    bought = { id: token, name: designText(g.spec), price: b[2], paid: b[2], perfect: perfect, n: g.n, design: true };
  } finally {
    lock.releaseLock();
  }
  var view = shopView(findGirl(kid.Name));
  view.bought = bought;
  return view;
}

function designToken(s, perfect) {
  return '~' + [s.base, s.opinion, s.size, s.quality, s.color, s.material, s.psize, s.pquality, s.pcolor, s.pattern]
    .map(function (x) { return String(x || '').replace(/ /g, '-'); }).join('.') + '.' + (perfect ? 'p' : '');
}

function designFromToken(tok) {
  tok = String(tok);
  var f = tok.slice(1).split('.');
  if (tok.charAt(0) !== '~' || f.length !== 11 || !STUDIO_BASES.hasOwnProperty(f[0])) return null;
  var sp = function (x) { return x.replace(/-/g, ' '); };
  return { spec: { base: f[0], opinion: f[1], size: f[2], quality: f[3], color: sp(f[4]), material: f[5], psize: f[6], pquality: f[7],
    pcolor: sp(f[8]), pattern: sp(f[9]) }, place: STUDIO_BASES[f[0]][1], perfect: f[10] === 'p' };
}

// "a big sparkly purple velvet cape with tiny gold stars" (sentence: capital letter and a full stop).
function designText(s, sentence) {
  var pre = [s.opinion, s.size, s.quality, s.color, s.material].filter(String);
  var words = pre.concat([s.base]);
  if (s.pattern) words = words.concat(['with'], [s.psize, s.pquality, s.pcolor].filter(String), [s.pattern]);
  var out = (/^[aeiou]/.test(words[0]) ? 'an ' : 'a ') + words.join(' ');
  return sentence ? out.charAt(0).toUpperCase() + out.slice(1) + '.' : out;
}

// The Studio's words, by kind. Before the thing they go in this order: opinion, size, sparkle, color, material;
// a pattern comes after it, with "with". The same function is in src/Index.html (test/sim.js checks they agree).
function studioWords() {
  return {
    opinion: ['cute', 'lovely', 'cool', 'pretty', 'beautiful', 'fancy', 'amazing', 'elegant', 'awesome', 'gorgeous'],
    size: ['tiny', 'little', 'small', 'big', 'large', 'huge', 'giant', 'oversized'],
    quality: ['sparkly', 'shiny', 'glittery', 'glowing'],
    color: ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'white', 'black', 'brown', 'gray', 'grey', 'gold', 'golden',
      'silver', 'turquoise', 'rainbow'],
    shade: ['light', 'dark'],
    material: ['velvet', 'silk', 'wool', 'denim', 'leather'],
    pattern: ['stars', 'hearts', 'dots', 'polka dots', 'stripes', 'flowers', 'snowflakes', 'moons'],
    bases: { beanie: 'Beanie', bow: 'Bow', scarf: 'Scarf', cape: 'Cape' },
    others: ['hat', 'cap', 'hoodie', 'dress', 'shirt', 'jacket', 'shoes', 'coat', 'crown', 'tie', 'necklace', 'wings', 'glasses', 'sweater', 'skirt']
  };
}

// Grades a design. The same function is in src/Index.html (the live check); test/sim.js checks they agree.
// Returns { ok, hint, spec, n, text }: spec = the words by kind (as she wrote them), n = how many describing words.
function studioGrade(text, base) {
  var W = studioWords(), RANK = { opinion: 0, size: 1, quality: 2, color: 3, material: 4 };
  var LABEL = { opinion: 'opinion', size: 'size', quality: 'sparkle', color: 'color', material: 'material' };
  var PLURAL = { star: 'stars', heart: 'hearts', dot: 'dots', 'polka dot': 'polka dots', stripe: 'stripes', flower: 'flowers', snowflake: 'snowflakes', moon: 'moons' };
  var thing = W.bases[base] ? W.bases[base].toLowerCase() : 'thing', eg = 'a pink ' + thing + ' with white stars';
  var out = { ok: false, hint: '', spec: null, n: 0, text: '' };
  var an = function (w) { return /^[aeiou]/.test(w) ? 'an' : 'a'; };
  var toks = String(text || '').toLowerCase().replace(/[^a-z' ]+/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(String).slice(0, 24);
  var words = [], i, k;
  for (i = 0; i < toks.length; i++) {
    var nx = toks[i + 1];
    if ((toks[i] === 'light' || toks[i] === 'dark') && nx && W.color.indexOf(nx) >= 0) { words.push(toks[i] + ' ' + nx); i++; }
    else if (toks[i] === 'polka' && (nx === 'dots' || nx === 'dot')) { words.push('polka ' + nx); i++; }
    else words.push(toks[i]);
  }
  var kindOf = function (w) {
    if (w === 'a' || w === 'an' || w === 'the') return 'article';
    if (w === 'with' || w === 'and') return w;
    if (W.bases.hasOwnProperty(w)) return 'base';
    if (W.others.indexOf(w) >= 0) return 'other';
    if (PLURAL.hasOwnProperty(w)) return 'single';
    if (W.shade.indexOf(w) >= 0) return 'shade';
    if (w.indexOf(' ') > 0 && W.shade.indexOf(w.split(' ')[0]) >= 0) return 'color';
    var ks = ['opinion', 'size', 'quality', 'color', 'material', 'pattern'];
    for (var j = 0; j < ks.length; j++) if (W[ks[j]].indexOf(w) >= 0) return ks[j];
    return '';
  };
  var kinds = words.map(kindOf);
  if (!words.length) { out.hint = 'Describe your ' + thing + ' in English, darling. For example: "' + eg + '".'; return out; }
  // A word Coco does not know: the closest one she knows (a typo), or the list.
  for (i = 0; i < words.length; i++) {
    if (kinds[i]) continue;
    var w0 = words[i], best = '', bd = 3, all = [];
    ['opinion', 'size', 'quality', 'color', 'shade', 'material', 'pattern'].forEach(function (kk) { all = all.concat(W[kk]); });
    all = all.concat(Object.keys(W.bases), ['with', 'and']);
    all.forEach(function (c) {
      var m = w0.length, n = c.length, d = [], x, y;
      for (x = 0; x <= m; x++) { d[x] = [x]; }
      for (y = 0; y <= n; y++) d[0][y] = y;
      for (x = 1; x <= m; x++) for (y = 1; y <= n; y++) d[x][y] = Math.min(d[x - 1][y] + 1, d[x][y - 1] + 1, d[x - 1][y - 1] + (w0.charAt(x - 1) === c.charAt(y - 1) ? 0 : 1));
      if (d[m][n] < bd && d[m][n] <= (w0.length <= 4 ? 1 : 2)) { bd = d[m][n]; best = c; }
    });
    out.hint = 'I don\'t know the word "' + w0 + '".' + (best ? ' Did you mean "' + best + '"?' : ' Try the words below.');
    return out;
  }
  var other = kinds.indexOf('other');
  if (other >= 0) { out.hint = 'Here we are making a ' + thing + ', not a ' + words[other] + '. Say: "a pink ' + thing + '".'; return out; }
  var bi = kinds.indexOf('base'), and = kinds.indexOf('and');
  if (and >= 0) {
    out.hint = bi >= 0 && and > bi ? 'One pattern is enough, darling: "' + eg + '".' : 'One color for the ' + thing + ', darling. Add a second color with "with": "' + eg + '".';
    return out;
  }
  if (bi < 0) { out.hint = 'What are we making? Say the word "' + thing + '": "a pink ' + thing + '".'; return out; }
  if (words[bi] !== base) { out.hint = 'This one is a ' + thing + ', darling: "a pink ' + thing + '".'; return out; }
  if (kinds.indexOf('base', bi + 1) >= 0) { out.hint = 'Say "' + thing + '" only once.'; return out; }
  var sh = kinds.indexOf('shade');
  if (sh >= 0) { out.hint = '"' + words[sh] + '" goes with a color: "' + words[sh] + ' blue".'; return out; }
  if (kinds[0] !== 'article') { out.hint = 'Start with "a" or "an": "' + an(words[0]) + ' ' + words.slice(0, bi + 1).join(' ') + '".'; return out; }
  if (kinds.slice(1, bi).indexOf('article') >= 0) { out.hint = 'Say "a" or "an" only once, at the start.'; return out; }
  if (kinds.indexOf('article', bi + 1) >= 0) {
    var pt = words.slice(bi + 1).filter(function (x, j) { return kinds[bi + 1 + j] === 'pattern' || kinds[bi + 1 + j] === 'single'; })[0];
    out.hint = 'A pattern needs no "a" or "the": "with ' + (pt ? PLURAL[pt] || pt : 'white stars') + '".';
    return out;
  }
  var pre = words.slice(1, bi), preK = kinds.slice(1, bi), post = words.slice(bi + 1), postK = kinds.slice(bi + 1);
  for (i = 0; i < preK.length; i++) {
    if (preK[i] === 'pattern' || preK[i] === 'single' || preK[i] === 'with') {
      var pat = preK[i] === 'with' ? 'stars' : PLURAL[pre[i]] || pre[i];
      var rest = pre.filter(function (x, j) { return RANK.hasOwnProperty(preK[j]); }).concat([thing]);
      out.hint = 'Patterns go after the ' + thing + ', with "with": "' + an(rest[0]) + ' ' + rest.join(' ') + ' with ' + pat + '".';
      return out;
    }
  }
  var spec = { base: base, opinion: '', size: '', quality: '', color: '', material: '', psize: '', pquality: '', pcolor: '', pattern: '' };
  var mods = [], modK = [];
  if (post.length) {
    if (postK[0] !== 'with') {
      var k0 = postK[0];
      if (RANK.hasOwnProperty(k0)) out.hint = 'In English the ' + LABEL[k0] + ' comes before the ' + thing + ': "' + an(post[0]) + ' ' + post[0] + ' ' + thing + '".';
      else if (k0 === 'pattern' || k0 === 'single') out.hint = 'Add "with": "a ' + thing + ' with ' + (PLURAL[post[0]] || post[0]) + '".';
      else out.hint = 'After the ' + thing + ' you can add "with" and a pattern: "' + eg + '".';
      return out;
    }
    var pw = post.slice(1), pk = postK.slice(1);
    if (!pw.length) { out.hint = 'With what? Add a pattern: "' + eg + '".'; return out; }
    var si = pk.indexOf('single');
    if (si >= 0) { out.hint = 'Use the plural for a pattern: "with ' + PLURAL[pw[si]] + '".'; return out; }
    var pi = pk.indexOf('pattern');
    if (pi < 0) { out.hint = 'With what? End with a pattern: "with ' + pw.join(' ') + ' stars".'; return out; }
    if (pk.indexOf('pattern', pi + 1) >= 0 || pk.indexOf('with') >= 0) { out.hint = 'One pattern is enough, darling.'; return out; }
    if (pi !== pk.length - 1) { out.hint = 'End with the pattern: "with ' + pw.slice(0, pi + 1).join(' ') + '".'; return out; }
    mods = pw.slice(0, pi); modK = pk.slice(0, pi);
    for (i = 0; i < modK.length; i++) {
      if (modK[i] !== 'size' && modK[i] !== 'quality' && modK[i] !== 'color') {
        out.hint = 'For a pattern, say its size, sparkle or color: "with tiny white ' + pw[pi] + '".';
        return out;
      }
    }
    spec.pattern = pw[pi];
  }
  // One word of each kind, then the order: before the thing, and inside the pattern.
  var groups = [[pre, preK, false], [mods, modK, true]];
  for (k = 0; k < groups.length; k++) {
    var gw = groups[k][0], gk = groups[k][1], seen = {};
    for (i = 0; i < gk.length; i++) {
      if (seen.hasOwnProperty(gk[i])) {
        out.hint = gk[i] === 'color' && !groups[k][2] ? 'One color for the ' + thing + '. Add a second color with "with": "' + eg + '".'
          : 'One ' + LABEL[gk[i]] + ' word is enough. Choose "' + gw[seen[gk[i]]] + '" or "' + gw[i] + '".';
        return out;
      }
      seen[gk[i]] = i;
    }
    for (i = 1; i < gk.length; i++) {
      if (RANK[gk[i]] < RANK[gk[i - 1]]) {
        var idx = gw.map(function (x, j) { return j; }).sort(function (a, b) { return RANK[gk[a]] - RANK[gk[b]]; });
        var fixed = idx.map(function (j) { return gw[j]; }), order = idx.map(function (j) { return LABEL[gk[j]]; }).join(' → ');
        var phrase = groups[k][2] ? 'with ' + fixed.join(' ') + ' ' + spec.pattern : an(fixed[0]) + ' ' + fixed.join(' ') + ' ' + thing;
        out.hint = 'Almost! In English the order is ' + order + ': "' + phrase + '".';
        return out;
      }
    }
  }
  var first = words[1];
  if (words[0] === 'the') { out.hint = 'It\'s a new design, so say "a" or "an": "' + an(first) + ' ' + words.slice(1, bi + 1).join(' ') + '".'; return out; }
  if (words[0] !== an(first)) {
    var fix = an(first) + ' ' + words.slice(1, bi + 1).join(' ');
    out.hint = an(first) === 'an' ? 'Before a vowel sound we say "an": "' + fix + '".' : 'Before a consonant sound we say "a": "' + fix + '".';
    return out;
  }
  if (!pre.length && !spec.pattern) { out.hint = 'Describe it! Add a color, for example: "a pink ' + thing + '".'; return out; }
  for (i = 0; i < pre.length; i++) spec[preK[i]] = pre[i];
  for (i = 0; i < mods.length; i++) spec['p' + modK[i]] = mods[i];
  out.ok = true; out.spec = spec; out.n = pre.length + mods.length + (spec.pattern ? 1 : 0); out.text = words.join(' ');
  return out;
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
