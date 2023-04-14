import React from "react";
import {Row} from "../ui/row";
import {useAppSelector} from "src/hooks/useAppSelector";
import {selectCommentsInfo} from "src/store/selectors";
import {Likes} from "../likes";

import styles from "./style.module.css";

export const Header = () => {
    const {comments, likes} = useAppSelector(selectCommentsInfo());
    return (
        <Row className={styles.header}>
            <span>{comments} комментариев</span>
            <Likes disabled={true}>{likes}</Likes>
        </Row>
    );
};
