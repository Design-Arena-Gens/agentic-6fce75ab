import styles from "./Timeline.module.css";

const events = [
  {
    year: "1964",
    title: "The symmetry breaking insight",
    detail:
      "Peter Higgs and others propose a field permeating the vacuum whose nonzero value breaks electroweak symmetry."
  },
  {
    year: "1989-2000",
    title: "LEP draws the map",
    detail:
      "Data from the Large Electron–Positron collider constrains the Higgs boson mass, sharpening the search window."
  },
  {
    year: "2012",
    title: "Discovery at 4.9 sigma",
    detail:
      "ATLAS and CMS collaborations at CERN announce the observation of a 125 GeV resonance consistent with the Higgs boson."
  },
  {
    year: "2013-2018",
    title: "Properties decoded",
    detail:
      "Coupling strengths and decay channels are measured, confirming the Higgs behaves like the Standard Model predicts."
  },
  {
    year: "Tomorrow",
    title: "Beyond the Standard Model",
    detail:
      "New accelerators and cosmic surveys chase subtle deviations that could reveal composite Higgs sectors or hidden dimensions."
  }
];

export function Timeline() {
  return (
    <section id="timeline" className={styles.timelineSection}>
      <div className="container">
        <div className={styles.heading}>
          <span className="pill">Chronicle</span>
          <h2 className="section-title">Moments that shaped the Higgs narrative</h2>
          <p className="section-description">
            Follow the arc from theoretical spark to experimental confirmation —
            a story of symmetry, persistence, and the world’s most powerful
            machine.
          </p>
        </div>

        <div className={styles.timelineGrid}>
          {events.map((event) => (
            <article key={event.year} className={styles.item}>
              <div className={styles.year}>{event.year}</div>
              <div className={styles.content}>
                <h3>{event.title}</h3>
                <p>{event.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
