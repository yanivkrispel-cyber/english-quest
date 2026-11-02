# English Quest (English with Chacho)

Daily ~10-minute English practice for kids, built on the free exercises at
[test-english.com](https://test-english.com). Kids open one link, pick their name, enter a PIN,
do today's exercise on test-english.com and log their score. Parents follow progress, get phone
notifications, and reward points.

- **App:** https://coco.coachkrispel.com/ (a group's link adds `?g=<groupId>`), served by Cloudflare from `docs/`. The old
  address, https://yanivkrispel-cyber.github.io/english-quest/ (GitHub Pages, same `docs/`), only shows a "new home" screen
  that carries the phone's saved kid and settings to the new address (`movedScreen`, `takeMove` in Index.html).
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
- **Today's Mission** (spec: `specs/missions.md`; for every kid, `Girls.Missions = no` keeps the link): the daily
  task played in the app instead of the link. Five parts (Hook, Learn, Practice, Use it, Finish), 6 to 9 minutes, the
  score measured by the app (nothing typed), the same points and stations. Five types on the same catalog topics, all
  content written from scratch for each level: Grammar Lab, Word Pack, Radio Show (episodes recorded with Chatterbox, the
  phone's voice as a fallback), Story Cards, Newsroom. Hebrew tips on request, Teach your pet, a reminder card after two
  mistakes, a mission left halfway continues from the same question. Missed questions come back in a Mission review
  (home, game XP); "Something wrong here?" goes to the Flags tab; parents get the mission's dinner question in the 21:00
  summary. Content: `docs/missions/<a1|a2|b1|bp|b2|c1>.js` (59 missions: the first week of each level, and Newsroom
  for A1 to B2). Assignments prefer the next topic of her level that has a mission; without one left, the link as before.
  **Writer's Desk** (writing days, 2026-11-01): she writes one to three sentences of her own (a frame with boxes at A1),
  checked on the phone by a kind checklist of simple rules (no AI), one rewrite, then Chacho's version; the text is kept
  in the Writing tab for her parents (kid card) and the teacher (`?missions&t=`), who gives a mark and a preset note the kid
  sees on her Me tab. **Say it again**: before the finish she reads a model sentence aloud twice and sees her words a
  minute (only with the parent's microphone switch on). Spec: `specs/missions.md`.
- **Talk with Chacho** (spec: `specs/talk.md`): short spoken talks with Chacho the parrot, scripted (no AI at run time).
  One after Use it in every mission, about what it taught, and one home scene a day (15 per level). Chacho speaks
  (recorded with Chatterbox, `specs/voice.md`), the kid answers aloud (the phone's speech recognition, matched to the script's branches by
  keywords) or with sentence tiles, with a Hebrew hint on request; every answer moves on. A bonus only (XP and coins),
  kept as text in the Chats tab; parents see how many talks were aloud and one sentence. Content: `docs/talk/<level>.js`.
- Streak, weekly ring, average score, rewards ladder, word of the day.
- **Mini-games in the app** (about 2 minutes, 5 items a round, at the kid's level; the score saves by
  itself): *Match it* (word ↔ picture at A1, word ↔ definition above), *Hear it* (the phone reads a
  word or sentence aloud), *Build it* (tap the words into a sentence), *Spot it* (tap the wrong word).
  The day's warm-up game follows the day's section. Missed items come back after 1, 3, 7 and 21 days, and items answered
  right come back after 7, 21 and 60 days (the slow track: at most 20 new and 10 due a day, after the missed ones);
  two strong rounds in a row bring one item from the next level. Content: `docs/games.js`.
- **Pets**: each kid adopts one of 10 pets and names it. Right answers give XP (2 each, +5 for a
  perfect round, at most 60 a day from games) and task points count too; the pet grows through five
  stages (Baby 0, Kid 150, Explorer 500, Hero 1100, Legend 2000 XP) with a celebration at each step.
  Six moods: happy, celebrating, thinking, oops, sleepy (not practiced yet today), cool (7-day streak).
  How the art is made: `tools/PETS.md`.
- **Journey map**: a world per level (A1 Sunny Meadow, A2 Whisper Woods, B1 Crystal Caves, B1+ Misty Peaks,
  B2 Sky Islands, C1 Star Summit), drawn in code. Every daily task is a station on a winding road, and the pet
  stands at the kid's station. After 30 stations (or 20 with an average of 85%+) **and** mastery of the level (80% right on
  the first try over her last 80 game and task questions in the world, at least 40; `Settings.GateMastery` = a number or
  `off`) the gate to the next level opens. A kid who met the stations rule before 2026-11-02 (`Settings.GateMasteryFrom`)
  or already tried the gate keeps it open. The map says what is missing ("Get 80% right in games and missions...").
- **Gate challenge**: 15 questions from the next level (4 Match it, 4 Hear it, 3 Spot it, 3 Build it and one Type it, where
  she types the right word), all from the held-out bank (`gate` in `docs/games.js`, 42 items a level) that the games
  never show, the ones she has not had first (night review, finding 12). Scored in
  the app. 12 right raises the kid's level (daily tasks and games move up), gives the pet 100 XP and plays the
  level-up ceremony with a certificate picture to share; parents get a notification. After a miss the gate opens
  again 3 days later with new questions (held-out items never enter the review). The last world (C1) ends at a summit.
  The admin's Pilot card lists the hardest items (first-try right rate, from `Games.Missed/Right` and `Gates.Missed/Right`).
- **Play together** (spec: `specs/play-together.md`): a kid invites any other kid in the app (her group first,
  then the other groups) and they get a notification. *Word Duel*: 7 questions each from all four games, each at
  her own level, raced live on two phones (runners on a track, preset reactions, 3 minutes). *Challenge*: one plays
  now, the other within 24 hours against her "ghost"; an invite nobody answered can be sent as a challenge. A 4-letter
  code (or a WhatsApp link) invites anyone. The result screen ("Learn together") lists the missed questions with the
  answers; the stronger player gets a Helper star for explaining one. XP: 2 per right answer, +5 for the winner, +10
  for the first duel of the day, inside the daily 60 XP cap. Kids of other families meet only when both families' parents turned it on (parents' area), and see only first names and pets.
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
- **The Wordrobe** (spec: `specs/wordrobe.md`): Chacho the parrot's shop, where every purchase is made in English. Every
  point and every XP is also a coin (computed from what is recorded; the parents' rewards ladder does not change). A kid
  asks Chacho for an item with word tiles (or aloud, optional): "How much is it?", "Can I try it on?", "Do you have it in
  pink?", then her request; please, a question, could / may / I'd like and thank you each take a little off the price
  (up to 15%), and a wrong request gets a friendly hint. 38 items in six places (head, face, neck, back, aura, buddy),
  four victory moves, a Streak Shield (one missed day a week is saved), and the Halloween Drop (17 Oct - 7 Nov).
  The pet wears its items everywhere it appears, also on other kids' phones. Opens on `Settings.ShopOpens` (teaser
  before; `ShopEarly` names may shop earlier); the first visit plays the opening gift.
  Phase 2, the Studio (spec: `specs/wordrobe-studio.md`): **Say it, Wear it**: she describes a white base (beanie, bow,
  scarf, cape) in English, "a big sparkly purple velvet cape with tiny gold stars", and good English makes it (adjective
  order, a/an, plural patterns; a hint for every mistake; right the first time = Perfect Fit); colors, materials,
  patterns and sparkle are drawn in code. **Shine = Memory**: every rare and epic item is made of 4-6 words she
  collects before buying; it shines while she remembers them (spaced review) and a 20-second polish brings it back.
  Upgrades: **Second Chance** (a hint and one more try after a mistake, half XP) and **Word Saver** (her own deck,
  "My words", with practice rounds).
- Installable app (PWA) on Android / iOS; **phone reminders**: one gentle notification a day at the hour her parents chose
  (or none; Settings.ReminderHour when they did not choose), on days she hasn't practiced. No evening last call (2026-11-01).
- **Privacy and safety** (src/Safety.js, specs/store-readiness.md): the privacy notice keeps its version and time (re-consent card
  in the parents' area), the microphone (speech recognition) is off per kid until a parent turns it on, playing with other
  families is off until both families' parents turn it on, kids can block and report (preset reasons), invites are limited per
  hour, and retention deletes old opens and kids inactive for 12 months. Public pages: docs/privacy.html, docs/terms.html.
- **Google Play** (`store/README.md`): the Android app is a Trusted Web Activity of the site (Bubblewrap, `store/android/twa-manifest.json`,
  `docs/.well-known/assetlinks.json`). Inside it (`IN_PLAY`) the sign-up offers school grades only and Chacho's Nest stays on the website.
  The store forms and texts: `store/data-safety.md`, `store/content-rating.md`, `store/listing.md`, `store/legal-review.md`.

**The friends' pilot** (spec: `specs/pilot.md`): families join on their own from the owner's invite link (`?join=<code>`, Hebrew screens
and a privacy consent), new kids take an adaptive level test inside the app (and a progress check after four weeks), parents see their
area in Hebrew and can send feedback, the teacher reviews missions at `?missions&t=<code>`, and the admin has a Pilot card with the funnel.
The app is shown as **English with Chacho** with Chacho the parrot as its icon.

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
- **Home in five tabs** (spec: `specs/home-tabs.md`): Today (the pet, one Start, Talk with Chacho and an invite or a
  game, never a scroll), Journey (the map), Play, Pet (and the shop) and Me (stats, week, rewards, switch player).
- **Speed** (spec: `specs/perf-phase1.md`): a remembered kid's last dashboard is kept on the phone and shown at
  once, fresh data comes in the background (the refresh button spins, or shows a dot when it failed). Every call
  has a time limit, reads get a second try, Google's own failures read as "try again". The server caches every
  table for 6 hours with a version stamp against stale copies, and the `warmCache` trigger refills it every
  10 minutes by day. The service worker opens the app from the phone and keeps pictures and the game bank;
  a newer app is announced with "A new version is ready".
  Phase 2 (spec: `specs/perf-phase2.md`): never a bare spinner (a wait screen with words, then Try again), the silent
  sign-in gives up after 12 s, the parents' view is kept on the phone too, later opens of the day skip the animation when
  the screen is on the phone, Chacho's Nest files load side by side, the icon fonts come from `docs/fonts/`, opens are
  written to the Audit tab by the warm-up trigger instead of during the call, and the admin's Audit card shows how fast
  the opens and the server were.

## Sheet tabs

| Tab | Columns | Notes |
|---|---|---|
| Girls | Name, Age, PIN, Level, Email, Redeemed, Color, Group, Pet, PetName, PetSince, Missions, NestPerDay, NestArcadeMin, Mic, RemindAt, Seen, Inactive | One row per kid (name kept for history). Names must be unique. `Redeemed` = points spent on rewards. Pet = pet id; task points count toward its growth from PetSince on. `Missions` = no keeps her daily task on test-english.com (empty = Today's Mission). `Mic` = yes: a parent allowed speech recognition; `RemindAt` = her reminder hour (`off`, empty = default); `Seen` / `Inactive` = last open / the day the admin was told of a deletion for inactivity. |
| Games | Timestamp, Girl, Date, Game, Level, Correct, Total, XP, Missed, Right | One row per finished mini-game round (Right since SETUP v24). |
| Review | Girl, Items | Spaced review: `itemId\|box\|due` entries: boxes 1 to 4 for items she missed, 11 to 13 the slow track for items answered right. |
| Gates | Timestamp, Girl, Date, From, To, Correct, Total, Passed, Tasks, XP, Missed, Right | One row per gate challenge (Missed/Right: item ids, since SETUP v24). `Tasks` = tasks the kid had logged by then; the stations of her current world are the tasks after the last passed gate. |
| Groups | Id, Name, ParentPIN, Goal, GoalReward, Email, Friends, Parent, Joined, Consent, ConsentV, ConsentAt, FriendsOn | First row is the default group (link without `?g=`). Empty ParentPIN = admin only. `Friends` = the admin's override (`no` keeps the family out, `yes` = on); `FriendsOn` = the parents' switch (off when empty). `ConsentV`/`ConsentAt` = the privacy notice version agreed to and when. |
| Duos | Id, Created, A, B, State, Since, Ended, Nudges, Milestones, QuestDone | One row per duo streak (`invited` / `active` / `declined` / `ended`). The streak and the quest are computed from Log and Games; only nudges, reached badges and rewarded weeks are stored. |
| Shop | Timestamp, Girl, Date, Item, Color, Price, Paid, Manners, Sentence, Words | One row per purchase. Coins = points + XP minus `Paid`. `Manners` = politeness chips lit (0-4), `Sentence` = what she asked. `Words` = the words an item made of words was bought with. A Studio design's `Item` is its token (`~cape..big.sparkly.purple.velvet.tiny..gold.stars.p`), `Sentence` = the design. |
| Wardrobe | Girl, Wear, Move, Updated | What the pet wears (`item`, `item:color` or a design token, one per place) and its victory move. |
| Words | Girl, Saved, Memory, Updated | `Saved` = the Word Saver's deck (game item ids); `Memory` = `word|box|due` for the words of items made of words (box 5 = hers for good). |
| Bonus | Timestamp, Girl, Date, Kind, XP, Ref | One-off XP outside the daily game cap (duo badges, team quests); `Ref` keeps each award single. Pet growth counts it. |
| Duels | Id, Created, Date, Mode, State, Host, Guest, HostLevel, GuestLevel, Seed, Start, Expires, Reply, HostScore, HostMs, HostTrack, GuestScore, GuestMs, GuestTrack, Winner, Ended, Helped | One row per duel, challenge, boss battle or Talk & Tap game (Id = the 4-letter code; Mode `live` / `challenge` / `boss` / `talk`). Tracks: `1:4210,0:9800,…` (right/wrong and ms since the start, `-` unanswered). Talk & Tap tracks are the kid's own picks, `1:4210:2` (the option tapped last). Each player's XP is a `Games` row with Game = `duel`, `boss` or `talk`; Tug of War writes only `Games` rows (Game = `tug`). |
| Assignments | Girl, Date, Section, Level, Title, URL | One exercise per kid per day, created lazily. |
| Log | Timestamp, Girl, Date, DoneOn, Section, Level, Title, URL, Correct, Total, Percent, Points, Mission, Seconds | One row per completed task. `Mission` and `Seconds`: a task played as a mission (empty for the link). |
| Chats | Timestamp, Girl, Date, Talk, Where, Level, Turns, Voice, Tiles, Mic, XP, Seconds, Said | One row per Talk with Chacho (`src/Chat.js`). Voice / Tiles = answers said aloud / tapped; Said = what the phone heard (text only). |
| Flags | Timestamp, Girl, Date, Mission, Item, Note | "Something wrong here?" under a mission question (at most 20 a kid a day). |
| Writing | Timestamp, Id, Girl, Date, Mission, Item, Level, Prompt, Text, First, Checks, Words, Mark, Comment, MarkedOn | The Writer's Desk (Missions.js): what a kid wrote in a mission (one line, at most 400 characters, a leading = + - @ kept as text), her first try when she rewrote it, the checklist score (`3 of 5`), and the teacher's mark and preset note. Deleted with the kid and after a year. |
| Rewards | Points, Reward, Group | Empty Group = applies to groups without rewards of their own. |
| Push | Girl, Endpoint, Created, Agent | Kids' devices for reminders. |
| ParentPush | Who, Endpoint, Created, Agent, Instant | Who = `admin` or a group id; Instant = yes/no. |
| Audit | Timestamp, Date, Role, Who, Group, Action, Detail, Ok, Device | The audit trail (`specs/audit.md`): opens (once per half hour), wrong PINs, grown-ups' changes, hand edits in the sheet. Device = a coarse label sent by the app. |
| Blocks | Timestamp, Girl, Blocked, Date | A kid blocked another kid (src/Safety.js). |
| Reports | Timestamp, Girl, About, Date, Reason, Group | A block with a preset reason, for the admin (Pilot card) and the kid's parents. |
| Settings | Key, Value | AdminPIN, ReminderHour (17, the default kid reminder), LastCallHour (unused since 2026-11-01), ParentSummaryHour (21), PublicUrl, AppUrl, FamilyGoal/FamilyReward (legacy). |

Manual edits in the sheet clear the server cache automatically (`onEdit`).

## Code layout

| Path | What |
|---|---|
| `src/Code.js` | Server: API, groups, assignments/rotation, scoring, cache layer, triggers, setup migrations |
| `src/Push.js` | Web Push: P-256/ES256, VAPID JWT, kid reminders, parent notifications |
| `src/Duels.js` | Play together: invites, live duels synced by polling, challenges, Boss Battle, Talk & Tap, Tug of War saves, results, Helper stars |
| `src/Duos.js` | Duo Streak and Team Quest: requests, streak counting, quests, rewards after practice |
| `src/Shop.js` | The Wordrobe: catalog, coins, Chacho's grading of a request (`cocoGrade`, also in Index.html), buying, the wardrobe; phase 2: items made of words (`SHOP_RECIPES`, memory and shine), the Word Saver, the Studio (`studioWords` + `studioGrade`, copied as they are into Index.html; designs as tokens) |
| `src/Missions.js` | Today's Mission: who gets it (`Girls.Missions`), `apiMissionResult` (checks the result against the day's mission), `apiFlag`; the Writer's Desk (`saveWriting`, `writingInfo`, the teacher's `apiTeacherWriting` / `apiTeacherMark`, the preset notes `WRITING`) |
| `src/Nest.js` | Chacho's Nest, ages 2 to 7 (`specs/nest.md`): `isNest`, the day (`nestNext`: four days a unit, a review is one), `nestInfo` (the home and each word's first tries), `apiNestResult`. `src/NestIndex.js` is written by `tools/nest-index.js`; the session engine and its games are `docs/nest/play.js` |
| `src/Audit.js` | The audit trail: `audit`, `auditOpen`, `auditPin`, `auditSheetEdit`, `apiAudit` (the admin's Audit card, merged with the practice tabs) |
| `src/Chat.js` | Talk with Chacho: `apiChatResult` (summary and bonus), `chatInfo` (dashboard, parents), `chatBoard` (the admin's stage 0 board) |
| `src/MissionIndex.js` | Generated by `node tools/missions-index.js`: catalog url → mission id, number of questions, dinner question |
| `src/Index.html` | Whole UI (Liquid Glass design, Phosphor icons), works in Pages and Apps Script |
| `src/Catalog.js` | Generated exercise catalog (`node gen-catalog.js` from `catalog.tsv`) |
| `src/appsscript.json` | Manifest: V8, Asia/Jerusalem, web app = execute as owner, anyone anonymous |
| `wrangler.jsonc`, `worker/range.js` | The Cloudflare front end: static files from `docs/`; the recordings go through `range.js`, since the static server ignores byte ranges and Safari needs them |
| `docs/` | The front end (Cloudflare, and GitHub Pages for the old address): `index.html` (built), `sw.js`, `manifest.webmanifest`, `icons/` |
| `docs/games.js` | Mini-game content for A1–C1, and the Talk & Tap words with their don't-say words (edited by hand; not in `src/`, so clasp never pushes it; raise `BANK_V` in Index.html after a change) |
| `docs/missions/` | Mission content per level (`a1.js` … `c1.js`, `bp` = B1+; edited by hand, out of `src/`; raise `MISSIONS_V` in Index.html after a change) and the recordings (`audio/<mission>-<part>.mp3`) |
| `docs/talk/` | Talk with Chacho scripts per level (`a1.js` … `c1.js`; format and writing rules: `tools/TALK-WRITING.md`; raise `TALK_V` in Index.html after a change) and Chacho's lines (`audio/<clip>.mp3`, `python tools/talk_audio.py`) |
| `docs/fonts/` | The Phosphor icon fonts (bold, duotone; woff2 only), linked by `build-pages.js` instead of unpkg |
| `docs/pets/`, `docs/pics/` | Pet stickers (`<pet>/<stage>-<mood>.webp`) and A1 picture words |
| `docs/items/`, `docs/coco/` | Shop items (`<id>.webp`, and two props: `jack-o-lantern`, `gift-box`), the Studio's gray bases (`base-<id>.webp`) and Chacho the parrot (`<mood>.webp`) |
| `tools/` | Art pipeline: `cut_sheet.py` (sticker sheet → stickers), `pics.py` + `pics_fetch.sh`, `PETS.md` (prompts); shop: `cut_items.py` (item sheets → `docs/items/`), `pet_fit.py` (the eyes of every pet sticker → `pet-fit.json`, fixes in `pet-fit-fix.json`), `wear_fit.py` + `wear-fit.json` (how items sit; contact sheets; `export` writes the FIT block into Index.html) |
| `test/games-check.js` | Validates `docs/games.js` (shapes, duplicates, pictures on disk, Talk & Tap words) |
| `test/missions-check.js` | Validates `docs/missions/*.js` (shapes, answers, ids, catalog urls, lengths per level, time, recordings) |
| `test/talk-check.js` | Validates `docs/talk/*.js` (shapes, lengths, privacy, every mission has a talk, every sample answer lands on its branch with the app's matcher) |
| `tools/missions-index.js` | Write `src/MissionIndex.js` |
| `tools/voice.py`, `tools/voice_kernel.py`, `tools/voice-list.js`, `tools/voice-refs/` | Chacho's voice (`specs/voice.md`): every spoken line (Talk, the Nest, the Radio Show, words and sentences in `docs/say/`) recorded with Chatterbox on a free Kaggle GPU, checked with Whisper; only new or changed lines (`tools/voice-state.json`). The old Kokoro tools (`talk_audio.py`, `nest_audio.py`, `missions_audio.py`) run only with `--kokoro` |
| `build-pages.js` | Builds `docs/index.html` from `src/Index.html` (adds head tags, manifest, icons) |
| `make-icons.py` | Renders the app icons with Pillow |
| `test/sim.js` | End-to-end simulation of the server with mocked Google services |
| `test/push-crypto.js` | Verifies the ES256 implementation against Node crypto |
| `test/preview.js` | Builds `test/preview.html`: the UI with mocked server data, for visual checks |
| `test/dev-server.js` | Local two-player environment: the real server code with mocked Google services, on port 8787 |
| `specs/` | Feature specs (`play-together.md`, `wordrobe.md`, `wordrobe-studio.md`, ...) |

## API (`doPost` body: `{"fn": name, "args": [...]}`)

| Function | Who | Purpose |
|---|---|---|
| apiPublic(groupId) | anyone | Group name, kids (name/age/color), word of the day |
| apiWarm() | anyone | Pre-fills the cache while a PIN is typed |
| apiDashboard(name, pin) | kid | Week, stats, rewards, push key |
| apiSubmit(name, pin, date, correct, total, level) | kid | Log a task (notifies parents) |
| apiGameResult(name, pin, game, level, correct, total, missed, right, second) | kid | Record a mini-game round, update XP and the review list (`second` = right on the second try, with Second Chance; game `mine` = her saved words) |
| apiSetPet(name, pin, petId, petName) | kid | Adopt or change the pet (XP stays) |
| apiGateResult(name, pin, correct, total, missed, right) | kid | Record a gate challenge (only while the gate is open); 12/15 raises the level |
| apiDuoInvite / Answer / Nudge / End | kid | Duo streaks (see `specs/duo-streak.md`); the duo data comes with `apiDuelHome` and `apiDashboard` |
| apiDuelHome / Invite / Join / Reply / Cancel / Solo / Poll / Finish / Helped | kid | Play together (see `specs/play-together.md`; Boss Battle: `specs/boss-tug.md`; Talk & Tap: `specs/talk-tap.md`); `apiDuelPoll` is the hot path, every ~2 s during a duel |
| apiShop / apiShopBuy(item, color, words) / apiWear(wear, move) | kid | The Wordrobe (see `specs/wordrobe.md`): the shop and coins; buy with a request (graded again on the server, which decides the price); what the pet wears |
| apiDesign(base, text, fresh) / apiWords(item, right, missed) / apiSaveWord(id, on) | kid | The Studio, phase 2 (`specs/wordrobe-studio.md`): make a design (graded again on the server); collect or polish an item's words; save a word to her deck |
| apiMissionResult(name, pin, date, mission, correct, total, missed, right, seconds, writing) / apiFlag(name, pin, mission, item, note) | kid | Today's Mission (`specs/missions.md`): save a played mission as the day's task (the server checks that missions are on for her, the day's mission, the number of questions and the time; `writing` = what she wrote at the Writer's Desk, kept for the mission's own write questions only); report a question |
| apiTeacherWriting(code) / apiTeacherMark(code, id, mark, note) | teacher | The Writer's Desk: the newest writing of every level without names; a mark and a preset note the kid sees |
| apiChatResult(name, pin, talk, turns, voice, tiles, mic, said, seconds) | kid | Talk with Chacho (`specs/talk.md`): save a talk's summary and give the bonus (3 XP aloud, 1 a tile, +3 all aloud; 30 a day) |
| apiTugCheck / apiTugSave | kid | Tug of War on one phone: checks the second kid's PIN once (returns a 2-day token the phone keeps instead of her PIN), then saves both results (a save id makes a save sent twice count once) |
| apiPushSubscribe / apiPushMessage | kid / service worker | Register a device / text of the pending notification |
| apiParent(cred) | parent / admin | Overview of the groups this credential may see (`src/Auth.js`: `g:<family id>:<code>`, `n:<family name>:<code>`, a session `pt.…`, or the admin's passphrase); a typed code also returns a 30-day session `token`; a session sees no kid PINs (`locked`) |
| apiParentPushSubscribe / Prefs / Test | parent / admin | Parent notifications on this phone |
| apiAdminAddGroup / AddKid / Settings / TestPush | admin | Management |
| apiNestResult(name, pin, date, day, correct, total, seconds, detail) | kid | A Chacho's Nest session; the day's own session logs the day (15 points) and each word's first try (`detail`, "cat:1,dog:0"), anything else is free play |
| apiAudit(pin, days) | admin | The audit timeline (1 to 30 days) with a summary per family and the device split |

Wrong PINs (`src/Auth.js`): 8 attempts per kid, family or the teacher lock it for 15 minutes; the admin's passphrase 20 in 6 hours
(and 5 an hour per address); 50 wrong tries an hour from one address (`Settings.IpFailLimit`) block that address, whatever
names it tries (calls relayed by Apps Script share one bucket of 500). Names that do not exist keep nothing (no lockout key, no
audit line). Deleting, downloading, the kids' codes and the admin's Data card need the code typed, not a remembered session.

## Deploy

```bash
node build-pages.js                     # src/Index.html -> docs/index.html
clasp push --force                      # upload src/ to Apps Script
clasp update-deployment AKfycbzN95JPrZcVFtwOc5yYpZLEh5fhySlDWHim1wAF_-3kdQpij1s6g4-ixld8NgK27HNI3w
node tools/warm.js                      # the slow first call of the new version, instead of a kid
npx wrangler deploy                     # docs/ to Cloudflare (coco.coachkrispel.com; wrangler.jsonc)
git add -A && git commit -m "..." && git push   # GitHub Pages rebuilds docs/ for the old address (~1 min)
```

Phones get a new app version in the background: the first open after a deploy still shows the old one, with
"A new version is ready. Tap to update."; the next open shows the new one.

Always update the **existing** deployment id above: the front end and service worker call that URL.

## Test

```bash
node test/sim.js          # server scenarios (scoring, groups, PIN lockout, push, settings, games, pets, journey)
node test/games-check.js  # mini-game content
node test/missions-check.js  # mission content (then node tools/missions-index.js to update the server's index)
node test/push-crypto.js  # ES256 signatures verified by Node crypto
node test/ui-check.js     # Index.html: parses, no "//" trap, no top-level name defined twice
node test/preview.js      # then serve app/ and open /test/preview.html (mock data, any 4-digit PIN)
node test/dev-server.js   # two players locally (seeded duo history): /test/dev.html on localhost:8787 and 127.0.0.1:8787
                          # the shop: Aviv may shop early; /dev/coins?who=Aviv&n=1500, /dev/day?d=2026-10-24 (opening, Halloween)
                          # bad networks: /dev/chaos?mode=hang|500|html|busy&n=2 ; the page gets the service worker
                          # slow files: /dev/slow?path=/docs/nest/&ms=4000 (the Nest's scripts on a weak line), /dev/slow?ms=0 stops it
                          # missions: /dev/mission?who=Aviv&id=a2l01 (turns missions on for her, makes it today's task)
                          # the play frame: /test/fit.html measures every mission screen in two phone sizes
                          # the home tabs: /test/home-fit.html checks Today fits in three phone sizes
```
