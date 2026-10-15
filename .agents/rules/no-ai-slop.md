# Global Anti-Slop & High-Craft UI Rules (Ahmed Ouederni Portfolio)

## 1. Banned Visual Clichés (Immediate Rejection)
- **NO Neon AI Glows:** Never use generic purple/pink/cyan glowing blobs (`blur-3xl` radial gradients) floating behind text.
- **NO Split-Gradient Headlines:** Never highlight a single word inside an `<h1>` with `bg-clip-text text-transparent bg-gradient-to-r`. Keep headlines solid, high-contrast, and typographically authoritative.
- **NO 3-Column Icon Cards:** Never build symmetrical 3-column feature rows where each card starts with a Lucide icon inside a colored circle.
- **NO Fake Chatbots or Robot Mascots:** Do not use brain icons, sparkle emojis (✨), or robot illustrations to represent "AI Engineer". Represent AI through architecture diagrams, live token-stream telemetry, terminal traces, latency metrics, and interactive nodes.
- **NO Generic Copywriting:** Never write phrases like "Passionate AI Engineer crafting the future", "Seamless solutions", or "Let's build something amazing". Write crisp, factual, systems-level engineering prose.

## 2. Mandatory Structural Standards
- **Color Palette Discipline:** Default to an obsidian/carbon dark mode (`#09090B` background, `#111114` elevated surface) or warm archival paper light mode (`#FAF9F6`), paired with a single high-signal accent color (e.g., International Orange `#FF4F00`, Emerald Terminal `#10B981`, or Warm Amber `#F59E0B`).
- **Hairline Architecture:** Separate layout regions and cards using exposed `1px solid` borders with low opacity (`border-white/[0.08]` in dark mode) rather than heavy drop shadows.
- **Monospace Telemetry:** Always render dates (`2025 — 2026`), model benchmarks, latency figures (`14.2ms`), commit hashes, and tech stack tags in a monospace font (`font-mono text-[11px] uppercase tracking-wider`).
- **Physics-Based Motion:** Never use `transition-all duration-300 ease-in-out`. Specify exact properties (`transition-[transform,border-color,background-color]`) with a custom cubic-bezier (`cubic-bezier(0.22, 1, 0.36, 1)`) or Framer Motion spring physics.