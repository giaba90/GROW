import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
export default function Footer() {
    return (_jsx("footer", { className: "bg-secondary text-secondary-foreground p-4 mt-8", children: _jsxs("div", { className: "container mx-auto text-center", children: [_jsx("p", { children: "\u00A9 2024 Grow. Tutti i diritti riservati." }), _jsx(Button, { variant: "link", asChild: true, children: _jsx(Link, { to: "/privacy-policy", children: "Privacy Policy" }) })] }) }));
}
