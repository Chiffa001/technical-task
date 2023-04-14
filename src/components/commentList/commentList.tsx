import React from "react";
import {useAuthors} from "src/hooks/useAuthors";
import {useComments} from "src/hooks/useComments";
import {CommentItem} from "../commentItem";
import {Column} from "../ui/column";

import styles from "./style.module.css";
import {DownloadButton} from "../downloadButton/downloadButton";
import {Spinner} from "../ui/spinner";
import {Center} from "../ui/center";
import {ErrorPlate} from "../errorPlate/errorPlate";

export const CommentList = () => {
    const {
        rootCommentList,
        commentsFetching,
        fetched,
        failed,
        error,
        pagination,
        downloadComments,
    } = useComments();
    const {authorFetching, authorFetched} = useAuthors();

    const downloadClickHandler = () => {
        if (pagination) {
            downloadComments(pagination.page + 1);
        }
    };

    return (
        <Column className={styles.commentList}>
            {fetched &&
                authorFetched &&
                rootCommentList.map((comment) => (
                    <CommentItem comment={comment} key={comment.id} />
                ))}
            {(commentsFetching || authorFetching) && (
                <Center>
                    <Spinner />
                </Center>
            )}
            {failed && !(commentsFetching || authorFetching) && (
                <ErrorPlate>{error?.error}</ErrorPlate>
            )}
            {pagination &&
                pagination.page < pagination.total_pages &&
                !(commentsFetching || authorFetching) && (
                    <Center className={styles.buttonContainer}>
                        <DownloadButton onClick={downloadClickHandler}>
                            {failed ? "Попробовать ещё раз" : "Загрузить еще"}
                        </DownloadButton>
                    </Center>
                )}
        </Column>
    );
};
