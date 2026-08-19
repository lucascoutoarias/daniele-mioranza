import type { Metadata } from "next";
import "./mentoria.css";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import HeroMentoria from "@/components/mentoria/HeroMentoria";
import StatsStrip from "@/components/mentoria/StatsStrip";
import CurriculumSection from "@/components/mentoria/CurriculumSection";
import AuthoritySection from "@/components/mentoria/AuthoritySection";
import NetworkBenefits from "@/components/mentoria/NetworkBenefits";
import BrandsShowcase from "@/components/mentoria/BrandsShowcase";
import TestimonialsPlaceholder from "@/components/mentoria/TestimonialsPlaceholder";
import AudienceFit from "@/components/mentoria/AudienceFit";
import FAQSection from "@/components/mentoria/FAQSection";
import ClosingSection from "@/components/mentoria/ClosingSection";

const TITLE =
  "Consultoria de Moda com Daniele Mioranza | Como Entrar no Mundo da Moda";
const DESCRIPTION =
  "Consultoria individual com Daniele Mioranza, modelo profissional há mais de 10 anos, para aprender o passo a passo de como entrar no mundo da moda: agências, bookers, testes de casting e VT, digitais e comportamento profissional.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "como entrar no mundo da moda",
    "consultoria de moda",
    "mentoria para modelos",
    "como ser modelo profissional",
    "como conseguir agência de modelo",
    "curso para modelo iniciante",
    "book de modelo",
    "digitais de modelo",
    "teste para agência de modelo",
    "casting de moda",
  ],
  alternates: {
    canonical: "/mentoria",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/mentoria",
    type: "website",
    locale: "pt_BR",
    images: ["/images/grid/dani-editorial-2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/grid/dani-editorial-2.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Consultoria de moda para modelos iniciantes",
  name: "Consultoria de Moda com Daniele Mioranza",
  description: DESCRIPTION,
  provider: {
    "@type": "Person",
    name: "Daniele Mioranza",
    jobTitle: "Modelo profissional",
  },
  areaServed: "BR",
  audience: {
    "@type": "Audience",
    audienceType: "Pessoas que querem entrar no mundo da moda como modelo",
  },
};

export default function MentoriaPage() {
  return (
    <div className="mnt-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CustomCursor />
      <Nav />
      <main>
        <HeroMentoria />
        <StatsStrip />
        <CurriculumSection />
        <AuthoritySection />
        <NetworkBenefits />
        <BrandsShowcase />
        <TestimonialsPlaceholder />
        <AudienceFit />
        <FAQSection />
        <ClosingSection />
      </main>
    </div>
  );
}
