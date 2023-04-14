import getCommentsRequest from "src/api/comments/getCommentsRequest";
import {CommentResponse} from "src/types/comment";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {CommentActions} from "src/types/actions/comment";

export const getComments = createAsyncThunk<CommentResponse, number>(
    CommentActions.GET,
    async (page) => getCommentsRequest(page),
);
