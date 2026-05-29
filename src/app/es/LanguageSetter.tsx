"use client";

import { useEffect } from "react";

/**
 * Updates document.documentElement.lang so the active locale is announced by
 * assistive tech and recognized by Google. Pairs with the metadata
 * `alternates.languages` map declared per page.
 *
 * Restores the original lang on unmount so navigation back to English routes
 * resets the document language correctly.
 */
export const LanguageSetter = ({ lang }: { lang: string }) => {
  useEffect(() => {
    const html = document.documentElement;
    const previous = html.lang;
    html.lang = lang;
    return () => {
      html.lang = previous;
    };
  }, [lang]);
  return null;
};
