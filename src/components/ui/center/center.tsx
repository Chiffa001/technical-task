import React, {FC, PropsWithChildren} from "react";

import styles from "./style.module.css";

type Props = {
    className?: string;
};

export const Center: FC<PropsWithChildren<Props>> = ({children, className}) => (
    <div className={[styles.center, className].filter(Boolean).join(" ")}>
        {children}
    </div>
);
