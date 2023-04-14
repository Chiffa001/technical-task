import getAuthorsRequest from "src/api/authors/getAuthorsRequest";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthorActions} from "src/types/actions/author";
import {Author} from "src/types/author";

export const getAuthors = createAsyncThunk<Author[]>(
    AuthorActions.GET,
    async () => getAuthorsRequest(),
);
