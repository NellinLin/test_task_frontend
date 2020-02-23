import PhoneMaskComponent from './components/PhoneMaskComponent.js';

const test = document.getElementById('test');
const phone = new PhoneMaskComponent(test, '+7(906I)-II-*X');
phone.render();
phone.checkMask('+7(906)--*X');

const testWithErr = document.getElementById('testWithError');
testWithErr.className = 'margin-for-test';
const errCheckPhone = new PhoneMaskComponent(testWithErr, '+7(906I)-II-*X');
errCheckPhone.render();
errCheckPhone.checkMask('+7(078)');
