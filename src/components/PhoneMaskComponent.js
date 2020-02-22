import './PhoneMaskComponent.css';

const PHONE_CONTAINER_ERR = 'Отсутсвует тег с классом phone-container';

/**
 * Phone mask component
 */
export default class PhoneMaskComponent {
    /**
     * Phone mask component constructor
     * @param {*} parent
     * @param {string} mask
     */
    constructor(parent = document.body, mask = '') {
        this._parent = parent;
        this._mask = mask.split('');
    }

    /**
     * Add mask
     * @param {string} mask
     */
    set mask(mask = '') {
        this._mask = mask.split('');
    }

    /**
     * Render mask form
     * @param {*} context
     */
    render(context) {
        const phoneField = document.createElement('div');
        phoneField.className = 'phone-container';

        const regex = RegExp('[0-9X]');
        this._mask.forEach((elem, index) => {
            switch (elem) {
            case 'I':
                phoneField.innerHTML += `<input maxlength="1" data-index="${index}" class="phone-container__input text block-size margin">`;
                break;
            case '*':
                phoneField.innerHTML += `<div class="phone-container__number text block-size margin">●</div>`;
                break;
            case (elem.match(regex) ? elem : null):
                phoneField.innerHTML += `<div class="phone-container__number text block-size margin">${elem}</div>`;
                break;
            default:
                phoneField.innerHTML += `<div class="text margin">${elem}</div>`;
            }
        });
        this._parent.append(phoneField);
    }

    /**
     * Check mask
     * @param {string} answer
     * @return {boolean}
     */
    checkMask(answer) {
        const phoneField = this._parent.getElementsByClassName('phone-container');
        if (!phoneField.length) {
            throw new Error(PHONE_CONTAINER_ERR);
        }

        const inputMask = this._mask;
        const inputFields = phoneField[0].getElementsByTagName('input');
        [].forEach.call(inputFields, (elem) => {
            inputMask[elem.dataset.index] = elem.value;
        });

        return inputMask.join('') === answer ? true : false;
    }
}
