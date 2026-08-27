"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_PHOTOS = Array.from({ length: 7 }, (_, i) => `/images/carousel/hero-${i + 1}.jpg`);

export default function HeroGrid() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setOffset((o) => (o + 1) % HERO_PHOTOS.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-grid">
        {[0, 1, 2].map((i) => (
          <div key={i} className="hero-card">
            <div className="hero-card-inner">
              <Image
                src={HERO_PHOTOS[(offset + i) % HERO_PHOTOS.length]}
                alt="Daniele Mioranza"
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
