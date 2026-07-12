"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  WhatsappLogo,
  InstagramLogo,
  Heart,
  ArrowRight,
  ChatCircleDots,
  Gift,
} from "@phosphor-icons/react";
import PageShell, { Reveal, Eyebrow, GoldRule } from "@/components/site/PageShell";
import { useLanguage } from "@/components/pascoa/LanguageContext";
import { waLink, INSTAGRAM_URL, INSTAGRAM_HANDLE, BRIGADEIRO_FLAVORS, flavorImage } from "@/lib/site";

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center"
      style={{ maxWidth: "72rem", padding: "8.5rem 1.5rem 4rem", gap: "3.5rem" }}
    >
      {/* Copy */}
      <div className="flex flex-col items-start text-left">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <Eyebrow style={{ marginBottom: "1.2rem" }}>{t("home_eyebrow")}</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-bold tracking-tight"
          style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.3rem)", lineHeight: 1.06, color: "#452627", marginBottom: "1.4rem", textWrap: "balance" }}
        >
          {t("home_title_1")}
          <br />
          <em className="text-shimmer" style={{ fontStyle: "italic" }}>{t("home_title_2")}</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ color: "#504444", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "32rem", marginBottom: "2rem" }}
        >
          {t("home_description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center"
          style={{ gap: "0.9rem" }}
        >
          <a
            href={waLink(t("home_wa_message"))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-bold transition-transform duration-200 hover:scale-[1.03]"
            style={{
              gap: "0.55rem",
              background: "linear-gradient(135deg, #C9A96E, #9E7C3F)",
              color: "#FFFFFF",
              borderRadius: "9999px",
              padding: "0.95rem 1.7rem",
              fontSize: "0.95rem",
              boxShadow: "0 10px 30px rgba(201,169,110,0.4)",
            }}
          >
            <WhatsappLogo size={20} weight="fill" />
            {t("home_cta_order")}
            <ArrowRight size={15} weight="bold" />
          </a>
          <Link
            href="/brigadeiros"
            className="flex items-center font-semibold transition-all duration-200 hover:opacity-75"
            style={{
              gap: "0.5rem",
              color: "#452627",
              borderRadius: "9999px",
              padding: "0.95rem 1.6rem",
              fontSize: "0.95rem",
              backgroundColor: "rgba(69,38,39,0.05)",
            }}
          >
            {t("home_cta_menu")}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex items-center"
          style={{
            gap: "0.5rem",
            backgroundColor: "#F5EDE8",
            padding: "0.65rem 1.2rem",
            borderRadius: "9999px",
            marginTop: "2.2rem",
            boxShadow: "0 2px 10px rgba(69,38,39,0.05)",
          }}
        >
          <Heart size={15} weight="fill" style={{ color: "#F0B5C0" }} />
          <span className="font-serif italic font-semibold" style={{ color: "#452627", fontSize: "0.82rem" }}>
            {t("home_hero_badge")}
          </span>
        </motion.div>
      </div>

      {/* Imagery */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="relative overflow-hidden" style={{ borderRadius: "2rem", boxShadow: "0 30px 80px rgba(69,38,39,0.18)" }}>
          <img
            src="/brigadeiros-hero.png"
            alt="Brigadeiros gourmet com folha de ouro"
            className="w-full h-auto"
            style={{ display: "block", aspectRatio: "1/1", objectFit: "cover" }}
          />
          {/* Glass caption */}
          <div
            className="absolute"
            style={{
              right: "1rem",
              bottom: "1rem",
              maxWidth: "62%",
              background: "rgba(255,255,255,0.22)",
              backdropFilter: "blur(24px) saturate(1.4)",
              WebkitBackdropFilter: "blur(24px) saturate(1.4)",
              borderRadius: "1.25rem",
              padding: "0.9rem 1.25rem",
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
            }}
          >
            <Gift size={22} weight="duotone" style={{ color: "#FFFFFF", flexShrink: 0 }} />
            <div>
              <p
                className="font-serif font-bold"
                style={{ color: "#FFFFFF", fontSize: "0.95rem", margin: 0, lineHeight: 1.25, textShadow: "0 1px 3px rgba(0,0,0,0.25)" }}
              >
                {t("home_stat_2_num")}
              </p>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.7rem", margin: 0, textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}>
                {t("home_stat_2_label")}
              </p>
            </div>
          </div>
        </div>

        {/* Offset naked cake card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="absolute hidden md:block overflow-hidden"
          style={{
            width: "38%",
            bottom: "-2.5rem",
            left: "-2.5rem",
            borderRadius: "1.5rem",
            boxShadow: "0 20px 50px rgba(69,38,39,0.22)",
            border: "5px solid #FFF8F4",
          }}
        >
          <img
            src="/naked-cake.png"
            alt="Naked cake com frutas frescas"
            className="w-full h-auto"
            style={{ display: "block", aspectRatio: "4/5", objectFit: "cover" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Flavor Marquee                                                     */
/* ------------------------------------------------------------------ */
function FlavorMarquee() {
  const items = [...BRIGADEIRO_FLAVORS, ...BRIGADEIRO_FLAVORS];

  return (
    <div className="relative overflow-hidden" style={{ padding: "2.5rem 0" }}>
      {/* Edge fades */}
      <div
        className="absolute inset-y-0 left-0 z-10 pointer-events-none"
        style={{ width: "8rem", background: "linear-gradient(90deg, #FFF8F4, transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 z-10 pointer-events-none"
        style={{ width: "8rem", background: "linear-gradient(270deg, #FFF8F4, transparent)" }}
      />
      <div className="marquee-track" style={{ gap: "1.2rem" }}>
        {items.map((flavor, i) => (
          <Link
            key={`${flavor.slug}-${i}`}
            href="/brigadeiros"
            className="flex flex-col items-center shrink-0 transition-transform duration-300 hover:-translate-y-1"
            style={{ gap: "0.6rem", width: "7.5rem" }}
          >
            <span
              className="overflow-hidden block"
              style={{
                width: "6.5rem",
                height: "6.5rem",
                borderRadius: "9999px",
                boxShadow: "0 8px 24px rgba(69,38,39,0.12)",
                border: "3px solid #FFFFFF",
              }}
            >
              <img
                src={flavorImage(flavor)}
                alt={flavor.name}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </span>
            <span className="text-center font-semibold" style={{ fontSize: "0.68rem", color: "#745660", lineHeight: 1.25 }}>
              {flavor.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Collections                                                        */
/* ------------------------------------------------------------------ */
function Collections() {
  const { t } = useLanguage();

  const cards = [
    {
      href: "/brigadeiros",
      img: "/brigadeiros-variety.png",
      title: t("col_brig_title"),
      desc: t("col_brig_desc"),
      cta: t("col_brig_cta"),
    },
    {
      href: "/naked-cakes",
      img: "/naked-cake.png",
      title: t("col_cake_title"),
      desc: t("col_cake_desc"),
      cta: t("col_cake_cta"),
    },
    {
      href: "/pascoa",
      img: "/pascoa/box-of-2-easter-eggs.png",
      title: t("col_pascoa_title"),
      desc: t("col_pascoa_desc"),
      cta: t("col_pascoa_cta"),
    },
  ];

  return (
    <Reveal className="mx-auto" style={{ maxWidth: "72rem", padding: "3rem 1.5rem" }}>
      <div className="text-center" style={{ marginBottom: "3rem" }}>
        <Eyebrow style={{ marginBottom: "0.9rem" }}>{t("home_collections_eyebrow")}</Eyebrow>
        <h2
          className="font-serif font-bold tracking-tight"
          style={{ fontSize: "clamp(1.9rem, 4vw, 2.9rem)", color: "#452627" }}
        >
          {t("home_collections_title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.75rem" }}>
        {cards.map((card, i) => (
          <Reveal key={card.href} as="div" delay={i * 0.12}>
            <Link href={card.href} className="group block h-full">
              <div
                className="flex flex-col h-full overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "1.75rem",
                  boxShadow: "0 10px 40px rgba(69,38,39,0.08)",
                }}
              >
                <div className="overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col flex-1" style={{ padding: "1.6rem 1.6rem 1.8rem" }}>
                  <h3 className="font-serif font-bold" style={{ fontSize: "1.4rem", color: "#452627", marginBottom: "0.5rem" }}>
                    {card.title}
                  </h3>
                  <p style={{ color: "#504444", fontSize: "0.9rem", lineHeight: 1.65, margin: "0 0 1.2rem", flex: 1 }}>
                    {card.desc}
                  </p>
                  <span
                    className="flex items-center font-bold uppercase tracking-widest"
                    style={{ gap: "0.45rem", fontSize: "0.68rem", letterSpacing: "0.16em", color: "#9E7C3F" }}
                  >
                    {card.cta}
                    <ArrowRight size={13} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Story band                                                         */
/* ------------------------------------------------------------------ */
function Story() {
  const { t } = useLanguage();

  const stats = [
    { num: t("home_stat_1_num"), label: t("home_stat_1_label") },
    { num: t("home_stat_2_num"), label: t("home_stat_2_label") },
    { num: t("home_stat_3_num"), label: t("home_stat_3_label") },
  ];

  return (
    <Reveal className="mx-auto" style={{ maxWidth: "72rem", padding: "3rem 1.5rem" }}>
      <div
        className="relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center"
        style={{ backgroundColor: "#452627", borderRadius: "2rem", gap: "0" }}
      >
        <div className="overflow-hidden h-full" style={{ minHeight: "320px" }}>
          <img
            src="/premium_hero.png"
            alt="Brigadeiro gourmet"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div style={{ padding: "3rem 2.5rem" }}>
          <Eyebrow style={{ marginBottom: "1rem" }}>{t("home_story_eyebrow")}</Eyebrow>
          <h2
            className="font-serif font-bold tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#FFF8F4", marginBottom: "1.2rem", lineHeight: 1.15 }}
          >
            {t("home_story_title")}
          </h2>
          <p style={{ color: "rgba(255,248,244,0.82)", fontSize: "0.98rem", lineHeight: 1.8, marginBottom: "2.2rem" }}>
            {t("home_story_text")}
          </p>

          <div className="grid grid-cols-3" style={{ gap: "1.25rem" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif font-bold text-shimmer" style={{ fontSize: "1.35rem", margin: 0, lineHeight: 1.2 }}>
                  {s.num}
                </p>
                <p style={{ color: "rgba(255,248,244,0.65)", fontSize: "0.72rem", lineHeight: 1.4, margin: "0.3rem 0 0" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Steps                                                              */
/* ------------------------------------------------------------------ */
function Steps() {
  const { t } = useLanguage();

  const steps = [
    { n: "1", title: t("home_step_1_title"), desc: t("home_step_1_desc") },
    { n: "2", title: t("home_step_2_title"), desc: t("home_step_2_desc") },
    { n: "3", title: t("home_step_3_title"), desc: t("home_step_3_desc") },
  ];

  return (
    <Reveal className="mx-auto" style={{ maxWidth: "60rem", padding: "3.5rem 1.5rem" }}>
      <div className="text-center" style={{ marginBottom: "2.8rem" }}>
        <Eyebrow style={{ marginBottom: "0.9rem" }}>{t("home_steps_eyebrow")}</Eyebrow>
        <h2 className="font-serif font-bold tracking-tight" style={{ fontSize: "clamp(1.9rem, 4vw, 2.7rem)", color: "#452627" }}>
          {t("home_steps_title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "2rem" }}>
        {steps.map((step, i) => (
          <Reveal key={step.n} as="div" delay={i * 0.12} className="text-center flex flex-col items-center">
            <span
              className="font-serif font-bold flex items-center justify-center"
              style={{
                width: "3.4rem",
                height: "3.4rem",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #C9A96E, #9E7C3F)",
                color: "#FFFFFF",
                fontSize: "1.3rem",
                marginBottom: "1.1rem",
                boxShadow: "0 8px 24px rgba(201,169,110,0.35)",
              }}
            >
              {step.n}
            </span>
            <h3 className="font-serif font-bold" style={{ fontSize: "1.15rem", color: "#452627", marginBottom: "0.45rem" }}>
              {step.title}
            </h3>
            <p style={{ color: "#504444", fontSize: "0.88rem", lineHeight: 1.65, margin: 0, maxWidth: "16rem" }}>
              {step.desc}
            </p>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Final CTA band                                                     */
/* ------------------------------------------------------------------ */
function CTABand() {
  const { t } = useLanguage();

  return (
    <Reveal className="mx-auto" style={{ maxWidth: "72rem", padding: "1rem 1.5rem 5rem" }}>
      <div
        className="text-center flex flex-col items-center"
        style={{
          backgroundColor: "#F5EDE8",
          borderRadius: "2rem",
          padding: "3.5rem 2rem",
          boxShadow: "0 10px 40px rgba(69,38,39,0.06)",
        }}
      >
        <ChatCircleDots size={34} weight="duotone" style={{ color: "#C9A96E", marginBottom: "1rem" }} />
        <h2
          className="font-serif font-bold tracking-tight"
          style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.5rem)", color: "#452627", marginBottom: "0.7rem", maxWidth: "34rem", lineHeight: 1.2 }}
        >
          {t("home_band_title")}
        </h2>
        <p style={{ color: "#504444", fontSize: "0.95rem", marginBottom: "1.8rem" }}>{t("home_band_desc")}</p>
        <div className="flex flex-wrap items-center justify-center" style={{ gap: "0.9rem" }}>
          <a
            href={waLink(t("home_wa_message"))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-bold transition-transform duration-200 hover:scale-[1.03]"
            style={{
              gap: "0.55rem",
              background: "linear-gradient(135deg, #C9A96E, #9E7C3F)",
              color: "#FFFFFF",
              borderRadius: "9999px",
              padding: "0.95rem 1.7rem",
              fontSize: "0.95rem",
              boxShadow: "0 10px 30px rgba(201,169,110,0.4)",
            }}
          >
            <WhatsappLogo size={20} weight="fill" />
            {t("home_cta_order")}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-semibold transition-opacity hover:opacity-70"
            style={{ gap: "0.5rem", color: "#452627", fontSize: "0.92rem", padding: "0.95rem 1rem" }}
          >
            <InstagramLogo size={20} weight="duotone" style={{ color: "#9E7C3F" }} />
            @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <PageShell>
      <main>
        <Hero />
        <FlavorMarquee />
        <GoldRule padding="1.5rem 0" />
        <Collections />
        <Story />
        <Steps />
        <CTABand />
      </main>
    </PageShell>
  );
}
