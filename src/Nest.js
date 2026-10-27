// Coco's Nest (specs/nest.md): the track for ages 2 to 7. A Nest kid has Level 'nest' (outside LEVELS, so the level chain,
// journeys, gates and the catalog never see her) and her real age. One day a day in the order of NEST_UNITS
// (src/NestIndex.js, written by tools/nest-index.js from docs/nest/nest.js): a unit is four days (n04 new words,
// n04.b move, n04.c song and story, n04.d games) and a review is one (r02). No level test, no link out.

var NEST = { points: 15, latePoints: 12, minTotal: 1, maxTotal: 40, maxSeconds: 3600, ages: [2, 7], detailMax: 800 };
var NEST_DAY = /^[nr]\d\d(\.[bcd])?$/, NEST_DETAIL = /^[a-z0-9-]+:[01](,[a-z0-9-]+:[01])*$/;

function isNest(kid) { return !!kid && String(kid.Level || '').trim().toLowerCase() === 'nest'; }

function nestUnits() { return typeof NEST_UNITS === 'object' && NEST_UNITS.length ? NEST_UNITS : [['n01', 'Hello, Coco!', 0]]; }

// The day for a date: the first one she has not played yet, then around again. It follows what she played, not the
// calendar, so a missed day (or a move into the Nest in the middle of a week) never skips a unit.
function nestNext(kid) {
  var units = nestUnits(), played = {}, n = 0;
  readTable('Log').forEach(function (l) { if (l.Girl === kid.Name && l.Section === 'nest' && l.Mission) { played[l.Mission] = 1; n++; } });
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
  var age = nestAge(kid);
  return {
    age: age, choices: age <= 4 ? 2 : 3, words: age >= 6,
    today: a && a.section === 'nest' ? String(a.url).slice(5) : null,
    done: logs.some(function (l) { return l.Date === t; }),
    played: played,
    known: words
  };
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
  if (!a || a.url !== 'nest:' + unitId) return free();
  var entry = null;
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    if (readTableUncached('Log').some(function (l) { return l.Girl === kid.Name && l.Date === date; })) return free();
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
