import { jsx as _jsx } from "react/jsx-runtime";
import BlogPostCard from '@/components/blog/BlogPostCard';
// Correzione della tipizzazione: posts è direttamente un array di Post
const BlogPostList = ({ posts }) => {
    return (_jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3", children: posts.length > 0 ? (posts.map((post) => (_jsx(BlogPostCard, { post: post }, post.postId)))) : (_jsx("p", { children: "No posts available." }) // Fallback message if there are no posts
        ) }));
};
export default BlogPostList;
