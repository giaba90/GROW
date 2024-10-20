import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql', // Sostituisci con l'URL del tuo endpoint GraphQL di WordPress
    cache: new InMemoryCache(),
});

export default client;