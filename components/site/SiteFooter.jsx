"use client";

import Link from "next/link";
import { InstagramLogo, WhatsappLogo, EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { useLanguage } from "@/components/pascoa/LanguageContext";
import { waLink, INSTAGRAM_URL, INSTAGRAM_HANDLE, EMAIL, LOCATION } from "@/lib/site";

const NAV_ITEMS = [
  { href: "/", key: "nav_home" },
  { href: "/brigadeiros", key: "nav_brigadeiros" },
  { href: "/naked-cakes", key: "nav_cakes" },
  { href: "/pascoa", key: "nav_pascoa" },
  { href: "/contact", key: "nav_contact" },
];

export default function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer style={{ backgroundColor: "#F5ECE9" }}>
      <div className="mx-auto" style={{ maxWidth: "72rem", padding: "4rem 1.5rem 2rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "2.5rem" }}>
          {/* Brand */}
          <div className="flex flex-col" style={{ gap: "1rem" }}>
            <img src="/logo-text.png" alt="A Doçurinha" style={{ height: "52px", width: "auto", alignSelf: "flex-start" }} />
            <p style={{ color: "#745660", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
              {t("footer_tagline")}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4
              className="uppercase font-bold tracking-widest"
              style={{ fontFamily: "var(--font-manrope)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "#9E7C3F", marginBottom: "1.1rem" }}
            >
              {t("footer_nav")}
            </h4>
            <nav className="flex flex-col" style={{ gap: "0.6rem" }}>
              {NAV_ITEMS.map(({ href, key }) => (
                <Link
                  key={href}
                  href={href}
                  className="transition-colors duration-200 hover:opacity-70"
                  style={{ color: "#504444", fontSize: "0.9rem" }}
                >
                  {t(key)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="uppercase font-bold tracking-widest"
              style={{ fontFamily: "var(--font-manrope)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "#9E7C3F", marginBottom: "1.1rem" }}
            >
              {t("footer_contact")}
            </h4>
            <div className="flex flex-col" style={{ gap: "0.7rem" }}>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition-opacity hover:opacity-70"
                style={{ gap: "0.5rem", color: "#504444", fontSize: "0.9rem" }}
              >
                <WhatsappLogo size={17} weight="duotone" style={{ color: "#9E7C3F" }} />
                WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center transition-opacity hover:opacity-70"
                style={{ gap: "0.5rem", color: "#504444", fontSize: "0.9rem" }}
              >
                <EnvelopeSimple size={17} weight="duotone" style={{ color: "#9E7C3F" }} />
                {EMAIL}
              </a>
              <span className="flex items-center" style={{ gap: "0.5rem", color: "#504444", fontSize: "0.9rem" }}>
                <MapPin size={17} weight="duotone" style={{ color: "#9E7C3F" }} />
                {LOCATION}
              </span>
            </div>
          </div>

          {/* Social + hours */}
          <div>
            <h4
              className="uppercase font-bold tracking-widest"
              style={{ fontFamily: "var(--font-manrope)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "#9E7C3F", marginBottom: "1.1rem" }}
            >
              {t("footer_follow")}
            </h4>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-opacity hover:opacity-70"
              style={{ gap: "0.5rem", color: "#504444", fontSize: "0.9rem", marginBottom: "1.4rem" }}
            >
              <InstagramLogo size={17} weight="duotone" style={{ color: "#9E7C3F" }} />
              @{INSTAGRAM_HANDLE}
            </a>
            <h4
              className="uppercase font-bold tracking-widest"
              style={{ fontFamily: "var(--font-manrope)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "#9E7C3F", margin: "0 0 0.8rem" }}
            >
              {t("footer_hours")}
            </h4>
            <p style={{ color: "#504444", fontSize: "0.85rem", lineHeight: 1.8, margin: 0 }}>
              {t("contact_hours_week")}: 9AM – 6PM
              <br />
              {t("contact_hours_sat")}: 10AM – 4PM
              <br />
              {t("contact_hours_sun")}: {t("contact_hours_appt")}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            margin: "3rem 0 1.5rem",
            background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.45), transparent)",
          }}
        />

        <div className="flex flex-col md:flex-row items-center justify-between" style={{ gap: "0.75rem" }}>
          <p style={{ color: "#745660", fontSize: "0.78rem", margin: 0 }}>
            © {new Date().getFullYear()} A Doçurinha. {t("footer_rights")}
          </p>
          <p
            className="uppercase font-semibold tracking-widest text-shimmer"
            style={{ fontSize: "0.62rem", letterSpacing: "0.2em", margin: 0 }}
          >
            {t("footer_made")}
          </p>
        </div>
      </div>
    </footer>
  );
}
