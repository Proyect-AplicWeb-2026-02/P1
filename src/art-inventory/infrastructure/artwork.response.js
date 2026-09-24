/**
 * @summary Response wrapping the full payload returned by the Harvard Art Museums object endpoint.
 * @author <tu nombre> - <tu código de estudiante>
 */
import { ArtworkResource } from './artwork.resource.js';

export class ArtworkResponse {
    /**
     * @param {object} json - Raw JSON payload from the API.
     * @param {object} json.info - Pagination info.
     * @param {Array<object>} json.records - The raw artwork records.
     */
    constructor(json) {
        this.info = json.info;
        this.resources = (json.records ?? []).map(record => new ArtworkResource(record));
    }
}