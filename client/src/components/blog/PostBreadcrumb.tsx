import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface PostBreadcrumbProps {
    title: string;
}

const PostBreadcrumb: React.FC<PostBreadcrumbProps> = ({ title }) => {
    return (
        <Badge variant='secondary' className='ml-2 mt-2 mb-2 w-fit'>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>{title}</BreadcrumbItem>
            </BreadcrumbList>
        </Badge>
    );
};

export default PostBreadcrumb;