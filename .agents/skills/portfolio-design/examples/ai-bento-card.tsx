"use client";
import React, { useState, useRef } from "react";

interface AIProjectCardProps {
  index: string;
  title: string;
  architecture: string[];
  metricLabel: string;
  metricValue: string;
  description: string;
  year: string;
  colSpan?: string;
}

export function AIProjectBentoCard({
  index,
  title,
  architecture,
  metricLabel,
  metricValue,
  description,
  year,
  colSpan = "md:col-span-7",
}: AIProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden bg-[#0D0D10] border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between transition-[border-color,transform] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:border-white/[0.22] ${colSpan}`}
    >
      {/* Cursor-following subtle radial spotlight (No neon slop, pure architectural light) */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.05), transparent 40%)`,
        }}
      />

      {/* Corner Blueprint Crosshair */}
      <span className="pointer-events-none absolute top-2 right-2 font-mono text-[10px] text-white/20 select-none">
        +
      </span>

      {/* Top Telemetry Bar */}
      <header className="relative z-10 flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
        <div className="flex items-center gap-3 font-mono text-[11px] tracking-wider uppercase text-zinc-400">
          <span className="text-[#FF4F00] font-semibold">SYS//{index}</span>
          <span>•</span>
          <span className="tabular-nums">{year}</span>
        </div>

        {/* Live Telemetry Metric Pill */}
        <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] px-2.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] text-zinc-400">{metricLabel}:</span>
          <span className="font-mono text-[11px] text-zinc-100 font-medium tabular-nums">
            {metricValue}
          </span>
        </div>
      </header>

      {/* Interactive System Pipeline Diagram */}
      <div className="relative z-10 my-6 py-5 px-4 bg-[#09090B] border border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
        {architecture.map((node, i) => (
          <React.Fragment key={node}>
            <div className="font-mono text-xs px-3 py-1.5 bg-white/[0.03] border border-white/[0.08] text-zinc-200 group-hover:border-[#FF4F00]/40 transition-colors duration-300">
              {node}
            </div>
            {i < architecture.length - 1 && (
              <span className="font-mono text-xs text-zinc-600 group-hover:text-[#FF4F00] transition-colors">
                ──►
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom Editorial Content */}
      <footer className="relative z-10 mt-4">
        <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-100 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400 max-w-xl">
          {description}
        </p>
      </footer>
    </article>
  );
}