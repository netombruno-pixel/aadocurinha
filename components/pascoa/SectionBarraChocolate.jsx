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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
        className="mb-10 flex items-center gap-4"
      >
        <Image src="/illustrations/chocolate-bar.svg" alt="" width={32} height={64} className="opacity-50" />
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
              <h3 className="font-noto text-lg font-medium text-plum leading-tight">{t(bar.nameKey)}</h3>
              <p className="font-manrope text-sm font-light text-plum/60 leading-relaxed">{t(bar.descKey)}</p>
              <span className="glass-pill inline-block w-fit px-4 py-1.5 text-xs font-manrope font-semibold text-plum/70 tracking-wide mt-auto">
                {t("price_placeholder")}
              </span>
            </div>
          ))}
        </div>

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

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {bars.map((bar) => (
            <div key={bar.nameKey} className="glass-card p-4 flex flex-col gap-3">
              <div className="aspect-[3/5] w-full rounded-xl bg-cream flex items-center justify-center">
                <span className="text-plum/20 font-manrope text-sm">foto</span>
              </div>
              <h3 className="font-noto text-lg font-medium text-plum leading-tight">{t(bar.nameKey)}</h3>
              <p className="font-manrope text-sm font-light text-plum/60 leading-relaxed">{t(bar.descKey)}</p>
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
