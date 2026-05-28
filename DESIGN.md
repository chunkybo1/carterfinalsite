# Design

## Theme

Fighter-counselor blend: deep navy and warm metallic bronze on a clean white surface, with Cormorant Garamond serif carrying gravitas and Inter sans carrying clarity. Restrained palette executed with several decorative animation effects (shiny gradient text, gold-button shimmer) that pull toward billboard register and should be audited per case.

Color strategy: **Restrained**. White surface, charcoal text, navy as the secondary/CTA color, bronze as a deliberate accent. The gold metallic CTA treatment briefly pushes into committed territory at decision points.

## Color

Values are migrated to OKLCH for predictability. Current source-of-truth values live as hex in `globals.css` `:root`.

**Surface**
- `background` — `oklch(100% 0 0)` (`#FFFFFF`)
- `light-grey` — `oklch(98.2% 0.003 247)` (`#F8F9FA`) — secondary surface, alt-section background
- Section background in page.tsx uses raw hex `#F2F4F7` — not tokenized, should be added as `--color-fog` or merged with `light-grey`.

**Text**
- `foreground` / `charcoal` — `oklch(20.5% 0 0)` (`#1A1A1A`)
- `dark-charcoal` — `oklch(15% 0 0)` (`#111111`)
- `steel` — `oklch(40% 0.02 250)` (`#4A5568`) — primary brand grey, used for body and supporting copy
- `light-steel` — `oklch(63% 0.025 250)` (`#8B95A5`) — supporting / muted text

**Brand**
- `navy` — `oklch(31% 0.06 250)` (`#1E3A5F`) — secondary brand, primary CTA fill, headline color on light surfaces
- `bronze` — `oklch(70% 0.075 75)` (`#B8956A`) — accent, premium CTA base
- `dark-bronze` — `oklch(55% 0.07 75)` (`#8A6D4B`) — accent shadow / border

**Black**
- `black` — `#000000` is present in tokens but should not be used directly; tint toward navy or charcoal instead.

**Semantic**
No explicit success / warning / danger tokens defined. Forms currently rely on color alone for validation state in places — flag as an accessibility finding.

**Pure whites and blacks**
The palette uses `#FFFFFF` and `#000000` directly. Per the skill's color guidance, neutrals should be tinted toward the brand hue. A future polish pass should shift background to `oklch(99.5% 0.003 250)` and text to `oklch(20.5% 0.005 250)`.

## Typography

**Families**
- `--font-serif` = Cormorant Garamond (`next/font/google`, weights 300–700) — used for headlines via Tailwind `font-serif`
- `--font-sans` = Inter (`next/font/google`, variable weights) — used for body via Tailwind `font-sans` (the default)
- Both are loaded as CSS variables and applied to `<body>` through `cormorant.variable` + `inter.variable`.

**Scale (observed in components, not formally defined)**
- Display / Hero h1: `text-5xl md:text-7xl lg:text-8xl` (48 / 72 / 96 px), `font-bold`, `font-serif`
- Section h2: `text-3xl md:text-4xl lg:text-5xl` (30 / 36 / 48 px), `font-serif font-bold`, `text-navy`
- Lead paragraph: `text-lg`–`text-2xl` (18–24 px), `text-steel`, regular or light weight
- Body: `text-base` / `text-sm` (16 / 14 px), Inter regular
- Caption / micro: `text-xs` (12 px), used in tags and form helpers

The scale is fluid via Tailwind responsive prefixes rather than a formal step-ratio system; effective ratio between adjacent display steps is ~1.5x, which is bolder than a standard 1.25 minor-third. Keep that — it suits the fighter register.

**Weight strategy**
- Cormorant: 400 / 600 / 700 in active use. The 700 + serif at hero scale is the brand's heaviest move.
- Inter: 300 / 400 / 500 / 600 in active use.

**Line length**
Not enforced. Several body blocks use `max-w-2xl` (≈42rem ≈ 65–70ch) which is correct; others span full container width. Consistent application is an audit finding.

## Spacing & Layout

**Base unit**: Tailwind default (4px).

**Common spacing (sampled)**
- Vertical section padding: `py-16` / `py-20` / `py-24` (most-used pair: `py-16` and `py-24`)
- Internal section padding: `py-8` / `py-12`
- Component padding: `px-4` / `px-6`, `py-2` / `py-3` / `py-4`

**Container widths**
- `max-w-4xl mx-auto px-4` for centered text intros
- `max-w-7xl` for full-width section content
- No formal container component; widths set inline per section

**Breakpoints**: Tailwind defaults (sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536).

**Density**: Generous on desktop, becomes tight on mobile in a few sections (notably the practice-areas card grid). The hero is the most expensive viewport on mobile and should be audited for vertical rhythm.

## Elevation

**Shadow scale**: Tailwind defaults, used inconsistently.
- Observed usage: `shadow-md` (28x), `shadow-lg` (32x), `shadow-xl` (12x), `shadow-2xl` (9x), `shadow-sm` (7x), `shadow-inner` (6x)
- No formal scale or rule for which level applies where; cards default to `shadow-lg` and `shadow-md` somewhat interchangeably. Worth tokenizing as `shadow-card` / `shadow-elevated` in a polish pass.

**Borders**
- 1px hairlines used sparingly; most separation comes from background color shifts (white → `#F2F4F7` → light-grey)
- Decorative `border-l` accent stripes are **not** present in current code (good — they're a banned pattern)

**Radius**
- `rounded-full` (56x) for pills, badges, avatars, icon containers
- `rounded-lg` (35x), `rounded-md` (22x), `rounded-xl` (20x), `rounded-2xl` (15x) — used somewhat interchangeably for cards and panels
- The high variance in card radii is an inconsistency; the project should pick `rounded-xl` as the card default.

## Motion

**Library**: framer-motion (^12.23).

**Easings observed**
- `easeOut` (most common)
- `easeInOut` (used in cross-fade transitions, e.g. Hero phrase cycling)
- Custom CSS `cubic-bezier(0.4, 0, 0.2, 1)` on the gold-button hover

**Duration scale**
- 0.5s — cross-section fades (video opacity)
- 0.6s–0.8s — entrance animations
- 2.2s — Hero phrase cycle interval
- 4s — shiny-text and steel-text background-position loops

**What animates**
- Hero headline entrance + phrase cycling (intentional, branded)
- `shiny-text` background-position infinite loop (decorative, gradient text — flagged)
- `gold-button` shimmer on hover (decorative — flagged for reduced-motion)
- `steel-text` background-position infinite loop (decorative, gradient text — flagged)
- Section content fades on scroll in some sections via framer-motion

**Reduced-motion policy**
- **Not currently implemented.** No `prefers-reduced-motion` media query exists in `globals.css`. This is a P0 accessibility finding given the user state defined in PRODUCT.md (injured users on pain medication).

## Components

- **Button** (`src/components/ui/button.tsx`) — variants: `default` (navy gradient), `primary` (same as default — duplicative), `outline`, `ghost`, `premium` (gold metallic with shimmer). Sizes: `default`, `sm`, `lg`. The duplication between `default` and `primary` is a code smell.
- **Hero** (`src/components/sections/Hero.tsx`) — full-viewport `h-screen` background image + autoplaying muted video overlay with `bg-black/40` dim layer; centered serif headline with shiny-text gradient effect cycling between two identical phrases (likely placeholder copy).
- **HeroCTA** — band beneath Hero with navy gradient background, phone CTA + booking CTA, lucide icons.
- **Section** pattern — alt-tone backgrounds (`bg-white` → `bg-[#F2F4F7]` → `bg-white`) with `py-16` to `py-24`, centered title block (`max-w-4xl`), then content.
- **Cards** — used in PracticeAreas, ResultsGallery, GoogleReviews. Radii and shadows inconsistent across instances. Image + icon + heading + paragraph structure repeats — borderline the "identical card grids" anti-pattern in the skill bans; needs structural variation.
- **JurisdictionBar** — TX / AZ / NM coverage strip, likely the most efficient trust-signal element on the page.
- **Biography** — attorney profile section.
- **GoogleReviews** — embedded social proof.
- **SchemaOrg** (`src/components/seo/SchemaOrg.tsx`) — LocalBusinessSchema in the document head; good for SEO.

## Imagery & Iconography

**Iconography**: lucide-react (^0.554). 1.5px stroke weight by default. Used inline in CTAs (Phone, Calendar), in practice-area cards (Truck, Car, Stethoscope, Briefcase, Building, HeartPulse).

**Photography**
- Hero: `/hero.jpg` + `/hero-vid.mp4` autoplay video. The video is unmuted/muted-autoplay and unlabeled — composition and content not verified.
- Practice-area card images at `/icons/*.jpg` — actual photographs used as card thumbnails despite the `/icons/` path naming.
- Lite-youtube-embed (^0.3.4) included as dependency — testimonial or case-result video embeds likely.

**Imagery anti-patterns (from PRODUCT.md)**
- No arms-crossed-in-front-of-bookshelf attorney portraits
- No gavel close-ups, scales of justice, courthouse columns
- No stock-photo "suited handshake"
- The current hero video and image must be audited against this list — not yet verified.

## Anti-patterns

Things this design system explicitly does NOT do, from PRODUCT.md anti-references and observed bans in the impeccable skill:

- **Gradient text as decoration.** The current `shiny-text` and `steel-text` effects in `globals.css` violate this. They appear in the Hero headline. To be addressed in `polish`.
- **Side-stripe borders.** Not currently present. Keep it that way.
- **Hero-metric SaaS template.** Not currently present. Personal-injury results should be shown as case outcomes / settlement figures, not "4.9★ from 200 reviews" hero numerics.
- **Identical card grids.** Currently borderline in PracticeAreas — same-shape cards with icon + title + paragraph repeated. Needs visual hierarchy (one card emphasized, varying sizes, or structural variation).
- **Billboard typographic aggression.** No Trajan, no Times New Roman, no Optima. No all-caps display banners. No exclamation points in headlines.
- **Modal as first thought.** The case evaluator is inline on the homepage, not behind a modal. Keep it that way.
- **Generic trust-blue SaaS palettes.** Navy here is deeper (`oklch(31% 0.06 250)`) and paired with warm bronze — explicitly not the corporate-blue-and-white look.
- **Em dashes.** Site copy should avoid em dashes (per skill copy rules); use commas, colons, or periods. Audit pass should grep for `—` in user-visible strings.
