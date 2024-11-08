import { Post } from '@/types/post';
import { PostMeta } from './PostMeta';
import { PostTags } from './PostTags';
import SocialIcons from './SocialIcons';

type PostDetailsProps = {
    post: Post;
};

export default function PostDetails({ post }: PostDetailsProps) {
    const { postId, title, categories, date, author, featuredImage, content, tags } = post;

    return (
        <>
            <h2 className="text-2xl md:text-4xl my-4">{title}</h2>
            <div className="flex flex-wrap gap-2 justify-between">
                <PostMeta categories={categories} date={date} author={author} />
                <SocialIcons pageTitle={title} url={`https://wpgrow.netlify.app/post/${postId}`} />
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

