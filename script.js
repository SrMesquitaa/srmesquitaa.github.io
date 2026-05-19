document.addEventListener("DOMContentLoaded", function () {

  // Fade-in on scroll
  const fadeElements = document.querySelectorAll(".fade-in");
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeElements.forEach(el => fadeObserver.observe(el));

  // Navbar scroll shadow
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Active nav link on scroll (scrollspy)
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('[data-nav]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`[data-nav][href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => sectionObserver.observe(s));

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // Typewriter effect
  const wordsPT = ['Analista de Dados', 'Power BI Expert', 'Python Developer', 'Automação de Processos'];
  const wordsEN = ['Data Analyst', 'Power BI Expert', 'Python Developer', 'Process Automation'];

  const typeEl = document.getElementById('typewriter');
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function getWords() {
    return localStorage.getItem('preferredLanguage') === 'en' ? wordsEN : wordsPT;
  }

  function type() {
    const words = getWords();
    const word = words[wordIndex % words.length];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typeEl.textContent = word.substring(0, charIndex);

    let delay = isDeleting ? 55 : 95;

    if (!isDeleting && charIndex === word.length) {
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex++;
      delay = 280;
    }

    setTimeout(type, delay);
  }

  type();
});
