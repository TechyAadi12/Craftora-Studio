import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { Hero3DVisual } from "@/components/home/Hero3DVisual";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectCarousel } from "@/components/projects/ProjectCarousel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ArrowRight,
  Terminal,
  CheckCircle2,
  Layers,
  Cpu,
  Globe,
  LayoutDashboard,
  Zap,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export default function HomePage() {
  const serviceIconMap: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-6 h-6 text-blue-400" />,
    Cpu: <Cpu className="w-6 h-6 text-indigo-400" />,
    LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-purple-400" />,
    Zap: <Zap className="w-6 h-6 text-amber-400" />,
  };

  return (
    <div className="w-full flex flex-col space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-10 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Ambient Hero Glow */}
        <div className="hero-glow -top-32 left-1/2 -translate-x-1/2 opacity-75" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>Full-Stack Engineering & Project Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Building Digital Solutions.{" "}
              <span className="gradient-accent">Empowering Future Developers.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              We engineer production-grade web systems, bespoke internal tools, and high-density SaaS analytics for modern organizations, alongside a curated portfolio of developer projects.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/services"
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/project-labs"
                className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 text-sm font-semibold transition-all hover:border-slate-700 flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Explore Projects</span>
              </Link>

            </div>

            {/* Micro proof telemetry */}
            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-center lg:justify-start gap-8 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Frontend-Only Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Curated Developer Projects</span>
              </div>
            </div>
          </div>

          {/* 3D Visual Column */}
          <div className="lg:col-span-5 flex justify-center">
            <Hero3DVisual />
          </div>
        </div>
      </section>

      {/* 2. Value Proposition Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/[0.08] backdrop-blur-sm space-y-3 relative group hover:border-blue-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white pt-1">Practical Software Solutions</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We build fast, maintainable websites, custom internal tools, and high-density analytics dashboards designed around your exact operational bottlenecks.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/[0.08] backdrop-blur-sm space-y-3 relative group hover:border-indigo-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white pt-1">Free Developer Projects</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              A growing catalog of developer projects with links to their live demos.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/[0.08] backdrop-blur-sm space-y-3 relative group hover:border-purple-500/30 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white pt-1">Project Portfolio</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Browse selected developer projects and open their live demos.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Services Preview Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeader
            badge="Tailored Engineering"
            badgeVariant="primary"
            title="Software Services Built for"
            titleHighlight="Scalability & Impact"
            description="From high-conversion web frontends to resilient business automation workflows, we deliver clean architectures that solve tangible operational problems."
          />
          <Link
            href="/services"
            className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 shrink-0"
          >
            <span>View All 4 Service Offerings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map(service => (
            <div
              key={service.slug}
              className="p-8 rounded-3xl bg-slate-900/40 border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {serviceIconMap[service.icon]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Core Capabilities
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.capabilities.slice(0, 4).map(cap => (
                      <span
                        key={cap}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-xs font-semibold text-white group-hover:text-blue-400 flex items-center gap-1 transition-colors"
                >
                  <span>Explore Deliverables & Workflow</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="text-xs px-3 py-1.5 rounded-full bg-blue-600/15 hover:bg-blue-600/30 text-blue-300 font-medium transition-colors"
                >
                  Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Project Labs Preview Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeader
            badge="Project Labs"
            badgeVariant="accent"
            title="Hands-On Projects with"
            titleHighlight="Live Browser Demos"
            description="Explore featured projects, open a live demo, or browse the source on GitHub."
          />
          <Link
            href="/project-labs"
            className="text-sm font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1.5 shrink-0"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ProjectCarousel>
          {projectsData.map(project => (
            <div
              key={project.title}
              className="w-full shrink-0 snap-start md:w-[calc((100%_-_1.5rem)_/_2)] lg:w-[calc((100%_-_3rem)_/_3)]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </ProjectCarousel>
      </section>

      {/* 6. How We Work Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <SectionHeader
          centered
          badge="Our Process"
          badgeVariant="primary"
          title="Engineered for Clarity:"
          titleHighlight="How We Work"
          description="A disciplined, four-phase engagement model ensuring predictable deliverables, transparent communication, and zero technical debt."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Discover",
              desc: "Deep analysis of operational workflows, technical debt, user personas, and target business outcomes."
            },
            {
              step: "02",
              title: "Plan",
              desc: "Architecture blueprints, database schema design, design tokens, and verifiable milestone schedules."
            },
            {
              step: "03",
              title: "Build",
              desc: "Type-safe engineering using Next.js and TypeScript, automated testing, and bi-weekly staging reviews."
            },
            {
              step: "04",
              title: "Refine",
              desc: "Lighthouse performance audits, WCAG accessibility checks, production deployment, and documentation handoff."
            }
          ].map(phase => (
            <div
              key={phase.step}
              className="p-6 rounded-3xl bg-slate-900/40 border border-white/[0.08] space-y-3 relative overflow-hidden"
            >
              <div className="text-3xl font-mono font-extrabold text-blue-500/30">
                {phase.step}
              </div>
              <h4 className="text-xl font-bold text-white">{phase.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Why Choose Us Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        <SectionHeader
          centered
          badge="Our Values"
          badgeVariant="secondary"
          title="Practical Engineering Over"
          titleHighlight="Superficial Buzzwords"
          description="We avoid exaggerated marketing claims and fragile dependencies. We prioritize clean code, accessible design, and genuine education."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/30 border border-white/[0.06] space-y-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <h4 className="text-base font-bold text-white">Practical Problem-Solving</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We focus on solving real operational friction—not forcing trendy architectures where simple, resilient solutions perform best.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/30 border border-white/[0.06] space-y-3">
            <Cpu className="w-6 h-6 text-blue-400" />
            <h4 className="text-base font-bold text-white">Maintainable Technology</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              TypeScript-first codebases with clear documentation that your internal team can understand, extend, and deploy with confidence.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/30 border border-white/[0.06] space-y-3">
            <Workflow className="w-6 h-6 text-purple-400" />
            <h4 className="text-base font-bold text-white">Clear Communication</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Transparent project timelines, async video demonstrations, direct engineering points of contact, and zero surprise billings.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/30 border border-white/[0.06] space-y-3">
            <Layers className="w-6 h-6 text-amber-400" />
            <h4 className="text-base font-bold text-white">Useful Project Examples</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Browse selected projects and open the live demos directly.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-tr from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/30 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="hero-glow -top-24 left-1/2 -translate-x-1/2 opacity-50" />

          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Ready to collaborate?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Have an Idea? <span className="gradient-accent">Let&apos;s Build It.</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you need a high-converting web application, tailored operational tools, or advice on engineering architecture, our team is ready to help.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 pt-2">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Request a Project Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/project-labs"
              className="px-6 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-white/10 text-sm font-semibold transition-colors"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
