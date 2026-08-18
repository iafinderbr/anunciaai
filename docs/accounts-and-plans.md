# Contas, Pro e Premium

Este documento registra o estado atual e a direção de produto da área de contas do AnunciaAI. A ideia é manter a versão gratuita simples, preservar a privacidade por padrão e só ativar cobrança quando toda a autorização estiver pronta.

## Princípios

- O uso básico continua disponível sem cadastro.
- Login é opcional para o plano Grátis.
- Conteúdo de produto não deve ser armazenado apenas porque alguém gerou um anúncio.
- Recursos pessoais que armazenam conteúdo devem depender de uma ação explícita do usuário.
- Pro e Premium exigirão uma conta autenticada.
- Nenhuma cobrança deve ser ativada antes de autenticação, autorização e webhooks de pagamento estarem testados.
- O AnunciaAI não deve armazenar número completo de cartão, CVV ou outros dados completos de pagamento.
- Preços pagos só devem aparecer como valores contratáveis quando o checkout real estiver pronto.

## Planos

### Grátis

Disponível agora.

- Geradores atuais sem cadastro.
- Login opcional com Google.
- Área Minha conta.
- Histórico opt-in de resultados salvos.
- Títulos, descrições, benefícios e ficha técnica.
- Ferramentas para diferentes canais.

### Pro

Em preparação.

Direção planejada:

- Mais recursos de histórico e organização.
- Salvar produtos e preferências reutilizáveis.
- Mais variações e atalhos.
- Recursos de produtividade.

### Premium

Em preparação.

Direção planejada:

- Tudo do Pro.
- Fluxos em lote.
- Padrões e voz da marca.
- Recursos avançados para catálogos.

Os itens planejados são direção de produto, não promessa de disponibilidade imediata.

## Autenticação — ativa em produção

A implementação atual usa **Better Auth + Google OAuth + PostgreSQL/Drizzle**.

Fluxo em produção:

1. usuário abre `/entrar`;
2. escolhe “Continuar com Google”;
3. o Google autentica a identidade;
4. o callback retorna para `/api/auth/callback/google`;
5. Better Auth cria/recupera usuário e sessão;
6. `/conta` valida a sessão no servidor antes de exibir dados pessoais.

Configuração atual:

- handler: `/api/auth/[...all]`;
- callback Google: `https://anunciaai.vercel.app/api/auth/callback/google`;
- cliente OAuth configurado no Google Auth Platform;
- credenciais mantidas somente nas variáveis seguras da Vercel;
- tokens OAuth armazenados pela camada de autenticação com criptografia habilitada;
- escopos Google limitados a `openid`, `email` e `profile`;
- logout disponível na área de conta;
- cabeçalho acompanha a sessão e mostra “Minha conta” para usuário conectado.

Variáveis privadas necessárias:

- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `DATABASE_URL`

Nenhuma dessas variáveis privadas deve receber prefixo `NEXT_PUBLIC_`.

## Estrutura de banco

A base de autenticação possui:

- `user`;
- `session`;
- `account`;
- `verification`.

O usuário possui campos internos para:

- plano (`free`, `pro`, `premium`);
- status da assinatura;
- provedor de assinatura;
- identificador externo da assinatura.

Esses campos são controlados no servidor e não podem ser escolhidos livremente pelo navegador.

## Histórico salvo — primeira funcionalidade pessoal

O histórico foi desenhado como **opt-in**.

O contador público de gerações continua separado e recebe somente canal e horário. Nome do produto, características e texto gerado não passam a ser armazenados automaticamente por causa do login.

Quando um usuário autenticado clica em **Salvar no histórico**, o servidor armazena na tabela `saved_generation`:

- usuário proprietário;
- nome do produto;
- canal;
- título;
- conteúdo completo salvo;
- data do salvamento.

Proteções:

- sessão obrigatória;
- origem da requisição validada;
- JSON e tamanho limitados;
- campos inesperados rejeitados;
- canal validado;
- limite de 100 itens por conta;
- limite de mutações por usuário;
- exclusão sempre combina `id` do item com `userId`, impedindo apagar item de outra conta;
- histórico e API usam `no-store`/noindex conforme o tipo de rota.

O usuário pode copiar ou excluir individualmente os itens em `/conta/historico`.

## Modelo de acesso

O plano nunca deve ser confiado apenas ao navegador. Recursos pagos precisam ser autorizados pelo servidor.

A autorização está centralizada em `src/lib/plans.ts`:

- planos possíveis: `free`, `pro`, `premium`;
- recursos são associados ao plano no servidor;
- Pro/Premium só viram plano efetivo quando `subscriptionStatus` está `active`;
- qualquer estado pago inválido, cancelado ou inativo volta para `free` na autorização.

## Pagamentos — ainda não ativos

A cobrança recorrente só será conectada depois que a área de conta estiver estável.

Fluxo esperado:

1. usuário autenticado escolhe um plano;
2. backend cria/inicia o checkout no provedor;
3. usuário conclui o pagamento no ambiente do provedor;
4. webhook assinado confirma o estado da assinatura;
5. backend atualiza o plano do usuário;
6. recursos pagos são liberados pelo servidor;
7. cancelamento, falha ou expiração atualizam o acesso automaticamente.

Nunca liberar Pro/Premium somente porque o navegador retornou de uma página de pagamento. O webhook e o estado verificado no servidor devem ser a fonte de verdade.

## Estado da implementação

1. Interface Grátis / Pro / Premium: **concluída**.
2. Better Auth + Google OAuth: **concluído**.
3. Credenciais OAuth e variáveis seguras na Vercel: **concluído**.
4. Login real com Google: **concluído e testado em produção**.
5. `/conta` protegida por sessão: **concluído**.
6. Logout: **concluído**.
7. Navegação autenticada no cabeçalho: **concluída**.
8. Política de Privacidade/Termos para contas: **concluídos**.
9. Histórico opt-in: **em implantação**.
10. Produtos salvos: **planejado**.
11. Checkout em modo de teste: **próxima fase de monetização**.
12. Webhooks e sincronização de assinatura: **pendente**.
13. Testes de cancelamento, falha e renovação: **pendentes**.
14. Preços contratáveis e cobrança real: **pendentes**.

## Regras para o CI

- `/entrar`, `/conta` e rotas pessoais devem permanecer fora do sitemap e `noindex`.
- A interface não pode mostrar “Assinar agora” antes da cobrança estar configurada.
- Rotas protegidas devem validar sessão no servidor.
- Ações que alteram dados pessoais devem validar propriedade e origem.
- Segredos de OAuth e pagamento nunca podem ser versionados nem usar prefixo `NEXT_PUBLIC_`.
- O teste `auth:check` deve continuar validando contas, histórico, privacidade e autorização durante o `typecheck`.
