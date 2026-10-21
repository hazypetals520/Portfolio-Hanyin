import React, { useEffect, useRef } from 'react';
import { ProjectItem } from '../../types';
import { X, ExternalLink, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { InteractiveHoverButton } from './interactive-hover-button';

const FigmaIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalCount?: number;
}

export default function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev?.();
      } else if (e.key === 'ArrowRight') {
        onNext?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onPrev, onNext]);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [project?.id]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-14 sm:px-20 md:px-24 py-6 md:py-10 bg-ink/75 backdrop-blur-sm transition-opacity duration-300 select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Centered Modal Container with Hugging Navigation Arrows */}
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        {/* Previous Project Button — Floating cleanly outside the left edge of the modal */}
        {onPrev && (
          <div className="absolute -left-12 sm:-left-16 md:-left-20 top-1/2 -translate-y-1/2 z-50">
            <InteractiveHoverButton
              direction="left"
              iconOnly
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous project"
              className="h-10 w-10 sm:h-12 sm:w-12 border-borderLine shadow-xl"
            />
          </div>
        )}

        {/* Next Project Button — Floating cleanly outside the right edge of the modal */}
        {onNext && (
          <div className="absolute -right-12 sm:-right-16 md:-right-20 top-1/2 -translate-y-1/2 z-50">
            <InteractiveHoverButton
              direction="right"
              iconOnly
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next project"
              className="h-10 w-10 sm:h-12 sm:w-12 border-borderLine shadow-xl"
            />
          </div>
        )}

        {/* Modal Dialog Card */}
        <div
          ref={modalRef}
          className="relative w-full max-h-[90vh] overflow-y-auto bg-surface text-ink border border-borderLine shadow-2xl rounded-none md:rounded-sm transition-all select-text"
          onClick={(e) => e.stopPropagation()}
        >
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-borderLine bg-surface/95 backdrop-blur px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-sage"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-ink-secondary">
              {project.categoryLabel} · {project.year}
            </span>
            {currentIndex !== undefined && totalCount !== undefined && (
              <span className="font-mono text-[11px] text-ink-muted tracking-widest">
                [0{currentIndex + 1} / 0{totalCount}]
              </span>
            )}
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close project preview"
            className="p-2 border border-borderLine hover:bg-canvas hover:text-ink transition-colors rounded-none focus:outline-none focus:ring-2 focus:ring-ink"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body with subtle animated crossfade on project change */}
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 md:p-10 space-y-8"
        >
          {/* Hero Banner / Preview */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas border border-borderLine">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-contain bg-[#111111]/5"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-ink/90 text-surface p-4 flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-sage">
                CASE STUDY OVERVIEW
              </span>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-sage" />
                <span className="font-mono text-xs">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="border-b border-borderLine pb-6">
            <h2 id="modal-title" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-ink">
              {project.title}
            </h2>
            <p className="mt-2 text-base md:text-lg text-ink-secondary font-light">
              {project.tagline}
            </p>
          </div>

          {/* Core Case Study Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                01 / THE PROBLEM
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-ink/90">
                {project.problemStatement}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                02 / THE SOLUTION
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-ink/90">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Role & Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-borderLine">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-2">
                MY ROLE & CONTRIBUTION
              </h3>
              <p className="text-sm sm:text-base font-medium text-ink">
                {project.myRole}
              </p>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted mb-2">
                TOOLS & TECHNOLOGIES
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 text-xs font-mono uppercase bg-canvas border border-borderLine text-ink"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-borderLine flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.projectUrl && project.projectUrl !== "#" && project.projectUrl !== project.figmaUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-surface font-mono text-xs uppercase tracking-widest hover:bg-ink/85 transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>View Website ↗</span>
                </a>
              )}
              {project.figmaUrl && (
                <a
                  href={project.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-surface font-mono text-xs uppercase tracking-widest hover:bg-ink/85 transition-colors"
                >
                  <FigmaIcon />
                  <span>Open Figma Design ↗</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-ink text-ink font-mono text-xs uppercase tracking-widest hover:bg-canvas transition-colors"
                >
                  <GithubIcon />
                  <span>GitHub Repository ↗</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-ink text-surface font-mono text-xs uppercase tracking-widest hover:bg-ink/80 transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);
}
