---
name: ai-visuals
description: Creates interactive HTML5 Canvas, SVG data-flow animations, 3D WebGL/Three.js shaders, and live interactive terminal/agent demos for an AI Engineer portfolio. Use when building hero backgrounds, interactive AI pipeline visualizers, or micro-demos.
---

# Interactive AI Visuals & Micro-Demos Skill

## Goal
Build high-FPS (60fps+), lightweight interactive visuals that prove AI & Systems engineering mastery without tanking page load speed.

## Approved Visual Signatures for Ahmed Ouederni
1. **Interactive Vector / Latent Space Canvas:** A lightweight 2D HTML5 Canvas or WebGL shader showing a subtle grid of vectors/dots that gently warp or align toward the user's cursor, displaying real-time `(x, y, cosine_similarity)` coordinates in monospace font.
2. **Animated SVG Architecture Traces:** Use SVG paths with animated `stroke-dashoffset` so glowing data packets visibly travel between system blocks (`Prompt` -> `Vector DB` -> `Reranker` -> `Inference`).
3. **Interactive Terminal / Agent Sandbox:** A clean, minimal CLI widget in the hero section where visitors can click 3 preset buttons (e.g., `run --benchmark`, `inspect --stack`, `whois ahmed`) and watch realistic streamed token output with latency stats.

## Performance Rules
- Always pause `requestAnimationFrame` loops using `IntersectionObserver` when the canvas scrolls out of view.
- Respect `prefers-reduced-motion` media queries.
- Never load heavy external 3D `.gltf` models over 1MB; generate geometry procedurally with math and shaders.