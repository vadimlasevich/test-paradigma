const showModal = () => {
  const callBtn = document.querySelector('.header__call-btn');
  const mapOpenBtn = document.querySelector('.header__map-btn');
  const modal = document.querySelectorAll('.modal');
  const modalForm = document.querySelector('.modal-form');
  const modalMap = document.querySelector('.modal-map');
  const overlay = document.querySelectorAll('.overlay');
  const modalButtonClose = document.querySelectorAll('.modal__button-close');

  const openFormModal = () => {
    modalForm.classList.add('modal-open');
    stopScroll(true);
  };
  const openMapModal = () => {
    modalMap.classList.add('modal-open');
    stopScroll(true);
  };

  const closeModal = () => {
    modal.forEach((item) => item.classList.remove('modal-open'));
    stopScroll(false);
  };

  const stopScroll = (opened) => {
    if (opened) {
      document.body.classList.add('stop-scroll');
    } else {
      document.body.classList.remove('stop-scroll');
    }
  };

  callBtn.addEventListener('click', openFormModal);
  mapOpenBtn.addEventListener('click', openMapModal);

  modalButtonClose.forEach((btn) => btn.addEventListener('click', closeModal));
  overlay.forEach((item) => item.addEventListener('click', closeModal));
};

export default showModal;
