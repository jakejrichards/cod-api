import fetch from 'node-fetch';

// Base Endpoint
export const COD_API_ENDPOINT = 'https://my.callofduty.com/api/papi-client';

// API Helper
export function getDataFromAPI<T extends object = object>(uri: string): Promise<T> {
    return fetch(uri)
        .then(response => response.json())
        .then(response => {
            const { status, data: error } = response;
            if (status !== 'success') {
                throw new Error(`cod-api request failed: ${error.message}`);
            }
            return response;
        });
}
