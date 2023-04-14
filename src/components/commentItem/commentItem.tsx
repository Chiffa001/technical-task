import React, {FC, useMemo} from "react";
import {Avatar} from "../avatar";

import {Comment} from "src/types/comment";
import {useAppSelector} from "src/hooks/useAppSelector";
import {selectAuthor, selectInnerComments} from "src/store/selectors";
import {Author} from "src/types/author";

import styles from "./style.module.css";
import {Row} from "../ui/row";
import {Column} from "../ui/column";
import {
    getDateTime,
    getTimeDifferent,
    getTimeDifferentMessage,
} from "src/lib/date";
import {NewLine} from "../ui/newLine";
import {Likes} from "../likes";

type Props = {
    comment: Comment;
};

export const CommentItem: FC<Props> = ({
    comment: {author, id, text, created, likes},
}) => {
    const currentAuthor = useAppSelector(selectAuthor(author)) as Author;
    const innerItems = useAppSelector(selectInnerComments(id));

    const innerEls = innerItems.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
    ));

    const dateTime = useMemo(() => {
        const timeDifferent = getTimeDifferent(new Date(created));
        return timeDifferent < 12
            ? getTimeDifferentMessage(timeDifferent)
            : getDateTime(created);
    }, [created]);

    return (
        <Column className={styles.commentItem}>
            <Row>
                <Avatar src={currentAuthor.avatar} />
                <Column>
                    <Row className={styles.info}>
                        <Column className={styles.senderInfo}>
                            <h3 className={styles.name}>
                                {currentAuthor.name}
                            </h3>
                            <span className={styles.time}>{dateTime}</span>
                        </Column>
                        <Likes>{likes}</Likes>
                    </Row>
                    <div className={styles.message}>
                        <NewLine>{text}</NewLine>
                    </div>
                </Column>
            </Row>
            {innerEls.length > 0 && (
                <div className={styles.inner}> {innerEls} </div>
            )}
        </Column>
    );
};
