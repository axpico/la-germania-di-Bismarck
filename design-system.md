# Design System - La Germania di Bismarck

## Palette Colori

### Colori Principali
- Prussian Blue (#003366) - Colore principale, richiama l'uniforme prussiana
- Gold (#D4AF37) - Accenti e dettagli, richiama l'oro imperiale
- Ivory (#FFFFF0) - Sfondo principale, per una migliore leggibilità
- Dark Gray (#333333) - Testo principale

### Colori Secondari
- Burgundy (#800020) - Elementi di contrasto
- Forest Green (#228B22) - Elementi naturali e mappe
- Warm Gray (#8B7355) - Elementi neutri
- Cream (#F5F5DC) - Sfondo secondario

## Tipografia

### Font Principali
- Headings: "Playfair Display" - Font serif elegante per i titoli
- Body: "Source Sans Pro" - Font sans-serif leggibile per il testo
- Accents: "Crimson Text" - Font serif per citazioni e note

### Dimensioni Font
- H1: 48px
- H2: 36px
- H3: 24px
- Body: 16px
- Small text: 14px

## Layout

### Griglia
- Sistema a 12 colonne
- Margini: 24px
- Gutter: 32px
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Spaziature
- Base unit: 8px
- Margini sezione: 64px
- Padding contenuto: 32px
- Spaziatura elementi: 16px

## Componenti UI

### Header
- Altezza: 80px
- Logo posizionato a sinistra
- Menu di navigazione a destra
- Sfondo: Prussian Blue
- Testo: Ivory

### Navigation
- Menu principale orizzontale
- Sottomenu a dropdown
- Hover effect con Gold
- Font: Source Sans Pro, 16px

### Cards
- Bordi arrotondati: 8px
- Ombra: 0 4px 6px rgba(0,0,0,0.1)
- Padding: 24px
- Sfondo: Ivory
- Hover effect con leggera elevazione

### Timeline
- Linea verticale in Prussian Blue
- Punti evento in Gold
- Cards evento con sfondo Ivory
- Connessioni animate

### Mappe Interattive
- Sfondo: Forest Green
- Confini: Gold
- Punti di interesse: Burgundy
- Tooltip con sfondo Ivory

### Bottoni
- Primary: Prussian Blue con testo Ivory
- Secondary: Ivory con bordo Prussian Blue
- Accent: Gold con testo Dark Gray
- Hover effect con leggero schiarimento
- Border radius: 4px
- Padding: 12px 24px

## Elementi Decorativi

### Icone
- Set personalizzato in stile storico
- Colori: Prussian Blue e Gold
- Dimensioni: 24px x 24px

### Bordi e Separatori
- Linee decorative in Gold
- Motivi geometrici ispirati all'arte prussiana
- Separatori con pattern storici

### Immagini
- Bordi decorativi in Gold
- Filtro vintage leggero
- Ratio: 16:9 per immagini principali
- Ratio: 1:1 per thumbnails

## Animazioni

### Transizioni
- Durata base: 0.3s
- Easing: ease-in-out
- Hover effects su cards e bottoni
- Fade in per contenuti

### Interazioni
- Scroll smooth
- Parallax su immagini principali
- Timeline animata
- Mappe interattive con zoom

## Responsive Design

### Mobile
- Menu hamburger
- Cards a larghezza piena
- Font size ridotto del 20%
- Timeline orizzontale

### Tablet
- Menu a due livelli
- Cards in griglia 2x2
- Font size ridotto del 10%
- Timeline mista

### Desktop
- Menu completo
- Cards in griglia 3x3
- Font size standard
- Timeline verticale

## Accessibilità

### Contrasto
- Testo principale: 4.5:1 minimo
- Testo grande: 3:1 minimo
- Elementi UI: 3:1 minimo

### Focus States
- Outline visibile
- Colore: Gold
- Spessore: 2px

### Screen Reader
- ARIA labels
- Alt text per immagini
- Skip links
- Heading hierarchy

## Performance

### Ottimizzazioni
- Lazy loading per immagini
- Code splitting
- Minificazione assets
- Caching strategico

### Loading States
- Skeleton screens
- Progress indicators
- Placeholder content
- Loading animations 