import ApplicationForm from "./ApplicationForm";

export default function ClosingSection() {
  return (
    <section id="aplicar" className="mnt-section mnt-closing">
      <span className="mnt-eyebrow">Aplicação</span>
      <h2 className="mnt-h2">Descubra seu diferencial e comece com o pé direito</h2>
      <p className="mnt-lede">
        Daniele Mioranza traz uma abordagem única, com experiência prática, sensibilidade
        estética e técnica avançada pra elevar sua carreira de modelo. Preencha o formulário
        abaixo pra aplicar: sua mensagem abre direto no WhatsApp da Daniele.
      </p>

      <ApplicationForm />
    </section>
  );
}
