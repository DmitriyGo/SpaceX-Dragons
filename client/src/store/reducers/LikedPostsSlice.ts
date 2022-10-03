import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface LikedPostsState {
    posts: string[]
}

const initialState: LikedPostsState = {
    posts: []
}

export const likedPostsSlice = createSlice({
    name: 'dragon',
    initialState,
    reducers: {
        addPost(state, action: PayloadAction<string>) {
            state.posts.push(action.payload)
        },
        removePost(state, action: PayloadAction<string>) {
            state.posts = state.posts.filter(i => i != action.payload)
        }
    }
})

export default likedPostsSlice.reducer
