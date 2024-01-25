import {createSlice} from "@reduxjs/toolkit";
import {createComments, fetchComments} from "./commentThunk.ts";
import {IComments} from "../type";
import {RootState} from "./store.ts";

interface DishesState {
    comments: IComments[] | null;
    fetchLoading: boolean;
    createComment: boolean;
}

const initialState: DishesState = {
    comments: null,
    fetchLoading: false,
    createComment: false,
};

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload;
            state.fetchLoading = false;
        });
        builder.addCase(fetchComments.rejected, (state) => {
            state.fetchLoading = false;
        });
        builder.addCase(createComments.pending, (state) => {
            state.createComment = true;
        });
        builder.addCase(createComments.fulfilled, (state) => {
            state.createComment = false;
        });
        builder.addCase(createComments.rejected, (state) => {
            state.createComment = false;
        });
    }
});

export const selectComments = (state: RootState) => state.comments.comments;
export const selectCreateCommentLoading = (state:RootState) => state.comments.createComment;
export const commentsReducer = commentsSlice.reducer;