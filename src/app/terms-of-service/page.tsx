import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the use of Craftora Studio software consultancy services and educational learning resources.",
};

export default function TermsOfServicePage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
        <Badge variant="primary">Legal Information</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
          Terms of Service
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Last revised: October 15, 2026
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/[0.08] backdrop-blur-md space-y-8 text-sm text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website, project listings, external demo links, or consulting enquiry forms provided by {siteConfig.name} (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, or &ldquo;us&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our platforms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. Educational Project Listings</h2>
          <p>
            Project listings are provided for general information and portfolio review. Links to live demos may lead to third-party websites:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Project information is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis without warranties of any kind.</li>
            <li>Third-party demos and services are provided by their respective operators and may change or become unavailable.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. Professional Software Services & Statements of Work</h2>
          <p>
            Commercial software engineering, website development, and business automation engagements are governed by separate, formal Statements of Work (SOW) and Master Services Agreements (MSA) executed directly between {siteConfig.name} and the client organization.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">4. Intellectual Property</h2>
          <p>
            All website design, logos, trademarks, and documentation provided on this platform are owned by {siteConfig.name} or licensed from open-source contributors. Project starter templates and reference code snippets are provided for personal educational study and portfolio building.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">5. Third-Party Links</h2>
          <p>
            Project demo links may lead to third-party websites. We do not control or endorse the privacy practices or content of those websites and encourage users to review their respective policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">6. Inquiries & Legal Notices</h2>
          <p>
            For legal inquiries, contractual questions, or formal notices, please reach out via email to:{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-400 hover:underline">
              {siteConfig.contactEmail}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
