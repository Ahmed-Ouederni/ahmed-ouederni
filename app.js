/* ═══════════════════════════════════════════════════════════════════════════
   Ahmed Ouederni — Portfolio JavaScript
   Data rendering, scroll reveals
   ═══════════════════════════════════════════════════════════════════════════ */

import { projects } from './data/projects.js';
import { skillCategories, iconMap, iconBaseUrl } from './data/skills.js';
import { contactLinks } from './data/contact.js';

/* ───────────────────────────────────────────────────────────────────────────
   1. THEME — dark-only per IDENTITY.md
   ─────────────────────────────────────────────────────────────────────────── */
document.documentElement.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark');

/* ───────────────────────────────────────────────────────────────────────────
   2. RENDER PROJECTS
   ─────────────────────────────────────────────────────────────────────────── */
const projectsGrid = document.getElementById('projects-grid');

function renderProjects() {
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects.map((project) => {
    return `
      <a href="${project.href}" class="project-card"
        target="_blank" rel="noopener noreferrer" role="listitem">
        <div class="project-card__body">
          <span class="project-card__title">${project.title}</span>
          <span class="project-card__description">${project.description}</span>
        </div>
      </a>
    `;
  }).join('');
}

/* ───────────────────────────────────────────────────────────────────────────
   3. RENDER SKILLS
   ─────────────────────────────────────────────────────────────────────────── */
const skillsContainer = document.getElementById('skills-container');

function renderSkills() {
  if (!skillsContainer) return;

  skillsContainer.innerHTML = skillCategories.map((cat) => {
    const skillsHtml = cat.skills.map((skill) => {
      const iconSlug = iconMap[skill.icon];
      const iconUrl = iconSlug ? `${iconBaseUrl}/${iconSlug}` : null;
      return `
        <div class="skill-box">
          ${iconUrl ? `<img class="skill-box__icon" src="${iconUrl}" alt="" loading="lazy" width="28" height="28">` : ''}
          <span class="skill-box__name">${skill.name}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="skill-category">
        <span class="skill-category__label">${cat.category}</span>
        <div class="skill-boxes">${skillsHtml}</div>
      </div>
    `;
  }).join('');
}

/* ───────────────────────────────────────────────────────────────────────────
   4. RENDER CONTACT (terminal-style, data-driven)
   ─────────────────────────────────────────────────────────────────────────── */
const contactContainer = document.getElementById('contact-links');

function renderContact() {
  if (!contactContainer) return;

  const terminalHead = `
    <div class="contact-terminal__head">
      <span class="contact-terminal__dot contact-terminal__dot--red"></span>
      <span class="contact-terminal__dot contact-terminal__dot--yellow"></span>
      <span class="contact-terminal__dot contact-terminal__dot--green"></span>
      <span class="contact-terminal__title">contact — bash</span>
    </div>
  `;

  const terminalBody = contactLinks.map((link) => {
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
  }).join('');

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

/* ───────────────────────────────────────────────────────────────────────────
   5. SCROLL REVEAL
   ─────────────────────────────────────────────────────────────────────────── */
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
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* ───────────────────────────────────────────────────────────────────────────
   6. INIT
   ─────────────────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderSkills();
  renderContact();
  setupScrollReveal();
});
