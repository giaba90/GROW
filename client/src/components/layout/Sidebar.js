import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GET_CATEGORIES } from '@/graphql/queries';
import { useQuery } from '@apollo/client';
export default function Sidebar() {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribed:', email);
        setEmail('');
    };
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    if (loading)
        return _jsx("p", { children: "Loading..." });
    if (error)
        return _jsxs("p", { children: ["Error: ", error.message] });
    return (_jsxs("aside", { className: "w-full md:w-1/3 lg:w-1/4 space-y-6", children: [_jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Cerca" }) }), _jsx(CardContent, { children: _jsxs("form", { className: "flex items-center space-x-2", children: [_jsx(Input, { type: "search", placeholder: "Cerca..." }), _jsx(Button, { type: "submit", children: _jsx(Search, { className: "h-4 w-4" }) })] }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Categorie" }) }), _jsx(CardContent, { children: _jsx("ul", { className: "space-y-2", children: data.categories.nodes.map((category) => (category.name !== "Senza categoria" && (_jsx("li", { children: _jsxs(Link, { to: `/archive/${category.slug}`, className: "text-gray-700 hover:underline", children: [category.name, " ", _jsx(Badge, { children: category.count })] }) }, category.id)))) }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Newsletter" }) }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-2", children: [_jsx(Input, { type: "email", placeholder: "La tua email", value: email, onChange: (e) => setEmail(e.target.value), required: true }), _jsxs(Button, { type: "submit", className: "w-full", children: [_jsx(Mail, { className: "h-4 w-4 mr-2" }), "Iscriviti"] })] }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Seguici" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "flex space-x-4", children: [_jsx("a", { href: "#", className: "text-gray-600 hover:text-blue-600", children: _jsx(Facebook, {}) }), _jsx("a", { href: "#", className: "text-gray-600 hover:text-pink-600", children: _jsx(Instagram, { className: "h-6 w-6" }) }), _jsx("a", { href: "#", className: "text-gray-600 hover:text-blue-800", children: _jsx(Linkedin, { className: "h-6 w-6" }) })] }) })] })] }));
}
