import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

