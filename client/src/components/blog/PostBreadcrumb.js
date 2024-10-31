import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
const PostBreadcrumb = ({ title }) => {
    return (_jsx(Badge, { variant: 'secondary', className: 'mt-2 mb-2 w-fit', children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { asChild: true, children: _jsx(Link, { to: "/", children: "Home" }) }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: title })] }) }));
};
export default PostBreadcrumb;
