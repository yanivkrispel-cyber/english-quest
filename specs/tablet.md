# Tablets

Asked by a pilot family on 2026-10-27 (an iPad and Android tablets, installed as an app).

## How it works

The app stays one phone layout. On a tablet (a touch screen whose short side is 600 px or more), the small script at the
top of `src/Index.html` (`tabletFit`) changes the viewport meta so the page is laid out like a big phone, 520 px wide in
portrait and 640 px tall in landscape, and the browser scales it up to the screen. Every size, play frame and measure
in the code stays the phone's, so nothing in the games, missions or the five tabs needs a tablet branch. It runs again
when the tablet turns. Phones and computers keep `width=device-width`.

The script also sets `html.tablet`. In landscape the column is 760 px wide (`#app`, the tab bar and sheets) so the
cards use the screen; in portrait it stays 480 px inside the 520 px page.

| Screen | Page laid out | Scale |
|---|---|---|
| iPad 768x1024 portrait | 520x693 | 1.48 |
| iPad 1024x768 landscape | 853x640 | 1.2 |
| iPad Air 820x1180 portrait | 520x748 | 1.58 |
| iPad Air 1180x820 landscape | 921x640 | 1.28 |
| Android 800x1280 portrait | 520x832 | 1.54 |

## Installing

Android tablets: Chrome's Install button (`beforeinstallprompt`). iPad: iPadOS Safari says it is a Mac, so `isIos()`
treats a Mac with a touch screen as an iPad; it gets the "Share, then Add to Home Screen" hint and the notification path
of the installed app. The manifest keeps `orientation: portrait` for phones; Android 16 ignores it on large screens, and
iPadOS ignores it, so tablets turn freely.

## Checking

`node test/dev-server.js`, then `http://localhost:8787/test/tablet.html?screen=today|journey|game|mission|parent`:
each frame is the page size the script picks, scaled to the real screen. Desktop Chrome ignores the viewport meta and
the frames are not touch screens, so add `tablet` to each frame's `<html>` by hand to see the landscape CSS.
