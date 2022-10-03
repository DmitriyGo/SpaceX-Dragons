import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthorizationService from "../../services/Authorization.service";
import axios from "axios";
import {AuthResponseModel} from "../../models/AuthResponse.model";
import {API_URL} from "../../http";

export const register = createAsyncThunk(
    'auth/register',
    async ({email, password} : {email: string, password: string}, {rejectWithValue}) => {
        try {
            const response = await AuthorizationService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            return response.data.user;
        } catch (e) {
            return rejectWithValue('An error occurred while connecting to the server');
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async ({email, password} : {email: string, password: string}, {rejectWithValue}) => {
        try {
            const response = await AuthorizationService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);

            return response.data.user;
        } catch (e) {
            return rejectWithValue('Wrong email or password');
        }
    }
)


export const logout = createAsyncThunk(
    'auth/logout',
    async (_, {rejectWithValue}) => {
        try {
            const response = await AuthorizationService.logout();
            localStorage.removeItem('token');
        } catch (e) {
            return rejectWithValue('An error occurred while connecting to the server');
        }
    }
)


export const checkAuth = createAsyncThunk(
    'auth/checkAuth',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get<AuthResponseModel>(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return response.data.user;
        } catch (e) {
            return rejectWithValue('An error occurred while connecting to the server');
        }
    }
)
