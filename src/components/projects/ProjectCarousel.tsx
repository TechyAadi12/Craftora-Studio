"use client";

import { useRef, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProjectCarouselProps {
  children: ReactNode;
}

export function ProjectCarousel({ children }: ProjectCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);

  function scrollProjects(direction: "previous" | "next") {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.scrollBy({
      left: (direction === "next" ? 1 : -1) * viewport.clientWidth,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label="Show previous projects"
          onClick={() => scrollProjects("previous")}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-200 transition hover:border-blue-400/40 hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          <ArrowLeft aria-hidden="true" className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Show next projects"
          onClick={() => scrollProjects("next")}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-200 transition hover:border-blue-400/40 hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          <ArrowRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
      <div
        ref={viewportRef}
        aria-label="Featured projects"
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex items-stretch gap-6">
          {children}
        </div>
      </div>
    </div>
  );
}
