import * as SecureStore from "expo-secure-store";

export default async function GetData(initialization: any) {
    const data = await fetch(`https://api.spotify.com/${initialization['extension'] + '?' + initialization['url_search_params']}`, {
        method: initialization['method'],
        headers: { Authorization: `Bearer ${SecureStore.getItem("access_token")}` }
    });

    return data.json();
}