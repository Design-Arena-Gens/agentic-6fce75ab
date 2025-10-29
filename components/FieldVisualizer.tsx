"use client";

import { useMemo, useState } from "react";
import styles from "./FieldVisualizer.module.css";

const STATES = [
  {
    threshold: 15,
    label: "Almost massless",
    description:
      "Particles glide effortlessly — the Higgs field barely tugs on them."
  },
  {
    threshold: 45,
    label: "Mass emerging",
    description:
      "The field generates resistance. Particles begin to carry inertia."
  },
  {
    threshold: 75,
    label: "Massive matter",
    description: "The Higgs field hums intensely. Matter becomes unmistakably heavy."
  },
  {
    threshold: 100,
    label: "Symmetry shattered",
    description:
      "Electroweak symmetry breaks; W and Z bosons receive their mass signatures."
  }
];

function getFieldState(strength: number) {
  return STATES.find((state) => strength <= state.threshold) ?? STATES.at(-1)!;
}

export function FieldVisualizer() {
  const [fieldStrength, setFieldStrength] = useState(62);

  const effectiveMass = useMemo(() => {
    const normalized = fieldStrength / 100;
    return (normalized * normalized * 172).toFixed(1);
  }, [fieldStrength]);

  const interactionRate = useMemo(() => {
    const normalized = fieldStrength / 100;
    return Math.round(60 + normalized * 140);
  }, [fieldStrength]);

  const coherence = useMemo(() => {
    const normalized = fieldStrength / 100;
    return Math.round(95 - normalized * 50);
  }, [fieldStrength]);

  const state = getFieldState(fieldStrength);

  return (
    <section id="visualizer" className={styles.visualizerSection}>
      <div className="container">
        <div className="glass-card">
          <div className={styles.header}>
            <span className="pill">Interactive field studio</span>
            <h2 className="section-title">Dial the Higgs field</h2>
            <p className="section-description">
              Adjust the strength of the Higgs field to see how particles gain
              mass. The visualization loosely follows the Higgs mechanism — mass
              comes from interaction, not from intrinsic substance.
            </p>
          </div>

          <div className={styles.controls}>
            <label className={styles.label} htmlFor="field-strength">
              Field strength
              <span>{fieldStrength}%</span>
            </label>
            <input
              id="field-strength"
              type="range"
              min={0}
              max={100}
              value={fieldStrength}
              onChange={(event) => setFieldStrength(Number(event.target.value))}
              className={styles.slider}
            />

            <div className={styles.sliderAura} aria-hidden>
              <div
                className={styles.sliderPulse}
                style={{
                left: `${fieldStrength}%`
                }}
              />
            </div>
          </div>

          <div className={styles.metricsGrid}>
            <article className={styles.metricCard}>
              <span className={styles.metricLabel}>Effective mass (GeV/c²)</span>
              <strong className={styles.metricValue}>{effectiveMass}</strong>
              <p>
                portrays top quark mass-scale mapping the resonance of the Higgs
                field into observable inertia.
              </p>
            </article>

            <article className={styles.metricCard}>
              <span className={styles.metricLabel}>Interaction rate</span>
              <strong className={styles.metricValue}>{interactionRate} / µs</strong>
              <p>
                a playful proxy for coupling strength — higher values mean the
                field is busy sculpting matter.
              </p>
            </article>

            <article className={styles.metricCard}>
              <span className={styles.metricLabel}>Quantum coherence</span>
              <strong className={styles.metricValue}>{coherence}%</strong>
              <p>
                the lingering symmetry of the electroweak force before the Higgs
                field tilts the vacuum away from perfection.
              </p>
            </article>
          </div>

          <div className={styles.stateCard}>
            <h3>{state.label}</h3>
            <p>{state.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
