# Today's Mission (phase 1)

The daily task moves from a link to test-english.com into the app. The plan, the competitor check and the owner's
picks: https://claude.ai/artifact/9ajUGftfHuLqXCPPaZGqJx (picks in its db at `picks/owner`: Hebrew help on demand,
writing checked by Chacho and sent to the parents, speaking as an optional bonus, a story for the journey, a family week
and a dinner question). Phase 1 is the engine, five mission types and a first week of content for all six levels.

## What stays the same

- The weekly rotation (`ROTATION`), catch-up days, the points (10, +5 for 80%+, +3 on the day), the journey stations,
  the rewards ladder and the coins. A mission is a daily task: it writes the same `Log` row the old "I'm done" sheet did,
  with the score measured by the app instead of typed.
- The topic map is test-english.com's (`CATALOG`): a mission covers one catalog topic at one level, in the same order.
  The site's terms forbid copying its material, so every text, recording and question is written from scratch.

## Who gets missions

Every kid, by default (the owner's choice on 2026-10-13, after a one-day pilot behind `Settings.MissionPilot`, which
SETUP v15 removed). `Girls.Missions = no` keeps a kid on the link exactly as before; the admin's add-kid form offers it
("Daily task: test-english.com"), and the sheet takes it for anyone else.

For a kid with missions on, `nextExercise` first takes the next topic at her level that has a mission and that she has not
had yet (`MISSION_INDEX`), then falls back to the old order (a link). An assignment made before (a catch-up day) shows its
mission too when its topic has one.

## A mission

One file per level, `docs/missions/<a1|a2|b1|bp|b2|c1>.js` (kept out of `src/`, like `games.js`; raise `MISSIONS_V` in
Index.html after a change), loaded when a mission opens and kept by the service worker. Mission ids: level code +
section letter + the topic's place in the catalog (`a2g05` = the fifth A2 grammar topic). Question ids for the review:
`x:<mission>:<n>`.

Five parts, always in this order: Hook (a curious question, answered at the end; not scored), Learn (one card: a rule,
eight words, key words before listening, or a story's title and a guess), Practice, Use it, Finish. Types:

- **Grammar Lab** (`grammar`): rule card (form, lines, examples with sound, a Hebrew tip on demand), then steps of
  questions, then Use it (Teach your pet and a sentence to finish). Sentences of her own are the Writer's Desk below.
- **Word Pack** (`vocabulary`): eight word cards, then games on the same words (choose, hear, spell, sort), then a short
  text with gaps.
- **Radio Show** (`listening`): key words, then an episode in parts; each part plays (a recording, or the phone's voice
  when the recording is missing) and asks its questions; then a second listen.
- **Story Cards** (`reading`): a text in cards with questions after each card, Read to me, word detective, the big
  question.
- **Newsroom** (`use-of-english`): a short text with gaps, then review questions.
- **Writer's Desk** (`writing`, the writing days; night review 2026-11-01, finding 13): a tip card with a model, seven quick
  questions on the language of the task, then Use it is one `write` question (below).

Question kinds: `mc` (choose; `___` marks the gap), `tf` (right or wrong), `type` (type a word or two; tolerant),
`build` (tap the words in order), `spot` (tap the wrong word; `*word*`, `fix`), `teach` (spot, said by the pet),
`sort` (put words into two or three groups; one question), `spell` (letter tiles; one question), `hear` (the phone says
it, choose), `find` (tap a word in the story), `gaps` (a text with several gaps; one question per gap), `write` (the
Writer's Desk: one to three sentences of her own; one question). Every question has `why`, shown after the answer; `he`
(optional) is the Hebrew tip.

## The Writer's Desk (`write`)

The kid writes one to three sentences to a task, at her level: at A1 (and where an A2 task wants it) a frame with one to
three boxes (`frame: 'My hobby is ___. I like it because ___.'`, `fill` = the example, which is the model), from A2 up a
text box (400 characters at most). Fields: `task` (at most 120 characters, never asking for personal details: no full
name, address, school, phone, photo; missions-check refuses the words), `tip`, `n` (sentences, [lowest, highest], 1 to 3),
`len` (words, within the level's range in missions-check), `need` (up to three checks of the task's language: `t` the
line shown, `any` words or phrases, one of which must be there, and/or `re` a pattern), `ideas` (up to six word chips that
go where she types), `model` (Chacho's version), `why`, `he`.

The checklist (`msWriteCheck`, simple rules on the phone; no AI, nothing is sent to check it): written in English, each
sentence starts with a capital letter (and a lone "i" is not), it ends with a full stop, the number of sentences, the
number of words, and the task's own checks. A frame checks that every box is filled instead of capitals and full stops.
Every line says what to fix, kindly ("You have 9. Add a little more."). Not all green on the first Check: she can fix it
once (Check again) or keep it as it is; then Chacho's version and the tip are shown. The question counts as right when
every check is green in the end; it never goes to the Mission review (there is no single right answer). missions-check
runs the same function on every model, so a model that fails its own checklist cannot ship.

Typing never redraws the screen (the word count and the Check button follow the text). On a phone the keyboard must not
break the play frame: while she types, `kbdFit` (visualViewport) makes the frame the part of the screen above the
keyboard and hides the pet, the parts bar and the explanation; Enter in the last box closes the keyboard so Check is in
sight. Check it in `test/fit.html` ("keyboard open" line) and on a real phone.

Saving: what she wrote goes with the result, `apiMissionResult(..., seconds, writing)` with `writing = [{ n, text, first,
checks }]` (older apps send nothing, and the mission saves as before). The server keeps only the mission's own `write`
questions (`MISSION_INDEX[url].w`: question number -> task, written by `tools/missions-index.js`), once each, in the
`Writing` tab: one line, no markup, at most 400 characters, and a leading `= + - @` gets an apostrophe so the sheet never
reads it as a formula (`writingClean` / `sheetText`). Her last five pieces are in her dashboard (`writing`): the Me tab
shows three under "My writing" with the teacher's mark and note (a dot on the Me tab for a new note), and her parents see
five in the kid's card ("כתיבה באנגלית"), with her first try and the checklist score. No other kid sees them.

The teacher (`?missions&t=<code>`, "Writer's Desk: the kids' writing to mark"): the newest 60 pieces of every level,
without names (level, day, mission, task, the text and the first try), a mark (Excellent, Good work, Keep practising) and
one preset note (`WRITING.comments` in Missions.js; free text never reaches a kid), `apiTeacherWriting` / `apiTeacherMark`,
in the audit trail. Writing rows are deleted with the kid and after a year (`retentionSweep`).

Content: four Writer's Desk missions per level (`<level>w01` to `w04`, the first four writing topics of the catalog, 24
in all), which cover the writing days of the first two months (writing is every other Friday). When a level's run out, a
writing day gives a Use of English or a grammar mission as before (`nextExercise`).

## Say it again (night review 2026-11-01, finding 13)

Repeated reading for fluency, before the finish of every mission: she reads one model sentence aloud twice (the mission's
`say`, or the first example of its card, its first word's example, the first line of the show or the story, or the
Writer's Desk model; 4 to 16 words). The phone's speech recognition times each reading (from the start of speech to its
end) and the screen shows the words a minute and how many words it heard, kindly ("Smoother the second time!"). Not
scored, nothing kept or sent. Only when the parent's microphone switch for the kid is on (`micAllowed(kid)`; until the
switch is merged it returns false, so kids do not see the step) and the phone can listen; the mission preview shows it on
any device that can listen. A microphone that says no: a toast, and Continue.

The count of questions is fixed per mission (`msCount` in Index.html; `tools/missions-index.js` uses the same function
and writes `src/MissionIndex.js`: catalog url -> id, questions, dinner question). After two mistakes in a row the next
question shows a reminder card.

## Saving

`apiMissionResult(name, pin, date, mission, correct, total, missed, right, seconds, writing)`: only for a kid with missions on, only
the mission of that day's assignment, `total` must be the mission's count, at least 30 seconds, once per day. It writes
the `Log` row (new columns `Mission` and `Seconds`), puts the missed questions into the review, notifies the parents and
returns the dashboard. A result that cannot be sent waits on the phone like a game round. A mission left halfway is
kept on the phone and continues from the same question that day (the order of the options is seeded, so it is the
same).

Missed questions come back as a "Mission review" round on the home screen (`apiGameResult` with game `review`, game XP
and the daily cap). "Something wrong here?" under an explanation sends `apiFlag` (tab `Flags`).

## Content and audio

The first week: for every level the first three grammar and listening topics, the first two vocabulary topics and the first
reading topic (54 missions); that covers what any kid gets in the coming week, since the app started on 2026-10-08.
Writing days have the Writer's Desk since 2026-11-01 (above). Listening episodes are recorded with Kokoro (`tools/missions_audio.py`,
kokoro-onnx, Apache 2.0) into `docs/missions/audio/<mission>-<part>.mp3`.

Checks: `node test/missions-check.js` (shapes, answers, lengths per level, ids, catalog urls, audio files, the Writer's
Desk items and their models against the app's own checklist) and
`node tools/missions-index.js` (writes the index the server reads).
