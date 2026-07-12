"use client";

import { motion } from "framer-motion";
import { WhatsappLogo, Medal, Clock, Heart, Gift } from "@phosphor-icons/react";
import PageShell, { Eyebrow, GoldRule, Reveal } from "@/components/site/PageShell";
import { useLanguage } from "@/components/pascoa/LanguageContext";
import { waLink } from "@/lib/site";

export default function AboutPage() {
  return (
    <PageShell>
      <AboutContent />
    </PageShell>
  );
}

function AboutContent() {
  const { t } = useLanguage();

  const values = [
    { icon: Medal, title: t("about_value_1_title"), desc: t("about_value_1_desc") },
    { icon: Clock, title: t("about_value_2_title"), desc: t("about_value_2_desc") },
    { icon: Heart, title: t("about_value_3_title"), desc: t("about_value_3_desc") },
    { icon: Gift, title: t("about_value_4_title"), desc: t("about_value_4_desc") },
  ];

  return (
    <main>
      {/* Hero */}
      <header className="mx-auto text-center" style={{ maxWidth: "46rem", padding: "8.5rem 1.5rem 0" }}>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <Eyebrow style={{ marginBottom: "1.1rem" }}>{t("about_eyebrow")}</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-bold tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "#452627", lineHeight: 1.08, margin: 0 }}
        >
          {t("about_title_1")}
          <br />
          <span className="text-shimmer">{t("about_title_2")}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ color: "#504444", fontSize: "1.02rem", lineHeight: 1.8, margin: "1.5rem auto 0", maxWidth: "38rem" }}
        >
          {t("about_intro")}
        </motion.p>
      </header>

      <GoldRule />

      {/* Story */}
      <Reveal className="mx-auto" style={{ maxWidth: "72rem", padding: "0 1.5rem 3rem" }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center overflow-hidden"
          style={{ backgroundColor: "#452627", borderRadius: "2rem" }}
        >
          {/* Brenda */}
          <div className="overflow-hidden h-full" style={{ minHeight: "360px" }}>
            <img
              src="/gallery/brenda.jpg"
              alt="Brenda, fundadora da A Doçurinha"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div style={{ padding: "3rem 2.5rem" }}>
            <h2
              className="font-serif font-bold tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", color: "#FDF5F5", marginBottom: "1.2rem", lineHeight: 1.15 }}
            >
              {t("about_story_title")}
            </h2>
            <p style={{ color: "rgba(253,245,245,0.82)", fontSize: "0.97rem", lineHeight: 1.85, marginBottom: "1.1rem" }}>
              {t("about_story_p1")}
            </p>
            <p style={{ color: "rgba(253,245,245,0.82)", fontSize: "0.97rem", lineHeight: 1.85, margin: 0 }}>
              {t("about_story_p2")}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Values */}
      <Reveal className="mx-auto" style={{ maxWidth: "72rem", padding: "2rem 1.5rem 3rem" }}>
        <div className="text-center" style={{ marginBottom: "2.75rem" }}>
          <Eyebrow style={{ marginBottom: "0.9rem" }}>{t("about_values_eyebrow")}</Eyebrow>
          <h2
            className="font-serif font-bold tracking-tight"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.9rem)", color: "#452627", margin: 0 }}
          >
            {t("about_values_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "1.5rem" }}>
          {values.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              as="div"
              delay={i * 0.1}
              className="text-center"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "1.75rem",
                padding: "2rem 1.5rem",
                boxShadow: "0 10px 40px rgba(69,38,39,0.07)",
              }}
            >
              <span
                className="inline-flex items-center justify-center"
                style={{
                  width: "3.25rem",
                  height: "3.25rem",
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, rgba(201,169,110,0.16), rgba(158,124,63,0.12))",
                  marginBottom: "1.1rem",
                }}
              >
                <Icon size={24} weight="duotone" style={{ color: "#9E7C3F" }} />
              </span>
              <h3 className="font-serif font-bold" style={{ fontSize: "1.15rem", color: "#452627", margin: "0 0 0.6rem" }}>
                {title}
              </h3>
              <p style={{ color: "#504444", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* CTA band */}
      <Reveal className="mx-auto text-center" style={{ maxWidth: "48rem", padding: "1rem 1.5rem 5rem" }}>
        <h2
          className="font-serif font-bold tracking-tight"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#452627", margin: "0 0 0.8rem" }}
        >
          {t("about_band_title")}
        </h2>
        <p style={{ color: "#504444", fontSize: "0.98rem", lineHeight: 1.75, margin: "0 0 1.8rem" }}>
          {t("about_band_desc")}
        </p>
        <a
          href={waLink(t("home_wa_message"))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-bold transition-transform duration-200 hover:scale-[1.03]"
          style={{
            gap: "0.55rem",
            background: "linear-gradient(135deg, #C9A96E, #9E7C3F)",
            color: "#FFFFFF",
            borderRadius: "9999px",
            padding: "0.95rem 1.9rem",
            fontSize: "0.95rem",
            boxShadow: "0 10px 30px rgba(201,169,110,0.4)",
          }}
        >
          <WhatsappLogo size={20} weight="fill" />
          {t("about_band_cta")}
        </a>
      </Reveal>
    </main>
  );
}
