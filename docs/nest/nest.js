// Coco's Nest (specs/nest.md): the content for ages 2 to 7. One unit a day, in this order; after every two new units a
// review of both. A word's picture is `pic` (docs/nest/pics/<name>.webp, tools/nest_pics.py), `color` (a blob drawn in
// code) or `count` (1 to 10 dots drawn in code). `say` is what Coco says when the kid meets the word, `find` her question
// in Find it; both are recorded by tools/nest_audio.py. After a change: node test/nest-check.js, node tools/nest-index.js,
// python tools/nest_pics.py --fetch, python tools/nest_audio.py.
window.EQ_NEST = {
  units: [
    { id: 'n01', theme: 'hello', title: 'Hello, Coco!', he: 'שלום, קוקו!', icon: 'wave',
      words: [
        { id: 'hello', en: 'hello', he: 'שלום', pic: 'wave', say: 'Hello!', find: 'Who says hello?' },
        { id: 'happy', en: 'happy', he: 'שמח', pic: 'happy', say: 'Happy!', find: 'Who is happy?' },
        { id: 'sad', en: 'sad', he: 'עצוב', pic: 'sad', say: 'Sad!', find: 'Who is sad?' },
        { id: 'angry', en: 'angry', he: 'כועס', pic: 'angry', say: 'Angry!', find: 'Who is angry?' },
        { id: 'sleepy', en: 'sleepy', he: 'עייף', pic: 'sleepy', say: 'Sleepy!', find: 'Who is sleepy?' },
        { id: 'surprised', en: 'surprised', he: 'מופתע', pic: 'surprised', say: 'Surprised!', find: 'Who is surprised?' }
      ] },
    { id: 'n02', theme: 'colors', title: 'Colors', he: 'צבעים', icon: 'palette',
      words: [
        { id: 'red', en: 'red', he: 'אדום', color: '#e53935', say: 'Red!', find: 'Find red!' },
        { id: 'blue', en: 'blue', he: 'כחול', color: '#1e88e5', say: 'Blue!', find: 'Find blue!' },
        { id: 'yellow', en: 'yellow', he: 'צהוב', color: '#fdd835', say: 'Yellow!', find: 'Find yellow!' },
        { id: 'green', en: 'green', he: 'ירוק', color: '#43a047', say: 'Green!', find: 'Find green!' },
        { id: 'orange', en: 'orange', he: 'כתום', color: '#fb8c00', say: 'Orange!', find: 'Find orange!' },
        { id: 'purple', en: 'purple', he: 'סגול', color: '#8e24aa', say: 'Purple!', find: 'Find purple!' }
      ] },
    { id: 'r01', title: 'Review', he: 'חוזרים על הכול', icon: 'star', review: ['n01', 'n02'] },
    { id: 'n03', theme: 'numbers', title: 'One to six', he: 'סופרים עד שש', icon: 'abacus',
      words: [
        { id: 'one', en: 'one', he: 'אחת', count: 1, say: 'One!', find: 'Find one!' },
        { id: 'two', en: 'two', he: 'שתיים', count: 2, say: 'Two!', find: 'Find two!' },
        { id: 'three', en: 'three', he: 'שלוש', count: 3, say: 'Three!', find: 'Find three!' },
        { id: 'four', en: 'four', he: 'ארבע', count: 4, say: 'Four!', find: 'Find four!' },
        { id: 'five', en: 'five', he: 'חמש', count: 5, say: 'Five!', find: 'Find five!' },
        { id: 'six', en: 'six', he: 'שש', count: 6, say: 'Six!', find: 'Find six!' }
      ] },
    { id: 'n04', theme: 'animals', title: 'Animals', he: 'חיות', icon: 'cat',
      words: [
        { id: 'cat', en: 'cat', he: 'חתול', pic: 'cat', say: 'A cat!', find: 'Where is the cat?' },
        { id: 'dog', en: 'dog', he: 'כלב', pic: 'dog', say: 'A dog!', find: 'Where is the dog?' },
        { id: 'cow', en: 'cow', he: 'פרה', pic: 'cow', say: 'A cow!', find: 'Where is the cow?' },
        { id: 'horse', en: 'horse', he: 'סוס', pic: 'horse', say: 'A horse!', find: 'Where is the horse?' },
        { id: 'chicken', en: 'chicken', he: 'תרנגולת', pic: 'chicken', say: 'A chicken!', find: 'Where is the chicken?' },
        { id: 'duck', en: 'duck', he: 'ברווז', pic: 'duck', say: 'A duck!', find: 'Where is the duck?' }
      ] },
    { id: 'r02', title: 'Review', he: 'חוזרים על הכול', icon: 'star', review: ['n03', 'n04'] },
    { id: 'n05', theme: 'family', title: 'My family', he: 'המשפחה שלי', icon: 'mom',
      words: [
        { id: 'mom', en: 'mom', he: 'אמא', pic: 'mom', say: 'Mom!', find: 'Where is Mom?' },
        { id: 'dad', en: 'dad', he: 'אבא', pic: 'dad', say: 'Dad!', find: 'Where is Dad?' },
        { id: 'brother', en: 'brother', he: 'אח', pic: 'brother', say: 'Brother!', find: 'Where is the brother?' },
        { id: 'sister', en: 'sister', he: 'אחות', pic: 'sister', say: 'Sister!', find: 'Where is the sister?' },
        { id: 'grandma', en: 'grandma', he: 'סבתא', pic: 'grandma', say: 'Grandma!', find: 'Where is Grandma?' },
        { id: 'grandpa', en: 'grandpa', he: 'סבא', pic: 'grandpa', say: 'Grandpa!', find: 'Where is Grandpa?' }
      ] },
    { id: 'n06', theme: 'body', title: 'My face', he: 'הפנים שלי', icon: 'nose',
      words: [
        { id: 'eyes', en: 'eyes', he: 'עיניים', pic: 'eyes', say: 'Eyes!', find: 'Where are the eyes?' },
        { id: 'ear', en: 'ear', he: 'אוזן', pic: 'ear', say: 'An ear!', find: 'Where is the ear?' },
        { id: 'nose', en: 'nose', he: 'אף', pic: 'nose', say: 'A nose!', find: 'Where is the nose?' },
        { id: 'mouth', en: 'mouth', he: 'פה', pic: 'mouth', say: 'A mouth!', find: 'Where is the mouth?' },
        { id: 'tooth', en: 'tooth', he: 'שן', pic: 'tooth', say: 'A tooth!', find: 'Where is the tooth?' },
        { id: 'tongue', en: 'tongue', he: 'לשון', pic: 'tongue', say: 'A tongue!', find: 'Where is the tongue?' }
      ] },
    { id: 'r03', title: 'Review', he: 'חוזרים על הכול', icon: 'star', review: ['n05', 'n06'] },
    { id: 'n07', theme: 'food', title: 'Fruit', he: 'פירות', icon: 'apple',
      words: [
        { id: 'apple', en: 'apple', he: 'תפוח', pic: 'apple', say: 'An apple!', find: 'Where is the apple?' },
        { id: 'banana', en: 'banana', he: 'בננה', pic: 'banana', say: 'A banana!', find: 'Where is the banana?' },
        { id: 'orange-fruit', en: 'orange', he: 'תפוז', pic: 'orange-fruit', say: 'An orange!', find: 'Where is the orange?' },
        { id: 'grapes', en: 'grapes', he: 'ענבים', pic: 'grapes', say: 'Grapes!', find: 'Where are the grapes?' },
        { id: 'strawberry', en: 'strawberry', he: 'תות', pic: 'strawberry', say: 'A strawberry!', find: 'Where is the strawberry?' },
        { id: 'watermelon', en: 'watermelon', he: 'אבטיח', pic: 'watermelon', say: 'A watermelon!', find: 'Where is the watermelon?' }
      ] },
    { id: 'n08', theme: 'toys', title: 'Toys', he: 'צעצועים', icon: 'teddy-bear',
      words: [
        { id: 'ball', en: 'ball', he: 'כדור', pic: 'ball', say: 'A ball!', find: 'Where is the ball?' },
        { id: 'teddy-bear', en: 'teddy bear', he: 'דובי', pic: 'teddy-bear', say: 'A teddy bear!', find: 'Where is the teddy bear?' },
        { id: 'balloon', en: 'balloon', he: 'בלון', pic: 'balloon', say: 'A balloon!', find: 'Where is the balloon?' },
        { id: 'drum', en: 'drum', he: 'תוף', pic: 'drum', say: 'A drum!', find: 'Where is the drum?' },
        { id: 'kite', en: 'kite', he: 'עפיפון', pic: 'kite', say: 'A kite!', find: 'Where is the kite?' },
        { id: 'robot', en: 'robot', he: 'רובוט', pic: 'robot', say: 'A robot!', find: 'Where is the robot?' }
      ] },
    { id: 'r04', title: 'Review', he: 'חוזרים על הכול', icon: 'star', review: ['n07', 'n08'] },
    { id: 'n09', theme: 'hello', title: 'How do you feel?', he: 'איך מרגישים?', icon: 'cool',
      words: [
        { id: 'yummy', en: 'yummy', he: 'טעים', pic: 'yummy', say: 'Yummy!', find: 'Who says yummy?' },
        { id: 'hot', en: 'hot', he: 'חם', pic: 'hot', say: 'Hot!', find: 'Who is hot?' },
        { id: 'cold', en: 'cold', he: 'קר', pic: 'cold', say: 'Cold!', find: 'Who is cold?' },
        { id: 'sick', en: 'sick', he: 'חולה', pic: 'sick', say: 'Sick!', find: 'Who is sick?' },
        { id: 'silly', en: 'silly', he: 'מצחיק', pic: 'silly', say: 'Silly!', find: 'Who is silly?' },
        { id: 'cool', en: 'cool', he: 'מגניב', pic: 'cool', say: 'Cool!', find: 'Who is cool?' }
      ] },
    { id: 'n10', theme: 'colors', title: 'More colors', he: 'עוד צבעים', icon: 'rainbow',
      words: [
        { id: 'pink', en: 'pink', he: 'ורוד', color: '#f06292', say: 'Pink!', find: 'Find pink!' },
        { id: 'black', en: 'black', he: 'שחור', color: '#212121', say: 'Black!', find: 'Find black!' },
        { id: 'white', en: 'white', he: 'לבן', color: '#ffffff', say: 'White!', find: 'Find white!' },
        { id: 'brown', en: 'brown', he: 'חום', color: '#795548', say: 'Brown!', find: 'Find brown!' },
        { id: 'gray', en: 'gray', he: 'אפור', color: '#9e9e9e', say: 'Gray!', find: 'Find gray!' },
        { id: 'rainbow', en: 'rainbow', he: 'קשת', pic: 'rainbow', say: 'A rainbow!', find: 'Where is the rainbow?' }
      ] },
    { id: 'r05', title: 'Review', he: 'חוזרים על הכול', icon: 'star', review: ['n09', 'n10'] },
    { id: 'n11', theme: 'numbers', title: 'Seven to ten', he: 'סופרים עד עשר', icon: 'abacus',
      words: [
        { id: 'seven', en: 'seven', he: 'שבע', count: 7, say: 'Seven!', find: 'Find seven!' },
        { id: 'eight', en: 'eight', he: 'שמונה', count: 8, say: 'Eight!', find: 'Find eight!' },
        { id: 'nine', en: 'nine', he: 'תשע', count: 9, say: 'Nine!', find: 'Find nine!' },
        { id: 'ten', en: 'ten', he: 'עשר', count: 10, say: 'Ten!', find: 'Find ten!' },
        { id: 'cake', en: 'cake', he: 'עוגה', pic: 'cake', say: 'A cake!', find: 'Where is the cake?' },
        { id: 'heart', en: 'heart', he: 'לב', pic: 'heart', say: 'A heart!', find: 'Where is the heart?' }
      ] },
    { id: 'n12', theme: 'animals', title: 'Wild animals', he: 'חיות בטבע', icon: 'lion',
      words: [
        { id: 'lion', en: 'lion', he: 'אריה', pic: 'lion', say: 'A lion!', find: 'Where is the lion?' },
        { id: 'elephant', en: 'elephant', he: 'פיל', pic: 'elephant', say: 'An elephant!', find: 'Where is the elephant?' },
        { id: 'monkey', en: 'monkey', he: 'קוף', pic: 'monkey', say: 'A monkey!', find: 'Where is the monkey?' },
        { id: 'giraffe', en: 'giraffe', he: "ג'ירפה", pic: 'giraffe', say: 'A giraffe!', find: 'Where is the giraffe?' },
        { id: 'zebra', en: 'zebra', he: 'זברה', pic: 'zebra', say: 'A zebra!', find: 'Where is the zebra?' },
        { id: 'penguin', en: 'penguin', he: 'פינגווין', pic: 'penguin', say: 'A penguin!', find: 'Where is the penguin?' }
      ] },
    { id: 'r06', title: 'Review', he: 'חוזרים על הכול', icon: 'star', review: ['n11', 'n12'] },
    { id: 'n13', theme: 'clothes', title: 'Clothes', he: 'בגדים', icon: 'shirt',
      words: [
        { id: 'shirt', en: 'shirt', he: 'חולצה', pic: 'shirt', say: 'A shirt!', find: 'Where is the shirt?' },
        { id: 'pants', en: 'pants', he: 'מכנסיים', pic: 'pants', say: 'Pants!', find: 'Where are the pants?' },
        { id: 'dress', en: 'dress', he: 'שמלה', pic: 'dress', say: 'A dress!', find: 'Where is the dress?' },
        { id: 'socks', en: 'socks', he: 'גרביים', pic: 'socks', say: 'Socks!', find: 'Where are the socks?' },
        { id: 'shoes', en: 'shoes', he: 'נעליים', pic: 'shoes', say: 'Shoes!', find: 'Where are the shoes?' },
        { id: 'cap', en: 'cap', he: 'כובע', pic: 'cap', say: 'A cap!', find: 'Where is the cap?' }
      ] },
    { id: 'n14', theme: 'actions', title: "Let's move!", he: 'זזים!', icon: 'running',
      words: [
        { id: 'running', en: 'running', he: 'לרוץ', pic: 'running', say: 'Running!', find: 'Who is running?' },
        { id: 'walking', en: 'walking', he: 'ללכת', pic: 'walking', say: 'Walking!', find: 'Who is walking?' },
        { id: 'swimming', en: 'swimming', he: 'לשחות', pic: 'swimming', say: 'Swimming!', find: 'Who is swimming?' },
        { id: 'dancing', en: 'dancing', he: 'לרקוד', pic: 'dancing', say: 'Dancing!', find: 'Who is dancing?' },
        { id: 'sleeping', en: 'sleeping', he: 'לישון', pic: 'sleeping', say: 'Sleeping!', find: 'Who is sleeping?' },
        { id: 'clapping', en: 'clapping', he: 'למחוא כפיים', pic: 'clapping', say: 'Clapping!', find: 'Who is clapping?' }
      ] },
    { id: 'r07', title: 'Review', he: 'חוזרים על הכול', icon: 'star', review: ['n13', 'n14'] },
    { id: 'n15', theme: 'body', title: 'My body', he: 'הגוף שלי', icon: 'hand',
      words: [
        { id: 'hand', en: 'hand', he: 'יד', pic: 'hand', say: 'A hand!', find: 'Where is the hand?' },
        { id: 'foot', en: 'foot', he: 'כף רגל', pic: 'foot', say: 'A foot!', find: 'Where is the foot?' },
        { id: 'leg', en: 'leg', he: 'רגל', pic: 'leg', say: 'A leg!', find: 'Where is the leg?' },
        { id: 'arm', en: 'arm', he: 'זרוע', pic: 'arm', say: 'An arm!', find: 'Where is the arm?' },
        { id: 'finger', en: 'finger', he: 'אצבע', pic: 'finger', say: 'A finger!', find: 'Where is the finger?' },
        { id: 'face', en: 'face', he: 'פנים', pic: 'face', say: 'A face!', find: 'Where is the face?' }
      ] },
    { id: 'n16', theme: 'food', title: 'Food and drinks', he: 'אוכל ושתייה', icon: 'bread',
      words: [
        { id: 'bread', en: 'bread', he: 'לחם', pic: 'bread', say: 'Bread!', find: 'Where is the bread?' },
        { id: 'cheese', en: 'cheese', he: 'גבינה', pic: 'cheese', say: 'Cheese!', find: 'Where is the cheese?' },
        { id: 'egg', en: 'egg', he: 'ביצה', pic: 'egg', say: 'An egg!', find: 'Where is the egg?' },
        { id: 'milk', en: 'milk', he: 'חלב', pic: 'milk', say: 'Milk!', find: 'Where is the milk?' },
        { id: 'juice', en: 'juice', he: 'מיץ', pic: 'juice', say: 'Juice!', find: 'Where is the juice?' },
        { id: 'ice-cream', en: 'ice cream', he: 'גלידה', pic: 'ice-cream', say: 'Ice cream!', find: 'Where is the ice cream?' }
      ] },
    { id: 'r08', title: 'Review', he: 'חוזרים על הכול', icon: 'star', review: ['n15', 'n16'] },
    { id: 'n17', theme: 'nature', title: 'Sky and weather', he: 'שמיים ומזג אוויר', icon: 'sun',
      words: [
        { id: 'sun', en: 'sun', he: 'שמש', pic: 'sun', say: 'The sun!', find: 'Where is the sun?' },
        { id: 'moon', en: 'moon', he: 'ירח', pic: 'moon', say: 'The moon!', find: 'Where is the moon?' },
        { id: 'star', en: 'star', he: 'כוכב', pic: 'star', say: 'A star!', find: 'Where is the star?' },
        { id: 'cloud', en: 'cloud', he: 'ענן', pic: 'cloud', say: 'A cloud!', find: 'Where is the cloud?' },
        { id: 'rain', en: 'rain', he: 'גשם', pic: 'rain', say: 'Rain!', find: 'Where is the rain?' },
        { id: 'snow', en: 'snow', he: 'שלג', pic: 'snow', say: 'Snow!', find: 'Where is the snow?' }
      ] },
    { id: 'n18', theme: 'home', title: 'My house', he: 'הבית שלי', icon: 'house',
      words: [
        { id: 'house', en: 'house', he: 'בית', pic: 'house', say: 'A house!', find: 'Where is the house?' },
        { id: 'door', en: 'door', he: 'דלת', pic: 'door', say: 'A door!', find: 'Where is the door?' },
        { id: 'window', en: 'window', he: 'חלון', pic: 'window', say: 'A window!', find: 'Where is the window?' },
        { id: 'bed', en: 'bed', he: 'מיטה', pic: 'bed', say: 'A bed!', find: 'Where is the bed?' },
        { id: 'chair', en: 'chair', he: 'כיסא', pic: 'chair', say: 'A chair!', find: 'Where is the chair?' },
        { id: 'bath', en: 'bath', he: 'אמבטיה', pic: 'bath', say: 'A bath!', find: 'Where is the bath?' }
      ] },
    { id: 'r09', title: 'Review', he: 'חוזרים על הכול', icon: 'star', review: ['n17', 'n18'] },
    { id: 'n19', theme: 'family', title: 'People', he: 'אנשים', icon: 'teacher',
      words: [
        { id: 'baby', en: 'baby', he: 'תינוק', pic: 'baby', say: 'A baby!', find: 'Where is the baby?' },
        { id: 'farmer', en: 'farmer', he: 'חקלאי', pic: 'farmer', say: 'A farmer!', find: 'Where is the farmer?' },
        { id: 'teacher', en: 'teacher', he: 'מורה', pic: 'teacher', say: 'A teacher!', find: 'Where is the teacher?' },
        { id: 'doctor', en: 'doctor', he: 'רופא', pic: 'doctor', say: 'A doctor!', find: 'Where is the doctor?' },
        { id: 'firefighter', en: 'firefighter', he: 'כבאי', pic: 'firefighter', say: 'A firefighter!', find: 'Where is the firefighter?' },
        { id: 'astronaut', en: 'astronaut', he: 'אסטרונאוט', pic: 'astronaut', say: 'An astronaut!', find: 'Where is the astronaut?' }
      ] },
    { id: 'n20', theme: 'toys', title: 'Things that go', he: 'נוסעים וטסים', icon: 'car',
      words: [
        { id: 'car', en: 'car', he: 'מכונית', pic: 'car', say: 'A car!', find: 'Where is the car?' },
        { id: 'bus', en: 'bus', he: 'אוטובוס', pic: 'bus', say: 'A bus!', find: 'Where is the bus?' },
        { id: 'train', en: 'train', he: 'רכבת', pic: 'train', say: 'A train!', find: 'Where is the train?' },
        { id: 'plane', en: 'plane', he: 'מטוס', pic: 'plane', say: 'A plane!', find: 'Where is the plane?' },
        { id: 'boat', en: 'boat', he: 'סירה', pic: 'boat', say: 'A boat!', find: 'Where is the boat?' },
        { id: 'bike', en: 'bike', he: 'אופניים', pic: 'bike', say: 'A bike!', find: 'Where is the bike?' }
      ] },
    { id: 'r10', title: 'Review', he: 'חוזרים על הכול', icon: 'star', review: ['n19', 'n20'] },
    { id: 'n21', theme: 'clothes', title: 'More clothes', he: 'עוד בגדים', icon: 'scarf',
      words: [
        { id: 'coat', en: 'coat', he: 'מעיל', pic: 'coat', say: 'A coat!', find: 'Where is the coat?' },
        { id: 'scarf', en: 'scarf', he: 'צעיף', pic: 'scarf', say: 'A scarf!', find: 'Where is the scarf?' },
        { id: 'gloves', en: 'gloves', he: 'כפפות', pic: 'gloves', say: 'Gloves!', find: 'Where are the gloves?' },
        { id: 'shorts', en: 'shorts', he: 'מכנסיים קצרים', pic: 'shorts', say: 'Shorts!', find: 'Where are the shorts?' },
        { id: 'swimsuit', en: 'swimsuit', he: 'בגד ים', pic: 'swimsuit', say: 'A swimsuit!', find: 'Where is the swimsuit?' },
        { id: 'glasses', en: 'glasses', he: 'משקפיים', pic: 'glasses', say: 'Glasses!', find: 'Where are the glasses?' }
      ] },
    { id: 'n22', theme: 'actions', title: 'What are they doing?', he: 'מה הם עושים?', icon: 'singing',
      words: [
        { id: 'singing', en: 'singing', he: 'לשיר', pic: 'singing', say: 'Singing!', find: 'Who is singing?' },
        { id: 'climbing', en: 'climbing', he: 'לטפס', pic: 'climbing', say: 'Climbing!', find: 'Who is climbing?' },
        { id: 'riding-a-bike', en: 'riding a bike', he: 'לרכוב על אופניים', pic: 'riding-a-bike', say: 'Riding a bike!', find: 'Who is riding a bike?' },
        { id: 'playing-ball', en: 'playing ball', he: 'לשחק בכדור', pic: 'playing-ball', say: 'Playing ball!', find: 'Who is playing ball?' },
        { id: 'painting', en: 'painting', he: 'לצייר', pic: 'painting', say: 'Painting!', find: 'Who is painting?' },
        { id: 'cooking', en: 'cooking', he: 'לבשל', pic: 'cooking', say: 'Cooking!', find: 'Who is cooking?' }
      ] },
    { id: 'r11', title: 'Review', he: 'חוזרים על הכול', icon: 'star', review: ['n21', 'n22'] },
    { id: 'n23', theme: 'nature', title: 'Outside', he: 'בחוץ', icon: 'tree',
      words: [
        { id: 'tree', en: 'tree', he: 'עץ', pic: 'tree', say: 'A tree!', find: 'Where is the tree?' },
        { id: 'flower', en: 'flower', he: 'פרח', pic: 'flower', say: 'A flower!', find: 'Where is the flower?' },
        { id: 'leaf', en: 'leaf', he: 'עלה', pic: 'leaf', say: 'A leaf!', find: 'Where is the leaf?' },
        { id: 'sea', en: 'sea', he: 'ים', pic: 'sea', say: 'The sea!', find: 'Where is the sea?' },
        { id: 'shell', en: 'shell', he: 'צדף', pic: 'shell', say: 'A shell!', find: 'Where is the shell?' },
        { id: 'rock', en: 'rock', he: 'אבן', pic: 'rock', say: 'A rock!', find: 'Where is the rock?' }
      ] },
    { id: 'n24', theme: 'home', title: 'Things at home', he: 'דברים בבית', icon: 'toothbrush',
      words: [
        { id: 'toothbrush', en: 'toothbrush', he: 'מברשת שיניים', pic: 'toothbrush', say: 'A toothbrush!', find: 'Where is the toothbrush?' },
        { id: 'soap', en: 'soap', he: 'סבון', pic: 'soap', say: 'Soap!', find: 'Where is the soap?' },
        { id: 'spoon', en: 'spoon', he: 'כפית', pic: 'spoon', say: 'A spoon!', find: 'Where is the spoon?' },
        { id: 'cup', en: 'cup', he: 'כוס', pic: 'cup', say: 'A cup!', find: 'Where is the cup?' },
        { id: 'clock', en: 'clock', he: 'שעון', pic: 'clock', say: 'A clock!', find: 'Where is the clock?' },
        { id: 'key', en: 'key', he: 'מפתח', pic: 'key', say: 'A key!', find: 'Where is the key?' }
      ] },
    { id: 'r12', title: 'Review', he: 'חוזרים על הכול', icon: 'star', review: ['n23', 'n24'] }
  ],
  // Lines every session shares. he: spoken to the kid in Hebrew (Hila), plural so they fit every kid.
  he: {
    hello: 'שלום! בואו נשחק עם קוקו באנגלית',
    start: 'לחצו על הכפתור הגדול כדי להתחיל',
    pet: 'בחרו חבר שיגדל איתכם',
    meet: 'הקשיבו לקוקו. אפשר ללחוץ על התמונה ולשמוע שוב',
    find: 'קוקו שואלת איפה התמונה. לחצו על התמונה הנכונה',
    again: 'נסו שוב',
    say: 'עכשיו תורכם! תגידו את המילה בקול, כמו קוקו',
    review: 'היום חוזרים על מילים שכבר מכירים',
    great: 'כל הכבוד!',
    done: 'כל הכבוד! סיימתם להיום',
    bye: 'להתראות! נתראה מחר'
  },
  // Coco's English lines (Kokoro, af_heart).
  en: {
    hi: "Hi! Let's play!",
    listen: 'Listen!',
    meet: "Let's meet new words!",
    find: "Let's find them!",
    say: 'Now you say it!',
    yes: 'Yes!',
    wow: 'Wow!',
    super: 'Super!',
    great: 'Great job!',
    try: 'Try again!',
    bye: 'Bye bye! See you tomorrow!'
  }
};
