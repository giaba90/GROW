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

# ISTRUZIONI DI INSTALLAZIONE:

Apri una nuova finestra di windows powershell ( se sei su Windows) o una finestra nuova del terminale (se sei su Linux/MacOSX)

## Scarica il repo 

```console
git clone https://github.com/giaba90/GROW.git
cd GROW
cd client
```

## crea un file chiamato .env ed all'interno scrivi

```console
VITE_GRAPHQL_ENDPOINT = "https://51.21.6.145/wordpress/graphql"
VITE_BASE_URL = "https://localhost:3000"
```

## installa le dipendenze 

```console
npm install
npm run dev
```

visita l'indirizzo http://localhost:3000

# TECNOLOGIE USATE

Per realizzare il frontend ho usato il framework ReactJs con le librerie Shadcn-ui e Tailwindcss.
Per le chiamate al database ho usato Apollo client e le GraphQL query.
Per una maggiore velocità di sviluppo del progetto , ho usato una installazione WordPress headless per il backend.
L'installazione di WP prevede una tema base preso dal repo ufficiale di wordpres e tre plugins: dummy data(opzionale) , graphql server e disable gutenberg(opzionale).

# DETTAGLI IMPLEMANTATIVI

In produzione il frontend è caricato su netlify con un pipeline di ci/co collegato al mio account github.
Il backend è su una instanza ec2 micro.t3 di Amazon AWS con indirizzo ip statico. 
Piattaforma: Linux Ubuntu 22 con Server apache2

# SICUREZZA

Per questo progetto sono stati utilizzati due strumenti da linea di comando: depcheck ed npm-check.

- depcheck: Questo strumento è in grado di scansionare il tuo progetto per identificare quali dipendenze dichiarate in package.json non vengono effettivamente importate nel codice.

- npm-check: Oltre a verificare le dipendenze inutilizzate, questo strumento ti consente anche di aggiornare pacchetti obsoleti.

# CONTRIBUTI:

Linee guida su come altri possono contribuire.



