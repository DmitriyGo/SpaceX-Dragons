import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserModel} from "../../models/User.model";
import {checkAuth, login, logout, register} from "./AuthActionCreators";

interface AuthState {
    user: UserModel
    isAuth: boolean
    isLoading: boolean
    error: string
}

const initialState: AuthState = {
    user: {} as UserModel,
    isLoading: false,
    isAuth: false,
    error: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [register.pending.type]: (state) => {
            state.isLoading = true;
        },
        [register.fulfilled.type]: (state, action: PayloadAction<UserModel>) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuth = true;
        },
        [register.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isAuth = false;
        },

        [login.pending.type]: (state) => {
            state.isLoading = true;
        },
        [login.fulfilled.type]: (state, action: PayloadAction<UserModel>) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuth = true;
        },
        [login.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isAuth = false;
        },

        [logout.pending.type]: (state) => {
            state.isLoading = true;
        },
        [logout.fulfilled.type]: (state, action: PayloadAction<UserModel>) => {
            state.isLoading = false;
            state.user = {} as UserModel;
            state.isAuth = false;
        },
        [logout.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isAuth = false;
        },

        [checkAuth.pending.type]: (state) => {
            state.isLoading = true;
        },
        [checkAuth.fulfilled.type]: (state, action: PayloadAction<UserModel>) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isAuth = true;
        },
        [checkAuth.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isAuth = false;
        },

    }
})

export default authSlice.reducer
