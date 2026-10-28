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
   and content that links out.
3. **Kids only meet kids through safe channels.** No free text, voice or pictures between kids. Kid-to-kid features use
   preset messages and reactions, show only the first name and the pet, and a parent can turn them off (`Groups.Friends`
   today). Anything new that lets kids find or contact each other needs a parent switch and a way to report or block.
4. **Collect the least data, and say what is kept.** A new field about a kid or a parent needs a reason. Every new piece
   of stored data goes into the data list below and into the privacy text shown at sign-up (`renderJoin`). No voice,
   photo, precise location, contacts or advertising id is stored. Speech is turned into text on the phone.
5. **Delete on request.** Whatever is stored must be removable per kid and per family (store rules require in-app
   account deletion). A new tab or column must be covered by the deletion path once it exists (gap below).
6. **Permissions in context, and the app works without them.** Ask for the microphone or notifications only at the moment
   they are used, with a sentence that says why; every feature needs a fallback when the answer is no (the tiles for Talk
   with Coco, the reminders being optional). New permissions need the purpose strings for the native shell
   (`NSMicrophoneUsageDescription`, `NSSpeechRecognitionUsageDescription`) noted here. The Nest asks once, in context, with
   a Hebrew sentence for the parent (Say it, or tapping Coco for "Coco repeats you"), and keeps the answer on the phone
   (`eq_nest_mic`); without the microphone Say it shows its button and Coco just says "Hello!". The microphone string must
   cover both: it hears whether the child spoke, and replays the child's voice once from memory, nothing kept or sent.
7. **No money outside the store, and no gambling.** Anything digital that is ever sold (subscription, coins, items) goes
   through Apple In-App Purchase and Google Play Billing, and never through a link to a payment page. Coins are earned,
   never bought, as long as this holds. No random rewards for coins or money (loot boxes); if a surprise box is ever
   added, it is free, or its odds are shown before the purchase.
8. **No pressure on kids.** No purchase prompts aimed at kids, no countdowns or "only today" on things bought with money,
   no guilt messages. Streak savers and reminders stay gentle; kid notifications only at the set daytime hours.
9. **Content fit for the age rating.** No violence, death, war, horror, romance, alcohol, drugs, gambling, politics or
   religion, and nothing scary for young kids, in missions, talks, games and items. Facts are checked, brand names are
   avoided. (This is why b2r03, b2v04, b2l07, bpl05 were replaced.)
10. **Works as an app.** Every new screen fits the phone without page scrolling where the app frame applies, works
    offline where possible (the service worker), and never sends a kid to a website to do the daily task.
11. **Accessibility basics.** Text that can be read aloud or seen large enough, buttons at least 44 px, color is never
    the only signal, `prefers-reduced-motion` respected.
12. **Reviewer path.** A store reviewer must be able to try everything: keep a demo family (fake names, fake PINs) that
    opens every feature, and keep it working when features change.

## Data we keep (update with every change)

Kept in the private Google Sheet, written only by the app's own server (Apps Script, owner's Google account):

- Kid: first name (English), age or grade (a Coco's Nest kid: the real age, 2 to 7), level, PIN, color, pet and its name,
  group. Optional email (older setups). The Nest's Say it step uses the microphone for loudness only, on the phone:
  nothing is recorded or sent. The Nest's "Coco repeats you" (`docs/nest/echo.js`) holds the kid's few seconds of voice in
  the phone's memory only, plays it back once in a parrot's voice and drops it: never written to storage, never sent, no
  speech recognition, the microphone off before the replay.
- Parent / family: family name, parent's first name, parent PIN, optional email, consent date.
- Activity: tasks and missions with scores and time spent, game rounds, missed items for review, gate challenges,
  level tests, duels and their answers, duo streaks, shop purchases (coins), what the pet wears, saved words, bonus XP.
  Coco's Nest: the day played and, for each word of the day, whether it was found on the first try (Log.Detail, for the
  review days); deleted with the kid's Log rows.
- Talk with Coco: the text the phone heard (no audio), counts of spoken and tapped answers.
- Feedback and "Something wrong here?" notes.
- Devices: push subscription endpoints and the browser's user-agent string.
- Audit trail (tab Audit, `specs/audit.md`): when a kid, parent, admin or teacher opened the app (once per half hour),
  wrong PIN attempts (not the PIN), grown-ups' changes, hand edits in the sheet (not PIN values), and a coarse device
  label (iPhone / Android phone / Computer..., app or browser).

On the phone (local storage): the remembered kid and PIN, the group, the last dashboard, settings (sound, voice). Coco's
Nest also keeps, on the phone only: how many times each game was played (Coco shows a new game first), the microphone
choice, the kid's last 12 colored pictures (which colors went where; no drawing, photo or sound), and the sticker book
(`docs/nest/stickers.js`): which stickers the kid has already seen pop (word ids, `eq_nest_stickers_<kid>`) and the
free page (the place and up to 40 stickers with their spots, `eq_nest_board_<kid>`). The parents' weekly postcard is
drawn on the phone from the parents' view data and leaves the phone only when a parent shares or saves it from the
parents' area (behind the parents' code); nothing new is stored on the server.

## Known gaps before a store submission

- No in-app deletion of a kid or a family (today the owner deletes rows in the sheet). The deletion must cover the
  Audit tab too (rows by Who and Group).
- Kids can share to WhatsApp (certificate, duel invite links) and a kid with `Girls.Missions = no` is sent to
  test-english.com: both need a parental gate or must move to the parents' area.
- Play together reaches kids in other groups by default (a group opts out with `Groups.Friends = no`); for the stores it
  should be off by default and switched on by a parent, with report and block.
- Fonts and icons load from Google Fonts and unpkg (third parties see the kid's IP address): self-host them in `docs/`.
- No public privacy policy page and no terms page (the stores need a URL): write them, in Hebrew and English.
- The data lives in the owner's personal Google account: a business account (or a proper database) and a data
  processing note are needed before selling.
- No `assetlinks.json` / native shell yet; no store listing, age rating questionnaire or data safety form yet.
- The app name and Coco: trademark check in Israel not done.
- The Nest's microphone: a parent who said "no" (or a phone that refused) cannot turn the microphone back on in the app
  (`eq_nest_mic` has no switch in the parents' area yet).
- Coco's Nest (ages 2 to 7, `specs/nest.md`) puts kids under 5 in the same app as teenagers. Apple's Kids Category takes
  one age band an app (5 and under, 6 to 8, 9 to 11): choose a band, ship the Nest as its own app, or stay out of the
  Kids Category. Google Families allows several age groups, with stricter rules for "5 and under".
