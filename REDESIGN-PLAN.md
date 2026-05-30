# Homepage Redesign Plan

**Project:** The Carter Law Firm, P.C. (carterlawwins.com)
**Scope:** Homepage only in this engagement. Other pages follow once the homepage is shipped, re-audited, and approved.
**Approach:** One phase at a time. Build verified after each phase.
**Source documents:** `PRODUCT.md`, `DESIGN.md`, `Carter-Law-Design-Audit.pdf`, `USER-NEEDED.md` (locked answers in §1), and the `ui-ux-pro-max` rules layer.

**Status as of this writing:** Phases 1–5 are complete and on disk. Phase 6 (re-audit) is pending. The dev server has been used for visual verification.

---

## 1. Locked decisions from `USER-NEEDED.md`

| Q | Decision |
|---|---|
| Q1 | Hero headline: *El Paso's truck accident lawyer. We win these cases.* (italic-bronze on "We win these cases") |
| Q2 | Italic-bronze used **once** on the homepage, in the Hero. |
| Q3 | Final CTA band on dark navy. |
| Q4 | JurisdictionBar folded into Hero trust strip. Standalone section removed. |
| Q5 | PracticeAreas: 2 featured cards (Truck, Car) + 6 non-card list rows. Reducing card count is explicit anti-slop guidance. |
| Q6 | Header auto-hide disabled on homepage. Visibility logic rewritten to fix on-load and flaky-appearance bugs. |
| Q7 | Hero portrait on a single subtle backplate; no rotation, no double-frame. |
| Q8 | Hero CTAs: primary opens the case-review modal (dual-intent: urgent contact + case review with response-time promise); secondary is click-to-call **(915) 621-1818**. |
| Q9 | Hero subline: *16 years in El Paso courtrooms. Licensed in Texas, Arizona, and New Mexico. No fee unless we win.* |
| Q10 | "Slip n' Fall's" → "Slip and Fall". |
| Q11 | Phase-by-phase execution; build + lint after each; user approval before next phase. |

### Mid-engagement scope addition

After Phase 1 shipped, the user added: *"When addressing the redesign of the CRMForm, simply redesign a native form, and functionality for sending form requests will be added later. Main focus should be design, functionality will be added later."*

The CRMForm iframe was originally out of scope. After this addition, a **native React form (visual + structural; placeholder submit handler)** moved into Phase 3 scope. Wiring the submit handler to a backend remains a future engagement.

---

## 2. Strategic frame (from PRODUCT.md)

Primary visitor: someone in a truck accident within the last several days, on a phone, in pain, possibly cognitively impaired, in acute stress. Secondary: the Spanish-speaking version of the same person. Job to be done is binary — feel certain enough about this firm in the first few seconds to book the free case review or call.

Brand register: fighter-counselor blend, expressed through restrained confidence. Heavyweight champion at a press conference, not a billboard. Five governing principles: decision in seconds, Spanish is a peer, fierce not loud, every element justifies the user's pain tax, show wins don't claim them.

---

## 3. New token system (`globals.css`) — SHIPPED IN PHASE 1

The following tokens replaced the partial token set that previously existed.

### 3.1 Color (OKLCH; tinted neutrals)

```css
:root {
  /* Surfaces */
  --surface-white:   oklch(99.5% 0.003 250);
  --surface-fog:     oklch(96.5% 0.005 250);
  --surface-mist:    oklch(94% 0.005 250);

  /* Ink */
  --ink-charcoal:    oklch(20.5% 0.005 250);
  --ink-steel:       oklch(40% 0.02 250);
  --ink-muted:       oklch(63% 0.025 250);
  --ink-onbrand:     oklch(99.5% 0.003 250);

  /* Brand */
  --brand-navy:        oklch(31% 0.06 250);
  --brand-navy-deep:   oklch(22% 0.05 250);
  --brand-bronze:      oklch(70% 0.075 75);
  --brand-bronze-deep: oklch(55% 0.07 75);

  /* Semantic */
  --color-focus:   var(--brand-bronze-deep);
  --color-divider: oklch(90% 0.005 250);
}
```

Legacy color names (`--color-navy`, `--color-bronze`, `--color-steel`, etc.) are kept as **aliases** mapped to the new tokens. Existing components that reference `text-navy`, `bg-bronze`, `text-steel`, etc., continue to work without change. New code should reference the new token names.

### 3.2 Typography

Cormorant Garamond (display) + Inter (body), unchanged. The `.eyebrow` utility class replaces the inline `tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs font-bold text-bronze` cluster used 15+ times across the site.

### 3.3 Shadows, radii, motion

Three-level shadow vocabulary (`--shadow-card`, `--shadow-elevated`, `--shadow-overlay`), three-step radius vocabulary (`--radius-sm` 4px, `--radius-card` 12px, `--radius-full`), motion tokens (`--motion-fast/medium/slow`, `--ease-out`).

### 3.4 Reduced motion

Global CSS `@media (prefers-reduced-motion: reduce)` block disables all animations and transitions site-wide. In parallel, `src/lib/motion.ts` exports `useReducedMotionPref()`, `fadeRiseVariants()`, `staggerVariants()`, `hoverLift()`, and `tapPress()` so Framer Motion components gate motion on the preference uniformly.

### 3.5 Removed

- `.shiny-text` (gradient text, banned)
- `.steel-text` (gradient text, banned)
- `.gold-button` (metallic gradient + shimmer, register slip)

All three classes and their keyframes are deleted from `globals.css`. All call sites updated to use the new solid-bronze button treatment.

---

## 4. Homepage section-by-section spec

Final homepage flow (top to bottom):

| # | Section | Status |
|---|---|---|
| 1 | Hero | Shipped Phase 2 (§4.1) |
| 2 | HeroCTA / case-review band | Shipped Phase 3 (§4.2) |
| 3 | TruckAccidentEvaluator | Re-tokenized Phase 3 (§4.3) |
| 4 | ResultsGallery | Shipped Phase 4 (§4.4) |
| 5 | Biography | Shipped Phase 4 (§4.5) |
| 6 | PracticeAreas | Shipped Phase 3 (§4.6) |
| 7 | GoogleReviews | Untouched |
| 8 | Final CTA band (NEW) | Shipped Phase 4 (§4.7) |
| 9 | Footer | Untouched |

The standalone JurisdictionBar section was removed; its content is in the Hero trust strip.

### 4.1 Hero

File: `src/components/sections/hero-section.tsx`. Visible H1, italic-bronze on "We win these cases" (single instance on the page), three-fact subline, two CTAs (modal + click-to-call), inline trust strip with Licensed states / 16 years / no fee / hablamos español, single subtle backplate behind portrait.

### 4.2 HeroCTA / case-review band

File: `src/components/sections/HeroCTA.tsx`. Removed the skewed decorative rectangle and the bronze blur glow. Italic-bronze replaced with weight contrast on "Free." Phone CTA on the left (clean solid bronze circle). Native React form on the right (the 4-field NativeCaseReviewForm).

### 4.3 TruckAccidentEvaluator wrapper

File: `src/app/page.tsx`. Section background `bg-[#F2F4F7]` → `bg-light-grey`. Heading retokenized.

### 4.4 ResultsGallery

File: `src/components/sections/practice-areas/ResultsGallery.tsx`. Was 4 equal-weight cards in an infinite-marquee with italic-bronze on "*Results.*". Replaced with one featured result (full-width navy card, $3.2M Trucking) plus three smaller cards in a row. Marquee removed (it didn't honor reduced-motion). "See all results" link added.

### 4.5 Biography

File: `src/components/sections/Biography.tsx`. Italic-bronze on "Wins." removed. Scrapbook offset on portrait replaced with single subtle backplate. Eyebrow utility class. Functional dark-overlay gradient on portrait kept (contrast, not decoration).

### 4.6 PracticeAreas

File: `src/components/sections/PracticeAreas.tsx`. Old: 8 identical cards in a grid (anti-pattern). New: 2 featured cards (Truck, Car) on top + 6 non-card list rows below. Card count drops 8 → 2. "Slip n' Fall's" → "Slip and Fall". Italic-bronze on "*Expertise.*" removed. Headline: "Truck accidents are what we do." Hover photograph kept on the 2 featured cards, removed from the secondary list.

### 4.7 Final CTA band (NEW)

File: `src/components/sections/FinalCTA.tsx`. Dark navy background, eyebrow "Ready to talk?", headline "Free case review. No fee unless we win.", primary modal CTA + click-to-call, trust line "Available 24/7. Hablamos español." Inserted between GoogleReviews and Footer.

---

## 5. Header changes — SHIPPED IN PHASE 5

File: `src/components/layout/Header.tsx`. Three substantive fixes:

1. `isHeaderVisible` defaults to `true` (was `false`). Fixes the on-load invisibility bug.
2. Auto-hide disabled on the homepage via `usePathname()`. The homepage header stays fixed and visible. On other pages, auto-hide preserved with a 200px threshold and 8px change-margin.
3. `useEffect` dependency array now includes `isLocationsDropdownOpen` (P2 audit fix).

Plus housekeeping: "Slip n' Fall's" → "Slip and Fall" in the SERVICE_AREAS list, unused `isHovered` state removed, mobile menu toggle has real `aria-label` and `aria-expanded`, `focus-visible` rings.

---

## 6. Native form — SHIPPED IN PHASE 3

File: `src/components/ui/NativeCaseReviewForm.tsx`. Visual + structural replacement for the GoHighLevel iframe on the homepage.

**Fields (option A from form-fields decision):** Full Name, Phone, Email, accident description.

**Accessibility:** programmatic `<label>` for every input, `aria-required`, `aria-invalid`, `aria-describedby` for errors, `role="alert"` on per-field error messages, `aria-live="polite"` region for submit-state announcements, focus moves to first invalid field on submit, `autocomplete` and semantic input types (`tel`, `email`).

**Variants:** light (used on HeroCTA band) and dark (used in modal). The `CaseReviewForm` thin wrapper now delegates to this component with the correct variant; the modal renders the dark variant.

**Submit handler:** placeholder. `console.log` and a 600ms simulated delay then success state. Wiring to a backend is a separate engagement.

**Non-homepage pages:** still use the legacy `CRMForm.tsx` iframe (ContactPageContent, ThePath/about, services/ConsultationCTA). When those pages are migrated, delete `CRMForm.tsx` and the iframe goes with it.

---

## 7. Out of scope (explicit, for this engagement)

- CRMForm submit-handler wiring (form is visual + structural only on homepage).
- Spanish locale Header / `/es` page tree.
- Pages other than the homepage.
- Footer.
- Routing / IA / sitemap / schema markup.
- Header location-dropdown asymmetry (El Paso → / vs others → /locations/*).
- The `2xl:max-w-[95vw]` magic value.
- Non-homepage pages' em-dash sweep.

---

## 8. Execution phases — STATUS

### Phase 1 — Tokens & motion ✅ COMPLETE

Files: `src/app/globals.css` (rewrite), `src/components/ui/Button.tsx` (variant cleanup), `src/lib/motion.ts` (NEW), `Header.tsx` (gold-button removal at lines 277, 483), `hero-section.tsx` (gold-button removal at line 107).

Verification: `npm run build` ✅ (after fixing one self-referential `@theme inline` token bug). Banned classes confirmed gone everywhere.

### Phase 2 — Hero rebuild ✅ COMPLETE

File: `src/components/sections/hero-section.tsx` (full rewrite).

Verification: `npm run build` ✅ (after one TS fix on `initial={false}` mixed with object literals).

### Phase 3 — HeroCTA, evaluator surround, PracticeAreas, native form ✅ COMPLETE

Files: `NativeCaseReviewForm.tsx` (NEW), `HeroCTA.tsx` (rewrite), `CaseReviewForm.tsx` (now delegates to native), `PracticeAreas.tsx` (rewrite), `page.tsx` (JurisdictionBar removed, evaluator surround retokenized).

Incident: I deleted `CRMForm.tsx` thinking the homepage was the only usage; three non-homepage files still imported it and the build broke. Recovered by restoring `CRMForm.tsx` byte-identical. Logged as a process lesson. `CRMForm.tsx` remains in place for the non-homepage pages until they're migrated.

Verification: `npm run build` ✅.

### Phase 4 — ResultsGallery, Biography, Final CTA band ✅ COMPLETE

Files: `ResultsGallery.tsx` (rewrite), `Biography.tsx` (rewrite), `FinalCTA.tsx` (NEW), `page.tsx` (FinalCTA inserted).

Verification: `npm run build` ✅.

### Phase 5 — Header pass and copy sweep ✅ COMPLETE

Files: `Header.tsx` (rewrite — visibility logic, dep array fix, Slip and Fall, focus-visible, ARIA), `HeroCTA.tsx` (replaced inline `<img>` with `next/image`).

Em-dash sweep: confirmed no em-dashes in user-visible homepage component copy I authored. Em-dashes remain in `TruckAccidentEvaluator.tsx` option labels (component referenced on the homepage but not in this engagement's rewrite scope) — a decision is pending in §10.

Verification: `npm run build` ✅.

### Phase 6 — Re-audit ⏳ PENDING

Not yet executed. See §9.

---

## 9. Phase 6 plan (next)

**Action:** Run `/impeccable audit` against the rebuilt homepage.

**Targets:**
- Score: 17/20 or higher (baseline was 11/20).
- P0 findings: zero.
- P1 findings on the items addressed in this engagement: ideally zero. Remaining P1s flagged for the next engagement.

**Output:** A new audit report in the repo. The previous PDF (`Carter-Law-Design-Audit.pdf`) stays as the baseline; the new audit can be re-rendered to PDF if desired.

**Open decision before Phase 6 begins:** the `TruckAccidentEvaluator.tsx` em-dashes (in option labels like *"Yes — semi/18-wheeler"* and pricing ranges like *"$500K – $2.5M+"*). They're on the homepage and would count as a copy-rule violation if surfaced in the audit. Two options:

- **A:** Sweep them now (one quick edit). Audit comes back cleaner.
- **B:** Leave for a future engagement. The TruckAccidentEvaluator is a substantial component I haven't rewritten.

User to decide before Phase 6 starts.

---

## 10. Success criteria

At the end of Phase 6:

- The Hero promises one outcome (winning truck accident cases in El Paso), shows the attorney, gives three concrete trust signals, offers two CTAs (book and call). No shimmer. No gradient text. No decorative frames.
- The practice areas read as a hierarchy with truck and car at the top and a tight 6-item list below. Card count drops from 8 to 2.
- Reduced motion is honored everywhere on the homepage.
- The token system covers color, type, shadow, radius, and motion. No raw hex in JSX on the homepage.
- The page reads cleanly on a 375px screen for a one-handed user.
- Re-audit score: 17/20 or higher with zero P0 findings.
- The Header shows on first load and behaves predictably on scroll (homepage: always visible; other pages: standard auto-hide with corrected initial state).
- Native form is in place on the HeroCTA band and inside the ContactModal, with placeholder submit, awaiting backend wiring in a future engagement.

---

## 11. What waits for the next engagement

- CRMForm submit-handler wiring (the placeholder form is design-complete; it just doesn't send leads anywhere yet).
- Spanish locale Header and `/es` page-tree work.
- About, contact, practice-areas/*, locations/*, reviews, claim-review pages.
- Footer.
- Site-wide em-dash sweep on non-homepage pages.
- Header location-dropdown IA fix.
- TruckAccidentEvaluator rewrite (depending on §9 decision).

---

## 12. Process notes

- The dev server runs on `localhost:3000` for visual verification. The user starts/stops it manually.
- The project lives in OneDrive, which has caused intermittent file-read race conditions during dev (Turbopack `UNKNOWN: unknown error, read`) and creates noisy delete/sync notifications when `.next` is rebuilt or cleared. Pausing OneDrive sync during dev work resolves both. Long-term, moving the project out of OneDrive entirely is the cleaner fix.
- Build errors caused by my own edits during the engagement (the self-referential CSS variable in Phase 1, the TypeScript object-literal vs `false` mismatch in Phase 2, the `CRMForm.tsx` deletion in Phase 3) were each diagnosed, fixed, and re-verified before moving forward. None remain as outstanding bugs.

---

*End of plan. Phase 6 begins next, after the §9 decision.*
