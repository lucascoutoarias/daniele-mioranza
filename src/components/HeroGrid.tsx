"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const AMAPO = [
  "/images/carousel/amapo.jpg",
  "/images/carousel/amapo2.jpg",
  "/images/carousel/amapo3.jpg",
];

export default function HeroGrid() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setOffset((o) => (o + 1) % 3), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-grid">
        {[0, 1, 2].map((i) => (
          <div key={i} className="hero-card">
            <div className="hero-card-inner">
              <Image
                src={AMAPO[(offset + i) % 3]}
                alt={`AMAPO ${i + 1}`}
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </div>
            <span className="hero-card-label">AMAPO</span>
          </div>
        ))}
      </div>
    </section>
  );
}
