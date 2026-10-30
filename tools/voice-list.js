// Prints every line the app speaks, as JSON for tools/voice.py (Chacho's voice, Chatterbox):
// [{ id, text, kind, level, ref }]. id is the file it becomes under docs/ (without .mp3):
//   talk/audio/<clip>         Talk with Chacho (tools/talk-audio-list.js)
//   nest/audio/<clip>         the Nest (tools/nest-audio-list.js)
//   missions/audio/<ep>-<part>#<k>   one line of a radio show; the lines of a part are joined into <ep>-<part>.mp3
//   say/<key>                 a word or sentence the games and missions read aloud (sayWord, sayIt, Read to me);
//                             key = sayKey(text), the same function as in Index.html
// ref is the voice: 'coco' or the Kokoro voice a radio character had, cloned from a clip of it.
const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const APP = path.join(__dirname, '..');
const run = f => JSON.parse(execFileSync('node', [path.join(__dirname, f)], { cwd: APP, maxBuffer: 1 << 28 }).toString('utf8'));

// FNV-1a, 32 bits, of the lower-cased text with its spaces collapsed (sayKey in Index.html must stay the same).
function sayKey(text){
  const s = String(text).trim().replace(/\s+/g, ' ').toLowerCase();
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(36);
}

function main(){
  const out = [];
  run('talk-audio-list.js').forEach(c => out.push({ id: 'talk/audio/' + c.name, text: c.text, kind: 'talk', level: c.level, ref: 'coco' }));
  run('nest-audio-list.js').forEach(c => out.push({ id: 'nest/audio/' + c.name, text: c.text, kind: 'nest-' + c.voice, level: 'nest', ref: 'coco' }));
  run('missions-audio-list.js').forEach(ep => ep.parts.forEach((lines, p) => lines.forEach(([who, text], k) =>
    out.push({ id: 'missions/audio/' + ep.id + '-' + (p + 1) + '#' + k, text, kind: 'radio', level: ep.level, ref: ep.voices[who] }))));

  // Words and sentences read aloud: the game bank, then the missions (Hear it, word cards, examples, stories).
  const say = new Map();
  const add = (text, kind, level) => {
    text = String(text || '').replace(/\*/g, '').replace(/\s+/g, ' ').trim();
    if (!/[a-z]/i.test(text)) return;
    const key = sayKey(text);
    if (say.has(key)) { if (say.get(key).text.toLowerCase() !== text.toLowerCase()) throw new Error('sayKey clash: ' + text); return; }
    const k = kind || (text.split(' ').length <= 2 ? 'word' : 'listen');
    say.set(key, { id: 'say/' + key, text, kind: k, level: level || '', ref: 'coco' });
  };
  global.window = {};
  eval(fs.readFileSync(path.join(APP, 'docs', 'games.js'), 'utf8'));
  const G = window.EQ_GAMES;
  Object.values(G.pics || {}).forEach(ws => ws.forEach(w => add(w)));
  Object.entries(G.match || {}).forEach(([lv, list]) => list.forEach(x => add(x[0], null, lv)));
  Object.entries(G.listen || {}).forEach(([lv, list]) => list.forEach(x => add(x[0], null, lv)));
  Object.entries(G.build || {}).forEach(([lv, list]) => list.forEach(x => add(x, null, lv)));
  Object.entries(G.spot || {}).forEach(([lv, list]) => list.forEach(x => add(String(x[0]).replace(/\*(.*?)\*/, x[1] || ''), null, lv)));
  Object.entries(G.talk || {}).forEach(([lv, topics]) => Object.values(topics).forEach(list => list.forEach(x => add(x[0], null, lv))));

  const { missions } = require(path.join(APP, 'test', 'missions-check.js')).load();
  Object.entries(missions).forEach(([lv, list]) => list.forEach(m => {
    const walk = x => {
      if (Array.isArray(x)) return x.forEach(walk);
      if (!x || typeof x !== 'object') return;
      if (typeof x.say === 'string') add(x.say, null, lv);
      if (typeof x.w === 'string') add(x.w, null, lv);
      if (Array.isArray(x.ex)) x.ex.forEach(e => typeof e === 'string' && add(e, null, lv));
      Object.values(x).forEach(walk);
    };
    walk(m);
    if (m.story) m.story.chunks.forEach(c => add(c.text.split(/\s+/).join(' '), 'story', lv));
  }));
  say.forEach(v => out.push(v));
  return out;
}

if (require.main === module) process.stdout.write(JSON.stringify(main()));
module.exports = { sayKey, main };
