// Checks Coco's Nest content in docs/nest/nest.js (specs/nest.md): unit order and ids, 6 words a new unit, exactly one
// picture kind per word, colors and counts, core words, the phrase, Coco says moves, the parents' home ideas, one meaning
// per English word across units, reviews that point back, safe words, the shared Hebrew and English lines,
// every picture and clip on disk, and that src/NestIndex.js has the same units in the same order.
// Exits with 1 when something is wrong.
//   node test/nest-check.js
//   require('./nest-check.js').check({ files: false, index: false })  -> list of errors (tools/nest-index.js)
const fs = require('fs'), path = require('path'), vm = require('vm');
const { load, clips } = require('../tools/nest-audio-list.js');
const ROOT = path.join(__dirname, '..');
const HE_KEYS = ['hello', 'meet', 'phrase', 'find', 'again', 'move', 'say', 'done', 'pet', 'start', 'review'];
const EN_KEYS = ['hi', 'meet', 'find', 'move', 'say', 'great', 'yes', 'wow', 'super', 'try', 'bye', 'listen'];
const HEB = /[֐-׿]/;
const HARSH = /\b(kill|die|dead|death|blood|guns?|knife|knives|sword|bomb|war|army|monster|ghost|witch|skull|devil|zombie|beer|wine|kiss|church|mosque|synagogue|god|jesus|allah|stupid|ugly|fat)\b/i;

function check(opts) {
  opts = Object.assign({ files: true, index: true }, opts);
  const errors = [], ok = [];
  const err = (where, msg) => errors.push(where + ': ' + msg);
  let nest;
  try { nest = load(); } catch (e) { return ['nest.js: ' + e.message]; }
  if (!nest || !Array.isArray(nest.units)) return ['nest.js: window.EQ_NEST.units missing'];
  const units = nest.units, unitIds = new Set(), wordIds = new Set(), pics = new Set(), enWhere = {};
  const moves = nest.moves || {}, usedMoves = new Set();
  // A parents' idea: Hebrew, with every English part inside {braces} (shown left to right in the card).
  const homeLine = (where, t) => {
    if (typeof t !== 'string' || !HEB.test(t)) return err(where, 'needs a Hebrew line');
    if (!/^[^{}]*({[^{}]+}[^{}]*)*$/.test(t)) return err(where, 'unbalanced {braces}');
    if (/[A-Za-z]/.test(t.replace(/{[^}]*}/g, ''))) err(where, 'English outside {braces}');
    if (t.length > 140) err(where, 'too long for the card');
  };
  const english = (where, t, max) => {
    if (!t || typeof t !== 'string') return err(where, 'missing');
    if (!/[.!?]$/.test(t)) err(where, 'should end with . ! or ?');
    if (t.split(/s+/).length > max) err(where, 'too long for a toddler');
    if (HEB.test(t)) err(where, 'must be English');
    if (HARSH.test(t)) err(where, 'not fit for small kids');
  };
  const oneKind = (where, w) => {
    const kinds = ['pic', 'color', 'count'].filter(f => w[f] != null);
    if (kinds.length !== 1) err(where, 'needs exactly one of pic / color / count, has ' + (kinds.join(', ') || 'none'));
    if (w.pic != null) {
      if (!/^[a-z0-9-]+$/.test(w.pic)) err(where, 'bad pic name');
      else pics.add(w.pic);
    }
    if (w.color != null && !/^#[0-9a-f]{6}$/i.test(w.color)) err(where, 'color must be #rrggbb');
    else if (w.color != null) pics.add('blob-' + w.color.slice(1).toLowerCase());
    if (w.count != null) pics.add('count-token');
    if (w.count != null && !(Number.isInteger(w.count) && w.count >= 1 && w.count <= 10)) err(where, 'count must be 1 to 10');
  };
  let nNew = 0, nRev = 0, nWords = 0;

  units.forEach((u, i) => {
    const where = 'unit ' + (u.id || i);
    if (!/^[nr]\d\d$/.test(u.id || '')) err(where, 'id must be nNN or rNN');
    if (unitIds.has(u.id)) err(where, 'duplicate unit id');
    unitIds.add(u.id);
    if (!u.title || typeof u.title !== 'string') err(where, 'no title');
    if (!HEB.test(u.he || '')) err(where, 'no Hebrew title');
    if (!/^[a-z0-9-]+$/.test(u.icon || '')) err(where, 'no icon');
    else pics.add(u.icon);
    if (u.review) {
      nRev++;
      if (u.id !== 'r' + String(nRev).padStart(2, '0')) err(where, 'reviews must be numbered r01, r02, ... in order');
      if (u.words) err(where, 'a review has no words of its own');
      if (!Array.isArray(u.review) || !u.review.length) err(where, 'review list empty');
      (u.review || []).forEach(id => {
        const j = units.findIndex(x => x.id === id);
        if (j < 0) err(where, 'reviews unknown unit ' + id);
        else if (j >= i) err(where, 'reviews ' + id + ', which comes later');
        else if (units[j].review) err(where, 'reviews another review ' + id);
      });
      return;
    }
    nNew++;
    if (u.id !== 'n' + String(nNew).padStart(2, '0')) err(where, 'new units must be numbered n01, n02, ... in order');
    if (!/^[a-z]+$/.test(u.theme || '')) err(where, 'no theme');
    if (!Array.isArray(u.words) || u.words.length < 4 || u.words.length > 6) err(where, 'needs 4 to 6 words, has ' + ((u.words || []).length));
    const ens = new Set();
    (u.words || []).forEach((w, k) => {
      const ww = where + ' word ' + (w.id || k);
      nWords++;
      if (!/^[a-z0-9-]+$/.test(w.id || '')) err(ww, 'id must be lowercase a-z, digits and -');
      if (wordIds.has(w.id)) err(ww, 'duplicate word id');
      wordIds.add(w.id);
      if (!w.en || typeof w.en !== 'string') err(ww, 'no English word');
      if (ens.has(w.en)) err(ww, 'same English word twice in a unit');
      ens.add(w.en);
      if (!HEB.test(w.he || '')) err(ww, 'no Hebrew translation');
      ['say', 'find'].forEach(f => {
        if (!w[f] || typeof w[f] !== 'string') err(ww, 'no ' + f);
        else {
          if (!/[.!?]$/.test(w[f])) err(ww, f + ' should end with . ! or ?');
          if (w[f].split(/\s+/).length > 6) err(ww, f + ' is too long for a toddler');
          if (HEB.test(w[f])) err(ww, f + ' must be English');
        }
      });
      if (HARSH.test([w.en, w.say, w.find].join(' '))) err(ww, 'word not fit for small kids');
      // One English word, one meaning: "orange" as a color and as a fruit confuses a three-year-old.
      if (w.en && enWhere[w.en] && enWhere[w.en] !== u.id) err(ww, '"' + w.en + '" is also a word in ' + enWhere[w.en]);
      else if (w.en) enWhere[w.en] = u.id;
      oneKind(ww, w);
    });
    const ids = (u.words || []).map(w => w.id);
    // Ages 2 and 3 play 4 core words of each unit.
    if ((u.words || []).length > 4) {
      if (!Array.isArray(u.core) || u.core.length !== 4 || new Set(u.core).size !== 4) err(where, 'needs 4 core words');
      else u.core.forEach(id => { if (!ids.includes(id)) err(where, 'core word ' + id + ' is not in the unit'); });
    } else if (u.core) err(where, 'a unit of 4 words needs no core list');
    if (!u.phrase) err(where, 'needs a phrase');
    else {
      english(where + ' phrase', u.phrase.en, 8);
      if (!HEB.test(u.phrase.he || '')) err(where, 'phrase needs a Hebrew translation (parents)');
      if (u.phrase.word && !ids.includes(u.phrase.word)) err(where, 'phrase word ' + u.phrase.word + ' is not in the unit');
    }
    if (!Array.isArray(u.moves) || u.moves.length < 2 || u.moves.length > 3) err(where, 'needs 2 or 3 moves');
    else u.moves.forEach(m => { if (!moves[m]) err(where, 'unknown move ' + m); else usedMoves.add(m); });
    if (!Array.isArray(u.home) || u.home.length < 1 || u.home.length > 3) err(where, 'needs 1 to 3 home ideas');
    else u.home.forEach((t, k) => homeLine(where + ' home ' + (k + 1), t));
    // Two words of a unit must not look the same in Find it.
    const look = (u.words || []).map(w => w.pic || w.color || ('n' + w.count));
    if (new Set(look).size !== look.length) err(where, 'two words share a picture');
  });
  // After every two new units, a review of both.
  units.forEach((u, i) => {
    if (!u.review) return;
    const prev = units.slice(Math.max(0, i - 2), i);
    if (prev.length !== 2 || prev.some(x => x.review) || String(u.review) !== String(prev.map(x => x.id)))
      err('unit ' + u.id, 'a review comes after two new units and reviews exactly those two');
  });
  if (units.length && !units[units.length - 1].review) err('units', 'should end with a review');
  ok.push(units.length + ' units (' + nNew + ' new, ' + nRev + ' reviews), ' + nWords + ' words');
  Object.keys(moves).forEach(k => {
    if (!/^[a-z0-9-]+$/.test(k)) err('move ' + k, 'id must be lowercase a-z, digits and -');
    english('move ' + k, moves[k].en, 7);
    oneKind('move ' + k, moves[k]);
    if (!usedMoves.has(k)) err('move ' + k, 'no unit uses it');
  });
  ok.push(Object.keys(moves).length + ' Coco says moves');
  const rv = (nest.parent || {}).review;
  if (!Array.isArray(rv) || !rv.length) err('parent', 'needs review ideas');
  else rv.forEach((t, k) => homeLine('parent review ' + (k + 1), t));

  HE_KEYS.forEach(k => { if (!HEB.test((nest.he || {})[k] || '')) err('he', 'missing line ' + k); });
  EN_KEYS.forEach(k => { if (!((nest.en || {})[k] || '').trim()) err('en', 'missing line ' + k); });
  Object.keys(nest.en || {}).forEach(k => { if (HEB.test(nest.en[k])) err('en.' + k, 'must be English'); });
  Object.keys(nest.he || {}).forEach(k => { if (/[A-Za-z]/.test(nest.he[k])) err('he.' + k, 'Latin letters in a Hebrew line (the voice reads them badly)'); });
  ok.push(Object.keys(nest.he || {}).length + ' Hebrew lines, ' + Object.keys(nest.en || {}).length + ' English lines');

  if (opts.files) {
    let missing = 0;
    pics.forEach(p => { if (!fs.existsSync(path.join(ROOT, 'docs/nest/pics', p + '.webp'))) { missing++; err('pics', 'missing docs/nest/pics/' + p + '.webp'); } });
    if (!missing) ok.push(pics.size + ' pictures on disk');
    const list = clips(nest);
    let gone = 0;
    list.forEach(c => {
      const p = path.join(ROOT, 'docs/nest/audio', c.name + '.mp3');
      if (!fs.existsSync(p) || fs.statSync(p).size < 1000) { gone++; if (gone <= 20) err('audio', 'missing or empty ' + c.name + '.mp3'); }
    });
    if (gone > 20) err('audio', (gone - 20) + ' more clips missing (python tools/nest_audio.py)');
    if (!gone) ok.push(list.length + ' clips on disk');
  }

  if (opts.index) {
    const p = path.join(ROOT, 'src/NestIndex.js');
    if (!fs.existsSync(p)) err('src/NestIndex.js', 'missing (node tools/nest-index.js)');
    else {
      const ctx = {};
      try {
        new vm.Script(fs.readFileSync(p, 'utf8') + '\n;this.NEST_UNITS = NEST_UNITS;').runInNewContext(ctx);
        const want = JSON.stringify(units.map(u => [u.id, u.title, u.review ? 1 : 0]));
        if (JSON.stringify(ctx.NEST_UNITS) !== want) err('src/NestIndex.js', 'out of date (node tools/nest-index.js)');
        else ok.push('src/NestIndex.js matches');
      } catch (e) { err('src/NestIndex.js', e.message); }
    }
  }
  if (opts.print) ok.forEach(s => console.log('ok ' + s));
  return errors;
}

module.exports = { check };
if (require.main === module) {
  const errors = check({ print: true });
  errors.forEach(e => console.log('FAIL ' + e));
  console.log(errors.length ? 'nest check: ' + errors.length + ' error(s)' : 'nest check: ok');
  process.exit(errors.length ? 1 : 0);
}
