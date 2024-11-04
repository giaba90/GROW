import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import PostDetails from '@/components/blog/PostDetails';
import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';
import { GET_POST } from '@/graphql/queries';
const Loading = () => _jsx("p", { children: "Loading..." });
const ErrorMessage = ({ message }) => _jsxs("p", { children: ["Error: ", message] });
const SinglePost = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_POST, {
        variables: { id },
    });
    if (loading)
        return _jsx(Loading, {});
    if (error)
        return _jsx(ErrorMessage, { message: error.message });
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(Header, {}), _jsxs("main", { className: "container mx-auto p-4", children: [_jsxs(Button, { size: "sm", variant: "outline", onClick: () => window.history.back(), children: [_jsx(MoveLeft, {}), "  Torna indietro"] }), _jsx(PostDetails, { post: data.post }), _jsx("h3", { className: "text-xl md:text-2xl my-4", children: "Potrebbe interessarti anche" })] }), _jsx(Footer, {})] }));
};
export default SinglePost;
