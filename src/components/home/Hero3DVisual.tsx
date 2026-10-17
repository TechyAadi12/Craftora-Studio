"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export function Hero3DVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let isVisible = false;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 500;
      height = canvas.height = canvas.parentElement?.clientHeight || 500;
    };
    window.addEventListener("resize", handleResize);

    // 3D Polyhedron Vertices (Icosahedron / Octahedron hybrid)
    const baseRadius = 140;
    const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
    const rawVertices: Point3D[] = [
      { x: -1, y: phi, z: 0 },
      { x: 1, y: phi, z: 0 },
      { x: -1, y: -phi, z: 0 },
      { x: 1, y: -phi, z: 0 },
      { x: 0, y: -1, z: phi },
      { x: 0, y: 1, z: phi },
      { x: 0, y: -1, z: -phi },
      { x: 0, y: 1, z: -phi },
      { x: phi, y: 0, z: -1 },
      { x: phi, y: 0, z: 1 },
      { x: -phi, y: 0, z: -1 },
      { x: -phi, y: 0, z: 1 },
    ].map(v => {
      const len = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
      return {
        x: (v.x / len) * baseRadius,
        y: (v.y / len) * baseRadius,
        z: (v.z / len) * baseRadius,
      };
    });

    // Outer orbital particles
    const particlesCount = 24;
    const particles = Array.from({ length: particlesCount }, (_, i) => {
      const theta = (i / particlesCount) * Math.PI * 2;
      const r = baseRadius * 1.5 + (Math.random() * 40 - 20);
      return {
        theta,
        radius: r,
        speed: (Math.random() * 0.006 + 0.003) * (i % 2 === 0 ? 1 : -1),
        yOffset: (Math.random() - 0.5) * 80,
        size: Math.random() * 2 + 2,
        color: i % 3 === 0 ? "#60a5fa" : i % 3 === 1 ? "#a855f7" : "#38bdf8",
      };
    });

    // Rotation angles
    let angleX = 0.2;
    let angleY = 0.3;
    let targetAngleX = 0.2;
    let targetAngleY = 0.3;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetAngleY = nx * 1.5;
      targetAngleX = -ny * 1.5;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    const project = (p: Point3D): { x: number; y: number; scale: number } => {
      const fov = 400;
      const scale = fov / (fov + p.z);
      return {
        x: width / 2 + p.x * scale,
        y: height / 2 + p.y * scale,
        scale,
      };
    };

    const rotateX = (p: Point3D, rad: number): Point3D => {
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return {
        x: p.x,
        y: p.y * cos - p.z * sin,
        z: p.y * sin + p.z * cos,
      };
    };

    const rotateY = (p: Point3D, rad: number): Point3D => {
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return {
        x: p.x * cos + p.z * sin,
        y: p.y,
        z: -p.x * sin + p.z * cos,
      };
    };

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation towards mouse pointer
      if (!mediaQuery.matches) {
        angleX += (targetAngleX - angleX) * 0.05 + 0.003;
        angleY += (targetAngleY - angleY) * 0.05 + 0.005;
      }

      // Rotate and project core 3D polyhedron vertices
      const transformed = rawVertices.map(v => {
        let rotated = rotateX(v, angleX);
        rotated = rotateY(rotated, angleY);
        return {
          ...rotated,
          projected: project(rotated),
        };
      });

      // Sort points by Z to draw back-to-front
      transformed.sort((a, b) => b.z - a.z);

      // Draw connection lines between nearby vertices
      ctx.lineWidth = 1;
      for (let i = 0; i < transformed.length; i++) {
        for (let j = i + 1; j < transformed.length; j++) {
          const dx = transformed[i].x - transformed[j].x;
          const dy = transformed[i].y - transformed[j].y;
          const dz = transformed[i].z - transformed[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.35;
            const grad = ctx.createLinearGradient(
              transformed[i].projected.x,
              transformed[i].projected.y,
              transformed[j].projected.x,
              transformed[j].projected.y
            );
            grad.addColorStop(0, `rgba(96, 165, 250, ${alpha})`);
            grad.addColorStop(1, `rgba(168, 85, 247, ${alpha})`);

            ctx.strokeStyle = grad;
            ctx.beginPath();
            ctx.moveTo(transformed[i].projected.x, transformed[i].projected.y);
            ctx.lineTo(transformed[j].projected.x, transformed[j].projected.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes with glowing radial gradients
      for (const node of transformed) {
        const radius = Math.max(2.5, 5 * node.projected.scale);
        const glow = ctx.createRadialGradient(
          node.projected.x,
          node.projected.y,
          0,
          node.projected.x,
          node.projected.y,
          radius * 3
        );
        glow.addColorStop(0, "rgba(255, 255, 255, 0.9)");
        glow.addColorStop(0.4, "rgba(96, 165, 250, 0.6)");
        glow.addColorStop(1, "rgba(139, 92, 246, 0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.projected.x, node.projected.y, radius * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(node.projected.x, node.projected.y, radius * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render orbiting particles
      for (const p of particles) {
        if (!mediaQuery.matches) {
          p.theta += p.speed;
        }
        const px = Math.cos(p.theta) * p.radius;
        const pz = Math.sin(p.theta) * p.radius;
        const py = p.yOffset + Math.sin(time * 2 + p.theta) * 15;

        let orb = rotateX({ x: px, y: py, z: pz }, angleX * 0.5);
        orb = rotateY(orb, angleY * 0.5);
        const proj = project(orb);

        const alpha = Math.max(0.15, Math.min(0.8, (orb.z + 200) / 400));
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(proj.x, proj.y, p.size * proj.scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      if (isVisible && !mediaQuery.matches) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const stopAnimation = () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const handleMotionChange = () => {
      if (mediaQuery.matches) {
        stopAnimation();
        if (isVisible) render();
      } else if (isVisible && animationFrameId === null) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        render();
      } else {
        stopAnimation();
      }
    });

    if (container) observer.observe(container);

    return () => {
      stopAnimation();
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      mediaQuery.removeEventListener("change", handleMotionChange);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[480px] sm:max-w-[540px] mx-auto flex items-center justify-center select-none"
      aria-label="Interactive 3D geometry representing distributed systems and connected developer tools"
      role="img"
    >
      {/* Glow rings in backdrop */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-purple-600/15 blur-2xl pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full border border-blue-500/15 animate-[spin_40s_linear_infinite] motion-reduce:animate-none pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full border border-purple-500/10 border-dashed animate-[spin_60s_linear_infinite_reverse] motion-reduce:animate-none pointer-events-none" />

      {/* Primary 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing"
      />

      {/* Floating HUD Badges */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md text-xs text-slate-300 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-mono text-[11px]">Engine: WebGL/Canvas 3D</span>
      </div>

      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md text-xs text-slate-400 shadow-lg">
        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
        <span>Interactive Parallax</span>
      </div>
    </div>
  );
}
