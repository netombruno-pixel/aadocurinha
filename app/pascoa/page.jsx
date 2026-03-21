"use client";

import { useState, useEffect, useRef } from "react";
import { LanguageProvider, useLanguage } from "@/components/pascoa/LanguageContext";
import {
  WhatsappLogo,
  InstagramLogo,
  Heart,
  Plus,
  CookingPot,
  ForkKnife,
  Sparkle,
  Drop,
  Package,
  ArrowRight,
} from "@phosphor-icons/react";

/* ------------------------------------------------------------------ */
/*  Color tokens (inline-style friendly)                              */
/* ------------------------------------------------------------------ */
const C = {
  primary: "#452627",
  secondary: "#745660",
  tertiary: "#735C00",
  surface: "#FFF8F6",
  surfaceLow: "#FBF2EF",
  surfaceContainer: "#F5ECE9",
  surfaceHigh: "#EFE6E3",
  surfaceHighest: "#E9E1DE",
  onSurface: "#1E1B19",
  onSurfaceVariant: "#504444",
  primaryContainer: "#5E3C3C",
  secondaryContainer: "#FCD6E2",
  secondaryFixed: "#FFD9E4",
  outlineVariant: "#D4C2C2",
  white: "#FFFFFF",
};

const FONT_HEADLINE = "'Noto Serif', serif";
const FONT_BODY = "'Manrope', sans-serif";

/* ------------------------------------------------------------------ */
/*  Product data                                                      */
/* ------------------------------------------------------------------ */
const ovosDeColher = [
  { nameKey: "ovo_flavor_1_name", descKey: "ovo_flavor_1_desc", badge: "bestseller" },
  { nameKey: "ovo_flavor_2_name", descKey: "ovo_flavor_2_desc", badge: "new" },
  { nameKey: "ovo_flavor_3_name", descKey: "ovo_flavor_3_desc", badge: "new" },
  { nameKey: "ovo_flavor_4_name", descKey: "ovo_flavor_4_desc", badge: "popular" },
  { nameKey: "ovo_flavor_5_name", descKey: "ovo_flavor_5_desc", badge: "tropical" },
];

const miniOvos = [
  { nameKey: "mini_ovo_1_name", descKey: "mini_ovo_1_desc" },
  { nameKey: "mini_ovo_2_name", descKey: "mini_ovo_2_desc" },
];

const barras = [
  { nameKey: "barra_1_name", descKey: "barra_1_desc" },
  { nameKey: "barra_2_name", descKey: "barra_2_desc" },
  { nameKey: "barra_3_name", descKey: "barra_3_desc" },
];

const kitItems = [
  { icon: Drop, key: "kit_item_chocolate" },
  { icon: CookingPot, key: "kit_item_mold" },
  { icon: Sparkle, key: "kit_item_sprinkles" },
  { icon: ForkKnife, key: "kit_item_whisk" },
];

/* ------------------------------------------------------------------ */
/*  Badge label helper                                                */
/* ------------------------------------------------------------------ */
const badgeLabels = {
  pt: { bestseller: "Mais Vendido", new: "Novidade", popular: "Popular", tropical: "Tropical", limited: "Edicao Limitada" },
  en: { bestseller: "Best Seller", new: "New Arrival", popular: "Popular", tropical: "Tropical", limited: "Limited Edition" },
  es: { bestseller: "Mas Vendido", new: "Novedad", popular: "Popular", tropical: "Tropical", limited: "Edicion Limitada" },
};

const handRolledLabels = {
  pt: "Feito a mao com amor",
  en: "Hand-rolled daily with love",
  es: "Hecho a mano con amor",
};

const heroDescriptions = {
  pt: "Descubra nossa colecao artesanal de Pascoa. Cada peca e preparada com ingredientes selecionados, sem conservantes artificiais, usando a tradicao brasileira de confeitaria.",
  en: "Discover our artisanal Easter collection. Each piece is crafted with selected ingredients, no artificial preservatives, using the Brazilian confectionery tradition.",
  es: "Descubra nuestra coleccion artesanal de Pascua. Cada pieza esta elaborada con ingredientes seleccionados, sin conservantes artificiales, siguiendo la tradicion confitera brasilena.",
};

const kitDescriptions = {
  pt: "Tudo que voce precisa para criar seus proprios ovos de Pascoa em casa. Perfeito para criancas e familias que querem viver a magia da Pascoa juntos.",
  en: "Everything you need to create your own Easter eggs at home. Perfect for kids and families who want to experience the magic of Easter together.",
  es: "Todo lo que necesitas para crear tus propios huevos de Pascua en casa. Perfecto para ninos y familias que quieren vivir la magia de la Pascua juntos.",
};

/* ------------------------------------------------------------------ */
/*  Inner page content (needs LanguageContext)                        */
/* ------------------------------------------------------------------ */
function PascoaContent() {
  const { t, lang, setLang } = useLanguage();
  const heroRef = useRef(null);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowWhatsApp(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const badgeLabel = (type) => badgeLabels[lang]?.[type] ?? badgeLabels.pt[type];

  return (
    <div className="min-h-screen" style={{
      backgroundColor: C.surface,
      fontFamily: FONT_BODY,
      color: C.onSurface,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '250px 250px',
    }}>
      {/* ======================================== */}
      {/* TOP NAVIGATION — fixed glassmorphism     */}
      {/* ======================================== */}
      <nav
        className="fixed w-full z-50 flex justify-between items-center transition-all duration-300"
        style={{
          top: 0,
          left: 0,
          padding: "1rem 1.5rem",
          backgroundColor: scrolled ? "rgba(255, 248, 246, 0.85)" : "rgba(255, 248, 246, 0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: scrolled ? "0 10px 30px rgba(69,38,39,0.04)" : "none",
        }}
      >
        {/* Left spacer */}
        <div style={{ width: "120px" }} />

        {/* Center brand */}
        <h1
          className="text-2xl font-semibold italic tracking-tight"
          style={{ fontFamily: FONT_HEADLINE, color: C.primary, margin: 0 }}
        >
          A Docurinha
        </h1>

        {/* Right: language toggle */}
        <div className="flex items-center" style={{ gap: "0.25rem", width: "120px", justifyContent: "flex-end" }}>
          {["pt", "en", "es"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className="cursor-pointer uppercase font-bold transition-all duration-200"
              style={{
                fontFamily: FONT_BODY,
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                padding: "0.3rem 0.55rem",
                borderRadius: "9999px",
                border: "none",
                backgroundColor: lang === l ? C.primaryContainer : "transparent",
                color: lang === l ? C.white : C.secondary,
                opacity: lang === l ? 1 : 0.7,
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* ======================================== */}
      {/* MAIN CONTENT                             */}
      {/* ======================================== */}
      <main style={{ paddingTop: "6rem", paddingBottom: "8rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" }} className="max-w-7xl mx-auto">

        {/* ======================================== */}
        {/* HERO HEADER — editorial style            */}
        {/* ======================================== */}
        <header
          ref={heroRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between"
          style={{ marginBottom: "4rem", gap: "2rem", textAlign: "center" }}
        >
          <div style={{ maxWidth: "42rem" }} className="lg:text-left">
            {/* Gold label */}
            <span
              className="font-bold uppercase block"
              style={{
                fontFamily: FONT_BODY,
                color: C.tertiary,
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                marginBottom: "1rem",
              }}
            >
              {t("hero_subtitle")} / Easter Collection
            </span>

            {/* Main title */}
            <h2
              className="font-bold tracking-tight leading-tight"
              style={{
                fontFamily: FONT_HEADLINE,
                color: C.primary,
                fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
                marginBottom: "1.5rem",
                margin: "0 0 1.5rem 0",
              }}
            >
              {t("hero_title")}
            </h2>

            {/* Description */}
            <p
              className="leading-relaxed lg:text-left"
              style={{
                color: C.onSurfaceVariant,
                fontSize: "1.1rem",
                maxWidth: "32rem",
                lineHeight: 1.7,
                margin: "0 auto",
              }}
            >
              {heroDescriptions[lang]}
            </p>
          </div>

          {/* Pill badge */}
          <div
            className="flex items-center"
            style={{
              gap: "0.75rem",
              backgroundColor: C.surfaceLow,
              padding: "1rem 1.5rem",
              borderRadius: "9999px",
              boxShadow: "0 2px 12px rgba(69,38,39,0.06)",
              alignSelf: "center",
            }}
          >
            <Heart size={20} weight="fill" style={{ color: C.secondary }} />
            <p
              className="font-semibold italic"
              style={{ fontFamily: FONT_HEADLINE, color: C.primary, margin: 0, fontSize: "0.9rem" }}
            >
              {handRolledLabels[lang]}
            </p>
          </div>
        </header>

        {/* ======================================== */}
        {/* SECTION: OVOS DE COLHER — Seasonal       */}
        {/* ======================================== */}
        <section style={{ marginBottom: "5rem" }}>
          {/* Section header */}
          <div className="flex items-center justify-between" style={{ marginBottom: "2rem" }}>
            <h3
              className="text-3xl font-bold"
              style={{ fontFamily: FONT_HEADLINE, color: C.primary, margin: 0 }}
            >
              {t("section_ovos_colher")}
            </h3>
            <div
              className="hidden md:block"
              style={{ height: "1px", flex: "1 1 0", margin: "0 2rem", backgroundColor: `${C.outlineVariant}33` }}
            />
            <span
              className="font-semibold hidden md:block"
              style={{ fontFamily: FONT_BODY, color: C.secondary, fontSize: "0.85rem" }}
            >
              {badgeLabel("limited")}
            </span>
          </div>

          {/* 2-column grid of hero cards + 5th spanning full */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.5rem" }}>
            {ovosDeColher.slice(0, 4).map((ovo, i) => (
              <OvoHeroCard key={ovo.nameKey} ovo={ovo} index={i} t={t} lang={lang} badgeLabel={badgeLabel} />
            ))}
            {/* 5th card — full width */}
            <div className="md:col-span-2">
              <OvoHeroCard ovo={ovosDeColher[4]} index={4} t={t} lang={lang} badgeLabel={badgeLabel} fullWidth />
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* SECTION: MINI OVOS — The Classics        */}
        {/* ======================================== */}
        <section style={{ marginBottom: "5rem" }}>
          <div className="flex items-center justify-between" style={{ marginBottom: "3rem" }}>
            <h3
              className="text-3xl font-bold"
              style={{ fontFamily: FONT_HEADLINE, color: C.primary, margin: 0 }}
            >
              {t("section_mini_ovos")}
            </h3>
            <div
              className="hidden md:block"
              style={{ height: "1px", flex: "1 1 0", margin: "0 2rem", backgroundColor: `${C.outlineVariant}33` }}
            />
          </div>

          {/* Jewel layout: 2 centered cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "3rem", maxWidth: "36rem", margin: "0 auto" }}>
            {miniOvos.map((item) => (
              <JewelCard key={item.nameKey} item={item} t={t} />
            ))}
          </div>
        </section>

        {/* ======================================== */}
        {/* SECTION: BARRAS — 3-col grid             */}
        {/* ======================================== */}
        <section style={{ marginBottom: "5rem" }}>
          <div className="flex items-center justify-between" style={{ marginBottom: "3rem" }}>
            <h3
              className="text-3xl font-bold"
              style={{ fontFamily: FONT_HEADLINE, color: C.primary, margin: 0 }}
            >
              {t("section_barra")}
            </h3>
            <div
              className="hidden md:block"
              style={{ height: "1px", flex: "1 1 0", margin: "0 2rem", backgroundColor: `${C.outlineVariant}33` }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "3rem" }}>
            {barras.map((bar) => (
              <JewelCard key={bar.nameKey} item={bar} t={t} tall />
            ))}
          </div>
        </section>

        {/* ======================================== */}
        {/* SECTION: KIT CONFEITEIRO — Bento grid    */}
        {/* ======================================== */}
        <section style={{ marginBottom: "5rem" }}>
          <div className="flex items-center justify-between" style={{ marginBottom: "2rem" }}>
            <h3
              className="text-3xl font-bold"
              style={{ fontFamily: FONT_HEADLINE, color: C.primary, margin: 0 }}
            >
              {t("section_kit")}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.5rem" }}>
            {/* Large card: description + image area */}
            <div
              className="md:col-span-2 flex flex-col md:flex-row items-center"
              style={{
                backgroundColor: C.surfaceContainer,
                borderRadius: "2rem",
                padding: "2.5rem",
                gap: "2rem",
              }}
            >
              <div style={{ flex: 1 }}>
                <h4
                  className="text-3xl font-bold italic"
                  style={{ fontFamily: FONT_HEADLINE, color: C.primary, marginBottom: "1rem" }}
                >
                  {t("kit_name")}
                </h4>
                <p className="leading-relaxed" style={{ color: C.onSurfaceVariant, lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {kitDescriptions[lang]}
                </p>
                {/* What's inside */}
                <p
                  className="font-semibold uppercase"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    color: C.tertiary,
                    marginBottom: "0.75rem",
                  }}
                >
                  {t("kit_whats_inside")}
                </p>
                <div className="grid grid-cols-2" style={{ gap: "0.6rem" }}>
                  {kitItems.map(({ icon: Icon, key }) => (
                    <div key={key} className="flex items-center" style={{ gap: "0.5rem", color: C.onSurfaceVariant }}>
                      <Icon size={18} weight="duotone" style={{ color: C.tertiary }} />
                      <span style={{ fontSize: "0.85rem" }}>{t(key)}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Image placeholder */}
              <div
                className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: C.surfaceHighest, minHeight: "200px" }}
              >
                <span style={{ color: `${C.primary}30`, fontSize: "0.85rem", fontFamily: FONT_BODY }}>foto</span>
              </div>
            </div>

            {/* CTA card */}
            <div
              className="flex flex-col justify-center text-center items-center"
              style={{
                backgroundColor: C.primary,
                borderRadius: "2rem",
                padding: "2.5rem",
              }}
            >
              <Package size={40} weight="duotone" style={{ color: C.secondaryFixed, marginBottom: "1rem" }} />
              <h4
                className="text-2xl font-bold"
                style={{ fontFamily: FONT_HEADLINE, color: C.surface, marginBottom: "1rem" }}
              >
                {t("kit_perfect_for")}
              </h4>
              <p style={{ color: C.surfaceHighest, fontSize: "0.85rem", marginBottom: "2rem", lineHeight: 1.6 }}>
                {t("kit_desc")}
              </p>
              <button
                className="font-bold cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: C.surface,
                  color: C.primary,
                  border: "none",
                  borderRadius: "9999px",
                  padding: "1rem 2rem",
                  fontSize: "0.85rem",
                  fontFamily: FONT_BODY,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                {t("cta")}
              </button>
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* FOOTER                                   */}
        {/* ======================================== */}
        <footer className="flex flex-col items-center text-center" style={{ padding: "3rem 0", gap: "1rem" }}>
          <p
            className="text-2xl font-semibold italic"
            style={{ fontFamily: FONT_HEADLINE, color: C.primary, margin: 0 }}
          >
            A Docurinha
          </p>

          <a
            href="https://www.instagram.com/aadocurinha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition-all duration-200"
            style={{ gap: "0.5rem", color: `${C.primary}88`, textDecoration: "none" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = C.primary; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = `${C.primary}88`; }}
          >
            <InstagramLogo size={20} weight="duotone" />
            <span style={{ fontSize: "0.85rem" }}>@aadocurinha</span>
          </a>

          {/* Separator */}
          <div style={{ width: "8rem", height: "1px", backgroundColor: `${C.primary}15`, margin: "0.5rem 0" }} />

          <p style={{ fontSize: "0.75rem", color: `${C.primary}66`, margin: 0 }}>
            {t("footer_delivery")}
          </p>

          <span
            className="uppercase font-semibold tracking-widest"
            style={{
              fontSize: "0.7rem",
              color: `${C.primary}80`,
              border: `1px solid ${C.primary}20`,
              borderRadius: "9999px",
              padding: "0.3rem 1rem",
              marginTop: "0.5rem",
            }}
          >
            {t("footer_badge")}
          </span>
        </footer>
      </main>

      {/* ======================================== */}
      {/* FLOATING WHATSAPP CTA                    */}
      {/* ======================================== */}
      <div
        className="fixed z-50 transition-all duration-300"
        style={{
          bottom: "1.5rem",
          right: "1.5rem",
          opacity: showWhatsApp ? 1 : 0,
          transform: showWhatsApp ? "translateY(0)" : "translateY(1rem)",
          pointerEvents: showWhatsApp ? "auto" : "none",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <button
          className="flex items-center cursor-pointer font-bold transition-all duration-300"
          style={{
            gap: "0.5rem",
            backgroundColor: C.secondaryContainer,
            color: C.primaryContainer,
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "9999px",
            padding: "0.9rem 1.5rem",
            fontSize: "0.85rem",
            fontFamily: FONT_BODY,
            boxShadow: "0 8px 30px rgba(69,38,39,0.15)",
            backdropFilter: "blur(8px)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          onClick={() => {
            /* Will link to wa.me when phone number is configured */
          }}
        >
          <WhatsappLogo size={22} weight="fill" style={{ color: "#25D366" }} />
          {t("cta")}
          <ArrowRight size={16} weight="bold" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  OVO HERO CARD component (inlined)                                 */
/* ------------------------------------------------------------------ */
function OvoHeroCard({ ovo, index, t, lang, badgeLabel, fullWidth }) {
  const bgTones = [C.surfaceHigh, C.surfaceLow, C.surfaceContainer, C.surfaceHighest, C.surfaceHigh];
  const bgColor = bgTones[index % bgTones.length];

  const badgeColors = {
    bestseller: { bg: C.tertiary, text: C.white },
    new: { bg: C.secondaryFixed, text: C.primaryContainer },
    popular: { bg: C.secondaryContainer, text: C.primaryContainer },
    tropical: { bg: "#E9C349", text: C.primaryContainer },
  };
  const bc = badgeColors[ovo.badge] || badgeColors.new;

  return (
    <div
      className="group relative overflow-hidden flex flex-col justify-end transition-all duration-500 cursor-pointer"
      style={{
        borderRadius: "2rem",
        backgroundColor: bgColor,
        height: fullWidth ? "320px" : "400px",
        padding: "2rem",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 20px 60px rgba(69,38,39,0.12)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
    >
      {/* Gradient overlay from bottom */}
      <div
        className="absolute z-10"
        style={{
          inset: 0,
          background: `linear-gradient(to top, ${C.primary}CC, ${C.primary}33 40%, transparent 70%)`,
          borderRadius: "2rem",
        }}
      />

      {/* Placeholder for future photo */}
      <div
        className="absolute flex items-center justify-center"
        style={{ inset: 0, borderRadius: "2rem" }}
      >
        <span style={{ color: `${C.primary}18`, fontSize: "0.9rem", fontFamily: FONT_BODY }}>foto</span>
      </div>

      {/* Content overlay */}
      <div className="relative z-10" style={{ position: "relative" }}>
        {/* Badge */}
        <span
          className="font-bold uppercase tracking-widest inline-block"
          style={{
            backgroundColor: bc.bg,
            color: bc.text,
            padding: "0.3rem 0.75rem",
            borderRadius: "9999px",
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
            marginBottom: "0.75rem",
          }}
        >
          {badgeLabel(ovo.badge)}
        </span>

        {/* Flavor name */}
        <h4
          className="text-3xl font-bold"
          style={{
            fontFamily: FONT_HEADLINE,
            color: C.surface,
            marginBottom: "0.5rem",
            margin: "0 0 0.5rem 0",
          }}
        >
          {t(ovo.nameKey)}
        </h4>

        {/* Description */}
        <p style={{ color: C.surfaceHighest, fontSize: "0.85rem", maxWidth: "18rem", lineHeight: 1.5, marginBottom: "1.25rem" }}>
          {t(ovo.descKey)}
        </p>

        {/* Price button */}
        <button
          className="font-bold cursor-pointer transition-all duration-300"
          style={{
            backgroundColor: C.surface,
            color: C.primary,
            border: "none",
            borderRadius: "9999px",
            padding: "0.75rem 1.5rem",
            fontSize: "0.8rem",
            fontFamily: FONT_BODY,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          {t("price_placeholder")}
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  JEWEL CARD component (circular image inside rounded square)       */
/* ------------------------------------------------------------------ */
function JewelCard({ item, t, tall }) {
  return (
    <div className="flex flex-col items-center group">
      {/* Image container */}
      <div
        className="relative w-full overflow-hidden flex items-center justify-center transition-all duration-300"
        style={{
          borderRadius: "2rem",
          backgroundColor: C.surfaceLow,
          marginBottom: "1.25rem",
          aspectRatio: tall ? "3/5" : "1/1",
        }}
      >
        {/* Circular inner */}
        <div
          className="rounded-full overflow-hidden flex items-center justify-center"
          style={{
            width: "75%",
            aspectRatio: "1/1",
            backgroundColor: C.surfaceContainer,
            boxShadow: "inset 0 4px 12px rgba(69,38,39,0.06)",
          }}
        >
          <span style={{ color: `${C.primary}20`, fontSize: "0.85rem", fontFamily: FONT_BODY }}>foto</span>
        </div>

        {/* Hover add button */}
        <button
          className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-full cursor-pointer"
          style={{
            bottom: "1rem",
            left: "50%",
            transform: "translateX(-50%) translateY(0.5rem)",
            backgroundColor: C.primaryContainer,
            color: C.white,
            border: "none",
            width: "3rem",
            height: "3rem",
            boxShadow: "0 4px 16px rgba(69,38,39,0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          <Plus size={20} weight="bold" />
        </button>
      </div>

      {/* Text */}
      <div className="text-center">
        <h5
          className="text-xl font-bold"
          style={{ fontFamily: FONT_HEADLINE, color: C.primary, marginBottom: "0.25rem" }}
        >
          {t(item.nameKey)}
        </h5>
        <p style={{ color: C.onSurfaceVariant, fontSize: "0.85rem", marginBottom: "0.5rem" }}>
          {t(item.descKey)}
        </p>
        <span className="font-bold" style={{ color: C.secondary, fontSize: "0.9rem" }}>
          {t("price_placeholder")}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE EXPORT (wraps with LanguageProvider)                         */
/* ------------------------------------------------------------------ */
export default function PascoaPage() {
  return (
    <LanguageProvider>
      <PascoaContent />
    </LanguageProvider>
  );
}
