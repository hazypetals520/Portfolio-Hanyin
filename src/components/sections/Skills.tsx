import React, { useState } from 'react';
import { SKILLS_UIUX, SKILLS_PROGRAMMING, TECH_STACK_TICKER } from '../../data/portfolioData';
import { Layout, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GithubIcon,
  VercelIcon,
  ReactIcon,
  JavascriptIcon,
  CssIcon,
  TailwindIcon,
  FigmaIcon,
  ThreejsIcon
} from '../ui/Icons';

const getTechIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'github':
      return <GithubIcon size={18} />;
    case 'vercel':
      return <VercelIcon size={16} />;
    case 'react':
      return <ReactIcon size={18} />;
    case 'javascript':
    case 'js':
      return <JavascriptIcon size={18} />;
    case 'css':
      return <CssIcon size={18} />;
    case 'tailwind css':
      return <TailwindIcon size={18} />;
    case 'figma':
      return <FigmaIcon size={18} />;
    case 'three.js':
      return <ThreejsIcon size={18} />;
    default:
      return null;
  }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'uiux' | 'programming'>('uiux');

  const currentSkills = activeCategory === 'uiux' ? SKILLS_UIUX : SKILLS_PROGRAMMING;

  return (
    <section id="skills" className="relative w-full py-28 lg:py-44 bg-canvas border-b border-borderLine overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 space-y-20">
        {/* Section Heading with Enter/Exit Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-borderLine pb-8"
        >
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block">
              03 — CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tight text-ink">
              TOOLS, THINKING & EXECUTION
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs uppercase tracking-widest text-ink-secondary">
            PRECISION · SYSTEMS · CRAFT
          </p>
        </motion.div>

        {/* 12-Column Editorial Grid: Compact Skill Card (Left) + Refined Description (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
          {/* Left Column: Category Switcher & Skill Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Minimalist Switcher Tabs */}
            <div className="flex items-center gap-3">
              <button
                role="tab"
                aria-selected={activeCategory === 'uiux'}
                aria-controls="skills-panel"
                onClick={() => setActiveCategory('uiux')}
                className={`px-5 py-2.5 font-mono text-xs uppercase tracking-widest border transition-all flex items-center gap-2 ${
                  activeCategory === 'uiux'
                    ? 'bg-ink text-surface border-ink font-bold shadow-sm'
                    : 'bg-surface text-ink-secondary border-borderLine hover:text-ink hover:border-ink'
                }`}
              >
                <Layout size={13} />
                <span>UI/UX DESIGN</span>
              </button>

              <button
                role="tab"
                aria-selected={activeCategory === 'programming'}
                aria-controls="skills-panel"
                onClick={() => setActiveCategory('programming')}
                className={`px-5 py-2.5 font-mono text-xs uppercase tracking-widest border transition-all flex items-center gap-2 ${
                  activeCategory === 'programming'
                    ? 'bg-ink text-surface border-ink font-bold shadow-sm'
                    : 'bg-surface text-ink-secondary border-borderLine hover:text-ink hover:border-ink'
                }`}
              >
                <Code size={13} />
                <span>PROGRAMMING</span>
              </button>
            </div>

            {/* Smaller, More Compact Skills Card with Animated Bars */}
            <div
              id="skills-panel"
              role="tabpanel"
              className="bg-surface border border-borderLine p-6 sm:p-10 space-y-7 shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-borderLine pb-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                  {activeCategory === 'uiux' ? 'DESIGN COMPETENCIES' : 'TECHNICAL COMPETENCIES'}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-sage-dark font-medium">
                  EVALUATED PROFICIENCY
                </span>
              </div>

              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6"
                  >
                    {currentSkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-baseline font-mono text-xs sm:text-sm">
                          <span className="font-bold text-ink uppercase tracking-wider">
                            {skill.name}
                          </span>
                          <span className="font-bold text-ink font-mono text-xs sm:text-sm">
                            {skill.percentage}%
                          </span>
                        </div>

                        {/* Animated Minimalist Progress Bar */}
                        <div className="w-full h-1.5 bg-canvas border border-borderLine overflow-hidden relative">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                            className="h-full bg-ink"
                            role="progressbar"
                            aria-valuenow={skill.percentage}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`${skill.name} proficiency`}
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="pt-4 border-t border-borderLine flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-ink-muted">
                <span>METRIC: CONTINUOUS VOCATIONAL ASSESSMENT</span>
                <span>STANDARD: SMKN 7 SEMARANG</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Description with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 lg:pt-14 space-y-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block">
                    {activeCategory === 'uiux' ? 'METHODOLOGY / DESIGN' : 'EXECUTION / CODE'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-ink leading-snug">
                    {activeCategory === 'uiux'
                      ? 'Balancing visual empathy with modular design systems.'
                      : 'Bridging design intent into functional, performant code.'}
                  </h3>
                  <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-light">
                    {activeCategory === 'uiux'
                      ? 'Every interface begins with user understanding. Through structured wireframing and comprehensive design tokens, I focus on minimizing cognitive friction and creating memorable experiences.'
                      : 'My training in SIJA at SMK Negeri 7 Semarang provides a grounded foundation in software logic. I leverage modern front-end tooling and AI prompting to build clean, responsive, and accessible digital products.'}
                  </p>
                </div>

                {/* Subtle Key Focus Items */}
                <div className="pt-4 border-t border-borderLine space-y-2.5 font-mono text-xs text-ink-secondary">
                  {activeCategory === 'uiux' ? (
                    <>
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                        <span>Human-Centered Wireframing & Flow Analysis</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                        <span>Design Token Governance & Style Guides</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                        <span>Clarity, Hierarchy & Accessibility First</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                        <span>Component-Driven Frontend Architecture</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                        <span>Prompt Architecture & Workflow Iteration</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                        <span>Cross-Browser & Device Responsiveness</span>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Area A: Technology Ticker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full mt-28 pt-14 border-t border-borderLine"
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-14 lg:px-24 mb-6">
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
            TECH STACK & TOOLS TICKER /
          </span>
        </div>

        <div className="w-full overflow-hidden bg-surface py-6 border-y border-borderLine flex whitespace-nowrap select-none">
          <div className="flex animate-ticker gap-16 sm:gap-20 items-center">
            {[...TECH_STACK_TICKER, ...TECH_STACK_TICKER, ...TECH_STACK_TICKER].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-widest text-ink group hover:text-ink/70 transition-colors"
              >
                <span className="text-ink flex items-center justify-center shrink-0">
                  {getTechIcon(tech.name)}
                </span>
                <span className="font-bold">{tech.name}</span>
                <span className="text-[10px] text-ink-muted font-normal">
                  ({tech.category})
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
