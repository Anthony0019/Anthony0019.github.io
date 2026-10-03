const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.code-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.dataset.target);
    const open = panel.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.innerHTML = open ? 'Hide approach <span>⌃</span>' : 'View approach <span>⌄</span>';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();


const revealItems = document.querySelectorAll('.stack-card, .timeline-item, .project-card, .artifact, .life-step');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealItems.forEach((el) => observer.observe(el));
}
