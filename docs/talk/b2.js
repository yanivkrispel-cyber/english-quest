// Talk with Coco, level b2 (specs/talk.md; format and writing rules: tools/TALK-WRITING.md).
// Mission talks (t<mission id>) first, then the home scenes (s<level><nn>). Check: node test/talk-check.js
window.EQ_TALK = window.EQ_TALK || {};
// Talk to Coco: B2 mission talks (one per mission in docs/missions/b2.js). Rules: tools/TALK-WRITING.md.
window.EQ_TALK.b2 = (window.EQ_TALK.b2 || []).concat([
  {
    id: "tb2g01", title: "Coco has a lot on",
    he: "מדברים עם קוקו על מה שיש לכם ומה שאתם עושים, עם have כפועל עיקרי וכפועל עזר",
    turns: [
      {
        c: "Hello! I'm having a very busy morning in the shop. Have you had a good day so far, or has it been a long one?",
        he: "איך היה היום שלכם עד עכשיו? למשל: It's been a good day so far. או It's been a long one.",
        a: [
          { k: ["not_bad okay ok fine alright so_so"], r: "Okay is a good start! Let's have a fun chat and make it even better." },
          { k: ["not_good not_great long tiring tired bad hard boring busy difficult terrible stress stressful exhausting"], r: "Oh, poor you. Let's have a relaxing chat, then." },
          { k: ["good great amazing nice fun yes awesome excellent wonderful perfect cool"], r: "Fabulous! I'm so glad you've had a good day." }
        ],
        o: "Thanks for telling me. I'm glad you're here with me now.",
        t: ["It's been a good day so far.", "It's been a long one, to be honest.", "It's been okay, not bad."],
        x: [["it was a good day", 2], ["yes i have a good day", 2], ["it has been long and tiring", 1], ["not bad", 0], ["i had math test today", -1], ["so so", 0], ["very boring", 1], ["not good", 1]]
      },
      {
        c: "Quick question for my shop. Do you have a favourite piece of clothing, like a hoodie or a pair of trainers? Why do you love it?",
        he: "יש לכם בגד אהוב? למה? למשל: I have a black hoodie that is really comfortable.",
        a: [],
        o: "Thanks for telling me! The best clothes are the ones that feel like you.",
        t: ["I have a black hoodie that is really comfortable.", "Yes, I've got old trainers that I wear every day.", "Not really, I don't have a favourite one."],
        x: [["i have a blue hoodie it is soft", -1], ["yes my jeans because they are comfy", -1], ["i don't have", -1]]
      },
      {
        c: "Now let's use have for actions. If you could have a party anywhere this weekend, where would you have it, and what would you have to eat?",
        he: "איפה הייתם עושים מסיבה ומה הייתם אוכלים? למשל: I would have it on the beach, with pizza.",
        a: [],
        o: "Ooh, that sounds like a party I would fly to! Save me some crackers.",
        t: ["I would have it on the beach, with pizza and ice cream.", "I'd have a pool party with lots of snacks.", "I'd have a small party at home with my friends."],
        x: [["on the beach with hamburgers", -1], ["i will make party in the park with pizza", -1]]
      },
      {
        c: "I've had this shop for three years, and I've never had a holiday. What's something you've never had or done, but would really like to try?",
        he: "מה עוד לא עשיתם ורוצים לנסות? למשל: I've never had sushi, but I'd love to try it.",
        a: [],
        o: "Ooh, I hope you get the chance soon. It sounds amazing!",
        t: ["I've never had sushi, but I'd love to try it.", "I've never been skiing, and I really want to go.", "I've never had a pet, but I'd like a dog."],
        x: [["i never fly on a plane", -1], ["i have never been to japan", -1]]
      },
      {
        c: "Last one. What's something you're having a great time doing these days, like a hobby, a game or a series? What do you like about it?",
        he: "במה אתם נהנים בזמן האחרון? למשל: I'm having a great time learning the guitar.",
        a: [],
        o: "Fabulous! It's lovely to have something that makes you that happy.",
        t: ["I'm having a great time learning the guitar.", "I'm really enjoying a new series, it's so funny.", "I'm having fun playing basketball after school."],
        x: [["i am playing minecraft with friends", -1], ["i have fun in dance class", -1]]
      }
    ],
    end: "I've had a wonderful time talking to you! Now I'm having a cracker. See you soon!"
  },
  {
    id: "tb2g02", title: "Although, despite, so that",
    he: "משתפים את קוקו בהרגלים ובדעות שלכם, עם although, despite, so that ו-due to",
    turns: [
      {
        c: "Hi there! Although it's raining here, I'm in a sunny mood. What do you usually do so that you don't feel tired in the morning?",
        he: "מה אתם עושים כדי לא להיות עייפים בבוקר? למשל: I go to bed early so that I'm not tired.",
        a: [],
        o: "Good idea! I sleep with my head under my wing so that I wake up fresh.",
        t: ["I go to bed early so that I'm not tired.", "I drink a glass of water as soon as I wake up.", "I put my phone away in order to sleep better."],
        x: [["i sleep early so i am not tired", -1], ["nothing i am always tired", -1]]
      },
      {
        c: "Think of something you did even though you didn't feel like it, like training in the rain. Why did you do it anyway?",
        he: "ספרו על משהו שעשיתם למרות שלא התחשק לכם. למשל: Although I was tired, I went to practice.",
        a: [],
        o: "That takes real willpower. I'm impressed, honestly!",
        t: ["Although I was tired, I went to practice because the team needed me.", "I studied even though I wanted to play, because I had a test.", "Despite the rain, I walked my dog."],
        x: [["despite i was tired i go to training", -1], ["i did my homework because i had to", -1]]
      },
      {
        c: "Zebras might have stripes in order to keep flies away. If you could have one animal feature, what would you choose, and why?",
        he: "איזו תכונה של חיה הייתם רוצים, ולמה? למשל: I'd have wings so that I could fly to school.",
        a: [],
        o: "Ooh, fabulous choice! I'd keep my wings, of course, so that I could fly anywhere.",
        t: ["I'd have wings so that I could fly to school.", "I'd have a cat's eyes in order to see in the dark.", "Gills, because I love swimming."],
        x: [["wings for fly", -1], ["i want to be fast like a cheetah", -1]]
      },
      {
        c: "Was there a day this year that was so good that you still remember it? What happened?",
        he: "ספרו על יום כל כך טוב שאתם עוד זוכרים. למשל: The class trip was so fun that I still talk about it.",
        a: [],
        o: "Thank you for sharing that. Days like that are such a gift.",
        t: ["The class trip was so fun that I still talk about it.", "My birthday was such a great day that I'll never forget it.", "It was so hot that we went to the beach twice."],
        x: [["when we win the game it was so good", -1], ["the trip to the north", -1]]
      },
      {
        c: "Final question! Some schools cancel sports day due to the heat. Is that a good idea, or should they just move it to the morning?",
        he: "לבטל יום ספורט בגלל החום או להעביר לבוקר? למשל: They should move it to the morning, so that it's cooler.",
        a: [
          { k: ["morning move moved earlier early change evening indoors inside hall gym shade autumn winter spring later bad"], r: "Smart! Changing the plan means nobody misses out, despite the heat." },
          { k: ["cancel cancelled canceling cancelling good right agree yes safe safer dangerous hot heat"], n: "not bad", r: "Fair enough. Because of the heat, safety has to come first." }
        ],
        o: "Interesting point! Heat is a real problem, so schools have to think about it carefully.",
        t: ["They should move it to the morning, so that it's cooler.", "Cancelling is a good idea because of the heat.", "I think they should do it indoors instead."],
        x: [["they should move it to morning", 0], ["i think cancel is good idea", 1], ["yes i agree because is too hot", 1], ["do it in the gym", 0], ["i dont like sport day", -1]]
      }
    ],
    end: "Although we talked fast, I loved every word. Come back soon so that we can chat again!"
  },
  {
    id: "tb2g03", title: "Someone left their scarf",
    he: "עוזרים לקוקו לחשוב על מי ששכח צעיף בחנות, עם they ו-their לאדם אחד",
    turns: [
      {
        c: "Ooh, a mystery! Someone left their scarf in my shop this morning. It's purple with gold stars. What do you think they're like, from their scarf?",
        he: "איך נראה לכם האדם ששכח את הצעיף? למשל: I think they love bright colours.",
        a: [],
        o: "Ooh, good thinking! Whoever they are, they have great taste.",
        t: ["I think they love bright colours.", "They're probably creative and a bit dreamy.", "Maybe they really like space and stars."],
        x: [["i think she like purple", -1], ["they are a happy person", -1]]
      },
      {
        c: "If someone loses something at school, what should they do to get it back?",
        he: "מה צריך לעשות מי שאיבד משהו בבית הספר? למשל: They should ask the teacher.",
        a: [],
        o: "Good advice! I hope everyone who loses something gets it back.",
        t: ["They should ask the teacher or check the lost and found.", "They can put a message in the class group.", "They should go back to where they last had it."],
        x: [["he should ask the teacher", -1], ["they need to look everywhere", -1]]
      },
      {
        c: "Imagine a new student joins your class tomorrow and doesn't know anyone. What could you do so that they feel welcome on their first day?",
        he: "מה הייתם עושים כדי שתלמיד חדש ירגיש רצוי? למשל: I'd say hi and ask them to sit with us.",
        a: [],
        o: "Lovely idea. A small thing can make someone feel really welcome.",
        t: ["I'd say hi and ask them to sit with us.", "I could show them around the school.", "I'd invite them to play with us at break."],
        x: [["i will say hello to him", -1], ["show her the school", -1]]
      },
      {
        c: "People say you never know until you try. Do you agree that everyone should try new things, even if they feel shy?",
        he: "מסכימים שכל אחד צריך לנסות דברים חדשים? למשל: Yes, I agree. או It depends.",
        a: [
          { k: ["no not depends depend sometimes disagree"], n: "know sure", r: "Fair point. Nobody should be pushed into something they're not ready for." },
          { k: ["yes agree true right definitely sure absolutely course"], n: "not_sure", r: "So you agree! Me too. Everyone deserves a chance to surprise themselves." }
        ],
        o: "Fair enough. Trying new things is easier for some people than for others.",
        t: ["Yes, I agree. You never know what you'll love.", "It depends. Some people need more time."],
        x: [["yes i am agree", 1], ["yes because you never know", 1], ["no not everyone", 0], ["it depends on the person", 0], ["i like pizza", -1], ["i'm not sure", -1], ["i don't know", -1], ["of course", 1]]
      },
      {
        c: "One more before I fly off. Think of someone you admire, but don't tell me who. What is one thing they do that you would like to do too?",
        he: "חשבו על מישהו שאתם מעריכים (בלי שם). מה הוא עושה? למשל: They never give up.",
        a: [],
        o: "They sound like a wonderful person. I'm sure they'd be happy to know you admire them.",
        t: ["They always help people without being asked.", "They never give up, even when it's hard.", "They are always kind to everyone."],
        x: [["she is always kind", -1], ["he help everybody", -1]]
      }
    ],
    end: "Thank you! If you see someone looking for their purple scarf, send them to my shop. Bye!"
  },
  {
    id: "tb2v01", title: "Friends, bonds and Coco",
    he: "מדברים עם קוקו על חברויות, עם hit it off, see eye to eye, look up to ו-a bond",
    turns: [
      {
        c: "Guess what? I hit it off with a pigeon at the park today. We talked for hours! Do you usually hit it off with people quickly, or does it take time?",
        he: "אתם מתחברים לאנשים מהר או שזה לוקח זמן? למשל: It usually takes me some time.",
        a: [
          { k: ["time slow slowly while shy long not depends depend"], n: "know sure", r: "Same with lots of people. The best bonds often grow slowly." },
          { k: ["quick quickly fast immediately yes easy easily straight"], r: "Lucky you! Hitting it off quickly is a great gift." }
        ],
        o: "Thanks for telling me. Every friendship starts in its own way.",
        t: ["It usually takes me some time.", "I hit it off with people really quickly.", "It depends on the person."],
        x: [["it takes time", 0], ["i am shy so slowly", 0], ["yes i hit it off fast", 1], ["very quick", 1], ["i have many friends", -1]]
      },
      {
        c: "Do you and the people around you, like friends or classmates, always see eye to eye? What do you sometimes disagree about?",
        he: "על מה אתם והחברים שלכם לא מסכימים? למשל: We don't always see eye to eye about music.",
        a: [],
        o: "That's normal. Friends don't have to agree on everything to have a strong bond.",
        t: ["We don't always see eye to eye about music.", "We usually agree, but sometimes we argue about games.", "We disagree about which team is the best."],
        x: [["we fight about football", -1], ["we always agree", -1]]
      },
      {
        c: "Some friends drift apart when one of them moves away. Do you think a strong bond can survive, even if you only meet once a year? Why?",
        he: "קשר חזק יכול לשרוד גם כשרחוקים? למשל: Yes, if you keep talking online. או No, people drift apart.",
        a: [
          { k: ["yes can sure definitely survive possible course strong"], n: "not hard difficult", r: "I think so too. Distance can't break a really strong bond." },
          { k: ["no not hard difficult drift apart"], n: "know sure", r: "That's a fair point. Staying close takes effort when you rarely see each other." }
        ],
        o: "Hmm, good question. Every friendship is different, after all.",
        t: ["Yes, if you keep talking online, it can.", "No, I think people drift apart over time."],
        x: [["yes if you talk a lot", 0], ["of course it can", 0], ["no it can't", 1], ["it is hard when you not see", 1], ["my friend moved to haifa", -1]]
      },
      {
        c: "Think of someone older you look up to, like a relative, a coach or someone famous. Without saying their name, why do you look up to them?",
        he: "למה אתם מעריכים מישהו מבוגר (בלי שם)? למשל: I look up to my coach because she never gives up.",
        a: [],
        o: "They sound inspiring. It's great to have someone to look up to.",
        t: ["I look up to my coach because she never gives up.", "I look up to my cousin because he's so kind.", "I look up to a scientist who works really hard."],
        x: [["because he is very smart", -1], ["i look up my sister she is my hero", -1]]
      },
      {
        c: "My last question for today. When a friend lets you down, for example they forget your plans, what's the best thing to do? Talk, forgive, or wait a bit?",
        he: "מה עושים כשחבר מאכזב? למשל: I'd talk to them. או I'd forgive them. או I'd wait a bit.",
        a: [
          { k: ["talk speak tell say explain ask message text"], r: "Talking is brave. Most friends don't even know they've let you down." },
          { k: ["forgive forgave forgiven sorry"], r: "That's kind! Everyone lets someone down sometimes." },
          { k: ["wait calm time later relax break"], r: "Wise. Calming down first makes the talk much easier." }
        ],
        o: "Good thinking. Standing by a friend doesn't mean hiding how you feel.",
        t: ["I'd talk to them and say how I feel.", "I'd forgive them if it only happened once.", "I'd wait a bit and calm down first."],
        x: [["talk to him", 0], ["i will forgive her", 1], ["wait and then talk", 0], ["i would wait a little", 2], ["be angry", -1]]
      }
    ],
    end: "We really hit it off today! I promise I won't let you down. See you next time!"
  },
  {
    id: "tb2v02", title: "Thrilled, relieved or both?",
    he: "מדברים עם קוקו על רגשות חזקים, עם thrilled, frustrated, relieved ו-content",
    turns: [
      {
        c: "Squawk! I'm absolutely thrilled today, because a new box of hats arrived! What's something that made you feel thrilled recently?",
        he: "מה גרם לכם להתלהב לאחרונה? למשל: I was thrilled when my team won the game.",
        a: [],
        o: "Thank you for sharing! Happy moments like that are worth remembering.",
        t: ["I was thrilled when my team won the game.", "I was really thrilled to get a new phone.", "I felt thrilled when I got a good mark."],
        x: [["when i get a new bike", -1], ["i was thrilled at the concert", -1]]
      },
      {
        c: "Now a smaller feeling. What makes you frustrated, like a slow computer or a level you can't beat? What do you do when it happens?",
        he: "מה מתסכל אתכם ומה אתם עושים אז? למשל: I get frustrated when the wifi is slow, so I take a break.",
        a: [],
        o: "I understand! When my feathers get tangled, I get really frustrated too.",
        t: ["I get frustrated when the wifi is slow, so I take a break.", "Losing a level again and again frustrates me.", "When my phone freezes, I just restart it."],
        x: [["when my brother takes my things", -1], ["slow internet i am so angry", -1]]
      },
      {
        c: "Lots of teenagers feel anxious before exams. What helps you feel calm before a big test or a match?",
        he: "מה עוזר לכם להירגע לפני מבחן או משחק? למשל: I listen to music and breathe slowly.",
        a: [],
        o: "Thanks for sharing. Everyone needs their own way to feel calm.",
        t: ["I listen to music and breathe slowly.", "I study a little every day, so I'm less anxious.", "I talk to a friend before the match."],
        x: [["i listen music", -1], ["i don't feel anxious", -1]]
      },
      {
        c: "Grammar trick: with strong words we say absolutely or really, not very. When did you feel absolutely relieved, maybe after a test or when you found something?",
        he: "מתי הרגשתם הקלה גדולה? למשל: I was absolutely relieved when I found my keys.",
        a: [
          { k: ["very"], n: "absolutely really", r: "Ooh, absolutely relieved! What a great feeling when a worry disappears." },
          { k: ["found find lost"], r: "Finding something you lost is the best! I'm absolutely relieved for you." },
          { k: ["test exam over finished results quiz match"], r: "That feeling when something stressful is over! Absolutely wonderful." }
        ],
        o: "Thank you for telling me. Feeling relieved is one of the best feelings.",
        t: ["I was absolutely relieved when I found my keys.", "I was really relieved when the exam was over."],
        x: [["i was very relieved when i find my phone", 0], ["when i found my dog", 1], ["after the test i was relieved", 2], ["when the holidays started", -1], ["i don't know", -1]]
      },
      {
        c: "Before you go! Some people are content with a simple life. What simple thing, without any screens, makes you feel really content?",
        he: "איזה דבר פשוט, בלי מסכים, גורם לכם להרגיש מרוצים? למשל: A walk on the beach makes me content.",
        a: [],
        o: "Lovely. Simple things are often the best ones.",
        t: ["A walk on the beach makes me feel content.", "I feel content when I read a good book.", "Baking a cake on a quiet afternoon."],
        x: [["playing with my cat", -1], ["sleeping on saturday morning", -1]]
      }
    ],
    end: "I'm absolutely thrilled we talked. Now I feel content, like a parrot with a full bowl of crackers!"
  },
  {
    id: "tb2l01", title: "Ask Away with Coco",
    he: "מה דעתכם על הבעיות של מיה ונוח מתוכנית הרדיו? נותנים עצות עם If I were you",
    turns: [
      {
        c: "Welcome back! I loved that radio show. Mia's friend copies her homework every day. Should Mia talk to her friend first, or just tell the teacher?",
        he: "מה מיה צריכה לעשות? למשל: She should talk to her friend in private. או She should tell the teacher.",
        a: [
          { k: ["talk speak friend private study together"], n: "teacher", r: "I agree with you and the host. A private talk is kinder." },
          { k: ["teacher"], r: "The teacher can help too. The host suggested a private talk first, just to be kind." }
        ],
        o: "Interesting! It really is a tricky dilemma for Mia.",
        t: ["She should talk to her friend in private.", "I think she should tell the teacher.", "She should offer to study together."],
        x: [["talk to her friend", 0], ["she need to speak with her", 0], ["tell the teacher", 1], ["go to the teacher", 1], ["stop helping", -1]]
      },
      {
        c: "If you were Mia, how would you feel about your friend copying every single day? Would you feel used, like she did?",
        he: "איך הייתם מרגישים במקום מיה? למשל: Yes, I'd feel used. או I wouldn't mind at first.",
        a: [
          { k: ["used angry upset annoyed sad bad worried furious frustrated yes"], n: "not", r: "I understand. Feeling used by a friend really hurts." },
          { k: ["not no fine okay ok mind care cool"], n: "know sure", r: "Interesting! Not everyone would feel the same, and that's okay." }
        ],
        o: "Thanks for being honest. A dilemma like that is never easy.",
        t: ["Yes, I'd feel used and a bit angry.", "I wouldn't mind at first, but every day is too much."],
        x: [["yes i would feel used", 0], ["i will be angry", 0], ["i wouldn't care", 1], ["no it is ok", 1], ["i would help her", -1]]
      },
      {
        c: "Now Noah. His friend always cancels plans at the last minute. If I were Noah, I'd be furious! What would you do if you were him?",
        he: "מה הייתם עושים במקום נוח? למשל: If I were him, I'd tell my friend how I feel.",
        a: [],
        o: "Thanks! The host said people can't change what they don't know about.",
        t: ["If I were him, I'd tell my friend how I feel.", "I'd make plans with other friends too.", "I'd ask him why he always cancels."],
        x: [["i will tell him i am angry", -1], ["if i was him i find new friends", -1]]
      },
      {
        c: "Noah always says it's fine, even when it isn't. Why do you think people sometimes hide their feelings from their friends?",
        he: "למה אנשים מסתירים רגשות מחברים? למשל: They don't want to start a fight.",
        a: [],
        o: "That's a thoughtful answer. Honesty can feel scary, but it usually helps.",
        t: ["They don't want to start a fight.", "Maybe they're afraid of losing the friend.", "It's easier to say it's fine than to talk."],
        x: [["because they are shy", -1], ["they don't want problems", -1]]
      },
      {
        c: "Last one. A psychologist says close friends spend about two hundred hours together. What's your favourite way to spend time with a friend?",
        he: "איך אתם הכי אוהבים לבלות עם חבר? למשל: We play basketball after school.",
        a: [],
        o: "Ooh, that sounds fun. Those hours add up fast!",
        t: ["We play basketball after school.", "We watch films and eat popcorn.", "We just walk around and talk for hours."],
        x: [["we play fortnite together", -1], ["go to the mall", -1]]
      }
    ],
    end: "Thanks for calling Ask Away with Coco! If I were you, I'd come back tomorrow. Bye!"
  },
  {
    id: "tb2l02", title: "Music as medicine?",
    he: "מה דעתכם על מה שהמומחית אמרה על מוזיקה, ספורט ושקט?",
    turns: [
      {
        c: "That was a fascinating show! What was the most surprising thing Doctor Reyes said about music, and why did it surprise you?",
        he: "מה הפתיע אתכם בתוכנית? למשל: That people can sing words they can't say.",
        a: [],
        o: "Ooh, good choice! Music really can do amazing things.",
        t: ["That people can sing words they can't say.", "That calm music works like some medicines.", "I was surprised that silence matters too."],
        x: [["the stroke people can sing", -1], ["that music help before operation", -1]]
      },
      {
        c: "She said music with a strong beat makes exercise feel easier. What kind of music would you choose for a long run or a workout?",
        he: "איזו מוזיקה הייתם בוחרים לריצה או לאימון? למשל: I'd choose loud rock songs with a strong beat.",
        a: [],
        o: "Fabulous! I flap my wings faster when the beat is strong.",
        t: ["Something fast, like rap or electronic music.", "I'd choose loud rock songs with a strong beat.", "Pop songs, because I know all the words."],
        x: [["rap music is the best", -1], ["i don't run", -1]]
      },
      {
        c: "Do you prefer studying with music or in total silence? Why does it work better for you?",
        he: "לומדים עם מוזיקה או בשקט? למשל: I need silence. או Music helps me relax. או It depends.",
        a: [
          { k: ["depends depend both sometimes"], r: "Smart! Different tasks need different sounds." },
          { k: ["silence silent quiet"], r: "Good choice. Doctor Reyes said the brain needs quiet time too." },
          { k: ["music song songs listen playlist"], n: "no_music without_music", r: "Nice! Calm music helps a lot of people concentrate." }
        ],
        o: "Thanks! Everyone's brain works a little differently.",
        t: ["I need silence, otherwise I can't concentrate.", "With music, because it helps me relax.", "It depends on the subject."],
        x: [["in silence because i concentrate", 1], ["music helps me", 2], ["depends on subject", 0], ["i study in my room", -1], ["no music", -1], ["both", 0], ["with music because it is quiet", 1]]
      },
      {
        c: "Singing in a choir or playing in a band makes people feel closer. If you could join any group that makes music, what would you play or sing?",
        he: "אם הייתם מצטרפים ללהקה או למקהלה, מה הייתם מנגנים או שרים? למשל: I'd play the drums in a rock band.",
        a: [],
        o: "Ooh, I'd come to every show! Making music together sounds fabulous.",
        t: ["I'd play the drums in a rock band.", "I'd love to sing in a choir with my friends.", "I would play the guitar in a small band."],
        x: [["i will play piano", -1], ["sing in a choir", -1]]
      },
      {
        c: "Final question! Should schools play calm music in the classroom during tests? Would it help students, or distract them?",
        he: "מוזיקה רגועה בזמן מבחן: עוזרת או מפריעה? למשל: Yes, it would help. או No, it would distract them.",
        a: [
          { k: ["help helps yes calm calmer relax good great reduce quiet maybe"], n: "not distract", r: "I like that idea! Calm music might reduce anxiety before tests." },
          { k: ["distract no not annoying annoy disturb bother noise"], n: "know sure", r: "Fair point. For some people, any sound is a distraction." }
        ],
        o: "Ooh, scientists could test that one day!",
        t: ["Yes, it would help students feel calmer.", "No, I think it would distract them.", "Maybe, but only very quiet music."],
        x: [["yes it help", 0], ["it will relax them", 0], ["no it distracts", 1], ["it's annoying", 1], ["tests are hard", -1]]
      }
    ],
    end: "Thanks for chatting! Now I'm going to rest my brain in silence, like Doctor Reyes said. Bye!"
  },
  {
    id: "tb2l03", title: "Wishes and if onlys",
    he: "מדברים על גרייס, אוון ורוזה ועל משאלות, עם I wish I had ו-If only",
    turns: [
      {
        c: "Hi! Grace wishes she'd learned an instrument as a child. Do you think it's really harder to learn something new when you're older? Why?",
        he: "יותר קשה ללמוד דברים חדשים כשמתבגרים? למשל: Yes, adults are busy. או No, you can learn at any age.",
        a: [
          { k: ["yes harder hard difficult slower slow true busy kids children young faster easier"], n: "not never", r: "Maybe it is harder, but it's never too late. Grace could still start the piano now." },
          { k: ["not no never late possible easy anyone any_age"], n: "know sure", r: "I agree! You're never too old to learn something new." }
        ],
        o: "Good thought! Learning feels different at every age.",
        t: ["Yes, it's harder because adults are busy.", "No, I think you can learn at any age."],
        x: [["yes it is more hard", 0], ["no its never too late", 1], ["kids learn faster", 0], ["yes because the brain is slower", 0], ["it is not hard", 1], ["i don't know", -1], ["pizza and pasta", -1], ["no", 1]]
      },
      {
        c: "Owen wishes he hadn't posted that photo when he was fourteen. What advice would you give a friend before they post something online?",
        he: "איזו עצה הייתם נותנים לפני שמפרסמים משהו ברשת? למשל: Think about who might see it in ten years.",
        a: [],
        o: "Wise advice. Thinking twice before posting can save a lot of trouble.",
        t: ["Think about who might see it in ten years.", "If you wouldn't show it to a teacher, don't post it.", "Wait a day before you post anything."],
        x: [["don't post stupid things", -1], ["think before you post", -1]]
      },
      {
        c: "Was it fair that a company looked at a photo from when Owen was fourteen? Why or why not?",
        he: "זה הוגן שחברה הסתכלה על תמונה ישנה של אוון? למשל: No, it's not fair. או Yes, because it's public.",
        a: [
          { k: ["not no unfair wrong"], n: "know sure", r: "I agree, people change a lot. Still, the internet doesn't forget." },
          { k: ["yes fair public okay ok"], r: "Interesting! You think what we post still says something about us." }
        ],
        o: "That's a tricky question. People change a lot as they grow up.",
        t: ["No, it's not fair. He was just a kid.", "Yes, because what you post is public."],
        x: [["no not fair", 0], ["it is unfair", 0], ["yes it is fair", 1], ["i think yes because it is online", 1], ["the company is bad", -1]]
      },
      {
        c: "Rosa tries to learn from her mistakes. What's a small mistake, like forgetting your charger, that taught you something useful?",
        he: "איזו טעות קטנה לימדה אתכם משהו? למשל: I forgot my homework once, so now I check my bag.",
        a: [],
        o: "Great lesson! Mistakes are how we all learn, even parrots.",
        t: ["I forgot my homework once, so now I check my bag.", "I didn't charge my phone, so now I always do.", "I once missed the bus, so now I leave earlier."],
        x: [["i forget my lunch so now i check", -1], ["i was late to school", -1]]
      },
      {
        c: "One more before I fly off. People regret the chances they missed. What's one chance you want to take this year, so you never have to say I wish I'd tried?",
        he: "איזו הזדמנות אתם רוצים לנצל השנה? למשל: I want to try out for the school team.",
        a: [],
        o: "Go for it! I'll be cheering for you from my perch.",
        t: ["I want to try out for the school team.", "I'd like to start learning the guitar.", "I want to join the drama club this year."],
        x: [["join the basketball team", -1], ["i want to learn spanish", -1]]
      }
    ],
    end: "No regrets today, I'm so glad we talked! If only every chat were this fun. Bye!"
  },
  {
    id: "tb2r01", title: "Tourists: help or problem?",
    he: "מה דעתכם על התיירות בוונציה ובברצלונה? מביעים דעה ומנמקים",
    turns: [
      {
        c: "Ciao, as they say in Venice! Venice now charges day visitors five euros on its busiest days. Do you think that's fair, or should cities stay free for everyone?",
        he: "זה הוגן לגבות כסף מתיירים בוונציה? למשל: I think it's fair. או It should be free for everyone.",
        a: [
          { k: ["fair yes good agree right idea sense"], n: "unfair not free bad", r: "Me too. Five euros won't stop people, but it helps the city." },
          { k: ["free unfair no not everyone wrong expensive bad"], n: "know sure", r: "I see your point. In a way, beautiful cities belong to everyone." }
        ],
        o: "Interesting! It's a hard question for a city full of visitors.",
        t: ["I think it's fair, because the city needs money.", "It should be free for everyone.", "Yes, it's a good idea for busy days."],
        x: [["yes its fair", 0], ["good idea", 0], ["no it is not fair", 1], ["the city should be free", 1], ["venice is beautiful", -1]]
      },
      {
        c: "The article says rents go up when flats are rented to tourists. If you lived in Barcelona, how would you feel about that, and why?",
        he: "איך הייתם מרגישים אילו גרתם בברצלונה? למשל: I'd be angry, because local people need homes.",
        a: [],
        o: "I understand. It's a hard problem for the people who live there.",
        t: ["I'd be angry, because local people need homes.", "I'd understand, because tourists bring jobs.", "I'd feel sad if my friends had to move away."],
        x: [["i will be angry", -1], ["i don't care tourists are fun", -1]]
      },
      {
        c: "Some protesters sprayed tourists with water pistols. Do you think that's a good way to make a point? Why or why not?",
        he: "זו דרך טובה למחות? למשל: No, it's rude to the tourists. או It's funny, and it got attention.",
        a: [
          { k: ["no not rude bad unfair wrong mean"], n: "know sure", r: "I agree. There are kinder ways to be heard." },
          { k: ["yes good funny fun okay ok fine attention refreshing"], r: "Ha! It's summer, so maybe the tourists didn't mind too much." }
        ],
        o: "Hmm. Protests like that always get people talking.",
        t: ["No, it's rude to the tourists.", "It's funny, and it got everyone's attention."],
        x: [["no it is rude", 0], ["not nice", 0], ["yes it's funny", 1], ["it was hot so it's good", 1], ["they want houses", -1]]
      },
      {
        c: "Experts suggest smarter travel: quieter months, smaller towns, longer stays. Which of these would you actually choose for a trip, and why?",
        he: "איזו דרך טיול חכמה הייתם בוחרים? למשל: Smaller towns, because they're less crowded.",
        a: [
          { k: ["small smaller town towns village villages"], r: "Ooh, small towns often have the friendliest people and the best food." },
          { k: ["quiet quieter month months winter spring autumn fall november crowds"], r: "Smart! Fewer crowds and lower prices. Everyone wins." },
          { k: ["long longer stay week weeks"], r: "Lovely! You really get to know a place that way." }
        ],
        o: "Good thinking. Smarter travel helps the places we love.",
        t: ["Smaller towns, because they're less crowded.", "I'd travel in a quieter month, like November.", "I'd stay longer in one place to really know it."],
        x: [["small town", 0], ["i go in winter when it is quiet", 1], ["stay more time in one place", 2], ["i like big cities", -1]]
      },
      {
        c: "My last question for today. The article says locals make a place feel alive. If you showed a tourist around for a day, where would you take them, and why?",
        he: "לאן הייתם לוקחים תייר ליום אחד, ולמה? למשל: To the market, because it's full of life.",
        a: [],
        o: "Lovely. With a guide like you, any tourist would feel like a local.",
        t: ["To the market, because it's full of life.", "To a small falafel place that only locals know.", "To the beach at sunset, because it's beautiful."],
        x: [["to the beach and the park", -1], ["my favourite pizza place", -1]]
      }
    ],
    end: "Thanks for the trip! Next time I travel, I'll fly in the quiet months, like a smart parrot."
  },
  {
    id: "tb2u02", title: "The phone box by the door",
    he: "מה דעתכם על המסעדה שאסרה טלפונים ליד השולחן? מביעים דעה ומנמקים",
    turns: [
      {
        c: "Welcome to my table! In Llanmor, diners leave their phones in a wooden box by the door. Would you enjoy a meal like that, or would it drive you crazy?",
        he: "הייתם נהנים מארוחה בלי טלפון? למשל: I'd enjoy it. או It would drive me crazy.",
        a: [
          { k: ["mind"], r: "No problem for you, then! People there talk more, and they even order dessert." },
          { k: ["crazy hard hate difficult miss nervous bored boring annoying stress stressful"], r: "Honest answer! Rhys thought he'd hate it too, but he was surprised." },
          { k: ["enjoy like love nice yes good fun great cool"], n: "not", r: "Me too! Not only do people talk more, they order dessert too!" },
          { k: ["no not"], n: "know sure", r: "Honest answer! Rhys thought he'd hate it too, but in the end he liked it." }
        ],
        o: "Fair enough! A meal without phones is a real change for most people.",
        t: ["I'd enjoy it. We'd talk more.", "It would drive me crazy at first.", "I wouldn't like it, to be honest."],
        x: [["i would enjoy", 2], ["yes it's nice", 2], ["it will drive me crazy", 1], ["i hate it", 1], ["no i need my phone", 3], ["i don't like it", 3], ["dinner is boring", 1], ["i wouldn't mind", 0], ["my mom cook", -1], ["i don't know", -1]]
      },
      {
        c: "The study said a phone on the table makes conversations feel less personal, even when it's switched off. Do you believe that? Have you noticed it?",
        he: "גם טלפון כבוי על השולחן מפריע לשיחה? למשל: Yes, people keep looking at it. או Not really.",
        a: [
          { k: ["no not dont"], n: "know sure", r: "Interesting! Maybe it depends on the people at the table." },
          { k: ["yes true believe noticed notice agree right"], r: "Me too. When phones are out, eyes keep jumping to them." }
        ],
        o: "Thanks for telling me. It's a surprising study, whether it's true for you or not.",
        t: ["Yes, people keep looking at their phones.", "Not really, I think it depends on the people."],
        x: [["yes i noticed", 1], ["no i don't believe", 0], ["true people look at phone", 1], ["i don't know", -1], ["my phone is new", -1]]
      },
      {
        c: "Although some customers complained at first, most now enjoy the change. Why do you think people often change their minds after trying something?",
        he: "למה אנשים משנים דעה אחרי שהם מנסים משהו? למשל: Because it's less scary once you try it.",
        a: [],
        o: "Good point. Sometimes we only know what we like after we try it.",
        t: ["Because it's less scary once you try it.", "They notice they're having more fun.", "At first it's strange, but then they get used to it."],
        x: [["because they see it is good", -1], ["they get used to it", -1]]
      },
      {
        c: "The council is considering extending the rule to the school canteen. Would a no-phones rule at lunch be a good idea in schools? Why?",
        he: "כלל של בלי טלפונים בהפסקת הצהריים בבית הספר: רעיון טוב? למשל: Yes, everyone would talk. או No, we need a break.",
        a: [
          { k: ["no not bad terrible unfair hate"], n: "know sure", r: "Fair point. Sometimes a break with your phone feels good too." },
          { k: ["yes good great idea agree better talk"], r: "Lunch with real conversations! I like the sound of that." }
        ],
        o: "Interesting! Schools around the world are asking the same question.",
        t: ["Yes, because everyone would talk to each other.", "No, we need our phones to relax at lunch."],
        x: [["yes good idea", 1], ["yes it is better", 1], ["no we need phones", 0], ["it is bad idea", 0], ["we eat at twelve", -1]]
      },
      {
        c: "Before you go! If you made one rule about phones for yourself, not for anyone else, what would it be?",
        he: "איזה כלל על טלפון הייתם קובעים לעצמכם? למשל: No phone for the first hour after I wake up.",
        a: [],
        o: "That's a smart rule. Rules we make ourselves are the easiest to keep.",
        t: ["No phone for the first hour after I wake up.", "I'd put my phone away while I do homework.", "No screens in bed after ten o'clock."],
        x: [["no phone when i eat", -1], ["only one hour of games", -1]]
      }
    ],
    end: "Thanks for talking! Now I'm putting my phone in a box and having crackers with real friends."
  },
  {
    id: "tb2g04", title: "Did you make it yourself?",
    he: "מדברים עם קוקו על דברים שעשיתם בעצמכם, עם myself, by myself ו-each other",
    turns: [
      {
        c: "Look at my new hat! I made it myself, out of old feathers. What's something you've made or fixed yourself that you were proud of?",
        he: "מה הכנתם או תיקנתם בעצמכם? למשל: I fixed my bike myself last summer.",
        a: [],
        o: "Ooh, impressive! There's nothing like saying, I did it myself.",
        t: ["I fixed my bike myself last summer.", "I made a birthday cake all by myself.", "I built a small shelf for my room."],
        x: [["i made a cake alone", -1], ["i fix my headphones", -1]]
      },
      {
        c: "What's something you taught yourself to do, maybe from videos online? How long did it take you?",
        he: "מה לימדתם את עצמכם לעשות? למשל: I taught myself to juggle from videos.",
        a: [],
        o: "Teaching yourself takes real patience. I taught myself to knit a scarf, and it took ages.",
        t: ["I taught myself to juggle from videos.", "I taught myself some guitar chords in a month.", "I learned to cook pasta by myself."],
        x: [["i learn to draw from youtube", -1], ["i teach me to skate", -1]]
      },
      {
        c: "Do you prefer doing homework by yourself, or with a friend so that you can help each other? Why?",
        he: "מעדיפים להכין שיעורים לבד או עם חבר? למשל: By myself. או With a friend, so we can help each other.",
        a: [
          { k: ["by_me alone_me"], r: "By yourself! Lots of people concentrate best that way." },
          { k: ["depends depend both sometimes"], r: "Smart, it really depends on the subject." },
          { k: ["myself alone own self yourself quiet"], r: "Fair enough. Some people concentrate best on their own." },
          { k: ["friend friends together each_other help"], r: "Nice! Helping each other is a great way to learn." }
        ],
        o: "Thanks! Everyone finds their own way to get homework done.",
        t: ["By myself, because I concentrate better.", "With a friend, so we can help each other.", "It depends on the subject."],
        x: [["by me because quiet", 0], ["alone", 2], ["i do it by myself", 2], ["with my friend", 3], ["it depends", 1], ["i don't like homework", -1]]
      },
      {
        c: "My rule at a party is to enjoy yourself and not worry. And after a really busy day, what's your favourite way to relax?",
        he: "איך אתם נרגעים אחרי יום עמוס? למשל: I listen to music and relax on the sofa.",
        a: [],
        o: "That sounds like a great way to relax. I relax in a warm bath of birdseed!",
        t: ["I listen to music and relax on the sofa.", "I take a long shower and read a book.", "I go for a walk with my dog."],
        x: [["i relax myself with netflix", -1], ["i play games on the computer", -1]]
      },
      {
        c: "Last one. Think of two friends who really get along. What do they do for each other that makes their friendship strong?",
        he: "מה חברים טובים עושים זה בשביל זה? למשל: They always help each other with homework.",
        a: [],
        o: "That's lovely. Friends who look out for each other are the best kind.",
        t: ["They always help each other with homework.", "They tell each other the truth, even when it's hard.", "They make each other laugh every day."],
        x: [["they help each other", -1], ["they are always together", -1]]
      }
    ],
    end: "Help yourself to a cracker! I really enjoyed myself today. See you soon!"
  },
  {
    id: "tb2g05", title: "There's a new café!",
    he: "מתארים לקוקו מקומות, מזג אוויר ודברים חדשים, עם there is ו-it is",
    turns: [
      {
        c: "Big news! There's a new café next to my shop. It's tiny, but it sells amazing crackers. Is there a place you love going to with friends? What's it like?",
        he: "יש מקום שאתם אוהבים ללכת אליו עם חברים? איך הוא? למשל: There's a pizza place near the park. It's cheap.",
        a: [],
        o: "Sounds fabulous! There's nothing better than a favourite place with friends.",
        t: ["There's a pizza place near the park. It's really cheap.", "There's a big mall we go to. It's huge.", "We like the beach. It's never boring."],
        x: [["it has a park near my house it is big", -1], ["the mall it is very big", -1]]
      },
      {
        c: "Now the weather. What's it like where you are right now? Is it hot, cold, or raining?",
        he: "מה מזג האוויר אצלכם עכשיו? למשל: It's really hot and sunny today.",
        a: [
          { k: ["nice pleasant perfect lovely mild beautiful"], r: "Lovely! It's perfect weather for a walk." },
          { k: ["hot sunny sun warm humid boiling"], n: "not", r: "It's hot here too! My feathers are melting." },
          { k: ["cold rain raining rainy cloudy cloud windy wind grey gray freezing"], n: "not", r: "Brr! It's the perfect weather for a cosy hoodie." }
        ],
        o: "Thanks! It's always fun to hear about the weather somewhere else.",
        t: ["It's really hot and sunny today.", "It's cloudy and a bit cold.", "It's nice, not too hot."],
        x: [["is very hot", 1], ["it is raining", 2], ["there is sun", 1], ["the weather is nice", 0], ["i am in my room", -1], ["it is not cold", -1], ["i don't know", -1]]
      },
      {
        c: "There seems to be a new trend every week. Is there a trend right now that you think is silly? What makes it silly?",
        he: "יש טרנד שנראה לכם טיפשי? למשל: There's a dance online that everyone copies. It's silly.",
        a: [],
        o: "Ha! Trends come and go, and it's fun to watch them.",
        t: ["There's a dance online that everyone copies. It's silly.", "There's a trend of carrying huge water bottles.", "I don't think there's a silly one right now."],
        x: [["the dance on tiktok it is stupid", -1], ["there is a trend with bracelets", -1]]
      },
      {
        c: "It's hard to learn some things, like the drums or a new language. What's something that's hard to learn, but worth it?",
        he: "מה קשה ללמוד אבל שווה את זה? למשל: It's hard to learn to swim, but it's worth it.",
        a: [],
        o: "So true! It's always worth it in the end.",
        t: ["It's hard to learn to swim, but it's worth it.", "It's hard to learn English, but I love it.", "Learning to code is hard but really useful."],
        x: [["is hard to learn piano", -1], ["math is hard but important", -1]]
      },
      {
        c: "Final question! Imagine there's going to be a surprise at school next week. What would you like it to be, and why?",
        he: "איזו הפתעה הייתם רוצים בבית הספר? למשל: There'll be a trip to the beach. It'd be amazing.",
        a: [],
        o: "Ooh, I hope it really happens. It would be a fabulous surprise!",
        t: ["There'll be a trip to the beach. It'd be amazing.", "I'd like there to be a free ice cream day.", "There should be a day with no homework."],
        x: [["a day without homework", -1], ["a trip to eilat it will be fun", -1]]
      }
    ],
    end: "It's been lovely chatting. There's always a cracker waiting for you in my shop. Bye!"
  },
  {
    id: "tb2g06", title: "Coco's story time",
    he: "מספרים לקוקו סיפורים מהעבר, עם was doing, had done ו-used to",
    turns: [
      {
        c: "Story time! Yesterday I was flying home when it started to rain, and I landed in a puddle. What were you doing yesterday at about this time?",
        he: "מה עשיתם אתמול בשעה כזאת? למשל: I was playing football with my friends.",
        a: [],
        o: "Thanks for telling me! At least you didn't land in a puddle.",
        t: ["I was sitting in a maths lesson.", "I was playing football with my friends.", "I was having lunch at home."],
        x: [["i was sleep", -1], ["i was at school in english lesson", -1]]
      },
      {
        c: "Let's go back in time. When you were little, what did you use to do that you don't do any more?",
        he: "מה הייתם עושים כשהייתם קטנים ואתם כבר לא עושים? למשל: I used to watch cartoons every morning.",
        a: [],
        o: "Ha, that's adorable! I used to sleep upside down, until I fell off my perch.",
        t: ["I used to watch cartoons every morning.", "I used to take a toy dinosaur everywhere.", "I used to be scared of the dark."],
        x: [["i use to cry a lot", -1], ["i was playing with dolls", -1]]
      },
      {
        c: "Tell me about a time something went wrong in a funny way. What were you doing when it happened?",
        he: "ספרו על משהו מצחיק שהשתבש. מה עשיתם כשזה קרה? למשל: I was carrying a cake when I tripped.",
        a: [],
        o: "Oh no, how funny! Those are the best stories to tell later.",
        t: ["I was carrying a cake when I tripped.", "We were waiting for the bus when it started raining.", "I was talking in class when the teacher turned around."],
        x: [["i fell in the pool with my clothes", -1], ["when i walk my phone fall", -1]]
      },
      {
        c: "Have you ever arrived somewhere and found that something had already happened, like the film had started? What had you missed?",
        he: "הגעתם פעם מאוחר ומשהו כבר התחיל? למשל: When we arrived, the bus had already left.",
        a: [
          { k: ["no never"], r: "Lucky you! You must always leave on time." },
          { k: ["yes already started start left finished arrived missed gone late begun ended over"], r: "Oh no! That's so annoying. Next time we'll both leave earlier." }
        ],
        o: "Thanks for telling me! Being on time is harder than it sounds.",
        t: ["Yes, when I got there, the film had already started.", "When we arrived, the bus had already left.", "No, I'm never late."],
        x: [["the movie had started", 1], ["the bus already left", 1], ["no never", 0], ["i am not late never", 0], ["i was at the cinema", -1]]
      },
      {
        c: "And finally, old times. Long ago, knocker-ups would tap on windows with a long stick. What old job would you have liked to do a hundred years ago, and why?",
        he: "איזו עבודה מלפני מאה שנה הייתם רוצים לעשות? למשל: I'd have liked to deliver letters on a horse.",
        a: [],
        o: "Ooh, what a job! You would have been great at it.",
        t: ["I'd have liked to deliver letters on a horse.", "I would have been a baker, because bread smells nice.", "A lighthouse keeper, because it's peaceful."],
        x: [["a knocker up because it is funny", -1], ["i want to be a farmer", -1]]
      }
    ],
    end: "What a lovely story time! I used to be shy, but now I talk all day. See you soon!"
  },
  {
    id: "tb2g07", title: "Get, got, getting!",
    he: "מדברים עם קוקו עם get בכל המשמעויות: לקבל, להגיע, להפוך ל..., להבין",
    turns: [
      {
        c: "Hello, word lover! I got a message from a seagull this morning, and I didn't get it at all. How do you usually get to school, and how long does it take?",
        he: "איך אתם מגיעים לבית הספר וכמה זמן זה לוקח? למשל: I get the bus, it takes about twenty minutes.",
        a: [
          { k: ["walk walked walking foot feet"], r: "Walking is great! You get some fresh air before school." },
          { k: ["bus buses train"], r: "The bus! A great place to get some music in." },
          { k: ["car drive drives lift ride"], r: "Lucky! A quick ride means you get more time to sleep." },
          { k: ["bike bicycle scooter skateboard cycle"], r: "Ooh, sporty! You must get there fast." }
        ],
        o: "Thanks! Getting there is half the adventure.",
        t: ["I usually walk, it takes ten minutes.", "I get the bus, it takes about twenty minutes.", "I get a lift in the car."],
        x: [["by foot", 0], ["i walk 10 minutes", 0], ["with the bus", 1], ["i go by car", 2], ["electric scooter", 3], ["i learn from home", -1]]
      },
      {
        c: "Some days we get tired or grumpy. What's the fastest way for you to get in a better mood?",
        he: "מה הכי מהר משפר לכם את מצב הרוח? למשל: I get a snack and listen to music.",
        a: [],
        o: "Great idea! I'll try that next time I get grumpy.",
        t: ["I get a snack and listen to music.", "Talking to a friend always helps me.", "I go outside and get some fresh air."],
        x: [["eat chocolate", -1], ["i play with my dog and i get happy", -1]]
      },
      {
        c: "Get can also mean someone does it for you: I got my feathers cut! Have you had something done recently, like getting your hair cut or your phone fixed?",
        he: "עשו לכם משהו לאחרונה? למשל: Yes, I got my hair cut last week. או No, not recently.",
        a: [
          { k: ["cut"], n: "got get had haircut", r: "Ah, so you got your hair cut! I'm sure it looks great." },
          { k: ["hair haircut"], r: "Ooh, a new haircut! I bet it looks fabulous." },
          { k: ["phone fixed fix repair repaired screen bike"], r: "Getting things fixed is so satisfying. Good as new!" },
          { k: ["no not nothing"], n: "know sure", r: "That's fine. Maybe you'll get your hair cut soon." }
        ],
        o: "Ooh! I really need to get my beak polished soon.",
        t: ["Yes, I got my hair cut last week.", "I got my phone screen fixed.", "No, not recently."],
        x: [["i cut my hair yesterday", 0], ["yes i got a haircut", 1], ["i got my bike fixed", 2], ["no nothing", 3], ["i bought new shoes", -1]]
      },
      {
        c: "Imagine you get lost in a new city with no phone. What would you do to get back to your hotel?",
        he: "הלכתם לאיבוד בעיר חדשה בלי טלפון. מה תעשו? למשל: I'd ask someone in a shop for help.",
        a: [],
        o: "Smart thinking! You'd get back in no time.",
        t: ["I'd ask someone in a shop for help.", "I'd find a police officer and ask the way.", "I'd look for a map at a bus stop."],
        x: [["ask people for help", -1], ["i will take a taxi", -1]]
      },
      {
        c: "My last question for today. Get can mean understand, too. Is there a joke or a film that everyone loved, but you just didn't get? What was it?",
        he: "יש בדיחה או סרט שכולם אהבו ואתם לא הבנתם? למשל: I didn't get the ending of a film I watched.",
        a: [],
        o: "Ha! Honestly, I don't get half the jokes I hear, and I still laugh.",
        t: ["I didn't get the ending of a film I watched.", "My friends love a show that I just don't get.", "I usually get the jokes, to be honest."],
        x: [["i don't understand the movie inception", -1], ["a joke of my teacher", -1]]
      }
    ],
    end: "I'm getting tired, but I've got so many new words! Thanks for chatting. See you!"
  },
  {
    id: "tb2g08", title: "By the way, Coco...",
    he: "משוחחים עם קוקו ומקשרים רעיונות עם however, actually, in the end ו-by the way",
    turns: [
      {
        c: "Did you know? Octopuses have three hearts. What's more, they can taste things with their arms! What's an amazing animal fact that you know?",
        he: "איזו עובדה מדהימה על חיות אתם מכירים? למשל: Actually, honey never goes bad.",
        a: [],
        o: "Wow, I didn't know that! In fact, I'm going to tell all my customers.",
        t: ["Actually, sharks are older than trees.", "Cows have best friends. What's more, they get stressed without them.", "In fact, a snail can sleep for three years."],
        x: [["the cheetah is the fastest animal", -1], ["dolphins sleep with one eye open", -1]]
      },
      {
        c: "Some people say homework is useless. However, others think it really helps. What's your opinion, and why?",
        he: "שיעורי בית: מיותרים או מועילים? למשל: Homework helps. However, too much is stressful.",
        a: [],
        o: "Interesting! There are good points on both sides, after all.",
        t: ["Homework helps. However, too much is stressful.", "I think it's useful. After all, we need practice.", "In fact, I think we get far too much."],
        x: [["homework is boring", -1], ["it helps but it takes too much time", -1]]
      },
      {
        c: "By the way, what's the best film or series you've watched recently? And what did you think of the ending?",
        he: "מה הסרט או הסדרה הכי טובים שראיתם לאחרונה? למשל: A funny film. However, the ending was sad.",
        a: [],
        o: "Ooh, I'll add it to my list! Anyway, I love a good ending.",
        t: ["A series about a football team. The ending was perfect.", "A funny film. However, the ending was sad.", "In the end, the hero saves everyone. I loved it."],
        x: [["stranger things the end was good", -1], ["i watched a movie about dogs", -1]]
      },
      {
        c: "Imagine you planned a beach day, but in the end it rained all day. What would you do instead?",
        he: "תכננתם יום בים וירד גשם כל היום. מה תעשו? למשל: We'd watch films. Otherwise, we'd get bored.",
        a: [],
        o: "Good plan! After all, a rainy day can be fun too.",
        t: ["We'd watch films. Otherwise, we'd get bored.", "In the end, we'd go to a café instead.", "I'd play board games with my friends."],
        x: [["stay home and sleep", -1], ["go to the mall", -1]]
      },
      {
        c: "Before you go! Is there something you thought you'd hate, but you actually loved? What was it, and what changed your mind?",
        he: "משהו שחשבתם שתשנאו ובסוף אהבתם? למשל: I thought I'd hate sushi, but actually I love it.",
        a: [],
        o: "That's the best kind of surprise! Anyway, I'm glad you gave it a chance.",
        t: ["I thought I'd hate sushi, but actually I love it.", "I thought camping was boring. In fact, it was great.", "Actually, I loved the book we read in class."],
        x: [["i hate fish but now i like it", -1], ["the summer camp it was fun", -1]]
      }
    ],
    end: "Anyway, I've had a fabulous time. By the way, come back tomorrow, otherwise I'll miss you!"
  },
  {
    id: "tb2g09", title: "It must be a mystery!",
    he: "פותרים תעלומות עם קוקו ומנחשים עם must, might, can't ו-must have",
    turns: [
      {
        c: "Ooh, look! There's a big box outside my shop with little holes in it, and it's making tiny noises. What do you think might be inside?",
        he: "מה לדעתכם יש בקופסה? למשל: It might be a puppy. או It must be an animal, because of the holes.",
        a: [],
        o: "Ooh, it could be! I'll be brave and open it later.",
        t: ["It might be a puppy or a kitten.", "It must be an animal, because of the holes.", "It could be a present for you."],
        x: [["maybe a cat", -1], ["it must to be an animal", -1]]
      },
      {
        c: "Now listen. The box is very light, and the noise is a chirp, chirp, chirp. Could it be a puppy? What do you think it must be?",
        he: "הקופסה קלה ויש ציוץ. מה זה חייב להיות? למשל: It must be a bird. או It can't be a puppy.",
        a: [
          { k: ["bird birds chick chicks chicken parrot baby_bird duck duckling"], r: "It must be! A little bird, just like me. How exciting." },
          { k: ["not"], n: "know sure", r: "Exactly, it can't be a puppy! A chirping box must hold a bird." },
          { k: ["puppy dog"], r: "A chirping puppy would be very funny! But puppies bark, so it can't be one." }
        ],
        o: "Hmm, let's think. Anything is possible with a mystery box!",
        t: ["It must be a bird, because it's chirping.", "It can't be a puppy. Puppies bark.", "It might be a baby chicken."],
        x: [["it must to be a bird", 0], ["maybe chicken", 0], ["it can't be a dog", 1], ["it is a puppy", 2], ["i do not know", -1], ["a robot", -1]]
      },
      {
        c: "Here's another mystery. A friend didn't answer your messages all evening. What might have happened, do you think?",
        he: "חבר לא ענה כל הערב. מה אולי קרה? למשל: Their phone might have run out of battery.",
        a: [],
        o: "Good thinking! There's probably a simple reason, so no need to worry.",
        t: ["Their phone might have run out of battery.", "He must have fallen asleep early.", "They could have been busy with homework."],
        x: [["maybe he was sleeping", -1], ["she must be busy", -1]]
      },
      {
        c: "And look at this: the shop floor is covered in crumbs, and my cracker jar is empty. Who must have done it?",
        he: "מי אכל את הקרקרים של קוקו? למשל: You must have eaten them yourself! או A mouse might have got in.",
        a: [],
        o: "Ha! It can't have been me. Well, it might have been me.",
        t: ["You must have eaten them yourself!", "A mouse might have got in at night.", "It can't have been a customer."],
        x: [["you eat it", -1], ["maybe the pigeon did it", -1]]
      },
      {
        c: "Last one. Think about ten years from now. What are you bound to do, and what might you do if you're lucky?",
        he: "מה בטוח תעשו בעוד עשר שנים, ומה אולי? למשל: I'm bound to finish school, and I might travel the world.",
        a: [],
        o: "Ooh, I'm sure you'll do amazing things. I'm bound to be proud of you!",
        t: ["I'm bound to finish school, and I might travel the world.", "I'll probably have a job, and I might live abroad.", "I might be a doctor if I study hard."],
        x: [["i must be rich", -1], ["maybe i will be famous", -1]]
      }
    ],
    end: "Mystery solved! The cracker thief must have been me. Thanks for helping, detective. Bye!"
  },
  {
    id: "tb2u01", title: "The beach robot",
    he: "מה דעתכם על הרובוט שמנקה את החוף באשדוד? ממציאים ומביעים דעה",
    turns: [
      {
        c: "Hi! Noam, Tamar and Eli built a robot to clean their beach. Would you rather build a robot like that, or organise a big beach clean-up? Why?",
        he: "הייתם בונים רובוט או מארגנים ניקיון חוף? למשל: I'd build a robot. או I'd organise a clean-up.",
        a: [
          { k: ["robot robots build"], n: "clean_up cleanup organise organize", r: "Ooh, an engineer! Robots never get fed up with rubbish." },
          { k: ["clean_up cleanup organise organize organising organizing people together friends volunteer volunteers"], r: "Lovely! Lots of people working together can do so much." }
        ],
        o: "Good thinking! Every bottle picked up from a beach really matters.",
        t: ["I'd build a robot, because it never gets tired.", "I'd organise a clean-up with lots of people."],
        x: [["build a robot", 0], ["robot is cooler", 0], ["a clean up with my class", 1], ["i would organize people", 1], ["i like the beach", -1]]
      },
      {
        c: "Tamar says they were fed up with seeing rubbish every time they went swimming. What are you fed up with in your area or at school?",
        he: "ממה נמאס לכם בשכונה או בבית הספר? למשל: I'm fed up with people leaving rubbish in the park.",
        a: [],
        o: "I hear you! Being fed up is often the first step to changing something.",
        t: ["I'm fed up with people leaving rubbish in the park.", "I'm fed up with the noise from cars.", "I'm fed up with long queues in the canteen."],
        x: [["i am fed up of dogs poo", -1], ["the noise at night", -1]]
      },
      {
        c: "The first robot kept getting stuck in the wet sand. When you get stuck on a problem, what do you usually do to overcome it?",
        he: "מה אתם עושים כשאתם תקועים בבעיה? למשל: I take a break and then try again.",
        a: [],
        o: "Great strategy! That's how Noam, Tamar and Eli got their robot moving again.",
        t: ["I take a break and then try again.", "I ask someone for help.", "I look for a video that explains it."],
        x: [["i try again and again", -1], ["ask my teacher", -1]]
      },
      {
        c: "Now it's your turn to come up with an invention. What would you invent to make your neighbourhood cleaner or greener?",
        he: "מה הייתם ממציאים כדי שהשכונה תהיה נקייה או ירוקה יותר? למשל: I'd invent a bin that sorts plastic by itself.",
        a: [],
        o: "What a clever idea! The city council should pay for that too.",
        t: ["I'd invent a bin that sorts plastic by itself.", "I'd come up with a drone that picks up litter.", "A bench that charges phones with solar power."],
        x: [["a robot that pick up garbage", -1], ["trees on every roof", -1]]
      },
      {
        c: "Final question! The council agreed to pay for two more robots. Do you think that's a good way to spend the city's money? Why or why not?",
        he: "זה שימוש טוב בכסף של העירייה? למשל: Yes, a clean beach helps everyone. או No, they should teach people.",
        a: [
          { k: ["yes good great worth agree smart right"], n: "not waste expensive", r: "Me too! A clean beach is good for everyone." },
          { k: ["no not waste expensive better instead teach bad"], n: "know sure", r: "Fair point. Maybe people should just stop dropping rubbish." }
        ],
        o: "Good thinking. Cities always have to choose what matters most.",
        t: ["Yes, because a clean beach helps everyone.", "No, they should teach people not to drop rubbish."],
        x: [["yes good idea", 0], ["yes it is worth it", 0], ["no it is expensive", 1], ["waste of money", 1], ["robots are cute", -1]]
      }
    ],
    end: "Thanks for talking! I've come up with an idea too: a robot that brings me crackers. Bye!"
  },
  {
    id: "tb2u03", title: "Biscuit loves stories",
    he: "מה דעתכם על הכלב ביסקוויט שמקשיב לילדים שקוראים? מביעים דעה ומנמקים",
    turns: [
      {
        c: "Woof! That's my best dog impression. Oliver says dogs don't laugh when you make a mistake. Why do you think reading to a dog makes children more confident?",
        he: "למה קריאה לכלב עוזרת לילדים להרגיש בטוחים? למשל: Because dogs don't judge you.",
        a: [],
        o: "Lovely thinking. A friendly listener can make anyone feel braver.",
        t: ["Because dogs don't judge you.", "A dog is calm, so you feel relaxed.", "You're not scared of making mistakes."],
        x: [["because the dog don't laugh", -1], ["dogs are nice and quiet", -1]]
      },
      {
        c: "Be honest! If there were a reading dog at your library, would you take a turn reading to it, or would you feel a bit silly?",
        he: "הייתם קוראים לכלב או מרגישים קצת מטופשים? למשל: Yes, I'd love to. או I'd feel a bit silly.",
        a: [
          { k: ["yes love turn read cute fun sure definitely"], n: "silly not strange weird", r: "Fabulous! Biscuit would love a new reader." },
          { k: ["silly strange weird embarrassing embarrassed shy no not funny old"], n: "know sure", r: "Ha, that's honest! Biscuit wouldn't mind, he's very patient." }
        ],
        o: "Thanks for being honest. Biscuit is happy either way.",
        t: ["Yes, I'd love to read to a dog.", "I'd feel a bit silly, to be honest."],
        x: [["yes i will read to him", 0], ["it is cute", 0], ["i feel silly", 1], ["no i'm too old for this", 1], ["i have a cat", -1]]
      },
      {
        c: "If you could choose any animal as your reading buddy, which one would it be, and what book would you read to it?",
        he: "איזו חיה הייתם בוחרים כחברה לקריאה, ואיזה ספר? למשל: A cat, and I'd read it a detective story.",
        a: [],
        o: "Ooh, what a pair! I'd love to listen in on that.",
        t: ["A cat, and I'd read it a detective story.", "A horse, and I'd read it Harry Potter.", "A parrot like you, and a funny comic."],
        x: [["a dog and harry potter", -1], ["my cat a book about fish", -1]]
      },
      {
        c: "At first, some parents doubted whether it would work. Why do you think adults sometimes doubt new ideas like this one?",
        he: "למה מבוגרים לפעמים לא מאמינים לרעיונות חדשים? למשל: Because they're used to the old way.",
        a: [],
        o: "Good point. New ideas often sound strange before they prove themselves.",
        t: ["Because they're used to the old way.", "They think it's just a game.", "Maybe they think dogs are too noisy."],
        x: [["because it is strange", -1], ["they don't believe dogs help", -1]]
      },
      {
        c: "One last idea before I go. There's now a waiting list for Biscuit. What other fun idea could help shy kids practise reading or speaking?",
        he: "איזה רעיון נוסף יעזור לילדים ביישנים לתרגל קריאה? למשל: Kids could read to younger children.",
        a: [],
        o: "That's such a creative idea. Rosewood Library should hire you!",
        t: ["Kids could read to younger children.", "They could record themselves reading at home.", "A reading club with snacks and games."],
        x: [["read to a cat", -1], ["play theatre with friends", -1]]
      }
    ],
    end: "Biscuit would be proud of you! Thanks for reading and talking with me. Bye!"
  },
  {
    id: "tb2u04", title: "Growing your own lunch",
    he: "מה דעתכם על הגינה של בית הספר באוקפילד? מתכננים ומביעים דעה",
    turns: [
      {
        c: "Fresh from the garden! Zoe used to hate vegetables, but now she eats them because she grows them. Do you think growing your own food would change what you eat?",
        he: "לגדל אוכל בעצמכם היה משנה מה אתם אוכלים? למשל: Yes, I'd eat what I grew. או Not really.",
        a: [
          { k: ["no not never"], n: "know sure", r: "Fair enough! Some vegetables are hard to love, even if you grow them." },
          { k: ["yes maybe probably definitely sure change think"], n: "not_sure", r: "Me too! Food tastes better when you've worked for it." }
        ],
        o: "Fair enough! Zoe's story surprised a lot of people.",
        t: ["Yes, I'd want to eat what I grew.", "Not really, I still wouldn't like broccoli."],
        x: [["yes i think so", 1], ["no i hate vegetables", 0], ["maybe a little", 1], ["i like tomatoes", -1], ["not sure", -1], ["i don't think so", 0]]
      },
      {
        c: "Mister Ahmed wanted his classes to spend more time outdoors. Which lesson would you love to have outside, and how would it be different?",
        he: "איזה שיעור הייתם רוצים בחוץ, ולמה? למשל: Science, because we could study real plants.",
        a: [],
        o: "Ooh, that sounds like a fabulous lesson. Fresh air makes everything better.",
        t: ["Science, because we could study real plants.", "English, so we could read under a tree.", "Art, because we could draw nature."],
        x: [["sport of course", -1], ["math outside will be more fun", -1]]
      },
      {
        c: "The pupils take it in turns to water the plants. In a group project, would you rather have one fixed job, or take turns doing different things? Why?",
        he: "בפרויקט קבוצתי: תפקיד קבוע או להתחלף? למשל: Take turns. או A fixed job, because I like being an expert.",
        a: [
          { k: ["turn turns different change switch variety"], r: "Nice! Taking turns means everyone learns a bit of everything." },
          { k: ["fixed fix one same"], r: "Smart. Doing one job well can make the whole team stronger." }
        ],
        o: "Interesting! Both ways can work, as long as everyone helps.",
        t: ["Take turns, so it never gets boring.", "A fixed job, because I like being an expert."],
        x: [["taking turns", 0], ["different things every time", 0], ["one job is better", 1], ["fix job", 1], ["i like gardens", -1]]
      },
      {
        c: "They raised over three hundred pounds selling tomatoes at the school fair. If your class wanted to raise money for something, what would you sell?",
        he: "מה הייתם מוכרים כדי לגייס כסף לכיתה? למשל: We'd sell homemade cookies and lemonade.",
        a: [],
        o: "Great idea! I'd buy one myself, with my cracker money.",
        t: ["We'd sell homemade cookies and lemonade.", "We could sell bracelets we make ourselves.", "I'd sell old books and toys."],
        x: [["cakes and cookies", -1], ["we will sell drawings", -1]]
      },
      {
        c: "My last question for today. Other schools now hope to do the same. Should every school have a garden, or is it too much work? Why?",
        he: "לכל בית ספר צריכה להיות גינה? למשל: Yes, every school should have one. או It's too much work.",
        a: [
          { k: ["yes every should agree good great idea"], n: "not bad", r: "I agree! Every school could use a bit more green." },
          { k: ["no not work hard much difficult time bad"], n: "know sure", r: "That's fair. Gardens need a lot of care, especially in summer." }
        ],
        o: "Hmm, true. A garden is a big project, but a fun one.",
        t: ["Yes, every school should have one.", "It's too much work for the teachers."],
        x: [["yes every school", 0], ["it's a good idea", 0], ["too much work", 1], ["no because the summer is hot", 1], ["tomatoes are fruit", -1]]
      }
    ],
    end: "That was a fruitful chat, just like a tomato! Thanks for growing it with me. See you soon!"
  },
  {
    id: "tb2v03", title: "Read all about it!",
    he: "מדברים עם קוקו על חדשות ברשת, עם a headline, a source, reliable, clickbait ו-go viral",
    turns: [
      {
        c: "Breaking news! A video of me dancing almost went viral yesterday. In your opinion, what kind of videos usually go viral, and why?",
        he: "אילו סרטונים הופכים לויראליים, ולמה? למשל: Funny animal videos always go viral.",
        a: [],
        o: "Ha! I should make one of those. My dancing needs all the help it can get.",
        t: ["Funny animal videos always go viral.", "Videos of people doing crazy challenges.", "Short clips with catchy music go viral."],
        x: [["funny videos of cats", -1], ["dance videos because people copy", -1]]
      },
      {
        c: "Here's a headline: You Won't Believe What This Parrot Did Next! Is that clickbait? How can you tell when a headline is clickbait?",
        he: "איך מזהים כותרת שהיא clickbait? למשל: It says you won't believe what happened.",
        a: [],
        o: "Good thinking! Clickbait is everywhere, so it's smart to stay alert.",
        t: ["It says you won't believe what happened.", "The headline is too dramatic to be true.", "It doesn't tell you the real story."],
        x: [["yes because it is too exciting", -1], ["it want you to click", -1]]
      },
      {
        c: "Which source would you trust more for news: a famous influencer or a news website? Why do you think it's more reliable?",
        he: "על מי תסמכו יותר: משפיען או אתר חדשות? למשל: A news website, because journalists check facts.",
        a: [
          { k: ["depends depend both neither none"], r: "Smart! It always depends on who's behind it." },
          { k: ["website site news newspaper journalist journalists"], r: "Good choice. Good journalists usually check their facts." },
          { k: ["influencer influencers famous"], r: "Interesting! Some influencers are careful, but always check their source." }
        ],
        o: "Good thinking. The key is to check where a story comes from.",
        t: ["A news website, because journalists check facts.", "An influencer, because I know them well.", "It depends on who it is."],
        x: [["the news website", 1], ["newspaper is more reliable", 1], ["influencer because he is honest", 2], ["it depends", 0], ["i don't read", -1]]
      },
      {
        c: "A biased report only shows one side. What usually happens when you hear only one side of a story, for example in an argument between friends?",
        he: "מה קורה כששומעים רק צד אחד של סיפור? למשל: You get the wrong idea about what happened.",
        a: [],
        o: "Good point. That's why it's always fair to hear both sides.",
        t: ["You think one friend is right, but maybe they aren't.", "You get the wrong idea about what happened.", "It's not fair, so I ask the other person too."],
        x: [["you don't know the truth", -1], ["you are angry at the wrong person", -1]]
      },
      {
        c: "Before you go! If you were a journalist for one day, what story would you cover, and who would you interview?",
        he: "אילו הייתם עיתונאים ליום אחד, על מה הייתם מדווחים? למשל: I'd cover a football match and interview the players.",
        a: [],
        o: "What a story! I'd read every word of that coverage.",
        t: ["I'd cover a big football match and interview the players.", "I'd write about animals and interview a vet.", "I'd cover a music festival and talk to the bands."],
        x: [["i will interview messi", -1], ["a story about the sea and fish", -1]]
      }
    ],
    end: "That's a wrap from Coco News! Remember to check the source before you share. Bye!"
  },
  {
    id: "tb2v04", title: "Coco the peacemaker",
    he: "מדברים עם קוקו על ויכוחים ופיוס, עם negotiate, an ally, a compromise ו-resolve",
    turns: [
      {
        c: "Phew, what a morning! Two pigeons had a conflict over my birdseed today, so I helped them negotiate. What's the best way to resolve an argument with a friend?",
        he: "מה הדרך הכי טובה ליישב ויכוח עם חבר? למשל: Talk calmly and listen to each other.",
        a: [],
        o: "Wise words! I'll share that with the pigeons.",
        t: ["Talk calmly and listen to each other.", "Say sorry, even if it's not all your fault.", "Wait until you're both calm, then talk."],
        x: [["say sorry and hug", -1], ["talk about the problem", -1]]
      },
      {
        c: "Have you ever negotiated for something, like more screen time or a later bedtime? How did you convince them?",
        he: "ניהלתם פעם משא ומתן על משהו? איך שכנעתם? למשל: I promised to finish my homework first.",
        a: [
          { k: ["promise promised said told explain explained offer offered deal agree agreed yes homework chores dishes clean extra"], n: "never not", r: "Smart move! You'd make a great negotiator." },
          { k: ["no never not"], n: "know sure", r: "Maybe one day! Negotiating is a great skill to practise." }
        ],
        o: "Ooh! Negotiating takes patience and good ideas.",
        t: ["I promised to finish my homework first.", "I said I'd wash the dishes for a week.", "No, I've never really tried."],
        x: [["i promised to clean my room", 0], ["i offered a deal", 0], ["no never", 1], ["i didn't try", 1], ["i cried", -1]]
      },
      {
        c: "In a game, would you rather have one strong ally or lots of weaker ones? Why?",
        he: "במשחק: בעל ברית אחד חזק או הרבה חלשים? למשל: One strong ally, because I can trust them.",
        a: [
          { k: ["one_strong strong_ally single just_one only_one"], r: "One strong ally! Loyalty matters most, I see." },
          { k: ["lots many weaker weak numbers group more"], r: "Lots of allies! There's strength in numbers." }
        ],
        o: "Interesting strategy! Allies make every game more fun.",
        t: ["One strong ally, because I can trust them.", "Lots of weaker ones, because there's strength in numbers."],
        x: [["one strong ally", 0], ["only one but strong", 0], ["many allies", 1], ["lots of weak ones", 1], ["i play alone", -1]]
      },
      {
        c: "Imagine you and a friend want to watch different films tonight. What compromise could you suggest, so that you both feel happy?",
        he: "איזו פשרה (compromise) הייתם מציעים? למשל: We watch one film tonight and the other one tomorrow.",
        a: [],
        o: "What a fair idea! Everybody wins with a compromise like that.",
        t: ["We watch one film tonight and the other one tomorrow.", "We choose a third film that we both like.", "One of us picks the film, the other picks the snacks."],
        x: [["we watch half of each film", -1], ["we toss a coin to decide", -1]]
      },
      {
        c: "Last one. Imagine two neighbouring villages sign an agreement, like a little peace treaty, to protect the river they share. What rules should it include?",
        he: "אילו כללים הייתם כותבים בהסכם בין שני כפרים להגנה על הנהר? למשל: No factories can throw rubbish into the river.",
        a: [],
        o: "Excellent rules! You'd be a fabulous peacemaker.",
        t: ["No factories can throw rubbish into the river.", "Both villages share the water fairly.", "They clean the river together every year."],
        x: [["no plastic in the water", -1], ["they clean it together", -1]]
      }
    ],
    end: "A truce with the pigeons, peace in my shop, and a new ally: you! Thanks, and see you soon!"
  },
  {
    id: "tb2v05", title: "Coco's travel agency",
    he: "מתכננים חופשה עם קוקו, עם sightseeing, an itinerary, a tourist trap ו-accommodation",
    turns: [
      {
        c: "Welcome to Coco's Travel Agency! Do you prefer a holiday full of sightseeing, or one where you just relax by the pool? Why?",
        he: "מעדיפים חופשה של סיורים או של מנוחה ליד הבריכה? למשל: Sightseeing, because I love exploring.",
        a: [
          { k: ["both mix bit"], r: "The best of both worlds! A bit of sightseeing, then the pool." },
          { k: ["sightseeing sight sights see museum museums explore exploring visit tour tours"], r: "An explorer! I'll print you a busy itinerary." },
          { k: ["relax relaxing pool beach rest chill lazy swim swimming sleep"], r: "Lovely. Accommodation with a pool and nothing to do!" }
        ],
        o: "Lovely! Every traveller likes something different.",
        t: ["Sightseeing, because I love exploring new places.", "Relaxing by the pool, it's a holiday after all.", "A mix of both, to be honest."],
        x: [["sightseeing for sure", 1], ["i want to see museums", 1], ["chill by the pool", 2], ["both", 0], ["i want to go to italy", -1]]
      },
      {
        c: "Every good trip needs an itinerary. If you had three days in a big city, what would you put on yours?",
        he: "מה הייתם שמים במסלול של שלושה ימים בעיר גדולה? למשל: A museum, a football stadium and a market.",
        a: [],
        o: "What a fabulous itinerary! You'd make a great travel agent.",
        t: ["A museum, a football stadium and a famous market.", "Day one sightseeing, day two shopping, day three the zoo.", "A guided tour, then the best pizza in town."],
        x: [["shopping and restaurants", -1], ["the eiffel tower and disneyland", -1]]
      },
      {
        c: "Have you ever been somewhere that felt like a tourist trap, with huge crowds and crazy prices? What made it feel that way?",
        he: "הייתם פעם במלכודת תיירים? למשל: Yes, a café where ice cream cost ten euros! או No, never.",
        a: [
          { k: ["yes expensive crowded crowd crowds price prices queue queues long busy cost"], n: "never", r: "Ugh, tourist traps! Next time we'll go off the beaten track." },
          { k: ["no never not"], n: "know sure", r: "Lucky you! Keep looking for hidden places off the beaten track." }
        ],
        o: "Thanks for sharing! Some famous places really are worth the crowds.",
        t: ["Yes, a café where ice cream cost ten euros!", "No, I've never really been to one."],
        x: [["yes in paris it was expensive", 0], ["the beach was so crowded", 0], ["no never", 1], ["not really", 1], ["i was in eilat", -1]]
      },
      {
        c: "When you travel, what kind of accommodation sounds best to you: a big hotel, a tent, a cabin in the forest, or something totally different?",
        he: "איפה הכי הייתם רוצים לישון בטיול? למשל: A cabin in the forest sounds amazing.",
        a: [],
        o: "Ooh, I'd book that for you right away!",
        t: ["A cabin in the forest sounds amazing.", "A big hotel with a pool, please.", "A tent near a lake would be fun."],
        x: [["hotel with breakfast", -1], ["a tree house in the jungle", -1]]
      },
      {
        c: "Final question! Flights are expensive in peak season. Would you travel in winter to save money, even if it's cold? Why?",
        he: "הייתם טסים בחורף כדי לחסוך, גם אם קר? למשל: Yes, I'd save money. או No, I want sun.",
        a: [
          { k: ["yes sure definitely of_course save cheap cheaper"], n: "not", r: "Clever! Fewer crowds, lower prices, and cosy jumpers." },
          { k: ["no not summer hate sun"], n: "know sure", r: "Fair enough! Some trips are just made for summer." }
        ],
        o: "Fair enough! Every season has its own kind of magic.",
        t: ["Yes, I'd save money and avoid the crowds.", "No, I want sun and the beach."],
        x: [["yes for cheaper flights", 0], ["of course", 0], ["no i hate cold", 1], ["i don't like winter", 1], ["i want to fly", -1]]
      }
    ],
    end: "Your holiday is booked: flights, accommodation and a guided tour with me! Have a great trip!"
  },
  {
    id: "tb2l04", title: "Backstage with Coco",
    he: "מה דעתכם על אלה ברוקס והחיים מאחורי הקלעים? מביעים דעה ומנמקים",
    turns: [
      {
        c: "Lights up! Ella says her life isn't as glamorous as people think. Which part of her day surprised you most, and why?",
        he: "מה הפתיע אתכם ביום של אלה? למשל: That she goes to the gym on show days.",
        a: [],
        o: "Ooh, good choice! Show business is full of surprises.",
        t: ["That she goes to the gym on show days.", "That hair and make-up take ages.", "That she sleeps late every day."],
        x: [["she walk her dog", -1], ["the gym part because she is tired", -1]]
      },
      {
        c: "Ella learns her lines while she's walking her dog. What's your best trick for remembering things, like words for a test?",
        he: "מה הטריק שלכם לזכור דברים? למשל: I write them on cards and test myself.",
        a: [],
        o: "That's a clever trick! I might try it with my shop prices.",
        t: ["I say them out loud while I walk around.", "I write them on cards and test myself.", "I make a funny song with the words."],
        x: [["i read again and again", -1], ["i write it many times", -1]]
      },
      {
        c: "She still gets stage fright every single night. Would you like to perform on a stage one day, or would the nerves be too much?",
        he: "הייתם רוצים להופיע על במה? למשל: Yes, I'd love to be in a musical. או No, the nerves would be too much.",
        a: [
          { k: ["yes love like sure definitely want fun"], n: "not never shy scared nervous afraid", r: "Fabulous! I'll be in the front row with a cracker." },
          { k: ["no not never nerves nervous scared shy fright stress afraid"], n: "know sure", r: "That's honest. Ella says the nerves can turn into energy, though." }
        ],
        o: "I get it. The stage is exciting and scary at the same time.",
        t: ["Yes, I'd love to be in a musical.", "No, the nerves would be too much for me."],
        x: [["yes i want to act", 0], ["i would love it", 0], ["no i'm too shy", 1], ["i will be so scared", 1], ["i watch movies", -1]]
      },
      {
        c: "Her microphone stopped working, so she just sang louder and kept going. What would you have done if that had happened to you?",
        he: "מה הייתם עושים אילו המיקרופון היה מפסיק לעבוד? למשל: I'd have kept singing, just like Ella.",
        a: [],
        o: "Great thinking under pressure! The show must go on.",
        t: ["I'd have kept singing, just like Ella.", "I would have laughed and asked for a new microphone.", "I'd probably have frozen for a second."],
        x: [["i will stop and cry", -1], ["i would sing more loud", -1]]
      },
      {
        c: "One more before I fly off. Actors say break a leg instead of good luck. What do you do or say to wish a friend luck before something big?",
        he: "מה אתם אומרים לחבר לפני משהו גדול? למשל: I tell them you've got this, and give them a high five.",
        a: [],
        o: "That's lovely. Your friends are lucky to have you.",
        t: ["I tell them you've got this, and give them a high five.", "I tell them to break a leg, like actors do.", "I send them a funny message before it starts."],
        x: [["good luck you can do it", -1], ["i hug them", -1]]
      }
    ],
    end: "Break a leg in everything you do! Thanks for coming backstage with me. Bye!"
  },
  {
    id: "tb2l05", title: "Coco's party tips",
    he: "מה דעתכם על העצות של בן ויעל למסיבות? מתרגלים שיחת היכרות ושאלות פתוחות",
    turns: [
      {
        c: "Hi, party people! Yael spent a whole party next to the snacks, pretending to read messages. Why do you think people do that at parties?",
        he: "למה אנשים מעמידים פנים שהם בטלפון במסיבה? למשל: Because they don't know anyone there.",
        a: [],
        o: "So many people do it! A phone is the perfect hiding place at a party.",
        t: ["Because they don't know anyone there.", "They feel awkward and don't know what to say.", "It's easier than starting a conversation."],
        x: [["they are shy", -1], ["because they feel alone", -1]]
      },
      {
        c: "Ben says open questions break the ice. Let's practise! Imagine I'm a guest at a party. What open question would you ask me to start a conversation?",
        he: "שאלו את קוקו שאלה פתוחה, לא כן או לא. למשל: How do you know the birthday girl?",
        a: [
          { k: ["how", "know"], r: "I know the birthday girl from my clothes shop! Great opener." },
          { k: ["what", "do like favourite favorite think"], r: "Ooh, I love fashion and crackers! See, I'm talking already." },
          { k: ["where why when how what which"], r: "Great open question! Now I have to give a long answer." }
        ],
        o: "That's a start! Questions with how, what or why get people talking even more.",
        t: ["How do you know the birthday girl?", "What do you like doing at weekends?", "Where did you get that amazing hat?"],
        x: [["how do you know the birthday girl", 0], ["what is your favourite song", 1], ["where are you from", 2], ["do you like the music", -1], ["how was your day", 2]]
      },
      {
        c: "Ben really listens, so he can ask another question. Why do you think listening matters more than talking when you meet someone new?",
        he: "למה להקשיב חשוב יותר מלדבר? למשל: Because people love talking about themselves.",
        a: [],
        o: "So true. People remember how you made them feel, not just what you said.",
        t: ["Because people love talking about themselves.", "If you listen, you know what to ask next.", "It shows you care about the other person."],
        x: [["because it is polite", -1], ["you learn about the person", -1]]
      },
      {
        c: "Yael never knows how to end a conversation. What would you say to leave a chat politely, without being rude?",
        he: "איך מסיימים שיחה בנימוס? למשל: It was nice talking to you, I'm going to get a drink.",
        a: [],
        o: "Perfect! Friendly and honest, just like Ben said.",
        t: ["It was nice talking to you, I'm going to get a drink.", "Sorry, I have to find my friend. See you later!", "I'm going to get some snacks. Talk later!"],
        x: [["bye it was nice", -1], ["i need to go to the toilet", -1]]
      },
      {
        c: "Here's my final question. Scientists found that people like us more than we think. Does that make you feel braver about talking to new people? Why?",
        he: "זה נותן לכם אומץ לדבר עם אנשים חדשים? למשל: Yes, it makes me more confident. או Not really, I'm still shy.",
        a: [
          { k: ["yes braver brave better good confident definitely sure"], n: "not still", r: "Me too! Remember the liking gap next time you feel shy." },
          { k: ["no not still shy scared"], n: "know sure", r: "That's okay. Being shy is normal, and small steps really help." }
        ],
        o: "Interesting! Knowing about the liking gap can make a big difference.",
        t: ["Yes, it makes me feel more confident.", "Not really, I'm still a bit shy."],
        x: [["yes much braver", 0], ["it makes me more confident", 0], ["not really", 1], ["i still shy", 1], ["parties are loud", -1]]
      }
    ],
    end: "It was really nice talking to you! I'm going to get a cracker now. See you next time!"
  },
  {
    id: "tb2l06", title: "The shark in the street",
    he: "מה דעתכם על ליאם, שירה והתמונה המזויפת של הכריש? מביעים דעה ומנמקים",
    turns: [
      {
        c: "Hi! Liam gets his news from short videos, and Shira reads headlines on a news app. Whose way is closer to yours, and why?",
        he: "הדרך של מי דומה לשלכם, של ליאם או של שירה? למשל: Liam's, because I watch lots of short videos.",
        a: [
          { k: ["neither none both"], r: "Fair enough! Everyone has their own news habits." },
          { k: ["liam leam lian video videos clip clips short"], r: "Videos are quick! Just remember Liam's shark." },
          { k: ["shira sheera shirra app read reading headline headlines article website"], r: "Nice! Reading the whole article gives you the full story." },
          { k: ["not"], n: "know sure", r: "Fair enough! Not everyone follows the news every day." }
        ],
        o: "Thanks! Everyone finds their news in a different way.",
        t: ["Liam's, because I watch lots of short videos.", "Shira's, I read the headlines every morning.", "Neither, I don't really follow the news."],
        x: [["like liam videos", 1], ["shira because i read", 2], ["i use an app", 2], ["neither", 0], ["i don't watch news", 3], ["my dad tells me", -1]]
      },
      {
        c: "Liam shared a fake photo of a shark swimming through a flooded town because it looked so real. Why do you think fake pictures spread so fast?",
        he: "למה תמונות מזויפות מתפשטות כל כך מהר? למשל: Because people share without thinking.",
        a: [],
        o: "Good point. A surprising picture can travel faster than the truth.",
        t: ["Because they're exciting and people share without thinking.", "People want to be the first to share.", "They look real, so nobody checks."],
        x: [["because they are funny", -1], ["people don't check it", -1]]
      },
      {
        c: "Now Liam waits if a story makes him really angry or amazed. Do you think that's a good rule? Would you follow it yourself?",
        he: "לחכות לפני ששולחים הלאה: כלל טוב? למשל: Yes, it's a smart rule. או Not always, sometimes I share fast.",
        a: [
          { k: ["yes good great smart agree follow sure right"], n: "not", r: "Me too. A few minutes of waiting can stop a fake story." },
          { k: ["no not hard difficult fast quick bad"], n: "know sure", r: "That's honest! Waiting is hard when a story is exciting." }
        ],
        o: "Hmm. It's a simple rule, but not always an easy one.",
        t: ["Yes, it's a smart rule, so I'd follow it.", "Not always, sometimes I share fast."],
        x: [["yes good rule", 0], ["i agree with liam", 0], ["no i share fast", 1], ["it's not easy", 1], ["sharks are cool", -1]]
      },
      {
        c: "Shira checks who posted a story first. If you saw an amazing story online, what would you do to check whether it's true?",
        he: "איך תבדקו אם סיפור ברשת אמיתי? למשל: I'd look for the same story on a news website.",
        a: [],
        o: "Excellent! That's exactly how a fact-checker works.",
        t: ["I'd look for the same story on a news website.", "I'd check who posted it first.", "I'd ask someone I trust."],
        x: [["search in google", -1], ["i will ask my friends", -1]]
      },
      {
        c: "Before you go! Imagine the school radio club asks you for one tip about fake news. What would your tip be?",
        he: "מה הטיפ שלכם על חדשות מזויפות? למשל: Stop and check before you share anything.",
        a: [],
        o: "Fabulous tip! I'd play that on the school radio every morning.",
        t: ["Stop and check before you share anything.", "If it's too amazing, it's probably fake.", "Always look at the source first."],
        x: [["don't believe everything", -1], ["check the source", -1]]
      }
    ],
    end: "That's all from Coco Radio! Stop, check, and then share. See you next time!"
  },
  {
    id: "tb2l07", title: "Trips into film worlds",
    he: "מה דעתכם על תיירות סרטים ועל מה ש-Lucy סיפרה? מביעים דעה ומנמקים",
    turns: [
      {
        c: "Hello! Lucy says fans travel to film sets to step inside a story they love. Which place from a film or TV show would you most like to visit, and why?",
        he: "לאיזה מקום מסרט או מסדרה הייתם רוצים לנסוע? למשל: Hobbiton, because the little round doors look so cosy.",
        a: [],
        o: "Ooh, fabulous choice! I'd pack my best travel hat for that.",
        t: ["Hobbiton, because the little round doors look so cosy.", "Hogwarts, because I love the Harry Potter films.", "The beach from my favourite animated film."],
        x: [["the castle from frozen because it is beautiful", -1], ["i want to see hogwarts", -1]]
      },
      {
        c: "People queue for an hour to take a photo with the trolley at King's Cross. Would you wait that long for one photo? Why or why not?",
        he: "הייתם מחכים שעה בתור בשביל תמונה אחת? למשל: Yes, it would be worth it. או No, an hour is too long.",
        a: [
          { k: ["no not never long boring waste"], n: "know sure", r: "Fair enough! An hour is a long time for one click." },
          { k: ["yes sure definitely worth wait of_course"], r: "A true fan! That photo would be worth every minute." }
        ],
        o: "Interesting! Queues are part of almost every big trip.",
        t: ["Yes, it would be worth it for a great photo.", "No, an hour is too long for one photo."],
        x: [["yes it is worth it", 1], ["of course i will wait", 1], ["no it is too long", 0], ["i will not wait", 0], ["i love harry potter", -1]]
      },
      {
        c: "Film tourism brings jobs and money to small towns, but it can also bring huge crowds. Is it mostly good or mostly bad for a place? Why?",
        he: "תיירות סרטים טובה או רעה למקום? למשל: Mostly good, because it brings jobs. או Mostly bad, because of the crowds.",
        a: [
          { k: ["both mix depends depend balance"], r: "A bit of both! It depends on how the visitors behave." },
          { k: ["bad crowd crowds crowded damage noise noisy rubbish dirty"], n: "not", r: "Good point. Too many visitors can spoil the very thing they came to see." },
          { k: ["good jobs job money help helps great positive"], r: "Good point. One famous film can change a small town's life." }
        ],
        o: "Interesting! Every place has to find its own balance.",
        t: ["Mostly good, because it brings jobs to small towns.", "Mostly bad, because the crowds can damage the place.", "A bit of both, it depends."],
        x: [["mostly good because of jobs", 2], ["it helps the town", 2], ["bad because of the crowds", 1], ["it is too crowded", 1], ["both", 0], ["it depends on the place", 0], ["i like films", -1]]
      },
      {
        c: "Maya Bay was closed for almost four years so the coral could recover. If you were in charge of a very popular place, what rule would you make for visitors?",
        he: "איזה כלל הייתם קובעים למבקרים במקום פופולרי מאוד? למשל: Only a few hundred visitors a day, with tickets.",
        a: [],
        o: "Sensible rule! Nature would thank you for that.",
        t: ["Only a few hundred visitors a day, with tickets.", "No boats are allowed close to the coral.", "Everyone takes their rubbish home with them."],
        x: [["no swimming near the coral", -1], ["you must buy a ticket first", -1]]
      },
      {
        c: "Before you go! Lucy reminds us that real people live in these places. How can tourists be respectful when they visit a famous spot from a film?",
        he: "איך תיירים יכולים להתנהג בכבוד במקום מפורסם מסרט? למשל: Be quiet near people's homes.",
        a: [],
        o: "Lovely advice. Lucy would be proud of you.",
        t: ["Be quiet near people's homes.", "Don't leave any rubbish behind.", "Buy something from the local shops."],
        x: [["do not shout in the streets", -1], ["say hello to the people who live there", -1]]
      }
    ],
    end: "Thanks for travelling through film worlds with me. Be curious, be respectful, and see you soon!"
  },
  {
    id: "tb2l08", title: "Grandpa's new routine",
    he: "מה דעתכם על הסבא שיצא לגמלאות? מדברים על שגרה ועל מה הייתם עושים",
    turns: [
      {
        c: "Hi again! Grandpa thought he'd love retiring, but after a month he felt lost. Why do you think having no routine made him feel that way?",
        he: "למה בלי שגרה הוא הרגיש אבוד? למשל: Because every day felt the same.",
        a: [],
        o: "Good thinking. A routine gives our days a shape, even for parrots.",
        t: ["Because every day felt the same.", "He didn't have a reason to get up.", "He missed his job and the people there."],
        x: [["he was bored", -1], ["because he don't have work", -1]]
      },
      {
        c: "Do you like having a fixed routine, or do you prefer days where anything can happen? Why?",
        he: "אוהבים שגרה קבועה או ימים מפתיעים? למשל: I like a fixed routine. או I prefer days where anything can happen.",
        a: [
          { k: ["both mix bit depends depend balance"], r: "A bit of both! That sounds like the perfect balance." },
          { k: ["routine fixed plan planned organised organized schedule"], r: "Me too! I always have my crackers at ten o'clock." },
          { k: ["anything free surprise surprises random spontaneous different adventure"], r: "Ooh, an adventurer! Every day is a surprise." }
        ],
        o: "Interesting! Everyone needs a different amount of routine.",
        t: ["I like a fixed routine, it keeps me calm.", "I prefer days where anything can happen.", "A bit of both, to be honest."],
        x: [["routine is better", 1], ["i like plan my day", 1], ["surprise days", 2], ["both", 0], ["i sleep a lot", -1]]
      },
      {
        c: "He started volunteering, driving older people to their appointments. If you could volunteer once a week, what would you like to do, and why?",
        he: "אילו הייתם מתנדבים פעם בשבוע, מה הייתם עושים? למשל: I'd help at an animal shelter, because I love dogs.",
        a: [],
        o: "That sounds really meaningful. Volunteering helps others, and you too.",
        t: ["I'd help at an animal shelter, because I love dogs.", "I'd teach younger kids to read.", "I'd help clean the beach every week."],
        x: [["help old people", -1], ["i will work with animals", -1]]
      },
      {
        c: "Grandpa is taking Spanish lessons online, just for fun! What would you like to learn when you're much older, and why?",
        he: "מה הייתם רוצים ללמוד כשתהיו מבוגרים, סתם בשביל הכיף? למשל: I'd like to learn to paint.",
        a: [],
        o: "Ooh, what a fun plan! It's never too late to learn.",
        t: ["I'd like to learn to paint.", "I want to learn to play the piano.", "Maybe Japanese, because I love anime."],
        x: [["to cook like a chef", -1], ["i want learn to fly a plane", -1]]
      },
      {
        c: "Final question! Imagine you never had to work or study. What would a perfect ordinary day look like for you, from morning to night?",
        he: "איך היה נראה יום מושלם בלי עבודה ובלי לימודים? למשל: I'd sleep late, play football and watch films.",
        a: [],
        o: "Fabulous! That sounds like a day worth getting up for.",
        t: ["I'd sleep late, play football and watch films.", "I'd travel and try new food every day.", "I'd read, cook and meet friends in the evening."],
        x: [["sleep and play games all day", -1], ["go to the beach and eat ice cream", -1]]
      }
    ],
    end: "Thanks for chatting! As Grandpa says, plan your days and keep learning. See you soon!"
  },
  {
    id: "tb2l09", title: "Check the label!",
    he: "מה דעתכם על התאריכים על האוכל ועל בזבוז מזון? מביעים דעה ומנמקים",
    turns: [
      {
        c: "Oh dear! I just found crackers past their best before date. Doctor Martins says dry food is usually fine. Would you eat them, or throw them away?",
        he: "הייתם אוכלים קרקרים אחרי התאריך? למשל: I'd smell them first, then eat them. או I'd throw them away.",
        a: [
          { k: ["eat yes taste try smell check fine okay ok"], n: "not never throw", r: "Smart! I'll check them first, just like Doctor Martins says." },
          { k: ["throw away bin no not never"], n: "know sure", r: "A safe choice! Though Doctor Martins says dry crackers can be fine for months." }
        ],
        o: "Hmm, I'll give them a good sniff before I decide.",
        t: ["I'd smell them first, then eat them.", "I'd throw them away, just to be safe."],
        x: [["yes i eat it", 0], ["smell and taste", 0], ["throw them", 1], ["i would not eat", 1], ["i like crackers", -1]]
      },
      {
        c: "He says use your senses: look, smell, and taste a little. Which sense do you trust most when you check food, and why?",
        he: "באיזה חוש אתם הכי סומכים כשבודקים אוכל? למשל: Smell, because bad food smells terrible.",
        a: [
          { k: ["smell smells nose sniff"], r: "The nose knows! As the host said, trust your nose." },
          { k: ["look see eyes eye mould mold colour color"], r: "Good choice. Mould is usually easy to spot." },
          { k: ["taste tongue"], r: "Brave! Just a tiny taste, though." }
        ],
        o: "Good thinking! Using your senses is a smart habit.",
        t: ["Smell, because bad food smells terrible.", "I look at it first to check for mould.", "Taste, but only a tiny bit."],
        x: [["smell", 0], ["my nose", 0], ["i see if there is mold", 1], ["i taste it", 2], ["i ask my mom", -1]]
      },
      {
        c: "About a third of all the food in the world is lost or wasted. Why do you think people throw away so much food?",
        he: "למה אנשים זורקים כל כך הרבה אוכל? למשל: They buy too much at the supermarket.",
        a: [],
        o: "Good point. If we understand why, it's easier to waste less.",
        t: ["They buy too much at the supermarket.", "People don't understand the dates.", "They cook too much and forget the leftovers."],
        x: [["they buy a lot", -1], ["because the food is old", -1]]
      },
      {
        c: "Some British supermarkets removed best before dates from fruit and vegetables. Do you think that's a smart idea, or would it confuse people?",
        he: "להוריד תאריכים מפירות וירקות: רעיון חכם או מבלבל? למשל: It's a smart idea. או It would confuse people.",
        a: [
          { k: ["smart good great yes agree judge clever"], n: "not confuse bad no", r: "I agree! People can judge with their own eyes." },
          { k: ["confuse no not bad worry worried"], n: "know sure", r: "Fair point. Some people really rely on those dates." }
        ],
        o: "Interesting! It's a small change that could make a big difference.",
        t: ["It's a smart idea, people can judge for themselves.", "I think it would confuse people."],
        x: [["good idea", 0], ["yes it is smart", 0], ["it will confused people", 1], ["no bad idea", 1], ["bananas are yellow", -1]]
      },
      {
        c: "Last question, chef! Imagine you run a small café for a week. What's one thing you'd do to waste less food?",
        he: "אילו ניהלתם בית קפה לשבוע, איך הייתם מבזבזים פחות אוכל? למשל: I'd make smoothies from old fruit.",
        a: [],
        o: "Brilliant! Your café would be good for the planet.",
        t: ["I'd give leftovers to people who need food.", "I'd make smoothies from old fruit.", "I'd cook smaller portions and offer seconds."],
        x: [["give the food to poor people", -1], ["make less food", -1]]
      }
    ],
    end: "Thanks for chatting! Remember: check the label, then trust your nose. Bye for now!"
  },
  {
    id: "tb2r02", title: "Coolcations",
    he: "מה דעתכם על חופשות קיץ במקומות קרירים כמו נורווגיה? מביעים דעה ומנמקים",
    turns: [
      {
        c: "Brrr! Ido was disappointed at first, wearing a jacket while his friends posted beach photos. How would you have felt in his place?",
        he: "איך הייתם מרגישים במקום עידו? למשל: I'd have been jealous. או I'd have been excited.",
        a: [],
        o: "That's understandable. Holidays feel different when everyone else seems to be at the beach.",
        t: ["I'd have been jealous of my friends.", "I'd have been excited to try something new.", "I wouldn't care, I love cold weather."],
        x: [["i will be sad", -1], ["happy because i like cold", -1]]
      },
      {
        c: "Then he went kayaking, saw a whale, and played football at midnight. Which of those would you most like to do, and why?",
        he: "מה הייתם הכי רוצים לעשות: קיאקים, לראות לוויתן או כדורגל בחצות? למשל: Seeing a whale!",
        a: [
          { k: ["kayak kayaking kayaks canoe boat paddle"], r: "Kayaking between mountains! That sounds unforgettable." },
          { k: ["whale whales wail"], r: "A whale! I'd fall off my perch with excitement." },
          { k: ["football soccer midnight night"], r: "Football at midnight in daylight! How strange and fabulous." }
        ],
        o: "Ooh, they all sound amazing to me!",
        t: ["Kayaking, because I love being on the water.", "Seeing a whale, it would be amazing.", "Football at midnight, that sounds crazy."],
        x: [["the kayak", 0], ["see the whale", 1], ["play football at night", 2], ["midnight sun", 2], ["all of them", -1]]
      },
      {
        c: "His mum said the trip cost more than a week in Greece, but it was much less stressful. Is a relaxed trip worth paying more for? Why?",
        he: "שווה לשלם יותר על טיול רגוע? למשל: Yes, it's worth it. או Not really, I'd go somewhere cheaper.",
        a: [
          { k: ["yes worth definitely course sure"], n: "not", r: "I agree. A calm, happy trip is worth a lot." },
          { k: ["no not cheaper cheap money expensive"], n: "know sure", r: "Fair point! Saving money means you can travel more often." }
        ],
        o: "Fair enough! Everyone values different things on holiday.",
        t: ["Yes, it's worth it if everyone is happy.", "Not really, I'd go somewhere cheaper."],
        x: [["yes it's worth", 0], ["of course", 0], ["no i prefer cheap", 1], ["it is too expensive", 1], ["greece is nice", -1]]
      },
      {
        c: "Local people in the north worry about crowded roads and rising prices. What could tourists do so that they don't cause the same problems?",
        he: "מה תיירים יכולים לעשות כדי לא ליצור בעיות לתושבים? למשל: They could use buses instead of cars.",
        a: [],
        o: "Smart ideas! Thoughtful tourists make everyone happier.",
        t: ["They could use buses instead of renting cars.", "Visit in different months, not all at once.", "Stay in small local places and respect the rules."],
        x: [["come in winter", -1], ["don't make noise and be nice", -1]]
      },
      {
        c: "My last question for today. Experts think the busiest tourist months may move. If summers keep getting hotter, when would you choose to go on holiday, and why?",
        he: "אם הקיץ ימשיך להתחמם, מתי תצאו לחופשה? למשל: In spring, when it's warm but not too hot.",
        a: [],
        o: "Good choice! Pleasant weather makes any trip better.",
        t: ["In spring, when it's warm but not too hot.", "In autumn, because it's cheaper and quieter.", "Still in summer, but somewhere cool."],
        x: [["in the winter because of the snow", -1], ["summer i love hot", -1]]
      }
    ],
    end: "Thanks for chatting! I'm off to pack my jacket for a coolcation. See you soon!"
  },
  {
    id: "tb2r03", title: "Coco meets the whales",
    he: "מה דעתכם על בינה מלאכותית שמנסה להבין את השפה של הלווייתנים? מביעים דעה ומנמקים",
    turns: [
      {
        c: "Hello! Scientists are using AI to listen to sperm whales. If you could understand one animal's language, which animal would you choose, and why?",
        he: "את השפה של איזו חיה הייתם רוצים להבין? למשל: Dolphins, because they seem so clever.",
        a: [],
        o: "Ooh, fabulous choice! I'd love to hear what it really thinks.",
        t: ["My dog, because I want to know what he's thinking.", "Dolphins, because they seem so clever.", "Cats, to find out why they ignore us."],
        x: [["my cat because she is funny", -1], ["the dolphins they are very smart", -1]]
      },
      {
        c: "A computer can listen to thousands of hours of whale clicks in just a few days. What other huge or boring job would you give to AI?",
        he: "איזו עבודה ענקית או משעממת הייתם נותנים לבינה מלאכותית? למשל: Counting all the birds in a forest.",
        a: [],
        o: "Clever! Let the computer do the boring part, and you do the thinking.",
        t: ["Sorting thousands of old photos.", "Checking my spelling before I hand in my homework.", "Counting all the birds in a forest."],
        x: [["cleaning my room every day", -1], ["read all the books for me", -1]]
      },
      {
        c: "Some scientists say finding patterns isn't the same as understanding meaning. Do you think people will ever really have a conversation with a whale? Why?",
        he: "תהיה פעם שיחה אמיתית עם לווייתן? למשל: Yes, one day, with better AI. או No, clicks are too different from words.",
        a: [
          { k: ["no not never doubt impossible"], n: "know sure", r: "Fair point. A few clicks are a long way from a real chat." },
          { k: ["yes maybe sure definitely possible one_day someday future"], n: "not never", r: "I hope you're right! I'd love to chat with a whale one day." }
        ],
        o: "Interesting! Nobody knows the answer yet, not even the scientists.",
        t: ["Yes, one day, with better AI.", "No, I think whale clicks are too different from words."],
        x: [["yes one day with ai", 1], ["maybe in the future", 1], ["no it is impossible", 0], ["i don't think so", 0], ["whales are so big", -1]]
      },
      {
        c: "The team's first rule is to listen, not to speak, because a message could confuse the whales. Do you think that's a good rule? Why?",
        he: "קודם להקשיב ולא לדבר: כלל טוב? למשל: Yes, because we could scare them. או No, they should try to talk back.",
        a: [
          { k: ["no not disagree"], n: "know sure", r: "Bold! But one wrong click could really confuse a whale family." },
          { k: ["yes good agree right smart sensible fair"], r: "Me too. Listening first is good manners, even under the sea." }
        ],
        o: "Hmm, interesting. Listening carefully is a good start for any conversation.",
        t: ["Yes, it's a good rule, because we could scare them.", "No, I think they should try to talk back."],
        x: [["yes it is a good rule", 1], ["i agree with them", 1], ["no they should try to talk", 0], ["i disagree", 0], ["whales are cool", -1]]
      },
      {
        c: "Last one! Imagine you could leave one short message for the whales, and they'd really understand it. What would you say to them?",
        he: "איזו הודעה קצרה הייתם משאירים ללווייתנים? למשל: Thank you for sharing the ocean with us.",
        a: [],
        o: "That's lovely. I'm sure the whales would click back something kind.",
        t: ["Thank you for sharing the ocean with us.", "Please tell us what all those clicks mean.", "We promise to keep your ocean clean."],
        x: [["hello whales how are you", -1], ["we are sorry about the plastic", -1]]
      }
    ],
    end: "Thanks for diving into whale science with me! Keep listening, and see you soon!"
  },
  {
    id: "tb2r04", title: "Real or deepfake?",
    he: "מה דעתכם על דיפפייק ועל איך מזהים סרטון מזויף? מביעים דעה ומנמקים",
    turns: [
      {
        c: "Ooh, movie magic! Some deepfakes are harmless fun, like putting your face on a superhero in a short film. Which character would you choose, and why?",
        he: "איזו דמות הייתם רוצים להיות בסרט קצר? למשל: I'd be Spider-Man, because he's funny.",
        a: [],
        o: "Ooh, fabulous choice! I'd choose a superhero with bright green feathers.",
        t: ["I'd be Spider-Man, because he's funny.", "Wonder Woman, because she's so strong.", "I'd be a wizard from a fantasy film."],
        x: [["batman because he is cool", -1], ["i want to be iron man", -1]]
      },
      {
        c: "Some tricksters copy a person's voice with a computer and phone people to ask for money. How could people protect themselves from a trick like that?",
        he: "איך אפשר להגן על עצמנו מתרגיל כזה? למשל: Hang up and call the person back.",
        a: [],
        o: "Smart! A little planning makes a trick like that much harder.",
        t: ["Agree on a code word with people you trust.", "Hang up and call the person back.", "Always ask a question only the real person knows."],
        x: [["call back to check", -1], ["don't send money on the phone", -1]]
      },
      {
        c: "Laws say deepfakes must be clearly labelled as made by artificial intelligence. Do you think a label is enough, or should harmful deepfakes be banned completely?",
        he: "מספיק לסמן דיפפייק, או לאסור את המזיקים? למשל: Harmful ones should be banned. או A label is enough.",
        a: [
          { k: ["both"], r: "The best of both! Labels for fun ones, bans for harmful ones." },
          { k: ["ban banned banning forbid forbidden illegal stop"], r: "Strong view! The harm can be serious, so I understand." },
          { k: ["label labels labelled labeled enough yes"], r: "Good point. Clear labels let people decide for themselves." }
        ],
        o: "Good question to think about. Governments everywhere are asking it too.",
        t: ["Harmful ones should be banned completely.", "A label is enough, so people know it's fake.", "Both: labels for fun, bans for harmful ones."],
        x: [["they should be banned", 1], ["ban them", 1], ["label is enough", 2], ["both", 0], ["i don't know", -1]]
      },
      {
        c: "Experts say our best protection is a habit: stop, check the source, and ask whether it could be fake. What clues in a video would make you suspicious?",
        he: "אילו סימנים בסרטון יגרמו לכם לחשוד? למשל: The mouth doesn't match the words.",
        a: [],
        o: "Excellent detective work! Deepfakes won't fool you easily.",
        t: ["The mouth doesn't match the words.", "The voice sounds a bit like a robot.", "The famous person says something really strange."],
        x: [["check the mouth and the eyes", -1], ["search if it's real on google", -1]]
      },
      {
        c: "Last one. Laws move slowly and technology moves fast. In ten years, do you think we'll still be able to tell what's real online? Why?",
        he: "בעוד עשר שנים עוד נצליח להבדיל בין אמת לזיוף? למשל: Yes, there will be better tools. או No, it will be impossible.",
        a: [
          { k: ["yes sure better tools tool probably definitely"], n: "not no", r: "I hope you're right! Smart tools and smart people make a great team." },
          { k: ["no not hard impossible difficult"], n: "know sure", r: "That's worrying, but it's exactly why good habits matter." }
        ],
        o: "Nobody knows for sure, but good habits will always help.",
        t: ["Yes, because there will be better tools to check.", "No, it will be almost impossible."],
        x: [["yes we will", 0], ["yes with ai tools", 0], ["no it's impossible", 1], ["i think it will be very hard", 1], ["maybe", -1]]
      }
    ],
    end: "Thanks, detective! Remember to stop, check, and ask if it could be fake. See you soon!"
  }
]);

// Talk to Coco: B2 home scenes (sb201 to sb215). Format: app/specs/talk.md; rules: app/tools/TALK-WRITING.md.
window.EQ_TALK.b2 = (window.EQ_TALK.b2 || []).concat([
  {
    id: "sb201", title: "Radio Coco: phones at dinner",
    he: "אתם מתקשרים לתוכנית רדיו: האם לאסור טלפונים ליד שולחן האוכל?",
    turns: [
      {
        c: "Good evening, you're live on Radio Coco! Tonight's question: should phones be banned at the dinner table? First, how often do you look at your phone while you're eating?",
        he: "כמה פעמים אתם מסתכלים בטלפון בזמן האוכל? למשל: Almost never. או Sometimes, it depends.",
        a: [
          { k: ["sometimes depends"], r: "Sometimes, fair enough. It usually depends on the day." },
          { k: ["never rarely not no"], n: "not_sure not_know no_idea", r: "Impressive! You're one of the few people who can resist it." },
          { k: ["always often lot usually every all_the_time"], r: "Honest! You're definitely not the only one, believe me." }
        ],
        o: "Thanks for being honest. Let's dig a little deeper.",
        t: ["Almost never, actually.", "Honestly, nearly all the time.", "Sometimes, it depends."],
        x: [["almost never", 1], ["all the time", 2], ["sometimes when i am bored", 0], ["i don't use my phone when i eat", 1], ["i am always on my phone", 2], ["pizza", -1]]
      },
      {
        c: "A listener says: although phones are useful, they ruin conversations. Do you agree with her, or do you think that's exaggerated?",
        he: "מסכימים עם המאזינה? למשל: I agree, phones ruin conversations. או I think that's exaggerated.",
        a: [
          { k: ["partly depends kind sort both little bit sometimes"], r: "A balanced view! It probably depends on the situation." },
          { k: ["agree right true yes definitely totally absolutely"], n: "not disagree", r: "So you're with her! Real conversations need our full attention." },
          { k: ["disagree exaggerate exaggerated not no wrong"], n: "not_sure not_know no_idea", r: "Interesting! So you think phones and good conversations can live together." }
        ],
        o: "That's a thoughtful point. Thank you for sharing it.",
        t: ["I agree, phones ruin conversations.", "I think that's exaggerated.", "Partly, it depends on the situation."],
        x: [["i agree with her", 1], ["yes its true", 1], ["i don't agree", 2], ["it is exaggerated", 2], ["it depends", 0], ["kind of", 0], ["phones are cool", -1]]
      },
      {
        c: "A caller suggests a game: at a meal with friends, everyone puts their phone in a pile, and the first to touch theirs has to sing a song. Would you play?",
        he: "הייתם משחקים במשחק הטלפונים בערימה? למשל: Yes, it sounds really funny. או No, I'd lose in a minute.",
        a: [],
        o: "Ha! Our listeners are already practising their songs.",
        t: ["Yes, it sounds really funny.", "No way, I'd lose in a minute."],
        x: [["yes i will win", -1], ["no i can't sing", -1]]
      },
      {
        c: "Some people say adults use their phones at dinner even more than teenagers do. Do you think that's true?",
        he: "מבוגרים משתמשים בטלפון יותר מבני נוער? למשל: Yes, I think that's true. או No, teenagers use them more.",
        a: [
          { k: ["no not false myth wrong teenagers teens kids"], n: "not_sure not_know no_idea adult adults parents", r: "So teenagers are the real champions! Interesting." },
          { k: ["yes true definitely agree more"], r: "Ha! The adults listening tonight might feel a little guilty." }
        ],
        o: "Maybe it's everyone, at every age, really.",
        t: ["Yes, I think that's true.", "No, teenagers use them more."],
        x: [["yes definitely", 1], ["teenagers use them more", 0], ["it is not true", 0], ["true my uncle always", 1], ["adults use more than teenagers", 1], ["i don't know", -1], ["what", -1]]
      },
      {
        c: "Final question for tonight's show. Where do you think phones are the most annoying: at the cinema, in class, or somewhere else? Why?",
        he: "איפה טלפונים הכי מעצבנים? למשל: At the cinema, because the screens are so bright.",
        a: [],
        o: "Good point! I think lots of listeners would agree with you.",
        t: ["At the cinema, because the screens are so bright.", "In class, because they ring at the worst moment."],
        x: [["in the cinema when they ring", -1], ["on the bus people talk loud", -1]]
      }
    ],
    end: "That's all from Radio Coco tonight. Thanks for calling in, and enjoy your dinner!"
  },
  {
    id: "sb202", title: "The summer camp job",
    he: "ראיון עבודה אצל קוקו: מדריכים צעירים במחנה קיץ",
    turns: [
      {
        c: "Hello, and thanks for coming! Let's play a game: I'm the director of Camp Feather. Why would you like to be a junior counsellor here this summer?",
        he: "למה תרצו לעבוד במחנה? למשל: Because I love working with younger kids.",
        a: [],
        o: "That's a good reason. I like your attitude already.",
        t: ["Because I love working with younger kids.", "I want some experience and lots of fun."],
        x: [["because i like children and games", -1], ["i want to do something in the summer", -1]]
      },
      {
        c: "Tell me about something you enjoy doing. How could it be useful at a summer camp?",
        he: "במה אתם נהנים ואיך זה יעזור במחנה? למשל: I enjoy sports, so I could run games.",
        a: [],
        o: "Excellent. Every camp needs someone like that.",
        t: ["I enjoy sports, so I could run games.", "I love art, so I could lead the crafts."],
        x: [["i like music i can teach songs", -1], ["swimming so i can help at the pool", -1]]
      },
      {
        c: "Here's a situation: on the first day, a young camper feels shy and doesn't want to join the games. What would you do?",
        he: "חניך קטן מתבייש ולא רוצה להצטרף למשחקים. מה תעשו? למשל: I'd give him an easy job in the game.",
        a: [],
        o: "That's a kind and sensible approach.",
        t: ["I'd give them an easy job in the game.", "I would find them a friend to play with."],
        x: [["i will talk to him nicely", -1], ["play a game just with her first", -1]]
      },
      {
        c: "Would you rather run activities outdoors in the sun, or indoors in the art room?",
        he: "פעילות בחוץ או בפנים? למשל: Outdoors, I love the sun. או Indoors, in the art room.",
        a: [
          { k: ["both"], r: "Both! Flexible people are perfect for camp." },
          { k: ["outdoor outdoors outside sun sunny field pool"], r: "Outdoors! Don't forget the sun cream and plenty of water." },
          { k: ["indoor indoors inside art room crafts"], r: "Indoors! The art room will be lucky to have you." }
        ],
        o: "Good. We'll find the perfect place for you.",
        t: ["Outdoors, I love the sun.", "Indoors, in the art room.", "Both are fine with me."],
        x: [["outdoors", 1], ["outside in the sun", 1], ["indoors please", 2], ["in the art room", 2], ["both", 0], ["i dont mind", -1]]
      },
      {
        c: "Camps used to have no screens at all. Do you think campers should be allowed to use their phones in the evening?",
        he: "מותר לחניכים להשתמש בטלפון בערב? למשל: No, camp should be screen-free. או Yes, maybe for an hour.",
        a: [
          { k: ["no not never"], n: "not_sure not_know no_idea", r: "Fair enough. Camp is a chance to switch off for a while." },
          { k: ["yes should allowed hour little"], r: "A reasonable idea. Maybe a short phone time each evening." }
        ],
        o: "Hmm, it's a tough one. Every camp decides differently.",
        t: ["No, camp should be screen-free.", "Yes, maybe for an hour."],
        x: [["no phones at camp", 0], ["they should not", 0], ["yes for one hour", 1], ["yes a little bit", 1], ["i dont know", -1]]
      },
      {
        c: "Last question. Where do you see yourself in a few years, and how could this job help you get there?",
        he: "איפה תהיו בעוד כמה שנים ואיך העבודה תעזור? למשל: I'd like to be a teacher, so this is great practice.",
        a: [],
        o: "Wonderful. This summer could be a great first step.",
        t: ["I'd like to be a teacher, so this is great practice.", "I want to study psychology, and this will help."],
        x: [["i want to be a doctor and work with people", -1], ["i dont know yet maybe travel first", -1]]
      }
    ],
    end: "Thank you! I'm happy to say you've got the job. Welcome to Camp Feather!"
  },
  {
    id: "sb203", title: "Pitch me a film",
    he: "קוקו במאי קולנוע, ואתם ממציאים לו סרט חדש",
    turns: [
      {
        c: "Lights, camera, Coco! I'm a film director, and I need a new idea. What kind of film should we make: a comedy, a thriller, or science fiction?",
        he: "איזה סרט נעשה? למשל: A comedy! או A thriller. או Science fiction.",
        a: [
          { k: ["comedy comedies funny laugh"], r: "A comedy! The world always needs more laughter." },
          { k: ["thriller mystery scary horror suspense"], r: "A thriller! I love a story that keeps people on the edge of their seats." },
          { k: ["science sci_fi scifi space future robot robots alien aliens"], r: "Science fiction! Spaceships, robots and big questions. Fabulous." }
        ],
        o: "Interesting choice! Something different is always exciting.",
        t: ["A comedy, everyone needs a laugh.", "A thriller, full of surprises.", "Science fiction, set in space."],
        x: [["comedy", 0], ["a funny film", 0], ["thriller please", 1], ["something scary", 1], ["science fiction", 2], ["about space", 2], ["a cartoon", -1]]
      },
      {
        c: "Great! Now tell me about the main character. Who is this person, and what do they want more than anything?",
        he: "מי הדמות הראשית ומה היא הכי רוצה? למשל: She's a teenage inventor who wants to fly.",
        a: [],
        o: "Ooh, I can already see the poster.",
        t: ["She's a teenage inventor who wants to fly.", "He's a chef who dreams of cooking in space."],
        x: [["a boy who want to be famous", -1], ["a girl that wants to find her dog", -1]]
      },
      {
        c: "Every good story needs a problem. What gets in the main character's way?",
        he: "מה מפריע לדמות? למשל: Her best friend steals her idea.",
        a: [],
        o: "That's a great twist. The audience will be hooked.",
        t: ["Her best friend steals her idea.", "A storm destroys everything she has built."],
        x: [["nobody believes him", -1], ["she loses her memory", -1]]
      },
      {
        c: "Where should we film it: somewhere here in Israel, or somewhere abroad?",
        he: "נצלם בישראל או בחו\"ל? למשל: In the desert, here in Israel. או Abroad, in Japan.",
        a: [
          { k: ["israel here aviv jerusalem eilat haifa desert negev north galilee beach"], r: "Close to home! There are amazing places here for filming." },
          { k: ["abroad another country london paris york japan america usa iceland europe"], r: "Abroad! Pack your bags, the whole crew is coming." }
        ],
        o: "Lovely. I can picture the opening scene already.",
        t: ["In the desert, here in Israel.", "Abroad, maybe in Japan."],
        x: [["in tel aviv", 0], ["here in israel", 0], ["in the desert", 0], ["abroad", 1], ["in japan", 1], ["on the moon", -1]]
      },
      {
        c: "If you could choose any actor in the world for the main role, who would it be, and why?",
        he: "איזה שחקן או שחקנית תבחרו ולמה? למשל: Zendaya, because she can play anything.",
        a: [],
        o: "Excellent choice! I'll call their agent tomorrow.",
        t: ["Zendaya, because she can play anything.", "Tom Holland, because he's funny and brave."],
        x: [["i would choose someone new", -1], ["timothee chalamet he is a good actor", -1]]
      },
      {
        c: "Last question: what should we call our film, so that people remember it?",
        he: "איך נקרא לסרט? למשל: Let's call it The Last Recipe.",
        a: [],
        o: "Perfect! I can see it in big letters already.",
        t: ["Let's call it The Last Recipe.", "The title should be Wings of Steel."],
        x: [["the girl who flew", -1], ["call it lost in space", -1]]
      }
    ],
    end: "That's a wrap! Thank you, co-director. See you at the premiere!"
  },
  {
    id: "sb204", title: "A year on Mars",
    he: "קוקו מגייס צוות למשימה דמיונית: שנה שלמה על מאדים",
    turns: [
      {
        c: "Hello! I'm putting together a team for a future mission: a whole year living on Mars. Would you volunteer, even though it would be really difficult?",
        he: "הייתם מתנדבים? למשל: Yes, definitely! או No, it's too far. או Maybe, it depends.",
        a: [
          { k: ["maybe depends perhaps"], r: "Thinking carefully first. That's exactly what real astronauts do." },
          { k: ["no not never"], n: "not_sure not_know no_idea", r: "Fair enough! It's a huge decision. Let's imagine it anyway." },
          { k: ["yes sure definitely absolutely of_course love"], n: "not_sure", r: "Brave! Space needs people like you." }
        ],
        o: "Interesting! Let's imagine you're on the team anyway.",
        t: ["Yes, definitely!", "No, it's too far from home.", "Maybe, it depends."],
        x: [["yes of course", 2], ["no way", 1], ["maybe", 0], ["it depends", 0], ["i would not go", 1], ["mars is red", -1]]
      },
      {
        c: "Imagine you're on the rocket. You can only bring three personal things. What would you take, and why?",
        he: "אילו שלושה דברים תיקחו ולמה? למשל: A book, my headphones and a photo of my friends.",
        a: [],
        o: "Good choices. They'd remind you of home every day.",
        t: ["A book, my headphones and a photo of my friends.", "My guitar, a notebook and some chocolate."],
        x: [["my phone and my pillow", -1], ["games because it will be boring", -1]]
      },
      {
        c: "On Mars you can't breathe outside, so you'd spend most of the time indoors. What do you think you'd miss most?",
        he: "למה הכי תתגעגעו? למשל: I think I'd miss the sea the most.",
        a: [],
        o: "I understand. I'd miss flying in the open sky.",
        t: ["I think I'd miss the sea the most.", "I'd miss walking outside with my friends."],
        x: [["my family and my dog", -1], ["fresh food and rain", -1]]
      },
      {
        c: "The team needs one person to cook and one to fix the machines. Which job would you rather get?",
        he: "איזה תפקיד תעדיפו? למשל: I'd rather be the cook. או I'd fix the machines.",
        a: [
          { k: ["cook cooking chef food kitchen"], r: "The cook! Space food needs all the help it can get." },
          { k: ["fix fixing machine machines engineer repair"], r: "The engineer! The whole mission depends on you." }
        ],
        o: "Great, every job on Mars matters.",
        t: ["I'd rather be the cook.", "I'd fix the machines."],
        x: [["cooking", 0], ["i want to be the cook", 0], ["fix the machines", 1], ["engineer", 1], ["doctor", -1]]
      },
      {
        c: "Some people say we should spend the money on problems here on Earth, not on Mars. What do you think?",
        he: "עדיף להשקיע בכדור הארץ או בחלל? למשל: Earth comes first. או Exploring space matters too.",
        a: [
          { k: ["both"], r: "Both, then. A balanced answer, and a very fair one." },
          { k: ["earth here first problems"], r: "Earth matters a lot, that's for sure. A strong point." },
          { k: ["mars space explore exploring future science"], r: "So exploring space matters too. It could help us here one day." }
        ],
        o: "That's a thoughtful answer to a really big question.",
        t: ["Earth comes first, we have big problems.", "Exploring space matters too.", "We should do both."],
        x: [["both are important", 0], ["earth first", 1], ["we have problems here", 1], ["space is the future", 2], ["explore mars", 2], ["aliens", -1]]
      },
      {
        c: "Mission complete! You're back on Earth after a whole year. What's the first thing you'd do?",
        he: "מה הדבר הראשון שתעשו כשתחזרו? למשל: I'd eat a huge pizza with my friends.",
        a: [],
        o: "Welcome home, astronaut! You've definitely earned it.",
        t: ["I'd eat a huge pizza with my friends.", "I'd run to the beach and swim."],
        x: [["sleep in my own bed", -1], ["hug everyone i know", -1]]
      }
    ],
    end: "Thank you, astronaut! Your Mars adventure was out of this world."
  },
  {
    id: "sb205", title: "Whose phone is it?",
    he: "הבלש קוקו מצא טלפון בכיתה. של מי הוא? מסיקים עם must ו-might",
    turns: [
      {
        c: "Detective Coco here. Someone left their phone in the classroom. It has a cover with a football on it. Who might it belong to?",
        he: "של מי הטלפון יכול להיות? למשל: It might belong to someone who plays football.",
        a: [],
        o: "Possible! Let's look for more clues.",
        t: ["It might belong to someone who plays football.", "It could be anyone's, really."],
        x: [["a boy who loves football", -1], ["maybe one of the players", -1]]
      },
      {
        c: "Another clue: the phone keeps playing loud rock music, and the battery is almost empty. What can you guess about the owner?",
        he: "מה אפשר להסיק על הבעלים? למשל: They must love rock music.",
        a: [],
        o: "Hmm, good deduction. You think like a real detective.",
        t: ["They must love rock music.", "They must often forget to charge it."],
        x: [["he likes music very much", -1], ["she is not organised", -1]]
      },
      {
        c: "We have two suspects. Maya was in the library all morning. Ben was in this classroom. Who must the phone belong to?",
        he: "של מי הטלפון חייב להיות? למשל: It must be Ben's. או Maybe Maya's.",
        a: [
          { k: ["ben"], r: "Ben! He was here, so it must be his. Good logic." },
          { k: ["maya maia mia"], r: "Maya is possible, but she was in the library all morning. Let's check Ben too." }
        ],
        o: "Hmm, we can't be sure yet. Let's find out.",
        t: ["It must be Ben's.", "Maybe it's Maya's."],
        x: [["ben", 0], ["it must be ben", 0], ["maya", 1], ["i think maya", 1], ["nobody", -1]]
      },
      {
        c: "We give the phone to Ben, but he says: it can't be mine, mine is in my bag. What do you think happened?",
        he: "מה קרה לדעתכם? למשל: Someone must have taken the wrong phone.",
        a: [],
        o: "Interesting theory! This case is getting complicated.",
        t: ["Someone must have taken the wrong phone.", "Maybe he has two phones."],
        x: [["he is lying", -1], ["maybe it is his friend phone", -1]]
      },
      {
        c: "Finally, the real owner arrives: a teacher! She had borrowed a student's football cover. Did you expect that?",
        he: "ציפיתם לזה? למשל: No, not at all! או Yes, I knew it!",
        a: [
          { k: ["no not never surprise surprised"], n: "not_sure not_know no_idea", r: "Me neither! A good mystery always has a surprise ending." },
          { k: ["yes knew expected thought guess guessed"], r: "Wow, you guessed it! You've got a detective's instinct." }
        ],
        o: "What a twist! Nobody saw that coming.",
        t: ["No, not at all!", "Yes, I knew it!"],
        x: [["no i didn't", 0], ["not at all", 0], ["yes i knew it", 1], ["i expected it", 1], ["the teacher is cool", -1]]
      },
      {
        c: "Case closed! What's a good way to make sure you never lose your own phone?",
        he: "איך לא מאבדים טלפון? למשל: Always keep it in the same pocket.",
        a: [],
        o: "Wise advice. I'll write it on my detective board.",
        t: ["Always keep it in the same pocket.", "Use a bright cover so you can see it."],
        x: [["put it in the bag always", -1], ["dont take it to school", -1]]
      }
    ],
    end: "Another case solved! Thanks for your help, detective. Until the next mystery!"
  },
  {
    id: "sb206", title: "Exam practice: free time",
    he: "מתרגלים עם קוקו בגרות בעל פה: תחביבים וזמן פנוי",
    turns: [
      {
        c: "Hi! Let's practise for an English oral exam. Don't worry, it's just us. What do you enjoy doing in your free time, and why?",
        he: "מה אתם אוהבים לעשות בזמן הפנוי ולמה? למשל: I enjoy playing basketball because it relaxes me.",
        a: [],
        o: "That sounds like a great way to spend your free time.",
        t: ["I enjoy playing basketball because it relaxes me.", "I love drawing, because I can be creative."],
        x: [["i like to play computer games with friends", -1], ["reading books because i love stories", -1]]
      },
      {
        c: "How long have you been doing it, and how did you get into it?",
        he: "כמה זמן אתם עושים את זה ואיך התחלתם? למשל: For five years. A friend got me into it.",
        a: [],
        o: "Thank you. That's a nice story about how it started.",
        t: ["For five years. A friend got me into it.", "Since I was little. My cousin showed me."],
        x: [["two years my brother taught me", -1], ["i started last summer", -1]]
      },
      {
        c: "Do you prefer hobbies that you do alone, or with other people?",
        he: "לבד או עם אחרים? למשל: I prefer doing things alone. או With friends, in a team.",
        a: [
          { k: ["both depends"], r: "Both, depending on your mood. That makes sense." },
          { k: ["alone myself own quiet"], r: "Alone time is valuable. It gives you space to think." },
          { k: ["people others friend friends team group together"], r: "Doing things together often makes them even more fun." }
        ],
        o: "Good answer. Most people need a bit of both.",
        t: ["I prefer doing things alone.", "With friends, in a team.", "It depends on my mood."],
        x: [["alone", 1], ["by myself", 1], ["with my friends", 2], ["in a team", 2], ["it depends", 0], ["i like dogs", -1]]
      },
      {
        c: "Many teenagers say they don't have enough free time because of school. Do you agree, and what would you change?",
        he: "מסכימים שאין מספיק זמן פנוי? מה תשנו? למשל: I agree. I'd give less homework on weekends.",
        a: [],
        o: "That's an honest answer, and a very common feeling.",
        t: ["I agree. I'd give less homework on weekends.", "Not really. I usually find time for my hobbies."],
        x: [["yes too many tests", -1], ["no i have time", -1]]
      },
      {
        c: "If you could learn any new skill this year, what would it be, and why?",
        he: "איזו מיומנות חדשה הייתם לומדים ולמה? למשל: I'd learn the piano, because I love music.",
        a: [],
        o: "Great choice. That skill could open lots of doors.",
        t: ["I'd learn the piano, because I love music.", "Cooking, so that I could make my own meals."],
        x: [["to drive a car", -1], ["i would learn japanese for anime", -1]]
      },
      {
        c: "Last question in our practice. What advice would you give a younger student who wants to find a hobby?",
        he: "איזו עצה תתנו לתלמיד צעיר שמחפש תחביב? למשל: Try lots of things and don't give up quickly.",
        a: [],
        o: "Lovely advice. Any younger student would be lucky to hear it.",
        t: ["Try lots of things and don't give up quickly.", "Choose something that makes you happy, not what others do."],
        x: [["try everything", -1], ["ask your friends what they do", -1]]
      }
    ],
    end: "Well done! You spoke clearly and gave reasons. You're ready for the real exam."
  },
  {
    id: "sb207", title: "Exam practice: technology",
    he: "מתרגלים עם קוקו בגרות בעל פה: טכנולוגיה ובית הספר",
    turns: [
      {
        c: "Let's practise another exam topic: technology. Which piece of technology could you not live without, and why?",
        he: "בלי איזו טכנולוגיה לא הייתם מסתדרים ולמה? למשל: My phone, because I use it for everything.",
        a: [],
        o: "I understand. It's become part of everyday life for most of us.",
        t: ["My phone, because I use it for everything.", "My laptop, because I need it for school and games."],
        x: [["headphones because music", -1], ["the internet of course", -1]]
      },
      {
        c: "Some schools let students use artificial intelligence tools for homework. Do you think that's a good idea?",
        he: "רעיון טוב לתת להשתמש בבינה מלאכותית בשיעורי בית? למשל: Yes, it's useful. או It depends how you use it.",
        a: [
          { k: ["depends partly sometimes some"], r: "A balanced view. It probably depends on how students use it." },
          { k: ["no not bad cheat cheating lazy"], n: "not_sure not_know no_idea", r: "I see your point. Students might stop thinking for themselves." },
          { k: ["yes good great useful help helpful agree"], r: "Interesting. Used well, it could really help students learn." }
        ],
        o: "That's an interesting opinion. Lots of teachers are asking the same question.",
        t: ["Yes, it can be really useful.", "No, students will just cheat.", "It depends how you use it."],
        x: [["yes it is good", 2], ["no because students will cheat", 1], ["it depends how you use it", 0], ["its helpful", 2], ["i don't think so", 1], ["computers", -1]]
      },
      {
        c: "Could you give me an example of how technology has made school life easier, or harder, for you?",
        he: "תנו דוגמה איך הטכנולוגיה הקלה או הקשתה. למשל: It's harder, because I get distracted by notifications.",
        a: [],
        o: "That's a clear example. Examiners love that.",
        t: ["Online homework is easier, because I can work anywhere.", "It's harder, because I get distracted by notifications."],
        x: [["i can find information fast", -1], ["the teacher send everything on the app", -1]]
      },
      {
        c: "Imagine a school with no screens at all for a whole year. Would students learn better or worse?",
        he: "תלמידים ילמדו טוב יותר או פחות טוב? למשל: Better, with fewer distractions. או Worse.",
        a: [
          { k: ["worse less"], n: "better", r: "Worse, you think. Technology really is part of learning today." },
          { k: ["better more"], r: "Better! Maybe fewer distractions would really help." },
          { k: ["same difference"], r: "The same, then. Maybe it's the teacher that matters most." }
        ],
        o: "Hmm, nobody really knows. It would be quite an experiment.",
        t: ["Better, with fewer distractions.", "Worse, we need computers.", "About the same, I think."],
        x: [["better", 1], ["they will learn worse", 0], ["the same", 2], ["much better without phones", 1], ["no difference", 2], ["i dont know", -1], ["better with less screens", 1]]
      },
      {
        c: "Some people believe technology brings people closer, and others say it pushes people apart. What's your opinion?",
        he: "הטכנולוגיה מקרבת או מרחיקה? למשל: It brings us closer. או It pushes people apart.",
        a: [
          { k: ["both depends"], r: "Both sides have a point. It depends how we use it." },
          { k: ["lonely lonelier alone apart isolated push pushes far"], n: "not_lonely not_lonelier", r: "That's a worry many people share. Time together face to face really matters." },
          { k: ["closer close connect connected together friends"], r: "True! We can talk to friends anywhere in the world." }
        ],
        o: "A thoughtful opinion. It's a debate that will continue for years.",
        t: ["It brings us closer to friends who live abroad.", "It pushes people apart.", "I think it depends."],
        x: [["closer because we can talk", 2], ["it makes people lonely", 1], ["both", 0], ["i think it depends", 0], ["closer not lonely", 2], ["games", -1]]
      },
      {
        c: "Last question. What do you think technology will change most in schools ten years from now?",
        he: "מה הטכנולוגיה תשנה בבתי הספר בעוד עשר שנים? למשל: I think robots will help teachers in class.",
        a: [],
        o: "An interesting prediction. Let's see if you're right!",
        t: ["I think robots will help teachers in class.", "Maybe there will be no paper books at all."],
        x: [["everyone will learn from home", -1], ["ai will be the teacher", -1]]
      }
    ],
    end: "Excellent practice! You gave opinions with clear reasons. Fabulous work."
  },
  {
    id: "sb208", title: "Save our beach",
    he: "מועצת הנוער של קוקו מתכננת מבצע נגד הפלסטיק בחוף",
    turns: [
      {
        c: "Welcome to the Youth Beach Council! Our beach gets covered in plastic every summer. In your opinion, what's the main reason?",
        he: "מה הסיבה העיקרית ללכלוך? למשל: People leave their rubbish after picnics.",
        a: [],
        o: "That's probably a big part of the problem.",
        t: ["People leave their rubbish after picnics.", "There aren't enough bins on the beach."],
        x: [["people are lazy", -1], ["the sea brings it from other countries", -1]]
      },
      {
        c: "A group of teens built a beach-cleaning robot. Should we buy one, or organise volunteers instead?",
        he: "לקנות רובוט או לארגן מתנדבים? למשל: Buy the robot. או Organise volunteers.",
        a: [
          { k: ["both"], r: "Both, then! The robot and the volunteers, working together." },
          { k: ["robot buy machine"], r: "A robot! It never gets tired, and it doesn't need sun cream." },
          { k: ["volunteer volunteers people organise organize ourselves students"], r: "Volunteers! It also teaches people to care about the beach." }
        ],
        o: "Good. Let's put it to the council vote.",
        t: ["Buy the robot, it works all day.", "Organise volunteers instead.", "Let's do both."],
        x: [["buy the robot", 1], ["the machine", 1], ["volunteers", 2], ["we can do it ourselves", 2], ["both", 0], ["call the city", -1]]
      },
      {
        c: "We want to make a short video so that more people get involved. What should be in it?",
        he: "מה יהיה בסרטון? למשל: Before and after pictures of the beach.",
        a: [],
        o: "That would definitely get people's attention.",
        t: ["Before and after pictures of the beach.", "Famous people picking up rubbish."],
        x: [["sea animals with plastic", -1], ["kids cleaning and music", -1]]
      },
      {
        c: "Some council members want fines for people who leave rubbish. Others think education works better, even though it's slower. What do you think?",
        he: "קנסות או חינוך? למשל: Fines work faster. או Education is better.",
        a: [
          { k: ["both"], r: "Both! Fines for now, education for the future. Clever." },
          { k: ["fines a_fine pay punish punishment money ticket"], r: "Fines! People usually change quickly when it costs them." },
          { k: ["education educate teach learn explain school"], r: "Education! It's slower, but it changes habits for good." }
        ],
        o: "Both sides have strong arguments. We'll discuss it next week.",
        t: ["Fines work faster.", "Education is better in the long run.", "We need both."],
        x: [["give them a fine", 1], ["they should pay money", 1], ["education is better", 2], ["teach the kids", 2], ["both", 0], ["put cameras", -1]]
      },
      {
        c: "Despite all our work, imagine the beach is dirty again next summer. Would you give up, or try again?",
        he: "תוותרו או תנסו שוב? למשל: I'd try again. או Honestly, I'd give up.",
        a: [
          { k: ["give_up gave_up stop quit"], n: "not never", r: "That's honest. It can feel frustrating when nothing changes." },
          { k: ["again try never not continue keep"], n: "not_sure not_know no_idea", r: "That's the spirit! Change takes time, but it happens." }
        ],
        o: "It's a hard question. Every bit of effort still counts.",
        t: ["I'd try again, of course.", "Honestly, I'd give up."],
        x: [["try again", 1], ["never give up", 1], ["i would give up", 0], ["i will stop", 0], ["go to another beach", -1]]
      }
    ],
    end: "Thank you for joining the council! Thanks to you, our beach has a brighter future."
  },
  {
    id: "sb209", title: "Too many tourists?",
    he: "קוקו ראש כפר קטן ויפה שמוצף בתיירים, ואתם עוזרים לו להחליט",
    turns: [
      {
        c: "Hello! Today I'm playing the mayor of a tiny seaside village. Thousands of tourists come every day, and the locals are getting tired of it. Have you ever been somewhere really crowded?",
        he: "הייתם פעם במקום צפוף מאוד? למשל: Yes, the beach in summer! או No, never.",
        a: [
          { k: ["no not never"], n: "not_sure not_know no_idea", r: "Lucky you! It can be quite stressful." },
          { k: ["yes once crowded busy"], r: "Then you know how it feels! Crowds can spoil a beautiful place." }
        ],
        o: "Crowded places can be exciting, but also exhausting.",
        t: ["Yes, the beach in summer!", "No, I don't think so."],
        x: [["yes in paris", 1], ["no never", 0], ["yes the beach in summer", 1], ["i have not", 0], ["i love the sea", -1]]
      },
      {
        c: "Should the village limit the number of visitors, even though the shops need the tourists' money?",
        he: "להגביל את מספר המבקרים? למשל: Yes, they should limit it. או No, the shops need them. או It depends.",
        a: [
          { k: ["depends maybe partly some balance"], r: "A balance, then. Maybe a limit only in the busy months." },
          { k: ["no not"], n: "not_sure not_know no_idea", r: "Fair point. The local shops really depend on visitors." },
          { k: ["yes limit should agree"], r: "A limit! It would protect the village, though some shops might suffer." }
        ],
        o: "It's a difficult choice for any mayor.",
        t: ["Yes, they should limit it.", "No, the shops need the visitors.", "Maybe only in summer."],
        x: [["yes they should limit", 2], ["no the shops need money", 1], ["it depends", 0], ["maybe in summer", 0], ["i don't think so", 1], ["fish", -1]]
      },
      {
        c: "One idea is a small entry fee for tourists. Another is asking visitors to book a time online. Which idea do you prefer, and why?",
        he: "דמי כניסה או הזמנת זמן באינטרנט? למשל: The fee, because it pays for cleaning.",
        a: [
          { k: ["fee pay paying money ticket"], r: "The fee! The money could also help keep the village clean." },
          { k: ["book booking online time reserve reservation"], r: "Booking online! Fewer people at the same time. Clever." }
        ],
        o: "Interesting reasoning. I'll present it to the village council.",
        t: ["The fee, because it pays for cleaning.", "Booking online, so it's never too crowded."],
        x: [["the fee", 0], ["pay money to enter", 0], ["book online", 1], ["booking a time", 1], ["both are bad", -1]]
      },
      {
        c: "The village wants a short welcome video for tourists. What should it show, so that visitors love the village and look after it?",
        he: "מה יהיה בסרטון קבלת הפנים לתיירים? למשל: The fishermen and the old harbour.",
        a: [],
        o: "Lovely! Visitors will arrive already in love with the place.",
        t: ["The fishermen and the old harbour.", "Local kids showing their favourite places."],
        x: [["the beach and the food", -1], ["people saying hello and please keep it clean", -1]]
      },
      {
        c: "Last question: if you could show tourists one beautiful place in Israel that isn't crowded yet, what would it be, and why?",
        he: "איזה מקום יפה ושקט בישראל הייתם מראים לתיירים? למשל: The Ramon Crater, because it's amazing at night.",
        a: [],
        o: "Lovely! Let's hope it stays peaceful and beautiful.",
        t: ["The Ramon Crater, because it's amazing at night.", "A quiet beach in the north, near the cliffs."],
        x: [["the golan heights for hiking", -1], ["a small village in the galilee", -1]]
      }
    ],
    end: "Thank you! Thanks to your ideas, our village might stay beautiful for everyone."
  },
  {
    id: "sb210", title: "Design a video game",
    he: "בחברת המשחקים של קוקו אתם המעצבים הראשיים של משחק חדש",
    turns: [
      {
        c: "Welcome to Coco Games! We're designing a new video game, and you're the lead designer. What kind of game should it be?",
        he: "איזה סוג משחק נעשה? למשל: An adventure game where you explore islands.",
        a: [],
        o: "Ooh, players will love that.",
        t: ["An adventure game where you explore islands.", "A puzzle game with lots of levels."],
        x: [["a racing game with cars", -1], ["something like minecraft", -1]]
      },
      {
        c: "Who's the main character, and what special power do they have?",
        he: "מי הדמות הראשית ומה הכוח המיוחד שלה? למשל: A cat that can turn invisible.",
        a: [],
        o: "What a fabulous character! Very original.",
        t: ["A cat that can turn invisible.", "A girl who can talk to machines."],
        x: [["a boy who can fly", -1], ["a robot that can freeze time", -1]]
      },
      {
        c: "Should it be a game for one player only, or should friends be able to play together online?",
        he: "שחקן אחד או משחק עם חברים ברשת? למשל: Online with friends. או Just one player.",
        a: [
          { k: ["both"], r: "Both modes! Perfect, everyone gets what they want." },
          { k: ["together online multiplayer friends team"], r: "Online with friends! Games are often more fun together." },
          { k: ["one single alone solo myself"], r: "One player! A personal adventure, just for you." }
        ],
        o: "Good idea. We'll think about the best way to play.",
        t: ["Online with friends.", "Just one player.", "Both, so players can choose."],
        x: [["online with friends", 1], ["play together", 1], ["just one player", 2], ["alone", 2], ["both", 0], ["on the phone", -1]]
      },
      {
        c: "Some games make players pay for extra things, like special clothes for their character. Do you think that's fair?",
        he: "זה הוגן לגבות כסף על תוספות במשחק? למשל: No, it's not fair. או Yes, if it's not too expensive.",
        a: [
          { k: ["no not unfair never"], n: "not_sure not_know no_idea", r: "I see why. It can feel unfair, especially for younger players." },
          { k: ["yes fair okay ok fine sometimes small"], r: "Okay. Companies do need money to make good games." }
        ],
        o: "It's a big debate in the gaming world.",
        t: ["No, it's not fair.", "Yes, it's fair enough."],
        x: [["no its not fair", 0], ["unfair", 0], ["yes it is fair", 1], ["sometimes it ok", 1], ["i don't pay", 0], ["games are fun", -1]]
      },
      {
        c: "Our testers say level three is too hard, and they keep losing. What should we change?",
        he: "מה נשנה בשלב הקשה? למשל: Make the enemies slower and give more lives.",
        a: [],
        o: "Smart fix. Players will get through it now.",
        t: ["Make the enemies slower and give more lives.", "Add a hint button for each puzzle."],
        x: [["make it easier", -1], ["give them more time", -1]]
      },
      {
        c: "The game is finished! What should we call it, so that people remember it?",
        he: "איך נקרא למשחק? למשל: Let's call it Island of Shadows.",
        a: [],
        o: "Brilliant title! It'll look great on the screen.",
        t: ["Let's call it Island of Shadows.", "We should call it Machine Girl."],
        x: [["super cat adventure", -1], ["the lost island", -1]]
      }
    ],
    end: "Thank you, lead designer! Our game is ready to take over the gaming world."
  },
  {
    id: "sb211", title: "The class trip",
    he: "מתכננים עם ועדת הטיול של קוקו את הטיול השנתי",
    turns: [
      {
        c: "Hi! I'm on the class trip committee, and we need your help. Should our end-of-year trip go to the desert or to the north?",
        he: "מדבר או צפון? למשל: The desert, for the stars. או The north, it's so green.",
        a: [
          { k: ["desert negev eilat ramon sand"], r: "The desert! Stars at night and amazing views." },
          { k: ["north galilee golan hermon forest river kinneret"], r: "The north! Green hills, rivers and fresh air." }
        ],
        o: "Good. We'll put both on the list and vote.",
        t: ["The desert, for the stars.", "The north, because it's so green."],
        x: [["the desert", 0], ["eilat", 0], ["north", 1], ["to the galilee", 1], ["the beach", -1]]
      },
      {
        c: "Which two activities would make the trip unforgettable?",
        he: "אילו שתי פעילויות יהפכו את הטיול לבלתי נשכח? למשל: Kayaking on the river and a night hike.",
        a: [],
        o: "Those sound like great ideas. I'm writing them down.",
        t: ["Kayaking on the river and a night hike.", "A jeep tour and sleeping under the stars."],
        x: [["swimming and a party", -1], ["climbing and a water park", -1]]
      },
      {
        c: "Should we sleep in tents or in a youth hostel?",
        he: "אוהלים או אכסניה? למשל: Tents, it's an adventure! או A hostel, with real beds.",
        a: [
          { k: ["tent tents camping outside stars"], r: "Tents! An adventure, though we might not get much sleep." },
          { k: ["hostel hotel room rooms bed beds inside"], r: "A hostel! Comfortable beds and hot showers." }
        ],
        o: "Okay. We'll check what's possible.",
        t: ["Tents, it's an adventure!", "A hostel, with real beds."],
        x: [["tents", 0], ["camping", 0], ["hostel", 1], ["a hotel", 1], ["anywhere", -1]]
      },
      {
        c: "Every trip needs rules. Which rule do you think is the most important, and why?",
        he: "איזה כלל הכי חשוב ולמה? למשל: Stay with your group, so nobody gets lost.",
        a: [],
        o: "Very sensible. The teachers will be pleased.",
        t: ["Stay with your group, so nobody gets lost.", "Drink lots of water, because it gets hot."],
        x: [["listen to the guide", -1], ["no running near the river", -1]]
      },
      {
        c: "Some students want phones off all day on the trip. Others say they need them for pictures. What's a fair solution?",
        he: "מה פתרון הוגן לגבי טלפונים בטיול? למשל: Phones only in the evening.",
        a: [],
        o: "That sounds fair to me. Let's suggest it to the class.",
        t: ["Phones only in the evening.", "One camera for the whole group."],
        x: [["one hour a day", -1], ["only for photos", -1]]
      },
      {
        c: "Imagine it's the last night of the trip. What would make it a night everyone remembers?",
        he: "מה יהפוך את הלילה האחרון לבלתי נשכח? למשל: A campfire with music and stories.",
        a: [],
        o: "That will be a night to remember.",
        t: ["A campfire with music and stories.", "A talent show under the stars."],
        x: [["a big party with dancing", -1], ["watching the stars together", -1]]
      }
    ],
    end: "Thanks! With your ideas, this will be the best class trip ever."
  },
  {
    id: "sb212", title: "Dear Coco",
    he: "מדור העצות של קוקו: עוזרים לו לענות למכתבים של קוראים",
    turns: [
      {
        c: "Welcome to Dear Coco, my advice column! A reader writes: my friend keeps borrowing my things and forgets to give them back. Should I say something, or just ignore it?",
        he: "להגיד משהו או להתעלם? למשל: Say something, but kindly. או Just ignore it.",
        a: [
          { k: ["ignore nothing quiet"], n: "not", r: "Ignoring it is easier. But the problem might grow." },
          { k: ["say tell talk speak something honest not"], n: "not_sure not_know no_idea", r: "Talking about it! Honest friends are the best friends." }
        ],
        o: "Hmm, a tricky one. Friendship isn't always simple.",
        t: ["Say something, but kindly.", "Just ignore it."],
        x: [["ignore it", 0], ["say nothing", 0], ["tell her", 1], ["talk to the friend", 1], ["don't ignore it", 1], ["copy", -1]]
      },
      {
        c: "If you were the reader, how would you start that conversation without hurting your friend's feelings?",
        he: "איך תתחילו את השיחה בעדינות? למשל: I'd say I need it back, but in a friendly way.",
        a: [],
        o: "That's a gentle way to say it. Very wise.",
        t: ["I'd say I need it back, but in a friendly way.", "I would remind them gently, with a smile."],
        x: [["i will say please give it back", -1], ["i tell her i need my things", -1]]
      },
      {
        c: "Here's another letter: two friends both want to be captain of the team. What would be a fair way to decide?",
        he: "איך להחליט בהוגנות מי יהיה הקפטן? למשל: Let the whole team vote.",
        a: [],
        o: "That sounds fair. Both friends could live with that.",
        t: ["Let the whole team vote.", "They could share the job, half a season each."],
        x: [["the coach decide", -1], ["play a game and the winner", -1]]
      },
      {
        c: "Do you think it's okay to tell a small lie to protect a friend's feelings?",
        he: "זה בסדר לשקר שקר קטן כדי לא לפגוע? למשל: It depends. או No, be honest. או Yes, sometimes.",
        a: [
          { k: ["depends sometimes maybe"], r: "It depends, true. Small kind lies are a grey area." },
          { k: ["no not never wrong honest truth"], n: "not_sure not_know no_idea", r: "Honesty first! Real friends can handle the truth." },
          { k: ["yes okay ok fine sure"], n: "not_sure", r: "Sometimes a little kindness matters more. I understand." }
        ],
        o: "That's a question even adults argue about.",
        t: ["It depends on the situation.", "No, you should always be honest.", "Yes, if it's really small."],
        x: [["it depends", 0], ["no never lie", 1], ["you should be honest", 1], ["yes its okay", 2], ["sometimes", 0], ["lies", -1]]
      },
      {
        c: "Last letter: a reader wishes she had more confidence to speak in class. What advice would you give her?",
        he: "איזו עצה תתנו לקוראת שרוצה יותר ביטחון? למשל: Start with short answers and practise at home.",
        a: [],
        o: "Great advice. I'm sure it will help her.",
        t: ["Start with short answers and practise at home.", "Remember that everyone makes mistakes."],
        x: [["dont be shy everybody is the same", -1], ["prepare before the lesson", -1]]
      }
    ],
    end: "Thank you for helping me with my letters! You give fabulous advice."
  },
  {
    id: "sb213", title: "The Parrot's Den",
    he: "מציגים המצאה למשקיע קוקו ומנסים לשכנע אותו להשקיע",
    turns: [
      {
        c: "Welcome to The Parrot's Den, where young inventors pitch their ideas to investors! What's your invention, and what problem does it solve?",
        he: "מה ההמצאה ואיזו בעיה היא פותרת? למשל: A backpack that charges your phone while you walk.",
        a: [],
        o: "Interesting! I've never seen anything quite like it.",
        t: ["A backpack that charges your phone while you walk.", "An app that reminds you to drink water."],
        x: [["a pen that never runs out", -1], ["shoes that tell you the way", -1]]
      },
      {
        c: "Who would buy it: teenagers, adults, or everyone?",
        he: "מי יקנה? למשל: Teenagers, like me. או Adults. או Everyone!",
        a: [
          { k: ["teen teens teenager teenagers young students kids"], r: "Teenagers! A big market that loves new things." },
          { k: ["parent parents adult adults grown"], r: "Adults! They often look for useful things." },
          { k: ["everyone everybody all anyone"], r: "Everyone! The bigger the market, the better." }
        ],
        o: "Good. Knowing your customers is really important.",
        t: ["Teenagers, like me.", "Mostly adults.", "Everyone!"],
        x: [["teenagers", 0], ["students like me", 0], ["parents", 1], ["adults", 1], ["everyone", 2], ["dogs", -1]]
      },
      {
        c: "Would you make it cheap, so that lots of people buy it, or expensive and high quality?",
        he: "זול או יקר ואיכותי? למשל: Cheap, so lots of people buy it. או High quality.",
        a: [
          { k: ["cheap cheaper low affordable not_expensive"], r: "Cheap and popular! A smart way to start." },
          { k: ["expensive quality high premium"], r: "High quality! People pay more for things that last." }
        ],
        o: "Hmm, pricing is always a tricky decision.",
        t: ["Cheap, so lots of people buy it.", "Expensive, but really high quality."],
        x: [["cheap", 0], ["not expensive", 0], ["expensive", 1], ["high quality", 1], ["in the middle", -1]]
      },
      {
        c: "I'm interested, but I'm a little worried. What would you do if a big company copied your idea?",
        he: "מה תעשו אם חברה גדולה תעתיק? למשל: I would protect it with a patent.",
        a: [],
        o: "Good answer. You've clearly thought about this.",
        t: ["I would protect it with a patent.", "Then I'd make mine better and cheaper."],
        x: [["i will go to court", -1], ["make it better", -1]]
      },
      {
        c: "Here's my offer: I'll invest, but I want half of your company. Do you accept, or do you want to negotiate?",
        he: "מסכימים או מתמקחים? למשל: I accept, it's a deal! או I'd like to negotiate.",
        a: [
          { k: ["accept yes deal agree okay ok"], n: "not no negotiate less", r: "Deal! Let's shake hands. Well, hand and wing." },
          { k: ["negotiate less no not third quarter"], n: "not_sure not_know no_idea", r: "Ooh, a tough negotiator! Okay, let's talk about it." }
        ],
        o: "Interesting! Let me think about your answer.",
        t: ["I accept, it's a deal!", "I'd like to negotiate."],
        x: [["yes deal", 0], ["i accept", 0], ["no i want to negotiate", 1], ["i don't accept", 1], ["maybe 30 percent", -1]]
      },
      {
        c: "Whatever happens today, what have you learned from creating your invention?",
        he: "מה למדתם מהיצירה של ההמצאה? למשל: I learned that good ideas need hard work.",
        a: [],
        o: "That's a lesson that will help you in any job.",
        t: ["I learned that good ideas need hard work.", "I've learned to explain my ideas clearly."],
        x: [["dont give up", -1], ["that it is hard to make things", -1]]
      }
    ],
    end: "Thank you for pitching in The Parrot's Den. You're a true entrepreneur!"
  },
  {
    id: "sb214", title: "Reading to dogs",
    he: "קוקו מנהל מקלט לבעלי חיים ומתכנן איתכם פרויקט קריאה לכלבים",
    turns: [
      {
        c: "Hi! Today I'm helping at an animal shelter, and we're starting a project where kids read stories to the dogs. Do you think dogs can really enjoy being read to?",
        he: "כלבים נהנים שמקריאים להם? למשל: Yes, they love a calm voice. או I don't think so.",
        a: [
          { k: ["yes definitely sure think love enjoy"], n: "not", r: "I think so too! They love a calm, friendly voice." },
          { k: ["no not doubt"], n: "not_sure not_know no_idea", r: "Maybe not the story itself, but they love the company." }
        ],
        o: "Nobody knows for sure, but they definitely love the attention.",
        t: ["Yes, they love a calm voice.", "I don't think so, but they like company."],
        x: [["yes they love it", 0], ["i think so", 0], ["i don't think so", 1], ["no way", 1], ["maybe", -1]]
      },
      {
        c: "Some dogs get nervous at the shelter. Besides reading, what else could make them feel calm and happy, do you think?",
        he: "מה עוד יכול להרגיע את הכלבים במקלט? למשל: Long walks and lots of gentle play.",
        a: [],
        o: "That's a great idea. I hadn't thought of it that way.",
        t: ["Long walks and lots of gentle play.", "Soft music and cosy blankets."],
        x: [["take them to the park", -1], ["give them toys and treats", -1]]
      },
      {
        c: "Which kind of story should we read to the dogs: adventures, funny stories, or calm bedtime stories?",
        he: "איזה סיפורים להקריא? למשל: Adventures! או Funny stories. או Calm bedtime stories.",
        a: [
          { k: ["adventure adventures action"], r: "Adventures! The dogs might dream of running through forests." },
          { k: ["funny comedy joke jokes"], r: "Funny stories! Laughing makes everyone relax, dogs included." },
          { k: ["calm bedtime quiet sleep"], r: "Bedtime stories! Perfect for nervous dogs." }
        ],
        o: "Good choice. The dogs won't mind, as long as your voice is kind.",
        t: ["Adventures, with lots of action.", "Funny stories!", "Calm bedtime stories."],
        x: [["adventures", 0], ["action story", 0], ["funny ones", 1], ["something with jokes", 1], ["bedtime stories", 2], ["calm", 2], ["about cats", -1]]
      },
      {
        c: "We need more volunteers. What could we do to get more teenagers involved?",
        he: "איך נגייס עוד בני נוער? למשל: Post short videos of the dogs online.",
        a: [],
        o: "Brilliant idea. Let's try it next month.",
        t: ["Post short videos of the dogs online.", "Give volunteers a certificate for their work."],
        x: [["tell about it in school", -1], ["give free pizza", -1]]
      },
      {
        c: "Some people say shelters should spend money on food and vets, not on reading projects. What would you say to them?",
        he: "מה תענו למי שאומר שחבל על הכסף? למשל: Reading costs nothing and makes dogs happier.",
        a: [],
        o: "A thoughtful answer. Both things matter for the dogs.",
        t: ["Reading costs nothing and makes dogs happier.", "Calm dogs get adopted faster, so it helps."],
        x: [["they are right food is more important", -1], ["it is free", -1]]
      },
      {
        c: "If you could adopt one of the shelter dogs, would you choose a playful puppy or a calm older dog?",
        he: "גור שובב או כלב מבוגר ורגוע? למשל: A playful puppy! או A calm older dog.",
        a: [
          { k: ["puppy puppies young playful baby"], r: "A puppy! Lots of energy, and lots of chewed shoes." },
          { k: ["older old calm adult senior"], r: "An older dog! They're often the most loyal friends." }
        ],
        o: "Any dog would be lucky to have you.",
        t: ["A playful puppy!", "A calm older dog."],
        x: [["the puppy", 0], ["a playful one", 0], ["an older dog", 1], ["the calm one", 1], ["a cat", -1]]
      }
    ],
    end: "Thank you! The dogs will be wagging their tails, thanks to you."
  },
  {
    id: "sb215", title: "A museum of teen life",
    he: "קוקו אוצר מוזיאון מהעתיד ובונה תערוכה על חיי בני נוער היום",
    turns: [
      {
        c: "Hello! I'm a museum curator from the future, and I'm building an exhibition about teenage life today. What should visitors see first, and why?",
        he: "מה המבקרים יראו ראשון ולמה? למשל: A phone, because it's always in our hands.",
        a: [],
        o: "Fascinating. Visitors in the future will be amazed.",
        t: ["A phone, because it's always in our hands.", "A school bag full of books and snacks."],
        x: [["headphones because everyone have them", -1], ["a classroom with tables", -1]]
      },
      {
        c: "People in the future won't understand some of our habits. Which habit do you think they'll find the strangest?",
        he: "איזה הרגל שלנו ייראה להם הכי מוזר? למשל: Taking photos of our food before we eat.",
        a: [],
        o: "Ha! I can just imagine their faces.",
        t: ["Taking photos of our food before we eat.", "Wearing headphones all day long."],
        x: [["we send messages to people next to us", -1], ["watching short videos all day", -1]]
      },
      {
        c: "Should the exhibition be serious and educational, or fun and interactive?",
        he: "רצינית ולימודית או כיפית ואינטראקטיבית? למשל: Fun and interactive! או A mix of both.",
        a: [
          { k: ["both mix"], r: "A mix of both! The perfect exhibition." },
          { k: ["serious educational learn facts"], r: "Serious and educational. Visitors will learn a lot." },
          { k: ["fun interactive game games play touch"], r: "Fun and interactive! Visitors can try things themselves." }
        ],
        o: "Good thinking. A great exhibition needs a clear style.",
        t: ["Fun and interactive!", "Serious and educational.", "A mix of both."],
        x: [["fun", 2], ["interactive", 2], ["serious", 1], ["educational one", 1], ["both", 0], ["a big one", -1]]
      },
      {
        c: "What's something about teen life today that you hope will be different in the future?",
        he: "מה הייתם רוצים שיהיה שונה בעתיד? למשל: I hope teenagers will have less pressure.",
        a: [],
        o: "I hope so too. That would make life better for a lot of people.",
        t: ["I hope teenagers will have less pressure.", "I hope school will start later."],
        x: [["less tests and more trips", -1], ["that everyone be nicer online", -1]]
      },
      {
        c: "And what do you hope will never change, despite all the new technology?",
        he: "מה לא ישתנה אף פעם? למשל: Spending time with friends face to face.",
        a: [],
        o: "That's lovely. Some things are worth keeping forever.",
        t: ["Spending time with friends face to face.", "Laughing together at silly jokes."],
        x: [["playing outside", -1], ["going to the beach in summer", -1]]
      },
      {
        c: "Last thing: if you could leave one short message for teenagers in the future, what would you say?",
        he: "איזה מסר תשאירו לבני נוער בעתיד? למשל: Enjoy every day and be kind.",
        a: [],
        o: "What a message! I'll put it at the exit, in big letters.",
        t: ["Enjoy every day and be kind.", "Look up from your screen sometimes!"],
        x: [["take care of the planet", -1], ["have fun and learn", -1]]
      }
    ],
    end: "The exhibition is ready! Thank you for helping the future understand us."
  }
]);
