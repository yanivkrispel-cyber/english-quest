// Play together: Word Duel (live) and Challenge (one plays now, the other later). Spec: specs/play-together.md
// Only functions and literal constants here: files load in one global scope, so nothing at the top
// level may use another file's names.

var DUEL = {
  items: 7, maxMs: 180000, countdownMs: 6000, inviteMin: 5, waitMin: 5, challengeHours: 24,
  winXp: 5, togetherXp: 10, rightXp: 2, onlineMs: 90000, cacheSec: 1800, leftGraceMs: 20000
};
var DUEL_MODES = ['live', 'challenge'];
var DUEL_REACTIONS = 6;
var DUEL_LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
var DUEL_DONE = ['done', 'declined', 'expired', 'cancelled'];

// ---------- API ----------

function apiDuelHome(name, pin) {
  return duelHome(duelKid(name, pin));
}

// Invite any kid in the app (live or challenge), or open a code invite (guest = '').
function apiDuelInvite(name, pin, guestName, mode) {
  var kid = duelKid(name, pin);
  if (DUEL_MODES.indexOf(mode) < 0) throw new Error('Choose a game');
  var guest = null;
  if (guestName) {
    guest = findGirl(guestName);
    if (!guest) throw new Error('Unknown player');
    if (guest.Name === kid.Name) throw new Error('Invite someone else');
    if (!duelCanMeet(kid, guest)) throw new Error('Playing with other groups is switched off for this group');
    if (pendingLevelTest(guest)) throw new Error(guest.Name + ' takes the level test first');
  }
  var now = Date.now(), d, joined = false;
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var rows = duelRows();
    // Rematch tapped on both phones: join the invite that is already waiting for me.
    var mine = guest && mode === 'live' ? rows.filter(function (r) {
      return r.State === 'invited' && r.Host === guest.Name && r.Guest === kid.Name && Number(r.Expires) > now;
    }).pop() : null;
    if (mine) {
      d = duelStart(mine, kid, now);
      joined = true;
    } else {
      d = {
        Id: duelCode(rows), Created: new Date(now).toISOString(), Date: today(), Mode: mode,
        State: mode === 'live' ? 'invited' : 'solo', Host: kid.Name, Guest: guest ? guest.Name : '',
        HostLevel: kid.Level, GuestLevel: guest ? guest.Level : '', Seed: String(1 + Math.floor(Math.random() * 2147483646)),
        Start: '', Expires: String(now + (mode === 'live' ? DUEL.inviteMin * 60000 : DUEL.challengeHours * 3600000)), Reply: ''
      };
      duelSave(d, true);
    }
  } finally {
    lock.releaseLock();
  }
  if (!joined && guest && mode === 'live') {
    try { pushToKid(guest.Name, duelMessage('invite', d)); } catch (e) { console.error(e); }
  }
  return duelView(d, kid.Name);
}

// The guest joins a live invite (the start is set a few seconds ahead so both phones count down
// together), or opens a challenge meant for her (a code challenge becomes hers).
function apiDuelJoin(name, pin, code) {
  var kid = duelKid(name, pin), now = Date.now(), d;
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    d = duelFresh(code);
    if (d.Host === kid.Name) return duelView(d, kid.Name);
    if (d.Guest && d.Guest !== kid.Name) throw new Error('This duel is for ' + d.Guest);
    if (!d.Guest) duelCheckFriends(d, kid);
    duelExpire(d, now);
    // A guest who said 'Not now' can still change her mind while the invite is open.
    if (d.State === 'invited' || (d.State === 'declined' && Number(d.Expires) > now)) d = duelStart(d, kid, now);
    else if (d.State === 'challenge' && !d.Guest) { d.Guest = kid.Name; d.GuestLevel = kid.Level; duelSave(d); }
    else if (d.State === 'solo') throw new Error(d.Host + ' is still playing. Try again in a minute.');
    else if (d.State === 'cancelled') throw new Error('This invite was cancelled');
    else if (d.State === 'declined') throw new Error('This invite has expired');
    else if (d.State === 'expired') throw new Error('This invite has expired');
  } finally {
    lock.releaseLock();
  }
  return duelView(d, kid.Name);
}

function apiDuelReply(name, pin, code, reply) {
  var kid = duelKid(name, pin), d;
  if (reply !== 'wait' && reply !== 'no') throw new Error('Unknown reply');
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    d = duelFresh(code);
    if (d.Guest !== kid.Name) throw new Error('This invite is not for you');
    duelExpire(d, Date.now());
    if (d.State !== 'invited') throw new Error('This invite is no longer open');
    d.Reply = reply;
    if (reply === 'no') d.State = 'declined';
    else d.Expires = String(Math.max(Number(d.Expires), Date.now()) + DUEL.waitMin * 60000);
    duelSave(d);
  } finally {
    lock.releaseLock();
  }
  return duelView(d, kid.Name);
}

function apiDuelCancel(name, pin, code) {
  var kid = duelKid(name, pin), d;
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    d = duelFresh(code);
    if (d.Host !== kid.Name) throw new Error('Only ' + d.Host + ' can cancel this invite');
    if (d.State === 'invited' || d.State === 'solo') { d.State = 'cancelled'; d.Ended = new Date().toISOString(); duelSave(d); }
  } finally {
    lock.releaseLock();
  }
  return duelView(d, kid.Name);
}

// Nobody answered the live invite (or the guest said "Not now"): the host plays it now as a challenge.
function apiDuelSolo(name, pin, code) {
  var kid = duelKid(name, pin), d;
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    d = duelFresh(code);
    if (d.Host !== kid.Name) throw new Error('Only ' + d.Host + ' can do this');
    duelExpire(d, Date.now());
    if (['invited', 'declined', 'expired'].indexOf(d.State) < 0) throw new Error('This duel already started');
    d.Mode = 'challenge'; d.State = 'solo'; d.Reply = '';
    d.Expires = String(Date.now() + DUEL.challengeHours * 3600000);
    duelSave(d);
  } finally {
    lock.releaseLock();
  }
  return duelView(d, kid.Name);
}

// The hot path (about every 2 s during a duel): no sheet access unless the duel times out.
function apiDuelPoll(name, pin, code, progress) {
  var kid = duelKid(name, pin), now = Date.now();
  var d = duelGet(code);
  var role = duelRole(d, kid.Name);
  if (!role) throw new Error('This duel is not yours');
  if (progress && typeof progress === 'object') {
    var p = {
      n: duelInt(progress.n, 0, DUEL.items), s: duelInt(progress.s, 0, DUEL.items), ms: duelInt(progress.ms, 0, DUEL.maxMs + 60000),
      f: !!progress.f, r: progress.r >= 0 && progress.r < DUEL_REACTIONS ? duelInt(progress.r, 0, DUEL_REACTIONS - 1) : -1,
      rt: duelInt(progress.rt, 0, 1e15)
    };
    CacheService.getScriptCache().put('DP:' + d.Id + ':' + kid.Name, JSON.stringify(p), DUEL.cacheSec);
  }
  if ((d.State === 'playing' && now > Number(d.Start) + DUEL.maxMs + DUEL.leftGraceMs) ||
      ((d.State === 'invited' || d.State === 'solo' || d.State === 'challenge') && now > Number(d.Expires))) {
    var lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      d = duelFresh(code);
      if (d.State === 'playing') duelTimeout(d, now); else duelExpire(d, now);
    } finally {
      lock.releaseLock();
    }
  }
  var other = role === 'host' ? d.Guest : d.Host;
  var out = duelView(d, kid.Name);
  out.them = other ? duelProgress(d.Id, other) : null;
  out.themOnline = other ? duelOnline([other])[other] : false;
  return out;
}

// One player's final result. The second finisher closes the duel; in a challenge the host
// finishing first opens it for the guest (who gets a notification).
function apiDuelFinish(name, pin, code, result) {
  var kid = duelKid(name, pin), now = Date.now(), d, closed = false, opened = false, xp = 0;
  var r = duelResult(result);
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    d = duelFresh(code);
    var role = duelRole(d, kid.Name);
    if (!role) throw new Error('This duel is not yours');
    var P = role === 'host' ? 'Host' : 'Guest';
    if (d[P + 'Score'] !== '' && d[P + 'Score'] !== undefined && d[P + 'Score'] !== null) throw new Error('Your result is already saved');
    var ok = (d.State === 'playing') || (d.State === 'solo' && role === 'host') || (d.State === 'challenge' && role === 'guest');
    if (!ok) throw new Error(d.State === 'expired' ? 'This duel has expired' : 'This duel is not open');
    d[P + 'Score'] = r.correct; d[P + 'Ms'] = r.ms; d[P + 'Track'] = r.track;
    if (d.State === 'solo') {
      d.State = 'challenge';
      d.Expires = String(now + DUEL.challengeHours * 3600000);
      opened = true;
    } else if (duelHas(d, 'Host') && duelHas(d, 'Guest')) {
      duelClose(d, now);
      closed = true;
    }
    duelSave(d);
    xp = duelXp(kid, d, role, r);
    var p = duelProgress(d.Id, kid.Name) || {};
    p.n = r.total; p.s = r.correct; p.ms = r.ms; p.f = true;
    CacheService.getScriptCache().put('DP:' + d.Id + ':' + kid.Name, JSON.stringify(p), DUEL.cacheSec);
  } finally {
    lock.releaseLock();
  }
  try {
    if (opened && d.Guest) pushToKid(d.Guest, duelMessage('challenge', d));
    if (closed && d.Mode === 'challenge') pushToKid(d.Host, duelMessage('played', d));
  } catch (e) { console.error(e); }
  var out = duelView(d, kid.Name);
  out.xp = xp;
  out.dash = buildDashboard(findGirl(kid.Name));
  return out;
}

// The stronger player explained one of her partner's misses: one Helper star (once per item).
function apiDuelHelped(name, pin, code, itemId) {
  var kid = duelKid(name, pin), d;
  itemId = cleanIds([itemId], 1)[0];
  if (!itemId) throw new Error('Unknown question');
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    d = duelFresh(code);
    if (!duelRole(d, kid.Name)) throw new Error('This duel is not yours');
    if (d.State !== 'done') throw new Error('Finish the duel first');
    var list = String(d.Helped || '').split(' ').filter(String), entry = kid.Name + ':' + itemId;
    if (list.indexOf(entry) < 0 && list.length < 20) { list.push(entry); d.Helped = list.join(' '); duelSave(d); }
  } finally {
    lock.releaseLock();
  }
  var out = duelView(d, kid.Name);
  out.helper = duelHelperStars(kid.Name);
  return out;
}

// ---------- Rules ----------

function duelKid(name, pin) {
  var kid = auth(name, pin);
  if (pendingLevelTest(kid)) throw new Error('Take the level test first.');
  return kid;
}

function duelStart(d, kid, now) {
  d.Guest = kid.Name; d.GuestLevel = kid.Level;
  d.State = 'playing'; d.Start = String(now + DUEL.countdownMs); d.Reply = '';
  duelSave(d);
  return d;
}

// Kids from different groups can play together unless either group switched it off (Groups.Friends = no).
function duelGroupOpen(id) {
  var g = findGroup(id);
  return !(g && String(g.Friends || '').trim().toLowerCase() === 'no');
}
function duelCanMeet(a, b) {
  return groupOf(a) === groupOf(b) || (duelGroupOpen(groupOf(a)) && duelGroupOpen(groupOf(b)));
}
function duelCheckFriends(d, kid) {
  var host = findGirl(d.Host);
  if (host && !duelCanMeet(host, kid)) throw new Error('Playing with other groups is switched off for this group');
}

// Everyone this kid may play with: her group first, then the other groups (unless switched off).
function duelPlayers(kid) {
  var mine = groupOf(kid);
  return readTable('Girls').filter(function (k) { return k.Name !== kid.Name && duelCanMeet(kid, k); })
    .sort(function (a, b) { return (groupOf(a) === mine ? 0 : 1) - (groupOf(b) === mine ? 0 : 1); });
}

// Lazily closes invites and challenges whose time is up (called inside the lock).
function duelExpire(d, now) {
  if ((d.State === 'invited' || d.State === 'solo' || d.State === 'challenge') && now > Number(d.Expires)) {
    d.State = 'expired';
    d.Ended = new Date(now).toISOString();
    duelSave(d);
  }
}

// A live duel past its time: whoever finished wins; nobody finished -> expired.
function duelTimeout(d, now) {
  var h = duelHas(d, 'Host'), g = duelHas(d, 'Guest');
  if (h && g) duelClose(d, now);
  else if (h || g) { d.State = 'done'; d.Winner = h ? d.Host : d.Guest; d.Ended = new Date(now).toISOString(); duelBonus(d); }
  else { d.State = 'expired'; d.Ended = new Date(now).toISOString(); }
  duelSave(d);
}

function duelClose(d, now) {
  var hs = Number(d.HostScore), gs = Number(d.GuestScore), hm = Number(d.HostMs), gm = Number(d.GuestMs);
  d.Winner = hs > gs ? d.Host : gs > hs ? d.Guest : hm < gm ? d.Host : gm < hm ? d.Guest : 'draw';
  d.State = 'done';
  d.Ended = new Date(now).toISOString();
  duelBonus(d);
}

// The winner's +5 is a separate zero-question Games row (each player's row is written when she
// finishes, before the winner is known). It still counts inside the daily cap.
function duelBonus(d) {
  if (!d.Winner || d.Winner === 'draw') return;
  var w = findGirl(d.Winner);
  if (!w) return;
  duelAddXp(w, DUEL.winXp, 0, 0, '', w.Level);
}

function duelXp(kid, d, role, r) {
  var t = today();
  var together = !readTableUncached('Games').some(function (g) { return g.Girl === kid.Name && g.Date === t && g.Game === 'duel' && Number(g.Total) > 0; });
  var xp = r.correct * DUEL.rightXp + (together ? DUEL.togetherXp : 0);
  var got = duelAddXp(kid, xp, r.correct, r.total, r.missed.join(' '), role === 'host' ? d.HostLevel : d.GuestLevel);
  updateReview(kid.Name, r.missed, r.right, t);
  return got;
}

// One Games row (Game = duel), capped like the mini-games. Returns the XP actually given.
function duelAddXp(kid, xp, correct, total, missed, level) {
  var t = today();
  var used = readTableUncached('Games').filter(function (g) { return g.Girl === kid.Name && g.Date === t; })
    .reduce(function (a, g) { return a + (Number(g.XP) || 0); }, 0);
  xp = Math.max(0, Math.min(xp, GAME_XP.dayCap - used));
  if (!total && !xp) return 0;
  appendRow('Games', { Timestamp: new Date(), Girl: kid.Name, Date: t, Game: 'duel', Level: LEVELS.indexOf(level) >= 0 ? level : kid.Level,
    Correct: correct, Total: total, XP: xp, Missed: missed });
  return xp;
}

function duelResult(res) {
  res = res || {};
  var total = duelInt(res.total, 0, DUEL.items), correct = duelInt(res.correct, 0, total);
  if (total !== DUEL.items) throw new Error('Invalid result');
  var track = String(res.track || '').split(',').filter(String);
  if (track.length !== total || !track.every(function (x) { return /^[01-]:\d{1,6}$/.test(x); })) throw new Error('Invalid result');
  if (track.filter(function (x) { return x[0] === '1'; }).length !== correct) throw new Error('Invalid result');
  return { correct: correct, total: total, ms: duelInt(res.ms, 0, DUEL.maxMs + 60000), track: track.join(','),
    missed: cleanIds(res.missed, DUEL.items), right: cleanIds(res.right, DUEL.items) };
}

// ---------- Views ----------

function duelHome(kid) {
  var now = Date.now(), t = today(), name = kid.Name;
  var rows = readTable('Duels');
  var mates = duelPlayers(kid), mine = groupOf(kid);
  var online = duelOnline(mates.map(function (k) { return k.Name; }));
  var live = function (r) { return Number(r.Expires) > now; };
  var withMe = rows.filter(function (r) { return r.Host === name || r.Guest === name; });
  return {
    friends: mates.map(function (k) {
      var pet = petInfo(k);
      var g = findGroup(groupOf(k));
      return { name: k.Name, color: k.Color, level: LEVEL_LABEL[k.Level] || k.Level, ready: !pendingLevelTest(k), online: !!online[k.Name],
        group: groupOf(k) === mine ? '' : (g ? String(g.Name) : ''),
        pet: pet ? { id: pet.id, stage: pet.stage } : null };
    }),
    incoming: withMe.filter(function (r) { return r.State === 'invited' && r.Guest === name && live(r); }).map(function (r) { return duelView(r, name); }),
    challenges: withMe.filter(function (r) { return r.State === 'challenge' && r.Guest === name && live(r); }).map(function (r) { return duelView(r, name); }),
    waiting: withMe.filter(function (r) { return r.Host === name && (r.State === 'challenge' || r.State === 'invited') && live(r); }).map(function (r) { return duelView(r, name); }),
    results: withMe.filter(function (r) { return r.State === 'done' && r.Date >= addDays(t, -7); }).slice(-5).reverse().map(function (r) { return duelView(r, name); }),
    helper: duelHelperStars(name),
    now: now
  };
}

// What a player may see of a duel. Tracks are shown once both played (or to their owner), so a
// challenge can't be peeked at before playing it... except the host's track, which is the ghost.
function duelView(d, me) {
  var role = duelRole(d, me), host = findGirl(d.Host), guest = d.Guest ? findGirl(d.Guest) : null;
  var face = function (k) { var p = k ? petInfo(k) : null; return p ? { id: p.id, stage: p.stage } : null; };
  var done = d.State === 'done';
  var v = {
    code: d.Id, mode: d.Mode, state: d.State, role: role, seed: Number(d.Seed), items: DUEL.items, maxMs: DUEL.maxMs,
    start: d.Start ? Number(d.Start) : null, expires: Number(d.Expires) || null, reply: d.Reply || '', now: Date.now(), date: d.Date,
    host: { name: d.Host, level: d.HostLevel, label: LEVEL_LABEL[d.HostLevel] || '', color: host ? host.Color : '', pet: face(host),
      score: duelHas(d, 'Host') ? Number(d.HostScore) : null, ms: duelHas(d, 'Host') ? Number(d.HostMs) : null },
    guest: d.Guest ? { name: d.Guest, level: d.GuestLevel, label: LEVEL_LABEL[d.GuestLevel] || '', color: guest ? guest.Color : '', pet: face(guest),
      score: duelHas(d, 'Guest') ? Number(d.GuestScore) : null, ms: duelHas(d, 'Guest') ? Number(d.GuestMs) : null } : null,
    winner: d.Winner || '', helped: String(d.Helped || '').split(' ').filter(String)
  };
  if (duelHas(d, 'Host') && (done || d.Mode === 'challenge' || role === 'host')) v.host.track = String(d.HostTrack);
  if (duelHas(d, 'Guest') && (done || role === 'guest')) v.guest.track = String(d.GuestTrack);
  if (!guest && !d.Guest && d.State !== 'done') v.open = true;
  return v;
}

function duelHelperStars(name) {
  var n = 0;
  readTable('Duels').forEach(function (r) {
    String(r.Helped || '').split(' ').forEach(function (e) { if (e.indexOf(name + ':') === 0) n++; });
  });
  return n;
}

// ---------- Storage ----------

function duelRows() { return readTableUncached('Duels'); }

function duelCode(rows) {
  var used = {};
  rows.forEach(function (r) { used[r.Id] = true; });
  for (var tries = 0; tries < 200; tries++) {
    var c = '';
    for (var i = 0; i < 4; i++) c += DUEL_LETTERS[Math.floor(Math.random() * DUEL_LETTERS.length)];
    if (!used[c]) return c;
  }
  throw new Error('Could not create a code, try again');
}

function duelNorm(code) {
  code = String(code || '').toUpperCase().replace(/[^A-Z]/g, '');
  if (code.length !== 4) throw new Error('A code has 4 letters');
  return code;
}

// From the cache (fast path for polls), else the sheet.
function duelGet(code) {
  code = duelNorm(code);
  var hit = CacheService.getScriptCache().get('DM:' + code);
  if (hit) return JSON.parse(hit);
  return duelFresh(code);
}

// Straight from the sheet (inside the lock for every change).
function duelFresh(code) {
  code = duelNorm(code);
  var d = duelRows().filter(function (r) { return r.Id === code; })[0];
  if (!d) throw new Error('No duel with the code ' + code);
  duelCache(d);
  return d;
}

function duelCache(d) {
  try { CacheService.getScriptCache().put('DM:' + d.Id, JSON.stringify(d), DUEL.cacheSec); } catch (e) {}
}

// Writes the whole row (one sheet call) and refreshes the cache.
function duelSave(d, isNew) {
  var sh = sheet('Duels');
  var head = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  var row = head.map(function (h) { return d[h] === undefined || d[h] === null ? '' : d[h]; });
  if (isNew) sh.appendRow(row);
  else {
    var ids = sh.getRange(1, head.indexOf('Id') + 1, sh.getLastRow(), 1).getValues();
    var at = -1;
    for (var i = ids.length - 1; i >= 1; i--) { if (String(ids[i][0]).trim() === d.Id) { at = i + 1; break; } }
    if (at < 0) sh.appendRow(row); else sh.getRange(at, 1, 1, head.length).setValues([row]);
  }
  invalidate('Duels');
  duelCache(d);
}

function duelProgress(code, name) {
  var hit = CacheService.getScriptCache().get('DP:' + code + ':' + name);
  return hit ? JSON.parse(hit) : null;
}

function duelOnline(names) {
  var out = {};
  if (!names.length) return out;
  var got = CacheService.getScriptCache().getAll(names.map(function (n) { return 'ON:' + n; }));
  var now = Date.now();
  names.forEach(function (n) { out[n] = Number(got['ON:' + n]) > now - DUEL.onlineMs; });
  return out;
}

function duelSeen(name) {
  try { CacheService.getScriptCache().put('ON:' + name, String(Date.now()), 600); } catch (e) {}
}

function duelRole(d, name) { return d.Host === name ? 'host' : d.Guest === name ? 'guest' : null; }
function duelHas(d, P) { return d[P + 'Score'] !== '' && d[P + 'Score'] !== undefined && d[P + 'Score'] !== null; }
function duelInt(v, min, max) { v = Math.round(Number(v)); return isNaN(v) ? min : Math.max(min, Math.min(max, v)); }

// ---------- Notifications ----------

function duelMessage(kind, d) {
  var url = './?duel=' + d.Id, score = function (s, ms) { return s + '/' + DUEL.items + ' in ' + Math.round(ms / 1000) + ' s'; };
  if (kind === 'invite') return { title: d.Host + ' invites you to a Word Duel', body: DUEL.items + ' questions at your level. Tap to join!', url: url, tag: 'eq-duel' };
  if (kind === 'challenge') return { title: d.Host + ' challenged you!', body: 'Beat ' + score(d.HostScore, d.HostMs) + '. You have ' + DUEL.challengeHours + ' hours.', url: url, tag: 'eq-duel' };
  var res = d.Winner === d.Host ? 'You won!' : d.Winner === 'draw' ? 'A draw!' : d.Guest + ' won.';
  return { title: d.Guest + ' played your challenge', body: d.Guest + ' ' + d.GuestScore + '/' + DUEL.items + ' · you ' + d.HostScore + '/' + DUEL.items + '. ' + res + ' Rematch?', url: url, tag: 'eq-duel' };
}
