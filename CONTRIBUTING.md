# Contributing to Tool Empir

Thanks for helping build the open-source everyday tools library.

## Ways to contribute

- Add or improve tool profiles in `lib/data/tools.ts`.
- Add profession stacks in `lib/data/stacks.ts`.
- Improve UI, accessibility, performance, docs, and tests.
- Report outdated pricing or inaccurate alternatives.

## Tool data checklist

Every tool should include:

```ts
{
  name: "",
  website: "",
  category: "",
  subCategory: "",
  pricing: "Free | Freemium | Paid | Subscription | Lifetime Deal",
  budgetRange: "$0 | Under $10/month | Under $25/month | Under $50/month | Enterprise",
  freePlan: true,
  bestFor: [],
  advantages: [],
  disadvantages: [],
  alternatives: [],
  platforms: [],
  rating: 0,
  tags: [],
  featured: false
}
```

## Pull request process

1. Fork the repository.
2. Create a feature branch.
3. Run `npm run typecheck` and `npm run lint`.
4. Keep changes focused and documented.
5. Open a PR explaining the user value and data sources if relevant.

## Curation principles

- Prefer useful, reputable, actively maintained tools.
- Be clear about pricing and limitations.
- Do not add affiliate links without disclosure.
- Avoid hype; focus on practical fit by use case.
