import React, {FC, PropsWithChildren} from "react";

import styles from "./style.module.css";

type Props = {
    className?: string;
};

export const Row: FC<PropsWithChildren<Props>> = ({children, className}) => {
    return (
        <div className={[styles.row, className].filter(Boolean).join(" ")}>
            {children}
        </div>
    );
};
