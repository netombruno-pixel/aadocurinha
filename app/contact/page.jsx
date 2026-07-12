"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  WhatsappLogo,
  InstagramLogo,
  EnvelopeSimple,
  MapPin,
  Info,
  PaperPlaneTilt,
  Diamond,
} from "@phosphor-icons/react";
import PageShell, { Eyebrow, GoldRule, Reveal } from "@/components/site/PageShell";
import { useLanguage } from "@/components/pascoa/LanguageContext";
import { waLink, WHATSAPP_NUMBER, INSTAGRAM_URL, INSTAGRAM_HANDLE, EMAIL, LOCATION } from "@/lib/site";

const inputStyle = {
  width: "100%",
  backgroundColor: "#FFFFFF",
  border: "none",
  borderRadius: "0.9rem",
  padding: "0.85rem 1.1rem",
  fontSize: "0.92rem",
  color: "#452627",
  fontFamily: "var(--font-manrope)",
  boxShadow: "inset 0 0 0 1px rgba(212,194,194,0.35), 0 2px 8px rgba(69,38,39,0.03)",
  outline: "none",
};

function Field({ label, children }) {
  return (
    <label className="flex flex-col" style={{ gap: "0.45rem" }}>
      <span className="font-semibold" style={{ fontSize: "0.8rem", color: "#452627" }}>{label}</span>
      {children}
    </label>
  );
}

function InfoCard({ title, icon: Icon, children }) {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "1.5rem",
        padding: "1.7rem 1.8rem",
        boxShadow: "0 8px 30px rgba(69,38,39,0.06)",
      }}
    >
      <h3 className="flex items-center font-serif font-bold" style={{ gap: "0.6rem", fontSize: "1.15rem", color: "#452627", marginBottom: "1.1rem" }}>
        <Icon size={20} weight="duotone" style={{ color: "#9E7C3F" }} />
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function ContactPage() {
  return (
    <PageShell>
      <ContactContent />
    </PageShell>
  );
}

function ContactContent() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    orderType: "brigadeiros",
    eventDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const typeLabels = {
      brigadeiros: t("contact_type_brig"),
      "naked-cake": t("contact_type_cake"),
      both: t("contact_type_both"),
    };
    const lines = [
      t("contact_wa_intro"),
      "",
      `${t("contact_name")}: ${formData.name}`,
      `${t("contact_phone")}: ${formData.phone}`,
      `${t("contact_order_type")}: ${typeLabels[formData.orderType]}`,
      formData.eventDate ? `${t("contact_date")}: ${formData.eventDate}` : null,
      "",
      formData.message,
    ].filter((l) => l !== null);
    window.open(waLink(lines.join("\n")), "_blank");
  };

  const orderTypes = [
    { value: "brigadeiros", label: t("contact_type_brig") },
    { value: "naked-cake", label: t("contact_type_cake") },
    { value: "both", label: t("contact_type_both") },
  ];

  const infoItems = [t("contact_info_1"), t("contact_info_2"), t("contact_info_3"), t("contact_info_4")];

  return (
    <main>
      {/* Hero */}
      <header className="mx-auto text-center" style={{ maxWidth: "44rem", padding: "8.5rem 1.5rem 1rem" }}>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <Eyebrow style={{ marginBottom: "1.1rem" }}>{t("contact_eyebrow")}</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif font-bold tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 3.6rem)", color: "#452627", lineHeight: 1.05, marginBottom: "1rem" }}
        >
          {t("contact_title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ color: "#504444", fontSize: "1rem", lineHeight: 1.7 }}
        >
          {t("contact_desc")}
        </motion.p>
      </header>

      <GoldRule padding="1.5rem 0" />

      <section className="mx-auto grid grid-cols-1 lg:grid-cols-5" style={{ maxWidth: "72rem", padding: "0 1.5rem 5rem", gap: "1.75rem" }}>
        {/* Form */}
        <Reveal as="div" className="lg:col-span-3">
          <div
            style={{
              backgroundColor: "#F5EDE8",
              borderRadius: "1.75rem",
              padding: "2.2rem 2rem",
              boxShadow: "0 10px 40px rgba(69,38,39,0.06)",
            }}
          >
            <h2 className="font-serif font-bold" style={{ fontSize: "1.5rem", color: "#452627", marginBottom: "0.4rem" }}>
              {t("contact_form_title")}
            </h2>
            <p style={{ color: "#745660", fontSize: "0.85rem", marginBottom: "1.7rem" }}>{t("contact_form_desc")}</p>

            <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: "1.2rem" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "1.2rem" }}>
                <Field label={t("contact_name")}>
                  <input
                    name="name"
                    placeholder={t("contact_name_ph")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </Field>
                <Field label={t("contact_phone")}>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="(407) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </Field>
              </div>

              <Field label={t("contact_order_type")}>
                <div className="flex flex-wrap" style={{ gap: "0.5rem" }}>
                  {orderTypes.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, orderType: type.value })}
                      className="cursor-pointer font-semibold transition-all duration-200"
                      style={{
                        border: "none",
                        borderRadius: "9999px",
                        padding: "0.6rem 1.25rem",
                        fontSize: "0.85rem",
                        backgroundColor: formData.orderType === type.value ? "#452627" : "#FFFFFF",
                        color: formData.orderType === type.value ? "#FFF8F4" : "#745660",
                        boxShadow: "0 2px 8px rgba(69,38,39,0.05)",
                      }}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label={t("contact_date")}>
                <input
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </Field>

              <Field label={t("contact_message")}>
                <textarea
                  name="message"
                  placeholder={t("contact_message_ph")}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ ...inputStyle, resize: "vertical", minHeight: "7rem" }}
                />
              </Field>

              <button
                type="submit"
                className="flex items-center justify-center cursor-pointer font-bold transition-transform duration-200 hover:scale-[1.02]"
                style={{
                  gap: "0.55rem",
                  border: "none",
                  background: "linear-gradient(135deg, #C9A96E, #9E7C3F)",
                  color: "#FFFFFF",
                  borderRadius: "9999px",
                  padding: "1rem 1.7rem",
                  fontSize: "0.95rem",
                  fontFamily: "var(--font-manrope)",
                  boxShadow: "0 10px 30px rgba(201,169,110,0.35)",
                  marginTop: "0.4rem",
                }}
              >
                <PaperPlaneTilt size={19} weight="fill" />
                {t("contact_send")}
              </button>
            </form>
          </div>
        </Reveal>

        {/* Info column */}
        <div className="lg:col-span-2 flex flex-col" style={{ gap: "1.4rem" }}>
          <Reveal as="div" delay={0.1}>
            <InfoCard title={t("contact_quick_title")} icon={WhatsappLogo}>
              <div className="flex flex-col" style={{ gap: "0.8rem" }}>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-opacity hover:opacity-70"
                  style={{ gap: "0.6rem", color: "#504444", fontSize: "0.9rem" }}
                >
                  <WhatsappLogo size={18} weight="duotone" style={{ color: "#9E7C3F" }} />
                  WhatsApp: ({WHATSAPP_NUMBER.slice(1, 4)}) {WHATSAPP_NUMBER.slice(4, 7)}-{WHATSAPP_NUMBER.slice(7)}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center transition-opacity hover:opacity-70"
                  style={{ gap: "0.6rem", color: "#504444", fontSize: "0.9rem" }}
                >
                  <EnvelopeSimple size={18} weight="duotone" style={{ color: "#9E7C3F" }} />
                  {EMAIL}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-opacity hover:opacity-70"
                  style={{ gap: "0.6rem", color: "#504444", fontSize: "0.9rem" }}
                >
                  <InstagramLogo size={18} weight="duotone" style={{ color: "#9E7C3F" }} />
                  @{INSTAGRAM_HANDLE}
                </a>
                <span className="flex items-center" style={{ gap: "0.6rem", color: "#504444", fontSize: "0.9rem" }}>
                  <MapPin size={18} weight="duotone" style={{ color: "#9E7C3F" }} />
                  {LOCATION}
                </span>
              </div>
            </InfoCard>
          </Reveal>

          <Reveal as="div" delay={0.2}>
            <InfoCard title={t("contact_info_title")} icon={Info}>
              <ul className="flex flex-col" style={{ listStyle: "none", padding: 0, margin: 0, gap: "0.65rem" }}>
                {infoItems.map((item) => (
                  <li key={item} className="flex items-start" style={{ gap: "0.55rem" }}>
                    <Diamond size={9} weight="fill" style={{ color: "#C9A96E", flexShrink: 0, marginTop: "0.35rem" }} />
                    <span style={{ color: "#504444", fontSize: "0.85rem", lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
