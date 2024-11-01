const https = require('https');

// Importa node-fetch dinamicamente per supportare CommonJS
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const agent = new https.Agent({ rejectUnauthorized: false });

exports.handler = async function (event, context) {
    const url = 'https://51.21.6.145/wordpress/graphql';

    console.log("Inoltrando richiesta a:", url);

    try {
        // Esegue la query di test { __typename }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': event.headers.authorization || '',
            },
            body: JSON.stringify({
                query: "{ __typename }"  // Query di test
            }),
            agent: agent, // Ignora certificati SSL non validi, se necessario
        });

        console.log("Risposta ricevuta:", response.status);

        const data = await response.json();
        console.log("Dati ricevuti:", data); // Log per vedere la risposta esatta

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
