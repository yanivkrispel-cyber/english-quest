# New Nest lines to record

Written by `node tools/nest-new-lines.js` from `EQ_NEST.wait` in `docs/nest/nest.js`. Do not edit by hand: change the
content, then run the tool again (`node test/nest-check.js` fails when this file is out of date).

Nothing here is recorded yet, so kids never meet it: a waiting game is left out of the lessons and the playground (the
teacher's preview and the test pages play it with the phone's voice).

After recording:

1. English lines: Chacho's English voice (`specs/voice.md`: `python tools/voice.py` records only new lines; the files go to
   `docs/nest/audio/`). Hebrew lines: the Hebrew guidance voice (Chatterbox Multilingual from niqqud text, as for package
   B; the files go to `docs/nest/he/<key>.mp3`).
2. Take the recorded keys (and a game whose lines are all recorded) out of `EQ_NEST.wait`, run this tool again and
   `node test/nest-check.js`.
3. Raise `NEST_V` in `src/Index.html`, then `node build-pages.js`.

## Games waiting

- `starts`
- `trace`

## Chacho's English lines

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/en-starts.mp3` | Which one starts the same? | Starts like (ages 6 and 7): every round, right after Chacho says the word ("sun ... Which one starts the same?"), and again after a wrong card |
| `docs/nest/audio/en-same.mp3` | They start the same! | Starts like: after the right card, following both words ("sun, socks ... They start the same!") |
| `docs/nest/audio/en-trace.mp3` | Trace the letter! | Trace it (ages 6 and 7): every letter, before the kid traces it; again when the kid waits (the help ladder) |

## Chacho's Hebrew guidance

| File | Text (Hebrew, how to play: never a translation) | Where it plays |
|---|---|---|
| `docs/nest/he/starts.mp3` | מקשיבים למילה. איזו תמונה מתחילה באותו צליל? | Starts like: before the English, the first two plays when the parent sets Hebrew to always (from age 6 auto is off) |
| `docs/nest/he/trace.mp3` | מעבירים את האצבע על האות, מהנקודה. | Trace it: the same, before "Trace the letter!" |
