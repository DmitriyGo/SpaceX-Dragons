import {DragonModel} from "../../models/Dragon.model";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchAllDragons} from "./DragonActionCreators";

interface DragonState {
    dragons: DragonModel[]
    isLoading: boolean
    error: string
}

const initialState: DragonState = {
    dragons: [],
    isLoading: false,
    error: ''
}

export const dragonSlice = createSlice({
    name: 'dragon',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAllDragons.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchAllDragons.fulfilled.type]: (state, action: PayloadAction<DragonModel[]>) => {
            state.isLoading = false;
            state.error = '';
            state.dragons = action.payload;
        },
        [fetchAllDragons.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default dragonSlice.reducer
