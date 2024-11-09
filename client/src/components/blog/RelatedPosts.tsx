import { Post } from "@/types/post";
import ArchivedPostCard from "./ArchivedPostCard";

const RelatedPosts: React.FC<{ posts: Post[], postId: string }> = ({ posts, postId }) => (
    <>
        <h3 className="text-xl md:text-2xl my-4">Potrebbe interessarti anche</h3>
        {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.filter(post => post.postId !== postId).map((post) => (
                    <ArchivedPostCard key={post.postId} post={post} />
                ))}
            </div>
        ) : (
            <p className="text-center">Non ci sono articoli correlati.</p>
        )}
    </>
);

export default RelatedPosts;