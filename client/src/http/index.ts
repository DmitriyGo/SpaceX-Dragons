import axios from "axios";
import {AuthResponseModel} from "../models/AuthResponse.model";

export const API_URL = 'http://localhost:5000/api'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalResponse = error.config;
    if(error.response.status == 401 && error.config && !error.config._isRetry) {
        originalResponse._isRetry = true;
        try {
            const response = await axios.get<AuthResponseModel>(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            return $api.request(originalResponse);
        } catch (e) {
            console.log('unauthorized')
        }
    }
    throw error;
})
export default $api;
