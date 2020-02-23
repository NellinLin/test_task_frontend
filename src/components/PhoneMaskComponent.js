import './PhoneMaskComponent.css';

const PHONE_CONTAINER_ERR = 'Отсутсвует тег с классом phone-container';
const MASK_TYPE_ERR = 'Неверный тип входных данных (маска)';

/**
 * Phone mask component
 *
 * @description
 * Маска инпута. Значения:
 * "I" - одиночный инпут для ввода одной цифры
 * "X" - серый блок с символом "X"
 * "*" - серый блок с символом "●"
 * <цифра> - серый блок с введенной цифрой
 * <не цифра> - символ отображается "как есть"
 */
export default class PhoneMaskComponent {
    /**
     * Phone mask component constructor
     * @param {*} parent
     * @param {string} mask
     */
    constructor(parent = document.body, mask = '') {
        this.maskValidation(mask);
        this._parent = parent;
        this._mask = mask.split('');
    }

    /**
     * Add mask
     * @param {string} mask
     */
    set mask(mask = '') {
        this.maskValidation(mask);
        this._mask = mask.split('');
    }

    /**
     * Render mask form
     */
    render() {
        let phoneContainer = this._parent.getElementsByClassName('phone-mask-create-container')[0];
        if (phoneContainer) {
            phoneContainer.innerHTML = '';
        } else {
            phoneContainer = document.createElement('div');
            phoneContainer.className = 'phone-mask-create-container';
        }

        const phoneField = document.createElement('div');
        phoneField.className = 'phone-container';

        const regex = RegExp('[0-9X]');
        this._mask.forEach((elem, index) => {
            switch (elem) {
            case 'I':
                phoneField.innerHTML += `<input type="number" maxlength="1" data-index="${index}" placeholder="_"
                                        class="phone-container__input text block-size margin">`;
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

        const errorField = document.createElement('div');
        errorField.className = 'error-container error-container_invisible margin';
        errorField.textContent = 'Неверный номер, попробуйте ещё раз';

        phoneContainer.append(phoneField);
        phoneContainer.append(errorField);
        this._parent.append(phoneContainer);
    }

    /**
     * Check mask
     * @description Reads the phone number from the rendered component
     * and compares it with the entered value
     * @param {string} answer
     * @return {boolean}
     */
    checkMask(answer) {
        const inputMask = this._mask;

        const inputFields = this.getHtmlCollectionInput('phone-container', 'input');
        [].forEach.call(inputFields, (elem) => {
            inputMask[elem.dataset.index] = elem.value;
        });

        if (inputMask.join('') !== answer) {
            this.errorView(inputFields);
            return false;
        }

        this.withoutErrorView(inputFields);
        return true;
    }

    /**
     * Get phone number
     * @description Reads the phone number from the rendered component
     * @return {string}
     */
    getPhoneNumber() {
        const inputMask = this._mask;

        const inputFields = this.getHtmlCollectionInput('phone-container', 'input');
        [].forEach.call(inputFields, (elem) => {
            inputMask[elem.dataset.index] = elem.value;
        });

        return inputMask.join('');
    }

    /**
     * Get HTMLCollection (tagName) from elem (className)
     * @param {string} className
     * @param {string} tagName
     * @return {HTMLCollection}
     */
    getHtmlCollectionInput(className, tagName) {
        const phoneField = this._parent.getElementsByClassName(className);
        if (!phoneField.length) {
            throw new Error(PHONE_CONTAINER_ERR);
        }

        return phoneField[0].getElementsByTagName(tagName);
    }

    /**
     * Error view for check func
     * @param {HTMLCollection} inputFields
     */
    errorView(inputFields) {
        [].forEach.call(inputFields, (elem) => {
            elem.className = 'phone-container__input text block-size margin phone-container__input_error';
        });

        const errorView = this._parent.getElementsByClassName('error-container error-container_invisible margin')[0];
        if (errorView) {
            errorView.className = 'error-container margin';
        }
    }

    /**
     * Without error view for check func
     * @param {HTMLCollection} inputFields
     */
    withoutErrorView(inputFields) {
        [].forEach.call(inputFields, (elem) => {
            elem.className = 'phone-container__input text block-size margin';
        });

        const errorView = this._parent.getElementsByClassName('error-container margin')[0];
        if (errorView) {
            errorView.className = 'error-container error-container_invisible margin';
        }
    }

    /**
     * Validation of the entered mask
     * @param {*} mask
     */
    maskValidation(mask) {
        if (typeof mask !== 'string') {
            throw new Error(MASK_TYPE_ERR);
        }
    }
}
