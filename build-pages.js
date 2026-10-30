// Builds docs/index.html (GitHub Pages) from src/Index.html, adding what HtmlService normally injects.
const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, 'src', 'Index.html'), 'utf8');
const head = [
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content">',
  '<title>English with Chacho</title>',
  '<meta name="theme-color" content="#ece6e0">',
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-title" content="Chacho">',
  '<link rel="manifest" href="manifest.webmanifest">',
  '<link rel="icon" type="image/png" href="icons/icon-192.png">',
  '<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">',
  // The link preview (WhatsApp and the like): absolute addresses, the picture from tools/og_image.py.
  '<meta name="description" content="10 דקות אנגלית ביום, בכיף ובמשחק: משימות, משחקים ושיחות בקול עם צ׳אצ׳ו התוכי.">',
  '<meta property="og:type" content="website">',
  '<meta property="og:site_name" content="English with Chacho">',
  '<meta property="og:title" content="English with Chacho">',
  '<meta property="og:description" content="10 דקות אנגלית ביום, בכיף ובמשחק: משימות, משחקים ושיחות בקול עם צ׳אצ׳ו התוכי.">',
  '<meta property="og:url" content="https://coco.coachkrispel.com/">',
  '<meta property="og:image" content="https://coco.coachkrispel.com/icons/share.jpg">',
  '<meta property="og:image:width" content="1200">',
  '<meta property="og:image:height" content="630">',
  '<meta property="og:image:alt" content="Chacho the parrot, English with Chacho">',
  '<meta name="twitter:card" content="summary_large_image">'
].join('\n');
let out = src.replace('<base target="_top">', head);
if (out === src) throw new Error('head marker not found');
// The icon fonts from our own site (docs/fonts/, kept on the phone by the service worker) instead of unpkg: no other
// server to reach before the first screen. The Apps Script copy (src/Index.html as it is) keeps unpkg.
['duotone', 'bold'].forEach(w => {
  const cdn = '<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/' + w + '/style.css">';
  const font = 'fonts/phosphor-2.1.1/' + w + '/Phosphor-' + w[0].toUpperCase() + w.slice(1) + '.woff2';
  if (!out.includes(cdn)) throw new Error('icon font link not found: ' + w);
  out = out.replace(cdn, '<link rel="preload" as="font" type="font/woff2" crossorigin href="' + font + '">\n' +
    '<link rel="stylesheet" href="fonts/phosphor-2.1.1/' + w + '/style.css">');
});
// The text font from our own site too (docs/fonts/plus-jakarta-sans/, tools/fonts_local.js): no Google server sees the kids.
const gf = ['<link rel="preconnect" href="https://fonts.googleapis.com">', '<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">'];
gf.forEach(l => { if (!out.includes(l)) throw new Error('font link not found: ' + l); });
out = out.replace(gf[0], '').replace(gf[1], '<link rel="preload" as="font" type="font/woff2" crossorigin href="fonts/plus-jakarta-sans/latin.woff2">\n' +
  '<link rel="stylesheet" href="fonts/plus-jakarta-sans/style.css">');
fs.mkdirSync(path.join(__dirname, 'docs'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'docs', 'index.html'), out);
console.log('docs/index.html written');
