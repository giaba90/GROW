import BlogPostCard from '@/components/blog/BlogPostCard';
import { Post } from '@/graphql/queries';

type BlogPostListProps = {
    posts: Post[];
    categories: any; // Sostituisci 'any' con il tipo corretto se hai una definizione specifica per le categorie
}

export default function BlogPostList({ posts, categories }: BlogPostListProps) {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
                <BlogPostCard key={post.postId} post={post} categories={categories} />
            ))}
        </div>
    );
}
