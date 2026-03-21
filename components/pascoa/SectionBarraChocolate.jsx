"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bars = [
  { nameKey: "barra_1_name", descKey: "barra_1_desc" },
  { nameKey: "barra_2_name", descKey: "barra_2_desc" },
  { nameKey: "barra_3_name", descKey: "barra_3_desc" },
];

function BarCard({ bar, t }) {
  return (
    <Card
      className="bg-white/85 backdrop-blur-xl border-0 ring-0 shadow-[0_2px_8px_rgba(69,38,39,0.08),0_12px_40px_rgba(69,38,39,0.12)] flex flex-col"
      style={{ padding: "1rem", gap: "0.75rem" }}
    >
      <CardContent
        className="bg-cream rounded-xl overflow-hidden flex items-center justify-center"
        style={{ padding: 0 }}
      >
        <div className="aspect-[3/5] w-full flex items-center justify-center">
          <span className="text-plum/20 font-manrope text-sm">foto</span>
        </div>
      </CardContent>
      <CardContent style={{ padding: 0 }}>
        <h3 className="font-noto text-lg font-medium text-plum leading-tight">
          {t(bar.nameKey)}
        </h3>
      </CardContent>
      <CardContent style={{ padding: 0 }}>
        <p className="font-manrope text-sm font-light text-plum/60 leading-relaxed">
          {t(bar.descKey)}
        </p>
      </CardContent>
      <CardContent style={{ padding: 0, marginTop: "auto" }}>
        <Badge
          variant="secondary"
          className="bg-white/75 backdrop-blur-md text-plum/70 font-manrope font-semibold tracking-wide border-0 shadow-[0_2px_8px_rgba(69,38,39,0.08)] rounded-full"
          style={{ padding: "0.375rem 1rem", height: "auto", fontSize: "0.75rem" }}
        >
          {t("price_placeholder")}
        </Badge>
      </CardContent>
    </Card>
  );
}

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
    <section
      className="max-w-lg mx-auto md:max-w-3xl"
      style={{ padding: "4rem 1.25rem" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
        className="flex items-center"
        style={{ marginBottom: "2.5rem", gap: "1rem" }}
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

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Mobile: horizontal scroll carousel */}
        <div
          ref={scrollRef}
          className="md:hidden flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide"
          style={{
            gap: "1rem",
            paddingBottom: "1rem",
            margin: "0 -1.25rem",
            padding: "0 1.25rem 1rem",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {bars.map((bar, index) => (
            <div
              key={bar.nameKey}
              ref={(el) => (cardRefs.current[index] = el)}
              className="snap-center shrink-0"
              style={{ minWidth: "75vw", maxWidth: "75vw" }}
            >
              <BarCard bar={bar} t={t} />
            </div>
          ))}
        </div>

        {/* Dot indicators (mobile only) */}
        <div
          className="md:hidden flex justify-center"
          style={{ gap: "0.5rem", marginTop: "1rem" }}
        >
          {bars.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-plum" : "bg-plum/20"
              }`}
              style={{ width: index === activeIndex ? "1.5rem" : "0.5rem" }}
            />
          ))}
        </div>

        {/* Desktop: 3-column grid */}
        <div
          className="hidden md:grid md:grid-cols-3"
          style={{ gap: "1.5rem" }}
        >
          {bars.map((bar) => (
            <BarCard key={bar.nameKey} bar={bar} t={t} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
