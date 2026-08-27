import WorksGridCard from "./WorksGridCard";

const gridProjects = [
  {
    title: "ELLE",
    images: ["/images/grid/dani-revista-elle.png", "/images/grid/dani-revista-elle-2.png"],
  },
  { title: "VOGUE", images: ["/images/grid/dani-revista-vogue.png"] },
  { title: "FFW", images: ["/images/grid/revista-ffw.png", "/images/grid/revista-ffw2.png"] },
  {
    title: "SAAD",
    images: [
      "/images/grid/dani-saad.png",
      "/images/grid/editorial-saad-1.png",
      "/images/grid/editorial-saad-2.png",
    ],
  },
  {
    title: "JOÔ UNDERCLOTHES",
    images: ["/images/grid/joo-underclothes2.png", "/images/grid/joo-underclothes3.png"],
  },
  {
    title: "EDITORIAL",
    images: [
      "/images/grid/dani-editorial.png",
      "/images/grid/dani-editorial-2.png",
      "/images/grid/editoral.jpg",
      "/images/grid/editorial4.png",
      "/images/grid/editorial5.png",
      "/images/grid/editorial-elle.png",
      "/images/grid/editorial-deusas-do-olimpo.png",
    ],
  },
  {
    title: "BEAUTY",
    images: [
      "/images/grid/beauty.png",
      "/images/grid/beauty-revista-estilo1.png",
      "/images/grid/beauty-revista-estilo2.png",
      "/images/grid/beauty-revista-estilo3.png",
      "/images/grid/editorial-beauty.png",
      "/images/grid/revista-beauty-dior.png",
    ],
  },
  {
    title: "CONVERSE",
    images: [
      "/images/grid/converse-all-star.jpg",
      "/images/grid/converse2.jpg",
      "/images/grid/converse3.jpg",
      "/images/grid/converse4.jpg",
    ],
  },
  { title: "MC DONALD'S", images: ["/images/grid/dani-mc-donalds.png"] },
  {
    title: "SRI CLOTHING",
    images: ["/images/grid/sri-clothing.png", "/images/grid/sri-clothing-2.jpg"],
  },
  {
    title: "CHAOUICHE",
    images: [
      "/images/grid/chaouiche1.JPG",
      "/images/grid/chaouiche2.JPG",
      "/images/grid/CHAOUICHE3.jpg",
    ],
  },
  {
    title: "ANITA VOSS",
    images: [
      "/images/grid/anita-voss.png",
      "/images/grid/anita-voss2.png",
      "/images/grid/anita-voss-3.webp",
      "/images/grid/anita-voss4.webp",
    ],
  },
  { title: "MOTOROLA", images: ["/images/grid/motorola.png", "/images/grid/motorola2.jpg"] },
  {
    title: "SANTA LOLLA",
    images: [
      "/images/grid/santa-lolla.png",
      "/images/grid/santa-lolla-2.jpg",
      "/images/grid/santa-lolla3.jpg",
    ],
  },
  { title: "BOB WOLFENSON", images: ["/images/grid/bob-wolfenson.png"] },
];

export default function WorksGrid() {
  return (
    <section className="works-section">
      <h2>Trabalhos Realizados</h2>
      <div className="works-grid">
        {gridProjects.map((p) => (
          <WorksGridCard key={p.title} title={p.title} images={p.images} />
        ))}
      </div>
    </section>
  );
}
