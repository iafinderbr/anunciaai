# Contas, Grátis, Pro e Premium

Este documento registra o estado atual da área de contas e planos do AnunciaAI. Privacidade continua sendo padrão, recursos pagos nunca são liberados apenas pelo navegador e cobrança só poderá entrar quando checkout, webhooks e estados de assinatura estiverem implementados e testados.

## Princípios

- Os geradores atuais fazem parte do plano Grátis e exigem conta autenticada.
- O Grátis custa R$ 0 e não exige cartão.
- Histórico e biblioteca de produtos são opt-in: conteúdo só é salvo quando o usuário escolhe salvar.
- Google continua como provider principal; Facebook permanece condicional às credenciais da Meta.
- O plano efetivo é calculado no servidor.
- Nenhuma tela pode apresentar checkout, cartão ou assinatura paga como disponíveis antes da integração real.
- O AnunciaAI não deve armazenar número completo de cartão ou CVV.

## Grátis

Disponível por **R$ 0/mês**.

- 10 geradores atuais.
- Área Minha conta.
- Histórico opt-in de até 100 resultados.
- Biblioteca opt-in de até 20 produtos.
- Sem cartão de crédito.

## Pro — acesso antecipado

O Pro está disponível como **acesso antecipado sem cobrança**.

A ativação é explícita na área `/conta/plano`. O servidor grava:

- `plan = pro`;
- `subscriptionStatus = trialing`;
- `subscriptionProvider = early-access`;
- nenhum identificador de assinatura externa;
- nenhuma cobrança.

O usuário pode voltar ao Grátis pela mesma área. O status `trialing` representa somente acesso antecipado e não deve ser confundido com uma assinatura comercial.

### Recursos ativos do Pro

- Tudo do plano Grátis.
- Laboratório em `/conta/pro` para gerar e comparar 3 versões do mesmo produto.
- Mais opções de título para comparação.
- Acesso antecipado aos próximos recursos Pro que forem realmente implementados.

O laboratório usa o motor existente do AnunciaAI e trabalha apenas com os dados informados pelo usuário. A revisão final continua obrigatória.

### Preço comercial futuro

A referência de produto continua em **R$ 19,90/mês**, mas esse valor **não é cobrado hoje**. Ele só poderá virar preço contratável quando existir checkout real, confirmação server-side e fluxo de assinatura testado.

## Premium — planejado

O Premium continua planejado. Direção de produto, ainda não disponível:

- Tudo do Pro.
- Fluxos em lote.
- Padrões e voz da marca.
- Recursos avançados para catálogos.

Esses itens não devem ser apresentados como funcionalidades atuais nem como promessa de data.

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
- `trialing` libera o Pro somente para acesso antecipado;
- `active` fica preparado para uma assinatura comercial confirmada no futuro;
- `past_due`, `canceled`, `inactive` ou valores inválidos não devem conceder acesso pago;
- Premium não possui mecanismo público de ativação.

A área `/conta/pro` valida sessão e plano efetivo no servidor. Usuário sem Pro/Premium é redirecionado para `/conta/plano`.

## API de acesso antecipado

`/api/account/plan`:

- exige sessão;
- exige mesma origem para mutações;
- `POST` ativa Pro em `trialing` com provider `early-access`;
- `DELETE` restaura Grátis/inactive;
- respostas deixam explícito `billing: false`.

## Histórico e produtos

O contador público de gerações continua separado e recebe somente dados mínimos necessários para atividade agregada. Nome do produto, características e conteúdo gerado não são enviados automaticamente para histórico ou biblioteca.

- Histórico: até 100 itens na implementação atual.
- Produtos salvos: até 20 itens na implementação atual.
- O Pro **não anuncia limites maiores enquanto as APIs ainda não implementarem esses limites**.

## Pagamentos — ainda não ativos

Não existe checkout, assinatura paga ou cobrança ativa.

Fluxo obrigatório antes de abrir cobrança:

1. usuário autenticado escolhe um plano;
2. backend cria checkout no provedor;
3. usuário conclui o pagamento no ambiente do provedor;
4. webhook assinado confirma o estado;
5. backend atualiza plano e assinatura;
6. recursos comerciais são liberados pelo servidor;
7. falha, cancelamento e renovação atualizam acesso automaticamente.

Nunca liberar assinatura paga apenas porque o navegador retornou de uma página externa.

## Estado da implementação

1. Grátis: **ativo**.
2. Google OAuth: **ativo**.
3. Facebook OAuth: **código preparado, dependente de credenciais**.
4. Histórico opt-in: **ativo**.
5. Produtos salvos opt-in: **ativo**.
6. Pro em acesso antecipado: **ativo sem cobrança**.
7. Área `/conta/pro`: **ativa e protegida**.
8. Laboratório Pro com 3 versões: **ativo**.
9. Premium: **planejado**.
10. Checkout pago: **pendente**.
11. Webhooks de assinatura: **pendentes**.
12. Testes de cobrança, renovação, falha e cancelamento: **pendentes**.

## Regras de CI

- `/entrar`, `/conta`, `/conta/historico`, `/conta/produtos`, `/conta/plano` e `/conta/pro` devem permanecer `noindex`.
- O Pro antecipado precisa manter `billing: false` e ativação server-side.
- Premium deve continuar identificado como planejado.
- A interface não pode mostrar `Assinar agora` ou checkout disponível antes da integração real.
- Rotas pessoais devem validar sessão e propriedade dos dados.
- Segredos nunca podem ser versionados ou usar prefixo `NEXT_PUBLIC_`.
- O `auth:check` deve validar autenticação, privacidade, acesso antecipado Pro e separação entre acesso antecipado e futura cobrança comercial.
