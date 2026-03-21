# Design System Strategy: Editorial Artisanship

## 1. Overview & Creative North Star

This design system is built upon the Creative North Star of **"The Artisanal Gallery."** We are not building a generic e-commerce storefront; we are curating a digital atelier that mirrors the tactile, high-end experience of a luxury chocolate boutique. 

The system moves beyond the "grid-of-boxes" mentality by embracing **Intentional Asymmetry** and **Tonal Depth**. By utilizing wide margins, overlapping elements, and a high-contrast typographic scale, we create a rhythmic, editorial flow. The goal is to make the user feel the "warmth" of the handcrafted product through soft elevations and a sophisticated palette, ensuring every interaction feels as smooth and premium as a melting brigadeiro.

---

## 2. Colors: The Cocoa & Blush Palette

The color strategy relies on "Tonal Immersion." We avoid harsh contrasts in favor of a sophisticated, monochromatic layering technique.

### Primary Brand Tokens
*   **Primary (#452627):** Deep Cocoa. Used for high-authority text and primary action surfaces.
*   **Secondary (#745660):** Muted Rose. Used for supporting UI elements and accents.
*   **Tertiary (#735C00):** Gold Accent. Reserved for "Jewel" moments—luxury indicators, gold-standard badges, or critical call-to-actions.
*   **Background (#FFF8F6):** Warm Cream. The "canvas" of the brand.

### The "No-Line" Rule
To maintain a premium, editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through:
1.  **Background Color Shifts:** Moving from `surface` (#FFF8F6) to `surface-container-low` (#FBF2EF).
2.  **Shadow Depth:** Using diffused ambient light to separate planes.

### Glassmorphism & Texture
The glass system is a first-class part of the design language. See **Section 8: Glass System** for the full specification, including glass primitives, the fixed gradient background canvas, performance guardrails, and No-Line Rule compliance.

---

## 3. Typography: Editorial Sophistication

Typography is the primary vehicle for brand personality. We pair a high-character Serif with a functional, modern Sans-Serif.

*   **Display & Headlines (Noto Serif):** These are our "Artisan" styles. Use `display-lg` (3.5rem) for hero statements with tight letter spacing (-2%) to mimic high-end editorial layouts.
*   **Titles & Body (Manrope):** Our "Functional" styles. `body-lg` (1rem) provides a clean, breathable reading experience. 
*   **Hierarchy Note:** Use `on-surface-variant` (#504444) for secondary body text to reduce visual weight and maintain a soft, sophisticated contrast.

---

## 4. Elevation & Depth: Tonal Layering

We reject standard drop shadows in favor of **Natural Ambient Occlusion**.

*   **The Layering Principle:** Depth is achieved by "stacking" surface tiers. Place a `surface-container-lowest` card (#FFFFFF) onto a `surface-container` background (#F5ECE9) for a subtle, natural lift.
*   **Ambient Shadows:** For "Floating" components (Buttons, Navigation Bars), use:
    *   `box-shadow: 0 10px 30px rgba(69, 38, 39, 0.06);` 
    *   The shadow color is a 6% opacity tint of the **Primary Deep Cocoa**, ensuring the shadow feels like it belongs to the environment.
*   **The Ghost Border:** If a boundary is required for accessibility in input fields, use `outline-variant` (#D4C2C2) at 20% opacity. Never use 100% opaque lines.

---

## 5. Components

### Buttons
*   **Primary:** `primary-container` (#5E3C3C) background with `on-primary` (#FFFFFF) text. Shape: `full` (pill-shaped).
*   **Secondary:** `surface` (#FFF8F6) background with a "Ghost Border" of 20% `outline`.
*   **Interaction:** On hover, apply a `gentle-scale` (1.02) and increase shadow diffusion.

### Product Cards
*   **Structure:** No dividers. Use `xl` (1.5rem) rounded corners.
*   **Visuals:** Place the product image in a `surface-container-high` (#EFE6E3) wrapper.
*   **Typography:** The product name should use `title-lg` in Deep Cocoa, followed by `body-sm` for descriptions.

### Input Fields
*   **Base:** `surface-container-lowest` (#FFFFFF).
*   **Corner Radius:** `md` (0.75rem).
*   **States:** On focus, transition the background to `secondary-container` (#FCD6E2) with a 2px soft glow in `secondary`.

### Navigation Bar
*   **Style:** Floating "Glassmorphism" bar. 
*   **Active State:** Use a soft Blush Pink (#FFD8E4) indicator dot or icon tint. **Do not use underline borders.**

---

## 6. Do's and Don'ts

### Do
*   **Do** use generous whitespace (Spacing scale `16` or `20`) to let the product photography breathe.
*   **Do** use intentional asymmetry—align a heading to the left and a product card slightly offset to the right.
*   **Do** use "Soft Fades" (300ms ease-out) for all page transitions to reflect the handcrafted, slow-living brand essence.

### Don't
*   **Don't** use pure black (#000000) for text. Always use the Deep Cocoa `on-surface` (#1E1B19) or `primary` (#452627).
*   **Don't** use standard 1px dividers between list items. Use spacing (`1.5` or `2`) and tonal shifts instead.
*   **Don't** use sharp corners. The minimum radius should be `DEFAULT` (0.5rem) to maintain the "Warm and Sophisticated" personality.

---

## 7. Resources: shadcn Community Registries

All registries below use the shadcn registry spec. Install any component with `npx shadcn@latest add @registry/component-name` — code lands directly in the project, fully ownable.

### Animation & Motion
*   **Animate UI** — [animate-ui.com](http://animate-ui.com) (`@animate-ui`) — 580+ animated React components with built-in Framer Motion. Drop-in shadcn replacements.
*   **Motion Primitives** — [motion-primitives.com](http://motion-primitives.com) (`@motion-primitives`) — Lower-level motion primitives: In View, Text Morph, Magnetic hover, Infinite Slider.
*   **Magic UI** — [magicui.design](https://magicui.design) (`@magicui`) — 150+ animated components, great for marketing/landing pages.
*   **Aceternity UI** — [ui.aceternity.com](https://ui.aceternity.com) (`@aceternity`) — Unique interactive effects (parallax, 3D cards).

### Complex UI Components
*   **Dice UI** — [diceui.com](http://diceui.com) (`@diceui`) — Sortable, Kanban, Data Table, Combobox, Tags Input, Stepper, Mention, Media Player.
*   **Kibo UI** — [kibo-ui.com](http://kibo-ui.com) (`@kibo-ui`) — Data Table, File Upload, Command Palette, Multi-step Form, Color Picker, Calendar, Gantt Chart.

### Forms
*   **Formcn** — [formcn.dev](http://formcn.dev) (`@formcn`) — Production-ready form components with React Hook Form + Zod. Form Builder, Address, Phone, Rich Text, Date Range.

### Rich Text
*   **Plate** — [platejs.org](http://platejs.org) (`@plate`) — Rich text editor on Slate.js with AI autocomplete, media, and table plugins.

### Utilities & Other
*   **Supabase UI** (`@supabase`) — Auth UI, Realtime Presence, Storage Upload.
*   **Tour** (`@tour`) — Product onboarding tours, tooltips, and feature walkthroughs.
*   **Lucide Animated** (`@lucide-animated`) — Animated versions of Lucide icons.
*   **shadcn-map** (`@shadcn-map`) — Leaflet map component.
*   **Shadcnblocks** — [shadcnblocks.com](https://shadcnblocks.com) — 1,000+ pre-built page sections.

### Icons
*   **Phosphor Duotone** is now the **primary icon set** for this project. It offers a warm, layered two-tone style that pairs naturally with the glass surfaces and cocoa palette. Lucide icons are being phased out and should be replaced with Phosphor Duotone equivalents over time. Install via `@phosphor-icons/react` and use the `Duotone` weight variant as the default.

---

## 8. Glass System

Glass is a primary UI pattern used across navigation, cards, modals, and interactive controls. All glass components share the same foundational principle: semi-transparent, warm-tinted surfaces backed by a fixed gradient canvas, creating a layered sense of physical depth without borders.

### Background Canvas

Every page must include a **fixed-position gradient div** as the bottommost layer. This gradient provides the color content that bleeds through all glass layers above it.

```css
background: linear-gradient(to bottom, #1A1212, #FFF8F6 35%, #F5ECE9 70%, #EFE6E3);
position: fixed;
inset: 0;
z-index: -1;
```

This single canvas replaces per-section background colors. Content regions sit above it on a transparent or glass surface, ensuring the gradient is always visible through each layer.

### Glass Primitives

Four utility classes cover all glass use cases. Each is defined by its `background` mix, `backdrop-filter` blur radius, and shadow style.

#### `glass-card`
*   **Use:** Content containers — product cards, info panels, feature blocks.
*   **Background:** `color-mix(in srgb, var(--color-soft-pink) 60%, transparent)`
*   **Backdrop filter:** `backdrop-blur(24px)`
*   **Shadow:** Warm ambient shadow derived from Deep Cocoa at low opacity (e.g. `box-shadow: 0 8px 32px rgba(69, 38, 39, 0.10)`)
*   **Border:** None — shadow separation only (see No-Line Rule below).

#### `glass-surface`
*   **Use:** Navigation bars, sticky headers, floating toolbars.
*   **Background:** `color-mix(in srgb, var(--color-soft-pink) 50%, transparent)`
*   **Backdrop filter:** `backdrop-blur(40px)`
*   **Shadow:** Subtle ambient lift matching `glass-card` shadow style.
*   **Border:** None.

#### `glass-pill`
*   **Use:** Buttons, CTAs, badges, chips.
*   **Background:** `color-mix(in srgb, var(--color-warm-white) 20%, transparent)`
*   **Backdrop filter:** `backdrop-blur(16px)`
*   **Shape:** Fully rounded (`border-radius: 9999px`) — pill form factor.
*   **Border:** None — rely on shadow contrast and opacity for definition.

#### `glass-overlay`
*   **Use:** Modal backdrops, drawer overlays, full-screen dialogs.
*   **Background:** `color-mix(in srgb, var(--color-dark-cocoa) 70%, transparent)`
*   **Backdrop filter:** `backdrop-blur(40px)`
*   **Text color:** `var(--color-soft-pink)` — light text on dark glass.
*   **Border:** None.

### Performance Guardrails

`backdrop-filter: blur()` is GPU-intensive. Stacking too many blurred layers causes jank on mobile and low-end hardware.

*   **Maximum 3–4 blurred layers** visible on screen simultaneously. Audit page layouts to ensure nested glass components do not exceed this limit.
*   **Blur radius range:** 12px – 20px for standard surfaces (`glass-card`, `glass-pill`). Reserve 40px for full-coverage surfaces (`glass-surface`, `glass-overlay`) where the blur span is large enough to justify the cost.
*   Avoid animating `backdrop-filter` directly. Animate `opacity` or `transform` instead and let the static blur persist.

### No-Line Rule Compliance

Glass primitives must never use `border` utilities. The No-Line Rule (Section 2) applies in full:

*   Boundaries are communicated through **warm-tinted ambient shadows** derived from Deep Cocoa at low opacity (e.g. `rgba(69, 38, 39, 0.08–0.14)`).
*   Do not add `border`, `ring`, or `outline` utilities to any glass component.
*   If an accessibility boundary is required (e.g. focus state on `glass-pill`), use a `box-shadow` outline in `outline-variant` (#D4C2C2) at 20% opacity — never a solid line.