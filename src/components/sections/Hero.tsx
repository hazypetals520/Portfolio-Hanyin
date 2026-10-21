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
      className="relative w-full min-h-screen flex flex-col justify-between overflow-x-clip px-4 sm:px-14 lg:px-24 pt-8 sm:pt-12 pb-8 sm:pb-20 bg-canvas border-b border-borderLine"
    >
      {/* 3D Interactive Lanyard — Aligned with main title, strap extends under navbar */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute top-36 sm:top-24 md:-top-20 lg:-top-16 xl:-top-14 right-2 sm:right-12 md:right-32 lg:right-48 xl:right-60 pointer-events-auto z-30"
      >
        <div className="w-[110px] h-[235px] sm:w-[175px] sm:h-[380px] md:w-[250px] md:h-[650px] max-w-full drop-shadow-sm pointer-events-auto">
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

      {/* Top Header Labels */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col sm:flex-row sm:items-start justify-between gap-6 z-10 relative"
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

        <div className="hidden md:block text-right">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block">
            LOCATION
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-ink block font-medium">
            {PERSONAL_INFO.location}
          </span>
        </div>
      </motion.div>

      {/* Stage: Main Typography aligned to the Left with Typewriter Subheading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full my-auto py-8 sm:py-12 md:py-16 flex flex-col items-start justify-center text-left z-20 pointer-events-none select-text"
      >
        <div className="max-w-3xl lg:max-w-4xl text-left leading-none select-text pointer-events-auto">
          {/* Main Title: HANIN'S */}
          <h1 className="text-[clamp(2.4rem,9.5vw,9rem)] font-black uppercase tracking-tighter text-ink leading-[0.88] opacity-95 transition-all select-text pointer-events-auto cursor-pointer">
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

          {/* Dynamic Typewriter: Portfolio / Collection / Selection */}
          <div className="pt-2 sm:pt-4 md:pt-6 flex items-center">
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
              className="font-mono text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-ink"
              cursorClassName="bg-sage-dark w-[2.5px] sm:w-[4px] h-[0.9em]"
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom Area: Identity, Bio & Minimal Action CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="relative z-20 w-full pt-6 sm:pt-10 border-t border-borderLine/60 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 sm:gap-10"
      >
        {/* Supporting Identity & Bio */}
        <div className="max-w-xl min-w-0 space-y-2 sm:space-y-3.5">
          <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1">
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-ink-muted">
              IDENTITY /
            </span>
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-ink font-bold">
              {PERSONAL_INFO.fullName}
            </span>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-ink font-normal leading-relaxed">
            {PERSONAL_INFO.bioShort}
          </p>
        </div>

        {/* Action Buttons & Scroll Affordance */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 w-full lg:w-auto">
          <div className="flex flex-col sm:flex-row items-stretch gap-2.5 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={() => scrollTo('projects')}
              className="flex-1 sm:flex-initial px-5 py-3 sm:px-7 sm:py-3.5 bg-ink text-surface font-mono text-[11px] sm:text-xs uppercase tracking-widest hover:bg-ink/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowUpRight size={14} />
            </button>

            <button
              onClick={() => scrollTo('about')}
              className="flex-1 sm:flex-initial px-5 py-3 sm:px-7 sm:py-3.5 border border-ink text-ink font-mono text-[11px] sm:text-xs uppercase tracking-widest hover:bg-surface active:scale-[0.98] transition-all flex items-center justify-center"
            >
              <span>ABOUT ME</span>
            </button>
          </div>

          <button
            onClick={() => scrollTo('about')}
            className="hidden xl:flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-muted hover:text-ink transition-colors ml-6"
            aria-label="Scroll to explore next section"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} className="animate-bounce" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
