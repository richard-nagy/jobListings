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

            console.log(action.payload);
            console.log(users);
            console.log(user);
            state.activeUser = user ?? null;
        },
        logoutUser: (state) => {
            state.activeUser = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsersAction.fulfilled, (state, action) => {
            state.users = action.payload;
        });
    },
});

export const { loginUser, logoutUser } = usersSlice.actions;
export default usersSlice;
