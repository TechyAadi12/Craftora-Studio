export interface ProjectItem {
  title: string;
  description: string;
  liveDemoUrl: string;
  technologies?: string[];
  githubUrl?: string;
}

export const projectsData: ProjectItem[] = [];
