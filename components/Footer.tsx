import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <h3>Higgsfield</h3>
            <p>
              Built as a luminous primer on the mechanism that grants matter its
              mass. Wander further into physics, curiosity first.
            </p>
          </div>
          <nav className={styles.nav} aria-label="Footer">
            <a href="#visualizer">Field studio</a>
            <a href="#timeline">Timeline</a>
            <a href="https://home.cern/science/physics/higgs-boson" target="_blank" rel="noreferrer">
              CERN resource
            </a>
          </nav>
        </div>
        <div className={styles.bottomRow}>
          <span>© {new Date().getFullYear()} Higgsfield</span>
          <span className={styles.spark}>Keep questioning the vacuum.</span>
        </div>
      </div>
    </footer>
  );
}
