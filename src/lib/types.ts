export type Channel =
  | "mercado-livre"
  | "shopee"
  | "loja-virtual"
  | "instagram"
  | "olx"
  | "facebook-marketplace"
  | "outro";

export type Tone = "profissional" | "persuasivo" | "simples" | "premium";

export interface GeneratorInput {
  productName: string;
  category: string;
  price: string;
  audience: string;
  features: string;
  channel: Channel;
  tone: Tone;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface GeneratedAd {
  title: string;
  titleAlternatives: string[];
  description: string;
  benefits: string[];
  specs: SpecItem[];
  specsText: string;
  adCopy: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  channelLabel: string;
  toneLabel: string;
  variant: number;
}
