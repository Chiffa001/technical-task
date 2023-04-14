import React from "react";
import {CommentList} from "src/components/commentList";
import {Header} from "src/components/header";
import {Wrapper} from "src/components/ui/wrapper";

export const MainPage = () => (
    <Wrapper>
        <Header />
        <CommentList />
    </Wrapper>
);
