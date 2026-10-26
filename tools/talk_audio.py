"""Records Coco's lines for Talk to Coco (specs/talk.md) with Kokoro, the free open voice model the missions use
(kokoro-onnx, Apache 2.0), on this computer without the internet.

    python tools/talk_audio.py            # records what is new or changed
    python tools/talk_audio.py --all      # records everything again

One small MP3 per line: docs/talk/audio/<talk>-<turn><c|r1..r4|o>.mp3, <talk>-e.mp3 (the goodbye) and bank-<key>.mp3
(the lines every talk shares). tools/talk-audio.json keeps a hash of each line, so only new or changed lines are
recorded. Raise TALK_V in Index.html after new recordings (the phones keep the old ones otherwise).
"""
import hashlib, json, os, re, subprocess, sys, time

import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro

APP = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KOKORO_DIR = os.environ.get('KOKORO_DIR', os.path.join(os.path.dirname(APP), 'kokoro'))
OUT = os.path.join(APP, 'docs', 'talk', 'audio')
STATE = os.path.join(APP, 'tools', 'talk-audio.json')
VOICE = 'af_heart'  # Coco
# A little slower for the lower levels; the shared lines at an easy pace.
SPEED = {'a1': 0.88, 'a2': 0.92, 'b1': 0.96, 'bp': 1.0, 'b2': 1.0, 'c1': 1.03, 'bank': 0.92}
RATE = 24000
# Titles the voice would spell out: said in full (the text on screen keeps them).
SAY = [(r'\bMrs\b\.?', 'Missus'), (r'\bMr\b\.?', 'Mister'), (r'\bMs\b\.?', 'Miz'), (r'\bDr\b\.?', 'Doctor')]


def say(text):
    for a, b in SAY:
        text = re.sub(a, b, text)
    return text


def clips():
    raw = subprocess.check_output(['node', os.path.join(APP, 'tools', 'talk-audio-list.js')], cwd=APP)
    return json.loads(raw.decode('utf-8'))


def main():
    redo = '--all' in sys.argv
    os.makedirs(OUT, exist_ok=True)
    state = json.load(open(STATE, encoding='utf-8')) if os.path.exists(STATE) else {}
    tts = Kokoro(os.path.join(KOKORO_DIR, 'kokoro-v1.0.onnx'), os.path.join(KOKORO_DIR, 'voices-v1.0.bin'))
    made, t0, todo = 0, time.time(), clips()
    for n, c in enumerate(todo):
        speed = SPEED.get(c['level'], 1.0)
        name = c['name'] + '.mp3'
        key = hashlib.sha1(json.dumps([say(c['text']), VOICE, speed], ensure_ascii=False).encode('utf-8')).hexdigest()[:16]
        path = os.path.join(OUT, name)
        if not redo and state.get(name) == key and os.path.exists(path):
            continue
        samples, rate = tts.create(say(c['text']), voice=VOICE, speed=speed, lang='en-us')
        if rate != RATE:
            raise SystemExit('unexpected sample rate %s' % rate)
        audio = np.concatenate([np.zeros(int(RATE * 0.08), dtype=np.float32), samples.astype(np.float32), np.zeros(int(RATE * 0.12), dtype=np.float32)])
        peak = float(np.max(np.abs(audio))) or 1.0
        audio = audio / peak * 0.89
        # Speech only: a high compression level keeps each clip small (about 1 KB a second).
        with sf.SoundFile(path, 'w', RATE, 1, format='MP3', compression_level=0.9, bitrate_mode='VARIABLE') as f:
            f.write(audio)
        state[name] = key
        made += 1
        if made % 50 == 0:
            print('%d/%d  %s  %.0f s' % (n + 1, len(todo), name, time.time() - t0), flush=True)
            json.dump(state, open(STATE, 'w', encoding='utf-8'), indent=0, sort_keys=True)
    # Clips of lines that are gone: removed, so the folder holds only what the scripts say.
    want = set(c['name'] + '.mp3' for c in todo)
    for f in os.listdir(OUT):
        if f.endswith('.mp3') and f not in want:
            os.remove(os.path.join(OUT, f))
            state.pop(f, None)
    json.dump(state, open(STATE, 'w', encoding='utf-8'), indent=0, sort_keys=True)
    print('recorded %d clip(s) of %d' % (made, len(todo)))


if __name__ == '__main__':
    main()
