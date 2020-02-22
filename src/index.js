import PhoneMaskComponent from './components/PhoneMaskComponent.js';

const app = document.getElementById('test');
const phone = new PhoneMaskComponent(app, '+7(985)0');
phone.render();
console.log(phone.checkMask('dddd'));
console.log(phone.checkMask('+7(985)0'));

phone.mask = '+7(985)0II-**-X';
phone.render();
