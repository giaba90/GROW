import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArchivedPostCard from '@/components/blog/ArchivedPostCard';
import { Post } from '@/types/post';
import { GET_ARCHIVED_POSTS } from '@/graphql/queries';



export default function Archive() {
  const { slug } = useParams<{ slug: string }>();
  const { loading, error, data } = useQuery(GET_ARCHIVED_POSTS, {
    variables: { slug },
  });

  if (loading) return <p className="text-center">Caricamento in corso...</p>;
  if (error) return <p className="text-center text-red-500">Errore: {error.message}</p>;

  const archivedPosts: Post[] = data?.posts?.nodes || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Archivio: {slug}</h2>
        {archivedPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {archivedPosts.map((post) => (
              <ArchivedPostCard key={post.postId} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center">Nessun articolo trovato.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
