import React from 'react';
import { motion } from 'motion/react';
import { Shield, Terminal, Network, Lock, Cpu, CheckCircle2, Building2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';

export default function Experience() {
  const exp = EXPERIENCE_DATA[0];

  return (
    <section id="experience" className="relative w-full py-28 lg:py-44 px-8 sm:px-14 lg:px-24 bg-surface border-b border-borderLine">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header with Minimal Swiss Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-borderLine pb-8"
        >
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block">
              02 — EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tight text-ink">
              INDUSTRIAL EXPERIENCE
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right font-mono text-xs uppercase tracking-widest text-ink-secondary space-y-1">
            <p>ID-NETWORKERS × SMKN 7 SEMARANG</p>
            <p className="text-ink-muted text-[11px]">CYBERSECURITY INDUSTRIAL PROGRAM & LABS</p>
          </div>
        </motion.div>

        {/* Two-Column Swiss Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">
          {/* Left Column: Organization & Program Anchor Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 sm:p-10 bg-canvas border border-borderLine space-y-8 shadow-sm">
              {/* Logo & Badge Row */}
              <div className="flex items-start justify-between gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#B50014] p-2 flex items-center justify-center shrink-0 border border-borderLine/30 shadow-sm">
                  <img
                    src={exp.logo}
                    alt={exp.organization}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-right space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest bg-sage text-ink font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink animate-pulse" />
                    {exp.badge}
                  </span>
                  <p className="font-mono text-xs text-ink-muted block">
                    {exp.period}
                  </p>
                </div>
              </div>

              {/* Title & Host info */}
              <div className="space-y-3 border-b border-borderLine pb-6">
                <div className="space-y-1">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted block">
                    PROGRAM / ROLE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-ink">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-col gap-1 pt-1 font-mono text-xs text-ink-secondary">
                  <span className="flex items-center gap-2 font-bold text-ink">
                    <Building2 size={14} className="text-ink-muted" />
                    {exp.organization}
                  </span>
                  <span className="text-ink-muted">
                    Partner: {exp.partner}
                  </span>
                </div>
              </div>

              {/* Overview Narrative */}
              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-light">
                {exp.overview}
              </p>

              {/* Tags Grid */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted block">
                  FOCUS TOPICS & DOMAINS
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono uppercase bg-surface border border-borderLine text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: In-Depth Curriculum & Labs Exploration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center justify-between border-b border-borderLine pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-muted flex items-center gap-2">
                <Shield size={14} className="text-sage-dark" />
                LEARNING TRACKS & LABS EXPLORATION
              </span>
              <span className="font-mono text-xs text-ink-secondary uppercase">
                THEORY TO APPLIED PRACTICE
              </span>
            </div>

            {/* Structured Module Cards */}
            <div className="space-y-5">
              {exp.keyLearnings.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                  className="p-7 sm:p-8 bg-canvas border border-borderLine hover:border-ink transition-colors group space-y-3 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {idx === 0 && <Lock size={18} className="text-ink group-hover:scale-110 transition-transform" />}
                      {idx === 1 && <Terminal size={18} className="text-ink group-hover:scale-110 transition-transform" />}
                      {idx === 2 && <Network size={18} className="text-ink group-hover:scale-110 transition-transform" />}
                      <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                        MODULE 0{idx + 1}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-sage-dark font-semibold">
                      VERIFIED CURRICULUM
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-ink group-hover:text-ink">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-light">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Industrial Class Takeaway Footer Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="p-6 bg-surface border border-borderLine flex items-start gap-4"
            >
              <Cpu size={20} className="text-ink shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h5 className="font-mono text-xs uppercase tracking-widest font-bold text-ink">
                  VOCATIONAL × INDUSTRIAL SYNERGY
                </h5>
                <p className="text-xs text-ink-secondary leading-relaxed font-light">
                  Direct hands-on experience under ID-Networkers certified mentors ensures technical proficiency aligning with modern security operations centers (SOC), enterprise network hardening, and proactive vulnerability awareness.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
