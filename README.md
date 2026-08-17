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
npm run security:check   # segredos e hardening dos workflows
npm run generator:check  # proteções, privacidade e suposições do gerador
npm run claims:check     # procura promessas públicas bloqueadas
npm run seo:check        # sitemap, metadata, datas editoriais, canonicals e links internos
npm run runtime:check    # valida HTML, SEO e headers com o servidor de produção em execução
npm run a11y:check       # regressões básicas de acessibilidade no HTML renderizado
npm run build            # build de produção do Next.js
npm run start            # servidor de produção após o build
```

Para executar as auditorias renderizadas localmente, faça o build, inicie o servidor e rode `runtime:check` e `a11y:check` em outro terminal. Os scripts usam `http://127.0.0.1:3000` por padrão e também aceitam `BASE_URL`.

## Estrutura principal

- `src/app/` — rotas, páginas, metadata, sitemap e robots
- `src/components/` — componentes compartilhados e gerador
- `src/lib/` — regras de geração, dados e constantes do site
- `src/db/` — conexão, schema e inicialização idempotente do PostgreSQL
- `public/ads.txt` — autorização pública do Google AdSense
- `scripts/seo-check.mjs` — auditoria estática de SEO, datas editoriais e links internos
- `scripts/runtime-check.mjs` — auditoria do HTML renderizado, conteúdo, canonicals, links, dados estruturados, headers, sitemap, robots e AdSense
- `scripts/accessibility-check.mjs` — regressões básicas de acessibilidade no HTML renderizado
- `scripts/security-check.mjs` — verificação de segredos e hardening dos GitHub Actions
- `scripts/generator-check.mjs` — verificação das proteções, privacidade e comportamento do gerador
- `scripts/claims-check.mjs` — verificação de promessas públicas bloqueadas

## Privacidade dos dados do gerador

O texto digitado pelo usuário no formulário é processado no navegador e não é enviado ao banco de gerações. O endpoint de estatísticas recebe somente o canal utilizado e grava dados mínimos para o contador público.

A auditoria do gerador trava esse desenho no CI: ela falha se o cliente passar a enviar o conteúdo principal para `/api/generate`, se o payload das estatísticas deixar de ser somente o canal ou se a API de estatísticas começar a ler e armazenar campos do produto.

A política pública fica em `/privacidade` e os termos em `/termos`.

## Backend generativo opcional

A rota `/api/generate` existe como capacidade opcional de backend, mas fica desativada por padrão. O endpoint só informa `enabled: true` quando **as duas condições** abaixo existem no ambiente do servidor:

```env
ANUNCIAAI_GENERATIVE_ENABLED=true
GEMINI_API_KEY=<segredo configurado apenas no servidor>
```

`GEMINI_MODEL` é opcional. O fluxo principal atual do site continua usando o gerador local no navegador, e a chave do provedor nunca deve usar prefixo `NEXT_PUBLIC_`.

Além da flag explícita, a integração opcional possui limite de payload e de saída, validação de origem/canal/tom, rate limit por instância, timeout, resposta JSON e filtros conservadores contra números, condições comerciais e alegações que não estejam sustentadas pelos dados informados. O CI mantém uma guarda específica em `.github/workflows/generative-security.yml` para impedir a remoção acidental dessas proteções.

A documentação operacional completa fica em `docs/generative-backend.md`. Antes de ativar esse backend em produção, a política de privacidade e a interface devem ser atualizadas para informar o envio do conteúdo ao provedor externo.

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
- um guia perder `PUBLISHED_AT`, datas válidas, `datePublished`, `dateModified`, `publishedTime` ou `modifiedTime`;
- o domínio principal, robots ou `ads.txt` saírem da configuração esperada.

Depois do build, a auditoria runtime complementa a análise verificando as páginas realmente renderizadas. Entre outras coisas, ela confirma:

- status HTTP das URLs do sitemap;
- um único H1 por página;
- `lang="pt-BR"` e `<main>` no HTML;
- title, description e H1 únicos entre as páginas públicas;
- canonical e `og:url` coerentes com a rota pública;
- ausência de `noindex` nas páginas do sitemap e presença de `noindex` no 404;
- links internos e fragmentos/âncoras existentes;
- JSON-LD sintaticamente válido e os tipos estruturados esperados para home, guias, geradores e página Sobre;
- ausência dos tipos estruturados bloqueados `FAQPage` e `HowTo`;
- um piso editorial para guias e geradores e proteção contra páginas quase duplicadas;
- headers de segurança esperados;
- `robots.txt`, `ads.txt` e carregamento do AdSense.

## Acessibilidade

`a11y:check` é uma proteção de regressão automatizada, não uma certificação completa de acessibilidade. Ela percorre as páginas do sitemap e o 404 e verifica, no HTML renderizado:

- exatamente um landmark `<main>` por página;
- existência do link “Pular para o conteúdo principal” e do alvo correspondente;
- IDs duplicados;
- referências `aria-labelledby`, `aria-describedby` e `aria-controls` para alvos existentes;
- atributo `alt` em imagens;
- nome acessível detectável em links e botões;
- rótulo acessível detectável em `input`, `select` e `textarea`.

Essa auditoria já encontrou uma regressão real no menu mobile: o botão tinha `aria-controls="menu-mobile"`, mas o alvo não existia no DOM quando o menu estava fechado. O menu mantém o contêiner no DOM com `hidden` e também pode ser fechado com `Escape`, devolvendo o foco ao botão de abertura.

## CI e segurança

A cada push e pull request para `main`, o GitHub Actions executa:

1. instalação reproduzível com `npm ci`;
2. procura por segredos versionados e hardening dos workflows;
3. auditoria das dependências usadas em produção a partir de severidade moderada;
4. auditoria de todas as dependências para vulnerabilidades altas;
5. auditoria do motor de geração e das invariantes de privacidade;
6. auditoria de promessas públicas;
7. auditoria estática de SEO, datas editoriais e links internos;
8. ESLint;
9. TypeScript;
10. build de produção;
11. smoke test das APIs, do backend generativo desativado por padrão e de todas as páginas do sitemap;
12. auditoria runtime do HTML, profundidade editorial, links, dados estruturados e headers;
13. auditoria de acessibilidade renderizada.

As GitHub Actions externas são fixadas em SHAs completos e o checkout é executado com `persist-credentials: false`, reduzindo a exposição da credencial temporária aos passos seguintes. O `security:check` falha se essas garantias forem removidas.

O CodeQL analisa JavaScript e TypeScript separadamente e também roda de forma agendada. O Dependabot verifica dependências npm e GitHub Actions semanalmente.

A auditoria de dependências de produção é mais rígida do que a auditoria completa: dependências usadas em produção precisam passar a partir de severidade moderada. Vulnerabilidades de ferramentas exclusivas de desenvolvimento ainda são avaliadas separadamente no nível alto para evitar correções forçadas que introduzam mudanças incompatíveis.

## Deploy

A branch `main` está conectada à Vercel. Commits enviados para `main` disparam o deploy automático e os pipelines de validação do projeto.
