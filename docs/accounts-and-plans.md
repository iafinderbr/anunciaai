# Contas, Grátis, Pro e Premium

Este documento registra o estado atual e a direção de produto da área de contas do AnunciaAI. A versão gratuita deve continuar simples, a privacidade deve permanecer por padrão e cobrança só pode ser ativada quando autorização e pagamentos estiverem prontos.

## Princípios

- Os geradores atuais fazem parte do plano Grátis, mas exigem uma conta autenticada.
- O plano Grátis custa R$ 0 e não exige cartão de crédito.
- Google continua como provider principal enquanto alternativas sociais são configuradas e testadas.
- Conteúdo de produto não deve ser armazenado apenas porque alguém gerou um anúncio.
- Histórico e biblioteca continuam opt-in: só recebem conteúdo quando o usuário escolhe salvar.
- Pro e Premium exigem uma conta autenticada e autorização de plano no servidor.
- Nenhuma cobrança deve ser ativada antes de checkout, autorização e webhooks de pagamento estarem testados.
- O AnunciaAI não deve armazenar número completo de cartão, CVV ou outros dados completos de pagamento.
- Um preço planejado pode ser exibido com transparência, mas nunca como contratação disponível antes do checkout real.

## Planos

### Grátis

Disponível agora por **R$ 0/mês**.

- Conta autenticada.
- 10 geradores atuais.
- Área Minha conta.
- Histórico opt-in de até 100 resultados salvos.
- Biblioteca opt-in de até 20 produtos salvos.
- Títulos, descrições, benefícios, ficha técnica e ferramentas para diferentes canais.
- Sem cartão de crédito.

### Pro

Pacote preparado, ainda sem contratação.

**Preço planejado: R$ 19,90/mês.** O valor pode ser ajustado antes da abertura.

Direção planejada:

- Tudo do plano Grátis.
- Biblioteca ampliada de produtos.
- Mais variações por criação.
- Atalhos e preferências de produtividade.
- Prioridade para novos recursos do AnunciaAI.

### Premium

Em estudo.

Direção planejada:

- Tudo do Pro.
- Fluxos em lote.
- Padrões e voz da marca.
- Recursos avançados para catálogos.

Os itens planejados são direção de produto, não promessa de disponibilidade imediata.

## Autenticação — ativa em produção

A implementação usa **Better Auth + OAuth social + PostgreSQL/Drizzle**.

Fluxo atual:

1. visitante abre um gerador;
2. se não houver sessão, o gerador mostra o acesso social disponível;
3. o provider autentica a identidade;
4. o callback retorna para `/api/auth/callback/<provider>`;
5. Better Auth cria ou recupera usuário e sessão;
6. o usuário volta à ferramenta de origem ou à área de conta;
7. os geradores do plano Grátis ficam disponíveis enquanto a sessão for válida.

Configuração atual:

- handler: `/api/auth/[...all]`;
- callback Google: `https://anunciaai.vercel.app/api/auth/callback/google`;
- callback Facebook preparado: `https://anunciaai.vercel.app/api/auth/callback/facebook`;
- credenciais mantidas somente nas variáveis seguras da Vercel;
- tokens OAuth armazenados pela camada de autenticação com criptografia habilitada;
- escopos Google limitados a `openid`, `email` e `profile`;
- logout disponível na área de conta;
- cabeçalho acompanha a sessão e mostra “Minha conta” para usuário conectado.

Variáveis privadas necessárias hoje:

- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `DATABASE_URL`

Variáveis opcionais já suportadas para Facebook:

- `FACEBOOK_CLIENT_ID`
- `FACEBOOK_CLIENT_SECRET`

O provider Facebook é condicional: ele só entra na configuração do Better Auth e só aparece na tela de login quando **as duas credenciais** estiverem presentes. Assim o site nunca mostra um botão social que não funciona.

Nenhuma variável privada deve receber prefixo `NEXT_PUBLIC_`.

## Providers alternativos

### Facebook

A integração de código está preparada. Antes de ativar em produção ainda é necessário criar/configurar o app no Meta for Developers, cadastrar o callback do AnunciaAI, obter App ID/App Secret e salvar essas credenciais na Vercel. Depois disso o botão aparece automaticamente na página de entrada.

### E-mail e senha

Não deve ser liberado apenas como atalho. Uma implementação pública profissional precisa de verificação de e-mail e recuperação de senha com um serviço transacional. Habilitar cadastro por e-mail sem validar a propriedade do endereço aumenta risco de conflito de identidade e de vinculação incorreta com providers sociais.

### Telefone

Login por número depende de OTP enviado por SMS. Isso exige um provedor de SMS, novas regras de tratamento de telefone, proteção contra abuso e custo operacional. Por isso deve ser implementado apenas quando houver um serviço real de envio e validação, nunca como botão decorativo.

## Estrutura de banco

A base de autenticação possui `user`, `session`, `account` e `verification`. O usuário possui campos internos de plano, status da assinatura, provedor e identificador externo da assinatura. Esses campos são controlados no servidor e não podem ser escolhidos livremente pelo navegador.

## Histórico e produtos salvos

O contador público de gerações continua separado e recebe somente canal e horário. Nome do produto, características e texto gerado não são armazenados automaticamente por causa do login.

Quando um usuário autenticado escolhe **Salvar no histórico**, o servidor armazena o resultado em `saved_generation`, vinculado ao proprietário. O limite atual é 100 itens por conta.

Quando escolhe **Salvar produto**, o servidor armazena os dados informados em `saved_product`, também vinculado ao proprietário. O limite atual do Grátis é 20 produtos.

As APIs validam sessão, origem, tamanho do corpo, campos permitidos, limites e propriedade do registro antes de mutações.

## Modelo de acesso

O plano nunca deve ser confiado apenas ao navegador. A autorização está centralizada em `src/lib/plans.ts`:

- planos possíveis: `free`, `pro`, `premium`;
- recursos são associados ao plano;
- Pro/Premium só viram plano efetivo quando `subscriptionStatus` está `active`;
- qualquer estado pago inválido, cancelado ou inativo volta para `free` na autorização;
- preço planejado e recursos planejados do Pro ficam centralizados no mesmo catálogo.

O gate visual dos geradores exige sessão para a experiência normal do produto. Histórico, produtos e qualquer futuro recurso pago continuam protegidos no servidor.

## Pagamentos — ainda não ativos

Não existe checkout, assinatura paga ou cobrança ativa.

Fluxo esperado quando pagamentos forem implementados:

1. usuário autenticado escolhe um plano;
2. backend cria ou inicia o checkout no provedor;
3. usuário conclui o pagamento no ambiente do provedor;
4. webhook assinado confirma o estado da assinatura;
5. backend atualiza o plano do usuário;
6. recursos pagos são liberados pelo servidor;
7. cancelamento, falha ou expiração atualizam o acesso automaticamente.

Nunca liberar Pro/Premium somente porque o navegador retornou de uma página de pagamento. O webhook e o estado verificado no servidor devem ser a fonte de verdade.

## Estado da implementação

1. Interface Grátis / Pro / Premium: **concluída**.
2. Better Auth + Google OAuth: **concluído e testado em produção**.
3. Provider Facebook condicional no servidor e botão real: **preparados; aguardando credenciais da Meta para ativação**.
4. `/conta`, histórico e produtos protegidos: **concluídos**.
5. Logout e navegação autenticada: **concluídos**.
6. Histórico opt-in: **concluído**.
7. Produtos salvos opt-in: **concluído**.
8. Login obrigatório na interface dos geradores: **concluído**.
9. Retorno à ferramenta de origem após login: **validado por rota interna**.
10. Login por telefone/OTP: **não ativado; depende de provedor de SMS**.
11. E-mail/senha: **não ativado; depende de verificação e recuperação de conta adequadas**.
12. Pacote Pro e preço planejado de R$ 19,90/mês: **preparados, sem venda ativa**.
13. Checkout em modo de teste: **pendente**.
14. Webhooks e sincronização de assinatura: **pendentes**.
15. Testes de cancelamento, falha e renovação: **pendentes**.
16. Preços contratáveis e cobrança real: **pendentes**.

## Regras para o CI

- `/entrar`, `/conta` e rotas pessoais devem permanecer fora do sitemap e `noindex`.
- A interface não pode mostrar “Assinar agora” antes da cobrança estar configurada.
- Os três motores de geração devem manter o gate de sessão.
- Rotas protegidas devem validar sessão no servidor.
- Ações que alteram dados pessoais devem validar propriedade e origem.
- Segredos de OAuth e pagamento nunca podem ser versionados nem usar prefixo `NEXT_PUBLIC_`.
- Provider opcional não pode aparecer na interface antes de suas credenciais estarem presentes.
- O teste `auth:check` deve continuar validando contas, gate dos geradores, providers, histórico, produtos, privacidade, preço planejado e autorização durante o `typecheck`.
