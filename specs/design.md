# Design system

The owner, 2026-10-27: every screen must look like one app ("שלא יהיה עוד עיצובים לא תואמים"). The look is Liquid Glass
(`Design2.jpg` in the parent folder is the reference). Everything below already exists in `src/Index.html`: a new
screen is built from these pieces, not from new ones.

## The rules

1. **Use the tokens and the classes.** Colors come from `:root` (`--ink`, `--muted`, `--faint`, `--primary`, `--primary-2`,
   `--teal`, `--teal-2`, `--orange`, `--danger`, `--glass`, `--glass-soft`, `--stroke`, `--shadow`, `--inner`, `--iri`)
   or from the tile gradients (`.t-*`). A new hex color needs a reason (a world's colors in `look()`, a pet's palette)
   and goes in a variable or a `.t-*` class, never scattered in inline styles.
2. **Surfaces:** cards are `.glass` (radius 30) or `.soft` (radius 22) with `.panel` padding; bottom sheets are `.sheet`.
   No flat white boxes, no hard borders, no dark cards on the light background (the game and result screens with a
   world's colors are the exception that already exists).
3. **Buttons are clay** (owner, 2026-10-29: the clay of the pets for everything you tap; the "Clay controls" block at the
   end of the main style in Index.html): a soft matte puff lit from above and shaded below (`--clay-up`, `--clay-down`,
   `--clay-drop`) that squishes on a tap and springs back (`--clay-spring`). `.btn` pills only (52 px high, `.btn-sm` 38 px):
   `.btn-primary` for the one main action of a screen, `.btn-teal` for a second positive action, `.btn-glass` (now a light
   clay puff) for the rest, `.icon-btn` for a round icon button. Answers are `.opt` clay keys (`.sel`, `.ok`, `.no`); a card
   you tap is a `button.soft` / `button.glass` and gets the clay slab by itself. One primary button per screen. No square
   buttons, no new button colors, no flat or outlined buttons; a new tappable thing uses these classes or the `--clay-*` tokens.
4. **Icons:** Phosphor through `icon(name, 'bold' | 'duotone')` (only those two weights load), inside a clay
   `.tile` (40 px, `.tile.sm` 32 px). Where a clay picture exists (`docs/icons/<phosphor name>.webp`, made in Gemini with
   `tools/ui_icons.py`), `clayIcons()` swaps it in by itself in tiles, the tab bar and the Nest buttons: a new object icon in a
   tile gets a clay picture (a new row in `tools/ui-icons.json`), small controls (close, back, check, caret) stay Phosphor. **Never emoji in the UI** (founding rule; emoji only inside WhatsApp text).
5. **Pictures:** original clay art (pets, Chacho, Nest stickers, items; `tools/PETS.md`, `tools/NEST-ART.md`). No clip art,
   no stock icons, no emoji standing in for a picture.
6. **Type:** Plus Jakarta Sans (400 to 800). `h1` 30/800, `h2` 18/700, `.sub` 15 muted, `.label` 12/700 uppercase.
   Nothing a kid must read under 13 px. Hebrew text (parents' area, hints) uses the system font, `direction:rtl`
   (`.mhe`, `PHE` / `T()`).
7. **Chips and status:** `.chip` with `.purple`, `.teal`, `.orange`, `.red`. Right/wrong: teal and `--danger`, the same as
   the games.
8. **Background:** the body gradient with the four `.blob`s. A screen does not set its own page background (except the
   full-screen play frames and the worlds, which use the world's colors, the Nest's play sky, `nkSkyOn`, and the Nest's
   living home, `.nkh` in `docs/nest/home.js`: a full-screen clay scene with its own sky by the clock, hills and tree; its
   colors are variables on `.nkh`, and its buttons on top stay `.btn-glass` icon buttons).
9. **Motion:** short and soft (`.btn:active` scale .97, sheets rise with `up`). Nothing that flashes or shakes for long;
   nothing moves when a button in a play screen is tapped (the play frame rules in `CLAUDE.md`).
10. **The Nest (ages 2 to 7)** uses the same glass and tokens, bigger: tap targets at least 88 px, pictures instead of
    words, no text the kid must read. A right answer is a moment, never just a colored border: use `nkCheer` (stars, the
    gold star into the progress row, Chacho hops, the tune) for every new Nest game.
11. **Same thing, same look.** Before drawing a new card, list, header or empty state, find the closest existing one
    (home tabs, missions, shop, parent area) and reuse its classes. Two ways to show the same kind of thing is the bug
    this file exists to stop.

## Checking

Every new or changed screen is looked at next to its neighbours (the home tabs, a mission, the parent view) on a phone
frame **and on a tablet** (`test/tablet.html`, `specs/tablet.md`) before it ships. If it looks like it came from another
app, it is not done.
