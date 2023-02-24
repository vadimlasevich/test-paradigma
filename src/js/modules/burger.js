const toggleMobileMenu = () => {
  const burger = document.querySelector('.header__burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const header = document.querySelector('.header');

  const toggleMenu = () => {
    burger.classList.toggle('burger-rotate');
    mobileMenu.classList.toggle('mobile-menu__show');
    header.classList.toggle('header-mobile');
  };

  burger.addEventListener('click', toggleMenu);
};

export default toggleMobileMenu;
