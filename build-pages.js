// Builds docs/index.html (GitHub Pages) from src/Index.html, adding what HtmlService normally injects.
const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, 'src', 'Index.html'), 'utf8');
const head = [
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
  '<title>English Quest</title>',
  '<meta name="theme-color" content="#ece6e0">',
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-title" content="English Quest">',
  '<link rel="manifest" href="manifest.webmanifest">',
  '<link rel="icon" type="image/png" href="icons/icon-192.png">',
  '<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">'
].join('\n');
const out = src.replace('<base target="_top">', head);
if (out === src) throw new Error('head marker not found');
fs.mkdirSync(path.join(__dirname, 'docs'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'docs', 'index.html'), out);
console.log('docs/index.html written');
