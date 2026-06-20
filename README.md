# DevElse Services — Website

Next.js 15 + TypeScript + Tailwind CSS corporate website for DevElse Services Pvt Ltd.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> Note: this codebase was written in a sandboxed environment without internet access, so
> `npm install` and a production build have not been run against it yet. Syntax and imports were
> written carefully, but please run `npm run build` locally first and fix anything TypeScript or
> Next.js flags before deploying.

## Structure

```
app/                    Routes (App Router)
  layout.tsx            Root layout, fonts, SEO metadata, JSON-LD
  page.tsx              Home page
  ai-solutions/         AI Solutions page
  contact/              Contact page
  privacy-policy/       Placeholder legal page
  terms/                Placeholder legal page
  sitemap.ts / robots.ts
components/
  ui/primitives.tsx     Button, Container, SectionHeading, etc.
  layout/               Navbar, Footer, ScrollProgress, FloatingActions (WhatsApp + scroll-to-top)
  theme/                Light/dark theme provider + toggle (no external dependency)
  home/                 All homepage sections (Hero, Stats, Services, Process, Portfolio, etc.)
  contact/ContactForm.tsx
lib/
  data.ts               All site copy and content — edit this file to update text everywhere
  utils.ts
```

## What to do before launch

1. **Run `npm install` and `npm run build`** to catch any issues — this hasn't been verified in a real Node environment yet.
2. **Replace placeholder content** in `lib/data.ts`: stats, portfolio projects, testimonials, and FAQ copy are written as realistic *placeholders*, not real client data. Swap in your actual numbers, case studies, and client quotes (with permission).
3. **Wire up the contact form and newsletter signup.** Both are currently front-end only (`components/contact/ContactForm.tsx`, `components/layout/Footer.tsx`) — they simulate success but don't send anywhere. Connect them to an email service (e.g. Resend, SendGrid) or a form backend, or route through an API route in `app/api/`.
4. **Add a real Google Map embed** in `app/contact/page.tsx` (currently a placeholder block) and real social links in `components/layout/Footer.tsx`.
5. **Add project images** for the portfolio cards — currently styled as gradient placeholder blocks rather than photos, since this environment couldn't fetch real images. Drop screenshots into `public/portfolio/` and reference them in `lib/data.ts`.
6. **Update `metadataBase` and OG/sitemap URLs** in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` from the placeholder `develseservices.com` domain to your real one.
7. **Favicon and OG image** — add `app/icon.png` and an OG image; none are included yet.

## Design system

- Colors, fonts, and animation tokens are defined in `tailwind.config.ts` and `app/globals.css`.
- Dark/light mode toggles a `.dark` class on `<html>`, persisted to `localStorage`.
- The amber "signal" accent and the scroll-progress line at the top of the page are the site's recurring visual motif — keep them consistent if you add new sections.
