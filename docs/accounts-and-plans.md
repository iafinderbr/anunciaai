# Contas, Grátis, Pro e Premium

Este documento registra o estado atual da área de contas, modos e cobrança do AnunciaAI. Privacidade continua sendo padrão, recursos pagos nunca são liberados apenas pelo navegador e a Stripe é a fonte de verdade para o estado comercial do Pro.

## Princípios

- Os geradores atuais fazem parte do modo Grátis e exigem conta autenticada.
- O Grátis custa R$ 0 e não exige cartão.
- Histórico e biblioteca de produtos são opt-in: conteúdo só é salvo quando o usuário escolhe salvar.
- Google continua como provider principal; Facebook permanece condicional às credenciais da Meta.
- O plano efetivo é calculado no servidor.
- A Home pública não exibe tabela de preços; contratação e gerenciamento ficam dentro da conta em **Outros modos**.
- O navegador nunca escolhe o Price ID nem promove a própria conta para Pro.
- O AnunciaAI não armazena número completo de cartão ou CVV; o pagamento ocorre no Checkout hospedado pela Stripe.

## Grátis

Disponível por **R$ 0/mês**.

- 10 geradores atuais.
- Área Minha conta.
- Histórico opt-in de até 100 resultados.
- Biblioteca opt-in de até 20 produtos.
- Sem cartão de crédito.

## Pro — assinatura mensal

O Pro custa **R$ 19,90/mês** por conta.

A contratação começa somente depois do login, em `/conta/plano`, apresentado na interface como **Outros modos**.

Fluxo:

1. usuário autenticado escolhe Pro;
2. `/api/stripe/checkout` valida sessão e mesma origem;
3. o servidor cria uma sessão de Stripe Checkout em modo `subscription` usando o Price ID configurado no servidor;
4. a pessoa paga na página hospedada pela Stripe;
5. o retorno do navegador é apenas informativo e não libera recursos;
6. `/api/stripe/webhook` valida a assinatura criptográfica do evento e sincroniza a assinatura no banco;
7. o Pro só fica efetivo quando a assinatura correta estiver com status `active` e contiver o preço esperado;
8. cancelamento ou mudança de status no Stripe atualiza o acesso pelo webhook.

Campos persistidos no usuário:

- `plan`;
- `subscriptionStatus`;
- `subscriptionProvider`;
- `externalSubscriptionId`.

O provider comercial é `stripe`. A antiga ativação manual de acesso antecipado foi bloqueada.

### Recursos ativos do Pro

- Tudo do modo Grátis.
- Laboratório em `/conta/pro` para gerar e comparar 3 versões do mesmo produto.
- Mais opções de título para comparação.
- Acesso aos recursos Pro que estiverem realmente implementados.

O laboratório usa o motor existente do AnunciaAI e trabalha apenas com os dados informados pelo usuário. A revisão final continua obrigatória.

## Premium — planejado

O Premium continua planejado. Direção de produto, ainda não disponível:

- Tudo do Pro.
- Fluxos em lote.
- Padrões e voz da marca.
- Recursos avançados para catálogos.

Esses itens não devem ser apresentados como funcionalidades atuais nem como promessa de data ou preço.

## Autenticação

A implementação usa Better Auth + OAuth social + PostgreSQL/Drizzle.

Fluxo principal:

1. visitante abre uma ferramenta;
2. sem sessão, o gerador apresenta login;
3. o provider autentica a identidade;
4. Better Auth cria ou recupera usuário e sessão;
5. o usuário volta para uma rota interna validada;
6. o modo Grátis fica disponível enquanto a sessão estiver válida.

Configuração principal:

- handler: `/api/auth/[...all]`;
- callback Google: `https://anunciaai.vercel.app/api/auth/callback/google`;
- Facebook só aparece quando App ID e App Secret estiverem configurados;
- tokens OAuth são tratados pela camada de autenticação com criptografia habilitada;
- segredos ficam somente em variáveis privadas da Vercel.

## Autorização de plano

A autorização fica centralizada em `src/lib/plans.ts`.

- planos: `free`, `pro`, `premium`;
- `free` é o fallback seguro;
- somente `subscriptionStatus = active` concede acesso a um plano pago;
- `past_due`, `canceled`, `inactive`, `trialing` ou valores inválidos não concedem Pro;
- Premium não possui mecanismo público de ativação.

A área `/conta/pro` valida sessão e plano efetivo no servidor. Usuário sem Pro/Premium é redirecionado para `/conta/plano`.

## Endpoints de cobrança

### `/api/stripe/checkout`

- aceita somente `POST`;
- exige sessão;
- exige mesma origem;
- não recebe Price ID do cliente;
- usa somente o preço configurado no servidor;
- cria Checkout hospedado da Stripe em modo assinatura.

### `/api/stripe/webhook`

- recebe o corpo bruto da requisição;
- valida `Stripe-Signature` usando HMAC SHA-256 e comparação timing-safe;
- aplica tolerância temporal;
- processa apenas os eventos necessários de checkout e assinatura;
- valida que a assinatura usa o preço esperado antes de liberar Pro;
- é a fonte de verdade para ativação, cancelamento e mudanças de status.

### `/api/stripe/portal`

- exige sessão e mesma origem;
- só abre portal para uma assinatura Stripe pertencente à conta autenticada;
- permite que o cliente gerencie pagamento e assinatura no Customer Portal da Stripe.

### `/api/account/plan`

A rota antiga de ativação manual permanece apenas como compatibilidade defensiva. Mutações de plano agora retornam bloqueio e orientam o fluxo para a Stripe; ela não pode mais conceder Pro diretamente.

## Configuração Stripe

Segredos obrigatórios no ambiente do servidor/Vercel:

- `STRIPE_SECRET_KEY`;
- `STRIPE_WEBHOOK_SECRET`.

Configuração de preço:

- `STRIPE_PRO_PRICE_ID` pode definir o Price ID do ambiente;
- nunca usar prefixo `NEXT_PUBLIC_` para segredos;
- sandbox e produção usam IDs e chaves diferentes.

O Price ID jamais deve ser aceito em JSON ou formulário enviado pelo navegador.

## Histórico e produtos

O contador público de gerações continua separado e recebe somente dados mínimos necessários para atividade agregada. Nome do produto, características e conteúdo gerado não são enviados automaticamente para histórico ou biblioteca.

- Histórico: até 100 itens na implementação atual.
- Produtos salvos: até 20 itens na implementação atual.
- O Pro não anuncia limites maiores enquanto as APIs ainda não implementarem esses limites.

## Estado da implementação V8

1. Grátis: **ativo**.
2. Google OAuth: **ativo**.
3. Facebook OAuth: **código preparado, dependente de credenciais**.
4. Histórico opt-in: **ativo**.
5. Produtos salvos opt-in: **ativo**.
6. Pro: **R$ 19,90/mês, fluxo Stripe implementado no código**.
7. Área `/conta/pro`: **ativa e protegida**.
8. Laboratório Pro com 3 versões: **ativo**.
9. Premium: **planejado**.
10. Stripe Checkout: **implementado**.
11. Webhook de assinatura: **implementado e deve permanecer com segredo apenas no ambiente**.
12. Customer Portal: **implementado**.
13. Produção real: **depende de credenciais/Price ID live e validação final do fluxo em ambiente de produção**.

## Regras de CI

- `/entrar`, `/conta`, `/conta/historico`, `/conta/produtos`, `/conta/plano` e `/conta/pro` devem permanecer `noindex`.
- A área comercial pública não deve voltar a exibir tabela de preços.
- Checkout precisa exigir sessão, mesma origem e preço server-side.
- Webhook precisa validar assinatura e preço antes de liberar Pro.
- A API antiga de plano não pode promover a conta manualmente.
- Premium deve continuar identificado como planejado.
- Rotas pessoais devem validar sessão e propriedade dos dados.
- Segredos nunca podem ser versionados ou usar prefixo `NEXT_PUBLIC_`.
- O `auth:check` deve validar autenticação, privacidade, cobrança Stripe, Customer Portal e autorização server-side.
