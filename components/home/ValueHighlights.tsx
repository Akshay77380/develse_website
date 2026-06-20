"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/primitives";
import { valueHighlights } from "@/lib/data";

export function ValueHighlights() {
  return (
    <section className="py-16 border-y border-paper-border dark:border-ink-border bg-paper-muted dark:bg-ink-surface">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueHighlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex gap-4 p-5 rounded-xl border border-paper-border dark:border-ink-border hover:border-brand-teal/40 transition-colors"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm">{item.title}</h3>
                <p className="mt-1 text-sm text-text-light-muted dark:text-text-dark-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
