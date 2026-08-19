import Image from "next/image";

const BRANDS = [
  "Melissa",
  "Santa Lolla",
  "Lilly Sarti",
  "Reinaldo Lourenço",
  "Chevrolet",
  "Motorola",
  "Converse",
  "McDonald's",
  "Johnnie Walker",
  "Vogue",
  "ELLE",
  "FFW",
];

const PHOTOS = [
  { src: "/images/grid/santa-lolla.png", alt: "Campanha Santa Lolla" },
  { src: "/images/grid/converse-all-star.jpg", alt: "Campanha Converse" },
  { src: "/images/grid/motorola.png", alt: "Campanha Motorola" },
  { src: "/images/grid/dani-mc-donalds.png", alt: "Campanha McDonald's" },
];

export default function BrandsShowcase() {
  return (
    <section className="mnt-section">
      <span className="mnt-eyebrow">Com quem ela já trabalhou</span>
      <h2 className="mnt-h2">Marcas e veículos que confiaram no trabalho dela</h2>

      <div className="mnt-brands-row">
        {BRANDS.map((b) => (
          <span key={b}>{b}</span>
        ))}
      </div>

      <div className="mnt-brands-photos">
        {PHOTOS.map((p) => (
          <div key={p.src} className="mnt-brands-photo">
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 767px) 50vw, 25vw"
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
