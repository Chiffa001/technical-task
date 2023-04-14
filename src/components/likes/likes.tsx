import React, {FC} from "react";
import {Heart} from "../ui/heart";
import {Row} from "../ui/row";

import styles from "./style.module.css";

type Props = {
    children: number;
    disabled?: boolean;
};

export const Likes: FC<Props> = ({children, disabled}) => {
    const status = disabled ? "disabled" : children ? "active" : undefined;

    return (
        <span className={styles.likes}>
            <Row className={styles.likesContainer}>
                <span className={styles.icon}>
                    <Heart status={status} />
                </span>
                {children}
            </Row>
        </span>
    );
};
