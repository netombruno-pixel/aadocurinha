export const metadata = {
  title: "Páscoa 2026 — A Docurinha",
  description:
    "Coleção artesanal de Páscoa. Ovos de colher, barras trufadas e brigadeiros feitos com chocolate belga Callebaut.",
  openGraph: {
    title: "Páscoa 2026 — A Docurinha",
    description:
      "Cardápio de Páscoa 2026 — brigadeiros e ovos artesanais feitos com amor em Windermere, FL.",
    type: "website",
    images: [
      {
        url: "/og-pascoa.jpg",
        width: 1200,
        height: 630,
        alt: "A Docurinha — Páscoa 2026",
      },
    ],
  },
};

export default function PascoaLayout({ children }) {
  return children;
}
