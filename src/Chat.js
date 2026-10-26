// Talk to Coco (specs/talk.md): short spoken talks with Coco the parrot, scripted in docs/talk/<level>.js on GitHub Pages.
// The phone listens and matches what the kid says to the script; no audio ever leaves the phone. The server keeps a
// summary (how many turns were said aloud, how many with the tiles, and the words the phone heard) and gives a bonus:
// coins and pet XP, never a score. A mission talk (id t<mission>) follows the mission's questions; a home scene
// (id s<level><nn>) is played once a day from the home screen.

var CHAT = { voiceXp: 3, tileXp: 1, allVoice: 3, dayCap: 30, maxTurns: 8, minSeconds: 10, keepIds: 60 };
var CHAT_ID = /^(t(a1|a2|b1|bp|b2|c1)[gvlruw]\d\d|s(a1|a2|b1|bp|b2|c1)\d\d)$/;

// turns: Coco's questions in the talk. voice / tiles: answers said aloud and heard / answered with a tile.
// mic: the phone could listen. said: what the phone heard, one string per answer said aloud.
function apiChatResult(name, pin, id, turns, voice, tiles, mic, said, seconds) {
  var kid = auth(name, pin);
  if (pendingLevelTest(kid)) throw new Error('Take the level test first.');
  id = String(id || '');
  if (!CHAT_ID.test(id)) throw new Error('Unknown talk');
  turns = Math.round(Number(turns));
  voice = Math.round(Number(voice)) || 0;
  tiles = Math.round(Number(tiles)) || 0;
  if (!(turns >= 1 && turns <= CHAT.maxTurns && voice >= 0 && tiles >= 0 && voice + tiles <= turns)) throw new Error('Invalid talk');
  seconds = Math.max(0, Math.min(Math.round(Number(seconds)) || 0, 3600));
  if (seconds < CHAT.minSeconds) throw new Error('That was too quick to count.');
  said = (Array.isArray(said) ? said : []).map(function (s) { return String(s).replace(/[<>|=+@]/g, '').replace(/\s+/g, ' ').trim().slice(0, 160); })
    .filter(Boolean).slice(0, CHAT.maxTurns);
  var where = id.charAt(0) === 't' ? 'mission' : 'home';
  var t = today(), xp;
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var mine = readTableUncached('Chats').filter(function (r) { return r.Girl === kid.Name && r.Date === t; });
    // The bonus once per talk a day, and once a day for a home scene (a second home talk is practice).
    var again = mine.some(function (r) { return r.Talk === id || (where === 'home' && r.Where === 'home'); });
    var used = mine.reduce(function (a, r) { return a + (Number(r.XP) || 0); }, 0);
    xp = again ? 0 : voice * CHAT.voiceXp + tiles * CHAT.tileXp + (voice === turns ? CHAT.allVoice : 0);
    xp = Math.max(0, Math.min(xp, CHAT.dayCap - used));
    appendRow('Chats', { Timestamp: new Date(), Girl: kid.Name, Date: t, Talk: id, Where: where, Level: kid.Level, Turns: turns, Voice: voice,
      Tiles: tiles, Mic: mic ? 'yes' : 'no', XP: xp, Seconds: seconds, Said: said.join(' | ') });
  } finally {
    lock.releaseLock();
  }
  var dash = buildDashboard(findGirl(kid.Name));
  dash.chatXp = xp;
  return dash;
}

// For the dashboard (and so for the parents): today's home scene, the scenes she has had, this week's talks and the
// longest thing she said aloud this week.
function chatInfo(kid, t) {
  var rows = readTable('Chats').filter(function (r) { return r.Girl === kid.Name; });
  var week = weekDates(t), wk = rows.filter(function (r) { return week.indexOf(String(r.Date)) >= 0; });
  var days = {}, best = '';
  wk.forEach(function (r) {
    if (Number(r.Voice) > 0) days[r.Date] = true;
    String(r.Said || '').split(' | ').forEach(function (s) { if (s && (!best || s.split(' ').length > best.split(' ').length)) best = s; });
  });
  var homes = rows.filter(function (r) { return r.Where === 'home'; }).map(function (r) { return String(r.Talk); });
  return {
    homeToday: rows.some(function (r) { return r.Date === t && r.Where === 'home'; }),
    homeDone: homes.slice(-CHAT.keepIds),
    homeCount: homes.length,
    todayXp: rows.filter(function (r) { return r.Date === t; }).reduce(function (a, r) { return a + (Number(r.XP) || 0); }, 0),
    dayCap: CHAT.dayCap,
    week: wk.length,
    weekVoice: wk.filter(function (r) { return Number(r.Voice) > 0; }).length,
    voiceDays: Object.keys(days).length,
    best: best
  };
}

// The admin's view of stage 0 (does a kid talk aloud?): every kid with a talk, this week and last week.
function chatBoard(t) {
  var rows = readTable('Chats'), ws = weekStart(t), last = addDays(ws, -7), out = {};
  rows.forEach(function (r) {
    var k = out[r.Girl] = out[r.Girl] || { name: r.Girl, talks: 0, voice: 0, tiles: 0, turns: 0, days: {}, lastDays: {}, mic: 0, last: '', said: '' };
    var d = String(r.Date);
    k.talks++;
    k.voice += Number(r.Voice) || 0;
    k.tiles += Number(r.Tiles) || 0;
    k.turns += Number(r.Turns) || 0;
    if (r.Mic === 'yes') k.mic++;
    if (Number(r.Voice) > 0 && d >= ws) k.days[d] = true;
    if (Number(r.Voice) > 0 && d >= last && d < ws) k.lastDays[d] = true;
    if (d >= k.last) { k.last = d; if (r.Said) k.said = String(r.Said).split(' | ').pop(); }
  });
  return Object.keys(out).map(function (n) {
    var k = out[n];
    return { name: k.name, talks: k.talks, voicePct: k.turns ? Math.round(k.voice / k.turns * 100) : 0, tilePct: k.turns ? Math.round(k.tiles / k.turns * 100) : 0,
      micPct: Math.round(k.mic / k.talks * 100), week: Object.keys(k.days).length, lastWeek: Object.keys(k.lastDays).length, last: k.last, said: k.said };
  }).sort(function (a, b) { return b.week - a.week || b.talks - a.talks; });
}
