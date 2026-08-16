# AnunciaAI

AnunciaAI é uma aplicação web em Next.js para ajudar vendedores a criar e organizar conteúdo de anúncios de produtos para marketplaces, lojas virtuais e redes sociais.

Produção: `https://anunciaai.vercel.app`

## Stack

- Next.js 16 / App Router
- React 19
- TypeScript
- Tailwind CSS 4
- PostgreSQL
- Drizzle ORM
- Vercel Analytics
- Google AdSense

## Desenvolvimento local

Requisitos:

- Node.js 22
- npm
- PostgreSQL acessível por `DATABASE_URL`

Crie um arquivo `.env.local`:

```env
DATABASE_URL=postgresql://usuario:senha@host:5432/banco
```

Depois execute:

```bash
npm ci
npm run dev
```

A aplicação cria de forma idempotente a estrutura mínima usada pelo contador público quando a API é acessada.

## Comandos

```bash
npm run dev        # desenvolvimento
npm run lint       # ESLint
npm run typecheck  # TypeScript sem emissão
npm run seo:check  # sitemap, canonicals, links internos e arquivos essenciais
npm run build      # build de produção do Next.js
npm run start      # servidor de produção após o build
```

## Estrutura principal

- `src/app/` — rotas, páginas, metadata, sitemap e robots
- `src/components/` — componentes compartilhados e gerador
- `src/lib/` — regras de geração, dados e constantes do site
- `src/db/` — conexão, schema e inicialização idempotente do PostgreSQL
- `public/ads.txt` — autorização pública do Google AdSense
- `scripts/seo-check.mjs` — auditoria automatizada de SEO e links internos

## Privacidade dos dados do gerador

O texto digitado pelo usuário no formulário é processado no navegador e não é enviado ao banco de gerações. O endpoint de estatísticas recebe somente o canal utilizado e grava dados mínimos para o contador público.

A política pública fica em `/privacidade` e os termos em `/termos`.

## SEO

As páginas públicas usam canonicals próprios, metadata indexável e links internos. O sitemap está disponível em `/sitemap.xml`, e `/robots.txt` permite páginas públicas e bloqueia `/api/` para crawlers.

A biblioteca de conteúdo fica em `/guias`. A página `/sobre` explica a proposta do produto e os princípios usados na criação dos conteúdos.

Antes de aceitar uma mudança em rotas ou navegação, rode:

```bash
npm run seo:check
```

A auditoria falha se, entre outros casos:

- uma página pública ficar fora do sitemap;
- o sitemap apontar para uma rota inexistente;
- um link interno estático apontar para uma rota inexistente;
- uma página pública perder seu canonical;
- aparecer `noindex` em uma página pública;
- o domínio principal, robots ou `ads.txt` saírem da configuração esperada.

## CI e segurança

A cada push e pull request para `main`, o GitHub Actions executa:

1. instalação reproduzível com `npm ci`;
2. `npm audit` para vulnerabilidades altas;
3. auditoria de SEO e links internos;
4. ESLint;
5. TypeScript;
6. build de produção;
7. smoke test das rotas públicas essenciais.

O CodeQL analisa JavaScript e TypeScript separadamente e também roda de forma agendada. O Dependabot verifica dependências npm e GitHub Actions semanalmente.

## Deploy

A branch `main` está conectada à Vercel. Commits aprovados pelo pipeline são publicados automaticamente pelo projeto da Vercel.
