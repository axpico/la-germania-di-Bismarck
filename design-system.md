# Design System - La Germania di Bismarck

## Color Palette

### Primary Colors
- **Prussian Blue** (`#1B365D`): A deep, rich blue that represents authority and tradition. Used for primary actions and key UI elements.
- **Imperial Gold** (`#C5A572`): A muted, elegant gold that adds sophistication. Used for accents and highlights.
- **Ivory** (`#F5F2E9`): A warm, creamy background color that provides a soft, historical feel.

### Secondary Colors
- **Burgundy** (`#8B1A3B`): A rich, deep red that adds historical depth. Used for secondary actions and important UI elements.
- **Forest Green** (`#2C4F43`): A muted, sophisticated green that represents stability. Used for success states and nature-related elements.
- **Warm Gray** (`#6B5B4D`): An earthy gray that provides depth and contrast. Used for text and subtle UI elements.

### Accent Colors
- **Cream** (`#F8F4E3`): A soft cream for subtle backgrounds and hover states.
- **Dark Gray** (`#2C2C2C`): A deep, rich gray for text and strong contrast elements.
- **Sepia** (`#704214`): A warm sepia tone for historical elements and decorative features.
- **Silver** (`#C0C0C0`): A metallic silver for modern accents and interactive elements.
- **Bronze** (`#CD7F32`): A warm bronze for special highlights and premium features.
- **Parchment** (`#F4E4BC`): An aged parchment color for historical content backgrounds.

## Typography

### Font Families
- **Playfair Display**: Used for headings and important titles
- **Source Sans Pro**: Used for body text and general content
- **Crimson Text**: Used for quotes and special content

### Font Sizes
- Base: 16px
- Headings: 24px - 48px
- Small text: 14px
- Large text: 18px

## Components

### Buttons
- **Primary Button**: Prussian Blue background with Ivory text
- **Secondary Button**: Ivory background with Prussian Blue border and text
- **Accent Button**: Imperial Gold background with Dark Gray text

### Cards
- Background: Ivory
- Border: Subtle shadow
- Hover effect: Enhanced shadow and slight scale

### Navigation
- Background: Prussian Blue
- Text: Ivory
- Hover: Imperial Gold

## Spacing
- Base unit: 4px
- Common spacing: 8px, 16px, 24px, 32px, 48px
- Large spacing: 64px, 96px

## Animations
- **Fade In**: Subtle fade for content appearance
- **Slide Up**: Smooth upward motion for content reveals
- Duration: 300ms - 500ms
- Easing: ease-in-out

## Design Principles
1. **Historical Authenticity**: Design elements should reflect the Bismarck era while maintaining modern usability
2. **Elegant Simplicity**: Clean layouts with sophisticated details
3. **Hierarchical Clarity**: Clear visual hierarchy through typography and spacing
4. **Responsive Design**: Fluid layouts that work across all device sizes
5. **Accessible Contrast**: Ensuring all text meets WCAG 2.1 contrast requirements

## Usage Guidelines
- Use primary colors for main UI elements and actions
- Apply secondary colors for supporting elements
- Use accent colors sparingly for emphasis
- Maintain consistent spacing throughout the interface
- Ensure all interactive elements have clear hover and active states
- Use animations purposefully to enhance user experience

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