import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${company.name} — how we collect, use, and protect your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-16 pb-24 md:pt-24">
      <Container className="max-w-2xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-6 text-3xl md:text-4xl font-bold font-display">Privacy Policy</h1>
        <p className="mt-3 text-sm text-text-light-muted dark:text-text-dark-muted">
          Last updated: June 2026
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-text-light-muted dark:text-text-dark-muted">
          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              1. Introduction
            </h2>
            <p>
              {company.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy.
              This policy explains what information we collect through our website and how we use it.
            </p>
          </section>

          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              2. Information We Collect
            </h2>
            <p>When you contact us, we may collect:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Name, email address, and phone number</li>
              <li>Company name and project details you provide</li>
              <li>Budget range and service preferences</li>
              <li>Technical data such as browser type and pages visited (via standard analytics, if enabled)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              3. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Respond to inquiries and provide consultations</li>
              <li>Prepare proposals and project estimates</li>
              <li>Communicate about services you requested</li>
              <li>Improve our website and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              4. Data Sharing
            </h2>
            <p>
              We do not sell your personal information. We may share data with trusted service
              providers (such as email or hosting services) only as needed to operate our business,
              and only under appropriate confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              5. Data Retention &amp; Security
            </h2>
            <p>
              We retain contact information for as long as needed to respond to your inquiry or
              maintain a business relationship. We implement reasonable technical and organizational
              measures to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              6. Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your personal data by
              contacting us at{" "}
              <a href={`mailto:${company.email}`} className="text-brand-blue dark:text-brand-teal-light hover:underline">
                {company.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              7. Contact
            </h2>
            <p>
              For privacy-related questions, contact {company.name} at{" "}
              <a href={`mailto:${company.email}`} className="text-brand-blue dark:text-brand-teal-light hover:underline">
                {company.email}
              </a>{" "}
              or {company.phone}.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
