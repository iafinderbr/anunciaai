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
npm run dev              # desenvolvimento
npm run lint             # ESLint
npm run typecheck        # TypeScript sem emissão
npm run security:check   # procura padrões conhecidos de segredos versionados
npm run generator:check  # audita proteções do motor de geração
npm run claims:check     # procura promessas públicas bloqueadas
npm run seo:check        # sitemap, metadata, canonicals e links internos
npm run runtime:check    # valida HTML/headers com o servidor de produção em execução
npm run build            # build de produção do Next.js
npm run start            # servidor de produção após o build
```

Para executar `runtime:check` localmente, faça o build, inicie o servidor e rode o comando em outro terminal. O script usa `http://127.0.0.1:3000` por padrão e também aceita `BASE_URL`.

## Estrutura principal

- `src/app/` — rotas, páginas, metadata, sitemap e robots
- `src/components/` — componentes compartilhados e gerador
- `src/lib/` — regras de geração, dados e constantes do site
- `src/db/` — conexão, schema e inicialização idempotente do PostgreSQL
- `public/ads.txt` — autorização pública do Google AdSense
- `scripts/seo-check.mjs` — auditoria estática de SEO e links internos
- `scripts/runtime-check.mjs` — auditoria do HTML renderizado, canonicals, headers, sitemap, robots e AdSense
- `scripts/security-check.mjs` — verificação de segredos versionados
- `scripts/generator-check.mjs` — verificação das proteções do gerador
- `scripts/claims-check.mjs` — verificação de promessas públicas bloqueadas

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

A auditoria estática falha se, entre outros casos:

- uma página pública ficar fora do sitemap;
- o sitemap apontar para uma rota inexistente;
- um link interno estático apontar para uma rota inexistente;
- uma página pública perder seu canonical;
- uma meta description ultrapassar o limite definido pelo projeto;
- aparecer `noindex` em uma página pública;
- um guia perder a trilha estruturada até `/guias`;
- o domínio principal, robots ou `ads.txt` saírem da configuração esperada.

Depois do build, a auditoria runtime complementa a análise verificando as páginas realmente renderizadas. Entre outras coisas, ela confirma:

- status HTTP das URLs do sitemap;
- um único H1 por página;
- `lang="pt-BR"` e `<main>` no HTML;
- title e meta description renderizados;
- canonical e `og:url` coerentes com a rota pública;
- ausência de `noindex` nas páginas do sitemap;
- headers de segurança esperados;
- `robots.txt`, `ads.txt` e carregamento do AdSense.

## CI e segurança

A cada push e pull request para `main`, o GitHub Actions executa:

1. instalação reproduzível com `npm ci`;
2. procura por segredos versionados;
3. `npm audit` para vulnerabilidades altas;
4. auditoria do motor de geração;
5. auditoria de promessas públicas;
6. auditoria estática de SEO e links internos;
7. ESLint;
8. TypeScript;
9. build de produção;
10. smoke test das APIs e de todas as páginas do sitemap;
11. auditoria runtime do HTML e headers.

O CodeQL analisa JavaScript e TypeScript separadamente e também roda de forma agendada. O Dependabot verifica dependências npm e GitHub Actions semanalmente.

## Deploy

A branch `main` está conectada à Vercel. Commits enviados para `main` disparam o deploy automático e os pipelines de validação do projeto.
