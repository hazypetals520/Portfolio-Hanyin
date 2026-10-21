import React, { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '../../data/projectsData';
import { ProjectItem } from '../../types';
import ProjectModal from '../ui/ProjectModal';
import GlassFolder from '../ui/glass-folder-cards';
import { FolderFile } from '../ui/glass-folder-cards';
import { motion } from 'motion/react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [folderWidth, setFolderWidth] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 380 ? 285 : 330
  );

  useEffect(() => {
    const handleResize = () => {
      setFolderWidth(window.innerWidth < 380 ? 285 : window.innerWidth < 420 ? 305 : 330);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentIndex = selectedProject
    ? PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const handlePrevProject = () => {
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    setSelectedProject(PROJECTS_DATA[prevIndex]);
  };

  const handleNextProject = () => {
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
    setSelectedProject(PROJECTS_DATA[nextIndex]);
  };

  // Map files in the folders to actual projects for instant preview on click
  const handleFileSelect = (file: FolderFile) => {
    const match = PROJECTS_DATA.find((p) =>
      p.title.toLowerCase() === file.name.toLowerCase() ||
      file.name.toLowerCase().includes(p.title.toLowerCase()) ||
      p.title.toLowerCase().includes(file.name.toLowerCase()) ||
      file.name.toLowerCase().includes(p.id.split('-')[0])
    );

    if (match) {
      setSelectedProject(match);
    } else if (file.href) {
      window.open(file.href, "_blank", "noopener,noreferrer");
    } else {
      setSelectedProject(PROJECTS_DATA[0]);
    }
  };

  return (
    <section id="projects" className="relative w-full py-16 sm:py-28 lg:py-40 px-4 sm:px-14 lg:px-24 bg-canvas border-b border-borderLine">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20">
        {/* Section Header with Enter/Exit Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-borderLine pb-6 sm:pb-8"
        >
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block">
              04 — PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tight text-ink">
              SELECTED WORK
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right font-mono text-xs uppercase tracking-widest text-ink-secondary space-y-1">
            <p>DESIGN ARTIFACTS & CASE STUDY ARCHIVE</p>
            <p className="text-ink-muted text-[11px]">HOVER TO LEAN · CLICK TO FAN & INSPECT</p>
          </div>
        </motion.div>

        {/* Hero Showcase: 3D Interactive Glass Folders with Real Cover Artworks */}
        <div className="py-6 sm:py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 xl:gap-24 items-end justify-items-center">
            {/* Folder 1: UI/UX Projects with User's Uploaded Cover Pick */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex flex-col items-center space-y-6"
            >
              <GlassFolder
                label="UI/UX Projects"
                meta="4 Projects"
                art="aurora"
                seed={7}
                action="more"
                labelPlacement="bottom-left"
                width={folderWidth}
                onFileSelect={handleFileSelect}
                files={[
                  {
                    name: "The Cosmic Journey",
                    meta: "Educational Space Web",
                    image: "/images/projects/cosmic-journey.jpg"
                  },
                  {
                    name: "IoT RFID Attendance Dashboard",
                    meta: "Student Monitoring",
                    image: "/images/projects/rfid-attendance.png"
                  },
                  {
                    name: "KEMBALI",
                    meta: "Donation Platform",
                    image: "/images/projects/kembali-donation.png"
                  },
                  {
                    name: "SIRAM",
                    meta: "Smart Farming IoT",
                    image: "/images/projects/siram-farming.png"
                  },
                ]}
                menu={[
                  { label: "Open Figma Archive" },
                  { label: "View Design Systems" },
                ]}
              />
              <div className="text-center space-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold block">
                  UI/UX PROJECTS
                </span>
                <span className="font-mono text-[11px] text-ink-muted block">
                  Click folder or files to inspect case studies & Figma
                </span>
              </div>
            </motion.div>

            {/* Folder 2: Programming */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col items-center space-y-6"
            >
              <GlassFolder
                label="Programming"
                meta="3 Projects"
                art="none"
                action="more"
                labelPlacement="bottom-left"
                width={folderWidth}
                onFileSelect={handleFileSelect}
                files={[
                  {
                    name: "Unsolved Math Case",
                    meta: "Interactive Math Quiz",
                    image: "/images/projects/unsolved-math-case.png",
                  },
                  {
                    name: "KILAS BANGSA",
                    meta: "Indonesia SWOT Web",
                    image: "/images/projects/kilas-bangsa.png",
                  },
                  {
                    name: "Old Portfolio Website",
                    meta: "Learning & Growth Archive",
                    image: "/images/projects/old-portfolio.png",
                  },
                ]}
                menu={[
                  { label: "Inspect GitHub Repos" },
                  { label: "View Live Deployments" },
                ]}
              />
              <div className="text-center space-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold block">
                  PROGRAMMING
                </span>
                <span className="font-mono text-[11px] text-ink-muted block">
                  Interactive Math Quiz, Kilas Bangsa SWOT, Old Portfolio
                </span>
              </div>
            </motion.div>

            {/* Folder 3: Competition & Accolades */}
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex flex-col items-center space-y-6"
            >
              <GlassFolder
                label="Competitions & Credentials"
                meta="2 Honors"
                tone="dark"
                art="ember"
                seed={19}
                action="more"
                labelPlacement="bottom-left"
                width={folderWidth}
                onFileSelect={handleFileSelect}
                files={[
                  {
                    name: "3rd Winner Clash of Minds",
                    meta: "Logic & Problem Solving",
                    image: "/images/projects/clash-of-minds-cert.png",
                    href: "https://drive.google.com/file/d/1Qvvkfu_khVcaMZulkQeHaIu2MRtMRT9F/view?usp=sharing"
                  },
                  {
                    name: "IT Essentials Cisco Networking",
                    meta: "Cisco Networking Academy",
                    image: "/images/projects/cisco-it-essentials.png",
                    href: "https://drive.google.com/file/d/1Qvvkfu_khVcaMZulkQeHaIu2MRtMRT9F/view?usp=sharing"
                  },
                ]}
                menu={[
                  { label: "View Google Drive Certificate" },
                  { label: "Cisco Networking Program" },
                ]}
              />
              <div className="text-center space-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold block">
                  COMPETITIONS & CREDENTIALS
                </span>
                <span className="font-mono text-[11px] text-ink-muted block">
                  Clash of Minds (3rd Winner) & Cisco IT Essentials
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Project Direct Index with Clean Motion & Real Links */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pt-16 border-t border-borderLine space-y-6"
        >
          <div className="flex items-center justify-between text-xs font-mono text-ink-muted uppercase tracking-widest">
            <span>INDEX / ALL PROJECTS</span>
            <span>CLICK TO OPEN CASE STUDY & FIGMA</span>
          </div>

          <div className="divide-y divide-borderLine">
            {PROJECTS_DATA.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                onClick={() => setSelectedProject(proj)}
                className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group cursor-pointer hover:bg-surface/50 px-3 transition-colors"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-xs text-ink-muted">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-ink group-hover:text-ink uppercase tracking-tight">
                      {proj.title}
                    </h4>
                    <p className="text-xs font-mono text-ink-secondary mt-0.5">
                      {proj.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 font-mono text-xs text-ink-secondary">
                  <span className="uppercase text-ink-muted">{proj.categoryLabel}</span>
                  <span className="hidden sm:inline-block">·</span>
                  <span>{proj.year}</span>
                  <span className="text-ink group-hover:translate-x-1 transition-transform">↗</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Accessible Project Preview Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onPrev={handlePrevProject}
        onNext={handleNextProject}
        currentIndex={currentIndex}
        totalCount={PROJECTS_DATA.length}
      />
    </section>
  );
}
