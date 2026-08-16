import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const paths = [
  "",
  "/gerador-de-anuncios-mercado-livre",
  "/gerador-de-descricao-de-produto",
  "/gerador-de-titulos-para-produtos",
  "/gerador-de-nomes-para-produtos",
  "/gerador-de-palavras-chave-para-produtos",
  "/gerador-de-anuncios-shopee",
  "/gerador-de-legendas-para-instagram",
  "/gerador-de-anuncios-olx",
  "/gerador-de-anuncios-para-loja-virtual",
  "/gerador-de-anuncios-facebook-marketplace",
  "/como-criar-anuncio-no-mercado-livre",
  "/como-fazer-descricao-para-mercado-livre",
  "/como-criar-titulo-para-mercado-livre",
  "/como-preencher-ficha-tecnica-mercado-livre",
  "/como-criar-anuncio-na-shopee",
  "/como-criar-titulo-para-shopee",
  "/como-fazer-descricao-para-shopee",
  "/como-criar-anuncio-na-olx",
  "/como-criar-titulo-para-olx",
  "/como-fazer-descricao-para-olx",
  "/como-criar-anuncio-no-facebook-marketplace",
  "/como-criar-titulo-para-facebook-marketplace",
  "/como-fazer-descricao-para-facebook-marketplace",
  "/como-criar-pagina-de-produto-para-loja-virtual",
  "/seo-para-pagina-de-produto",
  "/como-fazer-ficha-tecnica-de-produto",
  "/como-criar-legenda-para-instagram",
  "/guias",
  "/como-fazer-descricao-de-produto",
  "/como-criar-titulo-de-produto",
  "/como-escolher-palavras-chave-para-produtos",
  "/como-criar-nome-de-produto",
  "/sobre",
  "/privacidade",
  "/termos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${SITE_URL}${path}` }));
}
