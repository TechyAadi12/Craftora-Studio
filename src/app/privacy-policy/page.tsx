import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy regarding data collection, client enquiries, and local storage usage across Craftora Studio.",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Last revised: October 15, 2026
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/[0.08] backdrop-blur-md space-y-8 text-sm text-slate-300 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">1. Overview & Commitment</h2>
          <p>
            At {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we respect your personal privacy and handle information responsibly. This Privacy Policy describes how we treat information collected through our website ({siteConfig.url}) and client quote request interfaces.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">2. Information Collected</h2>
          <p>
            We collect information only when explicitly provided by you through our interactive forms:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li><strong>Quote Inquiries:</strong> Your full name, work email address, organization name, target project scope, budget range, and timeline.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">3. How Information Is Used</h2>
          <p>
            Information submitted via our contact forms is used solely to evaluate software requirements, prepare custom architectural proposals, and respond to your inquiries. We do not sell, rent, or trade your contact information to third-party advertising brokers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">4. Frontend Demo Environment Notice</h2>
          <p>
            This website currently operates in an interactive frontend demo architecture. Form submissions simulate realistic processing latency and store records to your local browser storage. No financial transactions are processed on this site, and no sensitive credit card credentials are ever requested or stored.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">5. Cookies and Local Storage</h2>
          <p>
            Quote inquiries submitted in demo mode are saved in your browser&apos;s <code>localStorage</code> on this device. You can remove them by clearing this site&apos;s browser storage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white">6. Contact for Privacy Inquiries</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request data deletion, please contact our team at:{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-blue-400 hover:underline">
              {siteConfig.contactEmail}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
