import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import PostDetails from '@/components/blog/PostDetails';
import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';
import { Post } from '@/types/post';
import ArchivedPostCard from '@/components/blog/ArchivedPostCard';
import { GET_POST, GET_RELATED_POSTS } from '@/graphql/queries';

const Loading = () => <p>Loading...</p>;
const ErrorMessage = ({ message }: { message: string }) => <p className="text-red-500">Error: {message}</p>;

const RelatedPosts: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <>
    <h3 className="text-xl md:text-2xl my-4">Potrebbe interessarti anche</h3>
    {posts.length > 0 ? (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <ArchivedPostCard key={post.postId} post={post} />
        ))}
      </div>
    ) : (
      <p className="text-center">Non ci sono articoli correlati.</p>
    )}
  </>
);

const SinglePost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      id,
      idType: 'DATABASE_ID',
    },
    skip: !id,
  });

  const categoryId = data?.post?.categories.nodes[0]?.categoryId || 0;

  const { data: relatedPostsData } = useQuery(GET_RELATED_POSTS, {
    variables: {
      categoryId,
    },
    skip: !categoryId,
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!data) return null;

  const post = data.post;
  const archivedPosts: Post[] = relatedPostsData?.posts?.nodes || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-4">
        <Button size="sm" variant="outline" onClick={() => window.history.back()}>
          <MoveLeft /> Torna indietro
        </Button>
        <PostDetails post={post} />
        <RelatedPosts posts={archivedPosts} />
      </main>
      <Footer />
    </div>
  );
};

export default SinglePost;
