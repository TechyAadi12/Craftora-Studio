import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, CheckCircle2, Globe, Cpu, LayoutDashboard, Zap, FileCheck, Layers } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Engineering & Digital Services",
  description: "Bespoke website development, custom software, SaaS dashboards, and automated business workflows engineered with Next.js and TypeScript.",
};

export default function ServicesPage() {
  const serviceIcons: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-6 h-6 text-blue-400" />,
    Cpu: <Cpu className="w-6 h-6 text-indigo-400" />,
    LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-purple-400" />,
    Zap: <Zap className="w-6 h-6 text-amber-400" />,
  };

  const generalFAQs = [
    {
      question: "How do you scope and price your software engineering engagements?",
      answer: "We structure projects either as fixed-scope milestone deliverables or flexible monthly engineering sprints. During our initial discovery phase, we define clear functional specifications, wireframes, and risk buffers so your budget remains predictable with zero surprise billing."
    },
    {
      question: "Do clients retain complete ownership of all code and design files?",
      answer: "Yes, 100%. Upon final milestone sign-off, all Git repositories, Figma design systems, environment configurations, and documentation are transferred to your organization with full intellectual property ownership."
    },
    {
      question: "What technology stack do you primarily use for web applications?",
      answer: "We specialize in modern, high-performance web standards: Next.js App Router, React 19, TypeScript, Tailwind CSS, PostgreSQL, and serverless Node.js architectures. This ensures sub-second response times, excellent SEO, and easy maintainability."
    },
    {
      question: "How do you handle post-launch support and software maintenance?",
      answer: "We provide 30 days of complimentary post-launch monitoring, warranty bug fixes, and handover training. We also offer optional ongoing engineering retainers for security updates, feature enhancements, and infrastructure scaling."
    }
  ];

  return (
    <div className="w-full flex flex-col space-y-24 sm:space-y-32 pb-24">
      {/* Services Hero */}
      <section className="relative pt-12 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center space-y-6">
        <div className="hero-glow -top-32 left-1/2 -translate-x-1/2 opacity-60" />

        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <Badge variant="primary">Software Engineering Capabilities</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Tailored Digital Solutions Built for <span className="gradient-accent">Speed & Precision</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We partner with ambitious startups and established organizations to eliminate technical debt, automate manual drudgery, and deploy production-grade software.
          </p>
        </div>

        <div className="flex justify-center gap-3 relative z-10 pt-2">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Service Cards Detailed Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        <div className="space-y-12">
          {servicesData.map((service, idx) => (
            <div
              key={service.slug}
              id={service.slug}
              className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/[0.08] backdrop-blur-md space-y-8 hover:border-blue-500/30 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/[0.06]">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center">
                      {serviceIcons[service.icon]}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-blue-400 font-semibold uppercase">
                        Service 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-slate-300 text-base leading-relaxed pt-1">
                    {service.heroTagline}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <span>Full Details & Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/contact?service=${service.slug}`}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-md shadow-blue-500/20"
                  >
                    <span>Get a Quote</span>
                  </Link>
                </div>
              </div>

              {/* Problems Solved vs Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.problemsSolved.map((item, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2.5"
                  >
                    <div className="text-xs font-semibold text-red-400 flex items-center gap-1">
                      <span>Problem:</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.problem}
                    </p>
                    <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1 pt-1 border-t border-slate-850">
                      <span>Our Solution:</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>

              {/* Deliverables & Technology Capabilities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-blue-400" />
                    <span>Tangible Deliverables</span>
                  </div>
                  <div className="space-y-2">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
                        <div className="text-xs font-bold text-white mb-1">{del.title}</div>
                        <ul className="text-[11px] text-slate-400 space-y-0.5">
                          {del.items.map((it, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="text-blue-400">•</span>
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span>Technology Capabilities</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map(cap => (
                      <span
                        key={cap}
                        className="text-xs px-3 py-1.5 rounded-xl bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Key Client Benefits
                    </div>
                    <ul className="text-xs text-slate-400 space-y-1.5">
                      {service.benefits.slice(0, 3).map((b, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process Overview */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10">
        <SectionHeader
          centered
          badge="Delivery Blueprint"
          badgeVariant="primary"
          title="Predictable Milestones from"
          titleHighlight="Discovery to Launch"
          description="Every engagement follows a structured delivery timeline with weekly sprint demos, staging environments, and direct access to senior engineers."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "Week 1", title: "Discovery & Architecture", desc: "Review user personas, map data entities, and define API contract interfaces." },
            { step: "Week 2", title: "Interactive Prototypes", desc: "Design tokens, responsive layout wireframes, and component state validation." },
            { step: "Weeks 3-4", title: "Core Engineering", desc: "Clean TypeScript implementation, automated testing, and headless integration." },
            { step: "Week 5+", title: "Performance QA & Cutover", desc: "Lighthouse audits, accessibility review, staging sign-off, and DNS launch." }
          ].map(phase => (
            <div
              key={phase.step}
              className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 space-y-2.5"
            >
              <span className="text-xs font-mono font-bold text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                {phase.step}
              </span>
              <h4 className="text-base font-bold text-white pt-1">{phase.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* General Services FAQs */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8">
        <SectionHeader
          centered
          badge="Frequently Asked Questions"
          badgeVariant="secondary"
          title="Common Questions Regarding Our"
          titleHighlight="Service Engagements"
          description="Clear answers about code ownership, typical timelines, billing structure, and ongoing technical support."
        />

        <Accordion items={generalFAQs} />
      </section>

      {/* Quote CTA Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-blue-500/30 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Need a Solution Engineered for Your Team?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Tell us about your project requirements and target timeline. We will review your goals and provide a realistic technical proposal.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 inline-flex items-center gap-2 hover:scale-105 transition-all"
            >
              <span>Request a Project Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
