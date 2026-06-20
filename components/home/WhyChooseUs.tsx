"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { trustIndicators } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-paper-muted dark:bg-ink-surface border-y border-paper-border dark:border-ink-border">
      <Container>
        <SectionHeading
          eyebrow="Why DevElse"
          title="Built on trust, not inflated numbers"
          description="We're a new company — our credibility comes from how we work, the technology we use, and the commitment we bring to every project."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustIndicators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="card-surface p-6 hover:border-brand-teal/40 transition-colors duration-300 group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gradient text-white mb-4 group-hover:scale-105 transition-transform">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-base">{item.title}</h3>
              <p className="mt-2 text-sm text-text-light-muted dark:text-text-dark-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
