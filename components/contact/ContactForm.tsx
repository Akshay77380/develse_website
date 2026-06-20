"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/primitives";
import { serviceOptions, budgetRanges, company } from "@/lib/data";

const inputClasses =
  "focus-ring w-full rounded-xl border border-paper-border dark:border-ink-border bg-paper dark:bg-ink px-4 py-2.5 text-sm placeholder:text-text-light-muted/50 dark:placeholder:text-text-dark-muted/50";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  service: string;
  budget: string;
  description: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  service: serviceOptions[0],
  budget: budgetRanges[0],
  description: "",
};

export function ContactForm() {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.description) {
      setError("Please fill in your name, email, and a short project description.");
      return;
    }
    setError(null);

    const subject = encodeURIComponent(`Project Inquiry: ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone || "Not provided"}\nCompany: ${form.companyName || "Not provided"}\nService: ${form.service}\nBudget: ${form.budget}\n\nProject Description:\n${form.description}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-surface p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand-teal mx-auto" />
        <h3 className="mt-4 text-xl font-display font-semibold">Ready to send</h3>
        <p className="mt-2 text-sm text-text-light-muted dark:text-text-dark-muted">
          Your email client should open with your message pre-filled. If it didn&apos;t, email us
          directly at{" "}
          <a href={`mailto:${company.email}`} className="text-brand-blue dark:text-brand-teal-light hover:underline">
            {company.email}
          </a>
          . We reply within one business day.
        </p>
        <Button variant="secondary" className="mt-6" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="card-surface p-6 md:p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <input
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            type="text"
            placeholder="Your name"
            className={inputClasses}
          />
        </Field>
        <Field label="Email Address" required>
          <input
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            type="email"
            placeholder="you@company.com"
            className={inputClasses}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Phone Number">
          <input
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            type="tel"
            placeholder="+91 00000 00000"
            className={inputClasses}
          />
        </Field>
        <Field label="Company Name">
          <input
            value={form.companyName}
            onChange={(e) => update("companyName", e.target.value)}
            type="text"
            placeholder="Your company"
            className={inputClasses}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Service Required">
          <select value={form.service} onChange={(e) => update("service", e.target.value)} className={inputClasses}>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget Range">
          <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className={inputClasses}>
            {budgetRanges.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project Description" required>
        <textarea
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          rows={5}
          placeholder="What are you trying to build?"
          className={`${inputClasses} resize-none`}
        />
      </Field>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Send Message <Send className="h-4 w-4" />
      </Button>
    </motion.form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase tracking-wide text-text-light-muted dark:text-text-dark-muted">
        {label} {required && <span className="text-brand-blue dark:text-brand-teal-light">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
