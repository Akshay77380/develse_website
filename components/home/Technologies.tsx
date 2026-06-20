"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { technologies } from "@/lib/data";

export function Technologies() {
  const groups = Object.entries(technologies);

  return (
    <section className="py-24 section-bg">
      <Container>
        <SectionHeading
          eyebrow="Our Stack"
          title="Modern technology, chosen with purpose"
          description="We use current, proven tools — selected for your project's needs, not forced into a one-size-fits-all template."
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map(([group, items], i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card-surface p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-brand-gradient-h opacity-60" />
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-brand-blue dark:text-brand-teal-light">
                {group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-paper-border dark:border-ink-border px-3 py-1.5 text-sm text-text-light-muted dark:text-text-dark-muted hover:border-brand-teal hover:text-brand-blue dark:hover:text-brand-teal-light transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
