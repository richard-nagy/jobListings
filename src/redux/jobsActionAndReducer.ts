import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataType, Job, JobsReducer } from "../common/types";
import { fetchData } from "./fetch";

export const fetchJobsAction = createAsyncThunk("jobs/fetchJobs", async () => {
    const jobs = await fetchData<Job[]>(DataType.jobs);
    return jobs;
});

const initialState: JobsReducer = {
    jobs: [],
    loading: false,
    error: null,
};

const jobsSlice = createSlice({
    name: "jobs",
    initialState: initialState,
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

export default jobsSlice;
