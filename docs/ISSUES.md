# ISSUES

Running issue queue. Format: title, file path, priority (P0/P1/P2), one-line description. Resolved issues move to the bottom.

**Priority key:**
- **P0** — blocks production. Must fix before ship.
- **P1** — production hygiene. Should fix before ship; ship-blocking if multiple stack up.
- **P2** — nice-to-have / polish / cleanup. Fix when convenient.

---

## Open

### Lint errors (44 errors, 12 warnings)

- **`react/no-unescaped-entities` apostrophes** — many files — P1 — Bulk mechanical fix: replace `'` with `&apos;` or `&rsquo;` in JSX text. Files: `AboutCTA.tsx`, `AboutHero.tsx`, `TheCommunity.tsx`, `TheCourtroomEducation.tsx`, `ThePath.tsx`, `TruckAccidentEvaluator.tsx`.
- **`@typescript-eslint/no-explicit-any`** — `src/app/about/page.tsx` and `src/app/services/page.tsx` (lines 25–30 each) — P1 — Two `any` types in page prop signatures. Replace with proper Next.js page prop types.
- **`react-hooks/set-state-in-effect`** — `src/components/sections/about/AboutHero.tsx:13` — P1 — `setIsMounted(true)` called synchronously inside `useEffect`. Cascading-render risk. Rewrite using `useSyncExternalStore` or initialize state from a function.
- **`@typescript-eslint/ban-ts-comment`** — `src/components/sections/practice-areas/CaseTypesGrid.tsx:34` — P1 — Swap `@ts-ignore` for `@ts-expect-error`. One-line fix.
- **Unused imports / vars** — multiple files — P2 — `Button` unused in `LeadQualifier`, `Container` unused in `CarterApproach`, `answers`/`processingIndex` unused in `LeadQualifier` and `ClaimEvaluationQuiz` and `TruckAccidentEvaluator`. Mechanical cleanup.
- **`HTML5Video.tsx`** — `src/components/ui/HTML5Video.tsx` — P2 — Four unused props/state and one missing dep in `useEffect`. Component should be reviewed against actual usage and trimmed.
- **`NativeCaseReviewForm.tsx`** — `src/components/ui/NativeCaseReviewForm.tsx:143` — P2 — Unused `eslint-disable` directive. Delete the comment.

### Site-wide audit findings

**`/services` — banned identical-card grid.** P1.
- File: `src/components/sections/services/PracticeAreaNavigation.tsx`
- The page renders an 8-card `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` of `PracticeAreaCard` components. This is the exact shape the impeccable framework names as a hard ban. On the practice-areas index, trucking-accident (the brand's specialty) reads as visually equal to slip-and-fall and dog bites.
- **Fix:** 2-column editorial layout. 2-3 lead practice areas (trucking, car, wrongful death) get larger image-led cards. Remaining areas in a quiet text list below.

**`/services` — "Your Battle. Our Expertise." headline pattern.** P1.
- File: `src/components/sections/services/ServicesHero.tsx`
- Two parallel two-word fragments, bronze accent on the second half. Same shape as the banned "X meets Y" rhythm under a period.
- **Fix:** rewrite to a single declarative sentence in the homepage's voice.

**`/services` — CarterApproach: 3-card grid + raw hex + decorative wedge.** P1.
- File: `src/components/sections/services/CarterApproach.tsx`
- Three identical methodology pillar cards. `bg-[#FDFBF8]` raw hex. `clipPath: "polygon(0 100%, 0 0, 45% 0, 35% 100%)"` decorative wedge.
- **Fix:** drop the wedge; render the three pillars as a single long-form editorial column with a 2px bronze rule separating each. Add the cream color to the token system.

**`/contact` — banned 4-card pattern (in disguise).** P1.
- File: `src/components/sections/ContactPageContent.tsx`
- Four bronze-circle-iconed contact rows (Phone / Email / Office / Availability), identical layout. A 4-card lockstep grid masquerading as a contact list. On a contact page, the phone number is the conversion — it should be unmistakably the primary surface.
- **Fix:** lead with the phone block at 2-3× the size, then a compact two-column block for email/address/hours without the icon ritual.

**`/contact` — "What to Expect" bullet pattern.** P2.
- File: `src/components/sections/ContactPageContent.tsx`
- Four parallel marketing bullets with bronze dots. Right information, wrong shape for a user in pain.
- **Fix:** compress to one short paragraph in serif italic.

**`/reviews` — duplicate of ResultsGallery, in a worse format.** P1.
- File: `src/app/reviews/page.tsx` (custom inline 3-col results grid)
- The page renders a custom 3-col `FEATURED_RESULTS` grid with `Challenge:` / `Outcome:` red/green sub-blocks, while `ResultsGallery` (the refined left-aligned featured + 3 secondary layout) already exists. On the page where results matter most, the lesser pattern is used.
- **Fix:** delete the custom grid; use `ResultsGallery` here, possibly extended to show more rows.

**`/reviews` — centered hero with lucide Scale icon.** P2.
- File: `src/app/reviews/page.tsx`
- Centered hero, `<Scale className="w-8 h-8 text-bronze" />` as section decoration, rating badge buried beneath.
- **Fix:** left-align the hero, drop the Scale icon, elevate the rating ("99 five-star reviews") into the H1 area.

**`/reviews` — "Professional Recognition" filler section.** P2.
- File: `src/app/reviews/page.tsx`
- Flexbox of bronze-shield + text pills. No logos, no links, no order.
- **Fix:** either get actual logos/certification marks or remove the section.

**`/claim-review` — centered hero with pulsing-dot eyebrow.** P2.
- File: `src/components/sections/landing/LandingHero.tsx` (used by `/claim-review`)
- Centered headline, centered description, pulsing-dot bronze pill eyebrow. "Click here now" energy contradicts the brand's restrained register.
- **Fix:** match the homepage rhythm (left-aligned eyebrow + headline, no pulsing dot).

**`/claim-review` — "Secret Formula" headline.** P2.
- File: `src/components/sections/landing/LandingHero.tsx`
- The headline implies insurers use a secret formula. They use Colossus and similar adjusting software with documented inputs. Reads as content-mill PI-firm copy.
- **Fix:** "Commercial truck claims are valued by software, not by what they did to you." or similar concrete/provable copy.

**`/claim-review` — `text-white/40` trust micro-signals.** P1.
- File: `src/components/sections/landing/LandingHero.tsx`
- The three "✓ No registration required / 100% confidential / No obligation" indicators are below 4.5:1 contrast (accessibility failure).
- **Fix:** `text-white/70` minimum, and move them above the H1 as an eyebrow row.

**`/truck-accident-lawyer` — banned TrustBar hero-metric strip.** P1.
- File: `src/components/sections/landing/TrustBar.tsx`
- A full-bleed `bg-bronze` strip under the hero with 4 stats in 4 columns. This is the exact shape the framework names as a hard ban ("hero-metric template"). Two of the four are commitments not metrics.
- **Fix:** delete `TrustBar` entirely. The phone CTA in the hero already says "24/7"; the no-fee message belongs in the LeadQualifier; the $2.1M lives in ResultsGallery.

**`/truck-accident-lawyer` — four 3-or-4-card icon grids in a row.** P1.
- Files: `WhyTruckAccidentsAreDifferent.tsx`, `CarterDifference.tsx`, `WhatHappensNext.tsx`, `CaseTypesGrid.tsx`
- Four near-identical card-grid sections in one flow. Textbook "templated SaaS landing" shape.
- **Fix:** keep `WhyTruckAccidentsAreDifferent` (content is specific). Merge `CarterDifference` into MeetAdvocate-style prose. Convert `WhatHappensNext` to an inline 1-2-3 list.

**`/truck-accident-lawyer` — LandingHero CTA contrast flip.** P1.
- File: `src/components/sections/landing/LandingHero.tsx`
- Hero phone CTA is `bg-bronze hover:bg-white text-white hover:text-navy`. On hover, the text color and background color both change, producing a transient bronze-on-bronze or white-on-cream moment that fails contrast.
- **Fix:** `bg-bronze text-navy hover:bg-white text-navy` — text stays navy, only background changes.

**`/truck-accident-lawyer` — TestimonialBlock 200px decorative quote.** P2.
- File: `src/components/sections/landing/TestimonialBlock.tsx`
- `text-[200px]` ghosted opening quote mark in `text-navy/5`. Decorative ornament the brand doesn't need.
- **Fix:** delete the decorative quote; let the blockquote stand with a bronze rule above it.

**`/es/abogado-de-accidentes` — Spanish is a translation, not a peer surface.** P1.
- File: `src/app/es/abogado-de-accidentes/page.tsx`
- The Spanish landing reuses English-built components. `ResultsGallery` renders "Verdicts & Settlements", "Wins on the record.", "$50M+ recovered" in English on the Spanish page. Header navigation is in English. `MeetAdvocate` shows the English logo lockup. PRODUCT.md §2 principle #2 explicitly says "Spanish is a peer, not a translation."
- **Fix:** `ResultsGallery` and `MeetAdvocate` need a `locale` prop and Spanish copy strings; Header needs an `/es` nav variant.

**`/es/abogado-de-accidentes` — autoplay English hero video.** P1.
- File: `src/components/sections/practice-areas/PracticeAreaHero.tsx`
- HTML5Video src is hardcoded to `/videos/hero-video.mp4`. The Spanish page plays English-authored video.
- **Fix:** drop the video on the Spanish landing; use a still portrait of Thomas Carter instead. Quieter, faster LCP, no autoplay problem.

**`/es/abogado-de-accidentes` — SEO-string headline.** P2.
- File: `src/app/es/abogado-de-accidentes/page.tsx`
- "Abogado de Accidentes en El Paso — Consulta Gratis" reads like a SERP string. (Also contains an em-dash, banned per copy rules.)
- **Fix:** human-voice headline ("Después de un accidente, no se enfrente solo a la aseguradora."); SEO string lives in the page title only.

**`/locations/dallas` and `/locations/phoenix` — truck video on location heroes.** P1.
- File: `src/components/sections/practice-areas/PracticeAreaHero.tsx`
- `/videos/hero-video.mp4` plays on both location pages. Topical mismatch.
- **Fix:** make video a prop, default to a still image, opt in for the LP and trucking-accidents page only.

**`/locations/dallas` and `/locations/phoenix` — no local trust artifacts.** P1.
- Files: both `page.tsx` files
- No Dallas/Phoenix address, no local phone number, no court admissions, no local case result, no local testimonial. Defensive first FAQ ("Why hire an El Paso firm for a Dallas case?") surfaces credibility gap before the user identifies it.
- **Fix:** at minimum, one of: (a) named local co-counsel, (b) local-specific case result, (c) clear travel/co-counsel framing in the hero, not buried in an FAQ.

**Practice-area pages: every one is the same template.** P1.
- All 8 practice-area pages render `PracticeAreaHero → ResultsGallery → MeetAdvocate → PracticeAreaOverview → ProcessMap → CaseTypesGrid → StrategicFAQ → PracticeAreaCTA`. Same hero video, same MeetAdvocate, same ResultsGallery, same ProcessMap, same CaseTypesGrid. A user clicking through three practice areas sees the same page three times.
- **Fix:** at minimum, give each practice area one bespoke section above the template. Trucking-accidents should pull in `WhyTruckAccidentsAreDifferent` from the LP and add a trucking-only "What we investigate first" section (72-hour ELD destruction, broker liability, MCS-90). Medical-malpractice needs an expert-witness section. Wrongful-death needs a quieter image-led narrative (and definitely no autoplay truck video).

**Practice-area pages: `dangerouslySetInnerHTML` on overview field.** P1.
- File: `src/components/sections/practice-areas/PracticeAreaOverview.tsx`
- `<div ... dangerouslySetInnerHTML={{ __html: overview }} />`. XSS surface if the data layer ever takes external input.
- **Fix:** sanitize on the way in, or render the overview with MDX/rich-text components.

**Practice-area pages: PracticeAreaCTA headlines are interchangeable.** P2.
- File: data layer feeding `PracticeAreaCTA.tsx`
- 5 of 8 CTA headlines could be swapped between pages without anyone noticing ("Ready to Secure Your Recovery?", "Your Recovery Starts With a Single Call.", etc.).
- **Fix:** rewrite each to name a practice-area-specific commitment.

**Practice-area pages: MeetAdvocate "X. Y." two-fragment rhythm.** P2.
- File: data layer feeding `MeetAdvocate.tsx`
- Several headlines use the "Compassionate Care. Fierce Representation." / "Compassionate Support. Fierce Advocacy." cadence (banned shape).
- **Fix:** rewrite each as a single specific sentence about that practice area's work.

**`/about` — pillar panels carry too many decorative systems.** P1.
- File: `src/components/sections/about/ThePhilosophy.tsx` (or whichever renders the three pillars)
- Each pillar layers: `bg-navy/70 backdrop-blur-md` + bronze left-accent bar + inner bronze gradient glow + giant ghosted serial number + corner accents in two corners + stagger motion. Six decorative systems competing.
- **Fix:** keep the surface and the big numeral. Drop the left bar, the inner glow, the corner accents. Reduce motion to one fade-up on the whole card.

**`/about` — "Advocacy Runs in the Family" headline is four lines.** P2.
- File: `src/components/sections/about/AboutHero.tsx`
- Two `<p>` blocks at `text-7xl` create a 4-line wall.
- **Fix:** name as H1, demote the tagline to a `text-2xl` italic sub-deck.

**`/about` → CTA section glues two registers.** P2.
- File: `src/components/sections/about/AboutCTA.tsx`
- Editorial panels above, then a navy-gradient + grid-texture + double-hairlines + corner-bracketed form CTA below.
- **Fix:** CTA should inherit panel rhythm. One panel-style block with the form and a single phone CTA.

### File hygiene

- **`package.json` name is `champlawsite`** — `package.json` — P2 — Leftover from a prior project. Rename to `carterfinalsite` or `carter-law-firm` when convenient. Cosmetic.
- **`src/components/ui/CRMForm(1).tsx`** — P2 — Windows-style duplicate of `CRMForm.tsx`. Verify nothing imports it, then delete.
- **`src/components/sections/JurisdictionBar.tsx`** — P2 — Folded into the Hero per REDESIGN-PLAN §4 Q4. File is still on disk but no longer rendered. Delete.
- **`src/components/sections/Hero.tsx`** — P2 — Thin pass-through wrapper that just renders `HeroSection`. Inline or delete.

### Out-of-scope (from REDESIGN-PLAN §7) — reconsider for production-ready

- **CRMForm submit-handler wiring** — `src/components/ui/NativeCaseReviewForm.tsx` — P1 — Form is visual + structural; submit is a `console.log` + 600ms simulated delay. Production needs a real backend (GoHighLevel webhook, custom endpoint, or third-party form service).
- **Spanish locale `/es` Header and page tree** — `src/components/layout/Header.tsx`, `src/app/es/*` — P1 — Spanish is a primary business outcome per PRODUCT.md, not a nice-to-have.
- **Footer** — `src/components/layout/Footer.tsx` — P1 — Not yet redesigned. Carries phone, address, hours, jurisdictions, sitemap links. High visibility.
- **Header location-dropdown asymmetry** — `src/components/layout/Header.tsx` — P2 — El Paso → `/` while Dallas/Phoenix → `/locations/*`. Asymmetric IA.
- **`2xl:max-w-[95vw]` magic value** — `src/components/layout/Header.tsx` — P2 — Move into token system or document why it's an exception.
- **Site-wide em-dash sweep on non-homepage pages** — P2 — Audit found em-dashes still on `/es` headline ("— Consulta Gratis") and likely elsewhere. Project-wide grep needed.

---

## Resolved

### TruckAccidentEvaluator em-dashes and en-dashes

- File: `src/components/sections/landing/TruckAccidentEvaluator.tsx`
- Resolved this session.
- Em-dashes (`—`) in option labels and en-dashes (`–`) in value-range strings replaced. Value ranges now use "to" ("$500K to $2.5M+", etc.).
- Recovered from a one-character spacing bug introduced by an aggressive `replace_all`.

### Homepage GoogleReviews structural anti-patterns

- File: `src/components/sections/GoogleReviews.tsx`
- Resolved this session via full rewrite.
- Removed: bronze-colored standalone word in heading, identical 3-card grid, raw `tracking-[0.3em]` clusters, decorative giant Google G SVG, mixed radii.
- Replaced with: featured navy testimonial + 2 compact secondaries, `.eyebrow` utility throughout, consistent `var(--radius-card)`.

### Hero phrase cycler

- File: `src/components/sections/hero-section.tsx`
- Resolved this session.
- Removed: phrase cycler that swapped between two identical strings.
- Replaced with: static italic-bronze H1 honoring USER-NEEDED Q1.

### Hero portrait backplate

- File: `src/components/sections/hero-section.tsx`
- Resolved this session.
- Removed: backdrop-blur, translate offset.
- Replaced with: solid `bg-bronze/15` backplate, no offset, no rotation.

### Hero redundant trust strip

- File: `src/components/sections/hero-section.tsx`
- Resolved this session.
- Removed: 4-item trust strip ("Licensed in TX, AZ & NM • 16 years of trial experience • No fee unless we win • Hablamos español") that duplicated the subline.
- Replaced with: subline alone carries the three facts; Hablamos español moved to FinalCTA trust line.

### Section-padding monotony

- Files: across the homepage
- Resolved this session.
- Three-step padding scale introduced (primary py-32/40, connector py-20/28, wrapper py-16/20).
