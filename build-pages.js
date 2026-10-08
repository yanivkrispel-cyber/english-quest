// Builds docs/index.html (GitHub Pages) from src/Index.html, adding what HtmlService normally injects.
const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, 'src', 'Index.html'), 'utf8');
const icon = "data:image/svg+xml," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
  '<stop offset="0" stop-color="#8b8ffb"/><stop offset="1" stop-color="#3cc7b6"/></linearGradient></defs>' +
  '<rect width="64" height="64" rx="18" fill="url(#g)"/><text x="32" y="43" font-family="Arial,sans-serif" font-size="30" ' +
  'font-weight="700" fill="#fff" text-anchor="middle">EQ</text></svg>');
const head = [
  '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
  '<title>English Quest</title>',
  '<meta name="theme-color" content="#ece6e0">',
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-title" content="English Quest">',
  `<link rel="icon" href="${icon}">`
].join('\n');
const out = src.replace('<base target="_top">', head);
if (out === src) throw new Error('head marker not found');
fs.mkdirSync(path.join(__dirname, 'docs'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'docs', 'index.html'), out);
console.log('docs/index.html written');
