"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    >
      <Card
        className={`bg-white/85 backdrop-blur-xl border-0 ring-0 shadow-[0_2px_8px_rgba(69,38,39,0.08),0_12px_40px_rgba(69,38,39,0.12)] ${className}`}
        style={{ padding: "1.25rem", gap: "1rem" }}
      >
        {/* Image placeholder */}
        <CardContent
          className="bg-cream rounded-xl overflow-hidden flex items-center justify-center"
          style={{ padding: 0 }}
        >
          <div className={`${aspectRatio} w-full flex items-center justify-center`}>
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
        </CardContent>

        {/* Content */}
        <CardContent style={{ padding: 0 }}>
          <div className="flex flex-col" style={{ gap: "0.5rem" }}>
            <h3
              className="font-noto text-xl font-medium text-plum leading-tight"
            >
              {t(nameKey)}
            </h3>
            <p className="font-manrope text-sm font-light text-plum/60 leading-relaxed">
              {t(descKey)}
            </p>
          </div>
        </CardContent>

        {/* Price */}
        <CardContent style={{ padding: 0, marginTop: "auto" }}>
          <Badge
            variant="secondary"
            className="bg-white/75 backdrop-blur-md text-plum/70 font-manrope font-semibold tracking-wide border-0 shadow-[0_2px_8px_rgba(69,38,39,0.08)] rounded-full"
            style={{ padding: "0.375rem 1rem", height: "auto", fontSize: "0.75rem" }}
          >
            {t(priceKey || "price_placeholder")}
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  );
}
