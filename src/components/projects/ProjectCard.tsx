import React from "react";
import Image from "next/image";
import { ProjectItem } from "@/data/projects";
import { ArrowUpRight, Code2, ListTodo } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/55 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-blue-400/35 hover:shadow-blue-950/30">
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? ""}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-blue-200">
            <ListTodo aria-hidden="true" className="h-12 w-12" strokeWidth={1.5} />
            <span className="text-xs font-semibold uppercase tracking-[0.24em]">Plan your day</span>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-100 backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white">{project.title}</h2>
          <p className="mt-2 min-h-12 text-sm leading-relaxed text-slate-400">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} highlights`}>
            {project.technologies.map(technology => (
              <li
                key={technology}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/[0.07] pt-5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/15 px-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            <Code2 aria-hidden="true" className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} live demo (opens in a new tab)`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-500 px-3 text-sm font-semibold text-white transition hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
          >
            Live demo
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
