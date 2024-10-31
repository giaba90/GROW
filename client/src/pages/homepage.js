import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useQuery } from '@apollo/client';
import { GET_POSTS_HP } from '@/graphql/queries';
import BlogPostList from '@/components/blog/BlogPostList';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
export default function Homepage() {
    const { loading, error, data } = useQuery(GET_POSTS_HP);
    if (loading)
        return _jsx("p", { children: "Loading..." });
    if (error)
        return _jsxs("p", { children: ["Error: ", error.message] });
    const blogPosts = data?.posts?.nodes || [];
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(Header, {}), _jsx("div", { className: "container mx-auto p-4", children: _jsxs("div", { className: "flex flex-col md:flex-row gap-8", children: [_jsx("main", { className: "w-full md:w-2/3 lg:w-3/4", children: _jsx(BlogPostList, { posts: blogPosts }) }), _jsx(Sidebar, {})] }) }), _jsx(Footer, {})] }));
}
