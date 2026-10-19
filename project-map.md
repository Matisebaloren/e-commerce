# Project Map
_Updated: 2026-10-19 | User-supplied reference: 3fa1e90 | Identity: Vuravo, stage 1.2_

## Directory Structure
`src/` — React application source, shared styles, data fixtures, models, and UI components.
`src/config/` — Shared Vuravo brand identity and messages.
`src/types/` — Product, category, and synchronous repository contracts.
`src/data/` — Eighteen product fixtures, six categories, and pure repository operations.
`src/components/` — Layout, home sections, catalog controls, product cards and gallery.
`src/pages/` — Home, catalog, product detail, and not-found route views.
`src/lib/` — Shared ARS formatter, search normalization, and document-title hook.
`docs/specs/` — Current Vuravo 1.2 design, superseded 1.1 design, and NEXO history.
`public/` — Static files served from the site root, including icons and favicon.

## Key Files
`package.json` — Vite scripts and the compatible React/TypeScript dependency baseline.
`vite.config.ts` — Vite configuration and React plugin registration.
`src/main.tsx` — React entry point mounting the application.
`src/App.tsx` — Main application composition and route shell.
`src/index.css` — Neutral/warm visual system, responsive layouts, typography, and interaction states.
`src/lib/productImages.ts` — Resource-specific contain/cover choices shared by product cards and gallery.
`src/components/home/Hero.tsx` — Single lifestyle photograph in an independent media frame; content determines height.
`src/config/brand.ts` — Shared name, logo paths, tagline and demonstration notice.
`public/brand/vuravo.svg` — Typographic logo; public/favicon.svg supplies the matching symbol.
`src/data/productRepository.ts` — UI-independent local product lookup and filtering.
`src/pages/CatalogPage.tsx` — URL-driven q/category filters and result states.
`src/pages/ProductDetailPage.tsx` — Gallery, specifications, related items, and catalog return link.
`src/components/ui/ResponsiveImage.tsx` — Responsive Unsplash images and local SVG fallback.
`README.md` — Project setup and feature documentation.
`eslint.config.js` — ESLint flat configuration for TypeScript and React.
`index.html` — Browser document shell and site metadata.

## Critical Constraints
- Keep React, Vite, TypeScript 5.9.3, and ESLint compatible with the existing scaffold.
- Current identity is Vuravo (vuravo.); NEXO is historical documentation only.
- Preserve nx-* product IDs and existing slugs across rebranding.
- Spanish (Argentina) is the product language and ARS is the display currency.
- The first stage uses local demo data only; WordPress/WooCommerce integration is future work.
- Do not add automated test suites or present future commerce actions as implemented.
- The implementation request explicitly excludes tests, lint, builds, audits, and post-implementation manual checks.
- BrowserRouter hosting must rewrite frontend deep links to index.html.
- Photo and Google Fonts resources are remote; product data never uses HTTP.
- Galleries only show distinct photographs of the same item; current fixtures use a single image rather than artificial crops.
- Hero/campaign media must not contribute intrinsic image dimensions to grid tracks.
- Current design uses warm/white surfaces; saturated colors are reserved for actions and small accents.

## Hot Files
`src/index.css`, `src/lib/productImages.ts`, `src/components/home/Hero.tsx`, `src/components/products/ProductCard.tsx`, `src/pages/CatalogPage.tsx`, `README.md`
