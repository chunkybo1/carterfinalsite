import type { Metadata } from "next";
import Image from "next/image";
import { UnbrandedHeader } from "@/components/sections/landing/UnbrandedHeader";
import { UnbrandedFooter } from "@/components/sections/landing/UnbrandedFooter";
import { TruckAccidentEvaluator } from "@/components/sections/landing/TruckAccidentEvaluator";

export const metadata: Metadata = {
  title: "Free Truck Accident Claim Evaluation | See What You're Owed",
  description: "Trucking companies use a secret formula to minimize your payout. Find out what your claim is actually worth before you sign anything. Free 60-second evaluation.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ClaimReviewPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F2F4F7]">
      <UnbrandedHeader />

      {/* Hero Hook */}
      <section className="relative pt-16 pb-12 px-6 text-center border-b border-bronze/20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/process-2.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay to keep text readable */}
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-bronze/10 border border-bronze/30 rounded-full px-4 py-1.5 text-bronze font-semibold text-xs uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-bronze animate-pulse" />
            Free 60-Second Evaluation
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Trucking Companies Have a{" "}
            <span className="text-brand-gold font-bold">Secret Formula</span>{" "}
            to Minimize Your Payout.
          </h1>

          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl mx-auto">
            Commercial insurance policies carry millions in coverage, but their adjusters are trained to pay you a fraction of that. Take this free 60-second evaluation to see if you qualify for a maximum payout.
          </p>

          {/* Trust micro-signals */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-white/40 font-medium">
            <span>✓ No registration required</span>
            <span>✓ 100% confidential</span>
            <span>✓ No obligation</span>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-12 bg-[#F2F4F7] flex-1">
        <TruckAccidentEvaluator />
      </section>

      <UnbrandedFooter />
    </main>
  );
}
