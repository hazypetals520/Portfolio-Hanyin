import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import DecryptedText from '../ui/DecryptedText';
import TypewriterTitle from '../ui/type-writer';
import Lanyard from '../ui/Lanyard';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-x-clip px-4 sm:px-14 lg:px-24 pt-4 sm:pt-6 lg:pt-12 pb-8 sm:pb-14 lg:pb-20 bg-canvas border-b border-borderLine"
    >
      {/* 3D Interactive Lanyard — Centered on mobile & tablet, right-aligned on desktop */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute -top-6 sm:-top-10 lg:-top-[84px] xl:-top-[76px] left-[calc(50%-80px)] -translate-x-1/2 sm:left-[calc(50%-60px)] lg:left-auto lg:translate-x-0 lg:right-32 xl:right-48 2xl:right-60 pointer-events-auto z-30"
      >
        <div className="w-[255px] h-[520px] sm:w-[270px] sm:h-[550px] lg:w-[235px] lg:h-[615px] max-w-full drop-shadow-sm pointer-events-auto">
          <Lanyard
            frontImage="/images/hanin-portrait.png"
            orientation="portrait"
            cardColor="#F1F0EC"
            strapColor="#111111"
            metal="silver"
            finish="matte"
            size={0.40}
            strapLength={0.56}
            strapWidth={0.65}
            gravity={0.8}
            damping={0.65}
            elasticity={0.4}
            breeze={0.12}
            interactive={true}
            intro={true}
          />
        </div>
      </motion.div>

      {/* Top Header Labels — Visible on desktop, moved below title on mobile/tablet */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:flex w-full items-start justify-between gap-6 z-10 relative"
      >
        <div className="space-y-1.5">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block">
            {PERSONAL_INFO.subheading}
          </span>
          <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-ink font-semibold flex items-center gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage" />
            {PERSONAL_INFO.tagline}
          </h2>
        </div>

        <div className="text-right">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block">
            LOCATION
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-ink block font-medium">
            {PERSONAL_INFO.location}
          </span>
        </div>
      </motion.div>

      {/* Stage: Main Typography — Centered on mobile/tablet, left-aligned on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full my-auto pt-36 sm:pt-48 lg:pt-0 py-6 sm:py-8 lg:py-16 flex flex-col items-center lg:items-start justify-center text-center lg:text-left z-20 pointer-events-none select-text"
      >
        <div className="max-w-3xl lg:max-w-4xl flex flex-col items-center lg:items-start text-center lg:text-left leading-none select-text pointer-events-auto">
          {/* Main Title: HANIN'S */}
          <h1 className="text-[clamp(2.5rem,11.5vw,9rem)] font-black uppercase tracking-tighter text-ink leading-[0.88] opacity-95 transition-all select-text pointer-events-auto cursor-pointer text-center lg:text-left">
            <DecryptedText
              text="HANIN'S"
              animateOn="inViewHover"
              speed={45}
              maxIterations={12}
              sequential={true}
              revealDirection="center"
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&*"
              className="font-black text-ink select-text cursor-pointer"
              encryptedClassName="text-ink/25 select-text cursor-pointer"
              parentClassName="select-text cursor-pointer"
            />
          </h1>

          {/* Dynamic Subheading with flanking lines on mobile/tablet */}
          <div className="pt-2 sm:pt-4 lg:pt-6 flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 w-full">
            <span className="lg:hidden h-[1px] w-6 sm:w-10 bg-borderLine shrink-0" />
            <TypewriterTitle
              sequences={[
                { text: "Portfolio", deleteAfter: true, pauseAfter: 1800 },
                { text: "Collection", deleteAfter: true, pauseAfter: 1800 },
                { text: "Selection", deleteAfter: true, pauseAfter: 1800 },
              ]}
              typingSpeed={60}
              deleteSpeed={35}
              loopDelay={600}
              autoLoop={true}
              className="font-mono text-base sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-[0.2em] lg:tracking-tight text-ink"
              cursorClassName="bg-sage-dark w-[2.5px] sm:w-[4px] h-[0.9em]"
            />
            <span className="lg:hidden h-[1px] w-6 sm:w-10 bg-borderLine shrink-0" />
          </div>

          {/* Mobile & Tablet Centered Tagline & Subheading */}
          <div className="lg:hidden pt-4 sm:pt-6 flex flex-col items-center justify-center text-center space-y-1">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink-muted flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage" />
              {PERSONAL_INFO.subheading}
            </span>
            <h2 className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-ink font-semibold">
              {PERSONAL_INFO.tagline}
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Bottom Area: Identity, Bio & Minimal Action CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="relative z-20 w-full pt-6 sm:pt-8 lg:pt-10 border-t border-borderLine/60 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-5 sm:gap-6 lg:gap-10"
      >
        {/* Supporting Identity & Bio */}
        <div className="max-w-xl min-w-0 space-y-2 sm:space-y-3">
          <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink-muted">
              IDENTITY /
            </span>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-ink font-bold">
              {PERSONAL_INFO.fullName}
            </span>
          </div>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-ink font-normal leading-relaxed">
            {PERSONAL_INFO.bioShort}
          </p>
        </div>

        {/* Action Buttons & Scroll Affordance */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
          <div className="flex flex-col sm:flex-row items-stretch gap-2.5 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={() => scrollTo('projects')}
              className="flex-1 sm:flex-initial px-5 py-2.5 sm:px-7 sm:py-3.5 bg-ink text-surface font-mono text-[11px] sm:text-xs uppercase tracking-widest hover:bg-ink/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowUpRight size={14} />
            </button>

            <button
              onClick={() => scrollTo('about')}
              className="flex-1 sm:flex-initial px-5 py-2.5 sm:px-7 sm:py-3.5 border border-ink text-ink font-mono text-[11px] sm:text-xs uppercase tracking-widest hover:bg-surface active:scale-[0.98] transition-all flex items-center justify-center"
            >
              <span>ABOUT ME</span>
            </button>
          </div>

          <button
            onClick={() => scrollTo('about')}
            className="hidden xl:flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-muted hover:text-ink transition-colors ml-4"
            aria-label="Scroll to explore next section"
          >
            <span>SCROLL</span>
            <ArrowDown size={14} className="animate-bounce" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
