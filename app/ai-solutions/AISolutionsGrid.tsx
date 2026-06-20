"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Sparkles, Globe } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { aiSolutions } from "@/lib/data";

const iconMap = {
  "AI Chatbots": Bot,
  "AI Agents": Workflow,
  "Enterprise AI": Sparkles,
  "Custom AI Products": Globe,
} as const;

export function AISolutionsGrid() {
  return (
    <section className="py-12 md:py-16 bg-paper-muted dark:bg-ink-surface border-y border-paper-border dark:border-ink-border">
      <Container>
        <div className="grid md:grid-cols-2 gap-6">
          {aiSolutions.map((category, i) => {
            const Icon = iconMap[category.title as keyof typeof iconMap] ?? Bot;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="card-surface p-8 relative overflow-hidden hover:border-brand-teal/40 transition-colors"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gradient-h opacity-70" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-display font-semibold">{category.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-text-light-muted dark:text-text-dark-muted"
                    >
                      <span className="h-1 w-1 rounded-full bg-brand-teal shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
