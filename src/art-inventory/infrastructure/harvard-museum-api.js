/**
 * @summary API client for the Harvard Art Museums object endpoint.
 * @author <tu nombre> - <tu código de estudiante>
 */
import axios from 'axios';
import { errorInterceptor } from '@/shared/infrastructure/error.interceptor.js';
import { ArtworkResponse } from './artwork.response.js';

const harvardApiUrl = import.meta.env.VITE_HARVARD_API_URL;
const apiKey = import.meta.env.VITE_HARVARD_API_KEY;
const objectEndpoint = import.meta.env.VITE_OBJECT_ENDPOINT_PATH;

const http = axios.create({
    baseURL: harvardApiUrl,
    params: {
        apikey: apiKey
    }
});

http.interceptors.response.use(errorInterceptor.onResponse, errorInterceptor.onError);

export class HarvardMuseumApi {
    /**
     * @summary Fetches a page of artworks that have a primary image.
     * @returns {Promise<ArtworkResponse>}
     */
    async getArtworks() {
        const { data } = await http.get(objectEndpoint, {
            params: { hasimage: 1, size: 20 }
        });
        return new ArtworkResponse(data);
    }
}