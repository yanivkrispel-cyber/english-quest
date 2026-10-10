"""Puts shop items on the pets: the same math as petArt() in src/Index.html, for contact sheets, and the export of
the fit data into src/Index.html (spec: specs/wordrobe.md).

Data: tools/pet-fit.json (the eyes of every sticker, from tools/pet_fit.py) and tools/wear-fit.json (hand-tuned:
per pet the head top, head width, neck and back; per item its size and attach point).

usage (from app/):
  python tools/wear_fit.py sheet <out.png> <pet[,pet]> <item,item,...> [stages]   # every mood of every stage, dressed
  python tools/wear_fit.py export                                                   # writes the FIT block in src/Index.html
"""
import sys, os, json, math
from PIL import Image, ImageDraw, ImageFont

APP = os.path.join(os.path.dirname(__file__), '..')
MOODS = ['happy', 'celebrate', 'thinking', 'oops', 'sleepy', 'cool']
PETS = ['turtle', 'monster', 'cat', 'cow', 'fawn', 'donkey', 'sheep', 'giraffe', 'elephant', 'lion']
PLACE = {
    'star-beanie': 'head', 'flower-crown': 'head', 'wizard-hat': 'head', 'pumpkin-hat': 'head', 'chef-hat': 'head', 'bunny-ears': 'head', 'party-hat': 'head', 'beret': 'head', 'big-bow': 'head', 'unicorn-horn': 'head', 'witch-hat': 'head',
    'round-specs': 'face', 'heart-glasses': 'face', 'pilot-goggles': 'face', 'masquerade-mask': 'face', 'candy-glasses': 'face', 'star-glasses': 'face',
    'bow-tie': 'neck', 'heart-locket': 'neck', 'pearl-necklace': 'neck', 'crystal-pendant': 'neck',
    'heart-balloon': 'back', 'butterfly-wings': 'back', 'fairy-wings': 'back', 'angel-wings': 'back', 'bat-wings': 'back', 'rainbow-wings': 'back',
    'baby-chick': 'buddy', 'bluebird': 'buddy', 'star-sprite': 'buddy', 'baby-dragon': 'buddy', 'tiny-ghost': 'buddy', 'baby-bunny': 'buddy',
}


def load():
    fit = json.load(open(os.path.join(APP, 'tools', 'pet-fit.json')))
    wear = json.load(open(os.path.join(APP, 'tools', 'wear-fit.json')))
    sizes = {}
    for k in wear['items']:
        im = Image.open(os.path.join(APP, 'docs', 'items', k + '.webp'))
        sizes[k] = im.size
    return fit, wear, sizes


def save_wear(d, path=None):
    """Writes tools/wear-fit.json one entry per line (readable diffs)."""
    path = path or os.path.join(APP, 'tools', 'wear-fit.json')
    lines = ['{', '  "_": ' + json.dumps(d['_']) + ',', '  "pets": {']
    for i, (k, v) in enumerate(d['pets'].items()):
        lines.append('    ' + json.dumps(k) + ': ' + json.dumps(v) + (',' if i < len(d['pets']) - 1 else ''))
    lines += ['  },', '  "items": {']
    for i, (k, v) in enumerate(d['items'].items()):
        lines.append('    ' + json.dumps(k) + ': ' + json.dumps(v) + (',' if i < len(d['items']) - 1 else ''))
    lines += ['  }', '}']
    open(path, 'w').write('\n'.join(lines) + '\n')


def layout(fit, wear, isz, pet, stage, mood, items):
    """The layers of a dressed pet in the sticker's own pixels: [(z, id, x, y, w, h, rot, tx, ty)].
    z < 0 is behind the pet. Mirrors petLayers() in src/Index.html."""
    if mood == 'cool' and any(PLACE.get(i) == 'face' for i in items):
        mood = 'happy'
    W, H = fit['size'][f'{pet}/{stage}']
    ex, ey, d, a, cx, cy = fit['eyes'][f'{pet}/{stage}-{mood}']
    ax, ay, D, th = ex * W, ey * H, d * W, math.radians(a)
    ux, uy, vx, vy = math.cos(th), math.sin(th), -math.sin(th), math.cos(th)
    P = dict(wear['pets'][pet])
    P.update(P.get('s' + str(stage), {}))
    out = []
    for it in items:
        place, I = PLACE[it], wear['items'][it]
        iw, ih = isz[it]
        rot = a
        if place == 'head':
            k = -(P['top'] - I.get('dy', 0))
            tx, ty = ax + vx * k * D + ux * I.get('dx', 0) * D, ay + vy * k * D + uy * I.get('dx', 0) * D
            w = I['w'] * P['w'] * D
            rot = a + I.get('rot', 0)
            z = 3
        elif place == 'face':
            k = I.get('dy', 0)
            tx, ty = ax + vx * k * D, ay + vy * k * D
            w = I['w'] * D / I['lens']
            z = 2
        elif place == 'neck':
            k = P['chin'] + I.get('dy', 0)
            tx, ty = ax + vx * k * D, ay + vy * k * D
            w = I['w'] * D
            z = 1
        elif place == 'back':
            nx, ny = ax + vx * P['chin'] * D, ay + vy * P['chin'] * D
            bx, by = cx * W, cy * H
            tx, ty = nx + (bx - nx) * P['back'], ny + (by - ny) * P['back']
            tx += ux * I.get('dx', 0) * D + vx * I.get('dy', 0) * D
            ty += uy * I.get('dx', 0) * D + vy * I.get('dy', 0) * D
            w = I['w'] * D
            rot = a * 0.5
            z = -1
        else:  # buddy: beside the pet, in the air or on the ground, always upright
            w = I['w'] * D
            h = w * ih / iw
            tx, ty = W * 0.9, H * (0.16 if I.get('spot') == 'air' else 1.0) - (0 if I.get('spot') == 'air' else h * 0.5)
            out.append((4, it, tx - w / 2, ty - h / 2, w, h, 0, tx, ty, None))
            continue
        h = w * ih / iw * I.get('sy', 1)
        at = I.get('at', [0.5, 0.5])
        out.append((z, it, tx - at[0] * w, ty - at[1] * h, w, h, rot, tx, ty, I.get('behind')))
    return mood, sorted(out, key=lambda o: o[0])


def render(fit, wear, isz, pet, stage, mood, items, scale=1.0, margin=0.35):
    mood, layers = layout(fit, wear, isz, pet, stage, mood, items)
    W, H = fit['size'][f'{pet}/{stage}']
    m = int(max(W, H) * margin)
    canvas = Image.new('RGBA', (W + 2 * m, H + 2 * m), (0, 0, 0, 0))

    def put(img, x, y, w, h, rot, tx, ty, part=None):
        layer = Image.new('RGBA', canvas.size, (0, 0, 0, 0))
        it = img.resize((max(1, int(round(w))), max(1, int(round(h)))), Image.LANCZOS)
        if part:  # (from, to): only that band of the item's height
            a = it.getchannel('A')
            mask = Image.new('L', it.size, 0)
            ImageDraw.Draw(mask).rectangle((0, int(part[0] * it.height), it.width, int(part[1] * it.height)), fill=255)
            from PIL import ImageChops
            it.putalpha(ImageChops.multiply(a, mask))
        layer.paste(it, (int(round(x)) + m, int(round(y)) + m), it)
        if rot:
            layer = layer.rotate(-rot, resample=Image.BICUBIC, center=(tx + m, ty + m))
        canvas.alpha_composite(layer)

    img = lambda it: Image.open(os.path.join(APP, 'docs', 'items', it + '.webp')).convert('RGBA')
    # behind = [from, to]: that band of the item's height is drawn behind the pet (a chain behind the neck, the legs
    # of a headband behind the head), the rest in front.
    for z, it, x, y, w, h, rot, tx, ty, behind in layers:
        if z < 0:
            put(img(it), x, y, w, h, rot, tx, ty)
        elif behind:
            put(img(it), x, y, w, h, rot, tx, ty, tuple(behind))
    pet_im = Image.open(os.path.join(APP, 'docs', 'pets', pet, f'{stage}-{mood}.webp')).convert('RGBA')
    canvas.alpha_composite(pet_im, (m, m))
    for z, it, x, y, w, h, rot, tx, ty, behind in layers:
        if z >= 0:
            if not behind:
                put(img(it), x, y, w, h, rot, tx, ty)
            else:
                if behind[0] > 0:
                    put(img(it), x, y, w, h, rot, tx, ty, (0, behind[0]))
                if behind[1] < 1:
                    put(img(it), x, y, w, h, rot, tx, ty, (behind[1], 1))
    if scale != 1:
        canvas = canvas.resize((int(canvas.width * scale), int(canvas.height * scale)), Image.LANCZOS)
    return canvas


def sheet(out, pets, items, stages=(1, 2, 3, 4, 5), cell=230):
    fit, wear, isz = load()
    rows = [(p, s) for p in pets for s in stages]
    im = Image.new('RGB', (cell * 6, cell * len(rows)), (236, 238, 245))
    d = ImageDraw.Draw(im)
    try:
        font = ImageFont.truetype('arial.ttf', 12)
    except Exception:
        font = ImageFont.load_default()
    for r, (p, s) in enumerate(rows):
        for c, mood in enumerate(MOODS):
            t = render(fit, wear, isz, p, s, mood, items)
            t.thumbnail((cell - 6, cell - 6), Image.LANCZOS)
            im.paste(t, (c * cell + (cell - t.width) // 2, r * cell + (cell - t.height) // 2), t)
            d.text((c * cell + 4, r * cell + 2), f'{p}/{s}-{mood}', fill=(60, 60, 90), font=font)
    im.save(out)
    print('wrote', out)


def export():
    """The FIT block in src/Index.html: canvas sizes, eye anchors and body centers (per pet, 30 stickers in the order
    stage 1..5 x MOODS), the pets' head shapes and the items' fits."""
    fit, wear, isz = load()
    eyes = {}
    for p in PETS:
        eyes[p] = [fit['eyes'][f'{p}/{s}-{m}'] for s in range(1, 6) for m in MOODS]
    data = {
        'size': {p: [fit['size'][f'{p}/{s}'] for s in range(1, 6)] for p in PETS},
        'eyes': eyes,
        'pets': wear['pets'],
        'items': {k: dict(v, px=list(isz[k]), place=PLACE[k]) for k, v in wear['items'].items()},
    }
    js = json.dumps(data, separators=(',', ':'))
    path = os.path.join(APP, 'src', 'Index.html')
    src = open(path, encoding='utf8').read()
    start, end = '// FIT:start', '// FIT:end'
    i, j = src.index(start), src.index(end)
    line = '\nconst FIT = ' + js + ';\n'
    nl = '\r\n' if '\r\n' in src else '\n'
    src = src[:i + len(start)] + line.replace('\n', nl) + src[j:]
    open(path, 'w', encoding='utf8', newline='').write(src)
    print('FIT block:', len(js), 'chars')


def big(out, keys, items, cell=420):
    """A few stickers, large: keys like cat/1-happy."""
    fit, wear, isz = load()
    cols = min(4, len(keys))
    rows = (len(keys) + cols - 1) // cols
    im = Image.new('RGB', (cell * cols, cell * rows), (236, 238, 245))
    d = ImageDraw.Draw(im)
    for k, key in enumerate(keys):
        own = items
        if ':' in key:  # pet/stage-mood:item+item
            key, own = key.split(':')[0], key.split(':')[1].split('+')
        p, rest = key.split('/')
        s, mood = rest.split('-')
        t = render(fit, wear, isz, p, int(s), mood, own)
        t.thumbnail((cell - 6, cell - 6), Image.LANCZOS)
        im.paste(t, ((k % cols) * cell + (cell - t.width) // 2, (k // cols) * cell + (cell - t.height) // 2), t)
        d.text(((k % cols) * cell + 4, (k // cols) * cell + 2), key, fill=(60, 60, 90))
    im.save(out)
    print('wrote', out)


if __name__ == '__main__':
    if sys.argv[1] == 'big':
        big(sys.argv[2], sys.argv[3].split(','), sys.argv[4].split(','))
    elif sys.argv[1] == 'sheet':
        st = tuple(int(x) for x in sys.argv[5].split(',')) if len(sys.argv) > 5 else (1, 2, 3, 4, 5)
        sheet(sys.argv[2], sys.argv[3].split(','), sys.argv[4].split(','), st)
    else:
        export()
