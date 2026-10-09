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

console.log('pictures:', picWords.length);
LEVELS.forEach(lv => console.log(lv + ':', counts[lv]));
if (errors.length) { console.log('\n' + errors.join('\n')); process.exit(1); }
console.log('games.js OK');
