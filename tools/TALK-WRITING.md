# Writing Talk to Chacho scripts

Talk to Chacho (spec: `specs/talk.md`) is a short spoken conversation between a kid (8 to 16, Hebrew speaker, learning
English) and Chacho, a cheerful parrot who runs the app's clothes shop and loves words. Chacho speaks first, the kid answers
**aloud** (the phone's speech recognition turns it into text), Chacho reacts and asks the next question. Nothing is
generated at run time: every line Chacho says is written here and recorded in advance, and the kid's answer is matched to
your branches by keywords. If the phone cannot hear, the kid sees your tiles (2 or 3 example answers) and says or taps one.

Two kinds of scripts, one file per level (`docs/talk/<level>.js`, levels a1 a2 b1 bp b2 c1; bp = B1+):

- **Mission talks** (`id: 't' + mission id`, e.g. `ta1g01`): one for every mission in `docs/missions/<level>.js`. It comes
  right after the mission's questions, so it **uses what the mission just taught**: the grammar point of a Grammar Lab,
  the eight words of a Word Pack, the people and facts of a Radio Show episode or a Story Cards text (ask what the kid
  thinks about them, not memory quizzes), the topic of a Newsroom text. Read the mission before writing its talk.
- **Home scenes** (`id: 's' + level + nn`, `sa101` to `sa115`): 15 per level, a different everyday situation each, played
  once a day from the home screen: ordering food, a shop, asking the way, planning a weekend, a pet show, a lost item, a
  birthday, the weather, a holiday, a game, a sports day, a school club, a trip, a TV show, a recipe, an interview, a
  debate (higher levels), and so on. Chacho plays a role (shopkeeper, tour guide, reporter, chef). Vary them.

## The format

```js
window.EQ_TALK = window.EQ_TALK || {};
window.EQ_TALK.a1 = [
  { id: 'ta1g01', title: 'Chacho is happy!',            // title: at most 34 characters
    he: 'מדברים עם צ׳אצ׳ו על איך מרגישים היום, עם am, is, are',   // one Hebrew line for the start card (max 90)
    turns: [
      { c: "Hello! I am so happy today. Are you happy today?",   // Chacho's line, ends with a question
        he: 'ענו כן או לא, למשל: Yes, I am happy. או No, I am tired.',   // Hebrew hint, with an English example (max 120)
        a: [                                                  // branches, tried in order, first fit wins (0 to 4)
          { k: ['tired sleepy sad', 'not no'], r: "Oh no! I hope you are okay soon." },
          { k: ['yes happy good great fine'], n: 'not', r: "Yay! We are both happy!" }
        ],
        o: "Thank you for telling me!",    // Chacho's reply when no branch fits: must suit ANY answer
        t: ["Yes, I am happy.", "No, I am tired."],          // 2 or 3 tiles: answers a kid could say
        x: [["yes i am", 1], ["no I am tired", 0], ["banana", -1]] },   // sample answers -> expected branch (-1 = o)
      ...
    ],
    end: "You are great at English! Bye bye, see you soon!" }   // Chacho's goodbye, not a question
];
```

The finished example with two talks: `C:\Dev\EnglishLessons-work\talk\example-a1.js`. Read it first.

### Matching (what `k` and `n` mean)

- What the kid said is lower-cased, punctuation removed, numbers up to 20 written as words ("5" -> five), short forms
  opened ("I'm" -> i am, "don't" -> do not, "can't" -> can not, "it's" -> it is), "yeah" -> yes.
- `k` is a list of groups. A group is a string of alternative keywords separated by spaces. The branch fits when
  **every group** has at least one keyword in the answer, and **no** keyword of `n` is there.
- A keyword matches the word itself or a simple ending: `apple` matches apples, `play` matches played / playing / player,
  `bake` matches baked / baking, `try` matches tried / tries. Irregular forms must be listed (`go went gone`,
  `run running ran`). Two words together: `ice_cream`, `of_course`.
- Keywords: lower case a-z and digits only, no apostrophes (write `do not`-style keywords as single words: `not`).
- Branches are tried in order: put the narrower one first (a "no, tired" branch before a "yes, happy" branch; a negative
  answer before a positive one that has `n: 'not'`).
- An open question (anything goes: "What is your favourite animal?") has `a: []`. Every answer gets `o`, as long as the
  kid said enough words (A1 1, A2 2, B1 3, B1+ 3, B2 4, C1 5; fewer and Chacho asks for a little more, once).
- Speech recognition makes mistakes and kids make grammar mistakes. Match on **meaning words**, not on grammar, and be
  generous: list synonyms and the words a Hebrew speaker would use ("I am agree", "close the light").

### The sample answers (`x`): this is the test

`node test/talk-check.js` runs the app's own matcher on every sample and fails when one lands on a different branch.
For a turn with branches give at least 4 samples: one for each branch and at least one that fits none (-1). For an open
turn give at least 2 (all -1). Write them like real kids talking to a phone: lower case, no punctuation, short, with
typical mistakes ("me hungry", "she have a dog", "yes i am agree", "i go there yesterday"), a digit where they would say a
number. Then make the branches catch them.

### Tiles (`t`)

2 or 3 answers a kid at this level could say, different from each other (each to a different branch when there are
branches; the check warns when all go to one). Natural, correct English, at the level's length. Each tile must fit a
branch (or, for an open turn, be long enough).

## Lengths per level (the check enforces them)

| Level | Turns | Chacho's question (words) | Replies, `o`, `end` | Tile |
|---|---|---|---|---|
| A1 | 3 to 5 (4 is best) | 16 | 12 (end 18) | 8 |
| A2 | 4 to 5 | 20 | 14 | 10 |
| B1 | 4 to 6 | 26 | 18 | 14 |
| B1+ | 5 to 6 | 28 | 20 | 16 |
| B2 | 5 to 7 | 32 | 22 | 18 |
| C1 | 5 to 7 | 36 | 24 | 22 |

Language: A1 and A2 use the words and grammar of that level (present simple, be, have got, can; A2 adds past simple,
going to, comparatives). B1 and up: natural spoken English with the level's grammar (B1 present perfect, first and second
conditional; B2 and C1 opinions with reasons, hypotheticals, hedging). Chacho's question at the higher levels asks for a
reason or an example ("Why?", "What would you do if...?"), so the kid says a full sentence. At A1 a word or two is fine.

## How Chacho talks

- Warm, a little silly, loves fashion and words, says "Ooh!" and "Fabulous!" now and then (not every line). She is a
  parrot: she can joke about feathers, flying and crackers. She is "she".
- She **never says the kid is wrong**. When a branch is about a common mistake, her reply repeats the right form
  naturally (the kid said "she have a dog" -> "She has a dog? Lucky her!"). That is the teaching.
- Each reply (`r`, `o`) reacts in one or two short sentences and does **not** ask a question (the next turn's `c` asks).
  The next `c` must make sense after **any** branch's reply and after `o`.
- `o` must make sense whatever the kid said, including nonsense or something off-topic ("Interesting! Thank you for
  telling me." is fine; "Wow, a dog!" is not).
- Plain text only: no emoji, no names of the kid (Chacho does not know who is playing; the line is recorded once for
  everyone), no "[name]" placeholders, no stage directions. Write numbers as words when they are said ("three coins").
- Spell British or American, but be consistent within a level (the missions use British: favourite, colour).

## Safety (the check enforces part of it; the reviewer checks the rest)

- Never ask for anything that identifies a child: full or last name, age, address, where they live, school name, phone,
  email, passwords, photos, social media, meeting anyone, secrets.
- Questions are about likes, opinions, imagination, the mission's topic, everyday life in general ("What do you usually
  eat for breakfast?" is fine; "Who is at home now?" is not).
- No religion, politics, war, violence, dating, bodies and weight, diets, alcohol, scary or sad personal topics (illness,
  death, divorce, money worries). Families: do not assume a mother and a father, siblings, a house or money.
- The kids are Jewish and Arab Israelis: no holiday or food assumptions (ask "What is your favourite holiday?", don't
  assume one). Israel-friendly everyday settings are welcome (the beach, falafel, a class trip to the north).
- Nothing that makes a kid feel bad: no "Are you good at...?" that invites "no, I'm bad", no tests of memory.

## Checking your file

Write to the staging file you were given, then run, from `C:\Dev\EnglishLessons\app`:

```
TALK_ONLY=<level> TALK_PARTIAL=1 TALK_FILE=<your staging file> node test/talk-check.js
```

(`TALK_PARTIAL=1` turns "missions without a talk" and "fewer than 15 scenes" into warnings while you are writing; the
final run without it must pass.) Fix every error. Read every `warn:` line about words and decide.
