// Checks the mission content in docs/missions/*.js (specs/missions.md): shapes, answers, ids, catalog topics,
// lengths per level and the recordings. Exits with 1 when something is wrong.
//   node test/missions-check.js            -> report
//   require('./missions-check.js').load()  -> { missions, count } for tools/missions-index.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
const FILES = ['a1', 'a2', 'b1', 'bp', 'b2', 'c1'];
const LEVEL_OF = { a1: 'a1', a2: 'a2', b1: 'b1', bp: 'b1-b2', b2: 'b2', c1: 'c1' };
const SECTION_OF = { g: 'grammar', v: 'vocabulary', l: 'listening', r: 'reading', u: 'use-of-english', w: 'writing' };
// Words in a reading text and in an episode (all its lines), at most, per level.
const READ_MAX = { a1: 170, a2: 230, b1: 300, bp: 350, b2: 400, c1: 460 };
const LISTEN_MAX = { a1: 170, a2: 210, b1: 270, bp: 310, b2: 350, c1: 420 };
const KINDS = ['mc', 'tf', 'type', 'build', 'spot', 'teach', 'sort', 'spell', 'hear', 'find', 'gaps'];
const VOICES = /^(af|am|bf|bm)_[a-z]+$/;

// The app's own msQuestions / msCount, taken from Index.html so the count is always the one the app uses.
function appCount() {
  const html = fs.readFileSync(path.join(ROOT, 'src/Index.html'), 'utf8').split('\r\n').join('\n');
  const grab = name => { const i = html.indexOf('function ' + name + '('); if (i < 0) throw new Error(name + ' not found in Index.html'); return html.slice(i, html.indexOf('\n}\n', i) + 2); };
  return new vm.Script(grab('msQuestions') + grab('msCount') + '; ({ msQuestions, msCount })').runInNewContext({});
}

function load() {
  const window = {};
  FILES.forEach(f => {
    const p = path.join(ROOT, 'docs/missions', f + '.js');
    if (fs.existsSync(p)) new vm.Script(fs.readFileSync(p, 'utf8'), { filename: p }).runInNewContext({ window });
  });
  return { missions: window.EQ_MISSIONS || {}, count: appCount() };
}

function check() {
  const src = fs.readFileSync(path.join(ROOT, 'src/Catalog.js'), 'utf8');
  const CATALOG = new Function(src + ';return CATALOG;')();
  const { missions, count } = load();
  const errors = [], warns = [], seen = new Set();
  const words = s => String(s).split(/\s+/).filter(Boolean).length;
  let total = 0, questions = 0;
  Object.keys(missions).forEach(file => {
    if (FILES.indexOf(file) < 0) errors.push('unknown file key ' + file);
    (missions[file] || []).forEach(m => {
      const where = (m && m.id) || '?';
      const err = msg => errors.push(where + ': ' + msg), warn = msg => warns.push(where + ': ' + msg);
      total++;
      const mm = /^(a1|a2|b1|bp|b2|c1)([gvlruw])(\d\d)$/.exec(m.id || '');
      if (!mm) return err('bad id');
      if (mm[1] !== file) err('id is not in its level file');
      if (seen.has(m.id)) err('duplicate id'); seen.add(m.id);
      const level = LEVEL_OF[mm[1]], section = SECTION_OF[mm[2]], entry = ((CATALOG[section] || {})[level] || [])[Number(mm[3]) - 1];
      if (!entry) err('no catalog topic ' + section + ' ' + level + ' #' + mm[3]);
      else if (entry.u !== m.url) err('url is not catalog topic #' + mm[3] + ' (' + entry.u + ')');
      if (m.type !== section) err('type should be ' + section);
      if (!m.title || m.title.length > 40) err('title missing or too long');
      if (!m.dinner || !/\?$/.test(m.dinner)) err('dinner question missing (ends with ?)');
      const h = m.hook;
      if (!h || !h.q || !Array.isArray(h.o) || h.o.length < 2 || h.o.length > 4 || !(h.a >= 0 && h.a < h.o.length) || !h.reveal) err('hook needs q, 2-4 options, a and reveal');
      const L = m.learn || {};
      if (['rule', 'words', 'keys', 'intro'].indexOf(L.kind) < 0) err('learn.kind');
      if (L.kind === 'rule' && (!(L.lines || []).length || !(L.ex || []).length)) err('rule needs lines and ex');
      if (L.kind === 'words' && !((L.words || []).length >= 6 && L.words.every(w => w.w && w.d))) err('words: at least 6 with w and d');
      if (L.kind === 'words') L.words.forEach(w => { if (w.pic && !fs.existsSync(path.join(ROOT, 'docs/pics', w.pic.replace(/ /g, '-') + '.webp'))) err('no picture ' + w.pic); });
      if (L.predict && !(Array.isArray(L.predict.o) && L.predict.o.length >= 2)) err('predict needs options');
      if (section === 'grammar' && L.kind !== 'rule') err('grammar learns with a rule card');
      if (section === 'vocabulary' && L.kind !== 'words') err('vocabulary learns with word cards');
      if (section === 'listening' && !m.show) err('listening needs show');
      if (section === 'reading' && !m.story) err('reading needs story');
      if (m.show) {
        const S = m.show;
        if (!(Array.isArray(S.parts) && S.parts.length >= 2 && S.parts.length <= 4)) err('show needs 2-4 parts');
        const who = new Set();
        let n = 0;
        (S.parts || []).forEach((p, i) => {
          if (!(p.lines || []).length) err('part ' + (i + 1) + ' has no lines');
          (p.lines || []).forEach(l => { who.add(l[0]); n += words(l[1]); if (!l[1]) err('empty line'); });
          if (!(p.items || []).length) err('part ' + (i + 1) + ' has no questions');
          const mp3 = path.join(ROOT, 'docs/missions/audio', m.id + '-' + (i + 1) + '.mp3');
          if (!fs.existsSync(mp3)) warn('no recording ' + path.basename(mp3) + ' (the phone reads it aloud)');
        });
        who.forEach(w => { if (!S.voices || !VOICES.test(S.voices[w] || '')) err('speaker ' + w + ' needs a Kokoro voice'); if (!S.names || !S.names[w]) err('speaker ' + w + ' needs a name'); });
        if (n > LISTEN_MAX[file]) err('episode has ' + n + ' words (max ' + LISTEN_MAX[file] + ')');
        m._listenWords = n;
      }
      if (m.story) {
        const C = m.story.chunks || [];
        if (!(C.length >= 2 && C.length <= 4)) err('story needs 2-4 cards');
        const n = C.reduce((a, c) => a + words(c.text || ''), 0);
        if (n > READ_MAX[file]) err('story has ' + n + ' words (max ' + READ_MAX[file] + ')');
        C.forEach((c, i) => { if (!(c.items || []).length) err('card ' + (i + 1) + ' has no questions'); });
        m._readWords = n;
      }
      const qs = count.msQuestions(m), n = count.msCount(m);
      questions += n;
      if (n < 8 || n > 18) err(n + ' questions (8-18)');
      const items = [];
      ((m.show && m.show.parts) || []).forEach(p => (p.items || []).forEach(it => items.push([it, null])));
      ((m.story && m.story.chunks) || []).forEach((c, ci) => (c.items || []).forEach(it => items.push([it, c])));
      (m.steps || []).forEach(s => { if (!s.name) err('a step needs a name'); (s.items || []).forEach(it => items.push([it, null])); });
      (m.use || []).forEach(it => items.push([it, null]));
      items.forEach(([it, chunk], i) => {
        const e = msg => err('item ' + (i + 1) + ' (' + it.k + '): ' + msg);
        if (KINDS.indexOf(it.k) < 0) return e('unknown kind');
        if (it.k !== 'gaps' && !it.why) e('needs why');
        if (it.k === 'mc' || it.k === 'hear') {
          if (!(Array.isArray(it.o) && it.o.length >= 2 && it.o.length <= 4)) e('2-4 options');
          else if (new Set(it.o.map(x => String(x).toLowerCase())).size !== it.o.length) e('options repeat');
          if (!(it.a >= 0 && it.a < (it.o || []).length)) e('answer out of range');
          if (it.k === 'mc' && !it.q) e('needs q');
          if (it.k === 'hear' && !it.say) e('needs say');
        }
        if (it.k === 'tf' && (typeof it.a !== 'boolean' || !it.q)) e('needs q and a true/false');
        if (it.k === 'tf' && it.a === false && !it.fix) e('a wrong sentence needs fix');
        if (it.k === 'type' && !(Array.isArray(it.a) && it.a.length && it.q && /_{3,}/.test(it.q))) e('needs q with ___ and a list of answers');
        if (it.k === 'build' && !(it.s && it.s.split(' ').length >= 3 && it.s.split(' ').length <= 12)) e('needs s with 3-12 words');
        if ((it.k === 'spot' || it.k === 'teach') && !(it.s && (it.s.match(/\*/g) || []).length === 2 && it.s.split(' ').filter(t => t.indexOf('*') >= 0).length === 1 && typeof it.fix === 'string')) e('needs s with one *word* and fix');
        if (it.k === 'sort' && !(Array.isArray(it.g) && it.g.length >= 2 && it.g.length <= 3 && Array.isArray(it.w) && it.w.length >= 4 && it.w.length <= 8 && it.w.every(w => w[1] >= 0 && w[1] < it.g.length))) e('needs g (2-3) and w (4-8) [word, group]');
        if (it.k === 'spell' && !(/^[a-z]{3,12}$/.test(it.w || '') && it.clue)) e('needs a single lower-case word (3-12 letters) and clue');
        if (it.k === 'find') {
          if (!chunk) e('find belongs to a story card');
          else if (!String(chunk.text).split(/\s+/).some(w => w.toLowerCase().replace(/[^a-z'-]/g, '') === String(it.a).toLowerCase())) e('answer "' + it.a + '" is not a word of its card');
          if (!it.q) e('needs q');
        }
        if (it.k === 'gaps') {
          const marks = (String(it.t || '').match(/\[(\d+)\]/g) || []).map(x => Number(x.slice(1, -1)));
          if (!(Array.isArray(it.gaps) && it.gaps.length >= 2 && marks.length === it.gaps.length && marks.every((x, j) => x === j + 1))) e('t needs [1]..[n] for its gaps');
          (it.gaps || []).forEach((g, j) => { if (!(Array.isArray(g.o) && g.o.length >= 2 && g.a >= 0 && g.a < g.o.length && g.why)) e('gap ' + (j + 1) + ' needs o, a and why'); });
        }
        if (it.clip != null && !(m.show && m.show.parts[it.clip])) e('clip points to no part');
        if (it.k === 'mc' && it.q && !/_{3,}/.test(it.q) && !/[?…:]["”]?$/.test(it.q.trim())) warn('item ' + (i + 1) + ': q has no ___, and ends without ?, … or :');
      });
      // A rough time: 25 s a question, the card, the reading and the listening (twice), the hook.
      const est = 20 + 60 + n * 25 + (m._readWords || 0) / 2 + (m._listenWords || 0) / 2.2 * 1.6;
      if (est > 570) warn('about ' + Math.round(est / 60 * 10) / 10 + ' minutes');
      m._est = est;
    });
  });
  return { errors, warns, total, questions, missions };
}

if (require.main === module) {
  const r = check();
  r.warns.forEach(w => console.log('warn: ' + w));
  r.errors.forEach(e => console.log('FAIL: ' + e));
  const ests = [].concat(...Object.values(r.missions)).map(m => m._est).filter(Boolean);
  console.log((r.errors.length ? 'FAIL' : 'ok') + ': ' + r.total + ' missions, ' + r.questions + ' questions' +
    (ests.length ? ', about ' + (Math.round(ests.reduce((a, b) => a + b, 0) / ests.length / 6) / 10) + ' minutes on average (max ' + Math.round(Math.max(...ests) / 6) / 10 + ')' : ''));
  process.exit(r.errors.length ? 1 : 0);
}
module.exports = { load, check };
