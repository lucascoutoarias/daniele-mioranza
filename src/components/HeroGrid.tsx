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

type Frame = { mode: "A" | "B"; faceCursor: number; bodyCursor: number };

// mode A: rosto | corpo | rosto — mode B: corpo | rosto | corpo
// os cursores avançam pelas duas listas sem repetir, trocando o padrão a cada troca
function nextFrame(frame: Frame): Frame {
  if (frame.mode === "A") {
    return { mode: "B", faceCursor: frame.faceCursor + 1, bodyCursor: frame.bodyCursor + 2 };
  }
  return { mode: "A", faceCursor: frame.faceCursor + 2, bodyCursor: frame.bodyCursor + 1 };
}

function slotsFor(frame: Frame): string[] {
  const face = (n: number) => FACES[n % FACES.length];
  const body = (n: number) => BODIES[n % BODIES.length];

  if (frame.mode === "A") {
    return [face(frame.faceCursor), body(frame.bodyCursor), face(frame.faceCursor + 1)];
  }
  return [body(frame.bodyCursor), face(frame.faceCursor), body(frame.bodyCursor + 1)];
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
          unoptimized
          quality={100}
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
  const [frame, setFrame] = useState<Frame>({ mode: "A", faceCursor: 0, bodyCursor: 0 });

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => nextFrame(f)), 2600);
    return () => clearInterval(id);
  }, []);

  const slots = slotsFor(frame);

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
