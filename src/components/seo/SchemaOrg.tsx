/**
 * Sitewide JSON-LD schema: LocalBusiness + Attorney
 * Renders on every page via layout.tsx
 */
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Attorney"],
    "@id": "https://www.carterlawwins.com/#organization",
    name: "The Carter Law Firm, P.C.",
    alternateName: "Carter Law Wins",
    url: "https://www.carterlawwins.com",
    logo: "https://www.carterlawwins.com/carter-logo-white.png",
    image: "https://www.carterlawwins.com/thomas-carter-portrait.jpg",
    description:
      "The Carter Law Firm, P.C. is a personal injury law firm in El Paso, TX, representing accident victims across Texas, Arizona, and New Mexico. Led by attorney Thomas Carter.",
    telephone: "+19156211818",
    email: "office@carterlawwins.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "124 W. Castellano Drive, UNIT 103",
      addressLocality: "El Paso",
      addressRegion: "TX",
      postalCode: "79912",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.8457,
      longitude: -106.4309,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "State", name: "Texas" },
      { "@type": "State", name: "Arizona" },
      { "@type": "State", name: "New Mexico" },
    ],
    priceRange: "Free consultation. No fee unless we win.",
    sameAs: [
      "https://www.linkedin.com/company/carter-law-firm-pc",
      "https://www.instagram.com/carterlawwins",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      reviewCount: 96,
    },
    founder: {
      "@type": "Person",
      name: "Thomas Carter",
      jobTitle: "Personal Injury Attorney",
      knowsAbout: [
        "Personal Injury Law",
        "Car Accident Law",
        "Trucking Accident Law",
        "Wrongful Death",
        "Medical Malpractice",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface AggregateRatingSchemaProps {
  ratingValue?: number;
  reviewCount?: number;
}

export function AggregateRatingSchema({
  ratingValue = 5.0,
  reviewCount = 96,
}: AggregateRatingSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": "https://www.carterlawwins.com/#organization",
    name: "The Carter Law Firm, P.C.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(1),
      bestRating: "5",
      worstRating: "1",
      reviewCount,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQ {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  faqs: FAQ[];
}

export function FAQPageSchema({ faqs }: FAQPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface LegalServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function LegalServiceSchema({
  name,
  description,
  url,
}: LegalServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name,
    description,
    url,
    provider: {
      "@type": "Attorney",
      "@id": "https://www.carterlawwins.com/#organization",
      name: "The Carter Law Firm, P.C.",
    },
    areaServed: {
      "@type": "City",
      name: "El Paso",
      addressRegion: "TX",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
