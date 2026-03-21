"use client";

import { useRef } from "react";
import { LanguageProvider } from "@/components/pascoa/LanguageContext";
import HeroStatic from "@/components/pascoa/HeroStatic";
import LanguageToggle from "@/components/pascoa/LanguageToggle";
import SectionOvosDeColher from "@/components/pascoa/SectionOvosDeColher";
import SectionMiniOvos from "@/components/pascoa/SectionMiniOvos";
import SectionBarraChocolate from "@/components/pascoa/SectionBarraChocolate";
import SectionKitConfeiteiro from "@/components/pascoa/SectionKitConfeiteiro";
import WhatsAppCTA from "@/components/pascoa/WhatsAppCTA";
import FooterPascoa from "@/components/pascoa/FooterPascoa";

export default function PascoaPage() {
  const heroRef = useRef(null);

  return (
    <LanguageProvider>
      {/* Fixed gradient background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, #1A1212, #FFF8F6 35%, #F5ECE9 70%, #EFE6E3)",
        }}
      />

      {/* Language toggle (appears after hero scroll) */}
      <LanguageToggle heroRef={heroRef} />

      {/* Page content */}
      <main>
        <HeroStatic ref={heroRef} />
        <SectionOvosDeColher />
        <SectionMiniOvos />
        <SectionBarraChocolate />
        <SectionKitConfeiteiro />
        <FooterPascoa />
      </main>

      {/* Sticky WhatsApp CTA */}
      <WhatsAppCTA heroRef={heroRef} />
    </LanguageProvider>
  );
}
