"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FACES = ["/images/carousel/face-1.webp", "/images/carousel/face-2.webp", "/images/carousel/face-3.webp"];
const BODIES = [
  "/images/carousel/body-1.webp",
  "/images/carousel/body-2.webp",
  "/images/carousel/body-3.webp",
  "/images/carousel/body-4.webp",
];

// mode A (tick par): rosto | corpo | rosto — mode B (tick ímpar): corpo | rosto | corpo
// face(tick) e body(tick) avançam 1 posição a cada troca, sempre — nenhuma foto fica
// travada numa posição fixa, e o par mostrado varia a cada rodada em vez de repetir.
function slotsForTick(tick: number): string[] {
  const face = (n: number) => FACES[((n % FACES.length) + FACES.length) % FACES.length];
  const body = (n: number) => BODIES[((n % BODIES.length) + BODIES.length) % BODIES.length];
  const mode: "A" | "B" = tick % 2 === 0 ? "A" : "B";

  if (mode === "A") {
    return [face(tick), body(tick), face(tick + 1)];
  }
  return [body(tick), face(tick), body(tick + 1)];
}

function CrossfadeImage({ src, priority }: { src: string; priority?: boolean }) {
  const [layers, setLayers] = useState<[string, string]>([src, src]);
  const [active, setActive] = useState<0 | 1>(0);
  const prevSrc = useRef(src);
  const rafIds = useRef<number[]>([]);

  useEffect(() => {
    if (src === prevSrc.current) return;
    prevSrc.current = src;
    const inactive = active === 0 ? 1 : 0;
    setLayers((l) => {
      const next = [...l] as [string, string];
      next[inactive] = src;
      return next;
    });
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setActive(inactive as 0 | 1));
      rafIds.current.push(raf2);
    });
    rafIds.current.push(raf1);
    return () => {
      rafIds.current.forEach(cancelAnimationFrame);
      rafIds.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return (
    <>
      {[0, 1].map((i) => (
        <Image
          key={i}
          src={layers[i]}
          alt="Daniele Mioranza"
          fill
          quality={90}
          sizes="(max-width: 767px) 100vw, 33vw"
          style={{
            objectFit: "cover",
            opacity: active === i ? 1 : 0,
            transition: "opacity 1000ms ease, transform 0.6s ease",
          }}
          priority={priority && i === 0}
        />
      ))}
    </>
  );
}

export default function HeroGrid() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2600);
    return () => clearInterval(id);
  }, []);

  const slots = slotsForTick(tick);

  return (
    <section className="hero-section">
      <div className="hero-grid">
        {slots.map((src, i) => (
          <div key={i} className="hero-card">
            <div className="hero-card-inner">
              <CrossfadeImage src={src} priority={i === 1} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
