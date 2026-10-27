"""Records the clips of Coco's Nest (specs/nest.md) into docs/nest/audio/.

    python tools/nest_audio.py            # records what is new or changed
    python tools/nest_audio.py --all      # records everything again

w-<word id>.mp3 (the word's `say`), f-<word id>.mp3 (its `find` question) and en-<key>.mp3 (Coco's lines) are Kokoro
(kokoro-onnx, Apache 2.0, on this computer, voice am_fenrir, slow for small kids). he-<key>.mp3 (the Hebrew lines for the
kid) are Microsoft Edge's multilingual neural voice en-US-EmmaMultilingualNeural (it reads Hebrew; chosen over he-IL-HilaNeural by ear and by a Hebrew speech-recognition test, 2026-10-27) through edge-tts (needs the internet; only our own fixed text
from docs/nest/nest.js is sent, nothing about a kid). Every clip is peak-normalized and written with the same MP3
settings as tools/talk_audio.py but a higher MP3 quality (0.25: the old 0.9 squeezed Hebrew to about 28 kbps). tools/nest-audio.json keeps a hash of each clip, so only new or changed clips are
recorded; clips nest.js no longer needs are removed. Raise NEST_V in Index.html after new recordings.
The clip list comes from tools/nest-audio-list.js.
"""
import asyncio, hashlib, json, os, subprocess, sys, tempfile, time

import numpy as np
import soundfile as sf

APP = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KOKORO_DIR = os.environ.get('KOKORO_DIR', os.path.join(os.path.dirname(APP), 'kokoro'))
OUT = os.path.join(APP, 'docs', 'nest', 'audio')
STATE = os.path.join(APP, 'tools', 'nest-audio.json')
VOICE = 'am_fenrir'  # Coco (a he; the owner chose Fenrir on 2026-10-27, before that af_heart)
SPEED = {'word': 0.82, 'find': 0.86, 'en': 0.9}
HE_VOICE, HE_RATE = 'en-US-EmmaMultilingualNeural', '+0%'  # Emma reads Hebrew more naturally than Hila (2026-10-27)
RATE = 24000


def clips():
    raw = subprocess.check_output(['node', os.path.join(APP, 'tools', 'nest-audio-list.js')], cwd=APP)
    return json.loads(raw.decode('utf-8'))


def write(path, samples):
    """Pads, peak-normalizes and writes one clip (the settings of talk_audio.py)."""
    audio = np.concatenate([np.zeros(int(RATE * 0.08), dtype=np.float32), samples.astype(np.float32),
                            np.zeros(int(RATE * 0.12), dtype=np.float32)])
    peak = float(np.max(np.abs(audio))) or 1.0
    audio = audio / peak * 0.89
    with sf.SoundFile(path, 'w', RATE, 1, format='MP3', compression_level=0.25, bitrate_mode='VARIABLE') as f:
        f.write(audio)


def trim(samples, floor=0.01):
    """Cuts the silence the Hebrew voice leaves at both ends (write() adds the same padding as Kokoro's clips)."""
    loud = np.where(np.abs(samples) > floor * (float(np.max(np.abs(samples))) or 1.0))[0]
    if not len(loud):
        return samples
    a, b = max(0, loud[0] - int(RATE * 0.03)), min(len(samples), loud[-1] + int(RATE * 0.05))
    return samples[a:b]


def hebrew(text):
    import edge_tts
    tmp = tempfile.NamedTemporaryFile(suffix='.mp3', delete=False)
    tmp.close()
    try:
        for attempt in range(4):
            try:
                asyncio.run(edge_tts.Communicate(text, HE_VOICE, rate=HE_RATE).save(tmp.name))
                break
            except Exception:
                if attempt == 3:
                    raise
                time.sleep(2)
        samples, rate = sf.read(tmp.name, dtype='float32')
    finally:
        os.remove(tmp.name)
    if samples.ndim > 1:
        samples = samples.mean(axis=1)
    if rate != RATE:
        raise SystemExit('unexpected Hebrew sample rate %s' % rate)
    return trim(samples)


def main():
    redo = '--all' in sys.argv
    os.makedirs(OUT, exist_ok=True)
    state = json.load(open(STATE, encoding='utf-8')) if os.path.exists(STATE) else {}
    tts = None
    made, t0, todo = 0, time.time(), clips()
    for n, c in enumerate(todo):
        name = c['name'] + '.mp3'
        how = [HE_VOICE, HE_RATE] if c['voice'] == 'he' else [VOICE, SPEED[c['voice']]]
        key = hashlib.sha1(json.dumps([c['text']] + how, ensure_ascii=False).encode('utf-8')).hexdigest()[:16]
        path = os.path.join(OUT, name)
        if not redo and state.get(name) == key and os.path.exists(path):
            continue
        if c['voice'] == 'he':
            samples = hebrew(c['text'])
        else:
            if tts is None:
                from kokoro_onnx import Kokoro
                tts = Kokoro(os.path.join(KOKORO_DIR, 'kokoro-v1.0.onnx'), os.path.join(KOKORO_DIR, 'voices-v1.0.bin'))
            samples, rate = tts.create(c['text'], voice=VOICE, speed=SPEED[c['voice']], lang='en-us')
            if rate != RATE:
                raise SystemExit('unexpected sample rate %s' % rate)
        write(path, samples)
        state[name] = key
        made += 1
        if made % 10 == 0:
            print('%d/%d  %s  %.0f s' % (n + 1, len(todo), name, time.time() - t0), flush=True)
            json.dump(state, open(STATE, 'w', encoding='utf-8'), indent=0, sort_keys=True)
    want = set(c['name'] + '.mp3' for c in todo)
    for f in os.listdir(OUT):
        if f.endswith('.mp3') and f not in want:
            os.remove(os.path.join(OUT, f))
            state.pop(f, None)
    json.dump(state, open(STATE, 'w', encoding='utf-8'), indent=0, sort_keys=True)
    print('recorded %d clip(s) of %d' % (made, len(todo)))


if __name__ == '__main__':
    main()
