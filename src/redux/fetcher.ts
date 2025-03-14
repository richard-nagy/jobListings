import { DataType } from "../common/types";

/**
 * Fetches job listings from a local JSON file.
 * This is a mocked fetcher for development purposes.
 * 
 * @returns {Promise<Job[]>} A promise that resolves to an array of job objects.
 * @throws Will throw an error if the network response is not ok or if fetching fails.
 */
export const fetchData = async <T>(dataType: DataType): Promise<T> => {
    try {
        const response = await fetch("../public/data.json");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        switch (dataType) {
            case DataType.users:
                return data.users;
            case DataType.jobs:
            default:
                return data.jobs;
        }

    } catch (error) {
        throw error;
    }
};
