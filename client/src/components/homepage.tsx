import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { Menu, Search, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Grow</h1>
          <div className="flex items-center space-x-4">
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.postId}>
              <CardHeader>
                <img src={post.featuredImage?.node.sourceUrl || "/placeholder.svg?height=200&width=300"} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{post.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
                <div className="text-card-foreground" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="p-0">
                  <Link to={`/post/${post.postId}`} className="flex items-center">
                    Leggi di più <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </CardFooter>
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