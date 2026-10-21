import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About Me', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      scrolled ? 'bg-canvas/90 backdrop-blur-md border-b border-borderLine shadow-sm' : 'bg-canvas border-b border-borderLine/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-14 lg:px-24 h-16 sm:h-18 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-ink"
        >
          <span className="font-black text-lg sm:text-xl tracking-tighter text-ink transition-transform group-hover:scale-105">
            {PERSONAL_INFO.monogram}
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage group-hover:bg-ink transition-colors"></span>
          <span className="hidden md:inline-block font-mono text-[11px] uppercase tracking-widest text-ink-muted ml-1">
            / 2026
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`group relative text-xs font-mono uppercase tracking-widest py-1 transition-colors ${
                  isActive ? 'text-ink font-semibold' : 'text-ink-secondary hover:text-ink'
                }`}
              >
                <span>{item.label}</span>
                {/* Understated Swiss indicator line */}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] transition-all duration-300 ${
                    isActive ? 'bg-ink scale-x-100' : 'bg-transparent scale-x-0 group-hover:bg-borderLine group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Resume Quick Link */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-widest border border-borderLine text-ink hover:border-ink hover:bg-surface transition-all"
          >
            <span>CV</span>
            <ArrowUpRight size={13} className="text-ink-secondary" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-ink p-1 focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-borderLine bg-surface/98 backdrop-blur px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`font-mono text-sm uppercase tracking-widest py-2 px-3 flex items-center justify-between border-l-2 transition-colors ${
                    isActive ? 'border-ink bg-canvas text-ink font-bold' : 'border-transparent text-ink-secondary hover:text-ink hover:bg-canvas/50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sage" />}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-borderLine flex items-center justify-between text-xs font-mono">
            <span className="text-ink-muted">{PERSONAL_INFO.status}</span>
            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-ink font-bold"
            >
              <span>CV</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
