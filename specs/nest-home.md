# The living nest: Coco's Nest home (ages 2 to 7)

Proposal with a live demo scene: https://claude.ai/artifact/5fiyAgB3ykPKnCtdmmjeAP. The owner's picks (2026-10-28): the
combination (the living-nest scene, a flower garden at the bottom, a small pet corner); Coco says only "Hello!" (not the
kid's name); yes to "Coco repeats you" with the microphone; soft music and birds play by themselves, with a mute button.
"Build all the waves in parallel."

## Who sees it

`nestInfo.home` (src/Nest.js): the try-out kids of `Settings.NestAll`, and `Settings.NestHome` (names, or `all`).
Everyone else keeps the old home (`renderNest`). `nestInfo.days` = the distinct dates with a Nest row (a flower each).

## Files (each runs in the app's global scope: every top-level name starts with nk / NK, none shared with
src/Index.html or with each other; `node test/nest-check.js` checks it)

| File | What | Entry points |
|---|---|---|
| `docs/nest/home.js` | the scene (waves 1 and 2 on the home) | `nkHome(d)`, called by `renderNest` when `d.nest.home` |
| `docs/nest/echo.js` | Coco repeats you | `nkEchoStart(opts)` |
| `docs/nest/stickers.js` | the sticker book, the parents' weekly postcard | `nkStickers()`, `nkPostcard(el, kidName)` (called by `nestFillParent`) |

`loadNest` loads all three after play.js (versioned by `NEST_V`). Coco's new lines are in `EQ_NEST.en`: `hello`,
`morning`, `night`, `echo` ("Talk to me!"), plus the old `bye`, `yummy`, `thanks`.

## The scene (home.js)

One full-screen picture (`.nkh`, fixed to the screen like the play frame), never scrolling, the same on phones and tablets.
Sizes come from the screen: `--s` is a hundredth of the scene's measure (`nkhLayout`), and a scene wider than tall gets
`.wide` (the tree moves right, the garden runs the whole width); tablets get the phone layout scaled by `tabletFit`, no width
breakpoints. Built from the clay stickers we have (sun, moon, star, cloud, tree, egg, balloon, duck, flower, leaf, snow, kite,
rainbow) and Coco's moods; the nest is drawn in code (two SVGs: the dark inside behind Coco, the woven bowl in front).

- **Sky by the clock** (`nkhClock`): day 6 to 17 (sun), evening 17 to 19 (pink and orange, the sun low), night (dark blue,
  the moon, eight twinkling stars, Coco and the pet sleepy, the pet under a blanket). Two clouds drift across. Seasons by
  the month: autumn (September to November) orange leaves fall, winter (December to February) snowflakes fall and the hills
  turn pale, spring (March to May) wild flowers on the hills, summer a kite. A rainbow when today's lesson is done.
- **The tree and Coco**: Coco stands big in his nest on top of the clay tree and breathes; now and then he hops or puts on
  his sunglasses (`cool`). Tapping him: "Coco repeats you" (`nkEchoStart`, below): the states drive his look (`ask`: talks,
  `listen`: thinking, a green ring that follows the voice level (`onLevel`) and a microphone badge, `talk`: celebrates and
  talks). The music stops while the echo runs, and every other tap in the scene is quiet then (it would be recorded),
  except the egg, the balloon and the garden friends, which end the echo first. Without a microphone (`onDone(false)`) he
  hops and says "Hello!".
- **The egg** = today's lesson (the old big Start, the same start logic): it glows and wobbles; a tap wobbles it, a crack
  draws, then `nestStart`. Done for the day: a golden egg with a star (a replay), or the plain glowing egg again when the
  parent allows another lesson (`n.next`).
- **Today's visitor**: a picture of today's unit (its icon word, else a word with an animal sound) stands by the egg; a tap
  plays `s-<word>` when the word has a sound, else `w-<word>`.
- **The balloon** floats by the tree and opens the playground (only when `nkPlayGames()` has games; it flies up first).
- **The garden** along the bottom: a flower for every day played (`days`), in up to three rows going up the hill, never
  wilting; two buds wait while there are fewer than three. A friend for every unit played (its picture, as big as fits,
  at most 88 px); a tap replays the unit exactly as the old unit buttons did (`nestDays` for `n.all`). When they do not fit,
  and always for `n.all`, a glass "all" button at the end opens a sheet with every unit (played, or all for `n.all`).
- **The pet corner**: a tap = celebrate mood, a giggle (Web Audio) and a hop. One food word the kid has met (a fruit or food
  unit played) waits by the pet; tap it to hear it, drag it onto the pet: munch, "banana", "Yummy! Thank you!"; a new one
  comes a few seconds later. Asleep under a blanket at night (no food then). No pet yet: three pets peek from the corner, and
  a tap opens the six to choose from (the same as the old home, `apiSetPet`).
- **Everything reacts to a touch**: a bounce, a soft Web Audio blip, and the word when Coco has a clip (`w-sun`, `w-moon`,
  `w-star`, `w-cloud`, `w-tree`, `w-flower`, `w-duck`, `w-leaf`, `w-snow`, `w-kite`, `w-rainbow`, `w-egg`, `w-balloon`). No
  new clips were needed.
- **Arrival** (once per app open per kid): Coco flies into the nest and says "Good morning!" before noon, "Hello!" after,
  "Good night!" at night; the pet stretches. **Back from a lesson** (`days` grew since the number kept on this phone,
  `eq_nkh_days_<name>`): the new flower grows with stars, the tune and "Great job!".
- **Sound**: soft generated music (a slow pentatonic tune over four chords, slower and lower at night) and birds now and
  then by day, in Web Audio (no files). On by default, it starts with the first touch (autoplay rules), stops while the page
  is hidden and when the home is left; the music button mutes it (`eq_nkh_music` in local storage). Touch sounds follow the
  games' sound switch (`eq_sound`).
- **Small glass buttons on top**: music, the sticker book (`nkStickers`, the music pauses), the coloring album (when there is
  one), who's playing (`nestSwitch`, Coco says "Bye bye!").
- **Leaving**: `nkHomeStop()` stops the music, the timers, the echo and the listeners. It runs on every way out: the egg, the
  balloon, a friend and the switch call it; `nestLeave` calls it; and the scene's one heartbeat (every 250 ms) stops
  everything once the scene is no longer on the page (any other screen drawn into `#app`).
- Reduced motion: a still scene (no drifting, falling, bouncing or fly-in). Only CSS transforms move; one timer.
- Checking: `test/tablet.html?screen=nest-living|nest-living-night|nest-living-many|nest-living-pet[&phones]`, with
  `&h=<hour>&m=<month>` for another time of day or season.

## Coco repeats you (echo.js)

The kid speaks, Coco plays it back higher, like a parrot. The sound lives in memory only for the replay: nothing is saved
or sent, no speech recognition. `specs/store-readiness.md` says so.

`nkEchoStart({ onState, onDone, onLevel })` returns `{ stop() }`:

- **The microphone choice** is Say it's (`eq_nest_mic` on the phone). Never asked: the same sheet for the parent (Hebrew
  text, "allow the microphone" / "without the microphone"), its sentence saying that the voice stays in the phone's memory
  for a few seconds, is played once and erased (state `ask`). "No" before, refused, or no microphone (an `http` page has
  none): `onDone(false)` at once, and the home makes Coco hop and say "Hello!". A refusal by the phone is stored as "no",
  like Say it.
- **Coco says "Talk to me!"** (`en-echo`, through `nestPlay`). On Android the microphone opens during the line (echo
  cancellation; nothing is kept before the line ends); on iPhones after it, because a live microphone turns the speaker down.
- **`listen`**: raw samples from a ScriptProcessor (no MediaRecorder, no codec: the same on iOS Safari 15+ and Android
  Chrome). The voice counts once it is loud for about 0.13 s (the loudness of Say it), with the last 0.35 s before it kept so
  the first sound is not cut; it ends after 0.7 s of quiet or 4 s. Nothing loud within 6 s: over, quietly
  (`onDone(true)`). `onLevel(0..1)` gives the loudness for a ring.
- **`talk`**: the microphone tracks are stopped first, then a short squawk made in code and the voice once, 1.5 times faster
  (higher), with a light wobble, evened out in volume. About 0.2 s plus the voice's length / 1.5 (at most about 3 s).
  `nestTalk` moves Coco's beak meanwhile.
- **`idle`**, then `onDone(true)`; the buffer is dropped. Hiding the page ends it the same way. `stop()` ends everything at
  once (sheet, Coco's line, tracks, nodes, timers) without calling back. One echo at a time: a new start stops the old one.
- Try it: `test/nest-echo.html` on the dev server (`?auto` with a fake microphone, `?ask` for the sheet). A phone needs an
  https address for the microphone.

## The sticker book and the postcard (stickers.js)

**The sticker book** (`nkStickers()`, the home's sticker button opens it): one full-screen page, nothing scrolls but the
row of unit tabs (sideways). The top row: the house button (`renderDash()`), the units played as round tabs with the unit's
picture (88 px), and the free page's tab (a sticker tile) at the end.

- **A unit's page**: its words as clay stickers (`nestPic`, the games' pictures; ages 2 and 3 see the 4 core words), on a
  glass page, 3 across in landscape and 2 in portrait. A word the kid has met (`dash.nest.known` has it) is in full color
  with a white die-cut edge; the first time it shows in the book it pops in with a shine sweep, a pop sound and Coco's
  "Wow!" (the seen ones are kept per kid: `eq_nest_stickers_<kid>`). A word not met yet is a soft silhouette: no lock, no
  counter. Tap a met sticker: it hops and Coco says it (`w-<id>`); tap a silhouette: a wiggle. A kid with nothing played
  sees today's unit, all silhouettes.
- **The free page**: a place drawn in code (`nkPlace`, the nine places of the stories; the park first), a tray of every met
  sticker below it (scrolls sideways; a sideways swipe scrolls, an upward drag lifts a sticker), and the place button: a
  sheet of the nine places as pictures. Drag a sticker onto the place (or tap it: Coco says it and it lands on a free
  spot); tap a placed sticker to hear it, drag it to move it, drag it off the place to take it away. Kept on the phone per
  kid (`eq_nest_board_<kid>`: the place and up to 40 stickers; a new one past 40 takes the oldest). Its own finger drag
  (`nksDrag`), since play.js's `nkDrag` needs a running session.
- No luck, no locked boxes, nothing to buy; reduced motion: no pop or shine.

**The weekly postcard** (`nkPostcard(el, kidName[, g])`, called by `nestFillParent` for each Nest kid's card): a button
"הגלויה של השבוע" under the parents' card. It opens a sheet and draws a 1080 px wide picture in canvas: the app's
background and a glass card, Coco on a stamp, "השבוע של <name>" and the dates (the last 7 days), "מילים שפגשנו השבוע":
up to 8 words met in the last 7 days (`known[id][2]`, the last day met, newest first) as clay pictures with the English
word under each (none met: the current unit's words, "המילים שמחכות לנו"), "ימי משחק השבוע" with a clay flower for each day
played in the parents' week strip (`g.week[].done`; no empty places), and "רעיון לבית": one of the current unit's `home`
ideas (a review: `parent.review`), a different one each week. Hebrew is laid out right to left by hand: each Hebrew run
is drawn with `direction = 'rtl'`, each `{English}` part as one left-to-right run that moves to the next line whole.
The sheet shows the picture, then: Share (`navigator.share` with the PNG, where the phone can share files), a WhatsApp text
link (`api.whatsapp.com/send?text=`: the words, the days and the idea) and Save (a download link); without file sharing
the note says to long-press the picture to save it. All of it is in the parents' area, behind their code.

The data: `nestFillParent` passes only the kid's name, so stickers.js wraps `renderParent` once to keep the last parents'
data, and the first time (that render runs before stickers.js loads) the button asks `apiParent` again with the parents'
code (`eq_admin`); with neither, it counts the week strip's done days in the card and shows the current unit's words.
Passing the kid's data as a third argument (`nkPostcard(el, name, g)`) skips all of that.

Check: `http://localhost:8787/test/nest-stickers.html?view=book|free|places|postcard[&tablets]` (Mia with fake progress;
`free` also drags a sticker on and one off; `postcard&unit=n06&tip=0` picks an idea line).
