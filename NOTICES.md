# Third-party notices (English with Chacho)

Everything in the app that was not written or drawn for it, with its license, where it is in the repo and what we must do
to keep using it. Written 2026-11-01 (night review, finding 17) from the repo itself: the tools that fetch or make each part
name its license (the file is given for each line). A store submission links this list from the app's "About" text and the
privacy page. Update it in the same commit as any new font, icon set, sound, model or picture source.

| What | Where in the app | License | Source of the claim in the repo | What it asks of us |
|------|------------------|---------|----------------------------------|--------------------|
| Phosphor Icons 2.1.1, bold and duotone web fonts | `docs/fonts/phosphor-2.1.1*/` (cut by `tools/icon_subset.js`), unpkg on the Apps Script copy | MIT | `tools/icon_subset.js`, the CSS header | keep the copyright and license text with the files (below) |
| Plus Jakarta Sans | `docs/fonts/plus-jakarta-sans/` | SIL Open Font License 1.1 | `docs/fonts/plus-jakarta-sans/style.css`, `tools/fonts_local.js` | keep the license with the font files; do not sell the font by itself; a changed font must not keep the name |
| Chatterbox (Resemble AI), the text-to-speech model that recorded every Chacho line | the recordings in `docs/talk/audio/`, `docs/nest/audio/`, `docs/missions/audio/`, `docs/say/` (the model itself is not shipped) | MIT | `specs/voice.md`, `tools/voice.py`, `tools/voice_kernel.py` | none for the audio; credit is a courtesy. Every clip carries Resemble's inaudible **Perth watermark**, which marks it as machine-made (`specs/voice.md`); do not remove it, and say in the store listing that Chacho's voice is computer-generated |
| Kokoro-82M (kokoro-onnx, voice `am_fenrir`) | the reference clip Chatterbox clones Chacho's voice from (`python tools/voice.py refs`); the older recordings it made are replaced | Apache 2.0 | `tools/missions_audio.py`, `tools/talk_audio.py`, `tools/nest_audio.py`, `CLAUDE.md` | none for generated audio; keep the license if the model is ever shipped. The voice is a synthetic voice, not a real person's |
| Real animal and thing sounds of the Nest (17) | `docs/nest/sounds/` | CC0 (BigSoundBank, public domain equivalent, no credit needed) | `tools/nest-sounds.json` (the page of each sound), `tools/nest_sounds.py` | nothing; the list of pages stays in the repo as proof |
| Microsoft Fluent Emoji 3D | A1 picture words of Match it (`docs/pics/`), the fallback picture of a Nest word without its own clay picture (`docs/nest/pics/`) | MIT | `tools/pics.py`, `tools/nest_pics.py`, `tools/PETS.md` | keep the copyright and license text (below). Pictures inside games, never UI icons (the founding rule) |
| Pictures made with Google Gemini (the pets, Chacho's poses, clay icons, shop items, Nest stickers, journey scenery) | `docs/pets/`, `docs/coco/`, `docs/icons/`, `docs/items/`, `docs/nest/pics/` (clay stickers) | Google's Generative AI terms: Google claims no ownership of what is generated; use must follow its Prohibited Use Policy | `tools/PETS.md`, `tools/NEST-ART.md`, `tools/ui_icons.py` | no license fee or credit. A picture made wholly by AI likely has **no copyright** (US: Thaler v. Perlmutter, 2025), so others may copy it: the protection is the trademark on the name and on Chacho (owner checklist, `EnglishLessons-work/night-review/owner-actions.md`). Keep the prompts and source sheets (`art/`, outside the repo) as the record of how each was made |
| test-english.com topic list | `catalog.tsv`, `src/Catalog.js` (server only), the old daily link for kids with `Girls.Missions = no` | their terms (as read in the review): linking is allowed, republishing their content is not | `gen-catalog.js` | we link and keep titles and addresses on the server; every mission, talk and game is our own writing. The plan to stop depending on their topic order: `specs/curriculum.md` |

No other third-party code runs in the app: no analytics, ads, crash reporting or social SDKs (`specs/store-readiness.md`
rule 1). Web Push is signed by our own code (`src/Push.js`, `worker/api/push.js`); the server runs on Cloudflare Workers
under the owner's account terms.

## License texts

### MIT License: Phosphor Icons

Copyright (c) 2023 Phosphor Icons

### MIT License: Microsoft Fluent Emoji

Copyright (c) Microsoft Corporation.

### MIT License: Chatterbox (Resemble AI)

Copyright (c) 2025 Resemble AI

The MIT text (the same for the three above):

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
> modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
> Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
> WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
> ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### SIL Open Font License 1.1: Plus Jakarta Sans

Copyright 2020 The Plus Jakarta Sans Project Authors (https://github.com/tokotype/PlusJakartaSans). This Font Software is
licensed under the SIL Open Font License, Version 1.1, available with a FAQ at https://openfontlicense.org.

### Apache License 2.0: Kokoro-82M

Kokoro-82M by hexgrad, licensed under the Apache License, Version 2.0 (https://www.apache.org/licenses/LICENSE-2.0). Only
its generated audio was used; the model is not part of the app.

## Before a store submission

- Check the copyright lines above against each project's own LICENSE file (they were copied from memory of the projects,
  the license names from the repo's tools): Phosphor (github.com/phosphor-icons/web), Fluent Emoji
  (github.com/microsoft/fluentui-emoji), Chatterbox (github.com/resemble-ai/chatterbox), Plus Jakarta Sans
  (github.com/tokotype/PlusJakartaSans), Kokoro (huggingface.co/hexgrad/Kokoro-82M).
- Show this list in the app (parents' area, "About"), since the fonts' and icons' licenses ask for the notice to travel
  with the copies on the phones.
