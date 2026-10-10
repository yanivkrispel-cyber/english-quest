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
- New kids start with the **level test** and nothing else: the daily task and the games stay locked
  until they log the level they got (the test can be done any day and counts as done that day).
  "New" = nothing logged yet, so existing kids are never locked.
- **Opening animation**: the ten pets pop in around a glass portal, orbit it and do a wave; on a phone
  where a kid is remembered, her own pet jumps into the middle and says hi (tap to skip; a short still
  version with reduced motion). The app loads underneath meanwhile.
- Log a score (correct / out of). Points: 10 per task, +5 for 80%+, +3 if done on the day,
  +20 for a full week. Missed days of the current week can be caught up.
- Streak, weekly ring, average score, rewards ladder, word of the day.
- **Mini-games in the app** (about 2 minutes, 5 items a round, at the kid's level; the score saves by
  itself): *Match it* (word ↔ picture at A1, word ↔ definition above), *Hear it* (the phone reads a
  word or sentence aloud), *Build it* (tap the words into a sentence), *Spot it* (tap the wrong word).
  The day's warm-up game follows the day's section. Missed items come back after 1, 3, 7 and 21 days;
  two strong rounds in a row bring one item from the next level. Content: `docs/games.js`.
- **Pets**: each kid adopts one of 10 pets and names it. Right answers give XP (2 each, +5 for a
  perfect round, at most 60 a day from games) and task points count too; the pet grows through five
  stages (Baby 0, Kid 150, Explorer 500, Hero 1100, Legend 2000 XP) with a celebration at each step.
  Six moods: happy, celebrating, thinking, oops, sleepy (not practiced yet today), cool (7-day streak).
  How the art is made: `tools/PETS.md`.
- **Journey map**: a world per level (A1 Sunny Meadow, A2 Whisper Woods, B1 Crystal Caves, B1+ Misty Peaks,
  B2 Sky Islands, C1 Star Summit), drawn in code. Every daily task is a station on a winding road, and the pet
  stands at the kid's station. After 30 stations (or 20 with an average of 85%+) the gate to the next level opens.
- **Gate challenge**: 15 questions from the next level (4 Match it, 4 Hear it, 4 Spot it, 3 Build it), scored in
  the app. 12 right raises the kid's level (daily tasks and games move up), gives the pet 100 XP and plays the
  level-up ceremony with a certificate picture to share; parents get a notification. After a miss the gate opens
  again 3 days later and the missed questions come back in the games. The last world (C1) ends at a summit.
- **Play together** (spec: `specs/play-together.md`): a kid invites any other kid in the app (her group first,
  then the other groups) and they get a notification. *Word Duel*: 7 questions each from all four games, each at
  her own level, raced live on two phones (runners on a track, preset reactions, 3 minutes). *Challenge*: one plays
  now, the other within 24 hours against her "ghost"; an invite nobody answered can be sent as a challenge. A 4-letter
  code (or a WhatsApp link) invites anyone. The result screen ("Learn together") lists the missed questions with the
  answers; the stronger player gets a Helper star for explaining one. XP: 2 per right answer, +5 for the winner, +10
  for the first duel of the day, inside the daily 60 XP cap. A group can opt out of playing with other groups.
- **Duo Streak and Team Quest** (spec: `specs/duo-streak.md`): two kids (any groups) agree on a duo streak that grows on
  every day both practiced (a task, a game or a game together); the first missed day of a week is saved, badges at 7/30/100 days
  (+20/+60/+150 XP each), a Nudge button, and reminders that mention a partner who already practiced. Every duo gets a
  weekly Team Quest from the pair's weakest game last week ("40 right answers in Hear it as a team", each kid at least a
  tenth) or, without data, practising on the same day 5 times; +40 XP each. Celebrations once per phone.
- **Boss Battle and Tug of War** (spec: `specs/boss-tug.md`). *Boss Battle*: invited like a duel, two kids team up
  against Grumble the Word Thief (240 HP). Each answers up to 12 questions at her own level; a right answer hits him
  (harder when quick, and a double hit within 3 s of the partner's), a wrong one heals him; every 30 s a kid can send
  her partner a 50/50. +10 XP each for a win. *Tug of War*: two kids on one phone lying flat between them, each half
  with its own questions at its own level; right answers pull the knot, a wrong one freezes the player for 1.5 s and
  shows the answer. Five pulls, or the knot's side after 2 minutes, wins. The second kid types her PIN so both get
  XP (or plays as a guest).
- **Talk & Tap** (spec: `specs/talk-tap.md`), the speaking game. Invited like a duel; the kids talk in the same room or
  on a call (the app sends no voice). One sees a word and two words not to say and describes it in English; the other
  picks it from four words of the same topic. The roles swap every word, 8 words at the lower level of the two, and a
  wrong pick resets the team streak. Help for the one describing: sentence starters for the topic and the meaning
  (with the don't-say words marked); phrases to ask for the one listening. The end screen lists every word with its
  meaning and a read-aloud button; a missed word comes back in Match it. XP for both: 2 per word the team got right
  (describing counts too), +10 for 6 of 8 or more.
- **The Wordrobe** (spec: `specs/wordrobe.md`): Coco the parrot's shop, where every purchase is made in English. Every
  point and every XP is also a coin (computed from what is recorded; the parents' rewards ladder does not change). A kid
  asks Coco for an item with word tiles (or aloud, optional): "How much is it?", "Can I try it on?", "Do you have it in
  pink?", then her request; please, a question, could / may / I'd like and thank you each take a little off the price
  (up to 15%), and a wrong request gets a friendly hint. 38 items in six places (head, face, neck, back, aura, buddy),
  four victory moves, a Streak Shield (one missed day a week is saved), and the Halloween Drop (17 Oct - 7 Nov).
  The pet wears its items everywhere it appears, also on other kids' phones. Opens on `Settings.ShopOpens` (teaser
  before; `ShopEarly` names may shop earlier); the first visit plays the opening gift.
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
- **Speed** (spec: `specs/perf-phase1.md`): a remembered kid's last dashboard is kept on the phone and shown at
  once, fresh data comes in the background (the refresh button spins, or shows a dot when it failed). Every call
  has a time limit, reads get a second try, Google's own failures read as "try again". The server caches every
  table for 6 hours with a version stamp against stale copies, and the `warmCache` trigger refills it every
  10 minutes by day. The service worker opens the app from the phone and keeps pictures and the game bank;
  a newer app is announced with "A new version is ready".

## Sheet tabs

| Tab | Columns | Notes |
|---|---|---|
| Girls | Name, Age, PIN, Level, Email, Redeemed, Color, Group, Pet, PetName, PetSince | One row per kid (name kept for history). Names must be unique. `Redeemed` = points spent on rewards. Pet = pet id; task points count toward its growth from PetSince on. |
| Games | Timestamp, Girl, Date, Game, Level, Correct, Total, XP, Missed | One row per finished mini-game round. |
| Review | Girl, Items | Spaced review: `itemId\|box\|due` entries for items a kid missed. |
| Gates | Timestamp, Girl, Date, From, To, Correct, Total, Passed, Tasks, XP | One row per gate challenge. `Tasks` = tasks the kid had logged by then; the stations of her current world are the tasks after the last passed gate. |
| Groups | Id, Name, ParentPIN, Goal, GoalReward, Email, Friends | First row is the default group (link without `?g=`). Empty ParentPIN = admin only. `Friends` = `no` keeps the group's kids out of play with other groups. |
| Duos | Id, Created, A, B, State, Since, Ended, Nudges, Milestones, QuestDone | One row per duo streak (`invited` / `active` / `declined` / `ended`). The streak and the quest are computed from Log and Games; only nudges, reached badges and rewarded weeks are stored. |
| Shop | Timestamp, Girl, Date, Item, Color, Price, Paid, Manners, Sentence | One row per purchase. Coins = points + XP minus `Paid`. `Manners` = politeness chips lit (0-4), `Sentence` = what she asked. |
| Wardrobe | Girl, Wear, Move, Updated | What the pet wears (`item` or `item:color`, one per place) and its victory move. |
| Bonus | Timestamp, Girl, Date, Kind, XP, Ref | One-off XP outside the daily game cap (duo badges, team quests); `Ref` keeps each award single. Pet growth counts it. |
| Duels | Id, Created, Date, Mode, State, Host, Guest, HostLevel, GuestLevel, Seed, Start, Expires, Reply, HostScore, HostMs, HostTrack, GuestScore, GuestMs, GuestTrack, Winner, Ended, Helped | One row per duel, challenge, boss battle or Talk & Tap game (Id = the 4-letter code; Mode `live` / `challenge` / `boss` / `talk`). Tracks: `1:4210,0:9800,…` (right/wrong and ms since the start, `-` unanswered). Talk & Tap tracks are the kid's own picks, `1:4210:2` (the option tapped last). Each player's XP is a `Games` row with Game = `duel`, `boss` or `talk`; Tug of War writes only `Games` rows (Game = `tug`). |
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
| `src/Duels.js` | Play together: invites, live duels synced by polling, challenges, Boss Battle, Talk & Tap, Tug of War saves, results, Helper stars |
| `src/Duos.js` | Duo Streak and Team Quest: requests, streak counting, quests, rewards after practice |
| `src/Shop.js` | The Wordrobe: catalog, coins, Coco's grading of a request (`cocoGrade`, also in Index.html), buying, the wardrobe |
| `src/Index.html` | Whole UI (Liquid Glass design, Phosphor icons), works in Pages and Apps Script |
| `src/Catalog.js` | Generated exercise catalog (`node gen-catalog.js` from `catalog.tsv`) |
| `src/appsscript.json` | Manifest: V8, Asia/Jerusalem, web app = execute as owner, anyone anonymous |
| `docs/` | GitHub Pages site: `index.html` (built), `sw.js`, `manifest.webmanifest`, `icons/` |
| `docs/games.js` | Mini-game content for A1–C1, and the Talk & Tap words with their don't-say words (edited by hand; not in `src/`, so clasp never pushes it; raise `BANK_V` in Index.html after a change) |
| `docs/pets/`, `docs/pics/` | Pet stickers (`<pet>/<stage>-<mood>.webp`) and A1 picture words |
| `docs/items/`, `docs/coco/` | Shop items (`<id>.webp`, and two props: `jack-o-lantern`, `gift-box`) and Coco the parrot (`<mood>.webp`) |
| `tools/` | Art pipeline: `cut_sheet.py` (sticker sheet → stickers), `pics.py` + `pics_fetch.sh`, `PETS.md` (prompts); shop: `cut_items.py` (item sheets → `docs/items/`), `pet_fit.py` (the eyes of every pet sticker → `pet-fit.json`, fixes in `pet-fit-fix.json`), `wear_fit.py` + `wear-fit.json` (how items sit; contact sheets; `export` writes the FIT block into Index.html) |
| `test/games-check.js` | Validates `docs/games.js` (shapes, duplicates, pictures on disk, Talk & Tap words) |
| `build-pages.js` | Builds `docs/index.html` from `src/Index.html` (adds head tags, manifest, icons) |
| `make-icons.py` | Renders the app icons with Pillow |
| `test/sim.js` | End-to-end simulation of the server with mocked Google services |
| `test/push-crypto.js` | Verifies the ES256 implementation against Node crypto |
| `test/preview.js` | Builds `test/preview.html`: the UI with mocked server data, for visual checks |
| `test/dev-server.js` | Local two-player environment: the real server code with mocked Google services, on port 8787 |
| `specs/` | Feature specs (`play-together.md`) |

## API (`doPost` body: `{"fn": name, "args": [...]}`)

| Function | Who | Purpose |
|---|---|---|
| apiPublic(groupId) | anyone | Group name, kids (name/age/color), word of the day |
| apiWarm() | anyone | Pre-fills the cache while a PIN is typed |
| apiDashboard(name, pin) | kid | Week, stats, rewards, push key |
| apiSubmit(name, pin, date, correct, total, level) | kid | Log a task (notifies parents) |
| apiGameResult(name, pin, game, level, correct, total, missed, right) | kid | Record a mini-game round, update XP and the review list |
| apiSetPet(name, pin, petId, petName) | kid | Adopt or change the pet (XP stays) |
| apiGateResult(name, pin, correct, total, missed, right) | kid | Record a gate challenge (only while the gate is open); 12/15 raises the level |
| apiDuoInvite / Answer / Nudge / End | kid | Duo streaks (see `specs/duo-streak.md`); the duo data comes with `apiDuelHome` and `apiDashboard` |
| apiDuelHome / Invite / Join / Reply / Cancel / Solo / Poll / Finish / Helped | kid | Play together (see `specs/play-together.md`; Boss Battle: `specs/boss-tug.md`; Talk & Tap: `specs/talk-tap.md`); `apiDuelPoll` is the hot path, every ~2 s during a duel |
| apiShop / apiShopBuy(item, color, words) / apiWear(wear, move) | kid | The Wordrobe (see `specs/wordrobe.md`): the shop and coins; buy with a request (graded again on the server, which decides the price); what the pet wears |
| apiTugCheck / apiTugSave | kid | Tug of War on one phone: checks the second kid's PIN once (returns a 2-day token the phone keeps instead of her PIN), then saves both results (a save id makes a save sent twice count once) |
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
node tools/warm.js                      # the slow first call of the new version, instead of a kid
git add -A && git commit -m "..." && git push   # GitHub Pages rebuilds docs/ (~1 min)
```

Phones get a new app version in the background: the first open after a deploy still shows the old one, with
"A new version is ready. Tap to update."; the next open shows the new one.

Always update the **existing** deployment id above: the front end and service worker call that URL.

## Test

```bash
node test/sim.js          # server scenarios (scoring, groups, PIN lockout, push, settings, games, pets, journey)
node test/games-check.js  # mini-game content
node test/push-crypto.js  # ES256 signatures verified by Node crypto
node test/ui-check.js     # Index.html: parses, no "//" trap, no top-level name defined twice
node test/preview.js      # then serve app/ and open /test/preview.html (mock data, any 4-digit PIN)
node test/dev-server.js   # two players locally (seeded duo history): /test/dev.html on localhost:8787 and 127.0.0.1:8787
                          # the shop: Aviv may shop early; /dev/coins?who=Aviv&n=1500, /dev/day?d=2026-10-24 (opening, Halloween)
                          # bad networks: /dev/chaos?mode=hang|500|html|busy&n=2 ; the page gets the service worker
```
