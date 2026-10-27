// Talk with Coco, level bp (specs/talk.md; format and writing rules: tools/TALK-WRITING.md).
// Mission talks (t<mission id>) first, then the home scenes (s<level><nn>). Check: node test/talk-check.js
window.EQ_TALK = window.EQ_TALK || {};
// Talk to Coco, B1+ (bp): mission talks, one per mission in docs/missions/bp.js. Rules: tools/TALK-WRITING.md.
window.EQ_TALK.bp = (window.EQ_TALK.bp || []).concat([
  {
    id: 'tbpg01', title: "Coco's question show",
    he: 'משחק שאלות עם קוקו: שאלות נושא, שאלות שליליות ו-What is she like?',
    turns: [
      {
        c: "I love asking questions, so let me start. It can be a friend, a relative or a funny star: who makes you laugh the most?",
        he: "מי מצחיק אתכם הכי הרבה, ולמה? למשל: My best friend makes me laugh, because she is so silly.",
        a: [],
        o: "Ha! Everyone needs a person like that. Laughing is great for the feathers.",
        t: ["My best friend makes me laugh, because she is so silly.", "My cousin makes me laugh. He tells great jokes."],
        x: [["my friend noa she is so funny", -1], ["my brother", -1], ["a youtuber called mrbeast", -1]]
      },
      {
        c: "Now tell me what that person is like. Are they loud and a bit crazy, or quiet and clever?",
        he: "What is he like? שואל על האופי, לא על המראה. למשל: She is loud and a bit crazy. או He is quiet but clever.",
        a: [
          { k: ['loud crazy wild noisy energetic silly crazier'], r: "Loud and a bit crazy! That is my kind of person. We would get on very well." },
          { k: ['quiet calm shy serious'], r: "Quiet ones are often the funniest! They surprise you with the best jokes." },
          { k: ['clever smart kind nice sweet funny friendly'], r: "What a lovely mix! People like that make every day better." },
          { k: ['tall short hair eyes glasses blond curly beard'], r: "Ooh, that is what they look like! I can picture them now. They sound lovely." }
        ],
        o: "They sound like a wonderful person to have around.",
        t: ["She is loud and a bit crazy.", "He is quiet but very clever.", "She is funny and really kind."],
        x: [["she is very crazy and loud", 0], ["he is quiet and smart", 1], ["she have long hair", 3], ["he is my uncle", -1], ["she is kind", 2], ["he is tall", 3], ["both", -1], ["she is funny and nice", 2]]
      },
      {
        c: "Now a question that hopes you will agree: isn't summer the best season of the year? Do you agree, or do you prefer another season?",
        he: "שאלה שלילית מבקשת הסכמה. ענו: Yes, it is! או No, I prefer winter, because...",
        a: [
          { k: ['winter autumn spring fall'], n: 'summer', r: "Fair enough! Every season has its own fashion, and that one has some lovely clothes." },
          { k: ['not no disagree'], n: 'i_do_not_know not_sure', r: "Not for you! That is fine. Summer here can be far too hot and sticky." },
          { k: ['yes agree summer beach best right true'], n: 'i_do_not_know not_sure', r: "We agree! Beach days, ice cream and sunshine are hard to beat." },
          { k: ['hot sticky sweat sweaty'], r: "Too hot, that is true! Summer here can be very hot and sticky." }
        ],
        o: "Every season has something special. Thank you for your opinion!",
        t: ["Yes, it is! I love the beach.", "No, I prefer winter, because I love rain.", "Not really. Summer is too hot here."],
        x: [["yes it is i love summer", 2], ["no winter is better", 0], ["i don't agree its too hot", 1], ["i am not agree", 1], ["pizza and pasta", -1], ["spring is my favourite", 0], ["yes i love hot weather", 2], ["its too hot", 3], ["i don't know", -1], ["i like summer and winter", 2]]
      },
      {
        c: "Let's play detective! Somebody ate all my crackers last night. What question would you ask first to find out who did it?",
        he: "שאלו שאלת נושא, בלי did: Who ate the crackers? (ולא Who did eat)",
        a: [
          { k: ['who', 'did'], r: "Who ate my crackers? That is the question! My main suspect is the cat next door." },
          { k: ['who'], r: "Ooh, a great detective question! My main suspect is the cat next door." },
          { k: ['where when what why how'], r: "A clever detective question! My main suspect is still the cat next door." }
        ],
        o: "Detective work is hard! I still think the cat next door did it.",
        t: ["Who ate the crackers?", "Who was in the kitchen last night?", "Where were you at midnight?"],
        x: [["who ate my crackers", 1], ["who did eat the crackers", 0], ["where were you last night", 2], ["the cat", -1], ["who took them", 1], ["i don't know", -1]]
      },
      {
        c: "My final question! If you could talk to any famous person for five minutes, who would it be, and what would you ask them?",
        he: "עם איזה מפורסם הייתם רוצים לדבר, ומה הייתם שואלים? למשל: Messi. I would ask him how he trains.",
        a: [],
        o: "What a brilliant choice! I would love to hear that conversation.",
        t: ["Messi. I would ask him how he trains.", "Taylor Swift. I would ask her what inspires her songs."],
        x: [["taylor swift i will ask her about her songs", -1], ["ronaldo how much he train", -1]]
      }
    ],
    end: "You asked and answered like a real reporter today. See you next time, my curious friend!"
  },
  {
    id: 'tbpg02', title: 'Coco the polite tourist',
    he: 'קוקו תיירת ומבקשת עזרה בנימוס, ואתם שואלים אותה בחזרה: Could you tell me...?',
    turns: [
      {
        c: "Excuse me, I'm a tourist parrot! Could you tell me where I can find really good food around here? What should I try?",
        he: "המליצו לקוקו על אוכל. למשל: You should try the falafel near the market.",
        a: [],
        o: "Mmm, that sounds delicious. I'm writing it down in my little travel book.",
        t: ["You should try the falafel near the market.", "I think you should try the pizza place near the beach."],
        x: [["try the hummus it is the best", -1], ["shawarma near my school", -1]]
      },
      {
        c: "Thank you! I only packed sunglasses and a tiny scarf. Do you know if it is warm here in the winter?",
        he: "ספרו לקוקו איך מזג האוויר בחורף. למשל: Yes, it is usually warm. או No, it can be cold and rainy.",
        a: [
          { k: ['not_cold not_very_cold not_too_cold not_that_cold not_so_cold'], r: "Not too cold! Then my tiny scarf might be enough. Lucky me." },
          { k: ['cold rain rainy chilly freezing coat jacket storm'], r: "Cold and rainy! Then I need a proper coat. Good thing I own a clothes shop." },
          { k: ['hot warm sunny nice yes'], n: 'not i_do_not_know not_sure', r: "Warm in the winter! My sunglasses and I are very happy to hear that." },
          { k: ['not no'], n: 'i_do_not_know not_sure', r: "Not warm! Then I need a proper coat. Good thing I own a clothes shop." }
        ],
        o: "Good to know! I will pack a bit of everything, just in case.",
        t: ["Yes, it is usually warm and sunny.", "No, it can be cold and rainy.", "It's not very warm, but it's nice."],
        x: [["yes it is warm", 2], ["no it is cold", 1], ["it is not hot", 3], ["sometimes it rains", 1], ["depends", -1], ["no", 3], ["it's not very cold", 0], ["i don't know", -1]]
      },
      {
        c: "Your turn! Imagine you are lost in London, and I'm a stranger at the bus stop. How would you ask me politely where the station is?",
        he: "שאלה מנומסת: Could you tell me where the station is? בסוף בא is, כמו במשפט רגיל.",
        a: [
          { k: ['is_the are_the'], r: "Could you tell me where the station is? Of course I can! It's just round the corner, past the bakery." },
          { k: ['could can excuse please do_you_know tell'], r: "So polite! The station is just round the corner, past the bakery." }
        ],
        o: "No problem! The station is just round the corner, past the bakery.",
        t: ["Excuse me, could you tell me where the station is?", "Do you know where the nearest station is?", "Sorry, I'm lost. Which way is the station, please?"],
        x: [["could you tell me where is the station", 0], ["excuse me where the station is", 1], ["do you know where the train station is", 1], ["train", -1], ["where is the station", 0]]
      },
      {
        c: "Ooh, I wonder what a tourist like me should never miss here. Can you tell me what the most beautiful place in this country is, and why?",
        he: "מה המקום הכי יפה בארץ, ולמה? למשל: I think the Sea of Galilee is beautiful, because it's so calm.",
        a: [],
        o: "Beautiful! I'm adding it to my map right now. My wings are ready.",
        t: ["I think the Sea of Galilee is beautiful, because it's so calm.", "You should see the desert. The views are amazing."],
        x: [["the dead sea because you float", -1], ["jerusalem it is very old", -1]]
      },
      {
        c: "One more! Now you are the tourist, in a big museum in Paris. What polite question would you ask the guard there?",
        he: "שאלו את השומר שאלה מנומסת. למשל: Could you tell me where the Mona Lisa is? או Do you know what time it closes?",
        a: [],
        o: "Very polite! The guard smiles and shows you the way.",
        t: ["Could you tell me where the Mona Lisa is?", "Do you know what time the museum closes?", "Can you tell me if there is a cafe here?"],
        x: [["could you tell me where are the toilets", -1], ["where is mona lisa", -1], ["do you know when it close", -1]]
      }
    ],
    end: "You were so polite today, even the museum guard would bow. See you soon, my friend!"
  },
  {
    id: 'tbpg03', title: 'So do I, neither do I',
    he: 'קוקו מספרת על עצמה ואתם מסכימים או לא: So do I, Neither can I, ו-question tags',
    turns: [
      {
        c: "Let's find out what we have in common. I absolutely love dancing in the rain. What about you?",
        he: "אם גם אתם אוהבים, אומרים So do I! אם לא: Not really, I prefer...",
        a: [
          { k: ['so_do_i so_am_i'], r: "Great minds think alike! Two dancers in the rain. My feathers get wet, but I don't care." },
          { k: ['not no hate prefer never'], n: 'i_do_not_know not_sure', r: "Not your thing! That is fine. You can stay dry and watch me." },
          { k: ['me_too also'], r: "Me too! And you can also say: so do I. Rain dances forever." },
          { k: ['yes love like fun'], n: 'i_do_not_know not_sure', r: "You love it too! Then we will dance together at the next storm." }
        ],
        o: "Fair enough! We all like different things, and that is fine.",
        t: ["So do I! It's so much fun.", "Not really. I prefer staying dry.", "Me too, I love the rain."],
        x: [["so do i", 0], ["me too", 2], ["i also love it", 2], ["no i hate rain", 1], ["i don't", 1], ["no it is too cold", 1], ["yes i like it", 3], ["sometimes", -1]]
      },
      {
        c: "Here's a confession: I can't whistle, because my beak gets in the way. Can you whistle?",
        he: "תשובה קצרה: Yes, I can. או No, I can't. ואם גם אתם לא יכולים: Neither can I!",
        a: [
          { k: ['neither nor'], r: "Neither of us, then! Let's start a no-whistle club. We can clap instead." },
          { k: ['not no'], n: 'i_do_not_know not_sure', r: "So neither of us can! Let's start a no-whistle club and clap instead." },
          { k: ['yes can whistle'], n: 'i_do_not_know not_sure', r: "Lucky you! Please whistle a happy song for me one day." }
        ],
        o: "Interesting! Whistling is harder than it looks.",
        t: ["Neither can I!", "Yes, I can. I whistle all the time.", "No, I can't. I've tried many times."],
        x: [["neither can i", 0], ["no i can't", 1], ["i cannot", 1], ["yes i can", 2], ["i can whistle very good", 2], ["a little bit", -1]]
      },
      {
        c: "Tell me about your day! What is one thing you did today? You've had a busy day, haven't you?",
        he: "ענו לשאלת הזנב: Yes, I have. או No, I haven't. וספרו דבר אחד שעשיתם.",
        a: [
          { k: ['not no relax relaxed quiet lazy chill easy boring calm'], n: 'i_do_not_know not_sure', r: "A calm day! Sometimes that is exactly what we need." },
          { k: ['yes busy school lesson lessons homework training practice test tests'], n: 'i_do_not_know not_sure', r: "Busy, busy! You deserve a big rest, and maybe a cracker." }
        ],
        o: "Thank you for telling me about your day!",
        t: ["Yes, I have. I had three tests!", "No, I haven't. It was a quiet day.", "Yes, I went to training after school."],
        x: [["yes i have i had a test", 1], ["no i haven't", 0], ["it was boring", 0], ["i played with my dog", -1], ["yes very busy", 1]]
      },
      {
        c: "People think parrots don't like vegetables, but I do like carrots! What is one food you really do like, even if people are surprised?",
        he: "do לפני הפועל מדגיש: I do like broccoli! איזה אוכל אתם באמת אוהבים, גם אם זה מפתיע?",
        a: [],
        o: "Ha! You do like it, and that is what matters. Everyone has a surprising favourite.",
        t: ["I do like broccoli. It's really tasty.", "I do love spicy food, even very hot peppers."],
        x: [["i do like olives", -1], ["i like eggplant very much", -1]]
      },
      {
        c: "To finish, a tag question, and tell me your favourite topping too. You like pizza, don't you?",
        he: "ענו לשאלת הזנב: Yes, I do! או No, I don't. וספרו על התוספת האהובה.",
        a: [
          { k: ['not no hate'], n: 'i_do_not_know not_sure but', r: "You don't! That is a surprise, but more pizza for me, then." },
          { k: ['yes do love like cheese olive olives mushroom mushrooms corn pepperoni onion tomato'], n: 'i_do_not_know not_sure but', r: "I knew it! Pizza is one of the best things in the world." }
        ],
        o: "Thank you for being honest! Food is such a fun topic.",
        t: ["Yes, I do! I love extra cheese.", "No, I don't, actually. I prefer pasta."],
        x: [["yes i do with olives", 1], ["no i don't", 0], ["i am not like pizza", 0], ["mushrooms", 1], ["sometimes", -1], ["i like it but not with olives", -1], ["i don't know", -1]]
      }
    ],
    end: "Small words, big jobs, and you did them all! See you soon."
  },
  {
    id: 'tbpv01', title: "Coco's wild weather report",
    he: 'קוקו מגישה תחזית של מזג אוויר קיצוני, ואתם עוזרים לה עם המילים החדשות',
    turns: [
      {
        c: "Welcome to the Feather Forecast! First, a question for my viewers. Which is worse for a farmer, a drought or a flood, and why?",
        he: "מה גרוע יותר לחקלאי: drought (בצורת) או flood (שיטפון)? למשל: A drought, because plants need water.",
        a: [
          { k: ['both'], r: "Both, you are right. Farmers need just the right amount of rain." },
          { k: ['drought draught dry no_water no_rain'], r: "A drought, yes. Without rain, nothing can grow. Farmers need water more than anything." },
          { k: ['flood floods flooding too_much'], r: "A flood! Too much water can wash a whole field away. Good point." }
        ],
        o: "Both are terrible for farmers. They need just the right amount of rain.",
        t: ["A drought, because the plants need water.", "A flood, because it destroys everything.", "Both are bad for farmers, I think."],
        x: [["drought because no rain", 1], ["the flood", 2], ["flood because the water", 2], ["the dry one", 1], ["both", 0], ["the farmer", -1], ["i think a flood is worse", 2], ["when there is no water", 1], ["both a drought and a flood", 0], ["i don't know", -1]]
      },
      {
        c: "Now imagine a heatwave hits your city, and it's forty-five degrees outside. How would you stay cool, and what would you wear?",
        he: "גל חום, 45 מעלות! איך תתקררו ומה תלבשו? למשל: I would wear shorts and drink a lot of water.",
        a: [],
        o: "Smart thinking! Light clothes, lots of water and some shade. I would hide in the freezer.",
        t: ["I would stay inside with the air conditioner on.", "I would wear shorts and drink a lot of water.", "I would go to the beach and swim all day."],
        x: [["stay home with the air condition", -1], ["i will wear a hat and shorts", -1]]
      },
      {
        c: "Scientists give every hurricane a name, like a person. If you could choose a name for the next big hurricane, what would it be, and why?",
        he: "תנו שם להוריקן הבא, והסבירו למה. למשל: Hurricane Coco, because it would be very loud!",
        a: [],
        o: "Ha! That is a name everyone would remember.",
        t: ["I would call it Hurricane Coco, because it's loud!", "Hurricane Max, because it sounds strong."],
        x: [["hurricane bob because it is funny", -1], ["i will call it lightning", -1]]
      },
      {
        c: "Which do you think is the hardest to predict: an earthquake, a wildfire or a hurricane? Why?",
        he: "מה הכי קשה לחזות מראש: earthquake, wildfire או hurricane? למשל: An earthquake, because it happens suddenly.",
        a: [
          { k: ['earthquake earthquakes quake earth'], r: "Earthquakes, yes! Scientists still can't say when one will happen. The ground gives no warning." },
          { k: ['wildfire wildfires fire fires'], r: "Wildfires! One spark and a strong wind can change everything very fast." },
          { k: ['hurricane hurricanes storm'], r: "Hurricanes are huge, and they can change direction. Satellites watch them for days." }
        ],
        o: "Interesting thinking! Nature is full of surprises.",
        t: ["An earthquake, because it happens suddenly.", "A wildfire, because the wind changes all the time.", "A hurricane, because it can change direction."],
        x: [["earthquake because you dont know when", 0], ["the fire", 1], ["hurricane", 2], ["i dont know", -1], ["wild fire", 1]]
      },
      {
        c: "Last question for the Feather Forecast. What is your favourite kind of weather, and what do you love doing when it comes?",
        he: "איזה מזג אוויר אתם הכי אוהבים, ומה אתם עושים אז? למשל: I love rainy days, because I can read in bed.",
        a: [],
        o: "Lovely! I will order that weather for you next week.",
        t: ["I love rainy days, because I can read in bed.", "Sunny weather, because I can go to the beach."],
        x: [["when it snow i make snowman", -1], ["sunny i go to the pool", -1]]
      }
    ],
    end: "That's all from the Feather Forecast! Thanks for helping me, and stay dry out there."
  },
  {
    id: 'tbpv02', title: "Nurse Coco's busy day",
    he: 'קוקו משחקת אחות ומטפלת בחברים שלה, החיות, ואתם עוזרים לה להבין מה כואב ומה לעשות',
    turns: [
      {
        c: "Ooh, I'm playing nurse today! My friend the giraffe can't eat or sing, because her long neck hurts inside. What do you think she has?",
        he: "מה יש לג'ירפה? כאב גרון באנגלית: a sore throat. למשל: She has a sore throat.",
        a: [
          { k: ['sore', 'throat'], r: "A sore throat! Poor giraffe, that is a very long throat to be sore." },
          { k: ['throat neck'], r: "Her throat, yes! We call it a sore throat. A very long one!" },
          { k: ['fever cold flu sick ill'], r: "Maybe a cold! I think it's a sore throat, so warm tea will help." }
        ],
        o: "Hmm, I think it's a sore throat. Warm tea for the giraffe!",
        t: ["She has a sore throat.", "Maybe she has a cold.", "I think her throat hurts."],
        x: [["she have a sore throat", 0], ["her throat hurts", 1], ["she has a fever", 2], ["she is tired", -1], ["throat", 1]]
      },
      {
        c: "Next patient: a little monkey fell from a tree. His arm is fine, but there is a big blue mark on it. What is that called?",
        he: "סימן כחול על העור אחרי מכה הוא a bruise. למשל: It's a bruise.",
        a: [
          { k: ['bruise bruises brews bruce bruised'], r: "A bruise, exactly! Blue today, yellow next week. He'll be fine." },
          { k: ['cast stitches broken break'], r: "Luckily he doesn't need that. It's only a bruise, and it will go away soon." }
        ],
        o: "It's a bruise! Blue today, green next week, and gone soon.",
        t: ["It's a bruise.", "He has a bruise on his arm.", "Maybe he needs a cast."],
        x: [["a bruise", 0], ["he have a bruise", 0], ["he needs stitches", 1], ["blue mark", -1], ["his arm is broken", 1]]
      },
      {
        c: "My friend the owl spun around too fast at a party, and now she feels dizzy. What should she do to feel better?",
        he: "dizzy = סחרחורת. מה הינשופה צריכה לעשות? למשל: She should sit down and close her eyes for a minute.",
        a: [],
        o: "Good idea! I'll tell the owl to sit down and drink some water.",
        t: ["She should sit down and close her eyes for a minute.", "She should drink some water and wait until it stops."],
        x: [["sit and drink water", -1], ["she should lie down on the floor", -1]]
      },
      {
        c: "The zebra hurt her ankle playing football, but nothing is broken. Did she sprain it or break it? And what should she do now?",
        he: "sprain = נקע. למשל: She sprained it. She should rest and put ice on it.",
        a: [
          { k: ['sprain sprained spray strain strained twist twisted'], r: "A sprain, yes! Ice, rest and no football for a week or two." },
          { k: ['break broke broken cast'], r: "Nothing is broken, so it's a sprain. But rest is great advice!" },
          { k: ['rest ice doctor stop sit'], r: "Great advice! It's a sprain, so rest and ice will help her a lot." }
        ],
        o: "I think it's a sprain. Rest and ice will help her a lot.",
        t: ["She sprained it. She should rest and use ice.", "She should go to the doctor and rest.", "I think she broke it."],
        x: [["she sprained it", 0], ["she broke it", 1], ["she should rest", 2], ["put ice on it", 2], ["football", -1]]
      },
      {
        c: "Last question, nurse! If you could design a fun animal hospital for my friends, what would you put in the waiting room?",
        he: "מה הייתם שמים בחדר ההמתנה של בית חולים לחיות? למשל: I would put a big game corner there.",
        a: [],
        o: "What a fun idea! My animal friends would love to wait there.",
        t: ["I would put a big game corner there.", "Comfy cushions and lots of crackers!", "A giant fish tank to watch."],
        x: [["video games and toys", -1], ["a tv with funny cartoons", -1]]
      }
    ],
    end: "Thank you, nurse! All my animal friends feel much better now. See you soon!"
  },
  {
    id: 'tbpl01', title: 'Catching the Uncatchable',
    he: 'מדברים עם קוקו על הגנב Leo Marchand: מה אתם חושבים על מה שעשה ואיך נתפס',
    turns: [
      {
        c: "What a story! Leo Marchand used disguises, like a plumber or a window cleaner. If you needed a disguise, what would you dress up as, and why?",
        he: "disguise = תחפושת. במה הייתם מתחפשים? למשל: A pizza delivery person, because everyone opens the door!",
        a: [],
        o: "Ooh, nobody would recognise you! Fashion is a great disguise.",
        t: ["A pizza delivery person, because everyone opens the door!", "A police officer, because nobody would suspect me."],
        x: [["i will be a old man with a beard", -1], ["a doctor because people trust them", -1]]
      },
      {
        c: "The newspapers called him The Uncatchable, and some people even admired him. Why do you think people love stories about clever thieves?",
        he: "למה אנשים אוהבים סיפורים על גנבים מתוחכמים? למשל: Because they are exciting, like a film.",
        a: [],
        o: "Interesting! Clever thieves make exciting films, but in real life the police still have to catch them.",
        t: ["Because they are exciting, like a film.", "People like clever plans and surprises.", "Because nobody gets hurt in the story."],
        x: [["because it is like a movie", -1], ["they are smart", -1], ["i don't know", -1]]
      },
      {
        c: "He was caught because he loved cats and always fed them. What is your weakness, the thing you can never say no to?",
        he: "weakness = נקודת חולשה. למה אתם אף פעם לא אומרים לא? למשל: Chocolate! I can never say no to it.",
        a: [],
        o: "Ha! Good thing you're not a famous thief, then.",
        t: ["Chocolate! I can never say no to it.", "I can never say no to a new game."],
        x: [["ice cream i always say yes", -1], ["pizza i can't say no", -1]]
      },
      {
        c: "The police waited at a shop that sold expensive cat food. If you had been the detective, how would you have caught him?",
        he: "איך אתם הייתם תופסים אותו? למשל: I would have put a camera on the front door.",
        a: [],
        o: "Brilliant plan! You would make a great detective.",
        t: ["I would have put a camera on the front door.", "I would have hidden in the kitchen and waited.", "I would have followed every plumber in Paris!"],
        x: [["i will put cameras in all the houses", -1], ["i would have used a cat", -1]]
      },
      {
        c: "And to finish: would you rather be a famous detective or a famous inventor? Why?",
        he: "בלש מפורסם או ממציא מפורסם? למשל: A detective, because I love solving mysteries.",
        a: [
          { k: ['detective detectives police'], r: "A detective! You'd solve every mystery, and you'd wear a fabulous coat." },
          { k: ['inventor invent inventing invention scientist'], r: "An inventor! Maybe one day you'll invent something that changes the world." }
        ],
        o: "Both sound exciting! The world needs clever people of every kind.",
        t: ["A detective, because I love solving mysteries.", "An inventor, because I want to create new things."],
        x: [["detective because it is exciting", 0], ["i want to invent things", 1], ["inventor", 1], ["i don't know", -1], ["the police one", 0]]
      }
    ],
    end: "Mystery solved, detective! Thanks for chatting, and see you next time!"
  },
  {
    id: 'tbpl02', title: 'Coco joins the debate',
    he: 'מתווכחים עם קוקו על טכנולוגיה בתוך הגוף, כמו Jess ו-Omar',
    turns: [
      {
        c: "Jess thinks humans becoming supermachines is a good thing. Omar is more careful. Whose side are you on, and why?",
        he: "בצד של מי אתם? למשל: I agree with Jess, because technology helps people. או I'm with Omar. It can be dangerous.",
        a: [
          { k: ['both middle'], r: "A bit of both! That is very wise. Jess and Omar ended up quite close too." },
          { k: ['jess exciting good great'], n: 'omar careful not i_do_not_know not_sure', r: "Team Jess! Technology can do amazing things, like robot suits that help people walk." },
          { k: ['omar careful dangerous scary rules worried danger'], r: "Team Omar! Being careful is smart, and strong rules can keep us safe." }
        ],
        o: "Interesting! Both of them had good arguments.",
        t: ["I'm with Jess, because technology helps people.", "I agree with Omar. It can be dangerous.", "A bit of both, really."],
        x: [["both of them", 0], ["i am with jess", 1], ["technology is good", 1], ["i agree with omar", 2], ["it is dangerous", 2], ["robots", -1]]
      },
      {
        c: "Would you put a tiny chip in your hand to open doors and pay in shops? Why, or why not?",
        he: "implant = שתל. הייתם שמים שבב ביד? למשל: No way. Someone could hack it. או Yes, because I always lose my keys.",
        a: [
          { k: ['why_not'], r: "Yes to the chip! No more lost keys. That does sound easy." },
          { k: ['not no never scary weird hurt hack hacked'], n: 'i_do_not_know not_sure', r: "No chip for you! Lots of people feel the same. Good old keys are fine." },
          { k: ['maybe if depends depend safe'], r: "Only if it's really safe! That is a smart way to think about it." },
          { k: ['yes sure cool easy'], n: 'i_do_not_know not_sure', r: "Yes to the chip! No more lost keys. That does sound easy." }
        ],
        o: "That's a fair point! It's a big decision.",
        t: ["No way. Someone could hack it.", "Yes, because I always lose my keys.", "Maybe, if it's really safe."],
        x: [["yes why not", 0], ["no i would not", 1], ["it is scary", 1], ["yes it is cool", 3], ["i like keys", -1], ["no way", 1], ["maybe", 2], ["yes if it is safe", 2], ["no it is not safe", 1], ["i don't know", -1]]
      },
      {
        c: "Omar is scared that someone could hack a chip in your brain. What other technology could be dangerous if a hacker got into it?",
        he: "hack = לפרוץ למחשב. מה עוד מסוכן אם פורצים אליו? למשל: Self-driving cars, because a hacker could control them.",
        a: [],
        o: "A fair point! That's why we need strong passwords and strong rules.",
        t: ["Self-driving cars could be dangerous if someone hacked them.", "Smart homes, because a hacker could open the doors."],
        x: [["the phone because they see everything", -1], ["cars that drive alone", -1]]
      },
      {
        c: "Jess says a phone is almost part of your body. How many hours a day do you think teenagers use their phones? Is that too much?",
        he: "כמה שעות ביום בני נוער בטלפון, וזה יותר מדי? למשל: I think about five hours, and that's too much.",
        a: [],
        o: "Interesting! Even parrots spend too long looking at screens sometimes.",
        t: ["I think about five hours, and that's too much.", "Maybe three hours. I think it's okay."],
        x: [["like 6 hours it is too much", -1], ["all day", -1]]
      },
      {
        c: "One more! If you could have one superpower from technology, like robot legs or super eyes, what would you choose, and why?",
        he: "איזה כוח-על טכנולוגי הייתם בוחרים, ולמה? למשל: Super eyes, so I could see very far away.",
        a: [],
        o: "Fabulous choice! Just promise me you'll use it for good.",
        t: ["Super eyes, so I could see very far away.", "Robot legs, because I'd run faster than anyone."],
        x: [["i will choose to fly", -1], ["super brain to know everything", -1]]
      }
    ],
    end: "What a great debate! You'd win any argument. See you next time!"
  },
  {
    id: 'tbpl03', title: 'Small regrets with Coco',
    he: 'מדברים עם קוקו על Ella ו-Josh ועל דברים שהיה כדאי לעשות אחרת, עם should have',
    turns: [
      {
        c: "Poor Ella cut her own hair after watching one video! What do you think she should have done instead?",
        he: "מה Ella הייתה צריכה לעשות? should have ואחריו V3: She should have gone to a hairdresser.",
        a: [
          { k: ['hairdresser hairdressers salon barber hair_cutter'], r: "Yes, she should have gone to a hairdresser! Or at least watched more videos." },
          { k: ['video videos watch watched'], r: "She should have watched more than one video. That was her lesson too!" },
          { k: ['friend friends help ask asked'], r: "Good idea! A friend with steady hands would have helped a lot." }
        ],
        o: "Ha! Poor Ella. I hope her hair grew back quickly.",
        t: ["She should have gone to a hairdresser.", "She should have watched more videos.", "She should have asked a friend for help."],
        x: [["she should go to a hairdresser", 0], ["she should have watched more videos", 1], ["ask her friend", 2], ["nothing", -1], ["go to the barber", 0], ["she should have wait", -1]]
      },
      {
        c: "I once cut my own feathers before a party, and I looked like a broom! What's a funny little mistake that you or a friend once made?",
        he: "ספרו על טעות מצחיקה. למשל: I once put salt in my tea instead of sugar.",
        a: [],
        o: "Ha! Funny mistakes make the best stories later.",
        t: ["I once put salt in my tea instead of sugar.", "My friend wore two different shoes to school."],
        x: [["i went to school on saturday", -1], ["i called my teacher mom", -1]]
      },
      {
        c: "Josh's regret was more serious. He didn't say sorry to his best friend. Why do you think saying sorry is so hard for some people?",
        he: "למה קשה לפעמים להתנצל? למשל: Because they feel embarrassed. או Because they think they are right.",
        a: [],
        o: "That makes sense. Saying sorry takes a bit of courage.",
        t: ["Because they don't want to look weak.", "I think they feel embarrassed.", "Because they think they are right."],
        x: [["because they are shy", -1], ["they think they are right", -1]]
      },
      {
        c: "Josh said: if you are wrong, say sorry quickly, because it's easier than you think. Do you agree with him? Why?",
        he: "מסכימים עם Josh? למשל: Yes, I agree. Waiting makes it worse. או Not always. Sometimes you need time first.",
        a: [
          { k: ['not no disagree'], n: 'i_do_not_know not_sure', r: "Not always easy, that is true. But it usually feels better afterwards." },
          { k: ['yes agree true right'], n: 'i_do_not_know not_sure', r: "I agree too. A quick sorry can save a friendship." }
        ],
        o: "Thank you for sharing your opinion. It's a wise way to think.",
        t: ["Yes, I agree. Waiting makes it worse.", "Not always. Sometimes you need time first."],
        x: [["yes i agree with him", 1], ["i am agree", 1], ["no its hard", 0], ["i don't agree", 0], ["maybe", -1]]
      },
      {
        c: "Last one, like on the radio show! What is something small you should have done this week, but didn't?",
        he: "מה הייתם צריכים לעשות השבוע ולא עשיתם? למשל: I should have gone to bed earlier.",
        a: [],
        o: "There's always next week! Small regrets are how we learn.",
        t: ["I should have gone to bed earlier.", "I should have finished my homework on time.", "I should have tidied my room."],
        x: [["i should have study for the test", -1], ["clean my room", -1]]
      }
    ],
    end: "No regrets about this talk! You did brilliantly. See you soon!"
  },
  {
    id: 'tbpr01', title: "Coco can't sleep",
    he: 'קוקו לא מצליחה להירדם, ואתם נותנים לה עצות מהכתבה על שינה',
    turns: [
      {
        c: "Yawn! I watched videos on my phone until midnight, and now I can't sleep. According to the article, what should I do tonight?",
        he: "תנו לקוקו עצה מהכתבה. למשל: You should put your phone away an hour before bed.",
        a: [
          { k: ['phone phones screen screens video videos'], r: "Phone away an hour before bed. My phone will miss me, but my brain will thank me." },
          { k: ['dark cool cold light lights'], r: "A dark, cool room! I'll hang thick curtains in my tree tonight." },
          { k: ['same wake routine'], r: "Wake up at the same time every day, even at weekends. Tough, but I'll try." },
          { k: ['early earlier'], r: "Go to bed earlier! Simple, but it really works. I'll try it tonight." }
        ],
        o: "Thank you, that is very good advice. I'll try it tonight.",
        t: ["You should put your phone away an hour before bed.", "Keep your room dark and cool.", "Try to wake up at the same time every day."],
        x: [["dont use the phone", 0], ["turn off the light", 1], ["go to sleep early", 3], ["drink milk", -1], ["no screens before bed", 0], ["wake up at the same time", 2], ["i don't know", -1]]
      },
      {
        c: "The article says teenagers' body clocks move later, so they feel wide awake at ten o'clock. Should school start later for teenagers? Why?",
        he: "בית הספר צריך להתחיל מאוחר יותר? למשל: Yes, because we're always tired in the morning.",
        a: [
          { k: ['not no'], n: 'i_do_not_know not_sure', r: "Not later! Fair enough. Then the school day would finish later too." },
          { k: ['yes later agree should good'], n: 'i_do_not_know not_sure', r: "Many scientists agree with you! Some schools in the world already start later." }
        ],
        o: "That is an interesting opinion. People still argue about it.",
        t: ["Yes, because we're always tired in the morning.", "No, because then we'd finish too late."],
        x: [["yes of course", 1], ["it should start at ten", 1], ["no it is fine", 0], ["i don't think so", 0], ["eight o'clock", -1]]
      },
      {
        c: "Your brain sorts what you learned while you sleep. The night before a big test, would you choose studying late, or a good night's sleep?",
        he: "לילה לפני מבחן: ללמוד עד מאוחר או לישון טוב? למשל: A good night's sleep, because my brain needs rest.",
        a: [
          { k: ['sleep sleeping slept rest bed'], r: "Sleep! Smart choice. Your brain does the filing while you dream." },
          { k: ['study studying studied learn learning late'], r: "Studying late is tempting, but the article says sleep often works better." }
        ],
        o: "Good thinking! Rest and practice both matter.",
        t: ["A good night's sleep, because my brain needs rest.", "Studying late, because I always leave it to the end."],
        x: [["sleep is better", 0], ["i will go to bed", 0], ["study all night", 1], ["i learn late", 1], ["both", -1]]
      },
      {
        c: "What helps you relax and fall asleep at night? Music, a book, or something else?",
        he: "מה עוזר לכם להירדם? למשל: I listen to calm music in bed.",
        a: [],
        o: "Ooh, that sounds relaxing. I might try it myself.",
        t: ["I listen to calm music in bed.", "I read a book for twenty minutes."],
        x: [["i read a book", -1], ["i watch tiktok", -1]]
      },
      {
        c: "Last question! Dolphins sleep with only half of their brain at a time. If you could sleep like a dolphin, what would you do with the awake half?",
        he: "דולפינים ישנים עם חצי מוח. מה הייתם עושים עם החצי הער? למשל: I would do my homework while I sleep!",
        a: [],
        o: "Ha! That's a brilliant use of half a brain.",
        t: ["I would do my homework while I sleep!", "I'd watch films and sleep at the same time."],
        x: [["play games all night", -1], ["i will read books", -1]]
      }
    ],
    end: "Now I know how to sleep like a champion. Sweet dreams later, and see you soon!"
  },
  {
    id: 'tbpu02', title: 'Lost and found with Coco',
    he: 'מדברים עם קוקו על הארנק שחזר אחרי עשרים שנה, ועל מה אתם הייתם עושים',
    turns: [
      {
        c: "Daniel's wallet came back after twenty years! How do you think he felt when he opened that parcel?",
        he: "איך Daniel הרגיש כשפתח את החבילה? למשל: He felt shocked, but very happy.",
        a: [],
        o: "What a moment! Twenty years is a very long time.",
        t: ["He felt shocked, but very happy.", "I think he couldn't believe it."],
        x: [["he was very surprised", -1], ["happy and shock", -1]]
      },
      {
        c: "Lisa spent two weeks searching for Daniel online, and she refused any reward. Why do you think she worked so hard for a stranger?",
        he: "למה Lisa התאמצה כל כך? למשל: Because she imagined how she would feel.",
        a: [],
        o: "Lisa sounds like a really kind person. The world needs more people like her.",
        t: ["Because she imagined how she would feel.", "I think she's just a very kind person."],
        x: [["because she is nice", -1], ["she want to help him", -1]]
      },
      {
        c: "Imagine you found a wallet on the pavement. What is the first thing you would do?",
        he: "מצאתם ארנק ברחוב. מה תעשו קודם? למשל: I would take it to the police. או I'd look for the owner's name inside.",
        a: [
          { k: ['police station'], r: "You'd take it to the police. That's exactly what they're there for." },
          { k: ['look search find owner card id name call'], r: "You'd look for the owner yourself, like Lisa! That's really kind." },
          { k: ['parent parents mom mum dad adult teacher'], r: "Asking an adult for help is a smart first step." }
        ],
        o: "Interesting choice! Lisa would say: think about how the owner feels.",
        t: ["I would take it to the police.", "I'd look for the owner's name inside.", "I would give it to an adult I trust."],
        x: [["i will take it to the police", 0], ["look for his id", 1], ["i will tell my mom", 2], ["keep it", -1], ["find the owner", 1]]
      },
      {
        c: "In the real experiment, wallets with more money came back more often. Why do you think people return a wallet with more money in it?",
        he: "למה מחזירים יותר ארנקים עם הרבה כסף? למשל: Because they feel more guilty keeping it.",
        a: [],
        o: "Interesting idea! Scientists were surprised by it too.",
        t: ["Because they feel more guilty keeping it.", "I think they imagine how sad the owner is."],
        x: [["because they feel bad", -1], ["the owner needs it more", -1]]
      },
      {
        c: "Before you go! Lisa took good care of a stranger's wallet. What is one thing you always take with you when you go out, and why?",
        he: "מה אתם תמיד לוקחים איתכם כשאתם יוצאים, ולמה? למשל: My water bottle, because it gets so hot.",
        a: [],
        o: "Very sensible! I always take my favourite hat, just in case.",
        t: ["My phone, because I need it for everything.", "My water bottle, because it gets so hot.", "My keys, so I can get back in."],
        x: [["my phone of course", -1], ["headphones for music", -1]]
      }
    ],
    end: "Kindness still exists, just like Lisa said. Thanks for a lovely talk. Bye for now!"
  },
  {
    id: 'tbpg04', title: 'The more, the merrier',
    he: 'משחקים עם קוקו ב-The more..., the better...: ככל ש..., כך...',
    turns: [
      {
        c: "I've noticed something: the more crackers I eat, the happier I get! What makes you happier, the more you do it?",
        he: "ככל שעושים יותר, כך שמחים יותר. למשל: The more I dance, the happier I feel.",
        a: [
          { k: ['more_better more_good more_happy more_happier more_fun'], r: "The more you do it, the better you feel! Lovely answer." },
          { k: ['happier happy fun funnier'], r: "That's wonderful. I can hear the smile in your voice." },
          { k: ['better faster stronger more'], r: "Yes! The more you practise, the better it gets." }
        ],
        o: "That sounds wonderful. The more you do it, the happier you feel!",
        t: ["The more I dance, the happier I feel.", "The more I play football, the better I get."],
        x: [["the more i play the more better i feel", 0], ["the more i read the happier i am", 1], ["playing football", -1], ["the more i train the stronger i get", 2], ["more i sleep more happy i am", 0], ["music", -1]]
      },
      {
        c: "Here's my fashion rule: the bigger the hat, the better the outfit. Do you agree with me, or is a smaller hat better?",
        he: "מסכימים? למשל: Yes! The bigger, the better. או No, the smaller, the better.",
        a: [
          { k: ['small smaller little not no disagree'], n: 'i_do_not_know not_sure', r: "A small hat! Fair enough. Sometimes the simpler, the better." },
          { k: ['yes agree big bigger'], n: 'i_do_not_know not_sure', r: "Yes! The bigger, the better. I'll make you a giant hat." }
        ],
        o: "Hats are a very personal thing! I respect your style.",
        t: ["No, the smaller, the better.", "Yes! The bigger, the better."],
        x: [["no i like small hats", 0], ["i am not agree", 0], ["yes bigger is better", 1], ["i agree with you", 1], ["i like caps", -1]]
      },
      {
        c: "The more you practise, the better you get. What is something you have practised a lot, and how much better did you get?",
        he: "במה התאמנתם הרבה, וכמה השתפרתם? למשל: The more I trained, the faster I ran.",
        a: [],
        o: "That's fantastic. All that practice really paid off.",
        t: ["I practised piano every day, and now I can play songs.", "The more I trained, the faster I ran."],
        x: [["basketball now i score more", -1], ["i draw every day and now i am better", -1]]
      },
      {
        c: "Let's finish my sentence together, your way. The more time we spend on our phones, the... what?",
        he: "השלימו את המשפט ב-the ומילת השוואה. למשל: The less we talk to each other. או The worse we sleep.",
        a: [],
        o: "Ooh, very true! I should put my phone down more often.",
        t: ["The less we talk to each other.", "The worse we sleep at night.", "The more tired our eyes get."],
        x: [["the more we are tired", -1], ["the less we go outside", -1]]
      },
      {
        c: "Final question! The sooner, the better: what is something you'd love to happen very soon, and why?",
        he: "מה אתם רוצים שיקרה כמה שיותר מהר? למשל: The summer holidays! The sooner, the better.",
        a: [],
        o: "The sooner, the better! I hope it happens very soon for you.",
        t: ["The summer holidays! The sooner, the better.", "My birthday party, because it's going to be amazing."],
        x: [["the weekend because i am tired", -1], ["the trip to eilat", -1]]
      }
    ],
    end: "The more we talk, the better your English gets! See you soon."
  },
  {
    id: 'tbpg05', title: 'What have you been doing?',
    he: 'מספרים לקוקו מה עשיתם לאחרונה, עם have done ו-have been doing',
    turns: [
      {
        c: "Look at my feathers! I've been designing hats all morning, and I've finished three. What have you done today that you're proud of?",
        he: "תוצאה, מה גמרתם: I've finished all my homework. או I've cleaned my whole room!",
        a: [],
        o: "Fabulous! You should be proud of that.",
        t: ["I've finished all my homework.", "I've cleaned my whole room!", "I've helped my friend with maths."],
        x: [["i have finished my project", -1], ["i did my homework", -1]]
      },
      {
        c: "Here's a little mystery. My cousin is out of breath and red in the face. What do you think she has been doing?",
        he: "פעולה שנמשכה עד עכשיו: She has been running. או I think she has been dancing.",
        a: [
          { k: ['been'], r: "Good guess! She has been very busy, that is for sure." },
          { k: ['run running ran exercise sport sports jump jumping dance dancing training climb climbing fly flying football'], r: "Good guess! She has been running, I think, or maybe dancing." }
        ],
        o: "Interesting idea! She has definitely been doing something busy.",
        t: ["She has been running.", "I think she has been dancing.", "Maybe she ran up the stairs."],
        x: [["she has been running", 0], ["she run", 1], ["she is running", 1], ["she has been dancing all night", 0], ["she is angry", -1]]
      },
      {
        c: "How long have you been learning English? And what has helped you the most?",
        he: "כמה זמן אתם לומדים אנגלית? I've been learning English for five years. או since first grade.",
        a: [],
        o: "That's great. All that time has really helped you.",
        t: ["I've been learning English for five years. Films helped me most.", "I've been learning since first grade."],
        x: [["for 6 years games helped me", -1], ["since i was small", -1]]
      },
      {
        c: "Now a number! How many times have you watched your favourite film or series? Which one is it?",
        he: "כמה פעמים? כאן בא have done, בלי been: I've watched Harry Potter about ten times.",
        a: [],
        o: "Wow! It must be really good if you've seen it that often.",
        t: ["I've watched Harry Potter about ten times.", "I've seen my favourite series three times."],
        x: [["i have been watching frozen 5 times", -1], ["maybe 3 times stranger things", -1]]
      },
      {
        c: "Last question! What have you been doing a lot lately? Something new, fun or exciting?",
        he: "מה אתם עושים הרבה בזמן האחרון? למשל: I've been drawing a lot lately.",
        a: [],
        o: "Ooh, that sounds exciting. Keep going!",
        t: ["I've been drawing a lot lately.", "I've been playing a new game with my friends."],
        x: [["i have been playing basketball", -1], ["reading books a lot", -1]]
      }
    ],
    end: "I've been having so much fun talking to you! See you next time."
  },
  {
    id: 'tbpg06', title: 'Coco helps the town',
    he: 'מדברים עם קוקו איך לעזור לקבוצות בעיר: the young, the old, the homeless',
    turns: [
      {
        c: "I want to build a new park for the young and the old together. What should it have, so both groups enjoy it?",
        he: "the young = צעירים, the old = מבוגרים. מה יהיה בפארק? למשל: Benches for the old and swings for the young.",
        a: [],
        o: "Lovely idea! Everyone would want to come to that park.",
        t: ["Benches for the old and swings for the young.", "A garden where everyone can plant flowers."],
        x: [["a place for chess and a playground", -1], ["trees and a cafe", -1]]
      },
      {
        c: "What could our town do to help the elderly, and why would it help them?",
        he: "the elderly = הקשישים. איך העיר יכולה לעזור להם? למשל: Teenagers could teach them how to use phones.",
        a: [],
        o: "That's thoughtful. The elderly would really appreciate that.",
        t: ["Teenagers could teach them how to use phones.", "The town could have free buses for the old."],
        x: [["visit them so they are not alone", -1], ["help them with shopping", -1]]
      },
      {
        c: "Some apps help the blind read signs. What other invention could help the blind or the deaf, do you think?",
        he: "the blind = העיוורים, בלי s בסוף. למשל: Glasses that read signs aloud for the blind.",
        a: [
          { k: ['blinds deafs'], r: "We just say the blind or the deaf, like the young. What a smart invention idea!" },
          { k: ['blind'], r: "What a smart invention! The blind would love it." },
          { k: ['deaf'], r: "What a clever idea! It would really help the deaf." }
        ],
        o: "What a smart invention! Somebody should build it right away.",
        t: ["Glasses that read signs aloud for the blind.", "Phones that turn speech into text for the deaf."],
        x: [["glasses that talk for the blinds", 0], ["an app for the deaf people", 2], ["robots", -1], ["a robot dog for the blind", 1]]
      },
      {
        c: "The Dutch ride bikes everywhere, and the Swiss make amazing chocolate. What are the Italians or the Japanese famous for, in your opinion?",
        he: "the + לאום = כל העם. למשל: The Italians are famous for pizza. או The Japanese are famous for sushi.",
        a: [
          { k: ['pizza pasta gelato coffee spaghetti'], r: "The Italians and their pizza and pasta! Mmm, and fabulous fashion too." },
          { k: ['sushi anime manga technology robot robots ramen'], r: "The Japanese! Sushi, anime and clever technology. Very impressive." }
        ],
        o: "Interesting! Every country has something special.",
        t: ["The Italians are famous for pizza and pasta.", "The Japanese are famous for sushi and anime."],
        x: [["italians make pizza", 0], ["the japanese make good technology", 1], ["sushi", 1], ["cars", -1], ["italy is famous for pasta", 0]]
      },
      {
        c: "My last question! If you could help one group in your town, like the young, the elderly or the homeless, who would you help, and how?",
        he: "the elderly, the homeless, בלי s. למשל: I would build houses for the homeless.",
        a: [
          { k: ['homelesses poors olds elderlies youngs'], r: "We just say the homeless, the elderly or the young. What a generous plan!" },
          { k: ['poor homeless'], r: "That's a generous plan. You have a big heart." },
          { k: ['old elderly'], r: "The elderly would be so grateful. You have a big heart." }
        ],
        o: "That's a kind idea. Helping others makes the world better.",
        t: ["I would build houses for the homeless.", "I'd help the elderly with shopping and visits."],
        x: [["i will help the homelesses", 0], ["give food to the poor", 1], ["the elderly i will visit them", 2], ["animals", -1], ["give money to the poors", 0]]
      }
    ],
    end: "The young can change the world, and you just showed me how. Bye for now!"
  },
  {
    id: 'tbpg07', title: "Coco's fashion catalogue",
    he: 'מתארים לקוקו בגדים וחפצים עם כמה שמות תואר, בסדר הנכון',
    turns: [
      {
        c: "I'm writing my new shop catalogue! Can you describe something you're wearing today with two or three adjectives, like my comfy old green hoodie?",
        he: "קודם דעה, אחר כך גודל, גיל, צבע, חומר. למשל: My comfortable black running shoes.",
        a: [],
        o: "Fabulous! That goes straight into my catalogue.",
        t: ["My comfortable black running shoes.", "A soft grey cotton T-shirt.", "My lovely old denim jacket."],
        x: [["a black big hoodie", -1], ["my new white shoes", -1]]
      },
      {
        c: "Which sounds better to you: a red big hat, or a big red hat? And why do you think so?",
        he: "גודל לפני צבע. למשל: A big red hat sounds better. או The second one, because size comes first.",
        a: [
          { k: ['big_red'], r: "A big red hat, exactly! Size comes before colour. It just sounds right." },
          { k: ['red_big'], r: "In English we say a big red hat: first size, then colour. Easy to remember!" },
          { k: ['second last size'], r: "Yes, a big red hat! Size comes before colour." }
        ],
        o: "Most people say a big red hat: size first, then colour.",
        t: ["A big red hat sounds better.", "The second one, because it sounds more natural."],
        x: [["a big red hat", 0], ["red big hat", 1], ["the second one", 2], ["the first", -1], ["big red because size first", 0]]
      },
      {
        c: "Now describe your dream bedroom with a few adjectives. What would the bed, the walls or the lamp look like?",
        he: "תארו את חדר החלומות עם כמה תארים. למשל: A huge comfortable bed and light blue walls.",
        a: [],
        o: "Ooh, that sounds so cosy. I'd love a room like that.",
        t: ["A huge comfortable bed and light blue walls.", "A cute little round lamp next to my bed."],
        x: [["a big soft bed and purple walls", -1], ["a black gaming chair", -1]]
      },
      {
        c: "My grandpa has a beautiful old Swiss watch. What is something lovely from another country that you would love to own?",
        he: "למוצא משתמשים בתואר: Swiss, Italian, French. למשל: A lovely little Italian scooter.",
        a: [],
        o: "What a fabulous thing to own! It sounds very special.",
        t: ["A lovely little Italian scooter.", "A beautiful old French painting.", "Some cool Japanese trainers."],
        x: [["a italy car red", -1], ["american basketball shoes", -1]]
      },
      {
        c: "Here is my last one! Using three adjectives in the right order, what does your favourite animal look like?",
        he: "תארו חיה עם שלושה תארים: דעה, גודל, צבע. למשל: A cute little white puppy.",
        a: [],
        o: "Adorable! I can see it in my mind.",
        t: ["A cute little white puppy.", "A beautiful big orange tiger."],
        x: [["a big brown fluffy dog", -1], ["cute small black cat", -1]]
      }
    ],
    end: "You put every adjective in its perfect place today. Fabulous! See you soon."
  },
  {
    id: 'tbpg08', title: 'So much fun, such a day!',
    he: 'מספרים לקוקו על דברים מדהימים עם so, such, so much ו-so many',
    turns: [
      {
        c: "Koalas sleep about twenty hours a day. Such a relaxed life! Would you like to sleep so much, or would you get bored?",
        he: "הייתם רוצים לישון כל כך הרבה? למשל: No, I'd get so bored. או Yes! I'm always so tired.",
        a: [
          { k: ['bored boring not no'], n: 'i_do_not_know not_sure', r: "Same here! There is so much to do. Twenty hours would be such a waste." },
          { k: ['yes love sleep tired'], n: 'i_do_not_know not_sure', r: "Ha! You must be so tired. A koala life sounds lovely sometimes." }
        ],
        o: "Ha! Koalas really do have such an easy life.",
        t: ["No, I'd get so bored.", "Yes! I'm always so tired."],
        x: [["no i will be bored", 0], ["no way", 0], ["yes i love to sleep", 1], ["i am so tired", 1], ["koalas are cute", -1]]
      },
      {
        c: "Think about this week. What was one nice thing that happened, even a small one, and why was it so good?",
        he: "מה היה נחמד השבוע, אפילו משהו קטן? למשל: I got such a good grade! או We had so much fun at the beach.",
        a: [],
        o: "Thank you for sharing! I hope next week is so much fun too.",
        t: ["I got such a good grade in my test!", "We had so much fun at the beach."],
        x: [["my team won the game", -1], ["i saw my friends", -1]]
      },
      {
        c: "I once saw so many people at a concert that I couldn't see the stage. What's the most crowded place you've ever been to?",
        he: "so many + רבים, so... that = כל כך... ש. למשל: A football game. It was so loud that I couldn't hear.",
        a: [],
        o: "Wow, so many people! I'd fly above them all.",
        t: ["The beach in summer. There were so many people!", "A football game. It was so loud that I couldn't hear."],
        x: [["the mall on friday", -1], ["a concert of noa kirel", -1]]
      },
      {
        c: "Tell me about a film or series that you loved. Why was it so good?",
        he: "such a + תואר + שם עצם, so + תואר לבד. למשל: It was such a funny series! או It was so exciting.",
        a: [
          { k: ['so_a such'], r: "Such a good one! I'll watch it tonight with a bowl of crackers." },
          { k: ['so'], r: "It sounds so good! I'll add it to my list right now." }
        ],
        o: "It sounds great! I'll add it to my list.",
        t: ["It was such a funny series!", "The story was so exciting that I couldn't stop watching."],
        x: [["it was so a good film", 0], ["such a funny movie", 0], ["it was so exciting", 1], ["harry potter", -1], ["the characters are so funny", 1]]
      },
      {
        c: "One last thing! If you could have so much of one thing, like free time, or so many of something, like pets, what would you choose?",
        he: "so much לדברים שלא סופרים, so many לרבים. למשל: So much free time! או So many dogs!",
        a: [],
        o: "Ooh, good choice! I'd choose so many crackers.",
        t: ["So much free time, because I'm always busy.", "So many dogs! I love them."],
        x: [["so many cats", -1], ["so much chocolate", -1]]
      }
    ],
    end: "That was such a fun chat, and you used so many new words! See you soon."
  },
  {
    id: 'tbpg09', title: 'Tell Coco a story',
    he: 'בונים עם קוקו סיפור בעבר: was flying, saw, had eaten',
    turns: [
      {
        c: "Let's write a story together! It was raining, and I was flying home. Suddenly, I saw something strange. What did I see?",
        he: "מה קוקו ראתה? past simple: You saw a huge purple balloon.",
        a: [],
        o: "Ooh, how mysterious! I almost fell out of the sky.",
        t: ["You saw a huge purple balloon.", "You saw a cat sitting on a cloud!"],
        x: [["a flying car", -1], ["you see a big dragon", -1]]
      },
      {
        c: "Then I landed and opened my shop door. Someone had been inside while I was out! What had they done?",
        he: "מה קרה עוד קודם? had + V3: They had eaten all your crackers!",
        a: [
          { k: ['had'], r: "Oh no, they had done that before I got home! What a mess. My poor shop." },
          { k: ['have has'], r: "They had done that before I got home! What a mess. My poor shop." },
          { k: ['ate eaten eat took taken stole stolen steal broke broken left moved tried put wore made'], r: "What a mess! Somebody had been very busy in my shop." }
        ],
        o: "Oh no! What a surprise to find in my shop.",
        t: ["They had eaten all your crackers!", "Someone had tried on every hat.", "They took all your hats."],
        x: [["they had eaten the crackers", 0], ["they have stolen the hats", 1], ["someone took my clothes", 2], ["a cat", -1], ["they ate everything", 2]]
      },
      {
        c: "And who did it? Think of a funny character. What were they doing when I walked in?",
        he: "מה הם היו באמצע לעשות? was + ing: A monkey was trying on your hats.",
        a: [],
        o: "Ha! I caught them in the act. What a funny thief.",
        t: ["A monkey was trying on your hats.", "A penguin was dancing in front of the mirror."],
        x: [["a cat was sleep in the box", -1], ["a dog eating cake", -1]]
      },
      {
        c: "Now your own story. Tell me about a time when you realised you had forgotten something important. What happened?",
        he: "ספרו על פעם ששכחתם משהו. למשל: I got to school and realised I had forgotten my bag.",
        a: [],
        o: "Oh dear, that happens to everyone! I once forgot my favourite hat.",
        t: ["I got to school and realised I had forgotten my bag.", "When I got to the beach, I realised I'd forgotten my towel."],
        x: [["i forgot my phone at home", -1], ["one time i forget my homework", -1]]
      },
      {
        c: "Last one! Every good story needs an ending. How should our shop story end, happily or with a surprise?",
        he: "איך הסיפור נגמר? למשל: In the end, the monkey said sorry and helped you clean.",
        a: [],
        o: "What a perfect ending! We should publish it.",
        t: ["The monkey said sorry and helped you clean.", "In the end, the thief opened his own hat shop!"],
        x: [["they become friends", -1], ["the police caught the monkey", -1]]
      }
    ],
    end: "What a story! You're a natural storyteller. See you in the next chapter!"
  },
  {
    id: 'tbpu01', title: 'Never give up, Sparky!',
    he: 'מדברים עם קוקו על הצוות שתיקן את הרובוט בלילה, ועל לא לוותר',
    turns: [
      {
        c: "Sparky the robot could sort rubbish for recycling. What other job could a robot do to help the planet, do you think?",
        he: "איזו עבודה רובוט יכול לעשות כדי לעזור לכדור הארץ? למשל: A robot that cleans plastic from the sea.",
        a: [],
        o: "Interesting! The planet needs all the helpers it can get, robots too.",
        t: ["A robot that cleans plastic from the sea.", "It could plant trees in the desert.", "A robot that picks up rubbish in parks."],
        x: [["clean the beach", -1], ["it will save the animals", -1]]
      },
      {
        c: "Instead of giving up, the team worked until three in the morning. Would you have stayed to fix the robot, or gone home to sleep?",
        he: "הייתם נשארים לתקן או הולכים לישון? למשל: I would have stayed and helped them.",
        a: [
          { k: ['sleep home bed tired'], r: "Going home is fair! Sometimes a fresh brain the next morning works better." },
          { k: ['stay stayed fix fixed help helped work worked night'], r: "A real team player! Three in the morning is tough, but you'd do it." }
        ],
        o: "Both choices make sense. It depends on the team.",
        t: ["I would have stayed and helped them.", "I would have gone home to sleep."],
        x: [["i will stay with the team", 1], ["go home and sleep", 0], ["i would fix it", 1], ["i am tired", 0], ["maybe", -1]]
      },
      {
        c: "The judges were so impressed that they gave the team a special award. What do you think impressed them the most?",
        he: "מה הרשים את השופטים? למשל: They didn't give up, even at three in the morning.",
        a: [],
        o: "Good point! That's what makes a real team.",
        t: ["They didn't give up, even at three in the morning.", "They worked together and found the problem."],
        x: [["they work as a team", -1], ["they did not give up", -1]]
      },
      {
        c: "Tamar said they learned more from that night than from the whole year. When did you learn a lot from a problem or a mistake?",
        he: "מתי למדתם הרבה מבעיה או טעות? למשל: When I lost a match, I learned to practise more.",
        a: [],
        o: "That's a great lesson. Problems are sometimes the best teachers.",
        t: ["When I lost a match, I learned to practise more.", "When my bike broke, I learned to fix it myself."],
        x: [["when i forgot my homework i learned to check", -1], ["in a game i lost", -1]]
      },
      {
        c: "Last question! What would you say to a friend who wants to give up before a big game or test?",
        he: "מה תגידו לחבר שרוצה לוותר? למשל: Don't give up! You can do it.",
        a: [],
        o: "What great advice! Your friend is lucky to have you.",
        t: ["Don't give up! You can do it.", "Take a short break, and then try again."],
        x: [["you can do it i believe in you", -1], ["dont give up", -1]]
      }
    ],
    end: "Sparky would be proud of you! Thanks for a great talk. See you soon!"
  },
  {
    id: 'tbpu03', title: "Coco's cooking channel",
    he: 'מדברים עם קוקו על סבא משה וערוץ הבישול, ועל מה אתם הייתם מבשלים',
    turns: [
      {
        c: "Moshe had never used a smartphone, and now he has three hundred thousand followers! Why do you think people love his videos so much?",
        he: "למה אנשים אוהבים את הסרטונים של משה? למשל: Because he is funny and his food looks amazing.",
        a: [],
        o: "I think so too! He sounds like a wonderful cook and a lovely person.",
        t: ["Because he is funny and his food looks amazing.", "People love seeing a grandpa cooking with his grandson."],
        x: [["because he is cute", -1], ["the shakshuka look very good", -1]]
      },
      {
        c: "Which recipe would you film for the whole world, and why should people try it?",
        he: "איזה מתכון הייתם מצלמים לכל העולם? למשל: Chocolate pancakes, because everybody loves them.",
        a: [],
        o: "Mmm, my beak is watering! People would love it.",
        t: ["Shakshuka, because it's spicy and delicious.", "Chocolate pancakes, because everybody loves them."],
        x: [["pasta with tomato sauce", -1], ["my mom cookies they are the best", -1]]
      },
      {
        c: "At first Moshe wasn't keen on the idea. What is something you weren't keen on at first, but now you really like?",
        he: "keen on = מתלהב מ-. מה לא אהבתם בהתחלה ועכשיו כן? למשל: I wasn't keen on swimming, but now I love it.",
        a: [],
        o: "Funny how that happens! Sometimes we just need to try.",
        t: ["I wasn't keen on swimming, but now I love it.", "At first I wasn't keen on sushi, but now it's my favourite."],
        x: [["reading books now i love it", -1], ["i didn't like dogs", -1]]
      },
      {
        c: "Moshe says it's never too late to learn something new. What would you like to learn one day, even when you are old?",
        he: "מה הייתם רוצים ללמוד יום אחד? למשל: I'd like to learn to play the guitar.",
        a: [],
        o: "Fabulous! It's never too late to learn that.",
        t: ["I'd like to learn to play the guitar.", "I want to learn how to fly a plane."],
        x: [["to speak spanish", -1], ["i want to learn piano", -1]]
      },
      {
        c: "Last question! Amit helped his grandpa with technology. What could you teach an older person, and how would you explain it?",
        he: "מה הייתם מלמדים אדם מבוגר? למשל: I could teach them how to make video calls.",
        a: [],
        o: "What a patient teacher you'd be! They'd learn so much from you.",
        t: ["I could teach them how to send voice messages.", "I would show them how to make video calls, step by step."],
        x: [["how to use whatsapp", -1], ["i teach them to take photos", -1]]
      }
    ],
    end: "Thanks for cooking up such a great talk with me! See you soon."
  },
  {
    id: 'tbpu04', title: "Coco's beach treasure",
    he: 'מדברים עם קוקו על המאובן שעידו מצא בחוף, ועל מה אתם הייתם עושים',
    turns: [
      {
        c: "Ido found an eighty-million-year-old fossil on the beach! If you found something very old, would you keep it or give it to a museum? Why?",
        he: "הייתם שומרים או נותנים למוזיאון? למשל: I'd give it to a museum, so everyone could see it.",
        a: [
          { k: ['museum give gave'], n: 'not_give never', r: "To the museum, like Ido! Then thousands of people can see it." },
          { k: ['keep kept mine'], r: "Keep it! It would be the coolest thing in your room. Very tempting." }
        ],
        o: "A tricky choice! There is no easy answer.",
        t: ["I'd give it to a museum, so everyone could see it.", "I'd keep it, because I found it!"],
        x: [["i will give it to the museum", 0], ["keep it of course", 1], ["it is mine", 1], ["sell it", -1], ["the museum", 0], ["i wouldn't give it to a museum", -1], ["i don't know", -1]]
      },
      {
        c: "Ido said: if I hadn't picked up that stone, none of this would have happened. What do you think would have happened if he had just walked past?",
        he: "מה היה קורה אילו עבר ליד האבן? would have + V3: Someone else would have found it.",
        a: [],
        o: "Interesting! One small moment can change everything.",
        t: ["He would have had a normal summer.", "Someone else would have found it."],
        x: [["the sea would take it", -1], ["nobody will find it", -1]]
      },
      {
        c: "Ido wants to be a palaeontologist when he grows up. What would you like to be when you grow up, and why?",
        he: "אחרי when בעתיד בא הווה: when I grow up (לא will grow). למשל: When I grow up, I want to be a vet.",
        a: [],
        o: "That sounds like a fantastic job. I can see you doing it.",
        t: ["When I grow up, I want to be a vet.", "I'd like to be an engineer, because I love building things."],
        x: [["when i will grow up i want to be a doctor", -1], ["a singer because i love music", -1]]
      },
      {
        c: "Fossils show us animals from millions of years ago. If you could bring back one animal from the past for one day, which would it be?",
        he: "איזו חיה מהעבר הייתם מחזירים ליום אחד? למשל: A mammoth, because it looks so fluffy!",
        a: [],
        o: "Wow! I'd keep my wings ready, just in case.",
        t: ["A small dinosaur, so I could see how it moves.", "A mammoth, because it looks so fluffy!"],
        x: [["t rex", -1], ["a big dinosaur with a long neck", -1]]
      },
      {
        c: "Before you go! Ido's fossil is now on display in a museum. If a museum showed one of your things, what would you want it to be?",
        he: "איזה חפץ שלכם הייתם רוצים לראות במוזיאון? למשל: My first drawing, because I made it when I was five.",
        a: [],
        o: "What a great choice! People would line up to see it.",
        t: ["My first drawing, because I made it when I was five.", "My old football shirt from my first team."],
        x: [["my lego city", -1], ["my old teddy bear", -1]]
      }
    ],
    end: "What a treasure of a talk! Keep looking down on the beach. Bye for now!"
  },
  {
    id: 'tbpv03', title: 'Coco Airlines',
    he: 'טסים עם קוקו בחברת התעופה שלה, עם המילים של שדה התעופה',
    turns: [
      {
        c: "Welcome to Coco Airlines! If you could fly anywhere tomorrow, where would you go, and why?",
        he: "לאן הייתם טסים מחר, ולמה? למשל: I'd fly to Japan, because I love anime.",
        a: [],
        o: "Fabulous choice! Coco Airlines will take you there.",
        t: ["I'd fly to Japan, because I love anime.", "London, because I want to see the museums."],
        x: [["new york to see the big buildings", -1], ["paris", -1]]
      },
      {
        c: "Time to pack! You can take only one piece of hand luggage. What three things would you put in it?",
        he: "hand luggage = תיק יד. מה תשימו בו? למשל: My phone, a book and some snacks.",
        a: [],
        o: "Smart packing! Everything fits, and you're ready to go.",
        t: ["My phone, a book and some snacks.", "Headphones, a hoodie and my passport."],
        x: [["phone charger and water", -1], ["my headphones and candy", -1]]
      },
      {
        c: "At security, you sometimes have to take off your shoes. Which sounds more annoying to you, security or waiting at the gate?",
        he: "security = בידוק, gate = שער העלייה למטוס. למשל: Security, because it takes so long.",
        a: [
          { k: ['security check checking shoes'], r: "Security! All that taking off and putting on. My feathers always set off the alarm." },
          { k: ['gate wait waiting'], r: "Waiting at the gate! It feels like the plane will never come." },
          { k: ['nothing none love fun like enjoy mind'], r: "You enjoy all of it! Airports are exciting places." }
        ],
        o: "Interesting! Airports can be a bit stressful sometimes.",
        t: ["Security, because it takes so long.", "Waiting at the gate, because it's boring.", "I don't mind. I love airports!"],
        x: [["the security", 0], ["waiting at the gate is boring", 1], ["i love everything", 2], ["the food", -1], ["the check", 0]]
      },
      {
        c: "Oh no! Your flight is delayed by three hours. What would you do to pass the time at the airport?",
        he: "delayed = מתעכב. מה תעשו שלוש שעות? למשל: I'd watch a film on my phone.",
        a: [],
        o: "Great idea! Those three hours will fly by. Ha, fly!",
        t: ["I'd watch a film on my phone.", "I would walk around the shops and buy snacks."],
        x: [["sleep on the chair", -1], ["i will play on my phone", -1]]
      },
      {
        c: "Final question, passenger! Which sounds more exciting to you, the moment the plane takes off or the moment it lands? Why?",
        he: "take off = המראה, land = נחיתה. למשל: Take-off, because it feels like a roller coaster.",
        a: [
          { k: ['off start'], r: "Take-off! That rush when the plane leaves the ground is amazing." },
          { k: ['land landing landed arrive arrival'], r: "Landing! The moment you arrive somewhere new is magical." }
        ],
        o: "Both moments are exciting. I love flying either way!",
        t: ["Take-off, because it feels like a roller coaster.", "Landing, because I can't wait to arrive."],
        x: [["when it takes off", 0], ["the landing", 1], ["when we land", 1], ["i am scared", -1], ["take off", 0]]
      }
    ],
    end: "Thank you for flying Coco Airlines! We've landed safely. See you on your next trip!"
  },
  {
    id: 'tbpv04', title: "Judge Coco's court",
    he: 'קוקו שופטת בבית משפט מצחיק, ואתם עוזרים לה: עדים, ראיות, אשם או חף מפשע',
    turns: [
      {
        c: "Order in my court! A monkey is accused of taking bananas from the zoo shop. What evidence would you look for to find out the truth?",
        he: "evidence = ראיות, ולא סופרים אותו: some evidence. למשל: I would check the cameras in the shop.",
        a: [
          { k: ['an_evidence evidences'], r: "Some evidence, good thinking! Let's check it before we decide." },
          { k: ['camera cameras video footprint footprints fingerprint fingerprints witness witnesses evidence'], r: "Great idea! That is exactly the kind of evidence a judge needs." },
          { k: ['peel peels skin skins banana bananas'], r: "Banana peels! The best evidence in any monkey case." }
        ],
        o: "Good thinking! Every judge needs evidence before deciding.",
        t: ["I would check the cameras in the shop.", "Banana peels in the monkey's cage!"],
        x: [["i will look for an evidence", 0], ["the cameras", 1], ["ask a witness", 1], ["i don't know", -1], ["his fingerprints", 1], ["banana skins in his bed", 2]]
      },
      {
        c: "A parrot says she saw the monkey with a bag of bananas. But she's my cousin! Can we trust this witness? Why, or why not?",
        he: "witness = עד. אפשר לסמוך עליה? למשל: No, because she's your cousin.",
        a: [
          { k: ['not no never'], n: 'i_do_not_know not_sure', r: "Good point! A witness from the family might not be fair. We need more evidence." },
          { k: ['yes can trust'], n: 'i_do_not_know not_sure', r: "You trust her! Parrots are very honest birds, if I may say so." }
        ],
        o: "Hmm, a tricky question for any judge.",
        t: ["No, because she's your cousin.", "Yes, if she saw it with her own eyes."],
        x: [["no she is family", 0], ["we can not trust her", 0], ["yes she saw it", 1], ["i trust her", 1], ["bananas", -1]]
      },
      {
        c: "The monkey says he's innocent, because he was sleeping all afternoon. Do you think he's guilty or innocent? Why?",
        he: "guilty = אשם, innocent = חף מפשע. למשל: I think he's guilty. או He's innocent, because there's no evidence.",
        a: [
          { k: ['not_guilty innocent did_not'], n: 'not_innocent', r: "Innocent until we find more evidence! A very fair judge." },
          { k: ['guilty not_innocent lying lie liar lies did'], r: "Guilty! Sleeping monkeys don't usually carry bags of bananas." }
        ],
        o: "Hmm, I need to think about that. Thank you, detective.",
        t: ["I think he's guilty. He's lying.", "He's innocent, because there's no evidence."],
        x: [["he is guilty", 1], ["he is not guilty", 0], ["innocent", 0], ["he is not innocent", 1], ["he is lying", 1], ["he is cute", -1], ["he didn't do it", 0], ["he did it", 1], ["i don't know", -1]]
      },
      {
        c: "What is a fair sentence for someone who writes on the school walls? Should they get a fine, or do something else?",
        he: "sentence = עונש, fine = קנס. למשל: They should clean the walls themselves.",
        a: [
          { k: ['clean cleaning paint painting wash washing fix'], r: "Cleaning the walls! I love it. They won't do it again." },
          { k: ['fine pay money'], r: "A fine! Paying might teach them a lesson." }
        ],
        o: "That sounds fair. A good sentence teaches a lesson.",
        t: ["They should clean the walls themselves.", "They should pay a fine.", "They should help paint the school."],
        x: [["clean the wall", 0], ["pay money", 1], ["a fine", 1], ["talk to the principal", -1], ["paint it again", 0]]
      },
      {
        c: "And finally! In a real court case, would you rather be the judge, a lawyer or a detective, and why?",
        he: "שופט, עורך דין או בלש? למשל: A judge, because I like making fair decisions.",
        a: [],
        o: "Excellent choice! The court is lucky to have you.",
        t: ["A judge, because I like making fair decisions.", "A detective, because I love finding evidence."],
        x: [["lawyer because they talk a lot", -1], ["the judge he is the boss", -1]]
      }
    ],
    end: "Case closed! The monkey must tidy the zoo shop. Thank you, and see you soon!"
  },
  {
    id: 'tbpv05', title: "Who took Coco's hat?",
    he: 'קוקו מספרת על פושעים קטנים, ואתם עוזרים לה: burglar, pickpocket, scammer, hacker',
    turns: [
      {
        c: "Someone climbed through my shop window at night and took my best hat! What do we call a person who does that?",
        he: "מי שפורץ לבית או לבניין כדי לגנוב הוא a burglar. למשל: That person is a burglar.",
        a: [
          { k: ['burglar burglars burglary burger'], r: "A burglar, exactly! A burglar with fabulous taste in hats." },
          { k: ['thief thieves robber robbers'], r: "A thief, yes! A thief who breaks into a building is a burglar." }
        ],
        o: "I think it was a burglar! A burglar with fabulous taste in hats.",
        t: ["That person is a burglar.", "A thief, I think."],
        x: [["a burglar", 0], ["it is a thief", 1], ["robber", 1], ["a bad man", -1], ["burger", 0]]
      },
      {
        c: "Then someone on the bus took my wallet from my bag, and I didn't feel a thing! How can people protect themselves from pickpockets?",
        he: "pickpocket = כייס. איך שומרים על עצמנו? למשל: Keep your bag in front of you.",
        a: [],
        o: "Very useful advice! I'll keep my wallet under my wing from now on.",
        t: ["Keep your bag in front of you.", "Don't put your phone in your back pocket."],
        x: [["hold your bag", -1], ["dont put money in your pocket", -1]]
      },
      {
        c: "A scammer sent my grandma a fake message from the bank. What advice would you give someone to spot a scam message?",
        he: "scammer = נוכל. איך מזהים הודעה מזויפת? למשל: Never click on links from strangers.",
        a: [],
        o: "Brilliant advice! Scammers won't fool us now.",
        t: ["Never click on links from strangers.", "Call the bank and ask if it's real."],
        x: [["dont click the link", -1], ["check who send it", -1]]
      },
      {
        c: "Some hackers help companies find their weak spots, with permission. Is a hacker like that a criminal or a hero, in your opinion?",
        he: "hacker = האקר. פושע או גיבור? למשל: A hero, because they help the company.",
        a: [
          { k: ['criminal criminals bad crime wrong not'], n: 'i_do_not_know not_sure not_a_criminal not_criminal not_bad not_wrong', r: "Careful thinking! Without permission, hacking is a crime. With permission, it's a job." },
          { k: ['hero heroes good helper helps help nice cool not_a_criminal not_criminal'], r: "A hero! Some companies really pay hackers to find problems before criminals do." }
        ],
        o: "Good question to think about. Permission makes all the difference.",
        t: ["A hero, because they help the company.", "Still a criminal, if you ask me."],
        x: [["he is a hero", 1], ["a criminal", 0], ["it is not good", 0], ["they help so they are good", 1], ["i dont know", -1], ["he is not a criminal", 1], ["both", -1]]
      },
      {
        c: "My last question! If you wrote a detective story, which criminal from today would be the villain: a smuggler, a scammer or a hacker? Why?",
        he: "smuggler = מבריח. מי יהיה הנבל בסיפור שלכם? למשל: A smuggler, because he hides things in clever places.",
        a: [],
        o: "Ooh, that would be a thrilling story! I'd read it in one night.",
        t: ["A smuggler, because he hides things in clever places.", "A hacker, because it's very modern and exciting."],
        x: [["the hacker because computers", -1], ["scammer he tricks everyone", -1]]
      }
    ],
    end: "Thanks for helping me catch them all! My hat and I feel much safer. Bye!"
  },
  {
    id: 'tbpl04', title: "Detective Coco's next case",
    he: 'מדברים עם קוקו על תעלומת העוגה ועל הכלב Biscuit, ופותרים תעלומה חדשה',
    turns: [
      {
        c: "Biscuit the dog took a lemon cake! Which clue do you think was the most important: the footprints, the hair or the open window?",
        he: "clue = רמז. איזה רמז הכי חשוב? למשל: The footprints, because they weren't human.",
        a: [
          { k: ['footprint footprints foot feet print prints'], r: "The footprints! Small and round, in groups of four. Not human at all." },
          { k: ['hair hairs fur'], r: "The short brown hair! A clever detective notices the tiny things." },
          { k: ['window'], r: "The open window! That's how Biscuit got in and out." }
        ],
        o: "Every clue helped a bit! Together they told the whole story.",
        t: ["The footprints, because they weren't human.", "The hair, because it was a dog's hair.", "The open window, because that's how he escaped."],
        x: [["the footprints", 0], ["the foot print in the flour", 0], ["the brown hair", 1], ["window", 2], ["the cake", -1]]
      },
      {
        c: "Should Biscuit get a punishment, or is it the caretaker's fault for leaving the window open?",
        he: "של מי האשמה? למשל: It's the caretaker's fault. או Nobody. He's just a dog!",
        a: [
          { k: ['nobody no_one neither none'], r: "Nobody's fault! It was just a hungry dog and a delicious cake." },
          { k: ['caretaker owner'], r: "The caretaker's fault! Dogs will be dogs, especially near lemon cake." },
          { k: ['punish punishment punished dog_fault biscuit_fault his_fault'], r: "A small punishment, maybe! No cake for Biscuit for a whole year." }
        ],
        o: "Good point! From now on the window stays closed, and the cake stays safe.",
        t: ["It's the caretaker's fault.", "Biscuit should get a small punishment.", "Nobody. He's just a dog!"],
        x: [["the caretaker", 1], ["it is the owner fault", 1], ["the dog should be punished", 2], ["nobody it is a dog", 0], ["poor dog", -1], ["the dog's fault", 2], ["both", -1]]
      },
      {
        c: "If you were a detective, what case would you like to solve, a real one or a totally made-up one?",
        he: "איזו תעלומה הייתם רוצים לפתור? למשל: Why my socks always disappear in the washing machine!",
        a: [],
        o: "Ooh, that sounds like a great mystery. You'd crack it in no time.",
        t: ["I'd like to find out who stole the Mona Lisa.", "Why my socks always disappear in the washing machine!"],
        x: [["who took my pencil case", -1], ["the pyramids how they built them", -1]]
      },
      {
        c: "Now a new case for you! Every morning there are feathers on my shop floor, and one sock is missing. Who do you think the suspect is?",
        he: "suspect = חשוד. מי לדעתכם? למשל: I think it's a bird that's building a nest.",
        a: [],
        o: "Hmm, a strong suspect! I'll watch the shop tonight.",
        t: ["I think it's a bird that's building a nest.", "Maybe a mouse is taking them for its bed."],
        x: [["it is you coco", -1], ["the cat next door", -1]]
      },
      {
        c: "Last question, detective! What would you do to catch the sock thief tonight?",
        he: "איך תתפסו את גנב הגרביים? למשל: I'd put flour on the floor to see the footprints!",
        a: [],
        o: "A perfect plan! Tomorrow we'll know who did it.",
        t: ["I'd put a camera next to the socks.", "I'd put flour on the floor to see the footprints!"],
        x: [["put a camera", -1], ["i will wait in the dark", -1]]
      }
    ],
    end: "Brilliant detective work! The window stays closed, and my socks stay safe. Bye!"
  },
  {
    id: 'tbpl05', title: 'Far from home with Coco',
    he: 'מדברים עם קוקו על Maya ו-Tom שעברו לארץ אחרת: הלם תרבותי, געגועים והתרגלות',
    turns: [
      {
        c: "Maya was shocked that dinner in England is at half past five! What time do you usually have dinner, and would you like it earlier?",
        he: "מתי אתם אוכלים ארוחת ערב? למשל: At eight. No, half past five is too early!",
        a: [
          { k: ['not no late'], n: 'i_do_not_know not_sure', r: "Late dinners forever! Maya would understand you." },
          { k: ['yes earlier'], n: 'i_do_not_know not_sure', r: "Earlier would suit you! Then you'd love dinner in Manchester." }
        ],
        o: "Interesting! Every country has its own dinner time.",
        t: ["At eight. No, half past five is too early!", "Around seven, and yes, earlier would be nice."],
        x: [["at 8 no", 0], ["seven i don't want earlier", 0], ["yes earlier is good", 1], ["at seven o'clock", -1], ["i like it later", 0]]
      },
      {
        c: "Tom found people in Israel very direct. A neighbour even asked him a very personal question! Do you think being direct is good, or rude?",
        he: "direct = ישיר. זה טוב או לא מנומס? למשל: It depends on the question. או It's good, because people are honest.",
        a: [
          { k: ['depends depend both'], r: "It depends, exactly! Direct can be honest, but sometimes it's too much." },
          { k: ['rude bad strange weird impolite personal not_nice not_good not_polite'], r: "A bit rude, maybe! In England, people would never ask that." },
          { k: ['good honest nice fine okay ok'], r: "Honest and direct! At least you always know what people think." }
        ],
        o: "Interesting! Every culture has its own rules.",
        t: ["It depends on the question.", "I think some questions are too personal and rude.", "It's good, because people are honest."],
        x: [["it is rude", 1], ["it is good because honest", 2], ["both", 0], ["it is not nice", 1], ["israel", -1], ["i don't know", -1]]
      },
      {
        c: "Maya missed her grandma's Friday dinners. If you moved far away, what would you miss the most, and why?",
        he: "homesick = מתגעגע הביתה. מה הכי הייתם מתגעגעים אליו? למשל: I'd miss my friends, because we do everything together.",
        a: [],
        o: "That makes sense. The things we love are always hard to leave.",
        t: ["I'd miss my friends, because we do everything together.", "I would miss the beach and the hot weather."],
        x: [["my friends and my dog", -1], ["the food here", -1]]
      },
      {
        c: "Tom found reading Hebrew from right to left hard at first. What would be the hardest thing for you to get used to in a new country?",
        he: "get used to = להתרגל ל-. למשל: I'd have to get used to the cold weather.",
        a: [],
        o: "That would take time, but you'd get used to it, I'm sure.",
        t: ["I'd have to get used to the cold weather.", "Getting used to a new language would be hard."],
        x: [["the language", -1], ["the food is different", -1]]
      },
      {
        c: "One more! On Tom's first day, five kids invited him to their homes. How could you help a new kid in your class feel welcome?",
        he: "איך עוזרים לילד חדש להרגיש בבית? למשל: I'd sit with them at lunch.",
        a: [],
        o: "That's so kind! Any new kid would be lucky to have you in their class.",
        t: ["I'd sit with them at lunch.", "I would show them around the school."],
        x: [["play with him in the break", -1], ["say hello and be nice", -1]]
      }
    ],
    end: "Wherever you go, you'd make friends quickly. Thanks for the lovely talk!"
  },
  {
    id: 'tbpl06', title: 'Face your fear, Coco!',
    he: 'קוקו נלחצת מחתולים, ואתם נותנים לה עצות כמו של Dr Green: צעד קטן כל פעם',
    turns: [
      {
        c: "Confession: I panic when I see a cat, just like Amit with spiders! What do you think of the advice: just don't think about it?",
        he: "מה דעתכם על העצה פשוט לא לחשוב על זה? למשל: It doesn't work. You can't just stop thinking.",
        a: [
          { k: ['not no bad useless wrong'], n: 'i_do_not_know not_sure not_bad', r: "Dr Green agrees with you! Running away teaches your brain that the fear is real." },
          { k: ['good yes works work helps help'], n: 'i_do_not_know not_sure', r: "It works for some people! But Dr Green says small steps work better." }
        ],
        o: "Hmm, interesting! Dr Green had a different idea.",
        t: ["It doesn't work. You can't just stop thinking.", "It helps a little, I think."],
        x: [["it doesn't work", 0], ["it is bad advice", 0], ["it is good", 1], ["it helps", 1], ["cats are cute", -1]]
      },
      {
        c: "Dr Green says: face your fear in very small steps. What should my first small step with cats be?",
        he: "face your fear = להתמודד עם הפחד. מה הצעד הראשון של קוקו? למשל: Look at a cartoon of a cat first.",
        a: [],
        o: "Great first step! I'll try it tomorrow, from very far away.",
        t: ["Look at a cartoon of a cat first.", "Look at a photo of a cute kitten."],
        x: [["watch a cat video", -1], ["see a small cat from far", -1]]
      },
      {
        c: "Amit's friends laughed at him. What would you say to a friend who is afraid of something, instead of laughing?",
        he: "מה תגידו לחבר שמפחד? למשל: I'd tell them it's okay to be afraid.",
        a: [],
        o: "That's so kind. Everybody needs a friend like you.",
        t: ["I'd tell them it's okay to be afraid.", "I'd say: you're not alone, and I'll help you."],
        x: [["it is ok everyone is scared of something", -1], ["i will help you", -1]]
      },
      {
        c: "Lots of little kids are afraid of the dark. What small steps would you suggest to a little child who is afraid of the dark?",
        he: "איזה צעדים קטנים תציעו לילד קטן שמפחד מהחושך? למשל: First, use a small night light.",
        a: [],
        o: "That's gentle and clever. Being brave really does come in small steps.",
        t: ["First, use a small night light.", "Read a happy story together before bed.", "Leave the door open a little at first."],
        x: [["a night light", -1], ["tell him it is ok and stay with him", -1]]
      },
      {
        c: "Final question! Some people are afraid of heights, the sea or flying. What brave thing would you like to try one day?",
        he: "איזה דבר אמיץ הייתם רוצים לנסות? למשל: I want to swim with dolphins in the sea.",
        a: [],
        o: "Wow, that's brave! I'll cheer for you with both wings.",
        t: ["I'd like to try skydiving one day!", "I want to swim with dolphins in the sea."],
        x: [["bungee jumping", -1], ["i want to climb a big mountain", -1]]
      }
    ],
    end: "Small steps, big courage! I might even say hello to a cat tomorrow. Bye for now!"
  },
  {
    id: 'tbpl07', title: "Coco's space trip",
    he: 'טסים עם קוקו בחלל: מדברים על נוגה, מאדים, צדק ושבתאי, ובוחרים לאן לטוס',
    turns: [
      {
        c: "Lots of people think Mercury is the hottest planet, because it's closest to the Sun. Which fact from the planetarium surprised you the most?",
        he: "איזו עובדה הפתיעה אתכם? למשל: That Venus is the hottest planet. או Jupiter has no solid surface!",
        a: [
          { k: ['venus'], r: "Venus! Four hundred and sixty degrees, because of its thick clouds. Amazing." },
          { k: ['mars rust red'], r: "The rust on Mars! A whole planet like an old bike." },
          { k: ['jupiter gas solid earths spot storm thousand'], r: "Jupiter! More than a thousand Earths could fit inside. One giant planet." },
          { k: ['saturn ring rings ice'], r: "Saturn's rings, made of ice and rock! Fabulous jewellery for a planet." }
        ],
        o: "Space is full of surprises! I'm still amazed.",
        t: ["That Venus is the hottest planet.", "The red colour of Mars comes from rust.", "Jupiter has no solid surface!"],
        x: [["venus is the hottest", 0], ["mars has rust", 1], ["jupiter is gas", 2], ["the rings of saturn", 3], ["everything", -1]]
      },
      {
        c: "If you could visit one planet, which would you choose, and why?",
        he: "לאיזה כוכב לכת הייתם טסים, ולמה? למשל: Saturn, because I want to see the rings up close.",
        a: [],
        o: "Great choice! Pack your space suit and plenty of snacks.",
        t: ["Saturn, because I want to see the rings up close.", "Mars, because maybe people will live there one day."],
        x: [["jupiter because it is big", -1], ["the moon", -1]]
      },
      {
        c: "The trip to Mars takes about seven months. What would you take with you to stay happy on such a long trip?",
        he: "מה תיקחו לטיסה של שבעה חודשים? למשל: Lots of books and my favourite games.",
        a: [],
        o: "Smart thinking! Seven months will go faster with that.",
        t: ["Lots of books and my favourite games.", "Photos of my friends and some music."],
        x: [["my playstation and snacks", -1], ["my cat", -1]]
      },
      {
        c: "Do you think people will really live on Mars one day? Why, or why not?",
        he: "אנשים יגורו על מאדים? למשל: Yes, because technology is getting better. או No, it's too cold.",
        a: [
          { k: ['why_not'], r: "Maybe! Scientists are working hard on it right now." },
          { k: ['not no never'], n: 'i_do_not_know not_sure', r: "Maybe not! It's very cold, and the air is too thin to breathe." },
          { k: ['yes will maybe sure probably'], n: 'i_do_not_know not_sure', r: "Maybe! Scientists are working hard on it right now." }
        ],
        o: "Nobody knows yet! It's one of the biggest questions in science.",
        t: ["Yes, because technology is getting better.", "No, it's too cold and there's no air."],
        x: [["yes in the future", 2], ["no it is too cold", 1], ["i think they won't", 1], ["yes they will", 2], ["why not", 0], ["elon musk", -1]]
      },
      {
        c: "Here is my last one! If you discovered a new planet, what would you call it, and what would it be like?",
        he: "גיליתם כוכב חדש! איך תקראו לו ואיך הוא יהיה? למשל: Planet Blue, with oceans and friendly aliens.",
        a: [],
        o: "What a fabulous planet! I'd fly there tomorrow.",
        t: ["I'd call it Candy, and it would be made of chocolate.", "Planet Blue, with oceans and friendly aliens."],
        x: [["planet pizza", -1], ["i will call it nova and it is purple", -1]]
      }
    ],
    end: "Best trip ever, and we didn't even leave our seats! See you on the next journey!"
  },
  {
    id: 'tbpl08', title: "Coco's flight stories",
    he: 'מדברים עם קוקו על הטיסות של Jake ו-Shira, ועל הטיול הכי טוב או הכי גרוע שלכם',
    turns: [
      {
        c: "Jake's suitcase never came, so he wore his big brother's T-shirts for two days! What would you do if your suitcase got lost on holiday?",
        he: "המזוודה לא הגיעה! מה תעשו? למשל: I'd buy some new clothes at a shop.",
        a: [],
        o: "Good plan! Holidays are fun even in borrowed clothes.",
        t: ["I'd buy some new clothes at a shop.", "I would borrow clothes from my friend."],
        x: [["buy new clothes", -1], ["i will go to the airline desk", -1]]
      },
      {
        c: "Shira had turbulence, and juice landed in her lap! Whose flight do you think was worse, Jake's or Shira's? Why?",
        he: "turbulence = כיס אוויר. של מי הטיסה הייתה גרועה יותר? למשל: Jake's, because he lost his suitcase.",
        a: [
          { k: ['jake'], r: "Jake's! Three hours late and no suitcase. Poor Jake." },
          { k: ['shira sheera'], r: "Shira's! Shaking in the middle of the night sounds scary, and sticky too." },
          { k: ['both same'], r: "Both bad, in different ways! Travel isn't always easy." }
        ],
        o: "Hmm, they both had bad luck! At least they have good stories now.",
        t: ["Jake's, because he lost his suitcase.", "Shira's, because turbulence is scary.", "Both were bad in different ways."],
        x: [["jake", 0], ["i think shira's flight", 1], ["both of them", 2], ["the girl", -1], ["jake because the bag", 0]]
      },
      {
        c: "Shira got a free upgrade to business class, with a real bed! What would be your dream thing to have on a long flight?",
        he: "upgrade = שדרוג. מה הייתם רוצים בטיסה ארוכה? למשל: A big bed and unlimited ice cream.",
        a: [],
        o: "I'd love that too! Flying in style is my favourite.",
        t: ["A big bed and unlimited ice cream.", "My own cinema screen with every film."],
        x: [["a pool on the plane", -1], ["good food and wifi", -1]]
      },
      {
        c: "What is the best trip you have ever been on, even a short school trip, and what made it so special?",
        he: "ספרו על הטיול הכי טוב שהייתם בו, גם טיול שנתי קצר. למשל: A trip to the north with my class.",
        a: [],
        o: "What a story! Trips always give us something to remember.",
        t: ["A trip to the north with my class.", "A day at the beach with my friends.", "Our class trip, because we laughed all day."],
        x: [["eilat it was very fun", -1], ["the trip to the desert we slept outside", -1]]
      },
      {
        c: "One last thing! The flight attendant stayed calm during the turbulence. Would you like that job? Why, or why not?",
        he: "הייתם רוצים להיות דיילים? למשל: Yes, because I could travel everywhere. או No, I'd get tired of planes.",
        a: [
          { k: ['why_not'], r: "You'd travel the world and help people. A fabulous job!" },
          { k: ['not no never'], n: 'i_do_not_know not_sure', r: "Not for you! Fair enough. Long flights and sticky juice aren't for everyone." },
          { k: ['yes love like sure'], n: 'i_do_not_know not_sure', r: "You'd travel the world and help people. A fabulous job!" }
        ],
        o: "Interesting! It's a busy job, but you see the whole world.",
        t: ["Yes, because I could travel everywhere.", "No, I'd get tired of planes."],
        x: [["yes i love travel", 2], ["no i don't like planes", 1], ["no way", 1], ["sure why not", 0], ["it is hard work", -1]]
      }
    ],
    end: "Thanks for flying through these stories with me! Safe travels, and see you soon."
  },
  {
    id: 'tbpl09', title: "Coco's healthy habits",
    he: 'מדברים עם קוקו על העצות של הרופאה ל-Lior: מים, הפסקות מהמסך ומנוחה לעיניים',
    turns: [
      {
        c: "Lior drank only one glass of water at school. How many glasses of water have you had today, do you think?",
        he: "כמה כוסות מים שתיתם היום? למשל: I've had about five glasses. או Only two, I think.",
        a: [
          { k: ['zero none one two'], n: 'three four five six seven eight nine ten', r: "Not so many yet! Keep a bottle near you, and your brain will thank you." },
          { k: ['three four five six seven eight nine ten eleven twelve lot lots many'], r: "Fabulous! Your body and your brain are very happy right now." }
        ],
        o: "Water is great for your brain, so keep a bottle near you.",
        t: ["I've had about five glasses.", "Only two, I think.", "I'm not sure, maybe three."],
        x: [["i drank 5 glasses", 1], ["only one", 0], ["none", 0], ["a lot", 1], ["i don't know", -1], ["two or three", 1]]
      },
      {
        c: "Here's a cool tip from the doctor: every twenty minutes, look at something far away for twenty seconds. Would you actually do that? Why?",
        he: "הייתם עושים את זה באמת? למשל: Yes, it's easy and it helps. או Probably not. I'd forget.",
        a: [
          { k: ['not no forget forgot never'], n: 'i_do_not_know not_sure', r: "It's easy to forget! Maybe set a little alarm on your phone." },
          { k: ['yes try will sure easy'], n: 'i_do_not_know not_sure', r: "Great! Your eyes will thank you after a long day at school." }
        ],
        o: "It's a simple trick, and it really helps tired eyes.",
        t: ["Yes, it's easy and it helps.", "Probably not. I'd forget."],
        x: [["yes i will try", 1], ["no i will forget", 0], ["i don't think so", 0], ["sure", 1], ["twenty", -1]]
      },
      {
        c: "Lior plays on his phone in every break. What do you think is a better way to spend a break at school?",
        he: "איך כדאי לבלות הפסקה? למשל: Playing football with my friends outside.",
        a: [],
        o: "Great idea! Your eyes and your friends will love that.",
        t: ["Playing football with my friends outside.", "Talking with friends and eating a snack."],
        x: [["play outside", -1], ["talk to my friends and eat", -1]]
      },
      {
        c: "The doctor says Lior might need glasses. If you designed glasses, what would they look like, and what special power would they have?",
        he: "עצבו משקפיים עם כוח מיוחד! למשל: Big round purple glasses that can see through walls.",
        a: [],
        o: "Fabulous design! I'd buy two pairs for my shop.",
        t: ["Big round purple glasses that can see through walls.", "Cool black glasses that translate any language."],
        x: [["glasses that see in the dark", -1], ["pink glasses with x ray", -1]]
      },
      {
        c: "Last one! What is one good habit for your eyes or your sleep that you'd like to start this week?",
        he: "איזה הרגל טוב תתחילו השבוע? למשל: I'd like to stop using my phone before bed.",
        a: [],
        o: "Great plan! Small habits make a big difference.",
        t: ["I'd like to stop using my phone before bed.", "I want to go to bed at the same time every night."],
        x: [["less phone at night", -1], ["sleep more hours", -1]]
      }
    ],
    end: "Drink water, rest your eyes, and keep smiling! See you soon."
  },
  {
    id: 'tbpr02', title: 'Coco goes running',
    he: 'מדברים עם קוקו על עסקי הריצה: נעליים יקרות, שעונים, ו-parkrun שהוא בחינם',
    turns: [
      {
        c: "Bill Bowerman made a new shoe sole in a waffle maker! What everyday thing at home could you use to invent something new?",
        he: "בעזרת איזה חפץ יומיומי הייתם ממציאים משהו? למשל: I could use old bottles to build a bird feeder.",
        a: [],
        o: "What a clever idea! Bill Bowerman would be proud.",
        t: ["I could use old bottles to build a bird feeder.", "I'd use a hair dryer to make a mini fan."],
        x: [["a spoon to make a phone stand", -1], ["the toaster", -1]]
      },
      {
        c: "Top running shoes can cost more than a thousand shekels. Is expensive sports gear worth the money, in your opinion? Why?",
        he: "שווה לשלם הרבה על ציוד ספורט? למשל: No, normal shoes are fine. או Yes, if you are a professional.",
        a: [
          { k: ['depends depend sometimes professional professionals'], r: "It depends, exactly! For top athletes yes, for a fun jog, not really." },
          { k: ['not no waste'], n: 'i_do_not_know not_sure', r: "I agree with the experts! Comfortable shoes that fit are what really matter." },
          { k: ['yes worth better faster'], n: 'i_do_not_know not_sure', r: "For the best runners, maybe! A few seconds can mean a gold medal." }
        ],
        o: "Interesting opinion! Experts say comfort matters more than the price.",
        t: ["No, normal shoes are fine for most people.", "Yes, if you are a professional runner.", "Yes, good shoes help you run faster."],
        x: [["no it is too expensive", 1], ["yes it is worth it", 2], ["it depends", 0], ["it's a waste of money", 1], ["nike", -1]]
      },
      {
        c: "Parkrun started with thirteen people, and now it happens in more than two thousand parks. Why do you think a free run became so popular?",
        he: "למה ריצה בחינם הפכה לפופולרית כל כך? למשל: Because it's free and you meet new people.",
        a: [],
        o: "Good point! Sometimes the best things in life are free.",
        t: ["Because it's free and you meet new people.", "I think people like doing sport together."],
        x: [["because it is free", -1], ["people like run with friends", -1]]
      },
      {
        c: "If you started a new sport tomorrow, which one would it be, and what would you need to buy?",
        he: "איזה ספורט חדש ומה תצטרכו לקנות? למשל: Tennis. I'd need a racket and some balls.",
        a: [],
        o: "Ooh, sporty! And you'd look fabulous in the outfit too.",
        t: ["Tennis. I'd need a racket and some balls.", "Surfing, so I'd need a board and a wetsuit."],
        x: [["basketball i need a ball", -1], ["swimming i need a swimsuit", -1]]
      },
      {
        c: "Before you go! Big races bring money to a city, from hotels and shops. What big event would you like your city to host, and why?",
        he: "איזה אירוע גדול הייתם רוצים בעיר שלכם? למשל: A big music festival with famous singers.",
        a: [],
        o: "That would be amazing! The whole city would be talking about it.",
        t: ["A big music festival with famous singers.", "The Olympic Games, because it would be so exciting."],
        x: [["a marathon", -1], ["a big concert of taylor swift", -1]]
      }
    ],
    end: "Ready, steady, go! Thanks for running through this talk with me. See you soon!"
  },
  {
    id: 'tbpr03', title: "Coco's honest hour",
    he: 'מדברים עם קוקו על שקרים לבנים: מתי זה בסדר, ולמה קשה לנו להפסיק',
    turns: [
      {
        c: "Imagine a friend gives you a jumper that you really don't like. Would you tell a white lie, or tell the truth kindly? What would you say?",
        he: "white lie = שקר לבן. מה תגידו? למשל: I'd say thank you, I love it! או I'd tell the truth, but kindly.",
        a: [
          { k: ['truth honest true honestly'], r: "You'd tell the truth, kindly! That's the hardest skill of all." },
          { k: ['lie lying white love lovely great nice beautiful thank thanks'], r: "A little white lie to protect their feelings! Most people would do the same." }
        ],
        o: "That's a kind way to handle it. Feelings matter.",
        t: ["I'd say thank you, I love it!", "I'd tell the truth, but very kindly."],
        x: [["i would tell the truth", 0], ["i will lie", 1], ["thank you it is nice", 1], ["i give it to my sister", -1], ["say the truth", 0]]
      },
      {
        c: "Experts say small children who lie have healthy, clever brains. Does that surprise you? Why?",
        he: "זה מפתיע אתכם? למשל: Yes, because lying sounds bad. או Not really. Lying is a bit clever.",
        a: [
          { k: ['not no'], n: 'i_do_not_know not_sure', r: "It doesn't surprise you! Right: to lie, you have to understand what others know." },
          { k: ['yes surprise surprised surprising strange weird'], n: 'i_do_not_know not_sure', r: "It surprised me too! But to lie, you have to understand what others know." }
        ],
        o: "Interesting! Little brains are smarter than we think.",
        t: ["Yes, because lying sounds bad.", "Not really. Lying is a bit clever."],
        x: [["yes very surprising", 1], ["no i know it", 0], ["not really", 0], ["it is weird", 1], ["babies", -1]]
      },
      {
        c: "Is it ever okay to tell a white lie? Can you give me an example?",
        he: "מתי שקר לבן בסדר? למשל: Yes, when you say a present is nice.",
        a: [],
        o: "That's a thoughtful example. Kindness matters.",
        t: ["Yes, when you say a present is nice.", "It's okay before a surprise party."],
        x: [["when your friend cook bad food", -1], ["no never", -1]]
      },
      {
        c: "If people catch you lying, they find it harder to trust you. How can someone win back a friend's trust after a lie?",
        he: "איך מחזירים אמון אחרי שקר? למשל: They should say sorry and tell the truth.",
        a: [],
        o: "Wise words! Trust grows back slowly, but it does grow.",
        t: ["They should say sorry and tell the truth.", "By being honest every day after that."],
        x: [["say sorry", -1], ["don't lie again", -1]]
      },
      {
        c: "And finally! The researcher's test is: would you be happy if the other person found out the truth? Is that a good test? Why?",
        he: "זה מבחן טוב? למשל: Yes, because it's simple and honest. או Not always. Some surprises need a lie.",
        a: [
          { k: ['not no'], n: 'i_do_not_know not_sure', r: "Fair enough! Life is complicated, and no test is perfect." },
          { k: ['yes good great agree'], n: 'i_do_not_know not_sure', r: "I agree! It's a simple test, and it really makes you think." }
        ],
        o: "Interesting! It's a useful question to ask yourself.",
        t: ["Yes, because it's simple and honest.", "Not always. Some surprises need a lie."],
        x: [["yes it is good", 1], ["not always", 0], ["i agree", 1], ["no", 0], ["the truth", -1]]
      }
    ],
    end: "Honestly, that was a wonderful talk! And that's not a white lie. See you soon!"
  },
  {
    id: 'tbpr04', title: "Coco's fake news detector",
    he: 'מדברים עם קוקו על מתיחות מפורסמות, כמו עצי הספגטי, ואיך מזהים תמונה מזויפת',
    turns: [
      {
        c: "In nineteen fifty-seven, lots of people believed that spaghetti grew on trees! Why do you think so many clever people believed it?",
        he: "למה אנשים חכמים האמינו? למשל: Because it was on a serious TV channel.",
        a: [
          { k: ['tv television bbc trust trusted serious channel news'], r: "Exactly! It came from a serious TV channel that people trusted." },
          { k: ['know knew unusual new idea'], n: 'i_do_not_know not_sure', r: "Yes! Spaghetti was unusual in Britain then. Nobody knew how it was made." }
        ],
        o: "Good thinking! Sometimes we believe things because we want them to be true.",
        t: ["Because it was on a serious TV channel.", "They didn't know how spaghetti was made."],
        x: [["because it was on tv", 0], ["they trust the bbc", 0], ["they don't know spaghetti", 1], ["it was funny", -1], ["spaghetti was new for them", 1]]
      },
      {
        c: "The fairy photos fooled experts for more than sixty years! If you had been one of the cousins, would you have told the truth earlier?",
        he: "הייתם מספרים את האמת מוקדם יותר? למשל: Yes, because lying for so long is hard. או No, it was too much fun!",
        a: [
          { k: ['not no never'], n: 'i_do_not_know not_sure', r: "I understand! Once a joke gets so big, it's hard to tell the truth." },
          { k: ['yes earlier sooner'], n: 'i_do_not_know not_sure', r: "Good for you! The truth would have saved a lot of experts from looking silly." }
        ],
        o: "It's a tricky one. Their little joke became really famous.",
        t: ["Yes, because lying for so long is hard.", "No, because it was too much fun!"],
        x: [["yes i would tell", 1], ["no it is funny", 0], ["i wouldn't", 0], ["yes earlier", 1], ["fairies", -1]]
      },
      {
        c: "Have you ever been fooled by a joke or a fake photo? What happened?",
        he: "פעם עבדו עליכם עם בדיחה או תמונה מזויפת? למשל: Yes, I believed a fake photo of a giant cat.",
        a: [],
        o: "Ha! Everyone gets fooled sometimes. Even clever parrots.",
        t: ["Yes, I believed a fake photo of a giant cat.", "My friend told me school was cancelled, and I believed him!"],
        x: [["yes a video of a shark in the street", -1], ["no never", -1]]
      },
      {
        c: "Before you share something surprising online, the article says: stop and check. How do you check if a photo or video is real?",
        he: "איך בודקים אם תמונה אמיתית? למשל: I look for the same story on other websites.",
        a: [],
        o: "Very smart! You'd make a great fact checker.",
        t: ["I look for the same story on other websites.", "I check who posted it first."],
        x: [["i search it on google", -1], ["ask my parents", -1]]
      },
      {
        c: "My last question! On the first of April, people play tricks on each other. What harmless joke would you play on a friend?",
        he: "איזו מתיחה תמימה הייתם עושים לחבר? למשל: I'd put salt in the sugar bowl!",
        a: [],
        o: "Ha! That's funny and harmless. Your friend will laugh too.",
        t: ["I'd put salt in the sugar bowl!", "I'd tell them the teacher cancelled the test."],
        x: [["put a fake spider in his bag", -1], ["change his phone language", -1]]
      }
    ],
    end: "No fooling: you were brilliant today! See you soon, fact checker."
  }
]);

// Talk to Coco: B1+ home scenes (sbp01 to sbp15). Format: app/specs/talk.md; rules: app/tools/TALK-WRITING.md.
window.EQ_TALK.bp = (window.EQ_TALK.bp || []).concat([
  {
    id: "sbp01", title: "The perfect school day",
    he: "קוקו כתבת בעיתון ומראיינת אתכם על יום הלימודים המושלם",
    turns: [
      {
        c: "Hello! I'm a reporter for The Feather Times, and I'm writing about the perfect school day. Could you tell me what time it would start?",
        he: "באיזו שעה יתחיל היום המושלם? למשל: It would start at nine o'clock.",
        a: [
          { k: ["nine ten eleven twelve late later noon afternoon"], r: "Nice and late! Everyone would arrive awake and happy." },
          { k: ["six seven eight early"], n: "not_early", r: "Early! Then the whole afternoon would be free. Smart." }
        ],
        o: "Good choice! I'm writing that down in my notebook.",
        t: ["It would start at nine o'clock.", "At eight, so we finish early.", "It would start at ten."],
        x: [["at 9 o'clock", 0], ["it would start at ten", 0], ["seven thirty", 1], ["early in the morning", 1], ["i dont know", -1], ["whenever we want", -1]]
      },
      {
        c: "On the perfect day, which subject would you keep, and which one would you happily remove?",
        he: "איזה מקצוע הייתם משאירים ואיזה מורידים? למשל: I would keep art and remove maths.",
        a: [],
        o: "Interesting! I think many students would have an opinion about that.",
        t: ["I would keep art and remove maths.", "I'd keep English and remove history."],
        x: [["keep sport remove physics", -1], ["i want only art", -1]]
      },
      {
        c: "Some people think everyone should wear a school uniform, even on the perfect day. Do you agree, or should everyone wear what they like?",
        he: "מסכימים שצריך תלבושת אחידה? למשל: Yes, a uniform is easier. או No, everyone should wear what they like.",
        a: [
          { k: ["disagree hate boring ugly own choose free freedom whatever what_they what_we what_i not no"], n: "not_sure not_know no_idea", r: "Freedom! Then my article needs a whole page about your style." },
          { k: ["agree uniform yes same easy"], r: "A uniform! It's easy in the morning, and nobody worries about clothes." }
        ],
        o: "That's a clever answer. My readers will love it.",
        t: ["Yes, I agree. A uniform is easier.", "No, everyone should wear what they like."],
        x: [["yes i am agree uniform is good", 1], ["no i hate uniforms", 0], ["everybody should wear what they want", 0], ["i agree", 1], ["maybe", -1], ["uniform only on trips", 1]]
      },
      {
        c: "Now imagine a brand new club at the perfect school. What would it be, and why would students love it?",
        he: "איזה חוג חדש הייתם פותחים ולמה? למשל: A cooking club, because everyone loves food.",
        a: [],
        o: "Interesting idea! I'd love to see a club like that.",
        t: ["A cooking club, because everyone loves food.", "A gaming club, because it's fun and social."],
        x: [["a club for football", -1], ["music club because its fun", -1]]
      },
      {
        c: "Last question for my article. Do you think the perfect school day will really happen one day, or is it just a dream?",
        he: "זה יקרה מתישהו או שזה רק חלום? למשל: I think it will happen one day. או It's just a dream.",
        a: [
          { k: ["dream never not no impossible"], n: "not_sure not_know no_idea", r: "Maybe it's a dream, but dreams can change things. That's my headline!" },
          { k: ["yes will happen possible maybe soon one_day someday future"], r: "I hope you're right! Maybe one day it will really happen." }
        ],
        o: "Thank you! That's a perfect ending for my article.",
        t: ["I think it will happen one day.", "No, it's just a dream."],
        x: [["yes it will happen", 1], ["it will never happen", 0], ["just dream", 0], ["maybe in the future", 1], ["pizza", -1]]
      }
    ],
    end: "Thank you for the interview! Look for your ideas in The Feather Times. Bye!"
  },
  {
    id: "sbp02", title: "Coco Travel",
    he: "קוקו סוכנת נסיעות ומתכננת איתכם טיול חלומי",
    turns: [
      {
        c: "Welcome to Coco Travel! I can plan any trip you like. Would you rather go somewhere with mountains and forests, or to a big busy city?",
        he: "הרים ויערות או עיר גדולה? למשל: Mountains and forests, please. או A big city, please.",
        a: [
          { k: ["mountain forest nature tree trees hike hiking lake river camping green north quiet"], r: "Fresh air and tall trees! Lovely. My feathers love the mountain wind." },
          { k: ["city cities town busy shop shops shopping museum lights"], r: "A big city! Lights, shops and amazing food. Good choice." }
        ],
        o: "Hmm, then let me find something special for you.",
        t: ["Mountains and forests, please.", "A big busy city, please."],
        x: [["mountains", 0], ["i want to go to forest", 0], ["big city like london", 1], ["paris", -1], ["city please", 1], ["the beach", -1]]
      },
      {
        c: "What would you like to do there on the first day? Could you give me two or three ideas?",
        he: "מה תרצו לעשות ביום הראשון? למשל: I'd like to walk around and try the food.",
        a: [],
        o: "Fabulous! I'm adding all of that to your plan.",
        t: ["I'd like to walk around and try the food.", "I want to visit a museum and a park."],
        x: [["swim and eat ice cream", -1], ["go shopping and see the view", -1]]
      },
      {
        c: "Now, how would you like to travel there: by plane, by train, or on a long road trip?",
        he: "איך תיסעו? למשל: By plane, please. או By train. או A road trip!",
        a: [
          { k: ["plane planes fly flying flight airplane aeroplane"], r: "By plane! Fast and easy. And I can fly right next to you." },
          { k: ["train trains"], r: "By train! You can watch the views from the window." },
          { k: ["car cars road drive driving bus"], r: "A road trip! Great music and lots of stops on the way." }
        ],
        o: "Good idea. I'll find the best way for you.",
        t: ["By plane, please.", "By train, I love the views.", "A long road trip!"],
        x: [["by plane", 0], ["i want to fly", 0], ["train please", 1], ["road trip with car", 2], ["bus", 2], ["boat", -1]]
      },
      {
        c: "Every trip has a surprise! Imagine it rains all day on your second day. What would you do instead?",
        he: "יורד גשם כל היום. מה תעשו? למשל: I'd go to a museum or a cinema.",
        a: [],
        o: "Smart plan! A rainy day can still be a good day.",
        t: ["I'd go to a museum or a cinema.", "I would stay in and play games."],
        x: [["i will sleep all day", -1], ["go to the mall", -1]]
      },
      {
        c: "Last thing. What souvenir would you bring home from this trip, and why?",
        he: "איזו מזכרת תביאו מהטיול ולמה? למשל: A T-shirt, because I love clothes.",
        a: [],
        o: "What a lovely souvenir! I'll put it on your list.",
        t: ["A T-shirt, because I love clothes.", "A small painting for my wall."],
        x: [["magnet for the fridge", -1], ["chocolate because its tasty", -1]]
      }
    ],
    end: "Your trip is ready! Thank you for choosing Coco Travel. Have a fabulous time!"
  },
  {
    id: "sbp03", title: "Coco's Got Talent",
    he: "קוקו שופטת בתחרות כישרונות ואתם עולים לבמה",
    turns: [
      {
        c: "Welcome to Coco's Got Talent! I'm one of the judges today. What are you going to do on stage for us?",
        he: "מה תעשו על הבמה? למשל: I'm going to sing a song. או I'm going to dance.",
        a: [],
        o: "Ooh, I can't wait to see it!",
        t: ["I'm going to sing a song.", "I'm going to do magic tricks.", "I'm going to dance."],
        x: [["i will play guitar", -1], ["a funny comedy show", -1]]
      },
      {
        c: "How long have you been practising for the show?",
        he: "כמה זמן אתם מתאמנים? למשל: I've been practising for two months. או For a week.",
        a: [
          { k: ["year years month months long ages"], r: "Wow, that's a long time! All that practice will show." },
          { k: ["day days week weeks hour hours yesterday today morning night"], r: "Not long! Some people are amazing on the first try." }
        ],
        o: "Great! I'm sure you'll be fabulous on stage.",
        t: ["I've been practising for two months.", "I've been practising for a week."],
        x: [["i have been practising for 2 years", 0], ["for three weeks", 1], ["since yesterday", 1], ["a long time", 0], ["only 2 days", 1], ["i didn't practice", -1]]
      },
      {
        c: "Some performers get nervous before they go on stage. How do you feel right now: nervous or excited?",
        he: "איך אתם מרגישים? למשל: I'm a bit nervous. או I'm really excited!",
        a: [
          { k: ["nervous scared afraid stress stressed worried shy"], n: "not", r: "That's normal! Take a deep breath. Even I shake my feathers before a show." },
          { k: ["excited ready happy great good confident calm fine okay ok not_nervous not_scared"], r: "Love that energy! The audience will feel it too." }
        ],
        o: "Whatever you feel, you'll do great. Just enjoy it!",
        t: ["I'm a bit nervous.", "I'm really excited!"],
        x: [["i am very nervous", 0], ["excited", 1], ["i'm not nervous", 1], ["a little scared", 0], ["hungry", -1], ["nervous and excited", 0]]
      },
      {
        c: "You're on stage now, and suddenly the music stops! What would you do?",
        he: "המוזיקה נעצרת באמצע. מה הייתם עושים? למשל: I'd keep going without music.",
        a: [],
        o: "Ha! Problems on stage happen to everyone, even to big stars.",
        t: ["I'd keep going without the music.", "I would tell a joke and smile."],
        x: [["i would continue to dance", -1], ["i will stop and wait", -1]]
      },
      {
        c: "The judges loved it! If you won, which prize would you choose: a trip abroad, or a day in a real recording studio?",
        he: "איזה פרס הייתם בוחרים? למשל: I'd choose the trip. או The recording studio, please!",
        a: [
          { k: ["trip abroad travel fly plane holiday"], r: "A trip abroad! Fabulous. Don't forget your sunglasses." },
          { k: ["studio record recording song songs music"], r: "A real studio! Maybe I'll hear your song on the radio one day." }
        ],
        o: "Great choice! You deserve something special.",
        t: ["I'd choose the trip abroad.", "The recording studio, please!"],
        x: [["the trip", 0], ["i want to travel", 0], ["studio", 1], ["record my songs", 1], ["money", -1]]
      }
    ],
    end: "What a show! You're a star. Thank you, and see you at the final!"
  },
  {
    id: "sbp04", title: "The missing crackers",
    he: "הבלשית קוקו חוקרת: מי לקח את הקרקרים מהחנות?",
    turns: [
      {
        c: "Detective Coco here! Someone took my crackers from the shop this morning. What were you doing at about ten o'clock?",
        he: "מה עשיתם בעשר בבוקר? למשל: I was having breakfast. או I was walking to school.",
        a: [],
        o: "Thank you. I'm writing that in my detective notebook.",
        t: ["I was having breakfast.", "I was walking to school.", "I was still sleeping."],
        x: [["i was sleep", -1], ["i was in class", -1]]
      },
      {
        c: "Here's a clue: there were green feathers next to the empty box. Do you think another parrot did it, or someone who wanted to trick me?",
        he: "תוכי אחר או מישהו שרצה לבלבל? למשל: Another parrot did it. או Someone wanted to trick you.",
        a: [
          { k: ["parrot parrots bird birds"], r: "Another parrot! I have a cousin who loves crackers. Hmm." },
          { k: ["trick someone somebody person human people"], r: "A trick! Clever. Anyone can drop a few feathers." }
        ],
        o: "Interesting theory! A good detective listens to every idea.",
        t: ["I think another parrot did it.", "Someone wanted to trick you."],
        x: [["another parrot", 0], ["i think its a bird", 0], ["someone tricked you", 1], ["a person", 1], ["the cat", -1]]
      },
      {
        c: "Now I need to question the suspects. What's one good question I should ask them?",
        he: "איזו שאלה כדאי לשאול את החשודים? למשל: Where were you at ten o'clock?",
        a: [],
        o: "Ooh, that's a sharp question. Very detective!",
        t: ["Where were you at ten o'clock?", "Why are there crumbs on your shirt?", "Do you like crackers?"],
        x: [["what did you do this morning", -1], ["who was with you", -1]]
      },
      {
        c: "Big news! The shop camera shows someone carrying a big bag. Should I watch the camera again, or ask the neighbours first?",
        he: "לבדוק שוב את המצלמה או לשאול את השכנים? למשל: Watch the camera again. או Ask the neighbours.",
        a: [
          { k: ["camera cameras video film watch check"], r: "Good plan. The camera never lies!" },
          { k: ["neighbour neighbours neighbor neighbors people ask"], r: "Smart. Neighbours always notice things." }
        ],
        o: "Good thinking. Let's do both, to be sure.",
        t: ["Watch the camera again.", "Ask the neighbours first."],
        x: [["check the camera", 0], ["watch the video again", 0], ["ask the neighbors", 1], ["the neighbours", 1], ["i dont know", -1]]
      },
      {
        c: "Mystery solved! It was my cousin Kiki. She had found my key before I woke up. What should she do to say sorry?",
        he: "מה קיקי צריכה לעשות כדי להתנצל? למשל: She should buy you new crackers.",
        a: [],
        o: "Perfect! Kiki will say sorry, and then we'll share the crackers.",
        t: ["She should buy you new crackers.", "She should help in the shop for a week."],
        x: [["say sorry and give back", -1], ["clean the shop", -1]]
      }
    ],
    end: "Case closed! You're a brilliant detective. Thank you, partner!"
  },
  {
    id: "sbp05", title: "A park for the town",
    he: "ראש העיר קוקו בונה פארק חדש ומבקשת מכם רעיונות",
    turns: [
      {
        c: "Hello! I'm Mayor Coco. The town is building a new park, and I need young people's ideas. What's the first thing a great park needs?",
        he: "מה פארק טוב צריך קודם כול? למשל: It needs lots of trees and shade.",
        a: [],
        o: "Good point! I'm adding it to the plan.",
        t: ["It needs lots of trees and shade.", "A great park needs a skate park."],
        x: [["many benches", -1], ["a place for dogs", -1]]
      },
      {
        c: "Some people want a quiet park with gardens. Others want a sports park with courts. Which would you choose, and why?",
        he: "פארק שקט או פארק ספורט? למשל: A quiet park, because I like to relax.",
        a: [
          { k: ["both mix half"], r: "Both! Half quiet, half sporty. That's clever planning." },
          { k: ["quiet garden gardens flower flowers relax calm peace read"], r: "A quiet garden! A place to relax and read. Lovely." },
          { k: ["sport sports court courts basketball football soccer tennis skate run"], r: "A sports park! Lots of energy and games. Great." }
        ],
        o: "That's a good reason. I'll think about it.",
        t: ["A quiet park, because I like to relax.", "A sports park, because I love basketball.", "A bit of both!"],
        x: [["both", 0], ["a bit of both", 0], ["quiet one because i like to read", 1], ["sports because i love basketball", 2], ["a zoo", -1]]
      },
      {
        c: "The more ideas we have, the better the park will be! What would make the park fun in the evening?",
        he: "מה יהפוך את הפארק לכיפי בערב? למשל: Lights in the trees and a night market.",
        a: [],
        o: "Interesting! I hadn't thought about the park in the evening.",
        t: ["Lights in the trees and a night market.", "An outdoor cinema every Thursday."],
        x: [["music and food trucks", -1], ["a big fire", -1]]
      },
      {
        c: "Here's a problem: there isn't enough money for everything. Should we buy fewer things of better quality, or more things that are cheaper?",
        he: "פחות דברים איכותיים או יותר דברים זולים? למשל: Fewer things of better quality.",
        a: [
          { k: ["fewer less quality"], r: "Quality first! Things that last for years. Wise." },
          { k: ["more cheap cheaper lots many"], r: "More things! Then there's something for everyone." },
          { k: ["better good strong"], r: "Quality first! Things that last for years. Wise." }
        ],
        o: "Hmm, a tricky choice. I'll talk to the town council about it.",
        t: ["Fewer things of better quality.", "More things, even if they're cheaper."],
        x: [["fewer things but good quality", 0], ["less but better", 0], ["more things cheaper", 1], ["lots of cheap things", 1], ["better ones", 2], ["i dont care", -1]]
      },
      {
        c: "Last question. What should we call the new park, and why?",
        he: "איך נקרא לפארק ולמה? למשל: Sunshine Park, because it's bright and happy.",
        a: [],
        o: "I love it! The council will vote on all the names.",
        t: ["Sunshine Park, because it's bright and happy.", "Green Wings Park, for you, Coco!"],
        x: [["happy park because everyone happy", -1], ["the best park", -1]]
      }
    ],
    end: "Thank you! With young people like you, our town will have the best park ever."
  },
  {
    id: "sbp06", title: "A very old find",
    he: "קוקו מדריכה במוזיאון ומראה לכם ממצא עתיק ומסתורי",
    turns: [
      {
        c: "Welcome to the museum! I'm your guide today. Do you usually enjoy museums, or do you find them a bit boring?",
        he: "אתם נהנים במוזיאונים או שמשעמם לכם? למשל: I really enjoy them. או They're a bit boring.",
        a: [
          { k: ["not_boring"], r: "Great! Then you'll love what I'm about to show you." },
          { k: ["boring bored not no never hate"], n: "not_sure not_know no_idea", r: "Ha, honest! Don't worry, this tour will be different." },
          { k: ["enjoy love like fun interesting yes cool sometimes depends"], r: "Great! Then you'll love what I'm about to show you." }
        ],
        o: "Well, I hope you'll enjoy this one.",
        t: ["I really enjoy them.", "Honestly, they're a bit boring."],
        x: [["yes i love museums", 2], ["boring", 1], ["they are not boring", 0], ["i don't like them", 1], ["depends", 2], ["hello", -1]]
      },
      {
        c: "Look at this! Archaeologists found it near the beach last year. It's a small stone with a hole in it. What do you think people used it for?",
        he: "למה השתמשו באבן? למשל: Maybe they used it for fishing. או I think it was a necklace.",
        a: [],
        o: "That's a clever guess! The experts aren't sure either.",
        t: ["Maybe they used it for fishing.", "I think it was a necklace."],
        x: [["for a game", -1], ["maybe to hold the door", -1]]
      },
      {
        c: "It's about three thousand years old. If you could ask the person who made it one question, what would you ask?",
        he: "איזו שאלה הייתם שואלים את מי שיצר אותה? למשל: Why did you make a hole in it?",
        a: [],
        o: "Ooh, what a question! I'd love to know the answer too.",
        t: ["What was your life like?", "Why did you make a hole in it?"],
        x: [["what is it", -1], ["how did you make it", -1]]
      },
      {
        c: "The museum can show it in a dark room with a story, or in a bright room with lots of facts. Which do you think is better?",
        he: "חדר חשוך עם סיפור או חדר מואר עם עובדות? למשל: A dark room with a story.",
        a: [
          { k: ["dark story stories mystery mysterious"], r: "A dark room with a story! Mysterious and exciting." },
          { k: ["bright light fact facts information"], r: "Bright and full of facts! People love learning the details." }
        ],
        o: "Good idea. I'll tell the museum director.",
        t: ["A dark room with a story.", "A bright room with lots of facts."],
        x: [["dark room with story", 0], ["the story one", 0], ["bright room", 1], ["with facts", 1], ["no room", -1]]
      },
      {
        c: "Our last stop! If you could work with archaeologists for one day, where in the world would you like to dig, and why?",
        he: "איפה בעולם הייתם רוצים לחפור עם ארכיאולוגים, ולמה? למשל: In Egypt, because I want to find a pyramid.",
        a: [],
        o: "Ooh, exciting! Don't forget a hat, the sun is strong when you dig.",
        t: ["In Egypt, because I want to find a pyramid.", "Near the beach, because the sea hides old ships."],
        x: [["in greece to find old statues", -1], ["in my garden", -1]]
      }
    ],
    end: "That's the end of our tour. Thank you for your fabulous ideas!"
  },
  {
    id: "sbp07", title: "A storm is coming",
    he: "קוקו מגישת מזג האוויר: סערה בדרך, ואתם מתכוננים",
    turns: [
      {
        c: "Good evening, this is Coco with the weather! A big storm is coming this weekend. Do you enjoy rainy, stormy days, or do you prefer sunshine?",
        he: "אתם אוהבים ימים גשומים וסוערים או מעדיפים שמש? למשל: I love rainy days! או I prefer sunshine.",
        a: [
          { k: ["rain rainy storm storms stormy cold winter thunder cosy cozy"], n: "not_like not_love not_enjoy hate", r: "A storm fan! You'll enjoy this weekend, then. Watch it from a cosy window." },
          { k: ["sun sunny sunshine summer warm hot beach"], r: "A sunshine fan! Don't worry, the sun will be back next week." }
        ],
        o: "Every kind of weather has its fans! This weekend, it's storm time.",
        t: ["I love rainy days!", "I prefer sunshine, to be honest."],
        x: [["i love the rain", 0], ["i like storms", 0], ["sunny days", 1], ["i hate rain i like sun", 1], ["i don't like rain", -1], ["both", -1], ["i don't know", -1]]
      },
      {
        c: "The storm will arrive tomorrow night. What three things would you get ready before it starts?",
        he: "אילו שלושה דברים תכינו לפני הסערה? למשל: A torch, some snacks and a charged phone.",
        a: [],
        o: "Very sensible! You'd be ready for anything.",
        t: ["A torch, some snacks and a charged phone.", "Candles, water and a good book."],
        x: [["food water and blanket", -1], ["my phone charger", -1]]
      },
      {
        c: "The power might go off for a whole evening. Would you rather play board games by torchlight or go to sleep early?",
        he: "משחקי קופסה לאור פנס או ללכת לישון מוקדם? למשל: Board games by torchlight!",
        a: [
          { k: ["game games board play cards"], r: "Board games by torchlight! Cosy and fun." },
          { k: ["sleep sleeping bed early"], r: "Early to bed! A storm sounds lovely under a warm blanket." }
        ],
        o: "That sounds like a good plan for a stormy night.",
        t: ["Board games by torchlight!", "I'd go to sleep early."],
        x: [["board games", 0], ["play cards with torch", 0], ["go to sleep", 1], ["i will sleep early", 1], ["read a book", -1]]
      },
      {
        c: "Weather scientists say storms are getting stronger around the world. Why do you think that's happening?",
        he: "למה לדעתכם הסערות מתחזקות? למשל: Because the planet is getting warmer.",
        a: [],
        o: "Interesting answer. It's a big question for the whole planet.",
        t: ["Because the planet is getting warmer.", "I think it's because of pollution."],
        x: [["because global warming", -1], ["i really dont know", -1]]
      },
      {
        c: "After the storm, the beach is full of rubbish from the sea. What could young people do to help?",
        he: "מה בני נוער יכולים לעשות כדי לעזור? למשל: We could organise a beach clean-up.",
        a: [],
        o: "Brilliant! Small actions can make a big difference.",
        t: ["We could organise a beach clean-up.", "We could tell everyone on the school radio."],
        x: [["clean the beach together", -1], ["make posters for people", -1]]
      }
    ],
    end: "That's all from the weather desk. Stay safe and dry this weekend! Goodbye!"
  },
  {
    id: "sbp08", title: "The escape room",
    he: "חדר בריחה של קוקו: פותרים רמזים ויוצאים בזמן",
    turns: [
      {
        c: "Welcome to Coco's Escape Room! You have thirty minutes to get out. Do you usually prefer working alone or in a team?",
        he: "אתם מעדיפים לבד או בקבוצה? למשל: I prefer working alone. או In a team!",
        a: [
          { k: ["alone myself own solo"], r: "Alone! Brave. You'll get all the glory." },
          { k: ["team group friend friends together"], r: "A team! Good. More brains mean more ideas." }
        ],
        o: "Okay! Today it's you and me anyway.",
        t: ["I prefer working alone.", "In a team, with friends."],
        x: [["alone", 0], ["by myself", 0], ["in a team", 1], ["with my friends", 1], ["i dont know", -1]]
      },
      {
        c: "First clue: the door needs a code with four numbers. There's a calendar on the wall with one day circled. What would you do?",
        he: "מה הייתם עושים עם הלוח שנה? למשל: I'd try the date on the calendar.",
        a: [],
        o: "Good thinking! Let's try it.",
        t: ["I'd try the date on the calendar.", "I would look behind the calendar."],
        x: [["use the date for the code", -1], ["take the calendar down", -1]]
      },
      {
        c: "It worked! Now you're stuck again. You can ask me one polite question for help. How would you ask it?",
        he: "שאלו בנימוס שאלה עקיפה, למשל: Could you tell me where the key is?",
        a: [],
        o: "What a polite question! Here's your hint: look under the chair.",
        t: ["Could you tell me where the key is?", "Do you know what the next clue is?"],
        x: [["can you help me please", -1], ["where is the key", -1]]
      },
      {
        c: "Under the chair there's a box with two buttons, a red one and a blue one. Which one would you press?",
        he: "איזה כפתור תלחצו? למשל: The red one. או The blue one.",
        a: [
          { k: ["red"], r: "Red! Click. The box opens, and there's a golden key inside." },
          { k: ["blue"], r: "Blue! Click. The box opens, and there's a golden key inside." },
          { k: ["both neither none"], r: "Careful thinking! Look, a golden key was hidden under the box." }
        ],
        o: "Brave choice! The box opens, and there's a golden key inside.",
        t: ["The red one.", "The blue one.", "Both at the same time!"],
        x: [["the red one", 0], ["blue", 1], ["both of them", 2], ["green", -1], ["red button", 0]]
      },
      {
        c: "You escaped with two minutes left! What was the hardest part, and what would you do differently next time?",
        he: "מה היה הכי קשה ומה תעשו אחרת? למשל: The code was hard. Next time I'd work faster.",
        a: [],
        o: "Great answer! Next time you'll be even faster.",
        t: ["The code was hard. Next time I'd work faster.", "The buttons! I'd think more carefully."],
        x: [["the calendar was hard", -1], ["nothing it was easy", -1]]
      }
    ],
    end: "Congratulations, you escaped! You're officially an escape room champion."
  },
  {
    id: "sbp09", title: "The lost suitcase",
    he: "בדלפק המזוודות האבודות בשדה התעופה: מתארים את התיק שלכם",
    turns: [
      {
        c: "Hello, this is the lost luggage desk at the airport. I'm sorry your bag didn't arrive! Could you describe it for me?",
        he: "תארו את התיק. סדר התארים: גודל, צבע, שם עצם. למשל: It's a big black suitcase.",
        a: [],
        o: "Thank you, that helps a lot. I'm checking the computer now.",
        t: ["It's a big black suitcase.", "It's a small red backpack with white stripes."],
        x: [["blue bag big", -1], ["it is a black small suitcase", -1]]
      },
      {
        c: "There are two bags here that look similar. One has a small old lock, and the other has a long green ribbon. Is either of them yours?",
        he: "אחד מהם שלכם? למשל: The one with the lock. או The one with the ribbon. או Neither of them.",
        a: [
          { k: ["lock"], r: "The one with the lock! Let me bring it over." },
          { k: ["ribbon green"], r: "The one with the ribbon! Let me bring it over." },
          { k: ["neither not no none"], n: "not_sure not_know no_idea", r: "Hmm, neither of them. Don't worry, we'll keep looking." }
        ],
        o: "Okay, I'll check both bags carefully for you.",
        t: ["The one with the lock.", "The one with the green ribbon.", "Neither of them, sorry."],
        x: [["the one with the lock", 0], ["ribbon", 1], ["green one", 1], ["neither", 2], ["no its not mine", 2], ["maybe", -1]]
      },
      {
        c: "While we look, could you tell me what the most important thing in your bag is?",
        he: "מה הדבר הכי חשוב בתיק? למשל: My favourite hoodie is in it.",
        a: [],
        o: "I understand. We'll do our best to find it.",
        t: ["My favourite hoodie is in it.", "My headphones and my books."],
        x: [["my clothes", -1], ["the present for my friend", -1]]
      },
      {
        c: "If your bag doesn't arrive until tomorrow, what will you need for tonight?",
        he: "מה תצטרכו להלילה? למשל: I'll need a toothbrush and a T-shirt.",
        a: [],
        o: "Good thinking. We can give you a small travel kit too.",
        t: ["I'll need a toothbrush and a T-shirt.", "I will need my phone charger."],
        x: [["pyjamas and toothbrush", -1], ["nothing i am fine", -1]]
      },
      {
        c: "Good news, we found it! It was on a plane to Rome. How do you think that happened?",
        he: "איך זה קרה לדעתכם? למשל: Maybe someone made a mistake with the label.",
        a: [],
        o: "Ha! Maybe your bag wanted a holiday in Italy.",
        t: ["Maybe someone made a mistake with the label.", "I think my bag wanted a holiday!"],
        x: [["somebody took the wrong bag", -1], ["the computer was wrong", -1]]
      }
    ],
    end: "Here's your bag! Sorry for the wait, and enjoy your trip."
  },
  {
    id: "sbp10", title: "The sleep scientist",
    he: "דוקטור קוקו חוקרת שינה ושואלת אתכם על הרגלי השינה של בני נוער",
    turns: [
      {
        c: "Hello! I'm Doctor Coco, a sleep scientist. I'm doing a study about teenagers and sleep. Do you feel tired in the mornings on school days?",
        he: "אתם עייפים בבקרים? למשל: Yes, always! או Sometimes. או No, never.",
        a: [
          { k: ["sometimes depends"], r: "Sometimes! That's very normal for teenagers." },
          { k: ["yes always tired sleepy every exhausted"], n: "not never", r: "You're not alone! Most teenagers feel the same." },
          { k: ["no not never"], n: "not_sure not_know no_idea", r: "Lucky you! You must have good sleep habits." }
        ],
        o: "Thank you. Every answer helps my study.",
        t: ["Yes, always!", "Sometimes, it depends.", "No, I usually feel fine."],
        x: [["yes always", 1], ["sometimes", 0], ["no never", 2], ["im not tired", 2], ["i am so tired", 1], ["i love school", -1]]
      },
      {
        c: "Animals sleep in funny ways. Bats sleep upside down, and horses can sleep standing up! Which animal's way of sleeping would you like to try, and why?",
        he: "באיזו דרך של חיה הייתם רוצים לישון? למשל: Like a cat, because cats sleep all day in the sun.",
        a: [],
        o: "Ha! I'm writing that in my report. Parrots just fluff up their feathers.",
        t: ["Like a cat, because cats sleep all day in the sun.", "Like a bat, upside down! It sounds so funny."],
        x: [["like a horse standing", -1], ["a bear because they sleep all winter", -1]]
      },
      {
        c: "If you could choose what to dream about tonight, what would your dream be about?",
        he: "על מה הייתם רוצים לחלום הלילה? למשל: I would dream about flying over the sea.",
        a: [],
        o: "What a lovely dream! I hope it comes to you tonight.",
        t: ["I would dream about flying over the sea.", "A dream where I can talk to animals."],
        x: [["about winning the world cup", -1], ["i dream about pizza", -1]]
      },
      {
        c: "Some people say screens before bed are bad for sleep. Would you try a week with no phone after nine o'clock?",
        he: "הייתם מנסים שבוע בלי טלפון אחרי תשע? למשל: Yes, I'd try it. או No way, that's too hard!",
        a: [
          { k: ["why_not"], r: "Brave! I think you'll sleep better after a few days." },
          { k: ["no not never impossible"], n: "not_sure not_know no_idea", r: "Ha, honest answer! It's a hard challenge for most people." },
          { k: ["yes try okay ok maybe sure"], n: "not_sure", r: "Brave! I think you'll sleep better after a few days." }
        ],
        o: "Hmm, it's a big challenge. Think about it.",
        t: ["Yes, I'd try it.", "No way, that's too hard!"],
        x: [["why not", 0], ["no way", 1], ["i would not", 1], ["yes i will try", 2], ["maybe", 2], ["what", -1]]
      },
      {
        c: "Last question for my study. For one night, would you rather sleep in a hammock in a forest, or in a giant bed in a castle? Why?",
        he: "ערסל ביער או מיטת ענק בטירה? למשל: A hammock in a forest, because I love nature.",
        a: [
          { k: ["hammock forest tree trees nature outside"], r: "A hammock in the trees! Just like me. Parrots love sleeping up high." },
          { k: ["castle giant king queen princess prince"], r: "A giant bed in a castle! Very royal. I'll bring you a golden pillow." }
        ],
        o: "That sounds like a perfect place to dream!",
        t: ["A hammock in a forest, because I love nature.", "A giant bed in a castle, because it's so comfortable."],
        x: [["the forest", 0], ["in the castle", 1], ["giant bed please", 1], ["hammock", 0], ["my own bed", -1], ["i don't know", -1], ["both", -1]]
      }
    ],
    end: "Thank you for helping my study! Sleep well, and sweet dreams."
  },
  {
    id: "sbp11", title: "Coco's Kitchen",
    he: "בתוכנית הבישול של קוקו אתם השף וממציאים מנה חדשה",
    turns: [
      {
        c: "Welcome to Coco's Kitchen, the cooking show! Today you're my guest chef. What's a dish that you really enjoy eating?",
        he: "איזו מנה אתם הכי אוהבים? למשל: I really enjoy pizza. או I love shakshuka with fresh bread.",
        a: [],
        o: "Ooh, delicious! You have great taste.",
        t: ["I really enjoy pizza.", "I love shakshuka with fresh bread."],
        x: [["pasta with cheese", -1], ["my favourite is sushi", -1]]
      },
      {
        c: "Today's challenge is to mix two different kitchens, like Italian and Israeli food. Which two would you mix?",
        he: "אילו שני מטבחים תערבבו? למשל: I'd mix Japanese and Israeli food.",
        a: [],
        o: "What a fabulous mix! I can almost taste it.",
        t: ["I'd mix Japanese and Israeli food.", "Mexican and Italian, like a pizza taco!"],
        x: [["chinese and american", -1], ["indian food and french food", -1]]
      },
      {
        c: "Now, what's the name of your new dish, and what's in it?",
        he: "איך קוראים למנה ומה יש בה? למשל: Sushi falafel, with rice and tahini.",
        a: [],
        o: "Ooh, the audience is already hungry!",
        t: ["Sushi falafel, with rice and tahini.", "Pizza taco, with cheese and spicy beans."],
        x: [["super burger with avocado", -1], ["i call it coco special", -1]]
      },
      {
        c: "Should your new dish be spicy, sweet, or something in between?",
        he: "חריף, מתוק או באמצע? למשל: Spicy, please! או Sweet. או Something in between.",
        a: [
          { k: ["spicy hot chilli chili pepper"], r: "Spicy! Get the water ready, everyone." },
          { k: ["sweet sugar honey chocolate"], r: "Sweet! A dessert-style surprise. Nice." },
          { k: ["between middle little both bit medium"], r: "A little of both! Balanced and clever." }
        ],
        o: "Good choice. The flavour is everything.",
        t: ["Spicy, please!", "Sweet, like a dessert.", "Something in between."],
        x: [["spicy", 0], ["very hot", 0], ["sweet please", 1], ["in between", 2], ["salty", -1], ["a bit of both", 2]]
      },
      {
        c: "The judges tasted your dish, and they want it in restaurants around the world! How does that make you feel?",
        he: "איך זה גורם לכם להרגיש? למשל: I feel so proud and happy!",
        a: [],
        o: "Fabulous! You're a real chef now.",
        t: ["I feel so proud and happy!", "That's amazing, I can't believe it!"],
        x: [["very very happy", -1], ["i feel like a star", -1]]
      }
    ],
    end: "That's all for today on Coco's Kitchen. Thank you, chef! Bye!"
  },
  {
    id: "sbp12", title: "The robot lab",
    he: "במעבדת הרובוטים של קוקו בונים יחד רובוט עוזר לבני נוער",
    turns: [
      {
        c: "Welcome to Coco's Robot Lab! We're building a helper robot for teenagers. What's one job you'd like it to do for you?",
        he: "איזו עבודה הרובוט יעשה בשבילכם? למשל: I'd like it to tidy my room.",
        a: [],
        o: "Great job for a robot! I'm adding it to the design.",
        t: ["I'd like it to tidy my room.", "It could help me with my homework."],
        x: [["make my bed", -1], ["cook breakfast for me", -1]]
      },
      {
        c: "Should our robot look like a human, like a machine, or maybe like an animal?",
        he: "איך הרובוט ייראה? למשל: Like a human. או Like a machine. או Like an animal.",
        a: [
          { k: ["animal animals dog cat parrot bird pet"], r: "Like an animal! Maybe a parrot? Just saying." },
          { k: ["human person people"], r: "Like a human! Friendly and easy to talk to." },
          { k: ["machine metal box robot"], r: "Like a real machine! Classic and cool." }
        ],
        o: "Interesting idea! It will be one of a kind.",
        t: ["Like a human.", "Like a cool machine.", "Like an animal, maybe a dog."],
        x: [["a dog", 0], ["like a parrot like you", 0], ["human", 1], ["like a person", 1], ["machine", 2], ["metal box", 2], ["invisible", -1]]
      },
      {
        c: "Robots can do lots of things, but should they ever do our homework for us? Why, or why not?",
        he: "רובוט צריך להכין לנו שיעורי בית? למשל: No, because we need to learn. או Yes, it would save time.",
        a: [
          { k: ["why_not"], r: "Ha! It would certainly save a lot of time." },
          { k: ["no not never"], n: "not_sure not_know no_idea", r: "Fair point! Learning is our job, not the robot's." },
          { k: ["yes sure sometimes maybe"], n: "not_sure", r: "Ha! It would certainly save a lot of time." }
        ],
        o: "That's an interesting way to think about it.",
        t: ["No, because we need to learn.", "Yes, it would save so much time."],
        x: [["yes why not", 0], ["no because we need to learn", 1], ["never", 1], ["yes it would be great", 2], ["maybe the easy parts", 2], ["robots are cool", -1]]
      },
      {
        c: "Our robot has a problem: it breaks a lot. What should we do if it stops working in the middle of a job?",
        he: "מה נעשה אם הרובוט נתקע באמצע? למשל: We should have a big red reset button.",
        a: [],
        o: "Smart! Every inventor needs a backup plan.",
        t: ["We should have a big red reset button.", "We could call a robot doctor."],
        x: [["turn it off and on", -1], ["fix it with tools", -1]]
      },
      {
        c: "Last thing! Robots are getting smarter every year. Do you think they will ever be better friends than humans?",
        he: "רובוטים יהיו חברים טובים יותר מבני אדם? למשל: No, never. או Maybe one day.",
        a: [
          { k: ["no not never"], n: "not_sure not_know no_idea", r: "I agree! Nothing beats a real friend. Except maybe a parrot." },
          { k: ["yes maybe possible perhaps"], r: "Maybe! The future could be full of surprises." }
        ],
        o: "Hmm, a big question. People will argue about it for years.",
        t: ["No, never. Real friends are better.", "Maybe one day."],
        x: [["no never", 0], ["i don't think so", 0], ["yes maybe", 1], ["maybe one day", 1], ["robots", -1]]
      }
    ],
    end: "Our robot is ready! Thank you for your help, fellow inventor."
  },
  {
    id: "sbp13", title: "The time capsule",
    he: "ממלאים עם קוקו קפסולת זמן שתיפתח בעוד עשרים שנה",
    turns: [
      {
        c: "Hi! The Coco Club is making a time capsule, and we'll open it in twenty years. What's one thing from today you'd put inside, and why?",
        he: "מה תכניסו לקפסולה ולמה? למשל: A phone, because everyone uses one today.",
        a: [],
        o: "Ooh, great choice! People in the future will love it.",
        t: ["A phone, because everyone uses one today.", "My favourite T-shirt, because it's so me."],
        x: [["a photo of my class", -1], ["a song on a usb", -1]]
      },
      {
        c: "We're also writing letters to our future selves. What do you think you'll be doing in twenty years?",
        he: "מה תעשו בעוד עשרים שנה? למשל: I think I'll be working as a doctor.",
        a: [],
        o: "That sounds exciting! I hope it comes true.",
        t: ["I think I'll be working as a doctor.", "I'll probably be travelling the world."],
        x: [["i will be a teacher", -1], ["maybe live in another country", -1]]
      },
      {
        c: "How different will life be in twenty years? Very different, or quite similar to now?",
        he: "החיים יהיו שונים מאוד או דומים? למשל: Very different! או Quite similar to now.",
        a: [
          { k: ["similar same not"], n: "not_similar not_the_same not_sure not_know no_idea", r: "Similar! Maybe some things never change, like good friends." },
          { k: ["different very totally completely change not_similar not_the_same"], r: "Very different! Flying cars, maybe? I'd finally have company in the sky." }
        ],
        o: "Interesting! Nobody really knows, and that's exciting.",
        t: ["Very different, I think!", "Quite similar to now."],
        x: [["very different", 1], ["it will be similar", 0], ["not so different", 0], ["everything will change", 1], ["robots", -1]]
      },
      {
        c: "Which invention do you think people will have in twenty years that we don't have now?",
        he: "איזו המצאה תהיה בעוד עשרים שנה? למשל: I think people will have flying cars.",
        a: [],
        o: "What an idea! I'm adding it to our predictions.",
        t: ["I think people will have flying cars.", "Robots will cook for everyone."],
        x: [["teleport machine", -1], ["phones in our glasses", -1]]
      },
      {
        c: "When you open the capsule one day, what would you like to remember about life today?",
        he: "מה הייתם רוצים לזכור מהחיים של היום? למשל: I'd like to remember my friends.",
        a: [],
        o: "That's lovely. The capsule will keep it safe for you.",
        t: ["I'd like to remember my friends.", "How much fun we had together."],
        x: [["the music we listen", -1], ["how life was simple", -1]]
      }
    ],
    end: "The capsule is closed! See you in twenty years, future friend."
  },
  {
    id: "sbp14", title: "Before the big final",
    he: "המאמנת קוקו מכינה את הקבוצה לגמר הגדול, ואתם העוזרים",
    turns: [
      {
        c: "Hi, I'm Coach Coco! Our school team plays in the final tomorrow. Which sport do you think is the most exciting to watch, and why?",
        he: "איזה ענף ספורט הכי מרגש לראות? למשל: Basketball, because it's so fast.",
        a: [],
        o: "Good choice! It always gets my feathers going.",
        t: ["I think football is the most exciting.", "Basketball, because it's so fast."],
        x: [["tennis is the best", -1], ["swimming because its fast", -1]]
      },
      {
        c: "The night before a big game, what's the best thing to do: go to bed early, or practise one more time?",
        he: "לישון מוקדם או להתאמן עוד פעם? למשל: Go to bed early. או Practise one more time.",
        a: [
          { k: ["bed sleep sleeping early rest relax"], r: "Rest it is! A fresh mind plays better." },
          { k: ["practice practise train training more"], r: "One more practice! You really want to win." }
        ],
        o: "Good idea. Every player has their own way.",
        t: ["Go to bed early.", "Practise one more time."],
        x: [["go to bed early", 0], ["sleep", 0], ["practise more", 1], ["practice one more time", 1], ["eat pasta", -1]]
      },
      {
        c: "Oh no! Our best player is away on a trip and can't play tomorrow. What should the team do?",
        he: "השחקנית הכי טובה לא תגיע. מה הקבוצה צריכה לעשות? למשל: We should stay calm and play as a team.",
        a: [],
        o: "Wise words, coach. I mean, assistant coach!",
        t: ["We should stay calm and play as a team.", "Someone new should get a chance."],
        x: [["find another player", -1], ["practise harder", -1]]
      },
      {
        c: "It's half time and we're losing two nil. What would you say to the team to make them believe again?",
        he: "מה תגידו לקבוצה במחצית? למשל: Come on, we can still do this!",
        a: [],
        o: "Wow, I feel ready to play myself! Great speech.",
        t: ["Come on, we can still do this!", "Don't give up, let's play together!"],
        x: [["we are the best team", -1], ["just have fun guys", -1]]
      },
      {
        c: "We won, three goals to two! What's the best way to celebrate with the team?",
        he: "איך כדאי לחגוג עם הקבוצה? למשל: Pizza and music for everyone!",
        a: [],
        o: "Fabulous! And I'll bring the crackers.",
        t: ["Pizza and music for everyone!", "A big party at the school."],
        x: [["go to the beach together", -1], ["dance and sing", -1]]
      }
    ],
    end: "What a match! Thank you, assistant coach. See you at the next game!"
  },
  {
    id: "sbp15", title: "Pets at school?",
    he: "מועדון הוויכוחים של קוקו: האם מותר להביא חיות מחמד לבית הספר?",
    turns: [
      {
        c: "Welcome to the Debate Club! Today's topic is: students should be allowed to bring pets to school. Are you for or against?",
        he: "אתם בעד או נגד? למשל: I'm for it! או I'm against it.",
        a: [
          { k: ["against not no disagree"], n: "not_sure not_know no_idea", r: "Against! Okay, then you'll need some strong reasons." },
          { k: ["for agree yes love great"], r: "For! Pets at school, how fun. Let's hear why." }
        ],
        o: "Interesting! Let's see where your reasons take us.",
        t: ["I'm for it!", "I'm against it."],
        x: [["i am against", 0], ["no pets at school", 0], ["for", 1], ["yes i agree", 1], ["i have a cat", -1]]
      },
      {
        c: "Give me your best reason. Why do you think so?",
        he: "מה הנימוק הכי טוב שלכם? למשל: Pets make students calm and happy.",
        a: [],
        o: "That's a strong reason! The judges are nodding.",
        t: ["Pets make students calm and happy.", "Some students are allergic, and pets are noisy."],
        x: [["because animals are cute", -1], ["dogs make noise in class", -1]]
      },
      {
        c: "A good debater understands the other side too. What's the best argument against your opinion?",
        he: "מה הטיעון הכי טוב של הצד השני? למשל: Pets can be noisy and messy.",
        a: [],
        o: "Very fair! You can see both sides of the debate.",
        t: ["Pets can be noisy and messy.", "Pets help some students feel less stressed."],
        x: [["some kids are scared of dogs", -1], ["pets are fun", -1]]
      },
      {
        c: "Imagine the school agrees to try it for one day. Which animal would be the best class pet, and which would be a disaster?",
        he: "איזו חיה תהיה הכי טובה ואיזו אסון? למשל: A fish is best, and a goat is a disaster.",
        a: [],
        o: "Ha! I can just imagine that day at school.",
        t: ["A fish is best, and a goat is a disaster.", "A rabbit would be great, but a parrot would be too loud!"],
        x: [["cat good and snake bad", -1], ["hamster is the best", -1]]
      },
      {
        c: "Final question. Has this debate changed your mind at all?",
        he: "הוויכוח שינה את דעתכם? למשל: Yes, a little. או No, I still think the same.",
        a: [
          { k: ["yes little bit changed maybe"], n: "not no", r: "That's what good debates do! They make us think." },
          { k: ["no not same still"], n: "not_sure not_know no_idea", r: "Strong opinions! You stuck to your reasons." }
        ],
        o: "Either way, you argued like a true debater.",
        t: ["Yes, a little.", "No, I still think the same."],
        x: [["yes a little", 0], ["no", 1], ["not really", 1], ["i still think the same", 1], ["maybe a bit", 0], ["cats", -1]]
      }
    ],
    end: "The debate is over! Fabulous arguments. See you at the next Debate Club."
  }
]);
