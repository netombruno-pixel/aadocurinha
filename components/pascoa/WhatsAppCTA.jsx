"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";
import { useLanguage } from "./LanguageContext";
import { Button } from "@/components/ui/button";

export default function WhatsAppCTA({ heroRef }) {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!heroRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [heroRef]);

  // Phase 1: placeholder. Replace with real wa.me link in Phase 3.
  const whatsappUrl = null;
  const isDisabled = !whatsappUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 ${
        !visible ? "pointer-events-none" : ""
      }`}
      style={{
        bottom: "1.5rem",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <Button
        variant="secondary"
        size="lg"
        disabled={isDisabled}
        className={`rounded-full font-manrope font-semibold tracking-wide shadow-[0_4px_20px_rgba(69,38,39,0.15)] bg-white/90 backdrop-blur-xl border-0 ${
          isDisabled ? "text-plum/50 cursor-default" : "text-plum hover:bg-white"
        }`}
        style={{
          padding: "0.75rem 1.5rem",
          gap: "0.5rem",
          height: "auto",
          fontSize: "0.875rem",
        }}
        onClick={() => {
          if (whatsappUrl) {
            window.open(whatsappUrl, "_blank", "noopener,noreferrer");
          }
        }}
      >
        <WhatsappLogo
          size={20}
          weight="duotone"
          className={isDisabled ? "text-green-600/50" : "text-green-600"}
        />
        {t("cta")}
      </Button>
    </motion.div>
  );
}
