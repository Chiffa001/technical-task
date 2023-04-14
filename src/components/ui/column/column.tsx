import React, {FC, PropsWithChildren} from "react";

import styles from "./style.module.css";

type Props = {
    className?: string;
};

export const Column: FC<PropsWithChildren<Props>> = ({children, className}) => {
    return (
        <div className={[styles.column, className].filter(Boolean).join(" ")}>
            {children}
        </div>
    );
};
