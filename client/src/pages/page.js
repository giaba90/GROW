import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import PageDetails from '@/components/blog/PageDetails';
import { Button } from '@/components/ui/button';
import { MoveLeft } from 'lucide-react';
import { GET_PAGE } from '@/graphql/queries';
const Loading = () => _jsx("p", { children: "Loading..." });
const ErrorMessage = ({ message }) => _jsxs("p", { children: ["Error: ", message] });
const Page = () => {
    const { slug } = useParams();
    const { loading, error, data } = useQuery(GET_PAGE, {
        variables: { slug },
    });
    if (loading)
        return _jsx(Loading, {});
    if (error)
        return _jsx(ErrorMessage, { message: error.message });
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(Header, {}), _jsxs("main", { className: "container mx-auto p-4", children: [_jsxs(Button, { size: "sm", variant: "outline", onClick: () => window.history.back(), children: [_jsx(MoveLeft, {}), "  Torna indietro"] }), _jsx(PageDetails, { page: data.pageBy })] }), _jsx(Footer, {})] }));
};
export default Page;
