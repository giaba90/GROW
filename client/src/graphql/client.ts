import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

// Definisci il link HTTP per il tuo server GraphQL
const httpLink = new HttpLink({
    uri: 'https://51.21.6.145/wordpress/graphql',
});

// Crea un link che rimuove l'intestazione 'apollographql-client-version'
const removeHeaderLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            'apollographql-client-version': undefined, // Rimuove l'intestazione specifica
        },
    }));
    return forward(operation);
});

// Configura Apollo Client con il link modificato
const client = new ApolloClient({
    link: ApolloLink.from([removeHeaderLink, httpLink]), // Combina i link
    cache: new InMemoryCache(),
});

export default client;
