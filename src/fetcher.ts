import { Job } from "./common/types";

/**
 * Fetches job listings from a local JSON file.
 * This is a mocked fetcher for development purposes.
 * 
 * @returns {Promise<Job[]>} A promise that resolves to an array of job objects.
 * @throws Will throw an error if the network response is not ok or if fetching fails.
 */
export const fetchJobs = async (): Promise<Job[]> => {
    try {
        const response = await fetch("../public/data.json");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const jobsData = await response.json();

        return jobsData.jobs;
    } catch (error) {
        console.error("Failed to fetch jobs:", error);
        throw error;
    }
};
