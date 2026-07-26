import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/sections/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | The Carter Law Firm, P.C.",
  description:
    "The terms and conditions that govern your use of carterlawwins.com, the website of The Carter Law Firm, P.C.",
  alternates: {
    canonical: "https://www.carterlawwins.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service | The Carter Law Firm, P.C.",
    description:
      "The terms and conditions that govern your use of carterlawwins.com.",
    type: "website",
    url: "https://www.carterlawwins.com/terms",
  },
};

export default async function TermsPage(props: {
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
          { name: "Terms of Service", url: "https://www.carterlawwins.com/terms" },
        ]}
      />
      <Header />
      <LegalPage
        eyebrow="Legal"
        title="Terms of Service"
        effectiveDate="July 25, 2026"
        intro="These Terms of Service (“Terms”) govern your access to and use of carterlawwins.com (the “Site”), operated by The Carter Law Firm, P.C. (“the Firm,” “we,” “us,” or “our”). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site."
      >
        <h2>1. Informational Purpose Only</h2>
        <p>
          The Site and its contents are provided for general informational
          purposes only and do not constitute legal advice. Nothing on the Site
          should be relied upon as a substitute for advice from a licensed
          attorney regarding your specific circumstances. Reading the Site,
          contacting us, or submitting information{" "}
          <strong>does not create an attorney–client relationship.</strong> That
          relationship is formed only after a conflict check is completed and a
          written engagement agreement is signed by both parties.
        </p>

        <h2>2. No Guarantee of Results</h2>
        <p>
          Any references to prior results, verdicts, settlements, or client
          experiences describe past matters and do not guarantee or predict a
          similar outcome in your case. Every case is different, and the outcome
          of any legal matter depends on its unique facts and circumstances.
        </p>

        <h2>3. Use of the Site</h2>
        <p>You agree that you will not:</p>
        <ul>
          <li>Use the Site for any unlawful purpose or in violation of these Terms;</li>
          <li>
            Attempt to gain unauthorized access to the Site, its servers, or any
            connected systems;
          </li>
          <li>
            Interfere with or disrupt the operation, security, or integrity of
            the Site;
          </li>
          <li>
            Introduce viruses, malware, or other harmful code; or
          </li>
          <li>
            Copy, scrape, republish, or exploit Site content except as expressly
            permitted.
          </li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <p>
          The Site and its content—including text, graphics, logos, images, and
          design—are owned by or licensed to The Carter Law Firm, P.C. and are
          protected by intellectual property laws. You may view and print
          content for your own personal, non-commercial use. Any other use,
          including reproduction or distribution, requires our prior written
          permission.
        </p>

        <h2>5. Communications and Submissions</h2>
        <p>
          Because Internet communications are not fully secure, you should not
          send confidential, sensitive, or time-sensitive information through
          the Site or by email until an attorney–client relationship has been
          established in writing. Information you submit through the Site may not
          be treated as confidential or privileged, and unsolicited information
          does not prevent us from representing a party adverse to you.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          The Site may link to third-party websites for your convenience. We do
          not control and are not responsible for the content, accuracy, or
          practices of those sites. Accessing third-party sites is at your own
          risk.
        </p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>
          The Site is provided on an “as is” and “as available” basis without
          warranties of any kind, whether express or implied, including
          warranties of merchantability, fitness for a particular purpose,
          accuracy, or non-infringement. We do not warrant that the Site will be
          uninterrupted, error-free, or free of harmful components.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, The Carter Law Firm, P.C. and
          its attorneys, employees, and agents will not be liable for any
          indirect, incidental, consequential, special, or punitive damages
          arising out of or related to your use of, or inability to use, the
          Site—even if we have been advised of the possibility of such damages.
        </p>

        <h2>9. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless The Carter Law Firm, P.C. and
          its personnel from any claims, damages, losses, or expenses (including
          reasonable attorneys’ fees) arising out of your use of the Site or your
          violation of these Terms.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Texas, without
          regard to its conflict-of-laws principles. Any dispute arising out of
          or relating to these Terms or the Site will be subject to the exclusive
          jurisdiction of the state and federal courts located in El Paso County,
          Texas.
        </p>

        <h2>11. Changes to These Terms</h2>
        <p>
          We may modify these Terms at any time. Updated Terms will be posted on
          this page with a revised “Effective” date. Your continued use of the
          Site after changes are posted constitutes your acceptance of the
          revised Terms.
        </p>

        <h2>12. Contact Us</h2>
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
