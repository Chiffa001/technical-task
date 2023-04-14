import {createReducer} from "@reduxjs/toolkit";
import {AuthorState} from "src/types/state/authorState";
import {getAuthors} from "../actions/getAuthors";

const initialState: AuthorState = {
    list: null,
};

export const authorReducer = createReducer(initialState, (builder) =>
    builder
        .addCase(getAuthors.pending, (state) => {
            state.fetching = true;
        })
        .addCase(getAuthors.fulfilled, (state, {payload}) => {
            state.fetching = false;
            state.fetched = true;
            state.list = payload;
        })
        .addCase(getAuthors.rejected, (state, {error}) => {
            state.fetching = false;
            state.failed = true;
            state.error = error.message;
        }),
);
