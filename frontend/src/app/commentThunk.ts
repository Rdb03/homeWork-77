import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";
import {CommentMutation, IApiCommentsList, IComments} from "../type";

export const fetchComments = createAsyncThunk<IComments[]>(
    'comments/fetch',
    async () => {
        const response = await axiosApi.get<IApiCommentsList | null>('/comments');
        const contactsResponse = response.data;
        let comments: IComments[] = [];

        if (contactsResponse) {
            comments = Object.keys(contactsResponse).map((id) =>({
                ...contactsResponse[id],
                id
            }));
        }

        return comments;
    });

export const createComments = createAsyncThunk<void, CommentMutation>(
    'comment/create',
    async (comment) => {
        const formData = new FormData();
        formData.append('author', comment.author);
        formData.append('comment', comment.comment);

        if(comment.image) {
            formData.append('image', comment.image);
        }

        await axiosApi.post('/comments', formData);
    }
);
