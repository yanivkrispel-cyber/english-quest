// English Quest missions, level A2 (specs/missions.md). Original content on the topics of test-english.com's map:
// the topic list is theirs, every text, recording and question here is our own. Check: node test/missions-check.js
window.EQ_MISSIONS = window.EQ_MISSIONS || {};
window.EQ_MISSIONS.a2 = [
{
  id: 'a2g01', type: 'grammar',
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
  id: 'a2g02', type: 'grammar',
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
  id: 'a2g03', type: 'grammar',
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
  id: 'a2v01', type: 'vocabulary',
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
      { k: 'mc', q: 'We waited ___ the bus for an hour, but it didn\'t come.', o: ['for', 'to', 'on'], a: 0, why: 'wait for something or someone.' },
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
  id: 'a2v02', type: 'vocabulary',
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
  id: 'a2l01', type: 'listening',
  title: 'Roommates at camp', dinner: 'What is your best friend like?',
  hook: { q: 'Astronauts on the International Space Station live together for months. How many people usually live there at the same time?',
    o: ['1 or 2', 'About 7', 'About 20'], a: 1,
    reveal: 'About *7*! Astronauts share their home in space for about six months. They really need roommates who are *tidy* and *friendly*.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'messy', d: 'not tidy, things everywhere' },
    { w: 'friendly', d: 'nice and kind to people' },
    { w: 'noisy', d: 'making a lot of noise' },
    { w: 'generous', d: 'happy to give and share' }
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
  id: 'a2l02', type: 'listening',
  title: 'Checking into a hotel', dinner: 'If we stay in a hotel, what will you ask at reception?',
  hook: { q: 'One of the biggest hotels in the world is in Malaysia. About how many rooms does it have?', o: ['About 700', 'About 7,000', 'About 70,000'], a: 1,
    reveal: 'About *7,000*! The First World Hotel in Malaysia has more than 7,000 rooms. Imagine the queue at reception!' },
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
        { k: 'type', q: 'His room number is ___.', a: ['214', 'two hundred and fourteen', 'two hundred fourteen', 'two one four'], why: '"You are in room 214, on the second floor."' },
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
  id: 'a2l03', type: 'listening',
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
  id: 'a2r01', type: 'reading',
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
  id: 'a2u02', type: 'use-of-english',
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
  id: 'a2g04', type: 'grammar',
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
  id: 'a2g05', type: 'grammar',
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
  id: 'a2g06', type: 'grammar',
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
  id: 'a2g07', type: 'grammar',
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
  id: 'a2g08', type: 'grammar',
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
      { k: 'type', q: 'I promise I ___ tell anyone your secret.', hint: '(won\'t / am not going to)', a: ['won\'t', 'will not', 'am not going to', '\'m not going to'], why: 'A promise → will: I won\'t tell anyone.' },
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
  id: 'a2g09', type: 'grammar',
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
  id: 'a2u01', type: 'use-of-english',
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
  id: 'a2u03', type: 'use-of-english',
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
  id: 'a2u04', type: 'use-of-english',
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
  id: 'a2v03', type: 'vocabulary',
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
  id: 'a2v04', type: 'vocabulary',
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
  id: 'a2v05', type: 'vocabulary',
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
  id: 'a2l04', type: 'listening',
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
      { k: 'type', clip: 0, q: 'I take out the ___ every evening.', a: ['rubbish', 'trash', 'garbage'], why: 'rubbish = British English for trash: old food, paper and things you throw away.' },
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
  id: 'a2l05', type: 'listening',
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
  id: 'a2l06', type: 'listening',
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
  id: 'a2l07', type: 'listening',
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
  id: 'a2l08', type: 'listening',
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
  id: 'a2l09', type: 'listening',
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
  id: 'a2r02', type: 'reading',
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
  id: 'a2r03', type: 'reading',
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
  id: 'a2r04', type: 'reading',
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
},
// Month 2 (2026-11-01): the next topics of each section, about four more weeks.
{
  id: 'a2g10', url: 'https://test-english.com/grammar-points/a2/defining-relative-clauses-who-which-that-where/', type: 'grammar',
  title: 'Who, which, that, where', kid: 'The one who...', he: 'משפטי זיקה: who, which, that, where',
  dinner: 'Who is a person that always makes you laugh?',
  hook: { q: 'Which of these is a mammal that lays eggs?', o: ['The platypus', 'The dolphin', 'The bat'], a: 0,
    reveal: 'The *platypus*! It is a mammal *that* lays eggs, and it lives in Australia. Look at the sentence: an animal *that* lays eggs.' },
  learn: { kind: 'rule', title: 'Who, which, that, where', form: ['person / thing / place', 'who / which / that / where', 'more information'],
    lines: ['*who* for people: A vet is a person *who* helps animals.',
      '*which* for things and animals: This is the bus *which* goes to the beach.',
      '*that* for people and things: the girl *that* won, the book *that* I read.',
      '*where* for places: This is the park *where* we play.'],
    ex: ['I have a friend *who* speaks three languages.', 'That\'s the café *where* we met.'],
    he: 'בעברית יש מילה אחת: "ש" (הילדה שזכתה, הספר שקראתי). באנגלית בוחרים: לאנשים who, לדברים ולחיות which, ו-that מתאים לשניהם. למקום: where (המקום שבו...).' },
  steps: [
    { name: 'Person, thing or place?', items: [
      { k: 'mc', q: 'A chef is a person ___ cooks in a restaurant.', o: ['who', 'which', 'where'], a: 0, why: 'A chef is a person → who.' },
      { k: 'mc', q: 'This is the phone ___ I got for my birthday.', o: ['which', 'who', 'where'], a: 0, why: 'A phone is a thing → which (or that).' },
      { k: 'mc', q: 'That\'s the beach ___ we swim every summer.', o: ['where', 'which', 'who'], a: 0, why: 'A place, and we swim there → where.' },
      { k: 'mc', q: 'Do you know the girl ___ lives next door?', o: ['who', 'where', 'which'], a: 0, why: 'The girl is a person → who.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'A library is a place ___ you can borrow books.', hint: '(who / which / where)', a: ['where'], why: 'A place, and you borrow books there → where.' },
      { k: 'tf', q: '"The man which lives upstairs is a pilot."', a: false, fix: 'The man who lives upstairs is a pilot.', why: 'A man is a person → who (or that), not which.',
        he: 'לאנשים: who או that. which רק לדברים ולחיות.' },
      { k: 'mc', q: 'Which word can go in BOTH sentences? "The boy ___ won." "The cake ___ I made."', o: ['that', 'who', 'where'], a: 0, why: 'that works for people and for things.' },
      { k: 'tf', q: '"Who did you meet at the park yesterday?"', a: true, why: 'Review (questions): you met someone, so we need did: Who did you meet?' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'She is the teacher who helped me.', why: 'the teacher (a person) + who + helped me.' },
      { k: 'spot', s: 'This is the shop *who* sells comics.', fix: 'which', why: 'A shop is a thing → which (or that).' },
      { k: 'build', s: 'The film that we watched was very funny.', why: 'the film + that we watched + was… Review: watch → watched (past simple).' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Haifa is the city *which* my friends live.', fix: 'where', why: 'A place, and my friends live there → where: the city where my friends live.' },
    { k: 'type', q: 'A good friend is someone ___ listens to you.', hint: '(who / which / where)', a: ['who', 'that'], why: 'someone is a person → who (or that).' },
    { k: 'mc', q: 'The girl who ___ next to me on the bus yesterday was very kind.', o: ['was sitting', 'is sit', 'sitting'], a: 0,
      why: 'Review (past continuous): yesterday, an action going on → was sitting.' }
  ]
},
{
  id: 'a2g11', url: 'https://test-english.com/grammar-points/a2/present-perfect/', type: 'grammar',
  title: 'Present perfect: have done', kid: 'Have you ever...?', he: 'Present perfect: have / has + V3',
  dinner: 'What is something new that you have learned this week?',
  hook: { q: 'Which machine has travelled farther from Earth than anything else people have made?', o: ['Voyager 1, a space probe', 'The International Space Station', 'A jumbo jet'], a: 0,
    reveal: '*Voyager 1*! It left Earth in 1977, and it *has travelled* more than 20 billion kilometres. It *has been* in space for almost 50 years!' },
  learn: { kind: 'rule', title: 'Present perfect', form: ['I / you / we / they have', 'he / she / it has', 'past participle (V3)'],
    lines: ['have / has + the past participle: I *have finished*. She *has seen* it.',
      'Regular verbs end in -ed: play → *played*. Irregular ones you learn: go → *gone*, see → *seen*, eat → *eaten*, be → *been*.',
      'Use it for experiences in your life (*ever, never*) and for news from now (*just, already, yet*): Have you *ever* been to Eilat? I*\'ve just* finished!'],
    ex: ['I *have never* seen snow.', '*Has* she *done* her homework *yet*?'],
    he: 'אין זמן כזה בעברית. משתמשים בו לחוויות בחיים (Have you ever...?) ולדברים שקרו הרגע (I\'ve just finished). הצורה: have או has, ואחריהם V3, כמו been, seen, done, gone.' },
  steps: [
    { name: 'Have or has?', items: [
      { k: 'mc', q: 'She ___ visited Haifa three times.', o: ['has', 'have', 'is'], a: 0, why: 'she → has + visited.' },
      { k: 'mc', q: 'We ___ finished the puzzle!', o: ['have', 'has', 'are'], a: 0, why: 'we → have + finished.' },
      { k: 'mc', q: 'Have you ever ___ a camel?', o: ['ridden', 'rode', 'ride'], a: 0, why: 'ride → rode → ridden. After have we use the third form: ridden.' },
      { k: 'mc', q: 'My cousin has never ___ to Eilat.', o: ['been', 'was', 'be'], a: 0, why: 'be → was → been: has never been.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'I have ___ my homework. Can I go out now?', hint: '(do)', a: ['done'], why: 'do → did → done: I have done.' },
      { k: 'tf', q: '"He has went to the shop."', a: false, fix: 'He has gone to the shop.', why: 'After has we need the third form: go → went → gone.',
        he: 'אחרי have או has בא V3: gone, לא went.' },
      { k: 'mc', q: '"Have you ever seen a dolphin?" "No, I ___."', o: ['haven\'t', 'didn\'t', 'don\'t'], a: 0, why: 'A short answer uses the same helper: Have you…? No, I haven\'t.' },
      { k: 'mc', q: 'Last summer we ___ to the Galilee.', o: ['went', 'have gone', 'go'], a: 0, why: 'Review (past simple): last summer is a finished time → went.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Have you ever seen a rainbow?', why: 'Have + you + ever + seen (third form of see).' },
      { k: 'spot', s: 'She has *eat* all the cookies!', fix: 'eaten', why: 'has + the third form: eat → ate → eaten.' },
      { k: 'build', s: 'I have just finished my book.', why: 'just goes between have and the verb: have just finished.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I have *saw* this film three times.', fix: 'seen', why: 'see → saw → seen: I have seen it.' },
    { k: 'type', q: 'I have never ___ to Japan. Have you?', hint: '(be)', a: ['been'], why: 'be → was → been: I have never been to Japan.' },
    { k: 'tf', q: '"Yesterday I have played football."', a: false, fix: 'Yesterday I played football.', why: 'Review (past simple): yesterday is a finished time, so we use the past simple: played.',
      he: 'עם yesterday, last week או ago משתמשים ב-past simple, לא ב-have.' }
  ]
},
{
  id: 'a2g12', url: 'https://test-english.com/grammar-points/a2/present-perfect-or-past-simple/', type: 'grammar',
  title: 'Have you ever, or when?', kid: 'Ever, or when?', he: 'Present perfect או past simple?',
  dinner: 'What is the most interesting place you have ever been to, and when did you go?',
  hook: { q: 'When did people first reach the top of Mount Everest, the highest mountain in the world?', o: ['In 1923', 'In 1953', 'In 1993'], a: 1,
    reveal: 'In *1953*: Edmund Hillary and Tenzing Norgay *reached* the top together. Since then, thousands of people *have climbed* it.' },
  learn: { kind: 'rule', title: 'Present perfect or past simple?',
    lines: ['*Present perfect* (have + V3) when we don\'t say when: I *have been* to Eilat. (some time in my life)',
      '*Past simple* when we say or know *when*: I *went* to Eilat *last summer*.',
      'They often come together: "*Have* you ever *been* to Eilat?" "Yes, I *went* there in 2024."',
      '*ever, never, just, already, yet* → present perfect. *yesterday, last week, ago, in 2020, When…?* → past simple.'],
    ex: ['I *have lost* my keys! I can\'t open the door.', 'I *lost* my keys yesterday, but I found them.'],
    he: 'קודם שואלים על חוויה בלי זמן: Have you ever...? וכשמספרים מתי זה קרה עוברים ל-past simple: I went there last year. מילים כמו yesterday, ago, last ותאריך הולכות עם past simple.' },
  steps: [
    { name: 'When?', items: [
      { k: 'mc', q: 'I ___ the science museum last weekend.', o: ['visited', 'have visited'], a: 0, why: 'last weekend = we say when → past simple.' },
      { k: 'mc', q: '___ you ever ridden a horse?', o: ['Have', 'Did'], a: 0, why: 'ever + ridden (third form) → Have you ever…?' },
      { k: 'mc', q: 'We ___ in Haifa two years ago.', o: ['lived', 'have lived'], a: 0, why: 'ago = a finished time → past simple.' },
      { k: 'mc', q: 'No, thanks. I ___ already seen this film.', o: ['have', 'did'], a: 0, why: 'already + seen (third form) → have already seen.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: '"Have you ever been to the Dead Sea?" "Yes, I ___ there last year."', hint: '(go)', a: ['went'], why: 'last year → past simple: go → went.' },
      { k: 'tf', q: '"I have seen a great film yesterday."', a: false, fix: 'I saw a great film yesterday.', why: 'yesterday = a finished time → past simple: saw.',
        he: 'עם yesterday לא משתמשים ב-have: I saw it yesterday.' },
      { k: 'mc', q: '"When ___ you start learning English?"', o: ['did', 'have'], a: 0, why: 'When…? asks for a time in the past → did.' },
      { k: 'mc', q: 'I ___ TV when the lights went out.', o: ['was watching', 'have watched', 'watch'], a: 0, why: 'Review (past continuous): an action going on when something happened → was watching.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Have you ever been on a plane?', why: 'An experience, no time → Have you ever been…?' },
      { k: 'spot', s: 'She *has* finished her book last night.', fix: '', why: 'last night → past simple: She finished her book last night.' },
      { k: 'build', s: 'When did she lose her phone?', why: 'When…? asks for a time → past simple: did + lose.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Last week I *have* met a famous singer!', fix: '', why: 'last week → past simple: Last week I met a famous singer!' },
    { k: 'type', q: '"Have you finished your book?" "Yes, I ___ it last night."', hint: '(finish)', a: ['finished'], why: 'last night → past simple: finished.' },
    { k: 'mc', q: '"What are your plans for the summer?" "I ___ visit my aunt in Nazareth."', o: ['am going to', 'have visited', 'visited'], a: 0,
      why: 'Review (going to): a plan for the future → am going to visit.' }
  ]
},
{
  id: 'a2g13', url: 'https://test-english.com/grammar-points/a2/something-anything-nothing-etc/', type: 'grammar',
  title: 'Something, anything, nothing', kid: 'Something or nothing?', he: 'something, anything, nothing ועוד',
  dinner: 'Is there anything new you would like to learn this year?',
  hook: { q: 'Can anything get out of a black hole?', o: ['Nothing can, not even light.', 'Only light can.', 'Everything can, slowly.'], a: 0,
    reveal: '*Nothing*, not even light! That is why it looks black. *Everything* that falls in stays there.' },
  learn: { kind: 'rule', title: 'some-, any-, no-, every-',
    lines: ['*some-* in positive sentences: *something, somebody (someone), somewhere*.',
      '*any-* in questions and with not: Is there *anything* in the box? I didn\'t see *anybody*.',
      '*no-* = not + any-, with a positive verb: There is *nothing* here. (= There isn\'t *anything* here.)',
      '*every-* = all: *everything, everybody, everywhere*.'],
    ex: ['*Somebody* is at the door.', 'I can\'t find my keys *anywhere*.'],
    he: 'בעברית אומרים "אין כלום" עם שתי שלילות. באנגלית יש רק שלילה אחת: There is nothing, או There isn\'t anything. אף פעם לא There isn\'t nothing.' },
  steps: [
    { name: 'Some, any or no?', items: [
      { k: 'mc', q: 'Listen! ___ is knocking on the door.', o: ['Somebody', 'Anybody', 'Nobody'], a: 0, why: 'A positive sentence, and we can hear a person → Somebody.' },
      { k: 'mc', q: 'I didn\'t see ___ at the park. It was empty.', o: ['anybody', 'nobody', 'somebody'], a: 0, why: 'didn\'t + any-: I didn\'t see anybody.' },
      { k: 'mc', q: 'There is ___ in the box. It\'s empty!', o: ['nothing', 'anything', 'something'], a: 0, why: 'is (positive verb) + nothing = there isn\'t anything.' },
      { k: 'mc', q: 'I can\'t find my glasses ___!', o: ['anywhere', 'nowhere', 'somewhere'], a: 0, why: 'can\'t + any-: anywhere.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'We looked in every room, but there was ___ there.', hint: '(nobody / anybody)', a: ['nobody', 'no one'], why: 'was (positive verb) + nobody.' },
      { k: 'tf', q: '"I don\'t know nothing about it."', a: false, fix: 'I don\'t know anything about it.', why: 'Only one "not" in English: don\'t + anything.',
        he: 'בעברית "אני לא יודע כלום", אבל באנגלית שלילה אחת בלבד: I don\'t know anything, או I know nothing.' },
      { k: 'mc', q: '___ in my class likes the new teacher. She is great!', o: ['Everybody', 'Anybody', 'Nothing'], a: 0, why: 'All the people in the class → Everybody.' },
      { k: 'mc', q: 'While I ___ for my keys, somebody called me.', o: ['was looking', 'looked at', 'am looking'], a: 0, why: 'Review (past continuous): While + an action going on → was looking.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Is there anything in your bag?', why: 'A question → anything.' },
      { k: 'spot', s: 'There isn\'t *nobody* in the classroom.', fix: 'anybody', why: 'isn\'t + any-: There isn\'t anybody (or: There is nobody).' },
      { k: 'build', s: 'Somebody left a bag on the bus.', why: 'Review (past simple): leave → left.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I have *anything* to do today. I\'m bored!', fix: 'nothing', why: 'have (positive) + nothing: I have nothing to do.' },
    { k: 'type', q: 'This winter I would like to go ___ warm, like Eilat!', hint: '(somewhere / anywhere)', a: ['somewhere'], why: 'A positive sentence → somewhere.' },
    { k: 'mc', q: 'Where ___ you go last weekend? Somewhere fun?', o: ['did', 'do', 'have'], a: 0, why: 'Review (questions): last weekend → did.' }
  ]
},
{
  id: 'a2g14', url: 'https://test-english.com/grammar-points/a2/comparative-superlative-adjectives-adverbs/', type: 'grammar',
  title: 'Bigger, the biggest, faster', kid: 'Faster, fastest!', he: 'השוואה: er, more, the most ותארי פועל',
  dinner: 'What is the funniest film you have ever seen?',
  hook: { q: 'What is the biggest animal that has ever lived on Earth?', o: ['The blue whale', 'The biggest dinosaur', 'The African elephant'], a: 0,
    reveal: 'The *blue whale*! It is *bigger* than any dinosaur. It can be about 30 metres long: *longer* than two buses.' },
  learn: { kind: 'rule', title: 'Comparing: -er, more, the most',
    lines: ['Short adjectives: -er / the -est: fast → *faster* → *the fastest*. big → *bigger* → *the biggest*.',
      'Long adjectives: *more* / *the most*: *more interesting* → *the most interesting*.',
      'Irregular: good → *better* → *the best*. bad → *worse* → *the worst*.',
      'Adverbs (how you do it) compare too: He runs *faster than* me. Please speak *more slowly*.'],
    ex: ['A cheetah runs *faster than* a horse.', 'This is *the best* day of the year!'],
    he: 'משווים שניים עם than: bigger than. "הכי" זה the עם est או the most. מילים קצרות מקבלות er ו-est, ארוכות מקבלות more ו-most. good הופך ל-better ול-the best.' },
  steps: [
    { name: 'Which form?', items: [
      { k: 'mc', q: 'An elephant is ___ than a horse.', o: ['heavier', 'heavy', 'more heavy'], a: 0, why: 'heavy → heavier (y → i + er).' },
      { k: 'mc', q: 'This is ___ book I have ever read!', o: ['the most exciting', 'the more exciting', 'most exciting'], a: 0, why: 'A long adjective, more than all others → the most exciting.' },
      { k: 'mc', q: 'My new bike is ___ than my old one.', o: ['better', 'gooder', 'more good'], a: 0, why: 'good → better → the best.' },
      { k: 'mc', q: 'Can you speak ___? I can\'t hear you.', o: ['more loudly', 'loudlier', 'most loud'], a: 0, why: 'An adverb with -ly → more loudly.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'The shore of the Dead Sea is the ___ place on land in the world.', hint: '(low)', a: ['lowest'], why: 'More than all others → the + lowest.' },
      { k: 'tf', q: '"Today is more hot than yesterday."', a: false, fix: 'Today is hotter than yesterday.', why: 'hot is short → hotter (double t).',
        he: 'מילה קצרה מקבלת er: hotter, לא more hot.' },
      { k: 'mc', q: 'Of all the kids in the race, Lior ran the ___.', o: ['fastest', 'faster', 'most fast'], a: 0, why: 'Of all → the fastest.' },
      { k: 'mc', q: '"Who ___ the race?" "Noa. She ran faster than everyone."', o: ['won', 'did win', 'does win'], a: 0,
        why: 'Review (subject questions): who is the one who won, so no did: Who won?' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'The cheetah is the fastest land animal.', why: 'the + fastest + noun.' },
      { k: 'spot', s: 'My bag is *biger* than yours.', fix: 'bigger', why: 'big → bigger: double the g.' },
      { k: 'build', s: 'She draws more carefully than me.', why: 'An adverb: carefully → more carefully than.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Monday is the *worse* day of my week!', fix: 'worst', why: 'bad → worse → the worst.' },
    { k: 'type', q: 'I think summer is ___ than winter.', hint: '(good)', a: ['better'], why: 'good → better than.' },
    { k: 'mc', q: 'Yesterday I ___ home earlier than my friend.', o: ['came', 'come', 'have came'], a: 0, why: 'Review (past simple): yesterday → came (come is irregular).' }
  ]
},
{
  id: 'a2g15', url: 'https://test-english.com/grammar-points/a2/too-too-much-too-many-enough/', type: 'grammar',
  title: 'Too, too much, too many, enough', kid: 'Too much or enough?', he: 'too, too much, too many, enough',
  dinner: 'Do you think kids have enough time to play after school?',
  hook: { q: 'Why can\'t fish live in the Dead Sea?', o: ['The water is too salty.', 'The water is too cold.', 'The water is too deep.'], a: 0,
    reveal: 'The water is *too salty* for fish. But it is salty *enough* to hold you up: people float on it easily!' },
  learn: { kind: 'rule', title: 'Too and enough',
    lines: ['*too* + adjective = more than is OK: This bag is *too heavy*. I can\'t carry it.',
      '*too much* + things you can\'t count (noise, water, time). *too many* + plurals (people, cars).',
      'adjective + *enough* = as much as you need: Is it *warm enough*? *enough* + noun: We have *enough chairs*.',
      '*not … enough* = less than you need: The water *isn\'t warm enough* to swim.'],
    ex: ['There are *too many* people on the bus.', 'This box *isn\'t big enough* for all my books.'],
    he: '"יותר מדי" זה too. עם שם עצם: too much לדברים שלא סופרים (noise, water) ו-too many לדברים שסופרים (cars, people). enough בא אחרי תואר (old enough) ולפני שם עצם (enough time).' },
  steps: [
    { name: 'Too much or too many?', items: [
      { k: 'mc', q: 'There are ___ cars in the street. We can\'t cross!', o: ['too many', 'too much', 'enough'], a: 0, why: 'cars = a plural you can count → too many.' },
      { k: 'mc', q: 'Please turn the music down. It\'s making ___ noise.', o: ['too much', 'too many', 'enough'], a: 0, why: 'noise: you can\'t count it → too much.' },
      { k: 'mc', q: 'The water is ___ cold. I\'m not going in!', o: ['too', 'enough', 'too many'], a: 0, why: 'too + adjective = more than is OK.' },
      { k: 'mc', q: 'We can\'t play now. We haven\'t got ___ time.', o: ['enough', 'too', 'many'], a: 0, why: 'enough + noun: enough time.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'This room isn\'t big ___ for thirty people.', a: ['enough'], why: 'adjective + enough: big enough.' },
      { k: 'tf', q: '"He isn\'t enough old to drive a car."', a: false, fix: 'He isn\'t old enough to drive a car.', why: 'enough comes after an adjective: old enough.',
        he: 'enough בא אחרי התואר: old enough, לא enough old.' },
      { k: 'mc', q: 'There were ___ people at the concert. We couldn\'t see the stage!', o: ['too many', 'too much', 'enough'], a: 0, why: 'people = a plural → too many.' },
      { k: 'mc', q: 'It was too windy, ___ we stayed at home.', o: ['so', 'but', 'because'], a: 0, why: 'Review (connectors): so tells us the result.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'It is too hot to play outside.', why: 'too + adjective + to + verb.' },
      { k: 'spot', s: 'There is too *many* homework today!', fix: 'much', why: 'homework: you can\'t count it → too much.' },
      { k: 'build', s: 'We didn\'t have enough chairs for everybody.', why: 'enough + noun. Review (past simple): didn\'t have.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'The film was *to* long. I fell asleep!', fix: 'too', why: 'too (two o\'s) = more than is OK. to is a different word.' },
    { k: 'type', q: 'I\'m not old ___ to drive a car, but I can ride a bike.', a: ['enough'], why: 'adjective + enough: old enough.' },
    { k: 'mc', q: '"Why ___ you go swimming yesterday?" "The water was too cold."', o: ['didn\'t', 'don\'t', 'weren\'t'], a: 0,
      why: 'Review (questions): yesterday → didn\'t + go.' }
  ]
},
{
  id: 'a2g16', url: 'https://test-english.com/grammar-points/a2/much-many-little-few-some-any/', type: 'grammar',
  title: 'Much, many, a little, a few', kid: 'How much? How many?', he: 'much, many, a little, a few, some, any',
  dinner: 'Do you spend a lot of time outside, or only a little?',
  hook: { q: 'How much of all the water on Earth is fresh water (not salty)?', o: ['About 3 in every 100 litres', 'About 30 in every 100 litres', 'About 70 in every 100 litres'], a: 0,
    reveal: 'Only *a little*: about 3 in every 100 litres! And most of that is ice. That\'s why we shouldn\'t waste it.' },
  learn: { kind: 'rule', title: 'How much? How many?',
    lines: ['*many* / *a few* with plurals you can count: *many* books, *a few* friends.',
      '*much* / *a little* with things you can\'t count: *much* time, *a little* water.',
      '*much* and *many* are most common in questions and with not: How *much* time…? I haven\'t got *many* stickers.',
      '*some* in positive sentences and offers, *any* in questions and with not.'],
    ex: ['How *many* languages can you speak?', 'There is only *a little* juice left.'],
    he: 'many ו-a few לדברים שסופרים (books), much ו-a little לדברים שלא סופרים (water, time). some במשפט חיובי ובהצעה, any בשאלה ובשלילה.' },
  steps: [
    { name: 'Count it or not?', items: [
      { k: 'mc', q: 'How ___ languages can you speak?', o: ['many', 'much', 'little'], a: 0, why: 'languages = a plural you can count → many.' },
      { k: 'mc', q: 'How ___ time do we have?', o: ['much', 'many', 'few'], a: 0, why: 'time: you can\'t count it → much.' },
      { k: 'mc', q: 'There isn\'t ___ milk in the fridge.', o: ['much', 'many', 'a few'], a: 0, why: 'milk: you can\'t count it → much.' },
      { k: 'mc', q: 'I\'ve got ___ friends in my new class. I\'m happy!', o: ['a few', 'a little', 'much'], a: 0, why: 'friends = a plural → a few.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'Would you like ___ tea?', hint: '(some / any)', a: ['some'], why: 'An offer (Would you like…?) → some.' },
      { k: 'tf', q: '"There aren\'t much chairs in the room."', a: false, fix: 'There aren\'t many chairs in the room.', why: 'chairs = a plural → many.',
        he: 'דברים שסופרים (chairs) מקבלים many, לא much.' },
      { k: 'mc', q: 'I haven\'t got ___ pets.', o: ['any', 'some', 'much'], a: 0, why: 'haven\'t + any.' },
      { k: 'mc', q: '___ you see many animals at the zoo yesterday?', o: ['Did', 'Do', 'Have'], a: 0, why: 'Review (questions): yesterday → Did + see.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'There are a few apples on the table.', why: 'apples = a plural → a few.' },
      { k: 'spot', s: 'How *many* homework did you get today?', fix: 'much', why: 'homework: you can\'t count it → How much…?' },
      { k: 'build', s: 'We had very little time to finish.', why: 'time: you can\'t count it → little.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'How *much* people came to the party?', fix: 'many', why: 'people = a plural → How many people…?' },
    { k: 'type', q: 'I have a ___ good friends, and I love them!', hint: '(few / little)', a: ['few'], why: 'friends = a plural → a few.' },
    { k: 'mc', q: '"There isn\'t any juice left." "OK, I ___ buy some."', o: ['will', 'am going', 'do'], a: 0, why: 'Review (will): a decision made right now → I\'ll buy some.' }
  ]
},
{
  id: 'a2g17', url: 'https://test-english.com/grammar-points/a2/most-most-of-the-most/', type: 'grammar',
  title: 'Most, most of, the most', kid: 'Most of us!', he: 'most, most of, the most',
  dinner: 'What do you like the most about the weekend?',
  hook: { q: 'Most of the Earth\'s surface is covered by…', o: ['water', 'land', 'ice'], a: 0,
    reveal: '*Water*! About 71 in every 100 parts of the Earth\'s surface are water, and *most of* it is in the oceans.' },
  learn: { kind: 'rule', title: 'Most, most of, the most',
    lines: ['*most* + a noun (no the) = almost all, in general: *Most children* like games.',
      '*most of* + the / my / these / them: *Most of my friends* live near me. *Most of them* are in my class.',
      '*the most* = more than all the others: I like music *the most*. It\'s *the most* beautiful beach.'],
    ex: ['*Most* birds can fly.', 'Ten people came, and I knew *most of* them.'],
    he: 'most = רוב, בלי the: Most kids like games. כשבא אחריו the, my או them צריך of: most of my friends. ו-the most = הכי, יותר מכל השאר.' },
  steps: [
    { name: 'Most or most of?', items: [
      { k: 'mc', q: '___ birds can fly, but penguins can\'t.', o: ['Most', 'Most of', 'The most'], a: 0, why: 'Birds in general (no the) → Most birds.' },
      { k: 'mc', q: '___ my friends live near the school.', o: ['Most of', 'Most', 'The most'], a: 0, why: 'Before my → Most of my friends.' },
      { k: 'mc', q: 'Which animal do you like ___?', o: ['the most', 'most of', 'most of the'], a: 0, why: 'More than all the others → the most.' },
      { k: 'mc', q: 'I read ___ the book last night.', o: ['most of', 'most', 'the most'], a: 0, why: 'Before the → most of the book.' }
    ] },
    { name: 'Complete', items: [
      { k: 'type', q: 'For me, this is the ___ beautiful beach in Israel!', a: ['most'], why: 'A long adjective → the most beautiful.' },
      { k: 'tf', q: '"Most of people like music."', a: false, fix: 'Most people like music.', why: 'People in general, no the → Most people (no of).',
        he: 'בלי the או my אין of: Most people, לא Most of people.' },
      { k: 'mc', q: 'There were twenty kids at the party, and ___ them were from my class.', o: ['most of', 'most', 'the most'], a: 0, why: 'Before them → most of them.' },
      { k: 'mc', q: 'Most of us ___ visit the museum on our class trip next week.', o: ['are going to', 'go to', 'will to'], a: 0,
        why: 'Review (going to): a plan for next week → are going to visit.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Most of my friends like football.', why: 'Before my → Most of my friends.' },
      { k: 'spot', s: 'Summer is the *more* fun season of the year.', fix: 'most', why: 'More than all the other seasons → the most fun.' },
      { k: 'build', s: 'Which subject do you like the most?', why: 'Review (questions): Which subject + do you like + the most?' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Most *of* children love the beach.', fix: '', why: 'Children in general, no the → Most children love the beach.' },
    { k: 'type', q: 'The thing I like ___ about summer is the long days.', a: ['the most', 'most'], why: 'More than all the other things → the most.' },
    { k: 'mc', q: 'Most of the kids ___ when the teacher came in.', o: ['were talking', 'was talking', 'are talking'], a: 0,
      why: 'Review (past continuous): most of the kids = they → were talking.' }
  ]
},
{
  id: 'a2v06', url: 'https://test-english.com/vocabulary/a2/housework-a2-english-vocabulary/', type: 'vocabulary',
  title: 'Housework', kid: 'Helping at home', he: 'עבודות בית',
  dinner: 'Which job at home do you like doing the most?',
  hook: { q: 'One of the first vacuum cleaners (London, 1901) was so big that…', o: ['horses pulled it, and it stayed in the street', 'ten people carried it', 'it was as tall as a house'], a: 0,
    reveal: '*Horses pulled it* through the streets! The machine stayed outside, and long tubes went in through the windows to clean the rooms.' },
  learn: { kind: 'words', title: 'Eight jobs at home', words: [
    { w: 'do the washing-up', d: 'wash the plates, cups and forks after a meal', ex: 'After dinner I *do the washing-up*.' },
    { w: 'make the bed', d: 'put the sheet and blanket in order', ex: 'I *make my bed* every morning.', pic: 'bed' },
    { w: 'vacuum', d: 'clean the floor with a machine that takes up the dust', ex: 'Can you *vacuum* the carpet, please?' },
    { w: 'do the washing', d: 'wash clothes, usually in a machine', ex: 'We *do the washing* twice a week.' },
    { w: 'tidy up', d: 'put things back in their places', ex: '*Tidy up* your toys before bed.' },
    { w: 'sweep', d: 'clean the floor with a brush (a broom)', ex: 'I *sweep* the balcony after a windy day.' },
    { w: 'take out the rubbish', d: 'carry the bag from the bin outside', ex: 'Whose turn is it to *take out the rubbish*?' },
    { w: 'set the table', d: 'put plates, forks and cups on the table before a meal', ex: 'Please *set the table* for four people.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'You clean the carpet with a noisy machine. You ___ it.', o: ['vacuum', 'sweep', 'set'], a: 0, why: 'vacuum = clean with a machine. (sweep = with a brush)' },
      { k: 'mc', q: 'After a meal, you wash the plates and cups. You do the ___.', o: ['washing-up', 'washing', 'cooking'], a: 0, why: 'the washing-up = plates and cups. the washing = clothes.',
        he: 'washing-up = שטיפת כלים. washing = כביסה.' },
      { k: 'mc', q: 'Before dinner, you put plates and forks on the table. You ___ the table.', o: ['set', 'make', 'do'], a: 0, why: 'set the table.' },
      { k: 'mc', q: 'In the morning you put your blanket and pillow in order. You ___ your bed.', o: ['make', 'do', 'set'], a: 0, why: 'make the bed.',
        he: 'מסדרים את המיטה = make the bed, לא do.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'make or do?', g: ['make', 'do'],
        w: [['the bed', 0], ['a cake', 0], ['a mess', 0], ['the washing-up', 1], ['homework', 1], ['the washing', 1]],
        why: 'make: the bed, a cake, a mess · do: the washing-up, homework, the washing' },
      { k: 'hear', say: 'Can you take out the rubbish, please? The bin is full.', q: 'What job is it?', o: ['take out the rubbish', 'do the washing', 'set the table'], a: 0,
        why: 'The bin is full → take out the rubbish.' },
      { k: 'spell', w: 'sweep', clue: 'Clean the floor with a broom.', why: 'sweep: s-w-e-e-p.' },
      { k: 'mc', q: '"Where is Yoni?" "In the kitchen. He ___ the floor."', o: ['is sweeping', 'sweeps', 'sweep'], a: 0,
        why: 'Review (present continuous): right now → is sweeping.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'After the party',
        t: 'After the class party at Gal\'s flat, everything was a mess, so all the friends [1]. Noa [2] up the toys and put them in the box. Adam [3] the carpet with the noisy machine. Gal did the [4]: she washed every plate and cup. "The flat looks [5] than before the party!" Gal laughed.',
        gaps: [
          { o: ['helped', 'help', 'helping'], a: 0, why: 'Review (past simple): a story in the past → helped.' },
          { o: ['tidied', 'made', 'did'], a: 0, why: 'tidy up = put things back in their places.' },
          { o: ['vacuumed', 'swept', 'set'], a: 0, why: 'With a noisy machine → vacuumed.' },
          { o: ['washing-up', 'washing', 'bed'], a: 0, why: 'Plates and cups → the washing-up.' },
          { o: ['better', 'good', 'best'], a: 0, why: 'Review (comparing): better than.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I always *do* my bed in the morning.', fix: 'make', why: 'make the bed, not do the bed.' },
    { k: 'build', s: 'Whose turn is it to take out the rubbish?', why: 'Whose turn is it + to + take out the rubbish?' },
    { k: 'type', q: 'Every morning I ___ my bed.', hint: '(make / do)', a: ['make'], why: 'make the bed.' }
  ]
},
{
  id: 'a2v07', url: 'https://test-english.com/vocabulary/a2/towns-and-cities-a2-english-vocabulary/', type: 'vocabulary',
  title: 'Towns and cities', kid: 'Around the town', he: 'בעיר: מקומות ודרכים',
  dinner: 'If you could build one new place in our town, what would it be?',
  hook: { q: 'In the old centre of Venice, in Italy, there are no cars. How do people get around?', o: ['by boat and on foot', 'by train', 'by underground'], a: 0,
    reveal: 'By *boat* and *on foot*! Venice has canals instead of streets, and about 400 *bridges*.' },
  learn: { kind: 'words', title: 'Eight words for the town', words: [
    { w: 'a square', d: 'an open place in a town with buildings around it', ex: 'There is a big fountain in the main *square*.' },
    { w: 'a bridge', d: 'a road or path over a river or a road', ex: 'We walked across the *bridge* over the river.' },
    { w: 'a museum', d: 'a building where you can see old or interesting things', ex: 'The *museum* has old coins and dinosaur bones.' },
    { w: 'a library', d: 'a building where you can borrow books', ex: 'I borrow two books from the *library* every week.', pic: 'book' },
    { w: 'traffic lights', d: 'red, yellow and green lights that tell cars when to stop', ex: 'Wait for the green light at the *traffic lights*.' },
    { w: 'a roundabout', d: 'a place where roads meet and cars drive around a circle', ex: 'Turn right at the *roundabout*.' },
    { w: 'a pavement', d: 'the path next to the road for people on foot', ex: 'Walk on the *pavement*, not on the road.' },
    { w: 'a neighbourhood', d: 'one part of a town where people live', ex: 'My *neighbourhood* has a small park.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'A building where you can see old and interesting things is a ___.', o: ['museum', 'library', 'bridge'], a: 0, why: 'a museum = old and interesting things to see.' },
      { k: 'mc', q: 'Here roads meet, and cars drive around a circle. It\'s a ___.', o: ['roundabout', 'square', 'pavement'], a: 0, why: 'a roundabout = cars go around a circle.' },
      { k: 'mc', q: 'People walk on the ___, next to the road.', o: ['pavement', 'roundabout', 'bridge'], a: 0, why: 'the pavement = the path for people on foot.' },
      { k: 'mc', q: 'You can cross a river on a ___.', o: ['bridge', 'square', 'roundabout'], a: 0, why: 'a bridge goes over a river.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'On the street, or a building?', g: ['on the street', 'a building'],
        w: [['a roundabout', 0], ['traffic lights', 0], ['a pavement', 0], ['a museum', 1], ['a library', 1], ['a town hall', 1]],
        why: 'on the street: a roundabout, traffic lights, a pavement · a building: a museum, a library, a town hall' },
      { k: 'hear', say: 'Go straight on, and turn left at the traffic lights.', q: 'Where do you turn left?', o: ['at the traffic lights', 'at the roundabout', 'at the bridge'], a: 0,
        why: 'turn left at the traffic lights.' },
      { k: 'spell', w: 'bridge', clue: 'You walk over it to cross a river.', why: 'bridge: b-r-i-d-g-e (the d is quiet).' },
      { k: 'mc', q: '"Where ___ you going?" "To the museum."', o: ['are', 'do', 'is'], a: 0, why: 'Review (present continuous): are + you + going?' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'My part of town',
        t: 'Welcome to my [1]! It is quiet, but the city centre is only ten minutes away. Every morning I walk to school on the [2], and I wait for the green light at the [3]. In the main [4] there is a big fountain, and people sit there and talk. My favourite building is the [5]: it has thousands of books, and I can borrow three every week.',
        gaps: [
          { o: ['neighbourhood', 'roundabout', 'bridge'], a: 0, why: 'The part of town where I live → my neighbourhood.' },
          { o: ['pavement', 'roundabout', 'car park'], a: 0, why: 'People walk on the pavement.' },
          { o: ['traffic lights', 'museum', 'square'], a: 0, why: 'A green light → the traffic lights.' },
          { o: ['square', 'pavement', 'bridge'], a: 0, why: 'An open place with a fountain and people → the square.' },
          { o: ['library', 'museum', 'car park'], a: 0, why: 'You borrow books from a library.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'We went to the *bookshop* and borrowed three books.', fix: 'library', why: 'You borrow books from a library. In a bookshop you buy them.',
      he: 'library = ספרייה (שואלים ספרים). bookshop = חנות ספרים (קונים).' },
    { k: 'build', s: 'Turn right at the next roundabout.', why: 'Turn right + at the next roundabout.' },
    { k: 'type', q: 'In my town there ___ a big park.', hint: '(is / are)', a: ['is'], why: 'a park = one → there is.' }
  ]
},
{
  id: 'a2v08', url: 'https://test-english.com/vocabulary/a2/common-phrasal-verbs-a2-english-vocabulary/', type: 'vocabulary',
  title: 'Common phrasal verbs', kid: 'Wake up, get up!', he: 'פעלים עם מילה קטנה (phrasal verbs)',
  dinner: 'What time do you usually wake up, and what time do you get up?',
  hook: { q: 'Before alarm clocks were cheap, some towns in Britain had "knocker-uppers". What was their job?', o: ['to tap on windows and wake people up', 'to turn on the street lights', 'to give back lost keys'], a: 0,
    reveal: 'They *woke* people *up*! A knocker-upper tapped on bedroom windows with a long stick, so workers got up on time.' },
  learn: { kind: 'words', title: 'Eight verbs with a little word', words: [
    { w: 'wake up', d: 'stop sleeping', ex: 'I *wake up* at seven, but I stay in bed.' },
    { w: 'get up', d: 'get out of bed', ex: 'Then I *get up* at ten past seven.' },
    { w: 'put on', d: 'start wearing clothes', ex: 'It\'s cold. *Put on* your hoodie.' },
    { w: 'take off', d: 'remove clothes or shoes', ex: '*Take off* your shoes at the door, please.', pic: 'shoe' },
    { w: 'turn on', d: 'make a machine or a light start', ex: 'Can you *turn on* the light?' },
    { w: 'turn off', d: 'make a machine or a light stop', ex: '*Turn off* the TV and go to bed.', pic: 'TV' },
    { w: 'look for', d: 'try to find', ex: 'I\'m *looking for* my keys.', pic: 'key' },
    { w: 'give back', d: 'return something to the person it belongs to', ex: 'Can I borrow your pen? I\'ll *give* it *back* later.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'It\'s dark in here. Can you ___ the light?', o: ['turn on', 'turn off', 'take off'], a: 0, why: 'turn on = make a light start.' },
      { k: 'mc', q: 'It\'s hot. ___ your jacket.', o: ['Take off', 'Put on', 'Look for'], a: 0, why: 'take off clothes when it is hot.' },
      { k: 'mc', q: 'I can\'t find my phone. I\'m ___ it everywhere.', o: ['looking for', 'looking at', 'giving back'], a: 0, why: 'look for = try to find.' },
      { k: 'mc', q: 'Thanks for the book! I\'ll give it ___ on Monday.', o: ['back', 'up', 'off'], a: 0, why: 'give back = return it.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Clothes, or machines and lights?', g: ['clothes', 'machines and lights'],
        w: [['put on a coat', 0], ['take off your shoes', 0], ['put on a hat', 0], ['turn on the TV', 1], ['turn off the light', 1], ['turn on the computer', 1]],
        why: 'clothes: put on, take off · machines and lights: turn on, turn off' },
      { k: 'hear', say: 'Please turn off your phones before the film starts.', q: 'What do people need to do?', o: ['switch their phones off', 'look for their phones', 'switch their phones on'], a: 0,
        why: 'turn off = switch off: make it stop.' },
      { k: 'spell', w: 'wake', clue: 'Stop sleeping: ___ up.', why: 'wake up: w-a-k-e.' },
      { k: 'mc', q: 'This morning I ___ up at six o\'clock.', o: ['woke', 'waked', 'wake'], a: 0, why: 'Review (past simple): wake is irregular → woke.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'A busy morning',
        t: 'Yesterday Tom\'s alarm didn\'t ring, and he woke [1] very late! He [2] up and ran to the bathroom. Then he [3] on his school clothes. He looked [4] his bag for ten minutes. It was under the bed! At school, his friend Ella [5] him back his pencil case. "You left it here on Monday," she said.',
        gaps: [
          { o: ['up', 'on', 'off'], a: 0, why: 'wake up = stop sleeping.' },
          { o: ['got', 'put', 'turned'], a: 0, why: 'get up (past: got up) = get out of bed.' },
          { o: ['put', 'took', 'turned'], a: 0, why: 'put on clothes. Review (past simple): put → put.' },
          { o: ['for', 'at', 'after'], a: 0, why: 'He tried to find it → looked for.' },
          { o: ['gave', 'give', 'was give'], a: 0, why: 'Review (past simple): give → gave back.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'It\'s dark. Please *open* the light.', fix: 'turn on', why: 'In English we turn on a light (and open a door).',
      he: 'בעברית "פותחים את האור", אבל באנגלית turn on the light. וכיבוי: turn off.' },
    { k: 'build', s: 'I am looking for my blue hoodie.', why: 'look for = try to find: am looking for + my blue hoodie.' },
    { k: 'type', q: 'On school days I ___ up at seven o\'clock.', hint: '(get / put)', a: ['get'], why: 'get up = get out of bed.' }
  ]
},
{
  id: 'a2v09', url: 'https://test-english.com/vocabulary/a2/the-weather-a2-english-vocabulary/', type: 'vocabulary',
  title: 'The weather', kid: 'What\'s the weather like?', he: 'מזג האוויר',
  dinner: 'What is your favourite kind of weather, and why?',
  hook: { q: 'Which is hotter: a flash of lightning or the surface of the Sun?', o: ['the lightning', 'the surface of the Sun', 'they are the same'], a: 0,
    reveal: 'The *lightning*! For a moment, it is about five times hotter than the surface of the Sun. It heats the air so fast that we hear a loud noise: *thunder*.' },
  learn: { kind: 'words', title: 'Eight weather words', words: [
    { w: 'sunny', d: 'with a lot of sun', ex: 'It\'s *sunny* today. Let\'s go to the beach!', pic: 'sun' },
    { w: 'cloudy', d: 'with a lot of clouds in the sky', ex: 'It\'s *cloudy*, but it isn\'t raining.' },
    { w: 'windy', d: 'with a lot of wind', ex: 'It\'s *windy*: a great day to fly a kite!', pic: 'kite' },
    { w: 'foggy', d: 'with a thick cloud near the ground, so you can\'t see far', ex: 'It was so *foggy* that we couldn\'t see the sea.' },
    { w: 'a storm', d: 'very bad weather with strong wind and rain', ex: 'There was a big *storm* last night.' },
    { w: 'lightning', d: 'a bright flash of light in the sky in a storm', ex: 'Did you see the *lightning*?' },
    { w: 'a shower', d: 'a short time of rain', ex: 'There may be a few *showers* this afternoon.', pic: 'rain' },
    { w: 'the forecast', d: 'what the weather will be like, on TV, the radio or the internet', ex: 'The *forecast* says it will be sunny tomorrow.' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'There is a lot of wind today. It\'s ___.', o: ['windy', 'foggy', 'sunny'], a: 0, why: 'wind → windy.' },
      { k: 'mc', q: 'You can\'t see far because of a thick cloud near the ground. It\'s ___.', o: ['foggy', 'sunny', 'windy'], a: 0, why: 'fog → foggy.' },
      { k: 'mc', q: 'A bright flash in the sky during a storm is ___.', o: ['lightning', 'thunder', 'a shower'], a: 0, why: 'lightning = the flash. thunder = the loud noise.',
        he: 'lightning = ברק (האור). thunder = רעם (הרעש).' },
      { k: 'mc', q: 'The ___ says it will rain tomorrow.', o: ['forecast', 'storm', 'shower'], a: 0, why: 'the forecast tells you the weather before it comes.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'A thing, or a word after "It\'s…"?', g: ['a thing', 'It\'s…'],
        w: [['sun', 0], ['cloud', 0], ['wind', 0], ['sunny', 1], ['cloudy', 1], ['windy', 1]],
        why: 'sun → It\'s sunny. cloud → It\'s cloudy. wind → It\'s windy. Add -y (sun → sunny: double n).' },
      { k: 'hear', say: 'Take your umbrella. There may be a few showers this afternoon.', q: 'What will the weather be like?', o: ['a little rain', 'very hot', 'foggy'], a: 0,
        why: 'showers = short times of rain.' },
      { k: 'spell', w: 'cloudy', clue: 'A lot of clouds in the sky: it\'s ___.', why: 'cloud + y: c-l-o-u-d-y.' },
      { k: 'mc', q: 'Look at those black clouds! It ___ rain.', o: ['is going to', 'will to', 'going'], a: 0, why: 'Review (going to): we can see it coming → is going to rain.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Weather in Israel',
        t: 'In Israel, most of the rain [1] in winter, from about November to March. Summers are hot and dry, and in Eilat it is often [2] than 40 degrees! In winter there are sometimes big [3] with thunder and lightning. Snow is rare, but it sometimes [4] in Jerusalem. Before a class trip, always check the [5]!',
        gaps: [
          { o: ['falls', 'fall', 'falling'], a: 0, why: 'Review (present simple): the rain = it → falls.' },
          { o: ['hotter', 'hot', 'hottest'], a: 0, why: 'Comparing with than → hotter than 40 degrees.' },
          { o: ['storms', 'showers', 'forecasts'], a: 0, why: 'Thunder and lightning come with storms.' },
          { o: ['snows', 'snow', 'is snow'], a: 0, why: 'Review (present simple): it → snows.' },
          { o: ['forecast', 'lightning', 'storm'], a: 0, why: 'Check the forecast to know the weather before a trip.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Yesterday it was very *sun*, so we went to the beach.', fix: 'sunny', why: 'After it was we need the adjective: sunny.' },
    { k: 'build', s: 'What is the weather like today?', why: 'What is the weather like? asks about the weather.' },
    { k: 'type', q: 'I love ___ days, because I can go to the beach.', hint: '(sun)', a: ['sunny'], why: 'sun + n + y → sunny days.' }
  ]
},
{
  id: 'a2u05', url: 'https://test-english.com/use-of-english/a2/a2-english-test-5-text-with-multiple-choice-gaps/', type: 'use-of-english',
  title: 'The tortoise in the library', kid: 'Speedy the tortoise', he: 'חדשות מצחיקות: הצב שהגיע לספרייה',
  dinner: 'If you had a very slow pet, what funny name would you give it?',
  hook: { q: 'How long can a giant tortoise live?', o: ['about 15 years', 'about 40 years', 'more than 150 years'], a: 2,
    reveal: '*More than 150 years*! Jonathan, a giant tortoise on the island of Saint Helena, hatched in about 1832. Today\'s story is made up!' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a funny news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A pet tortoise leaves its garden. Where do you think it goes?', o: ['To the park', 'To the library', 'To the beach'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'A slow visitor',
        t: 'Last Tuesday, a family in Haifa had a big problem: their tortoise, Speedy, wasn\'t in the garden. "We looked [1] him everywhere," said ten-year-old Maya. Three days later, a librarian [2] a strange noise behind the shelves. It was Speedy! He [3] a piece of lettuce that a child left on the floor. The library is only 300 metres from Maya\'s house, but for a tortoise that is a [4] long way. Nobody knows [5] he got in. "Speedy is the [6] animal I know, but he\'s also the bravest," laughed Maya. "We [7] just built a new gate. And next week we [8] take him to the library again, because he really loves books!"',
        gaps: [
          { o: ['for', 'at', 'after'], a: 0, why: 'look for = try to find.' },
          { o: ['heard', 'hears', 'was hear'], a: 0, why: 'Three days later, a short action in the past → heard.' },
          { o: ['was eating', 'is eating', 'were eating'], a: 0, why: 'An action going on in the past, he → was eating.' },
          { o: ['very', 'too much', 'many'], a: 0, why: 'very + adjective: a very long way.' },
          { o: ['how', 'who', 'what'], a: 0, why: 'In what way did he get in? → how.' },
          { o: ['slowest', 'slower', 'most slow'], a: 0, why: 'More than all the others → the slowest.' },
          { o: ['have', 'did', 'are'], a: 0, why: 'Present perfect: have just built.' },
          { o: ['are going to', 'will to', 'going'], a: 0, why: 'A plan for next week → are going to take.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'Speedy is very slow, ___ he walked 300 metres!', o: ['but', 'so', 'because'], a: 0, why: 'Review (connectors): but shows a surprise or a contrast.' },
      { k: 'mc', q: 'Nobody ___ where Speedy was.', o: ['knew', 'know', 'knowed'], a: 0, why: 'Review (past simple): know is irregular → knew.' },
      { k: 'tf', q: '"While Maya was looking for Speedy, he was walking to the library."', a: true, why: 'Review (past continuous): two actions going on at the same time → was looking, was sleeping.' },
      { k: 'type', q: 'Have you ever ___ a tortoise?', hint: '(see)', a: ['seen'], why: 'have + the third form: see → saw → seen.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'The tortoise was eating a piece of lettuce.', why: 'was + eating: an action going on in the past.' },
    { k: 'type', q: 'My favourite animal is ___ than a tortoise!', hint: '(fast)', a: ['faster'], why: 'fast → faster than.' }
  ]
},
{
  id: 'a2u06', url: 'https://test-english.com/use-of-english/a2/a2-english-test-6-multiple-choice-questions/', type: 'use-of-english',
  title: 'The seagull with sunglasses', kid: 'A bird with style', he: 'חדשות מצחיקות: השחף ומשקפי השמש',
  dinner: 'What is the funniest thing you have ever seen at the beach?',
  hook: { q: 'Some birds can stay in the air for months without landing. Which bird holds the record?', o: ['the common swift', 'the seagull', 'the parrot'], a: 0,
    reveal: 'The *common swift*! Some swifts stay in the air for about ten months: they eat, and scientists think they even sleep, while flying. Today\'s story is made up!' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a funny news story about a bird with style (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A seagull takes something from people on the beach. What do you think it takes?', o: ['Sunglasses', 'Sandwiches', 'Hats'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'A bird with style',
        t: 'Last summer, the lifeguards at a beach in Netanya [1] a very strange bird. Every afternoon, a big grey seagull flew down and took [2] from the towels: a hat, a sock, a comb, but most of all, sunglasses! "At first we [3] it was funny," said a lifeguard called Rami, "but then people got angry." One day, a girl [4] the seagull to its nest on the rocks. Inside, there were [5] than thirty pairs of sunglasses! "It\'s the [6] stylish bird in Israel," laughed Rami. The lifeguards gave all the sunglasses [7] to their owners. Now there is a sign on the beach: "Please don\'t leave [8] on your towel!"',
        gaps: [
          { o: ['noticed', 'notice', 'are noticing'], a: 0, why: 'Last summer → past simple: noticed.' },
          { o: ['something', 'anything', 'nothing'], a: 0, why: 'A positive sentence → something.' },
          { o: ['thought', 'think', 'thinked'], a: 0, why: 'think is irregular: think → thought.' },
          { o: ['followed', 'follows', 'was follow'], a: 0, why: 'One day, a short action in the past → followed.' },
          { o: ['more', 'most', 'much'], a: 0, why: 'more than thirty.' },
          { o: ['most', 'more', 'much'], a: 0, why: 'stylish is long → the most stylish.' },
          { o: ['back', 'up', 'off'], a: 0, why: 'give back = return to the owner.' },
          { o: ['anything', 'something', 'nothing'], a: 0, why: 'don\'t + any-: don\'t leave anything.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'The seagull took my hat while I ___.', o: ['was swimming', 'swim', 'am swimming'], a: 0, why: 'Review (past continuous): while + an action going on → was swimming.' },
      { k: 'mc', q: 'Where ___ the seagull keep all the sunglasses?', o: ['did', 'was', 'were'], a: 0, why: 'Review (questions): a question in the past → did + keep.' },
      { k: 'tf', q: '"I have ever seen a seagull with sunglasses."', a: false, fix: 'I have never seen a seagull with sunglasses.', why: 'ever is for questions. In a sentence like this, use never.' },
      { k: 'type', q: 'The seagull flew down ___ take a hat.', hint: '(one word)', a: ['to'], why: 'Review (purpose): why did it fly down? to take a hat.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'The seagull took the sunglasses to its nest.', why: 'Review (past simple): take → took.' }
  ]
},
{
  id: 'a2l10', url: 'https://test-english.com/listening/a2/shopping-for-clothes-a2-english-listening-test/', type: 'listening',
  title: 'The perfect jacket', kid: 'Finding the right jacket', he: 'קונים בגדים: מידה, צבע ומדידה', dinner: 'What is your favourite piece of clothing, and why?',
  hook: { q: 'Why is a T-shirt called a T-shirt?', o: ['It looks like the letter T.', 'It was first made for tennis.', 'It was first made for tea time.'], a: 0,
    reveal: 'Because *it looks like the letter T* when you put it flat on a table: the long body and two short sleeves.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'try on', d: 'put on clothes in a shop to see if they are good for you' },
    { w: 'fit', d: 'be the right size: not too big and not too small' },
    { w: 'the changing room', d: 'a small room in a shop where you try on clothes' }
  ], predict: { q: 'Maya needs a jacket for a class trip. Does she find one?', o: ['Yes, the first one she tries', 'Yes, but not the first one', 'No, she goes home with nothing'] } },
  show: { cast: 'Maya is in a clothes shop with her uncle Sami. A shop assistant helps them.', names: { M: 'Maya', A: 'Shop assistant', S: 'Uncle Sami' }, voices: { M: 'af_nova', A: 'bm_george', S: 'am_adam' },
    parts: [
      { lines: [
        ['A', 'Good morning! Can I help you?'],
        ['M', 'Yes, please. I\'m looking for a warm jacket. We\'re going on a class trip to the north next week.'],
        ['A', 'Lovely! What colour would you like?'],
        ['M', 'Green or blue, please. Not black. I have a black one, but it\'s too small now.']
      ], items: [
        { k: 'mc', q: 'Why does Maya need a jacket?', o: ['for a class trip', 'for a birthday party', 'for a football match'], a: 0, why: '"We\'re going on a class trip to the north next week."' },
        { k: 'mc', q: 'What is the problem with her black jacket?', o: ['It is too small.', 'It is too big.', 'It is the wrong colour.'], a: 0, why: '"I have a black one, but it\'s too small now."' }
      ] },
      { lines: [
        ['A', 'What size are you?'],
        ['M', 'I think I\'m a medium.'],
        ['A', 'Here\'s a blue one in medium. The changing room is over there.'],
        ['S', 'How is it, Maya?'],
        ['M', 'The colour is great, but the sleeves are too long. Look, I can\'t see my hands!'],
        ['A', 'No problem. Let\'s try a small.']
      ], items: [
        { k: 'mc', q: 'What is wrong with the blue jacket?', o: ['The sleeves are too long.', 'The colour is not nice.', 'It is too short.'], a: 0, why: '"the sleeves are too long. Look, I can\'t see my hands!"' },
        { k: 'tf', q: 'Maya doesn\'t like the colour of the blue jacket.', a: false, fix: 'She thinks the colour is great.', why: '"The colour is great, but…"' }
      ] },
      { lines: [
        ['M', 'This one fits perfectly! And it has a hood.'],
        ['S', 'Good, because it can rain a lot in the north.'],
        ['A', 'Would you like a bag for it?'],
        ['M', 'No, thanks. I\'m going to wear it now!']
      ], items: [
        { k: 'mc', q: 'Why does Maya like the small jacket?', o: ['It fits perfectly and has a hood.', 'It is black.', 'It is very long.'], a: 0, why: '"This one fits perfectly! And it has a hood."' },
        { k: 'mc', q: 'What is Maya going to do with the jacket?', o: ['wear it now', 'put it in a bag', 'give it to her uncle'], a: 0, why: '"I\'m going to wear it now!"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'The ___ room is over there.', a: ['changing'], why: 'the changing room = the small room where you try on clothes.' },
      { k: 'hear', say: 'The sleeves are too long.', q: 'What is the problem?', o: ['The arms of the jacket are too long.', 'The jacket is too short.', 'The jacket is the wrong colour.'], a: 0,
        why: 'sleeves = the parts of a jacket or a shirt for your arms.' },
      { k: 'mc', q: 'Maya ___ for a warm jacket at the moment.', o: ['is looking', 'looks', 'look'], a: 0, why: 'Review: at the moment → present continuous: she is looking.' },
      { k: 'mc', q: 'Excuse me, ___ is the changing room?', o: ['where', 'what', 'who'], a: 0, why: 'Review: a question about a place → where.',
        he: 'שואלים על מקום עם where: Where is the changing room?' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Where is the changing room, please?', why: 'Where + is + the place? A polite question in a shop.' },
    { k: 'type', q: 'I ___ going to wear my new jacket tomorrow.', hint: '(am / is / are)', a: ['am'], why: 'Review: I → am going to.' }
  ]
},
{
  id: 'a2l11', url: 'https://test-english.com/listening/a2/new-years-resolutions-a2-english-listening-test/', type: 'listening',
  title: 'Big plans for the school year', kid: 'Our plans for this year', he: 'תוכניות לשנה עם be going to', dinner: 'What is one new thing you are going to try this year?',
  hook: { q: 'In Israel, the school year usually starts on…', o: ['1 September', '1 January', '1 June'], a: 0,
    reveal: 'Usually on *1 September*! A new school year is a great time for new plans and goals.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a goal', d: 'something you want to do, and you work to make it happen' },
    { w: 'be going to', d: 'for plans: We\'re going to build a robot.' },
    { w: 'a club', d: 'a group of people who meet to do a hobby together' }
  ], predict: { q: 'The school science club talks about this year. What is their big plan?', o: ['to build a robot', 'to visit the Moon', 'to grow a garden'] } },
  show: { cast: 'On School Radio, Noa talks to two members of the science club, Adam and Lina.', names: { N: 'Noa', A: 'Adam', L: 'Lina' }, voices: { N: 'af_sky', A: 'am_echo', L: 'bf_lily' },
    parts: [
      { lines: [
        ['N', 'Hello and welcome to School Radio! Today the science club tells us about their plans for this year. Adam, what are you going to do?'],
        ['A', 'This year we\'re going to build a robot. It\'s going to sort the rubbish in the school yard.'],
        ['N', 'Wow! When are you going to start?'],
        ['A', 'Next week. We\'re meeting every Tuesday after school.']
      ], items: [
        { k: 'mc', q: 'What is the club going to build?', o: ['a robot', 'a rocket', 'a garden'], a: 0, why: '"we\'re going to build a robot"' },
        { k: 'mc', q: 'When does the club meet?', o: ['every Tuesday after school', 'every morning', 'on Fridays'], a: 0, why: '"We\'re meeting every Tuesday after school."' }
      ] },
      { lines: [
        ['N', 'Lina, what about you?'],
        ['L', 'I\'m going to start a club newspaper. Every month we\'re going to write about a new experiment.'],
        ['N', 'Are you going to print it on paper?'],
        ['L', 'No, it\'s going to be on the school website. That\'s better for the planet.']
      ], items: [
        { k: 'mc', q: 'What is Lina going to start?', o: ['a club newspaper', 'a cooking club', 'a robot team'], a: 0, why: '"I\'m going to start a club newspaper."' },
        { k: 'tf', q: 'The newspaper is going to be on paper.', a: false, fix: 'It is going to be on the school website.', why: '"No, it\'s going to be on the school website."' }
      ] },
      { lines: [
        ['N', 'Do you have any other goals?'],
        ['A', 'Yes. In the spring we\'re going to take part in a science competition in Haifa.'],
        ['L', 'And I\'m going to learn to code. Adam is going to teach me!'],
        ['A', 'Am I? OK, now I am!']
      ], items: [
        { k: 'mc', q: 'Where is the competition?', o: ['in Haifa', 'in Eilat', 'at their school'], a: 0, why: '"a science competition in Haifa"' },
        { k: 'mc', q: 'Who is going to teach Lina to code?', o: ['Adam', 'the teacher', 'Noa'], a: 0, why: '"Adam is going to teach me!" Adam didn\'t know, but now he says yes.' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'This year we\'re going to ___ a robot.', a: ['build'], why: 'build = make something big from parts.' },
      { k: 'hear', say: 'We are meeting every Tuesday after school.', q: 'What does this tell you?', o: ['when the club meets', 'when the competition is', 'when the robot is ready'], a: 0,
        why: 'every Tuesday after school = the time of their meetings.' },
      { k: 'mc', q: '"Oh no, I forgot my pencil!" "Don\'t worry, I ___ lend you one."', o: ['will', 'am', 'going to'], a: 0,
        why: 'Review: a decision at the moment you speak → will.', he: 'החלטה שמתקבלת עכשיו, ברגע הדיבור: will. תוכנית שכבר החלטנו עליה: going to.' },
      { k: 'tf', q: '"We are meeting on Tuesday" is about a plan in the future.', a: true, why: 'Review: present continuous + a future time = a fixed plan.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'My friends and I are going to start a club.', why: 'are going to + start: a plan.' },
    { k: 'type', q: 'What ___ you going to do this weekend?', hint: '(are / do / will)', a: ['are'], why: 'Review: a question with going to: What are you going to do?' }
  ]
},
{
  id: 'a2l12', url: 'https://test-english.com/listening/a2/talking-about-films-listening-test/', type: 'listening',
  title: 'Movie night', kid: 'Which film shall we watch?', he: 'מדברים על סרטים: סוגים ודעות', dinner: 'What is the funniest film you have ever seen?',
  hook: { q: 'How many pictures does a normal cinema film show every second?', o: ['24', '2', '240'], a: 0,
    reveal: '*24 pictures every second*! They change so fast that our eyes see moving pictures.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a comedy', d: 'a funny film' },
    { w: 'an animated film', d: 'a film with drawings or computer pictures, not real actors' },
    { w: 'the ending', d: 'how a film or a story finishes' }
  ], predict: { q: 'Two friends choose a film for tonight. Do they agree quickly?', o: ['Yes, very quickly', 'Yes, but after a long talk', 'No, they watch two films'] } },
  show: { cast: 'Rana and Yoav choose a film to watch tonight. The films are all made up.', names: { R: 'Rana', Y: 'Yoav' }, voices: { R: 'af_jessica', Y: 'am_liam' },
    parts: [
      { lines: [
        ['R', 'Let\'s watch a film tonight. What do you want to see?'],
        ['Y', 'What about The Flying Sandwich? It\'s a comedy about a chef who opens a restaurant on a plane.'],
        ['R', 'I saw it last week with my cousins. It was funny, but the ending was silly.']
      ], items: [
        { k: 'mc', q: 'What kind of film is The Flying Sandwich?', o: ['a comedy', 'an adventure film', 'an animated film'], a: 0, why: '"It\'s a comedy about a chef…"' },
        { k: 'tf', q: 'Rana has never seen The Flying Sandwich.', a: false, fix: 'She saw it last week with her cousins.', why: '"I saw it last week with my cousins."' }
      ] },
      { lines: [
        ['Y', 'OK. What about Planet of Socks? It\'s an animated film. Lost socks live on a planet, and they want to go home.'],
        ['R', 'Ha! So that\'s where all my lost socks go! Is it long?'],
        ['Y', 'No, it\'s only an hour and a half.']
      ], items: [
        { k: 'mc', q: 'What is Planet of Socks about?', o: ['lost socks on a planet', 'a chef on a plane', 'a dog in space'], a: 0, why: '"Lost socks live on a planet."' },
        { k: 'mc', q: 'How long is Planet of Socks?', o: ['an hour and a half', 'two hours', 'half an hour'], a: 0, why: '"it\'s only an hour and a half"' }
      ] },
      { lines: [
        ['R', 'I prefer adventure films. Have you heard of The Last Lighthouse? Two kids find an old map in a lighthouse.'],
        ['Y', 'My brother says it\'s the best film of the year. But is it scary?'],
        ['R', 'Not at all. It\'s exciting, and the music is beautiful.'],
        ['Y', 'OK, let\'s watch it. And Planet of Socks next week!']
      ], items: [
        { k: 'mc', q: 'Which film do they watch tonight?', o: ['The Last Lighthouse', 'Planet of Socks', 'The Flying Sandwich'], a: 0, why: '"OK, let\'s watch it." (The Last Lighthouse)' },
        { k: 'mc', q: 'What does Rana say about The Last Lighthouse?', o: ['It is exciting, not scary.', 'It is very scary.', 'It is long and boring.'], a: 0, why: '"Not at all. It\'s exciting…"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'It was funny, but the ___ was silly.', a: ['ending'], why: 'the ending = how the film finishes.' },
      { k: 'hear', say: 'It is exciting, and the music is beautiful.', q: 'What does she like about the film?', o: ['the music', 'the actors', 'the ending'], a: 0, why: '"the music is beautiful"' },
      { k: 'mc', q: 'Rana ___ the comedy last week.', o: ['saw', 'seen', 'sees'], a: 0, why: 'Review: last week → past simple: see → saw.' },
      { k: 'mc', q: 'The film was very long. ___, it was never boring.', o: ['However', 'Because', 'So'], a: 0,
        why: 'Review: However = but; a surprising idea comes next.', he: 'However אומר "אבל, למרות זאת". הסרט ארוך, אבל לא משעמם.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'What kind of films do you like?', why: 'What kind of…? asks about the type: comedies, adventure films…' },
    { k: 'type', q: 'I think comedies are ___ than adventure films.', hint: '(funny)', a: ['funnier'], why: 'funny → funnier: y becomes i, then -er.' }
  ]
},
{
  id: 'a2l13', url: 'https://test-english.com/listening/a2/future-plans-listening-test/', type: 'listening',
  title: 'Plans for the weekend', kid: 'Big plans for Saturday', he: 'תוכניות: going to, will והווה מתמשך', dinner: 'What is something fun you are doing next weekend?',
  hook: { q: 'Birds fly over Israel on their way between Europe and Africa. About how many birds is that every year?', o: ['about 5 thousand', 'about 5 million', 'about 500 million'], a: 2,
    reveal: 'Experts think it is about *500 million*, in the spring and in the autumn! Israel is on one of the busiest bird "roads" in the world.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'cranes', d: 'big grey birds with long legs and long necks' },
    { w: 'I\'m going to…', d: 'a plan: I\'m going to watch the birds.' },
    { w: 'I\'m having… on Friday', d: 'a fixed plan with a day or a time: I\'m having a lesson on Friday.' }
  ], predict: { q: 'Omer has a plan for Saturday. Does Dana come too?', o: ['Yes, she does', 'No, she is busy', 'Nobody knows yet'] } },
  show: { cast: 'Omer and Dana talk at school on Thursday.', names: { O: 'Omer', D: 'Dana' }, voices: { O: 'am_eric', D: 'bf_alice' },
    parts: [
      { lines: [
        ['D', 'Omer, what are you doing this weekend?'],
        ['O', 'On Saturday I\'m going to the Hula Valley with my grandparents. We\'re going to watch the birds.'],
        ['D', 'Birds? Is that fun?'],
        ['O', 'Yes! Thousands of cranes stop there in the winter. They\'re big grey birds, and they\'re really noisy.']
      ], items: [
        { k: 'mc', q: 'Who is Omer going with?', o: ['his grandparents', 'his class', 'Dana'], a: 0, why: '"with my grandparents"' },
        { k: 'mc', q: 'What are cranes?', o: ['big grey birds', 'small yellow birds', 'fish in a lake'], a: 0, why: '"They\'re big grey birds."' }
      ] },
      { lines: [
        ['O', 'What about you? Any plans?'],
        ['D', 'On Friday morning I\'m having a swimming lesson. Then in the afternoon I\'m going to bake a cake with my aunt.'],
        ['O', 'What kind of cake?'],
        ['D', 'I don\'t know yet. Maybe lemon, maybe chocolate. I\'ll decide on Friday.']
      ], items: [
        { k: 'mc', q: 'When is Dana\'s swimming lesson?', o: ['on Friday morning', 'on Friday afternoon', 'on Saturday'], a: 0, why: '"On Friday morning I\'m having a swimming lesson."' },
        { k: 'tf', q: 'Dana knows which cake she is going to bake.', a: false, fix: 'She doesn\'t know yet. She\'ll decide on Friday.', why: '"I don\'t know yet."' }
      ] },
      { lines: [
        ['O', 'Hey, do you want to come with us on Saturday?'],
        ['D', 'I\'d love to! I\'ll ask at home tonight.'],
        ['O', 'Great. We\'re leaving at seven in the morning, so bring a warm coat.'],
        ['D', 'Seven? OK, I\'ll set two alarms!']
      ], items: [
        { k: 'mc', q: 'What time are they leaving on Saturday?', o: ['at seven in the morning', 'at seven in the evening', 'at eleven'], a: 0, why: '"We\'re leaving at seven in the morning."' },
        { k: 'mc', q: 'Why is Dana going to set two alarms?', o: ['They are leaving very early.', 'She has a lesson on Saturday.', 'Her phone is old.'], a: 0, why: '"Seven? OK, I\'ll set two alarms!" Seven in the morning is early.' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'Maybe lemon, maybe chocolate. I\'ll ___ on Friday.', a: ['decide'], why: 'decide = choose after you think about it.' },
      { k: 'hear', say: 'We are leaving at seven in the morning.', q: 'When are they leaving?', o: ['early in the morning', 'late at night', 'at lunchtime'], a: 0, why: 'seven in the morning = early.' },
      { k: 'mc', q: '"Do you want to come with us?" "Yes! I ___ ask at home tonight."', o: ['will', 'am', 'going to'], a: 0,
        why: 'Review: Dana decides now, while she is speaking → will (I\'ll).' },
      { k: 'mc', q: 'On Friday morning I ___ a swimming lesson. It\'s in my diary.', o: ['am having', 'have had', 'was having'], a: 0,
        why: 'Review: a fixed plan with a day → present continuous: I\'m having.', he: 'כשיש תוכנית קבועה עם יום ושעה, אפשר להשתמש בהווה מתמשך: I\'m having a lesson on Friday.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'What are you doing this weekend?', why: 'are you + -ing: a question about plans.' },
    { k: 'type', q: 'I am going to the beach ___ swim.', hint: '(to / for)', a: ['to'], why: 'Review: why you go somewhere + a verb → to: to swim.' }
  ]
},
{
  id: 'a2l14', url: 'https://test-english.com/listening/a2/if-i-were-a-millionaire-second-conditional-a2-english-listening-test/', type: 'listening',
  title: 'What if? A show of big ideas', kid: 'If I had a magic wand', he: 'אילו... If I had…, I would…', dinner: 'If you could have any animal as a pet, which would you choose?',
  hook: { q: 'Which bird can stay in the air for months without landing?', o: ['the common swift', 'the chicken', 'the penguin'], a: 0,
    reveal: 'The *common swift*! Scientists found that some swifts stay in the air for about ten months. They eat flying insects up there.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'If I had…, I would…', d: 'for things we imagine, not real ones: If I had a dragon, I would fly to school.' },
    { w: 'I\'d', d: 'the short form of I would' },
    { w: 'a magic wand', d: 'a small stick that does magic in stories' }
  ], predict: { q: 'Two kids talk about magic and flying. What do you think they would do?', o: ['help animals', 'stay in bed', 'eat sweets all day'] } },
  show: { cast: 'A radio show called What If. Ben talks to Yara and Itamar.', names: { B: 'Ben', Y: 'Yara', I: 'Itamar' }, voices: { B: 'bm_daniel', Y: 'af_river', I: 'am_puck' },
    parts: [
      { lines: [
        ['B', 'Welcome to What If, the show with big ideas! Today\'s question: what would you do if you had a magic wand? Yara?'],
        ['Y', 'If I had a magic wand, I\'d clean my room in one second. Then I\'d have more time for drawing.'],
        ['B', 'Very clever!']
      ], items: [
        { k: 'mc', q: 'What would Yara do with a magic wand?', o: ['clean her room', 'draw a picture', 'fly to school'], a: 0, why: '"I\'d clean my room in one second."' },
        { k: 'mc', q: 'Why would she do it?', o: ['to have more time for drawing', 'to find her toys', 'to help her friends'], a: 0, why: '"Then I\'d have more time for drawing."' }
      ] },
      { lines: [
        ['B', 'Itamar, the same question.'],
        ['I', 'I wouldn\'t use it for me. If I had a magic wand, I would give every animal in the zoo a big forest.'],
        ['B', 'That\'s kind. And what if you could fly?'],
        ['I', 'If I could fly, I\'d fly to school over the sea. I\'d never be late!']
      ], items: [
        { k: 'tf', q: 'Itamar would use the magic wand for himself.', a: false, fix: 'He wouldn\'t use it for himself.', why: '"I wouldn\'t use it for me."' },
        { k: 'mc', q: 'What would Itamar give the zoo animals?', o: ['a big forest', 'more food', 'new toys'], a: 0, why: '"I would give every animal in the zoo a big forest."' }
      ] },
      { lines: [
        ['B', 'Last question. If you won a big prize at school, what would you choose?'],
        ['Y', 'A trip to see the northern lights. I\'d love to see green lights in the sky.'],
        ['I', 'I\'d choose a day as a zookeeper. Can you see a pattern?'],
        ['B', 'Yes! You really love animals. Thank you, both of you!']
      ], items: [
        { k: 'mc', q: 'What would Yara like to see?', o: ['the northern lights', 'a zoo', 'the sea'], a: 0, why: '"A trip to see the northern lights."' },
        { k: 'mc', q: 'What does Ben learn about Itamar?', o: ['He loves animals.', 'He wants to be a pilot.', 'He is always late.'], a: 0, why: '"You really love animals." A forest for the zoo, a day as a zookeeper…' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'If I ___ a magic wand, I\'d clean my room in one second.', a: ['had'], why: 'If + past simple (had), then would: If I had…, I\'d…',
        he: 'בחלק של if משתמשים בעבר (had), למרות שמדברים על דמיון ולא על העבר.' },
      { k: 'hear', say: 'If I could fly, I would never be late.', q: 'Can the speaker really fly?', o: ['No, the speaker is imagining it.', 'Yes, the speaker can fly.', 'Yes, but only over the sea.'], a: 0,
        why: 'If I could… = I can\'t really; I\'m imagining.' },
      { k: 'mc', q: 'If I could fly, I ___ visit my friends every day.', o: ['would', 'will', 'am'], a: 0, why: 'If + past (could), then would + verb.' },
      { k: 'mc', q: '"Who ___ the drawing competition?" "Yara did."', o: ['won', 'did win', 'does won'], a: 0, why: 'Review: Who is the subject → no did: Who won…?' },
      { k: 'type', q: 'Last year our class ___ a prize for the best garden.', hint: '(win)', a: ['won'], why: 'Review: last year → past simple; win is irregular: won.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'What would you do with a magic wand?', why: 'What + would + you + do…? asks about something you imagine.' },
    { k: 'type', q: 'If I could fly, I ___ go to the beach every day.', hint: '(will / would)', a: ['would', '\'d'], why: 'If I could…, I would…: an imagined situation.' }
  ]
},
{
  id: 'a2l15', url: 'https://test-english.com/listening/a2/the-city-where-i-live-listening-test/', type: 'listening',
  title: 'My city: Haifa', kid: 'Welcome to my city!', he: 'העיר שלי: חיפה', dinner: 'What is the best place in our town, and why?',
  hook: { q: 'Haifa has a small underground train that goes up and down Mount Carmel. How many stations does it have?', o: ['6', '16', '60'], a: 0,
    reveal: 'Only *6*! The Carmelit opened in 1959, and it is one of the smallest underground railways in the world.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'a view', d: 'what you can see from a place, like the sea from a high window' },
    { w: 'hills', d: 'small mountains' },
    { w: 'get around', d: 'travel from place to place in a town' }
  ], predict: { q: 'Two kids from Haifa talk about their city. What do you think they love most?', o: ['the sea', 'the shops', 'the snow'] } },
  show: { cast: 'On the radio show My City, Emma talks to Noga and Karim from Haifa.', names: { E: 'Emma', N: 'Noga', K: 'Karim' }, voices: { E: 'bf_isabella', N: 'af_nicole', K: 'am_michael' },
    parts: [
      { lines: [
        ['E', 'Hello! On My City today we\'re in Haifa, in the north of Israel. Noga, tell us about your city.'],
        ['N', 'Haifa is next to the sea, and it\'s on a mountain, Mount Carmel. So there are lots of stairs and hills!'],
        ['E', 'Do you like that?'],
        ['N', 'My legs don\'t! But the view from the top is amazing. You can see the sea and the port.']
      ], items: [
        { k: 'mc', q: 'Where is Haifa?', o: ['in the north of Israel', 'in the south of Israel', 'in the desert'], a: 0, why: '"in Haifa, in the north of Israel"' },
        { k: 'mc', q: 'What does Noga say about her city?', o: ['There are lots of stairs and hills.', 'It is very flat.', 'It is far from the sea.'], a: 0, why: '"So there are lots of stairs and hills!"' }
      ] },
      { lines: [
        ['E', 'Karim, what do you like about Haifa?'],
        ['K', 'The beaches. In the summer I go swimming with my friends every Saturday. And there\'s a great science museum. My favourite part is about space.'],
        ['E', 'How do you get around?'],
        ['K', 'Sometimes I take the Carmelit. It\'s a little underground train that goes up and down the mountain.']
      ], items: [
        { k: 'mc', q: 'What does Karim do every Saturday in the summer?', o: ['He goes swimming.', 'He goes to the museum.', 'He plays football.'], a: 0, why: '"In the summer I go swimming with my friends every Saturday."' },
        { k: 'tf', q: 'The Carmelit is a bus.', a: false, fix: 'It is a little underground train.', why: '"It\'s a little underground train."' }
      ] },
      { lines: [
        ['E', 'Who lives in Haifa?'],
        ['N', 'All kinds of people! Jewish and Arab families live here, and you hear Hebrew and Arabic in the street.'],
        ['K', 'And the food is great. My grandma\'s falafel is the best in the city!'],
        ['E', 'Now I\'m hungry! Thank you, both of you.']
      ], items: [
        { k: 'mc', q: 'Which languages can you hear in the street?', o: ['Hebrew and Arabic', 'only Hebrew', 'English and French'], a: 0, why: '"you hear Hebrew and Arabic in the street"' },
        { k: 'mc', q: 'Whose falafel does Karim love?', o: ['his grandma\'s', 'Noga\'s', 'Emma\'s'], a: 0, why: '"My grandma\'s falafel is the best in the city!"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'But the ___ from the top is amazing.', a: ['view'], why: 'the view = what you can see from a place.' },
      { k: 'hear', say: 'There are lots of stairs and hills.', q: 'What is Haifa like?', o: ['It goes up and down.', 'It is flat.', 'It is very small.'], a: 0, why: 'stairs and hills = you go up and down a lot.' },
      { k: 'mc', q: 'In the summer, Karim usually ___ swimming on Saturdays.', o: ['goes', 'is going', 'go'], a: 0, why: 'Review: usually = a habit → present simple; he → goes.' },
      { k: 'type', q: '___ do you get around? By bus or by train?', hint: '(How / What / Who)', a: ['how'], why: 'Review: a question about the way you travel → How?' }
    ] }
  ],
  use: [
    { k: 'build', s: 'What is your city like?', why: 'What is… like? asks for a description.',
      he: 'What is it like? לא שואל "מה זה אוהב", אלא "איך זה?": תארו לי את העיר.' },
    { k: 'type', q: 'In my town there ___ a lot of trees.', hint: '(is / are)', a: ['are'], why: 'a lot of trees = plural → there are.' }
  ]
},
{
  id: 'a2l16', url: 'https://test-english.com/listening/a2/my-friends-listening-test/', type: 'listening',
  title: 'Best friends', kid: 'Friends are the best', he: 'החברים שלי: אופי ומראה', dinner: 'What do you like doing most with your friends?',
  hook: { q: 'Scientists think that some cows have a best friend. What happens when two best friends are together?', o: ['They are calmer.', 'They eat less.', 'They sleep all day.'], a: 0,
    reveal: 'They are *calmer*! In one study in England, cows\' hearts beat more slowly with their favourite friend than with a cow they didn\'t know.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'get on well with', d: 'like someone and be friendly with them' },
    { w: 'have a lot in common', d: 'like the same things' },
    { w: 'talkative', d: 'someone who talks a lot' }
  ], predict: { q: 'Two kids talk about their best friends. Are their friends like them?', o: ['Yes, very similar', 'No, very different', 'One is similar, one is different'] } },
  show: { cast: 'On the podcast Kids Talk, Ella talks to Tom and Shir about friends.', names: { E: 'Ella', T: 'Tom', S: 'Shir' }, voices: { E: 'af_bella', T: 'bm_lewis', S: 'af_heart' },
    parts: [
      { lines: [
        ['E', 'This week on Kids Talk: friends! Tom, tell us about your best friend.'],
        ['T', 'My best friend is Amir. We met in first grade, when he gave me half of his sandwich.'],
        ['E', 'Ha! What is he like?'],
        ['T', 'He\'s really funny and very kind. We\'ve got a lot in common: we both love football and comics.']
      ], items: [
        { k: 'mc', q: 'When did Tom and Amir meet?', o: ['in first grade', 'last year', 'at a football club'], a: 0, why: '"We met in first grade."' },
        { k: 'mc', q: 'What do Tom and Amir both love?', o: ['football and comics', 'music and dancing', 'cooking'], a: 0, why: '"we both love football and comics"' }
      ] },
      { lines: [
        ['E', 'Shir, what about you?'],
        ['S', 'My best friend Lea is very different from me. I\'m quiet, and she\'s really talkative. She\'s tall with curly red hair, and I\'m short.'],
        ['E', 'Do you get on well?'],
        ['S', 'Yes! She talks and I listen. It works perfectly.']
      ], items: [
        { k: 'tf', q: 'Shir and Lea are very similar.', a: false, fix: 'Lea is very different from Shir.', why: '"My best friend Lea is very different from me."' },
        { k: 'mc', q: 'What does Lea look like?', o: ['tall with curly red hair', 'short with straight hair', 'tall with black hair'], a: 0, why: '"She\'s tall with curly red hair."' }
      ] },
      { lines: [
        ['E', 'What makes a good friend?'],
        ['T', 'Someone who helps you. Last year I was new in the football team, and Amir practised with me every day.'],
        ['S', 'Someone who listens to you, and who tells you the truth.'],
        ['E', 'Great answers. Thank you, both of you!']
      ], items: [
        { k: 'mc', q: 'How did Amir help Tom last year?', o: ['He practised football with him every day.', 'He carried his school bag.', 'He gave him a new ball.'], a: 0, why: '"Amir practised with me every day."' },
        { k: 'mc', q: 'For Shir, a good friend…', o: ['listens and tells the truth.', 'is always funny.', 'likes the same things.'], a: 0, why: '"Someone who listens to you, and who tells you the truth."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'I\'m quiet, and she\'s really ___.', a: ['talkative'], why: 'Review: talkative = someone who talks a lot (words for personality).' },
      { k: 'hear', say: 'We have got a lot in common.', q: 'What does it mean?', o: ['We like the same things.', 'We live in the same street.', 'We have the same clothes.'], a: 0,
        why: 'have a lot in common = like the same things.', he: 'have a lot in common = יש לנו הרבה במשותף.' },
      { k: 'mc', q: 'Tom and Amir ___ in first grade.', o: ['met', 'meet', 'have met'], a: 0, why: 'Review: in first grade = a finished time → past simple: meet → met.' },
      { k: 'sort', q: 'Personality or looks?', g: ['personality', 'looks'],
        w: [['kind', 0], ['funny', 0], ['quiet', 0], ['tall', 1], ['curly', 1], ['short', 1]],
        why: 'Review: personality = what someone is like inside · looks = what someone looks like.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'My best friend and I get on very well.', why: 'get on well = be friendly and like each other.' },
    { k: 'type', q: 'My friend is ___ than me.', hint: '(tall)', a: ['taller'], why: 'tall → taller: a short adjective + -er.' }
  ]
},
{
  id: 'a2l17', url: 'https://test-english.com/listening/a2/what-were-you-doing-at-the-time-of-the-murder-past-tenses-a2-english-listening-test/', type: 'listening',
  title: 'The mystery of the missing cake', kid: 'Where is the class cake?', he: 'תעלומה: past continuous ו-past simple', dinner: 'What were you doing at seven o\'clock this morning?',
  hook: { q: 'In the stories, where does the famous detective Sherlock Holmes live?', o: ['221B Baker Street', '10 Downing Street', '1 Main Street'], a: 0,
    reveal: 'At *221B Baker Street* in London! Sherlock Holmes is made up, but today a Sherlock Holmes museum on Baker Street has the number 221B on its door.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'was / were + -ing', d: 'something that was in progress at a time in the past: I was reading at ten.' },
    { w: 'missing', d: 'not in its place, and nobody knows where it is' },
    { w: 'a clue', d: 'a small thing that helps you find the answer to a mystery' }
  ], predict: { q: 'The class chocolate cake is missing! Where do you think it is?', o: ['Somebody ate it.', 'Somebody moved it.', 'It fell on the floor.'] } },
  show: { cast: 'Gali is the class detective. She asks Ron and Mr Haddad, the teacher, some questions.', names: { G: 'Gali', R: 'Ron', T: 'Mr Haddad' }, voices: { G: 'af_nova', R: 'am_adam', T: 'bm_george' },
    parts: [
      { lines: [
        ['G', 'Ron, our chocolate cake was on this table at ten o\'clock. Now it\'s missing! What were you doing at ten?'],
        ['R', 'I was watering the plants by the window. I wasn\'t near the table.'],
        ['G', 'Did you see anything?'],
        ['R', 'No, but while I was watering the plants, I heard the door. Somebody came in.']
      ], items: [
        { k: 'mc', q: 'What was Ron doing at ten o\'clock?', o: ['He was watering the plants.', 'He was eating cake.', 'He was reading.'], a: 0, why: '"I was watering the plants by the window."' },
        { k: 'mc', q: 'What did Ron hear?', o: ['the door', 'a dog', 'music'], a: 0, why: '"I heard the door. Somebody came in."' }
      ] },
      { lines: [
        ['G', 'Mr Haddad, what were you doing at ten o\'clock?'],
        ['T', 'I was walking past your classroom. I saw the cake on the table, and it was getting warm in the sun.'],
        ['G', 'And then?'],
        ['T', 'And then I had an idea. Follow me, detective.']
      ], items: [
        { k: 'tf', q: 'Mr Haddad was in the playground at ten o\'clock.', a: false, fix: 'He was walking past the classroom.', why: '"I was walking past your classroom."' },
        { k: 'mc', q: 'What was happening to the cake?', o: ['It was getting warm in the sun.', 'It was falling off the table.', 'A bird was eating it.'], a: 0, why: '"it was getting warm in the sun"' }
      ] },
      { lines: [
        ['T', 'Look in the fridge in the teachers\' room.'],
        ['G', 'Our cake! It\'s fine, and it\'s nice and cold!'],
        ['T', 'I moved it while you were all working on your science project. Chocolate cake doesn\'t like the sun.'],
        ['G', 'Mystery solved! Thank you, Mr Haddad.']
      ], items: [
        { k: 'mc', q: 'Where was the cake?', o: ['in the fridge in the teachers\' room', 'under the table', 'in Ron\'s bag'], a: 0, why: '"Look in the fridge in the teachers\' room."' },
        { k: 'mc', q: 'What were the students doing when Mr Haddad moved the cake?', o: ['working on a science project', 'watering the plants', 'having lunch'], a: 0,
          why: '"I moved it while you were all working on your science project."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 0, q: 'While I ___ watering the plants, I heard the door.', a: ['was'], why: 'I → was + -ing: I was watering.' },
      { k: 'spot', s: 'At ten o\'clock I was *water* the plants.', fix: 'watering', why: 'was + verb-ing: was watering.',
        he: 'אחרי was או were בא הפועל עם ing: I was watering, they were working.' },
      { k: 'hear', say: 'I was walking past your classroom.', q: 'What was he doing?', o: ['walking', 'running', 'teaching'], a: 0, why: 'walk past = walk next to something and go on.' },
      { k: 'mc', q: '___ moved the cake?', o: ['Who', 'Who did', 'What did'], a: 0, why: 'Review: Who is the subject → no did: Who moved…?' },
      { k: 'type', q: 'Yesterday Mr Haddad ___ the cake in the fridge.', hint: '(put)', a: ['put'], why: 'Review: put is irregular: put → put (the same in the past).' }
    ] }
  ],
  use: [
    { k: 'build', s: 'What were you doing at ten o\'clock?', why: 'What + were you + -ing…? asks about something in progress in the past.' },
    { k: 'type', q: 'Yesterday at eight in the morning, I was ___ breakfast.', hint: '(have)', a: ['having', 'eating'], why: 'An action in progress at a time in the past → was + -ing: I was having breakfast.' }
  ]
},
{
  id: 'a2r05', url: 'https://test-english.com/reading/a2/should-kids-help-with-household-chores-a2-english-reading-test/', type: 'reading',
  title: 'Chores: yes or no?', kid: 'Should kids help at home?', he: 'האם ילדים צריכים לעזור בבית?', dinner: 'Which job at home do you think is the most important?',
  hook: { q: 'The first big vacuum cleaner in London, in 1901, was enormous. How did it get to people\'s homes?', o: ['A horse pulled it.', 'A boy carried it.', 'It came by boat.'], a: 0,
    reveal: '*A horse pulled it!* Hubert Cecil Booth\'s machine stayed in the street, and long pipes went into the house through the windows.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'A kids\' magazine asked: should children help with the jobs at home? Three people sent their answers.',
    predict: { q: 'What do you think most of them say?', o: ['Yes, kids should help.', 'No, kids should only study.', 'They all say different things.'] } },
  story: { title: 'Should kids help at home?', chunks: [
    { text: '"Yes, of course!" (Noam, 11). At home we have a chore chart on the fridge. Every week each person gets different jobs. This week I\'m feeding the cat and setting the table. Last week I had to clean the bathroom, and that wasn\'t fun! But I think it\'s fair. We all live here, so we all help. And now I can cook pasta on my own.',
      items: [
        { k: 'mc', q: 'Where is the chore chart?', o: ['on the fridge', 'in Noam\'s room', 'on the computer'], a: 0, why: '"we have a chore chart on the fridge"' },
        { k: 'tf', q: 'Noam does the same chores every week.', a: false, fix: 'Every week each person gets different jobs.', why: '"Every week each person gets different jobs."' },
        { k: 'find', q: 'Find a word that means "right and the same for everybody".', a: 'fair', why: 'fair = everybody gets the same, nobody gets more.' }
      ] },
    { text: '"Yes, but not too much." (Ms Levy, a teacher). Chores teach children important things: how to plan their time, how to work in a team, and how to look after themselves. But kids also need time for homework, friends and play. I think twenty or thirty minutes a day is enough for children aged nine to twelve.',
      items: [
        { k: 'mc', q: 'What does Ms Levy think?', o: ['Chores are good, but not too many.', 'Kids should do all the chores.', 'Kids shouldn\'t do any chores.'], a: 0, why: '"Yes, but not too much."' },
        { k: 'mc', q: 'How much time a day does she think is enough?', o: ['twenty or thirty minutes', 'two hours', 'five minutes'], a: 0, why: '"twenty or thirty minutes a day is enough"' }
      ] },
    { text: '"Not really." (Lior, 12). I help sometimes, but I don\'t think kids should do chores every day. I\'ve got a lot of homework, and I train at the basketball club three times a week. When I get home, I\'m tired. However, I always tidy my own room, because it\'s my space.',
      items: [
        { k: 'mc', q: 'Why doesn\'t Lior want chores every day?', o: ['He is busy with homework and basketball.', 'He thinks chores are only for grown-ups.', 'He is too young for chores.'], a: 0,
          why: '"I\'ve got a lot of homework, and I train at the basketball club three times a week."' },
        { k: 'tf', q: 'Lior never helps at home.', a: false, fix: 'He helps sometimes, and he always tidies his room.', why: '"I help sometimes… I always tidy my own room."' },
        { k: 'find', q: 'Find a word that means "a place that is only yours".', a: 'space', why: 'my space = my own place.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'Which sentence is true about the three answers?', o: ['Two say yes, and one says not really.', 'All three say no.', 'All three want more chores.'], a: 0,
        why: 'Noam and Ms Levy say yes; Lior says "Not really."' },
      { k: 'mc', q: 'Lior is very busy. ___, he always tidies his room.', o: ['However', 'Because', 'So'], a: 0, why: 'Review: However = but, a surprising idea comes next.' },
      { k: 'mc', q: 'Look! Noam ___ the table now.', o: ['is setting', 'sets', 'set'], a: 0, why: 'Review: Look! … now → present continuous: is setting.',
        he: 'Look! ו-now מראים שזה קורה עכשיו, ולכן is setting.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Should kids help with the chores?', why: 'Should + kids + verb? asks for an opinion.' },
    { k: 'type', q: 'I think kids ___ help at home.', hint: '(should / shouldn\'t)', a: ['should', 'shouldn\'t', 'should not'], why: 'should = it is a good idea · shouldn\'t = it is not a good idea. Both are fine: it\'s your opinion!' }
  ]
},
{
  id: 'a2r06', url: 'https://test-english.com/reading/a2/three-popular-inventions-from-the-1920s-reading-test/', type: 'reading',
  title: 'Three inventions from the 1920s', kid: 'Old ideas we still love', he: 'שלוש המצאות משנות ה-20', dinner: 'Which invention could you not live without?',
  hook: { q: 'In the 1920s, a new machine brought music and news into people\'s homes. What was it?', o: ['the radio', 'the television', 'the computer'], a: 0,
    reveal: '*The radio*! The first radio stations started in the early 1920s, and soon many families listened together in the evening.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'About one hundred years ago, in the 1920s, people invented lots of things we still use today. Here are three of them.',
    predict: { q: 'Which of these do you think is from the 1920s?', o: ['bubble gum', 'the mobile phone', 'the computer'] } },
  story: { title: 'Three ideas from the 1920s', chunks: [
    { text: 'Television. On 26 January 1926, a Scottish inventor called John Logie Baird showed his new machine to a group of scientists in a small room in London. The pictures were not in colour, and they were not very clear, but they were moving! People could see a face on a screen, and the face was in another room.',
      items: [
        { k: 'mc', q: 'Where did Baird show his machine?', o: ['in London', 'in New York', 'in Paris'], a: 0, why: '"in a small room in London"' },
        { k: 'tf', q: 'The first TV pictures were in colour.', a: false, fix: 'The pictures were not in colour.', why: '"The pictures were not in colour, and they were not very clear."' },
        { k: 'find', q: 'Find a word that means "a person who makes something new for the first time".', a: 'inventor', why: 'invent → inventor: the person who invents.' }
      ] },
    { text: 'Sliced bread. Before 1928, people bought bread in one big loaf and cut it at home. An American inventor, Otto Rohwedder, worked for years on a machine that cut bread into slices. In July 1928, a bakery in the small town of Chillicothe, in the USA, started selling sliced bread. People loved it, and in English we still say that a great new idea is "the best thing since sliced bread".',
      items: [
        { k: 'mc', q: 'Where did people first buy sliced bread?', o: ['at a bakery in Chillicothe', 'at a big shop in London', 'at a school'], a: 0, why: '"a bakery in the small town of Chillicothe… started selling sliced bread"' },
        { k: 'mc', q: 'What does "the best thing since sliced bread" mean?', o: ['a great new idea', 'a kind of bread', 'an old machine'], a: 0, why: '"a great new idea is the best thing since sliced bread"' },
        { k: 'find', q: 'Find a word that means "thin pieces cut from something".', a: 'slices', why: 'a slice of bread = a thin piece of bread.' }
      ] },
    { text: 'Bubble gum. In 1928, Walter Diemer worked in the office of a gum company in Philadelphia, USA. In his free time, he tried different recipes. One day he made a gum that was soft and stretchy, so you could blow big bubbles with it. And why is bubble gum usually pink? Pink was the only food colour he had!',
      items: [
        { k: 'mc', q: 'Why is bubble gum usually pink?', o: ['Pink was the only colour he had.', 'Children love pink.', 'Strawberries are pink.'], a: 0, why: '"Pink was the only food colour he had!"' },
        { k: 'find', q: 'Find a word that means "it gets longer when you pull it".', a: 'stretchy', why: 'stretchy = you can pull it and make it longer.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the best title for the text?', o: ['Old ideas we still use today', 'How to make bread', 'The history of the radio'], a: 0,
        why: 'TV, sliced bread and bubble gum are all from the 1920s, and we still use them.' },
      { k: 'type', q: 'Baird ___ his new machine in 1926.', hint: '(show)', a: ['showed'], why: 'Review: in 1926 → past simple: show → showed.' },
      { k: 'mc', q: '"___ did Walter Diemer work?" "In Philadelphia."', o: ['Where', 'When', 'Who'], a: 0, why: 'Review: the answer is a place → Where?',
        he: 'התשובה היא מקום (In Philadelphia), ולכן השאלה מתחילה ב-Where.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Bubble gum was invented by Walter Diemer.', why: 'was invented by = somebody invented it (in the past): Walter Diemer did.' },
    { k: 'type', q: 'I think ___ is the best of the three inventions.', hint: '(TV / sliced bread / bubble gum)', a: ['TV', 'the TV', 'television', 'the television', 'sliced bread', 'bubble gum'],
      why: 'Any of the three is fine: it\'s your opinion!' }
  ]
},
{
  id: 'a2r07', url: 'https://test-english.com/reading/a2/a-really-popular-summer-festival-in-the-uk-a2-english-reading-test/', type: 'reading',
  title: 'Carnival in the streets of London', kid: 'A giant street party', he: 'פסטיבל קיץ ענק בלונדון', dinner: 'What would a perfect festival in our town have?',
  hook: { q: 'In the 1940s, people in Trinidad and Tobago made steel drums for music from…', o: ['old oil barrels', 'old bicycles', 'wood'], a: 0,
    reveal: 'From *old oil barrels*! The drums are called steel pans, and today steel bands play them all over the world.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'Amara is eleven and lives in London. She writes about her favourite weekend of the year: the Notting Hill Carnival.',
    predict: { q: 'What do you think people do at the carnival?', o: ['dance in the street', 'swim in the river', 'watch a football match'] } },
  story: { title: 'My favourite weekend', chunks: [
    { text: 'My favourite weekend of the year is at the end of August, when the Notting Hill Carnival happens in my part of London. It\'s one of the biggest street festivals in Europe, and about a million people come. The first carnival in the street was in 1966. My grandma came from Trinidad, and she says the carnival is a little piece of the Caribbean in London.',
      items: [
        { k: 'mc', q: 'When is the carnival?', o: ['at the end of August', 'in December', 'in the spring'], a: 0, why: '"at the end of August"' },
        { k: 'tf', q: 'The first carnival in the street was in 1966.', a: true, why: '"The first carnival in the street was in 1966."' },
        { k: 'find', q: 'Find a word that means "big events where people celebrate together".', a: 'festivals', why: 'a festival = a big event with music, food and fun.' }
      ] },
    { text: 'On Sunday there is Children\'s Day. Kids dance in the parade in amazing costumes with bright colours, feathers and glitter. This year I was a butterfly with huge orange wings! We practised our dance for weeks. While we were dancing, people along the street were clapping and taking photos.',
      items: [
        { k: 'mc', q: 'What was Amara\'s costume this year?', o: ['a butterfly', 'a bird', 'a flower'], a: 0, why: '"This year I was a butterfly with huge orange wings!"' },
        { k: 'mc', q: 'What were people doing while the children were dancing?', o: ['clapping and taking photos', 'sleeping', 'cooking'], a: 0, why: '"people along the street were clapping and taking photos"' }
      ] },
    { text: 'Everywhere there is music. Steel bands play on lorries that move slowly through the streets, and the music is so loud that you can feel it. There is food from the Caribbean too, like rice and peas: rice cooked with red beans. On Monday the big parade is for the grown-ups. I always go home tired and happy.',
      items: [
        { k: 'mc', q: 'What is "rice and peas"?', o: ['rice cooked with red beans', 'rice with green peas', 'a sweet cake'], a: 0, why: '"rice and peas: rice cooked with red beans"' },
        { k: 'tf', q: 'The big parade on Monday is for children.', a: false, fix: 'The big parade on Monday is for the grown-ups.', why: '"On Monday the big parade is for the grown-ups."' },
        { k: 'find', q: 'Find a word that means "adults".', a: 'grown-ups', why: 'grown-ups = adults, people who are not children.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'How does Amara feel about the carnival?', o: ['She loves it.', 'She thinks it is too loud.', 'She is bored.'], a: 0,
        why: 'It is her "favourite weekend of the year", and she goes home "tired and happy".' },
      { k: 'type', q: 'While we ___ dancing, people were clapping.', hint: '(was / were)', a: ['were'], why: 'Review: we → were + -ing: we were dancing.' },
      { k: 'mc', q: 'We practised for weeks ___ dance well in the parade.', o: ['to', 'for', 'so'], a: 0, why: 'Review: why we did it + a verb → to: to dance.',
        he: 'כשמסבירים למה עשינו משהו ואחריו בא פועל, משתמשים ב-to, לא ב-for.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'The music was so loud that you could feel it.', why: 'so + adjective + that: so loud that…' },
    { k: 'type', q: 'I ___ been to a street festival.', hint: '(have / haven\'t)', a: ['have', 'haven\'t', 'have not'], why: 'have been = at some time in your life. Both are fine: it\'s about you!' }
  ]
},
{
  id: 'a2r08', url: 'https://test-english.com/reading/a2/three-experiences-i-have-had-a2-english-reading-test/', type: 'reading',
  title: 'Three things I\'ve done', kid: 'Ella\'s three big moments', he: 'שלוש חוויות שלי (present perfect)', dinner: 'What is the most exciting thing you have ever done?',
  hook: { q: 'The Ramon Crater in the Negev is about 40 kilometres long. How did it form?', o: ['Water and wind, over millions of years', 'A meteorite hit the Earth', 'People dug it'], a: 0,
    reveal: '*Water and wind*, over millions of years! It isn\'t from a meteorite: it\'s a special kind of valley called a makhtesh.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'Ella is twelve. Her teacher asked the class to write about three things they have done. Here is her text.',
    predict: { q: 'Which experience do you think was the scariest for Ella?', o: ['sleeping in the desert', 'seeing snow', 'singing on a stage'] } },
  story: { title: 'Three things I\'ve done', chunks: [
    { text: 'I\'ve slept in the desert twice. The first time was on a class trip to the Ramon Crater. At night we lay on our sleeping bags and looked up. I have never seen so many stars! Our guide showed us a shooting star, and everyone shouted at the same time.',
      items: [
        { k: 'mc', q: 'How many times has Ella slept in the desert?', o: ['twice', 'once', 'never'], a: 0, why: '"I\'ve slept in the desert twice."' },
        { k: 'tf', q: 'Ella saw only a few stars.', a: false, fix: 'She has never seen so many stars.', why: '"I have never seen so many stars!"' },
        { k: 'find', q: 'Find a word for "a person who takes a group to places and tells them about them".', a: 'guide', why: 'a guide shows you the way and explains things.' }
      ] },
    { text: 'I\'ve seen snow only once, in Jerusalem, when I was eight. I\'ve never skied, but I\'ve made a snowman. He had a carrot nose and a very small head, because my hands got too cold!',
      items: [
        { k: 'mc', q: 'When did Ella see snow?', o: ['when she was eight', 'last winter', 'every year'], a: 0, why: '"in Jerusalem, when I was eight"' },
        { k: 'tf', q: 'Ella has skied in the snow.', a: false, fix: 'She has never skied.', why: '"I\'ve never skied."' },
        { k: 'mc', q: 'Why was the snowman\'s head small?', o: ['Her hands got too cold.', 'There wasn\'t much snow.', 'Her friend took the snow.'], a: 0, why: '"because my hands got too cold!"' }
      ] },
    { text: 'I\'ve sung on a stage in front of three hundred people. It was at our end-of-year show last June. Before the show my legs were shaking, but when the music started, I forgot about my fear. Have you ever done something that scared you at first? Try it. It\'s worth it!',
      items: [
        { k: 'mc', q: 'How did Ella feel before the show?', o: ['nervous', 'bored', 'angry'], a: 0, why: '"my legs were shaking": she was nervous.' },
        { k: 'find', q: 'Find a word that means "the feeling when you are afraid".', a: 'fear', why: 'fear = being afraid.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is Ella\'s message at the end?', o: ['Try things that scare you at first.', 'Never sing on a stage.', 'The desert is too cold.'], a: 0,
        why: '"Have you ever done something that scared you at first? Try it."' },
      { k: 'mc', q: 'I\'ve seen snow once. I ___ it when I was eight.', o: ['saw', 'have seen', 'see'], a: 0, why: 'when I was eight = a finished time → past simple: saw.',
        he: 'I\'ve seen מספר שזה קרה פעם בחיים. כשאומרים מתי בדיוק (when I was eight), עוברים לעבר פשוט: I saw.' },
      { k: 'mc', q: 'Before the show, Ella\'s legs ___.', o: ['were shaking', 'was shaking', 'shaking'], a: 0, why: 'Review: legs = they → were + -ing.' },
      { k: 'type', q: 'At night we ___ on our sleeping bags and looked up.', hint: '(lie)', a: ['lay'], why: 'Review: lie is irregular: lie → lay.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Have you ever slept in a tent?', why: 'Have + you + ever + past participle: sleep → slept.' },
    { k: 'type', q: 'I ___ seen snow.', hint: '(have / haven\'t)', a: ['have', 'haven\'t', 'have not'], why: 'have seen = at some time in your life. Both are fine: it\'s about you!' }
  ]
},
{
  id: 'a2u07', url: 'https://test-english.com/use-of-english/a2/a2-english-test-7-text-with-multiple-choice-gaps/', type: 'use-of-english',
  title: 'The giant watermelon', kid: 'A watermelon as big as me', he: 'חדשות מצחיקות: האבטיח הענק', dinner: 'If you had a garden, what would you grow?',
  hook: { q: 'About how much of a watermelon is water?', o: ['about 50%', 'about 70%', 'about 92%'], a: 2,
    reveal: 'About *92%*! That is why it is so good on a hot day. Today\'s story is about a very big one. The story is made up!' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a funny news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A class grows watermelons in the school garden. What do you think happens?', o: ['One gets really, really big.', 'The birds eat them all.', 'Nothing grows.'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'The biggest watermelon in town',
        t: 'Last spring, the children at Hadar School [1] some watermelon seeds in their school garden. They watered them every morning, [2] the plants grew very fast. By June, one watermelon was [3] big that nobody could lift it. "It\'s bigger [4] my little brother!" laughed Yara, 10. The class wanted to know how heavy it was, so they [5] it on the scales at the vegetable shop next door. It was 31 kilos! On the last day of school, the children cut it into [6] pieces and shared it with the whole school. "Next year we [7] going to grow a pumpkin," said their teacher. "And this time we [8] need bigger scales!"',
        gaps: [
          { o: ['planted', 'plant', 'planting'], a: 0, why: 'Last spring → past simple: planted.' },
          { o: ['so', 'but', 'because'], a: 0, why: 'They watered them, and the result was that the plants grew → so.' },
          { o: ['so', 'such', 'too'], a: 0, why: 'so + adjective + that: so big that…' },
          { o: ['than', 'that', 'as'], a: 0, why: 'bigger than: comparing two things.' },
          { o: ['put', 'putted', 'puts'], a: 0, why: 'put is irregular: put → put in the past.' },
          { o: ['lots of', 'much', 'a lot'], a: 0, why: 'lots of + a plural noun: lots of pieces.' },
          { o: ['are', 'is', 'will'], a: 0, why: 'we + are going to: a plan.' },
          { o: ['will', 'are', 'going'], a: 0, why: 'A prediction about the future → will need.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'This box is ___ heavy that I can\'t lift it.', o: ['so', 'such', 'very'], a: 0, why: 'so + adjective + that.' },
      { k: 'mc', q: '"___ did you grow in the garden?" "Watermelons!"', o: ['What', 'Who', 'Where'], a: 0, why: 'Review: the answer is a thing → What?' },
      { k: 'tf', q: '"The children was very happy."', a: false, fix: 'The children were very happy.', why: 'Review: children = plural → were.',
        he: 'children היא מילה ברבים (ילדים), ולכן were ולא was.' },
      { k: 'type', q: 'On the last day of school, Yara ___ the biggest piece!', hint: '(eat)', a: ['ate'], why: 'Review: eat is irregular: eat → ate.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Our class is going to grow a pumpkin.', why: 'is going to + grow: a plan.' }
  ]
},
{
  id: 'a2u08', url: 'https://test-english.com/use-of-english/a2/a2-english-test-8-multiple-choice-questions/', type: 'use-of-english',
  title: 'The robot that went for a walk', kid: 'The runaway robot', he: 'חדשות מצחיקות: הרובוט שיצא לטיול', dinner: 'If you had a robot helper, what job would you give it?',
  hook: { q: 'The word "robot" first appeared in…', o: ['a play in 1920', 'a science book in 1820', 'a film in 1990'], a: 0,
    reveal: 'In *a play in 1920*! The Czech writer Karel Čapek used it, and the idea for the word came from his brother Josef. Today\'s story is made up!' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a funny news story about a cleaning robot (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A school\'s cleaning robot leaves the building. Where do you think it goes?', o: ['to a bakery', 'to the beach', 'to the zoo'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'The robot who loved bread',
        t: 'Last Tuesday, a small cleaning robot [1] the library of Oak Tree School and went for a long walk. Nobody knows how it [2] out. While the students [3] lunch, the robot rolled down the street, past the park and into the bakery on the corner. "I was putting bread on the shelves [4] I heard a strange noise," said the baker, Mr Oren. "The robot was cleaning my floor! It was [5] than my old broom." The librarian came to take it back, but Mr Oren had an idea. "Can it visit [6] a week? My floor has never been so clean." Now the robot cleans the library on Mondays and the bakery on Fridays. "It\'s the [7] helpful member of our school," said the head teacher, "and it never [8] for a break!"',
        gaps: [
          { o: ['left', 'leaves', 'leaving'], a: 0, why: 'Last Tuesday → past simple: leave → left.' },
          { o: ['got', 'get', 'gets'], a: 0, why: 'A story in the past → got out.' },
          { o: ['were having', 'was having', 'are having'], a: 0, why: 'the students = they → were having (past continuous).' },
          { o: ['when', 'while', 'so'], a: 0, why: 'A longer action (was putting), then a short one interrupts it → when I heard.',
            he: 'הפעולה הארוכה (was putting) נקטעה על ידי פעולה קצרה, ולפני הפעולה הקצרה באה when.' },
          { o: ['better', 'good', 'best'], a: 0, why: 'Comparing two things: good → better than.' },
          { o: ['once', 'one', 'first'], a: 0, why: 'once a week = one time every week.' },
          { o: ['most', 'more', 'much'], a: 0, why: 'the + most + adjective: the most helpful.' },
          { o: ['asks', 'ask', 'asking'], a: 0, why: 'it → asks (present simple, he / she / it + s).' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'At eight o\'clock last night, I ___ TV.', o: ['was watching', 'am watching', 'watch'], a: 0, why: 'Review: in progress at a time in the past → was watching.' },
      { k: 'type', q: '"Who ___ the robot in the bakery?" "The baker did."', hint: '(find)', a: ['found'], why: 'Review: Who is the subject → no did: Who found…? find → found.' },
      { k: 'mc', q: 'This robot is very good ___ cleaning.', o: ['at', 'in', 'on'], a: 0, why: 'Review: good at something.', he: 'בעברית "טוב ב...", ובאנגלית good at.' },
      { k: 'tf', q: '"The robot clean the bakery on Fridays."', a: false, fix: 'The robot cleans the bakery on Fridays.', why: 'Review: the robot = it → cleans.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Can the robot clean my room too?', why: 'Can + the robot + verb? A question with can.' }
  ]
}
];
