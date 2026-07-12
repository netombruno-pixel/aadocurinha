"use client";

import { motion } from "framer-motion";
import { WhatsappLogo, ArrowRight, Star, Diamond, Sparkle } from "@phosphor-icons/react";
import Link from "next/link";
import PageShell, { Reveal, Eyebrow, GoldRule } from "@/components/site/PageShell";
import { useLanguage } from "@/components/pascoa/LanguageContext";
import {
  waLink,
  BRIGADEIRO_FLAVORS,
  BRIGADEIRO_CATEGORIES,
  flavorImage,
  formatUSD,
} from "@/lib/site";

const CATEGORY_ORDER = ["classicos", "especiais", "premiums"];

function FlavorCard({ flavor, index }) {
  const { t } = useLanguage();
  const photo = flavorImage(flavor);

  return (
    <Reveal as="div" delay={Math.min(index % 4, 3) * 0.07}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col h-full overflow-hidden"
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 30px rgba(69,38,39,0.07)",
        }}
      >
        <div className="relative overflow-hidden" style={{ aspectRatio: "1/1", backgroundColor: "#FBEFF5" }}>
          {photo ? (
            <img
              src={photo}
              alt={flavor.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.06]"
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #FBEFF5, #F3D9DC)" }}
            >
              <Sparkle size={44} weight="duotone" style={{ color: "#C9A96E" }} />
            </div>
          )}
          {flavor.popular && (
            <span
              className="absolute flex items-center font-bold uppercase tracking-wider"
              style={{
                top: "0.7rem",
                left: "0.7rem",
                gap: "0.3rem",
                backgroundColor: "rgba(69,38,39,0.85)",
                backdropFilter: "blur(8px)",
                color: "#FDF5F5",
                padding: "0.28rem 0.65rem",
                borderRadius: "9999px",
                fontSize: "0.55rem",
                letterSpacing: "0.1em",
              }}
            >
              <Star size={10} weight="fill" style={{ color: "#E8D5A3" }} />
              {t("brig_popular")}
            </span>
          )}
        </div>

        <div className="flex flex-col flex-1" style={{ padding: "1.1rem 1.2rem 1.3rem" }}>
          <h3 className="font-serif font-bold" style={{ fontSize: "1.05rem", color: "#452627", lineHeight: 1.25, marginBottom: "0.4rem" }}>
            {flavor.name}
          </h3>
          <p style={{ color: "#745660", fontSize: "0.78rem", lineHeight: 1.55, margin: 0, flex: 1 }}>
            {t(`flavor_${flavor.slug}_desc`)}
          </p>
        </div>
      </motion.div>
    </Reveal>
  );
}

function CategorySection({ categoryKey, flavors }) {
  const { t } = useLanguage();
  const pricing = BRIGADEIRO_CATEGORIES[categoryKey];

  return (
    <div style={{ marginBottom: "3.5rem" }}>
      <Reveal as="div" className="text-center" style={{ marginBottom: "1.8rem" }}>
        <h2 className="font-serif font-bold tracking-tight" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#452627", margin: "0 0 0.7rem" }}>
          {t(pricing.labelKey)}
        </h2>
        <div className="inline-flex flex-wrap items-center justify-center" style={{ gap: "0.5rem" }}>
          <span
            className="font-bold"
            style={{
              background: "linear-gradient(135deg, rgba(201,169,110,0.16), rgba(158,124,63,0.12))",
              color: "#9E7C3F",
              padding: "0.45rem 1.1rem",
              borderRadius: "9999px",
              fontSize: "0.85rem",
            }}
          >
            100 {t("brig_units")} · {formatUSD(pricing.per100)}
          </span>
          <span
            className="font-bold"
            style={{
              background: "linear-gradient(135deg, rgba(201,169,110,0.16), rgba(158,124,63,0.12))",
              color: "#9E7C3F",
              padding: "0.45rem 1.1rem",
              borderRadius: "9999px",
              fontSize: "0.85rem",
            }}
          >
            50 {t("brig_units")} · {formatUSD(pricing.per50)}
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" style={{ gap: "1.25rem" }}>
        {flavors.map((flavor, i) => (
          <FlavorCard key={flavor.slug} flavor={flavor} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function BrigadeirosPage() {
  return (
    <PageShell>
      <BrigadeirosContent />
    </PageShell>
  );
}

function BrigadeirosContent() {
  const { t } = useLanguage();

  const badges = [t("brig_badge_1"), t("brig_badge_2"), t("brig_badge_3")];
  const orderNotes = [
    t("brig_order_1"),
    t("brig_order_2"),
    t("brig_order_3"),
    t("brig_order_4"),
    t("brig_order_5"),
  ];

  return (
    <main>
      {/* Hero */}
      <header className="mx-auto text-center" style={{ maxWidth: "48rem", padding: "8.5rem 1.5rem 2.5rem" }}>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <Eyebrow style={{ marginBottom: "1.1rem" }}>{t("brig_eyebrow")}</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-bold tracking-tight"
          style={{ fontSize: "clamp(2.6rem, 6vw, 4rem)", color: "#452627", lineHeight: 1.05, marginBottom: "1.2rem" }}
        >
          {t("brig_title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ color: "#504444", fontSize: "1.02rem", lineHeight: 1.75, marginBottom: "1.6rem" }}
        >
          {t("brig_desc")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center"
          style={{ gap: "0.6rem" }}
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="font-semibold"
              style={{
                backgroundColor: "#F9E9EB",
                color: "#745660",
                padding: "0.5rem 1.1rem",
                borderRadius: "9999px",
                fontSize: "0.78rem",
                boxShadow: "0 2px 8px rgba(69,38,39,0.04)",
              }}
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </header>

      <GoldRule padding="1.5rem 0 2.5rem" />

      {/* Flavor grid by category */}
      <section className="mx-auto" style={{ maxWidth: "78rem", padding: "0 1.5rem" }}>
        {CATEGORY_ORDER.map((cat) => (
          <CategorySection
            key={cat}
            categoryKey={cat}
            flavors={BRIGADEIRO_FLAVORS.filter((f) => f.category === cat)}
          />
        ))}
      </section>

      {/* Order info */}
      <Reveal className="mx-auto" style={{ maxWidth: "56rem", padding: "2rem 1.5rem 5rem" }}>
        <div
          className="text-center"
          style={{
            backgroundColor: "#452627",
            borderRadius: "2rem",
            padding: "3rem 2rem",
          }}
        >
          <h2 className="font-serif font-bold text-shimmer" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "1.6rem" }}>
            {t("brig_order_title")}
          </h2>
          <ul
            className="flex flex-col items-center"
            style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", gap: "0.65rem" }}
          >
            {orderNotes.map((note) => (
              <li key={note} className="flex items-center text-center" style={{ gap: "0.55rem" }}>
                <Diamond size={9} weight="fill" style={{ color: "#C9A96E", flexShrink: 0 }} />
                <span style={{ color: "rgba(253,245,245,0.85)", fontSize: "0.9rem" }}>{note}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center justify-center" style={{ gap: "0.9rem" }}>
            <a
              href={waLink(t("brig_wa_message"))}
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
                boxShadow: "0 10px 30px rgba(201,169,110,0.35)",
              }}
            >
              <WhatsappLogo size={20} weight="fill" />
              {t("home_cta_order")}
              <ArrowRight size={15} weight="bold" />
            </a>
            <Link
              href="/contact"
              className="font-semibold transition-opacity hover:opacity-75"
              style={{
                color: "#FDF5F5",
                borderRadius: "9999px",
                padding: "0.95rem 1.6rem",
                fontSize: "0.92rem",
                backgroundColor: "rgba(253,245,245,0.1)",
              }}
            >
              {t("nav_contact")}
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
