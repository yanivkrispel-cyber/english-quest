// Talk with Chacho, level a2 (specs/talk.md; format and writing rules: tools/TALK-WRITING.md).
// Mission talks (t<mission id>) first, then the home scenes (s<level><nn>). Check: node test/talk-check.js
window.EQ_TALK = window.EQ_TALK || {};
// Talk to Chacho: A2 mission talks (staging, writer M). Format: app/specs/talk.md, rules: app/tools/TALK-WRITING.md.
window.EQ_TALK.a2 = (window.EQ_TALK.a2 || []).concat([
  {
    id: 'ta2g01', title: 'Guess my animal!',
    he: 'משחק ניחושים עם צ׳אצ׳ו: שואלים שאלות כן/לא עם Do, Is, Can',
    turns: [
      {
        c: "Let's play a game! I am thinking of an animal. Can you ask me a yes or no question?",
        he: 'שאלו שאלת כן/לא, פועל העזר בהתחלה: Can it fly? או Is it big? או Does it eat fish?',
        a: [
          { k: ['fly flies flying'], r: "Can it fly? No, it can't. But it swims very fast!" },
          { k: ['swim swimming swims water sea'], r: "Can it swim? Yes, it can! It loves cold water." },
          { k: ['big small little large tall'], r: "It is not very big. It is about as tall as a chair." },
          { k: ['eat food fish'], r: "It eats fish! Lots and lots of fish, every day." }
        ],
        o: "Ooh! Here is a clue: it is black and white.",
        t: ["Can it fly?", "Is it big?", "Does it eat fish?"],
        x: [["can it fly", 0], ["it can fly", 0], ["does it swim", 1], ["is it big", 2], ["is it small", 2], ["it eat fish", 3], ["does it eat meat", 3], ["is it a dog", -1], ["hello chacho", -1]]
      },
      {
        c: "Here is another clue: it lives in a very cold place. What else do you want to ask me?",
        he: 'שאלו עוד שאלה, למשל: Is it black and white? או Can it walk? או Is it a bird?',
        a: [
          { k: ['black white colour color'], r: "Yes, it is black and white!" },
          { k: ['walk walks legs run running'], r: "It walks on two short legs. It looks very funny!" },
          { k: ['bird feathers wings egg'], r: "Is it a bird? Yes, it is! A bird like me." }
        ],
        o: "Ooh! One more clue: it is a bird, like me.",
        t: ["Is it black and white?", "Can it walk?", "Is it a bird?"],
        x: [["is it black and white", 0], ["what color is it", 0], ["can it walk", 1], ["does it have legs", 1], ["is it a bird", 2], ["does it have wings", 2], ["where it live", -1], ["i don't know", -1]]
      },
      {
        c: "So, can you guess my animal? Is it a penguin, a zebra or a panda?",
        he: 'נחשו איזו חיה: It is a penguin! או I think it is a panda.',
        a: [
          { k: ['penguin pinguin'], r: "Yes, it is a penguin! You are a great detective." },
          { k: ['zebra panda'], r: "Good guess! They are black and white too. But it is a penguin!" }
        ],
        o: "It is a penguin! A bird that swims but can't fly.",
        t: ["Is it a penguin?", "I think it is a zebra.", "Is it a panda?"],
        x: [["is it a penguin", 0], ["penguin", 0], ["i think it is a zebra", 1], ["panda", 1], ["a cat", -1], ["i don't know", -1]]
      },
      {
        c: "Now you think of an animal! Does your animal live on land, in the sea or in the sky?",
        he: 'חשבו על חיה וספרו איפה היא חיה: It lives in the sea. או It lives on land.',
        a: [
          { k: ['sea water ocean river lake'], r: "In the sea! Hmm, my guess is a dolphin. Or a shark!" },
          { k: ['sky air fly flies'], r: "It can fly, like me! My guess is an eagle." },
          { k: ['land ground forest jungle farm house home desert tree'], r: "On land! My guess is a lion. Or maybe a cat!" }
        ],
        o: "Ooh, a mystery animal! We can play again another day.",
        t: ["It lives in the sea.", "It lives on land.", "It flies in the sky."],
        x: [["it live in the sea", 0], ["in the water", 0], ["it flies", 1], ["sky", 1], ["on land", 2], ["it lives in the jungle", 2], ["i don't know", -1]]
      }
    ],
    end: "You ask great questions, like a real quiz star! See you soon!"
  },
  {
    id: 'ta2g02', title: 'Who ate my crackers?',
    he: 'צ׳אצ׳ו מחפש מי אכל לו את הקרקרים: שאלות עם who ומילות יחס בסוף',
    turns: [
      {
        c: "Oh no! Somebody ate my crackers! Who ate them, do you think: the cat, the dog or the mouse?",
        he: 'מי אכל? ענו בעבר: The mouse ate them! או I think the dog ate them.',
        a: [
          { k: ['mouse mice'], r: "The mouse ate them? She is tiny, but she loves crackers!" },
          { k: ['cat'], r: "The cat ate them? Hmm, she is sleeping next to the box!" },
          { k: ['dog'], r: "The dog ate them? Hmm, he looks very busy over there!" }
        ],
        o: "Hmm, a real mystery! Let's look for clues.",
        t: ["The mouse ate them!", "I think the cat ate them.", "The dog ate them."],
        x: [["the mouse ate them", 0], ["mouse", 0], ["the cat eat them", 1], ["i think the dog", 2], ["i ate them", -1], ["nobody", -1]]
      },
      {
        c: "Look, the dog is looking at something under the table. What is he looking at?",
        he: 'על מה הכלב מסתכל? He is looking at the mouse. או He is looking at a cracker.',
        a: [
          { k: ['mouse mice'], r: "At the mouse! And she has crumbs on her face!" },
          { k: ['cracker crumb food box'], r: "At a cracker! There is one left under the table!" },
          { k: ['cat ball toy bone'], r: "Ooh, good guess! And look, a tiny mouse is hiding there too!" }
        ],
        o: "Ooh! Look, a tiny mouse is hiding under the table!",
        t: ["He is looking at the mouse.", "He is looking at a cracker.", "He is looking at his ball."],
        x: [["he is looking at the mouse", 0], ["the mouse", 0], ["he look at cracker", 1], ["at the cat", 2], ["a ball", 2], ["i don't know", -1]]
      },
      {
        c: "It was the mouse! She ate my crackers. What question do you want to ask her?",
        he: 'שאלו את העכברה שאלה: Why did you eat them? או Who helped you?',
        a: [
          { k: ['who'], r: "Who helped you? The mouse says: Nobody! I did it alone." },
          { k: ['why'], r: "Why did you eat them? The mouse says: I was so hungry!" },
          { k: ['how where when what'], r: "Good question! The mouse says: Sorry, Chacho! I can't tell you." }
        ],
        o: "The mouse is too shy to answer. She just says: Sorry!",
        t: ["Why did you eat my crackers?", "Who helped you?", "How did you open the box?"],
        x: [["why did you eat my crackers", 1], ["why you eat them", 1], ["who help you", 0], ["how did you open the box", 2], ["are you hungry", -1], ["sorry", -1]]
      },
      {
        c: "I am not angry. Sharing is nice! Who do you like sharing your snacks with?",
        he: 'עם מי אתם אוהבים לחלוק חטיפים? With my friends. או I share with my family.',
        a: [
          { k: ['everyone everybody'], r: "With everyone! You are very generous." },
          { k: ['friend class'], r: "With your friends! Sharing with friends is the best." },
          { k: ['brother sister mum mom dad family cousin grandma grandpa'], r: "With your family! That is lovely." },
          { k: ['nobody no not alone myself'], n: 'know', r: "Your snacks are just for you! That's fine, snacks are special." }
        ],
        o: "Sharing is caring! I am going to share my crackers with the mouse.",
        t: ["With my friends.", "I like sharing with my family.", "With everybody!"],
        x: [["with my friends", 1], ["i share with my sister", 2], ["everybody", 0], ["i like sharing with everyone", 0], ["nobody", 3], ["i don't like sharing", 3], ["i don't know", -1], ["with my dog", -1]]
      }
    ],
    end: "Mystery solved! The mouse is my new friend now. Bye bye, detective!"
  },
  {
    id: 'ta2g03', title: 'Right now or every day?',
    he: 'מדברים עם צ׳אצ׳ו על מה עושים עכשיו ומה עושים בדרך כלל',
    turns: [
      {
        c: "Right now I am sitting in my shop and eating a cracker. What are you doing right now?",
        he: 'מה אתם עושים עכשיו? עם am + ing: I am talking to you. או I am sitting on my bed.',
        a: [
          { k: ['eat eating ate drink snack'], r: "You are eating? Ooh, save a crumb for me!" },
          { k: ['talk speak learn english chacho chaco chacha chocho chatcho chat chatting'], r: "You are talking to me! And I am listening to you." },
          { k: ['sit sitting sat lie lying bed sofa chair couch relax'], r: "You are sitting and relaxing. Very nice!" }
        ],
        o: "Ooh, nice! I am listening to you right now.",
        t: ["I am talking to you.", "I am sitting on the sofa.", "I am eating a snack."],
        x: [["i am talking to you", 1], ["i talk with chacho", 1], ["i am sitting on my bed", 2], ["i lying on the sofa", 2], ["eating breakfast", 0], ["nothing", -1], ["playing", -1]]
      },
      {
        c: "Every afternoon I make hats. What do you usually do after school?",
        he: 'מה אתם עושים בדרך כלל אחרי בית הספר? I usually play football. או I do my homework.',
        a: [
          { k: ['homework study'], r: "You do your homework. Very hard-working!" },
          { k: ['play football basketball game tennis'], r: "You play! Fun is important after school." },
          { k: ['watch tv phone read book rest relax sleep'], r: "You relax. That is a good idea after a long day." }
        ],
        o: "That sounds like a great afternoon!",
        t: ["I usually do my homework.", "I play football.", "I watch TV."],
        x: [["i usually do my homework", 0], ["i am doing homework", 0], ["i play football", 1], ["i am playing games", 1], ["watch tv", 2], ["i go to my grandma", -1], ["dance class", -1]]
      },
      {
        c: "Is it raining right now, or is the sun shining?",
        he: 'מה מזג האוויר עכשיו? The sun is shining. או It is raining. או It is cloudy.',
        a: [
          { k: ['not no', 'rain raining'], r: "No rain? Good, my feathers are happy!" },
          { k: ['rain raining rainy wet storm'], r: "It is raining? Then I am staying inside today!" },
          { k: ['sun sunny shine shining hot warm nice clear'], n: 'not', r: "The sun is shining! Perfect weather for flying." },
          { k: ['cloud cloudy wind windy cold snow grey gray'], r: "Hmm, grey skies! Then I am wearing my warm scarf." }
        ],
        o: "I hope the weather is nice for you today!",
        t: ["The sun is shining.", "It is raining.", "It is cloudy and cold."],
        x: [["the sun is shining", 2], ["sunny", 2], ["it is raining", 1], ["it rain", 1], ["no it is not raining", 0], ["cloudy and cold", 3], ["i don't know", -1], ["it is not sunny", -1]]
      },
      {
        c: "Every morning I eat crackers for breakfast. What do you usually eat for breakfast?",
        he: 'מה אתם אוכלים בדרך כלל לארוחת בוקר? I usually eat eggs. או I eat cereal with milk.',
        a: [
          { k: ['cereal cornflakes milk yogurt yoghurt granola'], r: "Cereal or yogurt! Quick and tasty." },
          { k: ['egg omelette omelet toast bread cheese sandwich pita pancake shakshuka hummus vegetables salad fruit banana apple'], r: "Yum! That is a much better breakfast than my crackers." },
          { k: ['nothing not no'], n: 'know', r: "Not hungry in the morning? Lots of people are like that." }
        ],
        o: "Yum! That sounds like a great start to the day.",
        t: ["I usually eat cereal.", "I eat eggs and toast.", "I don't eat breakfast."],
        x: [["cereal with milk", 0], ["i am eating eggs every morning", 1], ["toast and cheese", 1], ["i don't eat breakfast", 2], ["nothing", 2], ["i don't know", -1], ["chocolate", -1], ["pizza", -1]]
      }
    ],
    end: "You know when to say I play and I am playing! Talk to you soon!"
  },
  {
    id: 'ta2v01', title: 'Interested in, afraid of',
    he: 'מדברים עם צ׳אצ׳ו על מה מעניין אתכם, למה מקשיבים, ממה אנשים מפחדים ובמה אתם גאים',
    turns: [
      {
        c: "I am very interested in fashion and words. What are you interested in?",
        he: 'במה אתם מתעניינים? I am interested in football. או I am interested in art.',
        a: [
          { k: ['sport football basketball tennis swim swimming soccer dance dancing gym'], r: "You are interested in sport! Great, it keeps you moving." },
          { k: ['music sing singing song guitar piano'], r: "You are interested in music! Me too. I sing every morning." },
          { k: ['art draw drawing paint fashion design'], r: "You are interested in art! We can design hats together." },
          { k: ['science space animal history computer game nature book read'], r: "Ooh! You are interested in learning new things." }
        ],
        o: "Ooh, interesting! You can tell me more about it one day.",
        t: ["I am interested in football.", "I am interested in music.", "I am interested in animals."],
        x: [["i interested in football", 0], ["i am interesting in music", 1], ["drawing", 2], ["i am interested in animals", 3], ["i don't know", -1], ["cars", -1]]
      },
      {
        c: "I always listen to music when I make hats. What do you listen to?",
        he: 'למה אתם מקשיבים? I listen to pop music. או I listen to podcasts.',
        a: [
          { k: ['podcast story stories book radio audiobook'], n: 'not', r: "You listen to stories and podcasts! Great for your English too." },
          { k: ['music pop rock rap hip song kpop classical jazz singer'], n: 'not nothing', r: "You listen to music! I love dancing to music too." },
          { k: ['nothing not no'], n: 'know', r: "Quiet is nice too! I like a quiet shop sometimes." }
        ],
        o: "Nice! Everybody listens to different things.",
        t: ["I listen to pop music.", "I listen to podcasts.", "I don't listen to music."],
        x: [["i listen to pop music", 1], ["i listen music", 1], ["podcasts", 0], ["i don't listen to music", 2], ["i don't know", -1], ["my teacher", -1], ["taylor swift", -1]]
      },
      {
        c: "I am afraid of cats, ha! Which animal are lots of people afraid of: spiders, snakes or mice?",
        he: 'מאיזו חיה הרבה אנשים מפחדים? באנגלית afraid of (לא from): People are afraid of spiders.',
        a: [
          { k: ['spider insect bug cockroach bee'], r: "Spiders! Yes, lots of people are afraid of them. But they are tiny!" },
          { k: ['snake'], r: "Snakes! Yes, but most snakes are shy. They just want to hide." },
          { k: ['mouse mice rat'], r: "Mice! Ha, and mice are afraid of people too." },
          { k: ['cat kitten'], r: "Cats! Yes, me! Their big eyes are so scary." }
        ],
        o: "Interesting! People are afraid of lots of different animals.",
        t: ["People are afraid of spiders.", "I think snakes.", "Lots of people are afraid of mice."],
        x: [["i afraid from spiders", 0], ["snakes", 1], ["i think snake", 1], ["mice", 2], ["people afraid of mouse", 2], ["cats like you", 3], ["dogs", -1], ["i don't know", -1], ["all of them", -1]]
      },
      {
        c: "I am proud of my clothes shop. What is something you are proud of?",
        he: 'במה אתם גאים? I am proud of my drawings. או I am proud of my English.',
        a: [
          { k: ['english'], r: "Your English is great! I am proud of you too." },
          { k: ['draw drawing paint picture art'], r: "Your art! I want to put it on the wall of my shop." },
          { k: ['team match won win sport football basketball goal swim test exam mark grade'], r: "Wow, well done! Hard work makes us proud." },
          { k: ['nothing know not'], r: "That's okay! I am proud of you for speaking English today." }
        ],
        o: "Wow, thank you for telling me! I am proud of you too.",
        t: ["I am proud of my drawings.", "I am proud of my English!", "I am proud of my football team."],
        x: [["i am proud of my drawings", 1], ["my english", 0], ["i am proud of my team", 2], ["i don't know", 3], ["nothing", 3], ["my dog", -1], ["my little brother", -1]]
      }
    ],
    end: "Thank you for a lovely talk! Come and visit my shop again soon."
  },
  {
    id: 'ta2v02', title: 'Design a superhero',
    he: 'מעצבים עם צ׳אצ׳ו גיבורת-על: שיער, פנים, ולמי היא דומה',
    turns: [
      {
        c: "I am drawing a new superhero for my shop! Should she have curly hair or straight hair?",
        he: 'איזה שיער יהיה לה? She has curly hair. או Straight hair, please!',
        a: [
          { k: ['curly curl curls'], r: "Curly hair! Big and bouncy. I love it." },
          { k: ['straight strait'], r: "Long, straight hair. Very cool!" },
          { k: ['short bald'], r: "Short hair! Fast and easy for a superhero." }
        ],
        o: "Great idea! I am drawing it now.",
        t: ["She has curly hair.", "Straight hair, please!", "Short hair, like a sports star."],
        x: [["curly hair", 0], ["she have curly hair", 0], ["straight", 1], ["short hair", 2], ["pink hair", -1], ["i don't know", -1]]
      },
      {
        c: "What colour is her hair? Blond, black, brown, or something crazy like blue?",
        he: 'איזה צבע השיער שלה? She has blond hair. או Her hair is blue!',
        a: [
          { k: ['blond blonde yellow gold golden'], r: "She has blond hair, like the sun! Fabulous." },
          { k: ['black brown dark'], r: "She has dark hair. She looks great!" },
          { k: ['red pink blue green purple orange rainbow silver white'], r: "She has colourful hair! She looks amazing." }
        ],
        o: "Fabulous! She is looking great already.",
        t: ["She has blond hair.", "Her hair is black.", "Her hair is blue!"],
        x: [["blond", 0], ["she have black hair", 1], ["brown", 1], ["blue hair", 2], ["rainbow", 2], ["no hair", -1]]
      },
      {
        c: "Her best friend is a funny old man. Does he have a beard, glasses or freckles?",
        he: 'מה יש לחבר שלה? He has a long beard. או He has glasses and freckles.',
        a: [
          { k: ['beard bird'], r: "He has a long white beard! Very wise." },
          { k: ['glass glasses'], r: "He has big round glasses. He looks very clever!" },
          { k: ['freckle freckles frecles'], r: "He has freckles on his nose. So cute!" }
        ],
        o: "Perfect! He looks very friendly.",
        t: ["He has a long beard.", "He has big glasses.", "He has freckles."],
        x: [["a beard", 0], ["he has a bird", 0], ["he have glasses", 1], ["freckles", 2], ["all of them", -1], ["a hat", -1]]
      },
      {
        c: "Who does our superhero look like: a film star, a famous singer or a footballer?",
        he: 'למי היא דומה? She looks like a film star. או She looks like a singer.',
        a: [
          { k: ['film movie star actor actress'], r: "She looks like a film star! Ready for the cameras." },
          { k: ['sing singer'], r: "She looks like a singer! Maybe she sings too." },
          { k: ['football footballer player sport'], r: "She looks like a footballer! Fast and strong." }
        ],
        o: "Ha! Yes, I can see it. She is perfect now.",
        t: ["She looks like a film star.", "She looks like a singer.", "She looks like a footballer."],
        x: [["she look like a singer", 1], ["a film star", 0], ["footballer", 2], ["like you chacho", -1], ["my mom", -1]]
      },
      {
        c: "Now she needs a superhero name! What should we call her?",
        he: "תנו לה שם של גיבורת-על: Let's call her Star Girl. או Her name is Captain Curly.",
        a: [],
        o: "What a fantastic name! She is ready for my poster.",
        t: ["Let's call her Star Girl.", "Her name is Captain Curly.", "Call her Super Freckles!"],
        x: [["star girl", -1], ["lets call her super chacho", -1]]
      }
    ],
    end: "Thank you, designer! You describe people really well. Bye for now!"
  },
  {
    id: 'ta2l01', title: "Ben's camp roommates",
    he: 'מדברים עם צ׳אצ׳ו על השותפים של בן לחדר במחנה, ליאו וסאם',
    turns: [
      {
        c: "Leo is friendly but he snores. Sam is funny but messy. Which roommate do you like more?",
        he: 'מי מוצא חן בעיניכם יותר? I like Leo more. או I like Sam. או Both!',
        a: [
          { k: ['both'], r: "Both of them! They are nice in different ways." },
          { k: ['leo lio leon'], r: "Leo! He shares his snacks, so I like him too." },
          { k: ['sam sem sammy'], r: "Sam! He is funny and quiet. Good choice." }
        ],
        o: "Good choice! Every roommate has good and bad things.",
        t: ["I like Leo more.", "I like Sam.", "I like both of them."],
        x: [["i like leo more", 1], ["leo", 1], ["sam", 2], ["i like sam because he funny", 2], ["both", 0], ["ben", -1], ["i don't know", -1]]
      },
      {
        c: "Leo snores, so the room is noisy at night. What can Ben do?",
        he: 'מה בן יכול לעשות? He can wear earplugs. או He can talk to Leo.',
        a: [
          { k: ['earplug ear ears headphone headphones music'], r: "Earplugs or music! Clever. Then he can sleep." },
          { k: ['talk tell ask speak'], r: "He can talk to Leo. Kind and honest!" },
          { k: ['other another change move switch new'], r: "Another room? Hmm, but then no more snacks from Leo!" }
        ],
        o: "Good idea! I hope Ben can sleep tonight.",
        t: ["He can wear earplugs.", "He can talk to Leo.", "He can change rooms."],
        x: [["he can wear earplugs", 0], ["listen to music", 0], ["talk to leo", 1], ["he tell him to stop", 1], ["change room", 2], ["sleep outside", -1], ["nothing", -1]]
      },
      {
        c: "Sam's clothes are all over the floor! Are you tidy or messy, like Sam?",
        he: 'אתם מסודרים או מבולגנים? I am tidy. או I am messy, like Sam!',
        a: [
          { k: ['not', 'messy mess'], r: "So you are a tidy one! A great roommate." },
          { k: ['not', 'tidy clean neat organised organized'], r: "A bit messy? Me too! Feathers everywhere." },
          { k: ['messy mess'], r: "Messy, like me! My feathers are everywhere." },
          { k: ['tidy clean neat organised organized'], r: "Tidy! You are the perfect roommate." }
        ],
        o: "Ha! Everybody is a little bit messy sometimes.",
        t: ["I am tidy.", "I am messy, like Sam!", "I am not very tidy."],
        x: [["i am tidy", 3], ["messy", 2], ["i am not messy", 0], ["i am not tidy", 1], ["little bit messy", 2], ["sometimes", -1], ["both", -1]]
      },
      {
        c: "Leo shares his snacks with everyone. What snacks do you want to take to camp?",
        he: 'אילו חטיפים תיקחו למחנה? I want to take crisps. או Chocolate and popcorn!',
        a: [],
        o: "Ooh, nice! Camp snacks are always fun.",
        t: ["I want to take crisps.", "Chocolate and popcorn!", "Some fruit and biscuits."],
        x: [["bamba and bisli", -1], ["chocolate", -1]]
      }
    ],
    end: "Thanks for chatting about Ben's camp! I hope his next night is a quiet one. See you!"
  },
  {
    id: 'ta2l02', title: 'The Treetop Hotel',
    he: "צ׳אצ׳ו בקבלה של מלון: עושים צ'ק-אין ושואלים שאלות",
    turns: [
      {
        c: "Welcome to the Treetop Hotel! I am the receptionist today. Do you have a booking?",
        he: "יש לכם הזמנה? Yes, I have a booking. או No, I don't.",
        a: [
          { k: ['no not dont'], n: 'yes', r: "No booking? No problem. We have lots of free rooms!" },
          { k: ['yes have booking book reservation'], r: "Lovely! Let me check. Yes, here it is." }
        ],
        o: "No problem! We have a lovely room for you.",
        t: ["Yes, I have a booking.", "No, I don't."],
        x: [["yes i have a booking", 1], ["yes", 1], ["no i don't", 0], ["no", 0], ["hello chacho", -1], ["what", -1]]
      },
      {
        c: "How many nights do you want to stay with us?",
        he: 'כמה לילות? Three nights, please. או For one night.',
        a: [
          { k: ['one'], n: 'two three four five six seven eight nine ten week', r: "Just one night? Sure! A short and sweet stay." },
          { k: ['two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty week month hundred many'], r: "Great! I have a lovely room for you with a sea view." }
        ],
        o: "Okay! I have a lovely room for you.",
        t: ["For one night.", "Three nights, please.", "One week, please."],
        x: [["one night", 0], ["three nights please", 1], ["for 2 night", 1], ["a week", 1], ["i don't know", -1], ["forever", -1]]
      },
      {
        c: "Here is your key. Room two hundred and fourteen, on the second floor. Do you have any questions?",
        he: 'שאלו שאלה על המלון: What time is breakfast? או Is there wifi? או Is there a pool?',
        a: [
          { k: ['breakfast eat food restaurant'], r: "Breakfast is from seven to ten, next to the pool." },
          { k: ['wifi wi internet password'], r: "Yes, the wifi is free! The password is on your key." },
          { k: ['pool swim swimming'], r: "Yes! The pool is open from eight in the morning." },
          { k: ['no not nothing'], r: "Great! Then enjoy your room." }
        ],
        o: "Okay! Everything is on the hotel map, next to your bed.",
        t: ["What time is breakfast?", "Is there wifi in the room?", "Is there a pool?"],
        x: [["what time is breakfast", 0], ["is there wifi", 1], ["what is the password", 1], ["is there a pool", 2], ["no thank you", 3], ["yes", -1], ["where is the lift", -1]]
      },
      {
        c: "Our hotel has a pool, a games room and a cinema. What do you want to do first?",
        he: 'מה תעשו קודם? I want to swim in the pool. או I want to go to the cinema.',
        a: [
          { k: ['pool swim swimming'], r: "Swimming in the pool! Don't forget your towel." },
          { k: ['game games play'], r: "The games room! It has a great table football game." },
          { k: ['cinema film movie'], r: "The cinema! Tonight's film is about pirates." },
          { k: ['sleep rest bed relax'], r: "A rest first! Your bed is very, very soft." }
        ],
        o: "Great plan! Enjoy your stay with us.",
        t: ["I want to swim in the pool.", "The games room!", "I want to go to the cinema."],
        x: [["i want swim", 0], ["the pool", 0], ["games room", 1], ["cinema", 2], ["i want to watch a movie", 2], ["sleep", 3], ["eat", -1], ["the beach", -1]]
      },
      {
        c: "One more thing. Check-out is at eleven o'clock on Sunday. Is that okay for you?",
        he: "הצ'ק-אאוט ביום ראשון ב-11. זה בסדר? Yes, that is fine. או Can I check out late?",
        a: [
          { k: ['late later twelve afternoon'], r: "No problem! You can check out at one o'clock." },
          { k: ['yes okay ok fine good great sure perfect'], n: 'not', r: "Perfect! See you on Sunday at eleven, then." },
          { k: ['no not'], r: "Okay, you can check out at one o'clock instead." }
        ],
        o: "No problem! We can talk about it on Sunday.",
        t: ["Yes, that is fine.", "Can I check out late?", "No, it is too early."],
        x: [["yes that is fine", 1], ["ok", 1], ["can i check out late", 0], ["no", 2], ["it is not okay", 2], ["what", -1]]
      }
    ],
    end: "Enjoy your stay at the Treetop Hotel! Call me if you need anything. Bye!"
  },
  {
    id: 'ta2l03', title: 'Help Chacho find the way!',
    he: 'צ׳אצ׳ו הלך לאיבוד בעיר: נותנים לו הוראות דרך',
    turns: [
      {
        c: "Help, I am lost! I want to find the ice cream shop. Should I go straight on or turn left?",
        he: 'תנו לצ׳אצ׳ו הוראה: Go straight on. או Turn left. או Turn right.',
        a: [
          { k: ['straight strait'], r: "Straight on! Okay, I am walking. I can see a bank now." },
          { k: ['left'], r: "Turn left! Okay, I am walking. I can see a bank now." },
          { k: ['right'], r: "Turn right! Okay. Oh look, I can see a bank now." }
        ],
        o: "Okay, let me try. I am walking. I can see a bank!",
        t: ["Go straight on.", "Turn left.", "Turn right."],
        x: [["go straight on", 0], ["straight", 0], ["turn left", 1], ["go to the right", 2], ["fly", -1], ["i don't know", -1]]
      },
      {
        c: "I am next to the bank now. Is the ice cream shop next to the bank, or opposite it?",
        he: 'איפה הגלידריה? It is opposite the bank. או It is next to the bank.',
        a: [
          { k: ['opposite oposite front across'], r: "Opposite the bank! Yes, I can see it across the road!" },
          { k: ['next near beside'], r: "Next to the bank! Yes, there it is. Yum!" }
        ],
        o: "Found it! Thank you, my clever guide.",
        t: ["It is opposite the bank.", "It is next to the bank."],
        x: [["opposite the bank", 0], ["it is in front of the bank", 0], ["next to the bank", 1], ["near", 1], ["behind", -1], ["i don't know", -1]]
      },
      {
        c: "When you visit a new city, how do you like to travel: on foot, by bus or by bike?",
        he: 'איך אתם אוהבים לטייל בעיר חדשה? On foot. או By bus. (לא with bus)',
        a: [
          { k: ['foot walk walking legs'], r: "On foot! You see lots of things when you walk." },
          { k: ['bus train metro underground tram subway'], r: "By bus! You can sit and look out of the window." },
          { k: ['bike bicycle scooter skate'], r: "By bike! Fast and fun." },
          { k: ['car taxi'], r: "By car or taxi! Fast and easy." }
        ],
        o: "Good choice! I usually fly, of course.",
        t: ["On foot.", "By bus.", "I like to travel by bike."],
        x: [["on foot", 0], ["i like walk", 0], ["with bus", 1], ["by train", 1], ["bike", 2], ["with taxi", 3], ["plane", -1], ["fly like you", -1]]
      },
      {
        c: "Anna wanted to see the Science Museum. What do you want to see in a new city?",
        he: 'מה תרצו לראות בעיר חדשה? I want to see a museum. או The zoo! או The shops.',
        a: [
          { k: ['museum'], r: "A museum! You can learn so many things there." },
          { k: ['park zoo beach garden sea river'], r: "Ooh, outside! Fresh air and lots to see." },
          { k: ['shop shops shopping mall market'], r: "Shopping! My favourite. I love new hats." },
          { k: ['food restaurant cafe ice_cream pizza'], r: "Yum! Trying new food is the best part of a trip." }
        ],
        o: "Great choice! That sounds like a fun day.",
        t: ["I want to see a museum.", "The zoo!", "I want to go to the shops."],
        x: [["museum", 0], ["i want see the zoo", 1], ["the beach", 1], ["shopping mall", 2], ["restaurants", 3], ["the tower", -1], ["everything", -1]]
      }
    ],
    end: "You give great directions! I will never get lost again. Bye!"
  },
  {
    id: 'ta2r01', title: 'Help for Tired Tamar',
    he: 'מה דעתכם על הבעיה של תמר והכלבה סנואי? מייעצים יחד עם צ׳אצ׳ו',
    turns: [
      {
        c: "Poor Tamar can't sleep because Snowy barks every night. Should she talk to Mrs Hill, do you think?",
        he: "האם תמר צריכה לדבר עם גברת היל? Yes, she should. או No, I don't think so.",
        a: [
          { k: ['no not dont'], n: 'yes know', r: "Hmm, I see. Talking to a neighbour can be hard." },
          { k: ['yes talk agree sure course'], r: "I agree! Mrs Hill probably doesn't know about it." }
        ],
        o: "Hmm, it is a tricky problem. Doctor Kind has some ideas.",
        t: ["Yes, she should talk to her.", "No, I don't think so."],
        x: [["yes she should", 1], ["yes", 1], ["i think she should talk to her", 1], ["no", 0], ["i don't think so", 0], ["she should buy earplugs", -1], ["i don't know", -1]]
      },
      {
        c: "Tamar is nervous. What polite first sentence can she say to Mrs Hill?",
        he: 'מה תמר יכולה להגיד בנימוס? Hello, I am your neighbour. או Excuse me, can I talk to you?',
        a: [
          { k: ['hello hi excuse sorry please neighbour neighbor nice good'], r: "Very polite! Mrs Hill is going to smile, I am sure." }
        ],
        o: "Good! And a big smile helps a lot too.",
        t: ["Hello, I am your neighbour.", "Excuse me, can I talk to you?", "Hi! I love your dog Snowy."],
        x: [["hello i am your neighbour", 0], ["excuse me can i talk to you", 0], ["your dog is very loud", -1], ["stop the dog", -1]]
      },
      {
        c: "Doctor Kind says dogs often bark when they are bored. How can Mrs Hill help Snowy?",
        he: 'איך גברת היל יכולה לעזור לסנואי? She can take her for a walk. או She can buy her toys.',
        a: [
          { k: ['walk walking'], r: "A long walk! A tired dog is a quiet dog." },
          { k: ['toy ball play game bone'], r: "Toys and games! Then Snowy is busy, not bored." },
          { k: ['friend visit tamar stay home sitter neighbour neighbor'], r: "Good idea! Maybe Tamar can visit Snowy sometimes." },
          { k: ['class train training teacher school lesson'], r: "A class for dogs? Ooh, Snowy can be a good student!" }
        ],
        o: "Nice idea! Snowy needs to be less bored.",
        t: ["She can take her for a walk.", "She can buy her toys.", "Tamar can visit Snowy."],
        x: [["she can walk with her", 0], ["take her for a walk", 0], ["buy toys", 1], ["she can play with her", 1], ["tamar can visit", 2], ["dog school", 3], ["give her food", -1], ["i don't know", -1]]
      },
      {
        c: "Doctor Kind thinks Tamar and Mrs Hill can be friends. What can they do together?",
        he: 'מה הן יכולות לעשות יחד? They can walk Snowy together. או They can bake a cake.',
        a: [
          { k: ['walk snowy dog park'], r: "Walking Snowy together! Perfect for everyone." },
          { k: ['bake cook cake tea eat drink cookie biscuit coffee'], r: "Something tasty together! How lovely." },
          { k: ['talk chat game card cards read book watch tv film movie'], r: "Fun together! That is a great new friendship." }
        ],
        o: "What a lovely idea! Neighbours can be great friends.",
        t: ["They can walk Snowy together.", "They can bake a cake.", "They can play cards."],
        x: [["walk the dog", 0], ["they can walk snowy", 0], ["bake a cake", 1], ["drink tea", 1], ["play cards", 2], ["watch tv", 2], ["go to the beach", -1], ["nothing", -1]]
      }
    ],
    end: "You are a great helper, just like Doctor Kind! Thank you. Bye!"
  },
  {
    id: 'ta2u02', title: 'Max takes the bus',
    he: 'מדברים עם צ׳אצ׳ו על מקס, הכלב שנסע לבד באוטובוס לים',
    turns: [
      {
        c: "Max the dog got on the bus all alone! Do you think he was brave or a bit silly?",
        he: 'מה דעתכם על מקס? He was brave. או He was silly! או He was clever.',
        a: [
          { k: ['both'], r: "Both! A brave and silly dog. I love him." },
          { k: ['brave strong'], r: "He was brave! And he knew the way to the beach." },
          { k: ['silly naughty naughti bad cheeky crazy'], r: "He was a bit silly! Mrs Lee was very surprised." },
          { k: ['clever smart funny cute'], r: "He was very clever! A smart dog, for sure." }
        ],
        o: "Ha! Max is a very special dog.",
        t: ["He was brave.", "He was silly!", "He was very clever."],
        x: [["he was brave", 1], ["brave", 1], ["he is silly", 2], ["bad dog", 2], ["crazy", 2], ["he is smart", 3], ["both", 0], ["lucky", -1], ["i don't know", -1]]
      },
      {
        c: "Max got off the bus at the beach. What do you think he did there?",
        he: 'מה מקס עשה בים? בעבר: He swam in the sea. או He played with a ball.',
        a: [
          { k: ['swim swimming swam swum water sea wave'], r: "He swam in the sea? Max is a water dog!" },
          { k: ['play ball run running ran sand dig digging'], r: "He played on the sand! What a happy dog." },
          { k: ['eat ate picnic food sandwich'], r: "He ate the picnic? Ha! Mrs Lee was not happy." },
          { k: ['sleep slept rest sun'], r: "He slept in the sun. A long trip for a dog!" }
        ],
        o: "Ha! He had a great day at the beach, I am sure.",
        t: ["He swam in the sea.", "He played with a ball.", "He slept in the sun."],
        x: [["he swim in the sea", 0], ["swimming", 0], ["he play with ball", 1], ["he run on the sand", 1], ["he eat the picnic", 2], ["he sleep", 3], ["he looked for mrs lee", -1], ["i don't know", -1]]
      },
      {
        c: "The driver said Max was quieter than most people. Who is quieter, a dog or a parrot?",
        he: 'מי שקט יותר? A dog is quieter. או A parrot is quieter. (quieter, לא more quiet)',
        a: [
          { k: ['dog'], r: "The dog is quieter! True, parrots are much noisier." },
          { k: ['parrot parot bird chacho chaco chacha chocho chatcho'], r: "Ha! Not this parrot. I am much noisier than a dog!" }
        ],
        o: "Ha! I am a parrot, so I am very, very noisy.",
        t: ["A dog is quieter.", "A parrot is quieter."],
        x: [["a dog", 0], ["the dog is more quiet", 0], ["parrot", 1], ["you chacho", 1], ["the same", -1], ["i don't know", -1]]
      },
      {
        c: "Imagine a magic bus can take you anywhere. Where do you want to go?",
        he: 'לאן הייתם נוסעים באוטובוס קסום? I want to go to the beach. או To the mall with my friends.',
        a: [],
        o: "Great choice! Don't forget to get off at the right stop.",
        t: ["I want to go to the beach.", "To the mall with my friends.", "I want to go to Eilat."],
        x: [["to the beach like max", -1], ["tel aviv", -1]]
      }
    ],
    end: "That was fun! Next time, Max and I are taking the bus together. Bye!"
  },
  {
    id: 'ta2g04', title: 'What happened yesterday?',
    he: 'מספרים לצ׳אצ׳ו מה קרה אתמול, בעבר פשוט',
    turns: [
      {
        c: "Yesterday a funny thing happened. My new hat fell into my soup! What did you do yesterday?",
        he: 'מה עשיתם אתמול? בעבר: I went to school. או I played football. או I watched TV.',
        a: [
          { k: ['play football basketball game tennis'], r: "You played! That sounds like fun." },
          { k: ['watch tv film movie series youtube'], r: "You watched something! I watched a film about pirates." },
          { k: ['school class lesson'], r: "You went to school! I hope it was a good day." },
          { k: ['visit friend grandma grandpa park beach mall shop shopping swim swimming cousin party'], r: "You went out! That sounds like a lovely day." }
        ],
        o: "That sounds like a good day!",
        t: ["I went to school.", "I played football.", "I watched TV."],
        x: [["i play football", 0], ["i played games", 0], ["i watch tv", 1], ["i go to school", 2], ["i went to my grandma", 3], ["i visited my friend", 3], ["nothing", -1], ["i sleep", -1]]
      },
      {
        c: "I ate crackers for dinner yesterday, of course. What did you eat?",
        he: 'מה אכלתם אתמול לארוחת ערב? I ate pizza. או We had pasta. (ate, לא eat)',
        a: [
          { k: ['pizza pasta burger hamburger schnitzel chips fries rice chicken meat fish soup salad falafel hummus shakshuka sandwich egg vegetables spaghetti noodles sushi toast bread cheese'], r: "You ate something tasty! Much better than my crackers." },
          { k: ['remember know'], r: "You don't remember? That's okay, I forget things too!" }
        ],
        o: "Okay! Thank you for telling me.",
        t: ["I ate pizza.", "We had pasta and salad.", "I don't remember!"],
        x: [["i eat pizza", 0], ["we had pasta", 0], ["schnitzel and rice", 0], ["i don't remember", 1], ["i don't know", 1], ["cake", -1], ["something good", -1]]
      },
      {
        c: "Did you go to bed early or late last night?",
        he: 'הלכתם לישון מוקדם או מאוחר? I went to bed early. או I went to bed late.',
        a: [
          { k: ['late eleven twelve midnight'], r: "Late! Me too, sometimes. Parrots love to chat at night." },
          { k: ['early seven eight nine'], r: "Early! Then you had a long, good sleep." }
        ],
        o: "I hope you slept well! I sleep with my head under my wing.",
        t: ["I went to bed early.", "I went to bed late."],
        x: [["late", 0], ["i go to bed late", 0], ["at 11", 0], ["early", 1], ["at 9", 1], ["at ten", -1], ["i don't remember", -1]]
      },
      {
        c: "What was the best thing that happened to you yesterday?",
        he: 'מה היה הדבר הכי טוב שקרה לכם אתמול? I played with my friends. או I got a good mark.',
        a: [
          { k: ['friend play played'], r: "Fun with friends! That is the best thing." },
          { k: ['mark grade test exam prize won win'], r: "Well done! You must be very proud." },
          { k: ['ate eat pizza cake ice_cream food dinner'], r: "Yum! Good food makes a good day." },
          { k: ['nothing not know remember'], r: "That's okay! Some days are just normal days." }
        ],
        o: "Lovely! Thank you for telling me about your day.",
        t: ["I played with my friends.", "I got a good mark.", "We had pizza for dinner."],
        x: [["i played with my friends", 0], ["i got a good mark", 1], ["we ate pizza", 2], ["nothing", 3], ["my cat sleep on me", -1], ["i saw a rainbow", -1]]
      }
    ],
    end: "You tell great stories in the past! Talk to you another day!"
  },
  {
    id: 'ta2g05', title: 'When the lights went out',
    he: 'צ׳אצ׳ו מספר מה קרה כשהאור כבה: was/were + ing ועבר פשוט',
    turns: [
      {
        c: "Last night I was making a hat when the lights went out! What were you doing at eight last night?",
        he: 'מה עשיתם אתמול בשמונה בערב? I was watching TV. או I was having dinner.',
        a: [
          { k: ['eat eating ate dinner food'], r: "You were having dinner! Yum." },
          { k: ['watch tv film movie series'], r: "You were watching TV. Very cosy!" },
          { k: ['homework study read book'], r: "You were doing homework or reading. Hard-working!" },
          { k: ['play game computer phone football'], r: "You were playing! That sounds fun." }
        ],
        o: "Ooh! And I was sitting in the dark.",
        t: ["I was watching TV.", "I was having dinner.", "I was doing my homework."],
        x: [["i was watching tv", 1], ["i watch tv", 1], ["i was eating dinner", 0], ["i did my homework", 2], ["play games", 3], ["i was sleeping", -1], ["i don't remember", -1]]
      },
      {
        c: "Back to my story. While I was sitting in the dark, what do you think happened?",
        he: 'מה לדעתכם קרה כשצ׳אצ׳ו ישב בחושך? Somebody knocked on the door. או The lights came on.',
        a: [
          { k: ['light lights candle torch flashlight phone came'], r: "Good guess! The lights came on, and then my friend Polly knocked." },
          { k: ['knock door friend someone somebody bell visitor'], r: "Yes! Somebody knocked on the door. It was my friend Polly!" }
        ],
        o: "Ooh, nice guess! Then somebody knocked on the door. It was Polly!",
        t: ["Somebody knocked on the door.", "The lights came on.", "You found a candle."],
        x: [["the lights came on", 0], ["you find a candle", 0], ["somebody knock on the door", 1], ["a friend", 1], ["a ghost", -1], ["you sleep", -1]]
      },
      {
        c: "Polly came in with a candle. What were we doing when the lights came on, do you think?",
        he: 'מה צ׳אצ׳ו ופולי עשו כשהאור חזר? You were dancing. או You were eating crackers.',
        a: [
          { k: ['dance dancing danced'], r: "Yes! We were dancing in the dark. So silly!" },
          { k: ['eat eating cracker food snack'], r: "We were eating crackers, of course!" },
          { k: ['talk chat chatting laugh sing song story stories'], r: "We were chatting and laughing. A fun night!" },
          { k: ['play playing game'], r: "We were playing a game in the dark. So much fun!" }
        ],
        o: "Ha! Good guess. We were playing a game in the dark.",
        t: ["You were dancing.", "You were eating crackers.", "You were talking and laughing."],
        x: [["you were dancing", 0], ["you dance", 0], ["eating crackers", 1], ["you was talking", 2], ["play a game", 3], ["sleeping", -1], ["i don't know", -1]]
      },
      {
        c: "Now think of a rainy day. What were you doing the last time it rained?",
        he: 'מה עשיתם בפעם האחרונה שירד גשם? I was watching a film. או I was walking to school.',
        a: [
          { k: ['watch tv film movie series'], r: "You were watching something. Perfect for a rainy day!" },
          { k: ['walk walking outside school bus jump jumping puddle football'], r: "You were outside in the rain? I hope you had an umbrella!" },
          { k: ['game read reading book sleep sleeping bed home inside'], r: "You were inside. Cosy and warm!" }
        ],
        o: "Nice! I was hiding under my umbrella, of course.",
        t: ["I was watching a film.", "I was walking to school.", "I was reading a book."],
        x: [["i was watching a film", 0], ["i watch tv", 0], ["i was walking to school", 1], ["playing football outside", 1], ["i was reading a book", 2], ["i don't remember", -1], ["it not rain", -1]]
      }
    ],
    end: "While we were talking, I was having so much fun! See you later!"
  },
  {
    id: 'ta2g06', title: 'Why? To... and for...',
    he: 'מדברים עם צ׳אצ׳ו על "למה": to + פועל, או for + שם עצם',
    turns: [
      {
        c: "I went to the shop this morning to buy crackers. Why do people go to the beach?",
        he: 'למה הולכים לים? To swim! או For a picnic. (to + פועל, for + שם עצם)',
        a: [
          { k: ['swim swimming sea water surf surfing'], r: "To swim! The sea is perfect for swimming." },
          { k: ['sun relax rest tan sleep'], r: "To relax in the sun! Lovely." },
          { k: ['play ball football volleyball matkot sand build castle'], r: "To play games on the sand! So much fun." },
          { k: ['picnic eat food ice_cream icecream'], r: "For a picnic or an ice cream! Yum." }
        ],
        o: "Yes! The beach is great for lots of things.",
        t: ["To swim!", "To relax in the sun.", "For a picnic."],
        x: [["to swim", 0], ["for swim", 0], ["to relax", 1], ["for play matkot", 2], ["for a picnic", 3], ["to eat ice cream", 3], ["for fun", -1], ["i don't know", -1]]
      },
      {
        c: "I use my phone to take photos of my hats. What do people use phones for?",
        he: 'בשביל מה משתמשים בטלפון? To call friends. או For games. או To take photos.',
        a: [
          { k: ['call talk speak message text chat'], r: "To talk to people! Very useful." },
          { k: ['game games play'], r: "For games! I love phone games too." },
          { k: ['photo picture video camera'], r: "To take photos and videos! Like me and my hats." },
          { k: ['music listen song youtube watch'], r: "To listen to music and watch videos! Me too." }
        ],
        o: "Yes! Phones are good for so many things.",
        t: ["To call friends.", "For games.", "To take photos."],
        x: [["to call my friends", 0], ["for talk", 0], ["for games", 1], ["to play", 1], ["take pictures", 2], ["for music", 3], ["for everything", -1], ["homework", -1]]
      },
      {
        c: "Look at this funny hat from my shop. It has a pocket! What is the pocket for?",
        he: 'בשביל מה הכיס בכובע? For keeping snacks! או To keep my keys. (for + ing)',
        a: [
          { k: ['snack cracker food candy sweet chocolate'], r: "For keeping snacks! Yes, crackers on my head!" },
          { k: ['money key phone coin'], r: "For keeping your things safe! Very clever." },
          { k: ['bird egg mouse pet hamster'], r: "For a tiny pet? Ooh, I love that idea!" }
        ],
        o: "Great idea! A hat pocket is good for lots of things.",
        t: ["For keeping snacks!", "To keep my keys.", "For a tiny pet."],
        x: [["for keep snacks", 0], ["to keep crackers", 0], ["for money", 1], ["to put my phone", 1], ["for a little bird", 2], ["for nothing", -1], ["i don't know", -1]]
      },
      {
        c: "Today you came here to learn English. Why do you want to learn English?",
        he: 'למה אתם רוצים ללמוד אנגלית? To travel. או To watch films. או For my future.',
        a: [
          { k: ['travel trip country abroad holiday visit world fly'], r: "To travel! English is great for trips." },
          { k: ['game film movie youtube song music tv series watch'], r: "To understand films and songs! Great reason." },
          { k: ['friend talk speak people chat'], r: "To talk to people from everywhere! Lovely." },
          { k: ['job work future school university test exam'], r: "For your future! Very smart." }
        ],
        o: "That is a great reason to learn English!",
        t: ["To travel.", "To watch films in English.", "For my future."],
        x: [["to travel", 0], ["for travel the world", 0], ["to watch movies", 1], ["to speak with people", 2], ["for my future", 3], ["because", -1], ["i like it", -1]]
      }
    ],
    end: "I am here to help you, and you are here to learn. Perfect team! Bye!"
  },
  {
    id: 'ta2g07', title: 'Because, so, then...',
    he: 'מספרים סיפור עם צ׳אצ׳ו עם because, so, then ו-although',
    turns: [
      {
        c: "I love rainy days because I can stay in my shop. Do you like sunny days or rainy days more?",
        he: 'מה אתם אוהבים יותר? I like sunny days. או I like rainy days.',
        a: [
          { k: ['both'], r: "Both! Every kind of weather has something nice." },
          { k: ['sun sunny hot summer'], r: "Sunny days! Great for going outside." },
          { k: ['rain rainy cold winter cloudy'], r: "Rainy days, like me! So cosy." }
        ],
        o: "Good answer! Every kind of weather has something nice.",
        t: ["I like sunny days.", "I like rainy days.", "I like both!"],
        x: [["sunny days", 1], ["i like sun", 1], ["rainy", 2], ["i like rainy days more", 2], ["both", 0], ["snow", -1], ["i don't know", -1]]
      },
      {
        c: "Why do you like that weather? Can you start your answer with because?",
        he: 'למה? התחילו ב-because: Because I can go to the beach. או Because it is cosy.',
        a: [
          { k: ['because cause cuz becuz'], r: "Great reason! Now I understand you." }
        ],
        o: "Ooh, interesting! Everybody likes different things.",
        t: ["Because I can go to the beach.", "Because it is cosy at home.", "Because I love the rain."],
        x: [["because i can swim", 0], ["cause it is cosy", 0], ["i can go to the beach", -1], ["i like it", -1]]
      },
      {
        c: "Let's make a story together! First, a girl found a magic hat in my shop. Then what happened?",
        he: 'המשיכו את הסיפור עם Then: Then she put it on and flew. או Then the hat started to talk.',
        a: [
          { k: ['fly flew flying sky'], r: "Then she flew away! Like a parrot!" },
          { k: ['talk talked speak sing'], r: "Then the hat talked! A chatty hat, just like me." },
          { k: ['disappear invisible gone magic rabbit'], r: "Ooh, magic! What an exciting story." }
        ],
        o: "Ooh, exciting! I love this story.",
        t: ["Then she put it on and flew.", "Then the hat started to talk.", "Then she disappeared!"],
        x: [["then she put it on and flew", 0], ["she fly", 0], ["the hat talk", 1], ["she disappeared", 2], ["she went home", -1], ["i don't know", -1]]
      },
      {
        c: "After that, she wanted to take off the hat, but she couldn't! So what did she do?",
        he: 'מה היא עשתה? עם so או then: So she asked Chacho for help. או Then she pulled very hard.',
        a: [
          { k: ['help ask asked chacho chaco chacha chocho chatcho'], r: "So she asked me for help! Of course I helped her." },
          { k: ['pull pulled cut scissors water shake'], r: "She pulled and pulled! Finally, the hat came off." },
          { k: ['keep kept wear sleep slept'], r: "She kept it on! And she loved her magic hat." }
        ],
        o: "Good idea! And finally, the hat came off. The end!",
        t: ["So she asked Chacho for help.", "Then she pulled very hard.", "So she kept it on!"],
        x: [["so she asked chacho for help", 0], ["she ask for help", 0], ["she pull it", 1], ["she cut it", 1], ["she kept it", 2], ["she cried", -1], ["i don't know", -1]]
      }
    ],
    end: "Although our story was short, it was fabulous! Bye for now!"
  },
  {
    id: 'ta2g08', title: 'Will or going to?',
    he: 'מדברים עם צ׳אצ׳ו על תוכניות ותחזיות: will ו-going to',
    turns: [
      {
        c: "I'm going to open a second shop next month! What are you going to do this weekend?",
        he: 'מה התוכניות לסוף השבוע? I am going to visit my grandma. או I am going to play football.',
        a: [
          { k: ['visit grandma grandpa family cousin friend aunt uncle meet'], r: "You are going to visit people! That sounds lovely." },
          { k: ['play football basketball game park'], r: "You are going to play! Have fun." },
          { k: ['beach trip swim swimming mall cinema movie film shopping restaurant'], r: "You are going to go out! How exciting." },
          { k: ['sleep rest relax nothing home'], r: "You are going to relax. Very good idea!" }
        ],
        o: "That sounds like a great weekend!",
        t: ["I am going to visit my grandma.", "I am going to play football.", "I am going to relax at home."],
        x: [["i am going to visit my grandma", 0], ["i will meet friends", 0], ["i go to play football", 1], ["go to the beach", 2], ["sleep", 3], ["nothing", 3], ["i don't know", -1], ["homework", -1]]
      },
      {
        c: "Look at the sky! There are big black clouds. What is going to happen?",
        he: 'מה עומד לקרות? It is going to rain! (רואים שזה מגיע, אז going to)',
        a: [
          { k: ['rain storm thunder wet'], r: "Yes! It is going to rain. Quick, I need my umbrella!" },
          { k: ['snow'], r: "Snow? Ooh, maybe! It is very cold today." },
          { k: ['sun sunny nice clear'], r: "Sunny? Maybe later! But first, I think it is going to rain." }
        ],
        o: "I think it is going to rain! I need my umbrella.",
        t: ["It is going to rain!", "It is going to snow.", "It is going to be sunny."],
        x: [["it is going to rain", 0], ["it will rain", 0], ["rain", 0], ["snow", 1], ["it will be sunny", 2], ["i don't know", -1], ["lightning", -1]]
      },
      {
        c: "Oh no, now it's raining, and I don't have an umbrella! Can you help me?",
        he: "הציעו עזרה עם will: I will give you my umbrella. או I'll give you my hoodie.",
        a: [
          { k: ['umbrella umbrela'], r: "You will give me your umbrella? Thank you, that is so kind!" },
          { k: ['coat jacket hoodie hat jumper sweater raincoat'], r: "Something warm to wear? Thank you, you are so kind!" },
          { k: ['yes help okay ok sure course'], n: 'not', r: "Thank you! You are a very kind friend." },
          { k: ['no not sorry'], r: "That's okay! I will fly home very fast." }
        ],
        o: "Thank you! I will fly home very fast.",
        t: ["I will give you my umbrella.", "I'll give you my hoodie.", "Yes, I will help you!"],
        x: [["i will give you my umbrella", 0], ["take my umbrella", 0], ["i give you my hoodie", 1], ["yes i will help you", 2], ["of course", 2], ["no sorry", 3], ["fly fast", -1], ["run", -1]]
      },
      {
        c: "Thank you, friend! What do you think the weather will be like tomorrow?",
        he: 'מה מזג האוויר יהיה מחר, לדעתכם? I think it will be sunny. או It will be rainy.',
        a: [
          { k: ['rain rainy cloud cloudy cold wind windy storm snow'], r: "More rain? Then I will stay home and make hats." },
          { k: ['sun sunny hot nice warm good'], r: "Sunny! I hope you are right." }
        ],
        o: "We will see tomorrow! I hope it is nice.",
        t: ["I think it will be sunny.", "It will be rainy again."],
        x: [["i think it will be sunny", 1], ["hot", 1], ["it will rain", 0], ["cloudy", 0], ["i don't know", -1], ["same", -1]]
      }
    ],
    end: "I will remember our chat! And you are going to be great at English. Bye!"
  },
  {
    id: 'ta2g09', title: "Chacho's pretend party",
    he: 'מתכננים עם צ׳אצ׳ו מסיבה בכאילו: am/is/are + ing לתוכניות',
    turns: [
      {
        c: "Tomorrow I'm meeting my friend Polly at five. What are you doing tomorrow after school?",
        he: 'מה התוכניות שלכם מחר אחרי בית הספר? I am playing football. או I am doing homework.',
        a: [
          { k: ['homework study'], r: "You are doing homework. Good luck with it!" },
          { k: ['play football basketball tennis game'], r: "You are playing tomorrow! Have a great time." },
          { k: ['meet friend visit see grandma grandpa cousin'], r: "You are meeting people! That sounds fun." },
          { k: ['nothing rest relax home sleep'], r: "A quiet afternoon at home. Sounds lovely!" }
        ],
        o: "That sounds like a great afternoon!",
        t: ["I am playing football.", "I am doing my homework.", "I am meeting my friends."],
        x: [["i am playing football", 1], ["i play basketball", 1], ["i do my homework", 0], ["i meet my friend", 2], ["nothing", 3], ["dance class", -1], ["i don't know", -1]]
      },
      {
        c: "Let's pretend. I am having a party in my shop next week. Are you coming?",
        he: 'אתם באים למסיבה (בכאילו)? Yes, I am coming! או Sorry, I am busy.',
        a: [
          { k: ['no not sorry busy cant'], n: 'yes', r: "That's okay! Maybe you can come later for some cake." },
          { k: ['yes coming come sure course okay ok love'], r: "Yay! You are coming! I am so happy." }
        ],
        o: "I really hope you are coming! It is going to be fun.",
        t: ["Yes, I am coming!", "Sorry, I am busy that day."],
        x: [["yes i am coming", 1], ["yes", 1], ["i come", 1], ["sorry i am busy", 0], ["no", 0], ["i don't know", 0], ["what time", -1], ["maybe", -1]]
      },
      {
        c: "Polly is bringing the music. What are you bringing to the party?",
        he: 'מה תביאו למסיבה? I am bringing a cake. או I am bringing games.',
        a: [
          { k: ['cake pizza snack food chips crisps cookie biscuit drink juice candy sweet popcorn chocolate bamba fruit'], r: "You are bringing food! Yum, everybody is going to be happy." },
          { k: ['game ball card speaker music'], r: "You are bringing games! Great, we can play all night." },
          { k: ['present gift balloon decoration flower'], r: "Ooh, something pretty! The shop is going to look great." },
          { k: ['nothing myself friend sister brother'], r: "Perfect! People are the best part of a party." }
        ],
        o: "Perfect! Thank you. It is going to be a great party.",
        t: ["I am bringing a cake.", "I am bringing games.", "I am bringing balloons."],
        x: [["i am bringing a cake", 0], ["i bring pizza", 0], ["games", 1], ["a present", 2], ["balloons", 2], ["my friend", 3], ["nothing", 3], ["a hat", -1]]
      },
      {
        c: "I'm wearing my shiny pink hat to the party. What are you wearing?",
        he: 'מה תלבשו למסיבה? I am wearing a dress. או I am wearing jeans and a hoodie.',
        a: [
          { k: ['dress skirt'], r: "You are wearing a dress! So pretty." },
          { k: ['jeans shirt hoodie tshirt top trainers shorts trousers pants jumper'], r: "Something comfy! Perfect for dancing." },
          { k: ['costume crown hat glasses pyjamas pajamas mask'], r: "Ooh, fun! A party needs fun clothes." }
        ],
        o: "Fabulous! You are going to look great.",
        t: ["I am wearing a dress.", "I am wearing jeans and a hoodie.", "I am wearing a costume!"],
        x: [["a dress", 0], ["i wear jeans", 1], ["a t-shirt", 1], ["a costume", 2], ["my crown", 2], ["i don't know", -1], ["something nice", -1]]
      }
    ],
    end: "See you at our pretend party! I am baking the cake now. Bye!"
  },
  {
    id: 'ta2u01', title: 'Bella the pony',
    he: 'מדברים עם צ׳אצ׳ו על בלה, הפוני שהגיעה לבית הספר',
    turns: [
      {
        c: "A pony came to school! How do you think the children felt when they saw her?",
        he: 'איך הילדים הרגישו? They were excited! או They were surprised. (they were, לא was)',
        a: [
          { k: ['scare scared afraid nervous fear'], r: "They were scared? Maybe a little, at first. A pony is big!" },
          { k: ['happy excited surprise surprised fun wow amazed shock shocked'], r: "Yes! They were so surprised and excited!" }
        ],
        o: "I think they were very surprised!",
        t: ["They were excited!", "They were a bit scared."],
        x: [["they was excited", 1], ["happy", 1], ["surprised", 1], ["they were scared", 0], ["afraid", 0], ["i don't know", -1], ["funny", -1]]
      },
      {
        c: "Mr Cohen gave Bella some water and apples. What other food do you think ponies like?",
        he: 'מה עוד פוני אוהבת לאכול? I think ponies like carrots. או They like grass.',
        a: [
          { k: ['carrot carot'], r: "Carrots! Yes, ponies love carrots." },
          { k: ['grass hay leaf leaves plant'], r: "Grass and hay! Yes, that is their main food." },
          { k: ['sugar candy chocolate cake pizza sweet bread cookie'], r: "Ha! Maybe a little treat, but not too much!" }
        ],
        o: "Good idea! I think ponies love carrots most.",
        t: ["I think ponies like carrots.", "They like grass.", "They like sugar!"],
        x: [["carrots", 0], ["i think carrot", 0], ["grass", 1], ["they like hay", 1], ["chocolate", 2], ["pizza", 2], ["water", -1], ["fish", -1]]
      },
      {
        c: "Which animal would you like to see at your school for a day?",
        he: 'איזו חיה הייתם רוצים לראות בבית הספר ליום אחד? I would like to see a dog. או An elephant!',
        a: [
          { k: ['parrot bird chacho chaco chacha chocho chatcho'], r: "A parrot! Ooh, I can come any day!" },
          { k: ['dog puppy cat kitten rabbit bunny hamster'], r: "A cute pet! Everybody wants to play with it." },
          { k: ['horse pony cow goat sheep donkey chicken'], r: "A farm animal! Just like Bella." },
          { k: ['elephant lion tiger giraffe monkey panda zebra bear penguin dolphin koala'], r: "Wow, a wild animal! What a crazy day." }
        ],
        o: "Ooh, what a fun school day!",
        t: ["I would like to see a dog.", "An elephant!", "A horse, like Bella."],
        x: [["a dog", 1], ["i would like to see a cat", 1], ["horse", 2], ["an elephant", 3], ["a parrot like you", 0], ["a dinosaur", -1], ["snake", -1]]
      },
      {
        c: "Bella opened the gate and ran away. Where do you think she wanted to go?",
        he: 'לאן בלה רצתה ללכת? She wanted to go to school. או She wanted to find friends.',
        a: [
          { k: ['school learn class student lesson'], r: "To school! Maybe she wanted to learn, like you." },
          { k: ['friend children kids play'], r: "To find friends! And the children were great friends." },
          { k: ['food apple eat grass'], r: "To find food! And she got some apples." },
          { k: ['beach sea city adventure trip world park'], r: "An adventure! What a brave little pony." }
        ],
        o: "Ha! Maybe she just wanted to learn English, like you.",
        t: ["She wanted to go to school.", "She wanted to find friends.", "She wanted an adventure."],
        x: [["she wanted to go to school", 0], ["to school", 0], ["she want to find friends", 1], ["for apples", 2], ["to the beach", 3], ["home", -1], ["i don't know", -1]]
      }
    ],
    end: "Bella is back in her field now, but what an adventure! Goodbye, my friend!"
  },
  {
    id: 'ta2u03', title: 'Football in socks',
    he: 'מדברים עם צ׳אצ׳ו על משחק הכדורגל בגשם ועל הרעיון של דנה',
    turns: [
      {
        c: "Dana's idea was to play in socks! Was it a good idea or a crazy idea?",
        he: 'מה דעתכם על הרעיון? It was a great idea! או It was a crazy idea.',
        a: [
          { k: ['both'], r: "Both! Crazy and great at the same time." },
          { k: ['good great clever smart cool brilliant amazing best nice'], n: 'not crazy silly bad strange weird', r: "A great idea! They won by three goals." },
          { k: ['crazy silly strange weird bad funny'], r: "Maybe a bit crazy! But it worked. They won!" }
        ],
        o: "Ha! Crazy or clever, it worked.",
        t: ["It was a great idea!", "It was a crazy idea.", "Both, crazy and great!"],
        x: [["it was a good idea", 1], ["great", 1], ["crazy", 2], ["it was a crazy idea", 2], ["both", 0], ["not good", -1], ["i don't know", -1], ["socks", -1]]
      },
      {
        c: "The girls played in the rain. Do you like playing outside in the rain?",
        he: "אתם אוהבים לשחק בחוץ בגשם? Yes, I love it! או No, I don't like it.",
        a: [
          { k: ['no not hate'], n: 'yes know', r: "Me neither! Wet feathers are the worst." },
          { k: ['yes love like fun sometimes'], r: "Ooh, you like it! Getting wet is so much fun." }
        ],
        o: "Ha! Rain or sun, playing outside is fun.",
        t: ["Yes, I love it!", "No, I don't like it."],
        x: [["yes i love it", 1], ["yes", 1], ["no i don't like", 0], ["i hate rain", 0], ["i don't know", -1], ["maybe", -1]]
      },
      {
        c: "What was the best part of the story for you?",
        he: 'מה היה החלק הכי טוב בסיפור? The socks! או When Shira kicked the ball.',
        a: [
          { k: ['sock boot'], r: "The socks! So funny and so clever." },
          { k: ['goal won win winning shira kick kicked ball end'], r: "The goal and the win! What a great ending." },
          { k: ['rain water wet'], r: "The rain! Football in the water, ha!" },
          { k: ['dana coach idea'], r: "Dana's idea! She is a very clever coach." }
        ],
        o: "Great choice! It was a fun story.",
        t: ["The socks!", "When Shira kicked the ball.", "Dana's idea."],
        x: [["the socks", 0], ["when shira kicked the ball", 1], ["they won", 1], ["the rain", 2], ["dana idea", 3], ["all", -1], ["i don't know", -1]]
      },
      {
        c: "Dana had a great idea. What was the best idea you had this week?",
        he: "מה היה הרעיון הכי טוב שלכם השבוע? I made a card for my friend. או I don't know!",
        a: [
          { k: ['nothing not know remember'], r: "That's okay! Maybe your best idea is coming tomorrow." },
          { k: ['game play played'], r: "A new game! Fun ideas are the best ideas." },
          { k: ['make made build built draw drew bake baked cook cooked card'], r: "You made something! I love ideas like that." },
          { k: ['help helped gift present surprise'], r: "Helping someone! That is a kind idea." }
        ],
        o: "Ooh, clever! You are like coach Dana.",
        t: ["I made a card for my friend.", "We played a new game.", "I helped my neighbour."],
        x: [["i don't know", 0], ["i made a card for my friend", 2], ["we play a new game", 1], ["i helped my mom", 3], ["to go to the beach", -1], ["pizza for dinner", -1]]
      }
    ],
    end: "It wasn't the best way to play football, but it was the most fun! Bye!"
  },
  {
    id: 'ta2u04', title: 'Eli and his bees',
    he: 'מדברים עם צ׳אצ׳ו על אלי, שמגדל דבורים על הגג',
    turns: [
      {
        c: "Eli keeps bees on the roof! Would you like to have bees as a hobby?",
        he: 'הייתם רוצים לגדל דבורים? Yes, I would! או No, thank you. They sting!',
        a: [
          { k: ['no not never'], n: 'yes know', r: "No bees for you! That's okay, they can sting." },
          { k: ['yes sure love like cool maybe'], r: "Really? Then you need a special suit, like Eli!" }
        ],
        o: "Bees are amazing, but they are not for everyone!",
        t: ["Yes, I would!", "No, thank you. They sting!"],
        x: [["yes i would", 1], ["yes", 1], ["maybe", 1], ["no thank you", 0], ["no they sting", 0], ["i don't know", -1], ["honey", -1]]
      },
      {
        c: "Eli gave honey to all his neighbours. What do you like to eat with honey?",
        he: "עם מה אתם אוהבים לאכול דבש? With bread. או In my tea. או I don't like honey.",
        a: [
          { k: ['bread toast pita pancake cake cookie waffle'], r: "Honey on bread or pancakes! Sweet and yummy." },
          { k: ['tea milk drink'], r: "Honey in tea! Very nice on a cold day." },
          { k: ['yogurt yoghurt cheese apple fruit banana cereal'], r: "Honey with fruit or yogurt! Sweet and fresh." },
          { k: ['not no nothing hate'], r: "No honey for you? That's okay. More for the bees!" }
        ],
        o: "Yum! Honey makes everything sweeter.",
        t: ["With bread.", "In my tea.", "I don't like honey."],
        x: [["with bread", 0], ["pancakes", 0], ["in tea", 1], ["with apple", 2], ["i don't like honey", 3], ["nothing", 3], ["with chicken", -1], ["everything", -1]]
      },
      {
        c: "Eli's neighbour says his honey is better than shop honey. Which is sweeter, honey or chocolate?",
        he: 'מה מתוק יותר? Honey is sweeter. או Chocolate is sweeter. (sweeter, לא more sweet)',
        a: [
          { k: ['both same'], r: "They are both very sweet! Yum, yum." },
          { k: ['chocolate_is chocolate_more chocolate_sweet chocolate_much'], r: "Chocolate is sweeter! But please don't tell the bees." },
          { k: ['honey'], r: "Honey is sweeter! The bees are very proud." },
          { k: ['chocolate'], r: "Chocolate is sweeter! But please don't tell the bees." }
        ],
        o: "Hmm, both are very sweet! I like crackers more.",
        t: ["Honey is sweeter.", "Chocolate is sweeter than honey.", "They are both sweet."],
        x: [["honey is sweeter", 2], ["honey", 2], ["chocolate is sweeter than honey", 1], ["chocolate more sweet", 1], ["chocolate", 3], ["the same", 0], ["i don't know", -1], ["sugar", -1]]
      },
      {
        c: "Eli is going to start a bee club at his school. What club do you want to start?",
        he: 'איזה מועדון הייתם פותחים? A football club. או A drawing club. או A cooking club.',
        a: [],
        o: "What a great club! I want to join it.",
        t: ["A football club.", "A drawing club for my class.", "I want to start a cooking club."],
        x: [["a dance club", -1], ["club for animals", -1]]
      }
    ],
    end: "Buzz buzz! Thank you for this sweet talk. See you soon!"
  },
  {
    id: 'ta2v03', title: 'What are you like?',
    he: 'מדברים עם צ׳אצ׳ו על אופי: kind, funny, shy, patient',
    turns: [
      {
        c: "My friends say I am funny and a bit lazy. Which words describe you best?",
        he: 'אילו מילים מתארות אתכם? I am kind and funny. או I am a bit shy.',
        a: [
          { k: ['funny lazy crazy silly'], r: "Ha! You sound like great fun, just like me." },
          { k: ['kind nice friendly honest patient helpful good'], r: "Lovely! People like you make the world better." },
          { k: ['clever smart hard hardworking working'], r: "Clever and hard-working! A great mix." },
          { k: ['shy quiet calm'], r: "Quiet people are often great listeners. Lovely." }
        ],
        o: "Thank you for telling me! I like learning about you.",
        t: ["I am kind and funny.", "I am clever and hard-working.", "I am a bit shy."],
        x: [["i am kind and funny", 0], ["funny", 0], ["i am kind", 1], ["i am a honest", 1], ["clever", 2], ["hard working", 2], ["a bit shy", 3], ["i don't know", -1], ["tall", -1]]
      },
      {
        c: "What is more important in a good friend: funny or honest?",
        he: 'מה חשוב יותר בחבר או חברה? Honest is more important. או Funny! או Both.',
        a: [
          { k: ['both'], r: "Both! The perfect friend is funny and honest." },
          { k: ['honest honestly truth'], r: "Honest! Yes, a good friend always tells the truth." },
          { k: ['funny fun laugh'], r: "Funny! Laughing together is the best." },
          { k: ['kind nice patient loyal'], r: "Kind! That is very important too." }
        ],
        o: "Good answer! Good friends are the best thing in the world.",
        t: ["Honest is more important.", "Funny!", "Both of them."],
        x: [["honest", 1], ["i think honest is more important", 1], ["funny", 2], ["both", 0], ["kind", 3], ["rich", -1], ["i don't know", -1]]
      },
      {
        c: "Polly is very patient. She can wait for hours! Are you patient when you wait for something?",
        he: 'אתם סבלניים כשמחכים? Yes, I am patient. או No, I hate waiting! או Sometimes.',
        a: [
          { k: ['sometimes depend little bit'], r: "Sometimes! That is very honest." },
          { k: ['no not hate bored angry'], n: 'yes know', r: "Me neither! Waiting is so boring." },
          { k: ['yes patient okay fine'], r: "You are patient! That is a great thing to be." }
        ],
        o: "Waiting is hard for everyone, even for parrots!",
        t: ["Yes, I am patient.", "No, I hate waiting!", "Sometimes."],
        x: [["yes i am patient", 2], ["yes", 2], ["no i hate waiting", 1], ["i am not patient", 1], ["sometimes", 0], ["a little bit", 0], ["what", -1], ["i don't know", -1]]
      },
      {
        c: "Think of a cartoon or film character. What is this character like?",
        he: 'בחרו דמות מסרט או מסדרה ותארו אותה: Shrek is kind and funny. או Elsa is a bit shy.',
        a: [],
        o: "Ooh, good choice! Characters are so much fun to describe.",
        t: ["Shrek is kind and funny.", "Elsa is a bit shy.", "SpongeBob is silly and happy."],
        x: [["shrek is kind", -1], ["elsa is brave and kind", -1]]
      }
    ],
    end: "Thank you for being so patient with me! See you next time."
  },
  {
    id: 'ta2v04', title: "In Chacho's clothes shop",
    he: 'קונים בחנות של צ׳אצ׳ו: מודדים, משלמים ומקבלים קבלה',
    turns: [
      {
        c: "Welcome to my shop! Would you like to try on this green jacket?",
        he: "רוצים למדוד את הז'קט הירוק? Yes, please! או No, thank you.",
        a: [
          { k: ['no not'], n: 'yes', r: "Okay! Then try on this blue one. It is softer." },
          { k: ['yes sure okay ok please love like'], r: "Here you are! The changing room is on the left." }
        ],
        o: "Here you are! Try it on, it is lovely.",
        t: ["Yes, please!", "No, thank you."],
        x: [["yes please", 1], ["ok", 1], ["no thank you", 0], ["no", 0], ["how much is it", -1], ["red", -1]]
      },
      {
        c: "It looks great on you! It is only five coins today. Is that a bargain or expensive?",
        he: 'זה מציאה או יקר? It is a bargain! או It is too expensive.',
        a: [
          { k: ['not', 'expensive expansive'], r: "Not expensive! I agree, it is a real bargain." },
          { k: ['expensive expansive much'], r: "Expensive? Okay, for you, only three coins!" },
          { k: ['bargain bargin cheap good great deal'], r: "A bargain! I agree. Five coins is nothing." }
        ],
        o: "I think it is a real bargain!",
        t: ["It is a bargain!", "It is too expensive.", "It is not expensive."],
        x: [["it is a bargain", 2], ["cheap", 2], ["too expensive", 1], ["it is not expensive", 0], ["i don't know", -1], ["five coins", -1]]
      },
      {
        c: "Would you like to pay in cash or by card?",
        he: 'איך תשלמו? In cash, please. או By card. (by card, לא with card)',
        a: [
          { k: ['cash coin coins'], r: "Cash! Thank you, and here is your change." },
          { k: ['card credit'], r: "By card! Beep! Thank you very much." }
        ],
        o: "No problem! Today it is free for you.",
        t: ["In cash, please.", "By card."],
        x: [["cash please", 0], ["in cash", 0], ["with card", 1], ["by credit card", 1], ["i have no money", -1], ["free", -1]]
      },
      {
        c: "Here is your receipt. Which other shop do you like: a bookshop, a baker's or a toy shop?",
        he: "איזו חנות עוד אתם אוהבים? I like the bookshop. או The baker's! או A toy shop.",
        a: [
          { k: ['book bookshop bookstore'], r: "A bookshop! I love the smell of new books." },
          { k: ['baker bakery bread cake'], r: "The baker's! Fresh bread in the morning. Yum!" },
          { k: ['toy game'], r: "A toy shop! Fun for everybody." },
          { k: ['sport shoe clothes mall supermarket pet chemist pharmacy'], r: "Ooh, good choice! I love shopping there too." }
        ],
        o: "Okay! Every shop has something nice.",
        t: ["I like the bookshop.", "The baker's!", "A toy shop."],
        x: [["the bookshop", 0], ["i like books", 0], ["bakery", 1], ["the baker's", 1], ["toy shop", 2], ["shoe shop", 3], ["i don't like shops", -1]]
      }
    ],
    end: "Thank you for shopping at Chacho's! Enjoy your new jacket. Bye!"
  },
  {
    id: 'ta2v05', title: 'Hoodies and sandals',
    he: 'מדברים עם צ׳אצ׳ו על בגדים לחורף ולקיץ, ומה לובשים קודם',
    turns: [
      {
        c: "Winter is coming! What do you wear on a cold winter day?",
        he: 'מה לובשים ביום קר? I wear a hoodie. או A coat and a scarf.',
        a: [
          { k: ['hoodie hoody hudi jumper sweater sweatshirt'], r: "A warm hoodie or jumper! Very cosy." },
          { k: ['coat jacket scarf hat glove boot'], r: "Warm clothes from head to toe! Very smart." }
        ],
        o: "Very smart! You will stay nice and warm.",
        t: ["I wear a hoodie.", "A coat and a scarf."],
        x: [["i wear a hoodie", 0], ["sweater", 0], ["a coat and a scarf", 1], ["jacket", 1], ["pyjamas", -1], ["t shirt", -1]]
      },
      {
        c: "And in summer? Do you wear trainers or sandals to the beach?",
        he: 'מה נועלים לים? Sandals! או I wear trainers. או No shoes!',
        a: [
          { k: ['barefoot nothing'], r: "No shoes! You can feel the warm sand." },
          { k: ['no not without', 'shoe'], r: "No shoes! You can feel the warm sand." },
          { k: ['sandal flip flop slipper crocs'], r: "Sandals! Perfect for hot sand." },
          { k: ['trainer sneaker shoe'], r: "Trainers! Good for running on the beach." }
        ],
        o: "Nice! The beach is the best in summer.",
        t: ["Sandals!", "I wear trainers.", "No shoes!"],
        x: [["sandals", 2], ["flip flops", 2], ["i wear trainers", 3], ["sneakers", 3], ["no shoes", 1], ["nothing", 0], ["i don't go to the beach", -1], ["socks", -1]]
      },
      {
        c: "My pyjamas have little crackers on them! What are your favourite pyjamas like?",
        he: "איך נראות הפיג'מות האהובות עליכם? They are blue with stars. או They have cats on them.",
        a: [],
        o: "They sound so cosy! I want some too.",
        t: ["They are blue with stars.", "My pyjamas have cats on them.", "They are soft and grey."],
        x: [["they are pink", -1], ["with unicorns", -1]]
      },
      {
        c: "In the morning, what do you put on first: your socks, your shirt or your trousers?",
        he: 'מה אתם לובשים קודם בבוקר? I put on my socks first. או My shirt first.',
        a: [
          { k: ['sock'], r: "Socks first! Then shoes, of course." },
          { k: ['shirt tshirt top hoodie jumper'], r: "Your shirt first! A great start." },
          { k: ['trouser jeans pants skirt shorts'], r: "Trousers first! Very good." }
        ],
        o: "Interesting! Everybody has their own way.",
        t: ["I put on my socks first.", "My shirt first.", "My trousers first."],
        x: [["socks", 0], ["i put my socks first", 0], ["my shirt", 1], ["t-shirt", 1], ["trousers", 2], ["jeans", 2], ["my glasses", -1], ["i don't know", -1]]
      }
    ],
    end: "Now put on your best smile and have a great day! Bye!"
  },
  {
    id: 'ta2l04', title: 'Who does the chores?',
    he: 'מדברים עם צ׳אצ׳ו על מטלות בבית, כמו אצל איתי ושירה',
    turns: [
      {
        c: "Shira thinks washing the car is fun, but the dishwasher is boring. Which chore is the most boring?",
        he: 'איזו מטלה הכי משעממת? Washing the dishes. או Tidying my room. או Taking out the rubbish.',
        a: [
          { k: ['dish dishes dishwasher'], r: "Washing the dishes! Yes, very boring." },
          { k: ['tidy tidying clean cleaning room floor vacuum sweep bed'], r: "Tidying up! It never ends, I know." },
          { k: ['rubbish garbage trash bin'], r: "Taking out the rubbish! Boring and smelly!" },
          { k: ['laundry clothes fold folding iron'], r: "The laundry! So many socks." }
        ],
        o: "Ha, I agree! Some chores are really boring.",
        t: ["Washing the dishes.", "Tidying my room.", "Taking out the rubbish."],
        x: [["washing the dishes", 0], ["dishwasher", 0], ["clean my room", 1], ["tidy", 1], ["take out the garbage", 2], ["fold the clothes", 3], ["nothing", -1], ["all of them", -1]]
      },
      {
        c: "Itai loves feeding his dog. Which job at home do you like doing best?",
        he: 'איזו עבודה בבית אתם הכי אוהבים? I like cooking. או I like feeding my cat.',
        a: [
          { k: ['cook cooking bake baking'], r: "Cooking! A fun job, and tasty too." },
          { k: ['pet dog cat feed fish bird'], r: "Feeding a pet! Lovely, like Itai." },
          { k: ['clean wash water plant garden car tidy shop shopping'], r: "Ooh, a useful job! Thank you for helping." },
          { k: ['nothing none not no hate'], n: 'know', r: "None? Ha! Chores are not fun for everyone." }
        ],
        o: "Great! Every home needs a helper like you.",
        t: ["I like cooking.", "I like feeding my cat.", "I like watering the plants."],
        x: [["i like cooking", 0], ["feed my dog", 1], ["water the plants", 2], ["washing the car", 2], ["nothing", 3], ["i don't like chores", 3], ["i don't know", -1], ["sleep", -1]]
      },
      {
        c: "Shira's parents say a family is a team, so everybody helps. Do you agree?",
        he: "אתם מסכימים שכולם צריכים לעזור בבית? Yes, I agree. או No, I don't. או Sometimes.",
        a: [
          { k: ['sometimes depend little bit'], r: "A little help is good. Fair enough!" },
          { k: ['no not disagree'], n: 'yes know', r: "Hmm, maybe the grown-ups should do more, then!" },
          { k: ['yes agree right team true'], r: "I agree too! A team works together." }
        ],
        o: "Interesting! Teams are great, at home and at school.",
        t: ["Yes, I agree.", "No, I don't agree.", "Sometimes."],
        x: [["yes i agree", 2], ["i am agree", 2], ["no", 1], ["i don't agree", 1], ["sometimes", 0], ["i don't know", -1], ["my brother", -1]]
      },
      {
        c: "Imagine you have a robot for chores. Which job is it going to do first?",
        he: 'לרובוט שלכם יש עבודה ראשונה. מה? It is going to wash the dishes. או It is going to tidy my room.',
        a: [
          { k: ['homework'], r: "Your homework? Ha! Nice try, clever one." },
          { k: ['dish dishes wash'], r: "Washing the dishes! Smart robot." },
          { k: ['clean tidy room floor vacuum bed'], r: "Tidying up! No more mess." },
          { k: ['cook food dinner breakfast'], r: "Cooking! Yum, a robot chef." }
        ],
        o: "Great choice! I want a robot like that too.",
        t: ["It is going to wash the dishes.", "It is going to tidy my room.", "It is going to cook dinner."],
        x: [["it is going to wash the dishes", 1], ["the dishes", 1], ["tidy my room", 2], ["my homework", 0], ["cook dinner", 3], ["walk the dog", -1], ["everything", -1]]
      }
    ],
    end: "Thank you for chatting! Now I am going to tidy my feathers. See you!"
  },
  {
    id: 'ta2l05', title: 'House rules',
    he: "מדברים עם צ׳אצ׳ו על חוקים בבית ובבית הספר: have to ו-don't have to",
    turns: [
      {
        c: "At Roni's house, everyone has to put their phones in a box at dinner. Is that a good rule?",
        he: "זה חוק טוב? Yes, it is a good rule. או No, I don't like it.",
        a: [
          { k: ['no not bad'], n: 'yes know', r: "Not a good rule for you? Hmm, phones are fun!" },
          { k: ['yes good great agree nice'], r: "I agree! Dinner is for talking." }
        ],
        o: "Interesting! Every home has different rules.",
        t: ["Yes, it is a good rule.", "No, I don't like it."],
        x: [["yes it is a good rule", 1], ["good", 1], ["no", 0], ["it is not good", 0], ["i don't know", -1], ["phones", -1]]
      },
      {
        c: "In my shop, you have to take off your shoes. What do kids have to do at school?",
        he: 'מה ילדים חייבים לעשות בבית הספר? We have to do homework. או We have to wear a uniform.',
        a: [
          { k: ['homework'], r: "Homework! Yes, kids have to do homework." },
          { k: ['uniform wear shirt'], r: "You have to wear a uniform! I like colourful clothes more." },
          { k: ['listen quiet sit hand late time early learn study teacher'], r: "You have to listen and be on time. Fair rules!" }
        ],
        o: "School has lots of rules! My shop has only one.",
        t: ["We have to do homework.", "We have to wear a uniform.", "We have to listen to the teacher."],
        x: [["we have to do homework", 0], ["we must to do homework", 0], ["wear uniform", 1], ["listen to the teacher", 2], ["be quiet", 2], ["play", -1], ["i don't know", -1]]
      },
      {
        c: "At Roni's house, Max doesn't have to go to bed early. What don't you have to do at the weekend?",
        he: "מה אתם לא חייבים לעשות בסוף השבוע? I don't have to go to school. או I don't have to wake up early.",
        a: [
          { k: ['school'], r: "You don't have to go to school! Lovely." },
          { k: ['wake get_up early alarm'], r: "You don't have to get up early! Sleep is the best." },
          { k: ['homework study'], r: "No homework! Lovely." }
        ],
        o: "Weekends are great! No rush at all.",
        t: ["I don't have to go to school.", "I don't have to wake up early.", "I don't have to do homework."],
        x: [["i don't have to go to school", 0], ["school", 0], ["i not have to wake up early", 1], ["get up early", 1], ["homework", 2], ["everything", -1], ["i don't know", -1]]
      },
      {
        c: "Imagine you make the rules for one day. What is your first rule?",
        he: 'אתם קובעים את החוקים ליום אחד. מה החוק הראשון? Everyone has to eat ice cream! או No homework!',
        a: [
          { k: ['ice_cream candy sweet chocolate pizza dessert cake'], r: "Sweet food for everyone? That is my kind of rule!" },
          { k: ['homework school test'], r: "No homework? The kids are going to love you!" },
          { k: ['phone game screen tv'], r: "A rule about games and screens! Very interesting." },
          { k: ['play dance party fun music'], r: "A fun rule! Everybody is going to be happy." }
        ],
        o: "Ha! I love it. You make great rules.",
        t: ["Everyone has to eat ice cream!", "No homework!", "Everybody can play games all day."],
        x: [["everyone have to eat ice cream", 0], ["no homework", 1], ["no school", 1], ["everybody can play games", 2], ["party all day", 3], ["be nice", -1], ["sleep late", -1]]
      }
    ],
    end: "Here is my rule for you: you have to come back soon! Bye!"
  },
  {
    id: 'ta2l06', title: 'Bikes in Amsterdam',
    he: 'מדברים עם צ׳אצ׳ו על השכרת אופניים באמסטרדם, כמו ליה ואבא שלה',
    turns: [
      {
        c: "Lia and her dad rented bikes in Amsterdam. Do you like riding a bike?",
        he: 'אתם אוהבים לרכוב על אופניים? Yes, I love it! או No, not really.',
        a: [
          { k: ['no not cant'], n: 'yes know', r: "That's okay! In Amsterdam you can also take a boat." },
          { k: ['yes love like sure'], r: "Me too! Well, I fly, but bikes look fun." }
        ],
        o: "Amsterdam has lots of bikes, and lots of fun!",
        t: ["Yes, I love it!", "No, not really."],
        x: [["yes i love it", 1], ["yes", 1], ["no not really", 0], ["i can't ride a bike", 0], ["i don't know", -1], ["scooter", -1]]
      },
      {
        c: "Imagine you rent a bike for one day. Where do you want to ride?",
        he: 'לאן תרכבו? I want to ride in the park. או By the sea.',
        a: [
          { k: ['park'], r: "In the park, like Lia! Green and lovely." },
          { k: ['beach sea promenade'], r: "By the sea! Fresh air and a great view." },
          { k: ['city town centre center around everywhere'], r: "Around the city! You can see everything." },
          { k: ['forest mountain hill nature tree field'], r: "In nature! Lots of trees and birds." }
        ],
        o: "That sounds like a great ride!",
        t: ["I want to ride in the park.", "By the sea.", "Around the city."],
        x: [["in the park", 0], ["by the sea", 1], ["the beach", 1], ["around the city", 2], ["in the forest", 3], ["to my friend", -1], ["far", -1]]
      },
      {
        c: "Lia has to wear a helmet. Do you think kids should always wear a helmet?",
        he: 'ילדים צריכים תמיד לחבוש קסדה? Yes, it is safer. או No, not always.',
        a: [
          { k: ['no not'], n: 'yes know', r: "Hmm, I think a helmet is always a good idea!" },
          { k: ['yes always should agree safe safer important'], r: "Yes! A helmet keeps your head safe." }
        ],
        o: "Safety first, and fun second!",
        t: ["Yes, it is safer.", "No, not always."],
        x: [["yes always", 1], ["it is safer", 1], ["no", 0], ["not always", 0], ["i don't know", -1], ["they are hot", -1]]
      },
      {
        c: "In Amsterdam you can rent a bike or a boat. Which one do you want to rent?",
        he: 'מה תשכירו? I want to rent a boat. או A bike, please!',
        a: [
          { k: ['both'], r: "Both! A busy and happy day." },
          { k: ['boat'], r: "A boat! You can see the city from the water." },
          { k: ['bike bicycle'], r: "A bike! Fast and fun, like Lia." }
        ],
        o: "Great choice! Amsterdam is waiting for you.",
        t: ["I want to rent a boat.", "A bike, please!", "Both!"],
        x: [["a boat", 1], ["i want rent a boat", 1], ["bike", 2], ["both", 0], ["a car", -1], ["i don't know", -1]]
      }
    ],
    end: "Have a great ride! And don't forget your helmet. Bye!"
  },
  {
    id: 'ta2l07', title: 'The surprise party',
    he: 'מדברים עם צ׳אצ׳ו על מסיבת ההפתעה של אחותו של דניאל',
    turns: [
      {
        c: "Everyone jumped up and shouted Surprise at the pizza man! What do you think he did?",
        he: 'מה עשה השליח? בעבר: He dropped the pizzas! או He laughed.',
        a: [
          { k: ['drop dropped fell fall pizza'], r: "He dropped the pizzas! Poor pizza man." },
          { k: ['laugh smile happy funny'], r: "He laughed! What a funny surprise for him." },
          { k: ['scare scared afraid shock jump jumped scream ran run running surprised'], r: "He was so surprised that he dropped the pizzas!" }
        ],
        o: "Ha! I think he got the surprise of his life.",
        t: ["He dropped the pizzas!", "He laughed.", "He was scared and ran away."],
        x: [["he dropped the pizzas", 0], ["he drop the pizza", 0], ["he laugh", 1], ["he was scared", 2], ["he run away", 2], ["he said thank you", -1], ["i don't know", -1]]
      },
      {
        c: "Daniel's sister loves cats, so her cake was a cat! If you can choose, what shape is your cake?",
        he: 'אם הייתם בוחרים, באיזו צורה תהיה העוגה שלכם? A unicorn cake! או A football cake.',
        a: [
          { k: ['cat dog unicorn horse dinosaur panda rabbit bear lion parrot bird fish animal puppy'], r: "An animal cake! Cute and yummy." },
          { k: ['ball football car castle heart star number rainbow flower game'], r: "Ooh, what a cool shape!" },
          { k: ['not no nothing'], r: "No special shape? A big round cake is great too!" }
        ],
        o: "Ooh, what a fun cake! I want a piece.",
        t: ["A unicorn cake!", "A football cake.", "A big star."],
        x: [["a unicorn cake", 0], ["dog", 0], ["a football cake", 1], ["a star", 1], ["no special shape", 2], ["i don't know", 2], ["minecraft", -1], ["chocolate", -1]]
      },
      {
        c: "Do you like surprise parties, or do you like to know about the party before?",
        he: 'אתם אוהבים מסיבות הפתעה, או לדעת מראש? I love surprises! או I like to know before.',
        a: [
          { k: ['not hate'], n: 'know', r: "No surprises for you! Okay, I promise." },
          { k: ['to_know before plan'], r: "You like to know! Then you can choose your clothes." },
          { k: ['surprise love like yes'], r: "Surprises are the best! I love them too." }
        ],
        o: "Interesting! Everybody is different.",
        t: ["I love surprises!", "I like to know before.", "I don't like surprises."],
        x: [["i love surprises", 2], ["surprise parties", 2], ["i like to know before", 1], ["before", 1], ["i don't like surprises", 0], ["i hate surprises", 0], ["i don't know", -1], ["cake", -1]]
      },
      {
        c: "The best part for Daniel was the cake. What is the best part of a party for you?",
        he: 'מה החלק הכי טוב במסיבה? The cake! או Dancing with my friends. או The presents.',
        a: [
          { k: ['present gift'], r: "The presents! Opening them is so exciting." },
          { k: ['dance dancing music game play'], r: "Dancing and games! The fun part." },
          { k: ['friend people everyone everybody'], r: "Being with friends! The best part." },
          { k: ['cake food pizza candy sweet eat snack'], r: "The food! I always go to the snacks first." }
        ],
        o: "Great answer! Parties are so much fun.",
        t: ["The cake!", "Dancing with my friends.", "The presents."],
        x: [["the cake", 3], ["dancing with my friends", 1], ["presents", 0], ["my friends", 2], ["the balloons", -1], ["everything", -1]]
      }
    ],
    end: "What a fun party story! Next time, I want a cracker cake. Bye!"
  },
  {
    id: 'ta2l08', title: 'Hobbies on the radio',
    he: 'מדברים עם צ׳אצ׳ו על תחביבים, כמו של יונתן ואמילי',
    turns: [
      {
        c: "Yonatan skateboards and Emily bakes. Which hobby do you like more, skateboarding or baking?",
        he: 'איזה תחביב אתם אוהבים יותר? I like baking more. או Skateboarding! או Both.',
        a: [
          { k: ['both'], r: "Both! Sport first, then cake. Perfect!" },
          { k: ['bake baking cake cook cooking'], n: 'not', r: "Baking! Yum. I love lemon cake too." },
          { k: ['skate skateboard skateboarding skating board'], n: 'not', r: "Skateboarding! Cool. Don't forget your helmet!" },
          { k: ['not no neither none'], n: 'know', r: "Not those? That's okay, there are lots of hobbies!" }
        ],
        o: "Great! Every hobby is a good hobby.",
        t: ["I like baking more.", "Skateboarding!", "Both of them."],
        x: [["i like baking more", 1], ["baking", 1], ["skateboarding", 2], ["skate", 2], ["both", 0], ["i don't like them", 3], ["neither", 3], ["i don't know", -1], ["football", -1]]
      },
      {
        c: "There are so many hobbies! What new hobby do you want to try one day?",
        he: 'איזה תחביב חדש תרצו לנסות? I want to try karate. או I want to play the guitar.',
        a: [
          { k: ['football basketball tennis swim swimming dance dancing gym run running sport karate judo ballet volleyball skate skateboard surf climb climbing horse riding'], r: "A sport! You are going to love it." },
          { k: ['draw drawing paint art music guitar piano sing violin drum photo'], r: "Art or music! What a lovely idea." },
          { k: ['bake baking cake cook cooking'], r: "Baking, like Emily! Yum, I want a piece." },
          { k: ['read book write writing story'], r: "Reading and stories! Books are my favourite too." }
        ],
        o: "Ooh! There is a hobby for everyone.",
        t: ["I want to try karate.", "I want to play the guitar.", "I want to try baking."],
        x: [["i want to try karate", 0], ["swimming", 0], ["play the guitar", 1], ["drawing", 1], ["cooking", 2], ["bake cakes", 2], ["read books", 3], ["i don't know", -1], ["nothing", -1], ["video games", -1]]
      },
      {
        c: "Yonatan collects football cards. He has more than five hundred! Do you collect anything?",
        he: "אתם אוספים משהו? I collect stickers. או No, I don't.",
        a: [
          { k: ['card sticker stamp coin toy doll stone shell lego figure book pokemon rock'], r: "Ooh, a collection! That is so cool." },
          { k: ['no not nothing'], r: "That's okay! I collect feathers. I have hundreds." }
        ],
        o: "Ooh, interesting! I collect feathers, of course.",
        t: ["I collect stickers.", "No, I don't."],
        x: [["i collect stickers", 0], ["pokemon cards", 0], ["no i don't", 1], ["nothing", 1], ["yes", -1], ["i collecting", -1]]
      },
      {
        c: "Emily is not very good at the guitar because she doesn't practise. What do you practise a lot?",
        he: 'במה אתם מתאמנים הרבה? I practise football. או I practise the piano. או English!',
        a: [
          { k: ['english'], r: "English! And you are practising with me right now." },
          { k: ['football basketball tennis swim swimming dance dancing sport run running gym karate'], r: "Sport! Practice makes you stronger." },
          { k: ['piano guitar music sing violin drum draw drawing'], r: "Music and art! Practice makes perfect." },
          { k: ['nothing not'], r: "That's okay! Today you practised English with me." }
        ],
        o: "Great! Practice makes perfect.",
        t: ["I practise football.", "I practise the piano.", "I practise English with you!"],
        x: [["i practise football", 1], ["the piano", 2], ["english", 0], ["i practice english with you", 0], ["nothing", 3], ["math", -1], ["homework", -1]]
      }
    ],
    end: "You have great hobbies! Keep having fun, like Yonatan and Emily. See you again soon!"
  },
  {
    id: 'ta2l09', title: 'Have you ever...?',
    he: 'משחקים עם צ׳אצ׳ו ב-Have you ever, כמו תמר ואריאל באוטובוס',
    turns: [
      {
        c: "Ariel has been on a plane twice. Have you ever been on a plane?",
        he: 'טסתם פעם במטוס? Yes, I have. או No, never.',
        a: [
          { k: ['no never not'], n: 'yes remember know', r: "Never? Like Tamar! That's fine. I don't need a plane, I have wings." },
          { k: ['yes once twice times lot have'], r: "You have! I always fly without a plane, ha!" }
        ],
        o: "Ha! Planes are fun, but wings are better.",
        t: ["Yes, I have.", "No, never."],
        x: [["yes i have", 1], ["yes 2 times", 1], ["no never", 0], ["i have never", 0], ["i don't remember", -1], ["what is plane", -1]]
      },
      {
        c: "Tamar touched a snake at the zoo. Have you ever touched a snake?",
        he: 'נגעתם פעם בנחש? Yes, I have! או No, I have never touched a snake.',
        a: [
          { k: ['no never not'], n: 'yes remember know', r: "Never? Me neither, like Ariel. Snakes are not for me!" },
          { k: ['yes once twice have touch zoo'], r: "Wow, you have touched one! You are brave." }
        ],
        o: "Fun fact: snakes feel cold and dry, not wet!",
        t: ["Yes, I have!", "No, I have never touched a snake."],
        x: [["no never", 0], ["no i not touch", 0], ["yes i have", 1], ["yes i touch a snake", 1], ["i don't remember", -1], ["eww", -1]]
      },
      {
        c: "Ariel won a drawing competition. Have you ever won a prize?",
        he: 'זכיתם פעם בפרס? Yes, I won a medal! או Only in video games. או Not yet!',
        a: [
          { k: ['game video'], r: "Prizes in games! Ha, like Tamar. That counts for me!" },
          { k: ['no never not'], n: 'yes remember know', r: "Not yet? That's okay, me neither! Fun is the best prize." },
          { k: ['yes won win once twice medal cup prize competition have'], r: "You have won a prize! Fabulous." }
        ],
        o: "Prizes are nice, but having fun is the real prize!",
        t: ["Yes, I won a medal!", "Only in video games.", "Not yet!"],
        x: [["only in video games", 0], ["yes in games", 0], ["no", 1], ["not yet", 1], ["yes i won a medal", 2], ["yes i win", 2], ["i don't remember", -1], ["maybe", -1]]
      },
      {
        c: "Now you ask me! Start with 'Have you ever'. What do you want to know?",
        he: 'עכשיו אתם שואלים את צ׳אצ׳ו: Have you ever eaten sushi? או Have you ever been to Paris?',
        a: [
          { k: ['eat eaten ate food sushi pizza'], r: "Have I ever eaten that? No, never! Only crackers." },
          { k: ['swim swum swam swimming sea'], r: "Have I ever swum? Once! My feathers got so wet." },
          { k: ['been go went gone visit travel country'], r: "Have I ever been there? Yes! I flew there once." },
          { k: ['see seen saw meet met touch touched ride'], r: "Yes, I have! It was amazing." }
        ],
        o: "Ooh, good question! I love questions like that.",
        t: ["Have you ever eaten sushi?", "Have you ever been to Paris?", "Have you ever seen a snake?"],
        x: [["have you ever eat sushi", 0], ["have you ever been to paris", 2], ["have you ever go to london", 2], ["have you ever swim", 1], ["have you ever seen a cat", 3], ["do you like me", -1], ["have you ever danced", -1]]
      }
    ],
    end: "Great questions! You are a real Have you ever star. Bye bye!"
  },
  {
    id: 'ta2r02', title: 'Tilly the hero',
    he: 'מדברים עם צ׳אצ׳ו על טילי, שזכרה שיעור גיאוגרפיה ועזרה לאנשים',
    turns: [
      {
        c: "Tilly remembered her geography lesson and helped many people. How do you think she felt after that?",
        he: 'איך טילי הרגישה אחר כך? She felt proud. או She was very happy.',
        a: [
          { k: ['proud happy good great hero amazing'], r: "She felt proud and happy! A real hero." },
          { k: ['surprise surprised shock shocked tired scare scared afraid nervous'], r: "Surprised at first, I think, and then very proud!" }
        ],
        o: "I think she felt very proud.",
        t: ["She felt proud.", "She was very happy.", "She was surprised."],
        x: [["she felt proud", 0], ["she feel happy", 0], ["surprised", 1], ["she was afraid", 1], ["tired", 1], ["i don't know", -1], ["she ran to the hotel", -1]]
      },
      {
        c: "Her mum didn't believe her at first, but Tilly didn't stop. Was she brave, do you think?",
        he: 'האם טילי הייתה אמיצה? Yes, she was very brave! או Yes, and clever too.',
        a: [
          { k: ['no not'], n: 'yes know', r: "Hmm, maybe! I think it is hard to keep going like that." },
          { k: ['yes brave very clever smart right'], r: "Yes, very brave! She didn't give up." }
        ],
        o: "I think she was brave and very clever.",
        t: ["Yes, she was very brave!", "Yes, and clever too.", "No, she was just lucky."],
        x: [["yes she was brave", 1], ["very brave", 1], ["no", 0], ["not really", 0], ["i don't know", -1], ["lucky", -1]]
      },
      {
        c: "Tilly learned something useful at school. What useful thing did you learn this year?",
        he: 'מה למדתם השנה שהיה שימושי? I learned to swim. או I learned new English words.',
        a: [
          { k: ['english word'], r: "New English words! Very useful, like today." },
          { k: ['swim swimming cook cooking bike ride'], r: "Very useful! Well done." },
          { k: ['math maths science history geography computer planet space animal'], r: "Ooh, interesting! Lessons like that can be very useful." },
          { k: ['nothing not know remember'], r: "That's okay! Today you learned new things with me." }
        ],
        o: "Thank you for telling me! Learning new things is fun.",
        t: ["I learned new English words.", "I learned to swim.", "I learned about the planets."],
        x: [["i learned new english words", 0], ["english", 0], ["i learned to swim", 1], ["about the planets", 2], ["math", 2], ["i don't remember", 3], ["nothing", 3], ["to be nice", -1]]
      },
      {
        c: "Imagine you are a teacher for one day. What are you going to teach your class?",
        he: 'אתם המורים ליום אחד. מה תלמדו? I am going to teach art. או I am going to teach English.',
        a: [
          { k: ['english'], r: "English! Like me. You are going to be great." },
          { k: ['math maths number'], r: "Maths! Numbers are so important." },
          { k: ['art draw drawing music dance cook cooking sport football game'], r: "Ooh, a fun lesson! Your class is going to love it." },
          { k: ['science animal space planet nature sea geography wave'], r: "Science! Maybe your class can help people, like Tilly." }
        ],
        o: "What a great lesson! I want to be in your class.",
        t: ["I am going to teach art.", "I am going to teach English.", "I am going to teach science."],
        x: [["i am going to teach english", 0], ["math", 1], ["art", 2], ["i teach football", 2], ["science", 3], ["about animals", 3], ["history", -1], ["nothing", -1]]
      }
    ],
    end: "Thank you for the talk! School lessons can be very useful. See you soon!"
  },
  {
    id: 'ta2r03', title: 'Small town or big city?',
    he: "מדברים עם צ׳אצ׳ו על עיירה קטנה מול עיר גדולה, כמו גילי וג'וש",
    turns: [
      {
        c: "Gili lives in a small, quiet town. Josh lives in a big, busy city. Which one do you like more?",
        he: 'מה אתם אוהבים יותר? A small town. או A big city. או Both!',
        a: [
          { k: ['both'], r: "Both! A city in the week and a town at the weekend." },
          { k: ['city big busy josh london'], r: "A big city! You never get bored there." },
          { k: ['small town quiet gili village'], r: "A small town! Quiet, safe and clean air." }
        ],
        o: "Good choice! Both have good things.",
        t: ["A small town.", "A big city.", "I like both!"],
        x: [["a big city", 1], ["city", 1], ["small town", 2], ["i like the town of gili", 2], ["both", 0], ["the beach", -1], ["i don't know", -1]]
      },
      {
        c: "Why do you like it? What is one good thing about it?",
        he: 'למה? השוו עם er או more: It is quieter and safer. או There are more shops.',
        a: [
          { k: ['quiet quieter safe safer clean cleaner air nature mountain calm green'], r: "Quieter and cleaner! That is a great reason." },
          { k: ['shop shopping cinema museum park fun bored thing lot more busy busier'], r: "Busier and more fun! There is always something to do." },
          { k: ['friend people everybody'], r: "People make a place special! Great reason." }
        ],
        o: "That is a great reason!",
        t: ["It is quieter and safer.", "There are more shops and cinemas.", "My friends are there."],
        x: [["it is quieter", 0], ["more quiet and more safe", 0], ["there are more shops", 1], ["you never get bored", 1], ["my friends are there", 2], ["i don't know", -1], ["because", -1]]
      },
      {
        c: "Gili sometimes feels bored at the weekend. What do you do when you are bored?",
        he: 'מה אתם עושים כשמשעמם לכם? I read a book. או I play games. או I go outside.',
        a: [
          { k: ['read book'], r: "Reading! A book is never boring." },
          { k: ['outside walk bike park ball football'], r: "Going outside! Great idea, fresh air helps." },
          { k: ['game play phone computer tv watch youtube'], r: "Games and videos! Fun for a quiet afternoon." },
          { k: ['sleep eat snack draw drawing'], r: "Good idea! I do that too sometimes." }
        ],
        o: "Ha! When I am bored, I talk to myself in the mirror.",
        t: ["I read a book.", "I play games.", "I go outside."],
        x: [["i read a book", 0], ["go outside", 1], ["i play football", 1], ["i play on the computer", 2], ["watch tv", 2], ["sleep", 3], ["i call my friend", -1], ["nothing", -1]]
      },
      {
        c: "Imagine Josh visits Gili's town. What is she going to show him?",
        he: "מה גילי תראה לג'וש? She is going to show him the mountains. או Her friends.",
        a: [
          { k: ['mountain view nature hill tree forest'], r: "The mountains! Josh can't see those in London." },
          { k: ['bike ride riding'], r: "A bike ride! Josh can't ride alone in London." },
          { k: ['school friend house home family'], r: "Her friends and her town! A warm welcome." },
          { k: ['food eat cafe restaurant ice_cream'], r: "The local food! Yum." }
        ],
        o: "Good idea! Josh is going to love it.",
        t: ["She is going to show him the mountains.", "Her friends.", "They are going to ride bikes."],
        x: [["the mountains", 0], ["she is going to show him the mountains", 0], ["ride a bike", 1], ["her friends", 2], ["her school", 2], ["good food", 3], ["everything", -1], ["the cinema", -1]]
      }
    ],
    end: "Small town or big city, every place has something great. Bye for now!"
  },
  {
    id: 'ta2r04', title: 'Rainbow talk',
    he: 'מדברים עם צ׳אצ׳ו על הקשת בענן: צבעים, סיפורים ועובדות',
    turns: [
      {
        c: "A rainbow has seven colours. Which colour of the rainbow do you like best?",
        he: 'איזה צבע בקשת אתם הכי אוהבים? I like blue best. או My favourite is purple.',
        a: [
          { k: ['red orange yellow'], r: "A warm, sunny colour! Very happy." },
          { k: ['green blue'], r: "Green or blue! Green is my favourite, like my feathers." },
          { k: ['indigo violet purple pink'], r: "Purple! A very magical colour." }
        ],
        o: "Fabulous! Every colour is beautiful.",
        t: ["I like blue best.", "My favourite is purple.", "Red, like fire!"],
        x: [["blue", 1], ["i like red best", 0], ["yellow", 0], ["purple", 2], ["violet", 2], ["all of them", -1], ["black", -1]]
      },
      {
        c: "Imagine you find the leprechaun's pot of gold. What are you going to do with it?",
        he: 'מצאתם את סיר הזהב. מה תעשו איתו? I am going to share it. או I am going to buy a horse.',
        a: [
          { k: ['give share family friend help everyone'], r: "You are going to share it! That is so kind." },
          { k: ['travel trip holiday world fly'], r: "A trip around the world! Fabulous." },
          { k: ['keep save bank hide'], r: "You are going to keep it safe. Very clever!" },
          { k: ['buy shop shopping'], r: "Shopping! Ooh, my clothes shop is open, you know." }
        ],
        o: "Ooh, exciting! But don't tell the leprechaun.",
        t: ["I am going to share it.", "I am going to buy a horse.", "I am going to travel the world."],
        x: [["i am going to share it", 0], ["give to my family", 0], ["travel the world", 1], ["keep it", 2], ["i buy a horse", 3], ["i will buy toys", 3], ["eat it", -1], ["nothing", -1]]
      },
      {
        c: "In Hawaii, even the cars have rainbows on them! What do you want to paint a rainbow on?",
        he: 'על מה הייתם מציירים קשת? On my bike. או On my school bag. או On a big wall.',
        a: [],
        o: "What a colourful idea! I love it.",
        t: ["On my bike.", "On my school bag.", "On a big wall."],
        x: [["on my room", -1], ["on my bike", -1]]
      },
      {
        c: "In a double rainbow, the colours are in the opposite order. Have you ever seen one?",
        he: 'ראיתם פעם קשת כפולה? Yes, I have! או No, never.',
        a: [
          { k: ['no never not'], n: 'yes remember know', r: "Not yet! Next time, look for it with the sun behind you." },
          { k: ['yes once twice have saw seen'], r: "Wow, lucky you! A double rainbow is magic." }
        ],
        o: "Keep looking at the sky! Maybe you will see one soon.",
        t: ["Yes, I have!", "No, never."],
        x: [["yes i have", 1], ["yes i saw one", 1], ["no never", 0], ["no", 0], ["i don't remember", -1], ["a moonbow", -1]]
      }
    ],
    end: "Next time you see a rainbow, remember our talk! Bye bye!"
  },
  // Month 2 missions (2026-11-01)
  {
    id: 'ta2g10', title: 'The one who makes you laugh',
    he: 'מדברים עם צ׳אצ׳ו על אנשים, דברים ומקומות עם who, which, that, where',
    turns: [
      {
        c: "I'm a parrot who loves hats. What is a place where you feel happy?",
        he: 'מקום שבו אתם מרגישים שמחים: The beach is a place where I feel happy.',
        a: [
          { k: ['beach sea pool'], r: "The beach! A place where you can swim and play." },
          { k: ['park garden playground forest field'], r: "Outside in the green! Lovely and quiet." },
          { k: ['home room bed house'], r: "Home, sweet home! A place where you can relax." },
          { k: ['school class library'], r: "A place where you learn things! I like that." }
        ],
        o: "What a lovely place! Thank you for telling me.",
        t: ["The beach is a place where I feel happy.", "My room is a place where I relax.", "The park!"],
        m: "The beach is a place where I feel really happy.",
        x: [["the beach", 0], ["the sea is a place where i feel happy", 0], ["in the park", 1], ["my room", 2], ["at my house", 2], ["the library", 3], ["grandma", -1], ["i don't know", -1]]
      },
      {
        c: "Think of a person who makes you laugh. Who is it?",
        he: 'מי האדם שמצחיק אתכם? My friend is a person who makes me laugh.',
        a: [
          { k: ['friend'], r: "Friends who make us laugh are the best friends!" },
          { k: ['mom mum mother dad father brother sister grandma grandpa cousin aunt uncle family'], r: "Family who make you laugh! How lovely." },
          { k: ['teacher'], r: "A funny teacher! Lessons are more fun like that." },
          { k: ['chacho chaco parrot myself'], r: "Ha! A silly parrot who makes you laugh. That's me!" }
        ],
        o: "Laughing together is the best!",
        t: ["My friend is a person who makes me laugh.", "My teacher makes me laugh.", "My cousin is very funny."],
        x: [["my friend", 0], ["my best friend who is funny", 0], ["my mom", 1], ["my brother make me laugh", 1], ["the teacher", 2], ["chacho", 3], ["my cat", -1], ["nobody", -1]]
      },
      {
        c: "I have a hat which glows in the dark! What is a thing which you really love?",
        he: 'מה הדבר שאתם הכי אוהבים? A ball which I play with every day.',
        a: [],
        o: "Ooh, that sounds great! Thank you for telling me.",
        t: ["A ball which I play with every day.", "The bike that I got for my birthday.", "A book that I read again and again."],
        m: "I love the book that my friend gave me.",
        x: [["my phone", -1], ["a ball which i play", -1]]
      },
      {
        c: "Imagine you have a shop. Is it a shop which sells toys, books or hats?",
        he: 'איזו חנות הייתם פותחים? A shop which sells toys. או A shop that sells books.',
        a: [
          { k: ['toy game'], r: "A shop which sells toys! Every kid is going to visit." },
          { k: ['book comic'], r: "A shop which sells books! I can read all day." },
          { k: ['hat cap clothes dress shoe shirt'], r: "A shop which sells hats and clothes! Fabulous, like my hats." },
          { k: ['food pizza ice_cream candy sweet cake animal pet'], r: "Ooh, what a good idea for a shop!" }
        ],
        o: "What a fun shop! I want to visit it.",
        t: ["A shop which sells toys.", "A shop that sells books.", "A shop which sells hats, like yours!"],
        m: "My shop is a shop which sells toys and games.",
        x: [["toys", 0], ["a shop which sell toys", 0], ["books", 1], ["hats", 2], ["clothes for kids", 2], ["pets", 3], ["i don't know", -1], ["flowers", -1]]
      }
    ],
    end: "Thank you! You are a friend who is great at English. Bye!"
  },
  {
    id: 'ta2g11', title: 'Have you ever?',
    he: 'מדברים עם צ׳אצ׳ו על חוויות: Have you ever...?',
    turns: [
      {
        c: "I have flown over the sea many times! Have you ever been on a plane?",
        he: "הייתם פעם במטוס? Yes, I have! או No, I have never been on a plane.",
        a: [
          { k: ['no not never'], n: 'yes know', r: "Not yet! One day you will fly, like me." },
          { k: ['yes have many once twice'], r: "You have been on a plane! Flying is so much fun." }
        ],
        o: "Flying is fun, but I like my wings best!",
        t: ["Yes, I have!", "No, I have never been on a plane."],
        m: "Yes, I have. I have been on a plane twice.",
        x: [["yes i have", 1], ["yes many times", 1], ["no i haven't", 0], ["never", 0], ["i don't know", -1], ["maybe", -1]]
      },
      {
        c: "I have never seen snow. Have you ever seen snow?",
        he: 'ראיתם פעם שלג? Yes, I have seen snow. או No, I have never seen snow.',
        a: [
          { k: ['no not never'], n: 'yes know', r: "Me neither! Maybe one day we will see it together." },
          { k: ['yes have once'], r: "You have seen snow! Lucky you. It looks so soft." }
        ],
        o: "Snow is a mystery for this parrot!",
        t: ["Yes, I have seen snow.", "No, I have never seen snow."],
        x: [["yes i have seen snow", 1], ["yes once", 1], ["no never", 0], ["i have never seen snow", 0], ["i don't know", -1], ["it is cold", -1]]
      },
      {
        c: "Ooh! What is something fun that you have done this week?",
        he: 'מה עשיתם השבוע שהיה כיף? I have played football with my friends.',
        a: [],
        o: "That sounds like a lovely week!",
        t: ["I have played football with my friends.", "I have read a new book.", "I have learned a new song."],
        x: [["i played football", -1], ["i have read a book", -1]]
      },
      {
        c: "What is a place you have never visited, but want to visit one day?",
        he: 'לאיזה מקום עוד לא הגעתם ורוצים להגיע? I have never been to Japan.',
        a: [],
        o: "Ooh, good choice! I hope you go there one day.",
        t: ["I have never been to Eilat.", "I have never visited London.", "I want to visit Japan."],
        x: [["japan", -1], ["i never been to paris", -1]]
      }
    ],
    end: "I have really enjoyed our chat! See you again soon."
  },
  {
    id: 'ta2g12', title: 'Trips: ever and when',
    he: 'מדברים עם צ׳אצ׳ו על טיולים: have been ו-went',
    turns: [
      {
        c: "I have been to many beaches. Have you ever been to the Dead Sea?",
        he: "הייתם פעם בים המלח? Yes, I have! או No, I haven't been there.",
        a: [
          { k: ['no not never'], n: 'yes know', r: "Not yet! The water is so salty that you float." },
          { k: ['yes have went'], r: "You have been there! Floating there is so strange." }
        ],
        o: "The Dead Sea is the lowest place on land. Amazing!",
        t: ["Yes, I have!", "No, I haven't been there."],
        x: [["yes i have", 1], ["yes i went there last year", 1], ["no i haven't", 0], ["never", 0], ["what is it", -1], ["i don't know", -1]]
      },
      {
        c: "When did you last go to the beach?",
        he: 'מתי הייתם בפעם האחרונה בים? I went there last summer. או Two years ago.',
        a: [
          { k: ['never not'], n: 'know remember', r: "Never? Then the beach is waiting for you!" },
          { k: ['year'], r: "That was a while ago. Time for another trip!" },
          { k: ['yesterday week weekend month ago summer today'], r: "Not long ago! Lucky you." }
        ],
        o: "The beach is always waiting for you!",
        t: ["I went there last summer.", "I went there two years ago.", "I went there last week."],
        m: "I went to the beach last weekend with my friends.",
        x: [["last summer", 2], ["i went there two years ago", 1], ["last week", 2], ["i have never been", 0], ["i don't know", -1], ["in tel aviv", -1]]
      },
      {
        c: "What is the best trip you have ever been on?",
        he: 'מה הטיול הכי טוב שהייתם בו? A trip to the north with my class.',
        a: [],
        o: "What a great trip! Thank you for telling me.",
        t: ["A trip to the north with my class.", "A trip to Eilat.", "A day at the zoo."],
        x: [["the zoo", -1], ["a trip to eilat", -1]]
      },
      {
        c: "And what did you do there?",
        he: 'ומה עשיתם שם? We swam in the sea. או We saw a lot of animals.',
        a: [],
        o: "Wow, that sounds like a lot of fun!",
        t: ["We swam in the sea.", "We saw a lot of animals.", "We walked in the forest."],
        m: "We walked by a river and had a picnic.",
        x: [["we swim", -1], ["we saw animals", -1]]
      }
    ],
    end: "I have loved hearing about your trips! Bye for now."
  },
  {
    id: 'ta2g13', title: 'Something is missing!',
    he: 'מדברים עם צ׳אצ׳ו עם something, anything, nothing ו-somewhere',
    turns: [
      {
        c: "I am looking for something in my shop. Can you guess what it is?",
        he: 'נחשו מה צ׳אצ׳ו מחפש: Is it a hat? או Is it something to eat?',
        a: [
          { k: ['hat cap crown'], r: "Yes! My favourite hat. It is somewhere here." },
          { k: ['key'], r: "Good guess! But no, it is my favourite hat." },
          { k: ['eat food cracker snack'], r: "Ha! No, I have eaten everything. It is my hat." }
        ],
        o: "Good guess! It is my favourite hat. It is somewhere here.",
        t: ["Is it a hat?", "Is it a key?", "Is it something to eat?"],
        m: "Is it something to wear, like a hat?",
        x: [["a hat", 0], ["is it a crown", 0], ["key", 1], ["something to eat", 2], ["crackers", 2], ["a book", -1], ["i don't know", -1]]
      },
      {
        c: "Look, there is nothing in this box. What do you want to put in it?",
        he: 'הקופסה ריקה. מה תשימו בה? I want to put my toys in it.',
        a: [],
        o: "Good idea! I will keep this box for you.",
        t: ["I want to put my toys in it.", "Some books.", "Nothing, it is a nice box!"],
        m: "I want to put some old toys in it.",
        x: [["my toys", -1], ["some pencils", -1]]
      },
      {
        c: "Is there anything you can't do now, but want to learn?",
        he: "יש משהו שאתם עוד לא יודעים לעשות ורוצים ללמוד? I want to learn to swim.",
        a: [],
        o: "Great! You can learn anything if you practise.",
        t: ["I want to learn to swim.", "I want to learn to play the guitar.", "I can't skate, but I want to."],
        x: [["swim", -1], ["ride a horse", -1]]
      },
      {
        c: "If you could go anywhere tomorrow, where would you go?",
        he: 'אם הייתם יכולים לנסוע לכל מקום מחר, לאן? I would go to the beach.',
        a: [
          { k: ['beach sea'], r: "The beach! Somewhere warm and sunny." },
          { k: ['space moon mars star'], r: "Somewhere in space! Take me with you." },
          { k: ['nowhere home'], r: "Nowhere? Home is a lovely place too." }
        ],
        o: "Ooh, that sounds like a great place!",
        t: ["I would go to the beach.", "I would go to the moon!", "Nowhere, I love my home."],
        m: "I would go somewhere warm, like the beach in Eilat.",
        x: [["the beach", 0], ["to the moon", 1], ["nowhere", 2], ["my home", 2], ["paris", -1], ["i don't know", -1]]
      }
    ],
    end: "Everybody needs a friend like you! See you somewhere soon."
  },
  {
    id: 'ta2g14', title: 'Faster, funnier, the best',
    he: 'משווים עם צ׳אצ׳ו: faster, better, the funniest',
    turns: [
      {
        c: "Which animal do you think is the fastest: a cheetah, a horse or a parrot?",
        he: 'מי הכי מהיר? The cheetah is the fastest. או A horse is faster.',
        a: [
          { k: ['cheetah cheeta chita'], r: "Yes! The cheetah is the fastest land animal." },
          { k: ['horse'], r: "Horses are fast, but cheetahs are faster!" },
          { k: ['parrot chacho chaco bird'], r: "Ha! Thank you! But a cheetah is faster than me." }
        ],
        o: "Good guess! The cheetah is the fastest of the three.",
        t: ["The cheetah is the fastest.", "A horse is faster.", "You are the fastest, Chacho!"],
        m: "I think the cheetah is the fastest animal.",
        x: [["cheetah", 0], ["the cheetah is fastest", 0], ["horse", 1], ["you chacho", 2], ["a parrot", 2], ["a lion", -1], ["i don't know", -1]]
      },
      {
        c: "Which is better, summer or winter? Why?",
        he: "מה עדיף, קיץ או חורף? Summer is better because I can swim.",
        a: [
          { k: ['summer'], n: 'winter', r: "Summer! Longer days and the sea. I agree." },
          { k: ['winter'], n: 'summer', r: "Winter! Cooler days and rain. Very cosy." },
          { k: ['both same'], r: "Both! Each one is good in a different way." }
        ],
        o: "Good answer! Every season has something nice.",
        t: ["Summer is better because I can swim.", "Winter is better. It's cooler.", "They are both good."],
        x: [["summer", 0], ["summer because i can swim", 0], ["winter is better", 1], ["both", 2], ["summer is better than winter", -1], ["spring", -1]]
      },
      {
        c: "What is the most beautiful place you know?",
        he: 'מה המקום הכי יפה שאתם מכירים? The beach in Haifa. או The forest near my town.',
        a: [],
        o: "Ooh, it sounds more beautiful than my shop!",
        t: ["The beach in Haifa.", "The forest near my town.", "The sea is the most beautiful."],
        x: [["the beach", -1], ["my grandma garden", -1]]
      },
      {
        c: "Last one! What is the funniest animal in the world?",
        he: 'מה החיה הכי מצחיקה? A monkey is the funniest. או Penguins are funnier than cats.',
        a: [
          { k: ['monkey'], r: "Monkeys! They are so silly. Funnier than clowns!" },
          { k: ['parrot chacho chaco bird'], r: "A parrot! Of course. We are the funniest birds." },
          { k: ['penguin duck'], r: "Ha! They walk in the funniest way." },
          { k: ['dog cat'], r: "Pets can be the funniest! So many silly moments." }
        ],
        o: "Ha! That animal is very funny.",
        t: ["A monkey is the funniest.", "Parrots are the funniest!", "Penguins are funnier than cats."],
        m: "I think monkeys are the funniest animals in the world.",
        x: [["monkey", 0], ["a parrot like you", 1], ["penguins", 2], ["my cat", 3], ["a giraffe", -1], ["i don't know", -1]]
      }
    ],
    end: "You are one of the best people to talk to! Bye bye!"
  },
  {
    id: 'ta2g15', title: 'Too cold or warm enough?',
    he: 'מדברים עם צ׳אצ׳ו עם too, too much, too many ו-enough',
    turns: [
      {
        c: "Brr! Is it too cold or warm enough to swim in the sea today?",
        he: "קר מדי או חם מספיק? It's too cold! או It's warm enough.",
        a: [
          { k: ['cold freezing not'], n: 'know', r: "Too cold! Let's wait for summer." },
          { k: ['warm hot nice good enough'], r: "Warm enough! Then let's go swimming." }
        ],
        o: "Hmm, I think I will just put my feet in!",
        t: ["It's too cold!", "It's warm enough."],
        x: [["too cold", 0], ["it is not warm enough", 0], ["warm enough", 1], ["it is hot", 1], ["i don't know", -1], ["the sea", -1]]
      },
      {
        c: "My shop has too many hats! What do you have too many of?",
        he: 'ממה יש לכם יותר מדי? I have too many pencils. או I have too many toys.',
        a: [],
        o: "Ha! Too many is better than not enough.",
        t: ["I have too many pencils.", "I have too many toys.", "I don't have too many things."],
        m: "I have too many pencils, but I always lose them.",
        x: [["too many toys", -1], ["socks", -1]]
      },
      {
        c: "Do you think kids have enough time to play after school?",
        he: 'יש לילדים מספיק זמן לשחק? Yes, we have enough time. או No, we have too much homework.',
        a: [
          { k: ['no not'], n: 'yes know', r: "Not enough time? Play is very important too." },
          { k: ['yes enough lot'], r: "Enough time! Great, play is so important." }
        ],
        o: "Time to play is really important!",
        t: ["Yes, we have enough time.", "No, we have too much homework."],
        m: "No, I don't think so. We have too much homework.",
        x: [["yes enough", 1], ["a lot of time", 1], ["no not enough", 0], ["too much homework", -1], ["i don't know", -1]]
      },
      {
        c: "What is something you are too young to do now, but want to do one day?",
        he: 'מה אתם צעירים מדי לעשות עכשיו, אבל רוצים לעשות יום אחד? I am too young to drive a car.',
        a: [],
        o: "One day you will do it! I am sure.",
        t: ["I am too young to drive a car.", "I am too young to travel alone.", "I want to fly a plane one day."],
        x: [["drive a car", -1], ["i am too young to travel alone", -1]]
      }
    ],
    end: "That's enough talking for today! Thank you, see you soon."
  },
  {
    id: 'ta2g16', title: 'How many hats?',
    he: 'מדברים עם צ׳אצ׳ו עם much, many, a few, a little',
    turns: [
      {
        c: "I have got a lot of hats. How many hats do you think I have?",
        he: 'כמה כובעים יש לצ׳אצ׳ו לדעתכם? I think you have a hundred hats. או Only a few!',
        a: [
          { k: ['hundred thousand million lot many 100'], r: "Yes! More than a hundred. I love them all!" },
          { k: ['one two three four five six seven eight nine ten few'], r: "Only a few? No, I have many more than that!" },
          { k: ['eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty'], r: "More! I have more than a hundred hats." }
        ],
        o: "I have more than a hundred hats! I love them all.",
        t: ["I think you have a hundred hats.", "Only a few!", "Maybe twenty hats."],
        m: "I think you have about a hundred hats.",
        x: [["a hundred", 0], ["a lot", 0], ["many hats", 0], ["5", 1], ["a few", 1], ["twenty", 2], ["i don't know", -1]]
      },
      {
        c: "How much time do you spend outside every day: a lot or a little?",
        he: 'כמה זמן אתם בחוץ כל יום? A lot of time! או Only a little.',
        a: [
          { k: ['little not much bit'], n: 'know', r: "A little? That's okay. Inside is nice too." },
          { k: ['lot many hours'], r: "A lot! Fresh air is great." }
        ],
        o: "Inside or outside, every day is a good day!",
        t: ["A lot of time!", "Only a little.", "Not much, maybe one hour."],
        x: [["a lot", 1], ["many hours", 1], ["a little", 0], ["not much", 0], ["i don't know", -1], ["outside", -1]]
      },
      {
        c: "What do you like having a lot of: books, games or stickers?",
        he: 'ממה אתם אוהבים שיש לכם הרבה? I like having a lot of books.',
        a: [
          { k: ['book comic'], r: "Books! You can never have too many." },
          { k: ['game ball toy'], r: "Games! More games, more fun." },
          { k: ['sticker card'], r: "Stickers! A big collection is so much fun." }
        ],
        o: "Ooh, a great thing to collect!",
        t: ["I like having a lot of books.", "Games!", "I have a lot of stickers."],
        x: [["books", 0], ["a lot of games", 1], ["stickers", 2], ["cards", 2], ["shoes", -1], ["i don't know", -1]]
      },
      {
        c: "I have a few crackers left. Would you like some?",
        he: 'רוצים קצת קרקרים? Yes, please! או No, thank you.',
        a: [
          { k: ['no not'], n: 'yes know', r: "No problem! More crackers for me, ha!" },
          { k: ['yes please sure okay ok love'], r: "Here you are! Some crackers for a friend." }
        ],
        o: "Crackers are the best, but I will share!",
        t: ["Yes, please!", "No, thank you."],
        m: "Yes, please! I would like a few crackers.",
        x: [["yes please", 1], ["sure", 1], ["no thank you", 0], ["no", 0], ["what are crackers", -1], ["i don't know", -1]]
      }
    ],
    end: "Thank you for a lot of fun! See you in a few days."
  },
  {
    id: 'ta2g17', title: 'What do you like the most?',
    he: 'מדברים עם צ׳אצ׳ו עם most, most of ו-the most',
    turns: [
      {
        c: "Most parrots love crackers. What food do most kids love?",
        he: 'איזה אוכל רוב הילדים אוהבים? Most kids love pizza.',
        a: [
          { k: ['pizza'], r: "Pizza! Yes, most kids love pizza." },
          { k: ['ice_cream icecream chocolate candy sweet cake'], r: "Something sweet! Most kids love that." },
          { k: ['chips fries pasta spaghetti falafel hamburger burger schnitzel'], r: "Ooh, yum! Most kids love that too." }
        ],
        o: "Mmm! I think most kids like that.",
        t: ["Most kids love pizza.", "Most kids love ice cream.", "Most kids love pasta."],
        m: "I think most kids love pizza and ice cream.",
        x: [["pizza", 0], ["most kids love ice cream", 1], ["chocolate", 1], ["pasta", 2], ["falafel", 2], ["vegetables", -1], ["i don't know", -1]]
      },
      {
        c: "What do you like the most about the weekend?",
        he: 'מה אתם הכי אוהבים בסוף השבוע? I like playing with my friends the most.',
        a: [],
        o: "Ooh, that sounds like the best part!",
        t: ["I like sleeping late the most.", "Playing with my friends.", "I like the beach the most."],
        m: "I like playing with my friends the most.",
        x: [["sleep", -1], ["playing games", -1]]
      },
      {
        c: "Which subject at school do you like the most?",
        he: 'איזה מקצוע אתם הכי אוהבים? I like English the most. או Art is my favourite subject.',
        a: [
          { k: ['english'], r: "English! That is my favourite subject too." },
          { k: ['math maths mathematics science'], r: "Ooh, numbers and experiments! Very clever." },
          { k: ['sport pe gym art music drawing'], r: "So much fun! Moving and making things is the best." },
          { k: ['break lunch recess'], r: "Ha! The break is the most fun for most kids." }
        ],
        o: "Good choice! Every subject has something interesting.",
        t: ["I like English the most.", "Maths!", "Art is my favourite subject."],
        m: "I like art the most, because I love drawing.",
        x: [["english", 0], ["i like math", 1], ["science", 1], ["art", 2], ["the break", 3], ["history", -1], ["i don't know", -1]]
      },
      {
        c: "Most people have a favourite colour. What colour do you like the most?",
        he: 'איזה צבע אתם הכי אוהבים? I like blue the most.',
        a: [],
        o: "Ooh, fabulous! I will make a hat in that colour.",
        t: ["I like blue the most.", "Green is my favourite colour.", "Pink and purple."],
        m: "I like blue the most, like the sea.",
        x: [["blue", -1], ["red and black", -1]]
      }
    ],
    end: "Most of all, I love talking with you! Bye for now."
  },
  {
    id: 'ta2v06', title: 'Helping at home',
    he: 'מדברים עם צ׳אצ׳ו על עבודות בית: make the bed, set the table',
    turns: [
      {
        c: "I tidy up my shop every evening. Which job at home do you like doing the most?",
        he: 'איזו עבודה בבית אתם הכי אוהבים? I like setting the table.',
        a: [
          { k: ['bed'], r: "Making your bed! A great start to the day." },
          { k: ['table'], r: "Setting the table! Everyone is happy at dinner." },
          { k: ['washing wash dish plate'], r: "The washing-up! Bubbles are fun." },
          { k: ['tidy vacuum sweep clean rubbish trash garbage'], r: "Cleaning up! A tidy room feels so good." }
        ],
        o: "Every job helps at home, even a small one!",
        t: ["I like making my bed.", "I like setting the table.", "I like doing the washing-up."],
        x: [["make my bed", 0], ["set the table", 1], ["washing up", 2], ["i like to vacuum", 3], ["nothing", -1], ["i don't like jobs", -1]]
      },
      {
        c: "And which job is the most boring for you?",
        he: 'ואיזו עבודה הכי משעממת? Tidying my room. או Taking out the rubbish.',
        a: [
          { k: ['bed'], r: "Making the bed? It only takes one minute!" },
          { k: ['washing wash dish plate'], r: "The washing-up? Put on music, then it is more fun!" },
          { k: ['rubbish trash garbage bin'], r: "Taking out the rubbish? Quick, and then it is done!" },
          { k: ['tidy vacuum sweep clean room'], r: "Tidying up? Make it a game with a timer!" }
        ],
        o: "Ha! Every job is more fun with music.",
        t: ["Making my bed.", "Taking out the rubbish.", "Tidying my room."],
        x: [["make the bed", 0], ["the dishes", 1], ["take out the rubbish", 2], ["tidy my room", 3], ["homework", -1], ["nothing", -1]]
      },
      {
        c: "Imagine a robot which does all the housework. What job should it do first?",
        he: 'רובוט שעושה את כל עבודות הבית: מה הוא יעשה קודם? It should do the washing-up.',
        a: [],
        o: "Great idea! I want a robot like that too.",
        t: ["It should do the washing-up.", "It should tidy my room.", "It should make my bed."],
        x: [["washing up", -1], ["clean my room", -1]]
      },
      {
        c: "Do you think kids should help at home? Why?",
        he: 'ילדים צריכים לעזור בבית? Yes, because everybody lives there. או No, kids need time to play.',
        a: [
          { k: ['no not'], n: 'yes know', r: "Hmm, maybe a little help is nice for everybody." },
          { k: ['yes sure course agree'], r: "I agree! When everybody helps, it is quicker." }
        ],
        o: "Good thinking! Helping makes a home happy.",
        t: ["Yes, because everybody lives there.", "No, kids need time to play."],
        m: "Yes, I think kids should help, because everybody lives there.",
        x: [["yes", 1], ["of course", 1], ["no they should play", 0], ["not always", 0], ["sometimes", -1], ["i don't know", -1]]
      }
    ],
    end: "Now I am going to tidy up my shop! Bye, helper!"
  },
  {
    id: 'ta2v07', title: 'Around your town',
    he: 'מדברים עם צ׳אצ׳ו על העיר: park, library, square, by bus',
    turns: [
      {
        c: "In my town there is a big square with a fountain. What is your favourite place in your town?",
        he: 'מה המקום שאתם הכי אוהבים בעיר? The park. או The library.',
        a: [
          { k: ['park playground garden'], r: "The park! A great place to play." },
          { k: ['library museum'], r: "Ooh, a place to learn and see new things!" },
          { k: ['beach sea pool'], r: "The water! Lucky you." },
          { k: ['mall shop cinema cafe restaurant'], r: "A busy place! Fun with friends." }
        ],
        o: "That sounds like a great place!",
        t: ["The park near my school.", "The library.", "The beach!"],
        m: "My favourite place is the big park near the library.",
        x: [["the park", 0], ["library", 1], ["the museum", 1], ["the beach", 2], ["the mall", 3], ["my house", -1], ["i don't know", -1]]
      },
      {
        c: "Do you like big cities or small towns more?",
        he: 'מה אתם אוהבים יותר, ערים גדולות או עיירות קטנות? I like big cities more.',
        a: [
          { k: ['big city cities'], n: 'small', r: "Big cities! Lots of museums, shops and lights." },
          { k: ['small town village quiet'], n: 'big', r: "Small towns! Quiet streets, and everyone says hello." },
          { k: ['both'], r: "Both! Each one is good in its own way." }
        ],
        o: "Every place has something special!",
        t: ["I like big cities more.", "Small towns are quieter.", "I like both."],
        x: [["big cities", 0], ["the city", 0], ["small town", 1], ["a village", 1], ["both", 2], ["i don't know", -1]]
      },
      {
        c: "Imagine you can build one new place in your town. What is it?",
        he: 'אם הייתם בונים מקום חדש בעיר, מה הוא היה? A big water park.',
        a: [],
        o: "What a great idea! I want to visit it.",
        t: ["A big water park.", "A new library with comics.", "A skate park for kids."],
        x: [["a zoo", -1], ["a big pool", -1]]
      },
      {
        c: "How do you usually get around your town: on foot, by bike, by bus or by car?",
        he: 'איך אתם בדרך כלל מתניידים? I usually walk. או By bike! או By bus.',
        a: [
          { k: ['foot walk'], r: "On foot! Walking is the best way to see things." },
          { k: ['bike bicycle scooter'], r: "By bike! Fast and fun." },
          { k: ['bus train'], r: "By bus! You can look out of the window." },
          { k: ['car taxi'], r: "By car! Easy on a rainy day." }
        ],
        o: "Good way to travel! I usually fly, of course.",
        t: ["I usually walk.", "By bike!", "By bus."],
        m: "I usually walk, but sometimes I go by bus.",
        x: [["walk", 0], ["on foot", 0], ["by bike", 1], ["scooter", 1], ["bus", 2], ["by car", 3], ["i fly", -1], ["i don't know", -1]]
      }
    ],
    end: "Thank you for the tour of your town! Bye for now."
  },
  {
    id: 'ta2v08', title: 'Wake up, get up!',
    he: 'מדברים עם צ׳אצ׳ו על הבוקר: wake up, put on, take off, look for',
    turns: [
      {
        c: "I wake up at six, but I get up at seven! What time do you wake up?",
        he: 'מתי אתם מתעוררים? I wake up at seven. או At six thirty.',
        a: [
          { k: ['five six'], r: "So early! Just like a bird." },
          { k: ['seven eight'], r: "A good time to wake up!" },
          { k: ['nine ten eleven twelve late'], r: "You wake up late! Lucky you." }
        ],
        o: "That is a good time to wake up!",
        t: ["I wake up at seven.", "At six thirty.", "I wake up at eight."],
        x: [["at 7", 1], ["i wake up at six", 0], ["8", 1], ["late", 2], ["at 9 on weekends", 2], ["i don't know", -1], ["early", -1]]
      },
      {
        c: "What is the first thing you put on in the morning?",
        he: 'מה הדבר הראשון שאתם לובשים בבוקר? I put on my socks first.',
        a: [
          { k: ['sock'], r: "Socks first! Warm feet are happy feet." },
          { k: ['shirt tshirt top uniform'], r: "Your shirt first! Then you look ready." },
          { k: ['trousers pants jeans shorts skirt dress'], r: "Good choice! Then the rest is easy." },
          { k: ['glasses watch'], r: "Ha! A clever way to start the day." }
        ],
        o: "Good idea! Getting dressed is easy then.",
        t: ["I put on my socks first.", "I put on my T-shirt.", "My trousers."],
        m: "First I put on my socks, and then my T-shirt.",
        x: [["socks", 0], ["my t-shirt", 1], ["jeans", 2], ["my glasses", 3], ["shoes", -1], ["i don't know", -1]]
      },
      {
        c: "When you come home, do you take off your shoes at the door?",
        he: "כשאתם חוזרים הביתה, אתם חולצים נעליים ליד הדלת? Yes, I always take them off. או No, I don't.",
        a: [
          { k: ['no not never'], n: 'yes know', r: "Okay! But watch out for mud on the floor." },
          { k: ['yes always sometimes'], r: "Good idea! The floor stays clean." }
        ],
        o: "Shoes on or off, home is the best place!",
        t: ["Yes, I always take them off.", "No, I don't."],
        m: "Yes, I always take off my shoes at the door.",
        x: [["yes", 1], ["sometimes", 1], ["no i don't", 0], ["never", 0], ["what", -1], ["i don't know", -1]]
      },
      {
        c: "Oh no, I can't find my favourite hat! Can you help me look for it?",
        he: 'עזרו לצ׳אצ׳ו לחפש את הכובע: Yes, I will help you! או Is it under the table?',
        a: [
          { k: ['no not sorry'], n: 'yes know', r: "That's okay! I will look for it later." },
          { k: ['yes sure okay ok course help'], r: "Thank you! Oh look, it is on my head!" },
          { k: ['under behind bed table chair box shelf'], r: "Let me see... no! Oh look, it is on my head!" }
        ],
        o: "Oh look, it was on my head all the time!",
        t: ["Yes, I will help you!", "Is it under the table?", "Sorry, I'm busy."],
        m: "Yes, of course! Let's look for it under the table.",
        x: [["yes of course", 1], ["okay", 1], ["under the bed", 2], ["sorry i can't", 0], ["no", 0], ["bananas", -1], ["hmm", -1]]
      }
    ],
    end: "Thank you, friend! Now I can put on my hat and go out. Bye!"
  },
  {
    id: 'ta2v09', title: "What's the weather like?",
    he: 'מדברים עם צ׳אצ׳ו על מזג האוויר: sunny, cloudy, windy, storm',
    turns: [
      {
        c: "It is sunny in my forest today. What is the weather like where you are now?",
        he: "איך מזג האוויר אצלכם עכשיו? It's sunny and hot. או It's raining.",
        a: [
          { k: ['sun sunny hot warm nice clear'], r: "Sunny and warm! A great day to go out." },
          { k: ['rain rainy shower storm'], r: "Rain! Don't forget your umbrella." },
          { k: ['cloud cloudy grey gray'], r: "Cloudy! Maybe the sun is coming later." },
          { k: ['wind windy cold cool'], r: "Brr! Put on a warm hoodie." }
        ],
        o: "Thank you for the weather report!",
        t: ["It's sunny and hot.", "It's raining.", "It's cloudy and windy."],
        m: "It's sunny and warm today, but a little windy.",
        x: [["sunny", 0], ["it is hot", 0], ["it is raining", 1], ["storm", 1], ["cloudy", 2], ["windy", 3], ["i don't know", -1], ["it is night", -1]]
      },
      {
        c: "What is your favourite kind of weather? Why?",
        he: 'איזה מזג אוויר אתם הכי אוהבים, ולמה? Sunny weather, because I love the beach.',
        a: [],
        o: "Ooh, good choice! Every kind of weather has something nice.",
        t: ["Sunny weather, because I love the beach.", "Rainy days, because I like the sound.", "Snow, but we don't often have it."],
        x: [["sun", -1], ["rain because it is nice", -1]]
      },
      {
        c: "Have you ever seen a big storm with thunder and lightning?",
        he: 'ראיתם פעם סערה גדולה עם רעמים וברקים? Yes, I have! או No, never.',
        a: [
          { k: ['no not never'], n: 'yes know', r: "Not yet? Storms are loud, but they don't last long." },
          { k: ['yes have once many'], r: "Wow! Thunder can be so loud." }
        ],
        o: "Storms are loud, but it is cosy inside.",
        t: ["Yes, I have!", "No, never."],
        m: "Yes, I have. The thunder was really loud.",
        x: [["yes", 1], ["yes last winter", 1], ["no never", 0], ["i have not", 0], ["i don't know", -1], ["loud", -1]]
      },
      {
        c: "Look at the forecast: tomorrow it will be rainy. What are you going to do?",
        he: "מחר יהיה גשום. מה תעשו? I am going to stay home and read. או I'm going to jump in puddles!",
        a: [
          { k: ['rain puddle jump umbrella outside'], r: "Fun in the rain! Don't forget your boots." },
          { k: ['inside home stay read book movie film tv game play'], r: "A cosy day inside! That sounds perfect." }
        ],
        o: "Good plan for a rainy day!",
        t: ["I am going to stay home and read.", "I'm going to jump in puddles!", "I am going to watch a film."],
        x: [["stay home", 1], ["i am going to read a book", 1], ["jump in the puddles", 0], ["take an umbrella", 0], ["sleep", -1], ["i don't know", -1]]
      }
    ],
    end: "Whatever the weather, it's great to talk to you! Bye!"
  },
  {
    id: 'ta2u05', title: 'Speedy the tortoise',
    he: 'מדברים עם צ׳אצ׳ו על ספידי, הצב שהגיע לספרייה',
    turns: [
      {
        c: "Speedy walked all the way to the library! Why do you think he went there?",
        he: 'למה ספידי הלך לספרייה לדעתכם? He wanted to read books! או He was looking for food.',
        a: [
          { k: ['book read story'], r: "For the books! A tortoise who loves reading." },
          { k: ['food eat lettuce hungry apple'], r: "For food! And he found some lettuce." },
          { k: ['quiet sleep cool cold shade'], r: "A quiet, cool place! Very clever, Speedy." },
          { k: ['adventure explore bored friend'], r: "An adventure! What a brave tortoise." }
        ],
        o: "Who knows? Speedy is a very mysterious tortoise.",
        t: ["He wanted to read books!", "He was looking for food.", "He wanted an adventure."],
        x: [["to read books", 0], ["he like books", 0], ["food", 1], ["he was hungry", 1], ["it is quiet", 2], ["adventure", 3], ["i don't know", -1], ["he was lost", -1]]
      },
      {
        c: "When the librarian found Speedy, how do you think she felt?",
        he: 'איך הספרנית הרגישה כשמצאה את ספידי? She was surprised! או She was happy.',
        a: [
          { k: ['surprise shock amazed wow'], r: "So surprised! A tortoise in the library!" },
          { k: ['happy glad excited funny laugh'], r: "Happy! What a funny visitor." },
          { k: ['scared afraid'], r: "A little scared? It was just a small tortoise!" }
        ],
        o: "I think she was very surprised!",
        t: ["She was surprised!", "She was happy.", "She was a bit scared."],
        m: "I think she was very surprised, and then she laughed.",
        x: [["surprised", 0], ["she was shocked", 0], ["she was happy", 1], ["funny", 1], ["scared", 2], ["angry", -1], ["i don't know", -1]]
      },
      {
        c: "Speedy is very slow. Which animal is the slowest, in your opinion?",
        he: 'איזו חיה הכי איטית לדעתכם? A snail is the slowest. או A sloth!',
        a: [
          { k: ['snail'], r: "A snail! Even slower than Speedy." },
          { k: ['sloth'], r: "A sloth! It moves very, very slowly." },
          { k: ['turtle tortoise'], r: "A tortoise, like Speedy! Slow, but brave." }
        ],
        o: "Good answer! That animal is very slow.",
        t: ["A snail is the slowest.", "A sloth!", "Tortoises are the slowest."],
        m: "I think a snail is the slowest animal of all.",
        x: [["snail", 0], ["the sloth", 1], ["turtle", 2], ["a tortoise like speedy", 2], ["a cat", -1], ["i don't know", -1]]
      },
      {
        c: "If you had a pet tortoise, what funny name would you give it?",
        he: 'אם היה לכם צב, איזה שם מצחיק הייתם נותנים לו? I would call it Rocket!',
        a: [],
        o: "Ha! What a great name for a tortoise.",
        t: ["I would call it Rocket!", "Flash, because it's so slow.", "Mister Slow."],
        x: [["rocket", -1], ["i call him flash", -1]]
      }
    ],
    end: "Speedy says thank you for reading his story! Bye, friend!"
  },
  {
    id: 'ta2u06', title: 'The stylish seagull',
    he: 'מדברים עם צ׳אצ׳ו על השחף שאסף משקפי שמש בחוף',
    turns: [
      {
        c: "The seagull took lots of sunglasses! Why do you think it did that?",
        he: 'למה השחף לקח משקפי שמש? They are shiny. או It wanted to look cool.',
        a: [
          { k: ['shiny shine bright pretty nice beautiful'], r: "They are shiny! Birds love shiny things." },
          { k: ['nest home house'], r: "For its nest! A very stylish home." },
          { k: ['fashion style stylish cool look'], r: "Fashion! I understand that bird completely." },
          { k: ['fun funny game play joke'], r: "Just for fun! A very funny seagull." }
        ],
        o: "Who knows? Maybe it just loved sunglasses.",
        t: ["They are shiny.", "It wanted to look cool.", "For its nest."],
        x: [["because they are shiny", 0], ["for the nest", 1], ["to look cool", 2], ["for fun", 3], ["it was hungry", -1], ["i don't know", -1]]
      },
      {
        c: "What do you usually take to the beach?",
        he: 'מה אתם בדרך כלל לוקחים לים? A towel and a hat. או A ball and a book.',
        a: [
          { k: ['towel'], r: "A towel! And keep an eye on it." },
          { k: ['sunglasses glasses hat cap sun_cream suncream'], r: "Careful! The seagull might take it." },
          { k: ['ball bucket spade game toy book'], r: "Ooh, fun things to play with!" },
          { k: ['food water sandwich snack fruit watermelon drink'], r: "Something to eat or drink! Very smart." }
        ],
        o: "Good things for a beach day!",
        t: ["A towel and a hat.", "My sunglasses!", "A ball and a book."],
        m: "I usually take a towel, a hat and some water.",
        x: [["a towel", 0], ["sunglasses", 1], ["my hat", 1], ["a ball", 2], ["water", 3], ["my friends", -1], ["i don't know", -1]]
      },
      {
        c: "The girl followed the seagull to its nest. Was that a good idea?",
        he: "הילדה הלכה אחרי השחף עד הקן. זה היה רעיון טוב? Yes, it was a clever idea. או No, it wasn't safe alone.",
        a: [
          { k: ['no not dangerous'], n: 'yes know', r: "Maybe not alone. It is better with a grown-up." },
          { k: ['yes good great clever smart brave'], r: "Yes! She was clever, and she found everything." }
        ],
        o: "It was brave, but take a grown-up next time!",
        t: ["Yes, it was a clever idea.", "No, it wasn't safe alone."],
        x: [["yes", 1], ["it was a good idea", 1], ["no", 0], ["not alone", 0], ["i don't know", -1], ["maybe", -1]]
      },
      {
        c: "Have you ever seen a funny animal at the beach or in the park?",
        he: 'ראיתם פעם חיה מצחיקה בים או בפארק? Yes, I saw a funny dog. או No, never.',
        a: [
          { k: ['no not never'], n: 'yes know', r: "Not yet! Keep your eyes open next time." },
          { k: ['dog'], r: "A funny dog! Dogs love the beach." },
          { k: ['bird seagull pigeon crow duck parrot'], r: "A funny bird! Birds are the best, of course." },
          { k: ['cat crab fish'], r: "Ha! Animals can be so funny." }
        ],
        o: "Ha! Animals are the funniest.",
        t: ["Yes, I saw a funny dog.", "Yes, a crab on the beach!", "No, never."],
        x: [["a dog", 1], ["yes a seagull", 2], ["a crab", 3], ["no never", 0], ["i have not", 0], ["a monkey", -1], ["i don't know", -1]]
      }
    ],
    end: "Now I have to go and hide my sunglasses! Bye bye!"
  },
  {
    id: 'ta2l10', title: 'At the clothes shop',
    he: 'מדברים עם צ׳אצ׳ו על בגדים, צבעים וקניות, כמו מאיה והמעיל החדש',
    turns: [
      {
        c: "Maya needed a warm jacket for her trip. What do you wear when it is cold?",
        he: 'מה אתם לובשים כשקר? I wear a warm jacket. או I wear a hoodie.',
        a: [
          { k: ['jacket coat'], r: "A jacket! Warm and cosy, like Maya." },
          { k: ['hoodie sweater jumper sweatshirt'], r: "A hoodie! Soft and comfy. Great choice." },
          { k: ['scarf hat gloves boots'], r: "Ooh, very stylish! You are ready for winter." }
        ],
        o: "Good idea! Staying warm is important.",
        t: ["I wear a warm jacket.", "I wear a hoodie.", "A hat and a scarf."],
        x: [["i wear a jacket", 0], ["coat", 0], ["my hoodie", 1], ["a sweater", 1], ["hat and scarf", 2], ["nothing", -1], ["i don't know", -1]]
      },
      {
        c: "Maya wanted green or blue, not black. What colour are your favourite clothes?",
        he: 'באיזה צבע הבגדים האהובים עליכם? My favourite clothes are blue. או I love black.',
        a: [
          { k: ['black white grey gray'], r: "Classic colours! They go with everything." },
          { k: ['red pink orange yellow purple gold'], r: "Bright and happy! Just like my feathers." },
          { k: ['blue green'], r: "Blue or green, like Maya! Lovely colours." }
        ],
        o: "What a nice choice! Fabulous.",
        t: ["My favourite clothes are blue.", "I love black clothes.", "Pink and purple!"],
        m: "My favourite clothes are blue, like the sky.",
        x: [["blue", 2], ["green and blue", 2], ["black", 0], ["white shirt", 0], ["pink", 1], ["red and yellow", 1], ["all colours", -1], ["i don't know", -1]]
      },
      {
        c: "Do you like shopping for clothes, or is it boring for you?",
        he: "אתם אוהבים לקנות בגדים או שזה משעמם? I love it! או It is boring. או I don't like it.",
        a: [
          { k: ['not', 'boring bored'], r: "Not boring? Great! Shopping can be fun." },
          { k: ['boring bored hate'], r: "Boring for you? That is okay. Not everyone loves it." },
          { k: ['no not'], n: 'know', r: "That is fine! Some people just want to go home." },
          { k: ['love like fun yes great enjoy'], r: "Me too! I could shop all day." }
        ],
        o: "Thank you for telling me! I love shopping, of course.",
        t: ["I love it!", "It is boring.", "No, not really."],
        m: "I like it, but only with my friends.",
        x: [["it's not boring", 0], ["boring", 1], ["i hate shopping", 1], ["no", 2], ["no not really", 2], ["i don't like it", 2], ["yes i love it", 3], ["fun", 3], ["i don't know", -1], ["sometimes", -1]]
      },
      {
        c: "Imagine you design a jacket for Chacho. What is it going to look like?",
        he: 'תעצבו מעיל לצ׳אצ׳ו. איך הוא ייראה? It is going to be green with a hood.',
        a: [],
        o: "Fabulous! I am going to wear it every day.",
        t: ["It is going to be green with a hood.", "It is going to have big pockets.", "It is going to be red and gold."],
        x: [["green with a hood", -1], ["a red jacket with stars", -1]]
      }
    ],
    end: "Thank you for shopping with me! See you next time. Bye!"
  },
  {
    id: 'ta2l11', title: 'Plans for the year',
    he: 'מדברים עם צ׳אצ׳ו על חוגים ותוכניות לשנה, עם be going to',
    turns: [
      {
        c: "Adam's science club is going to build a robot. Which club would you like to join?",
        he: 'לאיזה חוג הייתם רוצים להצטרף? A science club. או A football club. או An art club.',
        a: [
          { k: ['science robot code coding computer'], r: "A science club! You could build a robot too." },
          { k: ['sport football basketball swim swimming dance tennis'], r: "A sports club! Great for staying active." },
          { k: ['art draw drawing paint music sing drama theatre'], r: "An art or music club! So creative." },
          { k: ['cook cooking bake chess book read'], r: "Ooh, lovely! A club for a calm hobby." }
        ],
        o: "Great choice! Clubs are a good way to make friends.",
        t: ["A science club.", "A football club.", "An art club."],
        x: [["science club", 0], ["coding", 0], ["football", 1], ["dance club", 1], ["art", 2], ["music", 2], ["chess", 3], ["i don't know", -1], ["no club", -1]]
      },
      {
        c: "Lina is going to learn to code. What are you going to learn this year?",
        he: 'מה אתם הולכים ללמוד השנה? I am going to learn to swim. או I am going to learn the guitar.',
        a: [],
        o: "Wow, a great goal! You are going to do it.",
        t: ["I am going to learn to swim.", "I am going to learn the guitar.", "I am going to learn to code."],
        m: "I am going to learn to play the guitar.",
        x: [["learn swimming", -1], ["i going to learn guitar", -1]]
      },
      {
        c: "Is it better to plan your goals, or to just see what happens?",
        he: 'עדיף לתכנן מטרות או לראות מה יקרה? It is better to plan. או Just see what happens.',
        a: [
          { k: ['both'], r: "A bit of both? Very wise!" },
          { k: ['plan planning goal list write'], n: 'not', r: "Planning! Like the science club. Very organised." },
          { k: ['see happen surprise free'], r: "Just see what happens! That can be fun too." }
        ],
        o: "Interesting! Everyone is different.",
        t: ["It is better to plan.", "Just see what happens.", "A bit of both."],
        x: [["plan", 1], ["better to plan", 1], ["see what happens", 2], ["both", 0], ["i don't know", -1], ["maybe", -1]]
      },
      {
        c: "Chacho is going to learn a new word every day. What is your big goal this year?",
        he: 'מה המטרה הגדולה שלכם השנה? I am going to read ten books. או I am going to make new friends.',
        a: [],
        o: "That is a great goal! I believe in you.",
        t: ["I am going to read ten books.", "I am going to make new friends.", "I am going to be in the school play."],
        m: "I am going to read ten books this year.",
        x: [["read more books", -1], ["make new friends", -1]]
      }
    ],
    end: "Good luck with your plans! Now I am going to practise my new words. Bye!"
  },
  {
    id: 'ta2l12', title: 'Movie night',
    he: 'מדברים עם צ׳אצ׳ו על סרטים: איזה סוג אתם אוהבים ואיפה הכי כיף לצפות',
    turns: [
      {
        c: "Rana loves adventure films. What kind of films do you like best?",
        he: 'איזה סוג סרטים אתם הכי אוהבים? I like comedies. או Adventure films. או Animated films.',
        a: [
          { k: ['comedy comedies funny'], r: "Comedies! Laughing is the best." },
          { k: ['adventure action'], r: "Adventure films, like Rana! Exciting." },
          { k: ['animated cartoon cartoons animation'], r: "Animated films! Like Planet of Socks." },
          { k: ['animal nature science space fiction'], r: "Ooh, interesting! You can learn a lot from films like that." }
        ],
        o: "Nice! There are so many kinds of films.",
        t: ["I like comedies.", "Adventure films!", "Animated films."],
        m: "I like comedies best, because they make me laugh.",
        x: [["comedy", 0], ["funny films", 0], ["adventure", 1], ["action movies", 1], ["cartoons", 2], ["animal films", 3], ["sad films", -1], ["i don't know", -1]]
      },
      {
        c: "Planet of Socks is about lost socks. Where do you think lost socks really go?",
        he: 'לאן לדעתכם נעלמים הגרביים? They go under the bed. או The washing machine eats them.',
        a: [],
        o: "Ha! Great idea. It is a big mystery!",
        t: ["They go under the bed.", "The washing machine eats them.", "They go to another planet."],
        m: "I think they hide under the bed.",
        x: [["under the bed", -1], ["the washing machine eat them", -1]]
      },
      {
        c: "Do you prefer watching films at home or at the cinema?",
        he: 'איפה אתם מעדיפים לראות סרטים? At the cinema. או At home on the sofa.',
        a: [
          { k: ['both'], r: "Both! Films are great anywhere." },
          { k: ['cinema'], r: "The cinema! The big screen is amazing." },
          { k: ['home house sofa bed'], r: "At home! Cosy on the sofa, perfect." }
        ],
        o: "Good answer! A good film is a good film.",
        t: ["At the cinema.", "At home on the sofa.", "Both!"],
        m: "I prefer the cinema, because the screen is really big.",
        x: [["cinema", 1], ["in the cinema", 1], ["at home", 2], ["on my sofa", 2], ["both", 0], ["i don't know", -1], ["on my phone", -1]]
      },
      {
        c: "Imagine you make a film. What is it going to be about?",
        he: 'אתם עושים סרט. על מה הוא יהיה? It is going to be about a talking dog.',
        a: [],
        o: "Wow! I want to watch it already. Fabulous!",
        t: ["It is going to be about a talking dog.", "A funny film about a flying school.", "It is going to be about two friends in space."],
        x: [["about a dog that talks", -1], ["a film about football", -1]]
      }
    ],
    end: "That was fun! Now I am going to watch Planet of Socks. Bye!"
  },
  {
    id: 'ta2l13', title: 'Weekend plans',
    he: 'מדברים עם צ׳אצ׳ו על תוכניות לסוף השבוע, כמו עומר ודנה',
    turns: [
      {
        c: "Omer is going to watch birds in the Hula Valley. Would you like to go bird-watching?",
        he: 'הייתם רוצים לצפות בציפורים? Yes, I would love to! או No, not really.',
        a: [
          { k: ['no not'], n: 'know', r: "Not for you? That is okay. Birds can be very noisy!" },
          { k: ['yes love like sure want maybe'], r: "Great! Bring a warm coat, like Omer." }
        ],
        o: "Birds are amazing. I am a bird, so I know!",
        t: ["Yes, I would love to!", "No, not really.", "Maybe one day."],
        m: "Yes, I would love to see the cranes.",
        x: [["yes", 1], ["i would love to", 1], ["no", 0], ["not really", 0], ["i don't know", -1], ["what is that", -1]]
      },
      {
        c: "Dana is having a swimming lesson on Friday. What are you doing this weekend?",
        he: 'מה אתם עושים בסוף השבוע? I am meeting my friends. או I am going to the beach.',
        a: [],
        o: "That sounds like a good weekend!",
        t: ["I am meeting my friends.", "I am going to the beach.", "I am staying at home and reading."],
        x: [["i meet my friends", -1], ["go to the park", -1]]
      },
      {
        c: "Omer is leaving at seven in the morning. Do you like getting up early?",
        he: 'אתם אוהבים לקום מוקדם? Yes, I like it. או No, I hate it!',
        a: [
          { k: ['no not hate'], n: 'know', r: "Me neither! Sleep is wonderful." },
          { k: ['yes love like'], r: "Wow! You are an early bird, like me." }
        ],
        o: "Early or late, every day is a good day!",
        t: ["Yes, I like it.", "No, I hate it!"],
        m: "No, I don't. I like sleeping late at the weekend.",
        x: [["yes", 1], ["i like it", 1], ["no", 0], ["i hate it", 0], ["i don't like it", 0], ["sometimes", -1], ["i don't know", -1]]
      },
      {
        c: "Dana is going to bake a cake. Which cake would you bake, lemon or chocolate?",
        he: 'איזו עוגה הייתם אופים, לימון או שוקולד? Chocolate, of course! או Lemon cake.',
        a: [
          { k: ['both'], r: "Both! Two cakes are better than one." },
          { k: ['chocolate'], r: "Chocolate! Yum, that is my favourite too." },
          { k: ['lemon'], r: "Lemon! Fresh and sweet." }
        ],
        o: "Ooh, that sounds delicious!",
        t: ["Chocolate, of course!", "Lemon cake.", "Both!"],
        m: "I would bake a chocolate cake with strawberries.",
        x: [["chocolate", 1], ["i bake chocolate cake", 1], ["lemon", 2], ["both", 0], ["carrot cake", -1], ["i can't bake", -1]]
      }
    ],
    end: "Have a wonderful weekend! I am going to watch the birds too. Bye!"
  },
  {
    id: 'ta2l14', title: 'If I could fly...',
    he: 'מדמיינים עם צ׳אצ׳ו: מה הייתם עושים אילו... (If I had..., I would...)',
    turns: [
      {
        c: "Yara would clean her room with a magic wand. What would you do with a magic wand?",
        he: 'מה הייתם עושים עם שרביט קסמים? I would clean my room. או I would fly to the Moon.',
        a: [],
        o: "Wow! That is real magic.",
        t: ["I would clean my room.", "I would make a giant ice cream.", "I would fly to the Moon."],
        x: [["clean my room", -1], ["i will make a big pizza", -1]]
      },
      {
        c: "If you could fly, where would you go first?",
        he: 'אילו יכולתם לעוף, לאן הייתם עפים קודם? I would fly to the beach. או To the Moon.',
        a: [
          { k: ['beach sea'], r: "To the beach! A great view from up there." },
          { k: ['moon space star stars'], r: "To space! That is a very long flight." },
          { k: ['school'], r: "To school? You would never be late!" },
          { k: ['grandma grandpa friend friends'], r: "To see someone you love! So sweet." }
        ],
        o: "What a trip! Flying is the best, believe me.",
        t: ["I would fly to the beach.", "I would fly to the Moon.", "I would fly to my friend's house."],
        x: [["to the beach", 0], ["the sea", 0], ["moon", 1], ["to school", 2], ["to my grandma", 3], ["paris", -1], ["i don't know", -1]]
      },
      {
        c: "Itamar would give the zoo animals a big forest. Do you think animals are happy in zoos?",
        he: 'לדעתכם חיות שמחות בגן חיות? Yes, in good zoos. או No, they are not. או Sometimes.',
        a: [
          { k: ['sometimes depend depends'], r: "It depends. That is a very good answer." },
          { k: ['no not sad'], n: 'know', r: "Maybe not always. A big forest is better, like Itamar says." },
          { k: ['yes happy good'], r: "Some zoos take good care of animals. Good point!" }
        ],
        o: "That is a big question! Thanks for thinking about it.",
        t: ["Yes, in good zoos.", "No, they are not.", "Sometimes."],
        x: [["sometimes", 0], ["it depends", 0], ["no", 1], ["they are not happy", 1], ["yes", 2], ["happy", 2], ["i don't know", -1], ["lions", -1]]
      },
      {
        c: "If you won a big prize at school, what would you choose?",
        he: 'אילו זכיתם בפרס גדול בבית הספר, מה הייתם בוחרים? I would choose a trip to the zoo.',
        a: [],
        o: "Great choice! I would choose that too.",
        t: ["I would choose a trip to the zoo.", "I would choose a day with no homework.", "A big box of books."],
        m: "I would choose a trip to see the northern lights.",
        x: [["a trip to the zoo", -1], ["no homework", -1]]
      }
    ],
    end: "If I could, I would talk to you all day! Bye for now!"
  },
  {
    id: 'ta2l15', title: 'Cities and towns',
    he: 'מדברים עם צ׳אצ׳ו על חיפה ועל מה שאוהבים בעיר',
    turns: [
      {
        c: "Haifa has the sea and a mountain. Do you prefer the sea or the mountains?",
        he: 'מה אתם מעדיפים, ים או הרים? The sea! או The mountains. או Both!',
        a: [
          { k: ['both'], r: "Both! Just like Haifa." },
          { k: ['sea beach swim swimming'], r: "The sea! Swimming and sand, lovely." },
          { k: ['mountain mountains hill hills forest'], r: "The mountains! Fresh air and a great view." }
        ],
        o: "Nice! Israel has lots of beautiful places.",
        t: ["The sea!", "The mountains.", "Both!"],
        m: "I prefer the sea, because I love swimming.",
        x: [["the sea", 1], ["beach", 1], ["mountains", 2], ["hills", 2], ["both", 0], ["the desert", -1], ["i don't know", -1]]
      },
      {
        c: "Karim loves the science museum. What is the best place in a city: a park, a museum or a beach?",
        he: 'מה המקום הכי טוב בעיר: פארק, מוזיאון או חוף? A park. או A museum. או The beach!',
        a: [
          { k: ['park'], r: "A park! Green, and great for playing." },
          { k: ['museum'], r: "A museum, like Karim! You learn so much." },
          { k: ['beach sea'], r: "The beach! Sun, sand and sea." }
        ],
        o: "Good choice! Every city needs one.",
        t: ["A park.", "A museum.", "The beach!"],
        x: [["park", 0], ["a big park", 0], ["museum", 1], ["beach", 2], ["the sea", 2], ["cinema", -1], ["i don't know", -1]]
      },
      {
        c: "Karim sometimes takes the Carmelit, a little underground train. How do you like to travel around?",
        he: 'איך אתם אוהבים להסתובב? By bike. או I like to walk. או By bus.',
        a: [
          { k: ['bike bicycle scooter skateboard'], r: "By bike or scooter! Fast and fun." },
          { k: ['bus train'], r: "By bus or train! You can look out of the window." },
          { k: ['walk walking foot feet'], r: "Walking! Good for you, and you see everything." },
          { k: ['car'], r: "By car! Comfy, and good for long trips." }
        ],
        o: "Great! Travelling around is fun.",
        t: ["By bike.", "I like to walk.", "By bus."],
        m: "I like to travel by bike with my friends.",
        x: [["by bike", 0], ["scooter", 0], ["bus", 1], ["train", 1], ["i walk", 2], ["on foot", 2], ["car", 3], ["i fly", -1], ["i don't know", -1]]
      },
      {
        c: "Imagine you could add one new thing to your town. What would it be?",
        he: 'אתם יכולים להוסיף דבר אחד חדש לעיר. מה זה יהיה? A big water park. או More trees.',
        a: [],
        o: "Wonderful idea! Everybody would love it.",
        t: ["A big water park.", "A zoo with a forest.", "More parks and trees."],
        m: "I would add a big water park for kids.",
        x: [["a water park", -1], ["more trees", -1]]
      }
    ],
    end: "Thank you for the tour! Haifa sounds lovely. Bye!"
  },
  {
    id: 'ta2l16', title: 'Friends are the best',
    he: 'מדברים עם צ׳אצ׳ו על חברים: מה עושים יחד ומה עושה חבר טוב',
    turns: [
      {
        c: "Tom and Amir both love football and comics. What do you like doing with your friends?",
        he: 'מה אתם אוהבים לעשות עם חברים? We play football. או We talk and laugh.',
        a: [
          { k: ['football basketball sport ball run swim'], r: "Sport with friends! Great fun." },
          { k: ['game games video computer'], r: "Games! Fun with friends." },
          { k: ['talk chat laugh walk park'], r: "Talking and laughing! The best." },
          { k: ['draw art music sing dance cook bake'], r: "So creative! Great." }
        ],
        o: "That sounds like a lot of fun!",
        t: ["We play football.", "We play video games.", "We talk and laugh."],
        m: "We play football in the park after school.",
        x: [["football", 0], ["we play basketball", 0], ["video games", 1], ["we talk", 2], ["walk in the park", 2], ["we dance", 3], ["nothing", -1], ["i don't know", -1]]
      },
      {
        c: "Shir is quiet, and Lea is talkative. Are you more quiet or more talkative?",
        he: 'אתם יותר שקטים או יותר פטפטנים? I am quiet. או I am very talkative! או A bit of both.',
        a: [
          { k: ['both depend depends'], r: "A bit of both! That is perfect." },
          { k: ['quiet shy calm'], r: "Quiet, like Shir! Good listeners are great friends." },
          { k: ['talk talkative chat loud'], r: "Talkative, like Lea! Never boring." }
        ],
        o: "Quiet or talkative, both make great friends!",
        t: ["I am quiet.", "I am very talkative!", "A bit of both."],
        m: "I am quite talkative, but I listen too.",
        x: [["quiet", 1], ["i'm shy", 1], ["talkative", 2], ["i talk a lot", 2], ["both", 0], ["it depends", 0], ["i don't know", -1], ["tall", -1]]
      },
      {
        c: "For Shir, a good friend listens. What makes a good friend for you?",
        he: 'מה עושה חבר טוב בשבילכם? A good friend is kind. או A good friend helps you.',
        a: [],
        o: "That is very true. Thank you for sharing!",
        t: ["A good friend is kind.", "A good friend helps you.", "Someone who is funny."],
        m: "A good friend is kind and always helps you.",
        x: [["kind", -1], ["he help me", -1]]
      },
      {
        c: "Imagine Chacho is your new friend. What would we do together?",
        he: 'דמיינו שצ׳אצ׳ו הוא החבר החדש שלכם. מה הייתם עושים יחד? We would go to the beach.',
        a: [],
        o: "Ooh, I can't wait! That sounds fabulous.",
        t: ["We would go to the beach.", "We would play games.", "We would sing songs."],
        m: "We would fly kites at the beach together.",
        x: [["go to the beach", -1], ["play games", -1]]
      }
    ],
    end: "Thank you for being my friend today! See you soon. Bye!"
  },
  {
    id: 'ta2l17', title: 'The cake mystery',
    he: 'מדברים עם צ׳אצ׳ו על תעלומת העוגה, עם was ו-were + ing',
    turns: [
      {
        c: "Mr Haddad moved the cake to keep it cold. Was that a good idea?",
        he: 'זה היה רעיון טוב? Yes, it was a good idea. או No, he should ask the class first.',
        a: [
          { k: ['no not tell ask'], n: 'know', r: "Maybe he should ask the class first. Good point!" },
          { k: ['yes good great smart clever'], r: "I agree! Chocolate and sun are not friends." }
        ],
        o: "Hmm, interesting! The cake was fine in the end.",
        t: ["Yes, it was a good idea.", "No, he should ask the class first."],
        x: [["yes", 1], ["it was good", 1], ["no", 0], ["he didn't tell them", 0], ["i don't know", -1], ["cake", -1]]
      },
      {
        c: "At ten o'clock Ron was watering the plants. What were you doing at eight o'clock this morning?",
        he: 'מה עשיתם היום בשמונה בבוקר? I was having breakfast. או I was sleeping!',
        a: [
          { k: ['breakfast eat ate food'], r: "You were having breakfast! Good start to the day." },
          { k: ['sleep slept bed'], r: "You were sleeping! Lucky you." },
          { k: ['school bus walk'], r: "You were going to school! A busy morning." },
          { k: ['dress teeth wash shower brush'], r: "You were getting ready! Clean and fresh." }
        ],
        o: "Thank you! Every morning is different.",
        t: ["I was having breakfast.", "I was sleeping!", "I was going to school."],
        m: "At eight o'clock I was having breakfast.",
        x: [["i was eating breakfast", 0], ["having breakfast", 0], ["sleeping", 1], ["i was sleep", 1], ["going to school", 2], ["on the bus", 2], ["brushing my teeth", 3], ["nothing", -1]]
      },
      {
        c: "Gali was a great detective. Would you like to be a detective one day?",
        he: 'הייתם רוצים להיות בלשים יום אחד? Yes, I would love it! או No, not really.',
        a: [
          { k: ['no not'], n: 'know', r: "That is okay! There are lots of great jobs." },
          { k: ['yes love like sure maybe'], r: "Great! You can find all the lost socks." }
        ],
        o: "Detectives are clever, and so are you!",
        t: ["Yes, I would love it!", "No, not really."],
        m: "Yes, I would love to solve mysteries.",
        x: [["yes", 1], ["i would love it", 1], ["no", 0], ["not really", 0], ["i don't know", -1], ["a teacher", -1]]
      },
      {
        c: "Imagine a new mystery at your school. What is missing this time?",
        he: 'דמיינו תעלומה חדשה בבית הספר. מה נעלם הפעם? The class ball is missing.',
        a: [],
        o: "A new mystery! Call Gali, the class detective.",
        t: ["The class ball is missing.", "The teacher's pen is missing.", "All the chairs are missing!"],
        x: [["the ball", -1], ["the teacher pen", -1]]
      }
    ],
    end: "Mystery solved! You are a great detective too. Bye!"
  },
  {
    id: 'ta2r05', title: 'Chores: yes or no?',
    he: 'מדברים עם צ׳אצ׳ו על עזרה בבית, כמו נועם, ליאור והמורה לוי',
    turns: [
      {
        c: "Noam's family has a chore chart on the fridge. Do you think a chore chart is a good idea?",
        he: "לוח מטלות על המקרר הוא רעיון טוב? Yes, it is fair. או No, I don't like it.",
        a: [
          { k: ['no not'], n: 'know', r: "Not for you? That is okay. Every home is different." },
          { k: ['yes good great fair'], r: "I agree! Then everyone knows their jobs." }
        ],
        o: "Interesting! Thank you for telling me.",
        t: ["Yes, it is fair.", "No, I don't like it."],
        m: "Yes, because everyone knows their jobs.",
        x: [["yes", 1], ["good idea", 1], ["no", 0], ["i don't like it", 0], ["i don't know", -1], ["maybe", -1]]
      },
      {
        c: "Lior always tidies his own room. Which chore is the easiest for you?",
        he: 'איזו מטלה הכי קלה לכם? Making my bed. או Setting the table. או Watering the plants.',
        a: [
          { k: ['bed'], r: "Making your bed! Quick and easy." },
          { k: ['table plate plates fork'], r: "Setting the table! Easy, and everyone is happy." },
          { k: ['plant plants flower flowers water'], r: "Watering the plants! The plants love you." },
          { k: ['tidy room toys clothes'], r: "Tidying up! Nice and quick." }
        ],
        o: "Good one! Easy chores are the best.",
        t: ["Making my bed.", "Setting the table.", "Watering the plants."],
        m: "Setting the table is the easiest. It takes two minutes.",
        x: [["making my bed", 0], ["set the table", 1], ["water the plants", 2], ["tidy my room", 3], ["none", -1], ["i don't know", -1]]
      },
      {
        c: "Ms Levy says twenty or thirty minutes of chores a day is enough. Do you agree?",
        he: "אתם מסכימים שעשרים או שלושים דקות ביום זה מספיק? Yes, I agree. או No, I don't agree.",
        a: [
          { k: ['no not disagree'], n: 'know', r: "Every family is different. Thank you for your opinion!" },
          { k: ['yes agree right enough'], r: "I agree too! Then there is time to play." }
        ],
        o: "Thank you! That is a good answer.",
        t: ["Yes, I agree.", "No, I don't agree."],
        x: [["yes", 1], ["i am agree", 1], ["no", 0], ["i don't agree", 0], ["i don't know", -1], ["ten minutes", -1]]
      },
      {
        c: "Imagine you make the chore chart. Which job are you going to give yourself?",
        he: 'אתם מכינים את לוח המטלות. איזו עבודה תיקחו לעצמכם? I am going to feed the cat.',
        a: [],
        o: "Great choice! You are a real team player.",
        t: ["I am going to feed the cat.", "I am going to cook pasta.", "I am going to set the table."],
        m: "I am going to cook pasta, like Noam.",
        x: [["feed the dog", -1], ["i cook pasta", -1]]
      }
    ],
    end: "Thank you! Now I am going to tidy my nest. See you!"
  },
  {
    id: 'ta2r06', title: 'Old inventions',
    he: 'מדברים עם צ׳אצ׳ו על שלוש ההמצאות משנות ה-20 ועל המצאות של העתיד',
    turns: [
      {
        c: "Bubble gum, sliced bread and TV are all from the nineteen twenties. Which one is the best invention?",
        he: 'איזו המצאה הכי טובה? The TV. או Sliced bread! או Bubble gum.',
        a: [
          { k: ['tv television'], r: "The TV! Films and shows for everybody." },
          { k: ['bread sandwich toast'], r: "Sliced bread! The best thing since sliced bread, ha!" },
          { k: ['gum bubble'], r: "Bubble gum! Pink, stretchy and fun." }
        ],
        o: "Good choice! All three are clever ideas.",
        t: ["The TV.", "Sliced bread!", "Bubble gum."],
        x: [["tv", 0], ["television", 0], ["bread", 1], ["sliced bread", 1], ["bubble gum", 2], ["the gum", 2], ["the phone", -1], ["i don't know", -1]]
      },
      {
        c: "Walter Diemer's gum was pink. If you made a new gum, what colour would it be?",
        he: 'אילו המצאתם מסטיק חדש, באיזה צבע הוא היה? It would be blue. או Rainbow colours!',
        a: [],
        o: "Ooh, what a fun colour! I want to try it.",
        t: ["It would be blue.", "Rainbow colours!", "It would be gold and shiny."],
        m: "It would be blue and taste of strawberries.",
        x: [["blue", -1], ["it will be green", -1]]
      },
      {
        c: "Before sliced bread, people cut their own bread. What is the best thing in a sandwich?",
        he: 'מה הכי טעים בכריך? Cheese and tomato. או Chocolate spread! או Hummus and egg.',
        a: [],
        o: "Yum! That sounds like a great sandwich.",
        t: ["Cheese and tomato.", "Chocolate spread!", "Hummus and egg."],
        m: "The best thing in a sandwich is cheese and tomato.",
        x: [["cheese", -1], ["peanut butter", -1]]
      },
      {
        c: "One hundred years from now, what invention do you think people are going to use?",
        he: 'בעוד מאה שנה, באיזו המצאה אנשים ישתמשו? Flying cars. או Robots that do homework.',
        a: [],
        o: "Wow, what an idea! Maybe you are going to invent it.",
        t: ["Flying cars.", "Robots that do homework.", "Shoes that can fly."],
        m: "I think people are going to use flying cars.",
        x: [["flying car", -1], ["robots", -1]]
      }
    ],
    end: "Thank you, inventor! Now I am going to blow a big bubble. Bye!"
  },
  {
    id: 'ta2r07', title: 'Carnival time!',
    he: 'מדברים עם צ׳אצ׳ו על הקרנבל בלונדון: תחפושות, ריקודים ומוזיקה',
    turns: [
      {
        c: "Amara was a butterfly at the carnival. What costume would you like to wear?",
        he: 'איזו תחפושת הייתם רוצים ללבוש? I would be a butterfly. או A colourful bird!',
        a: [],
        o: "Fabulous! You would look amazing.",
        t: ["I would be a butterfly.", "A colourful bird!", "I would be a lion."],
        x: [["a lion", -1], ["i want be a butterfly", -1]]
      },
      {
        c: "At the carnival, people dance in a big parade. Do you like dancing?",
        he: 'אתם אוהבים לרקוד? Yes, I love dancing! או No, not really. או Only with my friends.',
        a: [
          { k: ['only sometimes friend friends little'], r: "With friends it is more fun! I agree." },
          { k: ['no not'], n: 'know', r: "That is okay! Watching is fun too." },
          { k: ['yes love like dance dancing'], r: "Me too! I dance with my wings." }
        ],
        o: "Dancing or watching, both are fun!",
        t: ["Yes, I love dancing!", "No, not really.", "Only with my friends."],
        m: "Yes, I love dancing with my friends.",
        x: [["yes i love it", 2], ["i like dancing", 2], ["no", 1], ["not really", 1], ["only with friends", 0], ["sometimes", 0], ["i don't know", -1], ["music", -1]]
      },
      {
        c: "The steel bands at the carnival are very loud. Do you like loud music or quiet music?",
        he: 'אתם אוהבים מוזיקה רועשת או שקטה? Loud music! או Quiet music. או Both!',
        a: [
          { k: ['both'], r: "Both! It depends on the day." },
          { k: ['loud'], r: "Loud music! Feel it in your feet." },
          { k: ['quiet soft calm'], r: "Quiet music! Nice and calm." }
        ],
        o: "Music makes every day better!",
        t: ["Loud music!", "Quiet music.", "Both!"],
        m: "I like loud music when I dance.",
        x: [["loud", 1], ["very loud music", 1], ["quiet", 2], ["soft music", 2], ["both", 0], ["i don't know", -1], ["no music", -1]]
      },
      {
        c: "Imagine your town has a big summer festival. What is it going to have?",
        he: 'בעיר שלכם יש פסטיבל קיץ גדול. מה יהיה בו? It is going to have music and dancing.',
        a: [],
        o: "What a great festival! I am going to come.",
        t: ["It is going to have music and dancing.", "Lots of food and games.", "A parade with costumes."],
        x: [["music and food", -1], ["a big parade", -1]]
      }
    ],
    end: "Thank you for coming to the carnival with me! Bye!"
  },
  {
    id: 'ta2r08', title: 'Have you ever...?',
    he: 'מדברים עם צ׳אצ׳ו על דברים שעשיתם ועוד לא עשיתם (present perfect)',
    turns: [
      {
        c: "Ella has slept in the desert twice. Have you ever slept in a tent?",
        he: "ישנתם פעם באוהל? Yes, I have. או No, I haven't.",
        a: [
          { k: ['no not never'], n: 'know', r: "Not yet? Maybe one day! Tents are fun." },
          { k: ['yes have once twice times'], r: "You have! Tents are great under the stars." }
        ],
        o: "Tents are fun! I sleep in a nest.",
        t: ["Yes, I have.", "No, I haven't.", "Yes, once!"],
        x: [["yes i have", 1], ["once", 1], ["no i haven't", 0], ["never", 0], ["i don't know", -1], ["in my bed", -1]]
      },
      {
        c: "Ella has never skied. What is something you have never done, but you want to try?",
        he: 'מה עוד לא עשיתם ואתם רוצים לנסות? I have never been on a plane. או I have never skied.',
        a: [],
        o: "Ooh! I hope you can try it soon.",
        t: ["I have never been on a plane.", "I have never skied.", "I have never ridden a horse."],
        x: [["ride a horse", -1], ["i never fly on a plane", -1]]
      },
      {
        c: "Ella sang on a stage. Would you like to sing or dance on a stage?",
        he: 'הייתם רוצים לשיר או לרקוד על במה? I would like to sing. או I would like to dance. או No, thank you!',
        a: [
          { k: ['no not never'], n: 'know', r: "That is okay! You can clap for everybody." },
          { k: ['both'], r: "Both! A real star." },
          { k: ['sing singing song'], r: "Singing! I would love to hear you." },
          { k: ['dance dancing'], r: "Dancing! Show us your best moves." }
        ],
        o: "A stage is exciting! Everybody is clapping.",
        t: ["I would like to sing.", "I would like to dance.", "No, thank you!"],
        m: "I would like to dance on a big stage.",
        x: [["sing", 2], ["singing", 2], ["dance", 3], ["both", 1], ["no thank you", 0], ["not me", 0], ["i don't know", -1], ["act", -1]]
      },
      {
        c: "Ella says: try things that scare you at first. What is something brave you have done?",
        he: 'מה דבר אמיץ שעשיתם? I have jumped into a big pool. או I have sung in front of my class.',
        a: [],
        o: "Thank you for telling me! Being brave is not easy.",
        t: ["I have jumped into a big pool.", "I have sung in front of my class.", "I have touched a snake."],
        m: "I have jumped into the deep end of the pool.",
        x: [["i jumped in the pool", -1], ["i touch a snake", -1]]
      }
    ],
    end: "You have done amazing things! See you next time. Bye!"
  },
  {
    id: 'ta2u07', title: 'The giant watermelon',
    he: 'מדברים עם צ׳אצ׳ו על האבטיח הענק, על פירות ועל גינה בבית הספר',
    turns: [
      {
        c: "The class watermelon was thirty-one kilos! What is your favourite summer fruit?",
        he: 'מה הפרי האהוב עליכם בקיץ? Watermelon, of course! או I love mangoes.',
        a: [
          { k: ['watermelon watermelons'], r: "Watermelon! Sweet and cold, perfect for summer." },
          { k: ['mango mangoes peach peaches apricot cherry plum'], r: "Ooh, juicy and sweet! A great choice." },
          { k: ['grape grapes melon strawberry strawberries banana apple orange'], r: "Yum! I love that fruit too." }
        ],
        o: "Yum! Summer fruit is the best.",
        t: ["Watermelon, of course!", "I love mangoes.", "Grapes!"],
        x: [["watermelon", 0], ["mango", 1], ["cherries", 1], ["grapes", 2], ["strawberry", 2], ["ice cream", -1], ["i don't know", -1]]
      },
      {
        c: "If you had a school garden, what would you grow?",
        he: 'אילו הייתה לכם גינה בבית הספר, מה הייתם מגדלים? I would grow tomatoes. או A giant pumpkin!',
        a: [],
        o: "Lovely! I would come and help you.",
        t: ["I would grow tomatoes.", "I would grow flowers.", "A giant pumpkin!"],
        m: "I would grow tomatoes and a giant pumpkin.",
        x: [["tomatoes", -1], ["i grow flowers", -1]]
      },
      {
        c: "The children shared the watermelon with the whole school. Do you like sharing food with friends?",
        he: 'אתם אוהבים לחלוק אוכל עם חברים? Yes, I love sharing. או Sometimes. או Not my chocolate!',
        a: [
          { k: ['sometimes depend chocolate'], r: "Ha! Some food is too good to share." },
          { k: ['no not'], n: 'know', r: "That is okay! Your food, your choice." },
          { k: ['yes love like share sharing'], r: "Lovely! Sharing makes food taste better." }
        ],
        o: "Sharing is caring, as people say!",
        t: ["Yes, I love sharing.", "Sometimes.", "Not my chocolate!"],
        m: "Yes, I like sharing, but not my chocolate!",
        x: [["yes", 2], ["i like sharing", 2], ["no", 1], ["i don't share", 1], ["sometimes", 0], ["not chocolate", 0], ["i don't know", -1], ["pizza", -1]]
      },
      {
        c: "Imagine a funny news story about your school. What happened?",
        he: 'דמיינו ידיעה מצחיקה על בית הספר שלכם. מה קרה? A goat came to our class.',
        a: [],
        o: "Ha! That is front page news!",
        t: ["A goat came to our class.", "Our teacher sang in the playground.", "It rained chocolate!"],
        m: "A goat walked into our classroom and ate a book.",
        x: [["a cat came to school", -1], ["it rain chocolate", -1]]
      }
    ],
    end: "Thanks, reporter! Now I am going to eat some watermelon. Bye!"
  },
  {
    id: 'ta2u08', title: 'The runaway robot',
    he: 'מדברים עם צ׳אצ׳ו על הרובוט שיצא לטיול ועל רובוטים שעוזרים',
    turns: [
      {
        c: "The robot cleaned the bakery floor. Would you like a cleaning robot at home?",
        he: 'הייתם רוצים רובוט ניקיון? Yes, please! או No, thanks.',
        a: [
          { k: ['no not'], n: 'know', r: "No robot for you? That is fine. Brooms are good too!" },
          { k: ['yes please sure love like want'], r: "Me too! Then there is more time to play." }
        ],
        o: "Robots are fun! But I like my broom.",
        t: ["Yes, please!", "No, thanks."],
        m: "Yes, please! Then I would have more time to play.",
        x: [["yes", 1], ["yes please", 1], ["no", 0], ["no thanks", 0], ["i don't know", -1], ["a dog", -1]]
      },
      {
        c: "Which job at school would a robot be good at?",
        he: 'באיזו עבודה בבית הספר רובוט היה טוב? Cleaning the classrooms. או Helping in the library.',
        a: [
          { k: ['clean cleaning floor tidy'], r: "Cleaning! Like the robot in the story." },
          { k: ['library book books'], r: "The library! A robot that loves books." },
          { k: ['cook food lunch kitchen'], r: "Making lunch! A robot chef. Yum." },
          { k: ['homework teach test maths math'], r: "A robot teacher? Ha! A very clever robot." }
        ],
        o: "Great idea! That robot would be very busy.",
        t: ["Cleaning the classrooms.", "Helping in the library.", "Making lunch."],
        m: "A robot would be good at cleaning the classrooms.",
        x: [["cleaning", 0], ["clean the floor", 0], ["library", 1], ["books", 1], ["cook lunch", 2], ["teach maths", 3], ["homework", 3], ["play", -1], ["i don't know", -1]]
      },
      {
        c: "Mr Oren was putting bread on the shelves. What were you doing at five o'clock yesterday?",
        he: 'מה עשיתם אתמול בחמש? I was doing my homework. או I was playing in the park.',
        a: [],
        o: "Thank you for telling me!",
        t: ["I was doing my homework.", "I was playing in the park.", "I was watching TV."],
        m: "At five o'clock I was playing football in the park.",
        x: [["i was play football", -1], ["doing homework", -1]]
      },
      {
        c: "If you built a robot, what would you call it?",
        he: 'אילו בניתם רובוט, איך הייתם קוראים לו? I would call it Robo. או Sparky.',
        a: [],
        o: "What a great name! Your robot is going to love it.",
        t: ["I would call it Robo.", "I would call it Sparky.", "I would call it Bob."],
        m: "I would call it Sparky, because it is very fast.",
        x: [["robo", -1], ["i call him max", -1]]
      }
    ],
    end: "Thank you! Now I am going to read the news. Bye bye!"
  },
  {
    id: 'ta2w01', title: "Chacho's picnic",
    he: 'מזמינים לפיקניק, עם Would you like to...? ו-on Friday at five',
    turns: [
      {
        c: "I am having a picnic in the park! Would you like to come?",
        he: 'רוצים לבוא לפיקניק? למשל: Yes, I would love to! או Sorry, I am busy.',
        a: [
          { k: ['no not sorry busy'], n: 'know', r: "That is okay. Maybe next time! I will save you a cracker." },
          { k: ['yes love like sure please okay ok'], r: "Yay! It is going to be so much fun." }
        ],
        o: "Thank you! I hope you can come.",
        t: ["Yes, I would love to!", "Sorry, I am busy."],
        m: "Yes, I would love to come!",
        x: [["yes", 1], ["i would like to come", 1], ["sorry i can't", 0], ["no i am busy", 0], ["what food", -1]]
      },
      {
        c: "When is a good day and time for a picnic?",
        he: "מתי כדאי לעשות את הפיקניק? יום ושעה. למשל: On Friday at five o'clock.",
        a: [],
        o: "Perfect! I will write it in my diary.",
        t: ["On Friday at five o'clock.", "On Saturday at ten.", "On Sunday afternoon."],
        m: "It is on Friday at five o'clock.",
        x: [["friday in 5", -1], ["at saturday morning", -1]]
      },
      {
        c: "What food would you like to bring to the picnic?",
        he: 'איזה אוכל תביאו לפיקניק? למשל: I would like to bring sandwiches.',
        a: [],
        o: "Yum! Everybody is going to love that.",
        t: ["I would like to bring sandwiches.", "Some fruit and cookies.", "Some watermelon!"],
        m: "I would like to bring sandwiches.",
        x: [["i bring cake", -1], ["chips and juice", -1]]
      },
      {
        c: "Now you invite me! Ask me to something with Would you like to...?",
        he: 'עכשיו אתם מזמינים את צ׳אצ׳ו. למשל: Would you like to come to my party?',
        a: [
          { k: ['would'], r: "Yes, I would love to! Thank you for asking me." },
          { k: ['want come'], r: "Would I like to come? Yes, I would love to!" }
        ],
        o: "Thank you! I would love to come.",
        t: ["Would you like to come to my party?", "Would you like to play with me?", "Do you want to come to the beach?"],
        m: "Would you like to come to my party?",
        x: [["would you like to come to the beach", 0], ["you want come to my house", 1], ["come to my party", 1], ["hello", -1]]
      }
    ],
    end: "See you at the picnic! I will bring the crackers. Bye bye!"
  },
  {
    id: 'ta2w02', title: "Chacho's holiday",
    he: 'מספרים לצ׳אצ׳ו על חופשה או טיול, בעבר: went, swam, saw',
    turns: [
      {
        c: "Last summer I flew to Eilat and swam with fish! Did you go on a trip this year?",
        he: "יצאתם לטיול השנה? למשל: Yes, we went to the north. או No, we didn't.",
        a: [
          { k: ['no not'], n: 'know', r: "That is okay. Days at home are fun too!" },
          { k: ['yes went go visit travel trip'], r: "You went on a trip? Fabulous! I love trips." }
        ],
        o: "Thank you for telling me!",
        t: ["Yes, we went to the north.", "No, we didn't."],
        m: "Yes, we went to the north.",
        x: [["yes", 1], ["we go to eilat", 1], ["no", 0], ["we didn't go", 0], ["summer", -1]]
      },
      {
        c: "Think of a fun trip or holiday. Where did you go?",
        he: 'חשבו על טיול או חופשה כיפית. לאן נסעתם? למשל: We went to the beach.',
        a: [],
        o: "Ooh, that sounds lovely! I want to fly there.",
        t: ["We went to the beach.", "I went to Eilat.", "We went to the Galilee."],
        m: "We went to the beach in Eilat.",
        x: [["i go to tel aviv", -1], ["the north", -1]]
      },
      {
        c: "What did you do there? Did you swim, eat or see something new?",
        he: 'מה עשיתם שם? בעבר: swam, ate, saw. למשל: We swam in the sea.',
        a: [
          { k: ['swim swam swimming sea pool'], r: "You swam! Lucky you. I only swim in my bath." },
          { k: ['eat ate food ice_cream pizza'], r: "You ate yummy food! Holidays are for eating." },
          { k: ['see saw seen look'], r: "You saw something new! That is the best part." }
        ],
        o: "That sounds like a great time!",
        t: ["We swam in the sea.", "We ate ice cream every day.", "I saw lots of fish."],
        m: "We swam in the sea every day.",
        x: [["we swim in the sea", 0], ["i eat pizza", 1], ["we see a castle", 2], ["we played games", -1], ["we sleep", -1]]
      },
      {
        c: "How was it? Was it great, fun or a bit boring?",
        he: 'איך היה? בעבר: It was. למשל: It was great! או It was a bit boring.',
        a: [
          { k: ['boring bad not'], n: 'not_bad', r: "Oh, it was boring? Not every trip is perfect." },
          { k: ['great fun good amazing cool nice wonderful best'], r: "It was great? Fabulous! I am so happy for you." }
        ],
        o: "Thank you for telling me about it!",
        t: ["It was great!", "It was a bit boring."],
        m: "It was great! I loved it.",
        x: [["it is great", 1], ["was so fun", 1], ["boring", 0], ["not good", 0], ["hot", -1], ["not bad", -1]]
      }
    ],
    end: "Thank you! Now I am going to plan my next trip. Bye bye!"
  },
  {
    id: 'ta2w03', title: "Chacho's cool job",
    he: 'מדברים על עבודות מעניינות, עם A vet helps animals',
    turns: [
      {
        c: "I have a cool job. I sell clothes in my shop! What job do you think is cool?",
        he: 'איזו עבודה נראית לכם מגניבה? למשל: I think a vet has a cool job.',
        a: [
          { k: ['vet animal animals'], r: "A vet! A vet helps animals. Parrots too!" },
          { k: ['doctor nurse'], r: "A doctor helps sick people. That is a great job." },
          { k: ['chef cook'], r: "A chef works in a kitchen. Yum!" },
          { k: ['pilot plane'], r: "A pilot flies a plane. Just like me! Ha!" }
        ],
        o: "Ooh, that is an interesting job!",
        t: ["I think a vet has a cool job.", "A chef!", "A pilot is cool."],
        m: "I think a vet has a cool job.",
        x: [["vet", 0], ["a doctor", 1], ["chef", 2], ["pilot", 3], ["football player", -1], ["teacher", -1]]
      },
      {
        c: "What does a person in that job do every day?",
        he: 'מה עושים בעבודה הזאת? זוכרים s בסוף. למשל: A vet helps sick animals.',
        a: [],
        o: "Wow, that is a busy day at work!",
        t: ["A vet helps sick animals.", "A chef cooks food.", "A pilot flies planes."],
        x: [["he help animals", -1], ["cook food", -1]]
      },
      {
        c: "Which job would you like to try for one day? Why?",
        he: 'איזו עבודה הייתם רוצים לנסות ליום אחד, ולמה? למשל: I would like to be a vet.',
        a: [],
        o: "What a fun idea! One day is a great start.",
        t: ["I would like to be a vet.", "A chef, because I love cooking.", "A pilot, because I love planes."],
        m: "I would like to be a vet for one day.",
        x: [["i want be a doctor", -1], ["firefighter because it is exciting", -1]]
      },
      {
        c: "Do you think a firefighter has an exciting job or a boring job?",
        he: 'עבודה של כבאי מרגשת או משעממת? למשל: I think it is exciting.',
        a: [
          { k: ['boring'], r: "Boring? Maybe on a quiet day! But it is very important." },
          { k: ['exciting excited interesting cool fun scary dangerous hard'], r: "I think so too! A firefighter helps people every day." }
        ],
        o: "Firefighters are very brave people!",
        t: ["I think it is exciting.", "I think it is a bit boring."],
        m: "I think it is an exciting job.",
        x: [["exciting", 1], ["is very interesting", 1], ["boring", 0], ["i don't know", -1], ["scary", 1]]
      }
    ],
    end: "Thank you! Now I am going back to my job. I sell the best hats! Bye bye!"
  },
  {
    id: 'ta2w04', title: 'A postcard from Chacho',
    he: "מדברים על גלויה מטיול: We're in..., It's beautiful, See you soon!",
    turns: [
      {
        c: "Hi! I am in the Galilee, and it is beautiful! Where would you like to send a postcard from?",
        he: 'מאיזה מקום הייתם רוצים לשלוח גלויה? למשל: From the beach in Eilat.',
        a: [],
        o: "Ooh, what a great place for a postcard!",
        t: ["From the beach in Eilat.", "From Paris!", "From a big city."],
        m: "I would like to send one from Eilat.",
        x: [["from london", -1], ["the north", -1]]
      },
      {
        c: "What is the weather like there, do you think?",
        he: "איך מזג האוויר שם? למשל: It's sunny and hot. או It's cold and rainy.",
        a: [
          { k: ['sun sunny hot warm'], r: "Sunny and hot! Do not forget your hat." },
          { k: ['rain rainy cold snow snowy wind windy'], r: "Brr! Take a warm coat and an umbrella." }
        ],
        o: "Thank you! I will pack the right clothes.",
        t: ["It is sunny and hot.", "It is cold and rainy."],
        m: "It's sunny and beautiful.",
        x: [["is sunny", 0], ["very hot", 0], ["it snow", 1], ["cold", 1], ["nice", -1]]
      },
      {
        c: "On your trip, real or made up, what did you do?",
        he: 'מה עשיתם בטיול, אמיתי או מדומיין? בעבר. למשל: We took a boat trip.',
        a: [],
        o: "Wow, what a fun day!",
        t: ["We took a boat trip.", "I swam in the sea.", "We went to a museum."],
        m: "Yesterday we took a boat trip.",
        x: [["we go swim", -1], ["eat falafel", -1]]
      },
      {
        c: "How do you like to end a postcard to a friend?",
        he: 'איך אתם אוהבים לסיים גלויה לחבר? למשל: See you soon! או Love, from me.',
        a: [
          { k: ['see_you soon bye love miss'], r: "Lovely! See you soon is warm and friendly." }
        ],
        o: "Thank you! A short, warm goodbye is the best.",
        t: ["See you soon!", "Love, from me.", "Bye for now!"],
        m: "See you soon!",
        x: [["see you soon", 0], ["bye bye", 0], ["i miss you", 0], ["the end", -1], ["thank you", -1]]
      }
    ],
    end: "I am going to write my postcards now. See you soon, my friend!"
  }
]);

// Talk to Chacho: A2 home scenes sa201 to sa215 (tools/TALK-WRITING.md).
window.EQ_TALK.a2 = (window.EQ_TALK.a2 || []).concat([
  {
    id: 'sa201', title: 'The café mix-up',
    he: "מזמינים בבית הקפה של צ׳אצ׳ו, והוא מתבלבל בהזמנה",
    turns: [
      {
        c: "Hello, and welcome to Café Chacho! We have sandwiches, soup and salad. What would you like to eat?",
        he: "מה תאכלו? I would like a sandwich, please. או Soup, please.",
        a: [
          { k: ['sandwich toast'], r: "A sandwich. Good choice!" },
          { k: ['soup'], r: "Soup! It is warm and delicious today." },
          { k: ['salad'], r: "A salad. Fresh and healthy!" }
        ],
        o: "Okay! I will bring you the special of the day.",
        t: ["I would like a sandwich, please.", "Soup, please.", "A salad, please."],
        x: [["a sandwich please", 0], ["i would like soup", 1], ["salad", 2], ["pizza", -1], ["i want the sandwich", 0], ["toast with cheese", 0]]
      },
      {
        c: "And what would you like to drink?",
        he: "מה תשתו? Orange juice, please. או A glass of water, please.",
        a: [],
        o: "Great, I will bring it in a minute.",
        t: ["Orange juice, please.", "A glass of water, please.", "Lemonade, please."],
        x: [["orange juice", -1], ["water please", -1], ["i want cola", -1]]
      },
      {
        c: "Here you are: a bowl of popcorn and a glass of milk! Is this what you ordered?",
        he: "צ׳אצ׳ו הביא פופקורן וחלב! זה מה שהזמנתם? No, it isn't. או No, I ordered a sandwich.",
        a: [
          { k: ['no not'], r: "Oh no, I'm so sorry! I mixed up the orders." },
          { k: ['yes'], r: "Ha ha, you are very kind! But I think I made a mistake." }
        ],
        o: "Hmm, I think I made a mistake. Sorry!",
        t: ["No, it isn't.", "No, I ordered a sandwich.", "Yes, it's fine."],
        x: [["no", 0], ["no it isn't", 0], ["no i ordered soup", 0], ["yes", 1], ["popcorn", -1], ["what", -1]]
      },
      {
        c: "I wrote your order on my feather, and the wind took it! What did you order?",
        he: "הרוח לקחה את ההזמנה! מה הזמנתם? I ordered a sandwich and juice.",
        a: [
          { k: ['order'], n: 'ordered', r: "Ah, you ordered that! Thank you. Now I remember." },
          { k: ['ordered want wanted asked'], r: "Thank you! Now I remember. It is coming right up." },
          { k: ['sandwich soup salad juice water lemonade milk tea cola'], r: "Yes, of course! Now I remember. It is coming right up." }
        ],
        o: "Okay, now I remember! It is coming right up.",
        t: ["I ordered a sandwich and juice.", "Soup and water, please."],
        x: [["i order soup", 0], ["i ordered a sandwich and water", 1], ["i wanted salad", 1], ["soup and juice", 2], ["pizza", -1], ["i don't remember", -1]]
      },
      {
        c: "Here is your real order, and a free cookie. Which is better, the food or the cookie?",
        he: "מה יותר טוב, האוכל או העוגייה? The cookie is better! או Both are great.",
        a: [
          { k: ['both'], r: "Both! That is a happy answer." },
          { k: ['cookie biscuit'], r: "The cookie! I made it myself, with my beak." },
          { k: ['food sandwich soup salad'], r: "The food! I will tell the chef." }
        ],
        o: "Thank you! I am happy you came.",
        t: ["The cookie is better!", "The food is better.", "Both are great."],
        x: [["the cookie", 1], ["the food is better", 2], ["both", 0], ["the sandwich", 2], ["i dont know", -1]]
      }
    ],
    end: "Thank you for coming to Café Chacho. Next time I will write on paper!"
  },
  {
    id: 'sa202', title: 'Help! Where is the beach?',
    he: "צ׳אצ׳ו תייר שהלך לאיבוד: נותנים לו הוראות הגעה לים",
    turns: [
      {
        c: "Excuse me! I am a tourist and I am lost. Is the beach near here or far?",
        he: "הים קרוב או רחוק? It's near here. או It's quite far.",
        a: [
          { k: ['not_far near close'], r: "Near? Oh good, my wings are tired." },
          { k: ['far'], r: "Far? Oh no! I will need a snack." }
        ],
        o: "Okay, thank you. I need some help, please.",
        t: ["It's near here.", "It's quite far."],
        x: [["near", 0], ["it is not far", 0], ["far", 1], ["very far", 1], ["i don't know", -1], ["it's close", 0]]
      },
      {
        c: "Can I walk there, or should I take a bus?",
        he: "אפשר ללכת ברגל או לקחת אוטובוס? You can walk there. או Take the bus.",
        a: [
          { k: ['fly flying wings'], r: "Fly? Ha! Of course, I am a parrot. Good idea!" },
          { k: ['bus taxi train'], r: "A bus! Okay, I will look for the bus stop." },
          { k: ['walk walking foot feet'], r: "I can walk! Good, my legs need some exercise." }
        ],
        o: "Okay, thank you! I will find a way.",
        t: ["You can walk there.", "Take the bus.", "You can fly!"],
        x: [["you can walk", 2], ["walk", 2], ["on foot", 2], ["take a bus", 1], ["by bus", 1], ["fly", 0], ["you can fly there", 0], ["i don't know", -1], ["left", -1]]
      },
      {
        c: "I can see a park and a big hotel. Is the beach next to the park or behind the hotel?",
        he: "הים ליד הפארק או מאחורי המלון? It's next to the park. או It's behind the hotel.",
        a: [
          { k: ['park'], r: "Next to the park! Okay, I see the park." },
          { k: ['hotel'], r: "Behind the hotel! Okay, I see the big hotel." }
        ],
        o: "Okay, I will look for it. Thank you!",
        t: ["It's next to the park.", "It's behind the hotel."],
        x: [["next to the park", 0], ["behind the hotel", 1], ["near park", 0], ["the hotel", 1], ["i don't know", -1]]
      },
      {
        c: "I can see the sea! Thank you so much. What should I do first at the beach?",
        he: "מה צ׳אצ׳ו צריך לעשות קודם בים? Swim in the sea. או Eat an ice cream.",
        a: [],
        o: "Great idea! I will do that first.",
        t: ["Swim in the sea.", "Eat an ice cream.", "Build a sandcastle."],
        x: [["swim in the water", -1], ["eat ice cream", -1]]
      }
    ],
    end: "You are a great guide! Here is a feather for you. Goodbye!"
  },
  {
    id: 'sa203', title: 'Hotel Chacho',
    he: "נרשמים במלון של צ׳אצ׳ו: איזו כרית, איזה חדר, מתי ארוחת בוקר, וברווזים באמבטיה",
    turns: [
      {
        c: "Good evening, and welcome to Hotel Chacho! Do you want a soft pillow or a hard pillow?",
        he: "כרית רכה או קשה? A soft pillow, please. או A hard pillow, please.",
        a: [
          { k: ['feather'], r: "Feathers? Ha! Not my feathers, I hope." },
          { k: ['soft'], r: "A soft pillow! It is like a little cloud." },
          { k: ['hard'], r: "A hard pillow! Good for a long, deep sleep." }
        ],
        o: "Okay! I have the perfect pillow for you.",
        t: ["A soft pillow, please.", "A hard pillow, please."],
        x: [["soft please", 1], ["a soft one", 1], ["hard", 2], ["the hard pillow", 2], ["a feather pillow", 0], ["two pillows", -1], ["i don't know", -1]]
      },
      {
        c: "Would you like a room with a view of the sea, or a quieter room by the garden?",
        he: "חדר עם נוף לים או חדר שקט יותר ליד הגינה? A room with a sea view, please.",
        a: [
          { k: ['sea view'], r: "A sea view! You will see the sunset." },
          { k: ['garden quiet'], r: "The garden room. You will sleep like a baby." }
        ],
        o: "Okay, I will give you my favourite room.",
        t: ["A room with a sea view, please.", "The quieter room, please."],
        x: [["the sea please", 0], ["sea view", 0], ["the garden", 1], ["a quieter room", 1], ["a big room", -1]]
      },
      {
        c: "Breakfast is from seven to ten. What time are you going to come down?",
        he: "ארוחת בוקר בין שבע לעשר. מתי תרדו? At eight o'clock. או I'm going to come at nine.",
        a: [
          { k: ['seven eight'], r: "Early! You will get the freshest pancakes." },
          { k: ['nine ten'], r: "Lovely. There is no hurry in the morning." }
        ],
        o: "No problem. I will keep some breakfast for you.",
        t: ["At eight o'clock.", "I'm going to come at nine."],
        x: [["at 8", 0], ["seven o'clock", 0], ["at nine", 1], ["10", 1], ["at 12", -1], ["i sleep late", -1]]
      },
      {
        c: "Here is your key. Oh no! Ducks are swimming in your bath! What should we do?",
        he: "ברווזים שוחים באמבטיה! מה עושים? Take them to the pool. או Let them stay!",
        a: [],
        o: "Ha ha! Don't worry. I will take the ducks to the pool.",
        t: ["Take them to the pool.", "Give me a different room, please.", "Let them stay!"],
        x: [["move the ducks", -1], ["i don't know", -1], ["call the manager", -1]]
      }
    ],
    end: "Enjoy your stay at Hotel Chacho! Sleep well, and no more ducks, I promise."
  },
  {
    id: 'sa204', title: 'Plans for the weekend',
    he: "מתכננים עם צ׳אצ׳ו יום כיף בסוף השבוע: לאן, מתי, מה לוקחים, מה אם יורד גשם ומה אוכלים",
    turns: [
      {
        c: "Let's do something fun this weekend! Would you rather go to the cinema or the park?",
        he: "קולנוע או פארק? Let's go to the cinema. או The park, please.",
        a: [
          { k: ['cinema movie film'], r: "The cinema! I love the big screen." },
          { k: ['park'], r: "The park! We can have a picnic." },
          { k: ['beach pool sea zoo museum mall'], r: "Ooh, good idea! That sounds fun too." }
        ],
        o: "Sounds fun! Okay, that is our plan.",
        t: ["Let's go to the cinema.", "The park, please.", "What about the beach?"],
        x: [["the cinema", 0], ["i want park", 1], ["the beach", 2], ["a movie", 0], ["stay in bed", -1], ["the pool", 2]]
      },
      {
        c: "Great! What time are we going to meet?",
        he: "באיזו שעה ניפגש? At ten o'clock. או In the afternoon.",
        a: [],
        o: "Perfect! I will be there. Parrots are never late.",
        t: ["At ten o'clock.", "In the afternoon.", "At four."],
        x: [["at 10", -1], ["in the morning", -1]]
      },
      {
        c: "And what are we going to take with us?",
        he: "מה ניקח איתנו? We're going to take water and snacks. או A ball and a hat.",
        a: [],
        o: "Good idea! And I will bring the crackers.",
        t: ["We're going to take water and snacks.", "A ball and a hat.", "Sandwiches and juice."],
        x: [["water and food", -1], ["my ball", -1]]
      },
      {
        c: "Oh no! I just saw the weather. It is going to rain all day! What will we do?",
        he: "יירד גשם כל היום! מה נעשה? We can watch a film. או Let's take umbrellas!",
        a: [
          { k: ['umbrella raincoat boots coat'], r: "Umbrellas! Then the rain cannot stop us." },
          { k: ['cinema movie film inside home museum mall game play'], r: "Yes! Rain is no problem inside. Great plan." }
        ],
        o: "Okay! Rainy days can be fun too.",
        t: ["We can watch a film.", "Let's take umbrellas!", "We can play games inside."],
        x: [["watch a movie", 1], ["we go to the mall", 1], ["take umbrellas", 0], ["we will take a coat", 0], ["i don't know", -1], ["dance in the rain", -1]]
      },
      {
        c: "Last question. After our fun day, do we eat pizza or falafel? Which do you like more?",
        he: "אחרי היום הכיפי, פיצה או פלאפל? Pizza, please! או Falafel is better.",
        a: [
          { k: ['both'], r: "Both! A very hungry plan. I love it." },
          { k: ['pizza'], r: "Pizza! With lots of cheese, please." },
          { k: ['falafel felafel hummus pita'], r: "Falafel! In a warm pita. Yum!" }
        ],
        o: "Yum! Food after a fun day is the best.",
        t: ["Pizza, please!", "Falafel is better.", "Both!"],
        x: [["pizza", 1], ["i like falafel more", 2], ["falafel in pita", 2], ["both", 0], ["sushi", -1], ["i don't know", -1]]
      }
    ],
    end: "Rain or sun, it is going to be a great weekend. See you there!"
  },
  {
    id: 'sa205', title: 'The lost dog',
    he: "הכלב של השכן של צ׳אצ׳ו ברח: עוזרים למצוא אותו, עם זמן עבר",
    turns: [
      {
        c: "Help! My neighbour's dog ran away this morning. Did you see a little brown dog?",
        he: "ראיתם כלב קטן וחום? Yes, I saw a dog! או No, I didn't.",
        a: [
          { k: ['no not'], r: "No? Okay. Thank you for helping me look." },
          { k: ['yes saw see'], r: "You saw him? Oh, great news!" }
        ],
        o: "Okay. Thank you for helping me look.",
        t: ["Yes, I saw a dog!", "No, I didn't."],
        x: [["no", 0], ["no i didn't", 0], ["yes i saw", 1], ["i see him", 1], ["what dog", -1], ["yes", 1]]
      },
      {
        c: "Let's look for him together. Where do dogs usually like to go?",
        he: "לאן כלבים אוהבים ללכת? To the park. או Dogs like the beach.",
        a: [],
        o: "Okay! Let's look everywhere.",
        t: ["To the park.", "Dogs like the beach.", "Near the ice cream shop."],
        x: [["the park", -1], ["i dont know", -1]]
      },
      {
        c: "Look! A man saw the dog at the bus stop. Was the dog sleeping or waiting for the bus?",
        he: "הכלב ישן או חיכה לאוטובוס? He was sleeping. או He was waiting for the bus.",
        a: [
          { k: ['sleep slept'], r: "He was sleeping at the bus stop? What a lazy dog!" },
          { k: ['wait bus'], r: "He was waiting for the bus! What a clever dog." }
        ],
        o: "Ha ha! What a funny dog.",
        t: ["He was sleeping.", "He was waiting for the bus."],
        x: [["sleeping", 0], ["he was sleeping", 0], ["waiting for the bus", 1], ["he wait the bus", 1], ["eating", -1]]
      },
      {
        c: "Then the bus came, and the dog got on it! Where do you think the bus went?",
        he: "הכלב עלה לאוטובוס! לאן הוא נסע, לדעתכם? To the beach. או I think it went to the city.",
        a: [],
        o: "Let's check! Look, the bus stopped at the park.",
        t: ["To the beach.", "To the park.", "I think it went to the city."],
        x: [["to the zoo", -1], ["the park", -1]]
      },
      {
        c: "There he is! He is playing with a ball. What should we give him?",
        he: "מצאנו אותו! מה ניתן לו? Some water and a treat. או A big hug!",
        a: [
          { k: ['water bone food treat biscuit cookie meat snack'], r: "Good idea! He is very hungry after his trip." },
          { k: ['hug love kiss pet'], r: "Oh, a big hug! Look, he is wagging his tail." }
        ],
        o: "Good idea! Now let's take him back.",
        t: ["Some water and a treat.", "A big hug!"],
        x: [["water", 0], ["give him food", 0], ["a hug", 1], ["a ball", -1], ["nothing", -1]]
      }
    ],
    end: "Thank you! The dog is back, and my neighbour is so happy. You are a hero!"
  },
  {
    id: 'sa206', title: 'A surprise party for Penny',
    he: "מתכננים מסיבת הפתעה לפינגווינית פני: אוכל, מוזיקה, מסתור ומתנה",
    turns: [
      {
        c: "Quietly now! Let's plan a surprise party for Penny the penguin. What food should we make?",
        he: "מה נכין למסיבה? Let's make a cake. או Fish for Penny!",
        a: [
          { k: ['fish'], r: "Fish! Penny is going to love that." },
          { k: ['ice_cream ice cold'], r: "Ice cream! Perfect for a penguin." },
          { k: ['cake pizza sandwich cookie popcorn chocolate pancake'], r: "Yum! Good party food." }
        ],
        o: "Okay! And I will make some fish too, just in case.",
        t: ["Let's make a cake.", "Ice cream, because penguins like cold food.", "Fish for Penny!"],
        x: [["fish", 0], ["ice cream", 1], ["a big cake", 2], ["pizza and cake", 2], ["salad", -1]]
      },
      {
        c: "What music are we going to play? Something fast for dancing, or something slow?",
        he: "איזו מוזיקה? Something fast for dancing! או Something slow.",
        a: [
          { k: ['slow quiet calm'], r: "Slow music. Nice and relaxing." },
          { k: ['fast dance pop rock happy loud'], r: "Fast music! Penguins love to dance." }
        ],
        o: "Good choice! I will make a playlist.",
        t: ["Something fast for dancing!", "Something slow."],
        x: [["fast music", 1], ["something slow", 0], ["dance music", 1], ["my favourite song", -1], ["pop", 1]]
      },
      {
        c: "Penny will be here at six. Where are we going to hide?",
        he: "איפה נתחבא? Behind the sofa. או Under the table.",
        a: [
          { k: ['behind under in inside next near'], r: "Great place! Penny will never find us." }
        ],
        o: "Hmm, okay. I will hide in the cupboard!",
        t: ["Behind the sofa.", "Under the table."],
        x: [["behind the sofa", 0], ["under the table", 0], ["in the kitchen", 0], ["i don't know", -1], ["the door", -1]]
      },
      {
        c: "She's coming! Three, two, one... What do we all shout?",
        he: "היא מגיעה! מה צועקים? Surprise! או Happy birthday, Penny!",
        a: [
          { k: ['surprise happy birthday'], r: "Surprise! Look at her face. She is so happy!" }
        ],
        o: "Ha ha! Penny jumped very high. She is so happy!",
        t: ["Surprise!", "Happy birthday, Penny!"],
        x: [["surprise", 0], ["happy birthday", 0], ["hello", -1], ["boo", -1]]
      },
      {
        c: "Penny says thank you! What present did you bring for her?",
        he: "איזו מתנה הבאתם לפינגווינית? I brought her a warm scarf. או A big box of fish!",
        a: [
          { k: ['fish'], r: "Fish! Penny's favourite. She ate it in one second!" },
          { k: ['bring'], n: 'brought', r: "You brought her a present? That is so kind!" },
          { k: ['brought gave got bought'], r: "How kind! Penny loves it." }
        ],
        o: "What a lovely present! Penny loves it.",
        t: ["A big box of fish!", "I brought her a warm scarf."],
        x: [["fish", 0], ["i bring her a hat", 1], ["i brought a book", 2], ["a scarf", -1], ["i gave her a toy", 2], ["i bringed a ball", 1]]
      }
    ],
    end: "What a party! Penny is the happiest penguin in the world. Thank you!"
  },
  {
    id: 'sa207', title: 'Radio Chacho',
    he: "צ׳אצ׳ו מראיין אתכם ברדיו על סוף השבוע שעבר ועל תוכנית רדיו משלכם",
    turns: [
      {
        c: "Hello, and welcome to Radio Chacho! Today's question: what did you do last weekend?",
        he: "מה עשיתם בסוף השבוע? I went to the beach. או I played football with friends.",
        a: [
          { k: ['go goes going'], n: 'went', r: "Oh, you went out? How exciting!" },
          { k: ['play'], n: 'played', r: "You played? Fun! I played chess with a pigeon." },
          { k: ['went visited'], r: "You went out? How exciting!" },
          { k: ['played watched saw ate swam met read slept had made'], r: "Sounds like a great weekend!" }
        ],
        o: "Interesting! Thank you for telling our listeners.",
        t: ["I went to the beach.", "I played football with friends.", "I watched a film."],
        x: [["i go to the beach", 0], ["i play football", 1], ["i went to the park", 2], ["i played games", 3], ["nothing", -1], ["i watched tv", 3], ["i was at home", -1]]
      },
      {
        c: "Ooh! Tell our listeners: what was the best part?",
        he: "מה היה הכי כיף? The best part was the ice cream. או Swimming in the sea.",
        a: [],
        o: "Wow! Our listeners loved that.",
        t: ["The best part was the ice cream.", "Swimming in the sea.", "When we won the game."],
        x: [["the food", -1], ["playing with my dog", -1]]
      },
      {
        c: "Now a fun question. Which is better, a weekend at the beach or a weekend in the snow?",
        he: "מה עדיף, סוף שבוע בים או בשלג? The beach is better. או A weekend in the snow!",
        a: [
          { k: ['beach sea sand'], r: "The beach! Sand, sun and ice cream." },
          { k: ['snow ski snowman mountain'], r: "The snow! I want to build a snow parrot." }
        ],
        o: "Interesting! Both sound fun to me.",
        t: ["The beach is better.", "A weekend in the snow!"],
        x: [["the beach is better", 0], ["snow", 1], ["in the snow", 1], ["both", -1], ["beach because it's hot", 0]]
      },
      {
        c: "Last question! Imagine you have your own radio show. What is it about?",
        he: "דמיינו שיש לכם תוכנית רדיו. על מה היא? It is about football. או A show about animals.",
        a: [],
        o: "Fabulous! I am going to listen to it every day.",
        t: ["It is about football.", "A show about animals.", "Music, music and more music!"],
        x: [["about games", -1], ["funny stories", -1], ["i don't know", -1]]
      }
    ],
    end: "Thank you for talking to Radio Chacho! That's all for today. Bye bye, listeners!"
  },
  {
    id: 'sa208', title: "Chacho's bikes",
    he: "שוכרים אופניים בחנות של צ׳אצ׳ו ליד הים: לכמה זמן, איזה אופניים, קסדה וסל",
    turns: [
      {
        c: "Hi! Welcome to Chacho's Bikes. Do you want a bike for one hour or for the whole day?",
        he: "לשעה או ליום שלם? For one hour, please. או For the whole day!",
        a: [
          { k: ['day'], r: "The whole day! You are going to have so much fun." },
          { k: ['hour one two three'], r: "Good choice. That is enough time for a nice ride." }
        ],
        o: "No problem. Bring it back when you finish.",
        t: ["For one hour, please.", "For the whole day!"],
        x: [["the whole day", 0], ["one hour", 1], ["2 hours", 1], ["all day", 0], ["a week", -1]]
      },
      {
        c: "I have a red bike and a blue bike. The blue one is faster but older. Which do you want?",
        he: "האדומים או הכחולים? הכחולים מהירים יותר אבל ישנים יותר. The red one, please.",
        a: [
          { k: ['red new'], r: "The red one! It is newer and very shiny." },
          { k: ['blue fast old'], r: "The blue one! Fast but a bit old. Hold on tight!" }
        ],
        o: "Okay! Take the red one. It is newer.",
        t: ["The red one, please.", "I want the faster one."],
        x: [["the red one", 0], ["blue please", 1], ["the faster one", 1], ["the new one", 0], ["green", -1]]
      },
      {
        c: "Wait! Have you got a helmet?",
        he: "יש לכם קסדה? Yes, I have. או No, I haven't.",
        a: [
          { k: ['no not'], r: "No problem. Here is one. Safety first!" },
          { k: ['yes have'], r: "Great! Put it on. Safety first!" }
        ],
        o: "Here is a helmet for you. Safety first!",
        t: ["Yes, I have.", "No, I haven't."],
        x: [["no", 0], ["i don't have", 0], ["yes", 1], ["i have one", 1], ["what is helmet", -1]]
      },
      {
        c: "Look, there is a little basket on the front. What are you going to put in it?",
        he: "מה תשימו בסל של האופניים? My water bottle. או A sandwich and an apple.",
        a: [],
        o: "Good idea! Now you are ready to go.",
        t: ["My water bottle.", "A sandwich and an apple.", "My phone and my keys."],
        x: [["my bag", -1], ["a little cat", -1]]
      },
      {
        c: "Oh! Your bike has a little bell. Can you ring it for me?",
        he: "לאופניים יש פעמון. צלצלו! Ring ring! או Ding ding!",
        a: [
          { k: ['ring ding bell yes'], r: "Ding ding! Beautiful. Now everyone knows you are coming." }
        ],
        o: "Ha ha! Okay. Have a great ride!",
        t: ["Ring ring!", "Ding ding!"],
        x: [["ring ring", 0], ["ding ding", 0], ["no", -1], ["beep beep", -1]]
      }
    ],
    end: "Enjoy the ride! Bring the bike back before dark. See you later!"
  },
  {
    id: 'sa209', title: 'At the bookshop',
    he: "בוחרים ספר בחנות ספרים שצ׳אצ׳ו עוזר בה: סוג, אורך, איפה קוראים וחתול ישן",
    turns: [
      {
        c: "Today I am helping at the bookshop! What kind of books do you like: funny, adventure or mystery?",
        he: "איזה ספרים אתם אוהבים? I like funny books. או Mystery books, please.",
        a: [
          { k: ['funny comic joke'], r: "Funny books! I love a good laugh." },
          { k: ['adventure'], r: "Adventures! Pirates, jungles and treasure." },
          { k: ['mystery detective'], r: "A mystery! I love a good puzzle." }
        ],
        o: "Let me look on the shelves. I have just the thing!",
        t: ["I like funny books.", "Adventure books!", "Mystery books, please."],
        x: [["funny books", 0], ["adventure", 1], ["i like mystery", 2], ["comics", 0], ["football books", -1], ["detective stories", 2]]
      },
      {
        c: "I have two books here. This one is longer, but that one has more pictures. Which one do you want?",
        he: "אחד ארוך יותר, ובשני יש יותר תמונות. The one with more pictures. או The longer one, please.",
        a: [
          { k: ['picture short'], r: "The one with more pictures. Great choice!" },
          { k: ['long big'], r: "The longer one! More pages, more story." }
        ],
        o: "Take both! You can read one this week and one next week.",
        t: ["The one with more pictures.", "The longer one, please."],
        x: [["the one with pictures", 0], ["the longer one", 1], ["the long book", 1], ["the shorter", 0], ["both", -1]]
      },
      {
        c: "Where do you like reading best: in bed, on the sofa or outside?",
        he: "איפה אתם אוהבים לקרוא? In bed. או On the sofa. או Outside in the park.",
        a: [
          { k: ['bed'], r: "In bed! Cosy, with a soft pillow." },
          { k: ['sofa couch armchair chair'], r: "On the sofa! My favourite place too." },
          { k: ['outside park garden beach tree balcony'], r: "Outside! Fresh air and a good book." },
          { k: ['not no never'], n: 'know', r: "That's okay! Comics and audiobooks are fun too." }
        ],
        o: "Lovely! Every place is good for a story.",
        t: ["In bed.", "On the sofa.", "Outside in the park."],
        x: [["in my bed", 0], ["on the sofa", 1], ["on the couch", 1], ["outside", 2], ["in the garden", 2], ["i don't like reading", 3], ["on the bus", -1], ["i don't know", -1]]
      },
      {
        c: "Oh no! The shop cat is sleeping on your book. What should we do?",
        he: "החתול של החנות ישן על הספר! מה עושים? Let's wait. או Give the cat a toy.",
        a: [],
        o: "Ha ha! Look, the cat moved. Here is your book!",
        t: ["Let's wait.", "Give the cat a toy.", "Pick up the cat gently."],
        x: [["wake him up", -1], ["wait a little", -1]]
      }
    ],
    end: "Here is your book. That is four pages of fun... I mean, four coins! Bye!"
  },
  {
    id: 'sa210', title: 'Camping in the north',
    he: "אורזים עם צ׳אצ׳ו לקמפינג בצפון: בגדים, ציוד, ארוחה ליד המדורה ושמיים מלאי כוכבים",
    turns: [
      {
        c: "We are going camping in the north! It is colder there at night. What clothes should we take?",
        he: "בצפון קר יותר בלילה. אילו בגדים ניקח? A warm jacket and a hat. או Shorts and T-shirts.",
        a: [
          { k: ['jacket coat jumper sweater sweatshirt hoodie warm scarf hat gloves fleece'], r: "Good thinking! It gets very cold at night." },
          { k: ['short t_shirt tshirt swimsuit sandals'], r: "Shorts for the day, yes! And a warm jacket for the night." }
        ],
        o: "Okay! I will pack something warm for the nights too.",
        t: ["A warm jacket and a hat.", "Shorts and T-shirts."],
        x: [["a warm jacket", 0], ["coat and gloves", 0], ["shorts", 1], ["t-shirt", 1], ["pyjamas", -1], ["a hoodie", 0]]
      },
      {
        c: "What else do we need? A tent, a lamp, or a big TV?",
        he: "מה עוד צריך? אוהל, פנס או טלוויזיה ענקית? A tent and a lamp. או The big TV!",
        a: [
          { k: ['tv television'], r: "A TV? Ha ha! The stars are our TV tonight." },
          { k: ['torch flashlight lamp light tent sleeping_bag'], r: "Yes! We cannot go camping without that." }
        ],
        o: "Okay! I will pack the lamp and the tent.",
        t: ["A tent and a lamp.", "The big TV!"],
        x: [["a tent", 1], ["a lamp", 1], ["the tv", 0], ["flashlight and tent", 1], ["food", -1]]
      },
      {
        c: "Which is better for dinner by the fire, hot soup or cold sandwiches? Why?",
        he: "מה עדיף לארוחה ליד המדורה, מרק חם או כריכים? Hot soup, because it's cold.",
        a: [
          { k: ['soup hot'], r: "Hot soup! It is warmer and cosier." },
          { k: ['sandwich easy'], r: "Sandwiches! Easier to make. Smart." }
        ],
        o: "Good thinking! We can have both.",
        t: ["Hot soup, because it's cold.", "Sandwiches. They're easier."],
        x: [["hot soup because it's cold", 0], ["sandwiches", 1], ["soup", 0], ["marshmallows", -1], ["cold sandwiches are easier", 1]]
      },
      {
        c: "It is night now. Look up! What can you see in the sky?",
        he: "תסתכלו למעלה! מה רואים בשמיים? I can see lots of stars. או The moon!",
        a: [
          { k: ['star moon planet'], r: "Beautiful! The sky is much better than TV." }
        ],
        o: "Wow! The sky is amazing here.",
        t: ["I can see lots of stars.", "The moon!", "A shooting star!"],
        x: [["stars", 0], ["i see the moon", 0], ["nothing", -1], ["a plane", -1]]
      },
      {
        c: "Ooh, what's that noise? Hoo hoo! What animal do you think it is?",
        he: "מה הרעש הזה? Hoo hoo! איזו חיה זאת? I think it's an owl.",
        a: [
          { k: ['owl'], r: "Yes, an owl! She says good night." }
        ],
        o: "Ha ha, it's an owl! She says good night.",
        t: ["It's an owl.", "I think it's an owl."],
        x: [["an owl", 0], ["it's a owl", 0], ["a wolf", -1], ["i don't know", -1]]
      }
    ],
    end: "Good night, camper! Tomorrow we are going to walk to the waterfall. Sleep well!"
  },
  {
    id: 'sa211', title: 'Cooking with Chacho',
    he: "מבשלים פנקייקים עם השף צ׳אצ׳ו בתוכנית טלוויזיה",
    turns: [
      {
        c: "Welcome to Cooking with Chacho! Today we are making pancakes. Did you wash your hands?",
        he: "שטפתם ידיים? Yes, I did. או Not yet!",
        a: [
          { k: ['no not'], r: "Quick, wash them now! I will wait. La la la." },
          { k: ['yes wash did'], r: "You washed them? Great! Clean hands, happy chef." }
        ],
        o: "Okay! Let's all wash our hands, just in case.",
        t: ["Yes, I did.", "Not yet!"],
        x: [["yes", 1], ["yes i washed", 1], ["i wash them", 1], ["no", 0], ["not yet", 0], ["pancakes", -1]]
      },
      {
        c: "First we need flour, eggs and milk. How many eggs should we use?",
        he: "כמה ביצים? Two eggs. או Three eggs, I think.",
        a: [
          { k: ['one two three'], n: 'hundred', r: "Perfect. Crack them carefully into the bowl." },
          { k: ['four five six seven eight nine ten eleven twelve twenty hundred 100 lot many'], r: "That many? Ha ha! That is going to be a huge pancake!" }
        ],
        o: "Let's use two. Crack them carefully!",
        t: ["Two eggs.", "Three eggs, I think.", "Ten eggs!"],
        x: [["2", 0], ["two eggs", 0], ["ten", 1], ["a hundred", 1], ["i don't know", -1], ["three please", 0]]
      },
      {
        c: "Now we mix it all. Should we mix it slowly or quickly?",
        he: "לערבב לאט או מהר? Slowly. או Quickly!",
        a: [
          { k: ['slow'], r: "Slowly. Good, then nothing flies out of the bowl." },
          { k: ['quick fast'], r: "Quickly! Oops, there is flour on my feathers!" }
        ],
        o: "Good. Now it is ready.",
        t: ["Slowly.", "Quickly!"],
        x: [["slowly", 0], ["slow", 0], ["quickly", 1], ["fast", 1], ["with a spoon", -1]]
      },
      {
        c: "Now we cook it in the pan. Oops! It is black! What happened to it?",
        he: "הפנקייק השחיר! מה קרה? It burned! או The pan was too hot.",
        a: [
          { k: ['burn'], n: 'burned burnt', r: "Yes, it burned! Next time, not so hot." },
          { k: ['burned burnt hot long fire'], r: "Yes! Next time, not so hot." },
          { k: ['like love good okay fine'], r: "Ha ha! A crunchy pancake. Very modern." }
        ],
        o: "Oops! Let's try again, a little more carefully.",
        t: ["It burned!", "The pan was too hot.", "It's okay, I like it black!"],
        x: [["it burn", 0], ["it is burn", 0], ["it burned", 1], ["too hot", 1], ["i like it", 2], ["magic", -1]]
      },
      {
        c: "The second pancake is perfect! What do you want on top?",
        he: "מה לשים למעלה? Honey and banana, please. או Chocolate sauce!",
        a: [],
        o: "Yum! Now our viewers want pancakes too.",
        t: ["Honey and banana, please.", "Chocolate sauce!", "Maple syrup and strawberries."],
        x: [["chocolate", -1], ["honey please", -1]]
      }
    ],
    end: "That's all for today on Cooking with Chacho! Wash your hands, and see you next time!"
  },
  {
    id: 'sa212', title: 'After the big match',
    he: "צ׳אצ׳ו הכתב מראיין אתכם, קפטן הקבוצה, אחרי משחק כדורגל גדול",
    turns: [
      {
        c: "I'm here with the team captain after the big match! Did your team win or lose today?",
        he: "ניצחתם או הפסדתם? We won! או We lost, but it was fun. או It was a draw.",
        a: [
          { k: ['draw tie equal'], r: "A draw! Nobody lost. That is not bad." },
          { k: ['lose lost not'], n: 'know', r: "You lost? Bad luck! But you played really well." },
          { k: ['win won'], r: "You won! Congratulations, captain!" }
        ],
        o: "What a match! Everyone played really well.",
        t: ["We won!", "We lost, but it was fun.", "It was a draw."],
        x: [["we won", 2], ["we win", 2], ["we lost", 1], ["we lose", 1], ["it was a draw", 0], ["we didn't win", 1], ["football", -1]]
      },
      {
        c: "What was the final score, captain?",
        he: "מה התוצאה הסופית? It was two, one. או Three, two.",
        a: [],
        o: "What a score! The fans will remember it.",
        t: ["Three, two.", "It was two, one.", "Five, zero!"],
        x: [["3 2", -1], ["one nil", -1]]
      },
      {
        c: "Tell our viewers: who was the best player today, and what did they do?",
        he: "מי היה השחקן הכי טוב ומה הוא עשה? The goalkeeper. She stopped every ball.",
        a: [],
        o: "Thank you! Great teamwork wins matches.",
        t: ["I was! I scored two goals.", "The goalkeeper. She stopped every ball.", "Everyone. We played as a team."],
        x: [["the goalkeeper", -1], ["me i score a goal", -1]]
      },
      {
        c: "Oh! A dog ran onto the field during the match. What did the dog do?",
        he: "כלב רץ למגרש! מה הוא עשה? It took the ball! או It ran after the players.",
        a: [
          { k: ['take'], n: 'took', r: "It took the ball? Ha ha! A dog with talent." },
          { k: ['run'], n: 'ran', r: "It ran around everywhere? What a fast dog!" },
          { k: ['ball goal score'], r: "A football dog! Maybe we need it on the team." },
          { k: ['ran took jumped sat slept chased barked bark sleep jump'], r: "Ha ha! That dog is the real star today." }
        ],
        o: "Ha ha! That dog is the real star today.",
        t: ["It took the ball!", "It ran after the players.", "It barked at the referee."],
        x: [["it take the ball", 0], ["he run fast", 1], ["it took the ball", 2], ["it ran away", 3], ["it slept", 3], ["i don't know", -1]]
      },
      {
        c: "Last question! What are you going to do now, after this busy day?",
        he: "מה תעשו עכשיו, אחרי היום העמוס? I'm going to eat pizza. או I'm going to sleep!",
        a: [],
        o: "Sounds perfect! You earned it, captain.",
        t: ["I'm going to eat pizza.", "I'm going to sleep!", "We're going to have a party."],
        x: [["eat pizza", -1], ["sleep", -1]]
      }
    ],
    end: "Thank you, captain! This is Chacho, from Sports News. Back to the studio!"
  },
  {
    id: 'sa213', title: 'Change my jumper, please',
    he: "מחזירים סוודר בחנות הבגדים של צ׳אצ׳ו ובוחרים משהו אחר",
    turns: [
      {
        c: "Hello again! You bought this jumper here yesterday. Is there a problem with it?",
        he: "מה הבעיה בסוודר? It's too small for me. או I don't like the colour.",
        a: [
          { k: ['small big long short tight'], r: "The size is wrong? No problem. We can change it." },
          { k: ['colour color red blue green pink yellow black white ugly not_like'], r: "You don't like the colour? No problem. We have lots of colours." },
          { k: ['hole broken dirty'], r: "Oh no, I'm so sorry! I will give you a new one." }
        ],
        o: "No problem. We can change it for something else.",
        t: ["It's too small for me.", "I don't like the colour.", "It has a hole in it."],
        x: [["it is too small", 0], ["too big", 0], ["i don't like the colour", 1], ["it have a hole", 2], ["no", -1], ["the color is ugly", 1], ["i don't like it", 1], ["i like it", -1]]
      },
      {
        c: "Would you like the same jumper in a different size, a different colour, or something else?",
        he: "אותו סוודר במידה אחרת, בצבע אחר, או משהו אחר? A bigger one, please.",
        a: [
          { k: ['size bigger smaller big small'], r: "Okay! Here it is in a different size." },
          { k: ['colour color'], r: "Okay! We have it in blue, red and green." },
          { k: ['something else other new'], r: "Something different! Let's look around the shop." }
        ],
        o: "Okay! Let's look around the shop together.",
        t: ["A bigger one, please.", "A different colour, please.", "Something else."],
        x: [["a bigger one", 0], ["different size please", 0], ["different colour", 1], ["something else", 2], ["money", -1], ["a smaller one", 0]]
      },
      {
        c: "Here are two hoodies. The green one is warmer, and the purple one is softer. Which one do you prefer?",
        he: "הירוק חם יותר, הסגול רך יותר. The green one, please. או I prefer the purple one.",
        a: [
          { k: ['green warm'], r: "The green one! Warm and cosy for winter." },
          { k: ['purple soft'], r: "The purple one! So soft, like my feathers." }
        ],
        o: "Good choice! You have great taste.",
        t: ["The green one, please.", "I prefer the purple one."],
        x: [["the green one", 0], ["purple", 1], ["the softer one", 1], ["the warmer", 0], ["both", -1]]
      },
      {
        c: "Try it on! Look in the mirror. A feather is stuck on it! Do you want to keep the feather?",
        he: "נוצה של צ׳אצ׳ו נתקעה על הקפוצ׳ון! רוצים לשמור אותה? Yes, I want to keep it! או No, thank you.",
        a: [
          { k: ['no not off'], r: "No feather? Okay, I will take it off. It is mine anyway!" },
          { k: ['yes keep'], r: "Ha ha! A parrot feather for luck. Very fashionable." }
        ],
        o: "Okay! You look fabulous either way.",
        t: ["Yes, I want to keep it!", "No, thank you."],
        x: [["yes", 1], ["yes keep it", 1], ["no thanks", 0], ["take it off", 0], ["funny", -1]]
      }
    ],
    end: "Enjoy your new hoodie! It looks great on you. Come again soon!"
  },
  {
    id: 'sa214', title: 'The Great Pet Show',
    he: "תחרות חיות מחמד: מספרים לשופט צ׳אצ׳ו על חיה דמיונית שהבאתם",
    turns: [
      {
        c: "Welcome to the Great Pet Show! I'm the judge, and any animal can come. What pet did you bring?",
        he: "איזו חיה הבאתם לתחרות? אפשר גם חיה דמיונית! I brought my dog. או A dragon!",
        a: [
          { k: ['dragon unicorn dinosaur'], r: "Wow, a magic animal! Please keep it away from my feathers." },
          { k: ['bring'], n: 'brought', r: "You brought a pet? Wonderful! Welcome to the show." },
          { k: ['dog cat rabbit hamster fish bird horse turtle snake lion elephant parrot mouse puppy kitten brought'], r: "Ooh, lovely! Welcome to the show." }
        ],
        o: "Wonderful! Welcome to the show.",
        t: ["I brought my dog.", "A little rabbit.", "A dragon!"],
        x: [["a dragon", 0], ["i bring my dog", 1], ["i brought a cat", 2], ["a rabbit", 2], ["my shoe", -1], ["a dog", 2]]
      },
      {
        c: "What can your pet do? Can it do a trick?",
        he: "מה החיה שלכם יודעת לעשות? It can jump very high. או It can say hello!",
        a: [],
        o: "Ha ha! The audience loves it.",
        t: ["It can jump very high.", "It can say hello!", "It sleeps all day."],
        x: [["it can dance", -1], ["he jump", -1]]
      },
      {
        c: "Is your pet bigger or smaller than me?",
        he: "החיה שלכם גדולה או קטנה מצ׳אצ׳ו? It's bigger than you! או It's smaller than you.",
        a: [
          { k: ['small little tiny'], r: "Smaller than me? It's tiny! So cute." },
          { k: ['big bigger large huge tall'], r: "Bigger than me? Wow, I need to stand back!" }
        ],
        o: "Ha ha! It looks just right to me.",
        t: ["It's bigger than you!", "It's smaller than you."],
        x: [["bigger", 1], ["it is more big", 1], ["smaller than you", 0], ["the same", -1], ["very small", 0]]
      },
      {
        c: "Time for the prizes! Best Trick, Best Smile, or Best Hair. Which prize should your pet win?",
        he: "איזה פרס מגיע לחיה שלכם? Best Trick! או Best Smile.",
        a: [
          { k: ['trick'], r: "Best Trick! Here is a gold medal." },
          { k: ['smile'], r: "Best Smile! Look at that happy face." },
          { k: ['hair fur feather'], r: "Best Hair! Almost as good as my feathers." }
        ],
        o: "Your pet wins a special prize: Best Friend!",
        t: ["Best Trick!", "Best Smile.", "Best Hair, please."],
        x: [["best trick", 0], ["the smile", 1], ["hair", 2], ["all of them", -1], ["best trick please", 0], ["the fur", 2]]
      }
    ],
    end: "Congratulations! Your pet is a star. See you at next year's Pet Show!"
  },
  {
    id: 'sa215', title: 'The weather show',
    he: "מגישים את התחזית בטלוויזיה של צ׳אצ׳ו: אילת, ההרים בצפון, עצות לצופים ושחף על הראש",
    turns: [
      {
        c: "We're live on Chacho TV, and you are our weather reporter! What is the weather like in Eilat today?",
        he: "מה מזג האוויר באילת היום? It's sunny and hot. או It's cold and windy.",
        a: [
          { k: ['sun sunny hot warm clear'], n: 'not', r: "Sunny! Don't forget your sunglasses, viewers." },
          { k: ['rain rainy cloud cloudy wet'], r: "Rainy! Take your umbrellas, viewers." },
          { k: ['wind windy cold snow'], r: "Cold and windy! Wear a warm coat, viewers." }
        ],
        o: "Thank you! Interesting weather today.",
        t: ["It's sunny and hot.", "It's rainy.", "It's cold and windy."],
        x: [["it is sunny", 0], ["rainy", 1], ["cloudy", 1], ["it's windy", 2], ["i don't know", -1], ["very hot", 0], ["it is not hot", -1]]
      },
      {
        c: "Now the mountains in the north. Is it hotter or colder there, do you think?",
        he: "בהרים בצפון חם יותר או קר יותר? It is colder there. או It is hotter.",
        a: [
          { k: ['cold colder cool cooler'], n: 'not', r: "Colder! Time for warm jumpers, viewers." },
          { k: ['hot hotter warm warmer'], r: "Hotter? Wow! Ice cream weather, everybody." }
        ],
        o: "Thank you! The mountains are lovely in any weather.",
        t: ["It is colder there.", "It is hotter."],
        x: [["colder", 0], ["it is more cold", 0], ["hotter", 1], ["more hot", 1], ["warmer", 1], ["the same", -1], ["i don't know", -1]]
      },
      {
        c: "Our viewers want to know: what can they do in this weather?",
        he: "מה הצופים יכולים לעשות במזג האוויר הזה? Go to the beach! או Stay inside and read.",
        a: [],
        o: "Thank you for the advice, weather reporter!",
        t: ["Go to the beach!", "Stay inside and read.", "Take an umbrella."],
        x: [["go swimming", -1], ["play outside", -1]]
      },
      {
        c: "Oh no! A seagull is sitting on my head, live on TV! What should I do?",
        he: "שחף נחת לצ׳אצ׳ו על הראש בשידור חי! מה לעשות? Stand very still. או Give it a cracker!",
        a: [],
        o: "Ha ha! It flew away. Our viewers loved that!",
        t: ["Stand very still.", "Give it a cracker!", "Say hello to it!"],
        x: [["fly away", -1], ["take a photo", -1]]
      }
    ],
    end: "That's the weather for today! Thank you, weather reporter. Back to you, Chacho... wait, that's me!"
  }
]);
