// English Quest missions, level B1+ (specs/missions.md). Original content on the topics of test-english.com's map:
// the topic list is theirs, every text, recording and question here is our own. Check: node test/missions-check.js
window.EQ_MISSIONS = window.EQ_MISSIONS || {};
window.EQ_MISSIONS.bp = [
{
  id: 'bpg01', url: 'https://test-english.com/grammar-points/b1-b2/questions-different-types/', type: 'grammar',
  title: 'Questions of all kinds', dinner: 'What question would you like to ask a famous person?',
  hook: { q: 'Which question word does NOT start with "wh"?', o: ['How', 'Which', 'Whose'], a: 0,
    reveal: '*How*! All the other question words start with wh: who, what, where, when, why, which and whose.' },
  learn: { kind: 'rule', title: 'Different kinds of questions',
    lines: ['*Yes/no* questions start with a helper: *Have you* finished? *Could* she come?',
      '*Subject* questions have no helper: *Who told* you? *What happened*?',
      '*Negative* questions show surprise or ask you to agree: *Don\'t you* like it? *Isn\'t* it amazing?',
      'With like: What *is* she *like*? (her personality) · What *does* she *look like*? (her appearance)'],
    ex: ['*Who broke* the vase?', '*Didn\'t you* see the sign?'],
    he: 'שאלת נושא (מי עשה?) באה בלי do או did: Who broke it? שאלה שלילית כמו Don\'t you...? מביעה הפתעה או מבקשת הסכמה. What is she like? = איך היא כבן אדם. What does she look like? = איך היא נראית.' },
  steps: [
    { name: 'Which question?', items: [
      { k: 'mc', q: '"___ happened at the party?" "Nothing much."', o: ['What', 'What did', 'What was'], a: 0, why: 'What is the subject → What happened? (no did)' },
      { k: 'mc', q: '"___ you hear the news? Everyone is talking about it!"', o: ['Didn\'t', 'Don\'t', 'Weren\'t'], a: 0, why: 'A negative question shows surprise: Didn\'t you hear…?' },
      { k: 'mc', q: '"What\'s your new teacher ___?" "Strict, but funny."', o: ['like', 'look like', 'likes'], a: 0, why: 'What is she like? asks about personality.' },
      { k: 'mc', q: '"How ___ does it take to get there?" "About an hour."', o: ['long', 'much', 'far'], a: 0, why: 'How long asks about time.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: '"___ did you go with?" "With my cousin."', a: ['who', 'whom'], why: 'You went with someone: who is the object, so we use did, and with goes to the end.' },
      { k: 'tf', q: '"Who did tell you about the party?"', a: false, fix: 'Who told you about the party?', why: 'Who is the subject → no did: Who told you?' },
      { k: 'mc', q: '"___ of these jackets is yours?" "The blue one."', o: ['Which', 'What', 'Whose'], a: 0, why: 'Which, when we choose from a small group.' },
      { k: 'type', q: '"___ phone is this?" "It\'s Dan\'s."', a: ['whose'], why: 'Whose asks who something belongs to.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'How often do you go to the gym?', why: 'How often + do + you + go.' },
      { k: 'spot', s: 'Who *does* knows the answer?', fix: '', why: 'Who is the subject: Who knows the answer? (no does)' },
      { k: 'build', s: 'Aren\'t you excited about the trip?', why: 'A negative question shows surprise or asks you to agree.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'What does your sister *like*? She\'s tall with dark hair.', fix: 'look like', why: 'About appearance: What does she look like?' },
    { k: 'type', q: '"___ much did your new phone cost?" "Too much!"', a: ['how'], why: 'How much asks about a price.' },
    { k: 'mc', q: 'Which question asks the other person to agree?', o: ['Isn\'t this song amazing?', 'Is this song amazing?', 'What is this song?'], a: 0,
      why: 'A negative question often asks you to agree.' }
  ]
},
{
  id: 'bpg02', url: 'https://test-english.com/grammar-points/b1-b2/indirect-questions/', type: 'grammar',
  title: 'Polite questions', dinner: 'Do you know what we are having for dinner tomorrow?',
  hook: { q: 'Which is the most visited museum in the world?', o: ['The Louvre in Paris', 'The British Museum', 'The Met in New York'], a: 0,
    reveal: '*The Louvre*, with about 9 million visitors a year. If you go there, you might ask: *Could you tell me where the Mona Lisa is?*' },
  learn: { kind: 'rule', title: 'Indirect questions',
    lines: ['Start politely: *Could you tell me…? Do you know…? I wonder…* Then the question becomes a normal sentence: *where the station is* (not where is the station).',
      'No do, does or did inside: Do you know *what time the film starts*? (not what time does the film start)',
      'A yes/no question takes *if* or *whether*: Can you tell me *if* the shop is open?'],
    ex: ['Could you tell me *where the toilets are*?', 'Do you know *if she is coming*?'],
    he: 'בשאלה עקיפה (Could you tell me..., Do you know...) החלק השני הוא כמו משפט רגיל: where the station is, בלי היפוך ובלי do או did. לשאלת כן או לא מוסיפים if.' },
  steps: [
    { name: 'Polite order', items: [
      { k: 'mc', q: 'Could you tell me where ___?', o: ['the bank is', 'is the bank', 'does the bank'], a: 0, why: 'After Could you tell me, normal order: the bank is.' },
      { k: 'mc', q: 'Do you know what time ___?', o: ['the train leaves', 'does the train leave', 'leaves the train'], a: 0, why: 'No does inside: what time the train leaves.' },
      { k: 'mc', q: 'I wonder ___ it will rain tomorrow.', o: ['if', 'that', 'what'], a: 0, why: 'A yes/no question → if (or whether).' },
      { k: 'mc', q: 'Can you tell me how much ___?', o: ['this costs', 'does this cost', 'costs this'], a: 0, why: 'Normal order, no does: how much this costs.' }
    ] },
    { name: 'Complete', items: [
      { k: 'tf', q: '"Do you know where is my phone?"', a: false, fix: 'Do you know where my phone is?', why: 'Inside an indirect question, the verb comes after the subject.',
        he: 'בשאלה עקיפה הפועל בא אחרי הנושא: where my phone is.' },
      { k: 'type', q: 'Could you tell me ___ this bus goes to the airport?', hint: '(if / that)', a: ['if', 'whether'], why: 'A yes/no question → if or whether.' },
      { k: 'mc', q: 'Excuse me, do you know ___ the museum opens?', o: ['when', 'when does', 'when do'], a: 0, why: 'when + subject + verb, no does.' },
      { k: 'tf', q: '"I\'d like to know why you are late."', a: true, why: 'Normal order after I\'d like to know: why you are late.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Could you tell me where the station is?', why: 'where + the station + is.' },
      { k: 'spot', s: 'Do you know *that* the shop is open today?', fix: 'if', why: 'A yes/no question inside → if, not that.' },
      { k: 'build', s: 'Do you know what time it is?', why: 'what time + it + is.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I wonder *what* she is coming to the party.', fix: 'if', why: 'A yes/no question inside → if: I wonder if she is coming.' },
    { k: 'type', q: 'Do you know how old ___?', hint: '(your teacher / is)', a: ['your teacher is'], why: 'Normal order: how old your teacher is.' },
    { k: 'mc', q: 'Which question is best for a stranger?', o: ['Excuse me, could you tell me where the toilets are?', 'Where are the toilets?', 'Toilets?'], a: 0,
      why: 'Could you tell me…? is polite, and the order is normal: where the toilets are.' }
  ]
},
{
  id: 'bpg03', url: 'https://test-english.com/grammar-points/b1-b2/auxiliary-verbs-different-uses/', type: 'grammar',
  title: 'Small words, big jobs', dinner: 'You like pizza, don\'t you?',
  hook: { q: 'Which is the most common verb in English?', o: ['be', 'have', 'do'], a: 0,
    reveal: '*Be*! The next ones are have and do, the helper verbs of this mission. They do a lot of work in English.' },
  learn: { kind: 'rule', title: 'Helper verbs at work',
    lines: ['*Short answers*: "Do you like it?" "Yes, I *do*." "Can she swim?" "No, she *can\'t*."',
      '*So / Neither* to agree: "I love pizza." "*So do I*." "I can\'t swim." "*Neither can I*."',
      '*Question tags* check something: It\'s cold, *isn\'t it*? You don\'t eat meat, *do you*?',
      '*Emphasis*: I *do* like it! (= I really like it)'],
    ex: ['"I\'ve never been to Paris." "*Neither have I*."', 'She didn\'t come, *did she*?'],
    he: 'פועלי עזר עונים במקום כל המשפט: Yes, I do. כדי להסכים: So do I (גם אני), Neither can I (גם אני לא). Question tag בסוף משפט שואל "נכון?": isn\'t it? do you?' },
  steps: [
    { name: 'Short answers', items: [
      { k: 'mc', q: '"Have you finished?" "Yes, I ___."', o: ['have', 'do', 'am'], a: 0, why: 'Have you…? → Yes, I have.' },
      { k: 'mc', q: '"I love chocolate." "So ___ I!"', o: ['do', 'am', 'love'], a: 0, why: 'I love (present simple) → So do I.' },
      { k: 'mc', q: '"I can\'t whistle." "Neither ___ I."', o: ['can', 'can\'t', 'do'], a: 0, why: 'Neither + a positive helper: Neither can I.' },
      { k: 'mc', q: 'You\'re coming tomorrow, ___?', o: ['aren\'t you', 'are you', 'don\'t you'], a: 0, why: 'A positive sentence → a negative tag: aren\'t you?' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: '"I went to the beach yesterday." "So ___ I!"', a: ['did'], why: 'went (past) → So did I.' },
      { k: 'tf', q: '"She doesn\'t eat meat, does she?"', a: true, why: 'A negative sentence → a positive tag: does she?' },
      { k: 'mc', q: '"I\'m not tired." "___ am I."', o: ['Neither', 'So', 'Either'], a: 0, why: 'To agree with a negative → Neither am I.' },
      { k: 'type', q: 'It was a great film, ___ it?', a: ['wasn\'t', 'was not'], why: 'It was → wasn\'t it?' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'I didn\'t like the film, but my sister did.', why: 'did = liked the film. We don\'t repeat the whole idea.' },
      { k: 'spot', s: 'You have a dog, *haven\'t* you?', fix: 'don\'t', why: 'In modern English, have (= own) takes do in the tag: You have a dog, don\'t you?' },
      { k: 'build', s: 'I do like your new haircut!', why: 'do + verb = emphasis: I really like it.' }
    ] }
  ],
  use: [
    { k: 'teach', s: '"I\'ve seen that film." "So *did* I!"', fix: 'have', why: 'I\'ve seen (present perfect) → So have I.' },
    { k: 'type', q: '"Can you speak French?" "No, I ___."', a: ['can\'t', 'cannot'], why: 'Can you…? → No, I can\'t.' },
    { k: 'mc', q: 'Your friend says: "I don\'t like horror films." You agree. You say:', o: ['Neither do I.', 'So do I.', 'I don\'t too.'], a: 0,
      why: 'To agree with a negative → Neither do I.' }
  ]
},
{
  id: 'bpv01', url: 'https://test-english.com/vocabulary/b1-b2/the-weather-and-natural-disasters-b1-b2-english-vocabulary/', type: 'vocabulary',
  title: 'Extreme weather', dinner: 'What is the most extreme weather you have ever seen?',
  hook: { q: 'What is the hottest temperature ever officially measured on Earth?', o: ['About 47 °C', 'About 57 °C', 'About 67 °C'], a: 1,
    reveal: 'About *57 °C*, in Death Valley, USA, in 1913. Today\'s words are about extreme weather and natural disasters.' },
  learn: { kind: 'words', title: 'When nature is dangerous', words: [
    { w: 'drought', d: 'a long time with no rain', ex: 'The *drought* killed the crops.' },
    { w: 'flood', d: 'a lot of water covering land that is usually dry', ex: 'After the storm there was a *flood* in the town.' },
    { w: 'earthquake', d: 'when the ground shakes', ex: 'The *earthquake* damaged many buildings.' },
    { w: 'heatwave', d: 'a period of very hot weather', ex: 'During the *heatwave* it was 40 °C.' },
    { w: 'wildfire', d: 'a fire that spreads fast in forests or fields', ex: 'A *wildfire* burned the hills.' },
    { w: 'hurricane', d: 'a storm with very strong winds', ex: 'The *hurricane* hit the coast.' },
    { w: 'evacuate', d: 'move people away from a dangerous place', ex: 'They *evacuated* the village.' },
    { w: 'shelter', d: 'a safe place to stay', ex: 'We stayed in a *shelter* until the storm passed.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'A long time with no rain:', o: ['drought', 'flood', 'heatwave'], a: 0, why: 'drought = no rain for a long time.' },
      { k: 'mc', q: 'When the ground shakes:', o: ['earthquake', 'hurricane', 'wildfire'], a: 0, why: 'earthquake = the ground shakes.' },
      { k: 'mc', q: 'A storm with very strong winds:', o: ['hurricane', 'drought', 'shelter'], a: 0, why: 'hurricane = a very strong storm.' },
      { k: 'mc', q: 'Move people away from danger:', o: ['evacuate', 'flood', 'shelter'], a: 0, why: 'evacuate = move people to safety.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'What kind of disaster is it?', g: ['water', 'heat', 'the ground'],
        w: [['flood', 0], ['tsunami', 0], ['heatwave', 1], ['drought', 1], ['wildfire', 1], ['earthquake', 2], ['landslide', 2]],
        why: 'water: flood, tsunami · heat: heatwave, drought, wildfire · the ground: earthquake, landslide' },
      { k: 'hear', say: 'They evacuated the village before the hurricane arrived.', q: 'What did they do?', o: ['They moved people to safety.', 'They built a wall.', 'They stayed at home.'], a: 0,
        why: 'evacuate = move people away from danger.' },
      { k: 'spell', w: 'flood', clue: 'Water covers the streets after heavy rain.', why: 'flood: f-l-o-o-d.' },
      { k: 'mc', q: 'There was heavy ___ all night.', o: ['rain', 'wind', 'sun'], a: 0, why: 'heavy rain. (But we say strong wind.)' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Evening news',
        t: 'After months of [1], with no rain at all, a [2] started in the hills. The police [3] two villages, and families spent the night in a school that became a [4].',
        gaps: [
          { o: ['drought', 'flood', 'hurricane'], a: 0, why: 'no rain for months → drought.' },
          { o: ['wildfire', 'flood', 'earthquake'], a: 0, why: 'a fire in the hills → wildfire.' },
          { o: ['evacuated', 'sheltered', 'flooded'], a: 0, why: 'moved people away → evacuated.' },
          { o: ['shelter', 'drought', 'storm'], a: 0, why: 'a safe place to stay → shelter.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Yesterday there was very *strong* rain in Tel Aviv.', fix: 'heavy', why: 'heavy rain, strong wind.', he: 'באנגלית אומרים heavy rain (גשם חזק) ו-strong wind (רוח חזקה).' },
    { k: 'type', q: 'The ground shook for ten seconds. It was an ___.', a: ['earthquake'], why: 'earthquake = the ground shakes.' }
  ]
},
{
  id: 'bpv02', url: 'https://test-english.com/vocabulary/b1-b2/health-problems-and-injuries-b1-b2-english-vocabulary/', type: 'vocabulary',
  title: 'When something hurts', dinner: 'Have you ever had an injury? What happened?',
  hook: { q: 'How many bones are there in an adult\'s body?', o: ['106', '206', '306'], a: 1,
    reveal: '*206*! Babies have even more, about 300, and some of them grow together. Today: words for when something hurts.' },
  learn: { kind: 'words', title: 'Injuries and health problems', words: [
    { w: 'sprain', d: 'hurt a joint, like your ankle, by twisting it', ex: 'I *sprained* my ankle playing football.' },
    { w: 'bruise', d: 'a blue or purple mark on the skin after a hit', ex: 'I have a big *bruise* on my leg.' },
    { w: 'a sore throat', d: 'pain in your throat', ex: 'I can\'t sing, I have *a sore throat*.' },
    { w: 'a fever', d: 'a body temperature higher than normal', ex: 'She has *a fever* of 39.' },
    { w: 'dizzy', d: 'feeling that everything is turning around you', ex: 'I felt *dizzy* after the ride.' },
    { w: 'a rash', d: 'red spots on the skin', ex: 'This cream gave me *a rash*.' },
    { w: 'stitches', d: 'threads a doctor uses to close a cut', ex: 'He needed three *stitches* in his chin.' },
    { w: 'a cast', d: 'a hard cover that keeps a broken bone still', ex: 'My arm was in *a cast* for six weeks.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'A blue or purple mark after a hit:', o: ['bruise', 'rash', 'cast'], a: 0, why: 'a bruise appears after a hit.' },
      { k: 'mc', q: 'Red spots on the skin:', o: ['a rash', 'a fever', 'stitches'], a: 0, why: 'a rash = red spots.' },
      { k: 'mc', q: 'A body temperature higher than normal:', o: ['a fever', 'a sprain', 'a bruise'], a: 0, why: 'a fever = a high temperature.' },
      { k: 'mc', q: 'It keeps a broken bone still:', o: ['a cast', 'a stitch', 'a rash'], a: 0, why: 'a cast is hard and keeps the bone still.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'An injury or an illness?', g: ['injury', 'illness'],
        w: [['a sprained ankle', 0], ['a bruise', 0], ['a cut', 0], ['a sore throat', 1], ['a fever', 1], ['a cough', 1]],
        why: 'injury: a sprain, a bruise, a cut · illness: a sore throat, a fever, a cough' },
      { k: 'hear', say: 'I fell off my bike, and now I have a big bruise on my knee.', q: 'What happened to his knee?', o: ['It has a bruise.', 'It is broken.', 'It has a rash.'], a: 0,
        why: 'a bruise on his knee.' },
      { k: 'spell', w: 'dizzy', clue: 'You feel that the room is turning around you.', why: 'dizzy: d-i-z-z-y.' },
      { k: 'mc', q: 'I twisted my ankle. I think I ___ it.', o: ['sprained', 'bruised', 'cut'], a: 0, why: 'twist a joint → sprain it.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'At the doctor\'s',
        t: 'Doctor, I feel terrible. I have a [1] throat, and my temperature is 39, so I have a [2]. When I stand up, I feel [3]. Do I need to stay in [4]?',
        gaps: [
          { o: ['sore', 'sick', 'hurt'], a: 0, why: 'a sore throat.' },
          { o: ['fever', 'rash', 'bruise'], a: 0, why: 'a temperature of 39 → a fever.' },
          { o: ['dizzy', 'hungry', 'happy'], a: 0, why: 'everything turns when she stands up → dizzy.' },
          { o: ['bed', 'the garden', 'the car'], a: 0, why: 'stay in bed when you are ill.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I have a *hurt* throat, so I can\'t talk much.', fix: 'sore', why: 'We say a sore throat.' },
    { k: 'type', q: 'The doctor closed the cut with five ___.', a: ['stitches'], why: 'stitches close a cut.' }
  ]
},
{
  id: 'bpl01', url: 'https://test-english.com/listening/b1-b2/ravi-the-uncatchable-smuggler-b1-listening-test/', type: 'listening',
  title: 'The Uncatchable', dinner: 'Would you rather be a famous detective or a famous inventor? Why?',
  hook: { q: 'The Mona Lisa was once stolen from the Louvre. When?', o: ['In 1911', 'In 1961', 'In 2001'], a: 0,
    reveal: 'In *1911*! A worker hid in the museum and walked out with the painting under his coat. It came back two years later.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a disguise', d: 'clothes that make you look like someone else' },
    { w: 'escape', d: 'get away from a place or from people' },
    { w: 'arrest', d: 'when the police take someone because of a crime' }
  ], predict: { q: 'The podcast is about a thief nobody could catch. How do you think the police caught him in the end?', o: ['Because of something he loved', 'With a camera', 'His friend told them'] } },
  show: { cast: 'A history podcast tells a story. (The people in it are made up.)', names: { A: 'Lucy', B: 'Mark' }, voices: { A: 'bf_alice', B: 'bm_george' },
    parts: [
      { lines: [
        ['A', 'Welcome to History\'s Mysteries. Today: the thief nobody could catch. Mark?'],
        ['B', 'In the 1960s, a man called Leo Marchand stole paintings from rich homes in Paris. He never broke a door or a window.'],
        ['A', 'So how did he get in?'],
        ['B', 'He used disguises. One day he was a plumber, the next day a window cleaner. People opened the door for him!']
      ], items: [
        { k: 'mc', q: 'What did Leo Marchand steal?', o: ['paintings', 'cars', 'jewellery'], a: 0, why: '"stole paintings from rich homes in Paris"' },
        { k: 'mc', q: 'How did he get into the houses?', o: ['People let him in.', 'He broke the windows.', 'He had keys.'], a: 0, why: '"He used disguises… People opened the door for him!"' }
      ] },
      { lines: [
        ['A', 'And the police?'],
        ['B', 'They tried for years. Twice they almost caught him. Once he escaped through a kitchen while the detectives were waiting at the front door.'],
        ['A', 'Very clever.'],
        ['B', 'The newspapers called him The Uncatchable. Some people even admired him, because he only stole from the very rich.']
      ], items: [
        { k: 'mc', q: 'How did he escape once?', o: ['through a kitchen', 'through a window', 'on a motorbike'], a: 0, why: '"he escaped through a kitchen while the detectives were waiting at the front door."' },
        { k: 'tf', q: 'Everyone hated Leo Marchand.', a: false, fix: 'Some people admired him.', why: '"Some people even admired him"' },
        { k: 'mc', q: 'Why did some people admire him?', o: ['He only stole from the very rich.', 'He gave money to poor people.', 'He was famous on TV.'], a: 0, why: '"because he only stole from the very rich"' }
      ] },
      { lines: [
        ['A', 'So how did it end?'],
        ['B', 'With a cat! Marchand loved cats, and he always fed the cats in the houses he visited. A detective noticed that in every house, the cat food was gone.'],
        ['A', 'No way!'],
        ['B', 'The police waited at a shop that sold expensive cat food, and they arrested him there in 1969.']
      ], items: [
        { k: 'mc', q: 'What did Marchand do in every house?', o: ['He fed the cats.', 'He left a note.', 'He took a photo.'], a: 0, why: '"he always fed the cats in the houses he visited."' },
        { k: 'mc', q: 'Where did the police arrest him?', o: ['at a shop that sold cat food', 'at his home', 'at a museum'], a: 0, why: '"at a shop that sold expensive cat food"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'He used ___: one day he was a plumber, the next day a window cleaner.', a: ['disguises', 'disguise'], why: 'a disguise makes you look like someone else.' },
      { k: 'mc', clip: 1, q: '"They almost caught him." This means…', o: ['They nearly caught him, but they didn\'t.', 'They caught him.', 'They didn\'t try.'], a: 0, why: 'almost = nearly, but not really.' },
      { k: 'hear', say: 'He escaped while the detectives were waiting at the front door.', q: 'Where were the detectives?', o: ['at the front door', 'in the kitchen', 'in their car'], a: 0,
        why: 'were waiting = past continuous: an action in progress when he escaped.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'The police arrested him in 1969.', why: 'arrest someone. In the past: arrested.' }
  ]
},
{
  id: 'bpl02', url: 'https://test-english.com/listening/b1-b2/will-humans-become-supermachines-b1-english-listening-test/', type: 'listening',
  title: 'Humans or machines?', dinner: 'Would you put a chip in your hand to open doors? Why or why not?',
  hook: { q: 'In Sweden, thousands of people have a tiny chip under the skin of their hand. What is it for?', o: ['Opening doors and paying', 'Speaking other languages', 'Seeing in the dark'], a: 0,
    reveal: '*Opening doors and paying*! The chip works like a key card under the skin. Is that the future, or a scary idea?' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'an implant', d: 'something doctors put inside your body' },
    { w: 'hack', d: 'get into a computer system without permission' },
    { w: 'a fair point', d: 'a good argument, even if you don\'t fully agree' }
  ], predict: { q: 'Two students talk about technology inside the body. Do you think they agree?', o: ['One likes it, one is worried', 'Both love it', 'Both hate it'] } },
  show: { cast: 'Jess and Omar get ready for a debate at school.', names: { J: 'Jess', O: 'Omar' }, voices: { J: 'af_nicole', O: 'am_liam' },
    parts: [
      { lines: [
        ['J', 'OK, our debate question is: Will humans become supermachines? I think yes, and I think it\'s a good thing.'],
        ['O', 'Really? Why?'],
        ['J', 'Look at what technology already does. There are robot suits that help people who can\'t walk. With them, they can stand up and walk again.'],
        ['O', 'OK, that\'s amazing, I agree.']
      ], items: [
        { k: 'mc', q: 'What is Jess\'s opinion?', o: ['It will happen, and it is good.', 'It will never happen.', 'It is dangerous.'], a: 0, why: '"I think yes, and I think it\'s a good thing."' },
        { k: 'mc', q: 'What do the robot suits do?', o: ['They help people walk.', 'They help people fly.', 'They help people see.'], a: 0, why: '"robot suits that help people who can\'t walk"' }
      ] },
      { lines: [
        ['O', 'But helping sick people is one thing. Making healthy people stronger or smarter is different.'],
        ['J', 'Why? People already wear glasses and use phones all day. A phone is almost part of your body!'],
        ['O', 'Yes, but a phone doesn\'t go inside your head. What if someone hacks a chip in your brain? That really scares me.']
      ], items: [
        { k: 'mc', q: 'What is Omar worried about?', o: ['Someone could hack a chip in your brain.', 'Phones are too expensive.', 'Glasses are ugly.'], a: 0,
          why: '"What if someone hacks a chip in your brain? That really scares me."' },
        { k: 'tf', q: 'For Omar, helping sick people and making healthy people stronger are the same.', a: false, fix: 'He thinks they are different.',
          why: '"helping sick people is one thing. Making healthy people stronger… is different."' },
        { k: 'mc', q: 'Why does Jess say a phone is almost part of your body?', o: ['People use them all day.', 'Phones are very small.', 'Phones can read your mind.'], a: 0,
          why: '"People already wear glasses and use phones all day."' }
      ] },
      { lines: [
        ['J', 'That\'s a fair point. So maybe the real question is who controls the technology.'],
        ['O', 'Exactly. I\'m not against it, I just think we need strong rules.'],
        ['J', 'OK. So in the debate, you take the careful side, and I\'ll take the exciting side!']
      ], items: [
        { k: 'mc', q: 'What does Omar want?', o: ['strong rules for the technology', 'to stop all technology', 'to buy a robot suit'], a: 0, why: '"I just think we need strong rules."' },
        { k: 'mc', q: 'How do they finish?', o: ['They choose sides for the debate.', 'They have an argument.', 'They stop the project.'], a: 0,
          why: '"you take the careful side, and I\'ll take the exciting side!"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'What if someone ___ a chip in your brain?', a: ['hacks'], why: 'hack = get into a computer system without permission.' },
      { k: 'mc', clip: 2, q: '"That\'s a fair point." Jess means…', o: ['You are right about that.', 'That is not fair.', 'I don\'t understand.'], a: 0, why: 'a fair point = a good argument.' },
      { k: 'sort', q: 'Agreeing or not agreeing (yet)?', g: ['agreeing', 'not agreeing'],
        w: [['I agree.', 0], ['That\'s a fair point.', 0], ['Exactly.', 0], ['Really? Why?', 1], ['I\'m not sure about that.', 1], ['Yes, but…', 1]],
        why: 'agreeing: I agree, a fair point, exactly · not agreeing (yet): Really? Why?, I\'m not sure, Yes, but…' }
    ] }
  ],
  use: [
    { k: 'build', s: 'I think we need strong rules.', why: 'I think + an opinion.' }
  ]
},
{
  id: 'bpl03', url: 'https://test-english.com/listening/b1-b2/i-should-have-b2-english-listening-test/', type: 'listening',
  title: 'I should have…', dinner: 'What is something you should have done this week?',
  hook: { q: 'A nurse who cared for old people wrote about their biggest regret. What was it?', o: ['Not living the life they really wanted', 'Not making more money', 'Not travelling more'], a: 0,
    reveal: '*Not living the life they really wanted*. The nurse, Bronnie Ware, wrote that many people said: I wish I had been braver.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'regret', d: 'feel sorry about something you did or didn\'t do' },
    { w: 'should have done', d: 'it was a good idea, but you didn\'t do it' },
    { w: 'apologise', d: 'say sorry' }
  ], predict: { q: 'Two listeners talk about things they regret. Which do you think is more serious?', o: ['A problem with a friend', 'A bad haircut', 'Both are the same'] } },
  show: { cast: 'A radio show called Small Regrets. Two listeners call in.', names: { H: 'Host', A: 'Ella', B: 'Josh' }, voices: { H: 'af_sky', A: 'bf_isabella', B: 'am_echo' },
    parts: [
      { lines: [
        ['H', 'Today on Small Regrets, our listeners share things they should or shouldn\'t have done. Ella, you\'re first.'],
        ['A', 'Last year I cut my own hair before a party. I watched one video and thought, how hard can it be? I shouldn\'t have done it. I wore a hat for a month!']
      ], items: [
        { k: 'mc', q: 'What did Ella do?', o: ['She cut her own hair.', 'She dyed her hair.', 'She went to a hairdresser.'], a: 0, why: '"I cut my own hair before a party."' },
        { k: 'mc', q: 'How does she feel about it now?', o: ['She regrets it.', 'She is proud of it.', 'She doesn\'t care.'], a: 0, why: '"I shouldn\'t have done it. I wore a hat for a month!"' }
      ] },
      { lines: [
        ['B', 'Mine is more serious. I had a fight with my best friend because of a stupid joke. I knew I was wrong, but I didn\'t apologise.'],
        ['B', 'Then he moved to another city. I should have said sorry when I had the chance. We talk now, but it\'s not the same.']
      ], items: [
        { k: 'mc', q: 'Why did Josh and his friend fight?', o: ['because of a joke', 'because of money', 'because of a game'], a: 0, why: '"because of a stupid joke"' },
        { k: 'mc', q: 'What should Josh have done?', o: ['He should have said sorry.', 'He should have moved too.', 'He should have told a joke.'], a: 0, why: '"I should have said sorry when I had the chance."' },
        { k: 'tf', q: 'Josh and his friend don\'t talk anymore.', a: false, fix: 'They talk now, but it\'s not the same.', why: '"We talk now, but it\'s not the same."' }
      ] },
      { lines: [
        ['H', 'Thank you both. So, what\'s the lesson?'],
        ['A', 'Watch more than one video!'],
        ['B', 'And if you are wrong, say sorry quickly. It\'s easier than you think.']
      ], items: [
        { k: 'mc', q: 'What is Josh\'s advice?', o: ['Say sorry quickly when you are wrong.', 'Never make jokes.', 'Don\'t move to another city.'], a: 0, why: '"if you are wrong, say sorry quickly."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'I should have ___ sorry when I had the chance.', a: ['said'], why: 'should have + past participle: said.' },
      { k: 'mc', q: 'Which sentence is right?', o: ['I should have studied more.', 'I should have study more.', 'I should studied more.'], a: 0, why: 'should have + past participle: studied.' },
      { k: 'hear', say: 'I shouldn\'t have done it.', q: 'What does she mean?', o: ['It was a mistake to do it.', 'She didn\'t do it.', 'She wants to do it again.'], a: 0,
        why: 'shouldn\'t have done = it was a bad idea, but she did it.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I should have *went* to bed earlier last night.', fix: 'gone', why: 'should have + past participle: gone.' },
    { k: 'type', q: 'I was late. I ___ have left home earlier.', a: ['should'], why: 'should have left = it was a good idea, but I didn\'t do it.' }
  ]
},
{
  id: 'bpr01', url: 'https://test-english.com/reading/b1-b2/why-we-sleep-b1-english-reading-test/', type: 'reading',
  title: 'Why we sleep', dinner: 'What time do you usually go to sleep, and what helps you fall asleep?',
  hook: { q: 'Which animal sleeps with only half of its brain at a time?', o: ['Dolphins', 'Cats', 'Horses'], a: 0,
    reveal: '*Dolphins*! One half of the brain rests while the other half stays awake, so they can keep swimming and breathing.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A science magazine for teenagers explains why we sleep, and why teens find it hard to go to bed early.',
    predict: { q: 'Why do you think teenagers often go to bed late?', o: ['Their body clock changes.', 'They are never tired.', 'They don\'t need sleep.'] } },
  story: { title: 'Why we sleep', chunks: [
    { text: 'For a long time, scientists thought sleep was simply a time when the body rests. Now we know it is much more than that. While you sleep, your brain is busy. It sorts the things you learned during the day and stores the important ones as long-term memories. That is why a good night\'s sleep before a test often works better than studying all night.',
      items: [
        { k: 'mc', q: 'What does the brain do while you sleep?', o: ['It sorts and stores what you learned.', 'It stops working completely.', 'It forgets the day.'], a: 0,
          why: '"It sorts the things you learned during the day and stores the important ones"' },
        { k: 'tf', q: 'Studying all night is better than sleeping before a test.', a: false, fix: 'A good night\'s sleep often works better.',
          why: '"a good night\'s sleep before a test often works better than studying all night."' }
      ] },
    { text: 'So why do so many teenagers stay up late? It is not only because of phones. During the teenage years, the body clock moves later. The brain starts to produce melatonin, the hormone that makes us sleepy, about two hours later than in children. So at ten o\'clock a 15-year-old may feel wide awake, even if they are tired the next morning.',
      items: [
        { k: 'mc', q: 'What is melatonin?', o: ['a hormone that makes us sleepy', 'a kind of light from phones', 'a vitamin in food'], a: 0, why: '"melatonin, the hormone that makes us sleepy"' },
        { k: 'mc', q: 'Why do teens feel awake late at night?', o: ['Their body clock moves later.', 'They drink too much water.', 'They sleep in the afternoon.'], a: 0,
          why: '"During the teenage years, the body clock moves later."' },
        { k: 'find', q: 'Find a word that means "make" (the brain makes it).', a: 'produce', why: 'produce = make.' }
      ] },
    { text: 'Screens make the problem worse. The blue light from phones tells the brain that it is still daytime. Experts suggest a simple routine: put your phone away an hour before bed, keep your room dark and cool, and try to wake up at the same time every day, even at weekends. Your memory, your mood and your sports results will thank you.',
      items: [
        { k: 'mc', q: 'Why are screens bad before bed?', o: ['Their blue light tells the brain it is daytime.', 'They are too loud.', 'They make the room hot.'], a: 0,
          why: '"The blue light from phones tells the brain that it is still daytime."' },
        { k: 'mc', q: 'Which is NOT one of the experts\' tips?', o: ['Sleep late at weekends.', 'Keep your room dark and cool.', 'Put your phone away an hour before bed.'], a: 0,
          why: 'They say: wake up at the same time every day, even at weekends.' },
        { k: 'find', q: 'Find a word that means "how you feel" (happy, sad, angry…).', a: 'mood', why: 'mood = how you feel.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the main message of the article?', o: ['Sleep matters, and good habits help teens sleep.', 'Teenagers are lazy.', 'Phones should be banned.'], a: 0,
        why: 'It explains why sleep is important and how teens can sleep better.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Put your phone away an hour before bed.', why: 'An instruction: put something away.' }
  ]
},
{
  id: 'bpu02', url: 'https://test-english.com/use-of-english/b1-b2/b1-test-2-multiple-choice-questions/', type: 'use-of-english',
  title: 'The wallet that came home', dinner: 'What would you do if you found a wallet in the street?',
  hook: { q: 'In a famous honesty experiment, researchers "lost" wallets in 40 countries. About how many?', o: ['About 170', 'About 1,700', 'About 17,000'], a: 2,
    reveal: 'About *17,000*! And the surprise: wallets with more money in them were returned *more* often, not less.' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A man gets his lost wallet back after many years. How long do you think it was lost?', o: ['Twenty years', 'Two weeks', 'One day'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'Twenty years later',
        t: 'In 2004, Daniel Ross lost his wallet on a train. Twenty years later, a parcel [1] at his door. Inside was the wallet, [2] still had his old student card in it. It [3] found behind a seat while workers were repairing the train. The engineer [4] found it, Lisa Grant, spent two weeks searching for Daniel online. "If she [5] so determined, I would never have got it back," Daniel said. Lisa, who has worked for the railway [6] 2010, refused any reward. "I thought about how I [7] feel if it were mine," she explained. "Besides, it\'s [8] to know that kindness still exists."',
        gaps: [
          { o: ['arrived', 'has arrived', 'was arriving'], a: 0, why: 'One finished event in the past → arrived.' },
          { o: ['which', 'who', 'what'], a: 0, why: 'which for things, after a comma.' },
          { o: ['had been', 'has been', 'was being'], a: 0, why: 'It was found before the parcel came → had been found.' },
          { o: ['who', 'which', 'whose'], a: 0, why: 'who for people.' },
          { o: ['hadn\'t been', 'wasn\'t', 'wouldn\'t be'], a: 0, why: 'About the past: If + had (not) + past participle, would have…' },
          { o: ['since', 'for', 'from'], a: 0, why: 'since + a point in time: since 2010.' },
          { o: ['would', 'will', 'had'], a: 0, why: 'An imagined situation: how I would feel if it were mine.' },
          { o: ['nice', 'nicely', 'nicer'], a: 0, why: 'After it\'s we need an adjective: it\'s nice to know.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'By the time we arrived, the concert ___.', o: ['had started', 'has started', 'starts'], a: 0, why: 'It started before we arrived → had started.' },
      { k: 'mc', q: 'If I ___ about the party, I would have come.', o: ['had known', 'knew', 'have known'], a: 0, why: 'About the past: If I had known…, I would have…' },
      { k: 'tf', q: '"My sister, who lives in Eilat, is a doctor."', a: true, why: 'Extra information between commas: who lives in Eilat.' },
      { k: 'type', q: 'I have known her ___ we were five.', a: ['since'], why: 'since + a point in time.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'The wallet had been lost for twenty years.', why: 'had been + past participle: the past perfect passive.' }
  ]
},
{
  id: 'bpg04', url: 'https://test-english.com/grammar-points/b1-b2/the-the-comparatives/', type: 'grammar',
  title: 'The more, the better', dinner: 'What is something that gets better the more you do it?',
  hook: { q: 'A famous book said you need a lot of practice to become an expert. How many hours?', o: ['100 hours', '1,000 hours', '10,000 hours'], a: 2,
    reveal: '*10,000 hours*! Scientists say it is not a magic number, but one thing is true: the more you practise, the better you get.' },
  learn: { kind: 'rule', title: 'The more…, the better…',
    lines: ['Two things change together: *the* + comparative…, *the* + comparative…: *The more* you practise, *the better* you get.',
      'Each half has its own subject and verb: *The faster you drive*, *the more dangerous it is*.',
      'With a noun: *The more homework* we get, *the less free time* we have.',
      'Short forms: *The sooner, the better.* *The bigger, the better.*'],
    ex: ['*The more* I read, *the more* I learn.', '"When should we start?" "*The sooner, the better*!"'],
    he: 'בעברית אומרים "ככל ש..., כך...". באנגלית שני החלקים מתחילים ב-the ואחריו צורת השוואה: The more you practise, the better you get. לא as more ולא so better.' },
  steps: [
    { name: 'Choose', items: [
      { k: 'mc', q: '___ you practise, the better you play.', o: ['The more', 'More', 'The most'], a: 0, why: 'Both halves start with the + a comparative: The more…, the better…' },
      { k: 'mc', q: 'The older my grandpa gets, ___ he becomes.', o: ['the funnier', 'funnier', 'the funniest'], a: 0, why: 'the + a comparative: the funnier (not the superlative).' },
      { k: 'mc', q: 'The hotter it is, ___ water you should drink.', o: ['the more', 'the most', 'more'], a: 0, why: 'the + comparative + noun: the more water.' },
      { k: 'mc', q: 'The less you sleep, the ___ you feel in the morning.', o: ['worse', 'worst', 'bad'], a: 0, why: 'bad → worse (comparative). We need a comparative after the.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'The ___ you leave, the earlier you will arrive.', hint: '(soon)', a: ['sooner'], why: 'soon → sooner.' },
      { k: 'tf', q: '"More you read, the more you learn."', a: false, fix: 'The more you read, the more you learn.', why: 'Both halves need the: The more…, the more…',
        he: 'גם החלק הראשון מתחיל ב-the: The more you read.' },
      { k: 'mc', q: '"When should we leave?" "The sooner, ___."', o: ['the better', 'better', 'the best'], a: 0, why: 'A short fixed phrase: the sooner, the better.' },
      { k: 'type', q: 'The ___ the question, the longer it takes to answer.', hint: '(difficult)', a: ['more difficult'], why: 'A long adjective → more difficult.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'The faster you run, the more tired you get.', why: 'The + comparative + subject + verb, the + comparative + subject + verb.' },
      { k: 'spot', s: 'The more you laugh, the *happiest* you feel.', fix: 'happier', why: 'We need a comparative, not a superlative: the happier.' },
      { k: 'build', s: 'The bigger the pizza, the better!', why: 'A short form: the + comparative + noun, the + comparative.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'The more I train, the *strong* I get.', fix: 'stronger', why: 'strong → stronger: the more I train, the stronger I get.' },
    { k: 'type', q: 'The more money you save, the ___ you can buy.', a: ['more'], why: 'The more…, the more…' },
    { k: 'mc', q: 'Which sentence is right?', o: ['The more we laugh, the better we feel.', 'More we laugh, more we feel better.', 'The most we laugh, the best we feel.'], a: 0,
      why: 'the + comparative in both halves: the more…, the better…' }
  ]
},
{
  id: 'bpg05', url: 'https://test-english.com/grammar-points/b1-b2/present-perfect-simple-continuous/', type: 'grammar',
  title: 'Have done or have been doing?', dinner: 'What have you been doing a lot lately?',
  hook: { q: 'A light bulb in a fire station in California has been shining almost non-stop since…', o: ['1901', '1951', '1991'], a: 0,
    reveal: '*1901*! It has been shining for more than 120 years, and it has become a famous tourist attraction.' },
  learn: { kind: 'rule', title: 'Present perfect: simple or continuous',
    lines: ['*Simple* (have done) for the result, or how many: *I\'ve written* three emails. *She\'s finished* her project.',
      '*Continuous* (have been doing) for the activity and how long: *I\'ve been writing* emails all morning.',
      'An activity that has just stopped, and you can see signs of it: You\'re out of breath. *Have you been running*?',
      'State verbs like *know, like, want, own* stay simple: *I\'ve known* him for years (not have been knowing).'],
    ex: ['*I\'ve been studying* for two hours, and *I\'ve learned* 30 words.', 'Your hands are dirty! *Have you been working* in the garden?'],
    he: 'בעברית אין הבדל, אבל באנגלית: have done = מה התוצאה או כמה (I\'ve read three chapters). have been doing = כמה זמן זה נמשך (I\'ve been reading for an hour). עם know, like, want נשארים ב-have done.' },
  steps: [
    { name: 'Choose', items: [
      { k: 'mc', q: 'I ___ this book for a week, and I\'m only on page 50.', o: ['have been reading', 'have read', 'read'], a: 0, why: 'How long, and it is not finished → have been reading.' },
      { k: 'mc', q: 'Noa ___ three goals this season.', o: ['has scored', 'has been scoring', 'scores'], a: 0, why: 'How many (three goals) → present perfect simple.' },
      { k: 'mc', q: 'We ___ each other since first grade.', o: ['have known', 'have been knowing', 'are knowing'], a: 0, why: 'know is a state verb, so it stays simple: have known.',
        he: 'know לא בא עם ing: I\'ve known her for years.' },
      { k: 'mc', q: '"Why are your clothes so muddy?" "I ___ in the garden with the dog."', o: ['have been playing', 'have been played', 'am playing'], a: 0,
        why: 'An activity that explains what we see now → have been playing.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: '"How long ___ you been waiting?" "About twenty minutes."', a: ['have'], why: 'How long have you been waiting? (have + been + -ing)' },
      { k: 'tf', q: '"I\'ve been drinking four glasses of water today."', a: false, fix: 'I\'ve drunk four glasses of water today.', why: 'How many (four glasses) → simple: I\'ve drunk.' },
      { k: 'mc', q: 'Oh no! Someone ___ all my crisps! The bag is empty.', o: ['has eaten', 'has been eating', 'have eaten'], a: 0, why: 'The result: the bag is empty → has eaten. Someone is singular → has.' },
      { k: 'type', q: 'Dan has ___ learning Spanish since September.', a: ['been'], why: 'has been + -ing: has been learning.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'She has been practising the piano for an hour.', why: 'has been + -ing + for + a period of time.' },
      { k: 'spot', s: 'I\'ve *read* this book for two hours, and I\'m still on chapter one.', fix: 'been reading', why: 'How long, and not finished → I\'ve been reading.' },
      { k: 'build', s: 'How many emails have you written today?', why: 'How many → simple: have you written.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I\'ve *written* my essay all evening, and it still isn\'t finished.', fix: 'been writing', why: 'All evening, not finished → I\'ve been writing.' },
    { k: 'type', q: 'Look, the street is wet. Has it ___ raining?', a: ['been'], why: 'Signs of an activity that has just stopped → has it been raining?' },
    { k: 'mc', q: 'Which sentence is right?', o: ['I\'ve visited Eilat three times.', 'I\'ve been visiting Eilat three times.', 'I\'ve been visit Eilat three times.'], a: 0,
      why: 'How many times → simple: I\'ve visited.' }
  ]
},
{
  id: 'bpg06', url: 'https://test-english.com/grammar-points/b1-b2/adjectives-without-noun/', type: 'grammar',
  title: 'The young and the old', dinner: 'What could our town do to help the elderly?',
  hook: { q: 'In which country are there more bikes than people?', o: ['The Netherlands', 'Denmark', 'Germany'], a: 0,
    reveal: '*The Netherlands*! There are about 23 million bikes for about 18 million people. The Dutch (no -s!) ride everywhere.' },
  learn: { kind: 'rule', title: 'the + adjective = a group of people',
    lines: ['*the* + adjective = all the people in a group: *the young* (young people), *the poor*, *the homeless*, *the injured*.',
      'It is plural, but it never takes -s: *The rich are* not always happy. (not the richs)',
      'For one person, add a noun: *a blind man*, *an old lady*, *a homeless person*.',
      'Nationalities that end in -sh, -ch, -ese or -ss work the same way: *the British*, *the French*, *the Japanese*, *the Swiss*. Others are nouns with -s: *the Italians*, *the Israelis*.'],
    ex: ['This app helps *the blind* read signs.', '*The Dutch* ride bikes everywhere.'],
    he: 'בעברית אומרים "העשירים", ובאנגלית the rich, בלי s בסוף, והפועל ברבים: The rich are. לאדם אחד מוסיפים שם עצם: a rich man, an old lady.' },
  steps: [
    { name: 'Choose', items: [
      { k: 'mc', q: 'The volunteers took hot food to ___.', o: ['the homeless', 'the homelesses', 'homeless'], a: 0, why: 'the + adjective, no -s: the homeless.' },
      { k: 'mc', q: 'The young ___ often good with new technology.', o: ['are', 'is', 'be'], a: 0, why: 'the young = young people → plural: are.' },
      { k: 'mc', q: 'An ___ asked me to help her with her bags.', o: ['old lady', 'old', 'olds'], a: 0, why: 'For one person we need a noun: an old lady.' },
      { k: 'mc', q: '___ are famous for their cheese and chocolate.', o: ['The Swiss', 'The Swisses', 'Swiss'], a: 0, why: 'Swiss ends in -ss → the Swiss, no -s.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'After the accident, the ambulance took ___ injured to hospital.', a: ['the'], why: 'the + adjective = the people who were hurt: the injured.' },
      { k: 'tf', q: '"The poors need our help."', a: false, fix: 'The poor need our help.', why: 'the + adjective never takes -s: the poor.',
        he: 'העניים = the poor, בלי s.' },
      { k: 'mc', q: 'Today, ___ in many countries live longer than people did 100 years ago.', o: ['the elderly', 'the elderlies', 'elderly'], a: 0, why: 'the elderly = old people, no -s.' },
      { k: 'mc', q: 'My cousin lives in Rome. ___ love long family lunches.', o: ['The Italians', 'The Italian', 'Italian'], a: 0,
        why: 'Italian does not end in -sh, -ch, -ese or -ss, so we use the noun with -s: the Italians.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'This school has special classes for the deaf.', why: 'the deaf = people who cannot hear.' },
      { k: 'spot', s: 'The *Frenches* make wonderful bread.', fix: 'French', why: 'French ends in -ch → the French, no -s.' },
      { k: 'build', s: 'A blind man was walking with his dog.', why: 'One person → a blind man.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Our class collected warm coats for the *homelesses*.', fix: 'homeless', why: 'the homeless, no -s.' },
    { k: 'type', q: 'In our town there is a club where the old and the ___ play chess together.', hint: '(the opposite of old)', a: ['young'], why: 'the old and the young = old people and young people.' },
    { k: 'mc', q: 'Which sentence is right?', o: ['The unemployed are looking for work.', 'The unemployeds are looking for work.', 'The unemployed is looking for work.'], a: 0,
      why: 'the + adjective: no -s, and a plural verb (are).' }
  ]
},
{
  id: 'bpg07', url: 'https://test-english.com/grammar-points/b1-b2/adjective-order/', type: 'grammar',
  title: 'Adjectives in order', dinner: 'Can you describe your favourite thing at home with three adjectives?',
  hook: { q: '"A big red ball" sounds right, "a red big ball" sounds wrong. Why do English speakers know that?', o: ['They feel it, nobody teaches them', 'They learn it in first grade', 'There is no reason'], a: 0,
    reveal: '*They just feel it*! Most English speakers have never learned the rule, but they almost never get it wrong. You can learn it in two minutes.' },
  learn: { kind: 'rule', title: 'The order of adjectives',
    lines: ['The usual order: *opinion* → *size* → *age* → *shape* → *colour* → *origin* → *material* → *purpose* → noun.',
      'Opinion comes first: a *lovely* small dog, an *amazing* old castle.',
      'Then the facts: a *big old* house, a *small round* table, a *blue Italian* car, a *wooden kitchen* table.',
      'Two or three adjectives are normal. More than three sounds strange.'],
    ex: ['a *cute little white* cat', 'my *new black running* shoes'],
    he: 'בעברית שם התואר בא אחרי שם העצם (כלב קטן וחמוד). באנגלית כל התארים באים לפני: a cute little dog. קודם דעה, ואחר כך גודל, גיל, צורה, צבע, מוצא, חומר ומטרה.' },
  steps: [
    { name: 'Choose', items: [
      { k: 'mc', q: 'She has a ___ cat.', o: ['cute little white', 'white little cute', 'little white cute'], a: 0, why: 'opinion (cute) → size (little) → colour (white).' },
      { k: 'mc', q: 'We stayed in a ___ by the sea.', o: ['big old house', 'old big house', 'house big old'], a: 0, why: 'size (big) → age (old) → noun.' },
      { k: 'mc', q: 'Tom bought some ___ boots.', o: ['black leather football', 'football leather black', 'leather black football'], a: 0,
        why: 'colour (black) → material (leather) → purpose (football).' },
      { k: 'mc', q: 'Which word is an opinion?', o: ['beautiful', 'round', 'Italian'], a: 0, why: 'beautiful is what you think. Round (shape) and Italian (origin) are facts.' }
    ] },
    { name: 'Complete', items: [
      { k: 'sort', q: 'Opinion or fact?', g: ['opinion', 'fact'],
        w: [['amazing', 0], ['ugly', 0], ['delicious', 0], ['round', 1], ['plastic', 1], ['Spanish', 1]],
        why: 'opinion: amazing, ugly, delicious · fact: round (shape), plastic (material), Spanish (origin)' },
      { k: 'tf', q: '"I love your blue new jacket."', a: false, fix: 'I love your new blue jacket.', why: 'age (new) comes before colour (blue).' },
      { k: 'type', q: 'She wore a ___ silk scarf.', hint: '(red / long)', a: ['long red'], why: 'size (long) → colour (red) → material (silk).' },
      { k: 'mc', q: 'We had pizza in a ___ restaurant.', o: ['nice little Italian', 'Italian little nice', 'little Italian nice'], a: 0,
        why: 'opinion (nice) → size (little) → origin (Italian).' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'I found an old wooden box in the garden.', why: 'age (old) → material (wooden) → noun.' },
      { k: 'spot', s: 'We bought a lovely *Japan* paper lamp.', fix: 'Japanese', why: 'For origin we need the adjective: a lovely Japanese paper lamp.' },
      { k: 'build', s: 'She was wearing a pretty green summer dress.', why: 'opinion (pretty) → colour (green) → purpose (summer).' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'My grandpa has a beautiful old *Switzerland* watch.', fix: 'Swiss', why: 'For origin we need the adjective: a beautiful old Swiss watch.' },
    { k: 'type', q: 'My brother got a ___ bike for his birthday.', hint: '(red / new)', a: ['new red'], why: 'age (new) → colour (red).' },
    { k: 'mc', q: 'Which is the best order?', o: ['a funny little brown dog', 'a brown little funny dog', 'a little funny brown dog'], a: 0,
      why: 'opinion (funny) → size (little) → colour (brown).' }
  ]
},
{
  id: 'bpg08', url: 'https://test-english.com/grammar-points/b1-b2/so-such-a-so-much-so-many/', type: 'grammar',
  title: 'So, such, so much, so many', dinner: 'What made you so happy this week?',
  hook: { q: 'How many hours a day can a koala sleep?', o: ['About 8', 'About 14', 'About 20'], a: 2,
    reveal: 'Up to *20 hours*! Koalas sleep so much because their leaves give them so little energy. Such a relaxed life!' },
  learn: { kind: 'rule', title: 'so, such, so much, so many',
    lines: ['*so* + adjective or adverb: The film was *so funny*. She runs *so fast*.',
      '*such a* + adjective + one thing: It was *such a funny* film.',
      '*such* + plural or uncountable nouns: *such nice people*, *such bad weather*.',
      '*so much* + uncountable, *so many* + plural: *so much homework*, *so many friends*. Add *that* for a result: It was *so cold that* we stayed inside.'],
    ex: ['It was *such a* long day!', 'There were *so many* people *that* we couldn\'t see.'],
    he: 'בעברית "כל כך" מתאים לכל מקרה. באנגלית: so לפני תואר לבד (so cold), such a לפני תואר עם שם עצם (such a cold day). so much עם דברים שאי אפשר לספור, so many עם רבים.' },
  steps: [
    { name: 'Choose', items: [
      { k: 'mc', q: 'It was ___ beautiful day that we went to the beach.', o: ['such a', 'so', 'so a'], a: 0, why: 'adjective + noun (beautiful day) → such a.' },
      { k: 'mc', q: 'Why are you ___ tired today?', o: ['so', 'such', 'such a'], a: 0, why: 'An adjective alone (tired) → so.' },
      { k: 'mc', q: 'There were ___ people at the concert that we couldn\'t see the stage.', o: ['so many', 'so much', 'such a'], a: 0, why: 'people is plural → so many.' },
      { k: 'mc', q: 'I have ___ homework this week!', o: ['so much', 'so many', 'such a'], a: 0, why: 'homework is uncountable → so much.',
        he: 'homework לא נספר באנגלית: so much homework, לא so many homeworks.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'They are ___ nice neighbours. They always help us.', hint: '(so / such)', a: ['such'], why: 'adjective + plural noun → such nice neighbours.' },
      { k: 'tf', q: '"The weather was such bad that we stayed inside."', a: false, fix: 'The weather was so bad that we stayed inside.', why: 'An adjective alone (bad) → so.' },
      { k: 'mc', q: 'Your dog is ___ clever!', o: ['so', 'such', 'so much'], a: 0, why: 'An adjective alone → so clever.' },
      { k: 'type', q: 'I ate ___ many sweets that I felt sick.', a: ['so'], why: 'so many + plural + that…' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'It was such a long day.', why: 'such a + adjective + noun.' },
      { k: 'spot', s: 'Thank you, you\'ve been *such* helpful!', fix: 'so', why: 'An adjective alone (helpful) → so.' },
      { k: 'build', s: 'We had so much fun at the party.', why: 'fun is uncountable → so much fun.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'There was *so* a lot of traffic that we were late.', fix: 'such', why: 'such a lot of traffic. (Or: so much traffic.)' },
    { k: 'type', q: 'The film was ___ boring that I fell asleep.', a: ['so'], why: 'An adjective alone + that → so boring that.' },
    { k: 'mc', q: 'Which sentence is right?', o: ['She has such long hair.', 'She has such a long hair.', 'She has so long hair.'], a: 0,
      why: 'hair is uncountable → such long hair, with no a.', he: 'hair באנגלית לא נספר: long hair, בלי a.' }
  ]
},
{
  id: 'bpg09', url: 'https://test-english.com/grammar-points/b1-b2/narrative-tenses/', type: 'grammar',
  title: 'Telling a story', dinner: 'What was happening when you got home today?',
  hook: { q: 'In 1928 a scientist came back from holiday and found mould on a dish in his lab. What did it lead to?', o: ['The first antibiotic', 'The first vaccine', 'The microwave'], a: 0,
    reveal: '*The first antibiotic*, penicillin! Alexander Fleming *was cleaning* his lab when he *noticed* that the mould *had killed* the bacteria. Three past tenses in one story!' },
  learn: { kind: 'rule', title: 'The past tenses in a story',
    lines: ['*Past simple* for the main events, one after another: I *opened* the door and *saw* a puppy.',
      '*Past continuous* for the background, an action in progress: It *was raining*, and people *were waiting* for the bus.',
      '*Past perfect* for something that happened earlier: When we arrived, the film *had started*.',
      '*Past perfect continuous* for how long, before that moment: She was tired because she *had been running*.'],
    ex: ['While I *was walking* home, I *saw* a fox.', 'When I got to school, I realised I *had forgotten* my bag.'],
    he: 'בסיפור באנגלית: past simple לאירועים, was או were עם ing לרקע, had עם V3 למה שקרה עוד קודם. בעברית לא מסמנים "עוד קודם", ולכן קל לשכוח את had.' },
  steps: [
    { name: 'Choose', items: [
      { k: 'mc', q: 'I ___ a shower when the phone rang.', o: ['was having', 'am having', 'have had'], a: 0, why: 'An action in progress when something happened → was having.' },
      { k: 'mc', q: 'When we got to the station, the train ___.', o: ['had already left', 'already leaves', 'has already left'], a: 0, why: 'It left before we got there → had left.' },
      { k: 'mc', q: 'Yael ___ her phone, picked up her bag and ran out.', o: ['grabbed', 'was grabbing', 'had been grabbing'], a: 0, why: 'Main events one after another → past simple.' },
      { k: 'mc', q: 'His eyes were red because he ___ in the pool for hours.', o: ['had been swimming', 'has been swimming', 'is swimming'], a: 0,
        why: 'How long, before that moment in the past → had been swimming.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'While we ___ walking in the park, it started to rain.', a: ['were'], why: 'The background action: we were walking.' },
      { k: 'tf', q: '"When I arrived at the party, everyone had gone home."', a: true, why: 'They went home before I arrived → had gone.' },
      { k: 'mc', q: 'I couldn\'t get in because I ___ my keys.', o: ['had lost', 'have lost', 'was losing'], a: 0, why: 'I lost them before → had lost.',
        he: 'קודם איבדתי, ואחר כך לא יכולתי להיכנס: had lost.' },
      { k: 'type', q: 'The sun ___ shining and the birds were singing.', hint: '(was / were)', a: ['was'], why: 'The background: the sun was shining.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'We were having dinner when the lights went out.', why: 'Background (were having) + a short event (went out).' },
      { k: 'spot', s: 'By the time I got home, my brother *ate* all the pizza.', fix: 'had eaten', why: 'He ate it before I got home → had eaten.' },
      { k: 'build', s: 'She had never seen snow before that trip.', why: 'had + never + seen: earlier than the trip.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'The film was all new to me because I *have* never seen it before.', fix: 'had', why: 'Earlier than a moment in the past → I had never seen it before.' },
    { k: 'type', q: 'When I woke up, it ___ snowed all night, and everything was white.', a: ['had'], why: 'It snowed before I woke up → had snowed.' },
    { k: 'mc', q: 'Which sentence is right?', o: ['When I got home, my mum had already cooked dinner.', 'When I got home, my mum has already cooked dinner.', 'When I got home, my mum already cooks dinner.'], a: 0,
      why: 'She cooked before I got home → had already cooked.' }
  ]
},
{
  id: 'bpu01', url: 'https://test-english.com/use-of-english/b1-b2/b1-english-test-1-text-multiple-choice-gaps/', type: 'use-of-english',
  title: 'The night before the final', dinner: 'When did you feel like giving up, and what helped you keep going?',
  hook: { q: 'Which word comes from a play written in Czech in 1920?', o: ['robot', 'computer', 'rocket'], a: 0,
    reveal: '*Robot*! The writer Karel Čapek used it in his play (his brother Josef had the idea), from the Czech word "robota", which means hard work.' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A school robot breaks two days before a big competition. What do you think the team does?', o: ['They fix it during the night.', 'They go home.', 'They buy a new robot.'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'The robot that almost didn\'t make it',
        t: 'Last spring, five students from a school in Haifa [1] part in a national robotics competition. Their robot, Sparky, could sort rubbish [2] recycling. Two days before the final, disaster struck: Sparky suddenly [3] working. "We had been testing it all evening, and then it just stopped," said Tamar, [4] was the team captain. Instead of giving [5], the team took the robot apart piece by piece. At three in the morning, Eitan finally [6] out the problem: a tiny broken wire. Sparky didn\'t win first prize, but the judges were [7] impressed by the team that they gave them a special award. "We learned more from that night [8] from the whole year," Tamar laughed.',
        gaps: [
          { o: ['took', 'made', 'did'], a: 0, why: 'take part in = be in an event.' },
          { o: ['for', 'to', 'at'], a: 0, why: 'for recycling = with that purpose.' },
          { o: ['stopped', 'finished', 'ended'], a: 0, why: 'A machine stops working when it breaks.' },
          { o: ['who', 'which', 'whose'], a: 0, why: 'who for people: Tamar, who was the captain.' },
          { o: ['up', 'off', 'away'], a: 0, why: 'give up = stop trying.' },
          { o: ['worked', 'looked', 'took'], a: 0, why: 'work out = find the answer to a problem.' },
          { o: ['so', 'such', 'too'], a: 0, why: 'so + adjective + that: so impressed that…' },
          { o: ['than', 'that', 'as'], a: 0, why: 'more… than.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'We ___ the robot all evening when it suddenly stopped.', o: ['had been testing', 'have tested', 'test'], a: 0, why: 'How long, before a moment in the past → had been testing.' },
      { k: 'mc', q: 'Don\'t give ___! You can do it.', o: ['up', 'off', 'down'], a: 0, why: 'give up = stop trying.' },
      { k: 'type', q: 'My sister is taller ___ me.', a: ['than'], why: 'A comparative + than: taller than.' },
      { k: 'tf', q: '"We were such tired that we fell asleep on the bus."', a: false, fix: 'We were so tired that we fell asleep on the bus.', why: 'An adjective alone (tired) → so.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Instead of giving up, they fixed the robot.', why: 'instead of + -ing: instead of giving up.' }
  ]
},
{
  id: 'bpu03', url: 'https://test-english.com/use-of-english/b1-b2/b1-english-test-3-text-with-multiple-choice-gaps/', type: 'use-of-english',
  title: 'Grandpa\'s cooking channel', dinner: 'Which family recipe would you film for the whole world?',
  hook: { q: 'Where does shakshuka come from?', o: ['North Africa', 'Italy', 'India'], a: 0,
    reveal: '*North Africa*, most food historians say. Families from Tunisia and Libya brought it to Israel, and now it is a favourite breakfast here.' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A grandpa starts a cooking channel with his grandson. What do you think happens?', o: ['It becomes very popular.', 'Nobody watches it.', 'They stop after one video.'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'Shakshuka goes global',
        t: 'Three years ago, 78-year-old Moshe Levi had never [1] a smartphone. Then his grandson Amit, who was bored in the summer holidays, had an idea: "Grandpa, you\'re the best cook I know. Why don\'t we film you while you [2] dinner?" At first Moshe wasn\'t keen [3] the idea, but he agreed to try once. The first video, a recipe for his famous shakshuka, was watched by only 200 people, [4] of them relatives. But Amit didn\'t give up, and he [5] a new video every Friday. Then one of them suddenly went viral. Today the channel has over 300,000 followers [6] all over the world. "I never imagined that I could [7] so many friends through cooking," Moshe says. His advice for other grandparents? "Don\'t be afraid of technology. It\'s never too late to [8] something new."',
        gaps: [
          { o: ['used', 'using', 'use'], a: 0, why: 'had never + past participle: had never used.' },
          { o: ['cook', 'will cook', 'cooked'], a: 0, why: 'After while, about now or the future: while you cook.' },
          { o: ['on', 'in', 'at'], a: 0, why: 'keen on = interested in, liking an idea.' },
          { o: ['most', 'more', 'the most'], a: 0, why: 'most of them = nearly all of them.' },
          { o: ['posted', 'opened', 'followed'], a: 0, why: 'post a video = put it online.' },
          { o: ['from', 'of', 'by'], a: 0, why: 'followers from all over the world.' },
          { o: ['make', 'do', 'win'], a: 0, why: 'make friends.', he: 'מכירים חברים = make friends, לא do friends.' },
          { o: ['learn', 'learning', 'learnt'], a: 0, why: 'too late + to + base form: to learn.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'Have you ever ___ a cake by yourself?', o: ['made', 'make', 'making'], a: 0, why: 'have + past participle: have you ever made…?' },
      { k: 'mc', q: 'My sister is very keen ___ basketball.', o: ['on', 'of', 'with'], a: 0, why: 'keen on something.' },
      { k: 'type', q: 'It\'s easy to ___ friends at summer camp.', a: ['make'], why: 'make friends.' },
      { k: 'tf', q: '"I had never been on a plane before that trip."', a: true, why: 'Before a moment in the past → had never been.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'It\'s never too late to learn something new.', why: 'too late + to + base form: too late to learn.' }
  ]
},
{
  id: 'bpu04', url: 'https://test-english.com/use-of-english/b1-b2/b1-english-test-4-multiple-choice-questions/', type: 'use-of-english',
  title: 'The stone on the beach', dinner: 'If you found something very old, would you keep it or give it to a museum?',
  hook: { q: 'Which came first on Earth: dinosaurs or flowers?', o: ['Dinosaurs', 'Flowers', 'They came at the same time'], a: 0,
    reveal: '*Dinosaurs*! They appeared about 230 million years ago, and the oldest flower fossils are only about 130 million years old.' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A boy finds a strange stone on the beach. What do you think it is?', o: ['A very old fossil', 'A lost jewel', 'A piece of a ship'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'A very old find',
        t: 'Last August, ten-year-old Ido Shapira was [1] along the beach near Ashkelon with his dad when he noticed a strange stone. "It had a pattern on it, like a shell," he remembers. His dad, [2] works as a science teacher, thought it might be a fossil, so they sent a photo to a museum. A week later, an expert called them. The stone was a fossil of a sea creature that [3] about 80 million years ago! "We [4] never found anything like it on this beach," the expert said. Ido gave the fossil to the museum, [5] it is now on display. Since then, Ido has [6] interested in everything about the past. He wants to be a palaeontologist, a scientist who studies fossils, when he [7] up. "If I [8] picked up that stone, none of this would have happened."',
        gaps: [
          { o: ['walking', 'walked', 'walk'], a: 0, why: 'was + -ing: an action in progress.' },
          { o: ['who', 'which', 'what'], a: 0, why: 'who for people: his dad, who works…' },
          { o: ['lived', 'has lived', 'lives'], a: 0, why: '80 million years ago = finished past → lived.' },
          { o: ['have', 'are', 'did'], a: 0, why: 'Never, up to now → have never found.' },
          { o: ['where', 'which', 'when'], a: 0, why: 'where for a place: the museum, where it is on display.' },
          { o: ['become', 'made', 'done'], a: 0, why: 'become interested = start to be interested.' },
          { o: ['grows', 'will grow', 'grew'], a: 0, why: 'After when, about the future, we use the present simple: when he grows up.',
            he: 'בעברית "כשיגדל", אבל באנגלית אחרי when בעתיד: when he grows up, לא will grow.' },
          { o: ['hadn\'t', 'didn\'t', 'wouldn\'t'], a: 0, why: 'Imagining a different past: If I hadn\'t…, … would have happened.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'I\'ll call you when I ___ home.', o: ['get', 'will get', 'got'], a: 0, why: 'After when, about the future → present simple: when I get home.' },
      { k: 'mc', q: 'If we had left earlier, we ___ the bus.', o: ['would have caught', 'would catch', 'had caught'], a: 0, why: 'If + had + past participle, would have + past participle.' },
      { k: 'type', q: 'This is the café ___ we first met.', hint: '(where / which)', a: ['where'], why: 'where for a place: the café where we met.' },
      { k: 'tf', q: '"My uncle, which is a pilot, flies to New York every week."', a: false, fix: 'My uncle, who is a pilot, flies to New York every week.', why: 'who for people, which for things.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'If I hadn\'t looked down, I would have missed it.', why: 'If + had (not) + past participle, would have + past participle.' }
  ]
},
{
  id: 'bpv03', url: 'https://test-english.com/vocabulary/b1-b2/air-travel-b1-b2-english-vocabulary/', type: 'vocabulary',
  title: 'At the airport', dinner: 'If you could fly anywhere tomorrow, where would you go?',
  hook: { q: 'Which airport has the most passengers in the world?', o: ['Atlanta, USA', 'London Heathrow', 'Dubai'], a: 0,
    reveal: '*Atlanta*, in the USA, with more than 100 million passengers a year. Today: the words you need when you fly.' },
  learn: { kind: 'words', title: 'Words for flying', words: [
    { w: 'check in', d: 'show your ticket and leave your big bags at the airport', ex: 'We *checked in* two hours before the flight.' },
    { w: 'a boarding pass', d: 'the card or code you need to get on the plane', ex: 'Have your *boarding pass* ready at the gate.' },
    { w: 'hand luggage', d: 'a small bag you take on the plane with you', ex: 'You can take one piece of *hand luggage*.' },
    { w: 'security', d: 'the place where they check you and your bags', ex: 'We had to take off our shoes at *security*.' },
    { w: 'a gate', d: 'the door where you get on the plane', ex: 'Our flight leaves from *gate* 12.' },
    { w: 'delayed', d: 'later than planned', ex: 'The flight was *delayed* by two hours.' },
    { w: 'take off', d: '(a plane) leave the ground', ex: 'The plane *took off* at six.' },
    { w: 'land', d: '(a plane) come down onto the ground', ex: 'We *landed* in Rome at noon.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'The door where you get on the plane:', o: ['gate', 'security', 'baggage reclaim'], a: 0, why: 'You wait at the gate and get on the plane there.' },
      { k: 'mc', q: 'Later than planned:', o: ['delayed', 'cancelled', 'boarded'], a: 0, why: 'delayed = late. (cancelled = it doesn\'t happen at all.)' },
      { k: 'mc', q: 'A small bag you take on the plane with you:', o: ['hand luggage', 'a boarding pass', 'a passport'], a: 0, why: 'hand luggage travels with you, not under the plane.' },
      { k: 'mc', q: 'The plane leaves the ground. It ___.', o: ['takes off', 'lands', 'checks in'], a: 0, why: 'take off = leave the ground. land = come down.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Before you fly or after you land?', g: ['before you fly', 'after you land'],
        w: [['check in', 0], ['go through security', 0], ['wait at the gate', 0], ['board the plane', 0], ['go to baggage reclaim', 1], ['collect your suitcase', 1], ['go through customs', 1]],
        why: 'before: check in, security, the gate, boarding · after: baggage reclaim, your suitcase, customs' },
      { k: 'hear', say: 'Passengers for flight 165 to London, please go to gate 22. The gate is now open.', q: 'What should the passengers do?', o: ['Go to gate 22.', 'Go to security.', 'Wait for two hours.'], a: 0,
        why: '"please go to gate 22. The gate is now open."' },
      { k: 'spell', w: 'delayed', clue: 'The flight is late. It is ___.', why: 'delayed: d-e-l-a-y-e-d.' },
      { k: 'mc', q: 'The plane ___ in Eilat at 9:30, and we went straight to the beach.', o: ['landed', 'took off', 'checked in'], a: 0, why: 'It arrived and came down onto the ground → landed.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'A trip to Rome',
        t: 'We [1] online the night before, so our boarding [2] were on my mum\'s phone. At [3], I had to throw away my bottle of water. Then the screen said that our flight was [4] by an hour, so we had pizza near the gate.',
        gaps: [
          { o: ['checked in', 'took off', 'landed'], a: 0, why: 'You can check in online before the flight.' },
          { o: ['passes', 'gates', 'luggage'], a: 0, why: 'boarding passes: what you need to get on the plane.' },
          { o: ['security', 'baggage reclaim', 'the gate'], a: 0, why: 'At security they check your bags, and you can\'t take a big bottle of water.' },
          { o: ['delayed', 'landed', 'boarded'], a: 0, why: 'by an hour → the flight was delayed.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'We have three *luggages* for this trip.', fix: 'bags', why: 'luggage is uncountable: three bags, or three pieces of luggage.',
      he: 'luggage לא נספר באנגלית, אין luggages. אומרים three bags או three pieces of luggage.' },
    { k: 'type', q: 'Our flight to Paris was ___ because of the snow. We waited three hours.', a: ['delayed', 'late'], why: 'It left later than planned → delayed.' }
  ]
},
{
  id: 'bpv04', url: 'https://test-english.com/vocabulary/b1-b2/crime-and-punishment-b1-b2-english-vocabulary/', type: 'vocabulary',
  title: 'Crime and the courts', dinner: 'What is a fair punishment for someone who writes on the school walls?',
  hook: { q: 'Sherlock Holmes "lived" at a famous address in London. Which one?', o: ['221B Baker Street', '10 Downing Street', '1 Oxford Street'], a: 0,
    reveal: '*221B Baker Street*. Holmes was invented, but today there is a real Sherlock Holmes museum there. Today: words for crime, the police and the courts.' },
  learn: { kind: 'words', title: 'From the crime to the court', words: [
    { w: 'commit a crime', d: 'do something that is against the law', ex: 'He *committed a crime* when he took the bike.' },
    { w: 'a witness', d: 'a person who sees a crime happen', ex: 'A *witness* saw the thief run away.' },
    { w: 'evidence', d: 'things that show that something is true', ex: 'The police found *evidence* on the camera.' },
    { w: 'guilty', d: 'having done the crime', ex: 'The court decided that she was *guilty*.' },
    { w: 'innocent', d: 'not having done the crime', ex: 'He said again and again that he was *innocent*.' },
    { w: 'a judge', d: 'the person in charge of a court, who decides the punishment', ex: 'The *judge* listened carefully to both sides.' },
    { w: 'a fine', d: 'money you pay as a punishment', ex: 'He got a 500-shekel *fine* for parking there.' },
    { w: 'a sentence', d: 'the punishment a judge gives', ex: 'His *sentence* was 100 hours of community service.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'A person who sees a crime happen:', o: ['a witness', 'a judge', 'a thief'], a: 0, why: 'a witness sees what happened.' },
      { k: 'mc', q: 'Not having done the crime:', o: ['innocent', 'guilty', 'arrested'], a: 0, why: 'innocent is the opposite of guilty.' },
      { k: 'mc', q: 'Money you pay as a punishment:', o: ['a fine', 'a witness', 'evidence'], a: 0, why: 'a fine = money you pay as a punishment.' },
      { k: 'mc', q: 'Things that show that something is true:', o: ['evidence', 'a judge', 'a sentence'], a: 0, why: 'evidence: a video, a fingerprint, a message…' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'A person or a punishment?', g: ['a person', 'a punishment'],
        w: [['judge', 0], ['witness', 0], ['lawyer', 0], ['police officer', 0], ['fine', 1], ['prison', 1], ['community service', 1]],
        why: 'people: judge, witness, lawyer, police officer · punishments: fine, prison, community service' },
      { k: 'hear', say: 'The judge said that he was guilty and gave him a fine of two thousand shekels.', q: 'What was his punishment?', o: ['He had to pay money.', 'He went to prison.', 'He was free to go.'], a: 0,
        why: 'a fine = money you pay as a punishment.' },
      { k: 'spell', w: 'guilty', clue: 'The opposite of innocent.', why: 'guilty: g-u-i-l-t-y. The u is silent.' },
      { k: 'mc', q: 'She ___ a crime when she took money from the shop.', o: ['committed', 'made', 'played'], a: 0, why: 'We say commit a crime.',
        he: 'בעברית "עשה פשע" או "ביצע פשע", ובאנגלית commit a crime.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'In court',
        t: 'Two [1] said that they saw Tom take a bike from outside the library, and a camera gave the police more [2]. But Tom said that he was [3]: the bike was his brother\'s, and he had his brother\'s key! In the end, the [4] decided that Tom was not guilty.',
        gaps: [
          { o: ['witnesses', 'judges', 'fines'], a: 0, why: 'people who saw it → witnesses.' },
          { o: ['evidence', 'sentence', 'witness'], a: 0, why: 'a camera video is evidence. (more evidence: it is uncountable)' },
          { o: ['innocent', 'guilty', 'arrested'], a: 0, why: 'He didn\'t do anything wrong → innocent.' },
          { o: ['judge', 'witness', 'thief'], a: 0, why: 'In court, the judge decides.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'The police found *an* evidence in the car.', fix: 'some', why: 'evidence is uncountable: some evidence, or a piece of evidence.',
      he: 'evidence לא נספר: אומרים some evidence או a piece of evidence, ולא an evidence.' },
    { k: 'type', q: 'If you park in the wrong place, you might have to pay a ___.', a: ['fine'], why: 'a fine = money you pay as a punishment.' }
  ]
},
{
  id: 'bpv05', url: 'https://test-english.com/vocabulary/b1-b2/types-of-crime-and-offenders-b1-english-vocabulary/', type: 'vocabulary',
  title: 'Who did it?', dinner: 'What would you do if you saw someone shoplifting?',
  hook: { q: 'Where does the word "vandal" come from?', o: ['A people who took Rome in 455', 'A Dutch painter', 'A kind of spray paint'], a: 0,
    reveal: '*The Vandals*, a people who took Rome in the year 455 and carried away its treasures. Today a vandal is someone who damages things on purpose.' },
  learn: { kind: 'words', title: 'People who break the law', words: [
    { w: 'a burglar', d: 'someone who gets into a house or a building to steal', ex: 'A *burglar* came in through the kitchen window.' },
    { w: 'a shoplifter', d: 'someone who steals things from a shop', ex: 'The *shoplifter* hid a T-shirt in her bag.' },
    { w: 'a pickpocket', d: 'someone who steals from people\'s pockets or bags', ex: 'Watch out for *pickpockets* on the bus.' },
    { w: 'a vandal', d: 'someone who damages things on purpose', ex: '*Vandals* broke the benches in the park.' },
    { w: 'a hacker', d: 'someone who gets into computers without permission', ex: 'A *hacker* stole thousands of passwords.' },
    { w: 'a robber', d: 'someone who steals from a bank, a shop or a person, often with threats', ex: 'The bank *robbers* escaped in a van.' },
    { w: 'a smuggler', d: 'someone who secretly moves things into or out of a country', ex: 'The *smuggler* hid watches in his suitcase.' },
    { w: 'a scammer', d: 'someone who tricks people to get their money', ex: 'A *scammer* sent my grandma a fake message from "the bank".' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'Steals things from a shop:', o: ['a shoplifter', 'a burglar', 'a smuggler'], a: 0, why: 'shop + lift (take) → a shoplifter.' },
      { k: 'mc', q: 'Damages things on purpose:', o: ['a vandal', 'a hacker', 'a pickpocket'], a: 0, why: 'a vandal breaks or paints things on purpose.' },
      { k: 'mc', q: 'Gets into a house to steal:', o: ['a burglar', 'a pickpocket', 'a scammer'], a: 0, why: 'a burglar gets into houses and buildings.' },
      { k: 'mc', q: 'Tricks people to get their money:', o: ['a scammer', 'a vandal', 'a burglar'], a: 0, why: 'a scammer uses tricks, like fake messages.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'The person or the crime?', g: ['the person', 'the crime'],
        w: [['burglar', 0], ['shoplifter', 0], ['vandal', 0], ['hacker', 0], ['burglary', 1], ['shoplifting', 1], ['vandalism', 1], ['hacking', 1]],
        why: 'the person: burglar, shoplifter, vandal, hacker · the crime: burglary, shoplifting, vandalism, hacking' },
      { k: 'hear', say: 'Someone took my wallet from my bag on the train, and I didn\'t feel a thing.', q: 'Who took the wallet?', o: ['a pickpocket', 'a burglar', 'a hacker'], a: 0,
        why: 'a pickpocket steals from your pocket or bag without you noticing.' },
      { k: 'spell', w: 'burglar', clue: 'Someone who gets into a house to steal.', why: 'burglar: b-u-r-g-l-a-r. It ends in -ar.' },
      { k: 'mc', q: 'Thieves ___ my bike from outside the school.', o: ['stole', 'robbed', 'burgled'], a: 0,
        why: 'You steal a thing (my bike). You rob a person or a place (a bank).',
        he: 'steal הולך עם החפץ שנלקח: stole my bike. rob הולך עם האדם או המקום: robbed me, robbed a bank.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Neighbourhood news',
        t: 'It was a busy week. On Monday, a [1] got into a flat on Herzl Street through an open window. On Tuesday, [2] sprayed paint on the slide in the park. On Wednesday, a [3] sent people fake messages from "the post office", asking for money. And on Thursday, a [4] got into the school computer and changed everyone\'s marks to 100!',
        gaps: [
          { o: ['burglar', 'shoplifter', 'pickpocket'], a: 0, why: 'got into a flat to steal → a burglar.' },
          { o: ['vandals', 'smugglers', 'hackers'], a: 0, why: 'damaged the slide on purpose → vandals.' },
          { o: ['scammer', 'burglar', 'vandal'], a: 0, why: 'fake messages to get money → a scammer.' },
          { o: ['hacker', 'robber', 'pickpocket'], a: 0, why: 'got into a computer → a hacker.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Someone *robbed* my phone at the beach!', fix: 'stole', why: 'steal a thing: Someone stole my phone. (rob a person: Someone robbed me.)' },
    { k: 'type', q: 'Taking things from a shop without paying is called ___.', a: ['shoplifting'], why: 'the crime of a shoplifter → shoplifting.' }
  ]
},
{
  id: 'bpl04', url: 'https://test-english.com/listening/b1-b2/crime-scene-investigation-b1-english-listening-test/', type: 'listening',
  title: 'The case of the missing cake', dinner: 'If you were a detective, what case would you like to solve?',
  hook: { q: 'Which part of your body leaves marks that are different for every person, even for twins?', o: ['Your fingertips', 'Your elbows', 'Your knees'], a: 0,
    reveal: 'Your *fingertips*! Even identical twins have different fingerprints. And koalas have fingerprints that look a lot like ours.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a clue', d: 'something that helps you find the answer' },
    { w: 'footprints', d: 'the marks your feet or shoes leave' },
    { w: 'a suspect', d: 'a person who might have done it' }
  ], predict: { q: 'A cake disappeared from the teachers\' room. Who do you think took it?', o: ['An animal', 'A teacher', 'A student'] } },
  show: { cast: 'The school science club plays crime scene detectives. (The case is made up.)', names: { T: 'Ms Carter', N: 'Noa', B: 'Ben' }, voices: { T: 'bf_alice', N: 'af_sky', B: 'am_echo' },
    parts: [
      { lines: [
        ['T', 'Good morning, detectives! Here is today\'s case. Yesterday afternoon, a lemon cake disappeared from the staff room. Your job is to find out who took it.'],
        ['N', 'Can we look at the crime scene?'],
        ['T', 'Yes, but don\'t touch anything. Put these gloves on first.'],
        ['B', 'Look, there\'s flour all over the floor, and there are footprints in it!']
      ], items: [
        { k: 'mc', q: 'What disappeared from the staff room?', o: ['a lemon cake', 'a laptop', 'a bag of flour'], a: 0, why: '"a lemon cake disappeared from the staff room."' },
        { k: 'tf', q: 'The students can touch things at the crime scene.', a: false, fix: 'They mustn\'t touch anything.', why: '"Yes, but don\'t touch anything."' }
      ] },
      { lines: [
        ['N', 'These footprints are strange. They\'re small and round, and they\'re in groups of four.'],
        ['B', 'And look at the window. It\'s open, and there\'s some short brown hair on it.'],
        ['T', 'Good. Now, our suspects. Mr Levi, the maths teacher, was in the staff room at three. Dana, the cleaner, came in at four.'],
        ['N', 'But neither of them has small round feet!']
      ], items: [
        { k: 'mc', q: 'What was strange about the footprints?', o: ['They were small and round.', 'They were very big.', 'They were wet.'], a: 0, why: '"They\'re small and round, and they\'re in groups of four."' },
        { k: 'mc', q: 'What did Ben find on the window?', o: ['some brown hair', 'a fingerprint', 'a piece of cake'], a: 0, why: '"there\'s some short brown hair on it."' },
        { k: 'mc', q: 'When was Mr Levi in the staff room?', o: ['at three', 'at four', 'in the morning'], a: 0, why: '"Mr Levi… was in the staff room at three."' }
      ] },
      { lines: [
        ['B', 'Small round footprints, brown hair, an open window… It wasn\'t a person at all. It was an animal!'],
        ['T', 'Well done! The camera in the car park shows Biscuit, the caretaker\'s dog, jumping out of the window with the cake in his mouth.'],
        ['N', 'So the thief is a dog! Is he going to be arrested?'],
        ['T', 'No. But from now on, the staff room window stays closed!']
      ], items: [
        { k: 'mc', q: 'Who took the cake?', o: ['a dog', 'Mr Levi', 'Dana, the cleaner'], a: 0, why: '"Biscuit, the caretaker\'s dog, jumping out of the window with the cake"' },
        { k: 'tf', q: 'A camera showed who the thief was.', a: true, why: '"The camera in the car park shows Biscuit…"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'There\'s flour all over the floor, and there are ___ in it!', a: ['footprints', 'footprint'], why: 'footprints = the marks your feet leave.' },
      { k: 'mc', clip: 1, q: '"Neither of them has small round feet." This means…', o: ['Mr Levi doesn\'t, and Dana doesn\'t either.', 'Only one of them has small round feet.', 'They both have small round feet.'], a: 0,
        why: 'neither of them = not this one and not the other one.', he: 'neither of them = אף אחד מהשניים. הפועל בא בחיובי: neither of them has.' },
      { k: 'hear', say: 'Mr Levi and Dana were our two suspects.', q: 'What is a suspect?', o: ['a person who might have done it', 'a person who saw it happen', 'a person who found the clues'], a: 0,
        why: 'a suspect = a person who might have done it.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'The dog jumped out of the window with the cake.', why: 'jump out of + a place, with + what he had.' }
  ]
},
{
  id: 'bpl05', url: 'https://test-english.com/listening/b1-b2/culture-shock-living-abroad-b1-english-listening-test/', type: 'listening',
  title: 'Far from home', dinner: 'If our family moved to another country, what would you miss most?',
  hook: { q: 'In Japan, what can confuse people or even seem rude in a restaurant?', o: ['Leaving a tip', 'Saying thank you', 'Eating with chopsticks'], a: 0,
    reveal: '*Leaving a tip*! In Japan, good service is normal, and a tip can confuse people. Every country has its own unwritten rules.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'culture shock', d: 'the confused feeling when you start living in a very different place' },
    { w: 'homesick', d: 'sad because you are far from home' },
    { w: 'get used to', d: 'slowly start to find something normal' }
  ], predict: { q: 'An Israeli girl moved to England. What do you think surprised her most?', o: ['The times of meals', 'The food', 'The language'] } },
  show: { cast: 'A podcast for teens, Far From Home. Two guests talk about moving to a new country.', names: { H: 'Host', M: 'Maya', T: 'Tom' }, voices: { H: 'bf_isabella', M: 'af_sky', T: 'bm_george' },
    parts: [
      { lines: [
        ['H', 'Welcome to Far From Home. My first guest is Maya, who moved from Tel Aviv to Manchester two years ago. Maya, what was the biggest shock?'],
        ['M', 'The weather, of course! But also the times of meals. Lunch at school was at twelve, and dinner at home was at half past five. In Israel we eat dinner much later!']
      ], items: [
        { k: 'mc', q: 'Where did Maya move from?', o: ['Tel Aviv', 'Manchester', 'Haifa'], a: 0, why: '"Maya, who moved from Tel Aviv to Manchester"' },
        { k: 'mc', q: 'What surprised Maya about dinner in England?', o: ['It was very early.', 'It was very late.', 'It was very big.'], a: 0, why: '"dinner at home was at half past five."' }
      ] },
      { lines: [
        ['M', 'And people are so polite. Everyone says sorry, even when you bump into them! At first I thought my classmates were cold, because they didn\'t hug or shout like my friends at home.'],
        ['H', 'Did you feel homesick?'],
        ['M', 'Very, for the first few months. I missed my grandma\'s Friday dinners. But now I\'m used to it, and I have great friends here.']
      ], items: [
        { k: 'tf', q: 'At first, Maya thought her classmates were cold.', a: true, why: '"At first I thought my classmates were cold"' },
        { k: 'mc', q: 'What did Maya miss?', o: ['her grandma\'s Friday dinners', 'the rain', 'her school lunches'], a: 0, why: '"I missed my grandma\'s Friday dinners."' }
      ] },
      { lines: [
        ['H', 'My second guest, Tom, did the opposite. He moved from London to Haifa.'],
        ['T', 'For me, the biggest shock was how direct people are. A neighbour asked me how much my dad earns! In England, that\'s a very strange question.'],
        ['H', 'And the language?'],
        ['T', 'Hebrew was hard at first, especially reading from right to left. But the kids here are so friendly. On my first day, five people invited me to their homes.']
      ], items: [
        { k: 'mc', q: 'What surprised Tom about people in Israel?', o: ['They are very direct.', 'They are very quiet.', 'They eat dinner early.'], a: 0, why: '"the biggest shock was how direct people are."' },
        { k: 'mc', q: 'What was hard about Hebrew for Tom?', o: ['reading from right to left', 'the songs', 'the numbers'], a: 0, why: '"especially reading from right to left."' },
        { k: 'tf', q: 'On Tom\'s first day, nobody talked to him.', a: false, fix: 'Five people invited him to their homes.', why: '"On my first day, five people invited me to their homes."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'But now I\'m ___ to it, and I have great friends here.', a: ['used'], why: 'be used to something = it is normal for you now.' },
      { k: 'mc', q: 'Which sentence is right?', o: ['I\'m getting used to the weather.', 'I\'m getting use to the weather.', 'I\'m getting used the weather.'], a: 0,
        why: 'get used to + a noun (or a verb with -ing): used to the weather.',
        he: 'be used to = רגיל ל־. get used to = מתרגל ל־. אחריהם בא שם עצם או פועל עם ing.' },
      { k: 'hear', say: 'For the first few months I was really homesick.', q: 'How did she feel?', o: ['sad because she missed home', 'happy in her new home', 'ill and tired'], a: 0,
        why: 'homesick = sad because you are far from home.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'It took me a few months to get used to it.', why: 'It took me + time + to + verb.' }
  ]
},
{
  id: 'bpl06', url: 'https://test-english.com/listening/b1-b2/fears-and-phobias-b1-english-listening-test/', type: 'listening',
  title: 'Small steps, big fears', dinner: 'What were you afraid of when you were little, and how did you stop being afraid?',
  hook: { q: 'What is arachnophobia a fear of?', o: ['Spiders', 'Heights', 'Small spaces'], a: 0,
    reveal: '*Spiders*! It is one of the most common phobias in the world. A fear of heights is acrophobia, and a fear of small spaces is claustrophobia.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a phobia', d: 'a very strong fear that is hard to control' },
    { w: 'panic', d: 'feel a sudden strong fear that stops you thinking clearly' },
    { w: 'face your fear', d: 'do the thing that scares you, little by little' }
  ], predict: { q: 'How do you think people get over a phobia?', o: ['Little by little', 'By never thinking about it', 'In one day'] } },
  show: { cast: 'A radio show, Ask the Expert. A boy calls in with a question.', names: { H: 'Host', D: 'Dr Green', A: 'Amit' }, voices: { H: 'am_liam', D: 'bf_isabella', A: 'am_echo' },
    parts: [
      { lines: [
        ['H', 'This is Ask the Expert, and today\'s guest is Dr Green, who helps people with phobias. Our first caller is Amit, who is thirteen. Hi, Amit!'],
        ['A', 'Hi. I have a problem with spiders. Even a tiny one in the bathroom makes me panic. I scream and run out of the room.'],
        ['D', 'You\'re not alone, Amit. Millions of people feel exactly the same.']
      ], items: [
        { k: 'mc', q: 'What happens when Amit sees a spider?', o: ['He screams and runs out.', 'He catches it.', 'He calls his mum.'], a: 0, why: '"I scream and run out of the room."' },
        { k: 'tf', q: 'Amit is only afraid of big spiders.', a: false, fix: 'Even a tiny one makes him panic.', why: '"Even a tiny one in the bathroom makes me panic."' }
      ] },
      { lines: [
        ['A', 'My friends laugh at me. They say: just don\'t think about it.'],
        ['D', 'Actually, that doesn\'t usually work. Running away teaches your brain that spiders really are dangerous. The best way is to face your fear, but in very small steps.'],
        ['H', 'What kind of steps?'],
        ['D', 'First, look at a cartoon of a spider. Then at a photo. Later, at a real spider in a closed box, from the other side of the room.']
      ], items: [
        { k: 'mc', q: 'Why is running away a bad idea?', o: ['It teaches your brain that spiders are dangerous.', 'It makes you tired.', 'Spiders run after you.'], a: 0,
          why: '"Running away teaches your brain that spiders really are dangerous."' },
        { k: 'mc', q: 'What is the first step?', o: ['Look at a cartoon of a spider.', 'Hold a real spider.', 'Watch a film about spiders.'], a: 0, why: '"First, look at a cartoon of a spider."' }
      ] },
      { lines: [
        ['A', 'And what if I panic?'],
        ['D', 'Then you stop, breathe slowly, and try again the next day. Most people feel much better after a few weeks. Some of them even hold a spider in the end!'],
        ['A', 'I don\'t think I\'ll ever do that. But I can try the cartoon tonight.'],
        ['H', 'Good luck, Amit!']
      ], items: [
        { k: 'mc', q: 'What should Amit do if he panics?', o: ['Stop, breathe slowly and try again the next day.', 'Never try again.', 'Call a doctor at once.'], a: 0,
          why: '"Then you stop, breathe slowly, and try again the next day."' },
        { k: 'mc', q: 'What is Amit going to do tonight?', o: ['Look at a cartoon of a spider.', 'Hold a spider.', 'Visit a zoo.'], a: 0, why: '"I can try the cartoon tonight."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'The best way is to ___ your fear, but in very small steps.', a: ['face'], why: 'face your fear = do the thing that scares you.' },
      { k: 'mc', clip: 0, q: '"You\'re not alone." Dr Green means…', o: ['Many people have the same problem.', 'Someone is in the room with you.', 'You need more friends.'], a: 0,
        why: 'not alone = other people feel the same.' },
      { k: 'hear', say: 'Even a tiny spider makes me panic.', q: 'What does "panic" mean here?', o: ['feel a sudden strong fear', 'feel bored', 'feel sleepy'], a: 0,
        why: 'panic = a sudden strong fear that stops you thinking clearly.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'I\'m trying to face my fear of spiders.', why: 'a fear of + something: my fear of spiders.' }
  ]
},
{
  id: 'bpl07', url: 'https://test-english.com/listening/b1-b2/journey-through-our-solar-system-b2-english-listening-test/', type: 'listening',
  title: 'A trip through space', dinner: 'If you could visit one planet, which would you choose, and why?',
  hook: { q: 'How long does light from the Sun take to reach the Earth?', o: ['About 8 seconds', 'About 8 minutes', 'About 8 hours'], a: 1,
    reveal: 'About *8 minutes*! So the Sun you see is the Sun as it was 8 minutes ago. (But never look straight at it!)' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a planet', d: 'a very large round object that moves around a star, like the Earth' },
    { w: 'the surface', d: 'the outside or top layer of something' },
    { w: 'solid', d: 'hard, not a liquid or a gas' }
  ], predict: { q: 'Which planet do you think is the hottest?', o: ['Venus', 'Mercury', 'Jupiter'] } },
  show: { cast: 'A show at the planetarium. Kate takes two visitors on a trip through the Solar System.', names: { K: 'Kate', Y: 'Yoav', L: 'Lily' }, voices: { K: 'bf_alice', Y: 'am_liam', L: 'af_nicole' },
    parts: [
      { lines: [
        ['K', 'Welcome to the planetarium! Sit back, look up, and let\'s travel through our Solar System. Our first stop is Mercury, the closest planet to the Sun.'],
        ['Y', 'So it must be the hottest planet, right?'],
        ['K', 'Good guess, but no. The hottest is Venus, the second planet. Its thick clouds keep the heat in, so the surface is about 460 degrees. That\'s hot enough to melt some metals!']
      ], items: [
        { k: 'mc', q: 'Which planet is the closest to the Sun?', o: ['Mercury', 'Venus', 'Mars'], a: 0, why: '"Mercury, the closest planet to the Sun."' },
        { k: 'mc', q: 'Why is Venus so hot?', o: ['Its thick clouds keep the heat in.', 'It is the closest planet to the Sun.', 'It is the biggest planet.'], a: 0, why: '"Its thick clouds keep the heat in"' }
      ] },
      { lines: [
        ['L', 'What about Mars? I read that people want to live there one day.'],
        ['K', 'Maybe! But it won\'t be easy. Mars is very cold, the air is too thin to breathe, and the trip takes about seven months. And its red colour comes from rust in the ground.'],
        ['Y', 'Rust? Like on an old bike?'],
        ['K', 'Exactly like that!']
      ], items: [
        { k: 'mc', q: 'How long does a trip to Mars take?', o: ['about seven months', 'about seven days', 'about seven years'], a: 0, why: '"the trip takes about seven months."' },
        { k: 'mc', q: 'Why is Mars red?', o: ['There is rust in the ground.', 'It is very hot.', 'It is close to the Sun.'], a: 0, why: '"its red colour comes from rust in the ground."' }
      ] },
      { lines: [
        ['K', 'Next, the giant: Jupiter. More than a thousand Earths could fit inside it. It has a storm, the Great Red Spot, that is bigger than our whole planet.'],
        ['L', 'Could we land on Jupiter?'],
        ['K', 'No. Jupiter has no solid surface. It\'s mostly gas. And finally, Saturn, with its beautiful rings, made of ice and rock.'],
        ['Y', 'Best trip ever, and we didn\'t even leave our seats!']
      ], items: [
        { k: 'mc', q: 'What is the Great Red Spot?', o: ['a huge storm', 'a big mountain', 'a moon'], a: 0, why: '"a storm, the Great Red Spot"' },
        { k: 'tf', q: 'You could land on Jupiter.', a: false, fix: 'Jupiter has no solid surface.', why: '"No. Jupiter has no solid surface. It\'s mostly gas."' },
        { k: 'mc', q: 'What are Saturn\'s rings made of?', o: ['ice and rock', 'gas', 'sand and water'], a: 0, why: '"its beautiful rings, made of ice and rock."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 2, q: 'Jupiter has no solid ___. It\'s mostly gas.', a: ['surface'], why: 'the surface = the outside or top layer.' },
      { k: 'mc', clip: 2, q: '"More than a thousand Earths could fit inside it." So Jupiter is…', o: ['much bigger than the Earth', 'smaller than the Earth', 'as big as the Earth'], a: 0,
        why: 'A thousand Earths inside it → it is much bigger.' },
      { k: 'hear', say: 'It must be the hottest planet, right?', q: 'What does Yoav mean?', o: ['He is almost sure it is the hottest.', 'He knows it is not the hottest.', 'He has no idea.'], a: 0,
        why: 'must = I am almost sure. (And he was wrong!)', he: 'must כאן = אני כמעט בטוח: It must be hot = זה בטח חם.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Saturn\'s rings are made of ice and rock.', why: 'be made of + the material.' }
  ]
},
{
  id: 'bpl08', url: 'https://test-english.com/listening/b1-b2/air-travel-experiences-b1-english-listening-test/', type: 'listening',
  title: 'Flight stories', dinner: 'What is the best or the worst trip you have ever had?',
  hook: { q: 'Why does food on a plane often taste less good?', o: ['Our sense of taste gets weaker in a plane.', 'The food is old.', 'The cooks don\'t use salt.'], a: 0,
    reveal: 'In the dry air and low air pressure of a plane, our sense of salt and sweet gets weaker, by about a third. That is why airline food often has extra salt!' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'baggage reclaim', d: 'the place where you collect your bags after a flight' },
    { w: 'turbulence', d: 'when the plane shakes because of the wind' },
    { w: 'an upgrade', d: 'a better seat than the one you paid for' }
  ], predict: { q: 'Two friends talk about their summer flights. What do you think went wrong?', o: ['A lost suitcase', 'A missed party', 'A broken phone'] } },
  show: { cast: 'Shira and Jake meet at school after the summer holidays.', names: { S: 'Shira', J: 'Jake' }, voices: { S: 'bf_isabella', J: 'am_liam' },
    parts: [
      { lines: [
        ['S', 'Jake! How was your holiday in Greece?'],
        ['J', 'Great, but the flight was a disaster. First it was delayed by three hours. Then, when we landed in Athens, we waited and waited at baggage reclaim, and my suitcase never came.'],
        ['S', 'Oh no! What did you do?'],
        ['J', 'We filled in a form at the airline desk. The bag arrived at our hotel two days later, so I spent two days in my big brother\'s T-shirts. They were enormous!']
      ], items: [
        { k: 'mc', q: 'What was the first problem?', o: ['The flight was delayed.', 'Jake missed the flight.', 'The plane was full.'], a: 0, why: '"First it was delayed by three hours."' },
        { k: 'mc', q: 'When did Jake get his suitcase?', o: ['two days later', 'three hours later', 'never'], a: 0, why: '"The bag arrived at our hotel two days later"' },
        { k: 'tf', q: 'Jake wore his own clothes for the first two days.', a: false, fix: 'He wore his brother\'s T-shirts.', why: '"I spent two days in my big brother\'s T-shirts."' }
      ] },
      { lines: [
        ['J', 'What about you? You went to New York, didn\'t you?'],
        ['S', 'Yes! It was my first long flight, eleven hours. In the middle of the night there was terrible turbulence. Everything was shaking, and a cup of juice landed in my lap.'],
        ['J', 'Were you scared?'],
        ['S', 'A bit, but the flight attendant was really calm. She said that turbulence is normal and that planes are built for it.']
      ], items: [
        { k: 'mc', q: 'How long was Shira\'s flight?', o: ['eleven hours', 'three hours', 'two days'], a: 0, why: '"my first long flight, eleven hours."' },
        { k: 'mc', q: 'What helped Shira feel better?', o: ['the calm flight attendant', 'a cup of juice', 'a film'], a: 0, why: '"the flight attendant was really calm."' }
      ] },
      { lines: [
        ['J', 'So, bad luck for both of us.'],
        ['S', 'Not really. On the way back there were too many passengers, so they moved my mum and me to business class. A free upgrade! I had a bed, and real metal knives and forks.'],
        ['J', 'That\'s not fair! Next time I\'m flying with you.']
      ], items: [
        { k: 'mc', q: 'Why did Shira get an upgrade?', o: ['There were too many passengers.', 'It was her birthday.', 'Her mum paid more.'], a: 0, why: '"there were too many passengers, so they moved my mum and me to business class."' },
        { k: 'mc', q: 'How does Jake feel at the end?', o: ['a bit jealous', 'very scared', 'bored'], a: 0, why: '"That\'s not fair! Next time I\'m flying with you." He wants her luck.' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'We waited and waited at baggage ___, and my suitcase never came.', a: ['reclaim'], why: 'baggage reclaim = where you collect your bags.' },
      { k: 'mc', clip: 1, q: 'What happens to a plane in turbulence?', o: ['It shakes because of the wind.', 'It lands early.', 'It turns back.'], a: 0, why: 'turbulence = the plane shakes. "Everything was shaking"' },
      { k: 'hear', say: 'Our flight was delayed by three hours.', q: 'What happened?', o: ['The flight left three hours late.', 'The flight was three hours long.', 'The flight was cancelled.'], a: 0,
        why: 'delayed by three hours = three hours late.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Our flight was delayed by three hours.', why: 'delayed by + how long.' }
  ]
},
{
  id: 'bpl09', url: 'https://test-english.com/listening/b1-b2/health-problems-b1-b2-english-listening-test/', type: 'listening',
  title: 'At the doctor\'s', dinner: 'How many glasses of water did you drink today?',
  hook: { q: 'About how much of your body is water?', o: ['About 30%', 'About 60%', 'About 90%'], a: 1,
    reveal: 'About *60%*! Your brain has even more, about three quarters. So when you don\'t drink enough, your head can really feel it.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a headache', d: 'a pain in your head' },
    { w: 'dizzy', d: 'feeling that everything is turning around you' },
    { w: 'cause', d: 'make something happen' }
  ], predict: { q: 'A boy gets headaches every afternoon. What do you think is the reason?', o: ['He doesn\'t drink enough water.', 'He eats too much fruit.', 'He sleeps too much.'] } },
  show: { cast: 'Lior and his mum visit the family doctor.', names: { D: 'Dr Shapiro', L: 'Lior', M: 'Mum' }, voices: { D: 'bf_alice', L: 'am_echo', M: 'af_nicole' },
    parts: [
      { lines: [
        ['D', 'Hello, Lior. Come in and sit down. So, what seems to be the problem?'],
        ['L', 'I keep getting headaches. They start in the afternoon, usually in my last lesson, and sometimes I feel a bit dizzy too.'],
        ['M', 'It\'s been happening for about three weeks, since the new school year started.']
      ], items: [
        { k: 'mc', q: 'When do Lior\'s headaches start?', o: ['in the afternoon', 'in the morning', 'at night'], a: 0, why: '"They start in the afternoon"' },
        { k: 'mc', q: 'How long has it been happening?', o: ['about three weeks', 'about three days', 'since last year'], a: 0, why: '"for about three weeks"' }
      ] },
      { lines: [
        ['D', 'Let me ask a few questions. How much water do you drink at school?'],
        ['L', 'Um… not much. Maybe one glass at lunch.'],
        ['D', 'And what do you do in the breaks?'],
        ['L', 'I play games on my phone. And after school I usually play on the computer.'],
        ['D', 'I see. So your eyes work hard all day, and your body doesn\'t get enough water. Both of these can cause headaches.']
      ], items: [
        { k: 'mc', q: 'How much water does Lior drink at school?', o: ['about one glass', 'three bottles', 'none at all'], a: 0, why: '"Maybe one glass at lunch."' },
        { k: 'tf', q: 'Lior plays football in the breaks.', a: false, fix: 'He plays games on his phone.', why: '"I play games on my phone."' },
        { k: 'mc', q: 'What does the doctor think causes the headaches?', o: ['too little water and too much screen time', 'too much food', 'a cold'], a: 0,
          why: '"your eyes work hard all day, and your body doesn\'t get enough water."' }
      ] },
      { lines: [
        ['D', 'Here\'s my advice. Take a bottle of water to school and drink some in every break. And give your eyes a rest: every twenty minutes, look at something far away for twenty seconds.'],
        ['M', 'And if the headaches don\'t stop?'],
        ['D', 'Then come back in two weeks, and we\'ll check his eyes. He might need glasses.']
      ], items: [
        { k: 'mc', q: 'What should Lior do every twenty minutes?', o: ['look at something far away', 'drink a glass of water', 'go for a walk'], a: 0, why: '"every twenty minutes, look at something far away"' },
        { k: 'mc', q: 'What will happen if the headaches don\'t stop?', o: ['The doctor will check his eyes.', 'He will stay at home.', 'He will go to hospital.'], a: 0, why: '"come back in two weeks, and we\'ll check his eyes."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'I keep ___ headaches.', a: ['getting', 'having'], why: 'keep + -ing = again and again.',
        he: 'keep + פועל עם ing = שוב ושוב. I keep getting headaches = כל הזמן יש לי כאבי ראש.' },
      { k: 'mc', clip: 0, q: 'A doctor asks "What seems to be the problem?" to find out…', o: ['what is wrong with you', 'where you live', 'what you ate today'], a: 0,
        why: 'It is a polite way to ask: what is wrong?' },
      { k: 'hear', say: 'Every twenty minutes, look at something far away for twenty seconds.', q: 'For how long should he look far away?', o: ['twenty seconds', 'twenty minutes', 'two minutes'], a: 0,
        why: '"for twenty seconds", every twenty minutes.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'I keep getting headaches in the afternoon.', why: 'keep + -ing = again and again.' }
  ]
},
{
  id: 'bpr02', url: 'https://test-english.com/reading/b1-b2/the-business-of-running-b1-english-reading-test/', type: 'reading',
  title: 'The business of running', dinner: 'If you started a new sport tomorrow, which one would it be, and what would you need to buy?',
  hook: { q: 'Who won the first modern Olympic marathon, in 1896?', o: ['A Greek water carrier', 'An American student', 'A British teacher'], a: 0,
    reveal: '*Spyridon Louis*, a Greek man who carried water for a living. Today, running is a business worth billions. How did that happen?' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A magazine article about how running, the simplest sport in the world, became a big business.',
    predict: { q: 'What do you think runners spend the most money on?', o: ['Shoes', 'Water', 'Races'] } },
  story: { title: 'The business of running', chunks: [
    { text: 'Running looks like the simplest sport in the world. You need no ball, no team and no special field: you just open the door and go. So why do people spend so much money on it? In the 1960s, most runners wore thin, flat shoes. Then, in the early 1970s, an American coach called Bill Bowerman had an idea at breakfast. He poured rubber into his wife\'s waffle maker and made a new kind of sole with a much better grip. He had started a small shoe company with one of his former runners. That company became Nike.',
      items: [
        { k: 'mc', q: 'Why does running look like a simple sport?', o: ['You don\'t need much to do it.', 'It is easy to win.', 'You can only do it in a park.'], a: 0,
          why: '"You need no ball, no team and no special field"' },
        { k: 'mc', q: 'What did Bill Bowerman use to make a new sole?', o: ['a waffle maker', 'a frying pan', 'an old tyre'], a: 0, why: '"He poured rubber into his wife\'s waffle maker"' },
        { k: 'find', q: 'Find a word that means "the way something holds the ground, so you don\'t slip".', a: 'grip', why: 'a good grip = you don\'t slip.' }
      ] },
    { text: 'Today, a pair of top running shoes can cost more than a thousand shekels. Companies spend millions on research, and shoes with special foam and carbon plates help the best runners go a little faster. Then there are watches that measure your heart rate, apps that track every kilometre, special clothes and energy snacks. Big races are a business too. Thousands of people pay to run a marathon, and the city earns money from their hotels, restaurants and shops.',
      items: [
        { k: 'mc', q: 'What do the special foam and carbon plates do?', o: ['They help top runners go a little faster.', 'They make shoes cheaper.', 'They measure your heart rate.'], a: 0,
          why: '"shoes with special foam and carbon plates help the best runners go a little faster."' },
        { k: 'tf', q: 'Cities lose money when they hold a marathon.', a: false, fix: 'The city earns money from the runners\' hotels, restaurants and shops.',
          why: '"the city earns money from their hotels, restaurants and shops."' },
        { k: 'find', q: 'Find a word that means "follow and record" (apps do this to every kilometre).', a: 'track', why: 'track = follow and record.' }
      ] },
    { text: 'But you don\'t have to buy everything to enjoy running. Experts say the most important things are cheap: comfortable shoes that fit you, water, and a plan that starts slowly. In 2004, a runner in London invited some friends to a free five-kilometre run in a park. Only thirteen people came. Today that idea, called parkrun, happens every Saturday morning in more than two thousand parks around the world, and it still costs nothing. Maybe the best thing about running is still free.',
      items: [
        { k: 'mc', q: 'How many people came to the first parkrun?', o: ['thirteen', 'thirty', 'three hundred'], a: 0, why: '"Only thirteen people came."' },
        { k: 'mc', q: 'What do experts say is the most important?', o: ['comfortable shoes, water and a slow start', 'the most expensive shoes', 'a smart watch'], a: 0,
          why: '"comfortable shoes that fit you, water, and a plan that starts slowly."' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the main idea of the article?', o: ['Running is big business, but you can enjoy it without spending much.', 'Expensive shoes make everyone faster.', 'Nobody should run marathons.'], a: 0,
        why: 'It shows how much money there is in running, and ends: the best thing about running is still free.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'You don\'t need expensive shoes to enjoy running.', why: 'need + a thing + to + verb.' }
  ]
},
{
  id: 'bpr03', url: 'https://test-english.com/reading/b1-b2/why-we-cant-stop-lying-b1-english-reading-test/', type: 'reading',
  title: 'Why we can\'t stop lying', dinner: 'Is it ever OK to tell a white lie? When?',
  hook: { q: 'Pinocchio\'s nose grew when he lied. In a study in Spain, what happened to people\'s noses when they lied?', o: ['They got warmer.', 'They got longer.', 'They turned blue.'], a: 0,
    reveal: 'They got *warmer*! Scientists in Granada used heat cameras and found that the skin around the nose can warm up when people lie. A real Pinocchio effect!' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A science article about lying: why we do it, when we start, and why it matters.',
    predict: { q: 'How many lies do you think an average person tells in a day?', o: ['One or two', 'About ten', 'None'] } },
  story: { title: 'Why we can\'t stop lying', chunks: [
    { text: 'Imagine your aunt gives you a jumper that you don\'t like. "Do you like it?" she asks. Most of us smile and say, "I love it!" This kind of small, kind lie is called a white lie, and almost everyone tells them. In one American study, people said they told one or two lies a day on average. But the number of lies was not equal for everyone: most people lied very little, and a small group of people told most of the lies.',
      items: [
        { k: 'mc', q: 'What is a white lie?', o: ['a small lie to be kind', 'a big lie to get money', 'a lie about colours'], a: 0, why: '"This kind of small, kind lie is called a white lie"' },
        { k: 'tf', q: 'In the study, everyone told about the same number of lies.', a: false, fix: 'A small group of people told most of the lies.',
          why: '"most people lied very little, and a small group of people told most of the lies."' },
        { k: 'find', q: 'Find a word that means "the same in number or size".', a: 'equal', why: 'equal = the same.' }
      ] },
    { text: 'Children start lying very early, at about two or three years old. In a famous experiment, a scientist put a toy behind a child and said, "Don\'t look at it while I\'m out of the room." Most of the children looked, and when the scientist came back, many of them said they hadn\'t. Surprisingly, experts say this is a sign of a healthy brain. To lie, a child has to understand that other people don\'t know everything that they know.',
      items: [
        { k: 'mc', q: 'What were the children told in the experiment?', o: ['not to look at a toy', 'to find a hidden toy', 'to tell a story'], a: 0, why: '"Don\'t look at it while I\'m out of the room."' },
        { k: 'mc', q: 'According to experts, early lying is a sign of…', o: ['a healthy brain', 'a serious problem', 'too little sleep'], a: 0, why: '"experts say this is a sign of a healthy brain."' },
        { k: 'find', q: 'Find a word that means "in a way that you didn\'t expect".', a: 'surprisingly', why: 'surprisingly = it is a surprise.' }
      ] },
    { text: 'So why do we keep doing it? Usually to protect someone\'s feelings, to stay out of trouble, or to look better. White lies can make life with other people smoother. But even small lies have a cost: if people catch you lying, they find it harder to trust you. One researcher suggests a simple test before you speak: would you be happy if the other person found out the truth? If the answer is no, try to be kind and honest at the same time.',
      items: [
        { k: 'mc', q: 'What is the cost of lying, according to the text?', o: ['People find it harder to trust you.', 'You have to pay money.', 'You get into trouble at school.'], a: 0,
          why: '"if people catch you lying, they find it harder to trust you."' },
        { k: 'mc', q: 'What is the researcher\'s test?', o: ['Would you be happy if the person found out the truth?', 'Will anyone see you?', 'Is the lie very small?'], a: 0,
          why: '"would you be happy if the other person found out the truth?"' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the main message of the article?', o: ['Lying is very common, but you can be kind and honest at the same time.', 'Children who lie have problems.', 'White lies are always fine.'], a: 0,
        why: 'Everyone lies a little, but small lies have a cost, so try to be kind and honest.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'I told my aunt a white lie about the jumper.', why: 'tell someone a lie: I told my aunt a white lie.',
      he: 'אומרים tell a lie (ולא say a lie): I told her a lie.' }
  ]
},
{
  id: 'bpr04', url: 'https://test-english.com/reading/b1-b2/incredible-hoaxes-b1-english-reading-test/', type: 'reading',
  title: 'Incredible hoaxes', dinner: 'Have you ever been fooled by a joke or a fake photo? What happened?',
  hook: { q: 'In which country do children stick paper fish on people\'s backs on 1 April?', o: ['France', 'Japan', 'Brazil'], a: 0,
    reveal: '*France*! There the day is called "poisson d\'avril", April fish. Today: some of the biggest tricks in history.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A magazine article about hoaxes: clever tricks that fooled thousands of people.',
    predict: { q: 'Which do you think fooled more people?', o: ['A film on TV', 'Photos of fairies', 'Both the same'] } },
  story: { title: 'Incredible hoaxes', chunks: [
    { text: 'On 1 April 1957, the BBC, a serious British TV channel, showed a short film about a family in Switzerland. They were picking spaghetti from trees! A calm reporter explained that, after a mild winter, the spaghetti harvest was excellent that year. At that time, spaghetti was quite unusual in Britain, and many people had no idea how it was made. Hundreds of viewers phoned the BBC. Some of them wanted to know how to grow their own spaghetti tree.',
      items: [
        { k: 'mc', q: 'Why did many British people believe the film?', o: ['It was on a serious channel, and spaghetti was new to them.', 'The reporter was famous for jokes.', 'They had spaghetti trees in their gardens.'], a: 0,
          why: '"a serious British TV channel" and "many people had no idea how it was made."' },
        { k: 'tf', q: 'The film was shown on 1 April.', a: true, why: '"On 1 April 1957": April Fools\' Day.' },
        { k: 'find', q: 'Find a word that means "the time when farmers pick their crops".', a: 'harvest', why: 'harvest = picking the crops.' }
      ] },
    { text: 'Forty years earlier, in 1917, two cousins in an English village, Elsie, who was sixteen, and Frances, who was nine, showed their family photos of themselves with tiny fairies in the garden. Experts studied the photos and could not find a trick. Even Arthur Conan Doyle, the writer of the Sherlock Holmes stories, believed they were real. The truth only came out in the 1980s, when the cousins were old women: the fairies were paper pictures, copied from a children\'s book.',
      items: [
        { k: 'mc', q: 'Who believed that the fairy photos were real?', o: ['the writer of Sherlock Holmes', 'the cousins\' teacher', 'nobody'], a: 0, why: '"Even Arthur Conan Doyle, the writer of the Sherlock Holmes stories, believed they were real."' },
        { k: 'mc', q: 'What were the fairies really?', o: ['paper pictures from a book', 'small dolls', 'insects'], a: 0, why: '"the fairies were paper pictures, copied from a children\'s book."' },
        { k: 'find', q: 'Find a word that means "very small".', a: 'tiny', why: 'tiny = very small.' }
      ] },
    { text: 'Why do clever people believe hoaxes? Often it is because the story comes from someone we trust, like a TV channel, or because we want it to be true. Today, fake photos and videos spread online in minutes, and they look more real than ever. So before you share something surprising, stop and check: who posted it, and do other sources you trust say the same? A good laugh is fine, but don\'t let a hoax fool you.',
      items: [
        { k: 'mc', q: 'What should you do before you share something surprising?', o: ['Check who posted it and what other sources say.', 'Share it quickly.', 'Ask a friend to share it.'], a: 0,
          why: '"stop and check: who posted it, and do other sources you trust say the same?"' },
        { k: 'mc', q: 'Which is NOT a reason in the text why people believe hoaxes?', o: ['The story is very long.', 'It comes from someone we trust.', 'We want it to be true.'], a: 0,
          why: 'The text gives two reasons: someone we trust, and we want it to be true.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the main idea of the article?', o: ['Hoaxes can fool anyone, so check before you believe.', 'TV channels always tell lies.', 'Fairies are real.'], a: 0,
        why: 'Even clever people were fooled, so it is smart to check before you believe or share.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Check who posted it before you share it.', why: 'Check + who posted it (normal order), then before + a sentence.' }
  ]
}
];
