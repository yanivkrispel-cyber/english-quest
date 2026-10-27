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
    predict: { q: 'A parrot works in a pet shop. What do you think he does?', o: ['He talks to the customers.', 'He counts the money.', 'He cleans the floor.'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'The parrot who runs the shop',
        t: 'When customers walk into Pet Paradise in Leeds, the first thing they hear is "Good morning! Can I help you?" The voice [1] to Coco, a nine-year-old parrot [2] lives in a cage near the door. "He [3] to me talking to customers for years," says the owner, Sam Hart. "Now he even says goodbye!" Coco [4] to be shy, but these days he is the star of the shop. Last month he [5] on local TV, and since then people [6] from all over the city to meet him. "I think Coco [7] be my best employee," Sam laughs. "And he [8] asks for a pay rise!"',
        gaps: [
          { o: ['belongs', 'is belonging', 'belong'], a: 0, why: 'belong is a state verb → belongs.' },
          { o: ['who', 'where', 'what'], a: 0, why: 'who (or that) for a person or a pet with a name.' },
          { o: ['has been listening', 'is listening', 'listens'], a: 0, why: 'for years → has been listening.' },
          { o: ['used', 'was used', 'uses'], a: 0, why: 'used to = it was true in the past, but not now.' },
          { o: ['was shown', 'showed', 'has shown'], a: 0, why: 'Someone showed Coco on TV → he was shown (passive).' },
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
},
{
  id: 'b1g04', url: 'https://test-english.com/grammar-points/b1/present-perfect-simple-present-perfect-continuous/', type: 'grammar',
  title: 'How long or how many?', dinner: 'What have you been practising a lot recently?',
  hook: { q: 'How many hearts does an octopus have?', o: ['One', 'Two', 'Three'], a: 2,
    reveal: '*Three*! Scientists *have been studying* octopuses for many years (an activity up to now), and they *have found* some amazing things (a result).' },
  learn: { kind: 'rule', title: 'Present perfect simple or continuous?',
    lines: ['*Present perfect continuous* (have / has been + -ing) for an activity that started in the past and is still going on, or has just stopped: I*\'ve been reading* this book all week. Why are you wet? I*\'ve been swimming*.',
      '*Present perfect simple* (have / has + past participle) for a result, or how many: I*\'ve read* three chapters. She*\'s finished* her project.',
      'How long → usually continuous. How many / how much → simple. State verbs (know, like, have = own) stay simple: I*\'ve known* her for years.'],
    ex: ['I*\'ve been painting* my room all morning, and I*\'ve painted* two walls.', 'How long *have* you *been waiting*?'],
    he: 'בעברית אומרים "אני מחכה כבר שעה" בהווה, אבל באנגלית: I\'ve been waiting for an hour. משך הזמן (how long) = have been + ing. כמה או תוצאה (how many) = have + V3.' },
  steps: [
    { name: 'Activity or result?', items: [
      { k: 'mc', q: 'I\'m so tired. I ___ football all afternoon.', o: ['\'ve been playing', '\'m playing', 'play'], a: 0,
        why: 'An activity that went on all afternoon and explains how you feel now → have been playing.' },
      { k: 'mc', q: 'Tamar ___ three books this month, and now she\'s starting the fourth.', o: ['has read', 'has been reading', 'reads'], a: 0,
        why: 'three books = how many, and they are finished → has read.' },
      { k: 'mc', q: 'How long ___ you been learning the piano?', o: ['have', 'did', 'are'], a: 0, why: 'How long + have + been + -ing.' },
      { k: 'mc', q: 'Your hands are so dirty! ___ in the garden?', o: ['Have you been working', 'Do you work', 'Did you worked'], a: 0,
        why: 'We can see the result of an activity that has just stopped → have you been working.' }
    ] },
    { name: 'Simple or continuous?', items: [
      { k: 'tf', q: '"I\'ve been knowing Yoni since we were six."', a: false, fix: 'I\'ve known Yoni since we were six.', why: 'know is a state verb → have known, not have been knowing.',
        he: 'know הוא פועל מצב: I\'ve known, אף פעם לא I\'ve been knowing.' },
      { k: 'type', q: 'It ___ raining since this morning. Take an umbrella!', hint: '(be)', a: ['has been', '\'s been'], why: 'Still going on since the morning → has been raining.' },
      { k: 'mc', q: 'I ___ my homework. Can I go out now?', o: ['\'ve finished', '\'ve been finishing', 'finish'], a: 0, why: 'A result: the homework is done now → have finished.' },
      { k: 'type', q: 'We have been ___ for the bus for twenty minutes!', hint: '(wait)', a: ['waiting'], why: 'have been + -ing: waiting.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'How long have you been living here?', why: 'How long + present perfect continuous: from the past up to now.' },
      { k: 'spot', s: 'My sister has been *practise* the violin all day.', fix: 'practising', why: 'has been + -ing: practising.' },
      { k: 'build', s: 'I have already sent three messages.', why: 'three messages = how many → present perfect simple.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'My grandpa has been *having* this car for twenty years.', fix: 'had', why: 'have (= own) is a state verb → has had.',
      he: 'have במובן "יש לו" הוא פועל מצב: has had, ולא has been having.' },
    { k: 'type', q: 'Sorry, I\'m all red. I\'ve ___ running in the park.', a: ['been'], why: 'I\'ve been running = an activity that has just stopped, and you can see it.' },
    { k: 'mc', q: 'Which sentence tells us how many?', o: ['I\'ve made ten sandwiches.', 'I\'ve been making sandwiches all morning.', 'I\'m making sandwiches.'], a: 0,
      why: 'ten sandwiches = how many → present perfect simple.' }
  ]
},
{
  id: 'b1g05', url: 'https://test-english.com/grammar-points/b1/during-for-while/', type: 'grammar',
  title: 'During, for or while?', dinner: 'What do you usually do during the summer holidays?',
  hook: { q: 'Koalas are famous sleepers. Up to how many hours a day can they sleep?', o: ['About 8 hours', 'About 20 hours', 'About 2 hours'], a: 1,
    reveal: 'Up to about *20 hours*! Koalas sleep *for* most of the day, they eat leaves *during* the night, and they hardly move *while* they are awake.' },
  learn: { kind: 'rule', title: 'During, for and while',
    lines: ['*for* + a length of time (how long?): for ten minutes, for two weeks, for years.',
      '*during* + a noun (when?): during the lesson, during the night, during the holidays.',
      '*while* + a subject and a verb: while I was sleeping, while we were eating.'],
    ex: ['I fell asleep *during* the film. I slept *for* an hour!', 'The phone rang *while* I was in the shower.'],
    he: 'גם during וגם while הם "בזמן" או "במהלך". during בא לפני שם עצם (during the lesson), ו-while לפני משפט עם פועל (while I was eating). for עונה על "כמה זמן".' },
  steps: [
    { name: 'Which word?', items: [
      { k: 'mc', q: 'We lived in London ___ three years.', o: ['for', 'during', 'while'], a: 0, why: 'three years = how long → for.' },
      { k: 'mc', q: 'Please don\'t use your phone ___ the test.', o: ['during', 'while', 'for'], a: 0, why: 'the test is a noun → during.' },
      { k: 'mc', q: 'Someone took my bag ___ I was swimming.', o: ['while', 'during', 'for'], a: 0, why: 'I was swimming = subject + verb → while.' },
      { k: 'mc', q: 'I met a girl from Spain ___ my holiday in Eilat.', o: ['during', 'while', 'for'], a: 0, why: 'my holiday is a noun → during.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'Dad cooked dinner ___ we were doing our homework.', a: ['while', 'as', 'when'], why: 'we were doing = subject + verb → while.' },
      { k: 'tf', q: '"I waited during two hours."', a: false, fix: 'I waited for two hours.', why: 'two hours = how long → for.',
        he: 'כמה זמן? רק for: for two hours. during עונה על "מתי", לא על "כמה זמן".' },
      { k: 'mc', q: 'The lights went out ___ the storm.', o: ['during', 'while', 'for'], a: 0, why: 'the storm is a noun → during.' },
      { k: 'type', q: 'Can you hold my coat ___ a minute?', a: ['for'], why: 'a minute = how long → for.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'I read a book during the flight.', why: 'during + a noun (the flight).' },
      { k: 'spot', s: 'My cat sleeps *during* I am at school.', fix: 'while', why: 'I am at school = subject + verb → while.' },
      { k: 'build', s: 'We played cards for two hours.', why: 'for + how long.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'My brother talked *while* the whole film!', fix: 'during', why: 'the whole film is a noun → during.' },
    { k: 'type', q: 'Shira learned French ___ she was living in Paris.', a: ['while', 'when'], why: 'she was living = subject + verb → while.' },
    { k: 'mc', q: 'Which sentence is right?', o: ['We stayed at the beach for five hours.', 'We stayed at the beach during five hours.', 'We stayed at the beach while five hours.'], a: 0,
      why: 'five hours = how long → for.' }
  ]
},
{
  id: 'b1g06', url: 'https://test-english.com/grammar-points/b1/comparative-superlative-adjectives-adverbs/', type: 'grammar',
  title: 'Faster, better, the best', dinner: 'Who is the funniest person in our family, and why?',
  hook: { q: 'Which planet is the hottest in our solar system?', o: ['Mercury', 'Venus', 'Mars'], a: 1,
    reveal: '*Venus*! Mercury is *closer* to the Sun, but Venus is *hotter*, because its thick clouds keep the heat in. It is *the hottest* planet of all.' },
  learn: { kind: 'rule', title: 'Comparing things and actions',
    lines: ['Short words: *-er / the -est*. fast → faster → the fastest. big → bigger → the biggest. happy → happier → the happiest.',
      'Long words: *more / the most*. interesting → more interesting → the most interesting. Adverbs with -ly too: carefully → more carefully.',
      'Irregular: good / well → *better* → *the best*. bad / badly → *worse* → *the worst*. far → *further* → *the furthest*. Compare with *than*; for the same, use *as … as*.'],
    ex: ['Noa runs *faster than* me, but I swim *better*.', 'This is *the most exciting* game I\'ve ever played!'],
    he: 'בעברית אומרים "יותר טוב", אבל באנגלית אין more good: אומרים better. ו"הכי" = the + est, או the most למילים ארוכות.' },
  steps: [
    { name: 'Choose', items: [
      { k: 'mc', q: 'My phone is ___ than yours.', o: ['newer', 'more new', 'newest'], a: 0, why: 'new is short → newer than.' },
      { k: 'mc', q: 'Everest is ___ mountain in the world.', o: ['the highest', 'the higher', 'highest'], a: 0, why: 'One of all → the + -est: the highest.' },
      { k: 'mc', q: 'Can you speak ___? I can\'t hear you.', o: ['more loudly', 'loudlier', 'more loud'], a: 0, why: 'An adverb with -ly → more loudly.' },
      { k: 'mc', q: 'My little sister draws ___ than me.', o: ['better', 'gooder', 'more well'], a: 0, why: 'well → better (irregular).' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'Today is ___ than yesterday. I need a jumper.', hint: '(cold)', a: ['colder'], why: 'cold → colder than.' },
      { k: 'tf', q: '"This test was more easy than the last one."', a: false, fix: 'This test was easier than the last one.', why: 'easy → easier (y → i, then -er).',
        he: 'easy, happy, funny: מחליפים את ה-y ב-i ומוסיפים er. אומרים easier, לא more easy.' },
      { k: 'mc', q: 'Our school is ___ big as yours.', o: ['as', 'than', 'more'], a: 0, why: 'The same size → as big as.' },
      { k: 'type', q: 'That was ___ film I have ever seen!', hint: '(bad)', a: ['the worst'], why: 'bad → worse → the worst.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Ben is the tallest boy in our class.', why: 'the + -est + in a group.' },
      { k: 'spot', s: 'He is the *goodest* player on the team.', fix: 'best', why: 'good → better → the best.' },
      { k: 'build', s: 'I swim more slowly than my brother.', why: 'slowly is an adverb with -ly → more slowly than.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'My bag is *heavyer* than yours.', fix: 'heavier', why: 'heavy → heavier (y → i).' },
    { k: 'type', q: 'Of all my friends, Itay lives the ___ from school.', hint: '(far)', a: ['furthest', 'farthest'], why: 'far → further → the furthest.' },
    { k: 'mc', q: 'Which sentence compares how people do something?', o: ['Lior works harder than his brother.', 'Lior is taller than his brother.', 'Lior is the oldest child.'], a: 0,
      why: 'harder here says how he works: it is an adverb.' }
  ]
},
{
  id: 'b1g07', url: 'https://test-english.com/grammar-points/b1/an-the-no-article/', type: 'grammar',
  title: 'A, an, the or nothing?', dinner: 'If you could visit any country in the world, which one would you choose?',
  hook: { q: 'Which is the biggest ocean in the world?', o: ['The Atlantic', 'The Pacific', 'The Indian Ocean'], a: 1,
    reveal: '*The Pacific*! Oceans, seas and rivers take *the*: the Pacific, the Dead Sea, the Jordan. Most countries and continents take no article: Israel, Asia.' },
  learn: { kind: 'rule', title: 'A / an, the, or no article',
    lines: ['*a / an*: one thing, the first time we talk about it, and jobs. I saw *a* dog. She\'s *an* engineer.',
      '*the*: a thing we already know about, or the only one. *The* dog was huge. *the* sun, *the* sea, *the* Pacific.',
      '*no article*: things in general (plural or uncountable), most countries and cities, meals and sports. Dogs are clever. I love music. We play football after lunch.'],
    ex: ['I have *a* cat and *a* rabbit. *The* cat is black.', 'Cats sleep a lot. (= all cats)'],
    he: 'בעברית אין a, ולכן קל לשכוח אותו: She is a teacher, לא She is teacher. וכשמדברים באופן כללי לא שמים the: Dogs are clever, אפילו שבעברית אומרים "הכלבים חכמים".' },
  steps: [
    { name: 'Choose', items: [
      { k: 'mc', q: 'My mum is ___ doctor.', o: ['a', 'the', '(no article)'], a: 0, why: 'Jobs take a / an.' },
      { k: 'mc', q: 'Can you close ___ door, please? It\'s cold.', o: ['the', 'a', '(no article)'], a: 0, why: 'We both know which door: the door of this room → the.' },
      { k: 'mc', q: 'I love ___ chocolate!', o: ['(no article)', 'the', 'a'], a: 0, why: 'Chocolate in general → no article.' },
      { k: 'mc', q: 'We went to ___ Dead Sea last summer.', o: ['the', 'a', '(no article)'], a: 0, why: 'Seas and oceans take the.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'I saw ___ owl in our garden last night!', a: ['an'], why: 'owl starts with a vowel sound → an.' },
      { k: 'tf', q: '"Doctors say that the bananas are good for you."', a: false, fix: 'Doctors say that bananas are good for you.', why: 'All bananas, in general → no article.',
        he: 'כשמדברים על משהו באופן כללי לא שמים the: Bananas are good for you.' },
      { k: 'mc', q: 'We have ___ breakfast at seven o\'clock.', o: ['(no article)', 'a', 'the'], a: 0, why: 'Meals usually take no article: have breakfast.' },
      { k: 'type', q: 'Excuse me, is there ___ bank near here?', a: ['a'], why: 'Any bank, the first time we talk about it → a.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'My brother wants to be an actor.', why: 'A job → a / an, and actor starts with a vowel sound → an.' },
      { k: 'spot', s: 'She is *a* best student in our class.', fix: 'the', why: 'A superlative takes the: the best.' },
      { k: 'build', s: 'The sun is much bigger than the moon.', why: 'There is only one sun and one moon → the.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I want to be *the* pilot when I grow up.', fix: 'a', why: 'A job → a pilot.' },
    { k: 'type', q: 'Look at ___ moon! It\'s so big tonight.', a: ['the'], why: 'There is only one moon → the.' },
    { k: 'mc', q: 'Which sentence is right?', o: ['Elephants are very clever.', 'An elephants are very clever.', 'Elephant are very clever.'], a: 0,
      why: 'In general → a plural with no article.' }
  ]
},
{
  id: 'b1g08', url: 'https://test-english.com/grammar-points/b1/another-other-others-the-other-the-others/', type: 'grammar',
  title: 'Another, other or the others?', dinner: 'If you could learn another language, which one would you choose?',
  hook: { q: 'Apart from Earth, how many other planets are there in our solar system?', o: ['Five', 'Seven', 'Nine'], a: 1,
    reveal: '*Seven*! We live on one planet, and *the other* seven are Mercury, Venus, Mars, Jupiter, Saturn, Uranus and Neptune. Are there planets around *other* stars? Yes, thousands!' },
  learn: { kind: 'rule', title: 'Another, other, the other',
    lines: ['*another* = one more, or a different one, + a singular noun: Can I have *another* biscuit?',
      '*other* + a plural noun: *other* children, *other* ideas. *others* stands alone, with no noun: Some kids love maths, *others* don\'t.',
      '*the other* = the second of two, or the rest + a noun: one hand … *the other* hand. *the others* = the rest, alone: Dan is here. Where are *the others*?'],
    ex: ['I have two brothers. One is ten, and *the other* is fifteen.', 'This shirt is too small. Do you have *another* one?'],
    he: 'another כותבים במילה אחת (an + other), והוא בא רק לפני שם עצם ביחיד. לפני רבים: other. כשאין שם עצם אחריו: others או the others.' },
  steps: [
    { name: 'Choose', items: [
      { k: 'mc', q: 'This pizza is great. Can I have ___ slice?', o: ['another', 'other', 'others'], a: 0, why: 'One more + a singular noun → another.' },
      { k: 'mc', q: 'I have two cats. One is white, and ___ is black.', o: ['the other', 'another', 'other'], a: 0, why: 'The second of two → the other.' },
      { k: 'mc', q: 'Some people love the beach. ___ prefer the mountains.', o: ['Others', 'Other', 'Another'], a: 0, why: 'Other people, with no noun → others.' },
      { k: 'mc', q: 'Noa is here, but where are ___? The bus is leaving!', o: ['the others', 'the other', 'another'], a: 0, why: 'The rest of the group, with no noun → the others.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'Do you know any ___ songs by this band?', a: ['other'], why: 'other + a plural noun (songs).' },
      { k: 'tf', q: '"I don\'t like this game. Let\'s play others game."', a: false, fix: 'Let\'s play another game.', why: 'A different one + a singular noun → another.',
        he: 'others לא בא לפני שם עצם. לפני game (יחיד) צריך another.' },
      { k: 'mc', q: 'Only three students finished the test on time. ___ needed more time.', o: ['The others', 'The other', 'Another'], a: 0,
        why: 'The rest of the students, with no noun → the others.' },
      { k: 'type', q: 'I lost one of my shoes, so now I only have ___ one.', hint: '(the …)', a: ['the other'], why: 'The second of two → the other.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Can we meet on another day?', why: 'A different day, singular → another.' },
      { k: 'spot', s: 'Ask *another* students for help.', fix: 'other', why: 'students is plural → other.' },
      { k: 'build', s: 'Some apples are red and others are green.', why: 'others = other apples, with no noun after it.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I have two pens. This one is blue, and *another* one is red.', fix: 'the other', why: 'The second of two → the other one.' },
    { k: 'type', q: 'This cup is dirty. Can I have ___ one, please?', a: ['another'], why: 'A different one, singular → another.' },
    { k: 'mc', q: 'Which sentence is right?', o: ['My other friends are coming later.', 'My others friends are coming later.', 'My another friends are coming later.'], a: 0,
      why: 'other + a plural noun; others never comes before a noun.' }
  ]
},
{
  id: 'b1g09', url: 'https://test-english.com/grammar-points/b1/can-could-be-able-to/', type: 'grammar',
  title: 'Can, could or be able to?', dinner: 'What can you do now that you couldn\'t do last year?',
  hook: { q: 'At about what age can most babies walk?', o: ['About 4 months', 'About 12 months', 'About 3 years'], a: 1,
    reveal: 'At about *12 months*. At four months a baby *can\'t* walk, but she *can* smile and laugh. Soon she *will be able to* run!' },
  learn: { kind: 'rule', title: 'Ability: can, could, be able to',
    lines: ['*can / can\'t* for ability and possibility now: I *can* swim. You *can* sit here.',
      '*could / couldn\'t* for general ability in the past: I *could* read when I was four.',
      '*be able to* for other forms: will, have, might, want to … I*\'ll be able to* drive one day. I*\'ve never been able to* whistle. For one success in the past, say *was able to* (or managed to), not could: The door was stuck, but I *was able to* open it.'],
    ex: ['When I was five, I *couldn\'t* ride a bike. Now I *can*.', 'I hope I*\'ll be able to* come to your party.'],
    he: 'אין will can ואין have could. כשצריך זמן אחר (עתיד, have) עוברים ל-be able to: I will be able to. ועל הצלחה אחת בעבר אומרים was able to, לא could.' },
  steps: [
    { name: 'Choose', items: [
      { k: 'mc', q: 'My grandma ___ speak four languages.', o: ['can', 'cans', 'is able'], a: 0, why: 'Ability now → can (no -s, and no to).' },
      { k: 'mc', q: 'When I was little, I ___ sleep without a light.', o: ['couldn\'t', 'can\'t', 'won\'t be able to'], a: 0, why: 'General ability in the past → couldn\'t.' },
      { k: 'mc', q: 'Next year I ___ go to school by myself.', o: ['will be able to', 'will can', 'can to'], a: 0, why: 'There is no will can → will be able to.' },
      { k: 'mc', q: 'I ___ swim since I was six.', o: ['have been able to', 'have could', 'can'], a: 0, why: 'since → present perfect, and there is no have could → have been able to.' }
    ] },
    { name: 'Complete', items: [
      { k: 'tf', q: '"The test was hard, but I could finish it in time."', a: false, fix: 'The test was hard, but I was able to finish it in time.',
        why: 'One success, on one day in the past → was able to (or managed to).',
        he: 'על הצלחה אחת בעבר (הצלחתי לסיים) אומרים was able to או managed to. could הוא ליכולת כללית: I could swim when I was five.' },
      { k: 'type', q: 'Sorry, I ___ come to the party tomorrow. I have a basketball game.', hint: '(not / can)', a: ['can\'t', 'cannot', 'won\'t be able to'],
        why: 'can\'t = not possible for me. (won\'t be able to is right too.)' },
      { k: 'mc', q: 'Our cat got stuck in a tree, but Dad ___ get her down.', o: ['was able to', 'can', 'is able to'], a: 0,
        why: 'One success in the past → was able to.' },
      { k: 'type', q: 'I want to ___ able to surf like my cousin.', a: ['be'], why: 'want to + be able to.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Can you help me with my homework?', why: 'can for asking for help.' },
      { k: 'spot', s: 'I will *can* visit you on Sunday.', fix: 'be able to', why: 'There is no will can → will be able to.' },
      { k: 'build', s: 'She could play the piano when she was seven.', why: 'General ability in the past → could.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Yesterday I *can\'t* find my keys anywhere.', fix: 'couldn\'t', why: 'Yesterday → past: couldn\'t.' },
    { k: 'type', q: 'Maya has always ___ able to make people laugh.', a: ['been'], why: 'has + been able to (present perfect).' },
    { k: 'mc', q: 'Which sentence is right?', o: ['I might be able to come.', 'I might can come.', 'I might could come.'], a: 0,
      why: 'Two modal verbs can\'t go together → might be able to.' }
  ]
},
{
  id: 'b1u01', url: 'https://test-english.com/use-of-english/b1/b1-test-1/', type: 'use-of-english',
  title: 'The school that grows its lunch', dinner: 'If you had a garden, what would you like to grow in it?',
  hook: { q: 'About how long does a sunflower take to grow from a seed into a big flower?', o: ['About 2 weeks', 'About 3 months', 'About 2 years'], a: 1,
    reveal: 'About *3 months*! And some sunflowers grow taller than a basketball hoop.' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a news story about a school garden (it is made up!) and choose the right word for each gap.',
    predict: { q: 'Students at a school grow vegetables. What do you think they do with them?', o: ['They eat them for lunch.', 'They sell them online.', 'They give them to the zoo.'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'The school that grows its lunch',
        t: 'Two years ago, the students at Oranim School [1] an empty field behind the gym into a garden. Now they grow tomatoes, cucumbers and herbs, and twice a week the school cook [2] them in the students\' lunch. "At first, lots of kids didn\'t want to eat vegetables," says Ella, 13. "But when you grow something [3], it tastes much better!" Every class [4] its own part of the garden. The students water the plants, pull out weeds and write down how fast everything grows. Last spring a strong wind [5] most of the young plants, but the students didn\'t give [6]. They planted everything again, and by the summer the garden was [7] than ever. The head teacher, Mr Peretz, is very proud. "Our students have learned [8] lot more than how to grow food. They\'ve learned to work together."',
        gaps: [
          { o: ['turned', 'put', 'did'], a: 0, why: 'turn something into something = change it into something new.' },
          { o: ['uses', 'makes', 'takes'], a: 0, why: 'The cook uses the vegetables in the lunch.' },
          { o: ['yourself', 'itself', 'myself'], a: 0, why: 'when you grow something → yourself.' },
          { o: ['has', 'have', 'is'], a: 0, why: 'Every class is singular → has.' },
          { o: ['destroyed', 'grew', 'built'], a: 0, why: 'They had to plant everything again, so the wind destroyed the plants.' },
          { o: ['up', 'out', 'in'], a: 0, why: 'give up = stop trying.' },
          { o: ['bigger', 'biggest', 'more big'], a: 0, why: 'than → a comparative: bigger.' },
          { o: ['a', 'the', 'very'], a: 0, why: 'a lot more.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'The students have grown vegetables ___ two years.', o: ['for', 'since', 'during'], a: 0, why: 'two years = how long → for.' },
      { k: 'mc', q: 'Every student ___ a job in the garden.', o: ['has', 'have', 'are having'], a: 0, why: 'Every + a singular noun → has.',
        he: 'אחרי every בא יחיד: every student has, אפילו שבעברית חושבים על "כל התלמידים".' },
      { k: 'tf', q: '"The garden is more beautiful than it was last year."', a: true, why: 'beautiful is a long word → more beautiful than.' },
      { k: 'type', q: 'Don\'t give ___! You can do it.', a: ['up'], why: 'give up = stop trying.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'They turned the field into a garden.', why: 'turn something into something.' }
  ]
},
{
  id: 'b1u03', url: 'https://test-english.com/use-of-english/b1/b1-english-test-3-text-multiple-choice-gaps/', type: 'use-of-english',
  title: 'The dog who takes the bus', dinner: 'If we had a dog, where would you take it every day?',
  hook: { q: 'About how many words can an ordinary dog understand?', o: ['About 5', 'About 100', 'About 10,000'], a: 1,
    reveal: 'About *100*! One study found that an ordinary dog understands about 90 words, and a very clever dog called Chaser learned the names of more than 1,000 toys.' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a funny news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A dog gets on a city bus alone every morning. Where do you think she goes?', o: ['To the park', 'To the vet', 'To school'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'The dog who takes the bus',
        t: 'Every morning at 8:15, a big brown dog called Bella waits at the bus stop on King Street. When the number 12 bus arrives, she gets on, finds a seat near the window and [1] out at the city. The other passengers smile. Most of them [2] her for months. Bella\'s owner, Gil, works [3] the evenings, so he usually sleeps late. "One day Bella [4] tired of waiting for me," he says. "She went to the bus stop on her own, and the driver let her on." Bella gets off four stops later, at the city park, [5] she plays with other dogs for an hour. Then she takes the bus home. "She\'s [6] clever than most people I know," laughs Rona, one of the drivers. "She never misses her stop!" The bus company says Bella can keep riding [7] she is polite. And the best part? Dogs travel [8] free.',
        gaps: [
          { o: ['looks', 'sees', 'watches'], a: 0, why: 'look out of the window at something.' },
          { o: ['have known', 'know', 'knew'], a: 0, why: 'for months, up to now → have known.' },
          { o: ['in', 'on', 'at'], a: 0, why: 'in the evening(s).' },
          { o: ['got', 'made', 'had'], a: 0, why: 'get tired of something = start to feel bored with it.' },
          { o: ['where', 'which', 'who'], a: 0, why: 'a place → where.' },
          { o: ['more', 'much', 'most'], a: 0, why: 'more clever than. (cleverer than is right too.)' },
          { o: ['as long as', 'unless', 'although'], a: 0, why: 'as long as = only if.' },
          { o: ['for', 'by', 'with'], a: 0, why: 'travel for free = without paying.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'The driver ___ Bella for two years.', o: ['has known', 'knows', 'is knowing'], a: 0, why: 'for two years, up to now → has known (know is a state verb).' },
      { k: 'mc', q: 'This is the stop ___ Bella gets off.', o: ['where', 'who', 'what'], a: 0, why: 'a place → where.' },
      { k: 'tf', q: '"My dad works at the evenings."', a: false, fix: 'My dad works in the evenings.', why: 'in the morning, in the afternoon, in the evening.',
        he: 'בבוקר, בערב = in the morning, in the evening. רק בלילה אומרים at night.' },
      { k: 'type', q: 'You can borrow my bike as ___ as you bring it back today.', a: ['long'], why: 'as long as = only if.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Bella takes the bus to the park every morning.', why: 'A habit → present simple: takes.' }
  ]
},
{
  id: 'b1u04', url: 'https://test-english.com/use-of-english/b1/b1-english-test-4-multiple-choice-questions/', type: 'use-of-english',
  title: 'The robot gardener', dinner: 'If you could build a robot, what job would it do for our family?',
  hook: { q: 'The word "robot" first came from a play. In which language?', o: ['Czech', 'Japanese', 'English'], a: 0,
    reveal: '*Czech*! In 1920 a play by the Czech writer Karel Čapek used the word "robot". In Czech, "robota" means hard work.' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a news story about a young inventor (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A 14-year-old girl built a robot for her grandmother. What do you think it does?', o: ['It waters her plants.', 'It cooks dinner.', 'It drives her car.'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'The robot gardener',
        t: 'When Yael\'s grandmother broke her leg last winter, she [1] water her garden for weeks. Yael, who is 14, decided to help in her own way: she built a robot. "I\'ve [2] interested in robots since I was nine," she explains. "So I [3] that this was my chance." The robot is small, slow and not very pretty, but it does its job. It moves along the garden path and checks [4] the soil is dry. If it is, it gives the plant some water. Yael spent three months on the project, mostly [5] the weekends. "Some parts didn\'t work at first, and I wanted to give up a few times," she says. "But my grandma kept [6] me." Last month the robot won first prize in a national science competition for young people. Now Yael is working on [7] robot, one that can pick tomatoes. "My grandma\'s leg is fine now," she laughs, "but she says the robot is a better gardener [8] her!"',
        gaps: [
          { o: ['couldn\'t', 'can\'t', 'wasn\'t able'], a: 0, why: 'In the past, for weeks → couldn\'t. (wasn\'t able needs to.)' },
          { o: ['been', 'was', 'being'], a: 0, why: 'I\'ve been interested since … (present perfect).' },
          { o: ['knew', 'was knowing', 'have known'], a: 0, why: 'know is a state verb; one moment in the past → knew.' },
          { o: ['if', 'unless', 'what'], a: 0, why: 'check if (or whether) something is true.' },
          { o: ['at', 'for', 'since'], a: 0, why: 'at the weekend(s), in British English.' },
          { o: ['encouraging', 'to encourage', 'encourage'], a: 0, why: 'keep + -ing: kept encouraging.' },
          { o: ['another', 'other', 'the others'], a: 0, why: 'one more robot, singular → another.' },
          { o: ['than', 'as', 'that'], a: 0, why: 'a better gardener than her.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'I\'m not very good ___ maths, but I love science.', o: ['at', 'in', 'on'], a: 0, why: 'good at something.',
        he: 'טוב ב... = good at, לא good in.' },
      { k: 'mc', q: 'If it rains tomorrow, we ___ stay at home.', o: ['will', 'would', 'are'], a: 0, why: 'A real possibility in the future → if + present, will.' },
      { k: 'mc', q: 'She kept ___ until she found the answer.', o: ['trying', 'to try', 'try'], a: 0, why: 'keep + -ing.' },
      { k: 'type', q: 'Yael is the youngest winner ___ the history of the competition.', a: ['in'], why: 'A superlative + in + a place or a group.' },
      { k: 'tf', q: '"My brother is more tall than me."', a: false, fix: 'My brother is taller than me.', why: 'tall is short → taller than.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'She has been interested in robots since she was nine.', why: 'since + a time in the past → present perfect.' }
  ]
},
{
  id: 'b1v03', url: 'https://test-english.com/vocabulary/b1/education-b1-english-vocabulary/', type: 'vocabulary',
  title: 'School and studying', dinner: 'Which subject do you find the most interesting, and why?',
  hook: { q: 'In which country do many students have a summer holiday of about three months?', o: ['Italy', 'The UK', 'Japan'], a: 0,
    reveal: '*Italy*! Many Italian students have about three months off in the summer. In the UK it is about six weeks. Today\'s words are about school and studying.' },
  learn: { kind: 'words', title: 'Words for school', words: [
    { w: 'revise', d: 'study again before a test', ex: 'I *revised* for the history test all weekend.' },
    { w: 'hand in', d: 'give your work to the teacher', ex: 'Please *hand in* your projects on Monday.' },
    { w: 'mark', d: 'the number or letter a teacher gives your work', ex: 'I got a good *mark* in maths!' },
    { w: 'term', d: 'one part of the school year', ex: 'The autumn *term* starts in September.' },
    { w: 'timetable', d: 'a list of your lessons and their times', ex: 'Look at the *timetable*: we have PE on Tuesday.' },
    { w: 'take notes', d: 'write down important things while you listen', ex: 'I *take notes* in every science lesson.' },
    { w: 'cheat', d: 'do something dishonest to get a better mark', ex: 'Don\'t *cheat* in a test: you won\'t learn anything.' },
    { w: 'pass an exam', d: 'do well enough in an exam', ex: 'Ella *passed* her piano exam!' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'Study again before a test:', o: ['revise', 'cheat', 'hand in'], a: 0, why: 'revise = study again before a test.' },
      { k: 'mc', q: 'Give your work to the teacher:', o: ['hand in', 'take notes', 'pass'], a: 0, why: 'hand in your homework, your project.' },
      { k: 'mc', q: 'One part of the school year:', o: ['term', 'mark', 'timetable'], a: 0, why: 'The school year has two or three terms.' },
      { k: 'mc', q: 'Do well enough in an exam:', o: ['pass', 'fail', 'revise'], a: 0, why: 'pass = do well enough. fail = the opposite.',
        he: 'pass an exam = לעבור את המבחן בהצלחה, לא רק לגשת אליו. לגשת למבחן = take an exam.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Before the test or after the test?', g: ['before the test', 'after the test'],
        w: [['revise', 0], ['take notes in class', 0], ['go to bed early', 0], ['get your mark', 1], ['pass or fail', 1], ['check your mistakes', 1]],
        why: 'before: revising, taking notes, going to bed early · after: getting your mark, passing or failing, checking your mistakes' },
      { k: 'hear', say: 'I forgot to hand in my homework, so I got a low mark.', q: 'Why did he get a low mark?', o: ['He didn\'t give his homework to the teacher.', 'He cheated in a test.', 'He was late for school.'], a: 0,
        why: 'He forgot to hand in his homework.' },
      { k: 'spell', w: 'revise', clue: 'Study again before a test.', why: 'revise: r-e-v-i-s-e.' },
      { k: 'mc', q: 'In history I always take ___ while the teacher is talking.', o: ['notes', 'lessons', 'marks'], a: 0, why: 'take notes = write down important things.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Exam week',
        t: 'Next week we have exams, so this weekend I\'m going to [1] for maths. I always [2] notes in class, so it\'s easier. If I [3] all my exams, I\'ll be really happy. Copying from a friend is [4], and it doesn\'t help you learn.',
        gaps: [
          { o: ['revise', 'cheat', 'hand'], a: 0, why: 'study again before a test → revise.' },
          { o: ['take', 'give', 'say'], a: 0, why: 'take notes.' },
          { o: ['pass', 'fail', 'miss'], a: 0, why: 'I\'ll be really happy → I pass my exams.' },
          { o: ['cheating', 'revising', 'marking'], a: 0, why: 'Copying from a friend is dishonest → cheating.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I need to *make* my homework before dinner.', fix: 'do', why: 'We do homework, not make homework.',
      he: 'בעברית "מכינים שיעורים", אבל באנגלית אומרים do homework.' },
    { k: 'type', q: 'The teacher wants us to ___ in our projects by Friday.', hint: '(give to the teacher)', a: ['hand'], why: 'hand in = give your work to the teacher.' }
  ]
},
{
  id: 'b1v04', url: 'https://test-english.com/vocabulary/b1/money-b1-english-vocabulary/', type: 'vocabulary',
  title: 'Money matters', dinner: 'If you had 100 shekels, would you spend it or save it?',
  hook: { q: 'What did people in some places use as money long ago?', o: ['Shells', 'Paper clips', 'Glass bottles'], a: 0,
    reveal: '*Shells*! Small shells were money in parts of Africa and Asia for hundreds of years. Today\'s words are about how we spend, save and borrow money.' },
  learn: { kind: 'words', title: 'Words about money', words: [
    { w: 'pocket money', d: 'money parents give children every week or month', ex: 'I get 50 shekels *pocket money* a month.' },
    { w: 'save up', d: 'keep money so you can buy something later', ex: 'I\'m *saving up* for a new bike.' },
    { w: 'spend on', d: 'use money to buy things', ex: 'She *spends* all her money *on* books.' },
    { w: 'afford', d: 'have enough money for something', ex: 'We can\'t *afford* a new car this year.' },
    { w: 'borrow', d: 'take something that you will give back', ex: 'Can I *borrow* your pen?' },
    { w: 'lend', d: 'give something that someone will give back', ex: 'Can you *lend* me ten shekels?' },
    { w: 'owe', d: 'have to give money back to someone', ex: 'I *owe* my brother five shekels.' },
    { w: 'a bargain', d: 'something good that costs less than usual', ex: 'These trainers were only 99 shekels: a real *bargain*!' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'Have enough money for something:', o: ['afford', 'owe', 'lend'], a: 0, why: 'afford = have enough money for it.' },
      { k: 'mc', q: 'Keep money so you can buy something later:', o: ['save up', 'spend', 'borrow'], a: 0, why: 'save up for something.' },
      { k: 'mc', q: 'Something good that costs less than usual:', o: ['a bargain', 'pocket money', 'a price'], a: 0, why: 'a bargain = a good thing at a low price.' },
      { k: 'mc', q: 'Have to give money back to someone:', o: ['owe', 'afford', 'save'], a: 0, why: 'I owe you = I have to give you money back.' }
    ] },
    { name: 'Play', items: [
      { k: 'mc', q: 'Can you ___ me your charger? I\'ll give it back tomorrow.', o: ['lend', 'borrow'], a: 0,
        why: 'You give it to me → you lend me. I take it → I borrow it.',
        he: 'lend = להשאיל או להלוות (אני נותן למישהו). borrow = לשאול או ללוות (אני לוקח ואחר כך מחזיר).' },
      { k: 'hear', say: 'I\'d love that jacket, but I can\'t afford it right now.', q: 'What is the problem?', o: ['She doesn\'t have enough money.', 'The jacket is too small.', 'The shop is closed.'], a: 0,
        why: 'can\'t afford = doesn\'t have enough money.' },
      { k: 'spell', w: 'owe', clue: 'Have to give money back to someone.', why: 'owe: o-w-e.' },
      { k: 'sort', q: 'Good or bad for your money?', g: ['good', 'bad'],
        w: [['save up', 0], ['look for a bargain', 0], ['compare prices', 0], ['waste money', 1], ['spend it all at once', 1], ['owe a lot of people money', 1]],
        why: 'good: saving up, bargains, comparing prices · bad: wasting money, spending it all at once, owing money' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Ori\'s new skateboard',
        t: 'Ori wanted a new skateboard, but he couldn\'t [1] it. So he started to [2] up his pocket money. After two months he still needed 40 shekels, so he [3] some money from his sister. Then he found the skateboard in a sale: a real [4]!',
        gaps: [
          { o: ['afford', 'owe', 'lend'], a: 0, why: 'He didn\'t have enough money → couldn\'t afford it.' },
          { o: ['save', 'spend', 'pay'], a: 0, why: 'save up = keep money for later.' },
          { o: ['borrowed', 'lent', 'owed'], a: 0, why: 'He took money from his sister and will give it back → borrowed from her.' },
          { o: ['bargain', 'price', 'change'], a: 0, why: 'In a sale, cheaper than usual → a bargain.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'My friend *borrowed* me her headphones for the trip.', fix: 'lent', why: 'She gave them to me → she lent me her headphones.',
      he: 'מי שנותן: lend (בעבר lent). מי שלוקח: borrow.' },
    { k: 'type', q: 'How much money do you ___ on snacks every week?', a: ['spend'], why: 'spend money on something.' }
  ]
},
{
  id: 'b1v05', url: 'https://test-english.com/vocabulary/b1/work-b1-english-vocabulary/', type: 'vocabulary',
  title: 'The world of work', dinner: 'What job would you like to try for one day?',
  hook: { q: 'What is the most common kind of work in the world?', o: ['Farming', 'Teaching', 'Working in a shop'], a: 0,
    reveal: '*Farming*! About a quarter of all the workers in the world work on farms. Today\'s words are about jobs and work.' },
  learn: { kind: 'words', title: 'Words about work', words: [
    { w: 'part-time', d: 'for only some hours of the day or week', ex: 'My sister has a *part-time* job in a café.' },
    { w: 'earn', d: 'get money for work you do', ex: 'Dad *earns* money by fixing computers.' },
    { w: 'apply for', d: 'ask for a job, usually in writing', ex: 'Lior *applied for* a summer job at the zoo.' },
    { w: 'job interview', d: 'a meeting where they ask you questions for a job', ex: 'She was nervous before her *job interview*.' },
    { w: 'colleague', d: 'a person you work with', ex: 'Mum often has lunch with her *colleagues*.' },
    { w: 'boss', d: 'the person in charge of you at work', ex: 'My *boss* is friendly but strict.' },
    { w: 'retire', d: 'stop working because you are older', ex: 'Grandpa *retired* when he was 67.' },
    { w: 'volunteer', d: 'work without getting money, to help others', ex: 'We *volunteer* at the animal shelter on Fridays.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'A person you work with:', o: ['colleague', 'customer', 'interview'], a: 0, why: 'colleague = someone who works with you.' },
      { k: 'mc', q: 'Stop working because you are older:', o: ['retire', 'earn', 'apply'], a: 0, why: 'retire = stop working, usually at 60-something.' },
      { k: 'mc', q: 'Get money for your work:', o: ['earn', 'win', 'spend'], a: 0, why: 'You earn money by working. You win a prize or a game.',
        he: 'להרוויח כסף מעבודה = earn, לא win. win = לזכות או לנצח, במשחק או בפרס.' },
      { k: 'mc', q: 'Work without getting money, to help others:', o: ['volunteer', 'retire', 'interview'], a: 0, why: 'volunteer = work for free to help.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'To get a job, or in the job?', g: ['to get a job', 'in the job'],
        w: [['apply for it', 0], ['write a CV', 0], ['go to an interview', 0], ['meet your colleagues', 1], ['earn money', 1], ['talk to your boss', 1]],
        why: 'to get a job: apply, write a CV, go to an interview · in the job: colleagues, earning money, your boss' },
      { k: 'hear', say: 'I volunteer at the hospital on Sundays. I don\'t get paid, but I love it.', q: 'Does she get money for this work?', o: ['No, she does it for free.', 'Yes, a lot of money.', 'Yes, but only a little.'], a: 0,
        why: '"I don\'t get paid" → she volunteers.' },
      { k: 'spell', w: 'boss', clue: 'The person in charge of you at work.', why: 'boss: b-o-s-s.' },
      { k: 'mc', q: 'Which sentence is right?', o: ['I\'m looking for a job.', 'I\'m looking for a work.'], a: 0,
        why: 'job is countable: a job. work is uncountable: no a.', he: 'אפשר להגיד a job, אבל לא a work. work בלי a.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Shira\'s summer job',
        t: 'Last summer Shira [1] for a job at an ice cream shop. At the [2], the manager asked her about school and her hobbies. She got the job! It was [3]-time, only four hours a day, and she [4] enough money to buy new headphones.',
        gaps: [
          { o: ['applied', 'earned', 'retired'], a: 0, why: 'apply for a job.' },
          { o: ['interview', 'colleague', 'boss'], a: 0, why: 'The manager asked questions → the interview.' },
          { o: ['part', 'full', 'half'], a: 0, why: 'only four hours a day → part-time.' },
          { o: ['earned', 'won', 'lent'], a: 0, why: 'money from her work → earned.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'My uncle *won* a lot of money as a doctor.', fix: 'earned', why: 'Money from your work → earn. You win a prize.' },
    { k: 'type', q: 'Grandma stopped working last year. She ___ at 65.', hint: '(retire)', a: ['retired'], why: 'retire → retired (past simple).' }
  ]
},
{
  id: 'b1l04', url: 'https://test-english.com/listening/b1/personal-work-stories-b1-english-listening-test/', type: 'listening',
  title: 'Work stories', dinner: 'What job do you think you would be good at, and why?',
  hook: { q: 'Ben and Jerry, the famous ice cream makers, learned to make ice cream how?', o: ['From a cheap course by post', 'At a famous cooking school', 'From their grandmother'], a: 0,
    reveal: 'From a *five-dollar course by post*! Then they opened a tiny ice cream shop in 1978. Everyone\'s work story starts somewhere.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a vet', d: 'a doctor for animals' },
    { w: 'a night shift', d: 'work hours during the night' },
    { w: 'rewarding', d: 'it makes you feel good because it is useful' }
  ], predict: { q: 'A vet and a video game tester talk about their jobs. Who do you think says their job can be boring?', o: ['The vet', 'The game tester', 'Neither of them'] } },
  show: { cast: 'It is Job Week on the school radio. Mia talks to two guests.', names: { H: 'Mia', V: 'Noa', G: 'Ben' }, voices: { H: 'af_sarah', V: 'bf_emma', G: 'am_adam' },
    parts: [
      { lines: [
        ['H', 'Welcome to Job Week on our school radio! Our first guest is Noa, a vet. Noa, why did you become a vet?'],
        ['V', 'I always loved animals. When I was twelve, I found a bird with a broken wing and took it to a vet. I watched him help it, and I knew that was my dream.'],
        ['H', 'What\'s a normal day like?'],
        ['V', 'There isn\'t a normal day! In the morning I might see cats and dogs, and in the afternoon a farmer might call about a sick cow.']
      ], items: [
        { k: 'mc', q: 'How did Noa choose her job?', o: ['She took a hurt bird to a vet.', 'Her parents were vets.', 'She read a book about animals.'], a: 0,
          why: '"I found a bird with a broken wing and took it to a vet."' },
        { k: 'mc', q: 'Which animals might Noa see in one day?', o: ['pets and farm animals', 'only cats', 'only horses'], a: 0, why: 'cats and dogs in the morning, a cow in the afternoon.' }
      ] },
      { lines: [
        ['V', 'The hardest part is the night shifts. Sometimes I work all night, and I\'m very tired the next day. But when an animal gets better and goes home, it\'s so rewarding.'],
        ['H', 'Thank you, Noa! Our second guest is Ben. Ben, you test video games. Is it as fun as it sounds?'],
        ['G', 'Everyone asks that! I play the same level again and again, sometimes for a whole week, to find problems. It can get boring.']
      ], items: [
        { k: 'mc', q: 'What is the hardest part of Noa\'s job?', o: ['working at night', 'talking to farmers', 'driving a lot'], a: 0, why: '"The hardest part is the night shifts."' },
        { k: 'tf', q: 'Ben plays lots of different games every day.', a: false, fix: 'He plays the same level again and again.', why: '"I play the same level again and again."' },
        { k: 'mc', q: 'Why does Ben play the same level many times?', o: ['to find problems', 'to win prizes', 'to learn the story'], a: 0, why: '"…to find problems."' }
      ] },
      { lines: [
        ['H', 'So why do you like it?'],
        ['G', 'Because I find bugs, small mistakes in the game, before the players do. Once I found a bug where your character could walk through walls! The team fixed it in a day.'],
        ['H', 'Any advice for students who want your jobs?'],
        ['V', 'Work hard at science, and volunteer with animals if you can.'],
        ['G', 'And for games, learn to write clearly. Testers write reports all day!']
      ], items: [
        { k: 'mc', q: 'In a video game, a "bug" is…', o: ['a small mistake in the game', 'an insect in the game', 'a new level'], a: 0, why: '"bugs, small mistakes in the game"' },
        { k: 'mc', q: 'What is Ben\'s advice?', o: ['Learn to write clearly.', 'Play games every day.', 'Study art.'], a: 0, why: '"learn to write clearly. Testers write reports all day!"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'When an animal gets better, Noa feels her job is very ___.', a: ['rewarding'], why: 'rewarding = it makes you feel good because it is useful.' },
      { k: 'mc', clip: 1, q: 'Is Ben\'s job always fun?', o: ['No, it can get boring.', 'Yes, every minute.', 'He doesn\'t like it at all.'], a: 0, why: '"It can get boring." But he likes finding bugs.' },
      { k: 'hear', say: 'Sometimes I work all night, and I\'m very tired the next day.', q: 'When does she sometimes work?', o: ['at night', 'at the weekend', 'early in the morning'], a: 0,
        why: 'all night = the whole night.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'There isn\'t a normal day in my job.', why: 'There isn\'t a… = there is no…' }
  ]
},
{
  id: 'b1l05', url: 'https://test-english.com/listening/b1/talking-about-money-b1-english-listening-test/', type: 'listening',
  title: 'Pocket money talk', dinner: 'Should kids get pocket money for helping at home?',
  hook: { q: 'Which country was the first to use paper money?', o: ['China', 'Italy', 'Egypt'], a: 0,
    reveal: '*China*, about a thousand years ago! Before that, people carried heavy coins.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'pocket money', d: 'money parents give children every week or month' },
    { w: 'chores', d: 'small jobs at home, like washing the dishes' },
    { w: 'a budget', d: 'a plan for how to spend your money' }
  ], predict: { q: 'Two teens talk about money. What do you think helps them save?', o: ['Having a plan', 'Getting a lot of money', 'Never going shopping'] } },
  show: { cast: 'A podcast for teens. The host, Ella, talks to Omer and Lily.', names: { H: 'Ella', O: 'Omer', L: 'Lily' }, voices: { H: 'bf_isabella', O: 'bm_daniel', L: 'af_sarah' },
    parts: [
      { lines: [
        ['H', 'Today we\'re talking about money! Omer, do you get pocket money?'],
        ['O', 'Yes, forty shekels a week. But I have to earn it. I do chores: I take out the rubbish and wash the dishes every evening.'],
        ['H', 'And if you forget?'],
        ['O', 'Then I get less! My parents are quite strict about it.']
      ], items: [
        { k: 'mc', q: 'How much pocket money does Omer get?', o: ['40 shekels a week', '40 shekels a month', '4 shekels a day'], a: 0, why: '"forty shekels a week"' },
        { k: 'mc', q: 'What happens if Omer forgets his chores?', o: ['He gets less money.', 'He can\'t go out.', 'Nothing happens.'], a: 0, why: '"Then I get less!"' }
      ] },
      { lines: [
        ['H', 'Lily, what about you?'],
        ['L', 'I don\'t get pocket money every week. My grandma gives me money for my birthday, and last year I spent it all very fast. Clothes, snacks, a phone case… after a month there was nothing left!'],
        ['H', 'So what did you do this year?'],
        ['L', 'I made a budget. Half of the money goes into my savings, and I can spend the other half.']
      ], items: [
        { k: 'tf', q: 'Lily gets pocket money every week.', a: false, fix: 'Her grandma gives her money for her birthday.', why: '"I don\'t get pocket money every week."' },
        { k: 'mc', q: 'What went wrong last year?', o: ['She spent everything in a month.', 'She lost her money.', 'Her grandma forgot her birthday.'], a: 0,
          why: '"after a month there was nothing left!"' },
        { k: 'mc', q: 'What is Lily\'s plan now?', o: ['She saves half and spends half.', 'She saves all of it.', 'She gives it to her parents.'], a: 0,
          why: '"Half of the money goes into my savings, and I can spend the other half."' }
      ] },
      { lines: [
        ['H', 'Are you saving up for something?'],
        ['O', 'A new bike. It costs nine hundred shekels, so I need to wait about five months.'],
        ['L', 'I\'m saving for a summer camp. And a tip for everyone: before you buy something, wait one day. Often you don\'t want it any more!']
      ], items: [
        { k: 'mc', q: 'What is Omer saving up for?', o: ['a bike', 'a phone', 'a summer camp'], a: 0, why: '"A new bike."' },
        { k: 'mc', q: 'What is Lily\'s tip?', o: ['Wait a day before you buy something.', 'Never buy clothes.', 'Ask your grandma for money.'], a: 0,
          why: '"before you buy something, wait one day."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'Omer takes out the rubbish and washes the dishes. These are his ___.', a: ['chores'], why: 'chores = small jobs at home.',
        he: 'chores = מטלות בית. rubbish = זבל (באנגלית אמריקאית trash).' },
      { k: 'hear', say: 'Half of the money goes into my savings, and I can spend the other half.', q: 'How much does she save?', o: ['half', 'all of it', 'none of it'], a: 0,
        why: 'Half goes into her savings.' },
      { k: 'mc', clip: 2, q: 'How long does Omer need to save for the bike?', o: ['about five months', 'about five weeks', 'about a year'], a: 0, why: '"I need to wait about five months."' }
    ] }
  ],
  use: [
    { k: 'build', s: 'I\'m saving up for a new bike.', why: 'save up for something.' }
  ]
},
{
  id: 'b1l06', url: 'https://test-english.com/listening/b1/famous-sports-cheating-scandals-b1-english-listening-test/', type: 'listening',
  title: 'Famous sports cheats', dinner: 'Why do you think some people cheat in sport?',
  hook: { q: 'In which year were the first modern Olympic Games?', o: ['1896', '1920', '1948'], a: 0,
    reveal: 'In *1896*, in Athens. Since then there have been thousands of great races, and, sadly, a few famous cheats.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a marathon', d: 'a running race of about 42 kilometres' },
    { w: 'a crowd', d: 'a lot of people in one place' },
    { w: 'disqualify', d: 'take away someone\'s result because they broke the rules' }
  ], predict: { q: 'Two runners cheated in famous marathons. How do you think people found out?', o: ['People saw them.', 'A camera filmed them.', 'They told everyone.'] } },
  show: { cast: 'A history podcast for young people. Sam talks to Dana, a sports expert.', names: { S: 'Sam', D: 'Dana' }, voices: { S: 'am_eric', D: 'bf_emma' },
    parts: [
      { lines: [
        ['S', 'Welcome to Sports Stories! Dana, today we\'re talking about cheats. Where do we start?'],
        ['D', 'In 1904, at the Olympic marathon in the USA. It was a terribly hot day. An American runner called Fred Lorz felt ill after about fifteen kilometres, so he stopped running.'],
        ['S', 'So he gave up?'],
        ['D', 'Not exactly. He got into a car and rode for about eighteen kilometres! Then the car broke down, so he got out and ran again.']
      ], items: [
        { k: 'mc', q: 'What was the weather like?', o: ['very hot', 'rainy', 'cold and windy'], a: 0, why: '"It was a terribly hot day."' },
        { k: 'mc', q: 'Why did Lorz stop running?', o: ['He felt ill.', 'He hurt his foot.', 'He got lost.'], a: 0, why: '"…felt ill after about fifteen kilometres"' }
      ] },
      { lines: [
        ['S', 'And then?'],
        ['D', 'He crossed the finish line first. The crowd cheered, and he was about to get the gold medal. But then people told the judges they had seen him in the car.'],
        ['S', 'What did he say?'],
        ['D', 'He said it was only a joke! The judges didn\'t laugh. They disqualified him, and another runner, Thomas Hicks, got the gold.']
      ], items: [
        { k: 'mc', q: 'How did the judges find out?', o: ['People had seen him in the car.', 'A camera filmed him.', 'The driver told them.'], a: 0,
          why: '"people told the judges they had seen him in the car."' },
        { k: 'tf', q: 'In the end, Lorz was the winner of the race.', a: false, fix: 'He was disqualified, and Thomas Hicks got the gold.', why: '"They disqualified him."' },
        { k: 'mc', q: 'What did Lorz say about the car?', o: ['It was only a joke.', 'His legs hurt.', 'He didn\'t know the rules.'], a: 0, why: '"He said it was only a joke!"' }
      ] },
      { lines: [
        ['S', 'Did anyone else try something like that?'],
        ['D', 'Yes. In 1980, Rosie Ruiz won the women\'s race at the Boston Marathon. But she didn\'t look tired at all, and nobody remembered seeing her during the race.'],
        ['S', 'That sounds strange!'],
        ['D', 'Very. Two students said they saw her jump out of the crowd less than a kilometre before the end. A week later, they took away her title and gave it to the real winner, Jacqueline Gareau.']
      ], items: [
        { k: 'mc', q: 'Why did people think Ruiz cheated?', o: ['She didn\'t look tired, and nobody saw her in the race.', 'She ran too slowly.', 'She wore the wrong shoes.'], a: 0,
          why: '"she didn\'t look tired at all, and nobody remembered seeing her"' },
        { k: 'mc', q: 'Where did Ruiz join the race?', o: ['near the end', 'at the start', 'in the middle'], a: 0, why: '"less than a kilometre before the end"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'The judges ___ Lorz, so he lost his result.', a: ['disqualified'], why: 'disqualify = take away a result because someone broke the rules.' },
      { k: 'mc', clip: 0, q: '"The car broke down." This means…', o: ['it stopped working', 'it went very fast', 'it was very new'], a: 0, why: 'break down = stop working (for cars and machines).' },
      { k: 'hear', say: 'A week later, they took away her title and gave it to the real winner.', q: 'Who got the title in the end?', o: ['the real winner', 'Rosie Ruiz', 'the two students'], a: 0,
        why: 'They gave it to the real winner, Jacqueline Gareau.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'He rode in a car for part of the race.', why: 'ride → rode (past simple). We ride in a car, on a bike.' }
  ]
},
{
  id: 'b1l07', url: 'https://test-english.com/listening/b1/weird-driving-rules-modal-verbs-b1-english-listening-test/', type: 'listening',
  title: 'Strange rules of the road', dinner: 'If you could make one new rule for our home, what would it be?',
  hook: { q: 'In which of these countries do people drive on the left?', o: ['The UK', 'France', 'Israel'], a: 0,
    reveal: '*The UK*! In the UK, Japan, India and Australia you have to drive on the left. In Israel and France you drive on the right.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a fine', d: 'money you pay when you break a rule' },
    { w: 'a motorway', d: 'a big, fast road between cities' },
    { w: 'run out of fuel', d: 'have no petrol left in the car' }
  ], predict: { q: 'A family plays a quiz about driving rules. Which rule do you think is real?', o: ['In one country, you mustn\'t drive a very dirty car.', 'In one country, you must sing while you drive.', 'In one country, you can\'t drive on Mondays.'] } },
  show: { cast: 'The Peretz family is on a long car trip. Dad is driving, and Gali and her brother Itai are playing a quiz on the phone.', names: { D: 'Dad', G: 'Gali', I: 'Itai' }, voices: { D: 'am_adam', G: 'af_sarah', I: 'am_eric' },
    parts: [
      { lines: [
        ['G', 'OK, question one. In Germany, on the motorway, you mustn\'t… what?'],
        ['I', 'Drive slowly?'],
        ['G', 'No! You mustn\'t run out of fuel. If your car stops there because it has no petrol, you might have to pay a fine.'],
        ['D', 'That makes sense. It\'s dangerous to stop on a fast road. So I should always check the fuel before a long trip.']
      ], items: [
        { k: 'mc', q: 'In Germany, what mustn\'t you do on the motorway?', o: ['run out of fuel', 'drive slowly', 'listen to music'], a: 0, why: '"You mustn\'t run out of fuel."' },
        { k: 'mc', q: 'Why is it a good rule, says Dad?', o: ['It\'s dangerous to stop on a fast road.', 'Petrol is cheap in Germany.', 'The cars there are very old.'], a: 0,
          why: '"It\'s dangerous to stop on a fast road."' }
      ] },
      { lines: [
        ['G', 'Question two. In Cyprus, drivers can\'t eat or drink while they\'re driving. Not even water!'],
        ['I', 'Not even water? What if you\'re thirsty?'],
        ['D', 'Then you have to stop the car first. I think it\'s a good rule: you should keep both hands on the wheel.']
      ], items: [
        { k: 'tf', q: 'In Cyprus, drivers can drink water while they are driving.', a: false, fix: 'They can\'t even drink water.', why: '"Not even water!"' },
        { k: 'mc', q: 'What does a thirsty driver have to do in Cyprus?', o: ['stop the car first', 'drink only water', 'ask someone else to drive'], a: 0,
          why: '"Then you have to stop the car first."' }
      ] },
      { lines: [
        ['G', 'Last one. In Russia, you can get a fine if your car is very dirty.'],
        ['I', 'Dad, our car is so dirty! Someone wrote "wash me" on it!'],
        ['D', 'Luckily we\'re not in Russia. But the rule has a reason: the police must be able to read the number plate.'],
        ['G', 'So when we get home, you have to wash it!'],
        ['D', 'I don\'t have to… but OK. You can help me.']
      ], items: [
        { k: 'mc', q: 'Why can a dirty car get a fine in Russia?', o: ['The police must be able to read the number plate.', 'Dirty cars go slower.', 'Dirt is bad for the roads.'], a: 0,
          why: '"the police must be able to read the number plate."' },
        { k: 'mc', q: 'What does Dad say at the end?', o: ['The kids can help him wash the car.', 'He will never wash the car.', 'He must wash it today.'], a: 0,
          why: '"I don\'t have to… but OK. You can help me."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'In Germany you ___ run out of fuel on the motorway.', a: ['mustn\'t', 'must not'], why: 'mustn\'t = it is against the rules.' },
      { k: 'mc', clip: 1, q: '"You should keep both hands on the wheel." Here should means…', o: ['it is a good idea', 'it is impossible', 'it never happens'], a: 0,
        why: 'should = advice, a good idea.' },
      { k: 'mc', clip: 2, q: 'Dad says, "I don\'t have to wash it." This means…', o: ['It isn\'t necessary, but he can.', 'He isn\'t allowed to wash it.', 'He washed it yesterday.'], a: 0,
        why: 'don\'t have to = it isn\'t necessary. mustn\'t = it isn\'t allowed.',
        he: 'don\'t have to = לא חייב (אבל מותר). mustn\'t = אסור. אלה לא אותו דבר!' },
      { k: 'hear', say: 'You don\'t have to wear a jacket, but you must wear a seat belt.', q: 'What is necessary?', o: ['the seat belt', 'the jacket', 'both of them'], a: 0,
        why: 'must = necessary; don\'t have to = not necessary.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'You mustn\'t use your phone while you are driving.', why: 'mustn\'t + verb = it is against the rules.' }
  ]
},
{
  id: 'b1l08', url: 'https://test-english.com/listening/b1/borough-market-b1-english-listening-test/', type: 'listening',
  title: 'A day at Borough Market', dinner: 'What food from another country would you like to try?',
  hook: { q: 'People have sold food at Borough Market in London for about how long?', o: ['About 1,000 years', 'About 100 years', 'About 50 years'], a: 0,
    reveal: 'About *1,000 years*! There was a market near London Bridge long ago, and today it is one of the most famous food markets in the world.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a stall', d: 'a table or small shop at a market' },
    { w: 'a free sample', d: 'a little food you can try without paying' },
    { w: 'a queue', d: 'a line of people who are waiting' }
  ], predict: { q: 'A brother and sister visit a famous food market in London. What do you think they try?', o: ['Cheese and street food', 'Only fruit', 'Nothing, it is too expensive'] } },
  show: { cast: 'Avi and his sister Tamar are on holiday in London with their mum.', names: { M: 'Mum', A: 'Avi', T: 'Tamar' }, voices: { M: 'bf_emma', A: 'am_adam', T: 'bf_isabella' },
    parts: [
      { lines: [
        ['M', 'Here we are: Borough Market. People have sold food here, near London Bridge, for about a thousand years.'],
        ['T', 'Wow, it\'s so busy! And listen to the trains above us.'],
        ['M', 'Yes, part of the market is under the railway bridges. Stay close, OK? It\'s easy to get lost in the crowd.']
      ], items: [
        { k: 'mc', q: 'Where is the market?', o: ['near London Bridge', 'next to the airport', 'in a big shopping centre'], a: 0, why: '"near London Bridge"' },
        { k: 'mc', q: 'What can Tamar hear above them?', o: ['trains', 'planes', 'music'], a: 0, why: '"listen to the trains above us."' }
      ] },
      { lines: [
        ['A', 'Look at that stall! It has about fifty kinds of cheese.'],
        ['T', 'And they\'re giving free samples! Excuse me, could I try the orange one, please?'],
        ['T', 'Mmm, it\'s strong, but it\'s really good.'],
        ['A', 'I\'m more interested in the street food. There\'s a stall selling hot sandwiches, and another one with Spanish rice in a giant pan.']
      ], items: [
        { k: 'mc', q: 'What is special about the cheese stall?', o: ['It has about fifty kinds of cheese.', 'All its cheese is free.', 'It is the oldest stall.'], a: 0,
          why: '"It has about fifty kinds of cheese."' },
        { k: 'tf', q: 'Tamar didn\'t like the orange cheese.', a: false, fix: 'She said it was strong, but really good.', why: '"it\'s strong, but it\'s really good."' },
        { k: 'mc', q: 'Which food is Avi more interested in?', o: ['the street food', 'the cheese', 'the fruit'], a: 0, why: '"I\'m more interested in the street food."' }
      ] },
      { lines: [
        ['M', 'So, what\'s for lunch?'],
        ['A', 'The rice, definitely. I think it\'s called paella.'],
        ['T', 'And for dessert, those doughnuts! The queue is really long, so they must be good.'],
        ['M', 'Fine, but we\'re sharing. And then let\'s buy some local apples for the hotel.'],
        ['A', 'This is the best market ever. Can we come back tomorrow?']
      ], items: [
        { k: 'mc', q: 'What does Avi want for lunch?', o: ['the Spanish rice', 'a cheese sandwich', 'apples'], a: 0, why: '"The rice, definitely."' },
        { k: 'mc', q: 'Why does Tamar think the doughnuts are good?', o: ['The queue is very long.', 'They are free.', 'Her mum told her.'], a: 0,
          why: '"The queue is really long, so they must be good."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'mc', clip: 1, q: 'A "free sample" is…', o: ['a little food you can try without paying', 'a big plate of food', 'a bag of food to take home'], a: 0,
        why: 'free = without paying; a sample = a small piece to try.' },
      { k: 'hear', say: 'The queue is really long, so they must be good.', q: 'What does she think?', o: ['The doughnuts are probably very good.', 'The doughnuts are too expensive.', 'She doesn\'t want to wait.'], a: 0,
        why: 'must = I\'m sure it is true, from what I can see.' },
      { k: 'type', clip: 2, q: 'Mum wants to buy some ___ apples for the hotel.', a: ['local'], why: '"let\'s buy some local apples"' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Could I try a little of this cheese, please?', why: 'Could I…, please? is a polite way to ask.' }
  ]
},
{
  id: 'b1l09', url: 'https://test-english.com/listening/b1/york-england-a-medieval-town-b1-english-listening-test/', type: 'listening',
  title: 'York, a medieval city', dinner: 'If you could visit any time in history, which would you choose?',
  hook: { q: 'Who lived in York about 1,100 years ago and called it Jorvik?', o: ['The Vikings', 'The Romans', 'The Greeks'], a: 0,
    reveal: 'The *Vikings*! Before them, the Romans built a town there and called it Eboracum.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'medieval', d: 'from the Middle Ages, between about the years 500 and 1500' },
    { w: 'a city wall', d: 'a high stone wall around a town, to protect it' },
    { w: 'narrow', d: 'not wide' }
  ], predict: { q: 'A guide shows students around an old English city. What do you think they see first?', o: ['The old city walls', 'A shopping centre', 'A football stadium'] } },
  show: { cast: 'A class from Israel is on a school trip to York. The guide, Mr Hall, shows them around.', names: { G: 'Mr Hall', N: 'Noam', S: 'Shani' }, voices: { G: 'bm_daniel', N: 'am_eric', S: 'af_sarah' },
    parts: [
      { lines: [
        ['G', 'Welcome to York! We\'re standing on the city walls. Most of them are more than six hundred years old, and you can walk around a large part of the old city on them.'],
        ['N', 'Why did they build walls around the city?'],
        ['G', 'To protect the people inside. In medieval times, the gates were closed at night, and nobody could come in.'],
        ['S', 'And today it\'s free to walk on them?'],
        ['G', 'Yes, completely free!']
      ], items: [
        { k: 'mc', q: 'Why did people build the walls?', o: ['to protect the people inside', 'to make the city look beautiful', 'to keep the river out'], a: 0,
          why: '"To protect the people inside."' },
        { k: 'tf', q: 'You have to pay to walk on the walls.', a: false, fix: 'It\'s free to walk on them.', why: '"Yes, completely free!"' }
      ] },
      { lines: [
        ['G', 'Now we\'re in the Shambles, one of the oldest streets in York. Look up!'],
        ['S', 'The houses almost touch at the top!'],
        ['G', 'Exactly. The street is very narrow, and the top floors are bigger than the ground floors. Hundreds of years ago, butchers sold meat in this street.'],
        ['N', 'It looks like a street from a film about wizards!'],
        ['G', 'Many people say that! Today it\'s full of sweet shops and cafés.']
      ], items: [
        { k: 'mc', q: 'What is strange about the houses in the Shambles?', o: ['They almost touch at the top.', 'They are made of glass.', 'They have no doors.'], a: 0,
          why: '"The houses almost touch at the top!"' },
        { k: 'mc', q: 'What did people sell in this street long ago?', o: ['meat', 'books', 'sweets'], a: 0, why: '"Hundreds of years ago, butchers sold meat in this street." The sweet shops are there today.' },
        { k: 'mc', q: 'What is in the street today?', o: ['sweet shops and cafés', 'butchers\' shops', 'a big museum'], a: 0, why: '"Today it\'s full of sweet shops and cafés."' }
      ] },
      { lines: [
        ['G', 'Our last stop is the Viking centre. About eleven hundred years ago, the Vikings lived here, and they called the city Jorvik.'],
        ['N', 'Why does it smell so strange in here?'],
        ['G', 'They made the smells of a Viking street: fish, smoke and animals. It shows you what life was really like.'],
        ['S', 'I prefer the smell of the sweet shops!']
      ], items: [
        { k: 'mc', q: 'What did the Vikings call the city?', o: ['Jorvik', 'Shambles', 'Viking Town'], a: 0, why: '"they called the city Jorvik."' },
        { k: 'mc', q: 'Which smells are in the Viking centre?', o: ['fish, smoke and animals', 'bread and cakes', 'flowers and the sea'], a: 0, why: '"fish, smoke and animals"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'In medieval times, the ___ were closed at night.', a: ['gates'], why: '"the gates were closed at night"' },
      { k: 'mc', clip: 1, q: '"The street is very narrow." Narrow means…', o: ['not wide', 'very long', 'very old'], a: 0, why: 'narrow = not wide. The opposite is wide.' },
      { k: 'hear', say: 'The top floors are bigger than the ground floors.', q: 'Which part of the houses is bigger?', o: ['the top floors', 'the ground floors', 'the doors'], a: 0,
        why: 'The top floors are bigger.', he: 'ground floor = קומת הקרקע. בבריטניה first floor היא הקומה שמעליה.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'The Vikings lived in York about eleven hundred years ago.', why: 'ago comes after the time: eleven hundred years ago.' }
  ]
},
{
  id: 'b1r02', url: 'https://test-english.com/reading/b1/why-your-coworkers-hate-you-b1-english-reading-test/', type: 'reading',
  title: 'Why your team gets annoyed', dinner: 'What makes someone a good person to work with?',
  hook: { q: 'How fast do people decide what they think of a new face?', o: ['In less than a second', 'In about an hour', 'After a week'], a: 0,
    reveal: '*In less than a second*! One study found it takes about a tenth of a second. But in a team, what you *do* matters much more.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A school magazine asked students: what annoys you most in a group project? Here is what they said.',
    predict: { q: 'What do you think annoys students the most?', o: ['Someone who does nothing', 'Someone who talks too much', 'Someone who is always late'] } },
  story: { title: 'Why your team gets annoyed', chunks: [
    { text: 'Group projects can be great: you share ideas and learn from each other. But they can also be a nightmare. We asked forty students in Year 9 what annoys them most. The winner, by far, was "the passenger": the person who does nothing and still gets a good mark. "In my last project, one boy didn\'t write a single word," says Adi, 14. "Then he put his name on the front page!"',
      items: [
        { k: 'mc', q: 'What annoys the students most?', o: ['a person who does nothing', 'a person who talks a lot', 'a teacher who gives low marks'], a: 0,
          why: '"the person who does nothing and still gets a good mark"' },
        { k: 'tf', q: 'The boy in Adi\'s group wrote a small part of the project.', a: false, fix: 'He didn\'t write a single word.', why: '"one boy didn\'t write a single word"' },
        { k: 'find', q: 'Find a word that means "a very bad experience".', a: 'nightmare', why: 'nightmare = a bad dream, or a very bad experience.' }
      ] },
    { text: 'Second on the list was "the ghost". You send a message to the group, and the ghost never answers. "It\'s the night before we have to hand it in, and suddenly he\'s online, asking what he can do," laughs Daniel, 14. Third was "the boss", who makes all the decisions and never listens. "She\'s usually clever," says Noga, 13, "but a team needs everyone\'s ideas, not just hers."',
      items: [
        { k: 'mc', q: 'What does "the ghost" do?', o: ['He doesn\'t answer messages.', 'He makes all the decisions.', 'He does all the work.'], a: 0,
          why: '"the ghost never answers"' },
        { k: 'mc', q: 'What is Noga\'s problem with "the boss"?', o: ['She doesn\'t listen to other people\'s ideas.', 'She isn\'t clever.', 'She is always late.'], a: 0,
          why: '"a team needs everyone\'s ideas, not just hers."' }
      ] },
    { text: 'So how can you be a good team member? The students had some simple advice. Answer messages, even with a short "OK, I\'ll do it." Do your part on time, and if you can\'t, tell the group early. Listen before you decide. And when the project is finished, say thank you. "It sounds small," says Adi, "but it makes people want to work with you again."',
      items: [
        { k: 'mc', q: 'What should you do if you can\'t finish your part on time?', o: ['Tell the group early.', 'Say nothing.', 'Ask the teacher to do it.'], a: 0,
          why: '"if you can\'t, tell the group early."' },
        { k: 'tf', q: 'The students say you should decide first and listen later.', a: false, fix: 'Listen before you decide.', why: '"Listen before you decide."' },
        { k: 'find', q: 'Find a word that means "the opposite of late".', a: 'early', why: 'early ↔ late.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the main idea of the article?', o: ['Small, kind habits make you a good team member.', 'Group projects are always a bad idea.', 'The cleverest student should make all the decisions.'], a: 0,
        why: '"It sounds small, but it makes people want to work with you again."' }
    ] }
  ],
  use: [
    { k: 'mc', q: 'We have to hand in the project ___ Thursday.', o: ['by', 'until'], a: 0,
      why: 'by Thursday = not later than Thursday. until = all the time up to then.',
      he: '"עד יום חמישי" כמועד אחרון = by Thursday. until = כל הזמן עד אז (I\'ll wait until Thursday).' }
  ]
},
{
  id: 'b1r03', url: 'https://test-english.com/reading/b1/unusual-and-wonderful-jobs-b1-english-reading-test/', type: 'reading',
  title: 'Unusual and wonderful jobs', dinner: 'Which unusual job would you love to do, and why?',
  hook: { q: 'Some people are paid to have fun at work. Which of these is a real job?', o: ['Water slide tester', 'Cloud counter', 'Rainbow painter'], a: 0,
    reveal: 'A *water slide tester* is a real job! Read about it, and about two more wonderful jobs.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A website for teens asked three people with unusual jobs to describe their work.',
    predict: { q: 'Which job do you think is the hardest?', o: ['The water slide tester', 'The panda keeper', 'The ice cream taster'] } },
  story: { title: 'Unusual and wonderful jobs', chunks: [
    { text: 'Hi, I\'m Jake, and I test water slides. Hotels and water parks invite me to try their slides before they open. I check how fast they are, if the water is the right temperature, and if the ride is fun. Sounds like a dream job, right? It mostly is! But sometimes I go down the same slide fifty times in one day, and I travel a lot, so I\'m often away from my family.',
      items: [
        { k: 'mc', q: 'What does Jake check?', o: ['how fast the slides are and how warm the water is', 'the price of the tickets', 'the food at the hotel'], a: 0,
          why: '"I check how fast they are, if the water is the right temperature…"' },
        { k: 'mc', q: 'What is the bad part of Jake\'s job?', o: ['He is often away from his family.', 'The water is always cold.', 'He doesn\'t get paid.'], a: 0,
          why: '"I travel a lot, so I\'m often away from my family."' }
      ] },
    { text: 'My name is Lin, and I look after giant pandas at a centre in China. My day starts at seven, when I clean the pandas\' homes and bring fresh bamboo. An adult panda can eat more than twenty kilograms of it a day! The baby pandas are like little children: they climb on me and never want to sleep. It\'s hard, dirty work, but every day I feel lucky.',
      items: [
        { k: 'mc', q: 'What does Lin bring the pandas?', o: ['fresh bamboo', 'fish', 'meat'], a: 0, why: '"I clean the pandas\' homes and bring fresh bamboo."' },
        { k: 'tf', q: 'Lin says her job is easy and clean.', a: false, fix: 'She says it\'s hard, dirty work.', why: '"It\'s hard, dirty work."' },
        { k: 'find', q: 'Find a word that means "having good luck".', a: 'lucky', why: 'luck → lucky.' }
      ] },
    { text: 'I\'m Rachel, and I invent and taste new ice cream flavours for a big company. Every morning I try about sixty small spoons of ice cream. I don\'t have strong food or drinks before work, like coffee, because my tongue has to be ready. It isn\'t all fun: some new flavours are terrible! My strangest idea? Ice cream that tastes like popcorn. My boss laughed, but now it\'s one of our best sellers.',
      items: [
        { k: 'mc', q: 'Why doesn\'t Rachel have coffee before work?', o: ['Her tongue has to be ready for tasting.', 'She doesn\'t like coffee.', 'Her boss doesn\'t allow it.'], a: 0,
          why: '"because my tongue has to be ready."' },
        { k: 'mc', q: 'What happened to the popcorn ice cream?', o: ['It became one of the best sellers.', 'Nobody bought it.', 'Her boss stopped it.'], a: 0,
          why: '"now it\'s one of our best sellers."' },
        { k: 'find', q: 'Find a word that means "make something new for the first time".', a: 'invent', why: 'invent = make something new.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What do all three people show about their jobs?', o: ['They love them, but they aren\'t always easy.', 'They find them boring.', 'They do them only for the money.'], a: 0,
        why: 'Jake: "mostly" a dream; Lin: hard but lucky; Rachel: "It isn\'t all fun."' }
    ] }
  ],
  use: [
    { k: 'type', q: 'Jake ___ water slides for his job.', hint: '(test)', a: ['tests'], why: 'A job, something he always does → present simple: he tests.' }
  ]
},
{
  id: 'b1r04', url: 'https://test-english.com/reading/b1/how-led-lights-can-save-sea-turtles-lives-b1-english-reading-test/', type: 'reading',
  title: 'Green lights for sea turtles', dinner: 'What can our family do to help animals in the sea?',
  hook: { q: 'Sea turtles have lived on Earth for about how long?', o: ['More than 100 million years', 'About 10,000 years', 'About 1,000 years'], a: 0,
    reveal: '*More than 100 million years*! They swam in the sea at the time of the dinosaurs. Today, many kinds of sea turtle are in danger.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'Read about a simple idea that helps sea turtles, and about the turtles on Israel\'s beaches.',
    predict: { q: 'How do you think lights can help turtles?', o: ['Turtles see them and swim away from fishing nets.', 'They help turtles sleep.', 'They keep the water warm.'] } },
  story: { title: 'Green lights for sea turtles', chunks: [
    { text: 'Every year, thousands of sea turtles get caught in fishing nets by mistake. The fishermen want fish, not turtles, but turtles can\'t see the thin nets in the dark water. Many of them get stuck and can\'t swim up to the surface to breathe. Scientists wanted to find a way to warn the turtles without frightening away the fish.',
      items: [
        { k: 'mc', q: 'Why do turtles get caught in the nets?', o: ['They can\'t see the nets.', 'They like to eat the nets.', 'The fishermen want to catch them.'], a: 0,
          why: '"turtles can\'t see the thin nets in the dark water."' },
        { k: 'find', q: 'Find a word that means "not thick".', a: 'thin', why: 'thin ↔ thick.' }
      ] },
    { text: 'Their idea was surprisingly simple: put small green LED lights on the nets. Turtles see green light very well, so they notice the net and swim around it. Many fish don\'t pay attention to the light, so the fishermen still catch them. In a study in Peru, nets with lights caught about sixty-four percent fewer turtles. The lights are cheap, and they work on batteries.',
      items: [
        { k: 'mc', q: 'What colour are the lights?', o: ['green', 'red', 'white'], a: 0, why: '"small green LED lights"' },
        { k: 'mc', q: 'Why do the fishermen still catch fish?', o: ['Many fish don\'t pay attention to the lights.', 'The fish like the lights.', 'They use bigger nets.'], a: 0,
          why: '"Many fish don\'t pay attention to the light."' },
        { k: 'mc', q: 'In the study in Peru, the nets with lights caught…', o: ['about 64% fewer turtles', 'about 6% fewer turtles', 'no turtles at all'], a: 0,
          why: '"about sixty-four percent fewer turtles"' }
      ] },
    { text: 'Light can also be a problem for turtles. Baby turtles come out of their eggs on the beach at night and find the sea by moving towards the light of the moon on the water. Bright lights from hotels and streets confuse them, and they walk the wrong way. In Israel, turtles lay their eggs on the beaches every summer, and volunteers protect the nests. So if you are on the beach at night, keep your torch off!',
      items: [
        { k: 'mc', q: 'How do baby turtles find the sea?', o: ['They move towards the moonlight on the water.', 'Their mothers show them.', 'They follow other animals.'], a: 0,
          why: '"by moving towards the light of the moon on the water."' },
        { k: 'find', q: 'Find a word that means "make someone unsure which way is right".', a: 'confuse', why: 'confuse = make someone not understand, or go the wrong way.' },
        { k: 'tf', q: 'Sea turtles lay eggs on beaches in Israel.', a: true, why: '"In Israel, turtles lay their eggs on the beaches every summer."' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the main idea of the article?', o: ['Light can help turtles, or put them in danger.', 'Fishermen don\'t care about turtles.', 'Turtles can see very well in the dark.'], a: 0,
        why: 'Green lights on nets help them; bright lights on beaches confuse them.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'Nets with lights caught ___ turtles than nets without lights.', hint: '(few)', a: ['fewer'], why: 'few → fewer, for things you can count (turtles).',
      he: 'fewer לדברים שאפשר לספור (fewer turtles). less לדברים שלא סופרים (less water).' }
  ]
}
];
