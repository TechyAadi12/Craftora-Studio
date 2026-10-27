import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { projectsData } from "@/data/projects";
import { Code2, ArrowUpRight, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#05070e] border-t border-white/[0.08] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gradient-to-t from-blue-600/10 via-purple-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/[0.08]">
          {/* Brand Column (2 cols wide on large screens) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 p-[1.5px] shadow-md shadow-blue-500/20">
                <div className="w-full h-full bg-[#090d1a] rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Engineering high-performance web applications and custom business software that help organizations scale.
            </p>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="hover:text-blue-300 transition-colors"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{siteConfig.office}</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Software Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Portfolio Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Projects
            </h3>
            <ul className="space-y-2.5 text-sm">
              {projectsData.slice(0, 4).map((project) => (
                <li key={project.liveDemoUrl}>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {project.title}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/project-labs"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View all projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Company & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved. Built with Next.js & TypeScript.
          </p>
          <nav aria-label="Social media links">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {siteConfig.footerLinks.social.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} (opens in a new tab)`}
                    className="text-slate-400 hover:text-blue-400 focus-visible:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 transition-colors flex items-center gap-1"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight aria-hidden="true" className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
