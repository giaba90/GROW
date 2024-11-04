import { jsx as _jsx } from "react/jsx-runtime";
const Navbar = ({ items }) => {
    return (_jsx("nav", { className: "p-4", children: _jsx("div", { className: "container mx-auto flex justify-between items-center", children: _jsx("ul", { className: "flex space-x-4", children: items.map((item) => (_jsx(NavBarItem, { url: item.uri, label: item.label }, item.id))) }) }) }));
};
const NavBarItem = ({ url, label }) => {
    return (_jsx("li", { children: _jsx("a", { href: url, className: "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium", children: label }) }));
};
export default Navbar;
