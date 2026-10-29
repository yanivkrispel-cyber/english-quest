// Copies Plus Jakarta Sans (SIL Open Font License) from Google Fonts into docs/fonts/plus-jakarta-sans/ (latin and
// latin-ext only), so the kids' app loads no font from another server (specs/store-readiness.md: no third party sees
// the kid's IP address). build-pages.js links the local copy. Run again only to update the font.
//   node tools/fonts_local.js
const fs = require('fs'), path = require('path');
const out = path.join(__dirname, '..', 'docs', 'fonts', 'plus-jakarta-sans');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
(async () => {
  const css = await (await fetch('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap', { headers: { 'User-Agent': UA } })).text();
  const blocks = css.split('/* ').slice(1).map(b => ({ subset: b.slice(0, b.indexOf(' */')), body: b.slice(b.indexOf('@font-face')) }));
  const keep = blocks.filter(b => b.subset === 'latin' || b.subset === 'latin-ext');
  fs.mkdirSync(out, { recursive: true });
  const files = {};
  for (const b of keep) {
    const url = b.body.match(/url\((https:[^)]+)\)/)[1];
    if (!files[url]) {
      files[url] = b.subset + '.woff2';
      fs.writeFileSync(path.join(out, files[url]), Buffer.from(await (await fetch(url)).arrayBuffer()));
    }
    b.local = '/* ' + b.subset + ' */\n' + b.body.replace(url, files[url]).trim();
  }
  fs.writeFileSync(path.join(out, 'style.css'), '/* Plus Jakarta Sans, SIL Open Font License 1.1 (tools/fonts_local.js). */\n' + keep.map(b => b.local).join('\n'));
  console.log(Object.values(files).join(', ') + ' and style.css (' + keep.length + ' faces)');
})();
