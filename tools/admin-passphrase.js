// The admin's passphrase (src/Auth.js, night review 2026-11-01): the admin signs in with a long passphrase instead of
// the 4-digit AdminPIN, and the server keeps only a salted hash of it (Script Property ADMIN_PASS).
//
//   node tools/admin-passphrase.js new <file>           a new passphrase (7 words from the game words, about 64 bits)
//                                                        into <file>; refuses to overwrite one. Never printed.
//   node tools/admin-passphrase.js set <file> <server>  sets it on the server: POST <server>/admin/passphrase with the
//                                                        hash only, header X-Admin-Token from the env var COCO_ADMIN_TOKEN.
//                                                        <server> = the coco-api Worker, e.g. https://coco-api.<account>.workers.dev
//
// Keep <file> outside the repo (EnglishLessons-work/migration/). Setting it ends the old AdminPIN and every remembered
// admin phone. Typing is forgiving on the phone: case, spaces and dashes do not count (passNorm).
const fs = require('fs'), path = require('path'), crypto = require('crypto');

const ROUNDS = 1000;
const passNorm = p => String(p || '').toLowerCase().replace(/[\s-]+/g, '');
// The same as passHash in src/Auth.js: SHA-256 rounds over base64url (with padding, like Utilities.base64EncodeWebSafe).
function passHash(pass, salt, rounds) {
  let h = salt;
  for (let i = 0; i < rounds; i++) h = crypto.createHash('sha256').update(h + '|' + pass, 'utf8').digest('base64').replace(/\+/g, '-').replace(/\//g, '_');
  return h;
}
function passRecord(passphrase, rounds = ROUNDS) {
  const salt = crypto.randomBytes(18).toString('base64url');
  return 'v1$' + rounds + '$' + salt + '$' + passHash(passNorm(passphrase), salt, rounds);
}
module.exports = { passHash, passRecord, passNorm };

function words() {
  global.window = global.window || {};
  require(path.join(__dirname, '..', 'docs', 'games.js'));
  const set = new Set();
  JSON.stringify(global.window.EQ_GAMES).replace(/"([a-z]{4,8})"/g, (m, w) => { set.add(w); });
  return [...set].sort();
}

async function main() {
  const [cmd, file, server] = process.argv.slice(2);
  if (cmd === 'new' && file) {
    if (fs.existsSync(file)) throw new Error(file + ' exists: delete it first if you really want a new passphrase');
    const list = words();
    if (list.length < 500) throw new Error('word list too short: ' + list.length);
    const pick = Array.from({ length: 7 }, () => list[crypto.randomInt(list.length)]);
    fs.writeFileSync(file, pick.join(' ') + '\n', { mode: 0o600 });
    console.log('written: ' + file + ' (7 words from ' + list.length + ', about ' + Math.round(7 * Math.log2(list.length)) + ' bits)');
    return;
  }
  if (cmd === 'set' && file && server) {
    const token = process.env.COCO_ADMIN_TOKEN;
    if (!token) throw new Error('set COCO_ADMIN_TOKEN (the Worker\'s ADMIN_TOKEN) first');
    const pass = fs.readFileSync(file, 'utf8').trim();
    if (passNorm(pass).length < 20) throw new Error('the passphrase is too short');
    const r = await fetch(server.replace(/\/+$/, '') + '/admin/passphrase', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Admin-Token': token }, body: JSON.stringify({ value: passRecord(pass) }) });
    console.log(r.status + ' ' + await r.text());
    return;
  }
  console.log('usage: node tools/admin-passphrase.js new <file> | set <file> <server>');
}
if (require.main === module) main().catch(e => { console.error(e.message || e); process.exit(1); });
