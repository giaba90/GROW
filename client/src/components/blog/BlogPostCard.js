import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '../ui/badge';
export default function BlogPostCard({ post }) {
    return (_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx("img", { src: post.featuredImage?.node.sourceUrl || "/placeholder.svg?height=200&width=300", alt: post.title, className: "w-full h-48 object-cover rounded-t-lg" }) }), _jsxs(CardContent, { children: [_jsx(CardTitle, { className: "mb-2", children: post.title }), _jsxs("div", { className: 'flex items-center gap-x-4 mb-2', children: [_jsx("p", { className: "text-muted-foreground text-sm", children: new Date(post.date).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }).replace(/(\d+) (.+) (\d+)/, "$1 $2, $3") }), _jsxs(Link, { to: `/archive/${post.categories.nodes[0]?.slug}`, children: ["    ", _jsx(Badge, { children: post.categories.nodes[0]?.slug }), " "] })] }), _jsx("div", { className: "text-card-foreground", dangerouslySetInnerHTML: { __html: post.excerpt } })] }), _jsx(CardFooter, { children: _jsx(Button, { variant: "link", asChild: true, className: "p-0", children: _jsxs(Link, { to: `/post/${post.postId}`, className: "flex items-center", children: ["Leggi di pi\u00F9 ", _jsx(ChevronRight, { className: "h-4 w-4 ml-1" })] }) }) })] }));
}
