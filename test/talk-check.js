// Checks the Talk to Chacho scripts in docs/talk/*.js (specs/talk.md): shapes, lengths per level, safety, and that every
// sample answer (x) lands on the branch its writer expects, with the app's own matcher taken from Index.html.
// Exits with 1 when something is wrong.
//   node test/talk-check.js                                   -> all levels
//   TALK_ONLY=a2 TALK_FILE=<path> node test/talk-check.js     -> one level from a staging file (parallel writers)
//   require('./talk-check.js').load()                         -> { talk, app } for tools/talk-audio-list.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
const LEVELS = ['a1', 'a2', 'b1', 'bp', 'b2', 'c1'];
const FILES = process.env.TALK_ONLY ? [process.env.TALK_ONLY] : LEVELS;
// Turns per talk, words in Chacho's question (c), in her replies (r, o, end) and in a tile (t), per level.
const TURNS = { a1: [3, 5], a2: [4, 5], b1: [4, 6], bp: [5, 6], b2: [5, 7], c1: [5, 7] };
const C_MAX = { a1: 16, a2: 20, b1: 26, bp: 28, b2: 32, c1: 36 };
const R_MAX = { a1: 12, a2: 14, b1: 18, bp: 20, b2: 22, c1: 24 };
const T_MAX = { a1: 8, a2: 10, b1: 14, bp: 16, b2: 18, c1: 22 };
const SCENES = 15;
// Chacho never asks for things that find a child (or for secrets and pictures).
const PRIVATE = /\b(your (full |last |real )?name|surname|address|where do you live|street|which school|what school|name of your school|phone number|email|password|how old are you|your age|send (me )?(a )?(photo|picture)|selfie|secret|meet (me|up)|instagram|tiktok|whatsapp|snapchat)\b/i;
const HARSH = /\b(kill(ed|ing|s)?|die[sd]?|dead|death|blood|guns?|knives|knife|sexy|kiss(es|ed|ing)?|boyfriend|girlfriend|stupid|idiot|dumb|shut up|hate you|diet|fat|skinny|ugly|weight|beer|wine|drunk|cigarettes?|church|mosque|synagogue|jesus|allah|god|wars?|army|soldiers?|politics?|political)\b/i;
const HEB = /[֐-׿]/;
const words = s => String(s || '').trim().split(/\s+/).filter(Boolean).length;

// The app's matcher, from Index.html, so the check is the app's behaviour exactly.
function appMatcher() {
  const html = fs.readFileSync(path.join(ROOT, 'src/Index.html'), 'utf8').split('\r\n').join('\n');
  const i = html.indexOf('const CHAT_NUM'), j = html.indexOf('\n}\n', html.indexOf('function chatMatch('));
  if (i < 0 || j < 0) throw new Error('talk matcher not found in Index.html');
  return new vm.Script(html.slice(i, j + 2) + '; ({ talkNorm: chatNorm, talkMatch: chatMatch, TALK_MIN: CHAT_MIN })').runInNewContext({});
}

function load() {
  const window = {};
  FILES.forEach(f => {
    const p = process.env.TALK_FILE || path.join(ROOT, 'docs/talk', f + '.js');
    if (fs.existsSync(p)) new vm.Script(fs.readFileSync(p, 'utf8'), { filename: p }).runInNewContext({ window });
  });
  return { talk: window.EQ_TALK || {}, app: appMatcher() };
}

function missionIds(level) {
  const window = {}, p = path.join(ROOT, 'docs/missions', level + '.js');
  if (fs.existsSync(p)) new vm.Script(fs.readFileSync(p, 'utf8')).runInNewContext({ window });
  return ((window.EQ_MISSIONS || {})[level] || []).map(m => m.id);
}

// The clips one talk needs, in the order the tools record them: [file name, text].
function clips(s) {
  const out = [];
  (s.turns || []).forEach((u, i) => {
    out.push([s.id + '-' + (i + 1) + 'c', u.c]);
    (u.a || []).forEach((b, j) => out.push([s.id + '-' + (i + 1) + 'r' + (j + 1), b.r]));
    out.push([s.id + '-' + (i + 1) + 'o', u.o]);
  });
  out.push([s.id + '-e', s.end]);
  return out;
}

function check() {
  const { talk, app } = load();
  const errors = [], warns = [], seen = new Set();
  let scripts = 0, turns = 0, lines = 0, samples = 0;
  Object.keys(talk).forEach(f => { if (LEVELS.indexOf(f) < 0) errors.push('unknown level key ' + f); });
  FILES.forEach(level => {
    const list = talk[level];
    if (!Array.isArray(list)) return errors.push(level + ': no EQ_TALK.' + level + ' array');
    const mids = missionIds(level), hasScript = new Set();
    let scenes = 0;
    list.forEach(s => {
      const where = (s && s.id) || '?';
      const err = m => errors.push(where + ': ' + m), warn = m => warns.push(where + ': ' + m);
      scripts++;
      const mm = /^(?:t((a1|a2|b1|bp|b2|c1)[gvlruw]\d\d)|s(a1|a2|b1|bp|b2|c1)(\d\d))$/.exec(s.id || '');
      if (!mm) return err('bad id (t<mission id> or s<level><nn>)');
      if ((mm[2] || mm[3]) !== level) err('id is not in its level file');
      if (seen.has(s.id)) err('duplicate id'); seen.add(s.id);
      if (mm[1]) { if (mids.indexOf(mm[1]) < 0) err('no mission ' + mm[1]); hasScript.add(mm[1]); } else scenes++;
      if (!s.title || s.title.length > 34) err('title missing or longer than 34');
      if (!HEB.test(s.he || '') || s.he.length > 90) err('he (the Hebrew line on the start card) missing or longer than 90');
      if (!s.end || /\?\s*$/.test(s.end) || words(s.end) > R_MAX[level] + 6) err('end missing, a question, or too long');
      const T = s.turns || [];
      if (T.length < TURNS[level][0] || T.length > TURNS[level][1]) err('turns: ' + T.length + ' (want ' + TURNS[level].join(' to ') + ')');
      const coco = [s.end];
      T.forEach((u, i) => {
        const at = 'turn ' + (i + 1) + ': ', e = m => err(at + m), w = m => warn(at + m);
        turns++;
        if (!u.c || !/\?["']?\s*$/.test(u.c)) e('c must end with a question');
        if (words(u.c) > C_MAX[level]) e('c has ' + words(u.c) + ' words (max ' + C_MAX[level] + ')');
        if (!HEB.test(u.he || '') || u.he.length > 120) e('he (the Hebrew hint) missing or longer than 120');
        if (!u.o || /\?\s*$/.test(u.o) || words(u.o) > R_MAX[level]) e('o missing, a question, or too long');
        coco.push(u.c, u.o);
        const A = u.a || [];
        if (!Array.isArray(A) || A.length > 4) e('a: at most 4 branches');
        A.forEach((b, j) => {
          const bt = 'branch ' + (j + 1) + ': ';
          if (!Array.isArray(b.k) || !b.k.length || b.k.some(g => typeof g !== 'string' || !/^[a-z0-9_]+( [a-z0-9_]+)*$/.test(g))) e(bt + 'k must be groups of lower-case keywords (a_b for two words)');
          if (b.n != null && !/^[a-z0-9_]+( [a-z0-9_]+)*$/.test(b.n)) e(bt + 'n must be lower-case keywords');
          if (!b.r || /\?\s*$/.test(b.r) || words(b.r) > R_MAX[level]) e(bt + 'r missing, a question, or too long');
          coco.push(b.r);
        });
        const tiles = u.t || [];
        if (tiles.length < 2 || tiles.length > 3) e('t: 2 or 3 tiles');
        const tileHits = new Set();
        tiles.forEach(t => {
          if (words(t) > T_MAX[level]) e('tile "' + t + '" too long (max ' + T_MAX[level] + ' words)');
          const r = app.talkMatch(u, t);
          if (A.length && r.b < 0) e('tile "' + t + '" fits no branch');
          if (!A.length && r.n < app.TALK_MIN[level]) e('tile "' + t + '" is shorter than ' + app.TALK_MIN[level] + ' words');
          tileHits.add(r.b);
        });
        if (A.length > 1 && tileHits.size < 2) w('all tiles go to one branch');
        const X = u.x || [];
        if (X.length < (A.length ? 4 : 2)) e('x: at least ' + (A.length ? 4 : 2) + ' sample answers');
        const hitB = new Set();
        X.forEach(p => {
          samples++;
          if (!Array.isArray(p) || typeof p[0] !== 'string' || !Number.isInteger(p[1])) return e('x entries are ["what a kid says", branch index or -1]');
          const r = app.talkMatch(u, p[0]);
          if (r.b !== p[1]) e('sample "' + p[0] + '" goes to ' + (r.b < 0 ? 'o' : 'branch ' + (r.b + 1)) + ', expected ' + (p[1] < 0 ? 'o' : 'branch ' + (p[1] + 1)));
          hitB.add(p[1]);
        });
        if (A.length) {
          A.forEach((b, j) => { if (!hitB.has(j)) e('no sample answer for branch ' + (j + 1)); });
          if (!hitB.has(-1)) e('no sample answer that fits no branch (-1)');
        }
        if (PRIVATE.test(u.c)) e('asks for something private: ' + u.c.match(PRIVATE)[0]);
      });
      coco.forEach(line => {
        if (HARSH.test(line || '')) warn('check the word "' + String(line).match(HARSH)[0] + '" in: ' + line);
        if (/[^\x20-\x7E’éñ—]/.test(line || '')) err('Chacho\'s lines must be plain English text: ' + line);
      });
      lines += clips(s).length;
    });
    const missing = mids.filter(id => !hasScript.has(id));
    if (missing.length) (process.env.TALK_PARTIAL ? warns : errors).push(level + ': ' + missing.length + ' missions without a talk: ' + missing.join(' '));
    if (scenes < SCENES) (process.env.TALK_PARTIAL ? warns : errors).push(level + ': ' + scenes + ' home scenes (want ' + SCENES + ')');
  });
  // Recordings: present once tools/talk_audio.py has run.
  const dir = path.join(ROOT, 'docs/talk/audio');
  if (fs.existsSync(dir)) {
    const have = new Set(fs.readdirSync(dir));
    let gone = 0;
    FILES.forEach(l => (talk[l] || []).forEach(s => clips(s).forEach(([n]) => { if (!have.has(n + '.mp3')) gone++; })));
    if (gone) warns.push(gone + ' clips not recorded yet (python tools/talk_audio.py)');
  }
  warns.forEach(w => console.log('warn: ' + w));
  errors.forEach(e => console.log('ERROR: ' + e));
  console.log(`${scripts} talks, ${turns} turns, ${lines} clips, ${samples} sample answers checked`);
  console.log(errors.length ? 'talk check: ' + errors.length + ' error(s)' : 'talk check: ok');
  return errors.length;
}

module.exports = { load, clips };
if (require.main === module) process.exit(check() ? 1 : 0);
