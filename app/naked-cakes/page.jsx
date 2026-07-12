"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { WhatsappLogo, ArrowRight, Diamond, Cake } from "@phosphor-icons/react";
import PageShell, { Reveal, Eyebrow, GoldRule } from "@/components/site/PageShell";
import { useLanguage } from "@/components/pascoa/LanguageContext";
import { waLink, formatUSD, CAKE_SIZES, CAKE_MASSAS, CAKE_RECHEIOS, CAKE_OPCIONAIS } from "@/lib/site";

function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer font-bold uppercase tracking-widest transition-all duration-250"
      style={{
        fontSize: "0.7rem",
        letterSpacing: "0.15em",
        padding: "0.65rem 1.5rem",
        borderRadius: "9999px",
        border: "none",
        backgroundColor: active ? "#452627" : "transparent",
        color: active ? "#FFF8F4" : "#745660",
      }}
    >
      {children}
    </button>
  );
}

export default function NakedCakesPage() {
  return (
    <PageShell>
      <NakedCakesContent />
    </PageShell>
  );
}

function NakedCakesContent() {
  const { t } = useLanguage();
  const [tab, setTab] = useState("sizes");

  const badges = [t("cakes_badge_1"), t("cakes_badge_2"), t("cakes_badge_3")];

  return (
    <main>
      {/* Hero */}
      <header
        className="mx-auto grid grid-cols-1 lg:grid-cols-2 items-center"
        style={{ maxWidth: "72rem", padding: "8.5rem 1.5rem 3rem", gap: "3rem" }}
      >
        <div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <Eyebrow style={{ marginBottom: "1.1rem" }}>{t("cakes_eyebrow")}</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif font-bold tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4rem)", color: "#452627", lineHeight: 1.05, marginBottom: "1.2rem" }}
          >
            {t("cakes_title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ color: "#504444", fontSize: "1.02rem", lineHeight: 1.75, marginBottom: "1.6rem", maxWidth: "30rem" }}
          >
            {t("cakes_desc")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center"
            style={{ gap: "0.6rem" }}
          >
            {badges.map((badge) => (
              <span
                key={badge}
                className="font-semibold"
                style={{
                  backgroundColor: "#F5EDE8",
                  color: "#745660",
                  padding: "0.5rem 1.1rem",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                }}
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
          style={{ borderRadius: "2rem", boxShadow: "0 30px 80px rgba(69,38,39,0.16)" }}
        >
          <div
            className="w-full flex flex-col items-center justify-center text-center"
            style={{
              aspectRatio: "1/1",
              background: "linear-gradient(150deg, #F5EDE8 0%, #F0DBCE 55%, #EAD3C0 100%)",
              padding: "2rem",
            }}
          >
            <Cake size={110} weight="duotone" style={{ color: "#9E7C3F", marginBottom: "1.4rem" }} />
            <p
              className="font-serif italic font-semibold"
              style={{ color: "#745660", fontSize: "1.05rem", maxWidth: "16rem", lineHeight: 1.5, margin: 0 }}
            >
              {t("cakes_badge_1")} · {t("cakes_badge_2")}
            </p>
          </div>
        </motion.div>
      </header>

      <GoldRule padding="0.5rem 0 2rem" />

      {/* Tabs */}
      <section className="mx-auto" style={{ maxWidth: "72rem", padding: "0 1.5rem 4rem" }}>
        <div
          className="flex items-center justify-center mx-auto"
          style={{
            gap: "0.3rem",
            backgroundColor: "#F5EDE8",
            borderRadius: "9999px",
            padding: "0.3rem",
            width: "fit-content",
            marginBottom: "2.5rem",
          }}
        >
          <TabButton active={tab === "sizes"} onClick={() => setTab("sizes")}>{t("cakes_tab_sizes")}</TabButton>
          <TabButton active={tab === "build"} onClick={() => setTab("build")}>{t("cakes_tab_build")}</TabButton>
          <TabButton active={tab === "addons"} onClick={() => setTab("addons")}>{t("cakes_tab_addons")}</TabButton>
        </div>

        {tab === "sizes" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5" style={{ gap: "1.2rem" }}>
            {CAKE_SIZES.map((item, i) => (
              <Reveal key={item.key} as="div" delay={i * 0.06}>
                <div
                  className="text-center h-full flex flex-col items-center justify-center"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "1.5rem",
                    padding: "2rem 1.2rem",
                    boxShadow: "0 8px 30px rgba(69,38,39,0.07)",
                  }}
                >
                  <p className="font-serif font-bold" style={{ fontSize: "1.7rem", color: "#452627", margin: "0 0 0.3rem" }}>
                    {item.inches}&Prime;
                  </p>
                  <p style={{ color: "#745660", fontSize: "0.8rem", margin: "0 0 0.7rem" }}>
                    {t("cakes_serves")} {item.servings} {t("cakes_slices")}
                  </p>
                  <p className="font-bold" style={{ color: "#9E7C3F", fontSize: "0.92rem", margin: 0 }}>
                    {t("cakes_from")} {formatUSD(item.price)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {tab === "build" && (
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "1.4rem" }}>
            <Reveal as="div">
              <div
                className="h-full"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "1.75rem",
                  padding: "2.2rem 2.2rem 2rem",
                  boxShadow: "0 8px 30px rgba(69,38,39,0.07)",
                }}
              >
                <h3 className="font-serif font-bold" style={{ fontSize: "1.3rem", color: "#452627", marginBottom: "0.4rem" }}>
                  {t("cakes_massas_title")}
                </h3>
                <p style={{ color: "#745660", fontSize: "0.8rem", margin: "0 0 1.3rem" }}>{t("cakes_choose_1")}</p>
                <div className="flex flex-col" style={{ gap: "0.8rem" }}>
                  {CAKE_MASSAS.map((key) => (
                    <div key={key} className="flex items-center" style={{ gap: "0.55rem" }}>
                      <Diamond size={9} weight="fill" style={{ color: "#C9A96E", flexShrink: 0 }} />
                      <span style={{ color: "#504444", fontSize: "0.92rem" }}>{t(`cakes_${key}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal as="div" delay={0.1}>
              <div
                className="h-full"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "1.75rem",
                  padding: "2.2rem 2.2rem 2rem",
                  boxShadow: "0 8px 30px rgba(69,38,39,0.07)",
                }}
              >
                <h3 className="font-serif font-bold" style={{ fontSize: "1.3rem", color: "#452627", marginBottom: "0.4rem" }}>
                  {t("cakes_recheios_title")}
                </h3>
                <p style={{ color: "#745660", fontSize: "0.8rem", margin: "0 0 1.3rem" }}>{t("cakes_choose_2")}</p>
                <div className="flex flex-col" style={{ gap: "0.8rem" }}>
                  {CAKE_RECHEIOS.map((key) => (
                    <div key={key} className="flex items-center" style={{ gap: "0.55rem" }}>
                      <Diamond size={9} weight="fill" style={{ color: "#C9A96E", flexShrink: 0 }} />
                      <span style={{ color: "#504444", fontSize: "0.92rem" }}>{t(`cakes_${key}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        )}

        {tab === "addons" && (
          <Reveal as="div">
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "1.75rem",
                padding: "2.5rem 2.5rem 2rem",
                boxShadow: "0 8px 30px rgba(69,38,39,0.07)",
              }}
            >
              <h3 className="font-serif font-bold" style={{ fontSize: "1.35rem", color: "#452627", marginBottom: "0.4rem" }}>
                {t("cakes_addons_title")}
              </h3>
              <p style={{ color: "#745660", fontSize: "0.8rem", margin: "0 0 1.4rem" }}>{t("cakes_choose_1")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "0.9rem" }}>
                {CAKE_OPCIONAIS.map(({ key, extra }) => (
                  <div key={key} className="flex items-center" style={{ gap: "0.55rem" }}>
                    <Diamond size={9} weight="fill" style={{ color: "#C9A96E", flexShrink: 0 }} />
                    <span style={{ color: "#504444", fontSize: "0.88rem" }}>
                      {t(`cakes_${key}`)}
                      {extra ? (
                        <span className="font-bold" style={{ color: "#9E7C3F" }}> (+{formatUSD(extra)})</span>
                      ) : null}
                    </span>
                  </div>
                ))}
              </div>
              <p style={{ color: "#745660", fontSize: "0.75rem", margin: "1.6rem 0 0" }}>{t("cakes_addons_note")}</p>
            </div>
          </Reveal>
        )}
      </section>

      {/* How to order + CTA */}
      <Reveal className="mx-auto" style={{ maxWidth: "60rem", padding: "0 1.5rem 5rem" }}>
        <div
          className="text-center"
          style={{ backgroundColor: "#452627", borderRadius: "2rem", padding: "3rem 2rem" }}
        >
          <h2 className="font-serif font-bold text-shimmer" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "2rem" }}>
            {t("home_steps_title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "1.6rem", marginBottom: "2.4rem" }}>
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex flex-col items-center">
                <span
                  className="font-serif font-bold flex items-center justify-center"
                  style={{
                    width: "2.8rem",
                    height: "2.8rem",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #C9A96E, #9E7C3F)",
                    color: "#FFFFFF",
                    fontSize: "1.1rem",
                    marginBottom: "0.8rem",
                  }}
                >
                  {n}
                </span>
                <h4 className="font-serif font-bold" style={{ color: "#FFF8F4", fontSize: "1.02rem", marginBottom: "0.3rem" }}>
                  {t(`home_step_${n}_title`)}
                </h4>
                <p style={{ color: "rgba(255,248,244,0.7)", fontSize: "0.82rem", lineHeight: 1.6, margin: 0, maxWidth: "14rem" }}>
                  {t(`home_step_${n}_desc`)}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center" style={{ gap: "0.9rem" }}>
            <a
              href={waLink(t("cakes_wa_message"))}
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
                color: "#FFF8F4",
                borderRadius: "9999px",
                padding: "0.95rem 1.6rem",
                fontSize: "0.92rem",
                backgroundColor: "rgba(255,248,244,0.1)",
              }}
            >
              {t("cakes_quote")}
            </Link>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
