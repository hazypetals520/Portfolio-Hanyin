import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-ink text-surface py-16 lg:py-24 px-8 sm:px-14 lg:px-24 border-t border-ink">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        {/* Brand identity */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm tracking-widest text-sage font-bold uppercase">
              {PERSONAL_INFO.monogram}
            </span>
            <span className="text-surface/40">/</span>
            <span className="font-mono text-xs tracking-widest text-surface/70 uppercase">
              Thank you!
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-surface">
            {PERSONAL_INFO.fullName}
          </h3>

          <p className="font-mono text-xs uppercase tracking-widest text-surface/60">
            {PERSONAL_INFO.status}
          </p>
        </div>

        {/* Dynamic Year & Back to top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
          <span className="font-mono text-xs uppercase tracking-widest text-surface/60">
            © {new Date().getFullYear()} · ALL RIGHTS RESERVED
          </span>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-surface hover:text-sage transition-colors border border-surface/20 px-3 py-1.5 hover:border-sage"
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
