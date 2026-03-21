"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export default function ProductCard({
  nameKey,
  descKey,
  priceKey,
  image,
  index = 0,
  className = "",
  aspectRatio = "aspect-[4/5]",
}) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className={`glass-card p-5 flex flex-col gap-4 ${className}`}
    >
      {/* Image placeholder */}
      <div
        className={`${aspectRatio} w-full rounded-xl bg-cream overflow-hidden flex items-center justify-center`}
      >
        {image ? (
          <img
            src={image}
            alt={t(nameKey)}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-plum/20 font-manrope text-sm">foto</span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="font-noto text-xl font-medium text-plum leading-tight">
          {t(nameKey)}
        </h3>
        <p className="font-manrope text-sm font-light text-plum/60 leading-relaxed">
          {t(descKey)}
        </p>
      </div>

      {/* Price */}
      <div className="mt-auto pt-2">
        <span className="glass-pill inline-block px-4 py-1.5 text-xs font-manrope font-semibold text-plum/70 tracking-wide">
          {t(priceKey || "price_placeholder")}
        </span>
      </div>
    </motion.div>
  );
}
