# Chacho's Nest: the clay pictures

Every picture in the Nest (words, unit icons, Chacho says moves, the color blobs and the chick that numbers repeat) is a
clay sticker made for the app, in the same world as the pets (`tools/PETS.md`): Pixar-like soft matte polymer clay, a
white die-cut outline. The owner asked for it on 2026-10-27 ("the emojis are not premium at all"); the Fluent Emoji
pictures stay only as a fallback for a name that has no clay version yet.

- `tools/nest-art.json`: the sheets, 6 pictures each, in sheet order (row-major), with what each sticker shows.
  `blob-<hex>` is the clay blob of a color in `docs/nest/nest.js`; `count-token` is the chick that Find it repeats
  for a number; `x1`..`x5` are spares.
- `python tools/nest_art.py prompt <sheet>` prints the Gemini prompt.
- Generate in the **Gemini web app** (free, owner's Google account), **one new chat per sheet**. A script in the
  Gemini tab can type and send the prompts one after another (new chat, `execCommand('insertText')`, the Send button),
  but **Download full-sized image needs a real click**: open each chat's address afterwards and click it.
- `python tools/nest_art.py cut <sheet> <Downloads/Gemini_Generated_Image_*.jpg>` keeps the sheet in
  `art/nest/sheets/<sheet>.jpg` (outside the repo) and writes `art/nest/cut/<name>.png` plus
  `art/nest/preview/<sheet>.jpg`. Look at the preview: a wrong picture means a new chat for that sheet (or the spare
  slots of `extra`).
- `python tools/nest_art.py status` lists what nest.js needs that has no clay version.
- Then `python tools/nest_pics.py` (writes `docs/nest/pics/*.webp`, 320 px), `node test/nest-check.js`, raise `NEST_V`.

The parrot picture is Chacho himself (`docs/coco/happy.webp`, squared into `art/nest/cut/parrot.png`).
People in the pictures have varied skin tones; the feelings are one child's face, and the actions one child (yellow
t-shirt, blue shorts), so a toddler compares what changes and not who it is.
