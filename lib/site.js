/**
 * A Doçurinha — dados centrais do site.
 * Contato, redes sociais e catálogo de brigadeiros.
 * Cardápio e preços conforme o menu oficial (www.adocurinha.com).
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
/*  Brigadeiros — vendidos por encomenda, mínimo 25 unidades por sabor */
/*  Preços por lote: Clássicos $90/100 · $55/50                        */
/*                   Especiais $100/100 · $65/50                       */
/*                   Premiums  $110/100 · $75/50                       */
/* ------------------------------------------------------------------ */

export const BRIGADEIRO_MIN_UNITS = 25;

export const BRIGADEIRO_CATEGORIES = {
  classicos: { per100: 90, per50: 55, labelKey: "cat_classicos" },
  especiais: { per100: 100, per50: 65, labelKey: "cat_especiais" },
  premiums: { per100: 110, per50: 75, labelKey: "cat_premiums" },
};

export const BRIGADEIRO_FLAVORS = [
  /* Clássicos */
  { slug: "brigadeiro", name: "Brigadeiro Belga", category: "classicos", popular: true },
  { slug: "casadinho", name: "Casadinho", category: "classicos" },
  { slug: "bicho-de-pe", name: "Bicho de Pé (Morango)", category: "classicos" },
  { slug: "leite-ninho", name: "Leite Ninho", category: "classicos", popular: true, ext: "jpg" },
  { slug: "beijinho", name: "Beijinho", category: "classicos" },
  { slug: "cajuzinho", name: "Cajuzinho", category: "classicos" },
  { slug: "limao-siciliano", name: "Limão Siciliano", category: "classicos" },
  { slug: "cafe-com-leite", name: "Café com Leite", category: "classicos" },
  /* Especiais */
  { slug: "ninho-nutella", name: "Ninho com Nutella", category: "especiais", popular: true },
  { slug: "churros", name: "Churros", category: "especiais", noPhoto: true },
  { slug: "pacoca", name: "Paçoca", category: "especiais" },
  { slug: "romeu-e-julieta", name: "Romeu e Julieta", category: "especiais" },
  { slug: "mms", name: "M&M’s", category: "especiais", noPhoto: true },
  { slug: "ferrero", name: "Ferrero", category: "especiais", popular: true },
  { slug: "oreo", name: "Oreo", category: "especiais" },
  { slug: "prestigio", name: "Prestígio", category: "especiais" },
  { slug: "kinder", name: "Kinder", category: "especiais", noPhoto: true },
  { slug: "brigadeiro-dourado", name: "Brigadeiro Dourado / Rose Gold", category: "especiais" },
  { slug: "cereja", name: "Cereja", category: "especiais" },
  { slug: "brigadeiro-branco", name: "Brigadeiro Branco", category: "especiais" },
  { slug: "morango-ninho", name: "Morangoninho", category: "especiais" },
  { slug: "napolitano", name: "Napolitano", category: "especiais" },
  { slug: "casadinho-plus", name: "Casadinho Plus", category: "especiais", noPhoto: true },
  { slug: "milho-verde", name: "Milho Verde", category: "especiais", noPhoto: true },
  /* Premiums */
  { slug: "surpresa-de-uva", name: "Surpresa de Uva", category: "premiums" },
  { slug: "coco-colorido", name: "Arco-Íris de Coco", category: "premiums" },
  { slug: "florido", name: "Brigadeiro Florido", category: "premiums" },
  { slug: "crocante-de-ninho", name: "Chocolate Branco Crocante", category: "premiums" },
  { slug: "letras-de-brigadeiro", name: "Letras de Brigadeiro", category: "premiums" },
  { slug: "maracuja", name: "Maracujá", category: "premiums", noPhoto: true },
  { slug: "mini-milho-verde", name: "Mini Milho Verde", category: "premiums", noPhoto: true },
];

export function flavorImage(flavor) {
  return flavor.noPhoto ? null : `/flavors/${flavor.slug}.${flavor.ext ?? "png"}`;
}

export function categoryPricing(flavor) {
  return BRIGADEIRO_CATEGORIES[flavor.category];
}

export function formatUSD(value) {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

/* ------------------------------------------------------------------ */
/*  Naked Cakes — 4 camadas de massa, 3 de recheio; preços "a partir"  */
/* ------------------------------------------------------------------ */

export const CAKE_SIZES = [
  { key: "four", inches: 4, servings: "4–6", price: 45 },
  { key: "six", inches: 6, servings: "10–15", price: 75 },
  { key: "eight", inches: 8, servings: "20–25", price: 115 },
  { key: "nine", inches: 9, servings: "30–35", price: 140 },
  { key: "ten", inches: 10, servings: "40–45", price: 168 },
];

export const CAKE_MASSAS = ["massa_branca", "massa_chocolate", "massa_cenoura"];

export const CAKE_RECHEIOS = [
  "recheio_ninho",
  "recheio_preto_belga",
  "recheio_cocada",
  "recheio_doce_de_leite",
  "recheio_limao",
  "recheio_maracuja",
];

export const CAKE_OPCIONAIS = [
  { key: "opcional_morango", extra: 3 },
  { key: "opcional_kinder" },
  { key: "opcional_nutella" },
  { key: "opcional_geleia_vermelhas" },
  { key: "opcional_geleia_amarelas" },
];
