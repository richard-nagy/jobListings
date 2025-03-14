import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataType, LoginData, User, UsersReducer } from "../common/types";
import { editUserData, fetchData } from "./fetch";

export const fetchUsersAction = createAsyncThunk("users/fetchUsers", async () => {
    const users = await fetchData<User[]>(DataType.users);
    return users;
});

export const editUserDataAction = createAsyncThunk("users/editUserData", async (newUserData: User) => {
    await editUserData(newUserData);
    return newUserData;
});

const initialState: UsersReducer = {
    users: [],
    activeUser: null,
    loginErrorMessage: null,
    editUserErrorMessage: null,
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
            state.loginErrorMessage = user
                ? null
                : "Invalid username or password";
        },
        logoutUser: (state) => {
            state.activeUser = null;
        },
        clearLoginErrorMessage: (state) => {
            state.loginErrorMessage = null;
        },
        clearEditUserErrorMessage: (state) => {
            state.editUserErrorMessage = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsersAction.fulfilled, (state, action) => {
            state.users = action.payload;
        });
        /** Because the editUserDataAction always fails, we only handle its rejection. */
        builder.addCase(editUserDataAction.rejected, (state, action) => {
            state.editUserErrorMessage = action.error.message || "Failed to edit user data";
        });
    },
});

export const { loginUser, logoutUser, clearLoginErrorMessage, clearEditUserErrorMessage } = usersSlice.actions;
export default usersSlice;
