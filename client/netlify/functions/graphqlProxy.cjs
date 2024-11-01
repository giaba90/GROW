const https = require('https');
const axios = require('axios');

// Ignora certificati SSL non validi
const agent = new https.Agent({ rejectUnauthorized: false });

exports.handler = async function (event, context) {
    const url = 'https://51.21.6.145/wordpress/graphql';

    console.log("Inoltrando richiesta a:", url);

    try {
        const response = await axios.post(
            url,
            { query: "{ __typename }" }, // Query di test
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': event.headers.authorization || '',
                },
                httpsAgent: agent,
            }
        );

        console.log("Risposta ricevuta:", response.status);
        console.log("Dati ricevuti:", response.data); // Log per vedere la risposta esatta

        return {
            statusCode: response.status,
            body: JSON.stringify(response.data),
            headers: {
                'Access-Control-Allow-Origin': '*',
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
