# The friends' pilot (stage 0)

Ten families try the app for four weeks before any store launch. The business plan and the stage 0 plan:
https://claude.ai/artifact/J4PsX6RjnC5mFsHWSthZBL and https://claude.ai/artifact/TMdgEfLfF1aq32TPcsuzer.
Built 2026-10-26 (overnight). Server: `src/Pilot.js`. UI: the "friends' pilot" block in `src/Index.html`.

## Joining from one link

`?join=<code>` opens Hebrew, right-to-left screens for the parent: what the app is, what is kept about the child
(privacy, one consent checkbox), the family form (family name, parent's name, a 4-digit parent code, optional email,
1 to 5 kids with an English first name and a grade), then a done screen with each kid's PIN, a ready WhatsApp message per
kid, "open on this phone", install steps for iPhone or Android, and the way into the parent area.

- `Settings.InviteCode` and `Settings.InviteOpen` (`yes` = open). SETUP v16 creates a random code and leaves the link
  closed. The admin opens and closes it, and copies a ready invite, from the Pilot card in the admin view.
- `apiJoin` makes the group (`Groups.Parent`, `Joined`, `Consent`) and the kids (`Level` from the grade:
  `GRADE_LEVEL`). A taken kid name gets the family's initial ("Tali L."). At most 15 families a day.
- The admin's phone gets a push when a family joins.
- **Simpler since 2026-10-27** (the first family pressed back on the done screen, lost the codes and signed up twice): each step
  is a history entry and the draft is kept as typed (`eq_join`); the phone keeps the family (`eq_family`), so the invite
  opened again, or back, shows the **family page** (`familyPage`), never a fresh form. Each kid gets a **personal link**
  (`kidLink`: `?g=<id>#hi=<base64 name.PIN>`; the #part never reaches a server, `takeHi` signs her in), sent by WhatsApp or
  opened on this phone; the PIN is only a backup. The parent area has the same two buttons per kid, so the parent code is the
  one thing a parent remembers. A phone that knows no family (the installed iPhone app starts with empty storage) shows
  `signIn` (name, then PIN) instead of the default group's kids.

## The level test in the app

New kids with missions (`dash.girl.inApp`) take the level test in the app instead of test-english.com. Adaptive blocks
of five game items from `docs/games.js` (Match it, Hear it, Spot it, Build it and one more), starting at the grade's
level: 4 or 5 right moves up, 2 or fewer down, 3 stops; at most five blocks. The level is the highest block with 3 of 5
(`placeLevel`; a strong B1 with 2 of 5 at B2, or 3 of 5 at B2, is B1+). Form A uses half of the items (by id hash)
and the retest, form B, the other half.

- `apiPlacement(name, pin, form, level, correct, total, detail)`: form A logs the level like the old link did
  (through `apiSubmit`); form B only records. Tab `Placements`.
- About 25 days after form A, home offers the progress check (form B). Parents see both levels under each kid.

## Parents

- Non-admin parents see the parent area in Hebrew, right to left (`PHE`, `T(en, he)`); the admin keeps English.
- "ספרו לנו": stars and a note (`apiFeedback`, tab `Feedback`, a push to the admin).

## The teacher

`?missions&t=<Settings.TeacherCode>` opens the mission gallery in teacher mode: every mission of every level, and
"Something wrong here?" asks for a short note that goes to `Flags` with `Girl = Teacher` (`apiTeacherFlag`). The admin's
Pilot card shows the teacher link and the number of notes.

## The admin's Pilot card

`apiPilotStats`: families that joined from the link, per kid: level test done, missions done, days active in weeks 1 to
4 since joining, active days in the last 7; totals, latest feedback, teacher notes, the invite link (open/close).

## Measuring the pilot (night review 2026-11-01, finding 16)

The pilot answers one question: do kids come back to practise on their own? Comparing the level test before and after four
weeks is not proof of learning, so the decision rests on habit and the parents' word.

- **North star: practice days a week per kid, target at least 4 of 7.** A practice day is a day with a task or mission (Log),
  a game round (Games) or a talk with Chacho (Chats). The Pilot card shows the average over the last 7 days, how many kids
  reached 4, and the last six weeks (Sunday to Saturday).
- **Retention by sign-up week.** A kid's first day is her family's `Joined` day (families from before the link: `Settings.PilotFrom`).
  D1 = practised the next day, D7 = on one of days 7 to 13, D30 = on one of days 30 to 36. A kid counts once her days are over.
- **Feature use.** The phone counts which parts a kid opened (missions, games, talks, the tabs, duels, the shop, the Nest...,
  `USE_IDS` in Index.html, `USE_FEATURES` in `src/Ops.js`) and sends the counts with her next call that checks her PIN: no
  call of its own and nothing third party. The server keeps one row per kid, day and part (tab Usage: Date, Girl, Feature,
  Opens), written in batches by `auditFlush` (a few hundred rows a day for 100 kids, inside the free plan). The card lists
  every part with the kids who opened it and how often, for 7 and 28 days, so unused parts stand out.

## The pilot gate (written 2026-11-01)

Checked in the window **23.11.2026 to 27.11.2026** (four weeks after the families joined; `PILOT_GATE` in `src/Ops.js`). The pilot
passes when both hold:

1. **At least 60% of the kids are still practising in week 4**: practice on 2 or more days in their fourth week (days 22 to 28, the first day being day 1)
   (kids who have had four full weeks).
2. **The parents' NPS is at least 30.** From the stars in "ספרו לנו" (Feedback), each family's latest: 5 stars = promoter,
   4 = passive, 1 to 3 = detractor; NPS = % promoters minus % detractors. Before the window, ask every family for their stars once.

The Pilot card shows both numbers all along and "passed / not passed" from 23.11. Passed: go on to the store plan
(`specs/store-readiness.md`). Not passed: no new features; find out with the families why kids stopped (the feature table and the
retention weeks show where), fix that, and run the gate again four weeks later. The north star (4 of 7 days) is the aim, not a
condition of the gate.

## Content for four weeks

Missions grew from 59 to 183 (2026-10-26): per level grammar 1 to 9 (C1 to 10), vocabulary 1 to 5, listening 1 to 9,
reading 1 to 4, Use of English 1 to 4 (not at C1). Written by parallel writers and reviewed by a strict reviewer per
level. A Writing Friday (no writing missions yet) gives a kid with missions a Use of English mission, or grammar at C1
(`nextExercise`), so no day sends a pilot kid out of the app.

## Name

The app is called **English with Chacho** (2026-10-26): the store and trademark check found no app with that name and
both `englishwithcoco.com` and `.app` free. Chacho the parrot is the app icon (`make-icons.py`). The repo, the sheet and the
code keep the old name.

**Switching family (2026-10-28):** the phone remembers one family (`eq_group`). The kids' picker has "Not your family? Switch"
(`switchFamily`: forgets the family and its cached kids, opens `signIn`), and every family link, the main one too, carries `?g=`.
