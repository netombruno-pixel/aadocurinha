"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { CookingPot, ForkKnife, Sparkle, Drop } from "@phosphor-icons/react";

const kitItems = [
  { icon: Drop, key: "kit_item_chocolate" },
  { icon: CookingPot, key: "kit_item_mold" },
  { icon: Sparkle, key: "kit_item_sprinkles" },
  { icon: ForkKnife, key: "kit_item_whisk" },
];

export default function SectionKitConfeiteiro() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-5 max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
        className="mb-10 flex items-center gap-4"
      >
        <Image src="/illustrations/gift-box.svg" alt="" width={48} height={48} className="opacity-50" />
        <h2 className="font-noto text-3xl md:text-4xl font-semibold text-plum tracking-tight leading-none">
          {t("section_kit")}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="glass-card p-6 flex flex-col gap-6"
      >
        <div className="aspect-[4/3] w-full rounded-xl bg-cream flex items-center justify-center">
          <span className="text-plum/20 font-manrope text-sm">foto</span>
        </div>
        <h3 className="font-noto text-2xl font-medium text-plum leading-tight">{t("kit_name")}</h3>
        <p className="font-manrope text-sm font-light text-plum/60 leading-relaxed">{t("kit_desc")}</p>
        <div>
          <p className="font-manrope text-xs font-semibold text-plum/40 uppercase tracking-widest mb-3">
            {t("kit_whats_inside")}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {kitItems.map(({ icon: Icon, key }) => (
              <div key={key} className="flex items-center gap-2 text-plum/70">
                <Icon size={20} weight="duotone" className="text-gold/70" />
                <span className="font-manrope text-sm">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="font-manrope text-xs text-plum/40 italic">{t("kit_perfect_for")}</p>
        <span className="glass-pill inline-block w-fit px-4 py-1.5 text-xs font-manrope font-semibold text-plum/70 tracking-wide">
          {t("price_placeholder")}
        </span>
      </motion.div>
    </section>
  );
}
