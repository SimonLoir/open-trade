export default class ElementIsNotAValidElementException extends Error {
    constructor() {
        super(
            'The provided element is not a valid HTMLElement or is an invalid query string'
        );
    }
}
