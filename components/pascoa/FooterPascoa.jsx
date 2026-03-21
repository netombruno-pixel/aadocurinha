"use client";

import { InstagramLogo } from "@phosphor-icons/react";
import { useLanguage } from "./LanguageContext";

export default function FooterPascoa() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-5 flex flex-col items-center gap-4 text-center">
      <p className="font-noto text-2xl font-medium text-plum">A Docurinha</p>
      <a
        href="https://www.instagram.com/aadocurinha"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-plum/50 hover:text-plum transition-colors"
      >
        <InstagramLogo size={20} weight="duotone" />
        <span className="font-manrope text-sm">@aadocurinha</span>
      </a>
      <p className="font-manrope text-xs text-plum/40">{t("footer_delivery")}</p>
      <span className="glass-pill px-4 py-1 text-xs font-manrope font-semibold text-plum/50 tracking-widest uppercase mt-2">
        {t("footer_badge")}
      </span>
    </footer>
  );
}
