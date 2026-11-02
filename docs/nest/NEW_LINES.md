# New Nest lines to record

Written by `node tools/nest-new-lines.js` from `EQ_NEST.wait` in `docs/nest/nest.js`. Do not edit by hand: change the
content, then run the tool again (`node test/nest-check.js` fails when this file is out of date).

Nothing here is recorded yet, so kids never meet it: a waiting game is left out of the lessons and the playground (the
teacher's preview and the test pages play it with the phone's voice).

After recording:

1. English lines: Chacho's English voice (`specs/voice.md`: `python tools/voice.py` records only new lines; the files go to
   `docs/nest/audio/`). Hebrew lines: the Hebrew guidance voice (Chatterbox Multilingual from niqqud text, as for package
   B; the files go to `docs/nest/he/<key>.mp3`).
2. Take the recorded keys (and a game whose lines are all recorded) out of `EQ_NEST.wait`, run this tool again and
   `node test/nest-check.js`.
3. Raise `NEST_V` in `src/Index.html`, then `node build-pages.js`.

## Games waiting

- `starts`
- `trace`

## Chacho's English lines

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/en-starts.mp3` | Which one starts the same? | Starts like (ages 6 and 7): every round, right after Chacho says the word ("sun ... Which one starts the same?"), and again after a wrong card |
| `docs/nest/audio/en-same.mp3` | They start the same! | Starts like: after the right card, following both words ("sun, socks ... They start the same!") |
| `docs/nest/audio/en-trace.mp3` | Trace the letter! | Trace it (ages 6 and 7): every letter, before the kid traces it; again when the kid waits (the help ladder) |

## Chacho's Hebrew guidance

| File | Text (Hebrew, how to play: never a translation) | Where it plays |
|---|---|---|
| `docs/nest/he/starts.mp3` | מקשיבים למילה. איזו תמונה מתחילה באותו צליל? | Starts like: before the English, the first two plays when the parent sets Hebrew to always (from age 6 auto is off) |
| `docs/nest/he/trace.mp3` | מעבירים את האצבע על האות, מהנקודה. | Trace it: the same, before "Trace the letter!" |

## Weeks 21 to 40: units waiting for pictures and voice

These units (`EQ_NEST.next`) are written and checked, and no kid sees them yet. Per unit: the clay stickers to make
(`tools/NEST-ART.md`, `python tools/nest_pics.py`; one Gemini chat per sheet) and the lines to record (English, Chacho's
voice). When a unit has everything, `node test/nest-check.js` says it is ready: move it and its review from `next` to the
end of `units`, run `node tools/nest-index.js` and this tool, and raise `NEST_V`. Optional after the move: its words in
`give` (things to give), `sounds` (Who says that?) and `dress` (Get dressed).

### n25: More wild animals (עוד חיות בטבע)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/bear.webp` | bear (דוב) | one clay sticker of the bear |
| `docs/nest/pics/tiger.webp` | tiger (טיגריס) | one clay sticker of the tiger |
| `docs/nest/pics/hippo.webp` | hippo (היפופוטם) | one clay sticker of the hippo |
| `docs/nest/pics/frog.webp` | frog (צפרדע) | one clay sticker of the frog |
| `docs/nest/pics/kangaroo.webp` | kangaroo (קנגורו) | one clay sticker of the kangaroo |
| `docs/nest/pics/owl.webp` | owl (ינשוף) | one clay sticker of the owl |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-bear.mp3` | A bear! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-bear.mp3` | Where is the bear? | Find it: the question |
| `docs/nest/audio/w-tiger.mp3` | A tiger! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-tiger.mp3` | Where is the tiger? | Find it: the question |
| `docs/nest/audio/w-hippo.mp3` | A hippo! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-hippo.mp3` | Where is the hippo? | Find it: the question |
| `docs/nest/audio/w-frog.mp3` | A frog! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-frog.mp3` | Where is the frog? | Find it: the question |
| `docs/nest/audio/w-kangaroo.mp3` | A kangaroo! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-kangaroo.mp3` | Where is the kangaroo? | Find it: the question |
| `docs/nest/audio/w-owl.mp3` | An owl! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-owl.mp3` | Where is the owl? | Find it: the question |
| `docs/nest/audio/p-n25.mp3` | The bear is big! | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n25-0.mp3` | Bear, bear, big brown bear! | the chant, line 1 |
| `docs/nest/audio/c-n25-1.mp3` | Tiger, tiger, stripes, stripes, stripes! | the chant, line 2 |
| `docs/nest/audio/c-n25-2.mp3` | Hippo, hippo, splash, splash, splash! | the chant, line 3 |
| `docs/nest/audio/c-n25-3.mp3` | Frog, frog, hop, hop, hop! | the chant, line 4 |
| `docs/nest/audio/t-n25-0.mp3` | Chacho goes for a walk. | the story, page 1 |
| `docs/nest/audio/t-n25-1.mp3` | A big brown bear. | the story, page 2 |
| `docs/nest/audio/t-n25-2.mp3` | A tiger in the grass. | the story, page 3 |
| `docs/nest/audio/t-n25-3.mp3` | A hippo in the water. Splash! | the story, page 4 |
| `docs/nest/audio/t-n25-4.mp3` | A little frog. Hop, hop! | the story, page 5 |

### n26: More things that go (עוד כלי תחבורה)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/truck.webp` | truck (משאית) | one clay sticker of the truck |
| `docs/nest/pics/helicopter.webp` | helicopter (מסוק) | one clay sticker of the helicopter |
| `docs/nest/pics/tractor.webp` | tractor (טרקטור) | one clay sticker of the tractor |
| `docs/nest/pics/taxi.webp` | taxi (מונית) | one clay sticker of the taxi |
| `docs/nest/pics/scooter.webp` | scooter (קורקינט) | one clay sticker of the scooter |
| `docs/nest/pics/ambulance.webp` | ambulance (אמבולנס) | a friendly white ambulance, no person hurt, no blood |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-truck.mp3` | A truck! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-truck.mp3` | Where is the truck? | Find it: the question |
| `docs/nest/audio/w-helicopter.mp3` | A helicopter! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-helicopter.mp3` | Where is the helicopter? | Find it: the question |
| `docs/nest/audio/w-tractor.mp3` | A tractor! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-tractor.mp3` | Where is the tractor? | Find it: the question |
| `docs/nest/audio/w-taxi.mp3` | A taxi! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-taxi.mp3` | Where is the taxi? | Find it: the question |
| `docs/nest/audio/w-scooter.mp3` | A scooter! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-scooter.mp3` | Where is the scooter? | Find it: the question |
| `docs/nest/audio/w-ambulance.mp3` | An ambulance! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-ambulance.mp3` | Where is the ambulance? | Find it: the question |
| `docs/nest/audio/p-n26.mp3` | Beep beep! Let's go! | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n26-0.mp3` | Truck, truck, beep, beep, beep! | the chant, line 1 |
| `docs/nest/audio/c-n26-1.mp3` | Helicopter, up, up, up! | the chant, line 2 |
| `docs/nest/audio/c-n26-2.mp3` | Tractor on the farm, chug, chug! | the chant, line 3 |
| `docs/nest/audio/c-n26-3.mp3` | Taxi, taxi, let's go! | the chant, line 4 |
| `docs/nest/audio/t-n26-0.mp3` | Chacho is in the town. | the story, page 1 |
| `docs/nest/audio/t-n26-1.mp3` | A yellow taxi. Beep beep! | the story, page 2 |
| `docs/nest/audio/t-n26-2.mp3` | A big truck. | the story, page 3 |
| `docs/nest/audio/t-n26-3.mp3` | A helicopter in the sky. | the story, page 4 |
| `docs/nest/audio/t-n26-4.mp3` | A tractor goes chug, chug. | the story, page 5 |

### r13: review of n25 and n26

Nothing new to draw or record.

### n27: At the park (בגן השעשועים)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/swing.webp` | swing (נדנדה) | one clay sticker of the swing |
| `docs/nest/pics/slide.webp` | slide (מגלשה) | one clay sticker of the slide |
| `docs/nest/pics/bird.webp` | bird (ציפור) | a small songbird, not a parrot (Chacho is the parrot) |
| `docs/nest/pics/grass.webp` | grass (דשא) | a tuft of green grass |
| `docs/nest/pics/bench.webp` | bench (ספסל) | one clay sticker of the bench |
| `docs/nest/pics/sandbox.webp` | sandbox (ארגז חול) | one clay sticker of the sandbox |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-swing.mp3` | A swing! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-swing.mp3` | Where is the swing? | Find it: the question |
| `docs/nest/audio/w-slide.mp3` | A slide! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-slide.mp3` | Where is the slide? | Find it: the question |
| `docs/nest/audio/w-bird.mp3` | A bird! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-bird.mp3` | Where is the bird? | Find it: the question |
| `docs/nest/audio/w-grass.mp3` | Grass! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-grass.mp3` | Where is the grass? | Find it: the question |
| `docs/nest/audio/w-bench.mp3` | A bench! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-bench.mp3` | Where is the bench? | Find it: the question |
| `docs/nest/audio/w-sandbox.mp3` | A sandbox! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-sandbox.mp3` | Where is the sandbox? | Find it: the question |
| `docs/nest/audio/p-n27.mp3` | My turn! Your turn! | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n27-0.mp3` | Up the slide, down the slide, whee! | the chant, line 1 |
| `docs/nest/audio/c-n27-1.mp3` | Swing, swing, up so high! | the chant, line 2 |
| `docs/nest/audio/c-n27-2.mp3` | Little bird, tweet, tweet, tweet! | the chant, line 3 |
| `docs/nest/audio/c-n27-3.mp3` | Green, green grass under my feet! | the chant, line 4 |
| `docs/nest/audio/t-n27-0.mp3` | Chacho goes to the park. | the story, page 1 |
| `docs/nest/audio/t-n27-1.mp3` | A big slide. Whee! | the story, page 2 |
| `docs/nest/audio/t-n27-2.mp3` | A swing. Up and down! | the story, page 3 |
| `docs/nest/audio/t-n27-3.mp3` | A bird on the bench. | the story, page 4 |
| `docs/nest/audio/t-n27-4.mp3` | Chacho plays in the sandbox. | the story, page 5 |

### n28: More people who help (עוד אנשים שעוזרים)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/cook.webp` | cook (טבח) | a cook in a white hat with a pot, kind face |
| `docs/nest/pics/police-officer.webp` | police officer (שוטר) | a smiling police officer waving, no weapon |
| `docs/nest/pics/driver.webp` | driver (נהג) | a bus driver at the wheel |
| `docs/nest/pics/vet.webp` | vet (וטרינר) | a vet holding a puppy, no needle |
| `docs/nest/pics/nurse.webp` | nurse (אחות) | a smiling nurse with a heart on the coat, no needle |
| `docs/nest/pics/builder.webp` | builder (בנאי) | a builder in a yellow helmet with a brick |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-cook.mp3` | A cook! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-cook.mp3` | Where is the cook? | Find it: the question |
| `docs/nest/audio/w-police-officer.mp3` | A police officer! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-police-officer.mp3` | Where is the police officer? | Find it: the question |
| `docs/nest/audio/w-driver.mp3` | A driver! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-driver.mp3` | Where is the driver? | Find it: the question |
| `docs/nest/audio/w-vet.mp3` | A vet! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-vet.mp3` | Where is the vet? | Find it: the question |
| `docs/nest/audio/w-nurse.mp3` | A nurse! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-nurse.mp3` | Where is the nurse? | Find it: the question |
| `docs/nest/audio/w-builder.mp3` | A builder! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-builder.mp3` | Where is the builder? | Find it: the question |
| `docs/nest/audio/p-n28.mp3` | Thank you for your help! | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n28-0.mp3` | Who can help? The nurse can help! | the chant, line 1 |
| `docs/nest/audio/c-n28-1.mp3` | The cook makes soup, yum, yum! | the chant, line 2 |
| `docs/nest/audio/c-n28-2.mp3` | The driver drives, beep, beep! | the chant, line 3 |
| `docs/nest/audio/c-n28-3.mp3` | The builder builds, bang, bang! | the chant, line 4 |
| `docs/nest/audio/t-n28-0.mp3` | Chacho meets new friends. | the story, page 1 |
| `docs/nest/audio/t-n28-1.mp3` | The cook makes soup. | the story, page 2 |
| `docs/nest/audio/t-n28-2.mp3` | The vet helps a dog. | the story, page 3 |
| `docs/nest/audio/t-n28-3.mp3` | The nurse says hello. | the story, page 4 |
| `docs/nest/audio/t-n28-4.mp3` | The builder builds a house. | the story, page 5 |

### r14: review of n27 and n28

Nothing new to draw or record.

### n29: At the beach (בים)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/fish.webp` | fish (דג) | one clay sticker of the fish |
| `docs/nest/pics/crab.webp` | crab (סרטן) | one clay sticker of the crab |
| `docs/nest/pics/bucket.webp` | bucket (דלי) | one clay sticker of the bucket |
| `docs/nest/pics/towel.webp` | towel (מגבת) | one clay sticker of the towel |
| `docs/nest/pics/sandcastle.webp` | sandcastle (ארמון חול) | one clay sticker of the sandcastle |
| `docs/nest/pics/sun-hat.webp` | sun hat (כובע שמש) | one clay sticker of the sun hat |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-fish.mp3` | A fish! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-fish.mp3` | Where is the fish? | Find it: the question |
| `docs/nest/audio/w-crab.mp3` | A crab! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-crab.mp3` | Where is the crab? | Find it: the question |
| `docs/nest/audio/w-bucket.mp3` | A bucket! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-bucket.mp3` | Where is the bucket? | Find it: the question |
| `docs/nest/audio/w-towel.mp3` | A towel! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-towel.mp3` | Where is the towel? | Find it: the question |
| `docs/nest/audio/w-sandcastle.mp3` | A sandcastle! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-sandcastle.mp3` | Where is the sandcastle? | Find it: the question |
| `docs/nest/audio/w-sun-hat.mp3` | A sun hat! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-sun-hat.mp3` | Where is the sun hat? | Find it: the question |
| `docs/nest/audio/p-n29.mp3` | Look, a fish! | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n29-0.mp3` | Splash, splash, a fish in the sea! | the chant, line 1 |
| `docs/nest/audio/c-n29-1.mp3` | Crab, crab, walking side to side! | the chant, line 2 |
| `docs/nest/audio/c-n29-2.mp3` | Bucket and sand, dig, dig, dig! | the chant, line 3 |
| `docs/nest/audio/c-n29-3.mp3` | Sun hat on, it's hot today! | the chant, line 4 |
| `docs/nest/audio/t-n29-0.mp3` | Chacho goes to the beach. | the story, page 1 |
| `docs/nest/audio/t-n29-1.mp3` | A little crab. | the story, page 2 |
| `docs/nest/audio/t-n29-2.mp3` | A fish in the sea. | the story, page 3 |
| `docs/nest/audio/t-n29-3.mp3` | A bucket and a sandcastle. | the story, page 4 |
| `docs/nest/audio/t-n29-4.mp3` | Chacho has a sun hat. | the story, page 5 |

### n30: Big and small (גדול וקטן)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/big.webp` | big (גדול) | one large ball filling the sticker (the same ball as small) |
| `docs/nest/pics/small.webp` | small (קטן) | the same ball, tiny in the middle of the sticker |
| `docs/nest/pics/up.webp` | up (למעלה) | a balloon high up, an arrow pointing up |
| `docs/nest/pics/down.webp` | down (למטה) | a ball low on the ground, an arrow pointing down |
| `docs/nest/pics/fast.webp` | fast (מהר) | a running rabbit with speed lines |
| `docs/nest/pics/slow.webp` | slow (לאט) | a snail-like slow turtle walking (not the pets turtle sticker) |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-big.mp3` | Big! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-big.mp3` | Which one is big? | Find it: the question |
| `docs/nest/audio/w-small.mp3` | Small! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-small.mp3` | Which one is small? | Find it: the question |
| `docs/nest/audio/w-up.mp3` | Up! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-up.mp3` | Which one is up? | Find it: the question |
| `docs/nest/audio/w-down.mp3` | Down! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-down.mp3` | Which one is down? | Find it: the question |
| `docs/nest/audio/w-fast.mp3` | Fast! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-fast.mp3` | Which one is fast? | Find it: the question |
| `docs/nest/audio/w-slow.mp3` | Slow! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-slow.mp3` | Which one is slow? | Find it: the question |
| `docs/nest/audio/p-n30.mp3` | Go fast! Go slow! | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n30-0.mp3` | Big, big, big, like a bear! | the chant, line 1 |
| `docs/nest/audio/c-n30-1.mp3` | Small, small, small, like a mouse! | the chant, line 2 |
| `docs/nest/audio/c-n30-2.mp3` | Up, up, up, to the sky! | the chant, line 3 |
| `docs/nest/audio/c-n30-3.mp3` | Down, down, down, on the ground! | the chant, line 4 |
| `docs/nest/audio/t-n30-0.mp3` | Chacho plays with balls. | the story, page 1 |
| `docs/nest/audio/t-n30-1.mp3` | A big ball. | the story, page 2 |
| `docs/nest/audio/t-n30-2.mp3` | A small ball. | the story, page 3 |
| `docs/nest/audio/t-n30-3.mp3` | The ball goes up! | the story, page 4 |
| `docs/nest/audio/t-n30-4.mp3` | The ball comes down. | the story, page 5 |
| `docs/nest/audio/t-n30-5.mp3` | Fast, fast! Now slow. | the story, page 6 |

### r15: review of n29 and n30

Nothing new to draw or record.

### n31: At the table (ליד השולחן)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/plate.webp` | plate (צלחת) | one clay sticker of the plate |
| `docs/nest/pics/fork.webp` | fork (מזלג) | one clay sticker of the fork |
| `docs/nest/pics/bowl.webp` | bowl (קערה) | one clay sticker of the bowl |
| `docs/nest/pics/table.webp` | table (שולחן) | one clay sticker of the table |
| `docs/nest/pics/napkin.webp` | napkin (מפית) | one clay sticker of the napkin |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-plate.mp3` | A plate! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-plate.mp3` | Where is the plate? | Find it: the question |
| `docs/nest/audio/w-fork.mp3` | A fork! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-fork.mp3` | Where is the fork? | Find it: the question |
| `docs/nest/audio/w-bowl.mp3` | A bowl! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-bowl.mp3` | Where is the bowl? | Find it: the question |
| `docs/nest/audio/w-table.mp3` | A table! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-table.mp3` | Where is the table? | Find it: the question |
| `docs/nest/audio/w-napkin.mp3` | A napkin! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-napkin.mp3` | Where is the napkin? | Find it: the question |
| `docs/nest/audio/p-n31.mp3` | More, please! | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n31-0.mp3` | Plate, plate, on the table! | the chant, line 1 |
| `docs/nest/audio/c-n31-1.mp3` | Fork, fork, eat it up! | the chant, line 2 |
| `docs/nest/audio/c-n31-2.mp3` | Bowl, bowl, soup in the bowl! | the chant, line 3 |
| `docs/nest/audio/c-n31-3.mp3` | Napkin, napkin, wipe, wipe, wipe! | the chant, line 4 |
| `docs/nest/audio/t-n31-0.mp3` | Chacho is hungry. | the story, page 1 |
| `docs/nest/audio/t-n31-1.mp3` | A table and a chair. | the story, page 2 |
| `docs/nest/audio/t-n31-2.mp3` | A plate and a fork. | the story, page 3 |
| `docs/nest/audio/t-n31-3.mp3` | Soup in a bowl. Yummy! | the story, page 4 |
| `docs/nest/audio/t-n31-4.mp3` | All done! Thank you! | the story, page 5 |

### n32: Little creatures (יצורים קטנים)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/bee.webp` | bee (דבורה) | a round friendly bee, no sting |
| `docs/nest/pics/butterfly.webp` | butterfly (פרפר) | one clay sticker of the butterfly |
| `docs/nest/pics/ant.webp` | ant (נמלה) | one clay sticker of the ant |
| `docs/nest/pics/snail.webp` | snail (חילזון) | one clay sticker of the snail |
| `docs/nest/pics/ladybug.webp` | ladybug (פרת משה רבנו) | one clay sticker of the ladybug |
| `docs/nest/pics/worm.webp` | worm (תולעת) | a cute pink worm with a smile |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-bee.mp3` | A bee! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-bee.mp3` | Where is the bee? | Find it: the question |
| `docs/nest/audio/w-butterfly.mp3` | A butterfly! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-butterfly.mp3` | Where is the butterfly? | Find it: the question |
| `docs/nest/audio/w-ant.mp3` | An ant! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-ant.mp3` | Where is the ant? | Find it: the question |
| `docs/nest/audio/w-snail.mp3` | A snail! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-snail.mp3` | Where is the snail? | Find it: the question |
| `docs/nest/audio/w-ladybug.mp3` | A ladybug! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-ladybug.mp3` | Where is the ladybug? | Find it: the question |
| `docs/nest/audio/w-worm.mp3` | A worm! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-worm.mp3` | Where is the worm? | Find it: the question |
| `docs/nest/audio/p-n32.mp3` | Look! A butterfly! | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n32-0.mp3` | Bee, bee, buzz, buzz, buzz! | the chant, line 1 |
| `docs/nest/audio/c-n32-1.mp3` | Butterfly, butterfly, flap, flap, flap! | the chant, line 2 |
| `docs/nest/audio/c-n32-2.mp3` | Little ant, march, march, march! | the chant, line 3 |
| `docs/nest/audio/c-n32-3.mp3` | Snail, snail, slow, slow, slow! | the chant, line 4 |
| `docs/nest/audio/t-n32-0.mp3` | Chacho is in the garden. | the story, page 1 |
| `docs/nest/audio/t-n32-1.mp3` | A bee on a flower. Buzz! | the story, page 2 |
| `docs/nest/audio/t-n32-2.mp3` | A red ladybug. | the story, page 3 |
| `docs/nest/audio/t-n32-3.mp3` | A little snail. So slow! | the story, page 4 |
| `docs/nest/audio/t-n32-4.mp3` | A butterfly flies away. | the story, page 5 |

### r16: review of n31 and n32

Nothing new to draw or record.

### n33: I can! (אני יכול!)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/drawing.webp` | drawing (מצייר) | a child drawing with a crayon |
| `docs/nest/pics/reading.webp` | reading (קורא) | a child reading a picture book |
| `docs/nest/pics/jumping.webp` | jumping (קופץ) | a child jumping with both feet |
| `docs/nest/pics/guitar.webp` | guitar (גיטרה) | one clay sticker of the guitar |
| `docs/nest/pics/piano.webp` | piano (פסנתר) | one clay sticker of the piano |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-drawing.mp3` | Drawing! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-drawing.mp3` | Who is drawing? | Find it: the question |
| `docs/nest/audio/w-reading.mp3` | Reading! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-reading.mp3` | Who is reading? | Find it: the question |
| `docs/nest/audio/w-jumping.mp3` | Jumping! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-jumping.mp3` | Who is jumping? | Find it: the question |
| `docs/nest/audio/w-guitar.mp3` | A guitar! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-guitar.mp3` | Where is the guitar? | Find it: the question |
| `docs/nest/audio/w-piano.mp3` | A piano! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-piano.mp3` | Where is the piano? | Find it: the question |
| `docs/nest/audio/p-n33.mp3` | I can jump! | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n33-0.mp3` | I can jump, jump, jump! | the chant, line 1 |
| `docs/nest/audio/c-n33-1.mp3` | I can draw, draw, draw! | the chant, line 2 |
| `docs/nest/audio/c-n33-2.mp3` | I can read a book! | the chant, line 3 |
| `docs/nest/audio/c-n33-3.mp3` | Play the guitar, strum, strum, strum! | the chant, line 4 |
| `docs/nest/audio/t-n33-0.mp3` | Chacho can do many things. | the story, page 1 |
| `docs/nest/audio/t-n33-1.mp3` | Chacho is drawing. | the story, page 2 |
| `docs/nest/audio/t-n33-2.mp3` | Now he is reading. | the story, page 3 |
| `docs/nest/audio/t-n33-3.mp3` | He plays the piano. | the story, page 4 |
| `docs/nest/audio/t-n33-4.mp3` | Jump, jump! I can jump! | the story, page 5 |

### n34: Where is it? (איפה זה?)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/in.webp` | in (בתוך) | the Nest teddy bear sitting inside an open cardboard box |
| `docs/nest/pics/on.webp` | on (על) | the same teddy sitting on top of the closed box |
| `docs/nest/pics/under.webp` | under (מתחת) | the same teddy peeking out from under a box on a low table |
| `docs/nest/pics/next-to.webp` | next to (ליד) | the same teddy sitting beside the box |
| `docs/nest/pics/box.webp` | box (קופסה) | the same cardboard box, empty |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-in.mp3` | In! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-in.mp3` | Which teddy is in the box? | Find it: the question |
| `docs/nest/audio/w-on.mp3` | On! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-on.mp3` | Which teddy is on the box? | Find it: the question |
| `docs/nest/audio/w-under.mp3` | Under! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-under.mp3` | Which teddy is under the box? | Find it: the question |
| `docs/nest/audio/w-next-to.mp3` | Next to! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-next-to.mp3` | Find teddy next to the box! | Find it: the question |
| `docs/nest/audio/w-box.mp3` | A box! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-box.mp3` | Where is the box? | Find it: the question |
| `docs/nest/audio/p-n34.mp3` | It's in the box! | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n34-0.mp3` | In, in, in the box! | the chant, line 1 |
| `docs/nest/audio/c-n34-1.mp3` | On, on, on the box! | the chant, line 2 |
| `docs/nest/audio/c-n34-2.mp3` | Under, under, under the box! | the chant, line 3 |
| `docs/nest/audio/c-n34-3.mp3` | Next to, next to, next to the box! | the chant, line 4 |
| `docs/nest/audio/t-n34-0.mp3` | Where is teddy? | the story, page 1 |
| `docs/nest/audio/t-n34-1.mp3` | Teddy is in the box. | the story, page 2 |
| `docs/nest/audio/t-n34-2.mp3` | Now teddy is on the box. | the story, page 3 |
| `docs/nest/audio/t-n34-3.mp3` | Teddy is under the box! | the story, page 4 |
| `docs/nest/audio/t-n34-4.mp3` | Here he is, next to the box. | the story, page 5 |

### r17: review of n33 and n34

Nothing new to draw or record.

### n35: Birthday party (יום הולדת)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/cake.webp` | cake (עוגה) | one clay sticker of the cake |
| `docs/nest/pics/present.webp` | present (מתנה) | one clay sticker of the present |
| `docs/nest/pics/candle.webp` | candle (נר) | one clay sticker of the candle |
| `docs/nest/pics/party-hat.webp` | party hat (כובע מסיבה) | one clay sticker of the party hat |
| `docs/nest/pics/card.webp` | card (כרטיס ברכה) | a birthday card with a balloon on it, no words |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-cake.mp3` | A cake! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-cake.mp3` | Where is the cake? | Find it: the question |
| `docs/nest/audio/w-present.mp3` | A present! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-present.mp3` | Where is the present? | Find it: the question |
| `docs/nest/audio/w-candle.mp3` | A candle! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-candle.mp3` | Where is the candle? | Find it: the question |
| `docs/nest/audio/w-party-hat.mp3` | A party hat! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-party-hat.mp3` | Where is the party hat? | Find it: the question |
| `docs/nest/audio/w-card.mp3` | A card! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-card.mp3` | Where is the card? | Find it: the question |
| `docs/nest/audio/p-n35.mp3` | Happy birthday! | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n35-0.mp3` | Cake, cake, birthday cake! | the chant, line 1 |
| `docs/nest/audio/c-n35-1.mp3` | Candle, candle, blow, blow, blow! | the chant, line 2 |
| `docs/nest/audio/c-n35-2.mp3` | A present for you, open it! | the chant, line 3 |
| `docs/nest/audio/c-n35-3.mp3` | Party hat on, let's dance! | the chant, line 4 |
| `docs/nest/audio/t-n35-0.mp3` | It is Chacho's birthday! | the story, page 1 |
| `docs/nest/audio/t-n35-1.mp3` | A big cake. | the story, page 2 |
| `docs/nest/audio/t-n35-2.mp3` | Three candles. Blow! | the story, page 3 |
| `docs/nest/audio/t-n35-3.mp3` | A present for Chacho. | the story, page 4 |
| `docs/nest/audio/t-n35-4.mp3` | Party hats for everyone! | the story, page 5 |

### n36: Pets (חיות מחמד)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/rabbit.webp` | rabbit (ארנב) | one clay sticker of the rabbit |
| `docs/nest/pics/turtle.webp` | turtle (צב) | one clay sticker of the turtle |
| `docs/nest/pics/hamster.webp` | hamster (אוגר) | one clay sticker of the hamster |
| `docs/nest/pics/puppy.webp` | puppy (גור כלבים) | a puppy, clearly smaller and rounder than the farm dog |
| `docs/nest/pics/kitten.webp` | kitten (חתלתול) | a kitten, clearly smaller than the farm cat |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-rabbit.mp3` | A rabbit! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-rabbit.mp3` | Where is the rabbit? | Find it: the question |
| `docs/nest/audio/w-turtle.mp3` | A turtle! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-turtle.mp3` | Where is the turtle? | Find it: the question |
| `docs/nest/audio/w-hamster.mp3` | A hamster! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-hamster.mp3` | Where is the hamster? | Find it: the question |
| `docs/nest/audio/w-puppy.mp3` | A puppy! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-puppy.mp3` | Where is the puppy? | Find it: the question |
| `docs/nest/audio/w-kitten.mp3` | A kitten! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-kitten.mp3` | Where is the kitten? | Find it: the question |
| `docs/nest/audio/p-n36.mp3` | I have a rabbit. | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n36-0.mp3` | Rabbit, rabbit, hop, hop, hop! | the chant, line 1 |
| `docs/nest/audio/c-n36-1.mp3` | Turtle, turtle, nice and slow! | the chant, line 2 |
| `docs/nest/audio/c-n36-2.mp3` | Puppy, puppy, woof, woof, woof! | the chant, line 3 |
| `docs/nest/audio/c-n36-3.mp3` | Kitten, kitten, meow, meow, meow! | the chant, line 4 |
| `docs/nest/audio/t-n36-0.mp3` | Chacho visits his friends. | the story, page 1 |
| `docs/nest/audio/t-n36-1.mp3` | A white rabbit. | the story, page 2 |
| `docs/nest/audio/t-n36-2.mp3` | A turtle eats a leaf. | the story, page 3 |
| `docs/nest/audio/t-n36-3.mp3` | A puppy and a kitten. | the story, page 4 |
| `docs/nest/audio/t-n36-4.mp3` | A little hamster. Hello! | the story, page 5 |

### r18: review of n35 and n36

Nothing new to draw or record.

### n37: Sky and seasons (שמיים ועונות)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/sky.webp` | sky (שמיים) | a round window of blue sky with one small cloud |
| `docs/nest/pics/summer.webp` | summer (קיץ) | a tree in summer: green, a big sun |
| `docs/nest/pics/winter.webp` | winter (חורף) | the same tree in winter: bare, rain drops |
| `docs/nest/pics/spring.webp` | spring (אביב) | the same tree in spring: pink blossoms |
| `docs/nest/pics/autumn.webp` | autumn (סתיו) | the same tree in autumn: orange leaves falling |
| `docs/nest/pics/umbrella.webp` | umbrella (מטרייה) | one clay sticker of the umbrella |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-sky.mp3` | The sky! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-sky.mp3` | Where is the sky? | Find it: the question |
| `docs/nest/audio/w-summer.mp3` | Summer! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-summer.mp3` | Where is summer? | Find it: the question |
| `docs/nest/audio/w-winter.mp3` | Winter! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-winter.mp3` | Where is winter? | Find it: the question |
| `docs/nest/audio/w-spring.mp3` | Spring! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-spring.mp3` | Where is spring? | Find it: the question |
| `docs/nest/audio/w-autumn.mp3` | Autumn! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-autumn.mp3` | Where is autumn? | Find it: the question |
| `docs/nest/audio/w-umbrella.mp3` | An umbrella! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-umbrella.mp3` | Where is the umbrella? | Find it: the question |
| `docs/nest/audio/p-n37.mp3` | Look at the sky! | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n37-0.mp3` | Summer, summer, hot, hot sun! | the chant, line 1 |
| `docs/nest/audio/c-n37-1.mp3` | Winter, winter, cold, cold rain! | the chant, line 2 |
| `docs/nest/audio/c-n37-2.mp3` | Spring, spring, flowers grow! | the chant, line 3 |
| `docs/nest/audio/c-n37-3.mp3` | Autumn, autumn, leaves fall down! | the chant, line 4 |
| `docs/nest/audio/t-n37-0.mp3` | Chacho looks at the sky. | the story, page 1 |
| `docs/nest/audio/t-n37-1.mp3` | In summer, it is hot. | the story, page 2 |
| `docs/nest/audio/t-n37-2.mp3` | In autumn, leaves fall. | the story, page 3 |
| `docs/nest/audio/t-n37-3.mp3` | In winter, take an umbrella! | the story, page 4 |
| `docs/nest/audio/t-n37-4.mp3` | In spring, flowers say hello. | the story, page 5 |

### n38: My school bag (התיק שלי)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/bag.webp` | bag (תיק) | a kid's school backpack |
| `docs/nest/pics/book.webp` | book (ספר) | one clay sticker of the book |
| `docs/nest/pics/crayon.webp` | crayon (צבע) | one fat wax crayon |
| `docs/nest/pics/pencil.webp` | pencil (עיפרון) | one clay sticker of the pencil |
| `docs/nest/pics/scissors.webp` | scissors (מספריים) | round-tipped kids' scissors |
| `docs/nest/pics/glue.webp` | glue (דבק) | a glue stick |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-bag.mp3` | A bag! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-bag.mp3` | Where is the bag? | Find it: the question |
| `docs/nest/audio/w-book.mp3` | A book! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-book.mp3` | Where is the book? | Find it: the question |
| `docs/nest/audio/w-crayon.mp3` | A crayon! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-crayon.mp3` | Where is the crayon? | Find it: the question |
| `docs/nest/audio/w-pencil.mp3` | A pencil! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-pencil.mp3` | Where is the pencil? | Find it: the question |
| `docs/nest/audio/w-scissors.mp3` | Scissors! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-scissors.mp3` | Where are the scissors? | Find it: the question |
| `docs/nest/audio/w-glue.mp3` | Glue! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-glue.mp3` | Where is the glue? | Find it: the question |
| `docs/nest/audio/p-n38.mp3` | Can I have a crayon? | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n38-0.mp3` | Pencil, crayon, paper, glue! | the chant, line 1 |
| `docs/nest/audio/c-n38-1.mp3` | Open the book, read with me! | the chant, line 2 |
| `docs/nest/audio/c-n38-2.mp3` | In my bag, in my bag! | the chant, line 3 |
| `docs/nest/audio/c-n38-3.mp3` | Crayon, crayon, color, color! | the chant, line 4 |
| `docs/nest/audio/t-n38-0.mp3` | Chacho goes to school. | the story, page 1 |
| `docs/nest/audio/t-n38-1.mp3` | His bag is big. | the story, page 2 |
| `docs/nest/audio/t-n38-2.mp3` | A book and a pencil. | the story, page 3 |
| `docs/nest/audio/t-n38-3.mp3` | A red crayon. | the story, page 4 |
| `docs/nest/audio/t-n38-4.mp3` | Cut, cut! Stick, stick! | the story, page 5 |

### r19: review of n37 and n38

Nothing new to draw or record.

### n39: Kind words (מילים טובות)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/please.webp` | please (בבקשה) | a child holding out both hands, asking nicely |
| `docs/nest/pics/thank-you.webp` | thank you (תודה) | a child receiving a present and smiling |
| `docs/nest/pics/sorry.webp` | sorry (סליחה) | a child giving back a toy to a friend, kind face |
| `docs/nest/pics/help.webp` | help (עזרה) | a child helping a friend pick up blocks |
| `docs/nest/pics/share.webp` | share (לחלוק) | two children sharing an apple cut in half |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-please.mp3` | Please! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-please.mp3` | Who says please? | Find it: the question |
| `docs/nest/audio/w-thank-you.mp3` | Thank you! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-thank-you.mp3` | Who says thank you? | Find it: the question |
| `docs/nest/audio/w-sorry.mp3` | Sorry! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-sorry.mp3` | Who says sorry? | Find it: the question |
| `docs/nest/audio/w-help.mp3` | I can help! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-help.mp3` | Who can help? | Find it: the question |
| `docs/nest/audio/w-share.mp3` | Share! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-share.mp3` | Who can share? | Find it: the question |
| `docs/nest/audio/p-n39.mp3` | Let's share! | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n39-0.mp3` | Please and thank you, every day! | the chant, line 1 |
| `docs/nest/audio/c-n39-1.mp3` | Thank you, thank you, thank you! | the chant, line 2 |
| `docs/nest/audio/c-n39-2.mp3` | Sorry, sorry, let's be friends! | the chant, line 3 |
| `docs/nest/audio/c-n39-3.mp3` | Share, share, one for you! | the chant, line 4 |
| `docs/nest/audio/t-n39-0.mp3` | Chacho plays with a friend. | the story, page 1 |
| `docs/nest/audio/t-n39-1.mp3` | Can I have the ball, please? | the story, page 2 |
| `docs/nest/audio/t-n39-2.mp3` | Here you are. Thank you! | the story, page 3 |
| `docs/nest/audio/t-n39-3.mp3` | Oops! Sorry! | the story, page 4 |
| `docs/nest/audio/t-n39-4.mp3` | Let's share the ball! | the story, page 5 |

### n40: Sports (ספורט)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/kicking.webp` | kicking (בועט) | a child kicking a ball |
| `docs/nest/pics/throwing.webp` | throwing (זורק) | a child throwing a ball |
| `docs/nest/pics/catching.webp` | catching (תופס) | a child catching a ball with both hands |
| `docs/nest/pics/hopping.webp` | hopping (קופץ על רגל אחת) | a child hopping on one foot |
| `docs/nest/pics/skating.webp` | skating (מחליק) | a child on roller skates with a helmet |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-kicking.mp3` | Kicking! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-kicking.mp3` | Who is kicking? | Find it: the question |
| `docs/nest/audio/w-throwing.mp3` | Throwing! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-throwing.mp3` | Who is throwing? | Find it: the question |
| `docs/nest/audio/w-catching.mp3` | Catching! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-catching.mp3` | Who is catching? | Find it: the question |
| `docs/nest/audio/w-hopping.mp3` | Hopping! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-hopping.mp3` | Who is hopping? | Find it: the question |
| `docs/nest/audio/w-skating.mp3` | Skating! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-skating.mp3` | Who is skating? | Find it: the question |
| `docs/nest/audio/p-n40.mp3` | Catch the ball! | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n40-0.mp3` | Kick, kick, kick the ball! | the chant, line 1 |
| `docs/nest/audio/c-n40-1.mp3` | Throw it high, throw it far! | the chant, line 2 |
| `docs/nest/audio/c-n40-2.mp3` | Catch it, catch it, yes! | the chant, line 3 |
| `docs/nest/audio/c-n40-3.mp3` | Hop, hop, on one foot! | the chant, line 4 |
| `docs/nest/audio/t-n40-0.mp3` | Chacho plays ball. | the story, page 1 |
| `docs/nest/audio/t-n40-1.mp3` | He is kicking the ball. | the story, page 2 |
| `docs/nest/audio/t-n40-2.mp3` | Now he is throwing it. | the story, page 3 |
| `docs/nest/audio/t-n40-3.mp3` | Catching! Well done! | the story, page 4 |
| `docs/nest/audio/t-n40-4.mp3` | Hop, hop, hop home. | the story, page 5 |

### r20: review of n39 and n40

Nothing new to draw or record.

### n41: Space (חלל)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/rocket.webp` | rocket (טיל) | a round friendly space rocket |
| `docs/nest/pics/planet.webp` | planet (כוכב לכת) | a ringed planet |
| `docs/nest/pics/earth.webp` | Earth (כדור הארץ) | one clay sticker of the Earth |
| `docs/nest/pics/telescope.webp` | telescope (טלסקופ) | one clay sticker of the telescope |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-rocket.mp3` | A rocket! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-rocket.mp3` | Where is the rocket? | Find it: the question |
| `docs/nest/audio/w-planet.mp3` | A planet! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-planet.mp3` | Where is the planet? | Find it: the question |
| `docs/nest/audio/w-earth.mp3` | The Earth! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-earth.mp3` | Where is the Earth? | Find it: the question |
| `docs/nest/audio/w-telescope.mp3` | A telescope! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-telescope.mp3` | Where is the telescope? | Find it: the question |
| `docs/nest/audio/p-n41.mp3` | Three, two, one, go! | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n41-0.mp3` | Zoom, zoom, to the moon! | the chant, line 1 |
| `docs/nest/audio/c-n41-1.mp3` | Planet, planet, round and round! | the chant, line 2 |
| `docs/nest/audio/c-n41-2.mp3` | Earth is home, home, home! | the chant, line 3 |
| `docs/nest/audio/c-n41-3.mp3` | Look, look, a telescope! | the chant, line 4 |
| `docs/nest/audio/t-n41-0.mp3` | Chacho is an astronaut! | the story, page 1 |
| `docs/nest/audio/t-n41-1.mp3` | Three, two, one, go! | the story, page 2 |
| `docs/nest/audio/t-n41-2.mp3` | Look at the Earth! | the story, page 3 |
| `docs/nest/audio/t-n41-3.mp3` | A big red planet. | the story, page 4 |
| `docs/nest/audio/t-n41-4.mp3` | Back home. Good night! | the story, page 5 |

### n42: Story world (עולם הסיפורים)

Pictures:

| File | Word | How to draw |
|---|---|---|
| `docs/nest/pics/king.webp` | king (מלך) | one clay sticker of the king |
| `docs/nest/pics/queen.webp` | queen (מלכה) | one clay sticker of the queen |
| `docs/nest/pics/castle.webp` | castle (טירה) | one clay sticker of the castle |
| `docs/nest/pics/crown.webp` | crown (כתר) | one clay sticker of the crown |
| `docs/nest/pics/dragon.webp` | dragon (דרקון) | a small, round, smiling green dragon, no fire, no teeth showing |
| `docs/nest/pics/princess.webp` | princess (נסיכה) | one clay sticker of the princess |

Lines:

| File | Text | Where it plays |
|---|---|---|
| `docs/nest/audio/w-king.mp3` | A king! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-king.mp3` | Where is the king? | Find it: the question |
| `docs/nest/audio/w-queen.mp3` | A queen! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-queen.mp3` | Where is the queen? | Find it: the question |
| `docs/nest/audio/w-castle.mp3` | A castle! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-castle.mp3` | Where is the castle? | Find it: the question |
| `docs/nest/audio/w-crown.mp3` | A crown! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-crown.mp3` | Where is the crown? | Find it: the question |
| `docs/nest/audio/w-dragon.mp3` | A friendly dragon! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-dragon.mp3` | Where is the dragon? | Find it: the question |
| `docs/nest/audio/w-princess.mp3` | A princess! | the word: Meet, a right answer, a tap on its picture |
| `docs/nest/audio/f-princess.mp3` | Where is the princess? | Find it: the question |
| `docs/nest/audio/p-n42.mp3` | Once upon a time. | the unit's phrase (Meet from age 4, Say it) |
| `docs/nest/audio/c-n42-0.mp3` | King and queen in the castle! | the chant, line 1 |
| `docs/nest/audio/c-n42-1.mp3` | A crown, a crown, on my head! | the chant, line 2 |
| `docs/nest/audio/c-n42-2.mp3` | Friendly dragon, flap, flap, flap! | the chant, line 3 |
| `docs/nest/audio/c-n42-3.mp3` | The princess says hello! | the chant, line 4 |
| `docs/nest/audio/t-n42-0.mp3` | Once upon a time. | the story, page 1 |
| `docs/nest/audio/t-n42-1.mp3` | A king and a queen. | the story, page 2 |
| `docs/nest/audio/t-n42-2.mp3` | They live in a castle. | the story, page 3 |
| `docs/nest/audio/t-n42-3.mp3` | A friendly dragon says hello! | the story, page 4 |
| `docs/nest/audio/t-n42-4.mp3` | The end! | the story, page 5 |

### r21: review of n41 and n42

Nothing new to draw or record.
