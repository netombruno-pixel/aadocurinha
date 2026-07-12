"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LanguageProvider } from "@/components/pascoa/LanguageContext";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";

/** Page wrapper: language context + nav + grain background + footer. */
export default function PageShell({ children }) {
  return (
    <LanguageProvider>
      <div
        className="min-h-screen"
        style={{
          backgroundColor: "#FDF5F5",
          color: "#452627",
          fontFamily: "var(--font-manrope)",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      >
        <SiteNav />
        {children}
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}

/** Scroll-reveal section. */
export function Reveal({ children, className = "", style = {}, delay = 0, as = "section" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Tag = motion[as] ?? motion.section;

  return (
    <Tag
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}

/** Small uppercase gold eyebrow label. */
export function Eyebrow({ children, style = {} }) {
  return (
    <span
      className="uppercase font-bold tracking-widest block text-shimmer"
      style={{
        fontFamily: "var(--font-manrope)",
        fontSize: "0.68rem",
        letterSpacing: "0.25em",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

/** Thin gold divider with diamond. */
export function GoldRule({ padding = "3rem 0" }) {
  return (
    <div className="flex items-center justify-center" style={{ padding }}>
      <span style={{ height: "1px", width: "64px", background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }} />
      <span
        style={{
          width: "7px",
          height: "7px",
          margin: "0 0.8rem",
          backgroundColor: "#C9A96E",
          transform: "rotate(45deg)",
        }}
      />
      <span style={{ height: "1px", width: "64px", background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }} />
    </div>
  );
}
