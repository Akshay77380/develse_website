"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("container-x", className)}>{children}</div>;
}

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-brand shadow-[0_4px_20px_rgba(0,102,179,0.25)]",
  secondary:
    "bg-transparent border border-text-light/20 dark:border-text-dark/20 text-text-light dark:text-text-dark hover:border-brand-teal hover:text-brand-blue dark:hover:text-brand-teal-light",
  ghost:
    "bg-transparent text-text-light dark:text-text-dark hover:text-brand-blue dark:hover:text-brand-teal-light",
};

export function Button({ variant = "primary", href, className, children, type = "button", onClick }: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200",
    variantClasses[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-2", className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient animate-pulse-line" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-text-light-muted dark:text-text-dark-muted text-base md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export function SignalDivider({ className }: { className?: string }) {
  return <div className={cn("signal-divider", className)} />;
}

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-paper-border dark:border-ink-border px-3 py-1 text-xs font-mono text-text-light-muted dark:text-text-dark-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
