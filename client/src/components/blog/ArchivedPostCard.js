import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardHeader, CardContent, CardTitle } from '../ui/card';
import { Link } from 'react-router-dom';
const ArchivedPostCard = ({ post }) => (_jsx(Card, { className: "overflow-hidden", children: _jsxs(Link, { to: `/post/${post.postId}`, children: [_jsx(CardHeader, { className: "p-0", children: _jsx("img", { src: post.featuredImage?.node?.sourceUrl || "/placeholder.svg?height=150&width=200", alt: post.title, loading: "lazy", className: "w-full h-40 object-cover" }) }), _jsx(CardContent, { className: "p-4", children: _jsx(CardTitle, { children: post.title }) })] }) }, post.postId));
export default ArchivedPostCard;
