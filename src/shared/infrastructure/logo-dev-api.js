/**
 * @summary Provides the client's logo URL, fetched via the Logo.dev API.
 * @author <tu nombre> - <tu código de estudiante>
 */

/**
 * @summary Builds the logo URL for a given domain using Logo.dev.
 * @param {string} domain - The company/organization domain (e.g. 'harvardartmuseums.org').
 * @returns {string} The full logo image URL.
 */
export function getLogoUrl(domain) {
    const baseUrl = import.meta.env.VITE_LOGO_API_URL;
    const apiKey = import.meta.env.VITE_LOGO_API_KEY;
    return `${baseUrl}/${domain}?token=${apiKey}`;
}