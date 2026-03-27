import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fireblocker.com"),
  title: "Fire Blocker | Otomatik Yangın Söndürme Sistemi",
  description:
    "Fire Blocker otomatik yangın algılama ve söndürme sistemi. 3 saniyede devreye giren, %99.9 etkili, 10 yıl raf ömrüne sahip kompakt yangın söndürücü. Ev, araç ve iş yeriniz için güvenlik çözümü.",
  keywords: [
    "yangın söndürücü",
    "otomatik yangın söndürme",
    "fire blocker",
    "yangın güvenliği",
    "yangın algılama",
    "otomatik söndürücü",
    "elektrik yangını",
    "ev güvenliği",
    "araç yangın söndürücü",
  ],
  authors: [{ name: "Fire Blocker" }],
  creator: "Fire Blocker",
  publisher: "Fire Blocker",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Fire Blocker | Otomatik Yangın Söndürme Sistemi",
    description:
      "Otomatik yangın algılama ve söndürme. 3 saniyede devreye giren, %99.9 etkili kompakt yangın söndürücü.",
    url: "https://fireblocker.com",
    siteName: "Fire Blocker",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fire Blocker Otomatik Yangın Söndürücü",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fire Blocker | Otomatik Yangın Söndürme Sistemi",
    description:
      "Otomatik yangın algılama ve söndürme. 3 saniyede devreye giren, %99.9 etkili kompakt yangın söndürücü.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://fireblocker.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#dc2626" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Fire Blocker",
              "url": "https://fireblocker.com",
              "logo": "https://fireblocker.com/favicon.ico",
              "description": "Otomatik yangın algılama ve söndürme sistemi. 3 saniyede devreye giren, %99.9 etkili, 10 yıl raf ömrüne sahip kompakt yangın söndürücü.",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
