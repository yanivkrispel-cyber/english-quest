"""Coco's Nest clay pictures (tools/NEST-ART.md): prompts for the Gemini sheets and cutting a sheet into named pictures.

    python tools/nest_art.py prompt <sheet>            # the Gemini prompt for a sheet in tools/nest-art.json
    python tools/nest_art.py cut <sheet> <image.jpg>   # keeps the sheet in art/nest/sheets/<sheet>.jpg and writes
                                                       # art/nest/cut/<name>.png (square, transparent) + a preview
        [--grid 4x2 --pick 0,1,2,4,5,6]                # when Gemini drew another grid: the cells to keep, in order
    python tools/nest_art.py status                    # which pictures nest.js needs that have no clay version yet

tools/nest_pics.py then prefers art/nest/cut/<name>.png over the old Fluent picture of the same name.
"""
import json, os, shutil, subprocess, sys, tempfile
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
APP = os.path.dirname(HERE)
ART = os.path.join(os.path.dirname(APP), 'art', 'nest')
CUT = os.path.join(ART, 'cut')
SHEETS = json.load(open(os.path.join(HERE, 'nest-art.json'), encoding='utf-8'))
SIZE = 400

STYLE = ("STYLE: premium 3D render, like Pixar props and characters made of soft matte polymer clay, smooth rounded "
         "chunky shapes, subtle clay texture, soft studio lighting, rich but gentle colors, cute and friendly; people and "
         "animals have big kind eyes and gentle smiles. Each sticker has a thick, clean, continuous white die-cut outline "
         "around the whole silhouette. BACKGROUND: one perfectly flat, uniform medium-gray color (#909090) everywhere, no "
         "gradient, no texture, no floor, no shadows. No text, no letters, no numbers, no extra symbols or decorations anywhere.")


def prompt(sheet):
    s = SHEETS[sheet]
    items = ' '.join('%d) %s,' % (i + 1, d) for i, (_, d) in enumerate(s['items']))[:-1] + '.'
    return ("Create an image: a sticker sheet of 6 separate stickers for a toddlers' English-learning app (ages 2 to 7): %s. "
            "STICKERS, in this exact order, left to right, top row first: %s Each sticker whole and alone, seen from its "
            "most recognizable angle, instantly clear to a 2-year-old, all about the same size. LAYOUT: landscape 3:2 image "
            "with exactly 6 stickers in a neat 3x2 grid (3 columns, 2 rows), each centered in its own cell, with wide empty "
            "space between them and around the edges. %s" % (s['kind'], items, STYLE))


def regrid(path, grid, pick):
    """A sheet drawn in another grid (Gemini sometimes draws 8): the picked cells, rebuilt as a 3x2 sheet."""
    cols, rows = [int(x) for x in grid.split('x')]
    im = Image.open(path).convert('RGB')
    cw, ch = im.width // cols, im.height // rows
    bg = im.getpixel((2, 2))
    out = Image.new('RGB', (cw * 3, ch * 2), bg)
    for n, k in enumerate(pick):
        # 3% in from each cell edge, so grid lines Gemini sometimes draws between cells stay out.
        dx, dy = cw * 3 // 100, ch * 3 // 100
        cell = im.crop(((k % cols) * cw + dx, (k // cols) * ch + dy, (k % cols + 1) * cw - dx, (k // cols + 1) * ch - dy))
        out.paste(cell, ((n % 3) * cw + dx, (n // 3) * ch + dy))
    tmp = tempfile.NamedTemporaryFile(suffix='.png', delete=False)
    tmp.close()
    out.save(tmp.name)
    return tmp.name


def cut(sheet, src, grid=None, pick=None):
    sys.path.insert(0, HERE)
    from cut_sheet import cut as cut6, EMOTIONS
    os.makedirs(os.path.join(ART, 'sheets'), exist_ok=True)
    os.makedirs(CUT, exist_ok=True)
    keep = os.path.join(ART, 'sheets', sheet + '.jpg')
    if os.path.abspath(src) != os.path.abspath(keep):
        shutil.copy(src, keep)
    tmp = tempfile.mkdtemp()
    try:
        cut6(regrid(keep, grid, pick) if grid else keep, tmp, 0)
        names = [n for n, _ in SHEETS[sheet]['items']]
        tiles = []
        for emo, name in zip(EMOTIONS, names):
            im = Image.open(os.path.join(tmp, '0-%s.webp' % emo)).convert('RGBA')
            im = im.crop(im.getchannel('A').getbbox())
            side = int(max(im.size) * 1.04)
            sq = Image.new('RGBA', (side, side), (0, 0, 0, 0))
            sq.paste(im, ((side - im.width) // 2, (side - im.height) // 2))
            sq = sq.resize((SIZE, SIZE), Image.LANCZOS)
            sq.save(os.path.join(CUT, name + '.png'))
            tiles.append(sq)
        prev = Image.new('RGBA', (SIZE * 6, SIZE), (245, 243, 250, 255))
        for i, t in enumerate(tiles):
            prev.alpha_composite(t, (i * SIZE, 0))
        os.makedirs(os.path.join(ART, 'preview'), exist_ok=True)
        prev.convert('RGB').save(os.path.join(ART, 'preview', sheet + '.jpg'), quality=85)
        print(sheet, '->', ', '.join(names))
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


def status():
    js = ("const vm=require('vm'),fs=require('fs');const w={};"
          "vm.runInNewContext(fs.readFileSync('docs/nest/nest.js','utf8'),{window:w});const s=new Set();"
          "w.EQ_NEST.units.forEach(u=>{s.add(u.icon);(u.words||[]).forEach(x=>{if(x.pic)s.add(x.pic);if(x.color)s.add('blob-'+x.color.slice(1).toLowerCase())})});"
          "Object.values(w.EQ_NEST.moves||{}).forEach(m=>{if(m.pic)s.add(m.pic);if(m.color)s.add('blob-'+m.color.slice(1).toLowerCase())});"
          "process.stdout.write(JSON.stringify([...s]))")
    need = json.loads(subprocess.check_output(['node', '-e', js], cwd=APP).decode('utf-8')) + ['count-token']
    missing = [n for n in need if not os.path.exists(os.path.join(CUT, n + '.png'))]
    print('%d of %d pictures have a clay version' % (len(need) - len(missing), len(need)))
    if missing:
        print('missing:', ' '.join(missing))


if __name__ == '__main__':
    a = sys.argv[1:]
    if a[:1] == ['prompt']:
        sys.stdout.reconfigure(encoding='utf-8')
        print(prompt(a[1]))
    elif a[:1] == ['cut']:
        g = a[a.index('--grid') + 1] if '--grid' in a else None
        k = [int(x) for x in a[a.index('--pick') + 1].split(',')] if '--pick' in a else None
        cut(a[1], a[2], g, k)
    elif a[:1] == ['status']:
        status()
    else:
        print(__doc__)
