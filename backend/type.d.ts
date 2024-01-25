export interface IComments {
    id: string,
    author: string,
    comment: string,
    image: string | null;
}

export interface CommentsWithOutId {
    author: string,
    comment: string,
    image: string | null,
}

export interface IApiCommentsList {
    [key: string]: Comments;
}