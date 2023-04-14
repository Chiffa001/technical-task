import {createSelector} from "@reduxjs/toolkit";
import {ApplicationState} from ".";

export const selectAuthor = (authorId: number) =>
    createSelector(
        (state: ApplicationState) => state.author,
        (state) => state.list?.find((author) => author.id === authorId),
    );

export const selectRootComments = () =>
    createSelector(
        (state: ApplicationState) => state.comment,
        (state) =>
            Object.values(state.comments)
                .flat()
                .filter((comment) => !comment.parent),
    );

export const selectInnerComments = (parentId: number) =>
    createSelector(
        (state: ApplicationState) => state.comment,
        (state) =>
            Object.values(state.comments)
                .flat()
                .filter((comment) => comment.parent === parentId),
    );

export const selectCommentsInfo = () =>
    createSelector(
        (state: ApplicationState) => state.comment.comments,
        (comments) => {
            const list = Object.values(comments).flat();
            return {
                comments: list.length,
                likes: list
                    .map(({likes}) => likes)
                    .reduce((acc, curr) => acc + curr, 0),
            };
        },
    );
