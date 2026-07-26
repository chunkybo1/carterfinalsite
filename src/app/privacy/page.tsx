import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/sections/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | The Carter Law Firm, P.C.",
  description:
    "How The Carter Law Firm, P.C. collects, uses, and protects the personal information you share with us through carterlawwins.com.",
  alternates: {
    canonical: "https://www.carterlawwins.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | The Carter Law Firm, P.C.",
    description:
      "How The Carter Law Firm, P.C. collects, uses, and protects the personal information you share with us.",
    type: "website",
    url: "https://www.carterlawwins.com/privacy",
  },
};

export default async function PrivacyPage(props: {
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
          { name: "Privacy Policy", url: "https://www.carterlawwins.com/privacy" },
        ]}
      />
      <Header />
      <LegalPage
        eyebrow="Legal"
        title="Privacy Policy"
        effectiveDate="July 25, 2026"
        intro="The Carter Law Firm, P.C. (“the Firm,” “we,” “us,” or “our”) respects your privacy. This Privacy Policy explains what information we collect through carterlawwins.com (the “Site”), how we use it, and the choices you have. By using the Site, you agree to the practices described below."
      >
        <h2>1. Information We Collect</h2>
        <p>
          We collect information in two ways: information you provide to us
          directly, and information collected automatically when you use the
          Site.
        </p>

        <h3>Information you provide</h3>
        <p>
          When you complete a contact or case-review form, request a
          consultation, call or email us, or otherwise communicate with the
          Firm, you may provide:
        </p>
        <ul>
          <li>Your name, phone number, and email address;</li>
          <li>Your mailing or physical address;</li>
          <li>
            Details about your potential legal matter, including facts about an
            accident, injury, or incident that you choose to share;
          </li>
          <li>Any other information you include in a message to us.</li>
        </ul>

        <h3>Information collected automatically</h3>
        <p>
          When you visit the Site, certain technical information—such as your IP
          address, browser type, device identifiers, pages viewed, and the dates
          and times of your visits—may be collected automatically by our hosting
          provider and by the third-party services we embed (described in the
          “Cookies and Third-Party Technologies” section below).
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and evaluate potential legal matters;</li>
          <li>
            Communicate with you about your request, our services, and scheduling;
          </li>
          <li>Operate, maintain, secure, and improve the Site;</li>
          <li>
            Comply with legal and ethical obligations, including conflict-of-interest
            checks; and
          </li>
          <li>
            Detect, prevent, and address fraud, abuse, or security issues.
          </li>
        </ul>

        <h2>3. No Attorney–Client Relationship</h2>
        <p>
          <strong>
            Submitting information through this Site does not create an
            attorney–client relationship.
          </strong>{" "}
          An attorney–client relationship is formed only after we have
          confirmed there is no conflict of interest and both parties have
          signed a written engagement agreement. Please do not send confidential
          or time-sensitive information through the Site until such a
          relationship has been established in writing.
        </p>

        <h2>4. Cookies and Third-Party Technologies</h2>
        <p>
          The Site uses cookies and similar technologies, primarily through the
          third-party services we embed:
        </p>
        <ul>
          <li>
            <strong>Lead and contact forms.</strong> Our intake and case-review
            forms are provided by our client-relationship management (CRM)
            platform, HighLevel (also referred to as LeadConnector). When a form
            loads, this provider may set cookies and collect technical
            information to display the form, prevent spam, and attribute your
            submission.
          </li>
          <li>
            <strong>Video.</strong> Some pages embed videos using YouTube’s
            privacy-enhanced (“no-cookie”) mode, which does not set tracking
            cookies unless and until you press play.
          </li>
        </ul>
        <p>
          We do not currently use advertising or retargeting pixels on the Site.
          If we add analytics or advertising technologies in the future, we will
          update this Policy. You can set your browser to refuse cookies or alert
          you when cookies are being sent; however, some parts of the Site, such
          as the contact forms, may not function properly without them.
        </p>

        <h2>5. Text Message (SMS) Communications</h2>
        <p>
          If you provide your phone number and agree to receive text messages,
          the Firm (through our CRM platform) may send you SMS text messages
          related to your inquiry, such as follow-ups about a consultation
          request or your potential matter.
        </p>
        <ul>
          <li>
            <strong>Consent is optional.</strong> Your consent to receive text
            messages is not a condition of hiring the Firm or of receiving any
            legal service. You can still reach us by phone or email.
          </li>
          <li>
            <strong>Message frequency and rates.</strong> Message frequency
            varies. Message and data rates may apply depending on your carrier
            and plan.
          </li>
          <li>
            <strong>How to opt out.</strong> You may opt out at any time by
            replying STOP to any message. Reply HELP for help. You may also
            withdraw consent by contacting us using the details below.
          </li>
          <li>
            <strong>No mobile data sharing.</strong> We do not sell or share
            mobile phone numbers or SMS consent with third parties for their own
            marketing purposes.
          </li>
        </ul>

        <h2>6. How We Share Information</h2>
        <p>
          We do not sell your personal information. We may share information
          with:
        </p>
        <ul>
          <li>
            Service providers who perform functions on our behalf—such as website
            hosting and our CRM/messaging platform (HighLevel / LeadConnector),
            which processes form submissions and sends communications on our
            behalf—subject to confidentiality obligations;
          </li>
          <li>
            Co-counsel or other professionals when reasonably necessary to
            evaluate or handle your matter;
          </li>
          <li>
            Authorities or other parties when required by law, subpoena, court
            order, or to protect the rights, safety, or property of the Firm or
            others.
          </li>
        </ul>

        <h2>7. Data Security and Retention</h2>
        <p>
          We use reasonable administrative, technical, and physical safeguards
          designed to protect the information we collect. No method of
          transmission over the Internet or electronic storage is completely
          secure, however, and we cannot guarantee absolute security. We retain
          information for as long as necessary to fulfill the purposes described
          in this Policy or as required by applicable law and professional
          responsibility rules.
        </p>

        <h2>8. Third-Party Links</h2>
        <p>
          The Site may contain links to third-party websites and services that
          we do not control. This Policy does not apply to those sites, and we
          are not responsible for their content or privacy practices. We
          encourage you to review the privacy policies of any site you visit.
        </p>

        <h2>9. Children’s Privacy</h2>
        <p>
          The Site is not directed to children under 13, and we do not knowingly
          collect personal information from children. If you believe a child has
          provided us with personal information, please contact us so we can
          delete it.
        </p>

        <h2>10. Your Choices and Rights</h2>
        <p>
          You may opt out of marketing communications at any time by following
          the unsubscribe instructions in our emails or by contacting us
          directly. Depending on where you live, you may have additional rights
          regarding your personal information, such as the right to request
          access to or deletion of the information we hold about you. To make a
          request, contact us using the details below.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the “Effective” date above. Your continued use of the Site
          after changes are posted constitutes your acceptance of the revised
          Policy.
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
