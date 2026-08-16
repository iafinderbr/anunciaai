# Backend generativo opcional

O AnunciaAI possui uma integração de servidor preparada para o Gemini, mas ela permanece **desativada por padrão**.

## Estado seguro padrão

O endpoint `GET /api/generate` só informa `enabled: true` quando **as duas condições** abaixo forem atendidas no ambiente do servidor:

- `ANUNCIAAI_GENERATIVE_ENABLED=true`
- `GEMINI_API_KEY` configurada

Sem as duas condições, `POST /api/generate` responde `503` e não chama o provedor externo.

## Variáveis de ambiente

Configure apenas no servidor/Vercel. Nunca coloque a chave em código cliente, variável `NEXT_PUBLIC_*`, commit, issue ou arquivo versionado.

```env
ANUNCIAAI_GENERATIVE_ENABLED=false
GEMINI_API_KEY=
GEMINI_MODEL=gemini-2.5-flash
```

`GEMINI_MODEL` é opcional. O código usa `gemini-2.5-flash` como valor padrão enquanto esse modelo estiver disponível.

## Antes de ativar

1. Criar a chave no provedor e armazená-la somente como segredo de ambiente na Vercel.
2. Confirmar o modelo e os preços/limites atuais na documentação oficial do provedor.
3. Atualizar `/privacidade` para explicar que, quando a geração avançada estiver ativa, o conteúdo do formulário poderá ser enviado ao provedor para produzir a resposta.
4. Informar isso também na interface antes do primeiro envio ao provedor.
5. Manter o conteúdo do produto fora dos logs do servidor.
6. Confirmar rate limit e regras de firewall disponíveis no plano atual.
7. Testar falha do provedor e garantir fallback para o gerador local.
8. Só depois mudar `ANUNCIAAI_GENERATIVE_ENABLED` para `true`.

## Proteções já implementadas

- chave somente no servidor;
- flag de ativação separada da chave;
- limite de payload;
- validação de canal e tom;
- checagem de origem no POST;
- rate limit por instância;
- timeout da chamada externa;
- resposta solicitada em JSON;
- validação e truncamento dos campos retornados;
- rejeição de números que não existem nos dados enviados;
- rejeição de várias promessas e condições comerciais não sustentadas;
- nenhum log do conteúdo enviado ao provedor.

## Importante

O filtro reduz risco de invenção, mas não transforma saída de modelo em fato verificado. A interface deve continuar tratando o resultado como primeira versão para revisão humana.
