import PhoneMaskComponent from '../components/PhoneMaskComponent.js';

export default { title: 'PhoneMaskComponent' };

export const NormalView = () => {
    const placeForTest = document.createElement('div');
    const phone = new PhoneMaskComponent(placeForTest, '+7(90I)0II-X9-**');
    phone.render();
    return placeForTest;
}

export const ViewWithError = () => {
    const placeForTest = document.createElement('div');
    const phone = new PhoneMaskComponent(placeForTest, '+7(90I)0II-X9-**');
    phone.render();
    phone.checkMask('+7(908)077-X9-**')
    return placeForTest;
};
