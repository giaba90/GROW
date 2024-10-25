import { Card, CardHeader, CardContent, CardTitle } from '../ui/card';
import { Link } from 'react-router-dom';
import { Post } from '@/types/post';

interface ArchivedPostCardProps {
    post: Post;
}

const ArchivedPostCard: React.FC<ArchivedPostCardProps> = ({ post }) => (
    <Card key={post.postId} className="overflow-hidden">
        <Link to={`/post/${post.postId}`}>
            <CardHeader className="p-0">
                <img
                    src={post.featuredImage?.node?.sourceUrl || "/placeholder.svg?height=150&width=200"}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-40 object-cover"
                />
            </CardHeader>
            <CardContent className="p-4">
                <CardTitle>{post.title}</CardTitle>
            </CardContent>
        </Link>
    </Card>
);


export default ArchivedPostCard;
