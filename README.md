# Kliq

Website for Kliq — a collective helping Web3 projects grow and stay engaged.
Built with Next.js (App Router, TypeScript) and deployed to Cloudflare Workers with
[`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare).

## Develop

```bash
npm install
npm run dev
```

Site content (members, skills, projects, values, contact links) lives in `lib/collective.ts`.

## Contact form

The "Reach out" form posts to `/api/contact`, which emails the team through
[Resend](https://resend.com). Set `RESEND_API_KEY`:

- locally: in `.env.local`
- on Cloudflare: Workers & Pages → your Worker → Settings → Variables and Secrets → add
  `RESEND_API_KEY` as a **secret**

Resend's default sender only delivers to the address the Resend account was created with. Use
`CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` (after verifying a domain in Resend) to change that.

## Deploy to Cloudflare

This is a Workers deployment (not Cloudflare Pages). In the Worker's build settings:

| Setting | Value |
| --- | --- |
| Build command | `npx opennextjs-cloudflare build` |
| Deploy command | `npx opennextjs-cloudflare deploy` |
| Root directory | `/` |

The Worker name in Cloudflare must match `name` in `wrangler.jsonc` (`kliq`).

Test the Cloudflare build locally with `npm run preview`.
