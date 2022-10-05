import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll,toggle} from "./FavouriteActionCreators";
import {fetchAllDragons} from "./DragonActionCreators";
import {DragonModel} from "../../models/Dragon.model";
import {FavouriteResponseModel} from "../../models/FavouriteResponse.model";

interface LikedPostsState {
    posts: {url: string}[]
    isLoading: boolean
    error: string
}

const initialState: LikedPostsState = {
    posts: [],
    isLoading: false,
    error: ''
}

export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getAll.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getAll.fulfilled.type]: (state, action: PayloadAction<{url: string}[]>) => {
            state.isLoading = false;
            state.error = '';
            state.posts = action.payload;
        },
        [getAll.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [toggle.pending.type]: (state) => {
            state.isLoading = true;
        },
        [toggle.fulfilled.type]: (state, action: PayloadAction<{url: string}[]>) => {
            state.isLoading = false;
            state.error = '';
            state.posts = action.payload;
        },
        [toggle.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default favouriteSlice.reducer
