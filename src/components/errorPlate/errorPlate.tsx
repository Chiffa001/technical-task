import React, {FC, PropsWithChildren} from "react";

import styles from "./styles.module.css";
import {Center} from "../ui/center";

export const ErrorPlate: FC<PropsWithChildren> = ({children}) => (
    <div className={styles.error}>
        <Center>{children}</Center>
    </div>
);
