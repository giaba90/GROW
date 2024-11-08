import { formatDate } from '@/lib/utils';

type PostMetaProps = {
    categories: { nodes: { name: string }[] };
    date: string;
    author: { node: { name: string } };
};


export const PostMeta = ({ categories, date, author }: PostMetaProps) => (
    <div className="flex items-center space-x-4 text-muted-foreground mb-4">
        <span className='text-sm md:text-base'>
            Posted on {categories.nodes.map((cat) => (
                <strong key={cat.name}>{cat.name}</strong>
            ))}, {formatDate(date)} by <b>{author.node.name}</b>
        </span>
    </div>
);
