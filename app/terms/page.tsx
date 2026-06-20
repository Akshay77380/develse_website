import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using the website and services of ${company.name}.`,
};

export default function TermsPage() {
  return (
    <section className="pt-16 pb-24 md:pt-24">
      <Container className="max-w-2xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-6 text-3xl md:text-4xl font-bold font-display">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-text-light-muted dark:text-text-dark-muted">
          Last updated: June 2026
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-text-light-muted dark:text-text-dark-muted">
          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              1. Agreement
            </h2>
            <p>
              By accessing this website or engaging {company.name} for services, you agree to these
              Terms &amp; Conditions. If you do not agree, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              2. Services
            </h2>
            <p>
              We provide software development, AI solutions, design, consulting, and related
              technology services. Specific scope, deliverables, timelines, and fees are defined in
              a separate proposal or service agreement for each project.
            </p>
          </section>

          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              3. Intellectual Property
            </h2>
            <p>
              Unless otherwise agreed in writing, intellectual property for custom work developed
              for a client transfers upon full payment. Pre-existing tools, frameworks, and
              libraries remain the property of their respective owners. {company.name} retains the
              right to showcase non-confidential work in its portfolio unless restricted by NDA.
            </p>
          </section>

          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              4. Payment Terms
            </h2>
            <p>
              Payment schedules are outlined in project proposals. Late payments may pause work until
              accounts are settled. Third-party costs (hosting, APIs, licenses) are billed separately
              unless included in the agreed scope.
            </p>
          </section>

          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              5. Confidentiality
            </h2>
            <p>
              Both parties agree to keep confidential information shared during engagements private,
              except where disclosure is required by law or explicitly authorized in writing.
            </p>
          </section>

          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, {company.name} is not liable for indirect,
              incidental, or consequential damages. Our total liability for any claim is limited to
              the fees paid for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              7. Website Use
            </h2>
            <p>
              Website content is provided for general information. We make reasonable efforts to keep
              information accurate but do not guarantee completeness. Unauthorized use of site
              content, branding, or code is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              8. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of India. Disputes shall be subject to the
              jurisdiction of courts in Mumbai, Maharashtra.
            </p>
          </section>

          <section>
            <h2 className="text-base font-display font-semibold text-text-light dark:text-text-dark mb-2">
              9. Contact
            </h2>
            <p>
              Questions about these terms? Contact us at{" "}
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
