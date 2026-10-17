import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "primary" | "secondary" | "success" | "accent";
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  badgeVariant = "primary",
  title,
  titleHighlight,
  description,
  centered = false,
  className = ""
}: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} ${className}`}>
      {badge && (
        <div>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-accent">{titleHighlight}</span>
        )}
      </h2>
      {description && (
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
