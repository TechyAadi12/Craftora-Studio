import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Cpu,
  LayoutDashboard,
  Zap,
  ArrowLeft,
  Layers,
  FileCheck
} from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  return servicesData.map(service => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} Services`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceIcons: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-8 h-8 text-blue-400" />,
    Cpu: <Cpu className="w-8 h-8 text-indigo-400" />,
    LayoutDashboard: <LayoutDashboard className="w-8 h-8 text-purple-400" />,
    Zap: <Zap className="w-8 h-8 text-amber-400" />,
  };

  return (
    <div className="w-full flex flex-col space-y-20 sm:space-y-28 pb-24">
      {/* Service Hero */}
      <section className="relative pt-8 sm:pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-6">
        <div className="hero-glow -top-32 left-1/2 -translate-x-1/2 opacity-50" />

        {/* Back Link */}
        <div className="relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Services</span>
          </Link>
        </div>

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center">
              {serviceIcons[service.icon]}
            </div>
            <div>
              <Badge variant="primary">Specialized Offering</Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-1">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-normal">
            {service.heroTagline}
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2 relative z-10">
          <Link
            href={`/contact?service=${service.slug}`}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Request {service.title} Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="#deliverables"
            className="px-5 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/10 text-sm font-semibold transition-colors"
          >
            View Deliverables & Scope
          </a>
        </div>
      </section>

      {/* Problems & Strategic Solutions */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        <SectionHeader
          badge="Challenges We Eliminate"
          badgeVariant="primary"
          title="Typical Obstacles & How"
          titleHighlight="We Engineer Solutions"
          description="We identify the root cause behind performance bottlenecks, brittle legacy architectures, and inefficient manual workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.problemsSolved.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/40 border border-white/[0.08] space-y-4"
            >
              <div>
                <span className="text-[11px] font-mono text-red-400 font-semibold uppercase tracking-wider">
                  The Problem
                </span>
                <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                  {item.problem}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                  Our Engineering Fix
                </span>
                <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tangible Benefits Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/30 border border-white/[0.08] space-y-6">
          <SectionHeader
            badge="Engineering Guarantees"
            badgeVariant="success"
            title="Key Operational"
            titleHighlight="Benefits & Standards"
            description="Our engineering standards are designed to protect your investment for years to come."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Value Use Cases */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        <SectionHeader
          badge="Real-World Application"
          badgeVariant="accent"
          title="Ideal Scenarios for"
          titleHighlight={service.title}
          description="Explore common business scenarios where our engineering directly unlocks growth or operational savings."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.useCases.map((uc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/40 border border-white/[0.08] space-y-3 hover:border-purple-500/30 transition-colors"
            >
              <span className="text-xs font-mono font-bold text-purple-400 px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                Scenario 0{idx + 1}
              </span>
              <h3 className="text-lg font-bold text-white pt-1">{uc.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables & Technology Capabilities */}
      <section id="deliverables" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8 scroll-mt-24">
        <SectionHeader
          badge="Scope of Work"
          badgeVariant="primary"
          title="Contract Deliverables &"
          titleHighlight="Technology Stack"
          description="Every contract clearly enumerates concrete assets, source repositories, documentation, and tooling capabilities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Deliverables (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-blue-400" />
              <span>Included Engagement Deliverables</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.deliverables.map((del, dIdx) => (
                <div
                  key={dIdx}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2.5"
                >
                  <h4 className="text-sm font-bold text-white">{del.title}</h4>
                  <ul className="text-xs text-slate-400 space-y-1.5">
                    {del.items.map((it, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-400" />
              <span>Technology Capabilities</span>
            </h3>

            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
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
              <p className="text-[11px] text-slate-500 pt-2 leading-relaxed">
                We stay up-to-date with current stable LTS releases, ensuring long-term security patches and zero reliance on deprecated libraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Workflow / Step-by-Step */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8">
        <SectionHeader
          badge="Execution Timeline"
          badgeVariant="secondary"
          title="Engagement Workflow &"
          titleHighlight="Milestone Cadence"
          description="How we move from preliminary discussions to production deployment."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.workflow.map(step => (
            <div
              key={step.step}
              className="p-6 rounded-3xl bg-slate-900/40 border border-white/[0.08] space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-bold text-blue-500/40">
                  0{step.step}
                </span>
                <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                  {step.duration}
                </span>
              </div>
              <h4 className="text-base font-bold text-white">{step.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service FAQs */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-8">
        <SectionHeader
          centered
          badge="FAQs"
          badgeVariant="secondary"
          title={`Common Questions About ${service.title}`}
          description="Answers to common questions regarding timelines, code handover, and integrations."
        />

        <Accordion items={service.faqs} />
      </section>

      {/* Final Quote Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-blue-950/60 to-purple-950/60 border border-blue-500/30 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Build Your {service.title}?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Fill out our quote form with your project description and requirements. We will analyze your specifications and respond with an architectural blueprint.
          </p>
          <div className="pt-2">
            <Link
              href={`/contact?service=${service.slug}`}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 inline-flex items-center gap-2 hover:scale-105 transition-all"
            >
              <span>Get a Quote for {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
