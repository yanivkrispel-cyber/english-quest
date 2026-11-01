// Signing in (specs/security.md, the night review of 2026-11-01): kids' PINs, a family's parents' code, the admin's
// passphrase and the teacher's code, the lockouts that guard them, and the signed session a phone keeps instead of a code.
//
// Credentials a parents' call carries (the first argument, still called pin in the calls):
//   'g:<family id>:<code>'    a parent typed the family's code (an empty id is the default family, a link without ?g=)
//   'n:<family name>:<code>'  the same when the phone knows no family: the parent typed the family's name
//   'pt.<id>.<expiry>.<sig>'  a remembered phone (sessionToken): 30 days, signed, void once the family's code changes
//   anything else             the admin's passphrase (Script Property ADMIN_PASS); before it is set, the old AdminPIN
// A family's code opens that family only; a wrong one counts against that family and the caller's address, never others.

var LOCK = {
  name: { max: 8, sec: 900, msg: 'Too many attempts — try again in 15 minutes' },   // one kid, one family, the teacher
  admin: { max: 20, sec: 21600, msg: 'Too many attempts — try again in 6 hours' },  // the passphrase, from every address
  ip: { max: 50, sec: 3600 },          // wrong PINs and codes from one address, whatever names it tries (Settings.IpFailLimit)
  relay: { max: 500, sec: 3600 },      // calls relayed by Apps Script (old copies of the app) all come from Google: one bucket
  adminIp: { max: 5, sec: 3600 }       // wrong passphrases from one address
};
var SESSION = { days: 30 };
var CODE_AGAIN = 'Type the code again';
var LEGACY_PARENT = 'Service update: please open the app again';

// The caller's address, given by the Cloudflare Worker (worker/api/index.js): 'relay' for calls relayed by Apps Script, '' when
// unknown (Apps Script itself sees no address, so nothing is counted per address there). Memory only, never written.
var REQ_IP = '';
function cleanIp(ip) {
  ip = String(ip || '');
  return ip === 'relay' || /^[0-9A-Fa-f:.]{2,45}$/.test(ip) ? ip : '';
}

// ---------- Per-address limits (cache only: no row is written for an attempt) ----------

function ipRule() {
  if (REQ_IP === 'relay') return LOCK.relay;
  var n = Number(getSetting('IpFailLimit'));
  return n > 0 ? { max: n, sec: LOCK.ip.sec } : LOCK.ip;
}
function ipGuard(admin) {
  if (!REQ_IP) return;
  var c = CacheService.getScriptCache();
  if ((Number(c.get('IP:' + REQ_IP)) || 0) >= ipRule().max) throw new Error('Too many attempts — try again in an hour');
  if (admin && REQ_IP !== 'relay' && (Number(c.get('IPA:' + REQ_IP)) || 0) >= LOCK.adminIp.max) throw new Error('Too many attempts — try again in an hour');
}
function ipFail(admin) {
  if (!REQ_IP) return;
  var c = CacheService.getScriptCache(), k = 'IP:' + REQ_IP;
  c.put(k, String((Number(c.get(k)) || 0) + 1), ipRule().sec);
  if (admin && REQ_IP !== 'relay') { k = 'IPA:' + REQ_IP; c.put(k, String((Number(c.get(k)) || 0) + 1), LOCK.adminIp.sec); }
}

// Brute-force guard for one name (a kid, a family, the admin, the teacher), on top of the caller's address: rule.max wrong
// tries lock the name for rule.sec. unknown: the name does not exist, so nothing is kept about it (no lockout key, no
// audit line; finding 6: made-up names filled the free plan's daily writes). The answer is the same "Wrong PIN".
function checkPin(key, ok, rule, unknown) {
  rule = rule || LOCK.name;
  ipGuard(key === 'admin');
  var c = CacheService.getScriptCache(), k = 'F:' + key;
  var fails = unknown ? 0 : Number(c.get(k)) || 0;
  if (fails >= rule.max) throw new Error(rule.msg);
  if (!ok) {
    ipFail(key === 'admin');
    if (!unknown) {
      c.put(k, String(fails + 1), rule.sec);
      auditPin(key, fails + 1, rule);
    }
    throw new Error('Wrong PIN');
  }
  if (fails) c.remove(k);
}

// ---------- Comparing and making secrets ----------

// Constant time: both sides are hashed first, so neither the length nor the first different character shows in the time taken.
function sameSecret(a, b) {
  a = String(a == null ? '' : a).trim(); b = String(b == null ? '' : b).trim();
  if (!a || !b) return false;
  var x = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, a, Utilities.Charset.UTF_8);
  var y = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, b, Utilities.Charset.UTF_8);
  var d = 0;
  for (var i = 0; i < x.length; i++) d |= (x[i] ^ y[i]);
  return d === 0;
}

// 32 random bytes (0..255). getUuid is a random (version 4) UUID on both platforms (SecureRandom / crypto.randomUUID);
// two of them through SHA-256 give evenly spread bytes. Math.random is not used for anything secret.
function randomBytes() {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, Utilities.getUuid() + Utilities.getUuid(), Utilities.Charset.UTF_8)
    .map(function (b) { return b & 255; });
}
// A whole number from 0 to n - 1, without bias (n up to 2^32).
function randomInt(n) {
  var lim = Math.floor(4294967296 / n) * n;
  for (;;) {
    var b = randomBytes();
    for (var i = 0; i + 4 <= b.length; i += 4) {
      var x = b[i] * 16777216 + b[i + 1] * 65536 + b[i + 2] * 256 + b[i + 3];
      if (x < lim) return x % n;
    }
  }
}
function randomString(alphabet, len) {
  var out = '', n = alphabet.length, lim = Math.floor(256 / n) * n;
  while (out.length < len) {
    var b = randomBytes();
    for (var i = 0; i < b.length && out.length < len; i++) if (b[i] < lim) out += alphabet.charAt(b[i] % n);
  }
  return out;
}
function randomPin() { return String(1000 + randomInt(9000)); }                       // a kid's PIN: 4 digits
function newParentCode() { return String(100000 + randomInt(900000)); }               // a family's code: 6 digits, made here
function randomId() { return randomString('abcdefghijklmnopqrstuvwxyz0123456789', 6); }  // a family id
function newTeacherCode() { return randomString('abcdefghijkmnpqrstuvwxyz23456789', 12); }

// ---------- The admin's passphrase ----------
// Kept as 'v1$<rounds>$<salt>$<hash>' in the Script Property ADMIN_PASS (set with tools/admin-passphrase.js, never in
// the sheet). Typing is forgiving: case, spaces and dashes do not count.
function passNorm(p) { return String(p || '').toLowerCase().replace(/[\s\-]+/g, ''); }
function passHash(pass, salt, rounds) {
  var h = salt;
  for (var i = 0; i < rounds; i++) h = Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, h + '|' + pass, Utilities.Charset.UTF_8));
  return h;
}
function passStored() { return PropertiesService.getScriptProperties().getProperty('ADMIN_PASS') || ''; }
function passOk(secret, stored) {
  var p = String(stored).split('$');
  if (p.length !== 4 || p[0] !== 'v1') return false;
  return sameSecret(p[3], passHash(passNorm(secret), p[2], Math.min(20000, Number(p[1]) || 1)));
}
var PASS_FORMAT = /^v1\$\d{1,5}\$[A-Za-z0-9_\-]{16,64}\$[A-Za-z0-9_\-=]{40,64}$/;
// The owner's tool (POST /admin/passphrase on the Worker, with ADMIN_TOKEN): only the hash travels. From then on the old
// 4-digit AdminPIN opens nothing, and every remembered admin phone signs in again.
function adminPassSet(value) {
  value = String(value || '');
  if (!PASS_FORMAT.test(value)) throw new Error('Not a passphrase hash');
  PropertiesService.getScriptProperties().setProperty('ADMIN_PASS', value);
  CacheService.getScriptCache().remove('F:admin');
  audit('owner', 'tool', '', 'admin passphrase', 'set');
  return true;
}

// ---------- Who is calling: parentAccess ----------

// opts.typed: the call needs the code itself (deleting, downloading, the kids' codes and links, the Data card), not a
// remembered phone's session.
function parentAccess(cred, opts) {
  cred = String(cred == null ? '' : cred).trim();
  var a = /^pt\./.test(cred) ? sessionAccess(cred) : /^[gn]:/.test(cred) ? familyAccess(cred) : adminAccess(cred);
  if (opts && opts.typed && a.token) throw new Error(CODE_AGAIN);
  return a;
}

function familyAccess(cred) {
  var at = cred.lastIndexOf(':'), code = cred.slice(at + 1), what = cred.slice(2, at), g;
  if (cred.charAt(0) === 'g') g = what ? findGroup(what) : groups()[0];
  else {
    var name = what.replace(/^\s*משפחת\s+/, '').trim().toLowerCase();
    g = name ? groups().filter(function (x) { return String(x.Name).trim().toLowerCase() === name; })[0] : null;
  }
  var want = g ? String(g.ParentPIN || '').trim() : '';
  // A family without a code (the admin's own) or no family at all: the same answer, nothing kept.
  checkPin('parent:' + (want ? String(g.Id) : '-'), !!want && sameSecret(code, want), LOCK.name, !want);
  return { isAdmin: false, group: g, token: false };
}

function adminAccess(secret) {
  var stored = passStored();
  if (stored) {
    // A bare number is an old copy of the app with a parent's remembered code (it sent no family): it asks to update and is
    // never tried as the passphrase.
    if (/^\d{0,6}$/.test(secret)) { ipGuard(); var e = new Error(LEGACY_PARENT); e.update = true; throw e; }
    checkPin('admin', passOk(secret, stored), LOCK.admin);
    return { isAdmin: true, group: null, token: false };
  }
  // Until the passphrase is set: the old 4-digit AdminPIN. A wrong number may be an old copy's parent code: it counts
  // against the address only (old copies must not lock the owner out), and asks the old copy to update.
  ipGuard(true);
  if (sameSecret(secret, getSetting('AdminPIN'))) return { isAdmin: true, group: null, token: false };
  ipFail(true);
  if (/^\d{1,6}$/.test(secret)) { var u = new Error(LEGACY_PARENT); u.update = true; throw u; }
  throw new Error('Wrong PIN');
}

// ---------- Remembered phones: a signed session instead of the code ----------

function sessionSecret() {
  var props = PropertiesService.getScriptProperties(), s = props.getProperty('SessionSecret');
  if (!s) { s = Utilities.getUuid() + Utilities.getUuid(); props.setProperty('SessionSecret', s); }
  return s;
}
// What a session is tied to: the family's code, or the admin's passphrase (the AdminPIN before it). Changing it ends
// every session of that account.
function sessionBind(id) {
  if (id === 'admin') { var p = passStored(); return p ? 'pass:' + p : 'pin:' + String(getSetting('AdminPIN') || '').trim(); }
  var g = findGroup(id);
  return g && String(g.ParentPIN || '').trim() ? 'code:' + String(g.ParentPIN).trim() : '';
}
function sessionSign(id, exp, bind) {
  return Utilities.base64EncodeWebSafe(Utilities.computeHmacSha256Signature(id + '|' + exp + '|' + bind, sessionSecret())).replace(/=+$/, '').slice(0, 32);
}
function sessionToken(access) {
  var id = access.isAdmin ? 'admin' : String(access.group.Id), bind = sessionBind(id);
  if (!bind) return '';
  var exp = Date.now() + SESSION.days * 86400000;
  return 'pt.' + id + '.' + exp + '.' + sessionSign(id, exp, bind);
}
function sessionAccess(cred) {
  ipGuard();
  var p = cred.split('.'), sig = p.pop(), exp = Number(p.pop()), id = p.slice(1).join('.');
  var bind = id ? sessionBind(id) : '';
  if (!bind || !(exp > Date.now()) || !sameSecret(sig, sessionSign(id, exp, bind))) { ipFail(); throw new Error('Wrong PIN'); }
  return id === 'admin' ? { isAdmin: true, group: null, token: true } : { isAdmin: false, group: findGroup(id), token: true };
}

// The parents' view for whoever signed in: a session (token) sees no kid's PIN, no family code and no personal link.
function parentView(access) {
  return parentData(access.isAdmin ? groups() : [access.group], access.isAdmin, access.isAdmin ? 'admin' : String(access.group.Id), access.token);
}
