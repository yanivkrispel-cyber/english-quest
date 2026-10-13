# Today's Mission (phase 1: the pilot)

The daily task moves from a link to test-english.com into the app. The plan, the competitor check and the owner's
picks: https://claude.ai/artifact/9ajUGftfHuLqXCPPaZGqJx (picks in its db at `picks/owner`: Hebrew help on demand,
writing checked by Coco and sent to the parents, speaking as an optional bonus, a story for the journey, a family week
and a dinner question). Phase 1 is the engine, five mission types and a pilot week of content for all six levels.

## What stays the same

- The weekly rotation (`ROTATION`), catch-up days, the points (10, +5 for 80%+, +3 on the day), the journey stations,
  the rewards ladder and the coins. A mission is a daily task: it writes the same `Log` row the old "I'm done" sheet did,
  with the score measured by the app instead of typed.
- The topic map is test-english.com's (`CATALOG`): a mission covers one catalog topic at one level, in the same order.
  The site's terms forbid copying its material, so every text, recording and question is written from scratch.

## The pilot switch

`Settings.MissionPilot`: names (comma separated) or `all`. Only those kids get missions; everybody else keeps the link
exactly as before. Empty by default, so a deploy changes nothing until a name is added.

For a kid in the pilot, `nextExercise` first takes the next topic at her level that has a mission and that she has not
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
  questions, then Use it (Teach your pet and a sentence of her own).
- **Word Pack** (`vocabulary`): eight word cards, then games on the same words (choose, hear, spell, sort), then a short
  text with gaps.
- **Radio Show** (`listening`): key words, then an episode in parts; each part plays (a recording, or the phone's voice
  when the recording is missing) and asks its questions; then a second listen.
- **Story Cards** (`reading`): a text in cards with questions after each card, Read to me, word detective, the big
  question.
- **Newsroom** (`use-of-english`): a short text with gaps, then review questions.

Question kinds: `mc` (choose; `___` marks the gap), `tf` (right or wrong), `type` (type a word or two; tolerant),
`build` (tap the words in order), `spot` (tap the wrong word; `*word*`, `fix`), `teach` (spot, said by the pet),
`sort` (put words into two or three groups; one question), `spell` (letter tiles; one question), `hear` (the phone says
it, choose), `find` (tap a word in the story), `gaps` (a text with several gaps; one question per gap). Every question
has `why`, shown after the answer; `he` (optional) is the Hebrew tip.

The count of questions is fixed per mission (`msCount` in Index.html; `tools/missions-index.js` uses the same function
and writes `src/MissionIndex.js`: catalog url -> id, questions, dinner question). After two mistakes in a row the next
question shows a reminder card.

## Saving

`apiMissionResult(name, pin, date, mission, correct, total, missed, right, seconds)`: only for a kid in the pilot, only
the mission of that day's assignment, `total` must be the mission's count, at least 30 seconds, once per day. It writes
the `Log` row (new columns `Mission` and `Seconds`), puts the missed questions into the review, notifies the parents and
returns the dashboard. A result that cannot be sent waits on the phone like a game round. A mission left halfway is
kept on the phone and continues from the same question that day (the order of the options is seeded, so it is the
same).

Missed questions come back as a "Mission review" round on the home screen (`apiGameResult` with game `review`, game XP
and the daily cap). "Something wrong here?" under an explanation sends `apiFlag` (tab `Flags`).

## Content and audio

Pilot week: for every level the first three grammar and listening topics, the first two vocabulary topics and the first
reading topic (54 missions); that covers what any kid gets in the coming week, since the app started on 2026-10-08.
Writing (Friday) keeps its link until phase 2. Listening episodes are recorded with Kokoro (`tools/missions_audio.py`,
kokoro-onnx, Apache 2.0) into `docs/missions/audio/<mission>-<part>.mp3`.

Checks: `node test/missions-check.js` (shapes, answers, lengths per level, ids, catalog urls, audio files) and
`node tools/missions-index.js` (writes the index the server reads).
