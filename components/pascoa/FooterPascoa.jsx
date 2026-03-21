"use client";

import { InstagramLogo } from "@phosphor-icons/react";
import { useLanguage } from "./LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function FooterPascoa() {
  const { t } = useLanguage();

  return (
    <footer
      className="flex flex-col items-center text-center"
      style={{ padding: "3rem 1.25rem", gap: "1rem" }}
    >
      {/* Brand mark */}
      <p className="font-noto text-2xl font-medium text-plum">A Docurinha</p>

      {/* Instagram link */}
      <a
        href="https://www.instagram.com/aadocurinha"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-plum/50 hover:text-plum transition-colors"
        style={{ gap: "0.5rem" }}
      >
        <InstagramLogo size={20} weight="duotone" />
        <span className="font-manrope text-sm">@aadocurinha</span>
      </a>

      {/* Separator */}
      <Separator className="bg-plum/10 max-w-[8rem]" />

      {/* Delivery note */}
      <p className="font-manrope text-xs text-plum/40">
        {t("footer_delivery")}
      </p>

      {/* Easter badge */}
      <Badge
        variant="outline"
        className="font-manrope font-semibold text-plum/50 tracking-widest uppercase border-plum/15 rounded-full"
        style={{
          padding: "0.25rem 1rem",
          height: "auto",
          fontSize: "0.75rem",
          marginTop: "0.5rem",
        }}
      >
        {t("footer_badge")}
      </Badge>
    </footer>
  );
}
