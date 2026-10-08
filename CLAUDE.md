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
1. Edit `src/` (server: `Code.js`, `Push.js`; UI: `Index.html`).
2. `node test/sim.js` (extend it for new server behaviour) and, for crypto, `node test/push-crypto.js`.
3. Visual check: `node test/preview.js`, serve `test/` (`python -m http.server 8765`), open
   `http://localhost:8765/preview.html` with the Chrome tools. Mock data; any PIN works.
   Use a fresh port for real-server tests so stored mock PINs aren't sent to the live API.
4. `node build-pages.js && clasp push --force && clasp update-deployment <id from README>`.
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
- Default PINs are random; the real PINs live only in the private sheet. The repo is public:
  never commit real PINs, emails or the sheet's contents (tests use fake PINs 4821/7356/2694/1234).

## IDs
- Script: `19RA_PsdH5_uSHfbX-_cKRv2QtYN4wUDIa4OeigovCqmW3Bl2GbKEdZEd` (editor: https://script.google.com/d/<id>/edit)
- Sheet: `1G3ZBS6tSunXt-55qz1tjxh5N1x6BVB169mMWRk-zFKY`
- Web app deployment (keep updating this one): `AKfycbzN95JPrZcVFtwOc5yYpZLEh5fhySlDWHim1wAF_-3kdQpij1s6g4-ixld8NgK27HNI3w`
- Repo: `yanivkrispel-cyber/english-quest`, Pages from `main:/docs`. gh CLI: `C:\Program Files\GitHub CLI\gh.exe` (logged in).

## Status (2026-10-08)
Live and working: groups, kids' app (installable), parent/admin views, kid reminders, parent
notifications (verified end-to-end on the owner's Android phone), weekly emails.
Ideas not built yet: per-group reminder times, rewards redemption from the app (now via the
`Redeemed` column), editing groups/kids from the app (now via the sheet).
