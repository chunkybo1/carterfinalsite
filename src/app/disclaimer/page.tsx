import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/sections/legal/LegalPage";

export const metadata: Metadata = {
  title: "Disclaimer | The Carter Law Firm, P.C.",
  description:
    "Legal disclaimer for carterlawwins.com. The content on this site is attorney advertising and is provided for informational purposes only.",
  alternates: {
    canonical: "https://www.carterlawwins.com/disclaimer",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Disclaimer | The Carter Law Firm, P.C.",
    description:
      "Legal disclaimer for carterlawwins.com. Attorney advertising, provided for informational purposes only.",
    type: "website",
    url: "https://www.carterlawwins.com/disclaimer",
  },
};

export default async function DisclaimerPage(props: {
  params: Promise<any>;
  searchParams: Promise<any>;
}) {
  await props.params;
  await props.searchParams;

  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.carterlawwins.com" },
          { name: "Disclaimer", url: "https://www.carterlawwins.com/disclaimer" },
        ]}
      />
      <Header />
      <LegalPage
        eyebrow="Legal"
        title="Disclaimer"
        effectiveDate="July 25, 2026"
        intro="Please read this Disclaimer carefully before using carterlawwins.com (the “Site”), operated by The Carter Law Firm, P.C. (“the Firm”). By using the Site, you acknowledge and agree to the terms of this Disclaimer."
      >
        <h2>1. Attorney Advertising</h2>
        <p>
          This Site is an advertisement. The information contained on it is
          intended, in part, to promote the legal services of The Carter Law
          Firm, P.C. and to provide general information about the Firm and the
          areas of law in which it practices. The choice of a lawyer is an
          important decision and should not be based solely upon advertisements.
        </p>

        <h2>2. Not Legal Advice</h2>
        <p>
          The content on this Site is provided for general informational purposes
          only and is not legal advice. Laws change and vary from jurisdiction to
          jurisdiction, and the application of law depends on the specific facts
          of each situation. You should not act or refrain from acting based on
          anything you read on this Site.{" "}
          <strong>
            Always consult a qualified attorney about your particular
            circumstances before making any legal decision.
          </strong>
        </p>

        <h2>3. No Attorney–Client Relationship</h2>
        <p>
          Using this Site, submitting a form, or communicating with the Firm
          through the Site{" "}
          <strong>does not create an attorney–client relationship.</strong> Such
          a relationship is established only after a conflict-of-interest check
          is completed and a written engagement agreement is signed by both the
          client and the Firm. Do not send confidential or sensitive information
          to the Firm until an attorney–client relationship has been established
          in writing.
        </p>

        <h2>4. No Guarantee of Results</h2>
        <p>
          Any case results, verdicts, settlements, testimonials, or
          endorsements described on this Site reflect the facts of those specific
          matters and{" "}
          <strong>
            are not a guarantee, promise, or prediction of the outcome of any
            other case.
          </strong>{" "}
          Prior results do not guarantee or predict a similar outcome. Every
          legal matter is different and must be evaluated on its own facts.
        </p>

        <h2>5. Jurisdiction and Licensing</h2>
        <p>
          Thomas Carter is licensed to practice law in Texas, Arizona, and New
          Mexico. The Firm does not seek to represent anyone in any jurisdiction
          where this Site would not comply with applicable laws and ethical
          rules. Nothing on this Site is intended to solicit clients in
          jurisdictions where the Firm’s attorneys are not licensed to practice.
        </p>

        <h2>6. Accuracy and Currency of Information</h2>
        <p>
          While we strive to keep the information on this Site accurate and
          current, we make no representations or warranties about the
          completeness, accuracy, reliability, or timeliness of any content. The
          Site may contain errors or omissions and may not reflect the most
          recent legal developments.
        </p>

        <h2>7. Third-Party Content and Links</h2>
        <p>
          This Site may include links to third-party websites or content
          provided by third parties. Such links and content are provided for
          convenience only and do not imply endorsement. The Firm is not
          responsible for the accuracy or reliability of any third-party
          information.
        </p>

        <h2>8. Testimonials and Endorsements</h2>
        <p>
          Any testimonials or client reviews appearing on this Site are provided
          by actual clients or represent illustrative experiences. They are not
          intended to be, and should not be construed as, a guarantee that you
          will experience the same or similar results.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          The Carter Law Firm, P.C.
          <br />
          124 W. Castellano Drive, Unit 103
          <br />
          El Paso, TX 79912
        </p>
      </LegalPage>
      <Footer />
    </main>
  );
}
