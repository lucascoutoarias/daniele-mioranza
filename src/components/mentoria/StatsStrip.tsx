const STATS = [
  { num: "10+", label: "Anos de carreira" },
  { num: "50+", label: "Marcas" },
  { num: "100+", label: "Campanhas" },
];

export default function StatsStrip() {
  return (
    <section className="mnt-section" style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div className="mnt-stats">
        {STATS.map((s) => (
          <div key={s.label} className="mnt-stat">
            <div className="mnt-stat-num">{s.num}</div>
            <div className="mnt-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
