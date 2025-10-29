"use client";

import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.copy}>
            <span className="pill">
              <span className={styles.glowDot} aria-hidden />
              Quantum Origins
            </span>
            <h1>
              Tuning into the <span className={styles.highlight}>Higgs field</span>
            </h1>
            <p>
              Trace the invisible field that gives mass to matter. Journey through
              the theory, the experiment, and the cosmic stories that define the
              Higgs field — all in one immersive experience.
            </p>
            <div className={styles.ctaGroup}>
              <Link className="btn" href="#visualizer">
                Explore the field
              </Link>
              <Link className={styles.secondaryCta} href="#timeline">
                Discover the timeline
              </Link>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.orbital}>
              <div className={styles.particleCore}>
                <span className={styles.coreGlow} aria-hidden />
                <span className={styles.coreGlowSecondary} aria-hidden />
                <span className={styles.coreLabel}>Mass</span>
              </div>
              <div className={styles.orbit} aria-hidden />
              <div className={styles.orbitSecondary} aria-hidden />
              <div className={styles.orbitTrail} aria-hidden />
            </div>
            <p className={styles.annotation}>
              “Particles dancing in the Higgs field create the sensation of mass.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
