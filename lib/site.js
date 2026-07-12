/**
 * A Doçurinha — dados centrais do site.
 * Contato, redes sociais e catálogo de brigadeiros.
 */

export const WHATSAPP_NUMBER = "14072321740";
export const INSTAGRAM_HANDLE = "aadocurinha";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}`;
export const EMAIL = "contact@adocurinha.com";
export const LOCATION = "Windermere, FL";

export function waLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/* ------------------------------------------------------------------ */
/*  Brigadeiros — 25 sabores com foto real                             */
/*  tier: classic $2.50 · signature $2.75 · gourmet $3.00              */
/*        premium $3.50 · gold $5.00                                   */
/* ------------------------------------------------------------------ */

export const BRIGADEIRO_TIERS = {
  classic: { price: 2.5, labelKey: "tier_classic" },
  signature: { price: 2.75, labelKey: "tier_signature" },
  gourmet: { price: 3.0, labelKey: "tier_gourmet" },
  premium: { price: 3.5, labelKey: "tier_premium" },
  gold: { price: 5.0, labelKey: "tier_gold" },
};

export const BRIGADEIRO_FLAVORS = [
  { slug: "brigadeiro", name: "Brigadeiro Tradicional", tier: "classic", popular: true },
  { slug: "leite-ninho", name: "Leite Ninho", tier: "signature", popular: true, ext: "jpg" },
  { slug: "ninho-nutella", name: "Ninho com Nutella", tier: "premium", popular: true },
  { slug: "ferrero", name: "Ferrero Rocher", tier: "premium", popular: true },
  { slug: "beijinho", name: "Beijinho", tier: "classic" },
  { slug: "brigadeiro-branco", name: "Brigadeiro Branco", tier: "classic" },
  { slug: "branco-e-preto", name: "Branco & Preto", tier: "signature" },
  { slug: "casadinho", name: "Casadinho", tier: "gourmet" },
  { slug: "cajuzinho", name: "Cajuzinho", tier: "signature" },
  { slug: "pacoca", name: "Paçoca", tier: "signature" },
  { slug: "cafe-com-leite", name: "Café com Leite", tier: "signature" },
  { slug: "napolitano", name: "Napolitano", tier: "signature" },
  { slug: "prestigio", name: "Prestígio", tier: "signature" },
  { slug: "coco-colorido", name: "Coco Colorido", tier: "signature" },
  { slug: "crocante-de-ninho", name: "Crocante de Ninho", tier: "gourmet" },
  { slug: "morango-ninho", name: "Morango com Ninho", tier: "gourmet" },
  { slug: "limao-siciliano", name: "Limão Siciliano", tier: "gourmet" },
  { slug: "romeu-e-julieta", name: "Romeu e Julieta", tier: "gourmet" },
  { slug: "cereja", name: "Cereja", tier: "gourmet" },
  { slug: "surpresa-de-uva", name: "Surpresa de Uva", tier: "gourmet" },
  { slug: "bicho-de-pe", name: "Bicho de Pé", tier: "gourmet" },
  { slug: "oreo", name: "Oreo", tier: "gourmet" },
  { slug: "florido", name: "Florido", tier: "premium" },
  { slug: "letras-de-brigadeiro", name: "Letras de Brigadeiro", tier: "premium" },
  { slug: "brigadeiro-dourado", name: "Brigadeiro Dourado", tier: "gold", premium: true },
];

export function flavorImage(flavor) {
  return `/flavors/${flavor.slug}.${flavor.ext ?? "png"}`;
}

export function tierPrice(flavor) {
  return BRIGADEIRO_TIERS[flavor.tier].price;
}

export function formatUSD(value) {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
