const headerMobileScroll = () => {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset === 0) {
      header.classList.remove('header-mobile');
    } else {
      header.classList.add('header-mobile');
    }

    if (window.pageYOffset === 0 && document.querySelector('.mobile-menu').classList.contains('mobile-menu__show')) {
      header.classList.add('header-mobile');
    }
  });
};

export default headerMobileScroll;
