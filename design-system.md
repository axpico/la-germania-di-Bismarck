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
- Headings: 24px - 96px (responsive scaling)
- Small text: 14px
- Large text: 18px - 24px

## Modern Design Elements

### Glassmorphism
- Backdrop blur: `backdrop-blur-md`
- Background opacity: `bg-white/10`
- Border: `border border-white/20`
- Shadow: `shadow-2xl`
- Border radius: `rounded-[2rem]`

### 3D Effects
- Perspective: `perspective-1000`
- Transform GPU: `transform-gpu`
- Rotation on hover: `rotateX(5deg) rotateY(5deg)`
- Depth: `translateZ(20px)`

### Dynamic Gradients
- Text gradients: `bg-gradient-to-r from-ivory via-imperial-gold to-ivory`
- Button gradients: `bg-gradient-to-r from-prussian-blue via-prussian-blue/90 to-prussian-blue`
- Background gradients: `bg-gradient-to-br from-ivory via-ivory/95 to-ivory/90`

## Components

### Buttons
- **Primary Button**: 
  - Gradient background with shine effect
  - Rounded-full design
  - Hover animation with scale and lift
  - Shine effect on hover
  - Shadow with color-specific glow

### Cards
- Glassmorphism effect
- 3D rotation on hover
- Dynamic gradient backgrounds
- Enhanced shadow effects
- Smooth spring animations

### Navigation
- Background: Prussian Blue with glassmorphism
- Text: Ivory with gradient effects
- Hover: Imperial Gold with shine effect

## Animations

### Motion Effects
- **Spring Physics**:
  - Damping: 20
  - Stiffness: 300
  - Mass: 1

### Interactive Elements
- Mouse-tracking 3D perspective
- Particle system with 20 elements
- Smooth parallax scrolling
- Gradient text animations
- Shine effects on hover

### Transitions
- Duration: 300ms - 500ms
- Easing: spring physics
- GPU acceleration
- Smooth state changes

## Layout

### Grid System
- 12-column responsive grid
- Gaps: 32px - 48px
- Container padding: 24px - 48px
- Section spacing: 64px - 96px

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Performance Optimizations

### Animation Performance
- Hardware acceleration with `transform-gpu`
- Optimized particle system
- Efficient spring animations
- Reduced repaints

### Loading States
- Skeleton screens with glassmorphism
- Progressive loading
- Smooth transitions
- Optimized asset loading

## Accessibility

### Visual Hierarchy
- Clear contrast ratios
- Readable font sizes
- Proper spacing
- Focus states

### Interactive Elements
- Clear hover states
- Visible focus rings
- Adequate touch targets
- Screen reader support

## Design Principles
1. **Modern Innovation**: Cutting-edge design while maintaining historical context
2. **Interactive Experience**: Engaging animations and 3D effects
3. **Visual Depth**: Layered design with glassmorphism and shadows
4. **Smooth Transitions**: Natural-feeling animations with spring physics
5. **Responsive Design**: Fluid layouts that work across all devices

## Usage Guidelines
- Use glassmorphism for main containers
- Apply 3D effects for interactive elements
- Implement spring animations for natural movement
- Maintain consistent spacing and typography
- Ensure all interactive elements have clear feedback
- Use particle effects sparingly for emphasis

## Implementation Notes
- Use Framer Motion for animations
- Implement CSS transforms for performance
- Apply backdrop-filter for glassmorphism
- Use CSS variables for consistent theming
- Optimize for mobile performance

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