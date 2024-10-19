import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { ApolloProvider } from '@apollo/client'
import client from './graphql/client'
import './styles/index.css'

const root = createRoot(document.getElementById('root')!);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
