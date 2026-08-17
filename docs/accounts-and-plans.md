# Contas, Pro e Premium

Este documento registra a direção de produto para a próxima fase do AnunciaAI. O objetivo é evitar decisões duplicadas e manter a versão gratuita simples enquanto login e cobrança são adicionados com segurança.

## Princípios

- O uso básico continua disponível sem cadastro.
- Login é opcional para o plano Grátis.
- Pro e Premium exigirão uma conta autenticada.
- Nenhuma cobrança deve ser ativada antes de autenticação, sessão, autorização e webhooks de pagamento estarem testados.
- O AnunciaAI não deve armazenar número de cartão, CVV ou outros dados completos de pagamento.
- Preços pagos só devem aparecer como valores contratáveis quando o checkout real estiver pronto.

## Planos

### Grátis

Disponível agora.

- Geradores atuais sem cadastro.
- Títulos e descrições.
- Benefícios e ficha técnica.
- Ferramentas para diferentes canais.

### Pro

Em preparação.

Direção planejada:

- Conta e histórico de trabalho.
- Salvar produtos e preferências.
- Mais variações e atalhos.
- Recursos de produtividade.

### Premium

Em preparação.

Direção planejada:

- Tudo do Pro.
- Fluxos em lote.
- Padrões e voz da marca.
- Recursos avançados para catálogos.

Os itens acima são direção de produto, não promessa de disponibilidade imediata.

## Autenticação

### Base técnica escolhida

Direção escolhida para a implementação: **Better Auth + Google OAuth + PostgreSQL/Drizzle já existentes no projeto**.

A integração atual do Better Auth com Drizzle usa o adapter oficial `@better-auth/drizzle-adapter`. O handler do Next.js ficará em `/api/auth/[...all]` quando as dependências forem instaladas e as credenciais OAuth estiverem disponíveis.

Motivos principais:

- integração com Next.js App Router;
- compatibilidade com Next.js 16;
- login social com Google;
- adapter para Drizzle/PostgreSQL;
- sessão pode ser validada no servidor antes de liberar páginas ou ações protegidas;
- evita criar um sistema próprio de senha.

A dependência ainda não deve ser ligada à produção até termos o lockfile atualizado e as credenciais OAuth configuradas. O site continua funcionando normalmente sem ela.

Callback planejado de produção:

`https://anunciaai.vercel.app/api/auth/callback/google`

Variáveis futuras devem existir somente no ambiente seguro da Vercel/desenvolvimento local, nunca no Git:

- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

Antes da ativação em produção, a implementação precisa ter:

1. OAuth configurado com redirect URI de produção.
2. Segredo de autenticação somente em variáveis de ambiente.
3. Sessões validadas no servidor para qualquer rota ou ação protegida.
4. Persistência de usuário e sessão no banco.
5. Logout e expiração de sessão testados.
6. Conta protegida contra associação indevida de identidades.
7. Política de privacidade atualizada com os dados realmente coletados.

As rotas `/entrar` e `/conta` já existem como interfaces de preparação. Ambas são `noindex` e ficam fora do sitemap editorial. `/conta` ainda não é uma área autenticada: a proteção real será ativada junto do backend de autenticação.

## Estrutura de banco já preparada

O schema Drizzle e a criação idempotente do banco já possuem a base para:

- `user`;
- `session`;
- `account`;
- `verification`.

O usuário também já possui campos internos para plano e estado da assinatura. Nenhum desses campos deve ser controlado livremente pelo navegador.

## Modelo de acesso

O plano nunca deve ser confiado apenas ao navegador. Recursos pagos precisam ser autorizados pelo servidor.

A base de autorização já está centralizada em `src/lib/plans.ts`:

- planos possíveis: `free`, `pro`, `premium`;
- recursos são associados ao plano no servidor;
- Pro/Premium só viram plano efetivo quando `subscriptionStatus` está `active`;
- qualquer estado pago inválido, cancelado ou inativo volta para `free` na autorização.

Estado mínimo esperado para um usuário:

- identificador interno;
- nome;
- email verificado pelo provedor de autenticação;
- imagem opcional;
- plano atual: `free`, `pro` ou `premium`;
- status da assinatura;
- identificador externo da assinatura quando existir;
- datas de criação e atualização.

## Pagamentos

A cobrança recorrente será conectada apenas depois do login estar estável.

Fluxo esperado:

1. usuário autenticado escolhe um plano;
2. backend cria/inicia o checkout no provedor de pagamento;
3. usuário conclui o pagamento no ambiente do provedor;
4. webhook assinado confirma o estado da assinatura;
5. backend atualiza o plano do usuário;
6. recursos pagos são liberados pelo servidor;
7. cancelamento, falha ou expiração atualizam o acesso automaticamente.

Nunca liberar Pro/Premium somente porque o navegador retornou de uma página de pagamento. O webhook/estado verificado no servidor deve ser a fonte de verdade.

## Ordem de implementação

1. Interface de login e posicionamento dos planos. **Concluído.**
2. Escolha da camada de autenticação. **Concluído: Better Auth + Google OAuth.**
3. Base do schema de usuário, sessão, conta OAuth e verificação. **Concluído.**
4. Modelo inicial de plano e autorização no servidor. **Concluído.**
5. Shell visual de `/conta`. **Concluído; proteção por sessão ainda pendente.**
6. Instalar `better-auth` + adapter Drizzle e atualizar o lockfile. **Pendente.**
7. Criar credenciais OAuth do Google e adicioná-las ao ambiente seguro. **Pendente; exige acesso à conta Google Cloud.**
8. Criar handler `/api/auth/[...all]`, cliente de autenticação e login real com Google.
9. Proteger `/conta` com sessão validada no servidor e implementar logout.
10. Atualizar Política de Privacidade com os dados realmente coletados pela conta.
11. Integrar o provedor de pagamento em modo de teste.
12. Implementar webhooks e sincronização de assinatura.
13. Testar acesso, cancelamento, falha e renovação.
14. Publicar preços e ativar a cobrança real.

## Regras para o CI

- `/entrar` e `/conta` devem continuar `noindex` enquanto forem rotas utilitárias.
- A interface não pode mostrar “Assinar agora” antes da cobrança estar configurada.
- Rotas protegidas futuras devem validar sessão no servidor.
- Segredos de OAuth e pagamento nunca podem ser versionados nem usar prefixo `NEXT_PUBLIC_`.
- O teste `auth:check` deve continuar validando a base de contas durante o `typecheck`.
