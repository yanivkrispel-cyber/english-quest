// Builds docs/index.html (GitHub Pages) from src/Index.html, adding what HtmlService normally injects.
const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, 'src', 'Index.html'), 'utf8');
const head = [
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content">',
  '<title>English with Coco</title>',
  '<meta name="theme-color" content="#ece6e0">',
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-title" content="Coco">',
  '<link rel="manifest" href="manifest.webmanifest">',
  '<link rel="icon" type="image/png" href="icons/icon-192.png">',
  '<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">',
  // The link preview (WhatsApp and the like): absolute addresses, the picture from tools/og_image.py.
  '<meta name="description" content="10 דקות אנגלית ביום, בכיף ובמשחק: משימות, משחקים ושיחות בקול עם קוקו התוכי.">',
  '<meta property="og:type" content="website">',
  '<meta property="og:site_name" content="English with Coco">',
  '<meta property="og:title" content="English with Coco">',
  '<meta property="og:description" content="10 דקות אנגלית ביום, בכיף ובמשחק: משימות, משחקים ושיחות בקול עם קוקו התוכי.">',
  '<meta property="og:url" content="https://coco.coachkrispel.com/">',
  '<meta property="og:image" content="https://coco.coachkrispel.com/icons/share.jpg">',
  '<meta property="og:image:width" content="1200">',
  '<meta property="og:image:height" content="630">',
  '<meta property="og:image:alt" content="Coco the parrot, English with Coco">',
  '<meta name="twitter:card" content="summary_large_image">'
].join('\n');
const out = src.replace('<base target="_top">', head);
if (out === src) throw new Error('head marker not found');
fs.mkdirSync(path.join(__dirname, 'docs'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'docs', 'index.html'), out);
console.log('docs/index.html written');
