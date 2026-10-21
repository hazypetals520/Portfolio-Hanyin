import React from 'react';
import { ExternalLink, Award, BookOpen, Sparkles, FileText, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, EDUCATION_LIST, ACHIEVEMENT } from '../../data/portfolioData';

export default function AboutMe() {
  return (
    <section id="about" className="relative w-full py-28 lg:py-44 px-8 sm:px-14 lg:px-24 bg-canvas border-b border-borderLine">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header with Enter/Exit Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-borderLine pb-8"
        >
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block">
              01 — DISCOVER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tight text-ink">
              A LITTLE ABOUT ME
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs uppercase tracking-widest text-ink-secondary">
            DESIGN / TECHNOLOGY / PEOPLE
          </p>
        </motion.div>

        {/* Two Column Editorial Swiss Layout with Staggered Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Left Column: Personal Statement & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-6 space-y-12"
          >
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 text-[11px] font-mono uppercase tracking-widest bg-surface border border-borderLine text-ink">
                PROFILE & PERSPECTIVE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink leading-snug">
                Designing at the intersection of logical engineering, empathy, and visual order.
              </h3>
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-light">
                {PERSONAL_INFO.bioLong}
              </p>
              <div className="pt-2">
                <a
                  href={PERSONAL_INFO.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-surface font-mono text-xs uppercase tracking-widest hover:bg-ink/85 active:scale-95 transition-all shadow-sm"
                >
                  <FileText size={14} />
                  <span>VIEW CURRICULUM VITAE</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Why I Design subsection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="p-8 sm:p-10 bg-surface border border-borderLine space-y-4 shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles size={16} className="text-ink" />
                <h4 className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
                  WHY I DESIGN
                </h4>
              </div>
              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-light">
                {PERSONAL_INFO.whyIDesign}
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Structured Education & Achievement Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-6 space-y-14"
          >
            {/* Education Timeline */}
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-borderLine pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-ink-muted flex items-center gap-2">
                  <BookOpen size={14} />
                  02 / EDUCATION
                </span>
                <span className="font-mono text-xs text-ink-secondary">
                  SD — SMK
                </span>
              </div>

              <div className="space-y-8">
                {EDUCATION_LIST.map((edu, idx) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                    className="relative pl-8 border-l-2 border-borderLine hover:border-ink transition-colors group space-y-1.5"
                  >
                    {/* Timeline bullet */}
                    <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-borderLine group-hover:bg-ink transition-colors" />

                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h5 className="font-bold text-base sm:text-lg text-ink group-hover:text-ink transition-colors">
                        {edu.institution}
                      </h5>
                      {edu.period && (
                        <span className="font-mono text-xs text-ink-muted">
                          {edu.period}
                        </span>
                      )}
                    </div>

                    <p className="font-mono text-xs uppercase tracking-wider text-ink-secondary">
                      {edu.level} {edu.major && `— Major: ${edu.major}`}
                    </p>

                    {edu.description && (
                      <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-light pt-1">
                        {edu.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievement Distinct Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 bg-surface border border-borderLine space-y-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-ink-muted flex items-center gap-2">
                  <Award size={16} className="text-sage-dark" />
                  {ACHIEVEMENT.badge}
                </span>
                <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest bg-sage text-ink font-bold">
                  COMPETITION
                </span>
              </div>

              <div className="space-y-2">
                <h5 className="text-xl sm:text-2xl font-black text-ink uppercase tracking-tight">
                  {ACHIEVEMENT.title} — {ACHIEVEMENT.competition}
                </h5>
                {ACHIEVEMENT.description && (
                  <p className="text-sm text-ink-secondary leading-relaxed font-light">
                    {ACHIEVEMENT.description}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-borderLine flex items-center justify-between">
                <a
                  href={ACHIEVEMENT.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink hover:text-ink-secondary font-bold underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
                >
                  <span>VIEW CERTIFICATE</span>
                  <ExternalLink size={13} />
                </a>
                <span className="font-mono text-[11px] text-ink-muted">
                  VERIFIED CREDENTIAL
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
