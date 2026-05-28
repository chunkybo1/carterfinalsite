# Product

## Register

brand

## Users

The primary visitor is someone who was in a truck accident within the last several days. They are searching on a phone, in pain, possibly medicated, possibly with a concussion or other cognitive impairment, and under acute stress. They are not in a comparison-shopping mindset; they are in a "who do I call right now" mindset.

A meaningful secondary visitor is the Spanish-speaking version of the same person, or a family member searching on their behalf. El Paso is a bilingual market and Spanish-speaker capture is a primary business outcome, not a nice-to-have.

The job-to-be-done is binary: feel certain enough about this firm in the first few seconds to book the free case evaluation or call. Everything else is in service of that decision.

## Product Purpose

The Carter Law Firm, P.C. is a personal injury law firm in El Paso, TX, serving Texas, Arizona, and New Mexico, specializing in truck accident cases. The site exists to convert injured victims into represented clients. Primary conversion is the free case evaluator (the truck-accident questionnaire on the homepage). Secondary is the phone call to (915) 621-1818. Tertiary is Spanish-language capture via /es.

Success is measured in qualified leads, not visits, time on site, or content engagement. A 30-second visit that ends in a booked evaluation is a win. A 10-minute visit that ends with the user closing the tab is a loss.

## Brand Personality

Fierce. Boxer / warrior. Winner. Bilingual.

The firm fights and wins. The visitor should feel that someone strong is going to take this off their shoulders. Tone is confident and direct, not flowery. Spanish presence is equal-weight, not an afterthought tucked behind a flag icon.

The register tension to resolve: "fighter" energy and "counselor" energy pull in opposite directions in personal-injury design. This brand sits on the fighter side, but expressed through restrained confidence (a heavyweight champion at a press conference) rather than billboard aggression (a cartoon hammer smashing a truck). The current Cormorant Garamond serif gives counselor weight; the gold metallic CTAs give fighter energy. That blend is intentional and should be preserved, but every element should be auditable against "does this read as a serious winner, or as a desperate billboard?"

## Anti-references

Explicitly NOT this:

- Local El Paso competitor firms (no convergent design with the other lawyers ranking for the same terms)
- Billboard-style PI firms: Jim Adler ("The Texas Hammer"), Cellino Law, Morgan & Morgan. No giant photos of attorneys pointing at the camera, no cartoon mascots, no "For The People"-style scale theatrics, no roadside-billboard typographic loudness
- Stock-photo lawyer imagery: arms-crossed-in-front-of-bookshelf, gavel close-ups, scales of justice, suited handshake, courthouse columns at golden hour
- Generic "trust-blue" SaaS palettes pretending to be a law firm
- Convergent law-firm typography: Trajan, Times New Roman, Optima

## Design Principles

1. **Decision in seconds, not paragraphs.** The injured user cannot read a marketing site. Trust signals (jurisdiction, results, phone, evaluator CTA) must register pre-literacy — through layout, weight, and one or two recognizable shapes — within the first viewport on mobile.

2. **Spanish is a peer, not a translation.** /es should feel native, not like a flag-toggled English page. Copy, imagery selection, and metadata are all bilingual by default. Spanish-speaker capture is a primary outcome.

3. **Fierce, not loud.** Confidence is expressed through restraint and weight, not size and shimmer. A heavyweight at a press conference, not a billboard. When in doubt, remove a gradient, an animation, or an exclamation point before adding one.

4. **Every element justifies the user's pain tax.** A user in physical pain pays a cost to scroll, read, and click. Anything on the page that doesn't directly move them toward booking or calling is taking from a budget that's already overdrawn.

5. **Show wins, don't claim them.** Concrete results (settlement figures, case outcomes, real reviews, jurisdiction coverage) beat adjectives. "No fee unless we win" is a structural promise; "We fight for you" is filler.

## Accessibility & Inclusion

WCAG 2.1 AA across the site. Specific commitments given the user state:

- Body and CTA text must meet AA contrast against actual rendered backgrounds (including any image, video, or gradient overlays in the hero — the current hero composition must be verified, not assumed).
- All interactive elements reachable and operable by keyboard with visible focus rings; tap targets meet the 44×44 pt minimum on mobile.
- Motion: respect `prefers-reduced-motion`. The existing shiny-text and gold-button shimmer effects should gracefully degrade (animation paused, gradient flattened) when the user has reduced-motion enabled.
- Bilingual parity: every page reachable in English must be reachable in Spanish, with `hreflang` and proper `lang` attributes. Screen readers should announce language correctly on /es.
- Forms (evaluator, contact, claim review) must have programmatic labels, error messages associated with their inputs, and not rely on color alone to communicate validation state.
