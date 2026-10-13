// English Quest missions, level B1 (specs/missions.md). Original content on the topics of test-english.com's map:
// the topic list is theirs, every text, recording and question here is our own. Check: node test/missions-check.js
window.EQ_MISSIONS = window.EQ_MISSIONS || {};
window.EQ_MISSIONS.b1 = [
{
  id: 'b1g01', url: 'https://test-english.com/grammar-points/b1/present-simple-present-continuous/', type: 'grammar',
  title: 'Permanent or temporary?', dinner: 'What are you learning at school these days?',
  hook: { q: 'About how many languages do people speak in the world today?', o: ['About 700', 'About 7,000', 'About 70,000'], a: 1,
    reveal: 'About *7,000*! A fact uses the present simple: people *speak* about 7,000 languages. A change happening now uses the continuous: many small languages *are disappearing*.' },
  learn: { kind: 'rule', title: 'Present simple or continuous?',
    lines: ['*Present simple*: habits, facts and permanent things. I *live* in Haifa. The sun *rises* in the east.',
      '*Present continuous*: now, temporary situations and changes. I*\'m staying* with my aunt this month. Prices *are going up*.',
      'State verbs (know, like, want, need, believe, belong, seem) usually stay simple: I *know*, not I\'m knowing.'],
    ex: ['He usually *works* from home, but this week he *is working* in the office.', 'My English *is getting* better every day!'],
    he: 'Simple = קבוע, הרגל או עובדה. Continuous = עכשיו, זמני, או משהו שמשתנה (is getting better). פעלי מצב כמו know, want, believe לא מקבלים ing.' },
  steps: [
    { name: 'Permanent or temporary?', items: [
      { k: 'mc', q: 'I usually take the bus, but this week I ___ to school because the buses are on strike.', o: ['am walking', 'walk', 'walked'], a: 0,
        why: 'this week, a temporary change → am walking.' },
      { k: 'mc', q: 'The Earth ___ around the Sun.', o: ['goes', 'is going'], a: 0, why: 'A scientific fact → present simple.' },
      { k: 'mc', q: 'Prices ___ up at the moment. Everything is so expensive!', o: ['are going', 'go'], a: 0, why: 'A change in progress → present continuous.' },
      { k: 'mc', q: 'This soup ___ delicious!', o: ['tastes', 'is tasting'], a: 0, why: 'taste (= have a flavour) is a state verb → tastes.' }
    ] },
    { name: 'State verbs', items: [
      { k: 'tf', q: '"I\'m not understanding this question."', a: false, fix: 'I don\'t understand this question.', why: 'understand is a state verb: no -ing.',
        he: 'understand הוא פועל מצב, ולכן I don\'t understand ולא I\'m not understanding.' },
      { k: 'mc', q: 'Which sentence is right?', o: ['I think you\'re right.', 'I\'m thinking you\'re right.'], a: 0,
        why: 'think = have an opinion → state verb. (I\'m thinking about the test = it is in my head now, and that is fine.)' },
      { k: 'type', q: 'This bag ___ to my sister.', hint: '(belong)', a: ['belongs'], why: 'belong is a state verb → belongs.' },
      { k: 'mc', q: '"Why are you smiling?" "I ___ about the party last night."', o: ['am thinking', 'think'], a: 0,
        why: 'think about = an activity in your head right now → am thinking.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'My brother is always borrowing my clothes!', why: 'always + present continuous = something that happens again and again and annoys you.' },
      { k: 'spot', s: 'Look! The kids *play* in the snow.', fix: 'are playing', why: 'Look! = it is happening now → are playing.' },
      { k: 'build', s: 'How often does your family eat out?', why: 'How often asks about a habit → present simple.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'He *work* in a bank, but this month he is working in a café.', fix: 'works', why: 'A permanent job → present simple, and he → works.' },
    { k: 'type', q: 'Shh! I ___ to the radio.', hint: '(listen)', a: ['am listening', '\'m listening'], why: 'Shh! = now → am listening.' },
    { k: 'mc', q: 'Which sentence is about a temporary situation?', o: ['I\'m staying with my grandma this week.', 'I stay with my grandma every summer.', 'My grandma lives in Eilat.'], a: 0,
      why: 'this week = for a short time → present continuous.' }
  ]
},
{
  id: 'b1g02', url: 'https://test-english.com/grammar-points/b1/future-forms/', type: 'grammar',
  title: 'Talking about the future', dinner: 'What are you going to do this weekend?',
  hook: { q: 'By 2050, about how many people will live on Earth, says the United Nations?', o: ['About 8 billion', 'About 9.7 billion', 'About 15 billion'], a: 1,
    reveal: 'About *9.7 billion*. A prediction from facts and numbers often uses *will* or *be going to*: the population *will grow*.' },
  learn: { kind: 'rule', title: 'Three ways to talk about the future',
    lines: ['*Present continuous* for arrangements with a time or a place: I*\'m meeting* Dana at 5.',
      '*be going to* for plans you already decided, and for things you can see coming: I*\'m going to* study medicine. Look at those clouds, it*\'s going to* rain!',
      '*will* for decisions you make now, offers, promises and opinions: I*\'ll* help you! I think she*\'ll* win.'],
    ex: ['"The phone is ringing." "I*\'ll* get it!"', 'We *are flying* to Rome on Friday.'],
    he: 'Present continuous = סידור שכבר קבעת (יש שעה או מקום). going to = כוונה, או משהו שרואים שעומד לקרות. will = החלטה של הרגע, הצעה, הבטחה או דעה.' },
  steps: [
    { name: 'Which future?', items: [
      { k: 'mc', q: '"I\'m thirsty." "Wait, I ___ you a glass of water."', o: ['\'ll get', '\'m getting', '\'m going to get'], a: 0, why: 'A decision you make right now → will.' },
      { k: 'mc', q: 'Look at that black sky! It ___ rain.', o: ['is going to', 'will', 'is raining to'], a: 0, why: 'You can see it coming → going to.' },
      { k: 'mc', q: 'We ___ dinner with my grandparents on Saturday. It\'s all arranged.', o: ['are having', 'will have', 'have'], a: 0, why: 'An arrangement with a time → present continuous.' },
      { k: 'mc', q: 'I think robots ___ do most jobs one day.', o: ['will', 'are', 'are doing'], a: 0, why: 'An opinion about the future → will (often after I think).' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'Next year I ___ learn the guitar. I\'ve already bought one!', hint: '(be going to)', a: ['am going to', '\'m going to'], why: 'A plan you already decided → going to.' },
      { k: 'tf', q: '"The train leaves at 7:15 tomorrow."', a: true, why: 'Timetables use the present simple, even about the future.' },
      { k: 'mc', q: '"What are your plans for tonight?" "I ___ my friends at the cinema."', o: ['\'m meeting', 'meet', 'will meet'], a: 0, why: 'A fixed plan with friends → present continuous.' },
      { k: 'mc', q: 'I promise I ___ tell anyone your secret.', o: ['won\'t', 'am not going', 'don\'t'], a: 0, why: 'A promise → will / won\'t.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'What are you going to do this summer?', why: 'Asking about plans → going to.' },
      { k: 'spot', s: 'It\'s cold. *I* close the window, OK?', fix: 'I\'ll', why: 'A decision you make now → I\'ll (I will).' },
      { k: 'build', s: 'I think it will be sunny tomorrow.', why: 'A prediction from your opinion → will.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'We *go* to Eilat next weekend. We booked the hotel!', fix: 'are going', why: 'A fixed plan (the hotel is booked) → present continuous: we are going.' },
    { k: 'type', q: '"This bag is so heavy." "I ___ carry it for you!"', a: ['will', '\'ll'], why: 'An offer you make now → I\'ll (I will).' },
    { k: 'mc', q: 'Which one is a prediction from what you can see?', o: ['Careful! You\'re going to fall!', 'I\'ll call you later.', 'I\'m playing tennis on Monday.'], a: 0,
      why: 'You can see it is about to happen → going to.' }
  ]
},
{
  id: 'b1g03', url: 'https://test-english.com/grammar-points/b1/past-simple-present-perfect/', type: 'grammar',
  title: 'Finished time or up to now?', dinner: 'What is the most interesting thing you have ever done?',
  hook: { q: 'When did a person walk on the Moon for the first time?', o: ['1959', '1969', '1979'], a: 1,
    reveal: 'In *1969*. Neil Armstrong *walked* on the Moon in 1969 (a finished time: past simple). Since then only twelve people *have walked* on the Moon (up to now: present perfect).' },
  learn: { kind: 'rule', title: 'Past simple or present perfect?',
    lines: ['*Past simple* for a finished time (yesterday, last year, in 2019, when I was six): I *visited* Rome last summer.',
      '*Present perfect* (have / has + past participle) for experiences and for up to now, with no finished time: I*\'ve been* to Rome. *Have you ever* eaten sushi?',
      'Helpers: *ever, never, already, yet, just, since, for* often go with the present perfect.'],
    ex: ['I *have* never *seen* snow.', 'I *saw* snow for the first time in 2021.'],
    he: 'בעברית יש רק עבר אחד. באנגלית: יש זמן שהסתיים (yesterday, in 2019)? עבר פשוט. חוויה, או משהו שנמשך עד עכשיו בלי זמן מוגדר? have / has + V3.' },
  steps: [
    { name: 'When?', items: [
      { k: 'mc', q: 'I ___ my phone yesterday, and I still can\'t find it.', o: ['lost', 'have lost'], a: 0, why: 'yesterday = a finished time → past simple.' },
      { k: 'mc', q: 'Have you ever ___ a horse?', o: ['ridden', 'rode', 'ride'], a: 0, why: 'have + past participle: ridden.' },
      { k: 'mc', q: 'She ___ in Tel Aviv since 2020.', o: ['has lived', 'lived', 'lives'], a: 0, why: 'since 2020 = from then up to now → has lived.' },
      { k: 'mc', q: 'We ___ to Greece two years ago.', o: ['went', 'have gone', 'have been'], a: 0, why: 'two years ago = a finished time → went.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'I\'ve ___ finished my homework, so I can play now!', hint: '(just / yet / ever)', a: ['just', 'already'], why: 'just = a very short time ago. (already works too.)' },
      { k: 'tf', q: '"I have seen that film last week."', a: false, fix: 'I saw that film last week.', why: 'last week = a finished time → past simple.' },
      { k: 'mc', q: '"Have you done your homework?" "Not ___."', o: ['yet', 'already', 'just'], a: 0, why: 'Not yet = not until now.' },
      { k: 'type', q: 'How long ___ you known your best friend?', a: ['have'], why: 'How long + have + known: from the past up to now.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'I have never been to New York.', why: 'An experience in your life → present perfect.' },
      { k: 'spot', s: 'He has *broke* his arm. He\'s in hospital.', fix: 'broken', why: 'has + past participle: broken.' },
      { k: 'build', s: 'When did you start learning English?', why: 'When asks about a finished time → past simple: did you start.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I *have* finished my book yesterday!', fix: '', why: 'yesterday → past simple: I finished my book yesterday.', he: 'עם yesterday משתמשים בעבר פשוט, בלי have.' },
    { k: 'type', q: '___ you ever eaten sushi?', a: ['have'], why: 'Have you ever…? asks about experiences.' },
    { k: 'mc', q: 'Which question asks about an experience?', o: ['Have you ever met a famous person?', 'Did you meet anyone at the party?', 'When did you meet him?'], a: 0,
      why: 'ever + present perfect = at any time in your life.' }
  ]
},
{
  id: 'b1v01', url: 'https://test-english.com/vocabulary/b1/more-daily-routines-b1-english-vocabulary/', type: 'vocabulary',
  title: 'More daily routines', dinner: 'How do you unwind after a busy day?',
  hook: { q: 'Doctors say teenagers need about how many hours of sleep a night?', o: ['6 to 7', '8 to 10', '11 to 12'], a: 1,
    reveal: '*8 to 10 hours*! But many teens stay up late and then *oversleep*. Today\'s words are about your daily routine.' },
  learn: { kind: 'words', title: 'Words for your day', words: [
    { w: 'oversleep', d: 'sleep longer than you planned', ex: 'I *overslept* and missed the bus.' },
    { w: 'set the alarm', d: 'make your clock ring at a certain time', ex: 'I *set the alarm* for 6:30.' },
    { w: 'have a lie-in', d: 'stay in bed later than usual, on purpose', ex: 'On Saturdays I *have a lie-in*.' },
    { w: 'rush', d: 'do something or go somewhere very fast', ex: 'I always *rush* in the morning.' },
    { w: 'commute', d: 'the trip to school or work every day', ex: 'My dad\'s *commute* takes an hour.' },
    { w: 'run late', d: 'be later than you should be', ex: 'Sorry, I\'m *running late*!' },
    { w: 'catch up on', d: 'do something you had no time for before', ex: 'I need to *catch up on* my homework.' },
    { w: 'unwind', d: 'relax after a busy time', ex: 'I *unwind* by listening to music.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'Stay in bed later than usual, because you can:', o: ['have a lie-in', 'oversleep', 'rush'], a: 0, why: 'A lie-in is on purpose. Oversleeping is a mistake!' },
      { k: 'mc', q: 'Sleep longer than you planned:', o: ['oversleep', 'unwind', 'commute'], a: 0, why: 'oversleep = sleep too long, by mistake.' },
      { k: 'mc', q: 'Relax after a busy day:', o: ['unwind', 'rush', 'run late'], a: 0, why: 'unwind = relax.' },
      { k: 'mc', q: 'Your daily trip to school or work:', o: ['commute', 'alarm', 'lie-in'], a: 0, why: 'commute = the daily trip.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'A good morning or a bad morning?', g: ['good', 'bad'],
        w: [['have a lie-in', 0], ['have time for breakfast', 0], ['wake up on time', 0], ['oversleep', 1], ['run late', 1], ['miss the bus', 1]],
        why: 'good: a lie-in, time for breakfast, waking up on time · bad: oversleeping, running late, missing the bus' },
      { k: 'hear', say: 'Sorry, I\'m running late. The bus didn\'t come.', q: 'What is the problem?', o: ['She is late.', 'She is sick.', 'She is lost.'], a: 0,
        why: 'running late = later than she should be.' },
      { k: 'spell', w: 'rush', clue: 'Go somewhere very fast, because you are late.', why: 'rush: r-u-s-h.' },
      { k: 'mc', q: 'This weekend I want to catch ___ on sleep.', o: ['up', 'on', 'out'], a: 0, why: 'catch up on something.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Noa\'s Monday',
        t: 'On Monday I [1] because I forgot to [2] the alarm. I had to [3] to school, and I was [4] for my first class!',
        gaps: [
          { o: ['overslept', 'unwound', 'commuted'], a: 0, why: 'slept too long → overslept.' },
          { o: ['set', 'put', 'make'], a: 0, why: 'set the alarm.' },
          { o: ['rush', 'unwind', 'relax'], a: 0, why: 'go very fast → rush.' },
          { o: ['late', 'early', 'ready'], a: 0, why: 'She overslept, so she was late.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I always *oversleep* on Saturdays because I want to.', fix: 'have a lie-in', why: 'Staying in bed on purpose is a lie-in. Oversleeping is a mistake.' },
    { k: 'type', q: 'After a long day, I ___ by watching a series.', a: ['unwind', 'relax'], why: 'unwind = relax.' }
  ]
},
{
  id: 'b1v02', url: 'https://test-english.com/vocabulary/b1/relationships-b1-english-vocabulary/', type: 'vocabulary',
  title: 'Friends and family', dinner: 'What do you and your best friend have in common?',
  hook: { q: 'A famous scientist says most people have about how many close friends at one time?', o: ['About 5', 'About 50', 'About 500'], a: 0,
    reveal: 'About *5*! The scientist Robin Dunbar says we have about 5 close friends, 15 good friends and 150 people we know well.' },
  learn: { kind: 'words', title: 'Words about people we love', words: [
    { w: 'get on well with', d: 'have a friendly relationship with', ex: 'I *get on well with* my cousin.' },
    { w: 'fall out with', d: 'stop being friends after an argument', ex: 'Dan *fell out with* Tom over a game.' },
    { w: 'make up', d: 'become friends again after an argument', ex: 'They argued, but they *made up* the next day.' },
    { w: 'have a lot in common', d: 'like the same things', ex: 'We *have a lot in common*: we both love music.' },
    { w: 'trust', d: 'believe that someone is honest and good', ex: 'I *trust* my sister with my secrets.' },
    { w: 'rely on', d: 'need someone and know they will help', ex: 'You can always *rely on* Grandpa.' },
    { w: 'get to know', d: 'learn more about a person', ex: 'I want to *get to know* the new girl.' },
    { w: 'close friend', d: 'a very good friend', ex: 'Maya is my *close friend*.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'Become friends again after an argument:', o: ['make up', 'fall out', 'get on'], a: 0, why: 'make up = be friends again.' },
      { k: 'mc', q: 'Stop being friends after an argument:', o: ['fall out with', 'get on with', 'rely on'], a: 0, why: 'fall out with someone.' },
      { k: 'mc', q: 'Like the same things:', o: ['have a lot in common', 'get to know', 'trust'], a: 0, why: 'have a lot in common.' },
      { k: 'mc', q: 'Believe that someone is honest:', o: ['trust', 'rely', 'argue'], a: 0, why: 'trust someone.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Good or bad for a friendship?', g: ['good', 'bad'],
        w: [['make up', 0], ['get on well', 0], ['trust each other', 0], ['fall out', 1], ['argue all the time', 1], ['tell lies', 1]],
        why: 'good: making up, getting on well, trust · bad: falling out, arguing all the time, lies' },
      { k: 'hear', say: 'We had a big argument, but we made up the next day.', q: 'What happened in the end?', o: ['They became friends again.', 'They stopped talking.', 'They moved away.'], a: 0,
        why: 'make up = become friends again.' },
      { k: 'spell', w: 'trust', clue: 'Believe that someone is honest and good.', why: 'trust: t-r-u-s-t.' },
      { k: 'mc', q: 'I get ___ well with my brother. We never argue.', o: ['on', 'up', 'in'], a: 0, why: 'get on well with someone.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Best friends',
        t: 'Lia and I [1] a lot in common: we love the same books and films. Last month we [2] out over a silly game, but we [3] up after two days. Now I know I can always [4] on her.',
        gaps: [
          { o: ['have', 'get', 'make'], a: 0, why: 'have a lot in common.' },
          { o: ['fell', 'got', 'made'], a: 0, why: 'fall out = stop being friends; in the past: fell out.' },
          { o: ['made', 'got', 'fell'], a: 0, why: 'make up = become friends again; in the past: made up.' },
          { o: ['rely', 'trust', 'get'], a: 0, why: 'rely on someone.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Yesterday I fell *in* with my best friend, but now we are OK.', fix: 'out', why: 'fall out with someone = stop being friends after an argument.' },
    { k: 'type', q: 'We argued, but then we ___ up.', hint: '(make)', a: ['made'], why: 'make up → in the past: made up.' }
  ]
},
{
  id: 'b1l01', url: 'https://test-english.com/listening/b1/working-while-travelling-the-world-b1-english-listening-test/', type: 'listening',
  title: 'Working around the world', dinner: 'Where would you like to work and travel one day?',
  hook: { q: 'With a "working holiday visa", young people can work while they travel. Up to what age, usually?', o: ['18', '30 or 35', '50'], a: 1,
    reveal: 'Usually up to *30 or 35*. With a working holiday visa, young people can travel and work in another country for about a year.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a working holiday', d: 'a long trip where you work to pay for it' },
    { w: 'save up', d: 'keep money for later' },
    { w: 'homesick', d: 'sad because you miss your home and family' }
  ], predict: { q: 'Tom travelled and worked for a year. Which job do you think he liked most?', o: ['Teaching English', 'Working on a farm', 'Washing dishes'] } },
  show: { cast: 'A radio show about travel. The host talks to Tom, who is 24.', names: { H: 'Host', T: 'Tom' }, voices: { H: 'bf_isabella', T: 'am_eric' },
    parts: [
      { lines: [
        ['H', 'Welcome back to Travel Talk. With me is Tom, who spent a year working and travelling. Tom, where did you go?'],
        ['T', 'Hi! I started in Australia, then I went to New Zealand and Japan. I had a working holiday visa, so I could work everywhere.'],
        ['H', 'So you didn\'t save up before the trip?'],
        ['T', 'I saved a little, but not much. I paid for most of the trip with the jobs I did.']
      ], items: [
        { k: 'mc', q: 'How many countries did Tom visit?', o: ['three', 'two', 'four'], a: 0, why: 'Australia, New Zealand and Japan.' },
        { k: 'mc', q: 'How did Tom pay for most of the trip?', o: ['with the jobs he did', 'with money from his parents', 'with his savings'], a: 0,
          why: '"I paid for most of the trip with the jobs I did."' }
      ] },
      { lines: [
        ['H', 'What kind of jobs?'],
        ['T', 'In Australia I picked fruit on a farm. It was hard work, and it was really hot. In New Zealand I washed dishes in a café.'],
        ['H', 'And Japan?'],
        ['T', 'In Japan I taught English to children. That was my favourite job. The kids were so funny, and I learned some Japanese too.']
      ], items: [
        { k: 'mc', q: 'Where did Tom pick fruit?', o: ['in Australia', 'in New Zealand', 'in Japan'], a: 0, why: '"In Australia I picked fruit on a farm."' },
        { k: 'mc', q: 'What was hard about the farm job?', o: ['It was very hot.', 'The boss was angry.', 'It was far away.'], a: 0, why: '"It was hard work, and it was really hot."' },
        { k: 'mc', q: 'Which job was his favourite?', o: ['teaching English', 'washing dishes', 'picking fruit'], a: 0, why: '"That was my favourite job."' }
      ] },
      { lines: [
        ['H', 'Were you ever homesick?'],
        ['T', 'Yes, at Christmas in Australia. It was summer and I missed my family. But I called them every week.'],
        ['H', 'Any advice for our listeners?'],
        ['T', 'Learn a few words of the language, and say yes to new things!']
      ], items: [
        { k: 'tf', q: 'Tom never missed home.', a: false, fix: 'He was homesick at Christmas.', why: '"Yes, at Christmas in Australia… I missed my family."' },
        { k: 'mc', q: 'What is Tom\'s advice?', o: ['Learn some of the language and try new things.', 'Save a lot of money first.', 'Travel with friends.'], a: 0,
          why: '"Learn a few words of the language, and say yes to new things!"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 2, q: 'At Christmas Tom felt ___ because he missed his family.', a: ['homesick', 'sad'], why: 'homesick = sad because you miss home.' },
      { k: 'mc', clip: 2, q: 'Why was Christmas strange for Tom in Australia?', o: ['It was summer there.', 'He had to work.', 'Nobody celebrated it.'], a: 0,
        why: 'In Australia, December is summer.' },
      { k: 'hear', say: 'I paid for most of the trip with the jobs I did.', q: 'What did he pay with?', o: ['the money from his jobs', 'his credit card', 'his savings'], a: 0,
        why: 'He paid with the money from his jobs.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'I taught English to children in Japan.', why: 'teach → taught (past simple).' }
  ]
},
{
  id: 'b1l02', url: 'https://test-english.com/listening/b1/where-did-you-stay-b1-english-listening-test/', type: 'listening',
  title: 'Where did you stay?', dinner: 'What was the best place you ever stayed on holiday?',
  hook: { q: 'Which of these is a real hotel?', o: ['A hotel made of ice in Sweden', 'A hotel on the Moon', 'A hotel inside a volcano'], a: 0,
    reveal: 'The *ice hotel* in Sweden is real! It is built again every winter, and even the beds are made of ice.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a hostel', d: 'a cheap place where travellers share rooms' },
    { w: 'a campsite', d: 'a place where people put up their tents' },
    { w: 'crowded', d: 'with too many people' }
  ], predict: { q: 'Two friends talk about their holidays. Who do you think had the worse place to stay?', o: ['The one in the hostel', 'The one who went camping', 'Both had a great time'] } },
  show: { cast: 'Dana and Eli are back at school after the summer.', names: { D: 'Dana', E: 'Eli' }, voices: { D: 'af_sarah', E: 'am_adam' },
    parts: [
      { lines: [
        ['E', 'Hi Dana! How was your trip to Amsterdam?'],
        ['D', 'Amazing! We stayed in a hostel near the station. It was cheap, and we met people from all over the world.'],
        ['E', 'Didn\'t you share a room with strangers?'],
        ['D', 'Yes, with six other girls. It was a bit crowded, but they were really nice.']
      ], items: [
        { k: 'mc', q: 'Where did Dana stay?', o: ['in a hostel', 'in a hotel', 'at a campsite'], a: 0, why: '"We stayed in a hostel near the station."' },
        { k: 'mc', q: 'Who shared her room?', o: ['six other girls', 'her family', 'two friends from school'], a: 0, why: '"with six other girls"' }
      ] },
      { lines: [
        ['D', 'And you? Where did you stay?'],
        ['E', 'We went camping in the north, near a lake. My dad wanted a real adventure.'],
        ['D', 'Sounds fun!'],
        ['E', 'It was fun for one day. Then it rained for three days, and our tent wasn\'t waterproof. Everything got wet!']
      ], items: [
        { k: 'mc', q: 'Why did Eli\'s family go camping?', o: ['His dad wanted an adventure.', 'It was cheap.', 'His friends were there.'], a: 0, why: '"My dad wanted a real adventure."' },
        { k: 'mc', q: 'What went wrong?', o: ['It rained and the tent let water in.', 'They lost the tent.', 'The lake was dirty.'], a: 0,
          why: '"It rained for three days, and our tent wasn\'t waterproof."' },
        { k: 'type', q: 'It rained for ___ days.', a: ['three', '3'], why: '"Then it rained for three days."' }
      ] },
      { lines: [
        ['D', 'Oh no! What did you do?'],
        ['E', 'On the fourth day we gave up and found a small hotel in the village. The beds were dry and the breakfast was great!'],
        ['D', 'So the best part of camping was the hotel?'],
        ['E', 'Exactly!']
      ], items: [
        { k: 'mc', q: 'What did they do on the fourth day?', o: ['They moved to a hotel.', 'They went home.', 'They bought a new tent.'], a: 0,
          why: '"we gave up and found a small hotel in the village."' },
        { k: 'tf', q: 'Eli loved every day of camping.', a: false, fix: 'Only the first day was fun.', why: '"It was fun for one day."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'mc', clip: 1, q: '"Our tent wasn\'t waterproof." This means…', o: ['water could get in', 'it was too small', 'it was very old'], a: 0, why: 'waterproof = water can\'t get in.' },
      { k: 'mc', clip: 2, q: '"We gave up." Here "give up" means…', o: ['stop trying', 'start again', 'go up a hill'], a: 0, why: 'give up = stop trying.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'We stayed in a small hotel near the lake.', why: 'stay in a hotel, at a campsite, in a hostel.' }
  ]
},
{
  id: 'b1l03', url: 'https://test-english.com/listening/b1/stories-of-school-and-education-b1-english-listening-test/', type: 'listening',
  title: 'School stories', dinner: 'Who is a teacher who really helped you, and how?',
  hook: { q: 'In which country do children start school later than most, at age 7?', o: ['Finland', 'The UK', 'The USA'], a: 0,
    reveal: '*Finland*! Children there start school at 7, and Finland is famous for its great schools.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'strict', d: 'with a lot of rules that you must follow' },
    { w: 'fail an exam', d: 'not pass it' },
    { w: 'encourage', d: 'give someone the confidence to do something' }
  ], predict: { q: 'Two people remember their school days. What do you think they remember most?', o: ['A person who helped them', 'The school food', 'The building'] } },
  show: { cast: 'Ruth and Sam remember their school days.', names: { A: 'Ruth', B: 'Sam' }, voices: { A: 'bf_emma', B: 'bm_daniel' },
    parts: [
      { lines: [
        ['A', 'When I was at school, my maths teacher, Mr Clark, was very strict. Nobody talked in his lessons, and he gave us homework every day.'],
        ['A', 'I was bad at maths and I was afraid of him. But one day he stayed after class and explained everything again, just for me. He was strict, but he really cared.']
      ], items: [
        { k: 'mc', q: 'What was Mr Clark like in class?', o: ['strict', 'funny', 'lazy'], a: 0, why: '"my maths teacher, Mr Clark, was very strict"' },
        { k: 'mc', q: 'What did he do for Ruth?', o: ['He explained the lesson again after class.', 'He gave her an easy test.', 'He called her parents.'], a: 0,
          why: '"he stayed after class and explained everything again, just for me."' }
      ] },
      { lines: [
        ['B', 'I failed my first big exam when I was fifteen. It was history, and I didn\'t study at all. I thought I was too clever to study!'],
        ['B', 'My parents weren\'t angry. They just asked me what I wanted to do next. So I made a plan, studied every evening, and passed the exam the next year.']
      ], items: [
        { k: 'mc', q: 'Why did Sam fail the exam?', o: ['He didn\'t study.', 'He was ill.', 'The exam was unfair.'], a: 0, why: '"I didn\'t study at all."' },
        { k: 'tf', q: 'Sam\'s parents were very angry.', a: false, fix: 'His parents weren\'t angry.', why: '"My parents weren\'t angry."' },
        { k: 'mc', q: 'What happened the next year?', o: ['He passed the exam.', 'He failed again.', 'He changed schools.'], a: 0, why: '"…and passed the exam the next year."' }
      ] },
      { lines: [
        ['A', 'So for both of us, the most important lesson wasn\'t in a book.'],
        ['B', 'Right. Someone believed in us, and that encouraged us to try harder.']
      ], items: [
        { k: 'mc', q: 'What is the main idea of both stories?', o: ['Someone who believes in you helps you try harder.', 'Maths and history are difficult.', 'Strict teachers are bad teachers.'], a: 0,
          why: '"Someone believed in us, and that encouraged us to try harder."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'Sam ___ his first big exam when he was fifteen.', a: ['failed'], why: 'fail an exam = not pass it.' },
      { k: 'mc', clip: 0, q: 'At first, Ruth was ___ Mr Clark.', o: ['afraid of', 'in love with', 'angry with'], a: 0, why: '"I was afraid of him."' },
      { k: 'hear', say: 'He was strict, but he really cared.', q: 'What does she say about him?', o: ['He cared about his students.', 'He never smiled.', 'He was a new teacher.'], a: 0,
        why: 'He was strict, but he really cared.' },
      { k: 'sort', q: 'How can a teacher be?', g: ['good for students', 'not so good'],
        w: [['encouraging', 0], ['patient', 0], ['fair', 0], ['boring', 1], ['unfair', 1], ['impatient', 1]],
        why: 'good: encouraging, patient, fair · not so good: boring, unfair, impatient' }
    ] }
  ],
  use: [
    { k: 'build', s: 'My favourite teacher encouraged me to try harder.', why: 'encourage someone to do something.' }
  ]
},
{
  id: 'b1r01', url: 'https://test-english.com/reading/b1/travel-around-europe-in-5-stops-b1-english-reading-test/', type: 'reading',
  title: 'Five stops by train', dinner: 'If you could visit five cities in Europe, which would you choose?',
  hook: { q: 'Which European city has more bridges than Venice?', o: ['Amsterdam', 'Paris', 'London'], a: 0,
    reveal: '*Amsterdam* has more than 1,200 bridges, about three times as many as Venice!' },
  learn: { kind: 'intro', title: 'Before you read', line: 'Noa, 15, travelled around Europe by train with her family. She wrote about it on her blog.',
    predict: { q: 'What do you think was the best part of her trip?', o: ['The surprises on the way', 'The shopping', 'The hotels'] } },
  story: { title: 'Five stops by train', chunks: [
    { text: 'Last summer my family did something crazy: we travelled around Europe by train, with one backpack each. Our first stop was Paris. We climbed the Eiffel Tower, which was much bigger than I expected, and ate the best croissants of my life. My little brother wanted to stay forever, but the next morning we caught a fast train to Amsterdam.',
      items: [
        { k: 'mc', q: 'How did the family travel?', o: ['by train', 'by car', 'by plane'], a: 0, why: '"we travelled around Europe by train"' },
        { k: 'tf', q: 'The Eiffel Tower was smaller than Noa expected.', a: false, fix: 'It was much bigger than she expected.', why: '"much bigger than I expected"' }
      ] },
    { text: 'In Amsterdam we rented bikes, like everyone there. It was scary at first, because there are bikes everywhere! Then we went to Berlin, where we learned a lot about history. A guide showed us a piece of the Berlin Wall, and I felt how important that place is. In Prague it rained all day, so we spent hours in a cosy café playing cards.',
      items: [
        { k: 'mc', q: 'Why was cycling in Amsterdam scary at first?', o: ['There were bikes everywhere.', 'The bikes were broken.', 'It was raining.'], a: 0, why: '"there are bikes everywhere!"' },
        { k: 'mc', q: 'What did they do in Prague?', o: ['They played cards in a café.', 'They climbed a tower.', 'They rented bikes.'], a: 0, why: '"we spent hours in a cosy café playing cards."' },
        { k: 'find', q: 'Find a word that means "warm and comfortable".', a: 'cosy', why: 'cosy = warm and comfortable.' }
      ] },
    { text: 'Our last stop was Vienna, the city of music. We went to a concert in a beautiful old hall, and even my brother didn\'t fall asleep! Travelling by train was slower than flying, but we saw so much from the windows: rivers, castles and tiny villages. My advice? Pack light, and don\'t plan every minute. The best moments are the ones you don\'t expect.',
      items: [
        { k: 'mc', q: 'What did they do in Vienna?', o: ['They went to a concert.', 'They went shopping.', 'They visited a castle.'], a: 0, why: '"We went to a concert in a beautiful old hall"' },
        { k: 'mc', q: 'What is good about the train, says Noa?', o: ['You see a lot from the windows.', 'It is faster than flying.', 'It is very cheap.'], a: 0, why: '"we saw so much from the windows"' },
        { k: 'find', q: 'Find a word that means "very small".', a: 'tiny', why: 'tiny = very small.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is Noa\'s main advice?', o: ['Travel light and leave time for surprises.', 'Always fly, it is faster.', 'Plan every minute of the trip.'], a: 0,
        why: '"Pack light, and don\'t plan every minute."' }
    ] }
  ],
  use: [
    { k: 'type', q: 'Travelling by train was ___ than flying.', hint: '(slow)', a: ['slower'], why: 'slow → slower (comparing two things).' }
  ]
},
{
  id: 'b1u02', url: 'https://test-english.com/use-of-english/b1/b1-english-test-2-multiple-choice-questions/', type: 'use-of-english',
  title: 'The parrot who runs the shop', dinner: 'If our pet could talk, what do you think it would say?',
  hook: { q: 'How many words can a clever parrot learn?', o: ['About 10', 'Hundreds, sometimes more', 'None, they only copy sounds'], a: 1,
    reveal: '*Hundreds*! A famous parrot called Puck knew about 1,700 words, a world record.' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a funny news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A parrot works in a pet shop. What do you think she does?', o: ['She talks to the customers.', 'She counts the money.', 'She cleans the floor.'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'The parrot who runs the shop',
        t: 'When customers walk into Pet Paradise in Leeds, the first thing they hear is "Good morning! Can I help you?" The voice [1] to Coco, a nine-year-old parrot [2] lives in a cage near the door. "She [3] to me talking to customers for years," says the owner, Sam Hart. "Now she even says goodbye!" Coco [4] to be shy, but these days she is the star of the shop. Last month she [5] on local TV, and since then people [6] from all over the city to meet her. "I think Coco [7] be my best employee," Sam laughs. "And she [8] asks for a pay rise!"',
        gaps: [
          { o: ['belongs', 'is belonging', 'belong'], a: 0, why: 'belong is a state verb → belongs.' },
          { o: ['who', 'where', 'what'], a: 0, why: 'who (or that) for a person or a pet with a name.' },
          { o: ['has been listening', 'is listening', 'listens'], a: 0, why: 'for years → has been listening.' },
          { o: ['used', 'was used', 'uses'], a: 0, why: 'used to = it was true in the past, but not now.' },
          { o: ['was shown', 'showed', 'has shown'], a: 0, why: 'Someone showed Coco on TV → she was shown (passive).' },
          { o: ['have come', 'came', 'are coming since'], a: 0, why: 'since then → have come (present perfect).' },
          { o: ['must', 'can\'t', 'mustn\'t'], a: 0, why: 'must = I\'m sure it is true.' },
          { o: ['never', 'always', 'often'], a: 0, why: 'The joke: the best employee never asks for more money.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'I ___ English for five years.', o: ['have been learning', 'am learning', 'learn'], a: 0, why: 'for five years, up to now → have been learning.' },
      { k: 'mc', q: 'My grandfather ___ to live in Morocco.', o: ['used', 'use', 'was used'], a: 0, why: 'used to + verb = in the past.' },
      { k: 'tf', q: '"The film was directed by a 19-year-old."', a: true, why: 'The passive: was + directed.' },
      { k: 'type', q: 'That\'s the girl ___ won the race.', a: ['who', 'that'], why: 'who or that for people.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Coco has lived in the shop for nine years.', why: 'for nine years, up to now → has lived.' }
  ]
}
];
