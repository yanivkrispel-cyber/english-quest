// Talk with Coco, level b1 (specs/talk.md; format and writing rules: tools/TALK-WRITING.md).
// Mission talks (t<mission id>) first, then the home scenes (s<level><nn>). Check: node test/talk-check.js
window.EQ_TALK = window.EQ_TALK || {};
// Talk to Coco, B1 mission talks (one per mission in docs/missions/b1.js). Format: tools/TALK-WRITING.md.
window.EQ_TALK.b1 = (window.EQ_TALK.b1 || []).concat([
  {
    id: 'tb1g01', title: 'What are you doing these days?',
    he: 'מדברים עם קוקו על הרגלים ועל מה שקורה עכשיו, עם present simple ו-continuous',
    turns: [
      {
        c: "Hello! I usually sell clothes, but this week I am learning to dance. What are you learning or doing these days?",
        he: 'מה אתם לומדים או עושים בתקופה הזאת? למשל: These days I am learning to play the guitar.',
        a: [],
        o: "Ooh, that sounds interesting! It is great to try new things.",
        t: ["I am learning to play the guitar.", "These days I am reading a great book.", "I am studying for a test this week."],
        x: [["i am learning guitar", -1], ["i learning to swim these days", -1], ["i am read a book", -1]]
      },
      {
        c: "And on a normal day, what do you usually do in the evening?",
        he: 'מה אתם עושים בדרך כלל בערב? למשל: I usually play football. או I do my homework.',
        a: [
          { k: ['football basketball tennis swim swimming dance dancing gym sport sports run running volleyball judo karate ballet'], r: "Sporty! In the evening I usually fly around my tree. That is my sport." },
          { k: ['homework study studying read reading book books lesson lessons'], r: "You work hard! I usually read fashion magazines after work." },
          { k: ['friend friends phone game games computer tv television watch play draw drawing music'], r: "Fun! I usually play cards with my parrot friends." }
        ],
        o: "That sounds like a good routine!",
        t: ["I usually play football with my friends.", "I usually do my homework first.", "I watch TV and play games."],
        x: [["i usually play basketball", 0], ["i do homework", 1], ["i am watching tv", 2], ["i eat and sleep", -1], ["i meeting my friends", 2], ["i go to swimming", 0]]
      },
      {
        c: "Many things change all the time. My shop is getting busier! What is getting better, bigger or more fun in your life these days?",
        he: 'מה משתנה אצלכם בתקופה הזאת? למשל: My English is getting better.',
        a: [],
        o: "Thank you for telling me! Change can be really exciting.",
        t: ["My English is getting better.", "My drawings are getting better.", "My team is getting stronger."],
        x: [["my english is get better", -1], ["i am getting taller", -1]]
      },
      {
        c: "I know a lot of words, and I love long ones! Which English word do you like the most, and why?",
        he: 'איזו מילה באנגלית אתם הכי אוהבים, ולמה? למשל: I like the word butterfly because it sounds funny.',
        a: [],
        o: "What a great word! I am adding it to my collection.",
        t: ["I like the word butterfly because it sounds funny.", "I love the word pizza, because I love pizza!", "My favourite word is awesome."],
        x: [["i am liking the word happy", -1], ["the word banana because is funny", -1]]
      }
    ],
    end: "You use the present simple and continuous like a star! See you soon!"
  },
  {
    id: 'tb1g02', title: 'Plans and predictions',
    he: 'מדברים עם קוקו על תוכניות ועל העתיד, עם will, going to ו-present continuous',
    turns: [
      {
        c: "I have big news: I am opening a second shop next month! What are you doing this weekend? Do you have any plans?",
        he: 'מה התוכניות שלכם לסוף השבוע? למשל: I am meeting my friends on Saturday.',
        a: [
          { k: ['friend friends cousin cousins'], r: "Seeing friends is the best plan. Have a great time together!" },
          { k: ['nothing rest sleep sleeping relax relaxing chill anything'], r: "A quiet weekend sounds perfect. Everyone needs a rest sometimes." },
          { k: ['go going goes visit visiting trip beach park match play playing party cinema movie film swim'], r: "Ooh, that sounds like a fun plan!" }
        ],
        o: "Whatever you do, I hope it is a fun weekend!",
        t: ["I am meeting my friends on Saturday.", "I am going to relax at home.", "We are going to the beach."],
        x: [["i meet my friends saturday", 0], ["i am going to sleep", 1], ["i am not doing anything", 1], ["we are going to the park", 2], ["i don't know yet", -1], ["pizza", -1]]
      },
      {
        c: "Let's guess the future! Do you think people will live on the Moon one day? Why or why not?",
        he: 'האם לדעתכם אנשים יגורו על הירח? למשל: Yes, I think people will live there. או No, it is too far.',
        a: [
          { k: ['no not never'], n: 'know', r: "Maybe you are right. The Moon is very far and very cold!" },
          { k: ['yes will sure maybe think probably'], r: "I think so too! I will open the first shop on the Moon." }
        ],
        o: "That is an interesting idea about the future!",
        t: ["Yes, I think people will live there one day.", "No, I don't think so. It is too far.", "Maybe, but not soon."],
        x: [["yes they will", 1], ["no it is too cold", 0], ["i think yes", 1], ["people will not live there", 0], ["i like cheese", -1], ["i don't know", -1]]
      },
      {
        c: "Oh no, I just dropped all my buttons on the floor! What will you do to help me?",
        he: 'קוקו הפילה כפתורים. מה תעשו כדי לעזור? למשל: I will help you pick them up.',
        a: [],
        o: "Thank you so much! You are a true friend.",
        t: ["I will help you pick them up.", "I'll find them for you.", "Don't worry, I will get a box."],
        x: [["i help you pick", -1], ["i will find them", -1]]
      },
      {
        c: "Now a prediction! What do you think phones will be like in twenty years? Why?",
        he: 'איך ייראו הטלפונים בעוד עשרים שנה, לדעתכם? למשל: I think phones will be inside our glasses.',
        a: [],
        o: "Ooh, interesting! Let's wait and see who is right.",
        t: ["I think phones will be inside our glasses.", "They will be really tiny.", "Maybe we won't need phones at all."],
        x: [["they will be very small", -1], ["phones will can fly", -1]]
      }
    ],
    end: "You talk about the future so well! See you next time!"
  },
  {
    id: 'tb1g03', title: 'Have you ever?',
    he: 'מספרים לקוקו על חוויות, עם present perfect ו-past simple',
    turns: [
      {
        c: "I have tried many crazy foods. Once I ate a chili pepper by mistake! Have you ever eaten something really strange?",
        he: 'אכלתם פעם משהו מוזר? למשל: Yes, I have eaten snails. או No, I have never eaten anything strange.',
        a: [
          { k: ['no not never'], n: 'know', r: "Not yet? One day you will find a strange food you love." },
          { k: ['yes have ate eaten eat tried try once ago'], r: "Brave! I have never eaten anything like that." }
        ],
        o: "Wow, food can be such an adventure!",
        t: ["Yes, I have eaten snails once.", "No, I have never eaten anything strange.", "Yes, I ate sushi last year."],
        x: [["yes i have", 1], ["no never", 0], ["i eat a frog once", 1], ["i didn't eat", 0], ["i like pasta", -1], ["yes i ate sushi", 1], ["i don't know", -1]]
      },
      {
        c: "Tell me about the best day you have had this year. What did you do?",
        he: 'ספרו על היום הכי טוב שהיה לכם השנה. למשל: I went to a water park with my friends.',
        a: [],
        o: "What a wonderful day! Thank you for telling me about it.",
        t: ["I went to a water park with my friends.", "We had a big party in the summer.", "I won a game last month."],
        x: [["i go to the beach with my friends", -1], ["we went to eilat", -1]]
      },
      {
        c: "What is something you have never done, but you really want to try?",
        he: 'מה עוד לא עשיתם אף פעם וממש רוצים לנסות? למשל: I have never seen snow.',
        a: [],
        o: "Ooh, I hope you try it soon! It sounds exciting.",
        t: ["I have never been on a plane.", "I have never tried surfing, but I want to.", "I have never seen snow."],
        x: [["i never see snow", -1], ["i have never been to paris", -1]]
      },
      {
        c: "I have just learned a new word: wonderful! What is something new you have learned this week, at school or anywhere?",
        he: 'מה למדתם השבוע? למשל: I have learned some new English words.',
        a: [],
        o: "Fabulous! Learning something new every week is great.",
        t: ["I have learned some new English words.", "I've learned how to cook pasta.", "This week I learned a card trick."],
        x: [["i learn new words", -1], ["i have learned to swim better", -1]]
      }
    ],
    end: "You have been a fabulous chat partner today! Bye for now!"
  },
  {
    id: 'tb1v01', title: 'Alarms, lie-ins and rushing',
    he: 'מדברים עם קוקו על השגרה: שעון מעורר, לישון עד מאוחר, למהר ולהירגע',
    turns: [
      {
        c: "Good morning! I overslept today and had to rush to the shop. What time do you usually set your alarm on school days?",
        he: 'לאיזו שעה אתם מכוונים את השעון המעורר? למשל: I set my alarm for half past six.',
        a: [
          { k: ['five six'], r: "So early! You are up before the birds, and I am a bird." },
          { k: ['seven eight nine'], r: "That is a sensible time. I set mine for seven too." },
          { k: ['not never no'], n: 'know', r: "No alarm? Lucky you! Your body clock must be very good." }
        ],
        o: "Thank you! Every morning is a little different.",
        t: ["I set my alarm for half past six.", "I usually set it for seven o'clock.", "I don't need an alarm."],
        x: [["at 6", 0], ["i set alarm seven o clock", 1], ["i don't set alarm", 2], ["half past seven", 1], ["my mum wakes me", -1], ["six thirty", 0], ["i don't know", -1]]
      },
      {
        c: "On weekends I love to have a lie-in until ten. Do you prefer a lie-in or getting up early? Why?",
        he: 'אתם מעדיפים לישון עד מאוחר או לקום מוקדם? למשל: I prefer a lie-in. או I like getting up early.',
        a: [
          { k: ['lie sleep sleeping late bed'], r: "Me too! A lie-in is the best way to start a weekend." },
          { k: ['early morning'], r: "Wow, an early bird! You have the whole day for fun." }
        ],
        o: "Both are good. Everyone has their own rhythm.",
        t: ["I prefer a lie-in, because I am tired.", "I like getting up early to play.", "I love to sleep late on Saturday."],
        x: [["lie in", 0], ["i love sleeping", 0], ["get up early", 1], ["i wake up early morning", 1], ["it depends", -1]]
      },
      {
        c: "When I run late, I rush and forget my hat! What do you do when you are running late in the morning?",
        he: 'מה אתם עושים כשאתם מאחרים בבוקר? למשל: I eat my breakfast on the way.',
        a: [],
        o: "Oh, I know that feeling! Running late is no fun.",
        t: ["I run to the bus stop.", "I eat my breakfast on the way.", "I get dressed really fast."],
        x: [["i am running very fast", -1], ["i don't eat breakfast", -1]]
      },
      {
        c: "After a busy day, I unwind with a cup of tea and a good song. How do you unwind after school?",
        he: 'איך אתם נרגעים אחרי יום עמוס? למשל: I unwind by listening to music.',
        a: [],
        o: "That sounds so relaxing. I might try it too!",
        t: ["I unwind by listening to music.", "I play games on my computer.", "I go for a walk with my dog."],
        x: [["i listen music", -1], ["i watch tv and eat snack", -1]]
      },
      {
        c: "And at the weekend, what do you like to catch up on? Sleep, a TV series, or something else?",
        he: 'מה אתם משלימים בסוף השבוע? למשל: I catch up on sleep. או I catch up on my favourite series.',
        a: [],
        o: "Good plan! Weekends are perfect for catching up.",
        t: ["I catch up on sleep.", "I catch up on my favourite series.", "I catch up on homework."],
        x: [["i catch up sleeping", -1], ["my series on netflix", -1]]
      }
    ],
    end: "You know so many routine words now! Have a relaxing evening, bye!"
  },
  {
    id: 'tb1v02', title: 'Friends you can trust',
    he: 'מדברים עם קוקו על חברות: get on well, make up, trust ועוד',
    turns: [
      {
        c: "My friend Tiki and I have a lot in common: we both love hats! What do you and one of your friends have in common?",
        he: 'מה משותף לכם ולאחד החברים שלכם? למשל: We both love football.',
        a: [],
        o: "That is lovely! Sharing things makes a friendship stronger.",
        t: ["We both love football.", "We both like the same music.", "We have a lot in common: we love drawing."],
        x: [["we both like games", -1], ["we love the same songs", -1]]
      },
      {
        c: "Do you get on well with new people quickly, or do you need time to get to know them?",
        he: 'אתם מתחברים מהר לאנשים חדשים, או צריכים זמן? למשל: I get on well with people quickly. או I need time.',
        a: [
          { k: ['time slow slowly shy'], r: "That is fine. Getting to know someone slowly is often the best way." },
          { k: ['quick quickly fast easy easily soon'], r: "Lucky you! Making friends quickly is a great talent." }
        ],
        o: "Everyone is different, and that is okay.",
        t: ["I get on well with people quickly.", "I need time to get to know them.", "I am a bit shy at first."],
        x: [["i get on quickly", 1], ["i need time", 0], ["i am shy", 0], ["very fast", 1], ["it depend on the person", -1]]
      },
      {
        c: "Sometimes friends fall out, and then they make up. What is the best way to make up after an argument?",
        he: 'מה הדרך הכי טובה להשלים אחרי ריב? למשל: Say sorry and talk about it.',
        a: [],
        o: "That is wise advice. Friends who make up often become even closer.",
        t: ["Say sorry and talk about it.", "Give each other some time, then talk.", "Do something fun together."],
        x: [["say sorry", -1], ["to talk and to say sorry", -1]]
      },
      {
        c: "In your opinion, what makes someone a friend you can trust and rely on?",
        he: 'מה הופך מישהו לחבר שאפשר לסמוך עליו? למשל: A good friend is always honest with you.',
        a: [],
        o: "I agree. A friend like that is worth more than a hundred hats!",
        t: ["A good friend is always honest with you.", "Someone who helps you when you need it.", "A friend who listens and doesn't laugh at you."],
        x: [["he is honest", -1], ["somebody who help you always", -1]]
      }
    ],
    end: "Thank you for a lovely chat about friends! See you soon, my friend!"
  },
  {
    id: 'tb1l01', title: "Tom's year of jobs",
    he: 'מדברים עם קוקו על Tom, שעבד וטייל שנה שלמה',
    turns: [
      {
        c: "Tom picked fruit, washed dishes and taught English. Which of his three jobs would you choose, and why?",
        he: 'איזו עבודה של Tom הייתם בוחרים, ולמה? למשל: I would pick fruit because I love being outside.',
        a: [
          { k: ['fruit fruits farm'], r: "The farm job! Hard and hot, but you can be outside all day." },
          { k: ['dish dishes wash washing caf cafe kitchen'], r: "Washing dishes! Not exciting, but you can meet lots of people." },
          { k: ['teach teacher teaching taught english children child kid kids'], r: "Teaching, like Tom's favourite! He said the kids were so funny." }
        ],
        o: "Good choice! Every job teaches you something new.",
        t: ["I would pick fruit because I love being outside.", "I'd teach English, because kids are funny.", "Washing dishes, because it's easy."],
        x: [["the fruit job", 0], ["i will teach english to kids", 2], ["wash dishes in the cafe", 1], ["teaching children because i like kids", 2], ["i don't know", -1]]
      },
      {
        c: "Tom paid for his trip with jobs. Would you like to work and travel for a year one day? Why or why not?",
        he: 'הייתם רוצים לעבוד ולטייל שנה? למשל: Yes, I would love to see the world. או No, I would miss my home.',
        a: [
          { k: ['maybe perhaps depend if'], r: "A careful traveller! With a friend, it is much more fun." },
          { k: ['no not never'], n: 'yes know', r: "That is fair. Home is a wonderful place too." },
          { k: ['yes would want love sure travel'], r: "Ooh, an adventurer! I hope you do it one day." }
        ],
        o: "Interesting! It is a big decision to make.",
        t: ["Yes, I would love to see the world.", "No, I would miss my home too much.", "Maybe, if I could go with a friend."],
        x: [["yes i would", 2], ["no i like my home", 1], ["maybe with my friend", 0], ["yes because i want to see japan", 2], ["i will go yes but not alone", 2], ["i like pasta", -1]]
      },
      {
        c: "Tom was homesick sometimes, so he called home every week. What would you miss most if you were far from home?",
        he: 'מה הכי הייתם מתגעגעים אליו רחוק מהבית? למשל: I would miss my friends the most.',
        a: [],
        o: "I understand. Missing things shows how much you love them.",
        t: ["I would miss my friends the most.", "I would miss the food at home.", "I would miss my dog."],
        x: [["my friends", -1], ["i will miss my cat", -1]]
      },
      {
        c: "Tom's advice was to learn a few words and say yes to new things. What advice would you give a traveller?",
        he: 'איזו עצה הייתם נותנים למטייל? למשל: Try the local food!',
        a: [],
        o: "Great advice! I will tell all the travellers in my shop.",
        t: ["Always take a map and a good friend.", "Try the local food!", "Don't take too many clothes."],
        x: [["take a lot of money", -1], ["learn the language", -1]]
      }
    ],
    end: "Thank you for travelling with me today! Say yes to new things, bye!"
  },
  {
    id: 'tb1l02', title: 'Hostel, tent or hotel?',
    he: 'מדברים עם קוקו על החופשות של Dana ו-Eli ואיפה הכי כיף לישון',
    turns: [
      {
        c: "Dana stayed in a crowded hostel with six other girls. Would you like a busy room like that, or a quiet room? Why?",
        he: 'הייתם רוצים חדר מלא אנשים כמו של Dana, או חדר שקט? למשל: A busy room sounds fun. או I prefer a quiet room.',
        a: [
          { k: ['not no', 'busy crowded people noisy loud noise'], n: 'know', r: "I understand. A quiet room is much more relaxing." },
          { k: ['quiet own alone calm peace space'], n: 'not', r: "A quiet room! Then you can sleep well and wake up happy." },
          { k: ['busy crowded fun people friend friends'], r: "You are so friendly! You could meet travellers from all over the world." }
        ],
        o: "Thank you! Everyone has a different idea of a good holiday.",
        t: ["A busy room sounds fun.", "I prefer a quiet room.", "I don't like crowded rooms."],
        x: [["busy is fun", 2], ["quiet room please", 1], ["i don't like crowded", 0], ["i like to meet new people", 2], ["no people make noise", 0], ["no i don't like noise", 0], ["what is a hostel", -1], ["i don't know", -1]]
      },
      {
        c: "Eli's tent wasn't waterproof, and everything got wet! What would you take with you on a camping trip?",
        he: 'מה הייתם לוקחים לטיול קמפינג? למשל: I would take a waterproof jacket.',
        a: [],
        o: "Good thinking! And make sure your tent is waterproof too.",
        t: ["I would take a waterproof jacket.", "A torch, snacks and warm clothes.", "I'd take a good book and a raincoat."],
        x: [["i take a flashlight", -1], ["food and water and a phone", -1]]
      },
      {
        c: "In the end, Eli's family gave up and found a hotel. Do you think that was a good decision? Why?",
        he: 'הם ויתרו ועברו למלון. החלטה טובה? למשל: Yes, because everything was wet. או No, rain is part of the adventure.',
        a: [
          { k: ['no not'], n: 'yes know', r: "Ha! You are tougher than Eli. A little rain is part of the fun." },
          { k: ['yes good right agree dry wet rain smart same'], r: "I agree! Dry beds and a great breakfast sound much better." }
        ],
        o: "Interesting opinion! Camping in the rain is a real adventure.",
        t: ["Yes, because everything was wet.", "No, a bit of rain is part of the adventure.", "Yes, I would do the same."],
        x: [["yes because it rain", 1], ["no they need to stay", 0], ["i agree with them", 1], ["i don't agree", 0], ["i like tents", -1]]
      },
      {
        c: "Hostel, campsite or hotel: where would you most like to stay on holiday, and why?",
        he: 'איפה הכי הייתם רוצים לישון בחופשה: hostel, campsite או hotel? למשל: A hotel, because it is comfortable.',
        a: [
          { k: ['hostel hostels'], r: "A hostel! Cheap, busy and full of new friends." },
          { k: ['camp camping campsite tent tents'], r: "Camping! Just remember a waterproof tent." },
          { k: ['hotel hotels'], r: "A hotel! Dry beds and a great breakfast, like Eli." }
        ],
        o: "Great choice! Every place has its own fun.",
        t: ["A hotel, because it is comfortable.", "A campsite, because I love nature.", "A hostel, to meet new people."],
        x: [["hotel", 2], ["camping near the lake", 1], ["a tent by the sea", 1], ["the hostel is cheap", 0], ["my grandma's house", -1]]
      }
    ],
    end: "Wherever you sleep, I hope it is dry! Bye for now!"
  },
  {
    id: 'tb1l03', title: 'Teachers who believe in us',
    he: 'מדברים עם קוקו על Mr Clark ועל Sam, ועל מה שעוזר לנו לנסות שוב',
    turns: [
      {
        c: "Mister Clark was strict, but he really cared. Do you think strict teachers are good teachers? Why or why not?",
        he: 'מורים קפדנים הם מורים טובים? למשל: Yes, because you learn more. או It depends on the teacher.',
        a: [
          { k: ['depend sometimes maybe both'], r: "Good point. A bit strict and a bit kind is perfect." },
          { k: ['no not'], n: 'yes know', r: "I see. Kind teachers can make lessons really fun." },
          { k: ['yes good agree learn care cares'], r: "I agree. Strict teachers often care a lot, like Mister Clark." }
        ],
        o: "Interesting! Every teacher has a different style.",
        t: ["Yes, because you learn more.", "No, I prefer kind teachers.", "It depends on the teacher."],
        x: [["yes they are good", 2], ["no i don't like strict", 1], ["it depend", 0], ["sometimes yes", 0], ["my teacher is funny", -1]]
      },
      {
        c: "Sam failed his history exam because he didn't study. What would you tell a friend who has just failed an exam?",
        he: 'מה הייתם אומרים לחבר שנכשל במבחן? למשל: Don’t worry, you can try again.',
        a: [],
        o: "That is kind. Your words could really encourage someone.",
        t: ["Don't worry, you can try again.", "Let's study together next time.", "Everyone fails sometimes. Make a plan!"],
        x: [["don't worry it's okay", -1], ["i will help him study", -1]]
      },
      {
        c: "Sam's parents weren't angry. They just asked about his plan. Why do you think that helped him?",
        he: 'למה לדעתכם זה עזר ל-Sam? למשל: He felt that they believed in him.',
        a: [],
        o: "Good thinking. When people believe in us, we try harder.",
        t: ["Because he didn't feel bad.", "He felt that they believed in him.", "Because a plan helps you to start again."],
        x: [["because they not shout", -1], ["he felt better", -1]]
      },
      {
        c: "I need encouragement when I sing! What encourages you to try harder when something is difficult?",
        he: 'מה נותן לכם כוח להתאמץ כשקשה? למשל: When I see that I am getting better.',
        a: [],
        o: "That is a great thing to know about yourself.",
        t: ["When my friends cheer for me.", "When I see that I'm getting better.", "A reward, like a sweet!"],
        x: [["my friends help me", -1], ["when i win", -1]]
      }
    ],
    end: "What a great chat! Remember, I always believe in you. See you soon!"
  },
  {
    id: 'tb1r01', title: 'Five stops by train',
    he: 'מדברים עם קוקו על הטיול של Noa ברכבת באירופה',
    turns: [
      {
        c: "Noa visited Paris, Amsterdam, Berlin, Prague and Vienna. Which stop would you choose, and why?",
        he: 'לאיזו עיר מהטיול הייתם בוחרים, ולמה? למשל: Paris, because I want to see the Eiffel Tower.',
        a: [
          { k: ['paris eiffel croissant croissants france'], r: "Paris! The Eiffel Tower and the best croissants of your life." },
          { k: ['amsterdam bike bikes bicycle'], r: "Amsterdam! Just watch out for all those bikes." },
          { k: ['vienna concert music'], r: "Vienna, the city of music! A concert in an old hall sounds magical." },
          { k: ['berlin prague history wall cafe caf cards'], r: "Great choice! Old streets, history and cosy cafés." }
        ],
        o: "Great choice! Every city on that trip sounds amazing.",
        t: ["Paris, because I want to see the Eiffel Tower.", "Amsterdam, because I love riding bikes.", "Vienna, because I like music."],
        x: [["paris", 0], ["i choose amsterdam for the bikes", 1], ["berlin because the history", 3], ["prague", 3], ["vienna because concert", 2], ["london", -1]]
      },
      {
        c: "Noa says the train is slower than flying, but you see so much more. Would you rather travel by train or by plane?",
        he: 'אתם מעדיפים רכבת או מטוס? למשל: The train, because you can see a lot. או I would rather fly.',
        a: [
          { k: ['plane planes fly flying flight airplane aeroplane fast faster quick quicker'], r: "A fast traveller! You get there in no time." },
          { k: ['train trains agree window windows see slow'], r: "Me too! You can watch the rivers and castles go by." }
        ],
        o: "Both are fun ways to travel!",
        t: ["The train, because you can see a lot.", "I'd rather fly, because it's faster.", "I agree with Noa, the train is better."],
        x: [["train", 1], ["plane is more fast", 0], ["i agree with her", 1], ["flying because is fast", 0], ["by car", -1]]
      },
      {
        c: "In Prague it rained all day, so they played cards in a cosy café. What do you like doing on a rainy day?",
        he: 'מה אתם אוהבים לעשות ביום גשום? למשל: I like watching films under a blanket.',
        a: [],
        o: "Cosy! A rainy day can be one of the best days.",
        t: ["I like watching films under a blanket.", "I play board games with my friends.", "I read a book and drink hot chocolate."],
        x: [["i watch movies", -1], ["i play in the rain", -1]]
      },
      {
        c: "Noa says the best moments are the ones you don't expect. What is a nice surprise you have had?",
        he: 'ספרו על הפתעה נעימה שהייתה לכם. למשל: Once my friends made me a surprise party.',
        a: [],
        o: "How lovely! Surprises make the best stories.",
        t: ["Once my friends made me a surprise party.", "I found money in my old jacket!", "It snowed on our trip to the north."],
        x: [["i get a puppy", -1], ["my friend give me a present", -1]]
      }
    ],
    end: "Pack light and enjoy every surprise! Bye for now!"
  },
  {
    id: 'tb1u02', title: 'Another parrot called Coco!',
    he: 'קוקו מדבר על התוכי מהחדשות, שקוראים לו בדיוק כמו לו',
    turns: [
      {
        c: "Ooh, the parrot in the story is called Coco, just like me! Do you think a parrot can really work in a shop? Why?",
        he: 'האם תוכי באמת יכול לעבוד בחנות? למשל: Yes, because parrots are very clever. או No, parrots can not count money!',
        a: [
          { k: ['no not'], n: 'yes know', r: "Hmm! I work in a shop every day, and I am a parrot." },
          { k: ['yes can sure think clever smart maybe'], r: "Thank you! Parrots are very clever, and we love customers." }
        ],
        o: "Well, I run a clothes shop, so I think it is possible!",
        t: ["Yes, because parrots are very clever.", "No, parrots can't count money!", "Maybe, if she just says hello."],
        x: [["yes they are smart", 1], ["no it is not possible", 0], ["parrots can't work", 0], ["maybe a little", 1], ["i have a cat", -1]]
      },
      {
        c: "Coco used to be shy, but now she is the star of the shop. What is something you used to do, but don't do any more?",
        he: 'מה הייתם עושים פעם ועכשיו כבר לא? למשל: I used to watch cartoons every day.',
        a: [],
        o: "Interesting! We all change so much as we grow up.",
        t: ["I used to sleep with a teddy bear.", "I used to watch cartoons every day.", "I used to be very shy."],
        x: [["i use to play with dolls", -1], ["i was very shy", -1]]
      },
      {
        c: "Coco was shown on local TV, and now people come from all over the city. Would you like to be on TV? Why or why not?",
        he: 'הייתם רוצים להופיע בטלוויזיה? למשל: Yes, it would be exciting. או No, I would be too nervous.',
        a: [
          { k: ['maybe perhaps depend if'], r: "It depends on the show! A cooking show could be fun." },
          { k: ['no not never'], n: 'yes know', r: "Fair enough. Being famous is not for everyone." },
          { k: ['yes would want love sure famous cool fun exciting'], r: "Fabulous! You would be a big star, just like Coco." }
        ],
        o: "Interesting! TV can be fun, but it is a lot of work.",
        t: ["Yes, it would be really exciting.", "No, I would be too nervous.", "Maybe, if it was a sports show."],
        x: [["yes i want to be famous", 2], ["no i am shy", 1], ["maybe on a cooking show", 0], ["yes but not alone", 2], ["what channel", -1]]
      },
      {
        c: "The owner says Coco must be his best employee. If you had a shop, what would you sell, and why?",
        he: 'אם הייתה לכם חנות, מה הייתם מוכרים, ולמה? למשל: I would sell sports shoes, because I love sport.',
        a: [],
        o: "Ooh, I would definitely visit your shop!",
        t: ["I would sell sports shoes, because I love sport.", "I'd sell ice cream, because everyone loves it.", "A bookshop, because books are amazing."],
        x: [["i will sell toys", -1], ["candy because i love candy", -1]]
      }
    ],
    end: "Talking to you is my favourite part of the day. Goodbye, and come again!"
  },
  {
    id: 'tb1g04', title: 'What have you been doing?',
    he: 'מדברים עם קוקו על מה שעשיתם לאחרונה, עם have been + ing',
    turns: [
      {
        c: "I have been sewing all morning, and I have made three hats! What have you been doing today?",
        he: 'מה עשיתם היום? למשל: I have been studying all morning.',
        a: [],
        o: "Busy, busy! It sounds like a full day.",
        t: ["I have been studying all morning.", "I've been playing football with my friends.", "I have been reading a great book."],
        x: [["i am playing all day", -1], ["i been at school", -1]]
      },
      {
        c: "How long have you been learning English? A long time, or just a few months?",
        he: 'כמה זמן אתם לומדים אנגלית? למשל: I have been learning English for five years.',
        a: [
          { k: ['month months week weeks'], r: "Only a short time, and you already speak so well!" },
          { k: ['year years since long ages grade class'], r: "Wow, you have been learning for ages! It shows." }
        ],
        o: "Every day you learn a little more. Well done!",
        t: ["I have been learning English for five years.", "I've been learning it since first grade.", "Only for a few months."],
        x: [["i am learning english for 5 years", 1], ["since first grade", 1], ["two months", 0], ["for a long time", 1], ["i don't remember", -1]]
      },
      {
        c: "And how many English words do you think you have learned? A hundred, a thousand, or even more?",
        he: 'כמה מילים באנגלית למדתם עד היום? למשל: I think I have learned about a thousand words.',
        a: [
          { k: ['thousand thousands million millions 1000 2000 3000 5000 10000 lot lots count'], n: 'not', r: "So many words! That is a fabulous collection, even bigger than mine." },
          { k: ['hundred hundreds 100 200 300 500 few'], r: "That is a great start, and you learn more every day." }
        ],
        o: "Nobody can count them all! Every word is a treasure.",
        t: ["I think I have learned about a thousand words.", "Maybe five hundred words.", "I have learned more than I can count!"],
        x: [["a thousand", 0], ["i learn 500 words", 1], ["a hundred maybe", 1], ["more than 2000", 0], ["i have no idea", -1], ["not a lot maybe a hundred", 1]]
      },
      {
        c: "Why are my feathers so messy? Because I've been flying in the wind! Now imagine you look really tired. What have you been doing?",
        he: 'דמיינו שאתם נראים עייפים מאוד. מה עשיתם? למשל: I have been running all afternoon.',
        a: [],
        o: "Ha! No wonder you are tired. Have a good rest!",
        t: ["I have been running all afternoon.", "I've been doing homework for hours.", "I have been dancing all night!"],
        x: [["i was playing football", -1], ["i run a lot", -1]]
      }
    ],
    end: "You have been working so hard today! Keep it up, and see you soon!"
  },
  {
    id: 'tb1g05', title: 'For, during and while',
    he: 'מדברים עם קוקו על שינה, חופשות ושירים, עם for, during ו-while',
    turns: [
      {
        c: "Koalas sleep for about twenty hours a day! I sleep for eight. How many hours do you usually sleep?",
        he: 'כמה שעות אתם ישנים בדרך כלל? למשל: I usually sleep for about nine hours.',
        a: [
          { k: ['nine ten eleven twelve'], r: "Lots of sleep! You are almost a koala." },
          { k: ['seven eight'], r: "About the same as me! I sleep for eight hours too." },
          { k: ['three four five six'], r: "Short nights! I hope you can have a lie-in at the weekend." }
        ],
        o: "Sleep is wonderful. I could talk about it for hours!",
        t: ["I usually sleep for about nine hours.", "I sleep for eight hours.", "Only about six hours."],
        x: [["9 hours", 0], ["i sleep 8 hours", 1], ["for seven hour", 1], ["ten", 0], ["only 6 hours", 2], ["it depends", -1]]
      },
      {
        c: "During the night, I dream about hats. What do you like to do during the summer holidays?",
        he: 'מה אתם אוהבים לעשות בחופש הגדול? למשל: During the summer I go to the beach a lot.',
        a: [],
        o: "Sounds like a perfect summer to me!",
        t: ["During the summer I go to the beach a lot.", "I go to a summer camp.", "I sleep late and meet friends."],
        x: [["i go to the sea", -1], ["in the summer i play all day", -1]]
      },
      {
        c: "While I am cooking, I always sing. What do you usually do while you are waiting for a bus or a friend?",
        he: 'מה אתם עושים בזמן שאתם מחכים? למשל: While I am waiting, I listen to music.',
        a: [],
        o: "Good to know! Waiting is much easier with something to do.",
        t: ["While I'm waiting, I listen to music.", "I play games on my phone.", "I look at the people around me."],
        x: [["i am listening music", -1], ["i play on the phone", -1]]
      },
      {
        c: "Which song could you listen to for hours, and why?",
        he: 'לאיזה שיר הייתם יכולים להקשיב שעות, ולמה? למשל: I could listen to happy songs for hours.',
        a: [],
        o: "Ooh, I will play it in my shop!",
        t: ["I could listen to happy songs for hours.", "Pop songs, because they make me dance.", "Any song from my favourite film."],
        x: [["i like taylor swift", -1], ["the song from frozen", -1]]
      }
    ],
    end: "I could talk with you for hours! See you soon!"
  },
  {
    id: 'tb1g06', title: 'The best, the funniest',
    he: 'משווים עם קוקו עונות, חיות ואוכל, עם er, more ו-the most',
    turns: [
      {
        c: "Venus is hotter than Mercury, which surprised me! Which season is better, summer or winter? Why?",
        he: 'איזו עונה יותר טובה, קיץ או חורף? למשל: Summer is better, because it is warmer.',
        a: [
          { k: ['summer'], n: 'winter', r: "Summer! Longer days and warmer weather. The best!" },
          { k: ['winter'], n: 'summer', r: "Winter! Cosier clothes and better jumpers, I think." },
          { k: ['spring autumn fall'], r: "Ooh, a middle season! Not too hot and not too cold." }
        ],
        o: "Every season has something special, I think!",
        t: ["Summer is better, because it is warmer.", "Winter is the best season for me.", "I prefer spring, because it is nicer."],
        x: [["summer because is more hot", 0], ["winter is more better", 1], ["spring", 2], ["i like both", -1], ["winter because summer is too hot", -1]]
      },
      {
        c: "I think the funniest animal is the penguin. What is the funniest or the cleverest animal, in your opinion? Why?",
        he: 'מה החיה הכי מצחיקה או הכי חכמה לדעתכם? למשל: I think dolphins are the cleverest.',
        a: [],
        o: "Good choice! But parrots are still the cleverest, of course.",
        t: ["The funniest animal is the monkey.", "I think dolphins are the cleverest.", "Cats are the funniest, because they do crazy things."],
        x: [["the most funny is monkey", -1], ["dogs because they are smart", -1]]
      },
      {
        c: "Is it easier to learn English with songs, films, books or games? Which one helps you the most?",
        he: 'מה הכי עוזר לכם ללמוד אנגלית? למשל: Songs help me the most.',
        a: [
          { k: ['song songs music sing singing'], r: "Songs! They are the easiest way to remember words, I think." },
          { k: ['film films movie movies series show shows tv youtube'], r: "Films! You hear how people really talk." },
          { k: ['book books read reading story stories'], r: "Books! Reading is slower, but you learn the most words." },
          { k: ['game games play playing'], r: "Games! Learning is more fun when you play." }
        ],
        o: "Great! Any way that works for you is the best way.",
        t: ["Songs help me the most.", "Films are easier, because I hear real English.", "I learn more from games."],
        x: [["songs", 0], ["movies is more easy", 1], ["reading books", 2], ["video games", 3], ["my teacher", -1]]
      },
      {
        c: "Now tell me, what is the most delicious food in the world? Why is it better than the rest?",
        he: 'מה האוכל הכי טעים בעולם, ולמה? למשל: I think falafel is the best, because it is crunchy.',
        a: [],
        o: "Mmm! Now I am the hungriest parrot in the world.",
        t: ["Pizza is the most delicious food.", "I think falafel is the best, because it's crunchy.", "Chocolate! It is sweeter than anything."],
        x: [["pizza is the most best", -1], ["sushi because is more tasty", -1]]
      }
    ],
    end: "You are the best at comparing things! Take care!"
  },
  {
    id: 'tb1g07', title: 'A dog in a hat',
    he: 'מדברים עם קוקו על דברים מצחיקים, טבע ועבודות, עם a, an ו-the',
    turns: [
      {
        c: "Yesterday I saw a dog in a hat. The hat was green! What is the funniest thing you have ever seen outside?",
        he: 'מה הדבר הכי מצחיק שראיתם ברחוב? למשל: I saw a cat on a bike!',
        a: [],
        o: "Ha! The street is full of surprises.",
        t: ["I saw a cat on a bike!", "Once I saw a man with a parrot on his head.", "I saw a dog wearing shoes."],
        x: [["i saw dog with glasses", -1], ["a man dancing in the street", -1]]
      },
      {
        c: "The Pacific is the biggest ocean in the world. Which would you rather see: the mountains, the desert or the sea? Why?",
        he: 'מה הייתם מעדיפים לראות: the mountains, the desert או the sea? למשל: The sea, because I love swimming.',
        a: [
          { k: ['mountain mountains snow hill hills'], r: "The mountains! Fresh air and amazing views." },
          { k: ['desert sand dunes'], r: "The desert! The stars at night must be beautiful." },
          { k: ['sea ocean beach swim swimming waves'], r: "The sea! I love the waves and the warm sand." }
        ],
        o: "Ooh, nature is amazing everywhere!",
        t: ["The mountains, because I love snow.", "The sea, because I love swimming.", "The desert, because it is quiet."],
        x: [["mountains", 0], ["the desert is quiet", 1], ["i love the beach", 2], ["the ocean", 2], ["the city", -1]]
      },
      {
        c: "I am a shopkeeper, and my friend is an artist. What would you like to be one day?",
        he: 'מה הייתם רוצים להיות? שימו לב ל-a ול-an, למשל: I would like to be an engineer.',
        a: [],
        o: "Ooh, interesting! There are so many great jobs out there.",
        t: ["I would like to be a doctor.", "I want to be an engineer.", "I'd like to be a vet."],
        x: [["i want to be doctor", -1], ["a football player", -1]]
      },
      {
        c: "Dogs are loyal, and cats are independent. Which animals do you like more, dogs or cats? Why?",
        he: 'מה אתם אוהבים יותר, כלבים או חתולים? למשל: Dogs, because they are friendly.',
        a: [
          { k: ['both'], r: "Both! You have a big heart for animals." },
          { k: ['dog dogs puppy'], n: 'cat', r: "Dogs! They are loyal and always happy to see you." },
          { k: ['cat cats kitten kittens kitty'], n: 'dog', r: "Cats! They are calm and very clever." }
        ],
        o: "They are both lovely. But parrots are the best, of course!",
        t: ["Dogs, because they are friendly.", "I like cats more, because they are calm.", "I like both of them."],
        x: [["dogs", 1], ["i love puppies", 1], ["cat is more cute", 2], ["both", 0], ["cats because dogs are loud", -1], ["rabbits", -1]]
      }
    ],
    end: "You used a, an and the really well! See you soon!"
  },
  {
    id: 'tb1g08', title: 'One more, please!',
    he: 'מדברים עם קוקו על חטיפים, כוכבי לכת ובגדים, עם another, other ו-the other',
    turns: [
      {
        c: "Some snacks are so good that you always want another one. Which snack is like that for you?",
        he: 'מאיזה חטיף אתם תמיד רוצים עוד אחד? למשל: I always want another cookie.',
        a: [],
        o: "Mmm! I always want another cracker, so I understand.",
        t: ["I always want another cookie.", "Chips! I can never stop at one.", "I always want another piece of chocolate."],
        x: [["bamba i want more", -1], ["i want an other cookie", -1]]
      },
      {
        c: "Some people love mornings, and others love evenings. Which kind of person are you? Why?",
        he: 'אתם אנשים של בוקר או של ערב? למשל: I am a morning person. או I love the evening.',
        a: [
          { k: ['morning mornings'], n: 'not evening night', r: "A morning person! You are full of energy when others are still sleeping." },
          { k: ['evening evenings night nights late'], r: "An evening person! You are full of ideas while the others sleep." }
        ],
        o: "Interesting! Some people are a bit of both.",
        t: ["I am a morning person.", "I love the evening, because I can relax.", "I'm a night person."],
        x: [["i like the morning", 0], ["evening because is quiet", 1], ["night", 1], ["i am not a morning person", -1], ["both", -1]]
      },
      {
        c: "Seven other planets go around our Sun. If you could visit another planet, which one would you choose? Why?",
        he: 'לאיזה כוכב לכת הייתם טסים? למשל: I would visit Mars, because it is red.',
        a: [],
        o: "What an adventure! I will make you a special space hat.",
        t: ["I would visit Mars, because it is red.", "Saturn, because of its beautiful rings.", "Jupiter, because it is the biggest."],
        x: [["mars because it is red", -1], ["i go to the moon", -1]]
      },
      {
        c: "I have two hats: one is red, and the other is gold. What are your two favourite things to wear?",
        he: 'מה שני הבגדים שאתם הכי אוהבים ללבוש? למשל: One is my blue hoodie, and the other is my jeans.',
        a: [],
        o: "Fabulous! You have great style.",
        t: ["One is my blue hoodie, and the other is my black jeans.", "My white trainers and my favourite T-shirt.", "One is a cap, and the other is a jacket."],
        x: [["my hoodie and my shoes", -1], ["one is a dress and other is a hat", -1]]
      }
    ],
    end: "Another great chat with you! See you another day!"
  },
  {
    id: 'tb1g09', title: 'Can you whistle?',
    he: 'מדברים עם קוקו על מה שידעתם, יודעים ותדעו לעשות, עם can, could ו-be able to',
    turns: [
      {
        c: "When I was a baby parrot, I couldn't fly, but I could sing. What could you do when you were little?",
        he: 'מה ידעתם לעשות כשהייתם קטנים? למשל: I could swim when I was five.',
        a: [],
        o: "How sweet! Little kids learn so many things.",
        t: ["I could swim when I was five.", "I could ride a bike when I was six.", "I couldn't read, but I could draw."],
        x: [["i can swim when i was 5", -1], ["i could draw very good", -1]]
      },
      {
        c: "I have never been able to whistle, because I have a beak! Can you whistle?",
        he: 'אתם יודעים לשרוק? למשל: Yes, I can whistle. או No, I can not whistle at all.',
        a: [
          { k: ['no not'], n: 'yes know', r: "Me neither! We can start a no-whistle club." },
          { k: ['yes can could little bit'], r: "Lucky you! I wish I could whistle, but I have a beak." }
        ],
        o: "Whistling is hard, even for some people without beaks!",
        t: ["Yes, I can whistle very loudly.", "No, I can't whistle at all.", "I could whistle when I was younger."],
        x: [["yes i can", 1], ["no i can't", 0], ["i can not whistle", 0], ["a little bit", 1], ["what is whistle", -1]]
      },
      {
        c: "Which language would you love to be able to speak one day, and why?",
        he: 'איזו שפה הייתם רוצים לדעת לדבר יום אחד, ולמה? למשל: I would love to be able to speak Japanese.',
        a: [],
        o: "Fabulous! Words in every language are my favourite thing.",
        t: ["I'd love to be able to speak Japanese.", "Spanish, because I love Spanish songs.", "French, because it sounds beautiful."],
        x: [["i want to can speak korean", -1], ["chinese because is hard", -1]]
      },
      {
        c: "If you could have one superpower, what would it be? What would you be able to do with it?",
        he: 'איזה כוח-על הייתם רוצים, ומה הייתם יכולים לעשות איתו? למשל: I could fly, so I would be able to visit any country.',
        a: [],
        o: "Ooh, what a superpower! Please use it for good things.",
        t: ["I could fly, so I'd be able to visit any country.", "I would be invisible.", "I would be able to read minds."],
        x: [["i will fly", -1], ["to be invisible and go everywhere", -1]]
      }
    ],
    end: "You can do so many things, and soon you will be able to do even more! Bye!"
  },
  {
    id: 'tb1u01', title: 'A garden at school',
    he: 'מדברים עם קוקו על הגינה של Oranim School ועל עבודה בצוות',
    turns: [
      {
        c: "The students at Oranim School grow tomatoes, cucumbers and herbs. Would you like a garden at your school? Why?",
        he: 'הייתם רוצים גינה בבית הספר? למשל: Yes, because it is fun to grow food. או No, it is too hot.',
        a: [
          { k: ['maybe perhaps depend if'], r: "Good idea! A small garden could be a great start." },
          { k: ['no not'], n: 'yes know', r: "Fair enough. Gardening is hard work, and it can be very hot." },
          { k: ['yes would want love sure fun grow garden'], r: "Me too! Fresh tomatoes from your own garden taste much better." }
        ],
        o: "Interesting! A garden is a big project for a school.",
        t: ["Yes, because it is fun to grow food.", "No, it is too much work.", "Maybe, if it has flowers too."],
        x: [["yes it is fun", 2], ["no i don't like plants", 1], ["maybe a small one", 0], ["i want to grow strawberries", 2], ["we have a gym", -1]]
      },
      {
        c: "At first, lots of kids didn't want to eat vegetables. Which vegetable do kids like the least, and how could a school make it more fun?",
        he: 'איזה ירק ילדים הכי לא אוהבים, ואיך אפשר להפוך אותו לכיפי? למשל: Broccoli. Make it into a game!',
        a: [],
        o: "Clever idea! Maybe even I would eat more vegetables.",
        t: ["Kids don't like broccoli. Make it into a game!", "Onions! Put them on pizza.", "Peppers, but they taste better with cheese."],
        x: [["broccoli is the worst", -1], ["carrots with chocolate", -1]]
      },
      {
        c: "A strong wind destroyed the young plants, but the students didn't give up. Why do you think they planted everything again?",
        he: 'למה לדעתכם הם לא ויתרו ושתלו הכול מחדש? למשל: Because they loved their garden.',
        a: [],
        o: "Good thinking! They really loved their garden.",
        t: ["Because they loved their garden.", "They wanted to finish the project.", "Because they worked together as a team."],
        x: [["they want vegetables", -1], ["because they don't give up", -1]]
      },
      {
        c: "Mister Peretz says the students learned to work together. Is it easier to work alone or in a team? Why?",
        he: 'יותר קל לעבוד לבד או בצוות? למשל: In a team, because we share the work.',
        a: [
          { k: ['depend both sometimes'], r: "It depends, I agree! Some jobs are better alone, others in a team." },
          { k: ['alone myself own'], r: "I understand. Alone, you can do things your way." },
          { k: ['team together group friend friends'], r: "I agree! A team has more hands and more ideas." }
        ],
        o: "Interesting! There are good things about both.",
        t: ["In a team, because we share the work.", "Alone, because I can work at my own speed.", "It depends on the job."],
        x: [["in a team", 2], ["alone is more easy", 1], ["with my friends", 2], ["it depend", 0], ["i like vegetables", -1]]
      }
    ],
    end: "You would be a great gardener and a great team member! Until next time!"
  },
  {
    id: 'tb1u03', title: 'Bella takes the bus',
    he: 'מדברים עם קוקו על Bella, הכלבה שנוסעת לבד באוטובוס',
    turns: [
      {
        c: "Bella the dog takes the number twelve bus to the park on her own! What do you think the other passengers say?",
        he: 'מה לדעתכם הנוסעים האחרים אומרים כש-Bella עולה? למשל: They say good morning to her.',
        a: [],
        o: "Ha! I think they love her. She is the star of the bus.",
        t: ["They say good morning to her.", "I think they take photos of her.", "They say she is a very clever dog."],
        x: [["they say hello bella", -1], ["wow a dog on the bus", -1]]
      },
      {
        c: "Dogs travel for free, as long as they are polite. What rule would you make for animals on buses?",
        he: 'איזה חוק הייתם קובעים לחיות באוטובוס? למשל: Dogs can come, as long as they sit quietly.',
        a: [],
        o: "Ha! That rule is going straight into my rule book.",
        t: ["Animals can ride, as long as they are clean.", "Dogs can come, as long as they sit quietly.", "No cats on buses, they would scratch the seats."],
        x: [["no big animals", -1], ["they must sit on the floor", -1]]
      },
      {
        c: "Bella goes everywhere by bus. How do you usually get around: by bus, by bike, by car or on foot?",
        he: 'איך אתם בדרך כלל מגיעים ממקום למקום? למשל: I usually take the bus. או I walk.',
        a: [
          { k: ['bus buses'], r: "The bus! Maybe you will meet a dog like Bella one day." },
          { k: ['bike bikes bicycle cycle scooter'], r: "A bike! Fast, fun and good for you." },
          { k: ['foot walk walking'], r: "On foot! Walking is a great way to see things." },
          { k: ['car taxi train'], r: "Comfortable! And nobody steps on your feathers." }
        ],
        o: "Every way of travelling has something nice about it.",
        t: ["I usually take the bus.", "I go by bike, it's faster.", "I walk, because it's close."],
        x: [["by bus", 0], ["i ride my bicycle", 1], ["i am walking", 2], ["my dad drive me in the car", 3], ["i fly", -1]]
      },
      {
        c: "Bella never misses her stop. Do you think it's a good idea to let a dog ride the bus alone? Why or why not?",
        he: 'רעיון טוב לתת לכלב לנסוע לבד באוטובוס? למשל: No, because it could get lost. או Yes, as long as it is polite.',
        a: [
          { k: ['maybe perhaps depend if'], r: "It depends on the dog, I agree. Not every dog is a Bella." },
          { k: ['no not'], n: 'yes know', r: "You are careful! A dog could get lost in a big city." },
          { k: ['yes good agree fine clever smart sure'], r: "As long as she is polite, it is fine with me too!" }
        ],
        o: "Interesting! It is a very unusual story.",
        t: ["No, because it could get lost.", "Yes, as long as it is polite.", "It depends on the dog."],
        x: [["no it is dangerous", 1], ["yes it is funny", 2], ["depends", 0], ["i think it is a good idea", 2], ["the bus is blue", -1]]
      }
    ],
    end: "Next time you take the bus, look out for Bella! Bye for now!"
  },
  {
    id: 'tb1u04', title: 'The robot gardener',
    he: 'מדברים עם קוקו על Yael, שבנתה רובוט שמשקה את הגינה של סבתא',
    turns: [
      {
        c: "Yael built a robot that waters her grandma's garden. If you could build a robot, what boring job would it do for you?",
        he: 'אם הייתם בונים רובוט, איזו עבודה משעממת הוא היה עושה? למשל: It would tidy my room for me.',
        a: [],
        o: "Clever! I would love a robot like that in my shop.",
        t: ["It would tidy my room for me.", "My robot would wash the dishes.", "It would walk my dog every morning."],
        x: [["it will clean my room", -1], ["make my bed", -1]]
      },
      {
        c: "Yael has been interested in robots since she was nine. What have you been interested in for a long time?",
        he: 'במה אתם מתעניינים כבר הרבה זמן? למשל: I have been interested in drawing for years.',
        a: [],
        o: "That is wonderful. It is great to have something you love.",
        t: ["I've been interested in space since I was little.", "I have been interested in drawing for years.", "I've loved football for a long time."],
        x: [["i am interested in music since 3 years", -1], ["football for a long time", -1]]
      },
      {
        c: "Yael wanted to give up a few times, but her grandma kept encouraging her. Who or what keeps you going?",
        he: 'מי או מה נותן לכם כוח להמשיך? למשל: My friends keep encouraging me.',
        a: [],
        o: "That is lovely. Everyone needs someone or something like that.",
        t: ["My friends keep encouraging me.", "My coach always says I can do it.", "Music keeps me going!"],
        x: [["my best friend", -1], ["i encourage myself", -1]]
      },
      {
        c: "Grandma says the robot is a better gardener than her! Would you like a robot helper? Why or why not?",
        he: 'הייתם רוצים רובוט עוזר? למשל: Yes, it could help me every day. או No, people are more fun.',
        a: [
          { k: ['maybe perhaps depend if'], r: "A smart answer. It depends on what the robot does!" },
          { k: ['no not'], n: 'yes know', r: "I understand. Robots are useful, but people are more fun." },
          { k: ['yes would want love sure cool help'], r: "Me too! It could fold all my scarves." }
        ],
        o: "Interesting! Robots are getting cleverer every year.",
        t: ["Yes, it could help me every day.", "No, people are more fun than robots.", "Maybe, if it can cook."],
        x: [["yes it's cool", 2], ["no i don't need", 1], ["maybe if it is small", 0], ["yes i want one", 2], ["robots are metal", -1]]
      }
    ],
    end: "Maybe one day you will build a robot too! Goodbye!"
  },
  {
    id: 'tb1v03', title: 'Timetables and tests',
    he: 'מדברים עם קוקו על בית הספר: timetable, revise, take notes ועוד',
    turns: [
      {
        c: "Imagine your timetable. Which lesson do you look forward to the most, and why?",
        he: 'לאיזה שיעור אתם הכי מחכים, ולמה? למשל: I look forward to PE, because I love sport.',
        a: [],
        o: "Interesting! Every timetable needs a lesson like that.",
        t: ["I look forward to PE, because I love sport.", "Art, because I can be creative.", "English, of course, because of Coco!"],
        x: [["math because it is easy", -1], ["the break", -1]]
      },
      {
        c: "How do you like to revise for a test? Do you take notes, use flashcards, or study with a friend?",
        he: 'איך אתם חוזרים על החומר לפני מבחן? למשל: I take notes. או I revise with a friend.',
        a: [
          { k: ['card cards flashcard flashcards'], r: "Flashcards! I love them, and they fit under my wing." },
          { k: ['friend friends together group'], r: "Studying with a friend makes revising much more fun." },
          { k: ['note notes write writing summary summaries'], r: "Notes are smart. Writing things down helps you remember." }
        ],
        o: "Everyone revises in their own way. Whatever works for you!",
        t: ["I take notes and read them again.", "I use flashcards, they really help.", "I revise with a friend."],
        x: [["i write notes", 2], ["flash cards", 0], ["with my friend", 1], ["i make summary", 2], ["i read the book again", -1]]
      },
      {
        c: "Imagine a classmate wants to cheat in a test. What would you say to them, and why?",
        he: 'מה הייתם אומרים לחבר לכיתה שרוצה להעתיק במבחן? למשל: Do not cheat, just revise more next time.',
        a: [],
        o: "Wise words. A mark you earn yourself feels much better.",
        t: ["I would say it's not fair.", "Don't cheat, just revise more next time.", "I'd tell them I can help them study."],
        x: [["don't do it", -1], ["i will tell him it is not good", -1]]
      },
      {
        c: "If you could add one new subject to your timetable next term, what would it be, and why?",
        he: 'איזה מקצוע חדש הייתם מוסיפים למערכת, ולמה? למשל: Cooking, because it is useful.',
        a: [],
        o: "What a great idea! I would sign up for that class.",
        t: ["Cooking, because it's useful.", "I would add a lesson about video games.", "Fashion design, because it's creative!"],
        x: [["cooking class", -1], ["a lesson about animals", -1]]
      }
    ],
    end: "Good luck with your next test! You will do fabulously. Bye for now!"
  },
  {
    id: 'tb1v04', title: 'A real bargain',
    he: 'מדברים עם קוקו על כסף: bargain, save up, spend, lend ו-afford',
    turns: [
      {
        c: "I found a bargain today: a gold hat for half the price! What would you love to find for half the price?",
        he: 'מה הייתם שמחים למצוא בחצי מחיר? למשל: New trainers for half the price!',
        a: [],
        o: "Ooh, that would be a fabulous bargain!",
        t: ["New trainers for half the price!", "A video game for only ten shekels.", "A big box of chocolates."],
        x: [["a new phone", -1], ["shoes from nike", -1]]
      },
      {
        c: "If someone gave you one hundred shekels, would you spend it or save up for something bigger? Why?",
        he: 'אם הייתם מקבלים מאה שקלים, הייתם מוציאים או חוסכים? למשל: I would save up for a new bike.',
        a: [
          { k: ['half both some part'], r: "Half and half! That is a very smart plan." },
          { k: ['save saving savings keep bank'], r: "Clever! Saving up makes the big thing feel even better." },
          { k: ['spend spending buy shop shopping'], r: "Fun! Spending it on something you love is a great feeling." }
        ],
        o: "Good thinking. Money decisions are not easy!",
        t: ["I would save up for a new bike.", "I'd spend it on books and snacks.", "I'd save half and spend half."],
        x: [["save it", 1], ["i will buy clothes", 2], ["spend", 2], ["some i save some i spend", 0], ["i give it to my brother", -1]]
      },
      {
        c: "Some people love to lend their things, and others don't. What is one thing you would never lend to anyone?",
        he: 'מה לעולם לא הייתם משאילים לאף אחד? למשל: I would never lend my headphones.',
        a: [],
        o: "That makes sense. Some things are too special to lend.",
        t: ["I would never lend my headphones.", "I don't lend my favourite books.", "I would never lend my phone."],
        x: [["my phone", -1], ["i never borrow my clothes", -1]]
      },
      {
        c: "Now let's dream! If you could afford anything in the world, what would you buy, and why?",
        he: 'אם הייתם יכולים להרשות לעצמכם כל דבר, מה הייתם קונים? למשל: I would buy a ticket to space!',
        a: [],
        o: "Ooh, what a dream! I would buy a whole island of hats.",
        t: ["I would buy a house by the sea.", "I'd buy a ticket to space!", "A big library full of books."],
        x: [["a big house", -1], ["i will buy a car ferrari", -1]]
      }
    ],
    end: "You are so clever with money words! Have a great day, bye!"
  },
  {
    id: 'tb1v05', title: 'A job at my shop',
    he: 'מדברים עם קוקו על עבודה: part-time, job interview, boss, colleague ו-volunteer',
    turns: [
      {
        c: "If you could have a part-time job one day, where would you like to work, and why?",
        he: 'איפה הייתם רוצים לעבוד במשרה חלקית? למשל: In a pet shop, because I love animals.',
        a: [],
        o: "That sounds like a great place to work!",
        t: ["In a pet shop, because I love animals.", "At an ice cream shop, of course!", "In a bookshop, because it's quiet."],
        x: [["in a restaurant", -1], ["at the zoo with the animals", -1]]
      },
      {
        c: "Now imagine you are at a job interview at my clothes shop. Why should I give you the job?",
        he: 'אתם בראיון עבודה בחנות של קוקו. למה לקבל דווקא אתכם? למשל: Because I work hard and I love fashion.',
        a: [],
        o: "You are hired! You can start on Monday.",
        t: ["Because I work hard and I love fashion.", "I am friendly and I learn fast.", "Because I always arrive on time."],
        x: [["because i am nice", -1], ["i love clothes very much", -1]]
      },
      {
        c: "Would you rather be the boss or a colleague in a big team? Why?",
        he: 'הייתם מעדיפים להיות הבוס או חלק מצוות? למשל: The boss, because I like making decisions.',
        a: [
          { k: ['boss lead leader charge manager'], n: 'not', r: "A future boss! Just remember to listen to your team." },
          { k: ['colleague colleagues team member not friend friends together'], n: 'know', r: "A team player! Good colleagues make every job better." }
        ],
        o: "Both are important. A team needs good bosses and good colleagues.",
        t: ["The boss, because I like making decisions.", "A colleague, because I like working in a team.", "I don't want to be the boss."],
        x: [["the boss", 0], ["i want to be the manager", 0], ["in the team", 1], ["i don't like to be boss", 1], ["it depends", -1], ["i don't know", -1]]
      },
      {
        c: "Lots of people volunteer to help others without earning money. Where would you like to volunteer, and why?",
        he: 'איפה הייתם רוצים להתנדב, ולמה? למשל: At an animal shelter, because I love dogs.',
        a: [],
        o: "How kind! The world needs more volunteers like you.",
        t: ["At an animal shelter, because I love dogs.", "I would help clean the beach.", "I would read books to little kids."],
        x: [["with old people", -1], ["help animals", -1]]
      }
    ],
    end: "You would be a fabulous colleague! See you at work, I mean, see you soon!"
  },
  {
    id: 'tb1l04', title: 'Vet or game tester?',
    he: 'מדברים עם קוקו על Noa הווטרינרית ו-Ben שבודק משחקי מחשב',
    turns: [
      {
        c: "Noa is a vet, and Ben tests video games. Which job sounds better to you, and why?",
        he: 'איזו עבודה נשמעת לכם יותר טובה, ולמה? למשל: The vet, because I love animals.',
        a: [
          { k: ['vet vets animal animals noa doctor'], r: "A vet! Hard night shifts, but so rewarding." },
          { k: ['game games tester testing test ben video computer'], r: "Game tester! Just remember, it can get boring sometimes." }
        ],
        o: "Both jobs sound interesting to me!",
        t: ["The vet, because I love animals.", "Testing games sounds more fun.", "I'd rather be a vet than a tester."],
        x: [["vet", 0], ["i like the games job", 1], ["animal doctor", 0], ["ben because i play a lot", 1], ["none of them", -1]]
      },
      {
        c: "Noa's dream started when she helped a bird with a broken wing. Have you ever helped an animal? What happened?",
        he: 'עזרתם פעם לחיה? מה קרה? למשל: Yes, I gave water to a thirsty cat.',
        a: [],
        o: "Thank you for telling me. Animals need kind people like you.",
        t: ["Yes, I gave water to a thirsty cat.", "I have never helped an animal, but I want to.", "I once found a lost dog."],
        x: [["i help a cat", -1], ["no never", -1]]
      },
      {
        c: "Ben plays the same level again and again for a week! What would you get bored of doing every day?",
        he: 'ממה הייתם משתעממים אם הייתם עושים את זה כל יום? למשל: I would get bored of cleaning.',
        a: [],
        o: "I understand! Doing the same thing every day can be boring.",
        t: ["I would get bored of doing homework.", "Eating the same food every day.", "I'd get bored of cleaning."],
        x: [["from homework", -1], ["the same game", -1]]
      },
      {
        c: "Noa's advice was to volunteer with animals if you can. What could you do now to get ready for your dream job?",
        he: 'מה אפשר לעשות כבר עכשיו כדי להתכונן לעבודת החלומות? למשל: I could volunteer at an animal shelter.',
        a: [],
        o: "Great idea! You are already on your way.",
        t: ["I could read books about animals.", "I can practise coding at home.", "I could volunteer at an animal shelter."],
        x: [["study hard in school", -1], ["i can learn to write good", -1]]
      }
    ],
    end: "Whatever job you choose, you will be great at it! Take care!"
  },
  {
    id: 'tb1l05', title: 'Chores, budgets and bikes',
    he: 'מדברים עם קוקו על Omer ו-Lily, דמי כיס, מטלות בבית וחיסכון',
    turns: [
      {
        c: "Omer earns his pocket money by doing chores. Do you think kids should get money for helping at home? Why?",
        he: 'ילדים צריכים לקבל כסף על עזרה בבית? למשל: Yes, because chores are work. או No, everyone should help.',
        a: [
          { k: ['depend sometimes maybe big small'], r: "A fair answer. Maybe for big chores, but not for small ones." },
          { k: ['no not'], n: 'yes know', r: "I see. You think everyone should help at home for free." },
          { k: ['yes should work fair deserve'], r: "That makes sense. Chores are work, and work is usually paid." }
        ],
        o: "That is a big question. Families decide in different ways.",
        t: ["Yes, because chores are work.", "No, everyone should help at home.", "It depends on the chore."],
        x: [["yes they should", 2], ["no it is our home", 1], ["it depend", 0], ["only for big chores", 0], ["i like money", -1]]
      },
      {
        c: "Which chore do you think is the worst: washing the dishes, taking out the rubbish, or tidying up? Why?",
        he: 'איזו מטלה הכי גרועה בעיניכם? למשל: Washing the dishes, because it takes so long.',
        a: [
          { k: ['dish dishes wash washing plate plates'], r: "The dishes! Wet hands and dirty plates, I agree." },
          { k: ['rubbish garbage trash bin'], r: "The rubbish! Smelly, but at least it only takes a minute." },
          { k: ['tidy tidying clean cleaning room mess messy'], r: "Tidying up! Things get messy again so fast." }
        ],
        o: "Every chore is easier with music on, I think!",
        t: ["Washing the dishes, because it takes so long.", "Taking out the rubbish, because it smells.", "Tidying up, because it never ends."],
        x: [["the dishes", 0], ["take out the garbage", 1], ["clean my room", 2], ["the trash smell bad", 1], ["i like all of them", -1]]
      },
      {
        c: "Lily's tip is to wait one day before you buy something. Do you think that works? Why?",
        he: 'הטיפ של Lily: לחכות יום לפני שקונים. זה עובד? למשל: Yes, because you can think about it.',
        a: [
          { k: ['no not'], n: 'yes do_not_know', r: "Maybe! Sometimes you really do want it the next day too." },
          { k: ['yes works work good agree think change mind sure'], r: "I agree! Often the next day you don't want it any more." }
        ],
        o: "Interesting! It is a good trick to try, anyway.",
        t: ["Yes, because you can think about it.", "No, because I know what I want.", "Yes, I sometimes change my mind."],
        x: [["yes it works", 1], ["no i want it now", 0], ["good idea", 1], ["i don't think so", 0], ["shopping is fun", -1]]
      },
      {
        c: "Omer is saving up for a bike, and Lily for a summer camp. If you saved up, what would it be for?",
        he: 'אם הייתם חוסכים, בשביל מה? למשל: I would save for a trip with my friends.',
        a: [],
        o: "Ooh, that is worth waiting for!",
        t: ["I would save up for a new phone.", "I'd save for a trip with my friends.", "A guitar, because I want to learn."],
        x: [["for a playstation", -1], ["i will save for a bike", -1]]
      }
    ],
    end: "Remember Lily's tip: wait one day! Bye for now!"
  },
  {
    id: 'tb1l06', title: 'Caught in a car!',
    he: 'מדברים עם קוקו על הרמאים בריצת המרתון ומה אתם חושבים עליהם',
    turns: [
      {
        c: "Fred Lorz rode in a car during the marathon, then said it was only a joke! Do you believe him? Why or why not?",
        he: 'אתם מאמינים ל-Fred שזו הייתה רק בדיחה? למשל: No, I think he wanted the medal.',
        a: [
          { k: ['no not liar lie lying lied'], n: 'yes know', r: "Me neither! A joke does not usually come with a gold medal." },
          { k: ['yes believe joke funny maybe'], r: "Maybe! But the judges didn't think it was funny at all." }
        ],
        o: "What a strange story! The judges didn't laugh at all.",
        t: ["No, I think he wanted the medal.", "Yes, maybe it was a joke.", "No, he is lying."],
        x: [["no he is a liar", 0], ["i don't believe him", 0], ["yes i believe", 1], ["maybe it was a joke", 1], ["he is fast", -1]]
      },
      {
        c: "Rosie Ruiz didn't look tired at all after the race. What would you think if you saw a runner like that?",
        he: 'מה הייתם חושבים אם הייתם רואים רץ שלא נראה עייף בכלל? למשל: I would think she did not run the race.',
        a: [],
        o: "Interesting! Sometimes small details tell the real story.",
        t: ["I would think she didn't run the race.", "I'd think something is wrong.", "Maybe she is just a very good runner."],
        x: [["she is cheating", -1], ["i think she don't run", -1]]
      },
      {
        c: "Thomas Hicks and Jacqueline Gareau, the real winners, got their prizes later. How do you think they felt?",
        he: 'איך לדעתכם הרגישו המנצחים האמיתיים? למשל: I think they were very proud.',
        a: [],
        o: "Yes, I can imagine. Winning fairly is the best feeling.",
        t: ["They felt happy but a bit angry.", "I think they were very proud.", "They were happy, because it was fair."],
        x: [["very happy", -1], ["they was angry", -1]]
      },
      {
        c: "Why do you think some people cheat in sport, when they could get caught?",
        he: 'למה לדעתכם יש אנשים שמרמים בספורט, למרות שאפשר לתפוס אותם? למשל: Because they really want to win.',
        a: [],
        o: "Interesting thinking! But most cheats get caught in the end.",
        t: ["Because they really want to win.", "They think nobody will see them.", "Maybe they are afraid of losing."],
        x: [["they want the medal", -1], ["because they is lazy", -1]]
      }
    ],
    end: "Play fair, and you are always a winner! Goodbye, champion!"
  },
  {
    id: 'tb1l07', title: 'Rules of the road',
    he: 'מדברים עם קוקו על החוקים המוזרים בכביש, עם must, have to ו-should',
    turns: [
      {
        c: "In Cyprus, drivers can't eat or drink while they're driving, not even water! Do you think it's a good rule? Why?",
        he: 'חוק טוב שאסור לשתות בזמן נהיגה? למשל: Yes, because you should keep your hands on the wheel.',
        a: [
          { k: ['no not thirsty'], n: 'yes know', r: "I see your point. Sometimes you really have to drink some water." },
          { k: ['yes good agree safe safer hands wheel'], r: "I agree. You should keep both hands on the wheel." }
        ],
        o: "Interesting! Rules like that make people think.",
        t: ["Yes, because you should keep your hands on the wheel.", "No, you have to drink when you're thirsty.", "Yes, it is safer for everyone."],
        x: [["yes it is good", 1], ["no it's not fair", 0], ["it is more safe", 1], ["what if you are thirsty", 0], ["cyprus is nice", -1]]
      },
      {
        c: "In Russia, you have to pay a fine if your car is very dirty! What do you think about that rule?",
        he: 'מה דעתכם על קנס על מכונית מלוכלכת? למשל: It is strange, but it has a reason.',
        a: [],
        o: "Ha! I would have to wash my feathers every day.",
        t: ["I think it's a funny rule.", "It is a good rule, because the police must read the number.", "It's strange, but it has a reason."],
        x: [["it is crazy", -1], ["i think is good rule", -1]]
      },
      {
        c: "If you could make one new rule for drivers, what would it be?",
        he: 'איזה חוק חדש הייתם קובעים לנהגים? למשל: Drivers must not use their phones.',
        a: [],
        o: "Great rule! I am sure the roads would be safer.",
        t: ["Drivers mustn't use their phones.", "You must stop for animals on the road.", "Drivers have to play happy music!"],
        x: [["no phones in the car", -1], ["they must drive slow", -1]]
      },
      {
        c: "Gali's dad says he doesn't have to wash the car, but he will. What is something you don't have to do, but you do anyway?",
        he: 'מה אתם עושים גם כשלא חייבים? למשל: I do not have to read, but I love books.',
        a: [],
        o: "I love that. Sometimes we do things just because we want to.",
        t: ["I don't have to help, but I like cooking.", "I don't have to read, but I love books.", "I help my friends with homework."],
        x: [["i clean my room", -1], ["i don't have to but i play piano", -1]]
      }
    ],
    end: "Drive safely one day, and keep your car clean! Bye for now!"
  },
  {
    id: 'tb1l08', title: 'Lunch at the market',
    he: 'מדברים עם קוקו על Borough Market בלונדון ועל אוכל חדש',
    turns: [
      {
        c: "At the market, Tamar tried a strong orange cheese. Do you like trying new food, or do you prefer food you know? Why?",
        he: 'אתם אוהבים לטעום אוכל חדש, או מעדיפים מה שאתם מכירים? למשל: I love trying new food!',
        a: [
          { k: ['new try trying different strange'], n: 'not', r: "An adventurous eater! You would love Borough Market." },
          { k: ['know known same usual not favourite favorite'], n: 'do_not_know', r: "That is fair. Your favourite food is your favourite for a reason." }
        ],
        o: "Interesting! Everyone has their own taste.",
        t: ["I love trying new food!", "I prefer food I know.", "I don't like trying strange things."],
        x: [["i like to try new things", 0], ["food i know", 1], ["i don't like new food", 1], ["i love different food", 0], ["cheese", -1], ["i don't know", -1]]
      },
      {
        c: "Avi wants the Spanish rice, and Tamar wants the doughnuts. Which stall would you go to first, and why?",
        he: 'לאיזה דוכן הייתם הולכים קודם? למשל: The doughnuts, because I love sweet things.',
        a: [
          { k: ['rice paella spanish'], r: "Paella! A giant pan of rice sounds amazing." },
          { k: ['doughnut doughnuts donut donuts dessert sweet'], r: "Doughnuts! Dessert first is always a good plan." },
          { k: ['cheese sample samples free'], r: "Cheese! Don't forget the free samples." },
          { k: ['sandwich sandwiches hot'], r: "Hot sandwiches! Perfect for a cold London day." }
        ],
        o: "Yum! Everything at that market sounds delicious.",
        t: ["The doughnuts, because I love sweet things.", "The Spanish rice, because I'm hungry.", "The cheese stall, for the free samples!"],
        x: [["the rice", 0], ["donuts", 1], ["free samples of cheese", 2], ["a hot sandwich", 3], ["the apples", -1]]
      },
      {
        c: "The queue for the doughnuts was really long. Would you wait in a long queue for food? Why or why not?",
        he: 'הייתם מחכים בתור ארוך בשביל אוכל? למשל: Yes, if the food is really good.',
        a: [
          { k: ['maybe depend if sometimes'], r: "Fair enough. It depends on how good the food is!" },
          { k: ['no not never'], n: 'yes know', r: "Me neither. I get hungry and grumpy very fast." },
          { k: ['yes would sure worth wait'], r: "So patient! Good food is worth the wait." }
        ],
        o: "Queues are a real test of patience!",
        t: ["Yes, if the food is really good.", "No, I hate waiting.", "Yes, a long queue means good food."],
        x: [["yes i will wait", 2], ["no i am not patient", 1], ["only if it is pizza", 0], ["it depend", 0], ["i like london", -1]]
      },
      {
        c: "People have sold food at Borough Market for about a thousand years. What food from Israel would you sell at a stall there? Why?",
        he: 'איזה אוכל מישראל הייתם מוכרים בדוכן בלונדון? למשל: I would sell falafel, because everyone loves it.',
        a: [],
        o: "Ooh, Londoners would love it! There would be a long queue.",
        t: ["I would sell falafel, because everyone loves it.", "Hummus and fresh pita!", "Shakshuka, because it's delicious."],
        x: [["falafel", -1], ["i will sell bamba", -1]]
      }
    ],
    end: "Now I am hungry! Enjoy your next meal. See you!"
  },
  {
    id: 'tb1l09', title: 'Walls, wizards and Vikings',
    he: 'מדברים עם קוקו על הטיול ל-York: החומות, הרחוב הצר והוויקינגים',
    turns: [
      {
        c: "In medieval York, the city gates were closed at night. Would you like to live in a medieval city? Why or why not?",
        he: 'הייתם רוצים לגור בעיר מימי הביניים? למשל: No, because there were no phones. או Yes, it sounds exciting.',
        a: [
          { k: ['maybe perhaps depend day week'], r: "For a day, maybe! Just to see what it was really like." },
          { k: ['no not never'], n: 'yes know', r: "I understand. No phones and no ice cream, very hard!" },
          { k: ['yes would want love sure cool exciting'], r: "Fabulous! You could be a knight, or a medieval fashion designer!" }
        ],
        o: "Interesting! Life was very different back then.",
        t: ["Yes, it sounds exciting.", "No, because there were no phones.", "Maybe for one day."],
        x: [["yes it is cool", 2], ["no there is no internet", 1], ["maybe for a week", 0], ["i don't want", 1], ["what is medieval", -1]]
      },
      {
        c: "The Shambles looks like a place from a film about wizards! Which film or book world would you love to visit for a day?",
        he: 'לעולם של איזה סרט או ספר הייתם רוצים להיכנס ליום אחד? למשל: I would visit Hogwarts from Harry Potter.',
        a: [],
        o: "Ooh, take me with you! I will bring my best hat.",
        t: ["I would visit Hogwarts from Harry Potter.", "The world of Frozen, because I love snow.", "Minecraft, so I can build anything."],
        x: [["harry potter", -1], ["i go to the jungle book", -1]]
      },
      {
        c: "The Viking centre smells of fish, smoke and animals! Is a smell a good way to learn about history? Why or why not?",
        he: 'ריח זו דרך טובה ללמוד היסטוריה? למשל: Yes, because it feels real. או No, it is disgusting!',
        a: [
          { k: ['no not disgusting gross yuck bad horrible'], n: 'yes know', r: "Ha! I prefer the sweet shops too, like the kids in the story." },
          { k: ['yes good agree real interesting cool remember'], r: "I agree! A smell can make history feel real." }
        ],
        o: "Interesting! Museums can surprise you in many ways.",
        t: ["Yes, because it feels real.", "No, it is disgusting!", "Yes, you remember it better."],
        x: [["yes it is interesting", 1], ["no it smell bad", 0], ["gross", 0], ["you can remember better", 1], ["vikings had boats", -1]]
      },
      {
        c: "The city walls are over six hundred years old. What do you think people will remember about our time, six hundred years from now?",
        he: 'מה לדעתכם אנשים יזכרו מהתקופה שלנו בעוד שש מאות שנה? למשל: They will remember our phones.',
        a: [],
        o: "Wow, what an interesting idea! I hope they remember parrots.",
        t: ["They will remember our phones and computers.", "I think they will remember the first robots.", "Maybe they'll laugh at our clothes!"],
        x: [["the phones", -1], ["they remember the internet", -1]]
      }
    ],
    end: "Thank you for walking the old walls with me! Goodbye for now!"
  },
  {
    id: 'tb1r02', title: 'The passenger, the ghost, the boss',
    he: 'מדברים עם קוקו על עבודה בקבוצה ועל מה שמעצבן בה',
    turns: [
      {
        c: "The students talked about the passenger, the ghost and the boss. Which one do you think is the most annoying, and why?",
        he: 'מי הכי מעצבן בעבודה בקבוצה: the passenger, the ghost או the boss? למשל: The ghost, because he never answers.',
        a: [
          { k: ['passenger passengers nothing'], r: "The passenger! Doing nothing and getting a good mark is not fair." },
          { k: ['ghost ghosts answer answers message messages'], r: "The ghost! Silence until the night before is the worst." },
          { k: ['boss bossy decision decisions listen'], r: "The boss! A team needs everyone's ideas, not just one." }
        ],
        o: "Good point. All three can make a project much harder.",
        t: ["The passenger, because he does nothing.", "The ghost, because he never answers.", "The boss, because she never listens."],
        x: [["the passenger", 0], ["ghost", 1], ["the boss is the worst", 2], ["the one who don't do nothing", 0], ["all of them", -1]]
      },
      {
        c: "Adi says that saying thank you makes people want to work with you again. Do you agree? Why or why not?",
        he: 'אתם מסכימים ש-thank you גורם לאנשים לרצות לעבוד איתכם שוב? למשל: Yes, because it shows you care.',
        a: [
          { k: ['no not'], n: 'yes', r: "Interesting! Maybe doing your part matters more than words." },
          { k: ['yes agree true right care polite nice kind'], r: "Me too. Small words like thank you make a big difference." }
        ],
        o: "Thank you for your opinion! See, it is a magic phrase.",
        t: ["Yes, because it shows you care.", "No, doing your part is more important.", "I agree, it is polite."],
        x: [["yes i am agree", 1], ["i don't agree", 0], ["it is true", 1], ["no work is more important", 0], ["i love projects", -1]]
      },
      {
        c: "Imagine someone in your group is a ghost. What would you do to get them to help?",
        he: 'מה הייתם עושים כדי שה-ghost בקבוצה יעזור? למשל: I would send them a friendly message.',
        a: [],
        o: "Smart idea! You would be a great team member.",
        t: ["I would send them a friendly message.", "I'd give them a small, easy job.", "I would talk to them in class."],
        x: [["i will call him", -1], ["tell the teacher", -1]]
      },
      {
        c: "In a group project, which part do you like the most: the ideas, the writing, the drawing or the talking?",
        he: 'איזה חלק בעבודה בקבוצה אתם הכי אוהבים? למשל: The drawing, because I like art.',
        a: [
          { k: ['idea ideas'], r: "An ideas person! Every team needs one." },
          { k: ['write writing type typing'], r: "A writer! Clear words make a great project." },
          { k: ['draw drawing design picture pictures art'], r: "An artist! Your project will look fabulous." },
          { k: ['talk talking present presenting presentation speak speaking'], r: "A presenter! Talking in front of the class takes courage." }
        ],
        o: "Every part matters. A good team needs them all.",
        t: ["The drawing, because I like art.", "I like the ideas part the most.", "The talking, because I like presenting."],
        x: [["the ideas", 0], ["writing", 1], ["i love to draw", 2], ["i like to present", 3], ["nothing", -1], ["i don't think so", -1]]
      }
    ],
    end: "Your next team is lucky to have you! See you next time!"
  },
  {
    id: 'tb1r03', title: 'Dream jobs',
    he: 'מדברים עם קוקו על Jake, Lin ו-Rachel והעבודות המיוחדות שלהם',
    turns: [
      {
        c: "Jake tests water slides, Lin looks after pandas and Rachel tastes ice cream. Which job would you love to do, and why?",
        he: 'איזו עבודה הייתם רוצים: מגלשות, פנדות או גלידה? למשל: Tasting ice cream, because I love sweets.',
        a: [
          { k: ['slide slides water jake park'], r: "Water slides! Just don't go down the same slide fifty times a day." },
          { k: ['panda pandas lin bamboo'], r: "Pandas! Hard work, but those babies are so cute." },
          { k: ['ice cream rachel taste tasting flavour flavours flavor'], r: "Ice cream tasting! Sixty spoons a morning sounds like a dream." }
        ],
        o: "All three jobs sound wonderful to me!",
        t: ["Tasting ice cream, because I love sweets.", "Looking after pandas, because they are so cute.", "Testing water slides, because it's fun."],
        x: [["the ice cream", 2], ["pandas", 1], ["water slides", 0], ["the job with the bamboo", 1], ["a doctor", -1]]
      },
      {
        c: "Rachel can't have coffee before work, because her tongue must be ready. What would be the hardest part of her job for you?",
        he: 'מה היה הכי קשה לכם בעבודה של Rachel? למשל: Tasting the terrible flavours.',
        a: [],
        o: "I understand. Every dream job has a difficult part.",
        t: ["Tasting the terrible flavours.", "Not eating the whole box!", "Eating ice cream every single morning."],
        x: [["the bad flavours", -1], ["too much cold", -1]]
      },
      {
        c: "Rachel's strangest idea was popcorn ice cream. What new ice cream flavour would you invent?",
        he: 'איזה טעם גלידה חדש הייתם ממציאים? למשל: Bubble gum and banana.',
        a: [],
        o: "Ooh, I would buy that! It could be a best seller.",
        t: ["Pizza ice cream, with cheese on top!", "I'd invent bubble gum and banana.", "Watermelon and mint, for the summer."],
        x: [["bamba ice cream", -1], ["chocolate with chips", -1]]
      },
      {
        c: "Lin says she feels lucky every day. What do you think makes a job wonderful: the money, the people, or something else?",
        he: 'מה הופך עבודה לנפלאה? למשל: The people, because they make every day better.',
        a: [
          { k: ['money pay paid rich salary'], r: "Money helps, of course. But a job you love is even better." },
          { k: ['people colleague colleagues friend friends team'], r: "I agree! Good people make every day better." },
          { k: ['fun love like enjoy happy interesting help helping'], r: "Yes! When you love your job, it doesn't feel like work." }
        ],
        o: "Great answer. Everyone looks for something different in a job.",
        t: ["The people, because they make every day better.", "Doing something you love.", "The money, of course!"],
        x: [["money", 0], ["the people you work with", 1], ["if you enjoy it", 2], ["helping animals", 2], ["the boss", -1]]
      }
    ],
    end: "I hope you find your dream job one day! Now I need some ice cream. Bye!"
  },
  {
    id: 'tb1r04', title: 'Lights for turtles',
    he: 'מדברים עם קוקו על צבי הים, האורות הירוקים ומה אפשר לעשות כדי לעזור',
    turns: [
      {
        c: "Scientists put green lights on fishing nets, so turtles see them and swim around. What do you think of this idea?",
        he: 'מה דעתכם על הרעיון של האורות הירוקים? למשל: It is a clever idea, because it is cheap.',
        a: [
          { k: ['bad not'], r: "Interesting! Maybe scientists can find an even better way." },
          { k: ['good great clever smart amazing cool nice brilliant genius simple cheap like love'], r: "I agree! It is simple, cheap and it really works." }
        ],
        o: "Interesting! Scientists are always looking for new ideas.",
        t: ["It is a clever idea, because it is cheap.", "I think it's amazing.", "It is good, but not enough."],
        x: [["it is a good idea", 1], ["very smart", 1], ["i don't like it", 0], ["it is bad for the fish", 0], ["turtles are slow", -1]]
      },
      {
        c: "Baby turtles find the sea by moving towards the moonlight, but hotel lights confuse them. What should hotels near the beach do?",
        he: 'מה בתי מלון ליד החוף צריכים לעשות? למשל: They should turn off their lights at night.',
        a: [],
        o: "Smart idea! The baby turtles would thank you.",
        t: ["They should turn off their lights at night.", "Hotels should use softer lights.", "They should put signs on the beach."],
        x: [["close the light", -1], ["turn off the lights", -1]]
      },
      {
        c: "Volunteers protect turtle nests on Israel's beaches every summer. Would you like to volunteer there? Why or why not?",
        he: 'הייתם רוצים להתנדב ולשמור על קיני צבים? למשל: Yes, because I love animals.',
        a: [
          { k: ['maybe perhaps depend if'], r: "Fair enough. Even one night on the beach would help." },
          { k: ['no not never'], n: 'yes know', r: "That is okay. You can still help by keeping your torch off." },
          { k: ['yes would want love sure animal animals turtle turtles help'], r: "Fabulous! The turtles are lucky to have friends like you." }
        ],
        o: "Thank you! Every little bit of help counts.",
        t: ["Yes, because I love animals.", "No, I don't like staying up at night.", "Maybe, if my friends come too."],
        x: [["yes i want", 2], ["no it is boring", 1], ["maybe with my friends", 0], ["i love turtles", 2], ["the beach is hot", -1]]
      },
      {
        c: "If you could help one animal in the sea, which animal would it be, and how would you help?",
        he: 'לאיזו חיה בים הייתם עוזרים, ואיך? למשל: I would help dolphins by picking up plastic.',
        a: [],
        o: "That is a wonderful plan. The sea needs friends like you.",
        t: ["I'd help dolphins by picking up plastic.", "Turtles, because they get stuck in nets.", "Sharks, because people are afraid of them."],
        x: [["the dolphins", -1], ["i help fish to clean the sea", -1]]
      }
    ],
    end: "Remember: keep your torch off on the beach at night! Bye for now!"
  }
]);

// Talk to Coco: B1 home scenes sb101 to sb115 (tools/TALK-WRITING.md).
window.EQ_TALK.b1 = (window.EQ_TALK.b1 || []).concat([
  {
    id: 'sb101', title: 'Planning the class trip',
    he: "מתכננים עם קוקו טיול שנתי: צפון או מדבר, ומשכנעים את כולם",
    turns: [
      {
        c: "The class is choosing a trip! We can go hiking in the north or camping in the desert. Which one would you choose, and why?",
        he: "טיול בצפון או קמפינג במדבר? ולמה? The north, because I love rivers.",
        a: [
          { k: ['north golan galilee hike hiking river water forest green waterfall'], r: "The north! Rivers, green hills and cool weather. Good thinking." },
          { k: ['desert negev eilat camp camping star camel sand'], r: "The desert! Camels, stars and big open spaces. Exciting choice." }
        ],
        o: "Interesting! Both trips sound amazing to me.",
        t: ["The north, because I love rivers.", "The desert. Sleeping under the stars would be amazing."],
        x: [["the north because there is water", 0], ["desert because i like camels", 1], ["i would choose the north", 0], ["i want camping", 1], ["i dont care", -1], ["eilat", 1]]
      },
      {
        c: "Our teacher is worried about one thing. If it is very hot, what should we bring to stay safe?",
        he: "אם יהיה חם מאוד, מה צריך להביא? Lots of water and a hat.",
        a: [
          { k: ['water bottle hat sunscreen cream shade cap umbrella'], r: "Exactly! Water, hats and sunscreen. Our teacher will be happy." }
        ],
        o: "Good point. And lots of water, of course!",
        t: ["Lots of water and a hat.", "Sunscreen and caps for everyone."],
        x: [["water", 0], ["we should bring hats", 0], ["sun cream", 0], ["food", -1], ["i don't know", -1]]
      },
      {
        c: "Now the fun part! If we could add one surprise activity to the trip, what would it be?",
        he: "אם היה אפשר להוסיף פעילות הפתעה אחת, מה היא הייתה? A night walk with torches.",
        a: [],
        o: "Ooh, that would make the trip unforgettable!",
        t: ["A night walk with torches.", "A jeep ride in the desert.", "Swimming in a river."],
        x: [["a party with music", -1], ["jeep", -1], ["we will go swimming", -1]]
      },
      {
        c: "Some kids in the class want to stay at school and watch films instead. What would you say to them?",
        he: "יש ילדים שמעדיפים להישאר בבית הספר ולראות סרטים. מה תגידו להם? A trip is special. Fresh air is better than a screen.",
        a: [
          { k: ['more_better'], r: "Much better, yes! You can't hike in a classroom." },
          { k: ['special day year'], r: "Exactly! A trip only happens once a year." },
          { k: ['fun better exciting fresh air nature friends outside boring screen'], r: "Good argument! I think they'll change their minds." }
        ],
        o: "Good point! Let's see what the class decides.",
        t: ["We can watch films any day, but a trip is special.", "Come on! Fresh air is better than a screen."],
        x: [["a trip is more better", 0], ["it's more fun", 2], ["fresh air is better", 2], ["ok", -1], ["they are lazy", -1], ["films are boring", 2], ["a trip is special", 1]]
      },
      {
        c: "Great! Now we need a name for the trip on the poster. What should we call it, and why?",
        he: "איך נקרא לטיול בפוסטר, ולמה? The Great Desert Adventure, because it sounds exciting.",
        a: [],
        o: "I love it! I'll put it on the poster in big, bold letters.",
        t: ["The Great Desert Adventure, because it sounds exciting.", "North Fun Day. It's short and clear."],
        x: [["super trip", -1], ["the best trip ever", -1]]
      }
    ],
    end: "The poster is ready, the teacher said yes, and I've packed my sunscreen. What a plan!"
  },
  {
    id: 'sb102', title: 'A summer job interview',
    he: "ראיון עבודה לקיץ בחנות של קוקו: למה אתם רוצים, מה עשיתם ומה הייתם עושים",
    turns: [
      {
        c: "Thank you for coming to the interview! I need a summer helper in my shop. Why would you like this job?",
        he: "למה הייתם רוצים לעבוד בחנות? I love clothes, and I like helping people.",
        a: [],
        o: "Thank you! That helps me get to know you.",
        t: ["I love clothes, and I like helping people.", "I want to learn how a shop works.", "It sounds fun, and I'm good with people."],
        x: [["because i like fashion", -1], ["i want to earn money", -1]]
      },
      {
        c: "Have you ever helped in a shop, at a club or at an event before? What did you do?",
        he: "עזרתם פעם בחנות, בחוג או באירוע? מה עשיתם? Yes, I helped at a school book sale.",
        a: [
          { k: ['no never'], r: "That's fine! Everyone starts somewhere. I'll teach you everything." },
          { k: ['help'], n: 'helped', r: "You've helped before? Great, that experience will be useful." },
          { k: ['helped yes worked work did cooked cleaned sold'], r: "Great! That experience will be really useful in my shop." }
        ],
        o: "Thank you! Everything you learn is useful here.",
        t: ["I've never done that, but I learn fast.", "Yes, I helped at a school book sale.", "I've helped my neighbour in her garden."],
        x: [["no never", 0], ["i have help in a club", 1], ["yes i helped at a book sale", 2], ["i worked in a cafe", 2], ["i like pizza", -1], ["i never did", 0]]
      },
      {
        c: "Now a tricky situation. If a customer wanted a shirt we didn't have, what would you do?",
        he: "אם לקוח היה רוצה חולצה שאין לנו, מה הייתם עושים? I would show them a similar shirt.",
        a: [],
        o: "That's a tricky one! Being kind is always the right start.",
        t: ["I would show them a similar shirt.", "I'd say sorry and suggest another shop.", "I would ask Coco to order it."],
        x: [["i would say sorry", -1], ["give them a different one", -1], ["i will show other shirt", -1]]
      },
      {
        c: "Which would you prefer: working at the till, or making the shop window look beautiful? Why?",
        he: "מה תעדיפו, לעבוד בקופה או לעצב את חלון הראווה? למה? The window, because I love design.",
        a: [
          { k: ['till money cash register customer pay'], r: "The till! You need to be careful and friendly. Perfect." },
          { k: ['window design display decorate beautiful art'], r: "The window! You must have a great eye for style." }
        ],
        o: "Both are important jobs. We can try both!",
        t: ["The window, because I love design.", "The till, because I'm good with numbers."],
        x: [["the window because i love design", 1], ["the till", 0], ["money because i'm good at maths", 0], ["both", -1], ["decorating", 1]]
      },
      {
        c: "Last question, and it's very important: would you share your crackers with your boss?",
        he: "שאלה אחרונה וחשובה מאוד: הייתם חולקים את הקרקרים שלכם עם הבוסית? Yes, of course!",
        a: [
          { k: ['no never not'], n: 'why_not', r: "Ha ha! Honest answer. You can keep them, I have plenty." },
          { k: ['yes sure course always definitely would'], r: "Excellent! That's the most important skill in this shop." }
        ],
        o: "Ha ha! I'll take that as a yes.",
        t: ["Yes, of course!", "No way, they're mine!"],
        x: [["yes of course", 1], ["no", 0], ["never", 0], ["maybe one", -1], ["sure why not", 1]]
      }
    ],
    end: "Congratulations, you've got the job! Bring a big smile on your first day, and maybe some crackers."
  },
  {
    id: 'sb103', title: 'A feather in my food',
    he: "מתלוננים בנימוס במסעדה של קוקו: נוצה בצלחת, פתרון וקינוח",
    turns: [
      {
        c: "Good evening, and welcome to Coco's restaurant! Tonight we have tomato soup or mushroom pasta. What would you like, and why?",
        he: "מרק עגבניות או פסטה פטריות? ולמה? The pasta, please, because I'm really hungry.",
        a: [
          { k: ['soup tomato'], r: "The tomato soup! Perfect for a cool evening." },
          { k: ['pasta mushroom spaghetti'], r: "The mushroom pasta! Our chef's favourite." }
        ],
        o: "An excellent choice. I'll be right back.",
        t: ["The tomato soup, please. I love tomatoes.", "The pasta, please, because I'm really hungry."],
        x: [["the soup because i'm cold", 0], ["pasta please", 1], ["i would like the pasta", 1], ["a burger", -1], ["tomato soup", 0]]
      },
      {
        c: "Here you are! Oh dear... is that one of my feathers in your food? What would you like me to do?",
        he: "יש נוצה של קוקו באוכל! מה תבקשו? Could you bring me a new plate, please?",
        a: [
          { k: ['new another change different fresh'], r: "Of course! I'll bring you a new plate right away." },
          { k: ['nothing fine okay ok problem matter'], r: "You're very kind! But I'll bring you a fresh one anyway." }
        ],
        o: "I'm so sorry! I'll bring you a fresh plate right away.",
        t: ["Could you bring me a new plate, please?", "It's okay, I'll just take it out."],
        x: [["bring me a new one please", 0], ["change it please", 0], ["it's okay", 1], ["no problem", 1], ["eww", -1], ["can i have another soup", 0]]
      },
      {
        c: "While you wait, may I ask you something? What's the most unusual food you've ever tried?",
        he: "מה המאכל הכי מוזר שטעמתם אי פעם? I've tried sushi with seaweed.",
        a: [
          { k: ['eat'], n: 'eaten ate', r: "You've eaten that? Wow, that's brave!" },
          { k: ['try'], n: 'tried', r: "You've tried that? Wow, that's brave!" },
          { k: ['tried taste tasted'], r: "Wow, that's brave! I usually stick to crackers and seeds." },
          { k: ['eaten ate'], r: "You ate that? Wow! I'll stick to crackers and seeds." }
        ],
        o: "Interesting! Me, I usually stick to crackers and seeds.",
        t: ["I've tried sushi with seaweed.", "I once ate a very spicy pepper."],
        x: [["i have eat a snail", 0], ["i have try sushi", 1], ["i tried frog legs", 2], ["i ate a very spicy pepper", 3], ["pizza", -1], ["nothing", -1]]
      },
      {
        c: "Here's your new plate, and a free dessert because of the feather. If you could choose any dessert in the world, what would it be?",
        he: "אם הייתם יכולים לבחור כל קינוח בעולם, מה הייתם בוחרים? A giant chocolate cake with ice cream.",
        a: [],
        o: "Ooh, that sounds wonderful! I'll tell the chef.",
        t: ["A giant chocolate cake with ice cream.", "I would choose a huge bowl of fruit salad.", "Warm pancakes with honey."],
        x: [["chocolate cake", -1], ["ice cream with sprinkles", -1]]
      },
      {
        c: "Before you go, please tell me honestly: would you come back to Coco's restaurant? Why or why not?",
        he: "הייתם חוזרים למסעדה? למה כן או למה לא? Yes, because the service was friendly.",
        a: [
          { k: ['no not never'], n: 'know', r: "Fair enough! I'll keep my feathers to myself next time." },
          { k: ['yes sure definitely course would'], r: "Thank you! Next time, no feathers. I promise!" }
        ],
        o: "Thank you for being honest. That helps us a lot.",
        t: ["Yes, because the service was friendly.", "Maybe not, because of the feather!"],
        x: [["yes because the food was good", 1], ["no because of the feather", 0], ["maybe", -1], ["of course", 1], ["i will not come", 0]]
      }
    ],
    end: "Thank you for being such a polite customer. Enjoy your evening, and mind the feathers!"
  },
  {
    id: 'sb104', title: 'Start a new club',
    he: "מקימים מועדון חדש בבית הספר: נושא, שם, חוקים, חברים ובעיה של הצלחה",
    turns: [
      {
        c: "Our school has space for one new club, and you're in charge! What kind of club would you start, and why?",
        he: "איזה מועדון הייתם פותחים, ולמה? A cooking club, because I love baking.",
        a: [],
        o: "What a brilliant idea! I'd join it myself.",
        t: ["A cooking club, because I love baking.", "A robot club. We could build cool machines.", "A dance club, because dancing makes people happy."],
        x: [["a football club", -1], ["gaming club because i like games", -1]]
      },
      {
        c: "Every club needs a name that people remember. What would you call your club?",
        he: "איך תקראו למועדון? The Happy Bakers Club. או I would call it Dance Machine.",
        a: [],
        o: "Love it! A good name makes people curious.",
        t: ["The Happy Bakers Club.", "Robots and Friends.", "I would call it Dance Machine."],
        x: [["the cool club", -1], ["i don't know yet", -1]]
      },
      {
        c: "Now we need some rules. What is one rule that everybody in your club has to follow?",
        he: "איזה חוק אחד כולם במועדון חייבים לשמור? Everyone has to help clean up.",
        a: [],
        o: "That's a fair rule. Clubs work better with clear rules.",
        t: ["Everyone has to help clean up.", "You must be kind to new members.", "No phones during the club."],
        x: [["you must to come on time", -1], ["be nice to everyone", -1]]
      },
      {
        c: "Only three kids have joined so far. How could we get more members to join?",
        he: "רק שלושה ילדים הצטרפו עד עכשיו. איך נביא עוד? We could put posters in the hallway.",
        a: [],
        o: "Great plan! I think lots of kids will sign up now.",
        t: ["We could put posters in the hallway.", "Let's give free cookies at the first meeting.", "We could make a short video for the school."],
        x: [["posters", -1], ["tell my friends about it", -1]]
      },
      {
        c: "Wow, it worked! Forty kids want to join, and the room only has twenty chairs. What should we do?",
        he: "ארבעים ילדים רוצים להצטרף ויש רק עשרים כיסאות! מה עושים? We could make two groups.",
        a: [
          { k: ['group two day split half turn'], r: "Two groups! Clever. Then everyone gets a turn." },
          { k: ['bigger room hall gym outside yard'], r: "A bigger room! I'll ask the head teacher right away." }
        ],
        o: "Hmm, good thinking! We'll find a way together.",
        t: ["We could make two groups.", "Let's move to a bigger room."],
        x: [["make two groups", 0], ["meet on different days", 0], ["go to the gym", 1], ["a bigger room", 1], ["buy more chairs", -1], ["sit on the floor", -1]]
      }
    ],
    end: "Your club is ready to go, president! Forty members in one week. I'm so proud!"
  },
  {
    id: 'sb105', title: 'The great homework debate',
    he: "ויכוח בטלוויזיה: צריך לבטל שיעורי בית? מביאים נימוקים ומשכנעים",
    turns: [
      {
        c: "Welcome to Coco's Big Debate! Today's question: should schools stop giving homework? What do you think?",
        he: "צריך להפסיק לתת שיעורי בית? Yes, I think schools should stop it. או No, homework helps us practise.",
        a: [
          { k: ['no_more stop ban cancel'], n: 'not', r: "So you want to say goodbye to homework! Many kids agree with you." },
          { k: ['no not keep important practice practise useful need'], n: 'know', r: "So you think homework is useful. Interesting, and brave!" },
          { k: ['yes agree'], r: "So you agree! Lots of kids would love more free time." }
        ],
        o: "Interesting! There are good reasons on both sides.",
        t: ["Yes, I think schools should stop it.", "No, homework helps us practise."],
        x: [["yes stop homework", 0], ["they should stop it", 0], ["no more homework please", 0], ["i am agree", 2], ["yes", 2], ["no we need homework", 1], ["homework is important", 1], ["no they should not stop", 1], ["maybe a little", -1], ["i think no", 1], ["i don't know", -1]]
      },
      {
        c: "Give our viewers one strong reason for your opinion. Why do you think that?",
        he: "תנו נימוק אחד חזק לדעה שלכם: Kids need time to play and rest.",
        a: [],
        o: "Strong point! The audience is clapping.",
        t: ["Kids need time to play and rest.", "Homework helps us remember what we learned.", "After school we're too tired to learn more."],
        x: [["because it is boring", -1], ["we learn more", -1]]
      },
      {
        c: "Now the other side. Imagine you were a teacher. Would you give homework? Why or why not?",
        he: "דמיינו שאתם מורים. הייתם נותנים שיעורי בית? Yes, but only a little. או No, I would let them play.",
        a: [
          { k: ['yes little some short sometimes'], n: 'no_homework never', r: "A fair teacher! A little homework can really help." },
          { k: ['no not never'], n: 'know', r: "No homework from you! Your students would love you." }
        ],
        o: "Interesting! Teachers have to think about that a lot.",
        t: ["Yes, but only a little.", "No, I would let them play."],
        x: [["yes a little", 0], ["yes but not a lot", 0], ["no", 1], ["i would not give", 1], ["maybe", -1], ["never", 1], ["some homework on weekends", 0]]
      },
      {
        c: "Here's a different idea: homework that's a game or a project. Would that change your mind? Why?",
        he: "ומה אם שיעורי הבית היו משחק או פרויקט? זה היה משנה את דעתכם? Yes, games would be more fun.",
        a: [
          { k: ['no not'], n: 'know', r: "You stand by your opinion! That's what good debaters do." },
          { k: ['yes maybe fun better interesting cool'], r: "So a fun kind of homework could work! Good compromise." }
        ],
        o: "Interesting point! Thank you for explaining.",
        t: ["Yes, games would be more fun.", "No, homework is still homework."],
        x: [["yes because games are fun", 1], ["no", 0], ["maybe it's better", 1], ["i don't know", -1], ["no i still think the same", 0]]
      },
      {
        c: "Time to vote! In one sentence, why should the audience agree with you?",
        he: "משפט אחד לקהל: למה כדאי להם להסכים איתכם? Because kids learn best when they're happy.",
        a: [],
        o: "Wonderful closing words! The audience is voting now.",
        t: ["Because kids learn best when they're happy.", "Because practice makes perfect.", "Vote for me, because I'm right!"],
        x: [["because i am right", -1], ["vote for me please", -1]]
      }
    ],
    end: "And the winner of today's debate is... everyone, because you all spoke so clearly! Goodnight from Coco's Big Debate."
  },
  {
    id: 'sb106', title: 'Coco Travel',
    he: "קוקו סוכנת נסיעות: מתכננים חופשת חלומות, הכל בדמיון",
    turns: [
      {
        c: "Welcome to Coco Travel, where every trip is a dream trip! If you could go anywhere in the world, where would you go?",
        he: "אם הייתם יכולים לנסוע לכל מקום בעולם, לאן? I would go to Japan.",
        a: [],
        o: "What a dream! I can already see you there.",
        t: ["I would go to Japan.", "I'd love to visit the rainforest in Brazil.", "Somewhere with snow and mountains."],
        x: [["paris", -1], ["i would go to the moon", -1], ["i will go to london", -1]]
      },
      {
        c: "How would you like to travel there? By plane, by train, by boat, or on my back?",
        he: "איך תיסעו? By plane, please. או On your back, of course!",
        a: [
          { k: ['back parrot coco you'], r: "On my back! Hold on tight. I'll try not to sneeze." },
          { k: ['plane airplane fly'], r: "By plane! Fast, and you get a window seat." },
          { k: ['train'], r: "By train! Slower, but the views are wonderful." },
          { k: ['boat ship sea'], r: "By boat! Fresh sea air and lots of fish to watch." }
        ],
        o: "Interesting choice! I'll book it for you.",
        t: ["By plane, please.", "On your back, of course!", "By train, because I love the views."],
        x: [["by plane", 1], ["on your back", 0], ["train", 2], ["by ship", 3], ["by car", -1], ["i will fly on coco", 0]]
      },
      {
        c: "What's the first thing you would do when you arrived?",
        he: "מה הדבר הראשון שהייתם עושים כשהייתם מגיעים? I would try the local food.",
        a: [],
        o: "Sounds like a plan! The first day of a trip is always exciting.",
        t: ["I would try the local food.", "I'd go straight to the beach.", "I would take lots of photos."],
        x: [["eat something", -1], ["i will swim in the sea", -1]]
      },
      {
        c: "Every trip has a problem. Your suitcase has gone to a different country! What would you do?",
        he: "המזוודה שלכם נסעה למדינה אחרת! מה הייתם עושים? I'd ask the airport to send it.",
        a: [],
        o: "Good thinking! Calm travellers always find a way.",
        t: ["I would buy some new clothes.", "I'd ask the airport to send it.", "I'd wear the same T-shirt for a week!"],
        x: [["call the airport", -1], ["i would be very sad", -1]]
      },
      {
        c: "Last thing for the booking: would you take one friend, your whole class, or travel alone? Why?",
        he: "עם מי תיסעו? One friend, because it's more fun. או The whole class!",
        a: [
          { k: ['friend'], r: "With a friend! Adventures are better when you share them." },
          { k: ['class everyone everybody all'], r: "The whole class! That's going to be a very noisy plane." },
          { k: ['alone myself nobody'], r: "Alone! Peace and quiet, and you can choose everything." }
        ],
        o: "Lovely! I'll add that to your booking.",
        t: ["One friend, because it's more fun.", "The whole class!", "Alone, so I can relax."],
        x: [["one friend because it is fun", 0], ["the whole class", 1], ["alone", 2], ["my cousins", -1], ["i would take everyone", 1], ["by myself", 2]]
      }
    ],
    end: "Your dream trip is booked! And remember: in a dream, the tickets are always free. Have a wonderful trip!"
  },
  {
    id: 'sb107', title: 'Lost at the museum',
    he: "איבדתם משהו במוזיאון: מתארים אותו לקוקו בדלפק האבידות ופותרים תעלומה",
    turns: [
      {
        c: "Hello, this is the museum's lost property desk. You look worried! What have you lost?",
        he: "מה איבדתם? I've lost my jacket. או I've lost my headphones.",
        a: [
          { k: ['lose'], n: 'lost', r: "You've lost something? Don't worry, we'll find it together." },
          { k: ['jacket coat hoodie jumper sweater bag backpack hat scarf'], r: "Oh no! Don't worry, lots of bags and jackets come here." },
          { k: ['lost phone bottle key headphones toy book glasses umbrella'], r: "Oh no! Don't worry, we'll find it together." }
        ],
        o: "Don't worry, we'll find it together.",
        t: ["I've lost my jacket.", "I've lost my headphones."],
        x: [["i lose my bag", 0], ["i have lost my jacket", 1], ["my backpack", 1], ["i lost my phone", 2], ["my headphones", 2], ["nothing", -1], ["i losed my hat", 0]]
      },
      {
        c: "Can you describe it for me? What colour is it, and is there anything special about it?",
        he: "תארו אותו: צבע ומשהו מיוחד. It's blue, with a white zip.",
        a: [],
        o: "Thank you, that's really helpful. Let me check the shelves.",
        t: ["It's blue, with a white zip.", "It's black, and it has a sticker of a cat.", "It's red and quite small."],
        x: [["blue", -1], ["it's green with stars", -1]]
      },
      {
        c: "Which rooms have you visited today? Where do you think you left it?",
        he: "באילו חדרים הייתם היום? איפה לדעתכם השארתם אותו? I think I left it in the dinosaur room.",
        a: [],
        o: "Okay! I'll send my pigeon friend to look everywhere.",
        t: ["I think I left it in the dinosaur room.", "Maybe in the cafe.", "I've visited the space room and the art room."],
        x: [["the dinosaur room", -1], ["i don't remember", -1]]
      },
      {
        c: "My pigeon friend found it! But it was on the head of the giant dinosaur. How do you think it got there?",
        he: "זה נמצא על הראש של הדינוזאור הענק! איך זה הגיע לשם, לדעתכם? Maybe the dinosaur wanted to be warm.",
        a: [],
        o: "Ha ha! Museums are full of mysteries.",
        t: ["Maybe the dinosaur wanted to be warm.", "I think a child threw it up there.", "The wind blew it there!"],
        x: [["magic", -1], ["i don't know how", -1]]
      },
      {
        c: "Here it is! Next time, what could you do so that you don't lose your things?",
        he: "מה תוכלו לעשות בפעם הבאה כדי לא לאבד דברים? I could keep it in my bag.",
        a: [],
        o: "Great idea! Then you'll never need my desk again.",
        t: ["I could keep it in my bag.", "I'll check my things before I leave.", "I could tie it to my backpack."],
        x: [["be more careful", -1], ["put it in my bag", -1]]
      }
    ],
    end: "Mystery solved! Enjoy the rest of the museum, and say hi to the dinosaur for me."
  },
  {
    id: 'sb108', title: 'Movie night',
    he: "בוחרים סרט לערב סרטים עם קוקו, משכנעים אותה, ומה עושים כשהחשמל נופל",
    turns: [
      {
        c: "It's movie night, and I've made the popcorn! What kind of film are you in the mood for, and why?",
        he: "איזה סרט בא לכם, ולמה? A comedy, because I want to laugh.",
        a: [
          { k: ['comedy funny laugh'], r: "A comedy! Laughing is the best way to end the week." },
          { k: ['action adventure superhero hero'], r: "Action! Chases, heroes and lots of excitement." },
          { k: ['cartoon animation animated disney pixar'], r: "An animated film! I love all the colours." },
          { k: ['scary horror'], r: "Ooh, scary! Maybe something less scary, so I can sleep tonight." }
        ],
        o: "Good choice! There's something for everyone tonight.",
        t: ["A comedy, because I want to laugh.", "An action film with lots of adventure.", "An animated film, please."],
        x: [["comedy because i want to laugh", 0], ["an action movie", 1], ["superhero", 1], ["a cartoon", 2], ["horror", 3], ["a film about sharks", -1]]
      },
      {
        c: "Here's my problem: I want to watch a film about parrots for the tenth time. Can you persuade me to choose something else?",
        he: "קוקו רוצה לראות סרט על תוכים בפעם העשירית. שכנעו אותה לבחור משהו אחר: A new film would be more exciting.",
        a: [],
        o: "Hmm, you make a good point. Okay, the parrot film can wait.",
        t: ["Come on, you've seen it ten times!", "A new film would be more exciting.", "We can watch the parrot film next week."],
        x: [["no parrots please", -1], ["it's boring", -1]]
      },
      {
        c: "Okay, you win! Now, would you rather have sweet popcorn or salty popcorn? Why?",
        he: "פופקורן מתוק או מלוח? למה? Sweet, because I love caramel.",
        a: [
          { k: ['both mix mixed half'], r: "Both! Half and half. You're a popcorn genius." },
          { k: ['sweet caramel sugar chocolate'], r: "Sweet! A dessert and a film at the same time." },
          { k: ['salt salty butter'], r: "Salty! The classic choice. Good taste." }
        ],
        o: "Interesting! More popcorn for me, then.",
        t: ["Sweet, because I love caramel.", "Salty, it's the classic.", "Both, mixed together!"],
        x: [["sweet because i love sugar", 1], ["salty", 2], ["both", 0], ["i don't like popcorn", -1], ["butter popcorn", 2], ["mix them", 0]]
      },
      {
        c: "Oh no! Halfway through the film, the electricity goes off. What could we do in the dark?",
        he: "באמצע הסרט החשמל נופל! מה אפשר לעשות בחושך? We could tell stories with a torch.",
        a: [],
        o: "Great idea! That might be even better than the film.",
        t: ["We could tell stories with a torch.", "Let's play a guessing game.", "We could finish the popcorn!"],
        x: [["tell jokes", -1], ["go to sleep early", -1]]
      },
      {
        c: "The lights are back! If you could be any character in a film, who would you be, and why?",
        he: "אם הייתם יכולים להיות כל דמות בסרט, מי הייתם? למה? I would be Moana. She is brave.",
        a: [],
        o: "Ooh, great choice! You'd be fantastic in that role.",
        t: ["I'd be Spider-Man, because he can climb walls.", "I would be Moana. She is brave.", "A wizard, so I could do magic."],
        x: [["batman", -1], ["i would be the hero", -1]]
      }
    ],
    end: "What a movie night! Next week, I'm choosing the parrot film. Sleep well!"
  },
  {
    id: 'sb109', title: 'Coco Talks: the inventor',
    he: "אתם ממציאים מפורסמים ומתראיינים אצל קוקו בתוכנית אירוח",
    turns: [
      {
        c: "Welcome back to Coco Talks! Tonight's guest is a famous young inventor. What have you invented?",
        he: "אתם ממציאים! מה המצאתם? I've invented a homework robot. או I've made shoes that can fly.",
        a: [
          { k: ['invent'], n: 'invented', r: "You've invented that? Incredible! The audience is amazed." },
          { k: ['robot machine'], r: "A robot! I think everyone in the audience wants one now." },
          { k: ['invented made built created designed'], r: "Incredible! The audience is amazed." }
        ],
        o: "Incredible! The audience is amazed.",
        t: ["I've invented a homework robot.", "I've made shoes that can fly."],
        x: [["i invent a robot", 0], ["i have invent flying car", 0], ["a robot that cleans", 1], ["i made a flying car", 2], ["nothing", -1], ["i have invented a time machine", 1]]
      },
      {
        c: "Amazing! How did you get the idea for it?",
        he: "איך עלה לכם הרעיון? I was tired of doing the same job every day.",
        a: [],
        o: "What a story! Great ideas often start like that.",
        t: ["I was tired of doing the same job every day.", "I saw it in a dream.", "I had the idea in the shower."],
        x: [["i was bored", -1], ["from a book", -1]]
      },
      {
        c: "Every inventor has problems at first. What went wrong the first time you tried it?",
        he: "מה השתבש בפעם הראשונה שניסיתם? It only worked backwards. או It ate all my socks!",
        a: [],
        o: "Ha ha! And that's why you kept trying. Very wise.",
        t: ["It turned everything pink.", "It only worked backwards.", "It ate all my socks!"],
        x: [["it broke", -1], ["it did not work", -1]]
      },
      {
        c: "If you could invent one more thing to make the world better, what would it be?",
        he: "אם הייתם יכולים להמציא עוד דבר אחד שישפר את העולם, מה זה היה? A machine that cleans the sea.",
        a: [],
        o: "That would really help a lot of people. Brilliant!",
        t: ["A machine that cleans the sea.", "I would invent a robot that plants trees.", "Shoes that make electricity when you walk."],
        x: [["something for the trees", -1], ["i will invent a car for water", -1]]
      },
      {
        c: "Before we finish, what advice would you give to kids who want to become inventors?",
        he: "איזו עצה הייתם נותנים לילדים שרוצים להיות ממציאים? Never give up, even when things go wrong.",
        a: [],
        o: "Wise words! I think a lot of young inventors are listening tonight.",
        t: ["Never give up, even when things go wrong.", "Be curious and ask lots of questions.", "Try, fail, and try again!"],
        x: [["don't give up", -1], ["you must to try", -1]]
      }
    ],
    end: "Thank you to our amazing inventor! That's all for tonight on Coco Talks. Goodnight, everyone!"
  },
  {
    id: 'sb110', title: 'The lemonade stand',
    he: "מנהלים עם קוקו דוכן לימונדה ביריד: מה מוכרים, מחיר, פרסום ולקוח לא מרוצה",
    turns: [
      {
        c: "We're opening a lemonade stand at the school fair! What should we sell with the lemonade, and why?",
        he: "מה נמכור ליד הלימונדה, ולמה? Cookies, because they go well with lemonade.",
        a: [],
        o: "Good business thinking! I'll add it to the menu.",
        t: ["Cookies, because they go well with lemonade.", "Ice lollies, because it's really hot.", "Popcorn. It's cheap and everybody likes it."],
        x: [["cakes", -1], ["we should sell sandwiches", -1]]
      },
      {
        c: "How much do you think one cup of lemonade should cost? Why?",
        he: "כמה צריכה לעלות כוס לימונדה, ולמה? Two shekels, because it's fair.",
        a: [],
        o: "Sounds fair! Not too cheap, and not too expensive.",
        t: ["Two shekels, because it's fair.", "Five shekels. It's homemade!", "One shekel, so everyone can buy it."],
        x: [["10 shekels", -1], ["three shekel", -1]]
      },
      {
        c: "Nobody knows about our stand yet. What could we do to get more customers?",
        he: "אף אחד לא יודע על הדוכן. איך נביא לקוחות? We could make a big colourful sign.",
        a: [],
        o: "Great idea! Look, people are already coming over.",
        t: ["We could make a big colourful sign.", "Let's give free tastes.", "Coco could sing to the crowd!"],
        x: [["shout lemonade", -1], ["make posters", -1]]
      },
      {
        c: "Uh oh! A customer says the lemonade is too sour. How would you solve the problem?",
        he: "לקוח אומר שהלימונדה חמוצה מדי. איך תפתרו את זה? I would add more sugar.",
        a: [
          { k: ['sugar honey sweet water'], r: "More sugar! Perfect. Now it tastes amazing." },
          { k: ['free sorry another new back'], r: "Very polite! A happy customer comes back again." }
        ],
        o: "Good thinking! Look, the customer is smiling now.",
        t: ["I would add more sugar.", "I'd say sorry and give a free cup."],
        x: [["add more sugar", 0], ["put honey", 0], ["say sorry", 1], ["give him a new one for free", 1], ["tell him to go", -1], ["drink it", -1]]
      },
      {
        c: "We've sold everything! What should we do with the money we've made?",
        he: "מכרנו הכל! מה נעשה עם הכסף? Buy something for our class. או Give it to an animal shelter.",
        a: [],
        o: "That's a lovely idea. You're a great business partner!",
        t: ["Buy something for our class.", "Give it to an animal shelter.", "Save it for a bigger stand next year!"],
        x: [["buy ice cream", -1], ["give it to charity", -1]]
      }
    ],
    end: "What a successful day! Our lemonade stand is famous now. Let's do it again next year, partner!"
  },
  {
    id: 'sb111', title: 'Green News',
    he: "קוקו כתבת ירוקה: פלסטיק, גינה ורעיונות לבית ספר ששומר על הסביבה",
    turns: [
      {
        c: "I'm Coco, reporting for Green News! Many schools throw away lots of plastic every day. Have you noticed this at your school?",
        he: "שמתם לב שזורקים הרבה פלסטיק בבית הספר? Yes, I've seen lots of plastic bottles. או No, not really.",
        a: [
          { k: ['no not never'], n: 'sure know', r: "Lucky you! Some schools are already very green." },
          { k: ['yes lot many bottle bag plastic notice see seen saw'], r: "You've noticed it too? It's a big problem in lots of places." }
        ],
        o: "Thank you. Plastic is a big problem everywhere.",
        t: ["Yes, I've seen lots of plastic bottles.", "No, not really."],
        x: [["yes", 1], ["yes i notice a lot of bottles", 1], ["no", 0], ["never", 0], ["i'm not sure", -1], ["there is a lot of plastic", 1]]
      },
      {
        c: "What is one easy thing kids could do to use less plastic?",
        he: "מה דבר אחד קל שילדים יכולים לעשות כדי להשתמש בפחות פלסטיק? Use a lunch box instead of bags.",
        a: [],
        o: "Simple and smart! If everyone did that, it would make a big difference.",
        t: ["Bring a bottle from home.", "Use a lunch box instead of bags.", "Say no to plastic straws."],
        x: [["recycle", -1], ["use less bags", -1]]
      },
      {
        c: "Imagine the school gives your class a small garden. What would you grow there, and why?",
        he: "דמיינו שהכיתה מקבלת גינה קטנה. מה הייתם מגדלים, ולמה? Tomatoes, because we could eat them at lunch.",
        a: [],
        o: "Lovely! A garden makes a school feel alive.",
        t: ["Tomatoes, because we could eat them at lunch.", "Flowers, for the bees.", "A lemon tree, for shade and lemonade!"],
        x: [["vegetables", -1], ["i would grow strawberries", -1]]
      },
      {
        c: "Some people say saving the planet is a job for adults, not kids. Do you agree? Why?",
        he: "יש שאומרים ששמירה על כדור הארץ היא תפקיד של מבוגרים. מסכימים? I don't agree. Kids can help too.",
        a: [
          { k: ['disagree not_agree no'], r: "You don't agree? I'm with you! Kids can make a big difference too." },
          { k: ['agree yes adult'], r: "You agree? Interesting! Adults do have more power to change things." }
        ],
        o: "Good point! Everyone can help in their own way.",
        t: ["I don't agree. Kids can help too.", "I agree, adults have more power."],
        x: [["i don't agree", 0], ["i am not agree", 0], ["no kids can help", 0], ["i am agree", 1], ["yes adults have to do it", 1], ["everyone should help", -1], ["maybe", -1]]
      },
      {
        c: "Last question for Green News! If you could give one message to every school in the world, what would it be?",
        he: "אם הייתם יכולים לשלוח מסר אחד לכל בתי הספר בעולם, מה הוא היה? Every small step helps the planet.",
        a: [],
        o: "Powerful words! I'll put that on the front page.",
        t: ["Turn off the lights when you leave.", "Every small step helps the planet.", "Plant a tree every year!"],
        x: [["save water", -1], ["stop using plastic", -1]]
      }
    ],
    end: "That's all from Green News. Thank you, green reporter! Remember: reduce, reuse, recycle!"
  },
  {
    id: 'sb112', title: 'Coach Coco and the final',
    he: "המאמנת קוקו מכינה את הקבוצה למשחק הגמר: עמדה, ויכוח, לחץ, מחצית וניצחון",
    turns: [
      {
        c: "The final is tomorrow, and I'm your coach! Which position would you like to play, and why?",
        he: "באיזו עמדה תשחקו, ולמה? Goalkeeper, because I'm good at catching.",
        a: [
          { k: ['goal goalkeeper keeper goalie'], r: "Goalkeeper! You need quick hands and a brave heart." },
          { k: ['attack attacker striker forward score'], r: "Attack! We need someone who loves scoring goals." },
          { k: ['defend defender defence defense back'], r: "Defence! The team needs a strong wall at the back." },
          { k: ['middle midfield midfielder centre center'], r: "Midfield! You'll be running everywhere. Lots of energy needed." }
        ],
        o: "Great! I'll find the perfect place for you.",
        t: ["Goalkeeper, because I'm good at catching.", "Attacker, because I love scoring goals.", "Defender. I like stopping the other team."],
        x: [["goalkeeper", 0], ["i want to be in the attack because i like scoring", 1], ["defender", 2], ["the middle", 3], ["i don't play football", -1], ["striker", 1]]
      },
      {
        c: "Two players on our team are arguing about who takes the penalties. What would you say to them?",
        he: "שני שחקנים רבים מי יבעט פנדלים. מה תגידו להם? Let's take turns. או We're a team. Stop arguing!",
        a: [],
        o: "Wise words! Look, they're shaking hands now.",
        t: ["Let's take turns.", "The best player today should take it.", "We're a team. Stop arguing and practise!"],
        x: [["take turns", -1], ["stop fighting please", -1]]
      },
      {
        c: "Have you ever felt nervous before a game or a test? What helps you calm down?",
        he: "הרגשתם פעם לחץ לפני משחק או מבחן? מה עוזר לכם להירגע? Yes, I take deep breaths.",
        a: [
          { k: ['yes sometimes breathe breath music listen talk relax walk hug water deep'], r: "Good tip! I'll try that before tomorrow's match." },
          { k: ['no not never'], n: 'know', r: "Never nervous? You're as cool as ice!" }
        ],
        o: "Thank you for sharing. Everyone feels nervous sometimes.",
        t: ["Yes, I take deep breaths.", "Listening to music helps me.", "No, I never feel nervous."],
        x: [["yes i breathe deep", 0], ["sometimes i listen to music", 0], ["no never", 1], ["i don't get nervous", 1], ["i eat chocolate", -1], ["yes", 0], ["i don't know", -1]]
      },
      {
        c: "It's half time, and we're losing one nil. What should the team do differently in the second half?",
        he: "מחצית, ואנחנו מפסידים אחת אפס. מה הקבוצה צריכה לעשות אחרת? We should pass the ball more.",
        a: [],
        o: "Great plan, coach! Let's go back out there.",
        t: ["We should pass the ball more.", "Defend better and stay calm.", "Believe in ourselves and attack!"],
        x: [["run faster", -1], ["we must to pass more", -1]]
      },
      {
        c: "We won, two one! What was the best part of the match for you?",
        he: "ניצחנו! מה היה הרגע הכי טוב במשחק? When we scored the winning goal!",
        a: [],
        o: "What a moment! You should be proud of the team.",
        t: ["When we scored the winning goal!", "The moment the whole crowd cheered.", "Celebrating with everyone at the end."],
        x: [["the second goal", -1], ["when i score", -1]]
      }
    ],
    end: "Champions! I'm the proudest coach in the world. Now, crackers for everyone!"
  },
  {
    id: 'sb113', title: 'Design a robot helper',
    he: "מתכננים עם קוקו רובוט עוזר: תפקיד, מראה, שם, תקלה ודעה על העתיד",
    turns: [
      {
        c: "I'm building a robot helper for my shop, and I need your ideas! What should it help me with, and why?",
        he: "במה הרובוט צריך לעזור לקוקו בחנות, ולמה? Folding the clothes, because it takes a long time.",
        a: [],
        o: "Ooh, smart choice! I'm writing that in my notebook.",
        t: ["Folding the clothes, because it takes a long time.", "Talking to customers when you're busy.", "Cleaning the shop at night."],
        x: [["clean the floor", -1], ["it can sell the clothes", -1]]
      },
      {
        c: "Let's design it! What should our robot look like, and what colour should it be?",
        he: "איך הרובוט ייראה, ובאיזה צבע? It should be small and silver, with big eyes.",
        a: [],
        o: "Fabulous! That's a robot with real style.",
        t: ["It should be small and silver, with big eyes.", "Tall and green, like you!", "It should look like a cat, with purple fur."],
        x: [["big and blue", -1], ["it should have wheels", -1]]
      },
      {
        c: "Robots need names. Would you give it a funny name or a serious name? What would you call it?",
        he: "שם מצחיק או רציני? איך תקראו לו? A funny name, like Mister Beep.",
        a: [],
        o: "Perfect! I'll paint the name on its side.",
        t: ["A funny name, like Mister Beep.", "I'd call it Captain Clean.", "Something serious, like Robot Max."],
        x: [["beepy", -1], ["i will call him bob", -1]]
      },
      {
        c: "Oh dear! I've switched it on, and the robot is dancing instead of working. What should we do?",
        he: "הרובוט רוקד במקום לעבוד! מה עושים? Let it dance for a while! או Switch it off and on again.",
        a: [],
        o: "Ha ha! Good idea. But honestly, I like its dancing.",
        t: ["Let it dance for a while!", "Switch it off and on again.", "Teach it to clean while it dances!"],
        x: [["turn it off", -1], ["dance with it", -1]]
      },
      {
        c: "Some people worry that robots will do all the jobs one day. Do you think that's a good thing or a bad thing? Why?",
        he: "יש שחוששים שרובוטים יעשו את כל העבודות. זה טוב או רע? למה? A good thing, because robots can help us.",
        a: [
          { k: ['bad not worry scary sad'], n: 'know', r: "A careful answer. People will always need people." },
          { k: ['good great better easier help'], r: "An optimist! Robots could help us with the boring jobs." }
        ],
        o: "Good point. It's a big question for the future.",
        t: ["A bad thing, because people need jobs.", "A good thing, because robots can help us."],
        x: [["bad because people need jobs", 0], ["it's good because robots help", 1], ["a good thing", 1], ["both", -1], ["i don't know", -1]]
      }
    ],
    end: "Our robot is ready! It cleans, it helps, and it dances. Just like me, really!"
  },
  {
    id: 'sb114', title: "Coco's Kitchen Cup",
    he: "תחרות בישול: מספרים לשופטת קוקו על המנה, מצילים רוטב חריף וזוכים",
    turns: [
      {
        c: "Welcome to Coco's Kitchen Cup! You have one hour to cook anything you like. What dish are you going to make?",
        he: "איזו מנה תכינו? I'm going to make spaghetti with tomato sauce.",
        a: [],
        o: "Ooh, sounds delicious! The clock is ticking.",
        t: ["I'm going to make spaghetti with tomato sauce.", "A big shakshuka with fresh bread.", "Chocolate pancakes with strawberries."],
        x: [["pizza", -1], ["i will do a cake", -1]]
      },
      {
        c: "Every great dish has a special ingredient. What's yours, and why does it make the dish special?",
        he: "מה המרכיב המיוחד שלכם, ולמה הוא מיוחד? A little honey, because it makes it sweeter.",
        a: [],
        o: "What a clever idea! I can smell it already.",
        t: ["A little honey, because it makes it sweeter.", "Fresh basil. It makes everything smell amazing.", "Love! Ha ha, and a bit of salt."],
        x: [["cheese", -1], ["more salt because it is tasty", -1]]
      },
      {
        c: "Oh no! You've only got ten minutes left, and your sauce is too spicy. What will you do?",
        he: "נשארו עשר דקות והרוטב חריף מדי! מה תעשו? I'll add some yogurt.",
        a: [
          { k: ['water milk yogurt yoghurt sugar honey cream tomato'], r: "Smart move! That will make it milder." },
          { k: ['again new start'], r: "Brave! Starting again takes real courage." },
          { k: ['serve spicy good fine keep like'], r: "Bold! Some judges love spicy food. Luckily, I'm one of them." }
        ],
        o: "Quick thinking! A true chef never panics.",
        t: ["I'll add some yogurt.", "I'll start again, quickly!", "I'll serve it. Spicy is good!"],
        x: [["add some milk", 0], ["put more water", 0], ["start again", 1], ["make a new one", 1], ["i like it spicy", 2], ["i don't know", -1], ["cry", -1]]
      },
      {
        c: "Time's up! I'm tasting it now... Mmm! If you could change one thing to make it even better, what would you change?",
        he: "אם הייתם יכולים לשנות דבר אחד כדי שיהיה עוד יותר טוב, מה הייתם משנים? I would add more cheese on top.",
        a: [
          { k: ['nothing perfect'], r: "Confident! I like that. It really is very good." },
          { k: ['add more change make less better bigger put'], r: "Great idea! A true chef always wants to improve." }
        ],
        o: "Interesting! I'll write that on my judge's card.",
        t: ["I would add more cheese on top.", "I'd make it look prettier on the plate.", "Nothing! It's already perfect."],
        x: [["nothing it's perfect", 0], ["i would add more salt", 1], ["make it less spicy", 1], ["the colour", -1], ["i don't know", -1]]
      },
      {
        c: "And the winner is... you! You've won the golden spoon. What would you like to say to everyone?",
        he: "זכיתם בכף הזהב! מה תגידו לכולם? Thank you! I love cooking, and I'm so happy!",
        a: [],
        o: "What a lovely speech! Everyone is clapping for you.",
        t: ["Thank you! I couldn't do it without the judge.", "I love cooking, and I'm so happy!", "Thanks, Coco! Next time, I'll cook for you."],
        x: [["thank you everyone", -1], ["i am the best", -1]]
      }
    ],
    end: "Congratulations, champion! See you next year at Coco's Kitchen Cup. Don't forget your golden spoon!"
  },
  {
    id: 'sb115', title: 'The escape room',
    he: "חדר בריחה עם קוקו: פותרים רמזים יחד ויוצאים בזמן",
    turns: [
      {
        c: "Welcome to the escape room! We have thirty minutes to get out. Have you ever done an escape room before?",
        he: "הייתם פעם בחדר בריחה? No, this is my first time. או Yes, I've done two before.",
        a: [
          { k: ['no not never first'], r: "Your first time! Don't worry, I've done this a hundred times. Well, twice." },
          { k: ['yes once twice times done did'], r: "Great, you've got experience! I'm so glad you're on my team." }
        ],
        o: "No problem! We'll work it out together.",
        t: ["No, this is my first time.", "Yes, I've done two before."],
        x: [["no never", 0], ["this is my first time", 0], ["yes", 1], ["yes i did it two times", 1], ["what is it", -1], ["i did it once", 1]]
      },
      {
        c: "First clue! There's a locked box with a three-number code, and a painting with three cats on it. What should we try?",
        he: "קופסה נעולה עם קוד של שלוש ספרות, ותמונה עם שלושה חתולים. מה ננסה? Let's try three, three, three.",
        a: [
          { k: ['three 333 cat count painting picture'], r: "Yes! Three, three, three... Click! The box is open!" }
        ],
        o: "Good idea! Oh, look, the box opened anyway!",
        t: ["Let's try three, three, three.", "We should count the cats.", "Let's look behind the painting."],
        x: [["three three three", 0], ["333", 0], ["count the cats", 0], ["break the box", -1], ["i don't know", -1]]
      },
      {
        c: "Inside the box there's a key and a torch. The room has a dark cupboard and a door. Which should we open first, and why?",
        he: "בקופסה יש מפתח ופנס. נפתח קודם את הארון החשוך או את הדלת? The cupboard, because we have a torch.",
        a: [
          { k: ['cupboard closet wardrobe'], r: "Good thinking! Look, inside the cupboard there's a map." },
          { k: ['door'], r: "The door is still locked! But wait, there's a map under it." }
        ],
        o: "Let's check both! Look, there's a map in the cupboard.",
        t: ["The cupboard, because we have a torch.", "The door, because we have a key."],
        x: [["the cupboard because it's dark", 0], ["the door", 1], ["open the door with the key", 1], ["use the torch", -1], ["the closet", 0]]
      },
      {
        c: "The map shows a hidden button behind the bookshelf. It might be a trap! Should we press it? Why or why not?",
        he: "יש כפתור נסתר מאחורי מדף הספרים. אולי זו מלכודת! ללחוץ? Yes, let's press it. We need to get out!",
        a: [
          { k: ['no not wait careful'], r: "Careful thinking! But time is running out, so I'll press it. Beep!" },
          { k: ['yes press push sure'], r: "Brave! Okay, here goes... Beep!" }
        ],
        o: "Hmm! I'll press it. Here goes... Beep!",
        t: ["Yes, let's press it. We need to get out!", "No, it might be dangerous."],
        x: [["yes press it", 1], ["no it's a trap", 0], ["push it", 1], ["maybe", -1], ["let's wait", 0], ["yes because we need to get out", 1]]
      },
      {
        c: "A hidden door opened, and we escaped with one minute left! What was your favourite part of the escape room?",
        he: "יצאנו דקה לפני הסוף! מה היה החלק האהוב עליכם? Opening the box with the code.",
        a: [],
        o: "Great answer! We make a fantastic team.",
        t: ["Opening the box with the code.", "Pressing the hidden button!", "Finding the map in the cupboard."],
        x: [["the button", -1], ["when we found the map", -1]]
      }
    ],
    end: "We did it, partner! Next time, let's try the space escape room. Bring your torch!"
  }
]);
