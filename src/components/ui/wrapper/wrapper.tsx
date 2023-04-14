import React, {FC, PropsWithChildren} from "react";

import styles from "./style.module.css";

export const Wrapper: FC<PropsWithChildren> = ({children}) => (
    <div className={styles.wrapper}>{children}</div>
);
