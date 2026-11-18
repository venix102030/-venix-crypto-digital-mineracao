# Venix Crypto Digital — pacote Cloudflare Workers

## Estrutura

- `public/index.html`: interface do Venix Crypto Digital.
- `src/index.js`: Worker que entrega os arquivos e responde ao teste `/api/health`.
- `wrangler.toml`: configuração do Worker e dos arquivos estáticos.

## Deploy no Cloudflare

No projeto conectado ao GitHub, configure:

- Root directory: `/` (raiz do repositório)
- Build command: vazio
- Build output directory: vazio
- Deploy command: `npx wrangler deploy`

O arquivo `wrangler.toml` configura a pasta `public` como arquivos estáticos.

## Testes após publicar

- Página: endereço principal do Worker.
- API: `/api/health`.

## Importante

Esta versão é um protótipo demonstrativo. O cronômetro não minera Bitcoin; saldos e indicadores não representam fundos reais. Não há conexão com carteira, mineradora, pagamentos ou cotação ao vivo. Não coloque senhas, chaves privadas ou tokens neste pacote.
