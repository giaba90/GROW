import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://51.21.6.145/wordpress/graphql', // Sostituisci con l'URL del tuo endpoint GraphQL di WordPress
    cache: new InMemoryCache(),
    // Provide some optional constructor fields
    name: 'react-web-client',
    version: '1.3',
    queryDeduplication: false,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    },
});

export default client;