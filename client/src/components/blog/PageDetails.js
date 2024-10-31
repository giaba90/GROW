import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export default function PageDetails({ page }) {
    const { title, content } = page;
    return (_jsxs(_Fragment, { children: [_jsxs("h2", { className: "text-2xl md:text-4xl my-4", children: [" ", title, " "] }), _jsx("div", { className: "prose max-w-none mt-4 mb-4", dangerouslySetInnerHTML: { __html: content } })] }));
}
