import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "accent" | "outline";
  className?: string;
}

export function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  const base = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide transition-colors";
  
  const variants = {
    primary: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    secondary: "bg-slate-800 text-slate-300 border border-slate-700",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    accent: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    outline: "bg-transparent text-slate-400 border border-slate-700/60"
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
