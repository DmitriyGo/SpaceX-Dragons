import {AxiosResponse} from "axios";
import $api from "../http";
import {AuthResponseModel} from "../models/AuthResponse.model";

export default class AuthorizationService {
    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponseModel>> {
        return $api.post<AuthResponseModel>('/registration', {email, password})
    }

    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponseModel>> {
        return $api.post<AuthResponseModel>('/login', {email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }
}
