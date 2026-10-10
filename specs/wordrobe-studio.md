# The Wordrobe, phase 2: the Studio

Phase 2 of Coco's shop (phase 1: `specs/wordrobe.md`; the proposal: https://claude.ai/artifact/6GkZRhCvB23frmsM37GXvx).
Everything here opens with the shop on `Settings.ShopOpens` (2026-10-24), as the owner chose. The owner's picks for
this phase: the bases Beanie, Bow, Scarf and Cape (a hoodie and shoes do not sit well on 300 stickers whose bodies
and legs differ); every rare and epic item is made of words; everything opens on the opening day.

## Say it, Wear it (the Studio)

She describes a white base in English, and Coco makes it: "a big sparkly purple velvet cape with tiny gold stars".

- **Bases** (`STUDIO_BASES` in Shop.js): Beanie 150 (head), Bow 120 (head), Scarf 160 (neck), Cape 220 (back). Each
  design costs its base's price; she can make as many as she likes (not the same one twice).
- **Words** (`studioWords`): opinion (cute, lovely, cool, pretty, beautiful, fancy, amazing, elegant, awesome, gorgeous),
  size (tiny, little, small, big, large, huge, giant, oversized), sparkle (sparkly, shiny, glittery, glowing), color
  (15, and light / dark before a color), material (velvet, silk, wool, denim, leather); after the thing, "with" and a
  pattern (stars, hearts, dots / polka dots, stripes, flowers, snowflakes, moons), which may have its own size,
  sparkle and color.
- **Good English makes it.** `studioGrade` (Shop.js; the same function, copied as it is, in Index.html; test/sim.js
  checks that they agree) needs: "a" or "an" at the start (and the right one: "an orange scarf"), one word of each
  kind, the order opinion → size → sparkle → color → material → the thing, then "with" + a plural pattern. Every
  mistake gets one friendly hint with the fix, for example "In English the color comes before the cape: a purple
  cape" (the Hebrew order), "Almost! In English the order is size → color: a big purple cape", "Use the plural for a
  pattern: with stars", or "I don't know the word purpel. Did you mean purple?".
- **Perfect Fit**: right the first time (no hint shown, no "Show me how") with 3 or more describing words. The design
  gets three gold sparkles; it does not change the price.
- **The sheet**: the mirror shows what Coco understood so far while she types (any order, `studioLoose`), her words as
  colored chips by kind (red = a word Coco does not know), the words Coco knows by kind (tap to add), the order rule,
  "Make it", "Show me how", and the voice (the same optional toggle as Ask Coco: what she says goes into the box).
- **A design is a token** that carries everything needed to draw it, so other kids' phones show it too:
  `~base.opinion.size.quality.color.material.psize.pquality.pcolor.pattern.fit` (spaces as `-`, fit `p` = Perfect
  Fit). It is the Shop row's `Item` and a Wardrobe entry like any item.
- **Drawing** (`designSvg` in Index.html): the bases are gray pictures with leveled shading (`tools/cut_items.py
  --white`), colored by a ramp per color and material (an SVG filter; gold and silver have their own ramps), with the
  white sticker outline drawn in code; a pattern is an SVG pattern masked by the base's own light (so it follows the
  folds); shiny, silk, leather and the metals get highlights, glittery a glitter layer, sparkly twinkling sparkles,
  glowing a soft glow in its color, denim and wool a texture, rainbow a rainbow; the size scales it. The certificate
  draws designs on its canvas (`designCanvas`).

## Shine = Memory: items made of words

Every rare and epic item (16, `SHOP_RECIPES` in Shop.js) is made of words: 4 for a rare item, 6 for an epic one, with
their meanings, in two sets: `a` for A1-A2 and `b` for B1 and up (Rainbow Wings: rainbow, feather, sky, fly / vivid,
soar, spectrum, plumage).

- **Before buying**: the item's sheet shows its words, and Ask Coco opens only once she has collected them all. Collecting
  is a quick quiz (the meaning, pick the word from four); a word she misses shows its meaning, is said aloud, and comes
  back at the end of the round, which ends when every word was answered right once.
- **Memory** (Words tab, `Memory`, one entry per word, shared by items with the same word): a word answered right the
  first time comes back in 3 days, a missed one tomorrow; then 7 and 21 days later (`REVIEW_DAYS`), and after the
  21 days it is hers for good. A word answered right before its day stays where it is.
- **Shine**: 100% while no word waits; a waiting word counts half, and a little less every day it waits; never below
  40%. Full shine adds glints on the item; less makes it duller (an SVG filter). The words of an item are kept with the
  purchase (Shop `Words`), so her level going up does not change them. Items bought before they had words always shine.
- **Polish**: the same quiz with the waiting words, from the item's sheet ("Polish · 2 words") or from home (a bar under
  the pet: "Rainbow Wings · 93% · 2 words to polish").
- Other kids see how her items shine (`pet.shine`).

## Upgrades

- **Second Chance** 300: in solo rounds (not the gate challenge, not duels or together games), the first mistake on an
  item gets a hint and one more try: two options left (Hear it also plays it again, slowly), the half of the sentence
  with the mistake (Spot it), or the right start kept in place (Build it). Right on the second try = 1 XP (half);
  the item still counts as missed for the review, and not for a perfect round. The result shows "+1 on the second
  try"; `apiGameResult` gets `second` and checks she owns the upgrade.
- **Word Saver** 250: a bookmark on a missed item's answer and on the round's result list saves a word (or a sentence)
  to "My words" (Words tab, `Saved`, up to 150). A saved item joins her review (back tomorrow). "My words" (home, under
  the games) lists them with read-aloud, and "Practice my words" plays a round of them (game `mine`, due ones first,
  each item in its own game, XP as usual).
- The Streak Shield is unchanged.

## Data

- **Shop** gets `Words` (the words an item was bought with). A design is a row whose `Item` is its token, `Sentence`
  = the design as a sentence ("A big sparkly purple velvet cape with tiny gold stars.").
- **Words** (new tab): `Girl, Saved, Memory, Updated`. `Saved` = game item ids; `Memory` = `word|box|due ...`
  (box 5, no date = hers for good).
- SETUP v13 adds the tab and the column.

## API

| Function | Purpose |
|---|---|
| `apiDesign(base, text, fresh)` | Grade a design again, check the coins, save it and wear it. `fresh` = no hint before (Perfect Fit needs it and 3+ words). Returns the shop and `bought`. |
| `apiWords(item, right, missed)` | Collect an item's words or polish them (`item` '' = every word item she owns). Only words of that item count. Returns the shop. |
| `apiSaveWord(id, on)` | Save or remove a game item in her deck (Word Saver only). Returns `{ saved }`. |
| `apiGameResult(..., second)` | `second` = items right on the second try (Second Chance only); game `mine` = her saved words. |

`apiShop` adds `bases`, `words` (per item made of words: its words with meaning and state `new` / `ok` / `due` /
`mastered`, owned, shine), `polish` (words waiting), `upgrades`, and her designs in `items` (`design: true`).
`apiDashboard` adds `upgrades`, `polish` (`{ n, items }`), `games.saved` (Word Saver), and `pet.shine`.

## Art

The four bases are one Gemini sheet (`art/shop/bases.jpg`): plain white items, no outline, on a flat saturated blue
background, cut by `python tools/cut_items.py <sheet> docs/items base-beanie,base-bow,base-scarf,base-cape --white
--size 400` (gray, leveled; the alpha of the edges comes from how much blue shows). They sit like other items
(`tools/wear-fit.json`); contact sheets can show a base in a color: `base-cape~purple`.

## Testing

`test/sim.js`: the upgrades, Second Chance XP (and without the upgrade), the Word Saver (save, unsave, the review,
rounds of `mine`), recipes by level, collecting, buying only with the words, the shine fading and stopping at 40%,
polishing, words kept for good, other kids seeing the shine, the Studio's grades and hints, making a design, Perfect Fit,
the same design twice, wearing designs, parents seeing the sentence; and `studioGrade` in the app against the server on
34 descriptions. Screens: `test/dev-server.js` (Aviv may shop early; `/dev/coins`, `/dev/day` to make words wait).
