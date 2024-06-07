import * as SecureStore from "expo-secure-store";

export default async function GetData(initialization: any) {
    const data = await fetch(`https://api.spotify.com/${initialization['extension']}`, {
        method: initialization['method'],
        headers: { Authorization: `Bearer ${SecureStore.getItem("access_token")}` }
    }).then(response => response.json());

    return data;
}