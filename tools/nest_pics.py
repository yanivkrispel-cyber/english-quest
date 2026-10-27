"""Coco's Nest pictures (specs/nest.md): Microsoft Fluent Emoji 3D (MIT license), saved as 200px WebP.

usage (from app/):
  python tools/nest_pics.py --fetch   # downloads the PNGs that are missing into tools/.fluent, then writes the WebPs
  python tools/nest_pics.py           # writes docs/nest/pics/<name>.webp from tools/.fluent
  python tools/nest_pics.py --list    # name|asset lines

Every `pic` and unit `icon` in docs/nest/nest.js needs a line in PICS (the script stops when one is missing).
Assets with skin tones live under <Asset>/Default/3D/<slug>_3d_default.png in the repo, the others under
<Asset>/3D/<slug>_3d.png; the fetch tries both. Source: https://github.com/microsoft/fluentui-emoji (jsDelivr mirror).
test/nest-check.js checks that every picture exists.
"""
import json, os, subprocess, sys, urllib.parse, urllib.request
from PIL import Image

# picture name -> Fluent asset folder
PICS = {
    # hello and feelings
    'wave': 'Waving hand', 'happy': 'Grinning face with big eyes', 'sad': 'Crying face', 'angry': 'Angry face',
    'sleepy': 'Sleeping face', 'surprised': 'Astonished face', 'yummy': 'Face savoring food', 'hot': 'Hot face',
    'cold': 'Cold face', 'yes': 'Thumbs up', 'no': 'Thumbs down', 'friend': 'People hugging', 'parrot': 'Parrot', 'sick': 'Face with thermometer', 'silly': 'Zany face', 'cool': 'Smiling face with sunglasses',
    # colors, numbers, shapes
    'palette': 'Artist palette', 'rainbow': 'Rainbow', 'abacus': 'Abacus', 'cake': 'Birthday cake', 'heart': 'Red heart',
    # animals
    'cat': 'Cat', 'dog': 'Dog', 'cow': 'Cow', 'horse': 'Horse', 'chicken': 'Chicken', 'duck': 'Duck',
    'lion': 'Lion', 'elephant': 'Elephant', 'monkey': 'Monkey', 'giraffe': 'Giraffe', 'zebra': 'Zebra', 'penguin': 'Penguin',
    # family and people
    'mom': 'Woman', 'dad': 'Man', 'brother': 'Boy', 'sister': 'Girl', 'grandma': 'Old woman', 'grandpa': 'Old man',
    'baby': 'Baby', 'pilot': 'Pilot', 'farmer': 'Farmer', 'teacher': 'Teacher', 'doctor': 'Health worker',
    'firefighter': 'Firefighter', 'astronaut': 'Astronaut',
    # body
    'eyes': 'Eyes', 'ear': 'Ear', 'nose': 'Nose', 'mouth': 'Mouth', 'tooth': 'Tooth', 'tongue': 'Tongue',
    'hand': 'Hand with fingers splayed', 'foot': 'Foot', 'leg': 'Leg', 'arm': 'Flexed biceps',
    'finger': 'Index pointing up', 'face': 'Slightly smiling face',
    # food
    'apple': 'Red apple', 'pear': 'Pear', 'banana': 'Banana', 'orange-fruit': 'Tangerine', 'grapes': 'Grapes', 'strawberry': 'Strawberry',
    'watermelon': 'Watermelon', 'bread': 'Bread', 'cheese': 'Cheese wedge', 'egg': 'Egg', 'milk': 'Glass of milk',
    'juice': 'Beverage box', 'ice-cream': 'Soft ice cream',
    # toys and things that go
    'ball': 'Soccer ball', 'teddy-bear': 'Teddy bear', 'balloon': 'Balloon', 'drum': 'Drum', 'kite': 'Kite', 'robot': 'Robot',
    'car': 'Automobile', 'bus': 'Bus', 'train': 'Locomotive', 'plane': 'Airplane', 'boat': 'Sailboat', 'bike': 'Bicycle',
    # clothes
    'shirt': 'T-shirt', 'pants': 'Jeans', 'dress': 'Dress', 'socks': 'Socks', 'shoes': 'Running shoe', 'cap': 'Billed cap',
    'coat': 'Coat', 'scarf': 'Scarf', 'gloves': 'Gloves', 'shorts': 'Shorts', 'swimsuit': 'One-piece swimsuit',
    'glasses': 'Glasses',
    # actions
    'running': 'Person running', 'walking': 'Person walking', 'swimming': 'Person swimming', 'dancing': 'Woman dancing',
    'sleeping': 'Person in bed', 'clapping': 'Clapping hands', 'singing': 'Singer', 'climbing': 'Person climbing',
    'riding-a-bike': 'Person biking', 'playing-ball': 'Person bouncing ball', 'painting': 'Artist', 'cooking': 'Cook',
    # nature and weather
    'sun': 'Sun', 'moon': 'Crescent moon', 'star': 'Star', 'cloud': 'Cloud', 'rain': 'Cloud with rain', 'snow': 'Snowflake',
    'tree': 'Deciduous tree', 'flower': 'Tulip', 'leaf': 'Leaf fluttering in wind', 'sea': 'Water wave',
    'shell': 'Spiral shell', 'rock': 'Rock',
    # home
    'house': 'House', 'door': 'Door', 'window': 'Window', 'bed': 'Bed', 'chair': 'Chair', 'bath': 'Bathtub',
    'toothbrush': 'Toothbrush', 'soap': 'Soap', 'spoon': 'Spoon', 'cup': 'Cup with straw', 'clock': 'Alarm clock',
    'key': 'Key',
}

HERE = os.path.dirname(os.path.abspath(__file__))
APP = os.path.dirname(HERE)
CACHE = os.path.join(HERE, '.fluent')
OUT = os.path.join(APP, 'docs', 'nest', 'pics')
CDN = 'https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/'


def used():
    """Every picture name nest.js uses (word pics, unit icons and Coco says pictures)."""
    js = ("const vm=require('vm'),fs=require('fs');const w={};"
          "vm.runInNewContext(fs.readFileSync('docs/nest/nest.js','utf8'),{window:w});const s=new Set();"
          "w.EQ_NEST.units.forEach(u=>{s.add(u.icon);(u.words||[]).forEach(x=>{if(x.pic)s.add(x.pic)})});"
          "Object.values(w.EQ_NEST.moves||{}).forEach(m=>{if(m.pic)s.add(m.pic)});"
          "process.stdout.write(JSON.stringify([...s]))")
    return json.loads(subprocess.check_output(['node', '-e', js], cwd=APP).decode('utf-8'))


def cached(asset):
    return os.path.join(CACHE, asset.lower().replace(' ', '_') + '.png')


def fetch(asset):
    path = cached(asset)
    if os.path.exists(path) and os.path.getsize(path) > 0:
        return True
    slug = asset.lower().replace(' ', '_')
    folder = CDN + urllib.parse.quote(asset)
    for url in (folder + '/3D/' + slug + '_3d.png', folder + '/Default/3D/' + slug + '_3d_default.png'):
        for attempt in range(4):
            try:
                with urllib.request.urlopen(url, timeout=30) as r:
                    data = r.read()
                if data[:8] != b'\x89PNG\r\n\x1a\n':
                    break
                with open(path, 'wb') as f:
                    f.write(data)
                return True
            except urllib.error.HTTPError as e:
                if e.code in (403, 404):
                    break
            except Exception:
                pass
    print('FAIL: no Fluent 3D picture for "%s"' % asset)
    return False


def main():
    if '--list' in sys.argv:
        for name, asset in PICS.items():
            print(name + '|' + asset)
        return
    names = used()
    missing = [n for n in names if n not in PICS]
    if missing:
        raise SystemExit('add to PICS in tools/nest_pics.py: ' + ', '.join(missing))
    os.makedirs(CACHE, exist_ok=True)
    os.makedirs(OUT, exist_ok=True)
    if '--fetch' in sys.argv:
        bad = [n for n in names if not fetch(PICS[n])]
        if bad:
            raise SystemExit('%d picture(s) not found' % len(bad))
    for name in names:
        im = Image.open(cached(PICS[name])).convert('RGBA')
        im.thumbnail((200, 200), Image.LANCZOS)
        im.save(os.path.join(OUT, name + '.webp'), 'WEBP', quality=88, alpha_quality=100, method=6)
    # Pictures nest.js no longer uses are removed.
    for f in os.listdir(OUT):
        if f.endswith('.webp') and f[:-5] not in names:
            os.remove(os.path.join(OUT, f))
    total = sum(os.path.getsize(os.path.join(OUT, f)) for f in os.listdir(OUT))
    print(len(os.listdir(OUT)), 'pictures,', total // 1024, 'KB')


if __name__ == '__main__':
    main()
