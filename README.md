# _studiovit — landing page (conceito)

Landing page para o **_studiovit**, estúdio de tatuagem em Cristo Rei.

> **Status: demonstração.** Proposta independente, ainda não revisada nem aprovada pelo estúdio.
> As fotos em `public/` foram enviadas pelo responsável pelo projeto; nenhuma foi baixada do Instagram.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- [vinext](https://vinext.dev) — caminho recomendado pela Cloudflare para rodar Next.js em Workers
- Fontes locais (`@fontsource-variable`), sem chamadas a CDNs de terceiros

## Rodar localmente

```bash
npm install
npm run dev      # desenvolvimento, com recarga automática
npm run build    # build de produção
npm run start    # prévia local do Worker já compilado
```

## Editar o conteúdo

Tudo fica em [`content/site.ts`](content/site.ts): WhatsApp, endereço, horário, textos e galeria.
Campos vazios significam "dado ainda não confirmado" e não aparecem na página.

| O que | Onde |
| --- | --- |
| Número ou link do WhatsApp | `whatsapp.number` ou `whatsapp.link` |
| Cidade, CEP | `address.city`, `address.postalCode` |
| Horário | `openingHours` |
| Fotos da galeria | arquivos em `public/trabalhos/` + `works[].src` e `works[].alt` |
| Foto do hero e do "Sobre" | `hero.image`, `about.image` |
| Faixa de "conceito" e bloqueio de indexação | `DEMO_MODE` |

Os botões de contato abrem o WhatsApp com uma mensagem de orçamento já escrita (`whatsapp.message`).
Se o número for removido, eles passam a levar ao Instagram.

Fotos: use somente imagens autorizadas pelo Vit, em WebP, com até ~1600 px no lado maior.

## Publicar na Cloudflare (Workers)

A configuração está em [`cloudflare.config.ts`](cloudflare.config.ts) (Worker `studiovit-conceito`,
sem domínio personalizado, sem KV/R2/D1). Nenhum token fica no repositório.

```bash
npx cf auth login   # uma vez, abre o navegador
npm run deploy      # compila e publica em *.workers.dev
```

Em CI ou no Workers Builds (painel da Cloudflare, conectando este repositório):

- Build command: `npm run build`
- Deploy command: `npx vinext-cloudflare deploy --skip-build`
- Variáveis (como secrets do CI, nunca no código): `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
