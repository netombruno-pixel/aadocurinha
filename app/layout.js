import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const noto = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "A Docurinha | Handmade Brigadeiros & Naked Cakes | Windermere, FL",
  description: "A Docurinha offers artisanal brigadeiros and elegant naked cakes made with love in Windermere, FL. Perfect for any occasion. Order now for pickup or local delivery.",
  keywords: "brigadeiros, naked cakes, artisanal desserts, Windermere FL, gourmet sweets, Brazilian desserts",
  openGraph: {
    title: "A Docurinha | Handmade Brigadeiros & Naked Cakes",
    description: "Artisanal brigadeiros and elegant naked cakes made with love",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${noto.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}

