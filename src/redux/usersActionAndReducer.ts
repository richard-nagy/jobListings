import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataType, LoginData, User, UsersReducer } from "../common/types";
import { fetchData } from "./fetcher";

export const fetchUsersAction = createAsyncThunk("users/fetchUsers", async () => {
    const users = await fetchData<User[]>(DataType.users);
    return users;
});

const initialState: UsersReducer = {
    users: [],
    activeUser: null,
    errorMessage: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<LoginData>) => {
            const users = state.users.map(user => ({ ...user }));
            const user = users.find(
                (user) =>
                    user.username === action.payload.username &&
                    user.password === action.payload.password
            );

            state.activeUser = user ?? null;
            state.errorMessage = user
                ? null
                : "Invalid username or password";
        },
        logoutUser: (state) => {
            state.activeUser = null;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsersAction.fulfilled, (state, action) => {
            state.users = action.payload;
        });
    },
});

export const { loginUser, logoutUser, clearErrorMessage } = usersSlice.actions;
export default usersSlice;
