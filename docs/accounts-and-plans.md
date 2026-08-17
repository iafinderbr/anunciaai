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

Direção preferida: login social com Google, sem criar um sistema próprio de senha.

Antes da ativação em produção, a implementação precisa ter:

1. OAuth configurado com redirect URI de produção.
2. Segredo de autenticação somente em variáveis de ambiente.
3. Sessões validadas no servidor para qualquer rota ou ação protegida.
4. Persistência de usuário e sessão no banco.
5. Logout e expiração de sessão testados.
6. Conta protegida contra associação indevida de identidades.
7. Política de privacidade atualizada com os dados realmente coletados.

A rota `/entrar` já existe como interface de preparação. Ela é `noindex` e não entra no sitemap.

## Modelo de acesso

O plano nunca deve ser confiado apenas ao navegador. Recursos pagos precisam ser autorizados pelo servidor.

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
2. Escolha e instalação da camada de autenticação.
3. Schema/tabelas de usuário, sessão e conta OAuth.
4. Login real com Google em ambiente de teste.
5. Área `/conta` protegida.
6. Modelo de plano e autorização no servidor.
7. Integração do provedor de pagamento em modo de teste.
8. Webhooks e sincronização de assinatura.
9. Testes de acesso, cancelamento, falha e renovação.
10. Publicação dos preços e ativação da cobrança real.

## Regras para o CI

- `/entrar` deve continuar `noindex` enquanto for uma rota utilitária.
- A interface não pode mostrar “Assinar agora” antes da cobrança estar configurada.
- Rotas protegidas futuras devem validar sessão no servidor.
- Segredos de OAuth e pagamento nunca podem ser versionados.
