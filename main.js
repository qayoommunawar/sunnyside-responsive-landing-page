const btnToggle = document.querySelector('.icon-hamburger');
const mobileMenu = document.querySelector('#mobile-menu');
const navLinks = document.querySelectorAll('#mobile-menu a');

// Toggle menu on hamburger click
btnToggle.addEventListener('click', () => {
  if (window.innerWidth < 768) {
    mobileMenu.classList.toggle('active');
    const expanded = btnToggle.getAttribute('aria-expanded') === 'true';
    btnToggle.setAttribute('aria-expanded', !expanded);
  }
});

// Close menu on nav link click (only on mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768 && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      btnToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Remove 'active' class when resizing to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mobileMenu.classList.remove('active');
    btnToggle.setAttribute('aria-expanded', 'false');
  }
});
