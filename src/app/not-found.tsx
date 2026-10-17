import React from "react";
import Link from "next/link";
import { Home, Terminal } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 relative">
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-6 relative z-10 p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/[0.08] backdrop-blur-xl shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto font-mono text-2xl font-extrabold">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            The route or resource you requested does not exist or has been relocated to another section.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2 text-xs">
          <Link
            href="/"
            className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <div className="pt-1">
            <Link
              href="/project-labs"
              className="py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 font-medium flex items-center justify-center gap-1.5 transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Projects</span>
            </Link>
          </div>

          <Link
            href="/services"
            className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          >
            Explore Software Services
          </Link>
        </div>
      </div>
    </div>
  );
}
