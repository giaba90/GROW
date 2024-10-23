// src/types/post.ts
export type Post = {
    postId: string;
    title: string;
    featuredImage: {
        node: {
            sourceUrl: string;
        };
    };
};
