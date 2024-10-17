import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const GET_ARCHIVED_POSTS = gql`
  query GetArchivedPosts {
    posts(first: 100) {
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
    categories {
      nodes {
        termTaxonomyId
        name
        slug
      }
    }
  }
`;

export default function Archive() {
  const { loading, error, data } = useQuery(GET_ARCHIVED_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const archivedPosts = data.posts.nodes;
  const categories = data.categories.nodes;

  return (
    <div className="min-h-screen bg-background">
      <Header categories={categories} />

      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Archivio Articoli</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {archivedPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <Link to={`/post/${post.id}`}>
                <CardHeader className="p-0">
                  <img src={post.featuredImage?.node.sourceUrl || "/placeholder.svg?height=150&width=200"} alt={post.title} className="w-full h-40 object-cover" />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle>{post.title}</CardTitle>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}