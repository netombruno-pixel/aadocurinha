"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { CaretDown } from "@phosphor-icons/react";
import Image from "next/image";
import { forwardRef } from "react";

const HeroStatic = forwardRef(function HeroStatic(props, ref) {
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden"
      style={{ height: "100dvh" }}
    >
      {/* Dark cocoa background */}
      <div className="absolute inset-0 bg-dark-cocoa" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ padding: "0 1.5rem" }}
      >
        {/* Easter egg illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ marginBottom: "2rem" }}
        >
          <Image
            src="/illustrations/easter-egg.svg"
            alt=""
            width={80}
            height={107}
            className="opacity-60"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-noto font-medium text-soft-pink tracking-tight"
          style={{ fontSize: "clamp(3rem, 8vw, 5rem)", lineHeight: 0.9 }}
        >
          {t("hero_title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl font-manrope font-light tracking-wide text-soft-pink/70"
          style={{ marginTop: "1rem", maxWidth: "24rem" }}
        >
          {t("hero_subtitle")}
        </motion.p>

        {/* Brand mark */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-sm font-manrope font-light uppercase text-gold/60"
          style={{ marginTop: "2rem", letterSpacing: "0.2em" }}
        >
          A Docurinha
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ bottom: "2rem", gap: "0.5rem" }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <CaretDown size={24} weight="duotone" className="text-soft-pink/40" />
        </motion.div>
      </motion.div>
    </section>
  );
});

export default HeroStatic;
