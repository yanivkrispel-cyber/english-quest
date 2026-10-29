# The home screen in five tabs

Owner's choice on 2026-10-27, from the mockups (canvas "English with Coco: new home"): direction A, five tabs, the
kid's own phone opens straight to her home, and the pet moves.

## Why

The old home was one long page of about fifteen cards (pet, shop, journey, stats, mission, talk, games, play
together, week, rewards, word of the day, reminders). Today's mission, the one thing a kid must do, sat about sixth.
It read like a long website, not an app.

## The tabs

A glass bar at the bottom (`tabBar`, `#tabbar`): **Today · Journey · Play · Pet · Me**. `dashTab` holds the open tab.
A sign-in opens on Today; a game, the shop, a talk or the map goes back to the tab it came from (they call
`renderDash()`, which draws `dashTab`).

| Tab | What is on it |
| --- | --- |
| Today | `homeTop` (face, greeting, streak, coins, refresh), `petHero` (the pet, its line, XP to grow), `todayMain` (one Start; done or no task says so, with "Catch up" when days were missed), `homePills` (Talk with Coco, and an invite or a warm-up game) |
| Journey | the map (`renderMap`), now a tab: no back button |
| Play | one screen since 2026-10-29 (`specs/play-tab.md`): friends, the stage (invites, duo streak, team quest, review, last games; swiped sideways), the four games |
| Pet | the pet card (wardrobe, change pet, a warm-up game) and the shop card |
| Me | name and level, switch player (`#logout`), the week ring and stats, the progress check, reminders, this week, rewards, word of the day |

Dots on the bar: Play when an invite, a challenge, a live game or a duo request waits; Me when the progress check
is due.

## Today never scrolls

On a portrait phone `.tv-today` is a full-height column: the pet card takes the space that is left (`.phero`
flex), the rest keeps its size. Below 680 px of height the gaps shrink and the five part labels hide. Invites
do not add a banner on Today; they become the second pill (`invitePill`), which opens Play.

Check: `http://localhost:8787/test/home-fit.html` (dev server) logs in each test kid in three sizes (360x640,
390x740, 430x932) and checks Today plain, with an invite and done: "page" must stay 0 and the pills must end
above the bar.

## The pet

`.phbody` breathes (CSS, its own layer) and pops in on the first Today of an app open (`homeEntered`). Every
6.5 s `petLife` hops, makes a face for 1.5 s or says a new line, only while Today is on screen and the page
is visible. A tap is the old celebrate and victory move (`bindPet`). Reduced motion: none of it.

## Polling

`pollHome` now runs on every tab (`.tabview` or `.tabmap` on screen) and redraws only when the answer changed
(`refreshTogether` swaps the banner, the Play card, the Today pills and the bar), so the pet keeps moving.

## Entry

A remembered kid (the PIN pad's "Remember me", on by default) opens straight to Today, with no picker. The
switch-player button moved from every home to Me. The picker on a shared phone is a grid of big pet tiles.
