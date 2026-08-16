import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    url: SITE_URL,
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
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  inLanguage: "pt-BR",
  description:
    "Ferramenta de inteligência artificial que transforma as informações do seu produto em títulos, descrições, benefícios e anúncios completos para marketplaces e lojas virtuais.",
  offers: {
    "@type": "Offer",
    name: "Grátis",
    price: "0",
    priceCurrency: "BRL",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-canvas text-ink antialiased">
        <a
          href="#ferramenta"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Pular para o conteúdo principal
        </a>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
