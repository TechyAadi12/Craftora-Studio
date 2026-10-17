import React from "react";
import { ProjectItem } from "@/data/projects";
import { Code2, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex min-h-52 flex-col justify-between border border-white/[0.08] bg-slate-900/40 p-6 transition-colors hover:border-blue-500/30">
      <div>
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.description}</p>
        {project.technologies && project.technologies.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.map(technology => (
              <li key={technology} className="border border-slate-700 px-2 py-1 text-xs text-slate-300">
                {technology}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/[0.06] pt-4">
        <a href={project.liveDemoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200">
          <ExternalLink className="h-4 w-4" />
          Live demo
        </a>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white">
            <Code2 className="h-4 w-4" />
            Source code
          </a>
        )}
      </div>
    </article>
  );
}
