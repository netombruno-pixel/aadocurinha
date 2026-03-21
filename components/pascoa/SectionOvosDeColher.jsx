"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import ProductCard from "./ProductCard";

const flavors = [
  { nameKey: "ovo_flavor_1_name", descKey: "ovo_flavor_1_desc" },
  { nameKey: "ovo_flavor_2_name", descKey: "ovo_flavor_2_desc" },
  { nameKey: "ovo_flavor_3_name", descKey: "ovo_flavor_3_desc" },
  { nameKey: "ovo_flavor_4_name", descKey: "ovo_flavor_4_desc" },
  { nameKey: "ovo_flavor_5_name", descKey: "ovo_flavor_5_desc" },
];

export default function SectionOvosDeColher() {
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
        <Image src="/illustrations/spoon.svg" alt="" width={24} height={72} className="opacity-50" />
        <div>
          <h2 className="font-noto text-3xl md:text-4xl font-semibold text-plum tracking-tight leading-none mb-1">
            {t("section_ovos_colher")}
          </h2>
        </div>
      </motion.div>
      <div className="flex flex-col gap-6">
        {flavors.map((flavor, index) => (
          <ProductCard key={flavor.nameKey} nameKey={flavor.nameKey} descKey={flavor.descKey} index={index} />
        ))}
      </div>
    </section>
  );
}
