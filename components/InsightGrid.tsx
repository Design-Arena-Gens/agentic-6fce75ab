import styles from "./InsightGrid.module.css";

const insights = [
  {
    title: "Vacuum with personality",
    blurb:
      "Unlike emptiness, the Higgs field has a vacuum expectation value. Particles experience it even at rest, sourcing their mass."
  },
  {
    title: "Mass through interaction",
    blurb:
      "Mass isn’t an ingredient tucked inside particles. It is the drag that arises every time they couple to the Higgs condensate."
  },
  {
    title: "Symmetry breaking",
    blurb:
      "When the field settled into a nonzero value, the unified electroweak force split, defining distinct identities for photons and weak bosons."
  }
];

export function InsightGrid() {
  return (
    <section className={styles.insightSection}>
      <div className="container">
        <div className={styles.grid}>
          {insights.map((insight) => (
            <article key={insight.title} className={styles.card}>
              <div className={styles.badge} aria-hidden>
                <span />
              </div>
              <h3>{insight.title}</h3>
              <p>{insight.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
