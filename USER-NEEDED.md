# Questions I Need You To Answer

Before I can write `REDESIGN-PLAN.md` and start the homepage redesign, I need your call on the questions below. Each question lists what I would default to if you simply said "just pick" — so if a default looks right, you can just write "default" as the answer. Where you want something different, tell me and I'll use that instead.

Answer in this file, in any format (inline below each question, a separate ANSWERS section at the bottom, written notes, whatever's easiest). Once you've answered, tell me you're done and I'll read the file and proceed.

---

## Q1. Hero headline copy

The current Hero headline is *Truck Accident? We're Here to Help.* The audit flagged it as templated copy — passive, generic, and the italic-bronze treatment on *We're Here to Help* is repeated across the page enough times to feel like a tic rather than a brand move.

I want to replace it with something concrete, present-tense, and outcome-oriented. Three options:

- **A (default):** *El Paso's truck accident lawyer. We win these cases.* — Italic-bronze emphasis lands on *We win these cases.* Strong fighter register, names the city, names the practice, ends on the outcome.
- **B:** *We win truck accident cases in El Paso.* — Drops the italic-bronze from the Hero entirely; saves it for a later moment on the page. Quieter, more direct.
- **C:** Something you write. The headline is the single most important sentence on the page; if you've heard Thomas Carter say a line that captures the firm better than anything I'd write, use his words.

**Default:** A

**Your answer:** A

---

## Q2. Italic-bronze emphasis — one placement on the page

The Cormorant-italic-in-bronze emphasis device is genuinely strong, but the current page uses it five times and it loses impact each time. The new rule is: it appears **once** on the homepage. Which placement?

- **A (default):** Hero only. The strongest position on the page.
- **B:** PracticeAreas section only — the brand position lives there (*Truck accidents are what we do.*) and the italic could land that line harder.
- **C:** Both — accept the dilution. Not recommended, but a defensible call if you feel the brand depends on it.

**Default:** A

**Your answer:** A

---

## Q3. Final CTA band background

The new homepage adds a closing CTA band at the bottom of the page (after the reviews, before the footer) that restates the Hero's offer for a visitor who scrolled through everything without converting. What background?

- **A (default):** Dark navy (`--brand-navy`). High contrast moment at page bottom, strong close, white text on dark surface.
- **B:** Light fog (`--surface-fog`). Reserves the dark navy for the Hero only; the page reads as light-throughout with one anchor at top.

**Default:** A

**Your answer:** A

---

## Q4. JurisdictionBar — keep as a section, or fold into Hero trust strip

The JurisdictionBar (TX · AZ · NM coverage) is the single most efficient trust-signal element on the homepage. Current placement: its own section, mid-page. The plan considered folding its information into a trust strip directly under the Hero CTAs, where it does more work for a crisis-stage visitor.

- **A (default):** Fold into the Hero. Trust signals appear in the first viewport on mobile. Standalone section removed.
- **B:** Keep as a standalone section, mid-page, as it is now. Visual rhythm of the page depends on it.

**Default:** A

**Your answer:** A

---

## Q5. PracticeAreas hover background photograph

The practice-area cards currently reveal a 3%-opacity background photograph on hover. The new structure is two featured cards (Truck Accidents, Car Accidents) plus a compact list of six others.

- **A (default):** Keep the hover photograph on the two featured cards; drop it from the secondary list.
- **B:** Remove entirely. It's borderline decorative and the brand register pushes against decoration.
- **C:** Keep on all of them. Don't change the current behavior beyond the structural restructure.

**Default:** A

**Your answer:** A, but remember that having a lot of cards is a strong tell of ai slop. while we do want the clarity that cards provide, we should not have too many of them

---

## Q6. Header auto-hide on the homepage

The Header currently hides itself when the user scrolls down and reappears when they scroll up. On a long content page this is fine; on the short homepage it just feels twitchy, and it hides the phone CTA during the scroll-down moment — exactly when a crisis-stage visitor might want the phone number visible.

- **A (default):** Disable auto-hide on the homepage. Header stays fixed and visible.
- **B:** Keep auto-hide, but render a slim sticky strip with just the phone number when the main header is hidden. (More engineering work, but preserves the cleaner aesthetic while keeping the phone reachable.)
- **C:** Keep current behavior. The audit flagged it but it's a P3 and you don't care to change it.

**Default:** A

**Your answer:** A, currently the header does not display when the site is first loaded, and has trouble recognizing when to show up. 

---

## Q7. The Hero portrait

Currently a portrait of Thomas Carter sits on the right side of the Hero, wrapped in two stacked rotated decorative frames (a light-grey card rotated -3 degrees behind, a bronze-border ring rotated +3 degrees in front). The audit called this the scrapbook pattern and noted it pulls the register toward consumer-warm and away from fierce.

- **A (default):** Single backplate, no rotation, no double-frame. The portrait sits on a simple subtle backplate.
- **B:** No backplate at all. The portrait sits unframed on the Hero's dim background overlay.
- **C:** Keep the current rotated double-frame.

**Default:** A

**Your answer:** A

---

## Q8. Hero secondary CTA

The Hero currently has two CTAs: "Free Case Review" (primary, opens modal) and "Meet Thomas Carter" (secondary, scrolls down to the Biography section). The audit didn't flag this directly, but the plan recommended swapping the secondary for a click-to-call.

- **A (default):** Replace the secondary CTA with **Call (915) 621-1818**, click-to-call, outline-white style. Reasoning: a crisis-stage visitor on a phone wants the phone number, not a biographical scroll. The Biography section still exists below; it just doesn't compete with the phone CTA in the first viewport.
- **B:** Keep "Meet Thomas Carter" as the secondary. Argument: building familiarity with the attorney is the trust signal, and the phone number is already visible in the Header.

**Default:** A

**Your answer:** A, but modify the first CTA instead. We want users to be able to use the Free Case Review to not only get in contact in urgent situations, but also have the option to get a free case review. Have the first CTA section cater to both needs.

---

## Q9. Hero subline copy rewrite

The current Hero subline is: *Millions Recovered for the Injured. We don't just take cases—we win them. Thomas Carter provides elite trial advocacy for the injured in El Paso and across Texas.*

Problems flagged by the audit:
- *"Millions Recovered"* is a claim, not a shown win — and there's a ResultsGallery below that does the showing.
- *"We don't just take cases—we win them"* is the em-dash and the "not just X, we Y" pattern in one phrase. Both are well-known LLM rhythms.
- *"elite trial advocacy"* is filler.

The new subline should be three concrete facts.

- **A (default):** *16 years in El Paso courtrooms. Licensed in Texas, Arizona, and New Mexico. No fee unless we win.*
- **B:** Same as A but with one of the three facts swapped — if you have a specific case figure (e.g., "$8 million recovered in 2024") that the firm is permitted to advertise, surface that instead of one of the lines in A.
- **C:** Your wording.

**Default:** A

**Your answer:** A

---

## Q10. "Slip n' Fall's" — confirm the correction

The PracticeAreas section currently labels the slip-and-fall practice as **Slip n' Fall's**. The apostrophe-S possessive on a plural is incorrect. The audit flagged it. I want to rename to **Slip and Fall** (clean, formal, matches the rest of the practice-area names).

The URL `/practice-areas/slip-and-fall/` already uses the clean form, so no routing change is needed.

Confirm one:

- **A (default):** Rename label to **Slip and Fall**.
- **B:** Keep as-is. The firm prefers the colloquial label.

**Default:** A

**Your answer:** A

---

## Q11. Phase 1 confirmation

Phase 1 is the foundation pass: rewrite `globals.css` with the new token system (color, type, shadow, radius, motion), add the `prefers-reduced-motion` block, add `src/lib/motion.ts` with a `useReducedMotion` wrapper, remove the three banned CSS classes (`.shiny-text`, `.steel-text`, `.gold-button`), and update `Button.tsx` to remove gold-button references and adopt the new tokens.

This phase touches `globals.css`, `Button.tsx`, and creates `src/lib/motion.ts`. It also requires updating the three files that currently reference `gold-button` as a className (Header.tsx lines 277 and 483, hero-section.tsx line 107) — those references would break otherwise. Phase 1 replaces those className usages with the new solid-bronze treatment so the site still builds.

Confirm one:

- **A (default):** Yes, run Phase 1 as scoped. Stop after Phase 1, run `npm run build` and `npm run lint`, report results, wait for approval before Phase 2.
- **B:** Adjust scope — let me know what you'd add or remove.
- **C:** Don't run Phase 1 yet; we have more to discuss first.

**Default:** A

**Your answer:** A

---

### Additional requests

When adressing the redesign of the CRMForm, simply redesign a native form, and functionality for sending form requests will be added later.

Main focus should be design, functionality will be added later.

After you answer, tell me you're done. I'll read this file, lock in your answers, write `REDESIGN-PLAN.md`, and start Phase 1.
