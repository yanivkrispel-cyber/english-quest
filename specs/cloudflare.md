# The server on Cloudflare

The owner chose option B, a move from Apps Script to Cloudflare (2026-10-29; plan, accepted with "מאשר":
https://claude.ai/artifact/MPusPwCa5gZGQ2nuqkDZsv). Conditions: zero cost until there are paying customers, ready for the
stores, and the business logic not rewritten. Built on branch `cf-server` (worktree `app-cf`); **not switched on**: the live
app still calls Apps Script until the cutover night.

## How it works

- The same `src/*.js` runs on Cloudflare. `platform/gas.js` rebuilds the Google services the server uses on SQLite:
  SpreadsheetApp (sheets as arrays of rows in memory, each row with a stable id in the database), CacheService (memory;
  the keys `PM:`, `AQ`, `F:`, `J:` survive a restart), LockService (nothing to do: one object, one request at a time),
  PropertiesService, Utilities (Israel time with a per-minute memo, SHA-256, HMAC, base64), ContentService.
- `platform/overrides.js` runs after the sources: `readTable` returns rows kept in memory between requests and mapped
  again only when the sheet changed (appended rows alone), `kidRows` answers from an index by the Girl column,
  `deliver()` leaves pushes in an outbox, `platformTick()` replaces the triggers, the relay calls refuse.
  `readTable`'s objects are shared and frozen in tests: server code must never change a row it read with `readTable`
  (use `readTableUncached` / `kidRowsFresh`, which give copies).
- `node platform/build.js` puts gas.js, the sources and the overrides into `worker/api/server.js` (generated).
- `worker/api/index.js`: the Worker passes `POST /api` to one Durable Object, `CocoServer` (SQLite, free plan), which runs
  each request in a transaction, saves the changed rows, then sends the pushes (`worker/api/push.js`, VAPID JWT signed
  with WebCrypto; the same keys as Apps Script, so every subscription keeps working). A cron every 10 minutes calls
  `/tick`: reminders at their hour (Israel time, once a day each), the parents' summary, the audit queue, retention at
  03:00, and the free-plan guard (a push to the admin at 70% and 90% of the day's calls, and in the evening when calls
  failed). `/admin/export`, `/admin/import`, `/admin/stats` need the `X-Admin-Token` header (a secret).
- The front end calls `/api` on its own site (`API_URL` in `src/Index.html` and `docs/sw.js`); `worker/range.js` passes it to
  the Durable Object (a Durable Object binding: one Worker request a call). The old GitHub Pages address still calls Apps
  Script, which relays.
- `src/Relay.js` (Apps Script): `CF_MODE` empty (now), `freeze` (every call refused for a few minutes) or `relay` (every
  call passed to the new server; this script's reminders off; `cfMirror` copies the new server's data into the sheet
  every night at 03:00). `apiCfExport` (admin PIN) exports every sheet and every Script Property.
- New with the move, on both servers: the admin's Data card (`src/Admin.js`, replaces hand edits in the sheet), the family's
  data download and deletion (`src/Privacy.js`), retention, the `Plans` tab with `entitlement()`, `Settings.MinApp`
  (an app older than that `APP_V` is asked to update), the fonts from `docs/fonts/`.

## Free plan limits (checked on staging, 2026-10-29)

100,000 Worker requests a day for the account (pictures and sounds that pass through `range.js` count too), and for
Durable Objects 100,000 rows written and 5 million rows read a day. **The rows-written limit is real**: two load-test
imports (310,000 rows) used it up on staging and the object refused every call until midnight UTC. Measured use: a
kid's open writes about 3 rows, a game round 1; 100 kids are a few thousand rows a day. So: never import big data sets
into a Cloudflare server (load tests run locally or with small sets), and keep an eye on `/admin/stats`.
Measured speed on staging (from Israel): 0.14 to 0.17 s a call with the real data (Apps Script: 2.3 to 2.5 s); 100 kids
at once with a year of history: median 0.13 s, 95% under 0.37 s, no errors.

## Tests

- `node test/sim.js` (Apps Script mocks) and `SIM_PLATFORM=1 node test/sim.js` (the same scenarios on the platform layer,
  strict mode, frozen rows, then a reload from SQLite must give the same sheets).
- `node test/cf-units.mjs`: Utilities, flush, kept cache keys, the WebCrypto JWT against a key from `Push.js`, the outbox.
- `node test/cf-parity.js <export.json>`: the real data on both servers, frozen clock, every read and some writes: answers
  and sheets must be the same (`sheetCopy` is the one field meant to differ).
- `node tools/cf-load.js <staging url> [kids] [rounds] [think ms]` with made-up kids (`tools/cf-synth.js`), never live.
- Data copies (`tools/cf_xlsx_export.py` from an .xlsx download, or `apiCfExport`) stay in `EnglishLessons-work/migration/`.

## Deploy

- Staging (a copy of the data, pushes off, no cron): `node platform/build.js && npx wrangler deploy -c worker/api/wrangler.jsonc --env staging`;
  the staging front end: `node build-pages.js && npx wrangler deploy -c worker/web-staging.jsonc`.
- Production server: `npx wrangler deploy -c worker/api/wrangler.jsonc` (secret `ADMIN_TOKEN`, vars `PUSH_MODE=on`), only
  on the cutover night. The front end (`wrangler.jsonc`, with the Durable Object binding) the same night.

## Cutover night (the runbook)

1. Merge the voice work and `cf-server`; all tests green; staging checked by the owner on a phone.
2. Deploy the production server (empty) and set `ADMIN_TOKEN`.
3. Apps Script: `clasp push` with Relay.js, `update-deployment`; `apiCfMode(admin, 'freeze')`.
4. `apiCfExport(admin)` → `/admin/import` on the production server; compare row counts per tab; parity on the export.
5. Deploy the front end with `/api`; `apiCfMode(admin, 'relay', 'https://coco.coachkrispel.com/api', token)`.
6. Live check: a test kid, a game, a mission, a test push to the owner, the parents' area, the admin cards.
7. Back, if anything fails: `apiCfMode(admin, '')` (reminders back), the previous front end (`wrangler rollback`), and the
   sheet as it was at the freeze.
