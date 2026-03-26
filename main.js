// ── Cursor glow ──
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// ── Mobile nav toggle ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;
hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileMenu.style.maxHeight = '400px';
    mobileMenu.style.opacity = '1';
  } else {
    mobileMenu.style.maxHeight = '0';
    mobileMenu.style.opacity = '0';
  }
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.style.maxHeight = '0';
    mobileMenu.style.opacity = '0';
  });
});

// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stat-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => observer.observe(el));

// ── Contact form submit ──
const form = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
form.addEventListener('submit', e => {
  e.preventDefault();
  form.style.display = 'none';
  formSuccess.classList.remove('hidden');
  formSuccess.style.display = 'flex';
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const scrollSpy = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === '#' + e.target.id) {
          link.style.color = '#fff';
        } else {
          link.style.color = '';
        }
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => scrollSpy.observe(s));
