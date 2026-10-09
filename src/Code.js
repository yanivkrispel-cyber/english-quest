// English Quest — daily English practice tracker for kids in groups (families, friends).
// Web app served from a Sheets-bound Apps Script. All data lives in the bound spreadsheet.

var TZ = 'Asia/Jerusalem';
var START_DATE = '2026-10-08';
var SETUP_VERSION = 'v9';
// The production web app (Apps Script deployment) that the Pages front end calls.
var APP_URL = 'https://script.google.com/macros/s/AKfycbzN95JPrZcVFtwOc5yYpZLEh5fhySlDWHim1wAF_-3kdQpij1s6g4-ixld8NgK27HNI3w/exec';
var LEVELS = ['a1', 'a2', 'b1', 'b1-b2', 'b2', 'c1'];
var LEVEL_LABEL = { a1: 'A1', a2: 'A2', b1: 'B1', 'b1-b2': 'B1+', b2: 'B2', c1: 'C1' };
var LEVEL_TEST = { section: 'level', level: '', title: 'English Level Test', url: 'https://test-english.com/level-test/' };
var SECTIONS = {
  level: { label: 'Level Test' },
  grammar: { label: 'Grammar' },
  vocabulary: { label: 'Vocabulary' },
  listening: { label: 'Listening' },
  reading: { label: 'Reading' },
  writing: { label: 'Writing' },
  'use-of-english': { label: 'Use of English' }
};
// Sunday..Saturday. Friday alternates between Use of English and Writing.
var ROTATION = ['grammar', 'vocabulary', 'listening', 'grammar', 'reading', 'FRIDAY', 'listening'];
var DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var WEEK_BONUS = 20;
var COLORS = ['#7b7ff7', '#3cc7b6', '#f6a04d', '#e879f9', '#38bdf8', '#f472b6', '#a3e635', '#fb7185', '#facc15', '#818cf8'];

// Mini-games (content lives in docs/games.js) and pets. A round is 5 items; every right answer
// is worth 2 XP, a perfect round 5 more, and games give at most 60 XP a day.
var GAMES = ['match', 'listen', 'build', 'spot'];
var GAME_XP = { right: 2, perfect: 5, dayCap: 60 };
var PETS = ['turtle', 'monster', 'cat', 'cow', 'fawn', 'donkey', 'sheep', 'giraffe', 'elephant', 'lion'];
// XP where each growth stage starts: Baby, Kid, Explorer, Hero, Legend. A pet grows from game XP
// plus the task points earned since it was adopted.
var PET_STAGES = [0, 150, 500, 1100, 2000];
// Spaced review: a missed item comes back after 1 day, then 3, 7 and 21 days while it is answered right.
var REVIEW_DAYS = [1, 3, 7, 21];
// Journey map: a world per level. Every daily task done is a station. After `stations` of them
// (or `early` with an average of `earlyAvg`% or more) the gate to the next level opens: an in-app
// challenge of `items` questions from that level. `pass`% raises the kid's level and gives the pet
// `xp`; after a miss the gate opens again `waitDays` later.
var JOURNEY = { stations: 30, early: 20, earlyAvg: 85, items: 15, pass: 80, waitDays: 3, xp: 100 };
var WORLDS = { a1: 'Sunny Meadow', a2: 'Whisper Woods', b1: 'Crystal Caves', 'b1-b2': 'Misty Peaks', b2: 'Sky Islands', c1: 'Star Summit' };

// The sheet tab for kids is still called "Girls" (it predates groups).
var HEADERS = {
  Girls: ['Name', 'Age', 'PIN', 'Level', 'Email', 'Redeemed', 'Color', 'Group', 'Pet', 'PetName', 'PetSince'],
  Games: ['Timestamp', 'Girl', 'Date', 'Game', 'Level', 'Correct', 'Total', 'XP', 'Missed'],
  Review: ['Girl', 'Items'],
  Gates: ['Timestamp', 'Girl', 'Date', 'From', 'To', 'Correct', 'Total', 'Passed', 'Tasks', 'XP'],
  Assignments: ['Girl', 'Date', 'Section', 'Level', 'Title', 'URL'],
  Log: ['Timestamp', 'Girl', 'Date', 'DoneOn', 'Section', 'Level', 'Title', 'URL', 'Correct', 'Total', 'Percent', 'Points'],
  Rewards: ['Points', 'Reward', 'Group'],
  Settings: ['Key', 'Value'],
  Groups: ['Id', 'Name', 'ParentPIN', 'Goal', 'GoalReward', 'Email', 'Friends'],
  Push: ['Girl', 'Endpoint', 'Created', 'Agent'],
  ParentPush: ['Who', 'Endpoint', 'Created', 'Agent', 'Instant'],
  // Play together (Duels.js): one row per duel or challenge.
  Duels: ['Id', 'Created', 'Date', 'Mode', 'State', 'Host', 'Guest', 'HostLevel', 'GuestLevel', 'Seed', 'Start', 'Expires', 'Reply',
    'HostScore', 'HostMs', 'HostTrack', 'GuestScore', 'GuestMs', 'GuestTrack', 'Winner', 'Ended', 'Helped']
};

var WORDS = [
  ['brave', 'ready to face danger or difficulty'], ['curious', 'wanting to know or learn something'],
  ['achieve', 'to succeed in doing something after effort'], ['awkward', 'embarrassing or uncomfortable'],
  ['delighted', 'very pleased'], ['effort', 'hard work to do something'], ['generous', 'happy to give to others'],
  ['honest', 'telling the truth'], ['improve', 'to get better'], ['journey', 'travelling from one place to another'],
  ['knowledge', 'what you know and understand'], ['lonely', 'sad because you are alone'],
  ['mistake', 'something that is not correct'], ['nervous', 'worried and a bit afraid'],
  ['opportunity', 'a chance to do something'], ['patient', 'able to wait calmly'],
  ['reliable', 'someone you can trust'], ['schedule', 'a plan of when things happen'],
  ['thrilled', 'extremely happy and excited'], ['unique', 'the only one of its kind'],
  ['valuable', 'worth a lot; very useful'], ['wonder', 'to think about something with curiosity'],
  ['confident', 'sure of yourself'], ['challenge', 'something difficult that tests you'],
  ['consider', 'to think about carefully'], ['describe', 'to say what something is like'],
  ['encourage', 'to give someone support and confidence'], ['familiar', 'well known to you'],
  ['goal', 'something you want to achieve'], ['habit', 'something you do often'],
  ['imagine', 'to make a picture in your mind'], ['kind', 'nice and caring to others'],
  ['laugh', 'to make the sound of being happy'], ['memory', 'something you remember'],
  ['notice', 'to see or become aware of'], ['proud', 'feeling pleased about what you did'],
  ['recommend', 'to say something is good'], ['silly', 'not serious; a bit stupid'],
  ['suggest', 'to give an idea'], ['tidy', 'clean and in order'], ['upset', 'unhappy or worried'],
  ['vivid', 'very bright and clear'], ['worth', 'having a value of'], ['ambitious', 'wanting to be very successful'],
  ['boring', 'not interesting'], ['cozy', 'warm and comfortable'], ['determined', 'not giving up'],
  ['exhausted', 'very, very tired'], ['furious', 'extremely angry'], ['grateful', 'feeling thankful'],
  ['hilarious', 'extremely funny'], ['inspire', 'to make someone want to do something'],
  ['jealous', 'wanting what someone else has'], ['mysterious', 'strange and hard to explain'],
  ['ordinary', 'normal, not special'], ['persuade', 'to make someone agree with you'],
  ['quiet', 'making little noise'], ['rescue', 'to save from danger'], ['spontaneous', 'done without planning'],
  ['tremendous', 'very big or great']
];

// ---------- Web entry ----------

function doGet() {
  ensureSetup();
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('English Quest')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover')
    .setFaviconUrl('https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/72.png');
}

// JSON API for the GitHub Pages front end. Called anonymously (no Google cookies), which also
// avoids Google's under-13 block on Apps Script for signed-in child accounts.
// Built per request: functions from other files (Push.js) only exist once every file has loaded.
function api() {
  return {
  apiPublic: apiPublic, apiWarm: apiWarm, apiDashboard: apiDashboard, apiSubmit: apiSubmit, apiParent: apiParent,
  apiAdminAddGroup: apiAdminAddGroup, apiAdminAddKid: apiAdminAddKid, apiAdminSettings: apiAdminSettings,
  apiPushSubscribe: apiPushSubscribe, apiPushMessage: apiPushMessage, apiAdminTestPush: apiAdminTestPush,
  apiParentPushSubscribe: apiParentPushSubscribe, apiParentPushPrefs: apiParentPushPrefs, apiParentPushTest: apiParentPushTest,
  apiGameResult: apiGameResult, apiSetPet: apiSetPet, apiGateResult: apiGateResult,
  apiDuelHome: apiDuelHome, apiDuelInvite: apiDuelInvite, apiDuelJoin: apiDuelJoin, apiDuelReply: apiDuelReply,
  apiDuelCancel: apiDuelCancel, apiDuelSolo: apiDuelSolo, apiDuelPoll: apiDuelPoll, apiDuelFinish: apiDuelFinish, apiDuelHelped: apiDuelHelped
  };
}

function doPost(e) {
  var out;
  try {
    var req = JSON.parse(e.postData.contents);
    var API = api();
    if (!API.hasOwnProperty(req.fn)) throw new Error('Unknown call');
    out = { ok: true, data: API[req.fn].apply(null, req.args || []) };
  } catch (err) {
    out = { ok: false, error: String((err && err.message) || err) };
  }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

// Link sent to the kids (WhatsApp, reminder emails): the public front end when set.
function publicUrl() {
  return getSetting('PublicUrl') || getSetting('AppUrl');
}

// Brute-force guard: 8 wrong PINs for the same key lock it for 15 minutes.
function checkPin(key, ok) {
  var c = CacheService.getScriptCache(), k = 'F:' + key;
  var fails = Number(c.get(k)) || 0;
  if (fails >= 8) throw new Error('Too many attempts — try again in 15 minutes');
  if (!ok) {
    c.put(k, String(fails + 1), 900);
    throw new Error('Wrong PIN');
  }
  if (fails) c.remove(k);
}

// ---------- Groups ----------

function groups() { return readTable('Groups'); }
function defaultGroupId() { return String(groups()[0].Id); }
function groupOf(kid) { return String(kid.Group || '').trim() || defaultGroupId(); }
function findGroup(id) { return groups().filter(function (g) { return String(g.Id) === String(id); })[0]; }
function kidsIn(groupId) { return readTable('Girls').filter(function (k) { return groupOf(k) === groupId; }); }

function groupLink(id) {
  var base = publicUrl();
  return id === defaultGroupId() ? base : base + (base.indexOf('?') < 0 ? '?' : '&') + 'g=' + encodeURIComponent(id);
}

// Rewards rows with a Group apply to that group only; rows without one apply to every group
// that has no rewards of its own.
function rewardsFor(groupId) {
  var rows = readTable('Rewards');
  var own = rows.filter(function (r) { return String(r.Group || '').trim() === groupId; });
  var list = own.length ? own : rows.filter(function (r) { return !String(r.Group || '').trim(); });
  return list.map(function (r) { return { points: Number(r.Points), reward: r.Reward }; })
    .sort(function (a, b) { return a.points - b.points; });
}

// ---------- Client API ----------

function apiPublic(groupId) {
  ensureSetup();
  var g = groupId ? findGroup(groupId) : groups()[0];
  if (!g) throw new Error('This link is not valid — ask your parent for the right one.');
  return {
    group: { id: String(g.Id), name: g.Name },
    girls: kidsIn(String(g.Id)).map(function (k) {
      var pet = petInfo(k);
      return { name: k.Name, color: k.Color, age: k.Age, pet: pet ? { id: pet.id, stage: pet.stage } : null };
    }),
    word: wordOfDay(today()),
    today: today()
  };
}

// Called when a kid taps her name, while she types her PIN: fills the cache.
function apiWarm() {
  ensureSetup();
  ['Girls', 'Assignments', 'Log', 'Rewards', 'Groups', 'Games', 'Review', 'Gates'].forEach(readTable);
  return true;
}

function apiDashboard(name, pin) {
  var kid = auth(name, pin);
  var dash = buildDashboard(kid);
  // Play together card (Duels.js); only here, so parent views and other calls stay fast.
  if (!dash.levelTest) dash.duels = duelHome(kid);
  return dash;
}

function apiSubmit(name, pin, date, correct, total, levelResult) {
  var kid = auth(name, pin);
  var t = today();
  var pending = pendingLevelTest(kid);
  if (pending) {
    // A new kid's level test can be done any day; it counts as done today.
    if (date !== pending.date) throw new Error('Take the level test first.');
    if (!levelResult || LEVELS.indexOf(levelResult) < 0) throw new Error('Choose your level');
    // Exercises handed out before the level test was required (nothing logged, so nothing is lost).
    dropAssignmentsExcept(kid.Name, date);
    if (date !== t) { moveAssignment(kid.Name, date, t); date = t; }
  } else if (weekDates(t).indexOf(date) < 0 || date > t || date < kidStart(kid)) {
    throw new Error('You can only log tasks from this week.');
  }
  var a = ensureAssignments(kid, [date])[date];
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var done = readTableUncached('Log').filter(function (l) { return l.Girl === kid.Name && l.Date === date; });
    if (done.length) throw new Error('This task is already marked as done.');

    correct = Number(correct) || 0;
    total = Number(total) || 0;
    var pct = total > 0 ? Math.round(Math.min(correct, total) / total * 100) : '';
    var onTime = date === t;
    var points;
    if (a.section === 'level') {
      points = 15 + (onTime ? 3 : 0);
      if (levelResult && LEVELS.indexOf(levelResult) >= 0) setGirlField(kid.Name, 'Level', levelResult);
    } else {
      if (total <= 0) throw new Error('Please enter your score.');
      points = 10 + (pct >= 80 ? 5 : 0) + (onTime ? 3 : 0);
    }
    var entry = {
      Timestamp: new Date(), Girl: kid.Name, Date: date, DoneOn: t, Section: a.section,
      Level: a.section === 'level' ? (levelResult || '') : a.level, Title: a.title, URL: a.url,
      Correct: a.section === 'level' ? '' : correct, Total: a.section === 'level' ? '' : total,
      Percent: pct, Points: points
    };
    appendRow('Log', entry);
  } finally {
    lock.releaseLock();
  }
  try { notifyCompletion(kid, entry); } catch (e) { console.error(e); }
  var dash = buildDashboard(findGirl(kid.Name));
  dash.justEarned = dash.week.filter(function (d) { return d.date === date; })[0].points;
  return dash;
}

// ---------- Mini-games & pets ----------

// One finished round. The score is measured by the game itself, so nothing is typed by hand.
// missed / right: ids of the items answered wrong / right, for the spaced review.
function apiGameResult(name, pin, game, level, correct, total, missed, right) {
  var kid = auth(name, pin);
  if (GAMES.indexOf(game) < 0) throw new Error('Unknown game');
  if (pendingLevelTest(kid)) throw new Error('Take the level test first.');
  correct = Math.round(Number(correct));
  total = Math.round(Number(total));
  if (!(total >= 1 && total <= 10 && correct >= 0 && correct <= total)) throw new Error('Invalid score');
  if (LEVELS.indexOf(level) < 0) level = kid.Level;
  missed = cleanIds(missed);
  right = cleanIds(right);
  var t = today(), xp;
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var used = readTableUncached('Games').filter(function (g) { return g.Girl === kid.Name && g.Date === t; })
      .reduce(function (a, g) { return a + (Number(g.XP) || 0); }, 0);
    xp = correct * GAME_XP.right + (correct === total && total >= 5 ? GAME_XP.perfect : 0);
    xp = Math.max(0, Math.min(xp, GAME_XP.dayCap - used));
    appendRow('Games', { Timestamp: new Date(), Girl: kid.Name, Date: t, Game: game, Level: level,
      Correct: correct, Total: total, XP: xp, Missed: missed.join(' ') });
    updateReview(kid.Name, missed, right, t);
  } finally {
    lock.releaseLock();
  }
  var dash = buildDashboard(findGirl(kid.Name));
  dash.gameXp = xp;
  return dash;
}

function apiSetPet(name, pin, petId, petName) {
  var kid = auth(name, pin);
  if (PETS.indexOf(petId) < 0) throw new Error('Choose a pet');
  petName = String(petName || '').replace(/[<>"]/g, '').replace(/\s+/g, ' ').trim().slice(0, 16);
  if (!petName) throw new Error('Give your pet a name');
  var fields = { Pet: petId, PetName: petName };
  if (!kid.PetSince) fields.PetSince = today();
  setGirlFields(kid.Name, fields);
  return buildDashboard(findGirl(kid.Name));
}

function cleanIds(list, max) {
  return (Array.isArray(list) ? list : []).map(String).filter(function (s) { return /^[A-Za-z0-9:_-]{1,40}$/.test(s); }).slice(0, max || 10);
}

// Pet growth: game and gate XP plus task points since adoption (tasks done before adopting don't count).
function petInfo(kid) {
  if (PETS.indexOf(kid.Pet) < 0) return null;
  var since = String(kid.PetSince || '');
  var xp = 0;
  readTable('Log').forEach(function (l) { if (l.Girl === kid.Name && String(l.DoneOn) >= since) xp += Number(l.Points) || 0; });
  readTable('Games').forEach(function (g) { if (g.Girl === kid.Name) xp += Number(g.XP) || 0; });
  readTable('Gates').forEach(function (g) { if (g.Girl === kid.Name) xp += Number(g.XP) || 0; });
  var stage = 1;
  PET_STAGES.forEach(function (min, i) { if (xp >= min) stage = i + 1; });
  return { id: kid.Pet, name: kid.PetName || '', xp: xp, stage: stage, from: PET_STAGES[stage - 1], to: PET_STAGES[stage] || null, since: since };
}

function gameStats(kid, t) {
  var rows = readTable('Games').filter(function (g) { return g.Girl === kid.Name; });
  var todayRows = rows.filter(function (g) { return g.Date === t; });
  var week = weekDates(t);
  var weekRows = rows.filter(function (g) { return week.indexOf(g.Date) >= 0; });
  var pct = function (list) {
    var c = 0, n = 0;
    list.forEach(function (g) { c += Number(g.Correct) || 0; n += Number(g.Total) || 0; });
    return n ? Math.round(c / n * 100) : null;
  };
  // Rows with questions; a duel's win bonus is a row without any.
  var played = function (g) { return Number(g.Total) > 0; };
  var recent = {};
  GAMES.forEach(function (name) {
    recent[name] = rows.filter(function (g) { return g.Game === name; }).slice(-3).map(function (g) {
      return Number(g.Total) ? Math.round(Number(g.Correct) / Number(g.Total) * 100) : 0;
    });
  });
  return {
    todayRounds: todayRows.filter(played).length,
    todayXp: todayRows.reduce(function (a, g) { return a + (Number(g.XP) || 0); }, 0),
    dayCap: GAME_XP.dayCap,
    weekRounds: weekRows.filter(played).length,
    weekAvg: pct(weekRows),
    total: rows.filter(played).length,
    recent: recent,
    review: dueReview(kid.Name, t)
  };
}

// Review state per kid, one cell: "id|box|due id|box|due ...". Only items missed at least once.
function readReview(name) {
  var row = readTable('Review').filter(function (r) { return r.Girl === name; })[0];
  var map = {};
  String(row ? row.Items : '').split(' ').forEach(function (p) {
    var a = p.split('|');
    if (a.length === 3) map[a[0]] = { box: Number(a[1]) || 1, due: a[2] };
  });
  return map;
}

function updateReview(name, missed, right, t) {
  var map = readReview(name), changed = false;
  missed.forEach(function (id) { map[id] = { box: 1, due: addDays(t, REVIEW_DAYS[0]) }; changed = true; });
  right.forEach(function (id) {
    var e = map[id];
    if (!e) return;
    changed = true;
    if (e.box >= REVIEW_DAYS.length) { delete map[id]; return; }
    map[id] = { box: e.box + 1, due: addDays(t, REVIEW_DAYS[e.box]) };
  });
  if (!changed) return;
  var ids = Object.keys(map).sort(function (a, b) { return map[a].due < map[b].due ? -1 : 1; }).slice(0, 300);
  upsertRow('Review', 'Girl', name, { Items: ids.map(function (id) { return id + '|' + map[id].box + '|' + map[id].due; }).join(' ') });
}

function dueReview(name, t) {
  var map = readReview(name);
  return Object.keys(map).filter(function (id) { return map[id].due <= t; })
    .sort(function (a, b) { return map[a].due < map[b].due ? -1 : 1; }).slice(0, 30);
}

// ---------- Journey ----------

// Where a kid is on the map. Her stations are the tasks logged since she entered this world:
// each passed gate (Gates tab) stores how many tasks she had logged by then.
function journeyInfo(kid, t) {
  var lv = LEVELS.indexOf(kid.Level) >= 0 ? kid.Level : 'a2';
  var next = LEVELS[LEVELS.indexOf(lv) + 1] || null;
  var tasks = readTable('Log').filter(function (l) { return l.Girl === kid.Name && l.Section !== 'level'; });
  var gates = readTable('Gates').filter(function (g) { return g.Girl === kid.Name; });
  var lastPass = -1;
  gates.forEach(function (g, i) { if (g.Passed === 'yes') lastPass = i; });
  var mine = tasks.slice(lastPass >= 0 ? Number(gates[lastPass].Tasks) || 0 : 0);
  var tries = gates.slice(lastPass + 1), last = tries[tries.length - 1];
  var n = mine.length, avg = avgPercent(mine);
  var ready = n >= JOURNEY.stations || (n >= JOURNEY.early && avg !== null && avg >= JOURNEY.earlyAvg);
  var until = last ? addDays(last.Date, JOURNEY.waitDays) : null;
  var state = !next ? 'top' : !ready ? 'locked' : until && until > t ? 'wait' : 'open';
  return {
    level: lv, label: LEVEL_LABEL[lv], world: LEVELS.indexOf(lv) + 1, name: WORLDS[lv],
    stations: n, goal: JOURNEY.stations, early: JOURNEY.early, earlyAvg: JOURNEY.earlyAvg, avg: avg, tasks: tasks.length,
    done: mine.slice(0, JOURNEY.stations).map(function (l) {
      return { s: l.Section, p: l.Percent === '' || l.Percent === null ? null : Number(l.Percent) };
    }),
    gate: {
      state: state, next: next, nextLabel: next ? LEVEL_LABEL[next] : null, nextName: next ? WORLDS[next] : null,
      items: JOURNEY.items, need: gateNeed(), until: state === 'wait' ? until : null, tries: tries.length,
      last: last ? { correct: Number(last.Correct), total: Number(last.Total), date: last.Date } : null
    },
    worlds: LEVELS.map(function (l) { return { level: l, label: LEVEL_LABEL[l], name: WORLDS[l] }; }),
    passed: gates.filter(function (g) { return g.Passed === 'yes'; }).map(function (g) { return { from: g.From, to: g.To, date: g.Date }; })
  };
}

function gateNeed() { return Math.ceil(JOURNEY.items * JOURNEY.pass / 100); }

// One gate challenge, scored in the app like the games. Passing raises the kid's level: her next
// daily tasks and games come from the new level, and the map starts the next world.
function apiGateResult(name, pin, correct, total, missed, right) {
  var kid = auth(name, pin);
  if (pendingLevelTest(kid)) throw new Error('Take the level test first.');
  correct = Math.round(Number(correct));
  total = Math.round(Number(total));
  if (!(total === JOURNEY.items && correct >= 0 && correct <= total)) throw new Error('Invalid score');
  missed = cleanIds(missed, JOURNEY.items);
  right = cleanIds(right, JOURNEY.items);
  var t = today(), row;
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    invalidate('Gates');
    var j = journeyInfo(kid, t);
    if (j.gate.state === 'wait') throw new Error('The gate opens again on ' + j.gate.until + '.');
    if (j.gate.state !== 'open') throw new Error('The gate is not open yet.');
    var passed = correct >= j.gate.need;
    row = { Timestamp: new Date(), Girl: kid.Name, Date: t, From: j.level, To: j.gate.next, Correct: correct, Total: total,
      Passed: passed ? 'yes' : 'no', Tasks: j.tasks, XP: passed ? JOURNEY.xp : correct * GAME_XP.right };
    appendRow('Gates', row);
    if (passed) setGirlField(kid.Name, 'Level', j.gate.next);
    updateReview(kid.Name, missed, right, t);
  } finally {
    lock.releaseLock();
  }
  try { notifyGate(kid, row); } catch (e) { console.error(e); }
  var dash = buildDashboard(findGirl(kid.Name));
  dash.gateResult = { passed: row.Passed === 'yes', correct: correct, total: total, from: row.From, to: row.To, xp: row.XP };
  return dash;
}

// The admin PIN (Settings) sees every group; a group's ParentPIN sees only that group.
function apiParent(pin) {
  ensureSetup();
  var access = parentAccess(pin);
  return parentData(access.isAdmin ? groups() : [access.group], access.isAdmin, access.isAdmin ? 'admin' : String(access.group.Id));
}

function parentAccess(pin) {
  pin = String(pin).trim();
  var isAdmin = pin === String(getSetting('AdminPIN')).trim();
  var group = isAdmin ? null : groups().filter(function (g) { return String(g.ParentPIN || '').trim() && String(g.ParentPIN).trim() === pin; })[0];
  checkPin('parent', isAdmin || !!group);
  return { isAdmin: isAdmin, group: group };
}

function parentData(list, isAdmin, who) {
  var t = today();
  var logs = readTable('Log');
  var out = list.map(function (g) {
    var id = String(g.Id);
    var kids = kidsIn(id).map(function (k) {
      var d = buildDashboard(k);
      var start = kidStart(k);
      var history = [];
      for (var w = 5; w >= 0; w--) {
        var ref = addDays(weekStart(t), -7 * w);
        if (ref < weekStart(start)) continue;
        var dates = weekDates(ref).filter(function (x) { return x >= start && x <= t; });
        var wl = logs.filter(function (l) { return l.Girl === k.Name && dates.indexOf(l.Date) >= 0; });
        history.push({ week: ref, done: wl.length, expected: dates.length, avg: avgPercent(wl) });
      }
      d.history = history;
      d.recent = logs.filter(function (l) { return l.Girl === k.Name; }).slice(-8).reverse().map(function (l) {
        return { date: l.Date, doneOn: l.DoneOn, section: l.Section, title: l.Title, url: l.URL, correct: l.Correct, total: l.Total, percent: l.Percent, points: l.Points };
      });
      d.email = k.Email;
      if (isAdmin) d.pin = String(k.PIN);
      return d;
    });
    return {
      id: id,
      name: g.Name,
      link: groupLink(id),
      parentPin: isAdmin ? String(g.ParentPIN || '') : undefined,
      email: g.Email,
      goal: {
        goal: Number(g.Goal) || 1500,
        total: kids.reduce(function (a, d) { return a + d.stats.earned; }, 0),
        reward: g.GoalReward || ''
      },
      girls: kids
    };
  });
  return {
    isAdmin: !!isAdmin,
    groups: out,
    sheetUrl: isAdmin ? SpreadsheetApp.getActive().getUrl() : null,
    settings: isAdmin ? { reminderHour: Number(getSetting('ReminderHour')) || 17, lastCallHour: Number(getSetting('LastCallHour')) || null } : null,
    push: {
      key: vapidPublicKey(),
      summaryHour: Number(getSetting('ParentSummaryHour')) || 21,
      devices: readTable('ParentPush').filter(function (r) { return r.Who === who; }).map(function (r) { return { e: r.Endpoint, instant: r.Instant !== 'no' }; })
    },
    levels: LEVELS.map(function (l) { return { id: l, label: LEVEL_LABEL[l] }; }),
    today: t,
    word: wordOfDay(t)
  };
}

// ---------- Admin actions ----------

function apiAdminAddGroup(pin, name, email) {
  ensureSetup();
  if (!parentAccess(pin).isAdmin) throw new Error('Only the admin can add groups');
  name = String(name || '').trim();
  if (!name) throw new Error('Enter a group name');
  if (groups().some(function (g) { return String(g.Name).toLowerCase() === name.toLowerCase(); })) throw new Error('A group with this name already exists');
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  var id, parentPin;
  try {
    var ids = groups().map(function (g) { return String(g.Id); });
    do { id = Math.random().toString(36).slice(2, 8); } while (ids.indexOf(id) >= 0);
    parentPin = uniqueParentPin();
    appendRow('Groups', { Id: id, Name: name, ParentPIN: parentPin, Goal: 1500, GoalReward: 'Pizza party for the group', Email: String(email || '').trim() });
  } finally {
    lock.releaseLock();
  }
  var data = apiParent(pin);
  data.created = { type: 'group', name: name, pin: parentPin, link: groupLink(id) };
  return data;
}

function apiAdminAddKid(pin, name, age, groupId, level) {
  ensureSetup();
  if (!parentAccess(pin).isAdmin) throw new Error('Only the admin can add kids');
  name = String(name || '').trim();
  if (!name) throw new Error('Enter a name');
  if (findGirl(name)) throw new Error('This name is already taken — add a last-name initial');
  if (!findGroup(groupId)) throw new Error('Choose a group');
  if (LEVELS.indexOf(level) < 0) level = 'a2';
  var kidPin = randomPin();
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var count = readTable('Girls').length;
    appendRow('Girls', { Name: name, Age: Number(age) || '', PIN: kidPin, Level: level, Email: '', Redeemed: 0, Color: COLORS[count % COLORS.length], Group: groupId });
  } finally {
    lock.releaseLock();
  }
  var data = apiParent(pin);
  data.created = { type: 'kid', name: name, pin: kidPin, link: groupLink(groupId), group: findGroup(groupId).Name };
  return data;
}

// Reminder times (hours, Asia/Jerusalem). An empty last call turns it off.
function apiAdminSettings(pin, reminderHour, lastCallHour) {
  ensureSetup();
  if (!parentAccess(pin).isAdmin) throw new Error('Only the admin can change settings');
  var r = Number(reminderHour), l = lastCallHour === '' || lastCallHour === null ? '' : Number(lastCallHour);
  if (!(r >= 0 && r <= 23)) throw new Error('Choose a reminder hour');
  if (l !== '' && !(l >= 0 && l <= 23)) throw new Error('Choose a last-call hour');
  if (l !== '' && l <= r) throw new Error('Last call must be later than the daily reminder');
  setSetting('ReminderHour', String(r));
  setSetting('LastCallHour', String(l));
  installTriggers();
  return apiParent(pin);
}

function uniqueParentPin() {
  var taken = groups().map(function (g) { return String(g.ParentPIN); }).concat([String(getSetting('AdminPIN'))]);
  var p;
  do { p = randomPin(); } while (taken.indexOf(p) >= 0);
  return p;
}

// ---------- Dashboard ----------

// A kid's first day = her first assignment (the level test). New kids start today.
function kidStart(kid) {
  var dates = readTable('Assignments').filter(function (a) { return a.Girl === kid.Name; }).map(function (a) { return a.Date; }).sort();
  return dates.length ? dates[0] : today();
}

// New kids (nothing logged yet) do the level test before anything else: no daily tasks and no
// games until it is logged. Returns the pending test ({date, title, url}) or null.
function pendingLevelTest(kid) {
  if (readTable('Log').some(function (l) { return l.Girl === kid.Name; })) return null;
  var start = kidStart(kid);
  var a = ensureAssignments(kid, [start])[start];
  return a && a.section === 'level' ? { date: start, title: a.title, url: a.url } : null;
}

// Today's task for reminders: the pending level test, otherwise today's assignment.
function todayTask(kid) {
  var lt = pendingLevelTest(kid);
  if (lt) return { section: 'level', level: '', title: lt.title, url: lt.url };
  var t = today();
  return ensureAssignments(kid, [t])[t];
}

function buildDashboard(kid) {
  var t = today();
  var pending = pendingLevelTest(kid);
  var start = kidStart(kid);
  var dates = weekDates(t);
  var active = pending ? [] : dates.filter(function (d) { return d >= start && d <= t; });
  var assigned = ensureAssignments(kid, active);
  var logs = readTable('Log').filter(function (l) { return l.Girl === kid.Name; });
  var byDate = {};
  logs.forEach(function (l) { byDate[l.Date] = l; });

  var week = dates.map(function (d) {
    var wd = parseDate(d).getDay();
    var item = { date: d, day: DAY_NAMES[wd], isToday: d === t, isFuture: d > t,
      beforeStart: d < start || (!!pending && d !== pending.date) };
    var sec = assigned[d] ? assigned[d].section : sectionFor(d);
    item.section = sec;
    item.label = SECTIONS[sec].label;
    if (assigned[d]) {
      item.title = assigned[d].title;
      item.url = assigned[d].url;
      item.level = LEVEL_LABEL[assigned[d].level] || '';
    }
    var l = byDate[d];
    if (l) {
      item.done = true;
      item.correct = l.Correct; item.total = l.Total; item.percent = l.Percent; item.points = l.Points;
      item.late = l.DoneOn !== l.Date;
      if (sec === 'level') item.levelResult = LEVEL_LABEL[l.Level] || '';
    }
    return item;
  });

  var earned = totalPoints(logs, start);
  var redeemed = Number(kid.Redeemed) || 0;
  var balance = earned - redeemed;
  var rewards = rewardsFor(groupOf(kid));
  var next = rewards.filter(function (r) { return r.points > balance; })[0] || null;

  return {
    girl: { name: kid.Name, level: kid.Level, levelLabel: LEVEL_LABEL[kid.Level] || kid.Level, color: kid.Color },
    today: t,
    week: week,
    stats: {
      earned: earned, redeemed: redeemed, balance: balance,
      streak: streak(logs, t),
      weekDone: week.filter(function (d) { return d.done; }).length,
      weekTotal: week.filter(function (d) { return !d.beforeStart; }).length,
      avg: avgPercent(logs),
      total: logs.length
    },
    rewards: rewards,
    nextReward: next,
    levelTest: pending,
    journey: pending ? null : journeyInfo(kid, t),
    pet: petInfo(kid),
    games: gameStats(kid, t),
    push: { key: vapidPublicKey(), devices: readTable('Push').filter(function (s) { return s.Girl === kid.Name; }).length },
    word: wordOfDay(t)
  };
}

function totalPoints(logs, start) {
  var sum = 0;
  var weeks = {};
  logs.forEach(function (l) {
    sum += Number(l.Points) || 0;
    var ws = weekStart(l.Date);
    (weeks[ws] = weeks[ws] || {})[l.Date] = true;
  });
  // Full-week bonus: every day of the week (from the kid's first day) done.
  Object.keys(weeks).forEach(function (ws) {
    var expected = weekDates(ws).filter(function (d) { return d >= start; });
    if (expected.every(function (d) { return weeks[ws][d]; })) sum += WEEK_BONUS;
  });
  return sum;
}

function streak(logs, t) {
  var doneDays = {};
  logs.forEach(function (l) { doneDays[l.DoneOn] = true; });
  var d = doneDays[t] ? t : addDays(t, -1);
  var n = 0;
  while (doneDays[d]) { n++; d = addDays(d, -1); }
  return n;
}

function avgPercent(logs) {
  var s = logs.filter(function (l) { return l.Percent !== '' && l.Percent !== null && l.Section !== 'level'; });
  if (!s.length) return null;
  return Math.round(s.reduce(function (a, l) { return a + Number(l.Percent); }, 0) / s.length);
}

function wordOfDay(d) {
  var i = Math.abs(daysBetween(START_DATE, d)) % WORDS.length;
  return { word: WORDS[i][0], meaning: WORDS[i][1] };
}

// ---------- Assignments ----------

function sectionFor(d) {
  var wd = parseDate(d).getDay();
  var s = ROTATION[wd];
  if (s === 'FRIDAY') {
    var wi = Math.round(daysBetween(weekStart(START_DATE), weekStart(d)) / 7);
    s = wi % 2 === 0 ? 'use-of-english' : 'writing';
  }
  return s;
}

// Returns {date: assignment} for the requested dates, creating missing ones.
// A kid's very first assignment is always the level test.
function ensureAssignments(kid, dates) {
  var out = {};
  var used = {};
  var collect = function (rows) {
    rows.forEach(function (a) {
      if (a.Girl !== kid.Name) return;
      used[a.URL] = true;
      out[a.Date] = { section: a.Section, level: a.Level, title: a.Title, url: a.URL };
    });
  };
  collect(readTable('Assignments'));
  var missing = dates.filter(function (d) { return !out[d]; }).sort();
  if (!missing.length) return out;

  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    collect(readTableUncached('Assignments'));
    missing = missing.filter(function (d) { return !out[d]; });
    var first = Object.keys(out).length === 0;
    missing.forEach(function (d, i) {
      var a = first && i === 0 ? LEVEL_TEST : nextExercise(sectionFor(d), kid.Level, used);
      used[a.url] = true;
      out[d] = a;
      appendRow('Assignments', { Girl: kid.Name, Date: d, Section: a.section, Level: a.level, Title: a.title, URL: a.url });
    });
  } finally {
    lock.releaseLock();
  }
  return out;
}

function nextExercise(section, level, used) {
  var byLevel = CATALOG[section];
  var start = Math.max(0, LEVELS.indexOf(level));
  for (var i = start; i < LEVELS.length; i++) {
    var list = byLevel[LEVELS[i]] || [];
    for (var j = 0; j < list.length; j++) {
      if (!used[list[j].u]) return { section: section, level: LEVELS[i], title: list[j].t, url: list[j].u };
    }
  }
  // Everything done: repeat from the kid's level.
  var lv = byLevel[LEVELS[start]] ? LEVELS[start] : Object.keys(byLevel)[0];
  var pick = byLevel[lv][Math.floor(Math.random() * byLevel[lv].length)];
  return { section: section, level: lv, title: pick.t, url: pick.u };
}

// ---------- Reminders (time-driven triggers) ----------

function dailyReminder() {
  try { pushReminders(false); } catch (e) { console.error(e); }
  var t = today();
  var logs = readTable('Log');
  readTable('Girls').forEach(function (k) {
    if (!k.Email) return;
    var done = logs.some(function (l) { return l.Girl === k.Name && l.Date === t; });
    if (done) return;
    var a = todayTask(k);
    MailApp.sendEmail({
      to: k.Email,
      subject: k.Name + ', your 10 minutes of English are waiting!',
      htmlBody: '<p>Hi ' + k.Name + ',</p><p>Today: <b>' + SECTIONS[a.section].label + '</b> — ' + a.title + '</p>' +
        '<p><a href="' + groupLink(groupOf(k)) + '">Open English Quest</a> and keep your streak going.</p>'
    });
  });
}

// Fridays: the owner gets every group; each group with an Email gets its own summary.
function weeklySummary() {
  var data = parentData(groups(), true, 'admin');
  var owner = Session.getEffectiveUser().getEmail();
  if (owner) {
    MailApp.sendEmail({ to: owner, subject: 'English Quest — weekly summary ' + data.today, htmlBody: data.groups.map(summaryHtml).join('<hr>') });
  }
  data.groups.forEach(function (g) {
    if (g.email) MailApp.sendEmail({ to: g.email, subject: 'English Quest — ' + g.name + ' weekly summary', htmlBody: summaryHtml(g) });
  });
}

function summaryHtml(g) {
  var rows = g.girls.map(function (d) {
    return '<tr><td><b>' + d.girl.name + '</b></td><td>' + d.stats.weekDone + '/' + d.stats.weekTotal + '</td><td>' +
      (d.stats.avg === null ? '–' : d.stats.avg + '%') + '</td><td>' + d.stats.streak + '</td><td>' + d.stats.balance + '</td><td>' + d.girl.levelLabel +
      (d.journey ? ' · ' + Math.min(d.journey.stations, d.journey.goal) + '/' + d.journey.goal + (d.journey.gate.state === 'open' ? ' (gate open)' : '') : '') + '</td><td>' +
      d.games.weekRounds + (d.games.weekAvg === null ? '' : ' (' + d.games.weekAvg + '%)') + '</td></tr>';
  }).join('');
  return '<h3>' + g.name + '</h3><table cellpadding="6" border="1" style="border-collapse:collapse"><tr><th>Name</th><th>Week</th><th>Avg</th><th>Streak</th><th>Points</th><th>Level</th><th>Games</th></tr>' +
    rows + '</table><p>Group goal: ' + g.goal.total + ' / ' + g.goal.goal + '</p><p><a href="' + g.link + '">Open English Quest</a></p>';
}

function installTriggers() {
  ScriptApp.getProjectTriggers().forEach(function (tr) {
    var f = tr.getHandlerFunction();
    if (f === 'dailyReminder' || f === 'lastCallReminder' || f === 'parentSummary' || f === 'weeklySummary') ScriptApp.deleteTrigger(tr);
  });
  var hour = Number(getSetting('ReminderHour')) || 17;
  ScriptApp.newTrigger('dailyReminder').timeBased().everyDays(1).atHour(hour).inTimezone(TZ).create();
  var last = Number(getSetting('LastCallHour'));
  if (last) ScriptApp.newTrigger('lastCallReminder').timeBased().everyDays(1).atHour(last).inTimezone(TZ).create();
  var summary = Number(getSetting('ParentSummaryHour'));
  if (summary) ScriptApp.newTrigger('parentSummary').timeBased().everyDays(1).atHour(summary).inTimezone(TZ).create();
  ScriptApp.newTrigger('weeklySummary').timeBased().onWeekDay(ScriptApp.WeekDay.FRIDAY).atHour(12).inTimezone(TZ).create();
}

// ---------- Setup & migrations ----------

function ensureSetup() {
  // A cache flag first: duels poll often, and Script Properties reads have a daily quota.
  var cache = CacheService.getScriptCache();
  if (cache.get('SETUP') === SETUP_VERSION) return;
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('setup') === SETUP_VERSION) { cache.put('SETUP', SETUP_VERSION, 21600); return; }
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    if (props.getProperty('setup') === SETUP_VERSION) return;
    var ss = SpreadsheetApp.getActive();
    ss.setSpreadsheetTimeZone(TZ);
    Object.keys(HEADERS).forEach(function (name) {
      var sh = ss.getSheetByName(name) || ss.insertSheet(name);
      if (sh.getLastRow() === 0) {
        sh.getRange(1, 1, 1, HEADERS[name].length).setValues([HEADERS[name]]).setFontWeight('bold');
        sh.setFrozenRows(1);
      } else {
        // Add columns introduced by later versions.
        var head = sh.getRange(1, 1, 1, Math.max(1, sh.getLastColumn())).getValues()[0];
        HEADERS[name].forEach(function (h) {
          if (head.indexOf(h) < 0) {
            head.push(h);
            sh.getRange(1, head.length).setValue(h).setFontWeight('bold');
          }
        });
      }
      sh.getRange('A:Z').setNumberFormat('@');
    });
    var stray = ss.getSheetByName('Sheet1') || ss.getSheetByName('גיליון1');
    if (stray && ss.getSheets().length > 1) ss.deleteSheet(stray);
    clearCache();

    var defaults = { AdminPIN: randomPin(), ReminderHour: '17', LastCallHour: '20', ParentSummaryHour: '21', FamilyGoal: '1500', FamilyReward: 'Family pizza & movie night out', AppUrl: '', PublicUrl: 'https://yanivkrispel-cyber.github.io/english-quest/' };
    Object.keys(defaults).forEach(function (k) { if (getSetting(k) === null) setSetting(k, defaults[k]); });
    if (getSetting('AppUrl') !== APP_URL) setSetting('AppUrl', APP_URL);

    // v3: groups. The existing family becomes the first (default) group.
    if (readTableUncached('Groups').length === 0) {
      appendRow('Groups', { Id: 'family', Name: 'Family', ParentPIN: '', Goal: getSetting('FamilyGoal') || 1500, GoalReward: getSetting('FamilyReward') || '', Email: '' });
    }
    var firstId = String(readTableUncached('Groups')[0].Id);
    var gs = sheet('Girls');
    if (readTableUncached('Girls').length === 0) {
      [['Ziv', 15, 'b1', '#7b7ff7'], ['Ron', 14, 'b1', '#3cc7b6'], ['Aviv', 12, 'a2', '#f6a04d']].forEach(function (r) {
        appendRow('Girls', { Name: r[0], Age: r[1], PIN: randomPin(), Level: r[2], Redeemed: 0, Color: r[3], Group: firstId });
      });
    } else {
      var values = gs.getDataRange().getValues();
      var col = values[0].indexOf('Group');
      for (var i = 1; i < values.length; i++) {
        if (values[i].join('') !== '' && !String(values[i][col]).trim()) gs.getRange(i + 1, col + 1).setValue(firstId);
      }
    }
    if (readTableUncached('Rewards').length === 0) {
      [[60, 'Choose the Friday dessert'], [120, '30 extra minutes of screen time'], [200, 'Skip one chore of your choice'],
       [300, 'Ice cream / coffee date with Dad'], [450, 'Pick the family movie night + snacks'], [650, '₪75 gift card'],
       [1000, 'Outing of your choice — escape room, bowling…']].forEach(function (r) {
        appendRow('Rewards', { Points: r[0], Reward: r[1] });
      });
    }

    clearCache();
    installTriggers();
    props.setProperty('setup', SETUP_VERSION);
    cache.put('SETUP', SETUP_VERSION, 21600);
  } finally {
    lock.releaseLock();
  }
}

// ---------- Sheet helpers ----------

function sheet(name) { return SpreadsheetApp.getActive().getSheetByName(name); }

// Two cache levels: TABLES lives for one request; CacheService survives across requests
// (sheet reads cost 0.3-1s each). Manual edits in the sheet clear it via onEdit.
var TABLES = {};
var CACHE_TTL = { Girls: 21600, Rewards: 21600, Settings: 21600, Groups: 21600, Push: 21600, ParentPush: 21600, Assignments: 900, Log: 900, Games: 900, Review: 900, Gates: 900, Duels: 900 };
var CHUNK = 30000;

function readTable(name) {
  if (!TABLES[name]) TABLES[name] = cacheGet(name) || cachePut(name, readTableUncached(name));
  return TABLES[name];
}

function cacheGet(name) {
  try {
    var c = CacheService.getScriptCache();
    var n = Number(c.get('T:' + name));
    if (!n) return null;
    var keys = [];
    for (var i = 0; i < n; i++) keys.push('T:' + name + ':' + i);
    var parts = c.getAll(keys), s = '';
    for (var k = 0; k < keys.length; k++) {
      if (parts[keys[k]] === undefined) return null;
      s += parts[keys[k]];
    }
    return JSON.parse(s);
  } catch (e) {
    return null;
  }
}

function cachePut(name, rows) {
  try {
    var s = JSON.stringify(rows), obj = {}, n = Math.max(1, Math.ceil(s.length / CHUNK));
    for (var i = 0; i < n; i++) obj['T:' + name + ':' + i] = s.substr(i * CHUNK, CHUNK);
    obj['T:' + name] = String(n);
    CacheService.getScriptCache().putAll(obj, CACHE_TTL[name] || 600);
  } catch (e) {}
  return rows;
}

function invalidate(name) {
  delete TABLES[name];
  try { CacheService.getScriptCache().remove('T:' + name); } catch (e) {}
}

function clearCache() {
  TABLES = {};
  try { CacheService.getScriptCache().removeAll(Object.keys(HEADERS).map(function (n) { return 'T:' + n; })); } catch (e) {}
}

// Simple trigger: any manual edit in the spreadsheet (PIN, level, rewards...) drops the cache.
function onEdit() {
  clearCache();
}

function readTableUncached(name) {
  var sh = sheet(name);
  if (!sh || sh.getLastRow() < 2) return [];
  var values = sh.getRange(1, 1, sh.getLastRow(), sh.getLastColumn()).getValues();
  var head = values[0];
  return values.slice(1).filter(function (r) { return r.join('') !== ''; }).map(function (r) {
    var o = {};
    head.forEach(function (h, i) { if (h) o[h] = r[i] instanceof Date && h !== 'Timestamp' ? fmt(r[i]) : r[i]; });
    ['Name', 'Group', 'Id'].forEach(function (k) { if (o[k] !== undefined) o[k] = String(o[k]).trim(); });
    if (o.Level !== undefined) o.Level = String(o.Level).trim().toLowerCase().replace('b1+', 'b1-b2');
    return o;
  });
}

// Writes by header name, so it works whatever the column order in the sheet is.
function appendRow(name, obj) {
  var sh = sheet(name);
  var head = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
  sh.appendRow(head.map(function (h) { return obj[h] === undefined ? '' : obj[h]; }));
  invalidate(name);
}

function findGirl(name) {
  return readTable('Girls').filter(function (g) { return g.Name.toLowerCase() === String(name).toLowerCase(); })[0];
}

function setGirlField(name, field, value) {
  var fields = {};
  fields[field] = value;
  setGirlFields(name, fields);
}

function setGirlFields(name, fields) {
  invalidate('Girls');
  var sh = sheet('Girls');
  var values = sh.getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    if (String(values[i][0]).trim() !== name) continue;
    Object.keys(fields).forEach(function (f) {
      var col = values[0].indexOf(f);
      if (col >= 0) sh.getRange(i + 1, col + 1).setValue(fields[f]);
    });
  }
}

// Moves a kid's assignment to another date (used for a level test done after the day it was given).
function moveAssignment(name, from, to) {
  invalidate('Assignments');
  var sh = sheet('Assignments');
  var values = sh.getDataRange().getValues();
  var head = values[0], g = head.indexOf('Girl'), d = head.indexOf('Date');
  for (var i = 1; i < values.length; i++) {
    var date = values[i][d] instanceof Date ? fmt(values[i][d]) : String(values[i][d]);
    if (String(values[i][g]).trim() === name && date === from) { sh.getRange(i + 1, d + 1).setValue(to); return; }
  }
}

// Removes a kid's assignments except the one on keepDate.
function dropAssignmentsExcept(name, keepDate) {
  invalidate('Assignments');
  var sh = sheet('Assignments');
  var values = sh.getDataRange().getValues();
  var head = values[0], g = head.indexOf('Girl'), d = head.indexOf('Date');
  for (var i = values.length - 1; i >= 1; i--) {
    var date = values[i][d] instanceof Date ? fmt(values[i][d]) : String(values[i][d]);
    if (String(values[i][g]).trim() === name && date !== keepDate) sh.deleteRow(i + 1);
  }
}

// Updates the row whose keyField equals key (by header name), or appends one.
function upsertRow(name, keyField, key, fields) {
  invalidate(name);
  var sh = sheet(name);
  var values = sh.getDataRange().getValues();
  var head = values[0], k = head.indexOf(keyField);
  for (var i = 1; i < values.length; i++) {
    if (String(values[i][k]).trim() !== key) continue;
    Object.keys(fields).forEach(function (f) {
      var col = head.indexOf(f);
      if (col >= 0) sh.getRange(i + 1, col + 1).setValue(fields[f]);
    });
    return;
  }
  var obj = {};
  obj[keyField] = key;
  Object.keys(fields).forEach(function (f) { obj[f] = fields[f]; });
  appendRow(name, obj);
}

function getSetting(key) {
  var rows = readTable('Settings').filter(function (r) { return r.Key === key; });
  return rows.length ? String(rows[0].Value) : null;
}

function setSetting(key, value) {
  invalidate('Settings');
  var sh = sheet('Settings');
  var values = sh.getDataRange().getValues();
  for (var i = 1; i < values.length; i++) {
    if (values[i][0] === key) { sh.getRange(i + 1, 2).setValue(value); return; }
  }
  sh.appendRow([key, value]);
}

function auth(name, pin) {
  ensureSetup();
  var g = findGirl(name);
  checkPin('girl:' + String(name).toLowerCase(), !!g && String(g.PIN).trim() === String(pin).trim());
  duelSeen(g.Name);
  return g;
}

function randomPin() { return String(1000 + Math.floor(Math.random() * 9000)); }

// ---------- Date helpers (yyyy-MM-dd strings, Asia/Jerusalem) ----------

function fmt(d) { return Utilities.formatDate(d, TZ, 'yyyy-MM-dd'); }
function today() { return fmt(new Date()); }
function parseDate(s) { var p = s.split('-'); return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]), 12); }
function addDays(s, n) { var d = parseDate(s); d.setDate(d.getDate() + n); return fmt(d); }
function daysBetween(a, b) { return Math.round((parseDate(b) - parseDate(a)) / 86400000); }
function weekStart(s) { return addDays(s, -parseDate(s).getDay()); }
function weekDates(s) { var ws = weekStart(s), out = []; for (var i = 0; i < 7; i++) out.push(addDays(ws, i)); return out; }
