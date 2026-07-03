"use client";

import CRMForm from "@/components/ui/CRMForm";

interface CaseReviewFormProps {
  /** Retained for backward compatibility; the GoHighLevel iframe is variant-agnostic. */
  dark?: boolean;
}

/**
 * CaseReviewForm — thin wrapper around the GoHighLevel iframe embed (CRMForm).
 */
export const CaseReviewForm = ({ dark: _dark = false }: CaseReviewFormProps) => {
  return <CRMForm />;
};
