/**
 * @summary Application-level store orchestrating artwork data fetching and state.
 * @author <tu nombre> - <tu código de estudiante>
 */
import { ref } from 'vue';
import { HarvardMuseumApi } from '@/art-inventory/infrastructure/harvard-museum-api.js';
import { ArtworkAssembler } from '@/art-inventory/infrastructure/artwork.assembler.js';

const harvardMuseumApi = new HarvardMuseumApi();

/**
 * @summary Reactive store exposing the artwork list and its loading/error state.
 * @description Fetches artworks from the Harvard Art Museums API and maps the raw
 * response into domain entities via the ArtworkAssembler.
 * @returns {{ artworks: import('vue').Ref<Array>, isLoading: import('vue').Ref<boolean>, error: import('vue').Ref<string|null>, fetchArtworks: Function }}
 */
export function useArtworkStore() {
    const artworks = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    /**
     * @summary Fetches the artwork list from the API and populates the store.
     * @returns {Promise<void>}
     */
    async function fetchArtworks() {
        isLoading.value = true;
        error.value = null;
        try {
            const response = await harvardMuseumApi.getArtworks();
            artworks.value = ArtworkAssembler.toEntitiesFromResponse(response);
        } catch (err) {
            error.value = err;
        } finally {
            isLoading.value = false;
        }
    }

    return { artworks, isLoading, error, fetchArtworks };
}