// English Quest missions, level B2 (specs/missions.md). Original content on the topics of test-english.com's map:
// the topic list is theirs, every text, recording and question here is our own. Check: node test/missions-check.js
window.EQ_MISSIONS = window.EQ_MISSIONS || {};
window.EQ_MISSIONS.b2 = [
{
  id: 'b2g01', url: 'https://test-english.com/grammar-points/b2/have-auxiliary-main-verb/', type: 'grammar',
  title: 'Two kinds of have', dinner: 'What do you usually have for breakfast?',
  hook: { q: 'About how many cups of tea do people in the UK drink every day, all together?', o: ['About 1 million', 'About 100 million', 'About 1 billion'], a: 1,
    reveal: 'About *100 million*! The British *have* a lot of tea (have as a main verb), and they *have had* this habit for centuries (have as a helper).' },
  learn: { kind: 'rule', title: 'Have: main verb or helper?',
    lines: ['*Main verb*: have = own (I *have* a bike, I*\'ve got* a bike), and have + a noun for actions: *have* breakfast, a shower, a party, a good time.',
      'As a main verb it takes *do* in questions and negatives: *Do you have* a pen? I *don\'t have* time. (With have got: *Have you got*…? I *haven\'t got*…)',
      'Actions with have can be continuous: I*\'m having* lunch. Owning can\'t: we don\'t say I\'m having a bike.',
      '*Helper*: have + past participle in the perfect tenses: She *has* already *left*.'],
    ex: ['We *are having* a party on Friday.', '*Has* he *had* lunch yet?'],
    he: 'have כפועל עיקרי: להחזיק (I have a bike) או פעולה (have breakfast, have a shower). בשאלה ובשלילה צריך do: Do you have...? I don\'t have... כפועל עזר: have + V3 (She has left). פעולות עם have יכולות לבוא עם ing (I\'m having lunch), אבל "להחזיק" לא.' },
  steps: [
    { name: 'Main verb or helper?', items: [
      { k: 'mc', q: '___ you have any brothers or sisters?', o: ['Do', 'Have', 'Are'], a: 0, why: 'have (= own) as a main verb → Do you have…?' },
      { k: 'mc', q: 'Sorry, I can\'t talk now. I ___ dinner.', o: ['\'m having', 'have', '\'ve had'], a: 0, why: 'have dinner is an action, so it can be continuous: I\'m having dinner.' },
      { k: 'mc', q: 'She ___ already finished the test.', o: ['has', 'does', 'is'], a: 0, why: 'The helper have + past participle: has finished.' },
      { k: 'mc', q: 'We ___ a great time at the concert last night.', o: ['had', 'have had', 'were having'], a: 0, why: 'last night → past simple: we had a great time.' }
    ] },
    { name: 'Questions and negatives', items: [
      { k: 'tf', q: '"I haven\'t a car."', a: false, fix: 'I don\'t have a car. (or: I haven\'t got a car.)', why: 'With have = own, use don\'t have or haven\'t got.' },
      { k: 'type', q: '___ you got a minute? I need your help.', a: ['have'], why: 'have got → Have you got…?' },
      { k: 'mc', q: 'How often ___ you have a haircut?', o: ['do', 'have', 'are'], a: 0, why: 'have a haircut is an action → do in questions.' },
      { k: 'tf', q: '"Did you have fun at the party?"', a: true, why: 'have fun is an action → did in the past.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Have you ever had a pet?', why: 'The helper have + had (the past participle of the main verb have).' },
      { k: 'spot', s: 'Do you *has* a pen I can borrow?', fix: 'have', why: 'After do, use the base form: Do you have…?' },
      { k: 'build', s: 'We don\'t have any homework today.', why: 'The negative of have (= own) → don\'t have.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I *have* a shower now, so call me back in ten minutes.', fix: 'am having', why: 'An action happening now → I am having a shower.' },
    { k: 'type', q: 'Has she ___ breakfast yet?', hint: '(have)', a: ['had'], why: 'Has + past participle: had.' },
    { k: 'mc', q: 'Which sentence is NOT correct?', o: ['I\'m having a new phone.', 'I\'m having a great time.', 'I have a new phone.'], a: 0,
      why: 'have = own is not continuous: I have a new phone.' }
  ]
},
{
  id: 'b2g02', url: 'https://test-english.com/grammar-points/b2/clauses-contrast-purpose-reason-result/', type: 'grammar',
  title: 'Linking ideas', dinner: 'What do you do so that you don\'t forget your homework?',
  hook: { q: 'Why do zebras have stripes? Most scientists today think it is…', o: ['to keep biting flies away', 'to look taller', 'to stay warm'], a: 0,
    reveal: 'Most scientists now think stripes help zebras *to keep* biting flies away: the flies find it hard to land on them. *Although* the debate is not over, the fly idea has the most evidence.' },
  learn: { kind: 'rule', title: 'Contrast, purpose, reason, result',
    lines: ['*Contrast*: although / even though + a clause; despite / in spite of + a noun or -ing. *Although* it rained, we went out. *Despite* the rain, we went out.',
      '*Purpose*: to / in order to + a verb; so that + a clause. I left early *so that* I could catch the bus.',
      '*Reason*: because / as / since + a clause; because of / due to + a noun. The match was cancelled *due to* the storm.',
      '*Result*: so / therefore / as a result; so + adjective + that; such + a noun + that. It was *so* cold *that* the lake froze.'],
    ex: ['*In spite of* feeling tired, she finished the race.', 'He saved money *in order to* buy a bike.'],
    he: 'although / even though + משפט שלם. despite / in spite of + שם עצם או ing. so that + משפט. to / in order to + פועל. because + משפט. because of / due to + שם עצם.' },
  steps: [
    { name: 'Contrast and reason', items: [
      { k: 'mc', q: '___ the traffic, we arrived on time.', o: ['Despite', 'Although', 'Because'], a: 0, why: 'the traffic is a noun → despite.' },
      { k: 'mc', q: '___ she was tired, she kept studying.', o: ['Even though', 'In spite of', 'Despite'], a: 0, why: 'she was tired is a clause (subject + verb) → even though.' },
      { k: 'mc', q: 'The flight was delayed ___ the fog.', o: ['because of', 'because', 'so'], a: 0, why: 'the fog is a noun → because of.' },
      { k: 'mc', q: 'It was ___ a good film that we watched it twice.', o: ['such', 'so', 'too'], a: 0, why: 'such + a + adjective + noun + that.' }
    ] },
    { name: 'Purpose and result', items: [
      { k: 'type', q: 'I whispered so ___ I wouldn\'t wake the baby.', a: ['that'], why: 'so that + a clause shows purpose.' },
      { k: 'mc', q: 'She went to the library ___ study in peace.', o: ['to', 'for', 'so that'], a: 0, why: 'to + a verb shows purpose.' },
      { k: 'tf', q: '"Despite it was late, they kept playing."', a: false, fix: 'Although it was late, they kept playing.', why: 'despite is not followed by a clause.',
        he: 'אחרי despite לא בא משפט שלם. עם משפט משתמשים ב-although.' },
      { k: 'mc', q: 'The road was icy. ___, many schools were closed.', o: ['As a result', 'Although', 'In order to'], a: 0, why: 'This is a result → As a result.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'We stayed inside because of the storm.', why: 'because of + a noun.' },
      { k: 'spot', s: 'He trained every day *for* win the race.', fix: 'to', why: 'Purpose with a verb → to win (not for win).' },
      { k: 'build', s: 'Although it was cold, we went swimming.', why: 'Although + a clause, then the main clause.' }
    ] }
  ],
  use: [
    { k: 'teach', s: '*Despite* I studied hard, I failed the test.', fix: 'Although', why: 'I studied hard is a clause → Although.' },
    { k: 'type', q: 'In spite ___ the rain, the match went on.', a: ['of'], why: 'in spite of + a noun.' },
    { k: 'mc', q: 'Choose the best ending: "She saved her pocket money…"', o: ['so that she could buy a guitar.', 'because of a guitar.', 'although a guitar.'], a: 0,
      why: 'Purpose with a clause → so that she could…' }
  ]
},
{
  id: 'b2g03', url: 'https://test-english.com/grammar-points/b2/generic-pronouns/', type: 'grammar',
  title: 'Someone left their phone', dinner: 'If someone in your class feels left out, what can you do to help them?',
  hook: { q: 'Which word did the Merriam-Webster dictionary choose as its Word of the Year in 2019?', o: ['they', 'selfie', 'emoji'], a: 0,
    reveal: '*They*! More and more people use *they* for one person, when we don\'t know, or don\'t say, if the person is a man or a woman.' },
  learn: { kind: 'rule', title: 'When we don\'t know (or say) who',
    lines: ['For one person whose gender we don\'t know or don\'t say, English often uses *they, them, their*: If a student is late, *they* must sign in.',
      'The same with *someone, anyone, everyone, nobody*: Someone left *their* phone here.',
      '*You* and *one* can mean people in general: *You* never know! *One* should always be polite. (one is very formal)'],
    ex: ['Everyone did *their* best.', 'Ask a doctor. *They* will help you.'],
    he: 'כשלא יודעים אם מדובר בגבר או באישה, או לא רוצים לציין, אומרים they, them, their גם על אדם אחד: Someone left their phone. you יכול לציין "אנשים באופן כללי".' },
  steps: [
    { name: 'Who?', items: [
      { k: 'mc', q: 'Somebody called, but ___ didn\'t leave a message.', o: ['they', 'it', 'one'], a: 0, why: 'somebody → they.' },
      { k: 'mc', q: 'Every student must bring ___ own laptop.', o: ['their', 'its', 'our'], a: 0, why: 'every student (one person, gender not said) → their.' },
      { k: 'mc', q: 'If anyone needs help, ___ can ask me.', o: ['they', 'it', 'we'], a: 0, why: 'anyone → they.' },
      { k: 'mc', q: '"___ never know what will happen," said Grandma.', o: ['You', 'They', 'It'], a: 0, why: 'You = people in general.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'A good friend is someone who tells you the truth, even when ___ know it will hurt.', a: ['they'], why: 'someone → they (with a plural verb: they know).' },
      { k: 'tf', q: '"Each child got their own room."', a: true, why: 'their for one person whose gender we don\'t say is normal in modern English.' },
      { k: 'mc', q: 'When a customer complains, listen to ___ carefully.', o: ['them', 'it', 'their'], a: 0, why: 'The object form: them.' },
      { k: 'mc', q: 'Which sentence sounds very formal?', o: ['One must always do one\'s best.', 'You should always do your best.', 'People should do their best.'], a: 0,
        why: 'one is very formal and a bit old-fashioned.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Someone has forgotten their umbrella.', why: 'someone → their.' },
      { k: 'spot', s: 'If a child is ill, *it* should stay at home.', fix: 'they', why: 'For people we use they, not it.' },
      { k: 'build', s: 'Everyone brought their own lunch.', why: 'everyone → their.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Every player must wear *its* team shirt.', fix: 'their', why: 'every player → their.' },
    { k: 'type', q: 'Nobody likes it when people laugh at ___.', a: ['them'], why: 'nobody → them (the object form).' },
    { k: 'mc', q: '"A new teacher is starting tomorrow." "Great! What\'s ___ name?"', o: ['their', 'its', 'one\'s'], a: 0,
      why: 'We don\'t know if the teacher is a man or a woman → their.' }
  ]
},
{
  id: 'b2v01', url: 'https://test-english.com/vocabulary/b2/relationships-b2-english-vocabulary/', type: 'vocabulary',
  title: 'Close and not so close', dinner: 'Who in our family do you take after?',
  hook: { q: 'Identical twins share almost all of their DNA. Do they have the same fingerprints?', o: ['Yes, exactly the same', 'No, they are different', 'Only on one hand'], a: 1,
    reveal: '*No*! Even identical twins have different fingerprints. You can *take after* your family, but you are still one of a kind.' },
  learn: { kind: 'words', title: 'Words about relationships', words: [
    { w: 'hit it off', d: 'like each other immediately', ex: 'We *hit it off* on the first day of camp.' },
    { w: 'drift apart', d: 'slowly become less close', ex: 'After she moved, we *drifted apart*.' },
    { w: 'see eye to eye', d: 'agree with each other', ex: 'My brother and I rarely *see eye to eye*.' },
    { w: 'look up to', d: 'admire and respect someone', ex: 'I *look up to* my older cousin.' },
    { w: 'take after', d: 'look or behave like an older family member', ex: 'She *takes after* her mother.' },
    { w: 'let someone down', d: 'disappoint someone', ex: 'I promised to help, and I won\'t *let you down*.' },
    { w: 'stand by someone', d: 'support someone in a difficult time', ex: 'My friends *stood by* me when I was ill.' },
    { w: 'a bond', d: 'a close connection between people', ex: 'There is a strong *bond* between the twins.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'Like each other immediately:', o: ['hit it off', 'drift apart', 'let down'], a: 0, why: 'hit it off = become friends at once.' },
      { k: 'mc', q: 'Slowly become less close:', o: ['drift apart', 'stand by', 'take after'], a: 0, why: 'drift apart = slowly lose a close connection.' },
      { k: 'mc', q: 'Agree with each other:', o: ['see eye to eye', 'look up to', 'hit it off'], a: 0, why: 'see eye to eye = agree.' },
      { k: 'mc', q: 'Disappoint someone:', o: ['let someone down', 'stand by someone', 'take after someone'], a: 0, why: 'let someone down = disappoint them.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Getting closer or growing apart?', g: ['getting closer', 'growing apart'],
        w: [['hit it off', 0], ['form a bond', 0], ['stand by someone', 0], ['drift apart', 1], ['let someone down', 1], ['fall out', 1]],
        why: 'closer: hit it off, form a bond, stand by someone · apart: drift apart, let someone down, fall out' },
      { k: 'hear', say: 'My cousin and I hit it off the first time we met.', q: 'What happened?', o: ['They liked each other at once.', 'They had a fight.', 'They didn\'t talk.'], a: 0,
        why: 'hit it off = like each other immediately.' },
      { k: 'spell', w: 'bond', clue: 'A close connection between people.', why: 'bond: b-o-n-d.' },
      { k: 'mc', q: 'I really ___ to my grandmother. She is so wise.', o: ['look up', 'take after', 'see eye'], a: 0, why: 'look up to someone = admire them.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Two brothers',
        t: 'Ben really [1] after his dad: the same smile, the same jokes. He and his brother don\'t always see eye to [2], but when Ben had problems at school, his brother [3] by him. They have a really strong [4].',
        gaps: [
          { o: ['takes', 'looks', 'gets'], a: 0, why: 'take after = look or behave like an older relative.' },
          { o: ['eye', 'face', 'mind'], a: 0, why: 'see eye to eye = agree.' },
          { o: ['stood', 'let', 'drifted'], a: 0, why: 'stand by someone → stood by.' },
          { o: ['bond', 'apart', 'down'], a: 0, why: 'a strong bond = a close connection.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I really look *up* my older sister. She\'s my hero.', fix: 'up to', why: 'look up to someone = admire them.' },
    { k: 'type', q: 'We used to be best friends, but we slowly drifted ___.', a: ['apart'], why: 'drift apart = slowly become less close.' }
  ]
},
{
  id: 'b2v02', url: 'https://test-english.com/vocabulary/b2/feelings-and-emotions-b2-english-vocabulary/', type: 'vocabulary',
  title: 'Strong feelings', dinner: 'What made you feel thrilled or relieved recently?',
  hook: { q: 'Scientists used to talk about 6 basic emotions. A 2017 study of people watching short videos found how many kinds?', o: ['6', '27', '100'], a: 1,
    reveal: '*27*! Researchers in California showed people about 2,000 short videos and found 27 kinds of emotion, from awe to awkwardness.' },
  learn: { kind: 'words', title: 'Words for strong feelings', words: [
    { w: 'thrilled', d: 'extremely happy and excited', ex: 'I was *thrilled* to get the part in the play.' },
    { w: 'devastated', d: 'extremely sad and shocked', ex: 'He was *devastated* when his dog died.' },
    { w: 'furious', d: 'extremely angry', ex: 'Mum was *furious* about the broken window.' },
    { w: 'relieved', d: 'happy because a worry has gone', ex: 'I was *relieved* when the test was over.' },
    { w: 'anxious', d: 'worried and nervous about what might happen', ex: 'She feels *anxious* before every exam.' },
    { w: 'overwhelmed', d: 'feeling that there is too much to deal with', ex: 'With five tests this week, I feel *overwhelmed*.' },
    { w: 'frustrated', d: 'annoyed because you can\'t do what you want', ex: 'I get *frustrated* when my computer is slow.' },
    { w: 'content', d: 'happy and satisfied', ex: 'Grandpa is *content* with a simple life.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'Extremely angry:', o: ['furious', 'anxious', 'content'], a: 0, why: 'furious = extremely angry.' },
      { k: 'mc', q: 'Happy because a worry has gone:', o: ['relieved', 'devastated', 'frustrated'], a: 0, why: 'relieved = the worry is over.' },
      { k: 'mc', q: 'Extremely sad and shocked:', o: ['devastated', 'thrilled', 'content'], a: 0, why: 'devastated = extremely sad and shocked.' },
      { k: 'mc', q: 'Happy and satisfied:', o: ['content', 'overwhelmed', 'anxious'], a: 0, why: 'content = happy and satisfied.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'A good feeling or a bad feeling?', g: ['good', 'bad'],
        w: [['thrilled', 0], ['relieved', 0], ['content', 0], ['furious', 1], ['devastated', 1], ['anxious', 1], ['frustrated', 1]],
        why: 'good: thrilled, relieved, content · bad: furious, devastated, anxious, frustrated' },
      { k: 'hear', say: 'When I heard that I had passed, I was so relieved.', q: 'How did she feel?', o: ['happy that the worry was gone', 'very angry', 'very bored'], a: 0,
        why: 'relieved = happy because a worry has gone.' },
      { k: 'spell', w: 'furious', clue: 'Extremely angry.', why: 'furious: f-u-r-i-o-u-s.' },
      { k: 'mc', q: 'I\'ve got five tests this week. I feel completely ___.', o: ['overwhelmed', 'content', 'thrilled'], a: 0, why: 'too much to deal with → overwhelmed.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Exam day',
        t: 'Before the exam I was so [1] that I couldn\'t eat breakfast. During the test I got [2] because I couldn\'t remember one word. But when I saw my grade, I was [3]: 98! My parents were [4] of me too.',
        gaps: [
          { o: ['anxious', 'content', 'relieved'], a: 0, why: 'worried before the exam → anxious.' },
          { o: ['frustrated', 'thrilled', 'relieved'], a: 0, why: 'annoyed because she couldn\'t remember → frustrated.' },
          { o: ['thrilled', 'devastated', 'furious'], a: 0, why: '98! → thrilled.' },
          { o: ['proud', 'furious', 'anxious'], a: 0, why: 'proud of someone.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I was *very* furious when my brother broke my phone.', fix: 'absolutely', why: 'Strong adjectives like furious take absolutely or really, not very.',
      he: 'מילים חזקות כמו furious או thrilled לא מקבלות very. אומרים absolutely furious או really furious.' },
    { k: 'type', q: 'After the exam was over, I felt so ___. No more stress!', a: ['relieved'], why: 'relieved = the worry has gone.' }
  ]
},
{
  id: 'b2l01', url: 'https://test-english.com/listening/b2/relationship-dilemmas-b2-english-listening-test/', type: 'listening',
  title: 'Friendship dilemmas', dinner: 'What would you do if a friend kept copying your homework?',
  hook: { q: 'A psychologist studied how friendships grow. About how many hours together turn a stranger into a close friend?', o: ['About 20', 'About 200', 'About 2,000'], a: 1,
    reveal: 'About *200 hours*! The psychologist Jeffrey Hall found that close friendships need around 200 hours of time together.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a dilemma', d: 'a difficult choice between two options' },
    { w: 'feel used', d: 'feel that someone takes advantage of you' },
    { w: 'cancel', d: 'say that a plan will not happen' }
  ], predict: { q: 'Two teenagers call a radio show about problems with friends. What do you think the host tells them?', o: ['To talk honestly to their friends', 'To end the friendships', 'To ask their parents to fix it'] } },
  show: { cast: 'A radio advice show called Ask Away. Two listeners call in.', names: { H: 'Host', A: 'Mia', B: 'Noah' }, voices: { H: 'bf_lily', A: 'af_jessica', B: 'am_puck' },
    parts: [
      { lines: [
        ['H', 'This is Ask Away, the show where you bring your problems and we try to help. First caller, what\'s on your mind?'],
        ['A', 'Hi. My best friend keeps copying my homework. At first I didn\'t mind, but now she does it every day, and our teacher is starting to notice.'],
        ['H', 'That\'s a tricky one. How do you feel about it?'],
        ['A', 'Used, honestly. And worried that we\'ll both get in trouble.']
      ], items: [
        { k: 'mc', q: 'What is the first caller\'s problem?', o: ['Her friend copies her homework every day.', 'Her friend never does homework.', 'Her teacher is unfair.'], a: 0,
          why: '"My best friend keeps copying my homework."' },
        { k: 'mc', q: 'How does she feel?', o: ['used and worried', 'proud and happy', 'bored'], a: 0, why: '"Used, honestly. And worried that we\'ll both get in trouble."' }
      ] },
      { lines: [
        ['H', 'If I were you, I\'d talk to her in private, not in front of others. Tell her how it makes you feel, and offer to study together instead.'],
        ['A', 'Study together?'],
        ['H', 'Yes. That way you\'re still helping her, but she\'s actually learning. A real friend will understand.']
      ], items: [
        { k: 'mc', q: 'What does the host suggest first?', o: ['Talk to her friend in private.', 'Tell the teacher.', 'Stop being friends.'], a: 0, why: '"If I were you, I\'d talk to her in private"' },
        { k: 'mc', q: 'Why does the host suggest studying together?', o: ['The friend will actually learn.', 'It is more fun.', 'The teacher wants it.'], a: 0, why: '"she\'s actually learning"' },
        { k: 'tf', q: 'The host thinks a real friend will be angry.', a: false, fix: 'A real friend will understand.', why: '"A real friend will understand."' }
      ] },
      { lines: [
        ['H', 'Next caller, go ahead.'],
        ['B', 'My friend always cancels our plans at the last minute. Last week I waited at the cinema for half an hour.'],
        ['H', 'Have you told him that it upsets you?'],
        ['B', 'Not really. I just say it\'s fine.'],
        ['H', 'Then maybe start there. People can\'t change what they don\'t know about.']
      ], items: [
        { k: 'mc', q: 'What does Noah\'s friend do?', o: ['He cancels plans at the last minute.', 'He is always late for school.', 'He never answers messages.'], a: 0,
          why: '"My friend always cancels our plans at the last minute."' },
        { k: 'mc', q: 'What is the host\'s main advice?', o: ['Tell him how you really feel.', 'Stop making plans.', 'Find new friends.'], a: 0,
          why: '"Have you told him that it upsets you?… Then maybe start there."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'If I ___ you, I\'d talk to her in private.', a: ['were', 'was'], why: 'If I were you, I\'d… is a way to give advice.' },
      { k: 'mc', clip: 0, q: '"That\'s a tricky one" means…', o: ['That\'s a difficult problem.', 'That\'s a funny joke.', 'That\'s a trick.'], a: 0, why: 'tricky = difficult to deal with.' },
      { k: 'sort', q: 'Giving advice or describing a problem?', g: ['advice', 'problem'],
        w: [['If I were you, I\'d…', 0], ['Have you thought about…?', 0], ['Maybe start there.', 0], ['My friend keeps…', 1], ['At first I didn\'t mind, but…', 1], ['It upsets me.', 1]],
        why: 'advice: If I were you, Have you thought about, Maybe start there · problem: My friend keeps, At first I didn\'t mind, It upsets me' }
    ] }
  ],
  use: [
    { k: 'build', s: 'If I were you, I would talk to her.', why: 'If I were you + would = advice.' }
  ]
},
{
  id: 'b2l02', url: 'https://test-english.com/listening/b2/can-music-be-medicine-b2-english-listening-test/', type: 'listening',
  title: 'Can music be medicine?', dinner: 'What music helps you when you study or do sport?',
  hook: { q: 'Which of these can music really do, according to research?', o: ['Help some people who lost their speech to sing words', 'Cure the flu', 'Make plants grow twice as fast'], a: 0,
    reveal: 'Some people who lost their speech after a stroke can *sing* words they can\'t say. Music therapists use this to help them talk again.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a stroke', d: 'a sudden problem with the blood supply to the brain' },
    { w: 'anxiety', d: 'strong worry or fear' },
    { w: 'a choir', d: 'a group of people who sing together' }
  ], predict: { q: 'Can music really work like medicine? What do you think the expert says?', o: ['In some ways, yes', 'Not at all', 'It cures everything'] } },
  show: { cast: 'A science podcast. The host talks to Dr Anna Reyes, a music therapist.', names: { H: 'Host', R: 'Dr Reyes' }, voices: { H: 'am_michael', R: 'bf_emma' },
    parts: [
      { lines: [
        ['H', 'My guest today is Dr Anna Reyes, a music therapist. Anna, can music really be medicine?'],
        ['R', 'In some ways, yes. Music isn\'t a cure for illness, but it changes how the brain and the body work. For example, calm music before an operation can reduce anxiety about as well as some medicines do.']
      ], items: [
        { k: 'mc', q: 'What is Anna\'s job?', o: ['a music therapist', 'a singer', 'a surgeon'], a: 0, why: '"Dr Anna Reyes, a music therapist"' },
        { k: 'tf', q: 'Anna says music can cure illnesses.', a: false, fix: 'She says music isn\'t a cure.', why: '"Music isn\'t a cure for illness"' },
        { k: 'mc', q: 'What can calm music do before an operation?', o: ['reduce anxiety', 'make the operation shorter', 'replace the doctor'], a: 0, why: '"calm music before an operation can reduce anxiety"' }
      ] },
      { lines: [
        ['H', 'I\'ve heard about patients who can sing but can\'t speak. Is that true?'],
        ['R', 'Yes. After a stroke, some people lose the ability to speak, but they can still sing the words of a song. We use melody to help them find words again, step by step.'],
        ['H', 'That\'s incredible.']
      ], items: [
        { k: 'mc', q: 'What can some people do after a stroke?', o: ['sing words they can\'t say', 'play instruments without lessons', 'hear better than before'], a: 0,
          why: '"they can still sing the words of a song"' },
        { k: 'mc', q: 'How does Anna use this?', o: ['She uses melody to help them speak again.', 'She records their songs.', 'She teaches them new languages.'], a: 0,
          why: '"We use melody to help them find words again, step by step."' }
      ] },
      { lines: [
        ['H', 'And for healthy people? Our listeners are mostly teenagers.'],
        ['R', 'Music with a strong beat can make exercise feel easier, so you run a little longer. And making music with others, in a choir or a band, makes people feel closer. But silence matters too. The brain needs quiet time to rest.']
      ], items: [
        { k: 'mc', q: 'How can music help when you exercise?', o: ['It makes exercise feel easier.', 'It makes you lose weight faster.', 'It makes you sleep better.'], a: 0,
          why: '"Music with a strong beat can make exercise feel easier"' },
        { k: 'mc', q: 'What else does Anna say is important?', o: ['quiet time for the brain', 'loud music every day', 'only classical music'], a: 0, why: '"But silence matters too."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'Calm music can reduce ___ before an operation.', a: ['anxiety', 'stress'], why: 'anxiety = strong worry or fear.' },
      { k: 'hear', say: 'Making music with others makes people feel closer.', q: 'What does making music together do?', o: ['It makes people feel closer.', 'It makes people tired.', 'It makes people compete.'], a: 0,
        why: 'Making music with others makes people feel closer.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Music can make exercise feel easier.', why: 'make + something + feel + adjective.' }
  ]
},
{
  id: 'b2l03', url: 'https://test-english.com/listening/b2/regrets-i-wish-id-b2-english-listening-test/', type: 'listening',
  title: 'I wish I\'d…', dinner: 'Is there something you wish you had done differently this year?',
  hook: { q: 'In a famous study, what did people regret more in the long run?', o: ['The things they did', 'The things they didn\'t do', 'Both the same'], a: 1,
    reveal: '*The things they didn\'t do*. Psychologists found that in the short term we regret our actions, but in the long term we regret the chances we missed.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'I wish I\'d done', d: 'I am sorry that I didn\'t do it' },
    { w: 'if only', d: 'a stronger way to say I wish' },
    { w: 'apply for', d: 'ask officially for a job or a place' }
  ], predict: { q: 'Three people talk about their regrets. What do you think they regret most?', o: ['Things they didn\'t do', 'Things they bought', 'Places they lived'] } },
  show: { cast: 'Three people talk about something they regret.', names: { A: 'Grace', B: 'Owen', C: 'Rosa' }, voices: { A: 'bf_alice', B: 'am_onyx', C: 'af_river' },
    parts: [
      { lines: [
        ['A', 'I wish I\'d learned to play an instrument when I was a child. My parents offered me piano lessons, but I said no because I wanted to play football. Now I\'m thirty, and learning is so much harder.']
      ], items: [
        { k: 'mc', q: 'What does Grace regret?', o: ['not learning an instrument as a child', 'playing football', 'taking piano lessons'], a: 0, why: '"I wish I\'d learned to play an instrument when I was a child."' },
        { k: 'mc', q: 'Why did she say no to piano lessons?', o: ['She wanted to play football.', 'They were too expensive.', 'She didn\'t like the teacher.'], a: 0,
          why: '"I said no because I wanted to play football."' }
      ] },
      { lines: [
        ['B', 'If only I hadn\'t posted that photo. I was fourteen and I thought it was funny. Years later, a company found it when I applied for a job. I didn\'t get the job, and I still wonder if that was the reason.']
      ], items: [
        { k: 'mc', q: 'What does Owen regret?', o: ['posting a photo online', 'not applying for a job', 'leaving school'], a: 0, why: '"If only I hadn\'t posted that photo."' },
        { k: 'tf', q: 'Owen is sure the photo was the reason he didn\'t get the job.', a: false, fix: 'He still wonders if it was the reason.', why: '"I still wonder if that was the reason."' }
      ] },
      { lines: [
        ['C', 'Honestly, I don\'t have many regrets. When I make a mistake, I try to learn from it. But I do wish I\'d spent more time with my grandfather. He had amazing stories, and I was always too busy.']
      ], items: [
        { k: 'mc', q: 'What does Rosa wish?', o: ['that she had spent more time with her grandfather', 'that she had more stories', 'that she was less busy now'], a: 0,
          why: '"I do wish I\'d spent more time with my grandfather."' },
        { k: 'mc', q: 'How does Rosa deal with mistakes?', o: ['She tries to learn from them.', 'She forgets them.', 'She blames other people.'], a: 0, why: '"When I make a mistake, I try to learn from it."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'I wish I ___ learned an instrument as a child.', a: ['had', '\'d'], why: 'wish + past perfect for the past: I wish I had learned.' },
      { k: 'mc', q: 'Which sentence is about a past regret?', o: ['I wish I had studied harder.', 'I wish I studied harder.', 'I wish I will study harder.'], a: 0,
        why: 'wish + had + past participle = a regret about the past.' },
      { k: 'hear', say: 'If only I hadn\'t posted that photo.', q: 'Did he post the photo?', o: ['Yes, and he regrets it.', 'No, he didn\'t.', 'He doesn\'t remember.'], a: 0,
        why: 'If only I hadn\'t posted = I posted it, and I am sorry.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I wish I *have* gone to the concert last night.', fix: 'had', why: 'wish + past perfect: I wish I had gone.', he: 'על חרטה בעבר: wish + had + V3.' },
    { k: 'build', s: 'If only I had listened to my parents.', why: 'If only + past perfect = a strong regret about the past.' }
  ]
},
{
  id: 'b2r01', url: 'https://test-english.com/reading/b2/is-overtourism-pricing-locals-out-b2-english-reading-test/', type: 'reading',
  title: 'Too many tourists?', dinner: 'How could tourists help a city instead of hurting it?',
  hook: { q: 'In 2024 Venice began charging day visitors a fee on its busiest days. How much?', o: ['€5', '€50', '€500'], a: 0,
    reveal: '*€5*, in 2024. Venice became the first city in the world to charge day-trippers to enter, to fight overtourism.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A magazine article asks: are tourists making life too expensive for the people who live in famous cities?',
    predict: { q: 'Why do you think some locals are angry with tourists?', o: ['Homes become too expensive.', 'Tourists speak other languages.', 'Tourists take too many photos.'] } },
  story: { title: 'Too many tourists?', chunks: [
    { text: 'Every summer, the streets of some of Europe\'s most beautiful cities become so crowded that walking feels like queuing. This is overtourism: too many visitors in one place at the same time. In Venice, for example, fewer than 50,000 people live in the historic centre, but on busy days the number of tourists can be several times higher. In 2024, the city began charging day visitors a €5 fee on its busiest days.',
      items: [
        { k: 'mc', q: 'What is overtourism?', o: ['too many visitors in one place at the same time', 'tourists who stay too long', 'very expensive holidays'], a: 0,
          why: '"too many visitors in one place at the same time"' },
        { k: 'tf', q: 'In Venice, tourists can outnumber the people who live there.', a: true, why: '"on busy days the number of tourists can be several times higher"' },
        { k: 'find', q: 'Find a word that means "standing in a line and waiting".', a: 'queuing', why: 'queue = a line of people waiting.' }
      ] },
    { text: 'But crowds are only part of the problem. When apartments are rented to tourists for a few nights at a time, owners can earn far more than from a normal tenant. As a result, fewer homes are available for local people, and rents go up. In Barcelona, protesters marched through the city in 2024, and some of them sprayed tourists with water pistols to make their point. The city has promised to stop renting flats to tourists by 2028.',
      items: [
        { k: 'mc', q: 'Why do rents go up?', o: ['Owners rent flats to tourists instead of locals.', 'Tourists buy all the houses.', 'The government raises taxes.'], a: 0,
          why: '"fewer homes are available for local people, and rents go up."' },
        { k: 'mc', q: 'What did some protesters in Barcelona do?', o: ['They sprayed tourists with water pistols.', 'They closed the airport.', 'They painted the streets.'], a: 0,
          why: '"some of them sprayed tourists with water pistols"' },
        { k: 'find', q: 'Find a word that means "a person who pays rent to live in a home".', a: 'tenant', why: 'a tenant rents a home.' }
      ] },
    { text: 'Not everyone agrees that tourists are the enemy. Tourism brings jobs, and many small businesses depend on it. Experts suggest that the answer is not fewer travellers but smarter travel: visiting in the quieter months, staying longer in one place, and exploring smaller towns instead of the famous few. After all, the people who live there are the reason a place feels alive.',
      items: [
        { k: 'mc', q: 'What do experts suggest?', o: ['smarter travel, not fewer travellers', 'stopping all tourism', 'only visiting famous cities'], a: 0,
          why: '"the answer is not fewer travellers but smarter travel"' },
        { k: 'mc', q: 'Which is one example of smarter travel?', o: ['visiting in quieter months', 'travelling only in August', 'staying one night in each city'], a: 0,
          why: '"visiting in the quieter months, staying longer in one place…"' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the writer\'s view?', o: ['Tourism causes real problems, but smarter travel can help.', 'Tourists should stay at home.', 'Overtourism is not a real problem.'], a: 0,
        why: 'The article shows the problems and then suggests smarter travel.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'Fewer homes are available for local people. As a ___, rents go up.', a: ['result'], why: 'As a result introduces a result.' }
  ]
},
{
  id: 'b2u02', url: 'https://test-english.com/use-of-english/b2/b2-english-test-2-multiple-choice-questions/', type: 'use-of-english',
  title: 'No phones at dinner', dinner: 'Should we have a no-phones rule at our dinner table? Why?',
  hook: { q: 'In a study, people talked with a phone lying on the table. What happened?', o: ['They felt less connected', 'They talked more', 'Nothing changed'], a: 0,
    reveal: '*They felt less connected*. Just having a phone on the table, even switched off, made conversations feel less close.' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A village restaurant bans phones at dinner. How do you think teenagers react?', o: ['They are surprised that they like it', 'They stop going there', 'They don\'t notice'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'The village that banned phones',
        t: 'The small village of Llanmor has made an unusual decision: phones are now banned at the table in its only restaurant. [1] some customers complained at first, most now say they enjoy the change. "Not only [2] people talk more, they also order dessert!" jokes the owner, Megan Price. The idea came from a study [3] suggested that just having a phone on the table makes conversations feel less personal. [4] a result, Megan put a wooden box by the door, [5] diners leave their phones. Teenagers [6] to be the most surprised. "I thought I\'d hate it," says 16-year-old Rhys, "but it was actually nice [7] my family properly." The village council is now considering [8] the rule to the school canteen.',
        gaps: [
          { o: ['Although', 'Despite', 'However'], a: 0, why: 'Although + a clause: some customers complained.' },
          { o: ['do', 'are', 'have'], a: 0, why: 'After Not only at the start, the helper comes first: Not only do people talk more…' },
          { o: ['which', 'who', 'what'], a: 0, why: 'which (or that) for things: a study which suggested…' },
          { o: ['As', 'So', 'For'], a: 0, why: 'As a result.' },
          { o: ['where', 'which', 'when'], a: 0, why: 'A place → where diners leave their phones.' },
          { o: ['seem', 'seems', 'seeming'], a: 0, why: 'Teenagers (plural) seem to be…' },
          { o: ['to talk to', 'talking to', 'talk to'], a: 0, why: 'it was nice + to + verb.' },
          { o: ['extending', 'to extend', 'extend'], a: 0, why: 'consider + -ing.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: '___ the rain, we went for a walk.', o: ['Despite', 'Although', 'Because'], a: 0, why: 'the rain is a noun → despite.' },
      { k: 'mc', q: 'Not only ___ she sing, she also plays the guitar.', o: ['does', 'is', 'has'], a: 0, why: 'Not only + do / does + subject + verb.' },
      { k: 'tf', q: '"I\'m considering to change schools."', a: false, fix: 'I\'m considering changing schools.', why: 'consider + -ing.' },
      { k: 'type', q: 'It was so loud ___ we couldn\'t hear each other.', a: ['that'], why: 'so + adjective + that.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Phones are now banned at the dinner table.', why: 'The passive: are + banned.' }
  ]
},
{
  id: 'b2g04', url: 'https://test-english.com/grammar-points/b2/reflexive-reciprocal-pronouns/', type: 'grammar',
  title: 'Myself or each other?', dinner: 'What is something you taught yourself to do?',
  hook: { q: 'Which of these animals can recognise itself in a mirror?', o: ['Dolphins', 'Dogs', 'Cats'], a: 0,
    reveal: '*Dolphins*! In experiments, dolphins with a mark on their body turned in front of a mirror to look at *themselves*. Dogs and cats usually think the dog or cat in the mirror is another animal.' },
  learn: { kind: 'rule', title: 'Reflexive and reciprocal pronouns',
    lines: ['*Reflexive* (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves): the subject and the object are the same: She hurt *herself*.',
      'For emphasis (= that person and nobody else): I made it *myself*. *by* + reflexive = alone: He lives *by himself*.',
      'Common phrases: *enjoy yourself*, *help yourselves* (to food), *behave yourself*. We don\'t usually use them with relax, concentrate, feel or meet: *Relax!* (not relax yourself)',
      '*Reciprocal*: *each other* / *one another* = A to B and B to A: Noa and Ido hugged *each other*. Compare: They looked at *themselves* (each in the mirror) / at *each other*.'],
    ex: ['Did you paint this *yourself*?', 'We text *each other* every day.'],
    he: 'myself, themselves וכו\' = את עצמי, את עצמם. each other = אחד את השני. שימו לב: "נרגעתי" ו"התרכזתי" נשמעים כמו פעולה על עצמי, אבל באנגלית אין צורך ב-myself: I relaxed, I concentrated.' },
  steps: [
    { name: 'Myself, yourself…', items: [
      { k: 'mc', q: 'Be careful with that knife! You might cut ___.', o: ['yourself', 'you', 'your'], a: 0, why: 'The subject (you) and the object are the same person → yourself.' },
      { k: 'mc', q: 'Tom taught ___ to play the guitar by watching videos.', o: ['himself', 'him', 'itself'], a: 0, why: 'Tom taught Tom → himself.' },
      { k: 'mc', q: 'The door opened by ___. It was only the wind!', o: ['itself', 'himself', 'it'], a: 0, why: 'by itself = with nobody opening it; door → itself.' },
      { k: 'mc', q: 'We really enjoyed ___ at the water park.', o: ['ourselves', 'us', 'each other'], a: 0, why: 'enjoy needs an object; we → ourselves.' }
    ] },
    { name: 'Themselves or each other?', items: [
      { k: 'mc', q: 'After their argument, Maya and Dan stopped talking to ___.', o: ['each other', 'themselves', 'ourselves'], a: 0, why: 'Maya doesn\'t talk to Dan, and Dan doesn\'t talk to Maya → each other.' },
      { k: 'mc', q: 'After the match, the players from both teams shook hands with ___.', o: ['each other', 'themselves', 'itself'], a: 0, why: 'Every player shakes hands with someone else → each other.' },
      { k: 'tf', q: '"I need to relax myself before the exam."', a: false, fix: 'I need to relax before the exam.', why: 'relax doesn\'t take a reflexive pronoun.',
        he: 'בעברית "להירגע" נשמע כאילו צריך "את עצמי", אבל באנגלית פשוט relax.' },
      { k: 'mc', q: 'The children made the whole cake by ___.', o: ['themselves', 'each other', 'them'], a: 0, why: 'by themselves = without help.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'They took photos of each other.', why: 'Each one took a photo of the other → each other.' },
      { k: 'spot', s: 'My little brother can tie his shoes by *him*.', fix: 'himself', why: 'by + reflexive = alone: by himself.' },
      { k: 'build', s: 'Help yourselves to some more pizza.', why: 'help yourselves (to food) = take what you want; yourselves for more than one guest.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Did you make this birthday card *you*? It\'s beautiful!', fix: 'yourself', why: 'For emphasis (= you and nobody else) → yourself.' },
    { k: 'type', q: 'The two cats were washing ___ other in the sun.', a: ['each'], why: 'Each cat washes the other → each other.' },
    { k: 'mc', q: 'Which sentence is correct?', o: ['I concentrated hard during the test.', 'I concentrated myself hard during the test.', 'I concentrated me hard during the test.'], a: 0,
      why: 'concentrate doesn\'t take a reflexive pronoun.' }
  ]
},
{
  id: 'b2g05', url: 'https://test-english.com/grammar-points/b2/there-and-it/', type: 'grammar',
  title: 'There or it?', dinner: 'Is there anything new in your class this week?',
  hook: { q: 'How much of all the water on Earth is fresh water (not salty)?', o: ['About 3%', 'About 30%', 'About 60%'], a: 0,
    reveal: 'Only *about 3%*! *There is* a lot of water on our planet, but most of it is salty sea water. *It\'s* important not to waste the fresh water we have.' },
  learn: { kind: 'rule', title: 'There and it as subjects',
    lines: ['*There* + be says that something exists or introduces something new: *There\'s* a new student in our class. *There are* lots of ways to help.',
      '*It* refers back to something we already mentioned: There\'s a new café in town. *It*\'s really cosy.',
      '*It* is an empty subject for weather, time and distance: *It*\'s raining. *It*\'s eight o\'clock. *It*\'s 5 km to the beach.',
      '*It* stands in for a long subject (to + verb, a that-clause): *It*\'s hard *to learn* the drums. *It*\'s a pity *that* you missed the trip. And: *There seems to be* a problem. *There will be* a quiz.'],
    ex: ['There\'s a spider in the bath! It\'s huge!', 'It\'s great to see you again.'],
    he: 'בעברית אומרים "יש פארק" או "כיף לראות אותך" בלי נושא. באנגלית תמיד צריך נושא: "יש" = There is / There are (לא It has). ולמזג אוויר, שעה ומרחק: It is. לא אומרים Is raining או Is important to...' },
  steps: [
    { name: 'There or it?', items: [
      { k: 'mc', q: 'Look! ___ a rainbow over the hills!', o: ['There\'s', 'It has', 'Has'], a: 0, why: 'Something new that we see → There\'s.' },
      { k: 'mc', q: '___ about twenty minutes by bus to the stadium.', o: ['It\'s', 'There\'s', 'There are'], a: 0, why: 'Time and distance → it.' },
      { k: 'mc', q: 'I love this song. ___ so catchy!', o: ['It\'s', 'There\'s', 'They\'re'], a: 0, why: 'It refers back to the song.' },
      { k: 'mc', q: '___ too many people in the pool today.', o: ['There are', 'It is', 'There is'], a: 0, why: 'too many people (plural) exist there → There are.' }
    ] },
    { name: 'The empty subject', items: [
      { k: 'mc', q: '___ is important to drink water when you exercise.', o: ['It', 'There', 'This'], a: 0, why: 'It stands in for the long subject "to drink water".' },
      { k: 'type', q: '___ seems to be a problem with the wifi.', a: ['there'], why: 'there + seem to be = there is (probably).' },
      { k: 'tf', q: '"It has a great park near my house."', a: false, fix: 'There is a great park near my house.', why: 'To say something exists, use there is, not it has.',
        he: '"יש" בעברית הוא There is, לא It has.' },
      { k: 'mc', q: '___ will be a quiz on Thursday, so revise tonight.', o: ['There', 'It', 'This'], a: 0, why: 'A quiz will exist → There will be.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'It is hard to wake up early.', why: 'It stands in for "to wake up early".' },
      { k: 'spot', s: '*It* are two dogs in our garden.', fix: 'There', why: 'Two dogs exist there → There are.' },
      { k: 'build', s: 'There is nothing to eat in the fridge.', why: 'there is + nothing.' }
    ] }
  ],
  use: [
    { k: 'teach', s: '*Is* nice to meet you!', fix: 'It\'s', why: 'An English sentence needs a subject: It\'s nice to meet you.' },
    { k: 'type', q: '___ was so windy that the trampoline blew over.', a: ['it'], why: 'Weather → it.' },
    { k: 'mc', q: 'Which sentence is correct?', o: ['It\'s a shame that you can\'t come.', 'There\'s a shame that you can\'t come.', 'Is a shame that you can\'t come.'], a: 0,
      why: 'It stands in for the that-clause: It\'s a shame that…' }
  ]
},
{
  id: 'b2g06', url: 'https://test-english.com/grammar-points/b2/narrative-tenses-used-to-would/', type: 'grammar',
  title: 'Telling stories', dinner: 'What did you use to do when you were little that you don\'t do now?',
  hook: { q: 'Before alarm clocks were common, some people in Britain paid a "knocker-up". What was that person\'s job?', o: ['Waking people up by tapping on their windows', 'Delivering milk', 'Lighting the street lamps'], a: 0,
    reveal: '*Waking people up*! Knocker-ups *used to* walk the streets early in the morning, and they *would* tap on bedroom windows with a long stick until the workers woke up.' },
  learn: { kind: 'rule', title: 'Narrative tenses, used to and would',
    lines: ['*Past simple*: the main events, one after another: We *got* to the beach, *jumped* in and *swam*.',
      '*Past continuous* (was / were + -ing): the background, or an action in progress when something else happened: The sun *was shining*. I *was reading* when the lights *went* out.',
      '*Past perfect* (had + past participle): something earlier than the moment in the story: When we arrived, the film *had* already *started*. For a longer earlier action: She was out of breath because she *had been running*.',
      'Past habits: *used to* + verb for habits and states (I *used to have* long hair); *would* + verb only for repeated actions, not states: Every summer we *would go* camping.'],
    ex: ['I *was walking* home when it *started* to rain.', 'We *used to live* in Haifa.'],
    he: 'בעברית יש זמן עבר אחד. באנגלית: past simple לאירועים, was/were + ing לרקע, had + V3 למשהו שקרה עוד קודם. used to = "נהגתי ל..." (גם למצב), אבל would רק לפעולה שחזרה, לא למצב: I used to have a dog, לא I would have a dog.' },
  steps: [
    { name: 'Tell the story', items: [
      { k: 'mc', q: 'I ___ my homework when my phone suddenly rang.', o: ['was doing', 'have done', 'am doing'], a: 0, why: 'An action in progress when something else happened → past continuous.' },
      { k: 'mc', q: 'By the time we got to the station, the train ___.', o: ['had left', 'has left', 'leaves'], a: 0, why: 'The train left before we got there → past perfect.' },
      { k: 'mc', q: 'It ___ heavily, so we stayed inside and played cards.', o: ['was raining', 'is raining', 'has rained'], a: 0, why: 'The background of a past story → past continuous.' },
      { k: 'mc', q: 'Ella was out of breath because she ___.', o: ['had been running', 'has been running', 'runs'], a: 0, why: 'A longer action before a past moment → had been + -ing.' }
    ] },
    { name: 'Used to or would?', items: [
      { k: 'mc', q: 'When I was little, I ___ be afraid of the dark.', o: ['used to', 'would', 'was used to'], a: 0, why: 'be afraid is a state → used to, not would.' },
      { k: 'tf', q: '"Every Saturday, Grandpa would take us to the park."', a: true, why: 'A repeated action in the past → would is fine (used to too).' },
      { k: 'tf', q: '"We would live in Haifa when I was a baby."', a: false, fix: 'We used to live in Haifa when I was a baby.', why: 'live is a state → used to, not would.' },
      { k: 'type', q: 'Did you ___ to play football at primary school?', a: ['use'], why: 'In questions and negatives: did … use to (no d).',
        he: 'אחרי did כותבים use to בלי d: Did you use to...? I didn\'t use to...' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'She used to have very long hair.', why: 'A past state that is not true now → used to.' },
      { k: 'spot', s: 'When I arrived, everyone *has* already gone home.', fix: 'had', why: 'Earlier than a past moment → past perfect: had gone.' },
      { k: 'build', s: 'I was walking home when it started to rain.', why: 'Background (past continuous) + the event (past simple).' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I *would* have a pet rabbit when I was seven.', fix: 'used to', why: 'have (= own) is a state → used to.' },
    { k: 'type', q: 'When I got home, I realised I ___ left my keys at school.', a: ['had', '\'d'], why: 'Leaving the keys happened earlier → had left.' },
    { k: 'mc', q: 'Which sentence is NOT correct?', o: ['I would be very shy as a child.', 'I used to be very shy as a child.', 'I was very shy as a child.'], a: 0,
      why: 'be shy is a state, so would doesn\'t work here.' }
  ]
},
{
  id: 'b2g07', url: 'https://test-english.com/grammar-points/b2/get/', type: 'grammar',
  title: 'So many gets', dinner: 'What gets you in a good mood on a bad day?',
  hook: { q: 'Your friend says, "I don\'t get it." What does she mean?', o: ['I don\'t understand', 'I didn\'t receive it', 'I can\'t reach it'], a: 0,
    reveal: '*I don\'t understand*. Get is one of the busiest verbs in English: it can mean understand, receive, buy, fetch, arrive and become, and it\'s part of many phrasal verbs.' },
  learn: { kind: 'rule', title: 'Get: different meanings',
    lines: ['get + a noun = receive, buy or fetch: I *got* a message. Can you *get* some bread? I\'ll *get* your coat.',
      'get + an adjective or past participle = become: *get* tired, *get* angry, *get* better, *get* dressed, *get* lost.',
      'get + a place = arrive or move: *get* to school, *get* home (no to), *get* on / off the bus, *get* into / out of the car.',
      'get = understand: I don\'t *get* it. get + object + past participle = someone does it for you: I *got* my hair *cut*.'],
    ex: ['It\'s *getting* dark. Let\'s go home.', 'We *got* our bikes *fixed* yesterday.'],
    he: 'ל-get יש המון משמעויות: לקבל, לקנות, להביא, להגיע, להיעשות (get tired = להתעייף), להבין. get home בלי to, כמו go home. I got my hair cut = מישהו אחר גזר לי את השיער.' },
  steps: [
    { name: 'What does get mean?', items: [
      { k: 'mc', q: 'In "What time did you get to the party?", get means…', o: ['arrive', 'receive', 'become'], a: 0, why: 'get to + a place = arrive.' },
      { k: 'mc', q: 'In "I didn\'t get the joke", get means…', o: ['understand', 'buy', 'fetch'], a: 0, why: 'get a joke = understand it.' },
      { k: 'mc', q: 'In "My sister gets scared during thunderstorms", gets means…', o: ['becomes', 'receives', 'arrives'], a: 0, why: 'get + an adjective = become.' },
      { k: 'mc', q: 'In "Could you get me a glass of water?", get means…', o: ['fetch', 'understand', 'become'], a: 0, why: 'get someone something = go and bring it.' }
    ] },
    { name: 'Get it right', items: [
      { k: 'mc', q: 'We got ___ at about midnight.', o: ['home', 'to home', 'at home'], a: 0, why: 'get home, with no to (like go home).',
        he: 'כמו go home, גם get home בלי to.' },
      { k: 'mc', q: 'Hurry up and get ___. The bus leaves in five minutes!', o: ['dressed', 'dress', 'dressing'], a: 0, why: 'get dressed = put your clothes on.' },
      { k: 'type', q: 'This is our stop. Let\'s get ___ the bus.', a: ['off'], why: 'Leave a bus → get off.' },
      { k: 'tf', q: '"I got cut my hair yesterday."', a: false, fix: 'I got my hair cut yesterday.', why: 'get + object + past participle: got my hair cut.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'It is getting colder every day.', why: 'get + a comparative = become more and more.' },
      { k: 'spot', s: 'Please don\'t get *anger*, it was only a joke.', fix: 'angry', why: 'get + an adjective: get angry.' },
      { k: 'build', s: 'We got our car washed on Sunday.', why: 'get + object + past participle: someone washed it for us.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I couldn\'t *got* the answer, so I asked my teacher.', fix: 'get', why: 'After could / couldn\'t, use the base form: get.' },
    { k: 'type', q: 'Sorry you\'re ill! I hope you get ___ soon.', a: ['better', 'well'], why: 'get better / get well = recover.' },
    { k: 'mc', q: 'Which sentence means "Someone else painted my room"?', o: ['I got my room painted.', 'I got painting my room.', 'I painted my room.'], a: 0,
      why: 'get + object + past participle = someone does it for you.' }
  ]
},
{
  id: 'b2g08', url: 'https://test-english.com/grammar-points/b2/discourse-markers/', type: 'grammar',
  title: 'Anyway, by the way', dinner: 'What was the best part of your day? By the way, did anything funny happen?',
  hook: { q: 'How many hearts does an octopus have?', o: ['One', 'Three', 'Eight'], a: 1,
    reveal: '*Three*! *What\'s more*, its blood is blue. *However*, one of the hearts stops beating when it swims, *which is why* octopuses often prefer crawling.' },
  learn: { kind: 'rule', title: 'Linking words in speech and writing',
    lines: ['Adding: *What\'s more*, *Besides*, *In addition*: The hotel was cheap. *What\'s more*, it was near the beach.',
      'Contrast: *However*, *On the other hand*, *Even so*: The test was hard. *However*, most of us passed.',
      '*Actually* / *In fact* = the truth is (often a surprise). *Anyway* = back to the main point. *By the way* = a new topic. *After all* = remember that. *Otherwise* = if not.',
      '*In the end* = finally, after some time: *In the end*, we took a taxi. *At the end of* = at the last part of something: *at the end of* the film.'],
    ex: ['Put your coat on. *Otherwise*, you\'ll get cold.', '*By the way*, have you fed the dog?'],
    he: 'actually לא אומר "כרגע" (זה currently), אלא "למעשה, האמת היא ש...". in the end = בסופו של דבר. at the end of = בסוף של משהו (at the end of the film).' },
  steps: [
    { name: 'Pick the marker', items: [
      { k: 'mc', q: 'I didn\'t really want to go to the party. ___, I had a great time.', o: ['In the end', 'By the way', 'What\'s more'], a: 0, why: 'In the end = finally, after all that.' },
      { k: 'mc', q: 'The museum is free. ___, it\'s only five minutes from school.', o: ['What\'s more', 'However', 'Otherwise'], a: 0, why: 'A second good point → What\'s more (adding).' },
      { k: 'mc', q: 'Put on some sun cream. ___, you\'ll get burnt.', o: ['Otherwise', 'In fact', 'Besides'], a: 0, why: 'Otherwise = if you don\'t.' },
      { k: 'mc', q: '"Did you enjoy the book?" "Not really. ___, I didn\'t even finish it."', o: ['In fact', 'However', 'Otherwise'], a: 0, why: 'In fact adds a stronger, true detail.' }
    ] },
    { name: 'Actually, anyway…', items: [
      { k: 'mc', q: 'Which word means "at the moment"?', o: ['currently', 'actually', 'eventually'], a: 0, why: 'currently = now. actually = in fact; eventually = in the end.',
        he: 'actually ו-eventually הם "חברים כוזבים": actually = למעשה, eventually = בסופו של דבר. "כרגע" = currently.' },
      { k: 'mc', q: '___, did you see the video I sent you?', o: ['By the way', 'After all', 'Otherwise'], a: 0, why: 'A new topic → By the way.' },
      { k: 'mc', q: 'Don\'t be too hard on him. ___, he\'s only six.', o: ['After all', 'By the way', 'In the end'], a: 0, why: 'After all = remember that (a reason).' },
      { k: 'type', q: 'We talked for hours, and in the ___ we decided to go to the beach.', a: ['end'], why: 'in the end = finally, after some time.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'However, most of the class passed the test.', why: 'However at the start, then a comma.' },
      { k: 'spot', s: 'I was very nervous. *Otherwise*, the interview went well.', fix: 'However', why: 'A contrast → However.' },
      { k: 'build', s: 'By the way, have you fed the dog?', why: 'By the way opens a new topic.' }
    ] }
  ],
  use: [
    { k: 'teach', s: '*At* the end, we found the right street.', fix: 'In', why: 'Finally, after some time → In the end.' },
    { k: 'type', q: 'Bring a snack. ___, you\'ll be hungry by lunchtime.', a: ['otherwise'], why: 'Otherwise = if you don\'t.' },
    { k: 'mc', q: 'The phone is expensive. What is the best way to continue?', o: ['On the other hand, it has a great camera.', 'What\'s more, it is cheap.', 'Otherwise, it has a great camera.'], a: 0,
      why: 'A good point against a bad one → On the other hand.' }
  ]
},
{
  id: 'b2g09', url: 'https://test-english.com/grammar-points/b2/speculation-deduction/', type: 'grammar',
  title: 'It must be…', dinner: 'Who do you think might be the tallest person in our family in ten years?',
  hook: { q: 'Why do cats push their paws in and out on soft blankets? Scientists think it might be…', o: ['a habit from when they were kittens', 'to sharpen their claws', 'because they are cold'], a: 0,
    reveal: 'It *may* be a habit from kittenhood: kittens push against their mother to get milk. Nobody can be completely sure, so scientists say it *might* or *could* be the reason.' },
  learn: { kind: 'rule', title: 'How sure are you?',
    lines: ['Sure it is true: *must* + verb: She *must* be tired. She\'s been running for hours.',
      'Sure it is not true: *can\'t* / *couldn\'t*: That *can\'t* be Ido. He\'s in Eilat. (not mustn\'t)',
      'Possible: *may* / *might* / *could*: It *might* rain later.',
      'About the past: modal + have + past participle: He *must have forgotten*. They *can\'t have seen* us. And: *bound to* = certain to; *likely* / *unlikely to*: You\'re *bound to* pass.'],
    ex: ['The lights are off. They *must have gone* out.', 'Take an umbrella. It *could* rain.'],
    he: '"בטח" (אני בטוח שכן) = must. "אין מצב ש..." = can\'t, לא mustn\'t (mustn\'t זה "אסור"). על העבר: must have + V3 (בטח...), can\'t have + V3 (אין מצב ש...).' },
  steps: [
    { name: 'How sure are you?', items: [
      { k: 'mc', q: 'You\'ve been walking all day. You ___ be exhausted!', o: ['must', 'can\'t', 'mustn\'t'], a: 0, why: 'We are sure it is true → must.' },
      { k: 'mc', q: 'That ___ be Noa\'s bag. She took hers home yesterday.', o: ['can\'t', 'must', 'might'], a: 0, why: 'We are sure it is not true → can\'t.' },
      { k: 'mc', q: 'I\'m not sure where Ben is. He ___ be in the library.', o: ['might', 'must', 'can\'t'], a: 0, why: 'not sure → might (possible).' },
      { k: 'mc', q: 'The ground is wet. It ___ rained during the night.', o: ['must have', 'can\'t have', 'must'], a: 0, why: 'A sure guess about the past → must have + past participle.' }
    ] },
    { name: 'About the past', items: [
      { k: 'type', q: 'He didn\'t answer my call. He might ___ been asleep.', a: ['have'], why: 'About the past: might have + past participle.' },
      { k: 'tf', q: '"She mustn\'t be at home. Her car isn\'t there."', a: false, fix: 'She can\'t be at home. Her car isn\'t there.', why: 'Sure it is not true → can\'t. mustn\'t means it is not allowed.',
        he: 'mustn\'t = אסור. כשבטוחים שמשהו לא נכון: can\'t.' },
      { k: 'mc', q: 'They ___ seen us. We were hiding behind the wall.', o: ['can\'t have', 'must have', 'must'], a: 0, why: 'Sure it did not happen → can\'t have + past participle.' },
      { k: 'mc', q: 'Don\'t worry about the test. You\'re ___ to pass. You\'ve studied so hard!', o: ['bound', 'unlikely', 'possible'], a: 0, why: 'bound to = certain to.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'You must have left it on the bus.', why: 'A sure guess about the past → must have + past participle.' },
      { k: 'spot', s: 'Shira *can\'t* be at home. I can see her light on.', fix: 'must', why: 'The light is on, so we are sure she is at home → must.' },
      { k: 'build', s: 'It might snow in the mountains tomorrow.', why: 'Possible in the future → might.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Look at all those presents! It *can\'t* be someone\'s birthday.', fix: 'must', why: 'All those presents → we are sure → must.' },
    { k: 'type', q: 'The cake has disappeared! The dog must have ___ it.', hint: '(eat)', a: ['eaten'], why: 'must have + past participle: eaten.' },
    { k: 'mc', q: 'Which sentence means "I\'m sure he didn\'t see me"?', o: ['He can\'t have seen me.', 'He mustn\'t have seen me.', 'He might have seen me.'], a: 0,
      why: 'Sure it did not happen → can\'t have + past participle.' }
  ]
},
{
  id: 'b2u01', url: 'https://test-english.com/use-of-english/b2/b2-english-test-1-text-multiple-choice-gaps/', type: 'use-of-english',
  title: 'The beach robot', dinner: 'What could we invent to make our neighbourhood cleaner?',
  hook: { q: 'How long can a plastic bottle take to break down in the sea?', o: ['About 4 years', 'About 45 years', 'About 450 years'], a: 2,
    reveal: 'Scientists often estimate *about 450 years*. That is why every bottle picked up from a beach really matters.' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'Three teenagers build a robot for their local beach. What do you think it does?', o: ['It collects plastic', 'It saves swimmers', 'It sells ice cream'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'Teens build a beach-cleaning robot',
        t: 'Three students from Ashdod have come [1] with a clever way to keep their local beach clean. Noam, Tamar and Eli, all aged fifteen, spent six months building a small robot that [2] the sand for bottle tops and plastic bags. "We were fed [3] with seeing rubbish every time we went swimming," explains Tamar. The robot moves slowly along the beach and picks up anything it does not [4] as sand or shells. [5] it is still only a prototype, it has already collected more than ten kilos of plastic. The team had to [6] many problems along the way: the first version kept getting [7] in the wet sand. Now the city council has [8] to pay for two more robots before next summer.',
        gaps: [
          { o: ['up', 'in', 'over'], a: 0, why: 'come up with = think of (an idea or a plan).' },
          { o: ['searches', 'looks', 'finds'], a: 0, why: 'search a place for something. (look takes for: look for bottle tops.)' },
          { o: ['up', 'off', 'down'], a: 0, why: 'fed up with = tired of and annoyed by.' },
          { o: ['recognise', 'realise', 'know'], a: 0, why: 'recognise something as = see what it is.' },
          { o: ['Although', 'Despite', 'However'], a: 0, why: 'Although + a clause (it is still a prototype).' },
          { o: ['overcome', 'succeed', 'achieve'], a: 0, why: 'overcome a problem = deal with it successfully.' },
          { o: ['stuck', 'fixed', 'held'], a: 0, why: 'get stuck = be unable to move.' },
          { o: ['agreed', 'accepted', 'admitted'], a: 0, why: 'agree to + verb = say yes to doing something.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'Who came ___ with the idea of a class picnic?', o: ['up', 'in', 'on'], a: 0, why: 'come up with an idea.' },
      { k: 'tf', q: '"The team succeeded to finish the robot on time."', a: false, fix: 'The team succeeded in finishing the robot on time.', why: 'succeed in + -ing.',
        he: 'בעברית "הצליחו לסיים", אבל באנגלית succeed in + ing (או managed to finish).' },
      { k: 'mc', q: 'My shoe got ___ in the mud and came off.', o: ['stuck', 'stopped', 'stood'], a: 0, why: 'get stuck = be unable to move.' },
      { k: 'type', q: 'The council has agreed ___ pay for two more robots.', a: ['to'], why: 'agree to + verb.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'They came up with a clever idea.', why: 'come up with = think of.' }
  ]
},
{
  id: 'b2u03', url: 'https://test-english.com/use-of-english/b2/b2-english-test-3-text-multiple-choice-gaps/', type: 'use-of-english',
  title: 'Reading to dogs', dinner: 'Which animal would you like to read a story to, and why?',
  hook: { q: 'In some libraries around the world, children practise reading aloud to…', o: ['dogs', 'plants', 'robots'], a: 0,
    reveal: '*Dogs*! Many libraries and schools have reading-dog programmes. A calm dog listens without judging, so shy readers feel more confident.' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A library brings in a dog for the children. Why do you think it is there?', o: ['To listen to them read', 'To guard the books', 'To find lost books'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'The dog who loves stories',
        t: 'Every Tuesday afternoon, a golden retriever called Biscuit [1] the children\'s corner of Rosewood Library. Biscuit is not there to borrow books; he is there to listen. Children who find reading aloud difficult take [2] reading short stories to him. "Dogs don\'t laugh when you make a mistake," says ten-year-old Oliver, [3] reading has improved a lot since the spring. The librarian, Hannah Cole, got the idea after reading [4] a similar project in Canada. At first, some parents doubted [5] it would work. [6], after a few weeks, teachers noticed that the children were more [7] when they read in class too. The project has become so popular that there is now a waiting list, and the library is [8] for more calm, friendly dogs to join the team.',
        gaps: [
          { o: ['visits', 'attends', 'joins'], a: 0, why: 'visit a place = go there for a short time.' },
          { o: ['turns', 'times', 'places'], a: 0, why: 'take turns (doing something) = one after another.' },
          { o: ['whose', 'who', 'which'], a: 0, why: 'whose = his (Oliver\'s reading).' },
          { o: ['about', 'for', 'on'], a: 0, why: 'read about something.' },
          { o: ['whether', 'unless', 'what'], a: 0, why: 'doubt whether = not be sure if.' },
          { o: ['However', 'Although', 'Despite'], a: 0, why: 'A contrast at the start of a sentence, with a comma → However.' },
          { o: ['confident', 'confidence', 'confidently'], a: 0, why: 'After were more we need an adjective: confident.' },
          { o: ['looking', 'finding', 'seeing'], a: 0, why: 'look for = try to find.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'That\'s the boy ___ dog won the competition.', o: ['whose', 'who\'s', 'which'], a: 0, why: 'whose = his (the boy\'s dog).',
        he: 'whose = "ש...שלו". who\'s = who is.' },
      { k: 'mc', q: 'I\'m not sure ___ I can come to your party.', o: ['whether', 'unless', 'what'], a: 0, why: 'not sure whether (= if).' },
      { k: 'tf', q: '"She speaks very confident in front of the class."', a: false, fix: 'She speaks very confidently in front of the class.', why: 'How she speaks → an adverb: confidently.' },
      { k: 'type', q: 'We\'re looking ___ a new goalkeeper for our team.', a: ['for'], why: 'look for = try to find.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Dogs do not laugh at your mistakes.', why: 'laugh at someone or something.' }
  ]
},
{
  id: 'b2u04', url: 'https://test-english.com/use-of-english/b2/b2-english-test-4-multiple-choice-questions/', type: 'use-of-english',
  title: 'The school garden', dinner: 'If we had a garden, what would you like to grow?',
  hook: { q: 'Scientifically speaking, which of these is a fruit?', o: ['A tomato', 'A carrot', 'A potato'], a: 0,
    reveal: '*A tomato*! It grows from a flower and has seeds inside, so for scientists it is a fruit, even if we put it in a salad.' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A school starts a vegetable garden. What do you think happens?', o: ['Children start to like vegetables', 'Nothing grows', 'The school closes the garden'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'Pupils grow their own lunch',
        t: 'Pupils at Oakfield School in Leeds have been [1] their own vegetables for a year now, and the results have [2] everyone. The idea came from Mr Ahmed, a science teacher who wanted his classes to spend [3] time outdoors. "Some children didn\'t even know [4] potatoes grow under the ground," he says. The pupils take it in [5] to water the plants, and they keep a diary of how everything grows. Last month they sold their tomatoes at the school fair and [6] over £300, which will be spent on fruit trees. "I used to hate vegetables," admits 12-year-old Zoe, "but now I eat them because I know how much [7] goes into growing them." Other schools in the area are now hoping to [8] the same.',
        gaps: [
          { o: ['growing', 'making', 'building'], a: 0, why: 'grow vegetables = plant them and look after them.' },
          { o: ['surprised', 'wondered', 'astonishing'], a: 0, why: 'have + past participle; surprise someone.' },
          { o: ['more', 'most', 'many'], a: 0, why: 'spend more time (time is uncountable, so not many).' },
          { o: ['that', 'what', 'which'], a: 0, why: 'know that + a clause.' },
          { o: ['turns', 'orders', 'goes'], a: 0, why: 'take it in turns (to do something) = do it one after another.' },
          { o: ['raised', 'won', 'grew'], a: 0, why: 'raise money = collect it for a good cause.' },
          { o: ['work', 'job', 'task'], a: 0, why: 'how much work (uncountable). job and task are countable.' },
          { o: ['do', 'make', 'have'], a: 0, why: 'do the same = act in the same way.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'My friend talked me ___ joining the drama club.', o: ['into', 'about', 'for'], a: 0, why: 'talk someone into doing something = persuade them.' },
      { k: 'mc', q: 'I\'d rather ___ at home tonight.', o: ['stay', 'to stay', 'staying'], a: 0, why: 'would rather + the base form.' },
      { k: 'mc', q: 'Our class ___ over 500 shekels for the animal shelter.', o: ['raised', 'rose', 'grew'], a: 0, why: 'raise money. rise has no object.',
        he: 'raise (להעלות, לגייס) מקבל מושא: raise money. rise (לעלות) בלי מושא: Prices rose.' },
      { k: 'tf', q: '"I used to hate vegetables, but now I love them."', a: true, why: 'used to = it was true in the past, but not now.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Other schools hope to do the same.', why: 'hope to + verb; do the same.' }
  ]
},
{
  id: 'b2v03', url: 'https://test-english.com/vocabulary/b2/the-news-and-media-b2-english-vocabulary/', type: 'vocabulary',
  title: 'In the news', dinner: 'What news story did you hear about this week, and where did it come from?',
  hook: { q: 'A 2018 study looked at millions of posts on Twitter. How did false stories spread, compared with true ones?', o: ['More slowly', 'At the same speed', 'Faster'], a: 2,
    reveal: '*Faster*! Researchers at MIT found that true stories took about six times longer than false ones to reach 1,500 people. That is why you should always check the *source*.' },
  learn: { kind: 'words', title: 'Words about the news', words: [
    { w: 'a headline', d: 'the title of a news story, in large letters', ex: 'The *headline* said "Local Girl Wins Chess Cup".' },
    { w: 'a source', d: 'the person, place or website that information comes from', ex: 'Always check the *source* before you share a story.' },
    { w: 'reliable', d: 'that you can trust', ex: 'Is this website a *reliable* source of news?' },
    { w: 'biased', d: 'showing only one side, in an unfair way', ex: 'The report was *biased*: it only gave one team\'s opinion.' },
    { w: 'go viral', d: 'spread very fast online', ex: 'Her video of a dancing parrot *went viral*.' },
    { w: 'clickbait', d: 'a title that tricks you into clicking', ex: '"You won\'t believe what happened next!" is typical *clickbait*.' },
    { w: 'coverage', d: 'the way the news reports an event', ex: 'The final had live *coverage* on every channel.' },
    { w: 'a journalist', d: 'a person who writes or reports the news', ex: 'The *journalist* interviewed the players after the match.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'That you can trust:', o: ['reliable', 'biased', 'viral'], a: 0, why: 'reliable = you can trust it.' },
      { k: 'mc', q: 'Spread very fast online:', o: ['go viral', 'check a source', 'write a headline'], a: 0, why: 'go viral = spread very fast online.' },
      { k: 'mc', q: 'Showing only one side, in an unfair way:', o: ['biased', 'reliable', 'live'], a: 0, why: 'biased = unfair, only one side.' },
      { k: 'mc', q: 'A title that tricks you into clicking:', o: ['clickbait', 'coverage', 'a journalist'], a: 0, why: 'clickbait = a title made only to get clicks.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Can you trust it more or less?', g: ['trust it more', 'trust it less'],
        w: [['a reliable source', 0], ['checked facts', 0], ['fair coverage', 0], ['clickbait', 1], ['a biased report', 1], ['fake news', 1]],
        why: 'more: a reliable source, checked facts, fair coverage · less: clickbait, a biased report, fake news' },
      { k: 'hear', say: 'The clip of the singing dog went viral overnight.', q: 'What happened to the clip?', o: ['Huge numbers of people saw it very quickly.', 'It was deleted overnight.', 'Nobody watched it.'], a: 0,
        why: 'go viral = spread very fast online.' },
      { k: 'spell', w: 'headline', clue: 'The title of a news story, in large letters.', why: 'headline: head + line.' },
      { k: 'mc', q: 'The ___ of the final was excellent: photos, interviews and every goal.', o: ['coverage', 'headline', 'source'], a: 0, why: 'coverage = the way the news reports an event.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Free pizza?',
        t: 'Noa is a young [1] for her school newspaper. Last week a story about free pizza at lunch went [2]: everyone shared it. But Noa checked the [3] and found that it was a joke account. Her article had a great [4]: "Sorry, No Free Pizza!"',
        gaps: [
          { o: ['journalist', 'headline', 'coverage'], a: 0, why: 'a person who writes for a newspaper → a journalist.' },
          { o: ['viral', 'biased', 'reliable'], a: 0, why: 'everyone shared it → it went viral.' },
          { o: ['source', 'coverage', 'clickbait'], a: 0, why: 'where the story came from → the source.' },
          { o: ['headline', 'journalist', 'source'], a: 0, why: 'the title of her article → a headline.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'The news *are* really good today: we won the cup!', fix: 'is', why: 'news is uncountable and takes a singular verb: the news is.',
      he: 'news נראה כמו רבים (כמו "חדשות"), אבל באנגלית הוא ביחיד: The news is. ידיעה אחת היא a piece of news.' },
    { k: 'type', q: 'Her funny video went ___ and got two million views in one day.', a: ['viral'], why: 'go viral = spread very fast online.' }
  ]
},
{
  id: 'b2v04', url: 'https://test-english.com/vocabulary/b2/war-and-peace-b2-english-vocabulary/', type: 'vocabulary',
  title: 'Making peace', dinner: 'What is the best way to make peace with someone after an argument?',
  hook: { q: 'Most Nobel Prizes are given in Stockholm. Where is the Nobel Peace Prize given?', o: ['In Stockholm too', 'In Oslo', 'In Geneva'], a: 1,
    reveal: '*Oslo*, in Norway! Alfred Nobel asked for the *peace* prize to be given by a Norwegian committee, so it has its own ceremony there.' },
  learn: { kind: 'words', title: 'Words about conflict and peace', words: [
    { w: 'a conflict', d: 'a serious disagreement or fight between groups', ex: 'The two clubs had a long *conflict* over the football pitch.' },
    { w: 'negotiate', d: 'talk in order to reach an agreement', ex: 'We *negotiated* with Mum for an extra hour of screen time.' },
    { w: 'a truce', d: 'an agreement to stop fighting for a time', ex: 'My brother and I called a *truce* for Grandma\'s birthday.' },
    { w: 'a treaty', d: 'an official written agreement between countries', ex: 'The two countries signed a *treaty* to protect the river.' },
    { w: 'an ally', d: 'a person or country that is on your side', ex: 'In the game, Ella was my *ally* against the other team.' },
    { w: 'surrender', d: 'stop fighting and accept that you have lost', ex: 'In the story, the pirates *surrendered* and gave back the gold.' },
    { w: 'resolve', d: 'find a solution to a problem or a disagreement', ex: 'The teacher helped us *resolve* the argument.' },
    { w: 'invade', d: 'enter a country or place by force', ex: 'The Romans *invaded* Britain almost 2,000 years ago.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'An agreement to stop fighting for a time:', o: ['a truce', 'an ally', 'a conflict'], a: 0, why: 'a truce = a break in the fighting.' },
      { k: 'mc', q: 'Talk in order to reach an agreement:', o: ['negotiate', 'invade', 'surrender'], a: 0, why: 'negotiate = talk until both sides agree.' },
      { k: 'mc', q: 'A person or country that is on your side:', o: ['an ally', 'an enemy', 'a treaty'], a: 0, why: 'an ally is on your side; an enemy is against you.' },
      { k: 'mc', q: 'Stop fighting and accept that you have lost:', o: ['surrender', 'resolve', 'negotiate'], a: 0, why: 'surrender = give up and accept defeat.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Towards peace or towards fighting?', g: ['towards peace', 'towards fighting'],
        w: [['negotiate', 0], ['sign a treaty', 0], ['call a truce', 0], ['resolve a conflict', 0], ['invade', 1], ['attack', 1], ['declare war', 1]],
        why: 'peace: negotiate, sign a treaty, call a truce, resolve a conflict · fighting: invade, attack, declare war' },
      { k: 'hear', say: 'After weeks of talks, the two sides finally reached an agreement.', q: 'What happened?', o: ['They agreed after long talks.', 'They stopped talking.', 'One side surrendered.'], a: 0,
        why: 'reach an agreement = finally agree.' },
      { k: 'spell', w: 'truce', clue: 'An agreement to stop fighting for a time.', why: 'truce: t-r-u-c-e.' },
      { k: 'mc', q: 'The Romans ___ Britain in AD 43.', o: ['invaded', 'surrendered', 'negotiated'], a: 0, why: 'invade = enter a country by force.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'The remote control war',
        t: 'Every evening, Gal and his sister Maya fought over the TV remote. The [1] got worse until Dad stepped in. "Let\'s [2]," he said. After a long talk, they reached an [3]: Gal chooses on even days, Maya on odd days. They even wrote it down like a real peace [4] and signed it.',
        gaps: [
          { o: ['conflict', 'ally', 'treaty'], a: 0, why: 'a fight that got worse → the conflict.' },
          { o: ['negotiate', 'invade', 'surrender'], a: 0, why: 'talk to reach an agreement → negotiate.' },
          { o: ['agreement', 'enemy', 'attack'], a: 0, why: 'reach an agreement.' },
          { o: ['treaty', 'conflict', 'ally'], a: 0, why: 'a written and signed agreement → a peace treaty.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'After a long argument, my best friend and I finally *did* peace.', fix: 'made', why: 'The collocation is make peace.',
      he: 'בעברית "עשינו שלום", אבל באנגלית אומרים make peace, לא do peace.' },
    { k: 'type', q: 'The two teams called a ___ and stopped arguing for the rest of the trip.', a: ['truce'], why: 'call a truce = agree to stop fighting for a time.' }
  ]
},
{
  id: 'b2v05', url: 'https://test-english.com/vocabulary/b2/tourism-b2-english-vocabulary/', type: 'vocabulary',
  title: 'Holiday words', dinner: 'Would you rather go on a package holiday or plan your own adventure? Why?',
  hook: { q: 'Which country gets the most international tourists in the world?', o: ['The USA', 'Spain', 'France'], a: 2,
    reveal: '*France*! It gets about 100 million international visitors a year, more than the number of people who live there.' },
  learn: { kind: 'words', title: 'Words for travellers', words: [
    { w: 'sightseeing', d: 'visiting famous places as a tourist', ex: 'We spent the morning *sightseeing* in Rome.' },
    { w: 'a package holiday', d: 'a holiday where the flights and the hotel are sold together', ex: 'A *package holiday* is easy: someone else plans everything.' },
    { w: 'an itinerary', d: 'a plan of a journey: where you go and when', ex: 'Dad printed our *itinerary* for the trip.' },
    { w: 'off the beaten track', d: 'far from the places most tourists go', ex: 'We found a quiet beach *off the beaten track*.' },
    { w: 'a tourist trap', d: 'a crowded place that is too expensive because of tourists', ex: 'That café is a *tourist trap*: €9 for a small ice cream!' },
    { w: 'accommodation', d: 'a place to stay', ex: 'Our *accommodation* was a small flat near the beach.' },
    { w: 'peak season', d: 'the busiest time of year for tourism', ex: 'Flights are expensive in *peak season*.' },
    { w: 'a guided tour', d: 'a visit where a guide shows you round', ex: 'We took a *guided tour* of the old city.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'The plan of a trip, with its places and dates:', o: ['an itinerary', 'accommodation', 'a tourist trap'], a: 0, why: 'itinerary = the plan of a trip.' },
      { k: 'mc', q: 'A place to stay:', o: ['accommodation', 'sightseeing', 'an itinerary'], a: 0, why: 'accommodation = a place to stay.' },
      { k: 'mc', q: 'Far from the places most tourists go:', o: ['off the beaten track', 'peak season', 'a tourist trap'], a: 0, why: 'off the beaten track = away from the usual tourist places.' },
      { k: 'mc', q: 'The busiest time of year for tourism:', o: ['peak season', 'a package holiday', 'a guided tour'], a: 0, why: 'peak season = the busiest time.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Crowded and touristy, or quiet and local?', g: ['crowded and touristy', 'quiet and local'],
        w: [['a tourist trap', 0], ['peak season', 0], ['a long queue at the museum', 0], ['off the beaten track', 1], ['a small village café', 1], ['low season', 1]],
        why: 'crowded: a tourist trap, peak season, a long queue · quiet: off the beaten track, a village café, low season' },
      { k: 'hear', say: 'We booked a package holiday, so the flights and the hotel were all included.', q: 'What was included?', o: ['the flights and the hotel', 'only the flights', 'only the hotel'], a: 0,
        why: 'a package holiday = flights and hotel sold together.' },
      { k: 'spell', w: 'itinerary', clue: 'A plan of a journey: where you go and when.', why: 'itinerary: i-t-i-n-e-r-a-r-y.' },
      { k: 'mc', q: 'Let\'s get away from the crowds and go somewhere off the ___ track.', o: ['beaten', 'busy', 'broken'], a: 0, why: 'The fixed phrase is off the beaten track.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Ten days in Greece',
        t: 'Last summer we didn\'t want a [1] holiday with everything planned for us. Instead, we made our own [2]: three islands in ten days. On the first island, we found cheap [3] above a bakery. We skipped the famous beach, a real tourist [4], and found a tiny one off the beaten track.',
        gaps: [
          { o: ['package', 'beaten', 'souvenir'], a: 0, why: 'everything planned for you → a package holiday.' },
          { o: ['itinerary', 'accommodation', 'sightseeing'], a: 0, why: 'a plan of the journey → an itinerary.' },
          { o: ['accommodation', 'itinerary', 'sightseeing'], a: 0, why: 'a place to stay → accommodation.' },
          { o: ['trap', 'season', 'tour'], a: 0, why: 'a crowded, expensive place → a tourist trap.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Finding cheap *accommodations* in peak season is really hard.', fix: 'accommodation', why: 'In British English accommodation is uncountable: no -s.',
      he: 'accommodation (מקום לינה) באנגלית הבריטית הוא שם עצם שאינו ספיר: בלי s ובלי a.' },
    { k: 'type', q: 'We went ___ in Paris and saw the Eiffel Tower and the Louvre.', a: ['sightseeing'], why: 'go sightseeing = visit famous places.' }
  ]
},
{
  id: 'b2l04', url: 'https://test-english.com/listening/b2/behind-the-scenes-with-an-actor-b2-english-listening-test/', type: 'listening',
  title: 'Behind the scenes', dinner: 'Would you like to act on a stage one day? Why or why not?',
  hook: { q: 'In the theatre, people don\'t say "good luck" before a show. What do they say instead?', o: ['"Break a leg!"', '"Fall down!"', '"Lose your voice!"'], a: 0,
    reveal: '*"Break a leg!"* Many actors believe that saying "good luck" brings bad luck, so they wish each other the opposite.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'rehearse', d: 'practise a play or a show before performing it' },
    { w: 'your lines', d: 'the words you say in a play' },
    { w: 'stage fright', d: 'fear before performing in front of people' }
  ], predict: { q: 'An actor talks about her work. What do you think she finds hardest?', o: ['The nerves before the show', 'Learning lines', 'Being famous'] } },
  show: { cast: 'A podcast called Backstage Pass. The host talks to Ella Brooks, who plays the lead in a musical.', names: { H: 'Host', E: 'Ella' }, voices: { H: 'am_eric', E: 'bf_isabella' },
    parts: [
      { lines: [
        ['H', 'Welcome to Backstage Pass. My guest is Ella Brooks, the star of a new musical. Ella, what does a normal day look like for you?'],
        ['E', 'It\'s not as glamorous as people think! On show days I sleep late, go to the gym, and get to the theatre about two hours before the curtain goes up. Hair, make-up and warming up my voice take ages.']
      ], items: [
        { k: 'mc', q: 'When does Ella get to the theatre?', o: ['about two hours before the show', 'just before the show', 'early in the morning'], a: 0,
          why: '"get to the theatre about two hours before the curtain goes up"' },
        { k: 'tf', q: 'Ella says her day is very glamorous.', a: false, fix: 'She says it\'s not as glamorous as people think.', why: '"It\'s not as glamorous as people think!"' }
      ] },
      { lines: [
        ['H', 'How do you learn all those lines?'],
        ['E', 'I record the other characters\' lines on my phone and leave gaps for mine. Then I practise while I\'m walking the dog. In rehearsals we also move around the stage as we speak, and that really helps the words stick.']
      ], items: [
        { k: 'mc', q: 'How does Ella learn her lines?', o: ['She records the other parts and says hers in the gaps.', 'She reads the script before bed.', 'Her mum tests her every day.'], a: 0,
          why: '"I record the other characters\' lines on my phone and leave gaps for mine."' },
        { k: 'mc', q: 'What helps the words stick in rehearsals?', o: ['moving around the stage while speaking', 'singing the lines', 'writing them down'], a: 0,
          why: '"we also move around the stage as we speak, and that really helps"' }
      ] },
      { lines: [
        ['H', 'Do you still get stage fright?'],
        ['E', 'Every single night! My hands shake and my mouth goes dry. But I\'ve learned that the nerves give me energy. Once I hear the first notes of the music, the fear just disappears.'],
        ['H', 'Has anything ever gone wrong on stage?'],
        ['E', 'Oh, yes. Once my microphone stopped working in the middle of a song. I just sang louder and kept going. The audience never knew.']
      ], items: [
        { k: 'mc', q: 'What does Ella say about her nerves?', o: ['They give her energy.', 'They make her forget her lines.', 'She doesn\'t have any.'], a: 0,
          why: '"I\'ve learned that the nerves give me energy."' },
        { k: 'mc', q: 'What did she do when her microphone stopped working?', o: ['She sang louder and kept going.', 'She stopped the show.', 'She left the stage.'], a: 0,
          why: '"I just sang louder and kept going."' },
        { k: 'tf', q: 'The audience noticed the problem with the microphone.', a: false, fix: 'The audience never knew.', why: '"The audience never knew."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 2, q: 'Once I hear the first notes of the music, the fear just ___.', a: ['disappears', 'goes away'], why: 'disappear = go away, stop being there.' },
      { k: 'mc', clip: 0, q: '"Before the curtain goes up" means…', o: ['before the show starts', 'after the show ends', 'during the break'], a: 0,
        why: 'In a theatre the curtain goes up when the show starts.' },
      { k: 'sort', q: 'Before the show or during the show?', g: ['before the show', 'during the show'],
        w: [['warming up her voice', 0], ['hair and make-up', 0], ['getting to the theatre', 0], ['singing on stage', 1], ['saying her lines on stage', 1], ['a microphone failing mid-song', 1]],
        why: 'before: warming up, hair and make-up, getting to the theatre · during: singing, saying her lines, the broken microphone' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Once I hear the music, the fear disappears.', why: 'Once + present simple = as soon as something happens.' }
  ]
},
{
  id: 'b2l05', url: 'https://test-english.com/listening/b2/socializing-and-parties-b2-english-listening-test/', type: 'listening',
  title: 'Party survival tips', dinner: 'What is a good question to ask someone you have just met?',
  hook: { q: 'Psychologists asked strangers to talk for a few minutes. What did they usually get wrong afterwards?', o: ['They thought the other person liked them less than they really did', 'They thought the other person was older', 'They forgot the other person\'s name'], a: 0,
    reveal: 'They *underestimated how much the other person liked them*. Scientists call it the "liking gap": people usually like us more than we think!' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'small talk', d: 'light, polite conversation about easy topics' },
    { w: 'break the ice', d: 'say or do something so that people feel relaxed' },
    { w: 'mingle', d: 'move around and talk to different people at a party' }
  ], predict: { q: 'Two teenagers talk about parties. What do you think the confident one advises?', o: ['Ask people questions', 'Tell lots of jokes', 'Stay near the people you know'] } },
  show: { cast: 'A radio show called Teen Talk. The host talks to Yael, who is shy, and Ben, who loves parties.', names: { H: 'Host', Y: 'Yael', B: 'Ben' }, voices: { H: 'af_nova', Y: 'af_sky', B: 'am_liam' },
    parts: [
      { lines: [
        ['H', 'Today on Teen Talk: parties. Yael, you told us you find them hard.'],
        ['Y', 'Really hard. Last month I went to my cousin\'s birthday party, and she was the only person I knew. I spent the whole evening next to the snacks, pretending to read messages on my phone.'],
        ['H', 'I think a lot of our listeners have done that!']
      ], items: [
        { k: 'mc', q: 'Why did Yael find the party hard?', o: ['She only knew one person there.', 'The music was too loud.', 'She arrived very late.'], a: 0,
          why: '"she was the only person I knew"' },
        { k: 'mc', q: 'What did she do for most of the evening?', o: ['She stood by the snacks and looked at her phone.', 'She danced with her cousin.', 'She helped in the kitchen.'], a: 0,
          why: '"I spent the whole evening next to the snacks, pretending to read messages on my phone."' }
      ] },
      { lines: [
        ['H', 'Ben, you\'re the opposite. What\'s your secret?'],
        ['B', 'Questions. Most people love talking about themselves. I don\'t ask "Do you like the music?", because then they just say yes or no. I ask "How do you know the birthday girl?" That always breaks the ice.'],
        ['H', 'So, open questions.'],
        ['B', 'Exactly. And I really listen to the answer, so I can ask another question.']
      ], items: [
        { k: 'mc', q: 'What is Ben\'s secret?', o: ['asking questions', 'telling jokes', 'bringing snacks'], a: 0, why: '"Questions. Most people love talking about themselves."' },
        { k: 'mc', q: 'Why doesn\'t Ben ask "Do you like the music?"', o: ['People can answer with just yes or no.', 'It is a rude question.', 'The music is usually bad.'], a: 0,
          why: '"because then they just say yes or no"' },
        { k: 'tf', q: 'Ben thinks most people enjoy talking about themselves.', a: true, why: '"Most people love talking about themselves."' }
      ] },
      { lines: [
        ['H', 'Yael, what about leaving a conversation? Is that hard too?'],
        ['Y', 'Terrible! I never know how to end one.'],
        ['B', 'Just be honest and friendly. Say "It was really nice talking to you, I\'m going to get a drink," and move on. Nobody minds.'],
        ['H', 'Great tip. So: mingle, ask open questions, and leave with a smile.']
      ], items: [
        { k: 'mc', q: 'What else does Yael find difficult?', o: ['ending a conversation', 'finding the party', 'choosing what to wear'], a: 0, why: '"I never know how to end one."' },
        { k: 'mc', q: 'What does Ben say about leaving a conversation?', o: ['Be honest and friendly, then move on.', 'Wait until the other person leaves.', 'Walk away without a word.'], a: 0,
          why: '"Just be honest and friendly… and move on. Nobody minds."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: '"How do you know the birthday girl?" That always breaks the ___.', a: ['ice'], why: 'break the ice = help people feel relaxed at the start.' },
      { k: 'mc', q: 'At a party, to "mingle" means to…', o: ['move around and talk to different people', 'stay with one friend all night', 'help with the food'], a: 0,
        why: 'mingle = move around and talk to different people.' },
      { k: 'hear', say: 'It was really nice talking to you. I\'m going to get a drink.', q: 'What is the speaker doing?', o: ['ending a conversation politely', 'starting a conversation', 'complaining about the party'], a: 0,
        why: 'This is a polite way to leave a conversation.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'How do you know the birthday girl?', why: 'An open question: the answer can\'t be just yes or no.' }
  ]
},
{
  id: 'b2l06', url: 'https://test-english.com/listening/b2/discussing-news-and-media-b2-english-listening-test/', type: 'listening',
  title: 'Where do you get your news?', dinner: 'Where do you get most of your news, and do you trust it?',
  hook: { q: 'Which famous fake photo appears online again after almost every big flood?', o: ['A shark swimming down a street', 'A cow on a roof', 'A boat in a tree'], a: 0,
    reveal: 'The *shark in the street*! The same edited photo has been shared after floods in many different countries.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a feed', d: 'the list of posts and stories you see on an app' },
    { w: 'fact-check', d: 'check whether information is true' },
    { w: 'fool someone', d: 'trick someone into believing something false' }
  ], predict: { q: 'Two students talk about the news on the school radio. What do you think they agree on?', o: ['Check before you share', 'Never read the news', 'Videos are always true'] } },
  show: { cast: 'The school radio club. Ms Grant, a teacher, talks to two students, Liam and Shira.', names: { T: 'Ms Grant', L: 'Liam', S: 'Shira' }, voices: { T: 'bf_emma', L: 'bm_lewis', S: 'af_heart' },
    parts: [
      { lines: [
        ['T', 'Welcome to the school radio club. Today\'s question: where do you get your news? Liam?'],
        ['L', 'Mostly from short videos. They\'re quick, and they come straight to my feed, so I don\'t have to look for them.'],
        ['S', 'I use a news app. I read the headlines in the morning on the bus, and if something looks important, I read the whole article.']
      ], items: [
        { k: 'mc', q: 'Where does Liam get most of his news?', o: ['from short videos', 'from a news app', 'from the TV'], a: 0, why: '"Mostly from short videos."' },
        { k: 'mc', q: 'When does Shira read the headlines?', o: ['in the morning on the bus', 'at lunchtime', 'before bed'], a: 0, why: '"I read the headlines in the morning on the bus"' }
      ] },
      { lines: [
        ['T', 'Liam, how do you know if a video is true?'],
        ['L', 'To be honest, I didn\'t think about it until last year. I shared a photo of a shark swimming down a flooded street. It looked so real! Then my cousin showed me that the same photo had been shared after floods in three different countries.'],
        ['S', 'That one fools everybody.']
      ], items: [
        { k: 'mc', q: 'What did Liam share?', o: ['a fake photo of a shark in a street', 'a video of his cousin', 'a news article about floods'], a: 0,
          why: '"I shared a photo of a shark swimming down a flooded street."' },
        { k: 'tf', q: 'The shark photo had been used before, after other floods.', a: true, why: '"the same photo had been shared after floods in three different countries"' }
      ] },
      { lines: [
        ['T', 'So what do you both do now?'],
        ['S', 'I check who posted it first. If it\'s not a reliable source, I look for the same story somewhere else.'],
        ['L', 'And I wait before I share anything. If a story makes me feel really angry or really amazed, that\'s a sign to slow down and fact-check.'],
        ['T', 'Excellent advice for all of us.']
      ], items: [
        { k: 'mc', q: 'What does Shira check first?', o: ['who posted the story first', 'how many likes it has', 'how long the story is'], a: 0, why: '"I check who posted it first."' },
        { k: 'mc', q: 'When does Liam slow down before sharing?', o: ['when a story makes him very angry or amazed', 'when a story is very long', 'when a story comes from a friend'], a: 0,
          why: '"If a story makes me feel really angry or really amazed, that\'s a sign to slow down"' },
        { k: 'tf', q: 'Shira trusts a story even if the source is not reliable.', a: false, fix: 'She looks for the same story somewhere else.', why: '"If it\'s not a reliable source, I look for the same story somewhere else."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 2, q: 'If it\'s not a ___ source, I look for the same story somewhere else.', a: ['reliable'], why: 'reliable = that you can trust.' },
      { k: 'hear', say: 'That one fools everybody.', q: 'What does Shira mean?', o: ['Lots of people believe that fake photo.', 'Everybody hates that photo.', 'Nobody has seen that photo.'], a: 0,
        why: 'fool someone = make them believe something false.' },
      { k: 'mc', q: 'Which advice do both students give?', o: ['Check before you share.', 'Share quickly, before your friends do.', 'Only trust photos, not words.'], a: 0,
        why: 'Shira checks the source, and Liam waits and fact-checks before sharing.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Check who posted it before you share it.', why: 'before + present simple: before you share it.' }
  ]
},
{
  id: 'b2l07', url: 'https://test-english.com/listening/b2/dark-tourism-b2-english-listening-test/', type: 'listening',
  title: 'Trips into sad history', dinner: 'Which place from history would you most like to visit, and why?',
  hook: { q: 'Pompeii was buried by a volcano almost 2,000 years ago. About how many people visit it every year now?', o: ['About 40,000', 'About 400,000', 'About 4 million'], a: 2,
    reveal: 'About *4 million*! Walking along its Roman streets is one of the most popular trips in Italy.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'dark tourism', d: 'visiting places connected with disasters or sad moments in history' },
    { w: 'respectful', d: 'showing that you care about other people and their feelings' },
    { w: 'a ghost tour', d: 'a walk at night with spooky stories about a place' }
  ], predict: { q: 'Why do you think people visit places where something sad happened?', o: ['To learn about history', 'To feel scared', 'Because they are cheap'] } },
  show: { cast: 'A travel podcast. The host talks to Dr Hannah Webb, a historian.', names: { H: 'Host', G: 'Dr Webb' }, voices: { H: 'am_adam', G: 'bf_alice' },
    parts: [
      { lines: [
        ['H', 'Today we\'re talking about dark tourism. Hannah, what is it exactly?'],
        ['G', 'It means visiting places connected with disasters or sad moments in history. One of the most famous is Pompeii, the Roman town that was buried under ash when a volcano erupted almost two thousand years ago. Millions of people visit it every year.']
      ], items: [
        { k: 'mc', q: 'What is dark tourism?', o: ['visiting places connected with disasters or sad history', 'travelling only at night', 'exploring dark caves'], a: 0,
          why: '"visiting places connected with disasters or sad moments in history"' },
        { k: 'mc', q: 'What happened to Pompeii?', o: ['It was buried under ash from a volcano.', 'It was destroyed by a flood.', 'It sank into the sea.'], a: 0,
          why: '"buried under ash when a volcano erupted"' }
      ] },
      { lines: [
        ['H', 'Why do people want to go to places like that?'],
        ['G', 'For most, it\'s about learning. Standing in a real Roman street teaches you more than any textbook. In Belfast, the Titanic museum lets you see how the ship was built and read the passengers\' stories. Visitors leave understanding how people really lived.']
      ], items: [
        { k: 'mc', q: 'According to Hannah, why do most people visit these places?', o: ['to learn about history', 'to feel scared', 'to take funny photos'], a: 0, why: '"For most, it\'s about learning."' },
        { k: 'tf', q: 'The Titanic museum is in Belfast.', a: true, why: '"In Belfast, the Titanic museum lets you see how the ship was built"' }
      ] },
      { lines: [
        ['H', 'Is there a wrong way to do it?'],
        ['G', 'Definitely. Some visitors take silly selfies or laugh at places where people suffered. My rule is simple: behave as if the families of those people are standing next to you. Be curious, but be respectful.'],
        ['H', 'And ghost tours?'],
        ['G', 'They\'re more about fun than history, and that\'s fine, as long as everyone knows the difference.']
      ], items: [
        { k: 'mc', q: 'What is Hannah\'s rule?', o: ['Behave as if those people\'s families are next to you.', 'Never take any photos.', 'Only visit with a guide.'], a: 0,
          why: '"behave as if the families of those people are standing next to you"' },
        { k: 'mc', q: 'What does she think about ghost tours?', o: ['They are fine if people know they are just for fun.', 'They should be banned.', 'They are the best way to learn history.'], a: 0,
          why: '"that\'s fine, as long as everyone knows the difference"' },
        { k: 'tf', q: 'Hannah thinks ghost tours teach a lot of history.', a: false, fix: 'She says they\'re more about fun than history.', why: '"They\'re more about fun than history"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 2, q: 'Be curious, but be ___.', a: ['respectful'], why: 'respectful = showing that you care about others\' feelings.' },
      { k: 'hear', say: 'Standing in a real Roman street teaches you more than any textbook.', q: 'What does she mean?', o: ['You learn more by visiting the real place.', 'Textbooks are always wrong.', 'Roman streets are dangerous.'], a: 0,
        why: 'Being in the real place teaches more than reading about it.' },
      { k: 'mc', clip: 0, q: 'A town "buried under ash" was…', o: ['completely covered by ash', 'burnt down by fire', 'washed away by water'], a: 0, why: 'buried = covered completely.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Be curious, but be respectful.', why: 'Two short instructions joined by but.' }
  ]
},
{
  id: 'b2l08', url: 'https://test-english.com/listening/b2/retirement-challenges-in-the-u-s-b2-english-listening-test/', type: 'listening',
  title: 'Grandpa retires', dinner: 'What would you like to do every day if you never had to work?',
  hook: { q: 'In the USA, at what age can people born in 1960 or later get their full state pension?', o: ['60', '67', '75'], a: 1,
    reveal: '*67*! But many Americans stop working earlier or later, and some of them find the change harder than they expected.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'retire', d: 'stop working, usually because of your age' },
    { w: 'a pension', d: 'money you get regularly after you retire' },
    { w: 'a routine', d: 'the usual order in which you do things every day' }
  ], predict: { q: 'A grandfather talks about retiring. What do you think was hardest for him?', o: ['Not having a routine', 'Having too much work', 'Learning to drive'] } },
  show: { cast: 'Tamar interviews her grandfather in the USA on a video call, for a school project.', names: { T: 'Tamar', G: 'Grandpa' }, voices: { T: 'af_bella', G: 'am_michael' },
    parts: [
      { lines: [
        ['T', 'Hi, Grandpa! Thanks for doing this for my school project. You retired last spring, right?'],
        ['G', 'That\'s right, after forty years as a bus driver. Everyone told me I\'d love it. Sleep late, play golf, no boss!'],
        ['T', 'And did you?'],
        ['G', 'For about a month. Then I felt lost. I didn\'t have a routine any more, and the days all felt the same.']
      ], items: [
        { k: 'mc', q: 'What was Grandpa\'s job?', o: ['a bus driver', 'a golf teacher', 'a doctor'], a: 0, why: '"after forty years as a bus driver"' },
        { k: 'mc', q: 'How did he feel after about a month?', o: ['lost, because he had no routine', 'happier than ever', 'too busy'], a: 0,
          why: '"Then I felt lost. I didn\'t have a routine any more"' }
      ] },
      { lines: [
        ['T', 'Was money a problem too?'],
        ['G', 'A bit. Here in the States, lots of retired people worry about it. My pension is smaller than my salary was, and health care is expensive, so Grandma and I had to plan carefully. We eat out less now, and we sold the second car.']
      ], items: [
        { k: 'mc', q: 'Why did Grandpa and Grandma have to plan carefully?', o: ['His pension is smaller than his salary was, and health care is expensive.', 'They bought a new house.', 'Grandma lost her job.'], a: 0,
          why: '"My pension is smaller than my salary was, and health care is expensive"' },
        { k: 'tf', q: 'They sold their second car.', a: true, why: '"we sold the second car"' }
      ] },
      { lines: [
        ['T', 'So what changed?'],
        ['G', 'I started volunteering. Twice a week I drive older people to their doctor\'s appointments. I also joined a walking club. Now I\'ve got a reason to get up in the morning.'],
        ['T', 'That\'s so nice! Any advice for people who are about to retire?'],
        ['G', 'Don\'t just plan your money. Plan your days, too. And keep learning. I\'m taking Spanish lessons online!']
      ], items: [
        { k: 'mc', q: 'What volunteer work does Grandpa do?', o: ['He drives older people to the doctor.', 'He teaches Spanish.', 'He helps at a school.'], a: 0,
          why: '"Twice a week I drive older people to their doctor\'s appointments."' },
        { k: 'mc', q: 'What is his main advice?', o: ['Plan your days, not only your money.', 'Retire as early as you can.', 'Move to another country.'], a: 0,
          why: '"Don\'t just plan your money. Plan your days, too."' },
        { k: 'tf', q: 'Grandpa has stopped learning new things.', a: false, fix: 'He is taking Spanish lessons online.', why: '"I\'m taking Spanish lessons online!"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'I didn\'t have a ___ any more, and the days all felt the same.', a: ['routine'], why: 'a routine = the usual order of your day.' },
      { k: 'mc', clip: 2, q: '"A reason to get up in the morning" means…', o: ['something that makes your days feel useful', 'an alarm clock', 'a job that starts early'], a: 0,
        why: 'It means having a purpose, something to look forward to.' },
      { k: 'hear', say: 'My pension is smaller than my salary was.', q: 'What does he mean?', o: ['He gets less money now than when he worked.', 'He earns more now.', 'He doesn\'t get a pension.'], a: 0,
        why: 'pension (now) < salary (before).' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Now I have a reason to get up.', why: 'a reason + to + verb.' }
  ]
},
{
  id: 'b2l09', url: 'https://test-english.com/listening/b2/the-truth-about-expired-food-b2-english-listening-test/', type: 'listening',
  title: 'Best before or use by?', dinner: 'What food do we throw away most often at home, and how could we waste less?',
  hook: { q: 'Honey was found in ancient Egyptian tombs, thousands of years old. Was it still safe to eat?', o: ['Yes', 'No, it was poisonous', 'It had turned into stone'], a: 0,
    reveal: '*Yes*! Honey has very little water and is very acidic, so bacteria can\'t grow in it. Not every food is that lucky.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'use by', d: 'a date on food: don\'t eat it after this day' },
    { w: 'best before', d: 'a date on food: it is best until this day, but often safe after it' },
    { w: 'mould', d: 'a soft green, grey or white growth on old food' }
  ], predict: { q: 'Is it always dangerous to eat food after the date on the packet?', o: ['Not always', 'Yes, always', 'Only for sweets'] } },
  show: { cast: 'A radio show called Kitchen Science. The host talks to Dr Leo Martins, a food scientist.', names: { H: 'Host', L: 'Dr Martins' }, voices: { H: 'af_sarah', L: 'bm_george' },
    parts: [
      { lines: [
        ['H', 'Welcome to Kitchen Science. Leo, my family throws away lots of food because of the dates on the packet. Are we doing it wrong?'],
        ['L', 'Probably! There are two main labels, and people mix them up. "Use by" is about safety. You shouldn\'t eat food after that date, especially fresh meat and fish. "Best before" is about quality. After that date, food may be a little less tasty, but it\'s usually safe.']
      ], items: [
        { k: 'mc', q: 'What is a "use by" date about?', o: ['safety', 'taste', 'price'], a: 0, why: '"\'Use by\' is about safety."' },
        { k: 'mc', q: 'What can happen after the "best before" date?', o: ['The food may be a little less tasty.', 'The food becomes dangerous at once.', 'The food must go back to the shop.'], a: 0,
          why: '"food may be a little less tasty, but it\'s usually safe"' }
      ] },
      { lines: [
        ['H', 'So what about pasta or crackers past their "best before" date?'],
        ['L', 'Use your senses. Look at the food, smell it, and taste a little. Dry food like rice, pasta or crackers can be fine for months after the date. But if something smells bad or has mould on it, throw it away.']
      ], items: [
        { k: 'tf', q: 'Dry food like pasta can be fine for months after its "best before" date.', a: true, why: '"Dry food like rice, pasta or crackers can be fine for months after the date."' },
        { k: 'mc', q: 'What should you do if food has mould on it?', o: ['Throw it away.', 'Cut off the mould and eat the rest.', 'Cook it for longer.'], a: 0,
          why: '"if something smells bad or has mould on it, throw it away"' }
      ] },
      { lines: [
        ['H', 'Why does this matter so much?'],
        ['L', 'Because about a third of all the food produced in the world is lost or wasted. That\'s terrible for the planet. Some supermarkets in the UK have even removed "best before" dates from fruit and vegetables, so customers can judge for themselves.'],
        ['H', 'So: check the label, then trust your nose.']
      ], items: [
        { k: 'mc', q: 'How much of the world\'s food is lost or wasted?', o: ['about a third', 'about half', 'about a tenth'], a: 0, why: '"about a third of all the food produced in the world is lost or wasted"' },
        { k: 'mc', q: 'Why have some UK supermarkets removed "best before" dates from fruit and vegetables?', o: ['so customers can decide for themselves', 'because labels are too expensive', 'because fruit never goes bad'], a: 0,
          why: '"so customers can judge for themselves"' },
        { k: 'tf', q: 'Leo thinks food waste is not a big problem.', a: false, fix: 'He says it\'s terrible for the planet.', why: '"That\'s terrible for the planet."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'You shouldn\'t eat meat after its "___ by" date.', a: ['use'], why: '"use by" is the safety date.' },
      { k: 'mc', q: 'Your chicken is two days past its "use by" date. What should you do?', o: ['Throw it away.', 'Eat it quickly.', 'Smell it and decide.'], a: 0,
        why: 'After the "use by" date, food is not safe, even if it smells fine.' },
      { k: 'sort', q: 'Which date does it usually have?', g: ['use by', 'best before'],
        w: [['fresh chicken', 0], ['fresh fish', 0], ['raw burgers', 0], ['dry pasta', 1], ['crackers', 1], ['rice', 1]],
        why: 'use by (safety): fresh chicken, fish, raw burgers · best before (quality): pasta, crackers, rice' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Check the label, then trust your nose.', why: 'Two instructions in order: check, then trust.' }
  ]
},
{
  id: 'b2r02', url: 'https://test-english.com/reading/b2/coolcationing-a-new-travel-trend-b2-english-reading-test/', type: 'reading',
  title: 'Holidays in the cool', dinner: 'For a summer holiday, would you choose somewhere hot or somewhere cool? Why?',
  hook: { q: 'In the north of Norway, what is the "midnight sun"?', o: ['The sun doesn\'t set for weeks in summer.', 'A full moon that looks like the sun.', 'A sunset at exactly midnight.'], a: 0,
    reveal: 'In the far north of Norway, *the sun doesn\'t set* from late May to late July. You can play football at midnight in daylight!' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A travel magazine looks at a new trend: summer holidays in cooler countries.',
    predict: { q: 'Why do you think more families now choose cool places for summer holidays?', o: ['Summers in the south are getting too hot.', 'Cold places are cheaper.', 'Beaches are closed in summer.'] } },
  story: { title: 'Holidays in the cool', chunks: [
    { text: 'For decades, a summer holiday meant one thing for many European families: sun, sea and as much heat as possible. But that is changing. In recent summers, heatwaves have pushed temperatures in parts of Spain, Italy and Greece above 40°C, and some famous sites have had to close in the afternoon. As a result, a growing number of travellers are choosing "coolcations": holidays in places where the summer is mild, such as Norway, Scotland or Iceland.',
      items: [
        { k: 'mc', q: 'What is a "coolcation"?', o: ['a holiday in a place where the summer is mild', 'a skiing holiday in winter', 'a holiday at home with the air conditioning on'], a: 0,
          why: '"holidays in places where the summer is mild"' },
        { k: 'tf', q: 'Some famous sites in southern Europe have closed in the afternoon because of the heat.', a: true, why: '"some famous sites have had to close in the afternoon"' },
        { k: 'find', q: 'Find a word that means "not too hot and not too cold".', a: 'mild', why: 'mild weather = pleasant, not extreme.' }
      ] },
    { text: 'Ido Levi, 15, from Haifa, spent two weeks in northern Norway with his family last July. "At first I was disappointed," he admits. "My friends were posting photos from the beach, and I was wearing a jacket. But then we went kayaking between the mountains, and I even saw a whale. And the sun never set! We played football at midnight." His mother, Dana, says the trip cost more than a week in Greece, but it was much less stressful. "Nobody was exhausted by three in the afternoon," she laughs.',
      items: [
        { k: 'mc', q: 'How did Ido feel at first?', o: ['disappointed', 'thrilled', 'scared'], a: 0, why: '"At first I was disappointed," he admits.' },
        { k: 'mc', q: 'What does Dana say about the trip?', o: ['It cost more, but it was less stressful.', 'It was cheaper than Greece.', 'It was too cold to enjoy.'], a: 0,
          why: '"the trip cost more than a week in Greece, but it was much less stressful"' },
        { k: 'find', q: 'Find a word that means "extremely tired".', a: 'exhausted', why: 'exhausted = extremely tired.' }
      ] },
    { text: 'Not everyone is happy about the trend, however. Some small towns in the north are not ready for large numbers of visitors, and local people worry about crowded roads and rising prices, the same problems that hot destinations already know well. Meanwhile, hotels in the south are adapting by offering cheaper deals in spring and autumn, when the weather is pleasant. Travel experts believe that, in the future, the busiest months for tourism in Europe may simply move.',
      items: [
        { k: 'mc', q: 'What do some local people in the north worry about?', o: ['crowded roads and rising prices', 'not having enough tourists', 'the cold weather'], a: 0,
          why: '"local people worry about crowded roads and rising prices"' },
        { k: 'mc', q: 'How are hotels in the south adapting?', o: ['by offering cheaper deals in spring and autumn', 'by closing all winter', 'by raising their summer prices'], a: 0,
          why: '"hotels in the south are adapting by offering cheaper deals in spring and autumn"' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the main idea of the article?', o: ['Hotter summers are changing where and when people travel.', 'Norway is the best place in the world for a holiday.', 'Families should stop going on holiday.'], a: 0,
        why: 'The article shows how heat is moving travellers north and may move the busy season.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'After the long kayak trip, I was completely *exhausting*.', fix: 'exhausted', why: '-ed adjectives describe how you feel; -ing adjectives describe what causes the feeling.',
      he: 'exhausted מתאר איך אני מרגיש (מותש). exhausting מתאר את הדבר שמתיש: an exhausting trip.' }
  ]
},
{
  id: 'b2r03', url: 'https://test-english.com/reading/b2/using-ai-to-talk-to-the-deceased-b2-english-reading-test/', type: 'reading',
  title: 'Talking to the past', dinner: 'Which family story would you like us to record, so we never forget it?',
  hook: { q: 'The oldest recording of a human voice that we can play today was made in which year?', o: ['1860', '1910', '1950'], a: 0,
    reveal: '*1860*! A Frenchman recorded someone singing a folk song as lines on paper. Nobody could play it back until 2008, when scientists turned the lines into sound.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A science magazine looks at a surprising use of artificial intelligence: chatbots that copy people who have died.',
    predict: { q: 'How do you think most people feel about this idea?', o: ['They have mixed feelings.', 'Everyone loves it.', 'Nobody has heard of it.'] } },
  story: { title: 'Talking to the past', chunks: [
    { text: 'Imagine sending a message to a grandparent who is no longer alive, and getting an answer in their own words. A few technology companies now offer exactly this. They collect old texts, emails, voice messages and videos, and use artificial intelligence to build a chatbot that writes, or even speaks, like the person who has died. Some people call these programs "griefbots", because grief is the deep sadness we feel when someone dies.',
      items: [
        { k: 'mc', q: 'What do these companies use to build the chatbot?', o: ['old messages, voice notes and videos', 'the person\'s school reports', 'photos of the person\'s home'], a: 0,
          why: '"They collect old texts, emails, voice messages and videos"' },
        { k: 'tf', q: 'These chatbots can only write, not speak.', a: false, fix: 'They can write, or even speak.', why: '"a chatbot that writes, or even speaks, like the person"' },
        { k: 'find', q: 'Find a word that means "the deep sadness we feel when someone dies".', a: 'grief', why: 'grief = deep sadness after a death.' }
      ] },
    { text: 'For some users, the experience is comforting. One woman told reporters that hearing her father\'s voice again helped her say the goodbye she never had the chance to say. Supporters say it is not so different from watching old family videos: it is simply a new way to remember someone and to feel close to them.',
      items: [
        { k: 'mc', q: 'How did a chatbot help one woman?', o: ['It helped her say goodbye to her father.', 'It helped her find a job.', 'It helped her forget her father.'], a: 0,
          why: '"helped her say the goodbye she never had the chance to say"' },
        { k: 'mc', q: 'What do supporters compare griefbots to?', o: ['watching old family videos', 'playing video games', 'writing a diary'], a: 0,
          why: '"it is not so different from watching old family videos"' }
      ] },
    { text: 'However, many psychologists are worried. Grief is painful, but it is also a natural process that helps us accept a loss and move on. A chatbot that is always available might make that harder. There is another problem: the AI can invent things that the real person would never have said. "It sounds like him, but it isn\'t him," one user explained. Experts suggest a simpler idea: record the stories of the people you love while they are still here to tell them.',
      items: [
        { k: 'mc', q: 'Why are psychologists worried?', o: ['A chatbot might make it harder to accept a loss.', 'Chatbots are too expensive.', 'Chatbots don\'t work on phones.'], a: 0,
          why: '"A chatbot that is always available might make that harder."' },
        { k: 'tf', q: 'The AI only repeats things that the real person actually said.', a: false, fix: 'It can invent things the person would never have said.',
          why: '"the AI can invent things that the real person would never have said"' },
        { k: 'find', q: 'Find a word that means "make up something that is not true".', a: 'invent', why: 'invent = create something new, here something untrue.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the writer\'s main point?', o: ['Griefbots can comfort people, but they also raise serious questions.', 'Everyone should use a griefbot.', 'Griefbots are a joke that nobody uses.'], a: 0,
        why: 'The article shows both the comfort and the worries.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'The AI can invent things that the real person would never have ___.', a: ['said'], why: 'would have + past participle: would never have said.',
      he: 'אחרי would have בא תמיד V3: would have said, לא would have say.' }
  ]
},
{
  id: 'b2r04', url: 'https://test-english.com/reading/b2/regulating-deepfakes-b2-english-reading-test/', type: 'reading',
  title: 'Is that really you?', dinner: 'How could you check whether a video of a famous person is real?',
  hook: { q: 'Where does the word "deepfake" come from?', o: ['"deep learning" + "fake"', 'a film called Deep Fake', 'a deep-sea fish that changes colour'], a: 0,
    reveal: '"*Deep learning*" (a kind of artificial intelligence) + "*fake*". The word first appeared online in 2017.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A news article explains what deepfakes are and how countries are trying to control them.',
    predict: { q: 'What do you think is the biggest danger of deepfakes?', o: ['People can\'t tell what is real.', 'They use too much electricity.', 'They make films boring.'] } },
  story: { title: 'Is that really you?', chunks: [
    { text: 'A deepfake is a video, photo or recording that has been made or changed by artificial intelligence, so that someone seems to say or do something they never did. A few years ago, deepfakes were easy to spot: faces looked strange and voices sounded like robots. Today, a convincing deepfake can be made in minutes on an ordinary laptop, and even experts are sometimes fooled.',
      items: [
        { k: 'mc', q: 'What is a deepfake?', o: ['a video, photo or recording made or changed by AI', 'a very old film', 'a computer virus'], a: 0,
          why: '"a video, photo or recording that has been made or changed by artificial intelligence"' },
        { k: 'tf', q: 'Deepfakes are still easy to spot today.', a: false, fix: 'Today even experts are sometimes fooled.', why: '"even experts are sometimes fooled"' },
        { k: 'find', q: 'Find a word that means "so real that people believe it".', a: 'convincing', why: 'convincing = it makes you believe it.' }
      ] },
    { text: 'Some uses are harmless and even fun, like putting your face on a superhero in a short film. But deepfakes can also cause real harm. Criminals have copied people\'s voices to phone their relatives and ask for money. Students in several countries have found fake pictures of themselves shared online, which is a form of bullying. And a fake video of a famous person can travel around the world before anyone checks it.',
      items: [
        { k: 'mc', q: 'How have criminals used deepfakes?', o: ['to copy voices and ask relatives for money', 'to make superhero films', 'to repair old photos'], a: 0,
          why: '"Criminals have copied people\'s voices to phone their relatives and ask for money."' },
        { k: 'mc', q: 'Why is sharing fake pictures of a student so serious?', o: ['It is a form of bullying.', 'It breaks the student\'s phone.', 'It costs the school money.'], a: 0,
          why: '"which is a form of bullying"' }
      ] },
    { text: 'Governments are now trying to catch up. The European Union\'s AI Act says that deepfakes must be clearly labelled as made by AI. China has similar rules, and several US states have banned harmful deepfakes. Tech companies are also adding invisible "watermarks" to AI images. Still, laws move slowly and technology moves fast, so experts say our best protection is a healthy habit: stop, check the source, and ask whether it could be fake.',
      items: [
        { k: 'mc', q: 'What does the EU\'s AI Act say about deepfakes?', o: ['They must be clearly labelled as made by AI.', 'They are completely banned.', 'Only film companies can make them.'], a: 0,
          why: '"deepfakes must be clearly labelled as made by AI"' },
        { k: 'tf', q: 'Experts think laws alone will solve the problem.', a: false, fix: 'Laws move slowly, so our best protection is a healthy habit.',
          why: '"laws move slowly and technology moves fast, so experts say our best protection is a healthy habit"' },
        { k: 'find', q: 'Find a word that means "marked with a note that says what something is".', a: 'labelled', why: 'labelled = with a label on it.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the main idea of the article?', o: ['Deepfakes can be fun but also harmful, so we need both laws and good habits.', 'Deepfakes are only a problem for film stars.', 'New laws have already stopped all deepfakes.'], a: 0,
        why: 'The article shows fun uses, real harm, new laws and the habit of checking.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'Deepfakes must ___ clearly labelled as made by AI.', a: ['be'], why: 'Modal passive: must + be + past participle.',
      he: 'אחרי must בא הפועל בלי to: must be labelled, לא must to be.' }
  ]
}
];
