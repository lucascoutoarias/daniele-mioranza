"use client";
import { useState, FormEvent } from "react";

const WHATSAPP_NUMBER = "5511977348313";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nome = form.get("nome");
    const idade = form.get("idade");
    const cidade = form.get("cidade");
    const email = form.get("email");
    const whatsapp = form.get("whatsapp");
    const sobre = form.get("sobre");

    const message =
      `Olá, Daniele! Quero aplicar pra consultoria de moda.\n\n` +
      `Nome: ${nome}\n` +
      `Idade: ${idade}\n` +
      `Cidade: ${cidade}\n` +
      `E-mail: ${email}\n` +
      `WhatsApp: ${whatsapp}\n\n` +
      `Sobre mim: ${sobre}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener"
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mnt-form-wrap">
        <div className="mnt-form-success">
          Aplicação enviada! Sua conversa com a Daniele abriu no WhatsApp — é por lá que ela vai
          confirmar sua vaga.
        </div>
      </div>
    );
  }

  return (
    <form className="mnt-form-wrap" onSubmit={onSubmit}>
      <div className="mnt-form-grid">
        <div className="mnt-field">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text" required placeholder="Seu nome completo" />
        </div>
        <div className="mnt-field">
          <label htmlFor="idade">Idade</label>
          <input id="idade" name="idade" type="text" required placeholder="Sua idade" />
        </div>
        <div className="mnt-field">
          <label htmlFor="cidade">Cidade</label>
          <input id="cidade" name="cidade" type="text" required placeholder="Cidade / estado" />
        </div>
        <div className="mnt-field">
          <label htmlFor="whatsapp">WhatsApp</label>
          <input id="whatsapp" name="whatsapp" type="tel" required placeholder="(DDD) 9 9999-9999" />
        </div>
        <div className="mnt-field full">
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" required placeholder="seu@email.com" />
        </div>
        <div className="mnt-field full">
          <label htmlFor="sobre">Conte um pouco sobre você</label>
          <textarea
            id="sobre"
            name="sobre"
            rows={4}
            required
            placeholder="Por que você quer entrar no mundo da moda?"
          />
        </div>
      </div>

      <button type="submit" className="mnt-cta mnt-cta-solid mnt-form-submit">
        Enviar aplicação
      </button>
    </form>
  );
}
