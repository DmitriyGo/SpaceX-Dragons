import {createAsyncThunk} from "@reduxjs/toolkit";
import AuthorizationService from "../../services/Authorization.service";
import FavouriteService from "../../services/Favourite.service";

export const getAll = createAsyncThunk(
    'favourite/getAll',
    async ( _, {rejectWithValue}) => {
        try {
            const response = await FavouriteService.fetchAll();
            return response.data;
        } catch (e) {
            return rejectWithValue('An error occurred while connecting to the server');
        }
    }
)
export const toggle = createAsyncThunk(
    'favourite/toggle',
    async ({url}: {url: string}, {rejectWithValue}) => {
        try {
            const response = await FavouriteService.fetchOne(url);
            return response.data;
        } catch (e) {
            return rejectWithValue('An error occurred while connecting to the server');
        }
    }
)