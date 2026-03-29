import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactPageContent } from "@/components/sections/ContactPageContent";
import { BreadcrumbSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Contact an El Paso Personal Injury Lawyer | Carter Law Firm, P.C.",
  description: "Contact The Carter Law Firm, P.C. in El Paso, TX. Free consultations for car accidents, trucking accidents, wrongful death, and more. Call (915) 621-1818 — available 24/7.",
  alternates: {
    canonical: "https://www.carterlawwins.com/contact",
  },
  openGraph: {
    title: "Contact an El Paso Personal Injury Lawyer | Carter Law Firm, P.C.",
    description: "Contact The Carter Law Firm, P.C. in El Paso, TX. Free consultations for car accidents, trucking accidents, wrongful death, and more. Call (915) 621-1818 — available 24/7.",
    type: "website",
    url: "https://www.carterlawwins.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact an El Paso Personal Injury Lawyer | Carter Law Firm, P.C.",
    description: "Contact The Carter Law Firm, P.C. in El Paso, TX. Free consultations available 24/7. Call (915) 621-1818.",
  },
};

export default async function ContactPage(props: {
  params: Promise<any>;
  searchParams: Promise<any>;
}) {
  await props.params;
  await props.searchParams;

  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.carterlawwins.com" },
        { name: "Contact", url: "https://www.carterlawwins.com/contact" },
      ]} />
      <Header />
      <ContactPageContent />
      <Footer />
    </main>
  );
}
