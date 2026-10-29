"""The app's clay icons (specs/design.md rule 4): Gemini sheets of 6, cut like the Nest's pictures (tools/NEST-ART.md).

    python tools/ui_icons.py prompt <sheet>            # the Gemini prompt for a sheet in tools/ui-icons.json
    python tools/ui_icons.py cut <sheet> <image.jpg>   # keeps the sheet in art/ui/sheets/, writes art/ui/cut/<icon>.png
        [--grid 4x2 --pick 0,1,2,4,5,6]
    python tools/ui_icons.py build                     # docs/icons/<icon>.webp (192 px) and the CLAY_ICONS list in Index.html

Each picture is named after the Phosphor icon it replaces: clayIcons() in Index.html swaps that icon for the picture
wherever it sits in a tile, the tab bar or a Nest button; everywhere else the Phosphor icon stays.
"""
import json, os, re, sys
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import nest_art

APP = os.path.dirname(HERE)
ART = os.path.join(os.path.dirname(APP), 'art', 'ui')
OUT = os.path.join(APP, 'docs', 'icons')
SHEETS = json.load(open(os.path.join(HERE, 'ui-icons.json'), encoding='utf-8'))

nest_art.SHEETS = SHEETS
nest_art.ART = ART
nest_art.CUT = os.path.join(ART, 'cut')


def prompt(sheet):
    s = SHEETS[sheet]
    items = ' '.join('%d) %s,' % (i + 1, d) for i, (_, d) in enumerate(s['items']))[:-1] + '.'
    # j-* sheets are the journey map's scenery (one per world, and the gates); the rest are app icons.
    what, word = ('scenery stickers for the journey map', 'sticker') if sheet.startswith('j-') else ('app icons', 'icon')
    return ("Create an image: a sticker sheet of 6 separate %s of a kids' English-learning app, made in the same "
            "world as its clay pets. %sS, in this exact order, left to right, top row first: %s Each %s one simple "
            "object, whole and alone, seen from its most recognizable angle, instantly clear even when small, all about "
            "the same size. LAYOUT: landscape 3:2 image with exactly 6 %ss in a neat 3x2 grid (3 columns, 2 rows), each "
            "centered in its own cell, with wide empty space between them and around the edges. %s"
            % (what, word.upper(), items, word, word, nest_art.STYLE))


def build():
    os.makedirs(OUT, exist_ok=True)
    names = []
    for s in SHEETS.values():
        for n, _ in s['items']:
            src = os.path.join(ART, 'cut', n + '.png')
            if not os.path.exists(src):
                continue
            px = 288 if n.startswith('j-') else 192  # journey scenery (j-*) is drawn bigger on the map
            Image.open(src).resize((px, px), Image.LANCZOS).save(os.path.join(OUT, n + '.webp'), 'WEBP', quality=88, method=6)
            names.append(n)
    p = os.path.join(APP, 'src', 'Index.html')
    html = open(p, encoding='utf-8', newline='').read()
    line = "const CLAY_ICONS = '%s'.split(' ');" % ' '.join(sorted(n for n in names if not n.startswith('j-')))
    html, k = re.subn(r"const CLAY_ICONS = '[^']*'\.split\(' '\);", line, html)
    if not k:
        raise SystemExit('CLAY_ICONS not found in Index.html')
    open(p, 'w', encoding='utf-8', newline='').write(html)
    print(len(names), 'clay icons ->', OUT)


if __name__ == '__main__':
    a = sys.argv[1:]
    if a[:1] == ['prompt']:
        sys.stdout.reconfigure(encoding='utf-8')
        print(prompt(a[1]))
    elif a[:1] == ['cut']:
        g = a[a.index('--grid') + 1] if '--grid' in a else None
        k = [int(x) for x in a[a.index('--pick') + 1].split(',')] if '--pick' in a else None
        nest_art.cut(a[1], a[2], g, k)
    elif a[:1] == ['build']:
        build()
    else:
        print(__doc__)
