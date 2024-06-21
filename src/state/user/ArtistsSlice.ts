import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import GetData from "../../api/GetData";

interface Artist {
    name: string,
    id: string,
    images: Array<any>,
    top_songs: Array<string>
}

interface Artists {
    artists: Artist[]
}


const initialState: Artists = {
    artists: []
}

export const addArtists = createAsyncThunk(
    'artists/addArtists',
    async (numberOfArtists: number) => {
        return await GetData({
            extension: "v1/me/top/artists",
            method: "GET",
            url_search_params: new URLSearchParams({
                limit: numberOfArtists.toString(),
            }),
        });
    }
);

export const addTopSongs = createAsyncThunk(
    'artists/addTopSongs',
    async (artistPosition: number, thunkAPI) => {
        const state: any = thunkAPI.getState();

        return [await GetData({
            extension: `v1/artists/${state.artists.artists[artistPosition]["id"]}/top-tracks`,
            method: "GET",
        }), artistPosition];
    }
);

const artistsSlice = createSlice({
    name: 'artists',
    initialState,
    reducers: {

    }
    ,
    extraReducers(builder) {
        builder.addCase(addArtists.fulfilled, (state, action) => {
            state.artists = action.payload['items'].map((artist: any) => {
                return {
                    name: artist['name'],
                    id: artist['id'],
                    images: artist['images'],
                    top_songs: []
                };
            });
        }),
            builder.addCase(addTopSongs.fulfilled, (state, action) => {
                for (let i = 0; i < 5; i++) {
                    state.artists[action.payload[1]]["top_songs"].push(action.payload[0]["tracks"][i]["name"]);
                }
            })
    }
});

export default artistsSlice.reducer;