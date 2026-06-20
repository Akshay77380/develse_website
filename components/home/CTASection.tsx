"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container, Button } from "@/components/ui/primitives";

export function CTASection() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 text-center"
        >
          <div className="absolute inset-0 bg-brand-gradient opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
              Ready to build something great?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-white/85">
              Tell us about your idea. We&apos;ll give you an honest assessment, a clear plan, and
              a path to a product you can be proud of.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/contact"
                variant="secondary"
                className="!bg-white !text-brand-blue !border-white hover:!bg-white/90"
              >
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                className="!text-white !border-white/40 hover:!border-white hover:!bg-white/10"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
