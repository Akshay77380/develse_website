"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { aboutVision, aboutMission, companyValues, company } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-24 section-bg">
      <Container>
        <SectionHeading
          eyebrow="About Us"
          title="A new company with a bold vision"
          description={company.foundedNote}
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-surface p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gradient-h" />
            <h3 className="text-xl font-bold font-display text-brand-gradient">{aboutVision.title}</h3>
            <p className="mt-4 text-text-light-muted dark:text-text-dark-muted leading-relaxed">
              {aboutVision.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-surface p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gradient-h" />
            <h3 className="text-xl font-bold font-display text-brand-gradient">{aboutMission.title}</h3>
            <p className="mt-4 text-text-light-muted dark:text-text-dark-muted leading-relaxed">
              {aboutMission.description}
            </p>
          </motion.div>
        </div>

        <div className="mt-10">
          <h3 className="font-display font-semibold text-lg mb-6">Our Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {companyValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="card-surface p-6 hover:border-brand-teal/40 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue dark:text-brand-teal-light mb-4">
                  <value.icon className="h-5 w-5" />
                </div>
                <h4 className="font-display font-semibold text-base">{value.title}</h4>
                <p className="mt-2 text-sm text-text-light-muted dark:text-text-dark-muted leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
