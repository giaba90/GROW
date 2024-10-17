import { useQuery, gql } from '@apollo/client'
import Header from '@/components/layout/Header'
import BlogPostList from '@/components/blog/BlogListPost'
import Footer from '@/components/layout/Footer'

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        postId
        title
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
    categories {
      nodes {
        termTaxonomyId
        name
        slug
      }
    }
  }
`;

export default function Homepage() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const blogPosts = data.posts.nodes;
  const categories = data.categories.nodes;

  return (
    <div className="min-h-screen bg-background">
      <Header categories={categories} />
      <main className="container mx-auto p-4">
        <BlogPostList posts={blogPosts} />
      </main>
      <Footer />
    </div>
  )
}