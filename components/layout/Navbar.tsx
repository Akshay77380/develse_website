"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container, Button } from "@/components/ui/primitives";
import { ThemeToggle } from "@/components/theme/theme";
import { Logo } from "@/components/brand/Logo";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 dark:bg-ink/90 backdrop-blur-md border-b border-paper-border dark:border-ink-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between gap-4 h-16 sm:h-[4.5rem]">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-light-muted dark:text-text-dark-muted hover:text-brand-blue dark:hover:text-brand-teal-light transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button href="/contact" variant="primary" className="text-xs px-5 py-2.5">
            Get Free Consultation
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-paper-border dark:border-ink-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-paper-border dark:border-ink-border bg-paper dark:bg-ink">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium border-b border-paper-border/60 dark:border-ink-border/60 last:border-none"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="mt-4 w-full">
              Get Free Consultation
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
