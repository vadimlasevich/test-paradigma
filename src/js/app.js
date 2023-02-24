import * as flsFunctions from './modules/functions.js';
import maskInput from './modules/maskInput.js';
import isMask from './modules/inputmask.min.js';
import submitForm from './modules/submitForm.js';
import showModal from './modules/showModal.js';
import headerMobileScroll from './modules/headerMobileScroll.js';
import toggleMobileMenu from './modules/burger.js';

flsFunctions.isWebp();

isMask();
maskInput();
submitForm();
showModal();
headerMobileScroll();
toggleMobileMenu();
