"use client";
import Image from "next/image";
import Nav from "@/components/Nav";
import CustomCursor from "@/components/CustomCursor";
import { useState, useRef, useEffect } from "react";

const polas = Array.from({ length: 13 }, (_, i) => `/images/polas/pola-${i + 1}.webp`);

const MEASUREMENTS = [
  { label: "Altura", value: "170" },
  { label: "Manequim", value: "36" },
  { label: "Busto", value: "83" },
  { label: "Cintura", value: "62" },
  { label: "Quadril", value: "89" },
  { label: "Sapato", value: "36" },
  { label: "Cabelo", value: "Castanho Escuro" },
  { label: "Olhos", value: "Verdes" },
];

export default function SobrePage() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + polas.length) % polas.length);
  const next = () => setCurrent((c) => (c + 1) % polas.length);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % polas.length);
    }, 4000);
    return () => clearInterval(id);
  }, [current]);

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
                quality={90}
                sizes="(max-width: 767px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
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
              Natural do Sul do Brasil, Daniele iniciou sua carreira nas passarelas de São Paulo
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

            <div className="sobre-measurements">
              {MEASUREMENTS.map((m) => (
                <div key={m.label} className="sobre-measure-item">
                  <div className="sobre-measure-value">{m.value}</div>
                  <div className="sobre-measure-label">{m.label}</div>
                </div>
              ))}
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
