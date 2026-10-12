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
      { k: 'type', q: '"___ did you go with?" "With my cousin."', a: ['who'], why: 'You went with someone: who is the object, so we use did, and with goes to the end.' },
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
      { k: 'spot', s: 'You have a dog, *haven\'t* you?', fix: 'don\'t', why: 'have (= own) takes do in the tag: You have a dog, don\'t you?' },
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
}
];
