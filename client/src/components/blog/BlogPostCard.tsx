import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from '@/types/post';
import { Badge } from '../ui/badge';

interface BlogPostCardProps {
    post: Post;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
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
                <div className='flex items-center gap-x-4 mb-2'>
                    <p className="text-muted-foreground text-sm">
                        {new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }).replace(/(\d+) (.+) (\d+)/, "$1 $2, $3")}
                    </p>
                    <Link to={`/archive/${post.categories.nodes[0]?.slug}`}>
                        <Badge>{post.categories.nodes[0]?.slug}</Badge>
                    </Link>
                </div>
                <div className="text-card-foreground" dangerouslySetInnerHTML={
                    { __html: truncateExcerpt() }
                } />
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

    function truncateExcerpt() {
        return post.excerpt.split(" ").slice(0, 25).join(" ");
    }
}
