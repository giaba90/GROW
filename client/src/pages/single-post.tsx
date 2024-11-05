import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import PostDetails from '@/components/blog/PostDetails';
import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';
import { Post } from '@/types/post';
import ArchivedPostCard from '@/components/blog/ArchivedPostCard';

const GET_POST_AND_ARCHIVED_POSTS = gql`
  query GetPostAndArchivedPosts($id: ID!, $idType: PostIdType!, $slug: String!) {
    post(id: $id, idType: $idType) {
      id
      postId
      title
      date
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          slug
          name
        }
      }
      tags {
        nodes {
          name
        }
      }
    }
    posts(where: { categoryName: $slug }, first: 3) {
      nodes {
        id
        title
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

const Loading = () => <p>Loading...</p>;
const ErrorMessage = ({ message }: { message: string }) => <p>Error: {message}</p>;

const SinglePost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery(GET_POST_AND_ARCHIVED_POSTS, {
    variables: {
      id,
      idType: 'DATABASE_ID',
      slug: "",
    },
    skip: !id,
  });

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;

  if (!data) return null;

  const post = data.post;
  const slug = post.categories.nodes[0]?.slug || "";

  if (!slug) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto p-4">
          <Button size="sm" variant="outline" onClick={() => window.history.back()}>
            <MoveLeft /> Torna indietro
          </Button>
          <PostDetails post={post} />
          <p className="text-center">Nessun articolo correlato trovato.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const archivedPosts: Post[] = data.posts?.nodes || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-4">
        <Button size="sm" variant="outline" onClick={() => window.history.back()}>
          <MoveLeft /> Torna indietro
        </Button>
        <PostDetails post={post} />
        <h3 className="text-xl md:text-2xl my-4">Potrebbe interessarti anche</h3>
        {Array.isArray(archivedPosts) && archivedPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {archivedPosts.map((post) => (
              <ArchivedPostCard key={post.id || post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center">Non ci sono articoli correlati.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SinglePost;
