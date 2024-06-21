import * as SecureStore from "expo-secure-store";

interface Initialization {
    extension: string,
    url_search_params?: URLSearchParams,
    method: string
}

/* Data Fetching Structured Helper */
export default async function GetData(initialization: Initialization) {
    const data = await fetch(`https://api.spotify.com/${initialization['extension'] + '?' + initialization['url_search_params']}`, {
        method: initialization['method'],
        headers: { Authorization: `Bearer ${SecureStore.getItem("access_token")}` }
    });

    return data.json();
}