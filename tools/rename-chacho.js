// One-off rename (2026-10-30): the parrot Coco becomes Chacho in everything a kid or a parent sees or hears.
// Only the name as a whole capitalised word ("Coco", "Coco's") and the Hebrew name change; code names (COCO, coco,
// chatCoco, cocoSrc), storage keys, file paths, the domain coco.coachkrispel.com and the Cloudflare names stay.
// The talks' keyword lists and test answers get the spoken name with the spellings the phone may hear.
//   node tools/rename-chacho.js         changes the files and prints every changed line
//   node tools/rename-chacho.js --dry   prints only
const fs = require('fs');
const path = require('path');
const APP = path.join(__dirname, '..');
const DRY = process.argv.includes('--dry');

const HE_OLD = 'קוקו', HE_NEW = 'צ׳אצ׳ו'; // geresh (U+05F3), not an apostrophe: safe inside '...' strings
const HEARD = 'chacho chaco chacha chocho chatcho';  // what speech recognition may write for "Chacho"

const roots = ['src', 'docs', 'worker/api', 'test', 'build-pages.js', 'tools/og_image.py', 'tools/voice-list.js',
  'tools/talk-audio-list.js', 'tools/nest-audio-list.js', 'tools/missions-audio-list.js', 'wrangler.jsonc'];
const skipDir = /(^|\/)(audio|say|pets|coco|items|pics|icons|fonts|node_modules)(\/|$)/;
const skipFile = /(^docs\/index\.html$)|\.(mp3|webp|png|jpg|flac|json|woff2?)$/;
const okExt = /\.(js|html|py|webmanifest|jsonc|css|md)$/;

function walk(p, out){
  const full = path.join(APP, p);
  if (!fs.existsSync(full)) return;
  if (fs.statSync(full).isDirectory()){
    if (skipDir.test(p)) return;
    for (const f of fs.readdirSync(full)) walk(p + '/' + f, out);
  } else if (okExt.test(p) && !skipFile.test(p)) out.push(p);
}

// Lines whose content is the colour of the parrot (he is red and blue in the art).
const FIX = [
  ['My feathers are green. What colour', 'My feathers are red and blue. What colour'],
  ['It is a green parrot! Who is it?', 'It is a red and blue parrot! Who is it?'],
  ['לחוג יש קמע: תוכי ירוק!', 'לחוג יש קמע: תוכי אדום וכחול!'],
];

const files = [];
roots.forEach(r => walk(r, files));
let total = 0, nFiles = 0;
for (const f of files){
  if (f === 'tools/rename-chacho.js') continue;
  const full = path.join(APP, f);
  const src = fs.readFileSync(full, 'utf8');
  const talk = /^docs\/talk\/.+\.js$/.test(f);
  const changed = [];
  const out = src.split('\n').map((raw, i) => {
    const cr = raw.endsWith('\r') ? '\r' : '';  // the working tree is CRLF
    const line = cr ? raw.slice(0, -1) : raw;
    let s = line;
    for (const [a, b] of FIX) s = s.split(a).join(b);
    s = s.replace(/\bCoco\b/g, 'Chacho');
    s = s.split(HE_OLD).join(HE_NEW);
    if (talk && /\b(k|x):\s*\[/.test(s)){
      // keyword lists: 'you coco' -> 'you chacho chaco ...'; test answers: "coco" -> "chacho"
      s = s.replace(/(\bk:\s*\[.*)$/, m => m.replace(/\bcoco\b/g, HEARD));
      s = s.replace(/(\bx:\s*\[.*)$/, m => m.replace(/\bcoco\b/g, 'chacho'));
    }
    if (s !== line) changed.push([i + 1, line.trim(), s.trim()]);
    return s + cr;
  }).join('\n');
  if (!changed.length) continue;
  nFiles++; total += changed.length;
  console.log('\n## ' + f + ' (' + changed.length + ')');
  for (const [n, a, b] of changed) console.log(n + ': ' + b.slice(0, 160));
  if (!DRY) fs.writeFileSync(full, out);
}
console.log('\n' + total + ' lines in ' + nFiles + ' files' + (DRY ? ' (dry run)' : ''));
