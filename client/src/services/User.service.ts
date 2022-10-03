import {AxiosResponse} from "axios";
import $api from "../http";
import {UserModel} from "../models/User.model";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<UserModel[]>> {
        return $api.get<UserModel[]>('/users')
    }
}
