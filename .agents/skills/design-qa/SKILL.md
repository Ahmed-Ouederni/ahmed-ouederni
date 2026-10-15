---
name: design-qa
description: Visually inspects the running localhost portfolio website using a headless browser, takes desktop and mobile screenshots, audits alignment/contrast/spacing against our design rules, and fixes CSS bugs. Use after building or modifying any UI section.
---

# Visual Design QA & Self-Correction Skill

## Execution Steps
1. Ensure the local dev server is running (e.g., `http://localhost:3000` or `http://localhost:5173`).
2. Open the page at Desktop (`1440x900`) and Mobile (`390x844`) viewports.
3. Capture screenshots and inspect for:
   - Text overlapping borders or overflowing containers on mobile.
   - Missing `1px` hairline borders or uneven padding inside Bento cards.
   - Any violation of `.agents/rules/no-ai-slop.md`.
4. Fix any visual defects found in the code and re-verify before reporting completion.