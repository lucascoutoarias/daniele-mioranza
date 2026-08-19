import Image from "next/image";

const HERO_BRANDS = ["McDonald's", "Converse", "Motorola", "Johnnie Walker"];

export default function HeroMentoria() {
  return (
    <section className="mnt-hero">
      <div className="mnt-hero-copy">
        <span className="mnt-eyebrow">Consultoria individual · Daniele Mioranza</span>
        <h1>Transforme seu sonho em potencial para entrar no mundo da moda</h1>
        <p className="mnt-hero-sub">
          Consultoria particular com Daniele Mioranza, modelo profissional há mais de 10 anos,
          pra você dar os primeiros passos certos dentro do mercado da moda: agências, testes,
          book e o comportamento de quem já está lá dentro.
        </p>
        <a href="#aplicar" className="mnt-cta mnt-cta-solid">
          Quero aplicar pra consultoria
        </a>

        <div className="mnt-hero-trust">
          <p className="mnt-hero-trust-label">Já trabalhou com</p>
          <div className="mnt-hero-trust-row">
            {HERO_BRANDS.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mnt-hero-image">
        <Image
          src="/images/grid/dani-editorial-2.png"
          alt="Daniele Mioranza em editorial de moda"
          fill
          sizes="(max-width: 767px) 100vw, 45vw"
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
      </div>
    </section>
  );
}
