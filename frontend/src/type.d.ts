export interface IComments {
    id: string;
    author: string;
    comment: string;
    image: string | null;
}

export interface CommentMutation {
    author: string;
    comment: string;
    image: File | null;
}

export interface IApiCommentsList {
    [key: string]: IComment;
}