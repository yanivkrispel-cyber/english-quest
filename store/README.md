# The Google Play pack (English with Chacho)

Everything Google Play needs for the Android app, except what only the owner can do (the developer account, its payment
and identity check, the signing key, the uploads). Ages 6 to 12 first; Chacho's Nest stays on the website for now
(`specs/store-readiness.md`, "The store route").

| File | What it is |
|---|---|
| `android/twa-manifest.json` | The Bubblewrap project for the Trusted Web Activity of https://coco.coachkrispel.com |
| `../docs/.well-known/assetlinks.json` | Digital Asset Links: tells Android the site trusts the app. **Has placeholders** (below) |
| `../docs/icons/play-512.png` | The store listing's hi-res icon (512 x 512, full square; Play rounds it) |
| `../docs/icons/mono-192.png` | The notification icon of the app (white on transparent) |
| `assets/feature-graphic.png` | The listing's feature graphic (1024 x 500, no transparency) |
| `art/feature.html`, `art/shoot.js` | How the feature graphic is drawn (`node store/art/shoot.js`) |
| `../tools/store_art.py` | Draws the two icons from Chacho's clay art (`python tools/store_art.py`) |
| `data-safety.md` | The answers to Play's Data safety form, from the code, and the mismatches found |
| `content-rating.md` | The IARC questionnaire, the target audience, and the Families / Teacher Approved checklist |
| `listing.md` | Title, short and full description (Hebrew and English), screenshots to take |
| `legal-review.md` | What a lawyer must read in `docs/privacy.html` and `docs/terms.html` (marks L1-L10, T1-T10) |

## What the app does differently inside the Play app

The same site runs in the app. `IN_PLAY` in `src/Index.html` is true when Chrome opened the page from the app (the referrer is
`android-app://com.coachkrispel.chacho`, the start address carries `?src=play`); the tab keeps it in `sessionStorage`
(`eq_store`), never in `localStorage`, because the app shares Chrome's storage for this address. Then:

- The sign-up (`?join=`) and the parents' "change age or class" offer school grades only (כיתה ג to יב); the Nest ages are hidden.
- A Nest kid who signs in sees a note for the parents (`nestStoreNote`): the Nest is on the website, at the address written as
  text (no link, rule 2), with "Who is playing?".
- Phones stay upright (`screen.orientation.lock('portrait')`, phones only); tablets turn both ways (`specs/tablet.md`).
- Try it in any browser: add `?src=play` to the address (the dev server too: `http://localhost:8787/test/dev.html?src=play`).

The Me tab has a "For grown-ups" card (Privacy, Terms) behind the grown-ups' gate, in the app and on the website; the parents'
area and the sign-up already linked both pages.

## Before the first build (the owner)

1. **Developer account.** Play Console, personal or organisation. A new personal account must run a **closed test with at
   least 12 testers for 14 days** before production (the pilot families: each needs a Google account on an Android phone,
   opted in from the test link). An organisation account skips it but needs a D-U-N-S number.
2. **The package name** is `com.coachkrispel.chacho` (in `twa-manifest.json`, `assetlinks.json` and `PLAY_PKG` in
   `src/Index.html`). It can never change once the app is uploaded: change all three now if you want another.
3. **Fill the blanks** on `docs/privacy.html` and `docs/terms.html` (orange chips: operator, address, contact email, courts),
   and `PRIVACY_OPERATOR` in `src/Index.html`; have a lawyer read both pages (`legal-review.md`). Play needs the privacy URL
   (`https://coco.coachkrispel.com/privacy.html`) and the deletion URL (`https://coco.coachkrispel.com/privacy.html#delete-en`).
4. **A reviewer family** (rule 12): in the admin view, a group "Play Review" with two kids at A2 and B1 (fake names, PINs
   the app makes), the playing-with-other-families switch off, the microphone off. Write its kid names, PINs and the parent
   code into Play Console's App access form (`data-safety.md` has the text). Never commit them.

## Build (Bubblewrap)

Needs Node 18+, and Bubblewrap installs its own JDK 17 and Android SDK on the first run (say yes).

```sh
npm i -g @bubblewrap/cli
mkdir ../chacho-android && cp store/android/twa-manifest.json ../chacho-android/   # outside the repo: the project and key stay out of git
cd ../chacho-android
bubblewrap update --skipVersionUpgrade     # writes the Android project from twa-manifest.json
bubblewrap build                           # asks for the key passwords the first time; writes app-release-bundle.aab and app-release-signed.apk
```

If `update` refuses an empty folder, run `bubblewrap init --manifest=https://coco.coachkrispel.com/manifest.webmanifest`
there once, answer anything, then copy `twa-manifest.json` over the one it made and run `bubblewrap update` again.

- The first `build` creates the **upload key** `android.keystore` (alias `chacho-upload`). Keep it and its passwords outside
  the repo, in two safe places (`.gitignore` refuses `*.keystore`). With Play App Signing, Google keeps the real signing key;
  losing the upload key can be fixed through Play support, but it takes days.
- Every new upload: raise `appVersionCode` (and `appVersionName`) in `store/android/twa-manifest.json`, copy it over, then
  `bubblewrap update && bubblewrap build`. The app's content needs no new build: it is the website, updated by the usual deploy.
- The target SDK comes from the Bubblewrap version: use a current one (`npm i -g @bubblewrap/cli@latest`), since Play refuses
  uploads below its target API level.

## Digital Asset Links (assetlinks.json)

Without it the app shows Chrome's address bar on top (a "Custom Tab"), which Play reviewers reject for a TWA.

1. Upload the first `.aab` to the closed test. Play Console, **Test and release > App integrity > App signing**: copy the
   **SHA-256 certificate fingerprint** of the *app signing key*.
2. Your *upload key*'s fingerprint (for testing the `.apk` from Bubblewrap): `keytool -list -v -keystore android.keystore -alias chacho-upload`.
3. In `docs/.well-known/assetlinks.json` replace the two `PLACEHOLDER_...` strings with those fingerprints (format
   `AB:CD:...`, 32 pairs). Play Console also offers a ready file on its **Deep links** page: its fingerprints are the ones to use.
4. Deploy the site (`npx wrangler deploy`), then check:
   `curl -s https://coco.coachkrispel.com/.well-known/assetlinks.json` (JSON, no redirect, `content-type: application/json`) and
   `https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://coco.coachkrispel.com&relation=delegate_permission/common.handle_all_urls`.
   Not checked from here: whether the static upload includes a folder whose name starts with a dot. If the curl gives 404,
   add `"/.well-known/*"` to `run_worker_first` in `wrangler.jsonc` and answer it from `worker/range.js` with the file's JSON.
   GitHub Pages (the old address) does not serve it (Jekyll skips dot-folders) and does not need to.
5. Install the `.apk` on an Android phone: no address bar on top = verified.

## Store listing and forms (Play Console)

- **Main store listing:** `listing.md` (both languages; Hebrew as the default language, English as a translation), the icon
  `docs/icons/play-512.png`, the feature graphic `store/assets/feature-graphic.png`, the screenshots listed there.
- **App content:** privacy policy URL; Ads: no; App access: `data-safety.md`; Content rating: `content-rating.md`;
  Target audience: `content-rating.md`; Data safety: `data-safety.md`; Government app: no; Financial features: none;
  Health: no; News: no.
- **Category:** Education. **Tags:** language learning, kids. **Contact:** the support email (needed; the same as in the policy).
- **Countries:** Israel first (the parents' area and the grown-ups' gate are in Hebrew only; `specs/store-readiness.md` gaps).

## Checks before each release

- The phone frame and `test/tablet.html` (portrait and landscape) with `?src=play` for any changed screen.
- `node test/ui-check.js`, `node test/sim.js`, the content checks (CLAUDE.md, step 2).
- On a real Android phone: the app opens without the address bar, a reminder arrives (notifications are delegated to the app),
  Talk with Chacho asks for the microphone only after the parents' switch is on (the prompt is Chrome's, for the site), the Privacy and Terms buttons in Me ask the grown-ups' question and come back with Back.
