// Prints every clip Coco's Nest needs, as JSON, for tools/nest_audio.py: [{ name, text, voice }] with voice 'word'
// (Kokoro, slow), 'find' (Kokoro, a little faster) or 'en' (Kokoro, Coco's lines). All of it is Coco: the kid hears no
// Hebrew (owner, 2026-10-27). Names (specs/nest.md): w-<word id> (say), f-<word id> (find), p-<unit id> (the unit's
// phrase), m-<move id> (Coco says), g-<word id> (give it to me), s-<word id> (its sound), d-<word id> (put it on),
// k-<page id> (a coloring page), o-<word id>-<n> (a kitchen order), c-<unit id>-<n> (a chant line), t-<unit id>-<n> (a story page), en-<key>.
// test/nest-check.js uses the same list to check that every file exists.
//   node tools/nest-audio-list.js
const fs = require('fs'), path = require('path'), vm = require('vm');

function load() {
  const window = {}, p = path.join(__dirname, '..', 'docs', 'nest', 'nest.js');
  new vm.Script(fs.readFileSync(p, 'utf8'), { filename: p }).runInNewContext({ window });
  return window.EQ_NEST;
}

// "Give me the ball!"; a color has no "the" ("Give me red!").
const giveText = w => 'Give me ' + (w.color ? '' : 'the ') + w.en.replace(/-/g, ' ') + '!';

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
  const words = {};
  nest.units.forEach(u => (u.words || []).forEach(w => { words[w.id] = w; }));
  (nest.give || []).forEach(id => { const w = words[id]; if (w) out.push({ name: 'g-' + id, text: giveText(w), voice: 'find' }); });
  Object.keys(nest.sounds || {}).forEach(id => out.push({ name: 's-' + id, text: nest.sounds[id], voice: 'find' }));
  Object.keys(nest.dress || {}).forEach(id => { const w = words[id]; if (w) out.push({ name: 'd-' + id, text: 'Put on the ' + w.en + '!', voice: 'find' }); });
  (nest.color || []).forEach(c => out.push({ name: 'k-' + c.id, text: c.say, voice: 'find' }));
  Object.keys(nest.orders || {}).forEach(id => nest.orders[id].forEach((s, i) => out.push({ name: 'o-' + id + '-' + (i + 1), text: s, voice: 'find' })));
  Object.keys(nest.chants || {}).forEach(u => nest.chants[u].forEach((l, i) => out.push({ name: 'c-' + u + '-' + i, text: l[0], voice: 'find' })));
  Object.keys(nest.stories || {}).forEach(u => nest.stories[u].pages.forEach((pg, i) => out.push({ name: 't-' + u + '-' + i, text: pg[0], voice: 'find' })));
  return out;
}

module.exports = { load, clips, giveText };
if (require.main === module) process.stdout.write(JSON.stringify(clips()));
