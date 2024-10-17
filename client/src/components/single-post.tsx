import { useParams, Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { Menu, Heart, Bookmark, Share2, ThumbsUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id, idType: DATABASE_ID) {
      postId
      title
      date
      content
      categories {
        nodes {
          name
        }
      }
      tags {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
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

export default function SinglePost() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const post = data.post;
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
        <Card>
          <CardHeader className="p-0">
            <img src={post.featuredImage?.node.sourceUrl || "/placeholder.svg?height=400&width=800"} alt={post.title} className="w-full h-64 object-cover rounded-t-lg" />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-3xl mb-4">{post.title}</CardTitle>
            <div className="flex items-center space-x-4 text-muted-foreground mb-4">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              {post.categories.nodes.map(category => (
                <Badge key={category.name} variant="secondary">{category.name}</Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.nodes.map(tag => (
                <Badge key={tag.name} variant="outline">{tag.name}</Badge>
              ))}
            </div>
            <div className="flex space-x-4 mb-6">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Condividi
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Salva
              </Button>
              <Button variant="outline" size="sm">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Mi piace
              </Button>
            </div>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </CardContent>
        </Card>
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