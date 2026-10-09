// Play together, phase 2: Duo Streak and Team Quest. Spec: specs/duo-streak.md
// Only functions and literal constants here: files load in one global scope, so nothing at the top
// level may use another file's names.

var DUO = {
  max: 4, milestones: [7, 30, 100], milestoneXp: [20, 60, 150],
  questXp: 40, questGameTarget: 40, questDaysTarget: 5, questMinAnswers: 10
};
var DUO_GAMES = ['match', 'listen', 'build', 'spot'];
var DUO_GAME_NAMES = { match: 'Match it', listen: 'Hear it', build: 'Build it', spot: 'Spot it' };
var DUO_MEMO = { log: null, games: null, days: {} };

// ---------- API ----------

// Ask for a duo streak; if she already asked me, this accepts hers.
function apiDuoInvite(name, pin, partnerName) {
  var kid = duelKid(name, pin), mate = findGirl(partnerName), note = null;
  if (!mate) throw new Error('Unknown player');
  if (mate.Name === kid.Name) throw new Error('Choose someone else');
  if (!duelCanMeet(kid, mate)) throw new Error('Playing with other groups is switched off for this group');
  if (pendingLevelTest(mate)) throw new Error(mate.Name + ' takes the level test first');
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var rows = duoRows();
    var pair = rows.filter(function (r) { return duoHas(r, kid.Name) && duoHas(r, mate.Name) && (r.State === 'active' || r.State === 'invited'); })[0];
    if (pair && pair.State === 'active') throw new Error('You already have a duo streak with ' + mate.Name);
    if (pair && pair.A === kid.Name) throw new Error('You already asked ' + mate.Name + '. Waiting for an answer.');
    if (duoCount(rows, kid.Name) >= DUO.max) throw new Error('You can have up to ' + DUO.max + ' duo streaks');
    if (duoCount(rows, mate.Name) >= DUO.max) throw new Error(mate.Name + ' already has ' + DUO.max + ' duo streaks');
    if (pair) {
      pair.State = 'active'; pair.Since = today();
      duoSave(pair);
      note = { to: mate.Name, msg: duoMessage('yes', kid.Name) };
    } else {
      duoSave({ Id: duoNewId(rows), Created: new Date().toISOString(), A: kid.Name, B: mate.Name, State: 'invited',
        Since: '', Ended: '', Nudges: '', Milestones: '', QuestDone: '' }, true);
      note = { to: mate.Name, msg: duoMessage('ask', kid.Name) };
    }
  } finally {
    lock.releaseLock();
  }
  try { pushToKid(note.to, note.msg); } catch (e) { console.error(e); }
  return duoHome(kid);
}

function apiDuoAnswer(name, pin, id, accept) {
  var kid = duelKid(name, pin), d;
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    d = duoFresh(id);
    if (d.B !== kid.Name) throw new Error('This request is not for you');
    if (d.State !== 'invited') throw new Error('This request is no longer open');
    if (accept) {
      if (duoCount(duoRows(), kid.Name) >= DUO.max) throw new Error('You can have up to ' + DUO.max + ' duo streaks');
      d.State = 'active'; d.Since = today();
    } else {
      d.State = 'declined'; d.Ended = new Date().toISOString();
    }
    duoSave(d);
  } finally {
    lock.releaseLock();
  }
  if (accept) { try { pushToKid(d.A, duoMessage('yes', kid.Name)); } catch (e) { console.error(e); } }
  return duoHome(kid);
}

// A friendly reminder to a partner who hasn't practiced today (once a day per kid per duo).
function apiDuoNudge(name, pin, id) {
  var kid = duelKid(name, pin), t = today(), d, other, s;
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    d = duoFresh(id);
    if (!duoHas(d, kid.Name) || d.State !== 'active') throw new Error('This duo streak is not active');
    other = duoOther(d, kid.Name);
    if (practiceDays(other)[t]) throw new Error(other + ' already practiced today');
    var nudges = duoNudges(d);
    if (nudges[kid.Name] === t) throw new Error('You already nudged ' + other + ' today');
    nudges[kid.Name] = t;
    d.Nudges = Object.keys(nudges).map(function (k) { return k + ':' + nudges[k]; }).join(' ');
    duoSave(d);
    s = duoStreak(d, t);
  } finally {
    lock.releaseLock();
  }
  var did = !!practiceDays(kid.Name)[t];
  try {
    pushToKid(other, { title: kid.Name + ' is waiting for you', url: './', tag: 'eq-duo',
      body: (did ? kid.Name + ' practiced today. ' : '') + (s.days ? 'Keep your ' + s.days + '-day duo streak going!' : 'Practice today, both of you, and start your duo streak!') });
  } catch (e) { console.error(e); }
  return duoHome(kid);
}

// Either kid can stop a duo streak (or take back a request).
function apiDuoEnd(name, pin, id) {
  var kid = duelKid(name, pin);
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var d = duoFresh(id);
    if (!duoHas(d, kid.Name)) throw new Error('This duo streak is not yours');
    if (d.State === 'active' || d.State === 'invited') { d.State = 'ended'; d.Ended = new Date().toISOString(); duoSave(d); }
  } finally {
    lock.releaseLock();
  }
  return duoHome(kid);
}

// ---------- Rewards (after every practice) ----------

// Milestones and finished quests give both kids their XP once. Cheap when nothing is due:
// everything is read from the cache first, and the lock is taken only to give a reward.
function duoAfterPractice(name) {
  var t = today();
  var due = readTable('Duos').filter(function (r) { return r.State === 'active' && duoHas(r, name) && duoDue(r, t); });
  if (!due.length) return;
  var notes = [];
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    duoRows().filter(function (r) { return r.State === 'active' && duoHas(r, name); }).forEach(function (d) {
      var s = duoStreak(d, t), q = duoQuest(d, t), reached = duoList(d.Milestones), weeks = duoList(d.QuestDone), changed = false;
      DUO.milestones.forEach(function (m, i) {
        if (s.days < m || reached.indexOf(String(m)) >= 0) return;
        reached.push(String(m)); changed = true;
        duoBonus([d.A, d.B], 'duo-streak', DUO.milestoneXp[i], d.Id + ':' + m);
        notes.push({ to: [d.A, d.B], msg: { title: m + '-day duo streak!', url: './', tag: 'eq-duo',
          body: d.A + ' and ' + d.B + ' practiced together ' + m + ' days in a row. +' + DUO.milestoneXp[i] + ' XP each!' } });
      });
      if (q.done && weeks.indexOf(q.week) < 0) {
        weeks.push(q.week); changed = true;
        duoBonus([d.A, d.B], 'quest', DUO.questXp, d.Id + ':q:' + q.week);
        notes.push({ to: [d.A, d.B], msg: { title: 'Team quest complete!', url: './', tag: 'eq-duo',
          body: d.A + ' and ' + d.B + ' did it: ' + q.goal + '. +' + DUO.questXp + ' XP each!' } });
      }
      if (changed) { d.Milestones = reached.join(' '); d.QuestDone = weeks.slice(-12).join(' '); duoSave(d); }
    });
  } finally {
    lock.releaseLock();
  }
  notes.forEach(function (n) { n.to.forEach(function (k) { try { pushToKid(k, n.msg); } catch (e) { console.error(e); } }); });
}

function duoDue(d, t) {
  var s = duoStreak(d, t), reached = duoList(d.Milestones);
  if (DUO.milestones.some(function (m) { return s.days >= m && reached.indexOf(String(m)) < 0; })) return true;
  var q = duoQuest(d, t);
  return q.done && duoList(d.QuestDone).indexOf(q.week) < 0;
}

// One Bonus row per kid and ref, so an award never repeats.
function duoBonus(names, kind, xp, ref) {
  var rows = readTableUncached('Bonus');
  names.forEach(function (n) {
    if (rows.some(function (b) { return b.Girl === n && b.Ref === ref; })) return;
    appendRow('Bonus', { Timestamp: new Date(), Girl: n, Date: today(), Kind: kind, XP: xp, Ref: ref });
  });
}

// ---------- Streak and quest ----------

// Days with a task logged, or a game or duel round played.
function practiceDays(name) {
  var log = readTable('Log'), games = readTable('Games');
  if (DUO_MEMO.log !== log || DUO_MEMO.games !== games) DUO_MEMO = { log: log, games: games, days: {} };
  if (DUO_MEMO.days[name]) return DUO_MEMO.days[name];
  var days = {};
  log.forEach(function (l) { if (l.Girl === name && l.DoneOn) days[String(l.DoneOn)] = true; });
  games.forEach(function (g) { if (g.Girl === name && Number(g.Total) > 0) days[String(g.Date)] = true; });
  return DUO_MEMO.days[name] = days;
}

// Days since the duo started on which both practiced, counted forward in time so the past never
// changes: the first missed day of a week (Sun-Sat) is forgiven and shown as saved, a second one
// breaks the streak. Today can't break it until it is over.
function duoStreak(d, t) {
  var a = practiceDays(d.A), b = practiceDays(d.B), since = String(d.Since || t);
  var both = function (x) { return !!(a[x] && b[x]); };
  var n = 0, used = {}, saved = [];
  for (var x = since; x <= t; x = addDays(x, 1)) {
    if (both(x)) { n++; continue; }
    if (x === t) break;
    var w = weekStart(x);
    if (n > 0 && !used[w]) { used[w] = true; saved.push(x); continue; }
    n = 0; saved = [];
  }
  return { days: n, both: both(t), saved: saved };
}

// This week's quest, chosen from both kids' games last week: their weakest game type, or (no data)
// practising on the same day. A duo that started this week counts from its first day, with a smaller
// goal. It is a team quest: each kid brings at least a tenth of a game goal.
function duoQuest(d, t) {
  var ws = weekStart(t), last = addDays(ws, -7), names = [d.A, d.B], games = readTable('Games'), acc = {}, had = {};
  var from = d.Since && String(d.Since) > ws ? String(d.Since) : ws;
  var share = (daysBetween(from, addDays(ws, 6)) + 1) / 7;
  games.forEach(function (g) {
    if (names.indexOf(g.Girl) < 0 || DUO_GAMES.indexOf(g.Game) < 0 || !(Number(g.Total) > 0) || g.Date < last || g.Date >= ws) return;
    var s = acc[g.Game] = acc[g.Game] || { c: 0, n: 0 };
    s.c += Number(g.Correct) || 0; s.n += Number(g.Total) || 0;
    had[g.Girl] = true;
  });
  var weak = null;
  DUO_GAMES.forEach(function (k) {
    var s = acc[k];
    if (s && s.n >= DUO.questMinAnswers && (!weak || s.c / s.n < acc[weak].c / acc[weak].n)) weak = k;
  });
  var q;
  if (weak) {
    var target = Math.max(10, Math.round(DUO.questGameTarget * share / 5) * 5), per = {};
    names.forEach(function (n) { per[n] = 0; });
    games.forEach(function (g) {
      if (g.Game === weak && names.indexOf(g.Girl) >= 0 && g.Date >= from && g.Date <= t && Number(g.Total) > 0) per[g.Girl] += Number(g.Correct) || 0;
    });
    q = { kind: 'game', game: weak, title: DUO_GAME_NAMES[weak] + ' together', target: target, minEach: Math.ceil(target / 10),
      goal: target + ' right answers in ' + DUO_GAME_NAMES[weak] + ' as a team', a: per[d.A], b: per[d.B],
      reason: DUO_GAME_NAMES[weak] + ' was the hardest game ' + (had[d.A] && had[d.B] ? 'for you two ' : '') + 'last week (' + Math.round(acc[weak].c / acc[weak].n * 100) + '% right).' };
    q.total = q.a + q.b;
    q.done = q.total >= q.target && q.a >= q.minEach && q.b >= q.minEach;
  } else {
    var A = practiceDays(d.A), B = practiceDays(d.B), goal = Math.max(1, Math.min(DUO.questDaysTarget, Math.round(DUO.questDaysTarget * share)));
    var n = weekDates(t).filter(function (x) { return x >= from && x <= t && A[x] && B[x]; }).length;
    q = { kind: 'days', title: 'Practice buddies', target: goal, minEach: null, goal: 'Practice on the same day ' + (goal === 1 ? 'once' : goal + ' times'),
      a: null, b: null, total: n, reason: 'A habit you build together lasts longer.' };
    q.done = q.total >= q.target;
  }
  q.week = ws;
  q.daysLeft = daysBetween(t, addDays(ws, 6)) + 1;
  q.xp = DUO.questXp;
  return q;
}

// ---------- Views ----------

function duoHome(kid) {
  var t = today(), name = kid.Name;
  var rows = readTable('Duos').filter(function (r) { return duoHas(r, name); });
  var urgent = function (v) { return v.todayMe && v.todayThem ? 2 : v.todayMe || v.todayThem ? 0 : 1; };
  return {
    incoming: rows.filter(function (r) { return r.State === 'invited' && r.B === name; }).map(function (r) { return { id: r.Id, partner: duoPlayer(r.A) }; }),
    outgoing: rows.filter(function (r) { return r.State === 'invited' && r.A === name; }).map(function (r) { return { id: r.Id, partner: duoPlayer(r.B) }; }),
    active: rows.filter(function (r) { return r.State === 'active'; }).map(function (r) { return duoView(r, name, t); })
      .sort(function (a, b) { return urgent(a) - urgent(b) || b.days - a.days; }),
    max: DUO.max, milestones: DUO.milestones, milestoneXp: DUO.milestoneXp
  };
}

function duoView(d, me, t) {
  var other = duoOther(d, me), s = duoStreak(d, t), A = practiceDays(me), B = practiceDays(other), q = duoQuest(d, t);
  var first = d.A === me, reached = duoList(d.Milestones).map(Number);
  return {
    id: d.Id, partner: duoPlayer(other), since: d.Since, days: s.days, todayMe: !!A[t], todayThem: !!B[t],
    week: weekDates(t).map(function (x) { return { date: x, me: !!A[x], them: !!B[x], saved: s.saved.indexOf(x) >= 0, future: x > t, before: x < d.Since }; }),
    milestones: reached, next: DUO.milestones.filter(function (m) { return m > s.days; })[0] || null, nudged: duoNudges(d)[me] === t,
    quest: { kind: q.kind, game: q.game || null, title: q.title, goal: q.goal, target: q.target, total: q.total, reason: q.reason,
      me: q.a === null ? null : (first ? q.a : q.b), them: q.b === null ? null : (first ? q.b : q.a),
      minEach: q.minEach, done: q.done, claimed: duoList(d.QuestDone).indexOf(q.week) >= 0, week: q.week, daysLeft: q.daysLeft, xp: q.xp }
  };
}

function duoPlayer(name) {
  var k = findGirl(name), pet = k ? petInfo(k) : null;
  return { name: name, color: k ? k.Color : '', level: k ? (LEVEL_LABEL[k.Level] || k.Level) : '', pet: pet ? { id: pet.id, stage: pet.stage } : null };
}

// The 17:00 / 20:00 reminder of a kid who hasn't practiced: a partner who already did today.
function duoReminder(kid) {
  var t = today();
  if (practiceDays(kid.Name)[t]) return null;
  var best = null;
  readTable('Duos').forEach(function (d) {
    if (d.State !== 'active' || !duoHas(d, kid.Name)) return;
    var other = duoOther(d, kid.Name);
    if (!practiceDays(other)[t]) return;
    var days = duoStreak(d, t).days;
    if (!best || days > best.days) best = { partner: other, days: days };
  });
  return best;
}

function duoMessage(kind, from) {
  if (kind === 'ask') return { title: from + ' wants a duo streak with you', body: 'Practice on the same days and grow a streak together. Tap to answer.', url: './', tag: 'eq-duo' };
  return { title: from + ' said yes!', body: 'Your duo streak starts today. Practice today, both of you.', url: './', tag: 'eq-duo' };
}

// ---------- Storage ----------

function duoRows() { return readTableUncached('Duos'); }
function duoHas(d, name) { return d.A === name || d.B === name; }
function duoOther(d, name) { return d.A === name ? d.B : d.A; }
function duoList(s) { return String(s || '').split(' ').filter(String); }
function duoCount(rows, name) { return rows.filter(function (r) { return r.State === 'active' && duoHas(r, name); }).length; }
function duoNudges(d) {
  var out = {};
  duoList(d.Nudges).forEach(function (e) { var i = e.lastIndexOf(':'); out[e.slice(0, i)] = e.slice(i + 1); });
  return out;
}

function duoNewId(rows) {
  var used = {};
  rows.forEach(function (r) { used[r.Id] = true; });
  for (;;) {
    var id = 'U' + Math.random().toString(36).slice(2, 8);
    if (!used[id]) return id;
  }
}

function duoFresh(id) {
  var d = duoRows().filter(function (r) { return r.Id === String(id); })[0];
  if (!d) throw new Error('Unknown duo streak');
  return d;
}

// Writes the whole row in one call.
function duoSave(d, isNew) {
  var sh = sheet('Duos');
  var head = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  var row = head.map(function (h) { return d[h] === undefined || d[h] === null ? '' : d[h]; });
  if (isNew) sh.appendRow(row);
  else {
    var ids = sh.getRange(1, head.indexOf('Id') + 1, sh.getLastRow(), 1).getValues(), at = -1;
    for (var i = ids.length - 1; i >= 1; i--) { if (String(ids[i][0]).trim() === d.Id) { at = i + 1; break; } }
    if (at < 0) sh.appendRow(row); else sh.getRange(at, 1, 1, head.length).setValues([row]);
  }
  invalidate('Duos');
}
