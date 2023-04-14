import React, {FC, PropsWithChildren} from "react";

import styles from "./style.module.css";

type Props = {
    onClick: () => void;
};

export const DownloadButton: FC<PropsWithChildren<Props>> = ({
    onClick,
    children,
}) => {
    return (
        <button className={styles.button} type="button" onClick={onClick}>
            {children}
        </button>
    );
};
