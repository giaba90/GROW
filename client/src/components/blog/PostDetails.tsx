import { Post } from '@/types/post';
import PostBreadcrumb from '@/components/blog/PostBreadcrumb';
import { Share2, MessageCircle, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type PostDetailsProps = {
    post: Post;
};

export default function PostDetails({ post }: PostDetailsProps) {
    const { title, categories, date, author, featuredImage, content, tags } = post;

    const formattedDate = new Date(date).toLocaleDateString('it-IT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <>
            <PostBreadcrumb title={title} />
            <h2 className="text-base md:text-2xl my-4" > {title} </h2>
            < div className="flex flex-wrap gap-2 justify-between" >
                <div className="flex items-center space-x-4 text-muted-foreground mb-4" >
                    <span>
                        Posted on {
                            categories.nodes.map((cat) => (
                                <strong key={cat.name} > {cat.name} </strong>
                            ))
                        }, {formattedDate} by < b > {author.node.name} </b>
                    </span>
                </div>
                < div className="flex space-x-4" >
                    <MessageCircle className="h-4 w-4 mr-2 hover:text-blue-500" />
                    <Heart className="h-4 w-4 mr-2 hover:text-red-500" />
                    <Share2 className="h-4 w-4 mr-2 hover:text-green-500" />
                </div>
            </div>
            < img
                src={featuredImage?.node.sourceUrl || '/placeholder.svg?height=400&width=800'}
                alt={title}
                className="w-full h-64 object-cover"
            />
            <div className="prose max-w-none mt-4 mb-4" dangerouslySetInnerHTML={{ __html: content }
            } />
            < div className="mt-4 mb-4" >
                Tags:& nbsp;
                {
                    tags.nodes.map((tag) => (
                        <Badge key={tag.name} variant="outline" >#{tag.name} </Badge>
                    ))
                }
            </div>
        </>
    );
}