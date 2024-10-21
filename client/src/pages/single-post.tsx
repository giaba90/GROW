import { useParams, Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { Bookmark, Share2, ThumbsUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"; // Import BreadcrumbSeparator
import PostBreadcrumb from '@/components/blog/PostBreadcrumb'; // Import the new component

const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id, idType: DATABASE_ID) {
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
          name
          slug
        }
      }
      tags {
        nodes {
          name
        }
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto md:p-4">
        { /* 
        <PostBreadcrumb title={post.title} /> 
    Use the new component later*/}
        <Card>
          <CardHeader className="p-0">
            <img src={post.featuredImage?.node.sourceUrl || "/placeholder.svg?height=400&width=800"} alt={post.title} className="w-full h-64 object-cover md:rounded-t-lg" />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-3xl mb-4">{post.title}</CardTitle>
            <div className="flex flex-wrap gap-2 mb-4 justify-between">
              {post.tags.nodes.map((tag: { name: string }) => (
                <Badge key={tag.name} variant="outline">#{tag.name}</Badge>
              ))}
              <div className="flex space-x-4">
                <Share2 className="h-4 w-4 mr-2" />
                <Bookmark className="h-4 w-4 mr-2" />
                <ThumbsUp className="h-4 w-4 mr-2" />
              </div>
            </div>


            <div className="prose max-w-none mb-4" dangerouslySetInnerHTML={{ __html: post.content }} />
            <div className="flex items-center space-x-4 text-muted-foreground mb-4">
              <span>Posted on {new Date(post.date).toLocaleDateString()} by <b>{post.author.node.name}</b></span>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer></Footer>
    </div>
  )
}
