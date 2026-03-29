"use client";

import React from "react";
import Link from "next/link";

export const UnbrandedFooter = () => {
  return (
    <footer className="w-full bg-navy border-t border-bronze/20 py-8 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-6 text-xs text-white/40">
          <Link href="/privacy" className="hover:text-bronze transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-bronze transition-colors">Terms of Service</Link>
        </div>
        <p className="text-[10px] text-white/20 text-center max-w-lg leading-relaxed">
          Attorney Advertising. This evaluation service is sponsored by Carter Law Wins, Thomas Carter, Attorney at Law, licensed in Texas, Arizona, and New Mexico. No attorney-client relationship is formed until a written contract is signed. Prior results do not guarantee a similar outcome.
        </p>
        <p className="text-[10px] text-white/20">
          © {new Date().getFullYear()} ClaimReview.help. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
