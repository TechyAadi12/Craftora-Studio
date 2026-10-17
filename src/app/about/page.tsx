import React from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import {
  Compass,
  CheckCircle2,
  Shield,
  Cpu,
  ArrowRight,
  HeartHandshake,
  Layers
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Engineering Philosophy & Mission",
  description: "Learn about Craftora Studio's mission to deliver dependable digital software solutions and maintainable web systems.",
};

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col space-y-20 sm:space-y-28 pb-24">
      {/* About Hero */}
      <section className="relative pt-12 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center space-y-6">
        <div className="hero-glow -top-32 left-1/2 -translate-x-1/2 opacity-60" />

        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <Badge variant="primary">Our Mission & Identity</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Engineering Excellence Meets <span className="gradient-accent">Practical Impact</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Craftora Studio is a digital software consultancy dedicated to building clean, maintainable web systems and practical software for modern organizations.
          </p>
        </div>
      </section>

      {/* Dual Mission Cards */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/[0.08] backdrop-blur-md space-y-4 hover:border-blue-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
              Pillar 01 — Client Solutions
            </span>
            <h2 className="text-2xl font-bold text-white">Practical Digital Engineering</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We partner with organizations to build modern websites, SaaS dashboards, internal tools, and business automations. We avoid fragile dependencies and unnecessary complexity, delivering software that is fast, secure, and easy for your team to maintain long after launch.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% intellectual property and code ownership</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Strict adherence to WCAG 2.1 AA accessibility & Core Web Vitals</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Transparent fixed-milestone budgets with zero surprises</span>
              </li>
            </ul>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/[0.08] backdrop-blur-md space-y-4 hover:border-purple-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
              Pillar 02 — Project Portfolio
            </span>
            <h2 className="text-2xl font-bold text-white">Selected Developer Projects</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We showcase selected developer projects and link directly to their live demos.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Project examples with links to live demos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Examples of practical software projects</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Live demo links for each listed project</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-10">
        <SectionHeader
          centered
          badge="Guiding Values"
          badgeVariant="primary"
          title="The Engineering Principles We"
          titleHighlight="Stand By"
          description="We run our consultancy according to a strict code of engineering ethics and honesty."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 space-y-3">
            <Shield className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Truth Over Hype</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We never fabricate client logos, fake testimonial quotes, or unrealistic performance guarantees. We let our architecture, test checklists, and code speak for themselves.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 space-y-3">
            <Layers className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Resilience & Maintainability</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              A software architecture is only as good as the ability of your team to maintain it. We write self-documenting TypeScript, comprehensive tests, and clear operational runbooks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 space-y-3">
            <HeartHandshake className="w-6 h-6 text-purple-400" />
            <h3 className="text-lg font-bold text-white">Practical Project Work</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We value clear requirements, careful testing, and software that solves real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Team / Contact CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-blue-500/30 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Have a Question or Looking to Partner?
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed">
            Whether you want to discuss a software project for your organization or share feedback on our portfolio, we would love to connect.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs inline-flex items-center gap-2 shadow-lg shadow-blue-500/25 hover:scale-105 transition-all"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/project-labs"
              className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
