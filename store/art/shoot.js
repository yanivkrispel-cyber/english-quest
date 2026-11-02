// Shoots Google Play's feature graphic from store/art/feature.html: 1024 x 500, a 24-bit PNG with no alpha channel (Play
// refuses transparency in the feature graphic; the page is opaque, and a page screenshot has no alpha).
//   node store/art/shoot.js      -> store/assets/feature-graphic.png
// Uses the pre-installed Playwright (require('playwright')); outside the cloud box: npm i -D playwright, npx playwright install chromium.
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1024, height: 500 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'feature.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => [...document.images].every(i => i.complete && i.naturalWidth));
  const out = path.join(__dirname, '..', 'assets', 'feature-graphic.png');
  await page.screenshot({ path: out, omitBackground: false });
  await browser.close();
  console.log('written', path.relative(process.cwd(), out));
})().catch(e => { console.error(e); process.exit(1); });
