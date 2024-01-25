export interface IComments {
    id: string;
    author: string;
    comment: string,
}

export type ApiComment = Omit<IComments, 'id'>;

export interface CommentMutation {
    author: string;
    comment: string;
    image: File | null;
}

export interface IApiCommentsList {
    [key: string]: IComment;
}