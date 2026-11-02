// Writes docs/nest/NEW_LINES.md: every Nest line that is written but not recorded yet (EQ_NEST.wait in docs/nest/nest.js),
// with its text, the file it becomes and where it plays, so the owner can record them later. test/nest-check.js fails when
// the file is out of date.
//   node tools/nest-new-lines.js           write docs/nest/NEW_LINES.md
//   require('./nest-new-lines.js').text()  the file's text (the check compares it)
const fs = require('fs'), path = require('path');
const { load } = require('./nest-audio-list.js');
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
  return out.join('\n') + '\n';
}

module.exports = { text, OUT };
if (require.main === module) {
  fs.writeFileSync(OUT, text());
  console.log('docs/nest/NEW_LINES.md written');
}
