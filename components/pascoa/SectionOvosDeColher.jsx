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
    <section
      className="max-w-lg mx-auto"
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
          src="/illustrations/spoon.svg"
          alt=""
          width={24}
          height={72}
          className="opacity-50"
        />
        <div>
          <h2 className="font-noto text-3xl md:text-4xl font-semibold text-plum tracking-tight leading-none">
            {t("section_ovos_colher")}
          </h2>
        </div>
      </motion.div>

      <div className="flex flex-col" style={{ gap: "1.5rem" }}>
        {flavors.map((flavor, index) => (
          <ProductCard
            key={flavor.nameKey}
            nameKey={flavor.nameKey}
            descKey={flavor.descKey}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
