/**
 * @summary Resource representing a single raw artwork record as returned by the Harvard Art Museums API.
 * @author <tu nombre> - <tu código de estudiante>
 */
export class ArtworkResource {
    /**
     * @param {object} json - Raw JSON object for a single artwork record.
     * @param {number} json.id
     * @param {string} json.title
     * @param {string} [json.classification]
     * @param {string} [json.technique]
     * @param {string} [json.dated]
     * @param {string} [json.culture]
     * @param {string} [json.accessionnumber]
     * @param {string} [json.creditline]
     * @param {string} [json.primaryimageurl]
     * @param {string} [json.url]
     */
    constructor(json) {
        this.id = json.id;
        this.title = json.title;
        this.classification = json.classification;
        this.technique = json.technique;
        this.dated = json.dated;
        this.culture = json.culture;
        this.accessionnumber = json.accessionnumber;
        this.creditline = json.creditline;
        this.primaryimageurl = json.primaryimageurl;
        this.url = json.url;
    }
}