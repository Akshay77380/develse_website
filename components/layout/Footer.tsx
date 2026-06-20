"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, Phone, Linkedin, Twitter, Instagram, Github, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/primitives";
import { Logo } from "@/components/brand/Logo";
import { company, navLinks, services } from "@/lib/data";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="border-t border-paper-border dark:border-ink-border bg-ink text-text-dark">
      <div className="h-1 bg-brand-gradient-h" />
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Logo size="footer" href="/" />
            <p className="mt-3 max-w-sm text-sm text-text-dark-muted">
              {company.name} builds AI-powered mobile apps, web platforms, and enterprise software
              with a focus on innovation, quality, and long-term partnership.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {[Linkedin, Twitter, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ink-border hover:border-brand-teal hover:text-brand-teal-light transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="eyebrow mb-4 !text-brand-teal-light">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-dark-muted hover:text-brand-teal-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4 !text-brand-teal-light">Services</h4>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/#services"
                    className="text-text-dark-muted hover:text-brand-teal-light transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-4 !text-brand-teal-light">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 text-text-dark-muted hover:text-brand-teal-light transition-colors"
                >
                  <Mail className="h-4 w-4" /> {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-2 text-text-dark-muted hover:text-brand-teal-light transition-colors"
                >
                  <Phone className="h-4 w-4" /> {company.phone}
                </a>
              </li>
            </ul>

            <form onSubmit={handleSubscribe} className="mt-6">
              <label
                htmlFor="newsletter"
                className="text-xs font-mono uppercase tracking-wide text-text-dark-muted"
              >
                Newsletter
              </label>
              <div className="mt-2 flex items-center gap-2">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="focus-ring flex-1 rounded-full border border-ink-border bg-ink-surface px-4 py-2 text-sm text-text-dark placeholder:text-text-dark-muted/60"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white hover:opacity-90 transition-opacity"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {subscribed && (
                <p className="mt-2 text-xs text-brand-teal-light">
                  Subscribed — thanks for following along.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-ink-border pt-6 text-xs text-text-dark-muted">
          <p>© 2026 {company.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-teal-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-teal-light transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
