"""Cut a sticker sheet of shop items (flat gray background, white die-cut outlines) into one transparent WebP per item.

usage (from app/): uv run --no-project --with pillow --with numpy --with scipy python tools/cut_items.py <sheet.jpg> docs/items <id1,id2,...> [--size 360] [--no-holes] [--preview preview.png]
Items are taken row by row, left to right, and named by the ids (use '-' to skip one). Unlike pet stickers,
each item gets its own tight canvas. Gray background seen through an opening (the eye holes of a mask, empty
glasses frames) becomes transparent too, so the pet's eyes show through; --no-holes turns that off (creatures
whose colors are close to the gray).
"""
import sys, os
import numpy as np
from PIL import Image
from scipy import ndimage

TOL = 38          # max color distance from the background color that still counts as background
PAD = 6           # transparent margin around each item (px)


def cut(path, out_dir, ids, size=360, preview=None, punch=True):
    im = np.asarray(Image.open(path).convert('RGB')).astype(np.int16)
    h, w, _ = im.shape
    border = np.concatenate([im[0], im[-1], im[:, 0], im[:, -1]])
    bg = np.median(border, axis=0)
    dist = np.sqrt(((im - bg) ** 2).sum(axis=2))
    bglike = dist < TOL

    lab, _ = ndimage.label(bglike)
    edge_labels = np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))
    edge_labels = edge_labels[edge_labels > 0]
    background = np.isin(lab, edge_labels)
    fg = ndimage.binary_fill_holes(~background)
    # Openings: background-colored pockets inside an item that are big enough to be a hole, not a gray detail.
    holes = bglike & fg & ~background
    hl, hn = ndimage.label(holes)
    if not punch:
        holes[:] = False
    elif hn:
        hs = ndimage.sum(holes, hl, range(1, hn + 1))
        big = [i + 1 for i, s in enumerate(hs) if s > 0.0004 * h * w]
        holes = np.isin(hl, big)

    flab, n = ndimage.label(fg)
    sizes = ndimage.sum(fg, flab, range(1, n + 1))
    keep = [i + 1 for i, s in enumerate(sizes) if s > 0.004 * h * w]
    if len(keep) != len(ids):
        raise SystemExit(f'{path}: expected {len(ids)} items, found {len(keep)} (sizes {sorted(int(s) for s in sizes if s > 500)})')

    boxes = []
    for i in keep:
        ys, xs = np.where(flab == i)
        boxes.append((i, ys.min(), ys.max(), xs.min(), xs.max(), (ys.min() + ys.max()) / 2, xs.mean()))
    # Rows: items whose vertical centers are close belong together.
    boxes.sort(key=lambda b: b[5])
    rows, cur = [], [boxes[0]]
    for b in boxes[1:]:
        if b[5] - cur[-1][5] > 0.18 * h:
            rows.append(cur)
            cur = [b]
        else:
            cur.append(b)
    rows.append(cur)
    ordered = [b for r in rows for b in sorted(r, key=lambda b: b[6])]

    rgb = im.astype(np.float32)
    lum = rgb.mean(axis=2)
    bg_l = float(bg.mean())
    edge = (fg & ~ndimage.binary_erosion(fg, iterations=3)) | (holes & ndimage.binary_dilation(~holes, iterations=3))
    chroma = rgb.max(axis=2) - rgb.min(axis=2)
    soft = edge & (chroma < 30)
    alpha = np.where(fg & ~holes, 255.0, 0.0)
    alpha[soft] = np.clip((lum[soft] - bg_l) / (255 - bg_l), 0, 1) * 255
    out_rgb = rgb.copy()
    out_rgb[soft] = 255

    os.makedirs(out_dir, exist_ok=True)
    tiles = []
    for name, (i, y0, y1, x0, x1, _, _) in zip(ids, ordered):
        if name == '-':
            continue
        mask = flab == i
        grown = ndimage.binary_dilation(mask, iterations=4) & (fg | soft)
        a = np.where(grown, alpha, 0)
        y0, y1 = max(0, y0 - 4), min(h - 1, y1 + 4)
        x0, x1 = max(0, x0 - 4), min(w - 1, x1 + 4)
        rgba = np.dstack([out_rgb[y0:y1 + 1, x0:x1 + 1], a[y0:y1 + 1, x0:x1 + 1]]).astype(np.uint8)
        c = Image.fromarray(rgba, 'RGBA')
        c.thumbnail((size, size), Image.LANCZOS)
        canvas = Image.new('RGBA', (c.width + 2 * PAD, c.height + 2 * PAD), (0, 0, 0, 0))
        canvas.paste(c, (PAD, PAD), c)
        canvas.save(os.path.join(out_dir, f'{name}.webp'), 'WEBP', quality=88, alpha_quality=100, method=6)
        tiles.append(canvas)
        print(f'  {name}: {canvas.width}x{canvas.height}, {os.path.getsize(os.path.join(out_dir, name + ".webp")) // 1024} KB')
    if preview and tiles:
        W = sum(t.width for t in tiles) + 10 * len(tiles)
        H = max(t.height for t in tiles)
        check = Image.new('RGBA', (W, H), (255, 255, 255, 255))
        px = check.load()
        for yy in range(H):
            for xx in range(W):
                if (xx // 16 + yy // 16) % 2:
                    px[xx, yy] = (205, 210, 225, 255)
        x = 0
        for t in tiles:
            check.alpha_composite(t, (x, 0))
            x += t.width + 10
        check.convert('RGB').save(preview)


if __name__ == '__main__':
    args = sys.argv[1:]
    prev, size, punch = None, 360, True
    if '--no-holes' in args:
        args.remove('--no-holes')
        punch = False
    if '--preview' in args:
        k = args.index('--preview')
        prev = args[k + 1]
        args = args[:k] + args[k + 2:]
    if '--size' in args:
        k = args.index('--size')
        size = int(args[k + 1])
        args = args[:k] + args[k + 2:]
    cut(args[0], args[1], args[2].split(','), size, prev, punch)
