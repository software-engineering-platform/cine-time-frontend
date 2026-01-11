// src/app/layout.jsx
import Script from "next/script";
import "../styles/index.scss";
import "@/helpers/axios-setup";

export const metadata = {
  title: "CineTime",
  description:
    "CineTime – En yeni filmleri keşfedin ve sinema biletinizi kolayca alın.",
  keywords: ["sinema", "bilet", "film", "vizyondakiler", "CineTime"],
  icons: {
    icon: "/images/cinetime-logo.png",
    apple: "/images/cinetime-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" data-scroll-behavior="smooth">
      <head>
        <Script src="/env-config.js" strategy="beforeInteractive" />
      </head>
      <body>{children}</body>
    </html>
  );
}
