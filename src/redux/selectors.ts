import { Job } from "../common/types";
import { RootState } from "./store";

export const getJobsRecord = (state: RootState): Record<string, Job> => {
    const jobs = state.jobs.jobs;
    
    if (!jobs) {
        return {};
    }

    return Object.fromEntries(jobs.map((job) => [job.id, job]));
};
