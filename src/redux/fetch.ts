import { DataType, User } from "../common/types";

const url = "../public/data.json";

/**
 * Fetches job listings from a local JSON file.
 * This is a mocked fetcher for development purposes.
 * 
 * @returns {Promise<Job[]>} A promise that resolves to an array of job objects.
 * @throws Will throw an error if the network response is not ok or if fetching fails.
 */
export const fetchData = async <T>(dataType: DataType): Promise<T> => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error fetching data");
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

/** Because we cant insert new data into the data.json file, this request will always fail. */
export const editUserData = async (newData: User) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        });

        if (!response.ok) {
            throw new Error("Error setting user data");
        }

        return Promise.reject("Error setting user data");

        // We would normally return the response data here, but since we are mocking the request, we return a rejected promise.
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        throw error;
    }
};
