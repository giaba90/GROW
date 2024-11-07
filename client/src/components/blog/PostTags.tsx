import { Badge } from "../ui/badge";

type TagsProps = {
    tags: { nodes: { name: string }[] };
};

export const PostTags = ({ tags }: TagsProps) => (
    <div className="mt-4 mb-4">
        Tags:&nbsp;
        {
            tags.nodes.map((tag) => (
                <Badge key={tag.name} variant="outline">#{tag.name}</Badge>
            ))
        }
    </div>
);