import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://anunciaai.vercel.app", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://anunciaai.vercel.app/gerador-de-anuncios-mercado-livre", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://anunciaai.vercel.app/gerador-de-descricao-de-produto", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://anunciaai.vercel.app/gerador-de-titulos-para-produtos", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://anunciaai.vercel.app/gerador-de-nomes-para-produtos", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://anunciaai.vercel.app/gerador-de-palavras-chave-para-produtos", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://anunciaai.vercel.app/gerador-de-anuncios-shopee", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://anunciaai.vercel.app/gerador-de-legendas-para-instagram", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://anunciaai.vercel.app/gerador-de-anuncios-olx", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://anunciaai.vercel.app/gerador-de-anuncios-para-loja-virtual", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://anunciaai.vercel.app/gerador-de-anuncios-facebook-marketplace", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://anunciaai.vercel.app/como-criar-anuncio-no-mercado-livre", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://anunciaai.vercel.app/como-criar-anuncio-na-shopee", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://anunciaai.vercel.app/como-criar-anuncio-na-olx", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://anunciaai.vercel.app/como-criar-anuncio-no-facebook-marketplace", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://anunciaai.vercel.app/como-criar-pagina-de-produto-para-loja-virtual", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://anunciaai.vercel.app/guias", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://anunciaai.vercel.app/como-fazer-descricao-de-produto", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://anunciaai.vercel.app/como-criar-titulo-de-produto", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://anunciaai.vercel.app/como-escolher-palavras-chave-para-produtos", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://anunciaai.vercel.app/como-criar-nome-de-produto", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
