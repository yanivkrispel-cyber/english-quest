"""Fetches the real animal and thing sounds of Coco's Nest into docs/nest/sounds/ (specs/nest.md, "Real sounds").

    python tools/nest_sounds.py            # fetches what is missing
    python tools/nest_sounds.py --all      # fetches and cuts everything again

The owner allowed real sounds on 2026-10-29 (animals and things, never a human voice). Every sound is from BigSoundBank,
whose sounds are CC0 (public domain equivalent: commercial use, no credit needed); tools/nest-sounds.json lists the page
of each one. The original is kept in ../art/nest/sounds/ (outside the repo); the clip is its loudest stretch (at most
MAX seconds), mono, with short fades, peak-normalized like Coco's clips. A word without a sound here keeps Coco saying it.
They live in their own folder because tools/nest_audio.py removes every file in docs/nest/audio it did not record.
"""
import json, os, sys, urllib.request

import numpy as np
import soundfile as sf

APP = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(APP, 'docs', 'nest', 'sounds')
RAW = os.path.join(os.path.dirname(APP), 'art', 'nest', 'sounds')
LIST = os.path.join(APP, 'tools', 'nest-sounds.json')
RATE = 24000
MAX = 2.2


def loudest(a, rate, secs):
    """The window of `secs` seconds with the most energy."""
    n = int(rate * secs)
    if len(a) <= n:
        return a
    e = np.convolve(a * a, np.ones(int(rate * 0.05)), 'same')
    c = np.cumsum(e)
    best = int(np.argmax(c[n:] - c[:-n]))
    return a[best:best + n]


def cut(src, dst):
    a, rate = sf.read(src, dtype='float32', always_2d=True)
    a = a.mean(axis=1)
    if rate != RATE:
        a = np.interp(np.arange(0, len(a), rate / RATE), np.arange(len(a)), a).astype(np.float32)
    a = loudest(a, RATE, MAX)
    f = int(RATE * 0.04)
    a[:f] *= np.linspace(0, 1, f)
    a[-f * 3:] *= np.linspace(1, 0, f * 3)
    a = a / (float(np.max(np.abs(a))) or 1.0) * 0.8
    with sf.SoundFile(dst, 'w', RATE, 1, format='MP3', compression_level=0.25, bitrate_mode='VARIABLE') as f:
        f.write(a)


def main():
    redo = '--all' in sys.argv
    os.makedirs(OUT, exist_ok=True)
    os.makedirs(RAW, exist_ok=True)
    items = json.load(open(LIST, encoding='utf-8'))['sounds']
    for word, s in items.items():
        dst = os.path.join(OUT, word + '.mp3')
        if os.path.exists(dst) and not redo:
            continue
        raw = os.path.join(RAW, s['id'] + '.mp3')
        if not os.path.exists(raw):
            req = urllib.request.Request('https://bigsoundbank.com/UPLOAD/mp3/%s.mp3' % s['id'], headers={'User-Agent': 'Mozilla/5.0'})
            open(raw, 'wb').write(urllib.request.urlopen(req, timeout=60).read())
        cut(raw, dst)
        print(word, s['id'])
    want = set(w + '.mp3' for w in items)
    for f in os.listdir(OUT):
        if f.endswith('.mp3') and f not in want:
            os.remove(os.path.join(OUT, f))


if __name__ == '__main__':
    main()
