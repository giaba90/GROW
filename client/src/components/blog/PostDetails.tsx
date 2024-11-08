import { Post } from '@/types/post';
import { PostMeta } from './PostMeta';
import { PostTags } from './PostTags';
import SocialIcons from './SocialIcons';
import { Heart, MessageCircle } from 'lucide-react';
import LikeButton from './LikeButton';

type PostDetailsProps = {
    post: Post;
};

export default function PostDetails({ post }: PostDetailsProps) {
    const { postId, title, categories, date, author, featuredImage, content, tags } = post;

    return (
        <>
            <SocialIcons pageTitle={title} url={`https://wpgrow.netlify.app/post/${postId}`} />
            <h2 className="text-2xl md:text-4xl my-4">{title}</h2>
            <div className="flex flex-wrap gap-2 justify-between">
                <PostMeta categories={categories} date={date} author={author} />
                <div className="flex flex-row items-baseline">
                    <MessageCircle className="h-4 w-4 mr-2 hover:text-blue-500" />
                    <LikeButton initialLikes={0} />
                </div>
            </div>
            <img
                src={featuredImage?.node.sourceUrl || '/placeholder.svg?height=400&width=800'}
                alt={title}
                className="w-full h-64 object-cover"
            />
            <div className="prose max-w-none mt-4 mb-4" dangerouslySetInnerHTML={{ __html: content }} />
            <PostTags tags={tags} />
        </>
    );
}

