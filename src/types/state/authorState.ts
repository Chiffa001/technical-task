import {Author} from "../author";
import {CommonState} from "./commonState";

export type AuthorState = {
    list: Author[] | null;
} & CommonState;
