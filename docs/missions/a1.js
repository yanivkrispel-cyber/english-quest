// English Quest missions, level A1 (specs/missions.md). Original content on the topics of test-english.com's map:
// the topic list is theirs, every text, recording and question here is our own. Check: node test/missions-check.js
window.EQ_MISSIONS = window.EQ_MISSIONS || {};
window.EQ_MISSIONS.a1 = [
{
  id: 'a1g01', url: 'https://test-english.com/grammar-points/a1/present-simple-forms-of-to-be/', type: 'grammar',
  title: 'am, is, are', dinner: 'How are you today, and what is your favourite food?',
  hook: { q: 'Which animal is the tallest in the world?', o: ['The giraffe', 'The elephant', 'The horse'], a: 0,
    reveal: 'The *giraffe*! A giraffe *is* about 5 metres tall. Giraffes *are* the tallest animals in the world.' },
  learn: { kind: 'rule', title: 'The verb "be": am, is, are', form: ['I am', 'he / she / it is', 'you / we / they are'],
    lines: ['I *am* (I\'m) happy. He *is* (he\'s) my brother. It *is* (it\'s) a cat.',
      'You *are* (you\'re) my friend. We *are* (we\'re) at school.',
      'Not: I\'m *not*, she *isn\'t*, they *aren\'t*. Questions: *Are* you OK? *Is* he here?'],
    ex: ['I *am* twelve.', '*Are* you ready?'],
    he: 'בעברית אין "להיות" בהווה: "אני שמח". באנגלית חייבים: I am happy. I → am. he, she, it → is. you, we, they → are.' },
  steps: [
    { name: 'am, is or are?', items: [
      { k: 'mc', q: 'I ___ twelve years old.', o: ['am', 'is', 'are'], a: 0, why: 'I → am.' },
      { k: 'mc', q: 'My cat ___ black and white.', o: ['is', 'am', 'are'], a: 0, why: 'my cat = it → is.' },
      { k: 'mc', q: 'We ___ in the same class.', o: ['are', 'is', 'am'], a: 0, why: 'we → are.' },
      { k: 'mc', q: '___ you hungry?', o: ['Are', 'Is', 'Am'], a: 0, why: 'you → Are you…?' }
    ] },
    { name: 'Yes or no', items: [
      { k: 'tf', q: '"She are my sister."', a: false, fix: 'She is my sister.', why: 'she → is.' },
      { k: 'type', q: 'They ___ not at home. They are at the park.', hint: '(am / is / are)', a: ['are'], why: 'they → are.' },
      { k: 'mc', q: '"Is it cold today?" "No, it ___."', o: ['isn\'t', 'aren\'t', 'am not'], a: 0, why: 'it → isn\'t.' },
      { k: 'tf', q: '"I\'m not tired."', a: true, why: 'I am not → I\'m not.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'My name is Noa.', why: 'my name = it → is.' },
      { k: 'spot', s: 'You *is* my best friend.', fix: 'are', why: 'you → are.' },
      { k: 'build', s: 'Are they your brothers?', why: 'A question: Are + they + …?' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I *is* very happy today!', fix: 'am', why: 'I → am: I am very happy.' },
    { k: 'type', q: 'Where ___ my shoes? Under the bed!', hint: '(is / are)', a: ['are'], why: 'my shoes = they → are.' },
    { k: 'mc', pic: 'ice cream', q: 'The ice cream ___ cold.', o: ['is', 'are', 'am'], a: 0, why: 'the ice cream = it → is.' }
  ]
},
{
  id: 'a1g02', url: 'https://test-english.com/grammar-points/a1/this-that-these-those/', type: 'grammar',
  title: 'this, that, these, those', dinner: 'What is this on your plate?',
  hook: { q: 'How many legs does a spider have?', o: ['6', '8', '10'], a: 1,
    reveal: '*Eight*! *These* eight legs help a spider run very fast.' },
  learn: { kind: 'rule', title: 'Near or far? One or many?', form: ['this (one, near)', 'that (one, far)', 'these (many, near)', 'those (many, far)'],
    lines: ['*this* and *these* = near me: *This* is my bag. *These* are my pens.',
      '*that* and *those* = far from me: *That* is your house. *Those* are your shoes.',
      'One thing → this / that + *is*. Many things → these / those + *are*.'],
    ex: ['*This* apple is red.', 'Look at *those* birds!'],
    he: 'this = זה (קרוב), that = ההוא (רחוק). these = אלה (קרובים), those = ההם (רחוקים). ליחיד is, לרבים are.' },
  steps: [
    { name: 'Near or far?', items: [
      { k: 'mc', pic: 'apple', q: 'It is in my hand. ___ apple is red.', o: ['This', 'These', 'Those'], a: 0, why: 'one, near me → this.' },
      { k: 'mc', pic: 'bird', q: 'They are in the sky. Look at ___ birds!', o: ['those', 'this', 'that'], a: 0, why: 'many, far → those.' },
      { k: 'mc', q: '___ are my shoes, here under the table.', o: ['These', 'This', 'That'], a: 0, why: 'many, near → these.' },
      { k: 'mc', q: 'Is ___ your car, over there?', o: ['that', 'these', 'those'], a: 0, why: 'one, far → that.' }
    ] },
    { name: 'is or are?', items: [
      { k: 'tf', q: '"These book is great."', a: false, fix: 'This book is great.', why: 'one book → this.' },
      { k: 'type', q: 'Those ___ my friends over there.', hint: '(is / are)', a: ['are'], why: 'those → are.' },
      { k: 'mc', q: '___ is my teacher, Mr Cohen. He is next to me.', o: ['This', 'These', 'Those'], a: 0, why: 'one person, near → this.' },
      { k: 'tf', q: '"Those flowers are beautiful."', a: true, why: 'many, far → those + are.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'These cookies are delicious.', why: 'many, near → these + are.' },
      { k: 'spot', s: 'Is *those* your phone?', fix: 'that', why: 'one phone → that.' },
      { k: 'build', s: 'What is that over there?', why: 'one thing, far → that.' }
    ] }
  ],
  use: [
    { k: 'teach', s: '*This* are my new shoes!', fix: 'These', why: 'many shoes → These are.' },
    { k: 'type', q: 'Who are ___ people over there?', hint: '(those / these)', a: ['those'], why: 'many people, far → those.' },
    { k: 'mc', pic: 'balloon', q: 'I have one balloon in my hand. I say:', o: ['This is my balloon.', 'These are my balloon.', 'Those is my balloon.'], a: 0,
      why: 'one, near → This is.' }
  ]
},
{
  id: 'a1g03', url: 'https://test-english.com/grammar-points/a1/possessive-adjectives/', type: 'grammar',
  title: 'my, your, his, her', dinner: 'What is your favourite thing in your room?',
  hook: { q: 'Which planet is the biggest?', o: ['Jupiter', 'Mars', 'Earth'], a: 0,
    reveal: '*Jupiter*! *Its* size is huge: more than 1,300 Earths can fit inside it.' },
  learn: { kind: 'rule', title: 'I → my, she → her', form: ['I → my', 'you → your', 'he → his', 'she → her', 'it → its', 'we → our', 'they → their'],
    lines: ['These words come before a noun: *my* bag, *her* name, *their* house.',
      'he → *his*, she → *her*. it → *its* (no apostrophe!).'],
    ex: ['This is *my* sister. *Her* name is Dana.', 'The dog is eating *its* food.'],
    he: 'אחרי my, your, his... תמיד בא שם עצם: my bag. his = שלו, her = שלה. its בלי גרש!' },
  steps: [
    { name: 'Whose is it?', items: [
      { k: 'mc', q: 'I have a dog. ___ dog is called Max.', o: ['My', 'I', 'Me'], a: 0, why: 'I → my.' },
      { k: 'mc', q: 'That is Tom. ___ bike is blue.', o: ['His', 'Her', 'Its'], a: 0, why: 'Tom = he → his.' },
      { k: 'mc', q: 'Maya loves ___ new phone.', o: ['her', 'his', 'their'], a: 0, why: 'Maya = she → her.' },
      { k: 'mc', q: 'We love ___ school.', o: ['our', 'we', 'their'], a: 0, why: 'we → our.' }
    ] },
    { name: 'Complete', items: [
      { k: 'tf', q: '"What is you name?"', a: false, fix: 'What is your name?', why: 'you → your, before a noun.' },
      { k: 'type', q: 'The cat is playing with ___ ball.', hint: '(it)', a: ['its'], why: 'it → its (no apostrophe).' },
      { k: 'mc', q: 'Dan and Lea are here with ___ parents.', o: ['their', 'they', 'there'], a: 0, why: 'they → their.' },
      { k: 'tf', q: '"She is my best friend."', a: true, why: 'she before the verb, my before a noun.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'What is your favourite colour?', why: 'you → your colour.' },
      { k: 'spot', s: 'My brother loves *her* football.', fix: 'his', why: 'my brother = he → his.' },
      { k: 'build', s: 'Their house is next to the park.', why: 'they → their house.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'This is my sister. *His* name is Shira.', fix: 'Her', why: 'my sister = she → her.' },
    { k: 'type', q: '"Is this ___ bag?" "Yes, it\'s mine. Thank you!"', a: ['your'], why: 'you → your.' },
    { k: 'mc', q: 'Choose the right sentence:', o: ['The bird is in its nest.', 'The bird is in it\'s nest.', 'The bird is in it nest.'], a: 0,
      why: 'its = belonging to it. (it\'s = it is)' }
  ]
},
{
  id: 'a1v01', url: 'https://test-english.com/vocabulary/a1/common-things-a1-english-vocabulary/', type: 'vocabulary',
  title: 'Common things', dinner: 'What do you have in your school bag?',
  hook: { q: 'Before clocks, what did people use to tell the time?', o: ['The sun', 'The moon', 'Phones'], a: 0,
    reveal: '*The sun*! People used a sundial: its shadow showed the time. Today we use a *clock* or a *phone*.' },
  learn: { kind: 'words', title: 'Things you use every day', words: [
    { w: 'key', d: 'you open a door with it', ex: 'Where is my *key*?', pic: 'key' },
    { w: 'phone', d: 'you call people with it', ex: 'My *phone* is in my bag.', pic: 'phone' },
    { w: 'clock', d: 'it shows the time', ex: 'The *clock* says three o\'clock.', pic: 'clock' },
    { w: 'umbrella', d: 'you open it when it rains', ex: 'Take an *umbrella*. It\'s raining!', pic: 'umbrella' },
    { w: 'bag', d: 'you carry things in it', ex: 'Her school *bag* is heavy.', pic: 'bag' },
    { w: 'glasses', d: 'you wear them to see better', ex: 'Grandpa wears *glasses* to read.', pic: 'glasses' },
    { w: 'book', d: 'you read it', ex: 'I\'m reading a good *book*.', pic: 'book' },
    { w: 'pencil', d: 'you write or draw with it', ex: 'Write your name with a *pencil*.', pic: 'pencil' }
  ] },
  steps: [
    { name: 'What is it?', items: [
      { k: 'mc', pic: 'key', q: 'What is this?', o: ['a key', 'a clock', 'a pencil'], a: 0, why: 'a key opens a door.' },
      { k: 'mc', pic: 'umbrella', q: 'What is this?', o: ['an umbrella', 'a bag', 'a book'], a: 0, why: 'an umbrella, for the rain.' },
      { k: 'mc', pic: 'glasses', q: 'What are these?', o: ['glasses', 'phones', 'keys'], a: 0, why: 'glasses help you see.' },
      { k: 'mc', pic: 'clock', q: 'What is this?', o: ['a clock', 'a phone', 'a book'], a: 0, why: 'a clock shows the time.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Where is it, usually?', g: ['in a school bag', 'in a kitchen'],
        w: [['a book', 0], ['a pencil', 0], ['a ruler', 0], ['a spoon', 1], ['a cup', 1], ['a plate', 1]],
        why: 'school bag: a book, a pencil, a ruler · kitchen: a spoon, a cup, a plate' },
      { k: 'hear', say: 'Where is my phone?', q: 'What is she looking for?', o: ['her phone', 'her key', 'her bag'], a: 0, why: 'She asks: Where is my phone?' },
      { k: 'spell', w: 'key', clue: 'You open a door with it.', why: 'key: k-e-y.' },
      { k: 'mc', q: 'You read a ___.', o: ['book', 'key', 'clock'], a: 0, why: 'You read a book.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'In my bag',
        t: 'In my bag I have a [1] to open the door, a [2] to call my mum and an [3] for the rain. I also have a [4] to write with.',
        gaps: [
          { o: ['key', 'book', 'clock'], a: 0, why: 'open the door → key.' },
          { o: ['phone', 'pencil', 'bag'], a: 0, why: 'call → phone.' },
          { o: ['umbrella', 'apple', 'eraser'], a: 0, why: 'the rain → umbrella.' },
          { o: ['pencil', 'clock', 'key'], a: 0, why: 'write → pencil.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I wear my *clock* to read.', fix: 'glasses', why: 'You wear glasses to read and see better.' },
    { k: 'type', q: 'It\'s raining! Take your ___.', a: ['umbrella'], why: 'An umbrella keeps you dry.' }
  ]
},
{
  id: 'a1v02', url: 'https://test-english.com/vocabulary/a1/common-verbs-and-verb-phrases-a1-english-vocabulary/', type: 'vocabulary',
  title: 'My day', dinner: 'What time do you get up and go to bed?',
  hook: { q: 'About how many hours does a cat sleep in one day?', o: ['About 5', 'About 15', 'About 23'], a: 1,
    reveal: 'About *15 hours*! A cat *sleeps* more than it *plays*. Today: words for your day.' },
  learn: { kind: 'words', title: 'Things you do every day', words: [
    { w: 'get up', d: 'get out of bed', ex: 'I *get up* at seven.' },
    { w: 'have breakfast', d: 'eat in the morning', ex: 'We *have breakfast* together.' },
    { w: 'go to school', d: 'travel to school', ex: 'I *go to school* by bus.', pic: 'school' },
    { w: 'do homework', d: 'do the work your teacher gives you', ex: 'I *do* my *homework* after school.', pic: 'book' },
    { w: 'watch TV', d: 'look at programmes on TV', ex: 'We *watch TV* in the evening.', pic: 'TV' },
    { w: 'play football', d: 'play a game with a ball', ex: 'They *play football* in the park.', pic: 'ball' },
    { w: 'brush your teeth', d: 'clean your teeth', ex: '*Brush your teeth* before bed!' },
    { w: 'go to bed', d: 'go to sleep at night', ex: 'I *go to bed* at ten.', pic: 'bed' }
  ] },
  steps: [
    { name: 'Match', items: [
      { k: 'mc', q: 'You do this in the morning, when you wake up:', o: ['get up', 'go to bed', 'watch TV'], a: 0, why: 'get up = get out of bed.' },
      { k: 'mc', q: 'You do this with a ball:', o: ['play football', 'do homework', 'have breakfast'], a: 0, why: 'play football.' },
      { k: 'mc', q: 'You do this at night:', o: ['go to bed', 'get up', 'go to school'], a: 0, why: 'go to bed at night.' },
      { k: 'mc', pic: 'TV', q: 'What do you do with it?', o: ['watch TV', 'play TV', 'do TV'], a: 0, why: 'We say watch TV.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Morning or evening?', g: ['morning', 'evening'],
        w: [['get up', 0], ['have breakfast', 0], ['go to school', 0], ['watch TV', 1], ['go to bed', 1], ['have dinner', 1]],
        why: 'morning: get up, breakfast, school · evening: TV, dinner, bed' },
      { k: 'hear', say: 'I brush my teeth before bed.', q: 'When does she brush her teeth?', o: ['before bed', 'after school', 'in the car'], a: 0, why: 'before bed.' },
      { k: 'spell', w: 'play', clue: 'You ___ football with friends.', why: 'play: p-l-a-y.' },
      { k: 'mc', q: 'I ___ my homework after school.', o: ['do', 'make', 'play'], a: 0, why: 'do homework.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'My day',
        t: 'I [1] up at seven and I [2] breakfast with my family. Then I [3] to school. In the evening I [4] TV, and I go to bed at ten.',
        gaps: [
          { o: ['get', 'go', 'do'], a: 0, why: 'get up.' },
          { o: ['have', 'do', 'play'], a: 0, why: 'have breakfast.' },
          { o: ['go', 'get', 'have'], a: 0, why: 'go to school.' },
          { o: ['watch', 'look', 'play'], a: 0, why: 'watch TV.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Every day I *make* my homework.', fix: 'do', why: 'We say do homework.', he: 'אומרים do homework, לא make.' },
    { k: 'type', q: 'I ___ football with my friends on Fridays.', a: ['play'], why: 'play football.' }
  ]
},
{
  id: 'a1l01', url: 'https://test-english.com/listening/a1/giving-personal-information-a1-english-listening-test/', type: 'listening',
  title: 'Joining a club', dinner: 'How do you spell your name in English?',
  hook: { q: 'Which first name do more people in the world have than any other?', o: ['Mohammed', 'John', 'Maria'], a: 0,
    reveal: '*Mohammed*! Many millions of people have this name. And what is *your* name?' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'surname', d: 'your family name' },
    { w: 'address', d: 'the street and number where you live' },
    { w: 'spell', d: 'say the letters of a word' }
  ], predict: { q: 'A boy wants to join a swimming club. What do you think they ask him?', o: ['His name and his age', 'His favourite film', 'His shoe size'] } },
  show: { cast: 'Tom wants to join a swimming club.', names: { W: 'Woman', T: 'Tom' }, voices: { W: 'bf_emma', T: 'am_adam' },
    parts: [
      { lines: [
        ['W', 'Hello! Do you want to join the swimming club?'],
        ['T', 'Yes, please.'],
        ['W', 'OK. What\'s your name?'],
        ['T', 'My name is Tom Baker.'],
        ['W', 'How do you spell Baker?'],
        ['T', 'B, A, K, E, R.']
      ], items: [
        { k: 'mc', q: 'What is the boy\'s name?', o: ['Tom Baker', 'Tom Parker', 'Tim Baker'], a: 0, why: '"My name is Tom Baker."' },
        { k: 'mc', q: 'What club does he want to join?', o: ['a swimming club', 'a football club', 'a music club'], a: 0, why: '"Do you want to join the swimming club?"' }
      ] },
      { lines: [
        ['W', 'And how old are you, Tom?'],
        ['T', 'I\'m eleven.'],
        ['W', 'Where do you live?'],
        ['T', 'I live at 24 Green Street.']
      ], items: [
        { k: 'mc', q: 'How old is Tom?', o: ['eleven', 'twelve', 'seven'], a: 0, why: '"I\'m eleven."' },
        { k: 'type', q: 'Tom lives at ___ Green Street.', a: ['24', 'twenty-four', 'twenty four'], why: '"I live at 24 Green Street."' }
      ] },
      { lines: [
        ['W', 'Great. Swimming is on Mondays at five o\'clock. See you on Monday!'],
        ['T', 'Thank you! Bye!']
      ], items: [
        { k: 'mc', q: 'When is swimming?', o: ['on Mondays at five', 'on Fridays at five', 'on Mondays at nine'], a: 0, why: '"Swimming is on Mondays at five o\'clock."' },
        { k: 'tf', q: 'Swimming is in the morning.', a: false, fix: 'It is at five o\'clock in the afternoon.', why: '"at five o\'clock"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'mc', clip: 0, q: 'How do you spell "Baker"?', o: ['B-A-K-E-R', 'B-E-K-A-R', 'B-A-C-K-E-R'], a: 0, why: '"B, A, K, E, R."' },
      { k: 'hear', say: 'What is your name?', q: 'What does she ask?', o: ['his name', 'his age', 'his address'], a: 0, why: 'What is your name? = your name.' },
      { k: 'sort', q: 'A question or an answer?', g: ['question', 'answer'],
        w: [['What\'s your name?', 0], ['How old are you?', 0], ['Where do you live?', 0], ['My name is Tom.', 1], ['I\'m eleven.', 1], ['I live in Haifa.', 1]],
        why: 'questions: What\'s your name? How old are you? Where do you live? · answers: My name is…, I\'m…, I live in…' }
    ] }
  ],
  use: [
    { k: 'build', s: 'How old are you?', why: 'How old + are + you?' }
  ]
},
{
  id: 'a1l02', url: 'https://test-english.com/listening/a1/who-is-in-your-new-class-a1-english-listening-test/', type: 'listening',
  title: 'My new class', dinner: 'Who sits next to you in class?',
  hook: { q: 'In which country is the biggest school in the world, with more than 50,000 students?', o: ['India', 'The USA', 'China'], a: 0,
    reveal: 'In *India*! A school in the city of Lucknow has more than 50,000 students. That\'s a big class photo!' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'classmate', d: 'a person in your class' },
    { w: 'glasses', d: 'you wear them to see better' },
    { w: 'funny', d: 'makes you laugh' }
  ], predict: { q: 'A girl talks about her new class. Does she like it?', o: ['Yes, very much', 'No, not at all', 'She doesn\'t know yet'] } },
  show: { cast: 'Lily tells her mum about her new class.', names: { L: 'Lily', M: 'Mum' }, voices: { L: 'af_bella', M: 'bf_isabella' },
    parts: [
      { lines: [
        ['M', 'Hi Lily! How is your new class?'],
        ['L', 'It\'s great, Mum! My teacher is Mrs Green. She is very nice.'],
        ['M', 'That\'s good. Do you have new friends?'],
        ['L', 'Yes! My new friend is Sara. She is tall and she has long black hair.']
      ], items: [
        { k: 'mc', q: 'Who is Lily\'s teacher?', o: ['Mrs Green', 'Mrs Brown', 'Mrs Gray'], a: 0, why: '"My teacher is Mrs Green."' },
        { k: 'mc', q: 'What does Sara look like?', o: ['tall, with long black hair', 'short, with blond hair', 'tall, with short hair'], a: 0, why: '"She is tall and she has long black hair."' }
      ] },
      { lines: [
        ['M', 'What does Sara like?'],
        ['L', 'She likes drawing. She draws animals. Her cats are really good!'],
        ['M', 'And is there a funny boy in your class?'],
        ['L', 'Yes, Ben! He has glasses, and he tells jokes all the time.']
      ], items: [
        { k: 'mc', q: 'What does Sara like?', o: ['drawing', 'singing', 'football'], a: 0, why: '"She likes drawing."' },
        { k: 'mc', q: 'What is Ben like?', o: ['funny', 'quiet', 'sad'], a: 0, why: '"he tells jokes all the time."' },
        { k: 'tf', q: 'Ben has glasses.', a: true, why: '"He has glasses."' }
      ] },
      { lines: [
        ['M', 'So, how many students are in your class?'],
        ['L', 'Twenty-six. Thirteen boys and thirteen girls.'],
        ['M', 'Wow, that\'s a big class!']
      ], items: [
        { k: 'type', q: 'There are ___ students in Lily\'s class.', a: ['26', 'twenty-six', 'twenty six'], why: '"Twenty-six."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'mc', clip: 1, q: 'Sara draws…', o: ['animals', 'people', 'houses'], a: 0, why: '"She draws animals."' },
      { k: 'hear', say: 'She is tall and she has long black hair.', q: 'Is she tall?', o: ['Yes, she is.', 'No, she isn\'t.', 'We don\'t know.'], a: 0, why: 'She is tall.' },
      { k: 'sort', q: 'About Sara: how she looks or what she likes?', g: ['how she looks', 'what she likes'],
        w: [['tall', 0], ['long hair', 0], ['black hair', 0], ['drawing', 1], ['animals', 1], ['her new class', 1]],
        why: 'looks: tall, long black hair · likes: drawing, animals, her class' }
    ] }
  ],
  use: [
    { k: 'build', s: 'My new friend is very nice.', why: 'friend = she → is.' }
  ]
},
{
  id: 'a1l03', url: 'https://test-english.com/listening/a1/how-often-do-you-a1-english-listening-test/', type: 'listening',
  title: 'How often?', dinner: 'How often do you eat vegetables?',
  hook: { q: 'What is the most popular drink in the world, after water?', o: ['Tea', 'Coffee', 'Orange juice'], a: 0,
    reveal: '*Tea*! Many people drink it *every day*. How often do *you* drink tea?' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'always', d: 'every time' },
    { w: 'sometimes', d: 'not every time, but some times' },
    { w: 'never', d: 'not at any time' }
  ], predict: { q: 'A girl answers a school survey about her week. Does she do sport often?', o: ['Yes, very often', 'Sometimes', 'Never'] } },
  show: { cast: 'A school survey. A student asks Amy some questions.', names: { R: 'Reporter', A: 'Amy' }, voices: { R: 'am_eric', A: 'af_heart' },
    parts: [
      { lines: [
        ['R', 'Hi Amy! Can I ask you some questions for our school survey?'],
        ['A', 'Sure!'],
        ['R', 'How often do you play sport?'],
        ['A', 'I play basketball three times a week, on Sunday, Tuesday and Thursday.']
      ], items: [
        { k: 'mc', q: 'What sport does Amy play?', o: ['basketball', 'football', 'tennis'], a: 0, why: '"I play basketball"' },
        { k: 'mc', q: 'How often does she play?', o: ['three times a week', 'once a week', 'every day'], a: 0, why: '"three times a week"' }
      ] },
      { lines: [
        ['R', 'Do you eat breakfast every day?'],
        ['A', 'Yes, I always eat breakfast. I usually have eggs and bread.'],
        ['R', 'And how often do you eat fast food?'],
        ['A', 'Hmm, sometimes. Maybe once a month. And I never drink cola.']
      ], items: [
        { k: 'mc', q: 'What does Amy usually have for breakfast?', o: ['eggs and bread', 'cereal and milk', 'nothing'], a: 0, why: '"I usually have eggs and bread."' },
        { k: 'mc', q: 'How often does she eat fast food?', o: ['about once a month', 'every week', 'never'], a: 0, why: '"Maybe once a month."' },
        { k: 'tf', q: 'Amy often drinks cola.', a: false, fix: 'She never drinks cola.', why: '"I never drink cola."' }
      ] },
      { lines: [
        ['R', 'Last question. How often do you read books?'],
        ['A', 'Every night, before I go to sleep. I love stories!'],
        ['R', 'Thank you, Amy!']
      ], items: [
        { k: 'mc', q: 'When does Amy read?', o: ['every night before sleep', 'on Saturdays', 'in the morning'], a: 0, why: '"Every night, before I go to sleep."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'type', clip: 1, q: 'Yes, I ___ eat breakfast.', hint: '(always / never)', a: ['always'], why: '"Yes, I always eat breakfast."' },
      { k: 'mc', q: 'Which word means "not at any time"?', o: ['never', 'always', 'often'], a: 0, why: 'never = not at any time.' },
      { k: 'hear', say: 'I sometimes go to the cinema with my dad.', q: 'How often does he go to the cinema?', o: ['sometimes', 'always', 'never'], a: 0, why: 'sometimes.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'How often do you read books?', why: 'How often + do + you + read?' }
  ]
},
{
  id: 'a1r01', url: 'https://test-english.com/reading/a1/guess-who-a1-english-reading-test/', type: 'reading',
  title: 'Guess who?', dinner: 'Can you describe an animal so I can guess it?',
  hook: { q: 'Which animal can sleep standing up?', o: ['A horse', 'A dog', 'A fish'], a: 0,
    reveal: 'A *horse*! Horses can rest standing up. Now read the clues and guess the animals.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'Three animals talk about themselves. Read the clues and guess who they are!',
    predict: { q: 'The first animal is very big. What do you think it is?', o: ['An elephant', 'A mouse', 'A bird'] } },
  story: { title: 'Guess who?', chunks: [
    { text: 'I am an animal. I am very big and grey. I have big ears and a very long nose. I eat plants and fruit, and I love water. I live in Africa and Asia. Who am I?',
      items: [
        { k: 'mc', q: 'Who am I?', o: ['an elephant', 'a lion', 'a horse'], a: 0, why: 'big, grey, big ears and a long nose → an elephant.' },
        { k: 'tf', q: 'This animal eats meat.', a: false, fix: 'It eats plants and fruit.', why: '"I eat plants and fruit"' },
        { k: 'find', q: 'Find the colour word.', a: 'grey', why: 'grey is a colour.' }
      ] },
    { text: 'I am a bird, but I can\'t fly. I am black and white. I live in a very cold place, and I swim very well. I eat fish. Who am I?',
      items: [
        { k: 'mc', q: 'Who am I?', o: ['a penguin', 'a duck', 'an owl'], a: 0, why: 'a bird that can\'t fly, black and white, swims → a penguin.' },
        { k: 'mc', q: 'Where does it live?', o: ['in a very cold place', 'in a hot desert', 'in a house'], a: 0, why: '"I live in a very cold place"' }
      ] },
    { text: 'I am small and orange. I live in water. I can\'t walk, but I swim all day. I don\'t have legs or arms. Children often keep me in a glass bowl at home. Who am I?',
      items: [
        { k: 'mc', q: 'Who am I?', o: ['a fish', 'a cat', 'a frog'], a: 0, why: 'small, orange, lives in water, no legs → a fish.' },
        { k: 'find', q: 'Find a word that means "not big".', a: 'small', why: 'small = not big.' },
        { k: 'tf', q: 'This animal has four legs.', a: false, fix: 'It doesn\'t have legs.', why: '"I don\'t have legs or arms."' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the best title for the text?', o: ['Guess the animal', 'My family', 'At school'], a: 0, why: 'Three animals give clues, and we guess who they are.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'I am a bird, but I ___ fly.', hint: '(can / can\'t)', a: ['can\'t', 'cannot'], why: 'A penguin can\'t fly.' }
  ]
}
];
