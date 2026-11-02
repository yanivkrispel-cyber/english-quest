# Google Play: content rating, target audience, Families and Teacher Approved

For the store app only: grades ג to יב (Chacho's Nest, ages 2 to 7, stays on the website: `IN_PLAY` in `src/Index.html`,
`store/README.md`). Every answer points at the code that makes it true; keep them true when the code changes.

## IARC content rating questionnaire

Category: **Reference, News, or Educational** (an educational app). Answers:

| Question (IARC, short) | Answer | Why (code) |
|---|---|---|
| Violence (cartoon, fantasy, realistic), blood, gore | **No** | Content rule 9 (`specs/store-readiness.md`). The Boss Battle "hits" Grumble the Word Thief with right answers: a game meter, no depiction of violence (`specs/boss-tug.md`). Tug of War is a rope pull |
| Fear, horror, scary content | **No** | Rule 9; the Halloween Drop is cute costume items for the pet (a pumpkin, a witch hat, bat wings, a tiny ghost buddy, `docs/items/`), friendly, not scary. Look at those four pictures once more before the rating |
| Sexuality, nudity, romance | **No** | Rule 9 |
| Language: profanity, crude humor | **No** | Content written and checked per level (`test/missions-check.js`, `test/talk-check.js`) |
| Controlled substances (drugs, alcohol, tobacco) | **No** | Rule 9 (missions b2r03, b2v04, b2l07, bpl05 were replaced for this) |
| Gambling, simulated gambling, loot boxes | **No** | Coins are earned, never bought; no random rewards for coins (rule 7, `specs/wordrobe.md`) |
| Real money purchases / digital purchases | **No** | No billing at all; the plan hooks answer 501 (`worker/api/index.js`) |
| Does the app allow users to interact or exchange content? | **Yes** (preset only) | Game invites, preset reactions and a preset wave between kids; no free text, voice or pictures (`src/Duels.js`, rule 3). Between families only when both families' parents turned it on (`Groups.FriendsOn`, `apiParentFriends` in `src/Safety.js`); block and report from a preset list (`apiKidBlock`); limits per hour (`contactLimit`) |
| Does the app share the user's location with other users? | **No** | No location at all (`docs/_headers`: `geolocation=()`) |
| Personal information shared with other users? | **No** | Another family's kid sees only the first name and the pet (`duelCanMeet`, `src/Duels.js`) |
| Unrestricted internet / web browser | **No** | Links out of the kids' side go through the grown-ups' gate (`grownUp`, `a[data-gate]` in `src/Index.html`); the parents' area is behind the parent code |
| User-generated content shown to others | **No** | The Writer's Desk text is seen by the kid, the parents and the teacher (without the kid's name), never by another kid (`src/Missions.js`) |
| Promotes or depicts real-world crime, hate, discrimination, politics, religion | **No** | Rule 9 |

Expected result: **Everyone / PEGI 3 / USK 0 / ClassInd L**, with the interactive element "Users Interact".

## Target audience and content (Play Console)

- **Target age groups:** 6-8 and 9-12, as the owner asked. The store app accepts grades ג to יב (about 8 to 18), so
  **13-15 and 16-17 are also true** for the kids who use it. The default here is to tick what the app serves (6-8, 9-12, 13-15,
  16-17): a target list that leaves out ages the app serves can be challenged in review. To keep 6 to 12 only, cut `GRADES`
  for `IN_PLAY` to ג to ו in `joinForm` and `ageOptions` (two lines), and tick 6-8 and 9-12. **The owner's call.**
  Note: grades א and ב (ages 6 and 7) go to the Nest on the website, so in practice the store app starts at age 8.
- **Appeals to children (unintended):** yes, on purpose: the app is for children, so the Families Policy applies in full.
- **Store presence:** the listing is for children and parents; no characters or claims aimed at another age.

## Families Policy checklist

Status: **done** (the code meets it), **missing** (to do before the closed test or production), **owner** (only the owner can).

| Requirement | Status | Where |
|---|---|---|
| Content appropriate for children | done | Rule 9; content checks `test/missions-check.js`, `test/talk-check.js`, `test/games-check.js`; Talk with Chacho is scripted, no AI at run time (`specs/talk.md`) |
| No ads, or only Families-certified ad SDKs | done | No ads, no ad SDK. Play Console: Ads = **No** |
| No Advertising ID, no device identifiers beyond what a function needs | done, **check the build** | The web app reads none. In the built Android project, check the merged manifest has no `com.google.android.gms.permission.AD_ID` (Bubblewrap's template has none; if a dependency adds it, remove it with `tools:node="remove"`). Play Console: Advertising ID = **No** |
| Third-party SDKs on the Families list only; no analytics or tracking | done | No third-party SDK or script in the web app (rule 1; fonts and icons served from `docs/fonts/`). The Android shell is Google's Android Browser Helper only |
| Least data from children; no precise location, contacts, photos, audio stored | done | `store/data-safety.md`; `docs/_headers` Permissions-Policy |
| Privacy policy for children, linked in the listing and in the app | done, **owner** for the blanks | `docs/privacy.html` (Hebrew and English); in the app: sign-up, re-consent card, parents' area (`privacyLinks`), Me tab "For grown-ups" (`aboutCard`). Operator, address and email are blanks (`legal-review.md`) |
| Accurate Data safety form | done (this pack), **missing**: notice v3 | `store/data-safety.md` (mismatch table) |
| Parental consent before a child's data is collected | done, **lawyer** | The parent signs up and ticks the consent (`joinWelcome`, `Groups.Consent/ConsentV/ConsentAt`); kids never sign up alone. Whether a checkbox plus the parent code is "verifiable parental consent" under COPPA: `legal-review.md` L2 |
| Links out, purchases and sharing behind a parental gate | done | `grownUp()` (a multiplication in Hebrew words) for test-english.com links, WhatsApp, the share sheet, and the policy pages from Me. **Missing** for outside Israel: the gate is in Hebrew only |
| No interaction between kids without safeguards | done | Preset messages only, parents' switch for other families, block and report, limits (`src/Safety.js`, `src/Duels.js`). **Missing**: a 4-letter duel code shared outside the app still connects kids of two families whose parents turned it on (known gap) |
| Account deletion in the app and on the web | done | `apiDeleteData` (`src/Privacy.js`), parents' area card; web steps on `privacy.html#delete-en` |
| Permissions only when needed, with a fallback | done | Microphone only after the parents' switch (`micAllowed`, `Girls.Mic`), asked in context; sentence buttons without it. Notifications only from the reminder card; the app works without them |
| No manipulative design, no pressure | done | Rule 8: one gentle reminder a day at the parents' hour (`kidReminders`), no countdowns, no other kids' names; A1 and A2 see no point numbers (`lowKid`) |
| Augmented reality, gambling, contests with prizes | done | None |
| Generative AI features for kids | done | None at run time (content is written in advance and checked) |
| Under-5 content kept to its own rules | done (out of scope) | The Nest is not in the store app (`nestStoreNote`, the join form) |
| Families self-certification and the closed test | **owner** | Play Console forms; 12 testers for 14 days on a new personal account |
| Demo account for review | **owner** | The reviewer family (`store/README.md`, `store/data-safety.md` App access) |
| A support email in the listing | **owner** | The same address as in the policy |

## Teacher Approved (Play's Kids tab)

Teacher Approved is not applied for: Google's reviewers pick apps from the Families program and rate them against these
criteria. What the app has, and what would hold it back:

| Criterion | Status | Notes |
|---|---|---|
| Age-appropriate content and design | done | Rule 9; Hebrew help for A1 and A2 (`heLine`, `KHE`); one main button per screen (`specs/design.md`) |
| Enrichment: clear learning goals | done | CEFR levels A1 to C1, a daily mission in five parts, spaced review, a gate challenge per level (`README.md`) |
| Delight: fun, characters, rewards | done | Chacho, ten pets that grow, the journey map, games together |
| Ease of use: a child can play without help | done for A2 and up, **partly** for the youngest | Hebrew lines; the youngest readers (grade ג) may need a parent at first |
| Accessibility | done (basics) | WCAG 2.2 AA text colors, `aria-label` on icon buttons (`test/ui-check.js`), reduced motion, 44 px targets (rule 11, `specs/design.md` rule 12) |
| No disruptive ads or purchase prompts | done | None |
| Language reach | **missing** | The parents' area, the gate and the help are Hebrew only: fine for Israel; an English parents' area is needed before other countries |
| Offline use | partly | The service worker keeps the app and its pictures; the daily mission needs the network for its result |
| Content quality checked by an educator | partly | Reviewed step by step by an English teacher (`?missions&t=`); not every mission is reviewed yet (`specs/pilot.md`) |
