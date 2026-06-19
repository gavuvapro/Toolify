# Tool Empir

Tool Empir is a production-ready, open-source platform for discovering the best everyday tools by profession, category, budget, platform, and use case. It is designed to feel like Product Hunt + G2 + Futurepedia + StackShare + Awesome Lists with a modern Vercel-quality interface.

## Features

- Curated tool directory with pricing, free plan, platforms, ratings, tags, pros, cons, and alternatives.
- Instant fuzzy search powered by Fuse.js.
- Filters for profession, category, budget, free plan, platform, and AI features.
- Side-by-side tool comparison.
- Profession stacks for developers, designers, creators, students, founders, marketers, freelancers, teachers, AI engineers, and podcasters.
- Browser-local favorites; Prisma schema supports authenticated cloud favorites and collections.
- Contribution form with validation and sanitization.
- Donation page for GitHub Sponsors, Ko-fi, Buy Me a Coffee, and PayPal.
- SEO: sitemap, robots.txt, structured metadata, and dynamic Open Graph image.
- PostgreSQL + Prisma schema included.

## Tech stack

- Next.js App Router + TypeScript
- Tailwind CSS + shadcn-style UI primitives
- PostgreSQL + Prisma
- Fuse.js search
- Clerk-ready authentication
- Plausible-ready analytics
- MDX-ready content structure
- Vercel deployment

## Getting started

```bash
cp .env.example .env
npm install
npm run db:generate
npm run dev
```

Open http://localhost:3000.

## Database setup

Set `DATABASE_URL` in `.env`, then:

```bash
npm run db:push
npm run db:seed
```

The app currently reads from `lib/data/tools.ts` for fast static rendering. The Prisma schema and seed script are ready for moving reads/writes to PostgreSQL.

## Configuration

- Change the public app name with `NEXT_PUBLIC_APP_NAME`.
- Set `NEXT_PUBLIC_SITE_URL` for production metadata and sitemap URLs.
- Add Clerk variables to enable user auth and server-side favorites.
- Add donation URLs to customize the Donate page.

## Adding tools

Edit `lib/data/tools.ts` and add an object matching the `Tool` type in `lib/types.ts`.

## Security

User submissions are validated with Zod and sanitized with `sanitize-html`. See [SECURITY.md](SECURITY.md).

## License

MIT — see [LICENSE](LICENSE).
