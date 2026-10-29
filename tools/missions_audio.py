"""Records the Radio Show episodes of the missions (specs/missions.md) with Kokoro, a free open voice model
(kokoro-onnx, Apache 2.0) that runs on this computer without the internet.

    pip install kokoro-onnx soundfile
    (model files kokoro-v1.0.onnx and voices-v1.0.bin, from the kokoro-onnx releases, in KOKORO_DIR)
    python tools/missions_audio.py            # records what is new or changed
    python tools/missions_audio.py --all      # records everything again

One MP3 per part of an episode: docs/missions/audio/<mission>-<part>.mp3. tools/missions-audio.json keeps a hash of
each part's lines and voices, so a part is recorded again only when its text changes. Raise MISSIONS_V in Index.html
after new recordings (the phones keep the old ones otherwise).
"""
import hashlib, json, os, subprocess, sys

import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro

APP = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KOKORO_DIR = os.environ.get('KOKORO_DIR', os.path.join(os.path.dirname(APP), 'kokoro'))
OUT = os.path.join(APP, 'docs', 'missions', 'audio')
STATE = os.path.join(APP, 'tools', 'missions-audio.json')
# Slower for the lower levels, a natural pace at the top.
SPEED = {'a1': 0.85, 'a2': 0.9, 'b1': 0.95, 'bp': 1.0, 'b2': 1.0, 'c1': 1.05}
RATE = 24000
GAP = 0.38  # seconds of silence between lines


def episodes():
    raw = subprocess.check_output(['node', os.path.join(APP, 'tools', 'missions-audio-list.js')], cwd=APP)
    return json.loads(raw.decode('utf-8'))


def main():
    if '--kokoro' not in sys.argv:
        raise SystemExit("Coco's voice moved to Chatterbox: run python tools/voice.py (2026-10-29). This old Kokoro tool runs only with --kokoro.")
    redo = '--all' in sys.argv
    os.makedirs(OUT, exist_ok=True)
    state = json.load(open(STATE, encoding='utf-8')) if os.path.exists(STATE) else {}
    tts = Kokoro(os.path.join(KOKORO_DIR, 'kokoro-v1.0.onnx'), os.path.join(KOKORO_DIR, 'voices-v1.0.bin'))
    made = 0
    for ep in episodes():
        speed = SPEED.get(ep['level'], 1.0)
        for i, lines in enumerate(ep['parts']):
            name = '%s-%d.mp3' % (ep['id'], i + 1)
            key = hashlib.sha1(json.dumps([lines, ep['voices'], speed], ensure_ascii=False).encode('utf-8')).hexdigest()[:16]
            path = os.path.join(OUT, name)
            if not redo and state.get(name) == key and os.path.exists(path):
                continue
            chunks = [np.zeros(int(RATE * 0.15), dtype=np.float32)]
            for who, text in lines:
                voice = ep['voices'][who]
                lang = 'en-gb' if voice.startswith('b') else 'en-us'
                samples, rate = tts.create(text, voice=voice, speed=speed, lang=lang)
                if rate != RATE:
                    raise SystemExit('unexpected sample rate %s' % rate)
                chunks.append(samples.astype(np.float32))
                chunks.append(np.zeros(int(RATE * GAP), dtype=np.float32))
            audio = np.concatenate(chunks)
            peak = float(np.max(np.abs(audio))) or 1.0
            audio = audio / peak * 0.89
            sf.write(path, audio, RATE, format='MP3')
            state[name] = key
            made += 1
            print('%s  %.1f s  %d KB' % (name, len(audio) / RATE, os.path.getsize(path) // 1024))
            json.dump(state, open(STATE, 'w', encoding='utf-8'), indent=0, sort_keys=True)
    print('recorded %d part(s)' % made)


if __name__ == '__main__':
    main()
