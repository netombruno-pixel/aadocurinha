"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";
import { useLanguage } from "@/components/pascoa/LanguageContext";
import LanguageToggle from "@/components/pascoa/LanguageToggle";
import { waLink } from "@/lib/site";

const NAV_ITEMS = [
  { href: "/", key: "nav_home" },
  { href: "/brigadeiros", key: "nav_brigadeiros" },
  { href: "/naked-cakes", key: "nav_cakes" },
  { href: "/about", key: "nav_about" },
  { href: "/contact", key: "nav_contact" },
];

export default function SiteNav() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(253,245,245,0.92)" : "rgba(253,245,245,0.65)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: scrolled ? "0 1px 0 rgba(201,169,110,0.18), 0 8px 30px rgba(69,38,39,0.05)" : "none",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: "72rem",
          padding: scrolled ? "0.65rem 1.25rem" : "0.95rem 1.25rem",
          transition: "padding 0.3s",
        }}
      >
        <Link href="/" aria-label="A Doçurinha — início" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="A Doçurinha"
            style={{ height: scrolled ? "34px" : "40px", width: "auto", transition: "height 0.3s" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center" style={{ gap: "1.9rem" }}>
          {NAV_ITEMS.map(({ href, key }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="relative text-sm font-semibold tracking-wide transition-colors duration-200"
                style={{ color: active ? "#452627" : "#745660" }}
              >
                {t(key)}
                {active && (
                  <span
                    className="absolute left-1/2 -translate-x-1/2 rounded-full"
                    style={{ bottom: "-0.55rem", width: "4px", height: "4px", backgroundColor: "#C9A96E" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center" style={{ gap: "0.75rem" }}>
          <LanguageToggle />
          <a
            href={waLink(t("home_wa_message"))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-bold text-sm transition-transform duration-200 hover:scale-[1.03]"
            style={{
              gap: "0.45rem",
              background: "linear-gradient(135deg, #C9A96E, #9E7C3F)",
              color: "#FFFFFF",
              borderRadius: "9999px",
              padding: "0.6rem 1.15rem",
              boxShadow: "0 6px 20px rgba(201,169,110,0.35)",
            }}
          >
            <WhatsappLogo size={17} weight="fill" />
            {t("nav_order")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex items-center justify-center cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "9999px",
            border: "none",
            backgroundColor: "rgba(69,38,39,0.06)",
            color: "#452627",
          }}
        >
          {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden"
            style={{
              backgroundColor: "rgba(253,245,245,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 20px 40px rgba(69,38,39,0.08)",
            }}
          >
            <div className="flex flex-col" style={{ padding: "0.75rem 1.5rem 1.5rem", gap: "0.25rem" }}>
              {NAV_ITEMS.map(({ href, key }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className="font-serif text-xl font-semibold"
                    style={{
                      padding: "0.6rem 0",
                      color: active ? "#452627" : "#745660",
                      borderBottom: "1px solid rgba(201,169,110,0.12)",
                    }}
                  >
                    {t(key)}
                  </Link>
                );
              })}
              <div className="flex items-center justify-between" style={{ paddingTop: "1rem" }}>
                <LanguageToggle />
                <a
                  href={waLink(t("home_wa_message"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center font-bold text-sm"
                  style={{
                    gap: "0.45rem",
                    background: "linear-gradient(135deg, #C9A96E, #9E7C3F)",
                    color: "#FFFFFF",
                    borderRadius: "9999px",
                    padding: "0.6rem 1.15rem",
                    boxShadow: "0 6px 20px rgba(201,169,110,0.35)",
                  }}
                >
                  <WhatsappLogo size={17} weight="fill" />
                  {t("nav_order")}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
