import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/homepage';
import Archive from '../pages/archive';
import SinglePost from '../pages/single-post';
import Page from '@/pages/page';
function App() {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Homepage, {}) }), _jsx(Route, { path: "/archive/:slug", element: _jsx(Archive, {}) }), _jsx(Route, { path: "/post/:id", element: _jsx(SinglePost, {}) }), _jsx(Route, { path: "/:slug", element: _jsx(Page, {}) })] }) }));
}
export default App;
