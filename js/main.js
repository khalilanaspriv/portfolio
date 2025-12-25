const navMenuEl = document.querySelector('#nav-menu');
const navMenuToggleEl = document.querySelector('#nav-menu-toggle');
const overlayEl = document.querySelector('#overlay');

const toggleMenu = () => {
  navMenuEl.classList.toggle('active');
  overlayEl.classList.toggle('active');
  const isOpen = navMenuEl.classList.contains('active');
  navMenuToggleEl.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

navMenuToggleEl.addEventListener('click', toggleMenu);
overlayEl.addEventListener('click', toggleMenu);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenuEl.classList.contains('active')) {
    toggleMenu();
  }
});