const maskInput = () => {
  let input = document.querySelector('input[type="tel"]');
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(input);
};

export default maskInput;
