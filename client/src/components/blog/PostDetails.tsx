import { Post } from '@/types/post';
import { Badge } from '@/components/ui/badge';
import SocialIcons from './SocialIcons';
import { formatDate } from '@/lib/utils';

type PostDetailsProps = {
    post: Post;
};

type PostMetaProps = {
    categories: { nodes: { name: string }[] };
    date: string;
    author: { node: { name: string } };
};

type TagsProps = {
    tags: { nodes: { name: string }[] };
};

const PostMeta = ({ categories, date, author }: PostMetaProps) => (
    <div className="flex items-center space-x-4 text-muted-foreground mb-4">
        <span className='text-sm md:text-base'>
            Posted on {
                categories.nodes.map((cat) => (
                    <strong key={cat.name}>{cat.name}</strong>
                ))
            }, {formatDate(date)} by <b>{author.node.name}</b>
        </span>
    </div>
);


const PostTags = ({ tags }: TagsProps) => (
    <div className="mt-4 mb-4">
        Tags:&nbsp;
        {
            tags.nodes.map((tag) => (
                <Badge key={tag.name} variant="outline">#{tag.name}</Badge>
            ))
        }
    </div>
);

export default function PostDetails({ post }: PostDetailsProps) {
    const { title, categories, date, author, featuredImage, content, tags } = post;

    return (
        <>
            <h2 className="text-2xl md:text-4xl my-4">{title}</h2>
            <div className="flex flex-wrap gap-2 justify-between">
                <PostMeta categories={categories} date={date} author={author} />
                {SocialIcons()}
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

