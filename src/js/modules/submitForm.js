const submitForm = () => {
  const form = document.querySelector('.modal-form__form');
  const formInputTel = document.querySelector('.modal-form__form-input');
  const formInputPolicy = document.querySelector('.modal-form__form-policy-input');
  const contentApplication = document.querySelector('.modal-form__content_application');
  const contentSucsses = document.querySelector('.modal-form__content_sucsses');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formInputPolicy.checked && formInputTel.value) {
      contentApplication.style.display = 'none';
      contentSucsses.style.display = 'block';
    }
  });
};

export default submitForm;
