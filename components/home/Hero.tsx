"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Container, Button, Eyebrow } from "@/components/ui/primitives";
import { Logo } from "@/components/brand/Logo";
import { company } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 bg-paper dark:bg-ink">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-brand-gradient opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <Container className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>
            <Sparkles className="h-3.5 w-3.5" /> AI-First Software Development Company
          </Eyebrow>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            {company.tagline}
          </h1>
          <p className="mt-6 text-lg text-text-light-muted dark:text-text-dark-muted max-w-lg">
            {company.name} is a newly established technology company building innovative mobile
            apps, AI-powered applications, web platforms, and enterprise software — with a clear
            vision for the future of intelligent products.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary">
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary">
              <Calendar className="h-4 w-4" /> Schedule a Call
            </Button>
            <Button href="/#services" variant="ghost">
              View Services
            </Button>
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-text-light-muted/70 dark:text-text-dark-muted/70">
            {company.secondaryTagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex items-center justify-center w-full lg:justify-end"
        >
          <Logo size="hero" href={null} />
        </motion.div>
      </Container>
    </section>
  );
}
