export const projectCategories = [
  { id: 'all', label: 'all', count: 6 },
  { id: 'ai-desktop', label: 'ai-desktop', count: 2 },
  { id: 'game-dev', label: 'game-dev', count: 2 },
  { id: 'web-security', label: 'web-security', count: 2 },
];

export const projects = [
  {
    id: 'closedai',
    title: 'ClosedAI',
    tagline: 'High-Performance Offline AI Desktop Workspace',
    category: 'ai-desktop',
    categoryLabel: 'AI & Systems',
    badge: 'FLAGSHIP // OFFLINE AI',
    status: 'ACTIVE RUNTIME',
    statusType: 'green',
    processName: 'sys://closed-ai/desktop-runtime',
    featured: true,
    description:
      'A fully offline desktop environment engineered to execute local open-weights LLMs (Llama 3, Mistral, DeepSeek) with complete data sovereignty. Built with zero telemetry, zero API keys, and native Ollama IPC orchestration for zero-latency local inference.',
    highlights: [
      '100% Air-gapped privacy: zero telemetry, no external cloud dependencies',
      'Multi-model engine supporting hot-swappable local open-weights LLMs',
      'Native desktop architecture engineered with Electron and local Ollama RPC'
    ],
    terminalSnippet: {
      cmd: 'closedai --runtime ollama --models "llama3,deepseek,mistral"',
      output: [
        '[SYS] Telemetry: 0 KB (strict air-gap mode)',
        '[IPC] Connected to localhost:11434 (< 2ms)',
        '[STATUS] Privacy sandbox verified: 100% offline'
      ]
    },
    tags: ['Electron', 'Ollama', 'Local LLMs', 'DeepSeek', 'Llama 3', 'Node.js', 'IPC'],
    href: 'https://ahmed-ouederni.github.io/ClosedAI/',
    primaryAction: {
      label: 'Launch ClosedAI',
      icon: 'ph-arrow-square-out'
    },
    external: true,
  },
  {
    id: 'launchpad',
    title: 'LaunchPad',
    tagline: 'Lightning-Fast, Distraction-Free Windows Game Launcher',
    category: 'ai-desktop',
    categoryLabel: 'AI & Systems',
    badge: 'DESKTOP APP',
    status: 'SHIPPED',
    statusType: 'amber',
    processName: 'proc://launchpad.exe',
    featured: false,
    description:
      'A streamlined, zero-bloat game library and launcher for Windows. Aggregates multi-platform executables into a lightning-fast dashboard built for instant process execution without background services, ads, or telemetry.',
    highlights: [
      'Sub-100ms startup latency with an ultra-minimal memory footprint',
      'Executable directory indexing with custom launch parameters',
      'Zero background telemetry, zero ads, zero bloatware'
    ],
    tags: ['C#', 'Windows', 'Game Systems', 'Desktop App', 'Performance'],
    href: 'https://sologame-dev.itch.io/launchpad',
    primaryAction: {
      label: 'Get on itch.io',
      icon: 'ph-arrow-square-out'
    },
    external: true,
  },
  {
    id: 'chess-bot',
    title: 'Custom Chess Engine & Bot',
    tagline: 'Algorithmic Minimax Chess Engine with Alpha-Beta Pruning',
    category: 'game-dev',
    categoryLabel: 'Game Dev',
    badge: 'ALGORITHMIC AI',
    status: 'PLAYABLE IN-BROWSER',
    statusType: 'green',
    processName: 'sys://chess-engine',
    featured: false,
    description:
      'A custom-built chess bot and interactive board engine developed entirely from scratch without external chess libraries. Features board representation, legal move generation, piece-square evaluation heuristics, and recursive minimax search with alpha-beta pruning.',
    highlights: [
      'Recursive minimax search algorithm with alpha-beta cutoff pruning',
      'Positional heuristics and piece-square evaluation matrices',
      'Zero-dependency pure vanilla JavaScript implementation'
    ],
    tags: ['Algorithms', 'Minimax AI', 'Vanilla JS', 'Heuristics', 'Game Theory'],
    href: 'chess.html',
    primaryAction: {
      label: 'Play Bot Live',
      icon: 'ph-play'
    },
    external: false,
  },
  {
    id: 'games-itchio',
    title: 'Solo Game Dev Catalog',
    tagline: 'A Lot of Standalone Games Shipped Solo on itch.io',
    category: 'game-dev',
    categoryLabel: 'Game Dev',
    badge: 'SHIPPED GAMES',
    status: 'PRODUCTION',
    statusType: 'green',
    processName: 'game://itch-games',
    featured: false,
    description:
      'A commercial portfolio of a lot of original games developed, designed, and shipped solo across multiple genres on itch.io. Backed by 5+ years of daily Godot engine mastery, custom GDScript architecture, custom shaders, and responsive gameplay physics.',
    highlights: [
      'End-to-end solo development: mechanics, level design, sound, and optimization',
      'Multi-genre catalog covering 2D action, puzzle mechanics, and simulation',
      'Deep 5+ year Godot Engine & GDScript architecture expertise'
    ],
    tags: ['Godot', 'GDScript', 'Unity', 'C#', 'Game Physics', 'itch.io'],
    href: 'https://sologame-dev.itch.io/',
    primaryAction: {
      label: 'Browse Games on itch.io',
      icon: 'ph-game-controller'
    },
    external: true,
  },
  {
    id: 'safecheck',
    title: 'SafeCheck',
    tagline: 'Real-Time Link Safety & Threat Heuristic Analyzer',
    category: 'web-security',
    categoryLabel: 'Web & Security',
    badge: 'CYBERSECURITY',
    status: 'LIVE TOOL',
    statusType: 'blue',
    processName: 'net://safecheck-audit',
    featured: false,
    description:
      'A lightweight cybersecurity utility designed for rapid URL reconnaissance. Analyzes target links, detects deceptive domains, evaluates redirect hops, and scores potential phishing vectors through an instant terminal-styled interface.',
    highlights: [
      'Heuristic risk assessment of URL structures and domain patterns',
      'Redirect path inspection to uncover hidden target destinations',
      'Isolated analysis environment designed for fast threat triage'
    ],
    tags: ['Cybersecurity', 'Threat Analysis', 'Node.js', 'Web Security', 'Heuristics'],
    href: 'SafeCheck/index.html',
    primaryAction: {
      label: 'Launch SafeCheck',
      icon: 'ph-shield-check'
    },
    external: false,
  },
  {
    id: 'qrc',
    title: 'QR Code Generator',
    tagline: 'Instant Client-Side Vector Matrix Synthesizer',
    category: 'web-security',
    categoryLabel: 'Web & Security',
    badge: 'CLIENT-SIDE TOOL',
    status: 'LIVE TOOL',
    statusType: 'blue',
    processName: 'tool://qr-matrix',
    featured: false,
    description:
      'A fast, zero-dependency client-side utility that synthesizes vector QR codes directly in browser memory. Supports custom payloads, Wi-Fi credentials, error-correction density configuration, and instant SVG/PNG export.',
    highlights: [
      '100% client-side synthesis with zero server round-trips',
      'Configurable error-correction levels and crisp high-DPI rasterization',
      'Instant copy-to-clipboard and vector download capabilities'
    ],
    tags: ['JavaScript', 'Canvas API', 'SVG', 'Client-Side Tools', 'Utility'],
    href: 'QR-Code-Generator/index.html',
    primaryAction: {
      label: 'Open QR Generator',
      icon: 'ph-qr-code'
    },
    external: false,
  },
];
