# The Google Play pictures made from the app's own clay art (store/README.md). Run from the repo root:
#   python tools/store_art.py
# Writes:
#   docs/icons/play-512.png   the store listing's hi-res icon: 512x512, a full square (Play rounds the corners itself),
#                             the same gradient tile and Chacho as the app icon (make-icons.py), Chacho a little larger.
#   docs/icons/mono-192.png   the notification icon for the Android app (twa-manifest.json monochromeIconUrl): Chacho's
#                             outline in white on transparent (Android uses only the alpha channel).
# The feature graphic (1024x500) is drawn as a web page with the app's font and colors: store/art/feature.html,
# shot by `node store/art/shoot.js` (Playwright).
import os
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ICONS = os.path.join(ROOT, "docs", "icons")
COCO = os.path.join(ROOT, "docs", "coco", "happy.webp")
TOP, BOTTOM = (139, 143, 251), (60, 199, 182)  # the app icon's tile (make-icons.py)


def gradient(s):
    img = Image.new("RGB", (s, s))
    px = img.load()
    for y in range(s):
        for x in range(s):
            t = (x + y) / (2 * (s - 1))
            px[x, y] = tuple(round(TOP[i] + (BOTTOM[i] - TOP[i]) * t) for i in range(3))
    return img


def play_icon(size=512):
    s = size * 4
    bg = gradient(s).convert("RGBA")
    alpha = Image.new("L", (s, s), 0)
    ImageDraw.Draw(alpha).ellipse((-s * 0.35, -s * 0.55, s * 0.9, s * 0.45), fill=70)
    glow = Image.new("RGBA", (s, s), (255, 255, 255, 0))
    glow.putalpha(alpha.filter(ImageFilter.GaussianBlur(s * 0.08)))
    bg = Image.alpha_composite(bg, glow)
    coco = Image.open(COCO).convert("RGBA")
    # Play masks the icon to a rounded square (about 20% corner radius): Chacho stays inside 78% of the side.
    k = s * 0.78 / max(coco.size)
    coco = coco.resize((round(coco.width * k), round(coco.height * k)), Image.LANCZOS)
    bg.alpha_composite(coco, ((s - coco.width) // 2, (s - coco.height) // 2 + int(s * 0.02)))
    # A full, opaque square (Play rounds it and adds the shadow), saved as a 32-bit PNG as Play asks.
    return bg.resize((size, size), Image.LANCZOS)


def mono_icon(size=192):
    s = size * 4
    coco = Image.open(COCO).convert("RGBA")
    k = s * 0.86 / max(coco.size)
    coco = coco.resize((round(coco.width * k), round(coco.height * k)), Image.LANCZOS)
    a = coco.split()[3].point(lambda v: 255 if v > 96 else 0)
    out = Image.new("RGBA", (s, s), (255, 255, 255, 0))
    white = Image.new("RGBA", coco.size, (255, 255, 255, 255))
    out.paste(white, ((s - coco.width) // 2, (s - coco.height) // 2), a)
    return out.resize((size, size), Image.LANCZOS)


if __name__ == "__main__":
    play_icon().save(os.path.join(ICONS, "play-512.png"), optimize=True)
    mono_icon().save(os.path.join(ICONS, "mono-192.png"), optimize=True)
    print("written: docs/icons/play-512.png, docs/icons/mono-192.png")
