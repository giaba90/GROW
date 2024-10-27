import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Share2, MessageCircle, Heart } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import PostBreadcrumb from '@/components/blog/PostBreadcrumb';
import { GET_POST } from '@/graphql/queries'


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
        <PostBreadcrumb title={post.title} />
        <h2 className='text-base md:text-2xl my-4'> {post.title} </h2>
        <div className="flex flex-wrap gap-2 justify-between">
          <div className="flex items-center space-x-4 text-muted-foreground mb-4">
            <span>Posted on {post.categories.nodes.map((cat: { name: string }) => (<strong>{cat.name}</strong>))} , {new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })} by <b>{post.author.node.name}</b></span>
          </div>

          <div className="flex space-x-4">
            <div className="hover:text-blue-500">
              <MessageCircle className="h-4 w-4 mr-2" />
            </div>
            <div className="hover:text-red-500">
              <Heart className="h-4 w-4 mr-2" />
            </div>
            <div className="hover:text-green-500">
              <Share2 className="h-4 w-4 mr-2" />
            </div>
          </div>
        </div>
        <img src={post.featuredImage?.node.sourceUrl || "/placeholder.svg?height=400&width=800"} alt={post.title} className="w-full h-64 object-cover" />


        <div className="prose max-w-none mt-4 mb-4" dangerouslySetInnerHTML={{ __html: post.content }} />

        <span className="block mt-4 mb-4">
          Tags:&nbsp;
          {post.tags.nodes.map((tag: { name: string }) => (
            <Badge key={tag.name} variant="outline">#{tag.name}</Badge>
          ))}
        </span>
      </main>
      <Footer></Footer>
    </div>
  )
}
