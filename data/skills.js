// Skills data — single source of truth for Skills section
// Add new skills by pushing to the appropriate category

export const skillCategories = [
  {
    category: 'Game Engines',
    skills: [
      { name: 'Godot', icon: 'godot' },
      { name: 'Unity', icon: 'unity' },
      { name: 'C#', icon: 'csharp' },
    ],
  },
  {
    category: 'Desktop & Backend',
    skills: [
      { name: 'Electron', icon: 'electron' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Python', icon: 'python' },
      { name: 'PHP', icon: 'php' },
      { name: 'MySQL', icon: 'mysql' },
    ],
  },
  {
    category: 'Web & Frontend',
    skills: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css3' },
    ],
  },
];

// Icon mapping to Devicon CDN slugs
export const iconMap = {
  godot: 'godot/godot-original.svg',
  unity: 'unity/unity-original.svg',
  csharp: 'csharp/csharp-original.svg',
  electron: 'electron/electron-original.svg',
  nodejs: 'nodejs/nodejs-original.svg',
  python: 'python/python-original.svg',
  php: 'php/php-original.svg',
  mysql: 'mysql/mysql-original.svg',
  javascript: 'javascript/javascript-original.svg',
  react: 'react/react-original.svg',
  html5: 'html5/html5-original.svg',
  css3: 'css3/css3-original.svg',
};

export const iconBaseUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
