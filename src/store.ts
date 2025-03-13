import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Job } from "./common/types";
import { fetchJobs } from "./fetcher";

export const fetchJobsAction = createAsyncThunk("jobs/fetchJobs", async () => {
    const jobs = await fetchJobs();
    return jobs;
});

const jobsSlice = createSlice({
    name: "jobs",
    initialState: {
        jobs: [] as Job[],
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobsAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchJobsAction.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobsAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch jobs";
            });
    },
});

export const store = configureStore({
    reducer: {
        jobs: jobsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
