"use client";

import React, { useEffect, useState } from "react";
import { Phone, MessageSquare } from "lucide-react";
import { useModal } from "@/context/ModalContext";

/**
 * MobileStickyCTA — bottom-fixed phone + case-review strip on mobile.
 *
 * Crisis-stage users searching on a phone need the primary action one tap
 * away at all times. This bar is:
 *   - Mobile-only (md:hidden)
 *   - Hidden while the contact modal is open to avoid double-CTA noise
 *   - Hidden until the user scrolls past the hero (~480px) so it doesn't
 *     compete with the in-hero CTAs on first paint
 *   - Two equal-width actions: phone call (primary) and free case review (secondary)
 */
export const MobileStickyCTA = () => {
  const { isModalOpen, openModal } = useModal();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const SHOW_AFTER_PX = 480;
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isModalOpen) return null;

  return (
    <div
      role="region"
      aria-label="Quick contact"
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 pointer-events-none transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div
        className="pointer-events-auto bg-navy text-white border-t border-bronze/40 shadow-[0_-4px_18px_rgba(0,0,0,0.18)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="grid grid-cols-2">
          <a
            href="tel:9156211818"
            className="flex items-center justify-center gap-2 px-4 py-3.5 text-[13px] font-sans font-bold uppercase tracking-[0.18em] bg-bronze text-brand-navy-deep active:bg-dark-bronze focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            aria-label="Call Carter Law at (915) 621-1818, available 24/7"
            tabIndex={visible ? 0 : -1}
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Call 24/7</span>
          </a>
          <button
            type="button"
            onClick={openModal}
            className="flex items-center justify-center gap-2 px-4 py-3.5 text-[13px] font-sans font-bold uppercase tracking-[0.18em] text-white active:text-bronze focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            aria-label="Open free case review form"
            tabIndex={visible ? 0 : -1}
          >
            <MessageSquare className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Free Review</span>
          </button>
        </div>
      </div>
    </div>
  );
};
