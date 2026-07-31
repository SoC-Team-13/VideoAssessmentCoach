# Video Assessment Coach 🎤

A browser-based presentation coach that scores your public speaking in real time from live video and audio — no backend, no build step, a single HTML file.

## Features

- **Live video + pose tracking** — webcam feed with a real-time skeleton overlay (MediaPipe Pose Landmarker)
- **Speech analysis** — live transcript via the Web Speech API, with filler words highlighted
- **Voice analysis** — speaking-time ratio and volume consistency via the Web Audio API
- **Live coaching banner** — real-time tips based on your last 10–20 seconds ("slow down — 190 wpm", "you're swaying — plant your feet", "face your audience")
- **Rubric-based scoring** — grounded in the [NCA Competent Speaker](https://wp.stolaf.edu/academic-support/files/2014/07/NCA-Competent-Speaker-Speech-Evaluation-Form.pdf) delivery competencies and the Toastmasters 5-point evaluation scale
- **Session report card** — overall grade, per-metric breakdown, filler-word counts, and targeted coaching tips

## Scoring

| Metric | Weight | What it measures |
|---|---|---|
| Posture | 15% | Level shoulders, head centered over body |
| Stability | 10% | Side-to-side swaying |
| Hand gestures | 12% | Wrist movement — penalizes both frozen arms and flailing |
| Audience focus | 12% | Fraction of time facing the camera (eye-contact proxy) |
| Speaking pace | 18% | Words per minute (sweet spot: 110–160 wpm) |
| Filler words | 15% | Rate of "um", "uh", "like", "you know", etc. |
| Voice presence | 18% | Speaking-time ratio + volume consistency |

Metrics roll up into four rubric categories rated 1–5 (Developing → Exemplary): **Vocal variety & pace**, **Body language**, **Fluency & language**, and **Audience engagement**.

## Running

```bash
python3 -m http.server 8737
# then open http://localhost:8737 in Chrome
```

Click **Start session**, allow camera + microphone, present, then **Stop & get score**.

### Requirements

- **Chrome** (the Web Speech API's speech recognition is Chrome-only and cloud-based, so it needs internet)
- Internet on first load (the pose model is fetched from a CDN)
- Stand far enough back that at least your upper body is in frame

## How it works

Everything lives in [`index.html`](index.html):

- `getUserMedia` captures camera + mic
- MediaPipe **Pose Landmarker** (lite model, GPU-delegated) runs per-frame in a `requestAnimationFrame` loop; landmarks drive posture, sway, gesture, and camera-facing metrics
- `webkitSpeechRecognition` provides continuous transcription; final segments are counted for WPM and scanned for filler words
- An `AnalyserNode` samples mic RMS for speaking-time and volume-consistency scoring
- A rule engine with priorities and cooldowns turns rolling-window stats into live coaching tips
