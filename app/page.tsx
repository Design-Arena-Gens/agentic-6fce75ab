import { FAQ } from "@/components/FAQ";
import { ExperimentDeck } from "@/components/ExperimentDeck";
import { FieldVisualizer } from "@/components/FieldVisualizer";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InsightGrid } from "@/components/InsightGrid";
import { Timeline } from "@/components/Timeline";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.backgroundNoise} aria-hidden />
      <Hero />
      <InsightGrid />
      <FieldVisualizer />
      <Timeline />
      <section className={styles.breaker}>
        <div className="container">
          <div className="glass-card">
            <h2>Why the Higgs field matters</h2>
            <p>
              Without it, the equations of the early universe predict a
              weightless world where atoms cannot form. The Higgs field stitched
              structure into the cosmos by letting matter resist motion.
            </p>
          </div>
        </div>
      </section>
      <ExperimentDeck />
      <FAQ />
      <Footer />
    </main>
  );
}
