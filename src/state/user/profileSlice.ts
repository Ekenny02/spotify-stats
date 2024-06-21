import { PayloadAction, asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import GetData from "../../api/GetData";

interface Profile {
    profile_picture: any | undefined,
    name: string
}

const initialState: Profile = {
    profile_picture: undefined,
    name: ''
}

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async () => {
        return await GetData({
            extension: "v1/me",
            method: "GET",
        });
    }
);

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(getProfile.fulfilled, (state, action) => {
            action.payload["profile_picture"] = action.payload["images"][0];

            const scaleFactor = 100 / action.payload["profile_picture"]["width"];

            action.payload["profile_picture"]["width"] *= scaleFactor;
            action.payload["profile_picture"]["height"] *= scaleFactor;

            state.name = action.payload["display_name"];
            state.profile_picture = action.payload["profile_picture"];
        });
    }
});

export default profileSlice.reducer;