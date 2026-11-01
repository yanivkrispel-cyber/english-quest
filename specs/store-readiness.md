# Store readiness (Google Play and the App Store)

The owner may sell the app in the stores later (asked 2026-10-27: "every change from now on must fit Google's and Apple's
terms"). The app is for children, so it falls under the strictest rules: Apple's Kids Category (App Review Guidelines 1.3,
5.1.4) and Google Play's Families Policy (and the Designed for Families / Teacher Approved programs), plus COPPA, the
GDPR rules for children and Israel's privacy law. The likely store route: Google Play as a Trusted Web Activity of
https://coco.coachkrispel.com (needs `/.well-known/assetlinks.json` there), the App Store as a thin native shell
(Capacitor or WKWebView) with native extras, since Apple rejects a plain website in a wrapper (4.2).

## Rules for every change

Check each change against this list before it ships. When a rule cannot be met yet, add it to the gaps below in the same
commit.

1. **No third-party tracking.** No analytics, ads, crash reporters, social SDKs or anything that sends a kid's data or
   device ids to another company. No fingerprinting. Usage numbers come from our own sheet only.
2. **Nothing leaves the app from the kids' side without a parental gate.** External links (websites, WhatsApp, the
   store, email), sharing and anything that opens another app go in the parents' area, or behind a gate a young child
   cannot pass (a question for adults, not a "tap and hold"). This includes new buttons, notifications that open a link,
   and content that links out. In Chacho's Nest, leaving the kid (who is playing, sign out) is behind the grown-ups' gate too:
   a long press with a filling ring, then a sum in Hebrew words (`nkGateBind`, `specs/nest.md`).
3. **Kids only meet kids through safe channels.** No free text, voice or pictures between kids. Kid-to-kid features use
   preset messages and reactions, show only the first name and the pet, and are off between families until the parents of
   both families turn them on (`Groups.FriendsOn`, the parents' area, 2026-11-01; the admin's `Groups.Friends = no` still
   keeps a family out). Kids can block and report from a preset list (`apiKidBlock`, tabs Blocks and Reports; the admin and
   the kid's parents see it), and named invites, duo requests and nudges are limited per kid per hour (`contactLimit`).
   Anything new that lets kids find or contact each other goes through `duelCanMeet` (the switch and the blocks).
4. **Collect the least data, and say what is kept.** A new field about a kid or a parent needs a reason. Every new piece
   of stored data goes into the data list below, into the privacy notice (`PRIVACY_ITEMS` in Index.html, shown at sign-up
   and in the parents' re-consent card; raise `PRIVACY_V` there and `NOTICE.v` in `src/Safety.js` and say what changed in
   `PRIVACY_CHANGES`) and into `docs/privacy.html`. No voice, photo, precise location, contacts or advertising id is stored.
   **Speech is not always turned into text on the phone** (this rule said so until 2026-11-01, wrongly): the browser's speech
   recognition sends the voice to Google (Chrome, Android) or usually Apple (Safari), unless the browser can recognize on
   the device (`processLocally`, which the app asks for where it exists). So every use of speech recognition needs the
   parent's microphone switch (`Girls.Mic`, `micAllowed()` in Index.html), off by default, and the notice says where the voice
   goes. Consent is kept with its version and time (`Groups.ConsentV`, `ConsentAt`).
5. **Delete on request.** Whatever is stored must be removable per kid and per family (store rules require in-app
   account deletion). A new tab or a new column that names a kid or a family goes into `KID_COLS` / `GROUP_COLS` in
   `src/Privacy.js` (or `NO_PERSON_TABS`); `test/sim.js` fails otherwise, and checks that nothing is left after a deletion.
6. **Permissions in context, and the app works without them.** Ask for the microphone or notifications only at the moment
   they are used, with a sentence that says why; every feature needs a fallback when the answer is no (the tiles for Talk
   with Chacho, the reminders being optional). New permissions need the purpose strings for the native shell
   (`NSMicrophoneUsageDescription`, `NSSpeechRecognitionUsageDescription`) noted here. The Nest asks once, in context, with
   a Hebrew sentence for the parent (Say it, or tapping Chacho for "Chacho repeats you"), and keeps the answer on the phone
   (`eq_nest_mic`); without the microphone Say it shows its button and Chacho just says "Hello!". The microphone string must
   cover both: it hears whether the child spoke, and replays the child's voice once from memory, nothing kept or sent.
7. **No money outside the store, and no gambling.** Anything digital that is ever sold (subscription, coins, items) goes
   through Apple In-App Purchase and Google Play Billing, and never through a link to a payment page. Coins are earned,
   never bought, as long as this holds. No random rewards for coins or money (loot boxes); if a surprise box is ever
   added, it is free, or its odds are shown before the purchase.
8. **No pressure on kids.** No purchase prompts aimed at kids, no countdowns or "only today" on things bought with money,
   no guilt messages. Streak savers and reminders stay gentle; kid notifications only at the set daytime hours. A kid's
   reminder comes once a day at the hour her parents chose (`Girls.RemindAt`, 14:00 to 20:00, or none), with no "last call",
   no countdown, no streak to lose and never another child's name. Seasonal shop items stay after their season (no "back
   next year").
   Ages 2 to 7 (the Nest) see no points, streak or XP numbers, and the Nest stops for the day at a hard screen-time cap
   (20, 30 or 40 minutes by age, the parent may set less, never "no limit"; AAP and WHO), ending on a calm "see you tomorrow".
9. **Content fit for the age rating.** No violence, death, war, horror, romance, alcohol, drugs, gambling, politics or
   religion, and nothing scary for young kids, in missions, talks, games and items. Facts are checked, brand names are
   avoided. (This is why b2r03, b2v04, b2l07, bpl05 were replaced.)
10. **Works as an app.** Every new screen fits the phone without page scrolling where the app frame applies, works
    offline where possible (the service worker), and never sends a kid to a website to do the daily task.
11. **Accessibility basics.** Text that can be read aloud or seen large enough, buttons at least 44 px (64 px in the Nest),
    color is never the only signal, `prefers-reduced-motion` respected, and picture-only buttons have a name (the Nest's answer
    cards carry their word).
12. **Reviewer path.** A store reviewer must be able to try everything: keep a demo family (fake names, fake PINs) that
    opens every feature, and keep it working when features change.

## Data we keep (update with every change)

Kept by the app's own server: today the private Google Sheet (Apps Script, owner's Google account); after the move to
Cloudflare (`specs/cloudflare.md`) a SQLite database inside the server's Durable Object (the owner's Cloudflare account),
with the sheet as a nightly copy. Retention (`retentionSweep`, every night at 03:00): opens in the audit trail 30 days one by
one, then one total a day per person (`rollUpOpens`); the whole audit trail 180 days; the text of what a kid said to Chacho
90 days; a kid with no open and no practice for 12 months is deleted (and her family if she was its only kid), after a push and
an audit line to the admin 30 days before (`inactiveSweep`, `Girls.Seen` / `Girls.Inactive`). A family's plan (tab `Plans`,
empty in the pilot). The public policy: `docs/privacy.html` (and `docs/terms.html`), linked from sign-up and the parents' area.
Processors: Cloudflare (server, database, the site), Google (the nightly sheet copy, Chrome/Android push, Chrome's speech
recognition when the parents turned the microphone on), Apple (push on iPhone/iPad/Safari, Safari's speech recognition when
on), Mozilla (Firefox push).
Backups (`specs/cloudflare.md`): the whole export, gzipped, every night, 14 days, inside the same Durable Object;
Cloudflare's own point-in-time history of the database, 30 days. A deleted family stays in those copies until they age out (at most
30 days); the privacy text says so. The phones' error reports are kept 30 days (`opsSweep`).
What a kid wrote at the Writer's Desk is kept a year (`retentionSweep`).

- Kid: first name (English), age or grade (a Chacho's Nest kid: the real age, 2 to 7), level, PIN, color, pet and its name,
  group, the Hebrew help choice (`Girls.Hebrew`: yes, no or empty = on for A1 and A2; set by the kid in Me or a parent). Optional email (older setups). The parents' switches: the microphone (`Mic`) and the reminder hour (`RemindAt`); the
  last day she opened the app (`Seen`) and, when it comes, the day the admin was told she would be deleted (`Inactive`).
- Kids and kids: blocks (`Blocks`: who blocked whom, the day) and reports (`Reports`: who, about whom, a preset reason). The Nest's Say it step uses the microphone for loudness only, on the phone:
  nothing is recorded or sent. The Nest's "Chacho repeats you" (`docs/nest/echo.js`) holds the kid's few seconds of voice in
  the phone's memory only, plays it back once in a parrot's voice and drops it: never written to storage, never sent, no
  speech recognition, the microphone off before the replay.
- Parent / family: family name, parent's first name, parent code (6 digits, made by the server; older families keep 4),
  optional email, the notice version agreed to and when
  (`Consent`, `ConsentV`, `ConsentAt`), the switch for playing with other families (`FriendsOn`). The admin's passphrase is kept
  only as a salted hash (Script Property ADMIN_PASS). For a Nest kid, the
  parent's choices: lessons a day, arcade minutes and screen time a day (`Girls.NestPerDay`, `NestArcadeMin`, `NestMin`).
- Activity: tasks and missions with scores and time spent, game rounds (with the ids of the items missed and answered right,
  for the review and the item stats), items for review, gate challenges (with their item ids),
  level tests, duels and their answers, duo streaks, shop purchases (coins), what the pet wears, saved words, bonus XP.
  Chacho's Nest: the day played and, for each word of the day, whether it was found on the first try (Log.Detail, for the
  review days); deleted with the kid's Log rows. Today's Nest screen time (`Girls.NestTime`: a date and a number of seconds,
  overwritten each day). The parents' weekly sentence (`src/Learned.js`) is computed from these rows on every read; nothing
  new is stored for it.
- Talk with Chacho: the text the phone heard (no audio reaches the server; only kept when the parents turned the microphone
  on), counts of spoken and tapped answers, and whether the phone listened on the device (`Chats.Mic = local`).
- The Writer's Desk (tab `Writing`, `specs/missions.md`): the one to three sentences a kid wrote in a writing mission (one
  line, at most 400 characters, no markup, never stored as a formula), her first try when she rewrote it, the checklist
  score, the task, and the teacher's mark and preset note. Seen by the kid, her parents and the teacher (without the kid's
  name); never by another kid. The tasks never ask for personal details (missions-check refuses the words). Deleted with the
  kid and after a year. Say it again (fluency) uses the phone's speech recognition for timing only, when the parent's
  microphone switch is on; nothing of it is kept or sent by the app.
- Feedback and "Something wrong here?" notes.
- Devices: push subscription endpoints and the browser's user-agent string.
- Audit trail (tab Audit, `specs/audit.md`): when a kid, parent, admin or teacher opened the app (once per half hour),
  wrong PIN attempts for names that exist (not the PIN; one line per name and flush, made-up names leave nothing), grown-ups' changes, hand edits in the sheet (not PIN values), and a coarse device
  label (iPhone / Android phone / Computer..., app or browser). A kid's or parent's open also carries how long that
  phone's previous open took to show its first screen ("1.4s saved"), a number and a word only (`specs/perf-phase2.md`).
- Feature use (tab Usage, `src/Ops.js`, 2026-11-01): per kid and day, which parts of the app she opened and how many times
  (missions, games, talks, the home tabs, duels, the shop, the Nest...). No time of day, device or content. For the pilot's measures
  (`specs/pilot.md`); deleted with the kid (`KID_COLS`).
- Error reports from phones (tab Errors, `src/Ops.js`, 2026-11-01): the error message and where in the app, the device label, the app
  version, and the kid's first name when the call that carried it was hers. Addresses lose their query and #part, anything like an
  email is cut. Kept 30 days, deleted with the kid.
- Server use per day (script properties `use:<day>`, 8 days): numbers of calls, rows written, pushes and failed calls, no person.

On the phone (local storage): the remembered kid and PIN, the group, the last dashboard, settings (sound, voice), a
remembered parent's signed session (`eq_admin`, 30 days, never the code; void once the family code changes) and their last
parents' view without the kids' codes (`eq_par`; both deleted on sign-out), how long the last open
took (`eq_open_m`), today's feature counts and up to 5 error reports waiting to be sent with the next call (`eq_use`, `eq_err`), whether the last kid had Hebrew help on (`eq_he`, for the wait screen) and that a kid has seen the
first-run tour (`eq_tour_<kid>`). Chacho's
Nest also keeps, on the phone only: how many times each game was played (Chacho shows a new game first), the microphone
choice, the kid's last 12 colored pictures (which colors went where; no drawing, photo or sound), and the sticker book
(`docs/nest/stickers.js`): which stickers the kid has already seen pop (word ids, `eq_nest_stickers_<kid>`) and the
free page (the place and up to 40 stickers with their spots, `eq_nest_board_<kid>`). The parents' weekly postcard is
drawn on the phone from the parents' view data and leaves the phone only when a parent shares or saves it from the
parents' area (behind the parents' code); nothing new is stored on the server. Chacho's arcade (stage C) keeps today's date and the
seconds played on the phone (`eq_nest_arc_<kid>`), and the server keeps one number the parent sets, the arcade minutes a day
(`Girls.NestArcadeMin`). The Nest's screen time keeps today's date and seconds on the phone too (`eq_nest_time_<kid>`), and a
lesson left with the X keeps its place until it is finished (`eq_nest_resume_<kid>`: the date, the day id, the step, the score
and each word's first try so far). Talking Chacho and No, Chacho! use the microphone as the living home does: in memory for one replay, or
loudness only; nothing is kept or sent.

## Known gaps before a store submission

- Kids still sign in with a 4-digit PIN kept as it is in the sheet and in the kid's personal link (finding 7 of the night
  review: a signed kid token and hashed PINs are not built). Wrong PINs are now limited per name and per address.
- The family page right after sign-up (`eq_family`) keeps the new parent code and the kids' PINs on that phone until it is
  left (so the parent can write the code down).

- In-app deletion is built (`src/Privacy.js`, the parents' area card "הנתונים שלכם", 2026-10-30): a kid or the whole family,
  every tab and the audit trail; also a download of the family's data. Left: the admin cannot delete from the Data card yet
  (the admin can delete from a family's parents' code). Closed 2026-11-01: feedback rows are now deleted and exported by the
  family id (`Feedback.Who`; they were matched by the family name before, so a deleted family's feedback stayed), audit lines
  whose detail names a deleted kid go too, and `test/sim.js` checks that every tab and reference column is covered.
- Closed 2026-11-01: the sign-up notice said things that were not true (no data to anyone, only first names seen, all content
  checked by a teacher). The new notice (version 2) is true, consent keeps its version and time, and families with an older
  or no consent see a re-consent card once in the parents' area. Talk with Chacho's microphone is behind a parent switch,
  off by default. Play together between families is off by default, with block, report and a limit per hour. Reminders
  are the parents' choice per kid, without the "last call". Public privacy and terms pages exist (`docs/privacy.html`,
  `docs/terms.html`).
- Left: the operator's name, address and a contact email are placeholders on the privacy and terms pages and in the notice
  (`PRIVACY_OPERATOR`): the owner fills them in. A lawyer should read both pages before the stores.
- Left: COPPA's 2025 rule asks for a separate verifiable parental consent for sharing with third parties; the microphone
  switch (speech to Google/Apple) is a separate parent choice in the parents' area, but the parent is not re-verified
  (anyone with the parents' code can turn it on). The native shell should use on-device speech (iOS `SFSpeechRecognizer`
  with `requiresOnDeviceRecognition`, Android `SpeechRecognizer` on-device) and say so.
- Done 2026-11-01: a kid's WhatsApp share (the duel invite link), the certificate's share sheet and every link to
  test-english.com (`Girls.Missions = no`, the old level test, the run-out fallback) go through the grown-ups' gate
  (`grownUp()` in Index.html: a multiplication in Hebrew words, open for 10 minutes once passed). The mission files carry no
  test-english addresses any more. Left: the link itself, until the own curriculum map (`specs/curriculum.md`) retires it.
- Left: a 4-letter duel code still lets a kid play with a kid of another family whose parents turned playing with others
  on (the code is shared outside the app).
- Fonts: Plus Jakarta Sans and the icon fonts are served from `docs/fonts/` (2026-10-30, `tools/fonts_local.js`); only the Apps
  Script copy for adults still loads Google Fonts and unpkg.
- The privacy and terms pages are written (Hebrew and English, 2026-11-01): https://coco.coachkrispel.com/privacy.html and
  /terms.html are the store URLs once the placeholders are filled.
- The data lives in the owner's personal Google account; the move to a proper database on Cloudflare is built
  (`specs/cloudflare.md`, not switched on yet). Still personal accounts (Cloudflare too): a business account and a data
  processing note are needed before selling.
- No `assetlinks.json` / native shell yet; no store listing, age rating questionnaire or data safety form yet.
- The app name and Chacho: trademark check and filing in Israel (classes 9 and 41) not done; the steps are in the owner's
  checklist (`EnglishLessons-work/night-review/owner-actions.md`).
- Third-party licenses: listed in `NOTICES.md` (2026-11-01); the list must also be shown in the app (parents' area) before a
  submission.
- Cost: the free Cloudflare plan's daily limits (100,000 calls, 100,000 rows written) hold roughly 300 to 1,000 active kids a
  day. The admin's Audit card turns orange from 60% of either; Workers Paid (5 USD a month) is the owner's decision before a
  store launch.
- The Nest's screen time is counted on the phone and reported every 3 minutes: two tablets used at the same time, or a
  cleared phone, can add a few minutes over the cap before the server's number reaches them. The grown-ups' sum is in Hebrew
  words only (an English-speaking family needs an English version before a store build outside Israel).
- The Nest's microphone: a parent who said "no" (or a phone that refused) cannot turn the microphone back on in the app
  (`eq_nest_mic` has no switch in the parents' area yet).
- Chacho's Nest (ages 2 to 7, `specs/nest.md`) puts kids under 5 in the same app as teenagers. Apple's Kids Category takes
  one age band an app (5 and under, 6 to 8, 9 to 11): choose a band, ship the Nest as its own app, or stay out of the
  Kids Category. Google Families allows several age groups, with stricter rules for "5 and under". The recommendation is below.

## The store route and the Nest (recommendation, night review 2026-11-01, finding 22)

1. **Google Play first, ages 6 to 12.** A Trusted Web Activity of https://coco.coachkrispel.com (`assetlinks.json` on the site,
   a small Android project made with Bubblewrap), in the Families program with the target ages 6 to 8 and 9 to 12. A new
   personal developer account must run a **closed test with at least 12 testers for 14 days** before it may publish: the pilot
   families are the testers (each needs a Google account on an Android phone, opted in from the test link). A business
   (organisation) account skips that rule but needs a D-U-N-S number.
2. **The Nest stays out of the first store app.** In the store build, the sign-up offers grades only (no ages 2 to 7) and a
   Nest kid who signs in sees a parents' note pointing to the web app; the pilot families keep the Nest on the web as now.
   Later, the Nest ships as **its own app** ("Chacho's Nest", ages 2 to 5 band at Apple, "5 and under" at Google), with the
   stricter rules for the youngest (no links out at all, a grown-ups' gate before the parents' area, screen-time caps).
3. **Apple after the Google numbers.** Decide with the data from Play (installs, the pilot gate in `specs/pilot.md`): a thin
   website wrapper is usually rejected (guideline 4.2), so the App Store needs a native shell with native features (local
   reminders, offline packs, Sign in with Apple for parents) and one age band (6 to 8 or 9 to 11). Not before Play works.
4. Before any of it: the trademark, a business entity and business accounts, the public privacy policy and terms pages, a
   support address, and `NOTICES.md` shown in the app (the owner's checklist).
