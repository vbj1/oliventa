# Oliventa

Premium multilingual Next.js foundation for a Greek products brand with a dark editorial interface, lightweight Three.js hero preparation, and scalable routing for future e-commerce.

## Stack

- Next.js App Router
- React
- Tailwind CSS v4
- Framer Motion
- Three.js

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root route redirects to `/ro`, which is the default market language.

## Folder structure

```text
app/
  [locale]/
    about/
    contact/
    products/
    quality/
    layout.tsx
    page.tsx
components/
  home/
  layout/
  three/
  ui/
data/
  dictionaries/
lib/
public/
  logo/
  images/
    editorial/
    mockups/
    products/
  icons/
```

## Where translations live

Local dictionaries are stored in:

- `data/dictionaries/ro.ts`
- `data/dictionaries/en.ts`
- `data/dictionaries/el.ts`

Routing and locale helpers live in `lib/i18n.ts`.

## Where to replace assets

Drop future assets into:

- `public/logo/`
- `public/images/products/`
- `public/images/mockups/`
- `public/images/editorial/`
- `public/icons/`

The header currently uses a typographic brand mark as a placeholder until the final SVG logo is connected.

## What is already prepared

- Multilingual routing under `/ro`, `/en`, `/el`
- Language switcher that preserves the current page and swaps locale
- Shared premium layout with reusable sections, cards, buttons, header, and footer
- Homepage scaffold with hero, featured categories, brand story, origin/quality, and inquiry CTA
- Placeholder inner pages for About, Products, Quality / Origin, and Contact
- Lightweight Three.js ambient canvas in `components/three/ambient-canvas.tsx`
- Framer Motion section reveals for a more polished editorial feel

## Future 3D and scroll extension

The hero is intentionally structured for a later cinematic scene with:

- floating bottle
- olives and particles
- scroll-linked parallax and lighting
- richer camera choreography

The current `AmbientCanvas` keeps the implementation light while reserving the correct component boundaries for a more advanced Three.js scene later.
