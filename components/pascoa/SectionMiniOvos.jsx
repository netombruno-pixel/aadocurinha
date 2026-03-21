"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import ProductCard from "./ProductCard";

const types = [
  { nameKey: "mini_ovo_1_name", descKey: "mini_ovo_1_desc" },
  { nameKey: "mini_ovo_2_name", descKey: "mini_ovo_2_desc" },
];

export default function SectionMiniOvos() {
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
        <Image src="/illustrations/mini-egg.svg" alt="" width={48} height={40} className="opacity-50" />
        <h2 className="font-noto text-3xl md:text-4xl font-semibold text-plum tracking-tight leading-none">
          {t("section_mini_ovos")}
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 gap-4"
      >
        {types.map((type) => (
          <ProductCard key={type.nameKey} nameKey={type.nameKey} descKey={type.descKey} index={0} aspectRatio="aspect-square" />
        ))}
      </motion.div>
    </section>
  );
}
