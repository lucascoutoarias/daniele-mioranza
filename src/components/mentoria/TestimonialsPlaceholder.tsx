import { StarIcon } from "./icons";

/**
 * Placeholder — sem depoimentos reais ainda (primeira turma).
 * Trocar os 3 cards abaixo por depoimentos reais assim que existirem.
 */
export default function TestimonialsPlaceholder() {
  return (
    <section className="mnt-section">
      <span className="mnt-eyebrow">O que dizem as alunas</span>
      <h2 className="mnt-h2">Espaço reservado pra próxima turma</h2>
      <p className="mnt-testi-note">
        [Placeholder] Esta é a primeira turma da consultoria — assim que os primeiros depoimentos
        chegarem, eles entram aqui.
      </p>

      <div className="mnt-testi-grid">
        {[1, 2, 3].map((i) => (
          <div key={i} className="mnt-testi-card">
            <div className="mnt-testi-stars">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p>&ldquo;[Depoimento em breve]&rdquo;</p>
            <div className="mnt-testi-name">Aluna da consultoria</div>
          </div>
        ))}
      </div>
    </section>
  );
}
