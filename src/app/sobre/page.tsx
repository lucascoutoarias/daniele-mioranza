"use client";
import Image from "next/image";
import Nav from "@/components/Nav";
import CustomCursor from "@/components/CustomCursor";
import { useState, useRef } from "react";

const polas = Array.from({ length: 9 }, (_, i) => `/images/polas/pola-${i + 1}.jpg`);

export default function SobrePage() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + polas.length) % polas.length);
  const next = () => setCurrent((c) => (c + 1) % polas.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta < 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  return (
    <>
      <CustomCursor />
      <Nav />
      <main className="sobre-page">
        <div className="sobre-container">
          {/* Pola carousel */}
          <div className="sobre-pola-wrap">
            <div
              className="sobre-pola"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <Image
                src={polas[current]}
                alt={`Foto ${current + 1}`}
                fill
                style={{ objectFit: "cover" }}
                unoptimized
                priority
              />
            </div>
            <div className="sobre-nav">
              <button onClick={prev} aria-label="Anterior">‹</button>
              <button onClick={next} aria-label="Próxima">›</button>
            </div>
            <div className="sobre-dots">
              {polas.map((_, i) => (
                <button
                  key={i}
                  className={`sobre-dot${i === current ? " active" : ""}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Foto ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="sobre-info">
            <h1 className="sobre-name">Daniele Mioranza</h1>
            <p className="sobre-role">Modelo Profissional</p>

            <p className="sobre-bio">
              Natural do Sul do Brasil, Daniele iniciou sua carreira nas passarelas de Porto Alegre
              e expandiu sua presença para os principais eventos de moda do país.
            </p>
            <p className="sobre-bio">
              Participou de desfiles em São Paulo Fashion Week, colaborou com marcas como SAAD,
              Anita Voss, Converse, Motorola e Santa Lolla, e estampou editoriais nas revistas
              ELLE, Vogue e FFW.
            </p>
            <p className="sobre-bio">
              Sua versatilidade transita entre o fashion editorial e as grandes campanhas
              publicitárias, sempre com entrega técnica e presença marcante.
            </p>

            <div className="sobre-stats">
              <div>
                <div className="sobre-stat-num">10+</div>
                <div className="sobre-stat-label">Anos de carreira</div>
              </div>
              <div>
                <div className="sobre-stat-num">50+</div>
                <div className="sobre-stat-label">Marcas</div>
              </div>
              <div>
                <div className="sobre-stat-num">100+</div>
                <div className="sobre-stat-label">Campanhas</div>
              </div>
            </div>

            <a
              href="https://wa.me/5511977348313"
              target="_blank"
              rel="noopener"
              className="sobre-cta"
            >
              CONTATO
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
