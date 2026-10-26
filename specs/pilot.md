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

## Content for four weeks

Missions grew from 59 to 183 (2026-10-26): per level grammar 1 to 9 (C1 to 10), vocabulary 1 to 5, listening 1 to 9,
reading 1 to 4, Use of English 1 to 4 (not at C1). Written by parallel writers and reviewed by a strict reviewer per
level. A Writing Friday (no writing missions yet) gives a kid with missions a Use of English mission, or grammar at C1
(`nextExercise`), so no day sends a pilot kid out of the app.

## Name

The app is called **English with Coco** (2026-10-26): the store and trademark check found no app with that name and
both `englishwithcoco.com` and `.app` free. Coco the parrot is the app icon (`make-icons.py`). The repo, the sheet and the
code keep the old name.
