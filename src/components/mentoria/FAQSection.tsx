import { PlusIcon } from "./icons";

const FAQS = [
  {
    q: "A consultoria é online ou presencial?",
    a: "É individual e ao vivo, feita com você diretamente com a Daniele. O formato exato de cada encontro é combinado depois da sua aplicação.",
  },
  {
    q: "Preciso já ter experiência com moda?",
    a: "Não. A consultoria é pensada justamente pra quem está começando e quer entrar com o pé direito, sem gastar tempo tentando descobrir tudo sozinha.",
  },
  {
    q: "Quanto custa?",
    a: "O valor é informado depois da sua aplicação, de acordo com a modalidade de consultoria mais indicada pro seu momento.",
  },
  {
    q: "Quantas vagas tem?",
    a: "Por ser individual, as vagas são limitadas por mês. Depois de enviar sua aplicação, Daniele entra em contato pra confirmar disponibilidade.",
  },
  {
    q: "Depois da consultoria eu já consigo agência?",
    a: "A consultoria te prepara pra abordar agências, montar seu material e se apresentar do jeito certo. A entrada em si depende do seu perfil e do processo de cada agência.",
  },
];

export default function FAQSection() {
  return (
    <section className="mnt-section">
      <span className="mnt-eyebrow">Perguntas frequentes</span>
      <h2 className="mnt-h2">O que você precisa saber antes de aplicar</h2>

      <div>
        {FAQS.map((f) => (
          <details key={f.q} className="mnt-faq-item">
            <summary>
              {f.q}
              <span className="mnt-faq-plus">
                <PlusIcon />
              </span>
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
