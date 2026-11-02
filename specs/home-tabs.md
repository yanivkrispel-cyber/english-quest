# The home screen in five tabs

Owner's choice on 2026-10-27, from the mockups (canvas "English with Chacho: new home"): direction A, five tabs, the
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
| Today | `homeTop` (face, greeting, "98 coins" in words, refresh), `petHero` (the pet, its line, XP to grow or "Growing" for A1/A2, and the streak in words: `streakLine`, "3 days in a row"), `todayMain` (one Start under the mission's kids' title; done or no task says so, with one "Catch up a day" when days were missed), `homePills` (Talk with Chacho, and an invite or a warm-up game) |
| Journey | the map (`renderMap`), now a tab: no back button |
| Play | one screen since 2026-10-29 (`specs/play-tab.md`): friends, the stage (invites, duo streak, team quest, review, last games; swiped sideways), the four games |
| Pet | the pet card (wardrobe, change pet, a warm-up game) and the shop card |
| Me | name and level, switch player (`#logout`), the week ring and stats (days in a row, points, average), the progress check, reminders, this week (one "Still open" chip on the latest missed day), rewards, Hebrew help (`heCard`), word of the day |

Dots on the bar: Play when an invite, a challenge, a live game or a duo request waits; Me when the progress check
is due.

## Fewer meters (night review, 2026-11-01, finding 11)

A kid sees two things up front: the pet, which grows, and the coins. The streak lives with the pet, in words. Every
other meter (points, the rewards ladder, the average, the daily XP cap, duo and team streaks, quests, stars, shine,
badges, the world's progress) stays on Me, Play or its own screen. A1 and A2 kids (`lowKid()`) see no point or XP
numbers anywhere: "Growing" instead of "52 XP to grow", "Saved" instead of "+10 XP", "Keep going to" instead of the
points left, a heart instead of "+2 XP"; the data is kept and parents still see the numbers.

A1 and A2 kids (and any kid with Hebrew help on, `dash.girl.he`) see a small Hebrew line: under the mission's title its
topic in Hebrew (`mission.he`), and on the two pills the Hebrew name in place of the small English line (the same
height, so Today still fits).

The first-run tour (`tourShow`, `TOUR`): three steps with pictures (the kid's pet, the clay map, the clay coins), a
speaker for Chacho's voice and Hebrew for A1/A2; Skip on every step; once per kid on the phone (`eq_tour_<name>`).
It opens over Today after a sign-in and never inside the test pages (frames).

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
