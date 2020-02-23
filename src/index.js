import PhoneMaskComponent from './components/PhoneMaskComponent.js';

const app = document.getElementById('test');
const phone = new PhoneMaskComponent(app, '+7(985)0I1');
phone.render();

phone.mask = '+7(906I)-II-*X';
phone.render();
phone.checkMask('+7(906)--*X');
