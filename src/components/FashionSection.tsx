import Image from "next/image";

const videos = [
  {
    thumb: "/images/fashion/fashion-3.jpg",
    url: "https://youtube.com/shorts/fJnrrqx4ECg?feature=share",
    label: "DESFILE REINALDO LOURENÇO SPFW",
  },
  {
    thumb: "/images/fashion/fashion-4.jpg",
    url: "https://youtube.com/shorts/jpBDPGvo09U?feature=share",
    label: "DESFILE ALA GARÇONNE SPFW",
  },
  {
    thumb: "/images/fashion/fashion-5.jpg",
    url: "https://youtube.com/shorts/IW7KP3NItJ0?feature=share",
    label: "DESFILE LILLY SARTI SPFW",
  },
  {
    thumb: "/images/fashion/fashion-2.jpg",
    url: "https://youtube.com/shorts/qCcU5zlk0r0?feature=share",
    label: "ANITA VOSS",
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

export default function FashionSection() {
  return (
    <section id="fashion" className="fashion-section">
      <h2>Fashion</h2>
      <div className="fashion-grid">
        {videos.map((v) => (
          <a key={v.url} href={v.url} target="_blank" rel="noopener" className="fashion-item">
            <div className="fashion-thumb">
              <Image
                src={v.thumb}
                alt={v.label}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                quality={100}
              />
              <div className="fashion-play">
                <PlayIcon />
              </div>
            </div>
            <p className="fashion-caption">{v.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
