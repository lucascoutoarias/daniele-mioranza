import Image from "next/image";

const videos = [
  {
    thumb: "/images/publicidade/pub-1.jpg",
    url: "https://www.youtube.com/watch?v=e5S7u8b2DFk",
    label: "CHEVROLET 100 ANOS",
  },
  {
    thumb: "/images/publicidade/pub-2.jpg",
    url: "https://www.youtube.com/watch?v=8Eq-O_Gl_QM",
    label: "McDONALD'S LANÇAMENTO McCHICKEN",
  },
  {
    thumb: "/images/publicidade/pub-3.jpg",
    url: "https://youtu.be/wj1kZysbCjo",
    label: "GAZIN DIA DAS MÃES",
  },
];

function PlayIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.4)" />
      <polygon points="26,20 48,32 26,44" fill="white" />
    </svg>
  );
}

export default function PublicidadeSection() {
  return (
    <section id="publicidade" className="publicidade-section">
      <h2>Publicidade</h2>
      <div className="publicidade-grid">
        {videos.map((v) => (
          <a key={v.url} href={v.url} target="_blank" rel="noopener" className="publicidade-item">
            <div className="publicidade-thumb">
              <Image
                src={v.thumb}
                alt={v.label}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                quality={100}
              />
              <div className="publicidade-play">
                <PlayIcon />
              </div>
            </div>
            <p className="publicidade-caption">{v.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
