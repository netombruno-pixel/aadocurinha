"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";
import { useLanguage } from "./LanguageContext";

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

  const handleClick = (e) => {
    if (!whatsappUrl) e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pb-[env(safe-area-inset-bottom)] ${
        !visible ? "pointer-events-none" : ""
      }`}
    >
      <a
        href={whatsappUrl || "#"}
        onClick={handleClick}
        target={whatsappUrl ? "_blank" : undefined}
        rel={whatsappUrl ? "noopener noreferrer" : undefined}
        aria-disabled={!whatsappUrl}
        className={`glass-pill flex items-center gap-2 px-6 py-3 font-manrope text-sm font-semibold tracking-wide transition-colors duration-300 ${
          whatsappUrl
            ? "text-plum hover:bg-white/30"
            : "text-plum/50 cursor-default"
        }`}
      >
        <WhatsappLogo size={20} weight="duotone" className={whatsappUrl ? "text-green-600" : "text-green-600/50"} />
        {t("cta")}
      </a>
    </motion.div>
  );
}
