import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArchivedPostCard from '@/components/blog/ArchivedPostCard';
import { GET_ARCHIVED_POSTS } from '@/graphql/queries';
export default function Archive() {
    const { slug } = useParams();
    const { loading, error, data } = useQuery(GET_ARCHIVED_POSTS, {
        variables: { slug },
    });
    if (loading)
        return _jsx("p", { className: "text-center", children: "Caricamento in corso..." });
    if (error)
        return _jsxs("p", { className: "text-center text-red-500", children: ["Errore: ", error.message] });
    const archivedPosts = data?.posts?.nodes || [];
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(Header, {}), _jsxs("main", { className: "container mx-auto p-4", children: [_jsxs("h2", { className: "text-3xl font-bold mb-8 text-center", children: ["Archivio: ", slug] }), archivedPosts.length > 0 ? (_jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: archivedPosts.map((post) => (_jsx(ArchivedPostCard, { post: post }, post.postId))) })) : (_jsx("p", { className: "text-center", children: "Nessun articolo trovato." }))] }), _jsx(Footer, {})] }));
}
