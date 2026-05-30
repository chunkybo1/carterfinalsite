# carterfinalsite — Website Repository

This folder is the **source repository for the Carter Marketing Solutions website**. It is NOT a client folder and NOT a marketing-vault deliverable folder. The Obsidian / marketing-vault conventions defined in the parent `Marketing/CLAUDE.md` (and any placeholder `Untitled/CLAUDE.md` above this folder) do NOT apply here.

## Override: ignore parent vault rules inside this folder

When working inside `carterfinalsite/` (or any subdirectory), disregard the following from any parent `CLAUDE.md`:

- The framing that the working directory is an Obsidian vault for a marketing agency, or that this folder is a "client."
- The worklog / Stop-hook session logging protocol and the tag taxonomy (`#client/`, `#type/`, `#status/`, `#project/`).
- The new-client scaffolding procedure and the `market-*` skill pipeline.
- The expectation of `readme.md` / `WORKLOG.md` / `Deliverables/` / `Meetings/` / `Projects/` folders.
- The SCREAMING-KEBAB-CASE deliverable naming rule.
- Any `client-context` frontmatter or `#client/` tags inherited from a parent CLAUDE.md.

This folder lives inside the vault for storage convenience only. It is a self-contained **website codebase** and should be treated as one.

## What this project actually is

- Website for **Carter Marketing Solutions**.
- **Stack:** Next.js 16 (App Router) with Turbopack, React 19, TypeScript 5, Tailwind CSS v4 (via `@tailwindcss/postcss`), Framer Motion, lucide-react, ESLint 9.
- **Layout:** `src/` for application code, `public/` for static assets, standard Next.js config at the root (`next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`).
- **Scripts:** `npm run dev`, `npm run build`, `npm start`, `npm run lint`.
- Note: `package.json` currently names the package `champlawsite` — likely a leftover from a previous project. Rename when convenient; it doesn't affect routing or deployment.
- This is the deployable git repository for the live site.

## Working conventions

- Treat tasks here as **frontend / Next.js development work**, not marketing deliverable production.
- Appropriate skills: `/impeccable` and its sub-commands (`craft`, `shape`, `audit`, `polish`, `typeset`, `layout`, `animate`, etc.), plus `/run`, `/verify`, `/review`, `/security-review`, `/init`. The `market-*` skills are NOT appropriate here.
- File naming follows Next.js / web conventions: lowercase, hyphenated, `.tsx` / `.ts` / `.css`. Do NOT apply SCREAMING-KEBAB-CASE inside the codebase.
- The existing top-level markdown files in this repo (`README.md`, `PERFORMANCE_AUDIT_REPORT.md`, `PERFORMANCE_FIXES_SUMMARY.md`, `PLACEHOLDERS_AND_COPY_NEEDED.md`, `SCROLL_LAG_DIAGNOSIS.md`, `VIDEO_SETUP.md`) are project documentation, not vault deliverables. Leave their naming as-is.
- No worklog entries, no `#client/` tags, no auto-generated session logs for work inside this folder.
- Do not create vault-style scaffolding (Projects/, Deliverables/, Meetings/, WORKLOG.md) inside this repo.
- Verify changes with `npm run build` and `npm run lint`.

## Precedence

If a parent `CLAUDE.md` instruction conflicts with anything in this file, **this file wins** for any work inside `carterfinalsite/` and its subdirectories.
