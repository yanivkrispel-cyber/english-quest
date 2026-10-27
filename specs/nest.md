# Coco's Nest (הקן של קוקו): ages 2 to 7

The owner's go on 2026-10-27 (proposal: https://claude.ai/artifact/UoyjFPsekjTaX8CN6E27LY). Pilot families with small
kids join from the same invite link. Owner's choices: ages 2 to 7; a parent sits with the youngest, older kids play
alone; Hebrew spoken instructions in a high-quality computer voice now (the owner may replace them later); the only
reward is the pet (no shop, no coins on screen).

## Who is a Nest kid

`Girls.Level = 'nest'` (not in `LEVELS`: the level chain, journeys, gates and the catalog never see it). `Girls.Age` is
the real age (2 to 7) and sets the difficulty:

| Age | Pictures to choose from | Written word under the picture |
|---|---|---|
| 2 to 4 | 2 | no |
| 5 | 3 | no |
| 6 to 7 | 3 | yes, after the answer |

Signup (`renderJoin`): the class list starts with גיל 2, גיל 3, גיל 4 (טרום חובה), גיל 5 (גן חובה), כיתה א (6), כיתה ב
(7), then ג to יב as before. The Nest choices send `{ name, age }`, school grades `{ name, grade }`. `apiJoin` makes a
Nest kid with `Level = 'nest'`, `Age = age`. No level test, no link out.

## The day

One unit a day, in the order of `units` in `docs/nest/nest.js` (the server keeps the same order in `src/NestIndex.js`,
written by `node tools/nest-index.js`). The day's unit is an assignment like any other (`Section = 'nest'`,
`URL = 'nest:<unit id>'`), so the week strip, the streak, the parents' views and the pilot board work as they are. When
every unit was played, the order starts again.

A unit is 6 words of one theme, or a review that mixes the words of earlier units. A session takes 5 to 7 minutes:

1. **Meet** (new units only): each word big, Coco says it ("A cat!"); tap the picture to hear it again.
2. **Find it**: Coco asks ("Where is the cat?"), the kid taps one of 2 or 3 pictures. 8 rounds (10 in a review).
   A wrong tap: a soft sound, that picture fades, Coco asks again. A round counts as right on the first tap only.
3. **Say it**: Coco says a word, the kid says it. With the microphone on, a ring shows that the phone hears a voice
   (loudness only: nothing is recorded, nothing leaves the phone, no speech recognition); without it, a big "I said it"
   button. 3 words. Not scored.
4. **Done**: the pet celebrates, stars, "Bye bye!".

Every step starts with a short Hebrew line for the kid (Hila's voice) and Coco's English line; a big speaker button
plays it again. No timers, no fail screens, no text the kid must read. Buttons are at least 88 px.

Result: `apiNestResult(name, pin, date, unitId, correct, total, seconds)`: a `Log` row (`Section = 'nest'`,
`Mission = unitId`), 15 points on the day (12 late), whatever the score. A unit played again the same day is free
play: no row. Points grow the pet.

## Home

`renderNest()`: the pet (or "choose a friend": tap a pet, it gets its default name), Coco, one huge Start for today's
unit, and the units already played as round picture buttons (play again). A small "who's playing" button goes back to
the kid picker. No tabs, journey, shop, duels, Talk with Coco, reminders or stats.

Other kids never see Nest kids in Play together or duo lists.

## Parents

The parent view shows a Nest kid like any kid (week strip, history), plus "what we learned": today's words with their
pictures and a play button for each word.

## Content (`docs/nest/nest.js`)

```js
window.EQ_NEST = {
  units: [
    { id: 'n01', theme: 'hello', title: 'Hello, Coco!', he: 'שלום, קוקו!', icon: 'wave',
      words: [ { id: 'hello', en: 'hello', he: 'שלום', pic: 'wave', say: 'Hello!', find: 'Where is hello?' }, ... ] },
    { id: 'r01', title: 'Review', he: 'חוזרים על הכול', icon: 'star', review: ['n01', 'n02'] },
    ...
  ],
  // Lines every session shares: Hebrew for the kid (Hila) and Coco's English (Kokoro).
  he: { meet: 'הקשיבו לקוקו', find: 'איפה...? לחצו על התמונה', ... },
  en: { meet: "Let's meet new words!", great: 'Great job!', ... }
};
```

A word's picture is one of:
- `pic: '<name>'`: `docs/nest/pics/<name>.webp` (Fluent Emoji 3D, MIT, made by `tools/nest_pics.py`), or
- `color: '#e53935'`: a round color blob drawn in code, or
- `count: 3`: 1 to 10 dots drawn in code.

Audio (`docs/nest/audio/`, `python tools/nest_audio.py`, only what changed): `w-<word id>.mp3` (the word's `say`),
`f-<word id>.mp3` (its `find` question), `en-<key>.mp3` (Kokoro, Coco's voice `af_heart`, slow), `he-<key>.mp3` (Hebrew,
`he-IL-HilaNeural`, recorded once at build time from our own fixed text; nothing about a kid is sent). Raise `NEST_V` in
Index.html after new recordings.

Checks: `node test/nest-check.js` (ids unique, 6 words a unit, every picture and clip exists, reviews point back,
the server index matches).

## Store rules

Nothing new is stored about a kid except the real age (already the `Age` column; now it is the age, not grade + 6, for
Nest kids). The microphone is asked for on the Say it step, with a Hebrew sentence for the parent; without it the button
works. The age band question (Apple's Kids Category has one band an app: 5 and under, 6 to 8, 9 to 11) is in the gaps
list of `specs/store-readiness.md`.
