/**
 * @summary Entity representing a single artwork cataloged by Harvard Art Museums.
 * @remarks Wraps the relevant fields returned by the Harvard Art Museums object
 * endpoint into a domain entity with validated, immutable state.
 * @author <tu nombre> - <tu código de estudiante>
 */
import { Url } from '@/shared/domain/model/url.js';

export class Artwork {
    /** @type {number} */
    #id;
    /** @type {string} */
    #title;
    /** @type {string} */
    #classification;
    /** @type {string} */
    #technique;
    /** @type {string} */
    #period;
    /** @type {string} */
    #culture;
    /** @type {string} */
    #accessionNumber;
    /** @type {string} */
    #creditLine;
    /** @type {Url|null} */
    #primaryImageUrl;
    /** @type {Url|null} */
    #url;

    /**
     * Creates a new Artwork entity.
     *
     * @param {object} params
     * @param {number} params.id - The artwork's unique identifier.
     * @param {string} params.title - The artwork's title.
     * @param {string} [params.classification] - The artwork's classification/category.
     * @param {string} [params.technique] - The technique used to create the artwork.
     * @param {string} [params.period] - The period the artwork dates from.
     * @param {string} [params.culture] - The culture of origin of the artwork.
     * @param {string} [params.accessionNumber] - The museum's accession number.
     * @param {string} [params.creditLine] - The credit line / authorship credit.
     * @param {string} [params.primaryImageUrl] - The URL of the artwork's primary image.
     * @param {string} [params.url] - The URL of the artwork's page on the museum website.
     * @throws {Error} If id or title are missing.
     */
    constructor({ id, title, classification, technique, period, culture, accessionNumber, creditLine, primaryImageUrl, url }) {
        if (!id) throw new Error('Artwork requires a valid id');
        if (!title) throw new Error('Artwork requires a title');

        this.#id = id;
        this.#title = title;
        this.#classification = classification ?? '';
        this.#technique = technique ?? '';
        this.#period = period ?? '';
        this.#culture = culture ?? '';
        this.#accessionNumber = accessionNumber ?? '';
        this.#creditLine = creditLine ?? '';
        this.#primaryImageUrl = primaryImageUrl ? new Url(primaryImageUrl) : null;
        this.#url = url ? new Url(url) : null;

        Object.freeze(this);
    }

    get id() { return this.#id; }
    get title() { return this.#title; }
    get classification() { return this.#classification; }
    get technique() { return this.#technique; }
    get period() { return this.#period; }
    get culture() { return this.#culture; }
    get accessionNumber() { return this.#accessionNumber; }
    get creditLine() { return this.#creditLine; }
    /** @returns {string|null} */
    get primaryImageUrl() { return this.#primaryImageUrl?.value ?? null; }
    /** @returns {string|null} */
    get url() { return this.#url?.value ?? null; }
}