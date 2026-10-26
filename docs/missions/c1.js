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
},
{
  id: 'c1g04', url: 'https://test-english.com/grammar-points/c1/advanced-modal-verbs-can-be-able-to-may-might/', type: 'grammar',
  title: 'can, be able to, may, might', dinner: 'What will you be able to do in five years that you can\'t do now?',
  hook: { q: 'Which animal can survive being frozen almost solid in winter?', o: ['The wood frog', 'The goldfish', 'The rabbit'], a: 0,
    reveal: '*The wood frog*! In winter, about two-thirds of the water in its body *can* turn to ice and its heart stops. In spring it thaws and *is able to* hop away as if nothing had happened.' },
  learn: { kind: 'rule', title: 'Ability and possibility, beyond the basics',
    lines: ['*can* has no infinitive or perfect form, so use *be able to*: I\'d love *to be able to* fly. I*\'ve* never *been able to* whistle.',
      'For one success on a particular occasion in the past, use *was able to / managed to*, not could: The fire spread fast, but everyone *was able to* get out. (*couldn\'t* is fine in the negative.)',
      '*may / might / could + have + past participle* for guesses about the past: She *might have missed* the bus.',
      '*may well / might well* = quite likely. *might as well* = there\'s no better option: It *may well* rain later. The shop\'s closed, so we *might as well* go home.'],
    ex: ['I *haven\'t been able to* sleep since the new puppy arrived.', 'He\'s not answering. He *may have left* his phone at home.'],
    he: 'ל-can אין צורת מקור או הווה מושלם, ולכן אומרים to be able to, will be able to, have been able to. להצלחה חד-פעמית בעבר: was able to או managed to, ולא could. may have או might have + V3 = ניחוש על העבר. might as well = "אין ברירה טובה יותר, אז בוא נ...".' },
  steps: [
    { name: 'Which form?', items: [
      { k: 'mc', q: 'I hope to ___ speak Spanish by the end of the year.', o: ['be able to', 'can', 'could'], a: 0, why: 'After to (hope to), use be able to: can has no infinitive.',
        he: 'אחרי to אי אפשר לשים can. אומרים to be able to.' },
      { k: 'mc', q: 'The flood was terrible, but luckily all the animals ___ escape.', o: ['were able to', 'could', 'can'], a: 0, why: 'One success on a particular occasion → were able to, not could.',
        he: 'could בעבר = יכולת כללית (I could swim at five). על הצלחה במקרה אחד: was או were able to.' },
      { k: 'mc', q: 'I ___ find my other trainer all morning. Where is it?', o: ['haven\'t been able to', 'can\'t', 'couldn\'t have'], a: 0, why: 'All morning, up to now → present perfect: haven\'t been able to.' },
      { k: 'mc', q: 'Noa isn\'t here yet. She ___ missed the bus.', o: ['may have', 'can have', 'must'], a: 0, why: 'A guess about the past → may have + past participle. (can have is not used for guesses like this.)' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'The last bus has gone, so we ___ as well walk home.', hint: '(a modal verb)', a: ['might', 'may'], why: 'might as well = there is no better option.' },
      { k: 'tf', q: '"After three hours, the climbers could reach the top."', a: false, fix: 'After three hours, the climbers were able to reach the top.',
        why: 'One success on a particular occasion → were able to / managed to, not could.' },
      { k: 'mc', q: 'Take an umbrella. It ___ well rain this afternoon.', o: ['may', 'can', 'must'], a: 0, why: 'may well = quite likely.' },
      { k: 'mc', q: '"Where\'s Omer?" "I\'m not sure. He ___ be in the library."', o: ['might', 'can', 'is able to'], a: 0,
        why: 'A guess about now → might (or may / could). can is not used for a guess about one situation.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Will you be able to come to my party?', why: 'Future ability → will be able to.' },
      { k: 'spot', s: 'Take a coat. It *can* well rain later.', fix: 'may', why: 'may well (or might well) = quite likely. can well is not used.' },
      { k: 'build', s: 'We might as well start without them.', why: 'might as well = there\'s no better option.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I have never *could* whistle, no matter how hard I try.', fix: 'been able to', why: 'can has no perfect form → have never been able to.' },
    { k: 'type', q: 'The test was hard, but in the end I ___ to finish it on time.', hint: '(manage, past)', a: ['managed', 'was able'],
      why: 'One success in the past → managed to / was able to.' },
    { k: 'mc', q: 'Which sentence is a guess about the past?', o: ['She might have taken the wrong train.', 'She might take the train.', 'She was able to take the train.'], a: 0,
      why: 'might have + past participle = a guess about the past.' }
  ]
},
{
  id: 'c1g05', url: 'https://test-english.com/grammar-points/c1/the-subjunctive-in-english-present-and-past/', type: 'grammar',
  title: 'The subjunctive', dinner: 'If you were the head teacher for a day, what would you change?',
  hook: { q: 'Which of these is correct in formal English, even though it looks strange?', o: ['The teacher insists that he be on time.', 'The teacher insist that he is on time.', 'The teacher insists that he been on time.'], a: 0,
    reveal: '*…that he be on time*! It\'s the subjunctive: after insist, demand or recommend, formal English uses the base form, for every person.' },
  learn: { kind: 'rule', title: 'Wishes, demands and unreal situations',
    lines: ['*Present subjunctive* = the base form (no -s, no was) after *insist, demand, suggest, recommend* + that, and after *It\'s essential / vital / important that*: The coach insists that every player *arrive* on time.',
      'Negative: *not* + base form: It\'s vital that he *not be* late. British English often uses *should* instead: …that he *should arrive* on time.',
      '*Past subjunctive were* for unreal situations, for every person: If I *were* you… I wish she *were* here. (*was* is common in speech, but *If I were you* is the fixed phrase.)',
      '*It\'s (high) time*, *would rather* + another person and *as if* take a past tense with a present meaning: It\'s time we *left*. I\'d rather you *didn\'t* tell anyone. He talks as if he *knew* everything.'],
    ex: ['The doctor recommended that she *rest* for a week.', 'I\'d rather you *came* with us.'],
    he: 'אחרי insist, suggest, recommend, demand + that בא הפועל בצורת הבסיס, בלי s גם בגוף שלישי: that he be, that she rest. במצב לא מציאותי ואחרי wish: were לכל הגופים (If I were you). אחרי It\'s time, I\'d rather ו-as if בא פועל בעבר, אבל המשמעות היא הווה.' },
  steps: [
    { name: 'Which form?', items: [
      { k: 'mc', q: 'The coach insists that every player ___ at training by five.', o: ['be', 'were', 'is being'], a: 0, why: 'insist that + base form: be, for every person.' },
      { k: 'mc', q: 'If I ___ you, I\'d apologise to her.', o: ['were', 'am', 'would be'], a: 0, why: 'An unreal situation → If I were you.',
        he: 'בעברית "אם הייתי אתה", אבל באנגלית אין would אחרי if: If I were you.' },
      { k: 'mc', q: 'It\'s high time we ___ home. It\'s nearly midnight.', o: ['went', 'will go', 'had gone'], a: 0, why: 'It\'s (high) time + past simple, with a present meaning.' },
      { k: 'mc', q: 'It is essential that every student ___ a copy of the form.', o: ['have', 'had', 'has had'], a: 0, why: 'It\'s essential that + base form: have (no -s).' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'I\'d rather you ___ tell Mum about the broken vase yet.', hint: '(do, negative)', a: ['didn\'t', 'did not'],
        why: 'would rather + another person + past simple: I\'d rather you didn\'t.' },
      { k: 'tf', q: '"The doctor recommended that Grandpa not eat so much salt."', a: true, why: 'The negative subjunctive: not + base form, with no do or does.' },
      { k: 'mc', q: 'Maya talks about football as if she ___ the coach, but she has never even played.', o: ['were', 'will be', 'has been'], a: 0,
        why: 'as if + were: it isn\'t true.' },
      { k: 'mc', q: 'I wish it ___ the weekend already.', o: ['were', 'will be', 'has been'], a: 0, why: 'wish + were: an unreal present.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'It\'s time you went to bed.', why: 'It\'s time + past simple, with a present meaning.' },
      { k: 'spot', s: 'The teacher demanded that he *stops* talking at once.', fix: 'stop', why: 'demand that + base form: stop (no -s).' },
      { k: 'build', s: 'If I were you, I would ask for help.', why: 'If I were you = advice about an unreal situation.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'It\'s high time you *clean* your room!', fix: 'cleaned', why: 'It\'s high time + past simple: cleaned.' },
    { k: 'type', q: 'The doctor insisted that Grandma ___ in bed for a few days.', hint: '(stay)', a: ['stay', 'should stay'],
      why: 'insist that + base form: stay (or should stay).' },
    { k: 'mc', q: 'Which sentence is about something that is NOT true?', o: ['If I were the captain, I\'d pick you.', 'When I was the captain, I picked you.', 'As the captain, I picked you.'], a: 0,
      why: 'If I were = an unreal situation: I\'m not the captain.' }
  ]
},
{
  id: 'c1g06', url: 'https://test-english.com/grammar-points/c1/the-perfect-tenses-forms-and-uses/', type: 'grammar',
  title: 'The perfect tenses', dinner: 'What will you have learnt by the end of this school year?',
  hook: { q: 'By the time you are 80, about how many years will you have spent asleep?', o: ['About 10', 'About 26', 'About 40'], a: 1,
    reveal: 'About *26 years*! By 80, you *will have slept* for about a third of your life. That\'s the future perfect.' },
  learn: { kind: 'rule', title: 'Looking back from a point in time',
    lines: ['Every perfect tense is *have + past participle* and looks back from a point in time: the *present perfect* from now, the *past perfect* from a past moment, the *future perfect* from a future moment.',
      '*Present perfect* for unfinished time and recent news: I*\'ve seen* three films this week. *Present perfect continuous* for a long activity with a result now: I*\'m* tired. I*\'ve been studying* all day.',
      '*Future perfect* (will have done) for something finished before a future time: By June, we*\'ll have finished* the course. *Future perfect continuous* for duration: In May, I*\'ll have been learning* the piano for five years.',
      'The perfect also has an infinitive and an -ing form: *to have done*, *having done*: She seems *to have forgotten*. *Having finished* my homework, I went out.'],
    ex: ['This is the first time I*\'ve tried* sushi.', 'By the time you read this, I*\'ll have arrived* in London.'],
    he: 'בעברית אין זמנים מושלמים, אבל באנגלית הם מסתכלים אחורה מנקודת זמן: present perfect מעכשיו, past perfect מרגע בעבר, future perfect מרגע בעתיד. It\'s the first time + present perfect, ולא present simple: It\'s the first time I\'ve been here.' },
  steps: [
    { name: 'Which perfect?', items: [
      { k: 'mc', q: 'By the end of next week, we ___ all our exams.', o: ['will have finished', 'have finished', 'had finished'], a: 0, why: 'Finished before a future time → future perfect.' },
      { k: 'mc', q: 'This is the first time I ___ on a plane.', o: ['\'ve been', '\'m', 'was'], a: 0, why: 'It\'s the first time + present perfect.',
        he: 'בעברית "זו הפעם הראשונה שאני טס", בהווה, אבל באנגלית: It\'s the first time I\'ve flown.' },
      { k: 'mc', q: 'You look exhausted! ___ you been running?', o: ['Have', 'Had', 'Did'], a: 0, why: 'A long activity with a result you can see now → have been running.' },
      { k: 'mc', q: 'In September, my grandparents ___ married for fifty years.', o: ['will have been', 'have been', 'will be being'], a: 0, why: 'Duration up to a future time → will have been.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'She seems to ___ forgotten our meeting. She isn\'t answering.', a: ['have'], why: 'Perfect infinitive: to have + past participle, about the past.' },
      { k: 'tf', q: '"I know Tamar since we were in kindergarten."', a: false, fix: 'I have known Tamar since we were in kindergarten.',
        why: 'From a past time up to now → present perfect: have known.', he: 'בעברית "אני מכירה אותה מאז...", בהווה. באנגלית: I have known her since...' },
      { k: 'mc', q: '___ the whole series in one weekend, Gal was ready for season two.', o: ['Having watched', 'Have watched', 'To have watched'], a: 0,
        why: 'Having + past participle = after doing this.' },
      { k: 'mc', q: 'When we got to the cinema, the film ___, so we missed the beginning.', o: ['had already started', 'has already started', 'already starts'], a: 0,
        why: 'Earlier than a past moment → past perfect.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'By next summer, I will have saved enough money.', why: 'Finished before a future time → will have saved.' },
      { k: 'spot', s: 'It\'s the second time I *lose* my keys this month!', fix: 'have lost', why: 'It\'s the second time + present perfect: I have lost.' },
      { k: 'build', s: 'How long have you been learning English?', why: 'Duration up to now → have been learning.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'By the time Dad got home, we *have* eaten all the pizza.', fix: 'had', why: 'Earlier than a past moment (Dad got home) → had eaten.' },
    { k: 'type', q: 'By 2040, I ___ have finished school.', hint: '(future)', a: ['will', '\'ll'], why: 'Finished before a future time → will have finished.' },
    { k: 'mc', q: 'Which sentence is about a long activity with a result now?', o: ['I\'m out of breath because I\'ve been running.', 'I ran in the park yesterday.', 'I\'ll have run ten kilometres by noon.'], a: 0,
      why: 'Present perfect continuous: a long activity, and the result (out of breath) is now.' }
  ]
},
{
  id: 'c1g07', url: 'https://test-english.com/grammar-points/c1/advanced-participle-clauses/', type: 'grammar',
  title: 'Participle clauses', dinner: 'What do you love doing most once your homework is finished?',
  hook: { q: 'Which is a shorter way to say "Because I didn\'t know the way, I asked a police officer"?', o: ['Not knowing the way, I asked a police officer.', 'Knowing not the way, I asked a police officer.', 'I not knowing the way asked a police officer.'], a: 0,
    reveal: '*Not knowing the way, …*: a participle clause! It packs the reason into one short phrase, and good writers love it.' },
  learn: { kind: 'rule', title: 'Saying more with fewer words',
    lines: ['*-ing clause* for an action at the same time, or a reason: *Walking* home, I saw a fox. *Feeling* tired, she went to bed early.',
      '*Having + past participle* for an action that came first: *Having lost* the map, we had to ask for directions.',
      '*Past participle clause* for a passive meaning: *Written* in a hurry, the essay was full of mistakes. (= Because it was written…)',
      'Both parts must have the same subject: *Running for the bus, my bag fell* is wrong (the bag wasn\'t running). Say: *Running for the bus, I dropped my bag.* Negative: *Not* + -ing: *Not wanting* to wake her, I tiptoed out.'],
    ex: ['*Having trained* all year, Itai was ready for the race.', 'The cake, *baked* by my sister, disappeared in minutes.'],
    he: 'ing בתחילת משפט = "בזמן ש..." או "מכיוון ש...". Having + V3 = "אחרי ש...". V3 לבד = סביל (Written in English = שנכתב באנגלית). חשוב: לשני החלקים יש אותו נושא. שלילה: Not + ing, ולא Don\'t.' },
  steps: [
    { name: 'Which form?', items: [
      { k: 'mc', q: '___ the bus, we had to walk all the way to school.', o: ['Having missed', 'Missed', 'To miss'], a: 0, why: 'Missing the bus came first → Having missed.' },
      { k: 'mc', q: '___ in 1890, the bridge is still used every day.', o: ['Built', 'Building', 'Having built'], a: 0, why: 'The bridge was built (passive) → past participle: Built.' },
      { k: 'mc', q: '___ what to say, Shira just smiled.', o: ['Not knowing', 'Don\'t knowing', 'Knowing not'], a: 0, why: 'Negative participle clause → Not + -ing.',
        he: 'השלילה היא Not לפני ה-ing, בלי do.' },
      { k: 'mc', q: 'Which sentence is correct?', o: ['Opening the box, I found a puppy inside.', 'Opening the box, a puppy was inside.', 'Opened the box, I found a puppy inside.'], a: 0,
        why: 'The subject must be the one who opened the box: I.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: '___ finished his homework, Ben went out to play basketball.', hint: '(have)', a: ['having'], why: 'He finished first → Having finished.' },
      { k: 'tf', q: '"Looking out of the window, the mountains were beautiful."', a: false, fix: 'Looking out of the window, I saw the beautiful mountains.',
        why: 'The mountains weren\'t looking: the subject must be the person who looked.' },
      { k: 'mc', q: 'The pictures ___ by the students will be shown at the school fair.', o: ['painted', 'painting', 'having painted'], a: 0,
        why: 'Pictures that were painted (passive) → painted.' },
      { k: 'mc', q: '___ tired after the long hike, the children fell asleep in the car.', o: ['Feeling', 'Felt', 'To feel'], a: 0, why: 'Feeling = because they felt (a reason).' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Having said goodbye, we got into the car.', why: 'Having + past participle = after we said goodbye.' },
      { k: 'spot', s: '*Finish* the race, the runners lay down on the grass.', fix: 'Having finished', why: 'They finished first → Having finished.' },
      { k: 'build', s: 'Not wanting to be late, she took a taxi.', why: 'Not + -ing = because she didn\'t want to be late.' }
    ] }
  ],
  use: [
    { k: 'teach', s: '*Wrote* in simple English, the book is easy to read.', fix: 'Written', why: 'The book was written (passive) → past participle: Written.' },
    { k: 'type', q: '___ in the sun all day, the chocolate had completely melted.', hint: '(leave)', a: ['left', 'having been left'], why: 'The chocolate was left (passive) → Left.' },
    { k: 'mc', q: 'What does "Having eaten, we went for a walk" mean?', o: ['We ate first, then we walked.', 'We ate while we walked.', 'We walked, then we ate.'], a: 0,
      why: 'Having + past participle = this happened first.' }
  ]
},
{
  id: 'c1g08', url: 'https://test-english.com/grammar-points/c1/advanced-word-order/', type: 'grammar',
  title: 'Word order for effect', dinner: 'What is something you have never done but would love to try?',
  hook: { q: 'Yoda in Star Wars says, "Powerful you have become." What is unusual about it?', o: ['The word order', 'The tense', 'The spelling'], a: 0,
    reveal: '*The word order*! Yoda moves *powerful* to the front. English usually doesn\'t, but at C1 you can move words for drama: *Never have I* seen such a thing!' },
  learn: { kind: 'rule', title: 'Inversion and adverb position',
    lines: ['After a negative or limiting phrase at the start, the verb comes before the subject, as in a question: *Never have I* seen such a mess. *Not only did she* win, she broke the record.',
      '*Hardly … when* and *No sooner … than* for one thing straight after another: *No sooner had we* sat down *than* the phone rang.',
      '*Only then / Only after / Not until* invert the main clause: *Only after* the match *did I* realise I was hurt. *Little did he know* = he had no idea.',
      'Adverbs like *never, always, also, even, already* go before the main verb, but after *be* and after the first auxiliary: She *has never* been late. He *is always* hungry. I *even tried* singing.'],
    ex: ['*Rarely do* we see snow in Tel Aviv.', '*Little did* Ori *know* that his friends had planned a party.'],
    he: 'אחרי ביטוי שלילי בתחילת משפט (Never, Not only, Rarely, Little) הסדר מתהפך כמו בשאלה: Never have I, Not only did she. בעברית אין היפוך כזה, ולכן קל לשכוח את do או did. תואר תדירות בא לפני הפועל הראשי: I never eat, ולא I eat never.' },
  steps: [
    { name: 'Turn it around', items: [
      { k: 'mc', q: 'Never ___ such a beautiful sunset.', o: ['have I seen', 'I have seen', 'I saw'], a: 0, why: 'Never at the start → inversion: have I seen.' },
      { k: 'mc', q: 'Not only ___ the cake, he also made the decorations.', o: ['did he bake', 'he baked', 'baked he'], a: 0, why: 'Not only at the start → did + subject + verb.' },
      { k: 'mc', q: 'No sooner had we left the house ___ it started to pour.', o: ['than', 'when', 'that'], a: 0, why: 'No sooner … than.',
        he: 'No sooner תמיד עם than, ו-Hardly תמיד עם when.' },
      { k: 'mc', q: 'Which sentence has the adverb in the right place?', o: ['She has never been to Eilat.', 'She has been never to Eilat.', 'Never she has been to Eilat.'], a: 0,
        why: 'never goes after the first auxiliary (has). At the start it needs inversion: Never has she been…' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'Little ___ we know that the teacher was listening.', hint: '(do, past)', a: ['did'], why: 'Little at the start → did + subject + verb.' },
      { k: 'tf', q: '"Only after the game I realised my phone was missing."', a: false, fix: 'Only after the game did I realise my phone was missing.',
        why: 'Only after … at the start → inversion in the main clause: did I realise.' },
      { k: 'mc', q: 'Hardly had I closed my eyes ___ the alarm went off.', o: ['when', 'than', 'then'], a: 0, why: 'Hardly … when.' },
      { k: 'mc', q: 'Rarely ___ my brother tidy his room without being asked.', o: ['does', 'is', 'has'], a: 0, why: 'Rarely at the start → does + subject + base form (tidy).' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Not only did Lior score, he also saved a penalty.', why: 'Not only + did + subject + verb.' },
      { k: 'spot', s: 'Hardly had I sat down *than* the teacher called my name.', fix: 'when', why: 'Hardly goes with when. (No sooner goes with than.)' },
      { k: 'build', s: 'Only then did I understand the joke.', why: 'Only then at the start → did I understand.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'No sooner had the bell rung *when* everyone ran outside.', fix: 'than', why: 'No sooner goes with than.' },
    { k: 'type', q: 'Not until I got home ___ I notice the hole in my jumper.', hint: '(do, past)', a: ['did'], why: 'Not until … → inversion in the main clause: did I notice.' },
    { k: 'mc', q: 'Which sentence means "He had no idea"?', o: ['Little did he know.', 'He knew a little.', 'Little he knew.'], a: 0,
      why: 'Little did he know = he had no idea at all.' }
  ]
},
{
  id: 'c1g09', url: 'https://test-english.com/grammar-points/c1/prepositions-position-and-advanced-patterns/', type: 'grammar',
  title: 'Prepositions in the right place', dinner: 'What are you most looking forward to this month?',
  hook: { q: 'Is it wrong to end a sentence with a preposition, as in "Who are you talking to?"', o: ['No, it\'s natural English', 'Yes, always', 'Only in questions'], a: 0,
    reveal: '*No!* The "rule" was invented by writers who copied Latin grammar. A famous joke shows how silly it sounds: "That is the kind of nonsense up with which I will not put!"' },
  learn: { kind: 'rule', title: 'Where prepositions go, and what follows them',
    lines: ['In questions and relative clauses the preposition usually goes to the end: *Who* are you waiting *for*? That\'s the song I told you *about*. Formal English puts it before *whom / which*: the person *to whom* I spoke.',
      'It also stays at the end in the passive and after an infinitive: Nobody likes *being laughed at*. I need a pen *to write with*.',
      'A verb after a preposition takes *-ing*: She\'s good *at drawing*. Thanks *for helping*. That includes *to* when it is a preposition: I look forward *to seeing* you. I\'m used *to getting* up early.',
      'Learn the fixed patterns: *prevent someone from*, *accuse someone of*, *congratulate someone on*, *depend on*, *capable of*, *afraid of*.'],
    ex: ['What are you so worried *about*?', 'Dad congratulated me *on winning* the chess tournament.'],
    he: 'בעברית מילת היחס באה בתחילת השאלה (על מה אתה חושב?), ובאנגלית היא עוברת לסוף: What are you thinking about? אחרי מילת יחס בא פועל עם ing, גם אחרי to במבנים כמו look forward to ו-be used to.' },
  steps: [
    { name: 'Which one?', items: [
      { k: 'mc', q: 'Who did you sit ___ on the bus?', o: ['next to', 'next', 'beside of'], a: 0, why: 'sit next to someone; in a question, next to goes to the end.' },
      { k: 'mc', q: 'This is the book I told you ___.', o: ['about', 'for', 'with'], a: 0, why: 'tell someone about something; the preposition stays at the end.' },
      { k: 'mc', q: 'I\'m really looking forward ___ you at the weekend.', o: ['to seeing', 'to see', 'for seeing'], a: 0, why: 'look forward to + -ing: to is a preposition here.',
        he: 'כאן to היא מילת יחס, ולא חלק מהמקור, ולכן אחריה ing: look forward to seeing.' },
      { k: 'mc', q: 'The heavy rain prevented us ___ the match.', o: ['from finishing', 'to finish', 'of finishing'], a: 0, why: 'prevent someone from + -ing.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'My little sister is afraid ___ the dark.', a: ['of'], why: 'afraid of.', he: 'בעברית "מפחדת מ...", אבל באנגלית afraid of, ולא afraid from.' },
      { k: 'tf', q: '"Nobody enjoys being shouted."', a: false, fix: 'Nobody enjoys being shouted at.', why: 'shout at someone: in the passive, at stays at the end.' },
      { k: 'mc', q: 'The coach accused Eitan ___ not trying hard enough.', o: ['of', 'for', 'with'], a: 0, why: 'accuse someone of + -ing.' },
      { k: 'mc', q: 'Formal: The teacher ___ I sent my essay never replied.', o: ['to whom', 'whom to', 'to who'], a: 0, why: 'Formal English: the preposition goes before whom: to whom.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'What are you laughing at?', why: 'laugh at something; in a question, at goes to the end.' },
      { k: 'spot', s: 'I\'m not used to *wake* up so early.', fix: 'waking', why: 'be used to + -ing: to is a preposition here.' },
      { k: 'build', s: 'I need a chair to sit on.', why: 'sit on a chair → a chair to sit on: the preposition stays at the end.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Thanks for *help* me with my science project!', fix: 'helping', why: 'After a preposition (for) → -ing: helping.' },
    { k: 'type', q: 'Whether we go to the beach depends ___ the weather.', a: ['on', 'upon'], why: 'depend on.' },
    { k: 'mc', q: 'Which question sounds natural in everyday English?', o: ['Who are you waiting for?', 'For who are you waiting?', 'Who are you waiting?'], a: 0,
      why: 'In everyday English the preposition goes to the end. (For whom are you waiting? is very formal.)' }
  ]
},
{
  id: 'c1g10', url: 'https://test-english.com/grammar-points/c1/subject-verb-agreement-advanced-rules/', type: 'grammar',
  title: 'Singular or plural verb?', dinner: 'Which subject is the hardest for you this year, and why?',
  hook: { q: 'In British English, which is correct about the football team: "England is winning" or "England are winning"?', o: ['Both', 'Only "is"', 'Only "are"'], a: 0,
    reveal: '*Both*! British commentators usually say "England *are* winning", thinking of the players. Americans prefer the singular.' },
  learn: { kind: 'rule', title: 'When the verb agrees, and with what',
    lines: ['Group nouns (*team, family, class, government*): British English uses a singular or a plural verb. But *the police*, *people* and *cattle* are always plural: The police *are* here.',
      'Some words end in -s but are singular: *news, maths, physics, athletics*: The news *is* good. An amount of money, time or distance is singular too: Ten kilometres *is* a long way.',
      '*each / every + singular noun* and *everyone, nobody* take a singular verb: Every student *has* a locker. With *either … or / neither … nor*, the verb agrees with the nearer subject: Neither my parents nor my brother *is* coming.',
      '*A number of* + plural verb, but *the number of* + singular: A number of kids *are* ill. The number of kids *is* growing.'],
    ex: ['Maths *is* my favourite subject.', 'Fish and chips *is* a classic British dish.'],
    he: 'news ו-maths נראות כמו רבים, אבל הפועל אחריהן ביחיד: The news is. בעברית "המשטרה הגיעה" ביחיד, אבל באנגלית police תמיד ברבים: The police are. סכום כסף, זמן או מרחק מקבל פועל ביחיד: Twenty shekels is too much.' },
  steps: [
    { name: 'is or are?', items: [
      { k: 'mc', q: 'The news about the school trip ___ really exciting!', o: ['is', 'are'], a: 0, why: 'news is uncountable and singular.',
        he: 'news היא לא צורת רבים: The news is, ולא are.' },
      { k: 'mc', q: 'The police ___ looking for the owner of the lost dog.', o: ['are', 'is'], a: 0, why: 'police always takes a plural verb.' },
      { k: 'mc', q: 'Every boy and girl in the class ___ a tablet.', o: ['has', 'have'], a: 0, why: 'every + singular noun → singular verb, even with and.' },
      { k: 'mc', q: 'A number of students ___ absent today because of the flu.', o: ['are', 'is'], a: 0, why: 'a number of (= many) + plural verb.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'Three hours ___ too long to spend on one game!', hint: '(be)', a: ['is'], why: 'An amount of time is one whole → singular: is.' },
      { k: 'tf', q: '"Physics are the hardest subject for me."', a: false, fix: 'Physics is the hardest subject for me.', why: 'physics ends in -s but is singular.' },
      { k: 'mc', q: 'Neither the teachers nor the head ___ happy about the noise.', o: ['was', 'were'], a: 0, why: 'neither … nor: the verb agrees with the nearer subject (the head) → was.' },
      { k: 'mc', q: 'The number of kids who walk to school ___ falling.', o: ['is', 'are'], a: 0, why: 'the number of + singular verb.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Everyone in my family loves pizza.', why: 'everyone takes a singular verb: loves.' },
      { k: 'spot', s: 'Each of the players *have* a number on their shirt.', fix: 'has', why: 'each of + plural noun → singular verb: has.' },
      { k: 'build', s: 'Fifty shekels is a lot of money.', why: 'An amount of money is one whole → is.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Athletics *are* my favourite sport to watch.', fix: 'is', why: 'athletics ends in -s but is singular: is.' },
    { k: 'type', q: 'Either my mum or my dad ___ going to pick us up.', hint: '(be)', a: ['is'], why: 'either … or: the nearer subject (my dad) is singular → is.' },
    { k: 'mc', q: 'Which sentence is correct?', o: ['The cattle are in the field.', 'The cattle is in the field.', 'The cattles are in the field.'], a: 0,
      why: 'cattle has no -s and always takes a plural verb.' }
  ]
},
{
  id: 'c1v03', url: 'https://test-english.com/vocabulary/c1/vague-language-imprecision-c1-english-vocabulary/', type: 'vocabulary',
  title: 'Being vague on purpose', dinner: 'Roughly how many hours did you spend outside this week, give or take?',
  hook: { q: 'Which of these is a real English word for "a lot, but I\'m not counting"?', o: ['umpteen', 'manyteen', 'lotsteen'], a: 0,
    reveal: '*Umpteen*! It probably began as soldiers\' slang more than a hundred years ago. "I\'ve told you umpteen times!" means very many times, and nobody knows exactly how many.' },
  learn: { kind: 'words', title: 'Words for when you can\'t (or won\'t) be exact', words: [
    { w: 'sort of', d: 'a little, in a way (makes what you say softer)', ex: 'The film was *sort of* scary, but mostly funny.' },
    { w: '-ish', d: 'about, more or less (after a time, an age or an adjective)', ex: 'Let\'s meet at *sevenish*.' },
    { w: 'or so', d: 'about (after a number)', ex: 'It takes ten minutes *or so* to get there.' },
    { w: 'give or take', d: 'plus or minus a little', ex: 'The drive is two hours, *give or take* ten minutes.' },
    { w: 'and stuff like that', d: 'and similar things (informal)', ex: 'We played board games, card games *and stuff like that*.' },
    { w: 'thingy', d: 'a word for an object whose name you have forgotten (informal)', ex: 'Pass me the *thingy* for opening tins.' },
    { w: 'roughly', d: 'approximately, not exactly (fine in writing too)', ex: 'There were *roughly* fifty people at the party.' },
    { w: 'umpteen', d: 'very many (informal)', ex: 'I\'ve asked you *umpteen* times to close the door!' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'Plus or minus a little:', o: ['give or take', 'umpteen', 'thingy'], a: 0, why: 'give or take = plus or minus a little.' },
      { k: 'mc', q: 'Very many (informal):', o: ['umpteen', 'roughly', 'sort of'], a: 0, why: 'umpteen = very many, without counting.' },
      { k: 'mc', q: 'A word for an object whose name you have forgotten:', o: ['thingy', 'or so', 'give or take'], a: 0, why: 'thingy = the thing whose name you can\'t remember.' },
      { k: 'mc', q: 'Approximately (a neutral word, fine in an essay):', o: ['roughly', 'thingy', 'and stuff like that'], a: 0, why: 'roughly = approximately. thingy and "and stuff like that" are too informal for an essay.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Is it vague about a number or time, or about things and ideas?', g: ['numbers and times', 'things and ideas'],
        w: [['or so', 0], ['give or take', 0], ['roughly', 0], ['umpteen', 0], ['sort of', 1], ['thingy', 1], ['and stuff like that', 1]],
        why: 'numbers and times: or so, give or take, roughly, umpteen · things and ideas: sort of, thingy, and stuff like that' },
      { k: 'hear', say: 'Let\'s meet at the park at fourish.', q: 'When will they meet?', o: ['at about four o\'clock', 'at exactly four o\'clock', 'in four hours'], a: 0,
        why: '-ish after a time = about that time.', he: 'fourish = בסביבות ארבע. הסיומת ish מוסיפה "בערך", כמו "ארבע בערך".' },
      { k: 'spell', w: 'roughly', clue: 'Approximately, not exactly.', why: 'roughly: r-o-u-g-h-l-y. The gh sounds like "f", as in enough.' },
      { k: 'mc', q: 'The museum is twenty minutes ___ from here, depending on the traffic.', o: ['or so', 'sort of', 'thingy'], a: 0, why: 'or so comes after a number: twenty minutes or so.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Planning the class picnic',
        t: 'The picnic starts at elevenish and should last three hours, give or [1]. We need [2] thirty sandwiches, plus drinks, crisps and [3] like that. Oh, and someone has to bring the [4], you know, the big blue box that keeps the food cold.',
        gaps: [
          { o: ['take', 'give', 'leave'], a: 0, why: 'The fixed phrase is give or take.' },
          { o: ['roughly', 'umpteen', 'sort of'], a: 0, why: 'roughly + a number = about thirty. umpteen already means a big number, so "umpteen thirty" is impossible.' },
          { o: ['stuff', 'thingy', 'ish'], a: 0, why: 'and stuff like that = and similar things.' },
          { o: ['thingy', 'umpteen', 'roughly'], a: 0, why: 'The writer can\'t remember the name of the cool box → thingy.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'There were *exactly* fifty people at the match, give or take.', fix: 'roughly', why: 'give or take means the number isn\'t exact, so "exactly" doesn\'t fit: roughly fifty, give or take.' },
    { k: 'type', q: 'I\'ve asked you ___ times to tidy your room!', a: ['umpteen'], why: 'umpteen times = very many times (informal, often a little annoyed).' }
  ]
},
{
  id: 'c1v04', url: 'https://test-english.com/vocabulary/c1/idiomatic-infinitive-phrases-c1-english-vocabulary/', type: 'vocabulary',
  title: 'To cut a long story short', dinner: 'To be honest, what was the best part of your day?',
  hook: { q: 'Which famous line from Shakespeare starts with "to" + a verb?', o: ['"To be, or not to be"', '"All the world\'s a stage"', '"Romeo, Romeo, wherefore art thou Romeo?"'], a: 0,
    reveal: '*"To be, or not to be"*: Hamlet\'s famous question. English loves phrases built on to + a verb, and many of them have become fixed expressions you hear every day.' },
  learn: { kind: 'words', title: 'Fixed phrases with to + verb', words: [
    { w: 'to be honest', d: 'I\'ll tell you what I really think', ex: '*To be honest*, I didn\'t enjoy the film.' },
    { w: 'to cut a long story short', d: 'to give only the main point', ex: '*To cut a long story short*, we missed the bus.' },
    { w: 'to put it mildly', d: 'the truth is even stronger than my words', ex: 'The test was hard, *to put it mildly*.' },
    { w: 'to make matters worse', d: 'adding one more problem', ex: 'It was raining and, *to make matters worse*, I\'d lost my umbrella.' },
    { w: 'to be on the safe side', d: 'just in case, to avoid any risk', ex: 'Take a jumper *to be on the safe side*.' },
    { w: 'to top it all', d: 'and the most surprising thing of all (good or bad)', ex: 'We won the cup and, *to top it all*, the coach bought us pizza.' },
    { w: 'to begin with', d: 'first (when you list reasons)', ex: 'I can\'t come. *To begin with*, I have a test tomorrow.' },
    { w: 'needless to say', d: 'as you would expect', ex: 'He didn\'t study at all. *Needless to say*, he failed.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'Adding one more problem:', o: ['to make matters worse', 'to be on the safe side', 'to begin with'], a: 0, why: 'to make matters worse = one more problem on top of the others.' },
      { k: 'mc', q: 'Just in case, to avoid any risk:', o: ['to be on the safe side', 'to put it mildly', 'needless to say'], a: 0, why: 'to be on the safe side = just in case.' },
      { k: 'mc', q: 'Giving only the main point of a story:', o: ['to cut a long story short', 'to be honest', 'to top it all'], a: 0, why: 'to cut a long story short = skipping the details.' },
      { k: 'mc', q: 'As you would expect:', o: ['needless to say', 'to make matters worse', 'to be on the safe side'], a: 0, why: 'needless to say = I don\'t really need to tell you this.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Does the phrase add a point, or say how you are speaking?', g: ['adds a point', 'how I\'m speaking'],
        w: [['to make matters worse', 0], ['to top it all', 0], ['to begin with', 0], ['to be honest', 1], ['to put it mildly', 1], ['to cut a long story short', 1]],
        why: 'adds a point: to make matters worse, to top it all, to begin with · how I\'m speaking: honestly, mildly, briefly' },
      { k: 'hear', say: 'The weather on our holiday was bad, to put it mildly.', q: 'What does the speaker really mean?', o: ['The weather was terrible.', 'The weather was only a little bad.', 'The weather was good.'], a: 0,
        why: 'to put it mildly = the truth is worse than the words.' },
      { k: 'spell', w: 'matters', clue: 'To make ___ worse = adding one more problem.', why: 'matters: m-a-t-t-e-r-s, with a double t.' },
      { k: 'mc', q: 'I\'ll take an extra phone charger, ___.', o: ['to be on the safe side', 'to put it mildly', 'needless to say'], a: 0, why: 'Just in case → to be on the safe side.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'A trip to forget',
        t: 'Our class trip to the zoo started badly. [1], the bus was an hour late. Then, to make [2] worse, it began to pour. To [3] it all, the penguins were hiding! To cut a long story [4], we went home early and watched a nature film instead.',
        gaps: [
          { o: ['To begin with', 'To be on the safe side', 'To put it mildly'], a: 0, why: 'The first problem in a list → to begin with.' },
          { o: ['matters', 'mildly', 'honest'], a: 0, why: 'to make matters worse = one more problem.' },
          { o: ['top', 'cut', 'put'], a: 0, why: 'to top it all = and on top of everything else.' },
          { o: ['short', 'long', 'small'], a: 0, why: 'to cut a long story short = to give only the main point.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'To be *honestly*, I prefer the book to the film.', fix: 'honest', why: 'to be + an adjective: to be honest.', he: 'אחרי to be בא שם תואר: to be honest, ולא to be honestly. זה כמו "אם לומר את האמת".' },
    { k: 'type', q: 'He didn\'t open a book all week. ___ to say, he failed the test.', a: ['needless'], why: 'needless to say = as you would expect.' }
  ]
},
{
  id: 'c1v05', url: 'https://test-english.com/vocabulary/c1/adverb-adjective-collocations-c1-english-vocabulary/', type: 'vocabulary',
  title: 'Perfect pairs: adverb + adjective', dinner: 'What is wildly popular at your school right now?',
  hook: { q: 'People say "bitterly disappointed" but never "bitterly happy". Why?', o: ['Some words have favourite partners', 'It is a grammar rule about bitter', 'Bitter can only describe food'], a: 0,
    reveal: 'Words have *favourite partners*, called collocations. There is no rule behind them: we say "fast food" but "a quick shower". You simply learn the pairs, and they make your English sound natural.' },
  learn: { kind: 'words', title: 'Adverbs and their partners', words: [
    { w: 'bitterly disappointed', d: 'extremely disappointed', ex: 'We were *bitterly disappointed* when the concert was cancelled.' },
    { w: 'highly unlikely', d: 'almost certainly not going to happen', ex: 'It\'s *highly unlikely* to snow in Eilat.' },
    { w: 'fully aware', d: 'knowing something completely', ex: 'I\'m *fully aware* that the essay is due tomorrow.' },
    { w: 'painfully shy', d: 'so shy that it is hard for you', ex: 'As a child, he was *painfully shy*.' },
    { w: 'wildly popular', d: 'liked by a huge number of people', ex: 'The game became *wildly popular* almost overnight.' },
    { w: 'deeply moved', d: 'feeling strong emotion, often because of kindness', ex: 'We were *deeply moved* by Grandpa\'s speech.' },
    { w: 'utterly ridiculous', d: 'completely silly', ex: 'A winter coat in August? That\'s *utterly ridiculous*!' },
    { w: 'blissfully unaware', d: 'happily not knowing about a problem', ex: 'The cat slept on, *blissfully unaware* of the storm.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'It\'s ___ unlikely that school will be cancelled tomorrow.', o: ['highly', 'bitterly', 'blissfully'], a: 0, why: 'highly unlikely = almost certainly not.' },
      { k: 'mc', q: 'The new phone game is ___ popular: everyone at school plays it.', o: ['wildly', 'painfully', 'fully'], a: 0, why: 'wildly popular = liked by a huge number of people.' },
      { k: 'mc', q: 'She was ___ disappointed to miss the final by one point.', o: ['bitterly', 'wildly', 'blissfully'], a: 0, why: 'bitterly disappointed = extremely disappointed.',
        he: 'בעברית אומרים "מאוכזב מאוד", ובאנגלית הצירוף הטבעי הוא bitterly disappointed.' },
      { k: 'mc', q: 'Are you ___ aware of the risks of this hike?', o: ['fully', 'wildly', 'bitterly'], a: 0, why: 'fully aware = knowing completely.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Which adjective does each adverb go with?', g: ['disappointed', 'aware', 'popular'],
        w: [['bitterly', 0], ['fully', 1], ['perfectly', 1], ['wildly', 2]],
        why: 'bitterly disappointed · fully / perfectly aware · wildly popular' },
      { k: 'hear', say: 'He was blissfully unaware that his brother had eaten his chocolate.', q: 'What did he know about the chocolate?', o: ['nothing: he had no idea', 'everything', 'that it was in the fridge'], a: 0,
        why: 'blissfully unaware = happily not knowing.' },
      { k: 'spell', w: 'utterly', clue: 'Completely: ___ ridiculous.', why: 'utterly: u-t-t-e-r-l-y, with a double t.' },
      { k: 'mc', q: 'At parties he hides in the kitchen; he\'s ___ shy.', o: ['painfully', 'wildly', 'fully'], a: 0, why: 'painfully shy = so shy that it is hard for him.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'The school play',
        t: 'Noa used to be [1] shy, so nobody expected her to get the lead role. On opening night her grandparents were [2] moved, and the play was so [3] popular that the school added two more shows. Her little brother, [4] unaware of all the fuss, fell asleep in the second row.',
        gaps: [
          { o: ['painfully', 'highly', 'fully'], a: 0, why: 'painfully shy = very, very shy.' },
          { o: ['deeply', 'wildly', 'highly'], a: 0, why: 'deeply moved = full of emotion.' },
          { o: ['wildly', 'bitterly', 'painfully'], a: 0, why: 'wildly popular = loved by a lot of people.' },
          { o: ['blissfully', 'bitterly', 'highly'], a: 0, why: 'blissfully unaware = happily not knowing.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Homework on your birthday? That\'s *highly* ridiculous!', fix: 'utterly', why: 'The partner of ridiculous is utterly (or completely), not highly.' },
    { k: 'type', q: 'I\'m ___ aware that I\'m late. Sorry!', a: ['fully', 'well', 'perfectly', 'acutely', 'very'], why: 'fully / well / perfectly aware = I know it completely.' }
  ]
},
{
  id: 'c1l04', url: 'https://test-english.com/listening/c1/social-medias-impact-on-teenage-brains-c1-english-listening-test/', type: 'listening',
  title: 'Social media and the teenage brain', dinner: 'Which app could you take a break from for a week?',
  hook: { q: 'In a study, teenagers looked at photos inside a brain scanner. What made their brain\'s reward centre most active?', o: ['Photos with lots of likes', 'Photos of food', 'Black and white photos'], a: 0,
    reveal: '*Photos with lots of likes*! In a 2016 study in Los Angeles, the same reward area that reacts to sweets or winning a prize became more active, and the teens were more likely to like a photo that already had many likes.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'the reward system', d: 'the part of the brain that makes us feel good and want more' },
    { w: 'an impulse', d: 'a sudden wish to do something, without thinking' },
    { w: 'on autopilot', d: 'doing something without thinking about it' }
  ], predict: { q: 'A brain scientist talks about social media and teenagers. What do you think her main message is?', o: ['Understand your brain and use apps on purpose', 'Social media is always dangerous', 'Teenagers should never have phones'] } },
  show: { cast: 'A science podcast for young people. The host talks to Dr Klein, who studies the developing brain.', names: { H: 'Host', K: 'Dr Klein' }, voices: { H: 'am_eric', K: 'af_sarah' },
    parts: [
      { lines: [
        ['H', 'Welcome back to Brain Waves. Today\'s question worries a lot of parents: what is social media doing to teenage brains? My guest is Dr Klein. Is the teenage brain really so different?'],
        ['K', 'It is. During the teenage years, the reward system, the part that makes us feel good and want more, is extremely sensitive. Meanwhile, the area that helps us plan and control our impulses keeps developing until our mid-twenties. So it\'s a bit like a car with a powerful engine and brakes that are still being built.']
      ], items: [
        { k: 'mc', q: 'What does Dr Klein compare the teenage brain to?', o: ['a car with a powerful engine and unfinished brakes', 'a computer with too little memory', 'a phone with a weak battery'], a: 0,
          why: '"a car with a powerful engine and brakes that are still being built"' },
        { k: 'mc', q: 'Until about what age does the "brakes" part of the brain keep developing?', o: ['the mid-twenties', 'about twelve', 'about forty'], a: 0, why: '"keeps developing until our mid-twenties"' }
      ] },
      { lines: [
        ['H', 'And where does social media come in?'],
        ['K', 'Apps are designed to keep us scrolling. Every like is a small reward, and it arrives unpredictably. Unpredictable rewards are the hardest to resist. In one study, teenagers looked at photos inside a brain scanner. When a photo had lots of likes, their reward centres became more active, and they were more likely to like it themselves, whatever it showed.']
      ], items: [
        { k: 'mc', q: 'Why are likes so hard to resist, according to Dr Klein?', o: ['They are small rewards that arrive unpredictably.', 'They cost money.', 'They always come from close friends.'], a: 0,
          why: '"Every like is a small reward, and it arrives unpredictably."' },
        { k: 'tf', q: 'In the study, teens were less likely to like a photo that already had many likes.', a: false, fix: 'They were more likely to like it themselves.', why: '"they were more likely to like it themselves"' }
      ] },
      { lines: [
        ['H', 'So should teenagers just delete everything?'],
        ['K', 'Not necessarily. Social media also helps young people stay connected and find others who share their interests, which really matters for someone who feels isolated. The problems tend to appear when it replaces sleep, exercise or time with friends face to face. My advice is to use it on purpose, not on autopilot. Turn off notifications, keep your phone out of the bedroom at night, and after scrolling, ask yourself: do I feel better or worse?']
      ], items: [
        { k: 'mc', q: 'Which benefit of social media does she mention?', o: ['Finding people who share your interests', 'Getting better marks automatically', 'Sleeping longer'], a: 0, why: '"find others who share their interests"' },
        { k: 'mc', q: 'When do the problems tend to appear?', o: ['When it replaces sleep, exercise or time with friends.', 'When you use it for homework.', 'When you post photos of pets.'], a: 0,
          why: '"when it replaces sleep, exercise or time with friends face to face"' },
        { k: 'mc', q: '"Use it on purpose, not on autopilot" means…', o: ['choose when and why you use it', 'use it only for school', 'let the app decide for you'], a: 0,
          why: 'on purpose = by choice; on autopilot = without thinking.', he: 'on purpose = בכוונה, מתוך בחירה. on autopilot = על טייס אוטומטי, בלי לחשוב.' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'Unpredictable rewards are the hardest to ___.', a: ['resist'], why: 'resist = stop yourself from doing or wanting something.' },
      { k: 'mc', clip: 2, q: '"Someone who feels isolated" is someone who feels…', o: ['alone, cut off from others', 'ill', 'angry'], a: 0, why: 'isolated = alone, without contact with others.' },
      { k: 'sort', q: 'Healthy habit or risky habit?', g: ['healthy', 'risky'],
        w: [['Turn off notifications.', 0], ['Keep the phone out of the bedroom.', 0], ['Ask how you feel after scrolling.', 0], ['Scroll instead of sleeping.', 1], ['Check your likes every few minutes.', 1], ['Stay home to stay online.', 1]],
        why: 'healthy: fewer notifications, no phone in bed, noticing how you feel · risky: losing sleep, checking likes, swapping friends for a screen' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Keep your phone out of the bedroom at night.', why: 'keep something out of a place = don\'t let it in.' }
  ]
},
{
  id: 'c1l05', url: 'https://test-english.com/listening/c1/too-intelligent-to-be-happy-c1-english-listening/', type: 'listening',
  title: 'Too clever to be happy?', dinner: 'What small thing made you happy this week?',
  hook: { q: 'Who first wrote "where ignorance is bliss, \'tis folly to be wise"?', o: ['The poet Thomas Gray, in 1742', 'Shakespeare, in Hamlet', 'Albert Einstein'], a: 0,
    reveal: '*The poet Thomas Gray*, in 1742, while watching boys play at his old school. People still say "ignorance is bliss" today. But are clever people really less happy?' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'overthink', d: 'think about something so much that it worries you' },
    { w: 'perfectionism', d: 'the need for everything you do to be perfect' },
    { w: 'a myth', d: 'an idea many people believe, but which isn\'t true' }
  ], predict: { q: 'A psychologist answers the question "Are clever people less happy?" What do you think she says?', o: ['Not really: other things matter more', 'Yes, always', 'Only clever people can be happy'] } },
  show: { cast: 'A radio phone-in about the mind. A listener, Daniel, calls with a question for the psychologist Dr Hale.', names: { H: 'Presenter', D: 'Daniel', S: 'Dr Hale' },
    voices: { H: 'am_michael', D: 'bm_lewis', S: 'bf_alice' },
    parts: [
      { lines: [
        ['H', 'Our first caller today is Daniel. Go ahead, Daniel.'],
        ['D', 'Hi. My sister is the cleverest person I know. She\'s top of her class in everything, but she worries all the time, and she overthinks every little decision. So I wondered: is it true that very intelligent people are less happy?']
      ], items: [
        { k: 'mc', q: 'Why is Daniel calling?', o: ['He wonders if clever people are less happy.', 'He needs help with his homework.', 'He wants to complain about his sister.'], a: 0,
          why: '"is it true that very intelligent people are less happy?"' },
        { k: 'mc', q: 'What does his sister do with every little decision?', o: ['She overthinks it.', 'She ignores it.', 'She asks Daniel.'], a: 0, why: '"she overthinks every little decision"' }
      ] },
      { lines: [
        ['S', 'It\'s a great question, and the short answer is: not really. Large studies have found that, on average, people with higher intelligence are about as happy as everyone else, or even slightly happier, partly because they often have better health and more choice in their jobs. So the idea that intelligence makes you miserable is mostly a myth.'],
        ['H', 'Then why does the myth survive?'],
        ['S', 'Because we all know someone like Daniel\'s sister. Some bright people analyse everything and set impossibly high standards for themselves. That isn\'t intelligence causing unhappiness. It\'s perfectionism, and anyone can have it.']
      ], items: [
        { k: 'mc', q: 'What have large studies found?', o: ['Clever people are about as happy as others, or slightly happier.', 'Clever people are much less happy.', 'Only clever people are happy.'], a: 0,
          why: '"about as happy as everyone else, or even slightly happier"' },
        { k: 'mc', q: 'Why might clever people be slightly happier, according to Dr Hale?', o: ['They often have better health and more choice in their jobs.', 'They have more friends.', 'They sleep longer.'], a: 0,
          why: '"because they often have better health and more choice in their jobs"' },
        { k: 'tf', q: 'Dr Hale thinks intelligence itself causes the sister\'s worries.', a: false, fix: 'She thinks perfectionism causes them, not intelligence.', why: '"That isn\'t intelligence causing unhappiness. It\'s perfectionism."' }
      ] },
      { lines: [
        ['D', 'So what can my sister do?'],
        ['S', 'A few things help. Notice when you\'re overthinking, and give yourself a time limit for a decision. Remember that good enough is often good enough. And invest in friendships. If one thing predicts happiness better than intelligence or money, it\'s close relationships.'],
        ['H', 'Good enough is good enough. I like that. Thanks, Daniel.']
      ], items: [
        { k: 'mc', q: 'What predicts happiness best, according to Dr Hale?', o: ['close relationships', 'intelligence', 'money'], a: 0, why: '"it\'s close relationships"' },
        { k: 'mc', q: 'What does she suggest for decisions?', o: ['Give yourself a time limit.', 'Ask a teacher every time.', 'Avoid deciding anything.'], a: 0, why: '"give yourself a time limit for a decision"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'Some bright people set impossibly high ___ for themselves.', a: ['standards'], why: 'high standards = expecting a very high level.' },
      { k: 'mc', clip: 2, q: '"Good enough is often good enough" means…', o: ['Not everything has to be perfect.', 'You should try less at school.', 'Good things are rare.'], a: 0,
        why: 'Sometimes "good" is all you need; perfect is not required.', he: 'good enough = מספיק טוב. הרעיון: לא כל דבר צריך להיות מושלם.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Close relationships predict happiness better than money.', why: 'predict = tell us in advance what will happen.' }
  ]
},
{
  id: 'c1l06', url: 'https://test-english.com/listening/c1/are-we-eating-better-c1-english-listening/', type: 'listening',
  title: 'Are we eating better?', dinner: 'What dish would you like us to cook together at home?',
  hook: { q: 'Roughly how long does it take your stomach to tell your brain that you are full?', o: ['About 20 seconds', 'About 20 minutes', 'About 2 hours'], a: 1,
    reveal: 'About *20 minutes*! That is one reason why eating slowly helps you notice when you have had enough.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'ultra-processed', d: 'made in factories with many added ingredients, like crisps and fizzy drinks' },
    { w: 'nutrition', d: 'what food does for your body; eating what you need to be healthy' },
    { w: 'a label', d: 'the information printed on a packet' }
  ], predict: { q: 'A radio presenter and a food reporter ask: are we eating better than our grandparents did? What do you think?', o: ['Better in some ways, worse in others', 'Much better in every way', 'Much worse in every way'] } },
  show: { cast: 'A food programme on the radio. The presenter Noa talks to the food reporter Tom.', names: { N: 'Noa', T: 'Tom' }, voices: { N: 'af_jessica', T: 'bm_daniel' },
    parts: [
      { lines: [
        ['N', 'Are we eating better than our grandparents did? It\'s a question with a surprisingly complicated answer. Tom, let\'s start with the good news.'],
        ['T', 'Well, in many ways, yes. We can buy fresh fruit and vegetables all year round, food is safer than ever, and people know far more about nutrition. Ask a group of teenagers today what fibre or protein is, and most of them can tell you.']
      ], items: [
        { k: 'mc', q: 'Which of these is part of the good news?', o: ['Fresh fruit and vegetables all year round', 'Everyone cooks every day', 'Food is cheaper than ever'], a: 0,
          why: '"We can buy fresh fruit and vegetables all year round"' },
        { k: 'tf', q: 'Tom says teenagers today know very little about nutrition.', a: false, fix: 'Most of them can explain what fibre or protein is.', why: '"most of them can tell you"' }
      ] },
      { lines: [
        ['N', 'And the bad news?'],
        ['T', 'Ultra-processed food. Think crisps, fizzy drinks, sugary cereals and most ready meals. In some countries, such as the UK and the US, these now make up more than half of the calories people eat. They\'re cheap, convenient and designed to be hard to stop eating, which is exactly the problem.'],
        ['N', 'So knowing more about food hasn\'t changed what ends up on our plates.'],
        ['T', 'Not as much as you\'d hope. Knowledge and habits are two very different things.']
      ], items: [
        { k: 'mc', q: 'In the UK and the US, how much of what people eat (in calories) is ultra-processed?', o: ['more than half', 'about a tenth', 'almost none'], a: 0,
          why: '"more than half of the calories people eat"' },
        { k: 'mc', q: 'Why are these foods "exactly the problem"?', o: ['They are designed to be hard to stop eating.', 'They are too expensive.', 'They are hard to find.'], a: 0,
          why: '"designed to be hard to stop eating"' },
        { k: 'mc', q: '"Knowledge and habits are two very different things" means…', o: ['Knowing what is healthy doesn\'t mean you eat that way.', 'Habits are easy to change.', 'Knowledge doesn\'t matter at all.'], a: 0,
          why: 'People know more, but they still eat the same way.' }
      ] },
      { lines: [
        ['N', 'Any practical tips for our listeners?'],
        ['T', 'Three simple ones. Cook together at home when you can, even something basic like an omelette or a salad. Read labels: if the list of ingredients is very long and full of words you can\'t pronounce, think twice. And eat slowly, without a screen. Your body needs time to tell you it\'s full.'],
        ['N', 'And no food is forbidden?'],
        ['T', 'Exactly. A birthday cake is fine. It\'s what we eat every day that counts.']
      ], items: [
        { k: 'mc', q: 'What does Tom say about a very long list of ingredients?', o: ['Think twice before buying it.', 'It means the food is fresh.', 'It is always healthy.'], a: 0,
          why: '"if the list of ingredients is very long… think twice"', he: 'think twice = לחשוב פעמיים, כלומר לשקול שוב לפני שעושים משהו.' },
        { k: 'mc', q: 'What is his view of birthday cake?', o: ['It\'s fine; everyday food is what matters.', 'Nobody should ever eat it.', 'It\'s healthy enough to eat every day.'], a: 0,
          why: '"A birthday cake is fine. It\'s what we eat every day that counts."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 2, q: 'Eat slowly, without a ___.', a: ['screen'], why: 'Without a screen you notice your food and when you are full.' },
      { k: 'sort', q: 'Usually ultra-processed, or fresh and simple?', g: ['usually ultra-processed', 'fresh or simple'],
        w: [['fizzy drinks', 0], ['crisps', 0], ['sugary cereal', 0], ['most ready meals', 0], ['an apple', 1], ['an omelette', 1], ['a homemade salad', 1], ['plain rice', 1]],
        why: 'ultra-processed: fizzy drinks, crisps, sugary cereal, ready meals · fresh or simple: fruit, eggs, salad, rice' }
    ] }
  ],
  use: [
    { k: 'build', s: 'It is what we eat every day that counts.', why: 'It is … that … puts the important part first: what we eat every day.' }
  ]
},
{
  id: 'c1l07', url: 'https://test-english.com/listening/c1/sleep-tourism-rest-or-stress-c1-english-listening-test/', type: 'listening',
  title: 'Sleep holidays: rest or stress?', dinner: 'What helps you fall asleep on a busy night?',
  hook: { q: 'Which bird can sleep while it is flying?', o: ['The frigatebird', 'The chicken', 'The penguin'], a: 0,
    reveal: '*The frigatebird*! On flights over the ocean that can last for weeks, it takes tiny naps of about ten seconds while gliding, and sleeps less than an hour a day in total.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'sleep tourism', d: 'travelling to a hotel or place mainly to sleep better' },
    { w: 'a sleep tracker', d: 'a watch, ring or app that measures your sleep' },
    { w: 'obsessed', d: 'thinking about something all the time, too much' }
  ], predict: { q: 'A travel reporter tries a "sleep holiday". Do you think she came home rested?', o: ['Rested, but she learnt a surprising lesson', 'Completely exhausted', 'She didn\'t sleep at all'] } },
  show: { cast: 'A travel show. The reporter Lily tells the presenter Ben about her sleep holiday.', names: { B: 'Ben', L: 'Lily' }, voices: { B: 'am_liam', L: 'bf_lily' },
    parts: [
      { lines: [
        ['B', 'Holidays used to be about seeing as much as possible. Now some people travel just to sleep. Lily, you\'ve just tried a so-called sleep holiday. What was it like?'],
        ['L', 'Fascinating. The hotel had blackout curtains, heavy blankets, a pillow menu and even a sleep coach. Before bed there were no screens, just a warm drink and some gentle stretching. On the first night I was asleep in about ten minutes, which never happens at home.']
      ], items: [
        { k: 'mc', q: 'What is a "sleep holiday"?', o: ['a trip mainly to sleep better', 'a trip that starts at night', 'a holiday in a tent'], a: 0, why: '"some people travel just to sleep"' },
        { k: 'mc', q: 'What happened on Lily\'s first night?', o: ['She fell asleep in about ten minutes.', 'She couldn\'t sleep at all.', 'She woke up at four.'], a: 0, why: '"I was asleep in about ten minutes"' }
      ] },
      { lines: [
        ['B', 'So it worked?'],
        ['L', 'At first. But on the second day they gave me a sleep tracker, a little ring that measured everything. The next morning it told me my deep sleep was below average, and I started worrying. By the third night I was lying awake, thinking: am I sleeping properly? Ironically, the more I tried to sleep well, the worse I slept.'],
        ['B', 'There\'s actually a name for that, isn\'t there?'],
        ['L', 'Yes. Some sleep scientists call it orthosomnia: being so obsessed with perfect sleep data that it ruins your sleep.']
      ], items: [
        { k: 'mc', q: 'What made Lily start worrying?', o: ['data from her sleep tracker', 'a noisy room', 'too much coffee'], a: 0, why: '"it told me my deep sleep was below average"' },
        { k: 'tf', q: 'The harder Lily tried to sleep well, the better she slept.', a: false, fix: 'The more she tried, the worse she slept.', why: '"the more I tried to sleep well, the worse I slept"' },
        { k: 'mc', q: 'What is orthosomnia?', o: ['being so obsessed with sleep data that you sleep worse', 'a kind of comfortable pillow', 'sleeping during the day'], a: 0,
          why: '"being so obsessed with perfect sleep data that it ruins your sleep"' }
      ] },
      { lines: [
        ['B', 'So, rest or stress?'],
        ['L', 'Both, honestly. The dark room and the routine were wonderful, and you don\'t need a hotel for those. But I took the ring off for the last two nights and slept like a baby. My conclusion: listen to your body, not your gadget.']
      ], items: [
        { k: 'mc', q: 'What does Lily say you don\'t need a hotel for?', o: ['a dark room and a bedtime routine', 'a sleep coach', 'a pillow menu'], a: 0, why: '"The dark room and the routine… you don\'t need a hotel for those."' },
        { k: 'mc', q: '"I slept like a baby" means…', o: ['I slept very well.', 'I cried all night.', 'I woke up every hour.'], a: 0, why: 'sleep like a baby = sleep deeply and peacefully.',
          he: 'slept like a baby = ישנתי כמו תינוק, כלומר ישנתי מצוין.' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'Ironically, the more I tried to sleep well, the ___ I slept.', a: ['worse'], why: 'the more…, the worse… = as one thing grows, the other gets worse.',
        he: 'במבנה the more..., the worse... שני החלקים מתחילים ב-the, כמו "ככל ש..., כך...".' },
      { k: 'mc', clip: 2, q: 'Lily\'s conclusion: listen to your ___, not your gadget.', o: ['body', 'coach', 'phone'], a: 0, why: '"listen to your body, not your gadget"' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Listen to your body, not your gadget.', why: 'Trust how you feel more than the numbers.' }
  ]
},
{
  id: 'c1l08', url: 'https://test-english.com/listening/c1/a-perfect-democracy-c1-english-listening-test/', type: 'listening',
  title: 'A perfect class vote?', dinner: 'How should our family decide where to go on a day trip?',
  hook: { q: 'When honeybees need a new home, how do they choose it?', o: ['Scout bees "vote" by dancing for the best place', 'The queen decides alone', 'They follow the wind'], a: 0,
    reveal: '*Scout bees dance* for the places they have found. The best site attracts more and more dancers until the bees agree. Scientists call it a kind of bee democracy.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a majority', d: 'more than half of a group' },
    { w: 'a round', d: 'one stage of a vote or a competition' },
    { w: 'a compromise', d: 'an agreement in which everyone gives up a little' }
  ], predict: { q: 'A class of thirty must choose a trip. What do you think goes wrong?', o: ['The winner isn\'t what most people wanted', 'Nobody votes', 'The teacher decides alone'] } },
  show: { cast: 'A school podcast. Two students, Yael and Omer, tell the story of their class trip vote.', names: { Y: 'Yael', O: 'Omer' }, voices: { Y: 'af_river', O: 'am_puck' },
    parts: [
      { lines: [
        ['Y', 'Hi, this is Class Talk. I\'m Yael.'],
        ['O', 'And I\'m Omer. This week: how our class nearly fell out over a trip.'],
        ['Y', 'Our teacher said we could choose between three places: a water park, the zoo and the science museum. We voted with a show of hands. Twelve people chose the water park, ten the zoo and eight the museum.'],
        ['O', 'So the water park won. Simple, right?']
      ], items: [
        { k: 'mc', q: 'How many places could the class choose from?', o: ['three', 'two', 'five'], a: 0, why: '"a water park, the zoo and the science museum"' },
        { k: 'mc', q: 'How did they vote the first time?', o: ['with a show of hands', 'on their phones', 'on paper'], a: 0, why: '"We voted with a show of hands."' }
      ] },
      { lines: [
        ['Y', 'Not really. Twelve out of thirty is less than half. Eighteen people wanted something else. And when we asked around, most of the museum fans said the zoo was their second choice.'],
        ['O', 'So our teacher suggested a second round. The museum, with the fewest votes, was out, and those eight people voted again. Seven of them chose the zoo. Suddenly it was seventeen for the zoo and thirteen for the water park.'],
        ['Y', 'Same class, same day, different winner, just because we counted in a different way.']
      ], items: [
        { k: 'mc', q: 'What was the problem with the first result?', o: ['The winner had less than half of the votes.', 'Too many people chose the museum.', 'Nobody wanted the zoo.'], a: 0,
          why: '"Twelve out of thirty is less than half."' },
        { k: 'mc', q: 'Why was the museum out in the second round?', o: ['It had the fewest votes.', 'It was too far away.', 'It was closed that week.'], a: 0, why: '"The museum, with the fewest votes, was out"' },
        { k: 'tf', q: 'After the second round, the water park won.', a: false, fix: 'The zoo won, seventeen to thirteen.', why: '"seventeen for the zoo and thirteen for the water park"' }
      ] },
      { lines: [
        ['O', 'Then we found out it isn\'t just our problem. An economist called Kenneth Arrow showed that when there are three or more options, no way of voting is perfectly fair in every situation.'],
        ['Y', 'So in the end, we did something different. The water park fans agreed to go to the zoo, and in return the whole class is going to the water park at the end of the year.'],
        ['O', 'A compromise. Nobody got everything, but everybody got something.']
      ], items: [
        { k: 'mc', q: 'What did Kenneth Arrow show?', o: ['With three or more options, no way of voting is perfectly fair every time.', 'A show of hands is always the fairest way.', 'Small groups should never vote.'], a: 0,
          why: '"no way of voting is perfectly fair in every situation"' },
        { k: 'mc', q: 'How did the class finally solve it?', o: ['The zoo now, the water park at the end of the year', 'The head teacher chose for them', 'They went to the museum'], a: 0,
          why: '"in return the whole class is going to the water park at the end of the year"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'mc', clip: 2, q: '"Nobody got everything, but everybody got something" describes…', o: ['a compromise', 'a majority', 'a mistake'], a: 0, why: 'a compromise = everyone gives up a little.',
        he: 'compromise = פשרה. majority = רוב, כלומר יותר מחצי, ולא רק "הכי הרבה קולות".' },
      { k: 'sort', q: 'Is it a majority (more than half)?', g: ['a majority', 'not a majority'],
        w: [['16 out of 30', 0], ['17 out of 30', 0], ['51 out of 100', 0], ['12 out of 30', 1], ['15 out of 30', 1], ['40 out of 100', 1]],
        why: 'a majority is more than half: 16 or 17 of 30, 51 of 100 · exactly half (15 of 30) is not a majority' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Nobody got everything, but everybody got something.', why: 'nobody … everything / everybody … something: a neat way to describe a compromise.' }
  ]
},
{
  id: 'c1l09', url: 'https://test-english.com/listening/c1/operation-cat-drop-c1-english-listening-test/', type: 'listening',
  title: 'Operation Cat Drop', dinner: 'Have you ever solved one problem and accidentally created another?',
  hook: { q: 'What do we call it when a solution causes a new, unexpected problem?', o: ['An unintended consequence', 'A happy accident', 'A chain letter'], a: 0,
    reveal: '*An unintended consequence*. Today\'s story is one of the most famous examples, and it involves cats and parachutes.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'an insecticide', d: 'a chemical that kills insects' },
    { w: 'the food chain', d: 'which animals eat which in nature' },
    { w: 'a side effect', d: 'an extra result you didn\'t want' }
  ], predict: { q: 'Why do you think cats were once dropped by parachute into villages in Borneo?', o: ['To catch rats', 'For a film', 'For a competition'] } },
  show: { cast: 'A history podcast. The host Emma tells her co-host George a strange story.', names: { E: 'Emma', G: 'George' }, voices: { E: 'bf_emma', G: 'bm_george' },
    parts: [
      { lines: [
        ['E', 'In the 1950s, many villages on the island of Borneo had a serious problem: malaria, a disease spread by mosquitoes. So the World Health Organization sprayed the houses with a powerful insecticide called DDT.'],
        ['G', 'And did it work?'],
        ['E', 'Against malaria, remarkably well. The mosquitoes disappeared. But the chemical also killed tiny wasps that used to eat caterpillars. With no wasps around, the caterpillars feasted on the roofs of the houses, which were made of leaves, and some roofs began to fall in.']
      ], items: [
        { k: 'mc', q: 'Why was DDT sprayed?', o: ['to fight malaria', 'to kill rats', 'to protect the roofs'], a: 0, why: '"malaria, a disease spread by mosquitoes. So… sprayed"' },
        { k: 'mc', q: 'Why did some roofs fall in?', o: ['Caterpillars ate them after the wasps died.', 'The chemical burnt them.', 'Mosquitoes damaged them.'], a: 0,
          why: '"With no wasps around, the caterpillars feasted on the roofs"' }
      ] },
      { lines: [
        ['G', 'Okay, but where do the cats come in?'],
        ['E', 'Small lizards called geckos ate the poisoned insects. Then the village cats ate the geckos, and the poison built up in their bodies until many cats got sick and died. Without cats, the number of rats exploded, and rats can carry dangerous diseases.'],
        ['G', 'So the solution to one disease created the risk of another.'],
        ['E', 'Exactly. Everything in the food chain was connected.']
      ], items: [
        { k: 'mc', q: 'How did the poison reach the cats?', o: ['They ate geckos that had eaten poisoned insects.', 'It was sprayed on them.', 'It was in their water.'], a: 0,
          why: '"geckos ate the poisoned insects. Then the village cats ate the geckos"' },
        { k: 'tf', q: 'With fewer cats, there were fewer rats.', a: false, fix: 'With fewer cats, the number of rats exploded.', why: '"Without cats, the number of rats exploded"' },
        { k: 'mc', q: '"The number of rats exploded" means…', o: ['it grew very fast', 'the rats disappeared', 'the rats got very noisy'], a: 0, why: 'explode (about numbers) = grow very fast.',
          he: 'exploded כאן לא אומר "התפוצץ" אלא "גדל מהר מאוד".' }
      ] },
      { lines: [
        ['E', 'So in 1960, the British Royal Air Force flew cats in, and some were dropped by parachute in special boxes. It was called Operation Cat Drop.'],
        ['G', 'That\'s brilliant. How many cats?'],
        ['E', 'Well, that\'s the funny part. Some versions say fourteen thousand, others just a few dozen. The story has grown with every retelling. But the lesson hasn\'t changed: before you fix nature, think about what else you might break.']
      ], items: [
        { k: 'mc', q: 'How did some of the cats arrive?', o: ['by parachute, in special boxes', 'by bus', 'on foot from the next village'], a: 0, why: '"some were dropped by parachute in special boxes"' },
        { k: 'mc', q: 'What does Emma say about the number of cats?', o: ['The versions don\'t agree.', 'It was exactly fourteen thousand.', 'Nobody sent any cats.'], a: 0,
          why: '"Some versions say fourteen thousand, others just a few dozen."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'Everything in the food ___ was connected.', a: ['chain'], why: 'the food chain = which animals eat which.' },
      { k: 'mc', clip: 2, q: 'What is the lesson of the story?', o: ['Before you fix nature, think about what else you might break.', 'Parachutes are dangerous.', 'Cats are better than chemicals.'], a: 0,
        why: '"before you fix nature, think about what else you might break"' }
    ] }
  ],
  use: [
    { k: 'build', s: 'The solution to one problem created another.', why: 'another = another problem; English doesn\'t repeat the noun.' }
  ]
},
{
  id: 'c1r02', url: 'https://test-english.com/reading/c1/a-walk-gone-wrong-c1-english-reading-test/', type: 'reading',
  title: 'A walk gone wrong', dinner: 'What would you pack for a long walk, just to be on the safe side?',
  hook: { q: 'If you get lost in the countryside, what is usually the safest thing to do?', o: ['Stay where you are and call for help', 'Keep walking until it gets dark', 'Split up to search faster'], a: 0,
    reveal: '*Stay where you are*. Rescue teams say it is far easier to find someone who stays in one place, and that is exactly what helped the walkers in today\'s story.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A short story: three teenagers set off on an easy afternoon walk, and one shortcut changes everything.',
    predict: { q: 'What do you think goes wrong on the walk?', o: ['They take a shortcut and get lost', 'It snows', 'They meet a bear'] } },
  story: { title: 'A walk gone wrong', chunks: [
    { text: 'It was supposed to be an easy afternoon. Noa, her cousin Eitan and his friend Mia set off along a circular trail in the hills of the Galilee, a walk that the sign at the car park said would take three hours. They had water, snacks and, as Eitan pointed out, a hiking app on his phone, so nobody bothered to pick up a paper map. About halfway round, they reached a fork in the path. The marked trail went left, up a steep slope. A narrower path went right and seemed to head straight back towards the car park. "Shortcut," said Eitan, and before anyone could object, he was already striding down it.',
      items: [
        { k: 'mc', q: 'Why didn\'t they take a paper map?', o: ['They relied on a hiking app.', 'The shop was closed.', 'They had done the walk before.'], a: 0,
          why: '"a hiking app on his phone, so nobody bothered to pick up a paper map"' },
        { k: 'mc', q: 'Why did Eitan choose the path on the right?', o: ['It seemed to lead straight back to the car park.', 'It was the marked trail.', 'Mia asked him to.'], a: 0,
          why: '"seemed to head straight back towards the car park"' },
        { k: 'find', q: 'Find a word that means "a place where a path divides in two".', a: 'fork', why: 'a fork in the path = where it splits.' }
      ] },
    { text: 'At first the shortcut looked promising. Then the path grew fainter and fainter until it vanished among the bushes. To make matters worse, Eitan\'s phone, which had been recording their route all afternoon, suddenly died. The sun was sinking behind the hills. Eitan wanted to keep going, convinced the car park was just over the next ridge. Mia refused. "If we wander around in the dark, we\'ll only get more lost," she said. Noa remembered something her dad, a volunteer with a rescue team, always told her: if you are lost, stop. It is far easier to find someone who stays in one place.',
      items: [
        { k: 'mc', q: 'What happened to the path?', o: ['It slowly disappeared.', 'It turned into a road.', 'A fence blocked it.'], a: 0, why: '"the path grew fainter and fainter until it vanished"' },
        { k: 'tf', q: 'Mia agreed with Eitan that they should keep walking.', a: false, fix: 'Mia refused to keep walking in the dark.', why: '"Mia refused."' },
        { k: 'find', q: 'Find a word that means "disappeared completely".', a: 'vanished', why: 'vanish = disappear completely.' }
      ] },
    { text: 'So they stayed put. Mia\'s phone still had a little battery, and although there was no signal for a call, she managed to send one text to her mum: "Lost, safe, staying here." That morning she had sent her mum the name of the trail, just to be on the safe side. Noa switched on the torch on her keyring every few minutes, and Eitan, a little quieter than before, shared out the last of the snacks. Just over an hour later they heard voices and saw lights moving between the trees. The rescue team had found them less than two kilometres from the car park. On the drive home, Eitan admitted that his shortcut had been, to put it mildly, a long cut.',
      items: [
        { k: 'mc', q: 'What else helped the rescue team find them quickly?', o: ['Mia had told her mum the name of the trail.', 'Eitan\'s phone was still recording the route.', 'They lit a big fire.'], a: 0,
          why: '"That morning she had sent her mum the name of the trail"' },
        { k: 'mc', q: 'Why was Eitan probably "a little quieter than before"?', o: ['He felt bad about his shortcut.', 'He had fallen asleep.', 'He had lost his voice.'], a: 0,
          why: 'His shortcut caused the trouble, and later he "admitted" it.' },
        { k: 'find', q: 'Find a word that means "agreed that something bad was true".', a: 'admitted', why: 'admit = say that something (often a mistake) is true.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the main lesson of the story?', o: ['When you are lost, stop and stay in one place.', 'Phones are useless on walks.', 'Shortcuts are always faster.'], a: 0,
        why: 'Staying put, and telling someone the route, is what got them home.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'Eitan admitted that his shortcut had been, to put it ___, a long cut.', a: ['mildly'], why: 'to put it mildly = the truth is even stronger than my words.' }
  ]
},
{
  id: 'c1r03', url: 'https://test-english.com/reading/c1/how-ai-voice-cloning-is-changing-scams-c1-english-reading-test/', type: 'reading',
  title: 'When a voice can be copied', dinner: 'How would you check that a message really came from a friend?',
  hook: { q: 'Which of these is a helpful use of voice cloning?', o: ['Letting people who lose their voice to illness speak in their own voice', 'Pretending to be someone\'s grandmother', 'Tricking a bank'], a: 0,
    reveal: '*Giving people their own voice back*. People who know an illness will take away their speech can record their voice in advance, and a computer can later speak with it. The same technology, sadly, also helps criminals.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A technology article explains how fake voices are made, why they fool us, and how to protect yourself.',
    predict: { q: 'What do you think is the best protection against a fake voice?', o: ['Checking through another channel', 'Buying a better phone', 'Never answering any calls'] } },
  story: { title: 'When a voice can be copied', chunks: [
    { text: 'Not long ago, copying someone\'s voice convincingly required hours of studio recordings and a team of experts. Today, a few seconds of audio, taken from a birthday video or a voice message, can be enough. Voice-cloning software analyses the recording, learns the pitch, rhythm and accent of the speaker, and can then make that voice say anything you type. The technology was not invented for crime. It helps people who are losing the ability to speak, for example because of an illness, to keep talking in their own voice, and it allows films to be dubbed into other languages in the original actors\' voices.',
      items: [
        { k: 'mc', q: 'What has changed about copying a voice?', o: ['It can now take just a few seconds of audio.', 'It now needs a big studio.', 'It has become impossible.'], a: 0,
          why: '"a few seconds of audio… can be enough"' },
        { k: 'mc', q: 'Which positive use does the article mention?', o: ['Helping people who are losing the ability to speak', 'Writing homework', 'Making phones cheaper'], a: 0,
          why: '"It helps people who are losing the ability to speak"' },
        { k: 'find', q: 'Find a word that means "in a way that makes people believe it is real".', a: 'convincingly', why: 'convincing = making people believe it.' }
      ] },
    { text: 'Unfortunately, criminals have noticed too. The most common trick is surprisingly old: someone calls pretending to be a relative in trouble and asks for money urgently. What has changed is that the voice now sounds exactly right. Our brains are not built to doubt the voice of someone we love; when we hear it, we react with emotion first and reason later. Scammers know this, so they add pressure: a crying voice, a ticking clock, a request to keep the call secret. Even banks that use voice recognition to identify their customers have had to rethink their systems.',
      items: [
        { k: 'mc', q: 'What is new about this old trick?', o: ['The voice sounds exactly right.', 'The calls are shorter.', 'The criminals ask for less money.'], a: 0, why: '"What has changed is that the voice now sounds exactly right."' },
        { k: 'mc', q: 'Why do we fall for a familiar voice?', o: ['We react with emotion first and reason later.', 'We can\'t hear well on the phone.', 'We trust every stranger.'], a: 0,
          why: '"we react with emotion first and reason later"' },
        { k: 'tf', q: 'Scammers try to give people plenty of time to think.', a: false, fix: 'Scammers add pressure, like a ticking clock.', why: '"so they add pressure"' }
      ] },
    { text: 'So what can we do? Experts agree that trying to hear whether a voice is fake is not a reliable defence, because the copies are improving too fast. A better strategy is to check through a different channel. If "your brother" calls asking for money, hang up and message him, or call him back on the number you already have. Some families now share a secret question that only they would know the answer to. And it is worth thinking twice before posting long videos of yourself speaking on a public account. The rule is simple: a familiar voice is no longer proof of who is speaking.',
      items: [
        { k: 'mc', q: 'Why isn\'t listening carefully a reliable defence?', o: ['The fake voices are improving too fast.', 'Most people have bad hearing.', 'Phone calls are too short.'], a: 0,
          why: '"because the copies are improving too fast"' },
        { k: 'mc', q: 'What is the better strategy?', o: ['Check through a different channel.', 'Ask the caller to speak slowly.', 'Answer only video calls.'], a: 0, why: '"check through a different channel"' },
        { k: 'find', q: 'Find a word that means "a way of protecting yourself against an attack".', a: 'defence', why: 'defence (British spelling; American: defense).' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the main message of the article?', o: ['A familiar voice is no longer proof of who is speaking.', 'Voice cloning has no good uses.', 'Phones are too dangerous to use.'], a: 0,
        why: 'The last line sums it up: check another way before you trust a voice.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'Scammers add ___ so that you act before you think.', a: ['pressure'], why: 'pressure = making someone feel they must act quickly.' }
  ]
},
{
  id: 'c1r04', url: 'https://test-english.com/reading/c1/kidfluencers-growing-up-online-c1-english-reading/', type: 'reading',
  title: 'Kidfluencers: growing up online', dinner: 'Should parents ask their children before posting photos of them?',
  hook: { q: 'In 2020, which country passed a law to protect children who earn money as online stars?', o: ['France', 'Japan', 'Brazil'], a: 0,
    reveal: '*France*! Part of what young online stars earn must be saved for them until they are adults, and they can later ask for their videos to be removed.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A magazine article looks at children who grow up as online stars, often with their parents behind the camera.',
    predict: { q: 'In a family video channel, who do you think makes most of the decisions?', o: ['The parents', 'The child', 'The viewers'] } },
  story: { title: 'Kidfluencers: growing up online', chunks: [
    { text: 'Ten-year-old Liam wakes up, eats breakfast and opens a box of new toys, all in front of a camera. By the evening, hundreds of thousands of people have watched him. Liam is invented, but children like him are real. Some of the most-watched channels on video platforms are run by families, and a few young stars have earned millions from advertising and sponsorships. To many viewers, it looks like a dream childhood: fame, free gifts and no boring office job.',
      items: [
        { k: 'mc', q: 'What is true about Liam?', o: ['He is an invented example.', 'He is a famous real boy.', 'He runs his channel alone.'], a: 0, why: '"Liam is invented, but children like him are real."' },
        { k: 'mc', q: 'How do the young stars earn money?', o: ['from advertising and sponsorships', 'from selling toys in shops', 'from school prizes'], a: 0, why: '"earned millions from advertising and sponsorships"' },
        { k: 'find', q: 'Find a word that means "deals in which a company pays someone to show its products".', a: 'sponsorships', why: 'a sponsorship = a company pays you to show or mention its products.' }
      ] },
    { text: 'Behind the camera, however, the picture can be less sunny. Filming often takes hours, and a scene may be repeated again and again until it looks natural. When a family\'s income depends on a child\'s videos, the line between playing and working becomes blurred. Child actors in films have strict rules about their working hours and their earnings, but for years child influencers had almost no such protection. There is also the question of privacy. Moments that most of us would keep in a family album, such as a first day at school, a tantrum or a visit to the doctor, are shared with strangers and may stay online forever.',
      items: [
        { k: 'mc', q: 'Why does the line between playing and working become blurred?', o: ['The family\'s income depends on the child\'s videos.', 'Children play outside less.', 'The videos are very short.'], a: 0,
          why: '"When a family\'s income depends on a child\'s videos…"', he: 'blurred = מטושטש. the line becomes blurred = הגבול מיטשטש, כבר לא ברור איפה נגמר משחק ומתחילה עבודה.' },
        { k: 'tf', q: 'Child influencers have always had the same protection as child actors.', a: false, fix: 'For years they had almost no such protection.', why: '"for years child influencers had almost no such protection"' },
        { k: 'mc', q: 'What worries the writer about privacy?', o: ['Private family moments may stay online forever.', 'Strangers send too many gifts.', 'The cameras are too expensive.'], a: 0,
          why: '"are shared with strangers and may stay online forever"' }
      ] },
    { text: 'Some governments have started to act. In 2020 France passed a law that limits how much children can work online and requires part of their earnings to be saved for them until they are adults. It also gives them the right to ask for videos to be removed. Similar laws have since followed elsewhere, including in the US state of Illinois. Many former child stars, now grown up, say they wish they had been asked before their lives were shared. Perhaps that is the simplest test for any parent holding a camera: would my child agree to this if they were old enough to decide?',
      items: [
        { k: 'mc', q: 'What does the French law do with part of a child\'s earnings?', o: ['It saves it for them until they are adults.', 'It gives it to their school.', 'It sends it to the video platform.'], a: 0,
          why: '"requires part of their earnings to be saved for them until they are adults"' },
        { k: 'mc', q: 'What do many former child stars say?', o: ['They wish they had been asked first.', 'They loved every minute of it.', 'They want to film their own children.'], a: 0,
          why: '"they wish they had been asked before their lives were shared"' },
        { k: 'find', q: 'Find a word that means "taken away; deleted".', a: 'removed', why: 'remove = take away, delete.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the writer\'s main point?', o: ['Children who grow up online need protection, and their consent matters.', 'All family channels should be closed.', 'Being a child star is a dream job.'], a: 0,
        why: 'The article ends with a test: would the child agree to this?' }
    ] }
  ],
  use: [
    { k: 'type', q: 'When a family\'s income depends on the videos, the line between playing and working becomes ___.', a: ['blurred'], why: 'blurred = not clear any more.' }
  ]
}
];
