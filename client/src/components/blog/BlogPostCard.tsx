import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type BlogPostCardProps = {
    post: {
        postId: string;
        title: string;
        date: string;
        excerpt: string;
        featuredImage?: {
            node: {
                sourceUrl: string;
            };
        };
    };
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
    return (
        <Card>
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
    )
}