import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle, CalendarClock } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata, localBusinessJsonLd } from "@/lib/seo";
import { company } from "@/lib/data";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us — Free Software Consultation",
  description:
    "Contact DevElse Services for a free software and AI development consultation. Mobile apps, web platforms, AI solutions. Based in Mumbai, India — reply within one business day.",
  path: "/contact",
  keywords: [
    "contact software development company Mumbai",
    "free IT consultation India",
    "hire app developers Mumbai",
    "AI development quote",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
    <section className="relative pt-16 pb-24 md:pt-24 section-bg">
      <Container>
        <Eyebrow>Contact Us</Eyebrow>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold font-display tracking-tight max-w-2xl">
          Let&apos;s talk about what you&apos;re building
        </h1>
        <p className="mt-5 text-lg text-text-light-muted dark:text-text-dark-muted max-w-2xl">
          Share a few details below and we&apos;ll get back to you within one business day with
          next steps — no pressure, no generic sales deck.
        </p>

        <div className="mt-12 grid lg:grid-cols-[1.1fr_1fr] gap-10">
          <ContactForm />

          <div className="space-y-6">
            <div className="card-surface p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gradient-h" />
              <h2 className="font-display font-semibold text-lg mb-4">Contact Information</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-0.5 text-brand-blue dark:text-brand-teal-light" />
                  <a
                    href={`mailto:${company.email}`}
                    className="hover:text-brand-blue dark:hover:text-brand-teal-light transition-colors"
                  >
                    {company.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-0.5 text-brand-blue dark:text-brand-teal-light" />
                  <a
                    href={`tel:${company.phone}`}
                    className="hover:text-brand-blue dark:hover:text-brand-teal-light transition-colors"
                  >
                    {company.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-brand-blue dark:text-brand-teal-light" />
                  <span className="text-text-light-muted dark:text-text-dark-muted">
                    Mumbai, Maharashtra, India
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-4 w-4 mt-0.5 text-brand-blue dark:text-brand-teal-light" />
                  <span className="text-text-light-muted dark:text-text-dark-muted">
                    Mon–Sat, 10:00 AM – 7:00 PM IST
                  </span>
                </li>
              </ul>

              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>

            <div className="card-surface p-6">
              <h2 className="font-display font-semibold text-lg mb-2 flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-brand-blue dark:text-brand-teal-light" />{" "}
                Schedule a Call
              </h2>
              <p className="text-sm text-text-light-muted dark:text-text-dark-muted">
                Prefer to talk it through? Mention a few time slots in the project description, or
                call us directly — we&apos;ll confirm a slot the same day.
              </p>
            </div>

            <div className="card-surface overflow-hidden">
              <iframe
                title="DevElse Services location — Mumbai, Maharashtra"
                src="https://maps.google.com/maps?q=Mumbai%2C%20Maharashtra%2C%20India&output=embed"
                className="h-52 w-full border-0 grayscale-[30%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
