import React, { useState } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../data/portfolioData';
import { Mail, Phone, User, FileText, ArrowUpRight, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';
import {
  GithubIcon,
  SpotifyIcon,
  InstagramIcon,
  DiscordIcon,
  WhatsAppIcon
} from '../ui/Icons';

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'github':
      return <GithubIcon size={20} />;
    case 'spotify':
      return <SpotifyIcon size={20} />;
    case 'instagram':
      return <InstagramIcon size={20} />;
    case 'discord':
      return <DiscordIcon size={20} />;
    default:
      return null;
  }
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative w-full py-28 lg:py-44 px-8 sm:px-14 lg:px-24 bg-surface border-b border-borderLine">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-borderLine pb-8"
        >
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block mb-2">
              05 — CONNECT
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-ink leading-[1.05]">
              HAVE AN IDEA?<br />LET'S CONNECT.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs uppercase tracking-widest text-ink-secondary max-w-sm leading-relaxed">
            I'm always interested in learning, collaborating, and exploring ideas that bring design and technology together.
          </p>
        </motion.div>

        {/* Contact Content Grid with Generous Gaps and Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Main Direct Channels (Left) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Primary Action Mail Card */}
            <div className="p-8 sm:p-12 bg-canvas border border-borderLine space-y-8 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-ink-muted flex items-center gap-2">
                  <Mail size={16} />
                  DIRECT EMAIL
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-sage animate-pulse" />
              </div>

              <div className="space-y-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="block whitespace-nowrap text-[clamp(0.7rem,3.5vw,1.5rem)] font-black tracking-tight text-ink hover:text-ink-secondary transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
                <p className="text-sm text-ink-secondary font-light">
                  Open for internship, collaboration, UI/UX discussions, or general inquiries.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-borderLine">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-7 py-3.5 bg-ink text-surface font-mono text-xs uppercase tracking-widest hover:bg-ink/90 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Mail size={16} />
                  <span>GET IN TOUCH</span>
                  <ArrowUpRight size={14} />
                </a>

                <button
                  onClick={copyEmail}
                  className="px-6 py-3.5 border border-borderLine bg-surface text-ink font-mono text-xs uppercase tracking-widest hover:border-ink transition-all flex items-center gap-2"
                >
                  {copied ? <Check size={14} className="text-sage-dark" /> : <Copy size={14} />}
                  <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}</span>
                </button>
              </div>
            </div>

            {/* Contact Person & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-7 border border-borderLine bg-canvas space-y-2 shadow-sm">
                <span className="font-mono text-xs uppercase tracking-widest text-ink-muted flex items-center gap-2">
                  <User size={16} />
                  CONTACT PERSON
                </span>
                <p className="font-bold text-base text-ink">
                  {PERSONAL_INFO.contactPerson}
                </p>
                <span className="font-mono text-xs text-ink-secondary block">
                  Aspiring UI/UX Designer
                </span>
              </div>

              <div className="p-7 border border-borderLine bg-canvas space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-ink-muted flex items-center gap-2">
                    <Phone size={16} />
                    PHONE / WHATSAPP
                  </span>
                  <WhatsAppIcon size={16} className="text-ink-muted" />
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="font-bold text-base text-ink hover:underline block"
                >
                  {PERSONAL_INFO.phoneDisplay}
                </a>
                <span className="font-mono text-xs text-ink-secondary block">
                  GMT+7 (Indonesia)
                </span>
              </div>
            </div>

            {/* CV Download Banner */}
            <div className="p-7 border border-borderLine bg-canvas flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center gap-4">
                <FileText size={24} className="text-ink shrink-0" />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-ink">
                    CURRICULUM VITAE
                  </h4>
                  <p className="font-mono text-xs text-ink-secondary">
                    Updated overview of education, skills, and achievements
                  </p>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-ink text-surface font-mono text-xs uppercase tracking-widest hover:bg-ink/90 active:scale-95 transition-all text-center inline-flex items-center justify-center gap-2"
              >
                <FileText size={15} />
                <span>VIEW CV / RESUME</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Social Platforms & Networks (Right) with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="border border-borderLine bg-canvas p-8 sm:p-10 space-y-6 shadow-sm">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                PLATFORMS & SOCIAL NETWORKS
              </h3>

              <div className="divide-y divide-borderLine">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-5 flex items-center justify-between group hover:pl-2 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-ink flex items-center justify-center shrink-0">
                        {getSocialIcon(link.platform)}
                      </span>

                      <div>
                        <span className="font-bold text-base uppercase text-ink group-hover:text-ink transition-colors block">
                          {link.platform}
                        </span>
                        <span className="font-mono text-xs text-ink-secondary block mt-0.5">
                          {link.label}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight size={16} className="text-ink-muted group-hover:text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-7 border border-borderLine bg-canvas text-xs font-mono space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-ink font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-sage" />
                STATUS: AVAILABLE FOR NEW OPPORTUNITIES
              </div>
              <p className="text-ink-secondary leading-relaxed font-light">
                Interested in student internships, front-end implementation projects, design system audits, and hackathon collaborations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
