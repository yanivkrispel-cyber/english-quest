"""A1 picture words for "Match it": Microsoft Fluent Emoji 3D (MIT license), saved as 200px WebP.

usage (from app/):
  uv run --no-project --with pillow python tools/pics.py --list   # word|asset lines (used by the fetch loop)
  sh tools/pics_fetch.sh                                            # downloads the PNGs into tools/.fluent (curl)
  uv run --no-project --with pillow python tools/pics.py           # writes docs/pics/<word>.webp
Keep PICS in sync with `pics` in docs/games.js (test/games-check.js checks every picture exists).
"""
import os, sys
from PIL import Image

PICS = {
    'apple': 'Red apple', 'banana': 'Banana', 'orange': 'Tangerine', 'lemon': 'Lemon', 'grapes': 'Grapes',
    'strawberry': 'Strawberry', 'watermelon': 'Watermelon', 'tomato': 'Tomato', 'carrot': 'Carrot', 'bread': 'Bread',
    'cheese': 'Cheese wedge', 'egg': 'Egg', 'milk': 'Glass of milk', 'cake': 'Birthday cake', 'cookie': 'Cookie',
    'pizza': 'Pizza', 'ice cream': 'Ice cream', 'chocolate': 'Chocolate bar',
    'cat': 'Cat', 'dog': 'Dog', 'bird': 'Bird', 'fish': 'Fish', 'cow': 'Cow', 'horse': 'Horse', 'rabbit': 'Rabbit',
    'duck': 'Duck', 'frog': 'Frog', 'bee': 'Honeybee', 'mouse': 'Mouse', 'pig': 'Pig', 'monkey': 'Monkey',
    'elephant': 'Elephant', 'lion': 'Lion', 'bear': 'Bear', 'penguin': 'Penguin', 'owl': 'Owl',
    'butterfly': 'Butterfly', 'snail': 'Snail', 'turtle': 'Turtle', 'whale': 'Whale',
    'house': 'House', 'school': 'School', 'car': 'Automobile', 'bus': 'Bus', 'bike': 'Bicycle', 'train': 'Locomotive',
    'plane': 'Airplane', 'boat': 'Sailboat', 'ball': 'Soccer ball', 'book': 'Closed book', 'pencil': 'Pencil',
    'clock': 'Alarm clock', 'chair': 'Chair', 'bed': 'Bed', 'door': 'Door', 'key': 'Key', 'phone': 'Mobile phone',
    'sun': 'Sun', 'moon': 'Crescent moon', 'star': 'Star', 'rain': 'Cloud with rain', 'tree': 'Deciduous tree',
    'flower': 'Tulip', 'cap': 'Billed cap', 'shoe': 'Running shoe', 'T-shirt': 'T-shirt', 'dress': 'Dress',
    'socks': 'Socks', 'umbrella': 'Umbrella', 'glasses': 'Glasses', 'bag': 'Backpack', 'present': 'Wrapped gift',
    'balloon': 'Balloon', 'guitar': 'Guitar', 'camera': 'Camera', 'computer': 'Laptop', 'kite': 'Kite',
    'snowman': 'Snowman', 'rainbow': 'Rainbow', 'teddy bear': 'Teddy bear', 'spoon': 'Spoon', 'TV': 'Television',
    'tent': 'Tent', 'rocket': 'Rocket', 'bell': 'Bell', 'crown': 'Crown',
}

if '--list' in sys.argv:
    for word, asset in PICS.items():
        print(word + '|' + asset)
    sys.exit()

here = os.path.dirname(os.path.abspath(__file__))
out = os.path.join(here, '..', 'docs', 'pics')
os.makedirs(out, exist_ok=True)
for word, asset in PICS.items():
    im = Image.open(os.path.join(here, '.fluent', asset.lower().replace(' ', '_') + '.png')).convert('RGBA')
    im.thumbnail((200, 200), Image.LANCZOS)
    im.save(os.path.join(out, word.replace(' ', '-') + '.webp'), 'WEBP', quality=88, alpha_quality=100, method=6)
total = sum(os.path.getsize(os.path.join(out, f)) for f in os.listdir(out))
print(len(os.listdir(out)), 'pictures,', total // 1024, 'KB')
