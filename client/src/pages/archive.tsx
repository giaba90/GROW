import { useParams, Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Post } from '@/types/post'; // Importa il tipo Post

const GET_ARCHIVED_POSTS = gql`
  query GetArchivedPosts($slug: String) {
    posts(where: { categoryName: $slug }) {
      nodes {
        postId
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export default function Archive() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_ARCHIVED_POSTS, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Verifica se i post sono disponibili, altrimenti mostra un messaggio
  const archivedPosts: Post[] = data?.posts?.nodes || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Archivio Articoli</h2>
        {archivedPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {archivedPosts.map((post: Post) => (
              <Card key={post.postId} className="overflow-hidden">
                <Link to={`/post/${post.postId}`}>
                  <CardHeader className="p-0">
                    <img
                      src={post.featuredImage?.node?.sourceUrl || "/placeholder.svg?height=150&width=200"}
                      alt={post.title}
                      className="w-full h-40 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle>{post.title}</CardTitle>
                  </CardContent>
                </Link>
              </Card>
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
