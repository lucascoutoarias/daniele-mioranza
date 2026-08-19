const ITEMS = [
  {
    title: "Agências",
    desc: "Como identificar quais são sérias e o jeito certo de se apresentar pra elas.",
  },
  {
    title: "Bookers",
    desc: "Indicações de bookers parceiros e como funciona a relação entre modelo e booker.",
  },
  {
    title: "Fotógrafos",
    desc: "Indicações de fotógrafos pra montar seu book com quem entende o mercado.",
  },
  {
    title: "Como abordar",
    desc: "A forma certa de se apresentar pra cada um deles, sem parecer amadora.",
  },
];

export default function NetworkBenefits() {
  return (
    <section className="mnt-section">
      <div className="mnt-network">
        <span className="mnt-eyebrow">O diferencial</span>
        <h2 className="mnt-h2" style={{ marginBottom: 0 }}>
          Contato direto com quem já está dentro do mercado
        </h2>

        <div className="mnt-network-grid">
          {ITEMS.map((item) => (
            <div key={item.title} className="mnt-network-item">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
