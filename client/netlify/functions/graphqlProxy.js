const fetch = require('node-fetch');
const https = require('https');

// Ignora certificati non validi (opzionale, solo se il certificato del server è autofirmato o non valido)
const agent = new https.Agent({ rejectUnauthorized: false });

exports.handler = async function (event, context) {
    const url = 'https://51.21.6.145/wordpress/graphql';

    console.log("Inoltrando richiesta a:", url);

    try {
        // Inoltra la richiesta al server
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': event.headers.authorization || '', // se necessario
            },
            body: event.body, // inoltra il body della richiesta originale
            agent: agent // utilizza l'agent per ignorare SSL (opzionale)
        });

        console.log("Risposta ricevuta:", response.status);

        const data = await response.json();

        return {
            statusCode: response.status,
            body: JSON.stringify(data),
            headers: {
                'Access-Control-Allow-Origin': '*', // Puoi specificare l'origine in modo più restrittivo, se necessario
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        };
    } catch (error) {
        console.error("Errore nella funzione serverless:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Errore nel server proxy." }),
        };
    }
};
