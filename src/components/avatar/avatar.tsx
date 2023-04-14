import React, {FC} from "react";

import styles from "./style.module.css";

type Props = {
    src: string;
};

export const Avatar: FC<Props> = ({src}) => (
    <img className={styles.img} src={src} alt="avatar" />
);
