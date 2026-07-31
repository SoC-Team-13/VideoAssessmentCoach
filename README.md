# Video Assessment Coach

A research-led landing page for a tool that turns recorded performances into
focused, evidence-linked feedback and actionable next steps.

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run build
npm test
```

## Project shape

- `app/page.tsx` contains the landing page and interactive Team tab.
- `app/globals.css` contains the responsive visual system.
- `public/team/` contains portraits sourced from the owners’ public GitHub
  profiles.
- `public/og.png` is the project’s social preview card.
