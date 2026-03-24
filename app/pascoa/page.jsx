"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { LanguageProvider, useLanguage } from "@/components/pascoa/LanguageContext";
import LanguageToggle from "@/components/pascoa/LanguageToggle";
// LogoSVG available but using PNG per user preference
// import LogoSVG from "@/components/pascoa-v2/LogoSVG";
import { menuPascoa } from "@/lib/pascoa-menu";
import {
  WhatsappLogo,
  InstagramLogo,
  Heart,
  ArrowRight,
  Snowflake,
  Truck,
  CreditCard,
  CalendarCheck,
  Diamond,
} from "@phosphor-icons/react";

/* ------------------------------------------------------------------ */
/*  Design Tokens                                                      */
/* ------------------------------------------------------------------ */
const C = {
  cream: "#FFF8F4",
  creamDark: "#F5EDE8",
  linen: "#FAF3EE",
  gold: "#C9A96E",
  goldLight: "#E8D5A3",
  goldDark: "#9E7C3F",
  plum: "#452627",
  plumLight: "#745660",
  plumMuted: "#504444",
  rose: "#F0B5C0",
  roseLight: "#FCD6E2",
  rosePale: "#FFF0F3",
  white: "#FFFFFF",
  onDark: "#FFF8F4",
};

const FONT_SERIF = "'Noto Serif', Georgia, serif";
const FONT_SANS = "'Manrope', system-ui, sans-serif";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */
const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

/* ------------------------------------------------------------------ */
/*  Animated Section wrapper                                           */
/* ------------------------------------------------------------------ */
function AnimatedSection({ children, className = "", style = {}, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/*  Gold Divider                                                       */
/* ------------------------------------------------------------------ */
function GoldDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex items-center justify-center" style={{ padding: "2.5rem 0" }}>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: "1px",
          width: "60px",
          background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
        }}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ margin: "0 0.75rem" }}
      >
        <Diamond size={10} weight="fill" style={{ color: C.gold }} />
      </motion.div>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: "1px",
          width: "60px",
          background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Gold Shimmer Text                                                  */
/* ------------------------------------------------------------------ */
function ShimmerText({ children, as: Tag = "span", style = {}, className = "" }) {
  return (
    <Tag
      className={className}
      style={{
        ...style,
        background: `linear-gradient(105deg, ${C.gold} 0%, ${C.goldLight} 40%, ${C.gold} 50%, ${C.goldLight} 60%, ${C.gold} 100%)`,
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: "shimmer 3s ease-in-out infinite",
      }}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/*  Gold Particles                                                     */
/* ------------------------------------------------------------------ */
function GoldParticles({ count = 12 }) {
  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.35 + 0.1,
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: C.goldLight,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Content                                                       */
/* ------------------------------------------------------------------ */
function PascoaV2Content() {
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

  const badgeText = (type) => t(`badge_${type}`) || type;

  return (
    <div
      style={{
        backgroundColor: C.cream,
        fontFamily: FONT_SANS,
        color: C.plum,
        minHeight: "100vh",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
      }}
    >
      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 200% center; }
          50% { background-position: 0% center; }
        }
        .carousel-scroll::-webkit-scrollbar { display: none; }
        .carousel-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ======================================== */}
      {/* NAVIGATION                               */}
      {/* ======================================== */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed w-full z-50 flex justify-between items-center transition-all duration-300"
        style={{
          top: 0,
          left: 0,
          padding: scrolled ? "0.75rem 1.5rem" : "1rem 1.5rem",
          backgroundColor: scrolled ? "rgba(255, 248, 244, 0.9)" : "rgba(255, 248, 244, 0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: scrolled ? "0 1px 0 rgba(201,169,110,0.15)" : "none",
        }}
      >
        <img src="/logo.png" alt="A Docurinha" style={{ height: scrolled ? "30px" : "36px", width: "auto", transition: "height 0.3s" }} />
        <LanguageToggle />
      </motion.nav>

      {/* ======================================== */}
      {/* HERO — v1 editorial style (light)        */}
      {/* ======================================== */}
      <main style={{ paddingTop: "5.5rem", paddingBottom: "6rem", maxWidth: "480px" }} className="mx-auto">
        <header
          ref={heroRef}
          className="flex flex-col items-center text-center"
          style={{ padding: "2rem 1.5rem 3rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ShimmerText
              as="span"
              className="uppercase font-bold tracking-widest block"
              style={{
                fontFamily: FONT_SANS,
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                marginBottom: "1rem",
              }}
            >
              {t("hero_subtitle")}
            </ShimmerText>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold tracking-tight"
            style={{
              fontFamily: FONT_SERIF,
              color: C.plum,
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              lineHeight: 1.05,
              marginBottom: "1.25rem",
            }}
          >
            {t("hero_title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            style={{
              color: C.plumMuted,
              fontSize: "1rem",
              maxWidth: "28rem",
              lineHeight: 1.7,
              marginBottom: "1.75rem",
            }}
          >
            {t("hero_description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex items-center"
            style={{
              gap: "0.5rem",
              backgroundColor: C.creamDark,
              padding: "0.7rem 1.25rem",
              borderRadius: "9999px",
              boxShadow: "0 2px 10px rgba(69,38,39,0.05)",
            }}
          >
            <Heart size={16} weight="fill" style={{ color: C.rose }} />
            <span
              className="italic font-semibold"
              style={{ fontFamily: FONT_SERIF, color: C.plum, fontSize: "0.8rem" }}
            >
              {t("hand_rolled")}
            </span>
          </motion.div>
        </header>

        {/* ======================================== */}
        {/* SECTION: OVOS DE COLHER                  */}
        {/* ======================================== */}
        <div style={{ padding: "0 1.5rem" }}>
          <AnimatedSection>
            <SectionHeader
              title={t("section_ovos_colher")}
              subtitle={t("ovo_details")}
              badge={t("ovo_edition")}
              price={menuPascoa.ovosDeColher.priceFormatted}
            />
          </AnimatedSection>

          {/* Hero: box product photo */}
          <AnimatedSection delay={0.1}>
            <div
              className="overflow-hidden"
              style={{ borderRadius: "1rem", marginTop: "1.5rem" }}
            >
              <img
                src={menuPascoa.ovosDeColher.boxImage}
                alt={t("section_ovos_colher")}
                className="w-full h-auto"
                style={{ display: "block", borderRadius: "1rem" }}
              />
            </div>
          </AnimatedSection>

          {/* Flavor illustrations — carousel */}
          <AnimatedSection delay={0.2}>
            <p
              className="uppercase font-bold tracking-widest text-center"
              style={{
                fontFamily: FONT_SANS,
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                color: C.plumLight,
                marginTop: "2rem",
                marginBottom: "0.75rem",
              }}
            >
              {t("ovo_choose_flavors")}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <FlavorCarousel items={menuPascoa.ovosDeColher.items} t={t} badgeText={badgeText} />
          </AnimatedSection>
        </div>

        <GoldDivider />

        {/* ======================================== */}
        {/* SECTION: MINI OVINHOS, DUO & BRIGADEIROS */}
        {/* ======================================== */}
        <div style={{ padding: "0 1.5rem" }}>
          <AnimatedSection>
            <div className="grid grid-cols-2" style={{ gap: "0.75rem" }}>
              {/* Mini Ovinhos — caixa com 6 */}
              <div>
                <SectionHeader
                  title={t("section_mini_ovinhos")}
                  subtitle={t("mini_ovinhos_subtitle")}
                  price={menuPascoa.miniOvinhos.priceFormatted}
                  small
                />
                <div style={{ marginTop: "1rem" }}>
                  <ProductCard
                    item={menuPascoa.miniOvinhos.items[0]}
                    t={t}
                  />
                </div>
              </div>

              {/* Mini Ovinho Duo — unidade */}
              <div>
                <SectionHeader
                  title={t("section_mini_ovinho_duo")}
                  subtitle={t("mini_ovinho_duo_subtitle")}
                  price={menuPascoa.miniOvinhoDuo.priceFormatted}
                  small
                />
                <div style={{ marginTop: "1rem" }}>
                  <ProductCard
                    item={menuPascoa.miniOvinhoDuo.items[0]}
                    t={t}
                  />
                </div>
              </div>

              {/* Brigadeiros */}
              <div className="col-span-2">
                <SectionHeader
                  title={t("section_brigadeiros")}
                  subtitle={t("brigadeiros_subtitle")}
                  price={menuPascoa.brigadeiros.priceFormatted}
                  small
                />
                <div style={{ marginTop: "1rem", maxWidth: "50%", margin: "1rem auto 0" }}>
                  <ProductCard
                    item={menuPascoa.brigadeiros.items[0]}
                    t={t}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <GoldDivider />

        {/* ======================================== */}
        {/* SECTION: BARRAS TRUFADAS — Carousel      */}
        {/* ======================================== */}
        <div style={{ padding: "0 1.5rem" }}>
          <AnimatedSection>
            <SectionHeader
              title={t("section_barras")}
              subtitle={t("barra_details")}
              price={menuPascoa.barrasTrufadas.priceFormatted}
            />
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <BarrasCarousel items={menuPascoa.barrasTrufadas.items} t={t} />
          </AnimatedSection>
        </div>

        <GoldDivider />

        {/* ======================================== */}
        {/* SECTION: KIT CONFEITEIRO                 */}
        {/* ======================================== */}
        <div style={{ padding: "0 1.5rem" }}>
          <AnimatedSection>
            <SectionHeader
              title={t("section_kit")}
              price={menuPascoa.kitConfeiteiro.priceFormatted}
            />
            <div style={{ marginTop: "1rem" }}>
              <ProductCard
                item={menuPascoa.kitConfeiteiro.items[0]}
                t={t}
                aspectRatio="4/5"
              />
            </div>
          </AnimatedSection>
        </div>

        <GoldDivider />

        {/* ======================================== */}
        {/* SECTION: INFORMACOES IMPORTANTES         */}
        {/* ======================================== */}
        <div style={{ padding: "0 1.5rem" }}>
          <AnimatedSection>
            <div
              style={{
                backgroundColor: C.plum,
                borderRadius: "1.5rem",
                padding: "2rem 1.5rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <GoldParticles count={8} />

              <div style={{ position: "relative", zIndex: 2 }}>
                <ShimmerText
                  as="h3"
                  className="font-bold"
                  style={{
                    fontFamily: FONT_SERIF,
                    fontSize: "1.3rem",
                    marginBottom: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  {t("info_title")}
                </ShimmerText>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2"
                  style={{ gap: "1rem" }}
                >
                  <InfoItem icon={CalendarCheck} text={t("info_pickup")} />
                  <InfoItem icon={CreditCard} text={t("info_payment")} />
                  <InfoItem icon={Truck} text={t("info_delivery")} />
                  <InfoItem icon={Diamond} text={t("info_chocolate")} />
                  <InfoItem icon={Snowflake} text={t("info_storage")} />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ======================================== */}
        {/* FOOTER                                   */}
        {/* ======================================== */}
        <AnimatedSection>
          <footer
            className="flex flex-col items-center text-center"
            style={{ padding: "3rem 1.5rem 2rem", gap: "1rem" }}
          >
            <img src="/logo-text.png" alt="A Docurinha" style={{ height: "44px", width: "auto" }} />

            <a
              href="https://www.instagram.com/aadocurinha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition-all duration-200"
              style={{
                gap: "0.5rem",
                color: C.plumLight,
                textDecoration: "none",
                fontSize: "0.85rem",
              }}
            >
              <InstagramLogo size={18} weight="duotone" />
              <span>@aadocurinha</span>
            </a>

            <div
              style={{
                width: "50px",
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${C.gold}, transparent)`,
              }}
            />

            <p style={{ fontSize: "0.75rem", color: C.plumLight, margin: 0 }}>
              {t("footer_delivery")}
            </p>

            <ShimmerText
              as="span"
              className="uppercase font-semibold tracking-widest"
              style={{ fontSize: "0.6rem" }}
            >
              {t("footer_badge")}
            </ShimmerText>
          </footer>
        </AnimatedSection>
      </main>

      {/* ======================================== */}
      {/* FLOATING WHATSAPP CTA                    */}
      {/* ======================================== */}
      <AnimatePresence>
        {showWhatsApp && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed z-50"
            style={{
              bottom: "1.5rem",
              right: "1.5rem",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center cursor-pointer font-bold"
              style={{
                gap: "0.5rem",
                background: `linear-gradient(135deg, ${C.gold}, ${C.goldDark})`,
                color: C.white,
                border: "none",
                borderRadius: "9999px",
                padding: "0.85rem 1.5rem",
                fontSize: "0.85rem",
                fontFamily: FONT_SANS,
                boxShadow: `0 8px 30px ${C.gold}44`,
              }}
              onClick={() => {
                const msg = encodeURIComponent(t("cta_whatsapp_message"));
                window.open(`https://wa.me/14072321740?text=${msg}`, "_blank");
              }}
            >
              <WhatsappLogo size={20} weight="fill" />
              {t("cta")}
              <ArrowRight size={14} weight="bold" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section Header                                                     */
/* ------------------------------------------------------------------ */
function SectionHeader({ title, subtitle, badge: badgeLabel, price, small }) {
  return (
    <div style={{ textAlign: "center", marginBottom: small ? 0 : "0.25rem" }}>
      {badgeLabel && (
        <ShimmerText
          as="span"
          className="uppercase font-bold tracking-widest block"
          style={{
            fontFamily: FONT_SANS,
            fontSize: "0.55rem",
            letterSpacing: "0.25em",
            marginBottom: "0.5rem",
          }}
        >
          {badgeLabel}
        </ShimmerText>
      )}
      <h2
        className="font-bold"
        style={{
          fontFamily: FONT_SERIF,
          fontSize: small ? "1.15rem" : "clamp(1.5rem, 5vw, 2.25rem)",
          color: C.plum,
          marginBottom: "0.3rem",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: C.plumLight, fontSize: "0.75rem", marginBottom: "0.15rem" }}>
          {subtitle}
        </p>
      )}
      {price && (
        <p className="font-semibold" style={{ color: C.gold, fontSize: "0.85rem", margin: 0 }}>
          {price}
        </p>
      )}
      {!price && !small && (
        <p className="font-semibold" style={{ color: C.gold, fontSize: "0.85rem", margin: 0 }}>
          {/* Price TBD for ovos */}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Product Card                                                       */
/* ------------------------------------------------------------------ */
function ProductCard({ item, t, badge: badgeLabel, showBadge, aspectRatio = "4/5" }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden cursor-pointer"
      style={{ borderRadius: "1rem" }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio,
          backgroundColor: C.creamDark,
          borderRadius: "1rem",
        }}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={t(item.nameKey)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span style={{ color: `${C.plum}20`, fontSize: "0.8rem" }}>foto</span>
          </div>
        )}

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${C.plum}AA 0%, ${C.plum}33 30%, transparent 55%)`,
            borderRadius: "1rem",
          }}
        />

        {/* Badge */}
        {showBadge && badgeLabel && (
          <span
            className="absolute font-bold uppercase tracking-widest"
            style={{
              top: "0.6rem",
              left: "0.6rem",
              backgroundColor: `${C.gold}EE`,
              color: C.white,
              padding: "0.15rem 0.5rem",
              borderRadius: "9999px",
              fontSize: "0.45rem",
              letterSpacing: "0.08em",
            }}
          >
            {badgeLabel}
          </span>
        )}

        {/* Name overlay */}
        <div className="absolute bottom-0 left-0 right-0" style={{ padding: "0.75rem" }}>
          <h4
            className="font-bold"
            style={{
              fontFamily: FONT_SERIF,
              color: C.onDark,
              fontSize: "clamp(0.8rem, 2.5vw, 1.1rem)",
              lineHeight: 1.2,
              marginBottom: "0.15rem",
            }}
          >
            {t(item.nameKey)}
          </h4>
          <p
            className="hidden sm:block"
            style={{
              color: `${C.onDark}BB`,
              fontSize: "0.65rem",
              lineHeight: 1.3,
            }}
          >
            {t(item.descKey)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  AutoCarousel — infinite auto-scrolling carousel                    */
/*  Duplicates items for seamless infinite loop.                       */
/*  Auto-advances every `interval` ms. Pauses on touch/hover.         */
/* ------------------------------------------------------------------ */
function AutoCarousel({ children, itemCount, interval = 3000, cardWidth = "70%", maxCardWidth = "280px", className = "" }) {
  const scrollRef = useRef(null);
  const isPaused = useRef(false);
  const currentIndex = useRef(0);

  // Duplicate items 3x for infinite illusion
  const totalSets = 3;

  // Helper: compute the scroll position that centers a given card index
  const getCenteredScroll = (el, index) => {
    const card = el.querySelector("[data-carousel-card]");
    if (!card) return 0;
    const gap = 12;
    const cardW = card.offsetWidth + gap;
    const containerW = el.offsetWidth;
    // Center the card: card's left edge minus the offset to center it
    return index * cardW - (containerW - card.offsetWidth) / 2;
  };

  // On mount, scroll to the middle set so we can scroll both ways
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Jump to middle set without animation
    el.scrollLeft = getCenteredScroll(el, itemCount);
    currentIndex.current = itemCount;
  }, [itemCount]);

  // Auto-advance
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const timer = setInterval(() => {
      if (isPaused.current) return;

      currentIndex.current += 1;
      const targetScroll = getCenteredScroll(el, currentIndex.current);

      el.scrollTo({ left: targetScroll, behavior: "smooth" });

      // If we've scrolled past 2nd set, snap back to 1st set
      setTimeout(() => {
        if (currentIndex.current >= itemCount * 2) {
          currentIndex.current = itemCount;
          el.scrollLeft = getCenteredScroll(el, itemCount);
        }
      }, 600);
    }, interval);

    return () => clearInterval(timer);
  }, [itemCount, interval]);

  // Pause on touch
  const handleTouchStart = () => { isPaused.current = true; };
  const handleTouchEnd = () => {
    // Resume after a short delay so user can finish swiping
    setTimeout(() => { isPaused.current = false; }, 2000);
  };
  const handleMouseEnter = () => { isPaused.current = true; };
  const handleMouseLeave = () => { isPaused.current = false; };

  // Sync currentIndex when user manually scrolls
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-carousel-card]");
    if (!card) return;
    const gap = 12;
    const cardW = card.offsetWidth + gap;
    const containerW = el.offsetWidth;
    const centerOffset = (containerW - card.offsetWidth) / 2;
    currentIndex.current = Math.round((el.scrollLeft + centerOffset) / cardW);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={scrollRef}
        className={`carousel-scroll flex overflow-x-auto snap-x snap-mandatory ${className}`}
        style={{ gap: "0.75rem", paddingBottom: "0.5rem" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onScroll={handleScroll}
      >
        {/* Render 3 copies for infinite loop */}
        {Array.from({ length: totalSets }).map((_, setIdx) => (
          children(setIdx)
        ))}
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center" style={{ gap: "0.35rem", marginTop: "1rem" }}>
        {Array.from({ length: itemCount }).map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: "5px",
              height: "5px",
              backgroundColor: C.gold,
              opacity: 0.3,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Flavor Carousel wrapper                                            */
/* ------------------------------------------------------------------ */
function FlavorCarousel({ items, t, badgeText }) {
  return (
    <AutoCarousel itemCount={items.length} interval={3500} cardWidth="65%" maxCardWidth="260px">
      {(setIdx) =>
        items.map((ovo) => (
          <div
            key={`${ovo.id}-${setIdx}`}
            data-carousel-card
            className="flex-shrink-0 snap-center"
            style={{ width: "65%", maxWidth: "260px" }}
          >
            <ProductCard
              item={ovo}
              t={t}
              badge={badgeText(ovo.badge)}
              showBadge
              aspectRatio="4/5"
            />
          </div>
        ))
      }
    </AutoCarousel>
  );
}

/* ------------------------------------------------------------------ */
/*  Barras Carousel wrapper                                            */
/* ------------------------------------------------------------------ */
function BarrasCarousel({ items, t }) {
  return (
    <div style={{ marginTop: "1.5rem" }}>
      <AutoCarousel itemCount={items.length} interval={4000}>
        {(setIdx) =>
          items.map((bar) => (
            <div
              key={`${bar.id}-${setIdx}`}
              data-carousel-card
              className="flex-shrink-0 snap-center"
              style={{ width: "70%", maxWidth: "280px" }}
            >
              <div
                className="group relative overflow-hidden cursor-pointer"
                style={{ borderRadius: "1rem" }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: "1/1",
                    backgroundColor: C.creamDark,
                    borderRadius: "1rem",
                  }}
                >
                  <img
                    src={bar.image}
                    alt={t(bar.nameKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    style={{ objectPosition: "center 40%" }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${C.plum}BB 0%, ${C.plum}44 35%, transparent 60%)`,
                      borderRadius: "1rem",
                    }}
                  />

                  {/* Flavor label */}
                  <div className="absolute bottom-0 left-0 right-0" style={{ padding: "0.75rem" }}>
                    <h4
                      className="font-bold"
                      style={{
                        fontFamily: FONT_SERIF,
                        color: C.onDark,
                        fontSize: "1.1rem",
                        lineHeight: 1.2,
                        marginBottom: "0.2rem",
                      }}
                    >
                      {t(bar.nameKey)}
                    </h4>
                    <p
                      style={{
                        color: `${C.onDark}BB`,
                        fontSize: "0.7rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {t(bar.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </AutoCarousel>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Info Item                                                          */
/* ------------------------------------------------------------------ */
function InfoItem({ icon: Icon, text }) {
  return (
    <div className="flex items-start" style={{ gap: "0.6rem" }}>
      <Icon size={16} weight="duotone" style={{ color: C.gold, flexShrink: 0, marginTop: "0.15rem" }} />
      <p style={{ color: `${C.onDark}CC`, fontSize: "0.75rem", lineHeight: 1.5, margin: 0 }}>
        {text}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Export                                                         */
/* ------------------------------------------------------------------ */
export default function PascoaV2Page() {
  return (
    <LanguageProvider>
      <PascoaV2Content />
    </LanguageProvider>
  );
}
