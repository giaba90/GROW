import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from 'src/graphql/queries';
import { Badge } from '../ui/badge';


export default function BlogPostCard({ post }: { post: Post }) {
    return (
        <Card>
            <CardHeader>
                <img
                    src={post.featuredImage?.node.sourceUrl || "/placeholder.svg?height=200&width=300"}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
            </CardHeader>
            <CardContent>
                <CardTitle className="mb-2">{post.title}</CardTitle>
                <div className='flex content-center gap-x-4'>
                    <p className="text-muted-foreground text-sm">
                        {new Date(post.date).toLocaleDateString()}
                    </p>
                    <Link to={`/archive/${post.categories.nodes[0]?.slug}`}>    <Badge>{post.categories.nodes[0]?.slug}</Badge> </Link>
                </div>
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
    );
}
