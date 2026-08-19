import { CheckIcon } from "./icons";

const ITEMS = [
  {
    title: "Abordagem às agências",
    desc: "Como funciona o agenciamento e o papel da agência na vida de um modelo.",
  },
  {
    title: "Vestimentas para teste",
    desc: "O que levar e o que evitar na hora de se apresentar pra uma agência ou casting.",
  },
  {
    title: "Poses essenciais",
    desc: "As poses que todo modelo iniciante precisa dominar antes do primeiro teste.",
  },
  {
    title: "Digitais e vídeo de apresentação",
    desc: "Como fazer digitais e um vídeo de apresentação que realmente representam você.",
  },
  {
    title: "Tipos de teste: casting e VT",
    desc: "A diferença entre os dois, o que cada um avalia e como se preparar.",
  },
  {
    title: "Bastidores das câmeras",
    desc: "Como funciona um set por dentro, na visão de quem já viveu isso na pele.",
  },
  {
    title: "Comportamento profissional",
    desc: "Como se portar com agência, fotógrafo e equipe pra ser chamada de novo.",
  },
];

export default function CurriculumSection() {
  return (
    <section className="mnt-section">
      <span className="mnt-eyebrow">Sobre a consultoria</span>
      <h2 className="mnt-h2">O passo a passo pra você começar do jeito certo</h2>
      <p className="mnt-lede">
        Daniele Mioranza é modelo profissional há mais de 10 anos. Nessa consultoria, ela ensina
        o que aprendeu no mercado real pra você dar os primeiros passos dentro do mundo da moda
        e começar uma carreira promissora como modelo.
      </p>

      <div className="mnt-curriculum-list">
        {ITEMS.map((item) => (
          <div key={item.title} className="mnt-curriculum-item">
            <span className="mnt-curriculum-icon">
              <CheckIcon />
            </span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
