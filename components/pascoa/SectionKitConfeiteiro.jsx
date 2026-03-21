"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
          src="/illustrations/gift-box.svg"
          alt=""
          width={48}
          height={48}
          className="opacity-50"
        />
        <h2 className="font-noto text-3xl md:text-4xl font-semibold text-plum tracking-tight leading-none">
          {t("section_kit")}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Card
          className="bg-white/85 backdrop-blur-xl border-0 ring-0 shadow-[0_2px_8px_rgba(69,38,39,0.08),0_12px_40px_rgba(69,38,39,0.12)] flex flex-col"
          style={{ padding: "1.5rem", gap: "1.5rem" }}
        >
          {/* Image placeholder */}
          <CardContent
            className="bg-cream rounded-xl overflow-hidden flex items-center justify-center"
            style={{ padding: 0 }}
          >
            <div className="aspect-[4/3] w-full flex items-center justify-center">
              <span className="text-plum/20 font-manrope text-sm">foto</span>
            </div>
          </CardContent>

          {/* Name */}
          <CardContent style={{ padding: 0 }}>
            <h3 className="font-noto text-2xl font-medium text-plum leading-tight">
              {t("kit_name")}
            </h3>
          </CardContent>

          {/* Description */}
          <CardContent style={{ padding: 0 }}>
            <p className="font-manrope text-sm font-light text-plum/60 leading-relaxed">
              {t("kit_desc")}
            </p>
          </CardContent>

          {/* What's inside */}
          <CardContent style={{ padding: 0 }}>
            <p
              className="font-manrope text-xs font-semibold text-plum/40 uppercase"
              style={{ letterSpacing: "0.1em", marginBottom: "0.75rem" }}
            >
              {t("kit_whats_inside")}
            </p>
            <div className="grid grid-cols-2" style={{ gap: "0.75rem" }}>
              {kitItems.map(({ icon: Icon, key }) => (
                <div
                  key={key}
                  className="flex items-center text-plum/70"
                  style={{ gap: "0.5rem" }}
                >
                  <Icon size={20} weight="duotone" className="text-gold/70" />
                  <span className="font-manrope text-sm">{t(key)}</span>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Perfect for */}
          <CardContent style={{ padding: 0 }}>
            <p className="font-manrope text-xs text-plum/40 italic">
              {t("kit_perfect_for")}
            </p>
          </CardContent>

          {/* Price */}
          <CardContent style={{ padding: 0 }}>
            <Badge
              variant="secondary"
              className="bg-white/75 backdrop-blur-md text-plum/70 font-manrope font-semibold tracking-wide border-0 shadow-[0_2px_8px_rgba(69,38,39,0.08)] rounded-full"
              style={{ padding: "0.375rem 1rem", height: "auto", fontSize: "0.75rem" }}
            >
              {t("price_placeholder")}
            </Badge>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
