export type Post = {
    postId: string;
    title: string;
    categories: { nodes: { name: string }[] };
    date: string;
    author: { node: { name: string } };
    featuredImage: { node: { sourceUrl: string } };
    content: string;
    tags: { nodes: { name: string }[] };
};
