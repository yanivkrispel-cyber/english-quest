# English Quest — notes for Claude

Read `README.md` first (features, architecture, sheet tabs, API, deploy). This file holds the
working rules and the traps learned while building it.

## How the owner wants to work
- Do the work end-to-end yourself (clasp, gh, git). Only ask the owner for things that need their
  login or consent (OAuth approval in the Apps Script editor, GitHub device login).
- Premium look: Liquid Glass design (`Design2.jpg` in the parent folder is the reference), Phosphor
  icons in gradient tiles. **No emoji as UI icons** ("makes it cheap"). Emoji are fine inside
  WhatsApp message text. UI language: English. Talk to the owner in Hebrew.
- Ask only when a decision is genuinely theirs; otherwise pick a sensible default and say so.

## Change → test → deploy
1. Edit `src/` (server: `Code.js`, `Push.js`; UI: `Index.html`). Game content: `docs/games.js`
   (check with `node test/games-check.js`); pet art: see `tools/PETS.md`.
2. `node test/sim.js` (extend it for new server behaviour), `node test/ui-check.js` (Index.html traps) and, for
   crypto, `node test/push-crypto.js`.
3. Visual check: `node test/preview.js`, serve `app/` (`python -m http.server 8765`), open
   `http://localhost:8765/test/preview.html` with the Chrome tools (served from app/ so it can load
   `docs/games.js` and the pet art). Mock data; any PIN works; Aviv has a pet and an open gate (finishing
   the challenge with under 12/15 fails, 12+ passes and plays the ceremony), Ziv has no pet, Ron is new.
   Use a fresh port for real-server tests so stored mock PINs aren't sent to the live API.
   Two-player features: `node test/dev-server.js` runs the real server code (mocked Google services, 1.2 s per
   call like Apps Script) on port 8787. Open `http://localhost:8787/test/dev.html` and `http://127.0.0.1:8787/test/dev.html`
   in two tabs (separate storage); kids Aviv 2694, Ziv 4821, Ron 7356, admin 1234. The page is rebuilt from
   `src/Index.html` on every load; server edits need a restart. Bad networks on purpose:
   `/dev/chaos?mode=hang|500|html|busy&n=2`. The dev page has the service worker too, so after an edit the first
   reload still shows the old page (with the update bar); reload once more.
4. `node build-pages.js && clasp push --force && clasp update-deployment <id from README>`, then
   `node tools/warm.js` (the slow first call of a new version, so no kid gets it).
5. Commit and `git push` (Pages rebuild). Commit trailer lines per the session's attribution rules.
6. Quick live check: `curl -sL -H "Content-Type: text/plain" --data '{"fn":"apiPublic","args":[""]}' <exec URL>`.

## Traps (each one bit us)
- **HtmlService strips `//` in inline JS, even inside strings** (it treats it as a comment). In
  `src/Index.html` write URLs as `'https:' + '/' + '/host/...'`. Check with:
  `awk '/<script>/,/<\/script>/' src/Index.html | grep -v "^\s*//" | grep "//"` → must print nothing.
- **Cross-file references at load time break the whole project.** Files load in order into one
  global scope; top-level code in `Code.js` must not reference functions from `Push.js`
  (hence `api()` builds the function table per request, and the curve is created lazily via `ec()`).
- **New OAuth scopes need the owner's consent, and web requests can't show it.** Adding a service
  (e.g. UrlFetchApp) makes every call that uses it fail until the owner runs a function from the
  editor and approves (`authorizeNotifications` in `Push.js` exists for this). Deploy such changes
  to a temporary deployment first, or warn the owner before switching the main one.
- `google.script.run` turns `null` into `undefined` → compare with `== null` in the UI.
- Google child accounts (< 13) cannot open Apps Script web apps → kids must use the Pages URL.
- `wa.me` links break emoji → use `https://api.whatsapp.com/send?text=`.
- The Bash tool's heredocs eat backslashes → write files containing `\` with the Write tool, or
  patch with a small Node script written by the Write tool.
- Sheet reads cost 0.3–1 s each: use `readTable()` (request memo + CacheService); writes go through
  `appendRow` / `setGirlField` / `setSetting`, which invalidate the cache. Fresh reads
  (`readTableUncached`) inside the script lock for anything that must not duplicate.
- Schema changes: add columns to `HEADERS`, bump `SETUP_VERSION`; `ensureSetup()` adds missing
  columns/tabs and runs migrations once. `appendRow` writes by header name, so column order is free.
- `docs/games.js` must stay out of `src/`: clasp pushes every .js in src/ to Apps Script, and its
  `window.EQ_GAMES = ...` would break the whole server project.
- The gate challenge size lives in two places: `GATE_MIX` in `Index.html` must add up to `JOURNEY.items`
  in `Code.js` (15). The server rejects any other total.
- Pet art is made in the Gemini web app (free, with a daily limit): one new chat per sheet,
  otherwise characters bleed into each other; download each sheet from a fresh tab. Recipe, prompts and
  fixes: `tools/PETS.md`.
- **The working tree has CRLF line endings** (core.autocrlf). Scripted multi-line replacements must normalize
  `\r\n` first (read, replace with LF, write back with CRLF), or nothing matches.
- **Duels poll the server about every 2 s.** Keep `apiDuelPoll` to CacheService only (no sheet reads; state changes
  happen under the script lock in the other duel calls). `ensureSetup()` checks a cache flag before Script Properties
  (consumer quota: 50,000 reads a day).
- The home screen polls invites only while the page is visible; background tabs skip it (test with the tab in front).
- Chrome sometimes paints glass panels blank when two app iframes sit side by side (`test/duo.html`); the DOM is
  fine. Check visuals in separate tabs.
- **Index.html is one global scope**: a second top-level function with the same name silently replaces the
  first (a new `tugQueue()` broke Tug of War in testing). `node test/ui-check.js` catches it.
- The cache keeps tables 6 hours: every write must call `invalidate(table)` when it is done (the helpers do).
  A write that skips it shows stale data for hours, not minutes.
- Phones run the service worker's copy of the app first: after a deploy, check the new version on the second
  open (or tap the update bar).
- **A pet picture is an inline SVG now** (`petArt`, the Wordrobe): CSS written for `img` inside a container (`.side img`)
  does not reach it, and a container rule for its own `svg` (`.map svg` for the road) catches the pet too. Use classes, or
  `svg:not(.pa)` / `svg.pa`. To change a mood keep the clothes: `paMood(el, mood)`, not `img.src`. SVG elements have no
  `offsetWidth`: restart an animation with `getBoundingClientRect()`.
- **New pet art or a new shop item needs the fit data**: `tools/pet_fit.py` (eyes; check the contact sheets, fix in
  `pet-fit-fix.json`), `tools/wear-fit.json` (how the item sits), then `python tools/wear_fit.py export` (writes FIT into
  Index.html). Without it, petArt shows nothing for a new pet and skips a new item.
- Coco's grading lives twice (`cocoGrade` in Shop.js and Index.html): change both; test/sim.js fails if they disagree.
  The Studio's `studioWords` + `studioGrade` are copied **as they are** from Shop.js into Index.html (sim checks 34
  descriptions). When copying functions by text, keep the newline after each closing `}`: a copy without it glued the
  next function on (`}function studioGrade(`), and a later replace that searched for `
}
` doubled the whole page.
- Only the **bold** and **duotone** Phosphor weights are loaded: `icon(name, 'fill')` draws nothing.
- A Studio base (`docs/items/base-*.webp`) is a gray picture the app colors (`designSvg`): Gemini draws it white, without
  an outline, on a saturated background, and `tools/cut_items.py --white` levels its shading; the outline is drawn in code.
- Gemini sometimes adds labels or draws grid cells behind a sheet: ask it to edit (remove the words / one flat gray
  background) in the same chat. `cut_items.py` punches gray openings (lenses); use `--no-holes` for creatures and hats.
- Default PINs are random; the real PINs live only in the private sheet. The repo is public:
  never commit real PINs, emails or the sheet's contents (tests use fake PINs 4821/7356/2694/1234).

## IDs
- Script: `19RA_PsdH5_uSHfbX-_cKRv2QtYN4wUDIa4OeigovCqmW3Bl2GbKEdZEd` (editor: https://script.google.com/d/<id>/edit)
- Sheet: `1G3ZBS6tSunXt-55qz1tjxh5N1x6BVB169mMWRk-zFKY`
- Web app deployment (keep updating this one): `AKfycbzN95JPrZcVFtwOc5yYpZLEh5fhySlDWHim1wAF_-3kdQpij1s6g4-ixld8NgK27HNI3w`
- Repo: `yanivkrispel-cyber/english-quest`, Pages from `main:/docs`. gh CLI: `C:\Program Files\GitHub CLI\gh.exe` (logged in).

## Status (2026-10-09)
Live and working: groups, kids' app (installable), parent/admin views, kid reminders, parent
notifications (verified end-to-end on the owner's Android phone), weekly emails.
Phase 1 of the game plan (built 2026-10-09): mini-games (Match it, Hear it, Build it, Spot it) with
content for A1–C1 in `docs/games.js`, auto-saved scores, spaced review, and 10 pets that grow
through 5 stages. Art: all 10 pets have all 5 stages (finished 2026-10-10, `PET_ART` in Index.html;
recipe in `tools/PETS.md`).
Phase 2 (built 2026-10-09): journey map (a world per level, 30 stations = daily tasks), a gate at the
end of each world and a level-up ceremony with a shareable certificate. The owner chose an in-app gate
challenge (15 questions from the next level, 12 to pass) over the self-reported test-english level test;
before this, a kid's level never changed after her first test. Worlds are drawn in code; illustrated
backgrounds from Gemini are an option for later.
Play together, phase 1 (built 2026-10-09, spec `specs/play-together.md`): invites to any kid in the app, Word Duel
(live), Challenge (24 h, ghost), Learn together results with Helper stars, rematch, duel notifications. The last
idea from the options page, Pet Arena, is not built.
Duo Streak and Team Quest (phase 2, spec `specs/duo-streak.md`): streaks and quests are computed from Log/Games on
every read (nothing to keep in sync); rewards are given in `duoAfterPractice()` after tasks, games and duels, once
per Bonus `Ref`. The dev server seeds 13 days of history so the duo screens have something to show.
Boss Battle and Tug of War (phase 3, spec `specs/boss-tug.md`): the boss is a duel mode (`boss`); the phones show the
damage, but the server recomputes it from both tracks (`bossDamage`) and decides the result. Tug of War runs on one
phone and saves both kids at the end (`apiTugSave`; the second PIN is checked by `apiTugCheck`, with the login lockout).
Dev test: boss in two tabs like a duel; tug in one tab (Play together → Tug of War, Ziv's PIN 4821 on the pad).
Talk & Tap (phase 4, spec `specs/talk-tap.md`): a duel mode (`talk`) with its own screens. Both phones build the same
8 words from the seed; only the listener's picks travel (`p` in the poll progress, kept in local storage and never
shortened by the server, so a reload resumes the game; home shows "Back to the game"). XP is given at each kid's
finish from both kids' picks (`talkXp`). Words: `talk` in `docs/games.js` (Match it words only, checked by
games-check). Dev test: two tabs; a background tab's timers slow down, so drive its picks with `talkPick(i)`.
The Wordrobe, phase 1 (built 2026-10-10, spec `specs/wordrobe.md`, proposal and the owner's picks:
https://claude.ai/artifact/6GkZRhCvB23frmsM37GXvx): coins (points + XP), Coco's shop with Ask Coco (tiles, voice optional),
38 items in six places, four victory moves, the Streak Shield, the Halloween Drop and its culture card, items on the pet
everywhere (`petArt`), coins and purchases in the parent view. Opens on `Settings.ShopOpens` (2026-10-24), a teaser
before it; `Settings.ShopEarly` = names that may shop earlier. Merged and live 2026-10-10 (@30).
The Wordrobe, phase 2, the Studio (built 2026-10-10, spec `specs/wordrobe-studio.md`; opens with the shop, the owner's
choice): Say it Wear it (4 white bases colored in code; designs are tokens), Shine = Memory (every rare and epic item is
made of words; shine follows their review), Second Chance and Word Saver ("My words"). Phase 3 (not built): Talking
Charms, Living Legends, Runway & Gifts.
Ideas not built yet: per-group reminder times, rewards redemption from the app (now via the
`Redeemed` column), editing groups/kids from the app (now via the sheet).
