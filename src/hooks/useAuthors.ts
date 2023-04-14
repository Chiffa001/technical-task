import {useEffect} from "react";
import {useAppDispatch} from "./useAppDispatch";
import {useAppSelector} from "./useAppSelector";
import {getAuthors} from "src/store/actions/getAuthors";

export const useAuthors = () => {
    const dispatch = useAppDispatch();
    const {list, fetched, fetching, failed, error} = useAppSelector(
        (state) => state.author,
    );

    useEffect(() => {
        if (fetched || fetching || failed) {
            return;
        }

        dispatch(getAuthors());
    }, [dispatch, failed, fetched, fetching]);

    return {
        authorList: list,
        authorError: error,
        authorFetching: fetching,
        authorFetched: fetched,
    };
};
