import {UserModel} from "./User.model";

export type AuthResponseModel = {
    accessToken: string
    refreshToken: string
    user: UserModel
}
