import {CommentError, Pagination, Comment} from "../comment";
import {CommonState} from "./commonState";

export type CommentState = {
    comments: Record<number, Comment[]>;
    pagination: Pagination | null;
} & CommonState<CommentError>;
