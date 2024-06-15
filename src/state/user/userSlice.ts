import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState {
    profile_picture: any,
    name: string | null
}

const initialState: userState = {
    profile_picture: null,
    name: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<any>) => {
            state.profile_picture = action.payload['profile_picture'];
            state.name = action.payload['name'];
        }
    }
});

export const {updateUser} = userSlice.actions;

export default userSlice.reducer;