---
name: Obsidian Precision
colors:
  surface: '#121315'
  surface-dim: '#121315'
  surface-bright: '#38393a'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1d'
  surface-container: '#1f2021'
  surface-container-high: '#292a2b'
  surface-container-highest: '#343536'
  on-surface: '#e3e2e3'
  on-surface-variant: '#c3c7cf'
  inverse-surface: '#e3e2e3'
  inverse-on-surface: '#303032'
  outline: '#8d9199'
  outline-variant: '#42474e'
  surface-tint: '#a7caf3'
  primary: '#e5efff'
  on-primary: '#063254'
  primary-container: '#b2d5ff'
  on-primary-container: '#395c80'
  inverse-primary: '#3e6185'
  secondary: '#cdc0ed'
  on-secondary: '#342b4f'
  secondary-container: '#4d4369'
  on-secondary-container: '#bfb2de'
  tertiary: '#ebf92c'
  on-tertiary: '#2f3300'
  tertiary-container: '#cfdc00'
  on-tertiary-container: '#585f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d0e4ff'
  primary-fixed-dim: '#a7caf3'
  on-primary-fixed: '#001d35'
  on-primary-fixed-variant: '#25496c'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#cdc0ed'
  on-secondary-fixed: '#1f1538'
  on-secondary-fixed-variant: '#4b4166'
  tertiary-fixed: '#dfed1a'
  tertiary-fixed-dim: '#c3d000'
  on-tertiary-fixed: '#1b1d00'
  on-tertiary-fixed-variant: '#454a00'
  background: '#121315'
  on-background: '#e3e2e3'
  surface-variant: '#343536'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  h1:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-mono:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 20px
  margin: 32px
---

## Brand & Style

The design system is engineered for high-performance "Startup Operating Partners" who demand clarity, speed, and technical superiority. It occupies the intersection of **Minimalism** and **Glassmorphism**, leveraging a "Dark Mode First" philosophy that mirrors the environments of elite engineers and founders.

The aesthetic is "Startup-Native," characterized by high-density information displays, razor-sharp borders, and purposeful motion. It evokes a sense of "Invisible Infrastructure"—tools that are powerful and omnipresent but never obstructive. Key visual drivers include:
- **Precision:** Mathematical alignment and consistent rhythmic spacing.
- **Luminosity:** Using light as an interactive layer rather than just decoration.
- **Technical Trust:** A blend of modern sans-serif clarity with subtle monospaced accents to signal code-level execution.

## Colors

The palette is anchored in a "True Black" foundation to maximize OLED contrast and power efficiency. 

- **Foundation:** The core workspace uses `#000000` for deep backgrounds, with `#08090A` used for elevated surfaces like sidebars and cards.
- **Accents:** The primary interaction color is a high-vibrancy "Electric Blue" (`#B2D5FF`), used for primary actions and focused states. "Muted Violet" (`#DFD1FF`) serves as a secondary accent for categorization and sophisticated gradients. 
- **Signal:** "Acid Lime" (`#E4F222`) is used sparingly for high-attention callouts, success states, or "Live" indicators, providing a sharp contrast against the dark background.
- **Gradients:** Use linear gradients (45-degree angle) transitioning from Blue to Violet at low opacities (10-20%) for hover states and glass reflections.

## Typography

This design system utilizes a dual-font strategy to balance human-centric readability with technical precision. 

**Inter** is the workhorse, providing exceptional legibility across all UI scales. For headlines, tight tracking and high weights create a "blocky," authoritative look.

**Space Grotesk** is introduced for small labels, data points, and status indicators. Its geometric, slightly technical DNA provides the "futuristic" edge required for a startup operating system. 

Typography should always favor high contrast—pure white (`#FFFFFF`) for primary headings, and a 60% opacity white for secondary body text to maintain hierarchy without visual clutter.

## Layout & Spacing

The system follows a strict **Fixed Grid** philosophy for desktop interfaces, transitioning to a fluid model for mobile. 

- **Grid:** A 12-column precision grid with a 20px gutter ensures horizontal alignment. 
- **Rhythm:** An 8pt linear scale governs all vertical spacing. Elements should be spaced in multiples of 8 (e.g., 16, 24, 40) to maintain a cohesive cadence.
- **Density:** High-density layouts are preferred. Use 16px padding for standard containers and 8px for compact data lists.
- **Safe Zones:** Maintain a consistent 32px outer margin for page-level containers to let the "True Black" background frame the content.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Glassmorphism** rather than traditional drop shadows.

1.  **Level 0 (Floor):** Pure black `#000000`. Used for the main canvas.
2.  **Level 1 (Surfaces):** `#08090A` with a 1px solid border at 10% opacity white. Used for sidebars and secondary panels.
3.  **Level 2 (Modals/Cards):** Background blur (20px) with a semi-transparent fill (`#FFFFFF05`). A "top-light" border effect—a subtle 1px gradient border that is brighter at the top—simulates a physical edge catching light.
4.  **Floating Elements:** Command palettes and tooltips use a deep background blur (40px) and a subtle outer glow using the Primary Accent color at 5% opacity to indicate focus.

## Shapes

The shape language is "Soft-Technical." By using a **Soft** (4px to 8px) corner radius, the UI feels engineered and precise rather than "bubbly."

- **Small Elements (Checkboxes, Tags):** 4px radius.
- **Standard Components (Buttons, Inputs):** 6px radius.
- **Large Containers (Cards, Modals):** 12px radius.

Interactive elements should avoid the "Pill" shape unless used for specific status chips to maintain a professional, rectangular grid aesthetic.

## Components

### Buttons
- **Primary:** Solid white text on a subtle gradient background or a high-contrast ghost button with a 1px border. Hover state triggers a soft outer glow.
- **Secondary:** Transparent background with a `white/10%` border. On hover, the border opacity increases to 40%.

### Input Fields
- Inputs are dark-filled (`#000000`) with a 1px border. The "Focus" state is indicated by a Primary Accent border and a subtle internal glow. Use monospaced fonts for numerical or code inputs.

### Chips & Badges
- Use a "Glass-tag" style: a semi-transparent background color (10% opacity of the accent) with a matching solid 1px border and the monospaced label font.

### Cards
- Cards utilize the "Level 2" elevation. They should not have shadows. Instead, they rely on 1px borders and slight background color shifts to differentiate from the floor.

### Interactive Micro-interactions
- **Hover:** All interactive elements should have a 150ms ease-in-out transition.
- **Active State:** A slight "scale-down" (98%) on click to provide tactile feedback.
- **Loading:** Use a linear "shimmer" effect that moves across the top 1px border of the loading container.