import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

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
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Grow</h1>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Cerca..." className="w-32 md:w-auto" />
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <nav className="hidden md:block mt-4">
          <ul className="flex space-x-4">
            {categories.map((category) => (
              <li key={category.termTaxonomyId}>
                <Button variant="link" asChild>
                  <Link to={`/category/${category.slug}`}>
                    {category.name}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

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

      <footer className="bg-secondary text-secondary-foreground p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Grow. Tutti i diritti riservati.</p>
          <Button variant="link" asChild>
            <Link to="/privacy-policy">
              Privacy Policy
            </Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}