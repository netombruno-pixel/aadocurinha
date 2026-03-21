# Easter Menu 2026 — Design Spec

## Overview

A standalone, mobile-first Easter menu page for A Docurinha at `/pascoa`. The page serves as a shareable digital menu for a delivery-only gourmet brigadeiro business (Windermere, FL). Customers reach it via Instagram/WhatsApp links and order through WhatsApp.

**Urgency:** Easter 2026. Menu content is the priority. Remotion hero animation is a cherry-on-top phase.

---

## Design Foundation: Glass System

The Easter page establishes a glass-first visual language that will become the design system foundation for the entire future website.

### Glass Primitives

Reusable Tailwind utilities/components — not page-specific styles:

| Primitive | Use | Properties |
|---|---|---|
| `glass-card` | Product cards, content containers | `bg-soft-pink/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(69,38,39,0.08)] rounded-2xl` |
| `glass-surface` | Nav bar, sticky elements | `bg-soft-pink/50 backdrop-blur-2xl shadow-[0_1px_12px_rgba(69,38,39,0.06)]` |
| `glass-pill` | Buttons, CTAs, badges | `bg-white/20 backdrop-blur-lg shadow-[0_4px_16px_rgba(69,38,39,0.06)] rounded-full` |
| `glass-overlay` | Modals, sheets, expanded states | `bg-[#1A1212]/70 backdrop-blur-2xl` (text inside uses `text-soft-pink` or `text-white`) |

**No-Line Rule compliance:** Glass primitives use warm-tinted ambient shadows (derived from Deep Cocoa at low opacity) instead of borders for plane separation. This is consistent with DESIGN.md's "No-Line Rule" — depth is achieved through shadow and opacity, never through `border` utilities.

### Background Strategy

Glass requires beautiful content bleeding through. The page background is a **gradient canvas**:
- Top: Deep cocoa (`#1A1212`) behind the hero
- Middle: Warm gradient shifting from cocoa → blush (`#FFF8F6`) → nude (`#F5ECE9`)
- Bottom: Cream (`#EFE6E3`) at the footer

**Implementation:** A single `<div>` with `position: fixed; inset: 0; z-index: -1` and a tall `linear-gradient(to bottom, #1A1212, #FFF8F6 35%, #F5ECE9 70%, #EFE6E3)`. No JS needed — the fixed background naturally shifts as content scrolls over it. Glass primitives' `backdrop-filter` composites against this layer.

Product photography and subtle Easter patterns at low opacity sit behind glass cards for depth.

### Performance Guardrail

Maximum 3-4 `backdrop-filter: blur()` layers visible on screen simultaneously. Blur radius: 12-20px. Elements that scroll off-screen should not remain in the blur compositing stack.

---

## Page Structure

### 1. Static Hero (Phase 1) → Remotion Hero (Phase 2)

**Phase 1 (ship first):**
- Full-viewport section with deep cocoa background
- Centered editorial typography: "Pascoa 2026" in Noto Serif display size
- Subtitle: "Colecao de Pascoa" / "Easter Collection" / "Coleccion de Pascua"
- Custom SVG Easter egg illustration with a subtle CSS entrance animation (fade + scale)
- Scroll indicator at bottom

**Phase 2 (cherry-on-top):**
- Replace static hero with a Remotion `<Player>` component
- Animation concept: A chocolate Easter egg slowly cracks open to reveal the menu title
- Looping, autoplay, muted, inline playback
- 3-5 second loop
- Falls back to Phase 1 static hero if Remotion fails to load

### 2. Language Toggle

- Sticky at top, appears after scrolling past the hero
- **Reveal mechanism:** An `IntersectionObserver` watches the hero section. When the hero's bottom edge exits the viewport, the toggle fades in (opacity + translateY transition). When the hero re-enters (scroll back up), it fades out.
- `glass-surface` treatment (frosted, translucent)
- Three-segment toggle: **PT** | **EN** | **ES** (PT default)
- Built with native shadcn Tabs component (available via `radix-ui` already in `package.json`). In Phase 2, can be swapped for `@animate-ui/tabs` for the sliding indicator animation.
- Instant content switch, no page reload
- Supports `?lang=pt|en|es` query param for shareable links
- Small — should not dominate the nav. Sits centered.
- **Note:** This page does NOT use the global `Header` component. The Easter page is fully standalone — no global header or footer. The language toggle serves as the only persistent navigation element.

### 3. Menu Sections

Each section scrolls into view with Framer Motion `whileInView` stagger animations. Sections are ordered by visual impact and product count:

#### 3a. Ovos de Colher (5 flavors) — Lead Section
- **Why lead:** Most items, likely the star product, biggest visual impact
- **Layout:** Full-width stacked cards, one per flavor, generous vertical spacing
- **Card anatomy:**
  - `glass-card` container
  - Image placeholder (4:5 aspect ratio, rounded corners, cream background)
  - Flavor name in Noto Serif `title-lg`
  - Description placeholder in Manrope `body-sm`
  - Price placeholder with `glass-pill` treatment
  - Phosphor Duotone spoon icon as section accent
- **Animation:** Cards stagger-fade-up on scroll, 100ms delay between each

#### 3b. Mini Ovos (2 types) — Side-by-Side
- **Layout:** 2-column grid, even on mobile (only 2 items — they fit)
- **Card anatomy:** Same as Ovos de Colher but more compact
- Custom SVG mini-egg illustration as section header
- **Animation:** Both cards fade in simultaneously

#### 3c. Barra de Chocolate (3 flavors) — Horizontal Carousel
- **Layout:** Horizontal scroll/swipe carousel. Cards peek at edges to signal swipeability.
- **Card anatomy:** Taller aspect ratio (3:5) to evoke the shape of a chocolate bar
- `overflow-x: scroll` with `scroll-snap-type: x mandatory` and `scroll-snap-align: center` on each card
- Custom SVG chocolate bar illustration as section header
- Dot indicators below (current position), driven by an `IntersectionObserver` on each card (threshold 0.5) to update active dot
- **Desktop (>=768px):** Show all 3 cards in a 3-column grid, hide carousel dots
- **Animation:** Carousel slides in from right on scroll

#### 3d. Kit Confeiteiro (1 product) — Hero Card
- **Layout:** Single full-width `glass-card`, larger than product cards
- **Content:** Not a product listing — a "gift experience" presentation
  - Large image placeholder
  - "What's inside" list with Phosphor Duotone icons (whisk, mold, sprinkles, chocolate)
  - "Perfect for" tagline (kids, families, gifts)
  - Description placeholder
  - Price placeholder
- Custom SVG gift-box/whisk illustration
- **Animation:** Scale-up entrance with slight rotation

### 4. Sticky WhatsApp CTA

- Fixed at bottom of viewport, always visible after hero
- `glass-pill` treatment — translucent with blur
- Phosphor Duotone WhatsApp logo + text: "Fazer Pedido" / "Order Now" / "Hacer Pedido"
- Taps open `https://wa.me/<number>?text=<pre-filled message>`
- Pre-filled message adapts to selected language
- **Phase 1:** Uses a placeholder `#` href with a tooltip/disabled state until the real WhatsApp number is provided in Phase 3
- Subtle pulse or glow animation on first appearance, then static
- Safe area padding for iOS home indicator

### 5. Footer

- Minimal, sits on the cream background
- Brand mark: "A Docurinha" in Noto Serif
- Instagram link with Phosphor Duotone Instagram icon
- Delivery area note: "Windermere, FL & surroundings"
- "Pascoa 2026" badge

---

## i18n Strategy

### Structure

A single `translations.js` (or `.ts`) file exporting:

```js
export const translations = {
  pt: {
    hero_title: "Pascoa 2026",
    hero_subtitle: "Colecao de Pascoa",
    cta: "Fazer Pedido",
    // section names, product names, descriptions...
  },
  en: { ... },
  es: { ... },
}
```

### React Implementation

- `LanguageContext` provider wrapping the page
- `useLanguage()` hook returns `{ lang, setLang, t }` where `t` is a lookup function
- **Fallback chain:** `t(key)` looks up `translations[currentLang][key]` → falls back to `translations.pt[key]` → falls back to the raw key string. This prevents blank renders during Phase 3 content fill-in.
- On mount, reads `?lang=` from URL. Defaults to `pt`.
- On toggle, updates context + URL query param (without navigation)

---

## Icons & Illustrations

### Phosphor Duotone (utility icons)
- WhatsApp, Instagram (social/CTA)
- Menu, X, Arrow (navigation/UI)
- Loaded from `@phosphor-icons/react` (already installed)

### Custom SVG Illustrations (brand moments)
- Easter egg (hero + Ovos de Colher section)
- Mini egg pair (Mini Ovos section)
- Chocolate bar (Barra de Chocolate section)
- Gift box / whisk (Kit Confeiteiro section)
- Spoon (Ovos de Colher accent)
- These are placeholder-ready: simple, warm, hand-drawn style. Can be AI-generated or traced. Stored in `/public/illustrations/`.

---

## Component Architecture

```
app/pascoa/page.jsx              — Page shell, LanguageProvider, section composition
components/pascoa/
  HeroStatic.jsx                 — Phase 1 static hero
  HeroRemotion.jsx               — Phase 2 Remotion hero ("use client" + dynamic import)
  LanguageToggle.jsx             — Sticky glass nav with language tabs
  LanguageContext.jsx             — React context provider + useLanguage() hook
  SectionOvosDeColher.jsx        — 5-flavor stacked cards
  SectionMiniOvos.jsx            — 2-type side-by-side
  SectionBarraChocolate.jsx      — 3-flavor carousel
  SectionKitConfeiteiro.jsx      — Single hero card
  ProductCard.jsx                — Reusable glass card for products
  WhatsAppCTA.jsx                — Sticky bottom CTA
  FooterPascoa.jsx               — Minimal Easter footer
lib/
  translations.js                — i18n content object (pure data, no components)
public/
  illustrations/                 — Custom SVG illustrations (Easter egg, chocolate bar, etc.)
```

---

## Design System Updates

The following should be added to DESIGN.md and `globals.css` as part of this work:

1. **Glass primitives** as Tailwind utilities (see Glass Primitives table above)
2. **Phosphor Duotone** as the primary icon set (remove Lucide dependency over time)
3. **Scroll-linked gradient background** pattern as a reusable page foundation
4. **Updated "Glassmorphism & Texture" section** in DESIGN.md → becomes "Glass System" as the core visual language

---

## shadcn Registry Components

From our registry directory:

| Component | Registry | Purpose |
|---|---|---|
| Animated Tabs | `@animate-ui/tabs` | Language toggle with sliding indicator |
| Animated Number | `@animate-ui/number` | Price count-up on scroll (optional polish) |
| In View | `@motion-primitives/in-view` | Section entrance animations (if Framer Motion `whileInView` isn't enough) |

Install only what we use. Framer Motion (already installed) handles most animation needs.

---

## Build Phases

### Phase 1: Live Menu (priority)
- Glass design system primitives in Tailwind/globals.css
- Static hero
- Language toggle + i18n system
- All 4 menu sections with placeholder content
- WhatsApp CTA
- Footer
- Custom SVG illustration placeholders (simple shapes, replaced later)
- Deploy

### Phase 2: Polish
- Remotion hero animation (replace static hero)
- Refined custom SVG illustrations
- Animate UI components (animated tabs, animated numbers)
- Scroll-linked background gradient refinement
- Performance audit on mobile (blur layer count, animation FPS)

### Phase 3: Content
- Real product photography
- Final prices, descriptions, flavor names in all 3 languages
- WhatsApp number + pre-filled messages
- Instagram handle confirmation

---

## Out of Scope

- Home page, Brigadeiros page, Naked Cakes page, Contact page (future work)
- Shopping cart or online payment
- Admin/CMS for menu editing
- Analytics or tracking
- Dark mode (the glass system on warm cream is inherently a light-mode experience)
- Accessibility: The existing `maximum-scale=1` in `layout.js` prevents pinch-to-zoom (fails WCAG 2.1 SC 1.4.4). This is a known trade-off inherited from the existing codebase and will be addressed in a future accessibility pass, not in this Easter menu work.

### Typography Scale Note

Hero display text should use `clamp(3rem, 8vw, 5rem)` — mapping to the DESIGN.md `display-lg` intent while being responsive. Section headings use the existing `h2` scale from `globals.css`.
