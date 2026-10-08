# English Quest

Daily ~10-minute English practice for kids, built on the free exercises at
[test-english.com](https://test-english.com). Kids open one link, pick their name, enter a PIN,
do today's exercise on test-english.com and log their score. Parents follow progress, get phone
notifications, and reward points.

- **App:** https://yanivkrispel-cyber.github.io/english-quest/ (a group's link adds `?g=<groupId>`)
- **Data:** the private Google Sheet "English Quest" (owner's Drive)
- **Backend:** Google Apps Script bound to that sheet, deployed as a web app, managed with `clasp`

## Features

**Kids**
- One exercise a day, at the kid's level (A1 → C1), picked from a catalog of 714 test-english.com
  exercises without repeats. Weekly rotation (Sun–Sat): Grammar, Vocabulary, Listening, Grammar,
  Reading, Use of English / Writing (alternating weeks), Listening.
- A kid's first day is always the **level test**; the level she reports becomes her level.
- Log a score (correct / out of). Points: 10 per task, +5 for 80%+, +3 if done on the day,
  +20 for a full week. Missed days of the current week can be caught up.
- Streak, weekly ring, average score, rewards ladder, word of the day.
- Installable app (PWA) on Android / iOS; **phone reminders** at 17:00 and a last call at 20:00
  on days she hasn't practiced.

**Parents**
- **Groups** (families, friends): each group has its own link and parent PIN and sees only its kids.
  The admin PIN sees every group.
- Admin view (collapsible sections): per-kid week strip, history, recent activity, PINs, devices,
  share link + ready WhatsApp message, group goal.
- **Parent notifications:** instant update when a kid logs a task (switchable per phone) and an
  evening summary at 21:00.
- Admin can create groups, add kids (PIN generated), change reminder times — all in the app.
- Optional emails: daily reminder to kids with an Email, weekly summary on Fridays to the owner and
  to each group's Email.

## Architecture

```
Phone / browser                     GitHub Pages (docs/)            Google
┌────────────────────┐  HTML/JS    ┌──────────────────────┐
│ index.html (PWA)   │◄────────────│ index.html, sw.js,   │
│ service worker     │             │ manifest, icons      │
└─────────┬──────────┘             └──────────────────────┘
          │ fetch POST {fn,args}, credentials: 'omit' (anonymous)
          ▼
┌──────────────────────────────────────────┐      ┌─────────────────────┐
│ Apps Script web app  doPost → api()      │─────►│ Google Sheet (data) │
│ Code.js  Push.js  Catalog.js             │      └─────────────────────┘
│ time triggers: reminders, summaries      │─────► FCM / Apple Web Push (VAPID)
└──────────────────────────────────────────┘
```

- The front end calls the web app **anonymously**. This is deliberate: Google blocks Apps Script web
  apps for signed-in accounts under 13, so the kids never load a Google page.
- The same `src/Index.html` is also served by Apps Script itself (`doGet`, uses `google.script.run`);
  that path is a fallback for adults only.
- **Web Push without a library:** Apps Script has no ECDSA, so ES256 (P-256) signing is implemented
  with BigInt in `Push.js` (verified against Node crypto in `test/push-crypto.js`). Pushes carry no
  payload; the service worker asks `apiPushMessage` what to show. The VAPID key pair is generated
  on first use and stored only in Script Properties.

## Sheet tabs

| Tab | Columns | Notes |
|---|---|---|
| Girls | Name, Age, PIN, Level, Email, Redeemed, Color, Group | One row per kid (name kept for history). Names must be unique. `Redeemed` = points spent on rewards. |
| Groups | Id, Name, ParentPIN, Goal, GoalReward, Email | First row is the default group (link without `?g=`). Empty ParentPIN = admin only. |
| Assignments | Girl, Date, Section, Level, Title, URL | One exercise per kid per day, created lazily. |
| Log | Timestamp, Girl, Date, DoneOn, Section, Level, Title, URL, Correct, Total, Percent, Points | One row per completed task. |
| Rewards | Points, Reward, Group | Empty Group = applies to groups without rewards of their own. |
| Push | Girl, Endpoint, Created, Agent | Kids' devices for reminders. |
| ParentPush | Who, Endpoint, Created, Agent, Instant | Who = `admin` or a group id; Instant = yes/no. |
| Settings | Key, Value | AdminPIN, ReminderHour (17), LastCallHour (20), ParentSummaryHour (21), PublicUrl, AppUrl, FamilyGoal/FamilyReward (legacy). |

Manual edits in the sheet clear the server cache automatically (`onEdit`).

## Code layout

| Path | What |
|---|---|
| `src/Code.js` | Server: API, groups, assignments/rotation, scoring, cache layer, triggers, setup migrations |
| `src/Push.js` | Web Push: P-256/ES256, VAPID JWT, kid reminders, parent notifications |
| `src/Index.html` | Whole UI (Liquid Glass design, Phosphor icons), works in Pages and Apps Script |
| `src/Catalog.js` | Generated exercise catalog (`node gen-catalog.js` from `catalog.tsv`) |
| `src/appsscript.json` | Manifest: V8, Asia/Jerusalem, web app = execute as owner, anyone anonymous |
| `docs/` | GitHub Pages site: `index.html` (built), `sw.js`, `manifest.webmanifest`, `icons/` |
| `build-pages.js` | Builds `docs/index.html` from `src/Index.html` (adds head tags, manifest, icons) |
| `make-icons.py` | Renders the app icons with Pillow |
| `test/sim.js` | End-to-end simulation of the server with mocked Google services |
| `test/push-crypto.js` | Verifies the ES256 implementation against Node crypto |
| `test/preview.js` | Builds `test/preview.html`: the UI with mocked server data, for visual checks |

## API (`doPost` body: `{"fn": name, "args": [...]}`)

| Function | Who | Purpose |
|---|---|---|
| apiPublic(groupId) | anyone | Group name, kids (name/age/color), word of the day |
| apiWarm() | anyone | Pre-fills the cache while a PIN is typed |
| apiDashboard(name, pin) | kid | Week, stats, rewards, push key |
| apiSubmit(name, pin, date, correct, total, level) | kid | Log a task (notifies parents) |
| apiPushSubscribe / apiPushMessage | kid / service worker | Register a device / text of the pending notification |
| apiParent(pin) | parent / admin | Overview of the groups this PIN may see |
| apiParentPushSubscribe / Prefs / Test | parent / admin | Parent notifications on this phone |
| apiAdminAddGroup / AddKid / Settings / TestPush | admin | Management |

Wrong PINs: 8 attempts per name (or for parent PINs) lock it for 15 minutes.

## Deploy

```bash
node build-pages.js                     # src/Index.html -> docs/index.html
clasp push --force                      # upload src/ to Apps Script
clasp update-deployment AKfycbzN95JPrZcVFtwOc5yYpZLEh5fhySlDWHim1wAF_-3kdQpij1s6g4-ixld8NgK27HNI3w
git add -A && git commit -m "..." && git push   # GitHub Pages rebuilds docs/ (~1 min)
```

Always update the **existing** deployment id above: the front end and service worker call that URL.

## Test

```bash
node test/sim.js          # server scenarios (scoring, groups, PIN lockout, push, settings)
node test/push-crypto.js  # ES256 signatures verified by Node crypto
node test/preview.js      # then serve test/ and open preview.html (mock data, any 4-digit PIN)
```
