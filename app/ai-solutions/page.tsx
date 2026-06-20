import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Brain } from "lucide-react";
import { Container, Eyebrow, Button } from "@/components/ui/primitives";
import { CTASection } from "@/components/home/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { AISolutionsGrid } from "./AISolutionsGrid";

export const metadata: Metadata = createPageMetadata({
  title: "AI Solutions — Chatbots, Agents & Enterprise AI",
  description:
    "Hire DevElse for AI chatbots, autonomous agents, RAG systems, and custom AI products built with GPT, Claude, Gemini, and open-source models. Mumbai, India.",
  path: "/ai-solutions",
  keywords: [
    "AI chatbot development India",
    "AI agent development company",
    "RAG system development",
    "enterprise AI solutions Mumbai",
    "generative AI development services",
  ],
});

export default function AISolutionsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "AI Solutions", path: "/ai-solutions" },
        ])}
      />
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 section-bg">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80"
            alt=""
            fill
            className="object-cover opacity-[0.07] dark:opacity-[0.12]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/95 to-paper dark:from-ink dark:via-ink/95 dark:to-ink" />
        </div>

        <Container className="max-w-3xl relative">
          <Eyebrow>
            <Brain className="h-3.5 w-3.5" /> AI Solutions
          </Eyebrow>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold font-display tracking-tight">
            AI that earns its place in your product
          </h1>
          <p className="mt-5 text-lg text-text-light-muted dark:text-text-dark-muted">
            We don&apos;t bolt AI onto a roadmap because it&apos;s trending. We identify where a
            model can genuinely remove friction — for your customers, your team, or your data —
            and build that carefully on GPT, Claude, Gemini, and open models where they fit best.
          </p>
          <Button href="/contact" variant="primary" className="mt-7">
            Get Free Consultation <ArrowRight className="h-4 w-4" />
          </Button>
        </Container>
      </section>

      <AISolutionsGrid />
      <CTASection />
    </>
  );
}
