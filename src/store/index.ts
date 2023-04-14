import {configureStore} from "@reduxjs/toolkit";
import {commentReducer} from "./reducers/commentReducer";
import {authorReducer} from "./reducers/authorReducer";

export const store = configureStore({
    reducer: {
        comment: commentReducer,
        author: authorReducer,
    },
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
