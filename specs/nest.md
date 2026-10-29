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
  dressed only after the clothes unit, Chant only with a chant. A tile shows only when a dry run of its session has rounds of that game (`nkPlayOk`): Give it to me
  needs two met words from `EQ_NEST.give` (none in n01), Who says that? two sound words (from n04). Sort it and Odd one out
  play on one met unit against another theme (`nkPlaySession`), not on every met word mixed (2026-10-28: Give it to me
  opened straight onto the end screen for a kid who had met only n01).
- **One more lesson**: `Girls.NestPerDay` (SETUP v21; empty = 1, 0 = no limit), set by the parent in the kid card
  (`apiParentNestPerDay`). Once the day's own lesson is logged, `nestInfo.next` is the next day of the program (`nestNext`) and
  the big button starts it; `apiNestResult` logs it with points only while today's count is under the number. The week strip
  keeps the day's own lesson (the first Nest row of a date).
- **Right answer** (`nkCheer`): the card jumps with a gold glow, stars burst, a gold star flies into the progress row (the
  dots turn gold), Coco hops, a short Web Audio tune (muted with the sound button); every third right answer in a row the
  pet (or Coco) pops up under a rainbow with confetti (`nkParty`). Coco's demo rounds do not count. Reduced motion: no bursts.
- **Play sky** (`nkSkyOn`): a fixed layer behind the session, one of four palettes by unit (sun, clouds, bubbles, hills),
  removed by `nestLeave` and `renderNest`.
- Open to every Nest kid since 2026-10-28 (the owner: open to all, the palettes change by unit, the party every third).
  Check: `test/tablet.html?screen=nest-home2|nest-ground|nest-cheer[&phones]`.

## The arcade plan, stage A: a live Coco (2026-10-29)

Review of the games and the owner's picks: https://claude.ai/artifact/4TZtfZ6p11tvZiepqSuq9B. The plan (seven stages, A to G,
approved 2026-10-29): https://claude.ai/artifact/MiheFspiErSg9JXUiiJ8Ek. The owner's answers: music made in code only (no
library, no composer), real animal and thing sounds allowed (never a human voice), a live Coco and painted worlds before new
games, new games in an arcade plus one on each unit's games day, an arcade time limit the parent sets (15 minutes by default).

Try-out first: `nestInfo.arcade` = the NestAll kids and `Settings.NestArcade` (names or `all`); the teacher's preview always.
`docs/nest/actor.js` (loaded after play.js; `nkAlive()` is the gate):

- **Coco acts** (`nkActorOn`, called at the end of `nestRender`): in the dock he is bigger (`.nk.alive`), breathes, and every
  5 to 9 seconds, when he is quiet, looks around, tilts his head, flaps or hops (`nkFidget`). A tap on him: he giggles,
  spins or sneezes feathers, with a line (`en-tickle`, `en-whee`, `en-achoo`) when he is not talking (`nkCocoTap`).
- **The pet plays** (`#nkdpet`): the kid's pet sits on the other side of the dock (not in Give it to me, Get dressed or the
  end screen, where it is on the stage), bounces with Coco, cheers on a right answer, thinks on a wrong one, and answers a tap.
- **A right answer** (`nkActorWin`, from `nkWin`): Coco flies to the right card, hops on it twice and flies back (a copy
  of him, `#nkflyer`, over the screen; nothing in the layout moves). **A wrong tap** (`nkActorMiss`): he shakes his head or
  jumps in surprise, the pet thinks, a soft boing.
- **Poses** (`nkPose`): `docs/coco/<pose>.webp`; a pose with no picture yet borrows the closest of the six (`NK_POSE_NEAR`).
  18 new poses (2026-10-29, Gemini with the shop sheet as reference; sheets in `EnglishLessons-work/arcade-art/`, cut with
  `tools/cut_sheet.py`): point, laugh, surprised, shy, dance, eat, fly, listen, whisper, shout, confused, cheer, wave, sneeze,
  sad, sleep, clap, thumbs. He lands on a right card cheering, clapping, dancing or with a thumbs up; after a miss he is
  surprised or confused; he listens in Who says that?, dances to his band, waves on the end screen.
- **Real sounds** (`nkSnd`, `nkReal`): `x-<word>` plays `docs/nest/sounds/<word>.mp3` (`nestClip`), before Coco's own
  "Moo!", in Who says that?, Peekaboo and the living home's visitor. 17 words (`EQ_NEST.real`); lion, monkey and baby keep
  Coco only. `python tools/nest_sounds.py` fetches them from BigSoundBank (CC0, the list and pages in
  `tools/nest-sounds.json`), keeps the originals in `../art/nest/sounds/` and cuts the loudest 2.2 s. Their own folder,
  because `tools/nest_audio.py` removes any file in `docs/nest/audio` it did not record; `/nest/sounds/*` is in
  `run_worker_first` (Safari).
- **Coco's band** (`nkBandBar`): under every chant, a bar at a time on the drums' clock: a bass, a marimba tune and a bell,
  one of six tunes and four keys by unit, chords I V vi IV. Coco still says the lines (Kokoro cannot sing).

Checks: nest-check covers actor.js's names and every real sound (clip, list entry, Coco's line).

## The arcade plan, stage B: painted worlds (2026-10-29, started)

For the arcade kids (`nkAlive()`), `nkPlace` returns a clay painting instead of the drawn place: `docs/nest/places/<place>.webp`
(600x804, the nine places of `NK_PLACE`: home, playroom, kitchen, farm, savanna, park, town, beach, sky). Gemini, portrait
3:4, the lower half left open for the pictures, no characters; prompts and the full-size sheets in
`EnglishLessons-work/arcade-art/` (`world-*.txt`, `world-*.jpg`). Story and the big picture stand their pictures on it
(`.nk-scene.painted`, a soft shadow under each). Not yet: things in the painting that move when tapped, the new coloring
pages, and dressing the kid's pet (the pets wear only head, face and neck items today; shirts, pants and shoes need new fit
slots for 10 pets in 5 stages).

The tappable things (2026-10-29): `NK_HOTS` in actor.js holds, for each painting, the things in it Coco has a word for
([word, x %, y % of the 600x804 painting, radius %]). `nkHots` lays round buttons over them (the painting is drawn with
`cover`, so their places are computed from the scene's size); a tap lifts that piece of the painting out (a copy of the picture
behind it, so no new art), wobbles it and says the word. Story and the big picture have them; a tap there is never a miss.

## The arcade plan, stage C: Coco's arcade and five games (2026-10-29)

`docs/nest/arcade.js` (loaded with the others; `nkArcOn()` = `dash.nest.arcade`): for the arcade kids the playground
(`nestPlayground`, the balloon in the living home) is **Coco's arcade**, `nkArcade`: a painted fairground
(`docs/nest/arcade/room.webp`), two shelves by two big buttons (Coco's games with their clay covers
`docs/nest/arcade/<game>.webp`, and the learning games of `NK_PLAY`), Coco waving at the top.

- **A game** is a one-step session (`nkArcSession`, then the end screen; nothing is saved, like the playground) on the words of
  every unit met (ages 2 and 3: the core words). Each game is its own file, `docs/nest/games/<game>.js`, loaded when played
  (`nkArcLoad`); `nkArcStep` builds what it plays on and hides a game with nothing to play on. `NE.off` stops what a game runs
  (the echo, the animation frame) when the kid leaves.
- **Minutes a day**: `Girls.NestArcadeMin` (SETUP v22), set by the parent in the kid card (`nestArcadeRow`, `apiParentNestArcade`:
  ten minutes, a quarter of an hour, half an hour, no limit; empty = 15, 0 = no limit; audited), `dash.nest.arcadeMin`. The phone
  counts every 5 s of a Coco game on a visible screen (`eq_nest_arc_<kid>`, today's date and seconds; nothing is sent). When the
  minutes are used up, a game that is on goes on to its end and the shelf shows Coco asleep ("I'm sleepy now. Let's play more
  tomorrow!"); the learning games stay open.
- **Talking Coco** (`parrot`, 2+): Coco big in the painted living room, the pet beside him. The microphone button: the echo of
  the living home (`nkEchoStart`: Coco says it back in his parrot voice; memory only). A tap on Coco: giggle, spin, dance or a
  sneeze of feathers. A plate of the food the kid has met: a tap feeds him (the word, "Yummy!"). Every third thing he asks for a
  word, its picture in his bubble ("Say it! Apple!"). No goal; the close button goes back to the arcade.
- **Pop-up Pals** (`peep`, 2+): three holes (2 and 3) or six in the painted park; pals pop up and stay long; Coco asks
  "Find the cat"; the one he wants comes up at least every third time. A wrong pal says its name, waves and goes down. Once a
  game the kid's pet pops up (a giggle). Four rounds (2 and 3) or six.
- **No, Coco!** (`nono`, 2+): a picture; Coco names it, often wrongly. No (red) or Yes (green); a loud voice counts as No
  when the microphone is already on (`nestMicStart`, loudness only). After No: Coco hides in his wings ("Oops! Silly me!") and
  says the right word. A wrong judgment: he asks again, then tells.
- **Coco Slice** (`slice`, 4+): the food the kid has met is thrown up in arcs over the painted kitchen; a swipe (or a tap)
  through the one Coco says cuts it in two with a splash, the pet eats. The wrong one bounces and the throws get slower. Three
  of each, three fruits; a big watermelon needs three cuts once.
- **Color Cards** (`cards`, 4+, needs three color words): a matching game against Coco on colors (and numbers 1 to 5 once
  three number words are met; dots before). Same color or same number; every card is said ("Blue! Three!"); no card: take one.
  Coco plays and often has to take one; the "Coco sneezes!" card blows the color to a new one. Both endings are happy.

New lines in `nest.en` (arcade, sleepy, nococo, isit, silly, slice, cards, mygo, draw, youwin, iwin); nest-check checks that every
`en-*` the code says has its line and that every game in `NK_ARCADE` has its file. Test: `test/nest-games.html?unit=n02&game=cards`
(and `parrot`, `peep`, `nono`, `slice`; `?all` includes them).

The arcade's door (2026-10-29, the owner: "it is not clear at all that the games are behind the balloon"): for the arcade kids the
living home has a glowing clay tent next to the egg (`docs/nest/arcade/tent.webp`, a "Games" tag for the grown-ups); the balloon
stays as a thing that says its word. The egg is the lesson, the tent the games. The first three days, and every time the day's
lesson is done, the tent glows, Coco says "Let's play my games!" and the hand taps it (`nkhTentCall`).

## The arcade plan, stage D: games in the worlds (2026-10-29)

Four more games in `docs/nest/games/`, on the painted worlds and the props sheet of stage D (`docs/nest/arcade/`: plate, pizza,
dice, ladder, slide; covers kitchen, house, where, ladders, and beat and freeze for stage E):

- **Coco's House** (`house`, 2+): the rooms are the places the kid's units opened (`nkArcPlaces`: the living room always, the
  kitchen with food, the playroom with toys or colors, the farm with animals...), with up to five things of those units in
  each. A tap: the thing bounces and says its name and Coco hops over to it; the painting's own things answer too. Arrows go
  from room to room. No goal.
- **Where's Coco?** (`where`, 3+): seven or nine things in a painted place; Coco lost two or three ("Where is the ball?"); each
  one found flies away. Then Coco hides behind a thing, his head peeking, "Where is Coco? Find me!" ("You found me!").
- **Coco's Kitchen** (`kitchen`, 4+): customers (animals and people met; once the kid's pet) order in English, `o-<food>-<n>`
  (`EQ_NEST.orders`: "Two bananas, please!"; 6 and 7 get two and three); food onto the plate by a tap or a drag, then the bell.
  A wrong plate: "Hmm... no, thank you!" and the order again. Five customers.
- **Coco Ladders** (`ladders`, 4+): twelve pictures on the painted park, two ladders and a rainbow slide; the pet and Coco take
  turns with the dice (1 to 3), Coco counts every hop ("One, two, three!") and says the picture landed on. The first one home
  (the tent) wins; both endings are happy.

New lines: kitchen, nothanks, house, wherecoco, foundme, lost, roll, ladder, slide, count, and the 34 orders.

## The arcade plan, stage E: music, body, and no screen (2026-10-29)

`nkArcBand(seed, bpm, onBeat)` in arcade.js: the drums and Coco's band (actor.js) on the audio clock, for the music games; with
audio still asleep (no tap yet) the beat goes on by the clock. With twelve Coco games the shelf has three columns.

- **Beat Tiles** (`beat`, 4+): the band plays; every two bars Coco says a word on the beat and three pictures fall down three
  lanes in time; a tap on the one he said bursts it with a drum hit. A miss never stops the song. Coco's drum solo halfway.
  Eight words; 84 beats a minute up to 5, 96 after.
- **Dance Freeze** (`freeze`, 2+): Coco calls a move (jump, spin, clap, wiggle, stomp, dance) and does it with the pet while the
  band plays; the music stops, "Freeze!", Coco freezes (the freeze cover is his pose), wobbles, and every third time falls over.
  Nothing is checked (no camera). Six rounds.
- **Lights out, Coco!** (`lights`, 2+): the screen goes dark (the play sky too) and Coco leads by voice: find something of a
  color met, soft or round ("Show it to Mommy or Daddy!"), a move of the units met (m-*), and a hug at the end. A big thumb for
  the grown-up (done) or a small arrow (skip). "Lights on! Great job!". Its cover is Coco asleep.

Not built yet from the plan's stage E: the audio episode for the car for every unit.
