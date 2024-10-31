import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';
import './styles/index.css';
const root = createRoot(document.getElementById('root'));
root.render(_jsx(ApolloProvider, { client: client, children: _jsx(App, {}) }));
