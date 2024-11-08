import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
    uri: 'http://localhost:8000/graphql', // Sostituisci con l'URL del tuo endpoint GraphQL di WordPress
    fetchOptions: {
        mode: 'cors',
    },
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default client;
