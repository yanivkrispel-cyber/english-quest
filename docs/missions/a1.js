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
},
{
  id: 'a1u02', url: 'https://test-english.com/use-of-english/a1/a1-english-test-2-multiple-choice-questions/', type: 'use-of-english',
  title: 'A cat at school', dinner: 'What animal would you like to bring to school?',
  hook: { q: 'What do we call a baby cat?', o: ['A kitten', 'A puppy', 'A calf'], a: 0,
    reveal: 'A *kitten*! Today\'s news story is about a cat that goes to school every day. (It is a made-up story!)' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a funny news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A cat goes to school every day. What do you think she does there?', o: ['She listens to the lessons.', 'She teaches maths.', 'She drives the school bus.'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'Lucky goes to school',
        t: 'Every morning a small black cat [1] to Green Park School. Her name [2] Lucky. She sits [3] the teacher\'s desk and listens to the lessons. The children [4] her very much. Lucky [5] read, but she likes books! At twelve o\'clock she [6] lunch with the children: fish, of course. In the afternoon she sleeps [7] the window. "She is [8] best student," says the teacher.',
        gaps: [
          { o: ['goes', 'go', 'going'], a: 0, why: 'she → goes (he, she, it + s).' },
          { o: ['is', 'are', 'am'], a: 0, why: 'her name = it → is.' },
          { o: ['on', 'in', 'at'], a: 0, why: 'on the desk = on top of it.' },
          { o: ['love', 'loves', 'loving'], a: 0, why: 'the children = they → love.' },
          { o: ['can\'t', 'can', 'does'], a: 0, why: 'Cats can\'t read!' },
          { o: ['has', 'have', 'is'], a: 0, why: 'she → has lunch.' },
          { o: ['next to', 'between', 'under of'], a: 0, why: 'next to the window.' },
          { o: ['our', 'we', 'us'], a: 0, why: 'our + a noun: our best student.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'My brother ___ football every day.', o: ['plays', 'play', 'playing'], a: 0, why: 'he → plays.' },
      { k: 'mc', q: 'The book is ___ the table.', o: ['on', 'at', 'to'], a: 0, why: 'on the table.' },
      { k: 'tf', q: '"She have a dog."', a: false, fix: 'She has a dog.', why: 'she → has.' },
      { k: 'type', q: '___ you like cats?', a: ['do'], why: 'Do you like…?' }
    ] }
  ],
  use: [
    { k: 'build', s: 'The cat sits on the desk.', why: 'the cat = it → sits.' }
  ]
},
{
  id: 'a1g04', url: 'https://test-english.com/grammar-points/a1/a-an-plurals/', type: 'grammar',
  title: 'a, an and plurals', dinner: 'How many apples and bananas do we have at home?',
  hook: { q: 'How many teeth does an adult usually have?', o: ['20', '32', '50'], a: 1,
    reveal: '*32 teeth*! A young child has 20. One *tooth*, two *teeth*: some plurals are strange!' },
  learn: { kind: 'rule', title: 'One or many?', form: ['a + consonant sound: a cat, a banana', 'an + vowel sound: an apple, an egg', 'many: cat → cats, bus → buses, baby → babies'],
    lines: ['Use *a* or *an* with one thing: *a* dog, *an* orange.',
      '*an* before a vowel sound (a, e, i, o, u): *an* egg, *an* ice cream, *an* umbrella.',
      'Plurals: + *s* (books). + *es* after s, sh, ch, x (buses, watches, boxes). y → *ies* (baby → babies), but boy → boys.',
      'Some are different: man → *men*, woman → *women*, child → *children*, foot → *feet*, tooth → *teeth*, mouse → *mice*.'],
    ex: ['I have *an* apple and *a* banana.', 'The *children* have new *watches*.'],
    he: 'בעברית אין מילה ל-a/an, אבל באנגלית לפני דבר אחד חייבים a או an: I have a dog (לא I have dog). ברבים אין a: two dogs.' },
  steps: [
    { name: 'a or an?', items: [
      { k: 'mc', q: 'I want ___ orange, please.', o: ['an', 'a', 'two'], a: 0, why: 'orange starts with a vowel sound → an orange.' },
      { k: 'mc', q: 'My sister has ___ new bike.', o: ['a', 'an', 'two'], a: 0, why: 'new starts with a consonant sound → a new bike.' },
      { k: 'mc', q: 'We can see ___ elephant at the zoo.', o: ['an', 'a', 'many'], a: 0, why: 'elephant starts with a vowel sound → an.' },
      { k: 'mc', q: 'Dan is ___ student in my class.', o: ['a', 'an', 'some'], a: 0, why: 'one student → a student.',
        he: 'בעברית "דן תלמיד". באנגלית צריך a: Dan is a student.' }
    ] },
    { name: 'One or many?', items: [
      { k: 'mc', q: 'Two ___ are on the table.', o: ['boxes', 'boxs', 'box'], a: 0, why: 'after x → + es: boxes.' },
      { k: 'tf', q: '"I have two babys."', a: false, fix: 'I have two babies.', why: 'a consonant + y → ies: babies.' },
      { k: 'type', q: 'One child, three ___.', hint: '(child)', a: ['children'], why: 'child → children (not childs).' },
      { k: 'tf', q: '"The boys are in the park."', a: true, why: 'a vowel + y → just + s: boy → boys.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'I have an old guitar.', why: 'old starts with a vowel sound → an old guitar.' },
      { k: 'spot', s: 'Our cat can see three *mouses* in the garden.', fix: 'mice', why: 'one mouse, two mice.' },
      { k: 'build', s: 'The children have two new watches.', why: 'child → children, watch → watches.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I want *a* ice cream!', fix: 'an', why: 'ice starts with a vowel sound → an ice cream.' },
    { k: 'type', q: 'Our dog has four ___.', hint: '(foot)', a: ['feet'], why: 'one foot, four feet.' },
    { k: 'mc', q: 'Choose the right sentence:', o: ['My mum is a doctor.', 'My mum is doctor.', 'My mum is an doctor.'], a: 0,
      why: 'a job, one person → a doctor.', he: 'בעברית "אמא שלי רופאה". באנגלית חייבים a לפני מקצוע: She is a doctor.' }
  ]
},
{
  id: 'a1g05', url: 'https://test-english.com/grammar-points/a1/adjectives/', type: 'grammar',
  title: 'Adjectives: a big dog', dinner: 'Can you describe your best friend with three adjectives?',
  hook: { q: 'Which is the biggest animal that ever lived?', o: ['The T. rex', 'The blue whale', 'The African elephant'], a: 1,
    reveal: 'The *blue whale*! It is a *very big* animal, about 30 metres long. *Big*, *blue*, *long*: these words are adjectives.' },
  learn: { kind: 'rule', title: 'Words that describe', form: ['adjective + noun: a red car', 'be + adjective: The car is red.', 'no -s: big dogs (not bigs dogs)'],
    lines: ['Adjectives describe a noun: a *big* house, a *funny* film, an *expensive* phone.',
      'The adjective comes *before* the noun: a *new* bike (not a bike new).',
      'Or after am / is / are: My bike *is new*. The films *are funny*.',
      'An adjective never takes *-s*: two *old* cars, *interesting* books.'],
    ex: ['She has a *small* white dog.', 'This game is *very interesting*.'],
    he: 'בעברית שם התואר בא אחרי שם העצם: "כלב גדול". באנגלית הפוך: a big dog. ושם התואר לא מקבל רבים: big dogs, לא bigs dogs.' },
  steps: [
    { name: 'Where does it go?', items: [
      { k: 'mc', q: 'Choose the right sentence:', o: ['I have a black cat.', 'I have a cat black.', 'I have black a cat.'], a: 0, why: 'the adjective goes before the noun: a black cat.' },
      { k: 'mc', q: 'Choose the right sentence:', o: ['These shoes are expensive.', 'These shoes are expensives.', 'These are shoes expensive.'], a: 0, why: 'an adjective has no -s, even with many things.' },
      { k: 'mc', q: 'My grandpa is 80. He is ___.', o: ['old', 'new', 'young'], a: 0, why: 'a person with many years → old. (new is for things.)' },
      { k: 'mc', q: 'The film is very ___. We laugh all the time!', o: ['funny', 'sad', 'boring'], a: 0, why: 'you laugh → funny.' }
    ] },
    { name: 'No -s!', items: [
      { k: 'tf', q: '"They are bigs dogs."', a: false, fix: 'They are big dogs.', why: 'no -s on adjectives: big dogs.' },
      { k: 'type', q: 'This book isn\'t boring. It\'s very ___.', hint: '(interesting / old)', a: ['interesting'], why: 'not boring → interesting.' },
      { k: 'mc', q: 'Choose the right sentence:', o: ['Noa has long hair.', 'Noa has hair long.', 'Noa has longs hair.'], a: 0, why: 'adjective before the noun, and no -s: long hair.' },
      { k: 'tf', q: '"The pizza is hot."', a: true, why: 'be + adjective: is hot.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'We live in a small house.', why: 'a + small + house: the adjective before the noun.' },
      { k: 'spot', s: 'Look at the *greens* trees!', fix: 'green', why: 'no -s on adjectives: green trees.' },
      { k: 'build', s: 'My new shoes are very nice.', why: 'new before shoes; are + very + nice.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'My sister has two *smalls* rabbits.', fix: 'small', why: 'no -s on adjectives: two small rabbits.' },
    { k: 'type', q: 'An elephant is big. A mouse is ___.', a: ['small', 'little', 'tiny'], why: 'the opposite of big → small.' },
    { k: 'mc', q: 'Choose the right sentence:', o: ['It is an old house.', 'It is a old house.', 'It is an house old.'], a: 0,
      why: 'old starts with a vowel sound → an; the adjective goes before the noun.' }
  ]
},
{
  id: 'a1g06', url: 'https://test-english.com/grammar-points/a1/present-simple/', type: 'grammar',
  title: 'I play, she plays', dinner: 'What do you do every day after school?',
  hook: { q: 'What do bees make?', o: ['Milk', 'Honey', 'Bread'], a: 1,
    reveal: '*Honey*! A bee *visits* many flowers every day. Today: I make, she makes, does she make?' },
  learn: { kind: 'rule', title: 'The present simple', form: ['I / you / we / they play', 'he / she / it plays', 'don\'t / doesn\'t + play', 'Do you play? Does she play?'],
    lines: ['We use it for things we do every day or always: I *walk* to school.',
      'he / she / it + *s*: she *plays*, he *watches* (+ es), it *flies* (y → ies). have → *has*.',
      'Not: I *don\'t* like fish. She *doesn\'t* like fish (no -s after doesn\'t!).',
      'Questions: *Do* you like pizza? *Does* he live here? Yes, he *does*. No, he *doesn\'t*.'],
    ex: ['My brother *plays* the guitar.', '*Does* your cat *eat* fish?'],
    he: 'אחרי he, she, it מוסיפים s: she plays. אבל אחרי doesn\'t ו-Does הפועל חוזר לצורה הרגילה: She doesn\'t play. Does she play? (לא doesn\'t plays).' },
  steps: [
    { name: '-s or no -s?', items: [
      { k: 'mc', q: 'My dad ___ to work by bus.', o: ['goes', 'go', 'going'], a: 0, why: 'he → goes (go + es).' },
      { k: 'mc', q: 'We ___ English on Sundays and Tuesdays.', o: ['study', 'studies', 'studys'], a: 0, why: 'we → study, no -s.' },
      { k: 'mc', q: 'Maya ___ two cats.', o: ['has', 'have', 'haves'], a: 0, why: 'she → has.' },
      { k: 'mc', q: 'The shop ___ at nine o\'clock.', o: ['opens', 'open', 'opening'], a: 0, why: 'the shop = it → opens.' }
    ] },
    { name: 'don\'t or doesn\'t?', items: [
      { k: 'tf', q: '"She doesn\'t likes milk."', a: false, fix: 'She doesn\'t like milk.', why: 'after doesn\'t → like, no -s.' },
      { k: 'mc', q: 'I ___ eat meat. I only eat vegetables.', o: ['don\'t', 'doesn\'t', 'not'], a: 0, why: 'I → don\'t.',
        he: 'בעברית "אני לא אוכל". באנגלית לא מספיק not: I don\'t eat.' },
      { k: 'type', q: 'Tom ___ watch TV in the morning. He reads.', hint: '(don\'t / doesn\'t)', a: ['doesn\'t', 'does not'], why: 'Tom = he → doesn\'t.' },
      { k: 'mc', q: '"Do you like football?" "Yes, I ___."', o: ['do', 'does', 'am'], a: 0, why: 'Do you…? → Yes, I do.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Does your sister play the piano?', why: 'Does + your sister + play…? (no -s on play)' },
      { k: 'spot', s: 'Where *does* you live?', fix: 'do', why: 'you → Where do you live?' },
      { k: 'build', s: 'We don\'t go to school on Saturday.', why: 'we → don\'t + go.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'My cat *sleep* on my bed every night.', fix: 'sleeps', why: 'my cat = it → sleeps.' },
    { k: 'type', q: '___ your brother like chocolate?', a: ['does'], why: 'your brother = he → Does…?' },
    { k: 'mc', q: '"Does Yoni speak English?" "Yes, he ___."', o: ['does', 'do', 'is'], a: 0, why: 'Does he…? → Yes, he does.' }
  ]
},
{
  id: 'a1g07', url: 'https://test-english.com/grammar-points/a1/questions/', type: 'grammar',
  title: 'Who? What? Where?', dinner: 'What questions can you ask me about my day?',
  hook: { q: 'How many colours are there in a rainbow?', o: ['5', '7', '10'], a: 1,
    reveal: 'We usually say *seven*: red, orange, yellow, green, blue, indigo and violet. *How many*, *what*, *where*: today we ask questions!' },
  learn: { kind: 'rule', title: 'Asking questions', form: ['question word + be + subject: Where is Dana?', 'question word + do / does + subject + verb: Where do you live?'],
    lines: ['*What* = a thing. *Who* = a person. *Where* = a place. *When* = a time. *Why* = a reason. *How* = in what way.',
      'Also: *How old* (age), *How many* (a number), *What time* (the hour).',
      'With be, change the order: She is here → *Is she* here? Where *are* my keys?',
      'With other verbs, add do / does: *Where do* you live? *What does* he eat?'],
    ex: ['*Where do* you play football?', '*How old is* your brother?'],
    he: 'בעברית שואלים בלי לשנות את הסדר: "איפה אתה גר?". באנגלית מוסיפים do או does: Where do you live? ועם be מחליפים סדר: Where is she?' },
  steps: [
    { name: 'Which word?', items: [
      { k: 'mc', q: '"___ is your birthday?" "In May."', o: ['When', 'Where', 'Who'], a: 0, why: 'In May = a time → When.' },
      { k: 'mc', q: '"___ is your teacher?" "Mrs Levi."', o: ['Who', 'What', 'Where'], a: 0, why: 'a person → Who.' },
      { k: 'mc', q: '"___ do you live?" "In Haifa."', o: ['Where', 'When', 'How'], a: 0, why: 'a place → Where.' },
      { k: 'mc', q: '"___ brothers do you have?" "Two."', o: ['How many', 'How old', 'What time'], a: 0, why: 'a number → How many.' }
    ] },
    { name: 'Word order', items: [
      { k: 'mc', q: 'Choose the right question:', o: ['Where does she work?', 'Where she works?', 'Where does she works?'], a: 0, why: 'Where + does + she + work (no -s after does).' },
      { k: 'tf', q: '"What time you get up?"', a: false, fix: 'What time do you get up?', why: 'add do: What time do you…?' },
      { k: 'type', q: '"___ old are you?" "I\'m eleven."', a: ['how'], why: 'age → How old.' },
      { k: 'mc', q: 'Choose the right question:', o: ['Is your dog hungry?', 'Does your dog hungry?', 'Is hungry your dog?'], a: 0, why: 'with be: Is + your dog + hungry?' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'What do you eat for breakfast?', why: 'What + do + you + eat?' },
      { k: 'spot', s: 'Why *is* you sad?', fix: 'are', why: 'you → are: Why are you sad?' },
      { k: 'build', s: 'Where does your best friend live?', why: 'Where + does + your best friend + live?' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'Where *do* Noam live?', fix: 'does', why: 'Noam = he → Where does Noam live?' },
    { k: 'type', q: '"___ is your favourite colour?" "Blue!"', a: ['what', 'which'], why: 'a thing → What.' },
    { k: 'mc', q: '"___ do you go to school?" "By bus."', o: ['How', 'Who', 'Where'], a: 0, why: 'By bus = the way → How.' }
  ]
},
{
  id: 'a1g08', url: 'https://test-english.com/grammar-points/a1/adverbs-frequency/', type: 'grammar',
  title: 'always, often, never', dinner: 'What do you usually do at the weekend?',
  hook: { q: 'How often can we see a full moon?', o: ['Every night', 'About once a month', 'Once a year'], a: 1,
    reveal: 'About *once a month*! The moon is *always* there, but we *sometimes* see all of it and *sometimes* only a part.' },
  learn: { kind: 'rule', title: 'How often?', form: ['always (every time)', 'usually', 'often', 'sometimes', 'never (not at any time)'],
    lines: ['These words say how often: I *always* walk to school. She *never* eats fish.',
      'They come *before* the main verb: I *often* play tennis (not I play often tennis).',
      'But *after* am / is / are: He *is always* late. We *are never* bored.',
      'Ask with *How often*: How often do you swim? → Every day. Once a week.'],
    ex: ['I *usually* get up at seven.', 'My cat *is always* hungry.'],
    he: 'המילים האלה באות לפני הפועל: I always eat. אבל אחרי am, is, are: She is always happy. ו-never כבר אומרת "אף פעם לא": I never eat fish (בלי don\'t).' },
  steps: [
    { name: 'How often?', items: [
      { k: 'mc', q: 'Dana drinks milk every morning. She ___ drinks milk in the morning.', o: ['always', 'never', 'sometimes'], a: 0, why: 'every morning → always.' },
      { k: 'mc', q: 'Ron hates fish. He ___ eats it.', o: ['never', 'always', 'usually'], a: 0, why: 'he hates it → never.' },
      { k: 'mc', q: 'always → usually → ___ → sometimes → never', o: ['often', 'never', 'always'], a: 0, why: 'the order: always, usually, often, sometimes, never.' },
      { k: 'mc', q: 'Lior plays tennis on some days, but not every week. He ___ plays tennis.', o: ['sometimes', 'always', 'never'], a: 0, why: 'some days, not every week → sometimes.' }
    ] },
    { name: 'Where does it go?', items: [
      { k: 'mc', q: 'Choose the right sentence:', o: ['I often watch films.', 'I watch often films.', 'I often films watch.'], a: 0, why: 'before the main verb: often watch.' },
      { k: 'tf', q: '"She is never late."', a: true, why: 'after is: is never.' },
      { k: 'type', q: 'We ___ eat pizza on Fridays. It\'s our favourite!', hint: '(usually / never)', a: ['usually'], why: 'It\'s our favourite → usually.' },
      { k: 'tf', q: '"He always is happy."', a: false, fix: 'He is always happy.', why: 'after is: is always.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'My dog usually sleeps on the sofa.', why: 'usually before the verb sleeps.' },
      { k: 'spot', s: 'I don\'t like the sea, so I *always* swim there.', fix: 'never', why: 'I don\'t like it → I never swim there.' },
      { k: 'build', s: 'How often do you play computer games?', why: 'How often + do + you + play?' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'We have English every Monday. We *never* have English on Mondays.', fix: 'always', why: 'every Monday → always.' },
    { k: 'type', q: '"How ___ do you go swimming?" "Twice a week."', a: ['often'], why: 'How often…? asks about times a week, a month…' },
    { k: 'mc', q: 'Choose the right sentence:', o: ['My brother is never tired after football.', 'My brother never is tired after football.', 'My brother is tired never after football.'], a: 0,
      why: 'after is: is never.', he: 'never באה אחרי is, ולא לפניו: is never tired.' }
  ]
},
{
  id: 'a1g09', url: 'https://test-english.com/grammar-points/a1/object-pronouns/', type: 'grammar',
  title: 'I or me? she or her?', dinner: 'Who do you sit with at lunch, and what do you talk about?',
  hook: { q: 'Which animal knows that it is looking at itself in a mirror?', o: ['A goldfish', 'A frog', 'A dolphin'], a: 2,
    reveal: 'A *dolphin*! Put a mirror in front of *it*, and it knows: "That\'s *me*!"' },
  learn: { kind: 'rule', title: 'Before or after the verb', form: ['I → me', 'you → you', 'he → him', 'she → her', 'it → it', 'we → us', 'they → them'],
    lines: ['Before the verb: *I* like pizza. *She* plays tennis. *They* are here.',
      'After the verb: Mum loves *me*. I can see *her*. Call *them*!',
      'After words like with, for, to, at: Come *with us*! This is *for him*. Look *at it*!'],
    ex: ['*She* calls *me* every day.', 'Can you help *us*?'],
    he: 'בעברית "אני" ו"אותי" הן מילים שונות, וכך גם באנגלית: I לפני הפועל, me אחריו. I love her, she loves me. גם "איתי" = with me, "בשבילו" = for him.' },
  steps: [
    { name: 'Which word?', items: [
      { k: 'mc', q: 'This is my brother. I play with ___ every day.', o: ['him', 'he', 'his'], a: 0, why: 'after with → him.' },
      { k: 'mc', q: 'Where are my glasses? I can\'t find ___.', o: ['them', 'they', 'their'], a: 0, why: 'my glasses = they → after the verb: them.' },
      { k: 'mc', q: '___ is my best friend.', o: ['She', 'Her', 'Hers'], a: 0, why: 'before the verb → She.' },
      { k: 'mc', q: 'Grandma sends ___ a card every year: one for me and one for my sister.', o: ['us', 'we', 'our'], a: 0, why: 'me and my sister = we → after the verb: us.' }
    ] },
    { name: 'Fix it', items: [
      { k: 'tf', q: '"Me like ice cream."', a: false, fix: 'I like ice cream.', why: 'before the verb → I.' },
      { k: 'type', q: 'Our teacher is great. We all like ___.', hint: '(she / her)', a: ['her'], why: 'after the verb → her.' },
      { k: 'tf', q: '"Can you help me, please?"', a: true, why: 'after help → me.' },
      { k: 'mc', q: 'I love this song. Listen to ___!', o: ['it', 'its', 'she'], a: 0, why: 'the song = it; after to → it.' }
    ] },
    { name: 'Build it', items: [
      { k: 'build', s: 'Please give the ball to me.', why: 'after to → me.' },
      { k: 'spot', s: 'Dan is my friend. I sit next to *he* in class.', fix: 'him', why: 'after to → him.' },
      { k: 'build', s: 'They always wait for us after school.', why: 'They before the verb, us after for.' }
    ] }
  ],
  use: [
    { k: 'teach', s: 'My cat loves *I*!', fix: 'me', why: 'after the verb → me: My cat loves me.' },
    { k: 'type', q: 'Yoni and Tamar are at the park. Let\'s play with ___!', hint: '(they / them)', a: ['them'], why: 'after with → them.' },
    { k: 'mc', q: 'Choose the right sentence:', o: ['He sits with us.', 'Him sits with us.', 'He sits with we.'], a: 0,
      why: 'He before the verb, us after with.' }
  ]
},
{
  id: 'a1u01', url: 'https://test-english.com/use-of-english/a1/a1-test-1/', type: 'use-of-english',
  title: 'Max the robot waiter', dinner: 'Would you like a robot at home, and what would it do?',
  hook: { q: 'In which country was the first pizza made?', o: ['The USA', 'Italy', 'Greece'], a: 1,
    reveal: 'In *Italy*, in the city of Naples! Today\'s news story is about a robot that brings pizza. (It is a made-up story!)' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a funny news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A robot works in a pizza shop. What do you think it does?', o: ['It brings pizza to the tables.', 'It eats all the pizza.', 'It drives a bus.'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'A new waiter',
        t: 'There [1] a new waiter at Pizza Joy in Tel Aviv. [2] name is Max, and he is [3] robot! Max [4] tall and silver. Every evening he [5] pizza to the tables. The children love [6]. "Max [7] speak Hebrew and English," says Gal, the owner of the shop. But Max has one problem: he [8] like cats. When a cat comes in, he runs away!',
        gaps: [
          { o: ['is', 'are', 'am'], a: 0, why: 'There is + one waiter.' },
          { o: ['His', 'He', 'Him'], a: 0, why: 'His + a noun: his name.' },
          { o: ['a', 'an', 'two'], a: 0, why: 'robot starts with a consonant sound → a robot.' },
          { o: ['is', 'are', 'has'], a: 0, why: 'Max = he → is tall.' },
          { o: ['brings', 'bring', 'bringing'], a: 0, why: 'he → brings.' },
          { o: ['him', 'he', 'his'], a: 0, why: 'after the verb love → him.' },
          { o: ['can', 'is', 'are'], a: 0, why: 'can + speak.' },
          { o: ['doesn\'t', 'don\'t', 'isn\'t'], a: 0, why: 'he → doesn\'t like.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: 'Ella ___ two brothers.', o: ['has', 'have', 'is'], a: 0, why: 'she → has.' },
      { k: 'mc', q: 'I ___ from Israel.', o: ['am', 'is', 'are'], a: 0, why: 'I → am.' },
      { k: 'tf', q: '"They is my friends."', a: false, fix: 'They are my friends.', why: 'they → are.' },
      { k: 'type', q: 'This is Noam. ___ is my cousin.', hint: '(he / him)', a: ['he'], why: 'before the verb → He.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Max brings pizza to the tables.', why: 'Max = he → brings.' }
  ]
},
{
  id: 'a1u03', url: 'https://test-english.com/use-of-english/a1/a1-english-test-3-text-multiple-choice-gaps/', type: 'use-of-english',
  title: 'The longest sandwich', dinner: 'What is your favourite sandwich?',
  hook: { q: 'The word "sandwich" comes from…', o: ['a man', 'a city in Italy', 'a song'], a: 0,
    reveal: 'A *man*: the Earl of Sandwich, in England. The story says he ate meat between two pieces of bread when he played cards. Today\'s news: a very long sandwich! (It is a made-up story!)' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a news story (it is made up!) and choose the right word for each gap.',
    predict: { q: 'A school makes a very long sandwich. How long do you think it is?', o: ['Two metres', 'Twenty metres', 'Two hundred metres'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'Sandwich Day',
        t: 'Every year in June, the students of Oak Tree School [1] a very long sandwich. Each child [2] something from home: bread, cheese, tomatoes or eggs. The sandwich is [3] ten tables in the playground. This year it is twenty metres long! Some children don\'t like tomatoes, [4] one part has only cheese. [5] long does it take? About two hours. Then all the students sit down and eat it [6]. "I [7] like tomatoes, but in this sandwich they are great!" says Dana. And the bread at the end? The school chickens [8] it!',
        gaps: [
          { o: ['make', 'makes', 'making'], a: 0, why: 'the students = they → make.' },
          { o: ['brings', 'bring', 'bringing'], a: 0, why: 'each child = he or she → brings.' },
          { o: ['on', 'in', 'at'], a: 0, why: 'on the tables = on top of them.' },
          { o: ['so', 'but', 'because'], a: 0, why: 'They don\'t like tomatoes → the result: so.' },
          { o: ['How', 'What', 'Where'], a: 0, why: 'How long = how much time.' },
          { o: ['together', 'alone', 'never'], a: 0, why: 'all the students at the same time → together.' },
          { o: ['don\'t', 'doesn\'t', 'am not'], a: 0, why: 'I → don\'t like.' },
          { o: ['eat', 'eats', 'eating'], a: 0, why: 'the chickens = they → eat.' }
        ] }
    ] },
    { name: 'Quick review', items: [
      { k: 'mc', q: '"___ do you go to school?" "At eight o\'clock."', o: ['What time', 'Where', 'Who'], a: 0, why: 'At eight o\'clock = the hour → What time.' },
      { k: 'mc', q: 'I have ___ egg in my sandwich.', o: ['an', 'a', 'two'], a: 0, why: 'egg starts with a vowel sound → an egg.' },
      { k: 'tf', q: '"My sister don\'t like cheese."', a: false, fix: 'My sister doesn\'t like cheese.', why: 'my sister = she → doesn\'t.' },
      { k: 'type', q: 'I like tomatoes, ___ I don\'t like cheese.', hint: '(and / but)', a: ['but'], why: 'two different ideas → but.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'We eat the sandwich together.', why: 'we → eat.' }
  ]
},
{
  id: 'a1u04', url: 'https://test-english.com/use-of-english/a1/a1-english-test-4-multiple-choice-questions/', type: 'use-of-english',
  title: 'Grandma on a skateboard', dinner: 'What fun thing would you like to do when you are seventy?',
  hook: { q: 'How old was the oldest person in history?', o: ['99', '122', '150'], a: 1,
    reveal: '*122* years old: Jeanne Calment from France. She is the oldest person we know of. Today\'s news is about a grandma who loves her skateboard. (It is a made-up story!)' },
  learn: { kind: 'intro', title: 'Newsroom', line: 'Read a short news story (it is made up!), choose the right words, then answer some quick questions.',
    predict: { q: 'A grandma has a skateboard. Who skates with her?', o: ['Her grandchildren', 'Her teacher', 'A dog'] } },
  steps: [
    { name: 'The story', items: [
      { k: 'gaps', title: 'Skater Grandma',
        t: 'Rina [1] seventy-two years old, and she has a skateboard! Every morning she [2] to the park near her house. Her grandchildren, Ido and Mia, often skate with [3]. "Grandma is [4] fast!" says Ido. Rina [5] wears a helmet. "Safety first!" she says. Her favourite colour is pink, so she has a pink helmet and pink [6].',
        gaps: [
          { o: ['is', 'has', 'are'], a: 0, why: 'age: be + years old → Rina is seventy-two.' },
          { o: ['goes', 'go', 'going'], a: 0, why: 'she → goes.' },
          { o: ['her', 'she', 'hers'], a: 0, why: 'after with → her.' },
          { o: ['very', 'much', 'a lot'], a: 0, why: 'very + adjective: very fast.' },
          { o: ['always', 'never', 'doesn\'t'], a: 0, why: '"Safety first!" → she always wears it.' },
          { o: ['shoes', 'shoe', 'shoeses'], a: 0, why: 'two shoes → shoes.' }
        ] }
    ] },
    { name: 'Quick questions', items: [
      { k: 'mc', q: '___ you like skateboarding?', o: ['Do', 'Does', 'Are'], a: 0, why: 'you → Do you like…?' },
      { k: 'mc', q: 'My grandparents ___ in Haifa.', o: ['live', 'lives', 'living'], a: 0, why: 'my grandparents = they → live.' },
      { k: 'mc', q: 'I have ___ umbrella in my bag.', o: ['an', 'a', 'two'], a: 0, why: 'umbrella starts with a vowel sound → an.' },
      { k: 'mc', q: 'Look at ___ shoes over there!', o: ['those', 'this', 'that'], a: 0, why: 'many, far → those.' },
      { k: 'mc', q: 'Ido ___ late for school.', o: ['is never', 'never is', 'never'], a: 0, why: 'after is: is never.' },
      { k: 'mc', q: 'Can you help ___, please?', o: ['me', 'I', 'my'], a: 0, why: 'after the verb help → me.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'My grandma has a pink skateboard.', why: 'my grandma = she → has.' }
  ]
},
{
  id: 'a1v03', url: 'https://test-english.com/vocabulary/a1/family-and-relatives-a1-english-vocabulary/', type: 'vocabulary',
  title: 'My family', dinner: 'How many cousins do you have, and who is the oldest?',
  hook: { q: 'Which animal mother carries her baby in a pocket?', o: ['The kangaroo', 'The cat', 'The bear'], a: 0,
    reveal: 'The *kangaroo*! A baby kangaroo lives in its *mother*\'s pocket for about six months. Today: family words.' },
  learn: { kind: 'words', title: 'People in your family', words: [
    { w: 'parents', d: 'your mother and your father', ex: 'My *parents* are at work.' },
    { w: 'grandmother', d: 'your mum\'s or your dad\'s mother', ex: 'My *grandmother* makes great cakes.', pic: 'cake' },
    { w: 'grandfather', d: 'your mum\'s or your dad\'s father', ex: 'My *grandfather* is seventy.' },
    { w: 'aunt', d: 'your mum\'s or your dad\'s sister', ex: 'My *aunt* lives in Haifa.' },
    { w: 'uncle', d: 'your mum\'s or your dad\'s brother', ex: 'My *uncle* has a big dog.', pic: 'dog' },
    { w: 'cousin', d: 'the child of your aunt or uncle', ex: 'My *cousin* Yoav is ten.' },
    { w: 'son', d: 'a boy child of a mother or a father', ex: 'They have one *son*, Tom.' },
    { w: 'daughter', d: 'a girl child of a mother or a father', ex: 'Their *daughter* is a baby.' }
  ] },
  steps: [
    { name: 'Who is it?', items: [
      { k: 'mc', q: 'Your mum\'s sister is your ___.', o: ['aunt', 'uncle', 'cousin'], a: 0, why: 'your mum\'s or dad\'s sister → aunt.' },
      { k: 'mc', q: 'Your dad\'s father is your ___.', o: ['grandfather', 'uncle', 'son'], a: 0, why: 'your dad\'s father → grandfather.' },
      { k: 'mc', q: 'Your uncle\'s son is your ___.', o: ['cousin', 'uncle', 'father'], a: 0, why: 'the child of your uncle → cousin.' },
      { k: 'mc', q: 'Your mother and your father are your ___.', o: ['parents', 'cousins', 'aunts'], a: 0, why: 'mother + father = parents.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Boy and man, or girl and woman?', g: ['a boy or a man', 'a girl or a woman'],
        w: [['uncle', 0], ['son', 0], ['grandfather', 0], ['aunt', 1], ['daughter', 1], ['grandmother', 1]],
        why: 'boy or man: uncle, son, grandfather · girl or woman: aunt, daughter, grandmother' },
      { k: 'hear', say: 'Shira\'s cousin Yoav is ten years old.', q: 'Who is Yoav?', o: ['Shira\'s cousin', 'Shira\'s uncle', 'Shira\'s son'], a: 0, why: 'Shira\'s cousin Yoav is ten.' },
      { k: 'spell', w: 'aunt', clue: 'Your dad\'s sister is your ___.', why: 'aunt: a-u-n-t.' },
      { k: 'mc', q: 'Mr and Mrs Levi have two children: a boy and a girl. The girl is their ___.', o: ['daughter', 'son', 'uncle'], a: 0, why: 'a girl child → daughter.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'My family',
        t: 'My name is Shira. My [1] are Dan and Ruth. I have a little brother, so my parents have one daughter and one [2]. My mum\'s brother is my [3] Avi. His children are my [4], and we play together every Saturday.',
        gaps: [
          { o: ['parents', 'cousins', 'uncles'], a: 0, why: 'mother and father → parents.' },
          { o: ['son', 'daughter', 'aunt'], a: 0, why: 'a boy child → son.' },
          { o: ['uncle', 'aunt', 'grandmother'], a: 0, why: 'my mum\'s brother → uncle.' },
          { o: ['cousins', 'parents', 'grandparents'], a: 0, why: 'the children of my uncle → cousins.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'My mum\'s brother is my *aunt*.', fix: 'uncle', why: 'A man → uncle. A woman → aunt.',
      he: 'דוד = uncle, דודה = aunt. בן דוד וגם בת דודה = cousin, אותה מילה לבן ולבת.' },
    { k: 'type', q: 'My grandmother is my mum\'s ___.', a: ['mother', 'mum', 'mom'], why: 'Your grandmother is your mum\'s or dad\'s mother.' }
  ]
},
{
  id: 'a1v04', url: 'https://test-english.com/vocabulary/a1/opposite-adjectives-for-describing-people-and-things-a1-english-vocabulary/', type: 'vocabulary',
  title: 'Opposites', dinner: 'Who is the tallest person in our family?',
  hook: { q: 'Which of these animals is the slowest?', o: ['A snail', 'A rabbit', 'A horse'], a: 0,
    reveal: 'A *snail*! It is very *slow*. A rabbit is *fast*. Slow and fast are opposites, and today you learn more of them.' },
  learn: { kind: 'words', title: 'Words and their opposites', words: [
    { w: 'tall', d: 'big from the bottom to the top', ex: 'My brother is very *tall*.', pic: 'tree' },
    { w: 'short', d: 'not tall', ex: 'My little sister is *short*.' },
    { w: 'old', d: 'not young, or not new', ex: 'My grandpa is *old*. My bike is *old* too.' },
    { w: 'young', d: 'not old: a baby is very young', ex: 'The puppy is very *young*.' },
    { w: 'fast', d: 'it moves very quickly', ex: 'A cheetah is very *fast*.' },
    { w: 'slow', d: 'not fast', ex: 'The snail is *slow*.', pic: 'snail' },
    { w: 'heavy', d: 'not easy to carry', ex: 'An elephant is very *heavy*.', pic: 'elephant' },
    { w: 'light', d: 'not heavy, easy to carry', ex: 'My new bag is *light*.', pic: 'bag' }
  ] },
  steps: [
    { name: 'Opposites', items: [
      { k: 'mc', q: 'The opposite of "tall":', o: ['short', 'young', 'heavy'], a: 0, why: 'tall ↔ short.' },
      { k: 'mc', pic: 'elephant', q: 'An elephant is very ___.', o: ['heavy', 'light', 'young'], a: 0, why: 'An elephant weighs a lot → heavy.' },
      { k: 'mc', pic: 'snail', q: 'A snail is very ___.', o: ['slow', 'fast', 'tall'], a: 0, why: 'A snail moves slowly → slow.' },
      { k: 'mc', q: 'My grandpa is eighty. He is ___.', o: ['old', 'young', 'fast'], a: 0, why: 'eighty years → old.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'An elephant or a mouse?', g: ['an elephant', 'a mouse'],
        w: [['big', 0], ['heavy', 0], ['tall', 0], ['small', 1], ['light', 1], ['short', 1]],
        why: 'an elephant: big, heavy, tall · a mouse: small, light, short' },
      { k: 'hear', say: 'My new bike is very fast.', q: 'What is fast?', o: ['the new bike', 'the old car', 'the dog'], a: 0, why: 'My new bike is very fast.' },
      { k: 'spell', w: 'young', clue: 'A baby is very ___.', why: 'young: y-o-u-n-g.' },
      { k: 'mc', q: 'My phone is not old. It\'s ___.', o: ['new', 'young', 'slow'], a: 0, why: 'For things: old ↔ new.',
        he: 'old הפוך של young כשמדובר באנשים ובחיות, והפוך של new כשמדובר בדברים.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Two dogs',
        t: 'We have two dogs. Rex is big and [1]: he is forty kilos! Bobo is small and [2]: I can carry him. Rex is twelve years old, so he is [3]. Bobo is only one, so he is [4]. Bobo runs very fast, but Rex is [5].',
        gaps: [
          { o: ['heavy', 'light', 'young'], a: 0, why: 'forty kilos → heavy.' },
          { o: ['light', 'heavy', 'tall'], a: 0, why: 'I can carry him → light.' },
          { o: ['old', 'young', 'new'], a: 0, why: 'twelve, for a dog → old.' },
          { o: ['young', 'old', 'slow'], a: 0, why: 'only one → young.' },
          { o: ['slow', 'fast', 'light'], a: 0, why: 'but → the opposite of fast: slow.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'My grandmother is very *young*: she is ninety!', fix: 'old', why: 'ninety years → old.' },
    { k: 'type', q: 'This bag is not heavy. It\'s ___.', a: ['light'], why: 'heavy ↔ light.' }
  ]
},
{
  id: 'a1v05', url: 'https://test-english.com/vocabulary/a1/daily-routines-a1-english-vocabulary/', type: 'vocabulary',
  title: 'Morning to night', dinner: 'What time did you wake up today?',
  hook: { q: 'How do astronauts on the space station wash their hair?', o: ['With a special shampoo and very little water', 'In a normal shower', 'They never wash it'], a: 0,
    reveal: 'With a *special shampoo* and very little water. In space you can\'t *have a shower* like at home!' },
  learn: { kind: 'words', title: 'Your day, step by step', words: [
    { w: 'wake up', d: 'stop sleeping and open your eyes', ex: 'I *wake up* at half past six.' },
    { w: 'have a shower', d: 'wash your body under water', ex: 'I *have a shower* every evening.' },
    { w: 'get dressed', d: 'put on your clothes', ex: 'I *get dressed* in my bedroom.', pic: 'T-shirt' },
    { w: 'brush your hair', d: 'make your hair nice with a brush', ex: 'She *brushes her hair* before school.' },
    { w: 'catch the bus', d: 'get on the bus at the right time', ex: 'I *catch the bus* at half past seven.', pic: 'bus' },
    { w: 'have lunch', d: 'eat in the middle of the day', ex: 'We *have lunch* at one o\'clock.' },
    { w: 'get home', d: 'arrive at your house', ex: 'I *get home* at four.', pic: 'house' },
    { w: 'tidy your room', d: 'put your things in the right place', ex: 'Please *tidy your room*!', pic: 'bed' }
  ] },
  steps: [
    { name: 'What do you do?', items: [
      { k: 'mc', q: 'You open your eyes in the morning. You ___.', o: ['wake up', 'go to bed', 'get home'], a: 0, why: 'stop sleeping → wake up.',
        he: 'wake up = להתעורר (לפקוח עיניים). get up = לקום מהמיטה.' },
      { k: 'mc', pic: 'T-shirt', q: 'You put on your T-shirt and jeans. You ___.', o: ['get dressed', 'have a shower', 'tidy your room'], a: 0, why: 'put on your clothes → get dressed.' },
      { k: 'mc', q: 'At one o\'clock we eat at school. We ___.', o: ['have lunch', 'have breakfast', 'get dressed'], a: 0, why: 'eat in the middle of the day → have lunch.' },
      { k: 'mc', q: 'Your books and clothes are on the floor! Please ___.', o: ['tidy your room', 'wake up', 'have lunch'], a: 0, why: 'put things in the right place → tidy your room.' }
    ] },
    { name: 'Play', items: [
      { k: 'sort', q: 'Where do you usually do it?', g: ['in the bathroom', 'in the bedroom'],
        w: [['have a shower', 0], ['brush your teeth', 0], ['wash your face', 0], ['wake up', 1], ['get dressed', 1], ['tidy your room', 1]],
        why: 'bathroom: shower, teeth, face · bedroom: wake up, get dressed, tidy your room' },
      { k: 'hear', say: 'Dana catches the bus at half past seven.', q: 'When does Dana catch the bus?', o: ['at half past seven', 'at seven o\'clock', 'at half past eight'], a: 0, why: 'at half past seven = 7:30.' },
      { k: 'spell', w: 'shower', clue: 'I have a ___ every morning.', why: 'shower: s-h-o-w-e-r.' },
      { k: 'mc', q: 'In the morning I put on my clothes. I get ___.', o: ['dressed', 'shower', 'lunch'], a: 0, why: 'get dressed = put on your clothes.' }
    ] },
    { name: 'In a text', items: [
      { k: 'gaps', title: 'Noam\'s day',
        t: 'Noam [1] up at half past six. He [2] a shower and gets dressed. At half past seven he [3] the bus to school. He [4] lunch with his friends at one. He [5] home at four and does his homework.',
        gaps: [
          { o: ['wakes', 'has', 'catches'], a: 0, why: 'wake up → he wakes up.' },
          { o: ['has', 'does', 'wakes'], a: 0, why: 'have a shower → he has a shower.' },
          { o: ['catches', 'wakes', 'has'], a: 0, why: 'catch the bus → he catches the bus.' },
          { o: ['has', 'catches', 'wakes'], a: 0, why: 'have lunch → he has lunch.' },
          { o: ['gets', 'catches', 'has'], a: 0, why: 'get home → he gets home.' }
        ] }
    ] }
  ],
  use: [
    { k: 'teach', s: 'I *do* a shower every evening.', fix: 'have', why: 'We say have a shower (or take a shower), not do a shower.', he: 'אומרים have a shower (או take a shower), לא do ולא make.' },
    { k: 'type', q: 'Mum says: "Your room is a mess! Please ___ it."', a: ['tidy', 'clean'], why: 'tidy your room = put your things in the right place.' }
  ]
},
{
  id: 'a1l04', url: 'https://test-english.com/listening/a1/what-are-you-doing-a1-english-listening-test/', type: 'listening',
  title: 'What are you doing?', dinner: 'What is your best friend doing right now, do you think?',
  hook: { q: 'Who made the first phone call, in 1876?', o: ['Alexander Graham Bell', 'Thomas Edison', 'Albert Einstein'], a: 0,
    reveal: '*Alexander Graham Bell*! He called his helper, Mr Watson. Today friends call and ask: What *are* you *doing*?' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'right now', d: 'at this moment' },
    { w: 'bake', d: 'make a cake or bread in an oven' },
    { w: 'come over', d: 'come to my house' }
  ], predict: { q: 'Gal calls his friend Yael on Saturday morning. Why do you think he calls?', o: ['To ask her to come over', 'To say goodbye', 'To sell her his bike'] } },
  show: { cast: 'Gal calls his friend Yael on Saturday morning.', names: { G: 'Gal', Y: 'Yael' }, voices: { G: 'am_michael', Y: 'af_bella' },
    parts: [
      { lines: [
        ['G', 'Hi Yael, it\'s Gal. What are you doing?'],
        ['Y', 'Hi Gal! I\'m in the kitchen. I\'m baking a cake with my dad.'],
        ['G', 'Cool! What kind of cake?'],
        ['Y', 'A chocolate cake. It\'s my grandma\'s birthday today.']
      ], items: [
        { k: 'mc', q: 'Where is Yael?', o: ['in the kitchen', 'in the garden', 'at the park'], a: 0, why: '"I\'m in the kitchen."' },
        { k: 'mc', q: 'Who is she baking with?', o: ['her dad', 'her mum', 'her grandma'], a: 0, why: '"I\'m baking a cake with my dad."' }
      ] },
      { lines: [
        ['G', 'And what is your brother doing?'],
        ['Y', 'Omer? He\'s sleeping! He always sleeps late on Saturdays.'],
        ['G', 'Ha! My sister is playing the piano right now. It\'s very loud!']
      ], items: [
        { k: 'mc', q: 'What is Omer doing?', o: ['sleeping', 'playing the piano', 'eating'], a: 0, why: '"He\'s sleeping!"' },
        { k: 'tf', q: 'Gal\'s sister is playing the guitar.', a: false, fix: 'She is playing the piano.', why: '"My sister is playing the piano right now."' }
      ] },
      { lines: [
        ['Y', 'And what are you doing, Gal?'],
        ['G', 'Nothing! I\'m sitting on the sofa and I\'m watching TV. Can you come over later?'],
        ['Y', 'Yes! After the party, at five o\'clock. I can bring some cake!'],
        ['G', 'Great! See you at five.']
      ], items: [
        { k: 'mc', q: 'What is Gal doing?', o: ['watching TV on the sofa', 'playing football', 'doing his homework'], a: 0, why: '"I\'m sitting on the sofa and I\'m watching TV."' },
        { k: 'type', q: 'Yael can come over at ___ o\'clock.', a: ['five', '5'], why: '"After the party, at five o\'clock."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'mc', clip: 0, q: 'Yael is baking a ___ cake.', o: ['chocolate', 'lemon', 'banana'], a: 0, why: '"A chocolate cake."' },
      { k: 'hear', say: 'They are playing football in the park.', q: 'What are they doing?', o: ['playing football', 'watching football', 'playing tennis'], a: 0, why: 'They are playing football.' },
      { k: 'sort', q: 'Right now, or usually?', g: ['right now', 'usually'],
        w: [['I\'m baking a cake.', 0], ['He\'s sleeping.', 0], ['She\'s playing the piano.', 0], ['I walk to school.', 1], ['We play football on Fridays.', 1], ['He sleeps late on Saturdays.', 1]],
        why: 'am / is / are + -ing → right now · no -ing → usually',
        he: 'am / is / are + ing = עכשיו, ברגע זה. בלי ing = בדרך כלל, הרגל.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'What are you doing right now?', why: 'What + are + you + doing?' }
  ]
},
{
  id: 'a1l05', url: 'https://test-english.com/listening/a1/tell-me-about-your-life-a1-english-listening-test/', type: 'listening',
  title: 'Life on a kibbutz', dinner: 'What is your favourite part of the day, and why?',
  hook: { q: 'How many litres of milk can one cow give in a day?', o: ['About 2', 'About 30', 'About 300'], a: 1,
    reveal: 'About *30 litres*! That\'s a lot of milk. Today you meet a girl who *gets up* early to help with the cows.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'kibbutz', d: 'a village in Israel where people live and work together' },
    { w: 'early', d: 'before the usual time' },
    { w: 'ride', d: 'sit on a horse or a bike and make it go' }
  ], predict: { q: 'Maya lives on a farm. Do you think she likes her life?', o: ['Yes, she loves it', 'No, not at all', 'She doesn\'t say'] } },
  show: { cast: 'Ben from the school radio asks Maya about her life.', names: { B: 'Ben', M: 'Maya' }, voices: { B: 'am_eric', M: 'af_nova' },
    parts: [
      { lines: [
        ['B', 'Hi Maya! Tell me about your life. Where do you live?'],
        ['M', 'I live on a kibbutz in the north of Israel, with my parents and my two brothers.'],
        ['B', 'Do you have animals?'],
        ['M', 'Yes, we have a lot of cows. And I have a horse. Her name is Stella.']
      ], items: [
        { k: 'mc', q: 'Where does Maya live?', o: ['on a kibbutz in the north', 'in a big city', 'on a kibbutz in the south'], a: 0, why: '"I live on a kibbutz in the north of Israel."' },
        { k: 'mc', q: 'Who is Stella?', o: ['Maya\'s horse', 'Maya\'s cow', 'Maya\'s sister'], a: 0, why: '"I have a horse. Her name is Stella."' }
      ] },
      { lines: [
        ['B', 'What do you do in the morning?'],
        ['M', 'I get up at six. I help my dad with the cows, and then I have breakfast.'],
        ['B', 'Six! That\'s early. How do you go to school?'],
        ['M', 'By bike. It takes ten minutes.']
      ], items: [
        { k: 'type', q: 'Maya gets up at ___ o\'clock.', a: ['six', '6'], why: '"I get up at six."' },
        { k: 'mc', q: 'How does she go to school?', o: ['by bike', 'by bus', 'by car'], a: 0, why: '"By bike."' }
      ] },
      { lines: [
        ['B', 'And what do you do after school?'],
        ['M', 'On Mondays and Wednesdays I play basketball. At weekends I ride Stella.'],
        ['B', 'Do you like your life?'],
        ['M', 'Yes, I love it! But I don\'t like the smell of the cows!']
      ], items: [
        { k: 'mc', q: 'When does Maya play basketball?', o: ['on Mondays and Wednesdays', 'every day', 'at weekends'], a: 0, why: '"On Mondays and Wednesdays I play basketball."' },
        { k: 'tf', q: 'Maya doesn\'t like the smell of the cows.', a: true, why: '"I don\'t like the smell of the cows!"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'mc', clip: 1, q: 'After she helps with the cows, Maya ___.', o: ['has breakfast', 'goes to bed', 'plays basketball'], a: 0, why: '"and then I have breakfast."' },
      { k: 'hear', say: 'Omer doesn\'t like vegetables.', q: 'What doesn\'t Omer like?', o: ['vegetables', 'cows', 'basketball'], a: 0, why: 'Omer doesn\'t like vegetables.' },
      { k: 'type', q: 'Maya ___ basketball on Mondays.', hint: '(play)', a: ['plays'], why: 'she → plays.',
        he: 'בהווה, אחרי he, she, it מוסיפים s לפועל: she plays, he lives.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'What do you do after school?', why: 'What + do + you + do?' }
  ]
},
{
  id: 'a1l06', url: 'https://test-english.com/listening/a1/what-are-you-going-to-do-a1-english-listening-test/', type: 'listening',
  title: 'Holiday plans', dinner: 'What are you going to do this weekend?',
  hook: { q: 'Where is the lowest place on land in the world?', o: ['The Dead Sea', 'The Sahara', 'Mount Everest'], a: 0,
    reveal: 'The *Dead Sea*! It is about 430 metres below the level of the sea. And today, Ido *is going to* visit it.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'float', d: 'stay on top of the water' },
    { w: 'camp', d: 'sleep in a tent outside' },
    { w: 'tent', d: 'a small "house" you can carry and sleep in' }
  ], predict: { q: 'Two friends talk about the holiday. What do you think they are going to do?', o: ['Travel and have fun', 'Go to school', 'Stay in bed all day'] } },
  show: { cast: 'Ido and Noa talk about their holiday plans.', names: { I: 'Ido', N: 'Noa' }, voices: { I: 'am_liam', N: 'af_sky' },
    parts: [
      { lines: [
        ['N', 'Hi Ido! The holiday starts next week. What are you going to do?'],
        ['I', 'We\'re going to visit the Dead Sea with my family.'],
        ['N', 'Cool! Are you going to swim?'],
        ['I', 'Not really. You don\'t swim in the Dead Sea, you float! I\'m going to float and read a book.']
      ], items: [
        { k: 'mc', q: 'Where is Ido going to go?', o: ['to the Dead Sea', 'to Tel Aviv', 'to London'], a: 0, why: '"We\'re going to visit the Dead Sea."' },
        { k: 'mc', q: 'What is he going to do in the water?', o: ['float and read a book', 'swim with fish', 'play football'], a: 0, why: '"I\'m going to float and read a book."' }
      ] },
      { lines: [
        ['I', 'What about you, Noa?'],
        ['N', 'I\'m going to camp in the Galilee with my cousins. We\'re going to sleep in a tent for three nights.'],
        ['I', 'Three nights in a tent? Wow!']
      ], items: [
        { k: 'mc', q: 'Who is Noa going to camp with?', o: ['her cousins', 'her class', 'her grandparents'], a: 0, why: '"with my cousins"' },
        { k: 'type', q: 'They are going to sleep in a tent for ___ nights.', a: ['three', '3'], why: '"for three nights"' }
      ] },
      { lines: [
        ['I', 'Are you going to take your phone?'],
        ['N', 'Yes, but I\'m not going to play games. I\'m going to take photos of the stars.'],
        ['I', 'Great idea! Send me some photos!']
      ], items: [
        { k: 'tf', q: 'Noa is going to play games on her phone.', a: false, fix: 'She is not going to play games. She is going to take photos.', why: '"I\'m not going to play games."' },
        { k: 'mc', q: 'What is Noa going to take photos of?', o: ['the stars', 'the sea', 'her cousins'], a: 0, why: '"I\'m going to take photos of the stars."' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'mc', clip: 1, q: 'Noa is going to camp in ___.', o: ['the Galilee', 'the Negev', 'Eilat'], a: 0, why: '"I\'m going to camp in the Galilee."' },
      { k: 'hear', say: 'Noa is going to visit her grandma tomorrow.', q: 'When is Noa going to visit her grandma?', o: ['tomorrow', 'today', 'next year'], a: 0, why: 'tomorrow.' },
      { k: 'type', q: 'We ___ going to watch a film tonight.', hint: '(am / is / are)', a: ['are'], why: 'we → are going to.',
        he: 'going to = הולך ל... (תכנית לעתיד). חייבים am / is / are לפני: I am going to, we are going to.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'What are you going to do tomorrow?', why: 'What + are + you + going to + do?' }
  ]
},
{
  id: 'a1l07', url: 'https://test-english.com/listening/a1/comparing-things-and-people-a1-english-listening-test/', type: 'listening',
  title: 'Which dog?', dinner: 'Which is better, a cat or a dog, and why?',
  hook: { q: 'Which animal is faster?', o: ['A cheetah', 'A horse', 'They are the same'], a: 0,
    reveal: 'A *cheetah*! It can run at about 100 kilometres an hour. It is much *faster than* a horse.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'than', d: 'we use it to compare: bigger than, faster than' },
    { w: 'quiet', d: 'not loud, not noisy' },
    { w: 'bark', d: 'the sound a dog makes: woof!' }
  ], predict: { q: 'Tamar and her dad want a dog. Which dog do you think they are going to take?', o: ['The small one', 'The big one', 'No dog'] } },
  show: { cast: 'Tamar and her dad are at an animal shelter. They want a dog.', names: { T: 'Tamar', D: 'Dad' }, voices: { T: 'af_nicole', D: 'bm_george' },
    parts: [
      { lines: [
        ['D', 'Look, Tamar. There are two dogs here: Max and Bamba.'],
        ['T', 'Max is bigger than Bamba. He\'s really big!'],
        ['D', 'Yes, and he\'s older. Max is six, and Bamba is only one.']
      ], items: [
        { k: 'mc', q: 'Which dog is bigger?', o: ['Max', 'Bamba', 'They are the same'], a: 0, why: '"Max is bigger than Bamba."' },
        { k: 'mc', q: 'How old is Bamba?', o: ['one', 'six', 'two'], a: 0, why: '"Bamba is only one."' }
      ] },
      { lines: [
        ['T', 'But Bamba is faster than Max. Look at her run!'],
        ['D', 'Yes, but Max is quieter. Bamba barks a lot.'],
        ['T', 'That\'s true. Max just sits and looks at us.']
      ], items: [
        { k: 'mc', q: 'Which dog is faster?', o: ['Bamba', 'Max', 'They are the same'], a: 0, why: '"Bamba is faster than Max."' },
        { k: 'tf', q: 'Bamba is quieter than Max.', a: false, fix: 'Max is quieter than Bamba.', why: '"Max is quieter. Bamba barks a lot."' }
      ] },
      { lines: [
        ['D', 'Our flat is small. I think a smaller dog is better for us.'],
        ['T', 'You\'re right. And Bamba is funnier! Let\'s take Bamba!'],
        ['D', 'OK! Bamba, you\'re coming home with us!']
      ], items: [
        { k: 'mc', q: 'Why does Dad want a smaller dog?', o: ['Their flat is small.', 'Tamar is afraid of big dogs.', 'Big dogs are quieter.'], a: 0, why: '"Our flat is small."' },
        { k: 'mc', q: 'Which dog are they going to take home?', o: ['Bamba', 'Max', 'both dogs'], a: 0, why: '"Bamba, you\'re coming home with us!"' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'mc', clip: 0, q: 'Max is ___ than Bamba.', o: ['older', 'younger', 'smaller'], a: 0, why: 'Max is six, Bamba is one → Max is older.' },
      { k: 'hear', say: 'My cat is bigger than my dog.', q: 'Which animal is bigger?', o: ['the cat', 'the dog', 'They are the same.'], a: 0, why: 'My cat is bigger than my dog.' },
      { k: 'type', q: 'A horse is ___ than a cat.', hint: '(big)', a: ['bigger'], why: 'big → bigger (two g\'s).',
        he: 'לשם תואר קצר מוסיפים er ואחריו than: bigger than = גדול יותר מ... לא אומרים more big.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Bamba is smaller than Max.', why: 'small → smaller + than.' }
  ]
},
{
  id: 'a1l08', url: 'https://test-english.com/listening/a1/describing-rooms-there-is-are-prepositions-of-place-a1-english-listening-test/', type: 'listening',
  title: 'My new room', dinner: 'What is there on the wall in your room?',
  hook: { q: 'In Japan, many people sleep on a futon. What is a futon?', o: ['A bed you put on the floor', 'A big chair', 'A kind of food'], a: 0,
    reveal: 'A *bed on the floor*! In the morning people put it *in* a cupboard, so *there is* more space in the room.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'shelf', d: 'a board on the wall for books (two shelves)' },
    { w: 'between', d: 'in the middle of two things' },
    { w: 'in front of', d: 'the opposite of behind' }
  ], predict: { q: 'Ella shows her grandma her new room. What do you think is in it?', o: ['A bed and a desk', 'A car', 'A swimming pool'] } },
  show: { cast: 'Ella shows Grandma her new room on a video call.', names: { E: 'Ella', G: 'Grandma' }, voices: { E: 'af_jessica', G: 'bf_alice' },
    parts: [
      { lines: [
        ['G', 'Hello, Ella! Show me your new room!'],
        ['E', 'OK, Grandma! Look. There\'s a big bed next to the window.'],
        ['G', 'It\'s lovely. And what\'s that on the bed?'],
        ['E', 'That\'s my teddy bear, Bruno. And look, there are three books under the bed!']
      ], items: [
        { k: 'mc', q: 'Where is the bed?', o: ['next to the window', 'next to the door', 'under the window'], a: 0, why: '"There\'s a big bed next to the window."' },
        { k: 'mc', q: 'What is under the bed?', o: ['three books', 'a teddy bear', 'a cat'], a: 0, why: '"there are three books under the bed!"' }
      ] },
      { lines: [
        ['G', 'Is there a desk?'],
        ['E', 'Yes, there is. It\'s between the bed and the door. There\'s a lamp and a computer on it.'],
        ['G', 'And where do you put your things?'],
        ['E', 'On the shelves. There are two shelves above the desk.']
      ], items: [
        { k: 'mc', q: 'Where is the desk?', o: ['between the bed and the door', 'next to the window', 'in front of the bed'], a: 0, why: '"It\'s between the bed and the door."' },
        { k: 'type', q: 'There are ___ shelves above the desk.', a: ['two', '2'], why: '"There are two shelves above the desk."' }
      ] },
      { lines: [
        ['G', 'Is there a carpet?'],
        ['E', 'Yes, a green one, in front of the desk. And my cat Mitzi is sleeping on it right now!'],
        ['G', 'Ha! Your room is beautiful, Ella.']
      ], items: [
        { k: 'tf', q: 'There is a green carpet in front of the desk.', a: true, why: '"a green one, in front of the desk"' },
        { k: 'mc', q: 'Where is Mitzi now?', o: ['on the carpet', 'on the bed', 'under the desk'], a: 0, why: '"my cat Mitzi is sleeping on it" = on the carpet.' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'mc', clip: 1, q: 'There\'s a lamp and a ___ on the desk.', o: ['computer', 'cat', 'phone'], a: 0, why: '"There\'s a lamp and a computer on it."' },
      { k: 'hear', say: 'There are two chairs in the kitchen.', q: 'How many chairs are there?', o: ['two', 'three', 'one'], a: 0, why: 'There are two chairs.' },
      { k: 'type', q: 'There ___ a lamp on my desk.', hint: '(is / are)', a: ['is'], why: 'one lamp → there is.',
        he: 'יש = there is (לדבר אחד) או there are (לכמה דברים). לא אומרים "it has" כדי לומר שיש משהו בחדר.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'There is a lamp on the desk.', why: 'There is + a lamp + on the desk.' }
  ]
},
{
  id: 'a1l09', url: 'https://test-english.com/listening/a1/countries-nationalities-and-languages-a1-english-listening-test/', type: 'listening',
  title: 'International camp', dinner: 'Which country would you like to visit, and why?',
  hook: { q: 'Which language do most people in Brazil speak?', o: ['Portuguese', 'Spanish', 'English'], a: 0,
    reveal: '*Portuguese*! Brazil is in South America, and most people there speak *Portuguese*, not Spanish.' },
  learn: { kind: 'keys', title: 'Key words before you listen', words: [
    { w: 'country', d: 'Israel, Brazil, Japan…' },
    { w: 'nationality', d: 'Israeli, Brazilian, Japanese…' },
    { w: 'language', d: 'Hebrew, English, Portuguese…' }
  ], predict: { q: 'Kids from four countries meet at a camp. What language do you think they speak together?', o: ['English', 'Hebrew', 'Japanese'] } },
  show: { cast: 'The first day at a camp for kids from many countries.', names: { L: 'Leader', O: 'Leo', H: 'Hana', Y: 'Yonatan', E: 'Emily' },
    voices: { L: 'bf_emma', O: 'am_echo', H: 'af_river', Y: 'am_onyx', E: 'af_sarah' },
    parts: [
      { lines: [
        ['L', 'Welcome to International Camp! Please say your name and where you\'re from.'],
        ['O', 'Hi! I\'m Leo. I\'m from Brazil, from Rio. I speak Portuguese and a little English.'],
        ['H', 'Hello, I\'m Hana. I\'m Japanese. I live in Tokyo.']
      ], items: [
        { k: 'mc', q: 'Where is Leo from?', o: ['Brazil', 'Portugal', 'Spain'], a: 0, why: '"I\'m from Brazil, from Rio."' },
        { k: 'mc', q: 'What nationality is Hana?', o: ['Japanese', 'Chinese', 'Brazilian'], a: 0, why: '"I\'m Japanese."' }
      ] },
      { lines: [
        ['Y', 'Hi, I\'m Yonatan. I\'m from Israel. I speak Hebrew and English.'],
        ['L', 'Thank you, Yonatan. And you?'],
        ['E', 'Hi! My name\'s Emily. I\'m from Canada, and I speak English and French.']
      ], items: [
        { k: 'mc', q: 'What languages does Emily speak?', o: ['English and French', 'English and Spanish', 'only English'], a: 0, why: '"I speak English and French."' },
        { k: 'tf', q: 'Yonatan speaks Hebrew and Arabic.', a: false, fix: 'He speaks Hebrew and English.', why: '"I speak Hebrew and English."' }
      ] },
      { lines: [
        ['L', 'Great! So, what language are we going to speak at camp?'],
        ['H', 'English! Everyone speaks a little English.'],
        ['O', 'And I can teach you some Portuguese words. "Obrigado" means "thank you"!']
      ], items: [
        { k: 'mc', q: 'What language are they going to speak at camp?', o: ['English', 'Portuguese', 'Japanese'], a: 0, why: '"English! Everyone speaks a little English."' },
        { k: 'type', q: 'In Portuguese, "obrigado" means "___".', a: ['thank you', 'thanks'], why: '"Obrigado" means "thank you"!' }
      ] }
    ] },
  steps: [
    { name: 'Listen again', items: [
      { k: 'mc', clip: 0, q: 'Hana lives in ___.', o: ['Tokyo', 'Rio', 'Toronto'], a: 0, why: '"I live in Tokyo."' },
      { k: 'hear', say: 'She is from Italy. She is Italian.', q: 'What nationality is she?', o: ['Italian', 'Spanish', 'French'], a: 0, why: 'from Italy → Italian.' },
      { k: 'sort', q: 'A country or a nationality?', g: ['country', 'nationality'],
        w: [['Brazil', 0], ['Japan', 0], ['Canada', 0], ['Israeli', 1], ['Brazilian', 1], ['Canadian', 1]],
        why: 'countries: Brazil, Japan, Canada · nationalities: Israeli, Brazilian, Canadian',
        he: 'באנגלית מדינות, לאומים ושפות נכתבים תמיד באות גדולה: Israel, Israeli, Hebrew.' }
    ] }
  ],
  use: [
    { k: 'build', s: 'Where are you from?', why: 'Where + are + you + from?' }
  ]
},
{
  id: 'a1r02', url: 'https://test-english.com/reading/a1/about-my-family/', type: 'reading',
  title: 'About my family', dinner: 'Who in our family is the funniest, and why?',
  hook: { q: 'Which hair colour is the rarest in the world?', o: ['Red', 'Black', 'Brown'], a: 0,
    reveal: '*Red*! Only about 1 or 2 people in 100 have red hair. Now read about a family and how they look.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'Michal writes about her family for a school project. Read and meet them!',
    predict: { q: 'Michal says her dad is funny. What do you think he does?', o: ['He tells jokes', 'He is always angry', 'He never talks'] } },
  story: { title: 'My family', chunks: [
    { text: 'Hi! I\'m Michal, and I\'m twelve. This is my family. My dad\'s name is Ron. He is tall, and he has short black hair and a beard. He wears glasses. He is very funny: he tells jokes at dinner every evening.',
      items: [
        { k: 'mc', q: 'What does Ron look like?', o: ['tall, with a beard', 'short, with long hair', 'tall, with blond hair'], a: 0, why: '"He is tall, and he has short black hair and a beard."' },
        { k: 'tf', q: 'Ron wears glasses.', a: true, why: '"He wears glasses."' },
        { k: 'find', q: 'Find a word for the hair on a man\'s face.', a: 'beard', why: 'a beard = hair on a man\'s face.' }
      ] },
    { text: 'My mum, Dana, is short, like me. She has long curly hair and big brown eyes. She is a doctor, and she is very kind. She is never angry. On Fridays she makes pizza with my brother and me.',
      items: [
        { k: 'mc', q: 'What is Dana\'s job?', o: ['She is a doctor.', 'She is a teacher.', 'She is a cook.'], a: 0, why: '"She is a doctor."' },
        { k: 'tf', q: 'Michal is tall.', a: false, fix: 'She is short, like her mum.', why: '"My mum, Dana, is short, like me."' },
        { k: 'find', q: 'Find the opposite of "tall".', a: 'short', why: 'tall ↔ short.' }
      ] },
    { text: 'My brother Itay is sixteen. He is quiet, and he loves computers. He has blond hair and blue eyes, and he is taller than my dad! Our grandma Ruth lives with us. She has white hair and she is seventy, but she runs five kilometres every morning!',
      items: [
        { k: 'mc', q: 'What does Itay love?', o: ['computers', 'books', 'running'], a: 0, why: '"he loves computers."' },
        { k: 'mc', q: 'What does Grandma Ruth do every morning?', o: ['She runs five kilometres.', 'She makes pizza.', 'She goes to work.'], a: 0, why: '"she runs five kilometres every morning!"' },
        { k: 'find', q: 'Find a word that means "he doesn\'t talk a lot".', a: 'quiet', why: 'quiet = he doesn\'t talk a lot.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the best title for the text?', o: ['Meet my family', 'My new school', 'My favourite food'], a: 0, why: 'Michal tells us about the people in her family.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'Itay ___ blond hair and blue eyes.', hint: '(have / has)', a: ['has'], why: 'he → has.',
      he: 'לתיאור שיער ועיניים משתמשים ב-have / has, לא ב-is: He has blue eyes.' }
  ]
},
{
  id: 'a1r03', url: 'https://test-english.com/reading/a1/neighborhood-reading-test/', type: 'reading',
  title: 'My neighbourhood', dinner: 'What is your favourite place near our home?',
  hook: { q: 'What do we call a shop that sells bread and cakes?', o: ['A bakery', 'A library', 'A chemist'], a: 0,
    reveal: 'A *bakery*! And there is a very good bakery near Adam\'s home. Mmm!' },
  learn: { kind: 'intro', title: 'Before you read', line: 'Adam writes about the place where he lives. Read and find out what is near his home.',
    predict: { q: 'Adam lives in a small town. Does he like it?', o: ['Yes, a lot', 'No, it\'s boring', 'He doesn\'t say'] } },
  story: { title: 'My neighbourhood', chunks: [
    { text: 'My name is Adam, and I live in a small town near the sea. I live in a flat on Rose Street with my mum and my sister. My neighbourhood is quiet, but there are a lot of things to do.',
      items: [
        { k: 'mc', q: 'Where is Adam\'s town?', o: ['near the sea', 'in the mountains', 'in the desert'], a: 0, why: '"a small town near the sea"' },
        { k: 'tf', q: 'Adam lives in a house.', a: false, fix: 'He lives in a flat.', why: '"I live in a flat on Rose Street."' }
      ] },
    { text: 'There is a big park in front of our building. I play football there with my friends after school. Next to the park there is a library. I go there on Tuesdays and take books home. There is also a small bakery opposite the library. Its chocolate rolls are the best!',
      items: [
        { k: 'mc', q: 'Where is the park?', o: ['in front of his building', 'next to the sea', 'behind the bakery'], a: 0, why: '"There is a big park in front of our building."' },
        { k: 'mc', q: 'When does Adam go to the library?', o: ['on Tuesdays', 'every day', 'on Saturdays'], a: 0, why: '"I go there on Tuesdays."' },
        { k: 'find', q: 'Find a shop where you can buy bread.', a: 'bakery', why: 'A bakery sells bread and cakes.' }
      ] },
    { text: 'There isn\'t a cinema in my neighbourhood, so we go to the city by bus. The bus stop is at the end of our street. I love my neighbourhood because my friends live here and the beach is only five minutes away.',
      items: [
        { k: 'tf', q: 'There is a cinema in Adam\'s neighbourhood.', a: false, fix: 'There isn\'t a cinema in his neighbourhood.', why: '"There isn\'t a cinema in my neighbourhood."' },
        { k: 'mc', q: 'How does Adam go to the cinema?', o: ['by bus', 'by train', 'by bike'], a: 0, why: '"we go to the city by bus."' },
        { k: 'mc', q: 'Why does Adam love his neighbourhood?', o: ['His friends live there, and the beach is near.', 'It has a big cinema.', 'It is very noisy.'], a: 0, why: '"my friends live here and the beach is only five minutes away."' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the text about?', o: ['the place where Adam lives', 'Adam\'s school', 'Adam\'s holiday'], a: 0, why: 'Adam tells us what is in his neighbourhood.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'There ___ two parks near my house.', hint: '(is / are)', a: ['are'], why: 'two parks → there are.',
      he: 'there is ליחיד, there are לרבים. בעברית אומרים "יש" לשניהם.' }
  ]
},
{
  id: 'a1r04', url: 'https://test-english.com/reading/a1/the-british-ways-a1-english-reading-test/', type: 'reading',
  title: 'The British way', dinner: 'What is one thing that is different in another country you know?',
  hook: { q: 'In Britain, on which side of the road do cars drive?', o: ['On the left', 'On the right', 'In the middle'], a: 0,
    reveal: 'On the *left*! In Israel cars drive on the right, so be careful when you cross the road in London.' },
  learn: { kind: 'intro', title: 'Before you read', line: 'Yoav is from Israel. Now he lives in London with his family. He writes about life there.',
    predict: { q: 'What do you think British people often talk about?', o: ['The weather', 'Football', 'Food'] } },
  story: { title: 'Hello from London', chunks: [
    { text: 'Hi! I\'m Yoav. My family and I live in London now, and life here is different! First, cars drive on the left, so I always look right before I cross the road. Second, people stand in a line, a "queue", at the bus stop and in shops. Nobody goes to the front!',
      items: [
        { k: 'mc', q: 'Why does Yoav look right before he crosses the road?', o: ['Cars drive on the left.', 'His school is on the right.', 'The bus stop is on the right.'], a: 0, why: '"cars drive on the left, so I always look right"' },
        { k: 'tf', q: 'In London, people often go to the front of the queue.', a: false, fix: 'Nobody goes to the front.', why: '"Nobody goes to the front!"' },
        { k: 'find', q: 'Find the British word for a line of people.', a: 'queue', why: 'a queue = people standing in a line.' }
      ] },
    { text: 'British people talk about the weather a lot. "It\'s cold today, isn\'t it?" is a good way to start talking. They also say "sorry" all the time. And they love tea! Many people drink it with milk, three or four times a day.',
      items: [
        { k: 'tf', q: 'British people say "sorry" a lot.', a: true, why: '"They also say "sorry" all the time."' },
        { k: 'mc', q: 'How do many British people drink their tea?', o: ['with milk', 'with lemon', 'cold'], a: 0, why: '"Many people drink it with milk."' }
      ] },
    { text: 'At my school, all the students wear a uniform: a blue jumper, a white shirt and a tie. I don\'t love the tie, but it\'s OK. And we have dinner very early, at six o\'clock! In Israel we eat at eight. I like London, but I miss the sun!',
      items: [
        { k: 'mc', q: 'What do the students at Yoav\'s school wear?', o: ['a uniform with a tie', 'jeans and T-shirts', 'sports clothes'], a: 0, why: '"all the students wear a uniform: a blue jumper, a white shirt and a tie."' },
        { k: 'mc', q: 'When does Yoav\'s family have dinner in London?', o: ['at six o\'clock', 'at eight o\'clock', 'at seven o\'clock'], a: 0, why: '"we have dinner very early, at six o\'clock!"' },
        { k: 'find', q: 'Find the opposite of "late".', a: 'early', why: 'early ↔ late.' }
      ] }
  ] },
  steps: [
    { name: 'The big question', items: [
      { k: 'mc', q: 'What is the best title for the text?', o: ['An Israeli boy in London', 'A day at the beach', 'How to make tea'], a: 0, why: 'Yoav, from Israel, writes about life in London.' }
    ] }
  ],
  use: [
    { k: 'type', q: 'In Britain, cars drive on the ___.', a: ['left'], why: 'In Britain, cars drive on the left.',
      he: 'בבריטניה נוהגים בצד שמאל של הכביש, הפוך מישראל.' }
  ]
}
];
