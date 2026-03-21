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

  const whatsappUrl = "#";

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
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-pill flex items-center gap-2 px-6 py-3 text-plum font-manrope text-sm font-semibold tracking-wide hover:bg-white/30 transition-colors duration-300"
      >
        <WhatsappLogo size={20} weight="duotone" className="text-green-600" />
        {t("cta")}
      </a>
    </motion.div>
  );
}
