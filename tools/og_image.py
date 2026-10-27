# The link preview picture (WhatsApp, Telegram, Facebook): docs/icons/share.jpg, 1200x630, Coco on the app's warm
# glass background with the name. Run from app/: python tools/og_image.py  (build-pages.js adds the og: tags).
from PIL import Image, ImageDraw, ImageFilter, ImageFont

W, H = 1200, 630
img = Image.new('RGB', (W, H), (236, 230, 224))

# Soft color blobs like the app's background.
glow = Image.new('RGB', (W, H), (236, 230, 224))
d = ImageDraw.Draw(glow)
for (x, y, r, c) in [(140, 120, 260, (167, 160, 250)), (1080, 520, 300, (120, 214, 200)), (980, 90, 220, (246, 190, 140)), (300, 600, 240, (240, 170, 200))]:
    d.ellipse((x - r, y - r, x + r, y + r), fill=c)
img = Image.blend(img, glow.filter(ImageFilter.GaussianBlur(120)), 0.75)

coco = Image.open('docs/coco/happy.webp').convert('RGBA')
coco.thumbnail((470, 470))
shadow = Image.new('RGBA', coco.size, (0, 0, 0, 0))
shadow.putalpha(coco.getchannel('A').point(lambda a: a * 0.25))
shadow = shadow.filter(ImageFilter.GaussianBlur(14))
cx, cy = 110, (H - coco.height) // 2 + 10
img.paste(shadow, (cx + 8, cy + 16), shadow)
img.paste(coco, (cx, cy), coco)

draw = ImageDraw.Draw(img)
ink, muted, accent = (30, 27, 46), (90, 86, 110), (99, 102, 241)
bold = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 84)
semi = ImageFont.truetype('C:/Windows/Fonts/seguisb.ttf', 40) if __import__('os').path.exists('C:/Windows/Fonts/seguisb.ttf') else ImageFont.truetype('C:/Windows/Fonts/segoeui.ttf', 40)
x = 640
draw.text((x, 170), 'English', font=bold, fill=ink)
draw.text((x, 262), 'with Coco', font=bold, fill=accent)
draw.text((x, 392), '10 minutes a day.', font=semi, fill=muted)
draw.text((x, 444), 'Missions, games and', font=semi, fill=muted)
draw.text((x, 496), 'talks with Coco.', font=semi, fill=muted)

img.save('docs/icons/share.jpg', quality=86, optimize=True, progressive=True)
print('docs/icons/share.jpg', img.size)
