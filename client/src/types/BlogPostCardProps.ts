export type BlogPostCardProps = {
    post: {
        postId: string;
        title: string;
        date: string;
        excerpt: string;
        featuredImage?: {
            node: {
                sourceUrl: string;
            };
        };
    };
}