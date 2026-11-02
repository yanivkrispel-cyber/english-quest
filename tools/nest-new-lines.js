// Writes docs/nest/NEW_LINES.md: every Nest line that is written but not recorded yet (EQ_NEST.wait in docs/nest/nest.js),
// with its text, the file it becomes and where it plays, so the owner can record them later. test/nest-check.js fails when
// the file is out of date.
//   node tools/nest-new-lines.js           write docs/nest/NEW_LINES.md
//   require('./nest-new-lines.js').text()  the file's text (the check compares it)
const fs = require('fs'), path = require('path');
const { load, clips, waiting } = require('./nest-audio-list.js');
const ROOT = path.join(__dirname, '..'), OUT = path.join(ROOT, 'docs', 'nest', 'NEW_LINES.md');

const cell = s => String(s == null ? '' : s).replace(/\|/g, '\\|').replace(/\n/g, ' ');

function text(nest) {
  nest = nest || load();
  const wait = nest.wait || {}, en = wait.en || {}, he = wait.he || {};
  const out = [
    '# New Nest lines to record',
    '',
    'Written by `node tools/nest-new-lines.js` from `EQ_NEST.wait` in `docs/nest/nest.js`. Do not edit by hand: change the',
    'content, then run the tool again (`node test/nest-check.js` fails when this file is out of date).',
    '',
    'Nothing here is recorded yet, so kids never meet it: a waiting game is left out of the lessons and the playground (the',
    "teacher's preview and the test pages play it with the phone's voice).",
    '',
    'After recording:',
    '',
    '1. English lines: Chacho\'s English voice (`specs/voice.md`: `python tools/voice.py` records only new lines; the files go to',
    '   `docs/nest/audio/`). Hebrew lines: the Hebrew guidance voice (Chatterbox Multilingual from niqqud text, as for package',
    '   B; the files go to `docs/nest/he/<key>.mp3`).',
    '2. Take the recorded keys (and a game whose lines are all recorded) out of `EQ_NEST.wait`, run this tool again and',
    '   `node test/nest-check.js`.',
    '3. Raise `NEST_V` in `src/Index.html`, then `node build-pages.js`.',
    '',
    '## Games waiting',
    '',
    (wait.games || []).length ? (wait.games || []).map(g => '- `' + g + '`').join('\n') : 'None.',
    '',
    "## Chacho's English lines",
    '',
  ];
  const enKeys = Object.keys(en);
  if (!enKeys.length) out.push('None.');
  else {
    out.push('| File | Text | Where it plays |', '|---|---|---|');
    enKeys.forEach(k => out.push('| `docs/nest/audio/en-' + k + '.mp3` | ' + cell((nest.en || {})[k]) + ' | ' + cell(en[k]) + ' |'));
  }
  out.push('', "## Chacho's Hebrew guidance", '');
  const heKeys = Object.keys(he);
  if (!heKeys.length) out.push('None.');
  else {
    out.push('| File | Text (Hebrew, how to play: never a translation) | Where it plays |', '|---|---|---|');
    heKeys.forEach(k => out.push('| `docs/nest/he/' + k + '.mp3` | ' + cell((nest.he || {})[k]) + ' | ' + cell(he[k]) + ' |'));
  }
  // Weeks 21 to 40 (EQ_NEST.next): the pictures to draw and the lines to record, unit by unit.
  const later = nest.next || [];
  out.push('', '## Weeks 21 to 40: units waiting for pictures and voice', '');
  if (!later.length) out.push('None.');
  else {
    out.push('These units (`EQ_NEST.next`) are written and checked, and no kid sees them yet. Per unit: the clay stickers to make',
      '(`tools/NEST-ART.md`, `python tools/nest_pics.py`; one Gemini chat per sheet) and the lines to record (English, Chacho\'s',
      'voice). When a unit has everything, `node test/nest-check.js` says it is ready: move it and its review from `next` to the',
      'end of `units`, run `node tools/nest-index.js` and this tool, and raise `NEST_V`. Optional after the move: its words in',
      '`give` (things to give), `sounds` (Who says that?) and `dress` (Get dressed).', '');
    const names = waiting(nest), all = clips(nest).filter(c => names.has(c.name)), byName = {};
    all.forEach(c => { byName[c.name] = c.text; });
    const where = n => n[0] === 'w' ? 'the word: Meet, a right answer, a tap on its picture'
      : n[0] === 'f' ? 'Find it: the question' : n[0] === 'p' ? "the unit's phrase (Meet from age 4, Say it)"
      : n[0] === 'c' ? 'the chant, line ' + (Number(n.split('-').pop()) + 1) : 'the story, page ' + (Number(n.split('-').pop()) + 1);
    later.forEach(u => {
      if (u.review) { out.push('### ' + u.id + ': review of ' + u.review.join(' and '), '', 'Nothing new to draw or record.', ''); return; }
      out.push('### ' + u.id + ': ' + u.title + ' (' + u.he + ')', '', 'Pictures:', '', '| File | Word | How to draw |', '|---|---|---|');
      const pics = [];
      u.words.forEach(w => { if (w.pic && !pics.some(p => p[0] === w.pic)) pics.push([w.pic, w.en + ' (' + w.he + ')', w.draw || 'one clay sticker of the ' + w.en]); });
      if (!pics.some(p => p[0] === u.icon)) pics.push([u.icon, 'the unit\'s icon', 'a clay sticker for "' + u.title + '"']);
      pics.forEach(p => out.push('| `docs/nest/pics/' + p[0] + '.webp` | ' + cell(p[1]) + ' | ' + cell(p[2]) + ' |'));
      out.push('', 'Lines:', '', '| File | Text | Where it plays |', '|---|---|---|');
      all.filter(c => c.name === 'p-' + u.id || c.name.startsWith('c-' + u.id + '-') || c.name.startsWith('t-' + u.id + '-') || u.words.some(w => c.name === 'w-' + w.id || c.name === 'f-' + w.id))
        .forEach(c => out.push('| `docs/nest/audio/' + c.name + '.mp3` | ' + cell(c.text) + ' | ' + where(c.name) + ' |'));
      out.push('');
    });
  }
  return out.join('\n').replace(/\n+$/, '') + '\n';
}

module.exports = { text, OUT };
if (require.main === module) {
  fs.writeFileSync(OUT, text());
  console.log('docs/nest/NEW_LINES.md written');
}
