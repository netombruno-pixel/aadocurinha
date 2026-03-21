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
      <div className="min-h-screen bg-nude">
        {/* Language toggle (appears after hero scroll) */}
        <LanguageToggle heroRef={heroRef} />

        {/* Page content */}
        <main>
          <HeroStatic ref={heroRef} />

          {/* Dark-to-light gradient transition below hero */}
          <div
            className="h-32"
            style={{
              marginTop: "-1px",
              background:
                "linear-gradient(to bottom, #1A1212, #3D2526 30%, #745660 60%, #F5ECE9)",
            }}
          />

          {/* Menu sections on textured light background */}
          <div className="bg-nude bg-grain">
            <div className="max-w-2xl mx-auto">
              <SectionOvosDeColher />
              <SectionMiniOvos />
            </div>
          </div>

          <div className="bg-soft-pink bg-grain">
            <div className="max-w-2xl mx-auto">
              <SectionBarraChocolate />
              <SectionKitConfeiteiro />
            </div>
          </div>

          <div className="bg-cream bg-grain">
            <div className="max-w-2xl mx-auto">
              <FooterPascoa />
            </div>
          </div>
        </main>

        {/* Sticky WhatsApp CTA */}
        <WhatsAppCTA heroRef={heroRef} />
      </div>
    </LanguageProvider>
  );
}
