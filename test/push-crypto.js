// Verifies the hand-written ES256 in src/Push.js against Node's crypto.
const fs = require('fs'), vm = require('vm'), crypto = require('crypto');
const toSigned = buf => Array.from(buf).map(b => (b > 127 ? b - 256 : b));
const ctx = {
  BigInt, Math, JSON, Date, Number, String, Array, parseInt, console,
  Utilities: {
    DigestAlgorithm: { SHA_256: 'sha256' }, Charset: { UTF_8: 'utf8' },
    computeDigest: (alg, str) => toSigned(crypto.createHash('sha256').update(str, 'utf8').digest()),
    base64EncodeWebSafe: (v) => (typeof v === 'string' ? Buffer.from(v, 'utf8') : Buffer.from(v.map(b => b & 255))).toString('base64').replace(/\+/g, '-').replace(/\//g, '_'),
    getUuid: () => crypto.randomUUID()
  }
};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(__dirname + '/../src/Push.js', 'utf8'), ctx);

const b64u = v => Buffer.from(v).toString('base64url');
let ok = 0;
const t0 = Date.now();
for (let i = 0; i < 5; i++) {
  const kp = vm.runInContext('ec().keyPair()', ctx);
  const hex = v => v.toString(16).padStart(64, '0');
  const jwk = { kty: 'EC', crv: 'P-256', x: b64u(Buffer.from(hex(kp.x), 'hex')), y: b64u(Buffer.from(hex(kp.y), 'hex')), d: b64u(Buffer.from(hex(kp.d), 'hex')) };
  const key = crypto.createPrivateKey({ key: jwk, format: 'jwk' });   // throws if the point is not on the curve
  const msg = 'header.payload-' + i;
  ctx.__d = kp.d;
  const sig = Buffer.from(vm.runInContext(`ec().sign(${JSON.stringify(msg)}, __d)`, ctx));
  const valid = crypto.verify('sha256', Buffer.from(msg), { key: crypto.createPublicKey(key), dsaEncoding: 'ieee-p1363' }, sig);
  if (valid) ok++;
  // and the reverse: Node signs, check our public point matches Node's derivation
  const pub = crypto.createPublicKey(key).export({ format: 'jwk' });
  if (pub.x !== jwk.x || pub.y !== jwk.y) throw new Error('public key mismatch');
}
console.log(`ES256 signatures verified by node crypto: ${ok}/5 (${Date.now() - t0} ms total)`);
console.log('b64url of public key length:', vm.runInContext('b64url([4].concat(bigToBytes(BigInt(1),32), bigToBytes(BigInt(2),32))).length', ctx), '(expect 87)');
