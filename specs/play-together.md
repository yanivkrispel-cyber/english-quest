# Play together, phase 1

Two kids play and learn together: one invites, the other gets a notification and joins.
Options and research: https://claude.ai/artifact/7hZzT8PCe7uWXrPySqEh7X (the owner chose the recommended plan).

## Scope

In phase 1:
- **Invites**: a "Play together" card lists every kid in the app with an online dot (her group first, then the
  other groups); a 4-letter code or a WhatsApp link invites anyone. The invitee gets a phone notification and an
  in-app banner.
- **Word Duel** (live): 7 questions each, near-live race over the existing Apps Script API.
- **Challenge** (not at the same time): the host plays first; the other kid plays later against her
  "ghost" within 24 hours. A live invite nobody answered can be sent as a challenge.
- **Learn together**: the result screen shows the missed questions with answers; the stronger player
  sees her partner's misses and earns a Helper star for explaining one. Rematch in one tap.

Later phases (not here): Duo Streak, Team Quest, Boss Battle, Tug of War, Pet Arena, Talk & Tap.

## Rules

| Rule | Value |
|---|---|
| Questions | 7 per player. The game sequence comes from the duel's seed (same for both); the items come from each player's own level, so two kids at the same level get the same questions. |
| Score | Right answers. Tie: the faster total time wins. Same time: draw. |
| Time limit | 3 minutes. Questions left unanswered count as missed. |
| XP | 2 per right answer, +5 for the winner, +10 for the first duel of the day ("together bonus"). Everything counts inside the existing daily game cap (60 XP). |
| Review | Missed items join the kid's spaced review, like the mini-games. |
| Invite | A live invite stays open 5 minutes; "Give me 5 minutes" adds 5 more. |
| Challenge | Open 24 hours after the host finished. The host keeps her XP if nobody plays it. |
| Messages | Preset reactions only (Good luck!, Nice one!, So close!, Wow!, GG, Let's go!). No free text. |
| Who | Kids who finished the level test, in any group (the owner asked for play across groups). A group whose `Friends` column says `no` plays only inside the group. |

## States

```
live:       invited ──join──▶ playing ──both finish / time out──▶ done
               │ ├─"Not now"──▶ declined ─┐
               │ └─5 min, no answer─▶ expired ─┤  host: "Send as a challenge"
               └─host cancels──▶ cancelled     ▼
challenge:  solo (host plays) ──host finishes──▶ challenge ──guest finishes──▶ done
                                                    └─24 h──▶ expired
```

A live duel whose time is up ends with whoever finished (the other "left"); nobody finished → expired.

## Data

New sheet tab **Duels**, one row per duel:
`Id, Created, Date, Mode, State, Host, Guest, HostLevel, GuestLevel, Seed, Start, Expires, Reply,
HostScore, HostMs, HostTrack, GuestScore, GuestMs, GuestTrack, Winner, Ended, Helped`

- `Id`: 4-letter code (no I/O), unique across the tab.
- `Track`: one entry per question, `1:4210` = right at 4.21 s after the start (`0:` wrong, `-:` unanswered).
  The ghost in a challenge and the "Learn together" lists are rebuilt from the seed, the levels and the tracks.
- `Helped`: Helper stars given on this duel (`name:itemId` entries).
- Each player's finish also appends a `Games` row (`Game` = `duel`), so XP, the daily cap, pet growth,
  stats and parent summaries keep working unchanged.

CacheService (script cache):
- `DM:<code>`: the duel row (write-through; the sheet stays the source of truth).
- `DP:<code>:<name>`: live progress `{n, s, ms, f, r, rt}` (answered, score, last answer time,
  finished, reaction index, reaction time). Written by each poll, no lock needed (one key per player).
- `ON:<name>`: last time the kid's app talked to the server (online dot = within 90 s).

## API (all take `name, pin` first)

| Function | Purpose |
|---|---|
| `apiDuelHome()` | Players (every kid I may play with: pet, online, ready, group name if not mine), incoming invites, challenges waiting for me, my open challenges, recent results, Helper stars. Polled every 20 s on the home screen. |
| `apiDuelInvite(guest, mode)` | `mode` = `live` or `challenge`; `guest` = any kid I may play with, or `''` for a code invite. If the guest already invited me, joins her invite instead. Notifies the guest. |
| `apiDuelJoin(code)` | Join a live invite (sets the start 6 s ahead) or open a challenge meant for me. |
| `apiDuelReply(code, reply)` | `wait` (+5 minutes) or `no` (decline). |
| `apiDuelCancel(code)` | Host cancels an open invite. |
| `apiDuelSolo(code)` | Host turns an unanswered/declined invite into a challenge and plays first. |
| `apiDuelPoll(code, progress)` | Hot path, about every 2 s while in a duel: stores my progress, returns the duel, my partner's progress and the server time. Ends a timed-out live duel. |
| `apiDuelFinish(code, result)` | `{correct, total, ms, track, missed, right}`. Records XP and review; the second finisher closes the duel and the winner gets the bonus. |
| `apiDuelHelped(code, itemId)` | The stronger player explained one of her partner's misses: one Helper star. |

`apiDashboard` also returns `duels` (same as `apiDuelHome`) so the card renders without a second call.

## Client

- Home: an invite/challenge banner on top when something waits; a "Play together" card after
  "Play & learn" (friends, Code, waiting challenges, recent results, Helper stars).
- Invite sheet → lobby (host waits, can cancel, or send as a challenge) → join screen (guest:
  Join / Give me 5 minutes / Not now) → countdown → play → waiting for partner → result + Learn together.
- Play reuses the four game renderers (`renderItem`); a duel adds the race card, a timer and the
  reactions bar. Runners move with right answers; the ghost replays the host's track.
- Sync: poll, wait 0.6 s, poll again (one request in flight). Clock offset from the server's `now`.
- `?duel=CODE` in the URL (from a notification or a shared link) opens that duel after sign-in.

## Notifications

- Invite → guest: "Aviv invites you to a Word Duel" (opens `?duel=CODE`).
- Challenge ready → guest: "Aviv challenged you! Beat 6/7 in 48 s".
- Challenge played → host: "Ziv played your challenge: 7/7 vs your 6/7".
- Parents: the 21:00 summary counts duels separately ("+1 duel").
- The service worker opens the message's `url` on tap (cache `eq-v4`).

## Server performance

`ensureSetup()` checks a CacheService flag before Script Properties (consumer quota: 50,000 property
reads a day; duels poll often). Presence is one cache write per authenticated call.

## Testing

- `node test/sim.js`: duel scenarios (invite, join, poll, finish, XP and cap, review, winner and
  bonuses, decline, expiry, challenge and ghost data, code invites across groups, the Friends switch,
  rematch auto-join, a partner who leaves, bad input).
- `node test/dev-server.js`: the real server code with mocked Google services on
  `http://localhost:8787` — open `/test/dev.html` on `localhost` and `127.0.0.1` (separate storage) to play
  a real two-player duel locally. `/test/duo.html` shows both phones side by side.
- Live: the owner plays one duel and one challenge with two phones.

## Rollout

1. `clasp push` + `clasp update-deployment` (the server change is additive, so the current Pages app keeps working).
2. Merge the PR to `main` (GitHub Pages rebuilds the app and the service worker).
3. Rollback: point the deployment back to version 21 and revert the merge.
