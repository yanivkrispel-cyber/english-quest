// Chacho's Nest (specs/nest.md): the track for ages 2 to 7. A Nest kid has Level 'nest' (outside LEVELS, so the level chain,
// journeys, gates and the catalog never see her) and her real age. One day a day in the order of NEST_UNITS
// (src/NestIndex.js, written by tools/nest-index.js from docs/nest/nest.js): a unit is four days (n04 new words,
// n04.b move, n04.c song and story, n04.d games) and a review is one (r02). No level test, no link out.

var NEST = { points: 15, latePoints: 12, minTotal: 1, maxTotal: 40, maxSeconds: 3600, ages: [2, 7], detailMax: 800,
  perDayMax: 3, cap: [20, 30, 40], timeMax: 7200 };
var NEST_DAY = /^[nr]\d\d(\.[bcd])?$/, NEST_DETAIL = /^[a-z0-9-]+:[01](,[a-z0-9-]+:[01])*$/;

function isNest(kid) { return !!kid && String(kid.Level || '').trim().toLowerCase() === 'nest'; }

function nestUnits() { return typeof NEST_UNITS === 'object' && NEST_UNITS.length ? NEST_UNITS : [['n01', 'Hello, Chacho!', 0]]; }

// The day for a date: the first one she has not played yet, then around again. It follows what she played, not the
// calendar, so a missed day (or a move into the Nest in the middle of a week) never skips a unit.
function nestNext(kid, logs) {
  var units = nestUnits(), played = {}, n = 0;
  (logs || readTable('Log')).forEach(function (l) { if (l.Girl === kid.Name && l.Section === 'nest' && l.Mission) { played[l.Mission] = 1; n++; } });
  for (var i = 0; i < units.length; i++) if (!played[units[i][0]]) return nestAssignment(units[i]);
  return nestAssignment(units[n % units.length]);
}

function nestAssignment(u) { return { section: 'nest', level: 'nest', title: u[1], url: 'nest:' + u[0] }; }

function nestAge(kid) {
  var a = Math.round(Number(kid.Age));
  return a >= NEST.ages[0] && a <= NEST.ages[1] ? a : 5;
}

// What the Nest home needs: the age (how many pictures, whether words are shown), today's day, the days played, and
// per word [days found on the first try, days missed, the last day met] for the review days.
function nestInfo(kid, t, assigned, logs) {
  var a = assigned[t], played = [], seen = {}, words = {};
  logs.forEach(function (l) {
    if (l.Section !== 'nest') return;
    if (l.Mission && !seen[l.Mission]) { seen[l.Mission] = 1; played.push(String(l.Mission)); }
    String(l.Detail || '').split(',').forEach(function (x) {
      var p = x.split(':');
      if (!p[0] || (p[1] !== '0' && p[1] !== '1')) return;
      var w = words[p[0]] = words[p[0]] || [0, 0, ''];
      w[p[1] === '1' ? 0 : 1]++;
      if (String(l.Date) > w[2]) w[2] = String(l.Date);
    });
  });
  var age = nestAge(kid), done = logs.some(function (l) { return l.Date === t; }), perDay = nestPerDay(kid);
  var today = logs.filter(function (l) { return l.Date === t && l.Section === 'nest'; }).length;
  return {
    age: age, choices: age <= 4 ? 2 : 3, words: age >= 6,
    today: a && a.section === 'nest' ? String(a.url).slice(5) : null,
    done: done,
    played: played,
    known: words,
    all: nestAllOpen(kid),
    // The living home (specs/nest-home.md) and the arcade (a live Chacho, real sounds, the band, Chacho's games): every Nest kid
    // since 2026-10-29 (the owner). Settings.NestHome / NestArcade = 'off' closes one again for everyone.
    home: !nestOff('NestHome'),
    arcade: !nestOff('NestArcade'),
    // Days played (distinct dates with a Nest row): a flower each in the home's garden.
    days: logs.filter(function (l) { return l.Section === 'nest'; }).map(function (l) { return String(l.Date); }).filter(function (d, i, a) { return a.indexOf(d) === i; }).length,
    perDay: perDay,
    // Minutes a day in Chacho's arcade (the parent sets it, inside the day's screen time). The phone counts the minutes.
    arcadeMin: nestArcadeMin(kid),
    // Screen time (finding 15): a hard cap a day across lessons, replays, the playground and the arcade. capMax by age, the
    // parent may set less (Girls.NestMin); used = the seconds the phones reported today (apiNestTime, the most of them).
    cap: nestCap(kid), capMax: nestCapMax(age), used: nestUsed(kid, t),
    // Chacho's Hebrew guidance (the parent's switch): '' = auto (on up to age 5), 'on' = always, 'off'.
    hebrew: nestHebrew(kid),
    // One more lesson: once the day's own is done, the next day of the program while the parent's daily number allows.
    next: done && today < perDay ? String(nestNext(kid, logs).url).slice(5) : null
  };
}

// Lessons a day (Girls.NestPerDay, set by the parent): 1 when empty, at most NEST.perDayMax. There is no "no limit" any more
// (finding 15, 2026-11-01): an old 0 counts as the most.
function nestPerDay(kid) {
  var v = String(kid.NestPerDay == null ? '' : kid.NestPerDay).trim();
  if (v === '') return 1;
  var n = Math.round(Number(v));
  return n >= 1 && n <= NEST.perDayMax ? n : n === 0 || n > NEST.perDayMax ? NEST.perDayMax : 1;
}

// ---------- Screen time a day (the night review, finding 15) ----------
// AAP and WHO: under an hour a day for ages 2 to 5, less is better, with a grown-up. The Nest stops for the day after
// 20 minutes (ages 2 and 3), 30 (4 and 5) or 40 (6 and 7); the parent may choose less (Girls.NestMin), never more and never
// "no limit". The phone counts the minutes (every lesson, replay, playground game and arcade game) and tells the server
// now and then (apiNestTime), so a second phone or tablet knows how much is left.
function nestCapMax(age) { return age <= 3 ? NEST.cap[0] : age <= 5 ? NEST.cap[1] : NEST.cap[2]; }
function nestCap(kid) {
  var max = nestCapMax(nestAge(kid)), v = String(kid.NestMin == null ? '' : kid.NestMin).trim(), n = Math.round(Number(v));
  return v !== '' && n >= 5 && n < max ? n : max;
}
// Girls.NestTime = "<date> <seconds>": the most any phone reported for that day.
function nestUsed(kid, t) {
  var p = String(kid.NestTime || '').split(' ');
  return p[0] === t ? Math.max(0, Math.round(Number(p[1])) || 0) : 0;
}
function apiNestTime(name, pin, seconds) {
  var kid = auth(name, pin);
  if (!isNest(kid)) throw new Error('Unknown activity');
  var t = today(), s = Math.max(0, Math.min(NEST.timeMax, Math.round(Number(seconds)) || 0)), was = nestUsed(kid, t);
  // One cell, and only when it grows: the phone sends one every few minutes at most (Cloudflare counts rows written).
  if (s > was) setGirlFields(kid.Name, { NestTime: t + ' ' + s });
  return { used: Math.max(s, was), cap: nestCap(kid) };
}
function apiParentNestMin(pin, name, n) {
  ensureSetup();
  var access = parentAccess(pin);
  var kid = findGirl(name);
  if (!kid || !isNest(kid) || (!access.isAdmin && groupOf(kid) !== String(access.group.Id))) throw new Error('Unknown kid');
  var max = nestCapMax(nestAge(kid));
  n = Math.round(Number(n));
  if (!(n >= 5 && n <= max)) throw new Error('בחרו כמה דקות ביום');
  setGirlFields(kid.Name, { NestMin: n === max ? '' : n });
  audit(access.isAdmin ? 'admin' : 'parent', access.isAdmin ? 'admin' : access.group.Name, groupOf(kid), 'nest minutes a day', kid.Name + ': ' + n);
  return parentView(access);
}

function apiParentNestPerDay(pin, name, n) {
  ensureSetup();
  var access = parentAccess(pin);
  var kid = findGirl(name);
  if (!kid || !isNest(kid) || (!access.isAdmin && groupOf(kid) !== String(access.group.Id))) throw new Error('Unknown kid');
  n = Math.round(Number(n));
  if (n === 0) n = NEST.perDayMax;   // an old copy of the app still offers "no limit"
  if (!(n >= 1 && n <= NEST.perDayMax)) throw new Error('בחרו כמה שיעורים ביום');
  setGirlFields(kid.Name, { NestPerDay: n });
  audit(access.isAdmin ? 'admin' : 'parent', access.isAdmin ? 'admin' : access.group.Name, groupOf(kid), 'nest lessons a day', kid.Name + ': ' + n);
  return parentView(access);
}

// Minutes a day in Chacho's arcade (Girls.NestArcadeMin, set by the parent): 15 when empty, never more than the day's screen
// time. An old 0 ("no limit", before 2026-11-01) is the day's screen time.
function nestArcadeMin(kid) {
  var v = String(kid.NestArcadeMin == null ? '' : kid.NestArcadeMin).trim(), cap = nestCap(kid);
  if (v === '') return Math.min(15, cap);
  var n = Math.round(Number(v));
  return n >= 1 && n <= 60 ? Math.min(n, cap) : n === 0 ? cap : Math.min(15, cap);
}

function apiParentNestArcade(pin, name, n) {
  ensureSetup();
  var access = parentAccess(pin);
  var kid = findGirl(name);
  if (!kid || !isNest(kid) || (!access.isAdmin && groupOf(kid) !== String(access.group.Id))) throw new Error('Unknown kid');
  n = Math.round(Number(n));
  if (n === 0) n = nestCap(kid);   // an old copy of the app still offers "no limit": the day's screen time
  if (!(n >= 1 && n <= 60)) throw new Error('בחרו כמה דקות ביום');
  setGirlFields(kid.Name, { NestArcadeMin: n });
  audit(access.isAdmin ? 'admin' : 'parent', access.isAdmin ? 'admin' : access.group.Name, groupOf(kid), 'nest arcade minutes', kid.Name + ': ' + n);
  return parentView(access);
}

// Chacho's Hebrew guidance in the Nest (Girls.NestHebrew, set by the parent; package B, owner 2026-10-31): empty = auto (on up
// to age 5, the first plays of a game and when the kid is stuck), 'on' = always, 'off'. Only instructions, never translations.
function nestHebrew(kid) {
  var v = String(kid.NestHebrew == null ? '' : kid.NestHebrew).trim().toLowerCase();
  return v === 'on' || v === 'off' ? v : '';
}

function apiParentNestHebrew(pin, name, v) {
  ensureSetup();
  var access = parentAccess(pin);
  var kid = findGirl(name);
  if (!kid || !isNest(kid) || (!access.isAdmin && groupOf(kid) !== String(access.group.Id))) throw new Error('Unknown kid');
  v = String(v == null ? '' : v).trim().toLowerCase();
  if (['', 'on', 'off'].indexOf(v) < 0) throw new Error('בחרו מתי צ׳אצ׳ו מסביר בעברית');
  setGirlFields(kid.Name, { NestHebrew: v });
  audit(access.isAdmin ? 'admin' : 'parent', access.isAdmin ? 'admin' : access.group.Name, groupOf(kid), 'nest hebrew guidance', kid.Name + ': ' + (v || 'auto'));
  return parentData(access.isAdmin ? groups() : [access.group], access.isAdmin, access.isAdmin ? 'admin' : String(access.group.Id));
}

// Settings.NestAll: the names (comma separated, or 'all') whose Nest home shows every unit and day now, as free play.
// A try-out switch for the owner; the day's own session still comes one a day.
function nestAllOpen(kid) { return nestNamesOpen('NestAll', kid); }
function nestOff(setting) { return String(getSetting(setting) || '').trim().toLowerCase() === 'off'; }
function nestNamesOpen(setting, kid) {
  var v = String(getSetting(setting) || '').toLowerCase().split(',').map(function (s) { return s.trim(); });
  return v.indexOf('all') >= 0 || v.indexOf(String(kid.Name || '').toLowerCase()) >= 0;
}

function apiAdminNestAll(pin, names) {
  ensureSetup();
  if (!parentAccess(pin).isAdmin) throw new Error('Only the admin can change settings');
  names = String(names || '').split(',').map(function (s) { return s.trim(); }).filter(String).join(',');
  setSetting('NestAll', names);
  audit('admin', 'admin', '', 'nest all open', names || 'none');
  return { ok: true, names: names };
}

// One finished session. The day's own session logs the day (points whatever the score: no pressure at this age); any
// other day, or the same one again, is free play and changes nothing. detail: each word's first try ("cat:1,dog:0").
function apiNestResult(name, pin, date, unitId, correct, total, seconds, detail) {
  var kid = auth(name, pin);
  if (!isNest(kid)) throw new Error('Unknown activity');
  var t = today();
  unitId = String(unitId || '');
  if (!NEST_DAY.test(unitId)) throw new Error('Unknown activity');
  detail = String(detail || '');
  if (detail.length > NEST.detailMax || (detail && !NEST_DETAIL.test(detail))) detail = '';
  correct = Math.round(Number(correct));
  total = Math.round(Number(total));
  if (!(total >= NEST.minTotal && total <= NEST.maxTotal && correct >= 0 && correct <= total)) throw new Error('Invalid score');
  seconds = Math.max(0, Math.min(NEST.maxSeconds, Math.round(Number(seconds)) || 0));
  var free = function () { var d = buildDashboard(findGirl(kid.Name)); d.justEarned = 0; d.free = true; return d; };
  if (weekDates(t).indexOf(date) < 0 || date > t || date < kidStart(kid)) return free();
  var a = ensureAssignments(kid, [date])[date];
  if (!a) return free();
  var entry = null;
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var mine = kidRowsFresh('Log', kid.Name);
    if (a.url !== 'nest:' + unitId) {
      // One more lesson today: the day's own is logged, this is the next day of the program, and the parent allows it.
      var perDay = nestPerDay(kid), todays = mine.filter(function (l) { return l.Date === t && l.Section === 'nest'; }).length;
      var next = nestNext(kid, mine);
      if (date !== t || !todays || todays >= perDay || next.url !== 'nest:' + unitId) return free();
      a = next;
    } else if (mine.some(function (l) { return l.Date === date; })) return free();
    entry = {
      Timestamp: new Date(), Girl: kid.Name, Date: date, DoneOn: t, Section: 'nest', Level: 'nest', Title: a.title, URL: a.url,
      Correct: correct, Total: total, Percent: Math.round(correct / total * 100), Points: date === t ? NEST.points : NEST.latePoints,
      Mission: unitId, Seconds: seconds, Detail: detail
    };
    appendRow('Log', entry);
  } finally {
    lock.releaseLock();
  }
  try { notifyCompletion(kid, entry); } catch (e) { console.error(e); }
  var dash = buildDashboard(findGirl(kid.Name));
  dash.justEarned = entry.Points;
  return dash;
}
