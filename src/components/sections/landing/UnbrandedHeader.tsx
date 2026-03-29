"use client";

import React from "react";
import { ShieldCheck, Lock } from "lucide-react";

export const UnbrandedHeader = () => {
  return (
    <header className="w-full bg-navy border-b border-bronze/40 py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        {/* Brand mark */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-bronze flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-white text-sm tracking-tight">
            ClaimReview<span className="text-bronze">.help</span>
          </span>
        </div>

        {/* Trust signal */}
        <div className="flex items-center gap-1.5 text-white/50 text-xs font-medium">
          <Lock className="w-3 h-3" />
          <span>100% Confidential</span>
        </div>
      </div>
    </header>
  );
};
