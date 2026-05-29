import { LanguageSetter } from "./LanguageSetter";

/**
 * Spanish-locale layout — overrides the root <html lang="en"> for all /es/*
 * routes so screen readers and search engines announce the locale correctly.
 *
 * Next.js' App Router only allows one <html> element (in the root layout),
 * so we mutate the document's lang attribute client-side from a tiny script.
 * This is a SSR-friendly fallback; the lang is also declared in metadata
 * alternates.languages and per-page hrefLang.
 */
export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LanguageSetter lang="es" />
      {children}
    </>
  );
}
