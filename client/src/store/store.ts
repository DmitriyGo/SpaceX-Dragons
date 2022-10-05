import {combineReducers, configureStore} from "@reduxjs/toolkit";
import dragonReducer from './reducers/DragonSlice'
import authReducer from './reducers/AuthSlice'
import likedPostsReducer from './reducers/FavouriteSlice'

const rootReducer = combineReducers({
    dragonReducer,
    authReducer,
    likedPostsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

