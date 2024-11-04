[![Netlify Status](https://api.netlify.com/api/v1/badges/4d16e888-960a-4174-b2db-45acc92ffb8a/deploy-status)](https://app.netlify.com/sites/wpgrow/deploys)

# PREVIEW

Homepage : [Preview](https://wpgrow.netlify.app/)

![Preview](https://github.com/giaba90/GROW/blob/main/preview-grow.jpg "Preview")

# DESCRIZIONE

**Grow** prende il nome dalle iniziali di GraphQL, ReactJS e WordPress. Questo progetto nasce come un piccolo esercizio pratico per approfondire l'utilizzo di queste tecnologie. Il termine 'Grow' in inglese significa 'crescere', un concetto che ho voluto fare mio quando ho iniziato questa avventura: crescere sia dal punto di vista personale che professionale. Il razzo accanto al nome simboleggia il mio desiderio di ambire a grandi traguardi, sognando di poter raggiungere la luna e toccarla con un dito.

# FUNZIONALITA' PRINCIPALI: 

Il progetto è un classico blog che mostra i post recenti in homepage con una immagine in evidenza ed una preview del corpo dell'articolo. Gli articoli sono organizzati in categorie. Ogni singolo articolo propone altri articoli correlati e connesi tramite tag.
Per ogni articolo puoi condividerlo sui social, commentarlo sul sito stesso e/o mettere un mi piace. 
Puoi inoltre fare una ricerca sul sito o seguire gli account social tramite apposite icone poste nella sidebar.
C'è inoltre la possibilità di collegare pagine statiche al menù principale.

# ISTRUZIONI DI INSTALLAZIOE:

Work in progress

# TECNOLOGIE USATE

Per realizzare il frontend ho usato il framework reactjs con le librerie Shadcn-ui e Tailwindcss.
Per le chiamate al database ho usato Apollo client e le GraphQL query.
Per una maggiore velocità di sviluppo del progetto , ho usato una installazione WordPress headless per il backend.
In locale ho montato un container docker con una immagine di wordpress e php 8.2 , una configurazione docker-compose mi ha aiutato ad preparare tutto l'ambiente locale di backend. 
L'installazione di WP prevede una tema base preso dal repo ufficiale di wordpres e tre plugins: dummy data , graphql server e disable gutenberg(opzionale).
Tutto il progetto è caricato su Github.

# DETTAGLI IMPLEMANTITIVI

In produzione il frontend è caricato su netlify con un pipeline di ci/co collegato al mio account github.
Il backend è su una instanza ec2 micro.t3 di Amazon AWS con indirizzo ip statico. 
Piattaforma: Linux Ubuntu 22 con Server apache2


# CONTRIBUTI:

Linee guida su come altri possono contribuire.



