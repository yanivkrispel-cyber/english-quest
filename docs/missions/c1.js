// English Quest missions, level C1 (specs/missions.md). Original content on the topics of test-english.com's map:
// the topic list is theirs, every text, recording and question here is our own. Check: node test/missions-check.js
window.EQ_MISSIONS = window.EQ_MISSIONS || {};
window.EQ_MISSIONS.c1 = [
{
  id: 'c1g01', url: 'https://test-english.com/grammar-points/c1/advanced-present-simple-and-present-continuous/', type: 'grammar',
  title: 'The present, for experts', dinner: 'What is someone in our family always doing that drives you mad?',
  hook: { q: 'Which tense do football commentators use most to describe the action?', o: ['The present simple', 'The past perfect', 'The future continuous'], a: 0,
    reveal: '*The present simple*: "Cohen takes the ball, he shoots, he scores!" It makes the action feel immediate.' },
  learn: { kind: 'rule', title: 'Simple and continuous, beyond the basics',
    lines: ['*Present simple* for commentary, headlines and stories told for drama: He *shoots*, he *scores*! So I *walk* in, and everyone *goes* quiet.',
      '*be being + adjective* for behaviour that is unusual or temporary: You*\'re being* very quiet today.',
      'Some state verbs change meaning in the continuous: I *see* (= understand) vs I*\'m seeing* (= meeting) the doctor; This *tastes* sweet vs He*\'s tasting* the soup.',
      '*always / constantly + continuous* for habits that annoy us: She*\'s constantly* interrupting me.'],
    ex: ['Why *are* you *being* so mean to your brother?', 'I *think* it\'s great, but I*\'m thinking* of quitting.'],
    he: 'Present simple משמש גם לסיפור דרמטי, לכותרות ולשידורי ספורט. be being + תואר = התנהגות זמנית (You\'re being silly). פעלי מצב משנים משמעות ב-ing: I see (מבין) מול I\'m seeing (נפגש). always או constantly + ing = הרגל מעצבן.' },
  steps: [
    { name: 'Meaning matters', items: [
      { k: 'mc', q: 'I ___ what you mean, but I don\'t agree.', o: ['see', 'am seeing'], a: 0, why: 'see = understand, a state → present simple.' },
      { k: 'mc', q: 'I ___ the dentist at four, so I can\'t meet you.', o: ['am seeing', 'see'], a: 0, why: 'see = meet, an arrangement → present continuous.' },
      { k: 'mc', q: 'You ___ really stubborn today. That\'s not like you.', o: ['are being', 'are', 'have been being'], a: 0, why: 'Behaviour that is unusual or temporary → are being.' },
      { k: 'mc', q: 'Headline: "Government ___ new climate plan."', o: ['announces', 'is announcing', 'announced'], a: 0, why: 'Headlines use the present simple.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'He\'s ___ leaving his socks on the floor! It drives me mad.', hint: '(an adverb for annoying habits)', a: ['always', 'constantly', 'forever'],
        why: 'always / constantly + continuous = an annoying habit.' },
      { k: 'tf', q: '"This cake is tasting wonderful."', a: false, fix: 'This cake tastes wonderful.', why: 'taste = have a flavour (a state) → present simple.' },
      { k: 'mc', q: '"What are you doing?" "I ___ the sauce to see if it needs salt."', o: ['\'m tasting', 'taste'], a: 0, why: 'taste = try with your tongue (an action) → continuous.' },
      { k: 'mc', q: 'I ___ of taking up the drums. What do you think?', o: ['\'m thinking', 'think'], a: 0, why: 'think of / about = considering → continuous.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Why are you being so polite all of a sudden?', why: 'be being + adjective = unusual behaviour right now.' },
      { k: 'spot', s: 'So I *walked* into the room, and everyone goes quiet.', fix: 'walk', why: 'In a story told in the present, keep the tense: I walk in, everyone goes quiet.' },
      { k: 'build', s: 'My English is getting better every week.', why: 'A change in progress → is getting.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'He is always *forget* his keys!', fix: 'forgetting', why: 'always + continuous: he is always forgetting.' },
    { k: 'type', q: '"You ___ ridiculous!" she laughed when I put on my dad\'s hat.', hint: '(be, about behaviour right now)', a: ['are being', '\'re being'],
      why: 'be being + adjective = how someone is behaving right now.' },
    { k: 'mc', q: 'Which sentence sounds like live sports commentary?', o: ['Cohen passes to Levi, Levi shoots… and it\'s a goal!', 'Cohen passed to Levi, who had shot.', 'Cohen will pass to Levi.'], a: 0,
      why: 'Commentary uses the present simple for each quick action.' }
  ]
},
{
  id: 'c1g02', url: 'https://test-english.com/grammar-points/c1/advanced-past-simple-past-continuous-past-perfect/', type: 'grammar',
  title: 'Telling stories in the past', dinner: 'What had you never done before this year?',
  hook: { q: 'When Howard Carter opened Tutankhamun\'s tomb in 1922, about how long had it been closed?', o: ['About 300 years', 'About 3,300 years', 'About 33,000 years'], a: 1,
    reveal: 'About *3,300 years*! The tomb *had been* sealed since about 1323 BC, and Carter *had been searching* for it for years.' },
  learn: { kind: 'rule', title: 'Narrative tenses',
    lines: ['*Past simple* for the main events: He *opened* the door.',
      '*Past continuous* for the background: Rain *was falling* and the wind *was howling*.',
      '*Past perfect* for something earlier: When we arrived, the film *had* already *started*. *Past perfect continuous* for a long action up to that moment: She was exhausted because she *had been running*.',
      '*was going to / had hoped to* for plans that didn\'t happen: I *was going to* call you, but I forgot.'],
    ex: ['By the time help arrived, they *had been waiting* for hours.', 'I *had hoped* to finish early, but the train *was* late.'],
    he: 'עבר פשוט לאירועים המרכזיים, past continuous לרקע, past perfect למשהו שקרה עוד קודם, past perfect continuous לפעולה ארוכה עד אותו רגע, ו-was going to לתוכנית שלא יצאה לפועל.' },
  steps: [
    { name: 'Order of events', items: [
      { k: 'mc', q: 'When I got to the station, the train ___.', o: ['had already left', 'already left', 'was already leaving'], a: 0, why: 'It left before I arrived → past perfect.' },
      { k: 'mc', q: 'Her eyes were red. She ___ for hours.', o: ['had been crying', 'cried', 'was crying'], a: 0, why: 'A long action up to that moment → past perfect continuous.' },
      { k: 'mc', q: 'It was a dark night. Snow ___ softly as we walked home.', o: ['was falling', 'had fallen', 'fell'], a: 0, why: 'The background of a story → past continuous.' },
      { k: 'mc', q: 'I ___ call you, but my battery died.', o: ['was going to', 'would', 'had gone to'], a: 0, why: 'A plan that didn\'t happen → was going to.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'By the time we arrived, everyone ___ eaten.', hint: '(had / have)', a: ['had'], why: 'Earlier than our arrival → had eaten.' },
      { k: 'tf', q: '"I had been knowing him for years before we became friends."', a: false, fix: 'I had known him for years before we became friends.',
        why: 'know is a state verb: no continuous, even in the past perfect.' },
      { k: 'mc', q: 'We ___ to go to the beach, but it rained all day.', o: ['had hoped', 'hoped to have', 'have hoped'], a: 0, why: 'had hoped = a hope that did not come true.' },
      { k: 'mc', q: 'The ground was wet. It ___ all night.', o: ['had been raining', 'was raining', 'rained'], a: 0, why: 'Evidence of a long, earlier action → had been raining.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'She had never seen the sea before that summer.', why: 'Earlier than "that summer" → had never seen.' },
      { k: 'spot', s: 'By the time I *have* finished, everyone had left.', fix: 'had', why: 'Both actions are in the past: By the time I had finished…' },
      { k: 'build', s: 'I was going to tell you, but I forgot.', why: 'was going to = a plan that didn\'t happen.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'They had been *walk* for hours when they found the cave.', fix: 'walking', why: 'had been + -ing: had been walking.' },
    { k: 'type', q: 'I didn\'t recognise him because he ___ grown a beard.', a: ['had'], why: 'The beard came earlier → had grown.' },
    { k: 'mc', q: 'Which sentence shows a plan that didn\'t happen?', o: ['We were going to fly, but we took the train.', 'We flew to Rome.', 'We had flown to Rome before.'], a: 0,
      why: 'were going to … but = the plan changed.' }
  ]
},
{
  id: 'c1g03', url: 'https://test-english.com/grammar-points/c1/advanced-modal-verbs-will-would-and-should/', type: 'grammar',
  title: 'will, would, should', dinner: 'What would you do every summer when you were younger?',
  hook: { q: 'In Old English, the word "will" meant…', o: ['to want', 'to go', 'to be able'], a: 0,
    reveal: '*To want*! Before it became a future word, will meant to want. You still hear it in "free will" and "against her will".' },
  learn: { kind: 'rule', title: 'More than the future',
    lines: ['*will* for a confident guess about now: The phone\'s ringing. That*\'ll be* Mum. And for typical behaviour: He *will* talk for hours if you let him.',
      '*would* for past habits: Every summer we *would* swim in the lake. And for refusal: The door *wouldn\'t* open.',
      '*should* for what we expect: They left at six, so they *should* be here soon.',
      'Formal *Should* + subject = If: *Should* you need any help, please call us.'],
    ex: ['Don\'t worry, she*\'ll* be fine.', 'My grandmother *would* bake bread every Friday.'],
    he: 'will = ניחוש בטוח על עכשיו, או התנהגות אופיינית. would = הרגל בעבר, או סירוב (The car wouldn\'t start). should = מה שמצפים שיקרה. Should you need... = ניסוח רשמי של If you need...' },
  steps: [
    { name: 'Which meaning?', items: [
      { k: 'mc', q: 'Someone\'s at the door. That ___ the pizza!', o: ['\'ll be', 'would be', 'should have been'], a: 0, why: 'A confident guess about now → will be.' },
      { k: 'mc', q: 'When I was little, my dad ___ read to me every night.', o: ['would', 'will', 'should'], a: 0, why: 'A past habit → would.' },
      { k: 'mc', q: 'I pushed and pushed, but the window ___ open.', o: ['wouldn\'t', 'won\'t have', 'shouldn\'t'], a: 0, why: 'Refusal in the past, even for things → wouldn\'t.' },
      { k: 'mc', q: 'The parcel was sent on Monday, so it ___ arrive by Friday.', o: ['should', 'would', 'will have'], a: 0, why: 'What we expect → should.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: '___ you have any questions, please contact us.', a: ['should'], why: 'Formal: Should you have = If you have.' },
      { k: 'tf', q: '"He will leave his dishes in the sink, no matter how often I ask him."', a: true, why: 'will for typical (often annoying) behaviour.' },
      { k: 'mc', q: '"Who\'s on the phone?" "It ___ be Grandma. She always calls at eight."', o: ['will', 'would', 'should have'], a: 0, why: 'A confident guess about now → will.' },
      { k: 'mc', q: 'Every evening, the old man ___ sit on the same bench and feed the birds.', o: ['would', 'should', 'will have'], a: 0, why: 'A past habit → would.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Should you need help, just ask.', why: 'Should + subject = If, in a formal style.' },
      { k: 'spot', s: 'In the summers of my childhood, we *will* go fishing every day.', fix: 'would', why: 'A past habit → would.' },
      { k: 'build', s: 'They left early, so they should be home by now.', why: 'should = what we expect.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'The car *won\'t* start this morning, so I took the bus.', fix: 'wouldn\'t', why: 'Refusal in the past → wouldn\'t.' },
    { k: 'type', q: 'Don\'t worry about the exam. You ___ be fine!', a: ['will', '\'ll'], why: 'A confident prediction → will.' },
    { k: 'mc', q: 'Which sentence describes a past habit?', o: ['We would spend every summer at the beach.', 'We would spend the summer at the beach if we could.', 'We should spend the summer at the beach.'], a: 0,
      why: 'would + a repeated action in the past = a past habit.' }
  ]
},
{
  id: 'c1v01', url: 'https://test-english.com/vocabulary/c1/feelings-and-reactions-c1-english-vocabulary/', type: 'vocabulary',
  title: 'Feelings and reactions', dinner: 'When were you last completely taken aback?',
  hook: { q: 'Which emotion makes your face go red?', o: ['Embarrassment', 'Fear', 'Boredom'], a: 0,
    reveal: '*Embarrassment*! Blushing happens when the blood vessels in your face widen. Charles Darwin called it the most human of all expressions.' },
  learn: { kind: 'words', title: 'Precise words for feelings', words: [
    { w: 'taken aback', d: 'surprised and a little shocked', ex: 'I was *taken aback* by her rude reply.' },
    { w: 'over the moon', d: 'extremely happy', ex: 'She was *over the moon* when she got the scholarship.' },
    { w: 'gutted', d: 'very disappointed (informal)', ex: 'We lost the final. I was *gutted*.' },
    { w: 'on edge', d: 'nervous and tense', ex: 'Everyone was *on edge* before the results.' },
    { w: 'flabbergasted', d: 'extremely surprised', ex: 'He was *flabbergasted* to see the price.' },
    { w: 'livid', d: 'extremely angry', ex: 'Dad was *livid* about the dent in the car.' },
    { w: 'touched', d: 'emotionally moved by someone\'s kindness', ex: 'I was *touched* by her letter.' },
    { w: 'dumbfounded', d: 'so surprised that you can\'t speak', ex: 'The audience sat there *dumbfounded*.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'Extremely happy:', o: ['over the moon', 'on edge', 'livid'], a: 0, why: 'over the moon = extremely happy.' },
      { k: 'mc', q: 'Very disappointed (informal):', o: ['gutted', 'touched', 'taken aback'], a: 0, why: 'gutted = very disappointed.' },
      { k: 'mc', q: 'Nervous and tense:', o: ['on edge', 'over the moon', 'dumbfounded'], a: 0, why: 'on edge = nervous and tense.' },
      { k: 'mc', q: 'Extremely angry:', o: ['livid', 'touched', 'flabbergasted'], a: 0, why: 'livid = extremely angry.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Good feeling, bad feeling or surprise?', g: ['good', 'bad', 'surprise'],
        w: [['over the moon', 0], ['touched', 0], ['gutted', 1], ['livid', 1], ['on edge', 1], ['flabbergasted', 2], ['taken aback', 2], ['dumbfounded', 2]],
        why: 'good: over the moon, touched · bad: gutted, livid, on edge · surprise: flabbergasted, taken aback, dumbfounded' },
      { k: 'hear', say: 'I was completely taken aback by her rudeness.', q: 'How did he feel?', o: ['surprised and a bit shocked', 'very happy', 'bored'], a: 0,
        why: 'taken aback = surprised and a little shocked.' },
      { k: 'spell', w: 'livid', clue: 'Extremely angry.', why: 'livid: l-i-v-i-d.' },
      { k: 'mc', q: 'We lost the final in the last minute. I was absolutely ___.', o: ['gutted', 'touched', 'over the moon'], a: 0, why: 'losing in the last minute → gutted.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'The surprise party',
        t: 'I had been [1] all week because I thought everyone had forgotten my birthday. When I opened the door and thirty friends shouted "Surprise!", I was completely [2]: I couldn\'t say a word. I was really [3] that they had planned it for weeks, and by the end of the night I was over the [4].',
        gaps: [
          { o: ['on edge', 'livid', 'touched'], a: 0, why: 'nervous and tense all week → on edge.' },
          { o: ['dumbfounded', 'gutted', 'livid'], a: 0, why: 'she couldn\'t say a word → dumbfounded.' },
          { o: ['touched', 'gutted', 'on edge'], a: 0, why: 'moved by their kindness → touched.' },
          { o: ['moon', 'stars', 'sun'], a: 0, why: 'over the moon = extremely happy.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'When she gave me the card, I was so *touching* that I cried.', fix: 'touched', why: '-ed is how you feel: touched. (-ing describes the thing: a touching card.)' },
    { k: 'type', q: 'When I heard I had won, I was over the ___!', a: ['moon'], why: 'over the moon = extremely happy.' }
  ]
},
{
  id: 'c1v02', url: 'https://test-english.com/vocabulary/c1/ways-of-walking-c1-english-vocabulary/', type: 'vocabulary',
  title: 'Ways of walking', dinner: 'How do you walk into school on a Monday morning?',
  hook: { q: 'About how many bones are there in one human foot?', o: ['About 6', 'About 26', 'About 56'], a: 1,
    reveal: '*26*! About a quarter of all the bones in your body are in your feet. English also has a word for almost every way of walking.' },
  learn: { kind: 'words', title: 'Verbs that say how you walk', words: [
    { w: 'stroll', d: 'walk slowly, for pleasure', ex: 'We *strolled* along the beach.' },
    { w: 'stride', d: 'walk with long, confident steps', ex: 'She *strode* into the meeting.' },
    { w: 'stagger', d: 'walk unsteadily, almost falling', ex: 'He *staggered* off the boat.' },
    { w: 'tiptoe', d: 'walk quietly on your toes', ex: 'I *tiptoed* past the baby\'s room.' },
    { w: 'wander', d: 'walk without a clear direction', ex: 'We *wandered* around the old town.' },
    { w: 'limp', d: 'walk unevenly because one leg hurts', ex: 'She *limped* off the pitch.' },
    { w: 'march', d: 'walk with regular steps, like soldiers', ex: 'The band *marched* down the street.' },
    { w: 'trudge', d: 'walk slowly and heavily, because you are tired', ex: 'We *trudged* home through the snow.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'Walk quietly on your toes:', o: ['tiptoe', 'stride', 'march'], a: 0, why: 'tiptoe = walk on your toes, quietly.' },
      { k: 'mc', q: 'Walk with long, confident steps:', o: ['stride', 'limp', 'stagger'], a: 0, why: 'stride = long, confident steps.' },
      { k: 'mc', q: 'Walk without a clear direction:', o: ['wander', 'march', 'trudge'], a: 0, why: 'wander = no clear direction.' },
      { k: 'mc', q: 'Walk unevenly because one leg hurts:', o: ['limp', 'stroll', 'tiptoe'], a: 0, why: 'limp = one leg hurts.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'How is the walking?', g: ['slow and relaxed', 'with difficulty', 'firm and regular'],
        w: [['stroll', 0], ['wander', 0], ['stagger', 1], ['limp', 1], ['trudge', 1], ['stride', 2], ['march', 2]],
        why: 'relaxed: stroll, wander · difficulty: stagger, limp, trudge · firm: stride, march' },
      { k: 'hear', say: 'She tiptoed past the sleeping dog.', q: 'How did she walk?', o: ['quietly, on her toes', 'very fast', 'with a limp'], a: 0, why: 'tiptoe = quietly, on your toes.' },
      { k: 'spell', w: 'limp', clue: 'Walk unevenly because one leg hurts.', why: 'limp: l-i-m-p.' },
      { k: 'mc', q: 'After the long hike, we ___ back to the car, exhausted.', o: ['trudged', 'strolled', 'marched'], a: 0, why: 'tired and heavy → trudged.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'A Saturday in the city',
        t: 'In the morning we [1] around the old town with no plan at all. After lunch my brother twisted his ankle and had to [2] back to the hotel. At night a parade [3] down the main street, and when we got back we [4] past my sleeping sister.',
        gaps: [
          { o: ['wandered', 'staggered', 'marched'], a: 0, why: 'no plan → wandered.' },
          { o: ['limp', 'stride', 'tiptoe'], a: 0, why: 'a twisted ankle → limp.' },
          { o: ['marched', 'limped', 'tiptoed'], a: 0, why: 'a parade → marched.' },
          { o: ['tiptoed', 'trudged', 'strode'], a: 0, why: 'quietly, past someone asleep → tiptoed.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'The tired hikers *strolled* up the last hill, almost too exhausted to move.', fix: 'trudged', why: 'Tired and heavy → trudge. (stroll = slow and relaxed, for pleasure.)' },
    { k: 'type', q: 'She ___ confidently onto the stage and took the microphone.', a: ['strode', 'walked', 'marched'], why: 'stride → strode = long, confident steps.' }
  ]
},
{
  id: 'c1l01', url: 'https://test-english.com/listening/c1/when-i-completely-embarrassed-myself-c1-english-listening-test/', type: 'listening',
  title: 'My most embarrassing moment', dinner: 'What is an embarrassing moment you can laugh about now?',
  hook: { q: 'Psychologists say others notice our embarrassing moments much less than we think. What is this called?', o: ['The spotlight effect', 'The domino effect', 'The butterfly effect'], a: 0,
    reveal: '*The spotlight effect*! In one study, students wearing an embarrassing T-shirt thought half the room had noticed. In fact, only about a quarter had.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'cringe', d: 'feel embarrassed, often for someone else' },
    { w: 'awkward', d: 'uncomfortable and embarrassing' },
    { w: 'break the ice', d: 'make people feel more relaxed at the start' }
  ], predict: { q: 'A teacher tells the story of her most embarrassing moment. How do you think it ended?', o: ['It turned into something good', 'She left her job', 'Nobody noticed'] } },
  show: { cast: 'A podcast called Cringe. The guest is Hannah, a teacher.', names: { H: 'Host', A: 'Hannah' }, voices: { H: 'am_michael', A: 'bf_isabella' },
    parts: [
      { lines: [
        ['H', 'Welcome to Cringe, the podcast where guests share their most embarrassing moments. Today\'s guest is Hannah, a teacher. Hannah, over to you.'],
        ['A', 'Thanks. So, it was my first day at a new school, and I was desperate to make a good impression. I\'d spent ages choosing an outfit, I\'d practised my introduction, everything.']
      ], items: [
        { k: 'mc', q: 'Why was the day important for Hannah?', o: ['It was her first day at a new school.', 'It was her birthday.', 'She had a big exam.'], a: 0, why: '"it was my first day at a new school"' },
        { k: 'mc', q: '"Desperate to make a good impression" suggests that…', o: ['she really wanted people to like her', 'she was very sad', 'she didn\'t care'], a: 0,
          why: 'make a good impression = make people think well of you.' }
      ] },
      { lines: [
        ['A', 'I walked into the staff room, smiled at everyone and said, very confidently: Good morning, I\'m the new maths teacher. There was this awkward silence. Then the head teacher said, very gently: Lovely to meet you. You\'re the new English teacher.'],
        ['A', 'I\'d been so nervous that I\'d got my own subject wrong.']
      ], items: [
        { k: 'mc', q: 'What mistake did she make?', o: ['She said the wrong subject.', 'She went to the wrong school.', 'She forgot her name.'], a: 0, why: '"I\'d got my own subject wrong."' },
        { k: 'tf', q: 'The head teacher was rude about the mistake.', a: false, fix: 'The head teacher spoke very gently.', why: '"the head teacher said, very gently…"' },
        { k: 'mc', q: 'Why did she get it wrong, in her opinion?', o: ['She was very nervous.', 'She was tired.', 'She wanted to make a joke.'], a: 0, why: '"I\'d been so nervous…"' }
      ] },
      { lines: [
        ['H', 'Oh no! How did you recover?'],
        ['A', 'Well, I laughed, which helped, and by lunchtime the story had spread around the whole school. But it actually broke the ice. The kids thought it was hilarious, and they still remind me of it, years later.'],
        ['H', 'So the embarrassment turned into an advantage.'],
        ['A', 'Exactly. Laughing at yourself is underrated.']
      ], items: [
        { k: 'mc', q: 'What does "it broke the ice" mean here?', o: ['It helped people feel relaxed with her.', 'It made the room cold.', 'It ended her job.'], a: 0,
          why: 'break the ice = make people more relaxed at the start.' },
        { k: 'mc', q: 'What is Hannah\'s lesson?', o: ['Laughing at yourself helps.', 'Never be nervous.', 'Always prepare more.'], a: 0, why: '"Laughing at yourself is underrated."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'There was this ___ silence.', a: ['awkward'], why: 'awkward = uncomfortable and embarrassing.' },
      { k: 'mc', clip: 2, q: '"By lunchtime the story had spread around the whole school." This means…', o: ['Everybody knew it.', 'Nobody knew it.', 'It was written on the board.'], a: 0,
        why: 'spread = went from person to person.' },
      { k: 'sort', q: 'Feeling embarrassed or getting over it?', g: ['embarrassed', 'getting over it'],
        w: [['I wanted the floor to swallow me.', 0], ['My face went bright red.', 0], ['There was an awkward silence.', 0], ['I laughed it off.', 1], ['It broke the ice.', 1], ['Now it\'s a funny story.', 1]],
        why: 'embarrassed: the floor, a red face, an awkward silence · getting over it: laughing it off, breaking the ice, a funny story' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Laughing at yourself is underrated.', why: 'underrated = better than people think.' }
  ]
},
{
  id: 'c1l02', url: 'https://test-english.com/listening/c1/why-is-walking-humans-superpower-c1-english-listening-test/', type: 'listening',
  title: 'Walking, our superpower', dinner: 'Do you think better when you walk or when you sit? Why?',
  hook: { q: 'In a yearly race in Wales, people run against horses over about 35 km. Has a human ever won?', o: ['Yes, a few times', 'Never', 'Only on bicycles'], a: 0,
    reveal: '*Yes*! On hot days a human runner has beaten all the horses. Humans are among the best long-distance runners on the planet.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'endurance', d: 'the ability to keep going for a long time' },
    { w: 'pant', d: 'breathe quickly with your mouth open, like a dog' },
    { w: 'efficient', d: 'using little energy or time' }
  ], predict: { q: 'A scientist says walking is our superpower. Why do you think she says that?', o: ['It is efficient and good for the mind', 'It is fast', 'Few people can do it'] } },
  show: { cast: 'Part of a talk by a scientist who studies the human body.', names: { L: 'Dr Price' }, voices: { L: 'bf_emma' },
    parts: [
      { lines: [
        ['L', 'We tend to think of walking as boring, something we do between more interesting things. But walking on two legs is one of the strangest things our species does. Very few animals do it all the time, and we are surprisingly efficient at it. We use far less energy than chimpanzees do when they walk on two legs.']
      ], items: [
        { k: 'mc', q: 'How does the speaker describe walking on two legs?', o: ['strange and surprisingly efficient', 'boring and slow', 'common in many animals'], a: 0,
          why: '"one of the strangest things our species does… surprisingly efficient"' },
        { k: 'tf', q: 'Chimpanzees use less energy than humans when they walk on two legs.', a: false, fix: 'Humans use far less energy.', why: '"We use far less energy than chimpanzees do"' }
      ] },
      { lines: [
        ['L', 'Over long distances, humans are among the best endurance runners on the planet. We sweat to stay cool, while most animals have to stop and pant. In Wales there is an annual race between people and horses over about thirty-five kilometres, and on hot days a human has occasionally won.']
      ], items: [
        { k: 'mc', q: 'Why can humans run long distances so well?', o: ['We sweat to stay cool.', 'We have strong arms.', 'We breathe faster.'], a: 0, why: '"We sweat to stay cool"' },
        { k: 'mc', q: 'What is special about the race in Wales?', o: ['People race against horses.', 'It is only for children.', 'It happens every ten years.'], a: 0, why: '"a race between people and horses"' },
        { k: 'type', q: 'The race is about ___ kilometres long.', a: ['35', 'thirty-five', 'thirty five'], why: '"over about thirty-five kilometres"' }
      ] },
      { lines: [
        ['L', 'And walking may be good for our minds, too. In a study at Stanford University, people came up with far more creative ideas while they were walking than while they were sitting. So the next time you\'re stuck on a problem, don\'t stare at the screen. Go for a walk.']
      ], items: [
        { k: 'mc', q: 'What did the Stanford study find?', o: ['People had more creative ideas while walking.', 'Walking makes people sleepy.', 'Sitting helps people think better.'], a: 0,
          why: '"people came up with far more creative ideas while they were walking"' },
        { k: 'mc', q: 'What does the speaker advise?', o: ['Go for a walk when you are stuck.', 'Stare at the screen for longer.', 'Run every day.'], a: 0, why: '"Go for a walk."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'mc', clip: 1, q: 'Most animals have to stop and ___ to cool down.', o: ['pant', 'sweat', 'sleep'], a: 0, why: 'pant = breathe quickly with the mouth open.' },
      { k: 'hear', say: 'So the next time you\'re stuck on a problem, go for a walk.', q: 'When should you go for a walk?', o: ['when you are stuck on a problem', 'when you are hungry', 'after midnight'], a: 0,
        why: 'stuck on a problem = you can\'t find the answer.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Walking may be good for our minds.', why: 'may = it is possible.' }
  ]
},
{
  id: 'c1l03', url: 'https://test-english.com/listening/c1/when-you-cant-trust-who-you-hear-c1-english-listening-test/', type: 'listening',
  title: 'Can you trust that voice?', dinner: 'What secret word could our family use to stay safe?',
  hook: { q: 'In 2019, criminals used a fake voice of a boss to trick a company. About how much money did they get?', o: ['About $2,000', 'About $243,000', 'About $24 million'], a: 1,
    reveal: 'About *$243,000*! A manager in the UK sent the money because the voice on the phone sounded exactly like his boss.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a scam', d: 'a dishonest trick to get money' },
    { w: 'clone', d: 'make an exact copy' },
    { w: 'a red flag', d: 'a sign that something is wrong' }
  ], predict: { q: 'Two presenters talk about fake voices on the phone. What do you think they recommend?', o: ['A family code word', 'Never using a phone', 'Answering every call'] } },
  show: { cast: 'A technology podcast. Two presenters talk about voice scams.', names: { A: 'Zoe', B: 'Adam' }, voices: { A: 'af_nova', B: 'bm_george' },
    parts: [
      { lines: [
        ['A', 'Imagine your phone rings, and it\'s your brother. He sounds panicked. He says he\'s had an accident and needs money transferred right now. Would you question it?'],
        ['B', 'Most people wouldn\'t, and that\'s exactly what scammers are counting on. With today\'s technology, a few seconds of someone\'s voice, from a video online for example, can be enough to clone it.']
      ], items: [
        { k: 'mc', q: 'What do the scammers in the example do?', o: ['They pretend to be a family member who needs money.', 'They sell voices online.', 'They record songs.'], a: 0,
          why: '"it\'s your brother… needs money transferred right now"' },
        { k: 'mc', q: 'How much audio can be enough to clone a voice?', o: ['a few seconds', 'several hours', 'a whole year'], a: 0, why: '"a few seconds of someone\'s voice… can be enough"' }
      ] },
      { lines: [
        ['A', 'So how do you protect yourself?'],
        ['B', 'First, slow down. Scammers rely on panic, so if a call feels urgent and emotional, that\'s a red flag. Hang up and call the person back on a number you already know.'],
        ['A', 'And the family code word idea?'],
        ['B', 'Yes. Agree on a secret word with your family. If someone calls asking for help, ask for the word. A cloned voice won\'t know it.']
      ], items: [
        { k: 'mc', q: 'Why should you slow down?', o: ['Scammers rely on panic.', 'The line is slow.', 'It saves money.'], a: 0, why: '"Scammers rely on panic"' },
        { k: 'mc', q: 'What should you do if a call feels urgent?', o: ['Hang up and call back on a number you know.', 'Send the money quickly.', 'Give them your password.'], a: 0,
          why: '"Hang up and call the person back on a number you already know."' },
        { k: 'tf', q: 'A cloned voice can know your family code word.', a: false, fix: 'A cloned voice won\'t know it.', why: '"A cloned voice won\'t know it."' }
      ] },
      { lines: [
        ['A', 'It\'s a bit sad, though, isn\'t it? That we can\'t just trust a familiar voice anymore.'],
        ['B', 'It is. But a little healthy scepticism isn\'t paranoia. It\'s just the price of living with powerful technology.']
      ], items: [
        { k: 'mc', q: 'How does Adam see being careful?', o: ['as reasonable, not paranoid', 'as too much work', 'as unnecessary'], a: 0, why: '"a little healthy scepticism isn\'t paranoia"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'Scammers rely on ___.', a: ['panic'], why: 'They want you to act before you think.' },
      { k: 'mc', q: '"That\'s a red flag" means…', o: ['That\'s a warning sign.', 'That\'s good news.', 'That\'s a sports rule.'], a: 0, why: 'a red flag = a sign that something is wrong.' },
      { k: 'sort', q: 'Safe or risky?', g: ['safe', 'risky'],
        w: [['Call back on a number you know.', 0], ['Ask for the family code word.', 0], ['Take a moment to think.', 0], ['Send money at once.', 1], ['Share your password.', 1], ['Trust any urgent call.', 1]],
        why: 'safe: call back, the code word, take a moment · risky: sending money at once, sharing passwords, trusting urgent calls' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Agree on a secret word with your family.', why: 'agree on something = decide it together.' }
  ]
},
{
  id: 'c1r01', url: 'https://test-english.com/reading/c1/what-makes-us-laugh-c1-english-reading-test/', type: 'reading',
  title: 'What makes us laugh?', dinner: 'What made you laugh today?',
  hook: { q: 'Which animals make laughing sounds when researchers tickle them?', o: ['Rats', 'Fish', 'Snakes'], a: 0,
    reveal: '*Rats*! When scientists tickled them, they made high-pitched chirps, too high for us to hear, and came back for more.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A popular science article asks a simple question with a surprising answer: what makes us laugh?',
    predict: { q: 'Why do you think people laugh most often?', o: ['To connect with other people', 'Because of jokes', 'When they are nervous'] } },
  story: { title: 'What makes us laugh?', chunks: [
    { text: 'Philosophers have argued about humour for more than two thousand years, and they still haven\'t reached an agreement. One popular explanation is the incongruity theory: we laugh when something breaks a pattern we expected. A joke sets up one story in our heads and then, in the punchline, reveals a different one. The pleasure comes from the sudden switch.',
      items: [
        { k: 'mc', q: 'According to the incongruity theory, why do we laugh?', o: ['Something breaks a pattern we expected.', 'We feel better than others.', 'We are tired.'], a: 0,
          why: '"we laugh when something breaks a pattern we expected"' },
        { k: 'find', q: 'Find a word that means "the final, funny line of a joke".', a: 'punchline', why: 'the punchline is the end of a joke.' }
      ] },
    { text: 'Yet most laughter has little to do with jokes at all. The psychologist Robert Provine spent years recording people laughing in everyday situations and found that only a small fraction of it followed anything funny. Most laughter came after ordinary remarks like "See you later". He also found that we are about thirty times more likely to laugh when we are with other people than when we are alone. Laughter, in other words, is mainly a social signal.',
      items: [
        { k: 'mc', q: 'What did Provine discover about most laughter?', o: ['It follows ordinary remarks, not jokes.', 'It always follows jokes.', 'It happens mostly when we are alone.'], a: 0,
          why: '"Most laughter came after ordinary remarks"' },
        { k: 'tf', q: 'We laugh more often when we are alone.', a: false, fix: 'We are about thirty times more likely to laugh with other people.', why: '"about thirty times more likely to laugh when we are with other people"' },
        { k: 'find', q: 'Find a word that means "a small part of something".', a: 'fraction', why: 'a fraction = a small part.' }
      ] },
    { text: 'This may explain why laughter is older than language. Chimpanzees and gorillas make breathy, panting sounds when they play and tickle each other, and researchers believe these are the ancestors of our own laughter. And if you have ever wondered why you can\'t tickle yourself, the answer lies in prediction: your brain knows exactly what your fingers are about to do, so the surprise, and with it the tickle, simply disappears.',
      items: [
        { k: 'mc', q: 'What do chimpanzees and gorillas do when they play?', o: ['They make breathy, panting sounds.', 'They tell each other jokes.', 'They stay silent.'], a: 0,
          why: '"make breathy, panting sounds when they play"' },
        { k: 'mc', q: 'Why can\'t we tickle ourselves?', o: ['The brain predicts the movement, so there is no surprise.', 'Our fingers are too weak.', 'We are not ticklish.'], a: 0,
          why: '"your brain knows exactly what your fingers are about to do"' },
        { k: 'find', q: 'Find a word that means "relatives or forms that existed long before".', a: 'ancestors', why: 'ancestors = those who came long before us.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the main point of the article?', o: ['Laughter is mostly about connecting with others, not jokes.', 'Jokes are the main cause of laughter.', 'Only humans can laugh.'], a: 0,
        why: 'Most laughter is social; jokes are only a small part.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'We are about thirty times more ___ to laugh with others than alone.', a: ['likely'], why: 'more likely to = there is a bigger chance that.' }
  ]
}
];
