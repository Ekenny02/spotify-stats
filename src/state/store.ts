import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './user/profileSlice'
import artistsReducer from './user/ArtistsSlice'

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        artists: artistsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;