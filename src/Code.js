// English Quest — daily English practice tracker for Ziv, Ron and Aviv.
// Web app served from a Sheets-bound Apps Script. All data lives in the bound spreadsheet.

var TZ = 'Asia/Jerusalem';
var START_DATE = '2026-10-08';
var SETUP_VERSION = 'v2';
var LEVELS = ['a1', 'a2', 'b1', 'b1-b2', 'b2', 'c1'];
var LEVEL_LABEL = { a1: 'A1', a2: 'A2', b1: 'B1', 'b1-b2': 'B1+', b2: 'B2', c1: 'C1' };
var LEVEL_TEST = { section: 'level', level: '', title: 'English Level Test', url: 'https://test-english.com/level-test/' };
var SECTIONS = {
  level: { label: 'Level Test', icon: '🎯' },
  grammar: { label: 'Grammar', icon: '📘' },
  vocabulary: { label: 'Vocabulary', icon: '🔤' },
  listening: { label: 'Listening', icon: '🎧' },
  reading: { label: 'Reading', icon: '📖' },
  writing: { label: 'Writing', icon: '✍️' },
  'use-of-english': { label: 'Use of English', icon: '🧩' }
};
// Sunday..Saturday. Friday alternates between Use of English and Writing.
var ROTATION = ['grammar', 'vocabulary', 'listening', 'grammar', 'reading', 'FRIDAY', 'listening'];
var DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var WEEK_BONUS = 20;

var HEADERS = {
  Girls: ['Name', 'Age', 'PIN', 'Level', 'Email', 'Redeemed', 'Color'],
  Assignments: ['Girl', 'Date', 'Section', 'Level', 'Title', 'URL'],
  Log: ['Timestamp', 'Girl', 'Date', 'DoneOn', 'Section', 'Level', 'Title', 'URL', 'Correct', 'Total', 'Percent', 'Points'],
  Rewards: ['Points', 'Reward'],
  Settings: ['Key', 'Value']
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
  var url = ScriptApp.getService().getUrl();
  if (url && getSetting('AppUrl') !== url) setSetting('AppUrl', url);
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('English Quest')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover')
    .setFaviconUrl('https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/72.png');
}

// JSON API for the GitHub Pages front end. Called anonymously (no Google cookies), which also
// avoids Google's under-13 block on Apps Script for signed-in child accounts.
var API = { apiPublic: apiPublic, apiWarm: apiWarm, apiDashboard: apiDashboard, apiSubmit: apiSubmit, apiParent: apiParent };

function doPost(e) {
  var out;
  try {
    var req = JSON.parse(e.postData.contents);
    if (!API.hasOwnProperty(req.fn)) throw new Error('Unknown call');
    out = { ok: true, data: API[req.fn].apply(null, req.args || []) };
  } catch (err) {
    out = { ok: false, error: String((err && err.message) || err) };
  }
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}

// Link sent to the girls (WhatsApp, reminder emails): the public front end when set.
function publicUrl() {
  return getSetting('PublicUrl') || getSetting('AppUrl');
}

// Brute-force guard: 8 wrong PINs for the same name locks it for 15 minutes.
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

// ---------- Client API ----------

function apiPublic() {
  ensureSetup();
  return {
    girls: readTable('Girls').map(function (g) { return { name: g.Name, color: g.Color, age: g.Age }; }),
    word: wordOfDay(today()),
    today: today()
  };
}

// Called when a girl taps her name, while she types her PIN: fills the cache.
function apiWarm() {
  ensureSetup();
  ['Girls', 'Assignments', 'Log', 'Rewards'].forEach(readTable);
  return true;
}

function apiDashboard(name, pin) {
  var girl = auth(name, pin);
  return buildDashboard(girl);
}

function apiSubmit(name, pin, date, correct, total, levelResult) {
  var girl = auth(name, pin);
  var t = today();
  if (weekDates(t).indexOf(date) < 0 || date > t || date < START_DATE) throw new Error('You can only log tasks from this week.');
  var a = ensureAssignments(girl, [date])[date];
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var done = readTableUncached('Log').filter(function (l) { return l.Girl === girl.Name && l.Date === date; });
    if (done.length) throw new Error('This task is already marked as done.');

    correct = Number(correct) || 0;
    total = Number(total) || 0;
    var pct = total > 0 ? Math.round(Math.min(correct, total) / total * 100) : '';
    var onTime = date === t;
    var points;
    if (a.section === 'level') {
      points = 15 + (onTime ? 3 : 0);
      if (levelResult && LEVELS.indexOf(levelResult) >= 0) setGirlField(girl.Name, 'Level', levelResult);
    } else {
      if (total <= 0) throw new Error('Please enter your score.');
      points = 10 + (pct >= 80 ? 5 : 0) + (onTime ? 3 : 0);
    }
    appendRow('Log', {
      Timestamp: new Date(), Girl: girl.Name, Date: date, DoneOn: t, Section: a.section,
      Level: a.section === 'level' ? (levelResult || '') : a.level, Title: a.title, URL: a.url,
      Correct: a.section === 'level' ? '' : correct, Total: a.section === 'level' ? '' : total,
      Percent: pct, Points: points
    });
  } finally {
    lock.releaseLock();
  }
  var fresh = findGirl(girl.Name);
  var dash = buildDashboard(fresh);
  dash.justEarned = dash.week.filter(function (d) { return d.date === date; })[0].points;
  return dash;
}

function apiParent(adminPin) {
  ensureSetup();
  checkPin('admin', String(adminPin) === String(getSetting('AdminPIN')));
  var t = today();
  var girls = readTable('Girls');
  var logs = readTable('Log');
  var res = girls.map(function (g) {
    var d = buildDashboard(g);
    var history = [];
    for (var w = 5; w >= 0; w--) {
      var ref = addDays(weekStart(t), -7 * w);
      if (ref < weekStart(START_DATE)) continue;
      var dates = weekDates(ref).filter(function (x) { return x >= START_DATE && x <= t; });
      var wl = logs.filter(function (l) { return l.Girl === g.Name && dates.indexOf(l.Date) >= 0; });
      history.push({ week: ref, done: wl.length, expected: dates.length, avg: avgPercent(wl) });
    }
    d.history = history;
    d.recent = logs.filter(function (l) { return l.Girl === g.Name; }).slice(-8).reverse().map(function (l) {
      return { date: l.Date, doneOn: l.DoneOn, section: l.Section, title: l.Title, url: l.URL, correct: l.Correct, total: l.Total, percent: l.Percent, points: l.Points };
    });
    d.email = g.Email;
    return d;
  });
  return {
    girls: res,
    family: familyGoal(res),
    sheetUrl: SpreadsheetApp.getActive().getUrl(),
    appUrl: publicUrl(),
    today: t,
    word: wordOfDay(t)
  };
}

// ---------- Dashboard ----------

function buildDashboard(girl) {
  var t = today();
  var dates = weekDates(t);
  var active = dates.filter(function (d) { return d >= START_DATE && d <= t; });
  var assigned = ensureAssignments(girl, active);
  var logs = readTable('Log').filter(function (l) { return l.Girl === girl.Name; });
  var byDate = {};
  logs.forEach(function (l) { byDate[l.Date] = l; });

  var week = dates.map(function (d) {
    var wd = parseDate(d).getDay();
    var item = { date: d, day: DAY_NAMES[wd], isToday: d === t, isFuture: d > t, beforeStart: d < START_DATE };
    var sec = assigned[d] ? assigned[d].section : sectionFor(d);
    item.section = sec;
    item.label = SECTIONS[sec].label;
    item.icon = SECTIONS[sec].icon;
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

  var earned = totalPoints(logs, t);
  var redeemed = Number(girl.Redeemed) || 0;
  var balance = earned - redeemed;
  var rewards = readTable('Rewards').map(function (r) { return { points: Number(r.Points), reward: r.Reward }; })
    .sort(function (a, b) { return a.points - b.points; });
  var next = rewards.filter(function (r) { return r.points > balance; })[0] || null;

  return {
    girl: { name: girl.Name, level: girl.Level, levelLabel: LEVEL_LABEL[girl.Level] || girl.Level, color: girl.Color },
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
    word: wordOfDay(t)
  };
}

function totalPoints(logs, t) {
  var sum = 0;
  var weeks = {};
  logs.forEach(function (l) {
    sum += Number(l.Points) || 0;
    var ws = weekStart(l.Date);
    (weeks[ws] = weeks[ws] || {})[l.Date] = true;
  });
  // Full-week bonus: every day of the week (from the start date) done.
  Object.keys(weeks).forEach(function (ws) {
    var expected = weekDates(ws).filter(function (d) { return d >= START_DATE; });
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

function familyGoal(girlDashes) {
  var goal = Number(getSetting('FamilyGoal')) || 1500;
  var total = girlDashes.reduce(function (a, d) { return a + d.stats.earned; }, 0);
  return { goal: goal, total: total, reward: getSetting('FamilyReward') };
}

function wordOfDay(d) {
  var i = Math.abs(daysBetween(START_DATE, d)) % WORDS.length;
  return { word: WORDS[i][0], meaning: WORDS[i][1] };
}

// ---------- Assignments ----------

function sectionFor(d) {
  if (d === START_DATE) return 'level';
  var wd = parseDate(d).getDay();
  var s = ROTATION[wd];
  if (s === 'FRIDAY') {
    var wi = Math.round(daysBetween(weekStart(START_DATE), weekStart(d)) / 7);
    s = wi % 2 === 0 ? 'use-of-english' : 'writing';
  }
  return s;
}

// Returns {date: assignment} for the requested dates, creating missing ones.
function ensureAssignments(girl, dates) {
  var all = readTable('Assignments');
  var mine = all.filter(function (a) { return a.Girl === girl.Name; });
  var out = {};
  var used = {};
  mine.forEach(function (a) {
    used[a.URL] = true;
    out[a.Date] = { section: a.Section, level: a.Level, title: a.Title, url: a.URL };
  });
  var missing = dates.filter(function (d) { return !out[d]; }).sort();
  if (!missing.length) return out;

  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    readTableUncached('Assignments').forEach(function (a) {
      if (a.Girl !== girl.Name) return;
      used[a.URL] = true;
      out[a.Date] = { section: a.Section, level: a.Level, title: a.Title, url: a.URL };
    });
    missing = missing.filter(function (d) { return !out[d]; });
    missing.forEach(function (d) {
      var sec = sectionFor(d);
      var a = sec === 'level' ? LEVEL_TEST : nextExercise(sec, girl.Level, used);
      used[a.url] = true;
      out[d] = a;
      appendRow('Assignments', { Girl: girl.Name, Date: d, Section: a.section, Level: a.level, Title: a.title, URL: a.url });
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
  // Everything done: repeat from the girl's level.
  var lv = byLevel[LEVELS[start]] ? LEVELS[start] : Object.keys(byLevel)[0];
  var pick = byLevel[lv][Math.floor(Math.random() * byLevel[lv].length)];
  return { section: section, level: lv, title: pick.t, url: pick.u };
}

// ---------- Reminders (time-driven triggers) ----------

function dailyReminder() {
  var t = today();
  var url = publicUrl();
  var logs = readTable('Log');
  readTable('Girls').forEach(function (g) {
    if (!g.Email) return;
    var done = logs.some(function (l) { return l.Girl === g.Name && l.Date === t; });
    if (done) return;
    var a = ensureAssignments(g, [t])[t];
    var s = SECTIONS[a.section];
    MailApp.sendEmail({
      to: g.Email,
      subject: g.Name + ', your 10 minutes of English are waiting!',
      htmlBody: '<p>Hi ' + g.Name + ' 👋</p><p>Today: <b>' + s.label + '</b> — ' + a.title + '</p>' +
        '<p><a href="' + url + '">Open English Quest</a> and keep your streak going 🔥</p>'
    });
  });
}

function weeklySummary() {
  var to = Session.getEffectiveUser().getEmail();
  if (!to) return;
  var data = apiParent(getSetting('AdminPIN'));
  var rows = data.girls.map(function (d) {
    return '<tr><td><b>' + d.girl.name + '</b></td><td>' + d.stats.weekDone + '/' + d.stats.weekTotal + '</td><td>' +
      (d.stats.avg === null ? '–' : d.stats.avg + '%') + '</td><td>' + d.stats.streak + '</td><td>' + d.stats.balance + '</td><td>' + d.girl.levelLabel + '</td></tr>';
  }).join('');
  MailApp.sendEmail({
    to: to,
    subject: 'English Quest — weekly summary ' + data.today,
    htmlBody: '<table cellpadding="6" border="1" style="border-collapse:collapse"><tr><th>Girl</th><th>Week</th><th>Avg</th><th>Streak</th><th>Points</th><th>Level</th></tr>' +
      rows + '</table><p>Family goal: ' + data.family.total + ' / ' + data.family.goal + '</p><p><a href="' + data.appUrl + '">Open English Quest</a></p>'
  });
}

function installTriggers() {
  ScriptApp.getProjectTriggers().forEach(function (tr) {
    var f = tr.getHandlerFunction();
    if (f === 'dailyReminder' || f === 'weeklySummary') ScriptApp.deleteTrigger(tr);
  });
  var hour = Number(getSetting('ReminderHour')) || 17;
  ScriptApp.newTrigger('dailyReminder').timeBased().everyDays(1).atHour(hour).inTimezone(TZ).create();
  ScriptApp.newTrigger('weeklySummary').timeBased().onWeekDay(ScriptApp.WeekDay.FRIDAY).atHour(12).inTimezone(TZ).create();
}

// ---------- Setup ----------

function ensureSetup() {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('setup') === SETUP_VERSION) return;
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
      }
      sh.getRange('A:Z').setNumberFormat('@');
    });
    var stray = ss.getSheetByName('Sheet1') || ss.getSheetByName('גיליון1');
    if (stray && ss.getSheets().length > 1) ss.deleteSheet(stray);

    if (readTable('Girls').length === 0) {
      [['Ziv', 15, randomPin(), 'b1', '', 0, '#7b7ff7'],
       ['Ron', 14, randomPin(), 'b1', '', 0, '#3cc7b6'],
       ['Aviv', 12, randomPin(), 'a2', '', 0, '#f6a04d']].forEach(function (r) {
        ss.getSheetByName('Girls').appendRow(r);
      });
    }
    if (readTable('Rewards').length === 0) {
      [[60, 'Choose the Friday dessert 🍰'],
       [120, '30 extra minutes of screen time 📱'],
       [200, 'Skip one chore of your choice 🧹'],
       [300, 'Ice cream / coffee date with Dad 🍦'],
       [450, 'Pick the family movie night + snacks 🍿'],
       [650, '₪75 gift card 🎁'],
       [1000, 'Outing of your choice — escape room, bowling… 🎳']].forEach(function (r) {
        ss.getSheetByName('Rewards').appendRow(r);
      });
    }
    var defaults = { AdminPIN: randomPin(), ReminderHour: '17', FamilyGoal: '1500', FamilyReward: 'Family pizza & movie night out 🍕', AppUrl: '', PublicUrl: 'https://yanivkrispel-cyber.github.io/english-quest/' };
    Object.keys(defaults).forEach(function (k) { if (getSetting(k) === null) setSetting(k, defaults[k]); });

    clearCache();
    installTriggers();
    props.setProperty('setup', SETUP_VERSION);
  } finally {
    lock.releaseLock();
  }
}

// ---------- Sheet helpers ----------

function sheet(name) { return SpreadsheetApp.getActive().getSheetByName(name); }

// Two cache levels: TABLES lives for one request; CacheService survives across requests
// (sheet reads cost 0.3-1s each). Manual edits in the sheet clear it via onEdit.
var TABLES = {};
var CACHE_TTL = { Girls: 21600, Rewards: 21600, Settings: 21600, Assignments: 900, Log: 900 };
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
    head.forEach(function (h, i) { o[h] = r[i] instanceof Date && h !== 'Timestamp' ? fmt(r[i]) : r[i]; });
    if (o.Name !== undefined) o.Name = String(o.Name).trim();
    if (o.Level !== undefined) o.Level = String(o.Level).trim().toLowerCase().replace('b1+', 'b1-b2');
    return o;
  });
}

function appendRow(name, obj) {
  sheet(name).appendRow(HEADERS[name].map(function (h) { return obj[h] === undefined ? '' : obj[h]; }));
  invalidate(name);
}

function findGirl(name) {
  return readTable('Girls').filter(function (g) { return g.Name.toLowerCase() === String(name).toLowerCase(); })[0];
}

function setGirlField(name, field, value) {
  invalidate('Girls');
  var sh = sheet('Girls');
  var values = sh.getDataRange().getValues();
  var col = values[0].indexOf(field);
  for (var i = 1; i < values.length; i++) {
    if (String(values[i][0]).trim() === name) sh.getRange(i + 1, col + 1).setValue(value);
  }
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
  return g;
}

// ---------- Date helpers (yyyy-MM-dd strings, Asia/Jerusalem) ----------

function fmt(d) { return Utilities.formatDate(d, TZ, 'yyyy-MM-dd'); }
function today() { return fmt(new Date()); }
function parseDate(s) { var p = s.split('-'); return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]), 12); }
function addDays(s, n) { var d = parseDate(s); d.setDate(d.getDate() + n); return fmt(d); }
function daysBetween(a, b) { return Math.round((parseDate(b) - parseDate(a)) / 86400000); }
function weekStart(s) { return addDays(s, -parseDate(s).getDay()); }
function weekDates(s) { var ws = weekStart(s), out = []; for (var i = 0; i < 7; i++) out.push(addDays(ws, i)); return out; }


function randomPin() { return String(1000 + Math.floor(Math.random() * 9000)); }
