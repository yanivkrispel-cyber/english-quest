// Talk with Chacho, level a1 (specs/talk.md; format and writing rules: tools/TALK-WRITING.md).
// Mission talks (t<mission id>) first, then the home scenes (s<level><nn>). Check: node test/talk-check.js
window.EQ_TALK = window.EQ_TALK || {};
// Talk to Chacho: the A1 mission talks (one per mission in docs/missions/a1.js). Format: tools/TALK-WRITING.md.
window.EQ_TALK.a1 = (window.EQ_TALK.a1 || []).concat([
  {
    id: 'ta1g01', title: 'Chacho is happy!',
    he: 'מדברים עם צ׳אצ׳ו על איך מרגישים היום, עם am, is, are',
    turns: [
      {
        c: "Hello! I am so happy today. Are you happy today?",
        he: 'ענו כן או לא, למשל: Yes, I am happy. או No, I am tired.',
        a: [
          { k: ['tired sleepy sad bored hungry sick angry', 'not no'], n: 'not_sad not_tired not_bad not_sick not_bored', r: "Oh no! I hope you are okay soon." },
          { k: ['yes happy good great fine okay ok'], n: 'not', r: "Yay! We are both happy!" },
          { k: ['no not tired sleepy sad bored hungry sick'], n: 'know not_sad not_tired not_bad not_sick not_bored', r: "Oh no! I hope you are okay soon." }
        ],
        o: "Thank you for telling me!",
        t: ["Yes, I am happy.", "No, I am tired.", "I am okay."],
        x: [["yes i am", 1], ["yes I'm happy", 1], ["no I am tired", 0], ["I am not happy", 2], ["me hungry", 2], ["banana", -1], ["I am good", 1], ["i don't know", -1], ["so so", -1], ["i am not sad", -1], ["no i am not tired", -1]]
      },
      {
        c: "I am a parrot, and parrots are noisy! Are you noisy or quiet?",
        he: 'אתם רעשנים או שקטים? למשל: I am quiet. או I am noisy, like you!',
        a: [
          { k: ['both sometimes'], r: "Both! Quiet sometimes, noisy sometimes. Ha!" },
          { k: ['noisy loud'], n: 'not', r: "Noisy, like me! We can be noisy together." },
          { k: ['quiet calm shy not'], n: 'know', r: "Quiet is nice. I am noisy for both of us!" }
        ],
        o: "Thank you! You are a great friend to talk to.",
        t: ["I am quiet.", "I am noisy, like you!", "Sometimes."],
        x: [["i am quiet", 2], ["noisy", 1], ["very loud", 1], ["i am not noisy", 2], ["sometimes", 0], ["i don't know", -1], ["i am happy", -1]]
      },
      {
        c: "Look at me. My feathers are red and blue. What colour are your clothes today?",
        he: 'איזה צבע הבגדים שלכם היום? למשל: My shirt is red. או They are black.',
        a: [
          { k: ['red blue green yellow black white pink purple orange grey gray brown'], r: "Ooh, nice colour! I love it." }
        ],
        o: "I love your style!",
        t: ["My shirt is blue.", "They are black.", "My clothes are red and white."],
        x: [["my shirt is red", 0], ["they are black and white", 0], ["blue", 0], ["I don't know", -1], ["my t-shirt is pink", 0]]
      },
      {
        c: "Last question! My favourite number is five. What is your favourite number?",
        he: 'מה המספר האהוב עליכם? למשל: My favourite number is seven. או Three!',
        a: [],
        o: "Ooh, a good number! Numbers are fun.",
        t: ["My favourite number is seven.", "Three!", "It is ten."],
        x: [["7", -1], ["my favourite number is 100", -1]]
      }
    ],
    end: "You are great at English! Bye bye, see you soon!"
  },
  {
    id: 'ta1g02', title: 'This hat or that hat?',
    he: 'בוחרים דברים בחנות של צ׳אצ׳ו עם this, that, these, those',
    turns: [
      {
        c: "Look at these pink shoes in my shop! Do you like these shoes?",
        he: "אתם אוהבים את הנעליים האלה? למשל: Yes, I like these shoes. או No, I don't like them.",
        a: [
          { k: ['no not dont never'], r: "That is okay. These shoes are not for everyone!" },
          { k: ['yes like love nice cool beautiful pretty great sure okay ok'], r: "Yay! These shoes are my favourite too." }
        ],
        o: "Ooh, these shoes are very special!",
        t: ["Yes, I like these shoes.", "No, I don't like them."],
        x: [["yes i like these shoes", 1], ["i like this shoes", 1], ["no i don't", 0], ["not really", 0], ["banana", -1], ["they are beautiful", 1]]
      },
      {
        c: "This hat is red, and that hat over there is blue. Which one do you want?",
        he: 'איזה כובע אתם רוצים? למשל: This red hat, please. או That blue hat, please.',
        a: [
          { k: ['both two all'], r: "Both hats? Ha! One for you and one for me." },
          { k: ['red this'], n: 'blue', r: "This red hat? Here you are. It looks fabulous!" },
          { k: ['blue that'], r: "That blue hat? Great choice! Here you are." }
        ],
        o: "I have lots of hats. You can come back any time!",
        t: ["This red hat, please.", "That blue hat, please.", "Both, please!"],
        x: [["this one", 1], ["the red hat please", 1], ["that blue one", 2], ["blue", 2], ["i want both", 0], ["green", -1]]
      },
      {
        c: "These cookies are for my friends. You are my friend! Do you want one?",
        he: 'רוצים עוגייה? למשל: Yes, please! או No, thank you.',
        a: [
          { k: ['no not dont'], r: "No, thank you? Okay! More cookies for me. Ha!" },
          { k: ['yes please sure okay ok want thank'], r: "Here you are! These cookies are yummy." }
        ],
        o: "Okay! These cookies are here for you any time.",
        t: ["Yes, please!", "No, thank you."],
        x: [["yes please", 1], ["no thank you", 0], ["i want two cookies", 1], ["thank you", 1], ["i love chocolate", -1]]
      },
      {
        c: "Look around you and say: This is a chair. What is near you now?",
        he: 'מה נמצא לידכם? למשל: This is my pencil. או That is a window.',
        a: [],
        o: "Ooh, nice! Now I know what is near you.",
        t: ["This is my pencil.", "That is a window.", "These are my books."],
        x: [["this is a chair", -1], ["that is my bag", -1], ["tv", -1]]
      }
    ],
    end: "You are a star with this, that, these and those! Bye bye!"
  },
  {
    id: 'ta1g03', title: 'My favourite, your favourite',
    he: 'מדברים על דברים אהובים עם my, your, his, her, its',
    turns: [
      {
        c: "My favourite food is crackers. Crunch, crunch! What is your favourite food?",
        he: 'מה האוכל האהוב עליכם? למשל: My favourite food is pizza.',
        a: [],
        o: "Yum! Thank you for telling me.",
        t: ["My favourite food is pizza.", "Pasta!", "My favourite is falafel."],
        x: [["pizza", -1], ["my favourite food is hamburger", -1], ["i like schnitzel", -1]]
      },
      {
        c: "Now think of someone in your class. What is his or her favourite game?",
        he: 'מה המשחק האהוב על מישהו מהכיתה שלכם? למשל: Her favourite game is tag. או His favourite game is football.',
        a: [
          { k: ['she her'], r: "Her favourite game? Fun! I want to play it too." },
          { k: ['he his him'], r: "His favourite game? Fun! I want to play it too." }
        ],
        o: "Ooh, fun! Games are better with friends.",
        t: ["Her favourite game is tag.", "His favourite game is football.", "She likes hide and seek."],
        x: [["her favourite game is tag", 0], ["she favourite game is minecraft", 0], ["his favourite is football", 1], ["he like basketball", 1], ["hide and seek", -1]]
      },
      {
        c: "My shop has a new hat. Its colour is gold! Do you like gold or silver?",
        he: 'מה אתם אוהבים יותר, זהב או כסף? למשל: I like gold. או Silver!',
        a: [
          { k: ['both'], r: "Both! Shiny, shiny. I love them too." },
          { k: ['gold golden yellow'], r: "Gold, like the sun! A fabulous choice." },
          { k: ['silver grey gray'], r: "Silver, like the moon! Very pretty." }
        ],
        o: "Gold and silver are both lovely. I love shiny things!",
        t: ["I like gold.", "Silver!", "I like both."],
        x: [["gold", 1], ["i like silver", 2], ["both of them", 0], ["i like pink", -1], ["golden", 1]]
      },
      {
        c: "Now guess! What is my favourite colour?",
        he: 'נחשו מה הצבע האהוב על צ׳אצ׳ו! למשל: Your favourite colour is green.',
        a: [
          { k: ['green'], r: "Yes! My favourite colour is green, like my feathers." },
          { k: ['red blue yellow black white pink purple orange brown grey gray gold silver'], r: "Good guess! I like it, but green is my favourite." }
        ],
        o: "My favourite colour is green, like my feathers!",
        t: ["Your favourite colour is green.", "Is it blue?", "Pink!"],
        x: [["green", 0], ["your favourite colour is green", 0], ["blue", 1], ["you favourite is pink", 1], ["i don't know", -1]]
      }
    ],
    end: "Fabulous talk! Your English is great, and my feathers are happy. Bye bye!"
  },
  {
    id: 'ta1v01', title: 'Chacho needs help!',
    he: 'עוזרים לצ׳אצ׳ו למצוא את הדבר הנכון: umbrella, key, bag ועוד',
    turns: [
      {
        c: "Oh no, it is raining! What do I need: an umbrella or my glasses?",
        he: 'יורד גשם! מה צ׳אצ׳ו צריך? למשל: An umbrella! או You need an umbrella.',
        a: [
          { k: ['umbrella umbrela brella'], r: "An umbrella! Of course. Now my feathers are dry." },
          { k: ['glass glasses'], r: "Glasses? Ha! An umbrella is better in the rain." }
        ],
        o: "I think an umbrella is the best thing in the rain!",
        t: ["An umbrella!", "You need an umbrella.", "Your glasses!"],
        x: [["umbrella", 0], ["you need a umbrella", 0], ["glasses", 1], ["a coat", -1], ["the umbrellas", 0]]
      },
      {
        c: "Now I am home, but I can't open my door! What do I need?",
        he: 'צ׳אצ׳ו לא מצליח לפתוח את הדלת. מה הוא צריך? למשל: You need a key.',
        a: [
          { k: ['key okay'], r: "A key! Yes, and my key is in my bag. Phew!" }
        ],
        o: "I know! I need my key. It is in my bag. Phew!",
        t: ["You need a key.", "A key!"],
        x: [["a key", 0], ["you need key", 0], ["keys", 0], ["a hammer", -1]]
      },
      {
        c: "Tell me two things. What is in your school bag today?",
        he: 'מה יש בתיק שלכם? למשל: A book and a pencil. או My phone and my keys.',
        a: [
          { k: ['book pencil pen notebook ruler eraser rubber'], r: "Great! Now you are ready for school!" },
          { k: ['phone key glasses water bottle food sandwich apple snack umbrella'], r: "Ooh, good things! Your bag is ready for the day." }
        ],
        o: "Thank you! Bags are full of surprises.",
        t: ["A book and a pencil.", "My phone and my keys.", "Books!"],
        x: [["a book and a pencil", 0], ["pencils", 0], ["my phone", 1], ["water and sandwich", 1], ["nothing", -1]]
      },
      {
        c: "Look at a clock or a phone. What time is it now?",
        he: "מה השעה עכשיו? למשל: It is five o'clock. או It is half past four.",
        a: [],
        o: "Thank you! I think it is time for a cracker.",
        t: ["It is five o'clock.", "It is half past four.", "Seven thirty."],
        x: [["it is 5 o'clock", -1], ["four", -1]]
      }
    ],
    end: "Thank you for your help! My umbrella, my key and my bag say bye bye too!"
  },
  {
    id: 'ta1v02', title: 'A day with Chacho',
    he: 'מדברים עם צ׳אצ׳ו על היום שלכם: get up, watch TV, go to bed',
    turns: [
      {
        c: "I get up at seven, with the sun. What time do you get up?",
        he: 'מתי אתם קמים בבוקר? למשל: I get up at seven. או At half past six.',
        a: [],
        o: "Ooh, okay! I get up and sing. Tweet, tweet!",
        t: ["I get up at seven.", "At half past six.", "At eight o'clock."],
        x: [["at 7", -1], ["i wake up at six thirty", -1]]
      },
      {
        c: "After school I watch TV. Do you watch TV or play football after school?",
        he: 'מה אתם עושים אחרי בית הספר? למשל: I watch TV. או I play football. או I do my homework.',
        a: [
          { k: ['homework'], r: "Homework first? Very good! Then you can have fun." },
          { k: ['tv television cartoon watch film movie'], r: "TV! Me too. I love funny cartoons." },
          { k: ['football ball play soccer basketball'], r: "Football! Run, kick, goal! Fabulous." }
        ],
        o: "That sounds like a nice afternoon!",
        t: ["I watch TV.", "I play football.", "I do my homework."],
        x: [["i watch tv", 1], ["play football", 2], ["i do homework", 0], ["i go to the park", -1], ["watching cartoons", 1]]
      },
      {
        c: "Do you brush your teeth in the morning, at night, or both?",
        he: 'מתי אתם מצחצחים שיניים? למשל: In the morning and at night.',
        a: [
          { k: ['both'], r: "Morning and night! Clean teeth, happy smile." },
          { k: ['morning', 'night evening bed'], r: "Morning and night! Clean teeth, happy smile." },
          { k: ['morning'], r: "In the morning! Fresh and clean for the day." },
          { k: ['night evening bed'], r: "At night, before bed. Good night, teeth!" }
        ],
        o: "Ha! I am a parrot. I have no teeth!",
        t: ["In the morning and at night.", "In the morning.", "At night."],
        x: [["both", 0], ["morning and night", 1], ["in the morning", 2], ["at night before bed", 3], ["i don't", -1]]
      },
      {
        c: "Parrots go to bed early. Do you go to bed early or late?",
        he: 'אתם הולכים לישון מוקדם או מאוחר? למשל: I go to bed early. או Late!',
        a: [
          { k: ['early'], r: "Early, like a parrot! Sweet dreams." },
          { k: ['late'], r: "Late! Ooh, you are a night owl." }
        ],
        o: "Good night! Sleep is very important.",
        t: ["I go to bed early.", "Late!"],
        x: [["early", 0], ["i go to bed late", 1], ["at ten", -1], ["very late", 1], ["i go to sleep early", 0]]
      }
    ],
    end: "What a busy day! Now it is bedtime for me too. Bye bye, see you tomorrow!"
  },
  {
    id: 'ta1l01', title: 'Chacho joins a club',
    he: 'צ׳אצ׳ו רוצה להצטרף למועדון, כמו Tom. עוזרים לו לבחור ושואלים אותו שאלות',
    turns: [
      {
        c: "Tom wants to join a swimming club. Do you like swimming?",
        he: "אתם אוהבים לשחות? למשל: Yes, I love swimming. או No, I don't.",
        a: [
          { k: ['no not dont'], r: "That is okay. Water and feathers are not friends!" },
          { k: ['yes love like swim swimming sure okay ok'], r: "Splash! Swimming is fun, and good for you too." }
        ],
        o: "Okay! Swimming is fun for fish and for Tom!",
        t: ["Yes, I love swimming.", "No, I don't."],
        x: [["yes i love it", 1], ["i like swim", 1], ["no", 0], ["i don't like swimming", 0], ["the sea", -1]]
      },
      {
        c: "I want to join a club too! A singing club or a dancing club?",
        he: 'לאיזה מועדון צ׳אצ׳ו יצטרף? למשל: A singing club! או A dancing club!',
        a: [
          { k: ['both'], r: "Both! Singing on Mondays, dancing on Fridays. Fabulous!" },
          { k: ['sing song music'], r: "Singing! La la la. My voice is ready." },
          { k: ['dance dancing danse'], r: "Dancing! Look at my feathers go!" }
        ],
        o: "Ooh, good idea! I can sing and dance at the same time.",
        t: ["A singing club!", "A dancing club!", "Both!"],
        x: [["singing", 1], ["the dance club", 2], ["both of them", 0], ["football club", -1], ["sing", 1]]
      },
      {
        c: "Now you are the club teacher! What question do you ask me?",
        he: 'עכשיו אתם המורים במועדון! שאלו את צ׳אצ׳ו שאלה, למשל: What is your name? או How old are you?',
        a: [
          { k: ['name'], r: "My name is Chacho. A short, happy name!" },
          { k: ['old age'], r: "I am five years old. Young and ready for the club!" },
          { k: ['live from home'], r: "I live in my shop, up in a big tree!" },
          { k: ['how', 'are'], n: 'old', r: "I am great, thank you! Ready for the club." }
        ],
        o: "Okay! Now the club knows all about me.",
        t: ["What is your name?", "How old are you?", "Where do you live?"],
        x: [["what is your name", 0], ["what your name", 0], ["how old are you", 1], ["how old you are", 1], ["where you live", 2], ["how are you", 3], ["hello", -1], ["what is your favourite colour", -1]]
      },
      {
        c: "Swimming is on Mondays. What is your favourite day of the week?",
        he: 'מה היום האהוב עליכם בשבוע? למשל: My favourite day is Friday.',
        a: [],
        o: "Ooh, good choice! Every day is fun with English.",
        t: ["My favourite day is Friday.", "Saturday!", "I like Tuesday."],
        x: [["friday", -1], ["my favourite day is sunday", -1]]
      }
    ],
    end: "Thank you! Now I am in the club. See you on Monday! Bye bye!"
  },
  {
    id: 'ta1l02', title: "Lily's new class",
    he: 'מדברים על הכיתה החדשה של Lily ועל מה שאתם אוהבים',
    turns: [
      {
        c: "Ben in Lily's class tells jokes all the time. Do you like jokes?",
        he: 'אתם אוהבים בדיחות? למשל: Yes, I love jokes! או No, not really.',
        a: [
          { k: ['no not dont'], r: "That is okay. Some people like quiet, calm days." },
          { k: ['yes love like funny sure okay ok sometimes'], r: "Me too! Jokes make my feathers shake. Ha ha!" }
        ],
        o: "Ha ha! Laughing is good for everyone.",
        t: ["Yes, I love jokes!", "No, not really."],
        x: [["yes", 1], ["i love jokes", 1], ["not really", 0], ["sometimes", 1], ["ben is funny", 1], ["my teacher", -1]]
      },
      {
        c: "Sara loves drawing. She draws cats. What do you like drawing?",
        he: "מה אתם אוהבים לצייר? למשל: I like drawing animals. או Flowers! או I don't like drawing.",
        a: [
          { k: ['no not nothing dont'], r: "That is okay! Maybe you like music or sport more." },
          { k: ['animal cat dog horse flower tree house people car star heart sun princess anime face sea'], r: "Ooh, lovely! Draw one for me one day." }
        ],
        o: "Fabulous! Drawing is a great thing to do.",
        t: ["I like drawing animals.", "Flowers!", "I don't like drawing."],
        x: [["i like drawing animals", 1], ["flowers", 1], ["i don't like drawing", 0], ["cars and people", 1], ["pokemon", -1]]
      },
      {
        c: "Lily's class has twenty-six kids. Is that a big class or a small class?",
        he: 'בכיתה של Lily יש 26 ילדים. זו כיתה גדולה או קטנה? למשל: It is a big class.',
        a: [
          { k: ['big bigger biggest large huge lot'], n: 'not', r: "Yes, big! Twenty-six is a lot of friends." },
          { k: ['small little smaller'], r: "Small? Ha! My class has three parrots." },
          { k: ['normal okay ok same medium'], r: "Normal, yes! Many classes are like that." }
        ],
        o: "Twenty-six kids! That is a lot of names to learn.",
        t: ["It is a big class.", "It is a small class.", "It is normal."],
        x: [["big", 0], ["it is big class", 0], ["small", 1], ["normal class", 2], ["my class is 30", -1]]
      },
      {
        c: "Lily's teacher is very nice. What is your favourite lesson at school?",
        he: 'מה השיעור האהוב עליכם בבית הספר? למשל: My favourite lesson is art. או English!',
        a: [
          { k: ['english'], r: "English! Of course. You are talking to me in English now!" },
          { k: ['art sport pe math maths science music history hebrew arabic computer geography drama'], r: "Ooh, great choice! That lesson sounds fun." }
        ],
        o: "Thank you for telling me! School can be fun.",
        t: ["My favourite lesson is art.", "English!", "I like sport."],
        x: [["english", 0], ["my favourite is maths", 1], ["art", 1], ["sport", 1], ["break time", -1]]
      }
    ],
    end: "Thank you! Now I know about your school too. See you later!"
  },
  {
    id: 'ta1l03', title: 'How often, Chacho?',
    he: 'מדברים כמו בסקר של Amy: כמה פעמים עושים דברים? always, sometimes, never',
    turns: [
      {
        c: "Amy plays basketball three times a week. How often do you play sport?",
        he: 'כמה פעמים אתם עושים ספורט? למשל: Every day. או Twice a week. או Never.',
        a: [
          { k: ['never no not dont'], r: "That is okay. Walking and dancing are fun too!" },
          { k: ['every_day everyday always daily'], r: "Every day? Wow, you are a sport star!" },
          { k: ['week weekend sometimes often twice once times usually month'], r: "Great! Sport is good for you, and fun too." }
        ],
        o: "Sport is fun! My sport is flying.",
        t: ["Every day!", "Three times a week.", "Never."],
        x: [["every day", 1], ["two times a week", 2], ["never", 0], ["i don't play sport", 0], ["football", -1], ["sometimes", 2], ["i always play", 1], ["two days a week", 2], ["everyday", 1]]
      },
      {
        c: "Amy reads every night before bed. How often do you read books?",
        he: 'כמה פעמים אתם קוראים ספרים? למשל: Every night! או Sometimes. או I never read books.',
        a: [
          { k: ['never no not dont'], r: "That is okay. Maybe comics or audio books are for you!" },
          { k: ['every_day everyday every_night always daily night'], r: "Fabulous! Books are full of words." },
          { k: ['week weekend sometimes often twice once times usually month holiday'], r: "Great! A good book is a good friend." }
        ],
        o: "Books are great. I love all the words in them!",
        t: ["Every night!", "Sometimes.", "I never read books."],
        x: [["every night", 1], ["sometimes", 2], ["i never read", 0], ["once a week", 2], ["harry potter", -1]]
      },
      {
        c: "Amy never drinks cola. I never eat onions! What food do you never eat?",
        he: 'איזה אוכל אתם אף פעם לא אוכלים? למשל: I never eat fish. או Mushrooms!',
        a: [],
        o: "Ha! Everybody has a food they never eat.",
        t: ["I never eat fish.", "Mushrooms!", "I never eat onions."],
        x: [["i never eat fish", -1], ["i don't eat meat", -1]]
      },
      {
        c: "Now you speak English with me. How often do you speak English?",
        he: 'כמה פעמים אתם מדברים אנגלית? למשל: Every day! או Sometimes. או At school.',
        a: [
          { k: ['never no not'], r: "Well, now you do! You are speaking English with me." },
          { k: ['every_day everyday always daily often'], r: "Every day! Fabulous. Your English is growing fast." },
          { k: ['sometimes week once twice times usually school lesson class'], r: "Great! And now you can speak with me too." }
        ],
        o: "I love speaking English with you!",
        t: ["Every day!", "Sometimes.", "At school."],
        x: [["every day", 1], ["sometimes", 2], ["never", 0], ["at school", 2], ["i like it", -1]]
      }
    ],
    end: "You are a fabulous English speaker! See you again soon. Bye bye!"
  },
  {
    id: 'ta1r01', title: 'Guess who, Chacho?',
    he: 'משחקים "מי אני?" עם צ׳אצ׳ו ומדברים על החיות מהסיפור',
    turns: [
      {
        c: "My turn! I am big and orange, with black stripes. I say grr. Who am I?",
        he: 'נחשו מי החיה! למשל: You are a tiger!',
        a: [
          { k: ['tiger taiger tigger'], r: "Yes! I am a tiger. Grr! Well done." },
          { k: ['lion cat leopard cheetah'], r: "Good guess! But with stripes, I am a tiger. Grr!" }
        ],
        o: "I am a tiger! Big and orange, with stripes. Grr!",
        t: ["You are a tiger!", "A lion?"],
        x: [["tiger", 0], ["you are tiger", 0], ["a lion", 1], ["zebra", -1], ["is it a cat", 1]]
      },
      {
        c: "The penguin lives in a very cold place. Do you like cold days or hot days?",
        he: 'אתם אוהבים ימים קרים או חמים? למשל: I like cold days. או Hot days!',
        a: [
          { k: ['both'], r: "Both! Snow in winter, sea in summer. Fabulous." },
          { k: ['cold cool winter snow rain'], n: 'not dont', r: "Cold days, like the penguin! Brr, nice and fresh." },
          { k: ['hot warm sunny summer sun'], n: 'not dont', r: "Hot days! Me too. Parrots love the sun." }
        ],
        o: "Every day is a good day for a talk!",
        t: ["I like cold days.", "Hot days!", "Both!"],
        x: [["cold", 1], ["i like hot days", 2], ["both", 0], ["i don't like cold", -1], ["summer", 2]]
      },
      {
        c: "The little orange fish lives in a glass bowl. Do you want a pet fish?",
        he: 'רוצים דג בבית? למשל: Yes, I want a fish. או No, thank you.',
        a: [
          { k: ['no not dont'], r: "That is okay! A fish is happy in the sea too." },
          { k: ['yes sure fish okay ok'], r: "A pet fish! Blub, blub. It can swim all day." }
        ],
        o: "Fish, dogs, cats: all pets are lovely!",
        t: ["Yes, I want a fish.", "No, thank you.", "I have a fish!"],
        x: [["yes", 1], ["no thank you", 0], ["i have got a fish", 1], ["i want a dog", -1], ["i want fish", 1]]
      },
      {
        c: "Your turn! Think of an animal. Is it big or small?",
        he: 'חשבו על חיה. היא גדולה או קטנה? למשל: It is big. או It is small.',
        a: [
          { k: ['big bigger biggest huge large tall'], n: 'not', r: "Big! Hmm, I think it is an elephant. Or a whale!" },
          { k: ['small little tiny short'], r: "Small! Hmm, I think it is a mouse. Or a bird!" }
        ],
        o: "Ooh, I love this game! You are a great player.",
        t: ["It is big.", "It is small."],
        x: [["big", 0], ["it is very big", 0], ["small", 1], ["little", 1], ["a dog", -1]]
      }
    ],
    end: "Who am I? I am Chacho, your parrot friend! Bye bye, see you soon!"
  },
  {
    id: 'ta1u02', title: 'Lucky the school cat',
    he: 'מדברים על Lucky, החתולה שהולכת לבית הספר',
    turns: [
      {
        c: "The children love Lucky the cat. Has your class got a pet?",
        he: "יש חיה בכיתה שלכם? למשל: Yes, we have a fish. או No, we don't.",
        a: [
          { k: ['no not dont'], r: "No pet? Then I can be your class parrot!" },
          { k: ['yes fish rabbit hamster bird turtle cat dog parrot mouse'], r: "Lucky you! A class pet is so much fun." }
        ],
        o: "Every class needs a pet, I think. A parrot!",
        t: ["Yes, we have a fish.", "No, we don't."],
        x: [["yes we have a rabbit", 1], ["no", 0], ["no we don't", 0], ["a hamster", 1], ["i don't know", 0], ["we have a computer", -1]]
      },
      {
        c: "Lucky sleeps next to the window. Where do you like to sit in class?",
        he: 'איפה אתם אוהבים לשבת בכיתה? למשל: Next to the window. או Next to my friend.',
        a: [
          { k: ['friend'], r: "Next to your friend? That is the best place!" },
          { k: ['window'], r: "Next to the window, like Lucky! Nice and sunny." },
          { k: ['front first'], r: "In the front! You can see and hear everything." },
          { k: ['back last'], r: "At the back! You can see the whole class." }
        ],
        o: "That sounds like a good place to learn!",
        t: ["Next to the window.", "Next to my friend.", "In the front."],
        x: [["next to the window", 1], ["near my friend", 0], ["in the back", 3], ["in the front", 2], ["on a chair", -1]]
      },
      {
        c: "Lucky can't read, but she likes books. What can a cat do?",
        he: 'מה חתול יכול לעשות? למשל: A cat can jump. או It can climb trees.',
        a: [],
        o: "Ha! Cats are very clever animals.",
        t: ["A cat can jump.", "It can climb trees.", "Cats can sleep all day."],
        x: [["jump", -1], ["a cat can run fast", -1]]
      },
      {
        c: "Lucky goes to school. What animal do you want to bring to school?",
        he: 'איזו חיה הייתם רוצים להביא לבית הספר? למשל: A dog! או I want to bring my cat.',
        a: [],
        o: "Ha! That is a fun school day for everyone.",
        t: ["A dog!", "I want to bring my cat.", "A horse!"],
        x: [["a monkey", -1], ["my dog", -1]]
      }
    ],
    end: "Thank you! Lucky says meow, and I say bye bye. See you soon!"
  },
  {
    id: 'ta1g04', title: 'One apple, two apples',
    he: 'מדברים עם צ׳אצ׳ו על דבר אחד ועל הרבה: a, an, ו-s בסוף המילה',
    turns: [
      {
        c: "I have an apple and a banana in my bag. What fruit do you like?",
        he: 'איזה פרי אתם אוהבים? למשל: I like apples. או Bananas!',
        a: [
          { k: ['apple'], r: "Apples! Red, green or yellow, they are all yummy." },
          { k: ['banana'], r: "Bananas! Monkeys love them, and parrots too." },
          { k: ['orange grape strawberry watermelon mango melon peach pear cherry kiwi pineapple plum lemon'], r: "Ooh, yummy! Fruit is the best snack." }
        ],
        o: "Yum! Fruit is fabulous. I eat fruit every day.",
        t: ["I like apples.", "Bananas!", "I like oranges."],
        x: [["apples", 0], ["i like apple", 0], ["banana", 1], ["i like watermelon", 2], ["chocolate", -1], ["an orange", 2]]
      },
      {
        c: "I have a lot of pencils. How many pencils have you got in your bag?",
        he: 'כמה עפרונות יש לכם בתיק? למשל: I have five pencils. או I have one pencil.',
        a: [
          { k: ['zero no none not'], n: 'one two three four five six seven eight nine ten many lot know', r: "No pencils? Here, you can have one of mine." },
          { k: ['one'], n: 'two three four five six seven eight nine ten eleven twelve twenty hundred many lot', r: "One pencil. That is okay, one is enough!" },
          { k: ['two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty many lot hundred'], r: "Fabulous! Lots of pencils for writing and drawing." }
        ],
        o: "Pencils are great for writing English words!",
        t: ["I have five pencils.", "I have one pencil.", "I have no pencils."],
        x: [["i have 5 pencils", 2], ["one pencil", 1], ["i have no pencils", 0], ["two", 2], ["i have a pen", -1], ["a lot", 2], ["i don't know", -1]]
      },
      {
        c: "Let's make a zoo! Tell me two or three animals. What is in our zoo?",
        he: 'בונים גן חיות! אילו חיות יש בו? למשל: Two lions and an elephant.',
        a: [
          { k: ['elephant'], r: "An elephant! Big and grey. What a fabulous zoo!" },
          { k: ['lion monkey tiger bear giraffe zebra snake bird penguin fish horse dog cat mouse mice rabbit wolf wolves fox crocodile hippo kangaroo panda parrot'], r: "Ooh, fabulous animals! Our zoo is great." }
        ],
        o: "Fabulous! What a great zoo. I want to visit it!",
        t: ["Two lions and an elephant.", "Three monkeys!", "A tiger and two bears."],
        x: [["two monkey and a elephant", 0], ["elephants", 0], ["lions and tigers", 1], ["three mouses", 1], ["a dinosaur", -1]]
      },
      {
        c: "I want an ice cream! Do you want an ice cream or a cookie?",
        he: 'מה אתם רוצים? למשל: An ice cream, please! או A cookie, please.',
        a: [
          { k: ['both two'], r: "Both! An ice cream and a cookie. Yum, yum!" },
          { k: ['ice_cream icecream cream'], r: "An ice cream for you and an ice cream for me!" },
          { k: ['cookie cooky biscuit'], r: "A cookie! Crunchy, like my crackers. Here you are." }
        ],
        o: "Okay! Maybe an apple then. Here you are!",
        t: ["An ice cream, please!", "A cookie, please.", "Both, please!"],
        x: [["ice cream", 1], ["a ice cream please", 1], ["a cookie", 2], ["both please", 0], ["no thank you", -1], ["cookies", 2]]
      }
    ],
    end: "One parrot, two parrots, lots of fun! Thank you, bye bye!"
  },
  {
    id: 'ta1g05', title: 'Make a new pet',
    he: 'ממציאים עם צ׳אצ׳ו חיית מחמד חדשה ומתארים אותה במילים',
    turns: [
      {
        c: "Let's make a new pet together! Is it a big pet or a small pet?",
        he: 'החיה החדשה גדולה או קטנה? למשל: A big pet! או It is small.',
        a: [
          { k: ['big bigger biggest huge large'], n: 'not', r: "A big pet! Ooh, big and strong." },
          { k: ['small little tiny'], r: "A small pet! Ooh, small and cute." }
        ],
        o: "Okay! A medium pet. Not big, not small.",
        t: ["A big pet!", "It is small."],
        x: [["big", 0], ["a very big pet", 0], ["small one", 1], ["tiny", 1], ["medium", -1]]
      },
      {
        c: "What colour is our new pet?",
        he: 'מה הצבע של החיה? למשל: It is blue. או Pink and purple!',
        a: [
          { k: ['red blue green yellow black white pink purple orange grey gray brown gold silver rainbow'], r: "Ooh, fabulous colour! I can see it now." }
        ],
        o: "Ooh, a special colour! Nobody has a pet like that.",
        t: ["It is blue.", "Pink and purple!", "A rainbow pet!"],
        x: [["blue", 0], ["it is pink and purple", 0], ["rainbow", 0], ["i don't know", -1], ["it have red color", 0]]
      },
      {
        c: "Is our pet funny or quiet? Or maybe very noisy, like me?",
        he: 'החיה מצחיקה או שקטה? למשל: It is funny. או It is quiet.',
        a: [
          { k: ['funny funnier fun silly'], r: "A funny pet! It can tell jokes with me." },
          { k: ['quiet calm shy'], r: "A quiet pet. Nice and calm, not like me!" },
          { k: ['noisy loud'], r: "A noisy pet, like me! Squawk, squawk!" }
        ],
        o: "Ooh, I love it! It is a very special pet.",
        t: ["It is funny.", "It is quiet.", "Very noisy!"],
        x: [["funny", 0], ["it is quiet", 1], ["noisy like you", 2], ["it is cute", -1], ["very funny pet", 0]]
      },
      {
        c: "Now say it all! For example: a big blue funny dog. What is our pet?",
        he: 'תארו את כל החיה במשפט אחד! למשל: A small pink quiet cat.',
        a: [],
        o: "Fabulous! I love our new pet. Let's give it a hat!",
        t: ["A small pink quiet cat.", "A big green funny dog.", "A noisy purple bird."],
        x: [["a big blue funny dragon", -1], ["small red cat", -1]]
      }
    ],
    end: "What a beautiful, funny, fabulous pet! Thank you, and goodbye!"
  },
  {
    id: 'ta1g06', title: 'I play, she plays',
    he: 'מדברים על מה שאתם וחברים שלכם עושים: I play, she plays',
    turns: [
      {
        c: "My friend Pip plays the drums. What does someone in your class like doing?",
        he: 'מה מישהו מהכיתה שלכם אוהב לעשות? למשל: She likes dancing. או He plays football.',
        a: [
          { k: ['football soccer ball basketball'], r: "Football? Fabulous! Kick, kick, goal!" },
          { k: ['dance dancing'], r: "Dancing? Ooh, I love dancing too!" },
          { k: ['game computer minecraft fortnite roblox'], r: "Games? Fun! I like games too." }
        ],
        o: "Ooh, fun! That sounds great.",
        t: ["She likes dancing.", "He plays football.", "She plays games."],
        x: [["she like dancing", 1], ["he play football", 0], ["he likes computer games", 2], ["she reads books", -1], ["football", 0]]
      },
      {
        c: "I don't like rain. My feathers get wet! Do you like rain?",
        he: "אתם אוהבים גשם? למשל: Yes, I do. או No, I don't.",
        a: [
          { k: ['no not dont'], r: "You don't like rain? Me neither! I stay in my nest." },
          { k: ['yes do love like sometimes sure'], r: "You like rain? Then take a big umbrella!" }
        ],
        o: "Rain or sun, every day is a good day!",
        t: ["Yes, I do.", "No, I don't."],
        x: [["yes i do", 1], ["no i don't", 0], ["i love rain", 1], ["i not like rain", 0], ["snow", -1]]
      },
      {
        c: "Does your teacher give a lot of homework?",
        he: "המורה נותן/ת הרבה שיעורי בית? למשל: Yes, she does. או No, he doesn't.",
        a: [
          { k: ['no not little'], n: 'know', r: "Lucky you! More time to play." },
          { k: ['yes lot many much does'], r: "A lot of homework! You work very hard." }
        ],
        o: "Homework is important, but fun is important too!",
        t: ["Yes, she does.", "No, he doesn't."],
        x: [["yes she does", 1], ["no he doesn't", 0], ["yes a lot", 1], ["sometimes", -1], ["she give many homework", 1], ["i don't know", -1]]
      },
      {
        c: "A dog says woof. A cat says meow. What does a cow say?",
        he: 'מה פרה אומרת באנגלית? למשל: A cow says moo!',
        a: [
          { k: ['moo mu mooo moooo'], r: "Moo! Yes, a cow says moo. Ha ha!" }
        ],
        o: "A cow says moo! Moo, moo. Ha ha!",
        t: ["A cow says moo!", "It says moo."],
        x: [["moo", 0], ["a cow say moo", 0], ["it says mu", 0], ["i don't know", -1]]
      }
    ],
    end: "Pip plays the drums for you. Boom, boom! Bye bye, see you soon!"
  },
  {
    id: 'ta1g07', title: 'Ask Chacho a question!',
    he: 'הפעם אתם שואלים את צ׳אצ׳ו שאלות: What, Where, How old',
    turns: [
      {
        c: "Today you ask the questions! Ask me something with What. For example: What do you eat?",
        he: 'שאלו את צ׳אצ׳ו שאלה עם What. למשל: What do you eat? או What is your favourite colour?',
        a: [
          { k: ['eat food lunch breakfast dinner'], r: "What do I eat? Crackers and fruit. Yum!" },
          { k: ['colour color'], r: "My favourite colour? Green, like my feathers!" },
          { k: ['like love'], r: "What do I like? Words, hats and you!" },
          { k: ['name'], r: "My name is Chacho. Hello again!" }
        ],
        o: "Good question! I love crackers, hats and English words.",
        t: ["What do you eat?", "What is your favourite colour?", "What do you like?"],
        x: [["what do you eat", 0], ["what you eat", 0], ["what is your favorite color", 1], ["what you like", 2], ["what is your name", 3], ["hello", -1]]
      },
      {
        c: "Now ask me a question with Where. For example: Where are you from?",
        he: 'שאלו את צ׳אצ׳ו עם Where. למשל: Where are you from? או Where do you sleep?',
        a: [
          { k: ['sleep bed nest'], r: "Where do I sleep? In a nest, in a big tree!" },
          { k: ['from'], r: "Where am I from? A warm green forest, far away." },
          { k: ['live home house'], r: "Where do I live? In my shop, up in a big tree!" }
        ],
        o: "Good question! I live in my shop, up in a big tree.",
        t: ["Where are you from?", "Where do you sleep?", "Where do you live?"],
        x: [["where are you from", 1], ["where you from", 1], ["where you sleep", 0], ["where do you live", 2], ["where is the cat", -1]]
      },
      {
        c: "Great! Now one with How. Can you ask me How old or How many?",
        he: 'שאלו את צ׳אצ׳ו עם How. למשל: How old are you? או How many feathers do you have?',
        a: [
          { k: ['old'], r: "How old am I? I am five. Young for a parrot!" },
          { k: ['feather'], r: "How many feathers? Oh, thousands! I can not count them." },
          { k: ['many much'], r: "How many? Hmm, a lot! I love big numbers." },
          { k: ['how', 'are'], r: "How am I? I am great, thank you!" }
        ],
        o: "Good question! I am five, and I have lots of feathers.",
        t: ["How old are you?", "How many feathers do you have?"],
        x: [["how old are you", 0], ["how old you are", 0], ["how many feathers you have", 1], ["how many friends do you have", 2], ["how are you", 3], ["how do you fly", -1]]
      },
      {
        c: "My turn! Who is your favourite singer?",
        he: 'מי הזמר או הזמרת האהובים עליכם? למשל: My favourite singer is Taylor Swift.',
        a: [],
        o: "La la la! Music makes my feathers dance.",
        t: ["My favourite singer is Taylor Swift.", "I like Noa Kirel.", "I don't have one."],
        x: [["taylor swift", -1], ["i don't know", -1]]
      }
    ],
    end: "What great questions! You can ask me more any time. Bye bye!"
  },
  {
    id: 'ta1g08', title: 'Always, sometimes, never',
    he: 'מדברים עם צ׳אצ׳ו על כמה פעמים עושים דברים: always, often, never',
    turns: [
      {
        c: "I always sing in the shower! Do you sing in the shower?",
        he: 'אתם שרים במקלחת? למשל: Yes, always! או Sometimes. או No, never.',
        a: [
          { k: ['never no not dont'], r: "Never? That is okay. I can sing for both of us!" },
          { k: ['sometimes often usually times'], r: "Sometimes! Ooh, a little shower star." },
          { k: ['always yes every sure'], r: "You sing too? We are two shower stars!" }
        ],
        o: "La la la! Singing is always fun.",
        t: ["Yes, always!", "Sometimes.", "No, never."],
        x: [["yes always", 2], ["sometimes", 1], ["no never", 0], ["i don't sing", 0], ["i like music", -1], ["often", 1]]
      },
      {
        c: "I eat ice cream every Friday! How often do you eat ice cream?",
        he: 'כמה פעמים אתם אוכלים גלידה? למשל: I sometimes eat ice cream. או Every day!',
        a: [
          { k: ['never no not dont'], r: "Never? Okay! More ice cream for me. Ha!" },
          { k: ['every_day everyday always daily'], r: "Every day? Wow, you really love ice cream!" },
          { k: ['sometimes often usually week weekend summer month once twice times friday saturday'], r: "Sometimes is perfect. Ice cream is cold and yummy!" }
        ],
        o: "Ice cream is a fun thing to eat. I love it!",
        t: ["I sometimes eat ice cream.", "Every day!", "I never eat it."],
        x: [["sometimes", 2], ["i eat ice cream every day", 1], ["never", 0], ["in summer", 2], ["chocolate", -1]]
      },
      {
        c: "How often do you go to the beach?",
        he: 'כמה פעמים אתם הולכים לים? למשל: I often go to the beach. או Sometimes, in the summer.',
        a: [
          { k: ['never no not dont'], r: "Never? That is okay. The park is fun too!" },
          { k: ['always every often lot'], r: "Lucky you! Sand, sun and sea." },
          { k: ['sometimes usually summer week weekend month year once twice times holiday'], r: "Sometimes! The beach is great in the summer." }
        ],
        o: "The beach is great. I love the sea!",
        t: ["I often go to the beach.", "Sometimes, in the summer.", "I never go."],
        x: [["often", 1], ["every weekend", 1], ["sometimes", 2], ["never", 0], ["in the summer", 2], ["i like the pool", -1]]
      },
      {
        c: "I am always noisy! Ha! What are you always: happy, hungry or busy?",
        he: 'מה אתם תמיד? למשל: I am always happy. או I am always hungry!',
        a: [
          { k: ['happy smile'], r: "Always happy! That is fabulous." },
          { k: ['hungry'], r: "Always hungry, just like me! Crackers, please!" },
          { k: ['busy tired sleepy'], r: "Always busy! Remember to have fun too." }
        ],
        o: "Ha! You are always great to talk to.",
        t: ["I am always happy.", "I am always hungry!", "I am always busy."],
        x: [["i am always happy", 0], ["i always happy", 0], ["hungry", 1], ["i am always busy", 2], ["i am funny", -1]]
      }
    ],
    end: "I always love talking with you! See you again soon. Bye bye!"
  },
  {
    id: 'ta1g09', title: 'I like you, you like me',
    he: 'משחקים עם צ׳אצ׳ו עם I, me, she, her, them',
    turns: [
      {
        c: "I like you a lot! Do you like me?",
        he: 'אתם אוהבים את צ׳אצ׳ו? למשל: Yes, I like you!',
        a: [
          { k: ['no not dont'], r: "That is okay. I like you, and that is enough!" },
          { k: ['yes like love sure course'], r: "Yay! You like me, and I like you!" }
        ],
        o: "Ha! I think we are good friends.",
        t: ["Yes, I like you!", "I love you, Chacho!", "Not yet!"],
        x: [["yes i like you", 1], ["me like you", 1], ["i love you", 1], ["not yet", 0], ["hello", -1]]
      },
      {
        c: "I have three cat friends. Do you like cats?",
        he: "אתם אוהבים חתולים? למשל: Yes, I love them. או No, I don't like them.",
        a: [
          { k: ['no not dont'], r: "You don't like them? Okay! Maybe you like dogs." },
          { k: ['yes like love cute sure'], r: "Me too! I like them, but not too close. Ha!" }
        ],
        o: "Cats are fun. They like me, I think!",
        t: ["Yes, I love them.", "No, I don't like them."],
        x: [["yes i love them", 1], ["i like it", 1], ["no", 0], ["i don't like they", 0], ["dogs", -1]]
      },
      {
        c: "My friend is a dolphin. She is very clever! Do you want to swim with her?",
        he: 'רוצים לשחות עם הדולפינה? למשל: Yes, I want to swim with her! או No, thank you.',
        a: [
          { k: ['no not dont'], r: "That is okay. You can wave to her from the boat!" },
          { k: ['yes want sure love like'], r: "Yay! She wants to swim with you too. Splash!" }
        ],
        o: "Dolphins are fabulous. She says hello to you!",
        t: ["Yes, I want to swim with her!", "No, thank you."],
        x: [["yes i want to swim with her", 1], ["yes with she", 1], ["no thank you", 0], ["i can't swim", 0], ["dolphins are cool", -1]]
      },
      {
        c: "Oh no, I can't find my hat! Can you help me?",
        he: 'צ׳אצ׳ו לא מוצא את הכובע שלו. תעזרו לו? למשל: Yes, I can help you!',
        a: [
          { k: ['head'], r: "On my head? Yes! Silly me. Thank you!" },
          { k: ['no not dont'], r: "That is okay. Oh, look! It is on my head. Ha!" },
          { k: ['yes sure okay ok help can course'], r: "Thank you! Oh, look! It is on my head. Ha ha!" }
        ],
        o: "Oh, look! My hat is on my head. Silly me!",
        t: ["Yes, I can help you!", "Sure!", "Is it on your head?"],
        x: [["yes i can help you", 2], ["on your head", 0], ["sure", 2], ["no", 1], ["where is it", -1]]
      }
    ],
    end: "We are a great team! Thank you for helping me. See you next time!"
  },
  {
    id: 'ta1u01', title: 'Max the robot waiter',
    he: 'מדברים על Max, הרובוט שמגיש פיצה',
    turns: [
      {
        c: "Max the robot brings pizza to the tables. Do you want a robot waiter?",
        he: 'רוצים מלצר רובוט? למשל: Yes, I want a robot waiter! או No, thank you.',
        a: [
          { k: ['no not dont'], r: "No robot? That is okay. People are great waiters too." },
          { k: ['yes want sure cool love like of_course course'], r: "Me too! A robot waiter is so cool." }
        ],
        o: "Robots are funny. Beep, boop!",
        t: ["Yes, I want a robot waiter!", "No, thank you."],
        x: [["yes", 1], ["i want robot", 1], ["no thank you", 0], ["robots are scary", -1], ["of course", 1]]
      },
      {
        c: "What is your favourite pizza: cheese, mushrooms or olives?",
        he: 'איזו פיצה אתם הכי אוהבים? למשל: Cheese, please! או I like olives.',
        a: [
          { k: ['mushroom'], r: "Mushrooms! Yummy. Max can bring it to you." },
          { k: ['olive'], r: "Olives! Black or green, they are fabulous." },
          { k: ['cheese plain margarita margherita'], r: "Cheese pizza! Simple and the best." },
          { k: ['corn onion pepper tomato tuna pineapple pepperoni'], r: "Ooh, a special pizza! Max can bring it to you." }
        ],
        o: "Yum! Max can bring you any pizza you like.",
        t: ["Cheese, please!", "I like olives.", "Mushrooms!"],
        x: [["cheese", 2], ["i like olives", 1], ["mushrooms please", 0], ["corn", 3], ["no pizza", -1]]
      },
      {
        c: "Let's make a robot for your home. What does our robot do?",
        he: 'מה הרובוט שלכם עושה? למשל: It cleans my room. או It makes pizza.',
        a: [
          { k: ['homework'], r: "It does your homework? Ha! What a funny idea!" },
          { k: ['clean tidy wash'], r: "It cleans the house? Fabulous! I want one too." },
          { k: ['cook make pizza food breakfast dinner lunch'], r: "It makes food? Yum! Max can learn from it." }
        ],
        o: "Wow! What a clever robot. Beep, boop!",
        t: ["It cleans my room.", "It makes pizza.", "It does my homework!"],
        x: [["it clean my room", 1], ["it makes pizza", 2], ["it do my homework", 0], ["it plays with me", -1], ["cooks dinner", 2]]
      },
      {
        c: "Max doesn't like cats. Does he like parrots, do you think?",
        he: "האם Max אוהב תוכים? למשל: Yes, he does! או No, he doesn't.",
        a: [
          { k: ['no not dont'], n: 'know', r: "Oh no! Then I must fly away fast. Ha!" },
          { k: ['yes does like love sure course'], r: "Yes, he does! Max and I are friends." }
        ],
        o: "I hope he likes parrots! I like robots.",
        t: ["Yes, he does!", "No, he doesn't."],
        x: [["yes he does", 1], ["yes he like", 1], ["no he doesn't", 0], ["maybe", -1], ["he love parrots", 1], ["i don't know", -1]]
      }
    ],
    end: "Beep, boop! That means bye bye in robot. See you soon!"
  },
  {
    id: 'ta1u03', title: 'The longest sandwich',
    he: 'מדברים על הכריך הכי ארוך ועל הכריכים שאתם אוהבים',
    turns: [
      {
        c: "The students make a sandwich twenty metres long! What is your favourite sandwich?",
        he: 'מה הכריך האהוב עליכם? למשל: Cheese and tomato. או My favourite is egg.',
        a: [],
        o: "Yum! I want a big bite of that.",
        t: ["Cheese and tomato.", "My favourite is egg.", "I like tuna sandwiches."],
        x: [["chocolate spread", -1], ["my favourite sandwich is schnitzel", -1]]
      },
      {
        c: "Some children don't like tomatoes. Do you like tomatoes?",
        he: "אתם אוהבים עגבניות? למשל: Yes, I do. או No, I don't like them.",
        a: [
          { k: ['no not dont'], r: "You don't like them? That is okay. More cheese for you!" },
          { k: ['yes like love do sure'], r: "You like tomatoes? Me too! Red and juicy." }
        ],
        o: "Tomatoes are red and round, like a ball!",
        t: ["Yes, I do.", "No, I don't like them."],
        x: [["yes i do", 1], ["i love tomato", 1], ["no", 0], ["i not like", 0], ["cucumbers", -1]]
      },
      {
        c: "The school chickens eat the bread at the end! Is that a good idea?",
        he: "התרנגולות של בית הספר אוכלות את הלחם שנשאר. זה רעיון טוב? למשל: Yes, it is! או No, it isn't.",
        a: [
          { k: ['no not'], r: "Ha! Maybe the parrots want some bread too." },
          { k: ['yes good great nice cool'], r: "Me too! Happy chickens and no bread in the bin." }
        ],
        o: "Ha! Lucky chickens! Cluck, cluck.",
        t: ["Yes, it is!", "No, it isn't."],
        x: [["yes it is", 1], ["good idea", 1], ["no", 0], ["it is not", 0], ["chickens are funny", -1]]
      },
      {
        c: "Twenty metres is very long! What is very long, do you think?",
        he: "מה עוד ארוך מאוד? למשל: A train is very long. או A snake!",
        a: [],
        o: "Ooh, good one! Long, long, long!",
        t: ["A train is very long.", "A snake!", "A giraffe's neck."],
        x: [["a train", -1], ["the river is long", -1]]
      }
    ],
    end: "Thank you! Now I am hungry. Time for a very long cracker! Bye bye!"
  },
  {
    id: 'ta1u04', title: 'Grandma on a skateboard',
    he: 'מדברים על Rina, הסבתא בת ה-72 שגולשת על סקייטבורד',
    turns: [
      {
        c: "Rina loves her skateboard. Do you like skateboards or bikes?",
        he: 'מה אתם אוהבים, סקייטבורד או אופניים? למשל: I like bikes. או Skateboards!',
        a: [
          { k: ['both'], r: "Both! Wheels, wheels, wheels. Fabulous!" },
          { k: ['skate skateboard board'], r: "Skateboards, like Rina! Fast and fun." },
          { k: ['bike bicycle cycling'], r: "Bikes! Ring, ring! Bikes are great fun." }
        ],
        o: "Wheels are fun! I just use my wings. Ha!",
        t: ["I like bikes.", "Skateboards!", "Both!"],
        x: [["bikes", 2], ["i like skateboard", 1], ["both", 0], ["scooter", -1], ["i like skating", 1]]
      },
      {
        c: "Rina is seventy-two! What fun thing do you want to do when you are seventy?",
        he: 'מה כיף תרצו לעשות כשתהיו בני 70? למשל: I want to swim. או Dance!',
        a: [],
        o: "Fabulous! Never stop having fun.",
        t: ["I want to swim.", "Dance!", "I want to fly a plane."],
        x: [["play football", -1], ["i want travel the world", -1]]
      },
      {
        c: "Rina's favourite colour is pink. She has a pink helmet! Do you like pink?",
        he: 'אתם אוהבים ורוד? למשל: Yes, I love pink! או No, I like blue.',
        a: [
          { k: ['no not dont'], r: "No pink? That is okay. Blue and green are cool too." },
          { k: ['yes pink'], r: "Pink! A happy colour. Rina says thank you!" }
        ],
        o: "Every colour is great on a helmet!",
        t: ["Yes, I love pink!", "No, I like blue."],
        x: [["yes", 1], ["i love pink", 1], ["no", 0], ["i like green", -1], ["i don't like pink", 0]]
      },
      {
        c: "I am a parrot. Can I skate too, do you think?",
        he: "האם צ׳אצ׳ו יכול לגלוש על סקייטבורד? למשל: Yes, you can! או No, you can't.",
        a: [
          { k: ['no not'], r: "Ha! You are right. I can fly, and that is faster!" },
          { k: ['yes can sure course maybe'], r: "Yay! A pink helmet for me, please!" }
        ],
        o: "Hmm, maybe I can just fly next to Rina!",
        t: ["Yes, you can!", "No, you can't."],
        x: [["yes you can", 1], ["no you can't", 0], ["of course", 1], ["you are a bird", -1], ["you can't", 0]]
      }
    ],
    end: "Safety first and fun always! Thank you, see you soon. Bye bye!"
  },
  {
    id: 'ta1v03', title: "Chacho's big family",
    he: 'צ׳אצ׳ו מספר על המשפחה הגדולה שלו: aunt, uncle, cousin ועוד',
    turns: [
      {
        c: "My family is very big. I have twenty cousins! Is a big family fun?",
        he: 'משפחה גדולה זה כיף, לדעתכם? למשל: Yes, it is fun! או I like small families.',
        a: [
          { k: ['small no not'], n: 'know', r: "Small families are lovely too. Quiet and nice." },
          { k: ['yes fun great good cool big sure'], r: "Yes! Big parties and lots of games." }
        ],
        o: "Big or small, a family is a special thing.",
        t: ["Yes, it is fun!", "I like small families."],
        x: [["yes", 1], ["yes it is fun", 1], ["no", 0], ["small is better", 0], ["i have 2 brothers", -1], ["i don't know", -1]]
      },
      {
        c: "Here is a riddle! My aunt has a son. He is my...?",
        he: 'חידה! לדודה של צ׳אצ׳ו יש בן. מי הוא בשביל צ׳אצ׳ו? למשל: Your cousin!',
        a: [
          { k: ['cousin causing cuzin'], r: "Yes! He is my cousin. You are so clever!" }
        ],
        o: "He is my cousin! A great family word.",
        t: ["Your cousin!", "He is your cousin."],
        x: [["cousin", 0], ["your cousin", 0], ["your brother", -1], ["is cousin", 0]]
      },
      {
        c: "My grandmother makes great cakes. What cake do you like?",
        he: 'איזו עוגה אתם אוהבים? למשל: Chocolate cake! או I like cheesecake.',
        a: [],
        o: "Yum! Great cakes make everyone happy.",
        t: ["Chocolate cake!", "I like cheesecake.", "Carrot cake, please."],
        x: [["chocolate", -1], ["i like apple cake", -1]]
      },
      {
        c: "My cousins and I play hide and seek. What game do you play with friends?",
        he: 'איזה משחק אתם משחקים עם חברים? למשל: We play football. או Tag!',
        a: [],
        o: "Ooh, fun! Games are better together.",
        t: ["We play football.", "Tag!", "We play computer games."],
        x: [["football", -1], ["we play cards", -1]]
      }
    ],
    end: "Thank you! My aunts, uncles and cousins all say bye bye to you!"
  },
  {
    id: 'ta1v04', title: 'Fast or slow?',
    he: 'משחקים עם מילים הפוכות: fast, slow, heavy, light, young, old',
    turns: [
      {
        c: "A snail is slow. A rabbit is fast. Are you fast or slow in the morning?",
        he: 'בבוקר אתם מהירים או איטיים? למשל: I am slow, like a snail! או I am fast.',
        a: [
          { k: ['slow snail'], r: "Slow, like a snail! Me too, before my crackers." },
          { k: ['fast quick rabbit'], n: 'not', r: "Fast! Zoom! You are like a rabbit." }
        ],
        o: "Ha! Mornings are funny. I just want to sleep.",
        t: ["I am slow, like a snail!", "I am fast."],
        x: [["slow", 0], ["i am very slow", 0], ["fast", 1], ["i am fast like rabbit", 1], ["sleepy", -1]]
      },
      {
        c: "An elephant is heavy. A feather is light. Is your school bag heavy or light?",
        he: 'התיק שלכם כבד או קל? למשל: It is very heavy! או It is light.',
        a: [
          { k: ['heavy havy hevy'], n: 'not', r: "Heavy! Lots of books in there." },
          { k: ['light lite easy'], r: "Light! Easy to carry. Lucky you!" }
        ],
        o: "My bag is tiny. It only has crackers in it!",
        t: ["It is very heavy!", "It is light."],
        x: [["heavy", 0], ["very heavy bag", 0], ["light", 1], ["not heavy", -1], ["it is big", -1]]
      },
      {
        c: "Which is better: a young puppy or an old dog?",
        he: 'מה עדיף, גור צעיר או כלב זקן? למשל: A young puppy! או An old dog.',
        a: [
          { k: ['both'], r: "Both! Young or old, dogs are lovely." },
          { k: ['young puppy baby'], r: "A puppy! Small, young and so cute." },
          { k: ['old older'], r: "An old dog! Calm and kind. Lovely." }
        ],
        o: "Young or old, dogs are wonderful friends.",
        t: ["A young puppy!", "An old dog.", "Both!"],
        x: [["puppy", 1], ["a old dog", 2], ["both", 0], ["a cat", -1], ["young", 1]]
      },
      {
        c: "Now you! Tell me a very fast animal. What is it?",
        he: 'איזו חיה מהירה מאוד? למשל: A cheetah is very fast. או A horse!',
        a: [],
        o: "Zoom, zoom! Fast animals are amazing.",
        t: ["A cheetah is very fast.", "A horse!", "A rabbit is fast."],
        x: [["cheetah", -1], ["the lion is fast", -1]]
      }
    ],
    end: "Fast or slow, you are fabulous! Now I fly away. Zoom! Goodbye!"
  },
  {
    id: 'ta1v05', title: 'Morning to night',
    he: 'מדברים על היום שלכם מהבוקר עד הערב: have a shower, get dressed, catch the bus',
    turns: [
      {
        c: "In space there is no shower! Do you have a shower in the morning or evening?",
        he: 'מתי אתם מתקלחים? למשל: In the evening. או In the morning.',
        a: [
          { k: ['morning'], r: "In the morning! Fresh for the day." },
          { k: ['evening night bed'], r: "In the evening! Clean and ready for bed." }
        ],
        o: "Water and soap! I have a bath in a little bowl.",
        t: ["In the morning.", "In the evening."],
        x: [["morning", 0], ["at evening", 1], ["at night", 1], ["i have a bath", -1], ["both", -1]]
      },
      {
        c: "When you get dressed, what is your favourite thing to wear?",
        he: 'מה הבגד האהוב עליכם? למשל: My blue jeans. או I love my hoodie.',
        a: [],
        o: "Fabulous choice! I love fashion.",
        t: ["My blue jeans.", "I love my hoodie.", "A dress."],
        x: [["my pink dress", -1], ["t-shirt", -1]]
      },
      {
        c: "How do you get to school: by bus, by car or on foot?",
        he: 'איך אתם מגיעים לבית הספר? למשל: By bus. או I walk. או By car.',
        a: [
          { k: ['bus'], r: "By bus! Catch it on time. Ha!" },
          { k: ['car'], r: "By car! Beep, beep!" },
          { k: ['foot walk feet'], r: "On foot! You walk, and I fly." },
          { k: ['bike bicycle scooter skate'], r: "Ooh, on wheels! Fast and fun." }
        ],
        o: "Every way is a good way to get to school!",
        t: ["By bus.", "I walk.", "By car."],
        x: [["by bus", 0], ["i go with the car", 1], ["i walk", 2], ["by bike", 3], ["my mom take me", -1], ["on foot", 2]]
      },
      {
        c: "My nest is very messy! Do you like tidying up?",
        he: 'אתם אוהבים לסדר את החדר? למשל: Yes, I do. או No, not really!',
        a: [
          { k: ['no not dont'], r: "Me neither! Tidy up to music. It is more fun." },
          { k: ['yes like love do sometimes sure'], r: "Wow! A tidy star. My nest needs you!" }
        ],
        o: "Tidy or messy, I like you a lot. Ha!",
        t: ["Yes, I do.", "No, not really!"],
        x: [["yes i do", 1], ["no", 0], ["i don't like", 0], ["sometimes", 1], ["my mom tidy", -1]]
      }
    ],
    end: "What a great day, from morning to night! Now it is time for my nest. Bye bye!"
  },
  {
    id: 'ta1l04', title: 'What are you doing?',
    he: 'צ׳אצ׳ו מתקשר אליכם, כמו Gal ל-Yael: מה אתם עושים עכשיו?',
    turns: [
      {
        c: "Ring, ring! Hello, it is Chacho. What are you doing right now?",
        he: 'מה אתם עושים עכשיו? למשל: I am talking to you! או I am sitting on my bed.',
        a: [
          { k: ['talk speak'], r: "Yes! You are talking to me, and I am talking to you." },
          { k: ['sit sitting lie lying bed sofa chair'], r: "You are sitting? Me too, on my favourite branch!" },
          { k: ['play game'], r: "You are playing? Fun! I am playing with words." }
        ],
        o: "Ooh! And I am talking to you. Fun!",
        t: ["I am talking to you!", "I am sitting on my bed.", "I'm playing a game."],
        x: [["i am talking with you", 0], ["i talk to you", 0], ["i am sitting on the sofa", 1], ["i playing", 2], ["eating", -1]]
      },
      {
        c: "I am eating a cracker right now. Crunch! Are you eating something too?",
        he: "גם אתם אוכלים עכשיו? למשל: Yes, I am eating an apple. או No, I'm not.",
        a: [
          { k: ['no not'], r: "Okay! Then I am eating for two. Ha!" },
          { k: ['yes eat apple snack banana cookie'], r: "Yum! We are eating together. Crunch, crunch!" }
        ],
        o: "Crunch, crunch! Crackers are the best.",
        t: ["Yes, I am eating an apple.", "No, I'm not."],
        x: [["yes", 1], ["i eat a banana", 1], ["no i'm not", 0], ["i am drinking water", -1], ["no", 0]]
      },
      {
        c: "Yael is baking a chocolate cake with her dad. Do you like baking?",
        he: "אתם אוהבים לאפות? למשל: Yes, I love baking cakes! או No, I don't.",
        a: [
          { k: ['no not dont'], r: "That is okay. Eating cake is fun too. Ha!" },
          { k: ['yes love like bake sure'], r: "Ooh, me too! Chocolate cake is my favourite." }
        ],
        o: "Mmm, cake! I can smell it from here.",
        t: ["Yes, I love baking cakes!", "No, I don't."],
        x: [["yes i love it", 1], ["i like bake cookies", 1], ["no", 0], ["i don't know how", 0], ["pizza", -1]]
      },
      {
        c: "Gal is sitting on the sofa. What is your teacher doing now, do you think?",
        he: 'מה המורה שלכם עושה עכשיו, לדעתכם? למשל: She is drinking coffee. או He is sleeping!',
        a: [],
        o: "Ha! Maybe your teacher is learning new words too.",
        t: ["She is drinking coffee.", "He is sleeping!", "I think she is reading."],
        x: [["sleeping", -1], ["he watch tv", -1]]
      }
    ],
    end: "Thank you for talking! I am going to eat more crackers now. Bye bye!"
  },
  {
    id: 'ta1l05', title: 'Life on a kibbutz',
    he: 'מדברים על החיים של Maya בקיבוץ: פרות, סוסה וקימה מוקדמת',
    turns: [
      {
        c: "Maya has lots of cows on her kibbutz. Do you want to live on a farm?",
        he: 'הייתם רוצים לגור בחווה? למשל: Yes, I want to! או No, I like the city.',
        a: [
          { k: ['no not dont city'], r: "The city is fun too! Shops, parks and people." },
          { k: ['yes want sure love like cool'], r: "Me too! Cows, horses and lots of green fields." }
        ],
        o: "A farm is a busy place. Moo, moo!",
        t: ["Yes, I want to!", "No, I like the city."],
        x: [["yes", 1], ["i want", 1], ["no", 0], ["i like city", 0], ["i live in a village", -1]]
      },
      {
        c: "Maya gets up at six to help with the cows. Is six early for you?",
        he: 'שש בבוקר זה מוקדם בשבילכם? למשל: Yes, very early! או No, I get up at six too.',
        a: [
          { k: ['no not'], n: 'know', r: "Wow, you are an early bird, like me!" },
          { k: ['yes early very'], r: "Very early! I love my nest in the morning." }
        ],
        o: "Six o'clock! The cows are hungry then.",
        t: ["Yes, very early!", "No, I get up at six too."],
        x: [["yes", 1], ["very early", 1], ["no", 0], ["it is not early", 0], ["i get up at 7", -1], ["i don't know", -1]]
      },
      {
        c: "Maya's horse is called Stella. What is a good name for a horse?",
        he: 'איזה שם טוב לסוס? למשל: Star! או Lucky.',
        a: [],
        o: "Ooh, a great name for a horse! Neigh!",
        t: ["Star!", "Her name is Lucky.", "Thunder."],
        x: [["shadow", -1], ["i like the name bamba", -1]]
      },
      {
        c: "Maya doesn't like the smell of the cows. Ha! What smell do you love?",
        he: 'איזה ריח אתם אוהבים? למשל: I love the smell of pizza. או Flowers!',
        a: [],
        o: "Mmm! I can almost smell it. Lovely!",
        t: ["I love the smell of pizza.", "Flowers!", "The sea."],
        x: [["cake", -1], ["i love smell of rain", -1]]
      }
    ],
    end: "Thank you! I am flying to the kibbutz to see Stella. Bye bye!"
  },
  {
    id: 'ta1l06', title: 'Holiday plans',
    he: 'מדברים על תוכניות עם going to, כמו Ido ו-Noa',
    turns: [
      {
        c: "Noa is going to sleep in a tent! Do you want to sleep in a tent?",
        he: 'רוצים לישון באוהל? למשל: Yes, I want to! או No, I like my bed.',
        a: [
          { k: ['no not dont bed'], r: "Your bed is soft and warm! That is okay." },
          { k: ['yes want sure love like cool camp'], r: "Me too! Stars, a campfire and lots of stories." }
        ],
        o: "A tent is fun, but a bed is soft!",
        t: ["Yes, I want to!", "No, I like my bed."],
        x: [["yes", 1], ["i want to sleep in a tent", 1], ["no", 0], ["no i like my bed", 0], ["camping", 1], ["my sister", -1]]
      },
      {
        c: "Ido is going to float and read. What are you going to do this weekend?",
        he: 'מה אתם הולכים לעשות בסוף השבוע? למשל: I am going to play football.',
        a: [],
        o: "Fabulous plans! Have a great time.",
        t: ["I am going to play football.", "I'm going to see my friends.", "Sleep a lot!"],
        x: [["i go to the beach", -1], ["i am going to visit my grandma", -1]]
      },
      {
        c: "Noa is going to take photos. What are you going to take to the beach?",
        he: 'מה תיקחו איתכם לים? למשל: I am going to take my ball. או A book!',
        a: [],
        o: "Good idea! I am going to take my sunglasses.",
        t: ["I am going to take my ball.", "A book!", "My hat and some water."],
        x: [["my phone", -1], ["i take my dog", -1]]
      },
      {
        c: "Which is better for a holiday: the sea or the mountains?",
        he: 'מה עדיף לחופשה, ים או הרים? למשל: The sea! או The mountains.',
        a: [
          { k: ['both'], r: "Both! The sea in summer and the mountains in winter." },
          { k: ['sea beach swim swimming'], r: "The sea! Splash, splash. Sun and sand!" },
          { k: ['mountain hill north snow'], r: "The mountains! Fresh air and tall trees." }
        ],
        o: "Every holiday is fun. Enjoy it!",
        t: ["The sea!", "The mountains.", "Both!"],
        x: [["the sea", 1], ["beach", 1], ["mountains", 2], ["both of them", 0], ["the desert", -1]]
      }
    ],
    end: "I am going to miss you! Have a great week. Bye bye!"
  },
  {
    id: 'ta1l07', title: 'Which dog?',
    he: 'משווים עם צ׳אצ׳ו: bigger, faster, quieter, כמו Tamar ואבא שלה',
    turns: [
      {
        c: "Max is bigger and quieter. Bamba is faster and funnier. Which dog do you like?",
        he: 'איזה כלב אתם אוהבים יותר? למשל: I like Bamba. או Max is better.',
        a: [
          { k: ['both'], r: "Both! Max and Bamba are both lovely dogs." },
          { k: ['max macs big bigger quiet quieter'], r: "Max! He is bigger and quieter. Calm and kind." },
          { k: ['bamba bomba bamber fast faster funny funnier small smaller'], r: "Bamba! She is faster and funnier. Woof!" }
        ],
        o: "Both dogs are lovely. Woof, woof!",
        t: ["I like Bamba.", "Max is better.", "Both!"],
        x: [["bamba", 2], ["i like max", 1], ["max is more big", 1], ["both", 0], ["i like cats", -1], ["the funny one", 2]]
      },
      {
        c: "Which is better, a cat or a dog?",
        he: 'מה יותר טוב, חתול או כלב? למשל: A dog is better. או Cats!',
        a: [
          { k: ['both'], r: "Both! Cats are quieter, and dogs are funnier." },
          { k: ['cat kitten', 'dog puppy'], r: "Cats and dogs! Cats are quieter, and dogs are funnier." },
          { k: ['cat kitten'], r: "A cat! Cats are quieter than dogs." },
          { k: ['dog puppy'], r: "A dog! Dogs are funnier than cats, I think." }
        ],
        o: "Cats and dogs are both great. And parrots too!",
        t: ["A dog is better.", "Cats!", "Both!"],
        x: [["dog", 3], ["cat is better", 2], ["both", 0], ["a dog is better than a cat", 1], ["a hamster", -1], ["dogs are more good", 3]]
      },
      {
        c: "Which is faster, do you think: a bike or a horse?",
        he: 'מה יותר מהיר, לדעתכם, אופניים או סוס? למשל: A horse is faster.',
        a: [
          { k: ['horse', 'bike bicycle'], r: "Both are fast! But a running horse is faster, I think." },
          { k: ['horse'], r: "A horse! Yes, a horse is faster than a bike." },
          { k: ['bike bicycle'], r: "A bike! Fast on the road. Ring, ring!" }
        ],
        o: "Both are fast. Faster than me on my feet! Ha!",
        t: ["A horse is faster.", "A bike is faster."],
        x: [["horse", 1], ["a bike is more fast", 2], ["the horse is faster than the bike", 0], ["a car", -1], ["bicycle", 2]]
      },
      {
        c: "Tamar's flat is small. What pet is good for a small home?",
        he: 'איזו חיה מתאימה לבית קטן? למשל: A small dog. או A cat is better.',
        a: [],
        o: "Good idea! Thank you for your help.",
        t: ["A small dog.", "A cat is better.", "A fish!"],
        x: [["a cat", -1], ["hamster", -1]]
      }
    ],
    end: "Thank you! You are a fabulous friend, better than crackers. Bye bye!"
  },
  {
    id: 'ta1l08', title: "Ella's new room",
    he: 'מדברים על החדר החדש של Ella ועל חדר החלומות שלכם',
    turns: [
      {
        c: "Ella has a teddy bear, Bruno. Have you got a teddy bear or a favourite toy?",
        he: "יש לכם דובי או צעצוע אהוב? למשל: Yes, I have got a teddy. או No, I haven't.",
        a: [
          { k: ['no not dont'], r: "That is okay. You have got me, your parrot friend!" },
          { k: ['yes teddy bear toy doll have got'], r: "Ooh, lovely! Give it a big hug from me." }
        ],
        o: "Toys are great friends. I love my little bell!",
        t: ["Yes, I have got a teddy.", "No, I haven't."],
        x: [["yes", 1], ["i have a teddy bear", 1], ["no", 0], ["no i haven't", 0], ["my phone", -1]]
      },
      {
        c: "Let's make your dream room! What is there in your dream room?",
        he: 'מה יש בחדר החלומות שלכם? למשל: There is a big TV. או There are lots of books.',
        a: [],
        o: "Wow! What a fabulous room. I love it!",
        t: ["There is a big TV.", "There are lots of books.", "There is a swimming pool!"],
        x: [["a big bed", -1], ["there is a pool and a cinema", -1]]
      },
      {
        c: "Where do you like to read: on a bed, on a sofa or on the floor?",
        he: 'איפה אתם אוהבים לקרוא? למשל: On my bed. או On the sofa.',
        a: [
          { k: ['bed'], r: "On the bed! Nice and soft." },
          { k: ['sofa couch'], r: "On the sofa! Big and soft." },
          { k: ['floor carpet'], r: "On the floor, like Ella's cat! Ha!" }
        ],
        o: "Any place is a good place for a book!",
        t: ["On my bed.", "On the sofa.", "On the floor."],
        x: [["on the bed", 0], ["in my bed", 0], ["sofa", 1], ["on the carpet", 2], ["i don't read", -1]]
      },
      {
        c: "In Japan, some people sleep on a bed on the floor. Do you want one?",
        he: 'רוצים מיטה על הרצפה, כמו ביפן? למשל: Yes, it is cool! או No, thank you.',
        a: [
          { k: ['no not dont'], r: "That is okay. A normal bed is great too." },
          { k: ['yes want sure cool love like'], r: "Fun! In the morning, you put it in a cupboard." }
        ],
        o: "Beds, floors, nests: every bed is nice for sleeping!",
        t: ["Yes, it is cool!", "No, thank you."],
        x: [["yes", 1], ["i want", 1], ["no thank you", 0], ["maybe", -1], ["it is cool", 1]]
      }
    ],
    end: "Your dream room is fabulous! I hope there is a place for me. Bye bye!"
  },
  {
    id: 'ta1l09', title: 'Hello from many countries',
    he: 'מדברים על המחנה הבינלאומי: מדינות, שפות ומילים חדשות',
    turns: [
      {
        c: "Leo says obrigado. It means thank you! How do you say thank you in another language?",
        he: 'איך אומרים "תודה" בשפה אחרת? למשל: Toda! או Shukran! או Merci!',
        a: [
          { k: ['toda todah today shukran shokran shukrun merci mercy gracias grazie danke arigato spasibo obrigado'], r: "Fabulous! Now I know a new word. Thank you!" },
          { k: ['not dont know no'], r: "That is okay! In Hebrew it is toda, in Arabic shukran." }
        ],
        o: "Thank you! I love words in every language.",
        t: ["Toda!", "Shukran!", "I don't know."],
        x: [["toda", 0], ["shukran", 0], ["i don't know", 1], ["merci", 0], ["i know toda", 0], ["spasibo", 0], ["hola", -1], ["no", 1], ["yes", -1]]
      },
      {
        c: "Which country do you want to visit?",
        he: 'לאיזו מדינה הייתם רוצים לטוס? למשל: I want to visit Japan. או Brazil!',
        a: [],
        o: "Ooh, great choice! Say hello for me if you go there.",
        t: ["I want to visit Japan.", "Brazil!", "I want to go to Canada."],
        x: [["japan", -1], ["i want go to america", -1]]
      },
      {
        c: "The kids at camp speak English together. Do you like speaking English?",
        he: 'אתם אוהבים לדבר אנגלית? למשל: Yes, I love it! או It is a little hard.',
        a: [
          { k: ['hard difficult little no not dont'], r: "That is okay! It is new, and you are doing great." },
          { k: ['yes love like fun sure'], r: "Yay! I love it too. English is fun with friends." }
        ],
        o: "English is a great way to make new friends!",
        t: ["Yes, I love it!", "It is a little hard."],
        x: [["yes", 1], ["i like english", 1], ["it is hard", 0], ["no", 0], ["hebrew", -1]]
      },
      {
        c: "Leo is coming to Israel! What food can he try here?",
        he: 'איזה אוכל Leo צריך לטעום בישראל? למשל: Falafel! או He can try hummus.',
        a: [],
        o: "Yum! Leo is going to love it.",
        t: ["Falafel!", "He can try hummus.", "Shakshuka."],
        x: [["falafel", -1], ["he can eat pita", -1]]
      }
    ],
    end: "Obrigado, toda, shukran, thank you! Bye bye, see you soon!"
  },
  {
    id: 'ta1r02', title: "Michal's family",
    he: 'מדברים על המשפחה של Michal: מי מצחיק, מי ספורטיבי ומה אתם חושבים',
    turns: [
      {
        c: "Who do you like best in Michal's family: Ron, Dana, Itay or Grandma Ruth?",
        he: 'מי הכי אהוב עליכם במשפחה של Michal? למשל: I like Ruth. או Ron, he is funny!',
        a: [
          { k: ['ruth roof root truth grandma grandmother granny'], r: "Ruth! She is seventy and runs every morning. Wow!" },
          { k: ['ron run dad father'], r: "Ron! He is so funny with his jokes." },
          { k: ['dana mum mom mother'], r: "Dana! She is kind, and she makes pizza." },
          { k: ['itay itai brother'], r: "Itay! Quiet, clever and taller than his dad." }
        ],
        o: "Good choice! Michal has a lovely family.",
        t: ["I like Ruth.", "Ron, he is funny!", "Dana!"],
        x: [["ruth", 0], ["the grandma", 0], ["ron", 1], ["i like the dad", 1], ["dana", 2], ["itay", 3], ["michal", -1]]
      },
      {
        c: "Dana makes pizza with her kids on Fridays. Do you like making pizza?",
        he: 'אתם אוהבים להכין פיצה? למשל: Yes, I love it! או No, I like eating it.',
        a: [
          { k: ['no not dont eat eating'], r: "Ha! Eating pizza is the best part." },
          { k: ['yes make sure course love like'], r: "Me too! Cheese, sauce and lots of fun." }
        ],
        o: "Pizza on Friday sounds fabulous!",
        t: ["Yes, I love it!", "No, I like eating it."],
        x: [["yes", 1], ["i like make pizza", 1], ["no", 0], ["i like to eat it", 0], ["i love it", 1], ["i like pasta", 1], ["pasta", -1]]
      },
      {
        c: "Itay loves computers. What do you love doing?",
        he: 'מה אתם הכי אוהבים לעשות? למשל: I love drawing. או Playing football!',
        a: [],
        o: "Ooh, that sounds great! Everybody needs a hobby.",
        t: ["I love drawing.", "Playing football!", "I love computers too."],
        x: [["dancing", -1], ["i love play games", -1]]
      },
      {
        c: "Ron has a beard and glasses. Do you think a parrot looks good with glasses?",
        he: "לדעתכם לתוכי מתאים משקפיים? למשל: Yes, you look cool! או No, I don't think so.",
        a: [
          { k: ['no not dont'], r: "Ha! You are right. My feathers are enough." },
          { k: ['yes cool good great sure funny'], r: "Ooh! Then I want pink glasses, please!" }
        ],
        o: "Ha! Maybe I can try some in my shop.",
        t: ["Yes, you look cool!", "No, I don't think so."],
        x: [["yes", 1], ["you look funny", 1], ["no", 0], ["i don't think", 0], ["maybe", -1]]
      }
    ],
    end: "Thank you! Michal's family is fun, and so are you. Bye bye!"
  },
  {
    id: 'ta1r03', title: "Adam's neighbourhood",
    he: 'מדברים על השכונה של Adam ועל מקומות שאתם אוהבים',
    turns: [
      {
        c: "Adam loves the chocolate rolls from the bakery. What do you like from a bakery?",
        he: 'מה אתם אוהבים לקנות במאפייה? למשל: Chocolate rolls! או I like bread.',
        a: [],
        o: "Mmm! Bakeries smell so good.",
        t: ["Chocolate rolls!", "I like bread.", "Cookies and cakes."],
        x: [["pita", -1], ["i like cake", -1]]
      },
      {
        c: "Adam goes to the library every Tuesday. Do you like libraries?",
        he: 'אתם אוהבים ספריות? למשל: Yes, I do. או No, not really.',
        a: [
          { k: ['no not dont'], r: "That is okay. Books are fun at home too." },
          { k: ['yes do love like sure'], r: "Me too! So many books, so many words." }
        ],
        o: "Libraries are quiet. Not like me! Ha!",
        t: ["Yes, I do.", "No, not really."],
        x: [["yes", 1], ["i love the library", 1], ["no", 0], ["not really", 0], ["i read on my phone", -1]]
      },
      {
        c: "There isn't a cinema near Adam. Is a cinema or a pool better for a town?",
        he: 'מה עדיף שיהיה בשכונה, קולנוע או בריכה? למשל: A cinema! או A pool is better.',
        a: [
          { k: ['both'], r: "Both! Films in winter, swimming in summer." },
          { k: ['cinema movie film theatre'], r: "A cinema! Films and popcorn every week." },
          { k: ['pool swim swimming water'], r: "A pool! Splash, splash, all summer!" }
        ],
        o: "Ooh, good idea! A town needs fun places.",
        t: ["A cinema!", "A pool is better.", "Both!"],
        x: [["cinema", 1], ["the pool", 2], ["both", 0], ["a mall", -1], ["i like movies", 1]]
      },
      {
        c: "Adam loves the beach near his home. What is your favourite place near your home?",
        he: "מה המקום האהוב עליכם ליד הבית? למשל: The park. או The beach! או My friend's house.",
        a: [],
        o: "Ooh, nice! Everyone needs a favourite place.",
        t: ["The park.", "The beach!", "My friend's house."],
        x: [["the park", -1], ["the mall near my house", -1]]
      }
    ],
    end: "Thank you! Now I am going to fly to the bakery for a chocolate roll. Bye bye!"
  },
  {
    id: 'ta1r04', title: 'Hello from London',
    he: 'מדברים על החיים של Yoav בלונדון: מזג אוויר, תה ותלבושת אחידה',
    turns: [
      {
        c: "British people love to talk about the weather. What is the weather like today?",
        he: 'איך מזג האוויר היום? למשל: It is sunny. או It is cold and rainy.',
        a: [
          { k: ['rain rainy cold cloud cloudy wind windy grey gray snow snowy'], n: 'not', r: "Just like London! Take a hat and an umbrella." },
          { k: ['sun sunny hot warm nice beautiful'], n: 'not', r: "Sunny! Lucky you. Yoav misses the sun." }
        ],
        o: "Thank you! Now we talk like British people.",
        t: ["It is sunny.", "It is cold and rainy.", "It is hot!"],
        x: [["sunny", 1], ["it is hot", 1], ["cold and rain", 0], ["it is windy", 0], ["i don't know", -1], ["not cold", -1]]
      },
      {
        c: "Many British people drink tea with milk. Do you like tea?",
        he: "אתם אוהבים תה? למשל: Yes, with sugar! או No, I don't.",
        a: [
          { k: ['no not dont'], r: "That is okay. Juice and water are great too." },
          { k: ['yes love like milk sugar lemon mint sometimes'], r: "Ooh, a cup of tea! Very British." }
        ],
        o: "Tea, juice or water. I like them all!",
        t: ["Yes, with sugar!", "No, I don't.", "Yes, with mint."],
        x: [["yes", 1], ["i like tea with milk", 1], ["no", 0], ["i don't like tea", 0], ["coffee", -1]]
      },
      {
        c: "At Yoav's school, students wear a tie! Do you want to wear a tie to school?",
        he: 'הייתם רוצים ללבוש עניבה לבית הספר? למשל: Yes, it looks smart! או No, thank you.',
        a: [
          { k: ['no not dont'], r: "Me neither! A tie and feathers? Too much." },
          { k: ['yes want sure cool smart like'], r: "Ooh, very smart! A tie looks so cool." }
        ],
        o: "Ha! I think a bow tie looks fabulous on a parrot.",
        t: ["Yes, it looks smart!", "No, thank you."],
        x: [["yes", 1], ["i want", 1], ["no", 0], ["no way", 0], ["my uniform is blue", -1]]
      },
      {
        c: "Yoav likes London, but he misses the sun. Do you want to visit London?",
        he: 'אתם רוצים לבקר בלונדון? למשל: Yes, I want to! או No, I like the sun.',
        a: [
          { k: ['no not dont sun'], r: "That is okay. Israel has lots of sun!" },
          { k: ['yes want sure love like'], r: "Fabulous! Take an umbrella, and say sorry a lot!" }
        ],
        o: "London is fun, but the sun here is lovely too!",
        t: ["Yes, I want to!", "No, I like the sun."],
        x: [["yes", 1], ["i want to go", 1], ["no", 0], ["i like the sun", 0], ["paris", -1]]
      }
    ],
    end: "Sorry, I must go now! Very British. Bye bye, see you soon!"
  }
]);

// Talk to Chacho: A1 home scenes sa101 to sa115 (tools/TALK-WRITING.md).
window.EQ_TALK.a1 = (window.EQ_TALK.a1 || []).concat([
  {
    id: 'sa101', title: 'At the ice cream shop',
    he: "קונים גלידה אצל צ׳אצ׳ו: בוחרים טעם, גודל, תוספת ומשלמים",
    turns: [
      {
        c: "Welcome to my ice cream shop! Do you want chocolate or vanilla?",
        he: "בחרו טעם: Chocolate, please. או Vanilla, please.",
        a: [
          { k: ['chocolate'], r: "Chocolate! My favourite too." },
          { k: ['vanilla'], r: "Vanilla! Very nice." },
          { k: ['strawberry lemon mango mint banana pistachio coconut'], r: "Ooh, a special one! Yes, I have it." }
        ],
        o: "Hmm, let me give you chocolate. It is the best!",
        t: ["Chocolate, please.", "Vanilla, please.", "Strawberry, please."],
        x: [["chocolate please", 0], ["I want vanilla", 1], ["strawberry", 2], ["pizza", -1], ["chocolate and vanilla", 0], ["mango", 2]]
      },
      {
        c: "Do you want a big one or a small one?",
        he: "גדולה או קטנה? A big one, please. או A small one, please.",
        a: [
          { k: ['big large huge'], r: "A big one! Here you are." },
          { k: ['small little'], r: "A small one. Here you are." }
        ],
        o: "Here you are. A medium one!",
        t: ["A big one, please.", "A small one, please."],
        x: [["big one please", 0], ["small", 1], ["the large one", 0], ["medium", -1], ["a little one", 1]]
      },
      {
        c: "Crackers are my favourite! Do you want sprinkles or crackers on top?",
        he: "מה לשים למעלה? סוכריות צבעוניות או קרקרים? Sprinkles, please. או No, thank you.",
        a: [
          { k: ['no nothing none not'], n: 'cracker', r: "Nothing on top. Simple and nice." },
          { k: ['cracker'], r: "Crackers on ice cream! You are a parrot, like me!" },
          { k: ['sprinkle chocolate sauce candy candies'], r: "Ooh, very pretty! Here you are." }
        ],
        o: "Okay! Here it is, with a little surprise on top.",
        t: ["Sprinkles, please.", "Crackers, please!", "No, thank you."],
        x: [["sprinkles please", 2], ["crackers", 1], ["no thank you", 0], ["no sprinkles", 0], ["nuts", -1], ["chocolate sauce", 2]]
      },
      {
        c: "Here is your ice cream! Do you want it in a cone or in a cup?",
        he: "בגביע או בכוס? In a cone, please. או In a cup, please.",
        a: [
          { k: ['cone corn'], r: "A cone! Crunchy, like my crackers." },
          { k: ['cup bowl'], r: "A cup! And here is a little spoon." }
        ],
        o: "Okay! Here you are. Enjoy it!",
        t: ["In a cone, please.", "In a cup, please."],
        x: [["a cone please", 0], ["corn", 0], ["cup", 1], ["in a bowl", 1], ["both", -1], ["i don't know", -1]]
      }
    ],
    end: "Enjoy your ice cream! Come again soon!"
  },
  {
    id: 'sa102', title: 'At the pet shop',
    he: "קונים חיית מחמד בחנות של צ׳אצ׳ו: בוחרים חיה, צבע, שם ואוכל",
    turns: [
      {
        c: "Woof! Meow! Welcome to my pet shop. Do you want a cat or a dog?",
        he: "חתול או כלב? A cat, please. או A dog, please. אפשר גם חיה אחרת.",
        a: [
          { k: ['cat kitten kitty'], r: "A cat! I have a sweet little cat." },
          { k: ['dog puppy'], r: "A dog! I have a happy little dog." },
          { k: ['rabbit bunny fish bird hamster turtle mouse horse snake guinea'], r: "Ooh, good idea! I have one of those too." }
        ],
        o: "Hmm, let me look. Yes, I have a great pet for you!",
        t: ["A cat, please.", "A dog, please.", "A rabbit, please."],
        x: [["a cat please", 0], ["i want dog", 1], ["puppy", 1], ["a fish", 2], ["pizza", -1], ["i want a rabbit", 2]]
      },
      {
        c: "My pets are black, white or brown. What colour do you want?",
        he: "איזה צבע? Black, please. או A white one, please.",
        a: [
          { k: ['black'], r: "Black! Very cool." },
          { k: ['white'], r: "White, like snow. Lovely." },
          { k: ['brown'], r: "Brown! So cute." }
        ],
        o: "Ooh, good choice! I have the perfect one for you.",
        t: ["Black, please.", "A white one, please.", "Brown, please."],
        x: [["black please", 0], ["white one", 1], ["brown", 2], ["pink", -1], ["i like black and white", 0]]
      },
      {
        c: "Your new pet needs a name. What is a good name for it?",
        he: "תנו שם לחיה החדשה, למשל: Max. או Her name is Luna.",
        a: [],
        o: "What a great name! Your pet loves it.",
        t: ["Max.", "Her name is Luna.", "His name is Lucky."],
        x: [["max", -1], ["his name is lucky", -1], ["snowy", -1]]
      },
      {
        c: "Your pet is hungry! Does it eat fish, carrots or crackers?",
        he: "מה החיה אוכלת? It eats fish. או It eats carrots.",
        a: [
          { k: ['fish'], r: "Fish! Here you are, a fish dinner." },
          { k: ['carrot'], r: "Carrots! Very good. Crunch, crunch!" },
          { k: ['cracker'], r: "Crackers? Oh no, my crackers! Okay, I can share." }
        ],
        o: "Okay! Here is a good dinner for your pet.",
        t: ["It eats fish.", "It eats carrots.", "It eats crackers."],
        x: [["fish", 0], ["it eat carrots", 1], ["crackers", 2], ["meat", -1], ["dog food", -1]]
      }
    ],
    end: "Here is your new pet. Take care of it. Bye bye!"
  },
  {
    id: 'sa103', title: 'The lost bag',
    he: "מחפשים תיק שאבד בדלפק האבידות של צ׳אצ׳ו: גודל, צבע ומה יש בו",
    turns: [
      {
        c: "Hello! This is Lost and Found. Is your bag big or small?",
        he: "התיק גדול או קטן? It is big. או It is small.",
        a: [
          { k: ['big large huge'], r: "A big bag. Okay." },
          { k: ['small little'], r: "A small bag. Okay." }
        ],
        o: "Okay. I have lots of bags here!",
        t: ["It is big.", "It is small."],
        x: [["it is big", 0], ["small bag", 1], ["my bag is very small", 1], ["green", -1], ["a little bag", 1]]
      },
      {
        c: "And what colour is your bag?",
        he: "איזה צבע התיק? It is blue. או My bag is red and black.",
        a: [
          { k: ['red blue green yellow black white pink purple orange grey gray brown'], r: "Nice colour! Oh, I have three bags like that." }
        ],
        o: "Okay! I have so many bags here. Let me look.",
        t: ["It is blue.", "My bag is red and black.", "It is pink."],
        x: [["it's blue", 0], ["red and black", 0], ["I don't know", -1], ["is grey", 0]]
      },
      {
        c: "What is in your bag?",
        he: "מה יש בתיק? למשל: My books and a pencil. או A sandwich and a ball.",
        a: [],
        o: "Okay, thank you. That helps me a lot.",
        t: ["My books and a pencil.", "A sandwich and a ball.", "My water bottle."],
        x: [["books and pencils", -1], ["sandwich", -1], ["my phone", -1]]
      },
      {
        c: "Look! This bag has a banana and a sleepy cat in it. Is it your bag?",
        he: "בתיק הזה יש בננה וחתול ישנוני! זה התיק שלכם? Yes, it is my bag! או No, it is not my bag.",
        a: [
          { k: ['no not'], n: 'know', r: "Not yours? Okay. Oh, look! This one is your bag." },
          { k: ['yes yay mine my'], r: "Great! Here is your bag. And here is the cat!" }
        ],
        o: "Okay, take this bag. I think it is yours.",
        t: ["Yes, it is my bag!", "No, it is not my bag."],
        x: [["yes", 1], ["no it is not", 0], ["it's my bag", 1], ["maybe", -1], ["no", 0], ["a cat", -1], ["i don't know", -1]]
      }
    ],
    end: "Bye bye! Take care of your bag. And say hello to the cat!"
  },
  {
    id: 'sa104', title: 'A cake for Turtle',
    he: "מכינים עוגת יום הולדת לצב, החבר של צ׳אצ׳ו: טעם, נרות, מתנה ושיר",
    turns: [
      {
        c: "Let's make a birthday cake for my friend Turtle! Chocolate or fruit?",
        he: "איזו עוגה? Chocolate, please. או A fruit cake.",
        a: [
          { k: ['chocolate'], r: "Chocolate! Turtle loves chocolate." },
          { k: ['fruit strawberry apple banana cherry lemon'], r: "A fruit cake! Yummy and pretty." }
        ],
        o: "Okay! A chocolate and fruit cake. The best!",
        t: ["Chocolate, please.", "A fruit cake."],
        x: [["chocolate", 0], ["fruit please", 1], ["strawberry", 1], ["vanilla", -1], ["chocolate cake", 0]]
      },
      {
        c: "Turtle is one hundred years old today! How many candles do we put on the cake?",
        he: "הצב בן מאה! כמה נרות שמים? One hundred candles! או Ten candles.",
        a: [
          { k: ['hundred 100'], r: "One hundred candles! Wow, a very hot cake!" },
          { k: ['one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty'], r: "Good idea. A few candles and a big song!" }
        ],
        o: "Okay! Lots of candles. Careful, they are hot!",
        t: ["One hundred candles!", "Ten candles."],
        x: [["100", 0], ["one hundred", 0], ["five", 1], ["10 candles", 1], ["a lot", -1], ["many many", -1]]
      },
      {
        c: "Now a present for Turtle. What is a good present?",
        he: "איזו מתנה כדאי לקנות לצב? למשל: A new hat. או A book about the sea.",
        a: [],
        o: "Ooh, Turtle loves presents. Great idea!",
        t: ["A new hat.", "A ball.", "A book about the sea."],
        x: [["a toy", -1], ["the hat", -1], ["salad", -1]]
      },
      {
        c: "It is party time! Can you sing Happy Birthday with me?",
        he: "שרים יחד! Happy birthday, Turtle! או Yes, I can!",
        a: [
          { k: ['no not'], r: "That is okay. I sing, and you clap!" },
          { k: ['yes okay ok sure happy birthday'], r: "Happy birthday to you! Turtle is so happy!" }
        ],
        o: "Lovely! Turtle says thank you!",
        t: ["Yes, I can!", "Happy birthday, Turtle!", "No, but I can clap."],
        x: [["yes", 1], ["happy birthday to you", 1], ["no I can't", 0], ["la la la", -1], ["okay", 1]]
      }
    ],
    end: "What a great party! Turtle says thank you. Bye bye!"
  },
  {
    id: 'sa105', title: 'What do I wear today?',
    he: "בוחרים בגדים בחנות של צ׳אצ׳ו לפי מזג האוויר: חם, קר, ים ולילה",
    turns: [
      {
        c: "Welcome to my clothes shop! Is it hot or cold today?",
        he: "חם או קר היום? It is hot. או It is cold.",
        a: [
          { k: ['hot warm sunny sun'], n: 'not', r: "Hot! Then you need cool clothes." },
          { k: ['cold cool rain rainy windy wind snow snowy'], n: 'not', r: "Cold! Then you need warm clothes." }
        ],
        o: "Okay! I have clothes for every day.",
        t: ["It is hot.", "It is cold.", "It is rainy."],
        x: [["hot", 0], ["it is very cold", 1], ["sunny", 0], ["rainy", 1], ["I don't know", -1], ["not hot", -1]]
      },
      {
        c: "Today we go to the beach! Do you want a sun hat or a big coat?",
        he: "הולכים לים! כובע שמש או מעיל? A sun hat, please. או A big coat, please.",
        a: [
          { k: ['hat cap'], r: "A sun hat! Perfect for the beach." },
          { k: ['coat jacket'], r: "A big coat at the beach? Ha ha! You are funny." }
        ],
        o: "Okay! Take a sun hat. The sun is hot.",
        t: ["A sun hat, please.", "A big coat, please."],
        x: [["a hat please", 0], ["the coat", 1], ["sun hat", 0], ["jacket", 1], ["shoes", -1]]
      },
      {
        c: "Now it is night, and it is cold. What do you want to wear?",
        he: "עכשיו לילה וקר. מה תלבשו? A warm jumper. או My coat and a scarf.",
        a: [
          { k: ['jumper sweater sweatshirt hoodie coat jacket scarf pyjamas pajamas warm gloves'], r: "Good idea! Nice and warm." },
          { k: ['short shirt t_shirt tshirt dress skirt'], r: "Brrr! Okay, and here is a warm jumper too." }
        ],
        o: "Okay! Take a warm jumper too. It is cold!",
        t: ["A warm jumper.", "My coat and a scarf.", "A T-shirt and shorts."],
        x: [["jumper", 0], ["i want a coat", 0], ["hoodie", 0], ["t-shirt", 1], ["shorts", 1], ["socks", -1]]
      },
      {
        c: "Last thing! Do you want pink socks with feathers, like me?",
        he: "גרביים ורודות עם נוצות, כמו של צ׳אצ׳ו? Yes, please! או No, thank you.",
        a: [
          { k: ['no not'], r: "No? Okay. More feathers for me!" },
          { k: ['yes sure okay ok please'], r: "Yay! Feather socks for us both!" }
        ],
        o: "Okay! You look fabulous today.",
        t: ["Yes, please!", "No, thank you."],
        x: [["yes please", 1], ["no thanks", 0], ["no thank you", 0], ["maybe", -1], ["yes i want", 1], ["sure", 1]]
      }
    ],
    end: "You look fabulous! Have a great day. Bye bye!"
  },
  {
    id: 'sa106', title: 'Pizza time',
    he: "מזמינים פיצה במסעדה של צ׳אצ׳ו: גודל, תוספות ושתייה",
    turns: [
      {
        c: "Hello and welcome to Pizza Chacho! Do you want a big pizza or a small pizza?",
        he: "פיצה גדולה או קטנה? A big pizza, please. או A small pizza, please.",
        a: [
          { k: ['big large huge'], r: "A big pizza! You are very hungry." },
          { k: ['small little medium'], r: "Okay, not too big. Good choice." }
        ],
        o: "Okay! A medium pizza for you.",
        t: ["A big pizza, please.", "A small pizza, please."],
        x: [["big pizza please", 0], ["a small one", 1], ["medium", 1], ["two pizzas", -1], ["large", 0]]
      },
      {
        c: "What do you want on your pizza?",
        he: "מה לשים על הפיצה? Cheese, please. או Olives and corn.",
        a: [
          { k: ['pineapple'], r: "Pineapple on pizza! Ooh, very brave!" },
          { k: ['olive mushroom corn tomato onion pepper vegetable'], r: "Yum! I love vegetables on pizza." },
          { k: ['cheese'], r: "Lots of cheese! Yum." }
        ],
        o: "Yum! And a cracker on top, for me. Ha ha!",
        t: ["Cheese, please.", "Olives and corn.", "Pineapple, please."],
        x: [["olives", 1], ["cheese please", 2], ["pineapple", 0], ["extra cheese and mushrooms", 1], ["i don't know", -1], ["corn", 1]]
      },
      {
        c: "And to drink? Water, orange juice or lemonade?",
        he: "מה לשתות? Water, please. או Orange juice, please.",
        a: [
          { k: ['water'], r: "Water. Here you are." },
          { k: ['juice orange'], r: "Orange juice. Here you are." },
          { k: ['lemonade lemon'], r: "Lemonade! Very cold and fresh." },
          { k: ['cola coke soda sprite'], r: "Sorry, no cola today. Here is lemonade!" }
        ],
        o: "Okay! Here you are. Enjoy!",
        t: ["Water, please.", "Orange juice, please.", "Lemonade, please."],
        x: [["water", 0], ["orange juice", 1], ["lemonade please", 2], ["coke", 3], ["milk", -1]]
      },
      {
        c: "Here is your pizza. It has a happy face! Do you like it?",
        he: "על הפיצה יש פרצוף שמח! אוהבים? Yes, I love it! או No, not really.",
        a: [
          { k: ['no not yuck'], r: "Oh no! Okay, I can make a new one for you." },
          { k: ['yes like love good yummy great delicious nice'], r: "Yay! I am a great chef!" }
        ],
        o: "Thank you! Enjoy your pizza.",
        t: ["Yes, I love it!", "It is very good.", "No, not really."],
        x: [["yes", 1], ["i love it", 1], ["yummy", 1], ["no i don't like", 0], ["it's hot", -1], ["very good", 1]]
      }
    ],
    end: "Thank you for eating at Pizza Chacho! Come back soon. Bye!"
  },
  {
    id: 'sa107', title: 'A day at the zoo',
    he: "סיור בגן החיות עם צ׳אצ׳ו המדריך: בוחרים חיות וקופצים כמו קופים",
    turns: [
      {
        c: "Welcome to the zoo! Do you want to see the lions or the monkeys first?",
        he: "את מי רואים קודם? The lions! או The monkeys, please.",
        a: [
          { k: ['lion'], r: "The lions! They are big and loud." },
          { k: ['monkey'], r: "The monkeys! They are so funny." },
          { k: ['elephant giraffe penguin zebra bear tiger snake hippo crocodile'], r: "Good idea! Let's go there first." }
        ],
        o: "Okay! We can see all the animals today.",
        t: ["The lions!", "The monkeys, please.", "The elephants."],
        x: [["lions", 0], ["monkey please", 1], ["the elephants", 2], ["food", -1], ["giraffe", 2]]
      },
      {
        c: "Now look at the monkeys! They jump and climb. Can you jump like a monkey?",
        he: "אתם יכולים לקפוץ כמו קוף? Yes, I can! או Ooh ooh, ah ah!",
        a: [
          { k: ['no not'], r: "That is okay. You can clap like a monkey!" },
          { k: ['yes ooh jump okay ok'], r: "Ooh ooh, ah ah! Great jumping!" }
        ],
        o: "Ha ha! The monkeys like you.",
        t: ["Yes, I can!", "Ooh ooh, ah ah!", "No, but I can clap."],
        x: [["yes", 1], ["yes i can", 1], ["no", 0], ["ooh ooh ah ah", 1], ["i jump", 1], ["banana", -1]]
      },
      {
        c: "Here are the penguins. Penguins cannot fly. But I can! Can you fly?",
        he: "פינגווינים לא עפים. ואתם? No, I can't. או No, but I can swim.",
        a: [
          { k: ['no not'], r: "Ha ha! People cannot fly. But parrots can!" },
          { k: ['yes'], r: "Really? Wow! Then let's fly home together." }
        ],
        o: "Ha ha! You are funny.",
        t: ["No, I can't.", "Yes, I can!", "No, but I can swim."],
        x: [["no i can't", 0], ["no", 0], ["yes", 1], ["yes i can fly", 1], ["in a plane", -1], ["i swim", -1]]
      },
      {
        c: "The tour is over. What is your favourite animal at the zoo?",
        he: "מה החיה האהובה עליכם בגן החיות? I like the penguins. או The lions.",
        a: [],
        o: "Great choice! The zoo is full of lovely animals.",
        t: ["The lions.", "I like the penguins.", "My favourite is the monkey."],
        x: [["the monkeys", -1], ["elephant", -1]]
      }
    ],
    end: "Thank you for coming to the zoo! Bye bye, and say hello to the monkeys!"
  },
  {
    id: 'sa108', title: 'Sports day',
    he: "יום ספורט עם המאמן צ׳אצ׳ו: בוחרים, מתחממים, רצים מול כלב ומקבלים מדליה",
    turns: [
      {
        c: "Welcome to sports day! I am your coach. Do you want to run or jump?",
        he: "לרוץ או לקפוץ? I want to run. או I want to jump.",
        a: [
          { k: ['run running ran race'], r: "Running! Great choice." },
          { k: ['jump'], r: "Jumping! Great choice." },
          { k: ['football soccer basketball swim tennis'], r: "Good idea! We can do that too." }
        ],
        o: "Okay! First we run, then we jump.",
        t: ["I want to run.", "I want to jump.", "Football, please."],
        x: [["run", 0], ["i want jump", 1], ["running", 0], ["basketball", 2], ["sleep", -1]]
      },
      {
        c: "First, we warm up! Can you count to ten with me?",
        he: "מתחממים! סופרים יחד עד עשר: One, two, three... או Yes!",
        a: [
          { k: ['no not'], r: "That is okay. I count, you clap!" },
          { k: ['yes one two three four five six seven eight nine ten okay ok sure'], r: "One, two, three... ten! Great warm-up!" }
        ],
        o: "Great! Now we are ready.",
        t: ["Yes! One, two, three...", "Okay!", "No, you count, please."],
        x: [["one two three four five six seven eight nine ten", 1], ["yes", 1], ["no", 0], ["1 2 3", 1], ["hello", -1]]
      },
      {
        c: "Ready, steady, go! Look! A dog is in the race! Is it fast or slow?",
        he: "כלב נכנס למרוץ! הוא מהיר או איטי? It is fast! או It is slow.",
        a: [
          { k: ['fast quick'], n: 'not', r: "Fast! The dog wins. Ha ha!" },
          { k: ['slow'], n: 'not', r: "Slow! Then you win the race!" }
        ],
        o: "Ha ha! What a funny race.",
        t: ["It is fast!", "It is slow."],
        x: [["fast", 0], ["very fast", 0], ["slow", 1], ["it is slow", 1], ["cute", -1], ["the dog is quick", 0]]
      },
      {
        c: "You get a gold medal! How do you feel?",
        he: "קיבלתם מדליית זהב! איך אתם מרגישים? I feel happy! או I am tired.",
        a: [
          { k: ['tired sleepy'], r: "Tired? Here is some water. Good job!" },
          { k: ['happy good great excited proud amazing super fine'], r: "Me too! We are a great team!" }
        ],
        o: "You are a star! Well done!",
        t: ["I feel happy!", "I am tired.", "I feel great!"],
        x: [["happy", 1], ["i feel very happy", 1], ["tired", 0], ["i am tired and happy", 0], ["hungry", -1], ["great", 1]]
      }
    ],
    end: "Great job today! You are a champion. Bye bye!"
  },
  {
    id: 'sa109', title: 'At the fruit market',
    he: "קונים פירות בשוק של צ׳אצ׳ו ומכינים שייק סגול",
    turns: [
      {
        c: "Fresh fruit here! Welcome to my market. Let's make a smoothie! Bananas or apples?",
        he: "בננות או תפוחים? Bananas, please. או Apples, please.",
        a: [
          { k: ['banana'], r: "Bananas! Yellow and sweet." },
          { k: ['apple'], r: "Apples! Red and crunchy." },
          { k: ['strawberry mango orange watermelon grape peach pear melon kiwi'], r: "Ooh, yes! I have that too." }
        ],
        o: "Okay! Bananas and apples, then.",
        t: ["Bananas, please.", "Apples, please.", "Strawberries, please."],
        x: [["bananas", 0], ["banana please", 0], ["apples", 1], ["strawberry", 2], ["pizza", -1], ["mango", 2]]
      },
      {
        c: "Good! How many do you want?",
        he: "כמה אתם רוצים? Three, please. או Ten, please!",
        a: [
          { k: ['one two three four five'], n: 'hundred', r: "Okay! Here you are." },
          { k: ['six seven eight nine ten eleven twelve twenty hundred 100 lot many'], r: "Wow, that is a lot! A very big smoothie!" }
        ],
        o: "Okay! Here you are.",
        t: ["Three, please.", "Two, please.", "Ten, please!"],
        x: [["3", 0], ["two please", 0], ["10", 1], ["a lot", 1], ["100", 1], ["i don't know", -1]]
      },
      {
        c: "Do you want milk or yogurt in your smoothie?",
        he: "חלב או יוגורט? Milk, please. או No, thank you.",
        a: [
          { k: ['no nothing not none'], r: "Okay, just fruit. Very fresh!" },
          { k: ['milk'], r: "Milk! Nice and cold." },
          { k: ['yogurt yoghurt'], r: "Yogurt! Yum, very good." },
          { k: ['water juice ice'], r: "Good idea! Very cold and fresh." }
        ],
        o: "Okay! Just fruit and a little ice. Very fresh!",
        t: ["Milk, please.", "Yogurt, please.", "No, thank you."],
        x: [["milk", 1], ["yogurt please", 2], ["no thank you", 0], ["orange juice", 3], ["chocolate", -1], ["no milk", 0]]
      },
      {
        c: "Here is your smoothie. Surprise, it is purple! Do you like it?",
        he: "השייק יצא סגול! אוהבים? Yes, I like it! או No, I do not like it.",
        a: [
          { k: ['no not yuck'], r: "Oh no! Okay, a new one for you." },
          { k: ['yes like love good yummy great nice'], r: "Yay! A purple smoothie for a cool kid!" }
        ],
        o: "Ha ha! Purple is a fun colour for a smoothie.",
        t: ["Yes, I like it!", "Yummy!", "No, I do not like it."],
        x: [["yes", 1], ["i love it", 1], ["no", 0], ["yuck", 0], ["it's purple", -1], ["yummy", 1]]
      }
    ],
    end: "Enjoy your smoothie! Come back to my market soon. Bye bye!"
  },
  {
    id: 'sa110', title: "On Chacho's bus",
    he: "נוסעים באוטובוס של צ׳אצ׳ו הנהג: לאן, איפה יושבים, פרה על הכביש ומה עושים שם",
    turns: [
      {
        c: "Hello! This is Chacho's bus. Where do you want to go, the beach or the park?",
        he: "לאן נוסעים? To the beach, please. או The park, please.",
        a: [
          { k: ['beach sea'], r: "The beach! Great, my bus goes there." },
          { k: ['park'], r: "The park! Great, my bus goes there." },
          { k: ['zoo mall shop school cinema museum library market pool city town'], r: "Okay! This bus goes there too." }
        ],
        o: "Okay! Here we go!",
        t: ["To the beach, please.", "The park, please.", "To the zoo, please."],
        x: [["the beach please", 0], ["to the park", 1], ["the zoo", 2], ["the moon", -1], ["sea", 0]]
      },
      {
        c: "Now, where do you want to sit: by the window or next to me?",
        he: "איפה תשבו? By the window, please. או Next to you!",
        a: [
          { k: ['window'], r: "By the window! You can see everything." },
          { k: ['you chacho chaco chacha chocho chatcho next driver front'], r: "Next to me! Great, we can sing on the way." }
        ],
        o: "Okay! Sit down and hold on tight!",
        t: ["By the window, please.", "Next to you!"],
        x: [["the window", 0], ["next to you", 1], ["near chacho", 1], ["at the back", -1], ["i don't know", -1]]
      },
      {
        c: "Oh! A big cow is on the road. Moo! What do we do?",
        he: "פרה על הכביש! מה עושים? למשל: We wait. או Say hello to the cow!",
        a: [],
        o: "Look! The cow is going away. Bye bye, cow!",
        t: ["We wait.", "Say hello to the cow!", "Go slowly."],
        x: [["wait", -1], ["honk", -1], ["we stop the bus", -1]]
      },
      {
        c: "We are here! What do you want to do now?",
        he: "הגענו! מה תעשו שם? למשל: Swim in the sea. או Play football.",
        a: [],
        o: "Sounds fun! Have a great time.",
        t: ["Swim in the sea.", "Play football.", "Eat ice cream."],
        x: [["swim", -1], ["play with my friends", -1]]
      }
    ],
    end: "Thank you for riding on Chacho's bus. Bye bye, and have fun!"
  },
  {
    id: 'sa111', title: 'Club Day',
    he: "נרשמים לחוג ביום החוגים: בוחרים חוג, יום וחולצה",
    turns: [
      {
        c: "It is Club Day at school! We have art, music and football. What do you like?",
        he: "איזה חוג? I like art. או Music, please. או I like football.",
        a: [
          { k: ['art draw paint drawing painting'], r: "Art! You can paint and draw." },
          { k: ['music sing guitar piano drum song'], r: "Music! You can sing and play." },
          { k: ['football soccer sport basketball ball'], r: "Football! You can run and play." }
        ],
        o: "Okay! We have lots of clubs. They are all fun.",
        t: ["I like art.", "Music, please.", "I like football."],
        x: [["art", 0], ["i like music", 1], ["football", 2], ["dance", -1], ["i like to draw", 0], ["basketball", 2]]
      },
      {
        c: "The club is on Monday or on Thursday. What day is good for you?",
        he: "איזה יום מתאים? Monday, please. או Thursday is good.",
        a: [
          { k: ['monday'], r: "Monday! See you on Monday." },
          { k: ['thursday'], r: "Thursday! See you on Thursday." },
          { k: ['sunday tuesday wednesday friday saturday'], r: "Hmm, no club on that day. Let's say Monday!" }
        ],
        o: "Okay! Monday is a good day.",
        t: ["Monday, please.", "Thursday is good."],
        x: [["monday", 0], ["on thursday", 1], ["tuesday", 2], ["every day", -1], ["monday please", 0]]
      },
      {
        c: "Every club member gets a T-shirt! What colour do you want?",
        he: "כל חבר בחוג מקבל חולצה! איזה צבע? Blue, please. או Green, like you!",
        a: [
          { k: ['red blue green yellow black white pink purple orange grey gray brown'], r: "Ooh, nice! Here is your T-shirt." }
        ],
        o: "Here is your T-shirt. It is green, like me!",
        t: ["Blue, please.", "A red one, please.", "Green, like you!"],
        x: [["blue", 0], ["a red one", 0], ["rainbow", -1], ["pink please", 0], ["black and white", 0]]
      },
      {
        c: "Our club has a special bird. It is a red and blue parrot! Who is it?",
        he: "לחוג יש קמע: תוכי אדום וכחול! מי זה? It is you! או Chacho!",
        a: [
          { k: ['you chacho chaco chacha chocho chatcho'], r: "Yes! It is me! I am the club parrot." }
        ],
        o: "Ha ha! It is me, Chacho!",
        t: ["It is you!", "Chacho!"],
        x: [["you", 0], ["chacho", 0], ["it is you", 0], ["a dog", -1], ["i don't know", -1]]
      }
    ],
    end: "Welcome to the club! See you there. Bye bye!"
  },
  {
    id: 'sa112', title: 'At the library',
    he: "בספרייה עם צ׳אצ׳ו הספרן: בוחרים ספר, מדברים בשקט ומחליטים איפה לקרוא",
    turns: [
      {
        c: "Shh! Welcome to the library. Do you want a book about animals or space?",
        he: "ספר על חיות או על החלל? Animals, please. או A book about space.",
        a: [
          { k: ['animal dog cat horse dinosaur lion'], r: "Animals! I have a big book about animals." },
          { k: ['space star moon planet rocket'], r: "Space! I have a book about the moon." },
          { k: ['magic dragon princess football car robot'], r: "Ooh! I have a book about that too." }
        ],
        o: "Okay! I have a fun book for you.",
        t: ["Animals, please.", "A book about space.", "A book about magic."],
        x: [["animals", 0], ["space please", 1], ["about the moon", 1], ["magic", 2], ["i don't know", -1], ["dinosaurs", 0]]
      },
      {
        c: "Do you want a book with lots of words or a book with lots of pictures?",
        he: "הרבה מילים או הרבה תמונות? Lots of pictures, please. או Lots of words.",
        a: [
          { k: ['picture'], r: "Pictures! They are so beautiful." },
          { k: ['word long big'], r: "Lots of words! Great for a long story." }
        ],
        o: "Okay! This book has words and pictures.",
        t: ["Lots of pictures, please.", "Lots of words, please."],
        x: [["pictures", 0], ["words", 1], ["the big book", 1], ["both", -1], ["picture please", 0]]
      },
      {
        c: "Shh! The library is quiet. Can you say hello very quietly?",
        he: "בספרייה מדברים בשקט. אמרו שלום בלחש: Hello.",
        a: [
          { k: ['hello hi hey'], r: "Ha ha, very quiet! Like a little mouse." }
        ],
        o: "That is okay! Shh, we are in the library.",
        t: ["Hello.", "Hi, Chacho."],
        x: [["hello", 0], ["hi", 0], ["no", -1], ["yes", -1]]
      },
      {
        c: "Here is your book! Do you want to read it here or at home?",
        he: "איפה תקראו? At home, please. או Here, please.",
        a: [
          { k: ['home'], r: "At home! Nice and warm." },
          { k: ['here library now'], r: "Here! Sit in this big, soft chair." }
        ],
        o: "Okay! Happy reading.",
        t: ["At home, please.", "Here, please."],
        x: [["at home", 0], ["here", 1], ["here please", 1], ["in the park", -1], ["home", 0]]
      }
    ],
    end: "Happy reading! Bring the book back next week. Bye bye!"
  },
  {
    id: 'sa113', title: 'Breakfast at the hotel',
    he: "ארוחת בוקר במלון של צ׳אצ׳ו: מזמינים אוכל ושתייה, וציפור קטנה מגיעה לצלחת",
    turns: [
      {
        c: "Good morning! Welcome to breakfast. Do you want eggs or pancakes?",
        he: "ביצים או פנקייק? Eggs, please. או Pancakes, please.",
        a: [
          { k: ['egg omelette omelet'], r: "Eggs! Good for a big day." },
          { k: ['pancake'], r: "Pancakes! With honey, yum." },
          { k: ['toast bread cereal salad cheese yogurt pita'], r: "Okay! I have that too." }
        ],
        o: "Okay! A little bit of everything, then.",
        t: ["Eggs, please.", "Pancakes, please.", "Toast, please."],
        x: [["eggs", 0], ["pancakes please", 1], ["omelet", 0], ["cereal", 2], ["pizza", -1], ["toast", 2]]
      },
      {
        c: "And to drink? Tea, hot chocolate or orange juice?",
        he: "מה לשתות? Tea, please. או Hot chocolate, please.",
        a: [
          { k: ['tea'], r: "Tea. Careful, it is hot!" },
          { k: ['chocolate cocoa'], r: "Hot chocolate! Yum, my favourite." },
          { k: ['juice orange'], r: "Orange juice! Fresh and cold." },
          { k: ['water milk coffee'], r: "Okay! Here you are." }
        ],
        o: "Here you are. Enjoy!",
        t: ["Tea, please.", "Hot chocolate, please.", "Orange juice, please."],
        x: [["tea", 0], ["hot chocolate", 1], ["orange juice please", 2], ["milk", 3], ["cola", -1]]
      },
      {
        c: "Oops! A little bird is on your plate. What do you say to the bird?",
        he: "ציפור קטנה על הצלחת! מה אומרים לה? Hello, little bird! או Go away, bird!",
        a: [],
        o: "Ha ha! That is my little cousin. He says sorry!",
        t: ["Go away, bird!", "Hello, little bird!", "Do you want some bread?"],
        x: [["hello bird", -1], ["go away", -1], ["shoo", -1]]
      },
      {
        c: "Is your breakfast good?",
        he: "טעים? Yes, it is very good! או No, it is cold.",
        a: [
          { k: ['no not cold bad yuck'], r: "Oh no! I am sorry. Here is a new one for you." },
          { k: ['yes good yummy great love nice delicious'], r: "Great! Our chef is very happy." }
        ],
        o: "Thank you! Have a great day.",
        t: ["Yes, it is very good!", "Yummy!", "No, it is cold."],
        x: [["yes", 1], ["very good", 1], ["yummy", 1], ["no", 0], ["it's cold", 0], ["i am full", -1]]
      }
    ],
    end: "Enjoy your day! See you at breakfast tomorrow. Bye bye!"
  },
  {
    id: 'sa114', title: 'A picnic in the park',
    he: "אורזים פיקניק עם צ׳אצ׳ו: אוכל, מקום בפארק, משחק ונמלים",
    turns: [
      {
        c: "It is a sunny day! Let's have a picnic. What food do we take?",
        he: "מה לוקחים לפיקניק? Sandwiches! או Fruit, please.",
        a: [
          { k: ['cracker'], r: "Crackers! You are my best friend!" },
          { k: ['sandwich bread pita hummus falafel cake cookie pizza'], r: "Yum! Good picnic food. In the basket it goes!" },
          { k: ['fruit apple banana watermelon grape orange strawberry'], r: "Fruit! Sweet and fresh. In the basket it goes!" }
        ],
        o: "Yum! In the basket it goes!",
        t: ["Sandwiches!", "Fruit, please.", "Crackers for you!"],
        x: [["crackers", 0], ["sandwiches", 1], ["pita and hummus", 1], ["watermelon", 2], ["chips", -1], ["cake", 1]]
      },
      {
        c: "Where do we sit? Under a big tree or in the sun?",
        he: "איפה יושבים? Under the tree. או In the sun.",
        a: [
          { k: ['tree shade'], r: "Under the tree. Nice and cool." },
          { k: ['sun sunny'], r: "In the sun! Nice and warm." }
        ],
        o: "Okay! This place is perfect.",
        t: ["Under the tree.", "In the sun."],
        x: [["under the tree", 0], ["the sun", 1], ["in the sun please", 1], ["on the grass", -1], ["tree", 0]]
      },
      {
        c: "Let's play a game! Do you want to play ball or hide and seek?",
        he: "איזה משחק? Hide and seek! או Let's play ball.",
        a: [
          { k: ['hide seek'], r: "Hide and seek! You hide, I count. One, two, three..." },
          { k: ['ball football catch frisbee'], r: "Ball! Catch! Good job!" }
        ],
        o: "Fun! Let's play.",
        t: ["Hide and seek!", "Let's play ball."],
        x: [["hide and seek", 0], ["ball", 1], ["football", 1], ["tag", -1], ["hide", 0]]
      },
      {
        c: "Oh no! Look, the ants want our food! What do we do?",
        he: "נמלים רוצות את האוכל! מה עושים? Run! או Give them some bread.",
        a: [],
        o: "Ha ha! Okay. Let's give the ants one little cracker.",
        t: ["Run!", "Give them some bread.", "We eat fast!"],
        x: [["run", -1], ["eat the food quickly", -1]]
      }
    ],
    end: "What a fun picnic! Thank you for coming. Bye bye!"
  },
  {
    id: 'sa115', title: 'The talent show',
    he: "מופע כישרונות עם צ׳אצ׳ו המנחה: מה אתם יודעים לעשות, ומה החתול השופט נותן",
    turns: [
      {
        c: "Welcome to the Chacho Talent Show! What can you do? Sing, dance or tell a joke?",
        he: "מה הכישרון שלכם? I can sing. או I can tell a joke.",
        a: [
          { k: ['no nothing know'], r: "That is okay! You can be my helper on the stage." },
          { k: ['sing song'], r: "Singing! The stage is yours." },
          { k: ['dance'], r: "Dancing! Music, please!" },
          { k: ['joke funny'], r: "A joke! Everyone loves a joke." }
        ],
        o: "Ooh, fun! I want to see that.",
        t: ["I can sing.", "I can dance.", "I can tell a joke."],
        x: [["sing", 1], ["i can dance", 2], ["a joke", 3], ["magic", -1], ["i can sing", 1], ["draw", -1], ["nothing", 0], ["i don't know", 0], ["i can not sing", 1]]
      },
      {
        c: "The lights are on. Are you ready?",
        he: "האורות דולקים. מוכנים? Yes, I am ready! או No, I am a little shy.",
        a: [
          { k: ['no not scared nervous shy afraid'], r: "That is okay. Take a big breath. You can do it!" },
          { k: ['yes ready okay ok sure'], r: "Great! Lights, music, go!" }
        ],
        o: "Okay! Here we go!",
        t: ["Yes, I am ready!", "No, I am a little shy."],
        x: [["yes", 1], ["yes i am ready", 1], ["no", 0], ["i'm scared", 0], ["wait", -1], ["not ready", 0]]
      },
      {
        c: "Wow, fabulous! The judge is a cat. Meow! How many stars does the cat give you?",
        he: "השופט הוא חתול! כמה כוכבים הוא נותן לכם? Ten stars! או One hundred stars!",
        a: [
          { k: ['ten nine eight hundred 100 twenty million'], r: "Wow! A top score! The cat loves you." },
          { k: ['zero one two three four five six seven'], r: "Ha ha! Cats are very hard judges." }
        ],
        o: "Ha ha! The cat says meow. That means yes!",
        t: ["Ten stars!", "Five stars.", "One hundred stars!"],
        x: [["10", 0], ["a hundred", 0], ["5", 1], ["one", 1], ["meow", -1], ["lots", -1]]
      },
      {
        c: "And now the big prize! A gold cup or a big box of crackers?",
        he: "הפרס: גביע זהב או קופסה גדולה של קרקרים? The gold cup! או The crackers, please!",
        a: [
          { k: ['cup gold trophy'], r: "The gold cup! You are a star!" },
          { k: ['cracker'], r: "Crackers! Please give me one. Just one!" }
        ],
        o: "You get both! You are a star!",
        t: ["The gold cup!", "The crackers, please!"],
        x: [["the gold cup", 0], ["crackers", 1], ["both", -1], ["cup please", 0], ["money", -1]]
      }
    ],
    end: "What a show! You are a star. Thank you, and bye bye!"
  }
]);
