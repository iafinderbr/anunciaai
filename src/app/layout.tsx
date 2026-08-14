import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://anunciaai.vercel.app";

export const metadata: Metadata = { 
    verification: {
    google: "b4j8I76A1LeM5Xw-4E4JDeZMgAKKIAyNI3UjxQViiks",
  },
  metadataBase: new URL(siteUrl),
  title: {
    default: "AnunciaAI | Crie anúncios de produtos com Inteligência Artificial",
    template: "%s | AnunciaAI",
  },
  description:
    "Crie títulos, descrições, benefícios e anúncios para seus produtos usando inteligência artificial. Comece grátis.",
  keywords: [
    "criar anúncio com IA",
    "descrição de produto",
    "título para Mercado Livre",
    "anúncio Shopee",
    "copywriting para e-commerce",
    "gerador de descrição de produto",
  ],
  authors: [{ name: "AnunciaAI" }],
  creator: "AnunciaAI",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "AnunciaAI",
    title: "AnunciaAI | Crie anúncios de produtos com Inteligência Artificial",
    description:
      "Crie títulos, descrições, benefícios e anúncios para seus produtos usando inteligência artificial. Comece grátis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnunciaAI | Crie anúncios de produtos com Inteligência Artificial",
    description:
      "Crie títulos, descrições, benefícios e anúncios para seus produtos usando inteligência artificial. Comece grátis.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AnunciaAI",
  url: siteUrl,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  inLanguage: "pt-BR",
  description:
    "Ferramenta de inteligência artificial que transforma as informações do seu produto em títulos, descrições, benefícios e anúncios completos para marketplaces e lojas virtuais.",
  offers: [
    { "@type": "Offer", name: "Grátis", price: "0", priceCurrency: "BRL" },
    { "@type": "Offer", name: "Pro", price: "19.90", priceCurrency: "BRL" },
    { "@type": "Offer", name: "Lojista", price: "49.90", priceCurrency: "BRL" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-canvas text-ink antialiased">
        <a
          href="#ferramenta"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Pular para a ferramenta
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
