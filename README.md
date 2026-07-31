# Video Assessment Coach 🎤

Video Assessment Coach combines a research-led product landing page with a
browser-based presentation coach that scores public speaking from live or
pre-recorded video and audio.

## Live coach

The working coach is a single-file browser application in
[`index.html`](index.html). It includes:

- Live video and MediaPipe pose tracking
- Assessment of uploaded MP4 and WebM recordings
- Live speech transcription and filler-word highlighting
- Speaking pace, posture, stability, gesture, audience-focus, and voice metrics
- Real-time coaching prompts
- Rubric-based scoring and a final session report

Run it locally with:

```bash
python3 -m http.server 8737
```

Then open [http://localhost:8737](http://localhost:8737) in Chrome. Camera,
microphone, speech recognition, and the pose model require the relevant browser
permissions and an internet connection.

## Landing page

The landing page introduces the project, embeds the live coach, and includes an
interactive Team tab with the project’s GitHub organization owners.

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Checks

```bash
npm run build
npm test
```

### Project shape

- `app/page.tsx` contains the landing page, embedded demo, and Team tab.
- `app/globals.css` contains the responsive visual system.
- `public/team/` contains portraits sourced from public GitHub profiles.
- `public/og.png` is the project’s social preview card.
- `index.html` contains the standalone presentation coach.
