# Performance, phase 1: open from the phone, a warm cache, calls that never hang

From the performance audit of 2026-10-09 (report: https://claude.ai/artifact/CnHec5APTbSVUHMfK3Fbec). Every Apps
Script call costs at least ~1.7 s, and 1 in 20 real calls took over 7 s (cold caches, the first call after a
deploy). Phase 1 makes the app stop waiting for the server where it can, and makes the server wait less.

## Opening the app

- **Local first.** A remembered kid's last dashboard is kept on the phone (`eq_dash_<name>`, only when "remember
  me" is on; signing out deletes it). The next open draws it at once and asks the server for fresh data in the
  background. If it changed and the dashboard is still on screen, it is drawn again at the same scroll position.
- **The refresh button is the sync light:** it spins while updating; a dot means the last update failed and the
  screen shows what was saved on the phone (its title says so). A tap updates now and says why if it can't.
  A "Wrong PIN" answer (the PIN was changed in the sheet) signs the phone out.
- Back in the app after more than 5 minutes: the dashboard updates in the background.
- The kid picker (no one remembered) is kept the same way (`eq_pub_<group>`).
- **Opening animation:** the full one on the first open of the day, a 0.65 s hello with the kid's pet after
  that (owner's choice). Reduced motion: a still picture, as before.
- No connection on an open without a saved dashboard: a "No connection" screen with Try again; the kid stays
  remembered (before, a failed silent sign-in forgot her).

## Calls to the server

- A time limit on every call: 15 s, polls 8-10 s. A stuck call ends with a message instead of a spinner.
- Calls that only read (`apiPublic`, `apiDashboard`, `apiParent`, `apiTugCheck`) try once more after 0.8 s.
- Errors are split: the app's own answers (`Wrong PIN`, `Take the level test first.`) are shown as they are;
  failures of Google itself (an HTML page, "Service invoked too many times", lock timeouts) read as "The server is
  busy right now. Try again in a moment.", a timeout as "taking too long", no network as "No internet connection".
- A bar while the phone is offline. Back online: queued results are sent and the dashboard updates.

## Server cache

- Every table is cached for 6 hours (the CacheService maximum; it was 15 minutes for the busy tables). Writes
  already clear it, now also after the write is done, not only before.
- A version stamp per table (`V:<table>`): a sheet read keeps its copy in the cache only if no write happened
  while it was reading; otherwise a copy from before a write could stay for hours.
- **warmCache trigger**, every 10 minutes from 07:00 to 22:00: reads every table, so caches that expired or were
  cleared by a write are refilled before a kid needs them. About 2 minutes of the 90 trigger minutes a day.
  Installed by `installTriggers()` (SETUP_VERSION v11).
- After every deploy: `node tools/warm.js` makes the first, slow call of the new version (setup steps, empty
  caches, new triggers) instead of a kid.

## Service worker

- The app page: from the phone at once, refreshed in the background. When the background copy differs (ETag,
  else the text), the open app gets `eq-update` and shows "A new version is ready. Tap to update."; the next
  open shows it anyway. One copy per address without the query (`?g=`, `?duel=` share it).
- Pictures (`pets/`, `pics/`, `icons/`) and the game bank (`games.js?v=N`): from the phone once they are there;
  they never change under the same address (raise `BANK_V` when games.js changes).
- After the first dashboard the app asks the service worker to keep the game bank, the opening pets and the
  kid's own pet in all moods, and loads the game bank in the background (the first game opens at once).

## Tug of War saves

- `apiTugCheck` returns a token for the second kid (`exp.signature`, HMAC with a secret in Script Properties,
  valid 2 days). The phone keeps the token, never her PIN.
- A save that fails for lack of connection waits on the phone (`eq_tugq_<name>`) and is sent on the next sign-in,
  refresh or when the phone is back online. Every save has an id, so one sent twice counts once (`TS:<id>` in
  the cache for 2 days). If the token ran out, at least the phone owner's result is saved.

## Measured (dev server, 1.2 s per call like Apps Script)

| | Before | After |
|---|---|---|
| Returning kid, second open of the day: dashboard drawn | after the server, ~1.4 s (live: 2-15 s) | 0.03-0.1 s from the phone |
| Opening animation | 2.8 s every time | 2.8 s first open of the day, then 0.65 s |
| A call that hangs | spinner forever | message after 15 s (reads: second try, then message) |
| Server error page / Google error | raw text or a JSON error | "The server is busy right now…" |
| Pictures on the second open | re-checked over the network | from the phone (0 requests) |

## Testing

- `node test/sim.js`: the 6-hour cache, a copy read during a write is dropped, writes clear the cache when done,
  the warm-up trigger (installed; nothing at 23:00, every table at 09:00), Tug of War tokens (good, changed,
  for another kid, expired, PIN still accepted) and a save sent twice.
- `node test/ui-check.js`: Index.html parses, no `//` trap, no top-level name defined twice.
- `node test/dev-server.js` with `/dev/chaos?mode=hang|500|html|busy&n=N` for bad networks; the dev page gets the
  service worker (`/test/sw.js`).
