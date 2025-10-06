# La Germania di Bismarck

Un sito web interattivo dedicato alla storia della Germania durante il periodo di Bismarck, con un focus particolare sulla politica interna ed estera, il revanscismo e il radicalismo.

## Caratteristiche

- Design moderno e responsive
- Navigazione intuitiva
- Timeline interattive
- Mappe storiche
- Contenuti approfonditi
- Animazioni fluide

## Tecnologie Utilizzate

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Mapbox GL
- Docker

## Requisiti

- Git (per clonare il progetto, in alternativa scaricare zip da GitHub -> https://github.com/axpico/la-germania-di-Bismarck/archive/refs/heads/main.zip)
- Node.js 20 o superiore
- Docker e Docker Compose (per lo sviluppo in container)
- npm o yarn:
  
Linux:
- Installa `git`, `npm` e `yarn` dal tuo package manager

Windows:
- Apri PowerShell
- ```batch
  winget install -e --id Yarn.Yarn;winget install -e --id Git.Git;winget install -e --id OpenJS.NodeJS
  ```

## Installazione

### Sviluppo Locale

1. Clona il repository:
   ```bash
   git clone https://github.com/axpico/la-germania-di-Bismarck.git
   cd la-germania-di-bismarck
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```

### Sviluppo con Docker

1. Clona il repository:
   ```bash
   git clone https://github.com/tuousername/la-germania-di-bismarck.git
   cd la-germania-di-bismarck
   ```

2. Avvia i container:
   ```bash
   docker-compose up
   ```

Il sito sarà disponibile all'indirizzo `http://localhost:3000`

## Script Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Compila il progetto per la produzione
- `npm run preview` - Anteprima della build di produzione
- `npm run lint` - Esegue il linting del codice

## Struttura del Progetto

```
src/
  ├── components/     # Componenti React riutilizzabili
  ├── pages/         # Pagine dell'applicazione
  ├── assets/        # Immagini e altri asset statici
  ├── styles/        # File CSS e configurazioni Tailwind
  ├── utils/         # Funzioni di utilità
  ├── hooks/         # Custom React hooks
  └── types/         # Definizioni TypeScript
```

## Contribuire

1. Forka il repository
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Committa le tue modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Pusha al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## Licenza

Questo progetto è distribuito con licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.

## Contatti

Per domande o suggerimenti, non esitare a contattarci attraverso le issue del repository.
