import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectLibrary() {
  return (
    <div>
      {projectsData.length === 0 ? (
        <div className="border-y border-dashed border-slate-700 py-14 text-center">
          <h2 className="text-xl font-semibold text-white">No projects added yet</h2>
          <p className="mt-2 text-sm text-slate-400">Check back soon for featured projects.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
