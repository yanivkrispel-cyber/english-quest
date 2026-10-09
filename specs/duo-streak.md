# Play together, phase 2: Duo Streak and Team Quest

The daily layer of playing together: something that brings two kids back every day, and steers
their practice to what is hardest for them. Phase 1 (duels): `specs/play-together.md`.

## Duo Streak

- A kid asks another kid (any group, same rules as duels) for a duo streak; the other accepts. At most
  4 active duos per kid, one per pair.
- **Practiced** = a daily task logged that day, or a game or duel round played that day (the same rule as
  the pet's mood).
- The streak counts the days, from the day the duo started, on which **both** practiced. Today does not
  break it until the day is over.
- **Save**: one missed day per week (Sun-Sat) is forgiven automatically. It does not add a day, it only
  keeps the streak alive; the week strip shows it as a shield.
- **Nudge**: once a day per kid per duo, a phone notification to the partner who hasn't practiced yet
  ("Aviv practiced today. Keep your 12-day duo streak going!").
- **Milestones** 7, 30, 100 days: +20, +60, +150 XP for both, a celebration, a notification.
- The 17:00 / 20:00 reminder of a kid who hasn't practiced mentions a partner who already did.
- On the duo card the partner's pet sleeps until she practices today.

## Team Quest

- Every duo gets one quest per week (Sun-Sat), chosen from the two kids' games **last week**:
  - the game type (Match it, Hear it, Build it, Spot it) with the lowest accuracy for both together
    (at least 10 answers): "40 right answers in Hear it, as a team";
  - no game data last week: "Practice on the same day 5 times".
- Progress is the sum of both kids (the bar shows who did what); a duel's answers don't count for a game
  type (rounds of that game only).
- Done: +40 XP for both, once a week per duo, a celebration and a notification.
- The quest is a pure function of last week's rows and this week's rows: nothing about it is stored except
  that its reward was given.

## Data

New tabs:
- **Duos**: `Id, Created, A, B, State, Since, Ended, Nudges, Milestones, QuestDone`. State is `invited`,
  `active`, `declined` or `ended`; `A` asked, `B` was asked. `Since` = the day it was accepted. `Nudges` =
  `name:date` (the last nudge per sender), `Milestones` = reached milestones (`7 30`), `QuestDone` = weeks
  whose quest reward was given (`2026-10-11`).
- **Bonus**: `Timestamp, Girl, Date, Kind, XP, Ref`. One-off XP outside the daily game cap (milestones,
  quests). `Ref` makes each award happen once (`<duo>:<milestone>` or `<duo>:q:<week start>`). Pet growth
  counts it.

## API (name, pin first)

| Function | Purpose |
|---|---|
| `apiDuoInvite(partner)` | Ask for a duo streak (notifies the partner). Accepts her waiting request if she asked first. |
| `apiDuoAnswer(id, accept)` | Accept or decline a request. |
| `apiDuoNudge(id)` | Nudge the partner (once a day). |
| `apiDuoEnd(id)` | Stop a duo streak (either kid). |

`apiDashboard` and `apiDuelHome` return `duos` (incoming requests, active duos with streak, week strip,
quest and progress). Rewards are checked after every practice (`apiSubmit`, `apiGameResult`,
`apiDuelFinish`) for all of the kid's duos.

## Client

- Home: a request banner ("Ziv wants a duo streak with you" · Accept / Not now); for each active duo a
  card with the flame and day count, both pets (the partner's asleep until she practices), a two-row week
  strip with saved days, Nudge, the next milestone, and the Team Quest (two-colour bar, reason, reward,
  days left). Several duos: the most urgent first.
- The friend sheet (Play together) gets a third option, **Duo streak**.
- Celebrations for milestones and finished quests (once per phone), like the pet growing.

## Testing

`test/sim.js`: requests, accept / decline, duplicates and limits, streak counting with saves across weeks,
today not breaking it, milestones and their XP once, quest choice from last week, progress, reward once,
nudge once a day and only to a partner who hasn't practiced, the reminder text, pet XP from Bonus.
`test/dev-server.js` for the screens.
