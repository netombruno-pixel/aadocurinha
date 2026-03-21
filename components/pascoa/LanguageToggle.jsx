"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "./LanguageContext";

export default function LanguageToggle({ heroRef }) {
  const { lang, setLang, t } = useLanguage();
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

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="glass-surface rounded-full px-1 py-1">
        <Tabs value={lang} onValueChange={setLang}>
          <TabsList className="bg-transparent gap-0">
            <TabsTrigger
              value="pt"
              className="rounded-full px-4 py-1.5 text-xs font-manrope font-semibold tracking-wider data-[state=active]:bg-white/30 data-[state=active]:text-plum text-plum/50"
            >
              {t("lang_pt")}
            </TabsTrigger>
            <TabsTrigger
              value="en"
              className="rounded-full px-4 py-1.5 text-xs font-manrope font-semibold tracking-wider data-[state=active]:bg-white/30 data-[state=active]:text-plum text-plum/50"
            >
              {t("lang_en")}
            </TabsTrigger>
            <TabsTrigger
              value="es"
              className="rounded-full px-4 py-1.5 text-xs font-manrope font-semibold tracking-wider data-[state=active]:bg-white/30 data-[state=active]:text-plum text-plum/50"
            >
              {t("lang_es")}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
