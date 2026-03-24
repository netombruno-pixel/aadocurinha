"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useLanguage } from "./LanguageContext";

const languages = [
  { code: "pt", flag: "🇧🇷", label: "PT" },
  { code: "en", flag: "🇺🇸", label: "EN" },
  { code: "es", flag: "🇪🇸", label: "ES" },
];

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="rounded-full"
      style={{
        backgroundColor: "rgba(255, 248, 246, 0.6)",
        padding: "0.2rem",
        border: "1px solid rgba(69, 38, 39, 0.08)",
      }}
    >
      <ToggleGroup
        type="single"
        value={lang}
        onValueChange={(value) => {
          if (value) setLang(value);
        }}
        className="rounded-full"
        style={{ gap: "0.125rem" }}
      >
        {languages.map(({ code, flag, label }) => (
          <ToggleGroupItem
            key={code}
            value={code}
            className="cursor-pointer rounded-full transition-all duration-200"
            style={{
              padding: "0.35rem 0.7rem",
              fontSize: "0.75rem",
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.04em",
              border: "none",
              backgroundColor: lang === code ? "#5E3C3C" : "transparent",
              color: lang === code ? "#FFFFFF" : "#745660",
              opacity: lang === code ? 1 : 0.7,
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              lineHeight: 1,
            }}
          >
            <span style={{ fontSize: "0.9rem", lineHeight: 1 }}>{flag}</span>
            <span>{label}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
