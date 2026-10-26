// English Quest missions, level A2 (specs/missions.md). Original content on the topics of test-english.com's map:
// the topic list is theirs, every text, recording and question here is our own. Check: node test/missions-check.js
window.EQ_MISSIONS = window.EQ_MISSIONS || {};
window.EQ_MISSIONS.a2 = [
{
  id: 'a2g01', url: 'https://test-english.com/grammar-points/a2/asking-questions-in-english/', type: 'grammar',
  title: 'Asking questions', dinner: 'What questions can you ask me about my day, in English?',
  hook: { q: 'In the game "20 Questions" you can only ask yes/no questions. How many different things can 20 yes/no questions tell apart?',
    o: ['About 1,000', 'About 1 million', 'About 1 billion'], a: 1,
    reveal: 'About *a million*! Every yes/no question cuts the list in half: 2 × 2 × 2… twenty times is 1,048,576.' },
  learn: { kind: 'rule', title: 'Questions: the helper comes first', form: ['(question word)', 'helper', 'subject', 'verb'],
    lines: ['In a question, the helper verb comes *before* the subject: *Do you* like…? *Does she* live…? *Did they* go…?',
      'With *be* and *can*, just swap them: you are → *Are you*…? she can → *Can she*…?'],
    ex: ['Where *do you* live?', 'What *did she* say?'],
    he: 'בעברית שואלים עם אותו סדר מילים ומשנים רק את הטון: "אתה גר פה?". באנגלית צריך פועל עזר לפני הנושא: Do you live here? בעבר: Did. עם be ועם can פשוט מחליפים מקום: Are you...? Can she...?' },
  steps: [
    { name: 'Spot the pattern', items: [
      { k: 'mc', q: '___ you like pizza?', o: ['Do', 'Does', 'Are'], a: 0, why: 'you → Do. Does is for he, she and it.' },
      { k: 'mc', q: 'Where ___ your sister work?', o: ['does', 'do', 'is'], a: 0, why: 'your sister = she → does. After does the verb has no -s: work.' },
      { k: 'mc', q: 'What ___ you do last weekend?', o: ['did', 'do', 'were'], a: 0, why: 'Last weekend is in the past, so the helper is did.' },
      { k: 'mc', q: '___ she in your class?', o: ['Is', 'Does', 'Do'], a: 0, why: 'With be we just swap: she is → Is she…?' }
    ] },
    { name: 'Complete', items: [
      { k: 'tf', q: '"Where you live?"', a: false, fix: 'Where do you live?', why: 'A question needs a helper verb before the subject: do you.',
        he: 'חסר פועל עזר: Where do you live?' },
      { k: 'type', q: 'What time ___ the film start?', hint: '(do / does / did)', a: ['does'], why: 'the film = it → does.' },
      { k: 'mc', q: 'How many brothers ___ you got?', o: ['have', 'do', 'are'], a: 0, why: 'have got → Have you got…?' },
      { k: 'tf', q: '"Can you swim?"', a: true, why: 'With can we just swap: you can → Can you…?' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Where did you go on holiday?', why: 'question word + did + you + go (no -ed after did).' },
      { k: 'spot', s: 'Does she *likes* chocolate?', fix: 'like', why: 'After does the verb has no -s: Does she like…?' },
      { k: 'build', s: 'What are you doing now?', why: 'With be: What + are + you + doing?' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'What *you* want for dinner?', fix: 'do you', why: 'Add the helper before the subject: What do you want for dinner?' },
    { k: 'type', q: '___ you ever been to London?', hint: '(have / do / are)', a: ['have'], why: 'Have you ever been…? is the present perfect: have + been.' },
    { k: 'build', s: 'Can I ask you a question?', why: 'can + I + ask… We swap can and the subject.' }
  ]
},
{
  id: 'a2g02', url: 'https://test-english.com/grammar-points/a2/subject-questions-questions-preposition/', type: 'grammar',
  title: 'Who did it?', dinner: 'Who did you sit next to at school today?',
  hook: { q: 'Who invented the telephone?', o: ['Alexander Graham Bell', 'Thomas Edison', 'Albert Einstein'], a: 0,
    reveal: '*Alexander Graham Bell* got the patent in 1876. And look at the question: *Who invented* the telephone? No did! When who is the subject, we don\'t use do or did.' },
  learn: { kind: 'rule', title: 'Subject questions and prepositions',
    lines: ['When *who* or *what* is the one doing it, there is no do / does / did: *Who called* you?',
      'When it is the other person or thing, use the helper: *Who did you call*?',
      'A preposition goes to the end: Who are you talking *to*? Where are you *from*?'],
    ex: ['*Who ate* my cake?', 'What are you looking *at*?'],
    he: 'אם "מי" הוא זה שעשה את הפעולה, אין do או did: Who called? (מי התקשר?). אם עשו משהו למישהו, צריך עזר: Who did you call? (למי התקשרת?). ומילת היחס עוברת לסוף המשפט: Who are you talking to? (עם מי אתה מדבר?)' },
  steps: [
    { name: 'Who did it?', items: [
      { k: 'mc', q: '"___ broke the window?" "Tom did."', o: ['Who', 'Who did', 'Who does'], a: 0, why: 'Tom broke it, so who is the subject: no did.' },
      { k: 'mc', q: '"Who ___ you invite to the party?" "Sara and Dan."', o: ['did', 'was', 'are'], a: 0, why: 'You invited them, so who is the object: Who did you invite?' },
      { k: 'mc', q: 'What ___ in the box? Let me see!', o: ['is', 'does', 'do'], a: 0, why: 'What is the subject, with be: What is in the box?' },
      { k: 'tf', q: '"Who did call you last night?"', a: false, fix: 'Who called you last night?', why: 'Someone called you, so who is the subject: no did.' }
    ] },
    { name: 'Prepositions at the end', items: [
      { k: 'mc', q: '"Where are you ___?" "I\'m from Haifa."', o: ['from', 'to', 'at'], a: 0, why: 'be from a place → Where are you from?' },
      { k: 'mc', q: '"Who are you talking ___?" "My best friend."', o: ['to', 'at', 'of'], a: 0, why: 'talk to someone → Who are you talking to?' },
      { k: 'type', q: 'What is this book ___? It looks interesting.', hint: '(about / of / for)', a: ['about'], why: 'A book is about something → What is it about?' },
      { k: 'mc', q: '"What are you looking ___?" "That funny dog!"', o: ['at', 'for', 'to'], a: 0, why: 'look at = use your eyes. (look for = try to find)' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Who wants a piece of cake?', why: 'Who is the subject: Who wants… (no does).' },
      { k: 'build', s: 'Who are you waiting for?', why: 'wait for someone → the preposition goes to the end.' },
      { k: 'spot', s: 'Who *does* lives next door?', fix: '', why: 'Who is the subject, so no does: Who lives next door?' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Who *did* made this mess?', fix: '', why: 'Who made it? Who is the subject, so no did: Who made this mess?' },
    { k: 'type', q: 'Who ___ in the house with the red door?', hint: '(live)', a: ['lives'], why: 'Who is the subject: Who lives…? (he / she → lives)' },
    { k: 'build', s: 'What music do you listen to?', why: 'listen to music → the preposition stays at the end.' }
  ]
},
{
  id: 'a2g03', url: 'https://test-english.com/grammar-points/a2/present-simple-continuous/', type: 'grammar',
  title: 'Every day or right now?', dinner: 'What are you doing right now, and what do you usually do after dinner?',
  hook: { q: 'How many hours a day does a koala sleep?', o: ['About 8', 'About 14', 'About 20'], a: 2,
    reveal: 'About *20 hours*! A koala *sleeps* most of the day (a habit: present simple). Right now it *is* probably *sleeping* (now: present continuous).' },
  learn: { kind: 'rule', title: 'Present simple or present continuous?',
    lines: ['*Present simple* for habits and facts: I *walk* to school every day. Koalas *sleep* a lot.',
      '*Present continuous* (am / is / are + -ing) for now and for these days: I*\'m walking* to school right now.',
      'Helpers: *every day, usually, often* → simple. *now, right now, at the moment, look!* → continuous.'],
    ex: ['She *plays* tennis on Mondays.', 'Look! She *is playing* tennis now.'],
    he: 'בעברית "אני הולך" מתאים גם ל"כל יום" וגם ל"עכשיו". באנגלית מבחינים: הרגל או עובדה = I walk. משהו שקורה עכשיו = I am walking. מילים כמו now, at the moment ו-Look! רומזות על ing.' },
  steps: [
    { name: 'Every day or now?', items: [
      { k: 'mc', q: 'My dad ___ coffee every morning.', o: ['drinks', 'is drinking'], a: 0, why: 'every morning = a habit → present simple.' },
      { k: 'mc', q: 'Shh! The baby ___.', o: ['is sleeping', 'sleeps'], a: 0, why: 'Shh! = it is happening right now → present continuous.' },
      { k: 'mc', q: 'Water ___ at 100 degrees.', o: ['boils', 'is boiling'], a: 0, why: 'A fact, always true → present simple.' },
      { k: 'mc', q: 'Look! It ___ outside!', o: ['is snowing', 'snows'], a: 0, why: 'Look! = it is happening now.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'We usually ___ to the beach on Saturdays.', hint: '(go)', a: ['go'], why: 'usually = a habit → present simple: we go.' },
      { k: 'type', q: 'I can\'t talk now. I ___ my homework.', hint: '(do)', a: ['am doing', '\'m doing'], why: 'now → am + doing.' },
      { k: 'tf', q: '"I am knowing the answer."', a: false, fix: 'I know the answer.', why: 'know is a "state" verb: we don\'t use it with -ing.',
        he: 'יש פעלים של מצב (know, like, want) שלא מקבלים ing: I know.' },
      { k: 'mc', q: '"What are you doing?" "I ___ for my keys."', o: ['am looking', 'look'], a: 0, why: 'What are you doing? asks about now → I am looking.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'She is wearing a red jacket today.', why: 'today, now → is wearing.' },
      { k: 'spot', s: 'He *watch* TV every evening.', fix: 'watches', why: 'he, she, it + -s in the present simple: he watches.' },
      { k: 'build', s: 'How often do you play football?', why: 'How often asks about a habit → do you play.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Right now I *eat* an apple. Yum!', fix: 'am eating', why: 'Right now → I am eating.' },
    { k: 'type', q: 'At the moment my brother ___ a computer game.', hint: '(play)', a: ['is playing', '\'s playing'], why: 'At the moment → is playing.' },
    { k: 'mc', q: 'Which sentence is right?', o: ['I go to bed at ten every night.', 'I am going to bed at ten every night.'], a: 0, why: 'every night = a habit → I go.' }
  ]
},
{
  id: 'a2v01', url: 'https://test-english.com/vocabulary/a2/words-with-prepositions-a2-english-vocabulary/', type: 'vocabulary',
  title: 'Words with prepositions', dinner: 'What are you good at, and what are you afraid of?',
  hook: { q: 'Arachnophobia is a big fear of…', o: ['spiders', 'heights', 'water'], a: 0,
    reveal: '*Spiders*! People with arachnophobia are very afraid *of* spiders. In English it is always afraid *of*, never afraid from.' },
  learn: { kind: 'words', title: 'Eight words and their little partner', words: [
    { w: 'interested in', d: 'wanting to know more about something', ex: 'I am *interested in* history.' },
    { w: 'good at', d: 'able to do something well', ex: 'She is *good at* drawing.' },
    { w: 'afraid of', d: 'scared of something', ex: 'My cat is *afraid of* the vacuum cleaner.' },
    { w: 'proud of', d: 'happy about something good that you or someone did', ex: 'Mum is *proud of* me.' },
    { w: 'listen to', d: 'pay attention to a sound or to music', ex: 'I *listen to* music on the bus.' },
    { w: 'wait for', d: 'stay until someone or something comes', ex: 'We are *waiting for* the bus.' },
    { w: 'think about', d: 'have something in your mind', ex: 'I always *think about* food!' },
    { w: 'belong to', d: 'be someone\'s', ex: 'This bag *belongs to* Noa.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'She is very good ___ maths.', o: ['at', 'in', 'of'], a: 0, why: 'good at something.' },
      { k: 'mc', q: 'Are you afraid ___ the dark?', o: ['of', 'from', 'at'], a: 0, why: 'afraid of. (Not afraid from!)', he: 'בעברית "מפחד מ...", אבל באנגלית afraid of.' },
      { k: 'mc', q: 'We waited ___ an hour, but the bus didn\'t come.', o: ['for', 'to', 'on'], a: 0, why: 'wait for something or someone.' },
      { k: 'mc', q: 'Who does this phone belong ___?', o: ['to', 'of', 'at'], a: 0, why: 'belong to someone.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Which little word goes with each one?', g: ['in', 'at', 'of'],
        w: [['interested', 0], ['good', 1], ['afraid', 2], ['proud', 2], ['bad', 1], ['tired', 2]],
        why: 'interested in · good at, bad at · afraid of, proud of, tired of' },
      { k: 'hear', say: 'I am really proud of you.', q: 'Which word do you hear after "proud"?', o: ['of', 'for', 'at'], a: 0, why: 'proud of someone.' },
      { k: 'spell', w: 'listen', clue: 'You ___ to music.', why: 'listen to music.' },
      { k: 'mc', q: 'I\'m thinking ___ my summer holiday.', o: ['about', 'on', 'for'], a: 0, why: 'think about something.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'A message from Noa',
        t: 'Hi Maya! I\'m waiting [1] you at the café. I\'m so proud [2] you, you won! Are you still interested [3] the film tonight? Text me, I\'m listening [4] music.',
        gaps: [
          { o: ['for', 'to', 'at'], a: 0, why: 'wait for someone.' },
          { o: ['of', 'for', 'about'], a: 0, why: 'proud of someone.' },
          { o: ['in', 'on', 'at'], a: 0, why: 'interested in something.' },
          { o: ['to', 'at', 'on'], a: 0, why: 'listen to music.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I am very good *in* English!', fix: 'at', why: 'good at something: good at English.' },
    { k: 'type', q: 'Tell me! What are you afraid ___?', a: ['of'], why: 'afraid of → What are you afraid of?' }
  ]
},
{
  id: 'a2v02', url: 'https://test-english.com/vocabulary/a2/describing-peoples-appearance-a2-english-vocabulary/', type: 'vocabulary',
  title: 'What does she look like?', dinner: 'What does your best friend look like?',
  hook: { q: 'What is the most common natural hair colour in the world?', o: ['Blond', 'Black', 'Red'], a: 1,
    reveal: '*Black*! Most people in the world have black or dark brown hair. Natural red hair is the rarest: only about 1 or 2 people in 100.' },
  learn: { kind: 'words', title: 'Words to describe people', words: [
    { w: 'tall', d: 'high, not short', ex: 'My brother is very *tall*.' },
    { w: 'slim', d: 'thin, in a nice way', ex: 'She is *slim* and fit.' },
    { w: 'curly', d: 'hair with lots of little circles', ex: 'He has *curly* black hair.' },
    { w: 'straight', d: 'hair that is not curly', ex: 'Her hair is long and *straight*.' },
    { w: 'blond', d: 'yellow or very light hair', ex: 'The baby has *blond* hair.' },
    { w: 'beard', d: 'hair on a man\'s chin and face', ex: 'Grandpa has a white *beard*.' },
    { w: 'freckles', d: 'small brown spots on the skin', ex: 'Sam has *freckles* on his nose.' },
    { w: 'look like', d: 'be similar to someone in how you look', ex: 'You *look like* your mum!' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'Hair with lots of little circles is ___.', o: ['curly', 'straight', 'bald'], a: 0, why: 'curly hair has curls, little circles.' },
      { k: 'mc', q: 'Small brown spots on your face are ___.', o: ['freckles', 'beards', 'glasses'], a: 0, why: 'freckles often come from the sun.' },
      { k: 'mc', q: 'The hair on a man\'s chin is a ___.', o: ['beard', 'fringe', 'ponytail'], a: 0, why: 'a beard grows on the chin and face.' },
      { k: 'mc', q: 'The opposite of tall is ___.', o: ['short', 'slim', 'young'], a: 0, why: 'tall ↔ short.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Is it about the hair or the body?', g: ['hair', 'body'],
        w: [['curly', 0], ['blond', 0], ['straight', 0], ['a ponytail', 0], ['tall', 1], ['slim', 1], ['strong', 1]],
        why: 'hair: curly, blond, straight, a ponytail · body: tall, slim, strong' },
      { k: 'hear', say: 'She has long, straight hair.', q: 'What kind of hair does she have?', o: ['long and straight', 'short and curly', 'long and curly'], a: 0, why: 'long, straight hair.' },
      { k: 'spell', w: 'beard', clue: 'Hair on a man\'s face.', why: 'beard: b-e-a-r-d.' },
      { k: 'mc', q: '"What does your sister look like?" "___"', o: ['She is tall with brown hair.', 'She likes pizza.', 'She is fine, thanks.'], a: 0,
        why: 'What does she look like? asks about how she looks.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Who is it?',
        t: 'My best friend is very [1], even taller than my dad! She has long [2] hair, with lots of little circles. She wears [3] because she can\'t see well, and she has [4] on her nose from the sun.',
        gaps: [
          { o: ['tall', 'short', 'slim'], a: 0, why: 'taller than my dad → tall.' },
          { o: ['curly', 'straight', 'bald'], a: 0, why: 'lots of little circles → curly.' },
          { o: ['glasses', 'a beard', 'freckles'], a: 0, why: 'she can\'t see well → glasses.' },
          { o: ['freckles', 'a beard', 'a fringe'], a: 0, why: 'small brown spots from the sun → freckles.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'She has *a* long hair.', fix: '', why: 'Hair on your head has no "a": She has long hair.', he: 'שיער על הראש הוא לא בן ספירה: long hair, בלי a.' },
    { k: 'type', q: '"What does he look ___?" "He\'s short and he has a beard."', a: ['like'], why: 'What does he look like? asks about his appearance.' }
  ]
},
{
  id: 'a2l01', url: 'https://test-english.com/listening/a2/what-are-your-roommates-like-a2-english-listening-test/', type: 'listening',
  title: 'Roommates at camp', dinner: 'What is your best friend like?',
  hook: { q: 'Astronauts on the International Space Station live together for months. How many people usually live there at the same time?',
    o: ['1 or 2', 'About 7', 'About 20'], a: 1,
    reveal: 'About *7*! Astronauts share their home in space for about six months. They really need roommates who are *tidy* and *friendly*.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'messy', d: 'not tidy, things everywhere' },
    { w: 'friendly', d: 'nice and kind to people' },
    { w: 'noisy', d: 'making a lot of noise' }
  ], predict: { q: 'Ben has two new roommates at summer camp. Does he like them?', o: ['Yes, both of them', 'One yes, one not so much', 'No, neither of them'] } },
  show: { cast: 'Maya and Ben, two friends. Ben is at summer camp.', names: { M: 'Maya', B: 'Ben' }, voices: { M: 'af_heart', B: 'bm_george' },
    parts: [
      { lines: [
        ['M', 'Hi Ben! How is summer camp? Do you like your cabin?'],
        ['B', 'Hi Maya! It\'s great. I share a room with two boys, Leo and Sam.'],
        ['M', 'Oh, nice! What are they like?'],
        ['B', 'Leo is really friendly. He talks to everyone, and he always helps the younger kids.']
      ], items: [
        { k: 'mc', q: 'How many roommates does Ben have?', o: ['two', 'three', 'one'], a: 0, why: '"I share a room with two boys, Leo and Sam."' },
        { k: 'mc', q: 'What is Leo like?', o: ['friendly', 'quiet', 'messy'], a: 0, why: '"Leo is really friendly. He talks to everyone."' }
      ] },
      { lines: [
        ['M', 'And Sam?'],
        ['B', 'Sam is funny, but he\'s very messy. His clothes are all over the floor!'],
        ['M', 'Ha! My brother is the same. Is Sam noisy too?'],
        ['B', 'No, he\'s quiet. He reads a lot. But Leo snores at night, so our room is noisy!']
      ], items: [
        { k: 'mc', q: 'What is the problem with Sam?', o: ['He is messy.', 'He is noisy.', 'He is unfriendly.'], a: 0, why: '"His clothes are all over the floor!"' },
        { k: 'tf', q: 'Sam is noisy.', a: false, fix: 'Sam is quiet. He reads a lot.', why: 'Ben says: "No, he\'s quiet."' },
        { k: 'mc', q: 'Why is the room noisy at night?', o: ['Leo snores.', 'Sam plays music.', 'Ben talks.'], a: 0, why: '"Leo snores at night."' }
      ] },
      { lines: [
        ['M', 'So who is your favourite roommate?'],
        ['B', 'Hmm… Leo, I think. He\'s generous. He shares his snacks with everyone!'],
        ['M', 'That\'s the best kind of roommate. Have fun, Ben!']
      ], items: [
        { k: 'mc', q: 'Who is Ben\'s favourite roommate?', o: ['Leo', 'Sam', 'Maya'], a: 0, why: '"Leo, I think."' },
        { k: 'mc', q: 'Why does Ben like him?', o: ['He shares his snacks.', 'He is tidy.', 'He is quiet.'], a: 0, why: '"He\'s generous. He shares his snacks with everyone!"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'Sam is funny, but he\'s very ___.', a: ['messy'], why: 'messy = not tidy, things all over the place.' },
      { k: 'hear', say: 'He shares his snacks with everyone.', q: 'What does he share?', o: ['his snacks', 'his room', 'his books'], a: 0, why: 'He shares his snacks.' },
      { k: 'mc', q: 'The question "What is Leo like?" asks about…', o: ['his personality', 'his looks', 'his hobbies'], a: 0,
        why: 'What is he like? = personality. What does he look like? = appearance.', he: 'What is he like? = איך הוא כבן אדם. What does he look like? = איך הוא נראה.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'A person who shares things with others is ___.', a: ['generous'], why: 'generous = happy to give and share.' }
  ]
},
{
  id: 'a2l02', url: 'https://test-english.com/listening/a2/checking-into-a-hotel-a2-english-listening-test/', type: 'listening',
  title: 'Checking into a hotel', dinner: 'If we stay in a hotel, what will you ask at reception?',
  hook: { q: 'One of the biggest hotels in the world is in Malaysia. About how many rooms does it have?', o: ['About 700', 'About 7,000', 'About 70,000'], a: 1,
    reveal: 'About *7,000*! The First World Hotel in Malaysia has more than 7,000 rooms. Imagine the line at reception!' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'reception', d: 'the desk where you arrive at a hotel' },
    { w: 'a booking', d: 'a room that you reserved before' },
    { w: 'the lift', d: 'British English for an elevator' }
  ], predict: { q: 'What do people often ask at a hotel reception?', o: ['The wifi password', 'The price of a car', 'The time in Japan'] } },
  show: { cast: 'At the reception of the Sea View Hotel', names: { R: 'Receptionist', G: 'Mr Green' }, voices: { R: 'bf_emma', G: 'am_michael' },
    parts: [
      { lines: [
        ['R', 'Good evening! Welcome to the Sea View Hotel. How can I help you?'],
        ['G', 'Hi. I have a booking. My name is David Green.'],
        ['R', 'Let me check… Yes, Mr Green. A double room for three nights. Is that right?'],
        ['G', 'Yes, that\'s right. Three nights.']
      ], items: [
        { k: 'mc', q: 'What is the guest\'s name?', o: ['David Green', 'David Gray', 'Daniel Green'], a: 0, why: '"My name is David Green."' },
        { k: 'mc', q: 'How many nights is he staying?', o: ['three', 'two', 'four'], a: 0, why: '"A double room for three nights."' }
      ] },
      { lines: [
        ['R', 'Here is your key. You are in room 214, on the second floor. The lift is on your left.'],
        ['G', 'Thank you. What time is breakfast?'],
        ['R', 'Breakfast is from seven to ten, in the restaurant next to the pool.']
      ], items: [
        { k: 'type', q: 'His room number is ___.', a: ['214', 'two hundred and fourteen', 'two one four'], why: '"You are in room 214, on the second floor."' },
        { k: 'mc', q: 'When can he have breakfast?', o: ['from 7 to 10', 'from 6 to 9', 'from 8 to 11'], a: 0, why: '"Breakfast is from seven to ten."' },
        { k: 'mc', q: 'Where is the restaurant?', o: ['next to the pool', 'on the second floor', 'next to the lift'], a: 0, why: '"in the restaurant next to the pool"' }
      ] },
      { lines: [
        ['G', 'Great. And is there wifi in the room?'],
        ['R', 'Yes, it\'s free. The password is on your key card.'],
        ['G', 'Perfect. Oh, and can I check out late on Sunday?'],
        ['R', 'Of course. You can check out at one o\'clock instead of eleven.']
      ], items: [
        { k: 'tf', q: 'The wifi costs money.', a: false, fix: 'The wifi is free.', why: '"Yes, it\'s free."' },
        { k: 'mc', q: 'What time can he check out on Sunday?', o: ['at one o\'clock', 'at eleven o\'clock', 'at ten o\'clock'], a: 0, why: '"at one o\'clock instead of eleven"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'mc', clip: 1, q: '"The lift is on your left." What is a lift?', o: ['an elevator', 'a key', 'a bag'], a: 0, why: 'In British English a lift is an elevator.' },
      { k: 'type', q: 'I have a ___ for two nights. (a room you reserved)', a: ['booking', 'reservation'], why: 'a booking = a reservation.' },
      { k: 'hear', say: 'Can I check out late on Sunday?', q: 'What does he want?', o: ['to leave the hotel later', 'to arrive later', 'to have breakfast later'], a: 0,
        why: 'check out = pay and leave the hotel.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Can I have a room for two nights?', why: 'Can I have…? is a polite way to ask for something.' }
  ]
},
{
  id: 'a2l03', url: 'https://test-english.com/listening/a2/giving-directions-a2-english-listening-test/', type: 'listening',
  title: 'Giving directions', dinner: 'How do you get from our home to your school?',
  hook: { q: 'London taxi drivers must pass a test called "The Knowledge". About how many streets do they learn?', o: ['About 250', 'About 2,500', 'About 25,000'], a: 2,
    reveal: 'About *25,000*! London taxi drivers study for three or four years to learn every street. No map needed!' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'go straight on', d: 'keep walking, don\'t turn' },
    { w: 'turn left', d: 'go to the left side' },
    { w: 'opposite', d: 'on the other side of the street, facing it' }
  ], predict: { q: 'A tourist asks for help in York. What is she looking for?', o: ['A museum', 'A hospital', 'A hotel'] } },
  show: { cast: 'Anna is visiting York. Jack lives there.', names: { A: 'Anna', J: 'Jack' }, voices: { A: 'af_bella', J: 'bm_lewis' },
    parts: [
      { lines: [
        ['A', 'Excuse me, can you help me? I\'m looking for the Science Museum.'],
        ['J', 'Sure! It\'s not far. Go straight on along this street.'],
        ['A', 'Straight on… OK.'],
        ['J', 'Then take the second street on the left. That\'s Park Road.']
      ], items: [
        { k: 'mc', q: 'Where does Anna want to go?', o: ['the Science Museum', 'the train station', 'the park'], a: 0, why: '"I\'m looking for the Science Museum."' },
        { k: 'mc', q: 'Which street does she take?', o: ['the second on the left', 'the first on the left', 'the second on the right'], a: 0, why: '"take the second street on the left"' }
      ] },
      { lines: [
        ['J', 'Walk past the café and the bank. The museum is next to the bank, opposite the park.'],
        ['A', 'Next to the bank, opposite the park. Got it! How long does it take?'],
        ['J', 'About five minutes on foot.']
      ], items: [
        { k: 'mc', q: 'The museum is next to…', o: ['the bank', 'the café', 'the park'], a: 0, why: '"The museum is next to the bank."' },
        { k: 'mc', q: 'What is opposite the museum?', o: ['the park', 'the bank', 'a school'], a: 0, why: '"opposite the park" = on the other side of the street.' },
        { k: 'mc', q: 'How long is the walk?', o: ['about five minutes', 'about fifteen minutes', 'about an hour'], a: 0, why: '"About five minutes on foot."' }
      ] },
      { lines: [
        ['A', 'Is it open today?'],
        ['J', 'Yes, every day except Monday. And it\'s free for students!'],
        ['A', 'Great, I\'m a student. Thank you so much!'],
        ['J', 'You\'re welcome. Enjoy York!']
      ], items: [
        { k: 'tf', q: 'The museum is open on Mondays.', a: false, fix: 'It is open every day except Monday.', why: '"every day except Monday"' },
        { k: 'mc', q: 'Why is it good news for Anna?', o: ['It\'s free for students.', 'It opens late.', 'It has a café.'], a: 0, why: '"It\'s free for students!" And Anna is a student.' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'Go ___ on along this street.', a: ['straight'], why: 'go straight on = keep walking, don\'t turn.' },
      { k: 'mc', q: '"Opposite the park" means…', o: ['on the other side of the street from the park', 'inside the park', 'behind the park'], a: 0, why: 'opposite = facing it, across the street.' },
      { k: 'sort', q: 'Asking the way or giving directions?', g: ['asking', 'giving'],
        w: [['Excuse me, where is…?', 0], ['How do I get to…?', 0], ['Is it far?', 0], ['Go straight on.', 1], ['Turn left.', 1], ['It\'s next to the bank.', 1]],
        why: 'Questions ask the way; instructions give directions.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'How do I get to the station?', why: 'A polite way to ask the way.' }
  ]
},
{
  id: 'a2r01', url: 'https://test-english.com/reading/a2/should-i-tell-my-neighbour-a2-english-reading-test/', type: 'reading',
  title: 'Ask Dr Kind', dinner: 'Do you think Tamar should talk to Mrs Hill? Why?',
  hook: { q: 'About how many words does an average dog understand?', o: ['About 10', 'About 90', 'About 900'], a: 1,
    reveal: 'About *90*! Scientists in Canada found that dogs understand about 89 words, like sit, walk and… treat!' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A girl writes to a magazine because her neighbour\'s dog barks all night. Dr Kind answers her.',
    predict: { q: 'What do you think Dr Kind tells her?', o: ['Talk to your neighbour.', 'Call the police.', 'Get a dog too.'] } },
  story: { title: 'Ask Dr Kind', chunks: [
    { text: 'Dear Dr Kind, I\'m 13 and I live in a flat. My new neighbour, Mrs Hill, has a small white dog called Snowy. Every night, Snowy barks from ten o\'clock until midnight. I can\'t sleep, and I\'m always tired at school. My mum says I should tell Mrs Hill, but I\'m nervous. She is old and she lives alone. What should I do? Tired Tamar',
      items: [
        { k: 'mc', q: 'Why is Tamar tired at school?', o: ['The dog barks at night.', 'She plays games late.', 'Her flat is cold.'], a: 0, why: '"Snowy barks from ten o\'clock until midnight. I can\'t sleep."' },
        { k: 'tf', q: 'Tamar is happy to talk to Mrs Hill.', a: false, fix: 'Tamar is nervous about talking to her.', why: '"My mum says I should tell Mrs Hill, but I\'m nervous."' },
        { k: 'find', q: 'Find a word that means "a bit afraid and worried".', a: 'nervous', why: 'nervous = a bit afraid and worried.' }
      ] },
    { text: 'Dear Tamar, your mum is right. Mrs Hill probably doesn\'t know about the problem. Dogs often bark when their owners go out, or when they are bored. Maybe Mrs Hill goes to a class in the evening, or maybe she is asleep and can\'t hear Snowy.',
      items: [
        { k: 'mc', q: 'Why does Dr Kind think Mrs Hill doesn\'t know?', o: ['Maybe she is out or asleep.', 'She doesn\'t like Tamar.', 'She thinks it\'s funny.'], a: 0,
          why: '"Maybe Mrs Hill goes to a class in the evening, or maybe she is asleep."' },
        { k: 'mc', q: 'Dogs often bark when they are…', o: ['bored', 'full', 'sleepy'], a: 0, why: '"when they are bored"' }
      ] },
    { text: 'Go with your mum and knock on her door in the afternoon. Be polite and friendly. You can say: "Hello, I\'m your neighbour. I love Snowy, but she barks a lot at night and I can\'t sleep." Old people who live alone often like visitors, so maybe you will make a new friend! Good luck, Dr Kind',
      items: [
        { k: 'mc', q: 'When should Tamar visit Mrs Hill?', o: ['in the afternoon', 'at midnight', 'early in the morning'], a: 0, why: '"knock on her door in the afternoon"' },
        { k: 'tf', q: 'Dr Kind says Tamar should go alone.', a: false, fix: 'She should go with her mum.', why: '"Go with your mum."' },
        { k: 'find', q: 'Find a word that means "speaking nicely, with good manners".', a: 'polite', why: 'polite = with good manners.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the best title for Dr Kind\'s answer?', o: ['Talk to her kindly', 'Find a new flat', 'Dogs are bad neighbours'], a: 0,
        why: 'Dr Kind says: go with your mum, be polite and friendly, and talk to her.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'I love Snowy, ___ she barks a lot at night.', hint: '(and / but / so)', a: ['but'], why: 'but shows a contrast: I love her, but there is a problem.' }
  ]
},
{
  id: 'a2u02', url: 'https://test-english.com/use-of-english/a2/a2-english-test-2-multiple-choice-questions/', type: 'use-of-english',
  title: 'The dog who takes the bus', dinner: 'Where would you go if you could take a bus anywhere on your own?',
  hook: { q: 'In Seattle, a dog called Eclipse became famous for…', o: ['riding the bus alone', 'driving a car', 'painting pictures'], a: 0,
    reveal: '*Riding the bus alone*! Eclipse took the bus to the dog park. Today\'s story is made up, but Eclipse was real.' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a funny news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A dog gets on a bus alone. Where do you think he is going?', o: ['To the beach', 'To the vet', 'To school'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'A passenger with four legs',
        t: 'Last week, a big brown dog called Max [1] on the number 12 bus in Brighton, all alone. The driver [2] very surprised, but Max sat down quietly [3] a window. "He was [4] than most passengers!" the driver said later. After ten minutes, Max got [5] the bus at the beach. He [6] for his owner, Mrs Lee, who was there with a picnic. "Max [7] the bus to the beach with me every Saturday," she explained, "but this time he [8] go alone!"',
        gaps: [
          { o: ['got', 'gets', 'getting'], a: 0, why: 'Last week → past simple: got on the bus.' },
          { o: ['was', 'were', 'is'], a: 0, why: 'the driver = he → was.' },
          { o: ['next to', 'between', 'behind of'], a: 0, why: 'next to a window.' },
          { o: ['quieter', 'more quiet', 'quietest'], a: 0, why: 'quiet → quieter (comparing).' },
          { o: ['off', 'out', 'down'], a: 0, why: 'get off a bus. (get out of a car)' },
          { o: ['looked', 'watched', 'saw'], a: 0, why: 'look for = try to find.' },
          { o: ['takes', 'took', 'is taking'], a: 0, why: 'every Saturday = a habit → takes.' },
          { o: ['decided to', 'decided', 'decides to'], a: 0, why: 'decide + to + verb; in the past: decided to go.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'I ___ to London last year.', o: ['went', 'go', 'have gone'], a: 0, why: 'last year → past simple: went.' },
      { k: 'mc', q: 'This bag is ___ than that one.', o: ['heavier', 'heavy', 'more heavy'], a: 0, why: 'heavy → heavier.' },
      { k: 'tf', q: '"We get on the bus at the station."', a: true, why: 'get on a bus or a train.' },
      { k: 'type', q: 'Did you ___ the film yesterday?', hint: '(see)', a: ['see'], why: 'Did + the base verb: Did you see…?' }
    ] }
  ],
  use: [
    { k: 'build', s: 'The dog got off the bus at the beach.', why: 'get off a bus; in the past: got off.' }
  ]
},
{
  id: 'a2g04', url: 'https://test-english.com/grammar-points/a2/past-simple-form-use/', type: 'grammar',
  title: 'What happened?', dinner: 'What was the best thing that happened to you yesterday?',
  hook: { q: 'In which year did people first walk on the Moon?', o: ['1959', '1969', '1979'], a: 1,
    reveal: 'In *1969*! Neil Armstrong and Buzz Aldrin *landed* on the Moon and *walked* on it. landed, walked: the past simple, for things that finished in the past.' },
  learn: { kind: 'rule', title: 'Past simple: finished in the past', form: ['subject', 'verb + -ed / irregular', '(when)'],
    lines: ['Regular verbs add *-ed*: play → *played*, watch → *watched*, stop → *stopped*.',
      'Irregular verbs have their own form: go → *went*, see → *saw*, buy → *bought*.',
      'Negatives (not) and questions use *did* + the base verb: I *didn\'t go*. *Did* you *see* it?'],
    ex: ['We *watched* a film last night.', '*Did* you *go* to the beach? No, I *didn\'t*.'],
    he: 'אחרי did או didn\'t הפועל חוזר לצורת הבסיס, בלי ed ובלי צורה של עבר: I didn\'t go (לא didn\'t went). Did you see? (לא Did you saw?)' },
  steps: [
    { name: 'Spot the pattern', items: [
      { k: 'mc', q: 'We ___ a great film last night.', o: ['watched', 'watch', 'watching'], a: 0, why: 'last night = finished in the past → watched.' },
      { k: 'mc', q: 'Yesterday Noa ___ to school by bike.', o: ['went', 'goed', 'go'], a: 0, why: 'go is irregular: go → went.' },
      { k: 'mc', q: 'I ___ my homework yesterday. Sorry!', o: ['didn\'t do', 'didn\'t did', 'not did'], a: 0, why: 'didn\'t + the base verb: didn\'t do.' },
      { k: 'mc', q: '___ you see the match on Saturday?', o: ['Did', 'Do', 'Were'], a: 0, why: 'A question in the past simple: Did + you + see.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'Last summer we ___ in a small hotel by the sea.', hint: '(stay)', a: ['stayed'], why: 'Regular verb: stay → stayed.' },
      { k: 'tf', q: '"She didn\'t went to the party."', a: false, fix: 'She didn\'t go to the party.', why: 'After didn\'t the verb is in the base form: didn\'t go.',
        he: 'didn\'t כבר אומר שזה עבר, אז הפועל נשאר בסיס: didn\'t go.' },
      { k: 'type', q: 'My little brother ___ his phone on the bus last week.', hint: '(lose)', a: ['lost'], why: 'lose is irregular: lose → lost.' },
      { k: 'mc', q: 'When ___ you start at this school? In 2023?', o: ['did', 'do', 'are'], a: 0, why: 'In 2023 is in the past → When did you start…?' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'We played basketball after school yesterday.', why: 'yesterday → past simple: played.' },
      { k: 'spot', s: 'Did you *saw* my keys?', fix: 'see', why: 'After did the verb is in the base form: Did you see…?' },
      { k: 'build', s: 'Where did you buy those shoes?', why: 'question word + did + you + buy (the base verb).' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Last week I *buyed* a new skateboard.', fix: 'bought', why: 'buy is irregular: buy → bought.' },
    { k: 'type', q: 'Two years ago my family ___ to Eilat.', hint: '(move)', a: ['moved'], why: 'two years ago → past simple: moved.' },
    { k: 'mc', q: 'Which sentence is right?', o: ['I didn\'t see Dan yesterday.', 'I didn\'t saw Dan yesterday.', 'I not saw Dan yesterday.'], a: 0,
      why: 'Negatives in the past simple: didn\'t + the base verb: didn\'t see.' }
  ]
},
{
  id: 'a2g05', url: 'https://test-english.com/grammar-points/a2/past-continuous-past-simple/', type: 'grammar',
  title: 'What were you doing?', dinner: 'What were you doing at four o\'clock this afternoon?',
  hook: { q: 'In 1928 Alexander Fleming found penicillin, the first antibiotic, by accident. Where was he just before that?', o: ['On holiday', 'At a football match', 'In hospital'], a: 0,
    reveal: '*On holiday*! While he *was relaxing* far away, some mould *grew* on a dish in his lab. When he *came* back, he *saw* that the mould killed bacteria.' },
  learn: { kind: 'rule', title: 'Past continuous and past simple', form: ['was / were', 'verb + -ing'],
    lines: ['*Past continuous* (was / were + -ing) for a longer action in the middle of happening: I *was reading*.',
      '*Past simple* for a short action that happened in the middle of it: I was reading when the lights *went* out.',
      '*while* + the longer action, *when* + the short action: *While* I was walking, I *saw* a fox.'],
    ex: ['We *were having* dinner when Grandma *called*.', 'What *were* you *doing* at eight last night?'],
    he: 'בעברית אין צורה מיוחדת ל"הייתי באמצע". באנגלית: הפעולה הארוכה = was / were + ing, והפעולה הקצרה שקטעה אותה = עבר פשוט: I was sleeping when the phone rang.' },
  steps: [
    { name: 'Long or short?', items: [
      { k: 'mc', q: 'I ___ a shower when the phone rang.', o: ['was having', 'were having', 'am having'], a: 0, why: 'The longer action, in the middle: I was having a shower.' },
      { k: 'mc', q: 'While we were walking home, it ___ to rain.', o: ['started', 'starts', 'start'], a: 0, why: 'The short action in the past → past simple: started.' },
      { k: 'mc', q: 'At 8 o\'clock last night my parents ___ TV.', o: ['were watching', 'was watching', 'are watching'], a: 0, why: 'At 8 o\'clock they were in the middle of it. my parents = they → were.' },
      { k: 'mc', q: 'Yoni ___ his arm when he was playing football.', o: ['broke', 'was breaking', 'breaks'], a: 0, why: 'Breaking an arm is a short action → past simple: broke.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'What ___ you doing at seven this morning?', hint: '(was / were)', a: ['were'], why: 'you → were: What were you doing?' },
      { k: 'tf', q: '"They was playing chess."', a: false, fix: 'They were playing chess.', why: 'they → were. was is for I, he, she and it.' },
      { k: 'type', q: 'Maya was cooking when she ___ her finger.', hint: '(cut)', a: ['cut'], why: 'The short action → past simple. cut is the same in the past: cut.' },
      { k: 'mc', q: 'Sorry I didn\'t answer. I ___ my bike.', o: ['was riding', 'am riding', 'were riding'], a: 0, why: 'You were in the middle of riding when the call came: I was riding.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'The dog was sleeping when we came home.', why: 'The longer action: was sleeping. The short one: came.' },
      { k: 'spot', s: 'We *was* having lunch when Grandma arrived.', fix: 'were', why: 'we → were: We were having lunch.' },
      { k: 'build', s: 'What were you doing at nine last night?', why: 'What + were + you + doing…?' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'She was swimming when she *see* a dolphin.', fix: 'saw', why: 'The short action → past simple: saw.' },
    { k: 'type', q: 'While Ori ___ his homework, his cat jumped on the keyboard.', hint: '(do)', a: ['was doing'], why: 'while + the longer action: was doing.' },
    { k: 'mc', q: 'Which sentence is right?', o: ['I was walking home when I met Shira.', 'I was walk home when I met Shira.', 'I were walking home when I met Shira.'], a: 0,
      why: 'I + was + walking (with -ing).' }
  ]
},
{
  id: 'a2g06', url: 'https://test-english.com/grammar-points/a2/purpose-to-for/', type: 'grammar',
  title: 'Why? To… or for…', dinner: 'What did you use your phone or computer for today?',
  hook: { q: 'What does a camel keep in its hump?', o: ['Fat', 'Water', 'Food for its babies'], a: 0,
    reveal: '*Fat*, not water! A camel uses its hump *to store* fat, and the fat is there *for* hard days in the desert, with no food.' },
  learn: { kind: 'rule', title: 'Purpose: to or for?', form: ['to + verb', 'for + noun'],
    lines: ['To say why, use *to* + a verb: I went to the shop *to buy* bread.',
      'Use *for* + a noun: I went to the shop *for* bread.',
      'For what a thing does, use *for* + -ing: A knife is *for cutting*.'],
    ex: ['I called Dana *to ask* about the homework.', 'Let\'s go out *for* a pizza.'],
    he: 'בעברית אומרים "כדי לקנות" או "בשביל לקנות". באנגלית לפני פועל רק to: I came to see you. לא for see ולא for to see. for בא לפני שם עצם: for a pizza.' },
  steps: [
    { name: 'To or for?', items: [
      { k: 'mc', q: 'I went to the library ___ a book.', o: ['to borrow', 'for borrow', 'for to borrow'], a: 0, why: 'Before a verb: to + verb → to borrow.' },
      { k: 'mc', q: 'We stopped at the café ___ a drink.', o: ['for', 'to', 'for to'], a: 0, why: 'a drink is a noun → for a drink.' },
      { k: 'mc', q: 'Scissors are ___ paper.', o: ['for cutting', 'for cut', 'to cutting'], a: 0, why: 'What a thing does: for + -ing → for cutting.' },
      { k: 'mc', q: 'Ella saved her money ___ a new bike.', o: ['to buy', 'for buy', 'buying'], a: 0, why: 'Why did she save? to + verb → to buy.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'Dad went to the supermarket ___ some milk.', hint: '(to / for)', a: ['for'], why: 'some milk is a noun → for some milk.' },
      { k: 'tf', q: '"I came here for see my friend."', a: false, fix: 'I came here to see my friend.', why: 'Before a verb we use to: to see.',
        he: 'בשביל + פועל = to: to see. אין for see.' },
      { k: 'type', q: 'We are going to the park ___ play football.', hint: '(to / for)', a: ['to'], why: 'play is a verb → to play.' },
      { k: 'mc', q: 'What is this button ___?', o: ['for', 'to', 'for to'], a: 0, why: 'What is it for? asks what a thing does.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'I called Grandma to say happy birthday.', why: 'Why did I call? to + verb: to say.' },
      { k: 'spot', s: 'She went to the shop *for* buy some eggs.', fix: 'to', why: 'buy is a verb → to buy.' },
      { k: 'build', s: 'This box is for old toys.', why: 'old toys is a noun → for old toys.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I am learning English *for* watch films without subtitles.', fix: 'to', why: 'watch is a verb → to watch.' },
    { k: 'type', q: 'It was hot, so we went to the beach ___ a swim.', hint: '(to / for)', a: ['for'], why: 'a swim is a noun here → for a swim.' },
    { k: 'mc', q: '"Why did you go to the kitchen?"', o: ['To get a glass of water.', 'For get a glass of water.', 'For to get a glass of water.'], a: 0,
      why: 'We can answer Why…? with to + verb: To get…' }
  ]
},
{
  id: 'a2g07', url: 'https://test-english.com/grammar-points/a2/however-although-time-connectors/', type: 'grammar',
  title: 'Linking words', dinner: 'What did you do after school today, and what did you do after that?',
  hook: { q: 'Penguins are birds, although they can\'t fly. Which bird can fly backwards?', o: ['The hummingbird', 'The eagle', 'The ostrich'], a: 0,
    reveal: 'The *hummingbird*! It can fly backwards *because* it moves its tiny wings in a special way. Ostriches can\'t fly at all. *However*, they run very fast.' },
  learn: { kind: 'rule', title: 'Words that link ideas',
    lines: ['*because* gives the reason: I stayed home *because* I was ill. *so* gives the result: I was ill, *so* I stayed home.',
      '*although* = the opposite of what you expect, in one sentence: *Although* it was cold, we swam.',
      '*However* starts a new sentence, with a comma: It was cold. *However*, we swam.',
      'Order: *first, then, after that, finally*. *before* and *after* + a time or an action: *after* lunch.'],
    ex: ['I was tired, *so* I went to bed.', '*Although* the test was hard, I passed.'],
    he: 'although נמצא בתוך משפט אחד: Although it rained, we played. However פותח משפט חדש ואחריו פסיק: It rained. However, we played. ולא שמים although ו-but באותו משפט.' },
  steps: [
    { name: 'Choose the link', items: [
      { k: 'mc', q: 'I was hungry, ___ I made a sandwich.', o: ['so', 'because', 'although'], a: 0, why: 'I made a sandwich is the result → so.' },
      { k: 'mc', q: 'We stayed at home ___ it was raining.', o: ['because', 'so', 'however'], a: 0, why: 'It was raining is the reason → because.' },
      { k: 'mc', q: '___ Amit was tired, he finished his homework.', o: ['Although', 'However', 'So'], a: 0, why: 'Not what we expect, in one sentence → Although.' },
      { k: 'mc', q: 'The test was hard. ___, everyone passed.', o: ['However', 'Although', 'Because'], a: 0, why: 'A new sentence with a comma, and the opposite of what we expect → However.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'I can\'t come to your party ___ I have a football match.', hint: '(because / so)', a: ['because'], why: 'The match is the reason → because.' },
      { k: 'tf', q: '"Although it was cold, but we went swimming."', a: false, fix: 'Although it was cold, we went swimming.', why: 'Use although or but, not both.',
        he: 'בעברית אומרים "למרות שהיה קר, אבל...". באנגלית מוותרים על ה-but.' },
      { k: 'mc', q: '___ breakfast, I always brush my teeth.', o: ['After', 'Then', 'Finally'], a: 0, why: 'after + a time or an action: After breakfast.' },
      { k: 'mc', q: 'First, mix the flour and the eggs. ___, add the milk.', o: ['Then', 'Before', 'Although'], a: 0, why: 'The next step → Then.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'It was late, so we took a taxi.', why: 'It was late (reason), so (result) we took a taxi.' },
      { k: 'spot', s: 'It was raining, *because* we took our umbrellas.', fix: 'so', why: 'Taking umbrellas is the result of the rain → so.' },
      { k: 'build', s: 'Before dinner, I did my homework.', why: 'before + a time: Before dinner.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'We missed the bus *so* we woke up late.', fix: 'because', why: 'Waking up late is the reason → because.' },
    { k: 'type', q: 'The film was long. ___, it was really good.', hint: '(However / Although)', a: ['However'], why: 'A new sentence with a comma → However.' },
    { k: 'mc', q: 'Which sentence is right?', o: ['Although it was sunny, it was cold.', 'However it was sunny, it was cold.', 'Although it was sunny, but it was cold.'], a: 0,
      why: 'although links two ideas in one sentence, without but.' }
  ]
},
{
  id: 'a2g08', url: 'https://test-english.com/grammar-points/a2/will-vs-be-going-to/', type: 'grammar',
  title: 'Will or going to?', dinner: 'What are you going to do this weekend?',
  hook: { q: 'Halley\'s Comet comes back about every 76 years. When can we see it next?', o: ['In 2031', 'In 2061', 'In 2099'], a: 1,
    reveal: 'In *2061*! Scientists know its path, so it *is going to* come back then. How old *will* you be? Maybe you *will* see it!' },
  learn: { kind: 'rule', title: 'Will or be going to?',
    lines: ['*will* for a decision you make now, an offer or a promise: The phone! I*\'ll* get it.',
      '*be going to* for a plan you made before: I*\'m going to* visit Grandma on Saturday.',
      'Predictions: *I think* … *will* for your opinion; *going to* when you can see it coming: Look at those clouds! It*\'s going to* rain.'],
    ex: ['"I\'m cold." "I*\'ll* close the window."', 'We *are going to* play tennis tomorrow. We booked the court.'],
    he: 'בעברית יש רק עתיד אחד. באנגלית: החלטה של הרגע, הצעה או הבטחה = will. תכנית שכבר החלטת עליה = going to. ואם רואים שמשהו עומד לקרות: It\'s going to rain.' },
  steps: [
    { name: 'Now or planned?', items: [
      { k: 'mc', q: '"The phone is ringing!" "OK, I ___ answer it."', o: ['will', 'am going to', 'am'], a: 0, why: 'A decision you make right now → will.' },
      { k: 'mc', q: 'We ___ visit my cousins in Tel Aviv next weekend. We bought the train tickets yesterday.', o: ['are going to', 'will', 'are visit'], a: 0, why: 'A plan made before (they have tickets) → are going to.' },
      { k: 'mc', q: 'Look at that boy on the wall! He ___ fall!', o: ['is going to', 'will to', 'is going'], a: 0, why: 'You can see it coming → is going to.' },
      { k: 'mc', q: '"I can\'t open this jar." "Give it to me. I ___ help you."', o: ['will', 'going to', 'am go to'], a: 0, why: 'An offer, decided now → I\'ll (I will) help you.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'I promise I ___ tell anyone your secret.', hint: '(won\'t / am not going to)', a: ['won\'t', 'will not'], why: 'A promise → will: I won\'t tell anyone.' },
      { k: 'tf', q: '"Next summer I will to learn to surf."', a: false, fix: 'Next summer I will learn to surf.', why: 'After will there is no to: will learn.',
        he: 'אחרי will בא הפועל בלי to: will learn. אבל going to כן צריך to: going to learn.' },
      { k: 'mc', q: 'I think Brazil ___ win the World Cup.', o: ['will', 'is going', 'are going'], a: 0, why: 'I think + your opinion about the future → will.' },
      { k: 'mc', q: '"What are your plans for the holiday?" "We ___ go camping."', o: ['are going to', 'will to', 'go to'], a: 0, why: 'Plans made before → are going to.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'I am going to make a cake for Mum.', why: 'A plan → am going to + make.' },
      { k: 'spot', s: 'I think it *wills* be sunny tomorrow.', fix: 'will', why: 'will never changes: it will, she will, they will.' },
      { k: 'build', s: 'Will you help me with my homework?', why: 'A question with will: Will + you + help…?' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Tomorrow I *going* to play tennis with Dana.', fix: 'am going', why: 'be going to needs be: I am going to play.' },
    { k: 'type', q: '"It\'s dark in here." "Wait, I ___ turn on the light."', hint: '(will / am going to)', a: ['will', '\'ll'], why: 'A decision made right now → will (I\'ll).' },
    { k: 'mc', q: 'Which sentence is right?', o: ['Look at the clouds! It\'s going to rain.', 'Look at the clouds! It rains.', 'Look at the clouds! It going to rain.'], a: 0,
      why: 'You can see it coming → It is going to rain.' }
  ]
},
{
  id: 'a2g09', url: 'https://test-english.com/grammar-points/a2/present-continuous-future-arrangements/', type: 'grammar',
  title: 'My plans this week', dinner: 'What are you doing tomorrow after school?',
  hook: { q: 'Astronauts on the International Space Station plan every day. How many times a day does the station go around the Earth?', o: ['About 2', 'About 16', 'About 50'], a: 1,
    reveal: 'About *16*! It goes around the Earth every 90 minutes. Its days are planned: "Tomorrow we *are doing* an experiment."' },
  learn: { kind: 'rule', title: 'Present continuous for plans', form: ['am / is / are', 'verb + -ing', 'future time'],
    lines: ['For a plan that is fixed (a time, a place, other people), use am / is / are + -ing: I*\'m meeting* Dan at five.',
      'A future time word shows it is the future: *tomorrow, tonight, on Friday, next week*.',
      'For your plans, don\'t say "I meet Dan tomorrow". Say: I*\'m meeting* Dan tomorrow.'],
    ex: ['We *are flying* to Rome on Monday.', 'What *are* you *doing* on Saturday?'],
    he: 'בעברית אומרים "אני פוגש את דן מחר". באנגלית צריך ing: I\'m meeting Dan tomorrow (לא I meet). מילת הזמן, כמו tomorrow או on Friday, מראה שזה עתיד.' },
  steps: [
    { name: 'Plans', items: [
      { k: 'mc', q: 'I ___ my grandparents on Saturday. It\'s all planned.', o: ['am visiting', 'visiting', 'visit'], a: 0, why: 'A fixed plan → am visiting.' },
      { k: 'mc', q: 'What ___ you doing tomorrow evening?', o: ['are', 'do', 'will'], a: 0, why: 'are + you + doing: a question about plans.' },
      { k: 'mc', q: 'My sister ___ to Eilat on Friday. She has a plane ticket.', o: ['is flying', 'fly', 'flying'], a: 0, why: 'A fixed plan, she → is flying.' },
      { k: 'mc', q: 'We ___ a party next Saturday. Do you want to come?', o: ['are having', 'are have', 'having'], a: 0, why: 'are + -ing: are having.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'Tomorrow at four I ___ Gal at the swimming pool.', hint: '(meet)', a: ['am meeting', '\'m meeting'], why: 'A plan with a time and a place → am meeting.' },
      { k: 'tf', q: '"Are you coming to my birthday party on Friday?"', a: true, why: 'are + you + coming, with on Friday: a question about a plan.' },
      { k: 'tf', q: '"I play in a concert tonight."', a: false, fix: 'I\'m playing in a concert tonight.', why: 'A fixed plan → am + -ing: I\'m playing.',
        he: 'תכנית קבועה לעתיד: I\'m playing, לא I play.' },
      { k: 'mc', q: '"I\'m flying to London next week." Is this about now or the future?', o: ['the future', 'now'], a: 0, why: 'next week → it is a plan for the future.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'We are going to the cinema tonight.', why: 'are + going (go + -ing) + tonight.' },
      { k: 'spot', s: 'Liam *are* playing basketball after school tomorrow.', fix: 'is', why: 'Liam = he → is playing.' },
      { k: 'build', s: 'What time are you leaving tomorrow?', why: 'What time + are + you + leaving?' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Next Sunday we *visiting* the zoo with our class.', fix: 'are visiting', why: 'Don\'t forget are: we are visiting.' },
    { k: 'type', q: 'Sorry, I can\'t play on Thursday. My dad ___ me to the dentist.', hint: '(take)', a: ['is taking', '\'s taking'], why: 'A fixed plan → is taking.' },
    { k: 'mc', q: 'Which one is a plan for the future?', o: ['I\'m meeting Rona at the mall at six.', 'I meet Rona every day.', 'I met Rona at six.'], a: 0,
      why: 'am + -ing with a time → a plan.' }
  ]
},
{
  id: 'a2u01', url: 'https://test-english.com/use-of-english/a2/a2-english-test-1-text-multiple-choice-gaps/', type: 'use-of-english',
  title: 'A new student with hooves', dinner: 'Which animal would you like to see at your school for a day?',
  hook: { q: 'Which of these animals can sleep standing up?', o: ['Horses', 'Cats', 'Rabbits'], a: 0,
    reveal: '*Horses*! They can lock their legs and sleep standing up. Today\'s story is about a pony, a small horse. The story is made up!' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a funny news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A pony walks into a school playground. What do you think happens?', o: ['The children can\'t stop watching it.', 'It eats the homework.', 'It goes into a classroom.'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'A visitor in the playground',
        t: 'On Monday morning, the students at Green Hill School [1] a big surprise. A small grey pony was standing in the middle [2] the playground! Nobody knew [3] it came from. The head teacher, Mr Cohen, gave it some water and [4] apples. All morning the children [5] stop looking out of the windows. At lunchtime, a farmer arrived [6] his tractor. "Her name is Bella," he said. "She opened the gate of her field [7] ran away. I [8] her everywhere!"',
        gaps: [
          { o: ['had', 'have', 'having'], a: 0, why: 'On Monday morning, a story in the past → had.' },
          { o: ['of', 'in', 'at'], a: 0, why: 'in the middle of something.' },
          { o: ['where', 'what', 'who'], a: 0, why: 'come from a place → where it came from.' },
          { o: ['some', 'any', 'a'], a: 0, why: 'some + a plural in a positive sentence: some apples.' },
          { o: ['couldn\'t', 'mustn\'t', 'didn\'t can'], a: 0, why: 'The past of can\'t is couldn\'t.' },
          { o: ['on', 'at', 'to'], a: 0, why: 'arrive on a tractor (or on a bike, on a horse).' },
          { o: ['and', 'but', 'or'], a: 0, why: 'Two actions one after the other: opened the gate and ran away.' },
          { o: ['looked for', 'looked at', 'looked after'], a: 0, why: 'look for = try to find.', he: 'look for = לחפש. look after = לטפל, לשמור על.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'Can I have ___ water, please?', o: ['some', 'a', 'many'], a: 0, why: 'water is uncountable → some water.' },
      { k: 'mc', q: 'I couldn\'t sleep because I was ___ excited.', o: ['too', 'enough', 'much'], a: 0, why: 'too + adjective = more than is good.' },
      { k: 'tf', q: '"Our dog ran away from the garden yesterday."', a: true, why: 'yesterday → past simple: ran (run is irregular).' },
      { k: 'type', q: 'Where ___ the pony come from?', hint: '(do / does / did)', a: ['did'], why: 'A question in the past: did + come.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'The farmer looked for his pony everywhere.', why: 'look for = try to find; in the past: looked for.' }
  ]
},
{
  id: 'a2u03', url: 'https://test-english.com/use-of-english/a2/a2-english-test-3-text-with-multiple-choice-gaps/', type: 'use-of-english',
  title: 'The match in the rain', dinner: 'What was the best idea you had this week?',
  hook: { q: 'How long is a normal football match, without the break?', o: ['60 minutes', '90 minutes', '120 minutes'], a: 1,
    reveal: '*90 minutes*: two halves of 45 minutes. Today\'s story is about a very wet match. The story is made up!' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a funny news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'It is raining very hard during a football match. What do you think the coach says?', o: ['Play in your socks!', 'Go home!', 'Run faster!'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'Football in socks',
        t: 'Last Friday, the girls\' football team from Rimon School [1] their first big match. It was raining very hard, and the grass was [2] wet that the ball stopped in the water. At half-time, there were no goals yet, and the players were cold and tired. [3] their coach, Dana, had an idea. "Take off your boots [4] play in your socks!" she said. The girls laughed, but they did it. Ten minutes later, Shira [5] the ball into the net. The other team couldn\'t [6] the ball at all. In the end, Rimon School won by three goals. "It wasn\'t the [7] way to play football," said Dana, "but it was the [8] fun!"',
        gaps: [
          { o: ['played', 'plays', 'playing'], a: 0, why: 'Last Friday → past simple: played.' },
          { o: ['so', 'such', 'too'], a: 0, why: 'so + adjective + that: so wet that…' },
          { o: ['Then', 'Although', 'Because'], a: 0, why: 'The next thing that happened → Then.' },
          { o: ['and', 'or', 'but'], a: 0, why: 'Two things to do, one after the other → and.' },
          { o: ['kicked', 'kicks', 'was kick'], a: 0, why: 'Ten minutes later, a short action in the past → kicked.' },
          { o: ['control', 'controlled', 'controls'], a: 0, why: 'couldn\'t + the base verb: couldn\'t control.' },
          { o: ['best', 'better', 'good'], a: 0, why: 'the + superlative: the best way.' },
          { o: ['most', 'more', 'much'], a: 0, why: 'the most fun = more fun than anything else.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'The water was ___ cold that we got out quickly.', o: ['so', 'such', 'very'], a: 0, why: 'so + adjective + that.' },
      { k: 'mc', q: 'This is the ___ day of my life!', o: ['best', 'goodest', 'better'], a: 0, why: 'good → better → the best.' },
      { k: 'tf', q: '"She couldn\'t to find her boots."', a: false, fix: 'She couldn\'t find her boots.', why: 'After couldn\'t there is no to: couldn\'t find.' },
      { k: 'type', q: 'Our team ___ the match last Friday!', hint: '(win)', a: ['won'], why: 'win is irregular: win → won.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'In the end, our team won the match.', why: 'In the end = finally, after everything.' }
  ]
},
{
  id: 'a2u04', url: 'https://test-english.com/use-of-english/a2/a2-english-test-4-multiple-choice-questions/', type: 'use-of-english',
  title: 'Bees on the roof', dinner: 'What unusual hobby would you like to try?',
  hook: { q: 'Bees make honey from…', o: ['nectar, the sweet juice in flowers', 'green leaves', 'rain water'], a: 0,
    reveal: '*Nectar*, the sweet juice inside flowers! Today\'s story is made up, but bees really do this.' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a news story about a boy with an unusual hobby (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A boy keeps bees on the roof of his building. What do the neighbours think?', o: ['They love his honey.', 'They are angry.', 'They don\'t know.'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'The boy who keeps bees',
        t: 'Eli is 14 and he has a very unusual hobby. He [1] bees! Two years ago, his grandfather [2] him a small beehive, and now it is on the roof of their building in Jerusalem. "At first I was afraid [3] the bees," Eli says, "but now I love them." Every morning before school, he [4] the hive to check that everything is OK. He always wears a special suit, so the bees can\'t sting him. Last summer, the bees made [5] honey that Eli gave a jar to every neighbour. "It\'s [6] than the honey from the supermarket," says his neighbour, Mrs Levi. Next year, Eli [7] start a bee club at his school. "Bees are very important [8] our planet," he says.',
        gaps: [
          { o: ['keeps', 'kept', 'keep'], a: 0, why: 'A hobby he has now, he → keeps.' },
          { o: ['gave', 'give', 'was giving'], a: 0, why: 'Two years ago → past simple: gave.' },
          { o: ['of', 'from', 'with'], a: 0, why: 'afraid of something.', he: 'בעברית "מפחד מ...", אבל באנגלית afraid of, לא afraid from.' },
          { o: ['visits', 'visit', 'is visiting'], a: 0, why: 'Every morning = a habit; he → visits.' },
          { o: ['so much', 'so many', 'too much'], a: 0, why: 'honey is uncountable → so much honey that…' },
          { o: ['better', 'best', 'more good'], a: 0, why: 'Comparing two things: good → better than.' },
          { o: ['is going to', 'will to', 'going to'], a: 0, why: 'A plan → is going to start.' },
          { o: ['for', 'at', 'of'], a: 0, why: 'important for someone or something.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'I\'m afraid ___ spiders.', o: ['of', 'from', 'at'], a: 0, why: 'afraid of something.' },
      { k: 'mc', q: 'Every morning my mum ___ our dog in the park.', o: ['walks', 'walk', 'is walk'], a: 0, why: 'Every morning = a habit; she → walks.' },
      { k: 'tf', q: '"Next week we going to visit Grandpa."', a: false, fix: 'Next week we are going to visit Grandpa.', why: 'be going to needs be: we are going to.' },
      { k: 'type', q: 'This apple is ___ than that one.', hint: '(sweet)', a: ['sweeter'], why: 'A short adjective + -er: sweet → sweeter.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Bees are very important for our planet.', why: 'important for something.' }
  ]
},
{
  id: 'a2v03', url: 'https://test-english.com/vocabulary/a2/describing-peoples-personality-a2-english-vocabulary/', type: 'vocabulary',
  title: 'What is she like?', dinner: 'Which three words describe your personality best?',
  hook: { q: 'Scientists watched octopuses in an aquarium for many days. What did they find?',
    o: ['Each octopus has its own personality.', 'All octopuses act the same.', 'Octopuses sleep all day.'], a: 0,
    reveal: '*Each one is different!* Some octopuses are *shy* and hide, others are brave and curious. Animals can have a personality too.' },
  learn: { kind: 'words', title: 'Eight words for personality', words: [
    { w: 'kind', d: 'nice to other people, happy to help', ex: 'My grandma is very *kind*. She helps everyone.' },
    { w: 'shy', d: 'a bit afraid to talk to new people', ex: 'Ella is *shy*, so she doesn\'t talk much in class.' },
    { w: 'funny', d: 'making people laugh', ex: 'Our maths teacher is really *funny*.' },
    { w: 'clever', d: 'quick at learning and thinking', ex: 'Ido is *clever*. He can do hard puzzles.' },
    { w: 'lazy', d: 'not wanting to work or do anything', ex: 'My cat is so *lazy*. It sleeps all day.' },
    { w: 'hard-working', d: 'working a lot and doing your best', ex: 'Maya is *hard-working*. She always does her homework.' },
    { w: 'patient', d: 'able to wait without getting angry', ex: 'You need to be *patient* when you teach a puppy.' },
    { w: 'honest', d: 'always telling the truth', ex: 'Omer is *honest*. He never tells lies.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'Dana never talks in class, and her face goes red when people look at her. She is ___.', o: ['shy', 'lazy', 'funny'], a: 0, why: 'shy = a bit afraid to talk to people.' },
      { k: 'mc', q: 'My brother stays in bed until twelve and never helps at home. He is ___.', o: ['lazy', 'kind', 'honest'], a: 0, why: 'lazy = not wanting to do anything.' },
      { k: 'mc', q: 'Our teacher never gets angry when we ask the same question again. She is very ___.', o: ['patient', 'shy', 'lazy'], a: 0, why: 'patient = able to wait and not get angry.' },
      { k: 'mc', q: 'Noam found a wallet in the street and took it to the police. He is ___.', o: ['honest', 'lazy', 'shy'], a: 0, why: 'honest people tell the truth and give back what isn\'t theirs.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Nice to have, or not so nice?', g: ['nice to have', 'not so nice'],
        w: [['kind', 0], ['honest', 0], ['patient', 0], ['hard-working', 0], ['lazy', 1], ['rude', 1], ['unfriendly', 1]],
        why: 'nice: kind, honest, patient, hard-working · not so nice: lazy, rude, unfriendly' },
      { k: 'hear', say: 'My cousin is really funny. She always makes us laugh.', q: 'What is the cousin like?', o: ['funny', 'shy', 'lazy'], a: 0, why: 'She makes us laugh → funny.' },
      { k: 'spell', w: 'clever', clue: 'Quick at learning and thinking.', why: 'clever: c-l-e-v-e-r.' },
      { k: 'mc', q: '"What is your new teacher like?" "___"', o: ['She is kind and very patient.', 'She is tall with short hair.', 'She likes coffee.'], a: 0,
        why: 'What is she like? asks about her personality.', he: 'What is she like? = איך היא כבן אדם (אופי). What does she look like? = איך היא נראית.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'My friend Yoav',
        t: 'My best friend Yoav is very [1]: he always makes me laugh. He is also [2]: he studies a lot and does his best in every lesson. He isn\'t [3] at all; he talks to everyone in our class. And he is [4]: when I was ill, he brought me my homework and some biscuits.',
        gaps: [
          { o: ['funny', 'shy', 'lazy'], a: 0, why: 'he makes me laugh → funny.' },
          { o: ['hard-working', 'lazy', 'rude'], a: 0, why: 'he studies a lot and does his best → hard-working.' },
          { o: ['shy', 'kind', 'funny'], a: 0, why: 'he talks to everyone → he isn\'t shy.' },
          { o: ['kind', 'lazy', 'rude'], a: 0, why: 'he helped a friend who was ill → kind.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Our new neighbour is very *sympathetic*. He always says hello and smiles.', fix: 'friendly',
      why: 'In English, sympathetic means you understand someone\'s problem and feel sorry for them. For a nice, smiley person say friendly or nice.',
      he: '"סימפטי" בעברית זה נחמד. באנגלית sympathetic זה מישהו שמבין את הצער שלך. לאדם נחמד אומרים friendly או nice.' },
    { k: 'type', q: 'A person who is ___ never tells lies.', a: ['honest'], why: 'honest = always telling the truth.' }
  ]
},
{
  id: 'a2v04', url: 'https://test-english.com/vocabulary/a2/shops-and-shopping-a2-english-vocabulary/', type: 'vocabulary',
  title: 'Shops and shopping', dinner: 'What is your favourite shop, and what do you buy there?',
  hook: { q: 'Before 1937, shoppers carried baskets. What did Sylvan Goldman invent for his shops in 1937?',
    o: ['the shopping trolley', 'the credit card', 'the shopping centre'], a: 0,
    reveal: 'The *shopping trolley*! At first, people didn\'t want to use it, so Goldman paid people to walk around his shop with trolleys. Soon everybody wanted one.' },
  learn: { kind: 'words', title: 'Words for the shops', words: [
    { w: 'the chemist\'s', d: 'a shop that sells medicine, soap and sun cream', ex: 'I bought some medicine at the *chemist\'s*.' },
    { w: 'the baker\'s', d: 'a shop that sells bread and cakes', ex: 'The *baker\'s* smells wonderful in the morning.' },
    { w: 'a bookshop', d: 'a shop that sells books and comics', ex: 'We found a great comic in the *bookshop*.' },
    { w: 'cash', d: 'money in coins and notes', ex: 'Can I pay in *cash*?' },
    { w: 'a receipt', d: 'the paper you get after you pay', ex: 'Keep the *receipt* if you want to change it.' },
    { w: 'change', d: 'the money you get back when you pay too much', ex: 'Here is your *change*: two pounds.' },
    { w: 'try on', d: 'put on clothes in a shop to see if they fit', ex: 'Can I *try on* these jeans?' },
    { w: 'a bargain', d: 'something good that costs much less than usual', ex: 'Only £5? What a *bargain*!' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'You can buy medicine at the ___.', o: ['chemist\'s', 'baker\'s', 'bookshop'], a: 0, why: 'In British English the chemist\'s sells medicine.',
        he: 'בית מרקחת: בבריטניה the chemist\'s, בארה"ב pharmacy.' },
      { k: 'mc', q: 'The paper that shows what you paid is the ___.', o: ['receipt', 'change', 'cash'], a: 0, why: 'a receipt = the paper you get after you pay.' },
      { k: 'mc', q: 'The comic costs £8. I give the shop assistant £10. My ___ is £2.', o: ['change', 'receipt', 'price'], a: 0, why: 'change = the money you get back.' },
      { k: 'mc', q: 'This jacket was £60, and now it is only £15. What a ___!', o: ['bargain', 'receipt', 'cash'], a: 0, why: 'a bargain = something that costs much less than usual.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Where can you buy it?', g: ['the baker\'s', 'a bookshop', 'the chemist\'s'],
        w: [['bread', 0], ['cakes', 0], ['comics', 1], ['a dictionary', 1], ['medicine', 2], ['sun cream', 2]],
        why: 'the baker\'s: bread, cakes · a bookshop: comics, a dictionary · the chemist\'s: medicine, sun cream' },
      { k: 'hear', say: 'Excuse me, can I try on this hoodie, please?', q: 'Where is the speaker?', o: ['in a clothes shop', 'at the baker\'s', 'at the chemist\'s'], a: 0,
        why: 'You try on clothes, so the speaker is in a clothes shop.' },
      { k: 'spell', w: 'receipt', clue: 'The paper you get after you pay.', why: 'receipt: the p is silent! r-e-c-e-i-p-t.' },
      { k: 'mc', q: 'How ___ is this T-shirt?', o: ['much', 'many', 'cost'], a: 0, why: 'How much is it? asks about the price.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'At the bookshop',
        t: 'Gal wanted a comic for her brother\'s birthday. "How [1] is this one?" she asked. "It\'s £6," said the shop assistant, "but today all comics are half price." Only £3! What a [2]! Gal didn\'t have any cash, so she paid by [3]. "Here is your [4]," said the assistant. "Keep it if your brother wants to change the comic."',
        gaps: [
          { o: ['much', 'many', 'cost'], a: 0, why: 'How much is it? asks about the price.' },
          { o: ['bargain', 'receipt', 'chemist\'s'], a: 0, why: 'Half price → a bargain.' },
          { o: ['card', 'receipt', 'change'], a: 0, why: 'pay by card (no cash, so a bank card).' },
          { o: ['receipt', 'change', 'bargain'], a: 0, why: 'You keep the receipt if you want to change something later. She paid by card, so there is no change.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I paid, and the man gave me the *recipe*.', fix: 'receipt', why: 'A receipt is the paper after you pay. A recipe tells you how to cook something!' },
    { k: 'build', s: 'How much does this jacket cost?', why: 'How much + does + it + cost? (cost has no -s after does)' }
  ]
},
{
  id: 'a2v05', url: 'https://test-english.com/vocabulary/a2/clothes-a2-english-vocabulary/', type: 'vocabulary',
  title: 'What are you wearing?', dinner: 'What clothes do you wear on a cold winter day?',
  hook: { q: 'The first blue jeans were made in 1873. Who were they for?', o: ['workers, like miners', 'rock stars', 'schoolchildren'], a: 0,
    reveal: '*Workers!* Levi Strauss and Jacob Davis made strong trousers for people who did hard work, like miners. Today almost everybody has a pair of jeans.' },
  learn: { kind: 'words', title: 'Eight words about clothes', words: [
    { w: 'a hoodie', d: 'a warm top with a hood for your head', ex: 'I wear my grey *hoodie* every day in winter.' },
    { w: 'a jumper', d: 'a warm top, often made of wool', ex: 'Grandma made me a red *jumper*.' },
    { w: 'trainers', d: 'shoes for sport and running', ex: 'Don\'t forget your *trainers* for PE!' },
    { w: 'a scarf', d: 'a long piece of material you wear around your neck', ex: 'It\'s windy. Take a *scarf*.' },
    { w: 'sandals', d: 'open summer shoes', ex: 'I wear *sandals* to the beach.' },
    { w: 'pyjamas', d: 'clothes you wear in bed', ex: 'My little brother has dinosaur *pyjamas*.' },
    { w: 'put on', d: 'start to wear clothes', ex: '*Put on* your coat. We\'re going out.' },
    { w: 'take off', d: 'stop wearing clothes, remove them', ex: 'Please *take off* your shoes at the door.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'Shoes for sport and running are ___.', o: ['trainers', 'sandals', 'slippers'], a: 0, why: 'trainers = sports shoes.',
        he: 'נעלי ספורט: בבריטניה trainers, בארה"ב sneakers.' },
      { k: 'mc', q: 'It\'s cold. Wear a ___ around your neck.', o: ['scarf', 'cap', 'belt'], a: 0, why: 'You wear a scarf around your neck.' },
      { k: 'mc', q: 'A warm top with a hood is a ___.', o: ['hoodie', 'skirt', 'T-shirt'], a: 0, why: 'hood → hoodie.' },
      { k: 'mc', q: 'You wear ___ in bed.', o: ['pyjamas', 'jeans', 'trainers'], a: 0, why: 'pyjamas = clothes for bed.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'For a hot day or a cold day?', g: ['hot day', 'cold day'],
        w: [['shorts', 0], ['sandals', 0], ['a T-shirt', 0], ['sunglasses', 0], ['a scarf', 1], ['gloves', 1], ['a jumper', 1], ['a coat', 1]],
        why: 'hot: shorts, sandals, a T-shirt, sunglasses · cold: a scarf, gloves, a jumper, a coat' },
      { k: 'hear', say: 'Take off your shoes, please. The floor is wet.', q: 'What does she ask?', o: ['Take your shoes off.', 'Put your shoes on.', 'Buy new shoes.'], a: 0,
        why: 'take off = remove.' },
      { k: 'spell', w: 'jumper', clue: 'A warm top, often made of wool.', why: 'jumper: j-u-m-p-e-r. (In American English: a sweater.)' },
      { k: 'mc', q: 'I always ___ a hat in the sun.', o: ['wear', 'dress', 'put'], a: 0, why: 'wear + clothes: I wear a hat.',
        he: 'ללבוש בגד = wear: I wear a hat. לא אומרים dress a hat.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Packing for the Golan',
        t: 'We are going to the Golan for the weekend. It\'s hot in the day, so I\'m taking [1] and a T-shirt. At night it\'s cold, so Mum says I need a warm [2]. For long walks I\'m taking my [3], not my sandals. And of course my [4] for sleeping!',
        gaps: [
          { o: ['shorts', 'gloves', 'a coat'], a: 0, why: 'hot in the day → shorts.' },
          { o: ['hoodie', 'sandals', 'sunglasses'], a: 0, why: 'cold at night → a warm hoodie.' },
          { o: ['trainers', 'pyjamas', 'scarf'], a: 0, why: 'For long walks you need good shoes → trainers.' },
          { o: ['pyjamas', 'trainers', 'jeans'], a: 0, why: 'for sleeping → pyjamas.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Wait! I need to *wear* my coat before we go out.', fix: 'put on', why: 'put on = the action of getting dressed. wear = you have it on: I am wearing my coat.',
      he: 'put on = הפעולה (לשים על עצמך). wear = המצב (זה עליך). "תלבש מעיל" = Put on your coat.' },
    { k: 'type', q: 'It\'s hot in here. I\'m going to take ___ my hoodie.', a: ['off'], why: 'take off = stop wearing.' }
  ]
},
{
  id: 'a2l04', url: 'https://test-english.com/listening/a2/do-your-kids-help-with-household-chores-a2-english-listening-test/', type: 'listening',
  title: 'Who does the chores?', dinner: 'Which chore at home do you like most, and which one do you hate?',
  hook: { q: 'Josephine Cochrane made the first dishwasher that really worked, in 1886. Why?', o: ['People broke her best plates.', 'She was a famous cook.', 'She wanted to be rich.'], a: 0,
    reveal: '*People broke her best plates* when they washed them by hand, so she built a machine to do it. Today millions of kids *load the dishwasher* every night!' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'chores', d: 'jobs in the house, like cleaning and tidying' },
    { w: 'load the dishwasher', d: 'put dirty plates and cups into the dishwasher' },
    { w: 'pocket money', d: 'money parents give kids every week' }
  ], predict: { q: 'Do the kids on the show get pocket money for their chores?', o: ['Yes, both of them', 'One of them', 'No, neither of them'] } },
  show: { cast: 'A radio show for families. Kate talks to two kids, Itai and Shira.', names: { K: 'Kate', I: 'Itai', S: 'Shira' }, voices: { K: 'bf_emma', I: 'bm_george', S: 'af_heart' },
    parts: [
      { lines: [
        ['K', 'Welcome to Family Time! Today\'s question: do kids help at home? Itai is twelve. Itai, what chores do you do?'],
        ['I', 'I take out the rubbish every evening, and I feed our dog, Pita. I love that job!'],
        ['K', 'And do you tidy your room?'],
        ['I', 'Well… on Fridays. My mum checks it!']
      ], items: [
        { k: 'mc', q: 'What does Itai do every evening?', o: ['He takes out the rubbish.', 'He washes the dishes.', 'He cooks dinner.'], a: 0, why: '"I take out the rubbish every evening."' },
        { k: 'mc', q: 'When does Itai tidy his room?', o: ['on Fridays', 'every day', 'never'], a: 0, why: '"Well… on Fridays."' }
      ] },
      { lines: [
        ['K', 'Shira is ten. Shira, what about you?'],
        ['S', 'I load the dishwasher after dinner, and on Saturdays I help my dad wash the car.'],
        ['K', 'Do you like it?'],
        ['S', 'Washing the car is fun, because we play music and get really wet. The dishwasher is boring!']
      ], items: [
        { k: 'mc', q: 'What does Shira do after dinner?', o: ['She loads the dishwasher.', 'She feeds the dog.', 'She washes the car.'], a: 0, why: '"I load the dishwasher after dinner."' },
        { k: 'tf', q: 'Shira thinks the dishwasher is fun.', a: false, fix: 'She thinks the dishwasher is boring.', why: '"The dishwasher is boring!"' },
        { k: 'mc', q: 'Why is washing the car fun?', o: ['They play music and get wet.', 'Her dad pays her.', 'Her friends help.'], a: 0, why: '"we play music and get really wet"' }
      ] },
      { lines: [
        ['K', 'Last question. Do you get pocket money for your chores?'],
        ['I', 'Yes, twenty shekels a week. But if I forget the rubbish, I get less!'],
        ['S', 'I don\'t. My parents say our family is a team, and a team helps.'],
        ['K', 'A great answer! Thank you, both of you.']
      ], items: [
        { k: 'mc', q: 'How much pocket money does Itai get?', o: ['20 shekels a week', '10 shekels a week', '20 shekels a day'], a: 0, why: '"twenty shekels a week"' },
        { k: 'mc', q: 'Why doesn\'t Shira get money for her chores?', o: ['Her parents say the family is a team.', 'She doesn\'t do any chores.', 'She always forgets them.'], a: 0,
          why: '"My parents say our family is a team, and a team helps."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'I take out the ___ every evening.', a: ['rubbish'], why: 'rubbish = British English for trash: old food, paper and things you throw away.' },
      { k: 'hear', say: 'I load the dishwasher after dinner.', q: 'When does she do it?', o: ['after dinner', 'before school', 'on Saturdays'], a: 0, why: 'after dinner.' },
      { k: 'sort', q: 'Where do you do this chore?', g: ['in the kitchen', 'in your bedroom'],
        w: [['load the dishwasher', 0], ['wash the dishes', 0], ['set the table', 0], ['make your bed', 1], ['tidy your desk', 1], ['put away your clothes', 1]],
        why: 'kitchen: the dishwasher, the dishes, the table · bedroom: your bed, your desk, your clothes' }
    ] }
  ],
  use: [
    { k: 'mc', q: 'Every morning I ___ my bed.', o: ['make', 'do', 'fix'], a: 0, why: 'make your bed = put the sheet and blanket in order.',
      he: 'לסדר את המיטה = make your bed. לא do ולא fix.' }
  ]
},
{
  id: 'a2l05', url: 'https://test-english.com/listening/a2/what-do-you-have-to-do-at-home-a2-english-listening-test/', type: 'listening',
  title: 'House rules', dinner: 'Which house rule do you think is the most important?',
  hook: { q: 'In Japan, what do people almost always do at the door of a home?', o: ['take off their shoes', 'ring the bell twice', 'take a photo'], a: 0,
    reveal: 'They *take off their shoes*! In Japan it is a house rule almost everywhere, and guests often get slippers to wear inside.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'have to', d: 'it is a rule, it is necessary' },
    { w: 'don\'t have to', d: 'it isn\'t necessary, but you can if you want' },
    { w: 'clear the table', d: 'take the plates and cups away after a meal' }
  ], predict: { q: 'Max is sleeping at Roni\'s house this weekend. Are her family\'s rules the same as his?', o: ['Yes, all the same', 'Some are different', 'All different'] } },
  show: { cast: 'Roni and her friend Max. Max is coming to stay on Saturday.', names: { R: 'Roni', M: 'Max' }, voices: { R: 'af_heart', M: 'bm_george' },
    parts: [
      { lines: [
        ['R', 'So, Max, you\'re sleeping at our house on Saturday. Do you know our house rules?'],
        ['M', 'Rules? At my house we have lots! I have to go to bed at nine.'],
        ['R', 'Here you don\'t have to go to bed early on Saturday. We go to bed at ten.'],
        ['M', 'Ten? Brilliant!']
      ], items: [
        { k: 'mc', q: 'What time does Max go to bed at home?', o: ['at nine', 'at ten', 'at eleven'], a: 0, why: '"I have to go to bed at nine."' },
        { k: 'tf', q: 'At Roni\'s house, they go to bed at nine on Saturday.', a: false, fix: 'They go to bed at ten.', why: '"We go to bed at ten."' }
      ] },
      { lines: [
        ['R', 'But there\'s one big rule. You have to take off your shoes at the door.'],
        ['M', 'No problem. What about phones?'],
        ['R', 'We have to put our phones in a box during dinner. My dad says dinner is for talking.'],
        ['M', 'That\'s funny. At my house, my dad looks at his phone all the time!']
      ], items: [
        { k: 'mc', q: 'What does everyone have to do at the door?', o: ['take off their shoes', 'say their name', 'wash their hands'], a: 0, why: '"You have to take off your shoes at the door."' },
        { k: 'mc', q: 'Where do the phones go during dinner?', o: ['in a box', 'in their bags', 'on the table'], a: 0, why: '"We have to put our phones in a box."' },
        { k: 'mc', q: 'Why is there a rule about phones?', o: ['Dinner is for talking.', 'Phones are expensive.', 'Phones are noisy.'], a: 0, why: '"My dad says dinner is for talking."' }
      ] },
      { lines: [
        ['M', 'Do I have to help with anything?'],
        ['R', 'You don\'t have to cook, but everyone has to clear the table after dinner.'],
        ['M', 'OK. And can we play video games?'],
        ['R', 'Yes, for one hour. After that, Mum says we have to go outside!']
      ], items: [
        { k: 'tf', q: 'Max has to cook dinner.', a: false, fix: 'Max doesn\'t have to cook.', why: '"You don\'t have to cook."' },
        { k: 'mc', q: 'How long can they play video games?', o: ['one hour', 'two hours', 'all day'], a: 0, why: '"Yes, for one hour."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'You have to take ___ your shoes at the door.', a: ['off'], why: 'take off = stop wearing.' },
      { k: 'mc', q: '"You don\'t have to cook" means…', o: ['Cooking isn\'t necessary.', 'Cooking isn\'t allowed.', 'You must cook.'], a: 0,
        why: 'don\'t have to = it isn\'t necessary. (mustn\'t = it isn\'t allowed)', he: 'don\'t have to = לא חייבים (אבל מותר). mustn\'t = אסור.' },
      { k: 'hear', say: 'Everyone has to clear the table after dinner.', q: 'What does everyone have to do?', o: ['clear the table', 'set the table', 'wash the dishes'], a: 0,
        why: 'clear the table = take the plates away after a meal.' }
    ] }
  ],
  use: [
    { k: 'type', q: '___ you have to go to bed early on school nights?', hint: '(do / does / are)', a: ['do'], why: 'Questions with have to use do: Do you have to…?' }
  ]
},
{
  id: 'a2l06', url: 'https://test-english.com/listening/a2/renting-a-car-a2-english-listening-test/', type: 'listening',
  title: 'Renting bikes', dinner: 'Would you like to ride bikes together in a new city? Which one?',
  hook: { q: 'In which country are there more bicycles than people?', o: ['the Netherlands', 'Australia', 'Brazil'], a: 0,
    reveal: '*The Netherlands!* About 18 million people live there, and they have about 23 million bikes. Many kids ride their bikes to school every day.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'rent', d: 'pay money to use something for a short time' },
    { w: 'a helmet', d: 'a hard hat that keeps your head safe' },
    { w: 'a deposit', d: 'money you pay first and get back at the end' }
  ], predict: { q: 'A family wants to rent bikes in Amsterdam. What will they need to pay for?', o: ['only the bikes', 'the bikes and the helmets', 'nothing'] } },
  show: { cast: 'Lia and her dad are on holiday in Amsterdam. They go into a bike shop.', names: { S: 'Shop assistant', D: 'Dad', L: 'Lia' }, voices: { S: 'bf_emma', D: 'am_michael', L: 'af_bella' },
    parts: [
      { lines: [
        ['S', 'Good morning! Welcome to Canal Bikes. Can I help you?'],
        ['D', 'Hello. We\'d like to rent three bikes, please. Two big ones and one for my daughter.'],
        ['S', 'Of course. How old is she?'],
        ['L', 'I\'m eleven. And I\'m quite tall!'],
        ['S', 'Then this blue bike is perfect for you.']
      ], items: [
        { k: 'mc', q: 'How many bikes does the family want?', o: ['three', 'two', 'four'], a: 0, why: '"We\'d like to rent three bikes."' },
        { k: 'mc', q: 'What colour is Lia\'s bike?', o: ['blue', 'red', 'green'], a: 0, why: '"this blue bike is perfect for you"' }
      ] },
      { lines: [
        ['D', 'How much is it?'],
        ['S', 'It\'s ten euros a day for each bike. The helmets are free.'],
        ['D', 'And when do we bring them back?'],
        ['S', 'By six o\'clock this evening. You pay a deposit of fifty euros, and you get it back at the end.']
      ], items: [
        { k: 'mc', q: 'How much is one bike for a day?', o: ['10 euros', '6 euros', '50 euros'], a: 0, why: '"ten euros a day for each bike"' },
        { k: 'tf', q: 'The family pays extra for the helmets.', a: false, fix: 'The helmets are free.', why: '"The helmets are free."' },
        { k: 'mc', q: 'When must they bring the bikes back?', o: ['by six o\'clock this evening', 'by ten o\'clock this morning', 'tomorrow morning'], a: 0, why: '"By six o\'clock this evening."' }
      ] },
      { lines: [
        ['L', 'Can we ride in the park?'],
        ['S', 'Yes! Vondelpark is lovely. And remember: here you always ride on the right, in the bike lanes.'],
        ['D', 'Thank you. Lia, put on your helmet!'],
        ['L', 'OK, Dad. Let\'s go!']
      ], items: [
        { k: 'mc', q: 'Which side of the road do people ride on in Amsterdam?', o: ['the right', 'the left', 'the middle'], a: 0, why: '"here you always ride on the right"' },
        { k: 'mc', q: 'What does Dad tell Lia to do?', o: ['put on her helmet', 'ride slowly', 'call him'], a: 0, why: '"Lia, put on your helmet!"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'You pay a ___ of fifty euros, and you get it back at the end.', a: ['deposit'], why: 'a deposit = money you pay first and get back later.' },
      { k: 'hear', say: 'We\'d like to rent three bikes, please.', q: 'What do they want?', o: ['to use some bikes for a short time', 'to buy bikes', 'to fix their bikes'], a: 0,
        why: 'rent = pay to use something for a short time.' },
      { k: 'mc', q: '"We\'d like three bikes" is a polite way to say…', o: ['We want three bikes.', 'We liked three bikes.', 'We don\'t want three bikes.'], a: 0,
        why: 'We\'d like = we would like = a polite "we want".', he: 'We\'d like = היינו רוצים, דרך מנומסת לבקש. זה לא עבר: לא We liked.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Can we rent a bike for two hours?', why: 'Can we + rent + a bike + for two hours? A polite question.' }
  ]
},
{
  id: 'a2l07', url: 'https://test-english.com/listening/a2/party-experiences-a2-english-listening-test/', type: 'listening',
  title: 'The surprise party', dinner: 'What is the best party you have ever been to?',
  hook: { q: 'Where does the tune of "Happy Birthday to You" come from?', o: ['a song for a school class', 'a pop song on the radio', 'a football song'], a: 0,
    reveal: 'From a *song for a school class*! Two American sisters, Mildred and Patty Hill, wrote "Good Morning to All" for young children in 1893. Later people sang "Happy Birthday" to the same tune.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a surprise party', d: 'a party that the special person doesn\'t know about' },
    { w: 'guests', d: 'people who come to a party or visit your home' },
    { w: 'decorations', d: 'balloons and pretty things that make a room look nice' }
  ], predict: { q: 'Daniel planned a surprise party for his sister. Did it go well?', o: ['Yes, perfectly', 'Not really, something went wrong', 'Nobody came'] } },
  show: { cast: 'Noa asks her friend Daniel about the weekend.', names: { N: 'Noa', D: 'Daniel' }, voices: { N: 'af_bella', D: 'bm_lewis' },
    parts: [
      { lines: [
        ['N', 'Daniel! How was your sister\'s birthday party on Friday?'],
        ['D', 'Crazy! It was a surprise party. Mum and I planned it for two weeks.'],
        ['N', 'Wow. How many guests came?'],
        ['D', 'Twenty kids from her class. They all hid behind the sofa, next to the balloons.']
      ], items: [
        { k: 'mc', q: 'Whose party was it?', o: ['Daniel\'s sister\'s', 'Daniel\'s', 'Noa\'s'], a: 0, why: '"your sister\'s birthday party"' },
        { k: 'mc', q: 'How many guests came?', o: ['twenty', 'twelve', 'two'], a: 0, why: '"Twenty kids from her class."' }
      ] },
      { lines: [
        ['D', 'At six o\'clock we heard the door. Everyone jumped up and shouted "Surprise!"'],
        ['N', 'And was she happy?'],
        ['D', 'Well, it wasn\'t my sister. It was the pizza delivery man! He dropped the pizzas on the floor.'],
        ['N', 'Oh no! Were they OK?'],
        ['D', 'Two boxes were fine, but one was a disaster.']
      ], items: [
        { k: 'mc', q: 'Who came through the door at six o\'clock?', o: ['the pizza delivery man', 'Daniel\'s sister', 'Daniel\'s dad'], a: 0, why: '"It was the pizza delivery man!"' },
        { k: 'tf', q: 'All the pizzas were OK.', a: false, fix: 'Two boxes were fine, but one was a disaster.', why: '"one was a disaster"' }
      ] },
      { lines: [
        ['N', 'So what happened when your sister came?'],
        ['D', 'She arrived ten minutes later. We shouted again, and she cried, but they were happy tears!'],
        ['N', 'Ha! What was the best part?'],
        ['D', 'The cake. Mum made a chocolate cake in the shape of a cat, because my sister loves cats.'],
        ['N', 'That sounds amazing. I want a party like that!']
      ], items: [
        { k: 'mc', q: 'When did his sister arrive?', o: ['ten minutes later', 'an hour later', 'before the pizza'], a: 0, why: '"She arrived ten minutes later."' },
        { k: 'mc', q: 'Why did she cry?', o: ['She was very happy.', 'She was angry.', 'She hurt her hand.'], a: 0, why: '"they were happy tears!"' },
        { k: 'mc', q: 'Why was the cake in the shape of a cat?', o: ['His sister loves cats.', 'They have a cat.', 'It was cheap.'], a: 0, why: '"because my sister loves cats"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'Everyone jumped up and ___ "Surprise!"', a: ['shouted'], why: 'shout = say something very loudly; in the past: shouted.' },
      { k: 'mc', q: '"They all hid behind the sofa." Hid is the past simple of…', o: ['hide', 'hit', 'have'], a: 0, why: 'hide → hid: an irregular verb.',
        he: 'hide (להתחבא) הוא פועל לא רגיל: בעבר hid, לא hided.' },
      { k: 'hear', say: 'He dropped the pizzas on the floor.', q: 'What happened to the pizzas?', o: ['They fell on the floor.', 'He ate them.', 'They were cold.'], a: 0,
        why: 'drop = let something fall.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'How ___ the party? Was it fun?', hint: '(was / were / did)', a: ['was'], why: 'the party = it → was: How was the party?' }
  ]
},
{
  id: 'a2l08', url: 'https://test-english.com/listening/a2/what-are-your-hobbies-a2-listening-test/', type: 'listening',
  title: 'What are your hobbies?', dinner: 'What hobby would you like to try one day?',
  hook: { q: 'Chess is a hobby for millions of people. Are there more possible games of chess or atoms in the universe?', o: ['more games of chess', 'more atoms', 'about the same'], a: 0,
    reveal: '*More games of chess!* Scientists think there are more possible chess games than atoms in the whole universe. You will never run out of new games.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'free time', d: 'time when you don\'t have school or work' },
    { w: 'collect', d: 'keep lots of things of one kind, like cards or stamps' },
    { w: 'practise', d: 'do something again and again to get better' }
  ], predict: { q: 'Two kids talk about their hobbies on the radio. Which hobby do you think you will hear about?', o: ['skateboarding', 'baking', 'both'] } },
  show: { cast: 'A radio show for kids. Lucy talks to Yonatan and Emily.', names: { L: 'Lucy', Y: 'Yonatan', E: 'Emily' }, voices: { L: 'bf_emma', Y: 'am_michael', E: 'af_bella' },
    parts: [
      { lines: [
        ['L', 'Welcome to Kids on Air! Today we\'re talking about hobbies. Yonatan, what do you do in your free time?'],
        ['Y', 'I skateboard. I go to the skate park four times a week after school.'],
        ['L', 'Isn\'t it dangerous?'],
        ['Y', 'Sometimes I fall, but I always wear a helmet. I\'m learning a new trick at the moment.']
      ], items: [
        { k: 'mc', q: 'How often does Yonatan go to the skate park?', o: ['four times a week', 'once a week', 'every day'], a: 0, why: '"four times a week after school"' },
        { k: 'mc', q: 'What is he doing these days?', o: ['learning a new trick', 'teaching a friend', 'making a skateboard'], a: 0, why: '"I\'m learning a new trick at the moment."' }
      ] },
      { lines: [
        ['L', 'Emily, what about you?'],
        ['E', 'I love baking. I bake cakes and biscuits with my grandma every Sunday.'],
        ['L', 'Yum! What is your best cake?'],
        ['E', 'Lemon cake. Last month I made one for my teacher\'s birthday, and she loved it.']
      ], items: [
        { k: 'mc', q: 'Who does Emily bake with?', o: ['her grandma', 'her mum', 'her teacher'], a: 0, why: '"with my grandma every Sunday"' },
        { k: 'tf', q: 'Emily bakes every Saturday.', a: false, fix: 'She bakes every Sunday.', why: '"every Sunday"' },
        { k: 'mc', q: 'What did she make for her teacher?', o: ['a lemon cake', 'chocolate biscuits', 'bread'], a: 0, why: '"Lemon cake. Last month I made one for my teacher\'s birthday."' }
      ] },
      { lines: [
        ['L', 'Do you have any other hobbies?'],
        ['Y', 'I collect football cards. I have more than five hundred!'],
        ['E', 'And I play the guitar, but I\'m not very good. I don\'t practise enough!'],
        ['L', 'Thanks, you two. Keep having fun!']
      ], items: [
        { k: 'mc', q: 'How many football cards does Yonatan have?', o: ['more than 500', 'about 50', 'less than 100'], a: 0, why: '"more than five hundred"' },
        { k: 'mc', q: 'Why isn\'t Emily good at the guitar?', o: ['She doesn\'t practise enough.', 'Her guitar is old.', 'She has no teacher.'], a: 0, why: '"I don\'t practise enough!"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 2, q: 'I ___ football cards. I have more than five hundred!', a: ['collect'], why: 'collect = keep lots of things of one kind.' },
      { k: 'hear', say: 'Sometimes I fall, but I always wear a helmet.', q: 'What does he always wear?', o: ['a helmet', 'a hat', 'a hoodie'], a: 0, why: 'a helmet keeps your head safe.' },
      { k: 'sort', q: 'play or go?', g: ['play', 'go'],
        w: [['football', 0], ['the piano', 0], ['chess', 0], ['swimming', 1], ['skateboarding', 1], ['fishing', 1]],
        why: 'play + games and instruments: play football, play the piano · go + -ing: go swimming, go fishing',
        he: 'בעברית "ללכת לשחות", ובאנגלית go swimming, לא play swimming. את play אומרים עם משחקים וכלי נגינה.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'What do you do in your free time?', why: 'What + do you do + in your free time? asks about hobbies.' }
  ]
},
{
  id: 'a2l09', url: 'https://test-english.com/listening/a2/have-you-ever-experiences-a2-english-listening-test/', type: 'listening',
  title: 'Have you ever…?', dinner: 'Have you ever done something really brave? What was it?',
  hook: { q: 'Have you ever seen a blue lobster? About how many lobsters are blue?', o: ['1 in 100', '1 in 2 million', '1 in a billion'], a: 1,
    reveal: 'About *1 in 2 million*! Most lobsters are brown or green, so most people have *never seen* a blue one.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'Have you ever…?', d: 'a question about any time in your life' },
    { w: 'never', d: 'not at any time' },
    { w: 'once / twice', d: 'one time / two times' }
  ], predict: { q: 'Tamar and Ariel play a game on a long bus ride. Who do you think has more experiences?', o: ['Tamar', 'Ariel', 'They are the same.'] } },
  show: { cast: 'Tamar and Ariel are on a school trip bus.', names: { T: 'Tamar', A: 'Ariel' }, voices: { T: 'af_heart', A: 'bm_lewis' },
    parts: [
      { lines: [
        ['T', 'This bus ride is so long. Let\'s play "Have you ever". Have you ever been on a plane?'],
        ['A', 'Yes, twice. I\'ve been to Greece and to Cyprus. What about you?'],
        ['T', 'Never! I\'ve never been to another country. But I\'ve been to Eilat lots of times.']
      ], items: [
        { k: 'mc', q: 'How many times has Ariel been on a plane?', o: ['twice', 'once', 'never'], a: 0, why: '"Yes, twice."' },
        { k: 'tf', q: 'Tamar has been to another country.', a: false, fix: 'Tamar has never been to another country.', why: '"I\'ve never been to another country."' }
      ] },
      { lines: [
        ['A', 'My turn. Have you ever touched a snake?'],
        ['T', 'Yes! At the zoo last summer. It was cold and dry, not wet at all.'],
        ['A', 'Really? I\'ve never touched one. I\'m too scared!']
      ], items: [
        { k: 'mc', q: 'Where did Tamar touch a snake?', o: ['at the zoo', 'at school', 'in her garden'], a: 0, why: '"At the zoo last summer."' },
        { k: 'mc', q: 'How did the snake feel?', o: ['cold and dry', 'wet', 'hot'], a: 0, why: '"It was cold and dry, not wet at all."' }
      ] },
      { lines: [
        ['T', 'OK, last one. Have you ever won a prize?'],
        ['A', 'Yes, I have. I won a drawing competition in fifth grade.'],
        ['T', 'Cool! I\'ve won lots of prizes… in video games!'],
        ['A', 'That doesn\'t count, Tamar!']
      ], items: [
        { k: 'mc', q: 'What did Ariel win?', o: ['a drawing competition', 'a video game', 'a football match'], a: 0, why: '"I won a drawing competition in fifth grade."' },
        { k: 'mc', q: 'Why does Ariel say "That doesn\'t count"?', o: ['Tamar\'s prizes are only in games.', 'Tamar won only once.', 'Tamar\'s prizes are too small.'], a: 0,
          why: '"I\'ve won lots of prizes… in video games!" Prizes in a game are not real prizes.' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'I\'ve never ___ to another country.', a: ['been'], why: 'have been to a place = I went there and came back.' },
      { k: 'mc', q: '"Have you ever touched a snake?" "Yes, I ___ one at the zoo last summer."', o: ['touched', 'have touched', 'touch'], a: 0,
        why: 'last summer = a finished time → past simple: touched.',
        he: 'שואלים Have you ever, אבל כשמספרים מתי זה קרה (last summer) עוברים לעבר פשוט: I touched.' },
      { k: 'hear', say: 'I have never touched a snake.', q: 'Has the speaker ever touched a snake?', o: ['No, never.', 'Yes, once.', 'Yes, many times.'], a: 0, why: 'never = not at any time.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Have you ever eaten sushi?', why: 'Have + you + ever + past participle: eat → eaten.' }
  ]
},
{
  id: 'a2r02', url: 'https://test-english.com/reading/a2/the-girl-who-saved-100-lives-a2-english-reading-test/', type: 'reading',
  title: 'Tilly and the giant wave', dinner: 'What is something useful you learned at school this year?',
  hook: { q: 'In the deep ocean, a tsunami wave can travel as fast as…', o: ['a bike', 'a car', 'a plane'], a: 2,
    reveal: 'As fast as *a plane*: up to about 800 km an hour! Near the beach it slows down and gets much taller.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A ten-year-old girl from England is on holiday by the sea. She remembers a school lesson, and it helps her save a lot of people.',
    predict: { q: 'What do you think the lesson was about?', o: ['the sea and big waves', 'how to swim fast', 'first aid'] } },
  story: { title: 'Tilly and the giant wave', chunks: [
    { text: 'In December 2004, Tilly Smith, a ten-year-old girl from England, was on holiday in Thailand with her parents and her little sister. One morning the family went for a walk on the beach. The weather was beautiful, but Tilly noticed something strange. The sea went back from the beach, very fast, and the water started to bubble like a pan on the stove.',
      items: [
        { k: 'mc', q: 'Where was Tilly on holiday?', o: ['in Thailand', 'in England', 'in Spain'], a: 0, why: '"was on holiday in Thailand"' },
        { k: 'tf', q: 'The weather was bad that morning.', a: false, fix: 'The weather was beautiful.', why: '"The weather was beautiful."' },
        { k: 'find', q: 'Find a word that means "saw, paid attention to".', a: 'noticed', why: 'notice = see something and pay attention to it.' }
      ] },
    { text: 'Two weeks before the holiday, Tilly\'s geography teacher, Mr Kearney, showed her class a video about tsunamis. Tilly remembered it: when the sea goes back like that, a giant wave can come a few minutes later. "Mum, we have to leave the beach now!" she shouted. Her mum didn\'t believe her at first, but Tilly didn\'t stop.',
      items: [
        { k: 'mc', q: 'How did Tilly know about tsunamis?', o: ['from a lesson at school', 'from a book at home', 'from her dad'], a: 0, why: '"her geography teacher… showed her class a video about tsunamis"' },
        { k: 'mc', q: 'What did her mum do at first?', o: ['She didn\'t believe her.', 'She called the police.', 'She ran to the hotel.'], a: 0, why: '"Her mum didn\'t believe her at first."' }
      ] },
    { text: 'Her dad told a lifeguard, and the hotel staff quickly asked everyone to leave the beach. About a hundred people went up to the hotel. A few minutes later, a huge wave hit the beach, but everyone from that beach was safe. Later, Tilly got a prize and met famous people, and people all over the world heard about her geography lesson.',
      items: [
        { k: 'mc', q: 'Who did Tilly\'s dad tell?', o: ['a lifeguard', 'a teacher', 'a taxi driver'], a: 0, why: '"Her dad told a lifeguard."' },
        { k: 'mc', q: 'What happened to Tilly later?', o: ['She got a prize.', 'She became a lifeguard.', 'She moved to Thailand.'], a: 0, why: '"Later, Tilly got a prize and met famous people."' },
        { k: 'find', q: 'Find a word that means "very, very big".', a: 'huge', why: 'huge = very, very big.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the main idea of the story?', o: ['A school lesson helped a girl save many people.', 'Holidays by the sea are dangerous.', 'Lifeguards know everything about the sea.'], a: 0,
        why: 'Tilly remembered her geography lesson, and because of it about a hundred people were safe.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'Tilly ___ the sea go back very fast.', hint: '(see)', a: ['saw'], why: 'see → saw (an irregular past simple).' }
  ]
},
{
  id: 'a2r03', url: 'https://test-english.com/reading/a2/living-in-a-small-town-vs-a-big-city-a2-english-reading-test/', type: 'reading',
  title: 'Small town or big city?', dinner: 'Would you like to live in a big city or a small town? Why?',
  hook: { q: 'Today more than half of the people in the world live in cities. In 1950, how many lived in cities?', o: ['about 3 in 10', 'about 5 in 10', 'about 9 in 10'], a: 0,
    reveal: 'About *3 in 10*! In 1950 most people lived in villages and small towns. Today it is more than half, and the cities keep growing.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'For a school project, two kids write about where they live: Gili lives in a small town, and Josh lives in a big city.',
    predict: { q: 'Who do you think is happier where they live?', o: ['Gili', 'Josh', 'Both of them'] } },
  story: { title: 'Where I live', chunks: [
    { text: 'Hi, I\'m Gili and I\'m twelve. I live in Rosh Pina, a small town in the north of Israel. About three thousand people live here, so everybody knows everybody. I walk to school in five minutes, and after school I ride my bike with my friends. It\'s quiet and safe, and the air is clean. From my window I can see the mountains.',
      items: [
        { k: 'mc', q: 'How does Gili get to school?', o: ['She walks.', 'She takes a bus.', 'Her mum drives her.'], a: 0, why: '"I walk to school in five minutes."' },
        { k: 'tf', q: 'Gili lives in a noisy place.', a: false, fix: 'Her town is quiet and safe.', why: '"It\'s quiet and safe."' }
      ] },
    { text: 'But there are some problems too. There isn\'t a cinema or a big shopping centre in our town, and there aren\'t many buses. When I want to see a film, my parents have to drive me to a bigger town. That takes forty minutes! Sometimes I feel a bit bored at the weekend.',
      items: [
        { k: 'mc', q: 'What doesn\'t Gili\'s town have?', o: ['a cinema', 'a school', 'mountains near it'], a: 0, why: '"There isn\'t a cinema or a big shopping centre."' },
        { k: 'find', q: 'Find a word that means "not interested, with nothing to do".', a: 'bored', why: 'bored = you have nothing interesting to do.' }
      ] },
    { text: 'I\'m Josh and I live in London, one of the biggest cities in Europe. My life is busier than Gili\'s! There are museums, parks and cinemas everywhere, and I take the Underground to school. The best thing? You never get bored. The worst thing? It\'s noisy, and the streets are crowded. I can\'t ride my bike alone because there is too much traffic.',
      items: [
        { k: 'mc', q: 'How does Josh get to school?', o: ['by Underground', 'by bike', 'on foot'], a: 0, why: '"I take the Underground to school."' },
        { k: 'mc', q: 'Why can\'t Josh ride his bike alone?', o: ['There is too much traffic.', 'He hasn\'t got a bike.', 'His school is too far.'], a: 0, why: '"because there is too much traffic"' },
        { k: 'find', q: 'Find a word that means "full of people".', a: 'crowded', why: 'crowded = full of people.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'Which sentence is true for both kids?', o: ['There are good and bad things about their home.', 'They are bored every day.', 'They ride their bikes alone.'], a: 0,
        why: 'Gili likes the quiet but has no cinema; Josh is never bored but the city is noisy.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'London is ___ than Rosh Pina.', hint: '(big)', a: ['bigger'], why: 'big → bigger: one vowel + one consonant at the end, so double the g.' }
  ]
},
{
  id: 'a2r04', url: 'https://test-english.com/reading/a2/what-rainbows-mean-around-the-world-a2-english-reading-test/', type: 'reading',
  title: 'The secrets of the rainbow', dinner: 'Which colour of the rainbow do you like best, and why?',
  hook: { q: 'From a plane, a rainbow can sometimes look like…', o: ['a full circle', 'a square', 'a straight line'], a: 0,
    reveal: 'A *full circle*! From the ground, the land hides the bottom half, so we only see an arch.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A rainbow is science, but people around the world also tell stories about it.',
    predict: { q: 'In an old Irish story, what is at the end of a rainbow?', o: ['a pot of gold', 'a dragon', 'a secret door'] } },
  story: { title: 'The secrets of the rainbow', chunks: [
    { text: 'A rainbow appears when the sun shines through drops of rain. Each drop bends the white light of the sun and splits it into colours. To see a rainbow, the sun must be behind you and the rain must be in front of you. That is why we often see rainbows in the morning or the late afternoon, when the sun is low.',
      items: [
        { k: 'mc', q: 'Where must the sun be when you see a rainbow?', o: ['behind you', 'in front of you', 'right above your head'], a: 0, why: '"the sun must be behind you"' },
        { k: 'tf', q: 'The white light of the sun has many colours in it.', a: true, why: 'The drops split the white light into colours.' }
      ] },
    { text: 'In Ireland, there is an old story about the leprechaun, a little man in a green hat. He hides a pot of gold at the end of the rainbow. But nobody can find it, because when you walk towards a rainbow, it moves away from you! In Hawaii, there are rainbows almost every day. The Hawaiian language has many words for them, and even the cars there have a rainbow on their number plates.',
      items: [
        { k: 'mc', q: 'Where is the pot of gold in the Irish story?', o: ['at the end of the rainbow', 'under a tree', 'in the sea'], a: 0, why: '"He hides a pot of gold at the end of the rainbow."' },
        { k: 'mc', q: 'Why can\'t anybody find the end of a rainbow?', o: ['It moves away when you walk towards it.', 'It is in Hawaii.', 'The leprechaun is sleeping there.'], a: 0,
          why: '"when you walk towards a rainbow, it moves away from you"' },
        { k: 'find', q: 'Find a word that means "puts something in a secret place".', a: 'hides', why: 'hide = put something where nobody can find it.' }
      ] },
    { text: 'Here are some more fun facts. The scientist Isaac Newton said that a rainbow has seven colours: red, orange, yellow, green, blue, indigo and violet. Sometimes you can see a double rainbow. Look carefully: in the second one, the colours are in the opposite order! And on a night with a bright moon, you can sometimes see a "moonbow".',
      items: [
        { k: 'mc', q: 'How many colours did Newton name?', o: ['seven', 'five', 'ten'], a: 0, why: '"a rainbow has seven colours"' },
        { k: 'tf', q: 'In a double rainbow, the colours are in the same order in both rainbows.', a: false, fix: 'In the second rainbow, the colours are in the opposite order.',
          why: '"in the second one, the colours are in the opposite order!"' },
        { k: 'find', q: 'Find a word that means "the other way round".', a: 'opposite', why: 'opposite order = the other way round: violet first, red last.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the best title for the text?', o: ['Rainbows: science and stories', 'How to find gold', 'Why it rains in Ireland'], a: 0,
        why: 'The text explains how rainbows happen and tells stories and facts about them.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'You can see a rainbow ___ the sun is behind you and the rain is in front of you.', hint: '(when / but / so)', a: ['when'], why: 'when = at the time that.' }
  ]
}
];
