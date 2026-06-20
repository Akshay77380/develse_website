import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ValueHighlights } from "@/components/home/ValueHighlights";
import { About } from "@/components/home/About";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Technologies } from "@/components/home/Technologies";
import { FAQ } from "@/components/home/FAQ";
import { CTASection } from "@/components/home/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata, faqJsonLd, localBusinessJsonLd, serviceListJsonLd } from "@/lib/seo";
import { faqs, services } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "AI Development & Software Company in Mumbai, India",
  description: siteConfig.description,
  path: "/",
  keywords: [
    "hire AI development company",
    "software development Mumbai",
    "free software consultation India",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          faqJsonLd(faqs),
          serviceListJsonLd(
            services.map((s) => ({ title: s.title, description: s.description })),
          ),
        ]}
      />
      <Hero />
      <ValueHighlights />
      <About />
      <Services />
      <Process />
      <WhyChooseUs />
      <Technologies />
      <FAQ />
      <CTASection />
    </>
  );
}
