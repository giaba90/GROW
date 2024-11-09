import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Sostituisci con l'URL del tuo endpoint GraphQL di WordPress
const httpLink = new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
    fetchOptions: {
        mode: 'cors',
    },
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default client;
