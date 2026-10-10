// Checks src/Index.html for the traps of a one-file app:
// - HtmlService strips "//" inside inline scripts (it reads it as a comment), except in whole-line comments;
// - every top-level name lives in one global scope, so a second function with the same name silently
//   replaces the first (found in testing: a new tugQueue() broke Tug of War);
// - and the scripts must parse.
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
if (errors.length) { console.log(errors.join('\n')); process.exit(1); }
console.log('Index.html OK: ' + scripts.length + ' scripts, ' + Object.keys(seen).length + ' top-level names, no "//" trap, no duplicates');
