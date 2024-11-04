import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
    uri: 'https://51.21.6.145/wordpress/graphql', // Sostituisci con l'URL del tuo endpoint GraphQL di WordPress
    fetchOptions: {
        mode: 'cors',
    },
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default client;
