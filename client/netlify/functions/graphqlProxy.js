const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    // URL del server di destinazione
    const url = 'https://51.21.6.145/wordpress/graphql';

    // Inoltra la richiesta al server
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': event.headers.authorization || '', // se necessario
        },
        body: event.body, // inoltra il body della richiesta originale
    });

    // Ricevi la risposta e restituiscila al client
    const data = await response.json();

    return {
        statusCode: response.status,
        body: JSON.stringify(data),
        headers: {
            'Access-Control-Allow-Origin': '*', // Puoi specificare l'origine in modo più restrittivo, se necessario
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    };
};
