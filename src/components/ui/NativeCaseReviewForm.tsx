"use client";

import React, { useState } from "react";
import { Phone, Mail, User as UserIcon, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { useReducedMotionPref } from "@/lib/motion";

/**
 * NativeCaseReviewForm — visual + structural lead-capture form.
 *
 * Per REDESIGN-PLAN.md §4.2 + Phase 3 scope expansion: this component replaces
 * the GoHighLevel iframe (`CRMForm`) on the homepage with a native React
 * form. The submit handler is a placeholder — wiring is a separate engagement.
 *
 * Fields (option A from form-fields decision):
 *   1. Full name
 *   2. Phone
 *   3. Email
 *   4. Brief description of accident
 *
 * Accessibility:
 *   • Every input has a programmatic <label>.
 *   • Required fields are marked visually and via aria-required.
 *   • Error messages are tied to inputs via aria-describedby.
 *   • Submit success/failure is announced via an aria-live region.
 *   • Focus moves to the first invalid field on validation failure.
 *
 * Tokens used: --brand-bronze, --brand-bronze-deep, --brand-navy,
 * --ink-charcoal, --ink-steel, --color-divider, --shadow-card, --radius-card.
 */

type FormState = "idle" | "submitting" | "success" | "error";

interface FormFields {
  name: string;
  phone: string;
  email: string;
  description: string;
}

interface FieldErrors {
  name?: string;
  phone?: string;
  email?: string;
  description?: string;
}

interface NativeCaseReviewFormProps {
  /** Visual variant — "light" surface (default) or "dark" surface (for navy bands). */
  variant?: "light" | "dark";
  /** Heading shown above the form. Pass `null` to hide. */
  heading?: string | null;
  /** Subheading shown below the heading. Pass `null` to hide. */
  subheading?: string | null;
}

export const NativeCaseReviewForm = ({
  variant = "light",
  heading = "Free Case Review",
  subheading = "Tell us about your accident. We respond within 1 hour, 24/7.",
}: NativeCaseReviewFormProps) => {
  const reducedMotion = useReducedMotionPref();

  const [fields, setFields] = useState<FormFields>({
    name: "",
    phone: "",
    email: "",
    description: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [state, setState] = useState<FormState>("idle");

  const isDark = variant === "dark";

  // Validate one field. Returns an error string, or undefined if valid.
  const validateField = (key: keyof FormFields, value: string): string | undefined => {
    const trimmed = value.trim();
    if (key === "name") {
      if (!trimmed) return "Please enter your name.";
      if (trimmed.length < 2) return "Name is too short.";
      return undefined;
    }
    if (key === "phone") {
      if (!trimmed) return "Please enter a phone number.";
      const digits = trimmed.replace(/\D/g, "");
      if (digits.length < 10) return "Phone number must be at least 10 digits.";
      return undefined;
    }
    if (key === "email") {
      if (!trimmed) return "Please enter your email.";
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
      if (!emailOk) return "That doesn't look like a valid email.";
      return undefined;
    }
    if (key === "description") {
      if (!trimmed) return "Please briefly describe what happened.";
      if (trimmed.length < 10) return "A few more words help us help you.";
      return undefined;
    }
    return undefined;
  };

  const handleChange = (key: keyof FormFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    // Clear the error for this field on edit; re-validation happens on blur and submit.
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const handleBlur = (key: keyof FormFields) => {
    const err = validateField(key, fields[key]);
    setErrors((prev) => ({ ...prev, [key]: err }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const next: FieldErrors = {};
    (Object.keys(fields) as (keyof FormFields)[]).forEach((k) => {
      const err = validateField(k, fields[k]);
      if (err) next[k] = err;
    });
    setErrors(next);

    if (Object.keys(next).length > 0) {
      // Move focus to the first invalid field.
      const firstInvalid = (Object.keys(fields) as (keyof FormFields)[]).find(
        (k) => next[k]
      );
      if (firstInvalid) {
        const el = document.getElementById(`ncrf-${firstInvalid}`);
        if (el) (el as HTMLInputElement | HTMLTextAreaElement).focus();
      }
      return;
    }

    // Submit (placeholder — wiring lives in a later engagement)
    setState("submitting");
    try {
      // eslint-disable-next-line no-console
      console.log("[NativeCaseReviewForm] submit (placeholder)", fields);
      // Simulate a network round-trip so loading state is visible during testing.
      await new Promise((resolve) => setTimeout(resolve, 600));
      setState("success");
      setFields({ name: "", phone: "", email: "", description: "" });
    } catch {
      setState("error");
    }
  };

  // ----- Style helpers -----
  const labelClass = isDark
    ? "block text-sm font-sans font-medium text-white/85 mb-2"
    : "block text-sm font-sans font-medium text-charcoal mb-2";

  const inputBase =
    "block w-full font-sans text-base rounded-sm transition-colors duration-200 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:cursor-not-allowed";

  const inputClass = (hasError: boolean) =>
    `${inputBase} ${
      isDark
        ? `bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-offset-navy ${
            hasError ? "border border-[oklch(60%_0.2_25)]" : "border border-white/20"
          }`
        : `bg-white text-charcoal placeholder:text-light-steel focus-visible:ring-offset-white ${
            hasError
              ? "border border-[oklch(50%_0.18_25)]"
              : "border border-[var(--color-divider)]"
          }`
    } px-4 py-3`;

  const errorTextClass = isDark
    ? "mt-2 text-sm font-sans text-[oklch(78%_0.15_25)]"
    : "mt-2 text-sm font-sans text-[oklch(45%_0.18_25)]";

  const renderInputIcon = (Icon: typeof UserIcon) => (
    <Icon
      className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${
        isDark ? "text-white/40" : "text-light-steel"
      } pointer-events-none`}
      aria-hidden="true"
    />
  );

  // ----- Success state -----
  if (state === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`${
          isDark
            ? "bg-white/5 border border-white/10"
            : "bg-white border border-[var(--color-divider)]"
        } rounded-[12px] p-8 text-center`}
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <h3
          className={`text-2xl font-serif font-bold mb-3 ${
            isDark ? "text-white" : "text-navy"
          }`}
        >
          Thank you. We&rsquo;ve got your message.
        </h3>
        <p className={isDark ? "text-white/80" : "text-steel"}>
          A member of our team will be in touch within the hour. If your situation is urgent, call <a href="tel:9156211818" className="underline hover:text-bronze">(915) 621-1818</a>.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className={`mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${
            isDark ? "text-bronze hover:text-white" : "text-bronze hover:text-navy"
          }`}
        >
          Send another message
          <ArrowRight className="h-3 w-3" aria-hidden="true" />
        </button>
      </div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      initial={reducedMotion ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className={`${
        isDark
          ? "bg-white/5 border border-white/10"
          : "bg-white border border-[var(--color-divider)]"
      } rounded-[12px] p-8 md:p-10`}
      style={{ boxShadow: "var(--shadow-card)" }}
      aria-label="Free case review form"
    >
      {heading && (
        <h3
          className={`text-2xl md:text-3xl font-serif font-bold mb-2 text-center ${
            isDark ? "text-white" : "text-navy"
          }`}
        >
          {heading}
        </h3>
      )}
      {subheading && (
        <p
          className={`text-sm md:text-base text-center mb-8 ${
            isDark ? "text-white/75" : "text-steel"
          }`}
        >
          {subheading}
        </p>
      )}

      <div className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="ncrf-name" className={labelClass}>
            Full name <span className="text-bronze" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            {renderInputIcon(UserIcon)}
            <input
              id="ncrf-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "ncrf-name-error" : undefined}
              value={fields.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              disabled={state === "submitting"}
              placeholder="Your full name"
              className={`${inputClass(Boolean(errors.name))} pl-10`}
            />
          </div>
          {errors.name && (
            <p id="ncrf-name-error" className={errorTextClass} role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="ncrf-phone" className={labelClass}>
            Phone <span className="text-bronze" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            {renderInputIcon(Phone)}
            <input
              id="ncrf-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "ncrf-phone-error" : undefined}
              value={fields.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              onBlur={() => handleBlur("phone")}
              disabled={state === "submitting"}
              placeholder="(915) 555-0123"
              inputMode="tel"
              className={`${inputClass(Boolean(errors.phone))} pl-10`}
            />
          </div>
          {errors.phone && (
            <p id="ncrf-phone-error" className={errorTextClass} role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="ncrf-email" className={labelClass}>
            Email <span className="text-bronze" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            {renderInputIcon(Mail)}
            <input
              id="ncrf-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "ncrf-email-error" : undefined}
              value={fields.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              disabled={state === "submitting"}
              placeholder="you@example.com"
              inputMode="email"
              className={`${inputClass(Boolean(errors.email))} pl-10`}
            />
          </div>
          {errors.email && (
            <p id="ncrf-email-error" className={errorTextClass} role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="ncrf-description" className={labelClass}>
            What happened? <span className="text-bronze" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <MessageSquare
              className={`absolute left-3 top-3 h-4 w-4 ${
                isDark ? "text-white/40" : "text-light-steel"
              } pointer-events-none`}
              aria-hidden="true"
            />
            <textarea
              id="ncrf-description"
              name="description"
              required
              aria-required="true"
              aria-invalid={Boolean(errors.description)}
              aria-describedby={errors.description ? "ncrf-description-error" : undefined}
              value={fields.description}
              onChange={(e) => handleChange("description", e.target.value)}
              onBlur={() => handleBlur("description")}
              disabled={state === "submitting"}
              placeholder="A few sentences about your accident."
              rows={4}
              className={`${inputClass(Boolean(errors.description))} pl-10 resize-none`}
            />
          </div>
          {errors.description && (
            <p id="ncrf-description-error" className={errorTextClass} role="alert">
              {errors.description}
            </p>
          )}
        </div>
      </div>

      {/* Submit */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={state === "submitting"}
          className={`w-full inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-sans font-bold uppercase tracking-wider rounded-sm bg-bronze text-white border border-dark-bronze hover:bg-dark-bronze active:bg-dark-bronze transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 ${
            isDark ? "focus-visible:ring-offset-navy" : "focus-visible:ring-offset-white"
          } disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          {state === "submitting" ? "Sending..." : "Get my free case review"}
        </button>
      </div>

      {/* Helper microcopy */}
      <p
        className={`mt-4 text-xs font-sans text-center ${
          isDark ? "text-white/55" : "text-light-steel"
        }`}
      >
        We respond within 1 hour, 24/7. No fee unless we win.
      </p>

      {/* Live region for state announcements (errors handled per-field via role=alert) */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {state === "submitting" && "Sending your message."}
        {state === "error" && "Something went wrong. Please try again."}
      </div>
    </motion.form>
  );
};
