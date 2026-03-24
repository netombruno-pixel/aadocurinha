/**
 * Cardápio de Páscoa 2026 — A Docurinha
 *
 * Arquivo central de dados dos produtos.
 * Para editar preços, pesos ou sabores, altere apenas este arquivo.
 * As traduções de nomes e descrições ficam em lib/translations.js.
 *
 * NOTA: Todos os preços são em dólares americanos (USD).
 */

export const menuPascoa = {
  /* ------------------------------------------------------------------ */
  /*  Caixa com 2 Ovos de Colher                                        */
  /*  2 ovos com casca de 150 g cada · Peso total: 450 g a 500 g       */
  /*  A foto principal é a caixa; as fotos individuais são sabores.     */
  /* ------------------------------------------------------------------ */
  ovosDeColher: {
    details: {
      shellWeight: "150 g cada",
      totalWeight: "450 g a 500 g",
      quantity: 2,
    },
    price: 49.9,
    priceFormatted: "$49.90",
    priceLabel: "box",
    /** Foto do produto real (a caixa com 2 ovos) */
    boxImage: "/pascoa/box-of-2-easter-eggs.png",
    /** Fotos individuais são ilustrações dos sabores disponíveis */
    items: [
      {
        id: "ovo-ferrero-rocher",
        nameKey: "ovo_flavor_1_name",
        descKey: "ovo_flavor_1_desc",
        badge: "bestseller",
        image: "/pascoa/ovo-de-colher_ferrero-rocher.png",
      },
      {
        id: "ovo-kinder-bueno",
        nameKey: "ovo_flavor_2_name",
        descKey: "ovo_flavor_2_desc",
        badge: "popular",
        image: "/pascoa/ovo-de-colher_kinder-bueno.png",
      },
      {
        id: "ovo-prestigio",
        nameKey: "ovo_flavor_3_name",
        descKey: "ovo_flavor_3_desc",
        badge: "popular",
        image: "/pascoa/ovo-de-colher_prestigio.png",
      },
      {
        id: "ovo-frutas-vermelhas",
        nameKey: "ovo_flavor_4_name",
        descKey: "ovo_flavor_4_desc",
        badge: "new",
        image: "/pascoa/ovo-de-colher_frutas-vermelhas.png",
      },
      {
        id: "ovo-maracuja",
        nameKey: "ovo_flavor_5_name",
        descKey: "ovo_flavor_5_desc",
        badge: "tropical",
        image: "/pascoa/ovo-de-colher_maracuja.png",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  Mini Ovinhos — Caixa com 6                                        */
  /*  Casca 50 g cada                                                   */
  /* ------------------------------------------------------------------ */
  miniOvinhos: {
    details: {
      shellWeight: "50 g cada",
      quantity: 6,
    },
    price: 44.9,
    priceFormatted: "$44.90",
    priceLabel: "caixa com 6",
    items: [
      {
        id: "mini-ovinhos-caixa",
        nameKey: "mini_ovinhos_name",
        descKey: "mini_ovinhos_desc",
        image: "/pascoa/ovos-sortidos.png",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  Mini Ovinho Duo — Unidade                                         */
  /*  Casca 50 g · Mínimo 2 unidades                                   */
  /* ------------------------------------------------------------------ */
  miniOvinhoDuo: {
    details: {
      shellWeight: "50 g",
      minOrder: 2,
    },
    price: 7.0,
    priceFormatted: "$7.00",
    priceLabel: "unidade",
    minOrderNote: "mínimo 2 unidades",
    items: [
      {
        id: "mini-ovinho-duo",
        nameKey: "mini_ovinho_duo_name",
        descKey: "mini_ovinho_duo_desc",
        image: "/pascoa/ovo-embrulhado.png",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  Caixinha de Brigadeiros                                           */
  /*  4 unidades · Mínimo 2 caixinhas                                  */
  /* ------------------------------------------------------------------ */
  brigadeiros: {
    details: {
      quantity: 4,
      minOrder: 2,
    },
    price: 8.0,
    priceFormatted: "$8.00",
    priceLabel: "caixinha com 4",
    minOrderNote: "mínimo 2 caixinhas",
    items: [
      {
        id: "brigadeiros-sortidos",
        nameKey: "brigadeiros_name",
        descKey: "brigadeiros_desc",
        image: "/pascoa/brigadeiros_caixinha-com-4.png",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  Barras Trufadas                                                   */
  /*  Aprox. 270 g a 300 g                                              */
  /* ------------------------------------------------------------------ */
  barrasTrufadas: {
    details: {
      weight: "270 g a 300 g",
    },
    price: 25.0,
    priceFormatted: "$25.00",
    priceLabel: "unidade",
    items: [
      {
        id: "barra-oreo",
        nameKey: "barra_1_name",
        descKey: "barra_1_desc",
        image: "/pascoa/barra-trufada-oreo.png",
      },
      {
        id: "barra-frutas-vermelhas",
        nameKey: "barra_2_name",
        descKey: "barra_2_desc",
        image: "/pascoa/barra-trufada_frutas-vermelhas.png",
      },
      {
        id: "barra-maracuja",
        nameKey: "barra_3_name",
        descKey: "barra_3_desc",
        image: "/pascoa/barra-trufada_maracuja.png",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  Kit Confeiteiro                                                   */
  /* ------------------------------------------------------------------ */
  kitConfeiteiro: {
    details: {},
    price: 35,
    priceFormatted: "$35",
    priceLabel: null,
    items: [
      {
        id: "kit-confeiteiro",
        nameKey: "kit_name",
        descKey: "kit_desc",
        image: "/pascoa/kit-confeiteiro.png",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Informações importantes                                            */
/* ------------------------------------------------------------------ */
export const businessInfo = {
  pickup: {
    date: "2026-04-04",
    timeStart: "17:00",
    timeEnd: "20:00",
  },
  payment: {
    depositPercent: 50,
  },
  delivery: {
    available: true,
    feeNote: "consultar localização para taxa",
  },
  chocolate: "Callebaut (belga)",
  storage: "refrigerado",
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Formata preço em USD */
export function formatPrice(value) {
  if (value == null) return null;
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

/** Retorna todos os produtos como lista plana */
export function getAllProducts() {
  return Object.values(menuPascoa).flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      price: category.price,
      priceFormatted: category.priceFormatted,
      priceLabel: category.priceLabel,
      details: category.details,
    }))
  );
}
