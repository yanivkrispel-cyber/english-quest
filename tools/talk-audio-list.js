// Prints every clip Talk to Coco needs, as JSON, for tools/talk_audio.py: [{ name, text, level }].
// The order and names are test/talk-check.js's clips(); the bank lines are CHAT_BANK in src/Index.html.
const fs = require('fs'), path = require('path'), vm = require('vm');
const { load, clips } = require('../test/talk-check.js');
const html = fs.readFileSync(path.join(__dirname, '../src/Index.html'), 'utf8').split('\r\n').join('\n');
const i = html.indexOf('const CHAT_BANK = '), j = html.indexOf('\n};\n', i);
const bank = new vm.Script('(' + html.slice(i + 'const CHAT_BANK = '.length, j + 2) + ')').runInNewContext({});
const out = Object.keys(bank).map(k => ({ name: 'bank-' + k, text: bank[k], level: 'bank' }));
const { talk } = load();
Object.keys(talk).forEach(level => (talk[level] || []).forEach(s => clips(s).forEach(([name, text]) => out.push({ name, text, level }))));
process.stdout.write(JSON.stringify(out));
