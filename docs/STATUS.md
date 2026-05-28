# STATUS

**Last updated:** This session (continuation after Phases 1–5 of `REDESIGN-PLAN.md`).

Read this first if you're starting a new session. It tells you where the redesign currently stands and what to do next.

---

## What is shipped

### Homepage — production-ready at the section level

All nine homepage sections have been rebuilt or refined to the new token system:

| Section | File | State |
|---|---|---|
| Hero | `src/components/sections/hero-section.tsx` | Refined this session: static italic-bronze H1 (cycler removed), portrait backplate cleaned (no blur, no offset), trust strip removed (subline carries all three facts now). |
| HeroCTA | `src/components/sections/HeroCTA.tsx` | Refined: redundant logo dropped, 55ch lead measure, bronze hairline rhythm, padding promoted to py-32 lg:py-40 (primary section). |
| TruckAccidentEvaluator wrapper | `src/app/page.tsx` | Padding demoted to py-16 lg:py-20 (connector rhythm). Em-dashes and en-dashes inside the evaluator option labels and value-range strings swept. |
| ResultsGallery | `src/components/sections/practice-areas/ResultsGallery.tsx` | Refined: left-aligned editorial header with a `$50M+ recovered` aggregate to the right, `.eyebrow eyebrow-on-dark` on the featured card type label, padding promoted to py-32 lg:py-40 (primary). |
| Biography | `src/components/sections/Biography.tsx` | Refined: bronze hairline accent under headline, tighter two-paragraph bio body, `var(--radius-card)` driven backplate, padding demoted to py-20 lg:py-28 (connector). |
| PracticeAreas | `src/components/sections/PracticeAreas.tsx` | Refined: single-column centered editorial header with an italic Cormorant lede underneath (no right-rail), larger icon containers (14×14), hover photograph reveal bumped 3%→8%, padding demoted to py-20 lg:py-28 (connector). |
| GoogleReviews | `src/components/sections/GoogleReviews.tsx` | Fully rewritten this session. Old version had three identical-card grid + bronze-colored standalone word in headline + decorative Google G SVG + raw `tracking-[0.3em]` clusters. New version: quiet centered header ("What clients tell us afterward."), full-width navy featured testimonial with the 5.0/99-reviews aggregate folded in above the quote, two compact secondary testimonials below. Padding demoted to py-20 lg:py-28 (connector). |
| FinalCTA | `src/components/sections/FinalCTA.tsx` | Refined: bronze hairline accent above eyebrow, trust line uses dot separators ("Available 24/7  ·  Hablamos español  ·  Licensed in TX, AZ, NM"), padding promoted to py-32 lg:py-40 (primary). |
| Footer | `src/components/layout/Footer.tsx` | Out of scope per REDESIGN-PLAN §7. |

### Build status

- `npm run build` — passing.
- `npm run lint` — 44 errors / 12 warnings, none in homepage section files I rewrote or refined. See `ISSUES.md`.

### Section rhythm scale (this session's new pattern)

Three-step padding scale, applied consistently across the homepage:

- **Primary**: `py-32 lg:py-40` — HeroCTA, ResultsGallery, FinalCTA (anchor sections)
- **Connector**: `py-20 lg:py-28` — Biography, PracticeAreas, GoogleReviews (rhythm sections)
- **Wrapper**: `py-16 lg:py-20` — TruckAccidentEvaluator section in `page.tsx` (compact)

This replaces the previous flat `py-24 lg:py-32` everywhere, which read as SaaS-uniform. The new rhythm gives the page editorial cadence.

---

## What is in progress

Nothing is mid-edit. Last action: section refinement pass + audit. Next action: see "What's next" below.

---

## What's next (in priority order)

1. **Lint cleanup** — 44 errors blocking a clean `npm run lint` pass. The bulk are `react/no-unescaped-entities` apostrophes (mechanical fix). See `ISSUES.md` for the full list.
2. **Site-wide audit findings** — 17 non-homepage pages were audited this session by a general-purpose agent. Several findings are clear P1s (Spanish locale is a translation not a peer, hero video plays on wrongful-death/medical-malpractice pages, `/services` has a banned 4×8 identical-card grid, `/reviews` duplicates ResultsGallery's job with a worse custom grid, `/truck-accident-lawyer` has a banned 4-stat TrustBar). See `ISSUES.md`.
3. **Phase 6 from REDESIGN-PLAN** — formal `/impeccable audit` re-score against the original 20-point quality bar. Target: 17/20+, zero P0 findings. Audit agent's read of the homepage is positive; non-homepage pages drag the average.
4. **Original REDESIGN-PLAN §7 out-of-scope items** — these were always deferred but should be reconsidered if production-ready is the bar: CRMForm submit handler wiring, Spanish `/es` page tree, Footer, Header location-dropdown asymmetry.

---

## Open decisions

- **Scope expansion**: REDESIGN-PLAN was "homepage only." The user said "redesign the website completely so that it is ready for production," which implies the 17 other pages are now in scope. The audit work has been done; the implementation work has not.
- **`package.json` name**: still `champlawsite` (leftover from a prior project). Cosmetic; doesn't block anything.
- **`CRMForm(1).tsx`**: Windows-style duplicate of `CRMForm.tsx`. Should be deleted; verified nothing imports it.
- **`JurisdictionBar.tsx`**: still on disk but no longer rendered anywhere (REDESIGN-PLAN §4 removed it from the homepage). Can be deleted.
- **`Hero.tsx`**: thin pass-through wrapper that just renders `HeroSection`. Could be inlined.

---

## How to pick up work from here

1. Read this file. Then read `SESSION-LOG.md` for chronology.
2. Read `ISSUES.md` for the active issue queue.
3. The locked design decisions are in `USER-NEEDED.md` (Q1–Q11) and the structural plan is in `REDESIGN-PLAN.md` (sections 1–12).
4. The token system is fully documented in `src/app/globals.css`. **No raw hex in JSX**; always use tokens.
5. The motion helpers in `src/lib/motion.ts` (`useReducedMotionPref`, `fadeRiseVariants`, `staggerVariants`, `hoverLift`, `tapPress`) gate every motion against `prefers-reduced-motion`. Use them.
6. Native React forms only on the homepage (`NativeCaseReviewForm`). Other pages still use the legacy `CRMForm.tsx` iframe until they're migrated.
7. Verify every change with `npm run build`. Run `npm run lint` before declaring a change done.
