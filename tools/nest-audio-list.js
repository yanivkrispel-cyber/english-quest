// Prints every clip Coco's Nest needs, as JSON, for tools/nest_audio.py: [{ name, text, voice }] with voice 'word'
// (Kokoro, slow), 'find' (Kokoro, a little faster), 'en' (Kokoro, Coco's lines) or 'he' (Hebrew, Hila). Names: w-<word id> (say), f-<word id> (find), p-<unit id> (the unit's phrase), m-<move id> (Coco says),
// en-<key>, he-<key> (specs/nest.md). test/nest-check.js uses the same list to check that every file exists.
//   node tools/nest-audio-list.js
const fs = require('fs'), path = require('path'), vm = require('vm');

function load() {
  const window = {}, p = path.join(__dirname, '..', 'docs', 'nest', 'nest.js');
  new vm.Script(fs.readFileSync(p, 'utf8'), { filename: p }).runInNewContext({ window });
  return window.EQ_NEST;
}

function clips(nest) {
  nest = nest || load();
  const out = [];
  nest.units.forEach(u => {
    (u.words || []).forEach(w => {
      out.push({ name: 'w-' + w.id, text: w.say, voice: 'word' });
      out.push({ name: 'f-' + w.id, text: w.find, voice: 'find' });
    });
    if (u.phrase) out.push({ name: 'p-' + u.id, text: u.phrase.en, voice: 'find' });
  });
  Object.keys(nest.moves || {}).forEach(k => out.push({ name: 'm-' + k, text: nest.moves[k].en, voice: 'find' }));
  Object.keys(nest.en || {}).forEach(k => out.push({ name: 'en-' + k, text: nest.en[k], voice: 'en' }));
  Object.keys(nest.he || {}).forEach(k => out.push({ name: 'he-' + k, text: nest.he[k], voice: 'he' }));
  return out;
}

module.exports = { load, clips };
if (require.main === module) process.stdout.write(JSON.stringify(clips()));
