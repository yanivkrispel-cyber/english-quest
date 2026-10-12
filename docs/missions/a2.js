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
}
];
