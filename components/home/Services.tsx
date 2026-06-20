"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-paper-muted dark:bg-ink-surface border-y border-paper-border dark:border-ink-border"
    >
      <Container>
        <SectionHeading
          eyebrow="What We Build"
          title="Complete product lifecycle, one team"
          description="From first idea to ongoing growth — every stage of your product journey, covered with clarity and craft."
        />

        <div className="mt-12 space-y-6">
          {services.map((service, i) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-paper-border dark:border-ink-border min-h-[280px] md:min-h-[320px] ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 1280px"
                />
                <div
                  className={`absolute inset-0 ${
                    i % 2 === 1
                      ? "bg-gradient-to-l from-ink/95 via-ink/85 to-ink/50 md:from-ink/90 md:via-ink/75 md:to-transparent"
                      : "bg-gradient-to-r from-ink/95 via-ink/85 to-ink/50 md:from-ink/90 md:via-ink/75 md:to-transparent"
                  }`}
                />
              </div>

              <div
                className={`relative z-10 flex flex-col justify-center p-8 md:p-12 max-w-xl ${
                  i % 2 === 1 ? "md:ml-auto md:text-right md:items-end" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-brand-teal-light">
                    {String.fromCharCode(65 + i)}. {service.title.split(" ")[0]}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold font-display text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-white/75 leading-relaxed">{service.description}</p>

                <ul
                  className={`mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 ${
                    i % 2 === 1 ? "md:justify-items-end" : ""
                  }`}
                >
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                      <Check className="h-3.5 w-3.5 text-brand-green shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
