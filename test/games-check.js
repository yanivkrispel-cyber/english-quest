// Checks docs/games.js: shapes, duplicates, one marked word per "Spot it" sentence, pictures on disk.
const fs = require('fs'), vm = require('vm'), path = require('path');
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync('docs/games.js', 'utf8'), ctx);
const B = ctx.window.EQ_GAMES;
const errors = [];
const err = (where, msg) => errors.push(where + ': ' + msg);
const LEVELS = ['a1', 'a2', 'b1', 'b2', 'c1'];
const counts = {};

Object.entries(B.pics).forEach(([topic, words]) => words.forEach(w => {
  if (!fs.existsSync(path.join('docs', 'pics', w.replace(/ /g, '-') + '.webp'))) err('pics/' + topic, 'missing picture for "' + w + '"');
}));
const picWords = Object.values(B.pics).flat();
if (new Set(picWords).size !== picWords.length) err('pics', 'duplicate picture words');
Object.values(B.pics).forEach(list => { if (list.length < 4) err('pics', 'a topic needs at least 4 words for the options'); });

LEVELS.forEach(lv => {
  const m = B.match[lv] || [], seen = new Set();
  m.forEach(([w, d], i) => {
    if (!w || !d) err('match/' + lv + '/' + i, 'empty word or definition');
    if (seen.has(w.toLowerCase())) err('match/' + lv, 'duplicate word "' + w + '"');
    seen.add(w.toLowerCase());
    if (d && d.toLowerCase().includes(w.toLowerCase())) err('match/' + lv, '"' + w + '" appears in its own definition');
  });
  if (m.length < 4) err('match/' + lv, 'needs at least 4 words');

  (B.listen[lv] || []).forEach((x, i) => {
    const where = 'listen/' + lv + '/' + i;
    if (x.length !== 6) return err(where, 'needs 6 fields, has ' + x.length);
    const opts = x.slice(2);
    if (new Set(opts).size !== 4) err(where, 'options are not unique');
    if (!x[1] && x[0] !== x[2]) err(where, 'word item: the answer must be the spoken word');
  });

  (B.build[lv] || []).forEach((s, i) => {
    const where = 'build/' + lv + '/' + i;
    if (s.split(' ').length < 4) err(where, 'too short');
    if (!/[.?!]$/.test(s)) err(where, 'should end with punctuation');
    if (/\s{2}/.test(s)) err(where, 'double space');
  });

  (B.spot[lv] || []).forEach((x, i) => {
    const where = 'spot/' + lv + '/' + i;
    if (x.length !== 3 || !x[2]) return err(where, 'needs [sentence, fix, tip]');
    const marked = x[0].split(' ').filter(t => t.includes('*'));
    if (marked.length !== 1 || (marked[0].match(/\*/g) || []).length !== 2) err(where, 'needs exactly one *word*');
    else if (marked[0].replace(/[*.,!?]/g, '') === x[1]) err(where, 'the fix equals the wrong word');
  });

  counts[lv] = ['match', 'listen', 'build', 'spot'].map(g => g + ' ' + (B[g][lv] || []).length).join(', ');
});

// Talk & Tap: Match it words of the level (A1 also the picture words), two don't-say words each, at least
// 4 words per topic for the options, starters for every topic.
LEVELS.forEach(lv => {
  const T = (B.talk || {})[lv];
  if (!T) return err('talk/' + lv, 'missing');
  const known = new Set((B.match[lv] || []).map(m => m[0]).concat(lv === 'a1' ? picWords : [])), seen = new Set();
  Object.entries(T).forEach(([topic, list]) => {
    if (!(B.starters || {})[topic] || B.starters[topic].length < 2) err('talk/' + lv + '/' + topic, 'no starters for this topic');
    if (list.length < 4) err('talk/' + lv + '/' + topic, 'a topic needs at least 4 words for the options');
    list.forEach(x => {
      const where = 'talk/' + lv + '/' + topic + '/' + x[0];
      if (x.length !== 3 || !x[1] || !x[2]) return err(where, 'needs a word and two words not to say');
      if (!known.has(x[0])) err(where, 'not a Match it word of this level');
      if (seen.has(x[0])) err(where, 'duplicate');
      seen.add(x[0]);
      if (x[1] === x[2] || x.slice(1).some(t => t.toLowerCase() === x[0].toLowerCase())) err(where, 'the words not to say must differ from the word and from each other');
    });
  });
  counts[lv] += ', talk ' + seen.size;
});

// The held-out bank (night review, finding 12): every level, all four games, at least 30 items, the same formats, none of them
// in the games (same word, same sentence, or a spot sentence whose fixed form is a game sentence), and no two match
// definitions of a level so alike that one would be a right answer for the other.
const norm = s => String(s).toLowerCase().replace(/[*.,!?'"]/g, '').replace(/\s+/g, ' ').trim();
const spotFixed = x => x[0].split(' ').map(t => t.indexOf('*') >= 0 ? t.replace(/\*(.*?)\*/, x[1]) : t).join(' ');
const gameText = new Set(), gameWords = new Set();
LEVELS.forEach(lv => {
  (B.match[lv] || []).forEach(m => gameWords.add(m[0].toLowerCase()));
  (B.listen[lv] || []).forEach(x => gameText.add(norm(x[0])));
  (B.build[lv] || []).forEach(s => gameText.add(norm(s)));
  (B.spot[lv] || []).forEach(x => { gameText.add(norm(x[0])); gameText.add(norm(spotFixed(x))); });
});
const STOP = ' a an the to of or and for in on at with something someone you your it is be that who which very ';
const dw = d => d.toLowerCase().replace(/[^a-z ]+/g, ' ').split(' ').filter(w => w && STOP.indexOf(' ' + w + ' ') < 0);
const heldWords = new Set();
LEVELS.forEach(lv => {
  const H = (B.gate || {})[lv], where = 'gate/' + lv;
  if (!H) return err(where, 'missing');
  const n = ['match', 'listen', 'build', 'spot'].reduce((a, g) => a + (H[g] || []).length, 0);
  if (n < 30) err(where, 'needs at least 30 items, has ' + n);
  if ((H.match || []).length < 6) err(where, 'needs at least 6 match words (the options)');
  ['listen', 'build', 'spot'].forEach(g => { if ((H[g] || []).length < 4) err(where, 'needs at least 4 ' + g + ' items'); });
  if ((H.spot || []).filter(x => /^[A-Za-z'-]+$/.test(x[1] || '')).length < 3) err(where, 'needs at least 3 spot items with a one-word fix (Type it)');
  (H.match || []).forEach(([w, d], i) => {
    if (!w || !d) err(where + '/match/' + i, 'empty word or definition');
    if (gameWords.has(w.toLowerCase())) err(where, '"' + w + '" is a game word');
    if (heldWords.has(w.toLowerCase())) err(where, 'duplicate held-out word "' + w + '"');
    heldWords.add(w.toLowerCase());
    if (d && d.toLowerCase().includes(w.toLowerCase())) err(where, '"' + w + '" appears in its own definition');
    (H.match || []).slice(i + 1).forEach(([w2, d2]) => {
      const a = dw(d), b = dw(d2), same = a.filter(x => b.indexOf(x) >= 0).length;
      if (a.length && b.length && same / Math.min(a.length, b.length) >= 0.6) err(where, 'definitions of "' + w + '" and "' + w2 + '" are too alike');
    });
  });
  (H.listen || []).forEach((x, i) => {
    if (x.length !== 6) return err(where + '/listen/' + i, 'needs 6 fields');
    if (new Set(x.slice(2)).size !== 4) err(where + '/listen/' + i, 'options are not unique');
    if (gameText.has(norm(x[0]))) err(where + '/listen/' + i, 'the same sentence is in the games');
  });
  (H.build || []).forEach((s, i) => {
    if (s.split(' ').length < 4 || !/[.?!]$/.test(s)) err(where + '/build/' + i, 'too short or no end punctuation');
    if (gameText.has(norm(s))) err(where + '/build/' + i, 'the same sentence is in the games');
  });
  (H.spot || []).forEach((x, i) => {
    if (x.length !== 3 || !x[2]) return err(where + '/spot/' + i, 'needs [sentence, fix, tip]');
    const marked = x[0].split(' ').filter(t => t.includes('*'));
    if (marked.length !== 1 || (marked[0].match(/\*/g) || []).length !== 2) err(where + '/spot/' + i, 'needs exactly one *word*');
    else if (marked[0].replace(/[*.,!?]/g, '') === x[1]) err(where + '/spot/' + i, 'the fix equals the wrong word');
    if (gameText.has(norm(x[0])) || gameText.has(norm(spotFixed(x)))) err(where + '/spot/' + i, 'the same sentence is in the games');
  });
  counts[lv] += ', gate ' + n;
});

console.log('pictures:', picWords.length);
LEVELS.forEach(lv => console.log(lv + ':', counts[lv]));
if (errors.length) { console.log('\n' + errors.join('\n')); process.exit(1); }
console.log('games.js OK');
