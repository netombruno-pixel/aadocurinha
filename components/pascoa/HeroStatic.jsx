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
      className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Dark cocoa background */}
      <div className="absolute inset-0 bg-[var(--color-dark-cocoa)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Easter egg illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
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
          className="font-noto font-medium text-soft-pink tracking-tight leading-[0.9]"
          style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}
        >
          {t("hero_title")}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl font-manrope font-light tracking-wide text-soft-pink/70 max-w-sm"
        >
          {t("hero_subtitle")}
        </motion.p>

        {/* Brand mark */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 text-sm font-manrope font-light tracking-[0.2em] uppercase text-gold/60"
        >
          A Docurinha
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
