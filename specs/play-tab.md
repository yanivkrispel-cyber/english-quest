# The Play tab in one screen

Owner's choice on 2026-10-29 (option A from the proposal https://claude.ai/artifact/MRL8SGsJquW6mhLEVW9gYi). The
old Play tab was about 2.4 phone screens tall (1990 px on a 390x844 phone) with four big cards and two primary
buttons. It is now one screen that never scrolls, like Today.

## Three floors

| Floor | What | Code |
| --- | --- | --- |
| Header | "Play" and how many friends are online | `playHead` (`#phead`) |
| Who is here | Up to four faces; with more friends, three faces and "+N All" (a sheet with every friend, by group, with a search from nine friends up). Then Code. A face opens the invite sheet. Order: online, then kids I played with lately, then my group, then the other groups. | `togetherCard` (`#together`), `playFriends`, `friendsSheet` |
| The stage | One card at a time, swiped sideways (scroll snap); the next card peeks in and dots show how many. | `playStage` (`#pstage`, `#pdots`), `playCards`, `placeStage` |
| Play alone | The four games in one row, today's XP, a dot on the warm-up game | `gamesPanel` |

## The stage

The cards, most urgent first (at most five; the last games card always stays):

1. A live game that is still running (Back to the game)
2. An invite (Not now / Join)
3. A challenge waiting for me
4. A duo streak request (Not now / Yes!)
5. The duo streak (`duoCard`): the flame, both pets, this week in two thin rows (me on top), one action. Other duo
   streaks are chips in its header (`data-duofocus`).
6. The team quest of that duo (`questCard`): a ring, the score of each kid, the reward, the quest's game
7. Review, when there is something to review (Mission review, My words)
8. Last games: an invite I sent, the last results with Rematch, Tug of War, Helper stars

Only the first card gets `.btn-primary`: cards write `btn-main`, and `playStage` turns it into `btn-primary` on the
first card and `btn-glass` on the others (design.md: one primary button per screen).

The card on screen is kept in `playCard` across the 20-second redraws (`refreshTogether`); a new urgent card (an
invite, a challenge, a live game, a duo request) moves the stage to the front. One click handler on `#together`,
`#pstage` and `#pdots` (`bindTogether`) handles duels, duo streaks (`duoTap`), review and the dots.

## Sizes

- Portrait (and any screen taller than 500 px): a fixed full-height column like Today; the stage takes the height
  that is left.
- Below 700 px of height: smaller faces without the second line, smaller pets and flame, and the week rows and the
  badge line hide.
- Tablets in landscape show two stage cards side by side (`html.tablet`, by orientation, not width).

## Checks

- `http://localhost:8787/test/home-fit.html`: Play plain, with an invite and with many friends, for each test kid in
  three phone sizes; "page" must stay 0 and the games must end above the tab bar.
- `http://localhost:8787/test/tablet.html?screen=play` (and `&phones`).

No server change: the data is still `apiDuelHome` (`dash.duels`).
