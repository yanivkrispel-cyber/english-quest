# The Wordrobe, phase 1: Coco's shop opens

A shop where the points and XP the kids earn buy clothes, accessories, victory moves and an upgrade for
their pet, and where **every purchase is made in English**: Coco the parrot, a fashion designer who only
speaks English, sells only to kids who ask nicely. Proposal and the owner's picks:
https://claude.ai/artifact/6GkZRhCvB23frmsM37GXvx (picks: Ask Coco + moves and upgrades, coins next to
the points, Coco, voice optional, Halloween Drop launch).

Phase 1 (this spec): coins and the opening gift, Coco's shop with Ask Coco, 30 items in six places on the
pet, four victory moves, the Streak Shield, items on the pet everywhere it appears, the Halloween Drop,
coins and purchases in the parent view. Later phases (not here): Say it Wear it, Shine = Memory, Second
Chance and Word Saver (phase 2); Talking Charms, Living Legends, Runway & Gifts (phase 3).

## Coins

- Every point and every XP is also a coin: coins earned = all task points (with the full-week bonus, as in
  `stats.earned`) + all XP from games, duels, gates and bonuses. Spent = the sum of `Paid` in the Shop tab.
  The balance is computed on every read, like the duo streak, so no number can drift.
- The **opening gift** is that sum on the day the shop opens: a kid who earned 600 points and 500 XP opens
  with 1,100 coins. The first visit to the shop plays the gift (once per phone).
- Coins and points are separate: buying never lowers the points, and the parents' rewards ladder (Rewards
  tab, `Redeemed` column) does not change.

## The shop opens on a date

- `Settings.ShopOpens` (default `2026-10-24`). Before it, home shows a teaser: Coco asleep, "Coco's
  Wordrobe opens in N days", and the coins already waiting. The shop can be visited (and asking can be
  practiced), but nothing can be bought. `Settings.ShopEarly` = kid names (comma separated) who may shop
  before the date (the owner's own player, for a try-out).
- From the date on, home has the shop card (Coco, coins, "Halloween Drop is here" while it runs), and a hanger
  button on the pet card opens My wardrobe. The first visit plays the opening gift (once per phone): a gift box
  opens into Coco and the coins count up.

## Catalog

One item per place: **head, face, neck, back, aura, buddy**. Prices by rarity: Common 80-150, Rare 300-450,
Epic 900-1,200. Every item and price is shown up front: no random boxes, no real money, no timers.
The list lives in `SHOP_ITEMS` (src/Shop.js).

| Place | Common | Rare | Epic |
|---|---|---|---|
| Head | Star Beanie 120, Flower Crown 140, Big Bow 110, Beret 130, Bunny Ears 120, Party Hat 100, Chef Hat 120 | Unicorn Horn 380 | Wizard Hat 950 |
| Face | Round Specs 90, Heart Glasses 100, Star Glasses 110 | Pilot Goggles 340 | Masquerade Mask 900 |
| Neck | Bow Tie 80, Heart Locket 130 | Pearl Necklace 320 | Crystal Pendant 900 |
| Back | Heart Balloon 100, Butterfly Wings 150 | Fairy Wings 420, Rainbow Wings 450 | Angel Wings 1,100 |
| Aura | Sparkle Aura 100, Heart Aura 120 | Rainbow Aura 380 | Galaxy Aura 1,000 |
| Buddy | Baby Chick 110, Bluebird 140, Baby Bunny 130 | Star Sprite 380 | Baby Dragon 1,200 |

**Halloween Drop** (season `halloween`, 17 Oct - 7 Nov every year; owned items stay forever, the drop
comes back next year): Pumpkin Hat 140 (head), Witch Hat 380 (head), Candy-corn Glasses 120 (face),
Bat Wings 420 (back), Spider-web Aura 300 (aura), Tiny Ghost 150 (buddy). With it, a free culture card,
"Trick or treat?" (a short text about Halloween, and six words to hear).

**Victory moves** (one is chosen at a time): Spin 80, Backflip 150, Moonwalk 320, Rocket Jump 450. The pet
does its move after a round of 4/5 or better, when it wins a duel or Tug of War (or the team wins a Boss Battle
or Talk & Tap: both pets do theirs), on the level-up ceremony, and when tapped on the home card.

**Upgrade**: Streak Shield 400. Once owned, one missed day per week (Sun-Sat) no longer breaks the daily
streak; the saved day does not add to it (the week list shows it as "Saved"). Solo practice only: duels and
duo streaks are not touched by upgrades.

Colors: Star Beanie (blue, pink, purple, green), Big Bow (pink, red, blue, purple), Beret (red, blue, purple),
Heart Glasses (pink, red, purple), Bow Tie (red, blue, pink, purple), Heart Balloon (red, pink, purple), Butterfly
Wings (blue, pink, orange). The first is the drawn one; the others are a hue turn of the same picture (an SVG
filter on the pet, a CSS filter on the thumbnails). A color is asked for in English ("Do you have it in pink?"),
and an owned item can be worn in any of its colors (My wardrobe).

## Ask Coco

A purchase is a short conversation with Coco (the item's sheet):

1. Coco greets the kid and the item: "Ooh, the Star Beanie! Excellent taste."
2. Phrase tiles the kid can tap (each one shows as her own chat bubble, Coco answers):
   **How much is it?** (the price, and "ask me nicely and I might give you a discount"),
   **Can I try it on?** (her pet wears it in the mirror), **Do you have it in ...?** (one tile per color).
3. **Ask for it**: she builds her request from word tiles:
   `Give me` `I` `want` `I'd like` `Can` `Could` `May` `have` `please` `the` `<color>` `<item>` `?` `.` `Thank you!`
   A manners meter lights up as she builds, and the price drops:

   | Chips lit (please, a question, a polite word: could / may / I'd like, thank you) | Discount |
   |---|---|
   | 0 ("Give me the hat.") | full price |
   | 1 ("I want the hat, please.") | 5% |
   | 2 ("Can I have the hat, please?") | 10% |
   | 3 | 12% |
   | 4 ("Could I please have the hat? Thank you!") | 15% |

4. **Buy**: the sentence must be good English. Accepted shapes (X = `the [color] item`):
   `[Please] give me X.` · `I want X[, please].` · `I'd like X[, please].` ·
   `Can/Could/May I [please] have X[, please]?`, each with an optional `Thank you!` at the end, and one
   "please" at most. Otherwise Coco gives one friendly hint and the kid fixes it, for example:
   a question without "?", "?" after a statement, the color after the item ("In English the color comes
   first: the pink star beanie"), a missing "the", two "please"s. "Show me how" fills
   `Can I have the X, please?` (10%); the best price needs "Could" or "May" and "Thank you!".
5. **Voice** (optional, off by default, a toggle in the shop remembered on the phone): the mic button uses
   the browser's own speech recognition (no new permissions on the server; on Android it goes through
   Google). The words heard are matched to the tiles and graded the same way; the tiles always work.

The server grades the sentence again (`cocoGrade` in `Shop.js`, the same rules as the app) and decides the
price. A bought item is worn at once (replacing what was in its place); a bought move becomes the move.

## Items on the pet

Every pet sticker (10 pets x 5 stages x 6 moods = 300) has its eyes marked once: the point between the eyes, the
distance between them (D) and the tilt of the eye line, plus the middle of the body. `tools/pet_fit.py` finds open
eyes in the picture (a dark iris with a catchlight) and sunglasses (the cool mood); closed eyes and the misses are
marked by hand in `tools/pet-fit-fix.json` (rough marks, snapped to the nearest eye line), all checked on contact
sheets. Items are placed in units of D from there, so a hat follows the head when the pet jumps, thinks or sleeps:

- `tools/wear-fit.json`, hand-tuned: per pet the top of the head, the head's width, the neck and where wings
  attach; per item its size and its own attach point (the brim of a hat, the middle between two lenses).
- Head items sit on top; the legs of a headband and the back half of a chain are drawn behind the pet (`behind`);
  glasses sit on the eyes (in the cool mood they replace the pet's sunglasses: the happy sticker is used);
  wings are behind the body; the buddy floats beside the pet (in the air or on the ground); the aura is drawn
  in code behind the pet.
- `python tools/wear_fit.py sheet|big ...` renders contact sheets with the same math as the app;
  `python tools/wear_fit.py export` writes the data (FIT) into src/Index.html.
- In the app, `petArt(pet, mood, cls)` returns one inline SVG (the sticker plus the items) that takes the place and
  the CSS class of the old picture: home, games and results, the map, the gate and level-up (and its certificate,
  drawn on a canvas by `drawPet`), the growing celebration, duels, Boss Battle, Tug of War, Talk & Tap, duo cards
  and the opening animation (the kid's own pet). `paMood(el, mood)` changes the mood with the clothes on;
  `playMove(el, move)` plays the victory move. The round face avatars stay plain.
- Other kids' pets come with what they wear (`pet.wear`, `pet.move` in every player the server sends).

## Data

- **Shop** tab: `Timestamp, Girl, Date, Item, Color, Price, Paid, Manners, Sentence`. One row per purchase
  (Manners = chips lit, 0-4; Sentence = what she said).
- **Wardrobe** tab: `Girl, Wear, Move, Updated`. `Wear` = `item` or `item:color`, space separated, one per
  place.
- Settings: `ShopOpens`, `ShopEarly`.

## API (name, pin first)

| Function | Purpose |
|---|---|
| `apiShop()` | The shop: open or not, coins (earned, spent, balance), the catalog with what she owns and what is available now, what she wears, her move, the shield. |
| `apiShopBuy(item, color, words)` | Buy with a request (`words` = the tiles, or the words heard). Grades it, checks the coins, saves the purchase and wears the item. Returns the shop and `bought` (price, paid, chips). |
| `apiWear(wear, move)` | Change what the pet wears and the move (only owned items, one per place). |

`apiDashboard` adds `coins`, `shop` (open, opens, season) and `pet.wear` / `pet.move`; `stats.shield` and
the streak's saved day.

## Parent view

Per kid: coins, and the last purchases with the sentence she used ("Could I please have the star beanie?
Thank you!").

## Art

Free, in the Gemini web app like the pets (recipe and prompts: `tools/PETS.md`): Coco as a 6-pose sticker sheet
(`docs/coco/<mood>.webp`, the same mood names as the pets), and the items as front-view sticker sheets of six,
cut by `tools/cut_items.py` into `docs/items/<id>.webp` (lens openings become transparent; `--no-holes` for sheets
without openings). Two props: `jack-o-lantern` (Halloween) and `gift-box` (the opening gift). Source sheets are
kept outside the repo in `C:\Dev\EnglishLessons\art\shop\`.

## Testing

`test/sim.js`: coins from every source, the opening date and early names, buying (grading, coins, owned
twice, unavailable seasonal item, wrong color), wearing (owned only, one per place), the streak shield,
the parent data; and the app's `cocoGrade` against the server's on a list of requests (they must agree).
Screens: `test/dev-server.js` (the real server code): Aviv may shop before the opening (ShopEarly), Ziv sees the
teaser; `GET /dev/coins?who=Aviv&n=1500` gives coins (a Bonus row, so the pet grows too) and
`GET /dev/day?d=2026-10-24` moves the server's date (the opening, the Halloween Drop). `test/preview.js` mocks
the shop for Aviv too (a rough grade).
