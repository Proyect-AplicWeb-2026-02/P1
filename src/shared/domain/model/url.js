/**
 * Value object representing a valid URL within the domain.
 *
 * @remarks
 * Ensures that URL values are well-formed. It is immutable.
 * @author <tu nombre> - <tu código de estudiante>
 */
export class Url {
    /** @type {string} */
    #value;

    /**
     * Creates a new Url instance.
     *
     * @param {string} value - The URL string to validate and wrap.
     * @throws {Error} If the provided value is not a valid URL.
     */
    constructor(value) {
        try {
            new URL(value);
        } catch {
            throw new Error(`Invalid URL value: ${value}`);
        }
        this.#value = value;
        Object.freeze(this);
    }

    /**
     * Returns the underlying URL string.
     * @returns {string}
     */
    get value() {
        return this.#value;
    }

    /**
     * Checks equality against another Url instance.
     * @param {Url} other
     * @returns {boolean}
     */
    equals(other) {
        return other instanceof Url && other.value === this.#value;
    }

    /**
     * Returns the string representation of the URL.
     * @returns {string}
     */
    toString() {
        return this.#value;
    }
}