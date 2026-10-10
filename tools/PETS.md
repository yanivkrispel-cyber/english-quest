# Pets: how the art is made

Ten pets, five growth stages each, six moods per stage. Every stage is one **sticker sheet** (3×2 grid,
flat gray background, white die-cut outlines), generated for free in the **Gemini web app** (Nano
Banana, owner's Google account; there is a daily limit, but 42 images went through in one session on
2026-10-10), then cut into stickers with `tools/cut_sheet.py`. All 10 pets have all 5 stages (done
2026-10-10).

| Pet id | Name | Stage-2+ scarf |
|---|---|---|
| turtle | Shelly | orange |
| monster | Fizz | sunny-yellow |
| cat | Mochi | sky-blue |
| cow | Daisy | pink |
| fawn | Fern | leaf-green |
| donkey | Dusty | red |
| sheep | Cloud | lavender |
| giraffe | Zuri | turquoise |
| elephant | Peanut | coral |
| lion | Leo | royal-blue |

Moods, in sheet order (row-major): `happy`, `celebrate`, `thinking`, `oops`, `sleepy`, `cool`.
Files: `docs/pets/<pet>/<stage>-<mood>.webp`. The source sheets (JPEG, ~0.5 MB each) are kept outside
the repo in `C:\Dev\EnglishLessons\art\sheets\<pet>-<stage>.jpg`.

## Adding a stage

1. Generate the sheet (prompt below). **One new Gemini chat per sheet.** Generating several
   characters in one chat makes features bleed between them (a cat got the monster's round ears),
   and asking for "the next stage" inside the same chat returns almost the same picture.
2. Download the full-size image (it lands in `Downloads/Gemini_Generated_Image_*.jpg`), copy it to
   `art/sheets/<pet>-<stage>.jpg`, then from `app/`:
   `uv run --no-project --with pillow --with numpy --with scipy python tools/cut_sheet.py ../art/sheets/<pet>-<stage>.jpg docs/pets/<pet> <stage> --preview /tmp/check.png`
   (it stops with an error unless it finds exactly 6 stickers in 2 rows of 3).
3. Raise `PET_ART[<pet>]` in `src/Index.html` to the new stage. Kids whose pet is already that far
   get the growing celebration the next time they open the app.

Gemini web tips:
- In a fresh chat, Enter often does not send; click the send arrow (sometimes twice). If it answers
  with a written prompt instead of an image, reply "Please generate this image now".
- The Chrome window must be on screen (not minimized or covered, no screensaver): in a hidden window
  Gemini does not send and screenshots fail.
- "Download full-sized image" works once per tab. A second download from the same tab (or right after
  generating) silently does nothing: open the chat's URL in a new tab and download there.
- A missing accessory in some poses (scarf, backpack, cape, crown) or stray text ("Oops" label) is
  fixed in the same chat: "Edit this image: add the same ... in pose 5 (the sleeping ..., bottom
  middle) ... Keep everything else exactly the same: all 6 poses, the 3x2 layout, the white sticker
  outlines and the flat gray background." Layout problems (3 rows, a 7th sticker, a spec sheet with
  text) do not fix by editing: start a new chat.

## Prompt

```
Create an image: a character sticker sheet for a children's English-learning app. CHARACTER: <DESCRIPTION>
GROWTH STAGE <N> of 5, <STAGE TEXT>. LAYOUT: landscape 3:2 image with exactly 6 poses of this same
character in a neat 3x2 grid (3 columns, 2 rows), each pose centered in its own cell, with wide empty
space between poses and around the edges. Poses in this exact order, left to right, top row first:
1) Happy: waving hello with one hand, big open-mouth smile. 2) Celebrating: jumping with both arms up,
eyes squeezed shut with joy. 3) Thinking: one hand on chin, looking up curiously. 4) Oops: embarrassed
giggle, covering mouth with one hand. 5) Sleepy: curled up asleep, eyes closed, peaceful smile.
6) Cool: wearing black sunglasses, confident grin, thumbs up. The character must look identical in
all 6 poses. STYLE: premium 3D render, like a Pixar character made of soft matte polymer clay, smooth
rounded shapes, subtle clay texture, soft studio lighting, rich but gentle colors. Each pose is a
die-cut sticker with a thick, clean, continuous white outline around the whole silhouette.
BACKGROUND: one perfectly flat, uniform medium-gray color (#909090) everywhere, no gradient, no
texture, no floor, no shadows. No text, no letters, no numbers, no extra symbols or decorations anywhere.
```

Stage texts (stage 1 says "a baby <animal>" in the description; later stages "a young <animal>"):

1. **BABY**: a newborn, very small and extra chubby, oversized head, tiny stubby limbs, no clothes and no accessories
2. **KID**: no longer a baby but a playful young kid: clearly taller, with the head about one third of the total body height, longer arms and legs, a slimmer body, a sporty confident look, wearing a soft <SCARF> scarf knotted around the neck in all 6 poses (also while sleeping)
3. **EXPLORER**: an adventurous older kid: taller again, the head about a quarter of the body height, athletic, wearing a soft <SCARF> scarf knotted around the neck and a small brown leather explorer backpack with straps, both clearly visible in all 6 poses (also while sleeping)
4. **HERO**: a brave young teen hero: tall and confident, wearing a soft <SCARF> scarf knotted around the neck and a short flowing royal-purple cape with a golden star clasp, both clearly visible in all 6 poses (also while sleeping), no backpack
5. **LEGEND**: a grown-up legend: tall, proud and wise but still cute, wearing a gold-trimmed royal-purple cape and a small shiny golden crown, both clearly visible in all 6 poses (also while sleeping)

("both clearly visible ... also while sleeping" matters: without it the sleeping pose often loses the
accessories, and the crown went missing in 4 of 6 poses twice.)

## Descriptions

- **turtle**: "Shelly", a ___ turtle with bright leaf-green skin, thin yellow stripes on the neck and cheeks, a round olive-green shell with a golden-yellow rim, a cream belly plate, rosy red-orange blush cheeks, and huge glossy dark-brown eyes with two white catchlights.
- **monster**: "Fizz", a ___ fluffy monster with soft sky-blue fur (rendered as soft fuzzy clay), a creamy white face and belly, a fluffy pink-and-lavender tuft of hair on top of the head, two small lavender horns with tiny white speckles, big round ears with pink insides, a few small lavender spots on the forehead, a fluffy pink-lavender tail, pink paw pads, rosy cheeks, and huge glossy blue eyes with white catchlights.
- **cat**: "Mochi", a ___ kitten with orange-and-white tabby fur (orange head and back with soft darker orange stripes, white muzzle, chest and paws), pointed triangular cat ears with pink insides, a light-blue collar with a small golden bell (stage 1 only), pink paw pads, a striped orange tail, rosy cheeks, and huge glossy amber-brown eyes with two white catchlights.
- **cow**: "Daisy", a ___ calf (cow), white with soft black patches, black ears with pink insides, a pink muzzle with two nostrils, two small cream horn nubs, a small white daisy flower tucked behind one ear, a thin tail with a black tuft, small dark hooves, rosy cheeks, and huge glossy dark-brown eyes with two white catchlights.
- **fawn**: "Fern", a ___ fawn (deer), warm caramel-brown with small white spots on the back, a fluffy cream chest, a cream muzzle with a small dark nose, big soft ears with cream insides, two small velvet antler nubs, a short fluffy tail, small dark hooves, rosy cheeks, and huge glossy dark-brown eyes with long lashes and two white catchlights.
- **donkey**: "Dusty", a ___ donkey, soft light-gray body, a cream muzzle and cream belly, long upright ears with dark-gray tips and pink insides, a short spiky dark-gray mane tuft on top of the head, a thin tail with a dark tuft, small dark-gray hooves, rosy cheeks, and huge glossy dark-brown eyes with two white catchlights.
- **sheep**: "Cloud", a ___ lamb (sheep) with a fluffy cream-white wool body made of soft round clay curls, a smooth cream-beige face, small floppy ears with pink insides, a fluffy wool tuft on top of the head, a tiny pink nose, small gray hooves, rosy cheeks, and huge glossy dark-brown eyes with two white catchlights.
- **giraffe**: "Zuri", a ___ giraffe, butter-yellow with soft orange-brown patches, two small ossicones (horns) with brown fluffy tips, a short brown mane, a cream muzzle, a thin tail with a brown tuft, small brown hooves, rosy cheeks, and huge glossy dark-brown eyes with long lashes and two white catchlights. (Stage 1: "a short neck"; later stages: "a longer neck".)
- **elephant**: "Peanut", a ___ elephant, soft powder blue-gray skin, big round ears with pink insides, a short curled trunk, a tiny tuft of hair on top of the head, light cream toenails, a thin tail with a small tuft, rosy cheeks, and huge glossy dark-brown eyes with two white catchlights.
- **lion**: "Leo", a ___ lion, warm golden-yellow fur, a fluffy orange mane around the face (cub-size at stage 1, big later), a cream muzzle and cream belly, small round ears, a tail with an orange tuft, pink paw pads, rosy cheeks, and huge glossy amber-brown eyes with two white catchlights.

## The Wordrobe: Coco and the shop items

Same Gemini routine (one new chat per sheet, download from a fresh tab). Source sheets: `art/shop/*.jpg`.

**Coco** (`docs/coco/<mood>.webp`, cut like a pet stage: `tools/cut_sheet.py <sheet> <tmp> 1`, then rename
`1-<mood>.webp` to `<mood>.webp`): the pet prompt above with this character and these poses:
"Coco", a fashionable young parrot who runs a clothes shop and is a fashion designer: a scarlet macaw with bright red
feathers, blue and yellow wing feathers, a long red-and-blue tail, a curved cream-white beak, rosy cheeks, huge glossy
dark-brown eyes with two white catchlights, small round gold-rimmed glasses, and a yellow tailor's measuring tape draped
around the neck in all 6 poses. Poses: 1) Welcome: one wing open in a warm welcoming gesture. 2) Delighted: clapping both
wings, eyes squeezed shut. 3) Thinking: one wing tip on the beak, looking up. 4) Oops: a puzzled look, head tilted, one
wing raised. 5) Sleepy: eyes closed. 6) Cool: black sunglasses instead of the glasses, a thumbs up. (Gemini added labels
under four poses the first time; "Edit this image: remove the four words ... No text anywhere." fixed it.)

**Items** (`docs/items/<id>.webp`): one sheet of six per kind, cut with
`python tools/cut_items.py <sheet> docs/items <id1,...,id6> [--size 260] [--no-holes] --preview <png>`
(ids row by row; `--no-holes` for anything without see-through openings, or gray-ish colors get punched out).

```
Create an image: a sticker sheet of 6 separate <KIND> for cute cartoon animal characters in a children's app. Each item
is shown alone, <VIEW>, perfectly centered in its own cell, with NO character, NO head, NO face, NO mannequin and NO body.
LAYOUT: landscape 3:2 image with exactly 6 items in a neat 3x2 grid (3 columns, 2 rows), with wide empty space between
items and around the edges. ITEMS in this exact order, left to right, top row first: 1) ... 6) ... STYLE: premium 3D
render, like Pixar props made of soft matte polymer clay, smooth rounded shapes, subtle clay texture, soft studio
lighting, rich but gentle colors. Each item is a die-cut sticker with a thick, clean, continuous white outline around
its whole silhouette. BACKGROUND: one perfectly flat, uniform medium-gray color (#909090) everywhere, no gradient, no
texture, no floor, no shadows. No text, no letters, no numbers, no labels, no extra symbols or decorations anywhere.
```

- Head wear: VIEW = "front view, exactly as it would look worn on a character's head facing the viewer", and "Each item
  seen straight from the front, its bottom edge level as if sitting on a head." Headphones did not fit the pets' heads
  (the cups land on the face): prefer things that sit on top (hats, headbands, bows).
- Face wear: VIEW = "straight front view, exactly as it would look worn on a face looking at the viewer", plus
  "IMPORTANT: none of the items has lenses or glass: every eye opening is completely EMPTY, showing the gray background
  through it" and "All items the same width, as if made for the same face". Measure the lens centers for
  `wear-fit.json` (`lens`, `at`).
- Neck: necklaces "hanging in a soft U shape"; the top of the chain is drawn behind the pet (`behind` in wear-fit).
- Back: "perfectly symmetrical ... as it would look behind a character facing the viewer ... the empty space between
  the two wings is just gray background".
- Buddies: the pet prompt's style ("like a Pixar character"), "small, chubby and very cute, shown alone in a
  three-quarter view turned slightly to the left, with a happy face and huge glossy dark eyes".

After adding an item: its entry in `tools/wear-fit.json`, a look on contact sheets
(`python tools/wear_fit.py big <png> "cat/1-happy:<id>,lion/4-celebrate:<id>,sheep/2-sleepy:<id>" x`), then
`python tools/wear_fit.py export`, and the item in `SHOP_ITEMS` (src/Shop.js).

## A1 pictures

`docs/pics/` holds the picture words for Match it at A1: Microsoft Fluent Emoji 3D (MIT license),
fetched and converted by `tools/pics_fetch.sh` and `tools/pics.py`.
