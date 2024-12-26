const menuBtn = document.querySelector('.js-menuToggle');
const navMenu = document.querySelector('.js-navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});
