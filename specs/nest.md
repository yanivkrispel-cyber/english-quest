# Chacho's Nest (הקן של צ׳אצ׳ו): ages 2 to 7

The owner's go on 2026-10-27 (proposal: https://claude.ai/artifact/UoyjFPsekjTaX8CN6E27LY). Pilot families with small
kids join from the same invite link. Owner's choices: ages 2 to 7; a parent sits with the youngest, older kids play
alone; the only reward is the pet (no shop, no coins on screen).

**Changed 2026-10-31: Chacho now says in Hebrew how to play** (package B, see "Hebrew guidance" at the end): short Hebrew
*instructions* only (what to do in a game), never translations of the English words; the parent's switch `Girls.NestHebrew`.
What follows was the rule until then. **No Hebrew voice (owner, 2026-10-27: "בלי עברית וכרגע בלי הקלטות").** The kid hears
Chacho's English (Chatterbox since 2026-10-29, `specs/voice.md`; Kokoro before): Chacho shows each game himself, a hand shows
where to tap or drag, and the instructions are short English lines that come back every day. Hebrew is text for grown-ups
(the parents' card, the microphone sheet, the note behind a long press on Chacho). The games plan: https://claude.ai/artifact/GfzVYFfXfE4HRa2nMKy13T (phases 1 to 4
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
| `n04.b` | Move | Chacho says ×3 (×2 for ages 2 and 3), Give it to me ×3 (or Pop it when the unit has nothing to give), Find it ×4, Say it ×2. Ages 6 and 7: Trace it ×2 and Find it ×2 instead of Find it ×4 (once Trace it is recorded) |
| `n04.c` | Song and story | The unit's chant, its story (5 pages, then Find it ×2 about it), the big picture ×4 (×3) |
| `n04.d` | Games | Ages 2 and 3: Pop it, Who says that? (or Peekaboo), Give it to me (or Find it), the chant. Ages 4 and 5: Sort it, Pairs, Color it (Get dressed in a clothes unit), Who says that? (or Pop it). Ages 6 and 7: Pairs with written words, Odd one out ×3, What's missing ×2 (Starts like ×3 once it is recorded), Color it (Get dressed) |
| `r02` | Review | Find it ×5 over both units and up to 3 words due again, Peekaboo and Pop it (2 and 3) or What's missing and Pairs, Teach a grown-up ×3, a chant |

Words due again on a review day: words of earlier units missed more often than found, or not met for a week (from the
kid's `known` stats, below). A session takes 5 to 10 minutes.

## The games (`docs/nest/play.js`)

Every game shares one frame (the play frame: nothing scrolls), Chacho in the dock with a cue icon (ear: listen, finger:
tap, grabbing hand: drag, brush: color, runner: move, microphone: say), and these rules:

- **Chacho goes first.** While a game is new for this kid on this phone (played fewer than 3 times; always for ages 2 and
  3) its first round is Chacho's: the hand does it, Chacho celebrates, then "Your turn!". It does not count.
- **A hint, never a fail.** After 7 seconds without a touch the hand shows the way again (every 9 seconds). A wrong tap
  is a soft sound, the picture fades or flies back, Chacho says the question again. No timers, no fail screens.
- **Counting.** A round counts on the first try only; a word missed anywhere in the session counts as missed.
- **A note for grown-ups.** A long press on Chacho shows a short Hebrew note about the game (`hints` in nest.js).

| Game | Type | Ages | What the kid does |
|---|---|---|---|
| Meet | `meet` | all | hears each word, taps the picture to hear it again |
| Find it | `find` | all | taps the picture Chacho asks for |
| Chacho says | `move` | all | does the move with the body, taps the green button (nothing is checked, no camera) |
| Say it | `say` | all | says the word; with the microphone on, a ring shows the phone hears a voice (loudness only) |
| Give it to me | `give` | all | drags (or taps) what the pet asks for into the pet; food is munched |
| Peekaboo | `peek` | all | 2 and 3: taps the wiggling bush and sees who hides; from 4: a friend peeks from every bush, Chacho asks for one |
| Who says that? | `sound` | all | hears a sound ("Moo!"), taps who makes it |
| Pop it | `pop` | all | bubbles float up slowly; pops the one with the picture Chacho says, a few in a row |
| Sort it | `sort` | 4+ | drags each picture into the box of its unit (the box shows the unit's picture) |
| Pairs | `pairs` | 4+ | turns cards (each says its word); from 6 a picture pairs with its written word |
| What's missing? | `missing` | 4+ | looks, "Close your eyes!", one picture is gone: which? |
| Odd one out | `odd` | 6+ | three of one unit and one of another: taps the different one |
| Chant | `chant` | all | drums made in code; Chacho says a line on the beat and its picture lights up; twice (listen, sing along) |
| Story | `story` | all | a page at a time in a place drawn in code; taps pictures to hear them; 6 and 7 see the line |
| Big picture | `scene` | all | the unit's things in one place; taps the one Chacho asks for |
| Color it | `color` | 3+ | picks the color Chacho says, colors his part, then colors the rest freely; kept on the phone (the palette button on the home) |
| Get dressed | `dress` | 3+ | drags the clothes Chacho says onto the teddy; they stay on |
| Teach a grown-up | `teach` | all | says the word to Mom or Dad, who taps the thumb |
| Starts like | `starts` | 6+ | hears a met word (its picture on top, the word written with its first letter in color); taps the picture that starts with the same sound |
| Trace it | `trace` | 6+ | traces the small letter with a finger from the dot, stroke by stroke; it turns into the picture of a met word that starts with it, and Chacho says the word |

Shared pieces: `nkHandTap` / `nkHandDrag` (the hand), `nkIdle` (the hint), `nkDrag` (a finger drag with a generous drop
area; a tap flies the picture there), `nkSfx` (pops, flips, munches and the drums, made with Web Audio), `nkPlaceSvg`
(nine places: home, playroom, kitchen, farm, savanna, park, town, beach, sky), `NK_PAGES` (twelve coloring pages drawn
in SVG, `data-r="main"` is the part Chacho names). play.js runs in the app's global scope: every top-level name starts
with `nk` / `NK` (or is a `nest*` entry point), and test/nest-check.js fails on a name shared with src/Index.html.

Result: `apiNestResult(name, pin, date, dayId, correct, total, seconds, detail)`: a `Log` row (`Section = 'nest'`,
`Mission = dayId`, `Detail` = each word's first try, `cat:1,dog:0`), 15 points on the day (12 late), whatever the
score. Any other day, or the same day again, is free play: no row. Points grow the pet. `nestInfo` returns `known`:
per word `[days found on the first try, days missed, the last day met]`.

## Home

`renderNest()`: the pet (or "choose a friend": tap a pet, it gets its default name), Chacho, one huge Start for today's
day, the units already played as round picture buttons (one of their days again, free play), and the palette button
once the kid has colored a picture. A small "who's playing" button goes back to the kid picker, for grown-ups only (below,
"Grown-ups only"). No tabs, journey, shop, duels, Talk with Chacho, reminders or stats, and no points or streak numbers.

Other kids never see Nest kids in Play together or duo lists.

## Parents

The parent view shows a Nest kid like any kid (week strip with Hebrew day letters, history), with the week in one Hebrew
sentence (`src/Learned.js`: lessons and their units, words met, the words still practiced; the same sentence goes into the
21:00 summary and the weekly email), today's screen time ("זמן מסך היום: 12 מתוך 30 דקות"), no points, streak or average,
plus "what we learned": today's unit's words with their pictures and a play button for each word, the phrase (English, Hebrew,
play button) and "לשחק בבית": the unit's two ideas for home (`home`; on a review day the shared `parent.review` ideas). For
ages 2 and 3 the card adds "משחקים ביחד": sit next to the kid, point at the pictures together and say the words after Chacho
(AAP and WHO: young kids learn best from a screen with a grown-up). The parent sets the screen time (below), lessons a day
and the arcade's share in the kid card.

## The teacher's preview

`?nest` (the teacher's link `?nest&t=<Settings.TeacherCode>`, copied from the admin's Pilot card) lists every unit. A unit
shows its words (core words ringed), the phrase, the Chacho says moves and the parents' card, plays each of its days or any
single game at age 2 to 3, 4, 5 or 6 to 7 (nothing is saved), and with the teacher code takes a note (`apiTeacherFlag`,
tab Flags, Mission = the unit id, Item = `unit`).

## Content (`docs/nest/nest.js`)

```js
window.EQ_NEST = {
  units: [
    { id: 'n01', theme: 'hello', title: 'Hello, Chacho!', he: 'שלום, צ׳אצ׳ו!', icon: 'wave',
      core: ['hello', 'yes', 'no', 'baby'],
      phrase: { en: "Hello! I'm Chacho.", he: 'שלום! אני צ׳אצ׳ו.', word: 'parrot' },
      moves: ['wave', 'hug', 'clap'],
      home: ['... {Hello!} ...', '...'],      // Hebrew for parents, English inside {braces}
      words: [ { id: 'hello', en: 'hello', he: 'שלום', pic: 'wave', say: 'Hello!', find: 'Where is hello?' }, ... ] },
    { id: 'r01', title: 'Review', he: 'חוזרים על הכול', icon: 'star', review: ['n01', 'n02'] },
    ...
  ],
  moves: { wave: { en: 'Wave hello!', pic: 'wave' }, ... },   // Chacho says
  parent: { review: ['...'] },                                 // the parents' ideas on a review day
  en: { hi: "Hi! Let's play!", turn: 'Your turn!', ... },     // Chacho's instructions and praise
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
Kokoro, Chacho's voice `am_fenrir`, slow: `w-<word>` (say), `f-<word>` (find), `p-<unit>` (phrase), `m-<move>` (Chacho
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
the kid's rows); the parent's screen-time choice (`Girls.NestMin`) and today's Nest minutes (`Girls.NestTime`, one date and
a number, overwritten every day). On the phone only: today's Nest seconds, a lesson left half way (`eq_nest_resume_<kid>`), how many times each game was played, the microphone choice, and up to 12 colored
pictures (which colors went where). The microphone is asked for on the Say it step, with a Hebrew sentence for the
parent; without it the button works. Drag games need no permission. The age band question (Apple's Kids Category has one
band an app: 5 and under, 6 to 8, 9 to 11) is in the gaps list of `specs/store-readiness.md`.

## History

- 2026-10-27, year plan phase 1 (https://claude.ai/artifact/F8f5DKqozWFJ98y8TNXJMJ): a real hello unit, Let's move in the
  imperative, one meaning per word, Seven to ten with only its 4 numbers, a phrase, core words, Chacho says and home ideas
  for every unit.
- 2026-10-27, the games plan phases 1 to 4: no Hebrew voice, the hand and Chacho's first round, four days a unit with
  spaced review per word, and the games above. Not built: the monthly report, the word map for parents, weeks 21 to 40,
  first sounds and letter tracing for ages 6 and 7 (phases 5 and 6 of the games plan).
- 2026-11-02, games plan phase 5, part 1: Starts like and Trace it (below), built and waiting for their recordings.
- 2026-11-02, games plan phase 5, part 2: weeks 21 to 40 written (below), waiting for their pictures and voice.

## Weeks 21 to 40 (year plan terms 3 and 4): written, waiting for pictures and voice

The year plan's themes for weeks 21 to 40 (https://claude.ai/artifact/F8f5DKqozWFJ98y8TNXJMJ), without the words the first 24
units already have (lion, car, doctor, moon...: they come back through the spaced review): 18 units, n25 to n42, 99 new
words, each with its phrase, Chacho says moves (all of them existing moves), two ideas for home, a chant and a story, and a
review after every two (r13 to r21). Bold: the core words for ages 2 and 3.

| Unit | Plan week | Theme | Words | Phrase |
|---|---|---|---|---|
| n25 | 21 | More wild animals (עוד חיות בטבע) | **bear**, **tiger**, **hippo**, **frog**, kangaroo, owl | The bear is big! |
| n26 | 22 | More things that go (עוד כלי תחבורה) | **truck**, **helicopter**, **tractor**, **taxi**, scooter, ambulance | Beep beep! Let's go! |
| n27 | 23 | At the park (בגן השעשועים) | **swing**, **slide**, **bird**, **grass**, bench, sandbox | My turn! Your turn! |
| n28 | 24 | More people who help (עוד אנשים שעוזרים) | **cook**, **police officer**, **driver**, vet, **nurse**, builder | Thank you for your help! |
| n29 | 25 | At the beach (בים) | **fish**, **crab**, **bucket**, **towel**, sandcastle, sun hat | Look, a fish! |
| n30 | 26 | Big and small (גדול וקטן) | **big**, **small**, **up**, **down**, fast, slow | Go fast! Go slow! |
| n31 | 27 | At the table (ליד השולחן) | **plate**, **fork**, **bowl**, **table**, napkin | More, please! |
| n32 | 28 | Little creatures (יצורים קטנים) | **bee**, **butterfly**, **ant**, **snail**, ladybug, worm | Look! A butterfly! |
| n33 | 29 | I can! (אני יכול!) | **drawing**, **reading**, **jumping**, **guitar**, piano | I can jump! |
| n34 | 31 | Where is it? (איפה זה?) | **in**, **on**, **under**, next to, **box** | It's in the box! |
| n35 | 32 | Birthday party (יום הולדת) | **cake**, **present**, **candle**, **party hat**, card | Happy birthday! |
| n36 | 33 | Pets (חיות מחמד) | **rabbit**, **turtle**, hamster, **puppy**, **kitten** | I have a rabbit. |
| n37 | 34 | Sky and seasons (שמיים ועונות) | **sky**, **summer**, **winter**, spring, autumn, **umbrella** | Look at the sky! |
| n38 | 35 | My school bag (התיק שלי) | **bag**, **book**, **crayon**, **pencil**, scissors, glue | Can I have a crayon? |
| n39 | 36 | Kind words (מילים טובות) | **please**, **thank you**, **sorry**, **help**, share | Let's share! |
| n40 | 37 | Sports (ספורט) | **kicking**, **throwing**, **catching**, **hopping**, skating | Catch the ball! |
| n41 | 38 | Space (חלל) | **rocket**, **planet**, **Earth**, **telescope** | Three, two, one, go! |
| n42 | 39 | Story world (עולם הסיפורים) | **king**, **queen**, **castle**, **crown**, dragon, princess | Once upon a time. |

- **Where they are:** `EQ_NEST.next` in docs/nest/nest.js (their chants and stories with the others, by unit id). The
  server's program (`src/NestIndex.js`), a kid's lessons, the playground and the parents' views read `EQ_NEST.units` only, so
  no kid meets them and no kid's place in the program moves.
- **What they need:** 99 clay stickers (`docs/nest/NEW_LINES.md` lists each one with how to draw it: abstract words such as
  big, under, please or summer have a drawing note in the word's `draw`) and 382 English clips (word, Find it question, phrase,
  chant lines, story pages; `python tools/voice.py` records them, since tools/nest-audio-list.js lists them).
  `tools/nest_pics.py` turns the clay pictures of these units into WebPs too (never a Fluent stand-in) and keeps them.
- **Checks:** test/nest-check.js runs every content rule on them (numbering on from n24 and r12, one meaning per English word
  across all 42 units, 4 to 6 words, core words, phrase, moves, home ideas, chants, stories, safe words) but does not ask for
  their pictures and clips on disk; it says when a unit has all of them ("ready to move from next into units").
- **Going live, a unit at a time:** move the unit and its review from `next` to the end of `units`, run
  `node tools/nest-index.js` and `node tools/nest-new-lines.js`, the checks, and raise `NEST_V`. A kid who finished the 108
  days and goes around again meets the new days next (`nestNext` gives the first day not played). Optional then: the unit's
  words in `give`, `sounds` and `dress`.
- **For the early-years teacher:** n30 (big, small, up, down, fast, slow), n34 (in, on, under, next to) and n39 (please,
  thank you, sorry, help, share) are the first units whose words are not things; their pictures need care, and Find it
  between two of them may be harder than the plan expects. The friendly dragon (n42) and the ambulance (n26) are drawn soft.

## Starts like and Trace it (ages 6 and 7, games plan phase 5)

Whole words only: a computer voice cannot say a sound alone ("suh" for /s/), so Chacho never does. Both games play on words
the kid has met (the units up to the day's one, `nkMetWords`), the day's unit first.

- **Starts like** (`NK.starts`, `EQ_NEST.starts`): groups of words with one first sound and one first letter (13 groups;
  c and k are one sound, "one" starts like "window", and no group mixes letters). Chacho says a word of a group ("sun ...
  Which one starts the same?"); the right card is another word of the group, the others start with other sounds. A right
  card: both words, then "They start the same!". It counts for the session only, not for a word's own found / missed record
  (it is about the sound, not the meaning).
- **Trace it** (`NK.trace`, `EQ_NEST.trace`, the strokes in `NK_LETTERS`): 16 small letters drawn as strokes in writing
  order (a b c d e f h k l m n p r s t w). The finger follows the line from the dot; anywhere within a forgiving distance
  counts, a lifted finger keeps what it drew, and nothing is ever wrong. When the last stroke is done the letter turns into
  the picture of a met word that starts with it (its usual sound: apple, not arm) and Chacho says the word. Chacho's own
  round: the hand traces it. Not counted.
- **Waiting** (`EQ_NEST.wait`, `docs/nest/NEW_LINES.md` written by `node tools/nest-new-lines.js`): their lines are written,
  not recorded. While a game is in `wait.games` a kid's lesson and playground skip it (the day is exactly what it was before),
  and the teacher's preview and the test pages play it with the phone's voice. test/nest-check.js checks that every waiting
  line exists and says where it plays, that NEW_LINES.md is up to date, and fails when a waiting line is already on disk
  (take it out of `wait`). After recording: take the keys out, run the checks, raise `NEST_V`.
- Store rules: nothing new is kept (the per-phone play counts already cover the two games).

## The playground, one more lesson and the right-answer moment (option C, owner 2026-10-28)

Proposal and the owner's pick: https://claude.ai/artifact/TEp9sYUzd8VUWfGB21H684 (C: a daily lesson plus an open playground).

- **Playground** (`nestPlayground`, `nkPlayStart`, `NK_PLAY` in play.js): the teal puzzle button on the Nest home opens a grid
  of games; each plays one activity (`nkCompose(.., only)`) on every word of the units the kid has played, as a review-like
  unit. Free play: nothing is sent (`NE.play`), Done goes back to the playground. Games open by age (`NK_PLAY[i][1]`); Get
  dressed only after the clothes unit, Chant only with a chant. A tile shows only when a dry run of its session has rounds of that game (`nkPlayOk`): Give it to me
  needs two met words from `EQ_NEST.give` (none in n01), Who says that? two sound words (from n04). Sort it and Odd one out
  play on one met unit against another theme (`nkPlaySession`), not on every met word mixed (2026-10-28: Give it to me
  opened straight onto the end screen for a kid who had met only n01).
- **One more lesson**: `Girls.NestPerDay` (SETUP v21; empty = 1, at most 3 since 2026-11-01: there is no "no limit", an
  old 0 counts as 3), set by the parent in the kid card (`apiParentNestPerDay`). Once the day's own lesson is logged, `nestInfo.next` is the next day of the program (`nestNext`) and
  the big button starts it; `apiNestResult` logs it with points only while today's count is under the number. The week strip
  keeps the day's own lesson (the first Nest row of a date).
- **Right answer** (`nkCheer`): the card jumps with a gold glow, stars burst, a gold star flies into the progress row (the
  dots turn gold), Chacho hops, a short Web Audio tune (muted with the sound button); every third right answer in a row the
  pet (or Chacho) pops up under a rainbow with confetti (`nkParty`). Chacho's demo rounds do not count. Reduced motion: no bursts.
- **Play sky** (`nkSkyOn`): a fixed layer behind the session, one of four palettes by unit (sun, clouds, bubbles, hills),
  removed by `nestLeave` and `renderNest`.
- Open to every Nest kid since 2026-10-28 (the owner: open to all, the palettes change by unit, the party every third).
  Check: `test/tablet.html?screen=nest-home2|nest-ground|nest-cheer[&phones]`.

## Grown-ups only, screen time, no numbers (the night review, finding 15, 2026-11-01)

- **Grown-ups only** (`nkGateBind`, `nkGateAsk` in play.js): "who is playing" on the living home, the old home and the bedtime
  screen opens only after a long press (1.5 s, a ring fills around the button; a short tap shows "למבוגרים: לחיצה ארוכה" and
  does nothing), then a sum in Hebrew words ("כמה זה שבע כפול שש?", four answers; a wrong one closes the sheet). The picker
  behind it (`nestSwitch`) has a small Sign out in the middle under the kids, not a wide button at the screen's edge.
- **The X in a lesson goes home** (a house icon; the playground and the arcade keep the X back to their shelf). The lesson waits
  (`nkPause`): the same session while the app is open, and `eq_nest_resume_<kid>` (today's date, the day id, the step, the
  score and first tries so far) after a reload; the egg starts it again at that step. A finished lesson clears it.
- **Screen time a day** (`nkClock*`, `nkBedtime`): 20 minutes for ages 2 and 3, 30 for 4 and 5, 40 for 6 and 7
  (`NEST.cap`, `nestCapMax`); the parent may choose less in the kid card (`Girls.NestMin`, `apiParentNestMin`, audited; the
  most for the age clears the cell), never more and never "no limit". The phone counts 5 s at a time while a Nest screen is
  visible and in use (a session, or a touch in the last minute): lessons, replays, the playground, the arcade, the home. It keeps
  `eq_nest_time_<kid>` (date and seconds) and tells the server every 3 minutes and at the cap (`apiNestTime`: one cell,
  `Girls.NestTime` = "<date> <seconds>", the most any phone reported); `nestInfo` returns `cap`, `capMax` and `used`, so a
  second tablet knows. At the cap a lesson stops at its next step (it waits for tomorrow), an arcade game at its end, anything
  90 seconds after the cap: the calm bedtime screen, Chacho asleep with the moon, "I'm sleepy now. Let's play more tomorrow!"
  (`en-sleepy`) and a Hebrew line for the grown-up (the time is up, see you tomorrow, an idea without a screen). The finished
  lesson's end screen still saves it. The preview and the test pages have no clock.
- **No numbers for the kid**: no points, streak or XP anywhere a Nest kid looks (the pet's growth screen shows no XP for a Nest
  kid). The server still gives the day's points (they grow the pet) and the parents' view keeps the week strip.
- **Bigger and named**: every Nest icon button is at least 64 px (`body.nestkid`, set while a Nest screen is up), and every
  answer card has the word as its accessible name (`aria-label`).
- Check: `test/tablet.html?screen=nest-switch|nest-gate|nest-sleepy[&phones]`, `?screen=parent-he&kid=Noam` (Noam, 2, in the
  dev server, has a lesson today), `test/nest-games.html?all`.

## The arcade plan, stage A: a live Chacho (2026-10-29)

Review of the games and the owner's picks: https://claude.ai/artifact/4TZtfZ6p11tvZiepqSuq9B. The plan (seven stages, A to G,
approved 2026-10-29): https://claude.ai/artifact/MiheFspiErSg9JXUiiJ8Ek. The owner's answers: music made in code only (no
library, no composer), real animal and thing sounds allowed (never a human voice), a live Chacho and painted worlds before new
games, new games in an arcade plus one on each unit's games day, an arcade time limit the parent sets (15 minutes by default).

Open to every Nest kid since 2026-10-29 (the owner; before that the NestAll try-out kids and `Settings.NestArcade` names): `nestInfo.arcade` is true unless `Settings.NestArcade` = `off`; the teacher's preview always.
`docs/nest/actor.js` (loaded after play.js; `nkAlive()` is the gate):

- **Chacho acts** (`nkActorOn`, called at the end of `nestRender`): in the dock he is bigger (`.nk.alive`), breathes, and every
  5 to 9 seconds, when he is quiet, looks around, tilts his head, flaps or hops (`nkFidget`). A tap on him: he giggles,
  spins or sneezes feathers, with a line (`en-tickle`, `en-whee`, `en-achoo`) when he is not talking (`nkCocoTap`).
- **The pet plays** (`#nkdpet`): the kid's pet sits on the other side of the dock (not in Give it to me, Get dressed or the
  end screen, where it is on the stage), bounces with Chacho, cheers on a right answer, thinks on a wrong one, and answers a tap.
- **A right answer** (`nkActorWin`, from `nkWin`): Chacho flies to the right card, hops on it twice and flies back (a copy
  of him, `#nkflyer`, over the screen; nothing in the layout moves). **A wrong tap** (`nkActorMiss`): he shakes his head or
  jumps in surprise, the pet thinks, a soft boing.
- **Poses** (`nkPose`): `docs/coco/<pose>.webp`; a pose with no picture yet borrows the closest of the six (`NK_POSE_NEAR`).
  18 new poses (2026-10-29, Gemini with the shop sheet as reference; sheets in `EnglishLessons-work/arcade-art/`, cut with
  `tools/cut_sheet.py`): point, laugh, surprised, shy, dance, eat, fly, listen, whisper, shout, confused, cheer, wave, sneeze,
  sad, sleep, clap, thumbs. He lands on a right card cheering, clapping, dancing or with a thumbs up; after a miss he is
  surprised or confused; he listens in Who says that?, dances to his band, waves on the end screen.
- **Real sounds** (`nkSnd`, `nkReal`): `x-<word>` plays `docs/nest/sounds/<word>.mp3` (`nestClip`), before Chacho's own
  "Moo!", in Who says that?, Peekaboo and the living home's visitor. 17 words (`EQ_NEST.real`); lion, monkey and baby keep
  Chacho only. `python tools/nest_sounds.py` fetches them from BigSoundBank (CC0, the list and pages in
  `tools/nest-sounds.json`), keeps the originals in `../art/nest/sounds/` and cuts the loudest 2.2 s. Their own folder,
  because `tools/nest_audio.py` removes any file in `docs/nest/audio` it did not record; `/nest/sounds/*` is in
  `run_worker_first` (Safari).
- **Chacho's band** (`nkBandBar`): under every chant, a bar at a time on the drums' clock: a bass, a marimba tune and a bell,
  one of six tunes and four keys by unit, chords I V vi IV. Chacho still says the lines (Kokoro cannot sing).

Checks: nest-check covers actor.js's names and every real sound (clip, list entry, Chacho's line).

## The arcade plan, stage B: painted worlds (2026-10-29, started)

For the arcade kids (`nkAlive()`), `nkPlace` returns a clay painting instead of the drawn place: `docs/nest/places/<place>.webp`
(600x804, the nine places of `NK_PLACE`: home, playroom, kitchen, farm, savanna, park, town, beach, sky). Gemini, portrait
3:4, the lower half left open for the pictures, no characters; prompts and the full-size sheets in
`EnglishLessons-work/arcade-art/` (`world-*.txt`, `world-*.jpg`). Story and the big picture stand their pictures on it
(`.nk-scene.painted`, a soft shadow under each). Not yet: things in the painting that move when tapped, the new coloring
pages, and dressing the kid's pet (the pets wear only head, face and neck items today; shirts, pants and shoes need new fit
slots for 10 pets in 5 stages).

The tappable things (2026-10-29): `NK_HOTS` in actor.js holds, for each painting, the things in it Chacho has a word for
([word, x %, y % of the 600x804 painting, radius %]). `nkHots` lays round buttons over them (the painting is drawn with
`cover`, so their places are computed from the scene's size); a tap lifts that piece of the painting out (a copy of the picture
behind it, so no new art), wobbles it and says the word. Story and the big picture have them; a tap there is never a miss.

## The arcade plan, stage C: Chacho's arcade and five games (2026-10-29)

`docs/nest/arcade.js` (loaded with the others; `nkArcOn()` = `dash.nest.arcade`): for the arcade kids the playground
(`nestPlayground`, the balloon in the living home) is **Chacho's arcade**, `nkArcade`: a painted fairground
(`docs/nest/arcade/room.webp`), two shelves by two big buttons (Chacho's games with their clay covers
`docs/nest/arcade/<game>.webp`, and the learning games of `NK_PLAY`), Chacho waving at the top.

- **A game** is a one-step session (`nkArcSession`, then the end screen; nothing is saved, like the playground) on the words of
  every unit met (ages 2 and 3: the core words). Each game is its own file, `docs/nest/games/<game>.js`, loaded when played
  (`nkArcLoad`); `nkArcStep` builds what it plays on and hides a game with nothing to play on. `NE.off` stops what a game runs
  (the echo, the animation frame) when the kid leaves.
- **Minutes a day**: `Girls.NestArcadeMin` (SETUP v22), set by the parent in the kid card (`nestArcadeRow`, `apiParentNestArcade`:
  ten minutes, a quarter of an hour, half an hour, never more than the day's screen time; empty = 15; audited), `dash.nest.arcadeMin`.
  Since 2026-11-01 there is no "no limit": an old 0 is the day's screen time (below). The phone
  counts every 5 s of a Chacho game on a visible screen (`eq_nest_arc_<kid>`, today's date and seconds; nothing is sent). When the
  minutes are used up, a game that is on goes on to its end and the shelf shows Chacho asleep ("I'm sleepy now. Let's play more
  tomorrow!"); the learning games stay open.
- **Talking Chacho** (`parrot`, 2+): Chacho big in the painted living room, the pet beside him. The microphone button: the echo of
  the living home (`nkEchoStart`: Chacho says it back in his parrot voice; memory only). A tap on Chacho: giggle, spin, dance or a
  sneeze of feathers. A plate of the food the kid has met: a tap feeds him (the word, "Yummy!"). Every third thing he asks for a
  word, its picture in his bubble ("Say it! Apple!"). No goal; the close button goes back to the arcade.
- **Pop-up Pals** (`peep`, 2+): three holes (2 and 3) or six in the painted park; pals pop up and stay long; Chacho asks
  "Find the cat"; the one he wants comes up at least every third time. A wrong pal says its name, waves and goes down. Once a
  game the kid's pet pops up (a giggle). Four rounds (2 and 3) or six.
- **No, Chacho!** (`nono`, 2+): a picture; Chacho names it, often wrongly. No (red) or Yes (green); a loud voice counts as No
  when the microphone is already on (`nestMicStart`, loudness only). After No: Chacho hides in his wings ("Oops! Silly me!") and
  says the right word. A wrong judgment: he asks again, then tells.
- **Chacho Slice** (`slice`, 4+): the food the kid has met is thrown up in arcs over the painted kitchen; a swipe (or a tap)
  through the one Chacho says cuts it in two with a splash, the pet eats. The wrong one bounces and the throws get slower. Three
  of each, three fruits; a big watermelon needs three cuts once.
- **Color Cards** (`cards`, 4+, needs three color words): a matching game against Chacho on colors (and numbers 1 to 5 once
  three number words are met; dots before). Same color or same number; every card is said ("Blue! Three!"); no card: take one.
  Chacho plays and often has to take one; the "Chacho sneezes!" card blows the color to a new one. Both endings are happy.

New lines in `nest.en` (arcade, sleepy, nococo, isit, silly, slice, cards, mygo, draw, youwin, iwin); nest-check checks that every
`en-*` the code says has its line and that every game in `NK_ARCADE` has its file. Test: `test/nest-games.html?unit=n02&game=cards`
(and `parrot`, `peep`, `nono`, `slice`; `?all` includes them).

The arcade's door (2026-10-29, the owner: "it is not clear at all that the games are behind the balloon"): for the arcade kids the
living home has a glowing clay tent next to the egg (`docs/nest/arcade/tent.webp`, a "Games" tag for the grown-ups); the balloon
stays as a thing that says its word. The egg is the lesson, the tent the games. The first three days, and every time the day's
lesson is done, the tent glows, Chacho says "Let's play my games!" and the hand taps it (`nkhTentCall`).

## The arcade plan, stage D: games in the worlds (2026-10-29)

Four more games in `docs/nest/games/`, on the painted worlds and the props sheet of stage D (`docs/nest/arcade/`: plate, pizza,
dice, ladder, slide; covers kitchen, house, where, ladders, and beat and freeze for stage E):

- **Chacho's House** (`house`, 2+): the rooms are the places the kid's units opened (`nkArcPlaces`: the living room always, the
  kitchen with food, the playroom with toys or colors, the farm with animals...), with up to five things of those units in
  each. A tap: the thing bounces and says its name and Chacho hops over to it; the painting's own things answer too. Arrows go
  from room to room. No goal.
- **Where's Chacho?** (`where`, 3+): seven or nine things in a painted place; Chacho lost two or three ("Where is the ball?"); each
  one found flies away. Then Chacho hides behind a thing, his head peeking, "Where is Chacho? Find me!" ("You found me!").
- **Chacho's Kitchen** (`kitchen`, 4+): customers (animals and people met; once the kid's pet) order in English, `o-<food>-<n>`
  (`EQ_NEST.orders`: "Two bananas, please!"; 6 and 7 get two and three); food onto the plate by a tap or a drag, then the bell.
  A wrong plate: "Hmm... no, thank you!" and the order again. Five customers.
- **Chacho Ladders** (`ladders`, 4+): twelve pictures on the painted park, two ladders and a rainbow slide; the pet and Chacho take
  turns with the dice (1 to 3), Chacho counts every hop ("One, two, three!") and says the picture landed on. The first one home
  (the tent) wins; both endings are happy.

New lines: kitchen, nothanks, house, wherecoco, foundme, lost, roll, ladder, slide, count, and the 34 orders.

## The arcade plan, stage E: music, body, and no screen (2026-10-29)

`nkArcBand(seed, bpm, onBeat)` in arcade.js: the drums and Chacho's band (actor.js) on the audio clock, for the music games; with
audio still asleep (no tap yet) the beat goes on by the clock. With twelve Chacho games the shelf has three columns.

- **Beat Tiles** (`beat`, 4+): the band plays; every two bars Chacho says a word on the beat and three pictures fall down three
  lanes in time; a tap on the one he said bursts it with a drum hit. A miss never stops the song. Chacho's drum solo halfway.
  Eight words; 84 beats a minute up to 5, 96 after.
- **Dance Freeze** (`freeze`, 2+): Chacho calls a move (jump, spin, clap, wiggle, stomp, dance) and does it with the pet while the
  band plays; the music stops, "Freeze!", Chacho freezes (the freeze cover is his pose), wobbles, and every third time falls over.
  Nothing is checked (no camera). Six rounds.
- **Lights out, Chacho!** (`lights`, 2+): the screen goes dark (the play sky too) and Chacho leads by voice: find something of a
  color met, soft or round ("Show it to Mommy or Daddy!"), a move of the units met (m-*), and a hug at the end. A big thumb for
  the grown-up (done) or a small arrow (skip). "Lights on! Great job!". Its cover is Chacho asleep.

Not built yet from the plan's stage E: the audio episode for the car for every unit.

## Hebrew guidance (package B, owner 2026-10-31)

The complaint: the youngest did not know how to go on or where to tap. Plan, research and the owner's picks:
https://claude.ai/artifact/HxuLLJMqaNSorPJryBpmya (Hebrew only for instructions, never translating a word; Chacho himself
speaks it; package B; off by default from age 6). The voice: Chacho's own (Chatterbox Multilingual, `language_id='he'`, from
niqqud text, the calm setting; the owner chose it over a native Hebrew voice and a human recording,
https://claude.ai/artifact/QhT8dKgqiNPqZh57HHuTyE). "Hebrew says how, English says what."

- **Lines**: `EQ_NEST.he` (41: navigation, the ladder's `stuck-*`, one a game; `peek2` is Peekaboo from age 4), recorded by
  `EnglishLessons-work/hebrew-voice` (`guide_lines.py` holds the niqqud text: כּוֹל for כל, few words with ר; `kernel3/guide.py`
  on Kaggle, six takes a line, Whisper large-v3 picks), in `docs/nest/he/<key>.mp3`, said as `h-<key>` (`nestClip`; the phone's
  own voice never reads them). nest-check: every key the code says has a line and a recording, every game has a line.
- **When** (`nkHeMode`, play.js): the parent's switch `Girls.NestHebrew` (the kid card: auto, always, off; `apiParentNestHebrew`,
  audited). Auto = on up to age 5. A game's Hebrew intro (`nkHeIntro`, before the English intro) the first two times the kid
  plays it, with "watch the hand" the first time Chacho shows it; "one more game" before a lesson's last part and "well done,
  we finished" at its end the first six lessons; always when the parent chose always.
- **I do, we do, you do**: the round after Chacho's own (`s.together`) starts with the hand at once and "now together".
- **The help ladder** (`nkLadder`, every game through `nkIdle`, the home's egg, the arcade shelf, Lights out's thumb): 5 s the
  right thing wiggles and glows (`nk-nudge`), 12 s the English instruction again and the hand, 20 s one Hebrew line
  (`stuck-tap`, `stuck-drag`, `stuck-btn`, `egg`, `games`; the English when Hebrew is off) and a slow hand with a gold ring
  (`nk-lead`), 30 s Chacho naps until the next touch. Any touch starts it again. Dance Freeze has nothing to tap: only its
  Hebrew intro.
- **Home**: before the lesson the egg is called (the first three days in Hebrew right after hello, then the ladder); the tent
  is called only after the lesson (in Hebrew the first three times).
- **The picture path** (`nkPath`): one station a game of the lesson (its cue icon), done ones gold, the one on now big with a
  ring of how far into it; instead of a dot a step. Hidden in one-game sessions.
