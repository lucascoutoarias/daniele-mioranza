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
        <Link href="/portfolio" className="about-link">
          Ver portfólio completo
        </Link>

        <div className="about-contact">
          <a href="https://www.instagram.com/danielemioranza/" target="_blank" rel="noopener">
            @danielemioranza
          </a>
          <a href="mailto:danielemoirancasunshine@gmail.com">
            danielemoirancasunshine@gmail.com
          </a>
        </div>
      </div>
      <div className="about-image">
        <div className="about-image-inner">
          <Image
            src="/images/carousel/body-4.webp"
            alt="Daniele Mioranza"
            fill
            unoptimized
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}
