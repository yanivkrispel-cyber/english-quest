# Coco's Nest (הקן של קוקו): ages 2 to 7

The owner's go on 2026-10-27 (proposal: https://claude.ai/artifact/UoyjFPsekjTaX8CN6E27LY). Pilot families with small
kids join from the same invite link. Owner's choices: ages 2 to 7; a parent sits with the youngest, older kids play
alone; the only reward is the pet (no shop, no coins on screen).

**No Hebrew voice (owner, 2026-10-27: "בלי עברית וכרגע בלי הקלטות").** The kid hears only Coco's English, in Kokoro.
Coco shows each game himself, a hand shows where to tap or drag, and the instructions are short English lines that come
back every day. Hebrew is text for grown-ups only (the parents' card, the microphone sheet, the note behind a long press
on Coco). No human recordings for now. The games plan: https://claude.ai/artifact/GfzVYFfXfE4HRa2nMKy13T (phases 1 to 4
built 2026-10-27).

## Who is a Nest kid

`Girls.Level = 'nest'` (not in `LEVELS`: the level chain, journeys, gates and the catalog never see it). `Girls.Age` is
the real age (2 to 7) and sets the difficulty:

| Age | Words | Pictures to choose from | Written word |
|---|---|---|---|
| 2 to 3 | the 4 core words of a unit | 2 | no |
| 4 | all | 2 | no |
| 5 | all | 3 | no |
| 6 to 7 | all | 3 | yes (under pictures, story lines, word cards in Pairs) |

Signup (`renderJoin`): the class list starts with גיל 2, גיל 3, גיל 4 (טרום חובה), גיל 5 (גן חובה), כיתה א (6), כיתה ב
(7), then ג to יב as before. The Nest choices send `{ name, age }`, school grades `{ name, grade }`. `apiJoin` makes a
Nest kid with `Level = 'nest'`, `Age = age`. No level test, no link out.

## The week: four days a unit

The server gives one day a day, in the order of `src/NestIndex.js` (written by `node tools/nest-index.js` from the
units in `docs/nest/nest.js`). A new unit is four days, a review (after every two units) is one: 24 units and 12
reviews are 108 days, about 21 weeks of five days. The day is an assignment like any other (`Section = 'nest'`,
`URL = 'nest:<day id>'`), so the week strip, the streak, the parents' views and the pilot board work as they are. The
next day is the first one not played yet (`nestNext`), so a missed day never skips one; after the last, around again.

| Day id | Day | What the session has |
|---|---|---|
| `n04` | New words | Meet (each word, then the phrase from age 4), Find it ×6, Peekaboo ×3, Say it ×3 (from age 4 the last is the phrase) |
| `n04.b` | Move | Coco says ×3 (×2 for ages 2 and 3), Give it to me ×3 (or Pop it when the unit has nothing to give), Find it ×4, Say it ×2 |
| `n04.c` | Song and story | The unit's chant, its story (5 pages, then Find it ×2 about it), the big picture ×4 (×3) |
| `n04.d` | Games | Ages 2 and 3: Pop it, Who says that? (or Peekaboo), Give it to me (or Find it), the chant. Ages 4 and 5: Sort it, Pairs, Color it (Get dressed in a clothes unit), Who says that? (or Pop it). Ages 6 and 7: Pairs with written words, Odd one out ×3, What's missing ×2, Color it (Get dressed) |
| `r02` | Review | Find it ×5 over both units and up to 3 words due again, Peekaboo and Pop it (2 and 3) or What's missing and Pairs, Teach a grown-up ×3, a chant |

Words due again on a review day: words of earlier units missed more often than found, or not met for a week (from the
kid's `known` stats, below). A session takes 5 to 10 minutes.

## The games (`docs/nest/play.js`)

Every game shares one frame (the play frame: nothing scrolls), Coco in the dock with a cue icon (ear: listen, finger:
tap, grabbing hand: drag, brush: color, runner: move, microphone: say), and these rules:

- **Coco goes first.** While a game is new for this kid on this phone (played fewer than 3 times; always for ages 2 and
  3) its first round is Coco's: the hand does it, Coco celebrates, then "Your turn!". It does not count.
- **A hint, never a fail.** After 7 seconds without a touch the hand shows the way again (every 9 seconds). A wrong tap
  is a soft sound, the picture fades or flies back, Coco says the question again. No timers, no fail screens.
- **Counting.** A round counts on the first try only; a word missed anywhere in the session counts as missed.
- **A note for grown-ups.** A long press on Coco shows a short Hebrew note about the game (`hints` in nest.js).

| Game | Type | Ages | What the kid does |
|---|---|---|---|
| Meet | `meet` | all | hears each word, taps the picture to hear it again |
| Find it | `find` | all | taps the picture Coco asks for |
| Coco says | `move` | all | does the move with the body, taps the green button (nothing is checked, no camera) |
| Say it | `say` | all | says the word; with the microphone on, a ring shows the phone hears a voice (loudness only) |
| Give it to me | `give` | all | drags (or taps) what the pet asks for into the pet; food is munched |
| Peekaboo | `peek` | all | 2 and 3: taps the wiggling bush and sees who hides; from 4: a friend peeks from every bush, Coco asks for one |
| Who says that? | `sound` | all | hears a sound ("Moo!"), taps who makes it |
| Pop it | `pop` | all | bubbles float up slowly; pops the one with the picture Coco says, a few in a row |
| Sort it | `sort` | 4+ | drags each picture into the box of its unit (the box shows the unit's picture) |
| Pairs | `pairs` | 4+ | turns cards (each says its word); from 6 a picture pairs with its written word |
| What's missing? | `missing` | 4+ | looks, "Close your eyes!", one picture is gone: which? |
| Odd one out | `odd` | 6+ | three of one unit and one of another: taps the different one |
| Chant | `chant` | all | drums made in code; Coco says a line on the beat and its picture lights up; twice (listen, sing along) |
| Story | `story` | all | a page at a time in a place drawn in code; taps pictures to hear them; 6 and 7 see the line |
| Big picture | `scene` | all | the unit's things in one place; taps the one Coco asks for |
| Color it | `color` | 3+ | picks the color Coco says, colors his part, then colors the rest freely; kept on the phone (the palette button on the home) |
| Get dressed | `dress` | 3+ | drags the clothes Coco says onto the teddy; they stay on |
| Teach a grown-up | `teach` | all | says the word to Mom or Dad, who taps the thumb |

Shared pieces: `nkHandTap` / `nkHandDrag` (the hand), `nkIdle` (the hint), `nkDrag` (a finger drag with a generous drop
area; a tap flies the picture there), `nkSfx` (pops, flips, munches and the drums, made with Web Audio), `nkPlaceSvg`
(nine places: home, playroom, kitchen, farm, savanna, park, town, beach, sky), `NK_PAGES` (twelve coloring pages drawn
in SVG, `data-r="main"` is the part Coco names). play.js runs in the app's global scope: every top-level name starts
with `nk` / `NK` (or is a `nest*` entry point), and test/nest-check.js fails on a name shared with src/Index.html.

Result: `apiNestResult(name, pin, date, dayId, correct, total, seconds, detail)`: a `Log` row (`Section = 'nest'`,
`Mission = dayId`, `Detail` = each word's first try, `cat:1,dog:0`), 15 points on the day (12 late), whatever the
score. Any other day, or the same day again, is free play: no row. Points grow the pet. `nestInfo` returns `known`:
per word `[days found on the first try, days missed, the last day met]`.

## Home

`renderNest()`: the pet (or "choose a friend": tap a pet, it gets its default name), Coco, one huge Start for today's
day, the units already played as round picture buttons (one of their days again, free play), and the palette button
once the kid has colored a picture. A small "who's playing" button goes back to the kid picker. No tabs, journey, shop,
duels, Talk with Coco, reminders or stats.

Other kids never see Nest kids in Play together or duo lists.

## Parents

The parent view shows a Nest kid like any kid (week strip, history), plus "what we learned": today's unit's words with
their pictures and a play button for each word, the phrase (English, Hebrew, play button) and "לשחק בבית": the unit's two
ideas for home (`home`; on a review day the shared `parent.review` ideas).

## The teacher's preview

`?nest` (the teacher's link `?nest&t=<Settings.TeacherCode>`, copied from the admin's Pilot card) lists every unit. A unit
shows its words (core words ringed), the phrase, the Coco says moves and the parents' card, plays each of its days or any
single game at age 2 to 3, 4, 5 or 6 to 7 (nothing is saved), and with the teacher code takes a note (`apiTeacherFlag`,
tab Flags, Mission = the unit id, Item = `unit`).

## Content (`docs/nest/nest.js`)

```js
window.EQ_NEST = {
  units: [
    { id: 'n01', theme: 'hello', title: 'Hello, Coco!', he: 'שלום, קוקו!', icon: 'wave',
      core: ['hello', 'yes', 'no', 'baby'],
      phrase: { en: "Hello! I'm Coco.", he: 'שלום! אני קוקו.', word: 'parrot' },
      moves: ['wave', 'hug', 'clap'],
      home: ['... {Hello!} ...', '...'],      // Hebrew for parents, English inside {braces}
      words: [ { id: 'hello', en: 'hello', he: 'שלום', pic: 'wave', say: 'Hello!', find: 'Where is hello?' }, ... ] },
    { id: 'r01', title: 'Review', he: 'חוזרים על הכול', icon: 'star', review: ['n01', 'n02'] },
    ...
  ],
  moves: { wave: { en: 'Wave hello!', pic: 'wave' }, ... },   // Coco says
  parent: { review: ['...'] },                                 // the parents' ideas on a review day
  en: { hi: "Hi! Let's play!", turn: 'Your turn!', ... },     // Coco's instructions and praise
  hints: { find: 'מוצאים: ...', ... },                         // the grown-ups' note per game (text)
  give: ['ball', 'apple', 'red', ...],                         // what the pet can ask for
  sounds: { cow: 'Moo!', ... },                                // Who says that?
  dress: { cap: 'head', socks: 'feet', ... },                  // Get dressed: where it goes on the teddy
  color: [ { id: 'car', color: 'blue', say: 'Color the car blue!' }, ... ],
  chants: { n04: [['Cat, cat, meow, meow!', 'cat'], ...] },   // 4 lines a unit, each with a word of the unit
  stories: { n04: { place: 'farm', pages: [['The cow says moo.', ['cow']], ...] } }   // 4 to 6 pages, 1 to 3 pictures
};
```

A word's picture is one of:
- `pic: '<name>'`: `docs/nest/pics/<name>.webp`, or
- `color: '#e53935'`: the clay blob `blob-e53935.webp`, or
- `count: 3`: 1 to 10 clay chicks (`count-token.webp`).

Every picture is a clay sticker made for the Nest in the pets' world (Gemini sheets, `tools/NEST-ART.md`,
`tools/nest_art.py`), written by `tools/nest_pics.py` at 320 px; Fluent Emoji 3D (MIT) is only the fallback for a name with no
clay version. Places and coloring pages are drawn in code.

Audio (`docs/nest/audio/`, `python tools/nest_audio.py`, only what changed; the list is `tools/nest-audio-list.js`), all
Kokoro, Coco's voice `am_fenrir`, slow: `w-<word>` (say), `f-<word>` (find), `p-<unit>` (phrase), `m-<move>` (Coco
says), `g-<word>` ("Give me the ...!"), `s-<word>` (its sound), `d-<word>` ("Put on the ...!"), `k-<page>` (a coloring
page), `c-<unit>-<n>` (a chant line), `t-<unit>-<n>` (a story page), `en-<key>`. Raise `NEST_V` in Index.html after new
recordings (it also versions nest.js and play.js).

Checks: `node test/nest-check.js` (ids unique, 4 to 6 words a unit, 4 core words, phrase, moves, home ideas, one English
word in one unit only, reviews point back, the English lines and the Hebrew notes, chants, stories, sounds, things to give
and wear, coloring pages, every picture and clip exists, play.js names, the server index matches).
`http://localhost:8787/test/nest-games.html?all` (dev server) plays every game at every age in two phone frames and lists
any screen that scrolls; `?unit=n07&game=give&age=4` shows one.

## Store rules

New about a kid: the real age (already the `Age` column) and, per day, each word's first try (`Log.Detail`, deleted with
the kid's rows). On the phone only: how many times each game was played, the microphone choice, and up to 12 colored
pictures (which colors went where). The microphone is asked for on the Say it step, with a Hebrew sentence for the
parent; without it the button works. Drag games need no permission. The age band question (Apple's Kids Category has one
band an app: 5 and under, 6 to 8, 9 to 11) is in the gaps list of `specs/store-readiness.md`.

## History

- 2026-10-27, year plan phase 1 (https://claude.ai/artifact/F8f5DKqozWFJ98y8TNXJMJ): a real hello unit, Let's move in the
  imperative, one meaning per word, Seven to ten with only its 4 numbers, a phrase, core words, Coco says and home ideas
  for every unit.
- 2026-10-27, the games plan phases 1 to 4: no Hebrew voice, the hand and Coco's first round, four days a unit with
  spaced review per word, and the games above. Not built: the monthly report, the word map for parents, weeks 21 to 40,
  first sounds and letter tracing for ages 6 and 7 (phases 5 and 6 of the games plan).

## The playground, one more lesson and the right-answer moment (option C, owner 2026-10-28)

Proposal and the owner's pick: https://claude.ai/artifact/TEp9sYUzd8VUWfGB21H684 (C: a daily lesson plus an open playground).

- **Playground** (`nestPlayground`, `nkPlayStart`, `NK_PLAY` in play.js): the teal puzzle button on the Nest home opens a grid
  of games; each plays one activity (`nkCompose(.., only)`) on every word of the units the kid has played, as a review-like
  unit. Free play: nothing is sent (`NE.play`), Done goes back to the playground. Games open by age (`NK_PLAY[i][1]`); Get
  dressed only after the clothes unit, Chant only with a chant.
- **One more lesson**: `Girls.NestPerDay` (SETUP v21; empty = 1, 0 = no limit), set by the parent in the kid card
  (`apiParentNestPerDay`). Once the day's own lesson is logged, `nestInfo.next` is the next day of the program (`nestNext`) and
  the big button starts it; `apiNestResult` logs it with points only while today's count is under the number. The week strip
  keeps the day's own lesson (the first Nest row of a date).
- **Right answer** (`nkCheer`): the card jumps with a gold glow, stars burst, a gold star flies into the progress row (the
  dots turn gold), Coco hops, a short Web Audio tune (muted with the sound button); every third right answer in a row the
  pet (or Coco) pops up under a rainbow with confetti (`nkParty`). Coco's demo rounds do not count. Reduced motion: no bursts.
- **Play sky** (`nkSkyOn`): a fixed layer behind the session, one of four palettes by unit (sun, clouds, bubbles, hills),
  removed by `nestLeave` and `renderNest`.
- **Try-out gate**: playground, sky and cheer show only for kids in `Settings.NestAll` and the teacher's preview (`nkBeta`)
  until the owner opens them to everyone. Check: `test/tablet.html?screen=nest-home2|nest-ground|nest-cheer[&phones]`.
