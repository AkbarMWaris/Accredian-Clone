# Accredian Enterprise Clone

A pixel-perfect clone of the [Accredian Enterprise](https://enterprise.accredian.com/) website built with **Next.js 16 (App Router)** and **Tailwind CSS v4**.

## Setup Instructions

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Approach Taken

1. **Analysis** — Fetched the original site to extract its content structure, color palette, and component layout. The brand color `#1A73E8` (blue) was identified and defined as `--color-universal` in `globals.css`.

2. **Component breakdown** — Split the page into 14 modular sections (Navbar, Hero, Stats, Partnerships, AccredianEdge, DomainExpertise, CourseSegmentation, WhoShouldJoin, CATFramework, HowWeDeliverResults, FAQ, Testimonials, CTA, Footer), each in its own file under `src/components/`.

3. **API layer** — Created a mock async API (`src/lib/api.ts`) with typed interfaces to supply data to each section, making it easy to swap in real API calls later.

4. **Image handling** — All images are served from the original site's CDN (`storage.googleapis.com/accredian-assets/`) using Next.js `<Image>` with proper `remotePatterns` configuration. Client logos use `logo.clearbit.com`.

5. **Styling** — Tailwind CSS v4 with the `@theme` directive. Used the original site's exact spacing, border radii, font sizes, and hover effects. Two-color headings (gray + blue accent) follow the original pattern.

6. **Interactive features** — IntersectionObserver-based active nav tracking, smooth scroll, testimonial carousel with translateX slide transitions, FAQ accordion with category tabs, and an enquiry modal with form validation.

7. **Mobile responsive** — All sections adapt from mobile to desktop with appropriate breakpoints (`sm`, `md`, `lg`). Navbar collapses to a hamburger menu at `lg`. Footer switches from dark (mobile) to light (desktop).

## AI Usage Explanation

This project was built interactively with an AI assistant (opencode). The AI:

- Analyzed the original site's HTML structure by fetching the page
- Wrote the initial component scaffold and progressively refined it based on user feedback
- Applied visual adjustments (colors, spacing, icon replacements, layout changes) iteratively
- Debugged build errors and fixed type/runtime issues
- Implemented interactive features (modal, carousel, accordion, nav tracking)

Every change was reviewed and verified by running `npm run build` and `npm run lint` to ensure zero errors.

## Improvements With More Time

- **Real API integration** — Replace the mock `api.ts` with actual endpoints for dynamic content
- **Form submission** — Wire the enquiry modal and CTA to a real backend or CRM (e.g., email service, webhook)
- **Animations** — Add scroll-triggered entry animations (fade-in, slide-up) using Framer Motion or IntersectionObserver
- **Image optimization** — Migrate CDN images to a Next.js Image optimization pipeline for better performance
- **SEO** — Add structured data (JSON-LD), meta tags, and Open Graph images per section
- **Performance** — Implement route prefetching, lazy-load below-fold sections, and add loading skeletons
- **Accessibility** — Improve keyboard navigation, add aria labels, and test with screen readers
- **Testing** — Add unit tests (Jest/Vitest) and E2E tests (Playwright) for interactive components
