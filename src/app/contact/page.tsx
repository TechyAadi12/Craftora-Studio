import React, { Suspense } from "react";
import { QuoteForm } from "@/components/contact/QuoteForm";
import { Badge } from "@/components/ui/Badge";
import { Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote — Start Your Project",
  description: "Request a custom engineering quote for web applications, custom software, SaaS dashboards, or workflow automations.",
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col space-y-16 sm:space-y-20 pb-24">
      {/* Page Hero */}
      <section className="relative pt-10 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center space-y-6">
        <div className="hero-glow -top-32 left-1/2 -translate-x-1/2 opacity-60" />

        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <Badge variant="primary">Project Enquiries & Quotes</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Let&apos;s Build Something <span className="gradient-accent">Exceptional</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Tell us about your product goals, technical bottlenecks, or upcoming project launch. We review every enquiry and respond with a clear architectural roadmap.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Info Sidebar */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Info Sidebar (4 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/[0.08] backdrop-blur-md space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white">Direct Communication</h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  You work directly with experienced software engineers who design, code, and deploy your project.
                </p>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 font-semibold uppercase text-[10px]">Email Enquiries</div>
                    <a href={`mailto:${siteConfig.contactEmail}`} className="text-white hover:text-blue-400 font-medium">
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 font-semibold uppercase text-[10px]">Headquarters & Workspaces</div>
                    <div className="text-white font-medium">{siteConfig.office}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-500 font-semibold uppercase text-[10px]">Typical Response Time</div>
                    <div className="text-white font-medium">Within 24 business hours</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  What Happens Next?
                </div>
                <ul className="text-xs text-slate-400 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span>We review your requirements and assess technical feasibility.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span>We schedule a 30-minute discovery conversation with a lead engineer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span>You receive an architectural blueprint with milestone pricing.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Client Privacy Notice */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA & Confidentiality</span>
              </div>
              <p className="leading-relaxed">
                All submitted project concepts and proprietary business logic are treated under strict confidentiality. We are happy to execute mutual NDAs prior to in-depth technical reviews.
              </p>
            </div>
          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="p-12 text-center text-slate-500 rounded-3xl bg-slate-900 border border-slate-800">
                  Loading quote form...
                </div>
              }
            >
              <QuoteForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
