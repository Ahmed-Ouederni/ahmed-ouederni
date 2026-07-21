// Project data — single source of truth
// Each project links to its live page with a brief description

export const projects = [
  {
    id: 'closedai',
    title: 'ClosedAI',
    description: 'A fully offline AI desktop app that runs Llama, Mistral, DeepSeek, and other LLMs locally. Zero telemetry, no API keys, no cloud dependency. Built with Electron and Ollama.',
    href: 'https://ahmed-ouederni.github.io/ClosedAI/',
    external: true,
  },
  {
    id: 'launchpad',
    title: 'LaunchPad',
    description: 'A fast, minimal game launcher for Windows. Organizes all your games in one place with a clean, intuitive interface. Built for speed, no bloat, no ads.',
    href: 'https://sologame-dev.itch.io/launchpad',
    external: true,
  },
  {
    id: 'safecheck',
    title: 'SafeCheck',
    description: 'A lightweight link safety checker - paste any URL and get an instant risk analysis. Built with a clean, no-nonsense interface.',
    href: 'SafeCheck/',
    external: false,
  },
  {
    id: 'qrc',
    title: 'QR Code Generator',
    description: 'Transform any link or text into a scannable QR code instantly.',
    href: 'QR Code Generator/',
    external: false,
  },
  {
    id: 'games-itchio',
    title: 'All Games on itch.io',
    description: 'Browse my full catalog of 7 games across multiple genres. Each one built from scratch, solo.',
    href: 'https://sologame-dev.itch.io/',
    external: true,
  },
];
