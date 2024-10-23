import { useQuery } from '@apollo/client';
import { GET_POSTS, Post } from '@/graphql/queries';
import BlogPostList from '@/components/blog/BlogPostList';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Homepage() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const blogPosts: Post[] = data?.posts?.nodes || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-4">
        <BlogPostList posts={blogPosts} />
      </main>
      <Footer />
    </div>
  );
}
