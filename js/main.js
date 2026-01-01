const navMenuEl = document.querySelector('#nav-menu');
const navMenuToggleEl = document.querySelector('#nav-menu-toggle');
const navModeIconEl = document.querySelector('#mode-icon');
const navModeToggleEl = document.querySelector('#nav-mode-toggle');
const overlayEl = document.querySelector('#overlay');
const htmlEl = document.documentElement;

const toggleMenu = () => {
  navMenuEl.classList.toggle('active');
  overlayEl.classList.toggle('active');
  const isOpen = navMenuEl.classList.contains('active');
  navMenuToggleEl.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
};

const toggleMode = () => {
  const currentTheme = htmlEl.getAttribute('data-theme');
  
  if (currentTheme === 'dark') {
    htmlEl.setAttribute('data-theme', 'light');
    localStorage.setItem('mode', 'light');
    navModeIconEl.className = 'ri-moon-line';
  } else {
    htmlEl.setAttribute('data-theme', 'dark');
    localStorage.setItem('mode', 'dark');
    navModeIconEl.className = 'ri-sun-line';
  }
};

navMenuToggleEl.addEventListener('click', toggleMenu);
overlayEl.addEventListener('click', toggleMenu);
navModeToggleEl.addEventListener('click', toggleMode);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenuEl.classList.contains('active')) {
    toggleMenu();
  }
});