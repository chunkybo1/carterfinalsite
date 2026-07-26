import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

interface LegalPageProps {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  intro: string;
  children: React.ReactNode;
}

/**
 * LegalPage — shared editorial layout for the firm's legal pages
 * (Privacy Policy, Terms of Service, Disclaimer). Navy hero + a paper
 * content well styled to read like a formal document while staying on the
 * brand's serif/sans, navy/gold system.
 */
export const LegalPage = ({
  eyebrow,
  title,
  effectiveDate,
  intro,
  children,
}: LegalPageProps) => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
        <Container>
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-on-dark block mb-6">{eyebrow}</span>
            <h1 className="font-serif font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              {title}
            </h1>
            <div className="mt-8 flex items-center gap-3">
              <span className="metric-rule !mt-0" />
              <p className="text-white/60 text-xs font-sans font-bold uppercase tracking-[0.2em]">
                Effective {effectiveDate}
              </p>
            </div>
            <p className="mt-8 text-white/80 text-lg font-sans leading-relaxed">
              {intro}
            </p>
          </div>
        </Container>
      </section>

      {/* Content well */}
      <section className="bg-surface-white py-20 lg:py-28">
        <Container>
          <article className="legal-prose max-w-3xl mx-auto">
            {children}

            <div className="mt-16 pt-10 border-t border-line">
              <p className="text-sm text-ink-muted font-sans leading-relaxed">
                Questions about this document? Contact The Carter Law Firm, P.C.
                at{" "}
                <a
                  href="tel:9156211818"
                  className="text-navy font-semibold hover:text-bronze transition-colors"
                >
                  (915) 621-1818
                </a>{" "}
                or{" "}
                <a
                  href="mailto:office@carterlawwins.com"
                  className="text-navy font-semibold hover:text-bronze transition-colors"
                >
                  office@carterlawwins.com
                </a>
                . You can also reach us through our{" "}
                <Link
                  href="/contact"
                  className="text-navy font-semibold hover:text-bronze transition-colors"
                >
                  contact page
                </Link>
                .
              </p>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
};
