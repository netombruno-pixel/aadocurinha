"use client";

import { useState, useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
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
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
      style={{ top: "1rem" }}
    >
      <div
        className="glass-surface rounded-full"
        style={{
          padding: "0.25rem",
          boxShadow: "0 4px 20px rgba(69, 38, 39, 0.12)",
        }}
      >
        <ToggleGroup
          type="single"
          value={lang}
          onValueChange={(value) => {
            if (value) setLang(value);
          }}
          variant="outline"
          size="sm"
          className="rounded-full"
          style={{ gap: "0.125rem" }}
        >
          <ToggleGroupItem
            value="pt"
            className="rounded-full text-xs font-manrope font-semibold tracking-wider text-plum/50 data-[state=on]:bg-white/40 data-[state=on]:text-plum"
            style={{ padding: "0.25rem 1rem" }}
          >
            {t("lang_pt")}
          </ToggleGroupItem>
          <ToggleGroupItem
            value="en"
            className="rounded-full text-xs font-manrope font-semibold tracking-wider text-plum/50 data-[state=on]:bg-white/40 data-[state=on]:text-plum"
            style={{ padding: "0.25rem 1rem" }}
          >
            {t("lang_en")}
          </ToggleGroupItem>
          <ToggleGroupItem
            value="es"
            className="rounded-full text-xs font-manrope font-semibold tracking-wider text-plum/50 data-[state=on]:bg-white/40 data-[state=on]:text-plum"
            style={{ padding: "0.25rem 1rem" }}
          >
            {t("lang_es")}
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
