import { CheckIcon, CrossIcon } from "./icons";

const IS = [
  "Você sonha em ser modelo mas não sabe por onde começar.",
  "Você já fez algum teste, mas não entende como esse mercado funciona por dentro.",
  "Você quer aprender direto com quem já viveu isso, não em vídeo genérico de internet.",
  "Você está disposta a se preparar de verdade pra fazer bonito na frente de uma agência.",
];

const ISNT = [
  "Você busca uma fórmula mágica sem colocar nada em prática.",
  "Você não está disposta a se expor, testar e receber feedback direto.",
  "Você quer uma promessa de contrato garantido — isso nenhuma consultoria entrega.",
];

export default function AudienceFit() {
  return (
    <section className="mnt-section">
      <span className="mnt-eyebrow">Pra quem é</span>
      <h2 className="mnt-h2">Antes de aplicar, veja se faz sentido pra você</h2>

      <div className="mnt-fit-grid">
        <div className="mnt-fit-col is">
          <h3>É pra você se</h3>
          <ul>
            {IS.map((t) => (
              <li key={t}>
                <span className="mnt-fit-icon">
                  <CheckIcon />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mnt-fit-col isnt">
          <h3>Não é pra você se</h3>
          <ul>
            {ISNT.map((t) => (
              <li key={t}>
                <span className="mnt-fit-icon">
                  <CrossIcon />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
