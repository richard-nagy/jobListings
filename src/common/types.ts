export type Guid = string;

export interface Job {
    id: Guid;
    title: string;
    description: string;
};

export interface User {
    id: Guid;
    username: string;
    password: string;
    email: string;
    name: string;
};

export interface LoginData {
    username: string;
    password: string;
}

export enum DataType {
    jobs = 'jobs',
    users = 'users'
};

export interface UsersReducer {
    users: User[];
    activeUser: User | null;
    errorMessage: string | null;
};

export interface JobsReducer {
    jobs: Job[];
    loading: boolean;
    error: string | null;
};
