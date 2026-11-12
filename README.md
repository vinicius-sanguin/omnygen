# OMNYGEN

Site institucional da OMNYGEN para apresentação de serviços de desenvolvimento de sites, aplicativos e UX/UI, com contato direto pelo WhatsApp.

## Tecnologias

- Next.js 16.4.3 e React 19
- TypeScript
- Tailwind CSS 4
- Vercel Analytics

## Desenvolvimento local

Use Node.js compatível com Next.js 16 e o gerenciador indicado em `package.json`: pnpm 12.3.4.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abra `http://localhost:3000` no navegador.

Para verificar os tipos e gerar a versão de produção:

```sh
pnpm exec tsc --noEmit
pnpm build
pnpm start
```

## Estrutura

- `app/page.tsx`: composição da página inicial.
- `app/layout.tsx`: metadados, fonte e layout global.
- `app/globals.css`: estilos e identidade visual.
- `components/`: cabeçalho, apresentação, serviços, contato e rodapé.
- `lib/whatsapp.ts`: número usado pelos links de atendimento.
- `public/`: logotipo e demais imagens.

## Publicação

Importe este repositório na Vercel e selecione o preset Next.js. Os comandos de instalação e build são definidos pelo gerenciador e pelos scripts de `package.json`.

Arquivos de ambiente, credenciais, dependências instaladas e o diretório `.next` não devem ser versionados.
