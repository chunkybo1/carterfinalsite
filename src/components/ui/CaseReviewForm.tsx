"use client";

import { NativeCaseReviewForm } from "@/components/ui/NativeCaseReviewForm";

interface CaseReviewFormProps {
  /** When true, render the dark-surface variant (used inside the modal). */
  dark?: boolean;
}

/**
 * CaseReviewForm — backward-compat wrapper that delegates to the new
 * NativeCaseReviewForm. The previous implementation rendered a
 * GoHighLevel iframe; the new implementation is a native React form
 * (visual + structural; submit handler is a placeholder).
 */
export const CaseReviewForm = ({ dark = false }: CaseReviewFormProps) => {
  return (
    <NativeCaseReviewForm
      variant={dark ? "dark" : "light"}
      heading="Free case review"
      subheading="Tell us about your accident. We respond within 1 hour, 24/7."
    />
  );
};
