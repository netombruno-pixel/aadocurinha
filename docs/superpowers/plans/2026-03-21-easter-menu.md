# Easter Menu 2026 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a standalone, mobile-first Easter menu page at `/pascoa` with glass design system, i18n (PT/EN/ES), and Framer Motion animations.

**Architecture:** A single Next.js App Router page (`app/pascoa/page.jsx`) composing client components from `components/pascoa/`. Language state managed via React Context. Glass primitives defined as Tailwind `@apply` utilities in `globals.css`. Fixed gradient background div behind all content.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, shadcn (Tabs), Framer Motion, Phosphor Icons (Duotone)

**Spec:** `docs/superpowers/specs/2026-03-21-easter-menu-design.md`

---

## File Map

### Create
- `app/globals.css` — Modify: add glass primitives + `--color-dark-cocoa` token
- `lib/translations.js` — i18n content object (PT/EN/ES)
- `components/pascoa/LanguageContext.jsx` — React context provider + `useLanguage()` hook
- `components/pascoa/LanguageToggle.jsx` — Sticky glass nav with shadcn Tabs
- `components/pascoa/HeroStatic.jsx` — Full-viewport hero with editorial typography
- `components/pascoa/ProductCard.jsx` — Reusable glass card for products
- `components/pascoa/SectionOvosDeColher.jsx` — 5-flavor stacked cards
- `components/pascoa/SectionMiniOvos.jsx` — 2-type side-by-side grid
- `components/pascoa/SectionBarraChocolate.jsx` — 3-flavor horizontal carousel
- `components/pascoa/SectionKitConfeiteiro.jsx` — Single hero gift card
- `components/pascoa/WhatsAppCTA.jsx` — Sticky bottom CTA
- `components/pascoa/FooterPascoa.jsx` — Minimal Easter footer
- `app/pascoa/page.jsx` — Page shell composing all sections
- `public/illustrations/easter-egg.svg` — Placeholder SVG
- `public/illustrations/mini-egg.svg` — Placeholder SVG
- `public/illustrations/chocolate-bar.svg` — Placeholder SVG
- `public/illustrations/gift-box.svg` — Placeholder SVG
- `public/illustrations/spoon.svg` — Placeholder SVG

### Modify
- `app/globals.css` — Add glass primitives, `--color-dark-cocoa` token, scrollbar-hide utility
- `DESIGN.md` — Replace Glassmorphism subsection with Glass System documentation

---

## Task 1: Glass Design System Primitives

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Add dark-cocoa token and glass utility classes to globals.css**

In the `:root` block, add after `--color-cream`:
```css
--color-dark-cocoa: #1A1212;       /* Dark anchor - hero, overlays */
```

In the `@theme inline` block, add:
```css
--color-dark-cocoa: #1A1212;
```

After the `/* ANIMATIONS */` section (before `/* RESPONSIVE IMAGES */`), add:

```css
/* ============================================
   GLASS SYSTEM
   ============================================ */

@layer utilities {
  .glass-card {
    background: color-mix(in srgb, var(--color-soft-pink) 60%, transparent);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow: 0 8px 32px rgba(69, 38, 39, 0.08);
    border-radius: 1rem;
  }

  .glass-surface {
    background: color-mix(in srgb, var(--color-soft-pink) 50%, transparent);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    box-shadow: 0 1px 12px rgba(69, 38, 39, 0.06);
  }

  .glass-pill {
    background: color-mix(in srgb, var(--color-warm-white) 20%, transparent);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 4px 16px rgba(69, 38, 39, 0.06);
    border-radius: 9999px;
  }

  .glass-overlay {
    background: color-mix(in srgb, var(--color-dark-cocoa) 70%, transparent);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    color: var(--color-soft-pink);
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

- [ ] **Step 2: Verify the dev server compiles without errors**

Run: `cd /Users/brunomartinsneto/adocurinha_website && npx next build 2>&1 | head -20`
Expected: Build succeeds or only unrelated warnings

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat(design-system): add glass primitives and dark-cocoa token"
```

---

## Task 2: i18n System (Translations + Context)

**Files:**
- Create: `lib/translations.js`
- Create: `components/pascoa/LanguageContext.jsx`

- [ ] **Step 1: Create translations.js**

Create `lib/translations.js`:

```js
export const translations = {
  pt: {
    // Hero
    hero_title: "Pascoa 2026",
    hero_subtitle: "Colecao de Pascoa",

    // Sections
    section_ovos_colher: "Ovos de Colher",
    section_mini_ovos: "Mini Ovos",
    section_barra: "Barras de Chocolate",
    section_kit: "Kit Confeiteiro",

    // Ovos de Colher (5 flavors) - placeholder names
    ovo_flavor_1_name: "Brigadeiro Classico",
    ovo_flavor_1_desc: "Descricao em breve",
    ovo_flavor_2_name: "Ninho com Nutella",
    ovo_flavor_2_desc: "Descricao em breve",
    ovo_flavor_3_name: "Pistache",
    ovo_flavor_3_desc: "Descricao em breve",
    ovo_flavor_4_name: "Churros",
    ovo_flavor_4_desc: "Descricao em breve",
    ovo_flavor_5_name: "Maracuja",
    ovo_flavor_5_desc: "Descricao em breve",

    // Mini Ovos (2 types)
    mini_ovo_1_name: "Mini Ovo Tradicional",
    mini_ovo_1_desc: "Descricao em breve",
    mini_ovo_2_name: "Mini Ovo Gourmet",
    mini_ovo_2_desc: "Descricao em breve",

    // Barra de Chocolate (3 flavors)
    barra_1_name: "Barra ao Leite",
    barra_1_desc: "Descricao em breve",
    barra_2_name: "Barra Meio Amargo",
    barra_2_desc: "Descricao em breve",
    barra_3_name: "Barra Branca",
    barra_3_desc: "Descricao em breve",

    // Kit Confeiteiro
    kit_name: "Kit Confeiteiro",
    kit_desc: "Descricao em breve",
    kit_whats_inside: "O que vem no kit",
    kit_perfect_for: "Perfeito para criancas e familias",
    kit_item_chocolate: "Chocolate",
    kit_item_mold: "Forma",
    kit_item_sprinkles: "Confeitos",
    kit_item_whisk: "Fouet",

    // CTA
    cta: "Fazer Pedido",
    cta_whatsapp_message: "Ola! Quero fazer um pedido de Pascoa 🐣",

    // Footer
    footer_delivery: "Windermere, FL e regiao",
    footer_badge: "Pascoa 2026",

    // Prices (placeholders)
    price_placeholder: "Preco em breve",

    // Language names
    lang_pt: "PT",
    lang_en: "EN",
    lang_es: "ES",
  },
  en: {
    hero_title: "Easter 2026",
    hero_subtitle: "Easter Collection",

    section_ovos_colher: "Spoon Eggs",
    section_mini_ovos: "Mini Eggs",
    section_barra: "Chocolate Bars",
    section_kit: "Confectioner Kit",

    ovo_flavor_1_name: "Classic Brigadeiro",
    ovo_flavor_1_desc: "Description coming soon",
    ovo_flavor_2_name: "Ninho & Nutella",
    ovo_flavor_2_desc: "Description coming soon",
    ovo_flavor_3_name: "Pistachio",
    ovo_flavor_3_desc: "Description coming soon",
    ovo_flavor_4_name: "Churros",
    ovo_flavor_4_desc: "Description coming soon",
    ovo_flavor_5_name: "Passion Fruit",
    ovo_flavor_5_desc: "Description coming soon",

    mini_ovo_1_name: "Traditional Mini Egg",
    mini_ovo_1_desc: "Description coming soon",
    mini_ovo_2_name: "Gourmet Mini Egg",
    mini_ovo_2_desc: "Description coming soon",

    barra_1_name: "Milk Chocolate Bar",
    barra_1_desc: "Description coming soon",
    barra_2_name: "Dark Chocolate Bar",
    barra_2_desc: "Description coming soon",
    barra_3_name: "White Chocolate Bar",
    barra_3_desc: "Description coming soon",

    kit_name: "Confectioner Kit",
    kit_desc: "Description coming soon",
    kit_whats_inside: "What's inside",
    kit_perfect_for: "Perfect for kids and families",
    kit_item_chocolate: "Chocolate",
    kit_item_mold: "Mold",
    kit_item_sprinkles: "Sprinkles",
    kit_item_whisk: "Whisk",

    cta: "Order Now",
    cta_whatsapp_message: "Hi! I'd like to place an Easter order 🐣",

    footer_delivery: "Windermere, FL & surroundings",
    footer_badge: "Easter 2026",

    price_placeholder: "Price coming soon",

    lang_pt: "PT",
    lang_en: "EN",
    lang_es: "ES",
  },
  es: {
    hero_title: "Pascua 2026",
    hero_subtitle: "Coleccion de Pascua",

    section_ovos_colher: "Huevos de Cuchara",
    section_mini_ovos: "Mini Huevos",
    section_barra: "Barras de Chocolate",
    section_kit: "Kit Confitero",

    ovo_flavor_1_name: "Brigadeiro Clasico",
    ovo_flavor_1_desc: "Descripcion proximamente",
    ovo_flavor_2_name: "Ninho con Nutella",
    ovo_flavor_2_desc: "Descripcion proximamente",
    ovo_flavor_3_name: "Pistacho",
    ovo_flavor_3_desc: "Descripcion proximamente",
    ovo_flavor_4_name: "Churros",
    ovo_flavor_4_desc: "Descripcion proximamente",
    ovo_flavor_5_name: "Maracuya",
    ovo_flavor_5_desc: "Descripcion proximamente",

    mini_ovo_1_name: "Mini Huevo Tradicional",
    mini_ovo_1_desc: "Descripcion proximamente",
    mini_ovo_2_name: "Mini Huevo Gourmet",
    mini_ovo_2_desc: "Descripcion proximamente",

    barra_1_name: "Barra con Leche",
    barra_1_desc: "Descripcion proximamente",
    barra_2_name: "Barra Semiamarga",
    barra_2_desc: "Descripcion proximamente",
    barra_3_name: "Barra Blanca",
    barra_3_desc: "Descripcion proximamente",

    kit_name: "Kit Confitero",
    kit_desc: "Descripcion proximamente",
    kit_whats_inside: "Que incluye",
    kit_perfect_for: "Perfecto para ninos y familias",
    kit_item_chocolate: "Chocolate",
    kit_item_mold: "Molde",
    kit_item_sprinkles: "Chispas",
    kit_item_whisk: "Batidor",

    cta: "Hacer Pedido",
    cta_whatsapp_message: "Hola! Quiero hacer un pedido de Pascua 🐣",

    footer_delivery: "Windermere, FL y alrededores",
    footer_badge: "Pascua 2026",

    price_placeholder: "Precio proximamente",

    lang_pt: "PT",
    lang_en: "EN",
    lang_es: "ES",
  },
};
```

- [ ] **Step 2: Create LanguageContext.jsx**

Create `components/pascoa/LanguageContext.jsx`:

```jsx
"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext(null);

const SUPPORTED_LANGS = ["pt", "en", "es"];

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("pt");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang && SUPPORTED_LANGS.includes(urlLang)) {
      setLangState(urlLang);
    }
  }, []);

  const setLang = useCallback((newLang) => {
    if (!SUPPORTED_LANGS.includes(newLang)) return;
    setLangState(newLang);
    const url = new URL(window.location);
    url.searchParams.set("lang", newLang);
    window.history.replaceState({}, "", url);
  }, []);

  const t = useCallback(
    (key) => {
      return translations[lang]?.[key] ?? translations.pt?.[key] ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
```

- [ ] **Step 3: Commit**

```bash
git add lib/translations.js components/pascoa/LanguageContext.jsx
git commit -m "feat(i18n): add translations and LanguageContext for PT/EN/ES"
```

---

## Task 3: Placeholder SVG Illustrations

**Files:**
- Create: `public/illustrations/easter-egg.svg`
- Create: `public/illustrations/mini-egg.svg`
- Create: `public/illustrations/chocolate-bar.svg`
- Create: `public/illustrations/gift-box.svg`
- Create: `public/illustrations/spoon.svg`

- [ ] **Step 1: Create illustrations directory and placeholder SVGs**

Create `public/illustrations/easter-egg.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 160" fill="none">
  <ellipse cx="60" cy="90" rx="45" ry="60" fill="#EFE6E3" stroke="#452627" stroke-width="2"/>
  <path d="M25 75 Q60 65 95 75" stroke="#735C00" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/>
  <path d="M30 95 Q60 85 90 95" stroke="#735C00" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/>
  <ellipse cx="60" cy="60" rx="8" ry="6" fill="#735C00" opacity="0.3"/>
</svg>
```

Create `public/illustrations/mini-egg.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80" fill="none">
  <ellipse cx="30" cy="45" rx="22" ry="30" fill="#EFE6E3" stroke="#452627" stroke-width="1.5"/>
  <ellipse cx="70" cy="45" rx="22" ry="30" fill="#F5ECE9" stroke="#452627" stroke-width="1.5"/>
  <circle cx="30" cy="38" r="4" fill="#735C00" opacity="0.3"/>
  <circle cx="70" cy="38" r="4" fill="#735C00" opacity="0.3"/>
</svg>
```

Create `public/illustrations/chocolate-bar.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 160" fill="none">
  <rect x="10" y="10" width="60" height="140" rx="6" fill="#452627" stroke="#735C00" stroke-width="1.5"/>
  <line x1="10" y1="50" x2="70" y2="50" stroke="#735C00" stroke-width="0.75" opacity="0.5"/>
  <line x1="10" y1="90" x2="70" y2="90" stroke="#735C00" stroke-width="0.75" opacity="0.5"/>
  <line x1="10" y1="130" x2="70" y2="130" stroke="#735C00" stroke-width="0.75" opacity="0.5"/>
  <line x1="40" y1="10" x2="40" y2="150" stroke="#735C00" stroke-width="0.75" opacity="0.5"/>
</svg>
```

Create `public/illustrations/gift-box.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" fill="none">
  <rect x="20" y="50" width="100" height="80" rx="8" fill="#EFE6E3" stroke="#452627" stroke-width="2"/>
  <rect x="15" y="40" width="110" height="20" rx="4" fill="#F5ECE9" stroke="#452627" stroke-width="2"/>
  <line x1="70" y1="40" x2="70" y2="130" stroke="#735C00" stroke-width="2"/>
  <path d="M70 40 Q50 20 40 30 Q35 40 70 40" fill="#735C00" opacity="0.4"/>
  <path d="M70 40 Q90 20 100 30 Q105 40 70 40" fill="#735C00" opacity="0.4"/>
</svg>
```

Create `public/illustrations/spoon.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 120" fill="none">
  <ellipse cx="20" cy="25" rx="14" ry="20" fill="#EFE6E3" stroke="#452627" stroke-width="1.5"/>
  <rect x="17" y="44" width="6" height="70" rx="3" fill="#EFE6E3" stroke="#452627" stroke-width="1.5"/>
</svg>
```

- [ ] **Step 2: Commit**

```bash
git add public/illustrations/
git commit -m "feat(illustrations): add placeholder SVGs for Easter menu sections"
```

---

## Task 4: HeroStatic Component

**Files:**
- Create: `components/pascoa/HeroStatic.jsx`

- [ ] **Step 1: Create HeroStatic.jsx**

Create `components/pascoa/HeroStatic.jsx`:

```jsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { CaretDown } from "@phosphor-icons/react";
import Image from "next/image";
import { forwardRef } from "react";

const HeroStatic = forwardRef(function HeroStatic(props, ref) {
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Dark cocoa background */}
      <div className="absolute inset-0 bg-[var(--color-dark-cocoa)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Easter egg illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/illustrations/easter-egg.svg"
            alt=""
            width={80}
            height={107}
            className="opacity-60"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-noto font-medium text-soft-pink tracking-tight leading-[0.9]"
          style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}
        >
          {t("hero_title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl font-manrope font-light tracking-wide text-soft-pink/70 max-w-sm"
        >
          {t("hero_subtitle")}
        </motion.p>

        {/* Brand mark */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 text-sm font-manrope font-light tracking-[0.2em] uppercase text-gold/60"
        >
          A Docurinha
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <CaretDown size={24} weight="duotone" className="text-soft-pink/40" />
        </motion.div>
      </motion.div>
    </section>
  );
});

export default HeroStatic;
```

- [ ] **Step 2: Commit**

```bash
git add components/pascoa/HeroStatic.jsx
git commit -m "feat(pascoa): add static hero component"
```

---

## Task 5: LanguageToggle Component

**Files:**
- Create: `components/pascoa/LanguageToggle.jsx`

- [ ] **Step 1: Create LanguageToggle.jsx**

Create `components/pascoa/LanguageToggle.jsx`:

```jsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "./LanguageContext";

export default function LanguageToggle({ heroRef }) {
  const { lang, setLang, t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!heroRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show toggle when hero is NOT intersecting (scrolled past)
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [heroRef]);

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="glass-surface rounded-full px-1 py-1">
        <Tabs value={lang} onValueChange={setLang}>
          <TabsList className="bg-transparent gap-0">
            <TabsTrigger
              value="pt"
              className="rounded-full px-4 py-1.5 text-xs font-manrope font-semibold tracking-wider data-[state=active]:bg-white/30 data-[state=active]:text-plum text-plum/50"
            >
              {t("lang_pt")}
            </TabsTrigger>
            <TabsTrigger
              value="en"
              className="rounded-full px-4 py-1.5 text-xs font-manrope font-semibold tracking-wider data-[state=active]:bg-white/30 data-[state=active]:text-plum text-plum/50"
            >
              {t("lang_en")}
            </TabsTrigger>
            <TabsTrigger
              value="es"
              className="rounded-full px-4 py-1.5 text-xs font-manrope font-semibold tracking-wider data-[state=active]:bg-white/30 data-[state=active]:text-plum text-plum/50"
            >
              {t("lang_es")}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/pascoa/LanguageToggle.jsx
git commit -m "feat(pascoa): add language toggle with IntersectionObserver reveal"
```

---

## Task 6: ProductCard Component

**Files:**
- Create: `components/pascoa/ProductCard.jsx`

- [ ] **Step 1: Create ProductCard.jsx**

Create `components/pascoa/ProductCard.jsx`:

```jsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function ProductCard({
  nameKey,
  descKey,
  priceKey,
  image,
  index = 0,
  className = "",
  aspectRatio = "aspect-[4/5]",
}) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className={`glass-card p-5 flex flex-col gap-4 ${className}`}
    >
      {/* Image placeholder */}
      <div
        className={`${aspectRatio} w-full rounded-xl bg-cream overflow-hidden flex items-center justify-center`}
      >
        {image ? (
          <img
            src={image}
            alt={t(nameKey)}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-plum/20 font-manrope text-sm">foto</span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="font-noto text-xl font-medium text-plum leading-tight">
          {t(nameKey)}
        </h3>
        <p className="font-manrope text-sm font-light text-plum/60 leading-relaxed">
          {t(descKey)}
        </p>
      </div>

      {/* Price */}
      <div className="mt-auto pt-2">
        <span className="glass-pill inline-block px-4 py-1.5 text-xs font-manrope font-semibold text-plum/70 tracking-wide">
          {t(priceKey || "price_placeholder")}
        </span>
      </div>
    </motion.div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/pascoa/ProductCard.jsx
git commit -m "feat(pascoa): add reusable glass ProductCard component"
```

---

## Task 7: SectionOvosDeColher (5 flavors)

**Files:**
- Create: `components/pascoa/SectionOvosDeColher.jsx`

- [ ] **Step 1: Create SectionOvosDeColher.jsx**

Create `components/pascoa/SectionOvosDeColher.jsx`:

```jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import ProductCard from "./ProductCard";

const flavors = [
  { nameKey: "ovo_flavor_1_name", descKey: "ovo_flavor_1_desc" },
  { nameKey: "ovo_flavor_2_name", descKey: "ovo_flavor_2_desc" },
  { nameKey: "ovo_flavor_3_name", descKey: "ovo_flavor_3_desc" },
  { nameKey: "ovo_flavor_4_name", descKey: "ovo_flavor_4_desc" },
  { nameKey: "ovo_flavor_5_name", descKey: "ovo_flavor_5_desc" },
];

export default function SectionOvosDeColher() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-5 max-w-lg mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
        className="mb-10 flex items-center gap-4"
      >
        <Image
          src="/illustrations/spoon.svg"
          alt=""
          width={24}
          height={72}
          className="opacity-50"
        />
        <div>
          <h2 className="font-noto text-3xl md:text-4xl font-semibold text-plum tracking-tight leading-none mb-1">
            {t("section_ovos_colher")}
          </h2>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-6">
        {flavors.map((flavor, index) => (
          <ProductCard
            key={flavor.nameKey}
            nameKey={flavor.nameKey}
            descKey={flavor.descKey}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/pascoa/SectionOvosDeColher.jsx
git commit -m "feat(pascoa): add Ovos de Colher section with 5 flavor cards"
```

---

## Task 8: SectionMiniOvos (2 types)

**Files:**
- Create: `components/pascoa/SectionMiniOvos.jsx`

- [ ] **Step 1: Create SectionMiniOvos.jsx**

Create `components/pascoa/SectionMiniOvos.jsx`:

```jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import ProductCard from "./ProductCard";

const types = [
  { nameKey: "mini_ovo_1_name", descKey: "mini_ovo_1_desc" },
  { nameKey: "mini_ovo_2_name", descKey: "mini_ovo_2_desc" },
];

export default function SectionMiniOvos() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-5 max-w-lg mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
        className="mb-10 flex items-center gap-4"
      >
        <Image
          src="/illustrations/mini-egg.svg"
          alt=""
          width={48}
          height={40}
          className="opacity-50"
        />
        <h2 className="font-noto text-3xl md:text-4xl font-semibold text-plum tracking-tight leading-none">
          {t("section_mini_ovos")}
        </h2>
      </motion.div>

      {/* 2-column grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 gap-4"
      >
        {types.map((type, index) => (
          <ProductCard
            key={type.nameKey}
            nameKey={type.nameKey}
            descKey={type.descKey}
            index={0}
            aspectRatio="aspect-square"
          />
        ))}
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/pascoa/SectionMiniOvos.jsx
git commit -m "feat(pascoa): add Mini Ovos section with 2-column grid"
```

---

## Task 9: SectionBarraChocolate (3 flavors — carousel)

**Files:**
- Create: `components/pascoa/SectionBarraChocolate.jsx`

- [ ] **Step 1: Create SectionBarraChocolate.jsx**

Create `components/pascoa/SectionBarraChocolate.jsx`:

```jsx
"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

const bars = [
  { nameKey: "barra_1_name", descKey: "barra_1_desc" },
  { nameKey: "barra_2_name", descKey: "barra_2_desc" },
  { nameKey: "barra_3_name", descKey: "barra_3_desc" },
];

export default function SectionBarraChocolate() {
  const { t } = useLanguage();
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cards.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5, root: scrollRef.current }
    );

    cards.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 px-5 max-w-lg mx-auto md:max-w-3xl">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
        className="mb-10 flex items-center gap-4"
      >
        <Image
          src="/illustrations/chocolate-bar.svg"
          alt=""
          width={32}
          height={64}
          className="opacity-50"
        />
        <h2 className="font-noto text-3xl md:text-4xl font-semibold text-plum tracking-tight leading-none">
          {t("section_barra")}
        </h2>
      </motion.div>

      {/* Mobile: Horizontal carousel */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Carousel (mobile) */}
        <div
          ref={scrollRef}
          className="md:hidden flex gap-4 overflow-x-scroll snap-x snap-mandatory scrollbar-hide pb-4 -mx-5 px-5"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {bars.map((bar, index) => (
            <div
              key={bar.nameKey}
              ref={(el) => (cardRefs.current[index] = el)}
              className="glass-card p-4 flex flex-col gap-3 snap-center min-w-[75vw] max-w-[75vw] shrink-0"
            >
              <div className="aspect-[3/5] w-full rounded-xl bg-cream flex items-center justify-center">
                <span className="text-plum/20 font-manrope text-sm">foto</span>
              </div>
              <h3 className="font-noto text-lg font-medium text-plum leading-tight">
                {t(bar.nameKey)}
              </h3>
              <p className="font-manrope text-sm font-light text-plum/60 leading-relaxed">
                {t(bar.descKey)}
              </p>
              <span className="glass-pill inline-block w-fit px-4 py-1.5 text-xs font-manrope font-semibold text-plum/70 tracking-wide mt-auto">
                {t("price_placeholder")}
              </span>
            </div>
          ))}
        </div>

        {/* Dot indicators (mobile) */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
          {bars.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-plum w-6" : "bg-plum/20"
              }`}
            />
          ))}
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {bars.map((bar, index) => (
            <div
              key={bar.nameKey}
              className="glass-card p-4 flex flex-col gap-3"
            >
              <div className="aspect-[3/5] w-full rounded-xl bg-cream flex items-center justify-center">
                <span className="text-plum/20 font-manrope text-sm">foto</span>
              </div>
              <h3 className="font-noto text-lg font-medium text-plum leading-tight">
                {t(bar.nameKey)}
              </h3>
              <p className="font-manrope text-sm font-light text-plum/60 leading-relaxed">
                {t(bar.descKey)}
              </p>
              <span className="glass-pill inline-block w-fit px-4 py-1.5 text-xs font-manrope font-semibold text-plum/70 tracking-wide mt-auto">
                {t("price_placeholder")}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/pascoa/SectionBarraChocolate.jsx
git commit -m "feat(pascoa): add Barra de Chocolate carousel with snap scroll and dot indicators"
```

---

## Task 10: SectionKitConfeiteiro (1 product — hero card)

**Files:**
- Create: `components/pascoa/SectionKitConfeiteiro.jsx`

- [ ] **Step 1: Create SectionKitConfeiteiro.jsx**

Create `components/pascoa/SectionKitConfeiteiro.jsx`:

```jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { CookingPot, Whisk, Sparkle, Drop } from "@phosphor-icons/react";

const kitItems = [
  { icon: Drop, key: "kit_item_chocolate" },
  { icon: CookingPot, key: "kit_item_mold" },
  { icon: Sparkle, key: "kit_item_sprinkles" },
  { icon: Whisk, key: "kit_item_whisk" },
];

export default function SectionKitConfeiteiro() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-5 max-w-lg mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
        className="mb-10 flex items-center gap-4"
      >
        <Image
          src="/illustrations/gift-box.svg"
          alt=""
          width={48}
          height={48}
          className="opacity-50"
        />
        <h2 className="font-noto text-3xl md:text-4xl font-semibold text-plum tracking-tight leading-none">
          {t("section_kit")}
        </h2>
      </motion.div>

      {/* Hero card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="glass-card p-6 flex flex-col gap-6"
      >
        {/* Image placeholder */}
        <div className="aspect-[4/3] w-full rounded-xl bg-cream flex items-center justify-center">
          <span className="text-plum/20 font-manrope text-sm">foto</span>
        </div>

        {/* Kit name */}
        <h3 className="font-noto text-2xl font-medium text-plum leading-tight">
          {t("kit_name")}
        </h3>

        {/* Description */}
        <p className="font-manrope text-sm font-light text-plum/60 leading-relaxed">
          {t("kit_desc")}
        </p>

        {/* What's inside */}
        <div>
          <p className="font-manrope text-xs font-semibold text-plum/40 uppercase tracking-widest mb-3">
            {t("kit_whats_inside")}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {kitItems.map(({ icon: Icon, key }) => (
              <div
                key={key}
                className="flex items-center gap-2 text-plum/70"
              >
                <Icon size={20} weight="duotone" className="text-gold/70" />
                <span className="font-manrope text-sm">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Perfect for */}
        <p className="font-manrope text-xs text-plum/40 italic">
          {t("kit_perfect_for")}
        </p>

        {/* Price */}
        <span className="glass-pill inline-block w-fit px-4 py-1.5 text-xs font-manrope font-semibold text-plum/70 tracking-wide">
          {t("price_placeholder")}
        </span>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/pascoa/SectionKitConfeiteiro.jsx
git commit -m "feat(pascoa): add Kit Confeiteiro hero card section"
```

---

## Task 11: WhatsAppCTA + FooterPascoa

**Files:**
- Create: `components/pascoa/WhatsAppCTA.jsx`
- Create: `components/pascoa/FooterPascoa.jsx`

- [ ] **Step 1: Create WhatsAppCTA.jsx**

Create `components/pascoa/WhatsAppCTA.jsx`:

```jsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";
import { useLanguage } from "./LanguageContext";

export default function WhatsAppCTA({ heroRef }) {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!heroRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [heroRef]);

  // Phase 1: placeholder href. Replace with real wa.me link in Phase 3.
  const whatsappUrl = "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pb-[env(safe-area-inset-bottom)] ${
        !visible ? "pointer-events-none" : ""
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-pill flex items-center gap-2 px-6 py-3 text-plum font-manrope text-sm font-semibold tracking-wide hover:bg-white/30 transition-colors duration-300"
      >
        <WhatsappLogo size={20} weight="duotone" className="text-green-600" />
        {t("cta")}
      </a>
    </motion.div>
  );
}
```

- [ ] **Step 2: Create FooterPascoa.jsx**

Create `components/pascoa/FooterPascoa.jsx`:

```jsx
"use client";

import { InstagramLogo } from "@phosphor-icons/react";
import { useLanguage } from "./LanguageContext";

export default function FooterPascoa() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-5 flex flex-col items-center gap-4 text-center">
      {/* Brand mark */}
      <p className="font-noto text-2xl font-medium text-plum">A Docurinha</p>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/aadocurinha"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-plum/50 hover:text-plum transition-colors"
      >
        <InstagramLogo size={20} weight="duotone" />
        <span className="font-manrope text-sm">@aadocurinha</span>
      </a>

      {/* Delivery note */}
      <p className="font-manrope text-xs text-plum/40">
        {t("footer_delivery")}
      </p>

      {/* Badge */}
      <span className="glass-pill px-4 py-1 text-xs font-manrope font-semibold text-plum/50 tracking-widest uppercase mt-2">
        {t("footer_badge")}
      </span>
    </footer>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/pascoa/WhatsAppCTA.jsx components/pascoa/FooterPascoa.jsx
git commit -m "feat(pascoa): add WhatsApp CTA and Easter footer"
```

---

## Task 12: Page Shell — Assemble Everything

**Files:**
- Create: `app/pascoa/page.jsx`

- [ ] **Step 1: Create app/pascoa/page.jsx**

Create `app/pascoa/page.jsx`:

```jsx
"use client";

import { useRef } from "react";
import { LanguageProvider } from "@/components/pascoa/LanguageContext";
import HeroStatic from "@/components/pascoa/HeroStatic";
import LanguageToggle from "@/components/pascoa/LanguageToggle";
import SectionOvosDeColher from "@/components/pascoa/SectionOvosDeColher";
import SectionMiniOvos from "@/components/pascoa/SectionMiniOvos";
import SectionBarraChocolate from "@/components/pascoa/SectionBarraChocolate";
import SectionKitConfeiteiro from "@/components/pascoa/SectionKitConfeiteiro";
import WhatsAppCTA from "@/components/pascoa/WhatsAppCTA";
import FooterPascoa from "@/components/pascoa/FooterPascoa";

export default function PascoaPage() {
  const heroRef = useRef(null);

  return (
    <LanguageProvider>
      {/* Fixed gradient background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, #1A1212, #FFF8F6 35%, #F5ECE9 70%, #EFE6E3)",
        }}
      />

      {/* Language toggle (appears after hero scroll) */}
      <LanguageToggle heroRef={heroRef} />

      {/* Page content */}
      <main>
        <HeroStatic ref={heroRef} />
        <SectionOvosDeColher />
        <SectionMiniOvos />
        <SectionBarraChocolate />
        <SectionKitConfeiteiro />
        <FooterPascoa />
      </main>

      {/* Sticky WhatsApp CTA */}
      <WhatsAppCTA heroRef={heroRef} />
    </LanguageProvider>
  );
}
```

- [ ] **Step 2: Run the dev server and verify the page loads at /pascoa**

Run: `cd /Users/brunomartinsneto/adocurinha_website && npx next dev`
Open: `http://localhost:3000/pascoa`
Expected: Page renders with hero, all 4 sections, language toggle appears on scroll, WhatsApp CTA appears on scroll, footer visible at bottom.

- [ ] **Step 3: Commit**

```bash
git add app/pascoa/page.jsx
git commit -m "feat(pascoa): assemble Easter menu page with all sections"
```

---

## Task 13: Update DESIGN.md with Glass System

**Files:**
- Modify: `DESIGN.md`

- [ ] **Step 1: Replace the "Glassmorphism & Texture" subsection in DESIGN.md**

Replace the existing "### Glassmorphism & Texture" subsection under section 2 with a full "## Glass System" section (can be a new section 8, or replace the subsection in-place). Document:
- The four glass primitives (`glass-card`, `glass-surface`, `glass-pill`, `glass-overlay`) with their CSS definitions
- The fixed gradient background pattern
- Performance guardrails (max 3-4 blur layers on screen)
- That Phosphor Duotone is now the primary icon set (Lucide to be phased out)

- [ ] **Step 2: Commit**

```bash
git add DESIGN.md
git commit -m "docs(design-system): add Glass System section and Phosphor icon guidance"
```

---

## Task 14: Visual QA and Polish

- [ ] **Step 1: Test language toggle switches all content correctly**

Open `/pascoa`, scroll past hero, click EN → verify all section titles, product names, CTA text, and footer switch to English. Click ES → verify Spanish. Click PT → verify Portuguese returns.

- [ ] **Step 2: Test mobile viewport**

Use browser dev tools to test at 375px width (iPhone SE) and 390px width (iPhone 14). Verify:
- Hero fills viewport
- Cards are full-width with proper padding
- Barra de Chocolate carousel scrolls horizontally with snap
- Dot indicators update when swiping
- WhatsApp CTA has bottom safe area padding
- Language toggle is centered and not clipped

- [ ] **Step 3: Test `?lang=` query param**

Open `/pascoa?lang=en` → page should load in English.
Open `/pascoa?lang=es` → page should load in Spanish.
Open `/pascoa?lang=xx` → page should default to Portuguese.

- [ ] **Step 4: Commit any fixes**

```bash
git add -A
git commit -m "fix(pascoa): visual QA polish and responsive fixes"
```

---

## Summary

| Task | Component | Key Files |
|------|-----------|-----------|
| 1 | Glass Design System | `globals.css` |
| 2 | i18n System | `lib/translations.js`, `components/pascoa/LanguageContext.jsx` |
| 3 | SVG Illustrations | `public/illustrations/*.svg` |
| 4 | Hero | `components/pascoa/HeroStatic.jsx` |
| 5 | Language Toggle | `components/pascoa/LanguageToggle.jsx` |
| 6 | Product Card | `components/pascoa/ProductCard.jsx` |
| 7 | Ovos de Colher | `components/pascoa/SectionOvosDeColher.jsx` |
| 8 | Mini Ovos | `components/pascoa/SectionMiniOvos.jsx` |
| 9 | Barra de Chocolate | `components/pascoa/SectionBarraChocolate.jsx` |
| 10 | Kit Confeiteiro | `components/pascoa/SectionKitConfeiteiro.jsx` |
| 11 | WhatsApp CTA + Footer | `components/pascoa/WhatsAppCTA.jsx`, `components/pascoa/FooterPascoa.jsx` |
| 12 | Page Assembly | `app/pascoa/page.jsx` |
| 13 | DESIGN.md Update | `DESIGN.md` |
| 14 | Visual QA | All files |
