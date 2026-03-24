"use client";

import { useState, useEffect, useRef } from "react";
import { LanguageProvider, useLanguage } from "@/components/pascoa/LanguageContext";
import LanguageToggle from "@/components/pascoa/LanguageToggle";
import { menuPascoa } from "@/lib/pascoa-menu";
import {
  WhatsappLogo,
  InstagramLogo,
  Heart,
  Plus,
  ArrowRight,
} from "@phosphor-icons/react";

/* ------------------------------------------------------------------ */
/*  Color tokens                                                       */
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
/*  Badge helpers                                                      */
/* ------------------------------------------------------------------ */
const badgeColors = {
  bestseller: { bg: C.tertiary, text: C.white },
  new: { bg: C.secondaryFixed, text: C.primaryContainer },
  popular: { bg: C.secondaryContainer, text: C.primaryContainer },
  tropical: { bg: "#E9C349", text: C.primaryContainer },
};

/* ------------------------------------------------------------------ */
/*  Inner page content                                                 */
/* ------------------------------------------------------------------ */
function PascoaContent() {
  const { t, lang } = useLanguage();
  const heroRef = useRef(null);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

  const badgeLabel = (type) => t(`badge_${type}`) || type;

  /** Renders a price tag or "Preço em breve" */
  const PriceTag = ({ category }) => {
    if (!category.priceFormatted) {
      return (
        <span className="font-bold" style={{ color: C.secondary, fontSize: "0.9rem" }}>
          {t("price_soon")}
        </span>
      );
    }
    return (
      <span className="font-bold" style={{ color: C.secondary, fontSize: "0.9rem" }}>
        {category.priceFormatted}
        {category.priceLabel && (
          <span style={{ fontWeight: 400, fontSize: "0.75rem", marginLeft: "0.25rem", color: C.onSurfaceVariant }}>
            / {t(`price_${category.priceLabel === "caixa com 4" ? "box" : "unit"}`)}
          </span>
        )}
      </span>
    );
  };

  return (
    <div className="min-h-screen" style={{
      backgroundColor: C.surface,
      fontFamily: FONT_BODY,
      color: C.onSurface,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat",
      backgroundSize: "250px 250px",
    }}>

      {/* ======================================== */}
      {/* TOP NAVIGATION                           */}
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
        {/* Left: brand logo */}
        <img src="/logo.png" alt="A Docurinha" style={{ height: "38px", width: "auto" }} />

        {/* Right: language toggle */}
        <LanguageToggle />
      </nav>

      {/* ======================================== */}
      {/* MAIN CONTENT                             */}
      {/* ======================================== */}
      <main style={{ paddingTop: "6rem", paddingBottom: "8rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" }} className="max-w-7xl mx-auto">

        {/* ======================================== */}
        {/* HERO HEADER                              */}
        {/* ======================================== */}
        <header
          ref={heroRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between"
          style={{ marginBottom: "4rem", gap: "2rem", textAlign: "center" }}
        >
          <div style={{ maxWidth: "42rem" }} className="lg:text-left">
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

            <h2
              className="font-bold tracking-tight leading-tight"
              style={{
                fontFamily: FONT_HEADLINE,
                color: C.primary,
                fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
                margin: "0 0 1.5rem 0",
              }}
            >
              {t("hero_title")}
            </h2>

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
              {t("hero_description")}
            </p>
          </div>

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
              {t("hand_rolled")}
            </p>
          </div>
        </header>

        {/* ======================================== */}
        {/* SECTION: OVOS DE COLHER                  */}
        {/* ======================================== */}
        <section style={{ marginBottom: "5rem" }}>
          <div className="flex items-center justify-between" style={{ marginBottom: "0.75rem" }}>
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
              {t("ovo_edition")}
            </span>
          </div>

          {/* Details pill */}
          <p style={{ color: C.onSurfaceVariant, fontSize: "0.85rem", marginBottom: "2rem" }}>
            {t("ovo_details")}
            {menuPascoa.ovosDeColher.priceFormatted && (
              <> · <strong>{menuPascoa.ovosDeColher.priceFormatted}</strong></>
            )}
          </p>

          {/* 2-column grid + 5th spanning full */}
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.5rem" }}>
            {menuPascoa.ovosDeColher.items.slice(0, 4).map((ovo, i) => (
              <OvoHeroCard key={ovo.id} ovo={ovo} index={i} t={t} badgeLabel={badgeLabel} />
            ))}
            <div className="md:col-span-2">
              <OvoHeroCard ovo={menuPascoa.ovosDeColher.items[4]} index={4} t={t} badgeLabel={badgeLabel} fullWidth />
            </div>
          </div>
        </section>

        {/* ======================================== */}
        {/* SECTION: OVINHO CASADINHO                */}
        {/* ======================================== */}
        <section style={{ marginBottom: "5rem" }}>
          <div className="flex items-center justify-between" style={{ marginBottom: "3rem" }}>
            <h3
              className="text-3xl font-bold"
              style={{ fontFamily: FONT_HEADLINE, color: C.primary, margin: 0 }}
            >
              {t("section_ovinho_casadinho")}
            </h3>
            <div
              className="hidden md:block"
              style={{ height: "1px", flex: "1 1 0", margin: "0 2rem", backgroundColor: `${C.outlineVariant}33` }}
            />
            <PriceTag category={menuPascoa.ovinhoCasadinho} />
          </div>

          <div style={{ maxWidth: "24rem", margin: "0 auto" }}>
            {menuPascoa.ovinhoCasadinho.items.map((item) => (
              <JewelCard key={item.id} item={item} t={t} category={menuPascoa.ovinhoCasadinho} />
            ))}
          </div>
        </section>

        {/* ======================================== */}
        {/* SECTION: BARRAS TRUFADAS                 */}
        {/* ======================================== */}
        <section style={{ marginBottom: "5rem" }}>
          <div className="flex items-center justify-between" style={{ marginBottom: "0.75rem" }}>
            <h3
              className="text-3xl font-bold"
              style={{ fontFamily: FONT_HEADLINE, color: C.primary, margin: 0 }}
            >
              {t("section_barras")}
            </h3>
            <div
              className="hidden md:block"
              style={{ height: "1px", flex: "1 1 0", margin: "0 2rem", backgroundColor: `${C.outlineVariant}33` }}
            />
            <PriceTag category={menuPascoa.barrasTrufadas} />
          </div>

          <p style={{ color: C.onSurfaceVariant, fontSize: "0.85rem", marginBottom: "2rem" }}>
            {t("barra_details")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "3rem" }}>
            {menuPascoa.barrasTrufadas.items.map((bar) => (
              <JewelCard key={bar.id} item={bar} t={t} tall category={menuPascoa.barrasTrufadas} />
            ))}
          </div>
        </section>

        {/* ======================================== */}
        {/* SECTION: BRIGADEIROS                     */}
        {/* ======================================== */}
        <section style={{ marginBottom: "5rem" }}>
          <div className="flex items-center justify-between" style={{ marginBottom: "3rem" }}>
            <h3
              className="text-3xl font-bold"
              style={{ fontFamily: FONT_HEADLINE, color: C.primary, margin: 0 }}
            >
              {t("section_brigadeiros")}
            </h3>
            <div
              className="hidden md:block"
              style={{ height: "1px", flex: "1 1 0", margin: "0 2rem", backgroundColor: `${C.outlineVariant}33` }}
            />
            <PriceTag category={menuPascoa.brigadeiros} />
          </div>

          <div style={{ maxWidth: "24rem", margin: "0 auto" }}>
            {menuPascoa.brigadeiros.items.map((item) => (
              <JewelCard key={item.id} item={item} t={t} category={menuPascoa.brigadeiros} />
            ))}
          </div>
        </section>

        {/* ======================================== */}
        {/* FOOTER                                   */}
        {/* ======================================== */}
        <footer className="flex flex-col items-center text-center" style={{ padding: "3rem 0", gap: "1rem" }}>
          <img src="/logo-text.png" alt="A Docurinha" style={{ height: "48px", width: "auto" }} />

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
            const msg = encodeURIComponent(t("cta_whatsapp_message"));
            window.open(`https://wa.me/14072321740?text=${msg}`, "_blank");
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
/*  OVO HERO CARD                                                      */
/* ------------------------------------------------------------------ */
function OvoHeroCard({ ovo, index, t, badgeLabel, fullWidth }) {
  const bgTones = [C.surfaceHigh, C.surfaceLow, C.surfaceContainer, C.surfaceHighest, C.surfaceHigh];
  const bgColor = bgTones[index % bgTones.length];
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
      {/* Gradient overlay */}
      <div
        className="absolute z-10"
        style={{
          inset: 0,
          background: `linear-gradient(to top, ${C.primary}CC, ${C.primary}33 40%, transparent 70%)`,
          borderRadius: "2rem",
        }}
      />

      {/* Product image */}
      <div className="absolute flex items-center justify-center" style={{ inset: 0, borderRadius: "2rem" }}>
        {ovo.image ? (
          <img
            src={ovo.image}
            alt={t(ovo.nameKey)}
            className="w-full h-full object-cover"
            style={{ borderRadius: "2rem" }}
          />
        ) : (
          <span style={{ color: `${C.primary}18`, fontSize: "0.9rem", fontFamily: FONT_BODY }}>foto</span>
        )}
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
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

        <h4
          className="text-3xl font-bold"
          style={{
            fontFamily: FONT_HEADLINE,
            color: C.surface,
            margin: "0 0 0.5rem 0",
          }}
        >
          {t(ovo.nameKey)}
        </h4>

        <p style={{ color: C.surfaceHighest, fontSize: "0.85rem", maxWidth: "18rem", lineHeight: 1.5, marginBottom: "1.25rem" }}>
          {t(ovo.descKey)}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  JEWEL CARD (circular image)                                        */
/* ------------------------------------------------------------------ */
function JewelCard({ item, t, tall, category }) {
  return (
    <div className="flex flex-col items-center group">
      <div
        className="relative w-full overflow-hidden flex items-center justify-center transition-all duration-300"
        style={{
          borderRadius: "2rem",
          backgroundColor: C.surfaceLow,
          marginBottom: "1.25rem",
          aspectRatio: tall ? "3/5" : "1/1",
        }}
      >
        {/* Image or placeholder */}
        {item.image ? (
          <img
            src={item.image}
            alt={t(item.nameKey)}
            className="w-full h-full object-cover"
            style={{ borderRadius: "2rem" }}
          />
        ) : (
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
        )}

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
        {category?.priceFormatted && (
          <span className="font-bold" style={{ color: C.secondary, fontSize: "0.9rem" }}>
            {category.priceFormatted}
          </span>
        )}
        {!category?.priceFormatted && (
          <span className="font-bold" style={{ color: C.secondary, fontSize: "0.9rem" }}>
            {t("price_soon")}
          </span>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE EXPORT                                                        */
/* ------------------------------------------------------------------ */
export default function PascoaPage() {
  return (
    <LanguageProvider>
      <PascoaContent />
    </LanguageProvider>
  );
}
