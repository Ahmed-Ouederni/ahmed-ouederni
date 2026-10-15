// --- Portfolio Data & Logic ---

const projects = [
  {
    id: 'closedai',
    title: 'ClosedAI',
    description:
      'A fully offline desktop environment engineered to execute local open-weights LLMs with complete data sovereignty, zero telemetry, and native Ollama IPC orchestration for zero-latency local inference.',
    tags: ['Electron', 'Ollama', 'Local LLMs', 'DeepSeek', 'Node.js'],
    href: 'https://ahmed-ouederni.github.io/ClosedAI/',
    primaryAction: {
      label: 'Launch',
      icon: 'ph-arrow-up-right'
    },
    external: true,
  },
  {
    id: 'launchpad',
    title: 'LaunchPad',
    description:
      'A streamlined, zero-bloat game library and launcher for Windows. Aggregates multi-platform executables into a lightning-fast dashboard built for instant process execution without background services, ads, or telemetry.',
    tags: ['C#', 'Windows', 'Desktop App', 'Performance'],
    href: 'https://sologame-dev.itch.io/launchpad',
    primaryAction: {
      label: 'Get on itch.io',
      icon: 'ph-arrow-up-right'
    },
    external: true,
  },
  {
    id: 'chess-bot',
    title: 'Custom Chess Engine & Bot',
    description:
      'A custom-built chess bot and interactive board engine developed entirely from scratch without external chess libraries. Features board representation, legal move generation, piece-square evaluation heuristics, and recursive minimax search with alpha-beta pruning.',
    tags: ['JavaScript', 'Minimax AI', 'Alpha-Beta Pruning', 'Game Theory'],
    href: 'chess.html',
    primaryAction: {
      label: 'Play Live',
      icon: 'ph-arrow-up-right'
    },
    external: false,
  },
  {
    id: 'games-itchio',
    title: 'Solo Game Dev Catalog',
    description:
      'A commercial portfolio of original standalone games developed, designed, and shipped solo across multiple genres on itch.io, backed by 5+ years of daily Godot engine mastery, custom shaders, and responsive gameplay physics.',
    tags: ['Godot', 'GDScript', 'C#', 'Game Physics', 'itch.io'],
    href: 'https://sologame-dev.itch.io/',
    primaryAction: {
      label: 'Browse Games',
      icon: 'ph-arrow-up-right'
    },
    external: true,
  },
  {
    id: 'safecheck',
    title: 'SafeCheck',
    description:
      'A lightweight cybersecurity utility designed for rapid URL reconnaissance. Analyzes target links, detects deceptive domains, evaluates redirect hops, and scores potential phishing vectors through an isolated analysis sandbox.',
    tags: ['Cybersecurity', 'Threat Analysis', 'Node.js', 'Web Security'],
    href: 'SafeCheck/index.html',
    primaryAction: {
      label: 'Launch',
      icon: 'ph-arrow-up-right'
    },
    external: false,
  },
  {
    id: 'qrc',
    title: 'QR Code Generator',
    description:
      'A fast, zero-dependency client-side utility that synthesizes vector QR codes directly in browser memory. Supports custom payloads, Wi-Fi credentials, error-correction density configuration, and instant SVG export.',
    tags: ['JavaScript', 'Canvas API', 'SVG', 'Client-Side Tools'],
    href: 'QR-Code-Generator/index.html',
    primaryAction: {
      label: 'Open Generator',
      icon: 'ph-arrow-up-right'
    },
    external: false,
  },
];

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'C++', icon: 'cplusplus' },
      { name: 'C#', icon: 'csharp' },
      { name: 'Python', icon: 'python' },
      { name: 'GDScript', icon: 'godot' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'PHP', icon: 'php' },
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css3' },
    ],
  },
  {
    category: 'Game Engines',
    skills: [
      { name: 'Godot', icon: 'godot' },
      { name: 'Unity', icon: 'unity' },
    ],
  },
  {
    category: 'Libraries',
    skills: [
      { name: 'React', icon: 'react' },
    ],
  },
  {
    category: 'Frameworks & Runtimes',
    skills: [
      { name: 'Electron', icon: 'electron' },
      { name: 'Node.js', icon: 'nodejs' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'mysql' },
    ],
  },
];

const iconMap = {
  cplusplus: 'cplusplus/cplusplus-original.svg',
  csharp: 'csharp/csharp-original.svg',
  python: 'python/python-original.svg',
  javascript: 'javascript/javascript-original.svg',
  php: 'php/php-original.svg',
  html5: 'html5/html5-original.svg',
  css3: 'css3/css3-original.svg',
  godot: 'godot/godot-original.svg',
  unity: 'unity/unity-original.svg',
  react: 'react/react-original.svg',
  electron: 'electron/electron-original.svg',
  nodejs: 'nodejs/nodejs-original.svg',
  mysql: 'mysql/mysql-original.svg',
};

const iconBaseUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const certificates = [
  {
    id: 'problem-solving-intermediate',
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    issuerIcon: 'ph-code',
    instructor: 'Harishankaran K (CTO)',
    date: 'October 2026',
    description:
      'Technical skill certification validating intermediate algorithmic problem-solving abilities, data structures, complexity analysis, and efficient code design.',
    fileUrl: 'Certificates/problem_solving_intermediate%20certificate.pdf',
    previewUrl: 'Certificates/problem-solving-intermediate-certificate.png',
    verifyUrl: 'https://www.hackerrank.com/certificates/690F3EFD9352',
    tags: ['Algorithms', 'Data Structures', 'Problem Solving', 'HackerRank'],
  },
  {
    id: 'sql-intermediate',
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    issuerIcon: 'ph-database',
    instructor: 'Harishankaran K (CTO)',
    date: 'October 2026',
    description:
      'Technical skill certification validating intermediate SQL proficiency including complex joins, subqueries, aggregations, window functions, and query optimization.',
    fileUrl: 'Certificates/sql_intermediate%20certificate.pdf',
    previewUrl: 'Certificates/sql-intermediate-certificate.png',
    verifyUrl: 'https://www.hackerrank.com/certificates/23A0000211D9',
    tags: ['SQL', 'Databases', 'HackerRank', 'Query Optimization'],
  },
  {
    id: 'js-intermediate',
    title: 'JavaScript (Intermediate)',
    issuer: 'HackerRank',
    issuerIcon: 'ph-code',
    instructor: 'Harishankaran K (CTO)',
    date: 'October 2026',
    description:
      'Technical skill certification validating mastery of intermediate JavaScript including asynchronous programming, event-driven architecture, closures, prototypes, and complex data structures.',
    fileUrl: 'Certificates/javascript_intermediate%20certificate.pdf',
    previewUrl: 'Certificates/js-intermediate-certificate.png',
    verifyUrl: 'https://www.hackerrank.com/certificates/647E006D6678',
    tags: ['JavaScript', 'HackerRank', 'Problem Solving'],
  },
  {
    id: 'ccep',
    title: 'Certified Cybersecurity Educator Professional (CCEP)',
    issuer: 'Red Team Leaders',
    issuerIcon: 'ph-shield-check',
    instructor: 'Joas A Santos',
    date: 'October 2026',
    description:
      'Professional credential verifying proficiency in cybersecurity fundamentals, threat landscape awareness, defensive strategies, and educational security principles.',
    fileUrl: 'Certificates/Certified%20Cybersecurity%20Educator%20Professional%20(CCEP).pdf',
    previewUrl: 'Certificates/ccep-certificate.png',
    verifyUrl: 'https://courses.redteamleaders.com/exam-completion/affcac7ca5948a88',
    tags: ['Cybersecurity', 'Red Team Leaders', 'Threat Defense'],
  },
  {
    id: 'llm-course',
    title: 'Fundamentals of LLMs: The LLM Course',
    issuer: 'Hugging Face',
    issuerIcon: 'ph-sparkle',
    instructor: 'Hugging Face Instructors',
    date: 'October 2026',
    description:
      'Certification of achievement for completing Part 1: Fundamentals of Large Language Models, covering transformer architectures, tokenization, pre-training objectives, and modern NLP pipelines.',
    fileUrl: 'Certificates/LLM%20course.webp',
    previewUrl: 'Certificates/llm-course-certificate.png',
    verifyUrl: null,
    tags: ['AI & LLMs', 'Hugging Face', 'Transformers'],
  },
  {
    id: 'css-basic',
    title: 'CSS (Basic)',
    issuer: 'HackerRank',
    issuerIcon: 'ph-code',
    instructor: 'Harishankaran K (CTO)',
    date: 'October 2026',
    description:
      'Technical skill certification demonstrating core competency in CSS styling, layout models, responsiveness, selectors, cascading rules, and visual interface design.',
    fileUrl: 'Certificates/css%20certificate.pdf',
    previewUrl: 'Certificates/css-certificate.png',
    verifyUrl: 'https://www.hackerrank.com/certificates/DFD7506BA21F',
    tags: ['CSS', 'HackerRank', 'Web Design'],
  },
  {
    id: 'efset-c2',
    title: 'EF SET English Certificate (C2 Proficient)',
    issuer: 'EF Standard English Test',
    issuerIcon: 'ph-translate',
    instructor: 'EF SET',
    date: 'January 2026',
    description:
      'Official English language proficiency certification validating 75/100 C2 Proficient level on the CEFR scale, with 79/100 in Reading (C2) and 71/100 in Listening (C1).',
    fileUrl: 'Certificates/EF%20SET%20Certificate.pdf',
    previewUrl: 'Certificates/ef-set-certificate.png',
    verifyUrl: 'https://cert.efset.org/SsfVsz',
    tags: ['English', 'C2 Proficient', 'CEFR', 'Communication'],
  },
];

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:ahmednasrouederni@gmail.com',
    cmd: 'mail',
    output: 'ahmednasrouederni@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Ahmed-Ouederni',
    cmd: 'git remote -v',
    output: 'github.com/Ahmed-Ouederni',
    prefix: 'origin\t',
  },
];

// Theme setup
document.documentElement.setAttribute('data-theme', 'dark');
try {
  localStorage.setItem('theme', 'dark');
} catch (e) {
  // localStorage might be blocked on file://
}

// Render Projects
const projectsGrid = document.getElementById('projects-grid');

function renderProjects() {
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects
    .map((project) => {
      const targetAttr = project.external ? 'target="_blank" rel="noopener noreferrer"' : '';
      const actionLabel = project.primaryAction && project.primaryAction.label ? project.primaryAction.label : 'View Project';

      return `
        <article class="project-card" role="listitem">
          <div class="project-card__header">
            <h3 class="project-card__title">${project.title}</h3>
            <a href="${project.href}" class="project-card__link" ${targetAttr}>
              <span>${actionLabel}</span>
              <i class="ph ph-arrow-up-right" aria-hidden="true"></i>
            </a>
          </div>
          <p class="project-card__description">${project.description}</p>
        </article>
      `;
    })
    .join('');
}

// Render Skills
const skillsContainer = document.getElementById('skills-container');
function renderSkills() {
  if (!skillsContainer) return;

  skillsContainer.innerHTML = skillCategories
    .map((cat) => {
      const skillsHtml = cat.skills
        .map((skill) => {
          const iconSlug = iconMap[skill.icon];
          const iconUrl = iconSlug ? `${iconBaseUrl}/${iconSlug}` : null;
          return `
        <div class="skill-box">
          ${iconUrl ? `<img class="skill-box__icon" src="${iconUrl}" alt="" loading="lazy" width="26" height="26">` : ''}
          <span class="skill-box__name">${skill.name}</span>
        </div>
      `;
        })
        .join('');

      const categorySlug = cat.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

      return `
      <div class="skill-category skill-category--${categorySlug}">
        <span class="skill-category__label">${cat.category}</span>
        <div class="skill-boxes">${skillsHtml}</div>
      </div>
    `;
    })
    .join('');
}

// Render Certificates
const certificatesGrid = document.getElementById('certificates-grid');
function renderCertificates() {
  if (!certificatesGrid) return;

  certificatesGrid.innerHTML = certificates
    .map((cert) => {
      const tagsHtml = cert.tags
        ? cert.tags.map((tag) => `<span class="cert-badge">${tag}</span>`).join('')
        : '';

      const verifyBtnHtml = cert.verifyUrl
        ? `
            <a href="${cert.verifyUrl}" class="cert-btn cert-btn--ghost" target="_blank" rel="noopener noreferrer">
              <i class="ph ph-arrow-square-out" aria-hidden="true"></i>
              Verify Credential
            </a>
          `
        : '';

      const iconClass = cert.issuerIcon || 'ph-certificate';

      return `
      <article class="cert-card" role="listitem">
        <div class="cert-preview-wrap" data-cert-preview="${cert.previewUrl}" data-cert-title="${cert.title}" data-cert-file="${cert.fileUrl}" data-cert-verify="${cert.verifyUrl || ''}" tabindex="0" role="button" aria-label="Preview ${cert.title}">
          <img src="${cert.previewUrl}" alt="${cert.title} Certificate Preview" class="cert-preview-img" loading="lazy" width="400" height="300">
          <div class="cert-preview-overlay">
            <i class="ph ph-magnifying-glass-plus" aria-hidden="true"></i>
            <span>Preview</span>
          </div>
        </div>
        <div class="cert-content">
          <div class="cert-header">
            <div class="cert-meta">
              <span class="cert-issuer">
                <i class="ph ${iconClass}" aria-hidden="true"></i>
                ${cert.issuer}
              </span>
              <span class="cert-date">${cert.date}</span>
            </div>
            <h3 class="cert-title">${cert.title}</h3>
            <p class="cert-description">${cert.description}</p>
          </div>
          ${tagsHtml ? `<div class="cert-badges">${tagsHtml}</div>` : ''}
          <div class="cert-actions">
            <a href="${cert.fileUrl}" class="cert-btn cert-btn--primary" target="_blank" rel="noopener noreferrer">
              <i class="ph ph-certificate" aria-hidden="true"></i>
              View Certificate
            </a>
            ${verifyBtnHtml}
          </div>
        </div>
      </article>
    `;
    })
    .join('');
}

// Render Contact
const contactContainer = document.getElementById('contact-links');
function renderContact() {
  if (!contactContainer) return;

  const terminalHead = `
    <div class="contact-terminal__head">
      <span class="contact-terminal__dot contact-terminal__dot--red"></span>
      <span class="contact-terminal__dot contact-terminal__dot--yellow"></span>
      <span class="contact-terminal__dot contact-terminal__dot--green"></span>
      <span class="contact-terminal__title">contact: bash</span>
    </div>
  `;

  const terminalBody = contactLinks
    .map((link) => {
      if (link.prefix) {
        return `
        <div class="contact-terminal__line">
          <span class="contact-terminal__prompt">$</span>
          <span class="contact-terminal__cmd">${link.cmd}</span>
        </div>
        <div class="contact-terminal__line">
          <span class="contact-terminal__prefix">${link.prefix}</span>
          <a href="${link.href}" target="_blank" rel="noopener noreferrer" class="contact-terminal__output">${link.output}</a>
        </div>
      `;
      }
      return `
      <div class="contact-terminal__line">
        <span class="contact-terminal__prompt">$</span>
        <span class="contact-terminal__cmd">${link.cmd}</span>
        <a href="${link.href}" class="contact-terminal__output">${link.output}</a>
      </div>
    `;
    })
    .join('');

  contactContainer.innerHTML = `
    <div class="contact-terminal">
      ${terminalHead}
      <div class="contact-terminal__body">
        ${terminalBody}
        <div class="contact-terminal__line" style="margin-top:0.5rem;">
          <span class="contact-terminal__prompt">$</span>
          <span class="contact-terminal__cursor">_</span>
        </div>
      </div>
    </div>
  `;
}

// Lightbox Modal
function setupCertModal() {
  const modal = document.getElementById('cert-modal');
  if (!modal) return;

  const modalImg = modal.querySelector('.cert-modal__img');
  const modalTitle = modal.querySelector('.cert-modal__title');
  const modalPdfLink = modal.querySelector('.cert-modal__link-pdf');
  const modalVerifyLink = modal.querySelector('.cert-modal__link-verify');

  function openModal(imgSrc, title, fileUrl, verifyUrl) {
    if (modalImg) {
      modalImg.src = imgSrc;
      modalImg.alt = title;
    }
    if (modalTitle) modalTitle.textContent = title;
    if (modalPdfLink) {
      modalPdfLink.href = fileUrl;
    }
    if (modalVerifyLink) {
      if (verifyUrl && verifyUrl.trim() !== '') {
        modalVerifyLink.href = verifyUrl;
        modalVerifyLink.style.display = 'inline-flex';
      } else {
        modalVerifyLink.style.display = 'none';
      }
    }
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const previewTrigger = e.target.closest('[data-cert-preview]');
    if (previewTrigger) {
      e.preventDefault();
      const img = previewTrigger.dataset.certPreview;
      const title = previewTrigger.dataset.certTitle;
      const file = previewTrigger.dataset.certFile || previewTrigger.dataset.certPdf;
      const verify = previewTrigger.dataset.certVerify;
      openModal(img, title, file, verify);
      return;
    }

    if (e.target.matches('.cert-modal') || e.target.closest('.cert-modal__close')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
    if (e.key === 'Enter' || e.key === ' ') {
      const activeEl = document.activeElement;
      if (activeEl && activeEl.hasAttribute('data-cert-preview')) {
        e.preventDefault();
        const img = activeEl.dataset.certPreview;
        const title = activeEl.dataset.certTitle;
        const file = activeEl.dataset.certFile || activeEl.dataset.certPdf;
        const verify = activeEl.dataset.certVerify;
        openModal(img, title, file, verify);
      }
    }
  });
}

// Scroll Reveal
function setupScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal], [data-reveal-container] > *');

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '50px 0px 50px 0px' }
  );

  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    } else {
      observer.observe(el);
    }
  });
}

// Initialization
function init() {
  renderProjects();
  renderSkills();
  renderCertificates();
  renderContact();
  setupCertModal();
  setupScrollReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
