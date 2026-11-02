# Google Play: the Data safety form

Built from the code on `coco-voice` (2026-11-02), not from the older docs: the tables in `src/Code.js` (`HEADERS`), what the
phone sends (`callOnce` in `src/Index.html`), the server's outbound calls (`src/Push.js`, `worker/api/push.js`, `MailApp` in
`src/Code.js`), deletion and retention (`src/Privacy.js`, `src/Safety.js`, `src/Ops.js`, `worker/api/backup.js`). When the
code changes what it keeps or sends, update this file, `docs/privacy.html` and `PRIVACY_ITEMS` together (rule 4 of
`specs/store-readiness.md`).

Play's words: **collected** = sent off the phone (to our server or anyone acting for us); **shared** = given to another
company that is not our service provider. Cloudflare (server, database), Google (the sheet copy, Apps Script, push, Chrome's
speech service), Apple and Mozilla (push) act as service providers, so nothing here is "shared".

## Overview questions

| Question | Answer |
|---|---|
| Does your app collect or share any of the required user data types? | **Yes** |
| Is all of the user data collected by your app encrypted in transit? | **Yes**: HTTPS only (the site; `/api` on the same address; push endpoints must be `https`, `src/Push.js`) |
| Do you provide a way for users to request that their data is deleted? | **Yes**: in the app (parents' area, "הנתונים שלכם", `apiDeleteData` in `src/Privacy.js`) and on the web |
| Account creation | **Yes**, by a parent ("username and password and other authentication": family name and parent code; kids get a first name and a 4-digit PIN) |
| Delete account URL | `https://coco.coachkrispel.com/privacy.html#delete-en` (steps on the website, no install needed, plus the contact email once filled) |
| Can users delete some data without deleting the account? | **Yes**: one kid of a family; the parents' switches (microphone, other families, reminders) stop new data of that kind |
| Committed to follow the Play Families Policy | **Yes** |
| Independent security review | No (optional badge) |
| Is the data processed ephemerally? | Per type below |

## Data types

R = required, O = optional (the user can choose). Purposes: AF app functionality, AM account management, AN analytics (our own,
no third party), FS fraud prevention and security, DC developer communications.

| Play data type | Collected | What exactly (code) | R/O | Purposes | Ephemeral |
|---|---|---|---|---|---|
| Personal info: **Name** | Yes | Kid's first name (`Girls.Name`), parent's first name and family name (`Groups.Parent`, `Groups.Name`), sign-up `apiJoin` (`src/Pilot.js`) | R | AF, AM | No |
| Personal info: **Email address** | Yes | Parent's email, optional at sign-up (`Groups.Email`); a kid's email only in old setups the admin made (`Girls.Email`, `src/Admin.js`) | O | AF (weekly summary, reminder email) | No |
| Personal info: **User IDs** | Yes | The family id, kid name + PIN, parent code (`Groups.Id`, `Girls.PIN`, `Groups.ParentPIN`), signed parent sessions (`src/Auth.js`) | R | AF, AM, FS | No |
| Personal info: **Other info** | Yes | Age or school grade (`Girls.Age`), level, the Hebrew help choice | R | AF | No |
| Personal info: address, phone, race, politics, religion, sexual orientation | No | | | | |
| Financial info (all) | No | Coins are game points, never money; no payments (`worker/api/index.js` answers the plan hooks with 501) | | | |
| Health and fitness | No | | | | |
| Messages: **Other in-app messages** | Yes | Game invites, preset reactions and the preset wave between kids (`Duels`, duel progress `r`, `src/Duels.js`); blocks and reports from a preset list (`Blocks`, `Reports`). No free text, voice or pictures | O | AF, FS | Reactions yes (cache), invites no |
| Messages: emails, SMS | No | | | | |
| Photos and videos | No | No camera, no file input (`docs/_headers`: `camera=()`); the certificate and postcard are drawn on the phone and leave it only when a parent shares them | | | |
| Audio: **Voice or sound recordings** | Yes, see note 1 | With the parents' microphone switch on (`Girls.Mic`, off by default), the browser's speech service (Google in Chrome and the Play app) turns speech into text; on-device where the browser can (`processLocally`). The app never receives audio | O | AF | Yes |
| Audio: music files, other audio | No | The Nest's echo keeps a few seconds in the phone's memory and drops them (`docs/nest/echo.js`), never sent; the Nest is not in the store app anyway | | | |
| Files and docs | No | | | | |
| Calendar, Contacts | No | | | | |
| App activity: **App interactions** | Yes | Opens (Audit, `src/Audit.js`), feature use per day (`Usage`, `src/Ops.js`), game rounds, missions, gates, level tests, duels, shop, wardrobe, saved words | R | AF, AN, FS | No |
| App activity: In-app search history | No | | | | |
| App activity: Installed apps, Web browsing history | No | | | | |
| App activity: **Other user-generated content** | Yes | The Writer's Desk sentences (`Writing`, up to 400 characters), the text heard in Talk with Chacho (`Chats.Said`, only with the microphone on, 90 days), the sentences built in the shop and the Studio (`Shop.Sentence`), "Something wrong here?" notes (`Flags.Note`), parents' feedback (`Feedback.Text`) | R | AF | No |
| App activity: **Other actions** | Yes | Answers in games and missions (right / missed item ids, `Games.Missed/Right`, `Gates`), pet choices | R | AF | No |
| Web browsing | No | | | | |
| App info and performance: **Crash logs** | Yes | Phone error reports (`Errors`, `errNote` in Index.html, `src/Ops.js`): message, where, device label, app version, kid's first name when hers; 30 days | R | AF, AN | No |
| App info and performance: **Diagnostics** | Yes | How long the previous open took ("1.4s", Audit), the coarse device label (`dev`: "iPhone, app", `cleanDev` in `src/Audit.js`) | R | AF, AN | No |
| App info and performance: Other | No | Server counts per day (`use:<day>`) hold no person | | | |
| Device or other IDs | Yes | The push subscription endpoint (it carries the FCM / Apple / Mozilla token) and the browser's user-agent, only when notifications are turned on (`Push.Endpoint`, `Push.Agent`, `ParentPush`) | O | AF | No |
| Location (approximate, precise) | No, see note 2 | | | | |

Note 1, the voice. Our code sends no audio, but in the Play app the speech service is Chrome's (Google) and the app asks
for it; for a kids' app the safer answer is to declare it (collected, ephemeral, optional, not shared). If Play support says
browser speech services do not count for a TWA, it can be unticked. Have the lawyer confirm (`legal-review.md`, L5).

Note 2, the IP address. The server sees each request's address and uses it only in memory for an hour to slow down PIN
guessing (`src/Auth.js`, the `IP:` cache keys are not among the ones kept on disk, `platform/gas.js`). It is never stored
or used to find a location, so it is not "approximate location". Cloudflare's own Workers logs are on
(`"observability"` in `worker/api/wrangler.jsonc`); see mismatch 12.

## Retention (for the policy and the reviewer)

Audit opens: one by one for 30 days (swept weekly, so up to about 37), then a daily total; the audit trail 180 days (swept in
batches, up to about 210); Talk with Chacho's text 90 days; Writing a year; Errors 30 days; a kid with no open and no practice
for 12 months is deleted (the admin is told 30 days before); backups 14 days (`worker/api/backup.js`) plus Cloudflare's 30-day
point-in-time history; the Google Sheet copy is rewritten every night. Usage, Placements, Flags and Feedback stay while the
account is active.

## App access (for the reviewers)

All functions need a sign-in. Paste into Play Console, **App content > App access > All or some functionality is restricted**,
with the reviewer family's details (made by the owner in the admin view; never commit them):

> English with Chacho is for children whose parents signed the family up. Kids sign in with their first name and a 4-digit PIN;
> parents open the parents' area with the lock button, the family name and the parent code.
> Kid 1 (level A2): name `[name]`, PIN `[pin]`. Kid 2 (level B1): name `[name]`, PIN `[pin]`.
> Parents' area: tap the lock on the first screen, family name `[family]`, parent code `[code]`.
> Talk with Chacho's microphone is off until a parent turns it on in the parents' area (the sentence buttons work without it).
> Playing with other families is off by default; the two kids of this family can play together (Play tab).
> Links out of the kids' side ask a grown-up question: type the answer of the multiplication shown in Hebrew words
> (for example "שש כפול שבע" = 42). Chacho's Nest (ages 2 to 7) is not part of this app.

## Mismatches between the privacy text and the code

Found while filling this form. "Page" = `docs/privacy.html` (the full policy, rewritten in this PR); "notice" = the short
notice parents agree to in the app (`PRIVACY_ITEMS`, version 2, `src/Index.html` and `NOTICE.v` in `src/Safety.js`).

| # | Mismatch | Status |
|---|---|---|
| 1 | The Writer's Desk (text kept a year, seen and marked by the teacher) was missing from the page | Fixed on the page (the notice has it) |
| 2 | Feature use (`Usage`, since 2026-11-01) is in neither text | Fixed on the page. **Notice: missing** |
| 3 | Phone error reports (`Errors`, with the kid's name, 30 days) are in neither text | Fixed on the page. **Notice: missing** |
| 4 | Backups (14 days) and the 30-day point-in-time history contradict "at once and for good" (page) and "מיד ולתמיד" (notice) | Fixed on the page. **Notice: still says "ולתמיד"** |
| 5 | A kid's email (`Girls.Email`, old setups) and the reminder emails to kids are in neither text | Fixed on the page. **Notice: missing** |
| 6 | The sign-up asks for an email "לסיכום שבועי", but the live server (Cloudflare) sends no email (`MailApp` does nothing there, `platform/gas.js`); Apps Script's Friday trigger may still email from the sheet copy | **Owner**: check the triggers in the Apps Script editor. If no email goes out, stop asking for it (least data) or build the email on Cloudflare |
| 7 | IP addresses (memory only) were not mentioned | Fixed on the page |
| 8 | "The app asks for on-device recognition" was false for "Say it again" (`msSayRec` made its own recognizer) | **Fixed in the code**: it uses `srNew()` like the other uses; the page lists it among the microphone uses |
| 9 | Retention: opens up to about 37 days (text: 30), audit up to about 210 (text: 180) | Page says "about a month (at most 37)" and "about six months (at most 210)". **Notice: still 30 / 180**; or make the sweeps exact |
| 10 | GitHub (old address) and Apps Script (old server, relay, emails) were not named as processors | Fixed on the page. **Notice: names Cloudflare, the Google sheet and push only** |
| 11 | Operator name, address and contact email are blanks (page, terms, `PRIVACY_OPERATOR`) | **Owner** |
| 12 | Cloudflare Workers logs are on (`observability`) and the policy did not say what Cloudflare logs | Page says Cloudflare keeps short technical logs. **Owner**: check in the dashboard what the logs of `coco-api` hold (calls are POSTs, so names and PINs travel in the body, which is not logged unless a `console.log` prints it) and how long they stay, or switch them off |
| 13 | Kid PINs and parent codes are kept in plain text at rest (compared in constant time, `src/Auth.js`) | Known gap (`specs/store-readiness.md`); the page makes no claim about it |

**For the owner: the notice needs a version 3** (rows 2, 3, 4, 5, 9 and 10): new lines in `PRIVACY_ITEMS`, `PRIVACY_V` 3,
`NOTICE.v` 3 in `src/Safety.js` (sim checks they agree) and a line in `PRIVACY_CHANGES`. It is not in this PR on purpose:
version 3 shows every pilot family the re-consent card once, and that is your call. It should ship before the Play
closed test starts.
