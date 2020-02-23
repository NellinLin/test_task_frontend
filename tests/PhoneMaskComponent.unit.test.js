import PhoneMaskComponent from '../src/components/PhoneMaskComponent.js';

const phone = new PhoneMaskComponent();

describe("Mask validation", () => {
    const output = 'Неверный тип входных данных (маска)';

    test("Type array", () => {
        expect(() => phone.maskValidation([11, 22])).toThrow(output);
    });
    test("Type object", () => {
        expect(() => phone.maskValidation({'ff': 'ddd'})).toThrow(output);
    });
    test("Type object", () => {
        expect(() => phone.maskValidation({'ff': 'ddd'})).toThrow(output);
    });
    test("Type undefined", () => {
        expect(() => phone.maskValidation(undefined)).toThrow(output);
    });
    test("Type null", () => {
        expect(() => phone.maskValidation(null)).toThrow(output);
    });
});

describe("Test number", () => {
    test("Сorrect number (check mask func)", () => {
        phone.mask = '+7(906I)-II-*X';
        phone.render();

        expect(phone.checkMask('+7(906)--*X')).toBe(true);
    });
    test("incorrect number", () => {
        phone.mask = '+7(906I)-II-*X';
        phone.render();

        const output = '+7(906)-11-*X';

        expect(phone.checkMask(output)).toBe(false);
    });
    test("Сorrect number (get number func)", () => {
        phone.mask = '+7(906I)-II-*X';
        phone.render();

        const output = '+7(906)--*X';

        expect(phone.getPhoneNumber()).toBe(output);
    });
});
