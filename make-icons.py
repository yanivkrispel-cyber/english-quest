# Renders the app icons (docs/icons) used by the web app manifest and iOS home screen.
import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "docs", "icons")
FONT = "C:/Windows/Fonts/segoeuib.ttf"
TOP, BOTTOM = (139, 143, 251), (60, 199, 182)


def gradient(size):
    img = Image.new("RGB", (size, size))
    px = img.load()
    for y in range(size):
        for x in range(size):
            t = (x + y) / (2 * (size - 1))
            px[x, y] = tuple(round(TOP[i] + (BOTTOM[i] - TOP[i]) * t) for i in range(3))
    return img


def icon(size, maskable=False, rounded=True):
    scale = 4  # supersample for smooth edges
    s = size * scale
    bg = gradient(s).convert("RGBA")
    # soft glass highlight in the upper-left corner
    alpha = Image.new("L", (s, s), 0)
    ImageDraw.Draw(alpha).ellipse((-s * 0.35, -s * 0.55, s * 0.9, s * 0.45), fill=70)
    glow = Image.new("RGBA", (s, s), (255, 255, 255, 0))
    glow.putalpha(alpha.filter(ImageFilter.GaussianBlur(s * 0.08)))
    bg = Image.alpha_composite(bg, glow)
    d = ImageDraw.Draw(bg)
    # maskable icons keep the text inside the central 60% safe zone
    font = ImageFont.truetype(FONT, int(s * (0.30 if maskable else 0.40)))
    box = d.textbbox((0, 0), "EQ", font=font)
    w, h = box[2] - box[0], box[3] - box[1]
    d.text(((s - w) / 2 - box[0], (s - h) / 2 - box[1]), "EQ", font=font, fill=(255, 255, 255, 255))
    if rounded and not maskable:
        mask = Image.new("L", (s, s), 0)
        ImageDraw.Draw(mask).rounded_rectangle((0, 0, s - 1, s - 1), radius=int(s * 0.22), fill=255)
        bg.putalpha(mask)
    return bg.resize((size, size), Image.LANCZOS)


os.makedirs(OUT, exist_ok=True)
icon(192).save(os.path.join(OUT, "icon-192.png"))
icon(512).save(os.path.join(OUT, "icon-512.png"))
icon(512, maskable=True).save(os.path.join(OUT, "maskable-512.png"))
icon(180, rounded=False).convert("RGB").save(os.path.join(OUT, "apple-touch-icon.png"))
print("icons written to", OUT)

# Android status-bar badge: white glyph on transparent (Android uses only the alpha channel).
def badge(size):
    s = size * 4
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    font = ImageFont.truetype(FONT, int(s * 0.52))
    box = d.textbbox((0, 0), "EQ", font=font)
    d.text(((s - (box[2] - box[0])) / 2 - box[0], (s - (box[3] - box[1])) / 2 - box[1]), "EQ", font=font, fill=(255, 255, 255, 255))
    return img.resize((size, size), Image.LANCZOS)


badge(96).save(os.path.join(OUT, "badge-96.png"))
print("badge written")
