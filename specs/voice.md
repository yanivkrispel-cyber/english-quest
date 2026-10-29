# Coco's voice (2026-10-29)

Pilot families said the voice was robotic. Two causes: the phone's own voice (`speechSynthesis`) read the games, the word
taps and Read to me, and the recordings were Kokoro `am_fenrir`, flat and slowed down. The owner wanted a free fix, heard
four free voices blind and picked Chatterbox (MIT, Resemble AI) cloned from a clip of the old Coco, so Coco keeps his
colour but sounds like a person.

## What is recorded

Every line the app speaks, listed by `tools/voice-list.js`:

| Part | File | Count (2026-10-29) |
|------|------|------|
| Talk with Coco | `docs/talk/audio/<clip>.mp3` | 4,504 |
| The Nest | `docs/nest/audio/<clip>.mp3` | 792 |
| Radio Show (22 characters) | `docs/missions/audio/<mission>-<part>.mp3`, its lines joined | 546 lines |
| Words and sentences read aloud (game bank, mission words, examples, Hear it) | `docs/say/<key>.mp3` | about 1,240 |
| Story cards (Read to me) | `docs/say/<key>.mp3`, with word times | 72 |

`<key>` is `sayKey(text)`: FNV-1a of the lower-cased text with its spaces collapsed, the same function in
`tools/voice-list.js` and `src/Index.html`. `docs/say/keys.js` lists the keys that have a file and the start time of each
word of the story cards.

## How it plays

`sayWord`, `sayIt` (Hear it; slow = the same file at 0.75 with the pitch kept) and `msReadAloud` call `sayClip(text)`. It
plays the recording when `keys.js` has the text, and the phone's voice otherwise or when the file cannot play (offline).
Read to me lights the word from the recording's word times. The phone's voice, when it is used, is now the most natural
English one the phone has (Natural, Enhanced, Google, Siri), not the first in the list. Talk, the Nest and the Radio Show
play their own files as before.

## How it is made

`python tools/voice.py` (see its header): it records only new or changed lines (`tools/voice-state.json`), on a free
Kaggle GPU (two T4s, 30 hours a week; the owner's account, the token in `~/.kaggle/access_token`). On Kaggle
(`tools/voice_kernel.py`) each line is cloned from its reference clip in `tools/voice-refs` (`coco.flac`; a radio
character's clip is its old Kokoro voice) and Whisper checks every take; the best of three (five for one or two words)
is kept. Here each clip is trimmed, slowed for the younger levels and the Nest (pitch kept), brought to one loudness
and written as MP3. A take Whisper could not match at all is not used; the takes below 0.9 are listed in
`EnglishLessons-work/voice-run/review.json`. About 8 GPU hours for everything, minutes for a new script.

After a run, raise `TALK_V`, `NEST_V`, `MISSIONS_V` and `SAY_V` in Index.html for what changed. The old Kokoro tools
(`talk_audio.py`, `nest_audio.py`, `missions_audio.py`) stop unless given `--kokoro`, so they cannot mix the voices.
New audio folders need their path in `run_worker_first` (`/say/*` is there), or Safari plays nothing.

## Store rules

Nothing from the kids is sent anywhere: the recordings are made in advance from our own scripts (already in the public
repo). Chatterbox adds an inaudible watermark (Perth) that marks the audio as generated.
