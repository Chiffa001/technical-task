import {createReducer} from "@reduxjs/toolkit";
import {CommentState} from "src/types/state/commentState";
import {getComments} from "../actions/getComments";

const initialState: CommentState = {
    comments: {},
    pagination: null,
};

export const commentReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(getComments.pending, (state) => {
            state.fetching = true;
        })
        .addCase(getComments.fulfilled, (state, {meta, payload}) => {
            state.fetching = false;
            state.fetched = true;
            state.failed = false;
            state.comments[meta.arg] = payload.data;
            state.pagination = payload.pagination;
        })
        .addCase(getComments.rejected, (state, {error, meta}) => {
            state.fetching = false;
            state.failed = true;
            state.error = {
                page: meta.arg,
                error: error.message as string,
            };
        }),
);
