# Webhook Inspector (monorepo)

Projeto com duas aplicações:

- api: captura e lista webhooks (Fastify + TypeScript).
- web: frontend React (Vite + TypeScript).

## Pré-requisitos

- Node.js 18+
- pnpm
- PostgreSQL (opcional, para persistência)

## Instalação

1. Instale dependências do workspace:

```sh
pnpm install
```

2. Crie o arquivo de variáveis de ambiente para a API (ex.: api/.env) com pelo menos:

```
DATABASE_URL=postgresql://user:pass@localhost:5432/dbname
PORT=3333
```

## Executando localmente

API:

```sh
pnpm --filter api run dev
```

Web:

```sh
pnpm --filter web run dev
```

Migrations (Drizzle):

- Verifique `api/drizzle.config.ts` e use o drizzle-kit conforme documentação do projeto.

## Estrutura relevante

- api/ (Fastify, routes, db)
- web/ (React, Vite)
- package.json (workspace)

## Tecnologias

- Node.js, pnpm, TypeScript
- Fastify, fastify-type-provider-zod
- Drizzle ORM / drizzle-kit
- React, Vite
