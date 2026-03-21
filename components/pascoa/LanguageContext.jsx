"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext(null);

const SUPPORTED_LANGS = ["pt", "en", "es"];

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("pt");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang && SUPPORTED_LANGS.includes(urlLang)) {
      setLangState(urlLang);
    }
  }, []);

  const setLang = useCallback((newLang) => {
    if (!SUPPORTED_LANGS.includes(newLang)) return;
    setLangState(newLang);
    document.documentElement.lang = newLang;
    const url = new URL(window.location);
    url.searchParams.set("lang", newLang);
    window.history.replaceState({}, "", url);
  }, []);

  const t = useCallback(
    (key) => {
      return translations[lang]?.[key] ?? translations.pt?.[key] ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
