/**
 * @summary Assembler mapping Harvard Art Museums API resources into Artwork domain entities.
 * @author <tu nombre> - <tu código de estudiante>
 */
import { Artwork } from '@/art-inventory/domain/model/artwork.entity.js';

export class ArtworkAssembler {
    /**
     * @summary Converts a single ArtworkResource into an Artwork entity.
     * @param {import('./artwork.resource.js').ArtworkResource} resource
     * @returns {Artwork|null} The assembled entity, or null if the resource is invalid.
     */
    static toEntityFromResource(resource) {
        try {
            return new Artwork({
                id: resource.id,
                title: resource.title,
                classification: resource.classification,
                technique: resource.technique,
                period: resource.dated,
                culture: resource.culture,
                accessionNumber: resource.accessionnumber,
                creditLine: resource.creditline,
                primaryImageUrl: resource.primaryimageurl,
                url: resource.url
            });
        } catch (err) {
            console.error('Skipping invalid artwork resource:', err);
            return null;
        }
    }

    /**
     * @summary Converts a full ArtworkResponse into an array of Artwork entities.
     * @param {import('./artwork.response.js').ArtworkResponse} response
     * @returns {Array<Artwork>}
     */
    static toEntitiesFromResponse(response) {
        return response.resources
            .map(resource => this.toEntityFromResource(resource))
            .filter(artwork => artwork !== null);
    }
}