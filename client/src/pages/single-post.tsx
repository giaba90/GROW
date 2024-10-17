import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { Bookmark, Share2, ThumbsUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

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
      <Header categories={categories} />

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

      <Footer></Footer>
    </div>
  )
}