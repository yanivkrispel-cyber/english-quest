// What a kid learned, in one plain Hebrew sentence for the parents (the night review, finding 14, 2026-11-01): the parents'
// kid card, the 21:00 summary and the weekly email all use learnedLine(). Built from the rows the parents' view already
// reads (Log, Games, Chats; kidRows is the request memo), the mission index (Hebrew topic name `he`, new words `w`) and the
// Nest index (the unit's Hebrew title), so it costs no extra sheet read per kid.
// The Hebrew rules: numbers next to words, never a dash between numbers; English words stay as they
// are and the app puts them in <bdi>.

// A topic's Hebrew name when the mission has none yet (missions get `he` from docs/missions/*.js).
var SECTION_HE = { grammar: 'דקדוק', vocabulary: 'אוצר מילים', listening: 'האזנה', reading: 'קריאה', writing: 'כתיבה',
  'use-of-english': 'שימוש בשפה', level: 'מבחן רמה' };

// The level is the track the practice is built for, not a measured CEFR result (finding 12): "מסלול A2" plus what it means.
var LEVEL_TRACK_HE = {
  a1: 'מילים ראשונות ומשפטים קצרים על עצמי, על המשפחה ועל היום יום',
  a2: 'משפטים פשוטים על דברים מוכרים: בית הספר, תחביבים, קניות ומה עשינו אתמול',
  b1: 'לספר על חוויה, להסביר תוכנית ולהביע דעה בשיחה פשוטה',
  'b1-b2': 'שלב מעבר: טקסטים ארוכים יותר ושיחה על נושאים פחות מוכרים',
  b2: 'להבין טקסטים ארוכים ולדבר בשטף על הרבה נושאים',
  c1: 'שפה עשירה ומדויקת: רמזים, סגנון וטקסטים מורכבים'
};
function levelTrack(level) {
  if (!LEVEL_TRACK_HE[level]) return null;
  return { label: LEVEL_LABEL[level], he: LEVEL_TRACK_HE[level] };
}

// "משימה אחת" / "3 משימות": Hebrew counts with the number before the word, one in words.
function heCount(n, one, many) { return n === 1 ? one : n + ' ' + many; }

// The Nest's monthly report (games plan phase 6): this month and the one before, from the kid's own Log rows (kidRows, the
// request memo): lessons logged, days played, and the words met for the first time that month. The app turns these and the
// kid's word stats (nest.known) into the report's can-do lines. Nothing is stored for it.
function nestMonths(kid, t) {
  var logs = kidRows('Log', kid.Name).filter(function (l) { return l.Section === 'nest'; }), first = {};
  logs.forEach(function (l) {
    var d = String(l.Date);
    String(l.Detail || '').split(',').forEach(function (x) {
      var p = x.split(':');
      if (!p[0] || (p[1] !== '0' && p[1] !== '1')) return;
      if (!first[p[0]] || d < first[p[0]]) first[p[0]] = d;
    });
  });
  var now = String(t).slice(0, 7), prev = addDays(now + '-01', -1).slice(0, 7);
  return [now, prev].map(function (m) {
    var rows = logs.filter(function (l) { return String(l.Date).slice(0, 7) === m; });
    var days = rows.map(function (l) { return String(l.Date); }).filter(function (d, i, a) { return a.indexOf(d) === i; });
    return { month: m, lessons: rows.length, days: days.length, fresh: Object.keys(first).filter(function (id) { return first[id].slice(0, 7) === m; }) };
  });
}

function nestTitleHe(dayId) {
  var id = String(dayId || '').split('.')[0], u = nestUnits().filter(function (x) { return x[0] === id; })[0];
  return u ? (u[3] || u[1]) : '';
}

// The sentence for a set of dates (a week, or one day), without the "השבוע:" in front. { text, any }.
function learnedLine(kid, dates) {
  var inDates = function (r) { return dates.indexOf(String(r.Date)) >= 0; };
  var logs = kidRows('Log', kid.Name).filter(inDates);
  var games = kidRows('Games', kid.Name).filter(function (g) { return inDates(g) && Number(g.Total) > 0; });
  var parts = [], hard = '';
  if (isNest(kid)) {
    var lessons = logs.filter(function (l) { return l.Section === 'nest'; }), units = [], found = {}, missed = {};
    lessons.forEach(function (l) {
      var u = nestTitleHe(l.Mission);
      if (u && units.indexOf(u) < 0) units.push(u);
      String(l.Detail || '').split(',').forEach(function (x) {
        var p = x.split(':');
        if (!p[0]) return;
        if (p[1] === '1') found[p[0]] = (found[p[0]] || 0) + 1; else if (p[1] === '0') missed[p[0]] = (missed[p[0]] || 0) + 1;
      });
    });
    var words = Object.keys(found).concat(Object.keys(missed)).filter(function (w, i, a) { return a.indexOf(w) === i; });
    if (lessons.length) parts.push(heCount(lessons.length, 'שיעור אחד בקן', 'שיעורים בקן') + (units.length ? ' (' + units.slice(0, 3).join(', ') + ')' : ''));
    if (words.length) parts.push(heCount(words.length, 'מילה אחת באנגלית', 'מילים באנגלית'));
    var practice = Object.keys(missed).filter(function (w) { return missed[w] > (found[w] || 0); }).slice(0, 3);
    if (practice.length) hard = 'עוד מתאמנים על ' + practice.join(', ');
  } else {
    var tasks = logs.filter(function (l) { return l.Section !== 'level' && l.Section !== 'nest'; }), topics = [], newWords = 0, low = null;
    tasks.forEach(function (l) {
      var m = l.Mission ? missionOf(l.URL) : null;
      var topic = (m && m.h) || SECTION_HE[l.Section] || '';
      if (topic && topics.indexOf(topic) < 0) topics.push(topic);
      if (m && m.w) newWords += Number(m.w) || 0;
      var pct = l.Percent === '' || l.Percent == null ? null : Number(l.Percent);
      if (pct != null && pct < 70 && (!low || pct < low.pct)) low = { pct: pct, topic: topic };
    });
    if (logs.some(function (l) { return l.Section === 'level'; })) parts.push('מבחן רמה');
    if (tasks.length) parts.push(heCount(tasks.length, 'משימה אחת', 'משימות') + (topics.length ? ' (' + topics.slice(0, 3).join(', ') + ')' : ''));
    if (newWords) parts.push(heCount(newWords, 'מילה חדשה אחת', 'מילים חדשות'));
    if (games.length) parts.push(heCount(games.length, 'סבב משחק אחד', 'סבבי משחק'));
    var chats = kidRows('Chats', kid.Name).filter(inDates);
    if (chats.length) parts.push(heCount(chats.length, 'שיחה אחת עם צ׳אצ׳ו', 'שיחות עם צ׳אצ׳ו'));
    if (low && low.topic && tasks.length > 1) hard = 'הכי קשה: ' + low.topic;
  }
  if (!parts.length) return { text: '', any: false };
  return { text: parts.join(', ') + '.' + (hard ? ' ' + hard + '.' : ''), any: true };
}

// The week's sentence for the parents' card and the weekly email: "השבוע: 3 משימות (...), 8 מילים חדשות. הכי קשה: ...".
function learnedWeek(kid, t) {
  var dates = weekDates(t).filter(function (d) { return d <= t; }), r = learnedLine(kid, dates);
  return r.any ? 'השבוע: ' + r.text : 'השבוע עוד אין תרגול.';
}
function learnedDay(kid, t) {
  var r = learnedLine(kid, [t]);
  return r.any ? r.text : 'היום עוד אין תרגול.';
}

// The weekly email for a family, in Hebrew, right to left: each kid's sentence and track.
function learnedEmailHtml(g) {
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var bidi = function (s) { return esc(s).replace(/([A-Za-z][A-Za-z0-9'’+.\- ]*[A-Za-z0-9+])/g, '<bdi>$1</bdi>'); };
  var rows = g.girls.map(function (d) {
    var tr = d.track;
    return '<div style="margin:0 0 14px"><b><bdi>' + esc(d.girl.name) + '</bdi></b><br>' + bidi(d.learned || '') +
      (d.nest ? '' : '<br><span style="color:#555">' + 'ימי תרגול השבוע: ' + d.stats.weekDone + ' מתוך ' + d.stats.weekTotal + '</span>') +
      (tr ? '<br><span style="color:#555">מסלול <bdi>' + esc(tr.label) + '</bdi>: ' + esc(tr.he) + '</span>' : '') + '</div>';
  }).join('');
  return '<div dir="rtl" lang="he" style="text-align:right;font-family:Arial,sans-serif;font-size:15px;line-height:1.6">' +
    '<h3 style="margin:0 0 12px">' + esc(g.name) + ': מה למדנו השבוע</h3>' + rows +
    '<p><a href="' + esc(g.link) + '">לפתוח את <bdi>English with Chacho</bdi></a></p></div>';
}
