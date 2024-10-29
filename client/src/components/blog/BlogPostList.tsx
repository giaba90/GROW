import BlogPostCard from '@/components/blog/BlogPostCard';
import { Post } from '@/types/post';

// Correzione della tipizzazione: posts è direttamente un array di Post
const BlogPostList: React.FC<{ posts: Post[] }> = ({ posts }) => {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <BlogPostCard key={post.postId} post={post} />
                ))
            ) : (
                <p>No posts available.</p> // Fallback message if there are no posts
            )}
        </div>
    );
}

export default BlogPostList;
