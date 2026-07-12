import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.adocurinha.com"),
  title: "A Doçurinha | Doces Brasileiros Artesanais | Windermere, FL",
  description:
    "Brigadeiros gourmet, naked cakes e doces sazonais feitos à mão com chocolate belga Callebaut em Windermere, FL. Encomendas pelo WhatsApp — retirada ou entrega local.",
  keywords:
    "brigadeiros, naked cakes, doces brasileiros, Windermere FL, gourmet sweets, Brazilian desserts, chocolate belga",
  openGraph: {
    title: "A Doçurinha | Doces Brasileiros Artesanais",
    description:
      "Brigadeiros gourmet, naked cakes e doces sazonais feitos à mão com chocolate belga Callebaut em Windermere, FL.",
    type: "website",
    images: [
      {
        url: "/og-pascoa.jpg",
        width: 1200,
        height: 630,
        alt: "A Doçurinha — doces brasileiros artesanais",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}

