"""Cut a 3x2 sticker sheet (flat gray background, white die-cut outlines) into 6 transparent WebP stickers.

usage (from app/): uv run --no-project --with pillow --with numpy --with scipy python tools/cut_sheet.py <sheet.jpg> docs/pets/<pet> <stage> [--preview preview.png]
Writes <out_dir>/<stage>-<emotion>.webp for the emotions in EMOTIONS order (row-major on the sheet).
All six share one canvas size, bottom-aligned, so swapping emotions keeps the character in place.
"""
import sys, os
import numpy as np
from PIL import Image
from scipy import ndimage

EMOTIONS = ['happy', 'celebrate', 'thinking', 'oops', 'sleepy', 'cool']
TOL = 38          # max color distance from the background color that still counts as background
PAD = 8           # transparent margin around each sticker (px)


def cut(path, out_dir, stage, preview=None):
    im = np.asarray(Image.open(path).convert('RGB')).astype(np.int16)
    h, w, _ = im.shape
    border = np.concatenate([im[0], im[-1], im[:, 0], im[:, -1]])
    bg = np.median(border, axis=0)
    dist = np.sqrt(((im - bg) ** 2).sum(axis=2))
    bglike = dist < TOL

    # Background = bg-like pixels connected to the image border (the white outlines stop the fill).
    lab, _ = ndimage.label(bglike)
    edge_labels = np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))
    edge_labels = edge_labels[edge_labels > 0]
    background = np.isin(lab, edge_labels)
    fg = ~background
    fg = ndimage.binary_fill_holes(fg)

    flab, n = ndimage.label(fg)
    sizes = ndimage.sum(fg, flab, range(1, n + 1))
    keep = [i + 1 for i, s in enumerate(sizes) if s > 0.012 * h * w]
    if len(keep) != 6:
        raise SystemExit(f'{path}: expected 6 stickers, found {len(keep)} (sizes {sorted(int(s) for s in sizes if s > 500)})')

    boxes = []
    for i in keep:
        ys, xs = np.where(flab == i)
        boxes.append((i, ys.min(), ys.max(), xs.min(), xs.max(), ys.mean(), xs.mean()))
    # Two rows: split at the largest gap between centroid ys.
    boxes.sort(key=lambda b: b[5])
    gaps = [boxes[k + 1][5] - boxes[k][5] for k in range(5)]
    cut_at = int(np.argmax(gaps)) + 1
    if cut_at != 3:
        raise SystemExit(f'{path}: rows are not 3+3 (split after {cut_at})')
    ordered = sorted(boxes[:3], key=lambda b: b[6]) + sorted(boxes[3:], key=lambda b: b[6])

    # Alpha: inside = opaque. The outermost ring of the sticker blends the white outline into the
    # gray background, so derive alpha from brightness there and paint it white.
    rgb = im.astype(np.float32)
    lum = rgb.mean(axis=2)
    bg_l = float(bg.mean())
    ring = fg & ~ndimage.binary_erosion(fg, iterations=3)
    chroma = rgb.max(axis=2) - rgb.min(axis=2)
    soft = ring & (chroma < 30)
    alpha = np.where(fg, 255.0, 0.0)
    alpha[soft] = np.clip((lum[soft] - bg_l) / (255 - bg_l), 0, 1) * 255
    out_rgb = rgb.copy()
    out_rgb[soft] = 255

    crops = []
    for (i, y0, y1, x0, x1, _, _) in ordered:
        mask = flab == i
        # include the soft ring pixels that belong to this sticker
        grown = ndimage.binary_dilation(mask, iterations=4) & (fg | soft)
        a = np.where(grown, alpha, 0)
        y0, y1 = max(0, y0 - 4), min(h - 1, y1 + 4)
        x0, x1 = max(0, x0 - 4), min(w - 1, x1 + 4)
        rgba = np.dstack([out_rgb[y0:y1 + 1, x0:x1 + 1], a[y0:y1 + 1, x0:x1 + 1]]).astype(np.uint8)
        crops.append(Image.fromarray(rgba, 'RGBA'))

    W = max(c.width for c in crops) + 2 * PAD
    H = max(c.height for c in crops) + 2 * PAD
    os.makedirs(out_dir, exist_ok=True)
    tiles = []
    for emo, c in zip(EMOTIONS, crops):
        canvas = Image.new('RGBA', (W, H), (0, 0, 0, 0))
        canvas.paste(c, ((W - c.width) // 2, H - PAD - c.height), c)
        canvas.save(os.path.join(out_dir, f'{stage}-{emo}.webp'), 'WEBP', quality=88, alpha_quality=100, method=6)
        tiles.append(canvas)
    if preview:
        sheet = Image.new('RGBA', (W * 6, H), (0, 0, 0, 0))
        check = Image.new('RGBA', (W * 6, H), (255, 255, 255, 255))
        px = check.load()
        for yy in range(0, H, 16):
            for xx in range(0, W * 6, 16):
                if (xx // 16 + yy // 16) % 2:
                    for dy in range(min(16, H - yy)):
                        for dx in range(min(16, W * 6 - xx)):
                            px[xx + dx, yy + dy] = (205, 210, 225, 255)
        for k, t in enumerate(tiles):
            sheet.paste(t, (k * W, 0), t)
        Image.alpha_composite(check, sheet).convert('RGB').save(preview)
    sizes = [os.path.getsize(os.path.join(out_dir, f'{stage}-{e}.webp')) for e in EMOTIONS]
    print(f'{os.path.basename(path)} -> {out_dir} stage {stage}: canvas {W}x{H}, {sum(sizes) // 1024} KB total')


if __name__ == '__main__':
    args = sys.argv[1:]
    prev = None
    if '--preview' in args:
        k = args.index('--preview')
        prev = args[k + 1]
        args = args[:k] + args[k + 2:]
    cut(args[0], args[1], int(args[2]), prev)
