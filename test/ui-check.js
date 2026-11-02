// Checks src/Index.html for the traps of a one-file app:
// - HtmlService strips "//" inside inline scripts (it reads it as a comment), except in whole-line comments;
// - every top-level name lives in one global scope, so a second function with the same name silently
//   replaces the first (found in testing: a new tugQueue() broke Tug of War);
// - and the scripts must parse.
// - every icon-only button (.icon-btn) has a name for screen readers: aria-label or title (night review, finding 18).
//   node test/ui-check.js
const fs = require('fs'), vm = require('vm');
const html = fs.readFileSync('src/Index.html', 'utf8').split('\r\n').join('\n');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const errors = [], seen = {};
scripts.forEach((code, i) => {
  const where = 'script ' + (i + 1);
  try { new vm.Script(code); } catch (e) { errors.push(where + ': ' + e.message); }
  code.split('\n').forEach((line, n) => {
    if (!/^\s*\/\//.test(line) && line.includes('//')) errors.push(where + ' line ' + (n + 1) + ': "//" outside a whole-line comment');
  });
  for (const m of code.matchAll(/^(?:async\s+)?function\s+([A-Za-z0-9_$]+)\s*\(|^(?:const|let|var)\s+([A-Za-z0-9_$]+)\b/gm)) {
    const name = m[1] || m[2];
    if (seen[name]) errors.push(where + ': "' + name + '" is defined twice');
    seen[name] = true;
  }
});
// The cut icon fonts (tools/icon_subset.js) must hold every icon the app asks for.
{ const r = require('../tools/icon_subset.js').check(); r.bad.forEach(b => errors.push('icon font: ' + b + ' is missing (run node tools/icon_subset.js, then node build-pages.js)')); }
let iconBtns = 0;
for (const m of html.matchAll(/<button\b[^>]*\bclass="[^"]*\bicon-btn\b[^"]*"[^>]*>/g)) {
  iconBtns++;
  if (!/\baria-label=|\btitle=/.test(m[0])) errors.push('line ' + html.slice(0, m.index).split('\n').length + ': an icon-only button needs aria-label (or title): ' + m[0].slice(0, 90));
}
if (errors.length) { console.log(errors.join('\n')); process.exit(1); }
console.log('Index.html OK: ' + scripts.length + ' scripts, ' + Object.keys(seen).length + ' top-level names, no "//" trap, no duplicates, '
  + iconBtns + ' icon buttons all named');
