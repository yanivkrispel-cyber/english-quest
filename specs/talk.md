# Talk with Coco (stage 0 of speaking)

Short spoken talks with Coco the parrot. The analysis and the plan: https://claude.ai/artifact/1Vsdxd7gaKJCRzE6W6MXAF
(stage 0 = scripted, no AI at run time; the question it answers: do the kids speak English out loud with the app?).
The owner's choices (2026-10-26): talks both inside every mission and once a day from home; Coco speaks (recorded),
the kid's pet cheers; a bonus only, never a score; what the phone heard is kept as text (no audio), parents see a short
summary; when the phone cannot hear, sentence tiles; a writer and a strict reviewer per level; live for everyone.

## What the kid sees

- **Mission talk**: after Use it, before the finish, one talk per mission (`t<mission id>`), about what the mission
  taught. Practice and preview play it without saving; the mission review skips it.
- **Home talk**: a card under today's mission, "Talk with Coco". One scene a day (`s<level><nn>`, 15 per level): the
  first of her level she has not had, then round again. After today's, the card offers "Talk again" (practice).
- The talk screen (play frame): the Hebrew line of the talk on top, the conversation as chat bubbles (each Coco line
  has a replay button), the pet and its line in the dock, and a bar: **עברית** (the Hebrew hint of the question),
  the **mic** (tap and speak), **Ideas** (the 2-3 tiles).
- Coco says each line from a recording (`docs/talk/audio/<clip>.mp3`); without one (no file, offline) the phone's voice
  reads it. The mic is enabled when she has finished.
- An answer: the phone's speech recognition (`en-US`, up to 4 guesses; the first guess that fits a branch wins) or a tile
  (tapping it is the answer; saying it aloud counts as voice). Coco's reply is the branch's `r`, or `o` when nothing
  fits, then the next question. Nothing heard: "Sorry, I didn't catch that..." (and after the second time the tiles
  open). Too few words and nothing fits: "Ooh, tell me a little more!" once. No mic (no API, permission denied): the
  tiles are always on and a note says to tap and say it aloud. A recognizer that never answers is stopped after 12 s.
- The end: a summary (out loud / with a tile / questions), the save status with the XP, Continue (mission) or Finish.

## Content: `docs/talk/<a1|a2|b1|bp|b2|c1>.js`

`window.EQ_TALK.<level> = [ talk, ... ]`, loaded when needed (`loadChat`, `?v=TALK_V`, kept by the service worker; the
mp3 files are left to the browser like the episodes). The format, the matching rules and the writing rules:
`tools/TALK-WRITING.md`. Matching is `chatMatch` in Index.html (`chatNorm`: lower case, numbers to twenty as words,
short forms opened; `chatHit`: a keyword or a simple ending; a branch = every keyword group hit and no `n` word).

Checks: `node test/talk-check.js` (shapes, lengths per level, privacy and harsh words, every mission has a talk, 15 scenes
per level, and every sample answer `x` lands on its expected branch with the app's own matcher). Recordings:
`python tools/talk_audio.py` (Kokoro, voice `af_heart`, only new or changed lines; `tools/talk-audio.json`), then raise
`TALK_V`.

## Server: `src/Chat.js`

(Named Chat because Talk & Tap already owns `talk*` and `TALK`.)

- `apiChatResult(name, pin, id, turns, voice, tiles, mic, said, seconds)`: checks the id's shape, the counts and at
  least 10 seconds; writes a `Chats` row (Talk, Where = mission | home, Level, Turns, Voice, Tiles, Mic, XP, Seconds,
  Said = what the phone heard, joined with ` | `, cleaned). XP: 3 per answer said aloud, 1 per tile, +3 when all aloud;
  once per talk a day and one home talk a day; at most 30 a day. Talk XP counts as coins (`coinsOf`) and pet XP.
- `chatInfo(kid, t)` in the dashboard (`dash.chat`): homeToday, homeDone, homeCount, todayXp, week, weekVoice,
  voiceDays, best (the longest thing heard this week). Parents see "N/M talks out loud" and that sentence.
- `chatBoard(t)` in `apiPilotStats` (`chat`): per kid, talks, % aloud, % with a mic, days aloud this week and last week,
  the last thing heard. The admin's Pilot card shows it with the stage 0 gate: how many talk aloud 3+ days a week.
- Results that cannot be sent wait on the phone (`queueResult({ fn: 'chat', args })`).

## The gate (from the plan)

At least half of the pilot kids speak aloud at least 3 times a week for two weeks. The admin card shows it per week.

## Preview and teacher review

`?talk` (and the button in the mission gallery) lists the home talks of each level; mission talks play at the end of
each mission in `?missions`. With the teacher code, every Coco line has "Something wrong here?" (`apiTeacherFlag`,
Mission = the talk id, Item = `c:<talk>:<turn><c|r1|o>`).
