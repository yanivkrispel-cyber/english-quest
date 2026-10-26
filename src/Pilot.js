// The friends' pilot (specs/pilot.md): families join on their own from the owner's invite link, kids find their level
// in the app, parents send feedback, the teacher reviews missions, and the admin sees a funnel per family.

var PILOT = { joinsPerDay: 15, maxKids: 5, feedbackPerDay: 5, teacherFlagsPerDay: 200 };
// The grade a parent picks sets the level the in-app level test starts from.
var GRADE_LEVEL = { 3: 'a1', 4: 'a1', 5: 'a2', 6: 'a2', 7: 'b1', 8: 'b1', 9: 'b1-b2', 10: 'b1-b2', 11: 'b2', 12: 'b2' };

function inviteOk(code) {
  var want = String(getSetting('InviteCode') || '').trim().toLowerCase();
  return !!want && String(getSetting('InviteOpen') || '').trim().toLowerCase() === 'yes' && String(code || '').trim().toLowerCase() === want;
}

// The join screen asks this first, so a closed or wrong link says so before the parent types anything.
function apiJoinCheck(code) {
  ensureSetup();
  return { ok: inviteOk(code) };
}

// data: { family, parent, parentPin, email, consent, kids: [{ name, grade }] }
function apiJoin(code, data) {
  ensureSetup();
  if (!inviteOk(code)) throw new Error('הקישור הזה כבר לא פעיל. בקשו קישור חדש ממי ששלח לכם.');
  data = data || {};
  var clean = function (s, max) { return String(s || '').replace(/[<>"]/g, '').replace(/\s+/g, ' ').trim().slice(0, max); };
  var family = clean(data.family, 40), parentName = clean(data.parent, 40), email = clean(data.email, 80);
  var parentPin = String(data.parentPin || '').trim();
  if (!family) throw new Error('כתבו שם משפחה');
  if (!parentName) throw new Error('כתבו את השם שלכם');
  if (!/^\d{4}$/.test(parentPin)) throw new Error('קוד ההורה צריך להיות 4 ספרות');
  if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) throw new Error('כתובת המייל לא נראית תקינה');
  if (data.consent !== true) throw new Error('צריך לאשר את תנאי הפרטיות כדי להמשיך');
  var kids = (data.kids || []).map(function (k) { return { name: clean(k.name, 20), grade: Number(k.grade) || 0 }; }).filter(function (k) { return k.name; });
  if (!kids.length) throw new Error('הוסיפו לפחות ילד אחד');
  if (kids.length > PILOT.maxKids) throw new Error('אפשר עד ' + PILOT.maxKids + ' ילדים במשפחה');
  kids.forEach(function (k) { if (!GRADE_LEVEL[k.grade]) throw new Error('בחרו כיתה ל' + k.name); });

  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  var id, out = [];
  try {
    var gs = readTableUncached('Groups'), t = today();
    if (gs.filter(function (g) { return String(g.Joined || '').slice(0, 10) === t; }).length >= PILOT.joinsPerDay) throw new Error('הגענו למכסת ההרשמות להיום. נסו שוב מחר.');
    if (String(parentPin) === String(getSetting('AdminPIN')) || gs.some(function (g) { return String(g.ParentPIN) === parentPin; })) throw new Error('הקוד הזה תפוס. בחרו 4 ספרות אחרות.');
    var name = family, n = 2;
    while (gs.some(function (g) { return String(g.Name).toLowerCase() === name.toLowerCase(); })) name = family + ' ' + (n++);
    var ids = gs.map(function (g) { return String(g.Id); });
    do { id = Math.random().toString(36).slice(2, 8); } while (ids.indexOf(id) >= 0);
    appendRow('Groups', { Id: id, Name: name, ParentPIN: parentPin, Goal: 1500, GoalReward: 'ערב פיצה משפחתי', Email: email,
      Parent: parentName, Joined: Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd HH:mm'), Consent: t });
    var girls = readTableUncached('Girls'), taken = girls.map(function (k) { return String(k.Name).toLowerCase(); });
    kids.forEach(function (k, i) {
      // Names are unique across the app: a second Noa becomes "Noa K." (the family's initial), then a number.
      var nm = k.name, initial = family.charAt(0).toUpperCase(), m = 2;
      if (taken.indexOf(nm.toLowerCase()) >= 0) nm = k.name + ' ' + initial + '.';
      while (taken.indexOf(nm.toLowerCase()) >= 0) nm = k.name + ' ' + (m++);
      taken.push(nm.toLowerCase());
      var pin = randomPin();
      appendRow('Girls', { Name: nm, Age: k.grade + 6, PIN: pin, Level: GRADE_LEVEL[k.grade], Email: '', Redeemed: 0,
        Color: COLORS[(girls.length + i) % COLORS.length], Group: id, Missions: '' });
      out.push({ name: nm, pin: pin, grade: k.grade });
    });
  } finally {
    lock.releaseLock();
  }
  try { notifyAdmin({ title: 'משפחה חדשה הצטרפה: ' + family, body: parentName + ' · ' + out.map(function (k) { return k.name; }).join(', ') }); } catch (e) { console.error(e); }
  return { groupId: id, family: family, link: groupLink(id), parentPin: parentPin, kids: out };
}

function notifyAdmin(msg) {
  var endpoints = readTable('ParentPush').filter(function (r) { return r.Who === 'admin'; }).map(function (r) { return r.Endpoint; });
  if (endpoints.length) deliver(endpoints, msg, 'ParentPush');
}

// The in-app level test (adaptive blocks from the game bank). form 'A' = the first test, which also logs the level
// like the old link did; form 'B' (or later) = a retest for the before/after report, which does not change the level.
function apiPlacement(name, pin, form, level, correct, total, detail) {
  var kid = auth(name, pin);
  form = String(form || 'A').toUpperCase().slice(0, 1);
  if (LEVELS.indexOf(level) < 0) throw new Error('Unknown level');
  correct = Number(correct) || 0; total = Number(total) || 0;
  if (total < 5 || correct > total) throw new Error('The test is not finished');
  var dash;
  if (form === 'A') {
    var pending = pendingLevelTest(kid);
    if (!pending) throw new Error('Your level is already set.');
    dash = apiSubmit(name, pin, pending.date, correct, total, level);
  }
  var d = {};
  try { d = typeof detail === 'string' ? JSON.parse(detail) : (detail || {}); } catch (e) { d = {}; }
  appendRow('Placements', { Timestamp: new Date(), Girl: kid.Name, Date: today(), Form: form, Start: String(d.start || ''), Level: level,
    Correct: correct, Total: total, Detail: JSON.stringify(d).slice(0, 2000) });
  var out = buildDashboard(findGirl(kid.Name));
  if (dash) out.justEarned = dash.justEarned;
  return out;
}

// A parent's note ("Tell us"): kept in the Feedback tab and pushed to the owner.
function apiFeedback(pin, text, score) {
  ensureSetup();
  var access = parentAccess(pin);
  var who = access.isAdmin ? 'admin' : String(access.group.Id);
  text = String(text || '').replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 1000);
  score = Math.max(0, Math.min(5, Number(score) || 0));
  if (!text && !score) throw new Error('כתבו משהו או בחרו ציון');
  var t = today();
  if (readTable('Feedback').filter(function (f) { return f.Who === who && f.Date === t; }).length >= PILOT.feedbackPerDay) return { ok: true };
  appendRow('Feedback', { Timestamp: new Date(), Who: who, Group: access.isAdmin ? 'admin' : access.group.Name, Date: t, Score: score || '', Text: text });
  if (!access.isAdmin) try { notifyAdmin({ title: 'משוב מ' + access.group.Name + (score ? ' · ' + score + '/5' : ''), body: text.slice(0, 120) }); } catch (e) { console.error(e); }
  return { ok: true };
}

// The teacher plays missions in the preview (?missions&t=<code>) and leaves notes on questions.
function apiTeacherFlag(code, missionId, itemId, note) {
  ensureSetup();
  var want = String(getSetting('TeacherCode') || '').trim();
  checkPin('teacher', !!want && String(code || '').trim() === want);
  missionId = String(missionId || '').replace(/[^A-Za-z0-9]/g, '').slice(0, 12);
  itemId = cleanIds([itemId], 1)[0] || '';
  note = String(note || '').replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 500);
  if (!missionId) throw new Error('Unknown mission');
  var t = today();
  if (readTable('Flags').filter(function (f) { return f.Girl === 'Teacher' && f.Date === t; }).length >= PILOT.teacherFlagsPerDay) return { ok: true };
  appendRow('Flags', { Timestamp: new Date(), Girl: 'Teacher', Date: t, Mission: missionId, Item: itemId, Note: note });
  return { ok: true };
}

function apiTeacherCheck(code) {
  ensureSetup();
  var want = String(getSetting('TeacherCode') || '').trim();
  checkPin('teacher', !!want && String(code || '').trim() === want);
  return { ok: true };
}

// The admin's pilot board: per family, where each kid is in the funnel and how active she was.
function apiPilotStats(pin) {
  ensureSetup();
  if (!parentAccess(pin).isAdmin) throw new Error('Only the admin can see this');
  var t = today(), logs = readTable('Log'), games = readTable('Games'), places = readTable('Placements'), fb = readTable('Feedback'), flags = readTable('Flags');
  var active = {};
  logs.forEach(function (l) { (active[l.Girl] = active[l.Girl] || {})[String(l.DoneOn || l.Date)] = true; });
  games.forEach(function (g) { (active[g.Girl] = active[g.Girl] || {})[String(g.Date)] = true; });
  var fams = groups().filter(function (g) { return String(g.Joined || ''); }).map(function (g) {
    var joined = String(g.Joined).slice(0, 10);
    var kids = kidsIn(String(g.Id)).map(function (k) {
      var days = Object.keys(active[k.Name] || {}).filter(function (d) { return d >= joined; }).sort();
      var week = function (w) { var a = addDays(joined, 7 * w), b = addDays(joined, 7 * w + 6); return days.filter(function (d) { return d >= a && d <= b; }).length; };
      var pl = places.filter(function (p) { return p.Girl === k.Name; });
      var missions = logs.filter(function (l) { return l.Girl === k.Name && l.Mission; }).length;
      return { name: k.Name, level: LEVEL_LABEL[k.Level] || k.Level, placed: pl.length > 0, retest: pl.some(function (p) { return p.Form !== 'A'; }),
        missions: missions, days: days.length, weeks: [week(0), week(1), week(2), week(3)], last: days.length ? days[days.length - 1] : '',
        last7: days.filter(function (d) { return d > addDays(t, -7); }).length };
    });
    return { id: String(g.Id), name: g.Name, parent: g.Parent || '', joined: joined, day: daysBetween(joined, t) + 1, kids: kids,
      feedback: fb.filter(function (f) { return f.Who === String(g.Id); }).length };
  });
  var all = [].concat.apply([], fams.map(function (f) { return f.kids; }));
  return {
    families: fams,
    totals: { families: fams.length, kids: all.length, placed: all.filter(function (k) { return k.placed; }).length,
      firstMission: all.filter(function (k) { return k.missions > 0; }).length, active7: all.filter(function (k) { return k.last7 >= 4; }).length },
    feedback: fb.slice(-12).reverse().map(function (f) { return { group: f.Group, date: f.Date, score: f.Score, text: f.Text }; }),
    teacherFlags: flags.filter(function (f) { return f.Girl === 'Teacher'; }).length,
    teacherCode: String(getSetting('TeacherCode') || ''),
    base: String(getSetting('PublicUrl') || ''),
    invite: { open: String(getSetting('InviteOpen') || '') === 'yes', code: String(getSetting('InviteCode') || '') }
  };
}

// Opens or closes the invite link (and sets its code).
function apiPilotInvite(pin, open, code) {
  ensureSetup();
  if (!parentAccess(pin).isAdmin) throw new Error('Only the admin can change this');
  code = String(code || '').replace(/[^A-Za-z0-9-]/g, '').slice(0, 24);
  if (code) setSetting('InviteCode', code);
  if (!getSetting('InviteCode')) setSetting('InviteCode', Math.random().toString(36).slice(2, 8));
  setSetting('InviteOpen', open ? 'yes' : 'no');
  return apiPilotStats(pin);
}

// The kid's in-app level tests for the dashboard: the first level, the retest, and whether the retest is due
// (about four weeks after the first test).
function placementInfo(kid) {
  var rows = readTable('Placements').filter(function (p) { return p.Girl === kid.Name; });
  if (!rows.length) return null;
  var a = rows.filter(function (p) { return p.Form === 'A'; })[0] || rows[0], b = rows.filter(function (p) { return p.Form !== 'A'; }).pop() || null;
  var view = function (p) { return p ? { date: p.Date, level: p.Level, label: LEVEL_LABEL[p.Level] || p.Level, correct: Number(p.Correct), total: Number(p.Total) } : null; };
  return { a: view(a), b: view(b), due: !b && daysBetween(a.Date, today()) >= 25 };
}
