"""Coco's voice: records every line the app speaks with Chatterbox (MIT, free) on a free Kaggle GPU.

    python tools/voice.py            records what changed since the last run, then finishes it into docs/
    python tools/voice.py --all      records everything again
    python tools/voice.py --finish   finishes the parts already downloaded (after a stop), records nothing
    python tools/voice.py --dry      prints what would be recorded
    python tools/voice.py --sample   records a few lines of each kind (a quick check of the whole chain)
    python tools/voice.py --redo     records the lines of the last review.json again (other takes; a file is replaced
                                     only when the new take scores better)
    python tools/voice.py refs       makes the radio voices' reference clips again (tools/voice-refs, from Kokoro)

The lines come from tools/voice-list.js. Each is cloned from a reference clip in tools/voice-refs (coco.flac is the
voice the owner picked on 2026-10-29; the radio characters keep the colour of their old Kokoro voice). On Kaggle every
take is checked with Whisper and the best of a few is kept (tools/voice_kernel.py). Here each clip is trimmed, slowed
for the younger kids (pitch kept), brought to one loudness and written as MP3; the lines of a radio part are joined.
tools/voice-state.json remembers what was recorded, so a run records only new or changed lines. A take that Whisper
could not match at all is not used (the old file, or the phone's voice for docs/say, stays) and is listed in
<VOICE_WORK>/review.json. Needs the Kaggle CLI logged in (~/.kaggle/access_token), librosa and soundfile.
After a run: raise TALK_V, NEST_V, MISSIONS_V and SAY_V in Index.html for what changed.
"""
import hashlib, json, math, os, re, shutil, subprocess, sys, time
from difflib import SequenceMatcher
import numpy as np
import soundfile as sf

APP = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(APP, 'docs')
REFS = os.path.join(APP, 'tools', 'voice-refs')
STATE = os.path.join(APP, 'tools', 'voice-state.json')
WORK = os.environ.get('VOICE_WORK', os.path.join(os.path.dirname(APP), 'EnglishLessons-work', 'voice-run'))
USER = os.environ.get('KAGGLE_USER', 'yanivkrispel')
DATASET = USER + '/coco-voice-data'
RATE = 24000
PART_SIZE = 2500  # lines per Kaggle run: about two and a half hours on two T4s, under the 12-hour limit
V = 1  # raise to record everything again with new settings
# Expressiveness (Chatterbox exaggeration, cfg weight) by kind: lively talk, calmer single words and listening.
EX = {'talk': (0.7, 0.4), 'nest-en': (0.7, 0.4), 'nest-find': (0.6, 0.45), 'nest-word': (0.5, 0.5), 'radio': (0.6, 0.45),
      'listen': (0.45, 0.5), 'word': (0.45, 0.5), 'story': (0.55, 0.45)}
# Pace: 1 is Chatterbox as it is, below 1 slower (the pitch stays).
PACE = {'nest-word': 0.85, 'nest-find': 0.9, 'nest-en': 0.94, 'word': 0.95, 'listen': 0.95, 'story': 0.95,
        'talk-a1': 0.93, 'talk-a2': 0.96, 'talk-bank': 0.96, 'radio-a1': 0.93, 'radio-a2': 0.96, 'story-a1': 0.9}
GAP = 0.38  # seconds between the lines of a radio part
# Titles the voice would spell out: said in full (the text on screen keeps them).
SAY = [(r'\bMrs\b\.?', 'Missus'), (r'\bMr\b\.?', 'Mister'), (r'\bMs\b\.?', 'Miz'), (r'\bDr\b\.?', 'Doctor')]
LEAD = 'Okay. '
REF_TEXT = ("Hi there! I love learning new words with you. Let's play a game today, okay? "
            "You are doing a really great job, and I'm so proud of you.")


def say(text):
    for a, b in SAY:
        text = re.sub(a, b, text)
    return text


def lines():
    raw = subprocess.check_output(['node', os.path.join(APP, 'tools', 'voice-list.js')], cwd=APP)
    out = json.loads(raw.decode('utf-8'))
    for c in out:
        c['say'] = say(c['text'])
        c['ex'], c['cfg'] = EX[c['kind']]
        c['hash'] = hashlib.sha1(json.dumps([c['say'], c['ref'], c['ex'], c['cfg'], pace(c), V]).encode('utf-8')).hexdigest()[:16]
        # One or two words lose their first sound when said alone (pen -> hen): Chatterbox says them after a lead-in,
        # which the kernel cuts off. Not part of the hash, so the lines recorded before it stay.
        c['lead'] = LEAD if len(c['text'].split()) <= 2 else ''
    return out


def pace(c):
    return PACE.get(c['kind'] + '-' + c.get('level', ''), PACE.get(c['kind'], 1.0))


def load_state():
    return json.load(open(STATE, encoding='utf-8')) if os.path.exists(STATE) else {'clips': {}, 'times': {}}


def save_state(st):
    json.dump(st, open(STATE, 'w', encoding='utf-8'), indent=0, sort_keys=True)


def group(c):
    return c['id'].split('#')[0]


def cache(c):
    """A radio line after finishing, kept to join its part again when another line of the part changes."""
    return os.path.join(WORK, 'lines', group(c).replace('/', '_') + '_' + c['id'].split('#')[1] + '.flac')


def done(c, st):
    if st['clips'].get(c['id']) != c['hash']:
        return False
    return os.path.exists(cache(c)) if '#' in c['id'] else os.path.exists(os.path.join(DOCS, c['id'] + '.mp3'))


def kaggle(*args, check=True):
    r = subprocess.run(['kaggle'] + list(args), capture_output=True, text=True, encoding='utf-8', errors='replace')
    if check and r.returncode:
        raise SystemExit('kaggle %s failed: %s' % (' '.join(args), (r.stderr or r.stdout).strip()))
    return (r.stdout or '') + (r.stderr or '')


# ---------- references ----------

def make_refs():
    from kokoro_onnx import Kokoro
    k = os.environ.get('KOKORO_DIR', os.path.join(os.path.dirname(APP), 'kokoro'))
    tts = Kokoro(os.path.join(k, 'kokoro-v1.0.onnx'), os.path.join(k, 'voices-v1.0.bin'))
    voices = sorted({c['ref'] for c in lines()} - {'coco'})
    for v in voices:
        s, r = tts.create(REF_TEXT, voice=v, speed=1.0, lang='en-gb' if v.startswith('b') else 'en-us')
        sf.write(os.path.join(REFS, v + '.flac'), s, r)
    print(len(voices), 'reference clips in', REFS)


# ---------- recording on Kaggle ----------

def upload(todo):
    data = os.path.join(WORK, 'data')
    shutil.rmtree(data, ignore_errors=True)
    os.makedirs(data)
    # Kaggle skips folders in a dataset: every file sits at the top.
    for v in sorted({c['ref'] for c in todo}):
        y, r = sf.read(os.path.join(REFS, v + '.flac'))
        sf.write(os.path.join(data, 'ref-' + v + '.wav'), y, r)
    json.dump([{k: c[k] for k in ('n', 'part', 'id', 'hash', 'kind', 'level', 'say', 'text', 'ref', 'ex', 'cfg', 'lead', 'seed', 'old')
               if k in c} for c in todo],
              open(os.path.join(data, 'lines.json'), 'w', encoding='utf-8'), ensure_ascii=False)
    json.dump({'title': 'coco-voice-data', 'id': DATASET, 'licenses': [{'name': 'other'}]},
              open(os.path.join(data, 'dataset-metadata.json'), 'w'))
    if 'ref' in kaggle('datasets', 'list', '--mine', '-s', 'coco-voice-data', check=False):
        kaggle('datasets', 'version', '-p', data, '-m', 'run %s' % time.strftime('%Y-%m-%d %H:%M'), '-q')
    else:
        kaggle('datasets', 'create', '-p', data, '-q')
    time.sleep(30)
    for _ in range(60):
        if 'ready' in kaggle('datasets', 'status', DATASET, check=False).lower():
            return
        time.sleep(15)
    raise SystemExit('the Kaggle dataset did not get ready')


def run_part(p, parts):
    slug = '%s/coco-voice-part%d' % (USER, p + 1)
    kdir = os.path.join(WORK, 'kernel%d' % (p + 1))
    shutil.rmtree(kdir, ignore_errors=True)
    os.makedirs(kdir)
    code = open(os.path.join(APP, 'tools', 'voice_kernel.py'), encoding='utf-8').read()
    code = code.replace('PART, PARTS = 0, 1', 'PART, PARTS = %d, %d' % (p, parts), 1)
    open(os.path.join(kdir, 'voice_kernel.py'), 'w', encoding='utf-8').write(code)
    json.dump({'id': slug, 'title': 'coco-voice-part%d' % (p + 1), 'code_file': 'voice_kernel.py', 'language': 'python',
               'kernel_type': 'script', 'is_private': True, 'enable_gpu': True, 'enable_internet': True,
               'dataset_sources': [DATASET], 'competition_sources': [], 'kernel_sources': [], 'machine_shape': 'NvidiaTeslaT4'},
              open(os.path.join(kdir, 'kernel-metadata.json'), 'w'))
    print('part %d of %d: pushing %s' % (p + 1, parts, slug), flush=True)
    kaggle('kernels', 'push', '-p', kdir)
    time.sleep(60)
    t0 = time.time()
    while True:
        s = kaggle('kernels', 'status', slug, check=False).lower()
        if 'complete' in s:
            break
        if 'error' in s or 'cancel' in s:
            raise SystemExit('part %d stopped on Kaggle: %s (log: kaggle kernels output %s)' % (p + 1, s.strip(), slug))
        time.sleep(60)
    print('part %d done on Kaggle in %d min, downloading' % (p + 1, (time.time() - t0) / 60), flush=True)
    out = os.path.join(WORK, 'out-part%d' % (p + 1))
    shutil.rmtree(out, ignore_errors=True)
    os.makedirs(out)
    kaggle('kernels', 'output', slug, '-p', out, '-q')
    return out


# ---------- finishing ----------

def norm_words(t):
    sys.path.insert(0, os.path.join(APP, 'tools'))
    from voice_kernel import words
    return words(t)


def story_times(c, ws, trim0, p):
    """Start time of each word of the story card in the finished file, from Whisper's word times."""
    toks = c['text'].split(' ')
    a = [' '.join(norm_words(t)) for t in toks]
    b = [' '.join(norm_words(w[0])) for w in ws]
    at = [None] * len(toks)
    for blk in SequenceMatcher(None, a, b, autojunk=False).get_matching_blocks():
        for i in range(blk.size):
            at[blk.a + i] = ws[blk.b + i][1]
    known = [(i, t) for i, t in enumerate(at) if t is not None]
    if not known:
        return None
    for i in range(len(at)):
        if at[i] is None:
            prev = max((k for k in known if k[0] < i), default=(None, None), key=lambda k: k[0])
            nxt = min((k for k in known if k[0] > i), default=(None, None), key=lambda k: k[0])
            if prev[0] is None:
                at[i] = nxt[1]
            elif nxt[0] is None:
                at[i] = prev[1] + 0.3 * (i - prev[0])
            else:
                at[i] = prev[1] + (nxt[1] - prev[1]) * (i - prev[0]) / (nxt[0] - prev[0])
    return [round(max(0.0, (t - trim0) / p) + 0.08, 2) for t in at]


def level(y):
    rms = float(np.sqrt(np.mean(y ** 2))) or 1e-6
    y = y * (0.1 / rms)  # about -20 dBFS: every clip as loud as the others
    peak = float(np.max(np.abs(y))) or 1.0
    return (y * (0.95 / peak) if peak > 0.95 else y).astype(np.float32)


def write_mp3(path, y):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    y = np.concatenate([np.zeros(int(RATE * 0.08), np.float32), y, np.zeros(int(RATE * 0.12), np.float32)])
    with sf.SoundFile(path, 'w', RATE, 1, format='MP3', compression_level=0.25, bitrate_mode='VARIABLE') as f:
        f.write(y)


def finish(out, by_n, st, review):
    import librosa
    res = json.load(open(os.path.join(out, 'results.json'), encoding='utf-8'))
    parts, made = set(), 0
    for r in res:
        c = by_n[r['n']]
        f = os.path.join(out, 'out', '%d.flac' % r['n'])
        if 'old' in c and r['score'] <= c['old']['score']:
            review.append(c['old'])  # a redo that did no better: the file stays as it was
            continue
        if r['score'] < 0.9:
            review.append({'id': c['id'], 'text': c['text'], 'heard': r['heard'], 'score': r['score']})
        if r['score'] < 0.5 or not os.path.exists(f):
            continue
        y, _ = librosa.load(f, sr=RATE)
        y, idx = librosa.effects.trim(y, top_db=38)
        p = pace(c)
        if p != 1.0:
            y = librosa.effects.time_stretch(y, rate=p)
        y = level(y)
        if '#' in c['id']:
            os.makedirs(os.path.dirname(cache(c)), exist_ok=True)
            sf.write(cache(c), y, RATE)
            parts.add(group(c))
        else:
            write_mp3(os.path.join(DOCS, c['id'] + '.mp3'), y)
            if c['kind'] == 'story':
                t = story_times(c, r['words'], idx[0] / RATE, p)
                if t:
                    st['times'][c['id'].split('/', 1)[1]] = t
            made += 1
        st['clips'][c['id']] = c['hash']
    return made, parts


def join_parts(parts, all_lines, st):
    made = 0
    for g in sorted(parts):
        mine = sorted((c for c in all_lines if group(c) == g), key=lambda c: int(c['id'].split('#')[1]))
        if not all(done(c, st) for c in mine):
            continue  # a line of this part is still missing: the old file stays
        gap = np.zeros(int(RATE * GAP), np.float32)
        ys = []
        for c in mine:
            ys += [sf.read(cache(c), dtype='float32')[0], gap]
        write_mp3(os.path.join(DOCS, g + '.mp3'), np.concatenate(ys[:-1]))
        made += 1
    return made


def write_keys(st, all_lines):
    keys = sorted(c['id'][4:] for c in all_lines if c['id'].startswith('say/') and done(c, st))
    times = {k: v for k, v in st['times'].items() if k in set(keys)}
    js = ('// Written by tools/voice.py: the texts Coco has a recording of in docs/say (sayKey in Index.html), and the start\n'
          '// time of each word of the story cards (Read to me).\nwindow.EQ_SAY = ' +
          json.dumps({'keys': keys, 'times': times}, separators=(',', ':')) + ';\n')
    os.makedirs(os.path.join(DOCS, 'say'), exist_ok=True)
    open(os.path.join(DOCS, 'say', 'keys.js'), 'w', encoding='utf-8').write(js)
    print(len(keys), 'texts in docs/say/keys.js,', len(times), 'with word times')


def main():
    if 'refs' in sys.argv[1:]:
        return make_refs()
    all_lines = lines()
    for n, c in enumerate(all_lines):
        c['n'] = n
    st = load_state()
    todo = [c for c in all_lines if '--all' in sys.argv or not done(c, st)]
    if '--redo' in sys.argv:
        old = {x['id']: x for x in json.load(open(os.path.join(WORK, 'review.json'), encoding='utf-8'))}
        todo = [c for c in all_lines if c['id'] in old]
        for c in todo:
            c['old'], c['seed'] = old[c['id']], 5000
            if len(c['text'].split()) <= 3:
                c['lead'] = LEAD
    if '--sample' in sys.argv:  # a quick end-to-end check: four lines of each kind, and one whole radio part
        g0 = next(group(c) for c in todo if c['kind'] == 'radio')
        todo = [c for k in EX for c in [c for c in todo if c['kind'] == k and c['kind'] != 'radio'][:4]] + [c for c in todo if group(c) == g0]
    # Whole radio parts stay in one Kaggle run (their lines are joined afterwards).
    groups = sorted({group(c) for c in todo})
    parts = max(1, math.ceil(len(todo) / PART_SIZE))
    gi = {g: i % parts for i, g in enumerate(groups)}
    for c in todo:
        c['part'] = gi[group(c)]
    kinds = {}
    for c in todo:
        kinds[c['kind']] = kinds.get(c['kind'], 0) + 1
    print('%d of %d lines to record in %d part(s): %s' % (len(todo), len(all_lines), parts, kinds), flush=True)
    if '--dry' in sys.argv:
        return
    os.makedirs(WORK, exist_ok=True)
    review = []
    if '--finish' in sys.argv:
        outs = sorted(os.path.join(WORK, d) for d in os.listdir(WORK) if d.startswith('out-part'))
    else:
        outs = []
        if todo:
            upload(todo)
    # The lines as they were sent (the n of each take), so a finish after a stop matches the takes.
    sent = os.path.join(WORK, 'data', 'lines.json')
    by_n = {c['n']: c for c in json.load(open(sent, encoding='utf-8'))} if os.path.exists(sent) else {}
    for p in range(len(outs) if '--finish' in sys.argv else (parts if todo else 0)):
        out = outs[p] if '--finish' in sys.argv else run_part(p, parts)
        if not os.path.exists(os.path.join(out, 'results.json')):
            continue
        made, radio = finish(out, by_n, st, review)
        made += join_parts(radio, all_lines, st)
        save_state(st)
        print('part %d: %d files written' % (p + 1, made), flush=True)
    write_keys(st, all_lines)
    save_state(st)
    json.dump(review, open(os.path.join(WORK, 'review.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print('%d lines for review in %s' % (len(review), os.path.join(WORK, 'review.json')))


if __name__ == '__main__':
    main()
