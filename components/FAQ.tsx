"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "Is the Higgs field everywhere?",
    answer:
      "Yes. The field permeates all of spacetime. Particles moving through it experience resistance that we perceive as mass."
  },
  {
    question: "Do all particles interact with the field?",
    answer:
      "Not equally. Photons have no coupling to the Higgs field, which is why they remain massless, while W and Z bosons couple strongly."
  },
  {
    question: "Why was discovery so hard?",
    answer:
      "The Higgs boson is unstable and extraordinarily rare. Huge datasets and precise background modeling were required to spot its decays."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <span className="pill">Questions</span>
            <h2 className="section-title">Higgs field quick answers</h2>
          </div>

          <div className={styles.list}>
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <button
                  type="button"
                  key={faq.question}
                  className={`${styles.item} ${isOpen ? styles.open : ""}`}
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.prompt}>
                    <span>{faq.question}</span>
                    <span className={styles.icon} aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                  <p className={styles.answer}>{faq.answer}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
