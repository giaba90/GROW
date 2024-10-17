import BlogPostCard from '@/components/blog/BlogPostCard'

type BlogPostListProps = {
    posts: {
        postId: string;
        title: string;
        date: string;
        excerpt: string;
        featuredImage?: {
            node: {
                sourceUrl: string;
            };
        };
    }[];
}

export default function BlogPostList({ posts }: BlogPostListProps) {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
                <BlogPostCard key={post.postId} post={post} />
            ))}
        </div>
    )
}