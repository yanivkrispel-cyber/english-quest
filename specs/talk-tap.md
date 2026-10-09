# Play together, phase 4: Talk & Tap

Phases 1-3: `specs/play-together.md` (duels), `specs/duo-streak.md`, `specs/boss-tug.md`.

The one game here that practises **speaking**: one kid has the word, the other has the answers, so they
must talk in English. Inspired by Quizlet Live (split information makes the team talk; a mistake resets
the team) and by Taboo.

## How it plays

- Invited like a Word Duel (mode `talk`), live on two phones. The kids talk in the same room or on a
  phone call; the app never records or sends a voice.
- 8 words, at most 6 minutes. The roles swap every word: the host describes words 1, 3, 5, 7, the guest
  describes words 2, 4, 6, 8.
- **The describer** sees the word (with its picture for A1 picture words) and two words not to say, and
  explains it in English without saying the word. "Need help?" shows sentence starters for the word's
  topic ("It's an animal that…") and the word's meaning.
- **The listener** sees four words from the same topic (so a vague clue is not enough) and taps one.
- A right pick adds one to the **team streak**; a wrong pick shows the right word and sets the streak
  back to 0. Then the next word starts with the roles swapped.
- Words come from the lower level of the two kids, so both can follow (a B1+ kid counts as B1).
- The end screen ("Learn together") lists the 8 words: who described, who picked, the meaning, and a
  speaker button for the pronunciation. A missed word goes to the listener's review and comes back in
  Match it (the talk words are Match it words; at A1 also the picture words).

## Content

`docs/games.js` gets `talk`: by level and topic, `[word, don't say, don't say]`. Only words that are
already Match it (or A1 picture) words, so review ids stay the same (`m:<level>:<word>`, `p:<word>`).
Linking words (whereas, albeit…) are left out. The 8 words of a game take turns between the topics
(animals, food, feelings…), so one game is not four things from home. `starters` gives three sentence
starters per topic. `BANK_V` goes up so every phone loads the new file.

## Sync

The same seed on both phones gives the same 8 words, the same don't-say words and the same four options
in the same order. Only the picks travel: each phone sends its own picks (`p` in the poll progress,
`1:4210:2` = right, ms since the start, option tapped) and reads the partner's. A word is done when its
listener picked; the current word is the first one without a pick. Exactly one kid acts on each word, so
the two phones cannot disagree. The describer's phone learns the pick with the next poll (about 2 s
later); they are talking anyway, so the lag is hidden.

A phone that reloads gets its picks back: the app keeps them in local storage, and the server never lets a
shorter pick list replace a longer one that it extends.

## Result and XP

- Team score = right picks of both. 6 of 8 or more is a team win.
- XP for each kid, given when she finishes: 2 per word the team got right (picking and describing both
  count), +10 together bonus for the first game together that day (only with a pick of her own, so
  stopping at once and starting again earns nothing extra), +10 for a team win. All inside the daily
  60 XP cap. A Games row with Game = `talk` (Correct/Total = her own picks).
- Either kid can stop (two taps): her picks so far are saved, and the other phone ends the game too. The
  second kid to finish closes the game; if one kid just leaves, the time limit closes it with what was
  played (as in a boss battle). Home shows "Back to the game" while a live game she has not finished runs.
- It counts as practice for duo streaks.

## API

No new functions:

| Function | Change |
|---|---|
| `apiDuelInvite(guest, 'talk')` | New mode. |
| `apiDuelPoll(code, progress)` | `progress.p` = the kid's picks (validated, never shortened); the answer has `mine` (her own stored progress) for a talk game. |
| `apiDuelFinish(code, result)` | For talk: `total` 0-4 (her own picks), track entries `1:4210:2`. |

## Testing

`test/sim.js`: invite and join, pick validation and the never-shorter rule, finish with XP from both
kids' picks (team win and not), the time limit with one kid gone, a duo streak day. The dev server for
the screens: two tabs, one describes while the other picks.
