"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { process } from "@/lib/data";

export function Process() {
  return (
    <section className="py-24 section-bg">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="A clear path from idea to launch"
          description="Eight focused stages — no confusing diagrams, just a straightforward process you can follow."
          align="center"
        />

        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-[2.25rem] left-[5%] right-[5%] h-0.5 bg-brand-gradient-h opacity-30" />

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-8 lg:gap-3 lg:overflow-visible lg:pb-0 scrollbar-hide">
            {process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex-shrink-0 w-[200px] lg:w-auto snap-start text-center"
              >
                <div className="relative mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-paper-surface dark:bg-ink-surface border-2 border-brand-teal/30 shadow-sm">
                  <step.icon className="h-6 w-6 text-brand-blue dark:text-brand-teal-light" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-gradient text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display font-semibold text-sm">{step.title}</h3>
                <p className="mt-1.5 text-xs text-text-light-muted dark:text-text-dark-muted leading-relaxed px-1">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
