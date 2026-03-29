import type { Metadata } from "next";
import ReviewsContent from "@/components/sections/ReviewsContent";
import { AggregateRatingSchema, BreadcrumbSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Client Reviews & Case Results | El Paso Personal Injury Lawyer | Carter Law Firm, P.C.",
  description: "Read 5-star Google reviews from Carter Law Firm, P.C. clients in El Paso. See real case results including settlements and verdicts for car accidents, trucking, and more.",
  alternates: {
    canonical: "https://carterlawwins.com/reviews",
  },
  openGraph: {
    title: "Client Reviews & Case Results | El Paso Personal Injury Lawyer | Carter Law Firm, P.C.",
    description: "Read 5-star Google reviews from Carter Law Firm, P.C. clients in El Paso. Real case results including settlements and verdicts for personal injury cases.",
    type: "website",
    url: "https://carterlawwins.com/reviews",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews & Case Results | El Paso Personal Injury Lawyer",
    description: "5-star rated personal injury firm in El Paso. Read real client reviews and case results from Carter Law Firm, P.C.",
  },
};

export default async function ReviewsPage(props: {
  params: Promise<any>;
  searchParams: Promise<any>;
}) {
  await props.params;
  await props.searchParams;

  return (
    <>
      <AggregateRatingSchema ratingValue={5.0} reviewCount={96} />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://carterlawwins.com" },
        { name: "Client Reviews", url: "https://carterlawwins.com/reviews" },
      ]} />
      <ReviewsContent />
    </>
  );
}
