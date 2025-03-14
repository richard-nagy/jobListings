import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./jobsActionAndReducer";
import usersSlice from "./usersActionAndReducer";

export const store = configureStore({
    reducer: {
        jobs: jobsSlice.reducer,
        users: usersSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
