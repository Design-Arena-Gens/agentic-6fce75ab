import styles from "./ExperimentDeck.module.css";

const experiments = [
  {
    name: "ATLAS",
    focus: "General-purpose detector",
    summary:
      "Measured Higgs decays into photons, Z bosons, and tau leptons to pin down couplings.",
    link: "https://atlas.cern/Discover/Particle-Physics/Higgs-Boson"
  },
  {
    name: "CMS",
    focus: "Compact Muon Solenoid",
    summary:
      "Confirmed the 125 GeV resonance and mapped spin-parity, ruling out many exotic alternatives.",
    link: "https://cms.cern/detector/physics/higgs-boson"
  },
  {
    name: "Future Circular Collider",
    focus: "Proposed precision machine",
    summary:
      "Aims for Higgs factories that can reveal subtle deviations hinting at new physics.",
    link: "https://home.cern/science/accelerators/future-circular-collider"
  }
];

export function ExperimentDeck() {
  return (
    <section className={styles.deckSection}>
      <div className="container">
        <div className="glass-card">
          <div className={styles.header}>
            <span className="pill">Colliders & Collaborations</span>
            <h2 className="section-title">Who listens to the Higgs field?</h2>
            <p className="section-description">
              Detectors spanning the circumference of Geneva tuned their sensors
              to a whisper in the quantum vacuum. Meet the teams that turned the
              Higgs from hypothesis into headline.
            </p>
          </div>

          <div className={styles.deckGrid}>
            {experiments.map((experiment) => (
              <article key={experiment.name} className={styles.card}>
                <header>
                  <h3>{experiment.name}</h3>
                  <span>{experiment.focus}</span>
                </header>
                <p>{experiment.summary}</p>
                <a
                  href={experiment.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  Read more ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
