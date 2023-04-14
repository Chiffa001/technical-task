import {useCallback, useEffect} from "react";
import {useAppSelector} from "./useAppSelector";
import {getComments} from "src/store/actions/getComments";
import {useAppDispatch} from "./useAppDispatch";
import {selectRootComments} from "src/store/selectors";

export const useComments = () => {
    const dispatch = useAppDispatch();
    const {comments, pagination, fetched, fetching, failed, error} =
        useAppSelector((state) => state.comment);
    const rootCommentList = useAppSelector(selectRootComments());

    const downloadComments = useCallback(
        (page = 1) => {
            dispatch(getComments(page));
        },
        [dispatch],
    );

    useEffect(() => {
        if (fetching || pagination?.page) {
            return;
        }
        downloadComments();
    }, [fetching, dispatch, pagination?.page, downloadComments]);

    return {
        rootCommentList,
        comments,
        pagination,
        commentsFetching: fetching,
        fetched,
        failed,
        error,
        downloadComments,
    };
};
