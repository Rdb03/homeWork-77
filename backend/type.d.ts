export interface IComments {
    id: string,
    author: string,
    comment: string,
}

export interface CommentsWithOutId {
    author: string,
    comment: string,
    image: File | null,
}

export interface IApiCommentsList {
    [key: string]: Comments;
}