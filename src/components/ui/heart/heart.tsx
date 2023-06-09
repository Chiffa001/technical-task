import React, {FC} from "react";

import styles from "./style.module.css";

type Props = {
    status?: "active" | "disabled";
};

const getClassName = (status?: Props["status"]) => {
    switch (status) {
        case "active":
            return "activeHeart";
        case "disabled":
            return "disabledHeart";
        default:
            return "heart";
    }
};

export const Heart: FC<Props> = ({status}) => (
    <svg
        width="20"
        height="19"
        className={styles[getClassName(status)]}
        viewBox="0 0 20 19"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.88157 13.1717C3.06987 11.2604 1.62123 9.98555 1.15374 7.96945C0.806083 6.47017 0.909338 3.7293 2.95027 2.45277C7.45061 -0.362356 9.97229 3.95738 9.97229 3.95738H10.0277C10.0277 3.95738 12.5494 -0.362356 17.0497 2.45277C19.0907 3.7293 19.1939 6.47017 18.8463 7.96945C18.3788 9.98555 16.9301 11.2604 15.1184 13.1717C10 18 10.0028 18.0049 10 18C10 18 10 18 4.88157 13.1717Z"
        />
    </svg>
);
