import React, {FC} from "react";

type Props = {
    children: string;
};

export const NewLine: FC<Props> = ({children}) => (
    <>
        {children.split("\n").map((str) => (
            <p key={str}>{str}</p>
        ))}
    </>
);
