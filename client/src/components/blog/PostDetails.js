import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Share2, MessageCircle, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
export default function PostDetails({ post }) {
    const { title, categories, date, author, featuredImage, content, tags } = post;
    const formattedDate = new Date(date).toLocaleDateString('it-IT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return (_jsxs(_Fragment, { children: [_jsxs("h2", { className: "text-2xl md:text-4xl my-4", children: [" ", title, " "] }), _jsxs("div", { className: "flex flex-wrap gap-2 justify-between", children: [_jsx("div", { className: "flex items-center space-x-4 text-muted-foreground mb-4", children: _jsxs("span", { className: 'text-sm md:text-base', children: ["Posted on ", categories.nodes.map((cat) => (_jsxs("strong", { children: [" ", cat.name, " "] }, cat.name))), ", ", formattedDate, " by ", _jsxs("b", { children: [" ", author.node.name, " "] })] }) }), _jsxs("div", { className: "hidden md:flex space-x-4", children: [_jsx(MessageCircle, { className: "h-4 w-4 mr-2 hover:text-blue-500" }), _jsx(Heart, { className: "h-4 w-4 mr-2 hover:text-red-500" }), _jsx(Share2, { className: "h-4 w-4 mr-2 hover:text-green-500" })] })] }), _jsx("img", { src: featuredImage?.node.sourceUrl || '/placeholder.svg?height=400&width=800', alt: title, className: "w-full h-64 object-cover" }), _jsx("div", { className: "prose max-w-none mt-4 mb-4", dangerouslySetInnerHTML: { __html: content } }), _jsxs("div", { className: "mt-4 mb-4", children: ["Tags:\u00A0", tags.nodes.map((tag) => (_jsxs(Badge, { variant: "outline", children: ["#", tag.name, " "] }, tag.name)))] })] }));
}
