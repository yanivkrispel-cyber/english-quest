# English Quest

Daily ~10-minute English practice tracker for three sisters, built on test-english.com exercises.

- **App (for the girls):** https://yanivkrispel-cyber.github.io/english-quest/
- Backend: Google Apps Script bound to the "English Quest" Google Sheet (data, PINs, rewards), managed with clasp.

The GitHub Pages front end calls the Apps Script web app as an anonymous JSON API (`doPost`), so it
works for Google child accounts under 13, which are blocked from opening Apps Script pages directly.

## Layout
- `src/Code.js` — server: assignments, scoring, caching, reminders, JSON API
- `src/Index.html` — UI (Liquid Glass); served by Apps Script and copied to `docs/` for Pages
- `src/Catalog.js` — generated from `catalog.tsv` by `node gen-catalog.js`
- `build-pages.js` — builds `docs/index.html` from `src/Index.html`
- `test/sim.js` — local simulation with mocked Google services; `test/preview.js` builds a static UI preview

## Deploy
    node build-pages.js
    clasp push --force
    clasp update-deployment <deploymentId>
    git commit -am "..." && git push
