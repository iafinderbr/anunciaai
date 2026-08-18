import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/site-header";
import { SITE_URL } from "@/lib/site";

const PATH = "/privacidade";
const ABSOLUTE_URL = `${SITE_URL}${PATH}`;

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Entenda quais dados o AnunciaAI processa e como login, histórico, produtos salvos, métricas e publicidade são utilizados.",
  alternates: { canonical: ABSOLUTE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: ABSOLUTE_URL,
    siteName: "AnunciaAI",
    title: "Política de Privacidade | AnunciaAI",
    description: "Entenda quais dados o AnunciaAI processa e como login, histórico, produtos salvos, métricas e publicidade são utilizados.",
  },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Dados informados na ferramenta",
    paragraphs: [
      "Os dados digitados nos campos do gerador, como nome, categoria, preço, público e características do produto, são usados para montar o resultado exibido na própria página.",
      "Na geração comum, o texto é montado no navegador. Para registrar o contador público de uso, o site envia ao servidor somente o canal selecionado, como Mercado Livre, Shopee, OLX ou loja virtual.",
    ],
  },
  {
    title: "2. O que fica armazenado nas gerações comuns",
    paragraphs: [
      "O registro técnico usado pelo contador não guarda o nome do produto, categoria, preço, público, título gerado nem as características digitadas. O banco mantém apenas informações mínimas necessárias ao contador e à operação, como o canal utilizado e o horário da geração.",
    ],
  },
  {
    title: "3. Conta e login com Google",
    paragraphs: [
      "Uma conta é necessária para liberar os geradores gratuitos. O acesso é feito com Google, sem criação de uma nova senha no AnunciaAI e sem cartão de crédito. O AnunciaAI recebe do fluxo de autenticação os dados necessários para reconhecer a conta, como identificador interno, nome, endereço de e-mail, indicação de e-mail verificado e, quando disponibilizada pelo Google, imagem de perfil.",
      "Também são mantidos registros técnicos necessários à autenticação, como identificador da conta no provedor, sessões, datas de criação e expiração e informações técnicas de sessão que podem incluir endereço IP e agente do navegador. Dados OAuth retornados pelo provedor, quando armazenados, ficam protegidos pela camada de criptografia configurada no sistema de autenticação.",
      "O AnunciaAI não recebe nem armazena a senha da Conta Google. O login é realizado no ambiente do Google e o usuário pode encerrar a sessão no AnunciaAI pelo botão de sair da conta.",
    ],
  },
  {
    title: "4. Histórico salvo pelo usuário",
    paragraphs: [
      "Quando uma pessoa autenticada clica explicitamente em “Salvar no histórico”, o AnunciaAI passa a armazenar, vinculado àquela conta, o nome do produto, o canal, o título do resultado, o conteúdo completo que foi salvo e a data do salvamento.",
      "Esse armazenamento é opcional e não acontece apenas por gerar um anúncio. O histórico existe para permitir que o próprio usuário reencontre os resultados que decidiu guardar entre diferentes acessos.",
      "Cada conta pode manter até 100 resultados salvos nesta fase. O usuário pode excluir itens individualmente pela área de histórico; a exclusão remove aquele registro do histórico da conta.",
    ],
  },
  {
    title: "5. Biblioteca de produtos salvos",
    paragraphs: [
      "Quando uma pessoa autenticada clica explicitamente em “Salvar produto”, o AnunciaAI armazena na biblioteca privada da conta os dados preenchidos para aquele produto, incluindo nome, categoria, preço quando informado, público, características, canal e tom escolhidos.",
      "Salvar um produto é opcional e separado de salvar um resultado no histórico. Nesta fase, cada conta pode manter até 20 produtos na biblioteca e excluir itens individualmente pela área Produtos salvos.",
      "O objetivo dessa biblioteca é permitir reutilização futura dos dados do produto sem exigir novo preenchimento manual em cada gerador.",
    ],
  },
  {
    title: "6. Métricas de navegação",
    paragraphs: [
      "O AnunciaAI utiliza o Vercel Web Analytics para entender, de forma agregada, o uso do site e melhorar desempenho, páginas e recursos. Essas métricas podem incluir informações técnicas e de navegação disponibilizadas pelo serviço de analytics.",
    ],
  },
  {
    title: "7. Publicidade e Google AdSense",
    paragraphs: [
      "O AnunciaAI pode utilizar o Google AdSense para exibir publicidade. Terceiros, incluindo o Google, podem usar cookies, beacons da Web, endereços IP e outros identificadores para veicular, medir e personalizar anúncios conforme as configurações do usuário e as regras aplicáveis.",
      "O uso de cookies de publicidade permite ao Google e aos parceiros dele exibir anúncios com base em visitas anteriores do usuário a este site e/ou a outros sites. O usuário pode gerenciar ou desativar a personalização de anúncios nas Configurações de anúncios do Google.",
      "Mais informações sobre como o Google trata dados em sites parceiros estão disponíveis na documentação de privacidade do Google para sites e apps que usam os serviços da empresa.",
    ],
  },
  {
    title: "8. Planos e pagamento",
    paragraphs: [
      "Entrar na conta, gerar conteúdo, salvar um resultado ou salvar um produto não inicia cobrança. O plano Grátis custa R$ 0 e não exige cartão. Enquanto os planos pagos não estiverem disponíveis para contratação, o AnunciaAI não realiza cobrança por eles no site.",
      "Valores apresentados para planos ainda não disponíveis são propostas de lançamento e podem ser ajustados antes da abertura. Quando pagamentos forem ativados, esta política será atualizada para explicar o provedor utilizado e os dados efetivamente processados. O AnunciaAI não pretende armazenar número completo de cartão ou código de segurança.",
    ],
  },
  {
    title: "9. Finalidade e minimização",
    paragraphs: [
      "Coletamos apenas o necessário para operar a ferramenta, manter a conta e as sessões necessárias ao acesso dos geradores, armazenar resultados e produtos quando o usuário escolhe salvá-los, medir o uso, exibir publicidade quando habilitada e melhorar a experiência.",
      "O conteúdo de produto não é adicionado ao histórico ou à biblioteca de forma automática. Sempre que uma informação deixa de ser necessária para as finalidades descritas, buscamos reduzir, anonimizar ou eliminar seu uso conforme aplicável.",
    ],
  },
  {
    title: "10. Segurança e terceiros",
    paragraphs: [
      "Adotamos medidas técnicas compatíveis com o estágio atual do serviço para reduzir riscos de acesso indevido, incluindo segredos fora do código público, validação de sessão no servidor, separação entre telemetria anônima e dados pessoais salvos e criptografia dos tokens OAuth armazenados pela camada de autenticação.",
      "Serviços de infraestrutura, autenticação, métricas e publicidade, como Vercel e Google, podem processar dados técnicos necessários para hospedar, autenticar, medir e monetizar o site segundo as próprias políticas desses fornecedores.",
    ],
  },
  {
    title: "11. Direitos e controle do usuário",
    paragraphs: [
      "Nos termos da legislação aplicável, inclusive a LGPD quando pertinente, o usuário pode solicitar informações sobre o tratamento de dados e exercer os direitos previstos em lei.",
      "Contas autenticadas possuem dados vinculáveis ao usuário. Histórico e biblioteca de produtos oferecem exclusão individual dos itens salvos, e pedidos relacionados a acesso, correção ou eliminação de outros dados serão tratados conforme a finalidade, as obrigações aplicáveis e as capacidades disponíveis no serviço.",
    ],
  },
  {
    title: "12. Alterações desta política",
    paragraphs: [
      "Esta política pode ser atualizada quando o produto ganhar novas funcionalidades, integrações, contas, publicidade ou formas de pagamento. A versão publicada nesta página é a versão vigente.",
    ],
  },
];

export default function PrivacidadePage() {
  return (
    <>
      <SiteHeader ctaHref="/#ferramenta" />
      <main id="ferramenta">
        <section className="border-b border-line bg-white">
          <div className="container-page py-10 sm:py-16">
            <nav aria-label="Trilha de navegação" className="text-xs text-muted">
              <Link href="/" className="transition-colors hover:text-ink">Início</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span aria-current="page" className="font-medium text-ink-soft">Privacidade</span>
            </nav>
            <div className="mt-10 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Transparência</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Política de Privacidade</h1>
              <p className="mt-5 text-base leading-8 text-muted">
                Esta página explica de forma direta quais informações o AnunciaAI processa e quais dados são mantidos para o funcionamento do serviço.
              </p>
              <p className="mt-3 text-sm text-muted">Última atualização: 18 de agosto de 2026.</p>
            </div>
          </div>
        </section>

        <section className="container-page py-12 sm:py-16">
          <div className="max-w-3xl space-y-10">
            {sections.map((section) => (
              <section key={section.title} aria-labelledby={section.title.replace(/[^a-zA-Z0-9]/g, "-")}>
                <h2 id={section.title.replace(/[^a-zA-Z0-9]/g, "-")} className="text-xl font-semibold text-ink sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[15px] leading-7 text-muted">{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-lg font-semibold">Controles de publicidade</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Você pode revisar as preferências de anúncios diretamente nas configurações da sua Conta Google.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer" className="rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">
                  Configurações de anúncios
                </a>
                <a href="https://policies.google.com/technologies/partner-sites?hl=pt-BR" target="_blank" rel="noreferrer" className="rounded-xl border border-line-strong px-4 py-2.5 text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">
                  Como o Google usa dados
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-lg font-semibold">Continue usando o AnunciaAI</h2>
              <p className="mt-2 text-sm leading-6 text-muted">Volte para a ferramenta ou consulte os guias antes de publicar seus produtos.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/#ferramenta" className="rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-600">Abrir gerador</Link>
                <Link href="/guias" className="rounded-xl border border-line-strong px-4 py-2.5 text-sm font-semibold text-ink hover:border-brand-500 hover:text-brand-600">Ver guias</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
