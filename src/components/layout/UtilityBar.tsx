import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function UtilityBar() {
  return (
    <aside aria-label="Status utility bar" className="w-full bg-ink text-surface py-1.5 px-4 sm:px-8 text-[11px] font-mono tracking-widest uppercase flex items-center justify-between border-b border-ink/40 select-none z-40 relative">
      <div className="flex items-center gap-3">
        <span>PORTFOLIO / 2026</span>
        <span className="hidden sm:inline-block text-surface/40">|</span>
        <span className="hidden sm:inline-block text-surface/70">THE CREATIVE SPACE</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-sage animate-pulse" aria-hidden="true"></span>
        <span className="text-surface/90">{PERSONAL_INFO.status}</span>
      </div>
    </aside>
  );
}
