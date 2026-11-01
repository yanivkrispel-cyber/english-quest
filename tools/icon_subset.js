// Cuts the two Phosphor icon fonts (bold, duotone) down to the icons the app names (night review 2026-11-01, finding 20:
// about 280 KB less on every first open). The full fonts and their CSS (@phosphor-icons/web@2.1.1, MIT, docs/fonts/phosphor-2.1.1/)
// are copied into a cache folder; pyftsubset (pip install fonttools brotli) cuts them.
//   node tools/icon_subset.js           write the cut fonts, then node build-pages.js
//   node tools/icon_subset.js --check   check that every icon the app asks for is in the cut fonts (test/ui-check.js runs it)
// "Named" = every Phosphor name that appears as a word inside a quoted string or template in src/Index.html and
// docs/nest/*.js (icon('star'), both sides of icon(a ? 'x' : 'y'), the CLAY_ICONS list, the SEC table, 'ph-' classes...).
// That keeps more than is strictly used (a sentence with "play" keeps the play icon), never less, as long as names are
// written out whole: never build an icon name from pieces ('caret-' + dir).
// The cut fonts go to a new folder each time (docs/fonts/phosphor-2.1.1-<hash of the names>/, named in
// docs/fonts/phosphor.json, which build-pages.js reads): the service worker keeps font files forever under the same
// address, so a phone must never get a new cut under an old address. The full fonts stay in docs/fonts/phosphor-2.1.1/ for
// app pages cached before the cut. A new icon in the app: run this again (ui-check fails until then), then build-pages.
const fs = require('fs'), path = require('path'), os = require('os'), crypto = require('crypto'), { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '..'), FONTS = path.join(ROOT, 'docs', 'fonts'), MAP = path.join(FONTS, 'phosphor.json');
const WEIGHTS = { bold: 'Phosphor-Bold', duotone: 'Phosphor-Duotone' };
const CACHE = path.join(os.tmpdir(), 'phosphor-2.1.1-full');

function sources() {
  const nest = path.join(ROOT, 'docs', 'nest');
  const files = [path.join(ROOT, 'src', 'Index.html')].concat(fs.readdirSync(nest).filter(f => f.endsWith('.js')).map(f => path.join(nest, f)));
  return files.map(f => fs.readFileSync(f, 'utf8')).join('\n');
}
// Words inside quoted strings and templates.
function words(text) {
  const out = new Set();
  const re = /'([^'\n]*)'|"([^"\n]*)"|`([^`]*)`/g;
  let m;
  while ((m = re.exec(text))) {
    const s = m[1] ?? m[2] ?? m[3];
    (s.match(/[a-z][a-z0-9]*(?:-[a-z0-9]+)*/g) || []).forEach(w => { out.add(w); if (w.startsWith('ph-')) out.add(w.slice(3)); });
  }
  return out;
}
// The names the app asks for directly: the quoted names inside icon(...) and ph-<name> classes.
function iconCalls() {
  const text = sources(), names = new Set();
  (text.match(/icon\([^)]*\)/g) || []).forEach(c => (c.match(/'([a-z0-9-]+)'/g) || []).forEach(q => names.add(q.slice(1, -1))));
  (text.match(/\bph-[a-z0-9]+(?:-[a-z0-9]+)*/g) || []).forEach(c => names.add(c.slice(3)));
  return [...names].filter(n => !['bold', 'duotone', 'fill', 'light', 'thin', 'regular'].includes(n));
}
// The icons of a Phosphor style.css: name -> its rules.
function cssIcons(css, w) {
  const rules = {};
  const re = new RegExp('\\.ph-' + w + '\\.ph-([a-z0-9-]+):(before|after)\\s*\\{[^}]*\\}', 'g');
  let m;
  while ((m = re.exec(css))) (rules[m[1]] = rules[m[1]] || []).push(m[0]);
  return rules;
}
async function full(w) {
  fs.mkdirSync(CACHE, { recursive: true });
  const css = path.join(CACHE, w + '.css'), font = path.join(CACHE, WEIGHTS[w] + '.woff2');
  const local = path.join(FONTS, 'phosphor-2.1.1', w);
  if (!fs.existsSync(css)) fs.copyFileSync(path.join(local, 'style.css'), css);
  if (!fs.existsSync(font)) fs.copyFileSync(path.join(local, WEIGHTS[w] + '.woff2'), font);
  return { css: fs.readFileSync(css, 'utf8'), font };
}

function check() {
  const dir = path.join(FONTS, JSON.parse(fs.readFileSync(MAP, 'utf8')).dir), want = iconCalls(), bad = [];
  Object.keys(WEIGHTS).forEach(w => {
    const have = cssIcons(fs.readFileSync(path.join(dir, w, 'style.css'), 'utf8'), w);
    const all = cssIcons(fs.readFileSync(path.join(FONTS, 'phosphor-2.1.1', w, 'style.css'), 'utf8'), w);
    want.forEach(n => { if (all[n] && !have[n]) bad.push(w + ':' + n); });   // a name Phosphor does not have draws nothing anyway
  });
  return { bad, n: want.length };
}

if (require.main === module) (async () => {
  if (process.argv.includes('--check')) {
    const r = check();
    if (r.bad.length) { console.log('icon fonts: missing ' + r.bad.join(', ') + ' (run node tools/icon_subset.js)'); process.exit(1); }
    return console.log('icon fonts: all ' + r.n + ' icon names the app asks for are in the cut fonts');
  }
  const used = words(sources()), names = {}, src = {};
  for (const w of Object.keys(WEIGHTS)) {
    src[w] = await full(w);
    names[w] = Object.keys(cssIcons(src[w].css, w)).filter(n => used.has(n)).sort();
  }
  const dirName = 'phosphor-2.1.1-' + crypto.createHash('sha1').update(JSON.stringify(names)).digest('hex').slice(0, 8), OUT = path.join(FONTS, dirName);
  fs.readdirSync(FONTS).filter(d => /^phosphor-2\.1\.1-[0-9a-f]{8}$/.test(d) && d !== dirName).forEach(d => fs.rmSync(path.join(FONTS, d), { recursive: true }));
  for (const w of Object.keys(WEIGHTS)) {
    const css = src[w].css, rules = cssIcons(css, w), keep = names[w], codes = new Set();
    keep.forEach(n => rules[n].forEach(r => { const c = /content:\s*"\\([0-9a-f]+)"/.exec(r); if (c) codes.add('U+' + c[1]); }));
    fs.mkdirSync(path.join(OUT, w), { recursive: true });
    const head = css.slice(0, css.indexOf('.ph-' + w + '.ph-'));
    fs.writeFileSync(path.join(OUT, w, 'style.css'), '/* Phosphor Icons 2.1.1 (MIT, https://phosphoricons.com), cut to the ' + keep.length +
      ' icons the app names by tools/icon_subset.js */\n' + head + keep.map(n => rules[n].join('\n')).join('\n') + '\n');
    const dest = path.join(OUT, w, WEIGHTS[w] + '.woff2');
    execFileSync('pyftsubset', [src[w].font, '--unicodes=' + [...codes].join(','), '--flavor=woff2', '--output-file=' + dest, '--no-hinting', '--layout-features=*'], { stdio: 'inherit' });
    console.log(w + ': ' + keep.length + ' icons, ' + Math.round(fs.statSync(dest).size / 1024) + ' KB font, ' +
      Math.round(fs.statSync(path.join(OUT, w, 'style.css')).size / 1024) + ' KB css');
  }
  fs.writeFileSync(MAP, JSON.stringify({ dir: dirName, by: 'tools/icon_subset.js; build-pages.js links this folder' }, null, 2) + '\n');
  console.log('docs/fonts/' + dirName + ' (named in docs/fonts/phosphor.json)');
})().catch(e => { console.error(e); process.exit(1); });

module.exports = { check };
