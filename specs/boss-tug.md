# Play together, phase 3: Boss Battle and Tug of War

Phase 1: `specs/play-together.md` (duels). Phase 2: `specs/duo-streak.md`.

## Boss Battle (co-op, live)

Two kids against "Grumble the Word Thief". It runs on the duel engine (invite, lobby, countdown, polling,
results); only the goal and the screen change.

- Invited like a Word Duel (mode `boss`). If nobody joins, the host can still send a Word Duel challenge.
- Each kid gets up to 12 questions at her own level (the duel's game sequence, repeated), 3 minutes.
- The boss has 240 HP. A right answer hits for 12, +6 when it came within 6 s of her previous answer (or of
  the start). A wrong answer heals the boss 5. **Double hit**: a right answer within 3 s of the partner's
  right answer hits +10 more.
- The team wins when the boss reaches 0 HP; otherwise, when the time is up or both answered all their
  questions, the boss gets away.
- **Help**: once every 30 s a kid can send her partner a 50/50 on her current question (two wrong options
  disappear on a Match it / Hear it question).
- Each phone shows the boss's HP from its own hits plus the partner's reported hits (`dmg` in the poll).
  The server decides the result from both tracks with the same rules.
- XP: 2 per right answer, +10 each for a win, +10 together bonus for the first game together that day; all
  inside the daily cap. Missed questions go to review; Learn together as after a duel.

## Tug of War (one phone)

Two kids at one table on one phone. The game itself runs on the phone; checking the second PIN and saving XP need a connection.

- From Play together: "Tug of War · one phone". The second kid picks her name and types her PIN on the
  same phone (checked by the server), so both get XP; or plays as a guest (no XP, level of the first kid).
- The phone lies flat: the top half is turned to the other kid. Each half shows its own questions at its
  own level (Match it and Spot it: quick taps, no sound).
- A right answer pulls the knot one step toward the one who answered; a wrong answer freezes her for
  1.5 s. Five steps to her side wins; after 2 minutes the knot's side wins (in the middle: a draw).
- At the end the result is saved for both kids (`apiTugSave`): a Games row each (Game = `tug`, 2 XP per
  right answer, +10 together bonus for the first game together that day, inside the cap), missed items
  to review, duo rewards checked. It counts as practice for duo streaks.

## API

| Function | Purpose |
|---|---|
| `apiDuelInvite(guest, 'boss')` | As for a Word Duel. |
| `apiDuelPoll(code, progress)` | `progress` also carries `dmg` (the kid's net boss damage) and `hint` (time of the last 50/50 sent). |
| `apiDuelFinish(code, result)` | For a boss battle, `total` may be 1..12 (answered questions). |
| `apiTugCheck(name, pin)` | Checks the second kid's PIN, returns her name, level and pet. |
| `apiTugSave(name, pin, mate, matePin, mine, hers)` | Saves both results (`{correct, total, missed, right}` each; `mate` = '' for a guest). |

## Testing

`test/sim.js`: boss damage rules (speed, double hits, heals) and win/lose from tracks, the boss result
when one kid leaves, XP and the cap; tug saves for two kids, a guest, a wrong PIN, the cap. The dev server
for the screens (boss: two tabs; tug: one tab).
