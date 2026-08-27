"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    return {
      mode: "B",
      faceCursor: frame.faceCursor + 1,
      bodyCursor: frame.bodyCursor + 2,
    };
  }
  return {
    mode: "A",
    faceCursor: frame.faceCursor + 2,
    bodyCursor: frame.bodyCursor + 1,
  };
}

function slotsFor(frame: Frame): string[] {
  const face = (n: number) => FACES[n % FACES.length];
  const body = (n: number) => BODIES[n % BODIES.length];

  if (frame.mode === "A") {
    return [face(frame.faceCursor), body(frame.bodyCursor), face(frame.faceCursor + 1)];
  }
  return [body(frame.bodyCursor), face(frame.faceCursor), body(frame.bodyCursor + 1)];
}

export default function HeroGrid() {
  const [frame, setFrame] = useState<Frame>({ mode: "A", faceCursor: 0, bodyCursor: 0 });

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => nextFrame(f)), 1800);
    return () => clearInterval(id);
  }, []);

  const slots = slotsFor(frame);

  return (
    <section className="hero-section">
      <div className="hero-grid">
        {slots.map((src, i) => (
          <div key={i} className="hero-card">
            <div className="hero-card-inner">
              <Image
                key={src}
                src={src}
                alt="Daniele Mioranza"
                fill
                sizes="(max-width: 767px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={i === 1}
                className="hero-card-fade"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
