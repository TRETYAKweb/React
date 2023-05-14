export interface IComment {
    hash: string;
    body: string;
    author: {
        hash: string;
        name: string;
    };
    created: string;
}

export interface ICommentRequest {
    body: string;
}

export interface ICommentProps {
    authorName: string;
    created: string;
    body: string;
}

export interface ICommentFormProps {
    addComment: (comment: string) => void;
}
