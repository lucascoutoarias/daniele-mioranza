import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import HeroGrid from "@/components/HeroGrid";
import WorksGrid from "@/components/WorksGrid";
import FashionSection from "@/components/FashionSection";
import PublicidadeSection from "@/components/PublicidadeSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <HeroGrid />
        <WorksGrid />
        <FashionSection />
        <PublicidadeSection />
        <AboutSection />
      </main>
    </>
  );
}
