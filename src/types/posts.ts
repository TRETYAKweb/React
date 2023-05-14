export interface IPost {
    hash: string;
    body: string;
    author: {
        hash: string;
        name: string;
        avatar: string;
    };
    comments: {
        hash: string;
        body: string;
        author: {
            hash: string;
            name: string;
        };
        created: string;
    }[];

    likes: {
        hash: string;
        name: string;
    }[];

    created: string;
}

export interface IPostRequest {
    body: string;
}

export interface IPostId {
    hash: string;
}
