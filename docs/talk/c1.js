// Talk with Coco, level c1 (specs/talk.md; format and writing rules: tools/TALK-WRITING.md).
// Mission talks (t<mission id>) first, then the home scenes (s<level><nn>). Check: node test/talk-check.js
window.EQ_TALK = window.EQ_TALK || {};
// Talk to Coco, level C1: mission talks (one per mission in docs/missions/c1.js). Rules: tools/TALK-WRITING.md.
window.EQ_TALK.c1 = (window.EQ_TALK.c1 || []).concat([
  {
    id: "tc1g01", title: "Coco's live commentary",
    he: "מדברים עם קוקו על פרשנות ספורט, הרגלים מעצבנים ו-be being, בהווה של מומחים",
    turns: [
      {
        c: "Ooh, that was a mission for experts! Imagine you're commentating on a match live. How would you describe the winning goal as it happens, in the present simple?",
        he: "תארו גול כמו שדר ספורט, בהווה פשוט. למשל: Levi takes the ball, he shoots, he scores!",
        a: [],
        o: "Goosebumps! Well, feather-bumps. You sound like a real commentator.",
        t: ["Levi takes the ball, dribbles past two players and scores!", "She runs down the wing, crosses, and it's a goal!", "He shoots from thirty metres and the crowd goes wild!"],
        x: [["he take the ball and he shoot and goal", -1], ["messi runs he kicks the ball and score", -1]]
      },
      {
        c: "My customers are forever asking me for green hats, and I'm always happy to help. Using always or constantly, what's a funny habit that someone you know has?",
        he: "איזה הרגל מצחיק יש למישהו שאתם מכירים? עם always או constantly. למשל: My friend is always humming songs.",
        a: [],
        o: "Ha! Everyone has a little habit like that. It's part of what makes people lovable.",
        t: ["My friend is always humming songs without noticing.", "My cousin is constantly taking photos of her food.", "Someone in my class is always telling terrible jokes."],
        x: [["my friend always make funny faces", -1], ["my friend is always being late to everything", -1]]
      },
      {
        c: "Here's a tricky one. I've been very quiet today, which isn't like me at all. Why do you think I'm being so quiet?",
        he: "למה קוקו שקטה היום? נחשו עם being. למשל: Maybe you're being quiet because you're tired.",
        a: [
          { k: ["tired sleepy sleep exhausted"], n: "not", r: "Spot on! I'm being quiet because I was up all night rearranging my feathers." },
          { k: ["sad upset unhappy angry bored lonely"], r: "Don't worry, nothing is wrong! I'm just being quiet while I concentrate." },
          { k: ["plan planning surprise thinking idea"], n: "no_idea not_know", r: "Ooh, you've caught me! I'm being quiet because I'm planning a surprise for the shop." },
          { k: ["hungry cracker crackers food eat eating"], r: "You know me too well! I'm saving my energy for a cracker." }
        ],
        o: "Hmm, good thinking! Actually, I'm being quiet because I'm listening so carefully to you.",
        t: ["Maybe you're being quiet because you're tired.", "I think you're planning a surprise for someone.", "You're probably being quiet because you're hungry."],
        x: [["because you are tired", 0], ["you are sad", 1], ["maybe you planning something", 2], ["you want crackers", 3], ["i dont know", -1], ["you are being shy", -1], ["no idea", -1]]
      },
      {
        c: "I'm thinking of learning the drums, although my neighbours think it's a terrible idea. What are you thinking of doing this year that you've never done before?",
        he: "מה אתם שוקלים לעשות השנה? I'm thinking of... למשל: I'm thinking of joining a dance class.",
        a: [],
        o: "Ooh, new adventures are the best kind. Whatever you choose, I'll be cheering you on.",
        t: ["I'm thinking of joining a basketball team.", "I'm thinking of learning to play the guitar.", "I'm thinking of starting a cooking club with my friends."],
        x: [["i think to learn guitar", -1], ["i am thinking of go to the gym", -1]]
      },
      {
        c: "Before I fly off: headlines use the present simple, like Local Teen Wins Gold. If tomorrow's newspaper had a headline about you, what would it say?",
        he: "כתבו כותרת עיתון עליכם בהווה פשוט. למשל: Local teen breaks world record.",
        a: [],
        o: "Ha! I'd definitely buy that newspaper. Front page, no doubt.",
        t: ["Local teen breaks world record for the longest handstand.", "Student invents an app that does homework in seconds.", "Teenager teaches parrot to speak five languages."],
        x: [["teen win the world cup", -1], ["girl makes the best pizza in israel", -1]]
      }
    ],
    end: "You're being brilliant today, and I mean that. See you next time, champion!"
  },
  {
    id: "tc1g02", title: "Stories in the past",
    he: "מספרים לקוקו סיפורים בעבר, עם past continuous, past perfect ו-was going to",
    turns: [
      {
        c: "Story time! Every good story starts with the background. Think of a happy day you remember well. What was happening around you when it began?",
        he: "תארו את הרקע ב-past continuous. למשל: The sun was shining and my friends were laughing.",
        a: [],
        o: "Ooh, I can picture it already. You're a natural storyteller.",
        t: ["The sun was shining and everyone was laughing on the beach.", "It was raining, and I was waiting for the bus.", "My friends were playing football in the park."],
        x: [["it was rain and i was in my room", -1], ["we was sitting in the class", -1]]
      },
      {
        c: "Lovely. Now let's go further back. What's something you had never done until last year, and how did it feel the first time?",
        he: "מה לא עשיתם אף פעם עד השנה שעברה? למשל: I had never been on a plane before last summer.",
        a: [],
        o: "What a milestone! The first time is always the one you remember.",
        t: ["I had never been on a plane before last summer.", "Before last year, I had never cooked a whole meal.", "I had never seen snow until we went to the Hermon."],
        x: [["i never fly before", -1], ["i had never been to eilat it was amazing", -1]]
      },
      {
        c: "Plans don't always work out. Tell me about something you were going to do but didn't. What got in the way?",
        he: "ספרו על תוכנית שלא יצאה לפועל, עם was going to. למשל: We were going to go to the beach, but it rained.",
        a: [
          { k: ["rain rained raining weather storm hot cold wind windy"], n: "sick ill flu", r:"Ah, the weather, the great ruiner of plans! I had hoped to fly yesterday, but the wind had other ideas." },
          { k: ["forgot forget forgotten"], r: "That happens to the best of us. I was going to call my cousin, but I completely forgot." },
          { k: ["sold closed cancel cancelled canceled full ticket tickets"], r: "What a shame! I had hoped to see a show last week, but every ticket had gone." }
        ],
        o: "Well, plans change, and the new version often makes a better story.",
        t: ["We were going to go to the beach, but it rained all day.", "I was going to call my friend, but I forgot.", "We were going to see a film, but it was sold out."],
        x: [["we was going to the beach but it rain", 0], ["i forgot to do my homework", 1], ["i was going to the cinema but it was closed", 2], ["nothing", -1]]
      },
      {
        c: "Here's a little mystery. I came home last night with my feathers soaking wet and covered in sand. What had I been doing all afternoon?",
        he: "מה קוקו עשתה כל אחר הצהריים? עם had been. למשל: You had been swimming in the sea.",
        a: [
          { k: ["beach sea swim swimming swam ocean waves sand sandcastle sandcastles"], r: "Correct! I had been swimming in the sea and rolling in the sand. Very undignified." },
          { k: ["rain raining storm shower puddle puddles"], r: "Good guess! I had been dancing in the rain, and then I landed in a sandpit." }
        ],
        o: "What an imagination! Actually, I had been playing on the beach all afternoon.",
        t: ["You had been swimming in the sea all afternoon.", "I think you had been dancing in the rain.", "You had been building sandcastles with your friends."],
        x: [["you had been swim in the sea", 0], ["you was in the rain", 1], ["at the beach", 0], ["playing with a dog", -1]]
      },
      {
        c: "Final question! When Howard Carter opened Tutankhamun's tomb, it had been closed for over three thousand years. If you buried a time capsule today, what would you put in it, and why?",
        he: "מה הייתם שמים בקפסולת זמן? למשל: I'd put in my phone, so people could see what we had used.",
        a: [],
        o: "What a choice! Whoever opens that capsule is in for a real treat.",
        t: ["I'd put in a phone, so people could see what we had been using.", "I'd add a letter describing what a normal school day was like.", "I would put in a football shirt and a photo of my favourite team."],
        x: [["a letter for the future people", -1], ["my phone and some music because it is important", -1]]
      }
    ],
    end: "By the time you finish this app, you'll have told me a hundred stories. I can't wait. Bye for now!"
  },
  {
    id: "tc1g03", title: "Habits, guesses and refusals",
    he: "מדברים עם קוקו על הרגלים מהעבר, ניחושים ודברים שמסרבים לעבוד, עם will, would ו-should",
    turns: [
      {
        c: "When I was a chick, I would spend hours in my tree, copying every sound I heard. What would you do every summer when you were younger?",
        he: "מה הייתם עושים כל קיץ כשהייתם קטנים? עם would. למשל: Every summer I would go to the beach.",
        a: [],
        o: "That sounds like a wonderful way to spend a summer.",
        t: ["Every summer I would go to the beach with my cousins.", "We would stay up late and play board games.", "I would spend hours building things out of Lego."],
        x: [["i would go to the pool every day", -1], ["we go to grandma house", -1]]
      },
      {
        c: "Listen! Someone's knocking at my shop door, and it's only eight in the morning. Who do you think that'll be?",
        he: "נחשו מי דופק בדלת, עם will. למשל: That'll be the delivery. או That'll be a customer.",
        a: [
          { k: ["delivery parcel package post postman courier pizza order"], r: "You're right, that'll be the delivery. My new silk scarves have arrived!" },
          { k: ["customer customers client buyer shopper"], r: "That'll be my first customer! Early birds get the best bargains." },
          { k: ["friend neighbour neighbor cousin"], r: "Ooh, that'll be my neighbour. She always pops in for tea at eight." }
        ],
        o: "Let me peek. Oh, it's the postman, and he's brought my new scarves!",
        t: ["That'll be the delivery with your new clothes.", "That'll be your first customer of the day.", "That'll probably be your neighbour."],
        x: [["that will be the pizza", 0], ["it will be a customer", 1], ["maybe your friend", 2], ["i dont know", -1], ["the delivery man", 0]]
      },
      {
        c: "Things can be so stubborn. This morning my till wouldn't open, no matter what I tried. What's something that wouldn't work for you when you really needed it?",
        he: "מה סירב לעבוד דווקא כשהייתם צריכים? עם wouldn't. למשל: My phone wouldn't turn on.",
        a: [],
        o: "How annoying! Machines always seem to know when we're in a hurry.",
        t: ["My phone wouldn't turn on just before my exam.", "The door wouldn't open, so I had to wait outside.", "My laptop wouldn't connect to the internet during a lesson."],
        x: [["my computer not work in the test", -1], ["the printer wouldnt print my project", -1]]
      },
      {
        c: "My cousin will talk for hours about seeds if you let her. Do you know someone who'll happily talk about one topic forever? What's the topic?",
        he: "מי מדבר שעות על נושא אחד? עם will. למשל: My friend will talk about football for hours.",
        a: [],
        o: "Ha! Every group needs one expert like that.",
        t: ["My friend will talk about football for hours if you let him.", "My grandpa will tell the same stories again and again.", "My best friend will talk about video games all day."],
        x: [["my brother talk about cars all the time", -1], ["my friend and k pop", -1]]
      },
      {
        c: "To finish, something a little more formal. Imagine you run a shop like mine. How would you finish this sign for the door: Should you need any help...?",
        he: "השלימו את השלט בניסוח רשמי. למשל: Should you need any help, please ask at the counter.",
        a: [],
        o: "Very elegant! I'm putting that sign on my door tomorrow.",
        t: ["Should you need any help, please ask at the counter.", "Should you need any help, just ring the bell.", "Should you need any help, our staff will be happy to help."],
        x: [["should you need help call me", -1], ["please ask the worker", -1]]
      }
    ],
    end: "That was fabulous. You should be very proud, and I'll be waiting for you next time!"
  },
  {
    id: "tc1v01", title: "Over the moon or gutted?",
    he: "מדברים עם קוקו על רגשות במילים מדויקות: over the moon, on edge, livid ועוד",
    turns: [
      {
        c: "Eight brilliant feelings! Let's start with a happy one. What would make you absolutely over the moon this year?",
        he: "מה ישמח אתכם מאוד השנה? למשל: I'd be over the moon if our team won the league.",
        a: [],
        o: "Ooh, that would make me over the moon too! Feathers crossed for you.",
        t: ["I'd be over the moon if our team won the league.", "I would be over the moon if I got a puppy.", "A great mark in my English exam would make me over the moon."],
        x: [["if i get a new phone", -1], ["i will be over the moon if we go to london", -1]]
      },
      {
        c: "Now a nervous one. Before a big test or a match, are you usually calm, or completely on edge? And what helps you relax?",
        he: "לפני מבחן אתם רגועים או on edge? למשל: I'm usually on edge, so I listen to music.",
        a: [
          { k: ["calm relaxed chill", "edge nervous stress stressed anxious tense worried"], r: "A bit of both, then! Pressure feels different every time, and that's perfectly normal." },
          { k: ["not never", "edge nervous stress stressed anxious tense worried"], n: "sure know idea", r: "Calm under pressure! I'm deeply impressed, and a little jealous." },
          { k: ["edge nervous stress stressed anxious tense worried scared"], r: "Being on edge is totally normal. It just means you care. Deep breaths always help me." },
          { k: ["calm relaxed chill cool fine okay ok"], n: "not never", r: "Calm under pressure! I'm deeply impressed, and a little jealous." }
        ],
        o: "Everyone handles pressure differently. Whatever works for you is the right way.",
        t: ["I'm usually on edge, so I listen to music to relax.", "I'm quite calm, to be honest."],
        x: [["i am very nervous", 2], ["calm i play music", 3], ["i am not calm at all", -1], ["i am stress", 2], ["it depends", -1], ["i'm not nervous at all", 1], ["i don't know", -1], ["sometimes calm sometimes nervous", 0], ["i am never stressed", 1]]
      },
      {
        c: "I was flabbergasted to learn that some parrots live to be eighty! What's a fact, a plot twist or a trick that left you completely flabbergasted?",
        he: "מה הדהים אתכם לגמרי? עובדה, טוויסט בסדרה או קסם. למשל: I was flabbergasted by the ending of a series.",
        a: [],
        o: "Flabbergasting! Some things really do leave you dumbfounded.",
        t: ["I was flabbergasted by the twist at the end of a series I watched.", "I was dumbfounded when I learnt that octopuses have three hearts.", "A magician made a coin disappear, and I was completely taken aback."],
        x: [["the end of the movie was crazy", -1], ["that the sun is very very big", -1]]
      },
      {
        c: "What really annoys me is people who never say thank you. What small thing makes you absolutely livid, even though you know it really shouldn't?",
        he: "איזה דבר קטן מעצבן אתכם מאוד? למשל: I get livid when someone spoils the end of a series.",
        a: [],
        o: "I completely understand. It's always the small things that ruffle our feathers.",
        t: ["I get livid when someone spoils the end of a series.", "People who push in when I'm queuing make me livid.", "It makes me livid when my phone battery runs out."],
        x: [["when people are late", -1], ["when somebody touch my things", -1]]
      },
      {
        c: "Let's end on a warm one. What small act of kindness, even from a stranger, do you think would really touch someone?",
        he: "איזו מחווה קטנה של טוב לב יכולה לרגש מישהו? למשל: I think a handwritten card would really touch someone.",
        a: [],
        o: "That's lovely. Small kindnesses are often the ones people remember for years.",
        t: ["I think a handwritten card would really touch someone.", "A stranger helping you carry heavy bags would be really touching.", "I'd be touched if someone remembered a small thing I'd told them."],
        x: [["help someone with homework", -1], ["when somebody say thank you and smile", -1]]
      }
    ],
    end: "I'm over the moon that we talked today. Thank you, and see you soon!"
  },
  {
    id: "tc1v02", title: "Stroll, stride or trudge?",
    he: "מדברים עם קוקו על איך הולכים: stroll, stride, tiptoe, trudge ועוד",
    turns: [
      {
        c: "Be honest! On the first morning of the school week, do you stride in full of energy, or trudge in like a tired penguin?",
        he: "בבוקר הראשון של השבוע אתם stride או trudge? למשל: I definitely trudge in. או I stride in.",
        a: [
          { k: ["trudge trudged tired sleepy slowly slow heavy penguin"], n: "not", r: "A fellow trudger! Mornings turn even the bravest parrot into a sleepy penguin." },
          { k: ["stride strode energy energetic confident fast quick happy"], r: "Striding in! I love that. You must be a morning person." }
        ],
        o: "Ha! However you walk in, the important thing is that you get there.",
        t: ["I definitely trudge in, especially after a late night.", "I usually stride in, ready for the day.", "It depends, but mostly I trudge."],
        x: [["i trudge like a penguin", 0], ["i stride with energy", 1], ["i walk normal", -1], ["i am so tired on sunday", 0], ["i run because i am late", -1], ["striding", 1]]
      },
      {
        c: "Imagine it's midnight, and you're tiptoeing to the kitchen for a snack. What's the snack, and how do you avoid making a single sound?",
        he: "על קצות האצבעות למטבח בחצות: מה הנשנוש ואיך לא משמיעים רעש? למשל: I'd tiptoe to the fridge for some chocolate.",
        a: [],
        o: "A midnight tiptoe for a snack! Very stealthy, and very tasty.",
        t: ["I'd tiptoe to the fridge for some chocolate, without turning on the light.", "I would creep in my socks and grab some cereal.", "It would be cold pizza, and I'd eat it standing by the fridge."],
        x: [["chocolate and i walk very slow", -1], ["i take ice cream and run", -1]]
      },
      {
        c: "If you had a free afternoon anywhere in Israel, where would you love to stroll or wander for hours, and why there?",
        he: "איפה הייתם רוצים לטייל לאט, stroll או wander? למשל: I'd stroll along the beach at sunset.",
        a: [],
        o: "Ooh, what a lovely place to wander. I'd fly there with you if I could.",
        t: ["I'd love to stroll along the beach in Tel Aviv at sunset.", "I would wander around the old city of Akko.", "I'd stroll through the Carmel market and try all the food."],
        x: [["in the beach because i love the sea", -1], ["haifa the garden is beautiful", -1]]
      },
      {
        c: "Here's a fun challenge. Which word fits someone getting off a really wild rollercoaster: stroll, stagger, or march? And why?",
        he: "איזו מילה מתאימה למי שיורד מרכבת הרים? למשל: Stagger, because you feel dizzy.",
        a: [
          { k: ["stagger staggered staggering"], r: "Exactly! After a rollercoaster, everyone staggers off with legs like jelly." },
          { k: ["stroll strolled march marched"], r: "That would be one very brave rider! Most of us stagger off, wobbling like jelly." }
        ],
        o: "Interesting choice! I'd say stagger, because your legs feel like jelly afterwards.",
        t: ["Stagger, because you feel dizzy afterwards.", "I'd say stroll, if you're very brave.", "March, because you're proud you did it!"],
        x: [["stagger because dizzy", 0], ["i think march", 1], ["stroll", 1], ["walk", -1], ["staggering", 0]]
      },
      {
        c: "And to finish our walk: on a long hike, which kind of walker are you, the one who marches ahead, the one who wanders off, or the one who trudges at the back?",
        he: "איזה הולך אתם בטיול ארוך? למשל: I'm the one who marches ahead. או I wander off.",
        a: [
          { k: ["march ahead front first leader lead"], n: "not", r:"A leader! Just remember to wait for the trudgers at the back." },
          { k: ["wander wandered off explore exploring photos"], r: "An explorer! Just don't wander too far from the group." },
          { k: ["trudge trudged back last behind slow"], r: "No shame in that! The ones at the back often see the best views." }
        ],
        o: "Every hiking group needs all kinds of walkers, and you'd fit right in.",
        t: ["I'm the one who marches ahead.", "I usually wander off to take photos.", "I'm definitely the one trudging at the back."],
        x: [["i march in the front", 0], ["i wander off", 1], ["me at the back", 2], ["in the middle", -1], ["i am the last one", 2]]
      }
    ],
    end: "Time for me to stroll back to my shop. Thanks for walking through these words with me!"
  },
  {
    id: "tc1l01", title: "Cringe, then laugh",
    he: "מדברים עם קוקו על הסיפור של Hannah ועל רגעים מביכים שאפשר לצחוק עליהם",
    turns: [
      {
        c: "Poor Hannah! She introduced herself as the new maths teacher, when she was actually the English teacher. If you'd been in that staff room, how would you have reacted?",
        he: "איך הייתם מגיבים בחדר המורים? למשל: I would have laughed, but in a friendly way.",
        a: [],
        o: "I can just imagine it. That staff room must have been quite a scene.",
        t: ["I would have laughed, but in a friendly way.", "I'd have smiled at her to make her feel better.", "I probably would have pretended not to notice."],
        x: [["i laugh a lot", -1], ["i would say its ok everybody make mistakes", -1]]
      },
      {
        c: "Hannah laughed at herself, and it actually broke the ice. Do you think laughing at yourself is a strength, or can it make things even more awkward?",
        he: "לצחוק על עצמכם זה יתרון או שזה מביך? למשל: It's a strength, because it helps everyone relax.",
        a: [
          { k: ["awkward worse weird embarrassing cringe cringey"], n: "not", r: "Fair point. It can feel awkward at first, but people often relax when they see you laughing." },
          { k: ["strength strong good helps help helpful better relax relaxed confident brave yes agree"], r: "I agree. Laughing at yourself shows confidence, and it makes everyone else relax too." }
        ],
        o: "Interesting view. I think it depends on the moment and the people around you.",
        t: ["It's a strength, because it helps everyone relax.", "Sometimes it just makes things more awkward."],
        x: [["it is a strength", 1], ["i think it makes more awkward", 0], ["it is good because people relax", 1], ["i dont know maybe", -1], ["it is not awkward it is good", 1]]
      },
      {
        c: "Everyone has a classic cringe moment, like waving back at someone who was actually waving at the person behind you. Which everyday cringe moment do you think is the funniest?",
        he: "איזה רגע מביך יומיומי הכי מצחיק בעיניכם? למשל: Calling a teacher Mum by mistake.",
        a: [],
        o: "Ha! That one makes my feathers curl. Time really does turn cringe into comedy.",
        t: ["Calling the teacher Mum by mistake is the funniest one.", "Pushing a door that clearly says pull.", "Saying you too when the waiter says enjoy your meal."],
        x: [["when you say mom to the teacher", -1], ["when you fall on the stairs and everybody see", -1]]
      },
      {
        c: "Hannah had practised everything, but her nerves still got the better of her. What's your best trick for making a good impression on a first day somewhere new?",
        he: "מה הטריק שלכם לרושם טוב ביום הראשון? למשל: I try to smile and ask people questions.",
        a: [],
        o: "Excellent advice. I'll try it on the next new customer who flies into my shop.",
        t: ["I try to smile and ask people questions about themselves.", "I just try to be myself and not overthink it.", "I make a little joke early on to break the ice."],
        x: [["be nice and smile", -1], ["i dont talk too much the first day", -1]]
      },
      {
        c: "My final question: Hannah says laughing at yourself is underrated. What's something else you think is seriously underrated, and why?",
        he: "מה עוד לדעתכם לא מוערך מספיק? למשל: I think sleep is underrated, because everything feels easier.",
        a: [],
        o: "Ooh, I'd never thought of that, but you've convinced me. Underrated indeed!",
        t: ["Sleep is seriously underrated, because everything feels easier after it.", "Walking is underrated, because it clears your head.", "Saying sorry is underrated, because it fixes so many problems."],
        x: [["water is underrated", -1], ["reading books because it is relax", -1]]
      }
    ],
    end: "You've been wonderful company. And remember, a little cringe never hurt anyone. Bye for now!"
  },
  {
    id: "tc1l02", title: "Walk it out",
    he: "מדברים עם קוקו על ההרצאה של Doctor Price: הליכה, סיבולת ורעיונות יצירתיים",
    turns: [
      {
        c: "Doctor Price says walking on two legs is one of the strangest things humans do. As a bird, I totally agree! What surprised you most in her talk?",
        he: "מה הפתיע אתכם בהרצאה? למשל: The race between people and horses surprised me.",
        a: [
          { k: ["horse horses race wales"], r: "The horse race amazed me too! Imagine beating a horse over thirty-five kilometres." },
          { k: ["creative creativity ideas idea stanford"], n: "no_idea", r: "That surprised me too! Our best ideas might be waiting at the end of a walk." },
          { k: ["sweat sweating sweaty pant panting cool"], r: "Yes, sweat is our built-in air conditioning, while most animals have to stop and pant." },
          { k: ["chimpanzee chimpanzees chimp chimps monkey energy efficient"], r: "Amazing, really. We use far less energy than chimpanzees do when they walk on two legs." }
        ],
        o: "So much to think about! Walking is far more fascinating than it looks.",
        t: ["The race between people and horses really surprised me.", "I was surprised that walking makes us more creative.", "I didn't know we use less energy than chimpanzees."],
        x: [["the horses race", 0], ["that walking make you creative", 1], ["the sweat thing", 2], ["chimps use more energy", 3], ["everything", -1], ["no idea", -1]]
      },
      {
        c: "Would you ever enter a thirty-five kilometre race against horses, or would you rather cheer from the side with a cold drink?",
        he: "הייתם רצים נגד סוסים או מעודדים מהצד? למשל: I'd rather cheer from the side.",
        a: [
          { k: ["cheer cheering watch watching side drink sofa couch"], r: "Very sensible! Someone has to hold the water and shout encouragement." },
          { k: ["enter race run running yes definitely try"], n: "not no never", r: "Brave! With enough training, who knows, you might even beat a horse." }
        ],
        o: "Either way, I think the horses would be impressed to meet you.",
        t: ["I'd rather cheer from the side with a cold drink.", "I'd definitely enter. It sounds like an amazing challenge."],
        x: [["i will cheer", 0], ["yes i run against horse", 1], ["no never", -1], ["i would watch it on tv", 0], ["maybe if i train a lot", -1]]
      },
      {
        c: "In the Stanford study, people had far more creative ideas while walking. Where do your best ideas usually come to you, and why do you think that is?",
        he: "איפה עולים לכם הרעיונות הכי טובים? למשל: My best ideas come in the shower, because I'm relaxed.",
        a: [],
        o: "Fascinating! Wherever it is, look after that place. It's your own little idea factory.",
        t: ["My best ideas come in the shower, because I'm relaxed.", "I get good ideas while I'm walking the dog.", "My best ideas come late at night, when everything is quiet."],
        x: [["in my bed before sleep", -1], ["when i walk to school i think a lot", -1]]
      },
      {
        c: "If schools added a short walking break between lessons, do you think it would help students concentrate? Why, or why not?",
        he: "הפסקת הליכה בין שיעורים תעזור להתרכז? למשל: Yes, because after a walk your brain feels fresh.",
        a: [],
        o: "Interesting! It would certainly make the school day feel different.",
        t: ["Yes, because after a walk your brain feels fresh.", "I don't think so, because people would just chat.", "Maybe, but only if the break was long enough."],
        x: [["yes because we sit too much", -1], ["no it is waste of time", -1]]
      },
      {
        c: "One more before I flutter off. Humans are among the best endurance runners on the planet. What's something that takes real endurance, but you think is worth it?",
        he: "מה דורש סיבולת אבל שווה את זה? למשל: Learning an instrument takes endurance, but it's worth it.",
        a: [],
        o: "Well said! Most things worth doing take a little endurance. Even growing these feathers.",
        t: ["Learning a musical instrument takes endurance, but it's worth it.", "Studying for exams takes endurance, but the results are worth it.", "Long hikes take endurance, but the views are worth it."],
        x: [["running a marathon is hard but worth", -1], ["learn english every day", -1]]
      }
    ],
    end: "Now go for a walk and come back full of brilliant ideas. See you soon!"
  },
  {
    id: "tc1l03", title: "Is that really you?",
    he: "מדברים עם קוקו על הונאות קול מהפודקאסט: איך מזהים red flag ומה עושים",
    turns: [
      {
        c: "Zoe opened with a tough one. Imagine a call from a voice that sounds exactly like someone you know, asking for money right now. What would your first reaction honestly be?",
        he: "מה הייתם עושים בשיחה כזאת? למשל: I'd hang up and call them back on their real number.",
        a: [
          { k: ["hang hung back"], r: "That's exactly what Adam advised: hang up and call back on a number you already know." },
          { k: ["tell adult adults parent parents mum mom dad teacher"], r: "Wise move! Telling a trusted adult before doing anything is always a good idea." },
          { k: ["ask question questions check test word code"], r: "Smart! Checking first, with a question only the real person could answer, is a brilliant idea." },
          { k: ["panic help send pay money worried scared quickly"], n: "not never", r: "That's a very human reaction, and it's exactly what scammers count on. Slowing down is the key." }
        ],
        o: "That's an honest answer. The podcast's advice is simple: slow down and check first.",
        t: ["I'd hang up and call them back on their real number.", "I would ask them a question only they would know.", "I'd probably panic and want to help straight away."],
        x: [["i hang up and call him back", 0], ["i would tell my parents", 1], ["ask him a question", 2], ["i would check if it is really him", 2], ["i will send money fast", 3], ["i would not send money", -1], ["i don't know", -1]]
      },
      {
        c: "Adam says that if a call feels urgent and emotional, that's a red flag. What other red flags would make you suspicious of a call or a message?",
        he: "אילו עוד סימני אזהרה יחשידו אתכם? למשל: A strange number and spelling mistakes are red flags.",
        a: [],
        o: "Very useful! The more red flags we know, the harder we are to fool.",
        t: ["If they tell me not to tell anyone, that's a red flag.", "A strange number and lots of spelling mistakes are red flags.", "If someone wants money really quickly, I'd be suspicious."],
        x: [["unknown number", -1], ["if they want my bank details", -1]]
      },
      {
        c: "Zoe thinks it's a bit sad that we can't just trust a familiar voice anymore. Do you agree, or is a little scepticism simply part of modern life?",
        he: "זה עצוב, או פשוט חלק מהחיים היום? למשל: It's quite sad. או It's just part of modern life.",
        a: [
          { k: ["sad shame pity unfortunate scary agree"], n: "not part normal life", r: "I feel the same. It's a pity that technology makes us doubt the voices we love." },
          { k: ["normal part modern life fine okay ok necessary price careful"], r: "Very mature! As Adam said, healthy scepticism isn't paranoia." }
        ],
        o: "That's a thoughtful answer. Technology gives us a lot, but it asks for a little caution too.",
        t: ["I agree. It's quite sad, actually.", "I think being careful is just part of modern life."],
        x: [["yes it is sad", 0], ["it is normal today", 1], ["i agree", 0], ["it is part of life", 1], ["kind of scary", 0], ["i agree but it is part of modern life", 1], ["i don't agree", -1]]
      },
      {
        c: "Let's lighten things up. Imagine you had a friendly copy of your own voice for one day. What harmless job would you give it, and why?",
        he: "אילו הייתה לכם העתקה של הקול שלכם ליום אחד, איזו משימה תמימה הייתם נותנים לה? למשל: I'd make it read my notes aloud.",
        a: [],
        o: "Ooh, creative! Just make sure your copy doesn't start answering my questions for you.",
        t: ["I'd make it read my study notes out loud while I relax.", "I would let it tell bedtime stories in five different accents.", "I'd use it to sing songs I can't actually sing."],
        x: [["to answer my teacher", -1], ["make videos in other languages", -1]]
      },
      {
        c: "And finally, which piece of advice from the podcast would you pass on to a friend, and why that one?",
        he: "איזו עצה מהפודקאסט הייתם מעבירים לחבר? למשל: I'd tell them to slow down, because scammers rely on panic.",
        a: [],
        o: "Great choice. Passing it on might save someone a lot of trouble.",
        t: ["I'd tell them to slow down, because scammers rely on panic.", "I'd suggest a code word with the people you trust, because a copy can't know it.", "I'd say hang up and call back on a number you know."],
        x: [["the code word is the best", -1], ["call back to the real number", -1]]
      }
    ],
    end: "Stay curious and a little sceptical. It's me, the real Coco, saying goodbye. See you soon!"
  },
  {
    id: "tc1r01", title: "The science of giggles",
    he: "מדברים עם קוקו על המאמר על צחוק: למה צוחקים, ולמה אי אפשר לדגדג את עצמנו",
    turns: [
      {
        c: "Provine found we're about thirty times more likely to laugh with other people than alone. Does that match your experience, or do you laugh a lot on your own too?",
        he: "אתם צוחקים יותר עם אחרים או לבד? למשל: I laugh much more with my friends.",
        a: [
          { k: ["friends friend others people together company", "alone own myself"], r: "A bit of both! Laughter works in company, but a funny video can get us on our own too." },
          { k: ["friends friend others people together company yes agree"], r:"That makes sense. Laughter really is a social signal, just as Provine said." },
          { k: ["alone own myself videos video"], r: "Same here! A funny video can make me squawk even in an empty shop." }
        ],
        o: "Interesting! Laughter is such a strange and wonderful thing.",
        t: ["It matches. I laugh much more with my friends.", "I laugh a lot on my own, watching funny videos."],
        x: [["yes with my friends more", 1], ["i laugh alone at videos", 2], ["both", -1], ["it is true with my friends", 1], ["true", -1], ["it is not true i laugh alone", 2], ["on my own too", 2], ["with friends but also alone", 0]]
      },
      {
        c: "The article says most laughter follows ordinary remarks, not jokes. Why do you think people laugh at things that aren't even funny?",
        he: "למה צוחקים גם כשלא מצחיק? למשל: I think people laugh to show they're friendly.",
        a: [],
        o: "That's a clever explanation. Laughter seems to be more about people than punchlines.",
        t: ["I think people laugh to show they're friendly.", "Maybe we laugh because we feel nervous or awkward.", "People laugh to make others feel comfortable."],
        x: [["to be polite", -1], ["because they want to be nice with you", -1]]
      },
      {
        c: "The incongruity theory says a joke sets up one story, then switches to another. Could you tell me a short joke, or the funniest thing you've heard recently?",
        he: "ספרו בדיחה קצרה או משהו מצחיק ששמעתם. למשל: What do you call a parrot that flies away? A polygon!",
        a: [],
        o: "Thank you! Humour is so personal, which is exactly why philosophers still argue about it.",
        t: ["What do you call a parrot that flies away? A polygon!", "Why did the scarecrow win an award? He was outstanding in his field.", "The funniest thing I heard was my friend's impression of our teacher."],
        x: [["knock knock who is there", -1], ["my friend fall from the chair and everybody laugh", -1]]
      },
      {
        c: "Laughter may be older than language, because chimpanzees and gorillas laugh when they play. Which animal do you think has the best sense of humour, and why?",
        he: "לאיזו חיה יש את חוש ההומור הכי טוב? למשל: Dogs, because they always play tricks.",
        a: [],
        o: "Ha! I'd love to see that comedy show. Though parrots are clearly the funniest.",
        t: ["Dogs, because they always seem to be playing tricks.", "Parrots, obviously, because they copy everyone.", "I think monkeys, because they love to play."],
        x: [["cats because they are crazy", -1], ["the monkey", -1]]
      },
      {
        c: "Final question. Philosophers have argued about humour for over two thousand years. If you had to explain to an alien why humans laugh, what would you say?",
        he: "איך תסבירו לחייזר למה בני אדם צוחקים? למשל: I'd say we laugh to connect with each other.",
        a: [],
        o: "Brilliant! The alien would be laughing along by the end, I'm sure.",
        t: ["I'd say we laugh to connect with each other.", "I would say laughter shows that we feel happy and safe.", "I'd tell the alien we laugh when something surprises us."],
        x: [["because it is fun", -1], ["we laugh when we are happy", -1]]
      }
    ],
    end: "You've made this parrot very happy. Keep laughing, especially with friends. Until next time!"
  },
  {
    id: "tc1g04", title: "Might as well dream big",
    he: "מדברים עם קוקו על יכולות וניחושים, עם be able to, managed to ו-might have",
    turns: [
      {
        c: "I'd love to be able to sing opera, but my squawk isn't quite there yet. What would you love to be able to do that you can't do yet?",
        he: "מה הייתם רוצים להיות מסוגלים לעשות? למשל: I'd love to be able to play the piano.",
        a: [],
        o: "Ooh, that would be wonderful. I'm sure you'll be able to one day.",
        t: ["I'd love to be able to play the piano really well.", "I would love to be able to speak Spanish fluently.", "I'd love to be able to do a backflip."],
        x: [["i want to can fly", -1], ["to speak japanese very good", -1]]
      },
      {
        c: "Think of a time when something small went wrong, but you still managed to sort it out. What happened, and how were you able to fix it?",
        he: "ספרו על בעיה שהצלחתם לפתור, עם managed to. למשל: I missed the bus, but I managed to get a lift.",
        a: [],
        o: "Impressive! Staying calm and finding a way is a real talent.",
        t: ["I missed the bus, but I managed to get a lift with a friend.", "I lost my keys, but I was able to find them in the end.", "The printer broke, but I managed to finish my project on time."],
        x: [["i forgot my book but i borrow from friend", -1], ["my computer broke and i fix it", -1]]
      },
      {
        c: "Here's a mystery. My best hat has disappeared from the shop overnight! What might have happened to it, do you think?",
        he: "מה אולי קרה לכובע? עם might have. למשל: The wind might have blown it away.",
        a: [
          { k: ["mouse mice cat dog animal bird squirrel monkey"], r: "An animal might have taken it. A very stylish one, clearly." },
          { k: ["wind blew blown flew fly window"], r: "Ooh, it might well have blown out of the window. I did leave it open." },
          { k: ["stole stolen steal thief took taken borrow borrowed customer someone"], r: "Someone might have borrowed it! I'll check my visitor book." },
          { k: ["lost lose forgot forgotten misplaced left"], r: "I might have left it somewhere myself. I do get distracted by shiny things." }
        ],
        o: "Hmm, a real mystery! I'll investigate as soon as our chat is over.",
        t: ["The wind might have blown it out of the window.", "A customer might have taken it by mistake.", "You might have left it somewhere else."],
        x: [["maybe the wind blow it", 1], ["someone stole it", 2], ["a cat take it", 0], ["you lost it", 3], ["aliens", -1], ["a bird flew away with it", 0]]
      },
      {
        c: "Let's make some predictions. What do you think may well happen in the world of technology in the next ten years?",
        he: "מה עשוי לקרות בטכנולוגיה בעשר השנים הבאות? למשל: Cars may well drive themselves.",
        a: [],
        o: "That may well happen! I'll remember you said it first.",
        t: ["Cars may well drive themselves everywhere.", "We might well have robots helping at home.", "Phones may well be replaced by smart glasses."],
        x: [["robots do everything", -1], ["maybe we will fly in cars", -1]]
      },
      {
        c: "And finally! Your weekend plans are cancelled because of a storm, and you're stuck at home. What do you think you might as well do instead?",
        he: "התוכניות בוטלו בגלל סערה. מה כבר עדיף לעשות? עם might as well. למשל: I might as well clean my room.",
        a: [],
        o: "Sounds like a perfect plan B. Rainy days can be surprisingly wonderful.",
        t: ["I might as well finally clean my room.", "We might as well have a film marathon.", "I might as well catch up on my sleep."],
        x: [["watch netflix all day", -1], ["i might as well do my homework", -1]]
      }
    ],
    end: "You've been able to handle everything today. I might as well call you an expert. Bye for now!"
  },
  {
    id: "tc1g05", title: "If I were head teacher",
    he: "מדברים עם קוקו על דמיון ודרישות, עם If I were, insist that, I wish ו-It's time",
    turns: [
      {
        c: "If you were the head teacher for a day, what's the first thing you'd change, and why?",
        he: "אם הייתם מנהלים ליום אחד, מה הייתם משנים? למשל: If I were the head teacher, I'd start school at ten.",
        a: [],
        o: "Bold leadership! I suspect the students would vote for you immediately.",
        t: ["If I were the head teacher, I'd start school at ten.", "I'd insist that every student have a longer lunch break.", "If I were in charge, there would be no homework on Fridays."],
        x: [["no homework", -1], ["if i was the principal i make more trips", -1]]
      },
      {
        c: "Now imagine you're a strict football coach. What would you insist that every player do before a match?",
        he: "על מה הייתם מתעקשים כמאמנים? עם insist that + פועל בסיס. למשל: I'd insist that every player arrive early.",
        a: [],
        o: "Very professional! Your team would be the best-prepared in the league.",
        t: ["I'd insist that every player arrive an hour early.", "I would insist that everyone eat a good breakfast.", "I'd insist that each player switch off their phone."],
        x: [["they must sleep good", -1], ["i insist that they drink water", -1]]
      },
      {
        c: "I wish my shop were twice as big, so I could stock more hats. What's one thing you wish were different about your everyday routine?",
        he: "מה הייתם רוצים שיהיה אחרת בשגרה? עם I wish ... were. למשל: I wish the weekend were longer.",
        a: [],
        o: "I understand completely. If wishes were crackers, I'd be very full.",
        t: ["I wish the weekend were three days long.", "I wish mornings were a bit less rushed.", "I wish school started an hour later."],
        x: [["i wish i have more time", -1], ["i wish it was summer all the time", -1]]
      },
      {
        c: "Here's a phrase from the mission: it's high time. What do you think it's high time people did, to make the world a little better?",
        he: "מה הגיע הזמן שאנשים יעשו? עם It's high time + עבר. למשל: It's high time people stopped using plastic.",
        a: [],
        o: "That's a thoughtful idea. It's high time someone said it out loud.",
        t: ["It's high time people stopped using so much plastic.", "I think it's high time we planted more trees in cities.", "It's time people were kinder to each other online."],
        x: [["people should recycle", -1], ["it is time that people stop to fight", -1]]
      },
      {
        c: "One last dilemma. If you wrote a song, would you rather your friends told you the honest truth about it, or said something kind to protect your feelings?",
        he: "אמת כנה או משהו נחמד? עם would rather + עבר. למשל: I'd rather they told me the truth.",
        a: [
          { k: ["truth true honest honesty truly improve"], r: "Brave choice! Honest feedback is what turns a good song into a great one." },
          { k: ["kind nice protect feelings quiet polite gentle"], n: "kind_of", r: "I understand. Sometimes a little kindness is exactly what a new songwriter needs." }
        ],
        o: "That's a fair answer. The best friends manage to be honest and kind at the same time.",
        t: ["I'd rather they told me the truth, so I could improve.", "I would rather they said something kind at first."],
        x: [["the truth because i want improve", 0], ["i prefer they are honest", 0], ["something nice", 1], ["i dont care", -1], ["kind because it hurt", 1], ["kind of", -1]]
      }
    ],
    end: "If I were you, I'd be very proud of today. It's time I flew back to my shop. Bye!"
  },
  {
    id: "tc1g06", title: "Looking back, looking ahead",
    he: "מדברים עם קוקו על מה שכבר עשינו ומה נספיק, עם present perfect ו-future perfect",
    turns: [
      {
        c: "I've sold three hundred scarves this month, and I've been smiling all week. What's the best thing you've done so far this year?",
        he: "מה הדבר הכי טוב שעשיתם השנה? עם present perfect. למשל: I've joined a new team.",
        a: [],
        o: "What a highlight! Thank you for sharing it with me.",
        t: ["The best thing I've done this year is join a new team.", "I've learnt to cook a few really good dishes.", "I've been to a concert for the first time."],
        x: [["i went to a trip in the north", -1], ["i have started guitar lessons", -1]]
      },
      {
        c: "I'm exhausted, because I've been rearranging hats all day! What have you been doing lately that's taken up most of your time?",
        he: "במה אתם עסוקים לאחרונה? עם have been + ing. למשל: I've been studying for a big exam.",
        a: [],
        o: "That sounds like a busy schedule. No wonder your days feel full!",
        t: ["I've been studying for a big exam all week.", "I've been practising for a dance performance.", "I've been playing a new video game with my friends."],
        x: [["i study for test", -1], ["i have been playing basketball every day", -1]]
      },
      {
        c: "Let's jump ahead to the end of the school year. What do you hope you'll have achieved by then?",
        he: "מה תספיקו עד סוף השנה? עם will have. למשל: By June, I'll have finished all my exams.",
        a: [],
        o: "Ooh, I like the sound of that. June will be here before you know it.",
        t: ["By June, I'll have finished all my exams.", "I hope I'll have improved my English a lot.", "By the end of the year, I'll have read ten books."],
        x: [["get good grades", -1], ["i will have finish my project", -1]]
      },
      {
        c: "Tell me about your favourite hobby. By next summer, how long will you have been doing it?",
        he: "כמה זמן תעסקו בתחביב עד הקיץ? עם will have been + ing. למשל: I'll have been dancing for five years.",
        a: [],
        o: "Every year of practice counts. Keep it up, and see where it takes you.",
        t: ["By next summer, I'll have been playing football for six years.", "I'll have been learning the guitar for two years.", "By then I'll have been dancing for almost five years."],
        x: [["swimming three years", -1], ["i will have been drawing for 4 years", -1]]
      },
      {
        c: "To finish, imagine it's ten years from now. What's one thing you'd like to have done by then, and why?",
        he: "מה הייתם רוצים שיהיה מאחוריכם בעוד עשר שנים? למשל: I'd like to have travelled around the world.",
        a: [],
        o: "Brilliant! Ten years from now, I hope to have heard all about it.",
        t: ["I'd like to have travelled around South America by then.", "I would like to have started my own business.", "I'd like to have learnt three languages by then."],
        x: [["to finish university", -1], ["i want to be a doctor already", -1]]
      }
    ],
    end: "We've covered so much today. By next time, you'll have become a perfect-tense expert. Bye!"
  },
  {
    id: "tc1g07", title: "Fewer words, more meaning",
    he: "מדברים עם קוקו בפסוקיות קצרות: Walking home, Having finished, Not wanting",
    turns: [
      {
        c: "Flying over the beach this morning, I spotted a dolphin! Starting with Walking home or Sitting on the bus, what do you usually notice on your way home?",
        he: "מה אתם רואים בדרך הביתה? התחילו ב-ing. למשל: Walking home, I usually notice the cats.",
        a: [],
        o: "Ooh, you've got a sharp eye. A poet's eye, really.",
        t: ["Walking home, I usually notice the cats in the street.", "Sitting on the bus, I watch people and invent stories about them.", "Riding my bike home, I notice all the new shops."],
        x: [["walking home i see dogs", -1], ["i see a lot of cars and people", -1]]
      },
      {
        c: "Now try starting with Having finished. Once your homework is done, what's the first thing you love to do?",
        he: "מה אתם עושים אחרי שיעורי הבית? התחילו ב-Having finished. למשל: Having finished, I go out with friends.",
        a: [],
        o: "A well-earned reward! Having worked hard, you deserve it.",
        t: ["Having finished my homework, I usually go out with friends.", "Having done everything, I play video games for an hour.", "Having finished, I like to relax and listen to music."],
        x: [["i play on the computer", -1], ["having finish i watch tv", -1]]
      },
      {
        c: "Not wanting to wake anyone, I once tiptoed through my shop at dawn. Have you ever done something very quietly, not wanting to disturb someone? What was it?",
        he: "עשיתם פעם משהו בשקט כדי לא להפריע? למשל: Not wanting to disturb my friend, I left quietly.",
        a: [],
        o: "How considerate! The world needs more quiet tiptoers like you.",
        t: ["Not wanting to wake anyone, I made breakfast very quietly.", "Not wanting to disturb my friend, I left the room quietly.", "Not wanting to wake anyone, I watched a film with headphones."],
        x: [["i go to kitchen in the night quiet", -1], ["not wanting to wake my dog i walk slow", -1]]
      },
      {
        c: "Here's a silly one from the mission: Running for the bus, my bag fell. But my bag wasn't running! Can you make up another funny sentence where the wrong thing seems to do the action?",
        he: "המציאו משפט מצחיק שבו הדבר הלא נכון עושה את הפעולה. למשל: Eating my dinner, the cat stared at me.",
        a: [],
        o: "Ha! Brilliantly silly. Grammar can be hilarious when it goes wrong.",
        t: ["Eating my dinner, the cat stared at me.", "Walking into class, the lights suddenly went off.", "Doing my homework, my pencil fell asleep."],
        x: [["swimming in the pool my phone rang", -1], ["sleeping in bed the alarm was loud", -1]]
      },
      {
        c: "To wrap up, describe a book, film or game you love in one sentence, starting with Written by, Made by or Set in. What would you say?",
        he: "תארו ספר, סרט או משחק במשפט שמתחיל ב-Set in או Written by. למשל: Set in a magical school, it's my favourite.",
        a: [],
        o: "Beautifully put! That sounds like something I'd enjoy too.",
        t: ["Set in a magical school, Harry Potter is my favourite series.", "Made by a small team, this game is full of surprises.", "Set in the future, the film shows a world without cars."],
        x: [["set in space it is a cool game", -1], ["written by roald dahl matilda", -1]]
      }
    ],
    end: "Having talked with you, I feel a lot cleverer. Thank you, and see you next time!"
  },
  {
    id: "tc1g08", title: "Never have I ever",
    he: "מדברים עם קוקו בהיפוך דרמטי: Never have I, Not only, No sooner, Little did I know",
    turns: [
      {
        c: "Never have I met such a talented student! Now it's your turn. Can you tell me something you've never done, starting with Never have I?",
        he: "ספרו משהו שלא עשיתם, בהיפוך. למשל: Never have I eaten sushi.",
        a: [],
        o: "Well, there's a first time for everything. Maybe this will be the year!",
        t: ["Never have I eaten sushi.", "Never have I been on a rollercoaster.", "Never have I stayed up all night."],
        x: [["never have i fly in a plane", -1], ["i never see snow", -1]]
      },
      {
        c: "Think of someone you really admire. Can you describe them with Not only, like this: Not only are they kind, but they're also hilarious?",
        he: "תארו מישהו שאתם מעריכים עם Not only. למשל: Not only is my coach patient, but she's also funny.",
        a: [],
        o: "What a wonderful person to have around! They sound truly impressive.",
        t: ["Not only is my coach patient, but she's also really funny.", "Not only does my friend draw well, but he also writes songs.", "Not only is my grandma kind, but she also makes the best soup."],
        x: [["not only my friend is nice she is also smart", -1], ["my teacher is funny and smart", -1]]
      },
      {
        c: "No sooner had I sat down to relax than a customer walked in! What's something annoying that always seems to happen the moment you sit down?",
        he: "מה תמיד קורה בדיוק כשמתיישבים? עם No sooner had I. למשל: No sooner had I sat down than my phone rang.",
        a: [],
        o: "Classic! The universe has a terrible sense of timing.",
        t: ["No sooner had I sat down than my phone rang.", "No sooner had I started eating than someone called me.", "No sooner had I got comfortable than I remembered my homework."],
        x: [["my mom call me", -1], ["no sooner i sit the doorbell ring", -1]]
      },
      {
        c: "Stories love a twist. I was walking along the beach, and little did I know... Can you finish my story for me?",
        he: "המשיכו את הסיפור עם Little did I know. למשל: Little did I know that a dolphin was next to me.",
        a: [],
        o: "Ooh, what a twist! You should be writing films.",
        t: ["Little did I know that a dolphin was swimming right next to me.", "Little did I know that my friends were planning a surprise party.", "Little did I know that I was about to find a message in a bottle."],
        x: [["a big wave is coming", -1], ["little did i know there is treasure", -1]]
      },
      {
        c: "Here's my final question. Only after a few years did I realise I love early mornings. What did you only realise after some time had passed?",
        he: "מה הבנתם רק אחרי זמן? עם Only after או Only later. למשל: Only later did I realise my friend was right.",
        a: [],
        o: "That's a wise thing to realise. Hindsight is a wonderful teacher.",
        t: ["Only after starting high school did I realise how much I love science.", "Only later did I realise that my friend was right.", "Not until last year did I understand why reading matters."],
        x: [["i realise that math is important", -1], ["only later i understand my teacher", -1]]
      }
    ],
    end: "Seldom have I had such a fabulous chat. Off I fly, but see you soon!"
  },
  {
    id: "tc1g09", title: "What are you looking forward to?",
    he: "מדברים עם קוקו עם מילות יחס במקום הנכון: look forward to, used to, good at",
    turns: [
      {
        c: "I'm really looking forward to opening my winter collection. What are you most looking forward to this month?",
        he: "למה אתם מחכים החודש? עם looking forward to + ing. למשל: I'm looking forward to going on a trip.",
        a: [],
        o: "That sounds like something worth waiting for! Enjoy every minute of it.",
        t: ["I'm looking forward to going on a school trip.", "I'm really looking forward to seeing my cousins.", "I'm looking forward to finishing my exams."],
        x: [["the holiday", -1], ["i look forward to go to the concert", -1]]
      },
      {
        c: "Some things take time to get used to. What's something you've had to get used to recently, and was it hard?",
        he: "למה הייתם צריכים להתרגל לאחרונה? עם get used to + ing. למשל: I've had to get used to getting up early.",
        a: [],
        o: "Change is never easy, but you sound like you're handling it well.",
        t: ["I've had to get used to getting up really early.", "I'm getting used to having a lot more homework.", "I had to get used to a new class and new teachers."],
        x: [["wake up early it was hard", -1], ["i get used to my new phone", -1]]
      },
      {
        c: "What's a series, film or song you could talk about for hours? And who would you most like to watch or listen to it with?",
        he: "על מה הייתם מדברים שעות, ועם מי הייתם צופים בזה? למשל: It's a series I could talk about for hours.",
        a: [],
        o: "Ooh, now I know exactly what to ask you about next time!",
        t: ["It's a series I could talk about for hours, and I'd watch it with my best friend.", "A film I'm obsessed with is Spider-Man. I'd watch it with my cousin.", "The song I can't stop listening to is one I'd share with my whole class."],
        x: [["stranger things with my sister", -1], ["harry potter i watch it with friends", -1]]
      },
      {
        c: "Everyone has a hidden talent. What are you surprisingly good at, something most people would never guess about you?",
        he: "במה אתם טובים באופן מפתיע? עם good at + ing. למשל: I'm surprisingly good at drawing cartoons.",
        a: [],
        o: "I love hearing about hidden talents. Everyone has one somewhere, and mine is lovely feathers.",
        t: ["I'm surprisingly good at drawing cartoons.", "I'm quite good at solving puzzles quickly.", "Believe it or not, I'm good at juggling."],
        x: [["i am good in cooking", -1], ["rubik cube very fast", -1]]
      },
      {
        c: "Last one! What do you think prevents people from trying new things, and what could help them feel braver?",
        he: "מה מונע מאנשים לנסות דברים חדשים? עם prevent from + ing. למשל: Fear of being laughed at.",
        a: [],
        o: "Very wise. I'll remember that the next time I'm too nervous to try a new hat.",
        t: ["Fear of being laughed at prevents people from trying new things.", "People are afraid of failing, so we should praise every effort.", "Worrying about mistakes stops people from trying, so friends should encourage them."],
        x: [["they are scared", -1], ["they afraid that people laugh at them", -1]]
      }
    ],
    end: "Thanks for chatting! I'm already looking forward to talking to you again."
  },
  {
    id: "tc1g10", title: "The news is good!",
    he: "מדברים עם קוקו על התאמת פועל: The news is, maths is, every student has",
    turns: [
      {
        c: "Maths is my weakest subject. I count my crackers on my claws! Which subject is the most interesting for you this year, and why?",
        he: "איזה מקצוע הכי מעניין השנה? למשל: Physics is the most interesting, because it explains everything.",
        a: [],
        o: "Fascinating! It's great to have a subject that really grabs you.",
        t: ["Physics is the most interesting, because it explains everything.", "For me, history is the most interesting subject.", "Maths is my favourite, because I like solving problems."],
        x: [["english because it is easy", -1], ["biology is the best because animals", -1]]
      },
      {
        c: "Good news is always welcome in my shop. What's the best news you've heard recently, big or tiny, and why did it make you happy?",
        he: "מה החדשות הכי טובות ששמעתם? news ביחיד: The news is... למשל: The best news is that our trip is next week.",
        a: [],
        o: "Wonderful! Good news is the best way to brighten a week.",
        t: ["The best news is that our class trip is next week.", "The news that my favourite band is coming here made me so happy.", "The best news was that we have no test on Friday."],
        x: [["no school on sunday", -1], ["my cousin have a baby", -1]]
      },
      {
        c: "Ten kilometres is a long way for a parrot with tired wings. What distance do you think is too far to walk to see a friend?",
        he: "איזה מרחק רחוק מדי ללכת ברגל לחבר? מרחק ביחיד: Five kilometres is too far.",
        a: [],
        o: "That sounds reasonable. Though for a really good friend, any distance feels shorter.",
        t: ["Two kilometres is fine, but five kilometres is too far.", "I think three kilometres is my limit.", "Anything over half an hour is too far to walk."],
        x: [["5 kilometres", -1], ["more than one hour is too far", -1]]
      },
      {
        c: "In British English, you can say: My team are brilliant. Which team or band do you think are the most impressive, and why?",
        he: "איזו קבוצה הכי מרשימה? בבריטית: The team are... למשל: Real Madrid are the most impressive team.",
        a: [],
        o: "Great choice! A team that really works together is always impressive.",
        t: ["Maccabi Tel Aviv are brilliant, because they never give up.", "Real Madrid are the most impressive team in the world.", "Our school choir are amazing, and they practise every day."],
        x: [["barcelona because they play beautiful", -1], ["bts are the best", -1]]
      },
      {
        c: "Time for my last question. In your ideal school, what does every student have that most students don't have now?",
        he: "בבית הספר האידיאלי, מה יש לכל תלמיד? every student + has. למשל: Every student has a tablet.",
        a: [],
        o: "Now that's a school I'd fly to every single morning!",
        t: ["In my ideal school, every student has a tablet.", "Every student has a comfortable sofa in class.", "Everyone has a free lunch and a long break."],
        x: [["every student have a laptop", -1], ["a pool in the school", -1]]
      }
    ],
    end: "Every word you said was a pleasure, and the news is excellent: your English is going from strength to strength. Bye!"
  },
  {
    id: "tc1v03", title: "Sort of, roughly, -ish",
    he: "מדברים עם קוקו בלי להיות מדויקים: roughly, give or take, -ish, thingy",
    turns: [
      {
        c: "Let's be vague on purpose! Roughly how many hours did you spend outside this week, give or take?",
        he: "בערך כמה שעות הייתם בחוץ השבוע? למשל: Roughly ten hours, give or take.",
        a: [],
        o: "Sounds about right! That's roughly how I'd measure it too.",
        t: ["Roughly ten hours, give or take.", "Maybe five hours or so.", "Sort of a lot, about fifteen hours."],
        x: [["like 10 hours", -1], ["roughly 3 hours give or take", -1]]
      },
      {
        c: "Imagine your class is planning a beach picnic for next week. Using ish at the end of a time, like tenish, what time would suit you best?",
        he: "באיזו שעה בערך? השתמשו ב-ish. למשל: Let's say elevenish, if that's okay.",
        a: [],
        o: "Perfect. Everyone will turn up roughly on time, give or take.",
        t: ["Let's say elevenish, if that's okay.", "Fourish would be perfect for me.", "Around fiveish, when it's a bit cooler."],
        x: [["elevenish", -1], ["i think fourish is good", -1]]
      },
      {
        c: "I've forgotten the name of that thingy you use to flip pancakes. Can you describe an object whose name you always forget, the way I just did?",
        he: "תארו חפץ ששמו תמיד בורח לכם, עם thingy. למשל: It's that thingy you use to open bottles.",
        a: [],
        o: "Ha! I know exactly the thingy you mean. Well, sort of.",
        t: ["It's that thingy you use to open bottles.", "The little thingy that holds bread bags closed.", "That thingy you press to change the TV channel."],
        x: [["the thing for the hair", -1], ["the thingy in the kitchen for garlic", -1]]
      },
      {
        c: "In real conversation, people often end a list with and stuff like that. Give it a try! What do you usually do with your friends at the weekend?",
        he: "מה עושים בסוף השבוע? סיימו ב-and stuff like that. למשל: We watch films, eat pizza and stuff like that.",
        a: [],
        o: "Sounds like a sort of perfect weekend to me.",
        t: ["We go to the mall, play football and stuff like that.", "We watch films, eat pizza, and stuff like that.", "We play games, chat and stuff like that."],
        x: [["we go to the beach and stuff", -1], ["play fortnite and eat snacks and stuff like that", -1]]
      },
      {
        c: "One last thing! Vague words are great with friends, but when do you think being vague is a bad idea, for example in an exam or a job interview?",
        he: "מתי לא כדאי להיות מעורפלים? למשל: In an exam, because the teacher needs exact answers.",
        a: [],
        o: "Very wise. Knowing when to be exact is sort of a superpower.",
        t: ["In an exam, because the teacher needs exact answers.", "In a job interview, because you should sound confident.", "When you give directions, because people could get lost."],
        x: [["in a test", -1], ["when you talk to the doctor", -1]]
      }
    ],
    end: "That was roughly the best chat of my day, give or take. See you in a week or so!"
  },
  {
    id: "tc1v04", title: "To cut a long story short",
    he: "מספרים לקוקו סיפורים עם to be honest, to make matters worse, to top it all",
    turns: [
      {
        c: "I'll start. To be honest, the best part of my day is my afternoon nap. What's the best part of your day, to be honest?",
        he: "מה החלק הכי טוב ביום? התחילו ב-To be honest. למשל: To be honest, it's lunch break.",
        a: [],
        o: "I completely understand. Everyone needs a favourite moment to look forward to.",
        t: ["To be honest, the best part is coming home and relaxing.", "To be honest, it's lunch break with my friends.", "To be honest, I love the evenings when I can play games."],
        x: [["when i sleep", -1], ["to be honest the end of school", -1]]
      },
      {
        c: "Let's invent a comedy character whose morning goes from bad to worse. What goes wrong first, and what happens to make matters worse?",
        he: "בוקר של דמות שהולך מרע לגרוע. למשל: He misses the bus and, to make matters worse, it rains.",
        a: [],
        o: "Oh dear, what a morning! Luckily, it's only a story.",
        t: ["He misses the bus and, to make matters worse, it starts pouring with rain.", "She forgets her homework and, to make matters worse, the teacher checks it.", "He wakes up late and, to make matters worse, he spills juice on his shirt."],
        x: [["he lose his phone and then it rain", -1], ["she is late and she forget her bag", -1]]
      },
      {
        c: "What do you always take with you when you go out, just to be on the safe side?",
        he: "מה אתם תמיד לוקחים ליתר ביטחון? עם to be on the safe side. למשל: I always take a charger.",
        a: [],
        o: "Very sensible! I always pack a spare feather, to be on the safe side.",
        t: ["I always take a charger, just to be on the safe side.", "I take a jumper to be on the safe side.", "I always carry a bottle of water, just to be on the safe side."],
        x: [["water and my phone", -1], ["i take a umbrella in winter", -1]]
      },
      {
        c: "Now something happy. Can you describe a day when everything went right and then, to top it all, something amazing happened at the end?",
        he: "ספרו על יום מושלם עם to top it all. למשל: We won the match and, to top it all, we got pizza.",
        a: [],
        o: "What a perfect day! Those are the ones worth remembering.",
        t: ["We won the match and, to top it all, the coach bought us pizza.", "It was sunny at the beach and, to top it all, we saw dolphins.", "I got a great mark and, to top it all, my friend surprised me."],
        x: [["my birthday was great and i get a gift", -1], ["we win the game", -1]]
      },
      {
        c: "Before we say goodbye, tell me about a funny moment from your week, or one you've heard about, but cut a long story short. What happened?",
        he: "ספרו רגע מצחיק בקצרה, עם To cut a long story short. למשל: To cut a long story short, I missed my stop.",
        a: [],
        o: "Ha! Short and sweet, just how a good story should be.",
        t: ["To cut a long story short, I fell asleep on the bus and missed my stop.", "To cut a long story short, we got lost but found an amazing cafe.", "Needless to say, my dog ate my sandwich."],
        x: [["my friend fall in the pool", -1], ["to cut a long story short i forgot my shoes", -1]]
      }
    ],
    end: "To cut a long story short, you were fabulous today. Needless to say, I'll miss you. Bye!"
  },
  {
    id: "tc1v05", title: "Utterly ridiculous!",
    he: "מדברים עם קוקו בצירופים: wildly popular, highly unlikely, utterly ridiculous",
    turns: [
      {
        c: "What's wildly popular among teenagers right now, and do you think it really deserves to be?",
        he: "מה פופולרי מאוד עכשיו, ומגיע לו? למשל: Baggy jeans are wildly popular, but I'm not a fan.",
        a: [],
        o: "Ooh, I'll have to look into that. A parrot has to keep up with the trends.",
        t: ["A new video game is wildly popular, and it really deserves it.", "Baggy jeans are wildly popular, but I'm not a fan.", "A song from a TV series is wildly popular right now."],
        x: [["a game everybody play it", -1], ["labubu dolls are very popular but they are weird", -1]]
      },
      {
        c: "Let's play highly likely or highly unlikely. Snow in Eilat next week: what do you say, and why?",
        he: "שלג באילת: highly likely או highly unlikely? למשל: Highly unlikely, because Eilat is always hot.",
        a: [
          { k: ["unlikely impossible never no not"], n: "know sure idea care not_make not_clear", r:"Highly unlikely indeed! Eilat is far too hot. I'd need sunglasses, not a scarf." },
          { k: ["likely possible yes maybe could might"], r: "What an optimist! I'll pack a scarf, just in case. But I have my doubts." }
        ],
        o: "Interesting answer! Personally, I think it's highly unlikely, given how hot Eilat is.",
        t: ["Highly unlikely, because Eilat is always hot.", "Not impossible, but highly unlikely.", "It's highly likely, because the weather is crazy these days."],
        x: [["highly unlikely because hot", 0], ["no way it is too hot", 0], ["yes it is possible", 1], ["snow in eilat", -1], ["it is likely", 1], ["i don't know", -1], ["it is not likely", 0]]
      },
      {
        c: "A winter coat in August is utterly ridiculous! What fashion trend do you find utterly ridiculous, even if everyone else loves it?",
        he: "איזה טרנד אופנה מגוחך לגמרי בעיניכם? למשל: Socks with sandals are utterly ridiculous.",
        a: [],
        o: "Ha! Fashion can be utterly ridiculous. Trust me, I sell it.",
        t: ["Socks with sandals are utterly ridiculous, in my opinion.", "I find wearing sunglasses indoors utterly ridiculous.", "Trousers that drag on the floor are utterly ridiculous."],
        x: [["crocs are ridiculous", -1], ["very big shoes it is utterly ridiculous", -1]]
      },
      {
        c: "Which film, song or book do you think could leave almost anyone deeply moved, and what makes it so touching?",
        he: "איזה סרט, שיר או ספר ריגש אתכם עמוקות? למשל: I was deeply moved by the ending of a film.",
        a: [],
        o: "Art that moves us is worth treasuring, and it's fascinating how different it is for everyone.",
        t: ["I was deeply moved by the ending of the film Wonder.", "A song by my favourite singer left me deeply moved.", "I was deeply moved by a book about a girl who rescues a dog."],
        x: [["the movie up it was sad", -1], ["a song of taylor swift", -1]]
      },
      {
        c: "My final question. Imagine you're giving advice to a younger kid starting at your school. What would you want them to be fully aware of from day one?",
        he: "מה תרצו שתלמיד חדש ידע מהיום הראשון? עם fully aware. למשל: I'd want them to be fully aware that teachers help.",
        a: [],
        o: "Excellent advice. That younger kid would be incredibly lucky to have you.",
        t: ["I'd want them to be fully aware that teachers are there to help.", "They should be fully aware that homework piles up quickly.", "I'd make them fully aware that it's okay to make mistakes."],
        x: [["to not be scared", -1], ["that the food in the canteen is bad", -1]]
      }
    ],
    end: "I'm deeply grateful for this chat. It was utterly fabulous. See you soon!"
  },
  {
    id: "tc1l04", title: "Engine and brakes",
    he: "מדברים עם קוקו על הפודקאסט של Doctor Klein: רשתות חברתיות והמוח של בני נוער",
    turns: [
      {
        c: "Doctor Klein compared the teenage brain to a car with a powerful engine and brakes that are still being built. Do you think that's a fair comparison? Why?",
        he: "ההשוואה למכונית הוגנת? למשל: I think it's fair, because teenagers often act on impulse.",
        a: [],
        o: "Interesting! It's a vivid image either way, and it certainly got me thinking.",
        t: ["I think it's fair, because teenagers often act on impulse.", "It's partly fair, but lots of teenagers are very sensible.", "I don't think it's fair, because adults can be impulsive too."],
        x: [["yes it is true", -1], ["no because i am very careful", -1]]
      },
      {
        c: "She says unpredictable rewards, like likes, are the hardest to resist. Why do you think not knowing what you'll get makes something so hard to stop?",
        he: "למה כל כך קשה להפסיק כשלא יודעים מה נקבל? למשל: Because you keep hoping the next one will be better.",
        a: [],
        o: "Very insightful! Doctor Klein would be impressed by that explanation.",
        t: ["Because you keep hoping the next one will be better.", "The surprise makes your brain want to check again and again.", "It's like a game, because you never know if you'll win."],
        x: [["because it is a surprise", -1], ["you want to see more and more", -1]]
      },
      {
        c: "In the brain-scanner study, teens liked photos that already had lots of likes, whatever they showed. Why do you think people follow the crowd like that?",
        he: "למה אנשים הולכים אחרי ההמון? למשל: People want to fit in, so they copy what others like.",
        a: [],
        o: "That makes a lot of sense. To be fair, even parrots like to copy the flock.",
        t: ["People want to fit in, so they copy what others like.", "If many people like something, we assume it must be good.", "It's easier than deciding for yourself."],
        x: [["to be like everyone", -1], ["they think it is cool because many likes", -1]]
      },
      {
        c: "Her tips were to turn off notifications and keep your phone out of the bedroom at night. Which tip would be easier for most teenagers to follow, and why?",
        he: "איזו עצה קלה יותר? למשל: Turning off notifications is easier. או The bedroom one is easier.",
        a: [
          { k: ["notification notifications"], r: "Ah, notifications! Small buzzes, big distractions. Switching them off really helps." },
          { k: ["bedroom bed night sleep room"], r: "The bedroom tip! A phone-free night can make mornings so much brighter." }
        ],
        o: "Both are worth trying. Even a small change can make a real difference.",
        t: ["Turning off notifications is easier, because it only takes a second.", "Keeping the phone out of the bedroom is easier, actually."],
        x: [["turn off the notification", 0], ["the bedroom one", 1], ["phone out of my room at night", 1], ["none of them", -1], ["notifications because easy", 0]]
      },
      {
        c: "On a brighter note, social media also helps people find others who share their interests. Which interest do you think is easier to explore online than offline, and why?",
        he: "איזה תחום קל יותר לחקור ברשת? למשל: Drawing, because there are amazing tutorials online.",
        a: [],
        o: "Fabulous. Used on purpose, the internet can be a wonderful classroom.",
        t: ["Drawing, because you can find amazing tutorials online.", "Learning languages, because there are so many free lessons.", "Coding is easier online, because there are endless free courses."],
        x: [["music because youtube", -1], ["cooking you can see videos", -1]]
      }
    ],
    end: "Thanks for such a thoughtful chat. Use your phone on purpose, not on autopilot. Bye for now!"
  },
  {
    id: "tc1l05", title: "Good enough is good enough",
    he: "מדברים עם קוקו על חוכמה ואושר: overthinking, perfectionism ומה באמת חשוב",
    turns: [
      {
        c: "Daniel wondered if very clever people are less happy. Studies say it's mostly a myth. Why do you think that myth is still so popular?",
        he: "למה המיתוס על אנשים חכמים ועצובים כל כך נפוץ? למשל: Because clever people in films are often lonely.",
        a: [],
        o: "Very perceptive! Myths often survive because they make a good story.",
        t: ["Maybe because clever people in films are often lonely.", "People like to think that being clever comes with a price.", "Because we all know someone clever who worries a lot."],
        x: [["because of movies", -1], ["people are jealous of smart people", -1]]
      },
      {
        c: "Daniel's sister overthinks every little decision. What's a small decision that people often overthink, like choosing what to order in a restaurant?",
        he: "על איזו החלטה קטנה אנשים חושבים יותר מדי? למשל: People overthink what to wear to a party.",
        a: [],
        o: "Ha! Guilty. I once spent an hour choosing between two nearly identical hats.",
        t: ["People overthink what to wear to a party.", "Choosing what to watch can take longer than the film itself!", "People overthink which message to send to a friend."],
        x: [["what to eat", -1], ["what clothes to wear in the morning", -1]]
      },
      {
        c: "Doctor Hale suggests giving yourself a time limit for decisions. Do you think that would actually work, or would it just add more pressure?",
        he: "מגבלת זמן להחלטות עוזרת או מלחיצה? למשל: I think it would work. או It might add more pressure.",
        a: [
          { k: ["pressure stress stressful stressed worse panic nervous"], r: "Fair point. A deadline can feel stressful, so maybe a gentle one works best." },
          { k: ["work works help helps helpful good great useful yes faster quicker"], n: "not", r: "I agree. A time limit stops you going round in circles." }
        ],
        o: "Interesting. I suppose it depends on the person and how big the decision is.",
        t: ["I think it would work, because it stops you going round in circles.", "It might just add more pressure for some people."],
        x: [["yes it will help", 1], ["more pressure", 0], ["it is stress", 0], ["depends", -1], ["it works for me", 1], ["no it will not work", -1]]
      },
      {
        c: "Good enough is often good enough, says Doctor Hale. When is good enough really fine, and when is it worth aiming for perfect?",
        he: "מתי good enough מספיק ומתי שווה לשאוף לשלמות? למשל: Good enough is fine for homework, but not for a final exam.",
        a: [],
        o: "That's a wise balance. Knowing the difference is a real skill.",
        t: ["Good enough is fine for homework, but not for a final exam.", "For a birthday card good enough is perfect, but a pilot should aim for perfect.", "Good enough is fine for most things, except the things you really care about."],
        x: [["for a test you need perfect", -1], ["good enough is ok for cleaning my room", -1]]
      },
      {
        c: "My last question. Doctor Hale says close relationships predict happiness better than intelligence does. In your opinion, what makes a friendship really close?",
        he: "מה הופך חברות לקרובה באמת? למשל: Trust, and knowing you can tell each other anything.",
        a: [],
        o: "Beautifully said. A friendship like that is worth more than every hat in my shop.",
        t: ["Trust, and knowing you can tell each other anything.", "Laughing together and being there when things are hard.", "Being honest with each other, even when it's difficult."],
        x: [["trust", -1], ["when you can talk about everything", -1]]
      }
    ],
    end: "Remember, good enough is often good enough, and you were much better than that today. Bye!"
  },
  {
    id: "tc1l06", title: "Knowledge or habits?",
    he: "מדברים עם קוקו על התוכנית על אוכל: בישול ביחד, קריאת תוויות והרגלים",
    turns: [
      {
        c: "Tom says knowledge and habits are two very different things. Why do you think people often know what's good for them but still don't do it?",
        he: "למה יודעים מה טוב ובכל זאת לא עושים? למשל: Because habits are hard to change.",
        a: [],
        o: "Spot on. Knowing and doing are definitely two very different birds.",
        t: ["Because habits are hard to change, even when you know better.", "Because the easy option is usually the tastier one.", "People are busy, so they choose whatever is quick."],
        x: [["because it is hard", -1], ["they are lazy and the bad food is tasty", -1]]
      },
      {
        c: "Tom suggests cooking together, even something simple like an omelette. If you could cook one dish together with your friends, what would it be?",
        he: "איזו מנה הייתם מבשלים עם חברים? למשל: We'd make homemade pizza with lots of toppings.",
        a: [],
        o: "Mmm, delicious! Save a little for a hungry parrot, please.",
        t: ["We'd make homemade pizza with lots of toppings.", "I'd cook shakshuka, because it's easy and delicious.", "We would make pasta with a fresh tomato sauce."],
        x: [["pancakes", -1], ["we make a big salad and pasta", -1]]
      },
      {
        c: "His tip was: if a label lists lots of words you can't pronounce, think twice. Would you actually read labels in a shop, or is that unrealistic?",
        he: "הייתם באמת קוראים תוויות בחנות? למשל: I'd read them sometimes. או It's a bit unrealistic.",
        a: [
          { k: ["read reading check checking look yes sometimes already"], n: "not never unrealistic", r: "Brilliant! Even a quick look at a label can be surprisingly revealing." },
          { k: ["unrealistic not never no lazy boring busy"], n: "know sure idea not_make", r: "That's honest! Reading every label is a lot, but a quick glance now and then helps." }
        ],
        o: "Fair enough. Even thinking twice now and then is a good start.",
        t: ["I'd read them sometimes, especially for snacks.", "Honestly, it's a bit unrealistic for most people."],
        x: [["yes i read labels", 0], ["no i dont have time", 1], ["it is unrealistic", 1], ["maybe", -1], ["i check sometimes", 0]]
      },
      {
        c: "Tom also recommends eating slowly, without a screen. Do you think meals are more enjoyable without screens? Why, or why not?",
        he: "ארוחה בלי מסכים יותר נעימה? למשל: Yes, because you actually talk to the people you're with.",
        a: [],
        o: "Interesting! Either way, it's worth really tasting your food now and then.",
        t: ["Yes, because you actually talk to the people you're with.", "Not really, because watching something makes eating more fun.", "I think it's nicer, but it's hard to do every day."],
        x: [["yes we talk more", -1], ["no i like to watch videos when i eat", -1]]
      },
      {
        c: "Last one! Tom says no food is forbidden, because it's what we eat every day that counts. Which treat do you think is worth every single bite?",
        he: "איזה פינוק שווה כל ביס? למשל: Birthday cake is worth every bite.",
        a: [],
        o: "Ooh, now I'm hungry! Everything in moderation, as they say.",
        t: ["Birthday cake is worth every bite, especially chocolate.", "Ice cream on a hot day at the beach is totally worth it.", "Fresh warm bourekas from the bakery are worth every bite."],
        x: [["chocolate", -1], ["ice cream in the summer", -1]]
      }
    ],
    end: "Thanks for a delicious chat! Now I'm off to find a cracker, and I'll eat it slowly, of course."
  },
  {
    id: "tc1l07", title: "Rest or stress?",
    he: "מדברים עם קוקו על חופשת השינה של Lily, מכשירי מעקב והרגלי שינה",
    turns: [
      {
        c: "Lily's hotel had blackout curtains, a pillow menu and even a sleep coach. Would you ever go on a holiday just to sleep, or does that sound like a waste?",
        he: "חופשה רק כדי לישון? למשל: I'd love it. או It sounds like a waste of a holiday.",
        a: [
          { k: ["waste boring pointless silly never no"], n: "not idea sure", r: "I see your point! Travelling somewhere just to close your eyes does sound a bit odd." },
          { k: ["yes love sleep amazing great relax relaxing definitely nice cool"], r: "Me too! A pillow menu sounds like absolute bliss for a tired parrot." }
        ],
        o: "Interesting! It's definitely a new way of thinking about holidays.",
        t: ["I'd love it. A pillow menu sounds amazing.", "Honestly, it sounds like a waste of a holiday."],
        x: [["yes i love to sleep", 1], ["it is a waste of money", 0], ["no it is boring", 0], ["maybe", -1], ["sounds amazing", 1]]
      },
      {
        c: "Ironically, the more Lily tried to sleep well, the worse she slept. Can you think of something else that gets harder the more you try?",
        he: "מה עוד נהיה קשה יותר ככל שמנסים? למשל: The more I try to remember a name, the more I forget it.",
        a: [],
        o: "Ha! The brain is a strange thing. Sometimes it works best when we leave it alone.",
        t: ["Falling asleep before a big day gets harder the more you try.", "Trying not to laugh in class makes it even harder.", "The more I try to remember a name, the more I forget it."],
        x: [["not laughing in a test", -1], ["to stop thinking about something", -1]]
      },
      {
        c: "Lily's conclusion was: listen to your body, not your gadget. Do you agree, or can gadgets like sleep trackers actually be useful?",
        he: "להקשיב לגוף או לגאדג'ט? למשל: I agree, your body knows best. או Trackers can be useful.",
        a: [
          { k: ["useful helpful help helps data information disagree"], n: "not", r: "True, data can help, as long as you don't let it run your life." },
          { k: ["agree body listen feel feelings natural right"], n: "not disagree", r:"I agree. Your body usually knows best, and it never needs charging." }
        ],
        o: "That's a balanced view. Gadgets are tools, and we decide how to use them.",
        t: ["I agree. Your body knows what it needs.", "Trackers can be useful, as long as you stay relaxed about the data."],
        x: [["i agree listen to your body", 1], ["gadgets are useful", 0], ["the data can help", 0], ["i have no idea", -1], ["gadgets are not useful", -1], ["i don't agree", -1], ["i disagree", 0]]
      },
      {
        c: "Some sleep scientists call it orthosomnia when people get obsessed with perfect sleep data. What else do you think people get obsessed with measuring?",
        he: "מה עוד אנשים מודדים באובססיביות? למשל: People get obsessed with counting their steps.",
        a: [],
        o: "So true. Not everything that counts can be counted, as they say.",
        t: ["People get obsessed with counting their steps every day.", "Some people are obsessed with how many likes they get.", "People get obsessed with their screen time or their exam marks."],
        x: [["steps", -1], ["how many followers they have", -1]]
      },
      {
        c: "Before you go, what helps you fall asleep on a busy night: a routine, a book, music, or something completely different?",
        he: "מה עוזר לכם להירדם בלילה עמוס? למשל: Reading a few pages of a book always helps me.",
        a: [],
        o: "Lovely. I'm adding that to my own bedtime routine tonight.",
        t: ["Reading a few pages of a book always helps me fall asleep.", "I listen to calm music with my eyes closed.", "I write down my thoughts so my mind can relax."],
        x: [["music", -1], ["i read a book in my bed", -1]]
      }
    ],
    end: "Thanks for chatting! I hope you sleep like a log tonight. Sweet dreams!"
  },
  {
    id: "tc1l08", title: "Fair and square?",
    he: "מדברים עם קוקו על ההצבעה של Yael ו-Omer: מה זה הוגן ואיך מגיעים לפשרה",
    turns: [
      {
        c: "After the first vote, the water park had twelve votes out of thirty. Do you think it should have won, or was the second round fairer?",
        he: "פארק המים היה צריך לנצח, או הסבב השני הוגן יותר? למשל: The second round was fairer.",
        a: [
          { k: ["second two again zoo"], n: "first", r: "I agree. A winner with less than half the votes doesn't feel quite right." },
          { k: ["water park first twelve"], r: "That's a fair view. The water park did get the most votes, after all." }
        ],
        o: "It's a tricky one. Same class, same day, different winner, depending on how you count.",
        t: ["The second round was fairer, because the zoo had more support.", "I think the water park should have won."],
        x: [["second round more fair", 0], ["the water park", 1], ["water park because more votes", 1], ["i dont know", -1], ["the round two", 0], ["the first round was fair", 1], ["both", -1]]
      },
      {
        c: "In the end, the class chose a compromise: the zoo now, the water park later. Is a compromise always the best solution, or can it leave everyone a little unhappy?",
        he: "פשרה היא תמיד הפתרון הכי טוב? למשל: Usually, because everybody gets something.",
        a: [],
        o: "Wise words. As Omer said, nobody gets everything, but everybody gets something.",
        t: ["Usually it's the best, because everybody gets something.", "Sometimes a compromise leaves everyone a little disappointed.", "It depends on how important the decision is."],
        x: [["yes it is fair", -1], ["no sometimes nobody is happy", -1]]
      },
      {
        c: "Kenneth Arrow showed that with three or more options, no voting system is perfectly fair. Does that surprise you, or does it make sense?",
        he: "זה מפתיע אתכם או הגיוני? למשל: It surprised me. או It makes sense, because people want different things.",
        a: [
          { k: ["surprise surprised surprising shock shocked wow yes"], n: "not sense", r: "It surprised me too! You'd think maths could solve everything." },
          { k: ["sense logical obvious expected makes not no"], n: "sure know idea not_make not_clear care", r:"Exactly. With more options, it's harder to keep everyone happy." }
        ],
        o: "Interesting! It's a strange idea that perfect fairness might be impossible.",
        t: ["It surprised me. I thought voting was always fair.", "It makes sense, because people want different things."],
        x: [["yes i am surprised", 0], ["it makes sense", 1], ["it does not surprise me", 1], ["voting", -1], ["wow really", 0], ["yes it makes sense", 1], ["no not really", 1], ["i don't know", -1]]
      },
      {
        c: "Imagine your class has to choose between three trips. How would you organise the vote so that as many people as possible feel happy with the result?",
        he: "איך הייתם מארגנים הצבעה הוגנת? למשל: I'd let everyone rank the options.",
        a: [],
        o: "Ooh, very democratic! You'd make an excellent class organiser.",
        t: ["I'd let everyone rank the options, then count the second choices too.", "I would hold two rounds, like Yael and Omer's class.", "We could vote on paper, so nobody feels pressured."],
        x: [["everybody write on a paper", -1], ["we vote two times", -1]]
      },
      {
        c: "And now the fun part. Which three places would be on your dream list for a class trip, and which one would get your vote?",
        he: "אילו שלושה מקומות לטיול שנתי, ובמה הייתם בוחרים? למשל: A water park, a museum and a beach. I'd vote for the beach.",
        a: [],
        o: "What a fantastic list! I'd happily fly along to any of them.",
        t: ["A water park, a science museum and a beach. I'd vote for the beach.", "The zoo, an escape room and a theme park. My vote goes to the theme park.", "Eilat, the Galilee and the Dead Sea. I'd choose Eilat."],
        x: [["eilat the north and luna park i choose luna park", -1], ["the beach", -1]]
      }
    ],
    end: "Thanks for this chat! My vote for the best student today goes to you. Bye!"
  },
  {
    id: "tc1l09", title: "One fix, two problems",
    he: "מדברים עם קוקו על Operation Cat Drop: תופעות לוואי ושרשרת המזון",
    turns: [
      {
        c: "What a story! Spraying for mosquitoes ended with cats being dropped by parachute. Which part of that chain of events surprised you most?",
        he: "איזה חלק בשרשרת הפתיע אתכם? למשל: The cats arriving by parachute surprised me most.",
        a: [
          { k: ["roof roofs caterpillar caterpillars wasp wasps leaves"], r: "The roofs falling in surprised me too. Tiny wasps were protecting the houses all along." },
          { k: ["rat rats mice"], r: "The rats were a real twist. Everything in the food chain was connected." },
          { k: ["gecko geckos lizard lizards poison poisoned die died dead sick"], r: "That was the hidden link. The poison travelled up the food chain, and nobody saw it coming." },
          { k: ["parachute parachutes drop dropped cat cats box boxes"], r: "The parachuting cats amazed me too! Imagine looking up and seeing that." }
        ],
        o: "It's an astonishing chain of events. One change led to so many others.",
        t: ["The cats arriving by parachute surprised me most.", "I was surprised that caterpillars ate the roofs.", "The rats, because nobody expected that."],
        x: [["the cats with parachute", 3], ["the roofs fell", 0], ["the rats", 1], ["geckos ate the insects", 2], ["all of it", -1], ["that the cats died", 2], ["the poison", 2]]
      },
      {
        c: "Have you ever solved one problem and accidentally created another? What happened?",
        he: "פתרתם פעם בעיה ויצרתם בעיה חדשה? למשל: I cleaned my room so well that I couldn't find anything.",
        a: [],
        o: "Ha! That's a perfect mini Operation Cat Drop. Life is full of side effects.",
        t: ["I fixed my bike chain and then got oil all over my clothes.", "I cleaned my room so well that I couldn't find anything.", "I turned on the fan and all my papers flew away."],
        x: [["i fix the computer and delete my files", -1], ["yes with my homework", -1]]
      },
      {
        c: "Against the mosquitoes, the spraying worked remarkably well. Knowing only what they knew back then, do you think the people in charge were right to spray? Why?",
        he: "הם צדקו לרסס, לפי מה שידעו אז? למשל: Yes, but they should have thought about side effects.",
        a: [],
        o: "A tricky one. Hindsight makes everything look clearer than it was at the time.",
        t: ["Yes, because stopping malaria protected so many people.", "They were right, but they should have tested it first.", "I think they should have thought more about the side effects."],
        x: [["yes malaria is worse", -1], ["no they need to think before", -1]]
      },
      {
        c: "Some versions say fourteen thousand cats, others just a few dozen. Why do you think stories like this grow every time they're retold?",
        he: "למה סיפורים גדלים בכל פעם שמספרים אותם? למשל: Because people love to make a good story even better.",
        a: [],
        o: "Very true. A story is a bit like a parrot: it repeats, and it adds a little flair.",
        t: ["Because people love to make a good story even better.", "Every person adds a little detail to make it more exciting.", "Big numbers sound more dramatic, so people exaggerate."],
        x: [["people exaggerate", -1], ["because everyone add something", -1]]
      },
      {
        c: "To finish, Emma's lesson was: before you fix nature, think about what else you might break. Where do you think that lesson matters today?",
        he: "איפה השיעור הזה חשוב היום? למשל: It matters when people bring new animals to an island.",
        a: [],
        o: "Excellent example. Nature is a lot more connected than we think.",
        t: ["It matters when people bring new animals to an island.", "It matters with chemicals on farms, because bees are important.", "It matters when cities cut down trees to build roads."],
        x: [["with plastic in the sea", -1], ["when they build buildings in nature", -1]]
      }
    ],
    end: "Thanks for thinking it all through with me. No parachute needed for me, I can fly! Bye!"
  },
  {
    id: "tc1r02", title: "The shortcut that wasn't",
    he: "מדברים עם קוקו על הטיול של Noa, Eitan ו-Mia: קיצורי דרך, החלטות ובטיחות",
    turns: [
      {
        c: "Eitan saw a narrow path, said Shortcut, and strode off before anyone could object. If you'd been there, would you have followed him or stayed on the marked trail?",
        he: "הייתם הולכים אחרי Eitan או נשארים בשביל המסומן? למשל: I would have stayed on the marked trail.",
        a: [
          { k: ["stay stayed marked trail map sign never not"], n: "know sure idea care not_make not_clear", r:"Very sensible! The marked trail may be longer, but at least it goes somewhere." },
          { k: ["follow followed go went shortcut him yes"], n: "not never", r: "Honestly, a shortcut is tempting! Most of us would have been curious too." }
        ],
        o: "Tricky decision! It's easy to be wise afterwards, and much harder in the moment.",
        t: ["I would have stayed on the marked trail.", "I probably would have followed him, to be honest."],
        x: [["stay on the trail", 0], ["i follow him", 1], ["i would not go", 0], ["i would go with him", 1], ["i don't know", -1], ["i wouldn't follow him", 0]]
      },
      {
        c: "When the path vanished, Eitan wanted to keep going, but Mia refused to walk on in the dark. Who do you think was right, and why?",
        he: "מי צדק, Mia או Eitan? למשל: Mia was right, because walking in the dark is dangerous.",
        a: [
          { k: ["mia maya mea meea"], r: "I agree with Mia. Wandering around in the dark would only have made things worse." },
          { k: ["eitan ethan eaten aitan eaton"], r: "Interesting! Eitan was confident, but the car park wasn't over the next ridge after all." },
          { k: ["she her girl"], r: "I agree with Mia. Wandering around in the dark would only have made things worse." },
          { k: ["he him boy"], r: "Interesting! Eitan was confident, but the car park wasn't over the next ridge after all." }
        ],
        o: "It's a tough call when you're tired, lost and the light is fading.",
        t: ["Mia was right, because walking in the dark is dangerous.", "Eitan was right, because they were so close to the car park."],
        x: [["mia because dark", 0], ["ethan was right", 1], ["maya", 0], ["both", -1], ["he was right", 3], ["eitan was wrong mia was right", 0], ["she was right because it is dark", 2]]
      },
      {
        c: "Noa remembered the rescue volunteer's advice: if you're lost, stop. What other piece of outdoor advice do you think everyone should know?",
        he: "איזו עוד עצה לטיולים כולם צריכים לדעת? למשל: Always tell someone where you're going.",
        a: [],
        o: "Excellent advice. Mia's text to her mum shows exactly why planning ahead matters.",
        t: ["Always tell someone where you're going.", "Take more water than you think you need.", "Always charge your phone before a hike."],
        x: [["take water", -1], ["dont walk alone in the night", -1]]
      },
      {
        c: "On the drive home, Eitan admitted that his shortcut had been, to put it mildly, a long cut. How do you think he felt?",
        he: "איך Eitan הרגיש בדרך הביתה? למשל: He probably felt embarrassed, but also relieved.",
        a: [],
        o: "Very perceptive. A long cut can teach more than a shortcut ever could.",
        t: ["He probably felt embarrassed, but also relieved.", "I think he felt guilty and much quieter than before.", "He must have felt silly, but grateful to his friends."],
        x: [["embarrassed", -1], ["he feel bad because it was his idea", -1]]
      },
      {
        c: "Before we finish, imagine you could whisper one piece of advice to Eitan at the fork in the path. What would you tell him?",
        he: "איזו עצה הייתם לוחשים ל-Eitan בפיצול השביל? למשל: Stick to the marked trail, it's there for a reason.",
        a: [],
        o: "Wise words. If only Eitan had had you there at the fork!",
        t: ["Stick to the marked trail, it's there for a reason.", "Ask the others before you decide for everyone.", "Check how much daylight and battery you have left."],
        x: [["dont go alone ask your friends", -1], ["take a paper map next time", -1]]
      }
    ],
    end: "Thanks for walking through that story with me. Next time, let's stick to the marked trail!"
  },
  {
    id: "tc1r03", title: "A voice is not proof",
    he: "מדברים עם קוקו על המאמר על שכפול קול: שימושים טובים, סכנות ואיך בודקים",
    turns: [
      {
        c: "The article says cloning lets films be dubbed in the original actors' own voices. Would you rather watch a film dubbed like that, or in the original with subtitles?",
        he: "דיבוב בקול של השחקן או כתוביות? למשל: I'd rather have subtitles. או The dubbed version sounds amazing.",
        a: [
          { k: ["subtitle subtitles read reading"], r: "A subtitles fan! You hear the real voice and practise reading at the same time." },
          { k: ["dub dubbed dubbing voice own"], r: "Ooh, a dubbed film in the actor's own voice would feel almost magical." }
        ],
        o: "Interesting! Technology is changing the way we watch films, that's for sure.",
        t: ["I'd rather have subtitles, so I hear the real actor.", "The dubbed version in the actor's own voice sounds amazing."],
        x: [["subtitles", 0], ["i prefer read the subtitle", 0], ["dubbed is easier", 1], ["in his own voice", 1], ["i dont watch films", -1]]
      },
      {
        c: "The writer says that when we hear a voice we love, we react with emotion first and reason later. Why do you think our brains work like that?",
        he: "למה הרגש מגיע לפני ההיגיון? למשל: Emotions are faster than thinking, so they take over first.",
        a: [],
        o: "Fascinating idea. Our brains were built long before voice cloning existed.",
        t: ["Because trusting the people we love has kept us safe for thousands of years.", "Emotions are faster than thinking, so they take over first.", "We don't expect someone we love to trick us."],
        x: [["because we love them", -1], ["the heart is faster than the head", -1]]
      },
      {
        c: "Some banks identify their customers by voice. Now that voices can be copied so easily, do you think that's still a good idea?",
        he: "זיהוי לקוחות לפי קול זה עדיין רעיון טוב? למשל: No, it's too risky now. או It's fine with other checks.",
        a: [
          { k: ["risky risk dangerous bad not no unsafe stop replace"], n: "know sure idea care not_make not_clear", r:"I agree. If a voice can be copied, it can't be the only key to the door." },
          { k: ["yes good fine okay ok safe still useful"], r: "Maybe, if they combine it with other checks. One lock is never enough." }
        ],
        o: "Tricky one! Banks will have to keep getting cleverer, just like the scammers.",
        t: ["No, it's too risky now that voices can be copied.", "It's fine, as long as they use other checks too."],
        x: [["no it is dangerous", 0], ["yes it is still good", 1], ["it is not safe", 0], ["banks", -1], ["it is okay with a code", 1], ["i don't know", -1]]
      },
      {
        c: "The article suggests thinking twice before posting long videos of yourself speaking. Do you think most teenagers would change their habits after reading this? Why?",
        he: "בני נוער ישנו הרגלים אחרי המאמר? למשל: Probably not, because it feels like it won't happen to them.",
        a: [],
        o: "Interesting. Knowing about a risk and acting on it are two different things.",
        t: ["Probably not, because it feels like it won't happen to them.", "Some would, especially if they heard a real story about it.", "I think people would be more careful with public accounts."],
        x: [["no they dont care", -1], ["yes because it is scary", -1]]
      },
      {
        c: "Let's look ahead to finish. The article's rule is that a familiar voice is no longer proof of who is speaking. What do you think could become the new proof in the future?",
        he: "מה יכול להיות ההוכחה החדשה בעתיד? למשל: Maybe a special code that only real people have.",
        a: [],
        o: "Ooh, very futuristic! You might end up inventing it yourself.",
        t: ["Maybe a special code that only real people have.", "Video calls with a live question could be the new proof.", "Perhaps a digital signature, like a fingerprint for messages."],
        x: [["face id", -1], ["a question that only we know", -1]]
      }
    ],
    end: "Thanks for such a sharp, sensible chat. Stay curious, stay careful, and see you next time!"
  },
  {
    id: "tc1r04", title: "Fame before you can decide",
    he: "מדברים עם קוקו על המאמר על kidfluencers: פרסום, פרטיות וזכויות של ילדים",
    turns: [
      {
        c: "To many viewers, a kidfluencer's life looks like a dream: fame, free gifts and no boring office job. Would you have wanted that life at ten? Why, or why not?",
        he: "הייתם רוצים חיים כאלה בגיל עשר? למשל: No, because I'd want to keep my life private.",
        a: [],
        o: "That's a thoughtful answer. It certainly looks different from behind the camera.",
        t: ["No, because I'd want to keep my private life private.", "Maybe for a while, because the gifts sound fun.", "Yes, I think it would be exciting, at least at first."],
        x: [["no it is too much", -1], ["yes free toys", -1]]
      },
      {
        c: "When a family's income depends on a child's videos, the line between playing and working becomes blurred. Where would you draw that line?",
        he: "איפה עובר הגבול בין משחק לעבודה? למשל: It becomes work when they repeat a scene again and again.",
        a: [],
        o: "That's a clear way to draw the line. Very thoughtful.",
        t: ["It becomes work when they have to repeat a scene again and again.", "When the child stops enjoying it, it's work.", "If there's a fixed schedule, it isn't play anymore."],
        x: [["when they are tired", -1], ["if they film every day it is work", -1]]
      },
      {
        c: "A French law gives children the right to ask for videos of them to be removed. Do you think that's a good law? Why?",
        he: "החוק בצרפת טוב? למשל: Yes, because everyone should control their own pictures.",
        a: [],
        o: "Interesting point. The internet has a long memory, which makes laws like this tricky.",
        t: ["Yes, because everyone should control their own pictures.", "It's a good start, but the videos might already be everywhere.", "Yes, because kids couldn't say no when they were little."],
        x: [["yes it is good", -1], ["good but it is too late", -1]]
      },
      {
        c: "Moments like a tantrum or a first day at school are shared with strangers and may stay online forever. Which kinds of moments do you think should never be posted?",
        he: "אילו רגעים אסור לפרסם? למשל: Moments when a child is upset or crying.",
        a: [],
        o: "Wise. Some moments belong in a family album, not on a screen.",
        t: ["Moments when a child is upset or crying.", "Anything embarrassing, like a tantrum in a shop.", "Private moments, like a child's first day at school."],
        x: [["when they cry", -1], ["embarrassing things", -1]]
      },
      {
        c: "One final thought. The writer's test is: would this child agree if they were old enough to decide? Should adults always ask children before posting photos of them, and why?",
        he: "מבוגרים צריכים לשאול ילדים לפני שמפרסמים תמונות? למשל: Yes, because it's their face and their life.",
        a: [],
        o: "That's a fair answer. Asking first is a lovely habit, whatever your age.",
        t: ["Yes, because it's their face and their life.", "Yes, even young kids should be asked first.", "Usually, but for close family it's probably okay."],
        x: [["yes always", -1], ["i think yes because it is private", -1]]
      }
    ],
    end: "Thanks for a really grown-up conversation. Your opinions are worth sharing. Take care!"
  }
]);

// Talk to Coco: C1 home scenes (sc101 to sc115). Format: app/specs/talk.md; rules: app/tools/TALK-WRITING.md.
window.EQ_TALK.c1 = (window.EQ_TALK.c1 || []).concat([
  {
    id: "sc101", title: "Should homework go?",
    he: "מועדון הדיבייט של קוקו: האם לבטל שיעורי בית?",
    turns: [
      {
        c: "Welcome to the Debate Society! Today's motion is: this house would abolish homework. Before we choose sides, what's your gut reaction to the idea?",
        he: "מה התגובה הראשונה שלכם? למשל: I love the idea, but I'm not sure it would work.",
        a: [],
        o: "Interesting. Gut reactions are often a good place to start.",
        t: ["Honestly, I love the idea, but I'm not sure it would work.", "I think some homework is actually useful."],
        x: [["finally someone says it no more homework", -1], ["i think it is a bad idea", -1]]
      },
      {
        c: "You've been placed on the side that supports the motion, whatever you personally believe. What's your strongest argument for abolishing homework?",
        he: "מה הטיעון הכי חזק בעד ביטול? למשל: Students need time to rest and pursue their own interests.",
        a: [],
        o: "That's a persuasive point. The other side will have to work hard.",
        t: ["Students need time to rest and pursue their own interests.", "Homework often just repeats what we did in class."],
        x: [["we are tired after school all day", -1], ["it makes stress for students", -1]]
      },
      {
        c: "Your opponent argues that homework teaches responsibility and time management. How would you respond to that?",
        he: "איך תענו לטענה ששיעורי בית מלמדים אחריות? למשל: You can learn responsibility through projects too.",
        a: [],
        o: "A thoughtful response. The judges are taking notes.",
        t: ["You can learn responsibility through hobbies and projects too.", "Too much homework teaches stress, not responsibility."],
        x: [["responsibility you learn also in sport", -1], ["most students copy anyway", -1]]
      },
      {
        c: "Now let's find some middle ground. If the school asked for your recommendation, would you suggest that homework be banned completely, or just limited?",
        he: "לבטל לגמרי או להגביל? למשל: I'd suggest that it be limited, not banned.",
        a: [
          { k: ["limit limited less reduce fewer optional some_homework"], r: "A limit, then. That's probably a recommendation most teachers could live with." },
          { k: ["ban banned completely totally abolish abolished none no_homework"], r: "Banned completely! Bold. It would certainly make headlines." }
        ],
        o: "A reasonable position. Every good debate ends with some kind of compromise.",
        t: ["I'd suggest that it be limited, not banned.", "I'd recommend that it be banned completely."],
        x: [["just limited", 0], ["i would suggest that it be limited", 0], ["ban it completely", 1], ["abolish it totally", 1], ["make it optional", 0], ["i dont know really", -1]]
      },
      {
        c: "Stepping out of the debate for a moment: has arguing a side you didn't choose changed the way you see the issue?",
        he: "הוויכוח שינה את הדרך שבה אתם רואים את הנושא? למשל: Actually, yes, a little. או No, not really.",
        a: [
          { k: ["yes bit little somewhat changed actually"], n: "not no", r: "That's the hidden power of debating. It makes us see the other side." },
          { k: ["no not same still"], n: "not_sure not_know no_idea care not_make not_clear", r: "Fair enough. Testing your views and keeping them is valuable too." }
        ],
        o: "Either way, you argued it brilliantly.",
        t: ["Actually, yes, a little.", "No, not really. I still think the same."],
        x: [["yes a little bit", 0], ["actually yes", 0], ["no not really", 1], ["i still think the same", 1], ["kind of", -1], ["i don't really care", -1]]
      }
    ],
    end: "And that brings our debate to a close! Thank you for arguing so well. You'd make a formidable opponent."
  },
  {
    id: "sc102", title: "Exam practice: the future",
    he: "מתרגלים עם קוקו בגרות בעל פה: תוכניות לעתיד",
    turns: [
      {
        c: "Let's practise the oral exam. Here's a classic question: if you could study any subject in real depth one day, what would it be, and what draws you to it?",
        he: "איזה תחום הייתם רוצים ללמוד לעומק יום אחד, ולמה? למשל: I'd love to study the ocean, because it's full of mysteries.",
        a: [],
        o: "Thank you. It's a big question, and you answered it thoughtfully.",
        t: ["I'd love to study the ocean, because it's still full of mysteries.", "I'm drawn to computer science, because I love solving problems."],
        x: [["i want to study medicine because i like helping people", -1], ["i really dont know yet maybe something with art", -1]]
      },
      {
        c: "Many young people take a gap year to travel or volunteer before studying. Do you think it's a good idea, or a waste of time?",
        he: "שנת הפסקה זה רעיון טוב או בזבוז זמן? למשל: It's a great idea. או It depends on the person.",
        a: [
          { k: ["depends partly"], r: "A balanced way to look at it. It really does depend on the person." },
          { k: ["not_a_waste"], r: "Agreed, it can be eye-opening. You come back knowing yourself better." },
          { k: ["waste not no pointless"], n: "not_sure not_know no_idea care not_make not_clear", r: "A fair point. Some people prefer to keep their momentum going." },
          { k: ["good great idea yes useful helpful experience worth"], n: "no_idea not_know not_sure", r: "Agreed, it can be eye-opening. You come back knowing yourself better." }
        ],
        o: "That's an interesting way to look at it.",
        t: ["I think it's a great idea; you gain experience.", "It's a waste of time; I'd rather start studying.", "It depends on the person."],
        x: [["it depends on the person", 0], ["its not a waste", 1], ["waste of time", 2], ["no i dont think so", 2], ["good idea", 3], ["yes you get experience", 3], ["travel", -1], ["no idea", -1], ["it doesn't make sense", -1]]
      },
      {
        c: "Examiners love this one. If you could spend a week shadowing someone in any job, which job would you choose, and what would you hope to learn?",
        he: "שבוע ליד מישהו בעבודה: איזו עבודה ולמה? למשל: A vet, because I love animals.",
        a: [],
        o: "What a fascinating week that would be. You'd come back with plenty of stories.",
        t: ["A vet, because I'd love to see how they work with animals.", "A game designer, because I'd like to learn how a game is made from scratch."],
        x: [["a pilot because i love planes", -1], ["a chef in a big restaurant to learn cooking", -1]]
      },
      {
        c: "Some people say it's better to choose a job you love, even if it pays less. Others put security first. Where do you stand?",
        he: "עבודה שאוהבים או ביטחון? למשל: A job I love, definitely. או Security comes first. או A balance.",
        a: [
          { k: ["both balance depends middle"], r: "Somewhere in the middle. That's a realistic answer." },
          { k: ["love passion enjoy happy"], r: "Passion first! You'll spend a lot of your life working, after all." },
          { k: ["security money safe stable pay salary"], r: "A practical view. Stability can give you freedom in other areas." }
        ],
        o: "That's a mature answer to a difficult question.",
        t: ["A job I love, definitely.", "Security comes first for me.", "A balance of both."],
        x: [["a job i love", 1], ["passion is more important", 1], ["money is more important", 2], ["security first", 2], ["a balance of both", 0], ["doctor", -1]]
      },
      {
        c: "Which skill do you think will matter most in your generation's careers, and why?",
        he: "איזו מיומנות תהיה הכי חשובה בקריירה של הדור שלכם ולמה? למשל: Adaptability, because jobs keep changing.",
        a: [],
        o: "That's an insightful answer. It sounds like you're thinking ahead.",
        t: ["Adaptability, because jobs will keep changing so fast.", "Communication, because teamwork matters in every job."],
        x: [["using ai because it is everywhere", -1], ["creativity because robots cant do it", -1]]
      },
      {
        c: "Final question: what's the best piece of advice about the future that you've ever heard, and why do you agree with it?",
        he: "העצה הכי טובה על העתיד ששמעתם, ולמה? למשל: Try lots of things, because that is how you find what you love.",
        a: [],
        o: "Wise words, and you explained them clearly. Examiners love that.",
        t: ["Try lots of things, because you can't know what you love until you try.", "Learn languages, because they open so many doors."],
        x: [["study hard but also have fun", -1], ["dont listen to everybody follow your dream", -1]]
      }
    ],
    end: "Excellent! Your answers were clear, detailed and well supported. You're more than ready."
  },
  {
    id: "sc103", title: "Exam practice: social media",
    he: "מתרגלים עם קוקו בגרות בעל פה: רשתות חברתיות ובני נוער",
    turns: [
      {
        c: "Here's another exam topic: social media. How much of a role would you say it plays in your daily life?",
        he: "כמה מקום הרשתות תופסות בחיים שלכם? למשל: Quite a big role, to be honest; I check it every day.",
        a: [],
        o: "Thanks for being honest. That's a very common answer.",
        t: ["Quite a big role, to be honest; I check it every day.", "Not much, really. I prefer messaging my friends directly."],
        x: [["a lot i am on it every day", -1], ["not so much i am busy with sport", -1]]
      },
      {
        c: "A popular exam question: does social media bring people closer together, or does it keep them apart? Which do you think is closer to the truth?",
        he: "הרשתות מקרבות או מרחיקות? למשל: It brings people closer. או It keeps them apart. או A bit of both.",
        a: [
          { k: ["both partly somewhat depends bit"], r: "A bit of both, then. It probably depends on how people use it." },
          { k: ["apart away distance distant lonely lonelier alone isolated separate"], r: "That's a common view. A screen can sit between people as easily as it connects them." },
          { k: ["closer together connect connected connects close contact touch"], r: "That's a fair point. Staying in touch has never been easier." }
        ],
        o: "An interesting perspective on a complicated topic.",
        t: ["It brings people closer, especially friends who live far away.", "It often keeps people apart, even in the same room.", "A bit of both; it depends on how you use it."],
        x: [["it brings people closer", 2], ["together", 2], ["it keeps them apart", 1], ["people are more lonely", 1], ["both", 0], ["it depends", 0], ["my phone", -1], ["i don't know", -1]]
      },
      {
        c: "What would you say are the biggest advantages and disadvantages of social media for teenagers today?",
        he: "מה היתרונות והחסרונות הגדולים? למשל: It keeps us connected, but it wastes a lot of time.",
        a: [],
        o: "A well-balanced answer. Examiners appreciate seeing both sides.",
        t: ["It keeps us connected, but it can make us compare ourselves to others.", "It's great for learning, though it wastes a lot of time."],
        x: [["good for news bad for sleep", -1], ["you can talk with friends but there is bullying", -1]]
      },
      {
        c: "Some countries are considering banning social media for under-sixteens. Were that law to be passed here, how would you feel about it?",
        he: "איך תרגישו אם יאסרו רשתות מתחת לגיל 16? למשל: I'd support it. או I'd be against it. או Mixed feelings.",
        a: [
          { k: ["mixed both depends partly"], r: "That's a nuanced reaction to a controversial idea." },
          { k: ["support good agree fair yes"], n: "not no", r: "Interesting. You see it as a way of protecting younger teens." },
          { k: ["against unfair angry annoyed no not hate ridiculous"], n: "not_sure not_know no_idea care not_make not_clear", r: "Understandable. For many teenagers it would feel like losing something important." }
        ],
        o: "That's an honest reaction to a controversial idea.",
        t: ["I'd support it; it would protect younger kids.", "I'd be against it; it's unfair.", "I'd have mixed feelings."],
        x: [["i would support it", 1], ["i think its fair", 1], ["it would be unfair", 2], ["i would be really annoyed", 2], ["mixed feelings", 0], ["i don't agree", 2], ["sixteen", -1]]
      },
      {
        c: "If you could give social media companies one piece of advice to make their apps healthier for teenagers, what would it be?",
        he: "איזו עצה תתנו לחברות הרשתות? למשל: I'd suggest that they hide the number of likes.",
        a: [],
        o: "That's a smart suggestion. I'd happily pass it on to them.",
        t: ["I'd suggest that they hide the number of likes.", "They should remind users to take a break every hour."],
        x: [["stop the endless scrolling", -1], ["show less ads to kids", -1]]
      }
    ],
    end: "Great practice! You expressed complex opinions clearly. That's exactly what the examiners want."
  },
  {
    id: "sc104", title: "Making sense of modern art",
    he: "קוקו מדריכה בגלריה לאמנות מודרנית ושואלת מה אתם חושבים באמת",
    turns: [
      {
        c: "Step right in! This is the Gallery of Modern Art, and I'm your guide. In front of us is a huge white canvas with a single red dot. What's your honest first impression?",
        he: "מה הרושם הראשון שלכם? למשל: Honestly, I could have painted that myself.",
        a: [],
        o: "Interesting. Everyone who sees it seems to react differently.",
        t: ["Honestly, I could have painted that myself.", "It's strangely calming, like a sunset over snow."],
        x: [["i dont understand why it is in a museum", -1], ["it looks like a japanese flag", -1]]
      },
      {
        c: "The artist apparently spent two years on it. Does knowing that change how you see it?",
        he: "זה משנה משהו שהאמן עבד על זה שנתיים? למשל: Yes, a little. או No, not really.",
        a: [
          { k: ["yes bit little somewhat more change changes"], n: "not no", r: "Fascinating. Context really does shape what we see." },
          { k: ["no not same"], n: "not_sure not_know no_idea care not_make not_clear", r: "Fair enough. The effort behind a work doesn't automatically make it good." }
        ],
        o: "Hmm, it's a question art critics have argued about for decades.",
        t: ["Yes, a little. I respect it more now.", "No, not really. It's still just a dot."],
        x: [["yes a little", 0], ["maybe a bit more respect", 0], ["no not really", 1], ["i don't care", -1], ["its still just a dot", -1], ["it doesn't make sense", -1]]
      },
      {
        c: "Some people argue that art doesn't need to be beautiful, as long as it makes you think. Would you agree?",
        he: "אמנות לא חייבת להיות יפה? למשל: I agree; the idea matters most. או I disagree. או Partly.",
        a: [
          { k: ["partly depends both somewhat"], r: "A bit of both, then. Perhaps the best art manages both." },
          { k: ["disagree"], r: "So beauty matters to you. Plenty of great artists would side with you." },
          { k: ["agree yes true definitely right"], n: "not no", r: "So for you, the idea is what counts. A very modern view." },
          { k: ["no not"], n: "not_sure not_know no_idea care not_make not_clear", r: "So beauty matters to you. Plenty of great artists would side with you." }
        ],
        o: "A thoughtful answer. Art is endlessly debatable.",
        t: ["I agree; the idea matters most.", "I disagree; art should be beautiful.", "Partly; the best art does both."],
        x: [["i agree", 2], ["yes it should make you think", 2], ["i disagree", 1], ["no it should be beautiful", 3], ["partly", 0], ["both are important", 0], ["colours", -1]]
      },
      {
        c: "Now it's your turn to be the artist. What piece would you create to make visitors stop and think?",
        he: "איזו יצירה תיצרו כדי לגרום למבקרים לעצור ולחשוב? למשל: A tree made entirely of plastic bottles.",
        a: [],
        o: "Ooh, I'd queue to see that. It sounds genuinely thought-provoking.",
        t: ["A room full of mirrors with phones hanging from the ceiling.", "A tree made entirely of plastic bottles from the sea."],
        x: [["a picture of the earth crying", -1], ["a big clock that goes backwards", -1]]
      },
      {
        c: "Last question. Should museums charge an entry fee, or should art be free for everyone to see?",
        he: "מוזיאונים צריכים לגבות כסף או להיות חינם? למשל: It should be free for everyone.",
        a: [
          { k: ["both depends some days students discount"], r: "A compromise. Free days are a lovely idea." },
          { k: ["free everyone"], n: "not", r: "Free for everyone! Culture should be open to all." },
          { k: ["charge fee pay paying ticket money"], r: "A fair point. Museums need money to look after all this art." }
        ],
        o: "It's a debate that every city has at some point.",
        t: ["It should be free for everyone.", "Museums should charge a small fee.", "Free on some days, I think."],
        x: [["it should be free", 1], ["free for everyone", 1], ["they should charge a fee", 2], ["people should pay", 2], ["free for students", 0], ["it depends", 0], ["paintings", -1]]
      }
    ],
    end: "That concludes our tour. Thank you for such perceptive comments. You have the eye of a critic!"
  },
  {
    id: "sc105", title: "The city of the future",
    he: "ראש העיר קוקו מתכננת את העיר של 2050 ומבקשת את דעתכם",
    turns: [
      {
        c: "Welcome to City Hall! As mayor, I'm redesigning our city for the year twenty fifty. If you could change one thing about the way cities work today, what would it be?",
        he: "מה הייתם משנים בעיר של היום? למשל: I'd get rid of most cars and build more green spaces.",
        a: [],
        o: "That's a bold idea. I'm adding it to the plan.",
        t: ["I'd get rid of most cars and build more green spaces.", "Public transport should be free and run all night."],
        x: [["more parks and less traffic jams", -1], ["i would make everything closer to walk", -1]]
      },
      {
        c: "Traffic is our biggest headache. Would you invest in more bike lanes, a metro, or self-driving buses?",
        he: "שבילי אופניים, רכבת תחתית או אוטובוסים אוטונומיים? למשל: A metro, definitely.",
        a: [
          { k: ["bike bikes cycling bicycle bicycles scooter scooters"], r: "Bike lanes! Healthy, quiet and cheap. Hard to argue with." },
          { k: ["metro underground subway train trains"], r: "A metro! Expensive to build, but it transforms a city." },
          { k: ["self driving autonomous bus buses"], r: "Self-driving buses! Very futuristic. I like your style." }
        ],
        o: "Interesting choice. Every option has its supporters on the council.",
        t: ["More bike lanes, for sure.", "A metro, definitely.", "Self-driving buses sound amazing."],
        x: [["bike lanes", 0], ["more bicycles", 0], ["a metro", 1], ["underground train", 1], ["self driving buses", 2], ["autonomous bus", 2], ["flying cars", -1]]
      },
      {
        c: "Some residents complain that new tall buildings block the sea view. Should we keep building upwards, or protect the skyline?",
        he: "להמשיך לבנות לגובה או לשמור על הנוף? למשל: Protect the sea view. או Find a balance.",
        a: [
          { k: ["balance both compromise some"], r: "A careful balance. Tall buildings, but only in certain areas." },
          { k: ["protect view skyline nature low not_build"], r: "Protecting the view! A city's beauty is part of its identity." },
          { k: ["build building buildings upwards up tall taller higher tower towers"], r: "Building upwards! It saves space, and more people can live near the centre." }
        ],
        o: "A difficult choice. Cities around the world face the same dilemma.",
        t: ["Protect the sea view.", "Keep building upwards; we need homes.", "Find a balance between the two."],
        x: [["protect the view", 1], ["don't build more towers", 1], ["build upwards", 2], ["more tall buildings", 2], ["a balance", 0], ["some in the centre", 0], ["parks", -1]]
      },
      {
        c: "Many residents say they'd walk more if the city made it easier. What would make you choose to walk instead of taking a ride?",
        he: "מה יגרום לכם ללכת יותר ברגל? למשל: More shade, trees and places to sit along the way.",
        a: [],
        o: "Makes sense. If walking were more pleasant, we'd all do it more.",
        t: ["More shade, trees and places to sit along the way.", "Safer pavements and shops close to where people live."],
        x: [["if it was not so hot in summer", -1], ["nice streets without cars", -1]]
      },
      {
        c: "We have a limited budget. Which matters more to you: green parks, or modern technology like free city Wi-Fi?",
        he: "פארקים ירוקים או טכנולוגיה? למשל: Green parks, a city needs to breathe. או Free Wi-Fi.",
        a: [
          { k: ["both"], r: "Both! An ambitious answer. We'll see what the budget allows." },
          { k: ["park parks green nature tree trees"], r: "Parks win! A city needs places to breathe." },
          { k: ["tech technology wifi wi internet modern smart"], r: "Technology! A connected city is a modern city." }
        ],
        o: "Noted. The council will weigh up every opinion.",
        t: ["Green parks; a city needs to breathe.", "Free Wi-Fi and smart technology.", "Both, if possible."],
        x: [["green parks", 1], ["nature is more important", 1], ["free wifi", 2], ["technology", 2], ["both", 0], ["a mall", -1]]
      },
      {
        c: "Finally, our city needs a new motto for twenty fifty. What would you suggest, and why?",
        he: "איזה מוטו תציעו לעיר ולמה? למשל: A city for people, not for cars.",
        a: [],
        o: "I love it. That might well end up on every street sign.",
        t: ["A city for people, not for cars.", "Green, open and connected, because that's our future."],
        x: [["the city that never sleeps", -1], ["together we grow green", -1]]
      }
    ],
    end: "Thank you, future planner! Thanks to you, twenty fifty is looking brighter already."
  },
  {
    id: "sc106", title: "What makes us laugh?",
    he: "בפודקאסט של קוקו מדברים על הומור: מה מצחיק אותנו ולמה",
    turns: [
      {
        c: "Welcome to Feathers and Laughter, the podcast about humour! First question: what kind of thing makes you laugh the most?",
        he: "מה הכי מצחיק אתכם? למשל: Clever jokes that take a second to understand.",
        a: [],
        o: "Ha! It's fascinating how personal humour is.",
        t: ["Silly videos of animals doing strange things.", "Clever jokes that take a second to understand."],
        x: [["my friends when they do stupid things", -1], ["funny memes on the internet", -1]]
      },
      {
        c: "Here's a question our listeners keep sending in. Is a sense of humour something you're born with, or something you can learn?",
        he: "חוש הומור נולדים איתו או לומדים אותו? למשל: I think you can learn it. או You're born with it. או A bit of both.",
        a: [
          { k: ["both mix bit partly depends"], r: "A bit of both! Maybe we're born with the spark, and life teaches us the timing." },
          { k: ["learn learnt learned practise practice practice teach taught"], r: "So it can be learnt! Every great comedian started somewhere, after all." },
          { k: ["born birth natural nature genes gene inside"], r: "Born with it, then. Some people really do seem to be naturally funny." }
        ],
        o: "Hmm, it's a question scientists and comedians both love to argue about.",
        t: ["I think you can learn it, like any skill.", "You're born with it, I'm sure.", "A bit of both, to be honest."],
        x: [["you can learn it", 1], ["you are born with it", 2], ["it is natural", 2], ["both", 0], ["a bit of both", 0], ["with my cat", -1], ["i don't know", -1]]
      },
      {
        c: "Some comedians say anything can be joked about. Others believe some topics should be off-limits. Where do you stand?",
        he: "על הכול מותר לצחוק? למשל: Some topics should be off-limits. או It depends on the audience.",
        a: [
          { k: ["depends"], r: "It depends, true. A good comedian always reads the room." },
          { k: ["off_limits limit limits some line respect careful hurt hurtful sensitive"], r: "So you'd draw a line. Humour that hurts isn't really funny." },
          { k: ["anything everything free freedom"], r: "Total freedom, then. A bold position in comedy." }
        ],
        o: "It's one of the most debated questions in comedy.",
        t: ["Some topics should be off-limits.", "Anything can be joked about.", "It depends on the audience."],
        x: [["some topics should be off limits", 1], ["you shouldnt hurt people", 1], ["anything can be a joke", 2], ["everything", 2], ["it depends on the audience", 0], ["bananas", -1]]
      },
      {
        c: "Imagine you're writing a sitcom set in a school. What's the funniest situation you could put your characters in?",
        he: "סיטקום בבית ספר: מה המצב הכי מצחיק? למשל: The head teacher gets stuck in the music room.",
        a: [],
        o: "Ha! I'd watch every episode. That has comedy written all over it.",
        t: ["The head teacher gets stuck in the music room with a drum kit.", "A parrot joins the class and starts answering all the questions."],
        x: [["the teacher come to class in pyjamas", -1], ["two students switch places for a day and nobody notice", -1]]
      },
      {
        c: "Last question for the podcast. Why do you think some jokes work in any language, while others get completely lost in translation?",
        he: "למה יש בדיחות שעובדות בכל שפה ואחרות הולכות לאיבוד בתרגום? למשל: Some jokes are about words, so they don't translate.",
        a: [],
        o: "Brilliant. Humour really is one of the trickiest things to translate.",
        t: ["Some jokes are wordplay, so they only work in one language.", "Funny faces and silly situations work everywhere, because you don't need words."],
        x: [["because the words are different", -1], ["a joke about a word is not funny in hebrew", -1]]
      }
    ],
    end: "That's all for this episode of Feathers and Laughter. Thanks for the giggles, and keep smiling!"
  },
  {
    id: "sc107", title: "The vanishing trophy",
    he: "הבלשית קוקו חוקרת: הגביע של בית הספר נעלם לפני הטקס",
    turns: [
      {
        c: "Detective Coco here. The school's football trophy has vanished from its glass case, just hours before the ceremony. Where would you start investigating, and why?",
        he: "איפה תתחילו לחקור ולמה? למשל: I'd check the security camera near the case first.",
        a: [],
        o: "A logical starting point. You think like a professional.",
        t: ["I'd check the security camera near the case first.", "I'd ask whoever had the key to the case."],
        x: [["look for fingerprints on the glass", -1], ["ask the students who were there", -1]]
      },
      {
        c: "The caretaker told me: no sooner had I locked the hall than I heard the case open. What does that suggest to you?",
        he: "מה זה אומר לכם? למשל: Someone must have been hiding in the hall already.",
        a: [],
        o: "Interesting deduction. That narrows things down considerably.",
        t: ["Someone must have been hiding in the hall already.", "Maybe the caretaker isn't telling the whole truth."],
        x: [["someone was inside before", -1], ["the caretaker is lying i think", -1]]
      },
      {
        c: "We have two suspects: the team captain, who was seen near the hall, and the art teacher, who'd borrowed the trophy last year for a painting. Who seems more suspicious?",
        he: "מי חשוד יותר? למשל: The captain, definitely. או The art teacher. או Neither.",
        a: [
          { k: ["captain player student"], r: "The captain! Being seen near the hall is quite suspicious." },
          { k: ["teacher art painting"], r: "The art teacher! A previous interest in the trophy. Hmm." },
          { k: ["neither nobody none both"], r: "Keeping an open mind. Very wise, detective." }
        ],
        o: "Hmm, it's too early to tell. Let's keep digging.",
        t: ["The captain, definitely.", "The art teacher seems more suspicious.", "Neither; it's too obvious."],
        x: [["the captain", 0], ["the football player", 0], ["the art teacher", 1], ["the teacher", 1], ["neither of them", 2], ["the caretaker", -1]]
      },
      {
        c: "New evidence: there's glitter on the floor and a note saying: see you on the big day. Having seen all this, what's your theory?",
        he: "מה התאוריה שלכם? למשל: Someone took it to decorate it as a surprise for the ceremony.",
        a: [],
        o: "Ooh, that's a theory worth checking. I'm intrigued.",
        t: ["Someone took it to decorate it as a surprise for the ceremony.", "The team hid it as a prank and planned to bring it back."],
        x: [["it is a joke of the students", -1], ["the art teacher is painting it", -1]]
      },
      {
        c: "Case solved! A group of students had taken it to cover it in glitter as a surprise. Should they get into trouble, or be thanked for their creativity?",
        he: "להעניש או להודות? למשל: They should be thanked. או They should get into trouble. או A bit of both.",
        a: [
          { k: ["both"], r: "Both! A small consequence and a big thank-you. Very fair." },
          { k: ["trouble punish punished consequence consequences rules"], n: "not no", r: "Fair enough. Rules are rules, even for a good surprise." },
          { k: ["thank thanked creative creativity fine not no"], n: "not_sure not_know no_idea care not_make not_clear", r: "Thanked! After all, no harm was done, and the trophy looks fabulous." }
        ],
        o: "A tricky question. Rules matter, but so do good intentions.",
        t: ["They should be thanked for their creativity.", "They should get into a bit of trouble.", "A bit of both."],
        x: [["they should be thanked", 2], ["it was creative", 2], ["they should get into trouble", 1], ["punish them", 1], ["both", 0], ["they should not get into trouble", 2], ["glitter", -1]]
      }
    ],
    end: "Case closed, and the trophy is sparkling! Thank you, detective. Never have I had a sharper partner."
  },
  {
    id: "sc108", title: "Real or fake?",
    he: "בחדר החדשות של קוקו אתם בודקי עובדות: סרטון ויראלי, אמיתי או מזויף?",
    turns: [
      {
        c: "Hold the front page! I'm the editor of this newsroom, and you're our new fact-checker. A video of a famous singer saying something shocking is going viral. What's the first thing you'd check?",
        he: "מה הדבר הראשון שתבדקו? למשל: I'd check whether any reliable news site has reported it.",
        a: [],
        o: "Good instinct. That's where most fakes fall apart.",
        t: ["I'd check whether any reliable news site has reported it.", "I'd look carefully at the voice and the lips."],
        x: [["who posted it first", -1], ["if the singer said something about it", -1]]
      },
      {
        c: "Computers can now make realistic videos of people doing things they never did. Do you find that more exciting or more worrying?",
        he: "זה מרגש או מדאיג? למשל: More worrying, to be honest. או More exciting. או A bit of both.",
        a: [
          { k: ["both"], r: "Fair enough. It's genuinely a double-edged technology." },
          { k: ["worry worrying worried scary scared dangerous frightening"], r: "Worrying indeed. It makes trust much harder to build." },
          { k: ["exciting excited amazing cool interesting"], r: "Exciting! It could be used for wonderful things, like films and games." }
        ],
        o: "Understandable. It's a technology with two very different sides.",
        t: ["More worrying, to be honest.", "More exciting; it has great uses.", "A bit of both."],
        x: [["worrying", 1], ["its scary", 1], ["exciting", 2], ["really cool", 2], ["a bit of both", 0], ["voice", -1]]
      },
      {
        c: "Suppose a friend shares the video, convinced it's real. How would you tell them without making them feel foolish?",
        he: "איך תגידו לחבר שהסרטון מזויף בלי להביך אותו? למשל: I'd say it fooled me at first too.",
        a: [],
        o: "That's tactful. Nobody likes being made to feel silly.",
        t: ["I'd say it fooled me at first too, and show them the proof.", "I'd send them a fact-check article and joke about it."],
        x: [["i will tell him privately", -1], ["i would say lots of people believed it", -1]]
      },
      {
        c: "Should social media platforms be required to label videos made by artificial intelligence, even if it slows things down?",
        he: "צריך לחייב סימון של סרטוני בינה מלאכותית? למשל: Yes, they should be required to. או No.",
        a: [
          { k: ["depends partly maybe"], r: "A cautious answer. The details would really matter." },
          { k: ["yes definitely should label required must agree absolutely"], n: "not no", r: "Agreed. People have a right to know what's real." },
          { k: ["no not never"], n: "not_sure not_know no_idea care not_make not_clear", r: "Interesting. You'd rather keep platforms free and fast." }
        ],
        o: "It's one of the big questions of our time.",
        t: ["Yes, they should be required to.", "No, I don't think it's necessary.", "It depends on the video."],
        x: [["yes definitely", 1], ["they must label it", 1], ["no it is not necessary", 2], ["i don't think so", 2], ["maybe", 0], ["videos", -1]]
      },
      {
        c: "Last question for our new fact-checker: what's one rule you'd suggest everyone follow before sharing anything online?",
        he: "איזה כלל תציעו לפני ששולחים משהו? למשל: Check at least two reliable sources before you share.",
        a: [],
        o: "Excellent rule. I'll pin it to the newsroom wall.",
        t: ["Check at least two reliable sources before you share.", "If it makes you very angry, wait before you share it."],
        x: [["think twice before you send", -1], ["check who wrote it", -1]]
      }
    ],
    end: "Welcome to the team! With fact-checkers like you, the truth has a real chance."
  },
  {
    id: "sc109", title: "Across the desert",
    he: "קוקו מובילה מסע רגלי של שלושה ימים בנגב, ואתם בצוות",
    turns: [
      {
        c: "Welcome, explorer! I'm leading a three-day hiking expedition across the Negev, and you're on the team. What appeals to you most about a trip like this?",
        he: "מה הכי מושך אתכם במסע כזה? למשל: The silence and the stars at night.",
        a: [],
        o: "Wonderful. I think you'll find this trip unforgettable.",
        t: ["The silence and the stars at night.", "Testing myself and seeing landscapes I've never seen."],
        x: [["being with friends without phones", -1], ["i like the desert colours", -1]]
      },
      {
        c: "Having checked the forecast, I can tell you it'll be very hot. Would you rather hike early in the morning or in the late afternoon?",
        he: "מוקדם בבוקר או אחר הצהריים? למשל: Early in the morning. או In the late afternoon.",
        a: [
          { k: ["early morning sunrise dawn"], r: "Early it is! Watching the sunrise in the desert is unforgettable." },
          { k: ["afternoon evening late sunset"], r: "Late afternoon! The light is beautiful, but we'll need head torches." }
        ],
        o: "Noted. We'll plan the timing carefully.",
        t: ["Early in the morning, before the heat.", "In the late afternoon, for the sunset."],
        x: [["early morning", 0], ["at sunrise", 0], ["late afternoon", 1], ["in the evening", 1], ["at noon", -1]]
      },
      {
        c: "We can only carry so much. Apart from water, which three items would you consider essential, and why?",
        he: "אילו שלושה פריטים חיוניים חוץ ממים? למשל: A hat, sun cream and a map, because phones lose signal.",
        a: [],
        o: "Very sensible choices. You'd be a reliable teammate.",
        t: ["A hat, sun cream and a map, because phones lose signal.", "A first aid kit, snacks and a torch for the evenings."],
        x: [["hat food and good shoes", -1], ["sunglasses a jacket and a power bank", -1]]
      },
      {
        c: "On the second day, one teammate feels too tired to continue. Should the group slow down for them, or split up so the rest can reach camp on time?",
        he: "להאט בשבילו או להתפצל? למשל: We should slow down and stay together.",
        a: [
          { k: ["slow slower together stay wait"], r: "Staying together. That's the golden rule of the desert." },
          { k: ["split separate apart"], r: "Splitting up is risky out here, but it could work with a responsible adult in each group." }
        ],
        o: "A tough call. Safety always comes first in the desert.",
        t: ["We should slow down and stay together.", "Split up, with a leader in each group."],
        x: [["slow down", 0], ["stay together", 0], ["split up", 1], ["separate the group", 1], ["call a jeep", -1]]
      },
      {
        c: "We've made it! Looking back on the trip, what do you think you'll still remember years from now?",
        he: "מה תזכרו מהמסע גם בעוד שנים? למשל: Sleeping under thousands of stars.",
        a: [],
        o: "That's a beautiful memory to keep.",
        t: ["Sleeping under thousands of stars with no phone signal.", "The moment we reached the top of the crater together."],
        x: [["the view from the mountain", -1], ["how tired we were and how happy", -1]]
      }
    ],
    end: "Expedition complete! Thank you, explorer. The desert suits you."
  },
  {
    id: "sc110", title: "The time travel agency",
    he: "סוכנות מסעות בזמן של קוקו: לאן בהיסטוריה הייתם נוסעים?",
    turns: [
      {
        c: "Step inside Coco's Time Travel Agency, where we offer trips to any era! If you could visit any period in history, which would you choose, and why?",
        he: "לאיזו תקופה הייתם נוסעים ולמה? למשל: Ancient Egypt, because I'd love to see the pyramids being built.",
        a: [],
        o: "Fascinating choice! I'll start preparing the time machine.",
        t: ["Ancient Egypt, because I'd love to see the pyramids being built.", "The nineteen sixties, for the music and the fashion."],
        x: [["the time of the dinosaurs", -1], ["ancient greece to see the olympics", -1]]
      },
      {
        c: "Before you go, a warning: had you been born in that era, your daily life would have been very different. What do you think you'd find hardest?",
        he: "מה היה הכי קשה לכם בתקופה ההיא? למשל: Living without the internet and hot showers.",
        a: [],
        o: "True. We often forget how much modern life makes easy.",
        t: ["Living without the internet and hot showers.", "Not being able to choose my own future."],
        x: [["no phones and no music", -1], ["the food and no air conditioning", -1]]
      },
      {
        c: "Or would you rather skip the past and travel to the future instead, say a hundred years from now?",
        he: "אולי דווקא לעתיד? למשל: The future sounds more exciting. או No, I'd rather stay with the past.",
        a: [
          { k: ["future yes"], n: "not no past", r:"The future! Brave. You might not recognise anything at all." },
          { k: ["past history no not stay"], n: "not_sure not_know no_idea care not_make not_clear", r: "Sticking with the past. At least you'd know what to expect there." }
        ],
        o: "Fair enough. Either way, it'd be the trip of a lifetime.",
        t: ["The future sounds more exciting.", "No, I'd rather stay with the past."],
        x: [["yes the future", 0], ["future sounds cool", 0], ["no the past is better", 1], ["i prefer history", 1], ["both", -1]]
      },
      {
        c: "One important rule: travellers mustn't change anything in the past. Do you think one small change could really alter the future?",
        he: "שינוי קטן יכול לשנות את העתיד? למשל: Yes, everything could change. או I doubt it. או Maybe.",
        a: [
          { k: ["maybe perhaps possibly depends"], r: "Maybe! Nobody can say for sure, which is exactly why there's a rule." },
          { k: ["yes definitely could butterfly everything"], n: "not no doubt", r: "The butterfly effect! One tiny change, and everything shifts." },
          { k: ["no not doubt unlikely"], n: "not_sure not_know no_idea care not_make not_clear", r: "A sceptic! Perhaps history is tougher than we think." }
        ],
        o: "A fascinating question that scientists still argue about.",
        t: ["Yes, everything could change.", "I doubt it; history is strong.", "Maybe, nobody really knows."],
        x: [["yes definitely", 1], ["the butterfly effect", 1], ["i don't think so", 2], ["no its unlikely", 2], ["maybe", 0], ["dinosaurs", -1], ["i don't care", -1]]
      },
      {
        c: "Imagine you could bring one object back from your trip. What would it be, and what would you do with it?",
        he: "איזה חפץ תביאו ומה תעשו איתו? למשל: An ancient scroll, which I'd give to a museum.",
        a: [],
        o: "What a souvenir! Every museum would be desperate to get it.",
        t: ["An ancient scroll, which I'd give to a museum.", "A record from the sixties, to play at a party."],
        x: [["a dinosaur egg to keep at home", -1], ["gold coins to sell them", -1]]
      },
      {
        c: "Last question. If you could go back and relive just one kind of day from your own life, what kind of day would you choose?",
        he: "איזה סוג של יום הייתם חווים שוב? למשל: A summer day at the beach with my friends.",
        a: [],
        o: "What a lovely choice. Some days really are worth living twice.",
        t: ["A summer day at the beach with my friends.", "The day I won my first competition."],
        x: [["my birthday party last year", -1], ["the first day of the summer holiday", -1]]
      }
    ],
    end: "Your ticket is booked! Thank you for choosing Coco's Time Travel. Mind the dinosaurs!"
  },
  {
    id: "sc111", title: "An AI for a teacher?",
    he: "פרופסור קוקו חוקרת את עתיד החינוך: מורה בינה מלאכותית, כן או לא?",
    turns: [
      {
        c: "Hello! I'm Professor Coco, and I'm researching the future of education. Imagine your school replaced half of its lessons with a computer tutor powered by artificial intelligence. What's your first reaction?",
        he: "מה התגובה הראשונה שלכם? למשל: I'd be curious, but a bit worried about losing real teachers.",
        a: [],
        o: "That's a very understandable reaction.",
        t: ["I'd be curious, but a bit worried about losing real teachers.", "I'd love it, as long as it explains things clearly."],
        x: [["it is a crazy idea i dont like it", -1], ["cool we can learn when we want", -1]]
      },
      {
        c: "A computer tutor could adapt to each student's pace. Do you think that would make learning fairer, or would something important be lost?",
        he: "זה יהיה הוגן יותר או שמשהו חשוב יאבד? למשל: It would make learning fairer. או Something human would be lost.",
        a: [
          { k: ["both"], r: "Both, perhaps. Fairer in some ways, but at a cost." },
          { k: ["fair fairer equal better pace yes"], n: "not no", r: "Fairer! Every student getting exactly what they need is a powerful idea." },
          { k: ["lost lose human relationship people teacher teachers no not"], n: "not_sure not_know no_idea care not_make not_clear", r: "Good point. Teachers give us things a machine probably can't." }
        ],
        o: "That's a nuanced view of a really complex issue.",
        t: ["It would make learning fairer.", "Something human would be lost.", "A bit of both."],
        x: [["it would be fairer", 1], ["yes everyone learns at their pace", 1], ["something would be lost", 2], ["we need human teachers", 2], ["both", 0], ["robots", -1]]
      },
      {
        c: "What could a human teacher do that a machine, however clever, never could?",
        he: "מה מורה אנושי יכול לעשות שבינה מלאכותית לא תוכל? למשל: Inspire us with their own passion for the subject.",
        a: [],
        o: "Interesting. That's something technology may never manage.",
        t: ["Notice when a student is having a bad day and help them.", "Inspire us with their own passion for the subject."],
        x: [["understand feelings of students", -1], ["make jokes and know us personally", -1]]
      },
      {
        c: "Suppose students could use artificial intelligence for every assignment. Would you insist that some work still be done without it?",
        he: "הייתם מתעקשים שחלק מהעבודה ייעשה בלי בינה מלאכותית? למשל: Yes, I'd insist that exams be done without it.",
        a: [
          { k: ["yes definitely insist should some absolutely of_course"], n: "not no", r: "So you'd insist that some work be done the old-fashioned way. Very sensible." },
          { k: ["no not"], n: "not_sure not_know no_idea care not_make not_clear", r: "Interesting. You trust students to use it well. Bold." }
        ],
        o: "Hmm, schools everywhere are wrestling with that exact question.",
        t: ["Yes, I'd insist that exams be done without it.", "No, I'd let students decide."],
        x: [["yes definitely", 0], ["some work should be without it", 0], ["no it's fine", 1], ["i would not insist", 1], ["computers", -1]]
      },
      {
        c: "Ten years from now, how do you imagine a typical school day might look?",
        he: "איך ייראה יום לימודים בעוד עשר שנים? למשל: Shorter lessons, more projects, and AI helping with practice.",
        a: [],
        o: "A fascinating vision. I'd love to visit that school.",
        t: ["Shorter lessons, more projects, and AI helping with practice.", "Not that different, honestly; people still need to meet."],
        x: [["everyone at home with a computer", -1], ["robots in every class and no books", -1]]
      }
    ],
    end: "Thank you for your insights! My research will be all the richer for them."
  },
  {
    id: "sc112", title: "The surprise party",
    he: "מתכננים עם קוקו מסיבת הפתעה לחברה שזכתה בתחרות מדע",
    turns: [
      {
        c: "Psst! We're planning a surprise party for a friend who's just won a big science competition. Roughly how many people should we invite, would you say?",
        he: "בערך כמה אנשים להזמין? למשל: Just a few close friends, around ten. או The whole class, thirty or so.",
        a: [
          { k: ["few small couple five six seven eight nine ten eleven twelve not_many"], r: "A small group. Cosy, and much easier to keep quiet!" },
          { k: ["twenty thirty forty fifty hundred 25 30 35 40 50 100 lots many big everyone whole"], r:"A big crowd! A proper celebration, though harder to keep quiet." }
        ],
        o: "Okay, something like that. We'll work out the exact numbers later.",
        t: ["Just a few close friends, around ten.", "The whole class, thirty or so."],
        x: [["about 10 people", 0], ["just a few close friends", 0], ["around thirty or so", 1], ["the whole class", 1], ["fifteen", -1], ["i have no idea", -1]]
      },
      {
        c: "Where should it be: at someone's house, in a park, or somewhere like a bowling alley?",
        he: "איפה תהיה המסיבה? למשל: In the park. או At a bowling alley. או At someone's house.",
        a: [
          { k: ["house home flat apartment"], r: "Someone's place! Cosy and easy to decorate." },
          { k: ["park outside beach outdoors"], r: "Outdoors! Fresh air and plenty of space for everyone." },
          { k: ["bowling alley escape restaurant pizza cinema"], r: "Somewhere fun like that! And nobody has to tidy up afterwards." }
        ],
        o: "Nice. We'll check what's available that day.",
        t: ["At someone's house, it's cosy.", "In the park, if the weather's good.", "At a bowling alley."],
        x: [["at a house", 0], ["someones home", 0], ["the park", 1], ["at the beach", 1], ["bowling", 2], ["an escape room", 2], ["on the moon", -1]]
      },
      {
        c: "The tricky part is keeping it a surprise. How would you get her to the party without her suspecting anything?",
        he: "איך תביאו אותה למסיבה בלי שתחשוד? למשל: I'd tell her we're just going out for pizza.",
        a: [],
        o: "Sneaky! I'm impressed. She'll never see it coming.",
        t: ["I'd tell her we're just going out for pizza.", "I'd ask her to help me with a project, sort of last minute."],
        x: [["say we go to the cinema", -1], ["her brother will bring her", -1]]
      },
      {
        c: "Food is sorted, more or less. What else do we need to make it feel special, things like music or decorations, that kind of thing?",
        he: "מה עוד צריך כדי שזה ירגיש מיוחד? למשל: A playlist of her favourite songs and some balloons.",
        a: [],
        o: "Brilliant. That kind of detail makes all the difference.",
        t: ["A playlist of her favourite songs and some balloons.", "A banner and a cake shaped like a trophy."],
        x: [["lights and a big sign", -1], ["a video from all her friends", -1]]
      },
      {
        c: "Disaster! Our friend finds out the day before. Should we cancel the party, or carry on anyway?",
        he: "לבטל או להמשיך בכל זאת? למשל: Carry on anyway! או We should cancel it.",
        a: [
          { k: ["cancel stop forget"], n: "not", r: "Cancelling would be a shame, but we could plan a different surprise later on." },
          { k: ["carry continue anyway still go_ahead keep not"], n: "not_sure not_know no_idea care not_make not_clear", r: "Carry on! A party is still a party, surprise or not." }
        ],
        o: "Hmm, either way, she'll know how much we care.",
        t: ["Carry on anyway, it's still a party!", "We should cancel it and plan something else."],
        x: [["cancel it", 0], ["we should cancel", 0], ["carry on anyway", 1], ["still do the party", 1], ["don't cancel", 1], ["cake", -1], ["i don't care", -1]]
      }
    ],
    end: "Party plans complete! It's going to be a night to remember, more or less guaranteed."
  },
  {
    id: "sc113", title: "Book versus film",
    he: "מועדון הקריאה של קוקו: הספר או הסרט?",
    turns: [
      {
        c: "Pull up a cushion, Coco's Book Club is open! Today's question is an old favourite: would you say the book is usually better than the film?",
        he: "הספר בדרך כלל טוב יותר מהסרט? למשל: The book is usually better. או The film is often better.",
        a: [
          { k: ["depends usually_not not_always sometimes"], r: "It depends, true. Some films are even better than the book." },
          { k: ["film_is films_are movie_is movies_are prefer_films prefer_movies prefer_the_film"], r: "The film! Sometimes seeing a story brings it to life in a new way." },
          { k: ["book_is books_are prefer_books prefer_the_book yes book books"], r: "The book! Your imagination is the best director, after all." },
          { k: ["film films movie movies"], r: "The film! Sometimes seeing a story brings it to life in a new way." }
        ],
        o: "Interesting. People feel strongly about this one.",
        t: ["The book is usually better.", "The film is often better.", "It depends on the story."],
        x: [["the book is better", 2], ["books are better than films", 2], ["the film is better than the book", 1], ["movies are better", 1], ["the movie", 3], ["it depends", 0], ["not always", 0], ["yes the book", 2], ["popcorn", -1]]
      },
      {
        c: "Think of a story you know both as a book and as a film or series. Which version did you prefer, and why?",
        he: "איזו גרסה העדפתם ולמה? למשל: I preferred the series, because the actors were brilliant.",
        a: [],
        o: "Interesting! That's a good example to discuss.",
        t: ["Harry Potter; the books have so many details the films missed.", "I preferred the series, because the actors were brilliant."],
        x: [["the hunger games the book was better", -1], ["i only saw the film of it", -1]]
      },
      {
        c: "When a book becomes a film, the director often changes the ending. Is that acceptable, or should they stay faithful to the original?",
        he: "מותר לשנות את הסוף? למשל: They should stay faithful to the book. או Changing it is fine.",
        a: [
          { k: ["depends"], r: "It depends on the change, true. Some changes improve a story." },
          { k: ["faithful original same respect stay unacceptable not no"], n: "not_sure not_know no_idea care not_make not_clear", r: "Stay faithful! Readers can feel quite betrayed otherwise." },
          { k: ["acceptable okay ok fine change changes changing creative yes"], r: "Creative freedom, then. A film is a new work of art, after all." }
        ],
        o: "A classic debate. Authors and directors still argue about it.",
        t: ["They should stay faithful to the book.", "Changing it is fine; it's a new work.", "It depends on how big the change is."],
        x: [["they should stay faithful", 1], ["it's not acceptable", 1], ["it is acceptable", 2], ["changes are fine", 2], ["it depends on the change", 0], ["happy ending", -1]]
      },
      {
        c: "Reading habits are changing. Do you mostly read on paper, on a screen, or do you listen to audiobooks?",
        he: "על נייר, על מסך או ספרי שמע? למשל: Mostly on paper. או I listen to audiobooks.",
        a: [
          { k: ["not_much not_read rarely hardly"], r: "That's fine! Stories come in all kinds of forms, films and games included." },
          { k: ["paper printed real_book real_books normal"], r: "Paper! Nothing beats the smell of a new book." },
          { k: ["screen screens phone kindle tablet online"], r: "Screens! Convenient, and you can carry a whole library." },
          { k: ["listen audio audiobook audiobooks podcast"], r: "Audiobooks! Perfect for long bus rides." }
        ],
        o: "Interesting. Everyone finds their own way into stories.",
        t: ["Mostly on paper.", "Usually on a screen.", "I mostly listen to audiobooks."],
        x: [["on paper", 1], ["real books", 1], ["on my phone", 2], ["kindle", 2], ["audiobooks", 3], ["i listen in the car", 3], ["i don't read much", 0], ["comics", -1], ["i don't really care", -1]]
      },
      {
        c: "Final question. If your life story became a film one day, what kind of film would it be, and who would play you?",
        he: "איזה סרט יהיה על החיים שלכם ומי ישחק אתכם? למשל: A comedy, definitely, with Zendaya playing me.",
        a: [],
        o: "Ha! I'd buy a ticket for the opening night.",
        t: ["A comedy, definitely, with Zendaya playing me.", "An adventure film, and I'd play myself!"],
        x: [["an action movie with tom holland", -1], ["a boring film about a student", -1]]
      }
    ],
    end: "That's all for today's Book Club. Keep reading, keep watching, and keep arguing about endings!"
  },
  {
    id: "sc114", title: "Running for student council",
    he: "אתם מתמודדים למועצת התלמידים, וקוקו מנהלת את הקמפיין",
    turns: [
      {
        c: "Congratulations! You've decided to run for student council, and I'm your campaign manager. What's the main reason you want to represent the students?",
        he: "למה אתם רוצים לייצג את התלמידים? למשל: I want students' voices to actually be heard.",
        a: [],
        o: "That's a compelling reason. Voters will connect with it.",
        t: ["I want students' voices to actually be heard.", "I'd like to make school a more fun place for everyone."],
        x: [["because i want to change things in school", -1], ["i like to help other students", -1]]
      },
      {
        c: "Every campaign needs a key promise. What's the one change you'd push for if you were elected?",
        he: "מה השינוי שתבטיחו? למשל: A quiet room where students can relax between lessons.",
        a: [],
        o: "A strong promise. Simple, clear and practical.",
        t: ["Better food in the canteen and more water fountains.", "A quiet room where students can relax between lessons."],
        x: [["less tests in the same week", -1], ["more trips and parties", -1]]
      },
      {
        c: "Your opponent is promising longer breaks. Should we criticise their idea, or focus only on our own message?",
        he: "לבקר את הרעיון שלהם או להתמקד במסר שלנו? למשל: Let's focus on our own message.",
        a: [
          { k: ["criticise criticize criticism attack against weak"], n: "not never", r: "Okay, but carefully. Voters dislike campaigns that sound too negative." },
          { k: ["focus our own positive ours message not never"], n: "not_sure not_know no_idea care not_make not_clear", r:"Staying positive! That usually wins more trust in the long run." }
        ],
        o: "A strategic decision. Let's think about how voters would react.",
        t: ["We should criticise their idea politely.", "Let's focus on our own message."],
        x: [["criticise their idea", 0], ["show it is weak", 0], ["focus on our message", 1], ["stay positive", 1], ["i don't know", -1], ["we should not criticise them", 1]]
      },
      {
        c: "We have to make a thirty-second video for the campaign. What would you say or show to persuade people?",
        he: "מה תגידו או תראו בסרטון כדי לשכנע? למשל: I'd show real students talking about what they want changed.",
        a: [],
        o: "That would definitely grab attention. Let's film it tomorrow.",
        t: ["I'd show real students talking about what they want changed.", "A funny clip of me trying to fix the old water fountain."],
        x: [["my plan in three short points", -1], ["students saying why they vote for me", -1]]
      },
      {
        c: "In the debate, someone asks: why should we trust you to keep your promises? How would you answer?",
        he: "למה שיאמינו לכם? למשל: Judge me on my actions; I'll report back every month.",
        a: [],
        o: "Excellent answer. Confident, but not arrogant.",
        t: ["Because I've already organised school events and delivered them.", "Judge me on my actions; I'll report back every month."],
        x: [["because i always do what i say", -1], ["you can ask my friends about me", -1]]
      },
      {
        c: "The results are in, and it's very close! Win or lose, what would you take away from this experience?",
        he: "מה תיקחו מהחוויה, בין אם תנצחו ובין אם לא? למשל: I've learned to speak in front of people confidently.",
        a: [],
        o: "That's a mature way to see it. You've already won something important.",
        t: ["I've learned to speak in front of people confidently.", "That listening to people matters more than talking."],
        x: [["i learned a lot about people", -1], ["it was fun and i made new friends", -1]]
      }
    ],
    end: "And the winner is you! Congratulations, council member. Now it's time to keep those promises."
  },
  {
    id: "sc115", title: "Fast fashion",
    he: "קוקו, חובבת האופנה, מדברת איתכם על אופנה מהירה, יד שנייה ואיכות הסביבה",
    turns: [
      {
        c: "Ooh, my favourite topic: fashion! Did you know some brands release new collections almost every week? How often do you think people really need new clothes?",
        he: "כמה פעמים באמת צריך בגדים חדשים? למשל: Only a few times a year, when things wear out.",
        a: [],
        o: "Interesting. It's a question the fashion world doesn't like to ask.",
        t: ["Honestly, only a few times a year, when things wear out.", "It depends on the person and the season."],
        x: [["maybe once a month or less", -1], ["only when something is broken", -1]]
      },
      {
        c: "Fast fashion is cheap and trendy, but it creates huge amounts of waste. Do you think the benefits outweigh the costs?",
        he: "היתרונות גוברים על המחיר? למשל: No, the costs are far too high. או Yes, cheap fashion helps people. או Partly.",
        a: [
          { k: ["depends partly both"], r: "A balanced view. It's rarely black and white." },
          { k: ["no not costs waste worse"], n: "not_sure not_know no_idea care not_make not_clear", r: "Agreed. The planet pays a high price for cheap clothes." },
          { k: ["yes benefits outweigh cheap affordable"], r: "I see your point. Affordable fashion lets everyone enjoy style." }
        ],
        o: "A thoughtful answer to a genuinely difficult question.",
        t: ["No, the costs are far too high.", "Yes, cheap fashion helps lots of people.", "Partly; it depends on the brand."],
        x: [["no the costs are bigger", 1], ["i don't think so", 1], ["yes the benefits", 2], ["it is cheap so yes", 2], ["partly", 0], ["it depends", 0], ["shoes", -1], ["it doesn't make sense", -1]]
      },
      {
        c: "Second-hand shopping is becoming really popular with teenagers. Would you happily wear second-hand clothes, or do you prefer new ones?",
        he: "תלבשו בגדים יד שנייה או מעדיפים חדשים? למשל: I'd happily wear second-hand clothes. או I prefer new ones.",
        a: [
          { k: ["not_mind both either"], r: "Open to both! The best wardrobes are often a mix." },
          { k: ["second_hand secondhand vintage used thrift yes happily"], n: "not no", r: "Fabulous! Vintage pieces have so much character." },
          { k: ["new prefer no not"], n: "not_sure not_know no_idea care not_make not_clear", r: "New ones, then. There's nothing quite like that fresh-from-the-shop feeling." }
        ],
        o: "Either way, style is about how you wear it.",
        t: ["I'd happily wear second-hand clothes.", "I prefer new ones, to be honest.", "I don't mind either way."],
        x: [["i don't mind", 0], ["yes i love vintage", 1], ["second hand is cool", 1], ["i prefer new ones", 2], ["no i like new", 2], ["shoes", -1]]
      },
      {
        c: "Imagine you're launching a sustainable fashion brand for teenagers. What would make it different from the brands we have now?",
        he: "מה יהיה מיוחד במותג שלכם? למשל: Every item would be made from recycled materials.",
        a: [],
        o: "Ooh, I'd be your very first customer!",
        t: ["Every item would be made from recycled materials.", "Customers could swap clothes they no longer wear."],
        x: [["clothes that last ten years", -1], ["you can return old clothes and get a discount", -1]]
      },
      {
        c: "Some people suggest that brands be required to repair any item they sell, for free. Do you think that's realistic?",
        he: "זה מציאותי לחייב מותגים לתקן בחינם? למשל: Yes, I think it's realistic. או No, it's too expensive. או Maybe.",
        a: [
          { k: ["maybe depends partly some"], r: "Perhaps for some items, then. A sensible middle ground." },
          { k: ["yes realistic possible could should agree"], n: "not no", r: "An optimist! It would certainly change how brands design clothes." },
          { k: ["no not unrealistic expensive impossible"], n: "not_sure not_know no_idea care not_make not_clear", r: "Fair point. It would be very expensive for the companies." }
        ],
        o: "An interesting idea either way. It's already being discussed in some places.",
        t: ["Yes, I think it's realistic.", "No, it's too expensive for them.", "Maybe for some items."],
        x: [["yes i think so", 1], ["its realistic", 1], ["no too expensive", 2], ["it's unrealistic", 2], ["maybe for some things", 0], ["clothes", -1]]
      },
      {
        c: "Last question from your fashion-loving parrot. What's one small change teenagers could make that would really help?",
        he: "איזה שינוי קטן בני נוער יכולים לעשות? למשל: Buy fewer clothes, but choose ones you really love.",
        a: [],
        o: "Small change, big difference. I'm adding it to my style guide.",
        t: ["Buy fewer clothes, but choose ones you really love.", "Swap clothes with friends instead of always buying new."],
        x: [["buy second hand more", -1], ["take care of your clothes", -1]]
      }
    ],
    end: "Thank you, fashion activist! Style and sustainability: the perfect outfit."
  }
]);
