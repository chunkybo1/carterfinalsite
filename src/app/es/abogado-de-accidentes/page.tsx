import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PracticeAreaHero } from "@/components/sections/practice-areas/PracticeAreaHero";
import { MeetAdvocate } from "@/components/sections/practice-areas/MeetAdvocate";
import { ResultsGallery } from "@/components/sections/practice-areas/ResultsGallery";
import { StrategicFAQ } from "@/components/sections/practice-areas/StrategicFAQ";
import { PracticeAreaCTA } from "@/components/sections/practice-areas/PracticeAreaCTA";
import { FAQPageSchema, BreadcrumbSchema, LegalServiceSchema } from "@/components/seo/SchemaOrg";

export const metadata: Metadata = {
  title: "Abogado de Accidentes en El Paso | Consulta Gratis | Carter Law Wins",
  description: "¿Lesionado en un accidente en El Paso? El abogado Thomas Carter tiene 16 años de experiencia luchando por las víctimas. Consulta gratis. No cobramos si no ganamos. (915) 621-1818",
  openGraph: {
    title: "Abogado de Accidentes en El Paso | Consulta Gratis | Carter Law Wins",
    description: "¿Lesionado en un accidente en El Paso? El abogado Thomas Carter lucha por usted. Consulta gratis. No cobramos si no ganamos.",
    type: "website",
    url: "https://www.carterlawwins.com/es/abogado-de-accidentes",
  },
  alternates: {
    canonical: "https://www.carterlawwins.com/es/abogado-de-accidentes",
  },
};

export default function SpanishLandingPage() {
  const faqs = [
    {
      question: "¿Cuánto cuesta contratar a un abogado de accidentes?",
      answer: "En Carter Law, trabajamos con honorarios de contingencia. Esto significa que no paga nada por adelantado y solo cobramos si ganamos su caso. La consulta inicial es completamente gratuita."
    },
    {
      question: "¿Qué debo hacer después de un accidente de auto en El Paso?",
      answer: "Primero, asegure su seguridad y llame al 911. Busque atención médica de inmediato, incluso si se siente bien. Tome fotos de la escena, obtenga información de testigos y no dé declaraciones a las compañías de seguros sin hablar con un abogado."
    },
    {
      question: "¿Cuánto tiempo tengo para presentar una demanda en Texas?",
      answer: "Generalmente, tiene dos años a partir de la fecha del accidente para presentar una demanda por lesiones personales en Texas. Sin embargo, es mejor actuar rápido para preservar la evidencia."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema items={[
        { name: "Inicio", url: "https://www.carterlawwins.com" },
        { name: "Abogado de Accidentes", url: "https://www.carterlawwins.com/es/abogado-de-accidentes" },
      ]} />
      <LegalServiceSchema
        name="Abogado de Accidentes en El Paso"
        description="El bufete de abogados Carter representa a víctimas de accidentes en El Paso, TX. Consulta gratuita. No cobramos si no ganamos."
        url="https://www.carterlawwins.com/es/abogado-de-accidentes"
      />
      <Header />
      
      <PracticeAreaHero 
        eyebrow="¿ACCIDENTE EN EL PASO?"
        title="Abogado de Accidentes en El Paso — Consulta Gratis"
        description="Después de un accidente, usted está herido y estresado. Thomas Carter se asegura de que las compañías de seguros lo traten con justicia y le paguen lo que merece."
      />

      <ResultsGallery />

      <MeetAdvocate 
        headline="Luchando por la Comunidad de El Paso."
        text="Thomas Carter fundó este bufete con un principio simple: cada cliente merece un campeón. Con más de 16 años en la corte, él tiene la experiencia necesaria para ganar su caso. Hablamos su idioma y entendemos sus necesidades."
      />

      <StrategicFAQ faqs={faqs} />

      <PracticeAreaCTA 
        title="Su Recuperación Comienza con una Llamada."
        subtitle="No navegue solo por el complejo sistema legal. Ponga 16 años de experiencia en su esquina hoy mismo."
      />

      <Footer />
    </main>
  );
}
