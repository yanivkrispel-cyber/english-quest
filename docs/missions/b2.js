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
}
];
