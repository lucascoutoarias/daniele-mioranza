import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-text">
        <h2>Daniele Mioranza</h2>
        <p>
          Modelo profissional com trajetória marcada por desfiles em semanas de moda e campanhas
          publicitárias de grandes marcas.
        </p>
        <p>
          Apaixonada pela arte e pela moda, une elegância e versatilidade em cada trabalho.
        </p>
        <Link href="/sobre" className="about-link">
          Ver portfólio completo
        </Link>
      </div>
      <div className="about-image">
        <div className="about-image-inner">
          <Image
            src="/images/carousel/amapo.jpg"
            alt="Daniele Mioranza"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
