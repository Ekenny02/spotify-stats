import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface profileState {
    profile_picture: any,
    name: string | null
}

const initialState: profileState = {
    profile_picture: null,
    name: null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile: (state, action: PayloadAction<any>) => {
            state.profile_picture = action.payload['profile_picture'];
            state.name = action.payload['name'];
        }
    }
});

export const { updateProfile: updateProfile } = profileSlice.actions;

export default profileSlice.reducer;