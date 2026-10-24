import React from "react";
import { ProjectLibrary } from "@/components/projects/ProjectLibrary";
import { Badge } from "@/components/ui/Badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Craftora Studio",
  description: "Explore projects and open their live demos.",
};

export default function ProjectLabsPage() {
  return (
    <div className="w-full flex flex-col space-y-12 sm:space-y-16 pb-24">
      {/* Page Hero */}
      <section className="relative pt-10 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center space-y-6">
        <div className="hero-glow -top-32 left-1/2 -translate-x-1/2 opacity-60" />

        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <Badge variant="accent">Project Portfolio</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Selected <span className="gradient-accent">Projects</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A selection of digital projects. Explore each live experience or browse its source on GitHub.
          </p>

        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <ProjectLibrary />
      </section>
    </div>
  );
}
