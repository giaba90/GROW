export type Post = {
    [x: string]: any;
    postId: string;
    title: string;
    categories: { nodes: { name: string, slug: string; }[] };
    date: string;
    author: { node: { name: string } };
    featuredImage: { node: { sourceUrl: string } };
    content: string;
    excerpt: string;

    tags: { nodes: { name: string }[] };
};
