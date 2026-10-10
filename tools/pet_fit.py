"""Where the eyes are on every pet sticker, so shop items can be put on the pet (spec: specs/wordrobe.md).

For each sticker (10 pets x 5 stages x 6 moods) the anchor is the point between the eyes, the distance between
the eyes and the tilt of the eye line. Open eyes are found in the picture (a dark iris with a white catchlight
inside it); sunglasses (the cool mood) as one wide dark shape; closed eyes and anything found wrong are fixed by
hand in tools/pet-fit-fix.json ({"cat/3-celebrate": [lx, ly, rx, ry]} in % of the sticker's width and height).

usage (from app/):
  uv run --no-project --with pillow --with numpy --with scipy python tools/pet_fit.py review <out_dir>   # contact sheets per pet
  uv run --no-project --with pillow --with numpy --with scipy python tools/pet_fit.py export            # writes tools/pet-fit.json
"""
import sys, os, json, math
import numpy as np
from PIL import Image, ImageDraw, ImageFont
from scipy import ndimage

PETS = ['turtle', 'monster', 'cat', 'cow', 'fawn', 'donkey', 'sheep', 'giraffe', 'elephant', 'lion']
MOODS = ['happy', 'celebrate', 'thinking', 'oops', 'sleepy', 'cool']
ROOT = os.path.join(os.path.dirname(__file__), '..', 'docs', 'pets')
FIX = os.path.join(os.path.dirname(__file__), 'pet-fit-fix.json')
OUT = os.path.join(os.path.dirname(__file__), 'pet-fit.json')


def load(pet, stage, mood):
    im = Image.open(os.path.join(ROOT, pet, f'{stage}-{mood}.webp')).convert('RGBA')
    return im, np.asarray(im).astype(np.float32)


def eyes_open(a):
    """Two dark blobs with a bright catchlight inside, side by side in the upper part of the figure."""
    alpha = a[..., 3] > 200
    rgb = a[..., :3]
    lum = 0.299 * rgb[..., 0] + 0.587 * rgb[..., 1] + 0.114 * rgb[..., 2]
    ys, xs = np.nonzero(alpha)
    x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
    fw, fh = x1 - x0, y1 - y0
    inner = ndimage.binary_erosion(alpha, iterations=5)
    bright = lum > 205
    chroma = rgb.max(-1) - rgb.min(-1)
    found = []
    for thr in (70, 95, 120):
        # neutral black patches (the cow) are not eyes: an iris is a little warm or cool, never gray
        dark = inner & (lum < thr) & ((chroma > 14) | (lum < 35))
        dark = ndimage.binary_opening(dark, iterations=1)
        lab, n = ndimage.label(dark)
        for i in range(1, n + 1):
            m = lab == i
            area = m.sum()
            if area < 0.0006 * fw * fh or area > 0.05 * fw * fh:
                continue
            yy, xx = np.nonzero(m)
            ya, yb, xa, xb = yy.min(), yy.max(), xx.min(), xx.max()
            bw, bh = xb - xa + 1, yb - ya + 1
            if bw > 2.1 * bh or bh > 2.1 * bw or area < 0.4 * bw * bh:
                continue
            # a catchlight: bright pixels inside the blob's box (enclosed or touching the edge of the iris)
            box = bright[ya:yb + 1, xa:xb + 1]
            if box.sum() < max(3, 0.015 * bw * bh):
                continue
            filled = ndimage.binary_fill_holes(m)
            cy, cx = ndimage.center_of_mass(filled)
            found.append(dict(cx=cx, cy=cy, area=float(filled.sum()), w=float(bw), h=float(bh), thr=thr))
        if len(found) >= 2:
            break
    best = None
    for i in range(len(found)):
        for j in range(i + 1, len(found)):
            p, q = found[i], found[j]
            if p['cx'] > q['cx']:
                p, q = q, p
            dx, dy = q['cx'] - p['cx'], q['cy'] - p['cy']
            if dx < 0.07 * fw or dx > 0.5 * fw or abs(dy) > 0.45 * dx:
                continue
            ratio = min(p['area'], q['area']) / max(p['area'], q['area'])
            if ratio < 0.35:
                continue
            # the eyes are about one eye-width or more apart
            if dx < 1.1 * max(p['w'], q['w']):
                continue
            if (p['cy'] + q['cy']) / 2 - y0 > 0.5 * fh:
                continue
            score = math.sqrt(p['area'] * q['area']) * ratio * (1.5 - ((p['cy'] + q['cy']) / 2 - y0) / fh)
            if best is None or score > best[0]:
                best = (score, p, q)
    if not best:
        return None
    return [best[1]['cx'], best[1]['cy'], best[2]['cx'], best[2]['cy']]


def sunglasses(a):
    alpha = a[..., 3] > 200
    rgb = a[..., :3]
    lum = 0.299 * rgb[..., 0] + 0.587 * rgb[..., 1] + 0.114 * rgb[..., 2]
    chroma = rgb.max(-1) - rgb.min(-1)
    ys, xs = np.nonzero(alpha)
    fw = xs.max() - xs.min()
    inner = ndimage.binary_erosion(alpha, iterations=5)
    dark = inner & (lum < 55) & (chroma < 40)
    dark = ndimage.binary_closing(dark, iterations=3)
    lab, n = ndimage.label(dark)
    best = None
    for i in range(1, n + 1):
        m = lab == i
        yy, xx = np.nonzero(m)
        w, h = xx.max() - xx.min() + 1, yy.max() - yy.min() + 1
        if w < 0.28 * fw or w < 1.8 * h:
            continue
        if best is None or m.sum() > best[0]:
            best = (m.sum(), xx.min(), xx.max(), yy, xx, m)
    if not best:
        return None
    _, xa, xb, yy, xx, m = best
    w = xb - xa
    # lens centers: the middle of the left and right thirds, at the height of the lenses there
    pts = []
    for lo, hi in ((xa, xa + w * 0.42), (xb - w * 0.42, xb)):
        sel = (xx >= lo) & (xx <= hi)
        pts += [float(xx[sel].mean()), float(yy[sel].mean())]
    return pts


def auto(pet, stage, mood):
    im, a = load(pet, stage, mood)
    # closed eyes (celebrate, sleepy) are marked by hand
    p = sunglasses(a) if mood == 'cool' else eyes_open(a) if mood in ('happy', 'thinking', 'oops') else None
    return im, p


def snap(a, x, y, r):
    """From a rough mark (px), the center of the nearest dark eye shape: an iris or the lash line of a closed eye."""
    H, W = a.shape[:2]
    rgb = a[..., :3]
    lum = 0.299 * rgb[..., 0] + 0.587 * rgb[..., 1] + 0.114 * rgb[..., 2]
    x0, x1 = int(max(0, x - r)), int(min(W, x + r + 1))
    y0, y1 = int(max(0, y - r)), int(min(H, y + r + 1))
    win = lum[y0:y1, x0:x1]
    al = a[y0:y1, x0:x1, 3] > 200
    if al.sum() < 10:
        return x, y
    thr = min(95.0, float(np.percentile(win[al], 8)) + 18)
    dark = al & (win < thr)
    lab, n = ndimage.label(dark)
    best = None
    for i in range(1, n + 1):
        m = lab == i
        area = m.sum()
        if area < 6:
            continue
        cy, cx = ndimage.center_of_mass(m)
        dist = math.hypot(cx + x0 - x, cy + y0 - y)
        score = area / (1 + (dist / (0.35 * r)) ** 2)
        if best is None or score > best[0]:
            best = (score, cx + x0, cy + y0)
    return (best[1], best[2]) if best else (x, y)


def fixes():
    if os.path.exists(FIX):
        with open(FIX) as f:
            return json.load(f)
    return {}


def anchor(im, pts):
    """[x, y, d, angle] (export adds [cx, cy], the body's centroid): the point between the eyes and the eye distance as fractions of the sticker width/height
    (d as a fraction of the width), the tilt in degrees."""
    W, H = im.size
    lx, ly, rx, ry = pts
    return [round((lx + rx) / 2 / W, 4), round((ly + ry) / 2 / H, 4), round(math.hypot(rx - lx, ry - ly) / W, 4),
            round(math.degrees(math.atan2(ry - ly, rx - lx)), 1)]


def all_points():
    fx = fixes()
    out = {}
    for pet in PETS:
        for st in range(1, 6):
            for mood in MOODS:
                key = f'{pet}/{st}-{mood}'
                im, p = auto(pet, st, mood)
                src = 'auto'
                if key in fx:
                    W, H = im.size
                    v = fx[key]
                    p = [v[0] * W / 100, v[1] * H / 100, v[2] * W / 100, v[3] * H / 100]
                    if len(v) < 5 or v[4]:
                        a = np.asarray(im).astype(np.float32)
                        r = 0.045 * max(W, H)
                        p = list(snap(a, p[0], p[1], r)) + list(snap(a, p[2], p[3], r))
                    src = 'fix'
                out[key] = (im, p, src)
    return out


def review(out_dir, only=None):
    os.makedirs(out_dir, exist_ok=True)
    pts = all_points()
    cell = 300
    try:
        font = ImageFont.truetype('arial.ttf', 13)
        small = ImageFont.truetype('arial.ttf', 10)
    except Exception:
        font = small = ImageFont.load_default()
    for pet in PETS:
        if only and pet not in only:
            continue
        sheet = Image.new('RGB', (cell * 6, cell * 5), (238, 238, 243))
        d = ImageDraw.Draw(sheet)
        for st in range(1, 6):
            for c, mood in enumerate(MOODS):
                im, p, src = pts[f'{pet}/{st}-{mood}']
                W, H = im.size
                s = (cell - 30) / max(W, H)
                th = im.resize((int(W * s), int(H * s)), Image.LANCZOS)
                ox, oy = c * cell + 22, (st - 1) * cell + 18
                # grid every 5%, labels every 10%
                for k in range(0, 101, 5):
                    col = (190, 190, 205) if k % 10 else (150, 150, 175)
                    x = ox + th.width * k / 100
                    y = oy + th.height * k / 100
                    d.line((x, oy, x, oy + th.height), fill=col)
                    d.line((ox, y, ox + th.width, y), fill=col)
                    if k % 10 == 0:
                        d.text((x - 6, oy - 12), str(k), fill=(90, 90, 120), font=small)
                        d.text((ox - 20, y - 5), str(k), fill=(90, 90, 120), font=small)
                sheet.paste(th, (ox, oy), th)
                if p:
                    lx, ly, rx, ry = [v * s for v in p]
                    col = (230, 0, 60) if src == 'auto' else (0, 140, 255)
                    for (x, y) in ((lx, ly), (rx, ry)):
                        d.ellipse((ox + x - 4, oy + y - 4, ox + x + 4, oy + y + 4), outline=col, width=2)
                    d.line((ox + lx, oy + ly, ox + rx, oy + ry), fill=col, width=1)
                d.text((ox + 2, oy + th.height - 2), f'{pet}/{st}-{mood}' + ('' if p else '  NONE'), fill=(0, 0, 0) if p else (200, 0, 0), font=font)
        sheet.save(os.path.join(out_dir, f'fit-{pet}.png'))
        print('wrote', os.path.join(out_dir, f'fit-{pet}.png'))


def export():
    pts = all_points()
    out, missing = {}, []
    for key, (im, p, src) in pts.items():
        if not p:
            missing.append(key)
            continue
        # and the middle of the body: the centroid of the silhouette (for wings and capes)
        al = np.asarray(im)[..., 3] > 128
        cy, cx = ndimage.center_of_mass(al)
        out[key] = anchor(im, p) + [round(cx / im.size[0], 4), round(cy / im.size[1], 4)]
    sizes = {}
    for pet in PETS:
        for st in range(1, 6):
            im = Image.open(os.path.join(ROOT, pet, f'{st}-happy.webp'))
            sizes[f'{pet}/{st}'] = list(im.size)
    with open(OUT, 'w') as f:
        json.dump({'size': sizes, 'eyes': out}, f, separators=(',', ':'))
    print('wrote', OUT, len(out), 'anchors;', 'missing:', missing)


def zoom(out_path, keys, cell=440):
    """The listed stickers, large, with a 5% grid (labels every 10%), for marking eyes by hand."""
    fx = fixes()
    cols = 3
    rows = (len(keys) + cols - 1) // cols
    sheet = Image.new('RGB', (cell * cols, cell * rows), (238, 238, 243))
    d = ImageDraw.Draw(sheet)
    try:
        font = ImageFont.truetype('arial.ttf', 15)
        small = ImageFont.truetype('arial.ttf', 12)
    except Exception:
        font = small = ImageFont.load_default()
    for k, key in enumerate(keys):
        pet, rest = key.split('/')
        st, mood = rest.split('-')
        im = Image.open(os.path.join(ROOT, pet, f'{st}-{mood}.webp')).convert('RGBA')
        W, H = im.size
        s = (cell - 40) / max(W, H)
        th = im.resize((int(W * s), int(H * s)), Image.LANCZOS)
        ox, oy = (k % cols) * cell + 30, (k // cols) * cell + 22
        for q in range(0, 101, 5):
            col = (200, 200, 215) if q % 10 else (140, 140, 170)
            x = ox + th.width * q / 100
            y = oy + th.height * q / 100
            d.line((x, oy, x, oy + th.height), fill=col)
            d.line((ox, y, ox + th.width, y), fill=col)
            if q % 10 == 0:
                d.text((x - 7, oy - 16), str(q), fill=(70, 70, 110), font=small)
                d.text((ox - 26, y - 7), str(q), fill=(70, 70, 110), font=small)
        sheet.paste(th, (ox, oy), th)
        if key in fx:
            v = fx[key]
            a = np.asarray(im).astype(np.float32)
            r = 0.045 * max(W, H)
            for (x, y) in ((v[0], v[1]), (v[2], v[3])):
                cx, cy = ox + th.width * x / 100, oy + th.height * y / 100
                d.ellipse((cx - 5, cy - 5, cx + 5, cy + 5), outline=(0, 140, 255), width=2)
                if len(v) < 5 or v[4]:
                    sx, sy = snap(a, x * W / 100, y * H / 100, r)
                    sx, sy = ox + sx * s, oy + sy * s
                    d.line((sx - 6, sy, sx + 6, sy), fill=(230, 0, 60), width=2)
                    d.line((sx, sy - 6, sx, sy + 6), fill=(230, 0, 60), width=2)
        d.text((ox + 4, oy + th.height - 18), key, fill=(0, 0, 0), font=font)
    sheet.save(out_path)
    print('wrote', out_path)


if __name__ == '__main__':
    if sys.argv[1] == 'zoom':
        zoom(sys.argv[2], sys.argv[3].split(','))
    elif sys.argv[1] == 'review':
        review(sys.argv[2], sys.argv[3].split(',') if len(sys.argv) > 3 else None)
    else:
        export()
