import axios from "axios";
import {DragonModel} from "../../models/Dragon.model";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAllDragons = createAsyncThunk(
    'dragon/fetchAllDragon',
    async (_, thunkAPI) => {
        try
        {
            const response = await axios.get<DragonModel>('https://api.spacexdata.com/v4/dragons')
            return response.data;
        } catch (e)
        {
            return thunkAPI.rejectWithValue('An error occurred while connecting to the server')
        }
    }
)
