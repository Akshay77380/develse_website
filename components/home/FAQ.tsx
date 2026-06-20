"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <div>
            <SectionHeading
              eyebrow="Common Questions"
              title="Answers before you ask"
              description="Still curious about something specific? Reach out — we reply within one business day."
            />
          </div>

          <div className="divide-y divide-paper-border dark:divide-ink-border">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.question} className="py-5">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="focus-ring flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold">{faq.question}</span>
                    <Plus className={`h-4 w-4 shrink-0 text-brand-blue dark:text-brand-teal-light transition-transform ${isOpen ? "rotate-45" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-sm text-text-light-muted dark:text-text-dark-muted leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
