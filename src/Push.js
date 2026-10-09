// Web Push (VAPID) for reminders on phones that installed the app.
// Apps Script has no ECDSA, so ES256 (P-256) signing is implemented here with BigInt.
// Pushes carry no payload (no encryption needed): the service worker asks apiPushMessage
// what to show. The VAPID key pair is generated once and kept in Script Properties.

var PUSH_TTL = 6 * 3600;

// ---------- P-256 / ES256 ----------

// Created on first use, so the rest of the app keeps working even if BigInt were unavailable.
var EC_MEMO = null;
function ec() { return EC_MEMO || (EC_MEMO = makeCurve()); }

function makeCurve() {
  var B = function (v) { return BigInt(v); };
  var p = B('0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff');
  var n = B('0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551');
  var G = [B('0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296'),
           B('0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5'), B(1)];
  var Z = B(0), ONE = B(1), TWO = B(2), THREE = B(3), FOUR = B(4), EIGHT = B(8);

  function mod(a, m) { var r = a % m; return r < Z ? r + m : r; }
  function inv(a, m) {
    var lm = ONE, hm = Z, low = mod(a, m), high = m;
    while (low > ONE) {
      var r = high / low;
      var nm = hm - lm * r, nw = high - low * r;
      hm = lm; high = low; lm = nm; low = nw;
    }
    return mod(lm, m);
  }
  // Jacobian coordinates, a = -3.
  function dbl(P) {
    if (P[2] === Z || P[1] === Z) return [Z, ONE, Z];
    var delta = mod(P[2] * P[2], p), gamma = mod(P[1] * P[1], p), beta = mod(P[0] * gamma, p);
    var alpha = mod(THREE * (P[0] - delta) * (P[0] + delta), p);
    var X = mod(alpha * alpha - EIGHT * beta, p);
    var Zn = mod((P[1] + P[2]) * (P[1] + P[2]) - gamma - delta, p);
    var Y = mod(alpha * (FOUR * beta - X) - EIGHT * gamma * gamma, p);
    return [X, Y, Zn];
  }
  function add(P, Q) {
    if (P[2] === Z) return Q;
    if (Q[2] === Z) return P;
    var z1z1 = mod(P[2] * P[2], p), z2z2 = mod(Q[2] * Q[2], p);
    var u1 = mod(P[0] * z2z2, p), u2 = mod(Q[0] * z1z1, p);
    var s1 = mod(P[1] * Q[2] * z2z2, p), s2 = mod(Q[1] * P[2] * z1z1, p);
    var h = mod(u2 - u1, p), r = mod(TWO * (s2 - s1), p);
    if (h === Z) return r === Z ? dbl(P) : [Z, ONE, Z];
    var i = mod(FOUR * h * h, p), j = mod(h * i, p), v = mod(u1 * i, p);
    var X = mod(r * r - j - TWO * v, p);
    var Y = mod(r * (v - X) - TWO * s1 * j, p);
    var Zn = mod(((P[2] + Q[2]) * (P[2] + Q[2]) - z1z1 - z2z2) * h, p);
    return [X, Y, Zn];
  }
  function mul(k, P) {
    var R = [Z, ONE, Z];
    var bits = k.toString(2);
    for (var i = 0; i < bits.length; i++) {
      R = dbl(R);
      if (bits[i] === '1') R = add(R, P);
    }
    return R;
  }
  function affine(P) {
    var zi = inv(P[2], p), zi2 = mod(zi * zi, p);
    return [mod(P[0] * zi2, p), mod(P[1] * zi2 * zi, p)];
  }
  function randomScalar() {
    var seed = Utilities.getUuid() + Utilities.getUuid() + Date.now() + Math.random();
    return mod(bytesToBig(sha256(seed)), n - ONE) + ONE;
  }
  return {
    n: n,
    keyPair: function () {
      var d = randomScalar();
      var Q = affine(mul(d, G));
      return { d: d, x: Q[0], y: Q[1] };
    },
    // Returns r||s (64 bytes) for SHA-256 of msg.
    sign: function (msg, d) {
      var z = bytesToBig(sha256(msg));
      for (;;) {
        var k = randomScalar();
        var r = mod(affine(mul(k, G))[0], n);
        if (r === Z) continue;
        var s = mod(inv(k, n) * (z + r * d), n);
        if (s === Z) continue;
        return bigToBytes(r, 32).concat(bigToBytes(s, 32));
      }
    }
  };
}

function sha256(str) { return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, str, Utilities.Charset.UTF_8); }
function bytesToBig(bytes) {
  var hex = bytes.map(function (b) { return ('0' + (b & 255).toString(16)).slice(-2); }).join('');
  return BigInt('0x' + (hex || '0'));
}
function bigToBytes(v, len) {
  var hex = v.toString(16);
  while (hex.length < len * 2) hex = '0' + hex;
  var out = [];
  for (var i = 0; i < len; i++) out.push(parseInt(hex.substr(i * 2, 2), 16));
  return out;
}
function b64url(bytesOrString) {
  var s = typeof bytesOrString === 'string'
    ? Utilities.base64EncodeWebSafe(bytesOrString, Utilities.Charset.UTF_8)
    : Utilities.base64EncodeWebSafe(bytesOrString.map(function (b) { return b > 127 ? b - 256 : b; }));
  return s.replace(/=+$/, '');
}

// ---------- VAPID ----------

var VAPID_MEMO = null;

function vapidKeys() {
  if (VAPID_MEMO) return VAPID_MEMO;
  var props = PropertiesService.getScriptProperties();
  var d = props.getProperty('VAPID_D');
  if (!d) {
    var lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      d = props.getProperty('VAPID_D');
      if (!d) {
        var kp = ec().keyPair();
        d = kp.d.toString(16);
        props.setProperties({ VAPID_D: d, VAPID_PUB: b64url([4].concat(bigToBytes(kp.x, 32), bigToBytes(kp.y, 32))) });
      }
    } finally {
      lock.releaseLock();
    }
  }
  VAPID_MEMO = { d: BigInt('0x' + d), pub: props.getProperty('VAPID_PUB') };
  return VAPID_MEMO;
}

function vapidPublicKey() {
  try { return vapidKeys().pub; } catch (e) { return null; }
}

// JWT per push-service origin, reused for 11 hours.
function vapidJwt(endpoint) {
  var aud = endpoint.match(/^https:\/\/[^\/]+/)[0];
  var cache = CacheService.getScriptCache(), key = 'J:' + aud;
  var hit = cache.get(key);
  if (hit) return hit;
  var sub = 'mailto:' + (Session.getEffectiveUser().getEmail() || 'english-quest@example.com');
  var input = b64url(JSON.stringify({ typ: 'JWT', alg: 'ES256' })) + '.' +
    b64url(JSON.stringify({ aud: aud, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: sub }));
  var jwt = input + '.' + b64url(ec().sign(input, vapidKeys().d));
  cache.put(key, jwt, 11 * 3600);
  return jwt;
}

// Sends empty pushes in parallel; returns the HTTP statuses (201 ok, 404/410 = subscription gone).
function sendPushes(endpoints) {
  var k = vapidKeys().pub;
  return UrlFetchApp.fetchAll(endpoints.map(function (e) {
    return {
      url: e, method: 'post', payload: '', muteHttpExceptions: true,
      headers: { TTL: String(PUSH_TTL), Urgency: 'normal', Authorization: 'vapid t=' + vapidJwt(e) + ', k=' + k }
    };
  })).map(function (r) { return r.getResponseCode(); });
}

// ---------- Subscriptions & messages ----------

function endpointKey(endpoint) { return 'PM:' + b64url(sha256(endpoint)).slice(0, 40); }

// Notifies a list of devices. Each message waits in the cache for the service worker to
// pick up via apiPushMessage. Dead subscriptions are removed from sheetName.
function deliver(endpoints, message, sheetName) {
  if (!endpoints.length) return { sent: 0, devices: 0 };
  var msgs = {};
  endpoints.forEach(function (e) { msgs[endpointKey(e)] = JSON.stringify(message); });
  CacheService.getScriptCache().putAll(msgs, PUSH_TTL);
  var codes = sendPushes(endpoints), sent = 0, gone = [];
  codes.forEach(function (code, i) {
    if (code === 404 || code === 410) gone.push(endpoints[i]);
    else if (code >= 200 && code < 300) sent++;
    else console.warn('push ' + code + ' to ' + endpoints[i].slice(0, 40));
  });
  if (gone.length) removeSubscriptions(gone, sheetName);
  return { sent: sent, devices: endpoints.length - gone.length };
}

function pushToKid(name, message) {
  return deliver(readTable('Push').filter(function (s) { return s.Girl === name; }).map(function (s) { return s.Endpoint; }), message, 'Push');
}

function removeSubscriptions(endpoints, sheetName) {
  sheetName = sheetName || 'Push';
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sh = sheet(sheetName);
    var values = sh.getDataRange().getValues();
    var col = values[0].indexOf('Endpoint');
    for (var i = values.length - 1; i >= 1; i--) {
      if (endpoints.indexOf(String(values[i][col])) >= 0) sh.deleteRow(i + 1);
    }
    invalidate(sheetName);
  } finally {
    lock.releaseLock();
  }
}

// ---------- Parent notifications ----------
// ParentPush rows: Who = 'admin' (every group) or a group id; Instant = 'yes' / 'no'.

function parentDevices(groupId) {
  return readTable('ParentPush').filter(function (r) { return r.Who === 'admin' || r.Who === groupId; });
}

// Parents' phones that want an update as soon as this kid does something.
function instantDevices(kid) {
  return parentDevices(groupOf(kid)).filter(function (r) { return r.Instant !== 'no'; }).map(function (r) { return r.Endpoint; });
}

// Instant update to the kid's parents after she logs a task.
function notifyCompletion(kid, entry) {
  var endpoints = instantDevices(kid);
  if (!endpoints.length) return;
  var msg = entry.Section === 'level'
    ? { title: kid.Name + ' finished the level test', body: 'Level ' + (LEVEL_LABEL[entry.Level] || '?') + ' · +' + entry.Points + ' pts' }
    : { title: kid.Name + ' finished ' + SECTIONS[entry.Section].label,
        body: entry.Title + ' — ' + entry.Correct + '/' + entry.Total + ' (' + entry.Percent + '%) · +' + entry.Points + ' pts' +
          (entry.Date !== entry.DoneOn ? ' · catch-up' : '') };
  deliver(endpoints, msg, 'ParentPush');
}

// Instant update after a gate challenge: the new level, or how close she got.
function notifyGate(kid, row) {
  var endpoints = instantDevices(kid);
  if (!endpoints.length) return;
  var to = LEVEL_LABEL[row.To];
  var msg = row.Passed === 'yes'
    ? { title: kid.Name + ' reached level ' + to + '!',
        body: 'Passed the gate challenge ' + row.Correct + '/' + row.Total + ' · World ' + (LEVELS.indexOf(row.To) + 1) + ', ' + WORLDS[row.To] + ', is open' }
    : { title: kid.Name + ' tried the gate to level ' + to,
        body: row.Correct + '/' + row.Total + ' (' + gateNeed() + ' to pass) · the next try opens in ' + JOURNEY.waitDays + ' days' };
  deliver(endpoints, msg, 'ParentPush');
}

// Time-driven (21:00): who practiced today, per parent.
function parentSummary() {
  var t = today();
  var done = {}, played = {}, gated = {};
  readTable('Log').forEach(function (l) { if (l.Date === t) done[l.Girl] = l; });
  readTable('Games').forEach(function (g) { if (g.Date === t) played[g.Girl] = (played[g.Girl] || 0) + 1; });
  readTable('Gates').forEach(function (g) { if (g.Date === t) gated[g.Girl] = g; });
  var byWho = {};
  readTable('ParentPush').forEach(function (r) { (byWho[r.Who] = byWho[r.Who] || []).push(r.Endpoint); });
  Object.keys(byWho).forEach(function (who) {
    var kids = who === 'admin' ? readTable('Girls') : kidsIn(who);
    if (!kids.length) return;
    var n = kids.filter(function (k) { return done[k.Name]; }).length;
    var body = kids.map(function (k) {
      var l = done[k.Name], n = played[k.Name], g = gated[k.Name];
      var games = n ? ' +' + n + (n === 1 ? ' game' : ' games') : '';
      var gate = g ? (g.Passed === 'yes' ? 'reached ' + LEVEL_LABEL[g.To] + '!' : 'gate ' + g.Correct + '/' + g.Total) : '';
      if (!l) return k.Name + ' ' + (gate || '—') + games;
      return k.Name + ' ✓' + (l.Section === 'level' ? ' level test' : (l.Percent !== '' ? ' ' + l.Percent + '%' : '')) + games + (gate ? ' · ' + gate : '');
    }).join(' · ');
    try { deliver(byWho[who], { title: 'Today: ' + n + '/' + kids.length + ' practiced', body: body }, 'ParentPush'); } catch (e) { console.error(e); }
  });
}

function parentWho(pin) {
  var a = parentAccess(pin);
  return a.isAdmin ? 'admin' : String(a.group.Id);
}

function validEndpoint(endpoint) {
  endpoint = String(endpoint || '');
  if (!/^https:\/\/[^\s]+$/.test(endpoint) || endpoint.length > 1000) throw new Error('Invalid subscription');
  return endpoint;
}

function findParentDevice(who, endpoint) {
  return readTableUncached('ParentPush').filter(function (r) { return r.Who === who && r.Endpoint === endpoint; })[0];
}

// Sets one column of the ParentPush row(s) matching endpoint.
function setParentDevice(endpoint, field, value) {
  var sh = sheet('ParentPush');
  var values = sh.getDataRange().getValues();
  var ec = values[0].indexOf('Endpoint'), fc = values[0].indexOf(field);
  for (var i = 1; i < values.length; i++) {
    if (String(values[i][ec]) === endpoint) sh.getRange(i + 1, fc + 1).setValue(value);
  }
  invalidate('ParentPush');
}

function apiParentPushSubscribe(pin, endpoint, agent, welcome) {
  ensureSetup();
  var who = parentWho(pin);
  endpoint = validEndpoint(endpoint);
  var instant = 'yes';
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var row = readTableUncached('ParentPush').filter(function (r) { return r.Endpoint === endpoint; })[0];
    if (row) {
      instant = row.Instant === 'no' ? 'no' : 'yes';
      if (row.Who !== who) setParentDevice(endpoint, 'Who', who);
    } else {
      appendRow('ParentPush', { Who: who, Endpoint: endpoint, Created: today(), Agent: String(agent || '').slice(0, 120), Instant: 'yes' });
    }
  } finally {
    lock.releaseLock();
  }
  var res = { instant: instant === 'yes' };
  if (welcome) {
    res.sent = deliver([endpoint], {
      title: 'Parent notifications are on',
      body: 'Daily summary at ' + (Number(getSetting('ParentSummaryHour')) || 21) + ':00' + (res.instant ? ', plus an update whenever a task is done.' : '.')
    }, 'ParentPush').sent;
  }
  return res;
}

function apiParentPushPrefs(pin, endpoint, instant) {
  ensureSetup();
  var who = parentWho(pin);
  endpoint = validEndpoint(endpoint);
  if (!findParentDevice(who, endpoint)) throw new Error('Turn on notifications first');
  setParentDevice(endpoint, 'Instant', instant ? 'yes' : 'no');
  return { instant: !!instant };
}

function apiParentPushTest(pin, endpoint) {
  ensureSetup();
  var who = parentWho(pin);
  endpoint = validEndpoint(endpoint);
  if (!findParentDevice(who, endpoint)) throw new Error('Turn on notifications first');
  return deliver([endpoint], { title: 'Test notification', body: 'Parent notifications are working.' }, 'ParentPush');
}

function reminderMessage(kid, lastCall) {
  var t = today();
  var a = todayTask(kid);
  var logs = readTable('Log').filter(function (l) { return l.Girl === kid.Name; });
  var label = SECTIONS[a.section].label;
  if (lastCall) {
    return { title: 'Last call, ' + kid.Name, body: '10 minutes before the day ends — ' + label + ': ' + a.title };
  }
  var s = streak(logs, t);
  return {
    title: kid.Name + ', time for English',
    body: 'Today: ' + label + ' — ' + a.title + (s >= 2 ? ' · keep your ' + s + '-day streak going' : '')
  };
}

// Time-driven: push to kids who haven't practiced today.
function pushReminders(lastCall) {
  var t = today();
  var logs = readTable('Log');
  var withDevices = {};
  readTable('Push').forEach(function (s) { withDevices[s.Girl] = true; });
  readTable('Girls').forEach(function (k) {
    if (!withDevices[k.Name]) return;
    if (logs.some(function (l) { return l.Girl === k.Name && l.Date === t; })) return;
    try { pushToKid(k.Name, reminderMessage(k, lastCall)); } catch (e) { console.error(e); }
  });
}

function lastCallReminder() { pushReminders(true); }

// ---------- API ----------

function apiPushSubscribe(name, pin, endpoint, agent, welcome) {
  var kid = auth(name, pin);
  endpoint = validEndpoint(endpoint);
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    // One row per device; a shared device moves to whoever subscribed last.
    var sh = sheet('Push');
    var values = sh.getDataRange().getValues();
    var ec = values[0].indexOf('Endpoint'), gc = values[0].indexOf('Girl'), found = false;
    for (var i = 1; i < values.length; i++) {
      if (String(values[i][ec]) !== endpoint) continue;
      found = true;
      if (values[i][gc] !== kid.Name) sh.getRange(i + 1, gc + 1).setValue(kid.Name);
    }
    if (found) invalidate('Push');
    else appendRow('Push', { Girl: kid.Name, Endpoint: endpoint, Created: today(), Agent: String(agent || '').slice(0, 120) });
  } finally {
    lock.releaseLock();
  }
  var res = { devices: readTable('Push').filter(function (s) { return s.Girl === kid.Name; }).length };
  if (welcome) {
    res.sent = pushToKid(kid.Name, {
      title: 'Reminders are on',
      body: 'We\'ll remind you at ' + (Number(getSetting('ReminderHour')) || 17) + ':00 on days you haven\'t practiced yet.'
    }).sent;
  }
  return res;
}

// Called by the service worker when a push arrives.
function apiPushMessage(endpoint) {
  var hit = CacheService.getScriptCache().get(endpointKey(String(endpoint || '')));
  return hit ? JSON.parse(hit) : { title: 'English Quest', body: 'Your 10 minutes of English are waiting.' };
}

function apiAdminTestPush(pin, name) {
  ensureSetup();
  if (!parentAccess(pin).isAdmin) throw new Error('Only the admin can send test reminders');
  var kid = findGirl(name);
  if (!kid) throw new Error('Unknown kid');
  return pushToKid(kid.Name, { title: 'Test reminder', body: 'Hi ' + kid.Name + ', notifications are working.' });
}

// Run once from the Apps Script editor to grant the "connect to an external service"
// permission that sending notifications needs (web requests can't show the consent screen).
function authorizeNotifications() {
  UrlFetchApp.fetch('https://www.google.com', { muteHttpExceptions: true });
  return 'Notifications are authorized';
}
