# Halstead & Rowe — accountant landing page

A single-page marketing site for a chartered accountancy practice, built with Next.js 16,
React 19 and Tailwind v4. **Every section on the page is a Relume component**, vendored
shadcn-style into `src/components/sections/` — nothing on the page was hand-authored.

## Page composition

Sections top to bottom, with the Relume slug each one came from:

| # | Section | Relume component | Purpose |
|---|---------|------------------|---------|
| 1 | `Navbar1` | `navbar1_component` | Logo left, links right, client-login + booking CTA |
| 2 | `Header1` | `section_header1` | Hero — positioning statement and primary CTA |
| 3 | `Logo1` | `section_logo1` | Accreditations and professional memberships |
| 4 | `Layout237` | `section_layout237` | Three service pillars with icons |
| 5 | `Layout218` | `section_layout218` | Practice story with two supporting stats |
| 6 | `Stats8` | `section_stats8` | Headline outcome numbers |
| 7 | `Timeline9` | `section_timeline9` | "How switching works" — four steps |
| 8 | `Pricing23` | `section_pricing23` | Three fixed-fee packages, monthly/yearly tabs |
| 9 | `Testimonial5` | `section_testimonial5` | Two client testimonials with ratings |
| 10 | `Team20` | `section_team20` | Four named team members |
| 11 | `Faq1` | `section_faq1` | Five accordion FAQs |
| 12 | `Cta7` | `section_cta7` | Consultation call to action |
| 13 | `Contact5` | `section_contact5` | Contact form with email, phone and address |
| 14 | `Footer1` | `footer1_component` | Newsletter, link columns, social, legal |

All content is passed in as props from `src/app/page.tsx`; the section files themselves are
unmodified Relume source except for the four fixes noted below.

## Design tokens

Relume components render against `scheme-*` colours, a `text-h1`…`text-h6` type ramp and
`rounded-button`/`rounded-card`/`rounded-image` radii. Those live in the `@theme` layer in
`src/app/globals.css`, expressed for Tailwind v4 rather than the published v3 preset.

Because v4 emits `font-size: var(--text-h1)` rather than an inlined value, the type ramp is
declared at Relume's mobile sizes and the desktop ramp is swapped in by redefining the same
custom properties inside a `@media (width >= 48rem)` block.

`@utility container` restores the centred 80rem container Relume expects — v4 ships
`container` without centring or a fixed max-width.

The palette is a deep navy (`#0f2a43`) on white with a light `#f3f6fa` card surface, and
radii are softened from Relume's default sharp corners.

## Fixes applied to the vendored source

Four defects in the vendored component source, each fixed in place:

- `Pricing23.tsx` — an `<h4>` was nested inside an `<h3>`, which is invalid HTML and caused
  the browser to reparent the node, producing a React hydration mismatch. Changed to a
  `<span>` with the same classes.
- `Layout237.tsx` — the defaults were spread *after* `props`, so incoming props were silently
  discarded and the section always rendered placeholder copy. Spread order corrected.
- `Navbar1.tsx` — `motion.create(Card)` was called during render, remounting the dropdown on
  every render. Hoisted to module scope. `useMediaQuery` is also initialised with
  `initializeWithValue: false` so the first client render matches the server render.
- `Timeline9.tsx` — the `forwardRef` component was missing a `displayName`.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

Images use Relume's own placeholder CDN (`d22po4pjz3o32e.cloudfront.net`). Swap those URLs
for real photography and a real logo before launch.

All copy is illustrative placeholder content for a fictional practice, including the firm
name, prices, statistics, testimonials, staff and company registration number. Replace it
with the client's own verified details before publishing — the accreditation logos and the
"100% on-time filing record" style claims in particular need to be true.
