# Security Policy

## Principles

Tool Empir follows OWASP Top 10 guidance, secure-by-default defaults, least privilege, and defense in depth.

## Current controls

- User contribution input is validated with Zod.
- User-provided text is sanitized before processing.
- API routes return minimal error details.
- Prisma schema uses explicit relations and cascade behavior.
- Secrets are loaded from environment variables and must not be committed.
- `robots.ts` disallows `/api/` crawling.

## Production recommendations

- Enable Clerk authentication and protect write routes.
- Add rate limiting to contribution endpoints.
- Store contributions in a moderation queue before publication.
- Use a strict Content Security Policy.
- Enable Vercel protection, dependency scanning, secret scanning, and audit workflows.
- Log security events without storing sensitive data.

## Reporting vulnerabilities

Please open a private security advisory or email the maintainers. Do not disclose vulnerabilities publicly until a fix is available.
