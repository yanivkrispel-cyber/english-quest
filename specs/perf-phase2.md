# Performance, phase 2: no screen stuck on a spinner, faster opens, and numbers from the pilot

After pilot families and the owner saw a screen with only a spinner after the opening animation (2026-10-28). Plan and
findings: https://claude.ai/artifact/XgeGhG3BxXMQNy33nUne1g. The owner took the recommendations, including the
animation choice below. Phase 1 is `specs/perf-phase1.md`.

## What was wrong

- **Coco's Nest, a spinner forever.** A remembered Nest kid's saved dashboard was drawn as a spinner while the five Nest
  files loaded one after another, and the dashboard was refreshed from the server at the same time. When the server
  answered first, `dash` became a new object; the loader then checked `dash === d`, found it false and drew nothing, and
  the refresh drew nothing either (no dashboard on screen). Every `NEST_V` change (three on 2026-10-28) made phones load
  the files again, so the race was common that day. A file stuck on the network also had no time limit.
- **Long bare spinners.** A remembered kid without a saved dashboard waited for `apiDashboard` with two tries of 15 s
  (about 31 s) behind a spinner with no words, after the animation gave up at 9 s. The parents' and admin's view was
  never kept on the phone, so every open waited for `apiParent`; a refresh that failed on the network also forgot the
  parent's PIN.
- Measured on the live server: `apiPublic`, the lightest call, takes between 2.2 and 3.3 s with a warm cache.

## What changed

- **The wait screen** (`loading()`, `WAIT_HTML`, `waitArm()`): the spinner with "Getting your day ready…", and after 10 s
  "This is taking longer than usual." with Try again (reloads). The page starts with it, and the Nest's loading uses it.
- **Coco's Nest**: when its files are in, the dashboard on screen now (`dash`) is drawn if the wait screen (`#nkwait`) is
  still up; a background refresh during the wait draws again (`onDashboard` counts `#nkwait`). The five files download
  side by side and run in order (`async = false`), each with 15 s.
- **The silent sign-in** (a remembered kid or parent without a saved screen) gives up after 12 s in all (`callBy`) and
  shows the no-connection screen, which now says "The server is slow right now" when the phone is online.
- **The parents' view is kept on the phone** (`eq_par`, only for a parent who chose "remember me"; signing out deletes
  it): the next open shows it at once and `parentFresh` brings fresh data, drawn only if the parent has not touched the
  screen yet (or tapped refresh), so nothing moves under a finger. Only a refused PIN forgets the parent now.
- **The opening animation (owner's choice):** the full show on the first open of the day; later opens skip it when the
  kid's dashboard or the parent's view is on the phone. The animation no longer waits for the server: when it ends it
  waits at most 1.5 s more, then the wait screen shows.
- **Icon fonts from our own site:** `build-pages.js` links `docs/fonts/phosphor-2.1.1/` (woff2 only, preloaded) instead of
  unpkg, and the service worker keeps them on the phone. The Apps Script copy keeps unpkg.
- **Opens off the call path:** `auditOpen` keeps the row in the cache (`AQ`, under the script lock with `tryLock`; without
  the lock it writes as before) and `auditFlush` writes the waiting rows in one write, from `warmCache` (every 10 minutes,
  at any hour, before its hour check) and before `apiAudit`. A kid's open no longer pays for a sheet write.

## Measuring

- The app measures each open: seconds from the page's start to the first screen that is not the wait screen, and where
  it came from (`saved` = from the phone, `server`, `offline`), or `20s wait` when the wait screen was still up after 20 s.
  It is kept as `eq_open_m` and sent with the next `apiDashboard` / `apiParent` (`open` in the request), so a stuck open is
  reported by the next one. The server checks the format (`cleanOpen`) and puts it in the open's Detail ("last open 1.4s
  saved"). A number and a word only.
- The server times every call except `apiDuelPoll` (`perfNote` in `doPost`), and `apiDashboard` by part (PIN, the visit,
  the dashboard, play together): the last 40 of each in the cache (`PERF`), no sheet.
- The admin's Audit card has a Speed line: the median open from the phone and from the server, how many opens were stuck
  on the wait screen, and the server's median and slowest time per call.

## Next (phase 3, after a few days of numbers)

Read the Speed line: if `apiDashboard`'s "the dashboard" part is most of the time, compute less on every open and move
parts the first screen does not need into a second call in the background.

## Testing

- `node test/sim.js`: an open is not written during the call; the flush writes it with the last open's measure; a made-up
  measure is dropped; `apiAudit` returns the server times.
- Dev server: `/dev/slow?path=/docs/nest/&ms=4000` delays the Nest's files. Sign in as Mia (5151) with remember, delete the
  caches, reload: the old code stayed on the spinner with the Nest loaded; now the home shows when the files arrive.
  `/dev/chaos?mode=hang&n=2` with no saved dashboard: the wait screen, its Try again at 10 s, the slow-server screen at 12 s.
