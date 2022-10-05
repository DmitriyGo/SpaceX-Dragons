import {AxiosResponse} from "axios";
import $api from "../http";
import {FavouriteResponseModel} from "../models/FavouriteResponse.model";

export default class FavouriteService {
    static fetchAll(): Promise<AxiosResponse<string[]>> {
        return $api.get<string[]>('/favourites')
    }  static fetchOne(url: string): Promise<AxiosResponse<string[]>> {
        return $api.get<string[]>(`/favourite?url=${url}`)
    }
}
