"""Coco's voice on a Kaggle GPU (run by tools/voice.py; it is the kernel's code file, not run here).

Records the lines of lines.json from the attached dataset with Chatterbox (MIT), each cloned from its reference clip
(ref-<voice>.wav), checks every take with Whisper and keeps the best of a few. One process per GPU. PART and PARTS
(set by voice.py) pick this kernel's share of the lines. Output in /kaggle/working: out/<n>.flac and results.jsonl
(n, score, what Whisper heard, word times, take, seconds).
"""
import glob, json, os, re, subprocess, sys, time
from difflib import SequenceMatcher

PART, PARTS = 0, 1
W = '/kaggle/working'
PAD = 0.5  # seconds of silence around a take for Whisper: very short words come out wrong without it
ONES = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split()
TENS = 'twenty thirty forty fifty sixty seventy eighty ninety'.split()


def num(n):
    n = int(n)
    if n < 20:
        return ONES[n]
    if n < 100:
        return TENS[n // 10 - 2] + ('' if n % 10 == 0 else ' ' + ONES[n % 10])
    if n < 1000:
        return ONES[n // 100] + ' hundred' + ('' if n % 100 == 0 else ' ' + num(n % 100))
    return str(n)


def words(t):
    t = t.lower().replace('’', "'")
    t = re.sub(r'(\d+)(st|nd|rd|th)\b', r'\1', t)
    t = re.sub(r'\d+', lambda m: ' ' + num(m.group()) + ' ', t)
    t = re.sub(r"[^a-z' ]+", ' ', t)
    out = []
    for w in t.split():
        w = w.strip("'")
        # British and American spellings count as the same word (colour/color, cosy/cozy, centre/center).
        w = re.sub(r'our\b', 'or', w)
        w = re.sub(r'is(e|ed|ing|ation)\b', r'iz\1', w)
        w = re.sub(r'yse\b', 'yze', w)
        w = re.sub(r'tre\b', 'ter', w)
        w = w.replace('s', 'z') if w in ('cosy', 'cosier') else w
        w = 'okay' if w == 'ok' else w
        w = re.sub(r'(.)\1+', r'\1', w)  # whee/wheee, the same word drawn out
        if w:
            out.append(w)
    return out


def score(text, heard):
    a, b = words(text), words(heard)
    if not a:
        return 1.0
    sm = SequenceMatcher(None, a, b)
    hit = sum(bl.size for bl in sm.get_matching_blocks())
    # Near misses inside a replaced run (whee/weee) count half.
    for op, i1, i2, j1, j2 in sm.get_opcodes():
        if op == 'replace':
            for x, y in zip(a[i1:i2], b[j1:j2]):
                if SequenceMatcher(None, x, y).ratio() >= 0.6:
                    hit += 0.5
    return min(1.0, 2.0 * hit / (len(a) + len(b)))


def find_data():
    for p in glob.glob('/kaggle/input/**/lines.json', recursive=True):
        return os.path.dirname(p)
    raise SystemExit('lines.json not found under /kaggle/input')


def worker(gpu, n):
    os.environ['CUDA_VISIBLE_DEVICES'] = str(gpu)
    import numpy as np, torch, torchaudio as ta
    from chatterbox.tts import ChatterboxTTS
    from faster_whisper import WhisperModel
    data = find_data()
    lines = json.load(open(os.path.join(data, 'lines.json'), encoding='utf-8'))
    mine = [c for c in lines if c.get('part', 0) == PART][gpu::n]
    tts = ChatterboxTTS.from_pretrained(device='cuda')
    asr = WhisperModel('small.en', device='cuda', compute_type='float16')
    out = open(os.path.join(W, 'results-%d-%d.jsonl' % (PART, gpu)), 'a', encoding='utf-8')
    os.makedirs(os.path.join(W, 'out'), exist_ok=True)
    pad = np.zeros(int(16000 * PAD), 'float32')

    def listen(wav):
        pcm = ta.functional.resample(wav.cpu(), tts.sr, 16000)[0].numpy().astype('float32')
        segs, _ = asr.transcribe(np.concatenate([pad, pcm, pad]), language='en', word_timestamps=True, beam_size=5)
        segs = list(segs)
        return (' '.join(s.text.strip() for s in segs),
                [[w.word.strip(), round(w.start - PAD, 3), round(w.end - PAD, 3)] for s in segs for w in (s.words or [])])

    def cut_lead(wav, ws):
        """Drops the lead-in ("Okay.") at the quietest 20 ms between it and the first word of the line."""
        if len(ws) < 2:
            return None
        a, b = max(0.0, ws[0][2] - 0.05), ws[1][1] + 0.06
        x = wav[0].cpu().numpy()
        hop = int(tts.sr * 0.02)
        lo, hi = int(a * tts.sr), min(len(x) - hop, int(b * tts.sr))
        if hi <= lo:
            return None
        frames = [(float(np.sqrt(np.mean(x[i:i + hop] ** 2))), i) for i in range(lo, hi, hop // 2)]
        at = min(frames)[1] + hop // 2
        return wav[:, at:]

    for k, c in enumerate(mine):
        t0, best = time.time(), None
        short = len(c['text'].split()) <= 2
        lead = c.get('lead', '')
        for take in range(5 if short else 3):
            torch.manual_seed(c.get('seed', 1000) + take)
            wav = tts.generate(lead + c['say'], audio_prompt_path=os.path.join(data, 'ref-' + c['ref'] + '.wav'),
                               exaggeration=c['ex'], cfg_weight=c['cfg'])
            heard, ws = listen(wav)
            if lead:
                # Very short lines lose their first sound (pen -> hen); said after a lead-in they come out whole.
                cut = cut_lead(wav, ws)
                if cut is None:
                    continue
                wav = cut
                heard, ws = listen(wav)
            sc = score(c['text'], heard)
            if best is None or sc > best['score']:
                best = {'score': round(sc, 3), 'heard': heard, 'words': ws, 'take': take, 'dur': round(wav.shape[-1] / tts.sr, 2)}
                ta.save(os.path.join(W, 'out', '%d.flac' % c['n']), wav.cpu(), tts.sr, format='flac')
            if sc >= 0.97:
                break
        if best is None:
            best = {'score': 0, 'heard': '', 'words': [], 'take': -1, 'dur': 0}
        best.update({'n': c['n'], 'secs': round(time.time() - t0, 1)})
        out.write(json.dumps(best, ensure_ascii=False) + '\n')
        out.flush()
        if k % 25 == 0:
            print('part%d gpu%d %d/%d %.2f %.1fs' % (PART, gpu, k + 1, len(mine), best['score'], best['secs']), flush=True)


if __name__ == '__main__':
    if len(sys.argv) > 1:
        worker(int(sys.argv[1]), int(sys.argv[2]))
        sys.exit()
    subprocess.run([sys.executable, '-m', 'pip', 'install', '-q', 'chatterbox-tts', 'faster-whisper', 'setuptools<81',
                    'torch==2.6.0', 'torchaudio==2.6.0', 'torchvision==0.21.0'], check=True)
    import torch
    n = max(1, torch.cuda.device_count())
    print('GPUs:', n, flush=True)
    t0 = time.time()
    me = os.path.abspath(globals().get('__file__', sys.argv[0]))
    ps = [subprocess.Popen([sys.executable, me, str(g), str(n)]) for g in range(n)]
    for p in ps:
        p.wait()
    rows = [json.loads(l) for f in glob.glob(os.path.join(W, 'results-*.jsonl')) for l in open(f, encoding='utf-8')]
    json.dump(rows, open(os.path.join(W, 'results.json'), 'w', encoding='utf-8'), ensure_ascii=False)
    print('done %d clips in %.0f min, %d below 0.9' % (len(rows), (time.time() - t0) / 60, sum(r['score'] < 0.9 for r in rows)), flush=True)
