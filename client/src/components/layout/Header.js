import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { X, AlignJustify } from 'lucide-react';
import { Menubar, MenubarMenu, MenubarContent, MenubarItem, MenubarTrigger } from "@/components/ui/menubar";
import Navbar from '@/components/ui/Navbar';
import { GET_MENU } from '@/graphql/queries';
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuItems, setMenuItems] = useState([]);
    const { loading, error, data } = useQuery(GET_MENU);
    useEffect(() => {
        if (data?.menu?.menuItems?.edges) {
            setMenuItems(data.menu.menuItems.edges.map((edge) => edge.node));
        }
    }, [data]);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    if (loading)
        return _jsx("p", { children: "Loading..." });
    if (error)
        return _jsxs("p", { children: ["Error: ", error.message] });
    return (_jsx("header", { className: "bg-primary text-primary-foreground p-4", children: _jsxs("div", { className: "container mx-auto flex justify-between items-center", children: [_jsxs("h1", { className: "text-2xl font-bold", children: [_jsx(Link, { to: "/", children: "GROW" }), "\uD83D\uDE80"] }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("nav", { className: "hidden md:block", children: _jsx(Navbar, { items: menuItems }) }), _jsx("nav", { className: "block md:hidden", children: _jsx(Menubar, { children: _jsxs(MenubarMenu, { children: [_jsx(MenubarTrigger, { onClick: toggleMenu, children: !isMenuOpen ? _jsx(AlignJustify, {}) : _jsx(X, {}) }), isMenuOpen && (_jsx(MenubarContent, { children: menuItems.map((item) => (_jsx(MenubarItem, { asChild: true, children: _jsx(Link, { to: item.uri, children: item.label }) }, item.id))) }))] }) }) })] })] }) }));
}
