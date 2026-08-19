import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/site";
import "./globals.css";
import "./professional-dark.css";
import "./professional-dark-pages.css";
import "./account-dark.css";
import "./generator-dark.css";
import "./final-polish.css";

const ADSENSE_CLIENT = "ca-pub-2381421388873161";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AnunciaAI | Gerador de anúncios para produtos",
    template: "%s | AnunciaAI",
  },
  description:
    "Crie títulos, descrições, benefícios e anúncios para produtos. Ferramentas grátis com login Google simples e conteúdo feito para revisar antes de publicar.",
  keywords: [
    "gerador de anúncios",
    "descrição de produto",
    "título para Mercado Livre",
    "anúncio Shopee",
    "conteúdo para e-commerce",
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
    title: "AnunciaAI | Gerador de anúncios para produtos",
    description:
      "Crie títulos, descrições, benefícios e anúncios para produtos. Ferramentas grátis com login Google simples e conteúdo feito para revisar antes de publicar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnunciaAI | Gerador de anúncios para produtos",
    description:
      "Crie títulos, descrições, benefícios e anúncios para produtos. Ferramentas grátis com login Google simples e conteúdo feito para revisar antes de publicar.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0c0d0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-canvas text-ink antialiased">
        <a
          href="#inicio-conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Pular para o conteúdo principal
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
