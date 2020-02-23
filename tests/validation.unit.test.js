import PhoneMaskComponent from '../src/components/PhoneMaskComponent.js';

const phone = new PhoneMaskComponent();
phone.mask = '+7(890)I';
phone.render();

test('correct passwords', () => {
    expect(phone.getPhoneNumber()).toBe('+7(890)');
});
