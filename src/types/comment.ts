export type Comment = {
    id: number;
    text: string;
    created: Date;
    author: number;
    parent: number | null;
    likes: number;
};

export type Pagination = {
    page: number;
    size: number;
    total_pages: number;
};

export type CommentResponse = {
    pagination: Pagination;
    data: Comment[];
};

export type CommentError = {
    page: number;
    error: string;
};
